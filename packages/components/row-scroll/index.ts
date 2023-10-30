import VirRowScroll from "./src/VirRowScroll.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("VirRowScroll", VirRowScroll);
  },
};

export { VirRowScroll };
