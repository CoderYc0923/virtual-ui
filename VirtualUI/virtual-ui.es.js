import { defineComponent as m, computed as d, openBlock as c, createBlock as x, resolveDynamicComponent as G, normalizeStyle as w, createElementBlock as v, normalizeClass as y, unref as r, createElementVNode as g, createCommentVNode as N, renderSlot as _, inject as K, createVNode as $, provide as X, useSlots as q, onMounted as z, onUnmounted as H, withDirectives as A, withModifiers as J, vShow as L, Teleport as Q, withCtx as V, toDisplayString as C, ref as S, reactive as Y, toRefs as Z, Transition as ee, createTextVNode as D, nextTick as te, render as R, h as ne, useCssVars as se, watch as le, Fragment as oe, renderList as ae } from "vue";
import { Close as ie } from "@element-plus/icons-vue";
const B = /* @__PURE__ */ m({
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
    const s = e, t = d(() => {
      let n = "";
      return typeof s.size == "number" ? n = s.size + "px" : n = s.size, {
        height: n,
        with: n
      };
    });
    return (n, l) => (c(), x(G(e.name), {
      style: w({ ...t.value, color: e.color }),
      class: "inline"
    }, null, 8, ["style"]));
  }
}), k = "vir", re = "is", h = (e) => ({
  base() {
    return `${k}-${e}`;
  },
  is(s, t, n) {
    return t && s ? `${n ? k + "-" : ""}${re}-${t}` : "";
  },
  is_ns(s, t, n) {
    return t && s ? `${n ? k + "-" : ""}${e}-${t}` : "";
  },
  sfix(s) {
    return s ? `${k}-${e}-${s}` : "";
  },
  sy(s, t) {
    return {
      [t]: s
    };
  },
  is_sy(s, t, n) {
    return n ? s ? t : n : s ? t : {};
  }
}), ce = ["type", "disabled"], F = /* @__PURE__ */ m({
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
  setup(e, { emit: s }) {
    const t = h("button"), n = s, l = e, o = d(() => {
      const i = t.is(l.plain, "plain", !0), p = t.is(l.round, "round", !0), u = t.is(l.loading, "Loading"), b = t.is(l.disabled || l.loading, "disabled", !0), I = t.is(l.circle, "circle", !0), U = t.is(!0, l.size, !0);
      return [t.is_ns(!0, l.type, !0), i, p, u, b, I, U];
    }), a = d(() => ({
      isDisabled: l.disabled || l.loading
    })), f = (i) => {
      a.value.isDisabled || n("click", i);
    };
    return (i, p) => (c(), v("button", {
      class: y([r(t).base(), ...o.value]),
      type: e.nativeType,
      disabled: a.value.isDisabled,
      onClick: p[0] || (p[0] = (u) => f(u))
    }, [
      g("span", null, [
        e.loading ? (c(), x(B, {
          key: 0,
          name: e.loadingIcon,
          color: e.iconColor,
          class: "inline animate-spin mr-0.5"
        }, null, 8, ["name", "color"])) : N("", !0),
        _(i.$slots, "default")
      ])
    ], 10, ce));
  }
});
const ue = {
  install(e) {
    e.component("VirButton", F);
  }
}, de = {
  install(e) {
    e.component("VirIcon", B);
  }
}, W = Symbol(), fe = {
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
}, E = /* @__PURE__ */ m({
  name: "VirCol",
  props: fe,
  setup(e, {
    slots: s
  }) {
    const t = K(W, d(() => 0)), n = (o) => o * 100, l = d(() => {
      let o = {};
      if (t.value) {
        const a = {
          paddingLeft: `${t.value / 2}px`,
          paddingRight: `${t.value / 2}px`
        };
        o = {
          ...o,
          ...a
        };
      }
      if (e.span) {
        const a = {
          maxWidth: `${n(e.span / 24)}%`,
          flexBasis: `${n(e.span / 24)}%`
        };
        o = {
          ...o,
          ...a
        };
      }
      if (e.offset) {
        const a = {
          marginLeft: `${n(e.offset / 24)}%`
        };
        o = {
          ...o,
          ...a
        };
      }
      if (e.push || e.pull) {
        const a = {
          position: "relative"
        };
        e.push && (a.left = `${n(e.push / 24)}%`), e.pull && (a.right = `${n(e.pull / 24)}%`), o = {
          ...o,
          ...a
        };
      }
      return o;
    });
    return () => (
      // @ts-ignore
      $(e.tag, {
        class: "vir-col",
        style: l.value
      }, {
        default: () => {
          var o;
          return [(o = s.default) == null ? void 0 : o.call(s)];
        }
      })
    );
  }
});
const pe = {
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
}, j = /* @__PURE__ */ m({
  name: "VirRow",
  props: pe,
  setup(e, {
    slots: s
  }) {
    X(W, d(() => e.gutter));
    const t = d(() => {
      const l = {
        "margin-left": "",
        "margin-right": ""
      };
      return e.gutter && (l["margin-left"] = `${e.gutter / 2}px`, l["margin-right"] = l["margin-left"]), l;
    }), n = d(() => {
      const l = `justify-${e.justify}`, o = `items-${e.align}`;
      return [l, o];
    });
    return () => (
      // @ts-ignore
      $(e.tag, {
        class: ["vir-row", ...n.value],
        style: t.value
      }, {
        default: () => {
          var l;
          return [(l = s.default) == null ? void 0 : l.call(s)];
        }
      })
    );
  }
}), me = {
  install(e) {
    e.component(E.name, E), e.component(j.name, j);
  }
}, ge = /* @__PURE__ */ m({
  __name: "VirAside",
  props: {
    width: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = h("aside"), t = e, n = d(() => t.width ? { width: t.width } : {});
    return (l, o) => (c(), v("aside", {
      style: w(n.value),
      class: y(r(s).base())
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
const _e = /* @__PURE__ */ m({
  __name: "VirContainer",
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = h("container"), t = e, n = d(() => {
      if (t.direction === "vertical")
        return !0;
      if (t.direction === "horizontal")
        return !1;
      const l = q();
      return l && l.default ? l.default().some((a) => {
        const f = a.type.name;
        return f === "VirHeader" || f === "VirFooter";
      }) : !1;
    });
    return (l, o) => (c(), v("section", {
      class: y([r(s).base(), r(s).is(n.value, "vertical")])
    }, [
      _(l.$slots, "default")
    ], 2));
  }
});
const ye = /* @__PURE__ */ m({
  __name: "VirFooter",
  props: {
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = h("footer"), t = e, n = d(() => t.height ? { height: t.height } : {});
    return (l, o) => (c(), v("footer", {
      style: w(n.value),
      class: y(r(s).base())
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
const ve = /* @__PURE__ */ m({
  __name: "VirHeader",
  props: {
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = h("header"), t = e, n = d(() => t.height ? { height: t.height } : {});
    return (l, o) => (c(), v("header", {
      style: w(n.value),
      class: y(r(s).base())
    }, [
      _(l.$slots, "default")
    ], 6));
  }
});
const he = /* @__PURE__ */ m({
  __name: "VirMain",
  setup(e) {
    const s = h("main");
    return (t, n) => (c(), v("main", {
      class: y(r(s).base())
    }, [
      _(t.$slots, "default")
    ], 2));
  }
});
const be = {
  install(e) {
    e.component("VirAside", ge), e.component("VirContainer", _e), e.component("VirFooter", ye), e.component("VirHeader", ve), e.component("VirMain", he);
  }
}, we = /* @__PURE__ */ m({
  __name: "BaseModal",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    mask: {
      type: Boolean,
      default: !0
    },
    zIndex: {
      type: String,
      default: "9"
    }
  },
  emits: ["closed"],
  setup(e, { emit: s }) {
    const t = h("modal"), n = e, l = s, o = (i) => {
      console.log("关闭模态框"), l("closed", { type: i });
    }, a = d(() => ({
      zIndex: n.zIndex
    })), f = (i) => {
      i.code === "Escape" && o(i.code);
    };
    return z(() => {
      document.addEventListener("keydown", f);
    }), H(() => {
      document.removeEventListener("keydown", f);
    }), (i, p) => A((c(), v("div", {
      style: w(a.value),
      class: y([r(t).is(e.mask, "mask"), "base-modal"]),
      onClick: p[0] || (p[0] = J((u) => o("click"), ["self"]))
    }, [
      _(i.$slots, "default", {}, void 0, !0)
    ], 6)), [
      [L, e.visible]
    ]);
  }
});
const M = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of s)
    t[n] = l;
  return t;
}, O = /* @__PURE__ */ M(we, [["__scopeId", "data-v-5e97724c"]]), xe = { class: "p-2 py-4 flex justify-between items-center" }, $e = { class: "p-2 flex-1" }, Ve = /* @__PURE__ */ m({
  __name: "VirDrawer",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "rtl",
      vaildator: (e) => ["rtl", "ltr", "ttb", "btt"].includes(e)
    },
    title: {
      type: String,
      default: "title"
    },
    beforeClose: {
      type: Function
    },
    withHeader: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = h("drawer"), n = e;
    console.log("props", n.modelValue);
    const l = s, o = () => {
      n.beforeClose ? n.beforeClose(() => l("update:modelValue", !1)) : l("update:modelValue", !1);
    };
    return (a, f) => (c(), x(Q, { to: "body" }, [
      $(O, {
        visible: e.modelValue,
        class: y([
          r(t).is(e.direction === "rtl", "rtl"),
          r(t).is(e.direction === "ltr", "ltr"),
          r(t).is(e.direction === "ttb", "ttb"),
          r(t).is(e.direction === "btt", "btt")
        ]),
        onClosed: o
      }, {
        default: V(() => [
          g("div", {
            class: y([[r(t).base()], "utils-scrollbar overflow-auto bg-white"])
          }, [
            A(g("header", xe, [
              _(a.$slots, "title", {}, () => [
                g("span", null, C(e.title), 1)
              ], !0),
              $(B, {
                name: "close",
                class: "cursor-pointer text-gray-600 hover:text-gray-400 ml-auto",
                size: "20",
                onClick: o
              })
            ], 512), [
              [L, e.withHeader]
            ]),
            g("div", $e, [
              _(a.$slots, "default", {}, void 0, !0)
            ]),
            _(a.$slots, "footer", {}, void 0, !0)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "class"])
    ]));
  }
});
const Se = /* @__PURE__ */ M(Ve, [["__scopeId", "data-v-88e6cfdf"]]), Ce = {
  install(e) {
    e.component("VirDrawer", Se);
  }
}, Ie = { class: "flex justify-between items-center" }, ke = { class: "text-lg" }, Be = { class: "py-4 flex items-center" }, Ne = ["innerHTML"], Fe = { class: "flex justify-end pt-0.5" }, Te = /* @__PURE__ */ m({
  __name: "VirMessageBox",
  emits: ["action"],
  setup(e, { expose: s, emit: t }) {
    const n = h("message-box"), l = t, o = S(!1), a = Y({
      title: "",
      message: "Message",
      confirmText: "OK",
      cancelText: "Cancel",
      boxType: "alert",
      type: "info",
      distinguishCancelAndClose: !1,
      showClose: !0,
      showCancelButton: !0,
      center: !1,
      action: "",
      showInput: !1
    }), f = (u) => {
      a.distinguishCancelAndClose && (u.type === "click" || u.type === "Escape") && i("close");
    }, i = (u) => {
      a.action = u, o.value && (o.value = !1, te(() => {
        a.action && l("action", a.action);
      }));
    }, p = (u) => {
      i(u);
    };
    return s({
      ...Z(a),
      confirmAll: p,
      closeModal: f,
      ns: n,
      _visible: o
    }), (u, b) => (c(), x(O, {
      visible: o.value,
      "z-index": "10",
      onClosed: f
    }, {
      default: V(() => [
        $(ee, { name: "message-box" }, {
          default: V(() => [
            A(g("div", {
              class: y([r(n).base()])
            }, [
              g("div", Ie, [
                g("span", ke, C(a.title), 1),
                a.showClose ? (c(), x(r(ie), {
                  key: 0,
                  class: "close-btn cursor-pointer",
                  onClick: b[0] || (b[0] = (I) => p("cancel"))
                })) : N("", !0)
              ]),
              g("div", Be, [
                g("span", {
                  class: "text-sm text-gray-500",
                  innerHTML: a.message
                }, null, 8, Ne)
              ]),
              g("div", Fe, [
                a.showCancelButton ? (c(), x(F, {
                  key: 0,
                  onClick: b[1] || (b[1] = (I) => p("cancel"))
                }, {
                  default: V(() => [
                    D(C(a.cancelText), 1)
                  ]),
                  _: 1
                })) : N("", !0),
                $(F, {
                  type: "primary",
                  onClick: b[2] || (b[2] = (I) => p("confirm"))
                }, {
                  default: V(() => [
                    D(C(a.confirmText), 1)
                  ]),
                  _: 1
                })
              ])
            ], 2), [
              [L, o.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["visible"]));
  }
});
const ze = /* @__PURE__ */ M(Te, [["__scopeId", "data-v-fb42d4f4"]]), P = /* @__PURE__ */ new Map(), T = document.createElement("div");
document.body.appendChild(T);
const Ae = (e, s) => {
  const t = ne(ze, e);
  return R(t, s), t.component;
}, Le = (e = {}) => {
  const s = Ae(e, T), t = s == null ? void 0 : s.exposeProxy;
  e.onAction = (n) => {
    const l = P.get(t);
    let o;
    e.showInput ? o = { value: t.state.inputValue, action: n } : o = n, e.callback ? e.callback(o, s.proxy) : n === "cancel" || n === "close" ? e.distinguishCancelAndClose && n !== "cancel" ? l == null || l.reject("close") : l == null || l.reject("cancel") : l == null || l.resolve(o), R(null, T);
  }, t.onAction = e.onAction;
  for (const n in e)
    Object.hasOwn(e, n) && !Object.hasOwn(t.$props, n) && (t[n] = e[n]);
  return console.log("1111", t), t._visible = !0, t;
};
function Me(e) {
  let s;
  return typeof e == "string" ? e = {
    message: e
  } : s = e.callback, new Promise((t, n) => {
    const l = Le(e);
    P.set(l, {
      options: e,
      cb: s,
      resolve: t,
      reject: n
    });
  });
}
function Ye(e, s, t) {
  let n = {};
  return n.message = e, s && (typeof s == "string" ? n.title = s : n = { ...n, ...s }), t && (n = { ...n, ...t }), Me(n);
}
const De = { class: "v-scroll relative overflow-auto" }, Ee = { class: "vrs-container flex overflow-visible absolute rotate-90" }, je = /* @__PURE__ */ m({
  __name: "VirRowScroll",
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 32
    }
  },
  setup(e) {
    se((o) => ({
      "55db8aec": n.value,
      "55db8add": l.value
    }));
    const s = h("row-scroll"), t = e, n = d(() => t.width), l = d(() => t.height);
    return (o, a) => (c(), v("div", {
      class: y([r(s).base()])
    }, [
      g("div", De, [
        g("div", Ee, [
          _(o.$slots, "default")
        ])
      ])
    ], 2));
  }
});
const He = {
  install(e) {
    e.component("VirRowScroll", je);
  }
}, Re = ["id"], We = { key: 1 }, Oe = /* @__PURE__ */ m({
  __name: "VirInfiniteScroll",
  props: {
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    },
    reachedText: {
      type: String,
      default: "没有更多了"
    },
    hideReachedText: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: "Loading"
    },
    iconColor: {
      type: String,
      default: "black"
    },
    targetId: {
      type: String,
      default: "goal-help"
    }
  },
  emits: ["reached-trigger"],
  setup(e, { emit: s }) {
    const t = h("infinite-scroll"), n = e, l = s, o = S(), a = d(() => ({
      width: typeof n.width == "string" ? n.width : n.width + "px",
      height: typeof n.height == "string" ? n.height : n.height + "px"
    })), f = d(() => n.loading), i = (u) => {
      const { isIntersecting: b } = u[0];
      b && l("reached-trigger");
    }, p = () => {
      o.value = new IntersectionObserver(i);
      const u = document.getElementById(n.targetId);
      o.value.observe(u);
    };
    return z(() => {
      p();
    }), H(() => {
      o.value && o.value.disconnect();
    }), (u, b) => (c(), v("div", {
      class: y([r(t).base(), "overflow-y-auto"]),
      style: w(r(a))
    }, [
      _(u.$slots, "default"),
      g("div", {
        id: e.targetId,
        class: "text-center text-gray-400 text-xs"
      }, [
        r(f) ? _(u.$slots, "loadingIcon", { key: 0 }, () => [
          $(B, {
            name: e.loadingIcon,
            color: e.iconColor,
            class: "inline animate-spin mr-0.5"
          }, null, 8, ["name", "color"])
        ]) : (c(), v("span", We, C(e.hideReachedText ? "" : e.reachedText), 1))
      ], 8, Re)
    ], 6));
  }
});
const Pe = {
  install(e) {
    e.component("VirInfiniteScroll", Oe);
  }
}, Ue = /* @__PURE__ */ m({
  __name: "VirWaterfallFlowItem",
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    gap: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const s = h("waterfall-flow-item"), t = e, n = S(), l = S({});
    return z(() => {
      l.value = {
        "grid-row-end": `span ${n.value.clientHeight + t.gap}`
      };
    }), (o, a) => (c(), v("div", {
      class: y([r(s).base()]),
      style: w(l.value)
    }, [
      g("div", {
        ref_key: "waterfallFlowItem",
        ref: n
      }, [
        _(o.$slots, "slot-scope", { data: e.data })
      ], 512)
    ], 6));
  }
});
const Ge = /* @__PURE__ */ m({
  __name: "VirWaterfallFlow",
  props: {
    dataList: {
      type: Array,
      default: []
    },
    columns: {
      type: Number,
      default: 2
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    },
    gap: {
      type: Number,
      default: 5
    },
    overflow: {
      type: String,
      default: "auto",
      validator: (e) => [
        "auto",
        "visible"
      ].includes(e)
    }
  },
  setup(e) {
    const s = h("waterfall-flow"), t = e, n = S({}), l = S([]), o = (a) => (1 / a * 100).toFixed(0);
    return le(
      () => t.dataList,
      (a) => {
        l.value = a.map((f, i) => ({
          ...f,
          dataIndex: i
        })), n.value = {
          "grid-template-columns": `repeat(auto-fill, calc(${o(
            t.columns
          )}% - ${t.gap}px))`,
          width: typeof t.width == "string" ? t.width : t.width + "px",
          overflow: t.overflow
        }, t.overflow === "auto" && (n.value.height = typeof t.height == "string" ? t.height : t.height + "px");
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (a, f) => (c(), v("div", {
      class: y([[r(s).base()], "grid"]),
      style: w(n.value)
    }, [
      (c(!0), v(oe, null, ae(l.value, (i) => (c(), x(Ue, {
        key: i.dataIndex,
        data: i,
        gap: e.gap
      }, {
        "slot-scope": V((p) => [
          _(a.$slots, "slot-scope", { slotProps: p })
        ]),
        _: 2
      }, 1032, ["data", "gap"]))), 128))
    ], 6));
  }
});
const Ke = {
  install(e) {
    e.component("VirWaterfallFlow", Ge);
  }
};
const Xe = [ue, de, me, be, Ce, He, Pe, Ke], Ze = {
  install(e) {
    Xe.map((s) => s.install(e));
  }
};
export {
  Ye as MessageBoxFn,
  ge as VirAside,
  F as VirButton,
  E as VirCol,
  _e as VirContainer,
  Se as VirDrawer,
  ye as VirFooter,
  ve as VirHeader,
  B as VirIcon,
  Oe as VirInfiniteScroll,
  he as VirMain,
  j as VirRow,
  je as VirRowScroll,
  Ge as VirWaterfallFlow,
  Ze as default
};
