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
];
