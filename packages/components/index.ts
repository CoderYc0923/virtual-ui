import { App } from "vue";

export * from "./button";
export * from "./icon";
export * from "./layout";
export * from "./container";
export * from "./drawer";
export * from "./message-box";
export * from "./row-scroll";
export * from "./infinite-scroll";
export * from "./waterfall-flow";
export * from "./barrage";
export * from './water-mark'

import button from "./button";
import icon from "./icon";
import layout from "./layout";
import container from "./container";
import drawer from "./drawer";
import rowScroll from "./row-scroll";
import infiniteScroll from "./infinite-scroll";
import waterfallFlow from "./waterfall-flow";
import barrage from "./barrage";

import "../../src/assets/style/index.scss";

const components = [
  button,
  icon,
  layout,
  container,
  drawer,
  rowScroll,
  infiniteScroll,
  waterfallFlow,
  barrage,
];

export default {
  install(app: App) {
    components.map((item) => item.install(app));
  },
};
