<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div class="test-box relative">
      <!-- 组件测试可以在这里测 -->
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VirWaterMark } from "../../packages/components/water-mark/src/watermark";
import wm from "../assets/img/wm.png";
import wm2 from "../assets/img/wm2.png";

const imgUrl = ref();

//页面:文字
// const init = () => {
//   VirWaterMark.init({
//     target: watermarkRef.value,
//     text: '把公屏打在xx上',
//     color: 'red',
//     fontSize: 24
//   })
// }

//页面:图片
// const init = () => {
//   VirWaterMark.init({
//     target: watermarkRef.value,
//     image: wm,
//     rowGap: 200,
//     colGap: 500
//   })
// }

//图片:文字
/* const init = () => {
  VirWaterMark.image({
    target: wm2,
    text: "测试专用",
    rowGap: 100,
    color: "black",
    fontSize: 20,
    success: sucFunc,
  });
}; */

//图片:图片
/* const init = () => {
  VirWaterMark.image({
    target: wm2,
    image: wm,
    rowGap: 200,
    success: sucFunc,
  });
}; */

//图片： 明
const init = () => {
  VirWaterMark.image({
    target: wm2,
    text: "测试专用",
    secret: true,
    rowGap: 200,
    success: sucFunc,
  });
};

const sucFunc = (data: any) => {
  imgUrl.value = data;
  setTimeout(() => {
    decodeImage();
  }, 1000);
};

const decodeImage = async () => {
  const decodeSrc = await VirWaterMark.utils.decodeImage(imgUrl.value);
  imgUrl.value = decodeSrc;
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped></style>
