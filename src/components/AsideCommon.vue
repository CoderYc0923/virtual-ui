<template>
  <div>
    <h2>wspl</h2>
  </div>
</template>

<script setup lang="ts">
import { IRouterType } from "../router/routerConfig";

defineProps({
  asideData: {
    type: Array as () => IRouterType[],
  },
});
</script>

<style></style>
