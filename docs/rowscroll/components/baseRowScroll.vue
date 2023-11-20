<template>
  <vir-row-scroll :width="sizeInfo.w" :height="sizeInfo.h">
    <div
      class="tab-item w-12 h-8 text-center leading-8 shrink-0"
      v-for="(item, index) in scrollList"
      :key="index"
    >
      {{ item }}
    </div>
  </vir-row-scroll>
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
