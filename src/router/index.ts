import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from "vue-router";
import { routerDocsComponent } from "./routerConfig";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/doc/component" },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue"),
  },
  {
    path: "/doc/component",
    component: () => import("@/views/DocComponent.vue"),
    redirect: "/doc/component/index",
    children: routerDocsComponent,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/Error.vue"),
  },
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

const router: Router = createRouter(options);

export default router;
