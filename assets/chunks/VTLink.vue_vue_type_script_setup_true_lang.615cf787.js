import {_ as e, y as a, S as s, L as r, f as n, c as t, k as o, T as l, K as f, V as h, q as i, j as p} from "./framework.0ed1d5d2.js";
const u = {}
  , c = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
}
  , v = [r("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
}, null, -1), r("path", {
    d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
}, null, -1)];
const d = e(u, [["render", function(e, r) {
    return a(),
    s("svg", c, v)
}
]])
  , k = n({
    __name: "VTLink",
    props: {
        href: {},
        noIcon: {
            type: Boolean
        }
    },
    setup(e) {
        const s = e
          , r = t((()=>s.href && /^[a-z]+:/i.test(s.href)));
        return (e,s)=>(a(),
        o(p(e.href ? "a" : "span"), {
            class: i(["vt-link", {
                link: e.href
            }]),
            href: e.href,
            target: r.value ? "_blank" : void 0,
            rel: r.value ? "noopener noreferrer" : void 0
        }, {
            default: l((()=>[f(e.$slots, "default"), r.value && !e.noIcon ? (a(),
            o(d, {
                key: 0,
                class: "vt-link-icon"
            })) : h("", !0)])),
            _: 3
        }, 8, ["class", "href", "target", "rel"]))
    }
});
export {d as V, k as _};
