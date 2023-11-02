<script setup>
    import baseBarrage from './components/baseBarrage.vue'
</script>

# Barrage 弹幕插件(兼容 PC、H5)

一个`轻便` `开箱即用` `高自由度`的弹幕插件,支持 [文本、插槽] 两种模式的弹幕,适合各类弹幕需求场景,例如:视频、直播、H5 互动、广告等

## 基础用法

> Tip:<br> 1.异步加载的弹幕数据需手动调用`play()`方法进行弹幕播放, 此时`autoplay`属性失效。
> <br> 2.为考虑到性能,建议在弹幕数据量大时采用 `insert()`方式插入弹幕
> <br> 3. 弹幕数据格式自定义,故可实现高自由度的弹幕样式、事件等
> <br> 4. 由于弹幕组件设计方案问题,导致类似点赞等功能不能通过改动`danmus`数据响应式实现,即点赞样式与数据需分离处理,若需要实时点赞效果,可借鉴下方案例实现方式

<show-code showPath="barrage/components/baseBarrage">
<baseBarrage></baseBarrage>
</show-code>

## Barrage 属性

| 属性           | 说明                 | 类型    | 可选值 | 默认值 |
| -------------- | -------------------- | ------- | ------ | ------ |
| danmus         | 弹幕列表             | array   | ---    | []     |
| channels       | 轨道数量,0 撑满容器  | number  | ---    | 0      |
| autoplay       | 自动播放             | boolean | ---    | true   |
| loop           | 循环播放             | boolean | ---    | true   |
| useSlot        | 使用插槽             | boolean | ---    | false  |
| useSuspendSlot | 使用悬浮停留插槽     | boolean | ---    | false  |
| debounce       | 弹幕刷新率(ms)       | number  | ---    | 100    |
| speeds         | 弹幕速度(像素/秒)    | number  | ---    | 100    |
| randomChannel  | 是否随即轨道注入弹幕 | boolean | ---    | false  |
| fontSize       | 弹幕字号             | number  | ---    | 18     |
| top            | 弹幕垂直间距(px)     | number  | ---    | 10     |
| right          | 弹幕水平间距(px)     | number  | ---    | 10     |
| isSuspend      | 是否开启弹幕悬浮停留 | boolean | ---    | false  |
| extraStyle     | 弹幕额外样式         | string  | ---    | ""     |
| opacity        | 弹幕透明度(0-1)      | number  | ---    | 1      |

## Barrage 内置方法

| 方法名        | 说明                                     | 参数                    |
| ------------- | ---------------------------------------- | ----------------------- |
| play          | 开始/继续播放                            | ---                     |
| pause         | 暂停弹幕播放                             | ---                     |
| clear         | 停止播放并清空弹幕                       | ---                     |
| show          | 弹幕显示                                 | ---                     |
| hide          | 弹幕隐藏                                 | ---                     |
| reset         | 重置配置（也可在改变播放区域大小后调用） | ---                     |
| resize        | 容器尺寸改变时重新计算滚动距离           | ---                     |
| push          | 发送弹幕（插入到弹幕列表末尾，排队显示） | 弹幕数据，string\object |
| add           | 发送弹幕（插入到当前播放位置，实时显示） | 弹幕数据，string\object |
| insert        | 绘制弹幕（实时插入，不存入弹幕队列）     | 弹幕数据，string\object |
| getPlayState  | 获得当前播放状态                         | ---                     |
| getInsertList | 获取使用 insert 方法插入的弹幕列表       | ---                     |

## Barrage 事件

| 事件名   | 说明                           | 回调参数                 |
| -------- | ------------------------------ | ------------------------ |
| list-end | 所有弹幕插入完毕               | -                        |
| play-end | 所有弹幕播放完成（已滚出屏幕） | 最后一个弹幕的下标 index |
| dm-click | 点击相应弹幕                   | 当前弹幕数据、index      |

## Barrage 插槽

| 插槽名  | 说明               | 回调参数            |
| ------- | ------------------ | ------------------- |
| ---     | 默认插槽           | -                   |
| dm      | 自定义弹幕插槽     | 当前弹幕数据、index |
| suspend | 自定义弹幕悬浮插槽 | 当前弹幕数据、index |
