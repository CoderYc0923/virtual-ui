<template>
  <vir-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </vir-button>
  <vir-drawer v-model="drawer" title="打开了抽屉" :with-header="false">
    <span>hi bro M3!</span>
  </vir-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
</script>

<style></style>
