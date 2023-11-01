import VirBarrage from "./src/VirBarrage.vue";
import { App } from "vue";

export default {
    install(app: App) {
        app.component('VirBarrage',VirBarrage)
    }
}

export { VirBarrage }
