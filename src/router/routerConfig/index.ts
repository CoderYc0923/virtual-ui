import { RouteRecordRaw } from "vue-router";
import { beforeComponent } from "./before.component";
import { baseComponent } from "./base.component";
import { businessComponent } from "./business.component";
import { toolsComponent } from "./tools.component";

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
  businessComponents: {
    title: "Business 业务组件",
    routerData: businessComponent,
  },
  toolsComponents: {
    title: "Tools 业务工具库",
    routerData: toolsComponent,
  },
} as IRouterConfigType;

export const routerDocsComponent = Object.values(
  routerDocsComponentConfig
).flatMap((item) => item.routerData);
