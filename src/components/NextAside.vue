<template>
  <div class="h-20 border-t px-2 pt-2.5 pb-12 flex justify-between box-border">
    <router-link
      v-if="useNext.prev"
      class="next-com"
      :to="`${baseLink}/${useNext.prev.path}`"
    >
      <span>{{ useNext.prev.meta ? useNext.prev.meta.title : '' }}</span>
    </router-link>
    <router-link
      v-if="useNext.next"
      class="next-com ml-auto"
      :to="`${baseLink}/${useNext.next.path}`"
    >
      <span>{{ useNext.next.meta ? useNext.next.meta.title : '' }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from "vue-router";
import { IRouterType } from "../router/routerConfig";

const props = defineProps({
  asideData: {
    type: Array as () => IRouterType[],
    required: true,
  },
  baseLink: {
    type: String,
    default: "/doc/component",
  },
  selfLink: {
    type: String,
    required: true,
  },
});

const useNext = computed(() => {
  const allData:RouteRecordRaw[] = props.asideData.flatMap((item) => item.routerData);
  const selfIndex = allData.findIndex(
    (item) => `${props.baseLink}/${item.path}` === props.selfLink
  );
  return {
    prev: allData[selfIndex - 1],
    next: allData[selfIndex + 1]
  }
});
</script>

<style scoped>
.next-com {
  @apply flex items-center text-primary hover:text-sky-300 text-sm;
}
</style>
