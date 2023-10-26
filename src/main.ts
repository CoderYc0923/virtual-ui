import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ShowCode from "./components/ShowCode.vue";
import router from "./router";
import "./assets/style/index.scss";
import './assets/style/cyanosis.markdown.scss' // markdown主题 掘金

//测试组件
import VirUi from '../packages/components'

const app = createApp(App);

app.use(router);
app.use(VirUi);

for (const [key,component] of Object.entries<any>(ElementPlusIconsVue)) {
    app.component(key,component)
}
app.component('ShowCode',ShowCode)

app.mount("#app");
