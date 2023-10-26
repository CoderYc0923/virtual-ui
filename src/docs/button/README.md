<script setup>
// import baseButton from './baseButton.vue';
// import disabledButtonShow from './disabledButtonShow.vue';
// import textButtonShow from './textButtonShow.vue';
// import iconButtonShow from './iconButtonShow.vue';
// import groupButtonShow from './groupButtonShow.vue';
// import loadingButtonShow from './loadingButtonShow.vue';
// import sizeButtonShow from './sizeButtonShow.vue';
</script>
# Button 按钮

常用的操作按钮。

## 基础用法 

使用`type`  `plain` `round` `circle` 来定义按钮的样式。


## 禁用状态

你可以使用`disabled`属性来定义按钮是否被禁用<br>
使用`disabled`属性来控制按钮是否为禁用状态。该属性接受一个Boolean类型的值

> Tip<br>
> 注意：禁用状态按钮无法触发点击事件，第一个按钮未设置禁用，可以打开控制台对比观察点击效果

## 文字按钮

没有边框和背景色的按钮

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。<br>
使用 `icon` 属性来为按钮添加图标。 你可以在 `bl-icon` 组件里找到提供的内置图标。

## 按钮组
通过按钮组来组合一系列相似的操作。<br>
使用标签 `<el-button-group>` 来给按钮分组。


## 加载中

点击按钮来加载数据，并向用户反馈加载状态。<br>
通过设置 `loading` 属性为 `true` 来显示加载中状态。

> Tip<br>
> 注意：`loading`状态下，按钮无法触发点击事件


## 各种尺寸按钮
除了默认尺寸外，Button 组件还提供了三种额外的尺寸供您在不同的场景中选择。<br>
使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

> **Tip**<br>
> 你可以直接在默认插槽中加入图标，为其设置旋转动画，只需要加入`disabled`属性即可达到一样的效果<br>
> 注意：这样做并没有更高级，虽然可以，但没必要。


## Button 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - | 
| size | 尺寸 | string | **large / default / small** | default |
| type | 类型 | string | **primary / success / warning <br>/ danger / info / text** | --- |
| plain | 是否为朴素按钮 | boolean | --- | false |
| round | 是否为圆角按钮 | boolean | --- | false |
| circle | 是否为圆形按钮 | boolean | --- | false |
| loading | 是否为加载中状态 | boolean | --- | false |
| loading-icon | 自定义加载中图标 | string | --- | Loading |
| disabled | 是否为禁用状态 | boolean | --- | false |
| iconColor | 加载中图标颜色 | string | --- | white |
| nativeType | 原生type属性 | string | --- | button |

## Button 插槽
| 插槽名 | 说明 |
| - | - |
| --- | 自定义默认内容 |
