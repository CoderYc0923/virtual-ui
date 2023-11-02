<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div class="test-box relative">
      <!-- 组件测试可以在这里测 -->
      <vir-barrage
        class="barrage"
        ref="barrageRef"
        :barrage="Barrages"
        v-bind="config"
        @dm-click="handleClickDm"
        @play-end="handlePlayEnd"
        @list-end="handleListEnd"
      >
        <template #test="{ barrageList }">
          <span style="color: white">{{ barrageList }}</span>
        </template>
        <template #dm="{ barrage }">
          <div
            class="danmu-item"
            :class="[barrage?.isMe ? 'btn-item--me' : '']"
          >
            <img
              class="danmu-item--avatar"
              v-if="barrage?.avatar"
              :src="barrage.avatar"
              alt=""
            />
            <span v-if="barrage?.isMe">我:</span>
            <div>{{ barrage?.text }}</div>
          </div>
        </template>
        <template #suspend="{ barrage, index }">
          <div class="danmu-suspend">
            <div class="item" @click="handleAdd(barrage)">➕</div>
            <span
              @click="handleAddStar(index)"
              :id="`star${index}`"
              dataBefore="🤍"
            ></span>
          </div>
        </template>
      </vir-barrage>
      <div class="controler-content">
        <vir-row class="mb-4">
          播放：
          <vir-button @click="handleDanmu('play')">播放</vir-button>
          <vir-button @click="handleDanmuLoop">{{
            config.loop ? "循环播放" : "单次播放"
          }}</vir-button>
          <vir-button @click="handleDanmu('stop')">暂停</vir-button>
          <vir-button @click="handleDanmu('clear')">清除</vir-button>
        </vir-row>
        <vir-row class="mb-4">
          循环：
          <vir-button @click="handleDanmuMode('slot')"
            >{{ config.useSlot ? "插槽" : "文字" }}模式</vir-button
          >
          <vir-button @click="handleDanmuMode('suspend')"
            >{{ config.isSuspend ? "已开启" : "已关闭" }}悬浮停留</vir-button
          >
          <vir-button @click="handleDanmuMode('suspendslot')"
            >{{
              config.useSuspendSlot ? "已开启" : "已关闭"
            }}悬浮停留插槽</vir-button
          >
        </vir-row>
        <vir-row class="mb-4">
          显示：
          <vir-button @click="handleDanmu('show')">显示</vir-button>
          <vir-button @click="handleDanmu('hide')">隐藏</vir-button>
        </vir-row>
        <vir-row class="mb-4">
          透明度：
          <input
            class="input"
            type="number"
            placeholder="输入透明度值(0-1)"
            v-model="inputOpacity"
          />
          <vir-button @click="handleEditOpacity">确定</vir-button>
        </vir-row>
        <vir-row class="mb-4">
          速度：
          <vir-button @click="handleDanmuSpeeds(-10)">减速</vir-button>
          <vir-button @click="handleDanmuSpeeds(10)">加速</vir-button>
          &nbsp;&nbsp;&nbsp;当前速度：{{ config.speeds }}像素/s
        </vir-row>
        <vir-row class="mb-4">
          轨道：
          <vir-button @click="handleDanmuChannels(-1)">-1</vir-button>
          <vir-button @click="handleDanmuChannels(1)">+1</vir-button>
          <vir-button @click="handleDanmuChannels(0)">满屏</vir-button>
          &nbsp;&nbsp;&nbsp;当前轨道数：{{ config.channels }}
        </vir-row>
        <vir-row class="mb-4">
          发送：
          <input
            class="input"
            type="text"
            placeholder="输入弹幕内容"
            v-model="inputDanmu"
          />
          <vir-button @click="handleAddDanmu">发送</vir-button>
        </vir-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { barrages, dm, getImageUrl } from "../utils/tool.utils";

const barrageRef = ref();
const config = reactive({
  useSlot: true,
  useSuspendSlot: true,
  isSuspend: true,
  randomChannel: true,
  loop: false,
  right: 20,
  channels: 6,
  speeds: 50,
  opacity: 1,
  extraStyle: "color: white",
});

const inputDanmu = ref<string>("");
const inputOpacity = ref<number>(1);

const Barrages = ref<string[] | dm[]>([]);
const stars = ref<boolean[]>([]);

const getBarrages = () => {
  const dms: any = [];
  barrages.map((text, index) => {
    dms.push({
      id: index,
      text,
      avatar:
        index % 25 != 0
          ? getImageUrl(`default-avatar (${index % 25}).png`)
          : "",
    });
    stars.value.push(false);
  });
  return dms;
};

const handleListEnd = () => {
  console.log("循环播放一轮结束");
};

