<template>
  <div
    id="shit-nav"
    class="px-6 py-4 box-border border-b flex items-center sticky top-0 bg-white"
    style="z-index: 10001"
  >
    <div class="cursor-pointer flex align-center" @click="drawer = true">
      <vir-icon name="expand" size="23"></vir-icon>
      <span class="ml-2">Menu</span>
    </div>
    <vir-icon
      class="cursor-pointer ml-auto"
      name="top"
      size="23"
      @click="gotoTop"
    ></vir-icon>
  </div>
  <vir-drawer v-model="drawer" direction="ltr" :with-header="false">
    <aside-common
      :aside-data="asideData"
      :base-link="baseLink"
      @selectLink="selectLinkHandler"
    ></aside-common>
  </vir-drawer>
</template>

<script setup lang="ts">
import AsideCommon from "./AsideCommon.vue";
import VirIcon from "../../packages/components/icon/src/VirIcon.vue";
import { gotoTop } from "../utils/tool.utils";
import { IRouterType } from "../router/routerConfig";
import { ref } from "vue";

defineProps({
  asideData: {
    type: Array as () => IRouterType[],
  },
  baseLink: {
    type: String,
    default: "/doc/component",
  },
});

const drawer = ref(false);
const selectLinkHandler = () => {
  setTimeout(() => {
    drawer.value = false;
  }, 200);
};
</script>

<style></style>
