import VirAside from "./src/VirAside.vue";
import VirContainer from "./src/VirContainer.vue";
import VirFooter from "./src/VirFooter.vue";
import VirHeader from "./src/VirHeader.vue";
import VirMain from "./src/VirMain.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("VirAside", VirAside);
    app.component("VirContainer", VirContainer);
    app.component("VirFooter", VirFooter);
    app.component("VirHeader", VirHeader);
    app.component("VirMain", VirMain);
  },
};

export { VirAside, VirContainer, VirFooter, VirHeader, VirMain };
