<template>
  <footer :style="styleHeight" :class="ns.base()">
    <slot />
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("footer");

const props = defineProps({
  height: {
        type: String,
        default: ''
    }
})
const styleHeight = computed(() => {
    return props.height ? { height: props.height } : {}
})
</script>

<style>
.vir-footer {
    @apply box-border flex-shrink-0 h-14 px-6;
}
</style>
