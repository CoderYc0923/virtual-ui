<script setup>
    import baseClipboard from './components/baseClipboard.vue'
</script>

# VirClipboard 剪贴板

基于 clipboard API 封装的剪贴板工具，简单易用，兼容性好。<br>
支持`复制监听` `复制内容拦截` `禁止复制`等功能，可灵活操控以满足基本相关业务需求。<br>
满足场景：`禁止复制` `复制前后缀添加` `类淘宝抖音的分享复制操作`等需要异步并发控制的场景

> Tip<br>
> 若 VirClipboard 未能很好的支持您的业务场景，欢迎向我们[反馈](https://github.com/CoderYc0923/virtual-ui/issues)<br>
> 收到反馈后我们会尽快处理解决。

## 案例

<show-code showPath="clipboard/components/baseClipboard">
<baseClipboard></baseClipboard>
</show-code>

## VirClipboard 初始化参数

| 属性                 | 说明             | 类型     | 可选值 | 默认值                              | 返回值                         |
| -------------------- | ---------------- | -------- | ------ | ----------------------------------- | ------------------------------ |
| disableCopy          | 禁止复制         | boolean  | ---    | false                               | -                              |
| onCopyCallback       | 复制操作的回调   | Function | ---    | () => console.log("监听了复制操作") | -                              |
| clipboardInterceptor | 剪贴板内容拦截器 | Function | ---    | (text: string) => text              | 若覆写了拦截器，需要返回一个值 |

## VirClipboard 方法

| 函数名 | 说明     | 参数 |
| ------ | -------- | ---- |
| remove | 移除监听 | ---  |
