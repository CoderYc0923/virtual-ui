<template>
  <div :class="[ns.base()]" class="overflow-hidden relative" ref="barrageRef">
    <div
      ref="dmContainerRef"
      :class="['barrage-container', { show: !hidden }, { paused: paused }]"
      class="absolute left-0 top-0 w-full h-full opacity-0"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  toRefs,
  computed,
  nextTick,
  render,
  h,
  onBeforeUnmount,
} from "vue";
import { Barrage, Props, BarrageChannel } from "./barrage.help";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("barrage");

const slots = defineSlots();
const props = withDefaults(defineProps<Props>(), {
  channels: 0,
  autoplay: true,
  loop: true,
  useSlot: false,
  useSuspendSlot: false,
  debounce: 100,
  speeds: 100,
  randomChannel: false,
  fontSize: 18,
  top: 10,
  right: 10,
  isSuspend: false,
  extraStyle: "",
  opacity: 1,
});
const emit = defineEmits<{
  (e: "update:barrage", barrage: Barrage): void;
  (e: "list-end"): void;
  (e: "play-end", index: number): void;
  (e: "dm-click", danmu: Barrage, index: number): void;
}>();

const {
  barrage,
  channels,
  autoplay,
  loop,
  useSlot,
  debounce,
  speeds,
  randomChannel,
  fontSize,
  top,
  right,
  isSuspend,
  extraStyle,
  useSuspendSlot,
  opacity,
} = toRefs(props);
const barrageRef = ref();
const dmContainerRef = ref();
const containerWidth = ref<number>(0);
const containerHeight = ref<number>(0);

const timer = ref();
const paused = ref<boolean>(false);
const index = ref<number>(0);
const insertIndex = ref<number>(0);
const insertList = ref<Barrage[]>([]);
const barrageHeight = ref<number>(0);
const calcChannels = ref<number>(0);
const suspendRight = ref<number>(10);
const suspendList = ref<HTMLElement[]>([]);
const danChannel = ref<BarrageChannel>({});
const hidden = ref<boolean>(false);

const barrageList = computed<Barrage[]>({
  get: () => barrage.value,
  set: (value) => {
    emit("update:barrage", value);
  },
});
/* const barrageList = ref<Barrage[]>([]); */

/* watch(
  () => barrage.value,
  (value: Barrage[]) => {
    barrageList.value = value;
  },
  {
    deep: true,
    immediately: true,
  }
); */

const dmChannels = computed<number>(() => channels.value || calcChannels.value);

//获取容器宽高
const initCore = () => {
  containerWidth.value = barrageRef.value.offsetWidth;
  containerHeight.value = barrageRef.value.offsetHeight;
};

//触摸悬浮
const initSuspendEvent = () => {
  let suspendBarrage: HTMLElement[] = [];
  dmContainerRef.value.addEventListener("mouseout", (e: any) => {
    let target = e.target as EventTarget & HTMLElement;
    if (!target.className.includes("dm")) {
      target = target.closest(".dm") || target;
    }
    if (!target.className.includes("dm")) return;
    const suspend = target.getElementsByClassName(
      "dm-suspend"
    )[0] as HTMLElement;
    if (isSuspend.value && suspend) {
      suspend.style.display = "none";
    }
    target.classList.remove("pause");
    suspendBarrage.forEach((item) => {
      item.classList.remove("pause");
    });
    suspendBarrage = [];
  });
};

const play = () => {
  paused.value = false;
  if (!timer.value && barrageList.value.length) {
    timer.value = setInterval(() => draw(), debounce.value);
  }
};

const draw = () => {
  let len = barrageList.value.length;
  if (!paused.value && len) {
    if (index.value > len - 1 + insertIndex.value) {
      const screenBarrages = dmContainerRef.value.children.length;
      if (loop.value) {
        if (index.value >= len) {
          emit("list-end");
          index.value = 0;
        }
        insert();
      } else {
        if (screenBarrages < index.value) clearTimer();
      }
    } else {
      insert();
    }
  }
};

