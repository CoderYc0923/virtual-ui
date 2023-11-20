
# MessageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

> **Tip**
> 从设计上来说，MessageBox 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。

## 消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用$alert方法即可打开消息提示， 它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，message和title。 我们使用了callback参数来接受关闭后的回调。

<show-code showPath="messagebox/components/baseMessageBox">
<baseMessageBox></baseMessageBox>
</show-code>

## 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。除了上面一个列子使用的callback回调之外，本身此函数会返回一个promise,也可以得知用户操作。

<show-code showPath="messagebox/components/confirmMessageBox">
<confirmMessageBox></confirmMessageBox>
</show-code>

## 区分取消操作与关闭操作
有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。
所以我们可以开启遮罩点击关闭与ESC按钮关闭，以腾出位置给两个按钮用以实现不同的功能。
如果将 `distinguishCancelAndClose` 属性设置为 true,即可开启上述两种关闭模式。

<show-code showPath="messagebox/components/closeMessageBox">
<closeMessageBox></closeMessageBox>
</show-code>

## 按需引入
如果您需要按需引入 MessageBox
```ts
 import { MessageBoxFn } from 'freeze-virtual-ui'
```

## MessageBox 配置项
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | MessageBox 标题 | string | -- | Title |
| message | MessageBox 消息正文内容 | string | -- | -- |
| boxType | MessageBox 类型 | string | alert/confirm | alert |
| type | MessageBox 图标类型 | string | 'success' / 'info' / 'warning' / 'danger' | info |
| callback | MessageBox 回调函数 | Function | -- | -- |
| showClose | MessageBox 是否显示右上角关闭按钮 | boolean | -- | true |
| distinguishCancelAndClose | MessageBox 是否开启遮罩层点击关闭以及ESC按钮关闭 | boolean | -- | false |


<script setup>
    import baseMessageBox from './components/baseMessageBox.vue';
    import confirmMessageBox from './components/confirmMessageBox.vue';
    import closeMessageBox from './components/closeMessageBox.vue';
</script>

