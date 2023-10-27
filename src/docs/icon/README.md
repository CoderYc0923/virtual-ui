<script setup>
import baseIcon from './components/baseIcon.vue';
</script>

# Icon 图标

直接使用了 Element Plus 的图标集合。

## 使用图标

1. 需要全局注册组件，才能够直接在项目里使用。
2. 如若想查看所有可用的 SVG 图标请查阅 @element-plus/icons-vue 和 element-plus-icons 的源代码或当前页的 Icon Collection

## 安装

```shell
# 任意选择一个包管理器

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

## 注册所有图标

您需要从` @element-plus/icons-vue` 中导入所有图标并进行全局注册。

```ts
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

## 基础用法

<show-code showPath="icon/components/baseIcon">
<baseIcon></baseIcon>
</show-code>

## 图标集合

和 element plus 所提供图标名称一致，具体请查看：
[图标集合](https://element-plus.org/zh-CN/component/icon.html#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8-svg-%E5%9B%BE%E6%A0%87)

> **Tip**<br>
> 注意：例如 element ui 所复制的代码为 `<el-icon><Aim /></el-icon>` 只需要去 `Aim` 作为 `name` 属性即可

## icon 属性

| 属性  | 说明                        | 类型                           | 可选值 | 默认值 |
| ----- | --------------------------- | ------------------------------ | ------ | ------ |
| name  | svg 的 名字                 | string                         | --     | --     |
| color | svg 的 fill 颜色            | `Pick<CSSProperties, 'color'>` | --     | black  |
| size  | SVG 图标的大小，size x size | string/number                  | --     | 16px   |
