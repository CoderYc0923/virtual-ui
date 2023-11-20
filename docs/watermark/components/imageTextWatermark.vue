<template>
  <div>
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script setup lang="ts">
import { VirWaterMark } from "../../../../packages/components/water-mark";
import wm2 from "@/assets/img/wm2.png";
import { ref, onMounted } from "vue";

const imgUrl = ref();
const init = () => {
  VirWaterMark.image({
    target: wm2,
    text: "测试专用",
    rowGap: 100,
    color: "black",
    fontSize: 20,
    success: sucFunc,
  });
};

const sucFunc = (data: any) => {
  imgUrl.value = data;
};

onMounted(init);
</script>

<style></style>
