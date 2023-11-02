<template>
  <base-modal :visible="_visible" z-index="10" @closed="closeModal">
    <transition name="message-box">
      <div v-show="_visible" :class="[ns.base()]">
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ state.title }}</span>
          <Close
            v-if="state.showClose"
            class="close-btn cursor-pointer"
            @click="confirmAll('cancel')"
          />
        </div>
        <div class="py-4 flex items-center">
          <span class="text-sm text-gray-500" v-html="state.message"></span>
        </div>
        <div class="flex justify-end pt-0.5">
          <vir-button v-if="state.showCancelButton" @click="confirmAll('cancel')">{{
            state.cancelText
          }}</vir-button>
          <vir-button type="primary" @click="confirmAll('confirm')">{{
            state.confirmText
          }}</vir-button>
        </div>
      </div>
    </transition>
  </base-modal>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, toRefs } from "vue";
import BaseModal from "../../common/BaseModal.vue";
import VirButton from "../../button/src/VirButton.vue";
import { Close } from '@element-plus/icons-vue'
import { useNameSpace } from "../../../utils/hooks/hooks.util";
import { Action, MessageBoxState } from "./messageBox.help";

const ns = useNameSpace("message-box");
const emit = defineEmits(['action'])

const _visible = ref(false);
const state = reactive<Partial<MessageBoxState>>({
  title: "",
  message: "Message",
  confirmText: "OK",
  cancelText: "Cancel",
  boxType: 'alert',
  type: "info",
  distinguishCancelAndClose: false,
  showClose: true,
  showCancelButton: true,
  center: false,
  action: "" as Action,
  showInput: false,
});

const closeModal = (e: { type: string }) => {
  if (
    state.distinguishCancelAndClose &&
    (e.type === "click" || e.type === "Escape")
  )
    closed("close");
};
const closed = (action: Action) => {
  state.action = action;
  if (!_visible.value) return;
  _visible.value = false;
  nextTick(() => {
    if (state.action) emit("action", state.action);
  });
};
const confirmAll = (type: Action) => {
  closed(type)
}
defineExpose({
  ...toRefs(state),
  confirmAll,
  closeModal,
  ns,
  _visible
})

</script>

<style scoped>
  @import '../style/index.css';
</style>
