<template>
  <div :class="[ns.base()]" :style="itemStyle">
    <div ref="waterfallFlowItem">
      <slot name="slot-scope" :data="data"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("waterfall-flow-item");

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  gap: {
    type: Number,
    default: 5,
  },
});

const waterfallFlowItem = ref();
const itemStyle = ref({});
onMounted(() => {
  itemStyle.value = {
    "grid-row-end": `span ${waterfallFlowItem.value.clientHeight + props.gap}`,
  };
});
</script>

<style>
.vir-waterfall-flow-item {
  grid-row-end: span 100;
}
</style>
