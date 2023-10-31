import VirInfiniteScroll from "./src/VirInfiniteScroll.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("VirInfiniteScroll", VirInfiniteScroll);
  },
};

export { VirInfiniteScroll };
