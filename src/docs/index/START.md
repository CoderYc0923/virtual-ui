# 快速开始

本节将介绍如何在项目中使用 VirtualUI。

## 用法

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
import {createApp} from 'vue'
import App from './App.vue'
// 引入组件
import VirUi from 'virtual-ui'
// 引入图标 没有下载需要npm下载
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入样式
import 'virtual-ui/VirUi/style.css'
// 注册组件
const app = createApp(App).use(VirUi)
// 注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

```
> **Tip**<br>
> 注意：umd版本无法正常工作，es版本才可以，请使用es版本，即 `virtual-ui.es.js`。

> **Tip**<br>
> 如果你使用的是直接在代码仓库下载的方式，直接引入对应文件即可(`es.js`和`css`)

