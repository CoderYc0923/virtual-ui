<template>
  <div>
    <h4>
      这里是测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制测试复制
    </h4>
    <textarea
      placeholder="可以在这里粘贴"
      style="width: 100%; height: 400px; border: 1px solid #333"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import {
  VirClipboard,
  InitConfig,
} from "../../../../packages/components/clipboard";

const virClipboard = ref<VirClipboard>();

const onCopyCallback = () => {
  alert("监听到了复制噢");
};

const clipboardInterceptor = (clipboardText: string) => {
  console.log("原有粘贴板的内容：", clipboardText);
  return (
    clipboardText + " - VirtualUi: Make any component library you want to make."
  );
};

const init = () => {
  let initConfig: InitConfig = {
    disableCopy: false,
    onCopyCallback,
    clipboardInterceptor,
  };
  virClipboard.value = new VirClipboard(initConfig);
};

onMounted(init);
onUnmounted(() => {
  virClipboard.value?.remove();
});
</script>

<style></style>
