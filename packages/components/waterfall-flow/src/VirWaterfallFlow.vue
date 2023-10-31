<template></template>

<script setup lang="ts">
import { computed } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("waterfall-flow");

const $emit = defineEmits(["click"]);
const props = defineProps({
  //尺寸
  size: {
    type: String,
    default: "default",
    validator: (value: string) => {
      return ["default", "large", "small"].includes(value);
    },
  },
  //按钮类型
  type: {
    type: String,
    default: "default",
    validator: (value: string) => {
      return [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger",
        "text",
      ].includes(value);
    },
  },
  // 是否为朴素按钮
  plain: {
    type: Boolean,
    default: false,
  },
  // 是否为圆形
  round: {
    type: Boolean,
    default: false,
  },
  // 是否正在加载中
  loading: {
    type: Boolean,
    default: false,
  },
  // 是否为圆形
  circle: {
    type: Boolean,
    default: false,
  },
  // 自定义加载中图标
  loadingIcon: {
    type: String,
    default: "Loading",
  },
  // 是否禁用状态
  disabled: {
    type: Boolean,
    default: false,
  },
  iconColor: {
    type: String,
    default: "white",
  },
  // 原生type属性
  nativeType: {
    type: String as () => "button" | "reset" | "submit" | undefined,
    default: "button",
  },
});
</script>

<style></style>
