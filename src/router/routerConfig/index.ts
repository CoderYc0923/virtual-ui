import { RouteRecordRaw } from "vue-router";
import { beforeComponent } from "./before.component";

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
} as IRouterConfigType;

export const routerDocsComponent = Object.values(
  routerDocsComponentConfig
).flatMap((item) => item.routerData);
