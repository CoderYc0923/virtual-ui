<template>
  <div class="border box-border rounded">
    <!-- 展示区 -->
    <div class="box-border p-6">
      <slot> </slot>
    </div>
    <!-- 工具区 -->
    <div class="border-t h-10 flex items-center justify-end p-2">
      <ul class="flex">
        <!-- <li title="去github查看" class="code-preview-icon">
          <a :href="linkCode">
            <svg
              class="icon-svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              data-v-65a7fb6c=""
            >
              <path
                fill="currentColor"
                d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
              ></path>
            </svg>
          </a>
        </li> -->
        <li title="复制" class="code-preview-icon">
          <svg
            class="icon-svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            data-v-65a7fb6c=""
            @click="copyCode(sourceCode as string)"
          >
            <path
              fill="currentColor"
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
            ></path>
          </svg>
        </li>
        <li title="查看代码" class="code-preview-icon">
          <svg
            class="icon-svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            data-v-65a7fb6c=""
            @click="openAndCloseCode"
          >
            <path
              fill="currentColor"
              d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
    <!-- 代码区 -->
    <transition name="scale">
      <div v-show="isShow" class="relative">
        <pre
          class="language-html"
          style="background-color: #f5f7fa; margin: 0"
        ><code style="background-color: #F5F7FA" class="language-html">{{ sourceCode }}</code></pre>
        <div
          class="group flex justify-center items-center h-12 cursor-pointer sticky bottom-2"
          @click="openAndCloseCode"
        >
          <svg
            class="h-4 w-4 group-hover:text-lightBlue-300 mr-2 transition"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-65a7fb6c=""
          >
            <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
          </svg>
          <span class="group-hover:text-lightBlue-300 transition">隐藏</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import { copyCode } from '../utils/tool.utils'
import "../assets/style/prism.css";

const props = defineProps({
  linkCode: {
    type: String,
    default:
      "https://gitee.com/ye_chao111/virtual-ui/tree/develop/packages/components",
  },
  showPath: {
    type: String,
    default: "button/components/baseButton",
  },
});

const sourceCode = ref<string>();

const isShow = ref<boolean>(false);
const openAndCloseCode = () => {
  isShow.value = !isShow.value;
};

onMounted(async () => {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    /* @vite-ignore */
    const data: any = await import(
      /* @vite-ignore */ `../docs/${props.showPath}.vue?raw`
    );
    sourceCode.value = data.default;
  } else {
    sourceCode.value = await fetch(`/virtual-ui/docs/${props.showPath}.vue`).then((res) =>
      res.text()
    );
  }
  await nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<style>
.code-preview-icon {
  @apply ml-4 cursor-pointer transition !important;
}
.icon-svg {
  @apply h-4 w-4 text-gray-500 hover:text-black;
}
/*}*/
.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
}
.scale-leave-from,
.scale-enter-to {
  transform: scale(1);
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
