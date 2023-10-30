<template>
  <vir-button type="text" @click="open">点击我打开Message Box</vir-button>
</template>

<script setup lang="ts">
import VirButton from '../../../../packages/components/button/src/VirButton.vue';
import { MessageBoxFn } from '../../../../packages/components/message-box'
import { Action } from '../../../../packages/components/message-box/src/messageBox.help'

const open = () => {
    MessageBoxFn('这是一个消息', '标题', {
        callback: (action: Action) => {
            console.log('消息盒子回调测试',action);
        }
    })
}

</script>

<style>
</style>