//监听鼠标移出当前元素，取消弹幕悬浮
const cancelSuspend = () => {
  document.body.addEventListener(
    "mouseout",
    (e) => {
      e.stopImmediatePropagation();
      if (suspendList.value.length) {
        suspendList.value.map((el) => {
          el.classList.remove("pause");
        });
        suspendList.value = [];
      }
    },
    { once: true }
  );
};

/**
 * 创建dom节点
 * @param {Barrage} barrage 当前弹幕数据
 * @param {number} index 当前弹幕下标
 * @return dom节点
 */
const createVDom = (barrage: Barrage, index: number) => {
  const div = ref<HTMLDivElement>(document.createElement("div"));
  render(
    h(
      "div",
      {
        onClick: () => {
          emit("dm-click", barrage, index);
        },
        onmouseover: (e: {
          target: { closest: (arg0: string) => HTMLElement; childNodes: any };
        }) => {
          if (!isSuspend.value) return;
          const dm: HTMLElement = e.target.closest(".dm");
          if (!dm) return;
          const suspend = dm.getElementsByClassName(
            "dm-suspend"
          )[0] as HTMLElement;
          if (isSuspend.value && suspend) suspend.style.display = "flex";
          dm.classList.add("pause");
          if (!suspendList.value.includes(dm)) {
            suspendList.value.push(dm);
            cancelSuspend();
          }
        },
        onmouseout: (e: {
          stopImmediatePropagation: () => void;
          target: { closest: (arg0: string) => HTMLElement };
        }) => {
          if (!isSuspend.value) return;
          const dm: HTMLElement = e.target.closest(".dm");
          if (!dm) return;
          const suspend = dm.getElementsByClassName(
            "dm-suspend"
          )[0] as HTMLElement;
          if (isSuspend.value && suspend) {
            suspend.style.display = "none";
          }
          dm.classList.remove("pause");
          if (suspendList.value.includes(dm)) {
            const index: number = suspendList.value.indexOf(dm);
            suspendList.value.splice(index, 1);
          }
        },
      },
      [
        slots.dm &&
          slots.dm({
            barrage,
            index,
          }),
      ]
    ),
    div.value as HTMLDivElement
  );
  return div.value.childNodes[0];
};

/**
 * 创建suspend dom节点
 * @param {Barrage} barrage 当前弹幕数据
 * @param {number} index 当前弹幕下标
 * @return dom节点
 */
const createSuspendVDom = (barrage: Barrage, index: number) => {
  const div = ref<HTMLElement>(document.createElement("div"));
  render(
    h("div", {}, [
      slots.suspend &&
        slots.suspend({
          barrage,
          index,
        }),
    ]),
    div.value as HTMLElement
  );

  return div.value.childNodes[0];
};

/**
 * 获取弹幕右侧到屏幕右侧的距离
 * @param {HTMLDivElement} el 当前弹幕
 * @return {number} 当前弹幕飘到的位置
 */
function getDanmuRight(el: HTMLDivElement): number {
  const elWidth = el.offsetWidth || parseInt(el.style.width);
  /**
   * getBoundingClientRect().right 当前元素的右边到弹幕区域最左侧的距离
   * elRight: 当前弹幕距离左侧的距离 ==> 当前弹幕整体宽度距离最左侧的距离 或 当前弹幕区域距离的宽度加上当前弹幕的宽度
   */
  const elRight =
    el.getBoundingClientRect().right ||
    dmContainerRef.value.getBoundingClientRect().right + elWidth;
  return dmContainerRef.value.getBoundingClientRect().right - elRight;
}

/**
 * 获取该弹幕要出现的轨道index
 * @param {HTMLDivElement} el 弹幕dom
 * @return {number}
 */
