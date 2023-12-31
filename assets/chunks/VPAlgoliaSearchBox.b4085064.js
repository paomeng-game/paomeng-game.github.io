import {f as e, J as t, N as n, F as r, y as o, S as i} from "./framework.0ed1d5d2.js";
import {u as c} from "../app.879cf5f7.js";
import "./VPApp.vue_vue_type_style_index_0_scoped_5dc2ec7a_lang.1f006bdb.js";
import "./VTLink.vue_vue_type_script_setup_true_lang.615cf787.js";
import "./PreferenceSwitch.323cb5c9.js";
import "./VTIconLinkedIn.766062a8.js";
import "./VTIconChevronLeft.8c786edd.js";
import "./SponsorsGroup.7c3d9455.js";
/*! @docsearch/js 3.5.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach((function(t) {
            s(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function f() {
    return f = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    f.apply(this, arguments)
}
function p(e, t) {
    return function(e) {
        if (Array.isArray(e))
            return e
    }(e) || function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (u) {
                a = !0,
                o = u
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }
    }(e, t) || v(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function m(e) {
    return function(e) {
        if (Array.isArray(e))
            return d(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || v(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function v(e, t) {
    if (e) {
        if ("string" == typeof e)
            return d(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
    }
}
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
var h, y, b, _, g, O = {}, S = [], w = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function j(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function E(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}
function P(e, t, n) {
    var r, o, i, c = arguments, a = {};
    for (i in t)
        "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
    if (arguments.length > 3)
        for (n = [n],
        i = 3; i < arguments.length; i++)
            n.push(c[i]);
    if (null != n && (a.children = n),
    "function" == typeof e && null != e.defaultProps)
        for (i in e.defaultProps)
            void 0 === a[i] && (a[i] = e.defaultProps[i]);
    return I(e, a, r, o, null)
}
function I(e, t, n, r, o) {
    var i = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++h.__v : o
    };
    return null != h.vnode && h.vnode(i),
    i
}
function k(e) {
    return e.children
}
function D(e, t) {
    this.props = e,
    this.context = t
}
function A(e, t) {
    if (null == t)
        return e.__ ? A(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e)
            return n.__e;
    return "function" == typeof e.type ? A(e) : null
}
function C(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return C(e)
    }
}
function x(e) {
    (!e.__d && (e.__d = !0) && y.push(e) && !N.__r++ || _ !== h.debounceRendering) && ((_ = h.debounceRendering) || b)(N)
}
function N() {
    for (var e; N.__r = y.length; )
        e = y.sort((function(e, t) {
            return e.__v.__b - t.__v.__b
        }
        )),
        y = [],
        e.some((function(e) {
            var t, n, r, o, i, c;
            e.__d && (i = (o = (t = e).__v).__e,
            (c = t.__P) && (n = [],
            (r = j({}, o)).__v = o.__v + 1,
            B(c, o, r, t.__n, void 0 !== c.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? A(o) : i, o.__h),
            V(n, o),
            o.__e != i && C(o)))
        }
        ))
}
function T(e, t, n, r, o, i, c, a, u, l) {
    var s, f, p, m, v, d, h, y = r && r.__k || S, b = y.length;
    for (n.__k = [],
    s = 0; s < t.length; s++)
        if (null != (m = n.__k[s] = null == (m = t[s]) || "boolean" == typeof m ? null : "string" == typeof m || "number" == typeof m ? I(null, m, null, null, m) : Array.isArray(m) ? I(k, {
            children: m
        }, null, null, null) : m.__b > 0 ? I(m.type, m.props, m.key, null, m.__v) : m)) {
            if (m.__ = n,
            m.__b = n.__b + 1,
            null === (p = y[s]) || p && m.key == p.key && m.type === p.type)
                y[s] = void 0;
            else
                for (f = 0; f < b; f++) {
                    if ((p = y[f]) && m.key == p.key && m.type === p.type) {
                        y[f] = void 0;
                        break
                    }
                    p = null
                }
            B(e, m, p = p || O, o, i, c, a, u, l),
            v = m.__e,
            (f = m.ref) && p.ref != f && (h || (h = []),
            p.ref && h.push(p.ref, null, m),
            h.push(f, m.__c || v, m)),
            null != v ? (null == d && (d = v),
            "function" == typeof m.type && null != m.__k && m.__k === p.__k ? m.__d = u = R(m, u, e) : u = L(e, m, p, y, v, u),
            l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && p.__e == u && u.parentNode != e && (u = A(p))
        }
    for (n.__e = d,
    s = b; s--; )
        null != y[s] && ("function" == typeof n.type && null != y[s].__e && y[s].__e == n.__d && (n.__d = A(r, s + 1)),
        W(y[s], y[s]));
    if (h)
        for (s = 0; s < h.length; s++)
            K(h[s], h[++s], h[++s])
}
function R(e, t, n) {
    var r, o;
    for (r = 0; r < e.__k.length; r++)
        (o = e.__k[r]) && (o.__ = e,
        t = "function" == typeof o.type ? R(o, t, n) : L(n, o, o, e.__k, o.__e, t));
    return t
}
function q(e, t) {
    return t = t || [],
    null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        q(e, t)
    }
    )) : t.push(e)),
    t
}
function L(e, t, n, r, o, i) {
    var c, a, u;
    if (void 0 !== t.__d)
        c = t.__d,
        t.__d = void 0;
    else if (null == n || o != i || null == o.parentNode)
        e: if (null == i || i.parentNode !== e)
            e.appendChild(o),
            c = null;
        else {
            for (a = i,
            u = 0; (a = a.nextSibling) && u < r.length; u += 2)
                if (a == o)
                    break e;
            e.insertBefore(o, i),
            c = i
        }
    return void 0 !== c ? c : o.nextSibling
}
function M(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || w.test(t) ? n : n + "px"
}
function U(e, t, n, r, o) {
    var i;
    e: if ("style" === t)
        if ("string" == typeof n)
            e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""),
            r)
                for (t in r)
                    n && t in n || M(e.style, t, "");
            if (n)
                for (t in n)
                    r && n[t] === r[t] || M(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1])
        i = t !== (t = t.replace(/Capture$/, "")),
        t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + i] = n,
        n ? r || e.addEventListener(t, i ? F : H, i) : e.removeEventListener(t, i ? F : H, i);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (o)
            t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e)
            try {
                e[t] = null == n ? "" : n;
                break e
            } catch (c) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}
function H(e) {
    this.l[e.type + !1](h.event ? h.event(e) : e)
}
function F(e) {
    this.l[e.type + !0](h.event ? h.event(e) : e)
}
function B(e, t, n, r, o, i, c, a, u) {
    var l, s, f, p, m, v, d, y, b, _, g, w = t.type;
    if (void 0 !== t.constructor)
        return null;
    null != n.__h && (u = n.__h,
    a = t.__e = n.__e,
    t.__h = null,
    i = [a]),
    (l = h.__b) && l(t);
    try {
        e: if ("function" == typeof w) {
            if (y = t.props,
            b = (l = w.contextType) && r[l.__c],
            _ = l ? b ? b.props.value : l.__ : r,
            n.__c ? d = (s = t.__c = n.__c).__ = s.__E : ("prototype"in w && w.prototype.render ? t.__c = s = new w(y,_) : (t.__c = s = new D(y,_),
            s.constructor = w,
            s.render = z),
            b && b.sub(s),
            s.props = y,
            s.state || (s.state = {}),
            s.context = _,
            s.__n = r,
            f = s.__d = !0,
            s.__h = []),
            null == s.__s && (s.__s = s.state),
            null != w.getDerivedStateFromProps && (s.__s == s.state && (s.__s = j({}, s.__s)),
            j(s.__s, w.getDerivedStateFromProps(y, s.__s))),
            p = s.props,
            m = s.state,
            f)
                null == w.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(),
                null != s.componentDidMount && s.__h.push(s.componentDidMount);
            else {
                if (null == w.getDerivedStateFromProps && y !== p && null != s.componentWillReceiveProps && s.componentWillReceiveProps(y, _),
                !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(y, s.__s, _) || t.__v === n.__v) {
                    s.props = y,
                    s.state = s.__s,
                    t.__v !== n.__v && (s.__d = !1),
                    s.__v = t,
                    t.__e = n.__e,
                    t.__k = n.__k,
                    s.__h.length && c.push(s);
                    break e
                }
                null != s.componentWillUpdate && s.componentWillUpdate(y, s.__s, _),
                null != s.componentDidUpdate && s.__h.push((function() {
                    s.componentDidUpdate(p, m, v)
                }
                ))
            }
            s.context = _,
            s.props = y,
            s.state = s.__s,
            (l = h.__r) && l(t),
            s.__d = !1,
            s.__v = t,
            s.__P = e,
            l = s.render(s.props, s.state, s.context),
            s.state = s.__s,
            null != s.getChildContext && (r = j(j({}, r), s.getChildContext())),
            f || null == s.getSnapshotBeforeUpdate || (v = s.getSnapshotBeforeUpdate(p, m)),
            g = null != l && l.type === k && null == l.key ? l.props.children : l,
            T(e, Array.isArray(g) ? g : [g], t, n, r, o, i, c, a, u),
            s.base = t.__e,
            t.__h = null,
            s.__h.length && c.push(s),
            d && (s.__E = s.__ = null),
            s.__e = !1
        } else
            null == i && t.__v === n.__v ? (t.__k = n.__k,
            t.__e = n.__e) : t.__e = function(e, t, n, r, o, i, c, a) {
                var u, l, s, f, p = n.props, m = t.props, v = t.type, d = 0;
                if ("svg" === v && (o = !0),
                null != i)
                    for (; d < i.length; d++)
                        if ((u = i[d]) && (u === e || (v ? u.localName == v : 3 == u.nodeType))) {
                            e = u,
                            i[d] = null;
                            break
                        }
                if (null == e) {
                    if (null === v)
                        return document.createTextNode(m);
                    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, m.is && m),
                    i = null,
                    a = !1
                }
                if (null === v)
                    p === m || a && e.data === m || (e.data = m);
                else {
                    if (i = i && S.slice.call(e.childNodes),
                    l = (p = n.props || O).dangerouslySetInnerHTML,
                    s = m.dangerouslySetInnerHTML,
                    !a) {
                        if (null != i)
                            for (p = {},
                            f = 0; f < e.attributes.length; f++)
                                p[e.attributes[f].name] = e.attributes[f].value;
                        (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""))
                    }
                    if (function(e, t, n, r, o) {
                        var i;
                        for (i in n)
                            "children" === i || "key" === i || i in t || U(e, i, null, n[i], r);
                        for (i in t)
                            o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || U(e, i, t[i], n[i], r)
                    }(e, m, p, o, a),
                    s)
                        t.__k = [];
                    else if (d = t.props.children,
                    T(e, Array.isArray(d) ? d : [d], t, n, r, o && "foreignObject" !== v, i, c, e.firstChild, a),
                    null != i)
                        for (d = i.length; d--; )
                            null != i[d] && E(i[d]);
                    a || ("value"in m && void 0 !== (d = m.value) && (d !== e.value || "progress" === v && !d) && U(e, "value", d, p.value, !1),
                    "checked"in m && void 0 !== (d = m.checked) && d !== e.checked && U(e, "checked", d, p.checked, !1))
                }
                return e
            }(n.__e, t, n, r, o, i, c, u);
        (l = h.diffed) && l(t)
    } catch (P) {
        t.__v = null,
        (u || null != i) && (t.__e = a,
        t.__h = !!u,
        i[i.indexOf(a)] = null),
        h.__e(P, t, n)
    }
}
function V(e, t) {
    h.__c && h.__c(t, e),
    e.some((function(t) {
        try {
            e = t.__h,
            t.__h = [],
            e.some((function(e) {
                e.call(t)
            }
            ))
        } catch (n) {
            h.__e(n, t.__v)
        }
    }
    ))
}
function K(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (r) {
        h.__e(r, n)
    }
}
function W(e, t, n) {
    var r, o, i;
    if (h.unmount && h.unmount(e),
    (r = e.ref) && (r.current && r.current !== e.__e || K(r, null, t)),
    n || "function" == typeof e.type || (n = null != (o = e.__e)),
    e.__e = e.__d = void 0,
    null != (r = e.__c)) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount()
            } catch (c) {
                h.__e(c, t)
            }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++)
            r[i] && W(r[i], t, n);
    null != o && E(o)
}
function z(e, t, n) {
    return this.constructor(e, n)
}
function J(e, t, n) {
    var r, o, i;
    h.__ && h.__(e, t),
    o = (r = "function" == typeof n) ? null : n && n.__k || t.__k,
    i = [],
    B(t, e = (!r && n || t).__k = P(k, null, [e]), o || O, O, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? S.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r),
    V(i, e)
}
function $(e, t) {
    J(e, t, $)
}
function Z(e, t, n) {
    var r, o, i, c = arguments, a = j({}, e.props);
    for (i in t)
        "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
    if (arguments.length > 3)
        for (n = [n],
        i = 3; i < arguments.length; i++)
            n.push(c[i]);
    return null != n && (a.children = n),
    I(e.type, a, r || e.key, o || e.ref, null)
}
h = {
    __e: function(e, t) {
        for (var n, r, o; t = t.__; )
            if ((n = t.__c) && !n.__)
                try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)),
                    o = n.__d),
                    null != n.componentDidCatch && (n.componentDidCatch(e),
                    o = n.__d),
                    o)
                        return n.__E = n
                } catch (i) {
                    e = i
                }
        throw e
    },
    __v: 0
},
D.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = j({}, this.state),
    "function" == typeof e && (e = e(j({}, n), this.props)),
    e && j(n, e),
    null != e && this.__v && (t && this.__h.push(t),
    x(this))
}
,
D.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    x(this))
}
,
D.prototype.render = k,
y = [],
b = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
N.__r = 0,
g = 0;
var Q, G, Y, X = 0, ee = [], te = h.__b, ne = h.__r, re = h.diffed, oe = h.__c, ie = h.unmount;
function ce(e, t) {
    h.__h && h.__h(G, e, X || t),
    X = 0;
    var n = G.__H || (G.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}),
    n.__[e]
}
function ae(e) {
    return X = 1,
    ue(ye, e)
}
function ue(e, t, n) {
    var r = ce(Q++, 2);
    return r.t = e,
    r.__c || (r.__ = [n ? n(t) : ye(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]],
        r.__c.setState({}))
    }
    ],
    r.__c = G),
    r.__
}
function le(e, t) {
    var n = ce(Q++, 3);
    !h.__s && he(n.__H, t) && (n.__ = e,
    n.__H = t,
    G.__H.__h.push(n))
}
function se(e, t) {
    var n = ce(Q++, 4);
    !h.__s && he(n.__H, t) && (n.__ = e,
    n.__H = t,
    G.__h.push(n))
}
function fe(e, t) {
    var n = ce(Q++, 7);
    return he(n.__H, t) && (n.__ = e(),
    n.__H = t,
    n.__h = e),
    n.__
}
function pe() {
    ee.forEach((function(e) {
        if (e.__P)
            try {
                e.__H.__h.forEach(ve),
                e.__H.__h.forEach(de),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                h.__e(t, e.__v)
            }
    }
    )),
    ee = []
}
h.__b = function(e) {
    G = null,
    te && te(e)
}
,
h.__r = function(e) {
    ne && ne(e),
    Q = 0;
    var t = (G = e.__c).__H;
    t && (t.__h.forEach(ve),
    t.__h.forEach(de),
    t.__h = [])
}
,
h.diffed = function(e) {
    re && re(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== ee.push(t) && Y === h.requestAnimationFrame || ((Y = h.requestAnimationFrame) || function(e) {
        var t, n = function() {
            clearTimeout(r),
            me && cancelAnimationFrame(t),
            setTimeout(e)
        }, r = setTimeout(n, 100);
        me && (t = requestAnimationFrame(n))
    }
    )(pe)),
    G = void 0
}
,
h.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(ve),
            e.__h = e.__h.filter((function(e) {
                return !e.__ || de(e)
            }
            ))
        } catch (n) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            }
            )),
            t = [],
            h.__e(n, e.__v)
        }
    }
    )),
    oe && oe(e, t)
}
,
h.unmount = function(e) {
    ie && ie(e);
    var t = e.__c;
    if (t && t.__H)
        try {
            t.__H.__.forEach(ve)
        } catch (n) {
            h.__e(n, t.__v)
        }
}
;
var me = "function" == typeof requestAnimationFrame;
function ve(e) {
    var t = G;
    "function" == typeof e.__c && e.__c(),
    G = t
}
function de(e) {
    var t = G;
    e.__c = e.__(),
    G = t
}
function he(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }
    ))
}
function ye(e, t) {
    return "function" == typeof t ? t(e) : t
}
function be(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function _e(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t))
            return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r])
            return !0;
    return !1
}
function ge(e) {
    this.props = e
}
(ge.prototype = new D).isPureReactComponent = !0,
ge.prototype.shouldComponentUpdate = function(e, t) {
    return _e(this.props, e) || _e(this.state, t)
}
;
var Oe = h.__b;
h.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
    e.ref = null),
    Oe && Oe(e)
}
;
var Se = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911
  , we = function(e, t) {
    return null == e ? null : q(q(e).map(t))
}
  , je = {
    map: we,
    forEach: we,
    count: function(e) {
        return e ? q(e).length : 0
    },
    only: function(e) {
        var t = q(e);
        if (1 !== t.length)
            throw "Children.only";
        return t[0]
    },
    toArray: q
}
  , Ee = h.__e;
function Pe() {
    this.__u = 0,
    this.t = null,
    this.__b = null
}
function Ie(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}
function ke() {
    this.u = null,
    this.o = null
}
h.__e = function(e, t, n) {
    if (e.then)
        for (var r, o = t; o = o.__; )
            if ((r = o.__c) && r.__c)
                return null == t.__e && (t.__e = n.__e,
                t.__k = n.__k),
                r.__c(e, t);
    Ee(e, t, n)
}
,
(Pe.prototype = new D).__c = function(e, t) {
    var n = t.__c
      , r = this;
    null == r.t && (r.t = []),
    r.t.push(n);
    var o = Ie(r.__v)
      , i = !1
      , c = function() {
        i || (i = !0,
        n.componentWillUnmount = n.__c,
        o ? o(a) : a())
    };
    n.__c = n.componentWillUnmount,
    n.componentWillUnmount = function() {
        c(),
        n.__c && n.__c()
    }
    ;
    var a = function() {
        if (!--r.__u) {
            if (r.state.__e) {
                var e = r.state.__e;
                r.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__v = null,
                    t.__k = t.__k && t.__k.map((function(t) {
                        return e(t, n, r)
                    }
                    )),
                    t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d),
                    t.__c.__e = !0,
                    t.__c.__P = r)),
                    t
                }(e, e.__c.__P, e.__c.__O)
            }
            var t;
            for (r.setState({
                __e: r.__b = null
            }); t = r.t.pop(); )
                t.forceUpdate()
        }
    }
      , u = !0 === t.__h;
    r.__u++ || u || r.setState({
        __e: r.__b = r.__v.__k[0]
    }),
    e.then(c, c)
}
,
Pe.prototype.componentWillUnmount = function() {
    this.t = []
}
,
Pe.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div")
              , r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                }
                )),
                t.__c.__H = null),
                null != (t = be({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n),
                t.__c = null),
                t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }
                ))),
                t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var o = t.__e && P(k, null, e.fallback);
    return o && (o.__h = null),
    [P(k, null, t.__e ? null : e.children), o]
}
;
var De = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n; ) {
            for (; n.length > 3; )
                n.pop()();
            if (n[1] < n[0])
                break;
            e.u = n = n[2]
        }
};
function Ae(e) {
    return this.getChildContext = function() {
        return e.context
    }
    ,
    e.children
}
function Ce(e) {
    var t = this
      , n = e.i;
    t.componentWillUnmount = function() {
        J(null, t.l),
        t.l = null,
        t.i = null
    }
    ,
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v ? (t.l || (t.i = n,
    t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e),
            t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e),
            t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
            t.i.removeChild(e)
        }
    }),
    J(P(Ae, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}
function xe(e, t) {
    return P(Ce, {
        __v: e,
        i: t
    })
}
(ke.prototype = new D).__e = function(e) {
    var t = this
      , n = Ie(t.__v)
      , r = t.o.get(e);
    return r[0]++,
    function(o) {
        var i = function() {
            t.props.revealOrder ? (r.push(o),
            De(t, e, r)) : o()
        };
        n ? n(i) : i()
    }
}
,
ke.prototype.render = function(e) {
    this.u = null,
    this.o = new Map;
    var t = q(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--; )
        this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}
,
ke.prototype.componentDidUpdate = ke.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        De(e, n, t)
    }
    ))
}
;
var Ne = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
  , Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
  , Re = function(e) {
    return ("undefined" != typeof Symbol && "symbol" == l(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e)
};
function qe(e, t, n) {
    return null == t.__k && (t.textContent = ""),
    J(e, t),
    "function" == typeof n && n(),
    e ? e.__c : null
}
D.prototype.isReactComponent = {},
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(D.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}
));
var Le = h.event;
function Me() {}
function Ue() {
    return this.cancelBubble
}
function He() {
    return this.defaultPrevented
}
h.event = function(e) {
    return Le && (e = Le(e)),
    e.persist = Me,
    e.isPropagationStopped = Ue,
    e.isDefaultPrevented = He,
    e.nativeEvent = e
}
;
var Fe, Be = {
    configurable: !0,
    get: function() {
        return this.class
    }
}, Ve = h.vnode;
h.vnode = function(e) {
    var t = e.type
      , n = e.props
      , r = n;
    if ("string" == typeof t) {
        for (var o in r = {},
        n) {
            var i = n[o];
            "value" === o && "defaultValue"in n && null == i || ("defaultValue" === o && "value"in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Re(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : Te.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0),
            r[o] = i)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = q(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }
        ))),
        "select" == t && null != r.defaultValue && (r.value = q(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }
        ))),
        e.props = r
    }
    t && n.class != n.className && (Be.enumerable = "className"in n,
    null != n.className && (r.class = n.className),
    Object.defineProperty(r, "className", Be)),
    e.$$typeof = Ne,
    Ve && Ve(e)
}
;
var Ke = h.__r;
h.__r = function(e) {
    Ke && Ke(e),
    Fe = e.__c
}
;
var We = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return Fe.__n[e.__c].props.value
            }
        }
    }
};
function ze(e) {
    return !!e && e.$$typeof === Ne
}
"object" == ("undefined" == typeof performance ? "undefined" : l(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
var Je = {
    useState: ae,
    useReducer: ue,
    useEffect: le,
    useLayoutEffect: se,
    useRef: function(e) {
        return X = 5,
        fe((function() {
            return {
                current: e
            }
        }
        ), [])
    },
    useImperativeHandle: function(e, t, n) {
        X = 6,
        se((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }
        ), null == n ? n : n.concat(e))
    },
    useMemo: fe,
    useCallback: function(e, t) {
        return X = 8,
        fe((function() {
            return e
        }
        ), t)
    },
    useContext: function(e) {
        var t = G.context[e.__c]
          , n = ce(Q++, 9);
        return n.__c = e,
        t ? (null == n.__ && (n.__ = !0,
        t.sub(G)),
        t.props.value) : e.__
    },
    useDebugValue: function(e, t) {
        h.useDebugValue && h.useDebugValue(t ? t(e) : e)
    },
    version: "16.8.0",
    Children: je,
    render: qe,
    hydrate: function(e, t, n) {
        return $(e, t),
        "function" == typeof n && n(),
        e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (J(null, e),
        !0)
    },
    createPortal: xe,
    createElement: P,
    createContext: function(e, t) {
        var n = {
            __c: t = "__cC" + g++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                var n, r;
                return this.getChildContext || (n = [],
                (r = {})[t] = this,
                this.getChildContext = function() {
                    return r
                }
                ,
                this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.some(x)
                }
                ,
                this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1),
                        t && t.call(e)
                    }
                }
                ),
                e.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    },
    createFactory: function(e) {
        return P.bind(null, e)
    },
    cloneElement: function(e) {
        return ze(e) ? Z.apply(null, arguments) : e
    },
    createRef: function() {
        return {
            current: null
        }
    },
    Fragment: k,
    isValidElement: ze,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: D,
    PureComponent: ge,
    memo: function(e, t) {
        function n(e) {
            var n = this.props.ref
              , r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null),
            t ? !t(this.props, e) || !r : _e(this.props, e)
        }
        function r(t) {
            return this.shouldComponentUpdate = n,
            P(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
        r.prototype.isReactComponent = !0,
        r.__f = !0,
        r
    },
    forwardRef: function(e) {
        function t(t, n) {
            var r = be({}, t);
            return delete r.ref,
            e(r, (n = t.ref || n) && ("object" != l(n) || "current"in n) ? n : null)
        }
        return t.$$typeof = Se,
        t.render = t,
        t.prototype.isReactComponent = t.__f = !0,
        t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
        t
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: k,
    Suspense: Pe,
    SuspenseList: ke,
    lazy: function(e) {
        var t, n, r;
        function o(o) {
            if (t || (t = e()).then((function(e) {
                n = e.default || e
            }
            ), (function(e) {
                r = e
            }
            )),
            r)
                throw r;
            if (!n)
                throw t;
            return P(n, o)
        }
        return o.displayName = "Lazy",
        o.__f = !0,
        o
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: We
};
function $e() {
    return Je.createElement("svg", {
        width: "15",
        height: "15",
        className: "DocSearch-Control-Key-Icon"
    }, Je.createElement("path", {
        d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
        strokeWidth: "1.2",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "square"
    }))
}
function Ze() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        className: "DocSearch-Search-Icon",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))
}
var Qe = ["translations"];
function Ge() {
    return Ge = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ge.apply(this, arguments)
}
function Ye(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
var Xe = Je.forwardRef((function(e, t) {
    var n = e.translations
      , r = void 0 === n ? {} : n
      , o = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, Qe)
      , i = r.buttonText
      , c = void 0 === i ? "Search" : i
      , a = r.buttonAriaLabel
      , u = void 0 === a ? "Search" : a
      , l = function(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                    !t || i.length !== t); c = !0)
                        ;
                } catch (u) {
                    a = !0,
                    o = u
                } finally {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Ye(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ye(e, t) : void 0
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(ae(null), 2)
      , s = l[0]
      , f = l[1];
    return le((function() {
        "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f("⌘") : f("Ctrl"))
    }
    ), []),
    Je.createElement("button", Ge({
        type: "button",
        className: "DocSearch DocSearch-Button",
        "aria-label": u
    }, o, {
        ref: t
    }), Je.createElement("span", {
        className: "DocSearch-Button-Container"
    }, Je.createElement(Ze, null), Je.createElement("span", {
        className: "DocSearch-Button-Placeholder"
    }, c)), Je.createElement("span", {
        className: "DocSearch-Button-Keys"
    }, null !== s && Je.createElement(Je.Fragment, null, Je.createElement("kbd", {
        className: "DocSearch-Button-Key"
    }, "Ctrl" === s ? Je.createElement($e, null) : s), Je.createElement("kbd", {
        className: "DocSearch-Button-Key"
    }, "K"))))
}
));
function et(e, t) {
    var n = void 0;
    return function() {
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        n && clearTimeout(n),
        n = setTimeout((function() {
            return e.apply(void 0, o)
        }
        ), t)
    }
}
function tt(e) {
    return e.reduce((function(e, t) {
        return e.concat(t)
    }
    ), [])
}
var nt = 0;
function rt(e) {
    return 0 === e.collections.length ? 0 : e.collections.reduce((function(e, t) {
        return e + t.items.length
    }
    ), 0)
}
function ot(e) {
    return e !== Object(e)
}
function it(e, t) {
    if (e === t)
        return !0;
    if (ot(e) || ot(t) || "function" == typeof e || "function" == typeof t)
        return e === t;
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
        var o = r[n];
        if (!(o in t))
            return !1;
        if (!it(e[o], t[o]))
            return !1
    }
    return !0
}
var ct = function() {}
  , at = [{
    segment: "autocomplete-core",
    version: "1.9.3"
}];
function ut(e) {
    var t = e.item
      , n = e.items;
    return {
        index: t.__autocomplete_indexName,
        items: [t],
        positions: [1 + n.findIndex((function(e) {
            return e.objectID === t.objectID
        }
        ))],
        queryID: t.__autocomplete_queryID,
        algoliaSource: ["autocomplete"]
    }
}
function lt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
var st = ["items"]
  , ft = ["items"];
function pt(e) {
    return (pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function mt(e) {
    return function(e) {
        if (Array.isArray(e))
            return vt(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return vt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vt(e, t) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function vt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function dt(e, t) {
    if (null == e)
        return {};
    var n, r, o = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = {}, i = Object.keys(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}
function ht(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function yt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ht(Object(n), !0).forEach((function(t) {
            bt(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function bt(e, t, n) {
    return r = function(e, t) {
        if ("object" !== pt(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== pt(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === pt(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function _t(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = [], r = 0; r < e.objectIDs.length; r += t)
        n.push(yt(yt({}, e), {}, {
            objectIDs: e.objectIDs.slice(r, r + t)
        }));
    return n
}
function gt(e) {
    return e.map((function(e) {
        var t = e.items
          , n = dt(e, st);
        return yt(yt({}, n), {}, {
            objectIDs: (null == t ? void 0 : t.map((function(e) {
                return e.objectID
            }
            ))) || n.objectIDs
        })
    }
    ))
}
function Ot(e) {
    var t, n, r, o = (t = function(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, c, a = [], u = !0, l = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = i.call(n)).done) && (a.push(r.value),
                        a.length !== t); u = !0)
                            ;
                } catch (s) {
                    l = !0,
                    o = s
                } finally {
                    try {
                        if (!u && null != n.return && (c = n.return(),
                        Object(c) !== c))
                            return
                    } finally {
                        if (l)
                            throw o
                    }
                }
                return a
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return lt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lt(e, t) : void 0
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }((e.version || "").split(".").map(Number), 2),
    n = t[0],
    r = t[1],
    n >= 3 || 2 === n && r >= 4 || 1 === n && r >= 10);
    function i(t, n, r) {
        if (o && void 0 !== r) {
            var i = r[0].__autocomplete_algoliaCredentials
              , c = {
                "X-Algolia-Application-Id": i.appId,
                "X-Algolia-API-Key": i.apiKey
            };
            e.apply(void 0, [t].concat(mt(n), [{
                headers: c
            }]))
        } else
            e.apply(void 0, [t].concat(mt(n)))
    }
    return {
        init: function(t, n) {
            e("init", {
                appId: t,
                apiKey: n
            })
        },
        setUserToken: function(t) {
            e("setUserToken", t)
        },
        clickedObjectIDsAfterSearch: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.length > 0 && i("clickedObjectIDsAfterSearch", gt(t), t[0].items)
        },
        clickedObjectIDs: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.length > 0 && i("clickedObjectIDs", gt(t), t[0].items)
        },
        clickedFilters: function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            n.length > 0 && e.apply(void 0, ["clickedFilters"].concat(n))
        },
        convertedObjectIDsAfterSearch: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.length > 0 && i("convertedObjectIDsAfterSearch", gt(t), t[0].items)
        },
        convertedObjectIDs: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.length > 0 && i("convertedObjectIDs", gt(t), t[0].items)
        },
        convertedFilters: function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            n.length > 0 && e.apply(void 0, ["convertedFilters"].concat(n))
        },
        viewedObjectIDs: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.length > 0 && t.reduce((function(e, t) {
                var n = t.items
                  , r = dt(t, ft);
                return [].concat(mt(e), mt(_t(yt(yt({}, r), {}, {
                    objectIDs: (null == n ? void 0 : n.map((function(e) {
                        return e.objectID
                    }
                    ))) || r.objectIDs
                })).map((function(e) {
                    return {
                        items: n,
                        payload: e
                    }
                }
                ))))
            }
            ), []).forEach((function(e) {
                var t = e.items;
                return i("viewedObjectIDs", [e.payload], t)
            }
            ))
        },
        viewedFilters: function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            n.length > 0 && e.apply(void 0, ["viewedFilters"].concat(n))
        }
    }
}
function St(e) {
    var t = e.items.reduce((function(e, t) {
        var n;
        return e[t.__autocomplete_indexName] = (null !== (n = e[t.__autocomplete_indexName]) && void 0 !== n ? n : []).concat(t),
        e
    }
    ), {});
    return Object.keys(t).map((function(e) {
        return {
            index: e,
            items: t[e],
            algoliaSource: ["autocomplete"]
        }
    }
    ))
}
function wt(e) {
    return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID
}
function jt(e) {
    return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Et(e) {
    return function(e) {
        if (Array.isArray(e))
            return Pt(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Pt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pt(e, t) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function Pt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function It(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function kt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? It(Object(n), !0).forEach((function(t) {
            Dt(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Dt(e, t, n) {
    return r = function(e, t) {
        if ("object" !== jt(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== jt(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === jt(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
var At = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js")
  , Ct = et((function(e) {
    var t = e.onItemsChange
      , n = e.items
      , r = e.insights
      , o = e.state;
    t({
        insights: r,
        insightsEvents: St({
            items: n
        }).map((function(e) {
            return kt({
                eventName: "Items Viewed"
            }, e)
        }
        )),
        state: o
    })
}
), 400);
function xt(e) {
    var t = kt({
        onItemsChange: function(e) {
            var t = e.insights
              , n = e.insightsEvents;
            t.viewedObjectIDs.apply(t, Et(n.map((function(e) {
                return kt(kt({}, e), {}, {
                    algoliaSource: [].concat(Et(e.algoliaSource || []), ["autocomplete-internal"])
                })
            }
            ))))
        },
        onSelect: function(e) {
            var t = e.insights
              , n = e.insightsEvents;
            t.clickedObjectIDsAfterSearch.apply(t, Et(n.map((function(e) {
                return kt(kt({}, e), {}, {
                    algoliaSource: [].concat(Et(e.algoliaSource || []), ["autocomplete-internal"])
                })
            }
            ))))
        },
        onActive: ct
    }, e)
      , n = t.insightsClient
      , r = t.onItemsChange
      , o = t.onSelect
      , i = t.onActive
      , c = n;
    n || "undefined" != typeof window && function(e) {
        var t = e.window
          , n = t.AlgoliaAnalyticsObject || "aa";
        "string" == typeof n && (c = t[n]),
        c || (t.AlgoliaAnalyticsObject = n,
        t[n] || (t[n] = function() {
            t[n].queue || (t[n].queue = []);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                r[o] = arguments[o];
            t[n].queue.push(r)
        }
        ),
        t[n].version = "2.6.0",
        c = t[n],
        function(e) {
            var t = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
            try {
                var n = e.document.createElement("script");
                n.async = !0,
                n.src = At,
                n.onerror = function() {
                    console.error(t)
                }
                ,
                document.body.appendChild(n)
            } catch (r) {
                console.error(t)
            }
        }(t))
    }({
        window: window
    });
    var a = Ot(c)
      , u = {
        current: []
    }
      , l = et((function(e) {
        var t = e.state;
        if (t.isOpen) {
            var n = t.collections.reduce((function(e, t) {
                return [].concat(Et(e), Et(t.items))
            }
            ), []).filter(wt);
            it(u.current.map((function(e) {
                return e.objectID
            }
            )), n.map((function(e) {
                return e.objectID
            }
            ))) || (u.current = n,
            n.length > 0 && Ct({
                onItemsChange: r,
                items: n,
                insights: a,
                state: t
            }))
        }
    }
    ), 0);
    return {
        name: "aa.algoliaInsightsPlugin",
        subscribe: function(e) {
            var t = e.setContext
              , n = e.onSelect
              , r = e.onActive;
            c("addAlgoliaAgent", "insights-plugin"),
            t({
                algoliaInsightsPlugin: {
                    __algoliaSearchParameters: {
                        clickAnalytics: !0
                    },
                    insights: a
                }
            }),
            n((function(e) {
                var t = e.item
                  , n = e.state
                  , r = e.event;
                wt(t) && o({
                    state: n,
                    event: r,
                    insights: a,
                    item: t,
                    insightsEvents: [kt({
                        eventName: "Item Selected"
                    }, ut({
                        item: t,
                        items: u.current
                    }))]
                })
            }
            )),
            r((function(e) {
                var t = e.item
                  , n = e.state
                  , r = e.event;
                wt(t) && i({
                    state: n,
                    event: r,
                    insights: a,
                    item: t,
                    insightsEvents: [kt({
                        eventName: "Item Active"
                    }, ut({
                        item: t,
                        items: u.current
                    }))]
                })
            }
            ))
        },
        onStateChange: function(e) {
            var t = e.state;
            l({
                state: t
            })
        },
        __autocomplete_pluginOptions: e
    }
}
function Nt(e, t) {
    var n = t;
    return {
        then: function(t, r) {
            return Nt(e.then(Rt(t, n, e), Rt(r, n, e)), n)
        },
        catch: function(t) {
            return Nt(e.catch(Rt(t, n, e)), n)
        },
        finally: function(t) {
            return t && n.onCancelList.push(t),
            Nt(e.finally(Rt(t && function() {
                return n.onCancelList = [],
                t()
            }
            , n, e)), n)
        },
        cancel: function() {
            n.isCanceled = !0;
            var e = n.onCancelList;
            n.onCancelList = [],
            e.forEach((function(e) {
                e()
            }
            ))
        },
        isCanceled: function() {
            return !0 === n.isCanceled
        }
    }
}
function Tt(e) {
    return Nt(e, {
        isCanceled: !1,
        onCancelList: []
    })
}
function Rt(e, t, n) {
    return e ? function(n) {
        return t.isCanceled ? n : e(n)
    }
    : n
}
function qt(e, t, n, r) {
    if (!n)
        return null;
    if (e < 0 && (null === t || null !== r && 0 === t))
        return n + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= n ? null === r ? null : 0 : o
}
function Lt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Mt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Lt(Object(n), !0).forEach((function(t) {
            Ut(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Ut(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Ht(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Ht(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Ht(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function Ht(e) {
    return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Ft(e) {
    var t, n, r = (n = (t = e).collections.map((function(e) {
        return e.items.length
    }
    )).reduce((function(e, t, n) {
        var r = (e[n - 1] || 0) + t;
        return e.push(r),
        e
    }
    ), []).reduce((function(e, n) {
        return n <= t.activeItemId ? e + 1 : e
    }
    ), 0),
    t.collections[n]);
    if (!r)
        return null;
    var o = r.items[function(e) {
        for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
            var c = t.collections[o];
            if (c === n) {
                r = !0;
                break
            }
            i += c.items.length,
            o++
        }
        return t.activeItemId - i
    }({
        state: e,
        collection: r
    })]
      , i = r.source;
    return {
        item: o,
        itemInputValue: i.getItemInputValue({
            item: o,
            state: e
        }),
        itemUrl: i.getItemUrl({
            item: o,
            state: e
        }),
        source: i
    }
}
var Bt = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function Vt(e) {
    return (Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Kt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Wt(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Vt(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Vt(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Vt(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function zt(e) {
    return (zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Jt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function $t(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Jt(Object(n), !0).forEach((function(t) {
            Zt(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Zt(e, t, n) {
    return r = function(e, t) {
        if ("object" !== zt(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== zt(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === zt(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function Qt(e) {
    return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Gt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Yt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Xt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Yt(Object(n), !0).forEach((function(t) {
            en(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function en(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Qt(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Qt(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Qt(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function tn(e, t) {
    var n, r = "undefined" != typeof window ? window : {}, o = e.plugins || [];
    return Xt(Xt({
        debug: !1,
        openOnFocus: !1,
        placeholder: "",
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        insights: !1,
        environment: r,
        shouldPanelOpen: function(e) {
            return rt(e.state) > 0
        },
        reshape: function(e) {
            return e.sources
        }
    }, e), {}, {
        id: null !== (n = e.id) && void 0 !== n ? n : "autocomplete-".concat(nt++),
        plugins: o,
        initialState: Xt({
            activeItemId: null,
            query: "",
            completion: null,
            collections: [],
            isOpen: !1,
            status: "idle",
            context: {}
        }, e.initialState),
        onStateChange: function(t) {
            var n;
            null === (n = e.onStateChange) || void 0 === n || n.call(e, t),
            o.forEach((function(e) {
                var n;
                return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t)
            }
            ))
        },
        onSubmit: function(t) {
            var n;
            null === (n = e.onSubmit) || void 0 === n || n.call(e, t),
            o.forEach((function(e) {
                var n;
                return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t)
            }
            ))
        },
        onReset: function(t) {
            var n;
            null === (n = e.onReset) || void 0 === n || n.call(e, t),
            o.forEach((function(e) {
                var n;
                return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t)
            }
            ))
        },
        getSources: function(n) {
            return Promise.all([].concat(function(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return Gt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Gt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gt(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }(o.map((function(e) {
                return e.getSources
            }
            ))), [e.getSources]).filter(Boolean).map((function(e) {
                return t = e,
                r = n,
                o = [],
                Promise.resolve(t(r)).then((function(e) {
                    return Promise.all(e.filter((function(e) {
                        return Boolean(e)
                    }
                    )).map((function(e) {
                        if (e.sourceId,
                        o.includes(e.sourceId))
                            throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                        o.push(e.sourceId);
                        var t = {
                            getItemInputValue: function(e) {
                                return e.state.query
                            },
                            getItemUrl: function() {},
                            onSelect: function(e) {
                                (0,
                                e.setIsOpen)(!1)
                            },
                            onActive: ct,
                            onResolve: ct
                        };
                        Object.keys(t).forEach((function(e) {
                            t[e].__default = !0
                        }
                        ));
                        var n = Mt(Mt({}, t), e);
                        return Promise.resolve(n)
                    }
                    )))
                }
                ));
                var t, r, o
            }
            ))).then((function(e) {
                return tt(e)
            }
            )).then((function(e) {
                return e.map((function(e) {
                    return Xt(Xt({}, e), {}, {
                        onSelect: function(n) {
                            e.onSelect(n),
                            t.forEach((function(e) {
                                var t;
                                return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n)
                            }
                            ))
                        },
                        onActive: function(n) {
                            e.onActive(n),
                            t.forEach((function(e) {
                                var t;
                                return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n)
                            }
                            ))
                        },
                        onResolve: function(n) {
                            e.onResolve(n),
                            t.forEach((function(e) {
                                var t;
                                return null === (t = e.onResolve) || void 0 === t ? void 0 : t.call(e, n)
                            }
                            ))
                        }
                    })
                }
                ))
            }
            ))
        },
        navigator: Xt({
            navigate: function(e) {
                var t = e.itemUrl;
                r.location.assign(t)
            },
            navigateNewTab: function(e) {
                var t = e.itemUrl
                  , n = r.open(t, "_blank", "noopener");
                null == n || n.focus()
            },
            navigateNewWindow: function(e) {
                var t = e.itemUrl;
                r.open(t, "_blank", "noopener")
            }
        }, e.navigator)
    })
}
function nn(e) {
    return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function rn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function on(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? rn(Object(n), !0).forEach((function(t) {
            cn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function cn(e, t, n) {
    return r = function(e, t) {
        if ("object" !== nn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== nn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === nn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function an(e) {
    return (an = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function un(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function ln(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? un(Object(n), !0).forEach((function(t) {
            sn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function sn(e, t, n) {
    return r = function(e, t) {
        if ("object" !== an(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== an(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === an(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function fn(e) {
    return function(e) {
        if (Array.isArray(e))
            return pn(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return pn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pn(e, t) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function pn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function mn(e) {
    return Boolean(e.execute)
}
function vn(e) {
    var t = e.reduce((function(e, t) {
        if (!mn(t))
            return e.push(t),
            e;
        var n = t.searchClient
          , r = t.execute
          , o = t.requesterId
          , i = t.requests
          , c = e.find((function(e) {
            return mn(t) && mn(e) && e.searchClient === n && Boolean(o) && e.requesterId === o
        }
        ));
        if (c) {
            var a;
            (a = c.items).push.apply(a, fn(i))
        } else {
            var u = {
                execute: r,
                requesterId: o,
                items: i,
                searchClient: n
            };
            e.push(u)
        }
        return e
    }
    ), []).map((function(e) {
        if (!mn(e))
            return Promise.resolve(e);
        var t = e
          , n = t.execute
          , r = t.items;
        return n({
            searchClient: t.searchClient,
            requests: r
        })
    }
    ));
    return Promise.all(t).then((function(e) {
        return tt(e)
    }
    ))
}
function dn(e) {
    return (dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var hn = ["event", "nextState", "props", "query", "refresh", "store"];
function yn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function bn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? yn(Object(n), !0).forEach((function(t) {
            _n(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function _n(e, t, n) {
    return r = function(e, t) {
        if ("object" !== dn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== dn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === dn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
var gn, On, Sn, wn = null, jn = (gn = -1,
On = -1,
Sn = void 0,
function(e) {
    var t = ++gn;
    return Promise.resolve(e).then((function(e) {
        return Sn && t < On ? Sn : (On = t,
        Sn = e,
        e)
    }
    ))
}
);
function En(e) {
    var t = e.event
      , n = e.nextState
      , r = void 0 === n ? {} : n
      , o = e.props
      , i = e.query
      , c = e.refresh
      , a = e.store
      , u = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, hn);
    wn && o.environment.clearTimeout(wn);
    var l = u.setCollections
      , s = u.setIsOpen
      , f = u.setQuery
      , p = u.setActiveItemId
      , m = u.setStatus;
    if (f(i),
    p(o.defaultActiveItemId),
    !i && !1 === o.openOnFocus) {
        var v, d = a.getState().collections.map((function(e) {
            return bn(bn({}, e), {}, {
                items: []
            })
        }
        ));
        m("idle"),
        l(d),
        s(null !== (v = r.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({
            state: a.getState()
        }));
        var h = Tt(jn(d).then((function() {
            return Promise.resolve()
        }
        )));
        return a.pendingRequests.add(h)
    }
    m("loading"),
    wn = o.environment.setTimeout((function() {
        m("stalled")
    }
    ), o.stallThreshold);
    var y = Tt(jn(o.getSources(bn({
        query: i,
        refresh: c,
        state: a.getState()
    }, u)).then((function(e) {
        return Promise.all(e.map((function(e) {
            return Promise.resolve(e.getItems(bn({
                query: i,
                refresh: c,
                state: a.getState()
            }, u))).then((function(t) {
                return function(e, t, n) {
                    if (o = e,
                    Boolean(null == o ? void 0 : o.execute)) {
                        var r = "algolia" === e.requesterId ? Object.assign.apply(Object, [{}].concat(fn(Object.keys(n.context).map((function(e) {
                            var t;
                            return null === (t = n.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters
                        }
                        ))))) : {};
                        return ln(ln({}, e), {}, {
                            requests: e.queries.map((function(n) {
                                return {
                                    query: "algolia" === e.requesterId ? ln(ln({}, n), {}, {
                                        params: ln(ln({}, r), n.params)
                                    }) : n,
                                    sourceId: t,
                                    transformResponse: e.transformResponse
                                }
                            }
                            ))
                        })
                    }
                    var o;
                    return {
                        items: e,
                        sourceId: t
                    }
                }(t, e.sourceId, a.getState())
            }
            ))
        }
        ))).then(vn).then((function(t) {
            return function(e, t, n) {
                return t.map((function(t) {
                    var r, o = e.filter((function(e) {
                        return e.sourceId === t.sourceId
                    }
                    )), i = o.map((function(e) {
                        return e.items
                    }
                    )), c = o[0].transformResponse, a = c ? c({
                        results: r = i,
                        hits: r.map((function(e) {
                            return e.hits
                        }
                        )).filter(Boolean),
                        facetHits: r.map((function(e) {
                            var t;
                            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map((function(e) {
                                return {
                                    label: e.value,
                                    count: e.count,
                                    _highlightResult: {
                                        label: {
                                            value: e.highlighted
                                        }
                                    }
                                }
                            }
                            ))
                        }
                        )).filter(Boolean)
                    }) : i;
                    return t.onResolve({
                        source: t,
                        results: i,
                        items: a,
                        state: n.getState()
                    }),
                    a.every(Boolean),
                    'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),
                    {
                        source: t,
                        items: a
                    }
                }
                ))
            }(t, e, a)
        }
        )).then((function(e) {
            return t = {
                collections: e,
                props: o,
                state: a.getState()
            },
            n = t.props,
            r = t.state,
            i = t.collections.reduce((function(e, t) {
                return on(on({}, e), {}, cn({}, t.source.sourceId, on(on({}, t.source), {}, {
                    getItems: function() {
                        return tt(t.items)
                    }
                })))
            }
            ), {}),
            c = n.plugins.reduce((function(e, t) {
                return t.reshape ? t.reshape(e) : e
            }
            ), {
                sourcesBySourceId: i,
                state: r
            }).sourcesBySourceId,
            tt(n.reshape({
                sourcesBySourceId: c,
                sources: Object.values(c),
                state: r
            })).filter(Boolean).map((function(e) {
                return {
                    source: e,
                    items: e.getItems()
                }
            }
            ));
            var t, n, r, i, c
        }
        ))
    }
    )))).then((function(e) {
        var n;
        m("idle"),
        l(e);
        var f = o.shouldPanelOpen({
            state: a.getState()
        });
        s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && f || f);
        var p = Ft(a.getState());
        if (null !== a.getState().activeItemId && p) {
            var v = p.item
              , d = p.itemInputValue
              , h = p.itemUrl
              , y = p.source;
            y.onActive(bn({
                event: t,
                item: v,
                itemInputValue: d,
                itemUrl: h,
                refresh: c,
                source: y,
                state: a.getState()
            }, u))
        }
    }
    )).finally((function() {
        m("idle"),
        wn && o.environment.clearTimeout(wn)
    }
    ));
    return a.pendingRequests.add(y)
}
function Pn(e) {
    return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var In = ["event", "props", "refresh", "store"];
function kn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Dn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? kn(Object(n), !0).forEach((function(t) {
            An(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function An(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Pn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Pn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Pn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function Cn(e) {
    return (Cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var xn = ["props", "refresh", "store"]
  , Nn = ["inputElement", "formElement", "panelElement"]
  , Tn = ["inputElement"]
  , Rn = ["inputElement", "maxLength"]
  , qn = ["sourceIndex"]
  , Ln = ["sourceIndex"]
  , Mn = ["item", "source", "sourceIndex"];
function Un(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Hn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Un(Object(n), !0).forEach((function(t) {
            Fn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Fn(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Cn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Cn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Cn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function Bn(e, t) {
    if (null == e)
        return {};
    var n, r, o = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = {}, i = Object.keys(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}
function Vn(e) {
    var t = e.props
      , n = e.refresh
      , r = e.store
      , o = Bn(e, xn)
      , i = function(e, t) {
        return void 0 !== t ? "".concat(e, "-").concat(t) : e
    };
    return {
        getEnvironmentProps: function(e) {
            var n = e.inputElement
              , o = e.formElement
              , i = e.panelElement;
            function c(e) {
                !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [o, i].some((function(t) {
                    return (n = t) === (r = e.target) || n.contains(r);
                    var n, r
                }
                )) && (r.dispatch("blur", null),
                t.debug || r.pendingRequests.cancelAll())
            }
            return Hn({
                onTouchStart: c,
                onMouseDown: c,
                onTouchMove: function(e) {
                    !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur()
                }
            }, Bn(e, Nn))
        },
        getRootProps: function(e) {
            return Hn({
                role: "combobox",
                "aria-expanded": r.getState().isOpen,
                "aria-haspopup": "listbox",
                "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                "aria-labelledby": "".concat(t.id, "-label")
            }, e)
        },
        getFormProps: function(e) {
            return e.inputElement,
            Hn({
                action: "",
                noValidate: !0,
                role: "search",
                onSubmit: function(i) {
                    var c;
                    i.preventDefault(),
                    t.onSubmit(Hn({
                        event: i,
                        refresh: n,
                        state: r.getState()
                    }, o)),
                    r.dispatch("submit", null),
                    null === (c = e.inputElement) || void 0 === c || c.blur()
                },
                onReset: function(i) {
                    var c;
                    i.preventDefault(),
                    t.onReset(Hn({
                        event: i,
                        refresh: n,
                        state: r.getState()
                    }, o)),
                    r.dispatch("reset", null),
                    null === (c = e.inputElement) || void 0 === c || c.focus()
                }
            }, Bn(e, Tn))
        },
        getLabelProps: function(e) {
            var n = e || {}
              , r = n.sourceIndex
              , o = Bn(n, qn);
            return Hn({
                htmlFor: "".concat(i(t.id, r), "-input"),
                id: "".concat(i(t.id, r), "-label")
            }, o)
        },
        getInputProps: function(e) {
            var i;
            function c(e) {
                (t.openOnFocus || Boolean(r.getState().query)) && En(Hn({
                    event: e,
                    props: t,
                    query: r.getState().completion || r.getState().query,
                    refresh: n,
                    store: r
                }, o)),
                r.dispatch("focus", null)
            }
            var a, u = e || {}, l = (u.inputElement,
            u.maxLength), s = void 0 === l ? 512 : l, f = Bn(u, Rn), p = Ft(r.getState()), m = (a = (null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent) || "",
            Boolean(a && a.match(Bt))), v = null != p && p.itemUrl && !m ? "go" : "search";
            return Hn({
                "aria-autocomplete": "both",
                "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
                "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                "aria-labelledby": "".concat(t.id, "-label"),
                value: r.getState().completion || r.getState().query,
                id: "".concat(t.id, "-input"),
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                enterKeyHint: v,
                spellCheck: "false",
                autoFocus: t.autoFocus,
                placeholder: t.placeholder,
                maxLength: s,
                type: "search",
                onChange: function(e) {
                    En(Hn({
                        event: e,
                        props: t,
                        query: e.currentTarget.value.slice(0, s),
                        refresh: n,
                        store: r
                    }, o))
                },
                onKeyDown: function(e) {
                    !function(e) {
                        var t = e.event
                          , n = e.props
                          , r = e.refresh
                          , o = e.store
                          , i = function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var n, r, o = {}, i = Object.keys(e);
                                for (r = 0; r < i.length; r++)
                                    n = i[r],
                                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++)
                                    n = i[r],
                                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, In);
                        if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                            var c = function() {
                                var e = n.environment.document.getElementById("".concat(n.id, "-item-").concat(o.getState().activeItemId));
                                e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1))
                            }
                              , a = function() {
                                var e = Ft(o.getState());
                                if (null !== o.getState().activeItemId && e) {
                                    var n = e.item
                                      , c = e.itemInputValue
                                      , a = e.itemUrl
                                      , u = e.source;
                                    u.onActive(Dn({
                                        event: t,
                                        item: n,
                                        itemInputValue: c,
                                        itemUrl: a,
                                        refresh: r,
                                        source: u,
                                        state: o.getState()
                                    }, i))
                                }
                            };
                            t.preventDefault(),
                            !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? En(Dn({
                                event: t,
                                props: n,
                                query: o.getState().query,
                                refresh: r,
                                store: o
                            }, i)).then((function() {
                                o.dispatch(t.key, {
                                    nextActiveItemId: n.defaultActiveItemId
                                }),
                                a(),
                                setTimeout(c, 0)
                            }
                            )) : (o.dispatch(t.key, {}),
                            a(),
                            c())
                        } else if ("Escape" === t.key)
                            t.preventDefault(),
                            o.dispatch(t.key, null),
                            o.pendingRequests.cancelAll();
                        else if ("Tab" === t.key)
                            o.dispatch("blur", null),
                            o.pendingRequests.cancelAll();
                        else if ("Enter" === t.key) {
                            if (null === o.getState().activeItemId || o.getState().collections.every((function(e) {
                                return 0 === e.items.length
                            }
                            )))
                                return void (n.debug || o.pendingRequests.cancelAll());
                            t.preventDefault();
                            var u = Ft(o.getState())
                              , l = u.item
                              , s = u.itemInputValue
                              , f = u.itemUrl
                              , p = u.source;
                            if (t.metaKey || t.ctrlKey)
                                void 0 !== f && (p.onSelect(Dn({
                                    event: t,
                                    item: l,
                                    itemInputValue: s,
                                    itemUrl: f,
                                    refresh: r,
                                    source: p,
                                    state: o.getState()
                                }, i)),
                                n.navigator.navigateNewTab({
                                    itemUrl: f,
                                    item: l,
                                    state: o.getState()
                                }));
                            else if (t.shiftKey)
                                void 0 !== f && (p.onSelect(Dn({
                                    event: t,
                                    item: l,
                                    itemInputValue: s,
                                    itemUrl: f,
                                    refresh: r,
                                    source: p,
                                    state: o.getState()
                                }, i)),
                                n.navigator.navigateNewWindow({
                                    itemUrl: f,
                                    item: l,
                                    state: o.getState()
                                }));
                            else if (t.altKey)
                                ;
                            else {
                                if (void 0 !== f)
                                    return p.onSelect(Dn({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: o.getState()
                                    }, i)),
                                    void n.navigator.navigate({
                                        itemUrl: f,
                                        item: l,
                                        state: o.getState()
                                    });
                                En(Dn({
                                    event: t,
                                    nextState: {
                                        isOpen: !1
                                    },
                                    props: n,
                                    query: s,
                                    refresh: r,
                                    store: o
                                }, i)).then((function() {
                                    p.onSelect(Dn({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: o.getState()
                                    }, i))
                                }
                                ))
                            }
                        }
                    }(Hn({
                        event: e,
                        props: t,
                        refresh: n,
                        store: r
                    }, o))
                },
                onFocus: c,
                onBlur: ct,
                onClick: function(n) {
                    e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || c(n)
                }
            }, f)
        },
        getPanelProps: function(e) {
            return Hn({
                onMouseDown: function(e) {
                    e.preventDefault()
                },
                onMouseLeave: function() {
                    r.dispatch("mouseleave", null)
                }
            }, e)
        },
        getListProps: function(e) {
            var n = e || {}
              , r = n.sourceIndex
              , o = Bn(n, Ln);
            return Hn({
                role: "listbox",
                "aria-labelledby": "".concat(i(t.id, r), "-label"),
                id: "".concat(i(t.id, r), "-list")
            }, o)
        },
        getItemProps: function(e) {
            var c = e.item
              , a = e.source
              , u = e.sourceIndex
              , l = Bn(e, Mn);
            return Hn({
                id: "".concat(i(t.id, u), "-item-").concat(c.__autocomplete_id),
                role: "option",
                "aria-selected": r.getState().activeItemId === c.__autocomplete_id,
                onMouseMove: function(e) {
                    if (c.__autocomplete_id !== r.getState().activeItemId) {
                        r.dispatch("mousemove", c.__autocomplete_id);
                        var t = Ft(r.getState());
                        if (null !== r.getState().activeItemId && t) {
                            var i = t.item
                              , a = t.itemInputValue
                              , u = t.itemUrl
                              , l = t.source;
                            l.onActive(Hn({
                                event: e,
                                item: i,
                                itemInputValue: a,
                                itemUrl: u,
                                refresh: n,
                                source: l,
                                state: r.getState()
                            }, o))
                        }
                    }
                },
                onMouseDown: function(e) {
                    e.preventDefault()
                },
                onClick: function(e) {
                    var i = a.getItemInputValue({
                        item: c,
                        state: r.getState()
                    })
                      , u = a.getItemUrl({
                        item: c,
                        state: r.getState()
                    });
                    (u ? Promise.resolve() : En(Hn({
                        event: e,
                        nextState: {
                            isOpen: !1
                        },
                        props: t,
                        query: i,
                        refresh: n,
                        store: r
                    }, o))).then((function() {
                        a.onSelect(Hn({
                            event: e,
                            item: c,
                            itemInputValue: i,
                            itemUrl: u,
                            refresh: n,
                            source: a,
                            state: r.getState()
                        }, o))
                    }
                    ))
                }
            }, l)
        }
    }
}
function Kn(e) {
    return (Kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Wn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function zn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Wn(Object(n), !0).forEach((function(t) {
            Jn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Jn(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Kn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Kn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Kn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function $n(e) {
    var t, n, r, o, i = e.plugins, c = e.options, a = null === (t = ((null === (n = c.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment, u = a ? Jn({}, a, Object.keys((null === (r = c.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
    return {
        plugins: i.map((function(e) {
            return {
                name: e.name,
                options: Object.keys(e.__autocomplete_pluginOptions || [])
            }
        }
        )),
        options: zn({
            "autocomplete-core": Object.keys(c)
        }, u),
        ua: at.concat((null === (o = c.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
    }
}
function Zn(e) {
    var t, n = e.state;
    return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = Ft(n)) || void 0 === t ? void 0 : t.itemInputValue) || null
}
function Qn(e) {
    return (Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Gn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Yn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Gn(Object(n), !0).forEach((function(t) {
            Xn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Xn(e, t, n) {
    return r = function(e, t) {
        if ("object" !== Qn(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== Qn(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === Qn(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
var er = function(e, t) {
    switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
        return Yn(Yn({}, e), {}, {
            activeItemId: t.payload
        });
    case "setQuery":
        return Yn(Yn({}, e), {}, {
            query: t.payload,
            completion: null
        });
    case "setCollections":
        return Yn(Yn({}, e), {}, {
            collections: t.payload
        });
    case "setIsOpen":
        return Yn(Yn({}, e), {}, {
            isOpen: t.payload
        });
    case "setStatus":
        return Yn(Yn({}, e), {}, {
            status: t.payload
        });
    case "setContext":
        return Yn(Yn({}, e), {}, {
            context: Yn(Yn({}, e.context), t.payload)
        });
    case "ArrowDown":
        var n = Yn(Yn({}, e), {}, {
            activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : qt(1, e.activeItemId, rt(e), t.props.defaultActiveItemId)
        });
        return Yn(Yn({}, n), {}, {
            completion: Zn({
                state: n
            })
        });
    case "ArrowUp":
        var r = Yn(Yn({}, e), {}, {
            activeItemId: qt(-1, e.activeItemId, rt(e), t.props.defaultActiveItemId)
        });
        return Yn(Yn({}, r), {}, {
            completion: Zn({
                state: r
            })
        });
    case "Escape":
        return e.isOpen ? Yn(Yn({}, e), {}, {
            activeItemId: null,
            isOpen: !1,
            completion: null
        }) : Yn(Yn({}, e), {}, {
            activeItemId: null,
            query: "",
            status: "idle",
            collections: []
        });
    case "submit":
        return Yn(Yn({}, e), {}, {
            activeItemId: null,
            isOpen: !1,
            status: "idle"
        });
    case "reset":
        return Yn(Yn({}, e), {}, {
            activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
            status: "idle",
            query: ""
        });
    case "focus":
        return Yn(Yn({}, e), {}, {
            activeItemId: t.props.defaultActiveItemId,
            isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                state: e
            })
        });
    case "blur":
        return t.props.debug ? e : Yn(Yn({}, e), {}, {
            isOpen: !1,
            activeItemId: null
        });
    case "mouseleave":
        return Yn(Yn({}, e), {}, {
            activeItemId: t.props.defaultActiveItemId
        });
    default:
        return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."),
        e
    }
};
function tr(e) {
    return (tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function nr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function rr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? nr(Object(n), !0).forEach((function(t) {
            or(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function or(e, t, n) {
    return r = function(e, t) {
        if ("object" !== tr(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== tr(r))
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(t, "string"),
    (t = "symbol" === tr(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e;
    var r
}
function ir(e) {
    var t, n = [], r = tn(e, n), o = function(e, t, n) {
        var r, o = t.initialState;
        return {
            getState: function() {
                return o
            },
            dispatch: function(r, i) {
                var c = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Kt(Object(n), !0).forEach((function(t) {
                            Wt(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, o);
                o = e(o, {
                    type: r,
                    props: t,
                    payload: i
                }),
                n({
                    state: o,
                    prevState: c
                })
            },
            pendingRequests: (r = [],
            {
                add: function(e) {
                    return r.push(e),
                    e.finally((function() {
                        r = r.filter((function(t) {
                            return t !== e
                        }
                        ))
                    }
                    ))
                },
                cancelAll: function() {
                    r.forEach((function(e) {
                        return e.cancel()
                    }
                    ))
                },
                isEmpty: function() {
                    return 0 === r.length
                }
            })
        }
    }(er, r, (function(e) {
        var t = e.prevState
          , n = e.state;
        r.onStateChange(rr({
            prevState: t,
            state: n,
            refresh: a,
            navigator: r.navigator
        }, i))
    }
    )), i = (t = {
        store: o
    }.store,
    {
        setActiveItemId: function(e) {
            t.dispatch("setActiveItemId", e)
        },
        setQuery: function(e) {
            t.dispatch("setQuery", e)
        },
        setCollections: function(e) {
            var n = 0
              , r = e.map((function(e) {
                return $t($t({}, e), {}, {
                    items: tt(e.items).map((function(e) {
                        return $t($t({}, e), {}, {
                            __autocomplete_id: n++
                        })
                    }
                    ))
                })
            }
            ));
            t.dispatch("setCollections", r)
        },
        setIsOpen: function(e) {
            t.dispatch("setIsOpen", e)
        },
        setStatus: function(e) {
            t.dispatch("setStatus", e)
        },
        setContext: function(e) {
            t.dispatch("setContext", e)
        }
    }), c = Vn(rr({
        props: r,
        refresh: a,
        store: o,
        navigator: r.navigator
    }, i));
    function a() {
        return En(rr({
            event: new Event("input"),
            nextState: {
                isOpen: o.getState().isOpen
            },
            props: r,
            navigator: r.navigator,
            query: o.getState().query,
            refresh: a,
            store: o
        }, i))
    }
    if (e.insights && !r.plugins.some((function(e) {
        return "aa.algoliaInsightsPlugin" === e.name
    }
    ))) {
        var u = "boolean" == typeof e.insights ? {} : e.insights;
        r.plugins.push(xt(u))
    }
    return r.plugins.forEach((function(e) {
        var t;
        return null === (t = e.subscribe) || void 0 === t ? void 0 : t.call(e, rr(rr({}, i), {}, {
            navigator: r.navigator,
            refresh: a,
            onSelect: function(e) {
                n.push({
                    onSelect: e
                })
            },
            onActive: function(e) {
                n.push({
                    onActive: e
                })
            },
            onResolve: function(e) {
                n.push({
                    onResolve: e
                })
            }
        }))
    }
    )),
    function(e) {
        var t, n, r = e.metadata, o = e.environment;
        if (null === (t = o.navigator) || void 0 === t || null === (n = t.userAgent) || void 0 === n ? void 0 : n.includes("Algolia Crawler")) {
            var i = o.document.createElement("meta")
              , c = o.document.querySelector("head");
            i.name = "algolia:metadata",
            setTimeout((function() {
                i.content = JSON.stringify(r),
                c.appendChild(i)
            }
            ), 0)
        }
    }({
        metadata: $n({
            plugins: r.plugins,
            options: e
        }),
        environment: r.environment
    }),
    rr(rr({
        refresh: a,
        navigator: r.navigator
    }, c), i)
}
function cr(e) {
    var t = e.translations
      , n = (void 0 === t ? {} : t).searchByText
      , r = void 0 === n ? "Search by" : n;
    return Je.createElement("a", {
        href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),
        target: "_blank",
        rel: "noopener noreferrer"
    }, Je.createElement("span", {
        className: "DocSearch-Label"
    }, r), Je.createElement("svg", {
        width: "77",
        height: "19",
        "aria-label": "Algolia",
        role: "img",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 2196.2 500"
    }, Je.createElement("defs", null, Je.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Je.createElement("path", {
        className: "cls-2",
        d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
    }), Je.createElement("rect", {
        className: "cls-1",
        x: "1845.88",
        y: "104.73",
        width: "62.58",
        height: "277.9",
        rx: "5.9",
        ry: "5.9"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
    }), Je.createElement("path", {
        className: "cls-2",
        d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"
    }), Je.createElement("path", {
        className: "cls-1",
        d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"
    })))
}
function ar(e) {
    return Je.createElement("svg", {
        width: "15",
        height: "15",
        "aria-label": e.ariaLabel,
        role: "img"
    }, Je.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.2"
    }, e.children))
}
function ur(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = n.selectText
      , o = void 0 === r ? "to select" : r
      , i = n.selectKeyAriaLabel
      , c = void 0 === i ? "Enter key" : i
      , a = n.navigateText
      , u = void 0 === a ? "to navigate" : a
      , l = n.navigateUpKeyAriaLabel
      , s = void 0 === l ? "Arrow up" : l
      , f = n.navigateDownKeyAriaLabel
      , p = void 0 === f ? "Arrow down" : f
      , m = n.closeText
      , v = void 0 === m ? "to close" : m
      , d = n.closeKeyAriaLabel
      , h = void 0 === d ? "Escape key" : d
      , y = n.searchByText
      , b = void 0 === y ? "Search by" : y;
    return Je.createElement(Je.Fragment, null, Je.createElement("div", {
        className: "DocSearch-Logo"
    }, Je.createElement(cr, {
        translations: {
            searchByText: b
        }
    })), Je.createElement("ul", {
        className: "DocSearch-Commands"
    }, Je.createElement("li", null, Je.createElement("kbd", {
        className: "DocSearch-Commands-Key"
    }, Je.createElement(ar, {
        ariaLabel: c
    }, Je.createElement("path", {
        d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
    }))), Je.createElement("span", {
        className: "DocSearch-Label"
    }, o)), Je.createElement("li", null, Je.createElement("kbd", {
        className: "DocSearch-Commands-Key"
    }, Je.createElement(ar, {
        ariaLabel: p
    }, Je.createElement("path", {
        d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
    }))), Je.createElement("kbd", {
        className: "DocSearch-Commands-Key"
    }, Je.createElement(ar, {
        ariaLabel: s
    }, Je.createElement("path", {
        d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
    }))), Je.createElement("span", {
        className: "DocSearch-Label"
    }, u)), Je.createElement("li", null, Je.createElement("kbd", {
        className: "DocSearch-Commands-Key"
    }, Je.createElement(ar, {
        ariaLabel: h
    }, Je.createElement("path", {
        d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
    }))), Je.createElement("span", {
        className: "DocSearch-Label"
    }, v))))
}
function lr(e) {
    var t = e.hit
      , n = e.children;
    return Je.createElement("a", {
        href: t.url
    }, n)
}
function sr() {
    return Je.createElement("svg", {
        viewBox: "0 0 38 38",
        stroke: "currentColor",
        strokeOpacity: ".5"
    }, Je.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, Je.createElement("g", {
        transform: "translate(1 1)",
        strokeWidth: "2"
    }, Je.createElement("circle", {
        strokeOpacity: ".3",
        cx: "18",
        cy: "18",
        r: "18"
    }), Je.createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18"
    }, Je.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
    })))))
}
function fr() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("g", {
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, Je.createElement("path", {
        d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
    }), Je.createElement("path", {
        d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
    })))
}
function pr() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))
}
function mr() {
    return Je.createElement("svg", {
        className: "DocSearch-Hit-Select-Icon",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("g", {
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, Je.createElement("path", {
        d: "M18 3v4c0 2-2 4-4 4H2"
    }), Je.createElement("path", {
        d: "M8 17l-6-6 6-6"
    })))
}
var vr = function() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinejoin: "round"
    }))
};
function dr(e) {
    switch (e.type) {
    case "lvl1":
        return Je.createElement(vr, null);
    case "content":
        return Je.createElement(yr, null);
    default:
        return Je.createElement(hr, null)
    }
}
function hr() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))
}
function yr() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinejoin: "round"
    }))
}
function br() {
    return Je.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20"
    }, Je.createElement("path", {
        d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
        stroke: "currentColor",
        fill: "none",
        fillRule: "evenodd",
        strokeLinejoin: "round"
    }))
}
function _r() {
    return Je.createElement("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 20 20",
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, Je.createElement("path", {
        d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
    }))
}
function gr() {
    return Je.createElement("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 20 20",
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, Je.createElement("path", {
        d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
    }))
}
function Or(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = n.titleText
      , o = void 0 === r ? "Unable to fetch results" : r
      , i = n.helpText
      , c = void 0 === i ? "You might want to check your network connection." : i;
    return Je.createElement("div", {
        className: "DocSearch-ErrorScreen"
    }, Je.createElement("div", {
        className: "DocSearch-Screen-Icon"
    }, Je.createElement(_r, null)), Je.createElement("p", {
        className: "DocSearch-Title"
    }, o), Je.createElement("p", {
        className: "DocSearch-Help"
    }, c))
}
var Sr = ["translations"];
function wr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function jr(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, Sr)
      , o = n.noResultsText
      , i = void 0 === o ? "No results for" : o
      , c = n.suggestedQueryText
      , a = void 0 === c ? "Try searching for" : c
      , u = n.reportMissingResultsText
      , l = void 0 === u ? "Believe this query should return results?" : u
      , s = n.reportMissingResultsLinkText
      , f = void 0 === s ? "Let us know." : s
      , p = r.state.context.searchSuggestions;
    return Je.createElement("div", {
        className: "DocSearch-NoResults"
    }, Je.createElement("div", {
        className: "DocSearch-Screen-Icon"
    }, Je.createElement(gr, null)), Je.createElement("p", {
        className: "DocSearch-Title"
    }, i, ' "', Je.createElement("strong", null, r.state.query), '"'), p && p.length > 0 && Je.createElement("div", {
        className: "DocSearch-NoResults-Prefill-List"
    }, Je.createElement("p", {
        className: "DocSearch-Help"
    }, a, ":"), Je.createElement("ul", null, p.slice(0, 3).reduce((function(e, t) {
        return [].concat(function(e) {
            return function(e) {
                if (Array.isArray(e))
                    return wr(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return wr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wr(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }(e), [Je.createElement("li", {
            key: t
        }, Je.createElement("button", {
            className: "DocSearch-Prefill",
            key: t,
            type: "button",
            onClick: function() {
                r.setQuery(t.toLowerCase() + " "),
                r.refresh(),
                r.inputRef.current.focus()
            }
        }, t))])
    }
    ), []))), r.getMissingResultsUrl && Je.createElement("p", {
        className: "DocSearch-Help"
    }, "".concat(l, " "), Je.createElement("a", {
        href: r.getMissingResultsUrl({
            query: r.state.query
        }),
        target: "_blank",
        rel: "noopener noreferrer"
    }, f)))
}
var Er = ["hit", "attribute", "tagName"];
function Pr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Ir(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Pr(Object(n), !0).forEach((function(t) {
            kr(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function kr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Dr(e, t) {
    return t.split(".").reduce((function(e, t) {
        return null != e && e[t] ? e[t] : null
    }
    ), e)
}
function Ar(e) {
    var t = e.hit
      , n = e.attribute
      , r = e.tagName;
    return P(void 0 === r ? "span" : r, Ir(Ir({}, function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, Er)), {}, {
        dangerouslySetInnerHTML: {
            __html: Dr(t, "_snippetResult.".concat(n, ".value")) || Dr(t, n)
        }
    }))
}
function Cr(e, t) {
    return function(e) {
        if (Array.isArray(e))
            return e
    }(e) || function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (u) {
                a = !0,
                o = u
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }
    }(e, t) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return xr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xr(e, t) : void 0
        }
    }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function xr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Nr() {
    return Nr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Nr.apply(this, arguments)
}
function Tr(e) {
    return e.collection && 0 !== e.collection.items.length ? Je.createElement("section", {
        className: "DocSearch-Hits"
    }, Je.createElement("div", {
        className: "DocSearch-Hit-source"
    }, e.title), Je.createElement("ul", e.getListProps(), e.collection.items.map((function(t, n) {
        return Je.createElement(Rr, Nr({
            key: [e.title, t.objectID].join(":"),
            item: t,
            index: n
        }, e))
    }
    )))) : null
}
function Rr(e) {
    var t = e.item
      , n = e.index
      , r = e.renderIcon
      , o = e.renderAction
      , i = e.getItemProps
      , c = e.onItemClick
      , a = e.collection
      , u = e.hitComponent
      , l = Cr(Je.useState(!1), 2)
      , s = l[0]
      , f = l[1]
      , p = Cr(Je.useState(!1), 2)
      , m = p[0]
      , v = p[1]
      , d = Je.useRef(null)
      , h = u;
    return Je.createElement("li", Nr({
        className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", m && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
        onTransitionEnd: function() {
            d.current && d.current()
        }
    }, i({
        item: t,
        source: a.source,
        onClick: function(e) {
            c(t, e)
        }
    })), Je.createElement(h, {
        hit: t
    }, Je.createElement("div", {
        className: "DocSearch-Hit-Container"
    }, r({
        item: t,
        index: n
    }), t.hierarchy[t.type] && "lvl1" === t.type && Je.createElement("div", {
        className: "DocSearch-Hit-content-wrapper"
    }, Je.createElement(Ar, {
        className: "DocSearch-Hit-title",
        hit: t,
        attribute: "hierarchy.lvl1"
    }), t.content && Je.createElement(Ar, {
        className: "DocSearch-Hit-path",
        hit: t,
        attribute: "content"
    })), t.hierarchy[t.type] && ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) && Je.createElement("div", {
        className: "DocSearch-Hit-content-wrapper"
    }, Je.createElement(Ar, {
        className: "DocSearch-Hit-title",
        hit: t,
        attribute: "hierarchy.".concat(t.type)
    }), Je.createElement(Ar, {
        className: "DocSearch-Hit-path",
        hit: t,
        attribute: "hierarchy.lvl1"
    })), "content" === t.type && Je.createElement("div", {
        className: "DocSearch-Hit-content-wrapper"
    }, Je.createElement(Ar, {
        className: "DocSearch-Hit-title",
        hit: t,
        attribute: "content"
    }), Je.createElement(Ar, {
        className: "DocSearch-Hit-path",
        hit: t,
        attribute: "hierarchy.lvl1"
    })), o({
        item: t,
        runDeleteTransition: function(e) {
            f(!0),
            d.current = e
        },
        runFavoriteTransition: function(e) {
            v(!0),
            d.current = e
        }
    }))))
}
function qr(e, t, n) {
    return e.reduce((function(e, r) {
        var o = t(r);
        return e.hasOwnProperty(o) || (e[o] = []),
        e[o].length < (n || 5) && e[o].push(r),
        e
    }
    ), {})
}
function Lr(e) {
    return e
}
function Mr(e) {
    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
}
function Ur() {}
var Hr = /(<mark>|<\/mark>)/g
  , Fr = RegExp(Hr.source);
function Br(e) {
    var t, n, r, o, i, c = e;
    if (!c.__docsearch_parent && !e._highlightResult)
        return e.hierarchy.lvl0;
    var a = ((c.__docsearch_parent ? null === (t = c.__docsearch_parent) || void 0 === t || null === (n = t._highlightResult) || void 0 === n || null === (r = n.hierarchy) || void 0 === r ? void 0 : r.lvl0 : null === (o = e._highlightResult) || void 0 === o || null === (i = o.hierarchy) || void 0 === i ? void 0 : i.lvl0) || {}).value;
    return a && Fr.test(a) ? a.replace(Hr, "") : a
}
function Vr() {
    return Vr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Vr.apply(this, arguments)
}
function Kr(e) {
    return Je.createElement("div", {
        className: "DocSearch-Dropdown-Container"
    }, e.state.collections.map((function(t) {
        if (0 === t.items.length)
            return null;
        var n = Br(t.items[0]);
        return Je.createElement(Tr, Vr({}, e, {
            key: t.source.sourceId,
            title: n,
            collection: t,
            renderIcon: function(e) {
                var n, r = e.item, o = e.index;
                return Je.createElement(Je.Fragment, null, r.__docsearch_parent && Je.createElement("svg", {
                    className: "DocSearch-Hit-Tree",
                    viewBox: "0 0 24 54"
                }, Je.createElement("g", {
                    stroke: "currentColor",
                    fill: "none",
                    fillRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, r.__docsearch_parent !== (null === (n = t.items[o + 1]) || void 0 === n ? void 0 : n.__docsearch_parent) ? Je.createElement("path", {
                    d: "M8 6v21M20 27H8.3"
                }) : Je.createElement("path", {
                    d: "M8 6v42M20 27H8.3"
                }))), Je.createElement("div", {
                    className: "DocSearch-Hit-icon"
                }, Je.createElement(dr, {
                    type: r.type
                })))
            },
            renderAction: function() {
                return Je.createElement("div", {
                    className: "DocSearch-Hit-action"
                }, Je.createElement(mr, null))
            }
        }))
    }
    )), e.resultsFooterComponent && Je.createElement("section", {
        className: "DocSearch-HitsFooter"
    }, Je.createElement(e.resultsFooterComponent, {
        state: e.state
    })))
}
var Wr = ["translations"];
function zr() {
    return zr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    zr.apply(this, arguments)
}
function Jr(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, Wr)
      , o = n.recentSearchesTitle
      , i = void 0 === o ? "Recent" : o
      , c = n.noRecentSearchesText
      , a = void 0 === c ? "No recent searches" : c
      , u = n.saveRecentSearchButtonTitle
      , l = void 0 === u ? "Save this search" : u
      , s = n.removeRecentSearchButtonTitle
      , f = void 0 === s ? "Remove this search from history" : s
      , p = n.favoriteSearchesTitle
      , m = void 0 === p ? "Favorite" : p
      , v = n.removeFavoriteSearchButtonTitle
      , d = void 0 === v ? "Remove this search from favorites" : v;
    return "idle" === r.state.status && !1 === r.hasCollections ? r.disableUserPersonalization ? null : Je.createElement("div", {
        className: "DocSearch-StartScreen"
    }, Je.createElement("p", {
        className: "DocSearch-Help"
    }, a)) : !1 === r.hasCollections ? null : Je.createElement("div", {
        className: "DocSearch-Dropdown-Container"
    }, Je.createElement(Tr, zr({}, r, {
        title: i,
        collection: r.state.collections[0],
        renderIcon: function() {
            return Je.createElement("div", {
                className: "DocSearch-Hit-icon"
            }, Je.createElement(fr, null))
        },
        renderAction: function(e) {
            var t = e.item
              , n = e.runFavoriteTransition
              , o = e.runDeleteTransition;
            return Je.createElement(Je.Fragment, null, Je.createElement("div", {
                className: "DocSearch-Hit-action"
            }, Je.createElement("button", {
                className: "DocSearch-Hit-action-button",
                title: l,
                type: "submit",
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    n((function() {
                        r.favoriteSearches.add(t),
                        r.recentSearches.remove(t),
                        r.refresh()
                    }
                    ))
                }
            }, Je.createElement(br, null))), Je.createElement("div", {
                className: "DocSearch-Hit-action"
            }, Je.createElement("button", {
                className: "DocSearch-Hit-action-button",
                title: f,
                type: "submit",
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    o((function() {
                        r.recentSearches.remove(t),
                        r.refresh()
                    }
                    ))
                }
            }, Je.createElement(pr, null))))
        }
    })), Je.createElement(Tr, zr({}, r, {
        title: m,
        collection: r.state.collections[1],
        renderIcon: function() {
            return Je.createElement("div", {
                className: "DocSearch-Hit-icon"
            }, Je.createElement(br, null))
        },
        renderAction: function(e) {
            var t = e.item
              , n = e.runDeleteTransition;
            return Je.createElement("div", {
                className: "DocSearch-Hit-action"
            }, Je.createElement("button", {
                className: "DocSearch-Hit-action-button",
                title: d,
                type: "submit",
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    n((function() {
                        r.favoriteSearches.remove(t),
                        r.refresh()
                    }
                    ))
                }
            }, Je.createElement(pr, null)))
        }
    })))
}
var $r = ["translations"];
function Zr() {
    return Zr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Zr.apply(this, arguments)
}
var Qr = Je.memo((function(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, $r);
    if ("error" === r.state.status)
        return Je.createElement(Or, {
            translations: null == n ? void 0 : n.errorScreen
        });
    var o = r.state.collections.some((function(e) {
        return e.items.length > 0
    }
    ));
    return r.state.query ? !1 === o ? Je.createElement(jr, Zr({}, r, {
        translations: null == n ? void 0 : n.noResultsScreen
    })) : Je.createElement(Kr, r) : Je.createElement(Jr, Zr({}, r, {
        hasCollections: o,
        translations: null == n ? void 0 : n.startScreen
    }))
}
), (function(e, t) {
    return "loading" === t.state.status || "stalled" === t.state.status
}
))
  , Gr = ["translations"];
function Yr() {
    return Yr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Yr.apply(this, arguments)
}
function Xr(e) {
    var t = e.translations
      , n = void 0 === t ? {} : t
      , r = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(e, Gr)
      , o = n.resetButtonTitle
      , i = void 0 === o ? "Clear the query" : o
      , c = n.resetButtonAriaLabel
      , a = void 0 === c ? "Clear the query" : c
      , u = n.cancelButtonText
      , l = void 0 === u ? "Cancel" : u
      , s = n.cancelButtonAriaLabel
      , f = void 0 === s ? "Cancel" : s
      , p = r.getFormProps({
        inputElement: r.inputRef.current
    }).onReset;
    return Je.useEffect((function() {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus()
    }
    ), [r.autoFocus, r.inputRef]),
    Je.useEffect((function() {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select()
    }
    ), [r.isFromSelection, r.inputRef]),
    Je.createElement(Je.Fragment, null, Je.createElement("form", {
        className: "DocSearch-Form",
        onSubmit: function(e) {
            e.preventDefault()
        },
        onReset: p
    }, Je.createElement("label", Yr({
        className: "DocSearch-MagnifierLabel"
    }, r.getLabelProps()), Je.createElement(Ze, null)), Je.createElement("div", {
        className: "DocSearch-LoadingIndicator"
    }, Je.createElement(sr, null)), Je.createElement("input", Yr({
        className: "DocSearch-Input",
        ref: r.inputRef
    }, r.getInputProps({
        inputElement: r.inputRef.current,
        autoFocus: r.autoFocus,
        maxLength: 64
    }))), Je.createElement("button", {
        type: "reset",
        title: i,
        className: "DocSearch-Reset",
        "aria-label": a,
        hidden: !r.state.query
    }, Je.createElement(pr, null))), Je.createElement("button", {
        className: "DocSearch-Cancel",
        type: "reset",
        "aria-label": f,
        onClick: r.onClose
    }, l))
}
var eo = ["_highlightResult", "_snippetResult"];
function to(e) {
    var t = e.key
      , n = e.limit
      , r = void 0 === n ? 5 : n
      , o = function(e) {
        return !1 === function() {
            var e = "__TEST_KEY__";
            try {
                return localStorage.setItem(e, ""),
                localStorage.removeItem(e),
                !0
            } catch (t) {
                return !1
            }
        }() ? {
            setItem: function() {},
            getItem: function() {
                return []
            }
        } : {
            setItem: function(t) {
                return window.localStorage.setItem(e, JSON.stringify(t))
            },
            getItem: function() {
                var t = window.localStorage.getItem(e);
                return t ? JSON.parse(t) : []
            }
        }
    }(t)
      , i = o.getItem().slice(0, r);
    return {
        add: function(e) {
            var t = e
              , n = (t._highlightResult,
            t._snippetResult,
            function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(t, eo))
              , c = i.findIndex((function(e) {
                return e.objectID === n.objectID
            }
            ));
            c > -1 && i.splice(c, 1),
            i.unshift(n),
            i = i.slice(0, r),
            o.setItem(i)
        },
        remove: function(e) {
            i = i.filter((function(t) {
                return t.objectID !== e.objectID
            }
            )),
            o.setItem(i)
        },
        getAll: function() {
            return i
        }
    }
}
var no = ["facetName", "facetQuery"];
function ro(e) {
    var t, n = "algoliasearch-client-js-".concat(e.key), r = function() {
        return void 0 === t && (t = e.localStorage || window.localStorage),
        t
    }, o = function() {
        return JSON.parse(r().getItem(n) || "{}")
    };
    return {
        get: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                    return Promise.resolve()
                }
            };
            return Promise.resolve().then((function() {
                var n = JSON.stringify(e)
                  , r = o()[n];
                return Promise.all([r || t(), void 0 !== r])
            }
            )).then((function(e) {
                var t = p(e, 2)
                  , r = t[0]
                  , o = t[1];
                return Promise.all([r, o || n.miss(r)])
            }
            )).then((function(e) {
                return p(e, 1)[0]
            }
            ))
        },
        set: function(e, t) {
            return Promise.resolve().then((function() {
                var i = o();
                return i[JSON.stringify(e)] = t,
                r().setItem(n, JSON.stringify(i)),
                t
            }
            ))
        },
        delete: function(e) {
            return Promise.resolve().then((function() {
                var t = o();
                delete t[JSON.stringify(e)],
                r().setItem(n, JSON.stringify(t))
            }
            ))
        },
        clear: function() {
            return Promise.resolve().then((function() {
                r().removeItem(n)
            }
            ))
        }
    }
}
function oo(e) {
    var t = m(e.caches)
      , n = t.shift();
    return void 0 === n ? {
        get: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                    return Promise.resolve()
                }
            };
            return t().then((function(e) {
                return Promise.all([e, n.miss(e)])
            }
            )).then((function(e) {
                return p(e, 1)[0]
            }
            ))
        },
        set: function(e, t) {
            return Promise.resolve(t)
        },
        delete: function(e) {
            return Promise.resolve()
        },
        clear: function() {
            return Promise.resolve()
        }
    } : {
        get: function(e, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                    return Promise.resolve()
                }
            };
            return n.get(e, r, o).catch((function() {
                return oo({
                    caches: t
                }).get(e, r, o)
            }
            ))
        },
        set: function(e, r) {
            return n.set(e, r).catch((function() {
                return oo({
                    caches: t
                }).set(e, r)
            }
            ))
        },
        delete: function(e) {
            return n.delete(e).catch((function() {
                return oo({
                    caches: t
                }).delete(e)
            }
            ))
        },
        clear: function() {
            return n.clear().catch((function() {
                return oo({
                    caches: t
                }).clear()
            }
            ))
        }
    }
}
function io() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        serializable: !0
    }
      , t = {};
    return {
        get: function(n, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                    return Promise.resolve()
                }
            }
              , i = JSON.stringify(n);
            if (i in t)
                return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
            var c = r()
              , a = o && o.miss || function() {
                return Promise.resolve()
            }
            ;
            return c.then((function(e) {
                return a(e)
            }
            )).then((function() {
                return c
            }
            ))
        },
        set: function(n, r) {
            return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r,
            Promise.resolve(r)
        },
        delete: function(e) {
            return delete t[JSON.stringify(e)],
            Promise.resolve()
        },
        clear: function() {
            return t = {},
            Promise.resolve()
        }
    }
}
function co(e) {
    for (var t = e.length - 1; t > 0; t--) {
        var n = Math.floor(Math.random() * (t + 1))
          , r = e[t];
        e[t] = e[n],
        e[n] = r
    }
    return e
}
function ao(e, t) {
    return t ? (Object.keys(t).forEach((function(n) {
        e[n] = t[n](e)
    }
    )),
    e) : e
}
function uo(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var o = 0;
    return e.replace(/%s/g, (function() {
        return encodeURIComponent(n[o++])
    }
    ))
}
var lo = 0
  , so = 1;
function fo(e, t) {
    var n = e || {}
      , r = n.data || {};
    return Object.keys(n).forEach((function(e) {
        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
    }
    )),
    {
        data: Object.entries(r).length > 0 ? r : void 0,
        timeout: n.timeout || t,
        headers: n.headers || {},
        queryParameters: n.queryParameters || {},
        cacheable: n.cacheable
    }
}
var po = {
    Read: 1,
    Write: 2,
    Any: 3
};
function mo(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return u(u({}, e), {}, {
        status: t,
        lastUpdate: Date.now()
    })
}
function vo(e) {
    return "string" == typeof e ? {
        protocol: "https",
        url: e,
        accept: po.Any
    } : {
        protocol: e.protocol || "https",
        url: e.url,
        accept: e.accept || po.Any
    }
}
var ho = "POST";
function yo(e, t, n, r) {
    var o, i, c, a = [], l = function(e, t) {
        if ("GET" !== e.method && (void 0 !== e.data || void 0 !== t.data)) {
            var n = Array.isArray(e.data) ? e.data : u(u({}, e.data), t.data);
            return JSON.stringify(n)
        }
    }(n, r), s = (o = r,
    i = u(u({}, e.headers), o.headers),
    c = {},
    Object.keys(i).forEach((function(e) {
        var t = i[e];
        c[e.toLowerCase()] = t
    }
    )),
    c), f = n.method, p = "GET" !== n.method ? {} : u(u({}, n.data), r.data), v = u(u(u({
        "x-algolia-agent": e.userAgent.value
    }, e.queryParameters), p), r.queryParameters), d = 0, h = function t(o, i) {
        var c = o.pop();
        if (void 0 === c)
            throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: Oo(a)
            };
        var u = {
            data: l,
            headers: s,
            method: f,
            url: _o(c, n.path, v),
            connectTimeout: i(d, e.timeouts.connect),
            responseTimeout: i(d, r.timeout)
        }
          , p = function(e) {
            var t = {
                request: u,
                response: e,
                host: c,
                triesLeft: o.length
            };
            return a.push(t),
            t
        }
          , m = {
            onSucess: function(e) {
                return function(e) {
                    try {
                        return JSON.parse(e.content)
                    } catch (t) {
                        throw {
                            name: "DeserializationError",
                            message: t.message,
                            response: e
                        }
                    }
                }(e)
            },
            onRetry: function(n) {
                var r = p(n);
                return n.isTimedOut && d++,
                Promise.all([e.logger.info("Retryable failure", So(r)), e.hostsCache.set(c, mo(c, n.isTimedOut ? 3 : 2))]).then((function() {
                    return t(o, i)
                }
                ))
            },
            onFail: function(e) {
                throw p(e),
                function(e, t) {
                    var n = e.content
                      , r = e.status
                      , o = n;
                    try {
                        o = JSON.parse(n).message
                    } catch (i) {}
                    return {
                        name: "ApiError",
                        message: o,
                        status: r,
                        transporterStackTrace: t
                    }
                }(e, Oo(a))
            }
        };
        return e.requester.send(u).then((function(e) {
            return n = m,
            a = (r = t = e).status,
            r.isTimedOut || (i = (o = r).isTimedOut,
            c = o.status,
            !i && 0 == ~~c) || 2 != ~~(a / 100) && 4 != ~~(a / 100) ? n.onRetry(t) : 2 == ~~(t.status / 100) ? n.onSucess(t) : n.onFail(t);
            var t, n, r, o, i, c, a
        }
        ))
    };
    return function(e, t) {
        return Promise.all(t.map((function(t) {
            return e.get(t, (function() {
                return Promise.resolve(mo(t))
            }
            ))
        }
        ))).then((function(e) {
            var n = e.filter((function(e) {
                return 1 === (t = e).status || Date.now() - t.lastUpdate > 12e4;
                var t
            }
            ))
              , r = e.filter((function(e) {
                return 3 === (t = e).status && Date.now() - t.lastUpdate <= 12e4;
                var t
            }
            ))
              , o = [].concat(m(n), m(r));
            return {
                getTimeout: function(e, t) {
                    return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                },
                statelessHosts: o.length > 0 ? o.map((function(e) {
                    return vo(e)
                }
                )) : t
            }
        }
        ))
    }(e.hostsCache, t).then((function(e) {
        return h(m(e.statelessHosts).reverse(), e.getTimeout)
    }
    ))
}
function bo(e) {
    var t = {
        value: "Algolia for JavaScript (".concat(e, ")"),
        add: function(e) {
            var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
            return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)),
            t
        }
    };
    return t
}
function _o(e, t, n) {
    var r = go(n)
      , o = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
    return r.length && (o += "?".concat(r)),
    o
}
function go(e) {
    return Object.keys(e).map((function(t) {
        return uo("%s=%s", t, (n = e[t],
        "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
        var n
    }
    )).join("&")
}
function Oo(e) {
    return e.map((function(e) {
        return So(e)
    }
    ))
}
function So(e) {
    var t = e.request.headers["x-algolia-api-key"] ? {
        "x-algolia-api-key": "*****"
    } : {};
    return u(u({}, e), {}, {
        request: u(u({}, e.request), {}, {
            headers: u(u({}, e.request.headers), t)
        })
    })
}
var wo = function(e) {
    return function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , r = {
            transporter: e.transporter,
            appId: e.appId,
            indexName: t
        };
        return ao(r, n.methods)
    }
}
  , jo = function(e) {
    return function(t, n) {
        var r = t.map((function(e) {
            return u(u({}, e), {}, {
                params: go(e.params || {})
            })
        }
        ));
        return e.transporter.read({
            method: ho,
            path: "1/indexes/*/queries",
            data: {
                requests: r
            },
            cacheable: !0
        }, n)
    }
}
  , Eo = function(e) {
    return function(t, n) {
        return Promise.all(t.map((function(t) {
            var r = t.params
              , o = r.facetName
              , i = r.facetQuery
              , c = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(r, no);
            return wo(e)(t.indexName, {
                methods: {
                    searchForFacetValues: ko
                }
            }).searchForFacetValues(o, i, u(u({}, n), c))
        }
        )))
    }
}
  , Po = function(e) {
    return function(t, n, r) {
        return e.transporter.read({
            method: ho,
            path: uo("1/answers/%s/prediction", e.indexName),
            data: {
                query: t,
                queryLanguages: n
            },
            cacheable: !0
        }, r)
    }
}
  , Io = function(e) {
    return function(t, n) {
        return e.transporter.read({
            method: ho,
            path: uo("1/indexes/%s/query", e.indexName),
            data: {
                query: t
            },
            cacheable: !0
        }, n)
    }
}
  , ko = function(e) {
    return function(t, n, r) {
        return e.transporter.read({
            method: ho,
            path: uo("1/indexes/%s/facets/%s/query", e.indexName, t),
            data: {
                facetQuery: n
            },
            cacheable: !0
        }, r)
    }
};
function Do(e, t, n) {
    return function(e) {
        var t, n, r, o, i = e.appId, c = (t = void 0 !== e.authMode ? e.authMode : so,
        n = i,
        r = e.apiKey,
        o = {
            "x-algolia-api-key": r,
            "x-algolia-application-id": n
        },
        {
            headers: function() {
                return t === so ? o : {}
            },
            queryParameters: function() {
                return t === lo ? o : {}
            }
        }), a = function(e) {
            var t = e.hostsCache
              , n = e.logger
              , r = e.requester
              , o = e.requestsCache
              , i = e.responsesCache
              , c = e.timeouts
              , a = e.userAgent
              , u = e.hosts
              , l = e.queryParameters
              , s = {
                hostsCache: t,
                logger: n,
                requester: r,
                requestsCache: o,
                responsesCache: i,
                timeouts: c,
                userAgent: a,
                headers: e.headers,
                queryParameters: l,
                hosts: u.map((function(e) {
                    return vo(e)
                }
                )),
                read: function(e, t) {
                    var n = fo(t, s.timeouts.read)
                      , r = function() {
                        return yo(s, s.hosts.filter((function(e) {
                            return 0 != (e.accept & po.Read)
                        }
                        )), e, n)
                    };
                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable))
                        return r();
                    var o = {
                        request: e,
                        mappedRequestOptions: n,
                        transporter: {
                            queryParameters: s.queryParameters,
                            headers: s.headers
                        }
                    };
                    return s.responsesCache.get(o, (function() {
                        return s.requestsCache.get(o, (function() {
                            return s.requestsCache.set(o, r()).then((function(e) {
                                return Promise.all([s.requestsCache.delete(o), e])
                            }
                            ), (function(e) {
                                return Promise.all([s.requestsCache.delete(o), Promise.reject(e)])
                            }
                            )).then((function(e) {
                                var t = p(e, 2);
                                return t[0],
                                t[1]
                            }
                            ))
                        }
                        ))
                    }
                    ), {
                        miss: function(e) {
                            return s.responsesCache.set(o, e)
                        }
                    })
                },
                write: function(e, t) {
                    return yo(s, s.hosts.filter((function(e) {
                        return 0 != (e.accept & po.Write)
                    }
                    )), e, fo(t, s.timeouts.write))
                }
            };
            return s
        }(u(u({
            hosts: [{
                url: "".concat(i, "-dsn.algolia.net"),
                accept: po.Read
            }, {
                url: "".concat(i, ".algolia.net"),
                accept: po.Write
            }].concat(co([{
                url: "".concat(i, "-1.algolianet.com")
            }, {
                url: "".concat(i, "-2.algolianet.com")
            }, {
                url: "".concat(i, "-3.algolianet.com")
            }]))
        }, e), {}, {
            headers: u(u(u({}, c.headers()), {
                "content-type": "application/x-www-form-urlencoded"
            }), e.headers),
            queryParameters: u(u({}, c.queryParameters()), e.queryParameters)
        })), l = {
            transporter: a,
            appId: i,
            addAlgoliaAgent: function(e, t) {
                a.userAgent.add({
                    segment: e,
                    version: t
                })
            },
            clearCache: function() {
                return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then((function() {}
                ))
            }
        };
        return ao(l, e.methods)
    }(u(u(u({}, {
        appId: e,
        apiKey: t,
        timeouts: {
            connect: 1,
            read: 2,
            write: 30
        },
        requester: {
            send: function(e) {
                return new Promise((function(t) {
                    var n = new XMLHttpRequest;
                    n.open(e.method, e.url, !0),
                    Object.keys(e.headers).forEach((function(t) {
                        return n.setRequestHeader(t, e.headers[t])
                    }
                    ));
                    var r, o = function(e, r) {
                        return setTimeout((function() {
                            n.abort(),
                            t({
                                status: 0,
                                content: r,
                                isTimedOut: !0
                            })
                        }
                        ), 1e3 * e)
                    }, i = o(e.connectTimeout, "Connection timeout");
                    n.onreadystatechange = function() {
                        n.readyState > n.OPENED && void 0 === r && (clearTimeout(i),
                        r = o(e.responseTimeout, "Socket timeout"))
                    }
                    ,
                    n.onerror = function() {
                        0 === n.status && (clearTimeout(i),
                        clearTimeout(r),
                        t({
                            content: n.responseText || "Network request failed",
                            status: n.status,
                            isTimedOut: !1
                        }))
                    }
                    ,
                    n.onload = function() {
                        clearTimeout(i),
                        clearTimeout(r),
                        t({
                            content: n.responseText,
                            status: n.status,
                            isTimedOut: !1
                        })
                    }
                    ,
                    n.send(e.data)
                }
                ))
            }
        },
        logger: (3,
        {
            debug: function(e, t) {
                return Promise.resolve()
            },
            info: function(e, t) {
                return Promise.resolve()
            },
            error: function(e, t) {
                return console.error(e, t),
                Promise.resolve()
            }
        }),
        responsesCache: io(),
        requestsCache: io({
            serializable: !1
        }),
        hostsCache: oo({
            caches: [ro({
                key: "".concat("4.8.5", "-").concat(e)
            }), io()]
        }),
        userAgent: bo("4.8.5").add({
            segment: "Browser",
            version: "lite"
        }),
        authMode: lo
    }), n), {}, {
        methods: {
            search: jo,
            searchForFacetValues: Eo,
            multipleQueries: jo,
            multipleSearchForFacetValues: Eo,
            initIndex: function(e) {
                return function(t) {
                    return wo(e)(t, {
                        methods: {
                            search: Io,
                            searchForFacetValues: ko,
                            findAnswers: Po
                        }
                    })
                }
            }
        }
    }))
}
Do.version = "4.8.5";
var Ao = ["footer", "searchBox"];
function Co() {
    return Co = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Co.apply(this, arguments)
}
function xo(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function No(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? xo(Object(n), !0).forEach((function(t) {
            To(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xo(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function To(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ro(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function qo(e) {
    var t, n, r, o = e.appId, i = e.apiKey, c = e.indexName, a = e.placeholder, u = void 0 === a ? "Search docs" : a, l = e.searchParameters, s = e.maxResultsPerGroup, f = e.onClose, p = void 0 === f ? Ur : f, m = e.transformItems, v = void 0 === m ? Lr : m, d = e.hitComponent, h = void 0 === d ? lr : d, y = e.resultsFooterComponent, b = void 0 === y ? function() {
        return null
    }
    : y, _ = e.navigator, g = e.initialScrollY, O = void 0 === g ? 0 : g, S = e.transformSearchClient, w = void 0 === S ? Lr : S, j = e.disableUserPersonalization, E = void 0 !== j && j, P = e.initialQuery, I = void 0 === P ? "" : P, k = e.translations, D = void 0 === k ? {} : k, A = e.getMissingResultsUrl, C = e.insights, x = void 0 !== C && C, N = D.footer, T = D.searchBox, R = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }(D, Ao), q = function(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                    !t || i.length !== t); c = !0)
                        ;
                } catch (u) {
                    a = !0,
                    o = u
                } finally {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Ro(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ro(e, t) : void 0
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(Je.useState({
        query: "",
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: "idle"
    }), 2), L = q[0], M = q[1], U = Je.useRef(null), H = Je.useRef(null), F = Je.useRef(null), B = Je.useRef(null), V = Je.useRef(null), K = Je.useRef(10), W = Je.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, z = Je.useRef(I || W).current, J = (t = o,
    n = i,
    r = w,
    Je.useMemo((function() {
        var e = Do(t, n);
        return e.addAlgoliaAgent("docsearch", "3.5.1"),
        !1 === /docsearch.js \(.*\)/.test(e.transporter.userAgent.value) && e.addAlgoliaAgent("docsearch-react", "3.5.1"),
        r(e)
    }
    ), [t, n, r])), $ = Je.useRef(to({
        key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(c),
        limit: 10
    })).current, Z = Je.useRef(to({
        key: "__DOCSEARCH_RECENT_SEARCHES__".concat(c),
        limit: 0 === $.getAll().length ? 7 : 4
    })).current, Q = Je.useCallback((function(e) {
        if (!E) {
            var t = "content" === e.type ? e.__docsearch_parent : e;
            t && -1 === $.getAll().findIndex((function(e) {
                return e.objectID === t.objectID
            }
            )) && Z.add(t)
        }
    }
    ), [$, Z, E]), G = Je.useCallback((function(e) {
        if (L.context.algoliaInsightsPlugin && e.__autocomplete_id) {
            var t = e
              , n = {
                eventName: "Item Selected",
                index: t.__autocomplete_indexName,
                items: [t],
                positions: [e.__autocomplete_id],
                queryID: t.__autocomplete_queryID
            };
            L.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n)
        }
    }
    ), [L.context.algoliaInsightsPlugin]), Y = Je.useMemo((function() {
        return ir({
            id: "docsearch",
            defaultActiveItemId: 0,
            placeholder: u,
            openOnFocus: !0,
            initialState: {
                query: z,
                context: {
                    searchSuggestions: []
                }
            },
            insights: x,
            navigator: _,
            onStateChange: function(e) {
                M(e.state)
            },
            getSources: function(e) {
                var t = e.query
                  , n = e.state
                  , r = e.setContext
                  , a = e.setStatus;
                if (!t)
                    return E ? [] : [{
                        sourceId: "recentSearches",
                        onSelect: function(e) {
                            var t = e.item
                              , n = e.event;
                            Q(t),
                            Mr(n) || p()
                        },
                        getItemUrl: function(e) {
                            return e.item.url
                        },
                        getItems: function() {
                            return Z.getAll()
                        }
                    }, {
                        sourceId: "favoriteSearches",
                        onSelect: function(e) {
                            var t = e.item
                              , n = e.event;
                            Q(t),
                            Mr(n) || p()
                        },
                        getItemUrl: function(e) {
                            return e.item.url
                        },
                        getItems: function() {
                            return $.getAll()
                        }
                    }];
                var u = Boolean(x);
                return J.search([{
                    query: t,
                    indexName: c,
                    params: No({
                        attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
                        attributesToSnippet: ["hierarchy.lvl1:".concat(K.current), "hierarchy.lvl2:".concat(K.current), "hierarchy.lvl3:".concat(K.current), "hierarchy.lvl4:".concat(K.current), "hierarchy.lvl5:".concat(K.current), "hierarchy.lvl6:".concat(K.current), "content:".concat(K.current)],
                        snippetEllipsisText: "…",
                        highlightPreTag: "<mark>",
                        highlightPostTag: "</mark>",
                        hitsPerPage: 20,
                        clickAnalytics: u
                    }, l)
                }]).catch((function(e) {
                    throw "RetryError" === e.name && a("error"),
                    e
                }
                )).then((function(e) {
                    var t = e.results
                      , a = t[0]
                      , l = a.hits
                      , f = a.nbHits
                      , m = qr(l, (function(e) {
                        return Br(e)
                    }
                    ), s);
                    n.context.searchSuggestions.length < Object.keys(m).length && r({
                        searchSuggestions: Object.keys(m)
                    }),
                    r({
                        nbHits: f
                    });
                    var d = {};
                    return u && (d = {
                        __autocomplete_indexName: c,
                        __autocomplete_queryID: t[0].queryID,
                        __autocomplete_algoliaCredentials: {
                            appId: o,
                            apiKey: i
                        }
                    }),
                    Object.values(m).map((function(e, t) {
                        return {
                            sourceId: "hits".concat(t),
                            onSelect: function(e) {
                                var t = e.item
                                  , n = e.event;
                                Q(t),
                                Mr(n) || p()
                            },
                            getItemUrl: function(e) {
                                return e.item.url
                            },
                            getItems: function() {
                                return Object.values(qr(e, (function(e) {
                                    return e.hierarchy.lvl1
                                }
                                ), s)).map(v).map((function(e) {
                                    return e.map((function(t) {
                                        var n = null
                                          , r = e.find((function(e) {
                                            return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1
                                        }
                                        ));
                                        return "lvl1" !== t.type && r && (n = r),
                                        No(No({}, t), {}, {
                                            __docsearch_parent: n
                                        }, d)
                                    }
                                    ))
                                }
                                )).flat()
                            }
                        }
                    }
                    ))
                }
                ))
            }
        })
    }
    ), [c, l, s, J, p, Z, $, Q, z, u, _, v, E, x, o, i]), X = Y.getEnvironmentProps, ee = Y.getRootProps, te = Y.refresh;
    return function(e) {
        var t = e.getEnvironmentProps
          , n = e.panelElement
          , r = e.formElement
          , o = e.inputElement;
        Je.useEffect((function() {
            if (n && r && o) {
                var e = t({
                    panelElement: n,
                    formElement: r,
                    inputElement: o
                })
                  , i = e.onTouchStart
                  , c = e.onTouchMove;
                return window.addEventListener("touchstart", i),
                window.addEventListener("touchmove", c),
                function() {
                    window.removeEventListener("touchstart", i),
                    window.removeEventListener("touchmove", c)
                }
            }
        }
        ), [t, n, r, o])
    }({
        getEnvironmentProps: X,
        panelElement: B.current,
        formElement: F.current,
        inputElement: V.current
    }),
    function(e) {
        var t = e.container;
        Je.useEffect((function() {
            if (t) {
                var e = t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])")
                  , n = e[0]
                  , r = e[e.length - 1];
                return t.addEventListener("keydown", o),
                function() {
                    t.removeEventListener("keydown", o)
                }
            }
            function o(e) {
                "Tab" === e.key && (e.shiftKey ? document.activeElement === n && (e.preventDefault(),
                r.focus()) : document.activeElement === r && (e.preventDefault(),
                n.focus()))
            }
        }
        ), [t])
    }({
        container: U.current
    }),
    Je.useEffect((function() {
        return document.body.classList.add("DocSearch--active"),
        function() {
            var e, t;
            document.body.classList.remove("DocSearch--active"),
            null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, O)
        }
    }
    ), []),
    Je.useEffect((function() {
        window.matchMedia("(max-width: 768px)").matches && (K.current = 5)
    }
    ), []),
    Je.useEffect((function() {
        B.current && (B.current.scrollTop = 0)
    }
    ), [L.query]),
    Je.useEffect((function() {
        z.length > 0 && (te(),
        V.current && V.current.focus())
    }
    ), [z, te]),
    Je.useEffect((function() {
        function e() {
            if (H.current) {
                var e = .01 * window.innerHeight;
                H.current.style.setProperty("--docsearch-vh", "".concat(e, "px"))
            }
        }
        return e(),
        window.addEventListener("resize", e),
        function() {
            window.removeEventListener("resize", e)
        }
    }
    ), []),
    Je.createElement("div", Co({
        ref: U
    }, ee({
        "aria-expanded": !0
    }), {
        className: ["DocSearch", "DocSearch-Container", "stalled" === L.status && "DocSearch-Container--Stalled", "error" === L.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
        role: "button",
        tabIndex: 0,
        onMouseDown: function(e) {
            e.target === e.currentTarget && p()
        }
    }), Je.createElement("div", {
        className: "DocSearch-Modal",
        ref: H
    }, Je.createElement("header", {
        className: "DocSearch-SearchBar",
        ref: F
    }, Je.createElement(Xr, Co({}, Y, {
        state: L,
        autoFocus: 0 === z.length,
        inputRef: V,
        isFromSelection: Boolean(z) && z === W,
        translations: T,
        onClose: p
    }))), Je.createElement("div", {
        className: "DocSearch-Dropdown",
        ref: B
    }, Je.createElement(Qr, Co({}, Y, {
        indexName: c,
        state: L,
        hitComponent: h,
        resultsFooterComponent: b,
        disableUserPersonalization: E,
        recentSearches: Z,
        favoriteSearches: $,
        inputRef: V,
        translations: R,
        getMissingResultsUrl: A,
        onItemClick: function(e, t) {
            G(e),
            Q(e),
            Mr(t) || p()
        }
    }))), Je.createElement("footer", {
        className: "DocSearch-Footer"
    }, Je.createElement(ur, {
        translations: N
    }))))
}
function Lo() {
    return Lo = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Lo.apply(this, arguments)
}
function Mo(e, t) {
    return function(e) {
        if (Array.isArray(e))
            return e
    }(e) || function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (u) {
                a = !0,
                o = u
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }
    }(e, t) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Uo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uo(e, t) : void 0
        }
    }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function Uo(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Ho(e) {
    var t, n, r, o, i, c, a, u, l = Je.useRef(null), s = Mo(Je.useState(!1), 2), f = s[0], p = s[1], m = Mo(Je.useState((null == e ? void 0 : e.initialQuery) || void 0), 2), v = m[0], d = m[1], h = Je.useCallback((function() {
        p(!0)
    }
    ), [p]), y = Je.useCallback((function() {
        p(!1)
    }
    ), [p]);
    return r = {
        isOpen: f,
        onOpen: h,
        onClose: y,
        onInput: Je.useCallback((function(e) {
            p(!0),
            d(e.key)
        }
        ), [p, d]),
        searchButtonRef: l
    },
    o = r.isOpen,
    i = r.onOpen,
    c = r.onClose,
    a = r.onInput,
    u = r.searchButtonRef,
    Je.useEffect((function() {
        function e(e) {
            var t, n, r;
            (27 === e.keyCode && o || "k" === (null === (t = e.key) || void 0 === t ? void 0 : t.toLowerCase()) && (e.metaKey || e.ctrlKey) || (n = e.target,
            r = n.tagName,
            !(n.isContentEditable || "INPUT" === r || "SELECT" === r || "TEXTAREA" === r || "/" !== e.key || o))) && (e.preventDefault(),
            o ? c() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || i()),
            u && u.current === document.activeElement && a && /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) && a(e)
        }
        return window.addEventListener("keydown", e),
        function() {
            window.removeEventListener("keydown", e)
        }
    }
    ), [o, i, c, a, u]),
    Je.createElement(Je.Fragment, null, Je.createElement(Xe, {
        ref: l,
        translations: null == e || null === (t = e.translations) || void 0 === t ? void 0 : t.button,
        onClick: h
    }), f && xe(Je.createElement(qo, Lo({}, e, {
        initialScrollY: window.scrollY,
        initialQuery: v,
        translations: null == e || null === (n = e.translations) || void 0 === n ? void 0 : n.modal,
        onClose: y
    })), document.body))
}
const Fo = {
    id: "docsearch"
}
  , Bo = e({
    __name: "VPAlgoliaSearchBox",
    setup(e) {
        const {config: a} = c()
          , u = t()
          , l = n();
        function s() {
            const e = new Event("keydown");
            e.key = "k",
            e.metaKey = !0,
            window.dispatchEvent(e),
            setTimeout((()=>{
                document.querySelector(".DocSearch-Modal") || s()
            }
            ), 16)
        }
        function p(e) {
            const {pathname: t, hash: n} = new URL(e);
            return t + n
        }
        return r((()=>{
            var e, t;
            e = a.value.algolia,
            t = Object.assign({}, e, {
                container: "#docsearch",
                getMissingResultsUrl: ({query: e})=>`https://github.com/vuejs/docs/issues/new?title=Missing%20search%20result%20for%20${e}`,
                navigator: {
                    navigate: ({itemUrl: e})=>{
                        const {pathname: t} = new URL(window.location.origin + e);
                        u.path === t ? window.location.assign(window.location.origin + e) : l.go(e)
                    }
                },
                transformItems: e=>e.map((e=>Object.assign({}, e, {
                    url: p(e.url)
                }))),
                hitComponent: ({hit: e, children: t})=>{
                    const n = e.url.startsWith("http") ? p(e.url) : e.url;
                    return {
                        type: "a",
                        ref: void 0,
                        constructor: void 0,
                        key: void 0,
                        props: {
                            href: e.url,
                            onClick: e=>{
                                (function(e) {
                                    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
                                }
                                )(e) || u.path !== n && (u.path !== n && e.preventDefault(),
                                l.go(n))
                            }
                            ,
                            children: t
                        },
                        __v: null
                    }
                }
            }),
            qe(Je.createElement(Ho, f({}, t, {
                transformSearchClient: function(e) {
                    return e.addAlgoliaAgent("docsearch.js", "3.5.1"),
                    t.transformSearchClient ? t.transformSearchClient(e) : e
                }
            })), function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                return "string" == typeof e ? t.document.querySelector(e) : e
            }(t.container, t.environment)),
            setTimeout(s, 16)
        }
        )),
        (e,t)=>(o(),
        i("div", Fo))
    }
});
export {Bo as default};
