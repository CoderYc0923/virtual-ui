<template>
  <aside :style="styleWidth" :class="ns.base()">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("aside");

const props = defineProps({
    width: {
        type: String,
        default: ''
    }
})
const styleWidth = computed(() => {
    return props.width ? { width: props.width } : {}
})
</script>

<style>
.vir-aside {
    @apply overflow-auto box-border flex-shrink-0 w-60;
}
</style>
