<template>
    <vir-button type="text" @click="open">点击我打开Message Box</vir-button>
  </template>
  
  <script setup lang="ts">
  import VirButton from "../../../../packages/components/button/src/VirButton.vue";
  import { MessageBoxFn } from "../../../../packages/components/message-box";
  
  const open = () => {
    MessageBoxFn("你将删除这个文件，是否继续", "Waring", {
      boxType: "confirm",
      type: "warning",
    }).then(() => {
      console.log('删除完成');
      
    }).catch(() => {
      console.log('删除取消');
    })
  };
  </script>
  
  <style></style>
  