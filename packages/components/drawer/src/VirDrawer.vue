<template>
  <Teleport to="body">
    <base-modal
      :visible="modelValue"
      :class="[
        ns.is(direction === 'rtl', 'rtl'),
        ns.is(direction === 'ltr', 'ltr'),
        ns.is(direction === 'ttb', 'ttb'),
        ns.is(direction === 'btt', 'btt'),
      ]"
      @closed="closed"
    >
      <div :class="[ns.base()]" class="utils-scrollbar overflow-auto bg-white">
        <header
          v-show="withHeader"
          class="p-2 py-4 flex justify-between items-center"
        >
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <vir-icon
            name="close"
            class="cursor-pointer text-gray-600 hover:text-gray-400 ml-auto"
            size="20"
            @click="closed"
          ></vir-icon>
        </header>
        <div class="p-2 flex-1">
          <slot />
        </div>
        <slot name="footer"></slot>
      </div>
    </base-modal>
  </Teleport>
</template>

<script setup lang="ts">
import BaseModal from "../../common/BaseModal.vue";
import VirIcon from "../../icon/src/VirIcon.vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";

const ns = useNameSpace("drawer");

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: "rtl",
    vaildator: (value: string) => {
      return ["rtl", "ltr", "ttb", "btt"].includes(value);
    },
  },
  title: {
    type: String,
    default: "title",
  },
  beforeClose: {
    type: Function,
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
});

console.log("props", props.modelValue);

const $emit = defineEmits(["update:modelValue"]);
const closed = () => {
  if (props.beforeClose) {
    props.beforeClose(() => $emit("update:modelValue", false));
  } else {
    $emit("update:modelValue", false);
  }
};
</script>

<style lang="scss" scoped>
@import "../style/index";
.vir-drawer {
  @apply flex flex-col box-border pb-4 px-4;
}
</style>
