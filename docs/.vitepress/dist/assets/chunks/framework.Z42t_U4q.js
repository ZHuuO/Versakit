/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Hs(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const te = {},
  At = [],
  We = () => {},
  Bo = () => !1,
  en = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ds = (e) => e.startsWith('onUpdate:'),
  ue = Object.assign,
  $s = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ko = Object.prototype.hasOwnProperty,
  Q = (e, t) => Ko.call(e, t),
  W = Array.isArray,
  Rt = (e) => tn(e) === '[object Map]',
  ni = (e) => tn(e) === '[object Set]',
  cr = (e) => tn(e) === '[object Date]',
  q = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  De = (e) => typeof e == 'symbol',
  ee = (e) => e !== null && typeof e == 'object',
  si = (e) => (ee(e) || q(e)) && q(e.then) && q(e.catch),
  ri = Object.prototype.toString,
  tn = (e) => ri.call(e),
  qo = (e) => tn(e).slice(8, -1),
  ii = (e) => tn(e) === '[object Object]',
  js = (e) =>
    oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ot = Hs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Fn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Go = /-(\w)/g,
  Ne = Fn((e) => e.replace(Go, (t, n) => (n ? n.toUpperCase() : ''))),
  Xo = /\B([A-Z])/g,
  rt = Fn((e) => e.replace(Xo, '-$1').toLowerCase()),
  Hn = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  bn = Fn((e) => (e ? `on${Hn(e)}` : '')),
  nt = (e, t) => !Object.is(e, t),
  wn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  oi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Yo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  zo = (e) => {
    const t = oe(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let ar
const Dn = () =>
  ar ||
  (ar =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function $n(e) {
  if (W(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? el(s) : $n(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (oe(e) || ee(e)) return e
}
const Jo = /;(?![^(]*\))/g,
  Qo = /:([^]+)/,
  Zo = /\/\*[^]*?\*\//g
function el(e) {
  const t = {}
  return (
    e
      .replace(Zo, '')
      .split(Jo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Qo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function jn(e) {
  let t = ''
  if (oe(e)) t = e
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const s = jn(e[n])
      s && (t += s + ' ')
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function Cf(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !oe(t) && (e.class = jn(t)), n && (e.style = $n(n)), e
}
const tl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  nl = Hs(tl)
function li(e) {
  return !!e || e === ''
}
function sl(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = Cn(e[s], t[s])
  return n
}
function Cn(e, t) {
  if (e === t) return !0
  let n = cr(e),
    s = cr(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = De(e)), (s = De(t)), n || s)) return e === t
  if (((n = W(e)), (s = W(t)), n || s)) return n && s ? sl(e, t) : !1
  if (((n = ee(e)), (s = ee(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !Cn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const ci = (e) => !!(e && e.__v_isRef === !0),
  rl = (e) =>
    oe(e)
      ? e
      : e == null
        ? ''
        : W(e) || (ee(e) && (e.toString === ri || !q(e.toString)))
          ? ci(e)
            ? rl(e.value)
            : JSON.stringify(e, ai, 2)
          : String(e),
  ai = (e, t) =>
    ci(t)
      ? ai(e, t.value)
      : Rt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Zn(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : ni(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Zn(n)) }
          : De(t)
            ? Zn(t)
            : ee(t) && !W(t) && !ii(t)
              ? String(t)
              : t,
  Zn = (e, t = '') => {
    var n
    return De(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let we
class il {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = we
      try {
        return (we = this), t()
      } finally {
        we = n
      }
    }
  }
  on() {
    we = this
  }
  off() {
    we = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function fi() {
  return we
}
function ol(e, t = !1) {
  we && we.cleanups.push(e)
}
let se
const es = new WeakSet()
class ui {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      we && we.active && we.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), es.has(this) && (es.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || hi(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), fr(this), pi(this)
    const t = se,
      n = He
    ;(se = this), (He = !0)
    try {
      return this.fn()
    } finally {
      gi(this), (se = t), (He = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Us(t)
      ;(this.deps = this.depsTail = void 0),
        fr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? es.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    Ss(this) && this.run()
  }
  get dirty() {
    return Ss(this)
  }
}
let di = 0,
  Vt,
  kt
function hi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = kt), (kt = e)
    return
  }
  ;(e.next = Vt), (Vt = e)
}
function Vs() {
  di++
}
function ks() {
  if (--di > 0) return
  if (kt) {
    let t = kt
    for (kt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; Vt; ) {
    let t = Vt
    for (Vt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function pi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function gi(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), Us(s), ll(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function Ss(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (mi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function mi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === qt)
  )
    return
  e.globalVersion = qt
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ss(e))) {
    e.flags &= -3
    return
  }
  const n = se,
    s = He
  ;(se = e), (He = !0)
  try {
    pi(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || nt(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(se = n), (He = s), gi(e), (e.flags &= -3)
  }
}
function Us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Us(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function ll(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let He = !0
const yi = []
function it() {
  yi.push(He), (He = !1)
}
function ot() {
  const e = yi.pop()
  He = e === void 0 ? !0 : e
}
function fr(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = se
    se = void 0
    try {
      t()
    } finally {
      se = n
    }
  }
}
let qt = 0
class cl {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Vn {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!se || !He || se === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== se)
      (n = this.activeLink = new cl(se, this)),
        se.deps
          ? ((n.prevDep = se.depsTail),
            (se.depsTail.nextDep = n),
            (se.depsTail = n))
          : (se.deps = se.depsTail = n),
        vi(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = se.depsTail),
        (n.nextDep = void 0),
        (se.depsTail.nextDep = n),
        (se.depsTail = n),
        se.deps === n && (se.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, qt++, this.notify(t)
  }
  notify(t) {
    Vs()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      ks()
    }
  }
}
function vi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) vi(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const An = new WeakMap(),
  ht = Symbol(''),
  xs = Symbol(''),
  Gt = Symbol('')
function ye(e, t, n) {
  if (He && se) {
    let s = An.get(e)
    s || An.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Vn())), (r.map = s), (r.key = n)), r.track()
  }
}
function Ge(e, t, n, s, r, i) {
  const o = An.get(e)
  if (!o) {
    qt++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((Vs(), t === 'clear')) o.forEach(l)
  else {
    const c = W(e),
      f = c && js(n)
    if (c && n === 'length') {
      const a = Number(s)
      o.forEach((h, y) => {
        ;(y === 'length' || y === Gt || (!De(y) && y >= a)) && l(h)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(Gt)), t)
      ) {
        case 'add':
          c ? f && l(o.get('length')) : (l(o.get(ht)), Rt(e) && l(o.get(xs)))
          break
        case 'delete':
          c || (l(o.get(ht)), Rt(e) && l(o.get(xs)))
          break
        case 'set':
          Rt(e) && l(o.get(ht))
          break
      }
  }
  ks()
}
function al(e, t) {
  const n = An.get(e)
  return n && n.get(t)
}
function xt(e) {
  const t = J(e)
  return t === e ? t : (ye(t, 'iterate', Gt), Ie(e) ? t : t.map(ve))
}
function kn(e) {
  return ye((e = J(e)), 'iterate', Gt), e
}
const fl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ts(this, Symbol.iterator, ve)
  },
  concat(...e) {
    return xt(this).concat(...e.map((t) => (W(t) ? xt(t) : t)))
  },
  entries() {
    return ts(this, 'entries', (e) => ((e[1] = ve(e[1])), e))
  },
  every(e, t) {
    return Be(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Be(this, 'filter', e, t, (n) => n.map(ve), arguments)
  },
  find(e, t) {
    return Be(this, 'find', e, t, ve, arguments)
  },
  findIndex(e, t) {
    return Be(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Be(this, 'findLast', e, t, ve, arguments)
  },
  findLastIndex(e, t) {
    return Be(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Be(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ns(this, 'includes', e)
  },
  indexOf(...e) {
    return ns(this, 'indexOf', e)
  },
  join(e) {
    return xt(this).join(e)
  },
  lastIndexOf(...e) {
    return ns(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Be(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Ht(this, 'pop')
  },
  push(...e) {
    return Ht(this, 'push', e)
  },
  reduce(e, ...t) {
    return ur(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return ur(this, 'reduceRight', e, t)
  },
  shift() {
    return Ht(this, 'shift')
  },
  some(e, t) {
    return Be(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Ht(this, 'splice', e)
  },
  toReversed() {
    return xt(this).toReversed()
  },
  toSorted(e) {
    return xt(this).toSorted(e)
  },
  toSpliced(...e) {
    return xt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Ht(this, 'unshift', e)
  },
  values() {
    return ts(this, 'values', ve)
  },
}
function ts(e, t, n) {
  const s = kn(e),
    r = s[t]()
  return (
    s !== e &&
      !Ie(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const ul = Array.prototype
function Be(e, t, n, s, r, i) {
  const o = kn(e),
    l = o !== e && !Ie(e),
    c = o[t]
  if (c !== ul[t]) {
    const h = c.apply(e, i)
    return l ? ve(h) : h
  }
  let f = n
  o !== e &&
    (l
      ? (f = function (h, y) {
          return n.call(this, ve(h), y, e)
        })
      : n.length > 2 &&
        (f = function (h, y) {
          return n.call(this, h, y, e)
        }))
  const a = c.call(o, f, s)
  return l && r ? r(a) : a
}
function ur(e, t, n, s) {
  const r = kn(e)
  let i = n
  return (
    r !== e &&
      (Ie(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, ve(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function ns(e, t, n) {
  const s = J(e)
  ye(s, 'iterate', Gt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Ks(n[0]) ? ((n[0] = J(n[0])), s[t](...n)) : r
}
function Ht(e, t, n = []) {
  it(), Vs()
  const s = J(e)[t].apply(e, n)
  return ks(), ot(), s
}
const dl = Hs('__proto__,__v_isRef,__isVue'),
  _i = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(De),
  )
function hl(e) {
  De(e) || (e = String(e))
  const t = J(this)
  return ye(t, 'has', e), t.hasOwnProperty(e)
}
class bi {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? xl : Ei) : i ? xi : Si).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = W(t)
    if (!r) {
      let c
      if (o && (c = fl[n])) return c
      if (n === 'hasOwnProperty') return hl
    }
    const l = Reflect.get(t, n, pe(t) ? t : s)
    return (De(n) ? _i.has(n) : dl(n)) || (r || ye(t, 'get', n), i)
      ? l
      : pe(l)
        ? o && js(n)
          ? l
          : l.value
        : ee(l)
          ? r
            ? Un(l)
            : Pt(l)
          : l
  }
}
class wi extends bi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = bt(i)
      if (
        (!Ie(s) && !bt(s) && ((i = J(i)), (s = J(s))), !W(t) && pe(i) && !pe(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = W(t) && js(n) ? Number(n) < t.length : Q(t, n),
      l = Reflect.set(t, n, s, pe(t) ? t : r)
    return (
      t === J(r) && (o ? nt(s, i) && Ge(t, 'set', n, s) : Ge(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = Q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && Ge(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!De(n) || !_i.has(n)) && ye(t, 'has', n), s
  }
  ownKeys(t) {
    return ye(t, 'iterate', W(t) ? 'length' : ht), Reflect.ownKeys(t)
  }
}
class pl extends bi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const gl = new wi(),
  ml = new pl(),
  yl = new wi(!0)
const Es = (e) => e,
  fn = (e) => Reflect.getPrototypeOf(e)
function vl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = Rt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      f = r[e](...s),
      a = n ? Es : t ? Ts : ve
    return (
      !t && ye(i, 'iterate', c ? xs : ht),
      {
        next() {
          const { value: h, done: y } = f.next()
          return y
            ? { value: h, done: y }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: y }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function un(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function _l(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      e || (nt(r, l) && ye(o, 'get', r), ye(o, 'get', l))
      const { has: c } = fn(o),
        f = t ? Es : e ? Ts : ve
      if (c.call(o, r)) return f(i.get(r))
      if (c.call(o, l)) return f(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && ye(J(r), 'iterate', ht), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      return (
        e || (nt(r, l) && ye(o, 'has', r), ye(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        f = t ? Es : e ? Ts : ve
      return (
        !e && ye(c, 'iterate', ht),
        l.forEach((a, h) => r.call(i, f(a), f(h), o))
      )
    },
  }
  return (
    ue(
      n,
      e
        ? {
            add: un('add'),
            set: un('set'),
            delete: un('delete'),
            clear: un('clear'),
          }
        : {
            add(r) {
              !t && !Ie(r) && !bt(r) && (r = J(r))
              const i = J(this)
              return (
                fn(i).has.call(i, r) || (i.add(r), Ge(i, 'add', r, r)), this
              )
            },
            set(r, i) {
              !t && !Ie(i) && !bt(i) && (i = J(i))
              const o = J(this),
                { has: l, get: c } = fn(o)
              let f = l.call(o, r)
              f || ((r = J(r)), (f = l.call(o, r)))
              const a = c.call(o, r)
              return (
                o.set(r, i),
                f ? nt(i, a) && Ge(o, 'set', r, i) : Ge(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = J(this),
                { has: o, get: l } = fn(i)
              let c = o.call(i, r)
              c || ((r = J(r)), (c = o.call(i, r))), l && l.call(i, r)
              const f = i.delete(r)
              return c && Ge(i, 'delete', r, void 0), f
            },
            clear() {
              const r = J(this),
                i = r.size !== 0,
                o = r.clear()
              return i && Ge(r, 'clear', void 0, void 0), o
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = vl(r, e, t)
    }),
    n
  )
}
function Ws(e, t) {
  const n = _l(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Q(n, r) && r in s ? n : s, r, i)
}
const bl = { get: Ws(!1, !1) },
  wl = { get: Ws(!1, !0) },
  Sl = { get: Ws(!0, !1) }
const Si = new WeakMap(),
  xi = new WeakMap(),
  Ei = new WeakMap(),
  xl = new WeakMap()
function El(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Tl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : El(qo(e))
}
function Pt(e) {
  return bt(e) ? e : Bs(e, !1, gl, bl, Si)
}
function Cl(e) {
  return Bs(e, !1, yl, wl, xi)
}
function Un(e) {
  return Bs(e, !0, ml, Sl, Ei)
}
function Bs(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = Tl(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function pt(e) {
  return bt(e) ? pt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function bt(e) {
  return !!(e && e.__v_isReadonly)
}
function Ie(e) {
  return !!(e && e.__v_isShallow)
}
function Ks(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function Sn(e) {
  return !Q(e, '__v_skip') && Object.isExtensible(e) && oi(e, '__v_skip', !0), e
}
const ve = (e) => (ee(e) ? Pt(e) : e),
  Ts = (e) => (ee(e) ? Un(e) : e)
function pe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function fe(e) {
  return Ti(e, !1)
}
function qs(e) {
  return Ti(e, !0)
}
function Ti(e, t) {
  return pe(e) ? e : new Al(e, t)
}
class Al {
  constructor(t, n) {
    ;(this.dep = new Vn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : ve(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ie(t) || bt(t)
    ;(t = s ? t : J(t)),
      nt(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : ve(t)),
        this.dep.trigger())
  }
}
function Gs(e) {
  return pe(e) ? e.value : e
}
function le(e) {
  return q(e) ? e() : Gs(e)
}
const Rl = {
  get: (e, t, n) => (t === '__v_raw' ? e : Gs(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return pe(r) && !pe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Ci(e) {
  return pt(e) ? e : new Proxy(e, Rl)
}
class Ol {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Vn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;(this._get = s), (this._set = r)
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function Ml(e) {
  return new Ol(e)
}
function Af(e) {
  const t = W(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Ai(e, n)
  return t
}
class Pl {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return al(J(this._object), this._key)
  }
}
class Il {
  constructor(t) {
    ;(this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Ll(e, t, n) {
  return pe(e)
    ? e
    : q(e)
      ? new Il(e)
      : ee(e) && arguments.length > 1
        ? Ai(e, t, n)
        : fe(e)
}
function Ai(e, t, n) {
  const s = e[t]
  return pe(s) ? s : new Pl(e, t, n)
}
class Nl {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Vn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = qt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && se !== this))
      return hi(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return mi(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Fl(e, t, n = !1) {
  let s, r
  return q(e) ? (s = e) : ((s = e.get), (r = e.set)), new Nl(s, r, n)
}
const dn = {},
  Rn = new WeakMap()
let ut
function Hl(e, t = !1, n = ut) {
  if (n) {
    let s = Rn.get(n)
    s || Rn.set(n, (s = [])), s.push(e)
  }
}
function Dl(e, t, n = te) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    f = (g) => (r ? g : Ie(g) || r === !1 || r === 0 ? Xe(g, 1) : Xe(g))
  let a,
    h,
    y,
    v,
    x = !1,
    b = !1
  if (
    (pe(e)
      ? ((h = () => e.value), (x = Ie(e)))
      : pt(e)
        ? ((h = () => f(e)), (x = !0))
        : W(e)
          ? ((b = !0),
            (x = e.some((g) => pt(g) || Ie(g))),
            (h = () =>
              e.map((g) => {
                if (pe(g)) return g.value
                if (pt(g)) return f(g)
                if (q(g)) return c ? c(g, 2) : g()
              })))
          : q(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (y) {
                    it()
                    try {
                      y()
                    } finally {
                      ot()
                    }
                  }
                  const g = ut
                  ut = a
                  try {
                    return c ? c(e, 3, [v]) : e(v)
                  } finally {
                    ut = g
                  }
                })
            : (h = We),
    t && r)
  ) {
    const g = h,
      P = r === !0 ? 1 / 0 : r
    h = () => Xe(g(), P)
  }
  const j = fi(),
    L = () => {
      a.stop(), j && j.active && $s(j.effects, a)
    }
  if (i && t) {
    const g = t
    t = (...P) => {
      g(...P), L()
    }
  }
  let D = b ? new Array(e.length).fill(dn) : dn
  const p = (g) => {
    if (!(!(a.flags & 1) || (!a.dirty && !g)))
      if (t) {
        const P = a.run()
        if (r || x || (b ? P.some((U, O) => nt(U, D[O])) : nt(P, D))) {
          y && y()
          const U = ut
          ut = a
          try {
            const O = [P, D === dn ? void 0 : b && D[0] === dn ? [] : D, v]
            c ? c(t, 3, O) : t(...O), (D = P)
          } finally {
            ut = U
          }
        }
      } else a.run()
  }
  return (
    l && l(p),
    (a = new ui(h)),
    (a.scheduler = o ? () => o(p, !1) : p),
    (v = (g) => Hl(g, !1, a)),
    (y = a.onStop =
      () => {
        const g = Rn.get(a)
        if (g) {
          if (c) c(g, 4)
          else for (const P of g) P()
          Rn.delete(a)
        }
      }),
    t ? (s ? p(!0) : (D = a.run())) : o ? o(p.bind(null, !0), !0) : a.run(),
    (L.pause = a.pause.bind(a)),
    (L.resume = a.resume.bind(a)),
    (L.stop = L),
    L
  )
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, pe(e))) Xe(e.value, t, n)
  else if (W(e)) for (let s = 0; s < e.length; s++) Xe(e[s], t, n)
  else if (ni(e) || Rt(e))
    e.forEach((s) => {
      Xe(s, t, n)
    })
  else if (ii(e)) {
    for (const s in e) Xe(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Xe(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function nn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    sn(r, t, n)
  }
}
function $e(e, t, n, s) {
  if (q(e)) {
    const r = nn(e, t, n, s)
    return (
      r &&
        si(r) &&
        r.catch((i) => {
          sn(i, t, n)
        }),
      r
    )
  }
  if (W(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push($e(e[i], t, n, s))
    return r
  }
}
function sn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || te
  if (t) {
    let l = t.parent
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, c, f) === !1) return
      }
      l = l.parent
    }
    if (i) {
      it(), nn(i, null, 10, [e, c, f]), ot()
      return
    }
  }
  $l(e, n, r, s, o)
}
function $l(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Se = []
let ke = -1
const Mt = []
let Ze = null,
  Tt = 0
const Ri = Promise.resolve()
let On = null
function Wn(e) {
  const t = On || Ri
  return e ? t.then(this ? e.bind(this) : e) : t
}
function jl(e) {
  let t = ke + 1,
    n = Se.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Se[s],
      i = Xt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Xs(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e),
      n = Se[Se.length - 1]
    !n || (!(e.flags & 2) && t >= Xt(n)) ? Se.push(e) : Se.splice(jl(t), 0, e),
      (e.flags |= 1),
      Oi()
  }
}
function Oi() {
  On || (On = Ri.then(Mi))
}
function Vl(e) {
  W(e)
    ? Mt.push(...e)
    : Ze && e.id === -1
      ? Ze.splice(Tt + 1, 0, e)
      : e.flags & 1 || (Mt.push(e), (e.flags |= 1)),
    Oi()
}
function dr(e, t, n = ke + 1) {
  for (; n < Se.length; n++) {
    const s = Se[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Se.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function Mn(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)].sort((n, s) => Xt(n) - Xt(s))
    if (((Mt.length = 0), Ze)) {
      Ze.push(...t)
      return
    }
    for (Ze = t, Tt = 0; Tt < Ze.length; Tt++) {
      const n = Ze[Tt]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(Ze = null), (Tt = 0)
  }
}
const Xt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Mi(e) {
  try {
    for (ke = 0; ke < Se.length; ke++) {
      const t = Se[ke]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        nn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; ke < Se.length; ke++) {
      const t = Se[ke]
      t && (t.flags &= -2)
    }
    ;(ke = -1),
      (Se.length = 0),
      Mn(),
      (On = null),
      (Se.length || Mt.length) && Mi()
  }
}
let he = null,
  Pi = null
function Pn(e) {
  const t = he
  return (he = e), (Pi = (e && e.type.__scopeId) || null), t
}
function kl(e, t = he, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Er(-1)
    const i = Pn(t)
    let o
    try {
      o = e(...r)
    } finally {
      Pn(i), s._d && Er(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Rf(e, t) {
  if (he === null) return e
  const n = Xn(he),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = te] = t[r]
    i &&
      (q(i) && (i = { mounted: i, updated: i }),
      i.deep && Xe(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function Ue(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (it(), $e(c, n, 8, [e.el, l, e, t]), ot())
  }
}
const Ul = Symbol('_vte'),
  Ii = (e) => e.__isTeleport,
  et = Symbol('_leaveCb'),
  hn = Symbol('_enterCb')
function Wl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Lt(() => {
      e.isMounted = !0
    }),
    ji(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Oe = [Function, Array],
  Li = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Oe,
    onEnter: Oe,
    onAfterEnter: Oe,
    onEnterCancelled: Oe,
    onBeforeLeave: Oe,
    onLeave: Oe,
    onAfterLeave: Oe,
    onLeaveCancelled: Oe,
    onBeforeAppear: Oe,
    onAppear: Oe,
    onAfterAppear: Oe,
    onAppearCancelled: Oe,
  },
  Ni = (e) => {
    const t = e.subTree
    return t.component ? Ni(t.component) : t
  },
  Bl = {
    name: 'BaseTransition',
    props: Li,
    setup(e, { slots: t }) {
      const n = on(),
        s = Wl()
      return () => {
        const r = t.default && Di(t.default(), !0)
        if (!r || !r.length) return
        const i = Fi(r),
          o = J(e),
          { mode: l } = o
        if (s.isLeaving) return ss(i)
        const c = hr(i)
        if (!c) return ss(i)
        let f = Cs(c, o, s, n, (h) => (f = h))
        c.type !== _e && Yt(c, f)
        let a = n.subTree && hr(n.subTree)
        if (a && a.type !== _e && !dt(c, a) && Ni(n).type !== _e) {
          let h = Cs(a, o, s, n)
          if ((Yt(a, h), l === 'out-in' && c.type !== _e))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (a = void 0)
              }),
              ss(i)
            )
          l === 'in-out' && c.type !== _e
            ? (h.delayLeave = (y, v, x) => {
                const b = Hi(s, a)
                ;(b[String(a.key)] = a),
                  (y[et] = () => {
                    v(), (y[et] = void 0), delete f.delayedLeave, (a = void 0)
                  }),
                  (f.delayedLeave = () => {
                    x(), delete f.delayedLeave, (a = void 0)
                  })
              })
            : (a = void 0)
        } else a && (a = void 0)
        return i
      }
    },
  }
function Fi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== _e) {
        t = n
        break
      }
  }
  return t
}
const Kl = Bl
function Hi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function Cs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: y,
      onLeave: v,
      onAfterLeave: x,
      onLeaveCancelled: b,
      onBeforeAppear: j,
      onAppear: L,
      onAfterAppear: D,
      onAppearCancelled: p,
    } = t,
    g = String(e.key),
    P = Hi(n, e),
    U = (C, I) => {
      C && $e(C, s, 9, I)
    },
    O = (C, I) => {
      const A = I[1]
      U(C, I),
        W(C) ? C.every((_) => _.length <= 1) && A() : C.length <= 1 && A()
    },
    B = {
      mode: o,
      persisted: l,
      beforeEnter(C) {
        let I = c
        if (!n.isMounted)
          if (i) I = j || c
          else return
        C[et] && C[et](!0)
        const A = P[g]
        A && dt(e, A) && A.el[et] && A.el[et](), U(I, [C])
      },
      enter(C) {
        let I = f,
          A = a,
          _ = h
        if (!n.isMounted)
          if (i) (I = L || f), (A = D || a), (_ = p || h)
          else return
        let F = !1
        const Y = (C[hn] = (re) => {
          F ||
            ((F = !0),
            re ? U(_, [C]) : U(A, [C]),
            B.delayedLeave && B.delayedLeave(),
            (C[hn] = void 0))
        })
        I ? O(I, [C, Y]) : Y()
      },
      leave(C, I) {
        const A = String(e.key)
        if ((C[hn] && C[hn](!0), n.isUnmounting)) return I()
        U(y, [C])
        let _ = !1
        const F = (C[et] = (Y) => {
          _ ||
            ((_ = !0),
            I(),
            Y ? U(b, [C]) : U(x, [C]),
            (C[et] = void 0),
            P[A] === e && delete P[A])
        })
        ;(P[A] = e), v ? O(v, [C, F]) : F()
      },
      clone(C) {
        const I = Cs(C, t, n, s, r)
        return r && r(I), I
      },
    }
  return B
}
function ss(e) {
  if (rn(e)) return (e = st(e)), (e.children = null), e
}
function hr(e) {
  if (!rn(e)) return Ii(e.type) && e.children ? Fi(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && q(n.default)) return n.default()
  }
}
function Yt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Yt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Di(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === xe
      ? (o.patchFlag & 128 && r++, (s = s.concat(Di(o.children, t, l))))
      : (t || o.type !== _e) && s.push(l != null ? st(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Ys(e, t) {
  return q(e) ? ue({ name: e.name }, t, { setup: e }) : e
}
function zs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function zt(e, t, n, s, r = !1) {
  if (W(e)) {
    e.forEach((x, b) => zt(x, t && (W(t) ? t[b] : t), n, s, r))
    return
  }
  if (gt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      zt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Xn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    a = l.refs === te ? (l.refs = {}) : l.refs,
    h = l.setupState,
    y = J(h),
    v = h === te ? () => !1 : (x) => Q(y, x)
  if (
    (f != null &&
      f !== c &&
      (oe(f)
        ? ((a[f] = null), v(f) && (h[f] = null))
        : pe(f) && (f.value = null)),
    q(c))
  )
    nn(c, l, 12, [o, a])
  else {
    const x = oe(c),
      b = pe(c)
    if (x || b) {
      const j = () => {
        if (e.f) {
          const L = x ? (v(c) ? h[c] : a[c]) : c.value
          r
            ? W(L) && $s(L, i)
            : W(L)
              ? L.includes(i) || L.push(i)
              : x
                ? ((a[c] = [i]), v(c) && (h[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          x
            ? ((a[c] = o), v(c) && (h[c] = o))
            : b && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((j.id = -1), Ae(j, n)) : j()
    }
  }
}
let pr = !1
const Et = () => {
    pr ||
      (console.error('Hydration completed but contains mismatches.'), (pr = !0))
  },
  ql = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Gl = (e) => e.namespaceURI.includes('MathML'),
  pn = (e) => {
    if (e.nodeType === 1) {
      if (ql(e)) return 'svg'
      if (Gl(e)) return 'mathml'
    }
  },
  Ct = (e) => e.nodeType === 8
function Xl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: f,
      },
    } = e,
    a = (p, g) => {
      if (!g.hasChildNodes()) {
        n(null, p, g), Mn(), (g._vnode = p)
        return
      }
      h(g.firstChild, p, null, null, null), Mn(), (g._vnode = p)
    },
    h = (p, g, P, U, O, B = !1) => {
      B = B || !!g.dynamicChildren
      const C = Ct(p) && p.data === '[',
        I = () => b(p, g, P, U, O, C),
        { type: A, ref: _, shapeFlag: F, patchFlag: Y } = g
      let re = p.nodeType
      ;(g.el = p), Y === -2 && ((B = !1), (g.dynamicChildren = null))
      let V = null
      switch (A) {
        case vt:
          re !== 3
            ? g.children === ''
              ? (c((g.el = r('')), o(p), p), (V = p))
              : (V = I())
            : (p.data !== g.children && (Et(), (p.data = g.children)),
              (V = i(p)))
          break
        case _e:
          D(p)
            ? ((V = i(p)), L((g.el = p.content.firstChild), p, P))
            : re !== 8 || C
              ? (V = I())
              : (V = i(p))
          break
        case Wt:
          if ((C && ((p = i(p)), (re = p.nodeType)), re === 1 || re === 3)) {
            V = p
            const X = !g.children.length
            for (let $ = 0; $ < g.staticCount; $++)
              X && (g.children += V.nodeType === 1 ? V.outerHTML : V.data),
                $ === g.staticCount - 1 && (g.anchor = V),
                (V = i(V))
            return C ? i(V) : V
          } else I()
          break
        case xe:
          C ? (V = x(p, g, P, U, O, B)) : (V = I())
          break
        default:
          if (F & 1)
            (re !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !D(p)
              ? (V = I())
              : (V = y(p, g, P, U, O, B))
          else if (F & 6) {
            g.slotScopeIds = O
            const X = o(p)
            if (
              (C
                ? (V = j(p))
                : Ct(p) && p.data === 'teleport start'
                  ? (V = j(p, p.data, 'teleport end'))
                  : (V = i(p)),
              t(g, X, null, P, U, pn(X), B),
              gt(g) && !g.type.__asyncResolved)
            ) {
              let $
              C
                ? (($ = ce(xe)),
                  ($.anchor = V ? V.previousSibling : X.lastChild))
                : ($ = p.nodeType === 3 ? go('') : ce('div')),
                ($.el = p),
                (g.component.subTree = $)
            }
          } else
            F & 64
              ? re !== 8
                ? (V = I())
                : (V = g.type.hydrate(p, g, P, U, O, B, e, v))
              : F & 128 &&
                (V = g.type.hydrate(p, g, P, U, pn(o(p)), O, B, e, h))
      }
      return _ != null && zt(_, null, U, g), V
    },
    y = (p, g, P, U, O, B) => {
      B = B || !!g.dynamicChildren
      const {
          type: C,
          props: I,
          patchFlag: A,
          shapeFlag: _,
          dirs: F,
          transition: Y,
        } = g,
        re = C === 'input' || C === 'option'
      if (re || A !== -1) {
        F && Ue(g, null, P, 'created')
        let V = !1
        if (D(p)) {
          V = no(null, Y) && P && P.vnode.props && P.vnode.props.appear
          const $ = p.content.firstChild
          V && Y.beforeEnter($), L($, p, P), (g.el = p = $)
        }
        if (_ & 16 && !(I && (I.innerHTML || I.textContent))) {
          let $ = v(p.firstChild, g, p, P, U, O, B)
          for (; $; ) {
            gn(p, 1) || Et()
            const ae = $
            ;($ = $.nextSibling), l(ae)
          }
        } else if (_ & 8) {
          let $ = g.children
          $[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            ($ = $.slice(1)),
            p.textContent !== $ &&
              (gn(p, 0) || Et(), (p.textContent = g.children))
        }
        if (I) {
          if (re || !B || A & 48) {
            const $ = p.tagName.includes('-')
            for (const ae in I)
              ((re && (ae.endsWith('value') || ae === 'indeterminate')) ||
                (en(ae) && !Ot(ae)) ||
                ae[0] === '.' ||
                $) &&
                s(p, ae, null, I[ae], void 0, P)
          } else if (I.onClick) s(p, 'onClick', null, I.onClick, void 0, P)
          else if (A & 4 && pt(I.style)) for (const $ in I.style) I.style[$]
        }
        let X
        ;(X = I && I.onVnodeBeforeMount) && Me(X, P, g),
          F && Ue(g, null, P, 'beforeMount'),
          ((X = I && I.onVnodeMounted) || F || V) &&
            fo(() => {
              X && Me(X, P, g), V && Y.enter(p), F && Ue(g, null, P, 'mounted')
            }, U)
      }
      return p.nextSibling
    },
    v = (p, g, P, U, O, B, C) => {
      C = C || !!g.dynamicChildren
      const I = g.children,
        A = I.length
      for (let _ = 0; _ < A; _++) {
        const F = C ? I[_] : (I[_] = Pe(I[_])),
          Y = F.type === vt
        p
          ? (Y &&
              !C &&
              _ + 1 < A &&
              Pe(I[_ + 1]).type === vt &&
              (c(r(p.data.slice(F.children.length)), P, i(p)),
              (p.data = F.children)),
            (p = h(p, F, U, O, B, C)))
          : Y && !F.children
            ? c((F.el = r('')), P)
            : (gn(P, 1) || Et(), n(null, F, P, null, U, O, pn(P), B))
      }
      return p
    },
    x = (p, g, P, U, O, B) => {
      const { slotScopeIds: C } = g
      C && (O = O ? O.concat(C) : C)
      const I = o(p),
        A = v(i(p), g, I, P, U, O, B)
      return A && Ct(A) && A.data === ']'
        ? i((g.anchor = A))
        : (Et(), c((g.anchor = f(']')), I, A), A)
    },
    b = (p, g, P, U, O, B) => {
      if ((gn(p.parentElement, 1) || Et(), (g.el = null), B)) {
        const A = j(p)
        for (;;) {
          const _ = i(p)
          if (_ && _ !== A) l(_)
          else break
        }
      }
      const C = i(p),
        I = o(p)
      return (
        l(p),
        n(null, g, I, C, P, U, pn(I), O),
        P && ((P.vnode.el = g.el), co(P, g.el)),
        C
      )
    },
    j = (p, g = '[', P = ']') => {
      let U = 0
      for (; p; )
        if (((p = i(p)), p && Ct(p) && (p.data === g && U++, p.data === P))) {
          if (U === 0) return i(p)
          U--
        }
      return p
    },
    L = (p, g, P) => {
      const U = g.parentNode
      U && U.replaceChild(p, g)
      let O = P
      for (; O; )
        O.vnode.el === g && (O.vnode.el = O.subTree.el = p), (O = O.parent)
    },
    D = (p) => p.nodeType === 1 && p.tagName === 'TEMPLATE'
  return [a, h]
}
const gr = 'data-allow-mismatch',
  Yl = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function gn(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(gr); ) e = e.parentElement
  const n = e && e.getAttribute(gr)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(Yl[t])
  }
}
Dn().requestIdleCallback
Dn().cancelIdleCallback
function zl(e, t) {
  if (Ct(e) && e.data === '[') {
    let n = 1,
      s = e.nextSibling
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1) break
      } else if (Ct(s))
        if (s.data === ']') {
          if (--n === 0) break
        } else s.data === '[' && n++
      s = s.nextSibling
    }
  } else t(e)
}
const gt = (e) => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function Of(e) {
  q(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: o,
    suspensible: l = !0,
    onError: c,
  } = e
  let f = null,
    a,
    h = 0
  const y = () => (h++, (f = null), v()),
    v = () => {
      let x
      return (
        f ||
        (x = f =
          t()
            .catch((b) => {
              if (((b = b instanceof Error ? b : new Error(String(b))), c))
                return new Promise((j, L) => {
                  c(
                    b,
                    () => j(y()),
                    () => L(b),
                    h + 1,
                  )
                })
              throw b
            })
            .then((b) =>
              x !== f && f
                ? f
                : (b &&
                    (b.__esModule || b[Symbol.toStringTag] === 'Module') &&
                    (b = b.default),
                  (a = b),
                  b),
            ))
      )
    }
  return Ys({
    name: 'AsyncComponentWrapper',
    __asyncLoader: v,
    __asyncHydrate(x, b, j) {
      const L = i
        ? () => {
            const D = i(j, (p) => zl(x, p))
            D && (b.bum || (b.bum = [])).push(D)
          }
        : j
      a ? L() : v().then(() => !b.isUnmounted && L())
    },
    get __asyncResolved() {
      return a
    },
    setup() {
      const x = de
      if ((zs(x), a)) return () => rs(a, x)
      const b = (p) => {
        ;(f = null), sn(p, x, 13, !s)
      }
      if ((l && x.suspense) || It)
        return v()
          .then((p) => () => rs(p, x))
          .catch((p) => (b(p), () => (s ? ce(s, { error: p }) : null)))
      const j = fe(!1),
        L = fe(),
        D = fe(!!r)
      return (
        r &&
          setTimeout(() => {
            D.value = !1
          }, r),
        o != null &&
          setTimeout(() => {
            if (!j.value && !L.value) {
              const p = new Error(`Async component timed out after ${o}ms.`)
              b(p), (L.value = p)
            }
          }, o),
        v()
          .then(() => {
            ;(j.value = !0), x.parent && rn(x.parent.vnode) && x.parent.update()
          })
          .catch((p) => {
            b(p), (L.value = p)
          }),
        () => {
          if (j.value && a) return rs(a, x)
          if (L.value && s) return ce(s, { error: L.value })
          if (n && !D.value) return ce(n)
        }
      )
    },
  })
}
function rs(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode,
    o = ce(e, s, r)
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o
}
const rn = (e) => e.type.__isKeepAlive
function Jl(e, t) {
  $i(e, 'a', t)
}
function Ql(e, t) {
  $i(e, 'da', t)
}
function $i(e, t, n = de) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Bn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) rn(r.parent.vnode) && Zl(s, t, n, r), (r = r.parent)
  }
}
function Zl(e, t, n, s) {
  const r = Bn(t, e, s, !0)
  Kn(() => {
    $s(s[t], r)
  }, n)
}
function Bn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          it()
          const l = ln(n),
            c = $e(t, n, e, o)
          return l(), ot(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const Je =
    (e) =>
    (t, n = de) => {
      ;(!It || e === 'sp') && Bn(e, (...s) => t(...s), n)
    },
  ec = Je('bm'),
  Lt = Je('m'),
  tc = Je('bu'),
  nc = Je('u'),
  ji = Je('bum'),
  Kn = Je('um'),
  sc = Je('sp'),
  rc = Je('rtg'),
  ic = Je('rtc')
function oc(e, t = de) {
  Bn('ec', e, t)
}
const Js = 'components',
  lc = 'directives'
function Mf(e, t) {
  return Qs(Js, e, !0, t) || e
}
const Vi = Symbol.for('v-ndc')
function Pf(e) {
  return oe(e) ? Qs(Js, e, !1) || e : e || Vi
}
function If(e) {
  return Qs(lc, e)
}
function Qs(e, t, n = !0, s = !1) {
  const r = he || de
  if (r) {
    const i = r.type
    if (e === Js) {
      const l = Bc(i, !1)
      if (l && (l === t || l === Ne(t) || l === Hn(Ne(t)))) return i
    }
    const o = mr(r[e] || i[e], t) || mr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function mr(e, t) {
  return e && (e[t] || e[Ne(t)] || e[Hn(Ne(t))])
}
function Lf(e, t, n, s) {
  let r
  const i = n,
    o = W(e)
  if (o || oe(e)) {
    const l = o && pt(e)
    let c = !1
    l && ((c = !Ie(e)), (e = kn(e))), (r = new Array(e.length))
    for (let f = 0, a = e.length; f < a; f++)
      r[f] = t(c ? ve(e[f]) : e[f], f, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, i)
      }
    }
  else r = []
  return r
}
function Nf(e, t, n = {}, s, r) {
  if (he.ce || (he.parent && gt(he.parent) && he.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      Ps(),
      Is(xe, null, [ce('slot', n, s && s())], 64)
    )
  let i = e[t]
  i && i._c && (i._d = !1), Ps()
  const o = i && ki(i(n)),
    l = n.key || (o && o.key),
    c = Is(
      xe,
      { key: (l && !De(l) ? l : `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
    i && i._c && (i._d = !0),
    c
  )
}
function ki(e) {
  return e.some((t) =>
    Qt(t) ? !(t.type === _e || (t.type === xe && !ki(t.children))) : !0,
  )
    ? e
    : null
}
function Ff(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : bn(s)] = e[s]
  return n
}
const As = (e) => (e ? (mo(e) ? Xn(e) : As(e.parent)) : null),
  Ut = ue(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Xs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Wn.bind(e.proxy)),
    $watch: (e) => Rc.bind(e),
  }),
  is = (e, t) => e !== te && !e.__isScriptSetup && Q(e, t),
  cc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e
      let f
      if (t[0] !== '$') {
        const v = o[t]
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (is(s, t)) return (o[t] = 1), s[t]
          if (r !== te && Q(r, t)) return (o[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && Q(f, t)) return (o[t] = 3), i[t]
          if (n !== te && Q(n, t)) return (o[t] = 4), n[t]
          Rs && (o[t] = 0)
        }
      }
      const a = Ut[t]
      let h, y
      if (a) return t === '$attrs' && ye(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== te && Q(n, t)) return (o[t] = 4), n[t]
      if (((y = c.config.globalProperties), Q(y, t))) return y[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return is(r, t)
        ? ((r[t] = n), !0)
        : s !== te && Q(s, t)
          ? ((s[t] = n), !0)
          : Q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== te && Q(e, o)) ||
        is(t, o) ||
        ((l = i[0]) && Q(l, o)) ||
        Q(s, o) ||
        Q(Ut, o) ||
        Q(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Hf() {
  return Ui().slots
}
function Df() {
  return Ui().attrs
}
function Ui() {
  const e = on()
  return e.setupContext || (e.setupContext = vo(e))
}
function yr(e) {
  return W(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Rs = !0
function ac(e) {
  const t = Zs(e),
    n = e.proxy,
    s = e.ctx
  ;(Rs = !1), t.beforeCreate && vr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: h,
    mounted: y,
    beforeUpdate: v,
    updated: x,
    activated: b,
    deactivated: j,
    beforeDestroy: L,
    beforeUnmount: D,
    destroyed: p,
    unmounted: g,
    render: P,
    renderTracked: U,
    renderTriggered: O,
    errorCaptured: B,
    serverPrefetch: C,
    expose: I,
    inheritAttrs: A,
    components: _,
    directives: F,
    filters: Y,
  } = t
  if ((f && fc(f, s, null), o))
    for (const X in o) {
      const $ = o[X]
      q($) && (s[X] = $.bind(n))
    }
  if (r) {
    const X = r.call(n, n)
    ee(X) && (e.data = Pt(X))
  }
  if (((Rs = !0), i))
    for (const X in i) {
      const $ = i[X],
        ae = q($) ? $.bind(n, n) : q($.get) ? $.get.bind(n, n) : We,
        cn = !q($) && q($.set) ? $.set.bind(n) : We,
        lt = ie({ get: ae, set: cn })
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (je) => (lt.value = je),
      })
    }
  if (l) for (const X in l) Wi(l[X], s, n, X)
  if (c) {
    const X = q(c) ? c.call(n) : c
    Reflect.ownKeys(X).forEach(($) => {
      mc($, X[$])
    })
  }
  a && vr(a, e, 'c')
  function V(X, $) {
    W($) ? $.forEach((ae) => X(ae.bind(n))) : $ && X($.bind(n))
  }
  if (
    (V(ec, h),
    V(Lt, y),
    V(tc, v),
    V(nc, x),
    V(Jl, b),
    V(Ql, j),
    V(oc, B),
    V(ic, U),
    V(rc, O),
    V(ji, D),
    V(Kn, g),
    V(sc, C),
    W(I))
  )
    if (I.length) {
      const X = e.exposed || (e.exposed = {})
      I.forEach(($) => {
        Object.defineProperty(X, $, {
          get: () => n[$],
          set: (ae) => (n[$] = ae),
        })
      })
    } else e.exposed || (e.exposed = {})
  P && e.render === We && (e.render = P),
    A != null && (e.inheritAttrs = A),
    _ && (e.components = _),
    F && (e.directives = F),
    C && zs(e)
}
function fc(e, t, n = We) {
  W(e) && (e = Os(e))
  for (const s in e) {
    const r = e[s]
    let i
    ee(r)
      ? 'default' in r
        ? (i = yt(r.from || s, r.default, !0))
        : (i = yt(r.from || s))
      : (i = yt(r)),
      pe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function vr(e, t, n) {
  $e(W(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Wi(e, t, n, s) {
  let r = s.includes('.') ? oo(n, s) : () => n[s]
  if (oe(e)) {
    const i = t[e]
    q(i) && Le(r, i)
  } else if (q(e)) Le(r, e.bind(n))
  else if (ee(e))
    if (W(e)) e.forEach((i) => Wi(i, t, n, s))
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler]
      q(i) && Le(r, i, e)
    }
}
function Zs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((f) => In(c, f, o, !0)),
          In(c, t, o)),
    ee(t) && i.set(t, c),
    c
  )
}
function In(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && In(e, i, n, !0), r && r.forEach((o) => In(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = uc[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const uc = {
  data: _r,
  props: br,
  emits: br,
  methods: jt,
  computed: jt,
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  components: jt,
  directives: jt,
  watch: hc,
  provide: _r,
  inject: dc,
}
function _r(e, t) {
  return t
    ? e
      ? function () {
          return ue(
            q(e) ? e.call(this, this) : e,
            q(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function dc(e, t) {
  return jt(Os(e), Os(t))
}
function Os(e) {
  if (W(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function jt(e, t) {
  return e ? ue(Object.create(null), e, t) : t
}
function br(e, t) {
  return e
    ? W(e) && W(t)
      ? [...new Set([...e, ...t])]
      : ue(Object.create(null), yr(e), yr(t ?? {}))
    : t
}
function hc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ue(Object.create(null), e)
  for (const s in t) n[s] = be(e[s], t[s])
  return n
}
function Bi() {
  return {
    app: null,
    config: {
      isNativeTag: Bo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let pc = 0
function gc(e, t) {
  return function (s, r = null) {
    q(s) || (s = ue({}, s)), r != null && !ee(r) && (r = null)
    const i = Bi(),
      o = new WeakSet(),
      l = []
    let c = !1
    const f = (i.app = {
      _uid: pc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qc,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && q(a.install)
              ? (o.add(a), a.install(f, ...h))
              : q(a) && (o.add(a), a(f, ...h))),
          f
        )
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), f
      },
      component(a, h) {
        return h ? ((i.components[a] = h), f) : i.components[a]
      },
      directive(a, h) {
        return h ? ((i.directives[a] = h), f) : i.directives[a]
      },
      mount(a, h, y) {
        if (!c) {
          const v = f._ceVNode || ce(s, r)
          return (
            (v.appContext = i),
            y === !0 ? (y = 'svg') : y === !1 && (y = void 0),
            h && t ? t(v, a) : e(v, a, y),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            Xn(v.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          ($e(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__)
      },
      provide(a, h) {
        return (i.provides[a] = h), f
      },
      runWithContext(a) {
        const h = mt
        mt = f
        try {
          return a()
        } finally {
          mt = h
        }
      },
    })
    return f
  }
}
let mt = null
function mc(e, t) {
  if (de) {
    let n = de.provides
    const s = de.parent && de.parent.provides
    s === n && (n = de.provides = Object.create(s)), (n[e] = t)
  }
}
function yt(e, t, n = !1) {
  const s = de || he
  if (s || mt) {
    const r = mt
      ? mt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && q(t) ? t.call(s && s.proxy) : t
  }
}
function Ki() {
  return !!(de || he || mt)
}
const qi = {},
  Gi = () => Object.create(qi),
  Xi = (e) => Object.getPrototypeOf(e) === qi
function yc(e, t, n, s = !1) {
  const r = {},
    i = Gi()
  ;(e.propsDefaults = Object.create(null)), Yi(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Cl(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function vc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = J(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let y = a[h]
        if (Gn(e.emitsOptions, y)) continue
        const v = t[y]
        if (c)
          if (Q(i, y)) v !== i[y] && ((i[y] = v), (f = !0))
          else {
            const x = Ne(y)
            r[x] = Ms(c, l, x, v, e, !1)
          }
        else v !== i[y] && ((i[y] = v), (f = !0))
      }
    }
  } else {
    Yi(e, t, r, i) && (f = !0)
    let a
    for (const h in l)
      (!t || (!Q(t, h) && ((a = rt(h)) === h || !Q(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = Ms(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !Q(t, h)) && (delete i[h], (f = !0))
  }
  f && Ge(e.attrs, 'set', '')
}
function Yi(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Ot(c)) continue
      const f = t[c]
      let a
      r && Q(r, (a = Ne(c)))
        ? !i || !i.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : Gn(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (o = !0)))
    }
  if (i) {
    const c = J(n),
      f = l || te
    for (let a = 0; a < i.length; a++) {
      const h = i[a]
      n[h] = Ms(r, c, h, f[h], e, !Q(f, h))
    }
  }
  return o
}
function Ms(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = Q(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && q(c)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const a = ln(r)
          ;(s = f[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === rt(n)) && (s = !0))
  }
  return s
}
const _c = new WeakMap()
function zi(e, t, n = !1) {
  const s = n ? _c : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!q(e)) {
    const a = (h) => {
      c = !0
      const [y, v] = zi(h, t, !0)
      ue(o, y), v && l.push(...v)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!i && !c) return ee(e) && s.set(e, At), At
  if (W(i))
    for (let a = 0; a < i.length; a++) {
      const h = Ne(i[a])
      wr(h) && (o[h] = te)
    }
  else if (i)
    for (const a in i) {
      const h = Ne(a)
      if (wr(h)) {
        const y = i[a],
          v = (o[h] = W(y) || q(y) ? { type: y } : ue({}, y)),
          x = v.type
        let b = !1,
          j = !0
        if (W(x))
          for (let L = 0; L < x.length; ++L) {
            const D = x[L],
              p = q(D) && D.name
            if (p === 'Boolean') {
              b = !0
              break
            } else p === 'String' && (j = !1)
          }
        else b = q(x) && x.name === 'Boolean'
        ;(v[0] = b), (v[1] = j), (b || Q(v, 'default')) && l.push(h)
      }
    }
  const f = [o, l]
  return ee(e) && s.set(e, f), f
}
function wr(e) {
  return e[0] !== '$' && !Ot(e)
}
const Ji = (e) => e[0] === '_' || e === '$stable',
  er = (e) => (W(e) ? e.map(Pe) : [Pe(e)]),
  bc = (e, t, n) => {
    if (t._n) return t
    const s = kl((...r) => er(t(...r)), n)
    return (s._c = !1), s
  },
  Qi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ji(r)) continue
      const i = e[r]
      if (q(i)) t[r] = bc(r, i, s)
      else if (i != null) {
        const o = er(i)
        t[r] = () => o
      }
    }
  },
  Zi = (e, t) => {
    const n = er(t)
    e.slots.default = () => n
  },
  eo = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  wc = (e, t, n) => {
    const s = (e.slots = Gi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (eo(s, t, n), n && oi(s, '_', r, !0)) : Qi(t, s)
    } else t && Zi(e, t)
  },
  Sc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = te
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : eo(r, t, n)
        : ((i = !t.$stable), Qi(t, r)),
        (o = t)
    } else t && (Zi(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Ji(l) && o[l] == null && delete r[l]
  },
  Ae = fo
function xc(e) {
  return to(e)
}
function Ec(e) {
  return to(e, Xl)
}
function to(e, t) {
  const n = Dn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: h,
      nextSibling: y,
      setScopeId: v = We,
      insertStaticContent: x,
    } = e,
    b = (
      u,
      d,
      m,
      E = null,
      w = null,
      S = null,
      N = void 0,
      M = null,
      R = !!d.dynamicChildren,
    ) => {
      if (u === d) return
      u && !dt(u, d) && ((E = an(u)), je(u, w, S, !0), (u = null)),
        d.patchFlag === -2 && ((R = !1), (d.dynamicChildren = null))
      const { type: T, ref: K, shapeFlag: H } = d
      switch (T) {
        case vt:
          j(u, d, m, E)
          break
        case _e:
          L(u, d, m, E)
          break
        case Wt:
          u == null && D(d, m, E, N)
          break
        case xe:
          _(u, d, m, E, w, S, N, M, R)
          break
        default:
          H & 1
            ? P(u, d, m, E, w, S, N, M, R)
            : H & 6
              ? F(u, d, m, E, w, S, N, M, R)
              : (H & 64 || H & 128) && T.process(u, d, m, E, w, S, N, M, R, St)
      }
      K != null && w && zt(K, u && u.ref, S, d || u, !d)
    },
    j = (u, d, m, E) => {
      if (u == null) s((d.el = l(d.children)), m, E)
      else {
        const w = (d.el = u.el)
        d.children !== u.children && f(w, d.children)
      }
    },
    L = (u, d, m, E) => {
      u == null ? s((d.el = c(d.children || '')), m, E) : (d.el = u.el)
    },
    D = (u, d, m, E) => {
      ;[u.el, u.anchor] = x(u.children, d, m, E, u.el, u.anchor)
    },
    p = ({ el: u, anchor: d }, m, E) => {
      let w
      for (; u && u !== d; ) (w = y(u)), s(u, m, E), (u = w)
      s(d, m, E)
    },
    g = ({ el: u, anchor: d }) => {
      let m
      for (; u && u !== d; ) (m = y(u)), r(u), (u = m)
      r(d)
    },
    P = (u, d, m, E, w, S, N, M, R) => {
      d.type === 'svg' ? (N = 'svg') : d.type === 'math' && (N = 'mathml'),
        u == null ? U(d, m, E, w, S, N, M, R) : C(u, d, w, S, N, M, R)
    },
    U = (u, d, m, E, w, S, N, M) => {
      let R, T
      const { props: K, shapeFlag: H, transition: k, dirs: G } = u
      if (
        ((R = u.el = o(u.type, S, K && K.is, K)),
        H & 8
          ? a(R, u.children)
          : H & 16 && B(u.children, R, null, E, w, os(u, S), N, M),
        G && Ue(u, null, E, 'created'),
        O(R, u, u.scopeId, N, E),
        K)
      ) {
        for (const ne in K)
          ne !== 'value' && !Ot(ne) && i(R, ne, null, K[ne], S, E)
        'value' in K && i(R, 'value', null, K.value, S),
          (T = K.onVnodeBeforeMount) && Me(T, E, u)
      }
      G && Ue(u, null, E, 'beforeMount')
      const z = no(w, k)
      z && k.beforeEnter(R),
        s(R, d, m),
        ((T = K && K.onVnodeMounted) || z || G) &&
          Ae(() => {
            T && Me(T, E, u), z && k.enter(R), G && Ue(u, null, E, 'mounted')
          }, w)
    },
    O = (u, d, m, E, w) => {
      if ((m && v(u, m), E)) for (let S = 0; S < E.length; S++) v(u, E[S])
      if (w) {
        let S = w.subTree
        if (
          d === S ||
          (ao(S.type) && (S.ssContent === d || S.ssFallback === d))
        ) {
          const N = w.vnode
          O(u, N, N.scopeId, N.slotScopeIds, w.parent)
        }
      }
    },
    B = (u, d, m, E, w, S, N, M, R = 0) => {
      for (let T = R; T < u.length; T++) {
        const K = (u[T] = M ? tt(u[T]) : Pe(u[T]))
        b(null, K, d, m, E, w, S, N, M)
      }
    },
    C = (u, d, m, E, w, S, N) => {
      const M = (d.el = u.el)
      let { patchFlag: R, dynamicChildren: T, dirs: K } = d
      R |= u.patchFlag & 16
      const H = u.props || te,
        k = d.props || te
      let G
      if (
        (m && ct(m, !1),
        (G = k.onVnodeBeforeUpdate) && Me(G, m, d, u),
        K && Ue(d, u, m, 'beforeUpdate'),
        m && ct(m, !0),
        ((H.innerHTML && k.innerHTML == null) ||
          (H.textContent && k.textContent == null)) &&
          a(M, ''),
        T
          ? I(u.dynamicChildren, T, M, m, E, os(d, w), S)
          : N || $(u, d, M, null, m, E, os(d, w), S, !1),
        R > 0)
      ) {
        if (R & 16) A(M, H, k, m, w)
        else if (
          (R & 2 && H.class !== k.class && i(M, 'class', null, k.class, w),
          R & 4 && i(M, 'style', H.style, k.style, w),
          R & 8)
        ) {
          const z = d.dynamicProps
          for (let ne = 0; ne < z.length; ne++) {
            const Z = z[ne],
              Ee = H[Z],
              ge = k[Z]
            ;(ge !== Ee || Z === 'value') && i(M, Z, Ee, ge, w, m)
          }
        }
        R & 1 && u.children !== d.children && a(M, d.children)
      } else !N && T == null && A(M, H, k, m, w)
      ;((G = k.onVnodeUpdated) || K) &&
        Ae(() => {
          G && Me(G, m, d, u), K && Ue(d, u, m, 'updated')
        }, E)
    },
    I = (u, d, m, E, w, S, N) => {
      for (let M = 0; M < d.length; M++) {
        const R = u[M],
          T = d[M],
          K =
            R.el && (R.type === xe || !dt(R, T) || R.shapeFlag & 70)
              ? h(R.el)
              : m
        b(R, T, K, null, E, w, S, N, !0)
      }
    },
    A = (u, d, m, E, w) => {
      if (d !== m) {
        if (d !== te)
          for (const S in d) !Ot(S) && !(S in m) && i(u, S, d[S], null, w, E)
        for (const S in m) {
          if (Ot(S)) continue
          const N = m[S],
            M = d[S]
          N !== M && S !== 'value' && i(u, S, M, N, w, E)
        }
        'value' in m && i(u, 'value', d.value, m.value, w)
      }
    },
    _ = (u, d, m, E, w, S, N, M, R) => {
      const T = (d.el = u ? u.el : l('')),
        K = (d.anchor = u ? u.anchor : l(''))
      let { patchFlag: H, dynamicChildren: k, slotScopeIds: G } = d
      G && (M = M ? M.concat(G) : G),
        u == null
          ? (s(T, m, E), s(K, m, E), B(d.children || [], m, K, w, S, N, M, R))
          : H > 0 && H & 64 && k && u.dynamicChildren
            ? (I(u.dynamicChildren, k, m, w, S, N, M),
              (d.key != null || (w && d === w.subTree)) && so(u, d, !0))
            : $(u, d, m, K, w, S, N, M, R)
    },
    F = (u, d, m, E, w, S, N, M, R) => {
      ;(d.slotScopeIds = M),
        u == null
          ? d.shapeFlag & 512
            ? w.ctx.activate(d, m, E, N, R)
            : Y(d, m, E, w, S, N, R)
          : re(u, d, R)
    },
    Y = (u, d, m, E, w, S, N) => {
      const M = (u.component = Vc(u, E, w))
      if ((rn(u) && (M.ctx.renderer = St), kc(M, !1, N), M.asyncDep)) {
        if ((w && w.registerDep(M, V, N), !u.el)) {
          const R = (M.subTree = ce(_e))
          L(null, R, d, m)
        }
      } else V(M, u, d, m, w, S, N)
    },
    re = (u, d, m) => {
      const E = (d.component = u.component)
      if (Lc(u, d, m))
        if (E.asyncDep && !E.asyncResolved) {
          X(E, d, m)
          return
        } else (E.next = d), E.update()
      else (d.el = u.el), (E.vnode = d)
    },
    V = (u, d, m, E, w, S, N) => {
      const M = () => {
        if (u.isMounted) {
          let { next: H, bu: k, u: G, parent: z, vnode: ne } = u
          {
            const Te = ro(u)
            if (Te) {
              H && ((H.el = ne.el), X(u, H, N)),
                Te.asyncDep.then(() => {
                  u.isUnmounted || M()
                })
              return
            }
          }
          let Z = H,
            Ee
          ct(u, !1),
            H ? ((H.el = ne.el), X(u, H, N)) : (H = ne),
            k && wn(k),
            (Ee = H.props && H.props.onVnodeBeforeUpdate) && Me(Ee, z, H, ne),
            ct(u, !0)
          const ge = ls(u),
            Fe = u.subTree
          ;(u.subTree = ge),
            b(Fe, ge, h(Fe.el), an(Fe), u, w, S),
            (H.el = ge.el),
            Z === null && co(u, ge.el),
            G && Ae(G, w),
            (Ee = H.props && H.props.onVnodeUpdated) &&
              Ae(() => Me(Ee, z, H, ne), w)
        } else {
          let H
          const { el: k, props: G } = d,
            { bm: z, m: ne, parent: Z, root: Ee, type: ge } = u,
            Fe = gt(d)
          if (
            (ct(u, !1),
            z && wn(z),
            !Fe && (H = G && G.onVnodeBeforeMount) && Me(H, Z, d),
            ct(u, !0),
            k && Qn)
          ) {
            const Te = () => {
              ;(u.subTree = ls(u)), Qn(k, u.subTree, u, w, null)
            }
            Fe && ge.__asyncHydrate ? ge.__asyncHydrate(k, u, Te) : Te()
          } else {
            Ee.ce && Ee.ce._injectChildStyle(ge)
            const Te = (u.subTree = ls(u))
            b(null, Te, m, E, u, w, S), (d.el = Te.el)
          }
          if ((ne && Ae(ne, w), !Fe && (H = G && G.onVnodeMounted))) {
            const Te = d
            Ae(() => Me(H, Z, Te), w)
          }
          ;(d.shapeFlag & 256 ||
            (Z && gt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
            u.a &&
            Ae(u.a, w),
            (u.isMounted = !0),
            (d = m = E = null)
        }
      }
      u.scope.on()
      const R = (u.effect = new ui(M))
      u.scope.off()
      const T = (u.update = R.run.bind(R)),
        K = (u.job = R.runIfDirty.bind(R))
      ;(K.i = u), (K.id = u.uid), (R.scheduler = () => Xs(K)), ct(u, !0), T()
    },
    X = (u, d, m) => {
      d.component = u
      const E = u.vnode.props
      ;(u.vnode = d),
        (u.next = null),
        vc(u, d.props, E, m),
        Sc(u, d.children, m),
        it(),
        dr(u),
        ot()
    },
    $ = (u, d, m, E, w, S, N, M, R = !1) => {
      const T = u && u.children,
        K = u ? u.shapeFlag : 0,
        H = d.children,
        { patchFlag: k, shapeFlag: G } = d
      if (k > 0) {
        if (k & 128) {
          cn(T, H, m, E, w, S, N, M, R)
          return
        } else if (k & 256) {
          ae(T, H, m, E, w, S, N, M, R)
          return
        }
      }
      G & 8
        ? (K & 16 && Nt(T, w, S), H !== T && a(m, H))
        : K & 16
          ? G & 16
            ? cn(T, H, m, E, w, S, N, M, R)
            : Nt(T, w, S, !0)
          : (K & 8 && a(m, ''), G & 16 && B(H, m, E, w, S, N, M, R))
    },
    ae = (u, d, m, E, w, S, N, M, R) => {
      ;(u = u || At), (d = d || At)
      const T = u.length,
        K = d.length,
        H = Math.min(T, K)
      let k
      for (k = 0; k < H; k++) {
        const G = (d[k] = R ? tt(d[k]) : Pe(d[k]))
        b(u[k], G, m, null, w, S, N, M, R)
      }
      T > K ? Nt(u, w, S, !0, !1, H) : B(d, m, E, w, S, N, M, R, H)
    },
    cn = (u, d, m, E, w, S, N, M, R) => {
      let T = 0
      const K = d.length
      let H = u.length - 1,
        k = K - 1
      for (; T <= H && T <= k; ) {
        const G = u[T],
          z = (d[T] = R ? tt(d[T]) : Pe(d[T]))
        if (dt(G, z)) b(G, z, m, null, w, S, N, M, R)
        else break
        T++
      }
      for (; T <= H && T <= k; ) {
        const G = u[H],
          z = (d[k] = R ? tt(d[k]) : Pe(d[k]))
        if (dt(G, z)) b(G, z, m, null, w, S, N, M, R)
        else break
        H--, k--
      }
      if (T > H) {
        if (T <= k) {
          const G = k + 1,
            z = G < K ? d[G].el : E
          for (; T <= k; )
            b(null, (d[T] = R ? tt(d[T]) : Pe(d[T])), m, z, w, S, N, M, R), T++
        }
      } else if (T > k) for (; T <= H; ) je(u[T], w, S, !0), T++
      else {
        const G = T,
          z = T,
          ne = new Map()
        for (T = z; T <= k; T++) {
          const Ce = (d[T] = R ? tt(d[T]) : Pe(d[T]))
          Ce.key != null && ne.set(Ce.key, T)
        }
        let Z,
          Ee = 0
        const ge = k - z + 1
        let Fe = !1,
          Te = 0
        const Ft = new Array(ge)
        for (T = 0; T < ge; T++) Ft[T] = 0
        for (T = G; T <= H; T++) {
          const Ce = u[T]
          if (Ee >= ge) {
            je(Ce, w, S, !0)
            continue
          }
          let Ve
          if (Ce.key != null) Ve = ne.get(Ce.key)
          else
            for (Z = z; Z <= k; Z++)
              if (Ft[Z - z] === 0 && dt(Ce, d[Z])) {
                Ve = Z
                break
              }
          Ve === void 0
            ? je(Ce, w, S, !0)
            : ((Ft[Ve - z] = T + 1),
              Ve >= Te ? (Te = Ve) : (Fe = !0),
              b(Ce, d[Ve], m, null, w, S, N, M, R),
              Ee++)
        }
        const or = Fe ? Tc(Ft) : At
        for (Z = or.length - 1, T = ge - 1; T >= 0; T--) {
          const Ce = z + T,
            Ve = d[Ce],
            lr = Ce + 1 < K ? d[Ce + 1].el : E
          Ft[T] === 0
            ? b(null, Ve, m, lr, w, S, N, M, R)
            : Fe && (Z < 0 || T !== or[Z] ? lt(Ve, m, lr, 2) : Z--)
        }
      }
    },
    lt = (u, d, m, E, w = null) => {
      const { el: S, type: N, transition: M, children: R, shapeFlag: T } = u
      if (T & 6) {
        lt(u.component.subTree, d, m, E)
        return
      }
      if (T & 128) {
        u.suspense.move(d, m, E)
        return
      }
      if (T & 64) {
        N.move(u, d, m, St)
        return
      }
      if (N === xe) {
        s(S, d, m)
        for (let H = 0; H < R.length; H++) lt(R[H], d, m, E)
        s(u.anchor, d, m)
        return
      }
      if (N === Wt) {
        p(u, d, m)
        return
      }
      if (E !== 2 && T & 1 && M)
        if (E === 0) M.beforeEnter(S), s(S, d, m), Ae(() => M.enter(S), w)
        else {
          const { leave: H, delayLeave: k, afterLeave: G } = M,
            z = () => s(S, d, m),
            ne = () => {
              H(S, () => {
                z(), G && G()
              })
            }
          k ? k(S, z, ne) : ne()
        }
      else s(S, d, m)
    },
    je = (u, d, m, E = !1, w = !1) => {
      const {
        type: S,
        props: N,
        ref: M,
        children: R,
        dynamicChildren: T,
        shapeFlag: K,
        patchFlag: H,
        dirs: k,
        cacheIndex: G,
      } = u
      if (
        (H === -2 && (w = !1),
        M != null && zt(M, null, m, u, !0),
        G != null && (d.renderCache[G] = void 0),
        K & 256)
      ) {
        d.ctx.deactivate(u)
        return
      }
      const z = K & 1 && k,
        ne = !gt(u)
      let Z
      if ((ne && (Z = N && N.onVnodeBeforeUnmount) && Me(Z, d, u), K & 6))
        Wo(u.component, m, E)
      else {
        if (K & 128) {
          u.suspense.unmount(m, E)
          return
        }
        z && Ue(u, null, d, 'beforeUnmount'),
          K & 64
            ? u.type.remove(u, d, m, St, E)
            : T && !T.hasOnce && (S !== xe || (H > 0 && H & 64))
              ? Nt(T, d, m, !1, !0)
              : ((S === xe && H & 384) || (!w && K & 16)) && Nt(R, d, m),
          E && rr(u)
      }
      ;((ne && (Z = N && N.onVnodeUnmounted)) || z) &&
        Ae(() => {
          Z && Me(Z, d, u), z && Ue(u, null, d, 'unmounted')
        }, m)
    },
    rr = (u) => {
      const { type: d, el: m, anchor: E, transition: w } = u
      if (d === xe) {
        Uo(m, E)
        return
      }
      if (d === Wt) {
        g(u)
        return
      }
      const S = () => {
        r(m), w && !w.persisted && w.afterLeave && w.afterLeave()
      }
      if (u.shapeFlag & 1 && w && !w.persisted) {
        const { leave: N, delayLeave: M } = w,
          R = () => N(m, S)
        M ? M(u.el, S, R) : R()
      } else S()
    },
    Uo = (u, d) => {
      let m
      for (; u !== d; ) (m = y(u)), r(u), (u = m)
      r(d)
    },
    Wo = (u, d, m) => {
      const { bum: E, scope: w, job: S, subTree: N, um: M, m: R, a: T } = u
      Sr(R),
        Sr(T),
        E && wn(E),
        w.stop(),
        S && ((S.flags |= 8), je(N, u, d, m)),
        M && Ae(M, d),
        Ae(() => {
          u.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Nt = (u, d, m, E = !1, w = !1, S = 0) => {
      for (let N = S; N < u.length; N++) je(u[N], d, m, E, w)
    },
    an = (u) => {
      if (u.shapeFlag & 6) return an(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const d = y(u.anchor || u.el),
        m = d && d[Ul]
      return m ? y(m) : d
    }
  let zn = !1
  const ir = (u, d, m) => {
      u == null
        ? d._vnode && je(d._vnode, null, null, !0)
        : b(d._vnode || null, u, d, null, null, null, m),
        (d._vnode = u),
        zn || ((zn = !0), dr(), Mn(), (zn = !1))
    },
    St = {
      p: b,
      um: je,
      m: lt,
      r: rr,
      mt: Y,
      mc: B,
      pc: $,
      pbc: I,
      n: an,
      o: e,
    }
  let Jn, Qn
  return (
    t && ([Jn, Qn] = t(St)), { render: ir, hydrate: Jn, createApp: gc(ir, Jn) }
  )
}
function os({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function ct({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function no(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function so(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (W(s) && W(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = tt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && so(o, l)),
        l.type === vt && (l.el = o.el)
    }
}
function Tc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l)
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function ro(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : ro(t)
}
function Sr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Cc = Symbol.for('v-scx'),
  Ac = () => yt(Cc)
function io(e, t) {
  return qn(e, null, t)
}
function $f(e, t) {
  return qn(e, null, { flush: 'post' })
}
function Le(e, t, n) {
  return qn(e, t, n)
}
function qn(e, t, n = te) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ue({}, n),
    c = (t && s) || (!t && i !== 'post')
  let f
  if (It) {
    if (i === 'sync') {
      const v = Ac()
      f = v.__watcherHandles || (v.__watcherHandles = [])
    } else if (!c) {
      const v = () => {}
      return (v.stop = We), (v.resume = We), (v.pause = We), v
    }
  }
  const a = de
  l.call = (v, x, b) => $e(v, a, x, b)
  let h = !1
  i === 'post'
    ? (l.scheduler = (v) => {
        Ae(v, a && a.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (v, x) => {
        x ? v() : Xs(v)
      })),
    (l.augmentJob = (v) => {
      t && (v.flags |= 4),
        h && ((v.flags |= 2), a && ((v.id = a.uid), (v.i = a)))
    })
  const y = Dl(e, t, l)
  return It && (f ? f.push(y) : c && y()), y
}
function Rc(e, t, n) {
  const s = this.proxy,
    r = oe(e) ? (e.includes('.') ? oo(s, e) : () => s[e]) : e.bind(s, s)
  let i
  q(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = ln(this),
    l = qn(r, i.bind(s), n)
  return o(), l
}
function oo(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Oc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${rt(t)}Modifiers`]
function Mc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || te
  let r = n
  const i = t.startsWith('update:'),
    o = i && Oc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (oe(a) ? a.trim() : a))),
    o.number && (r = n.map(Yo)))
  let l,
    c = s[(l = bn(t))] || s[(l = bn(Ne(t)))]
  !c && i && (c = s[(l = bn(rt(t)))]), c && $e(c, e, 6, r)
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), $e(f, e, 6, r)
  }
}
function lo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!q(e)) {
    const c = (f) => {
      const a = lo(f, t, !0)
      a && ((l = !0), ue(o, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (W(i) ? i.forEach((c) => (o[c] = null)) : ue(o, i),
      ee(e) && s.set(e, o),
      o)
}
function Gn(e, t) {
  return !e || !en(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, rt(t)) || Q(e, t))
}
function ls(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: h,
      data: y,
      setupState: v,
      ctx: x,
      inheritAttrs: b,
    } = e,
    j = Pn(e)
  let L, D
  try {
    if (n.shapeFlag & 4) {
      const g = r || s,
        P = g
      ;(L = Pe(f.call(P, g, a, h, v, y, x))), (D = l)
    } else {
      const g = t
      ;(L = Pe(
        g.length > 1 ? g(h, { attrs: l, slots: o, emit: c }) : g(h, null),
      )),
        (D = t.props ? l : Pc(l))
    }
  } catch (g) {
    ;(Bt.length = 0), sn(g, e, 1), (L = ce(_e))
  }
  let p = L
  if (D && b !== !1) {
    const g = Object.keys(D),
      { shapeFlag: P } = p
    g.length &&
      P & 7 &&
      (i && g.some(Ds) && (D = Ic(D, i)), (p = st(p, D, !1, !0)))
  }
  return (
    n.dirs &&
      ((p = st(p, null, !1, !0)),
      (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Yt(p, n.transition),
    (L = p),
    Pn(j),
    L
  )
}
const Pc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || en(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Ic = (e, t) => {
    const n = {}
    for (const s in e) (!Ds(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Lc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    f = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? xr(s, o, f) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const y = a[h]
        if (o[y] !== s[y] && !Gn(f, y)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? xr(s, o, f)
            : !0
          : !!o
  return !1
}
function xr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Gn(n, i)) return !0
  }
  return !1
}
function co({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const ao = (e) => e.__isSuspense
function fo(e, t) {
  t && t.pendingBranch
    ? W(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Vl(e)
}
const xe = Symbol.for('v-fgt'),
  vt = Symbol.for('v-txt'),
  _e = Symbol.for('v-cmt'),
  Wt = Symbol.for('v-stc'),
  Bt = []
let Re = null
function Ps(e = !1) {
  Bt.push((Re = e ? null : []))
}
function Nc() {
  Bt.pop(), (Re = Bt[Bt.length - 1] || null)
}
let Jt = 1
function Er(e, t = !1) {
  ;(Jt += e), e < 0 && Re && t && (Re.hasOnce = !0)
}
function uo(e) {
  return (
    (e.dynamicChildren = Jt > 0 ? Re || At : null),
    Nc(),
    Jt > 0 && Re && Re.push(e),
    e
  )
}
function jf(e, t, n, s, r, i) {
  return uo(po(e, t, n, s, r, i, !0))
}
function Is(e, t, n, s, r) {
  return uo(ce(e, t, n, s, r, !0))
}
function Qt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function dt(e, t) {
  return e.type === t.type && e.key === t.key
}
const ho = ({ key: e }) => e ?? null,
  xn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? oe(e) || pe(e) || q(e)
        ? { i: he, r: e, k: t, f: !!n }
        : e
      : null
  )
function po(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === xe ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ho(t),
    ref: t && xn(t),
    scopeId: Pi,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  }
  return (
    l
      ? (tr(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= oe(n) ? 8 : 16),
    Jt > 0 &&
      !o &&
      Re &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Re.push(c),
    c
  )
}
const ce = Fc
function Fc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Vi) && (e = _e), Qt(e))) {
    const l = st(e, t, !0)
    return (
      n && tr(l, n),
      Jt > 0 &&
        !i &&
        Re &&
        (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Kc(e) && (e = e.__vccOpts), t)) {
    t = Hc(t)
    let { class: l, style: c } = t
    l && !oe(l) && (t.class = jn(l)),
      ee(c) && (Ks(c) && !W(c) && (c = ue({}, c)), (t.style = $n(c)))
  }
  const o = oe(e) ? 1 : ao(e) ? 128 : Ii(e) ? 64 : ee(e) ? 4 : q(e) ? 2 : 0
  return po(e, t, n, s, r, o, i, !0)
}
function Hc(e) {
  return e ? (Ks(e) || Xi(e) ? ue({}, e) : e) : null
}
function st(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    f = t ? Dc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && ho(f),
      ref:
        t && t.ref
          ? n && i
            ? W(i)
              ? i.concat(xn(t))
              : [i, xn(t)]
            : xn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== xe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && st(e.ssContent),
      ssFallback: e.ssFallback && st(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Yt(a, c.clone(a)), a
}
function go(e = ' ', t = 0) {
  return ce(vt, null, e, t)
}
function Vf(e, t) {
  const n = ce(Wt, null, e)
  return (n.staticCount = t), n
}
function kf(e = '', t = !1) {
  return t ? (Ps(), Is(_e, null, e)) : ce(_e, null, e)
}
function Pe(e) {
  return e == null || typeof e == 'boolean'
    ? ce(_e)
    : W(e)
      ? ce(xe, null, e.slice())
      : Qt(e)
        ? tt(e)
        : ce(vt, null, String(e))
}
function tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e)
}
function tr(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (W(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), tr(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !Xi(t)
        ? (t._ctx = he)
        : r === 3 &&
          he &&
          (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: he }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [go(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Dc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = jn([t.class, s.class]))
      else if (r === 'style') t.style = $n([t.style, s.style])
      else if (en(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(W(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Me(e, t, n, s = null) {
  $e(e, t, 7, [n, s])
}
const $c = Bi()
let jc = 0
function Vc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || $c,
    i = {
      uid: jc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new il(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: zi(s, r),
      emitsOptions: lo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
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
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Mc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let de = null
const on = () => de || he
let Ln, Ls
{
  const e = Dn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(Ln = t('__VUE_INSTANCE_SETTERS__', (n) => (de = n))),
    (Ls = t('__VUE_SSR_SETTERS__', (n) => (It = n)))
}
const ln = (e) => {
    const t = de
    return (
      Ln(e),
      e.scope.on(),
      () => {
        e.scope.off(), Ln(t)
      }
    )
  },
  Tr = () => {
    de && de.scope.off(), Ln(null)
  }
function mo(e) {
  return e.vnode.shapeFlag & 4
}
let It = !1
function kc(e, t = !1, n = !1) {
  t && Ls(t)
  const { props: s, children: r } = e.vnode,
    i = mo(e)
  yc(e, s, i, t), wc(e, r, n)
  const o = i ? Uc(e, t) : void 0
  return t && Ls(!1), o
}
function Uc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, cc))
  const { setup: s } = n
  if (s) {
    it()
    const r = (e.setupContext = s.length > 1 ? vo(e) : null),
      i = ln(e),
      o = nn(s, e, 0, [e.props, r]),
      l = si(o)
    if ((ot(), i(), (l || e.sp) && !gt(e) && zs(e), l)) {
      if ((o.then(Tr, Tr), t))
        return o
          .then((c) => {
            Cr(e, c, t)
          })
          .catch((c) => {
            sn(c, e, 0)
          })
      e.asyncDep = o
    } else Cr(e, o, t)
  } else yo(e, t)
}
function Cr(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = Ci(t)),
    yo(e, n)
}
let Ar
function yo(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Ar && !s.render) {
      const r = s.template || Zs(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          f = ue(ue({ isCustomElement: i, delimiters: l }, o), c)
        s.render = Ar(r, f)
      }
    }
    e.render = s.render || We
  }
  {
    const r = ln(e)
    it()
    try {
      ac(e)
    } finally {
      ot(), r()
    }
  }
}
const Wc = {
  get(e, t) {
    return ye(e, 'get', ''), e[t]
  },
}
function vo(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Wc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Xn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ci(Sn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Ut) return Ut[n](e)
          },
          has(t, n) {
            return n in t || n in Ut
          },
        }))
    : e.proxy
}
function Bc(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Kc(e) {
  return q(e) && '__vccOpts' in e
}
const ie = (e, t) => Fl(e, t, It)
function Ns(e, t, n) {
  const s = arguments.length
  return s === 2
    ? ee(t) && !W(t)
      ? Qt(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Qt(n) && (n = [n]),
      ce(e, t, n))
}
const qc = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Fs
const Rr = typeof window < 'u' && window.trustedTypes
if (Rr)
  try {
    Fs = Rr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const _o = Fs ? (e) => Fs.createHTML(e) : (e) => e,
  Gc = 'http://www.w3.org/2000/svg',
  Xc = 'http://www.w3.org/1998/Math/MathML',
  qe = typeof document < 'u' ? document : null,
  Or = qe && qe.createElement('template'),
  Yc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? qe.createElementNS(Gc, e)
          : t === 'mathml'
            ? qe.createElementNS(Xc, e)
            : n
              ? qe.createElement(e, { is: n })
              : qe.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Or.innerHTML = _o(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        )
        const l = Or.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Qe = 'transition',
  Dt = 'animation',
  Zt = Symbol('_vtc'),
  bo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  zc = ue({}, Li, bo),
  Jc = (e) => ((e.displayName = 'Transition'), (e.props = zc), e),
  Uf = Jc((e, { slots: t }) => Ns(Kl, Qc(e), t)),
  at = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Mr = (e) => (e ? (W(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Qc(e) {
  const t = {}
  for (const _ in e) _ in bo || (t[_] = e[_])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = o,
      appearToClass: a = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    x = Zc(r),
    b = x && x[0],
    j = x && x[1],
    {
      onBeforeEnter: L,
      onEnter: D,
      onEnterCancelled: p,
      onLeave: g,
      onLeaveCancelled: P,
      onBeforeAppear: U = L,
      onAppear: O = D,
      onAppearCancelled: B = p,
    } = t,
    C = (_, F, Y, re) => {
      ;(_._enterCancelled = re), ft(_, F ? a : l), ft(_, F ? f : o), Y && Y()
    },
    I = (_, F) => {
      ;(_._isLeaving = !1), ft(_, h), ft(_, v), ft(_, y), F && F()
    },
    A = (_) => (F, Y) => {
      const re = _ ? O : D,
        V = () => C(F, _, Y)
      at(re, [F, V]),
        Pr(() => {
          ft(F, _ ? c : i), Ke(F, _ ? a : l), Mr(re) || Ir(F, s, b, V)
        })
    }
  return ue(t, {
    onBeforeEnter(_) {
      at(L, [_]), Ke(_, i), Ke(_, o)
    },
    onBeforeAppear(_) {
      at(U, [_]), Ke(_, c), Ke(_, f)
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(_, F) {
      _._isLeaving = !0
      const Y = () => I(_, F)
      Ke(_, h),
        _._enterCancelled ? (Ke(_, y), Fr()) : (Fr(), Ke(_, y)),
        Pr(() => {
          _._isLeaving && (ft(_, h), Ke(_, v), Mr(g) || Ir(_, s, j, Y))
        }),
        at(g, [_, Y])
    },
    onEnterCancelled(_) {
      C(_, !1, void 0, !0), at(p, [_])
    },
    onAppearCancelled(_) {
      C(_, !0, void 0, !0), at(B, [_])
    },
    onLeaveCancelled(_) {
      I(_), at(P, [_])
    },
  })
}
function Zc(e) {
  if (e == null) return null
  if (ee(e)) return [cs(e.enter), cs(e.leave)]
  {
    const t = cs(e)
    return [t, t]
  }
}
function cs(e) {
  return zo(e)
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Zt] || (e[Zt] = new Set())).add(t)
}
function ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Zt]
  n && (n.delete(t), n.size || (e[Zt] = void 0))
}
function Pr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let ea = 0
function Ir(e, t, n, s) {
  const r = (e._endId = ++ea),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = ta(e, t)
  if (!o) return s()
  const f = o + 'end'
  let a = 0
  const h = () => {
      e.removeEventListener(f, y), i()
    },
    y = (v) => {
      v.target === e && ++a >= c && h()
    }
  setTimeout(() => {
    a < c && h()
  }, l + 1),
    e.addEventListener(f, y)
}
function ta(e, t) {
  const n = window.getComputedStyle(e),
    s = (x) => (n[x] || '').split(', '),
    r = s(`${Qe}Delay`),
    i = s(`${Qe}Duration`),
    o = Lr(r, i),
    l = s(`${Dt}Delay`),
    c = s(`${Dt}Duration`),
    f = Lr(l, c)
  let a = null,
    h = 0,
    y = 0
  t === Qe
    ? o > 0 && ((a = Qe), (h = o), (y = i.length))
    : t === Dt
      ? f > 0 && ((a = Dt), (h = f), (y = c.length))
      : ((h = Math.max(o, f)),
        (a = h > 0 ? (o > f ? Qe : Dt) : null),
        (y = a ? (a === Qe ? i.length : c.length) : 0))
  const v =
    a === Qe && /\b(transform|all)(,|$)/.test(s(`${Qe}Property`).toString())
  return { type: a, timeout: h, propCount: y, hasTransform: v }
}
function Lr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Nr(n) + Nr(e[s])))
}
function Nr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Fr() {
  return document.body.offsetHeight
}
function na(e, t, n) {
  const s = e[Zt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const Nn = Symbol('_vod'),
  wo = Symbol('_vsh'),
  Wf = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Nn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : $t(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), $t(e, !0), s.enter(e))
            : s.leave(e, () => {
                $t(e, !1)
              })
          : $t(e, t))
    },
    beforeUnmount(e, { value: t }) {
      $t(e, t)
    },
  }
function $t(e, t) {
  ;(e.style.display = t ? e[Nn] : 'none'), (e[wo] = !t)
}
const sa = Symbol(''),
  ra = /(^|;)\s*display\s*:/
function ia(e, t, n) {
  const s = e.style,
    r = oe(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && En(s, l, '')
        }
      else for (const o in t) n[o] == null && En(s, o, '')
    for (const o in n) o === 'display' && (i = !0), En(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[sa]
      o && (n += ';' + o), (s.cssText = n), (i = ra.test(n))
    }
  } else t && e.removeAttribute('style')
  Nn in e && ((e[Nn] = i ? s.display : ''), e[wo] && (s.display = 'none'))
}
const Hr = /\s*!important$/
function En(e, t, n) {
  if (W(n)) n.forEach((s) => En(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = oa(e, t)
    Hr.test(n)
      ? e.setProperty(rt(s), n.replace(Hr, ''), 'important')
      : (e[s] = n)
  }
}
const Dr = ['Webkit', 'Moz', 'ms'],
  as = {}
function oa(e, t) {
  const n = as[t]
  if (n) return n
  let s = Ne(t)
  if (s !== 'filter' && s in e) return (as[t] = s)
  s = Hn(s)
  for (let r = 0; r < Dr.length; r++) {
    const i = Dr[r] + s
    if (i in e) return (as[t] = i)
  }
  return t
}
const $r = 'http://www.w3.org/1999/xlink'
function jr(e, t, n, s, r, i = nl(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS($r, t.slice(6, t.length))
      : e.setAttributeNS($r, t, n)
    : n == null || (i && !li(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : De(n) ? String(n) : n)
}
function Vr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? _o(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = li(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function So(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function la(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const kr = Symbol('_vei')
function ca(e, t, n, s, r = null) {
  const i = e[kr] || (e[kr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = aa(t)
    if (s) {
      const f = (i[t] = da(s, r))
      So(e, l, f, c)
    } else o && (la(e, l, o, c), (i[t] = void 0))
  }
}
const Ur = /(?:Once|Passive|Capture)$/
function aa(e) {
  let t
  if (Ur.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Ur)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : rt(e.slice(2)), t]
}
let fs = 0
const fa = Promise.resolve(),
  ua = () => fs || (fa.then(() => (fs = 0)), (fs = Date.now()))
function da(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    $e(ha(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = ua()), n
}
function ha(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Wr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  pa = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? na(e, s, o)
      : t === 'style'
        ? ia(e, n, s)
        : en(t)
          ? Ds(t) || ca(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : ga(e, t, s, o)
              )
            ? (Vr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                jr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !oe(s))
              ? Vr(e, Ne(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                jr(e, t, s, o))
  }
function ga(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Wr(t) && q(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Wr(t) && oe(n) ? !1 : t in e
}
const Br = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return W(t) ? (n) => wn(t, n) : t
  },
  us = Symbol('_assign'),
  Bf = {
    created(e, { value: t }, n) {
      ;(e.checked = Cn(t, n.props.value)),
        (e[us] = Br(n)),
        So(e, 'change', () => {
          e[us](ma(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[us] = Br(s)), t !== n && (e.checked = Cn(t, s.props.value))
    },
  }
function ma(e) {
  return '_value' in e ? e._value : e.value
}
const ya = ['ctrl', 'shift', 'alt', 'meta'],
  va = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ya.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Kf = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = va[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  _a = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  qf = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = rt(r.key)
        if (t.some((o) => o === i || _a[o] === i)) return e(r)
      })
    )
  },
  xo = ue({ patchProp: pa }, Yc)
let Kt,
  Kr = !1
function Eo() {
  return Kt || (Kt = xc(xo))
}
function ba() {
  return (Kt = Kr ? Kt : Ec(xo)), (Kr = !0), Kt
}
const Gf = (...e) => {
    Eo().render(...e)
  },
  Xf = (...e) => {
    const t = Eo().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Co(s)
        if (!r) return
        const i = t._component
        !q(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = '')
        const o = n(r, !1, To(r))
        return (
          r instanceof Element &&
            (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  },
  Yf = (...e) => {
    const t = ba().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Co(s)
        if (r) return n(r, !0, To(r))
      }),
      t
    )
  }
function To(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Co(e) {
  return oe(e) ? document.querySelector(e) : e
}
const wa = window.__VP_SITE_DATA__
function Ao(e) {
  return fi() ? (ol(e), !0) : !1
}
const ds = new WeakMap(),
  Sa = (...e) => {
    var t
    const n = e[0],
      s = (t = on()) == null ? void 0 : t.proxy
    if (s == null && !Ki())
      throw new Error('injectLocal must be called in setup')
    return s && ds.has(s) && n in ds.get(s) ? ds.get(s)[n] : yt(...e)
  },
  Ro = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const xa = Object.prototype.toString,
  Ea = (e) => xa.call(e) === '[object Object]',
  wt = () => {},
  qr = Ta()
function Ta() {
  var e, t
  return (
    Ro &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        )))
  )
}
function nr(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const Oo = (e) => e()
function Ca(e, t = {}) {
  let n,
    s,
    r = wt
  const i = (c) => {
    clearTimeout(c), r(), (r = wt)
  }
  let o
  return (c) => {
    const f = le(e),
      a = le(t.maxWait)
    return (
      n && i(n),
      f <= 0 || (a !== void 0 && a <= 0)
        ? (s && (i(s), (s = null)), Promise.resolve(c()))
        : new Promise((h, y) => {
            ;(r = t.rejectOnCancel ? y : h),
              (o = c),
              a &&
                !s &&
                (s = setTimeout(() => {
                  n && i(n), (s = null), h(o())
                }, a)),
              (n = setTimeout(() => {
                s && i(s), (s = null), h(c())
              }, f))
          })
    )
  }
}
function Aa(...e) {
  let t = 0,
    n,
    s = !0,
    r = wt,
    i,
    o,
    l,
    c,
    f
  !pe(e[0]) && typeof e[0] == 'object'
    ? ({
        delay: o,
        trailing: l = !0,
        leading: c = !0,
        rejectOnCancel: f = !1,
      } = e[0])
    : ([o, l = !0, c = !0, f = !1] = e)
  const a = () => {
    n && (clearTimeout(n), (n = void 0), r(), (r = wt))
  }
  return (y) => {
    const v = le(o),
      x = Date.now() - t,
      b = () => (i = y())
    return (
      a(),
      v <= 0
        ? ((t = Date.now()), b())
        : (x > v && (c || !s)
            ? ((t = Date.now()), b())
            : l &&
              (i = new Promise((j, L) => {
                ;(r = f ? L : j),
                  (n = setTimeout(
                    () => {
                      ;(t = Date.now()), (s = !0), j(b()), a()
                    },
                    Math.max(0, v - x),
                  ))
              })),
          !c && !n && (n = setTimeout(() => (s = !0), v)),
          (s = !1),
          i)
    )
  }
}
function Ra(e = Oo) {
  const t = fe(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: Un(t), pause: n, resume: s, eventFilter: r }
}
function Gr(e) {
  return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function Oa(e) {
  return on()
}
function hs(e) {
  return Array.isArray(e) ? e : [e]
}
function Mo(...e) {
  if (e.length !== 1) return Ll(...e)
  const t = e[0]
  return typeof t == 'function' ? Un(Ml(() => ({ get: t, set: wt }))) : fe(t)
}
function Ma(e, t = 200, n = {}) {
  return nr(Ca(t, n), e)
}
function Pa(e, t = 200, n = !1, s = !0, r = !1) {
  return nr(Aa(t, n, s, r), e)
}
function Ia(e, t, n = {}) {
  const { eventFilter: s = Oo, ...r } = n
  return Le(e, nr(s, t), r)
}
function La(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = Ra(s)
  return {
    stop: Ia(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function Yn(e, t = !0, n) {
  Oa() ? Lt(e, n) : t ? e() : Wn(e)
}
function Na(e, t, n) {
  return Le(e, t, { ...n, immediate: !0 })
}
const Ye = Ro ? window : void 0
function sr(e) {
  var t
  const n = le(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function ze(...e) {
  const t = [],
    n = () => {
      t.forEach((l) => l()), (t.length = 0)
    },
    s = (l, c, f, a) => (
      l.addEventListener(c, f, a), () => l.removeEventListener(c, f, a)
    ),
    r = ie(() => {
      const l = hs(le(e[0])).filter((c) => c != null)
      return l.every((c) => typeof c != 'string') ? l : void 0
    }),
    i = Na(
      () => {
        var l, c
        return [
          (c = (l = r.value) == null ? void 0 : l.map((f) => sr(f))) != null
            ? c
            : [Ye].filter((f) => f != null),
          hs(le(r.value ? e[1] : e[0])),
          hs(Gs(r.value ? e[2] : e[1])),
          le(r.value ? e[3] : e[2]),
        ]
      },
      ([l, c, f, a]) => {
        if (
          (n(),
          !(l != null && l.length) ||
            !(c != null && c.length) ||
            !(f != null && f.length))
        )
          return
        const h = Ea(a) ? { ...a } : a
        t.push(
          ...l.flatMap((y) => c.flatMap((v) => f.map((x) => s(y, v, x, h)))),
        )
      },
      { flush: 'post' },
    ),
    o = () => {
      i(), n()
    }
  return Ao(n), o
}
function Fa() {
  const e = fe(!1),
    t = on()
  return (
    t &&
      Lt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Ha(e) {
  const t = Fa()
  return ie(() => (t.value, !!e()))
}
function Da(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function zf(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Ye,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = Da(t)
  return ze(
    r,
    i,
    (a) => {
      ;(a.repeat && le(l)) || (c(a) && n(a))
    },
    o,
  )
}
const $a = Symbol('vueuse-ssr-width')
function ja() {
  const e = Ki() ? Sa($a, null) : null
  return typeof e == 'number' ? e : void 0
}
function Po(e, t = {}) {
  const { window: n = Ye, ssrWidth: s = ja() } = t,
    r = Ha(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function'),
    i = fe(typeof s == 'number'),
    o = qs(),
    l = fe(!1),
    c = (f) => {
      l.value = f.matches
    }
  return (
    io(() => {
      if (i.value) {
        i.value = !r.value
        const f = le(e).split(',')
        l.value = f.some((a) => {
          const h = a.includes('not all'),
            y = a.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            v = a.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
          let x = !!(y || v)
          return (
            y && x && (x = s >= Gr(y[1])),
            v && x && (x = s <= Gr(v[1])),
            h ? !x : x
          )
        })
        return
      }
      r.value && ((o.value = n.matchMedia(le(e))), (l.value = o.value.matches))
    }),
    ze(o, 'change', c, { passive: !0 }),
    ie(() => l.value)
  )
}
const mn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  yn = '__vueuse_ssr_handlers__',
  Va = ka()
function ka() {
  return yn in mn || (mn[yn] = mn[yn] || {}), mn[yn]
}
function Io(e, t) {
  return Va[e] || t
}
function Lo(e) {
  return Po('(prefers-color-scheme: dark)', e)
}
function Ua(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const Wa = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Xr = 'vueuse-storage'
function Ba(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: f = !1,
      shallow: a,
      window: h = Ye,
      eventFilter: y,
      onError: v = (A) => {
        console.error(A)
      },
      initOnMounted: x,
    } = s,
    b = (a ? qs : fe)(typeof t == 'function' ? t() : t),
    j = ie(() => le(e))
  if (!n)
    try {
      n = Io('getDefaultStorage', () => {
        var A
        return (A = Ye) == null ? void 0 : A.localStorage
      })()
    } catch (A) {
      v(A)
    }
  if (!n) return b
  const L = le(t),
    D = Ua(L),
    p = (r = s.serializer) != null ? r : Wa[D],
    { pause: g, resume: P } = La(b, () => O(b.value), {
      flush: i,
      deep: o,
      eventFilter: y,
    })
  Le(j, () => C(), { flush: i }),
    h &&
      l &&
      Yn(() => {
        n instanceof Storage
          ? ze(h, 'storage', C, { passive: !0 })
          : ze(h, Xr, I),
          x && C()
      }),
    x || C()
  function U(A, _) {
    if (h) {
      const F = { key: j.value, oldValue: A, newValue: _, storageArea: n }
      h.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', F)
          : new CustomEvent(Xr, { detail: F }),
      )
    }
  }
  function O(A) {
    try {
      const _ = n.getItem(j.value)
      if (A == null) U(_, null), n.removeItem(j.value)
      else {
        const F = p.write(A)
        _ !== F && (n.setItem(j.value, F), U(_, F))
      }
    } catch (_) {
      v(_)
    }
  }
  function B(A) {
    const _ = A ? A.newValue : n.getItem(j.value)
    if (_ == null) return c && L != null && n.setItem(j.value, p.write(L)), L
    if (!A && f) {
      const F = p.read(_)
      return typeof f == 'function'
        ? f(F, L)
        : D === 'object' && !Array.isArray(F)
          ? { ...L, ...F }
          : F
    } else return typeof _ != 'string' ? _ : p.read(_)
  }
  function C(A) {
    if (!(A && A.storageArea !== n)) {
      if (A && A.key == null) {
        b.value = L
        return
      }
      if (!(A && A.key !== j.value)) {
        g()
        try {
          ;(A == null ? void 0 : A.newValue) !== p.write(b.value) &&
            (b.value = B(A))
        } catch (_) {
          v(_)
        } finally {
          A ? Wn(P) : P()
        }
      }
    }
  }
  function I(A) {
    C(A.detail)
  }
  return b
}
const Ka =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function qa(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Ye,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: f,
      disableTransition: a = !0,
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    y = Lo({ window: r }),
    v = ie(() => (y.value ? 'dark' : 'light')),
    x =
      c ||
      (o == null
        ? Mo(s)
        : Ba(o, s, i, { window: r, listenToStorageChanges: l })),
    b = ie(() => (x.value === 'auto' ? v.value : x.value)),
    j = Io('updateHTMLAttrs', (g, P, U) => {
      const O =
        typeof g == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(g)
          : sr(g)
      if (!O) return
      const B = new Set(),
        C = new Set()
      let I = null
      if (P === 'class') {
        const _ = U.split(/\s/g)
        Object.values(h)
          .flatMap((F) => (F || '').split(/\s/g))
          .filter(Boolean)
          .forEach((F) => {
            _.includes(F) ? B.add(F) : C.add(F)
          })
      } else I = { key: P, value: U }
      if (B.size === 0 && C.size === 0 && I === null) return
      let A
      a &&
        ((A = r.document.createElement('style')),
        A.appendChild(document.createTextNode(Ka)),
        r.document.head.appendChild(A))
      for (const _ of B) O.classList.add(_)
      for (const _ of C) O.classList.remove(_)
      I && O.setAttribute(I.key, I.value),
        a && (r.getComputedStyle(A).opacity, document.head.removeChild(A))
    })
  function L(g) {
    var P
    j(t, n, (P = h[g]) != null ? P : g)
  }
  function D(g) {
    e.onChanged ? e.onChanged(g, L) : L(g)
  }
  Le(b, D, { flush: 'post', immediate: !0 }), Yn(() => D(b.value))
  const p = ie({
    get() {
      return f ? x.value : b.value
    },
    set(g) {
      x.value = g
    },
  })
  return Object.assign(p, { store: x, system: v, state: b })
}
function Ga(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    s = qa({
      ...e,
      onChanged: (o, l) => {
        var c
        e.onChanged
          ? (c = e.onChanged) == null || c.call(e, o === 'dark', l, o)
          : l(o)
      },
      modes: { dark: t, light: n },
    }),
    r = ie(() => s.system.value)
  return ie({
    get() {
      return s.value === 'dark'
    },
    set(o) {
      const l = o ? 'dark' : 'light'
      r.value === l ? (s.value = 'auto') : (s.value = l)
    },
  })
}
function ps(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
const Yr = 1
function Xa(e, t = {}) {
  const {
      throttle: n = 0,
      idle: s = 200,
      onStop: r = wt,
      onScroll: i = wt,
      offset: o = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: l = { capture: !1, passive: !0 },
      behavior: c = 'auto',
      window: f = Ye,
      onError: a = (O) => {
        console.error(O)
      },
    } = t,
    h = fe(0),
    y = fe(0),
    v = ie({
      get() {
        return h.value
      },
      set(O) {
        b(O, void 0)
      },
    }),
    x = ie({
      get() {
        return y.value
      },
      set(O) {
        b(void 0, O)
      },
    })
  function b(O, B) {
    var C, I, A, _
    if (!f) return
    const F = le(e)
    if (!F) return
    ;(A = F instanceof Document ? f.document.body : F) == null ||
      A.scrollTo({
        top: (C = le(B)) != null ? C : x.value,
        left: (I = le(O)) != null ? I : v.value,
        behavior: le(c),
      })
    const Y =
      ((_ = F == null ? void 0 : F.document) == null
        ? void 0
        : _.documentElement) ||
      (F == null ? void 0 : F.documentElement) ||
      F
    v != null && (h.value = Y.scrollLeft), x != null && (y.value = Y.scrollTop)
  }
  const j = fe(!1),
    L = Pt({ left: !0, right: !1, top: !0, bottom: !1 }),
    D = Pt({ left: !1, right: !1, top: !1, bottom: !1 }),
    p = (O) => {
      j.value &&
        ((j.value = !1),
        (D.left = !1),
        (D.right = !1),
        (D.top = !1),
        (D.bottom = !1),
        r(O))
    },
    g = Ma(p, n + s),
    P = (O) => {
      var B
      if (!f) return
      const C =
          ((B = O == null ? void 0 : O.document) == null
            ? void 0
            : B.documentElement) ||
          (O == null ? void 0 : O.documentElement) ||
          sr(O),
        { display: I, flexDirection: A, direction: _ } = getComputedStyle(C),
        F = _ === 'rtl' ? -1 : 1,
        Y = C.scrollLeft
      ;(D.left = Y < h.value), (D.right = Y > h.value)
      const re = Y * F <= (o.left || 0),
        V = Y * F + C.clientWidth >= C.scrollWidth - (o.right || 0) - Yr
      I === 'flex' && A === 'row-reverse'
        ? ((L.left = V), (L.right = re))
        : ((L.left = re), (L.right = V)),
        (h.value = Y)
      let X = C.scrollTop
      O === f.document && !X && (X = f.document.body.scrollTop),
        (D.top = X < y.value),
        (D.bottom = X > y.value)
      const $ = X <= (o.top || 0),
        ae = X + C.clientHeight >= C.scrollHeight - (o.bottom || 0) - Yr
      I === 'flex' && A === 'column-reverse'
        ? ((L.top = ae), (L.bottom = $))
        : ((L.top = $), (L.bottom = ae)),
        (y.value = X)
    },
    U = (O) => {
      var B
      if (!f) return
      const C = (B = O.target.documentElement) != null ? B : O.target
      P(C), (j.value = !0), g(O), i(O)
    }
  return (
    ze(e, 'scroll', n ? Pa(U, n, !0, !1) : U, l),
    Yn(() => {
      try {
        const O = le(e)
        if (!O) return
        P(O)
      } catch (O) {
        a(O)
      }
    }),
    ze(e, 'scrollend', p, l),
    {
      x: v,
      y: x,
      isScrolling: j,
      arrivedState: L,
      directions: D,
      measure() {
        const O = le(e)
        f && O && P(O)
      },
    }
  )
}
function No(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : No(n)
  }
}
function Ya(e) {
  const t = e || window.event,
    n = t.target
  return No(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const gs = new WeakMap()
function Jf(e, t = !1) {
  const n = fe(t)
  let s = null,
    r = ''
  Le(
    Mo(e),
    (l) => {
      const c = ps(le(l))
      if (c) {
        const f = c
        if (
          (gs.get(f) || gs.set(f, f.style.overflow),
          f.style.overflow !== 'hidden' && (r = f.style.overflow),
          f.style.overflow === 'hidden')
        )
          return (n.value = !0)
        if (n.value) return (f.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const i = () => {
      const l = ps(le(e))
      !l ||
        n.value ||
        (qr &&
          (s = ze(
            l,
            'touchmove',
            (c) => {
              Ya(c)
            },
            { passive: !1 },
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      const l = ps(le(e))
      !l ||
        !n.value ||
        (qr && (s == null || s()),
        (l.style.overflow = r),
        gs.delete(l),
        (n.value = !1))
    }
  return (
    Ao(o),
    ie({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      },
    })
  )
}
function Qf(e = {}) {
  const { window: t = Ye, ...n } = e
  return Xa(t, n)
}
function Zf(e = {}) {
  const {
      window: t = Ye,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner',
    } = e,
    l = fe(n),
    c = fe(s),
    f = () => {
      if (t)
        if (o === 'outer') (l.value = t.outerWidth), (c.value = t.outerHeight)
        else if (o === 'visual' && t.visualViewport) {
          const { width: h, height: y, scale: v } = t.visualViewport
          ;(l.value = Math.round(h * v)), (c.value = Math.round(y * v))
        } else
          i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight))
    }
  f(), Yn(f)
  const a = { passive: !0 }
  if (
    (ze('resize', f, a),
    t &&
      o === 'visual' &&
      t.visualViewport &&
      ze(t.visualViewport, 'resize', f, a),
    r)
  ) {
    const h = Po('(orientation: portrait)')
    Le(h, () => f())
  }
  return { width: l, height: c }
}
const ms = {
  BASE_URL: '/Versakit/',
  DEV: !1,
  MODE: 'production',
  PROD: !0,
  SSR: !1,
}
var ys = {}
const Fo = /^(?:[a-z]+:|\/\/)/i,
  za = 'vitepress-theme-appearance',
  Ja = /#.*$/,
  Qa = /[?#].*$/,
  Za = /(?:(^|\/)index)?\.(?:md|html)$/,
  me = typeof document < 'u',
  Ho = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function ef(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = zr(`/${e}`)), n)) return new RegExp(t).test(e)
  if (zr(t) !== e) return !1
  const s = t.match(Ja)
  return s ? (me ? location.hash : '') === s[0] : !0
}
function zr(e) {
  return decodeURI(e).replace(Qa, '').replace(Za, '$1')
}
function tf(e) {
  return Fo.test(e)
}
function nf(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !tf(n) && ef(t, `/${n}/`, !0),
    ) || 'root'
  )
}
function sf(e, t) {
  var s, r, i, o, l, c, f
  const n = nf(e, t)
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: $o(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((f = e.locales[n]) == null ? void 0 : f.themeConfig),
    },
  })
}
function Do(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = rf(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function rf(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function of(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function $o(e, t) {
  return [...e.filter((n) => !of(t, n)), ...t]
}
const lf = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  cf = /^[a-z]:/i
function Jr(e) {
  const t = cf.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(lf, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const vs = new Set()
function af(e) {
  if (vs.size === 0) {
    const n =
      (typeof process == 'object' &&
        (ys == null ? void 0 : ys.VITE_EXTRA_EXTENSIONS)) ||
      (ms == null ? void 0 : ms.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => vs.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !vs.has(t.toLowerCase())
}
const ff = Symbol(),
  _t = qs(wa)
function eu(e) {
  const t = ie(() => sf(_t.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? fe(!0)
        : n === 'force-auto'
          ? Lo()
          : n
            ? Ga({
                storageKey: za,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {}),
              })
            : fe(!1),
    r = fe(me ? location.hash : '')
  return (
    me &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    Le(
      () => e.data,
      () => {
        r.value = me ? location.hash : ''
      },
    ),
    {
      site: t,
      theme: ie(() => t.value.themeConfig),
      page: ie(() => e.data),
      frontmatter: ie(() => e.data.frontmatter),
      params: ie(() => e.data.params),
      lang: ie(() => t.value.lang),
      dir: ie(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: ie(() => t.value.localeIndex || 'root'),
      title: ie(() => Do(t.value, e.data)),
      description: ie(() => e.data.description || t.value.description),
      isDark: s,
      hash: ie(() => r.value),
    }
  )
}
function uf() {
  const e = yt(ff)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function df(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Qr(e) {
  return Fo.test(e) || !e.startsWith('/') ? e : df(_t.value.base, e)
}
function hf(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), me)) {
    const n = '/Versakit/'
    t = Jr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${Jr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let Tn = []
function tu(e) {
  Tn.push(e),
    Kn(() => {
      Tn = Tn.filter((t) => t !== e)
    })
}
function pf() {
  let e = _t.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Zr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Zr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Zr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const gf = Symbol(),
  jo = 'http://a.com',
  mf = () => ({ path: '/', component: null, data: Ho })
function nu(e, t) {
  const n = Pt(mf()),
    s = { route: n, go: r }
  async function r(l = me ? location.href : '/') {
    var c, f
    ;(l = _s(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (me &&
          l !== _s(location.href) &&
          (history.replaceState({ scrollPosition: window.scrollY }, ''),
          history.pushState({}, '', l)),
        await o(l),
        await ((f = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null
          ? void 0
          : f(l)))
  }
  let i = null
  async function o(l, c = 0, f = !1) {
    var y, v
    if (
      (await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l))) === !1
    )
      return
    const a = new URL(l, jo),
      h = (i = a.pathname)
    try {
      let x = await e(h)
      if (!x) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: b, __pageData: j } = x
        if (!b) throw new Error(`Invalid route component: ${b}`)
        await ((v = s.onAfterPageLoad) == null ? void 0 : v.call(s, l)),
          (n.path = me ? h : Qr(h)),
          (n.component = Sn(b)),
          (n.data = Sn(j)),
          me &&
            Wn(() => {
              let L =
                _t.value.base +
                j.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!_t.value.cleanUrls && !L.endsWith('/') && (L += '.html'),
                L !== a.pathname &&
                  ((a.pathname = L),
                  (l = L + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let D = null
                try {
                  D = document.getElementById(
                    decodeURIComponent(a.hash).slice(1),
                  )
                } catch (p) {
                  console.warn(p)
                }
                if (D) {
                  ei(D, a.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (x) {
      if (
        (!/fetch|Page not found/.test(x.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(x),
        !f)
      )
        try {
          const b = await fetch(_t.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await b.json()), await o(l, c, !0)
          return
        } catch {}
      if (i === h) {
        ;(i = null), (n.path = me ? h : Qr(h)), (n.component = t ? Sn(t) : null)
        const b = me
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...Ho, relativePath: b }
      }
    }
  }
  return (
    me &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return
          const c = l.target.closest('a')
          if (
            !c ||
            c.closest('.vp-raw') ||
            c.hasAttribute('download') ||
            c.hasAttribute('target')
          )
            return
          const f =
            c.getAttribute('href') ??
            (c instanceof SVGAElement ? c.getAttribute('xlink:href') : null)
          if (f == null) return
          const {
              href: a,
              origin: h,
              pathname: y,
              hash: v,
              search: x,
            } = new URL(f, c.baseURI),
            b = new URL(location.href)
          h === b.origin &&
            af(y) &&
            (l.preventDefault(),
            y === b.pathname && x === b.search
              ? (v !== b.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: b.href,
                      newURL: a,
                    }),
                  )),
                v
                  ? ei(c, v, c.classList.contains('header-anchor'))
                  : window.scrollTo(0, 0))
              : r(a))
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var f
        if (l.state === null) return
        const c = _s(location.href)
        await o(c, (l.state && l.state.scrollPosition) || 0),
          await ((f = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null
            ? void 0
            : f(c))
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function yf() {
  const e = yt(gf)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function Vo() {
  return yf().route
}
function ei(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - pf() + i
    requestAnimationFrame(r)
  }
}
function _s(e) {
  const t = new URL(e, jo)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    _t.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const vn = () => Tn.forEach((e) => e()),
  su = Ys({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Vo(),
        { frontmatter: n, site: s } = uf()
      return (
        Le(n, vn, { deep: !0, flush: 'post' }),
        () =>
          Ns(
            e.as,
            s.value.contentProps ?? { style: { position: 'relative' } },
            [
              t.component
                ? Ns(t.component, {
                    onVnodeMounted: vn,
                    onVnodeUpdated: vn,
                    onVnodeUnmounted: vn,
                  })
                : '404 Page Not Found',
            ],
          )
      )
    },
  }),
  ru = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  vf = 'modulepreload',
  _f = function (e) {
    return '/Versakit/' + e
  },
  ti = {},
  iu = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        l =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute('nonce'))
      r = Promise.allSettled(
        n.map((c) => {
          if (((c = _f(c)), c in ti)) return
          ti[c] = !0
          const f = c.endsWith('.css'),
            a = f ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${a}`)) return
          const h = document.createElement('link')
          if (
            ((h.rel = f ? 'stylesheet' : vf),
            f || (h.as = 'script'),
            (h.crossOrigin = ''),
            (h.href = c),
            l && h.setAttribute('nonce', l),
            document.head.appendChild(h),
            f)
          )
            return new Promise((y, v) => {
              h.addEventListener('load', y),
                h.addEventListener('error', () =>
                  v(new Error(`Unable to preload CSS for ${c}`)),
                )
            })
        }),
      )
    }
    function i(o) {
      const l = new Event('vite:preloadError', { cancelable: !0 })
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented))
        throw o
    }
    return r.then((o) => {
      for (const l of o || []) l.status === 'rejected' && i(l.reason)
      return t().catch(i)
    })
  },
  ou = Ys({
    setup(e, { slots: t }) {
      const n = fe(!1)
      return (
        Lt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function lu() {
  me &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((f) =>
          f.classList.contains('active'),
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function cu() {
  if (me) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((a) => a.remove())
        let f = c.textContent || ''
        o && (f = f.replace(/^ *(\$|>) /gm, '').trim()),
          bf(f).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, a)
          })
      }
    })
  }
}
async function bf(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function au(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = bs(l)
          for (const f of document.head.children)
            if (f.isEqualNode(c)) {
              s.push(f)
              return
            }
        })
      return
    }
    const o = i.map(bs)
    s.forEach((l, c) => {
      const f = o.findIndex((a) =>
        a == null ? void 0 : a.isEqualNode(l ?? null),
      )
      f !== -1 ? delete o[f] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  io(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      f = Do(o, i)
    f !== document.title && (document.title = f)
    const a = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== a && h.setAttribute('content', a)
      : bs(['meta', { name: 'description', content: a }]),
      r($o(o.head, Sf(c)))
  })
}
function bs([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return (
    n && (s.innerHTML = n),
    e === 'script' && t.async == null && (s.async = !1),
    s
  )
}
function wf(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Sf(e) {
  return e.filter((t) => !wf(t))
}
const ws = new Set(),
  ko = () => document.createElement('link'),
  xf = (e) => {
    const t = ko()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  Ef = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let _n
const Tf =
  me &&
  (_n = ko()) &&
  _n.relList &&
  _n.relList.supports &&
  _n.relList.supports('prefetch')
    ? xf
    : Ef
function fu() {
  if (!me || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!ws.has(c)) {
              ws.add(c)
              const f = hf(c)
              f && Tf(f)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : ws.add(l)))
        })
      })
  }
  Lt(s)
  const r = Vo()
  Le(() => r.path, s),
    Kn(() => {
      n && n.disconnect()
    })
}
export {
  ji as $,
  pf as A,
  Mf as B,
  Lf as C,
  qs as D,
  tu as E,
  xe as F,
  ce as G,
  Pf as H,
  Fo as I,
  Vo as J,
  Dc as K,
  yt as L,
  Zf as M,
  $n as N,
  zf as O,
  Wn as P,
  Qf as Q,
  me as R,
  Un as S,
  Uf as T,
  Of as U,
  iu as V,
  Jf as W,
  mc as X,
  Ff as Y,
  qf as Z,
  ru as _,
  go as a,
  Kf as a0,
  Hf as a1,
  Cl as a2,
  Ns as a3,
  Gf as a4,
  Df as a5,
  Cf as a6,
  Hc as a7,
  Rf as a8,
  Wf as a9,
  Bf as aa,
  au as ab,
  gf as ac,
  eu as ad,
  ff as ae,
  su as af,
  ou as ag,
  _t as ah,
  Yf as ai,
  nu as aj,
  hf as ak,
  fu as al,
  cu as am,
  lu as an,
  Pt as ao,
  Af as ap,
  Vf as aq,
  If as ar,
  pe as as,
  Xf as at,
  yf as au,
  Is as b,
  jf as c,
  Ys as d,
  kf as e,
  af as f,
  Qr as g,
  ie as h,
  tf as i,
  po as j,
  Gs as k,
  ef as l,
  Po as m,
  jn as n,
  Ps as o,
  fe as p,
  Le as q,
  Nf as r,
  io as s,
  rl as t,
  uf as u,
  Lt as v,
  kl as w,
  Kn as x,
  $f as y,
  nc as z,
}
