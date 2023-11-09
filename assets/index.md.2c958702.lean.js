import {f as e, z as a, y as s, S as t, L as l, d as i, W as n, Q as c, R as r, T as o, I as p, B as d, F as u, D as h, V as v, M as m, E as g, A as _, _ as f} from "./chunks/framework.0ed1d5d2.js";
import "./chunks/VPApp.vue_vue_type_style_index_0_scoped_5dc2ec7a_lang.1f006bdb.js";
import {_ as x} from "./chunks/VTLink.vue_vue_type_script_setup_true_lang.615cf787.js";
import {l as S, d as k, b as y, S as b} from "./chunks/SponsorsGroup.7c3d9455.js";
const w = {
    id: "sitemap"
}
  , j = {
    class: "container"
}
  , $ = {
    class: "sitemap-col"
}
  , M = e({
    __name: "SiteMap",
    setup(e) {
        const u = a().site.value.themeConfig.nav
          , h = u.find((e=>{
            var a;
            return null == (a = e.activeMatch) ? void 0 : a.includes("ecosystem")
        }
        ))
          , v = u.filter((e=>e !== h && e.items)).concat(h.items);
        return (e,a)=>(s(),
        t("section", w, [l("div", j, [(s(!0),
        t(i, null, n(d(v), (e=>(s(),
        t("div", $, [l("h4", null, c(e.text), 1), l("ul", null, [(s(!0),
        t(i, null, n(e.items, (e=>(s(),
        t("li", null, [r(d(x), {
            href: e.link
        }, {
            default: o((()=>[p(c(e.text), 1)])),
            _: 2
        }, 1032, ["href"])])))), 256))])])))), 256))])]))
    }
})
  , J = e=>(g("data-v-9e9e3e87"),
e = e(),
_(),
e)
  , P = m('<section id="hero" data-v-9e9e3e87><h1 class="tagline" data-v-9e9e3e87><span class="accent" data-v-9e9e3e87>渐进式</span><br data-v-9e9e3e87>JavaScript 框架 </h1><p class="description" data-v-9e9e3e87> 易学易用，性能出色，适用场景丰富的 Web 前端框架。 </p><p class="actions" data-v-9e9e3e87><a class="get-started" href="/guide/introduction.html" data-v-9e9e3e87> 快速上手 <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-9e9e3e87><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-9e9e3e87></path></svg></a><a class="setup" href="/guide/quick-start.html" data-v-9e9e3e87>安装</a></p></section>', 1)
  , V = {
    id: "special-sponsor"
}
  , L = J((()=>l("h3", null, "中国区铂金赞助", -1)))
  , A = {
    id: "special-sponsor-container"
}
  , I = ["href"]
  , T = {
    key: 0
}
  , W = ["srcset"]
  , z = ["src", "alt"]
  , B = ["src", "alt"]
  , C = {
    key: 1,
    class: "lead",
    href: "/sponsor/"
}
  , G = J((()=>l("section", {
    id: "highlights",
    class: "vt-box-container"
}, [l("div", {
    class: "vt-box"
}, [l("h2", null, "易学易用"), l("p", null, " 基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。 ")]), l("div", {
    class: "vt-box"
}, [l("h2", null, "性能出色"), l("p", null, "经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。")]), l("div", {
    class: "vt-box"
}, [l("h2", null, "灵活多变"), l("p", null, " 丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。 ")])], -1)))
  , H = {
    id: "sponsors"
}
  , N = J((()=>l("h2", null, "Platinum Sponsors", -1)))
  , O = J((()=>l("h2", null, "Gold Sponsors", -1)))
  , q = f(e({
    __name: "Home",
    setup: e=>(u((async()=>{
        await S()
    }
    )),
    (e,a)=>(s(),
    t(i, null, [P, l("section", V, [d(k) && d(k).platinum_china ? (s(),
    t(i, {
        key: 0
    }, [L, l("div", A, [(s(!0),
    t(i, null, n(d(k).platinum_china, (({url: e, img: a, name: i, height: n, description: c})=>(s(),
    t("a", {
        class: "logo",
        href: e,
        target: "_blank",
        rel: "sponsored noopener"
    }, [a.endsWith("png") ? (s(),
    t("picture", T, [l("source", {
        type: "image/avif",
        srcset: `${d(y)}/images/${a.replace(/\.png$/, ".avif")}`
    }, null, 8, W), l("img", {
        src: `${d(y)}/images/${a}`,
        alt: i,
        style: h({
            height: n || "50px"
        })
    }, null, 12, z)])) : (s(),
    t("img", {
        key: 1,
        width: "150",
        src: `${d(y)}/images/${a}`,
        alt: i
    }, null, 8, B))], 8, I)))), 256))])], 64)) : d(k) ? (s(),
    t("a", C, "中国区铂金赞助位 点击了解更多")) : v("", !0)]), G, l("section", H, [N, r(b, {
        tier: "platinum",
        placement: "landing"
    }), O, r(b, {
        tier: "gold",
        placement: "landing"
    })]), r(M)], 64)))
}), [["__scopeId", "data-v-9e9e3e87"]])
  , E = JSON.parse('{"title":"Vue.js - 渐进式 JavaScript 框架","description":"","frontmatter":{"page":true,"title":"Vue.js - 渐进式 JavaScript 框架"},"headers":[],"relativePath":"index.md","filePath":"index.md"}')
  , F = {
    name: "index.md"
}
  , R = Object.assign(F, {
    setup: e=>(e,a)=>(s(),
    t("div", null, [r(q)]))
});
export {E as __pageData, R as default};
