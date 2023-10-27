<template>
  <header :style="styleWidth" :class="ns.base()">
    <slot />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("header");

const props = defineProps({
  height: {
        type: String,
        default: ''
    }
})
const styleWidth = computed(() => {
    return props.height ? { height: props.height } : {}
})
</script>

<style>
.vir-header {
    @apply box-border flex-shrink-0 px-6 h-14;
}
</style>
