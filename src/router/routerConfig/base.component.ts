import { RouteRecordRaw } from "vue-router";

export const baseComponent: RouteRecordRaw[] = [
  {
    path: "button",
    meta: { title: "Button 按钮" },
    component: () => import("../../docs/button/README.md"),
  },
//   {
//     path: "icon",
//     meta: { title: "Icon 图标" },
//     component: () => import("../../docs/icon/README.md"),
//   },
];
