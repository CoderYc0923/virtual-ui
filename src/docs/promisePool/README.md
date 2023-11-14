<script setup>

</script>

# WaterMark 水印

`Canvas`水印方案，兼容性好。<br>
【多场景覆盖】：支持向`页面元素` `图片`添加`文字` `图片` 水印 以及对图片添加`文字暗水印及暗水印解密`<br>
【高安全性】：支持水印守卫，防止篡改删除水印<br>
【高自由度】：水印支持自定义字体颜色、字体大小、间距、层级、旋转角度<br>

## 向页面元素添加文字水印

## 向页面元素添加图片水印

> Tip<br>
> 注意：由于图片水印通过`background-image`注入`canvas`，故此模式下无法进行设置水印间的间距

## 向图片添加文字水印

## 向图片添加文字暗水印

## WaterMark.page 属性

| 属性     | 说明                                   | 类型        | 可选值        | 默认值              |
| -------- | -------------------------------------- | ----------- | ------------- | ------------------- |
| target   | 目标元素                               | HTMLElement | ---           | document.body       |
| text     | 水印文字内容(text or image choose one) | string      | ---           | VirWaterMark        |
| image    | 水印图片地址(text or image choose one) | string      | auto、visible | ---                 |
| color    | 水印文字颜色                           | array       | ---           | rgba(0, 0, 0, 0.15) |
| fontSize | 水印文字大小                           | number      | ---           | 24                  |
| zIndex   | 水印层级                               | number      | ---           | 10000               |
| rowGap   | 水印横向间距（仅 text）                | number      | ---           | 0                   |
| colGap   | 水印纵向间距 （仅 text）               | number      | ---           | 0                   |

## WaterMark.image 属性

| 属性        | 说明                                   | 类型        | 可选值                                                     | 默认值              |
| ----------- | -------------------------------------- | ----------- | ---------------------------------------------------------- | ------------------- |
| target      | 目标元素                               | HTMLElement | ---                                                        | document.body       |
| text        | 水印文字内容(text or image choose one) | string      | ---                                                        | VirWaterMark        |
| image       | 水印图片地址(text or image choose one) | string      | auto、visible                                              | ---                 |
| imageWidth  | 水印图片宽度 （仅 text）               | number      | ---                                                        | ---                 |
| imageHeight | 水印图片高度 （仅 text）               | number      | ---                                                        | ---                 |
| color       | 水印文字颜色                           | array       | ---                                                        | rgba(0, 0, 0, 0.15) |
| fontSize    | 水印文字大小                           | number      | ---                                                        | 24                  |
| secret      | 开启暗水印                             | boolean     | ---                                                        | false               |
| position    | 水印位置                               | number      | repeat、center、bottomRight、bottomLeft、topLeft、topRight | repeat              |

## WaterMark.utils 内置函数

| 函数名      | 说明                               | 参数          |
| ----------- | ---------------------------------- | ------------- |
| decodeImage | 暗水印解密，返回 `Promise<string>` | `url<string>` |

## WaterMark 事件

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| remove | 清除水印 | ---  |
