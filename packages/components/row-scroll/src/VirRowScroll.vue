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
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("row-scroll");

const props = defineProps({
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 32
  },
});

const sw = computed(() => {
  return props.width;
});

const sh = computed(() => {
  return props.height;
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
