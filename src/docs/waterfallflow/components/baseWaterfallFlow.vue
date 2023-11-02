<template>
  <vir-waterfall-flow
    :data-list="dataList"
    :columns="4"
    :width="800"
    :height="600"
    :gap="10"
  >
    <template #slot-scope="{ slotProps }">
      <div :style="slotProps.data.style"></div>
    </template>
  </vir-waterfall-flow>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { createImdElement } from "../../../utils/tool.utils";

const dataList = ref<any>([]);

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
