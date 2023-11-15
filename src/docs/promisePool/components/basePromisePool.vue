<template>
  <div>
    <vir-button type="primary" @click="sendRequest" :loading="isSending"
      >发送批量请求</vir-button
    >
    <vir-button type="danger" @click="stopRequest">中断批量请求</vir-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  VirPromisePool,
  taskWithCallbacks,
} from "../../../../packages/components/promise-pool";

const finishRequest = () => {
  isSending.value = false;
  console.log("请求均已结束");
};

const taskFinish = (task: taskWithCallbacks<any>) => {
  console.log(`单个请求结束`, task);
};

const promisePool = new VirPromisePool({
  maxCount: 3,
  debug: false,
  customTaskInfo: {
    title: "文件分片并发请求",
  },
  onFinish: finishRequest,
  onTaskFinish: taskFinish,
});

const isSending = ref<boolean>(false);

const getRandomWaitTime = () => {
  return Math.floor(Math.random() * 2001 + 1000);
};

const createRequest = () => {
  return async () => {
    const data = await new Promise((resolve) =>
      setTimeout(resolve, getRandomWaitTime())
    );
    return data;
  };
};

const sendRequest = () => {
  if (!isSending.value) {
    isSending.value = true;
    for (let i = 0; i < 10; i++) {
      const task = createRequest();
      promisePool.addTask(task);
    }
  }
};

const stopRequest = () => {
  const runningTasks = promisePool.stopTask();
  isSending.value = false;
  console.log("中断后，还在运行的任务", runningTasks);
};
</script>

<style></style>
