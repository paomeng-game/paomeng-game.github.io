function e(e, t) {
    const n = Object.create(null)
      , o = e.split(",");
    for (let r = 0; r < o.length; r++)
        n[o[r]] = !0;
    return t ? e=>!!n[e.toLowerCase()] : e=>!!n[e]
}
const t = {}
  , n = []
  , o = ()=>{}
  , r = ()=>!1
  , s = /^on[^a-z]/
  , l = e=>s.test(e)
  , i = e=>e.startsWith("onUpdate:")
  , a = Object.assign
  , c = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , u = Object.prototype.hasOwnProperty
  , f = (e,t)=>u.call(e, t)
  , p = Array.isArray
  , d = e=>"[object Map]" === x(e)
  , h = e=>"[object Set]" === x(e)
  , m = e=>"[object Date]" === x(e)
  , g = e=>"function" == typeof e
  , v = e=>"string" == typeof e
  , y = e=>"symbol" == typeof e
  , _ = e=>null !== e && "object" == typeof e
  , b = e=>(_(e) || g(e)) && g(e.then) && g(e.catch)
  , w = Object.prototype.toString
  , x = e=>w.call(e)
  , C = e=>"[object Object]" === x(e)
  , S = e=>v(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e
  , E = e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , k = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , A = /-(\w)/g
  , T = k((e=>e.replace(A, ((e,t)=>t ? t.toUpperCase() : ""))))
  , F = /\B([A-Z])/g
  , $ = k((e=>e.replace(F, "-$1").toLowerCase()))
  , L = k((e=>e.charAt(0).toUpperCase() + e.slice(1)))
  , O = k((e=>e ? `on${L(e)}` : ""))
  , P = (e,t)=>!Object.is(e, t)
  , R = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , I = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , M = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let N;
const V = e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console");
function j(e) {
    if (p(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , r = v(o) ? W(o) : j(o);
            if (r)
                for (const e in r)
                    t[e] = r[e]
        }
        return t
    }
    if (v(e) || _(e))
        return e
}
const U = /;(?![^(]*\))/g
  , B = /:([^]+)/
  , D = /\/\*[^]*?\*\//g;
function W(e) {
    const t = {};
    return e.replace(D, "").split(U).forEach((e=>{
        if (e) {
            const n = e.split(B);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }
    )),
    t
}
function z(e) {
    let t = "";
    if (v(e))
        t = e;
    else if (p(e))
        for (let n = 0; n < e.length; n++) {
            const o = z(e[n]);
            o && (t += o + " ")
        }
    else if (_(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const H = e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function q(e) {
    return !!e || "" === e
}
function K(e, t) {
    if (e === t)
        return !0;
    let n = m(e)
      , o = m(t);
    if (n || o)
        return !(!n || !o) && e.getTime() === t.getTime();
    if (n = y(e),
    o = y(t),
    n || o)
        return e === t;
    if (n = p(e),
    o = p(t),
    n || o)
        return !(!n || !o) && function(e, t) {
            if (e.length !== t.length)
                return !1;
            let n = !0;
            for (let o = 0; n && o < e.length; o++)
                n = K(e[o], t[o]);
            return n
        }(e, t);
    if (n = _(e),
    o = _(t),
    n || o) {
        if (!n || !o)
            return !1;
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (const n in e) {
            const o = e.hasOwnProperty(n)
              , r = t.hasOwnProperty(n);
            if (o && !r || !o && r || !K(e[n], t[n]))
                return !1
        }
    }
    return String(e) === String(t)
}
function G(e, t) {
    return e.findIndex((e=>K(e, t)))
}
const Y = e=>v(e) ? e : null == e ? "" : p(e) || _(e) && (e.toString === w || !g(e.toString)) ? JSON.stringify(e, J, 2) : String(e)
  , J = (e,t)=>t && t.__v_isRef ? J(e, t.value) : d(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`] = n,
    e)), {})
} : h(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : !_(t) || p(t) || C(t) ? t : String(t);
let X;
class Z {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = X,
        !e && X && (this.index = (X.scopes || (X.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(e) {
        if (this._active) {
            const t = X;
            try {
                return X = this,
                e()
            } finally {
                X = t
            }
        }
    }
    on() {
        X = this
    }
    off() {
        X = this.parent
    }
    stop(e) {
        if (this._active) {
            let t, n;
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].stop();
            for (t = 0,
            n = this.cleanups.length; t < n; t++)
                this.cleanups[t]();
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].stop(!0);
            if (!this.detached && this.parent && !e) {
                const e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e,
                e.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Q() {
    return X
}
function ee(e) {
    X && X.cleanups.push(e)
}
const te = e=>{
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , ne = e=>(e.w & le) > 0
  , oe = e=>(e.n & le) > 0
  , re = new WeakMap;
let se = 0
  , le = 1;
let ie;
const ae = Symbol("")
  , ce = Symbol("");
class ue {
    constructor(e, t=null, n) {
        this.fn = e,
        this.scheduler = t,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        function(e, t=X) {
            t && t.active && t.effects.push(e)
        }(this, n)
    }
    run() {
        if (!this.active)
            return this.fn();
        let e = ie
          , t = pe;
        for (; e; ) {
            if (e === this)
                return;
            e = e.parent
        }
        try {
            return this.parent = ie,
            ie = this,
            pe = !0,
            le = 1 << ++se,
            se <= 30 ? (({deps: e})=>{
                if (e.length)
                    for (let t = 0; t < e.length; t++)
                        e[t].w |= le
            }
            )(this) : fe(this),
            this.fn()
        } finally {
            se <= 30 && (e=>{
                const {deps: t} = e;
                if (t.length) {
                    let n = 0;
                    for (let o = 0; o < t.length; o++) {
                        const r = t[o];
                        ne(r) && !oe(r) ? r.delete(e) : t[n++] = r,
                        r.w &= ~le,
                        r.n &= ~le
                    }
                    t.length = n
                }
            }
            )(this),
            le = 1 << --se,
            ie = this.parent,
            pe = t,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        ie === this ? this.deferStop = !0 : this.active && (fe(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function fe(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let pe = !0;
const de = [];
function he() {
    de.push(pe),
    pe = !1
}
function me() {
    const e = de.pop();
    pe = void 0 === e || e
}
function ge(e, t, n) {
    if (pe && ie) {
        let t = re.get(e);
        t || re.set(e, t = new Map);
        let o = t.get(n);
        o || t.set(n, o = te()),
        ve(o)
    }
}
function ve(e, t) {
    let n = !1;
    se <= 30 ? oe(e) || (e.n |= le,
    n = !ne(e)) : n = !e.has(ie),
    n && (e.add(ie),
    ie.deps.push(e))
}
function ye(e, t, n, o, r, s) {
    const l = re.get(e);
    if (!l)
        return;
    let i = [];
    if ("clear" === t)
        i = [...l.values()];
    else if ("length" === n && p(e)) {
        const e = Number(o);
        l.forEach(((t,n)=>{
            ("length" === n || !y(n) && n >= e) && i.push(t)
        }
        ))
    } else
        switch (void 0 !== n && i.push(l.get(n)),
        t) {
        case "add":
            p(e) ? S(n) && i.push(l.get("length")) : (i.push(l.get(ae)),
            d(e) && i.push(l.get(ce)));
            break;
        case "delete":
            p(e) || (i.push(l.get(ae)),
            d(e) && i.push(l.get(ce)));
            break;
        case "set":
            d(e) && i.push(l.get(ae))
        }
    if (1 === i.length)
        i[0] && _e(i[0]);
    else {
        const e = [];
        for (const t of i)
            t && e.push(...t);
        _e(te(e))
    }
}
function _e(e, t) {
    const n = p(e) ? e : [...e];
    for (const o of n)
        o.computed && be(o);
    for (const o of n)
        o.computed || be(o)
}
function be(e, t) {
    (e !== ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const we = e("__proto__,__v_isRef,__isVue")
  , xe = new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments" !== e && "caller" !== e)).map((e=>Symbol[e])).filter(y))
  , Ce = function() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t=>{
        e[t] = function(...e) {
            const n = at(this);
            for (let t = 0, r = this.length; t < r; t++)
                ge(n, 0, t + "");
            const o = n[t](...e);
            return -1 === o || !1 === o ? n[t](...e.map(at)) : o
        }
    }
    )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t=>{
        e[t] = function(...e) {
            he();
            const n = at(this)[t].apply(this, e);
            return me(),
            n
        }
    }
    )),
    e
}();
function Se(e) {
    const t = at(this);
    return ge(t, 0, e),
    t.hasOwnProperty(e)
}
class Ee {
    constructor(e=!1, t=!1) {
        this._isReadonly = e,
        this._shallow = t
    }
    get(e, t, n) {
        const o = this._isReadonly
          , r = this._shallow;
        if ("__v_isReactive" === t)
            return !o;
        if ("__v_isReadonly" === t)
            return o;
        if ("__v_isShallow" === t)
            return r;
        if ("__v_raw" === t && n === (o ? r ? et : Qe : r ? Ze : Xe).get(e))
            return e;
        const s = p(e);
        if (!o) {
            if (s && f(Ce, t))
                return Reflect.get(Ce, t, n);
            if ("hasOwnProperty" === t)
                return Se
        }
        const l = Reflect.get(e, t, n);
        return (y(t) ? xe.has(t) : we(t)) ? l : (o || ge(e, 0, t),
        r ? l : ht(l) ? s && S(t) ? l : l.value : _(l) ? o ? nt(l) : tt(l) : l)
    }
}
class ke extends Ee {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, t, n, o) {
        let r = e[t];
        if (st(r) && ht(r) && !ht(n))
            return !1;
        if (!this._shallow && (lt(n) || st(n) || (r = at(r),
        n = at(n)),
        !p(e) && ht(r) && !ht(n)))
            return r.value = n,
            !0;
        const s = p(e) && S(t) ? Number(t) < e.length : f(e, t)
          , l = Reflect.set(e, t, n, o);
        return e === at(o) && (s ? P(n, r) && ye(e, "set", t, n) : ye(e, "add", t, n)),
        l
    }
    deleteProperty(e, t) {
        const n = f(e, t)
          , o = Reflect.deleteProperty(e, t);
        return o && n && ye(e, "delete", t, void 0),
        o
    }
    has(e, t) {
        const n = Reflect.has(e, t);
        return y(t) && xe.has(t) || ge(e, 0, t),
        n
    }
    ownKeys(e) {
        return ge(e, 0, p(e) ? "length" : ae),
        Reflect.ownKeys(e)
    }
}
class Ae extends Ee {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
const Te = new ke
  , Fe = new Ae
  , $e = new ke(!0);
new Ae(!0);
const Le = e=>e
  , Oe = e=>Reflect.getPrototypeOf(e);
function Pe(e, t, n=!1, o=!1) {
    const r = at(e = e.__v_raw)
      , s = at(t);
    n || (P(t, s) && ge(r, 0, t),
    ge(r, 0, s));
    const {has: l} = Oe(r)
      , i = o ? Le : n ? ft : ut;
    return l.call(r, t) ? i(e.get(t)) : l.call(r, s) ? i(e.get(s)) : void (e !== r && e.get(t))
}
function Re(e, t=!1) {
    const n = this.__v_raw
      , o = at(n)
      , r = at(e);
    return t || (P(e, r) && ge(o, 0, e),
    ge(o, 0, r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function Ie(e, t=!1) {
    return e = e.__v_raw,
    !t && ge(at(e), 0, ae),
    Reflect.get(e, "size", e)
}
function Me(e) {
    e = at(e);
    const t = at(this);
    return Oe(t).has.call(t, e) || (t.add(e),
    ye(t, "add", e, e)),
    this
}
function Ne(e, t) {
    t = at(t);
    const n = at(this)
      , {has: o, get: r} = Oe(n);
    let s = o.call(n, e);
    s || (e = at(e),
    s = o.call(n, e));
    const l = r.call(n, e);
    return n.set(e, t),
    s ? P(t, l) && ye(n, "set", e, t) : ye(n, "add", e, t),
    this
}
function Ve(e) {
    const t = at(this)
      , {has: n, get: o} = Oe(t);
    let r = n.call(t, e);
    r || (e = at(e),
    r = n.call(t, e)),
    o && o.call(t, e);
    const s = t.delete(e);
    return r && ye(t, "delete", e, void 0),
    s
}
function je() {
    const e = at(this)
      , t = 0 !== e.size
      , n = e.clear();
    return t && ye(e, "clear", void 0, void 0),
    n
}
function Ue(e, t) {
    return function(n, o) {
        const r = this
          , s = r.__v_raw
          , l = at(s)
          , i = t ? Le : e ? ft : ut;
        return !e && ge(l, 0, ae),
        s.forEach(((e,t)=>n.call(o, i(e), i(t), r)))
    }
}
function Be(e, t, n) {
    return function(...o) {
        const r = this.__v_raw
          , s = at(r)
          , l = d(s)
          , i = "entries" === e || e === Symbol.iterator && l
          , a = "keys" === e && l
          , c = r[e](...o)
          , u = n ? Le : t ? ft : ut;
        return !t && ge(s, 0, a ? ce : ae),
        {
            next() {
                const {value: e, done: t} = c.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: i ? [u(e[0]), u(e[1])] : u(e),
                    done: t
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function De(e) {
    return function(...t) {
        return "delete" !== e && this
    }
}
const [We,ze,He,qe] = function() {
    const e = {
        get(e) {
            return Pe(this, e)
        },
        get size() {
            return Ie(this)
        },
        has: Re,
        add: Me,
        set: Ne,
        delete: Ve,
        clear: je,
        forEach: Ue(!1, !1)
    }
      , t = {
        get(e) {
            return Pe(this, e, !1, !0)
        },
        get size() {
            return Ie(this)
        },
        has: Re,
        add: Me,
        set: Ne,
        delete: Ve,
        clear: je,
        forEach: Ue(!1, !0)
    }
      , n = {
        get(e) {
            return Pe(this, e, !0)
        },
        get size() {
            return Ie(this, !0)
        },
        has(e) {
            return Re.call(this, e, !0)
        },
        add: De("add"),
        set: De("set"),
        delete: De("delete"),
        clear: De("clear"),
        forEach: Ue(!0, !1)
    }
      , o = {
        get(e) {
            return Pe(this, e, !0, !0)
        },
        get size() {
            return Ie(this, !0)
        },
        has(e) {
            return Re.call(this, e, !0)
        },
        add: De("add"),
        set: De("set"),
        delete: De("delete"),
        clear: De("clear"),
        forEach: Ue(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach((r=>{
        e[r] = Be(r, !1, !1),
        n[r] = Be(r, !0, !1),
        t[r] = Be(r, !1, !0),
        o[r] = Be(r, !0, !0)
    }
    )),
    [e, n, t, o]
}();
function Ke(e, t) {
    const n = t ? e ? qe : He : e ? ze : We;
    return (t,o,r)=>"__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(f(n, o) && o in t ? n : t, o, r)
}
const Ge = {
    get: Ke(!1, !1)
}
  , Ye = {
    get: Ke(!1, !0)
}
  , Je = {
    get: Ke(!0, !1)
}
  , Xe = new WeakMap
  , Ze = new WeakMap
  , Qe = new WeakMap
  , et = new WeakMap;
function tt(e) {
    return st(e) ? e : ot(e, !1, Te, Ge, Xe)
}
function nt(e) {
    return ot(e, !0, Fe, Je, Qe)
}
function ot(e, t, n, o, r) {
    if (!_(e))
        return e;
    if (e.__v_raw && (!t || !e.__v_isReactive))
        return e;
    const s = r.get(e);
    if (s)
        return s;
    const l = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function(e) {
        switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
        }
    }((e=>x(e).slice(8, -1))(i));
    var i;
    if (0 === l)
        return e;
    const a = new Proxy(e,2 === l ? o : n);
    return r.set(e, a),
    a
}
function rt(e) {
    return st(e) ? rt(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function st(e) {
    return !(!e || !e.__v_isReadonly)
}
function lt(e) {
    return !(!e || !e.__v_isShallow)
}
function it(e) {
    return rt(e) || st(e)
}
function at(e) {
    const t = e && e.__v_raw;
    return t ? at(t) : e
}
function ct(e) {
    return I(e, "__v_skip", !0),
    e
}
const ut = e=>_(e) ? tt(e) : e
  , ft = e=>_(e) ? nt(e) : e;
function pt(e) {
    pe && ie && ve((e = at(e)).dep || (e.dep = te()))
}
function dt(e, t) {
    const n = (e = at(e)).dep;
    n && _e(n)
}
function ht(e) {
    return !(!e || !0 !== e.__v_isRef)
}
function mt(e) {
    return vt(e, !1)
}
function gt(e) {
    return vt(e, !0)
}
function vt(e, t) {
    return ht(e) ? e : new yt(e,t)
}
class yt {
    constructor(e, t) {
        this.__v_isShallow = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = t ? e : at(e),
        this._value = t ? e : ut(e)
    }
    get value() {
        return pt(this),
        this._value
    }
    set value(e) {
        const t = this.__v_isShallow || lt(e) || st(e);
        e = t ? e : at(e),
        P(e, this._rawValue) && (this._rawValue = e,
        this._value = t ? e : ut(e),
        dt(this))
    }
}
function _t(e) {
    return ht(e) ? e.value : e
}
const bt = {
    get: (e,t,n)=>_t(Reflect.get(e, t, n)),
    set: (e,t,n,o)=>{
        const r = e[t];
        return ht(r) && !ht(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, o)
    }
};
function wt(e) {
    return rt(e) ? e : new Proxy(e,bt)
}
class xt {
    constructor(e, t, n) {
        this._object = e,
        this._key = t,
        this._defaultValue = n,
        this.__v_isRef = !0
    }
    get value() {
        const e = this._object[this._key];
        return void 0 === e ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
    get dep() {
        return e = at(this._object),
        t = this._key,
        null == (n = re.get(e)) ? void 0 : n.get(t);
        var e, t, n
    }
}
class Ct {
    constructor(e) {
        this._getter = e,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function St(e, t, n) {
    return ht(e) ? e : g(e) ? new Ct(e) : _(e) && arguments.length > 1 ? Et(e, t, n) : mt(e)
}
function Et(e, t, n) {
    const o = e[t];
    return ht(o) ? o : new xt(e,t,n)
}
class kt {
    constructor(e, t, n, o) {
        this._setter = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this._dirty = !0,
        this.effect = new ue(e,(()=>{
            this._dirty || (this._dirty = !0,
            dt(this))
        }
        )),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = n
    }
    get value() {
        const e = at(this);
        return pt(e),
        !e._dirty && e._cacheable || (e._dirty = !1,
        e._value = e.effect.run()),
        e._value
    }
    set value(e) {
        this._setter(e)
    }
}
function At(e, t, n, o) {
    let r;
    try {
        r = o ? e(...o) : e()
    } catch (s) {
        Ft(s, t, n)
    }
    return r
}
function Tt(e, t, n, o) {
    if (g(e)) {
        const r = At(e, t, n, o);
        return r && b(r) && r.catch((e=>{
            Ft(e, t, n)
        }
        )),
        r
    }
    const r = [];
    for (let s = 0; s < e.length; s++)
        r.push(Tt(e[s], t, n, o));
    return r
}
function Ft(e, t, n, o=!0) {
    if (t) {
        let o = t.parent;
        const r = t.proxy
          , s = n;
        for (; o; ) {
            const t = o.ec;
            if (t)
                for (let n = 0; n < t.length; n++)
                    if (!1 === t[n](e, r, s))
                        return;
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l)
            return void At(l, null, 10, [e, r, s])
    }
    var r;
    r = e,
    console.error(r)
}
let $t = !1
  , Lt = !1;
const Ot = [];
let Pt = 0;
const Rt = [];
let It = null
  , Mt = 0;
const Nt = Promise.resolve();
let Vt = null;
function jt(e) {
    const t = Vt || Nt;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ut(e) {
    Ot.length && Ot.includes(e, $t && e.allowRecurse ? Pt + 1 : Pt) || (null == e.id ? Ot.push(e) : Ot.splice(function(e) {
        let t = Pt + 1
          , n = Ot.length;
        for (; t < n; ) {
            const o = t + n >>> 1
              , r = Ot[o]
              , s = zt(r);
            s < e || s === e && r.pre ? t = o + 1 : n = o
        }
        return t
    }(e.id), 0, e),
    Bt())
}
function Bt() {
    $t || Lt || (Lt = !0,
    Vt = Nt.then(qt))
}
function Dt(e, t=($t ? Pt + 1 : 0)) {
    for (; t < Ot.length; t++) {
        const e = Ot[t];
        e && e.pre && (Ot.splice(t, 1),
        t--,
        e())
    }
}
function Wt(e) {
    if (Rt.length) {
        const e = [...new Set(Rt)];
        if (Rt.length = 0,
        It)
            return void It.push(...e);
        for (It = e,
        It.sort(((e,t)=>zt(e) - zt(t))),
        Mt = 0; Mt < It.length; Mt++)
            It[Mt]();
        It = null,
        Mt = 0
    }
}
const zt = e=>null == e.id ? 1 / 0 : e.id
  , Ht = (e,t)=>{
    const n = zt(e) - zt(t);
    if (0 === n) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function qt(e) {
    Lt = !1,
    $t = !0,
    Ot.sort(Ht);
    try {
        for (Pt = 0; Pt < Ot.length; Pt++) {
            const e = Ot[Pt];
            e && !1 !== e.active && At(e, null, 14)
        }
    } finally {
        Pt = 0,
        Ot.length = 0,
        Wt(),
        $t = !1,
        Vt = null,
        (Ot.length || Rt.length) && qt()
    }
}
function Kt(e, n, ...o) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || t;
    let s = o;
    const l = n.startsWith("update:")
      , i = l && n.slice(7);
    if (i && i in r) {
        const e = `${"modelValue" === i ? "model" : i}Modifiers`
          , {number: n, trim: l} = r[e] || t;
        l && (s = o.map((e=>v(e) ? e.trim() : e))),
        n && (s = o.map(M))
    }
    let a, c = r[a = O(n)] || r[a = O(T(n))];
    !c && l && (c = r[a = O($(n))]),
    c && Tt(c, e, 6, s);
    const u = r[a + "Once"];
    if (u) {
        if (e.emitted) {
            if (e.emitted[a])
                return
        } else
            e.emitted = {};
        e.emitted[a] = !0,
        Tt(u, e, 6, s)
    }
}
function Gt(e, t, n=!1) {
    const o = t.emitsCache
      , r = o.get(e);
    if (void 0 !== r)
        return r;
    const s = e.emits;
    let l = {}
      , i = !1;
    if (!g(e)) {
        const o = e=>{
            const n = Gt(e, t, !0);
            n && (i = !0,
            a(l, n))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o)
    }
    return s || i ? (p(s) ? s.forEach((e=>l[e] = null)) : a(l, s),
    _(e) && o.set(e, l),
    l) : (_(e) && o.set(e, null),
    null)
}
function Yt(e, t) {
    return !(!e || !l(t)) && (t = t.slice(2).replace(/Once$/, ""),
    f(e, t[0].toLowerCase() + t.slice(1)) || f(e, $(t)) || f(e, t))
}
let Jt = null
  , Xt = null;
function Zt(e) {
    const t = Jt;
    return Jt = e,
    Xt = e && e.type.__scopeId || null,
    t
}
function Qt(e) {
    Xt = e
}
function en() {
    Xt = null
}
function tn(e, t=Jt, n) {
    if (!t)
        return e;
    if (e._n)
        return e;
    const o = (...n)=>{
        o._d && gr(-1);
        const r = Zt(t);
        let s;
        try {
            s = e(...n)
        } finally {
            Zt(r),
            o._d && gr(1)
        }
        return s
    }
    ;
    return o._n = !0,
    o._c = !0,
    o._d = !0,
    o
}
function nn(e) {
    const {type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [l], slots: a, attrs: c, emit: u, render: f, renderCache: p, data: d, setupState: h, ctx: m, inheritAttrs: g} = e;
    let v, y;
    const _ = Zt(e);
    try {
        if (4 & n.shapeFlag) {
            const e = r || o;
            v = Lr(f.call(e, e, p, s, h, d, m)),
            y = c
        } else {
            v = Lr(t(s, t.length > 1 ? {
                attrs: c,
                slots: a,
                emit: u
            } : null)),
            y = t.props ? c : on(c)
        }
    } catch (w) {
        pr.length = 0,
        Ft(w, e, 1),
        v = kr(ur)
    }
    let b = v;
    if (y && !1 !== g) {
        const e = Object.keys(y)
          , {shapeFlag: t} = b;
        e.length && 7 & t && (l && e.some(i) && (y = rn(y, l)),
        b = Ar(b, y))
    }
    return n.dirs && (b = Ar(b),
    b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
    n.transition && (b.transition = n.transition),
    v = b,
    Zt(_),
    v
}
const on = e=>{
    let t;
    for (const n in e)
        ("class" === n || "style" === n || l(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , rn = (e,t)=>{
    const n = {};
    for (const o in e)
        i(o) && o.slice(9)in t || (n[o] = e[o]);
    return n
}
;
function sn(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < o.length; r++) {
        const s = o[r];
        if (t[s] !== e[s] && !Yt(n, s))
            return !0
    }
    return !1
}
const ln = e=>e.__isSuspense;
function an(e, t) {
    t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : function(e) {
        p(e) ? Rt.push(...e) : It && It.includes(e, e.allowRecurse ? Mt + 1 : Mt) || Rt.push(e),
        Bt()
    }(e)
}
function cn(e, t) {
    return dn(e, null, t)
}
function un(e, t) {
    return dn(e, null, {
        flush: "post"
    })
}
const fn = {};
function pn(e, t, n) {
    return dn(e, t, n)
}
function dn(e, n, {immediate: r, deep: s, flush: l}=t) {
    var i;
    const a = Q() === (null == (i = Nr) ? void 0 : i.scope) ? Nr : null;
    let u, f, d = !1, h = !1;
    if (ht(e) ? (u = ()=>e.value,
    d = lt(e)) : rt(e) ? (u = ()=>e,
    s = !0) : p(e) ? (h = !0,
    d = e.some((e=>rt(e) || lt(e))),
    u = ()=>e.map((e=>ht(e) ? e.value : rt(e) ? gn(e) : g(e) ? At(e, a, 2) : void 0))) : u = g(e) ? n ? ()=>At(e, a, 2) : ()=>{
        if (!a || !a.isUnmounted)
            return f && f(),
            Tt(e, a, 3, [m])
    }
    : o,
    n && s) {
        const e = u;
        u = ()=>gn(e())
    }
    let m = e=>{
        f = b.onStop = ()=>{
            At(e, a, 4)
        }
    }
      , v = h ? new Array(e.length).fill(fn) : fn;
    const y = ()=>{
        if (b.active)
            if (n) {
                const e = b.run();
                (s || d || (h ? e.some(((e,t)=>P(e, v[t]))) : P(e, v))) && (f && f(),
                Tt(n, a, 3, [e, v === fn ? void 0 : h && v[0] === fn ? [] : v, m]),
                v = e)
            } else
                b.run()
    }
    ;
    let _;
    y.allowRecurse = !!n,
    "sync" === l ? _ = y : "post" === l ? _ = ()=>Xo(y, a && a.suspense) : (y.pre = !0,
    a && (y.id = a.uid),
    _ = ()=>Ut(y));
    const b = new ue(u,_);
    return n ? r ? y() : v = b.run() : "post" === l ? Xo(b.run.bind(b), a && a.suspense) : b.run(),
    ()=>{
        b.stop(),
        a && a.scope && c(a.scope.effects, b)
    }
}
function hn(e, t, n) {
    const o = this.proxy
      , r = v(e) ? e.includes(".") ? mn(o, e) : ()=>o[e] : e.bind(o, o);
    let s;
    g(t) ? s = t : (s = t.handler,
    n = t);
    const l = Nr;
    Ur(this);
    const i = dn(r, s.bind(o), n);
    return l ? Ur(l) : Br(),
    i
}
function mn(e, t) {
    const n = t.split(".");
    return ()=>{
        let t = e;
        for (let e = 0; e < n.length && t; e++)
            t = t[n[e]];
        return t
    }
}
function gn(e, t) {
    if (!_(e) || e.__v_skip)
        return e;
    if ((t = t || new Set).has(e))
        return e;
    if (t.add(e),
    ht(e))
        gn(e.value, t);
    else if (p(e))
        for (let n = 0; n < e.length; n++)
            gn(e[n], t);
    else if (h(e) || d(e))
        e.forEach((e=>{
            gn(e, t)
        }
        ));
    else if (C(e))
        for (const n in e)
            gn(e[n], t);
    return e
}
function vn(e, n) {
    const o = Jt;
    if (null === o)
        return e;
    const r = qr(o) || o.proxy
      , s = e.dirs || (e.dirs = []);
    for (let l = 0; l < n.length; l++) {
        let[e,o,i,a=t] = n[l];
        e && (g(e) && (e = {
            mounted: e,
            updated: e
        }),
        e.deep && gn(o),
        s.push({
            dir: e,
            instance: r,
            value: o,
            oldValue: void 0,
            arg: i,
            modifiers: a
        }))
    }
    return e
}
function yn(e, t, n, o) {
    const r = e.dirs
      , s = t && t.dirs;
    for (let l = 0; l < r.length; l++) {
        const i = r[l];
        s && (i.oldValue = s[l].value);
        let a = i.dir[o];
        a && (he(),
        Tt(a, n, 8, [e.el, i, e, t]),
        me())
    }
}
const _n = Symbol("_leaveCb")
  , bn = Symbol("_enterCb");
function wn() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Kn((()=>{
        e.isMounted = !0
    }
    )),
    Jn((()=>{
        e.isUnmounting = !0
    }
    )),
    e
}
const xn = [Function, Array]
  , Cn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: xn,
    onEnter: xn,
    onAfterEnter: xn,
    onEnterCancelled: xn,
    onBeforeLeave: xn,
    onLeave: xn,
    onAfterLeave: xn,
    onLeaveCancelled: xn,
    onBeforeAppear: xn,
    onAppear: xn,
    onAfterAppear: xn,
    onAppearCancelled: xn
}
  , Sn = {
    name: "BaseTransition",
    props: Cn,
    setup(e, {slots: t}) {
        const n = Vr()
          , o = wn();
        let r;
        return ()=>{
            const s = t.default && $n(t.default(), !0);
            if (!s || !s.length)
                return;
            let l = s[0];
            if (s.length > 1)
                for (const e of s)
                    if (e.type !== ur) {
                        l = e;
                        break
                    }
            const i = at(e)
              , {mode: a} = i;
            if (o.isLeaving)
                return An(l);
            const c = Tn(l);
            if (!c)
                return An(l);
            const u = kn(c, i, o, n);
            Fn(c, u);
            const f = n.subTree
              , p = f && Tn(f);
            let d = !1;
            const {getTransitionKey: h} = c.type;
            if (h) {
                const e = h();
                void 0 === r ? r = e : e !== r && (r = e,
                d = !0)
            }
            if (p && p.type !== ur && (!wr(c, p) || d)) {
                const e = kn(p, i, o, n);
                if (Fn(p, e),
                "out-in" === a)
                    return o.isLeaving = !0,
                    e.afterLeave = ()=>{
                        o.isLeaving = !1,
                        !1 !== n.update.active && n.update()
                    }
                    ,
                    An(l);
                "in-out" === a && c.type !== ur && (e.delayLeave = (e,t,n)=>{
                    En(o, p)[String(p.key)] = p,
                    e[_n] = ()=>{
                        t(),
                        e[_n] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = n
                }
                )
            }
            return l
        }
    }
};
function En(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null),
    n.set(t.type, o)),
    o
}
function kn(e, t, n, o) {
    const {appear: r, mode: s, persisted: l=!1, onBeforeEnter: i, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: g, onAppear: v, onAfterAppear: y, onAppearCancelled: _} = t
      , b = String(e.key)
      , w = En(n, e)
      , x = (e,t)=>{
        e && Tt(e, o, 9, t)
    }
      , C = (e,t)=>{
        const n = t[1];
        x(e, t),
        p(e) ? e.every((e=>e.length <= 1)) && n() : e.length <= 1 && n()
    }
      , S = {
        mode: s,
        persisted: l,
        beforeEnter(t) {
            let o = i;
            if (!n.isMounted) {
                if (!r)
                    return;
                o = g || i
            }
            t[_n] && t[_n](!0);
            const s = w[b];
            s && wr(e, s) && s.el[_n] && s.el[_n](),
            x(o, [t])
        },
        enter(e) {
            let t = a
              , o = c
              , s = u;
            if (!n.isMounted) {
                if (!r)
                    return;
                t = v || a,
                o = y || c,
                s = _ || u
            }
            let l = !1;
            const i = e[bn] = t=>{
                l || (l = !0,
                x(t ? s : o, [e]),
                S.delayedLeave && S.delayedLeave(),
                e[bn] = void 0)
            }
            ;
            t ? C(t, [e, i]) : i()
        },
        leave(t, o) {
            const r = String(e.key);
            if (t[bn] && t[bn](!0),
            n.isUnmounting)
                return o();
            x(f, [t]);
            let s = !1;
            const l = t[_n] = n=>{
                s || (s = !0,
                o(),
                x(n ? m : h, [t]),
                t[_n] = void 0,
                w[r] === e && delete w[r])
            }
            ;
            w[r] = e,
            d ? C(d, [t, l]) : l()
        },
        clone: e=>kn(e, t, n, o)
    };
    return S
}
function An(e) {
    if (In(e))
        return (e = Ar(e)).children = null,
        e
}
function Tn(e) {
    return In(e) ? e.children ? e.children[0] : void 0 : e
}
function Fn(e, t) {
    6 & e.shapeFlag && e.component ? Fn(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function $n(e, t=!1, n) {
    let o = []
      , r = 0;
    for (let s = 0; s < e.length; s++) {
        let l = e[s];
        const i = null == n ? l.key : String(n) + String(null != l.key ? l.key : s);
        l.type === ar ? (128 & l.patchFlag && r++,
        o = o.concat($n(l.children, t, i))) : (t || l.type !== ur) && o.push(null != i ? Ar(l, {
            key: i
        }) : l)
    }
    if (r > 1)
        for (let s = 0; s < o.length; s++)
            o[s].patchFlag = -2;
    return o
}
/*! #__NO_SIDE_EFFECTS__ */
function Ln(e, t) {
    return g(e) ? a({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const On = e=>!!e.type.__asyncLoader;
function Pn(e) {
    g(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: o, delay: r=200, timeout: s, suspensible: l=!0, onError: i} = e;
    let a, c = null, u = 0;
    const f = ()=>{
        let e;
        return c || (e = c = t().catch((e=>{
            if (e = e instanceof Error ? e : new Error(String(e)),
            i)
                return new Promise(((t,n)=>{
                    i(e, (()=>t((u++,
                    c = null,
                    f()))), (()=>n(e)), u + 1)
                }
                ));
            throw e
        }
        )).then((t=>e !== c && c ? c : (t && (t.__esModule || "Module" === t[Symbol.toStringTag]) && (t = t.default),
        a = t,
        t))))
    }
    ;
    return Ln({
        name: "AsyncComponentWrapper",
        __asyncLoader: f,
        get __asyncResolved() {
            return a
        },
        setup() {
            const e = Nr;
            if (a)
                return ()=>Rn(a, e);
            const t = t=>{
                c = null,
                Ft(t, e, 13, !o)
            }
            ;
            if (l && e.suspense)
                return f().then((t=>()=>Rn(t, e))).catch((e=>(t(e),
                ()=>o ? kr(o, {
                    error: e
                }) : null)));
            const i = mt(!1)
              , u = mt()
              , p = mt(!!r);
            return r && setTimeout((()=>{
                p.value = !1
            }
            ), r),
            null != s && setTimeout((()=>{
                if (!i.value && !u.value) {
                    const e = new Error(`Async component timed out after ${s}ms.`);
                    t(e),
                    u.value = e
                }
            }
            ), s),
            f().then((()=>{
                i.value = !0,
                e.parent && In(e.parent.vnode) && Ut(e.parent.update)
            }
            )).catch((e=>{
                t(e),
                u.value = e
            }
            )),
            ()=>i.value && a ? Rn(a, e) : u.value && o ? kr(o, {
                error: u.value
            }) : n && !p.value ? kr(n) : void 0
        }
    })
}
function Rn(e, t) {
    const {ref: n, props: o, children: r, ce: s} = t.vnode
      , l = kr(e, o, r);
    return l.ref = n,
    l.ce = s,
    delete t.vnode.ce,
    l
}
const In = e=>e.type.__isKeepAlive
  , Mn = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Vr()
          , o = n.ctx
          , r = new Map
          , s = new Set;
        let l = null;
        const i = n.suspense
          , {renderer: {p: a, m: c, um: u, o: {createElement: f}}} = o
          , p = f("div");
        function d(e) {
            Dn(e),
            u(e, n, i, !0)
        }
        function h(e) {
            r.forEach(((t,n)=>{
                const o = Kr(t.type);
                !o || e && e(o) || m(n)
            }
            ))
        }
        function m(e) {
            const t = r.get(e);
            l && wr(t, l) ? l && Dn(l) : d(t),
            r.delete(e),
            s.delete(e)
        }
        o.activate = (e,t,n,o,r)=>{
            const s = e.component;
            c(e, t, n, 0, i),
            a(s.vnode, e, t, n, s, i, o, e.slotScopeIds, r),
            Xo((()=>{
                s.isDeactivated = !1,
                s.a && R(s.a);
                const t = e.props && e.props.onVnodeMounted;
                t && Rr(t, s.parent, e)
            }
            ), i)
        }
        ,
        o.deactivate = e=>{
            const t = e.component;
            c(e, p, null, 1, i),
            Xo((()=>{
                t.da && R(t.da);
                const n = e.props && e.props.onVnodeUnmounted;
                n && Rr(n, t.parent, e),
                t.isDeactivated = !0
            }
            ), i)
        }
        ,
        pn((()=>[e.include, e.exclude]), (([e,t])=>{
            e && h((t=>Nn(e, t))),
            t && h((e=>!Nn(t, e)))
        }
        ), {
            flush: "post",
            deep: !0
        });
        let g = null;
        const v = ()=>{
            null != g && r.set(g, Wn(n.subTree))
        }
        ;
        return Kn(v),
        Yn(v),
        Jn((()=>{
            r.forEach((e=>{
                const {subTree: t, suspense: o} = n
                  , r = Wn(t);
                if (e.type !== r.type || e.key !== r.key)
                    d(e);
                else {
                    Dn(r);
                    const e = r.component.da;
                    e && Xo(e, o)
                }
            }
            ))
        }
        )),
        ()=>{
            if (g = null,
            !t.default)
                return null;
            const n = t.default()
              , o = n[0];
            if (n.length > 1)
                return l = null,
                n;
            if (!br(o) || !(4 & o.shapeFlag || 128 & o.shapeFlag))
                return l = null,
                o;
            let i = Wn(o);
            const a = i.type
              , c = Kr(On(i) ? i.type.__asyncResolved || {} : a)
              , {include: u, exclude: f, max: p} = e;
            if (u && (!c || !Nn(u, c)) || f && c && Nn(f, c))
                return l = i,
                o;
            const d = null == i.key ? a : i.key
              , h = r.get(d);
            return i.el && (i = Ar(i),
            128 & o.shapeFlag && (o.ssContent = i)),
            g = d,
            h ? (i.el = h.el,
            i.component = h.component,
            i.transition && Fn(i, i.transition),
            i.shapeFlag |= 512,
            s.delete(d),
            s.add(d)) : (s.add(d),
            p && s.size > parseInt(p, 10) && m(s.values().next().value)),
            i.shapeFlag |= 256,
            l = i,
            ln(o.type) ? o : i
        }
    }
};
function Nn(e, t) {
    return p(e) ? e.some((e=>Nn(e, t))) : v(e) ? e.split(",").includes(t) : "[object RegExp]" === x(e) && e.test(t)
}
function Vn(e, t) {
    Un(e, "a", t)
}
function jn(e, t) {
    Un(e, "da", t)
}
function Un(e, t, n=Nr) {
    const o = e.__wdc || (e.__wdc = ()=>{
        let t = n;
        for (; t; ) {
            if (t.isDeactivated)
                return;
            t = t.parent
        }
        return e()
    }
    );
    if (zn(t, o, n),
    n) {
        let e = n.parent;
        for (; e && e.parent; )
            In(e.parent.vnode) && Bn(o, t, n, e),
            e = e.parent
    }
}
function Bn(e, t, n, o) {
    const r = zn(t, e, o, !0);
    Xn((()=>{
        c(o[t], r)
    }
    ), n)
}
function Dn(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Wn(e) {
    return 128 & e.shapeFlag ? e.ssContent : e
}
function zn(e, t, n=Nr, o=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...o)=>{
            if (n.isUnmounted)
                return;
            he(),
            Ur(n);
            const r = Tt(t, n, e, o);
            return Br(),
            me(),
            r
        }
        );
        return o ? r.unshift(s) : r.push(s),
        s
    }
}
const Hn = e=>(t,n=Nr)=>(!Wr || "sp" === e) && zn(e, ((...e)=>t(...e)), n)
  , qn = Hn("bm")
  , Kn = Hn("m")
  , Gn = Hn("bu")
  , Yn = Hn("u")
  , Jn = Hn("bum")
  , Xn = Hn("um")
  , Zn = Hn("sp")
  , Qn = Hn("rtg")
  , eo = Hn("rtc");
function to(e, t=Nr) {
    zn("ec", e, t)
}
const no = "components";
function oo(e, t) {
    return lo(no, e, !0, t) || e
}
const ro = Symbol.for("v-ndc");
function so(e) {
    return v(e) ? lo(no, e, !1) || e : e || ro
}
function lo(e, t, n=!0, o=!1) {
    const r = Jt || Nr;
    if (r) {
        const n = r.type;
        if (e === no) {
            const e = Kr(n, !1);
            if (e && (e === t || e === T(t) || e === L(T(t))))
                return n
        }
        const s = io(r[e] || n[e], t) || io(r.appContext[e], t);
        return !s && o ? n : s
    }
}
function io(e, t) {
    return e && (e[t] || e[T(t)] || e[L(T(t))])
}
function ao(e, t, n, o) {
    let r;
    const s = n && n[o];
    if (p(e) || v(e)) {
        r = new Array(e.length);
        for (let n = 0, o = e.length; n < o; n++)
            r[n] = t(e[n], n, void 0, s && s[n])
    } else if ("number" == typeof e) {
        r = new Array(e);
        for (let n = 0; n < e; n++)
            r[n] = t(n + 1, n, void 0, s && s[n])
    } else if (_(e))
        if (e[Symbol.iterator])
            r = Array.from(e, ((e,n)=>t(e, n, void 0, s && s[n])));
        else {
            const n = Object.keys(e);
            r = new Array(n.length);
            for (let o = 0, l = n.length; o < l; o++) {
                const l = n[o];
                r[o] = t(e[l], l, o, s && s[o])
            }
        }
    else
        r = [];
    return n && (n[o] = r),
    r
}
function co(e, t, n={}, o, r) {
    if (Jt.isCE || Jt.parent && On(Jt.parent) && Jt.parent.isCE)
        return "default" !== t && (n.name = t),
        kr("slot", n, o && o());
    let s = e[t];
    s && s._c && (s._d = !1),
    hr();
    const l = s && uo(s(n))
      , i = _r(ar, {
        key: n.key || l && l.key || `_${t}`
    }, l || (o ? o() : []), l && 1 === e._ ? 64 : -2);
    return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    i
}
function uo(e) {
    return e.some((e=>!br(e) || e.type !== ur && !(e.type === ar && !uo(e.children)))) ? e : null
}
const fo = e=>e ? Dr(e) ? qr(e) || e.proxy : fo(e.parent) : null
  , po = a(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>fo(e.parent),
    $root: e=>fo(e.root),
    $emit: e=>e.emit,
    $options: e=>bo(e),
    $forceUpdate: e=>e.f || (e.f = ()=>Ut(e.update)),
    $nextTick: e=>e.n || (e.n = jt.bind(e.proxy)),
    $watch: e=>hn.bind(e)
})
  , ho = (e,n)=>e !== t && !e.__isScriptSetup && f(e, n)
  , mo = {
    get({_: e}, n) {
        const {ctx: o, setupState: r, data: s, props: l, accessCache: i, type: a, appContext: c} = e;
        let u;
        if ("$" !== n[0]) {
            const a = i[n];
            if (void 0 !== a)
                switch (a) {
                case 1:
                    return r[n];
                case 2:
                    return s[n];
                case 4:
                    return o[n];
                case 3:
                    return l[n]
                }
            else {
                if (ho(r, n))
                    return i[n] = 1,
                    r[n];
                if (s !== t && f(s, n))
                    return i[n] = 2,
                    s[n];
                if ((u = e.propsOptions[0]) && f(u, n))
                    return i[n] = 3,
                    l[n];
                if (o !== t && f(o, n))
                    return i[n] = 4,
                    o[n];
                vo && (i[n] = 0)
            }
        }
        const p = po[n];
        let d, h;
        return p ? ("$attrs" === n && ge(e, 0, n),
        p(e)) : (d = a.__cssModules) && (d = d[n]) ? d : o !== t && f(o, n) ? (i[n] = 4,
        o[n]) : (h = c.config.globalProperties,
        f(h, n) ? h[n] : void 0)
    },
    set({_: e}, n, o) {
        const {data: r, setupState: s, ctx: l} = e;
        return ho(s, n) ? (s[n] = o,
        !0) : r !== t && f(r, n) ? (r[n] = o,
        !0) : !(f(e.props, n) || "$" === n[0] && n.slice(1)in e || (l[n] = o,
        0))
    },
    has({_: {data: e, setupState: n, accessCache: o, ctx: r, appContext: s, propsOptions: l}}, i) {
        let a;
        return !!o[i] || e !== t && f(e, i) || ho(n, i) || (a = l[0]) && f(a, i) || f(r, i) || f(po, i) || f(s.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return null != n.get ? e._.accessCache[t] = 0 : f(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function go(e) {
    return p(e) ? e.reduce(((e,t)=>(e[t] = null,
    e)), {}) : e
}
a({}, mo, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return mo.get(e, t, e)
    },
    has: (e,t)=>"_" !== t[0] && !V(t)
});
let vo = !0;
function yo(e, t, n) {
    Tt(p(e) ? e.map((e=>e.bind(t.proxy))) : e.bind(t.proxy), t, n)
}
function _o(e, t, n, o) {
    const r = o.includes(".") ? mn(n, o) : ()=>n[o];
    if (v(e)) {
        const n = t[e];
        g(n) && pn(r, n)
    } else if (g(e))
        pn(r, e.bind(n));
    else if (_(e))
        if (p(e))
            e.forEach((e=>_o(e, t, n, o)));
        else {
            const o = g(e.handler) ? e.handler.bind(n) : t[e.handler];
            g(o) && pn(r, o, e)
        }
}
function bo(e) {
    const t = e.type
      , {mixins: n, extends: o} = t
      , {mixins: r, optionsCache: s, config: {optionMergeStrategies: l}} = e.appContext
      , i = s.get(t);
    let a;
    return i ? a = i : r.length || n || o ? (a = {},
    r.length && r.forEach((e=>wo(a, e, l, !0))),
    wo(a, t, l)) : a = t,
    _(t) && s.set(t, a),
    a
}
function wo(e, t, n, o=!1) {
    const {mixins: r, extends: s} = t;
    s && wo(e, s, n, !0),
    r && r.forEach((t=>wo(e, t, n, !0)));
    for (const l in t)
        if (o && "expose" === l)
            ;
        else {
            const o = xo[l] || n && n[l];
            e[l] = o ? o(e[l], t[l]) : t[l]
        }
    return e
}
const xo = {
    data: Co,
    props: Ao,
    emits: Ao,
    methods: ko,
    computed: ko,
    beforeCreate: Eo,
    created: Eo,
    beforeMount: Eo,
    mounted: Eo,
    beforeUpdate: Eo,
    updated: Eo,
    beforeDestroy: Eo,
    beforeUnmount: Eo,
    destroyed: Eo,
    unmounted: Eo,
    activated: Eo,
    deactivated: Eo,
    errorCaptured: Eo,
    serverPrefetch: Eo,
    components: ko,
    directives: ko,
    watch: function(e, t) {
        if (!e)
            return t;
        if (!t)
            return e;
        const n = a(Object.create(null), e);
        for (const o in t)
            n[o] = Eo(e[o], t[o]);
        return n
    },
    provide: Co,
    inject: function(e, t) {
        return ko(So(e), So(t))
    }
};
function Co(e, t) {
    return t ? e ? function() {
        return a(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t)
    }
    : t : e
}
function So(e) {
    if (p(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Eo(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function ko(e, t) {
    return e ? a(Object.create(null), e, t) : t
}
function Ao(e, t) {
    return e ? p(e) && p(t) ? [...new Set([...e, ...t])] : a(Object.create(null), go(e), go(null != t ? t : {})) : t
}
function To() {
    return {
        app: null,
        config: {
            isNativeTag: r,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Fo = 0;
function $o(e, t) {
    return function(n, o=null) {
        g(n) || (n = a({}, n)),
        null == o || _(o) || (o = null);
        const r = To()
          , s = new WeakSet;
        let l = !1;
        const i = r.app = {
            _uid: Fo++,
            _component: n,
            _props: o,
            _container: null,
            _context: r,
            _instance: null,
            version: Jr,
            get config() {
                return r.config
            },
            set config(e) {},
            use: (e,...t)=>(s.has(e) || (e && g(e.install) ? (s.add(e),
            e.install(i, ...t)) : g(e) && (s.add(e),
            e(i, ...t))),
            i),
            mixin: e=>(r.mixins.includes(e) || r.mixins.push(e),
            i),
            component: (e,t)=>t ? (r.components[e] = t,
            i) : r.components[e],
            directive: (e,t)=>t ? (r.directives[e] = t,
            i) : r.directives[e],
            mount(s, a, c) {
                if (!l) {
                    const u = kr(n, o);
                    return u.appContext = r,
                    a && t ? t(u, s) : e(u, s, c),
                    l = !0,
                    i._container = s,
                    s.__vue_app__ = i,
                    qr(u.component) || u.component.proxy
                }
            },
            unmount() {
                l && (e(null, i._container),
                delete i._container.__vue_app__)
            },
            provide: (e,t)=>(r.provides[e] = t,
            i),
            runWithContext(e) {
                Lo = i;
                try {
                    return e()
                } finally {
                    Lo = null
                }
            }
        };
        return i
    }
}
let Lo = null;
function Oo(e, t) {
    if (Nr) {
        let n = Nr.provides;
        const o = Nr.parent && Nr.parent.provides;
        o === n && (n = Nr.provides = Object.create(o)),
        n[e] = t
    }
}
function Po(e, t, n=!1) {
    const o = Nr || Jt;
    if (o || Lo) {
        const r = o ? null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Lo._context.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && g(t) ? t.call(o && o.proxy) : t
    }
}
function Ro(e, n, o, r) {
    const [s,l] = e.propsOptions;
    let i, a = !1;
    if (n)
        for (let t in n) {
            if (E(t))
                continue;
            const c = n[t];
            let u;
            s && f(s, u = T(t)) ? l && l.includes(u) ? (i || (i = {}))[u] = c : o[u] = c : Yt(e.emitsOptions, t) || t in r && c === r[t] || (r[t] = c,
            a = !0)
        }
    if (l) {
        const n = at(o)
          , r = i || t;
        for (let t = 0; t < l.length; t++) {
            const i = l[t];
            o[i] = Io(s, n, i, r[i], e, !f(r, i))
        }
    }
    return a
}
function Io(e, t, n, o, r, s) {
    const l = e[n];
    if (null != l) {
        const e = f(l, "default");
        if (e && void 0 === o) {
            const e = l.default;
            if (l.type !== Function && !l.skipFactory && g(e)) {
                const {propsDefaults: s} = r;
                n in s ? o = s[n] : (Ur(r),
                o = s[n] = e.call(null, t),
                Br())
            } else
                o = e
        }
        l[0] && (s && !e ? o = !1 : !l[1] || "" !== o && o !== $(n) || (o = !0))
    }
    return o
}
function Mo(e, o, r=!1) {
    const s = o.propsCache
      , l = s.get(e);
    if (l)
        return l;
    const i = e.props
      , c = {}
      , u = [];
    let d = !1;
    if (!g(e)) {
        const t = e=>{
            d = !0;
            const [t,n] = Mo(e, o, !0);
            a(c, t),
            n && u.push(...n)
        }
        ;
        !r && o.mixins.length && o.mixins.forEach(t),
        e.extends && t(e.extends),
        e.mixins && e.mixins.forEach(t)
    }
    if (!i && !d)
        return _(e) && s.set(e, n),
        n;
    if (p(i))
        for (let n = 0; n < i.length; n++) {
            const e = T(i[n]);
            No(e) && (c[e] = t)
        }
    else if (i)
        for (const t in i) {
            const e = T(t);
            if (No(e)) {
                const n = i[t]
                  , o = c[e] = p(n) || g(n) ? {
                    type: n
                } : a({}, n);
                if (o) {
                    const t = Uo(Boolean, o.type)
                      , n = Uo(String, o.type);
                    o[0] = t > -1,
                    o[1] = n < 0 || t < n,
                    (t > -1 || f(o, "default")) && u.push(e)
                }
            }
        }
    const h = [c, u];
    return _(e) && s.set(e, h),
    h
}
function No(e) {
    return "$" !== e[0]
}
function Vo(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : null === e ? "null" : ""
}
function jo(e, t) {
    return Vo(e) === Vo(t)
}
function Uo(e, t) {
    return p(t) ? t.findIndex((t=>jo(t, e))) : g(t) && jo(t, e) ? 0 : -1
}
const Bo = e=>"_" === e[0] || "$stable" === e
  , Do = e=>p(e) ? e.map(Lr) : [Lr(e)]
  , Wo = (e,t,n)=>{
    if (t._n)
        return t;
    const o = tn(((...e)=>Do(t(...e))), n);
    return o._c = !1,
    o
}
  , zo = (e,t,n)=>{
    const o = e._ctx;
    for (const r in e) {
        if (Bo(r))
            continue;
        const n = e[r];
        if (g(n))
            t[r] = Wo(0, n, o);
        else if (null != n) {
            const e = Do(n);
            t[r] = ()=>e
        }
    }
}
  , Ho = (e,t)=>{
    const n = Do(t);
    e.slots.default = ()=>n
}
;
function qo(e, n, o, r, s=!1) {
    if (p(e))
        return void e.forEach(((e,t)=>qo(e, n && (p(n) ? n[t] : n), o, r, s)));
    if (On(r) && !s)
        return;
    const l = 4 & r.shapeFlag ? qr(r.component) || r.component.proxy : r.el
      , i = s ? null : l
      , {i: a, r: u} = e
      , d = n && n.r
      , h = a.refs === t ? a.refs = {} : a.refs
      , m = a.setupState;
    if (null != d && d !== u && (v(d) ? (h[d] = null,
    f(m, d) && (m[d] = null)) : ht(d) && (d.value = null)),
    g(u))
        At(u, a, 12, [i, h]);
    else {
        const t = v(u)
          , n = ht(u);
        if (t || n) {
            const r = ()=>{
                if (e.f) {
                    const n = t ? f(m, u) ? m[u] : h[u] : u.value;
                    s ? p(n) && c(n, l) : p(n) ? n.includes(l) || n.push(l) : t ? (h[u] = [l],
                    f(m, u) && (m[u] = h[u])) : (u.value = [l],
                    e.k && (h[e.k] = u.value))
                } else
                    t ? (h[u] = i,
                    f(m, u) && (m[u] = i)) : n && (u.value = i,
                    e.k && (h[e.k] = i))
            }
            ;
            i ? (r.id = -1,
            Xo(r, o)) : r()
        }
    }
}
let Ko = !1;
const Go = e=>/svg/.test(e.namespaceURI) && "foreignObject" !== e.tagName
  , Yo = e=>8 === e.nodeType;
function Jo(e) {
    const {mt: t, p: n, o: {patchProp: o, createText: r, nextSibling: s, parentNode: i, remove: a, insert: c, createComment: u}} = e
      , f = (n,o,l,a,u,_=!1)=>{
        const b = Yo(n) && "[" === n.data
          , w = ()=>m(n, o, l, a, u, b)
          , {type: x, ref: C, shapeFlag: S, patchFlag: E} = o;
        let k = n.nodeType;
        o.el = n,
        -2 === E && (_ = !1,
        o.dynamicChildren = null);
        let A = null;
        switch (x) {
        case cr:
            3 !== k ? "" === o.children ? (c(o.el = r(""), i(n), n),
            A = n) : A = w() : (n.data !== o.children && (Ko = !0,
            n.data = o.children),
            A = s(n));
            break;
        case ur:
            if (8 !== k || b)
                if ("template" === n.tagName.toLowerCase()) {
                    const e = o.el.content.firstChild;
                    v(e, n, l),
                    o.el = n = e,
                    A = s(n)
                } else
                    A = w();
            else
                A = s(n);
            break;
        case fr:
            if (b && (k = (n = s(n)).nodeType),
            1 === k || 3 === k) {
                A = n;
                const e = !o.children.length;
                for (let t = 0; t < o.staticCount; t++)
                    e && (o.children += 1 === A.nodeType ? A.outerHTML : A.data),
                    t === o.staticCount - 1 && (o.anchor = A),
                    A = s(A);
                return b ? s(A) : A
            }
            w();
            break;
        case ar:
            A = b ? h(n, o, l, a, u, _) : w();
            break;
        default:
            if (1 & S)
                A = 1 === k && o.type.toLowerCase() === n.tagName.toLowerCase() || y(n) ? p(n, o, l, a, u, _) : w();
            else if (6 & S) {
                o.slotScopeIds = u;
                const e = i(n);
                if (A = b ? g(n) : Yo(n) && "teleport start" === n.data ? g(n, n.data, "teleport end") : s(n),
                t(o, e, null, l, a, Go(e), _),
                On(o)) {
                    let t;
                    b ? (t = kr(ar),
                    t.anchor = A ? A.previousSibling : e.lastChild) : t = 3 === n.nodeType ? Tr("") : kr("div"),
                    t.el = n,
                    o.component.subTree = t
                }
            } else
                64 & S ? A = 8 !== k ? w() : o.type.hydrate(n, o, l, a, u, _, e, d) : 128 & S && (A = o.type.hydrate(n, o, l, a, Go(i(n)), u, _, e, f))
        }
        return null != C && qo(C, null, a, o),
        A
    }
      , p = (e,t,n,r,s,i)=>{
        i = i || !!t.dynamicChildren;
        const {type: c, props: u, patchFlag: f, shapeFlag: p, dirs: h, transition: m} = t
          , g = "input" === c && h || "option" === c;
        if (g || -1 !== f) {
            if (h && yn(t, null, n, "created"),
            u)
                if (g || !i || 48 & f)
                    for (const t in u)
                        (g && t.endsWith("value") || l(t) && !E(t)) && o(e, t, null, u[t], !1, void 0, n);
                else
                    u.onClick && o(e, "onClick", null, u.onClick, !1, void 0, n);
            let c;
            (c = u && u.onVnodeBeforeMount) && Rr(c, n, t);
            let _ = !1;
            if (y(e)) {
                _ = er(r, m) && n && n.vnode.props && n.vnode.props.appear;
                const o = e.content.firstChild;
                _ && m.beforeEnter(o),
                v(o, e, n),
                t.el = e = o
            }
            if (h && yn(t, null, n, "beforeMount"),
            ((c = u && u.onVnodeMounted) || h || _) && an((()=>{
                c && Rr(c, n, t),
                _ && m.enter(e),
                h && yn(t, null, n, "mounted")
            }
            ), r),
            16 & p && (!u || !u.innerHTML && !u.textContent)) {
                let o = d(e.firstChild, t, e, n, r, s, i);
                for (; o; ) {
                    Ko = !0;
                    const e = o;
                    o = o.nextSibling,
                    a(e)
                }
            } else
                8 & p && e.textContent !== t.children && (Ko = !0,
                e.textContent = t.children)
        }
        return e.nextSibling
    }
      , d = (e,t,o,r,s,l,i)=>{
        i = i || !!t.dynamicChildren;
        const a = t.children
          , c = a.length;
        for (let u = 0; u < c; u++) {
            const t = i ? a[u] : a[u] = Lr(a[u]);
            if (e)
                e = f(e, t, r, s, l, i);
            else {
                if (t.type === cr && !t.children)
                    continue;
                Ko = !0,
                n(null, t, o, null, r, s, Go(o), l)
            }
        }
        return e
    }
      , h = (e,t,n,o,r,l)=>{
        const {slotScopeIds: a} = t;
        a && (r = r ? r.concat(a) : a);
        const f = i(e)
          , p = d(s(e), t, f, n, o, r, l);
        return p && Yo(p) && "]" === p.data ? s(t.anchor = p) : (Ko = !0,
        c(t.anchor = u("]"), f, p),
        p)
    }
      , m = (e,t,o,r,l,c)=>{
        if (Ko = !0,
        t.el = null,
        c) {
            const t = g(e);
            for (; ; ) {
                const n = s(e);
                if (!n || n === t)
                    break;
                a(n)
            }
        }
        const u = s(e)
          , f = i(e);
        return a(e),
        n(null, t, f, u, o, r, Go(f), l),
        u
    }
      , g = (e,t="[",n="]")=>{
        let o = 0;
        for (; e; )
            if ((e = s(e)) && Yo(e) && (e.data === t && o++,
            e.data === n)) {
                if (0 === o)
                    return s(e);
                o--
            }
        return e
    }
      , v = (e,t,n)=>{
        const o = t.parentNode;
        o && o.replaceChild(e, t);
        let r = n;
        for (; r; )
            r.vnode.el === t && (r.vnode.el = e,
            r.subTree.el = e),
            r = r.parent
    }
      , y = e=>1 === e.nodeType && "template" === e.tagName.toLowerCase();
    return [(e,t)=>{
        if (!t.hasChildNodes())
            return n(null, e, t),
            Wt(),
            void (t._vnode = e);
        Ko = !1,
        f(t.firstChild, e, null, null, null),
        Wt(),
        t._vnode = e,
        Ko && console.error("Hydration completed but contains mismatches.")
    }
    , f]
}
const Xo = an;
function Zo(e) {
    return function(e, r) {
        (N || (N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})).__VUE__ = !0;
        const {insert: s, remove: l, patchProp: i, createElement: c, createText: u, createComment: p, setText: d, setElementText: h, parentNode: m, nextSibling: g, setScopeId: v=o, insertStaticContent: y} = e
          , _ = (e,t,n,o=null,r=null,s=null,l=!1,i=null,a=!!t.dynamicChildren)=>{
            if (e === t)
                return;
            e && !wr(e, t) && (o = Q(e),
            K(e, r, s, !0),
            e = null),
            -2 === t.patchFlag && (a = !1,
            t.dynamicChildren = null);
            const {type: c, ref: u, shapeFlag: f} = t;
            switch (c) {
            case cr:
                w(e, t, n, o);
                break;
            case ur:
                x(e, t, n, o);
                break;
            case fr:
                null == e && C(t, n, o, l);
                break;
            case ar:
                M(e, t, n, o, r, s, l, i, a);
                break;
            default:
                1 & f ? S(e, t, n, o, r, s, l, i, a) : 6 & f ? V(e, t, n, o, r, s, l, i, a) : (64 & f || 128 & f) && c.process(e, t, n, o, r, s, l, i, a, te)
            }
            null != u && r && qo(u, e && e.ref, s, t || e, !t)
        }
          , w = (e,t,n,o)=>{
            if (null == e)
                s(t.el = u(t.children), n, o);
            else {
                const n = t.el = e.el;
                t.children !== e.children && d(n, t.children)
            }
        }
          , x = (e,t,n,o)=>{
            null == e ? s(t.el = p(t.children || ""), n, o) : t.el = e.el
        }
          , C = (e,t,n,o)=>{
            [e.el,e.anchor] = y(e.children, t, n, o, e.el, e.anchor)
        }
          , S = (e,t,n,o,r,s,l,i,a)=>{
            l = l || "svg" === t.type,
            null == e ? k(t, n, o, r, s, l, i, a) : L(e, t, r, s, l, i, a)
        }
          , k = (e,t,n,o,r,l,a,u)=>{
            let f, p;
            const {type: d, props: m, shapeFlag: g, transition: v, dirs: y} = e;
            if (f = e.el = c(e.type, l, m && m.is, m),
            8 & g ? h(f, e.children) : 16 & g && F(e.children, f, null, o, r, l && "foreignObject" !== d, a, u),
            y && yn(e, null, o, "created"),
            A(f, e, e.scopeId, a, o),
            m) {
                for (const t in m)
                    "value" === t || E(t) || i(f, t, null, m[t], l, e.children, o, r, X);
                "value"in m && i(f, "value", null, m.value),
                (p = m.onVnodeBeforeMount) && Rr(p, o, e)
            }
            y && yn(e, null, o, "beforeMount");
            const _ = er(r, v);
            _ && v.beforeEnter(f),
            s(f, t, n),
            ((p = m && m.onVnodeMounted) || _ || y) && Xo((()=>{
                p && Rr(p, o, e),
                _ && v.enter(f),
                y && yn(e, null, o, "mounted")
            }
            ), r)
        }
          , A = (e,t,n,o,r)=>{
            if (n && v(e, n),
            o)
                for (let s = 0; s < o.length; s++)
                    v(e, o[s]);
            if (r && t === r.subTree) {
                const t = r.vnode;
                A(e, t, t.scopeId, t.slotScopeIds, r.parent)
            }
        }
          , F = (e,t,n,o,r,s,l,i,a=0)=>{
            for (let c = a; c < e.length; c++) {
                const a = e[c] = i ? Or(e[c]) : Lr(e[c]);
                _(null, a, t, n, o, r, s, l, i)
            }
        }
          , L = (e,n,o,r,s,l,a)=>{
            const c = n.el = e.el;
            let {patchFlag: u, dynamicChildren: f, dirs: p} = n;
            u |= 16 & e.patchFlag;
            const d = e.props || t
              , m = n.props || t;
            let g;
            o && Qo(o, !1),
            (g = m.onVnodeBeforeUpdate) && Rr(g, o, n, e),
            p && yn(n, e, o, "beforeUpdate"),
            o && Qo(o, !0);
            const v = s && "foreignObject" !== n.type;
            if (f ? O(e.dynamicChildren, f, c, o, r, v, l) : a || W(e, n, c, null, o, r, v, l, !1),
            u > 0) {
                if (16 & u)
                    P(c, n, d, m, o, r, s);
                else if (2 & u && d.class !== m.class && i(c, "class", null, m.class, s),
                4 & u && i(c, "style", d.style, m.style, s),
                8 & u) {
                    const t = n.dynamicProps;
                    for (let n = 0; n < t.length; n++) {
                        const l = t[n]
                          , a = d[l]
                          , u = m[l];
                        u === a && "value" !== l || i(c, l, a, u, s, e.children, o, r, X)
                    }
                }
                1 & u && e.children !== n.children && h(c, n.children)
            } else
                a || null != f || P(c, n, d, m, o, r, s);
            ((g = m.onVnodeUpdated) || p) && Xo((()=>{
                g && Rr(g, o, n, e),
                p && yn(n, e, o, "updated")
            }
            ), r)
        }
          , O = (e,t,n,o,r,s,l)=>{
            for (let i = 0; i < t.length; i++) {
                const a = e[i]
                  , c = t[i]
                  , u = a.el && (a.type === ar || !wr(a, c) || 70 & a.shapeFlag) ? m(a.el) : n;
                _(a, c, u, null, o, r, s, l, !0)
            }
        }
          , P = (e,n,o,r,s,l,a)=>{
            if (o !== r) {
                if (o !== t)
                    for (const t in o)
                        E(t) || t in r || i(e, t, o[t], null, a, n.children, s, l, X);
                for (const t in r) {
                    if (E(t))
                        continue;
                    const c = r[t]
                      , u = o[t];
                    c !== u && "value" !== t && i(e, t, u, c, a, n.children, s, l, X)
                }
                "value"in r && i(e, "value", o.value, r.value)
            }
        }
          , M = (e,t,n,o,r,l,i,a,c)=>{
            const f = t.el = e ? e.el : u("")
              , p = t.anchor = e ? e.anchor : u("");
            let {patchFlag: d, dynamicChildren: h, slotScopeIds: m} = t;
            m && (a = a ? a.concat(m) : m),
            null == e ? (s(f, n, o),
            s(p, n, o),
            F(t.children, n, p, r, l, i, a, c)) : d > 0 && 64 & d && h && e.dynamicChildren ? (O(e.dynamicChildren, h, n, r, l, i, a),
            (null != t.key || r && t === r.subTree) && tr(e, t, !0)) : W(e, t, n, p, r, l, i, a, c)
        }
          , V = (e,t,n,o,r,s,l,i,a)=>{
            t.slotScopeIds = i,
            null == e ? 512 & t.shapeFlag ? r.ctx.activate(t, n, o, l, a) : j(t, n, o, r, s, l, a) : U(e, t, a)
        }
          , j = (e,n,o,r,s,l,i)=>{
            const a = e.component = function(e, n, o) {
                const r = e.type
                  , s = (n ? n.appContext : e.appContext) || Ir
                  , l = {
                    uid: Mr++,
                    vnode: e,
                    type: r,
                    parent: n,
                    appContext: s,
                    root: null,
                    next: null,
                    subTree: null,
                    effect: null,
                    update: null,
                    scope: new Z(!0),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: n ? n.provides : Object.create(s.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: Mo(r, s),
                    emitsOptions: Gt(r, s),
                    emit: null,
                    emitted: null,
                    propsDefaults: t,
                    inheritAttrs: r.inheritAttrs,
                    ctx: t,
                    data: t,
                    props: t,
                    attrs: t,
                    slots: t,
                    refs: t,
                    setupState: t,
                    setupContext: null,
                    attrsProxy: null,
                    slotsProxy: null,
                    suspense: o,
                    suspenseId: o ? o.pendingId : 0,
                    asyncDep: null,
                    asyncResolved: !1,
                    isMounted: !1,
                    isUnmounted: !1,
                    isDeactivated: !1,
                    bc: null,
                    c: null,
                    bm: null,
                    m: null,
                    bu: null,
                    u: null,
                    um: null,
                    bum: null,
                    da: null,
                    a: null,
                    rtg: null,
                    rtc: null,
                    ec: null,
                    sp: null
                };
                return l.ctx = {
                    _: l
                },
                l.root = n ? n.root : l,
                l.emit = Kt.bind(null, l),
                e.ce && e.ce(l),
                l
            }(e, r, s);
            if (In(e) && (a.ctx.renderer = te),
            function(e, t=!1) {
                Wr = t;
                const {props: n, children: o} = e.vnode
                  , r = Dr(e);
                (function(e, t, n, o=!1) {
                    const r = {}
                      , s = {};
                    I(s, xr, 1),
                    e.propsDefaults = Object.create(null),
                    Ro(e, t, r, s);
                    for (const l in e.propsOptions[0])
                        l in r || (r[l] = void 0);
                    e.props = n ? o ? r : function(e) {
                        return ot(e, !1, $e, Ye, Ze)
                    }(r) : e.type.props ? r : s,
                    e.attrs = s
                }
                )(e, n, r, t),
                ((e,t)=>{
                    if (32 & e.vnode.shapeFlag) {
                        const n = t._;
                        n ? (e.slots = at(t),
                        I(t, "_", n)) : zo(t, e.slots = {})
                    } else
                        e.slots = {},
                        t && Ho(e, t);
                    I(e.slots, xr, 1)
                }
                )(e, o),
                r && function(e, t) {
                    const n = e.type;
                    e.accessCache = Object.create(null),
                    e.proxy = ct(new Proxy(e.ctx,mo));
                    const {setup: o} = n;
                    if (o) {
                        const n = e.setupContext = o.length > 1 ? function(e) {
                            const t = t=>{
                                e.exposed = t || {}
                            }
                            ;
                            return {
                                get attrs() {
                                    return function(e) {
                                        return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
                                            get: (t,n)=>(ge(e, 0, "$attrs"),
                                            t[n])
                                        }))
                                    }(e)
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: t
                            }
                        }(e) : null;
                        Ur(e),
                        he();
                        const r = At(o, e, 0, [e.props, n]);
                        if (me(),
                        Br(),
                        b(r)) {
                            if (r.then(Br, Br),
                            t)
                                return r.then((n=>{
                                    zr(e, n, t)
                                }
                                )).catch((t=>{
                                    Ft(t, e, 0)
                                }
                                ));
                            e.asyncDep = r
                        } else
                            zr(e, r, t)
                    } else
                        Hr(e, t)
                }(e, t),
                Wr = !1
            }(a),
            a.asyncDep) {
                if (s && s.registerDep(a, B),
                !e.el) {
                    const e = a.subTree = kr(ur);
                    x(null, e, n, o)
                }
            } else
                B(a, e, n, o, s, l, i)
        }
          , U = (e,t,n)=>{
            const o = t.component = e.component;
            if (function(e, t, n) {
                const {props: o, children: r, component: s} = e
                  , {props: l, children: i, patchFlag: a} = t
                  , c = s.emitsOptions;
                if (t.dirs || t.transition)
                    return !0;
                if (!(n && a >= 0))
                    return !(!r && !i || i && i.$stable) || o !== l && (o ? !l || sn(o, l, c) : !!l);
                if (1024 & a)
                    return !0;
                if (16 & a)
                    return o ? sn(o, l, c) : !!l;
                if (8 & a) {
                    const e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (l[n] !== o[n] && !Yt(c, n))
                            return !0
                    }
                }
                return !1
            }(e, t, n)) {
                if (o.asyncDep && !o.asyncResolved)
                    return void D(o, t, n);
                o.next = t,
                function(e) {
                    const t = Ot.indexOf(e);
                    t > Pt && Ot.splice(t, 1)
                }(o.update),
                o.update()
            } else
                t.el = e.el,
                o.vnode = t
        }
          , B = (e,t,n,o,r,s,l)=>{
            const i = e.effect = new ue((()=>{
                if (e.isMounted) {
                    let t, {next: n, bu: o, u: i, parent: a, vnode: c} = e, u = n;
                    Qo(e, !1),
                    n ? (n.el = c.el,
                    D(e, n, l)) : n = c,
                    o && R(o),
                    (t = n.props && n.props.onVnodeBeforeUpdate) && Rr(t, a, n, c),
                    Qo(e, !0);
                    const f = nn(e)
                      , p = e.subTree;
                    e.subTree = f,
                    _(p, f, m(p.el), Q(p), e, r, s),
                    n.el = f.el,
                    null === u && function({vnode: e, parent: t}, n) {
                        for (; t && t.subTree === e; )
                            (e = t.vnode).el = n,
                            t = t.parent
                    }(e, f.el),
                    i && Xo(i, r),
                    (t = n.props && n.props.onVnodeUpdated) && Xo((()=>Rr(t, a, n, c)), r)
                } else {
                    let l;
                    const {el: i, props: a} = t
                      , {bm: c, m: u, parent: f} = e
                      , p = On(t);
                    if (Qo(e, !1),
                    c && R(c),
                    !p && (l = a && a.onVnodeBeforeMount) && Rr(l, f, t),
                    Qo(e, !0),
                    i && oe) {
                        const n = ()=>{
                            e.subTree = nn(e),
                            oe(i, e.subTree, e, r, null)
                        }
                        ;
                        p ? t.type.__asyncLoader().then((()=>!e.isUnmounted && n())) : n()
                    } else {
                        const l = e.subTree = nn(e);
                        _(null, l, n, o, e, r, s),
                        t.el = l.el
                    }
                    if (u && Xo(u, r),
                    !p && (l = a && a.onVnodeMounted)) {
                        const e = t;
                        Xo((()=>Rr(l, f, e)), r)
                    }
                    (256 & t.shapeFlag || f && On(f.vnode) && 256 & f.vnode.shapeFlag) && e.a && Xo(e.a, r),
                    e.isMounted = !0,
                    t = n = o = null
                }
            }
            ),(()=>Ut(a)),e.scope)
              , a = e.update = ()=>i.run();
            a.id = e.uid,
            Qo(e, !0),
            a()
        }
          , D = (e,n,o)=>{
            n.component = e;
            const r = e.vnode.props;
            e.vnode = n,
            e.next = null,
            function(e, t, n, o) {
                const {props: r, attrs: s, vnode: {patchFlag: l}} = e
                  , i = at(r)
                  , [a] = e.propsOptions;
                let c = !1;
                if (!(o || l > 0) || 16 & l) {
                    let o;
                    Ro(e, t, r, s) && (c = !0);
                    for (const s in i)
                        t && (f(t, s) || (o = $(s)) !== s && f(t, o)) || (a ? !n || void 0 === n[s] && void 0 === n[o] || (r[s] = Io(a, i, s, void 0, e, !0)) : delete r[s]);
                    if (s !== i)
                        for (const e in s)
                            t && f(t, e) || (delete s[e],
                            c = !0)
                } else if (8 & l) {
                    const n = e.vnode.dynamicProps;
                    for (let o = 0; o < n.length; o++) {
                        let l = n[o];
                        if (Yt(e.emitsOptions, l))
                            continue;
                        const u = t[l];
                        if (a)
                            if (f(s, l))
                                u !== s[l] && (s[l] = u,
                                c = !0);
                            else {
                                const t = T(l);
                                r[t] = Io(a, i, t, u, e, !1)
                            }
                        else
                            u !== s[l] && (s[l] = u,
                            c = !0)
                    }
                }
                c && ye(e, "set", "$attrs")
            }(e, n.props, r, o),
            ((e,n,o)=>{
                const {vnode: r, slots: s} = e;
                let l = !0
                  , i = t;
                if (32 & r.shapeFlag) {
                    const e = n._;
                    e ? o && 1 === e ? l = !1 : (a(s, n),
                    o || 1 !== e || delete s._) : (l = !n.$stable,
                    zo(n, s)),
                    i = n
                } else
                    n && (Ho(e, n),
                    i = {
                        default: 1
                    });
                if (l)
                    for (const t in s)
                        Bo(t) || null != i[t] || delete s[t]
            }
            )(e, n.children, o),
            he(),
            Dt(),
            me()
        }
          , W = (e,t,n,o,r,s,l,i,a=!1)=>{
            const c = e && e.children
              , u = e ? e.shapeFlag : 0
              , f = t.children
              , {patchFlag: p, shapeFlag: d} = t;
            if (p > 0) {
                if (128 & p)
                    return void H(c, f, n, o, r, s, l, i, a);
                if (256 & p)
                    return void z(c, f, n, o, r, s, l, i, a)
            }
            8 & d ? (16 & u && X(c, r, s),
            f !== c && h(n, f)) : 16 & u ? 16 & d ? H(c, f, n, o, r, s, l, i, a) : X(c, r, s, !0) : (8 & u && h(n, ""),
            16 & d && F(f, n, o, r, s, l, i, a))
        }
          , z = (e,t,o,r,s,l,i,a,c)=>{
            const u = (e = e || n).length
              , f = (t = t || n).length
              , p = Math.min(u, f);
            let d;
            for (d = 0; d < p; d++) {
                const n = t[d] = c ? Or(t[d]) : Lr(t[d]);
                _(e[d], n, o, null, s, l, i, a, c)
            }
            u > f ? X(e, s, l, !0, !1, p) : F(t, o, r, s, l, i, a, c, p)
        }
          , H = (e,t,o,r,s,l,i,a,c)=>{
            let u = 0;
            const f = t.length;
            let p = e.length - 1
              , d = f - 1;
            for (; u <= p && u <= d; ) {
                const n = e[u]
                  , r = t[u] = c ? Or(t[u]) : Lr(t[u]);
                if (!wr(n, r))
                    break;
                _(n, r, o, null, s, l, i, a, c),
                u++
            }
            for (; u <= p && u <= d; ) {
                const n = e[p]
                  , r = t[d] = c ? Or(t[d]) : Lr(t[d]);
                if (!wr(n, r))
                    break;
                _(n, r, o, null, s, l, i, a, c),
                p--,
                d--
            }
            if (u > p) {
                if (u <= d) {
                    const e = d + 1
                      , n = e < f ? t[e].el : r;
                    for (; u <= d; )
                        _(null, t[u] = c ? Or(t[u]) : Lr(t[u]), o, n, s, l, i, a, c),
                        u++
                }
            } else if (u > d)
                for (; u <= p; )
                    K(e[u], s, l, !0),
                    u++;
            else {
                const h = u
                  , m = u
                  , g = new Map;
                for (u = m; u <= d; u++) {
                    const e = t[u] = c ? Or(t[u]) : Lr(t[u]);
                    null != e.key && g.set(e.key, u)
                }
                let v, y = 0;
                const b = d - m + 1;
                let w = !1
                  , x = 0;
                const C = new Array(b);
                for (u = 0; u < b; u++)
                    C[u] = 0;
                for (u = h; u <= p; u++) {
                    const n = e[u];
                    if (y >= b) {
                        K(n, s, l, !0);
                        continue
                    }
                    let r;
                    if (null != n.key)
                        r = g.get(n.key);
                    else
                        for (v = m; v <= d; v++)
                            if (0 === C[v - m] && wr(n, t[v])) {
                                r = v;
                                break
                            }
                    void 0 === r ? K(n, s, l, !0) : (C[r - m] = u + 1,
                    r >= x ? x = r : w = !0,
                    _(n, t[r], o, null, s, l, i, a, c),
                    y++)
                }
                const S = w ? function(e) {
                    const t = e.slice()
                      , n = [0];
                    let o, r, s, l, i;
                    const a = e.length;
                    for (o = 0; o < a; o++) {
                        const a = e[o];
                        if (0 !== a) {
                            if (r = n[n.length - 1],
                            e[r] < a) {
                                t[o] = r,
                                n.push(o);
                                continue
                            }
                            for (s = 0,
                            l = n.length - 1; s < l; )
                                i = s + l >> 1,
                                e[n[i]] < a ? s = i + 1 : l = i;
                            a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]),
                            n[s] = o)
                        }
                    }
                    for (s = n.length,
                    l = n[s - 1]; s-- > 0; )
                        n[s] = l,
                        l = t[l];
                    return n
                }(C) : n;
                for (v = S.length - 1,
                u = b - 1; u >= 0; u--) {
                    const e = m + u
                      , n = t[e]
                      , p = e + 1 < f ? t[e + 1].el : r;
                    0 === C[u] ? _(null, n, o, p, s, l, i, a, c) : w && (v < 0 || u !== S[v] ? q(n, o, p, 2) : v--)
                }
            }
        }
          , q = (e,t,n,o,r=null)=>{
            const {el: l, type: i, transition: a, children: c, shapeFlag: u} = e;
            if (6 & u)
                q(e.component.subTree, t, n, o);
            else if (128 & u)
                e.suspense.move(t, n, o);
            else if (64 & u)
                i.move(e, t, n, te);
            else if (i !== ar)
                if (i !== fr)
                    if (2 !== o && 1 & u && a)
                        if (0 === o)
                            a.beforeEnter(l),
                            s(l, t, n),
                            Xo((()=>a.enter(l)), r);
                        else {
                            const {leave: e, delayLeave: o, afterLeave: r} = a
                              , i = ()=>s(l, t, n)
                              , c = ()=>{
                                e(l, (()=>{
                                    i(),
                                    r && r()
                                }
                                ))
                            }
                            ;
                            o ? o(l, i, c) : c()
                        }
                    else
                        s(l, t, n);
                else
                    (({el: e, anchor: t},n,o)=>{
                        let r;
                        for (; e && e !== t; )
                            r = g(e),
                            s(e, n, o),
                            e = r;
                        s(t, n, o)
                    }
                    )(e, t, n);
            else {
                s(l, t, n);
                for (let e = 0; e < c.length; e++)
                    q(c[e], t, n, o);
                s(e.anchor, t, n)
            }
        }
          , K = (e,t,n,o=!1,r=!1)=>{
            const {type: s, props: l, ref: i, children: a, dynamicChildren: c, shapeFlag: u, patchFlag: f, dirs: p} = e;
            if (null != i && qo(i, null, n, e, !0),
            256 & u)
                return void t.ctx.deactivate(e);
            const d = 1 & u && p
              , h = !On(e);
            let m;
            if (h && (m = l && l.onVnodeBeforeUnmount) && Rr(m, t, e),
            6 & u)
                J(e.component, n, o);
            else {
                if (128 & u)
                    return void e.suspense.unmount(n, o);
                d && yn(e, null, t, "beforeUnmount"),
                64 & u ? e.type.remove(e, t, n, r, te, o) : c && (s !== ar || f > 0 && 64 & f) ? X(c, t, n, !1, !0) : (s === ar && 384 & f || !r && 16 & u) && X(a, t, n),
                o && G(e)
            }
            (h && (m = l && l.onVnodeUnmounted) || d) && Xo((()=>{
                m && Rr(m, t, e),
                d && yn(e, null, t, "unmounted")
            }
            ), n)
        }
          , G = e=>{
            const {type: t, el: n, anchor: o, transition: r} = e;
            if (t === ar)
                return void Y(n, o);
            if (t === fr)
                return void (({el: e, anchor: t})=>{
                    let n;
                    for (; e && e !== t; )
                        n = g(e),
                        l(e),
                        e = n;
                    l(t)
                }
                )(e);
            const s = ()=>{
                l(n),
                r && !r.persisted && r.afterLeave && r.afterLeave()
            }
            ;
            if (1 & e.shapeFlag && r && !r.persisted) {
                const {leave: t, delayLeave: o} = r
                  , l = ()=>t(n, s);
                o ? o(e.el, s, l) : l()
            } else
                s()
        }
          , Y = (e,t)=>{
            let n;
            for (; e !== t; )
                n = g(e),
                l(e),
                e = n;
            l(t)
        }
          , J = (e,t,n)=>{
            const {bum: o, scope: r, update: s, subTree: l, um: i} = e;
            o && R(o),
            r.stop(),
            s && (s.active = !1,
            K(l, e, t, n)),
            i && Xo(i, t),
            Xo((()=>{
                e.isUnmounted = !0
            }
            ), t),
            t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--,
            0 === t.deps && t.resolve())
        }
          , X = (e,t,n,o=!1,r=!1,s=0)=>{
            for (let l = s; l < e.length; l++)
                K(e[l], t, n, o, r)
        }
          , Q = e=>6 & e.shapeFlag ? Q(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : g(e.anchor || e.el)
          , ee = (e,t,n)=>{
            null == e ? t._vnode && K(t._vnode, null, null, !0) : _(t._vnode || null, e, t, null, null, null, n),
            Dt(),
            Wt(),
            t._vnode = e
        }
          , te = {
            p: _,
            um: K,
            m: q,
            r: G,
            mt: j,
            mc: F,
            pc: W,
            pbc: O,
            n: Q,
            o: e
        };
        let ne, oe;
        return r && ([ne,oe] = r(te)),
        {
            render: ee,
            hydrate: ne,
            createApp: $o(ee, ne)
        }
    }(e, Jo)
}
function Qo({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function er(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function tr(e, t, n=!1) {
    const o = e.children
      , r = t.children;
    if (p(o) && p(r))
        for (let s = 0; s < o.length; s++) {
            const e = o[s];
            let t = r[s];
            1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = r[s] = Or(r[s]),
            t.el = e.el),
            n || tr(e, t)),
            t.type === cr && (t.el = e.el)
        }
}
const nr = e=>e && (e.disabled || "" === e.disabled)
  , or = e=>"undefined" != typeof SVGElement && e instanceof SVGElement
  , rr = (e,t)=>{
    const n = e && e.to;
    return v(n) ? t ? t(n) : null : n
}
;
function sr(e, t, n, {o: {insert: o}, m: r}, s=2) {
    0 === s && o(e.targetAnchor, t, n);
    const {el: l, anchor: i, shapeFlag: a, children: c, props: u} = e
      , f = 2 === s;
    if (f && o(l, t, n),
    (!f || nr(u)) && 16 & a)
        for (let p = 0; p < c.length; p++)
            r(c[p], t, n, 2);
    f && o(i, t, n)
}
const lr = {
    __isTeleport: !0,
    process(e, t, n, o, r, s, l, i, a, c) {
        const {mc: u, pc: f, pbc: p, o: {insert: d, querySelector: h, createText: m}} = c
          , g = nr(t.props);
        let {shapeFlag: v, children: y, dynamicChildren: _} = t;
        if (null == e) {
            const e = t.el = m("")
              , c = t.anchor = m("");
            d(e, n, o),
            d(c, n, o);
            const f = t.target = rr(t.props, h)
              , p = t.targetAnchor = m("");
            f && (d(p, f),
            l = l || or(f));
            const _ = (e,t)=>{
                16 & v && u(y, e, t, r, s, l, i, a)
            }
            ;
            g ? _(n, c) : f && _(f, p)
        } else {
            t.el = e.el;
            const o = t.anchor = e.anchor
              , u = t.target = e.target
              , d = t.targetAnchor = e.targetAnchor
              , m = nr(e.props)
              , v = m ? n : u
              , y = m ? o : d;
            if (l = l || or(u),
            _ ? (p(e.dynamicChildren, _, v, r, s, l, i),
            tr(e, t, !0)) : a || f(e, t, v, y, r, s, l, i, !1),
            g)
                m ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sr(t, n, o, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const e = t.target = rr(t.props, h);
                e && sr(t, e, null, c, 0)
            } else
                m && sr(t, u, d, c, 1)
        }
        ir(t)
    },
    remove(e, t, n, o, {um: r, o: {remove: s}}, l) {
        const {shapeFlag: i, children: a, anchor: c, targetAnchor: u, target: f, props: p} = e;
        if (f && s(u),
        l && s(c),
        16 & i) {
            const e = l || !nr(p);
            for (let o = 0; o < a.length; o++) {
                const s = a[o];
                r(s, t, n, e, !!s.dynamicChildren)
            }
        }
    },
    move: sr,
    hydrate: function(e, t, n, o, r, s, {o: {nextSibling: l, parentNode: i, querySelector: a}}, c) {
        const u = t.target = rr(t.props, a);
        if (u) {
            const a = u._lpa || u.firstChild;
            if (16 & t.shapeFlag)
                if (nr(t.props))
                    t.anchor = c(l(e), t, i(e), n, o, r, s),
                    t.targetAnchor = a;
                else {
                    t.anchor = l(e);
                    let i = a;
                    for (; i; )
                        if (i = l(i),
                        i && 8 === i.nodeType && "teleport anchor" === i.data) {
                            t.targetAnchor = i,
                            u._lpa = t.targetAnchor && l(t.targetAnchor);
                            break
                        }
                    c(a, t, u, n, o, r, s)
                }
            ir(t)
        }
        return t.anchor && l(t.anchor)
    }
};
function ir(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            1 === n.nodeType && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const ar = Symbol.for("v-fgt")
  , cr = Symbol.for("v-txt")
  , ur = Symbol.for("v-cmt")
  , fr = Symbol.for("v-stc")
  , pr = [];
let dr = null;
function hr(e=!1) {
    pr.push(dr = e ? null : [])
}
let mr = 1;
function gr(e) {
    mr += e
}
function vr(e) {
    return e.dynamicChildren = mr > 0 ? dr || n : null,
    pr.pop(),
    dr = pr[pr.length - 1] || null,
    mr > 0 && dr && dr.push(e),
    e
}
function yr(e, t, n, o, r, s) {
    return vr(Er(e, t, n, o, r, s, !0))
}
function _r(e, t, n, o, r) {
    return vr(kr(e, t, n, o, r, !0))
}
function br(e) {
    return !!e && !0 === e.__v_isVNode
}
function wr(e, t) {
    return e.type === t.type && e.key === t.key
}
const xr = "__vInternal"
  , Cr = ({key: e})=>null != e ? e : null
  , Sr = ({ref: e, ref_key: t, ref_for: n})=>("number" == typeof e && (e = "" + e),
null != e ? v(e) || ht(e) || g(e) ? {
    i: Jt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Er(e, t=null, n=null, o=0, r=null, s=(e === ar ? 0 : 1), l=!1, i=!1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Cr(t),
        ref: t && Sr(t),
        scopeId: Xt,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Jt
    };
    return i ? (Pr(a, n),
    128 & s && e.normalize(a)) : n && (a.shapeFlag |= v(n) ? 8 : 16),
    mr > 0 && !l && dr && (a.patchFlag > 0 || 6 & s) && 32 !== a.patchFlag && dr.push(a),
    a
}
const kr = function(e, t=null, n=null, o=0, r=null, s=!1) {
    if (e && e !== ro || (e = ur),
    br(e)) {
        const o = Ar(e, t, !0);
        return n && Pr(o, n),
        mr > 0 && !s && dr && (6 & o.shapeFlag ? dr[dr.indexOf(e)] = o : dr.push(o)),
        o.patchFlag |= -2,
        o
    }
    var l;
    if (g(l = e) && "__vccOpts"in l && (e = e.__vccOpts),
    t) {
        t = function(e) {
            return e ? it(e) || xr in e ? a({}, e) : e : null
        }(t);
        let {class: e, style: n} = t;
        e && !v(e) && (t.class = z(e)),
        _(n) && (it(n) && !p(n) && (n = a({}, n)),
        t.style = j(n))
    }
    return Er(e, t, n, o, r, v(e) ? 1 : ln(e) ? 128 : e.__isTeleport ? 64 : _(e) ? 4 : g(e) ? 2 : 0, s, !0)
};
function Ar(e, t, n=!1) {
    const {props: o, ref: r, patchFlag: s, children: i} = e
      , a = t ? function(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (const e in o)
                if ("class" === e)
                    t.class !== o.class && (t.class = z([t.class, o.class]));
                else if ("style" === e)
                    t.style = j([t.style, o.style]);
                else if (l(e)) {
                    const n = t[e]
                      , r = o[e];
                    !r || n === r || p(n) && n.includes(r) || (t[e] = n ? [].concat(n, r) : r)
                } else
                    "" !== e && (t[e] = o[e])
        }
        return t
    }(o || {}, t) : o;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Cr(a),
        ref: t && t.ref ? n && r ? p(r) ? r.concat(Sr(t)) : [r, Sr(t)] : Sr(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ar ? -1 === s ? 16 : 16 | s : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ar(e.ssContent),
        ssFallback: e.ssFallback && Ar(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Tr(e=" ", t=0) {
    return kr(cr, null, e, t)
}
function Fr(e, t) {
    const n = kr(fr, null, e);
    return n.staticCount = t,
    n
}
function $r(e="", t=!1) {
    return t ? (hr(),
    _r(ur, null, e)) : kr(ur, null, e)
}
function Lr(e) {
    return null == e || "boolean" == typeof e ? kr(ur) : p(e) ? kr(ar, null, e.slice()) : "object" == typeof e ? Or(e) : kr(cr, null, String(e))
}
function Or(e) {
    return null === e.el && -1 !== e.patchFlag || e.memo ? e : Ar(e)
}
function Pr(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (null == t)
        t = null;
    else if (p(t))
        n = 16;
    else if ("object" == typeof t) {
        if (65 & o) {
            const n = t.default;
            return void (n && (n._c && (n._d = !1),
            Pr(e, n()),
            n._c && (n._d = !0)))
        }
        {
            n = 32;
            const o = t._;
            o || xr in t ? 3 === o && Jt && (1 === Jt.slots._ ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024)) : t._ctx = Jt
        }
    } else
        g(t) ? (t = {
            default: t,
            _ctx: Jt
        },
        n = 32) : (t = String(t),
        64 & o ? (n = 16,
        t = [Tr(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Rr(e, t, n, o=null) {
    Tt(e, t, 7, [n, o])
}
const Ir = To();
let Mr = 0
  , Nr = null;
const Vr = ()=>Nr || Jt;
let jr;
jr = e=>{
    Nr = e
}
;
const Ur = e=>{
    jr(e),
    e.scope.on()
}
  , Br = ()=>{
    Nr && Nr.scope.off(),
    jr(null)
}
;
function Dr(e) {
    return 4 & e.vnode.shapeFlag
}
let Wr = !1;
function zr(e, t, n) {
    g(t) ? e.render = t : _(t) && (e.setupState = wt(t)),
    Hr(e, n)
}
function Hr(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || o),
    Ur(e),
    he();
    try {
        !function(e) {
            const t = bo(e)
              , n = e.proxy
              , r = e.ctx;
            vo = !1,
            t.beforeCreate && yo(t.beforeCreate, e, "bc");
            const {data: s, computed: l, methods: i, watch: a, provide: c, inject: u, created: f, beforeMount: d, mounted: h, beforeUpdate: m, updated: v, activated: y, deactivated: b, beforeUnmount: w, unmounted: x, render: C, renderTracked: S, renderTriggered: E, errorCaptured: k, serverPrefetch: A, expose: T, inheritAttrs: F, components: $, directives: L} = t;
            if (u && function(e, t, n=o) {
                p(e) && (e = So(e));
                for (const o in e) {
                    const n = e[o];
                    let r;
                    r = _(n) ? "default"in n ? Po(n.from || o, n.default, !0) : Po(n.from || o) : Po(n),
                    ht(r) ? Object.defineProperty(t, o, {
                        enumerable: !0,
                        configurable: !0,
                        get: ()=>r.value,
                        set: e=>r.value = e
                    }) : t[o] = r
                }
            }(u, r, null),
            i)
                for (const o in i) {
                    const e = i[o];
                    g(e) && (r[o] = e.bind(n))
                }
            if (s) {
                const t = s.call(n, n);
                _(t) && (e.data = tt(t))
            }
            if (vo = !0,
            l)
                for (const p in l) {
                    const e = l[p]
                      , t = g(e) ? e.bind(n, n) : g(e.get) ? e.get.bind(n, n) : o
                      , s = !g(e) && g(e.set) ? e.set.bind(n) : o
                      , i = Gr({
                        get: t,
                        set: s
                    });
                    Object.defineProperty(r, p, {
                        enumerable: !0,
                        configurable: !0,
                        get: ()=>i.value,
                        set: e=>i.value = e
                    })
                }
            if (a)
                for (const o in a)
                    _o(a[o], r, n, o);
            if (c) {
                const e = g(c) ? c.call(n) : c;
                Reflect.ownKeys(e).forEach((t=>{
                    Oo(t, e[t])
                }
                ))
            }
            function O(e, t) {
                p(t) ? t.forEach((t=>e(t.bind(n)))) : t && e(t.bind(n))
            }
            if (f && yo(f, e, "c"),
            O(qn, d),
            O(Kn, h),
            O(Gn, m),
            O(Yn, v),
            O(Vn, y),
            O(jn, b),
            O(to, k),
            O(eo, S),
            O(Qn, E),
            O(Jn, w),
            O(Xn, x),
            O(Zn, A),
            p(T))
                if (T.length) {
                    const t = e.exposed || (e.exposed = {});
                    T.forEach((e=>{
                        Object.defineProperty(t, e, {
                            get: ()=>n[e],
                            set: t=>n[e] = t
                        })
                    }
                    ))
                } else
                    e.exposed || (e.exposed = {});
            C && e.render === o && (e.render = C),
            null != F && (e.inheritAttrs = F),
            $ && (e.components = $),
            L && (e.directives = L)
        }(e)
    } finally {
        me(),
        Br()
    }
}
function qr(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(wt(ct(e.exposed)),{
            get: (t,n)=>n in t ? t[n] : n in po ? po[n](e) : void 0,
            has: (e,t)=>t in e || t in po
        }))
}
function Kr(e, t=!0) {
    return g(e) ? e.displayName || e.name : e.name || t && e.__name
}
const Gr = (e,t)=>function(e, t, n=!1) {
    let r, s;
    const l = g(e);
    return l ? (r = e,
    s = o) : (r = e.get,
    s = e.set),
    new kt(r,s,l || !s,n)
}(e, 0, Wr);
function Yr(e, t, n) {
    const o = arguments.length;
    return 2 === o ? _(t) && !p(t) ? br(t) ? kr(e, null, [t]) : kr(e, t) : kr(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === o && br(n) && (n = [n]),
    kr(e, t, n))
}
const Jr = "3.3.7"
  , Xr = "undefined" != typeof document ? document : null
  , Zr = Xr && Xr.createElement("template")
  , Qr = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,o)=>{
        const r = t ? Xr.createElementNS("http://www.w3.org/2000/svg", e) : Xr.createElement(e, n ? {
            is: n
        } : void 0);
        return "select" === e && o && null != o.multiple && r.setAttribute("multiple", o.multiple),
        r
    }
    ,
    createText: e=>Xr.createTextNode(e),
    createComment: e=>Xr.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Xr.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, o, r, s) {
        const l = n ? n.previousSibling : t.lastChild;
        if (r && (r === s || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            r !== s && (r = r.nextSibling); )
                ;
        else {
            Zr.innerHTML = o ? `<svg>${e}</svg>` : e;
            const r = Zr.content;
            if (o) {
                const e = r.firstChild;
                for (; e.firstChild; )
                    r.appendChild(e.firstChild);
                r.removeChild(e)
            }
            t.insertBefore(r, n)
        }
        return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , es = "transition"
  , ts = "animation"
  , ns = Symbol("_vtc")
  , os = (e,{slots: t})=>Yr(Sn, as(e), t);
os.displayName = "Transition";
const rs = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , ss = os.props = a({}, Cn, rs)
  , ls = (e,t=[])=>{
    p(e) ? e.forEach((e=>e(...t))) : e && e(...t)
}
  , is = e=>!!e && (p(e) ? e.some((e=>e.length > 1)) : e.length > 1);
function as(e) {
    const t = {};
    for (const a in e)
        a in rs || (t[a] = e[a]);
    if (!1 === e.css)
        return t;
    const {name: n="v", type: o, duration: r, enterFromClass: s=`${n}-enter-from`, enterActiveClass: l=`${n}-enter-active`, enterToClass: i=`${n}-enter-to`, appearFromClass: c=s, appearActiveClass: u=l, appearToClass: f=i, leaveFromClass: p=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , m = function(e) {
        if (null == e)
            return null;
        if (_(e))
            return [cs(e.enter), cs(e.leave)];
        {
            const t = cs(e);
            return [t, t]
        }
    }(r)
      , g = m && m[0]
      , v = m && m[1]
      , {onBeforeEnter: y, onEnter: b, onEnterCancelled: w, onLeave: x, onLeaveCancelled: C, onBeforeAppear: S=y, onAppear: E=b, onAppearCancelled: k=w} = t
      , A = (e,t,n)=>{
        fs(e, t ? f : i),
        fs(e, t ? u : l),
        n && n()
    }
      , T = (e,t)=>{
        e._isLeaving = !1,
        fs(e, p),
        fs(e, h),
        fs(e, d),
        t && t()
    }
      , F = e=>(t,n)=>{
        const r = e ? E : b
          , l = ()=>A(t, e, n);
        ls(r, [t, l]),
        ps((()=>{
            fs(t, e ? c : s),
            us(t, e ? f : i),
            is(r) || hs(t, o, g, l)
        }
        ))
    }
    ;
    return a(t, {
        onBeforeEnter(e) {
            ls(y, [e]),
            us(e, s),
            us(e, l)
        },
        onBeforeAppear(e) {
            ls(S, [e]),
            us(e, c),
            us(e, u)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            const n = ()=>T(e, t);
            us(e, p),
            ys(),
            us(e, d),
            ps((()=>{
                e._isLeaving && (fs(e, p),
                us(e, h),
                is(x) || hs(e, o, v, n))
            }
            )),
            ls(x, [e, n])
        },
        onEnterCancelled(e) {
            A(e, !1),
            ls(w, [e])
        },
        onAppearCancelled(e) {
            A(e, !0),
            ls(k, [e])
        },
        onLeaveCancelled(e) {
            T(e),
            ls(C, [e])
        }
    })
}
function cs(e) {
    return (e=>{
        const t = v(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    }
    )(e)
}
function us(e, t) {
    t.split(/\s+/).forEach((t=>t && e.classList.add(t))),
    (e[ns] || (e[ns] = new Set)).add(t)
}
function fs(e, t) {
    t.split(/\s+/).forEach((t=>t && e.classList.remove(t)));
    const n = e[ns];
    n && (n.delete(t),
    n.size || (e[ns] = void 0))
}
function ps(e) {
    requestAnimationFrame((()=>{
        requestAnimationFrame(e)
    }
    ))
}
let ds = 0;
function hs(e, t, n, o) {
    const r = e._endId = ++ds
      , s = ()=>{
        r === e._endId && o()
    }
    ;
    if (n)
        return setTimeout(s, n);
    const {type: l, timeout: i, propCount: a} = ms(e, t);
    if (!l)
        return o();
    const c = l + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, p),
        s()
    }
      , p = t=>{
        t.target === e && ++u >= a && f()
    }
    ;
    setTimeout((()=>{
        u < a && f()
    }
    ), i + 1),
    e.addEventListener(c, p)
}
function ms(e, t) {
    const n = window.getComputedStyle(e)
      , o = e=>(n[e] || "").split(", ")
      , r = o(`${es}Delay`)
      , s = o(`${es}Duration`)
      , l = gs(r, s)
      , i = o(`${ts}Delay`)
      , a = o(`${ts}Duration`)
      , c = gs(i, a);
    let u = null
      , f = 0
      , p = 0;
    return t === es ? l > 0 && (u = es,
    f = l,
    p = s.length) : t === ts ? c > 0 && (u = ts,
    f = c,
    p = a.length) : (f = Math.max(l, c),
    u = f > 0 ? l > c ? es : ts : null,
    p = u ? u === es ? s.length : a.length : 0),
    {
        type: u,
        timeout: f,
        propCount: p,
        hasTransform: u === es && /\b(transform|all)(,|$)/.test(o(`${es}Property`).toString())
    }
}
function gs(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map(((t,n)=>vs(t) + vs(e[n]))))
}
function vs(e) {
    return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."))
}
function ys() {
    return document.body.offsetHeight
}
const _s = Symbol("_vod")
  , bs = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[_s] = "none" === e.style.display ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : ws(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e),
        ws(e, !0),
        o.enter(e)) : o.leave(e, (()=>{
            ws(e, !1)
        }
        )) : ws(e, t))
    },
    beforeUnmount(e, {value: t}) {
        ws(e, t)
    }
};
function ws(e, t) {
    e.style.display = t ? e[_s] : "none"
}
const xs = /\s*!important$/;
function Cs(e, t, n) {
    if (p(n))
        n.forEach((n=>Cs(e, t, n)));
    else if (null == n && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const o = function(e, t) {
            const n = Es[t];
            if (n)
                return n;
            let o = T(t);
            if ("filter" !== o && o in e)
                return Es[t] = o;
            o = L(o);
            for (let r = 0; r < Ss.length; r++) {
                const n = Ss[r] + o;
                if (n in e)
                    return Es[t] = n
            }
            return t
        }(e, t);
        xs.test(n) ? e.setProperty($(o), n.replace(xs, ""), "important") : e[o] = n
    }
}
const Ss = ["Webkit", "Moz", "ms"]
  , Es = {}
  , ks = "http://www.w3.org/1999/xlink";
function As(e, t, n, o) {
    e.addEventListener(t, n, o)
}
const Ts = Symbol("_vei");
const Fs = /(?:Once|Passive|Capture)$/;
let $s = 0;
const Ls = Promise.resolve()
  , Os = ()=>$s || (Ls.then((()=>$s = 0)),
$s = Date.now())
  , Ps = /^on[a-z]/
  , Rs = new WeakMap
  , Is = new WeakMap
  , Ms = Symbol("_moveCb")
  , Ns = Symbol("_enterCb")
  , Vs = {
    name: "TransitionGroup",
    props: a({}, ss, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Vr()
          , o = wn();
        let r, s;
        return Yn((()=>{
            if (!r.length)
                return;
            const t = e.moveClass || `${e.name || "v"}-move`;
            if (!function(e, t, n) {
                const o = e.cloneNode()
                  , r = e[ns];
                r && r.forEach((e=>{
                    e.split(/\s+/).forEach((e=>e && o.classList.remove(e)))
                }
                )),
                n.split(/\s+/).forEach((e=>e && o.classList.add(e))),
                o.style.display = "none";
                const s = 1 === t.nodeType ? t : t.parentNode;
                s.appendChild(o);
                const {hasTransform: l} = ms(o);
                return s.removeChild(o),
                l
            }(r[0].el, n.vnode.el, t))
                return;
            r.forEach(js),
            r.forEach(Us);
            const o = r.filter(Bs);
            ys(),
            o.forEach((e=>{
                const n = e.el
                  , o = n.style;
                us(n, t),
                o.transform = o.webkitTransform = o.transitionDuration = "";
                const r = n[Ms] = e=>{
                    e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener("transitionend", r),
                    n[Ms] = null,
                    fs(n, t))
                }
                ;
                n.addEventListener("transitionend", r)
            }
            ))
        }
        )),
        ()=>{
            const l = at(e)
              , i = as(l);
            let a = l.tag || ar;
            r = s,
            s = t.default ? $n(t.default()) : [];
            for (let e = 0; e < s.length; e++) {
                const t = s[e];
                null != t.key && Fn(t, kn(t, i, o, n))
            }
            if (r)
                for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    Fn(t, kn(t, i, o, n)),
                    Rs.set(t, t.el.getBoundingClientRect())
                }
            return kr(a, null, s)
        }
    }
};
function js(e) {
    const t = e.el;
    t[Ms] && t[Ms](),
    t[Ns] && t[Ns]()
}
function Us(e) {
    Is.set(e, e.el.getBoundingClientRect())
}
function Bs(e) {
    const t = Rs.get(e)
      , n = Is.get(e)
      , o = t.left - n.left
      , r = t.top - n.top;
    if (o || r) {
        const t = e.el.style;
        return t.transform = t.webkitTransform = `translate(${o}px,${r}px)`,
        t.transitionDuration = "0s",
        e
    }
}
const Ds = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return p(t) ? e=>R(t, e) : t
}
;
function Ws(e) {
    e.target.composing = !0
}
function zs(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Hs = Symbol("_assign")
  , qs = {
    created(e, {modifiers: {lazy: t, trim: n, number: o}}, r) {
        e[Hs] = Ds(r);
        const s = o || r.props && "number" === r.props.type;
        As(e, t ? "change" : "input", (t=>{
            if (t.target.composing)
                return;
            let o = e.value;
            n && (o = o.trim()),
            s && (o = M(o)),
            e[Hs](o)
        }
        )),
        n && As(e, "change", (()=>{
            e.value = e.value.trim()
        }
        )),
        t || (As(e, "compositionstart", Ws),
        As(e, "compositionend", zs),
        As(e, "change", zs))
    },
    mounted(e, {value: t}) {
        e.value = null == t ? "" : t
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: o, number: r}}, s) {
        if (e[Hs] = Ds(s),
        e.composing)
            return;
        if (document.activeElement === e && "range" !== e.type) {
            if (n)
                return;
            if (o && e.value.trim() === t)
                return;
            if ((r || "number" === e.type) && M(e.value) === t)
                return
        }
        const l = null == t ? "" : t;
        e.value !== l && (e.value = l)
    }
}
  , Ks = {
    deep: !0,
    created(e, t, n) {
        e[Hs] = Ds(n),
        As(e, "change", (()=>{
            const t = e._modelValue
              , n = Zs(e)
              , o = e.checked
              , r = e[Hs];
            if (p(t)) {
                const e = G(t, n)
                  , s = -1 !== e;
                if (o && !s)
                    r(t.concat(n));
                else if (!o && s) {
                    const n = [...t];
                    n.splice(e, 1),
                    r(n)
                }
            } else if (h(t)) {
                const e = new Set(t);
                o ? e.add(n) : e.delete(n),
                r(e)
            } else
                r(Qs(e, o))
        }
        ))
    },
    mounted: Gs,
    beforeUpdate(e, t, n) {
        e[Hs] = Ds(n),
        Gs(e, t, n)
    }
};
function Gs(e, {value: t, oldValue: n}, o) {
    e._modelValue = t,
    p(t) ? e.checked = G(t, o.props.value) > -1 : h(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = K(t, Qs(e, !0)))
}
const Ys = {
    created(e, {value: t}, n) {
        e.checked = K(t, n.props.value),
        e[Hs] = Ds(n),
        As(e, "change", (()=>{
            e[Hs](Zs(e))
        }
        ))
    },
    beforeUpdate(e, {value: t, oldValue: n}, o) {
        e[Hs] = Ds(o),
        t !== n && (e.checked = K(t, o.props.value))
    }
}
  , Js = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, o) {
        const r = h(t);
        As(e, "change", (()=>{
            const t = Array.prototype.filter.call(e.options, (e=>e.selected)).map((e=>n ? M(Zs(e)) : Zs(e)));
            e[Hs](e.multiple ? r ? new Set(t) : t : t[0])
        }
        )),
        e[Hs] = Ds(o)
    },
    mounted(e, {value: t}) {
        Xs(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Hs] = Ds(n)
    },
    updated(e, {value: t}) {
        Xs(e, t)
    }
};
function Xs(e, t) {
    const n = e.multiple;
    if (!n || p(t) || h(t)) {
        for (let o = 0, r = e.options.length; o < r; o++) {
            const r = e.options[o]
              , s = Zs(r);
            if (n)
                r.selected = p(t) ? G(t, s) > -1 : t.has(s);
            else if (K(Zs(r), t))
                return void (e.selectedIndex !== o && (e.selectedIndex = o))
        }
        n || -1 === e.selectedIndex || (e.selectedIndex = -1)
    }
}
function Zs(e) {
    return "_value"in e ? e._value : e.value
}
function Qs(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const el = ["ctrl", "shift", "alt", "meta"]
  , tl = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && 0 !== e.button,
    middle: e=>"button"in e && 1 !== e.button,
    right: e=>"button"in e && 2 !== e.button,
    exact: (e,t)=>el.some((n=>e[`${n}Key`] && !t.includes(n)))
}
  , nl = (e,t)=>(n,...o)=>{
    for (let e = 0; e < t.length; e++) {
        const o = tl[t[e]];
        if (o && o(n, t))
            return
    }
    return e(n, ...o)
}
  , ol = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , rl = (e,t)=>n=>{
    if (!("key"in n))
        return;
    const o = $(n.key);
    return t.some((e=>e === o || ol[e] === o)) ? e(n) : void 0
}
  , sl = a({
    patchProp: (e,t,n,o,r=!1,s,a,c,u)=>{
        var f, d, h;
        "class" === t ? function(e, t, n) {
            const o = e[ns];
            o && (t = (t ? [t, ...o] : [...o]).join(" ")),
            null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
        }(e, o, r) : "style" === t ? function(e, t, n) {
            const o = e.style
              , r = v(n);
            if (n && !r) {
                if (t && !v(t))
                    for (const e in t)
                        null == n[e] && Cs(o, e, "");
                for (const e in n)
                    Cs(o, e, n[e])
            } else {
                const s = o.display;
                r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
                _s in e && (o.display = s)
            }
        }(e, n, o) : l(t) ? i(t) || function(e, t, n, o, r=null) {
            const s = e[Ts] || (e[Ts] = {})
              , l = s[t];
            if (o && l)
                l.value = o;
            else {
                const [n,u] = function(e) {
                    let t;
                    if (Fs.test(e)) {
                        let n;
                        for (t = {}; n = e.match(Fs); )
                            e = e.slice(0, e.length - n[0].length),
                            t[n[0].toLowerCase()] = !0
                    }
                    return [":" === e[2] ? e.slice(3) : $(e.slice(2)), t]
                }(t);
                o ? As(e, n, s[t] = function(e, t) {
                    const n = e=>{
                        if (e._vts) {
                            if (e._vts <= n.attached)
                                return
                        } else
                            e._vts = Date.now();
                        Tt(function(e, t) {
                            if (p(t)) {
                                const n = e.stopImmediatePropagation;
                                return e.stopImmediatePropagation = ()=>{
                                    n.call(e),
                                    e._stopped = !0
                                }
                                ,
                                t.map((e=>t=>!t._stopped && e && e(t)))
                            }
                            return t
                        }(e, n.value), t, 5, [e])
                    }
                    ;
                    return n.value = e,
                    n.attached = Os(),
                    n
                }(o, r), u) : l && (i = n,
                a = l,
                c = u,
                e.removeEventListener(i, a, c),
                s[t] = void 0)
            }
            var i, a, c
        }(e, t, 0, o, a) : ("." === t[0] ? (t = t.slice(1),
        1) : "^" === t[0] ? (t = t.slice(1),
        0) : (f = e,
        d = t,
        h = o,
        r ? "innerHTML" === d || "textContent" === d || d in f && Ps.test(d) && g(h) : !("spellcheck" === d || "draggable" === d || "translate" === d || "form" === d || "list" === d && "INPUT" === f.tagName || "type" === d && "TEXTAREA" === f.tagName || Ps.test(d) && v(h) || !(d in f)))) ? function(e, t, n, o, r, s, l) {
            if ("innerHTML" === t || "textContent" === t)
                return o && l(o, r, s),
                void (e[t] = null == n ? "" : n);
            const i = e.tagName;
            if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
                e._value = n;
                const o = null == n ? "" : n;
                return ("OPTION" === i ? e.getAttribute("value") : e.value) !== o && (e.value = o),
                void (null == n && e.removeAttribute(t))
            }
            let a = !1;
            if ("" === n || null == n) {
                const o = typeof e[t];
                "boolean" === o ? n = q(n) : null == n && "string" === o ? (n = "",
                a = !0) : "number" === o && (n = 0,
                a = !0)
            }
            try {
                e[t] = n
            } catch (c) {}
            a && e.removeAttribute(t)
        }(e, t, o, s, a, c, u) : ("true-value" === t ? e._trueValue = o : "false-value" === t && (e._falseValue = o),
        function(e, t, n, o, r) {
            if (o && t.startsWith("xlink:"))
                null == n ? e.removeAttributeNS(ks, t.slice(6, t.length)) : e.setAttributeNS(ks, t, n);
            else {
                const o = H(t);
                null == n || o && !q(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
            }
        }(e, t, o, r))
    }
}, Qr);
let ll, il = !1;
const al = (...e)=>{
    const t = (ll = il ? ll : Zo(sl),
    il = !0,
    ll).createApp(...e)
      , {mount: n} = t;
    return t.mount = e=>{
        const t = function(e) {
            if (v(e))
                return document.querySelector(e);
            return e
        }(e);
        if (t)
            return n(t, !0, t instanceof SVGElement)
    }
    ,
    t
}
;
const cl = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [o,r] of t)
        n[o] = r;
    return n
}
  , ul = window.__VP_SITE_DATA__
  , fl = /^[a-z]+:/i
  , pl = /#.*$/
  , dl = /(index)?\.(md|html)$/
  , hl = "undefined" != typeof document
  , ml = {
    relativePath: "",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: {
        sidebar: !1,
        layout: "page"
    },
    lastUpdated: 0,
    isNotFound: !0
};
function gl(e) {
    return decodeURI(e).replace(pl, "").replace(dl, "")
}
function vl(e, t) {
    var n, o, r, s, l, i, a;
    const c = Object.keys(e.locales).find((e=>{
        return "root" !== e && (n = e,
        !fl.test(n)) && function(e, t, n=!1) {
            if (void 0 === t)
                return !1;
            if (e = gl(`/${e}`),
            n)
                return new RegExp(t).test(e);
            if (gl(t) !== e)
                return !1;
            const o = t.match(pl);
            return !o || (hl ? location.hash : "") === o[0]
        }(t, `/${e}/`, !0);
        var n
    }
    )) || "root";
    return Object.assign({}, e, {
        localeIndex: c,
        lang: (null == (n = e.locales[c]) ? void 0 : n.lang) ?? e.lang,
        dir: (null == (o = e.locales[c]) ? void 0 : o.dir) ?? e.dir,
        title: (null == (r = e.locales[c]) ? void 0 : r.title) ?? e.title,
        titleTemplate: (null == (s = e.locales[c]) ? void 0 : s.titleTemplate) ?? e.titleTemplate,
        description: (null == (l = e.locales[c]) ? void 0 : l.description) ?? e.description,
        head: _l(e.head, (null == (i = e.locales[c]) ? void 0 : i.head) ?? []),
        themeConfig: {
            ...e.themeConfig,
            ...null == (a = e.locales[c]) ? void 0 : a.themeConfig
        }
    })
}
function yl(e, t) {
    const n = t.title || e.title
      , o = t.titleTemplate ?? e.titleTemplate;
    if ("string" == typeof o && o.includes(":title"))
        return o.replace(/:title/g, n);
    const r = function(e, t) {
        if (!1 === t)
            return "";
        if (!0 === t || void 0 === t)
            return ` | ${e}`;
        if (e === t)
            return "";
        return ` | ${t}`
    }(e.title, o);
    return `${n}${r}`
}
function _l(e, t) {
    return [...e.filter((e=>!function(e, t) {
        const [n,o] = t;
        if ("meta" !== n)
            return !1;
        const r = Object.entries(o)[0];
        return null != r && e.some((([e,t])=>e === n && t[r[0]] === r[1]))
    }(t, e))), ...t]
}
const bl = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
  , wl = /^[a-z]:/i;
function xl(e) {
    const t = wl.exec(e)
      , n = t ? t[0] : "";
    return n + e.slice(n.length).replace(bl, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1")
}
const Cl = Symbol()
  , Sl = gt(ul);
function El(e) {
    const t = Gr((()=>vl(Sl.value, e.data.relativePath)));
    return {
        site: t,
        theme: Gr((()=>t.value.themeConfig)),
        page: Gr((()=>e.data)),
        frontmatter: Gr((()=>e.data.frontmatter)),
        params: Gr((()=>e.data.params)),
        lang: Gr((()=>t.value.lang)),
        dir: Gr((()=>t.value.dir)),
        localeIndex: Gr((()=>t.value.localeIndex || "root")),
        title: Gr((()=>yl(t.value, e.data))),
        description: Gr((()=>e.data.description || t.value.description)),
        isDark: mt(!1)
    }
}
function kl() {
    const e = Po(Cl);
    if (!e)
        throw new Error("vitepress data not properly injected in app");
    return e
}
function Al(e) {
    return fl.test(e) || e.startsWith(".") ? e : function(e, t) {
        return `${e}${t}`.replace(/\/+/g, "/")
    }(Sl.value.base, e)
}
function Tl(e) {
    let t = e.replace(/\.html$/, "");
    if (t = decodeURIComponent(t),
    t = t.replace(/\/$/, "/index"),
    hl) {
        const e = "/";
        t = xl(t.slice(e.length).replace(/\//g, "_") || "index") + ".md";
        let n = __VP_HASH_MAP__[t.toLowerCase()];
        if (n || (t = t.endsWith("_index.md") ? t.slice(0, -9) + ".md" : t.slice(0, -3) + "_index.md",
        n = __VP_HASH_MAP__[t.toLowerCase()]),
        !n)
            return null;
        t = `${e}assets/${t}.${n}.js`
    } else
        t = `./${xl(t.slice(1).replace(/\//g, "_"))}.md.js`;
    return t
}
let Fl = [];
function $l(e) {
    Fl.push(e),
    Xn((()=>{
        Fl = Fl.filter((t=>t !== e))
    }
    ))
}
const Ll = Symbol();
function Ol(e, t) {
    const n = tt({
        path: "/",
        component: null,
        data: ml
    })
      , o = {
        route: n,
        go: r
    };
    async function r(e=(hl ? location.href : "/")) {
        var t, n;
        if (!1 === await (null == (t = o.onBeforeRouteChange) ? void 0 : t.call(o, e)))
            return;
        const r = new URL(e,"http://a.com");
        Sl.value.cleanUrls || r.pathname.endsWith("/") || r.pathname.endsWith(".html") || (r.pathname += ".html",
        e = r.pathname + r.search + r.hash),
        hl && e !== location.href && (history.replaceState({
            scrollPosition: window.scrollY
        }, document.title),
        history.pushState(null, "", e)),
        await l(e),
        await (null == (n = o.onAfterRouteChanged) ? void 0 : n.call(o, e))
    }
    let s = null;
    async function l(r, i=0, a=!1) {
        var c;
        if (!1 === await (null == (c = o.onBeforePageLoad) ? void 0 : c.call(o, r)))
            return;
        const u = new URL(r,"http://a.com")
          , f = s = u.pathname;
        try {
            let t = await e(f);
            if (!t)
                throw new Error(`Page not found: ${f}`);
            if (s === f) {
                s = null;
                const {default: e, __pageData: o} = t;
                if (!e)
                    throw new Error(`Invalid route component: ${e}`);
                n.path = hl ? f : Al(f),
                n.component = ct(e),
                n.data = ct(o),
                hl && jt((()=>{
                    let e = Sl.value.base + o.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
                    if (Sl.value.cleanUrls || e.endsWith("/") || (e += ".html"),
                    e !== u.pathname && (u.pathname = e,
                    r = e + u.search + u.hash,
                    history.replaceState(null, "", r)),
                    u.hash && !i) {
                        let e = null;
                        try {
                            e = document.getElementById(decodeURIComponent(u.hash).slice(1))
                        } catch (t) {
                            console.warn(t)
                        }
                        if (e)
                            return void Il(e, u.hash)
                    }
                    window.scrollTo(0, i)
                }
                ))
            }
        } catch (p) {
            if (/fetch|Page not found/.test(p.message) || /^\/404(\.html|\/)?$/.test(r) || console.error(p),
            !a)
                try {
                    const e = await fetch(Sl.value.base + "hashmap.json");
                    return window.__VP_HASH_MAP__ = await e.json(),
                    void (await l(r, i, !0))
                } catch (d) {}
            s === f && (s = null,
            n.path = hl ? f : Al(f),
            n.component = t ? ct(t) : null,
            n.data = ml)
        }
    }
    return hl && (window.addEventListener("click", (e=>{
        if (e.target.closest("button"))
            return;
        const t = e.target.closest("a");
        if (t && !t.closest(".vp-raw") && (t instanceof SVGElement || !t.download)) {
            const {target: n} = t
              , {href: o, origin: s, pathname: l, hash: i, search: a} = new URL(t.href instanceof SVGAnimatedString ? t.href.animVal : t.href,t.baseURI)
              , c = window.location
              , u = l.match(/\.\w+$/);
            e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || n || s !== c.origin || u && ".html" !== u[0] || (e.preventDefault(),
            l === c.pathname && a === c.search ? i && (i !== c.hash && (history.pushState(null, "", i),
            window.dispatchEvent(new Event("hashchange"))),
            Il(t, i, t.classList.contains("header-anchor"))) : r(o))
        }
    }
    ), {
        capture: !0
    }),
    window.addEventListener("popstate", (e=>{
        l(location.href, e.state && e.state.scrollPosition || 0)
    }
    )),
    window.addEventListener("hashchange", (e=>{
        e.preventDefault()
    }
    ))),
    o
}
function Pl() {
    const e = Po(Ll);
    if (!e)
        throw new Error("useRouter() is called without provider.");
    return e
}
function Rl() {
    return Pl().route
}
function Il(e, t, n=!1) {
    let o = null;
    try {
        o = e.classList.contains("header-anchor") ? e : document.getElementById(decodeURIComponent(t).slice(1))
    } catch (r) {
        console.warn(r)
    }
    if (o) {
        let e = function() {
            !n || Math.abs(l - window.scrollY) > window.innerHeight ? window.scrollTo(0, l) : window.scrollTo({
                left: 0,
                top: l,
                behavior: "smooth"
            })
        };
        const t = Sl.value.scrollOffset;
        let r = 0;
        if ("number" == typeof t)
            r = t;
        else if ("string" == typeof t)
            r = Ml(t);
        else if (Array.isArray(t))
            for (const n of t) {
                const e = Ml(n);
                if (e) {
                    r = e;
                    break
                }
            }
        const s = parseInt(window.getComputedStyle(o).paddingTop, 10)
          , l = window.scrollY + o.getBoundingClientRect().top - r + s;
        requestAnimationFrame(e)
    }
}
function Ml(e) {
    const t = document.querySelector(e);
    if (!t)
        return 0;
    const n = t.getBoundingClientRect().bottom;
    return n < 0 ? 0 : n + 24
}
const Nl = ()=>Fl.forEach((e=>e()))
  , Vl = Ln({
    name: "VitePressContent",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e) {
        const t = Rl();
        return ()=>Yr(e.as, {
            style: {
                position: "relative"
            }
        }, [t.component ? Yr(t.component, {
            onVnodeMounted: Nl,
            onVnodeUpdated: Nl
        }) : "404 Page Not Found"])
    }
})
  , jl = {}
  , Ul = function(e, t, n) {
    if (!t || 0 === t.length)
        return e();
    const o = document.getElementsByTagName("link");
    return Promise.all(t.map((e=>{
        if ((e = function(e) {
            return "/" + e
        }(e))in jl)
            return;
        jl[e] = !0;
        const t = e.endsWith(".css")
          , r = t ? '[rel="stylesheet"]' : "";
        if (!!n)
            for (let n = o.length - 1; n >= 0; n--) {
                const r = o[n];
                if (r.href === e && (!t || "stylesheet" === r.rel))
                    return
            }
        else if (document.querySelector(`link[href="${e}"]${r}`))
            return;
        const s = document.createElement("link");
        return s.rel = t ? "stylesheet" : "modulepreload",
        t || (s.as = "script",
        s.crossOrigin = ""),
        s.href = e,
        document.head.appendChild(s),
        t ? new Promise(((t,n)=>{
            s.addEventListener("load", t),
            s.addEventListener("error", (()=>n(new Error(`Unable to preload CSS for ${e}`))))
        }
        )) : void 0
    }
    ))).then((()=>e())).catch((e=>{
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    ))
}
  , Bl = Ln({
    setup(e, {slots: t}) {
        const n = mt(!1);
        return Kn((()=>{
            n.value = !0
        }
        )),
        ()=>n.value && t.default ? t.default() : null
    }
});
function Dl() {
    hl && window.addEventListener("click", (e=>{
        var t, n;
        const o = e.target;
        if (o.matches(".vp-code-group input")) {
            const e = null == (t = o.parentElement) ? void 0 : t.parentElement
              , r = Array.from((null == e ? void 0 : e.querySelectorAll("input")) || []).indexOf(o)
              , s = null == e ? void 0 : e.querySelector('div[class*="language-"].active')
              , l = null == (n = null == e ? void 0 : e.querySelectorAll('div[class*="language-"]:not(.language-id)')) ? void 0 : n[r];
            s && l && s !== l && (s.classList.remove("active"),
            l.classList.add("active"))
        }
    }
    ))
}
function Wl() {
    if (hl) {
        const e = new WeakMap;
        window.addEventListener("click", (t=>{
            var n;
            const o = t.target;
            if (o.matches('div[class*="language-"] > button.copy')) {
                const t = o.parentElement
                  , r = null == (n = o.nextElementSibling) ? void 0 : n.nextElementSibling;
                if (!t || !r)
                    return;
                const s = /language-(shellscript|shell|bash|sh|zsh)/.test(t.className);
                let l = "";
                r.querySelectorAll("span.line:not(.diff.remove)").forEach((e=>l += (e.textContent || "") + "\n")),
                l = l.slice(0, -1),
                s && (l = l.replace(/^ *(\$|>) /gm, "").trim()),
                async function(e) {
                    try {
                        return navigator.clipboard.writeText(e)
                    } catch {
                        const t = document.createElement("textarea")
                          , n = document.activeElement;
                        t.value = e,
                        t.setAttribute("readonly", ""),
                        t.style.contain = "strict",
                        t.style.position = "absolute",
                        t.style.left = "-9999px",
                        t.style.fontSize = "12pt";
                        const o = document.getSelection()
                          , r = o ? o.rangeCount > 0 && o.getRangeAt(0) : null;
                        document.body.appendChild(t),
                        t.select(),
                        t.selectionStart = 0,
                        t.selectionEnd = e.length,
                        document.execCommand("copy"),
                        document.body.removeChild(t),
                        r && (o.removeAllRanges(),
                        o.addRange(r)),
                        n && n.focus()
                    }
                }(l).then((()=>{
                    o.classList.add("copied"),
                    clearTimeout(e.get(o));
                    const t = setTimeout((()=>{
                        o.classList.remove("copied"),
                        o.blur(),
                        e.delete(o)
                    }
                    ), 2e3);
                    e.set(o, t)
                }
                ))
            }
        }
        ))
    }
}
function zl(e, t) {
    let n = []
      , o = !0;
    cn((()=>{
        const r = e.data
          , s = t.value
          , l = r && r.description
          , i = r && r.frontmatter.head || [];
        document.title = yl(s, r);
        const a = l || s.description;
        let c = document.querySelector("meta[name=description]");
        var u;
        c ? c.setAttribute("content", a) : Hl(["meta", {
            name: "description",
            content: a
        }]),
        u = _l(s.head, i.filter((e=>{
            return !("meta" === (t = e)[0] && t[1] && "description" === t[1].name);
            var t
        }
        ))),
        o ? o = !1 : (n.forEach((e=>document.head.removeChild(e))),
        n = [],
        u.forEach((e=>{
            const t = Hl(e);
            document.head.appendChild(t),
            n.push(t)
        }
        )))
    }
    ))
}
function Hl([e,t,n]) {
    const o = document.createElement(e);
    for (const r in t)
        o.setAttribute(r, t[r]);
    return n && (o.innerHTML = n),
    o
}
const ql = new Set
  , Kl = ()=>document.createElement("link");
let Gl;
const Yl = hl && (Gl = Kl()) && Gl.relList && Gl.relList.supports && Gl.relList.supports("prefetch") ? e=>{
    const t = Kl();
    t.rel = "prefetch",
    t.href = e,
    document.head.appendChild(t)
}
: e=>{
    const t = new XMLHttpRequest;
    t.open("GET", e, t.withCredentials = !0),
    t.send()
}
;
function Jl() {
    if (!hl)
        return;
    if (!window.IntersectionObserver)
        return;
    let e;
    if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
        return;
    const t = window.requestIdleCallback || setTimeout;
    let n = null;
    const o = ()=>{
        n && n.disconnect(),
        n = new IntersectionObserver((e=>{
            e.forEach((e=>{
                if (e.isIntersecting) {
                    const t = e.target;
                    n.unobserve(t);
                    const {pathname: o} = t;
                    if (!ql.has(o)) {
                        ql.add(o);
                        const e = Tl(o);
                        e && Yl(e)
                    }
                }
            }
            ))
        }
        )),
        t((()=>{
            document.querySelectorAll("#app a").forEach((e=>{
                const {hostname: t, pathname: o} = new URL(e.href instanceof SVGAnimatedString ? e.href.animVal : e.href,e.baseURI)
                  , r = o.match(/\.\w+$/);
                r && ".html" !== r[0] || "_blank" !== e.target && t === location.hostname && (o !== location.pathname ? n.observe(e) : ql.add(o))
            }
            ))
        }
        ))
    }
    ;
    Kn(o);
    const r = Rl();
    pn((()=>r.path), o),
    Xn((()=>{
        n && n.disconnect()
    }
    ))
}
export {ee as $, en as A, _t as B, bs as C, j as D, Qt as E, Kn as F, Oo as G, Po as H, Tr as I, Rl as J, co as K, Er as L, Fr as M, Pl as N, mt as O, gt as P, Y as Q, kr as R, yr as S, tn as T, Vr as U, $r as V, ao as W, vn as X, jt as Y, Q as Z, cl as _, oo as a, cn as a0, Yn as a1, $l as a2, un as a3, hl as a4, zl as a5, Ll as a6, El as a7, Cl as a8, Vl as a9, Bl as aa, Sl as ab, al as ac, Ol as ad, Tl as ae, Jl as af, Wl as ag, Dl as ah, Jr as ai, St as aj, rl as ak, Jn as al, qs as b, Gr as c, ar as d, pn as e, Ln as f, Xn as g, nt as h, Pn as i, so as j, _r as k, Ul as l, Ys as m, Mn as n, lr as o, tt as p, z as q, Vs as r, os as s, Yr as t, Ks as u, Js as v, Al as w, nl as x, hr as y, kl as z};
