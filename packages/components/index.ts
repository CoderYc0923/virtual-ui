import { App } from "vue";

export * from "./button";
export * from "./icon";
export * from "./layout";
export * from "./container";
export * from "./drawer";
export * from './message-box';
export * from './row-scroll';

import button from "./button";
import icon from "./icon";
import layout from "./layout";
import container from "./container";
import drawer from "./drawer";
import rowScroll from "./row-scroll";

import "../../src/assets/style/index.scss";

const components = [button, icon, layout, container, drawer, rowScroll];

export default {
  install(app: App) {
    components.map((item) => item.install(app));
  },
};
