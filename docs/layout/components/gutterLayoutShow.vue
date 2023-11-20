<template>
  <vir-row :gutter="20">
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
  </vir-row>
</template>

<style>
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
</style>
<script setup lang="ts"></script>
