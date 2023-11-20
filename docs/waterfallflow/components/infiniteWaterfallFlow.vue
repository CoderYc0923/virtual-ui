<template>
  <div style="height: 600px">
    <vir-infinite-scroll
      @reached-trigger="triggerHnadle"
      :loading="isLoading"
    >
      <vir-waterfall-flow
        :data-list="dataList"
        :columns="5"
        :gap="10"
        :overflow="'visible'"
      >
        <template #slot-scope="{ slotProps }">
          <div :style="slotProps.data.style"></div>
        </template>
      </vir-waterfall-flow>
    </vir-infinite-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { createImdElement } from "../../../utils/tool.utils";

const dataList = ref<any>([]);
const isLoading = ref(false);
const isFinish = ref(false);

const triggerHnadle = () => {
  if (!isFinish.value) {
    isLoading.value = true;
    setTimeout(() => {
      for (let i = 90; i < 180; i++) {
        dataList.value.push({ style: createImdElement() });
      }
      isFinish.value = true;
      isLoading.value = false;
    }, 1500);
  }
};

const init = () => {
  for (let i = 0; i < 90; i++) {
    dataList.value.push({ style: createImdElement() });
  }
};

onMounted(() => {
  init();
});
</script>

<style></style>
