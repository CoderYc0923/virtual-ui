<script setup>
    import baseInfiniteScroll from './components/baseInfiniteScroll.vue'
    import customInfiniteScroll from './components/customInfiniteScroll.vue'
</script>

# InfiniteScroll 无限滚动容器

适用于列表场景的无限滚动容器，采用IntersectionObserver方案([查看兼容性](https://caniuse.com/?search=IntersectionObserver))
> Tip<br>
> 注意：因为采用的是交叉观察器方案，若需要使用多个无限滚动容器，需传入唯一的`targetId`

## 基础用法

通过`width``height` 来定义横向滚动容器的宽高，并实现简单的分页请求列表

<show-code showPath="infinitescroll/components/baseInfiniteScroll">
<baseInfiniteScroll></baseInfiniteScroll>
</show-code>

## 通过插槽自定义加载以及结束文案

通过具名插槽`loadingIcon`实现自定义加载中显示内容,通过`reachedText` 自定义结束文案

<show-code showPath="infinitescroll/components/customInfiniteScroll">
<customInfiniteScroll></customInfiniteScroll>
</show-code>

## Button 属性

| 属性     | 说明     | 类型                        | 可选值 | 默认值       |
| -------- | -------- | --------------------------- | ------ | ------------ |
| width | 容器宽 | number | ---    | 300 |
| height | 容器高 | number | ---    | 400 |
| loading | 是否为加载中状态 | boolean | ---    | false |
| loading-icon | 自定义加载中图标 | string | 参考icon组件    | Loading |
| iconColor | 加载中图标颜色 | string | ---    | black |
| reachedText | 结束文案 | string | ---    | 没有更多了 |
| hideReachedText | 是否隐藏结束文案 | boolean | ---    | false |
| targetId | 被观察对象唯一ID值 | string | ---    | goal-help |

## RowScroll 插槽

| 插槽名 | 说明                                    |
| ------ | --------------------------------------- |
| ---    | 插槽自定义内容区只需填入 N 个子元素即可 |
| loadingIcon    | 自定义加载中显示内容 |
