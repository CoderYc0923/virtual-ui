<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px;">
    <div>
      <vir-button type="primary">默认按钮</vir-button>
      <vir-button type="success" loading loading-icon="setting">成功按钮</vir-button>
      <vir-button type="warning" size="small">失败按钮</vir-button>
      <vir-button type="warning" disabled>禁用按钮</vir-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
