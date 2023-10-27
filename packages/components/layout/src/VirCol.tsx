import { CSSProperties, computed, defineComponent, inject } from "vue";
import { rowGutter } from "../../../utils/tokens/tokens";

const props = {
  tag: {
    type: String,
    default: "div",
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
};

const VirCol = defineComponent({
  name: "VirCol",
  props: props,
  setup(props, { slots }) {
    const gutter = inject(
      rowGutter,
      computed(() => 0)
    );
    const getPercentage = (x: number) => x * 100;
    const style = computed<CSSProperties>(() => {
      let all: CSSProperties = {};
      //边距
      if (gutter.value) {
        const padding = {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        };
        all = { ...all, ...padding };
      }
      //占位
      if (props.span) {
        const marginWidth = {
          maxWidth: `${getPercentage(props.span / 24)}%`,
          flexBasis: `${getPercentage(props.span / 24)}%`,
        };
        all = { ...all, ...marginWidth };
      }
      //offset
      if (props.offset) {
        const offset: CSSProperties = {
          marginLeft: `${getPercentage(props.offset / 24)}%`,
        };
        all = { ...all, ...offset };
      }
      //偏移
      if (props.push || props.pull) {
        const pushPull: CSSProperties = {
          position: "relative",
        };
        if (props.push) pushPull.left = `${getPercentage(props.push / 24)}%`;
        if (props.pull) pushPull.right = `${getPercentage(props.pull / 24)}%`;
        all = { ...all, ...pushPull };
      }
      return all;
    });
    return () => (
      // @ts-ignore
      <props.tag class="vir-col" style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});

export default VirCol;
