import { App } from "vue";

export * from "./button";
export * from "./icon";

import button from "./button";
import icon from "./icon";

import '../../src/assets/style/index.scss'

const components = [button, icon];

export default {
  install(app: App) {
    components.map((item) => item.install(app));
  },
};
