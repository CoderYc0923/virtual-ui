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
          <vir-button>{{ config.useSlot ? "插槽" : "文字" }}模式</vir-button>
          <vir-button
            >{{ config.isSuspend ? "已开启" : "已关闭" }}悬浮</vir-button
          >
          <vir-button
            >{{
              config.useSuspendSlot ? "已开启" : "已关闭"
            }}悬浮插槽</vir-button
          >
        </vir-row>
        <vir-row class="mb-4">
          显示：
          <vir-button @click="handleDanmu('show')">显示</vir-button>
          <vir-button @click="handleDanmu('hide')">隐藏</vir-button>
        </vir-row>
        <vir-row class="mb-4">
          速度：
          <vir-button>减速</vir-button>
          <vir-button>加速</vir-button>
          &nbsp;&nbsp;&nbsp;当前速度：{{ config.speeds }}像素/s
        </vir-row>
        <vir-row class="mb-4">
          轨道：
          <vir-button>-1</vir-button>
          <vir-button>+1</vir-button>
          <vir-button>满屏</vir-button>
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
          <vir-button>发送</vir-button>
        </vir-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { barrages, dm, getImageUrl } from "../utils/tool.utils";

const barrageRef = ref();
const config = reactive({
  useSlot: false,
  useSuspendSlot: false,
  isSuspend: false,
  randomChannel: true,
  loop: true,
  right: 20,
  channels: 6,
  speeds: 100,
});

const inputDanmu = ref<string>("");

const Barrages = ref<string[] | dm[]>([]);

const getBarrages = () => {
  const dms: any = [];
  barrages.map((text, index) => {
    dms.push({
      text,
      avatar:
        index % 25 != 0
          ? getImageUrl(`default-avatar (${index % 25}).png`)
          : "",
    });
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
  config.loop = !config.loop
  handleDanmu('reset')
}

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
  border: 1px solid #000;
}

.controler-content {
  margin-top: 10px;
  color: skyblue;
  font-size: 12px;
  line-height: 32px;
}
</style>
