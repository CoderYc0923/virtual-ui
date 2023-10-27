<script setup lang="ts">
  const test = () => console.log('点击了正在加载的按钮')
</script>

<template>
  <vir-button type="primary" loading @click="test">Loading</vir-button>
  <vir-button type="primary" loading-icon="setting" loading @click="test">Loading</vir-button>
</template>
