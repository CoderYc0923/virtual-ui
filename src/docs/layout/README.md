<script setup>
import baseLayout from './components/baseLayout.vue';
import gutterLayoutShow from './components/gutterLayoutShow.vue';
import luanLayoutShow from './components/luanLayoutShow.vue';
import offsetLayoutShow from './components/offsetLayoutShow.vue';
import alignLayoutShow from './components/alignLayoutShow.vue';
import tagLayoutShow from './components/tagLayoutShow.vue';
</script>

# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

> **Tip** <br>
> 组件默认使用 Flex 布局，不需要手动设置 type="flex"。因为你设置其他的也没任何作用

## 基础布局

使用列创建基础网格布局。<br>
通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<show-code showPath="layout/components/baseLayout">
<baseLayout></baseLayout>
</show-code>

## 分栏间隔

支持列间距.<br>
行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

<show-code showPath="layout/components/gutterLayoutShow">
<gutterLayoutShow></gutterLayoutShow>
</show-code>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<show-code showPath="layout/components/luanLayoutShow">
<luanLayoutShow></luanLayoutShow>
</show-code>

## 列偏移

您可以指定列偏移量。<br>
通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

<show-code showPath="layout/components/offsetLayoutShow">
<offsetLayoutShow></offsetLayoutShow>
</show-code>

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。<br>
您可以通过 `justify` 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

<show-code showPath="layout/components/alignLayoutShow">
<alignLayoutShow></alignLayoutShow>
</show-code>

## 使用指定标签渲染

可以通过 `tag` 属性来指定最终渲染的标签 默认是div

<show-code showPath="layout/components/tagLayoutShow">
<tagLayoutShow></tagLayoutShow>
</show-code>

## Row 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| gutter | 栅格间隔 | number | -- | 0 |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between/space-evenly | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

## Row 插槽

| 插槽名 | 说明 | 子标签 |
| - | - | - |
| --- | 自定义默认内容 | Col |

## Col 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| span | 栅格占据的列数 | number | -- | 24 |
| offset | 栅格左侧的间隔格数 | number | -- | 0 |
| push | 栅格向右移动格数 | number | -- | 0 |
| pull | 栅格向左移动格数 | number | -- | 0 |

## Col 插槽

| 插槽名 | 说明 |
| - | - |
| --- | 自定义默认内容 |

