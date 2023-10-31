<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div>
      <!-- 组件测试可以在这里测 -->
      <vir-waterfall-flow>
        <div id="div-item" v-for="(item, index) in divs" :key="index" :style="htmls[index]"></div>
      </vir-waterfall-flow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createImdElement } from "../utils/tool.utils";

const htmls = ref<string[]>([])
const divs = ref<number[]>([])

const init = () => {
  for (let i = 0; i < 90; i++) {
    htmls.value[i] = createImdElement();
    divs.value[i] = i
  }
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.tab-item {
  width: 100%;
  border-bottom: 1px solid #000;
  background-color: #bae6fd;
}
</style>
