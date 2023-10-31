<template>
  <div :class="[ns.base(), 'overflow-y-auto']">
    <slot />
    <div :id="targetId" class="text-center text-gray-400 text-xs">
      <slot name="loadingIcon" v-if="isLoading">
        <vir-icon :name="loadingIcon" :color="iconColor" class="inline animate-spin mr-0.5" />
      </slot>
      <span v-else>{{ hideReachedText ? "" : reachedText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useNameSpace } from "../../../utils/hooks/hooks.util";
import VirIcon from '../../icon/src/VirIcon.vue'

const ns = useNameSpace("infinite-scroll");

const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 400,
  },
  reachedText: {
    type: String,
    default: "没有更多了",
  },
  hideReachedText: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingIcon: {
    type: String,
    default: "Loading",
  },
  iconColor: {
    type: String,
    default: "black",
  },
  targetId: {
    type: String,
    default: "goal-help",
  }
});

const emit = defineEmits<{
  (e: "reached-trigger"): void;
}>();

const io = ref();

const sw = computed(() => {
  return props.width;
});

const sh = computed(() => {
  return props.height;
});

const isLoading = computed(() => {
  return props.loading
})

const observerCB = (e: any) => {
  const { isIntersecting } = e[0];
  if (isIntersecting) {
    emit("reached-trigger");
  }
};

const initObserver = () => {
  io.value = new IntersectionObserver(observerCB);
  const target = document.getElementById(props.targetId);
  io.value.observe(target);
};

onMounted(() => {
  initObserver();
});

onUnmounted(() => {
  if (io.value) io.value.disconnect();
});
</script>

<style lang="scss">
@import "../style/index.css";
.vir-infinite-scroll {
  width: calc(v-bind("sw") * 1px);
  height: calc(v-bind("sh") * 1px);
  &::-webkit-scrollbar {
    width: 0;
  }
  #goal-help {
    width: 100%;
    height: 2px;
    background: transparent;
  }
}
</style>
