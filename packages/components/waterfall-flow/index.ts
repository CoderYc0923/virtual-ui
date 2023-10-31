import VirWaterfallFlow from "./src/VirWaterfallFlow.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("VirWaterfallFlow", VirWaterfallFlow);
  },
};

export { VirWaterfallFlow };
