<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div>
      <!-- 组件测试可以在这里测 -->
      <vir-infinite-scroll
        @reached-trigger="triggerHnadle"
        :loading="isLoading"
        :width="800"
        :height="600"
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
  </div>
</template>

<script setup lang="ts">
import { createImdElement } from "../utils/tool.utils";

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
    }, 1000);
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

<style lang="scss" scoped>
.tab-item {
  width: 100%;
  border-bottom: 1px solid #000;
  background-color: #bae6fd;
}
</style>
