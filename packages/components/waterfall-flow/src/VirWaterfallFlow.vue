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
    type: [Number,String],
    default: '100%',
  },
  height: {
    type: [Number,String],
    default: '100%',
  },
  gap: {
    type: Number,
    default: 5,
  },
  overflow: {
    type: String,
    default: 'auto',
    validator: (value: string) => {
      return [
        'auto',
        'visible'
      ].includes(value)
    }
  }
});

const girdStyle = ref<any>({});
const showDataList = ref<any>([]);

const calcProportion = (columns: number) => {
  return ((1 / columns) * 100).toFixed(0);
};

watch(
  () => props.dataList,
  (value) => {
    showDataList.value = value.map((item:any, index) => {
      return {
        ...item,
        dataIndex: index,
      };
    });
    girdStyle.value = {
      "grid-template-columns": `repeat(auto-fill, calc(${calcProportion(
        props.columns
      )}% - ${props.gap}px))`,
      width: (typeof props.width === 'string') ? props.width : props.width + 'px',
      overflow: props.overflow
    };
    if (props.overflow === 'auto') {
      girdStyle.value.height = (typeof props.height === 'string') ? props.height : props.height + 'px'
    }
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
}
</style>
