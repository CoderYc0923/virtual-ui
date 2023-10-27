<script setup lang="ts">
  const test = () => console.log('禁用的按钮')
</script>
<template>
  <vir-row class="mb-4">
    <vir-button @click="test">Default</vir-button>
    <vir-button type="primary" disabled @click="test">Primary</vir-button>
    <vir-button type="success" disabled @click="test">Success</vir-button>
    <vir-button type="info" disabled @click="test">Info</vir-button>
    <vir-button type="warning" disabled @click="test">Warning</vir-button>
    <vir-button type="danger" disabled @click="test">Danger</vir-button>
  </vir-row>
  <vir-row>
    <vir-button plain disabled @click="test">Plain</vir-button>
    <vir-button type="primary" plain disabled @click="test">Primary</vir-button>
    <vir-button type="success" plain disabled @click="test">Success</vir-button>
    <vir-button type="info" plain disabled @click="test">Info</vir-button>
    <vir-button type="warning" plain disabled @click="test">Warning</vir-button>
    <vir-button type="danger" plain disabled @click="test">Danger</vir-button>
  </vir-row>
</template>
