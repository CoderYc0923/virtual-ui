import { defineComponent as o, computed as l, openBlock as u, createBlock as C, resolveDynamicComponent as A, normalizeStyle as v, createElementBlock as f, normalizeClass as p, unref as c, createElementVNode as E, createCommentVNode as D, renderSlot as g, inject as F, createVNode as x, provide as H, useSlots as I } from "vue";
const B = /* @__PURE__ */ o({
  __name: "VirIcon",
  props: {
    name: {
      type: String
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  setup(e) {
    const n = e, t = l(() => {
      let i = "";
      return typeof n.size == "number" ? i = n.size + "px" : i = n.size, {
        height: i,
        with: i
      };
    });
    return (i, s) => (u(), C(A(e.name), {
      style: v({ ...t.value, color: e.color }),
      class: "inline"
    }, null, 8, ["style"]));
  }
}), h = "vir", L = "is", m = (e) => ({
  base() {
    return `${h}-${e}`;
  },
  is(n, t, i) {
    return t && n ? `${i ? h + "-" : ""}${L}-${t}` : "";
  },
  is_ns(n, t, i) {
    return t && n ? `${i ? h + "-" : ""}${e}-${t}` : "";
  },
  sfix(n) {
    return n ? `${h}-${e}-${n}` : "";
  },
  sy(n, t) {
    return {
      [t]: n
    };
  },
  is_sy(n, t, i) {
    return i ? n ? t : i : n ? t : {};
  }
}), j = ["type", "disabled"], M = /* @__PURE__ */ o({
  __name: "VirButton",
  props: {
    //尺寸
    size: {
      type: String,
      default: "default",
      validator: (e) => ["default", "large", "small"].includes(e)
    },
    //按钮类型
    type: {
      type: String,
      default: "default",
      validator: (e) => [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger",
        "text"
      ].includes(e)
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean,
      default: !1
    },
    // 是否为圆形
    round: {
      type: Boolean,
      default: !1
    },
    // 是否正在加载中
    loading: {
      type: Boolean,
      default: !1
    },
    // 是否为圆形
    circle: {
      type: Boolean,
      default: !1
    },
    // 自定义加载中图标
    loadingIcon: {
      type: String,
      default: "Loading"
    },
    // 是否禁用状态
    disabled: {
      type: Boolean,
      default: !1
    },
    iconColor: {
      type: String,
      default: "white"
    },
    // 原生type属性
    nativeType: {
      type: String,
      default: "button"
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = m("button"), i = n, s = e, a = l(() => {
      const d = t.is(s.plain, "plain", !0), y = t.is(s.round, "round", !0), V = t.is(s.loading, "Loading"), z = t.is(s.disabled || s.loading, "disabled", !0), w = t.is(s.circle, "circle", !0), k = t.is(!0, s.size, !0), $ = t.is_ns(!0, s.type, !0);
      return console.log("classComputed", $), [$, d, y, V, z, w, k];
    }), r = l(() => ({
      isDisabled: s.disabled || s.loading
    })), _ = (d) => {
      r.value.isDisabled || i("click", d);
    };
    return (d, y) => (u(), f("button", {
      class: p([c(t).base(), ...a.value]),
      type: e.nativeType,
      disabled: r.value.isDisabled,
      onClick: y[0] || (y[0] = (V) => _(V))
    }, [
      E("span", null, [
        e.loading ? (u(), C(B, {
          key: 0,
          name: e.loadingIcon,
          color: e.iconColor,
          class: "inline animate-spin mr-0.5"
        }, null, 8, ["name", "color"])) : D("", !0),
        g(d.$slots, "default")
      ])
    ], 10, j));
  }
});
const P = {
  install(e) {
    e.component("VirButton", M);
  }
}, R = {
  install(e) {
    e.component("VirIcon", B);
  }
}, N = Symbol(), T = {
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  }
}, b = /* @__PURE__ */ o({
  name: "VirCol",
  props: T,
  setup(e, {
    slots: n
  }) {
    const t = F(N, l(() => 0)), i = (a) => a * 100, s = l(() => {
      let a = {};
      if (t.value) {
        const r = {
          paddingLeft: `${t.value / 2}px`,
          paddingRight: `${t.value / 2}px`
        };
        a = {
          ...a,
          ...r
        };
      }
      if (e.span) {
        const r = {
          maxWidth: `${i(e.span / 24)}%`,
          flexBasis: `${i(e.span / 24)}%`
        };
        a = {
          ...a,
          ...r
        };
      }
      if (e.offset) {
        const r = {
          marginLeft: `${i(e.offset / 24)}%`
        };
        a = {
          ...a,
          ...r
        };
      }
      if (e.push || e.pull) {
        const r = {
          position: "relative"
        };
        e.push && (r.left = `${i(e.push / 24)}%`), e.pull && (r.right = `${i(e.pull / 24)}%`), a = {
          ...a,
          ...r
        };
      }
      return a;
    });
    return () => (
      // @ts-ignore
      x(e.tag, {
        class: "vir-col",
        style: s.value
      }, {
        default: () => {
          var a;
          return [(a = n.default) == null ? void 0 : a.call(n)];
        }
      })
    );
  }
});
const W = {
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    default: "start"
  },
  align: {
    type: String,
    default: "top"
  }
}, S = /* @__PURE__ */ o({
  name: "VirRow",
  props: W,
  setup(e, {
    slots: n
  }) {
    H(N, l(() => e.gutter));
    const t = l(() => {
      const s = {
        "margin-left": "",
        "margin-right": ""
      };
      return e.gutter && (s["margin-left"] = `${e.gutter / 2}px`, s["margin-right"] = s["margin-left"]), s;
    }), i = l(() => {
      const s = `justify-${e.justify}`, a = `items-${e.align}`;
      return [s, a];
    });
    return () => (
      // @ts-ignore
      x(e.tag, {
        class: ["vir-row", ...i.value],
        style: t.value
      }, {
        default: () => {
          var s;
          return [(s = n.default) == null ? void 0 : s.call(n)];
        }
      })
    );
  }
}), G = {
  install(e) {
    e.component(b.name, b), e.component(S.name, S);
  }
}, U = /* @__PURE__ */ o({
  __name: "VirAside",
  props: {
    width: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = m("aside"), t = e, i = l(() => t.width ? { width: t.width } : {});
    return (s, a) => (u(), f("aside", {
      style: v(i.value),
      class: p(c(n).base())
    }, [
      g(s.$slots, "default")
    ], 6));
  }
});
const X = /* @__PURE__ */ o({
  __name: "VirContainer",
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = m("container"), t = e, i = l(() => {
      if (t.direction === "vertical")
        return !0;
      if (t.direction === "horizontal")
        return !1;
      const s = I();
      return s && s.default ? s.default().some((r) => {
        const _ = r.type.name;
        return _ === "VirHeader" || _ === "VirFooter";
      }) : !1;
    });
    return (s, a) => (u(), f("section", {
      class: p([c(n).base(), c(n).is(i.value, "vertical")])
    }, [
      g(s.$slots, "default")
    ], 2));
  }
});
const q = /* @__PURE__ */ o({
  __name: "VirFooter",
  props: {
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = m("footer"), t = e, i = l(() => t.height ? { height: t.height } : {});
    return (s, a) => (u(), f("footer", {
      style: v(i.value),
      class: p(c(n).base())
    }, [
      g(s.$slots, "default")
    ], 6));
  }
});
const J = /* @__PURE__ */ o({
  __name: "VirHeader",
  props: {
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = m("header"), t = e, i = l(() => t.height ? { height: t.height } : {});
    return (s, a) => (u(), f("header", {
      style: v(i.value),
      class: p(c(n).base())
    }, [
      g(s.$slots, "default")
    ], 6));
  }
});
const K = /* @__PURE__ */ o({
  __name: "VirMain",
  setup(e) {
    const n = m("main");
    return (t, i) => (u(), f("main", {
      class: p(c(n).base())
    }, [
      g(t.$slots, "default")
    ], 2));
  }
});
const O = {
  install(e) {
    e.component("VirAside", U), e.component("VirContainer", X), e.component("VirFooter", q), e.component("VirHeader", J), e.component("VirMain", K);
  }
};
const Q = [P, R, G, O], Z = {
  install(e) {
    Q.map((n) => n.install(e));
  }
};
export {
  U as VirAside,
  M as VirButton,
  b as VirCol,
  X as VirContainer,
  q as VirFooter,
  J as VirHeader,
  B as VirIcon,
  K as VirMain,
  S as VirRow,
  Z as default
};
