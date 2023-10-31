<template>
  <div :class="[ns.base()]" class="grid" :style="girdStyle">
    <vir-waterfall-flow-item
      v-for="item in showDataList"
      :key="item.dataIndex"
      :data="item"
      :gap="gap"
    >
      <template #slot-scope="slotProps">
        <slot name="slot-scope" :slotProps="slotProps"></slot>
      </template>
    </vir-waterfall-flow-item>
  </div>
</template>

<script setup lang="ts">
import VirWaterfallFlowItem from "./VirWaterfallFlowItem.vue";
import { ref, watch } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("waterfall-flow");

const props = defineProps({
  dataList: {
    type: Array,
    default: [],
  },
  columns: {
    type: Number,
    default: 2,
  },
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 400,
  },
  gap: {
    type: Number,
    default: 5,
  },
});

const girdStyle = ref({});
const showDataList = ref<any>([]);

const calcProportion = (columns: number) => {
  return ((1 / columns) * 100).toFixed(0);
};

watch(
  () => props.dataList,
  (value) => {
    showDataList.value = value.map((item, index) => {
      return {
        ...item,
        dataIndex: index,
      };
    });
    girdStyle.value = {
      "grid-template-columns": `repeat(auto-fill, calc(${calcProportion(
        props.columns
      )}% - ${props.gap}px))`,
      width: props.width + "px",
      height: props.height + "px",
    };
    console.log(girdStyle.value);
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="scss">
.vir-waterfall-flow {
  grid-auto-rows: minmax(1px, 1px);
  align-items: start;
  justify-content: space-between;
  overflow: auto;
}
</style>
