<template>
  <div
    v-show="visible"
    :style="zIndexStyle"
    :class="ns.is(mask, 'mask')"
    class="base-modal"
    @click.self="closed('click')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed, onMounted, onUnmounted } from "vue";
import { useNameSpace } from "../../utils/hooks/hooks.util";

const ns = useNameSpace("modal");

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Boolean,
    default: true,
  },
  zIndex: {
    type: String,
    default: "9",
  },
});

const $emit = defineEmits(["closed"]);
const closed = (type: string) => {
  console.log("关闭模态框");
  $emit("closed", { type });
};
const zIndexStyle = computed(() => {
  return {
    zIndex: props.zIndex,
  } as CSSProperties;
});
const keyDownHandler = (e: KeyboardEvent) => {
  if (e.code === "Escape") closed(e.code);
};

onMounted(() => {
  document.addEventListener("keydown", keyDownHandler);
});
onUnmounted(() => {
  document.removeEventListener("keydown", keyDownHandler);
});
</script>

<style scoped>
.base-modal {
  /*z-index: 9;*/
  @apply fixed top-0 left-0 h-screen w-screen;
}
.is-mask {
  @apply bg-gray-900 bg-opacity-70;
}
</style>
