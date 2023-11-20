<template>
  <div class="w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border">
    <h1>测试靶场</h1>
    <hr style="margin-bottom: 30px" />
    <div class="test-box relative">
      <!-- 组件测试可以在这里测 -->
      <h4>这里是测试复制测试复制测试复制</h4>
      <textarea
        placeholder="可以在这里粘贴"
        style="width: 300px; height: 400px; border: 1px solid #333"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VirClipboard } from "../../packages/components/clipboard/index";
import { InitConfig } from "../../packages/components/clipboard/src/Clipboard.help";

const onCopyCallback = () => {
  alert("监听到了复制噢");
};

const clipboardInterceptor = (clipboardText: string) => {
  console.log("原有粘贴板的内容", clipboardText);
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
  const virClipboard = new VirClipboard(initConfig);
  console.log(virClipboard);
};

onMounted(init);
</script>

<style lang="scss" scoped></style>
