<template>
  <div class="w-full h-300 bg-slate-200" ref="pageImageRef"></div>
</template>

<script setup lang="ts">
import { VirWaterMark } from "../../../../packages/components/water-mark";
import wm from "@/assets/img/wm.png";
import { ref, onMounted } from "vue";

const pageImageRef = ref();
const init = () => {
  VirWaterMark.page({
    target: pageImageRef.value,
    image: wm,
  });
};

onMounted(init);
</script>

<style></style>
