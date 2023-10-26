import { CSSProperties, computed, defineComponent, provide } from "vue";
import { rowGutter } from "../../../utils/tokens/tokens";

const props = {
  tag: {
    type: String,
    default: "div",
  },
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    default: "start",
  },
  align: {
    type: String,
    default: "top",
  },
};

const VirRow = defineComponent({
  name: "VirRow",
  props,
  setup(props, { slots }) {
    provide(
      rowGutter,
      computed(() => props.gutter)
    );
    //间距
    const style = computed(() => {
      const styles = {
        "margin-left": "",
        "margin-right": "",
      };
      if (props.gutter) {
        styles["margin-left"] = `${props.gutter / 2}px`;
        styles["margin-right"] = styles["margin-left"];
      }
      return styles
    });
    //justfy align
    const flex = computed(() => {
      const justfyClass = `justfy-${props.justify}`
      const alignClass = `items-${props.align}`
      return [justfyClass, alignClass]
    })
    return () => {
      //@ts-ignore
      <props.tag class={['bl-row', ...flex.value]} style={style.value}>
        {slots.default?.()}
      </props.tag>
    };
  },
});

export default VirRow;
