<template>
  <div class="flex">
    <img :src="imgUrl" alt="" />
    <vir-button :loading="loading" @click="decodeImage">解密</vir-button>
    <img v-if="decodeImgUrl" :src="decodeImgUrl" alt="" />
  </div>
</template>

<script setup lang="ts">
import { VirWaterMark } from "../../../../packages/components/water-mark";
import wm2 from "@/assets/img/wm2.png";
import { ref, onMounted } from "vue";

const imgUrl = ref();
const decodeImgUrl = ref();
const loading = ref<boolean>(false);

const init = () => {
  VirWaterMark.image({
    target: wm2,
    secret: true,
    text: "你看不见我",
    rowGap: 100,
    color: "black",
    fontSize: 20,
    success: sucFunc,
  });
};

const sucFunc = (data: any) => {
  imgUrl.value = data;
};

const decodeImage = async () => {
  if (!imgUrl.value) return;
  const decodeSrc = await VirWaterMark.utils.decodeImage(imgUrl.value);
  decodeImgUrl.value = decodeSrc;
  loading.value = false;
};

onMounted(init);
</script>

<style></style>
