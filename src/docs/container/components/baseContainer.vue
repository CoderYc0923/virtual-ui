<script setup lang="ts"></script>

<template>
  <vir-container class="layout-com">
    <vir-header>Header</vir-header>
    <vir-main>Main</vir-main>
    <vir-footer>Footer</vir-footer>
  </vir-container>
</template>

<style lang="scss">
.center-util {
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout-com {
  height: 300px;
}
.vir-header {
  background-color: #c6e2ff;
  @extend .center-util;
}
.vir-aside {
  background-color: #d9ecff;
  @extend .center-util;
}
.vir-main {
  background-color: #ecf5ff;
  @extend .center-util;
}
.vir-footer {
  background-color: #c6e2ff;
  @extend .center-util;
}
</style>
