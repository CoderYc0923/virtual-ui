import { RouteRecordRaw } from "vue-router";

export const toolsComponent: RouteRecordRaw[] = [
  {
    path: "promise-pool",
    meta: { title: "PromisePool 并发池" },
    component: () => import("../../docs/promisePool/README.md"),
  },
];
