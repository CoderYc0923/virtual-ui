<template>
  <div>
    <div v-for="(item, index) in asideData" :key="index" class="px-2 mt-8">
      <h2 class="text-base font-bold">{{ item.title }}</h2>
      <router-link v-for="(routerItem, routerIndex) in item.routerData" :key="`${index}-${routerIndex}`"
        :to="baseLink + '/' + routerItem.path" @click="$emit('selectLink', baseLink + '/' + routerItem.path)">
        <div :class="{
          'select-router-item':
            localRoute === baseLink + '/' + routerItem.path,
        }" class="text-sm hover:text-lightBlue-300 p-2 pl-4 text-gray-500 rounded-lg font-light transition">
          {{ routerItem.meta?.title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IRouterType } from "../router/routerConfig";

defineProps({
  asideData: {
    type: Array as () => IRouterType[],
  },
  baseLink: {
    type: String,
    default: "/doc/component",
  },
});
defineEmits(["selectLink"]);

const router = useRouter();
const localRoute = ref(router.currentRoute.value.path);

onBeforeRouteUpdate((to) => {
  localRoute.value = to.path;
});
</script>

<style>
.select-router-item {
  @apply bg-lightBlue-300 text-lightBlue-400 hover:text-lightBlue-400 font-bold bg-opacity-20 font-normal !important;
}
</style>
