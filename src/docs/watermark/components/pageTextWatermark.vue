<template>
  <div class="w-full h-300 bg-slate-200" ref="pageTextRef"></div>
  <vir-button @click="removeWatermark" class="mt-5">移除水印</vir-button>
</template>

<script setup lang="ts">
import { VirWaterMark } from "../../../../packages/components/water-mark";
import { ref, onMounted } from "vue";

const pageTextRef = ref();
const waterMark = ref();
const init = () => {
  waterMark.value = VirWaterMark.page({
    target: pageTextRef.value,
    text: "测试水印",
    color: "black",
    fontSize: 14,
    rowGap: 30,
    colGap: 30,
  });
};

const removeWatermark = () => {
  waterMark.value?.remove();
};

onMounted(init);
</script>

<style></style>
