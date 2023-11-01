<script setup>
    import baseWaterfallFlow from './components/baseWaterfallFlow.vue'
    import infiniteWaterfallFlow from './components/infiniteWaterfallFlow.vue'
</script>

# WaterfallFlow 瀑布流容器

使用 CSS `Grid`布局方案，性能消耗低。

## 基础用法

通过`width` `height` `colums` `gap`来定义瀑布流容器的宽高、列数和间隔。

<show-code showPath="waterfallflow/components/baseWaterfallFlow">
<baseWaterfallFlow></baseWaterfallFlow>
</show-code>

## 结合 InfiniteScroll 实现无限滚动瀑布流容器

> Tip<br>
> 注意：`overflow`设置为visible时,无需设置`height`属性(当然设置了也没有用)

<show-code showPath="waterfallflow/components/infiniteWaterfallFlow">
<infiniteWaterfallFlow></infiniteWaterfallFlow>
</show-code>

## WaterfallFlow 属性

| 属性     | 说明   | 类型   | 可选值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| width    | 容器宽 | number、string | ---    | 100%    |
| height   | 容器高 | number、string | ---    | 100%    |
| overflow | 容器溢出类型 | string |  auto、visible   | auto    |
| dataList | 数据   | array  | ---    | []     |
| columns  | 列数   | number | ---    | 2      |
| gap      | 间隔   | number | ---    | 5      |

## WaterfallFlow 插槽

| 插槽名     | 说明                                       |
| ---------- | ------------------------------------------ |
| slot-scope | 插槽自定义内容区只需填入每个瀑布流元素即可 |
