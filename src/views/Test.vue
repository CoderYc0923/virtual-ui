<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div>
      <!-- 组件测试可以在这里测 -->
      <vir-row-scroll :sizeInfo="sizeInfo">
        <div
          class="tab-item w-12 h-8 text-center leading-8 shrink-0"
          v-for="(item, index) in scrollList"
          :key="index"
        >
          {{ item }}
        </div>
      </vir-row-scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollList = ref<number[]>([]);
const sizeInfo = {
  w: 300,
  h: 32,
};
const init = () => {
  for (let i = 0; i < 90; i++) {
    scrollList.value.push(i);
  }
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.tab-item {
  border-right: 1px solid #000;
  background-color: #bae6fd;
}
</style>
