<template>
  <div :class="[ns.base()]" class="grid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("waterfall-flow");

</script>

<style lang="scss">
.vir-waterfall-flow {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-template-rows: masonry;
}
</style>