const getChannelIndex = (el: HTMLDivElement): number => {
  let _channels = [...Array(dmChannels.value).keys()];
  if (randomChannel.value)
    _channels = _channels.sort(() => 0.5 - Math.random());
  for (const i of _channels) {
    const items = danChannel.value[i];
    if (items && items.length) {
      for (let j = 0; j < items.length; j++) {
        /**
         * 安全距离判断
         * el.offsetWidth 当前的弹幕的宽度
         * items[j].offsetWidth 当前该轨道内弹幕j的宽度
         * 如果弹幕j距离右侧的距离 小于 (当前弹幕width-弹幕j的width)*0.88 ---> 不添加到该轨道
         * 弹幕j距离右侧距离 小于 0 ---> 不添加到该轨道
         *
         * 没有任何一条轨道可加入 返回-1
         */
        const dmRight = getDanmuRight(items[j]) - suspendRight.value;
        if (
          dmRight <= (el.offsetWidth - items[j].offsetWidth) * 0.88 ||
          dmRight <= 0
        )
          break;
        if (j === items.length - 1) {
          danChannel.value[i].push(el);
          el.addEventListener(
            "animationend",
            () => danChannel.value[i].splice(0, 1),
            { once: true }
          );
          return i % dmChannels.value;
        }
      }
    } else {
      danChannel.value[i] = [el];
      el.addEventListener(
        "animationend",
        () => danChannel.value[i].splice(0, 1),
        { once: true }
      );
      return i % dmChannels.value;
    }
  }
  return -1;
};

/**
 * 插入弹幕 可暴露至外部，'实时'插入 不进行数据绑定 场景：不循环且弹幕播放完成后的情况下
 * @param {Barrage} dm 播放的弹幕
 */
const insert = (dm?: Barrage) => {
  if (dm) insertList.value.push(dm);
  //获取即将播放的弹幕下标
  const _index: number = loop.value
    ? index.value % barrageList.value.length
    : index.value - insertIndex.value;
  //获取当前播放弹幕
  let _barrage: Barrage = dm || barrageList.value[_index];
  //当前取值是否是外部插入的弹幕
  let isOuterDm = false;
  if (insertList.value.length > insertIndex.value) {
    _barrage = insertList.value[insertIndex.value];
    isOuterDm = true;
  }

  let el: HTMLDivElement = document.createElement("div");
  let sel: HTMLDivElement = document.createElement("div");
  if (useSlot.value) el = createVDom(_barrage, _index) as HTMLDivElement;
  else {
    el.innerHTML = _barrage as string;
    el.setAttribute("style", extraStyle.value);
    el.style.fontSize = `${fontSize.value}px`;
    el.style.lineHeight = `${fontSize.value}px`;
  }
  el.style.opacity = "0";
  el.classList.add("dm");

  if (isSuspend.value && useSuspendSlot.value) {
    sel = createSuspendVDom(_barrage, _index).childNodes[1] as HTMLDivElement;
    sel.classList.add("dm-suspend");
    sel.style.background = "transparent";
    sel.style.display = "none";
    if (useSlot.value)
      sel && el.childNodes[1] && el.childNodes[1].appendChild(sel);
    else sel && el.appendChild(sel);
  }

  dmContainerRef.value && dmContainerRef.value.appendChild(el);
  nextTick(() => {
    if (!barrageHeight.value) barrageHeight.value = el.offsetHeight;
    if (!channels.value)
      calcChannels.value = Math.floor(
        containerHeight.value / (barrageHeight.value + top.value)
      );
    suspendRight.value = sel.offsetWidth + 10 + right.value;
    let channelIndex = getChannelIndex(el);
    if (channelIndex >= 0) {
      const width = el.offsetWidth;
      const height = barrageHeight.value;
      el.classList.add("move");
      el.dataset.index = `${_index}`;
      el.style.top = channelIndex * (height + top.value) + "px";
      el.style.width = width + "px";
      el.style.opacity = `${opacity.value}`;
      el.style.setProperty(
        "--dm-scroll-width",
        `-${containerWidth.value + width * 2}px`
      );
      el.style.left = `${containerWidth.value}px`;
      el.style.animationDuration = `${containerWidth.value / speeds.value}s`;
      el.addEventListener(
        "animationend",
        () => {
          if (
            Number(el.dataset.index) === barrageList.value.length - 1 &&
            !loop.value
          ) {
            emit("play-end", Number(el.dataset.index));
          }
          dmContainerRef.value && dmContainerRef.value.removeChild(el);
        },
        { once: true }
      );
      index.value++;
      if (dm || isOuterDm) {
        paused.value = false;
        insertIndex.value++;
      }
    } else {
      // console.log("channelIndex", channelIndex);
      // debugger;
      dmContainerRef.value.removeChild(el);
    }
  });
};

