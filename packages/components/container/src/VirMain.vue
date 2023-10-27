<template>
  <main :class="ns.base()">
    <slot />
  </main>
</template>

<script setup lang="ts">
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("main");
</script>

<style>
.vir-main {
  flex-basis: auto;
  @apply block flex-grow flex-shrink overflow-auto box-border p-6;
}
</style>
