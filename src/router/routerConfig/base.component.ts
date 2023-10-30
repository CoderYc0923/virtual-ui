import { RouteRecordRaw } from "vue-router";

export const baseComponent: RouteRecordRaw[] = [
  {
    path: "button",
    meta: { title: "Button 按钮" },
    component: () => import("../../docs/button/README.md"),
  },
  {
    path: "layout",
    meta: { title: "Layout 布局" },
    component: () => import("../../docs/layout/README.md"),
  },
  {
    path: "container",
    meta: { title: "Container 容器" },
    component: () => import("../../docs/container/README.md"),
  },
  {
    path: "icon",
    meta: { title: "Icon 图标" },
    component: () => import("../../docs/icon/README.md"),
  },
  {
    path: "drawer",
    meta: { title: "Drawer 抽屉" },
    component: () => import("../../docs/drawer/README.md"),
  },
  {
    path: 'messagebox',
    meta: { title: 'MessageBox 弹框' },
    component: () => import('../../docs/messagebox/README-box.md')
  },
];
