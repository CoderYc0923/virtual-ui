import VirCol from "./src/VirCol.tsx";
import VirRow from "./src/VirRow.tsx";
import { App } from "vue";

export default {
  install(app: App) {
    app.component(VirCol.name, VirCol);
    app.component(VirRow.name, VirRow);
  },
};

export { VirCol, VirRow };
