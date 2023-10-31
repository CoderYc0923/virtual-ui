<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div>
      <!-- 组件测试可以在这里测 -->
      <vir-waterfall-flow
        :data-list="dataList"
        :columns="5"
        :width="1200"
        :height="800"
        :gap="10"
      >
        <template #slot-scope="{ slotProps }">
          <div :style="slotProps.data.style"></div>
        </template>
      </vir-waterfall-flow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createImdElement } from "../utils/tool.utils";

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

<style lang="scss" scoped>
.tab-item {
  width: 100%;
  border-bottom: 1px solid #000;
  background-color: #bae6fd;
}
</style>
