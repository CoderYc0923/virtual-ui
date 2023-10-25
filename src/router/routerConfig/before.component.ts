import { RouteRecordRaw } from "vue-router";

export const beforeComponent: RouteRecordRaw[] = [
  {
    path: "index",
    meta: { title: "项目介绍" },
    component: () => import("@/docs/index/README.md"),
  },
  {
    path: "install",
    meta: { title: "安装" },
    component: () => import("@/docs/index/INSTALL.md"),
  },
  {
    path: "start",
    meta: { title: "快速开始" },
    component: () => import("@/docs/index/START.md"),
  },
];
