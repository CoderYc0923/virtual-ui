<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div class="test-box relative">
      <!-- 组件测试可以在这里测 -->
      <div class="water-mark h-300 bg-slate-300" ref="watermarkRef">
        <!-- <img src="../assets/img/wm.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VirWaterMark } from '../../packages/components/water-mark/src/watermark';
import wm from '../assets/img/wm.png'

const watermarkRef = ref()

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
//     cSpace: 200,
//     vSpace: 500
//   })
// }

onMounted(init)

</script>

<style lang="scss" scoped>
// .water-mark {
//   background: url('../assets/img/wm.png');
// }
</style>
