import {_ as e, y as t, S as s, L as l, f as a, k as n, T as o, I as i, Q as c, V as u, d as r, W as d, K as p, O as f, R as v, z as m, F as h, e as y, B as k, s as _, E as g, A as w, J as b, c as x, H as I, q as C} from "./framework.0ed1d5d2.js";
import {u as L} from "./VPApp.vue_vue_type_style_index_0_scoped_5dc2ec7a_lang.1f006bdb.js";
import {_ as P} from "./VTLink.vue_vue_type_script_setup_true_lang.615cf787.js";
const S = {}
  , M = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
}
  , A = [l("path", {
    d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
}, null, -1)];
const T = e(S, [["render", function(e, l) {
    return t(),
    s("svg", M, A)
}
]])
  , V = {}
  , B = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
}
  , O = [l("path", {
    d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"
}, null, -1)];
const $ = e(V, [["render", function(e, l) {
    return t(),
    s("svg", B, O)
}
]])
  , E = {}
  , R = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
}
  , j = [l("circle", {
    cx: "12",
    cy: "12",
    r: "2"
}, null, -1), l("circle", {
    cx: "19",
    cy: "12",
    r: "2"
}, null, -1), l("circle", {
    cx: "5",
    cy: "12",
    r: "2"
}, null, -1)];
const q = e(E, [["render", function(e, l) {
    return t(),
    s("svg", R, j)
}
]])
  , z = a({
    __name: "VTMenuLink",
    props: {
        item: {}
    },
    setup: e=>(e,s)=>(t(),
    n(P, {
        class: "vt-menu-link",
        href: e.item.link
    }, {
        default: o((()=>[i(c(e.item.text), 1)])),
        _: 1
    }, 8, ["href"]))
})
  , W = {
    class: "vt-menu-group"
}
  , F = {
    key: 0,
    class: "vt-menu-group-title"
}
  , H = a({
    __name: "VTMenuGroup",
    props: {
        text: {},
        items: {}
    },
    setup: e=>(e,l)=>(t(),
    s("div", W, [e.text ? (t(),
    s("p", F, c(e.text), 1)) : u("", !0), (t(!0),
    s(r, null, d(e.items, (e=>(t(),
    s(r, null, ["link"in e ? (t(),
    n(z, {
        key: 0,
        item: e
    }, null, 8, ["item"])) : u("", !0)], 64)))), 256))]))
})
  , J = {
    class: "vt-menu"
}
  , N = {
    key: 0,
    class: "vt-menu-items"
}
  , G = a({
    __name: "VTMenu",
    props: {
        items: {}
    },
    setup: e=>(e,l)=>(t(),
    s("div", J, [e.items ? (t(),
    s("div", N, [(t(!0),
    s(r, null, d(e.items, (e=>(t(),
    s(r, {
        key: e.text
    }, ["link"in e ? (t(),
    n(z, {
        key: 0,
        item: e
    }, null, 8, ["item"])) : (t(),
    n(H, {
        key: 1,
        text: e.text,
        items: e.items
    }, null, 8, ["text", "items"]))], 64)))), 128))])) : u("", !0), p(e.$slots, "default")]))
})
  , K = ["aria-expanded", "aria-label"]
  , U = {
    key: 0,
    class: "vt-flyout-button-text"
}
  , D = {
    class: "vt-flyout-menu"
}
  , Q = a({
    __name: "VTFlyout",
    props: {
        button: {},
        items: {},
        label: {}
    },
    setup(e) {
        const a = e
          , u = f(!1)
          , r = f();
        return L({
            elRef: r,
            onBlur: ()=>{
                u.value = !1
            }
        }),
        (e,d)=>(t(),
        s("div", {
            class: "vt-flyout",
            ref_key: "elRef",
            ref: r,
            onMouseenter: d[1] || (d[1] = e=>u.value = !0),
            onMouseleave: d[2] || (d[2] = e=>u.value = !1)
        }, [l("button", {
            type: "button",
            class: "vt-flyout-button",
            "aria-haspopup": "true",
            "aria-expanded": u.value,
            "aria-label": e.label,
            onClick: d[0] || (d[0] = e=>u.value = !u.value)
        }, [p(e.$slots, "btn-slot", {}, (()=>[a.button ? (t(),
        s("span", U, [i(c(a.button) + " ", 1), v(T, {
            class: "vt-flyout-button-text-icon"
        })])) : (t(),
        n(q, {
            key: 1,
            class: "vt-flyout-button-icon"
        }))]))], 8, K), l("div", D, [v(G, {
            items: e.items
        }, {
            default: o((()=>[p(e.$slots, "default")])),
            _: 3
        }, 8, ["items"])])], 544))
    }
})
  , X = {
    class: "vt-switch",
    type: "button",
    role: "switch"
}
  , Y = {
    class: "vt-switch-check"
}
  , Z = {
    key: 0,
    class: "vt-switch-icon"
};
const ee = e({}, [["render", function(e, a) {
    return t(),
    s("button", X, [l("span", Y, [e.$slots.default ? (t(),
    s("span", Z, [p(e.$slots, "default")])) : u("", !0)])])
}
]])
  , te = "undefined" != typeof window
  , se = (e,t=!1)=>te ? JSON.parse(localStorage.getItem(e) || String(t)) : t
  , le = f(se("vue-docs-prefer-composition", !0))
  , ae = f(se("vue-docs-prefer-sfc", !0));
