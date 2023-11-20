<script setup>
    import basePromisePool from './components/basePromisePool.vue'
</script>

# VirPromisePool 并发池

基于`Promise`的前端并发异步控制 SDK，并支持`数量控制` `中断`等功能。<br>
VirPromisePool 提供多种回调 hook,可灵活操控并发任务， 满足基本相关业务需求。<br>
满足场景：`文件分片上传` `项目全局环境请求控制`等需要异步并发控制的场景

> Tip<br>
> 若 VirPromisePool 未能很好的支持您的业务场景，欢迎向我们[反馈](https://github.com/CoderYc0923/virtual-ui/issues)<br>
> 收到反馈后我们会尽快处理解决。

## 案例

> Tip<br>
> 详情见控制台（F11）

<show-code showPath="promisePool/components/basePromisePool">
<basePromisePool></basePromisePool>
</show-code>

## VirPromisePool 初始化参数

| 属性           | 说明                               | 类型     | 可选值 | 默认值 | 返回值                                 |
| -------------- | ---------------------------------- | -------- | ------ | ------ | -------------------------------------- |
| maxCount       | 可并发上传的最大数量               | number   | ---    | 5      | -                                      |
| debug          | 是否开启流程打印（开启后见控制台） | boolean  | ---    | false  | -                                      |
| onFinish       | 并发任务全部完成的回调             | Function | ---    | -      | -                                      |
| onTaskFinish   | 单个并发任务完成的回调             | Function | ---    | -      | `taskWithCallbacks<T>`（返回当前完成的任务） |
| customTaskInfo | 并发任务自定义公共参数信息         | Object   | ---    | {}     | -                                      |

## VirPromisePool 方法

| 函数名   | 说明                                                         | 参数                    |
| -------- | ------------------------------------------------------------ | ----------------------- |
| addTask  | 添加任务                                                     | task: `() => Promise<T>` |
| stopTask | 中断任务，返回当前还在运行的任务数组`taskWithCallbacks<T>` | -                       |
