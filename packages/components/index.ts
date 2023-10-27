import { App } from "vue";

export * from "./button";
export * from "./icon";
export * from "./layout";
export * from "./container";

import button from "./button";
import icon from "./icon";
import layout from "./layout";
import container from "./container";

import "../../src/assets/style/index.scss";

const components = [button, icon, layout, container];

export default {
  install(app: App) {
    components.map((item) => item.install(app));
  },
};