function ne(e) {
    return le.value ? !e.optionsOnly : !e.compositionOnly
}
const oe = e=>(g("data-v-3809ac97"),
e = e(),
w(),
e)
  , ie = {
    key: 0,
    class: "preference-tooltip"
}
  , ce = oe((()=>l("p", null, "现在将默认使用组合式 API 风格。", -1)))
  , ue = oe((()=>l("p", null, " 一些页面根据所选的 API 风格将包含不同的内容。可以通过此开关在它们之间切换。 ", -1)))
  , re = oe((()=>l("p", null, " 这与你已保存的首选项不同，且仅会影响当前的浏览会话。 ", -1)))
  , de = oe((()=>l("a", {
    href: "/guide/introduction#api-styles"
}, "了解详情", -1)))
  , pe = oe((()=>l("div", {
    class: "arrow-top"
}, null, -1)))
  , fe = oe((()=>l("div", {
    class: "arrow-top inner"
}, null, -1)))
  , ve = e(a({
    __name: "PreferenceTooltip",
    setup(e) {
        const a = f(!1)
          , {page: i} = m();
        let d = !(!te || null !== localStorage.getItem("vue-docs-prefer-composition")) && "default";
        if (te) {
            const e = location.search.match(/[\?&]api=(\w+)/)
              , t = e && e[1];
            if ("composition" === t)
                p(!0, "url-query");
            else if ("options" === t)
                p(!1, "url-query");
            else if (location.hash) {
                const e = function e(t, s) {
                    for (const l of t) {
                        if (l.link === s)
                            return l;
                        if (l.children) {
                            const t = e(l.children, s);
                            if (t)
                                return t
                        }
                    }
                }(i.value.headers, location.hash);
                e && e.optionsOnly ? p(!1, "url-header") : e && e.compositionOnly && p(!0, "url-header")
            }
        }
        function p(e, t) {
            e && !le.value ? (d = t,
            le.value = !0,
            document.documentElement.classList.add("prefer-composition")) : !e && le.value && (d = t,
            le.value = !1,
            document.documentElement.classList.remove("prefer-composition"))
        }
        function v() {
            a.value = !1,
            "default" === d && localStorage.setItem("vue-docs-prefer-composition", String(le.value))
        }
        return h((()=>{
            if (!i.value.relativePath.startsWith("tutorial/") && !1 !== d) {
                a.value = !0;
                const e = y(le, (()=>{
                    a.value = !1,
                    e()
                }
                ))
            }
        }
        )),
        (e,i)=>(t(),
        n(_, {
            name: "fly-in"
        }, {
            default: o((()=>[a.value ? (t(),
            s("div", ie, ["default" === k(d) ? (t(),
            s(r, {
                key: 0
            }, [ce, ue], 64)) : u("", !0), k(d) && k(d).startsWith("url") ? (t(),
            s(r, {
                key: 1
            }, [l("p", null, " 正在显示 " + c(k(le) ? "组合式" : "选项式") + " API 的内容，这是因为 " + c("url-query" === k(d) ? "通过 URL 查询参数指定了。" : "目标章节仅适用于此 API。"), 1), re], 64)) : u("", !0), l("p", {
                class: "actions"
            }, [de, l("button", {
                onClick: v
            }, "知道了")]), pe, fe])) : u("", !0)])),
            _: 1
        }))
    }
}), [["__scopeId", "data-v-3809ac97"]])
  , me = {
    key: 0,
    class: "preference-switch"
}
  , he = ["aria-expanded"]
  , ye = (e=>(g("data-v-9490edee"),
e = e(),
w(),
e))((()=>l("span", null, "API 风格偏好", -1)))
  , ke = ["hidden", "aria-hidden"]
  , _e = {
    class: "switch-container"
}
  , ge = {
    key: 0,
    class: "switch-container"
}
  , we = e(a({
    __name: "PreferenceSwitch",
    setup(e) {
        const a = b()
          , n = x((()=>/^\/(guide|tutorial|examples|style-guide)\//.test(a.path)))
          , o = x((()=>!/^\/guide|style-guide/.test(a.path)));
        let i = f(!0);
        const c = ()=>{
            i.value = !i.value
        }
          , r = e=>{
            e.target.classList.add("no-outline")
        }
          , d = e=>{
            e.target.classList.remove("no-outline")
        }
          , p = y("vue-docs-prefer-composition", le, "prefer-composition")
          , m = y("vue-docs-prefer-sfc", ae, "prefer-sfc")
          , h = I("close-sidebar");
        function y(e, t, s) {
            if ("undefined" == typeof localStorage)
                return ()=>{}
                ;
            const l = document.documentElement.classList;
            return (a=!t.value)=>{
                (t.value = a) ? l.add(s) : l.remove(s),
                localStorage.setItem(e, String(t.value))
            }
        }
        return (e,a)=>n.value ? (t(),
        s("div", me, [l("button", {
            class: "toggle",
            "aria-label": "偏好切换开关",
            "aria-controls": "preference-switches",
            "aria-expanded": k(i),
            onClick: c,
            onMousedown: r,
            onBlur: d
        }, [ye, v(k(T), {
            class: C(["vt-link-icon", {
                open: k(i)
            }])
        }, null, 8, ["class"])], 40, he), l("div", {
            id: "preference-switches",
            hidden: !k(i),
            "aria-hidden": !k(i)
        }, [l("div", _e, [l("label", {
            class: "options-label",
            onClick: a[0] || (a[0] = e=>k(p)(!1))
        }, "选项式"), v(k(ee), {
            class: "api-switch",
            "aria-label": "偏好组合式 API",
            "aria-checked": k(le),
            onClick: a[1] || (a[1] = e=>k(p)())
        }, null, 8, ["aria-checked"]), l("label", {
            class: "composition-label",
            onClick: a[2] || (a[2] = e=>k(p)(!0))
        }, "组合式"), l("a", {
            class: "switch-link",
            title: "关于 API 风格偏好",
            href: "/guide/introduction.html#api-styles",
            onClick: a[3] || (a[3] = (...e)=>k(h) && k(h)(...e))
        }, "?"), v(ve)]), o.value ? (t(),
        s("div", ge, [l("label", {
            class: "no-sfc-label",
            onClick: a[4] || (a[4] = e=>k(m)(!1))
        }, "HTML"), v(k(ee), {
            class: "sfc-switch",
            "aria-label": "偏好单文件组件",
            "aria-checked": k(ae),
            onClick: a[5] || (a[5] = e=>k(m)())
        }, null, 8, ["aria-checked"]), l("label", {
            class: "sfc-label",
            onClick: a[6] || (a[6] = e=>k(m)(!0))
        }, "单文件组件"), l("a", {
            class: "switch-link",
            title: "关于单文件组件",
            href: "/guide/scaling-up/sfc.html",
            onClick: a[7] || (a[7] = (...e)=>k(h) && k(h)(...e))
        }, "?")])) : u("", !0)], 8, ke)])) : u("", !0)
    }
}), [["__scopeId", "data-v-9490edee"]]);
export {we as P, ee as V, Q as _, $ as a, ae as b, ne as f, le as p};