const clearTimer = () => {
  clearInterval(timer.value);
  timer.value = null;
};

const clear = () => {
  danChannel.value = {};
  dmContainerRef.value.innerHTML = "";
  paused.value = true;
  hidden.value = false;
  clearTimer();
  index.value = 0;
  suspendList.value = [];
};

/**
 * 添加弹幕 添加至播放位置
 * @param {Barrage} dm 播放的弹幕
 * @return {number} 弹幕的下标
 */
const add = (dm: Barrage): number => {
  if (index.value >= barrageList.value.length - 1) {
    barrageList.value.push(dm);
    play();
    return barrageList.value.length - 1;
  } else {
    const _index = index.value % barrageList.value.length;
    barrageList.value.splice(_index, 0, dm);
    play();
    return _index - 1;
  }
};

/**
 * 添加弹幕 添加至末尾
 * @param {Barrage} dm 播放的弹幕
 * @return {number} 弹幕的下标
 */
const push = (dm: Barrage): number => {
  barrageList.value.push(dm);
  return barrageList.value.length - 1;
};

const pause = () => {
  paused.value = true;
};

const reset = () => {
  barrageHeight.value = 0;
  init();
};

const resize = () => {
  initCore();
  const items = dmContainerRef.value.getElementsByClassName("dm");
  for (let i = 0; i < items.length; i++) {
    const el = items[i] as HTMLDivElement;
    el.style.setProperty(
      "--dm-scroll-width",
      `-${containerWidth.value + el.offsetWidth * 2}px`
    );
    el.style.left = `${containerWidth.value}px`;
    el.style.animationDuration = `${containerWidth.value / speeds.value}s`;
  }
};

const show = () => {
  hidden.value = false;
};

const hide = () => {
  hidden.value = true;
};

const getPlayState = () => {
  return !paused.value;
};

const getInsertList = () => {
  return insertList.value;
};

const init = () => {
  initCore();
  isSuspend.value && !useSlot.value && initSuspendEvent();
  if (autoplay.value) play();
};

defineExpose({
  add,
  push,
  insert,
  play,
  pause,
  reset,
  resize,
  show,
  hide,
  clear,
  getPlayState,
  getInsertList,
});

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  clear();
});
</script>

<style lang="scss">
@mixin base-transform {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

.vir-barrage {
  @include base-transform();
  .barrage-container {
    @include base-transform();
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    user-select: none;

    &.show {
      opacity: 1;
    }

    &.paused {
      .dm.move {
        animation-play-state: paused;
      }
    }

    .dm {
      @include base-transform();
      position: absolute;
      font-size: 20px;
      color: white;
      text-align: center;
      white-space: pre;
      transform-style: preserve-3d;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &.move {
        will-change: transform;
        animation-name: moveLeft;
        animation-timing-function: linear;
        animation-play-state: running;
      }

      &.pause {
        animation-play-state: paused;
        z-index: 10;
      }
    }
  }
}

@keyframes moveLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(var(--dm-scroll-width));
  }
}

@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }

  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}
</style>
