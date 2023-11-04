<template>
  <shit-navigation :aside-data="asideData" :base-link="baseLink" />
  <div
    id="doc-page"
    class="w-full m-auto flex px-8 xl:w-1200 xl:px-0 box-border"
  >
    <aside
      id="doc-aside"
      class="utils-scrollbar overflow-auto w-52 xl:fixed"
      style="top: 55px"
    >
      <aside-common
        :aside-data="asideData"
        :base-link="baseLink"
      ></aside-common>
    </aside>
    <section
      id="doc-main"
      ref="docMd"
      class="box-border px-5 xl:pl-64 w-full xl:w-10/12 pb-8"
    >
      <router-view class="flex-1" />
      <next-aside
        :aside-data="asideData"
        :base-link="baseLink"
        :self-link="selfLink"
      />
    </section>
    <section id="doc-catalogue" class="w-60 h-full xl:fixed xl:right-5 pt-8">
      <catalogue-common
        :catalogue-list="catalogueData"
        :self-link="minTopOffset"
      ></catalogue-common>
    </section>
  </div>
</template>

<script setup lang="ts">
import { IRouterType, routerDocsComponentConfig } from "../router/routerConfig";
import { throttle } from "../../packages/utils/common/common";
import AsideCommon from "./AsideCommon.vue";
import NextAside from "./NextAside.vue";
import CatalogueCommon from "./CatalogueCommon.vue";
import ShitNavigation from "./ShitNavigation.vue";

const props = defineProps({
  asideKeys: {
    type: Array as () => Array<string>,
    required: true,
  },
  baseLink: {
    type: String,
  },
});

const asideData = ref<IRouterType[]>([]);
watch(
  () => props.asideKeys,
  (newVal) => {
    asideData.value = newVal!.map(
      (item: string) => routerDocsComponentConfig[item]
    );
  },
  {
    immediate: true,
  }
);

const docMd = ref<HTMLDivElement>();
const catalogueData = ref<{ text: string; id: string }[]>();
const minTopOffset = ref<string>();
const getTopMore = (els: HTMLElement[]) => {
  const data = els
    .map((item) => ({
      offsetTop: item.getBoundingClientRect().top,
      text: item.innerText,
    }))
    .filter((item) => item.offsetTop > 0);
  const minElement = data.sort((a, b) => a.offsetTop - b.offsetTop)[0];
  return minElement?.text;
};
const scrollEvent = (els: HTMLElement[]) =>
  throttle(() => {
    minTopOffset.value = getTopMore(els);
  }, 50);
const onScrollEvent = (els: HTMLElement[]) => {
  document.onscroll = scrollEvent(els);
};
const updateDocCatalogue = () => {
  const targetEls = "h2,h3,h4,h5,h6";
  const hElement = docMd.value?.querySelectorAll(targetEls) as any;
  //监听滚动
  onScrollEvent([...hElement]);
  //获取当前菜单下目录
  catalogueData.value = [...hElement].map((item) => {
    return {
      text: item.innerText,
      id: item.id,
    };
  });
};
onMounted(updateDocCatalogue);

const router = useRouter();
let selfLink = ref(router.currentRoute.value.path);
onBeforeRouteUpdate((to) => {
  selfLink.value = to.path;
  nextTick(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      updateDocCatalogue();
    }, 200);
  });
});
// router.afterEach((to) => {
//   console.log('111111', to);

//   window.scrollTo(0, 0);
//   updateDocCatalogue();
// })
</script>

<style>
#doc-aside {
  height: 93%;
}
</style>
