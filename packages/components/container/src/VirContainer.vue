<template>
  <section :class="[ns.base(), ns.is(isVertical, 'vertical')]">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots, Component } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("container");

const props = defineProps({
  direction: {
    type: String,
    default: "",
  },
});
const isVertical = computed(() => {
  if (props.direction === "vertical") return true;
  if (props.direction === "horizontal") return false;
  const slot = useSlots();
  if (slot && slot.default) {
    const vNodes = slot.default();
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "VirHeader" || tag === "VirFooter";
    });
  } else return false;
});
</script>

<style>
.vir-container {
  flex-basis: auto;
  @apply flex flex-row box-border flex-grow flex-shrink min-w-0;
}
.vir-container.is-vertical {
  @apply flex-col;
}
</style>