const handleClickDm = (dm: dm, index: number) => {
  console.log("当前点击的弹幕: ", index, dm);
};

const handlePlayEnd = (index: number) => {
  console.log("播放结束", index);
};

const handleDanmuLoop = () => {
  config.loop = !config.loop;
  handleDanmu("reset");
};

const handleDanmuSpeeds = (speed: number) => {
  config.speeds =
    config.speeds + speed > 0 ? config.speeds + speed : config.speeds;
  handleDanmu("reset");
};

const handleDanmuChannels = (count: number) => {
  if (count === 0) config.channels = 0;
  else
    config.channels =
      config.channels + count < 0 ? config.channels : config.channels + count;
  handleDanmu("reset");
};

const handleAddDanmu = () => {
  if (!inputDanmu.value) return;
  let dm: string | dm = "";
  if (config.useSlot) {
    dm = {
      id: Barrages.value.length,
      text: inputDanmu.value,
      avatar: getImageUrl(
        `default-avatar (${Math.ceil(Math.random() * 24)}).png`
      ),
      isMe: true,
    };
  } else {
    dm = inputDanmu.value;
  }
  barrageRef.value?.insert(dm);
  inputDanmu.value = "";
};

const handleDanmuMode = (model: string) => {
  const modelMap: { [key: string]: any } = {
    slot: handleModeSlot,
    suspend: handleModeSuspend,
    suspendslot: handleModeSuspendSlot,
  };
  modelMap[model]();
};

const handleModeSlot = () => {
  config.useSlot = !config.useSlot;
  config.useSlot
    ? (Barrages.value = getBarrages())
    : (Barrages.value = barrages);
};

const handleModeSuspend = () => {
  config.isSuspend = !config.isSuspend;
};

const handleModeSuspendSlot = () => {
  config.useSuspendSlot = !config.useSuspendSlot;
};

const handleAdd = (dm: dm) => {
  const newDm: dm = {
    ...dm,
    isMe: true,
  };
  barrageRef.value?.insert(newDm);
};

const handleAddStar = (index: number) => {
  const currentStar = document.getElementById(`star${index}`);
  currentStar?.setAttribute("dataBefore", "🧡");
};

const handleEditOpacity = () => {
  config.opacity = inputOpacity.value;
};

const handleDanmu = (type: string) => {
  switch (type) {
    case "play":
      barrageRef.value?.play();
      break;
    case "stop":
      barrageRef.value?.pause();
      break;
    case "hide":
      barrageRef.value?.hide();
      break;
    case "show":
      barrageRef.value?.show();
      break;
    case "clear":
      barrageRef.value?.clear();
      break;
    case "reset":
      barrageRef.value?.reset();
      break;
    case "resize":
      barrageRef.value?.resize();
      break;
  }
};

const handleLoadImg = () => {
  return new Promise((reslove) => {
    let imgUrlArr: string[] = [];
    for (let i = 1; i <= 24; i++) {
      imgUrlArr.push(getImageUrl(`default-avatar (${i}).png`));
    }

    let loadedCount = 0;
    const imgLoaded = () => {
      loadedCount++;
      if (loadedCount >= imgUrlArr.length) reslove("图片加载完成");
    };

    const Preload = () => {
      imgUrlArr.forEach((imgUrl) => {
        const oImg = new Image();
        oImg.addEventListener("load", imgLoaded);
        oImg.addEventListener("error", imgLoaded);
        oImg.src = imgUrl;
      });
    };

    Preload();
  });
};

onMounted(() => {
  window.onresize = () => handleDanmu("resize");
  handleLoadImg();
  config.useSlot
    ? (Barrages.value = getBarrages())
    : (Barrages.value = barrages);
});

onUnmounted(() => {
  window.onreset = null;
});
</script>

<style lang="scss" scoped>
.barrage {
  width: 800px;
  height: 600px;
  background-color: #000;
}

.controler-content {
  margin-top: 10px;
  color: #333;
  font-size: 12px;
  line-height: 32px;
}

.danmu-item {
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;

  &:hover {
    color: #333;
    background: rgba(255, 255, 255, 0.8);
    border: none;
  }

  &--avatar {
    width: 30px;
    height: 30px;
    max-width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

.btn-item--me {
  background: rgba($color: skyblue, $alpha: 0.7);
}

.danmu-suspend {
  display: flex;
  align-items: center;
  border-radius: 0 30px 30px 0;
  .item {
    padding-left: 10px;
    &:nth-last-child(1):active {
      transform: scale(1.2);
    }
  }

  span::before {
    content: attr(dataBefore);
  }

  span:active::before {
    content: "🧡";
  }
}
</style>
