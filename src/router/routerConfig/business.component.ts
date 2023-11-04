import { RouteRecordRaw } from "vue-router";

export const businessComponent: RouteRecordRaw[] = [
  {
    path: "row-scroll",
    meta: { title: "RowScroll 横向滚动" },
    component: () => import("../../docs/rowscroll/README.md"),
  },
  {
    path: "infinite-scroll",
    meta: { title: "InfiniteScroll 无限滚动" },
    component: () => import("../../docs/infinitescroll/README.md"),
  },
  {
    path: "waterfall-flow",
    meta: { title: "WaterfallFlow 瀑布流" },
    component: () => import("../../docs/waterfallflow/README.md"),
  },
  {
    path: "barrage",
    meta: { title: "Barrage 弹幕插件" },
    component: () => import("../../docs/barrage/README.md"),
  },
  {
    path: "water-mark",
    meta: { title: "WaterMark 水印" },
    component: () => import("../../docs/watermark/README.md"),
  },
];
