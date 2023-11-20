<script setup lang="ts"></script>

<template>
  <vir-row>
    <vir-col :span="24"><div class="grid-content bg-purple-dark" /></vir-col>
  </vir-row>
  <vir-row>
    <vir-col :span="12"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="12"><div class="grid-content bg-purple-light" /></vir-col>
  </vir-row>
  <vir-row>
    <vir-col :span="8"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="8"><div class="grid-content bg-purple-light" /></vir-col>
    <vir-col :span="8"><div class="grid-content bg-purple" /></vir-col>
  </vir-row>
  <vir-row>
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
  </vir-row>
  <vir-row>
    <vir-col :span="4"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="4"><div class="grid-content bg-purple-light" /></vir-col>
    <vir-col :span="4"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="4"><div class="grid-content bg-purple-light" /></vir-col>
    <vir-col :span="4"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="4"><div class="grid-content bg-purple-light" /></vir-col>
  </vir-row>
</template>

<style lang="scss">
  .vir-row {
    margin-bottom: 20px;
  }
  .vir-row:last-child {
    margin-bottom: 0;
  }
  .vir-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background-color: #99a9bf;
  }
  .bg-purple-light {
    background-color: #e5e9f2;
  }
  .bg-purple {
    background-color: #383c45;
  }
</style>
