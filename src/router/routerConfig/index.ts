import { RouteRecordRaw } from "vue-router";
import { beforeComponent } from "./before.component";
import { baseComponent } from "./base.component";

export interface IRouterType {
  title: string;
  routerData: RouteRecordRaw[];
}

interface IRouterConfigType {
  [key: string]: IRouterType;
}

export const routerDocsComponentConfig = {
  index: {
    title: "前言",
    routerData: beforeComponent,
  },
  baseComponents: {
    title: "Basic 基础组件",
    routerData: baseComponent,
  },
} as IRouterConfigType;

export const routerDocsComponent = Object.values(
  routerDocsComponentConfig
).flatMap((item) => item.routerData);
