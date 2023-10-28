import VirDrawer from "./src/VirDrawer.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("VirDrawer", VirDrawer);
  },
};

export { VirDrawer };
