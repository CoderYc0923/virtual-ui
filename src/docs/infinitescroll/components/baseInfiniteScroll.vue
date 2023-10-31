<template>
  <vir-infinite-scroll @reached-trigger="triggerHnadle" :loading="isLoading">
    <div
      class="tab-item h-8 text-center leading-8 shrink-0"
      v-for="(item, index) in scrollList"
      :key="index"
    >
      {{ item }}
    </div>
  </vir-infinite-scroll>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const scrollList = ref<number[]>([]);
const isLoading = ref(false);
const isFinish = ref(false);
const init = () => {
  for (let i = 0; i < 90; i++) {
    scrollList.value.push(i);
  }
};
const triggerHnadle = () => {
  if (!isFinish.value) {
    isLoading.value = true;
    setTimeout(() => {
      for (let i = 90; i < 180; i++) {
        scrollList.value.push(i);
      }
      isFinish.value = true;
      isLoading.value = false;
    }, 1000);
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
