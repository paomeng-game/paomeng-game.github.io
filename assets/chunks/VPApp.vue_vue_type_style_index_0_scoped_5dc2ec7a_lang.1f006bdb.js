import {O as e, e as t, g as n, h as o, w as i} from "./framework.0ed1d5d2.js";
const r = e();
let a = !1
  , u = 0;
function l(i) {
    const l = e(!1);
    if ("undefined" != typeof window) {
        !a && (document.addEventListener("focusin", c),
        a = !0,
        r.value = document.activeElement),
        u++;
        const e = t(r, (e=>{
            var t, n, o;
            e === i.elRef.value || (null == (t = i.elRef.value) ? void 0 : t.contains(e)) ? (l.value = !0,
            null == (n = i.onFocus) || n.call(i)) : (l.value = !1,
            null == (o = i.onBlur) || o.call(i))
        }
        ));
        n((()=>{
            e(),
            u--,
            u || document.removeEventListener("focusin", c)
        }
        ))
    }
    return o(l)
}
function c() {
    r.value = document.activeElement
}
const d = /#.*$/
  , s = /(index)?\.(md|html)$/
  , v = /^[a-z]+:/i;
function f(e) {
    return /^\//.test(e) ? e : `/${e}`
}
function h(e) {
    if (t = e,
    v.test(t))
        return e;
    var t;
    const {pathname: n, search: o, hash: r} = new URL(e,"https://paomeng-game.github.io");
    return i(n.endsWith("/") || n.endsWith(".html") ? e : `${n.replace(/(\.md)?$/, ".html")}${o}${r}`)
}
const m = "undefined" != typeof window
  , w = e(m ? location.hash : "");
function g(e, t, n=!1) {
    if (void 0 === t)
        return !1;
    if (e = p(`/${e}`),
    n)
        return new RegExp(t).test(e);
    {
        if (p(t) !== e)
            return !1;
        const n = t.match(d);
        return !n || w.value === n[0]
    }
}
function p(e) {
    return decodeURI(e).replace(d, "").replace(s, "")
}
m && window.addEventListener("hashchange", (()=>{
    w.value = location.hash
}
));
var y = !1;
if ("undefined" != typeof window) {
    var E = {
        get passive() {
            y = !0
        }
    };
    window.addEventListener("testPassive", null, E),
    window.removeEventListener("testPassive", null, E)
}
var b = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
  , L = []
  , T = !1
  , R = -1
  , $ = void 0
  , x = void 0
  , P = function(e) {
    return L.some((function(t) {
        return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
    }
    ))
}
  , A = function(e) {
    var t = e || window.event;
    return !!P(t.target) || (t.touches.length > 1 || (t.preventDefault && t.preventDefault(),
    !1))
}
  , B = function(e, t) {
    if (e) {
        if (!L.some((function(t) {
            return t.targetElement === e
        }
        ))) {
            var n = {
                targetElement: e,
                options: t || {}
            };
            L = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(L), [n]),
            b ? (e.ontouchstart = function(e) {
                1 === e.targetTouches.length && (R = e.targetTouches[0].clientY)
            }
            ,
            e.ontouchmove = function(t) {
                1 === t.targetTouches.length && function(e, t) {
                    var n = e.targetTouches[0].clientY - R;
                    !P(e.target) && (t && 0 === t.scrollTop && n > 0 || function(e) {
                        return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                    }(t) && n < 0 ? A(e) : e.stopPropagation())
                }(t, e)
            }
            ,
            T || (document.addEventListener("touchmove", A, y ? {
                passive: !1
            } : void 0),
            T = !0)) : function(e) {
                if (void 0 === x) {
                    var t = !!e && !0 === e.reserveScrollBarGap
                      , n = window.innerWidth - document.documentElement.clientWidth;
                    t && n > 0 && (x = document.body.style.paddingRight,
                    document.body.style.paddingRight = n + "px")
                }
                void 0 === $ && ($ = document.body.style.overflow,
                document.body.style.overflow = "hidden")
            }(t)
        }
    } else
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
}
  , S = function() {
    b ? (L.forEach((function(e) {
        e.targetElement.ontouchstart = null,
        e.targetElement.ontouchmove = null
    }
    )),
    T && (document.removeEventListener("touchmove", A, y ? {
        passive: !1
    } : void 0),
    T = !1),
    R = -1) : (void 0 !== x && (document.body.style.paddingRight = x,
    x = void 0),
    void 0 !== $ && (document.body.style.overflow = $,
    $ = void 0)),
    L = []
};
export {S as c, B as d, f as e, g as i, h as n, l as u};
