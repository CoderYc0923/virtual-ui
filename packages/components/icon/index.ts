import VirIcon from './src/VirIcon.vue'
import { App } from 'vue'

//全局导出
export default {
    install(app: App) {
        app.component('VirIcon', VirIcon)
    }
}

//局部导出
export { VirIcon }