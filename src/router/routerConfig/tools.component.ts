import { RouteRecordRaw } from "vue-router";

export const toolsComponent: RouteRecordRaw[] = [
  {
    path: "promise-pool",
    meta: { title: "PromisePool 并发池" },
    component: () => import("../../docs/promisePool/README.md"),
  },
  {
    path: "clipboard",
    meta: { title: "Clipboard 剪贴板" },
    component: () => import("../../docs/clipboard/README.md"),
  },
];
