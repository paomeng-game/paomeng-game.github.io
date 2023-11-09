import {O as e, f as a, F as s, g as n, y as t, S as r, B as o, d as i, W as c, L as l, V as p, q as m, _ as u} from "./framework.0ed1d5d2.js";
const g = e()
  , f = e(!1)
  , d = "https://sponsors.vuejs.org"
  , v = async()=>{
    f.value || (f.value = !0,
    g.value = await (await fetch(`${d}/data.json`)).json())
}
  , k = ["href"]
  , y = {
    key: 0
}
  , h = ["srcset"]
  , $ = ["src", "alt"]
  , _ = ["src", "alt"]
  , w = u(a({
    __name: "SponsorsGroup",
    props: {
        tier: {},
        placement: {
            default: "aside"
        }
    },
    setup(a) {
        const u = a
          , f = e()
          , w = e(!1);
        s((async()=>{
            const e = new IntersectionObserver((a=>{
                a[0].isIntersecting && (w.value = !0,
                e.disconnect())
            }
            ),{
                rootMargin: "0px 0px 300px 0px"
            });
            e.observe(f.value),
            n((()=>e.disconnect())),
            await v()
        }
        ));
        const x = {
            aside: "4QUPDDRU",
            landing: "58FLAR2Z",
            page: "ZXLO3IUT"
        };
        function b(e) {
            fathom.trackGoal(e ? "Y2BVYNT2" : x[u.placement], 0)
        }
        return (e,a)=>(t(),
        r("div", {
            ref_key: "container",
            ref: f,
            class: m(["sponsor-container", ["platinum_china" === e.tier ? "special" : e.tier, e.placement]])
        }, [o(g) && w.value ? (t(!0),
        r(i, {
            key: 0
        }, c(o(g)[e.tier], (({url: e, img: s, name: n})=>(t(),
        r("a", {
            class: "sponsor-item",
            href: e,
            target: "_blank",
            rel: "sponsored noopener",
            onClick: a[0] || (a[0] = e=>b())
        }, [s.endsWith("png") ? (t(),
        r("picture", y, [l("source", {
            type: "image/avif",
            srcset: `${o(d)}/images/${s.replace(/\.png$/, ".avif")}`
        }, null, 8, h), l("img", {
            src: `${o(d)}/images/${s}`,
            alt: n
        }, null, 8, $)])) : (t(),
        r("img", {
            key: 1,
            src: `${o(d)}/images/${s}`,
            alt: n
        }, null, 8, _))], 8, k)))), 256)) : p("", !0), "page" !== e.placement && "special" !== e.tier ? (t(),
        r("a", {
            key: 1,
            href: "/sponsor/",
            class: "sponsor-item action",
            onClick: a[1] || (a[1] = e=>b(!0))
        }, "成为赞助商")) : p("", !0)], 2))
    }
}), [["__scopeId", "data-v-e2f014f4"]]);
export {w as S, d as b, g as d, v as l};
