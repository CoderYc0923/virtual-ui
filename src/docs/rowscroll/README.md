<script setup>
    import baseRowScroll from './components/baseRowScroll.vue'
</script>

# RowScroll 横向滚动容器

用于 PC 端鼠标滚轮控制元素横向滚动

## 基础用法

通过`width``height` 来定义横向滚动容器的宽高。

<show-code showPath="rowscroll/components/baseRowScroll">
    <baseRowScroll></baseRowScroll>
</show-code>

## Button 属性

| 属性     | 说明     | 类型                        | 可选值 | 默认值       |
| -------- | -------- | --------------------------- | ------ | ------------ |
| width | 容器宽 | number | ---    | 300 |
| height | 容器高 | number | ---    | 32 |

## RowScroll 插槽

| 插槽名 | 说明                                    |
| ------ | --------------------------------------- |
| ---    | 插槽自定义内容区只需填入 N 个子元素即可 |
