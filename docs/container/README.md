<script setup>
import baseContainer from './components/baseContainer.vue';
import asideContainerShow from './components/asideContainerShow.vue';
import headerContainerShow from './components/headerContainerShow.vue';
import headerFooterContainerShow from './components/headerFooterContainerShow.vue';
import asideAllContainerShow from './components/asideAllContainerShow.vue';
</script>

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：<br>
`<vir-container>`：外层容器。 当子元素中包含 `<vir-header>` 或 `<vir-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。<br>

`<vir-header>`：顶栏容器。<br>

`<vir-aside>`：侧边栏容器。<br>

`<vir-main>`：主要区域容器。<br>

`<vir-footer>`：底栏容器。<br>

> **Tip**<br>
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<vir-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<vir-container>`

## 常见页面布局

<show-code showPath="container/components/baseContainer">
<baseContainer></baseContainer>
</show-code>

<br>
<br>

<show-code showPath="container/components/asideContainerShow">
<asideContainerShow></asideContainerShow>
</show-code>

<br>
<br>

<show-code showPath="container/components/headerContainerShow">
<headerContainerShow></headerContainerShow>
</show-code>

<br>
<br>

<show-code showPath="container/components/headerFooterContainerShow">
<headerFooterContainerShow></headerFooterContainerShow>
</show-code>

<br>
<br>

<show-code showPath="container/components/asideAllContainerShow">
<asideAllContainerShow></asideAllContainerShow>
</show-code>

## Container 属性

| 属性      | 说明             | 类型   | 可选值                | 默认值                                                                   |
| --------- | ---------------- | ------ | --------------------- | ------------------------------------------------------------------------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `vir-header` 或 `vir-footer` 时为 vertical，否则为 horizontal |

## Header 属性

| 属性   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | --     | 64px   |

## Aside 属性

| 属性  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | --     | 240px  |

## Footer 属性

| 属性   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | --     | 64px   |
