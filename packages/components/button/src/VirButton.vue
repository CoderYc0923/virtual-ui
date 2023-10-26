<template>
  <button
    :class="[ns.base(), ...classComputed]"
    :type="nativeType"
    :disabled="disabledComputed.isDisabled"
    @click="clickEmit($event)"
  >
    <span>
      <vir-icon v-if="loading" :name="loadingIcon" :color="iconColor" class="inline animate-spin mr-0.5" />
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import VirIcon from '../../icon/src/VirIcon.vue'
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("button");

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

const classComputed = computed(() => {
  const isPlain = ns.is(props.plain, "plain", true);
  const isRound = ns.is(props.round, "round", true);
  const isLoading = ns.is(props.loading, "Loading");
  const isDisabled = ns.is(props.disabled || props.loading, "disabled", true);
  const isCircle = ns.is(props.circle, "circle", true);
  const isSize = ns.is(true, props.size, true);
  const typeClass = ns.is_ns(true, props.type, true);
  console.log('classComputed', typeClass);
  
  return [typeClass, isPlain, isRound, isLoading, isDisabled, isCircle, isSize];
});

const disabledComputed = computed(() => {
  const isDisabled = props.disabled || props.loading;
  return {
    isDisabled,
  };
});

const clickEmit = (event: any) => {
  if (!disabledComputed.value.isDisabled) $emit("click", event);
};
</script>

<style>
@import "../style/index.css";
.vir-button + .vir-button {
  margin-left: 12px;
}
.vir-is-small {
  height: 24px !important;
  padding: 5px 11px !important;
  font-size: 12px !important;
}
.vir-is-large.vir-is-circle {
  width: 40px !important;
  padding: 12px !important;
}
.vir-is-small.vir-is-circle {
  width: 24px;
  padding: 5px !important;
}
</style>
