<template>
  <div :class="[ns.base()]">
    <div class="v-scroll relative overflow-auto">
      <div class="vrs-container flex overflow-visible absolute rotate-90">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

type ISizeInfo = {
  w: number;
  h: number;
};

const ns = useNameSpace("row-scroll");

const props = defineProps<{
  sizeInfo: ISizeInfo;
}>();

const sw = computed(() => {
  return props.sizeInfo.w;
});

const sh = computed(() => {
  return props.sizeInfo.h;
});
</script>

<style lang="scss">
.vir-row-scroll {
  width: calc(v-bind("sw") * 1px);
  height: calc(v-bind("sh") * 1px);
}

.v-scroll {
  width: calc(v-bind("sh") * 1px);
  height: calc(v-bind("sw") * 1px);
  transform-origin: 0 0;
  transform: translateY(calc(v-bind("sh") * 1px)) rotate(-90deg);

  &::-webkit-scrollbar {
    width: 0;
  }
}

.vrs-container {
  height: calc(v-bind("sh") * 1px);
  left: 100%;
  transform-origin: 0 0;
}
</style>
