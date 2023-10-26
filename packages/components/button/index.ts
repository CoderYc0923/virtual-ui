import VirButton from './src/VirButton.vue'
import { App } from 'vue'

//全局导出
export default {
    install(app: App) {
        app.component('VirButton', VirButton)
    }
}

//局部导出
export { VirButton }