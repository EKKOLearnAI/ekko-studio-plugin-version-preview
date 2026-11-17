// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), E = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, D = /-\w/g, O = E((e) => e.replace(D, (e) => e.slice(1).toUpperCase())), k = /\B([A-Z])/g, A = E((e) => e.replace(k, "-$1").toLowerCase()), ee = E((e) => e.charAt(0).toUpperCase() + e.slice(1)), j = E((e) => e ? `on${ee(e)}` : ""), te = (e, t) => !Object.is(e, t), ne = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, M = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, re = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ie = (e) => {
	let t = g(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ae, oe = () => ae || (ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function se(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? de(r) : se(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var ce = /;(?![^(]*\))/g, le = /:([^]+)/, ue = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function de(e) {
	let t = {};
	return e.replace(ue, (e) => e.startsWith("/*") ? "" : e).split(ce).forEach((e) => {
		if (e) {
			let n = e.split(le);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function fe(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = fe(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var pe = /* @__PURE__ */ e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function me(e) {
	return !!e || e === "";
}
function he(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = ye(e[i], t[i], n);
	return r;
}
function ge(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && ye(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function _e(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? ge(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !ye(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function ve(e, t, n, r) {
	n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function ye(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? ve(e, t, n, he) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : ve(e, t, n, _e) : String(e) === String(t))));
}
var be = (e) => !!(e && e.__v_isRef === !0), N = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? be(e) ? N(e.value) : JSON.stringify(e, xe, 2) : String(e), xe = (e, t) => be(t) ? xe(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Se(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Se(e)) } : _(t) ? Se(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Se = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, Ce, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ce && (Ce.active ? (this.parent = Ce, this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = Ce;
			try {
				return Ce = this, e();
			} finally {
				Ce = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Ce, Ce = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ce === this) Ce = this.prevScope;
			else {
				let e = Ce;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te() {
	return Ce;
}
var P, Ee = /* @__PURE__ */ new WeakSet(), De = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && (Ce.active ? Ce.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ee.has(this) && (Ee.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || je(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, We(this), Pe(this);
		let e = P, t = Be;
		P = this, Be = !0;
		try {
			return this.fn();
		} finally {
			Fe(this), P = e, Be = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Re(e);
			this.deps = this.depsTail = void 0, We(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ee.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ie(this) && this.run();
	}
	get dirty() {
		return Ie(this);
	}
}, Oe = 0, ke, Ae;
function je(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ae, Ae = e) : (e.next = ke, ke = e);
}
function Me() {
	Oe++;
}
function Ne() {
	if (--Oe > 0) return;
	if (Ae) {
		let e = Ae;
		for (Ae = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ke;) {
		let t = ke;
		for (ke = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e || (e = t);
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Pe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Re(r), ze(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Le(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Le(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ge) || (e.globalVersion = Ge, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ie(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = P, r = Be;
	P = e, Be = !0;
	try {
		Pe(e);
		let n = e.fn(e._value);
		(t.version === 0 || te(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		P = n, Be = r, Fe(e), e.flags &= -3;
	}
}
function Re(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Re(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function ze(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Be = !0, Ve = [];
function He() {
	Ve.push(Be), Be = !1;
}
function Ue() {
	let e = Ve.pop();
	Be = e === void 0 || e;
}
function We(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = P;
		P = void 0;
		try {
			t();
		} finally {
			P = e;
		}
	}
}
var Ge = 0, Ke = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!P || !Be || P === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== P) t = this.activeLink = new Ke(P, this), P.deps ? (t.prevDep = P.depsTail, P.depsTail.nextDep = t, P.depsTail = t) : P.deps = P.depsTail = t, Je(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = P.depsTail, t.nextDep = void 0, P.depsTail.nextDep = t, P.depsTail = t, P.deps === t && (P.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ge++, this.notify(e);
	}
	notify(e) {
		Me();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ne();
		}
	}
};
function Je(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Je(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ye = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ Symbol(""), Ze = /* @__PURE__ */ Symbol(""), Qe = /* @__PURE__ */ Symbol("");
function $e(e, t, n) {
	if (Be && P) {
		let t = Ye.get(e);
		t || Ye.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new qe()), r.map = t, r.key = n), r.track();
	}
}
function et(e, t, n, r, i, a) {
	let o = Ye.get(e);
	if (!o) {
		Ge++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Me(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Qe || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Qe)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Xe)), f(e) && s(o.get(Ze)));
				break;
			case "delete":
				i || (s(o.get(Xe)), f(e) && s(o.get(Ze)));
				break;
			case "set": f(e) && s(o.get(Xe));
		}
	}
	Ne();
}
function tt(e, t) {
	let n = Ye.get(e);
	return n && n.get(t);
}
function nt(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e || ($e(t, "iterate", Qe), /* @__PURE__ */ Ht(e)) ? t : /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e) ? t.map((e) => Kt(Gt(e))) : t.map(Kt) : t.map(Gt);
}
function rt(e) {
	return $e(e = /* @__PURE__ */ F(e), "iterate", Qe), e;
}
function it(e, t) {
	return /* @__PURE__ */ Vt(e) ? Kt(/* @__PURE__ */ Bt(e) ? Gt(t) : t) : Gt(t);
}
var at = {
	__proto__: null,
	[Symbol.iterator]() {
		return ot(this, Symbol.iterator, (e) => it(this, e));
	},
	concat(...e) {
		return nt(this).concat(...e.map((e) => d(e) ? nt(e) : e));
	},
	entries() {
		return ot(this, "entries", (e) => (e[1] = it(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => it(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => it(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => it(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return nt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return nt(this).toReversed();
	},
	toSorted(e) {
		return nt(this).toSorted(e);
	},
	toSpliced(...e) {
		return nt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return ot(this, "values", (e) => it(this, e));
	}
};
function ot(e, t, n) {
	let r = rt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Ht(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => st(a.next(), n), i !== ct[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => st(a._next(), n);
	}
	return a;
}
function st(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = rt(e), s = o !== e && !/* @__PURE__ */ Ht(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? Gt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, it(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = rt(e), a = i !== e && !/* @__PURE__ */ Ht(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = it(e, t)), n.call(this, t, it(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? it(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	$e(r, "iterate", Qe);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ut(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	He(), Me();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Ne(), Ue(), r;
}
var pt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ht(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return $e(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = at[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ qt(e) ? e : n);
		if ((_(t) ? mt.has(t) : pt(t)) || (r || $e(e, "get", t), i)) return o;
		if (/* @__PURE__ */ qt(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Rt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Rt(o) : /* @__PURE__ */ It(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Vt(i);
			if (!/* @__PURE__ */ Ht(n) && !/* @__PURE__ */ Vt(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ qt(i) && !/* @__PURE__ */ qt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ qt(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && s && (o ? te(n, i) && et(e, "set", t, n, i) : et(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && et(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && mt.has(t) || $e(e, "has", t), n;
	}
	ownKeys(e) {
		return $e(e, "iterate", d(e) ? "length" : Xe), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? St : t ? Kt : Gt;
		return !t && $e(a, "iterate", l ? Ze : Xe), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (te(n, a) && $e(i, "get", n), $e(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? Kt : Gt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && $e(/* @__PURE__ */ F(t), "iterate", Xe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (te(t, i) && $e(r, "has", t), $e(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? St : e ? Kt : Gt;
			return !e && $e(o, "iterate", Xe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = Ct(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ Ht(e) && !/* @__PURE__ */ Vt(e) ? i : e;
			return r.has.call(n, a) || te(e, a) && r.has.call(n, e) || te(i, a) && r.has.call(n, i) || (n.add(a), et(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Ht(n) || /* @__PURE__ */ Vt(n) || (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o || (e = /* @__PURE__ */ F(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? te(n, s) && et(r, "set", e, n, s) : et(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i || (e = /* @__PURE__ */ F(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && et(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && et(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return /* @__PURE__ */ Vt(e) ? e : zt(e, !1, yt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return zt(e, !1, xt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return zt(e, !0, bt, At, Nt);
}
function zt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ft(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function Wt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && M(e, "__v_skip", !0), e;
}
var Gt = (e) => v(e) ? /* @__PURE__ */ It(e) : e, Kt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return Yt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Yt(e, !0);
}
function Yt(e, t) {
	return /* @__PURE__ */ qt(e) ? e : new Xt(e, t);
}
var Xt = class {
	constructor(e, t) {
		this.dep = new qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Gt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ht(e) || /* @__PURE__ */ Vt(e);
		e = n ? e : /* @__PURE__ */ F(e), te(e, t) && (this._rawValue = e, this._value = n ? e : Gt(e), this.dep.trigger());
	}
};
function Zt(e) {
	return /* @__PURE__ */ qt(e) ? e.value : e;
}
var Qt = {
	get: (e, t, n) => t === "__v_raw" ? e : Zt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ qt(i) && !/* @__PURE__ */ qt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function $t(e) {
	return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, Qt);
}
var en = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ F(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Ut(i) || /* @__PURE__ */ Ht(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = Zt(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ qt(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ qt(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return tt(this._raw, this._key);
	}
}, tn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function L(e, t, n) {
	return /* @__PURE__ */ qt(e) ? e : h(e) ? new tn(e) : v(e) && arguments.length > 1 ? nn(e, t, n) : /* @__PURE__ */ I(e);
}
function nn(e, t, n) {
	return new en(e, t, n);
}
var rn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ge - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && P !== this) return je(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Le(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function an(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new rn(r, i, n);
}
var on = {}, sn = /* @__PURE__ */ new WeakMap(), cn = void 0;
function ln(e, t = !1, n = cn) {
	if (n) {
		let t = sn.get(n);
		t || sn.set(n, t = []), t.push(e);
	}
}
function un(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Ht(e) || o === !1 || o === 0 ? dn(e, 1) : dn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ qt(e) ? (g = () => e.value, y = /* @__PURE__ */ Ht(e)) : /* @__PURE__ */ Bt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Bt(e) || /* @__PURE__ */ Ht(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ qt(e)) return e.value;
		if (/* @__PURE__ */ Bt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			He();
			try {
				_();
			} finally {
				Ue();
			}
		}
		let t = cn;
		cn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			cn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => dn(e(), t);
	}
	let x = Te(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(on) : on, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => te(e, C[t])) : te(t, C))) {
					let e = cn;
					He();
					try {
						_ && _(), cn = m;
						let e = [
							t,
							C === on ? void 0 : b && C[0] === on ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						cn = e, Ue();
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new De(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => ln(e, !1, m), _ = m.onStop = () => {
		let e = sn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			sn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function dn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ qt(e)) dn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) dn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		dn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) dn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && dn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function fn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		mn(e, t, n);
	}
}
function pn(e, t, n, r) {
	if (h(e)) {
		let i = fn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			mn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(pn(e[a], t, n, r));
		return i;
	}
}
function mn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			He(), fn(o, null, 10, [
				e,
				i,
				a
			]), Ue();
			return;
		}
	}
	hn(e, r, a, i, s);
}
function hn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var gn = [], _n = -1, vn = [], yn = null, bn = 0, xn = /* @__PURE__ */ Promise.resolve(), Sn = null;
function Cn(e) {
	let t = Sn || xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wn(e) {
	let t = _n + 1, n = gn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = gn[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Tn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = gn[gn.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? gn.push(e) : gn.splice(wn(t), 0, e), e.flags |= 1, En();
	}
}
function En() {
	Sn || (Sn = xn.then(Nn));
}
function Dn(e) {
	if (!d(e)) yn && e.id === -1 ? yn.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) vn.push(e[t]);
	En();
}
function On(e, t, n, r = _n + 1) {
	for (; r < gn.length; r++) {
		let n = gn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			gn.splice(r, 1), r = e ? r - 1 : _n, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function kn(e, t, n = 0) {
	if (vn.length) {
		let e = vn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < vn.length; i++) {
				let a = vn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? vn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Mn(e) - Mn(t));
		if (vn.length = r, yn) {
			for (let e = 0; e < i.length; e++) yn.push(i[e]);
			return;
		}
		for (yn = i, bn = 0; bn < yn.length; bn++) {
			let e = yn[bn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		yn = null, bn = 0;
	}
}
var An = !1;
function jn(e, t) {
	if (An) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(vn);
	e(), An = !0;
	try {
		On(void 0, t), kn(void 0, n, t);
	} finally {
		An = !1;
	}
}
var Mn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Nn(e) {
	try {
		for (_n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), fn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; _n < gn.length; _n++) {
			let e = gn[_n];
			e && (e.flags &= -2);
		}
		_n = -1, gn.length = 0, kn(e), Sn = null, (gn.length || vn.length) && Nn(e);
	}
}
var Pn = null, Fn = null;
function In(e) {
	let t = Pn;
	return Pn = e, Fn = e && e.type.__scopeId || null, t;
}
function Ln(e, t = Pn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && va(-1);
		let i = In(t), a = pa.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = pa.length; e > a; e--) ga();
			In(i), r._d && va(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Rn(e, n) {
	if (Pn === null) return e;
	let r = to(Pn), i = e.dirs || (e.dirs = []);
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && dn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function zn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (He(), pn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ue());
	}
}
function Bn(e, t) {
	if (Va) {
		let n = Va.provides, r = Va.parent && Va.parent.provides;
		r === n && (n = Va.provides = Object.create(r)), n[e] = t;
	}
}
function R(e, t, n = !1) {
	let r = Ha();
	if (r || vi) {
		let i = vi ? vi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Vn = /* @__PURE__ */ Symbol.for("v-scx"), Hn = () => R(Vn);
function Un(e, t) {
	return Gn(e, null, t);
}
function Wn(e, t, n) {
	return Gn(e, t, n);
}
function Gn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Ja) {
		if (c === "sync") {
			let e = Hn();
			f = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Va;
	u.call = (e, t, n) => pn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Xi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Tn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = un(e, n, u);
	return Ja && (f ? f.push(h) : d && h()), h;
}
function Kn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? qn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ga(this), s = Gn(i, a.bind(r), n);
	return o(), s;
}
function qn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Jn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ Symbol("_vte"), Xn = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), Qn = (e) => e && (e.defer || e.defer === ""), $n = (e) => typeof SVGElement < "u" && e instanceof SVGElement, er = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tr = (e, t) => {
	let n = e && e.to;
	return g(n) ? t ? t(n) : null : n;
}, nr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Zn(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Zn(e.props), r = e.target = tr(e.props, m), a = sr(r, e, h, p);
			r && (o !== "svg" && $n(r) ? o = "svg" : o !== "mathml" && er(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), or(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Jn.get(e) === t) {
					if (Jn.delete(e), Zn(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), or(e, !0);
					}
					x(e);
				}
			};
			Jn.set(e, t), Xi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Qn(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), or(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Jn.get(e);
			if (u) {
				u.flags |= 8, Jn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Zn(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || $n(p) ? o = "svg" : (o === "mathml" || er(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), na(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = tr(t.props, m);
				e && (t.target = e, rr(t, e, null, l, 0));
			} else g && rr(t, p, h, l, 1);
			or(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Zn(f), m = a || !p, h = Jn.get(e);
		if (h && (h.flags |= 8, Jn.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: rr,
	hydrate: ir
};
function rr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Jn.has(e) && (!d || Zn(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function ir(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = tr(t.props, c), h = Zn(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || sr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || sr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), or(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var ar = nr;
function or(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function sr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Yn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var cr = /* @__PURE__ */ Symbol("_leaveCb"), lr = /* @__PURE__ */ Symbol("_enterCb");
function ur() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Lr(() => {
		e.isMounted = !0;
	}), Br(() => {
		e.isUnmounting = !0;
	}), e;
}
var dr = [Function, Array], fr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: dr,
	onEnter: dr,
	onAfterEnter: dr,
	onEnterCancelled: dr,
	onBeforeLeave: dr,
	onLeave: dr,
	onAfterLeave: dr,
	onLeaveCancelled: dr,
	onBeforeAppear: dr,
	onAppear: dr,
	onAfterAppear: dr,
	onAppearCancelled: dr
}, pr = {
	name: "BaseTransition",
	props: fr,
	setup(e, { slots: t }) {
		let n = Ha(), r = ur();
		return () => {
			let i = t.default && xr(t.default(), !0), a = i && i.length ? mr(i) : n.subTree ? ja() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ F(e), { mode: s } = o;
			if (r.isLeaving) return vr(a);
			let c = yr(a);
			if (!c) return vr(a);
			let l = _r(c, o, r, n, (e) => l = e);
			c.type !== da && br(c, l);
			let u = n.subTree && yr(n.subTree);
			if (u && u.type !== da && !Ca(u, c) && Sr(n.subTree)) {
				let e = _r(u, o, r, n);
				if (br(u, e), s === "out-in" && c.type !== da) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, vr(a);
				s === "in-out" && c.type !== da ? e.delayLeave = (e, t, n) => {
					let i = gr(r, u);
					i[String(u.key)] = u, e[cr] = () => {
						t(), e[cr] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u && (u = void 0);
			return a;
		};
	}
};
function mr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== da) {
			t = n;
			break;
		}
	}
	return t;
}
var hr = pr;
function gr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function _r(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: p, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = gr(n, e), C = (e, t) => {
		e && pn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), d(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = _ || c;
				else return;
			}
			t[cr] && t[cr](!0);
			let i = S[x];
			if (i && Ca(e, i)) {
				let e = i.el[cr];
				if (!e) {
					let t = Sr(i);
					e = t && t.el[cr];
				}
				e && e();
			}
			C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = f;
			if (!n.isMounted) {
				if (a) r = v || l, i = y || u, o = b || f;
				else return;
			}
			let s = !1;
			t[lr] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[lr] = void 0);
			};
			let c = t[lr].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[lr] && t[lr](!0), n.isUnmounting) return r();
			C(p, [t]);
			let a = !1;
			t[cr] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[cr] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[cr].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = _r(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function vr(e) {
	if (kr(e)) return e = ka(e), e.children = null, e;
}
function yr(e) {
	if (!kr(e)) return Xn(e.type) && e.children ? mr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function br(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		br(Xn(n.type) && yr(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === la && d(e.children)) {
		let n = Ti(e.children, !1);
		n && br(n, t);
	}
}
function xr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === la ? (o.patchFlag & 128 && i++, r = r.concat(xr(o.children, t, s))) : (t || o.type !== da) && r.push(s == null ? o : ka(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
function Sr(e) {
	if (e.component) return Sr(e.component.subTree);
	if (e.type === la) {
		let t = d(e.children) && Ti(e.children, !1);
		return t ? Sr(t) : void 0;
	}
	if (e.type !== da) return e;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Cr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function wr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Tr = /* @__PURE__ */ new WeakMap();
function Er(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Er(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (Or(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Er(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? to(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ F(v), b = v === t ? i : (e) => !wr(_, e) && u(y, e), x = (e, t) => !(t && wr(_, t));
	if (m != null && m !== p) {
		if (Dr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ qt(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) fn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ qt(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Tr.delete(e);
				};
				t.id = -1, Tr.set(e, t), Xi(t, r);
			} else Dr(e), i();
		}
	}
}
function Dr(e) {
	let t = Tr.get(e);
	t && (t.flags |= 8, Tr.delete(e));
}
oe().requestIdleCallback, oe().cancelIdleCallback;
var Or = (e) => !!e.type.__asyncLoader, kr = (e) => e.type.__isKeepAlive;
function Ar(e, t) {
	Mr(e, "a", t);
}
function jr(e, t) {
	Mr(e, "da", t);
}
function Mr(e, t, n = Va) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (Pr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) kr(e.parent.vnode) && Nr(r, t, n, e), e = e.parent;
	}
}
function Nr(e, t, n, r) {
	let i = Pr(t, e, r, !0);
	Vr(() => {
		c(r[t], i);
	}, n);
}
function Pr(e, t, n = Va, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...r) => {
			He();
			let i = Ga(n), a = pn(t, n, e, r);
			return i(), Ue(), a;
		});
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Fr = (e) => (t, n = Va) => {
	Ja && e !== "sp" || Pr(e, (...e) => t(...e), n);
}, Ir = Fr("bm"), Lr = Fr("m"), Rr = Fr("bu"), zr = Fr("u"), Br = Fr("bum"), Vr = Fr("um"), Hr = Fr("sp"), Ur = Fr("rtg"), Wr = Fr("rtc");
function Gr(e, t = Va) {
	Pr("ec", e, t);
}
var Kr = /* @__PURE__ */ Symbol.for("v-ndc");
function qr(e, t, n, r, i, a) {
	if (n ?? (n = {}), Pn.ce || Pn.parent && Or(Pn.parent) && Pn.parent.ce) {
		let e = a != null && n.key == null ? s({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), ha(), xa(la, null, [B("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let c = pa.length;
	ha();
	let l;
	try {
		let i = o && Jr(o(n)), s = n.key || a || i && i.key;
		l = xa(la, { key: (s && !_(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = pa.length; e > c; e--) ga();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Jr(e) {
	return e.some((e) => !Sa(e) || !(e.type === da || e.type === la && !Jr(e.children))) ? e : null;
}
var Yr = (e) => e ? qa(e) ? to(e) : Yr(e.parent) : null, Xr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Yr(e.parent),
	$root: (e) => Yr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ai(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		Tn(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = Cn.bind(e.proxy)),
	$watch: (e) => Kn.bind(e)
}), Zr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Qr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Zr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else ei && (s[n] = 0);
		}
		let d = Xr[n], f, p;
		if (d) return n === "$attrs" && $e(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Zr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Zr(n, c) || u(o, c) || u(i, c) || u(Xr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function $r(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var ei = !0;
function ti(e) {
	let t = ai(e), n = e.proxy, i = e.ctx;
	ei = !1, t.beforeCreate && ri(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: k, expose: A, inheritAttrs: ee, components: j, directives: te, filters: ne } = t;
	if (u && ni(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ It(t));
	}
	if (ei = !0, o) for (let e in o) {
		let t = o[e], a = V({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) ii(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Bn(t, e[t]);
		});
	}
	f && ri(f, e, "c");
	function M(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (M(Ir, p), M(Lr, m), M(Rr, g), M(zr, _), M(Ar, y), M(jr, b), M(Gr, O), M(Wr, E), M(Ur, D), M(Br, S), M(Vr, w), M(Hr, k), d(A)) {
		if (A.length) {
			let t = e.exposed || (e.exposed = {});
			A.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed || (e.exposed = {});
	}
	T && e.render === r && (e.render = T), ee != null && (e.inheritAttrs = ee), j && (e.components = j), te && (e.directives = te), k && Cr(e);
}
function ni(e, t, n = r) {
	d(e) && (e = ui(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? R(r.from || n, r.default, !0) : R(r.from || n) : R(r), /* @__PURE__ */ qt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ri(e, t, n) {
	pn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ii(e, t, n, r) {
	let i = r.includes(".") ? qn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Wn(i, n);
	} else if (h(e)) Wn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => ii(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Wn(i, r, e);
		}
	}
}
function ai(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => oi(c, e, o, !0)), oi(c, t, o)), v(t) && a.set(t, c), c;
}
function oi(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && oi(e, a, n, !0), i && i.forEach((t) => oi(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = si[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var si = {
	data: ci,
	props: pi,
	emits: pi,
	methods: fi,
	computed: fi,
	beforeCreate: di,
	created: di,
	beforeMount: di,
	mounted: di,
	beforeUpdate: di,
	updated: di,
	beforeDestroy: di,
	beforeUnmount: di,
	destroyed: di,
	unmounted: di,
	activated: di,
	deactivated: di,
	errorCaptured: di,
	serverPrefetch: di,
	components: fi,
	directives: fi,
	watch: mi,
	provide: ci,
	inject: li
};
function ci(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function li(e, t) {
	return fi(ui(e), ui(t));
}
function ui(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function di(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function fi(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pi(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), $r(e), $r(t ?? {})) : t;
}
function mi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = di(e[r], t[r]);
	return n;
}
function hi() {
	return {
		app: null,
		config: {
			isNativeTag: i,
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
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var gi = 0;
function _i(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = hi(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: gi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ro,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || B(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, to(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (pn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = vi;
				vi = l;
				try {
					return e();
				} finally {
					vi = t;
				}
			}
		};
		return l;
	};
}
var vi = null, yi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${A(t)}Modifiers`];
function bi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && yi(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(re)));
	let c, l = i[c = j(n)] || i[c = j(O(n))];
	!l && o && (l = i[c = j(A(n))]), l && pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, pn(u, e, 6, a);
	}
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, t, n = !1) {
	let r = n ? xi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Si(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Ci(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, A(t)) || u(e, t));
}
function wi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = In(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ma(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Ma(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Ei(c);
		}
	} catch (t) {
		pa.length = 0, mn(t, e, 1), v = B(da);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Di(y, a)), b = ka(b, y, !1, !0));
	}
	return n.dirs && (b = ka(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && br(Xn(b.type) && yr(b) || b, n.transition), v = b, In(_), v;
}
function Ti(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Sa(r)) {
			if (r.type !== da || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Ei = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t || (t = {}))[n] = e[n]);
	return t;
}, Di = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Oi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ki(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ai(o, r, n) && !Ci(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ki(r, o, l) : !!o;
	return !1;
}
function ki(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || Ai(t, e, a) && !Ci(n, a)) return !0;
	}
	return !1;
}
function Ai(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !ye(r, i) : r !== i;
}
function ji({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Mi = {}, Ni = () => Object.create(Mi), Pi = (e) => Object.getPrototypeOf(e) === Mi;
function Fi(e, t, n, r = !1) {
	let i = {}, a = Ni();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Li(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Lt(i) : e.type.props ? i : a, e.attrs = a;
}
function Ii(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ci(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = O(o);
						i[t] = Ri(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		Li(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = A(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ri(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && et(e.attrs, "set", "");
}
function Li(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = O(t)) ? !o || !o.includes(d) ? r[d] = l : (c || (c = {}))[d] = l : Ci(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ F(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = Ri(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function Ri(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ga(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === A(n)) && (r = !0));
	}
	return r;
}
var zi = /* @__PURE__ */ new WeakMap();
function Bi(e, r, i = !1) {
	let a = i ? zi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Bi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = O(c[e]);
		Vi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = O(e);
		if (Vi(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function Vi(e) {
	return e[0] !== "$" && !T(e);
}
var Hi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ui = (e) => d(e) ? e.map(Ma) : [Ma(e)], Wi = (e, t, n) => {
	if (t._n) return t;
	let r = Ln((...e) => Ui(t(...e)), n);
	return r._c = !1, r;
}, Gi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Hi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Wi(n, i, r);
		else if (i != null) {
			let e = Ui(i);
			t[n] = () => e;
		}
	}
}, Ki = (e, t) => {
	let n = Ui(t);
	e.slots.default = () => n;
}, qi = (e, t, n) => {
	for (let r in t) (n || !Hi(r)) && (e[r] = t[r]);
}, Ji = (e, t, n) => {
	let r = e.slots = Ni();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (qi(r, t, n), n && M(r, "_", e, !0)) : Gi(t, r);
	} else t && Ki(e, t);
}, Yi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : qi(a, n, r) : (o = !n.$stable, Gi(n, a)), s = n;
	} else n && (Ki(e, n), s = { default: 1 });
	if (o) for (let e in a) !Hi(e) && s[e] == null && delete a[e];
}, Xi = ca;
function Zi(e) {
	return Qi(e);
}
function Qi(e, i) {
	let a = oe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ca(e, t) && (i = ge(e), de(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ua:
				y(e, t, r, i);
				break;
			case da:
				b(e, t, r, i);
				break;
			case fa:
				e ?? x(t, r, i, s);
				break;
			case la:
				j(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? te(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, ve);
		}
		d != null && a ? Er(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Er(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) E(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), k(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, E = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, $i(e, a), s, u), _ && zn(e, null, r, "created"), D(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ia(f, r, e);
		}
		_ && zn(e, null, r, "beforeMount");
		let v = ta(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Xi(() => {
			try {
				f && Ia(f, r, e), v && g.enter(d), _ && zn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, D = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || sa(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				D(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Na(e[l]) : Ma(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, k = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && ea(r, !1), (g = h.onVnodeBeforeUpdate) && Ia(g, r, n, e), f && zn(n, e, r, "beforeUpdate"), r && ea(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? A(e.dynamicChildren, d, l, r, i, $i(n, a), o) : s || se(e, n, l, null, r, i, $i(n, a), o, !1), u > 0) {
			if (u & 16) ee(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ee(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Xi(() => {
			g && Ia(g, r, n, e), f && zn(n, e, r, "updated");
		}, i);
	}, A = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || oa(c), d = u && (c.type === la || !Ca(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ee = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (T(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, j = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (A(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && na(e, t, !0)) : se(e, t, n, f, i, a, s, c, l);
	}, te = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : M(t, n, r, i, a, o, c) : re(e, t, c);
	}, M = (e, t, n, r, i, a, o) => {
		let s = e.component = Ba(e, r, i);
		if (kr(e) && (s.ctx.renderer = ve), Ya(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ie, o, a), !e.el) {
				let r = s.subTree = B(da);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ie(s, e, t, n, i, a, o);
	}, re = (e, t, n) => {
		let r = t.component = e.component;
		if (Oi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, ae(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ie = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ia(e);
					if (n) {
						t && (t.el = c.el, ae(e, t, o)), n.asyncDep.then(() => {
							Xi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				ea(e, !1), t ? (t.el = c.el, ae(e, t, o)) : t = c, n && ne(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ia(d, s, t, c), ea(e, !0);
				let f = wi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ge(p), e, i, a), t.el = f.el, u === null && ji(e, f.el), r && Xi(r, i), (d = t.props && t.props.onVnodeUpdated) && Xi(() => Ia(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Or(t);
				if (ea(e, !1), l && ne(l), !m && (o = c && c.onVnodeBeforeMount) && Ia(o, d, t), ea(e, !0), s && be) {
					let t = () => {
						e.subTree = wi(e), be(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = wi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Xi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Xi(() => Ia(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Or(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Xi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new De(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Tn(u), ea(e, !0), l();
	}, ae = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ii(e, t.props, r, n), Yi(e, t.children, n), He(), On(e), Ue();
	}, se = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				le(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				ce(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && he(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? le(l, d, n, r, i, a, o, s, c) : he(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, ce = (e, t, r, i, a, o, s, c, l) => {
		e = e || n, t = t || n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Na(t[p]) : Ma(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? he(e, a, o, !0, !1, f) : O(t, r, i, a, o, s, c, l, f);
	}, le = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Na(t[u]) : Ma(t[u]);
			if (Ca(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Na(t[p]) : Ma(t[p]);
			if (Ca(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Na(t[u]) : Ma(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) de(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Na(t[u]) : Ma(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					de(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Ca(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? de(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? ra(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || oa(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ue(n, r, p, 2) : _--);
			}
		}
	}, ue = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ue(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, ve);
		else if (c === la) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ue(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === fa) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[cr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Xi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[cr];
					a._isLeaving && a[cr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, de = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (He(), Er(s, null, n, e, !0), Ue()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Or(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ia(_, t, e), u & 6) me(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && zn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ve, r) : l && !l.hasOnce && (a !== la || d > 0 && d & 64) ? he(l, t, n, !1, !0) : (a === la && d & 384 || !i && u & 16) && he(c, t, n), r && fe(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Xi(() => {
			_ && Ia(_, t, e), h && zn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, fe = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === la;
		if (a && !i) {
			pe(n, r);
			return;
		}
		if (t === fa) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Sr(e) : e, c = () => {
			a ? m(n) && pe(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, pe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, me = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		aa(c), aa(l), r && ne(r), i.stop(), a ? (a.flags |= 8, de(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, de(o, e, t, n)), s && Xi(s, t), Xi(() => {
			e.isUnmounted = !0;
		}, t);
	}, he = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) de(e[o], t, n, r, i);
	}, ge = (e) => {
		if (e.shapeFlag & 6) return ge(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Yn];
		return n ? h(n) : t;
	}, _e = (e, t, n) => {
		jn(() => {
			e == null ? t._vnode && de(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : za());
	}, ve = {
		p: v,
		um: de,
		m: ue,
		r: fe,
		mt: M,
		mc: O,
		pc: se,
		pbc: A,
		n: ge,
		o: e
	}, ye, be;
	return i && ([ye, be] = i(ve)), {
		render: _e,
		hydrate: ye,
		createApp: _i(_e, ye)
	};
}
function $i({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ea({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ta(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function na(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Na(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && na(t, a)), a.type === ua && (a.patchFlag === -1 && (a = i[e] = Na(a)), a.el = t.el), a.type === da && !a.el && (a.el = t.el);
	}
}
function ra(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function ia(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ia(t);
}
function aa(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function oa(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? oa(t.subTree) : null;
}
var sa = (e) => e.__isSuspense;
function ca(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
}
var la = /* @__PURE__ */ Symbol.for("v-fgt"), ua = /* @__PURE__ */ Symbol.for("v-txt"), da = /* @__PURE__ */ Symbol.for("v-cmt"), fa = /* @__PURE__ */ Symbol.for("v-stc"), pa = [], ma = null;
function ha(e = !1) {
	pa.push(ma = e ? null : []);
}
function ga() {
	pa.pop(), ma = pa[pa.length - 1] || null;
}
var _a = 1;
function va(e, t = !1) {
	_a += e, e < 0 && ma && t && (ma.hasOnce = !0);
}
function ya(e) {
	return e.dynamicChildren = _a > 0 ? ma || n : null, ga(), _a > 0 && ma && ma.push(e), e;
}
function ba(e, t, n, r, i, a) {
	return ya(Ea(e, t, n, r, i, a, !0));
}
function xa(e, t, n, r, i) {
	return ya(B(e, t, n, r, i, !0));
}
function Sa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ca(e, t) {
	return e.type === t.type && e.key === t.key;
}
var wa = ({ key: e }) => e ?? null, Ta = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ qt(e) || h(e) ? {
	i: Pn,
	r: e,
	k: t,
	f: !!n
} : e);
function Ea(e, t = null, n = null, r = 0, i = null, a = e === la ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && wa(t),
		ref: t && Ta(t),
		scopeId: Fn,
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
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: Pn
	};
	return s ? (Pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), _a > 0 && !o && ma && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ma.push(c), c;
}
var B = Da;
function Da(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Kr || (e = da), Sa(e)) {
		let r = ka(e, t, !0);
		return n && Pa(r, n), _a > 0 && !a && ma && (r.shapeFlag & 6 ? ma[ma.indexOf(e)] = r : ma.push(r)), r.patchFlag = -2, r;
	}
	if (no(e) && (e = e.__vccOpts), t) {
		t = Oa(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = fe(e)), v(n) && (/* @__PURE__ */ Ut(n) && !d(n) && (n = s({}, n)), t.style = se(n));
	}
	let o = g(e) ? 1 : sa(e) ? 128 : Xn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return Ea(e, t, n, r, i, o, a, !0);
}
function Oa(e) {
	return e ? /* @__PURE__ */ Ut(e) || Pi(e) ? s({}, e) : e : null;
}
function ka(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Fa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && wa(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Ta(t)) : [a, Ta(t)] : Ta(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== la ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ka(e.ssContent),
		ssFallback: e.ssFallback && ka(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && br(u, c.clone(u)), u;
}
function Aa(e = " ", t = 0) {
	return B(ua, null, e, t);
}
function ja(e = "", t = !1) {
	return t ? (ha(), xa(da, null, e)) : B(da, null, e);
}
function Ma(e) {
	return e == null || typeof e == "boolean" ? B(da) : d(e) ? B(la, null, e.slice()) : Sa(e) ? Na(e) : B(ua, null, String(e));
}
function Na(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ka(e);
}
function Pa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Pa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Pi(t) ? t._ctx = Pn : r === 3 && Pn && (Pn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Pa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Pn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Aa(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Fa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = fe([t.class, r.class]));
		else if (e === "style") t.style = se([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ia(e, t, n, r = null) {
	pn(e, t, 7, [n, r]);
}
var La = hi(), Ra = 0;
function za() {
	return Ra;
}
function Ba(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || La, o = {
		uid: Ra++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Bi(i, a),
		emitsOptions: Si(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = bi.bind(null, o), e.ce && e.ce(o), o;
}
var Va = null, Ha = () => Va || Pn, Ua, Wa;
{
	let e = oe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ua = t("__VUE_INSTANCE_SETTERS__", (e) => Va = e), Wa = t("__VUE_SSR_SETTERS__", (e) => Ja = e);
}
var Ga = (e) => {
	let t = Va;
	return Ua(e), e.scope.on(), () => {
		e.scope.off(), Ua(t);
	};
}, Ka = () => {
	Va && Va.scope.off(), Ua(null);
};
function qa(e) {
	return e.vnode.shapeFlag & 4;
}
var Ja = !1;
function Ya(e, t = !1, n = !1) {
	t && Wa(t);
	let { props: r, children: i } = e.vnode, a = qa(e);
	Fi(e, r, a, t), Ji(e, i, n || t);
	let o = a ? Xa(e, t) : void 0;
	return t && Wa(!1), o;
}
function Xa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qr);
	let { setup: r } = n;
	if (r) {
		He();
		let n = e.setupContext = r.length > 1 ? eo(e) : null, i = Ga(e), a = fn(r, e, 0, [e.props, n]), o = y(a);
		if (Ue(), i(), (o || e.sp) && !Or(e) && Cr(e), o) {
			if (a.then(Ka, Ka), t) return a.then((n) => {
				Wa(!0);
				try {
					Za(e, n, t);
				} finally {
					Wa(!1);
				}
			}).catch((t) => {
				mn(t, e, 0);
			});
			e.asyncDep = a;
		} else Za(e, a, t);
	} else Qa(e, t);
}
function Za(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = $t(t)), Qa(e, n);
}
function Qa(e, t, n) {
	let i = e.type;
	e.render || (e.render = i.render || r);
	{
		let t = Ga(e);
		He();
		try {
			ti(e);
		} finally {
			Ue(), t();
		}
	}
}
var $a = { get(e, t) {
	return $e(e, "get", ""), e[t];
} };
function eo(e) {
	return {
		attrs: new Proxy(e.attrs, $a),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function to(e) {
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($t(Wt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Xr) return Xr[n](e);
		},
		has(e, t) {
			return t in e || t in Xr;
		}
	})) : e.proxy;
}
function no(e) {
	return h(e) && "__vccOpts" in e;
}
var V = (e, t) => /* @__PURE__ */ an(e, t, Ja);
function H(e, t, n) {
	try {
		va(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? Sa(t) ? B(e, null, [t]) : B(e, t) : B(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Sa(n) && (n = [n]), B(e, t, n));
	} finally {
		va(1);
	}
}
var ro = "3.5.44", io = void 0, ao = typeof window < "u" && window.trustedTypes;
if (ao) try {
	io = /* @__PURE__ */ ao.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var oo = io ? (e) => io.createHTML(e) : (e) => e, so = "http://www.w3.org/2000/svg", co = "http://www.w3.org/1998/Math/MathML", lo = typeof document < "u" ? document : null, uo = lo && /* @__PURE__ */ lo.createElement("template"), fo = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? lo.createElementNS(so, e) : t === "mathml" ? lo.createElementNS(co, e) : n ? lo.createElement(e, { is: n }) : lo.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => lo.createTextNode(e),
	createComment: (e) => lo.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => lo.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			uo.innerHTML = oo(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = uo.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, po = "transition", mo = "animation", ho = /* @__PURE__ */ Symbol("_vtc"), go = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, _o = /* @__PURE__ */ s({}, fr, go), vo = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = _o, e))((e, { slots: t }) => H(hr, xo(e), t)), yo = (e, t = []) => {
	d(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, bo = (e) => e ? d(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function xo(e) {
	let t = {};
	for (let n in e) n in go || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: c = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: u = o, appearToClass: d = c, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = So(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, To(e, t ? d : c), To(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, To(e, f), To(e, m), To(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		yo(i, [t, o]), Eo(() => {
			To(t, e ? l : a), wo(t, e ? d : c), bo(i) || Oo(t, r, g, o);
		});
	};
	return s(t, {
		onBeforeEnter(e) {
			yo(v, [e]), wo(e, a), wo(e, o);
		},
		onBeforeAppear(e) {
			yo(C, [e]), wo(e, l), wo(e, u);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			wo(e, f), e._enterCancelled ? (wo(e, p), Mo(e)) : (Mo(e), wo(e, p)), Eo(() => {
				e._isLeaving && (To(e, f), wo(e, m), bo(x) || Oo(e, r, _, n));
			}), yo(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), yo(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), yo(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), yo(S, [e]);
		}
	});
}
function So(e) {
	if (e == null) return null;
	if (v(e)) return [Co(e.enter), Co(e.leave)];
	{
		let t = Co(e);
		return [t, t];
	}
}
function Co(e) {
	return ie(e);
}
function wo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ho] || (e[ho] = /* @__PURE__ */ new Set())).add(t);
}
function To(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[ho];
	n && (n.delete(t), n.size || (e[ho] = void 0));
}
function Eo(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Do = 0;
function Oo(e, t, n, r) {
	let i = e._endId = ++Do, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = ko(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function ko(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${po}Delay`), a = r(`${po}Duration`), o = Ao(i, a), s = r(`${mo}Delay`), c = r(`${mo}Duration`), l = Ao(s, c), u = null, d = 0, f = 0;
	t === po ? o > 0 && (u = po, d = o, f = a.length) : t === mo ? l > 0 && (u = mo, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? po : mo : null, f = u ? u === po ? a.length : c.length : 0);
	let p = u === po && /\b(?:transform|all)(?:,|$)/.test(r(`${po}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Ao(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => jo(t) + jo(e[n])));
}
function jo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mo(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function No(e, t, n) {
	let r = e[ho];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Po = /* @__PURE__ */ Symbol("_vod"), Fo = /* @__PURE__ */ Symbol("_vsh"), Io = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Po] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lo(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Lo(e, !0), r.enter(e)) : r.leave(e, () => {
			Lo(e, !1);
		}) : Lo(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Lo(e, t);
	}
};
function Lo(e, t) {
	e.style.display = t ? e[Po] : "none", e[Fo] = !t;
}
var Ro = /* @__PURE__ */ Symbol(""), zo = /(?:^|;)\s*display\s*:/;
function Bo(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ho(r, t, "");
			}
			else for (let e in t) n[e] ?? Ho(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ho(r, i, "") : Ko(e, i, !g(t) && t ? t[i] : void 0, o) || Ho(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ro];
			e && (n += ";" + e), r.cssText = n, a = zo.test(n);
		}
	} else t && e.removeAttribute("style");
	Po in e && (i && t === n || (e[Po] = a ? r.display : ""), e[Fo] && (r.display = "none"));
}
var Vo = /\s*!important$/;
function Ho(e, t, n) {
	if (d(n)) n.forEach((n) => Ho(e, t, n));
	else if (n ?? (n = ""), t.startsWith("--")) Vo.test(n) ? e.setProperty(t, n.replace(Vo, ""), "important") : e.setProperty(t, n);
	else {
		let r = Go(e, t);
		Vo.test(n) ? e.setProperty(A(r), n.replace(Vo, ""), "important") : e[r] = n;
	}
}
var Uo = [
	"Webkit",
	"Moz",
	"ms"
], Wo = {};
function Go(e, t) {
	let n = Wo[t];
	if (n) return n;
	let r = O(t);
	if (r !== "filter" && r in e) return Wo[t] = r;
	r = ee(r);
	for (let n = 0; n < Uo.length; n++) {
		let i = Uo[n] + r;
		if (i in e) return Wo[t] = i;
	}
	return t;
}
function Ko(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var qo = "http://www.w3.org/1999/xlink";
function Jo(e, t, n, r, i, a = pe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qo, t.slice(6, t.length)) : e.setAttributeNS(qo, t, n) : n == null || a && !me(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Yo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? oo(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = me(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Xo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Zo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Qo = /* @__PURE__ */ Symbol("_vei");
function $o(e, t, n, r, i = null) {
	let a = e[Qo] || (e[Qo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ns(t);
		r ? Xo(e, n, a[t] = os(r, i), s) : o && (Zo(e, n, o, s), a[t] = void 0);
	}
}
var es = /(Once|Passive|Capture)$/, ts = /^on:?(?:Once|Passive|Capture)$/;
function ns(e) {
	let t, n;
	for (; (n = e.match(es)) && !ts.test(e);) t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : A(e.slice(2)), t];
}
var rs = 0, is = /* @__PURE__ */ Promise.resolve(), as = () => rs || (is.then(() => rs = 0), rs = Date.now());
function os(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && pn(e, t, 5, a);
			}
		} else pn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = as(), n;
}
var ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cs = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? No(e, r, c) : t === "style" ? Bo(e, n, r) : a(t) ? o(t) || $o(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : ls(e, t, r, c)) ? (Yo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Jo(e, t, r, c, s, t !== "value")) : e._isVueCE && (us(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Yo(e, O(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Jo(e, t, r, c));
};
function ls(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ss(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return ss(t) && g(n) ? !1 : t in e;
}
function us(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var ds = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ Symbol("_moveCb"), ms = /* @__PURE__ */ Symbol("_enterCb"), hs = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ s({}, _o, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Ha(), r = ur(), i, a, o, s, c = () => (s === void 0 && (s = i.length > 0 && Ts(i[0].el, n.vnode.el, vs(e))), s);
		return zr(() => {
			if (hs.delete(n), !c()) {
				i = [], o = void 0;
				return;
			}
			let t = vs(e);
			i.forEach(_s);
			let r = o && ws(o, n.vnode.el);
			o = void 0, i.forEach((e) => ys(e, r));
			let a = i.filter(bs);
			Mo(n.vnode.el), a.forEach((e) => {
				let n = e.el, r = n.style;
				wo(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[ps] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[ps] = null, To(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let l = /* @__PURE__ */ F(e), u = xo(l), d = l.tag || la;
			if (i = [], s = void 0, a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[Fo] && (i.push(t), br(t, _r(t, u, r, n)), ds.set(t, xs(t.el)));
			}
			a = t.default ? xr(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && br(t, _r(t, u, r, n));
			}
			return i.length && (o = Ss(n), hs.set(n, c)), B(d, null, a);
		};
	}
});
function _s(e) {
	let t = e.el;
	t[ps] && t[ps](), t[ms] && t[ms]();
}
function vs(e) {
	return e.moveClass || `${e.name || "v"}-move`;
}
function ys(e, t) {
	fs.set(e, xs(e.el, t));
}
function bs(e) {
	let t = ds.get(e), n = fs.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), Number.isFinite(o) && o !== 0 || (o = 1), Number.isFinite(s) && s !== 0 || (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function xs(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: n.left - (t ? t.left : 0),
		top: n.top - (t ? t.top : 0)
	};
}
function Ss(e) {
	let t;
	for (let n = e.parent; n; n = n.parent) {
		let r = hs.get(n);
		if (r) {
			let i = Cs(n.vnode.el, e.vnode.el);
			i && (t || (t = [])).push(s(xs(i), {
				item: i,
				willMove: r
			}));
		}
	}
	return t;
}
function Cs(e, t) {
	let n = e.nodeType === 1 ? e : e.parentNode;
	for (; t && t.parentNode !== n;) t = t.parentNode;
	if (t && t.nodeType === 1) return t;
}
function ws(e, t) {
	let n = e.find((e) => e.willMove() && e.item.contains(t));
	return n && xs(n.item, n);
}
function Ts(e, t, n) {
	let r = e.cloneNode(), i = e[ho];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = ko(r);
	return a.removeChild(r), o;
}
var Es = /* @__PURE__ */ s({ patchProp: cs }, fo), Ds;
function Os() {
	return Ds || (Ds = Zi(Es));
}
var ks = ((...e) => {
	let t = Os().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = js(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, As(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function As(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function js(e) {
	return g(e) ? document.querySelector(e) : e;
}
// node_modules/@css-render/plugin-bem/esm/index.js
function Ms(e) {
	let t = ".", n = "__", r = "--", i;
	if (e) {
		let i = e.blockPrefix;
		i && (t = i), i = e.elementPrefix, i && (n = i), i = e.modifierPrefix, i && (r = i);
	}
	let a = { install(e) {
		i = e.c;
		let t = e.context;
		t.bem = {}, t.bem.b = null, t.bem.els = null;
	} };
	function o(e) {
		let n, r;
		return {
			before(e) {
				n = e.bem.b, r = e.bem.els, e.bem.els = null;
			},
			after(e) {
				e.bem.b = n, e.bem.els = r;
			},
			$({ context: n, props: r }) {
				return e = typeof e == "string" ? e : e({
					context: n,
					props: r
				}), n.bem.b = e, `${r?.bPrefix || t}${n.bem.b}`;
			}
		};
	}
	function s(e) {
		let r;
		return {
			before(e) {
				r = e.bem.els;
			},
			after(e) {
				e.bem.els = r;
			},
			$({ context: r, props: i }) {
				return e = typeof e == "string" ? e : e({
					context: r,
					props: i
				}), r.bem.els = e.split(",").map((e) => e.trim()), r.bem.els.map((e) => `${i?.bPrefix || t}${r.bem.b}${n}${e}`).join(", ");
			}
		};
	}
	function c(e) {
		return { $({ context: i, props: a }) {
			e = typeof e == "string" ? e : e({
				context: i,
				props: a
			});
			let o = e.split(",").map((e) => e.trim());
			function s(e) {
				return o.map((o) => `&${a?.bPrefix || t}${i.bem.b}${e === void 0 ? "" : `${n}${e}`}${r}${o}`).join(", ");
			}
			let c = i.bem.els;
			return c === null ? s() : s(c[0]);
		} };
	}
	function l(e) {
		return { $({ context: i, props: a }) {
			e = typeof e == "string" ? e : e({
				context: i,
				props: a
			});
			let o = i.bem.els;
			return `&:not(${a?.bPrefix || t}${i.bem.b}${o !== null && o.length > 0 ? `${n}${o[0]}` : ""}${r}${e})`;
		} };
	}
	return Object.assign(a, {
		cB: ((...e) => i(o(e[0]), e[1], e[2])),
		cE: ((...e) => i(s(e[0]), e[1], e[2])),
		cM: ((...e) => i(c(e[0]), e[1], e[2])),
		cNotM: ((...e) => i(l(e[0]), e[1], e[2]))
	}), a;
}
// node_modules/css-render/esm/parse.js
function Ns(e) {
	let t = 0;
	for (let n = 0; n < e.length; ++n) e[n] === "&" && ++t;
	return t;
}
var Ps = /\s*,(?![^(]*\))\s*/g, Fs = /\s+/g;
function Is(e, t) {
	let n = [];
	return t.split(Ps).forEach((t) => {
		let r = Ns(t);
		if (!r) {
			e.forEach((e) => {
				n.push((e && e + " ") + t);
			});
			return;
		}
		if (r === 1) {
			e.forEach((e) => {
				n.push(t.replace("&", e));
			});
			return;
		}
		let i = [t];
		for (; r--;) {
			let t = [];
			i.forEach((n) => {
				e.forEach((e) => {
					t.push(n.replace("&", e));
				});
			}), i = t;
		}
		i.forEach((e) => n.push(e));
	}), n;
}
function Ls(e, t) {
	let n = [];
	return t.split(Ps).forEach((t) => {
		e.forEach((e) => {
			n.push((e && e + " ") + t);
		});
	}), n;
}
function Rs(e) {
	let t = [""];
	return e.forEach((e) => {
		e = e && e.trim(), e && (t = e.includes("&") ? Is(t, e) : Ls(t, e));
	}), t.join(", ").replace(Fs, " ");
}
// node_modules/css-render/esm/utils.js
function zs(e) {
	/* istanbul ignore if */
	if (!e) return;
	let t = e.parentElement;
	/* istanbul ignore else */
	t && t.removeChild(e);
}
function Bs(e, t) {
	return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Vs(e) {
	let t = document.createElement("style");
	return t.setAttribute("cssr-id", e), t;
}
function Hs(e) {
	return e ? /^\s*@(s|m)/.test(e) : !1;
}
// node_modules/css-render/esm/render.js
var Us = /[A-Z]/g;
function Ws(e) {
	return e.replace(Us, (e) => "-" + e.toLowerCase());
}
function Gs(e, t = "  ") {
	return typeof e == "object" && e ? " {\n" + Object.entries(e).map((e) => t + `  ${Ws(e[0])}: ${e[1]};`).join("\n") + "\n" + t + "}" : `: ${e};`;
}
function Ks(e, t, n) {
	return typeof e == "function" ? e({
		context: t.context,
		props: n
	}) : e;
}
function qs(e, t, n, r) {
	if (!t) return "";
	let i = Ks(t, n, r);
	if (!i) return "";
	if (typeof i == "string") return `${e} {\n${i}\n}`;
	let a = Object.keys(i);
	if (a.length === 0) return n.config.keepEmptyBlock ? e + " {\n}" : "";
	let o = e ? [e + " {"] : [];
	return a.forEach((e) => {
		let t = i[e];
		e === "raw" ? o.push("\n" + t + "\n") : (e = Ws(e), t != null && o.push(`  ${e}${Gs(t)}`));
	}), e && o.push("}"), o.join("\n");
}
function Js(e, t, n) {
	/* istanbul ignore if */
	e && e.forEach((e) => {
		if (Array.isArray(e)) Js(e, t, n);
		else if (typeof e == "function") {
			let r = e(t);
			Array.isArray(r) ? Js(r, t, n) : r && n(r);
		} else e && n(e);
	});
}
function Ys(e, t, n, r, i) {
	let a = e.$, o = "";
	if (!a || typeof a == "string") Hs(a) ? o = a : t.push(a);
	else if (typeof a == "function") {
		let e = a({
			context: r.context,
			props: i
		});
		Hs(e) ? o = e : t.push(e);
	} else if (a.before && a.before(r.context), !a.$ || typeof a.$ == "string") Hs(a.$) ? o = a.$ : t.push(a.$);
	else if (a.$) {
		let e = a.$({
			context: r.context,
			props: i
		});
		Hs(e) ? o = e : t.push(e);
	}
	let s = Rs(t), c = qs(s, e.props, r, i);
	o ? n.push(`${o} {`) : c.length && n.push(c), e.children && Js(e.children, {
		context: r.context,
		props: i
	}, (e) => {
		if (typeof e == "string") {
			let t = qs(s, { raw: e }, r, i);
			n.push(t);
		} else Ys(e, t, n, r, i);
	}), t.pop(), o && n.push("}"), a && a.after && a.after(r.context);
}
function Xs(e, t, n) {
	let r = [];
	return Ys(e, [], r, t, n), r.join("\n\n");
}
// node_modules/@emotion/hash/dist/hash.browser.esm.js
function Zs(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
// node_modules/css-render/esm/mount.js
typeof window < "u" && (window.__cssrContext = {});
function Qs(e, t, n, r) {
	let { els: i } = t;
	if (n === void 0) i.forEach(zs), t.els = [];
	else {
		let e = Bs(n, r);
		e && i.includes(e) && (zs(e), t.els = i.filter((t) => t !== e));
	}
}
function $s(e, t) {
	e.push(t);
}
function ec(e, t, n, r, i, a, o, s, c) {
	let l;
	if (n === void 0 && (l = t.render(r), n = Zs(l)), c) {
		c.adapter(n, l ?? t.render(r));
		return;
	}
	s === void 0 && (s = document.head);
	let u = Bs(n, s);
	if (u !== null && !a) return u;
	let d = u ?? Vs(n);
	if (l === void 0 && (l = t.render(r)), d.textContent = l, u !== null) return u;
	if (o) {
		let e = s.querySelector(`meta[name="${o}"]`);
		if (e) return s.insertBefore(d, e), $s(t.els, d), d;
	}
	return i ? s.insertBefore(d, s.querySelector("style, link")) : s.appendChild(d), $s(t.els, d), d;
}
// node_modules/css-render/esm/c.js
function tc(e) {
	return Xs(this, this.instance, e);
}
function nc(e = {}) {
	let { id: t, ssr: n, props: r, head: i = !1, force: a = !1, anchorMetaName: o, parent: s } = e;
	return ec(this.instance, this, t, r, i, a, o, s, n);
}
function rc(e = {}) {
	/* istanbul ignore next */
	let { id: t, parent: n } = e;
	Qs(this.instance, this, t, n);
}
var ic = function(e, t, n, r) {
	return {
		instance: e,
		$: t,
		props: n,
		children: r,
		els: [],
		render: tc,
		mount: nc,
		unmount: rc
	};
}, ac = function(e, t, n, r) {
	return Array.isArray(t) ? ic(e, { $: null }, null, t) : Array.isArray(n) ? ic(e, t, null, n) : Array.isArray(r) ? ic(e, t, n, r) : ic(e, t, n, null);
};
// node_modules/css-render/esm/CssRender.js
function oc(e = {}) {
	let t = {
		c: ((...e) => ac(t, ...e)),
		use: (e, ...n) => e.install(t, ...n),
		find: Bs,
		context: {},
		config: e
	};
	return t;
}
// node_modules/css-render/esm/exists.js
function sc(e, t) {
	if (e === void 0) return !1;
	if (t) {
		let { context: { ids: n } } = t;
		return n.has(e);
	}
	return Bs(e) !== null;
}
var cc = "__", lc = "--", uc = oc(), dc = Ms({
	blockPrefix: ".n-",
	elementPrefix: cc,
	modifierPrefix: lc
});
uc.use(dc);
var { c: U, find: fc } = uc, { cB: W, cE: G, cM: K, cNotM: pc } = dc;
function mc(e) {
	return U(({ props: { bPrefix: e } }) => `${e || ".n-"}modal, ${e || ".n-"}drawer`, [e]);
}
function hc(e) {
	return U(({ props: { bPrefix: e } }) => `${e || ".n-"}popover`, [e]);
}
var gc = (...e) => U(">", [W(...e)]);
function q(e, t) {
	return e + (t === "default" ? "" : t.replace(/^[a-z]/, (e) => e.toUpperCase()));
}
// node_modules/seemly/es/animation/next-frame-once.js
var _c = [], vc = /* @__PURE__ */ new WeakMap();
function yc() {
	_c.forEach((e) => e(...vc.get(e))), _c = [];
}
function bc(e, ...t) {
	vc.set(e, t), _c.includes(e) || _c.push(e) === 1 && requestAnimationFrame(yc);
}
// node_modules/seemly/es/dom/happens-in.js
function xc(e, t) {
	let { target: n } = e;
	for (; n;) {
		if (n.dataset && n.dataset[t] !== void 0) return !0;
		n = n.parentElement;
	}
	return !1;
}
// node_modules/seemly/es/dom/get-precise-event-target.js
function Sc(e) {
	return e.composedPath()[0] || null;
}
// node_modules/seemly/es/css/index.js
function Cc(e) {
	return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function wc(e) {
	if (e != null) return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Tc(e, t) {
	let n = e.trim().split(/\s+/g), r = { top: n[0] };
	switch (n.length) {
		case 1:
			r.right = n[0], r.bottom = n[0], r.left = n[0];
			break;
		case 2:
			r.right = n[1], r.left = n[1], r.bottom = n[0];
			break;
		case 3:
			r.right = n[1], r.bottom = n[2], r.left = n[1];
			break;
		case 4:
			r.right = n[1], r.bottom = n[2], r.left = n[3];
			break;
		default: throw Error("[seemly/getMargin]:" + e + " is not a valid value.");
	}
	return t === void 0 ? r : r[t];
}
function Ec(e, t) {
	let [n, r] = e.split(" ");
	return t ? t === "row" ? n : r : {
		row: n,
		col: r || n
	};
}
// node_modules/seemly/es/color/colors.js
var Dc = {
	aliceblue: "#F0F8FF",
	antiquewhite: "#FAEBD7",
	aqua: "#0FF",
	aquamarine: "#7FFFD4",
	azure: "#F0FFFF",
	beige: "#F5F5DC",
	bisque: "#FFE4C4",
	black: "#000",
	blanchedalmond: "#FFEBCD",
	blue: "#00F",
	blueviolet: "#8A2BE2",
	brown: "#A52A2A",
	burlywood: "#DEB887",
	cadetblue: "#5F9EA0",
	chartreuse: "#7FFF00",
	chocolate: "#D2691E",
	coral: "#FF7F50",
	cornflowerblue: "#6495ED",
	cornsilk: "#FFF8DC",
	crimson: "#DC143C",
	cyan: "#0FF",
	darkblue: "#00008B",
	darkcyan: "#008B8B",
	darkgoldenrod: "#B8860B",
	darkgray: "#A9A9A9",
	darkgrey: "#A9A9A9",
	darkgreen: "#006400",
	darkkhaki: "#BDB76B",
	darkmagenta: "#8B008B",
	darkolivegreen: "#556B2F",
	darkorange: "#FF8C00",
	darkorchid: "#9932CC",
	darkred: "#8B0000",
	darksalmon: "#E9967A",
	darkseagreen: "#8FBC8F",
	darkslateblue: "#483D8B",
	darkslategray: "#2F4F4F",
	darkslategrey: "#2F4F4F",
	darkturquoise: "#00CED1",
	darkviolet: "#9400D3",
	deeppink: "#FF1493",
	deepskyblue: "#00BFFF",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1E90FF",
	firebrick: "#B22222",
	floralwhite: "#FFFAF0",
	forestgreen: "#228B22",
	fuchsia: "#F0F",
	gainsboro: "#DCDCDC",
	ghostwhite: "#F8F8FF",
	gold: "#FFD700",
	goldenrod: "#DAA520",
	gray: "#808080",
	grey: "#808080",
	green: "#008000",
	greenyellow: "#ADFF2F",
	honeydew: "#F0FFF0",
	hotpink: "#FF69B4",
	indianred: "#CD5C5C",
	indigo: "#4B0082",
	ivory: "#FFFFF0",
	khaki: "#F0E68C",
	lavender: "#E6E6FA",
	lavenderblush: "#FFF0F5",
	lawngreen: "#7CFC00",
	lemonchiffon: "#FFFACD",
	lightblue: "#ADD8E6",
	lightcoral: "#F08080",
	lightcyan: "#E0FFFF",
	lightgoldenrodyellow: "#FAFAD2",
	lightgray: "#D3D3D3",
	lightgrey: "#D3D3D3",
	lightgreen: "#90EE90",
	lightpink: "#FFB6C1",
	lightsalmon: "#FFA07A",
	lightseagreen: "#20B2AA",
	lightskyblue: "#87CEFA",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#B0C4DE",
	lightyellow: "#FFFFE0",
	lime: "#0F0",
	limegreen: "#32CD32",
	linen: "#FAF0E6",
	magenta: "#F0F",
	maroon: "#800000",
	mediumaquamarine: "#66CDAA",
	mediumblue: "#0000CD",
	mediumorchid: "#BA55D3",
	mediumpurple: "#9370DB",
	mediumseagreen: "#3CB371",
	mediumslateblue: "#7B68EE",
	mediumspringgreen: "#00FA9A",
	mediumturquoise: "#48D1CC",
	mediumvioletred: "#C71585",
	midnightblue: "#191970",
	mintcream: "#F5FFFA",
	mistyrose: "#FFE4E1",
	moccasin: "#FFE4B5",
	navajowhite: "#FFDEAD",
	navy: "#000080",
	oldlace: "#FDF5E6",
	olive: "#808000",
	olivedrab: "#6B8E23",
	orange: "#FFA500",
	orangered: "#FF4500",
	orchid: "#DA70D6",
	palegoldenrod: "#EEE8AA",
	palegreen: "#98FB98",
	paleturquoise: "#AFEEEE",
	palevioletred: "#DB7093",
	papayawhip: "#FFEFD5",
	peachpuff: "#FFDAB9",
	peru: "#CD853F",
	pink: "#FFC0CB",
	plum: "#DDA0DD",
	powderblue: "#B0E0E6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#F00",
	rosybrown: "#BC8F8F",
	royalblue: "#4169E1",
	saddlebrown: "#8B4513",
	salmon: "#FA8072",
	sandybrown: "#F4A460",
	seagreen: "#2E8B57",
	seashell: "#FFF5EE",
	sienna: "#A0522D",
	silver: "#C0C0C0",
	skyblue: "#87CEEB",
	slateblue: "#6A5ACD",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#FFFAFA",
	springgreen: "#00FF7F",
	steelblue: "#4682B4",
	tan: "#D2B48C",
	teal: "#008080",
	thistle: "#D8BFD8",
	tomato: "#FF6347",
	turquoise: "#40E0D0",
	violet: "#EE82EE",
	wheat: "#F5DEB3",
	white: "#FFF",
	whitesmoke: "#F5F5F5",
	yellow: "#FF0",
	yellowgreen: "#9ACD32",
	transparent: "#0000"
};
// node_modules/seemly/es/color/convert.js
function Oc(e, t, n) {
	t /= 100, n /= 100;
	let r = (r, i = (r + e / 60) % 6) => n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
	return [
		r(5) * 255,
		r(3) * 255,
		r(1) * 255
	];
}
function kc(e, t, n) {
	t /= 100, n /= 100;
	let r = t * Math.min(n, 1 - n), i = (t, i = (t + e / 30) % 12) => n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
	return [
		i(0) * 255,
		i(8) * 255,
		i(4) * 255
	];
}
// node_modules/seemly/es/color/index.js
var Ac = "^\\s*", jc = "\\s*$", Mc = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", Nc = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Pc = "([0-9A-Fa-f])", Fc = "([0-9A-Fa-f]{2})", Ic = RegExp(`${Ac}hsl\\s*\\(${Nc},${Mc},${Mc}\\)${jc}`), Lc = RegExp(`${Ac}hsv\\s*\\(${Nc},${Mc},${Mc}\\)${jc}`), Rc = RegExp(`${Ac}hsla\\s*\\(${Nc},${Mc},${Mc},${Nc}\\)${jc}`), zc = RegExp(`${Ac}hsva\\s*\\(${Nc},${Mc},${Mc},${Nc}\\)${jc}`), Bc = RegExp(`${Ac}rgb\\s*\\(${Nc},${Nc},${Nc}\\)${jc}`), Vc = RegExp(`${Ac}rgba\\s*\\(${Nc},${Nc},${Nc},${Nc}\\)${jc}`), Hc = RegExp(`${Ac}#${Pc}${Pc}${Pc}${jc}`), Uc = RegExp(`${Ac}#${Fc}${Fc}${Fc}${jc}`), Wc = RegExp(`${Ac}#${Pc}${Pc}${Pc}${Pc}${jc}`), Gc = RegExp(`${Ac}#${Fc}${Fc}${Fc}${Fc}${jc}`);
function Kc(e) {
	return parseInt(e, 16);
}
function qc(e) {
	try {
		let t;
		if (t = Rc.exec(e)) return [
			tl(t[1]),
			rl(t[5]),
			rl(t[9]),
			el(t[13])
		];
		if (t = Ic.exec(e)) return [
			tl(t[1]),
			rl(t[5]),
			rl(t[9]),
			1
		];
		throw Error(`[seemly/hsla]: Invalid color value ${e}.`);
	} catch (e) {
		throw e;
	}
}
function Jc(e) {
	try {
		let t;
		if (t = zc.exec(e)) return [
			tl(t[1]),
			rl(t[5]),
			rl(t[9]),
			el(t[13])
		];
		if (t = Lc.exec(e)) return [
			tl(t[1]),
			rl(t[5]),
			rl(t[9]),
			1
		];
		throw Error(`[seemly/hsva]: Invalid color value ${e}.`);
	} catch (e) {
		throw e;
	}
}
function Yc(e) {
	try {
		let t;
		if (t = Uc.exec(e)) return [
			Kc(t[1]),
			Kc(t[2]),
			Kc(t[3]),
			1
		];
		if (t = Bc.exec(e)) return [
			nl(t[1]),
			nl(t[5]),
			nl(t[9]),
			1
		];
		if (t = Vc.exec(e)) return [
			nl(t[1]),
			nl(t[5]),
			nl(t[9]),
			el(t[13])
		];
		if (t = Hc.exec(e)) return [
			Kc(t[1] + t[1]),
			Kc(t[2] + t[2]),
			Kc(t[3] + t[3]),
			1
		];
		if (t = Gc.exec(e)) return [
			Kc(t[1]),
			Kc(t[2]),
			Kc(t[3]),
			el(Kc(t[4]) / 255)
		];
		if (t = Wc.exec(e)) return [
			Kc(t[1] + t[1]),
			Kc(t[2] + t[2]),
			Kc(t[3] + t[3]),
			el(Kc(t[4] + t[4]) / 255)
		];
		if (e in Dc) return Yc(Dc[e]);
		if (Ic.test(e) || Rc.test(e)) {
			let [t, n, r, i] = qc(e);
			return [...kc(t, n, r), i];
		}
		if (Lc.test(e) || zc.test(e)) {
			let [t, n, r, i] = Jc(e);
			return [...Oc(t, n, r), i];
		}
		throw Error(`[seemly/rgba]: Invalid color value ${e}.`);
	} catch (e) {
		throw e;
	}
}
function Xc(e) {
	return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Zc(e, t, n, r) {
	return `rgba(${nl(e)}, ${nl(t)}, ${nl(n)}, ${Xc(r)})`;
}
function Qc(e, t, n, r, i) {
	return nl((e * t * (1 - r) + n * r) / i);
}
function J(e, t) {
	Array.isArray(e) || (e = Yc(e)), Array.isArray(t) || (t = Yc(t));
	let n = e[3], r = t[3], i = el(n + r - n * r);
	return Zc(Qc(e[0], n, t[0], r, i), Qc(e[1], n, t[1], r, i), Qc(e[2], n, t[2], r, i), i);
}
function Y(e, t) {
	let [n, r, i, a = 1] = Array.isArray(e) ? e : Yc(e);
	return typeof t.alpha == "number" ? Zc(n, r, i, t.alpha) : Zc(n, r, i, a);
}
function $c(e, t) {
	let [n, r, i, a = 1] = Array.isArray(e) ? e : Yc(e), { lightness: o = 1, alpha: s = 1 } = t;
	return il([
		n * o,
		r * o,
		i * o,
		a * s
	]);
}
function el(e) {
	let t = Math.round(Number(e) * 100) / 100;
	return t > 1 ? 1 : t < 0 ? 0 : t;
}
function tl(e) {
	let t = Math.round(Number(e));
	return t >= 360 || t < 0 ? 0 : t;
}
function nl(e) {
	let t = Math.round(Number(e));
	return t > 255 ? 255 : t < 0 ? 0 : t;
}
function rl(e) {
	let t = Math.round(Number(e));
	return t > 100 ? 100 : t < 0 ? 0 : t;
}
function il(e) {
	let [t, n, r] = e;
	return 3 in e ? `rgba(${nl(t)}, ${nl(n)}, ${nl(r)}, ${el(e[3])})` : `rgba(${nl(t)}, ${nl(n)}, ${nl(r)}, 1)`;
}
// node_modules/seemly/es/misc/index.js
function al(e = 8) {
	return Math.random().toString(16).slice(2, 2 + e);
}
function ol(e, t) {
	let n = [];
	for (let r = 0; r < e; ++r) n.push(t);
	return n;
}
// node_modules/evtd/es/utils.js
function sl(e) {
	return e.composedPath()[0];
}
// node_modules/evtd/es/traps.js
var cl = {
	mousemoveoutside: /* @__PURE__ */ new WeakMap(),
	clickoutside: /* @__PURE__ */ new WeakMap()
};
function ll(e, t, n) {
	if (e === "mousemoveoutside") {
		let e = (e) => {
			t.contains(sl(e)) || n(e);
		};
		return {
			mousemove: e,
			touchstart: e
		};
	}
	if (e === "clickoutside") {
		let e = !1, r = (n) => {
			e = !t.contains(sl(n));
		}, i = (r) => {
			e && (t.contains(sl(r)) || n(r));
		};
		return {
			mousedown: r,
			mouseup: i,
			touchstart: r,
			touchend: i
		};
	}
	return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function ul(e, t, n) {
	let r = cl[e], i = r.get(t);
	i === void 0 && r.set(t, i = /* @__PURE__ */ new WeakMap());
	let a = i.get(n);
	return a === void 0 && i.set(n, a = ll(e, t, n)), a;
}
function dl(e, t, n, r) {
	if (e === "mousemoveoutside" || e === "clickoutside") {
		let i = ul(e, t, n);
		return Object.keys(i).forEach((e) => {
			ml(e, document, i[e], r);
		}), !0;
	}
	return !1;
}
function fl(e, t, n, r) {
	if (e === "mousemoveoutside" || e === "clickoutside") {
		let i = ul(e, t, n);
		return Object.keys(i).forEach((e) => {
			hl(e, document, i[e], r);
		}), !0;
	}
	return !1;
}
// node_modules/evtd/es/delegate.js
function pl() {
	if (typeof window > "u") return {
		on: () => {},
		off: () => {}
	};
	let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
	function n() {
		e.set(this, !0);
	}
	function r() {
		e.set(this, !0), t.set(this, !0);
	}
	function i(e, t, n) {
		let r = e[t];
		return e[t] = function() {
			return n.apply(e, arguments), r.apply(e, arguments);
		}, e;
	}
	function a(e, t) {
		e[t] = Event.prototype[t];
	}
	let o = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
	function c() {
		return o.get(this) ?? null;
	}
	function l(e, t) {
		s !== void 0 && Object.defineProperty(e, "currentTarget", {
			configurable: !0,
			enumerable: !0,
			get: t ?? s.get
		});
	}
	let u = {
		bubble: {},
		capture: {}
	}, d = {};
	function f() {
		let s = function(s) {
			let { type: d, eventPhase: f, bubbles: p } = s, m = sl(s);
			if (f === 2) return;
			let h = f === 1 ? "capture" : "bubble", g = m, _ = [];
			for (; g === null && (g = window), _.push(g), g !== window;) g = g.parentNode || null;
			let v = u.capture[d], y = u.bubble[d];
			if (i(s, "stopPropagation", n), i(s, "stopImmediatePropagation", r), l(s, c), h === "capture") {
				if (v === void 0) return;
				for (let n = _.length - 1; n >= 0 && !e.has(s); --n) {
					let e = _[n], r = v.get(e);
					if (r !== void 0) {
						o.set(s, e);
						for (let e of r) {
							if (t.has(s)) break;
							e(s);
						}
					}
					if (n === 0 && !p && y !== void 0) {
						let n = y.get(e);
						if (n !== void 0) for (let e of n) {
							if (t.has(s)) break;
							e(s);
						}
					}
				}
			} else if (h === "bubble") {
				if (y === void 0) return;
				for (let n = 0; n < _.length && !e.has(s); ++n) {
					let e = _[n], r = y.get(e);
					if (r !== void 0) {
						o.set(s, e);
						for (let e of r) {
							if (t.has(s)) break;
							e(s);
						}
					}
				}
			}
			a(s, "stopPropagation"), a(s, "stopImmediatePropagation"), l(s);
		};
		return s.displayName = "evtdUnifiedHandler", s;
	}
	function p() {
		let e = function(e) {
			let { type: t, eventPhase: n } = e;
			if (n !== 2) return;
			let r = d[t];
			r !== void 0 && r.forEach((t) => t(e));
		};
		return e.displayName = "evtdUnifiedWindowEventHandler", e;
	}
	let m = f(), h = p();
	function g(e, t) {
		let n = u[e];
		return n[t] === void 0 && (n[t] = /* @__PURE__ */ new Map(), window.addEventListener(t, m, e === "capture")), n[t];
	}
	function _(e) {
		return d[e] === void 0 && (d[e] = /* @__PURE__ */ new Set(), window.addEventListener(e, h)), d[e];
	}
	function v(e, t) {
		let n = e.get(t);
		return n === void 0 && e.set(t, n = /* @__PURE__ */ new Set()), n;
	}
	function y(e, t, n, r) {
		let i = u[t][n];
		if (i !== void 0) {
			let t = i.get(e);
			if (t !== void 0 && t.has(r)) return !0;
		}
		return !1;
	}
	function b(e, t) {
		let n = d[e];
		return !!(n !== void 0 && n.has(t));
	}
	function x(e, t, n, r) {
		let i;
		if (i = typeof r == "object" && r.once === !0 ? (a) => {
			S(e, t, i, r), n(a);
		} : n, dl(e, t, i, r)) return;
		let a = v(g(r === !0 || typeof r == "object" && r.capture === !0 ? "capture" : "bubble", e), t);
		if (a.has(i) || a.add(i), t === window) {
			let t = _(e);
			t.has(i) || t.add(i);
		}
	}
	function S(e, t, n, r) {
		if (fl(e, t, n, r)) return;
		let i = r === !0 || typeof r == "object" && r.capture === !0, a = i ? "capture" : "bubble", o = g(a, e), s = v(o, t);
		if (t === window && !y(t, i ? "bubble" : "capture", e, n) && b(e, n)) {
			let t = d[e];
			t.delete(n), t.size === 0 && (window.removeEventListener(e, h), d[e] = void 0);
		}
		s.has(n) && s.delete(n), s.size === 0 && o.delete(t), o.size === 0 && (window.removeEventListener(e, m, a === "capture"), u[a][e] = void 0);
	}
	return {
		on: x,
		off: S
	};
}
var { on: ml, off: hl } = pl();
// node_modules/vooks/es/use-false-until-truthy.js
function gl(e) {
	let t = /* @__PURE__ */ I(!!e.value);
	if (t.value) return /* @__PURE__ */ Rt(t);
	let n = Wn(e, (e) => {
		e && (t.value = !0, n());
	});
	return /* @__PURE__ */ Rt(t);
}
// node_modules/vooks/es/use-memo.js
function _l(e) {
	let t = V(e), n = /* @__PURE__ */ I(t.value);
	return Wn(t, (e) => {
		n.value = e;
	}), typeof e == "function" ? n : {
		__v_isRef: !0,
		get value() {
			return n.value;
		},
		set value(t) {
			e.set(t);
		}
	};
}
// node_modules/vooks/es/utils.js
var vl = typeof window < "u" ? document?.fonts?.ready : void 0, yl = !1;
vl === void 0 ? yl = !0 : vl.then(() => {
	yl = !0;
});
function bl(e) {
	/* istanbul ignore next */
	if (yl) return;
	let t = !1;
	Lr(() => {
		/* istanbul ignore next */
		yl || vl?.then(() => {
			t || e();
		});
	}), Br(() => {
		t = !0;
	});
}
// node_modules/vooks/es/use-merged-state.js
function xl(e, t) {
	return Wn(e, (e) => {
		e !== void 0 && (t.value = e);
	}), V(() => e.value === void 0 ? t.value : e.value);
}
// node_modules/vooks/es/life-cycle/use-is-mounted.js
function Sl() {
	let e = /* @__PURE__ */ I(!1);
	return Lr(() => {
		e.value = !0;
	}), /* @__PURE__ */ Rt(e);
}
// node_modules/vooks/es/use-compitable.js
function Cl(e, t) {
	return V(() => {
		for (let n of t) if (e[n] !== void 0) return e[n];
		return e[t[t.length - 1]];
	});
}
// node_modules/vooks/es/use-is-ios.js
var wl = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Tl() {
	return wl;
}
// node_modules/naive-ui/es/_utils/vue/create-injection-key.mjs
function El(e) {
	return e;
}
// node_modules/naive-ui/es/_internal/select-menu/src/interface.mjs
var Dl = El("n-internal-select-menu"), Ol = El("n-internal-select-menu-body"), kl = El("n-drawer-body"), Al = El("n-modal-body"), jl = El("n-popover-body"), Ml = "__disabled__";
function Nl(e) {
	let t = R(Al, null), n = R(kl, null), r = R(jl, null), i = R(Ol, null), a = /* @__PURE__ */ I();
	if (typeof document < "u") {
		a.value = document.fullscreenElement;
		let e = () => {
			a.value = document.fullscreenElement;
		};
		Lr(() => {
			ml("fullscreenchange", document, e);
		}), Br(() => {
			hl("fullscreenchange", document, e);
		});
	}
	return _l(() => {
		let { to: o } = e;
		return o === void 0 ? t?.value ? t.value.$el ?? t.value : n?.value ? n.value : r?.value ? r.value : i?.value ? i.value : o ?? (a.value || "body") : o === !1 ? Ml : o === !0 ? a.value || "body" : o;
	});
}
Nl.tdkey = Ml, Nl.propTo = {
	type: [
		String,
		Object,
		Boolean
	],
	default: void 0
};
// node_modules/naive-ui/es/_utils/env/is-browser.mjs
var Pl = typeof document < "u" && typeof window < "u";
// node_modules/naive-ui/es/_utils/composable/use-reactivated.mjs
function Fl(e) {
	let t = { isDeactivated: !1 }, n = !1;
	return Ar(() => {
		t.isDeactivated = !1, n ? e() : n = !0;
	}), jr(() => {
		t.isDeactivated = !0, n || (n = !0);
	}), t;
}
// node_modules/vueuc/es/shared/v-node.js
function Il(e, t, n = "default") {
	let r = t[n];
	if (r === void 0) throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);
	return r();
}
function Ll(e, t = !0, n = []) {
	return e.forEach((e) => {
		if (e !== null) {
			if (typeof e != "object") (typeof e == "string" || typeof e == "number") && n.push(Aa(String(e)));
			else if (Array.isArray(e)) Ll(e, t, n);
			else if (e.type === la) {
				if (e.children === null) return;
				Array.isArray(e.children) && Ll(e.children, t, n);
			} else e.type === da && t || n.push(e);
		}
	}), n;
}
function Rl(e, t, n = "default") {
	let r = t[n];
	if (r === void 0) throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);
	let i = Ll(r());
	if (i.length === 1) return i[0];
	throw Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
// node_modules/vueuc/es/binder/src/utils.js
var zl = null;
function Bl() {
	if (zl === null && (zl = document.getElementById("v-binder-view-measurer"), zl === null)) {
		zl = document.createElement("div"), zl.id = "v-binder-view-measurer";
		let { style: e } = zl;
		e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(zl);
	}
	return zl.getBoundingClientRect();
}
function Vl(e, t) {
	let n = Bl();
	return {
		top: t,
		left: e,
		height: 0,
		width: 0,
		right: n.width - e,
		bottom: n.height - t
	};
}
function Hl(e) {
	let t = e.getBoundingClientRect(), n = Bl();
	return {
		left: t.left - n.left,
		top: t.top - n.top,
		bottom: n.height + n.top - t.bottom,
		right: n.width + n.left - t.right,
		width: t.width,
		height: t.height
	};
}
function Ul(e) {
	return e.nodeType === 9 ? null : e.parentNode;
}
function Wl(e) {
	if (e === null) return null;
	let t = Ul(e);
	if (t === null) return null;
	if (t.nodeType === 9) return document;
	if (t.nodeType === 1) {
		let { overflow: e, overflowX: n, overflowY: r } = getComputedStyle(t);
		if (/(auto|scroll|overlay)/.test(e + r + n)) return t;
	}
	return Wl(t);
}
// node_modules/vueuc/es/binder/src/Binder.js
var Gl = /* @__PURE__ */ z({
	name: "Binder",
	props: {
		syncTargetWithParent: Boolean,
		syncTarget: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		Bn("VBinder", Ha()?.proxy);
		let t = R("VBinder", null), n = /* @__PURE__ */ I(null), r = (r) => {
			n.value = r, t && e.syncTargetWithParent && t.setTargetRef(r);
		}, i = [], a = () => {
			let e = n.value;
			for (; e = Wl(e), e !== null;) i.push(e);
			for (let e of i) ml("scroll", e, u, !0);
		}, o = () => {
			for (let e of i) hl("scroll", e, u, !0);
			i = [];
		}, s = /* @__PURE__ */ new Set(), c = (e) => {
			s.size === 0 && a(), s.has(e) || s.add(e);
		}, l = (e) => {
			s.has(e) && s.delete(e), s.size === 0 && o();
		}, u = () => {
			bc(d);
		}, d = () => {
			s.forEach((e) => e());
		}, f = /* @__PURE__ */ new Set(), p = (e) => {
			f.size === 0 && ml("resize", window, h), f.has(e) || f.add(e);
		}, m = (e) => {
			f.has(e) && f.delete(e), f.size === 0 && hl("resize", window, h);
		}, h = () => {
			f.forEach((e) => e());
		};
		return Br(() => {
			hl("resize", window, h), o();
		}), {
			targetRef: n,
			setTargetRef: r,
			addScrollListener: c,
			removeScrollListener: l,
			addResizeListener: p,
			removeResizeListener: m
		};
	},
	render() {
		return Il("binder", this.$slots);
	}
}), Kl = /* @__PURE__ */ z({
	name: "Target",
	setup() {
		let { setTargetRef: e, syncTarget: t } = R("VBinder");
		return {
			syncTarget: t,
			setTargetDirective: {
				mounted: e,
				updated: e
			}
		};
	},
	render() {
		let { syncTarget: e, setTargetDirective: t } = this;
		return e ? Rn(Rl("follower", this.$slots), [[t]]) : Rl("follower", this.$slots);
	}
}), ql = "@@mmoContext", Jl = {
	mounted(e, { value: t }) {
		e[ql] = { handler: void 0 }, typeof t == "function" && (e[ql].handler = t, ml("mousemoveoutside", e, t));
	},
	updated(e, { value: t }) {
		let n = e[ql];
		typeof t == "function" ? n.handler ? n.handler !== t && (hl("mousemoveoutside", e, n.handler), n.handler = t, ml("mousemoveoutside", e, t)) : (e[ql].handler = t, ml("mousemoveoutside", e, t)) : n.handler && (hl("mousemoveoutside", e, n.handler), n.handler = void 0);
	},
	unmounted(e) {
		let { handler: t } = e[ql];
		t && hl("mousemoveoutside", e, t), e[ql].handler = void 0;
	}
}, Yl = "@@coContext", Xl = {
	mounted(e, { value: t, modifiers: n }) {
		e[Yl] = { handler: void 0 }, typeof t == "function" && (e[Yl].handler = t, ml("clickoutside", e, t, { capture: n.capture }));
	},
	updated(e, { value: t, modifiers: n }) {
		let r = e[Yl];
		typeof t == "function" ? r.handler ? r.handler !== t && (hl("clickoutside", e, r.handler, { capture: n.capture }), r.handler = t, ml("clickoutside", e, t, { capture: n.capture })) : (e[Yl].handler = t, ml("clickoutside", e, t, { capture: n.capture })) : r.handler && (hl("clickoutside", e, r.handler, { capture: n.capture }), r.handler = void 0);
	},
	unmounted(e, { modifiers: t }) {
		let { handler: n } = e[Yl];
		n && hl("clickoutside", e, n, { capture: t.capture }), e[Yl].handler = void 0;
	}
};
// node_modules/vdirs/es/utils.js
function Zl(e, t) {
	console.error(`[vdirs/${e}]: ${t}`);
}
var Ql = new class {
	constructor() {
		this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
	}
	get elementCount() {
		return this.elementZIndex.size;
	}
	ensureZIndex(e, t) {
		let { elementZIndex: n } = this;
		if (t !== void 0) {
			e.style.zIndex = `${t}`, n.delete(e);
			return;
		}
		let { nextZIndex: r } = this;
		n.has(e) && n.get(e) + 1 === this.nextZIndex || (e.style.zIndex = `${r}`, n.set(e, r), this.nextZIndex = r + 1, this.squashState());
	}
	unregister(e, t) {
		let { elementZIndex: n } = this;
		n.has(e) ? n.delete(e) : t === void 0 && Zl("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
	}
	squashState() {
		let { elementCount: e } = this;
		e || (this.nextZIndex = 2e3), this.nextZIndex - e > 2500 && this.rearrange();
	}
	rearrange() {
		let e = Array.from(this.elementZIndex.entries());
		e.sort((e, t) => e[1] - t[1]), this.nextZIndex = 2e3, e.forEach((e) => {
			let t = e[0], n = this.nextZIndex++;
			`${n}` !== t.style.zIndex && (t.style.zIndex = `${n}`);
		});
	}
}(), $l = "@@ziContext", eu = {
	mounted(e, t) {
		let { value: n = {} } = t, { zIndex: r, enabled: i } = n;
		e[$l] = {
			enabled: !!i,
			initialized: !1
		}, i && (Ql.ensureZIndex(e, r), e[$l].initialized = !0);
	},
	updated(e, t) {
		let { value: n = {} } = t, { zIndex: r, enabled: i } = n, a = e[$l].enabled;
		i && !a && (Ql.ensureZIndex(e, r), e[$l].initialized = !0), e[$l].enabled = !!i;
	},
	unmounted(e, t) {
		if (!e[$l].initialized) return;
		let { value: n = {} } = t, { zIndex: r } = n;
		Ql.unregister(e, r);
	}
}, tu = "@css-render/vue3-ssr";
function nu(e, t) {
	return `<style cssr-id="${e}">\n${t}\n</style>`;
}
function ru(e, t, n) {
	let { styles: r, ids: i } = n;
	i.has(e) || r !== null && (i.add(e), r.push(nu(e, t)));
}
var iu = typeof document < "u";
function au() {
	if (iu) return;
	let e = R(tu, null);
	if (e !== null) return {
		adapter: (t, n) => ru(t, n, e),
		context: e
	};
}
// node_modules/vueuc/es/shared/warn.js
function ou(e, t) {
	console.error(`[vueuc/${e}]: ${t}`);
}
// node_modules/vueuc/es/shared/cssr.js
var { c: su } = oc(), cu = "vueuc-style";
// node_modules/vueuc/es/shared/finweck-tree.js
function lu(e) {
	return e & -e;
}
var uu = class {
	constructor(e, t) {
		this.l = e, this.min = t;
		let n = Array(e + 1);
		for (let t = 0; t < e + 1; ++t) n[t] = 0;
		this.ft = n;
	}
	add(e, t) {
		if (t === 0) return;
		let { l: n, ft: r } = this;
		for (e += 1; e <= n;) r[e] += t, e += lu(e);
	}
	get(e) {
		return this.sum(e + 1) - this.sum(e);
	}
	sum(e) {
		if (e === void 0 && (e = this.l), e <= 0) return 0;
		let { ft: t, min: n, l: r } = this;
		if (e > r) throw Error("[FinweckTree.sum]: `i` is larger than length.");
		let i = e * n;
		for (; e > 0;) i += t[e], e -= lu(e);
		return i;
	}
	getBound(e) {
		let t = 0, n = this.l;
		for (; n > t;) {
			let r = Math.floor((t + n) / 2), i = this.sum(r);
			if (i > e) n = r;
			else if (i < e) {
				if (t === r) return this.sum(t + 1) <= e ? t + 1 : r;
				t = r;
			} else return r;
		}
		return t;
	}
};
// node_modules/vueuc/es/shared/resolve-to.js
function du(e) {
	return typeof e == "string" ? document.querySelector(e) : e() ?? null;
}
// node_modules/vueuc/es/lazy-teleport/src/index.js
var fu = /* @__PURE__ */ z({
	name: "LazyTeleport",
	props: {
		to: {
			type: [String, Object],
			default: void 0
		},
		disabled: Boolean,
		show: {
			type: Boolean,
			required: !0
		}
	},
	setup(e) {
		return {
			showTeleport: gl(/* @__PURE__ */ L(e, "show")),
			mergedTo: V(() => {
				let { to: t } = e;
				return t ?? "body";
			})
		};
	},
	render() {
		return this.showTeleport ? this.disabled ? Il("lazy-teleport", this.$slots) : H(ar, {
			disabled: this.disabled,
			to: this.mergedTo
		}, Il("lazy-teleport", this.$slots)) : null;
	}
}), pu = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, mu = {
	start: "end",
	center: "center",
	end: "start"
}, hu = {
	top: "height",
	bottom: "height",
	left: "width",
	right: "width"
}, gu = {
	"bottom-start": "top left",
	bottom: "top center",
	"bottom-end": "top right",
	"top-start": "bottom left",
	top: "bottom center",
	"top-end": "bottom right",
	"right-start": "top left",
	right: "center left",
	"right-end": "bottom left",
	"left-start": "top right",
	left: "center right",
	"left-end": "bottom right"
}, _u = {
	"bottom-start": "bottom left",
	bottom: "bottom center",
	"bottom-end": "bottom right",
	"top-start": "top left",
	top: "top center",
	"top-end": "top right",
	"right-start": "top right",
	right: "center right",
	"right-end": "bottom right",
	"left-start": "top left",
	left: "center left",
	"left-end": "bottom left"
}, vu = {
	"bottom-start": "right",
	"bottom-end": "left",
	"top-start": "right",
	"top-end": "left",
	"right-start": "bottom",
	"right-end": "top",
	"left-start": "bottom",
	"left-end": "top"
}, yu = {
	top: !0,
	bottom: !1,
	left: !0,
	right: !1
}, bu = {
	top: "end",
	bottom: "start",
	left: "end",
	right: "start"
};
function xu(e, t, n, r, i, a) {
	if (!i || a) return {
		placement: e,
		top: 0,
		left: 0
	};
	let [o, s] = e.split("-"), c = s ?? "center", l = {
		top: 0,
		left: 0
	}, u = (e, i, a) => {
		let o = 0, s = 0, c = n[e] - t[i] - t[e];
		return c > 0 && r && (a ? s = yu[i] ? c : -c : o = yu[i] ? c : -c), {
			left: o,
			top: s
		};
	}, d = o === "left" || o === "right";
	if (c !== "center") {
		let r = vu[e], i = pu[r], a = hu[r];
		if (n[a] > t[a]) {
			if (t[r] + t[a] < n[a]) {
				let e = (n[a] - t[a]) / 2;
				t[r] < e || t[i] < e ? t[r] < t[i] ? (c = mu[s], l = u(a, i, d)) : l = u(a, r, d) : c = "center";
			}
		} else n[a] < t[a] && t[i] < 0 && t[r] > t[i] && (c = mu[s]);
	} else {
		let e = o === "bottom" || o === "top" ? "left" : "top", r = pu[e], i = hu[e], a = (n[i] - t[i]) / 2;
		(t[e] < a || t[r] < a) && (t[e] > t[r] ? (c = bu[e], l = u(i, e, d)) : (c = bu[r], l = u(i, r, d)));
	}
	let f = o;
	return t[o] < n[hu[o]] && t[o] < t[pu[o]] && (f = pu[o]), {
		placement: c === "center" ? f : `${f}-${c}`,
		left: l.left,
		top: l.top
	};
}
function Su(e, t) {
	return t ? _u[e] : gu[e];
}
function Cu(e, t, n, r, i, a) {
	if (a) switch (e) {
		case "bottom-start": return {
			top: `${Math.round(n.top - t.top + n.height)}px`,
			left: `${Math.round(n.left - t.left)}px`,
			transform: "translateY(-100%)"
		};
		case "bottom-end": return {
			top: `${Math.round(n.top - t.top + n.height)}px`,
			left: `${Math.round(n.left - t.left + n.width)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "top-start": return {
			top: `${Math.round(n.top - t.top)}px`,
			left: `${Math.round(n.left - t.left)}px`,
			transform: ""
		};
		case "top-end": return {
			top: `${Math.round(n.top - t.top)}px`,
			left: `${Math.round(n.left - t.left + n.width)}px`,
			transform: "translateX(-100%)"
		};
		case "right-start": return {
			top: `${Math.round(n.top - t.top)}px`,
			left: `${Math.round(n.left - t.left + n.width)}px`,
			transform: "translateX(-100%)"
		};
		case "right-end": return {
			top: `${Math.round(n.top - t.top + n.height)}px`,
			left: `${Math.round(n.left - t.left + n.width)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "left-start": return {
			top: `${Math.round(n.top - t.top)}px`,
			left: `${Math.round(n.left - t.left)}px`,
			transform: ""
		};
		case "left-end": return {
			top: `${Math.round(n.top - t.top + n.height)}px`,
			left: `${Math.round(n.left - t.left)}px`,
			transform: "translateY(-100%)"
		};
		case "top": return {
			top: `${Math.round(n.top - t.top)}px`,
			left: `${Math.round(n.left - t.left + n.width / 2)}px`,
			transform: "translateX(-50%)"
		};
		case "right": return {
			top: `${Math.round(n.top - t.top + n.height / 2)}px`,
			left: `${Math.round(n.left - t.left + n.width)}px`,
			transform: "translateX(-100%) translateY(-50%)"
		};
		case "left": return {
			top: `${Math.round(n.top - t.top + n.height / 2)}px`,
			left: `${Math.round(n.left - t.left)}px`,
			transform: "translateY(-50%)"
		};
		default: return {
			top: `${Math.round(n.top - t.top + n.height)}px`,
			left: `${Math.round(n.left - t.left + n.width / 2)}px`,
			transform: "translateX(-50%) translateY(-100%)"
		};
	}
	switch (e) {
		case "bottom-start": return {
			top: `${Math.round(n.top - t.top + n.height + r)}px`,
			left: `${Math.round(n.left - t.left + i)}px`,
			transform: ""
		};
		case "bottom-end": return {
			top: `${Math.round(n.top - t.top + n.height + r)}px`,
			left: `${Math.round(n.left - t.left + n.width + i)}px`,
			transform: "translateX(-100%)"
		};
		case "top-start": return {
			top: `${Math.round(n.top - t.top + r)}px`,
			left: `${Math.round(n.left - t.left + i)}px`,
			transform: "translateY(-100%)"
		};
		case "top-end": return {
			top: `${Math.round(n.top - t.top + r)}px`,
			left: `${Math.round(n.left - t.left + n.width + i)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "right-start": return {
			top: `${Math.round(n.top - t.top + r)}px`,
			left: `${Math.round(n.left - t.left + n.width + i)}px`,
			transform: ""
		};
		case "right-end": return {
			top: `${Math.round(n.top - t.top + n.height + r)}px`,
			left: `${Math.round(n.left - t.left + n.width + i)}px`,
			transform: "translateY(-100%)"
		};
		case "left-start": return {
			top: `${Math.round(n.top - t.top + r)}px`,
			left: `${Math.round(n.left - t.left + i)}px`,
			transform: "translateX(-100%)"
		};
		case "left-end": return {
			top: `${Math.round(n.top - t.top + n.height + r)}px`,
			left: `${Math.round(n.left - t.left + i)}px`,
			transform: "translateX(-100%) translateY(-100%)"
		};
		case "top": return {
			top: `${Math.round(n.top - t.top + r)}px`,
			left: `${Math.round(n.left - t.left + n.width / 2 + i)}px`,
			transform: "translateY(-100%) translateX(-50%)"
		};
		case "right": return {
			top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
			left: `${Math.round(n.left - t.left + n.width + i)}px`,
			transform: "translateY(-50%)"
		};
		case "left": return {
			top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
			left: `${Math.round(n.left - t.left + i)}px`,
			transform: "translateY(-50%) translateX(-100%)"
		};
		default: return {
			top: `${Math.round(n.top - t.top + n.height + r)}px`,
			left: `${Math.round(n.left - t.left + n.width / 2 + i)}px`,
			transform: "translateX(-50%)"
		};
	}
}
// node_modules/vueuc/es/binder/src/Follower.js
var wu = su([su(".v-binder-follower-container", {
	position: "absolute",
	left: "0",
	right: "0",
	top: "0",
	height: "0",
	pointerEvents: "none",
	zIndex: "auto"
}), su(".v-binder-follower-content", {
	position: "absolute",
	zIndex: "auto"
}, [su("> *", { pointerEvents: "all" })])]), Tu = /* @__PURE__ */ z({
	name: "Follower",
	inheritAttrs: !1,
	props: {
		show: Boolean,
		enabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: "bottom"
		},
		syncTrigger: {
			type: Array,
			default: ["resize", "scroll"]
		},
		to: [String, Object],
		flip: {
			type: Boolean,
			default: !0
		},
		internalShift: Boolean,
		x: Number,
		y: Number,
		width: String,
		minWidth: String,
		containerClass: String,
		teleportDisabled: Boolean,
		zindexable: {
			type: Boolean,
			default: !0
		},
		zIndex: Number,
		overlap: Boolean
	},
	setup(e) {
		let t = R("VBinder"), n = _l(() => e.enabled === void 0 ? e.show : e.enabled), r = /* @__PURE__ */ I(null), i = /* @__PURE__ */ I(null), a = () => {
			let { syncTrigger: n } = e;
			n.includes("scroll") && t.addScrollListener(c), n.includes("resize") && t.addResizeListener(c);
		}, o = () => {
			t.removeScrollListener(c), t.removeResizeListener(c);
		};
		Lr(() => {
			n.value && (c(), a());
		});
		let s = au();
		wu.mount({
			id: "vueuc/binder",
			head: !0,
			anchorMetaName: cu,
			ssr: s
		}), Br(() => {
			o();
		}), bl(() => {
			n.value && c();
		});
		let c = () => {
			if (!n.value) return;
			let a = r.value;
			if (a === null) return;
			let o = t.targetRef, { x: s, y: c, overlap: l } = e, u = s !== void 0 && c !== void 0 ? Vl(s, c) : Hl(o);
			a.style.setProperty("--v-target-width", `${Math.round(u.width)}px`), a.style.setProperty("--v-target-height", `${Math.round(u.height)}px`);
			let { width: d, minWidth: f, placement: p, internalShift: m, flip: h } = e;
			a.setAttribute("v-placement", p), l ? a.setAttribute("v-overlap", "") : a.removeAttribute("v-overlap");
			let { style: g } = a;
			g.width = d === "target" ? `${u.width}px` : d === void 0 ? "" : d, g.minWidth = f === "target" ? `${u.width}px` : f === void 0 ? "" : f;
			let _ = Hl(a), v = Hl(i.value), { left: y, top: b, placement: x } = xu(p, u, _, m, h, l), S = Su(x, l), { left: C, top: w, transform: T } = Cu(x, v, u, b, y, l);
			a.setAttribute("v-placement", x), a.style.setProperty("--v-offset-left", `${Math.round(y)}px`), a.style.setProperty("--v-offset-top", `${Math.round(b)}px`), a.style.transform = `translateX(${C}) translateY(${w}) ${T}`, a.style.setProperty("--v-transform-origin", S), a.style.transformOrigin = S;
		};
		Wn(n, (e) => {
			e ? (a(), l()) : o();
		});
		let l = () => {
			Cn().then(c).catch((e) => console.error(e));
		};
		[
			"placement",
			"x",
			"y",
			"internalShift",
			"flip",
			"width",
			"overlap",
			"minWidth"
		].forEach((t) => {
			Wn(/* @__PURE__ */ L(e, t), c);
		}), ["teleportDisabled"].forEach((t) => {
			Wn(/* @__PURE__ */ L(e, t), l);
		}), Wn(/* @__PURE__ */ L(e, "syncTrigger"), (e) => {
			e.includes("resize") ? t.addResizeListener(c) : t.removeResizeListener(c), e.includes("scroll") ? t.addScrollListener(c) : t.removeScrollListener(c);
		});
		let u = Sl();
		return {
			VBinder: t,
			mergedEnabled: n,
			offsetContainerRef: i,
			followerRef: r,
			mergedTo: _l(() => {
				let { to: t } = e;
				if (t !== void 0) return t;
				u.value;
			}),
			syncPosition: c
		};
	},
	render() {
		return H(fu, {
			show: this.show,
			to: this.mergedTo,
			disabled: this.teleportDisabled
		}, { default: () => {
			var e;
			let t = H("div", {
				class: ["v-binder-follower-container", this.containerClass],
				ref: "offsetContainerRef"
			}, [H("div", {
				class: "v-binder-follower-content",
				ref: "followerRef"
			}, (e = this.$slots).default?.call(e))]);
			return this.zindexable ? Rn(t, [[eu, {
				enabled: this.mergedEnabled,
				zIndex: this.zIndex
			}]]) : t;
		} });
	}
}), Eu = [], Du = function() {
	return Eu.some(function(e) {
		return e.activeTargets.length > 0;
	});
}, Ou = function() {
	return Eu.some(function(e) {
		return e.skippedTargets.length > 0;
	});
}, ku = "ResizeObserver loop completed with undelivered notifications.", Au = function() {
	var e;
	typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: ku }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ku), window.dispatchEvent(e);
}, ju;
(function(e) {
	e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ju || (ju = {}));
// node_modules/@juggle/resize-observer/lib/utils/freeze.js
var Mu = function(e) {
	return Object.freeze(e);
}, Nu = function() {
	function e(e, t) {
		this.inlineSize = e, this.blockSize = t, Mu(this);
	}
	return e;
}(), Pu = function() {
	function e(e, t, n, r) {
		return this.x = e, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Mu(this);
	}
	return e.prototype.toJSON = function() {
		var e = this;
		return {
			x: e.x,
			y: e.y,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			left: e.left,
			width: e.width,
			height: e.height
		};
	}, e.fromRect = function(t) {
		return new e(t.x, t.y, t.width, t.height);
	}, e;
}(), Fu = function(e) {
	return e instanceof SVGElement && "getBBox" in e;
}, Iu = function(e) {
	if (Fu(e)) {
		var t = e.getBBox(), n = t.width, r = t.height;
		return !n && !r;
	}
	var i = e, a = i.offsetWidth, o = i.offsetHeight;
	return !(a || o || e.getClientRects().length);
}, Lu = function(e) {
	if (e instanceof Element) return !0;
	var t = e?.ownerDocument?.defaultView;
	return !!(t && e instanceof t.Element);
}, Ru = function(e) {
	switch (e.tagName) {
		case "INPUT": if (e.type !== "image") break;
		case "VIDEO":
		case "AUDIO":
		case "EMBED":
		case "OBJECT":
		case "CANVAS":
		case "IFRAME":
		case "IMG": return !0;
	}
	return !1;
}, zu = typeof window < "u" ? window : {}, Bu = /* @__PURE__ */ new WeakMap(), Vu = /auto|scroll/, Hu = /^tb|vertical/, Uu = /msie|trident/i.test(zu.navigator && zu.navigator.userAgent), Wu = function(e) {
	return parseFloat(e || "0");
}, Gu = function(e, t, n) {
	return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Nu((n ? t : e) || 0, (n ? e : t) || 0);
}, Ku = Mu({
	devicePixelContentBoxSize: Gu(),
	borderBoxSize: Gu(),
	contentBoxSize: Gu(),
	contentRect: new Pu(0, 0, 0, 0)
}), qu = function(e, t) {
	if (t === void 0 && (t = !1), Bu.has(e) && !t) return Bu.get(e);
	if (Iu(e)) return Bu.set(e, Ku), Ku;
	var n = getComputedStyle(e), r = Fu(e) && e.ownerSVGElement && e.getBBox(), i = !Uu && n.boxSizing === "border-box", a = Hu.test(n.writingMode || ""), o = !r && Vu.test(n.overflowY || ""), s = !r && Vu.test(n.overflowX || ""), c = r ? 0 : Wu(n.paddingTop), l = r ? 0 : Wu(n.paddingRight), u = r ? 0 : Wu(n.paddingBottom), d = r ? 0 : Wu(n.paddingLeft), f = r ? 0 : Wu(n.borderTopWidth), p = r ? 0 : Wu(n.borderRightWidth), m = r ? 0 : Wu(n.borderBottomWidth), h = r ? 0 : Wu(n.borderLeftWidth), g = d + l, _ = c + u, v = h + p, y = f + m, b = s ? e.offsetHeight - y - e.clientHeight : 0, x = o ? e.offsetWidth - v - e.clientWidth : 0, S = i ? g + v : 0, C = i ? _ + y : 0, w = r ? r.width : Wu(n.width) - S - x, T = r ? r.height : Wu(n.height) - C - b, E = w + g + x + v, D = T + _ + b + y, O = Mu({
		devicePixelContentBoxSize: Gu(Math.round(w * devicePixelRatio), Math.round(T * devicePixelRatio), a),
		borderBoxSize: Gu(E, D, a),
		contentBoxSize: Gu(w, T, a),
		contentRect: new Pu(d, c, w, T)
	});
	return Bu.set(e, O), O;
}, Ju = function(e, t, n) {
	var r = qu(e, n), i = r.borderBoxSize, a = r.contentBoxSize, o = r.devicePixelContentBoxSize;
	switch (t) {
		case ju.DEVICE_PIXEL_CONTENT_BOX: return o;
		case ju.BORDER_BOX: return i;
		default: return a;
	}
}, Yu = function() {
	function e(e) {
		var t = qu(e);
		this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = Mu([t.borderBoxSize]), this.contentBoxSize = Mu([t.contentBoxSize]), this.devicePixelContentBoxSize = Mu([t.devicePixelContentBoxSize]);
	}
	return e;
}(), Xu = function(e) {
	if (Iu(e)) return Infinity;
	for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
	return t;
}, Zu = function() {
	var e = Infinity, t = [];
	Eu.forEach(function(n) {
		if (n.activeTargets.length !== 0) {
			var r = [];
			n.activeTargets.forEach(function(t) {
				var n = new Yu(t.target), i = Xu(t.target);
				r.push(n), t.lastReportedSize = Ju(t.target, t.observedBox), i < e && (e = i);
			}), t.push(function() {
				n.callback.call(n.observer, r, n.observer);
			}), n.activeTargets.splice(0, n.activeTargets.length);
		}
	});
	for (var n = 0, r = t; n < r.length; n++) {
		var i = r[n];
		i();
	}
	return e;
}, Qu = function(e) {
	Eu.forEach(function(t) {
		t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
			n.isActive() && (Xu(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
		});
	});
}, $u = function() {
	var e = 0;
	for (Qu(e); Du();) e = Zu(), Qu(e);
	return Ou() && Au(), e > 0;
}, ed, td = [], nd = function() {
	return td.splice(0).forEach(function(e) {
		return e();
	});
}, rd = function(e) {
	if (!ed) {
		var t = 0, n = document.createTextNode("");
		new MutationObserver(function() {
			return nd();
		}).observe(n, { characterData: !0 }), ed = function() {
			n.textContent = `${t ? t-- : t++}`;
		};
	}
	td.push(e), ed();
}, id = function(e) {
	rd(function() {
		requestAnimationFrame(e);
	});
}, ad = 0, od = function() {
	return !!ad;
}, sd = 250, cd = {
	attributes: !0,
	characterData: !0,
	childList: !0,
	subtree: !0
}, ld = [
	"resize",
	"load",
	"transitionend",
	"animationend",
	"animationstart",
	"animationiteration",
	"keyup",
	"keydown",
	"mouseup",
	"mousedown",
	"mouseover",
	"mouseout",
	"blur",
	"focus"
], ud = function(e) {
	return e === void 0 && (e = 0), Date.now() + e;
}, dd = !1, fd = new (function() {
	function e() {
		var e = this;
		this.stopped = !0, this.listener = function() {
			return e.schedule();
		};
	}
	return e.prototype.run = function(e) {
		var t = this;
		if (e === void 0 && (e = sd), !dd) {
			dd = !0;
			var n = ud(e);
			id(function() {
				var r = !1;
				try {
					r = $u();
				} finally {
					if (dd = !1, e = n - ud(), !od()) return;
					r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
				}
			});
		}
	}, e.prototype.schedule = function() {
		this.stop(), this.run();
	}, e.prototype.observe = function() {
		var e = this, t = function() {
			return e.observer && e.observer.observe(document.body, cd);
		};
		document.body ? t() : zu.addEventListener("DOMContentLoaded", t);
	}, e.prototype.start = function() {
		var e = this;
		this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ld.forEach(function(t) {
			return zu.addEventListener(t, e.listener, !0);
		}));
	}, e.prototype.stop = function() {
		var e = this;
		this.stopped || (this.observer && this.observer.disconnect(), ld.forEach(function(t) {
			return zu.removeEventListener(t, e.listener, !0);
		}), this.stopped = !0);
	}, e;
}())(), pd = function(e) {
	!ad && e > 0 && fd.start(), ad += e, !ad && fd.stop();
}, md = function(e) {
	return !Fu(e) && !Ru(e) && getComputedStyle(e).display === "inline";
}, hd = function() {
	function e(e, t) {
		this.target = e, this.observedBox = t || ju.CONTENT_BOX, this.lastReportedSize = {
			inlineSize: 0,
			blockSize: 0
		};
	}
	return e.prototype.isActive = function() {
		var e = Ju(this.target, this.observedBox, !0);
		return md(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
	}, e;
}(), gd = function() {
	function e(e, t) {
		this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
	}
	return e;
}(), _d = /* @__PURE__ */ new WeakMap(), vd = function(e, t) {
	for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
	return -1;
}, yd = function() {
	function e() {}
	return e.connect = function(e, t) {
		var n = new gd(e, t);
		_d.set(e, n);
	}, e.observe = function(e, t, n) {
		var r = _d.get(e), i = r.observationTargets.length === 0;
		vd(r.observationTargets, t) < 0 && (i && Eu.push(r), r.observationTargets.push(new hd(t, n && n.box)), pd(1), fd.schedule());
	}, e.unobserve = function(e, t) {
		var n = _d.get(e), r = vd(n.observationTargets, t), i = n.observationTargets.length === 1;
		r >= 0 && (i && Eu.splice(Eu.indexOf(n), 1), n.observationTargets.splice(r, 1), pd(-1));
	}, e.disconnect = function(e) {
		var t = this, n = _d.get(e);
		n.observationTargets.slice().forEach(function(n) {
			return t.unobserve(e, n.target);
		}), n.activeTargets.splice(0, n.activeTargets.length);
	}, e;
}(), bd = function() {
	function e(e) {
		if (arguments.length === 0) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
		if (typeof e != "function") throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
		yd.connect(this, e);
	}
	return e.prototype.observe = function(e, t) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Lu(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
		yd.observe(this, e, t);
	}, e.prototype.unobserve = function(e) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Lu(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
		yd.unobserve(this, e);
	}, e.prototype.disconnect = function() {
		yd.disconnect(this);
	}, e.toString = function() {
		return "function ResizeObserver () { [polyfill code] }";
	}, e;
}(), xd = new class {
	constructor() {
		this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || bd)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
	}
	handleResize(e) {
		for (let t of e) {
			let e = this.elHandlersMap.get(t.target);
			e !== void 0 && e(t);
		}
	}
	registerHandler(e, t) {
		this.elHandlersMap.set(e, t), this.observer.observe(e);
	}
	unregisterHandler(e) {
		this.elHandlersMap.has(e) && (this.elHandlersMap.delete(e), this.observer.unobserve(e));
	}
}(), Sd = /* @__PURE__ */ z({
	name: "ResizeObserver",
	props: { onResize: Function },
	setup(e) {
		let t = !1, n = Ha().proxy;
		function r(t) {
			let { onResize: n } = e;
			n !== void 0 && n(t);
		}
		Lr(() => {
			let e = n.$el;
			e === void 0 ? ou("resize-observer", "$el does not exist.") : e.nextElementSibling !== e.nextSibling && e.nodeType === 3 && e.nodeValue !== "" ? ou("resize-observer", "$el can not be observed (it may be a text node).") : e.nextElementSibling !== null && (xd.registerHandler(e.nextElementSibling, r), t = !0);
		}), Br(() => {
			t && xd.unregisterHandler(n.$el.nextElementSibling);
		});
	},
	render() {
		return qr(this.$slots, "default");
	}
}), Cd;
function wd() {
	return typeof document > "u" ? !1 : (Cd === void 0 && (Cd = "matchMedia" in window && window.matchMedia("(pointer:coarse)").matches), Cd);
}
var Td;
function Ed() {
	return typeof document > "u" ? 1 : (Td === void 0 && (Td = "chrome" in window ? window.devicePixelRatio : 1), Td);
}
// node_modules/vueuc/es/virtual-list/src/context.js
var Dd = "VVirtualListXScroll";
// node_modules/vueuc/es/virtual-list/src/xScroll.js
function Od({ columnsRef: e, renderColRef: t, renderItemWithColsRef: n }) {
	let r = /* @__PURE__ */ I(0), i = /* @__PURE__ */ I(0), a = V(() => {
		let t = e.value;
		if (t.length === 0) return null;
		let n = new uu(t.length, 0);
		return t.forEach((e, t) => {
			n.add(t, e.width);
		}), n;
	});
	return Bn(Dd, {
		startIndexRef: _l(() => {
			let e = a.value;
			return e === null ? 0 : Math.max(e.getBound(i.value) - 1, 0);
		}),
		endIndexRef: _l(() => {
			let t = a.value;
			return t === null ? 0 : Math.min(t.getBound(i.value + r.value) + 1, e.value.length - 1);
		}),
		columnsRef: e,
		renderColRef: t,
		renderItemWithColsRef: n,
		getLeft: (e) => {
			let t = a.value;
			return t === null ? 0 : t.sum(e);
		}
	}), {
		listWidthRef: r,
		scrollLeftRef: i
	};
}
// node_modules/vueuc/es/virtual-list/src/VirtualListRow.js
var kd = /* @__PURE__ */ z({
	name: "VirtualListRow",
	props: {
		index: {
			type: Number,
			required: !0
		},
		item: {
			type: Object,
			required: !0
		}
	},
	setup() {
		let { startIndexRef: e, endIndexRef: t, columnsRef: n, getLeft: r, renderColRef: i, renderItemWithColsRef: a } = R(Dd);
		return {
			startIndex: e,
			endIndex: t,
			columns: n,
			renderCol: i,
			renderItemWithCols: a,
			getLeft: r
		};
	},
	render() {
		let { startIndex: e, endIndex: t, columns: n, renderCol: r, renderItemWithCols: i, getLeft: a, item: o } = this;
		if (i != null) return i({
			itemIndex: this.index,
			startColIndex: e,
			endColIndex: t,
			allColumns: n,
			item: o,
			getLeft: a
		});
		if (r != null) {
			let i = [];
			for (let s = e; s <= t; ++s) {
				let e = n[s];
				i.push(r({
					column: e,
					left: a(s),
					item: o
				}));
			}
			return i;
		}
		return null;
	}
}), Ad = su(".v-vl", {
	maxHeight: "inherit",
	height: "100%",
	overflow: "auto",
	minWidth: "1px"
}, [su("&:not(.v-vl--show-scrollbar)", { scrollbarWidth: "none" }, [su("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
	width: 0,
	height: 0,
	display: "none"
})])]), jd = /* @__PURE__ */ z({
	name: "VirtualList",
	inheritAttrs: !1,
	props: {
		showScrollbar: {
			type: Boolean,
			default: !0
		},
		columns: {
			type: Array,
			default: () => []
		},
		renderCol: Function,
		renderItemWithCols: Function,
		items: {
			type: Array,
			default: () => []
		},
		itemSize: {
			type: Number,
			required: !0
		},
		itemResizable: Boolean,
		itemsStyle: [String, Object],
		visibleItemsTag: {
			type: [String, Object],
			default: "div"
		},
		visibleItemsProps: Object,
		ignoreItemResize: Boolean,
		onScroll: Function,
		onWheel: Function,
		onResize: Function,
		defaultScrollKey: [Number, String],
		defaultScrollIndex: Number,
		keyField: {
			type: String,
			default: "key"
		},
		paddingTop: {
			type: [Number, String],
			default: 0
		},
		paddingBottom: {
			type: [Number, String],
			default: 0
		}
	},
	setup(e) {
		let t = au();
		Ad.mount({
			id: "vueuc/virtual-list",
			head: !0,
			anchorMetaName: cu,
			ssr: t
		}), Lr(() => {
			let { defaultScrollIndex: t, defaultScrollKey: n } = e;
			t == null ? n != null && g({ key: n }) : g({ index: t });
		});
		let n = !1, r = !1;
		Ar(() => {
			n = !1, r ? g({
				top: p.value,
				left: o.value
			}) : r = !0;
		}), jr(() => {
			n = !0, r || (r = !0);
		});
		let i = _l(() => {
			if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0) return;
			let t = 0;
			return e.columns.forEach((e) => {
				t += e.width;
			}), t;
		}), a = V(() => {
			let t = /* @__PURE__ */ new Map(), { keyField: n } = e;
			return e.items.forEach((e, r) => {
				t.set(e[n], r);
			}), t;
		}), { scrollLeftRef: o, listWidthRef: s } = Od({
			columnsRef: /* @__PURE__ */ L(e, "columns"),
			renderColRef: /* @__PURE__ */ L(e, "renderCol"),
			renderItemWithColsRef: /* @__PURE__ */ L(e, "renderItemWithCols")
		}), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I(void 0), u = /* @__PURE__ */ new Map(), d = V(() => {
			let { items: t, itemSize: n, keyField: r } = e, i = new uu(t.length, n);
			return t.forEach((e, t) => {
				let n = e[r], a = u.get(n);
				a !== void 0 && i.add(t, a);
			}), i;
		}), f = /* @__PURE__ */ I(0), p = /* @__PURE__ */ I(0), m = _l(() => Math.max(d.value.getBound(p.value - Cc(e.paddingTop)) - 1, 0)), h = V(() => {
			let { value: t } = l;
			if (t === void 0) return [];
			let { items: n, itemSize: r } = e, i = m.value, a = Math.min(i + Math.ceil(t / r + 1), n.length - 1), o = [];
			for (let e = i; e <= a; ++e) o.push(n[e]);
			return o;
		}), g = (e, t) => {
			if (typeof e == "number") {
				b(e, t, "auto");
				return;
			}
			let { left: n, top: r, index: i, key: o, position: s, behavior: c, debounce: l = !0 } = e;
			if (n !== void 0 || r !== void 0) b(n, r, c);
			else if (i !== void 0) y(i, c, l);
			else if (o !== void 0) {
				let e = a.value.get(o);
				e !== void 0 && y(e, c, l);
			} else s === "bottom" ? b(0, 2 ** 53 - 1, c) : s === "top" && b(0, 0, c);
		}, _, v = null;
		function y(t, n, r) {
			let i = c.value;
			if (i == null) return;
			let { value: a } = d, o = a.sum(t) + Cc(e.paddingTop);
			if (!r) i.scrollTo({
				left: 0,
				top: o,
				behavior: n
			});
			else {
				_ = t, v !== null && window.clearTimeout(v), v = window.setTimeout(() => {
					_ = void 0, v = null;
				}, 16);
				let { scrollTop: e, offsetHeight: r } = i;
				if (o > e) {
					let s = a.get(t);
					o + s <= e + r || i.scrollTo({
						left: 0,
						top: o + s - r,
						behavior: n
					});
				} else i.scrollTo({
					left: 0,
					top: o,
					behavior: n
				});
			}
		}
		function b(e, t, n) {
			c.value?.scrollTo({
				left: e,
				top: t,
				behavior: n
			});
		}
		function x(t, r) {
			if (n || e.ignoreItemResize || O(r.target)) return;
			let { value: i } = d, o = a.value.get(t), s = i.get(o), l = r.borderBoxSize?.[0]?.blockSize ?? r.contentRect.height;
			if (l === s) return;
			l - e.itemSize === 0 ? u.delete(t) : u.set(t, l - e.itemSize);
			let p = l - s;
			if (p === 0) return;
			i.add(o, p);
			let m = c.value;
			if (m != null) {
				if (_ === void 0) {
					let e = i.sum(o);
					m.scrollTop > e && m.scrollBy(0, p);
				} else (o < _ || o === _ && l + i.sum(o) > m.scrollTop + m.offsetHeight) && m.scrollBy(0, p);
				D();
			}
			f.value++;
		}
		let S = !wd(), C = !1;
		function w(t) {
			var n;
			(n = e.onScroll) == null || n.call(e, t), S && C || D();
		}
		function T(t) {
			var n;
			if ((n = e.onWheel) == null || n.call(e, t), S) {
				let e = c.value;
				if (e != null) {
					if (t.deltaX === 0 && (e.scrollTop === 0 && t.deltaY <= 0 || e.scrollTop + e.offsetHeight >= e.scrollHeight && t.deltaY >= 0)) return;
					t.preventDefault(), e.scrollTop += t.deltaY / Ed(), e.scrollLeft += t.deltaX / Ed(), D(), C = !0, bc(() => {
						C = !1;
					});
				}
			}
		}
		function E(t) {
			if (n || O(t.target)) return;
			if (e.renderCol == null && e.renderItemWithCols == null) {
				if (t.contentRect.height === l.value) return;
			} else if (t.contentRect.height === l.value && t.contentRect.width === s.value) return;
			l.value = t.contentRect.height, s.value = t.contentRect.width;
			let { onResize: r } = e;
			r !== void 0 && r(t);
		}
		function D() {
			let { value: e } = c;
			e != null && (p.value = e.scrollTop, o.value = e.scrollLeft);
		}
		function O(e) {
			let t = e;
			for (; t !== null;) {
				if (t.style.display === "none") return !0;
				t = t.parentElement;
			}
			return !1;
		}
		return {
			listHeight: l,
			listStyle: { overflow: "auto" },
			keyToIndex: a,
			itemsStyle: V(() => {
				let { itemResizable: t } = e, n = wc(d.value.sum());
				return f.value, [e.itemsStyle, {
					boxSizing: "content-box",
					width: wc(i.value),
					height: t ? "" : n,
					minHeight: t ? n : "",
					paddingTop: wc(e.paddingTop),
					paddingBottom: wc(e.paddingBottom)
				}];
			}),
			visibleItemsStyle: V(() => (f.value, { transform: `translateY(${wc(d.value.sum(m.value))})` })),
			viewportItems: h,
			listElRef: c,
			itemsElRef: /* @__PURE__ */ I(null),
			scrollTo: g,
			handleListResize: E,
			handleListScroll: w,
			handleListWheel: T,
			handleItemResize: x
		};
	},
	render() {
		let { itemResizable: e, keyField: t, keyToIndex: n, visibleItemsTag: r } = this;
		return H(Sd, { onResize: this.handleListResize }, { default: () => {
			var i;
			return H("div", Fa(this.$attrs, {
				class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
				onScroll: this.handleListScroll,
				onWheel: this.handleListWheel,
				ref: "listElRef"
			}), [this.items.length === 0 ? (i = this.$slots).empty?.call(i) : H("div", {
				ref: "itemsElRef",
				class: "v-vl-items",
				style: this.itemsStyle
			}, [H(r, Object.assign({
				class: "v-vl-visible-items",
				style: this.visibleItemsStyle
			}, this.visibleItemsProps), { default: () => {
				let { renderCol: r, renderItemWithCols: i } = this;
				return this.viewportItems.map((a) => {
					let o = a[t], s = n.get(o), c = r == null ? void 0 : H(kd, {
						index: s,
						item: a
					}), l = i == null ? void 0 : H(kd, {
						index: s,
						item: a
					}), u = this.$slots.default({
						item: a,
						renderedCols: c,
						renderedItemWithCols: l,
						index: s
					})[0];
					return e ? H(Sd, {
						key: o,
						onResize: (e) => this.handleItemResize(o, e)
					}, { default: () => u }) : (u.key = o, u);
				});
			} })])]);
		} });
	}
}), Md = "v-hidden", Nd = su("[v-hidden]", { display: "none!important" }), Pd = /* @__PURE__ */ z({
	name: "Overflow",
	props: {
		getCounter: Function,
		getTail: Function,
		updateCounter: Function,
		onUpdateCount: Function,
		onUpdateOverflow: Function
	},
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ I(null), r = /* @__PURE__ */ I(null);
		function i(i) {
			let { value: a } = n, { getCounter: o, getTail: s } = e, c;
			if (c = o === void 0 ? r.value : o(), !a || !c) return;
			c.hasAttribute(Md) && c.removeAttribute(Md);
			let { children: l } = a;
			if (i.showAllItemsBeforeCalculate) for (let e of l) e.hasAttribute(Md) && e.removeAttribute(Md);
			let u = a.offsetWidth, d = [], f = t.tail ? s?.() : null, p = f ? f.offsetWidth : 0, m = !1, h = a.children.length - +!!t.tail;
			for (let t = 0; t < h - 1; ++t) {
				if (t < 0) continue;
				let n = l[t];
				if (m) {
					n.hasAttribute(Md) || n.setAttribute(Md, "");
					continue;
				}
				n.hasAttribute(Md) && n.removeAttribute(Md);
				let r = n.offsetWidth;
				if (p += r, d[t] = r, p > u) {
					let { updateCounter: n } = e;
					for (let r = t; r >= 0; --r) {
						let i = h - 1 - r;
						n === void 0 ? c.textContent = `${i}` : n(i);
						let a = c.offsetWidth;
						if (p -= d[r], p + a <= u || r === 0) {
							m = !0, t = r - 1, f && (t === -1 ? (f.style.maxWidth = `${u - a}px`, f.style.boxSizing = "border-box") : f.style.maxWidth = "");
							let { onUpdateCount: n } = e;
							n && n(i);
							break;
						}
					}
				}
			}
			let { onUpdateOverflow: g } = e;
			m ? g !== void 0 && g(!0) : (g !== void 0 && g(!1), c.setAttribute(Md, ""));
		}
		let a = au();
		return Nd.mount({
			id: "vueuc/overflow",
			head: !0,
			anchorMetaName: cu,
			ssr: a
		}), Lr(() => i({ showAllItemsBeforeCalculate: !1 })), {
			selfRef: n,
			counterRef: r,
			sync: i
		};
	},
	render() {
		let { $slots: e } = this;
		return Cn(() => this.sync({ showAllItemsBeforeCalculate: !1 })), H("div", {
			class: "v-overflow",
			ref: "selfRef"
		}, [
			qr(e, "default"),
			e.counter ? e.counter() : H("span", {
				style: { display: "inline-block" },
				ref: "counterRef"
			}),
			e.tail ? e.tail() : null
		]);
	}
});
// node_modules/vueuc/es/focus-trap/src/utils.js
function Fd(e) {
	return e instanceof HTMLElement;
}
function Id(e) {
	for (let t = 0; t < e.childNodes.length; t++) {
		let n = e.childNodes[t];
		if (Fd(n) && (Rd(n) || Id(n))) return !0;
	}
	return !1;
}
function Ld(e) {
	for (let t = e.childNodes.length - 1; t >= 0; t--) {
		let n = e.childNodes[t];
		if (Fd(n) && (Rd(n) || Ld(n))) return !0;
	}
	return !1;
}
function Rd(e) {
	if (!zd(e)) return !1;
	try {
		e.focus({ preventScroll: !0 });
	} catch {}
	return document.activeElement === e;
}
function zd(e) {
	if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null) return !0;
	if (e.getAttribute("disabled")) return !1;
	switch (e.nodeName) {
		case "A": return !!e.href && e.rel !== "ignore";
		case "INPUT": return e.type !== "hidden" && e.type !== "file";
		case "SELECT":
		case "TEXTAREA": return !0;
		default: return !1;
	}
}
// node_modules/vueuc/es/focus-trap/src/index.js
var Bd = [], Vd = /* @__PURE__ */ z({
	name: "FocusTrap",
	props: {
		disabled: Boolean,
		active: Boolean,
		autoFocus: {
			type: Boolean,
			default: !0
		},
		onEsc: Function,
		initialFocusTo: [String, Function],
		finalFocusTo: [String, Function],
		returnFocusOnDeactivated: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = al(), n = /* @__PURE__ */ I(null), r = /* @__PURE__ */ I(null), i = !1, a = !1, o = typeof document > "u" ? null : document.activeElement;
		function s() {
			return Bd[Bd.length - 1] === t;
		}
		function c(t) {
			var n;
			t.code === "Escape" && s() && ((n = e.onEsc) == null || n.call(e, t));
		}
		Lr(() => {
			Wn(() => e.active, (e) => {
				e ? (d(), ml("keydown", document, c)) : (hl("keydown", document, c), i && f());
			}, { immediate: !0 });
		}), Br(() => {
			hl("keydown", document, c), i && f();
		});
		function l(e) {
			if (!a && s()) {
				let t = u();
				if (t === null || t.contains(Sc(e))) return;
				p("first");
			}
		}
		function u() {
			let e = n.value;
			if (e === null) return null;
			let t = e;
			for (; t = t.nextSibling, !(t === null || t instanceof Element && t.tagName === "DIV"););
			return t;
		}
		function d() {
			var n;
			if (!e.disabled) {
				if (Bd.push(t), e.autoFocus) {
					let { initialFocusTo: t } = e;
					t === void 0 ? p("first") : (n = du(t)) == null || n.focus({ preventScroll: !0 });
				}
				i = !0, document.addEventListener("focus", l, !0);
			}
		}
		function f() {
			var n;
			if (e.disabled || (document.removeEventListener("focus", l, !0), Bd = Bd.filter((e) => e !== t), s())) return;
			let { finalFocusTo: r } = e;
			r === void 0 ? e.returnFocusOnDeactivated && o instanceof HTMLElement && (a = !0, o.focus({ preventScroll: !0 }), a = !1) : (n = du(r)) == null || n.focus({ preventScroll: !0 });
		}
		function p(t) {
			if (s() && e.active) {
				let e = n.value, i = r.value;
				if (e !== null && i !== null) {
					let n = u();
					if (n == null || n === i) {
						a = !0, e.focus({ preventScroll: !0 }), a = !1;
						return;
					}
					a = !0;
					let r = t === "first" ? Id(n) : Ld(n);
					a = !1, r || (a = !0, e.focus({ preventScroll: !0 }), a = !1);
				}
			}
		}
		function m(e) {
			if (a) return;
			let t = u();
			t !== null && (e.relatedTarget !== null && t.contains(e.relatedTarget) ? p("last") : p("first"));
		}
		function h(e) {
			a || (e.relatedTarget !== null && e.relatedTarget === n.value ? p("last") : p("first"));
		}
		return {
			focusableStartRef: n,
			focusableEndRef: r,
			focusableStyle: "position: absolute; height: 0; width: 0;",
			handleStartFocus: m,
			handleEndFocus: h
		};
	},
	render() {
		let { default: e } = this.$slots;
		if (e === void 0) return null;
		if (this.disabled) return e();
		let { active: t, focusableStyle: n } = this;
		return H(la, null, [
			H("div", {
				"aria-hidden": "true",
				tabindex: t ? "0" : "-1",
				ref: "focusableStartRef",
				style: n,
				onFocus: this.handleStartFocus
			}),
			e(),
			H("div", {
				"aria-hidden": "true",
				style: n,
				ref: "focusableEndRef",
				tabindex: t ? "0" : "-1",
				onFocus: this.handleEndFocus
			})
		]);
	}
});
// node_modules/naive-ui/es/_utils/composable/use-resize.mjs
function Hd(e, t) {
	t && (Lr(() => {
		let { value: n } = e;
		n && xd.registerHandler(n, t);
	}), Wn(e, (e, t) => {
		t && xd.unregisterHandler(t);
	}, { deep: !1 }), Br(() => {
		let { value: t } = e;
		t && xd.unregisterHandler(t);
	}));
}
// node_modules/naive-ui/es/_utils/css/color-to-class.mjs
function Ud(e) {
	return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
// node_modules/naive-ui/es/_utils/css/format-length.mjs
var Wd = /^(\d|\.)+$/, Gd = /(\d|\.)+/;
function Kd(e, { c: t = 1, offset: n = 0, attachPx: r = !0 } = {}) {
	if (typeof e == "number") {
		let r = (e + n) * t;
		return r === 0 ? "0" : `${r}px`;
	}
	if (typeof e == "string") {
		if (Wd.test(e)) {
			let i = (Number(e) + n) * t;
			return r ? i === 0 ? "0" : `${i}px` : `${i}`;
		}
		{
			let r = Gd.exec(e);
			return r ? e.replace(Gd, String((Number(r[0]) + n) * t)) : e;
		}
	}
	return e;
}
// node_modules/naive-ui/es/_utils/css/rtl-inset.mjs
function qd(e) {
	let { left: t, right: n, top: r, bottom: i } = Tc(e);
	return `${r} ${t} ${i} ${n}`;
}
// node_modules/naive-ui/es/_utils/env/is-jsdom.mjs
var Jd;
function Yd() {
	return Jd === void 0 && (Jd = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Jd;
}
// node_modules/naive-ui/es/_utils/event/index.mjs
var Xd = /* @__PURE__ */ new WeakSet();
function Zd(e) {
	Xd.add(e);
}
// node_modules/naive-ui/es/_utils/naive/attribute.mjs
function Qd(e) {
	switch (typeof e) {
		case "string": return e || void 0;
		case "number": return String(e);
		default: return;
	}
}
// node_modules/naive-ui/es/_utils/naive/warn.mjs
function $d(e, t) {
	console.error(`[naive/${e}]: ${t}`);
}
function ef(e, t) {
	throw Error(`[naive/${e}]: ${t}`);
}
// node_modules/naive-ui/es/_utils/vue/call.mjs
function tf(e, ...t) {
	if (Array.isArray(e)) e.forEach((e) => tf(e, ...t));
	else return e(...t);
}
// node_modules/naive-ui/es/_utils/vue/flatten.mjs
function nf(e, t = !0, n = []) {
	return e.forEach((e) => {
		if (e !== null) {
			if (typeof e != "object") (typeof e == "string" || typeof e == "number") && n.push(Aa(String(e)));
			else if (Array.isArray(e)) nf(e, t, n);
			else if (e.type === la) {
				if (e.children === null) return;
				Array.isArray(e.children) && nf(e.children, t, n);
			} else {
				if (e.type === da && t) return;
				n.push(e);
			}
		}
	}), n;
}
// node_modules/naive-ui/es/_utils/vue/get-first-slot-vnode.mjs
function rf(e, t = "default", n = void 0) {
	let r = e[t];
	if (!r) return $d("getFirstSlotVNode", `slot[${t}] is empty`), null;
	let i = nf(r(n));
	return i.length === 1 ? i[0] : ($d("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
// node_modules/naive-ui/es/_utils/vue/get-slot.mjs
function af(e, t = "default", n = []) {
	let r = e.$slots[t];
	return r === void 0 ? n : r();
}
// node_modules/naive-ui/es/_utils/vue/get-v-node-children.mjs
function of(e, t = "default", n = []) {
	let { children: r } = e;
	if (typeof r == "object" && r && !Array.isArray(r)) {
		let e = r[t];
		if (typeof e == "function") return e();
	}
	return n;
}
// node_modules/naive-ui/es/_utils/vue/keep.mjs
function sf(e, t = [], n) {
	let r = {};
	return t.forEach((t) => {
		r[t] = e[t];
	}), Object.assign(r, n);
}
// node_modules/naive-ui/es/_utils/vue/merge-handlers.mjs
function cf(e) {
	let t = e.filter((e) => e !== void 0);
	if (t.length !== 0) return t.length === 1 ? t[0] : (t) => {
		e.forEach((e) => {
			e && e(t);
		});
	};
}
// node_modules/naive-ui/es/_utils/vue/render.mjs
function lf(e, ...t) {
	return typeof e == "function" ? e(...t) : typeof e == "string" ? Aa(e) : typeof e == "number" ? Aa(String(e)) : null;
}
// node_modules/naive-ui/es/_utils/vue/resolve-slot.mjs
function uf(e) {
	return e.some((e) => !Sa(e) || !(e.type === da || e.type === la && !uf(e.children))) ? e : null;
}
function df(e, t) {
	return e && uf(e()) || t();
}
function ff(e, t) {
	return t(e && uf(e()) || null);
}
function pf(e) {
	return !(e && uf(e()));
}
// node_modules/naive-ui/es/_utils/vue/wrapper.mjs
var mf = /* @__PURE__ */ z({ render() {
	var e;
	return (e = this.$slots).default?.call(e);
} }), hf = El("n-config-provider");
function gf(e = {}, t = { defaultBordered: !0 }) {
	let n = R(hf, null);
	return {
		inlineThemeDisabled: n?.inlineThemeDisabled,
		mergedRtlRef: n?.mergedRtlRef,
		mergedComponentPropsRef: n?.mergedComponentPropsRef,
		mergedBreakpointsRef: n?.mergedBreakpointsRef,
		mergedBorderedRef: V(() => {
			let { bordered: r } = e;
			return r === void 0 ? n?.mergedBorderedRef.value ?? t.defaultBordered ?? !0 : r;
		}),
		mergedClsPrefixRef: n ? n.mergedClsPrefixRef : /* @__PURE__ */ Jt("n"),
		namespaceRef: V(() => n?.mergedNamespaceRef.value)
	};
}
// node_modules/naive-ui/es/_mixins/use-css-vars-class.mjs
function _f(e, t, n, r) {
	n || ef("useThemeClass", "cssVarsRef is not passed");
	let i = R(hf, null), a = i?.mergedThemeHashRef, o = i?.styleMountTarget, s = /* @__PURE__ */ I(""), c = au(), l, u = `__${e}`, d = () => {
		let e = u, i = t ? t.value : void 0, d = a?.value;
		d && (e += `-${d}`), i && (e += `-${i}`);
		let { themeOverrides: f, builtinThemeOverrides: p } = r;
		f && (e += `-${Zs(JSON.stringify(f))}`), p && (e += `-${Zs(JSON.stringify(p))}`), s.value = e, l = () => {
			let t = n.value, r = "";
			for (let e in t) r += `${e}: ${t[e]};`;
			U(`.${e}`, r).mount({
				id: e,
				ssr: c,
				parent: o
			}), l = void 0;
		};
	};
	return Un(() => {
		d();
	}), {
		themeClass: s,
		onRender: () => {
			l?.();
		}
	};
}
// node_modules/naive-ui/es/_mixins/use-form-item.mjs
var vf = El("n-form-item");
function yf(e, { defaultSize: t = "medium", mergedSize: n, mergedDisabled: r } = {}) {
	let i = R(vf, null);
	Bn(vf, null);
	let a = V(n ? () => n(i) : () => {
		let { size: n } = e;
		if (n) return n;
		if (i) {
			let { mergedSize: e } = i;
			if (e.value !== void 0) return e.value;
		}
		return t;
	}), o = V(r ? () => r(i) : () => {
		let { disabled: t } = e;
		return t === void 0 ? i ? i.disabled.value : !1 : t;
	}), s = V(() => {
		let { status: t } = e;
		return t || i?.mergedValidationStatus.value;
	});
	return Br(() => {
		i && i.restoreValidation();
	}), {
		mergedSizeRef: a,
		mergedDisabledRef: o,
		mergedStatusRef: s,
		nTriggerFormBlur() {
			i && i.handleContentBlur();
		},
		nTriggerFormChange() {
			i && i.handleContentChange();
		},
		nTriggerFormFocus() {
			i && i.handleContentFocus();
		},
		nTriggerFormInput() {
			i && i.handleContentInput();
		}
	};
}
// node_modules/naive-ui/es/locales/common/arDZ.mjs
var bf = {
	name: "ar-DZ",
	global: {
		undo: "تراجع",
		redo: "إعادة",
		confirm: "تأكيد",
		clear: "مسح"
	},
	Popconfirm: {
		positiveText: "تأكيد",
		negativeText: "إلغاء"
	},
	Cascader: {
		placeholder: "يرجى التحديد",
		loading: "جاري التحميل",
		loadingRequiredMessage: (e) => `يرجى تحميل جميع الـ ${e} الفرعية قبل التحقق منها.`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "مسح",
		now: "الآن",
		confirm: "تأكيد",
		selectTime: "إختيار الوقت",
		selectDate: "إختيار التاريخ",
		datePlaceholder: "إختيار التاريخ",
		datetimePlaceholder: "إختيار التاريخ والوقت",
		monthPlaceholder: "إختيار الشهر",
		yearPlaceholder: "إختيار السنة",
		quarterPlaceholder: "إختيار الربع",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "تاريخ البدء",
		endDatePlaceholder: "تاريخ الإنتهاء",
		startDatetimePlaceholder: "تاريخ ووقت البدء",
		endDatetimePlaceholder: "تاريخ ووقت الإنتهاء",
		startMonthPlaceholder: "شهر البدء",
		endMonthPlaceholder: "شهر الإنتهاء",
		monthBeforeYear: !0,
		firstDayOfWeek: 6,
		today: "اليوم"
	},
	DataTable: {
		checkTableAll: "تحديد كل العناصر في الجدول",
		uncheckTableAll: "إلغاء تحديد كل العناصر في الجدول",
		confirm: "تأكيد",
		clear: "مسح"
	},
	LegacyTransfer: {
		sourceTitle: "المصدر",
		targetTitle: "الهدف"
	},
	Transfer: {
		selectAll: "تحديد الكل",
		unselectAll: "إلغاء تحديد الكل",
		clearAll: "مسح",
		total: (e) => `إجمالي ${e} عنصر`,
		selected: (e) => `${e} عنصر محدد`
	},
	Empty: { description: "لا توجد بيانات" },
	Select: { placeholder: "يرجى الإختيار" },
	TimePicker: {
		placeholder: "إختيار الوقت",
		positiveText: "تأكيد",
		negativeText: "إلغاء",
		now: "الآن",
		clear: "مسح"
	},
	Pagination: {
		goto: "إذهب إلى",
		selectionSuffix: "صفحة"
	},
	DynamicTags: { add: "إضافة" },
	Log: { loading: "جاري التحميل" },
	Input: { placeholder: "يرجى الإدخال" },
	InputNumber: { placeholder: "يرجى الإدخال" },
	DynamicInput: { create: "إنشاء" },
	ThemeEditor: {
		title: "محرر النمط",
		clearAllVars: "مسح جميع المتغيرات",
		clearSearch: "مسح البحث",
		filterCompName: "تصفية إسم المكون",
		filterVarName: "تصفية إسم المتغير",
		import: "إستيراد",
		export: "تصدير",
		restore: "إعادة تعيين إلى الإفتراضي"
	},
	Image: {
		tipPrevious: "(→) الصورة السابقة",
		tipNext: "(←) الصورة التالية",
		tipCounterclockwise: "عكس عقارب الساعة",
		tipClockwise: "إتجاه عقارب الساعة",
		tipZoomOut: "تكبير",
		tipZoomIn: "تصغير",
		tipDownload: "للتحميل",
		tipClose: "إغلاق (Esc زر)",
		tipOriginalSize: "تكبير إلى الحجم الأصلي"
	},
	Heatmap: {
		less: "less",
		more: "more",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, xf = {
	name: "de-DE",
	global: {
		undo: "Rückgängig",
		redo: "Wiederholen",
		confirm: "Bestätigen",
		clear: "Löschen"
	},
	Popconfirm: {
		positiveText: "Bestätigen",
		negativeText: "Abbrechen"
	},
	Cascader: {
		placeholder: "Bitte auswählen",
		loading: "Wird geladen",
		loadingRequiredMessage: (e) => `Bitte laden Sie alle Unterpunkte von ${e}, bevor Sie es auswählen.`
	},
	Time: {
		dateFormat: "dd.MM.yyyy",
		dateTimeFormat: "dd.MM.yyyy HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "MM-yyyy",
		dateFormat: "dd.MM.yyyy",
		dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "Löschen",
		now: "Jetzt",
		confirm: "Bestätigen",
		selectTime: "Uhrzeit auswählen",
		selectDate: "Datum auswählen",
		datePlaceholder: "Datum auswählen",
		datetimePlaceholder: "Datum und Uhrzeit auswählen",
		monthPlaceholder: "Monat auswählen",
		yearPlaceholder: "Jahr auswählen",
		quarterPlaceholder: "Quartal auswählen",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Anfangsdatum",
		endDatePlaceholder: "Enddatum",
		startDatetimePlaceholder: "Anfangsdatum und Uhrzeit",
		endDatetimePlaceholder: "Enddatum und Uhrzeit",
		startMonthPlaceholder: "Anfangsmonat",
		endMonthPlaceholder: "Endmonat",
		monthBeforeYear: !0,
		firstDayOfWeek: 0,
		today: "Heute"
	},
	DataTable: {
		checkTableAll: "Alles auswählen",
		uncheckTableAll: "Auswahl aufheben",
		confirm: "Bestätigen",
		clear: "Löschen"
	},
	LegacyTransfer: {
		sourceTitle: "Quelle",
		targetTitle: "Ziel"
	},
	Transfer: {
		selectAll: "Alle auswählen",
		unselectAll: "Alle abwählen",
		clearAll: "Leeren",
		total: (e) => `Insgesamt ${e} Einträge`,
		selected: (e) => `${e} Einträge ausgewählt`
	},
	Empty: { description: "Keine Daten" },
	Select: { placeholder: "Bitte auswählen" },
	TimePicker: {
		placeholder: "Uhrzeit auswählen",
		positiveText: "OK",
		negativeText: "Abbrechen",
		now: "Jetzt",
		clear: "Löschen"
	},
	Pagination: {
		goto: "Gehe zu",
		selectionSuffix: "Seite"
	},
	DynamicTags: { add: "Hinzufügen" },
	Log: { loading: "Wird geladen" },
	Input: { placeholder: "Bitte ausfüllen" },
	InputNumber: { placeholder: "Bitte ausfüllen" },
	DynamicInput: { create: "Erstellen" },
	ThemeEditor: {
		title: "Theme Editor",
		clearAllVars: "Alle Variablen löschen",
		clearSearch: "Suche löschen",
		filterCompName: "Filter Komponentenname",
		filterVarName: "Filter Variablenname",
		import: "Importieren",
		export: "Exportieren",
		restore: "Auf Standard zurücksetzen"
	},
	Image: {
		tipPrevious: "Vorheriges Bild (←)",
		tipNext: "Nächstes Bild (→)",
		tipCounterclockwise: "Gegen Uhrzeigersinn",
		tipClockwise: "Uhrzeigersinn",
		tipZoomOut: "Rauszoomen",
		tipZoomIn: "Reinzoomen",
		tipDownload: "Download",
		tipClose: "Schließen (Esc)",
		tipOriginalSize: "Zoom zurücksetzen"
	},
	Heatmap: {
		less: "weniger",
		more: "mehr",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Sf = {
	name: "en-US",
	global: {
		undo: "Undo",
		redo: "Redo",
		confirm: "Confirm",
		clear: "Clear"
	},
	Popconfirm: {
		positiveText: "Confirm",
		negativeText: "Cancel"
	},
	Cascader: {
		placeholder: "Please Select",
		loading: "Loading",
		loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "Clear",
		now: "Now",
		confirm: "Confirm",
		selectTime: "Select Time",
		selectDate: "Select Date",
		datePlaceholder: "Select Date",
		datetimePlaceholder: "Select Date and Time",
		monthPlaceholder: "Select Month",
		yearPlaceholder: "Select Year",
		quarterPlaceholder: "Select Quarter",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Start Date",
		endDatePlaceholder: "End Date",
		startDatetimePlaceholder: "Start Date and Time",
		endDatetimePlaceholder: "End Date and Time",
		startMonthPlaceholder: "Start Month",
		endMonthPlaceholder: "End Month",
		monthBeforeYear: !0,
		firstDayOfWeek: 6,
		today: "Today"
	},
	DataTable: {
		checkTableAll: "Select all in the table",
		uncheckTableAll: "Unselect all in the table",
		confirm: "Confirm",
		clear: "Clear"
	},
	LegacyTransfer: {
		sourceTitle: "Source",
		targetTitle: "Target"
	},
	Transfer: {
		selectAll: "Select all",
		unselectAll: "Unselect all",
		clearAll: "Clear",
		total: (e) => `Total ${e} items`,
		selected: (e) => `${e} items selected`
	},
	Empty: { description: "No Data" },
	Select: { placeholder: "Please Select" },
	TimePicker: {
		placeholder: "Select Time",
		positiveText: "OK",
		negativeText: "Cancel",
		now: "Now",
		clear: "Clear"
	},
	Pagination: {
		goto: "Goto",
		selectionSuffix: "page"
	},
	DynamicTags: { add: "Add" },
	Log: { loading: "Loading" },
	Input: { placeholder: "Please Input" },
	InputNumber: { placeholder: "Please Input" },
	DynamicInput: { create: "Create" },
	ThemeEditor: {
		title: "Theme Editor",
		clearAllVars: "Clear All Variables",
		clearSearch: "Clear Search",
		filterCompName: "Filter Component Name",
		filterVarName: "Filter Variable Name",
		import: "Import",
		export: "Export",
		restore: "Reset to Default"
	},
	Image: {
		tipPrevious: "Previous picture (←)",
		tipNext: "Next picture (→)",
		tipCounterclockwise: "Counterclockwise",
		tipClockwise: "Clockwise",
		tipZoomOut: "Zoom out",
		tipZoomIn: "Zoom in",
		tipDownload: "Download",
		tipClose: "Close (Esc)",
		tipOriginalSize: "Zoom to original size"
	},
	Heatmap: {
		less: "less",
		more: "more",
		monthFormat: "MMM",
		weekdayFormat: "eee"
	}
}, Cf = {
	name: "es-AR",
	global: {
		undo: "Deshacer",
		redo: "Rehacer",
		confirm: "Confirmar",
		clear: "Borrar"
	},
	Popconfirm: {
		positiveText: "Confirmar",
		negativeText: "Cancelar"
	},
	Cascader: {
		placeholder: "Seleccionar por favor",
		loading: "Cargando",
		loadingRequiredMessage: (e) => `Por favor, cargue los descendientes de ${e} antes de marcarlo.`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "Borrar",
		now: "Ahora",
		confirm: "Confirmar",
		selectTime: "Seleccionar hora",
		selectDate: "Seleccionar fecha",
		datePlaceholder: "Seleccionar fecha",
		datetimePlaceholder: "Seleccionar fecha y hora",
		monthPlaceholder: "Seleccionar mes",
		yearPlaceholder: "Seleccionar año",
		quarterPlaceholder: "Seleccionar Trimestre",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Fecha de inicio",
		endDatePlaceholder: "Fecha final",
		startDatetimePlaceholder: "Fecha y hora de inicio",
		endDatetimePlaceholder: "Fecha y hora final",
		monthBeforeYear: !0,
		startMonthPlaceholder: "Start Month",
		endMonthPlaceholder: "End Month",
		firstDayOfWeek: 6,
		today: "Hoy"
	},
	DataTable: {
		checkTableAll: "Seleccionar todo de la tabla",
		uncheckTableAll: "Deseleccionar todo de la tabla",
		confirm: "Confirmar",
		clear: "Limpiar"
	},
	LegacyTransfer: {
		sourceTitle: "Fuente",
		targetTitle: "Objetivo"
	},
	Transfer: {
		selectAll: "Select all",
		unselectAll: "Unselect all",
		clearAll: "Clear",
		total: (e) => `Total ${e} items`,
		selected: (e) => `${e} items selected`
	},
	Empty: { description: "Sin datos" },
	Select: { placeholder: "Seleccionar por favor" },
	TimePicker: {
		placeholder: "Seleccionar hora",
		positiveText: "OK",
		negativeText: "Cancelar",
		now: "Ahora",
		clear: "Borrar"
	},
	Pagination: {
		goto: "Ir a",
		selectionSuffix: "página"
	},
	DynamicTags: { add: "Agregar" },
	Log: { loading: "Cargando" },
	Input: { placeholder: "Ingrese datos por favor" },
	InputNumber: { placeholder: "Ingrese datos por favor" },
	DynamicInput: { create: "Crear" },
	ThemeEditor: {
		title: "Editor de Tema",
		clearAllVars: "Limpiar todas las variables",
		clearSearch: "Limpiar búsqueda",
		filterCompName: "Filtro para nombre del componente",
		filterVarName: "Filtro para nombre de la variable",
		import: "Importar",
		export: "Exportar",
		restore: "Restablecer los valores por defecto"
	},
	Image: {
		tipPrevious: "Imagen anterior (←)",
		tipNext: "Siguiente imagen (→)",
		tipCounterclockwise: "Sentido antihorario",
		tipClockwise: "Sentido horario",
		tipZoomOut: "Alejar",
		tipZoomIn: "Acercar",
		tipDownload: "Descargar",
		tipClose: "Cerrar (Esc)",
		tipOriginalSize: "Zoom to original size"
	},
	Heatmap: {
		less: "menos",
		more: "más",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, wf = {
	name: "fr-FR",
	global: {
		undo: "Défaire",
		redo: "Refaire",
		confirm: "Confirmer",
		clear: "Effacer"
	},
	Popconfirm: {
		positiveText: "Confirmer",
		negativeText: "Annuler"
	},
	Cascader: {
		placeholder: "Sélectionner",
		loading: "Chargement",
		loadingRequiredMessage: (e) => `Charger tous les enfants de ${e} avant de le sélectionner`
	},
	Time: {
		dateFormat: "dd/MM/yyyy",
		dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "MM/yyyy",
		dateFormat: "dd/MM/yyyy",
		dateTimeFormat: "dd/MM/yyyy HH:mm:ss",
		quarterFormat: "qqq yyyy",
		weekFormat: "YYYY-w",
		clear: "Effacer",
		now: "Maintenant",
		confirm: "Confirmer",
		selectTime: "Sélectionner l'heure",
		selectDate: "Sélectionner la date",
		datePlaceholder: "Sélectionner la date",
		datetimePlaceholder: "Sélectionner la date et l'heure",
		monthPlaceholder: "Sélectionner le mois",
		yearPlaceholder: "Sélectionner l'année",
		quarterPlaceholder: "Sélectionner le trimestre",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Date de début",
		endDatePlaceholder: "Date de fin",
		startDatetimePlaceholder: "Date et heure de début",
		endDatetimePlaceholder: "Date et heure de fin",
		startMonthPlaceholder: "Mois de début",
		endMonthPlaceholder: "Mois de fin",
		monthBeforeYear: !0,
		firstDayOfWeek: 0,
		today: "Aujourd'hui"
	},
	DataTable: {
		checkTableAll: "Sélectionner tout",
		uncheckTableAll: "Désélectionner tout",
		confirm: "Confirmer",
		clear: "Effacer"
	},
	LegacyTransfer: {
		sourceTitle: "Source",
		targetTitle: "Cible"
	},
	Transfer: {
		selectAll: "Sélectionner tout",
		unselectAll: "Désélectionner tout",
		clearAll: "Effacer",
		total: (e) => `Total ${e} éléments`,
		selected: (e) => `${e} éléments sélectionnés`
	},
	Empty: { description: "Aucune donnée" },
	Select: { placeholder: "Sélectionner" },
	TimePicker: {
		placeholder: "Sélectionner l'heure",
		positiveText: "OK",
		negativeText: "Annuler",
		now: "Maintenant",
		clear: "Effacer"
	},
	Pagination: {
		goto: "Aller à",
		selectionSuffix: "page"
	},
	DynamicTags: { add: "Ajouter" },
	Log: { loading: "Chargement" },
	Input: { placeholder: "Saisir" },
	InputNumber: { placeholder: "Saisir" },
	DynamicInput: { create: "Créer" },
	ThemeEditor: {
		title: "Éditeur de thème",
		clearAllVars: "Effacer toutes les variables",
		clearSearch: "Effacer la recherche",
		filterCompName: "Filtrer par nom de composant",
		filterVarName: "Filtrer par nom de variable",
		import: "Importer",
		export: "Exporter",
		restore: "Réinitialiser"
	},
	Image: {
		tipPrevious: "Image précédente (←)",
		tipNext: "Image suivante (→)",
		tipCounterclockwise: "Sens antihoraire",
		tipClockwise: "Sens horaire",
		tipZoomOut: "Dézoomer",
		tipZoomIn: "Zoomer",
		tipDownload: "Descargar",
		tipClose: "Fermer (Échap.)",
		tipOriginalSize: "Zoom à la taille originale"
	},
	Heatmap: {
		less: "moins",
		more: "plus",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Tf = {
	name: "ja-JP",
	global: {
		undo: "元に戻す",
		redo: "やり直す",
		confirm: "OK",
		clear: "クリア"
	},
	Popconfirm: {
		positiveText: "OK",
		negativeText: "キャンセル"
	},
	Cascader: {
		placeholder: "選択してください",
		loading: "ロード中",
		loadingRequiredMessage: (e) => `すべての ${e} サブノードをロードしてから選択できます。`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy年",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "クリア",
		now: "現在",
		confirm: "OK",
		selectTime: "時間を選択",
		selectDate: "日付を選択",
		datePlaceholder: "日付を選択",
		datetimePlaceholder: "選択",
		monthPlaceholder: "月を選択",
		yearPlaceholder: "年を選択",
		quarterPlaceholder: "四半期を選択",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "開始日",
		endDatePlaceholder: "終了日",
		startDatetimePlaceholder: "開始時間",
		endDatetimePlaceholder: "終了時間",
		startMonthPlaceholder: "開始月",
		endMonthPlaceholder: "終了月",
		monthBeforeYear: !1,
		firstDayOfWeek: 0,
		today: "今日"
	},
	DataTable: {
		checkTableAll: "全選択",
		uncheckTableAll: "全選択取消",
		confirm: "OK",
		clear: "リセット"
	},
	LegacyTransfer: {
		sourceTitle: "元",
		targetTitle: "先"
	},
	Transfer: {
		selectAll: "全選択",
		unselectAll: "全選択取消",
		clearAll: "リセット",
		total: (e) => `合計 ${e} 項目`,
		selected: (e) => `${e} 個の項目を選択`
	},
	Empty: { description: "データなし" },
	Select: { placeholder: "選択してください" },
	TimePicker: {
		placeholder: "選択してください",
		positiveText: "OK",
		negativeText: "キャンセル",
		now: "現在",
		clear: "クリア"
	},
	Pagination: {
		goto: "ページジャンプ",
		selectionSuffix: "ページ"
	},
	DynamicTags: { add: "追加" },
	Log: { loading: "ロード中" },
	Input: { placeholder: "入力してください" },
	InputNumber: { placeholder: "入力してください" },
	DynamicInput: { create: "追加" },
	ThemeEditor: {
		title: "テーマエディタ",
		clearAllVars: "全件変数クリア",
		clearSearch: "検索クリア",
		filterCompName: "コンポネント名をフィルタ",
		filterVarName: "変数をフィルタ",
		import: "インポート",
		export: "エクスポート",
		restore: "デフォルト"
	},
	Image: {
		tipPrevious: "前の画像 (←)",
		tipNext: "次の画像 (→)",
		tipCounterclockwise: "左に回転",
		tipClockwise: "右に回転",
		tipZoomOut: "縮小",
		tipZoomIn: "拡大",
		tipDownload: "ダウンロード",
		tipClose: "閉じる (Esc)",
		tipOriginalSize: "元のサイズに戻す"
	},
	Heatmap: {
		less: "少",
		more: "多",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Ef = {
	name: "ko-KR",
	global: {
		undo: "실행 취소",
		redo: "다시 실행",
		confirm: "확인",
		clear: "지우기"
	},
	Popconfirm: {
		positiveText: "확인",
		negativeText: "취소"
	},
	Cascader: {
		placeholder: "선택해 주세요",
		loading: "불러오는 중",
		loadingRequiredMessage: (e) => `${e}의 모든 하위 항목을 불러온 뒤에 선택할 수 있습니다.`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy년",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "지우기",
		now: "현재",
		confirm: "확인",
		selectTime: "시간 선택",
		selectDate: "날짜 선택",
		datePlaceholder: "날짜 선택",
		datetimePlaceholder: "날짜 및 시간 선택",
		monthPlaceholder: "월 선택",
		yearPlaceholder: "년 선택",
		quarterPlaceholder: "분기 선택",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "시작 날짜",
		endDatePlaceholder: "종료 날짜",
		startDatetimePlaceholder: "시작 날짜 및 시간",
		endDatetimePlaceholder: "종료 날짜 및 시간",
		startMonthPlaceholder: "시작 월",
		endMonthPlaceholder: "종료 월",
		monthBeforeYear: !1,
		firstDayOfWeek: 6,
		today: "오늘"
	},
	DataTable: {
		checkTableAll: "모두 선택",
		uncheckTableAll: "모두 선택 해제",
		confirm: "확인",
		clear: "지우기"
	},
	LegacyTransfer: {
		sourceTitle: "원본",
		targetTitle: "타깃"
	},
	Transfer: {
		selectAll: "전체 선택",
		unselectAll: "전체 해제",
		clearAll: "전체 삭제",
		total: (e) => `총 ${e} 개`,
		selected: (e) => `${e} 개 선택`
	},
	Empty: { description: "데이터 없음" },
	Select: { placeholder: "선택해 주세요" },
	TimePicker: {
		placeholder: "시간 선택",
		positiveText: "확인",
		negativeText: "취소",
		now: "현재 시간",
		clear: "지우기"
	},
	Pagination: {
		goto: "이동",
		selectionSuffix: "페이지"
	},
	DynamicTags: { add: "추가" },
	Log: { loading: "불러오는 중" },
	Input: { placeholder: "입력해 주세요" },
	InputNumber: { placeholder: "입력해 주세요" },
	DynamicInput: { create: "추가" },
	ThemeEditor: {
		title: "테마 편집기",
		clearAllVars: "모든 변수 지우기",
		clearSearch: "검색 지우기",
		filterCompName: "구성 요소 이름 필터",
		filterVarName: "변수 이름 필터",
		import: "가져오기",
		export: "내보내기",
		restore: "기본으로 재설정"
	},
	Image: {
		tipPrevious: "이전 (←)",
		tipNext: "다음 (→)",
		tipCounterclockwise: "시계 반대 방향으로 회전",
		tipClockwise: "시계 방향으로 회전",
		tipZoomOut: "축소",
		tipZoomIn: "확대",
		tipDownload: "다운로드",
		tipClose: "닫기 (Esc)",
		tipOriginalSize: "원본 크기로 확대"
	},
	Heatmap: {
		less: "적음",
		more: "많음",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Df = {
	name: "pt-BR",
	global: {
		undo: "Desfazer",
		redo: "Refazer",
		confirm: "Confirmar",
		clear: "Limpar"
	},
	Popconfirm: {
		positiveText: "Confirmar",
		negativeText: "Cancelar"
	},
	Cascader: {
		placeholder: "Por favor selecione",
		loading: "Carregando",
		loadingRequiredMessage: (e) => `Carregue todos os descendentes de ${e} antes de verificar.`
	},
	Time: {
		dateFormat: "dd/MM/yyyy",
		dateTimeFormat: "dd/MM/yyyy HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy/MM",
		dateFormat: "dd/MM/yyyy",
		dateTimeFormat: "dd/MM/yyyy HH:mm:ss",
		quarterFormat: "yyyy/qqq",
		weekFormat: "YYYY-w",
		clear: "Limpar",
		now: "Agora",
		confirm: "Confirmar",
		selectTime: "Selecione a hora",
		selectDate: "Selecione a data",
		datePlaceholder: "Selecione a data",
		datetimePlaceholder: "Selecione a data e hora",
		monthPlaceholder: "Selecione o mês",
		yearPlaceholder: "Selecione o ano",
		quarterPlaceholder: "Selecione o trimestre",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Selecione a data de início",
		endDatePlaceholder: "Selecione a data de término",
		startDatetimePlaceholder: "Selecione a data e hora de início",
		endDatetimePlaceholder: "Selecione a data e hora de término",
		startMonthPlaceholder: "Selecione o mês de início",
		endMonthPlaceholder: "Selecione o mês de término",
		monthBeforeYear: !0,
		firstDayOfWeek: 6,
		today: "Hoje"
	},
	DataTable: {
		checkTableAll: "Selecionar todos na tabela",
		uncheckTableAll: "Desmarcar todos na tabela",
		confirm: "Confirmar",
		clear: "Limpar"
	},
	LegacyTransfer: {
		sourceTitle: "Origem",
		targetTitle: "Destino"
	},
	Transfer: {
		selectAll: "Selecionar todos",
		unselectAll: "Desmarcar todos",
		clearAll: "Limpar",
		total: (e) => `Total ${e} itens`,
		selected: (e) => `${e} itens selecionados`
	},
	Empty: { description: "Não há dados" },
	Select: { placeholder: "Por favor selecione" },
	TimePicker: {
		placeholder: "Selecione a hora",
		positiveText: "OK",
		negativeText: "Cancelar",
		now: "Agora",
		clear: "Limpar"
	},
	Pagination: {
		goto: "Ir para",
		selectionSuffix: "página"
	},
	DynamicTags: { add: "Adicionar" },
	Log: { loading: "Carregando" },
	Input: { placeholder: "Por favor digite" },
	InputNumber: { placeholder: "Por favor digite" },
	DynamicInput: { create: "Criar" },
	ThemeEditor: {
		title: "Editor de temas",
		clearAllVars: "Limpar todas as variáveis",
		clearSearch: "Limpar pesquisa",
		filterCompName: "Filtrar nome do componente",
		filterVarName: "Filtrar nome da variável",
		import: "Importar",
		export: "Exportar",
		restore: "Restaurar"
	},
	Image: {
		tipPrevious: "Foto anterior (←)",
		tipNext: "Próxima foto (→)",
		tipCounterclockwise: "Sentido anti-horário",
		tipClockwise: "Sentido horário",
		tipZoomOut: "Reduzir o zoom",
		tipZoomIn: "Aumentar o zoom",
		tipDownload: "Download",
		tipClose: "Fechar (Esc)",
		tipOriginalSize: "Exibir no tamanho original"
	},
	Heatmap: {
		less: "menos",
		more: "mais",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Of = {
	name: "ru-RU",
	global: {
		undo: "Отменить",
		redo: "Вернуть",
		confirm: "Подтвердить",
		clear: "Очистить"
	},
	Popconfirm: {
		positiveText: "Подтвердить",
		negativeText: "Отмена"
	},
	Cascader: {
		placeholder: "Выбрать",
		loading: "Загрузка",
		loadingRequiredMessage: (e) => `Загрузите все дочерние узлы ${e} прежде чем они станут необязательными`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "Очистить",
		now: "Сейчас",
		confirm: "Подтвердить",
		selectTime: "Выбрать время",
		selectDate: "Выбрать дату",
		datePlaceholder: "Выбрать дату",
		datetimePlaceholder: "Выбрать дату и время",
		monthPlaceholder: "Выберите месяц",
		yearPlaceholder: "Выберите год",
		quarterPlaceholder: "Выберите квартал",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Дата начала",
		endDatePlaceholder: "Дата окончания",
		startDatetimePlaceholder: "Дата и время начала",
		endDatetimePlaceholder: "Дата и время окончания",
		startMonthPlaceholder: "Начало месяца",
		endMonthPlaceholder: "Конец месяца",
		monthBeforeYear: !0,
		firstDayOfWeek: 0,
		today: "Сегодня"
	},
	DataTable: {
		checkTableAll: "Выбрать все в таблице",
		uncheckTableAll: "Отменить все в таблице",
		confirm: "Подтвердить",
		clear: "Очистить"
	},
	LegacyTransfer: {
		sourceTitle: "Источник",
		targetTitle: "Назначение"
	},
	Transfer: {
		selectAll: "Выбрать все",
		unselectAll: "Снять все",
		clearAll: "Очистить",
		total: (e) => `Всего ${e} элементов`,
		selected: (e) => `${e} выбрано элементов`
	},
	Empty: { description: "Нет данных" },
	Select: { placeholder: "Выбрать" },
	TimePicker: {
		placeholder: "Выбрать время",
		positiveText: "OK",
		negativeText: "Отменить",
		now: "Сейчас",
		clear: "Очистить"
	},
	Pagination: {
		goto: "Перейти",
		selectionSuffix: "страница"
	},
	DynamicTags: { add: "Добавить" },
	Log: { loading: "Загрузка" },
	Input: { placeholder: "Ввести" },
	InputNumber: { placeholder: "Ввести" },
	DynamicInput: { create: "Создать" },
	ThemeEditor: {
		title: "Редактор темы",
		clearAllVars: "Очистить все",
		clearSearch: "Очистить поиск",
		filterCompName: "Фильтровать по имени компонента",
		filterVarName: "Фильтровать имена переменных",
		import: "Импорт",
		export: "Экспорт",
		restore: "Сбросить"
	},
	Image: {
		tipPrevious: "Предыдущее изображение (←)",
		tipNext: "Следующее изображение (→)",
		tipCounterclockwise: "Против часовой стрелки",
		tipClockwise: "По часовой стрелке",
		tipZoomOut: "Отдалить",
		tipZoomIn: "Приблизить",
		tipDownload: "Скачать",
		tipClose: "Закрыть (Esc)",
		tipOriginalSize: "Вернуть исходный размер"
	},
	Heatmap: {
		less: "меньше",
		more: "больше",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, kf = {
	name: "tr-TR",
	global: {
		undo: "Vazgeç",
		redo: "Tekrar Dene",
		confirm: "Kabul Et",
		clear: "Temizle"
	},
	Popconfirm: {
		positiveText: "Kabul Et",
		negativeText: "İptal"
	},
	Cascader: {
		placeholder: "Lütfen Seçin",
		loading: "Yükleniyor",
		loadingRequiredMessage: (e) => `Lütfen kontrol etmeden önce tüm ${e}ları yükleyin.`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "Temizle",
		now: "Şimdi",
		confirm: "Onayla",
		selectTime: "Saat Seçin",
		selectDate: "Tarih Seçin",
		datePlaceholder: "Tarih Seç",
		datetimePlaceholder: "Tarih ve Saat Seçin",
		monthPlaceholder: "Ay Seçin",
		yearPlaceholder: "Yıl Seçin",
		quarterPlaceholder: "Mevsim Seçin",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "Başlangıç Tarihi",
		endDatePlaceholder: "Bitiş Tarihi",
		startDatetimePlaceholder: "Başlangıç Tarih ve Saati",
		endDatetimePlaceholder: "Bitiş Tarihi ve Saati",
		startMonthPlaceholder: "Başlangıç Ayı",
		endMonthPlaceholder: "Bitiş Ayı",
		monthBeforeYear: !0,
		firstDayOfWeek: 6,
		today: "Bugün"
	},
	DataTable: {
		checkTableAll: "Tüm Tabloyu Seç",
		uncheckTableAll: "Tablodaki tüm seçimleri kaldır",
		confirm: "Onayla",
		clear: "Temizle"
	},
	LegacyTransfer: {
		sourceTitle: "Kaynak",
		targetTitle: "Hedef"
	},
	Transfer: {
		selectAll: "Tümünü Seç",
		unselectAll: "Tüm Seçimi Kaldır",
		clearAll: "Temizle",
		total: (e) => `Toplam ${e} öğe`,
		selected: (e) => `${e} öğe Seçili`
	},
	Empty: { description: "Veri Yok" },
	Select: { placeholder: "Lütfen seçin" },
	TimePicker: {
		placeholder: "Saat Seç",
		positiveText: "Tamam",
		negativeText: "İptal",
		now: "Şimdi",
		clear: "Temizle"
	},
	Pagination: {
		goto: "git",
		selectionSuffix: "sayfa"
	},
	DynamicTags: { add: "Ekle" },
	Log: { loading: "Yükleniyor" },
	Input: { placeholder: "Lütfen Girin" },
	InputNumber: { placeholder: "Lütfen Girin" },
	DynamicInput: { create: "Oluştur" },
	ThemeEditor: {
		title: "Tema Editörü",
		clearAllVars: "Tüm Değişkenleri Temizle",
		clearSearch: "Aramayı Temizle",
		filterCompName: "Bileşen Adını Filtrele",
		filterVarName: "Değişken Adını Filtrele",
		import: "Ekle",
		export: "Çıkar",
		restore: "Varsayılana sıfırla"
	},
	Image: {
		tipPrevious: "Önceki resim (←)",
		tipNext: "Sonraki resim (→)",
		tipCounterclockwise: "saat yönünün tersine",
		tipClockwise: "saat yönününe",
		tipZoomOut: "Uzaklaştır",
		tipZoomIn: "Yakınlaştır",
		tipDownload: "indir",
		tipClose: "Kapat (Esc)",
		tipOriginalSize: "Orijinal boyuta yakınlaştır"
	},
	Heatmap: {
		less: "az",
		more: "çok",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, Af = {
	name: "zh-CN",
	global: {
		undo: "撤销",
		redo: "重做",
		confirm: "确认",
		clear: "清除"
	},
	Popconfirm: {
		positiveText: "确认",
		negativeText: "取消"
	},
	Cascader: {
		placeholder: "请选择",
		loading: "加载中",
		loadingRequiredMessage: (e) => `加载全部 ${e} 的子节点后才可选中`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy年",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w周",
		clear: "清除",
		now: "此刻",
		confirm: "确认",
		selectTime: "选择时间",
		selectDate: "选择日期",
		datePlaceholder: "选择日期",
		datetimePlaceholder: "选择日期时间",
		monthPlaceholder: "选择月份",
		yearPlaceholder: "选择年份",
		quarterPlaceholder: "选择季度",
		weekPlaceholder: "选择周",
		startDatePlaceholder: "开始日期",
		endDatePlaceholder: "结束日期",
		startDatetimePlaceholder: "开始日期时间",
		endDatetimePlaceholder: "结束日期时间",
		startMonthPlaceholder: "开始月份",
		endMonthPlaceholder: "结束月份",
		monthBeforeYear: !1,
		firstDayOfWeek: 0,
		today: "今天"
	},
	DataTable: {
		checkTableAll: "选择全部表格数据",
		uncheckTableAll: "取消选择全部表格数据",
		confirm: "确认",
		clear: "重置"
	},
	LegacyTransfer: {
		sourceTitle: "源项",
		targetTitle: "目标项"
	},
	Transfer: {
		selectAll: "全选",
		clearAll: "清除",
		unselectAll: "取消全选",
		total: (e) => `共 ${e} 项`,
		selected: (e) => `已选 ${e} 项`
	},
	Empty: { description: "无数据" },
	Select: { placeholder: "请选择" },
	TimePicker: {
		placeholder: "请选择时间",
		positiveText: "确认",
		negativeText: "取消",
		now: "此刻",
		clear: "清除"
	},
	Pagination: {
		goto: "跳至",
		selectionSuffix: "页"
	},
	DynamicTags: { add: "添加" },
	Log: { loading: "加载中" },
	Input: { placeholder: "请输入" },
	InputNumber: { placeholder: "请输入" },
	DynamicInput: { create: "添加" },
	ThemeEditor: {
		title: "主题编辑器",
		clearAllVars: "清除全部变量",
		clearSearch: "清除搜索",
		filterCompName: "过滤组件名",
		filterVarName: "过滤变量名",
		import: "导入",
		export: "导出",
		restore: "恢复默认"
	},
	Image: {
		tipPrevious: "上一张（←）",
		tipNext: "下一张（→）",
		tipCounterclockwise: "向左旋转",
		tipClockwise: "向右旋转",
		tipZoomOut: "缩小",
		tipZoomIn: "放大",
		tipDownload: "下载",
		tipClose: "关闭（Esc）",
		tipOriginalSize: "缩放到原始尺寸"
	},
	Heatmap: {
		less: "少",
		more: "多",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
}, jf = {
	name: "zh-TW",
	global: {
		undo: "復原",
		redo: "重做",
		confirm: "確定",
		clear: "清除"
	},
	Popconfirm: {
		positiveText: "確定",
		negativeText: "取消"
	},
	Cascader: {
		placeholder: "請選擇",
		loading: "載入中",
		loadingRequiredMessage: (e) => `載入全部 ${e} 的子節點後才可選擇`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy 年",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w",
		clear: "清除",
		now: "現在",
		confirm: "確定",
		selectTime: "選擇時間",
		selectDate: "選擇日期",
		datePlaceholder: "選擇日期",
		datetimePlaceholder: "選擇日期時間",
		monthPlaceholder: "選擇月份",
		yearPlaceholder: "選擇年份",
		quarterPlaceholder: "選擇季度",
		weekPlaceholder: "Select Week",
		startDatePlaceholder: "開始日期",
		endDatePlaceholder: "結束日期",
		startDatetimePlaceholder: "開始日期時間",
		endDatetimePlaceholder: "結束日期時間",
		startMonthPlaceholder: "開始月份",
		endMonthPlaceholder: "結束月份",
		monthBeforeYear: !1,
		firstDayOfWeek: 0,
		today: "今天"
	},
	DataTable: {
		checkTableAll: "選擇全部表格資料",
		uncheckTableAll: "取消選擇全部表格資料",
		confirm: "確定",
		clear: "重設"
	},
	LegacyTransfer: {
		sourceTitle: "來源",
		targetTitle: "目標"
	},
	Transfer: {
		selectAll: "全選",
		unselectAll: "取消全選",
		clearAll: "清除全部",
		total: (e) => `共 ${e} 項`,
		selected: (e) => `已選 ${e} 項`
	},
	Empty: { description: "無資料" },
	Select: { placeholder: "請選擇" },
	TimePicker: {
		placeholder: "請選擇時間",
		positiveText: "確定",
		negativeText: "取消",
		now: "現在",
		clear: "清除"
	},
	Pagination: {
		goto: "跳至",
		selectionSuffix: "頁"
	},
	DynamicTags: { add: "新增" },
	Log: { loading: "載入中" },
	Input: { placeholder: "請輸入" },
	InputNumber: { placeholder: "請輸入" },
	DynamicInput: { create: "新增" },
	ThemeEditor: {
		title: "主題編輯器",
		clearAllVars: "清除全部變數",
		clearSearch: "清除搜尋",
		filterCompName: "過濾組件名稱",
		filterVarName: "過濾變數名稱",
		import: "匯入",
		export: "匯出",
		restore: "恢復預設"
	},
	Image: {
		tipPrevious: "上一張（←）",
		tipNext: "下一張（→）",
		tipCounterclockwise: "向左旋轉",
		tipClockwise: "向右旋轉",
		tipZoomOut: "縮小",
		tipZoomIn: "放大",
		tipDownload: "下載",
		tipClose: "關閉（Esc）",
		tipOriginalSize: "縮放到原始尺寸"
	},
	Heatmap: {
		less: "少",
		more: "多",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
};
// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Mf(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Nf(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
// node_modules/date-fns/locale/_lib/buildMatchFn.js
function Pf(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? If(s, (e) => e.test(o)) : Ff(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ff(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function If(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Lf(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Rf = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, zf = (e, t, n) => {
	let r, i = Rf[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Bf = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Vf = (e, t, n, r) => Bf[e], Hf = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Nf({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Nf({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: Nf({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: Nf({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: Nf({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
}, Uf = {
	ordinalNumber: Lf({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: Pf({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: Pf({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (e) => e + 1
	}),
	month: Pf({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: Pf({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: Pf({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
}, Wf = {
	name: "en-US",
	locale: {
		code: "en-US",
		formatDistance: zf,
		formatLong: {
			date: Mf({
				formats: {
					full: "EEEE, MMMM do, y",
					long: "MMMM do, y",
					medium: "MMM d, y",
					short: "MM/dd/yyyy"
				},
				defaultWidth: "full"
			}),
			time: Mf({
				formats: {
					full: "h:mm:ss a zzzz",
					long: "h:mm:ss a z",
					medium: "h:mm:ss a",
					short: "h:mm a"
				},
				defaultWidth: "full"
			}),
			dateTime: Mf({
				formats: {
					full: "{{date}} 'at' {{time}}",
					long: "{{date}} 'at' {{time}}",
					medium: "{{date}}, {{time}}",
					short: "{{date}}, {{time}}"
				},
				defaultWidth: "full"
			})
		},
		formatRelative: Vf,
		localize: Hf,
		match: Uf,
		options: {
			weekStartsOn: 0,
			firstWeekContainsDate: 1
		}
	}
}, Gf = typeof global == "object" && global && global.Object === Object && global, Kf = typeof self == "object" && self && self.Object === Object && self, qf = Gf || Kf || Function("return this")(), Jf = qf.Symbol, Yf = Object.prototype, Xf = Yf.hasOwnProperty, Zf = Yf.toString, Qf = Jf ? Jf.toStringTag : void 0;
function $f(e) {
	var t = Xf.call(e, Qf), n = e[Qf];
	try {
		e[Qf] = void 0;
		var r = !0;
	} catch {}
	var i = Zf.call(e);
	return r && (t ? e[Qf] = n : delete e[Qf]), i;
}
// node_modules/lodash-es/_objectToString.js
var ep = Object.prototype.toString;
function tp(e) {
	return ep.call(e);
}
// node_modules/lodash-es/_baseGetTag.js
var np = "[object Null]", rp = "[object Undefined]", ip = Jf ? Jf.toStringTag : void 0;
function ap(e) {
	return e == null ? e === void 0 ? rp : np : ip && ip in Object(e) ? $f(e) : tp(e);
}
// node_modules/lodash-es/isObjectLike.js
function op(e) {
	return typeof e == "object" && !!e;
}
// node_modules/lodash-es/isSymbol.js
var sp = "[object Symbol]";
function cp(e) {
	return typeof e == "symbol" || op(e) && ap(e) == sp;
}
// node_modules/lodash-es/_arrayMap.js
function lp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
// node_modules/lodash-es/isArray.js
var up = Array.isArray, dp = 1 / 0, fp = Jf ? Jf.prototype : void 0, pp = fp ? fp.toString : void 0;
function mp(e) {
	if (typeof e == "string") return e;
	if (up(e)) return lp(e, mp) + "";
	if (cp(e)) return pp ? pp.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -dp ? "-0" : t;
}
// node_modules/lodash-es/isObject.js
function hp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
// node_modules/lodash-es/identity.js
function gp(e) {
	return e;
}
// node_modules/lodash-es/isFunction.js
var _p = "[object AsyncFunction]", vp = "[object Function]", yp = "[object GeneratorFunction]", bp = "[object Proxy]";
function xp(e) {
	if (!hp(e)) return !1;
	var t = ap(e);
	return t == vp || t == yp || t == _p || t == bp;
}
// node_modules/lodash-es/_coreJsData.js
var Sp = qf["__core-js_shared__"], Cp = function() {
	var e = /[^.]+$/.exec(Sp && Sp.keys && Sp.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function wp(e) {
	return !!Cp && Cp in e;
}
// node_modules/lodash-es/_toSource.js
var Tp = Function.prototype.toString;
function Ep(e) {
	if (e != null) {
		try {
			return Tp.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
// node_modules/lodash-es/_baseIsNative.js
var Dp = /[\\^$.*+?()[\]{}|]/g, Op = /^\[object .+?Constructor\]$/, kp = Function.prototype, Ap = Object.prototype, jp = kp.toString, Mp = Ap.hasOwnProperty, Np = RegExp("^" + jp.call(Mp).replace(Dp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Pp(e) {
	return !hp(e) || wp(e) ? !1 : (xp(e) ? Np : Op).test(Ep(e));
}
// node_modules/lodash-es/_getValue.js
function Fp(e, t) {
	return e?.[t];
}
// node_modules/lodash-es/_getNative.js
function Ip(e, t) {
	var n = Fp(e, t);
	return Pp(n) ? n : void 0;
}
// node_modules/lodash-es/_WeakMap.js
var Lp = Ip(qf, "WeakMap"), Rp = Object.create, zp = function() {
	function e() {}
	return function(t) {
		if (!hp(t)) return {};
		if (Rp) return Rp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
// node_modules/lodash-es/_apply.js
function Bp(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
// node_modules/lodash-es/_copyArray.js
function Vp(e, t) {
	var n = -1, r = e.length;
	for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
	return t;
}
// node_modules/lodash-es/_shortOut.js
var Hp = 800, Up = 16, Wp = Date.now;
function Gp(e) {
	var t = 0, n = 0;
	return function() {
		var r = Wp(), i = Up - (r - n);
		if (n = r, i > 0) {
			if (++t >= Hp) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
// node_modules/lodash-es/constant.js
function Kp(e) {
	return function() {
		return e;
	};
}
// node_modules/lodash-es/_defineProperty.js
var qp = function() {
	try {
		var e = Ip(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Jp = Gp(qp ? function(e, t) {
	return qp(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Kp(t),
		writable: !0
	});
} : gp), Yp = 9007199254740991, Xp = /^(?:0|[1-9]\d*)$/;
function Zp(e, t) {
	var n = typeof e;
	return t = t ?? Yp, !!t && (n == "number" || n != "symbol" && Xp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
// node_modules/lodash-es/_baseAssignValue.js
function Qp(e, t, n) {
	t == "__proto__" && qp ? qp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
// node_modules/lodash-es/eq.js
function $p(e, t) {
	return e === t || e !== e && t !== t;
}
// node_modules/lodash-es/_assignValue.js
var em = Object.prototype.hasOwnProperty;
function tm(e, t, n) {
	var r = e[t];
	(!(em.call(e, t) && $p(r, n)) || n === void 0 && !(t in e)) && Qp(e, t, n);
}
// node_modules/lodash-es/_copyObject.js
function nm(e, t, n, r) {
	var i = !n;
	n || (n = {});
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Qp(n, s, c) : tm(n, s, c);
	}
	return n;
}
// node_modules/lodash-es/_overRest.js
var rm = Math.max;
function im(e, t, n) {
	return t = rm(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = rm(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), Bp(e, this, s);
	};
}
// node_modules/lodash-es/_baseRest.js
function am(e, t) {
	return Jp(im(e, t, gp), e + "");
}
// node_modules/lodash-es/isLength.js
var om = 9007199254740991;
function sm(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= om;
}
// node_modules/lodash-es/isArrayLike.js
function cm(e) {
	return e != null && sm(e.length) && !xp(e);
}
// node_modules/lodash-es/_isIterateeCall.js
function lm(e, t, n) {
	if (!hp(n)) return !1;
	var r = typeof t;
	return (r == "number" ? cm(n) && Zp(t, n.length) : r == "string" && t in n) ? $p(n[t], e) : !1;
}
// node_modules/lodash-es/_createAssigner.js
function um(e) {
	return am(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && lm(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
// node_modules/lodash-es/_isPrototype.js
var dm = Object.prototype;
function fm(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || dm);
}
// node_modules/lodash-es/_baseTimes.js
function pm(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
// node_modules/lodash-es/_baseIsArguments.js
var mm = "[object Arguments]";
function hm(e) {
	return op(e) && ap(e) == mm;
}
// node_modules/lodash-es/isArguments.js
var gm = Object.prototype, _m = gm.hasOwnProperty, vm = gm.propertyIsEnumerable, ym = hm(function() {
	return arguments;
}()) ? hm : function(e) {
	return op(e) && _m.call(e, "callee") && !vm.call(e, "callee");
};
// node_modules/lodash-es/stubFalse.js
function bm() {
	return !1;
}
// node_modules/lodash-es/isBuffer.js
var xm = typeof exports == "object" && exports && !exports.nodeType && exports, Sm = xm && typeof module == "object" && module && !module.nodeType && module, Cm = Sm && Sm.exports === xm ? qf.Buffer : void 0, wm = (Cm ? Cm.isBuffer : void 0) || bm, Tm = "[object Arguments]", Em = "[object Array]", Dm = "[object Boolean]", Om = "[object Date]", km = "[object Error]", Am = "[object Function]", jm = "[object Map]", Mm = "[object Number]", Nm = "[object Object]", Pm = "[object RegExp]", Fm = "[object Set]", Im = "[object String]", Lm = "[object WeakMap]", Rm = "[object ArrayBuffer]", zm = "[object DataView]", Bm = "[object Float32Array]", Vm = "[object Float64Array]", Hm = "[object Int8Array]", Um = "[object Int16Array]", Wm = "[object Int32Array]", Gm = "[object Uint8Array]", Km = "[object Uint8ClampedArray]", qm = "[object Uint16Array]", Jm = "[object Uint32Array]", Ym = {};
Ym[Bm] = Ym[Vm] = Ym[Hm] = Ym[Um] = Ym[Wm] = Ym[Gm] = Ym[Km] = Ym[qm] = Ym[Jm] = !0, Ym[Tm] = Ym[Em] = Ym[Rm] = Ym[Dm] = Ym[zm] = Ym[Om] = Ym[km] = Ym[Am] = Ym[jm] = Ym[Mm] = Ym[Nm] = Ym[Pm] = Ym[Fm] = Ym[Im] = Ym[Lm] = !1;
function Xm(e) {
	return op(e) && sm(e.length) && !!Ym[ap(e)];
}
// node_modules/lodash-es/_baseUnary.js
function Zm(e) {
	return function(t) {
		return e(t);
	};
}
// node_modules/lodash-es/_nodeUtil.js
var Qm = typeof exports == "object" && exports && !exports.nodeType && exports, $m = Qm && typeof module == "object" && module && !module.nodeType && module, eh = $m && $m.exports === Qm && Gf.process, th = function() {
	try {
		return $m && $m.require && $m.require("util").types || eh && eh.binding && eh.binding("util");
	} catch {}
}(), nh = th && th.isTypedArray, rh = nh ? Zm(nh) : Xm, ih = Object.prototype.hasOwnProperty;
function ah(e, t) {
	var n = up(e), r = !n && ym(e), i = !n && !r && wm(e), a = !n && !r && !i && rh(e), o = n || r || i || a, s = o ? pm(e.length, String) : [], c = s.length;
	for (var l in e) (t || ih.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Zp(l, c))) && s.push(l);
	return s;
}
// node_modules/lodash-es/_overArg.js
function oh(e, t) {
	return function(n) {
		return e(t(n));
	};
}
// node_modules/lodash-es/_nativeKeys.js
var sh = oh(Object.keys, Object), ch = Object.prototype.hasOwnProperty;
function lh(e) {
	if (!fm(e)) return sh(e);
	var t = [];
	for (var n in Object(e)) ch.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
// node_modules/lodash-es/keys.js
function uh(e) {
	return cm(e) ? ah(e) : lh(e);
}
// node_modules/lodash-es/_nativeKeysIn.js
function dh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
// node_modules/lodash-es/_baseKeysIn.js
var fh = Object.prototype.hasOwnProperty;
function ph(e) {
	if (!hp(e)) return dh(e);
	var t = fm(e), n = [];
	for (var r in e) (r != "constructor" || !t && fh.call(e, r)) && n.push(r);
	return n;
}
// node_modules/lodash-es/keysIn.js
function mh(e) {
	return cm(e) ? ah(e, !0) : ph(e);
}
// node_modules/lodash-es/_isKey.js
var hh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gh = /^\w*$/;
function _h(e, t) {
	if (up(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || cp(e) ? !0 : gh.test(e) || !hh.test(e) || t != null && e in Object(t);
}
// node_modules/lodash-es/_nativeCreate.js
var vh = Ip(Object, "create");
// node_modules/lodash-es/_hashClear.js
function yh() {
	this.__data__ = vh ? vh(null) : {}, this.size = 0;
}
// node_modules/lodash-es/_hashDelete.js
function bh(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_hashGet.js
var xh = "__lodash_hash_undefined__", Sh = Object.prototype.hasOwnProperty;
function Ch(e) {
	var t = this.__data__;
	if (vh) {
		var n = t[e];
		return n === xh ? void 0 : n;
	}
	return Sh.call(t, e) ? t[e] : void 0;
}
// node_modules/lodash-es/_hashHas.js
var wh = Object.prototype.hasOwnProperty;
function Th(e) {
	var t = this.__data__;
	return vh ? t[e] !== void 0 : wh.call(t, e);
}
// node_modules/lodash-es/_hashSet.js
var Eh = "__lodash_hash_undefined__";
function Dh(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = vh && t === void 0 ? Eh : t, this;
}
// node_modules/lodash-es/_Hash.js
function Oh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Oh.prototype.clear = yh, Oh.prototype.delete = bh, Oh.prototype.get = Ch, Oh.prototype.has = Th, Oh.prototype.set = Dh;
// node_modules/lodash-es/_listCacheClear.js
function kh() {
	this.__data__ = [], this.size = 0;
}
// node_modules/lodash-es/_assocIndexOf.js
function Ah(e, t) {
	for (var n = e.length; n--;) if ($p(e[n][0], t)) return n;
	return -1;
}
// node_modules/lodash-es/_listCacheDelete.js
var jh = Array.prototype.splice;
function Mh(e) {
	var t = this.__data__, n = Ah(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : jh.call(t, n, 1), --this.size, !0);
}
// node_modules/lodash-es/_listCacheGet.js
function Nh(e) {
	var t = this.__data__, n = Ah(t, e);
	return n < 0 ? void 0 : t[n][1];
}
// node_modules/lodash-es/_listCacheHas.js
function Ph(e) {
	return Ah(this.__data__, e) > -1;
}
// node_modules/lodash-es/_listCacheSet.js
function Fh(e, t) {
	var n = this.__data__, r = Ah(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
// node_modules/lodash-es/_ListCache.js
function Ih(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ih.prototype.clear = kh, Ih.prototype.delete = Mh, Ih.prototype.get = Nh, Ih.prototype.has = Ph, Ih.prototype.set = Fh;
// node_modules/lodash-es/_Map.js
var Lh = Ip(qf, "Map");
// node_modules/lodash-es/_mapCacheClear.js
function Rh() {
	this.size = 0, this.__data__ = {
		hash: new Oh(),
		map: new (Lh || Ih)(),
		string: new Oh()
	};
}
// node_modules/lodash-es/_isKeyable.js
function zh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
// node_modules/lodash-es/_getMapData.js
function Bh(e, t) {
	var n = e.__data__;
	return zh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
// node_modules/lodash-es/_mapCacheDelete.js
function Vh(e) {
	var t = Bh(this, e).delete(e);
	return this.size -= +!!t, t;
}
// node_modules/lodash-es/_mapCacheGet.js
function Hh(e) {
	return Bh(this, e).get(e);
}
// node_modules/lodash-es/_mapCacheHas.js
function Uh(e) {
	return Bh(this, e).has(e);
}
// node_modules/lodash-es/_mapCacheSet.js
function Wh(e, t) {
	var n = Bh(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
// node_modules/lodash-es/_MapCache.js
function Gh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Gh.prototype.clear = Rh, Gh.prototype.delete = Vh, Gh.prototype.get = Hh, Gh.prototype.has = Uh, Gh.prototype.set = Wh;
// node_modules/lodash-es/memoize.js
var Kh = "Expected a function";
function qh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Kh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (qh.Cache || Gh)(), n;
}
qh.Cache = Gh;
// node_modules/lodash-es/_memoizeCapped.js
var Jh = 500;
function Yh(e) {
	var t = qh(e, function(e) {
		return n.size === Jh && n.clear(), e;
	}), n = t.cache;
	return t;
}
// node_modules/lodash-es/_stringToPath.js
var Xh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Qh = Yh(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xh, function(e, n, r, i) {
		t.push(r ? i.replace(Zh, "$1") : n || e);
	}), t;
});
// node_modules/lodash-es/toString.js
function $h(e) {
	return e == null ? "" : mp(e);
}
// node_modules/lodash-es/_castPath.js
function eg(e, t) {
	return up(e) ? e : _h(e, t) ? [e] : Qh($h(e));
}
// node_modules/lodash-es/_toKey.js
var tg = 1 / 0;
function ng(e) {
	if (typeof e == "string" || cp(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -tg ? "-0" : t;
}
// node_modules/lodash-es/_baseGet.js
function rg(e, t) {
	t = eg(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[ng(t[n++])];
	return n && n == r ? e : void 0;
}
// node_modules/lodash-es/get.js
function ig(e, t, n) {
	var r = e == null ? void 0 : rg(e, t);
	return r === void 0 ? n : r;
}
// node_modules/lodash-es/_arrayPush.js
function ag(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
// node_modules/lodash-es/_getPrototype.js
var og = oh(Object.getPrototypeOf, Object), sg = "[object Object]", cg = Function.prototype, lg = Object.prototype, ug = cg.toString, dg = lg.hasOwnProperty, fg = ug.call(Object);
function pg(e) {
	if (!op(e) || ap(e) != sg) return !1;
	var t = og(e);
	if (t === null) return !0;
	var n = dg.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && ug.call(n) == fg;
}
// node_modules/lodash-es/_baseSlice.js
function mg(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
// node_modules/lodash-es/_castSlice.js
function hg(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : mg(e, t, n);
}
// node_modules/lodash-es/_hasUnicode.js
var gg = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function _g(e) {
	return gg.test(e);
}
// node_modules/lodash-es/_asciiToArray.js
function vg(e) {
	return e.split("");
}
// node_modules/lodash-es/_unicodeToArray.js
var yg = "\\ud800-\\udfff", bg = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", xg = "\\ufe0e\\ufe0f", Sg = "[" + yg + "]", Cg = "[" + bg + "]", wg = "\\ud83c[\\udffb-\\udfff]", Tg = "(?:" + Cg + "|" + wg + ")", Eg = "[^" + yg + "]", Dg = "(?:\\ud83c[\\udde6-\\uddff]){2}", Og = "[\\ud800-\\udbff][\\udc00-\\udfff]", kg = "\\u200d", Ag = Tg + "?", jg = "[" + xg + "]?", Mg = "(?:" + kg + "(?:" + [
	Eg,
	Dg,
	Og
].join("|") + ")" + jg + Ag + ")*", Ng = jg + Ag + Mg, Pg = "(?:" + [
	Eg + Cg + "?",
	Cg,
	Dg,
	Og,
	Sg
].join("|") + ")", Fg = RegExp(wg + "(?=" + wg + ")|" + Pg + Ng, "g");
function Ig(e) {
	return e.match(Fg) || [];
}
// node_modules/lodash-es/_stringToArray.js
function Lg(e) {
	return _g(e) ? Ig(e) : vg(e);
}
// node_modules/lodash-es/_createCaseFirst.js
function Rg(e) {
	return function(t) {
		t = $h(t);
		var n = _g(t) ? Lg(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? hg(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
// node_modules/lodash-es/upperFirst.js
var zg = Rg("toUpperCase");
// node_modules/lodash-es/_stackClear.js
function Bg() {
	this.__data__ = new Ih(), this.size = 0;
}
// node_modules/lodash-es/_stackDelete.js
function Vg(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
// node_modules/lodash-es/_stackGet.js
function Hg(e) {
	return this.__data__.get(e);
}
// node_modules/lodash-es/_stackHas.js
function Ug(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_stackSet.js
var Wg = 200;
function Gg(e, t) {
	var n = this.__data__;
	if (n instanceof Ih) {
		var r = n.__data__;
		if (!Lh || r.length < Wg - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Gh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
// node_modules/lodash-es/_Stack.js
function Kg(e) {
	var t = this.__data__ = new Ih(e);
	this.size = t.size;
}
Kg.prototype.clear = Bg, Kg.prototype.delete = Vg, Kg.prototype.get = Hg, Kg.prototype.has = Ug, Kg.prototype.set = Gg;
// node_modules/lodash-es/_cloneBuffer.js
var qg = typeof exports == "object" && exports && !exports.nodeType && exports, Jg = qg && typeof module == "object" && module && !module.nodeType && module, Yg = Jg && Jg.exports === qg ? qf.Buffer : void 0, Xg = Yg ? Yg.allocUnsafe : void 0;
function Zg(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Xg ? Xg(n) : new e.constructor(n);
	return e.copy(r), r;
}
// node_modules/lodash-es/_arrayFilter.js
function Qg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
// node_modules/lodash-es/stubArray.js
function $g() {
	return [];
}
// node_modules/lodash-es/_getSymbols.js
var e_ = Object.prototype.propertyIsEnumerable, t_ = Object.getOwnPropertySymbols, n_ = t_ ? function(e) {
	return e == null ? [] : (e = Object(e), Qg(t_(e), function(t) {
		return e_.call(e, t);
	}));
} : $g;
// node_modules/lodash-es/_baseGetAllKeys.js
function r_(e, t, n) {
	var r = t(e);
	return up(e) ? r : ag(r, n(e));
}
// node_modules/lodash-es/_getAllKeys.js
function i_(e) {
	return r_(e, uh, n_);
}
// node_modules/lodash-es/_DataView.js
var a_ = Ip(qf, "DataView"), o_ = Ip(qf, "Promise"), s_ = Ip(qf, "Set"), c_ = "[object Map]", l_ = "[object Object]", u_ = "[object Promise]", d_ = "[object Set]", f_ = "[object WeakMap]", p_ = "[object DataView]", m_ = Ep(a_), h_ = Ep(Lh), g_ = Ep(o_), __ = Ep(s_), v_ = Ep(Lp), y_ = ap;
(a_ && y_(new a_(/* @__PURE__ */ new ArrayBuffer(1))) != p_ || Lh && y_(new Lh()) != c_ || o_ && y_(o_.resolve()) != u_ || s_ && y_(new s_()) != d_ || Lp && y_(new Lp()) != f_) && (y_ = function(e) {
	var t = ap(e), n = t == l_ ? e.constructor : void 0, r = n ? Ep(n) : "";
	if (r) switch (r) {
		case m_: return p_;
		case h_: return c_;
		case g_: return u_;
		case __: return d_;
		case v_: return f_;
	}
	return t;
});
var b_ = y_, x_ = qf.Uint8Array;
// node_modules/lodash-es/_cloneArrayBuffer.js
function S_(e) {
	var t = new e.constructor(e.byteLength);
	return new x_(t).set(new x_(e)), t;
}
// node_modules/lodash-es/_cloneTypedArray.js
function C_(e, t) {
	var n = t ? S_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
// node_modules/lodash-es/_initCloneObject.js
function w_(e) {
	return typeof e.constructor == "function" && !fm(e) ? zp(og(e)) : {};
}
// node_modules/lodash-es/_setCacheAdd.js
var T_ = "__lodash_hash_undefined__";
function E_(e) {
	return this.__data__.set(e, T_), this;
}
// node_modules/lodash-es/_setCacheHas.js
function D_(e) {
	return this.__data__.has(e);
}
// node_modules/lodash-es/_SetCache.js
function O_(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new Gh(); ++t < n;) this.add(e[t]);
}
O_.prototype.add = O_.prototype.push = E_, O_.prototype.has = D_;
// node_modules/lodash-es/_arraySome.js
function k_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
// node_modules/lodash-es/_cacheHas.js
function A_(e, t) {
	return e.has(t);
}
// node_modules/lodash-es/_equalArrays.js
var j_ = 1, M_ = 2;
function N_(e, t, n, r, i, a) {
	var o = n & j_, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & M_ ? new O_() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!k_(t, function(e, t) {
				if (!A_(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
// node_modules/lodash-es/_mapToArray.js
function P_(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
// node_modules/lodash-es/_setToArray.js
function F_(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
// node_modules/lodash-es/_equalByTag.js
var I_ = 1, L_ = 2, R_ = "[object Boolean]", z_ = "[object Date]", B_ = "[object Error]", V_ = "[object Map]", H_ = "[object Number]", U_ = "[object RegExp]", W_ = "[object Set]", G_ = "[object String]", K_ = "[object Symbol]", q_ = "[object ArrayBuffer]", J_ = "[object DataView]", Y_ = Jf ? Jf.prototype : void 0, X_ = Y_ ? Y_.valueOf : void 0;
function Z_(e, t, n, r, i, a, o) {
	switch (n) {
		case J_:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case q_: return !(e.byteLength != t.byteLength || !a(new x_(e), new x_(t)));
		case R_:
		case z_:
		case H_: return $p(+e, +t);
		case B_: return e.name == t.name && e.message == t.message;
		case U_:
		case G_: return e == t + "";
		case V_: var s = P_;
		case W_:
			var c = r & I_;
			if (s || (s = F_), e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= L_, o.set(e, t);
			var u = N_(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case K_: if (X_) return X_.call(e) == X_.call(t);
	}
	return !1;
}
// node_modules/lodash-es/_equalObjects.js
var Q_ = 1, $_ = Object.prototype.hasOwnProperty;
function ev(e, t, n, r, i, a) {
	var o = n & Q_, s = i_(e), c = s.length;
	if (c != i_(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : $_.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m || (m = u == "constructor");
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
// node_modules/lodash-es/_baseIsEqualDeep.js
var tv = 1, nv = "[object Arguments]", rv = "[object Array]", iv = "[object Object]", av = Object.prototype.hasOwnProperty;
function ov(e, t, n, r, i, a) {
	var o = up(e), s = up(t), c = o ? rv : b_(e), l = s ? rv : b_(t);
	c = c == nv ? iv : c, l = l == nv ? iv : l;
	var u = c == iv, d = l == iv, f = c == l;
	if (f && wm(e)) {
		if (!wm(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a || (a = new Kg()), o || rh(e) ? N_(e, t, n, r, i, a) : Z_(e, t, c, n, r, i, a);
	if (!(n & tv)) {
		var p = u && av.call(e, "__wrapped__"), m = d && av.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a || (a = new Kg()), i(h, g, n, r, a);
		}
	}
	return f ? (a || (a = new Kg()), ev(e, t, n, r, i, a)) : !1;
}
// node_modules/lodash-es/_baseIsEqual.js
function sv(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !op(e) && !op(t) ? e !== e && t !== t : ov(e, t, n, r, sv, i);
}
// node_modules/lodash-es/_baseIsMatch.js
var cv = 1, lv = 2;
function uv(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var s = n[i];
		if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < a;) {
		s = n[i];
		var c = s[0], l = e[c], u = s[1];
		if (o && s[2]) {
			if (l === void 0 && !(c in e)) return !1;
		} else {
			var d = new Kg();
			if (r) var f = r(l, u, c, e, t, d);
			if (!(f === void 0 ? sv(u, l, cv | lv, r, d) : f)) return !1;
		}
	}
	return !0;
}
// node_modules/lodash-es/_isStrictComparable.js
function dv(e) {
	return e === e && !hp(e);
}
// node_modules/lodash-es/_getMatchData.js
function fv(e) {
	for (var t = uh(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			dv(i)
		];
	}
	return t;
}
// node_modules/lodash-es/_matchesStrictComparable.js
function pv(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
// node_modules/lodash-es/_baseMatches.js
function mv(e) {
	var t = fv(e);
	return t.length == 1 && t[0][2] ? pv(t[0][0], t[0][1]) : function(n) {
		return n === e || uv(n, e, t);
	};
}
// node_modules/lodash-es/_baseHasIn.js
function hv(e, t) {
	return e != null && t in Object(e);
}
// node_modules/lodash-es/_hasPath.js
function gv(e, t, n) {
	t = eg(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = ng(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && sm(i) && Zp(o, i) && (up(e) || ym(e)));
}
// node_modules/lodash-es/hasIn.js
function _v(e, t) {
	return e != null && gv(e, t, hv);
}
// node_modules/lodash-es/_baseMatchesProperty.js
var vv = 1, yv = 2;
function bv(e, t) {
	return _h(e) && dv(t) ? pv(ng(e), t) : function(n) {
		var r = ig(n, e);
		return r === void 0 && r === t ? _v(n, e) : sv(t, r, vv | yv);
	};
}
// node_modules/lodash-es/_baseProperty.js
function xv(e) {
	return function(t) {
		return t?.[e];
	};
}
// node_modules/lodash-es/_basePropertyDeep.js
function Sv(e) {
	return function(t) {
		return rg(t, e);
	};
}
// node_modules/lodash-es/property.js
function Cv(e) {
	return _h(e) ? xv(ng(e)) : Sv(e);
}
// node_modules/lodash-es/_baseIteratee.js
function wv(e) {
	return typeof e == "function" ? e : e == null ? gp : typeof e == "object" ? up(e) ? bv(e[0], e[1]) : mv(e) : Cv(e);
}
// node_modules/lodash-es/_createBaseFor.js
function Tv(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
// node_modules/lodash-es/_baseFor.js
var Ev = Tv();
// node_modules/lodash-es/_baseForOwn.js
function Dv(e, t) {
	return e && Ev(e, t, uh);
}
// node_modules/lodash-es/_createBaseEach.js
function Ov(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!cm(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
// node_modules/lodash-es/_baseEach.js
var kv = Ov(Dv);
// node_modules/lodash-es/_assignMergeValue.js
function Av(e, t, n) {
	(n !== void 0 && !$p(e[t], n) || n === void 0 && !(t in e)) && Qp(e, t, n);
}
// node_modules/lodash-es/isArrayLikeObject.js
function jv(e) {
	return op(e) && cm(e);
}
// node_modules/lodash-es/_safeGet.js
function Mv(e, t) {
	if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
}
// node_modules/lodash-es/toPlainObject.js
function Nv(e) {
	return nm(e, mh(e));
}
// node_modules/lodash-es/_baseMergeDeep.js
function Pv(e, t, n, r, i, a, o) {
	var s = Mv(e, n), c = Mv(t, n), l = o.get(c);
	if (l) Av(e, n, l);
	else {
		var u = a ? a(s, c, n + "", e, t, o) : void 0, d = u === void 0;
		if (d) {
			var f = up(c), p = !f && wm(c), m = !f && !p && rh(c);
			u = c, f || p || m ? up(s) ? u = s : jv(s) ? u = Vp(s) : p ? (d = !1, u = Zg(c, !0)) : m ? (d = !1, u = C_(c, !0)) : u = [] : pg(c) || ym(c) ? (u = s, ym(s) ? u = Nv(s) : (!hp(s) || xp(s)) && (u = w_(c))) : d = !1;
		}
		d && (o.set(c, u), i(u, c, r, a, o), o.delete(c)), Av(e, n, u);
	}
}
// node_modules/lodash-es/_baseMerge.js
function Fv(e, t, n, r, i) {
	e !== t && Ev(t, function(a, o) {
		if (i || (i = new Kg()), hp(a)) Pv(e, t, o, n, Fv, r, i);
		else {
			var s = r ? r(Mv(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), Av(e, o, s);
		}
	}, mh);
}
// node_modules/lodash-es/_baseMap.js
function Iv(e, t) {
	var n = -1, r = cm(e) ? Array(e.length) : [];
	return kv(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
// node_modules/lodash-es/map.js
function Lv(e, t) {
	return (up(e) ? lp : Iv)(e, wv(t, 3));
}
// node_modules/lodash-es/merge.js
var Rv = um(function(e, t, n) {
	Fv(e, t, n);
});
// node_modules/naive-ui/es/_mixins/use-locale.mjs
function zv(e) {
	let { mergedLocaleRef: t, mergedDateLocaleRef: n } = R(hf, null) || {}, r = V(() => t?.value?.[e] ?? Sf[e]);
	return {
		dateLocaleRef: V(() => n?.value ?? Wf),
		localeRef: r
	};
}
// node_modules/naive-ui/es/_mixins/common.mjs
var Bv = "naive-ui-style";
// node_modules/naive-ui/es/_mixins/use-rtl.mjs
function Vv(e, t, n) {
	if (!t) return;
	let r = au(), i = V(() => {
		let { value: n } = t;
		if (!n) return;
		let r = n[e];
		if (r) return r;
	}), a = R(hf, null), o = () => {
		Un(() => {
			let { value: t } = n, o = `${t}${e}Rtl`;
			if (sc(o, r)) return;
			let { value: s } = i;
			s && s.style.mount({
				id: o,
				head: !0,
				anchorMetaName: Bv,
				props: { bPrefix: t ? `.${t}-` : void 0 },
				ssr: r,
				parent: a?.styleMountTarget
			});
		});
	};
	return r ? o() : Ir(o), i;
}
// node_modules/naive-ui/es/_styles/common/_common.mjs
var Hv = {
	fontFamily: "v-sans, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
	fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
	fontWeight: "400",
	fontWeightStrong: "500",
	cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
	cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
	cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
	borderRadius: "3px",
	borderRadiusSmall: "2px",
	fontSize: "14px",
	fontSizeMini: "12px",
	fontSizeTiny: "12px",
	fontSizeSmall: "14px",
	fontSizeMedium: "14px",
	fontSizeLarge: "15px",
	fontSizeHuge: "16px",
	lineHeight: "1.6",
	heightMini: "16px",
	heightTiny: "22px",
	heightSmall: "28px",
	heightMedium: "34px",
	heightLarge: "40px",
	heightHuge: "46px"
}, { fontSize: Uv, fontFamily: Wv, lineHeight: Gv } = Hv, Kv = U("body", `
 margin: 0;
 font-size: ${Uv};
 font-family: ${Wv};
 line-height: ${Gv};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [U("input", "\n font-family: inherit;\n font-size: inherit;\n ")]);
// node_modules/naive-ui/es/_mixins/use-style.mjs
function qv(e, t, n) {
	if (!t) return;
	let r = au(), i = R(hf, null), a = () => {
		let a = n.value;
		t.mount({
			id: a === void 0 ? e : a + e,
			head: !0,
			anchorMetaName: Bv,
			props: { bPrefix: a ? `.${a}-` : void 0 },
			ssr: r,
			parent: i?.styleMountTarget
		}), i?.preflightStyleDisabled || Kv.mount({
			id: "n-global",
			head: !0,
			anchorMetaName: Bv,
			ssr: r,
			parent: i?.styleMountTarget
		});
	};
	r ? a() : Ir(a);
}
// node_modules/naive-ui/es/_mixins/use-theme.mjs
function Jv(e) {
	return e;
}
function Yv(e, t, n, r, i, a) {
	let o = au(), s = R(hf, null);
	if (n) {
		let e = () => {
			let e = a?.value;
			n.mount({
				id: e === void 0 ? t : e + t,
				head: !0,
				props: { bPrefix: e ? `.${e}-` : void 0 },
				anchorMetaName: Bv,
				ssr: o,
				parent: s?.styleMountTarget
			}), s?.preflightStyleDisabled || Kv.mount({
				id: "n-global",
				head: !0,
				anchorMetaName: Bv,
				ssr: o,
				parent: s?.styleMountTarget
			});
		};
		o ? e() : Ir(e);
	}
	return V(() => {
		let { theme: { common: t, self: n, peers: a = {} } = {}, themeOverrides: o = {}, builtinThemeOverrides: c = {} } = i, { common: l, peers: u } = o, { common: d = void 0, [e]: { common: f = void 0, self: p = void 0, peers: m = {} } = {} } = s?.mergedThemeRef.value || {}, { common: h = void 0, [e]: g = {} } = s?.mergedThemeOverridesRef.value || {}, { common: _, peers: v = {} } = g, y = Rv({}, t || f || d || r.common, h, _, l);
		return {
			common: y,
			self: Rv((n || p || r.self)?.(y), c, g, o),
			peers: Rv({}, r.peers, m, a),
			peerOverrides: Rv({}, c.peers, v, u)
		};
	});
}
Yv.props = {
	theme: Object,
	themeOverrides: Object,
	builtinThemeOverrides: Object
};
// node_modules/naive-ui/es/_internal/icon/src/styles/index.cssr.mjs
var Xv = W("base-icon", "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n", [U("svg", "\n height: 1em;\n width: 1em;\n ")]), Zv = /* @__PURE__ */ z({
	name: "BaseIcon",
	props: {
		role: String,
		ariaLabel: String,
		ariaDisabled: {
			type: Boolean,
			default: void 0
		},
		ariaHidden: {
			type: Boolean,
			default: void 0
		},
		clsPrefix: {
			type: String,
			required: !0
		},
		onClick: Function,
		onMousedown: Function,
		onMouseup: Function
	},
	setup(e) {
		qv("-base-icon", Xv, /* @__PURE__ */ L(e, "clsPrefix"));
	},
	render() {
		return H("i", {
			class: `${this.clsPrefix}-base-icon`,
			onClick: this.onClick,
			onMousedown: this.onMousedown,
			onMouseup: this.onMouseup,
			role: this.role,
			"aria-label": this.ariaLabel,
			"aria-hidden": this.ariaHidden,
			"aria-disabled": this.ariaDisabled
		}, this.$slots);
	}
}), Qv = /* @__PURE__ */ z({
	name: "BaseIconSwitchTransition",
	setup(e, { slots: t }) {
		let n = Sl();
		return () => H(vo, {
			name: "icon-switch-transition",
			appear: n.value
		}, t);
	}
});
// node_modules/naive-ui/es/_internal/icons/replaceable.mjs
function $v(e, t) {
	let n = /* @__PURE__ */ z({ render() {
		return t();
	} });
	return /* @__PURE__ */ z({
		name: zg(e),
		setup() {
			let t = R(hf, null)?.mergedIconsRef;
			return () => {
				let r = t?.value?.[e];
				return r ? r() : H(n, null);
			};
		}
	});
}
// node_modules/naive-ui/es/_internal/icons/Checkmark.mjs
var ey = /* @__PURE__ */ z({
	name: "Checkmark",
	render() {
		return H("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 16 16"
		}, H("g", { fill: "none" }, H("path", {
			d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
			fill: "currentColor"
		})));
	}
}), ty = /* @__PURE__ */ z({
	name: "ChevronDown",
	render() {
		return H("svg", {
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, H("path", {
			d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
			fill: "currentColor"
		}));
	}
}), ny = $v("clear", () => H("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	fill: "none",
	"fill-rule": "evenodd"
}, H("g", {
	fill: "currentColor",
	"fill-rule": "nonzero"
}, H("path", { d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z" }))))), ry = $v("close", () => H("svg", {
	viewBox: "0 0 12 12",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	fill: "none",
	"fill-rule": "evenodd"
}, H("g", {
	fill: "currentColor",
	"fill-rule": "nonzero"
}, H("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), iy = /* @__PURE__ */ z({
	name: "Empty",
	render() {
		return H("svg", {
			viewBox: "0 0 28 28",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, H("path", {
			d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
			fill: "currentColor"
		}), H("path", {
			d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
			fill: "currentColor"
		}));
	}
}), ay = $v("error", () => H("svg", {
	viewBox: "0 0 48 48",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, H("g", { "fill-rule": "nonzero" }, H("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), oy = $v("info", () => H("svg", {
	viewBox: "0 0 28 28",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, H("g", { "fill-rule": "nonzero" }, H("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), sy = $v("success", () => H("svg", {
	viewBox: "0 0 48 48",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, H("g", { "fill-rule": "nonzero" }, H("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), cy = $v("warning", () => H("svg", {
	viewBox: "0 0 24 24",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, H("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, H("g", { "fill-rule": "nonzero" }, H("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: ly } = Hv;
function uy({ originalTransform: e = "", left: t = 0, top: n = 0, transition: r = `all .3s ${ly} !important` } = {}) {
	return [
		U("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
			transform: `${e} scale(0.75)`,
			left: t,
			top: n,
			opacity: 0
		}),
		U("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
			transform: `scale(1) ${e}`,
			left: t,
			top: n,
			opacity: 1
		}),
		U("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
			transformOrigin: "center",
			position: "absolute",
			left: t,
			top: n,
			transition: r
		})
	];
}
// node_modules/naive-ui/es/_internal/clear/src/styles/index.cssr.mjs
var dy = W("base-clear", "\n flex-shrink: 0;\n height: 1em;\n width: 1em;\n position: relative;\n", [U(">", [
	G("clear", "\n font-size: var(--n-clear-size);\n height: 1em;\n width: 1em;\n cursor: pointer;\n color: var(--n-clear-color);\n transition: color .3s var(--n-bezier);\n display: flex;\n ", [U("&:hover", "\n color: var(--n-clear-color-hover)!important;\n "), U("&:active", "\n color: var(--n-clear-color-pressed)!important;\n ")]),
	G("placeholder", "\n display: flex;\n "),
	G("clear, placeholder", "\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ", [uy({
		originalTransform: "translateX(-50%) translateY(-50%)",
		left: "50%",
		top: "50%"
	})])
])]), fy = /* @__PURE__ */ z({
	name: "BaseClear",
	props: {
		clsPrefix: {
			type: String,
			required: !0
		},
		show: Boolean,
		onClear: Function
	},
	setup(e) {
		return qv("-base-clear", dy, /* @__PURE__ */ L(e, "clsPrefix")), { handleMouseDown(e) {
			e.preventDefault();
		} };
	},
	render() {
		let { clsPrefix: e } = this;
		return H("div", { class: `${e}-base-clear` }, H(Qv, null, { default: () => {
			var t;
			return this.show ? H("div", {
				key: "dismiss",
				class: `${e}-base-clear__clear`,
				onClick: this.onClear,
				onMousedown: this.handleMouseDown,
				"data-clear": !0
			}, df(this.$slots.icon, () => [H(Zv, { clsPrefix: e }, { default: () => H(ny, null) })])) : H("div", {
				key: "icon",
				class: `${e}-base-clear__placeholder`
			}, (t = this.$slots).placeholder?.call(t));
		} }));
	}
}), py = W("base-close", "\n display: flex;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n background-color: transparent;\n color: var(--n-close-icon-color);\n border-radius: var(--n-close-border-radius);\n height: var(--n-close-size);\n width: var(--n-close-size);\n font-size: var(--n-close-icon-size);\n outline: none;\n border: none;\n position: relative;\n padding: 0;\n", [
	K("absolute", "\n height: var(--n-close-icon-size);\n width: var(--n-close-icon-size);\n "),
	U("&::before", "\n content: \"\";\n position: absolute;\n width: var(--n-close-size);\n height: var(--n-close-size);\n left: 50%;\n top: 50%;\n transform: translateY(-50%) translateX(-50%);\n transition: inherit;\n border-radius: inherit;\n "),
	pc("disabled", [
		U("&:hover", "\n color: var(--n-close-icon-color-hover);\n "),
		U("&:hover::before", "\n background-color: var(--n-close-color-hover);\n "),
		U("&:focus::before", "\n background-color: var(--n-close-color-hover);\n "),
		U("&:active", "\n color: var(--n-close-icon-color-pressed);\n "),
		U("&:active::before", "\n background-color: var(--n-close-color-pressed);\n ")
	]),
	K("disabled", "\n cursor: not-allowed;\n color: var(--n-close-icon-color-disabled);\n background-color: transparent;\n "),
	K("round", [U("&::before", "\n border-radius: 50%;\n ")])
]), my = /* @__PURE__ */ z({
	name: "BaseClose",
	props: {
		isButtonTag: {
			type: Boolean,
			default: !0
		},
		clsPrefix: {
			type: String,
			required: !0
		},
		disabled: {
			type: Boolean,
			default: void 0
		},
		focusable: {
			type: Boolean,
			default: !0
		},
		round: Boolean,
		onClick: Function,
		absolute: Boolean
	},
	setup(e) {
		return qv("-base-close", py, /* @__PURE__ */ L(e, "clsPrefix")), () => {
			let { clsPrefix: t, disabled: n, absolute: r, round: i, isButtonTag: a } = e;
			return H(a ? "button" : "div", {
				type: a ? "button" : void 0,
				tabindex: n || !e.focusable ? -1 : 0,
				"aria-disabled": n,
				"aria-label": "close",
				role: a ? void 0 : "button",
				disabled: n,
				class: [
					`${t}-base-close`,
					r && `${t}-base-close--absolute`,
					n && `${t}-base-close--disabled`,
					i && `${t}-base-close--round`
				],
				onMousedown: (t) => {
					e.focusable || t.preventDefault();
				},
				onClick: e.onClick
			}, H(Zv, { clsPrefix: t }, { default: () => H(ry, null) }));
		};
	}
}), hy = /* @__PURE__ */ z({
	name: "FadeInExpandTransition",
	props: {
		appear: Boolean,
		group: Boolean,
		mode: String,
		onLeave: Function,
		onAfterLeave: Function,
		onAfterEnter: Function,
		width: Boolean,
		reverse: Boolean
	},
	setup(e, { slots: t }) {
		function n(t) {
			e.width ? t.style.maxWidth = `${t.offsetWidth}px` : t.style.maxHeight = `${t.offsetHeight}px`, t.offsetWidth;
		}
		function r(t) {
			e.width ? t.style.maxWidth = "0" : t.style.maxHeight = "0", t.offsetWidth;
			let { onLeave: n } = e;
			n && n();
		}
		function i(t) {
			e.width ? t.style.maxWidth = "" : t.style.maxHeight = "";
			let { onAfterLeave: n } = e;
			n && n();
		}
		function a(t) {
			if (t.style.transition = "none", e.width) {
				let e = t.offsetWidth;
				t.style.maxWidth = "0", t.offsetWidth, t.style.transition = "", t.style.maxWidth = `${e}px`;
			} else if (e.reverse) t.style.maxHeight = `${t.offsetHeight}px`, t.offsetHeight, t.style.transition = "", t.style.maxHeight = "0";
			else {
				let e = t.offsetHeight;
				t.style.maxHeight = "0", t.offsetWidth, t.style.transition = "", t.style.maxHeight = `${e}px`;
			}
			t.offsetWidth;
		}
		function o(t) {
			var n;
			e.width ? t.style.maxWidth = "" : e.reverse || (t.style.maxHeight = ""), (n = e.onAfterEnter) == null || n.call(e);
		}
		return () => {
			let { group: s, width: c, appear: l, mode: u } = e, d = s ? gs : vo, f = {
				name: c ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
				appear: l,
				onEnter: a,
				onAfterEnter: o,
				onBeforeLeave: n,
				onLeave: r,
				onAfterLeave: i
			};
			return s || (f.mode = u), H(d, f, t);
		};
	}
}), gy = /* @__PURE__ */ z({
	props: {
		onFocus: Function,
		onBlur: Function
	},
	setup(e) {
		return () => H("div", {
			style: "width: 0; height: 0",
			tabindex: 0,
			onFocus: e.onFocus,
			onBlur: e.onBlur
		});
	}
}), _y = U([U("@keyframes rotator", "\n 0% {\n -webkit-transform: rotate(0deg);\n transform: rotate(0deg);\n }\n 100% {\n -webkit-transform: rotate(360deg);\n transform: rotate(360deg);\n }"), W("base-loading", "\n position: relative;\n line-height: 0;\n width: 1em;\n height: 1em;\n ", [
	G("transition-wrapper", "\n position: absolute;\n width: 100%;\n height: 100%;\n ", [uy()]),
	G("placeholder", "\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ", [uy({
		left: "50%",
		top: "50%",
		originalTransform: "translateX(-50%) translateY(-50%)"
	})]),
	G("container", "\n animation: rotator 3s linear infinite both;\n ", [G("icon", "\n height: 1em;\n width: 1em;\n ")])
])]), vy = "1.6s", yy = /* @__PURE__ */ z({
	name: "BaseLoading",
	props: Object.assign({
		clsPrefix: {
			type: String,
			required: !0
		},
		show: {
			type: Boolean,
			default: !0
		}
	}, {
		strokeWidth: {
			type: Number,
			default: 28
		},
		stroke: {
			type: String,
			default: void 0
		},
		scale: {
			type: Number,
			default: 1
		},
		radius: {
			type: Number,
			default: 100
		}
	}),
	setup(e) {
		qv("-base-loading", _y, /* @__PURE__ */ L(e, "clsPrefix"));
	},
	render() {
		let { clsPrefix: e, radius: t, strokeWidth: n, stroke: r, scale: i } = this, a = t / i;
		return H("div", {
			class: `${e}-base-loading`,
			role: "img",
			"aria-label": "loading"
		}, H(Qv, null, { default: () => this.show ? H("div", {
			key: "icon",
			class: `${e}-base-loading__transition-wrapper`
		}, H("div", { class: `${e}-base-loading__container` }, H("svg", {
			class: `${e}-base-loading__icon`,
			viewBox: `0 0 ${2 * a} ${2 * a}`,
			xmlns: "http://www.w3.org/2000/svg",
			style: { color: r }
		}, H("g", null, H("animateTransform", {
			attributeName: "transform",
			type: "rotate",
			values: `0 ${a} ${a};270 ${a} ${a}`,
			begin: "0s",
			dur: vy,
			fill: "freeze",
			repeatCount: "indefinite"
		}), H("circle", {
			class: `${e}-base-loading__icon`,
			fill: "none",
			stroke: "currentColor",
			"stroke-width": n,
			"stroke-linecap": "round",
			cx: a,
			cy: a,
			r: t - n / 2,
			"stroke-dasharray": 5.67 * t,
			"stroke-dashoffset": 18.48 * t
		}, H("animateTransform", {
			attributeName: "transform",
			type: "rotate",
			values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
			begin: "0s",
			dur: vy,
			fill: "freeze",
			repeatCount: "indefinite"
		}), H("animate", {
			attributeName: "stroke-dashoffset",
			values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
			begin: "0s",
			dur: vy,
			fill: "freeze",
			repeatCount: "indefinite"
		})))))) : H("div", {
			key: "placeholder",
			class: `${e}-base-loading__placeholder`
		}, this.$slots) }));
	}
}), { cubicBezierEaseInOut: by } = Hv;
function xy({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: n = "0.2s", enterCubicBezier: r = by, leaveCubicBezier: i = by } = {}) {
	return [
		U(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }),
		U(`&.${e}-transition-leave-active`, { transition: `all ${n} ${i}!important` }),
		U(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }),
		U(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })
	];
}
// node_modules/naive-ui/es/_styles/common/dark.mjs
var X = {
	neutralBase: "#000",
	neutralInvertBase: "#fff",
	neutralTextBase: "#fff",
	neutralPopover: "rgb(72, 72, 78)",
	neutralCard: "rgb(24, 24, 28)",
	neutralModal: "rgb(44, 44, 50)",
	neutralBody: "rgb(16, 16, 20)",
	alpha1: "0.9",
	alpha2: "0.82",
	alpha3: "0.52",
	alpha4: "0.38",
	alpha5: "0.28",
	alphaClose: "0.52",
	alphaDisabled: "0.38",
	alphaDisabledInput: "0.06",
	alphaPending: "0.09",
	alphaTablePending: "0.06",
	alphaTableStriped: "0.05",
	alphaPressed: "0.05",
	alphaAvatar: "0.18",
	alphaRail: "0.2",
	alphaProgressRail: "0.12",
	alphaBorder: "0.24",
	alphaDivider: "0.09",
	alphaInput: "0.1",
	alphaAction: "0.06",
	alphaTab: "0.04",
	alphaScrollbar: "0.2",
	alphaScrollbarHover: "0.3",
	alphaCode: "0.12",
	alphaTag: "0.2",
	primaryHover: "#7fe7c4",
	primaryDefault: "#63e2b7",
	primaryActive: "#5acea7",
	primarySuppl: "rgb(42, 148, 125)",
	infoHover: "#8acbec",
	infoDefault: "#70c0e8",
	infoActive: "#66afd3",
	infoSuppl: "rgb(56, 137, 197)",
	errorHover: "#e98b8b",
	errorDefault: "#e88080",
	errorActive: "#e57272",
	errorSuppl: "rgb(208, 58, 82)",
	warningHover: "#f5d599",
	warningDefault: "#f2c97d",
	warningActive: "#e6c260",
	warningSuppl: "rgb(240, 138, 0)",
	successHover: "#7fe7c4",
	successDefault: "#63e2b7",
	successActive: "#5acea7",
	successSuppl: "rgb(42, 148, 125)"
}, Sy = Yc(X.neutralBase), Cy = Yc(X.neutralInvertBase), wy = `rgba(${Cy.slice(0, 3).join(", ")}, `;
function Z(e) {
	return `${wy + String(e)})`;
}
function Ty(e) {
	let t = Array.from(Cy);
	return t[3] = Number(e), J(Sy, t);
}
var Q = Object.assign(Object.assign({ name: "common" }, Hv), {
	baseColor: X.neutralBase,
	primaryColor: X.primaryDefault,
	primaryColorHover: X.primaryHover,
	primaryColorPressed: X.primaryActive,
	primaryColorSuppl: X.primarySuppl,
	infoColor: X.infoDefault,
	infoColorHover: X.infoHover,
	infoColorPressed: X.infoActive,
	infoColorSuppl: X.infoSuppl,
	successColor: X.successDefault,
	successColorHover: X.successHover,
	successColorPressed: X.successActive,
	successColorSuppl: X.successSuppl,
	warningColor: X.warningDefault,
	warningColorHover: X.warningHover,
	warningColorPressed: X.warningActive,
	warningColorSuppl: X.warningSuppl,
	errorColor: X.errorDefault,
	errorColorHover: X.errorHover,
	errorColorPressed: X.errorActive,
	errorColorSuppl: X.errorSuppl,
	textColorBase: X.neutralTextBase,
	textColor1: Z(X.alpha1),
	textColor2: Z(X.alpha2),
	textColor3: Z(X.alpha3),
	textColorDisabled: Z(X.alpha4),
	placeholderColor: Z(X.alpha4),
	placeholderColorDisabled: Z(X.alpha5),
	iconColor: Z(X.alpha4),
	iconColorDisabled: Z(X.alpha5),
	iconColorHover: Z(Number(X.alpha4) * 1.25),
	iconColorPressed: Z(Number(X.alpha4) * .8),
	opacity1: X.alpha1,
	opacity2: X.alpha2,
	opacity3: X.alpha3,
	opacity4: X.alpha4,
	opacity5: X.alpha5,
	dividerColor: Z(X.alphaDivider),
	borderColor: Z(X.alphaBorder),
	closeIconColorHover: Z(Number(X.alphaClose)),
	closeIconColor: Z(Number(X.alphaClose)),
	closeIconColorPressed: Z(Number(X.alphaClose)),
	closeColorHover: "rgba(255, 255, 255, .12)",
	closeColorPressed: "rgba(255, 255, 255, .08)",
	clearColor: Z(X.alpha4),
	clearColorHover: $c(Z(X.alpha4), { alpha: 1.25 }),
	clearColorPressed: $c(Z(X.alpha4), { alpha: .8 }),
	scrollbarColor: Z(X.alphaScrollbar),
	scrollbarColorHover: Z(X.alphaScrollbarHover),
	scrollbarWidth: "5px",
	scrollbarHeight: "5px",
	scrollbarBorderRadius: "5px",
	progressRailColor: Z(X.alphaProgressRail),
	railColor: Z(X.alphaRail),
	popoverColor: X.neutralPopover,
	tableColor: X.neutralCard,
	cardColor: X.neutralCard,
	modalColor: X.neutralModal,
	bodyColor: X.neutralBody,
	tagColor: Ty(X.alphaTag),
	avatarColor: Z(X.alphaAvatar),
	invertedColor: X.neutralBase,
	inputColor: Z(X.alphaInput),
	codeColor: Z(X.alphaCode),
	tabColor: Z(X.alphaTab),
	actionColor: Z(X.alphaAction),
	tableHeaderColor: Z(X.alphaAction),
	hoverColor: Z(X.alphaPending),
	tableColorHover: Z(X.alphaTablePending),
	tableColorStriped: Z(X.alphaTableStriped),
	pressedColor: Z(X.alphaPressed),
	opacityDisabled: X.alphaDisabled,
	inputColorDisabled: Z(X.alphaDisabledInput),
	buttonColor2: "rgba(255, 255, 255, .08)",
	buttonColor2Hover: "rgba(255, 255, 255, .12)",
	buttonColor2Pressed: "rgba(255, 255, 255, .08)",
	boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
	boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
	boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), $ = {
	neutralBase: "#FFF",
	neutralInvertBase: "#000",
	neutralTextBase: "#000",
	neutralPopover: "#fff",
	neutralCard: "#fff",
	neutralModal: "#fff",
	neutralBody: "#fff",
	alpha1: "0.82",
	alpha2: "0.72",
	alpha3: "0.38",
	alpha4: "0.24",
	alpha5: "0.18",
	alphaClose: "0.6",
	alphaDisabled: "0.5",
	alphaDisabledInput: "0.02",
	alphaPending: "0.05",
	alphaTablePending: "0.02",
	alphaPressed: "0.07",
	alphaAvatar: "0.2",
	alphaRail: "0.14",
	alphaProgressRail: ".08",
	alphaBorder: "0.12",
	alphaDivider: "0.06",
	alphaInput: "0",
	alphaAction: "0.02",
	alphaTab: "0.04",
	alphaScrollbar: "0.25",
	alphaScrollbarHover: "0.4",
	alphaCode: "0.05",
	alphaTag: "0.02",
	primaryHover: "#36ad6a",
	primaryDefault: "#18a058",
	primaryActive: "#0c7a43",
	primarySuppl: "#36ad6a",
	infoHover: "#4098fc",
	infoDefault: "#2080f0",
	infoActive: "#1060c9",
	infoSuppl: "#4098fc",
	errorHover: "#de576d",
	errorDefault: "#d03050",
	errorActive: "#ab1f3f",
	errorSuppl: "#de576d",
	warningHover: "#fcb040",
	warningDefault: "#f0a020",
	warningActive: "#c97c10",
	warningSuppl: "#fcb040",
	successHover: "#36ad6a",
	successDefault: "#18a058",
	successActive: "#0c7a43",
	successSuppl: "#36ad6a"
}, Ey = Yc($.neutralBase), Dy = Yc($.neutralInvertBase), Oy = `rgba(${Dy.slice(0, 3).join(", ")}, `;
function ky(e) {
	return `${Oy + String(e)})`;
}
function Ay(e) {
	let t = Array.from(Dy);
	return t[3] = Number(e), J(Ey, t);
}
var jy = Object.assign(Object.assign({ name: "common" }, Hv), {
	baseColor: $.neutralBase,
	primaryColor: $.primaryDefault,
	primaryColorHover: $.primaryHover,
	primaryColorPressed: $.primaryActive,
	primaryColorSuppl: $.primarySuppl,
	infoColor: $.infoDefault,
	infoColorHover: $.infoHover,
	infoColorPressed: $.infoActive,
	infoColorSuppl: $.infoSuppl,
	successColor: $.successDefault,
	successColorHover: $.successHover,
	successColorPressed: $.successActive,
	successColorSuppl: $.successSuppl,
	warningColor: $.warningDefault,
	warningColorHover: $.warningHover,
	warningColorPressed: $.warningActive,
	warningColorSuppl: $.warningSuppl,
	errorColor: $.errorDefault,
	errorColorHover: $.errorHover,
	errorColorPressed: $.errorActive,
	errorColorSuppl: $.errorSuppl,
	textColorBase: $.neutralTextBase,
	textColor1: "rgb(31, 34, 37)",
	textColor2: "rgb(51, 54, 57)",
	textColor3: "rgb(118, 124, 130)",
	textColorDisabled: Ay($.alpha4),
	placeholderColor: Ay($.alpha4),
	placeholderColorDisabled: Ay($.alpha5),
	iconColor: Ay($.alpha4),
	iconColorHover: $c(Ay($.alpha4), { lightness: .75 }),
	iconColorPressed: $c(Ay($.alpha4), { lightness: .9 }),
	iconColorDisabled: Ay($.alpha5),
	opacity1: $.alpha1,
	opacity2: $.alpha2,
	opacity3: $.alpha3,
	opacity4: $.alpha4,
	opacity5: $.alpha5,
	dividerColor: "rgb(239, 239, 245)",
	borderColor: "rgb(224, 224, 230)",
	closeIconColor: Ay(Number($.alphaClose)),
	closeIconColorHover: Ay(Number($.alphaClose)),
	closeIconColorPressed: Ay(Number($.alphaClose)),
	closeColorHover: "rgba(0, 0, 0, .09)",
	closeColorPressed: "rgba(0, 0, 0, .13)",
	clearColor: Ay($.alpha4),
	clearColorHover: $c(Ay($.alpha4), { lightness: .75 }),
	clearColorPressed: $c(Ay($.alpha4), { lightness: .9 }),
	scrollbarColor: ky($.alphaScrollbar),
	scrollbarColorHover: ky($.alphaScrollbarHover),
	scrollbarWidth: "5px",
	scrollbarHeight: "5px",
	scrollbarBorderRadius: "5px",
	progressRailColor: Ay($.alphaProgressRail),
	railColor: "rgb(219, 219, 223)",
	popoverColor: $.neutralPopover,
	tableColor: $.neutralCard,
	cardColor: $.neutralCard,
	modalColor: $.neutralModal,
	bodyColor: $.neutralBody,
	tagColor: "#eee",
	avatarColor: Ay($.alphaAvatar),
	invertedColor: "rgb(0, 20, 40)",
	inputColor: Ay($.alphaInput),
	codeColor: "rgb(244, 244, 248)",
	tabColor: "rgb(247, 247, 250)",
	actionColor: "rgb(250, 250, 252)",
	tableHeaderColor: "rgb(250, 250, 252)",
	hoverColor: "rgb(243, 243, 245)",
	tableColorHover: "rgba(0, 0, 100, 0.03)",
	tableColorStriped: "rgba(0, 0, 100, 0.02)",
	pressedColor: "rgb(237, 237, 239)",
	opacityDisabled: $.alphaDisabled,
	inputColorDisabled: "rgb(250, 250, 252)",
	buttonColor2: "rgba(46, 51, 56, .05)",
	buttonColor2Hover: "rgba(46, 51, 56, .09)",
	buttonColor2Pressed: "rgba(46, 51, 56, .13)",
	boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
	boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
	boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), My = {
	railInsetHorizontalBottom: "auto 2px 4px 2px",
	railInsetHorizontalTop: "4px 2px auto 2px",
	railInsetVerticalRight: "2px 4px 2px auto",
	railInsetVerticalLeft: "2px auto 2px 4px",
	railColor: "transparent"
};
// node_modules/naive-ui/es/_internal/scrollbar/styles/light.mjs
function Ny(e) {
	let { scrollbarColor: t, scrollbarColorHover: n, scrollbarHeight: r, scrollbarWidth: i, scrollbarBorderRadius: a } = e;
	return Object.assign(Object.assign({}, My), {
		height: r,
		width: i,
		borderRadius: a,
		color: t,
		colorHover: n
	});
}
var Py = {
	name: "Scrollbar",
	common: jy,
	self: Ny
}, Fy = {
	name: "Scrollbar",
	common: Q,
	self: Ny
}, Iy = {
	name: "Scrollbar",
	style: W("scrollbar", [K("rtl", "\n direction: rtl;\n ", [U(">", [W("scrollbar-rail", [K("horizontal", [U(">", [G("scrollbar", "\n left: 0;\n right: unset;\n ")])])])])])])
}, Ly = W("scrollbar", "\n overflow: hidden;\n position: relative;\n z-index: auto;\n height: 100%;\n width: 100%;\n", [U(">", [W("scrollbar-container", "\n width: 100%;\n overflow: scroll;\n height: 100%;\n min-height: inherit;\n max-height: inherit;\n scrollbar-width: none;\n ", [U("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", "\n width: 0;\n height: 0;\n display: none;\n "), U(">", [W("scrollbar-content", "\n box-sizing: border-box;\n min-width: 100%;\n ")])])]), U(">, +", [W("scrollbar-rail", "\n position: absolute;\n pointer-events: none;\n user-select: none;\n background: var(--n-scrollbar-rail-color);\n -webkit-user-select: none;\n ", [
	K("horizontal", "\n height: var(--n-scrollbar-height);\n ", [U(">", [G("scrollbar", "\n height: var(--n-scrollbar-height);\n border-radius: var(--n-scrollbar-border-radius);\n right: 0;\n ")])]),
	K("horizontal--top", "\n top: var(--n-scrollbar-rail-top-horizontal-top); \n right: var(--n-scrollbar-rail-right-horizontal-top); \n bottom: var(--n-scrollbar-rail-bottom-horizontal-top); \n left: var(--n-scrollbar-rail-left-horizontal-top); \n "),
	K("horizontal--bottom", "\n top: var(--n-scrollbar-rail-top-horizontal-bottom); \n right: var(--n-scrollbar-rail-right-horizontal-bottom); \n bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); \n left: var(--n-scrollbar-rail-left-horizontal-bottom); \n "),
	K("vertical", "\n width: var(--n-scrollbar-width);\n ", [U(">", [G("scrollbar", "\n width: var(--n-scrollbar-width);\n border-radius: var(--n-scrollbar-border-radius);\n bottom: 0;\n ")])]),
	K("vertical--left", "\n top: var(--n-scrollbar-rail-top-vertical-left); \n right: var(--n-scrollbar-rail-right-vertical-left); \n bottom: var(--n-scrollbar-rail-bottom-vertical-left); \n left: var(--n-scrollbar-rail-left-vertical-left); \n "),
	K("vertical--right", "\n top: var(--n-scrollbar-rail-top-vertical-right); \n right: var(--n-scrollbar-rail-right-vertical-right); \n bottom: var(--n-scrollbar-rail-bottom-vertical-right); \n left: var(--n-scrollbar-rail-left-vertical-right); \n "),
	K("disabled", [U(">", [G("scrollbar", "pointer-events: none;")])]),
	U(">", [G("scrollbar", "\n z-index: 1;\n position: absolute;\n cursor: pointer;\n pointer-events: all;\n background-color: var(--n-scrollbar-color);\n transition: background-color .2s var(--n-scrollbar-bezier);\n ", [xy(), U("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])
])])]), Ry = /* @__PURE__ */ z({
	name: "Scrollbar",
	props: Object.assign(Object.assign({}, Yv.props), {
		duration: {
			type: Number,
			default: 0
		},
		scrollable: {
			type: Boolean,
			default: !0
		},
		xScrollable: Boolean,
		trigger: {
			type: String,
			default: "hover"
		},
		useUnifiedContainer: Boolean,
		triggerDisplayManually: Boolean,
		container: Function,
		content: Function,
		containerClass: String,
		containerStyle: [String, Object],
		contentClass: [String, Array],
		contentStyle: [String, Object],
		horizontalRailStyle: [String, Object],
		verticalRailStyle: [String, Object],
		onScroll: Function,
		onWheel: Function,
		onResize: Function,
		internalOnUpdateScrollLeft: Function,
		internalHoistYRail: Boolean,
		internalExposeWidthCssVar: Boolean,
		yPlacement: {
			type: String,
			default: "right"
		},
		xPlacement: {
			type: String,
			default: "bottom"
		}
	}),
	inheritAttrs: !1,
	setup(e) {
		let { mergedClsPrefixRef: t, inlineThemeDisabled: n, mergedRtlRef: r } = gf(e), i = Vv("Scrollbar", r, t), a = /* @__PURE__ */ I(null), o = /* @__PURE__ */ I(null), s = /* @__PURE__ */ I(null), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I(null), u = /* @__PURE__ */ I(null), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(null), m = /* @__PURE__ */ I(null), h = /* @__PURE__ */ I(null), g = /* @__PURE__ */ I(0), _ = /* @__PURE__ */ I(0), v = /* @__PURE__ */ I(!1), y = /* @__PURE__ */ I(!1), b = !1, x = !1, S, C, w = 0, T = 0, E = 0, D = 0, O = Tl(), k = Yv("Scrollbar", "-scrollbar", Ly, Py, e, t), A = V(() => {
			let { value: e } = f, { value: t } = u, { value: n } = m;
			return e === null || t === null || n === null ? 0 : Math.min(e, n * e / t + Cc(k.value.self.width) * 1.5);
		}), ee = V(() => `${A.value}px`), j = V(() => {
			let { value: e } = p, { value: t } = d, { value: n } = h;
			return e === null || t === null || n === null ? 0 : n * e / t + Cc(k.value.self.height) * 1.5;
		}), te = V(() => `${j.value}px`), ne = V(() => {
			let { value: e } = f, { value: t } = g, { value: n } = u, { value: r } = m;
			if (e === null || n === null || r === null) return 0;
			{
				let i = n - e;
				return i ? t / i * (r - A.value) : 0;
			}
		}), M = V(() => `${ne.value}px`), re = V(() => {
			let { value: e } = p, { value: t } = _, { value: n } = d, { value: r } = h;
			if (e === null || n === null || r === null) return 0;
			{
				let i = n - e;
				return i ? t / i * (r - j.value) : 0;
			}
		}), ie = V(() => `${re.value}px`), ae = V(() => {
			let { value: e } = f, { value: t } = u;
			return e !== null && t !== null && t > e;
		}), oe = V(() => {
			let { value: e } = p, { value: t } = d;
			return e !== null && t !== null && t > e;
		}), se = V(() => {
			let { trigger: t } = e;
			return t === "none" || v.value;
		}), ce = V(() => {
			let { trigger: t } = e;
			return t === "none" || y.value;
		}), le = V(() => {
			let { container: t } = e;
			return t ? t() : o.value;
		}), ue = V(() => {
			let { content: t } = e;
			return t ? t() : s.value;
		}), de = (t, n) => {
			if (!e.scrollable) return;
			if (typeof t == "number") {
				ge(t, n ?? 0, 0, !1, "auto");
				return;
			}
			let { left: r, top: i, index: a, elSize: o, position: s, behavior: c, el: l, debounce: u = !0 } = t;
			(r !== void 0 || i !== void 0) && ge(r ?? 0, i ?? 0, 0, !1, c), l === void 0 ? a !== void 0 && o !== void 0 ? ge(0, a * o, o, u, c) : s === "bottom" ? ge(0, 2 ** 53 - 1, 0, !1, c) : s === "top" && ge(0, 0, 0, !1, c) : ge(0, l.offsetTop, l.offsetHeight, u, c);
		}, fe = Fl(() => {
			e.container || de({
				top: g.value,
				left: _.value
			});
		}), pe = () => {
			fe.isDeactivated || Ee();
		}, me = (t) => {
			if (fe.isDeactivated) return;
			let { onResize: n } = e;
			n && n(t), Ee();
		}, he = (t, n) => {
			if (!e.scrollable) return;
			let { value: r } = le;
			r && (typeof t == "object" ? r.scrollBy(t) : r.scrollBy(t, n || 0));
		};
		function ge(e, t, n, r, i) {
			let { value: a } = le;
			if (a) {
				if (r) {
					let { scrollTop: r, offsetHeight: o } = a;
					if (t > r) {
						t + n <= r + o || a.scrollTo({
							left: e,
							top: t + n - o,
							behavior: i
						});
						return;
					}
				}
				a.scrollTo({
					left: e,
					top: t,
					behavior: i
				});
			}
		}
		function _e() {
			xe(), Se(), Ee();
		}
		function ve() {
			ye();
		}
		function ye() {
			be(), N();
		}
		function be() {
			C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
				y.value = !1;
			}, e.duration);
		}
		function N() {
			S !== void 0 && window.clearTimeout(S), S = window.setTimeout(() => {
				v.value = !1;
			}, e.duration);
		}
		function xe() {
			S !== void 0 && window.clearTimeout(S), v.value = !0;
		}
		function Se() {
			C !== void 0 && window.clearTimeout(C), y.value = !0;
		}
		function Ce(t) {
			let { onScroll: n } = e;
			n && n(t), we();
		}
		function we() {
			let { value: e } = le;
			e && (g.value = e.scrollTop, _.value = e.scrollLeft * (i?.value ? -1 : 1));
		}
		function Te() {
			let { value: e } = ue;
			e && (u.value = e.offsetHeight, d.value = e.offsetWidth);
			let { value: t } = le;
			t && (f.value = t.offsetHeight, p.value = t.offsetWidth);
			let { value: n } = l, { value: r } = c;
			n && (h.value = n.offsetWidth), r && (m.value = r.offsetHeight);
		}
		function P() {
			let { value: e } = le;
			e && (g.value = e.scrollTop, _.value = e.scrollLeft * (i?.value ? -1 : 1), f.value = e.offsetHeight, p.value = e.offsetWidth, u.value = e.scrollHeight, d.value = e.scrollWidth);
			let { value: t } = l, { value: n } = c;
			t && (h.value = t.offsetWidth), n && (m.value = n.offsetHeight);
		}
		function Ee() {
			e.scrollable && (e.useUnifiedContainer ? P() : (Te(), we()));
		}
		function De(e) {
			return !a.value?.contains(Sc(e));
		}
		function Oe(e) {
			e.preventDefault(), e.stopPropagation(), x = !0, ml("mousemove", window, ke, !0), ml("mouseup", window, Ae, !0), T = _.value, E = i?.value ? window.innerWidth - e.clientX : e.clientX;
		}
		function ke(t) {
			if (!x) return;
			S !== void 0 && window.clearTimeout(S), C !== void 0 && window.clearTimeout(C);
			let { value: n } = p, { value: r } = d, { value: a } = j;
			if (n === null || r === null) return;
			let o = (i?.value ? window.innerWidth - t.clientX - E : t.clientX - E) * (r - n) / (n - a), s = r - n, c = T + o;
			c = Math.min(s, c), c = Math.max(c, 0);
			let { value: l } = le;
			if (l) {
				l.scrollLeft = c * (i?.value ? -1 : 1);
				let { internalOnUpdateScrollLeft: t } = e;
				t && t(c);
			}
		}
		function Ae(e) {
			e.preventDefault(), e.stopPropagation(), hl("mousemove", window, ke, !0), hl("mouseup", window, Ae, !0), x = !1, Ee(), De(e) && ye();
		}
		function je(e) {
			e.preventDefault(), e.stopPropagation(), b = !0, ml("mousemove", window, Me, !0), ml("mouseup", window, Ne, !0), w = g.value, D = e.clientY;
		}
		function Me(e) {
			if (!b) return;
			S !== void 0 && window.clearTimeout(S), C !== void 0 && window.clearTimeout(C);
			let { value: t } = f, { value: n } = u, { value: r } = A;
			if (t === null || n === null) return;
			let i = (e.clientY - D) * (n - t) / (t - r), a = n - t, o = w + i;
			o = Math.min(a, o), o = Math.max(o, 0);
			let { value: s } = le;
			s && (s.scrollTop = o);
		}
		function Ne(e) {
			e.preventDefault(), e.stopPropagation(), hl("mousemove", window, Me, !0), hl("mouseup", window, Ne, !0), b = !1, Ee(), De(e) && ye();
		}
		Un(() => {
			let { value: e } = oe, { value: n } = ae, { value: r } = t, { value: i } = l, { value: a } = c;
			i && (e ? i.classList.remove(`${r}-scrollbar-rail--disabled`) : i.classList.add(`${r}-scrollbar-rail--disabled`)), a && (n ? a.classList.remove(`${r}-scrollbar-rail--disabled`) : a.classList.add(`${r}-scrollbar-rail--disabled`));
		}), Lr(() => {
			e.container || Ee();
		}), Br(() => {
			S !== void 0 && window.clearTimeout(S), C !== void 0 && window.clearTimeout(C), hl("mousemove", window, Me, !0), hl("mouseup", window, Ne, !0);
		});
		let Pe = V(() => {
			let { common: { cubicBezierEaseInOut: e }, self: { color: t, colorHover: n, height: r, width: a, borderRadius: o, railInsetHorizontalTop: s, railInsetHorizontalBottom: c, railInsetVerticalRight: l, railInsetVerticalLeft: u, railColor: d } } = k.value, { top: f, right: p, bottom: m, left: h } = Tc(s), { top: g, right: _, bottom: v, left: y } = Tc(c), { top: b, right: x, bottom: S, left: C } = Tc(i?.value ? qd(l) : l), { top: w, right: T, bottom: E, left: D } = Tc(i?.value ? qd(u) : u);
			return {
				"--n-scrollbar-bezier": e,
				"--n-scrollbar-color": t,
				"--n-scrollbar-color-hover": n,
				"--n-scrollbar-border-radius": o,
				"--n-scrollbar-width": a,
				"--n-scrollbar-height": r,
				"--n-scrollbar-rail-top-horizontal-top": f,
				"--n-scrollbar-rail-right-horizontal-top": p,
				"--n-scrollbar-rail-bottom-horizontal-top": m,
				"--n-scrollbar-rail-left-horizontal-top": h,
				"--n-scrollbar-rail-top-horizontal-bottom": g,
				"--n-scrollbar-rail-right-horizontal-bottom": _,
				"--n-scrollbar-rail-bottom-horizontal-bottom": v,
				"--n-scrollbar-rail-left-horizontal-bottom": y,
				"--n-scrollbar-rail-top-vertical-right": b,
				"--n-scrollbar-rail-right-vertical-right": x,
				"--n-scrollbar-rail-bottom-vertical-right": S,
				"--n-scrollbar-rail-left-vertical-right": C,
				"--n-scrollbar-rail-top-vertical-left": w,
				"--n-scrollbar-rail-right-vertical-left": T,
				"--n-scrollbar-rail-bottom-vertical-left": E,
				"--n-scrollbar-rail-left-vertical-left": D,
				"--n-scrollbar-rail-color": d
			};
		}), Fe = n ? _f("scrollbar", void 0, Pe, e) : void 0;
		return Object.assign(Object.assign({}, {
			scrollTo: de,
			scrollBy: he,
			sync: Ee,
			syncUnifiedContainer: P,
			handleMouseEnterWrapper: _e,
			handleMouseLeaveWrapper: ve
		}), {
			mergedClsPrefix: t,
			rtlEnabled: i,
			containerScrollTop: g,
			wrapperRef: a,
			containerRef: o,
			contentRef: s,
			yRailRef: c,
			xRailRef: l,
			needYBar: ae,
			needXBar: oe,
			yBarSizePx: ee,
			xBarSizePx: te,
			yBarTopPx: M,
			xBarLeftPx: ie,
			isShowXBar: se,
			isShowYBar: ce,
			isIos: O,
			handleScroll: Ce,
			handleContentResize: pe,
			handleContainerResize: me,
			handleYScrollMouseDown: je,
			handleXScrollMouseDown: Oe,
			containerWidth: p,
			cssVars: n ? void 0 : Pe,
			themeClass: Fe?.themeClass,
			onRender: Fe?.onRender
		});
	},
	render() {
		let { $slots: e, mergedClsPrefix: t, triggerDisplayManually: n, rtlEnabled: r, internalHoistYRail: i, yPlacement: a, xPlacement: o, xScrollable: s } = this;
		if (!this.scrollable) return e.default?.call(e);
		let c = this.trigger === "none", l = (e, n) => H("div", {
			ref: "yRailRef",
			class: [
				`${t}-scrollbar-rail`,
				`${t}-scrollbar-rail--vertical`,
				`${t}-scrollbar-rail--vertical--${a}`,
				e
			],
			"data-scrollbar-rail": !0,
			style: [n || "", this.verticalRailStyle],
			"aria-hidden": !0
		}, H(c ? mf : vo, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? H("div", {
			class: `${t}-scrollbar-rail__scrollbar`,
			style: {
				height: this.yBarSizePx,
				top: this.yBarTopPx
			},
			onMousedown: this.handleYScrollMouseDown
		}) : null })), u = () => {
			var a;
			return (a = this.onRender) == null || a.call(this), H("div", Fa(this.$attrs, {
				role: "none",
				ref: "wrapperRef",
				class: [
					`${t}-scrollbar`,
					this.themeClass,
					r && `${t}-scrollbar--rtl`
				],
				style: this.cssVars,
				onMouseenter: n ? void 0 : this.handleMouseEnterWrapper,
				onMouseleave: n ? void 0 : this.handleMouseLeaveWrapper
			}), [
				this.container ? e.default?.call(e) : H("div", {
					role: "none",
					ref: "containerRef",
					class: [`${t}-scrollbar-container`, this.containerClass],
					style: [this.containerStyle, this.internalExposeWidthCssVar ? { "--n-scrollbar-current-width": wc(this.containerWidth) } : void 0],
					onScroll: this.handleScroll,
					onWheel: this.onWheel
				}, H(Sd, { onResize: this.handleContentResize }, { default: () => H("div", {
					ref: "contentRef",
					role: "none",
					style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle],
					class: [`${t}-scrollbar-content`, this.contentClass]
				}, e) })),
				i ? null : l(void 0, void 0),
				s && H("div", {
					ref: "xRailRef",
					class: [
						`${t}-scrollbar-rail`,
						`${t}-scrollbar-rail--horizontal`,
						`${t}-scrollbar-rail--horizontal--${o}`
					],
					style: this.horizontalRailStyle,
					"data-scrollbar-rail": !0,
					"aria-hidden": !0
				}, H(c ? mf : vo, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? H("div", {
					class: `${t}-scrollbar-rail__scrollbar`,
					style: {
						width: this.xBarSizePx,
						right: r ? this.xBarLeftPx : void 0,
						left: r ? void 0 : this.xBarLeftPx
					},
					onMousedown: this.handleXScrollMouseDown
				}) : null }))
			]);
		}, d = this.container ? u() : H(Sd, { onResize: this.handleContainerResize }, { default: u });
		return i ? H(la, null, d, l(this.themeClass, this.cssVars)) : d;
	}
}), zy = Ry;
// node_modules/treemate/es/utils.js
function By(e) {
	return Array.isArray(e) ? e : [e];
}
var Vy = { STOP: "STOP" };
function Hy(e, t) {
	let n = t(e);
	e.children !== void 0 && n !== Vy.STOP && e.children.forEach((e) => Hy(e, t));
}
function Uy(e, t = {}) {
	let { preserveGroup: n = !1 } = t, r = [], i = n ? (e) => {
		e.isLeaf || (r.push(e.key), a(e.children));
	} : (e) => {
		e.isLeaf || (e.isGroup || r.push(e.key), a(e.children));
	};
	function a(e) {
		e.forEach(i);
	}
	return a(e), r;
}
function Wy(e, t) {
	let { isLeaf: n } = e;
	return n === void 0 ? !t(e) : n;
}
function Gy(e) {
	return e.children;
}
function Ky(e) {
	return e.key;
}
function qy() {
	return !1;
}
function Jy(e, t) {
	let { isLeaf: n } = e;
	return !(n === !1 && !Array.isArray(t(e)));
}
function Yy(e) {
	return e.disabled === !0;
}
function Xy(e, t) {
	return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Zy(e) {
	return e == null ? [] : Array.isArray(e) ? e : e.checkedKeys ?? [];
}
function Qy(e) {
	return e == null || Array.isArray(e) ? [] : e.indeterminateKeys ?? [];
}
function $y(e, t) {
	let n = new Set(e);
	return t.forEach((e) => {
		n.has(e) || n.add(e);
	}), Array.from(n);
}
function eb(e, t) {
	let n = new Set(e);
	return t.forEach((e) => {
		n.has(e) && n.delete(e);
	}), Array.from(n);
}
function tb(e) {
	return e?.type === "group";
}
function nb(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.set(e.key, n);
	}), (e) => t.get(e) ?? null;
}
// node_modules/treemate/es/check.js
var rb = class extends Error {
	constructor() {
		super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
	}
};
function ib(e, t, n, r) {
	return cb(t.concat(e), n, r, !1);
}
function ab(e, t) {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		let r = t.treeNodeMap.get(e);
		if (r !== void 0) {
			let e = r.parent;
			for (; e !== null && !(e.disabled || n.has(e.key));) n.add(e.key), e = e.parent;
		}
	}), n;
}
function ob(e, t, n, r) {
	let i = cb(t, n, r, !1), a = cb(e, n, r, !0), o = ab(e, n), s = [];
	return i.forEach((e) => {
		(a.has(e) || o.has(e)) && s.push(e);
	}), s.forEach((e) => i.delete(e)), i;
}
function sb(e, t) {
	let { checkedKeys: n, keysToCheck: r, keysToUncheck: i, indeterminateKeys: a, cascade: o, leafOnly: s, checkStrategy: c, allowNotLoaded: l } = e;
	if (!o) return r === void 0 ? i === void 0 ? {
		checkedKeys: Array.from(n),
		indeterminateKeys: Array.from(a)
	} : {
		checkedKeys: eb(n, i),
		indeterminateKeys: Array.from(a)
	} : {
		checkedKeys: $y(n, r),
		indeterminateKeys: Array.from(a)
	};
	let { levelTreeNodeMap: u } = t, d;
	d = i === void 0 ? r === void 0 ? cb(n, t, l, !1) : ib(r, n, t, l) : ob(i, n, t, l);
	let f = c === "parent", p = c === "child" || s, m = d, h = /* @__PURE__ */ new Set(), g = Math.max.apply(null, Array.from(u.keys()));
	for (let e = g; e >= 0; --e) {
		let t = e === 0, n = u.get(e);
		for (let e of n) {
			if (e.isLeaf) continue;
			let { key: n, shallowLoaded: r } = e;
			if (p && r && e.children.forEach((e) => {
				!e.disabled && !e.isLeaf && e.shallowLoaded && m.has(e.key) && m.delete(e.key);
			}), e.disabled || !r) continue;
			let i = !0, a = !1, o = !0;
			for (let t of e.children) {
				let e = t.key;
				if (!t.disabled) {
					if (o && (o = !1), m.has(e)) a = !0;
					else if (h.has(e)) {
						a = !0, i = !1;
						break;
					} else if (i = !1, a) break;
				}
			}
			i && !o ? (f && e.children.forEach((e) => {
				!e.disabled && m.has(e.key) && m.delete(e.key);
			}), m.add(n)) : a && h.add(n), t && p && m.has(n) && m.delete(n);
		}
	}
	return {
		checkedKeys: Array.from(m),
		indeterminateKeys: Array.from(h)
	};
}
function cb(e, t, n, r) {
	let { treeNodeMap: i, getChildren: a } = t, o = /* @__PURE__ */ new Set(), s = new Set(e);
	return e.forEach((e) => {
		let t = i.get(e);
		t !== void 0 && Hy(t, (e) => {
			if (e.disabled) return Vy.STOP;
			let { key: t } = e;
			if (!o.has(t) && (o.add(t), s.add(t), Xy(e.rawNode, a))) {
				if (r) return Vy.STOP;
				if (!n) throw new rb();
			}
		});
	}), s;
}
// node_modules/treemate/es/path.js
function lb(e, { includeGroup: t = !1, includeSelf: n = !0 }, r) {
	let i = r.treeNodeMap, a = e == null ? null : i.get(e) ?? null, o = {
		keyPath: [],
		treeNodePath: [],
		treeNode: a
	};
	if (a?.ignored) return o.treeNode = null, o;
	for (; a;) a.ignored || !t && a.isGroup || o.treeNodePath.push(a), a = a.parent;
	return o.treeNodePath.reverse(), n || o.treeNodePath.pop(), o.keyPath = o.treeNodePath.map((e) => e.key), o;
}
// node_modules/treemate/es/move.js
function ub(e) {
	if (e.length === 0) return null;
	let t = e[0];
	return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function db(e, t) {
	let n = e.siblings, r = n.length, { index: i } = e;
	return t ? n[(i + 1) % r] : i === n.length - 1 ? null : n[i + 1];
}
function fb(e, t, { loop: n = !1, includeDisabled: r = !1 } = {}) {
	let i = t === "prev" ? pb : db, a = { reverse: t === "prev" }, o = !1, s = null;
	function c(t) {
		if (t !== null) {
			if (t === e) {
				if (!o) o = !0;
				else if (!e.disabled && !e.isGroup) {
					s = e;
					return;
				}
			} else if ((!t.disabled || r) && !t.ignored && !t.isGroup) {
				s = t;
				return;
			}
			if (t.isGroup) {
				let e = hb(t, a);
				e === null ? c(i(t, n)) : s = e;
			} else {
				let e = i(t, !1);
				if (e !== null) c(e);
				else {
					let e = mb(t);
					e?.isGroup ? c(i(e, n)) : n && c(i(t, !0));
				}
			}
		}
	}
	return c(e), s;
}
function pb(e, t) {
	let n = e.siblings, r = n.length, { index: i } = e;
	return t ? n[(i - 1 + r) % r] : i === 0 ? null : n[i - 1];
}
function mb(e) {
	return e.parent;
}
function hb(e, t = {}) {
	let { reverse: n = !1 } = t, { children: r } = e;
	if (r) {
		let { length: e } = r, i = n ? e - 1 : 0, a = n ? -1 : e, o = n ? -1 : 1;
		for (let e = i; e !== a; e += o) {
			let n = r[e];
			if (!n.disabled && !n.ignored) {
				if (n.isGroup) {
					let e = hb(n, t);
					if (e !== null) return e;
				} else return n;
			}
		}
	}
	return null;
}
var gb = {
	getChild() {
		return this.ignored ? null : hb(this);
	},
	getParent() {
		let { parent: e } = this;
		return e?.isGroup ? e.getParent() : e;
	},
	getNext(e = {}) {
		return fb(this, "next", e);
	},
	getPrev(e = {}) {
		return fb(this, "prev", e);
	}
};
// node_modules/treemate/es/flatten.js
function _b(e, t) {
	let n = t ? new Set(t) : void 0, r = [];
	function i(e) {
		e.forEach((e) => {
			r.push(e), e.isLeaf || !e.children || e.ignored || (e.isGroup || n === void 0 || n.has(e.key)) && i(e.children);
		});
	}
	return i(e), r;
}
// node_modules/treemate/es/contains.js
function vb(e, t) {
	let n = e.key;
	for (; t;) {
		if (t.key === n) return !0;
		t = t.parent;
	}
	return !1;
}
// node_modules/treemate/es/create.js
function yb(e, t, n, r, i, a = null, o = 0) {
	let s = [];
	return e.forEach((c, l) => {
		var u;
		let d = Object.create(r);
		if (d.rawNode = c, d.siblings = s, d.level = o, d.index = l, d.isFirstChild = l === 0, d.isLastChild = l + 1 === e.length, d.parent = a, !d.ignored) {
			let e = i(c);
			Array.isArray(e) && (d.children = yb(e, t, n, r, i, d, o + 1));
		}
		s.push(d), t.set(d.key, d), n.has(o) || n.set(o, []), (u = n.get(o)) == null || u.push(d);
	}), s;
}
function bb(e, t = {}) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), { getDisabled: i = Yy, getIgnored: a = qy, getIsGroup: o = tb, getKey: s = Ky } = t, c = t.getChildren ?? Gy, l = t.ignoreEmptyChildren ? (e) => {
		let t = c(e);
		return Array.isArray(t) ? t.length ? t : null : t;
	} : c, u = yb(e, n, r, Object.assign({
		get key() {
			return s(this.rawNode);
		},
		get disabled() {
			return i(this.rawNode);
		},
		get isGroup() {
			return o(this.rawNode);
		},
		get isLeaf() {
			return Wy(this.rawNode, l);
		},
		get shallowLoaded() {
			return Jy(this.rawNode, l);
		},
		get ignored() {
			return a(this.rawNode);
		},
		contains(e) {
			return vb(this, e);
		}
	}, gb), l);
	function d(e) {
		if (e == null) return null;
		let t = n.get(e);
		return t && !t.isGroup && !t.ignored ? t : null;
	}
	function f(e) {
		if (e == null) return null;
		let t = n.get(e);
		return t && !t.ignored ? t : null;
	}
	function p(e, t) {
		let n = f(e);
		return n ? n.getPrev(t) : null;
	}
	function m(e, t) {
		let n = f(e);
		return n ? n.getNext(t) : null;
	}
	function h(e) {
		let t = f(e);
		return t ? t.getParent() : null;
	}
	function g(e) {
		let t = f(e);
		return t ? t.getChild() : null;
	}
	let _ = {
		treeNodes: u,
		treeNodeMap: n,
		levelTreeNodeMap: r,
		maxLevel: Math.max(...r.keys()),
		getChildren: l,
		getFlattenedNodes(e) {
			return _b(u, e);
		},
		getNode: d,
		getPrev: p,
		getNext: m,
		getParent: h,
		getChild: g,
		getFirstAvailableNode() {
			return ub(u);
		},
		getPath(e, t = {}) {
			return lb(e, t, _);
		},
		getCheckedKeys(e, t = {}) {
			let { cascade: n = !0, leafOnly: r = !1, checkStrategy: i = "all", allowNotLoaded: a = !1 } = t;
			return sb({
				checkedKeys: Zy(e),
				indeterminateKeys: Qy(e),
				cascade: n,
				leafOnly: r,
				checkStrategy: i,
				allowNotLoaded: a
			}, _);
		},
		check(e, t, n = {}) {
			let { cascade: r = !0, leafOnly: i = !1, checkStrategy: a = "all", allowNotLoaded: o = !1 } = n;
			return sb({
				checkedKeys: Zy(t),
				indeterminateKeys: Qy(t),
				keysToCheck: e == null ? [] : By(e),
				cascade: r,
				leafOnly: i,
				checkStrategy: a,
				allowNotLoaded: o
			}, _);
		},
		uncheck(e, t, n = {}) {
			let { cascade: r = !0, leafOnly: i = !1, checkStrategy: a = "all", allowNotLoaded: o = !1 } = n;
			return sb({
				checkedKeys: Zy(t),
				indeterminateKeys: Qy(t),
				keysToUncheck: e == null ? [] : By(e),
				cascade: r,
				leafOnly: i,
				checkStrategy: a,
				allowNotLoaded: o
			}, _);
		},
		getNonLeafKeys(e = {}) {
			return Uy(u, e);
		}
	};
	return _;
}
// node_modules/naive-ui/es/empty/styles/_common.mjs
var xb = {
	iconSizeTiny: "28px",
	iconSizeSmall: "34px",
	iconSizeMedium: "40px",
	iconSizeLarge: "46px",
	iconSizeHuge: "52px"
};
// node_modules/naive-ui/es/empty/styles/light.mjs
function Sb(e) {
	let { textColorDisabled: t, iconColor: n, textColor2: r, fontSizeTiny: i, fontSizeSmall: a, fontSizeMedium: o, fontSizeLarge: s, fontSizeHuge: c } = e;
	return Object.assign(Object.assign({}, xb), {
		fontSizeTiny: i,
		fontSizeSmall: a,
		fontSizeMedium: o,
		fontSizeLarge: s,
		fontSizeHuge: c,
		textColor: t,
		iconColor: n,
		extraTextColor: r
	});
}
var Cb = {
	name: "Empty",
	common: jy,
	self: Sb
}, wb = {
	name: "Empty",
	common: Q,
	self: Sb
}, Tb = W("empty", "\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n", [
	G("icon", "\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ", [U("+", [G("description", "\n margin-top: 8px;\n ")])]),
	G("description", "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n "),
	G("extra", "\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n ")
]), Eb = /* @__PURE__ */ z({
	name: "Empty",
	props: Object.assign(Object.assign({}, Yv.props), {
		description: String,
		showDescription: {
			type: Boolean,
			default: !0
		},
		showIcon: {
			type: Boolean,
			default: !0
		},
		size: {
			type: String,
			default: "medium"
		},
		renderIcon: Function
	}),
	slots: Object,
	setup(e) {
		let { mergedClsPrefixRef: t, inlineThemeDisabled: n, mergedComponentPropsRef: r } = gf(e), i = Yv("Empty", "-empty", Tb, Cb, e, t), { localeRef: a } = zv("Empty"), o = V(() => e.description ?? r?.value?.Empty?.description), s = V(() => r?.value?.Empty?.renderIcon || (() => H(iy, null))), c = V(() => {
			let { size: t } = e, { common: { cubicBezierEaseInOut: n }, self: { [q("iconSize", t)]: r, [q("fontSize", t)]: a, textColor: o, iconColor: s, extraTextColor: c } } = i.value;
			return {
				"--n-icon-size": r,
				"--n-font-size": a,
				"--n-bezier": n,
				"--n-text-color": o,
				"--n-icon-color": s,
				"--n-extra-text-color": c
			};
		}), l = n ? _f("empty", V(() => {
			let t = "", { size: n } = e;
			return t += n[0], t;
		}), c, e) : void 0;
		return {
			mergedClsPrefix: t,
			mergedRenderIcon: s,
			localizedDescription: V(() => o.value || a.value.description),
			cssVars: n ? void 0 : c,
			themeClass: l?.themeClass,
			onRender: l?.onRender
		};
	},
	render() {
		let { $slots: e, mergedClsPrefix: t, onRender: n } = this;
		return n?.(), H("div", {
			class: [`${t}-empty`, this.themeClass],
			style: this.cssVars
		}, this.showIcon ? H("div", { class: `${t}-empty__icon` }, e.icon ? e.icon() : H(Zv, { clsPrefix: t }, { default: this.mergedRenderIcon })) : null, this.showDescription ? H("div", { class: `${t}-empty__description` }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? H("div", { class: `${t}-empty__extra` }, e.extra()) : null);
	}
}), Db = {
	height: "calc(var(--n-option-height) * 7.6)",
	paddingTiny: "4px 0",
	paddingSmall: "4px 0",
	paddingMedium: "4px 0",
	paddingLarge: "4px 0",
	paddingHuge: "4px 0",
	optionPaddingTiny: "0 12px",
	optionPaddingSmall: "0 12px",
	optionPaddingMedium: "0 12px",
	optionPaddingLarge: "0 12px",
	optionPaddingHuge: "0 12px",
	loadingSize: "18px"
};
// node_modules/naive-ui/es/_internal/select-menu/styles/light.mjs
function Ob(e) {
	let { borderRadius: t, popoverColor: n, textColor3: r, dividerColor: i, textColor2: a, primaryColorPressed: o, textColorDisabled: s, primaryColor: c, opacityDisabled: l, hoverColor: u, fontSizeTiny: d, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: m, fontSizeHuge: h, heightTiny: g, heightSmall: _, heightMedium: v, heightLarge: y, heightHuge: b } = e;
	return Object.assign(Object.assign({}, Db), {
		optionFontSizeTiny: d,
		optionFontSizeSmall: f,
		optionFontSizeMedium: p,
		optionFontSizeLarge: m,
		optionFontSizeHuge: h,
		optionHeightTiny: g,
		optionHeightSmall: _,
		optionHeightMedium: v,
		optionHeightLarge: y,
		optionHeightHuge: b,
		borderRadius: t,
		color: n,
		groupHeaderTextColor: r,
		actionDividerColor: i,
		optionTextColor: a,
		optionTextColorPressed: o,
		optionTextColorDisabled: s,
		optionTextColorActive: c,
		optionOpacityDisabled: l,
		optionCheckColor: c,
		optionColorPending: u,
		optionColorActive: "rgba(0, 0, 0, 0)",
		optionColorActivePending: u,
		actionTextColor: a,
		loadingColor: c
	});
}
var kb = Jv({
	name: "InternalSelectMenu",
	common: jy,
	peers: {
		Scrollbar: Py,
		Empty: Cb
	},
	self: Ob
}), Ab = {
	name: "InternalSelectMenu",
	common: Q,
	peers: {
		Scrollbar: Fy,
		Empty: wb
	},
	self: Ob
}, jb = {
	name: "InternalSelectMenu",
	style: W("base-select-menu", [K("rtl", "\n direction: rtl;\n ", [W("base-select-option", [G("check", "\n right: unset;\n left: calc(var(--n-option-padding-right) - 4px);\n "), K("show-checkmark", "\n padding-left: calc(var(--n-option-padding-right) + 20px);\n padding-right: var(--n-option-padding-left);\n ")])])])
}, Mb = /* @__PURE__ */ z({
	name: "NBaseSelectGroupHeader",
	props: {
		clsPrefix: {
			type: String,
			required: !0
		},
		tmNode: {
			type: Object,
			required: !0
		}
	},
	setup() {
		let { renderLabelRef: e, renderOptionRef: t, labelFieldRef: n, nodePropsRef: r } = R(Dl);
		return {
			labelField: n,
			nodeProps: r,
			renderLabel: e,
			renderOption: t
		};
	},
	render() {
		let { clsPrefix: e, renderLabel: t, renderOption: n, nodeProps: r, tmNode: { rawNode: i } } = this, a = r?.(i), o = t ? t(i, !1) : lf(i[this.labelField], i, !1), s = H("div", Object.assign({}, a, { class: [`${e}-base-select-group-header`, a?.class] }), o);
		return i.render ? i.render({
			node: s,
			option: i
		}) : n ? n({
			node: s,
			option: i,
			selected: !1
		}) : s;
	}
});
// node_modules/naive-ui/es/_internal/select-menu/src/SelectOption.mjs
function Nb(e, t) {
	return H(vo, { name: "fade-in-scale-up-transition" }, { default: () => e ? H(Zv, {
		clsPrefix: t,
		class: `${t}-base-select-option__check`
	}, { default: () => H(ey) }) : null });
}
var Pb = /* @__PURE__ */ z({
	name: "NBaseSelectOption",
	props: {
		clsPrefix: {
			type: String,
			required: !0
		},
		tmNode: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let { valueRef: t, pendingTmNodeRef: n, multipleRef: r, valueSetRef: i, renderLabelRef: a, renderOptionRef: o, labelFieldRef: s, valueFieldRef: c, showCheckmarkRef: l, nodePropsRef: u, handleOptionClick: d, handleOptionMouseEnter: f } = R(Dl), p = _l(() => {
			let { value: t } = n;
			return t ? e.tmNode.key === t.key : !1;
		});
		function m(t) {
			let { tmNode: n } = e;
			n.disabled || d(t, n);
		}
		function h(t) {
			let { tmNode: n } = e;
			n.disabled || f(t, n);
		}
		function g(t) {
			let { tmNode: n } = e, { value: r } = p;
			n.disabled || r || f(t, n);
		}
		return {
			multiple: r,
			isGrouped: _l(() => {
				let { tmNode: t } = e, { parent: n } = t;
				return n && n.rawNode.type === "group";
			}),
			showCheckmark: l,
			nodeProps: u,
			isPending: p,
			isSelected: _l(() => {
				let { value: n } = t, { value: a } = r;
				if (n === null) return !1;
				let o = e.tmNode.rawNode[c.value];
				if (a) {
					let { value: e } = i;
					return e.has(o);
				}
				return n === o;
			}),
			labelField: s,
			renderLabel: a,
			renderOption: o,
			handleMouseMove: g,
			handleMouseEnter: h,
			handleClick: m
		};
	},
	render() {
		let { clsPrefix: e, tmNode: { rawNode: t }, isSelected: n, isPending: r, isGrouped: i, showCheckmark: a, nodeProps: o, renderOption: s, renderLabel: c, handleClick: l, handleMouseEnter: u, handleMouseMove: d } = this, f = Nb(n, e), p = c ? [c(t, n), a && f] : [lf(t[this.labelField], t, n), a && f], m = o?.(t), h = H("div", Object.assign({}, m, {
			class: [
				`${e}-base-select-option`,
				t.class,
				m?.class,
				{
					[`${e}-base-select-option--disabled`]: t.disabled,
					[`${e}-base-select-option--selected`]: n,
					[`${e}-base-select-option--grouped`]: i,
					[`${e}-base-select-option--pending`]: r,
					[`${e}-base-select-option--show-checkmark`]: a
				}
			],
			style: [m?.style || "", t.style || ""],
			onClick: cf([l, m?.onClick]),
			onMouseenter: cf([u, m?.onMouseenter]),
			onMousemove: cf([d, m?.onMousemove])
		}), H("div", { class: `${e}-base-select-option__content` }, p));
		return t.render ? t.render({
			node: h,
			option: t,
			selected: n
		}) : s ? s({
			node: h,
			option: t,
			selected: n
		}) : h;
	}
}), { cubicBezierEaseIn: Fb, cubicBezierEaseOut: Ib } = Hv;
function Lb({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: n = ".9", originalTransform: r = "", originalTransition: i = "" } = {}) {
	return [
		U("&.fade-in-scale-up-transition-leave-active", {
			transformOrigin: e,
			transition: `opacity ${t} ${Fb}, transform ${t} ${Fb} ${i && `,${i}`}`
		}),
		U("&.fade-in-scale-up-transition-enter-active", {
			transformOrigin: e,
			transition: `opacity ${t} ${Ib}, transform ${t} ${Ib} ${i && `,${i}`}`
		}),
		U("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
			opacity: 0,
			transform: `${r} scale(${n})`
		}),
		U("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
			opacity: 1,
			transform: `${r} scale(1)`
		})
	];
}
// node_modules/naive-ui/es/_internal/select-menu/src/styles/index.cssr.mjs
var Rb = W("base-select-menu", "\n line-height: 1.5;\n outline: none;\n z-index: 0;\n position: relative;\n border-radius: var(--n-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-color);\n", [
	W("scrollbar", "\n max-height: var(--n-height);\n "),
	W("virtual-list", "\n max-height: var(--n-height);\n "),
	W("base-select-option", "\n min-height: var(--n-option-height);\n font-size: var(--n-option-font-size);\n display: flex;\n align-items: center;\n ", [G("content", "\n z-index: 1;\n white-space: nowrap;\n text-overflow: ellipsis;\n overflow: hidden;\n ")]),
	W("base-select-group-header", "\n min-height: var(--n-option-height);\n font-size: .93em;\n display: flex;\n align-items: center;\n "),
	W("base-select-menu-option-wrapper", "\n position: relative;\n width: 100%;\n "),
	G("loading, empty", "\n display: flex;\n padding: 12px 32px;\n flex: 1;\n justify-content: center;\n "),
	G("loading", "\n color: var(--n-loading-color);\n font-size: var(--n-loading-size);\n "),
	G("header", "\n padding: 8px var(--n-option-padding-left);\n font-size: var(--n-option-font-size);\n transition: \n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-action-divider-color);\n color: var(--n-action-text-color);\n "),
	G("action", "\n padding: 8px var(--n-option-padding-left);\n font-size: var(--n-option-font-size);\n transition: \n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n border-top: 1px solid var(--n-action-divider-color);\n color: var(--n-action-text-color);\n "),
	W("base-select-group-header", "\n position: relative;\n cursor: default;\n padding: var(--n-option-padding);\n color: var(--n-group-header-text-color);\n "),
	W("base-select-option", "\n cursor: pointer;\n position: relative;\n padding: var(--n-option-padding);\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n box-sizing: border-box;\n color: var(--n-option-text-color);\n opacity: 1;\n ", [
		K("show-checkmark", "\n padding-right: calc(var(--n-option-padding-right) + 20px);\n "),
		U("&::before", "\n content: \"\";\n position: absolute;\n left: 4px;\n right: 4px;\n top: 0;\n bottom: 0;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n "),
		U("&:active", "\n color: var(--n-option-text-color-pressed);\n "),
		K("grouped", "\n padding-left: calc(var(--n-option-padding-left) * 1.5);\n "),
		K("pending", [U("&::before", "\n background-color: var(--n-option-color-pending);\n ")]),
		K("selected", "\n color: var(--n-option-text-color-active);\n ", [U("&::before", "\n background-color: var(--n-option-color-active);\n "), K("pending", [U("&::before", "\n background-color: var(--n-option-color-active-pending);\n ")])]),
		K("disabled", "\n cursor: not-allowed;\n ", [pc("selected", "\n color: var(--n-option-text-color-disabled);\n "), K("selected", "\n opacity: var(--n-option-opacity-disabled);\n ")]),
		G("check", "\n font-size: 16px;\n position: absolute;\n right: calc(var(--n-option-padding-right) - 4px);\n top: calc(50% - 7px);\n color: var(--n-option-check-color);\n transition: color .3s var(--n-bezier);\n ", [Lb({ enterScale: "0.5" })])
	])
]), zb = /* @__PURE__ */ z({
	name: "InternalSelectMenu",
	props: Object.assign(Object.assign({}, Yv.props), {
		clsPrefix: {
			type: String,
			required: !0
		},
		scrollable: {
			type: Boolean,
			default: !0
		},
		treeMate: {
			type: Object,
			required: !0
		},
		multiple: Boolean,
		size: {
			type: String,
			default: "medium"
		},
		value: {
			type: [
				String,
				Number,
				Array
			],
			default: null
		},
		autoPending: Boolean,
		virtualScroll: {
			type: Boolean,
			default: !0
		},
		show: {
			type: Boolean,
			default: !0
		},
		labelField: {
			type: String,
			default: "label"
		},
		valueField: {
			type: String,
			default: "value"
		},
		loading: Boolean,
		focusable: Boolean,
		renderLabel: Function,
		renderOption: Function,
		nodeProps: Function,
		showCheckmark: {
			type: Boolean,
			default: !0
		},
		onMousedown: Function,
		onScroll: Function,
		onFocus: Function,
		onBlur: Function,
		onKeyup: Function,
		onKeydown: Function,
		onTabOut: Function,
		onMouseenter: Function,
		onMouseleave: Function,
		onResize: Function,
		resetMenuOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		inlineThemeDisabled: Boolean,
		scrollbarProps: Object,
		onToggle: Function
	}),
	setup(e) {
		let { mergedClsPrefixRef: t, mergedRtlRef: n, mergedComponentPropsRef: r } = gf(e), i = Vv("InternalSelectMenu", n, t), a = Yv("InternalSelectMenu", "-internal-select-menu", Rb, kb, e, /* @__PURE__ */ L(e, "clsPrefix")), o = /* @__PURE__ */ I(null), s = /* @__PURE__ */ I(null), c = /* @__PURE__ */ I(null), l = V(() => e.treeMate.getFlattenedNodes()), u = V(() => nb(l.value)), d = /* @__PURE__ */ I(null);
		function f() {
			let { treeMate: t } = e, n = null, { value: r } = e;
			r === null ? n = t.getFirstAvailableNode() : (n = e.multiple ? t.getNode((r || [])[(r || []).length - 1]) : t.getNode(r), (!n || n.disabled) && (n = t.getFirstAvailableNode())), j(n || null);
		}
		function p() {
			let { value: t } = d;
			t && !e.treeMate.getNode(t.key) && (d.value = null);
		}
		let m;
		Wn(() => e.show, (t) => {
			t ? m = Wn(() => e.treeMate, () => {
				e.resetMenuOnOptionsChange ? (e.autoPending ? f() : p(), Cn(te)) : p();
			}, { immediate: !0 }) : m?.();
		}, { immediate: !0 }), Br(() => {
			m?.();
		});
		let h = V(() => Cc(a.value.self[q("optionHeight", e.size)])), g = V(() => Tc(a.value.self[q("padding", e.size)])), _ = V(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), v = V(() => {
			let e = l.value;
			return e && e.length === 0;
		}), y = V(() => r?.value?.Select?.renderEmpty);
		function b(t) {
			let { onToggle: n } = e;
			n && n(t);
		}
		function x(t) {
			let { onScroll: n } = e;
			n && n(t);
		}
		function S(e) {
			var t;
			(t = c.value) == null || t.sync(), x(e);
		}
		function C() {
			var e;
			(e = c.value) == null || e.sync();
		}
		function w() {
			let { value: e } = d;
			return e || null;
		}
		function T(e, t) {
			t.disabled || j(t, !1);
		}
		function E(e, t) {
			t.disabled || b(t);
		}
		function D(t) {
			var n;
			xc(t, "action") || (n = e.onKeyup) == null || n.call(e, t);
		}
		function O(t) {
			var n;
			xc(t, "action") || (n = e.onKeydown) == null || n.call(e, t);
		}
		function k(t) {
			var n;
			(n = e.onMousedown) == null || n.call(e, t), e.focusable || t.preventDefault();
		}
		function A() {
			let { value: e } = d;
			e && j(e.getNext({ loop: !0 }), !0);
		}
		function ee() {
			let { value: e } = d;
			e && j(e.getPrev({ loop: !0 }), !0);
		}
		function j(e, t = !1) {
			d.value = e, t && te();
		}
		function te() {
			var t, n;
			let r = d.value;
			if (!r) return;
			let i = u.value(r.key);
			i !== null && (e.virtualScroll ? (t = s.value) == null || t.scrollTo({ index: i }) : (n = c.value) == null || n.scrollTo({
				index: i,
				elSize: h.value
			}));
		}
		function ne(t) {
			var n;
			o.value?.contains(t.target) && ((n = e.onFocus) == null || n.call(e, t));
		}
		function M(t) {
			var n;
			o.value?.contains(t.relatedTarget) || (n = e.onBlur) == null || n.call(e, t);
		}
		Bn(Dl, {
			handleOptionMouseEnter: T,
			handleOptionClick: E,
			valueSetRef: _,
			pendingTmNodeRef: d,
			nodePropsRef: /* @__PURE__ */ L(e, "nodeProps"),
			showCheckmarkRef: /* @__PURE__ */ L(e, "showCheckmark"),
			multipleRef: /* @__PURE__ */ L(e, "multiple"),
			valueRef: /* @__PURE__ */ L(e, "value"),
			renderLabelRef: /* @__PURE__ */ L(e, "renderLabel"),
			renderOptionRef: /* @__PURE__ */ L(e, "renderOption"),
			labelFieldRef: /* @__PURE__ */ L(e, "labelField"),
			valueFieldRef: /* @__PURE__ */ L(e, "valueField")
		}), Bn(Ol, o), Lr(() => {
			let { value: e } = c;
			e && e.sync();
		});
		let re = V(() => {
			let { size: t } = e, { common: { cubicBezierEaseInOut: n }, self: { height: r, borderRadius: i, color: o, groupHeaderTextColor: s, actionDividerColor: c, optionTextColorPressed: l, optionTextColor: u, optionTextColorDisabled: d, optionTextColorActive: f, optionOpacityDisabled: p, optionCheckColor: m, actionTextColor: h, optionColorPending: g, optionColorActive: _, loadingColor: v, loadingSize: y, optionColorActivePending: b, [q("optionFontSize", t)]: x, [q("optionHeight", t)]: S, [q("optionPadding", t)]: C } } = a.value;
			return {
				"--n-height": r,
				"--n-action-divider-color": c,
				"--n-action-text-color": h,
				"--n-bezier": n,
				"--n-border-radius": i,
				"--n-color": o,
				"--n-option-font-size": x,
				"--n-group-header-text-color": s,
				"--n-option-check-color": m,
				"--n-option-color-pending": g,
				"--n-option-color-active": _,
				"--n-option-color-active-pending": b,
				"--n-option-height": S,
				"--n-option-opacity-disabled": p,
				"--n-option-text-color": u,
				"--n-option-text-color-active": f,
				"--n-option-text-color-disabled": d,
				"--n-option-text-color-pressed": l,
				"--n-option-padding": C,
				"--n-option-padding-left": Tc(C, "left"),
				"--n-option-padding-right": Tc(C, "right"),
				"--n-loading-color": v,
				"--n-loading-size": y
			};
		}), { inlineThemeDisabled: ie } = e, ae = ie ? _f("internal-select-menu", V(() => e.size[0]), re, e) : void 0, oe = {
			selfRef: o,
			next: A,
			prev: ee,
			getPendingTmNode: w
		};
		return Hd(o, e.onResize), Object.assign({
			mergedTheme: a,
			mergedClsPrefix: t,
			rtlEnabled: i,
			virtualListRef: s,
			scrollbarRef: c,
			itemSize: h,
			padding: g,
			flattenedNodes: l,
			empty: v,
			mergedRenderEmpty: y,
			virtualListContainer() {
				let { value: e } = s;
				return e?.listElRef;
			},
			virtualListContent() {
				let { value: e } = s;
				return e?.itemsElRef;
			},
			doScroll: x,
			handleFocusin: ne,
			handleFocusout: M,
			handleKeyUp: D,
			handleKeyDown: O,
			handleMouseDown: k,
			handleVirtualListResize: C,
			handleVirtualListScroll: S,
			cssVars: ie ? void 0 : re,
			themeClass: ae?.themeClass,
			onRender: ae?.onRender
		}, oe);
	},
	render() {
		let { $slots: e, virtualScroll: t, clsPrefix: n, mergedTheme: r, themeClass: i, onRender: a } = this;
		return a?.(), H("div", {
			ref: "selfRef",
			tabindex: this.focusable ? 0 : -1,
			class: [
				`${n}-base-select-menu`,
				`${n}-base-select-menu--${this.size}-size`,
				this.rtlEnabled && `${n}-base-select-menu--rtl`,
				i,
				this.multiple && `${n}-base-select-menu--multiple`
			],
			style: this.cssVars,
			onFocusin: this.handleFocusin,
			onFocusout: this.handleFocusout,
			onKeyup: this.handleKeyUp,
			onKeydown: this.handleKeyDown,
			onMousedown: this.handleMouseDown,
			onMouseenter: this.onMouseenter,
			onMouseleave: this.onMouseleave
		}, ff(e.header, (e) => e && H("div", {
			class: `${n}-base-select-menu__header`,
			"data-header": !0,
			key: "header"
		}, e)), this.loading ? H("div", { class: `${n}-base-select-menu__loading` }, H(yy, {
			clsPrefix: n,
			strokeWidth: 20
		})) : this.empty ? H("div", {
			class: `${n}-base-select-menu__empty`,
			"data-empty": !0
		}, df(e.empty, () => [this.mergedRenderEmpty?.call(this) || H(Eb, {
			theme: r.peers.Empty,
			themeOverrides: r.peerOverrides.Empty,
			size: this.size
		})])) : H(Ry, Object.assign({
			ref: "scrollbarRef",
			theme: r.peers.Scrollbar,
			themeOverrides: r.peerOverrides.Scrollbar,
			scrollable: this.scrollable,
			container: t ? this.virtualListContainer : void 0,
			content: t ? this.virtualListContent : void 0,
			onScroll: t ? void 0 : this.doScroll
		}, this.scrollbarProps), { default: () => t ? H(jd, {
			ref: "virtualListRef",
			class: `${n}-virtual-list`,
			items: this.flattenedNodes,
			itemSize: this.itemSize,
			showScrollbar: !1,
			paddingTop: this.padding.top,
			paddingBottom: this.padding.bottom,
			onResize: this.handleVirtualListResize,
			onScroll: this.handleVirtualListScroll,
			itemResizable: !0
		}, { default: ({ item: e }) => e.isGroup ? H(Mb, {
			key: e.key,
			clsPrefix: n,
			tmNode: e
		}) : e.ignored ? null : H(Pb, {
			clsPrefix: n,
			key: e.key,
			tmNode: e
		}) }) : H("div", {
			class: `${n}-base-select-menu-option-wrapper`,
			style: {
				paddingTop: this.padding.top,
				paddingBottom: this.padding.bottom
			}
		}, this.flattenedNodes.map((e) => e.isGroup ? H(Mb, {
			key: e.key,
			clsPrefix: n,
			tmNode: e
		}) : H(Pb, {
			clsPrefix: n,
			key: e.key,
			tmNode: e
		}))) }), ff(e.action, (e) => e && [H("div", {
			class: `${n}-base-select-menu__action`,
			"data-action": !0,
			key: "action"
		}, e), H(gy, {
			onFocus: this.onTabOut,
			key: "focus-detector"
		})]));
	}
}), Bb = {
	space: "6px",
	spaceArrow: "10px",
	arrowOffset: "10px",
	arrowOffsetVertical: "10px",
	arrowHeight: "6px",
	padding: "8px 14px"
};
// node_modules/naive-ui/es/popover/styles/light.mjs
function Vb(e) {
	let { boxShadow2: t, popoverColor: n, textColor2: r, borderRadius: i, fontSize: a, dividerColor: o } = e;
	return Object.assign(Object.assign({}, Bb), {
		fontSize: a,
		borderRadius: i,
		color: n,
		dividerColor: o,
		textColor: r,
		boxShadow: t
	});
}
var Hb = Jv({
	name: "Popover",
	common: jy,
	peers: { Scrollbar: Py },
	self: Vb
}), Ub = {
	name: "Popover",
	common: Q,
	peers: { Scrollbar: Fy },
	self: Vb
}, Wb = {
	name: "Popover",
	style: W("popover", [K("rtl", "\n direction: rtl;\n text-align: right;\n ")]),
	peers: [Iy]
}, Gb = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, Kb = "var(--n-arrow-height) * 1.414", qb = U([
	W("popover", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n position: relative;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n box-shadow: var(--n-box-shadow);\n word-break: break-word;\n ", [
		U(">", [W("scrollbar", "\n height: inherit;\n max-height: inherit;\n ")]),
		pc("raw", "\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n ", [pc("scrollable", [pc("show-header-or-footer", "padding: var(--n-padding);")])]),
		G("header", "\n padding: var(--n-padding);\n border-bottom: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "),
		G("footer", "\n padding: var(--n-padding);\n border-top: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "),
		K("scrollable, show-header-or-footer", [G("content", "\n padding: var(--n-padding);\n ")])
	]),
	W("popover-shared", "\n transform-origin: inherit;\n ", [
		W("popover-arrow-wrapper", "\n position: absolute;\n overflow: hidden;\n pointer-events: none;\n ", [W("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Kb});
 height: calc(${Kb});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
		U("&.popover-transition-enter-from, &.popover-transition-leave-to", "\n opacity: 0;\n transform: scale(.85);\n "),
		U("&.popover-transition-enter-to, &.popover-transition-leave-from", "\n transform: scale(1);\n opacity: 1;\n "),
		U("&.popover-transition-enter-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-out),\n transform .15s var(--n-bezier-ease-out);\n "),
		U("&.popover-transition-leave-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-in),\n transform .15s var(--n-bezier-ease-in);\n ")
	]),
	Yb("top-start", `
 top: calc(${Kb} / -2);
 left: calc(${Jb("top-start")} - var(--v-offset-left));
 `),
	Yb("top", `
 top: calc(${Kb} / -2);
 transform: translateX(calc(${Kb} / -2)) rotate(45deg);
 left: 50%;
 `),
	Yb("top-end", `
 top: calc(${Kb} / -2);
 right: calc(${Jb("top-end")} + var(--v-offset-left));
 `),
	Yb("bottom-start", `
 bottom: calc(${Kb} / -2);
 left: calc(${Jb("bottom-start")} - var(--v-offset-left));
 `),
	Yb("bottom", `
 bottom: calc(${Kb} / -2);
 transform: translateX(calc(${Kb} / -2)) rotate(45deg);
 left: 50%;
 `),
	Yb("bottom-end", `
 bottom: calc(${Kb} / -2);
 right: calc(${Jb("bottom-end")} + var(--v-offset-left));
 `),
	Yb("left-start", `
 left: calc(${Kb} / -2);
 top: calc(${Jb("left-start")} - var(--v-offset-top));
 `),
	Yb("left", `
 left: calc(${Kb} / -2);
 transform: translateY(calc(${Kb} / -2)) rotate(45deg);
 top: 50%;
 `),
	Yb("left-end", `
 left: calc(${Kb} / -2);
 bottom: calc(${Jb("left-end")} + var(--v-offset-top));
 `),
	Yb("right-start", `
 right: calc(${Kb} / -2);
 top: calc(${Jb("right-start")} - var(--v-offset-top));
 `),
	Yb("right", `
 right: calc(${Kb} / -2);
 transform: translateY(calc(${Kb} / -2)) rotate(45deg);
 top: 50%;
 `),
	Yb("right-end", `
 right: calc(${Kb} / -2);
 bottom: calc(${Jb("right-end")} + var(--v-offset-top));
 `),
	...Lv({
		top: ["right-start", "left-start"],
		right: ["top-end", "bottom-end"],
		bottom: ["right-end", "left-end"],
		left: ["top-start", "bottom-start"]
	}, (e, t) => {
		let n = ["right", "left"].includes(t), r = n ? "width" : "height";
		return e.map((e) => {
			let i = e.split("-")[1] === "end", a = `calc((${`var(--v-target-${r}, 0px)`} - ${Kb}) / 2)`, o = Jb(e);
			return U(`[v-placement="${e}"] >`, [W("popover-shared", [K("center-arrow", [W("popover-arrow", `${t}: calc(max(${a}, ${o}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
		});
	})
]);
function Jb(e) {
	return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Yb(e, t) {
	let n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
	return U(`[v-placement="${e}"] >`, [W("popover-shared", `
 margin-${Gb[n]}: var(--n-space);
 `, [
		K("show-arrow", `
 margin-${Gb[n]}: var(--n-space-arrow);
 `),
		K("overlap", "\n margin: 0;\n "),
		gc("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Gb[n]}: auto;
 ${r}
 `, [W("popover-arrow", t)])
	])]);
}
// node_modules/naive-ui/es/popover/src/PopoverBody.mjs
var Xb = Object.assign(Object.assign({}, Yv.props), {
	to: Nl.propTo,
	show: Boolean,
	trigger: String,
	showArrow: Boolean,
	delay: Number,
	duration: Number,
	raw: Boolean,
	arrowPointToCenter: Boolean,
	arrowClass: String,
	arrowStyle: [String, Object],
	arrowWrapperClass: String,
	arrowWrapperStyle: [String, Object],
	displayDirective: String,
	x: Number,
	y: Number,
	flip: Boolean,
	overlap: Boolean,
	placement: String,
	width: [Number, String],
	keepAliveOnHover: Boolean,
	scrollable: Boolean,
	contentClass: String,
	contentStyle: [Object, String],
	headerClass: String,
	headerStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	internalDeactivateImmediately: Boolean,
	animated: Boolean,
	onClickoutside: Function,
	internalTrapFocus: Boolean,
	internalOnAfterLeave: Function,
	minWidth: Number,
	maxWidth: Number
});
function Zb({ arrowClass: e, arrowStyle: t, arrowWrapperClass: n, arrowWrapperStyle: r, clsPrefix: i }) {
	return H("div", {
		key: "__popover-arrow__",
		style: r,
		class: [`${i}-popover-arrow-wrapper`, n]
	}, H("div", {
		class: [`${i}-popover-arrow`, e],
		style: t
	}));
}
var Qb = /* @__PURE__ */ z({
	name: "PopoverBody",
	inheritAttrs: !1,
	props: Xb,
	setup(e, { slots: t, attrs: n }) {
		let { namespaceRef: r, mergedClsPrefixRef: i, inlineThemeDisabled: a, mergedRtlRef: o } = gf(e), s = Yv("Popover", "-popover", qb, Hb, e, i), c = Vv("Popover", o, i), l = /* @__PURE__ */ I(null), u = R("NPopover"), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(e.show), p = /* @__PURE__ */ I(!1);
		Un(() => {
			let { show: t } = e;
			t && !Yd() && !e.internalDeactivateImmediately && (p.value = !0);
		});
		let m = V(() => {
			let { trigger: t, onClickoutside: n } = e, r = [], { positionManuallyRef: { value: i } } = u;
			return i || (t === "click" && !n && r.push([
				Xl,
				S,
				void 0,
				{ capture: !0 }
			]), t === "hover" && r.push([Jl, x])), n && r.push([
				Xl,
				S,
				void 0,
				{ capture: !0 }
			]), (e.displayDirective === "show" || e.animated && p.value) && r.push([Io, e.show]), r;
		}), h = V(() => {
			let { common: { cubicBezierEaseInOut: e, cubicBezierEaseIn: t, cubicBezierEaseOut: n }, self: { space: r, spaceArrow: i, padding: a, fontSize: o, textColor: c, dividerColor: l, color: u, boxShadow: d, borderRadius: f, arrowHeight: p, arrowOffset: m, arrowOffsetVertical: h } } = s.value;
			return {
				"--n-box-shadow": d,
				"--n-bezier": e,
				"--n-bezier-ease-in": t,
				"--n-bezier-ease-out": n,
				"--n-font-size": o,
				"--n-text-color": c,
				"--n-color": u,
				"--n-divider-color": l,
				"--n-border-radius": f,
				"--n-arrow-height": p,
				"--n-arrow-offset": m,
				"--n-arrow-offset-vertical": h,
				"--n-padding": a,
				"--n-space": r,
				"--n-space-arrow": i
			};
		}), g = V(() => {
			let t = e.width === "trigger" ? void 0 : Kd(e.width), n = [];
			t && n.push({ width: t });
			let { maxWidth: r, minWidth: i } = e;
			return r && n.push({ maxWidth: Kd(r) }), i && n.push({ maxWidth: Kd(i) }), a || n.push(h.value), n;
		}), _ = a ? _f("popover", void 0, h, e) : void 0;
		u.setBodyInstance({ syncPosition: v }), Br(() => {
			u.setBodyInstance(null);
		}), Wn(/* @__PURE__ */ L(e, "show"), (t) => {
			e.animated || (t ? f.value = !0 : f.value = !1);
		});
		function v() {
			var e;
			(e = l.value) == null || e.syncPosition();
		}
		function y(t) {
			e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(t);
		}
		function b(t) {
			e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(t);
		}
		function x(t) {
			e.trigger === "hover" && !C().contains(Sc(t)) && u.handleMouseMoveOutside(t);
		}
		function S(t) {
			(e.trigger === "click" && !C().contains(Sc(t)) || e.onClickoutside) && u.handleClickOutside(t);
		}
		function C() {
			return u.getTriggerElement();
		}
		Bn(jl, d), Bn(kl, null), Bn(Al, null);
		function w() {
			if (_?.onRender(), !(e.displayDirective === "show" || e.show || e.animated && p.value)) return null;
			let r, a = u.internalRenderBodyRef.value, { value: o } = i;
			if (a) r = a([
				`${o}-popover-shared`,
				c?.value && `${o}-popover--rtl`,
				_?.themeClass.value,
				e.overlap && `${o}-popover-shared--overlap`,
				e.showArrow && `${o}-popover-shared--show-arrow`,
				e.arrowPointToCenter && `${o}-popover-shared--center-arrow`
			], d, g.value, y, b);
			else {
				let { value: i } = u.extraClassRef, { internalTrapFocus: a } = e, l = !pf(t.header) || !pf(t.footer), f = () => {
					let n = l ? H(la, null, ff(t.header, (t) => t ? H("div", {
						class: [`${o}-popover__header`, e.headerClass],
						style: e.headerStyle
					}, t) : null), ff(t.default, (n) => n ? H("div", {
						class: [`${o}-popover__content`, e.contentClass],
						style: e.contentStyle
					}, t) : null), ff(t.footer, (t) => t ? H("div", {
						class: [`${o}-popover__footer`, e.footerClass],
						style: e.footerStyle
					}, t) : null)) : e.scrollable ? t.default?.call(t) : H("div", {
						class: [`${o}-popover__content`, e.contentClass],
						style: e.contentStyle
					}, t);
					return [e.scrollable ? H(zy, {
						themeOverrides: s.value.peerOverrides.Scrollbar,
						theme: s.value.peers.Scrollbar,
						contentClass: l ? void 0 : `${o}-popover__content ${e.contentClass ?? ""}`,
						contentStyle: l ? void 0 : e.contentStyle
					}, { default: () => n }) : n, e.showArrow ? Zb({
						arrowClass: e.arrowClass,
						arrowStyle: e.arrowStyle,
						arrowWrapperClass: e.arrowWrapperClass,
						arrowWrapperStyle: e.arrowWrapperStyle,
						clsPrefix: o
					}) : null];
				};
				r = H("div", Fa({
					class: [
						`${o}-popover`,
						`${o}-popover-shared`,
						c?.value && `${o}-popover--rtl`,
						_?.themeClass.value,
						i.map((e) => `${o}-${e}`),
						{
							[`${o}-popover--scrollable`]: e.scrollable,
							[`${o}-popover--show-header-or-footer`]: l,
							[`${o}-popover--raw`]: e.raw,
							[`${o}-popover-shared--overlap`]: e.overlap,
							[`${o}-popover-shared--show-arrow`]: e.showArrow,
							[`${o}-popover-shared--center-arrow`]: e.arrowPointToCenter
						}
					],
					ref: d,
					style: g.value,
					onKeydown: u.handleKeydown,
					onMouseenter: y,
					onMouseleave: b
				}, n), a ? H(Vd, {
					active: e.show,
					autoFocus: !0
				}, { default: f }) : f());
			}
			return Rn(r, m.value);
		}
		return {
			displayed: p,
			namespace: r,
			isMounted: u.isMountedRef,
			zIndex: u.zIndexRef,
			followerRef: l,
			adjustedTo: Nl(e),
			followerEnabled: f,
			renderContentNode: w
		};
	},
	render() {
		return H(Tu, {
			ref: "followerRef",
			zIndex: this.zIndex,
			show: this.show,
			enabled: this.followerEnabled,
			to: this.adjustedTo,
			x: this.x,
			y: this.y,
			flip: this.flip,
			placement: this.placement,
			containerClass: this.namespace,
			overlap: this.overlap,
			width: this.width === "trigger" ? "target" : void 0,
			teleportDisabled: this.adjustedTo === Nl.tdkey
		}, { default: () => this.animated ? H(vo, {
			name: "popover-transition",
			appear: this.isMounted,
			onEnter: () => {
				this.followerEnabled = !0;
			},
			onAfterLeave: () => {
				var e;
				(e = this.internalOnAfterLeave) == null || e.call(this), this.followerEnabled = !1, this.displayed = !1;
			}
		}, { default: this.renderContentNode }) : this.renderContentNode() });
	}
}), $b = Object.keys(Xb), ex = {
	focus: ["onFocus", "onBlur"],
	click: ["onClick"],
	hover: ["onMouseenter", "onMouseleave"],
	manual: [],
	nested: [
		"onFocus",
		"onBlur",
		"onMouseenter",
		"onMouseleave",
		"onClick"
	]
};
function tx(e, t, n) {
	ex[t].forEach((t) => {
		e.props = e.props ? Object.assign({}, e.props) : {};
		let r = e.props[t], i = n[t];
		r ? e.props[t] = (...e) => {
			r(...e), i(...e);
		} : e.props[t] = i;
	});
}
var nx = {
	show: {
		type: Boolean,
		default: void 0
	},
	defaultShow: Boolean,
	showArrow: {
		type: Boolean,
		default: !0
	},
	trigger: {
		type: String,
		default: "hover"
	},
	delay: {
		type: Number,
		default: 100
	},
	duration: {
		type: Number,
		default: 100
	},
	raw: Boolean,
	placement: {
		type: String,
		default: "top"
	},
	x: Number,
	y: Number,
	arrowPointToCenter: Boolean,
	disabled: Boolean,
	getDisabled: Function,
	displayDirective: {
		type: String,
		default: "if"
	},
	arrowClass: String,
	arrowStyle: [String, Object],
	arrowWrapperClass: String,
	arrowWrapperStyle: [String, Object],
	flip: {
		type: Boolean,
		default: !0
	},
	animated: {
		type: Boolean,
		default: !0
	},
	width: {
		type: [Number, String],
		default: void 0
	},
	overlap: Boolean,
	keepAliveOnHover: {
		type: Boolean,
		default: !0
	},
	zIndex: Number,
	to: Nl.propTo,
	scrollable: Boolean,
	contentClass: String,
	contentStyle: [Object, String],
	headerClass: String,
	headerStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	onClickoutside: Function,
	"onUpdate:show": [Function, Array],
	onUpdateShow: [Function, Array],
	internalDeactivateImmediately: Boolean,
	internalSyncTargetWithParent: Boolean,
	internalInheritedEventHandlers: {
		type: Array,
		default: () => []
	},
	internalTrapFocus: Boolean,
	internalExtraClass: {
		type: Array,
		default: () => []
	},
	onShow: [Function, Array],
	onHide: [Function, Array],
	arrow: {
		type: Boolean,
		default: void 0
	},
	minWidth: Number,
	maxWidth: Number
}, rx = /* @__PURE__ */ z({
	name: "Popover",
	inheritAttrs: !1,
	props: Object.assign(Object.assign(Object.assign({}, Yv.props), nx), {
		internalOnAfterLeave: Function,
		internalRenderBody: Function
	}),
	slots: Object,
	__popover__: !0,
	setup(e) {
		let t = Sl(), n = /* @__PURE__ */ I(null), r = V(() => e.show), i = /* @__PURE__ */ I(e.defaultShow), a = xl(r, i), o = _l(() => !e.disabled && a.value), s = () => {
			if (e.disabled) return !0;
			let { getDisabled: t } = e;
			return !!t?.();
		}, c = () => !s() && a.value, l = Cl(e, ["arrow", "showArrow"]), u = V(() => !e.overlap && l.value), d = null, f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(null), m = _l(() => e.x !== void 0 && e.y !== void 0);
		function h(t) {
			let { "onUpdate:show": n, onUpdateShow: r, onShow: a, onHide: o } = e;
			i.value = t, n && tf(n, t), r && tf(r, t), t && a && tf(a, !0), t && o && tf(o, !1);
		}
		function g() {
			d && d.syncPosition();
		}
		function _() {
			let { value: e } = f;
			e && (window.clearTimeout(e), f.value = null);
		}
		function v() {
			let { value: e } = p;
			e && (window.clearTimeout(e), p.value = null);
		}
		function y() {
			let t = s();
			if (e.trigger === "focus" && !t) {
				if (c()) return;
				h(!0);
			}
		}
		function b() {
			let t = s();
			if (e.trigger === "focus" && !t) {
				if (!c()) return;
				h(!1);
			}
		}
		function x() {
			let t = s();
			if (e.trigger === "hover" && !t) {
				if (v(), f.value !== null || c()) return;
				let t = () => {
					h(!0), f.value = null;
				}, { delay: n } = e;
				n === 0 ? t() : f.value = window.setTimeout(t, n);
			}
		}
		function S() {
			let t = s();
			if (e.trigger === "hover" && !t) {
				if (_(), p.value !== null || !c()) return;
				let t = () => {
					h(!1), p.value = null;
				}, { duration: n } = e;
				n === 0 ? t() : p.value = window.setTimeout(t, n);
			}
		}
		function C() {
			S();
		}
		function w(t) {
			var n;
			c() && (e.trigger === "click" && (_(), v(), h(!1)), (n = e.onClickoutside) == null || n.call(e, t));
		}
		function T() {
			e.trigger === "click" && !s() && (_(), v(), h(!c()));
		}
		function E(t) {
			e.internalTrapFocus && t.key === "Escape" && (_(), v(), h(!1));
		}
		function D(e) {
			i.value = e;
		}
		function O() {
			return n.value?.targetRef;
		}
		function k(e) {
			d = e;
		}
		return Bn("NPopover", {
			getTriggerElement: O,
			handleKeydown: E,
			handleMouseEnter: x,
			handleMouseLeave: S,
			handleClickOutside: w,
			handleMouseMoveOutside: C,
			setBodyInstance: k,
			positionManuallyRef: m,
			isMountedRef: t,
			zIndexRef: /* @__PURE__ */ L(e, "zIndex"),
			extraClassRef: /* @__PURE__ */ L(e, "internalExtraClass"),
			internalRenderBodyRef: /* @__PURE__ */ L(e, "internalRenderBody")
		}), Un(() => {
			a.value && s() && h(!1);
		}), {
			binderInstRef: n,
			positionManually: m,
			mergedShowConsideringDisabledProp: o,
			uncontrolledShow: i,
			mergedShowArrow: u,
			getMergedShow: c,
			setShow: D,
			handleClick: T,
			handleMouseEnter: x,
			handleMouseLeave: S,
			handleFocus: y,
			handleBlur: b,
			syncPosition: g
		};
	},
	render() {
		let { positionManually: e, $slots: t } = this, n, r = !1;
		if (!e && (n = rf(t, "trigger"), n)) {
			n = ka(n), n = n.type === ua ? H("span", [n]) : n;
			let t = {
				onClick: this.handleClick,
				onMouseenter: this.handleMouseEnter,
				onMouseleave: this.handleMouseLeave,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur
			};
			if (n.type?.__popover__) r = !0, n.props || (n.props = {
				internalSyncTargetWithParent: !0,
				internalInheritedEventHandlers: []
			}), n.props.internalSyncTargetWithParent = !0, n.props.internalInheritedEventHandlers ? n.props.internalInheritedEventHandlers = [t, ...n.props.internalInheritedEventHandlers] : n.props.internalInheritedEventHandlers = [t];
			else {
				let { internalInheritedEventHandlers: r } = this, i = [t, ...r];
				tx(n, r ? "nested" : e ? "manual" : this.trigger, {
					onBlur: (e) => {
						i.forEach((t) => {
							t.onBlur(e);
						});
					},
					onFocus: (e) => {
						i.forEach((t) => {
							t.onFocus(e);
						});
					},
					onClick: (e) => {
						i.forEach((t) => {
							t.onClick(e);
						});
					},
					onMouseenter: (e) => {
						i.forEach((t) => {
							t.onMouseenter(e);
						});
					},
					onMouseleave: (e) => {
						i.forEach((t) => {
							t.onMouseleave(e);
						});
					}
				});
			}
		}
		return H(Gl, {
			ref: "binderInstRef",
			syncTarget: !r,
			syncTargetWithParent: this.internalSyncTargetWithParent
		}, { default: () => {
			this.mergedShowConsideringDisabledProp;
			let t = this.getMergedShow();
			return [
				this.internalTrapFocus && t ? Rn(H("div", { style: {
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				} }), [[eu, {
					enabled: t,
					zIndex: this.zIndex
				}]]) : null,
				e ? null : H(Kl, null, { default: () => n }),
				H(Qb, sf(this.$props, $b, Object.assign(Object.assign({}, this.$attrs), {
					showArrow: this.mergedShowArrow,
					show: t
				})), {
					default: () => {
						var e;
						return (e = this.$slots).default?.call(e);
					},
					header: () => {
						var e;
						return (e = this.$slots).header?.call(e);
					},
					footer: () => {
						var e;
						return (e = this.$slots).footer?.call(e);
					}
				})
			];
		} });
	}
}), ix = {
	closeIconSizeTiny: "12px",
	closeIconSizeSmall: "12px",
	closeIconSizeMedium: "14px",
	closeIconSizeLarge: "14px",
	closeSizeTiny: "16px",
	closeSizeSmall: "16px",
	closeSizeMedium: "18px",
	closeSizeLarge: "18px",
	padding: "0 7px",
	closeMargin: "0 0 0 4px"
}, ax = {
	name: "Tag",
	common: Q,
	self(e) {
		let { textColor2: t, primaryColorHover: n, primaryColorPressed: r, primaryColor: i, infoColor: a, successColor: o, warningColor: s, errorColor: c, baseColor: l, borderColor: u, tagColor: d, opacityDisabled: f, closeIconColor: p, closeIconColorHover: m, closeIconColorPressed: h, closeColorHover: g, closeColorPressed: _, borderRadiusSmall: v, fontSizeMini: y, fontSizeTiny: b, fontSizeSmall: x, fontSizeMedium: S, heightMini: C, heightTiny: w, heightSmall: T, heightMedium: E, buttonColor2Hover: D, buttonColor2Pressed: O, fontWeightStrong: k } = e;
		return Object.assign(Object.assign({}, ix), {
			closeBorderRadius: v,
			heightTiny: C,
			heightSmall: w,
			heightMedium: T,
			heightLarge: E,
			borderRadius: v,
			opacityDisabled: f,
			fontSizeTiny: y,
			fontSizeSmall: b,
			fontSizeMedium: x,
			fontSizeLarge: S,
			fontWeightStrong: k,
			textColorCheckable: t,
			textColorHoverCheckable: t,
			textColorPressedCheckable: t,
			textColorChecked: l,
			colorCheckable: "#0000",
			colorHoverCheckable: D,
			colorPressedCheckable: O,
			colorChecked: i,
			colorCheckedHover: n,
			colorCheckedPressed: r,
			border: `1px solid ${u}`,
			textColor: t,
			color: d,
			colorBordered: "#0000",
			closeIconColor: p,
			closeIconColorHover: m,
			closeIconColorPressed: h,
			closeColorHover: g,
			closeColorPressed: _,
			borderPrimary: `1px solid ${Y(i, { alpha: .3 })}`,
			textColorPrimary: i,
			colorPrimary: Y(i, { alpha: .16 }),
			colorBorderedPrimary: "#0000",
			closeIconColorPrimary: $c(i, { lightness: .7 }),
			closeIconColorHoverPrimary: $c(i, { lightness: .7 }),
			closeIconColorPressedPrimary: $c(i, { lightness: .7 }),
			closeColorHoverPrimary: Y(i, { alpha: .16 }),
			closeColorPressedPrimary: Y(i, { alpha: .12 }),
			borderInfo: `1px solid ${Y(a, { alpha: .3 })}`,
			textColorInfo: a,
			colorInfo: Y(a, { alpha: .16 }),
			colorBorderedInfo: "#0000",
			closeIconColorInfo: $c(a, { alpha: .7 }),
			closeIconColorHoverInfo: $c(a, { alpha: .7 }),
			closeIconColorPressedInfo: $c(a, { alpha: .7 }),
			closeColorHoverInfo: Y(a, { alpha: .16 }),
			closeColorPressedInfo: Y(a, { alpha: .12 }),
			borderSuccess: `1px solid ${Y(o, { alpha: .3 })}`,
			textColorSuccess: o,
			colorSuccess: Y(o, { alpha: .16 }),
			colorBorderedSuccess: "#0000",
			closeIconColorSuccess: $c(o, { alpha: .7 }),
			closeIconColorHoverSuccess: $c(o, { alpha: .7 }),
			closeIconColorPressedSuccess: $c(o, { alpha: .7 }),
			closeColorHoverSuccess: Y(o, { alpha: .16 }),
			closeColorPressedSuccess: Y(o, { alpha: .12 }),
			borderWarning: `1px solid ${Y(s, { alpha: .3 })}`,
			textColorWarning: s,
			colorWarning: Y(s, { alpha: .16 }),
			colorBorderedWarning: "#0000",
			closeIconColorWarning: $c(s, { alpha: .7 }),
			closeIconColorHoverWarning: $c(s, { alpha: .7 }),
			closeIconColorPressedWarning: $c(s, { alpha: .7 }),
			closeColorHoverWarning: Y(s, { alpha: .16 }),
			closeColorPressedWarning: Y(s, { alpha: .11 }),
			borderError: `1px solid ${Y(c, { alpha: .3 })}`,
			textColorError: c,
			colorError: Y(c, { alpha: .16 }),
			colorBorderedError: "#0000",
			closeIconColorError: $c(c, { alpha: .7 }),
			closeIconColorHoverError: $c(c, { alpha: .7 }),
			closeIconColorPressedError: $c(c, { alpha: .7 }),
			closeColorHoverError: Y(c, { alpha: .16 }),
			closeColorPressedError: Y(c, { alpha: .12 })
		});
	}
};
// node_modules/naive-ui/es/tag/styles/light.mjs
function ox(e) {
	let { textColor2: t, primaryColorHover: n, primaryColorPressed: r, primaryColor: i, infoColor: a, successColor: o, warningColor: s, errorColor: c, baseColor: l, borderColor: u, opacityDisabled: d, tagColor: f, closeIconColor: p, closeIconColorHover: m, closeIconColorPressed: h, borderRadiusSmall: g, fontSizeMini: _, fontSizeTiny: v, fontSizeSmall: y, fontSizeMedium: b, heightMini: x, heightTiny: S, heightSmall: C, heightMedium: w, closeColorHover: T, closeColorPressed: E, buttonColor2Hover: D, buttonColor2Pressed: O, fontWeightStrong: k } = e;
	return Object.assign(Object.assign({}, ix), {
		closeBorderRadius: g,
		heightTiny: x,
		heightSmall: S,
		heightMedium: C,
		heightLarge: w,
		borderRadius: g,
		opacityDisabled: d,
		fontSizeTiny: _,
		fontSizeSmall: v,
		fontSizeMedium: y,
		fontSizeLarge: b,
		fontWeightStrong: k,
		textColorCheckable: t,
		textColorHoverCheckable: t,
		textColorPressedCheckable: t,
		textColorChecked: l,
		colorCheckable: "#0000",
		colorHoverCheckable: D,
		colorPressedCheckable: O,
		colorChecked: i,
		colorCheckedHover: n,
		colorCheckedPressed: r,
		border: `1px solid ${u}`,
		textColor: t,
		color: f,
		colorBordered: "rgb(250, 250, 252)",
		closeIconColor: p,
		closeIconColorHover: m,
		closeIconColorPressed: h,
		closeColorHover: T,
		closeColorPressed: E,
		borderPrimary: `1px solid ${Y(i, { alpha: .3 })}`,
		textColorPrimary: i,
		colorPrimary: Y(i, { alpha: .12 }),
		colorBorderedPrimary: Y(i, { alpha: .1 }),
		closeIconColorPrimary: i,
		closeIconColorHoverPrimary: i,
		closeIconColorPressedPrimary: i,
		closeColorHoverPrimary: Y(i, { alpha: .12 }),
		closeColorPressedPrimary: Y(i, { alpha: .18 }),
		borderInfo: `1px solid ${Y(a, { alpha: .3 })}`,
		textColorInfo: a,
		colorInfo: Y(a, { alpha: .12 }),
		colorBorderedInfo: Y(a, { alpha: .1 }),
		closeIconColorInfo: a,
		closeIconColorHoverInfo: a,
		closeIconColorPressedInfo: a,
		closeColorHoverInfo: Y(a, { alpha: .12 }),
		closeColorPressedInfo: Y(a, { alpha: .18 }),
		borderSuccess: `1px solid ${Y(o, { alpha: .3 })}`,
		textColorSuccess: o,
		colorSuccess: Y(o, { alpha: .12 }),
		colorBorderedSuccess: Y(o, { alpha: .1 }),
		closeIconColorSuccess: o,
		closeIconColorHoverSuccess: o,
		closeIconColorPressedSuccess: o,
		closeColorHoverSuccess: Y(o, { alpha: .12 }),
		closeColorPressedSuccess: Y(o, { alpha: .18 }),
		borderWarning: `1px solid ${Y(s, { alpha: .35 })}`,
		textColorWarning: s,
		colorWarning: Y(s, { alpha: .15 }),
		colorBorderedWarning: Y(s, { alpha: .12 }),
		closeIconColorWarning: s,
		closeIconColorHoverWarning: s,
		closeIconColorPressedWarning: s,
		closeColorHoverWarning: Y(s, { alpha: .12 }),
		closeColorPressedWarning: Y(s, { alpha: .18 }),
		borderError: `1px solid ${Y(c, { alpha: .23 })}`,
		textColorError: c,
		colorError: Y(c, { alpha: .1 }),
		colorBorderedError: Y(c, { alpha: .08 }),
		closeIconColorError: c,
		closeIconColorHoverError: c,
		closeIconColorPressedError: c,
		closeColorHoverError: Y(c, { alpha: .12 }),
		closeColorPressedError: Y(c, { alpha: .18 })
	});
}
var sx = {
	name: "Tag",
	common: jy,
	self: ox
}, cx = {
	name: "Tag",
	style: W("tag", [K("rtl", "\n direction: rtl;\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-left) var(--n-close-margin-bottom) var(--n-close-margin-right);\n ", [
		G("icon", "\n margin: 0 0 0 4px;\n "),
		G("avatar", "\n margin: 0 0 0 6px;\n "),
		K("round", [
			G("icon", "\n margin: 0 calc((var(--n-height) - 8px) / -2) 0 4px;\n "),
			G("avatar", "\n margin: 0 calc((var(--n-height) - 8px) / -2) 0 6px;\n "),
			K("closable", "\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 4);\n ")
		]),
		K("icon, avatar", [K("round", "\n padding: 0 calc(var(--n-height) / 2) 0 calc(var(--n-height) / 3);\n ")])
	])])
}, lx = {
	color: Object,
	type: {
		type: String,
		default: "default"
	},
	round: Boolean,
	size: String,
	closable: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	}
}, ux = W("tag", "\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n", [
	K("strong", "\n font-weight: var(--n-font-weight-strong);\n "),
	G("border", "\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),
	G("icon", "\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),
	G("avatar", "\n display: flex;\n margin: 0 6px 0 0;\n "),
	G("close", "\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),
	K("round", "\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ", [
		G("icon", "\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),
		G("avatar", "\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),
		K("closable", "\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")
	]),
	K("icon, avatar", [K("round", "\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),
	K("disabled", "\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),
	K("checkable", "\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ", [pc("disabled", [U("&:hover", "background-color: var(--n-color-hover-checkable);", [pc("checked", "color: var(--n-text-color-hover-checkable);")]), U("&:active", "background-color: var(--n-color-pressed-checkable);", [pc("checked", "color: var(--n-text-color-pressed-checkable);")])]), K("checked", "\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ", [pc("disabled", [U("&:hover", "background-color: var(--n-color-checked-hover);"), U("&:active", "background-color: var(--n-color-checked-pressed);")])])])
]), dx = Object.assign(Object.assign(Object.assign({}, Yv.props), lx), {
	bordered: {
		type: Boolean,
		default: void 0
	},
	checked: Boolean,
	checkable: Boolean,
	strong: Boolean,
	triggerClickOnClose: Boolean,
	onClose: [Array, Function],
	onMouseenter: Function,
	onMouseleave: Function,
	"onUpdate:checked": Function,
	onUpdateChecked: Function,
	internalCloseFocusable: {
		type: Boolean,
		default: !0
	},
	internalCloseIsButtonTag: {
		type: Boolean,
		default: !0
	},
	onCheckedChange: Function
}), fx = El("n-tag"), px = /* @__PURE__ */ z({
	name: "Tag",
	props: dx,
	slots: Object,
	setup(e) {
		let t = /* @__PURE__ */ I(null), { mergedBorderedRef: n, mergedClsPrefixRef: r, inlineThemeDisabled: i, mergedRtlRef: a, mergedComponentPropsRef: o } = gf(e), s = V(() => e.size || o?.value?.Tag?.size || "medium"), c = Yv("Tag", "-tag", ux, sx, e, r);
		Bn(fx, { roundRef: /* @__PURE__ */ L(e, "round") });
		function l() {
			if (!e.disabled && e.checkable) {
				let { checked: t, onCheckedChange: n, onUpdateChecked: r, "onUpdate:checked": i } = e;
				r && r(!t), i && i(!t), n && n(!t);
			}
		}
		function u(t) {
			if (e.triggerClickOnClose || t.stopPropagation(), !e.disabled) {
				let { onClose: n } = e;
				n && tf(n, t);
			}
		}
		let d = { setTextContent(e) {
			let { value: n } = t;
			n && (n.textContent = e);
		} }, f = Vv("Tag", a, r), p = V(() => {
			let { type: t, color: { color: r, textColor: i } = {} } = e, a = s.value, { common: { cubicBezierEaseInOut: o }, self: { padding: l, closeMargin: u, borderRadius: d, opacityDisabled: f, textColorCheckable: p, textColorHoverCheckable: m, textColorPressedCheckable: h, textColorChecked: g, colorCheckable: _, colorHoverCheckable: v, colorPressedCheckable: y, colorChecked: b, colorCheckedHover: x, colorCheckedPressed: S, closeBorderRadius: C, fontWeightStrong: w, [q("colorBordered", t)]: T, [q("closeSize", a)]: E, [q("closeIconSize", a)]: D, [q("fontSize", a)]: O, [q("height", a)]: k, [q("color", t)]: A, [q("textColor", t)]: ee, [q("border", t)]: j, [q("closeIconColor", t)]: te, [q("closeIconColorHover", t)]: ne, [q("closeIconColorPressed", t)]: M, [q("closeColorHover", t)]: re, [q("closeColorPressed", t)]: ie } } = c.value, ae = Tc(u);
			return {
				"--n-font-weight-strong": w,
				"--n-avatar-size-override": `calc(${k} - 8px)`,
				"--n-bezier": o,
				"--n-border-radius": d,
				"--n-border": j,
				"--n-close-icon-size": D,
				"--n-close-color-pressed": ie,
				"--n-close-color-hover": re,
				"--n-close-border-radius": C,
				"--n-close-icon-color": te,
				"--n-close-icon-color-hover": ne,
				"--n-close-icon-color-pressed": M,
				"--n-close-icon-color-disabled": te,
				"--n-close-margin-top": ae.top,
				"--n-close-margin-right": ae.right,
				"--n-close-margin-bottom": ae.bottom,
				"--n-close-margin-left": ae.left,
				"--n-close-size": E,
				"--n-color": r || (n.value ? T : A),
				"--n-color-checkable": _,
				"--n-color-checked": b,
				"--n-color-checked-hover": x,
				"--n-color-checked-pressed": S,
				"--n-color-hover-checkable": v,
				"--n-color-pressed-checkable": y,
				"--n-font-size": O,
				"--n-height": k,
				"--n-opacity-disabled": f,
				"--n-padding": l,
				"--n-text-color": i || ee,
				"--n-text-color-checkable": p,
				"--n-text-color-checked": g,
				"--n-text-color-hover-checkable": m,
				"--n-text-color-pressed-checkable": h
			};
		}), m = i ? _f("tag", V(() => {
			let t = "", { type: r, color: { color: i, textColor: a } = {} } = e;
			return t += r[0], t += s.value[0], i && (t += `a${Ud(i)}`), a && (t += `b${Ud(a)}`), n.value && (t += "c"), t;
		}), p, e) : void 0;
		return Object.assign(Object.assign({}, d), {
			rtlEnabled: f,
			mergedClsPrefix: r,
			contentRef: t,
			mergedBordered: n,
			handleClick: l,
			handleCloseClick: u,
			cssVars: i ? void 0 : p,
			themeClass: m?.themeClass,
			onRender: m?.onRender
		});
	},
	render() {
		var e;
		let { mergedClsPrefix: t, rtlEnabled: n, closable: r, color: { borderColor: i } = {}, round: a, onRender: o, $slots: s } = this;
		o?.();
		let c = ff(s.avatar, (e) => e && H("div", { class: `${t}-tag__avatar` }, e)), l = ff(s.icon, (e) => e && H("div", { class: `${t}-tag__icon` }, e));
		return H("div", {
			class: [
				`${t}-tag`,
				this.themeClass,
				{
					[`${t}-tag--rtl`]: n,
					[`${t}-tag--strong`]: this.strong,
					[`${t}-tag--disabled`]: this.disabled,
					[`${t}-tag--checkable`]: this.checkable,
					[`${t}-tag--checked`]: this.checkable && this.checked,
					[`${t}-tag--round`]: a,
					[`${t}-tag--avatar`]: c,
					[`${t}-tag--icon`]: l,
					[`${t}-tag--closable`]: r
				}
			],
			style: this.cssVars,
			onClick: this.handleClick,
			onMouseenter: this.onMouseenter,
			onMouseleave: this.onMouseleave
		}, l || c, H("span", {
			class: `${t}-tag__content`,
			ref: "contentRef"
		}, (e = this.$slots).default?.call(e)), !this.checkable && r ? H(my, {
			clsPrefix: t,
			class: `${t}-tag__close`,
			disabled: this.disabled,
			onClick: this.handleCloseClick,
			focusable: this.internalCloseFocusable,
			round: a,
			isButtonTag: this.internalCloseIsButtonTag,
			absolute: !0
		}) : null, !this.checkable && this.mergedBordered ? H("div", {
			class: `${t}-tag__border`,
			style: { borderColor: i }
		}) : null);
	}
}), mx = /* @__PURE__ */ z({
	name: "InternalSelectionSuffix",
	props: {
		clsPrefix: {
			type: String,
			required: !0
		},
		showArrow: {
			type: Boolean,
			default: void 0
		},
		showClear: {
			type: Boolean,
			default: void 0
		},
		loading: {
			type: Boolean,
			default: !1
		},
		onClear: Function
	},
	setup(e, { slots: t }) {
		return () => {
			let { clsPrefix: n } = e;
			return H(yy, {
				clsPrefix: n,
				class: `${n}-base-suffix`,
				strokeWidth: 24,
				scale: .85,
				show: e.loading
			}, { default: () => e.showArrow ? H(fy, {
				clsPrefix: n,
				show: e.showClear,
				onClear: e.onClear
			}, { placeholder: () => H(Zv, {
				clsPrefix: n,
				class: `${n}-base-suffix__arrow`
			}, { default: () => df(t.default, () => [H(ty, null)]) }) }) : null });
		};
	}
}), hx = {
	paddingSingle: "0 26px 0 12px",
	paddingMultiple: "3px 26px 0 12px",
	clearSize: "16px",
	arrowSize: "16px"
}, gx = {
	name: "InternalSelection",
	common: Q,
	peers: { Popover: Ub },
	self(e) {
		let { borderRadius: t, textColor2: n, textColorDisabled: r, inputColor: i, inputColorDisabled: a, primaryColor: o, primaryColorHover: s, warningColor: c, warningColorHover: l, errorColor: u, errorColorHover: d, iconColor: f, iconColorDisabled: p, clearColor: m, clearColorHover: h, clearColorPressed: g, placeholderColor: _, placeholderColorDisabled: v, fontSizeTiny: y, fontSizeSmall: b, fontSizeMedium: x, fontSizeLarge: S, heightTiny: C, heightSmall: w, heightMedium: T, heightLarge: E, fontWeight: D } = e;
		return Object.assign(Object.assign({}, hx), {
			fontWeight: D,
			fontSizeTiny: y,
			fontSizeSmall: b,
			fontSizeMedium: x,
			fontSizeLarge: S,
			heightTiny: C,
			heightSmall: w,
			heightMedium: T,
			heightLarge: E,
			borderRadius: t,
			textColor: n,
			textColorDisabled: r,
			placeholderColor: _,
			placeholderColorDisabled: v,
			color: i,
			colorDisabled: a,
			colorActive: Y(o, { alpha: .1 }),
			border: "1px solid #0000",
			borderHover: `1px solid ${s}`,
			borderActive: `1px solid ${o}`,
			borderFocus: `1px solid ${s}`,
			boxShadowHover: "none",
			boxShadowActive: `0 0 8px 0 ${Y(o, { alpha: .4 })}`,
			boxShadowFocus: `0 0 8px 0 ${Y(o, { alpha: .4 })}`,
			caretColor: o,
			arrowColor: f,
			arrowColorDisabled: p,
			loadingColor: o,
			borderWarning: `1px solid ${c}`,
			borderHoverWarning: `1px solid ${l}`,
			borderActiveWarning: `1px solid ${c}`,
			borderFocusWarning: `1px solid ${l}`,
			boxShadowHoverWarning: "none",
			boxShadowActiveWarning: `0 0 8px 0 ${Y(c, { alpha: .4 })}`,
			boxShadowFocusWarning: `0 0 8px 0 ${Y(c, { alpha: .4 })}`,
			colorActiveWarning: Y(c, { alpha: .1 }),
			caretColorWarning: c,
			borderError: `1px solid ${u}`,
			borderHoverError: `1px solid ${d}`,
			borderActiveError: `1px solid ${u}`,
			borderFocusError: `1px solid ${d}`,
			boxShadowHoverError: "none",
			boxShadowActiveError: `0 0 8px 0 ${Y(u, { alpha: .4 })}`,
			boxShadowFocusError: `0 0 8px 0 ${Y(u, { alpha: .4 })}`,
			colorActiveError: Y(u, { alpha: .1 }),
			caretColorError: u,
			clearColor: m,
			clearColorHover: h,
			clearColorPressed: g
		});
	}
};
// node_modules/naive-ui/es/_internal/selection/styles/light.mjs
function _x(e) {
	let { borderRadius: t, textColor2: n, textColorDisabled: r, inputColor: i, inputColorDisabled: a, primaryColor: o, primaryColorHover: s, warningColor: c, warningColorHover: l, errorColor: u, errorColorHover: d, borderColor: f, iconColor: p, iconColorDisabled: m, clearColor: h, clearColorHover: g, clearColorPressed: _, placeholderColor: v, placeholderColorDisabled: y, fontSizeTiny: b, fontSizeSmall: x, fontSizeMedium: S, fontSizeLarge: C, heightTiny: w, heightSmall: T, heightMedium: E, heightLarge: D, fontWeight: O } = e;
	return Object.assign(Object.assign({}, hx), {
		fontSizeTiny: b,
		fontSizeSmall: x,
		fontSizeMedium: S,
		fontSizeLarge: C,
		heightTiny: w,
		heightSmall: T,
		heightMedium: E,
		heightLarge: D,
		borderRadius: t,
		fontWeight: O,
		textColor: n,
		textColorDisabled: r,
		placeholderColor: v,
		placeholderColorDisabled: y,
		color: i,
		colorDisabled: a,
		colorActive: i,
		border: `1px solid ${f}`,
		borderHover: `1px solid ${s}`,
		borderActive: `1px solid ${o}`,
		borderFocus: `1px solid ${s}`,
		boxShadowHover: "none",
		boxShadowActive: `0 0 0 2px ${Y(o, { alpha: .2 })}`,
		boxShadowFocus: `0 0 0 2px ${Y(o, { alpha: .2 })}`,
		caretColor: o,
		arrowColor: p,
		arrowColorDisabled: m,
		loadingColor: o,
		borderWarning: `1px solid ${c}`,
		borderHoverWarning: `1px solid ${l}`,
		borderActiveWarning: `1px solid ${c}`,
		borderFocusWarning: `1px solid ${l}`,
		boxShadowHoverWarning: "none",
		boxShadowActiveWarning: `0 0 0 2px ${Y(c, { alpha: .2 })}`,
		boxShadowFocusWarning: `0 0 0 2px ${Y(c, { alpha: .2 })}`,
		colorActiveWarning: i,
		caretColorWarning: c,
		borderError: `1px solid ${u}`,
		borderHoverError: `1px solid ${d}`,
		borderActiveError: `1px solid ${u}`,
		borderFocusError: `1px solid ${d}`,
		boxShadowHoverError: "none",
		boxShadowActiveError: `0 0 0 2px ${Y(u, { alpha: .2 })}`,
		boxShadowFocusError: `0 0 0 2px ${Y(u, { alpha: .2 })}`,
		colorActiveError: i,
		caretColorError: u,
		clearColor: h,
		clearColorHover: g,
		clearColorPressed: _
	});
}
var vx = Jv({
	name: "InternalSelection",
	common: jy,
	peers: { Popover: Hb },
	self: _x
}), yx = {
	name: "InternalSelection",
	style: W("base-selection", [K("rtl", "\n direction: rtl;\n --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-left) var(--n-padding-single-bottom) var(--n-padding-single-right);\n --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-left) var(--n-padding-multiple-bottom) var(--n-padding-multiple-right);\n ", [W("base-suffix", "\n right: unset;\n left: 10px;\n ")])])
}, bx = U([
	W("base-selection", "\n --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);\n --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);\n position: relative;\n z-index: auto;\n box-shadow: none;\n width: 100%;\n max-width: 100%;\n display: inline-block;\n vertical-align: bottom;\n border-radius: var(--n-border-radius);\n min-height: var(--n-height);\n line-height: 1.5;\n font-size: var(--n-font-size);\n ", [
		W("base-loading", "\n color: var(--n-loading-color);\n "),
		W("base-selection-tags", "min-height: var(--n-height);"),
		G("border, state-border", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border: var(--n-border);\n border-radius: inherit;\n transition:\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n "),
		G("state-border", "\n z-index: 1;\n border-color: #0000;\n "),
		W("base-suffix", "\n cursor: pointer;\n position: absolute;\n top: 50%;\n transform: translateY(-50%);\n right: 10px;\n ", [G("arrow", "\n font-size: var(--n-arrow-size);\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n ")]),
		W("base-selection-overlay", "\n display: flex;\n align-items: center;\n white-space: nowrap;\n pointer-events: none;\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n padding: var(--n-padding-single);\n transition: color .3s var(--n-bezier);\n ", [G("wrapper", "\n flex-basis: 0;\n flex-grow: 1;\n overflow: hidden;\n text-overflow: ellipsis;\n ")]),
		W("base-selection-placeholder", "\n color: var(--n-placeholder-color);\n ", [G("inner", "\n max-width: 100%;\n overflow: hidden;\n ")]),
		W("base-selection-tags", "\n cursor: pointer;\n outline: none;\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n display: flex;\n padding: var(--n-padding-multiple);\n flex-wrap: wrap;\n align-items: center;\n width: 100%;\n vertical-align: bottom;\n background-color: var(--n-color);\n border-radius: inherit;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),
		W("base-selection-label", "\n height: var(--n-height);\n display: inline-flex;\n width: 100%;\n vertical-align: bottom;\n cursor: pointer;\n outline: none;\n z-index: auto;\n box-sizing: border-box;\n position: relative;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: inherit;\n background-color: var(--n-color);\n align-items: center;\n ", [W("base-selection-input", "\n font-size: inherit;\n line-height: inherit;\n outline: none;\n cursor: pointer;\n box-sizing: border-box;\n border:none;\n width: 100%;\n padding: var(--n-padding-single);\n background-color: #0000;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n caret-color: var(--n-caret-color);\n ", [G("content", "\n text-overflow: ellipsis;\n overflow: hidden;\n white-space: nowrap; \n ")]), G("render-label", "\n color: var(--n-text-color);\n ")]),
		pc("disabled", [
			U("&:hover", [G("state-border", "\n box-shadow: var(--n-box-shadow-hover);\n border: var(--n-border-hover);\n ")]),
			K("focus", [G("state-border", "\n box-shadow: var(--n-box-shadow-focus);\n border: var(--n-border-focus);\n ")]),
			K("active", [
				G("state-border", "\n box-shadow: var(--n-box-shadow-active);\n border: var(--n-border-active);\n "),
				W("base-selection-label", "background-color: var(--n-color-active);"),
				W("base-selection-tags", "background-color: var(--n-color-active);")
			])
		]),
		K("disabled", "cursor: not-allowed;", [
			G("arrow", "\n color: var(--n-arrow-color-disabled);\n "),
			W("base-selection-label", "\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n ", [W("base-selection-input", "\n cursor: not-allowed;\n color: var(--n-text-color-disabled);\n "), G("render-label", "\n color: var(--n-text-color-disabled);\n ")]),
			W("base-selection-tags", "\n cursor: not-allowed;\n background-color: var(--n-color-disabled);\n "),
			W("base-selection-placeholder", "\n cursor: not-allowed;\n color: var(--n-placeholder-color-disabled);\n ")
		]),
		W("base-selection-input-tag", "\n height: calc(var(--n-height) - 6px);\n line-height: calc(var(--n-height) - 6px);\n outline: none;\n display: none;\n position: relative;\n margin-bottom: 3px;\n max-width: 100%;\n vertical-align: bottom;\n ", [G("input", "\n font-size: inherit;\n font-family: inherit;\n min-width: 1px;\n padding: 0;\n background-color: #0000;\n outline: none;\n border: none;\n max-width: 100%;\n overflow: hidden;\n width: 1em;\n line-height: inherit;\n cursor: pointer;\n color: var(--n-text-color);\n caret-color: var(--n-caret-color);\n "), G("mirror", "\n position: absolute;\n left: 0;\n top: 0;\n white-space: pre;\n visibility: hidden;\n user-select: none;\n -webkit-user-select: none;\n opacity: 0;\n ")]),
		["warning", "error"].map((e) => K(`${e}-status`, [G("state-border", `border: var(--n-border-${e});`), pc("disabled", [
			U("&:hover", [G("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),
			K("active", [
				G("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),
				W("base-selection-label", `background-color: var(--n-color-active-${e});`),
				W("base-selection-tags", `background-color: var(--n-color-active-${e});`)
			]),
			K("focus", [G("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])
		])]))
	]),
	W("base-selection-popover", "\n margin-bottom: -3px;\n display: flex;\n flex-wrap: wrap;\n margin-right: -8px;\n "),
	W("base-selection-tag-wrapper", "\n max-width: 100%;\n display: inline-flex;\n padding: 0 7px 3px 0;\n ", [U("&:last-child", "padding-right: 0;"), W("tag", "\n font-size: 14px;\n max-width: 100%;\n ", [G("content", "\n line-height: 1.25;\n text-overflow: ellipsis;\n overflow: hidden;\n ")])])
]), xx = /* @__PURE__ */ z({
	name: "InternalSelection",
	props: Object.assign(Object.assign({}, Yv.props), {
		clsPrefix: {
			type: String,
			required: !0
		},
		bordered: {
			type: Boolean,
			default: void 0
		},
		active: Boolean,
		pattern: {
			type: String,
			default: ""
		},
		placeholder: String,
		selectedOption: {
			type: Object,
			default: null
		},
		selectedOptions: {
			type: Array,
			default: null
		},
		labelField: {
			type: String,
			default: "label"
		},
		valueField: {
			type: String,
			default: "value"
		},
		multiple: Boolean,
		filterable: Boolean,
		clearable: Boolean,
		disabled: Boolean,
		size: {
			type: String,
			default: "medium"
		},
		loading: Boolean,
		autofocus: Boolean,
		showArrow: {
			type: Boolean,
			default: !0
		},
		inputProps: Object,
		focused: Boolean,
		renderTag: Function,
		onKeydown: Function,
		onClick: Function,
		onBlur: Function,
		onFocus: Function,
		onDeleteOption: Function,
		maxTagCount: [String, Number],
		ellipsisTagPopoverProps: Object,
		onClear: Function,
		onPatternInput: Function,
		onPatternFocus: Function,
		onPatternBlur: Function,
		renderLabel: Function,
		status: String,
		inlineThemeDisabled: Boolean,
		ignoreComposition: {
			type: Boolean,
			default: !0
		},
		onResize: Function
	}),
	setup(e) {
		let { mergedClsPrefixRef: t, mergedRtlRef: n } = gf(e), r = Vv("InternalSelection", n, t), i = /* @__PURE__ */ I(null), a = /* @__PURE__ */ I(null), o = /* @__PURE__ */ I(null), s = /* @__PURE__ */ I(null), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I(null), u = /* @__PURE__ */ I(null), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(null), m = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(!1), g = /* @__PURE__ */ I(!1), _ = Yv("InternalSelection", "-internal-selection", bx, vx, e, /* @__PURE__ */ L(e, "clsPrefix")), v = V(() => e.clearable && !e.disabled && (g.value || e.active)), y = V(() => e.selectedOption ? e.renderTag ? e.renderTag({
			option: e.selectedOption,
			handleClose: () => {}
		}) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : lf(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), b = V(() => {
			let t = e.selectedOption;
			if (t) return t[e.labelField];
		}), x = V(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
		function S() {
			var t;
			let { value: n } = i;
			if (n) {
				let { value: r } = a;
				r && (r.style.width = `${n.offsetWidth}px`, e.maxTagCount !== "responsive" && ((t = f.value) == null || t.sync({ showAllItemsBeforeCalculate: !1 })));
			}
		}
		function C() {
			let { value: e } = p;
			e && (e.style.display = "none");
		}
		function w() {
			let { value: e } = p;
			e && (e.style.display = "inline-block");
		}
		Wn(/* @__PURE__ */ L(e, "active"), (e) => {
			e || C();
		}), Wn(/* @__PURE__ */ L(e, "pattern"), () => {
			e.multiple && Cn(S);
		});
		function T(t) {
			let { onFocus: n } = e;
			n && n(t);
		}
		function E(t) {
			let { onBlur: n } = e;
			n && n(t);
		}
		function D(t) {
			let { onDeleteOption: n } = e;
			n && n(t);
		}
		function O(t) {
			let { onClear: n } = e;
			n && n(t);
		}
		function k(t) {
			let { onPatternInput: n } = e;
			n && n(t);
		}
		function A(e) {
			e.relatedTarget && o.value?.contains(e.relatedTarget) || T(e);
		}
		function ee(e) {
			o.value?.contains(e.relatedTarget) || E(e);
		}
		function j(e) {
			O(e);
		}
		function te() {
			g.value = !0;
		}
		function ne() {
			g.value = !1;
		}
		function M(t) {
			e.active && e.filterable && t.target !== a.value && t.preventDefault();
		}
		function re(e) {
			D(e);
		}
		let ie = /* @__PURE__ */ I(!1);
		function ae(t) {
			if (t.key === "Backspace" && !ie.value && !e.pattern.length) {
				let { selectedOptions: t } = e;
				t?.length && re(t[t.length - 1]);
			}
		}
		let oe = null;
		function se(t) {
			let { value: n } = i;
			n && (n.textContent = t.target.value, S()), e.ignoreComposition && ie.value ? oe = t : k(t);
		}
		function ce() {
			ie.value = !0;
		}
		function le() {
			ie.value = !1, e.ignoreComposition && k(oe), oe = null;
		}
		function ue(t) {
			var n;
			h.value = !0, (n = e.onPatternFocus) == null || n.call(e, t);
		}
		function de(t) {
			var n;
			h.value = !1, (n = e.onPatternBlur) == null || n.call(e, t);
		}
		function fe() {
			var t, n;
			if (e.filterable) h.value = !1, (t = l.value) == null || t.blur(), (n = a.value) == null || n.blur();
			else if (e.multiple) {
				let { value: e } = s;
				e?.blur();
			} else {
				let { value: e } = c;
				e?.blur();
			}
		}
		function pe() {
			var t, n, r;
			e.filterable ? (h.value = !1, (t = l.value) == null || t.focus()) : e.multiple ? (n = s.value) == null || n.focus() : (r = c.value) == null || r.focus();
		}
		function me() {
			let { value: e } = a;
			e && (w(), e.focus());
		}
		function he() {
			let { value: e } = a;
			e && e.blur();
		}
		function ge(e) {
			let { value: t } = u;
			t && t.setTextContent(`+${e}`);
		}
		function _e() {
			let { value: e } = d;
			return e;
		}
		function ve() {
			return a.value;
		}
		let ye = null;
		function be() {
			ye !== null && window.clearTimeout(ye);
		}
		function N() {
			e.active || (be(), ye = window.setTimeout(() => {
				x.value && (m.value = !0);
			}, 100));
		}
		function xe() {
			be();
		}
		function Se(e) {
			e || (be(), m.value = !1);
		}
		Wn(x, (e) => {
			e || (m.value = !1);
		}), Lr(() => {
			Un(() => {
				let t = l.value;
				t && (e.disabled ? t.removeAttribute("tabindex") : t.tabIndex = h.value ? -1 : 0);
			});
		}), Hd(o, e.onResize);
		let { inlineThemeDisabled: Ce } = e, we = V(() => {
			let { size: t } = e, { common: { cubicBezierEaseInOut: n }, self: { fontWeight: r, borderRadius: i, color: a, placeholderColor: o, textColor: s, paddingSingle: c, paddingMultiple: l, caretColor: u, colorDisabled: d, textColorDisabled: f, placeholderColorDisabled: p, colorActive: m, boxShadowFocus: h, boxShadowActive: g, boxShadowHover: v, border: y, borderFocus: b, borderHover: x, borderActive: S, arrowColor: C, arrowColorDisabled: w, loadingColor: T, colorActiveWarning: E, boxShadowFocusWarning: D, boxShadowActiveWarning: O, boxShadowHoverWarning: k, borderWarning: A, borderFocusWarning: ee, borderHoverWarning: j, borderActiveWarning: te, colorActiveError: ne, boxShadowFocusError: M, boxShadowActiveError: re, boxShadowHoverError: ie, borderError: ae, borderFocusError: oe, borderHoverError: se, borderActiveError: ce, clearColor: le, clearColorHover: ue, clearColorPressed: de, clearSize: fe, arrowSize: pe, [q("height", t)]: me, [q("fontSize", t)]: he } } = _.value, ge = Tc(c), _e = Tc(l);
			return {
				"--n-bezier": n,
				"--n-border": y,
				"--n-border-active": S,
				"--n-border-focus": b,
				"--n-border-hover": x,
				"--n-border-radius": i,
				"--n-box-shadow-active": g,
				"--n-box-shadow-focus": h,
				"--n-box-shadow-hover": v,
				"--n-caret-color": u,
				"--n-color": a,
				"--n-color-active": m,
				"--n-color-disabled": d,
				"--n-font-size": he,
				"--n-height": me,
				"--n-padding-single-top": ge.top,
				"--n-padding-multiple-top": _e.top,
				"--n-padding-single-right": ge.right,
				"--n-padding-multiple-right": _e.right,
				"--n-padding-single-left": ge.left,
				"--n-padding-multiple-left": _e.left,
				"--n-padding-single-bottom": ge.bottom,
				"--n-padding-multiple-bottom": _e.bottom,
				"--n-placeholder-color": o,
				"--n-placeholder-color-disabled": p,
				"--n-text-color": s,
				"--n-text-color-disabled": f,
				"--n-arrow-color": C,
				"--n-arrow-color-disabled": w,
				"--n-loading-color": T,
				"--n-color-active-warning": E,
				"--n-box-shadow-focus-warning": D,
				"--n-box-shadow-active-warning": O,
				"--n-box-shadow-hover-warning": k,
				"--n-border-warning": A,
				"--n-border-focus-warning": ee,
				"--n-border-hover-warning": j,
				"--n-border-active-warning": te,
				"--n-color-active-error": ne,
				"--n-box-shadow-focus-error": M,
				"--n-box-shadow-active-error": re,
				"--n-box-shadow-hover-error": ie,
				"--n-border-error": ae,
				"--n-border-focus-error": oe,
				"--n-border-hover-error": se,
				"--n-border-active-error": ce,
				"--n-clear-size": fe,
				"--n-clear-color": le,
				"--n-clear-color-hover": ue,
				"--n-clear-color-pressed": de,
				"--n-arrow-size": pe,
				"--n-font-weight": r
			};
		}), Te = Ce ? _f("internal-selection", V(() => e.size[0]), we, e) : void 0;
		return {
			mergedTheme: _,
			mergedClearable: v,
			mergedClsPrefix: t,
			rtlEnabled: r,
			patternInputFocused: h,
			filterablePlaceholder: y,
			label: b,
			selected: x,
			showTagsPanel: m,
			isComposing: ie,
			counterRef: u,
			counterWrapperRef: d,
			patternInputMirrorRef: i,
			patternInputRef: a,
			selfRef: o,
			multipleElRef: s,
			singleElRef: c,
			patternInputWrapperRef: l,
			overflowRef: f,
			inputTagElRef: p,
			handleMouseDown: M,
			handleFocusin: A,
			handleClear: j,
			handleMouseEnter: te,
			handleMouseLeave: ne,
			handleDeleteOption: re,
			handlePatternKeyDown: ae,
			handlePatternInputInput: se,
			handlePatternInputBlur: de,
			handlePatternInputFocus: ue,
			handleMouseEnterCounter: N,
			handleMouseLeaveCounter: xe,
			handleFocusout: ee,
			handleCompositionEnd: le,
			handleCompositionStart: ce,
			onPopoverUpdateShow: Se,
			focus: pe,
			focusInput: me,
			blur: fe,
			blurInput: he,
			updateCounter: ge,
			getCounter: _e,
			getTail: ve,
			renderLabel: e.renderLabel,
			cssVars: Ce ? void 0 : we,
			themeClass: Te?.themeClass,
			onRender: Te?.onRender
		};
	},
	render() {
		let { status: e, multiple: t, size: n, disabled: r, filterable: i, maxTagCount: a, bordered: o, clsPrefix: s, ellipsisTagPopoverProps: c, onRender: l, renderTag: u, renderLabel: d } = this;
		l?.();
		let f = a === "responsive", p = typeof a == "number", m = f || p, h = H(mf, null, { default: () => H(mx, {
			clsPrefix: s,
			loading: this.loading,
			showArrow: this.showArrow,
			showClear: this.mergedClearable && this.selected,
			onClear: this.handleClear
		}, { default: () => {
			var e;
			return (e = this.$slots).arrow?.call(e);
		} }) }), g;
		if (t) {
			let { labelField: e } = this, t = (t) => H("div", {
				class: `${s}-base-selection-tag-wrapper`,
				key: t.value
			}, u ? u({
				option: t,
				handleClose: () => {
					this.handleDeleteOption(t);
				}
			}) : H(px, {
				size: n,
				closable: !t.disabled,
				disabled: r,
				onClose: () => {
					this.handleDeleteOption(t);
				},
				internalCloseIsButtonTag: !1,
				internalCloseFocusable: !1
			}, { default: () => d ? d(t, !0) : lf(t[e], t, !0) })), o = () => (p ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(t), l = i ? H("div", {
				class: `${s}-base-selection-input-tag`,
				ref: "inputTagElRef",
				key: "__input-tag__"
			}, H("input", Object.assign({}, this.inputProps, {
				ref: "patternInputRef",
				tabindex: -1,
				disabled: r,
				value: this.pattern,
				autofocus: this.autofocus,
				class: `${s}-base-selection-input-tag__input`,
				onBlur: this.handlePatternInputBlur,
				onFocus: this.handlePatternInputFocus,
				onKeydown: this.handlePatternKeyDown,
				onInput: this.handlePatternInputInput,
				onCompositionstart: this.handleCompositionStart,
				onCompositionend: this.handleCompositionEnd
			})), H("span", {
				ref: "patternInputMirrorRef",
				class: `${s}-base-selection-input-tag__mirror`
			}, this.pattern)) : null, _ = f ? () => H("div", {
				class: `${s}-base-selection-tag-wrapper`,
				ref: "counterWrapperRef"
			}, H(px, {
				size: n,
				ref: "counterRef",
				onMouseenter: this.handleMouseEnterCounter,
				onMouseleave: this.handleMouseLeaveCounter,
				disabled: r
			})) : void 0, v;
			if (p) {
				let e = this.selectedOptions.length - a;
				e > 0 && (v = H("div", {
					class: `${s}-base-selection-tag-wrapper`,
					key: "__counter__"
				}, H(px, {
					size: n,
					ref: "counterRef",
					onMouseenter: this.handleMouseEnterCounter,
					disabled: r
				}, { default: () => `+${e}` })));
			}
			let y = f ? i ? H(Pd, {
				ref: "overflowRef",
				updateCounter: this.updateCounter,
				getCounter: this.getCounter,
				getTail: this.getTail,
				style: {
					width: "100%",
					display: "flex",
					overflow: "hidden"
				}
			}, {
				default: o,
				counter: _,
				tail: () => l
			}) : H(Pd, {
				ref: "overflowRef",
				updateCounter: this.updateCounter,
				getCounter: this.getCounter,
				style: {
					width: "100%",
					display: "flex",
					overflow: "hidden"
				}
			}, {
				default: o,
				counter: _
			}) : p && v ? o().concat(v) : o(), b = m ? () => H("div", { class: `${s}-base-selection-popover` }, f ? o() : this.selectedOptions.map(t)) : void 0, x = m ? Object.assign({
				show: this.showTagsPanel,
				trigger: "hover",
				overlap: !0,
				placement: "top",
				width: "trigger",
				onUpdateShow: this.onPopoverUpdateShow,
				theme: this.mergedTheme.peers.Popover,
				themeOverrides: this.mergedTheme.peerOverrides.Popover
			}, c) : null, S = !this.selected && (!this.active || !this.pattern && !this.isComposing) ? H("div", { class: `${s}-base-selection-placeholder ${s}-base-selection-overlay` }, H("div", { class: `${s}-base-selection-placeholder__inner` }, this.placeholder)) : null, C = i ? H("div", {
				ref: "patternInputWrapperRef",
				class: `${s}-base-selection-tags`
			}, y, f ? null : l, h) : H("div", {
				ref: "multipleElRef",
				class: `${s}-base-selection-tags`,
				tabindex: r ? void 0 : 0
			}, y, h);
			g = H(la, null, m ? H(rx, Object.assign({}, x, {
				scrollable: !0,
				style: "max-height: calc(var(--v-target-height) * 6.6);"
			}), {
				trigger: () => C,
				default: b
			}) : C, S);
		} else if (i) {
			let e = this.pattern || this.isComposing, t = this.active ? !e : !this.selected, n = !this.active && this.selected;
			g = H("div", {
				ref: "patternInputWrapperRef",
				class: `${s}-base-selection-label`,
				title: this.patternInputFocused ? void 0 : Qd(this.label)
			}, H("input", Object.assign({}, this.inputProps, {
				ref: "patternInputRef",
				class: `${s}-base-selection-input`,
				value: this.active ? this.pattern : "",
				placeholder: "",
				readonly: r,
				disabled: r,
				tabindex: -1,
				autofocus: this.autofocus,
				onFocus: this.handlePatternInputFocus,
				onBlur: this.handlePatternInputBlur,
				onInput: this.handlePatternInputInput,
				onCompositionstart: this.handleCompositionStart,
				onCompositionend: this.handleCompositionEnd
			})), n ? H("div", {
				class: `${s}-base-selection-label__render-label ${s}-base-selection-overlay`,
				key: "input"
			}, H("div", { class: `${s}-base-selection-overlay__wrapper` }, u ? u({
				option: this.selectedOption,
				handleClose: () => {}
			}) : d ? d(this.selectedOption, !0) : lf(this.label, this.selectedOption, !0))) : null, t ? H("div", {
				class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
				key: "placeholder"
			}, H("div", { class: `${s}-base-selection-overlay__wrapper` }, this.filterablePlaceholder)) : null, h);
		} else g = H("div", {
			ref: "singleElRef",
			class: `${s}-base-selection-label`,
			tabindex: this.disabled ? void 0 : 0
		}, this.label === void 0 ? H("div", {
			class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
			key: "placeholder"
		}, H("div", { class: `${s}-base-selection-placeholder__inner` }, this.placeholder)) : H("div", {
			class: `${s}-base-selection-input`,
			title: Qd(this.label),
			key: "input"
		}, H("div", { class: `${s}-base-selection-input__content` }, u ? u({
			option: this.selectedOption,
			handleClose: () => {}
		}) : d ? d(this.selectedOption, !0) : lf(this.label, this.selectedOption, !0))), h);
		return H("div", {
			ref: "selfRef",
			class: [
				`${s}-base-selection`,
				this.rtlEnabled && `${s}-base-selection--rtl`,
				this.themeClass,
				e && `${s}-base-selection--${e}-status`,
				{
					[`${s}-base-selection--active`]: this.active,
					[`${s}-base-selection--selected`]: this.selected || this.active && this.pattern,
					[`${s}-base-selection--disabled`]: this.disabled,
					[`${s}-base-selection--multiple`]: this.multiple,
					[`${s}-base-selection--focus`]: this.focused
				}
			],
			style: this.cssVars,
			onClick: this.onClick,
			onMouseenter: this.handleMouseEnter,
			onMouseleave: this.handleMouseLeave,
			onKeydown: this.onKeydown,
			onFocusin: this.handleFocusin,
			onFocusout: this.handleFocusout,
			onMousedown: this.handleMouseDown
		}, g, o ? H("div", { class: `${s}-base-selection__border` }) : null, o ? H("div", { class: `${s}-base-selection__state-border` }) : null);
	}
}), { cubicBezierEaseInOut: Sx } = Hv;
function Cx({ duration: e = ".2s", delay: t = ".1s" } = {}) {
	return [
		U("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }),
		U("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", "\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),
		U("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Sx},
 max-width ${e} ${Sx} ${t},
 margin-left ${e} ${Sx} ${t},
 margin-right ${e} ${Sx} ${t};
 `),
		U("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Sx} ${t},
 max-width ${e} ${Sx},
 margin-left ${e} ${Sx},
 margin-right ${e} ${Sx};
 `)
	];
}
// node_modules/naive-ui/es/_internal/wave/src/styles/index.cssr.mjs
var wx = W("base-wave", "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"), Tx = /* @__PURE__ */ z({
	name: "BaseWave",
	props: { clsPrefix: {
		type: String,
		required: !0
	} },
	setup(e) {
		qv("-base-wave", wx, /* @__PURE__ */ L(e, "clsPrefix"));
		let t = /* @__PURE__ */ I(null), n = /* @__PURE__ */ I(!1), r = null;
		return Br(() => {
			r !== null && window.clearTimeout(r);
		}), {
			active: n,
			selfRef: t,
			play() {
				r !== null && (window.clearTimeout(r), n.value = !1, r = null), Cn(() => {
					var e;
					(e = t.value) == null || e.offsetHeight, n.value = !0, r = window.setTimeout(() => {
						n.value = !1, r = null;
					}, 1e3);
				});
			}
		};
	},
	render() {
		let { clsPrefix: e } = this;
		return H("div", {
			ref: "selfRef",
			"aria-hidden": !0,
			class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
		});
	}
}), Ex = {
	iconMargin: "11px 8px 0 12px",
	iconMarginRtl: "11px 12px 0 8px",
	iconSize: "24px",
	closeIconSize: "16px",
	closeSize: "20px",
	closeMargin: "13px 14px 0 0",
	closeMarginRtl: "13px 0 0 14px",
	padding: "13px"
}, Dx = {
	name: "Alert",
	common: Q,
	self(e) {
		let { lineHeight: t, borderRadius: n, fontWeightStrong: r, dividerColor: i, inputColor: a, textColor1: o, textColor2: s, closeColorHover: c, closeColorPressed: l, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, infoColorSuppl: p, successColorSuppl: m, warningColorSuppl: h, errorColorSuppl: g, fontSize: _ } = e;
		return Object.assign(Object.assign({}, Ex), {
			fontSize: _,
			lineHeight: t,
			titleFontWeight: r,
			borderRadius: n,
			border: `1px solid ${i}`,
			color: a,
			titleTextColor: o,
			iconColor: s,
			contentTextColor: s,
			closeBorderRadius: n,
			closeColorHover: c,
			closeColorPressed: l,
			closeIconColor: u,
			closeIconColorHover: d,
			closeIconColorPressed: f,
			borderInfo: `1px solid ${Y(p, { alpha: .35 })}`,
			colorInfo: Y(p, { alpha: .25 }),
			titleTextColorInfo: o,
			iconColorInfo: p,
			contentTextColorInfo: s,
			closeColorHoverInfo: c,
			closeColorPressedInfo: l,
			closeIconColorInfo: u,
			closeIconColorHoverInfo: d,
			closeIconColorPressedInfo: f,
			borderSuccess: `1px solid ${Y(m, { alpha: .35 })}`,
			colorSuccess: Y(m, { alpha: .25 }),
			titleTextColorSuccess: o,
			iconColorSuccess: m,
			contentTextColorSuccess: s,
			closeColorHoverSuccess: c,
			closeColorPressedSuccess: l,
			closeIconColorSuccess: u,
			closeIconColorHoverSuccess: d,
			closeIconColorPressedSuccess: f,
			borderWarning: `1px solid ${Y(h, { alpha: .35 })}`,
			colorWarning: Y(h, { alpha: .25 }),
			titleTextColorWarning: o,
			iconColorWarning: h,
			contentTextColorWarning: s,
			closeColorHoverWarning: c,
			closeColorPressedWarning: l,
			closeIconColorWarning: u,
			closeIconColorHoverWarning: d,
			closeIconColorPressedWarning: f,
			borderError: `1px solid ${Y(g, { alpha: .35 })}`,
			colorError: Y(g, { alpha: .25 }),
			titleTextColorError: o,
			iconColorError: g,
			contentTextColorError: s,
			closeColorHoverError: c,
			closeColorPressedError: l,
			closeIconColorError: u,
			closeIconColorHoverError: d,
			closeIconColorPressedError: f
		});
	}
};
// node_modules/naive-ui/es/alert/styles/light.mjs
function Ox(e) {
	let { lineHeight: t, borderRadius: n, fontWeightStrong: r, baseColor: i, dividerColor: a, actionColor: o, textColor1: s, textColor2: c, closeColorHover: l, closeColorPressed: u, closeIconColor: d, closeIconColorHover: f, closeIconColorPressed: p, infoColor: m, successColor: h, warningColor: g, errorColor: _, fontSize: v } = e;
	return Object.assign(Object.assign({}, Ex), {
		fontSize: v,
		lineHeight: t,
		titleFontWeight: r,
		borderRadius: n,
		border: `1px solid ${a}`,
		color: o,
		titleTextColor: s,
		iconColor: c,
		contentTextColor: c,
		closeBorderRadius: n,
		closeColorHover: l,
		closeColorPressed: u,
		closeIconColor: d,
		closeIconColorHover: f,
		closeIconColorPressed: p,
		borderInfo: `1px solid ${J(i, Y(m, { alpha: .25 }))}`,
		colorInfo: J(i, Y(m, { alpha: .08 })),
		titleTextColorInfo: s,
		iconColorInfo: m,
		contentTextColorInfo: c,
		closeColorHoverInfo: l,
		closeColorPressedInfo: u,
		closeIconColorInfo: d,
		closeIconColorHoverInfo: f,
		closeIconColorPressedInfo: p,
		borderSuccess: `1px solid ${J(i, Y(h, { alpha: .25 }))}`,
		colorSuccess: J(i, Y(h, { alpha: .08 })),
		titleTextColorSuccess: s,
		iconColorSuccess: h,
		contentTextColorSuccess: c,
		closeColorHoverSuccess: l,
		closeColorPressedSuccess: u,
		closeIconColorSuccess: d,
		closeIconColorHoverSuccess: f,
		closeIconColorPressedSuccess: p,
		borderWarning: `1px solid ${J(i, Y(g, { alpha: .33 }))}`,
		colorWarning: J(i, Y(g, { alpha: .08 })),
		titleTextColorWarning: s,
		iconColorWarning: g,
		contentTextColorWarning: c,
		closeColorHoverWarning: l,
		closeColorPressedWarning: u,
		closeIconColorWarning: d,
		closeIconColorHoverWarning: f,
		closeIconColorPressedWarning: p,
		borderError: `1px solid ${J(i, Y(_, { alpha: .25 }))}`,
		colorError: J(i, Y(_, { alpha: .08 })),
		titleTextColorError: s,
		iconColorError: _,
		contentTextColorError: c,
		closeColorHoverError: l,
		closeColorPressedError: u,
		closeIconColorError: d,
		closeIconColorHoverError: f,
		closeIconColorPressedError: p
	});
}
var kx = {
	name: "Alert",
	common: jy,
	self: Ox
}, Ax = {
	name: "Alert",
	style: W("alert", [K("rtl", "\n direction: rtl;\n ", [
		G("icon", "\n left: unset;\n right: 0;\n margin: var(--n-icon-margin-rtl);\n "),
		K("show-icon", [W("alert-body", "\n padding-left: var(--n-padding);\n padding-right: calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right));\n ")]),
		G("close", "\n position: absolute;\n right: unset;\n left: 0;\n margin: var(--n-close-margin-rtl);\n ")
	])])
}, { cubicBezierEaseInOut: jx, cubicBezierEaseOut: Mx, cubicBezierEaseIn: Nx } = Hv;
function Px({ overflow: e = "hidden", duration: t = ".3s", originalTransition: n = "", leavingDelay: r = "0s", foldPadding: i = !1, enterToProps: a = void 0, leaveToProps: o = void 0, reverse: s = !1 } = {}) {
	let c = s ? "leave" : "enter", l = s ? "enter" : "leave";
	return [
		U(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`, Object.assign(Object.assign({}, a), { opacity: 1 })),
		U(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`, Object.assign(Object.assign({}, o), {
			opacity: 0,
			marginTop: "0 !important",
			marginBottom: "0 !important",
			paddingTop: i ? "0 !important" : void 0,
			paddingBottom: i ? "0 !important" : void 0
		})),
		U(`&.fade-in-height-expand-transition-${l}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${jx} ${r},
 opacity ${t} ${Mx} ${r},
 margin-top ${t} ${jx} ${r},
 margin-bottom ${t} ${jx} ${r},
 padding-top ${t} ${jx} ${r},
 padding-bottom ${t} ${jx} ${r}
 ${n ? `,${n}` : ""}
 `),
		U(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${jx},
 opacity ${t} ${Nx},
 margin-top ${t} ${jx},
 margin-bottom ${t} ${jx},
 padding-top ${t} ${jx},
 padding-bottom ${t} ${jx}
 ${n ? `,${n}` : ""}
 `)
	];
}
// node_modules/naive-ui/es/alert/src/styles/index.cssr.mjs
var Fx = W("alert", "\n line-height: var(--n-line-height);\n border-radius: var(--n-border-radius);\n position: relative;\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n text-align: start;\n word-break: break-word;\n", [
	G("border", "\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n transition: border-color .3s var(--n-bezier);\n border: var(--n-border);\n pointer-events: none;\n "),
	K("closable", [W("alert-body", [G("title", "\n padding-right: 24px;\n ")])]),
	G("icon", { color: "var(--n-icon-color)" }),
	W("alert-body", { padding: "var(--n-padding)" }, [G("title", { color: "var(--n-title-text-color)" }), G("content", { color: "var(--n-content-text-color)" })]),
	Px({
		originalTransition: "transform .3s var(--n-bezier)",
		enterToProps: { transform: "scale(1)" },
		leaveToProps: { transform: "scale(0.9)" }
	}),
	G("icon", "\n position: absolute;\n left: 0;\n top: 0;\n align-items: center;\n justify-content: center;\n display: flex;\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n margin: var(--n-icon-margin);\n "),
	G("close", "\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n "),
	K("show-icon", [W("alert-body", { paddingLeft: "calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))" })]),
	K("right-adjust", [W("alert-body", { paddingRight: "calc(var(--n-close-size) + var(--n-padding) + 2px)" })]),
	W("alert-body", "\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n ", [G("title", "\n transition: color .3s var(--n-bezier);\n font-size: 16px;\n line-height: 19px;\n font-weight: var(--n-title-font-weight);\n ", [U("& +", [G("content", { marginTop: "9px" })])]), G("content", {
		transition: "color .3s var(--n-bezier)",
		fontSize: "var(--n-font-size)"
	})]),
	G("icon", { transition: "color .3s var(--n-bezier)" })
]), Ix = /* @__PURE__ */ z({
	name: "Alert",
	inheritAttrs: !1,
	props: Object.assign(Object.assign({}, Yv.props), {
		title: String,
		showIcon: {
			type: Boolean,
			default: !0
		},
		type: {
			type: String,
			default: "default"
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		closable: Boolean,
		onClose: Function,
		onAfterLeave: Function,
		onAfterHide: Function
	}),
	slots: Object,
	setup(e) {
		let { mergedClsPrefixRef: t, mergedBorderedRef: n, inlineThemeDisabled: r, mergedRtlRef: i } = gf(e), a = Yv("Alert", "-alert", Fx, kx, e, t), o = Vv("Alert", i, t), s = V(() => {
			let { common: { cubicBezierEaseInOut: t }, self: n } = a.value, { fontSize: r, borderRadius: i, titleFontWeight: o, lineHeight: s, iconSize: c, iconMargin: l, iconMarginRtl: u, closeIconSize: d, closeBorderRadius: f, closeSize: p, closeMargin: m, closeMarginRtl: h, padding: g } = n, { type: _ } = e, { left: v, right: y } = Tc(l);
			return {
				"--n-bezier": t,
				"--n-color": n[q("color", _)],
				"--n-close-icon-size": d,
				"--n-close-border-radius": f,
				"--n-close-color-hover": n[q("closeColorHover", _)],
				"--n-close-color-pressed": n[q("closeColorPressed", _)],
				"--n-close-icon-color": n[q("closeIconColor", _)],
				"--n-close-icon-color-hover": n[q("closeIconColorHover", _)],
				"--n-close-icon-color-pressed": n[q("closeIconColorPressed", _)],
				"--n-icon-color": n[q("iconColor", _)],
				"--n-border": n[q("border", _)],
				"--n-title-text-color": n[q("titleTextColor", _)],
				"--n-content-text-color": n[q("contentTextColor", _)],
				"--n-line-height": s,
				"--n-border-radius": i,
				"--n-font-size": r,
				"--n-title-font-weight": o,
				"--n-icon-size": c,
				"--n-icon-margin": l,
				"--n-icon-margin-rtl": u,
				"--n-close-size": p,
				"--n-close-margin": m,
				"--n-close-margin-rtl": h,
				"--n-padding": g,
				"--n-icon-margin-left": v,
				"--n-icon-margin-right": y
			};
		}), c = r ? _f("alert", V(() => e.type[0]), s, e) : void 0, l = /* @__PURE__ */ I(!0), u = () => {
			let { onAfterLeave: t, onAfterHide: n } = e;
			t && t(), n && n();
		};
		return {
			rtlEnabled: o,
			mergedClsPrefix: t,
			mergedBordered: n,
			visible: l,
			handleCloseClick: () => {
				Promise.resolve(e.onClose?.call(e)).then((e) => {
					e !== !1 && (l.value = !1);
				});
			},
			handleAfterLeave: () => {
				u();
			},
			mergedTheme: a,
			cssVars: r ? void 0 : s,
			themeClass: c?.themeClass,
			onRender: c?.onRender
		};
	},
	render() {
		var e;
		return (e = this.onRender) == null || e.call(this), H(hy, { onAfterLeave: this.handleAfterLeave }, { default: () => {
			let { mergedClsPrefix: e, $slots: t } = this, n = {
				class: [
					`${e}-alert`,
					this.themeClass,
					this.closable && `${e}-alert--closable`,
					this.showIcon && `${e}-alert--show-icon`,
					!this.title && this.closable && `${e}-alert--right-adjust`,
					this.rtlEnabled && `${e}-alert--rtl`
				],
				style: this.cssVars,
				role: "alert"
			};
			return this.visible ? H("div", Object.assign({}, Fa(this.$attrs, n)), this.closable && H(my, {
				clsPrefix: e,
				class: `${e}-alert__close`,
				onClick: this.handleCloseClick
			}), this.bordered && H("div", { class: `${e}-alert__border` }), this.showIcon && H("div", {
				class: `${e}-alert__icon`,
				"aria-hidden": "true"
			}, df(t.icon, () => [H(Zv, { clsPrefix: e }, { default: () => {
				switch (this.type) {
					case "success": return H(sy, null);
					case "info": return H(oy, null);
					case "warning": return H(cy, null);
					case "error": return H(ay, null);
					default: return null;
				}
			} })])), H("div", { class: [`${e}-alert-body`, this.mergedBordered && `${e}-alert-body--bordered`] }, ff(t.header, (t) => {
				let n = t || this.title;
				return n ? H("div", { class: `${e}-alert-body__title` }, n) : null;
			}), t.default && H("div", { class: `${e}-alert-body__content` }, t))) : null;
		} });
	}
}), Lx = {
	linkFontSize: "13px",
	linkPadding: "0 0 0 16px",
	railWidth: "4px"
};
// node_modules/naive-ui/es/anchor/styles/light.mjs
function Rx(e) {
	let { borderRadius: t, railColor: n, primaryColor: r, primaryColorHover: i, primaryColorPressed: a, textColor2: o } = e;
	return Object.assign(Object.assign({}, Lx), {
		borderRadius: t,
		railColor: n,
		railColorActive: r,
		linkColor: Y(r, { alpha: .15 }),
		linkTextColor: o,
		linkTextColorHover: i,
		linkTextColorPressed: a,
		linkTextColorActive: r
	});
}
// node_modules/naive-ui/es/anchor/styles/dark.mjs
var zx = {
	name: "Anchor",
	common: Q,
	self: Rx
}, Bx = Pl && "chrome" in window;
Pl && navigator.userAgent.includes("Firefox");
var Vx = Pl && navigator.userAgent.includes("Safari") && !Bx, Hx = {
	paddingTiny: "0 8px",
	paddingSmall: "0 10px",
	paddingMedium: "0 12px",
	paddingLarge: "0 14px",
	clearSize: "16px"
};
// node_modules/naive-ui/es/input/styles/dark.mjs
function Ux(e) {
	let { textColor2: t, textColor3: n, textColorDisabled: r, primaryColor: i, primaryColorHover: a, inputColor: o, inputColorDisabled: s, warningColor: c, warningColorHover: l, errorColor: u, errorColorHover: d, borderRadius: f, lineHeight: p, fontSizeTiny: m, fontSizeSmall: h, fontSizeMedium: g, fontSizeLarge: _, heightTiny: v, heightSmall: y, heightMedium: b, heightLarge: x, clearColor: S, clearColorHover: C, clearColorPressed: w, placeholderColor: T, placeholderColorDisabled: E, iconColor: D, iconColorDisabled: O, iconColorHover: k, iconColorPressed: A, fontWeight: ee } = e;
	return Object.assign(Object.assign({}, Hx), {
		fontWeight: ee,
		countTextColorDisabled: r,
		countTextColor: n,
		heightTiny: v,
		heightSmall: y,
		heightMedium: b,
		heightLarge: x,
		fontSizeTiny: m,
		fontSizeSmall: h,
		fontSizeMedium: g,
		fontSizeLarge: _,
		lineHeight: p,
		lineHeightTextarea: p,
		borderRadius: f,
		iconSize: "16px",
		groupLabelColor: o,
		textColor: t,
		textColorDisabled: r,
		textDecorationColor: t,
		groupLabelTextColor: t,
		caretColor: i,
		placeholderColor: T,
		placeholderColorDisabled: E,
		color: o,
		colorDisabled: s,
		colorFocus: Y(i, { alpha: .1 }),
		groupLabelBorder: "1px solid #0000",
		border: "1px solid #0000",
		borderHover: `1px solid ${a}`,
		borderDisabled: "1px solid #0000",
		borderFocus: `1px solid ${a}`,
		boxShadowFocus: `0 0 8px 0 ${Y(i, { alpha: .3 })}`,
		loadingColor: i,
		loadingColorWarning: c,
		borderWarning: `1px solid ${c}`,
		borderHoverWarning: `1px solid ${l}`,
		colorFocusWarning: Y(c, { alpha: .1 }),
		borderFocusWarning: `1px solid ${l}`,
		boxShadowFocusWarning: `0 0 8px 0 ${Y(c, { alpha: .3 })}`,
		caretColorWarning: c,
		loadingColorError: u,
		borderError: `1px solid ${u}`,
		borderHoverError: `1px solid ${d}`,
		colorFocusError: Y(u, { alpha: .1 }),
		borderFocusError: `1px solid ${d}`,
		boxShadowFocusError: `0 0 8px 0 ${Y(u, { alpha: .3 })}`,
		caretColorError: u,
		clearColor: S,
		clearColorHover: C,
		clearColorPressed: w,
		iconColor: D,
		iconColorDisabled: O,
		iconColorHover: k,
		iconColorPressed: A,
		suffixTextColor: t
	});
}
var Wx = Jv({
	name: "Input",
	common: Q,
	peers: { Scrollbar: Fy },
	self: Ux
}), Gx = {
	name: "Input",
	style: W("input", [K("rtl", "\n direction: rtl;\n ", [
		G("prefix", {
			marginRight: 0,
			marginLeft: "4px"
		}),
		G("suffix", {
			marginRight: "4px",
			marginLeft: 0
		}),
		K("textarea", "width: 100%;", [W("input-word-count", "\n left: var(--n-padding-right);\n right: unset;\n ")]),
		W("input-word-count", "\n margin-left: 0;\n margin-right: 4px;\n ")
	])])
};
// node_modules/naive-ui/es/select/src/utils.mjs
function Kx(e) {
	return e.type === "group";
}
function qx(e) {
	return e.type === "ignored";
}
function Jx(e, t) {
	try {
		return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
	} catch {
		return !1;
	}
}
function Yx(e, t) {
	return {
		getIsGroup: Kx,
		getIgnored: qx,
		getKey(t) {
			return Kx(t) ? t.name || t.key || "key-required" : t[e];
		},
		getChildren(e) {
			return e[t];
		}
	};
}
function Xx(e, t, n, r) {
	if (!t) return e;
	function i(e) {
		if (!Array.isArray(e)) return [];
		let a = [];
		for (let o of e) if (Kx(o)) {
			let e = i(o[r]);
			e.length && a.push(Object.assign({}, o, { [r]: e }));
		} else if (qx(o)) continue;
		else t(n, o) && a.push(o);
		return a;
	}
	return i(e);
}
function Zx(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		Kx(e) ? e[n].forEach((e) => {
			r.set(e[t], e);
		}) : r.set(e[t], e);
	}), r;
}
// node_modules/naive-ui/es/auto-complete/styles/light.mjs
function Qx(e) {
	let { boxShadow2: t } = e;
	return { menuBoxShadow: t };
}
// node_modules/naive-ui/es/auto-complete/styles/dark.mjs
var $x = {
	name: "AutoComplete",
	common: Q,
	peers: {
		InternalSelectMenu: Ab,
		Input: Wx
	},
	self: Qx
};
// node_modules/naive-ui/es/avatar/styles/light.mjs
function eS(e) {
	let { borderRadius: t, avatarColor: n, cardColor: r, fontSize: i, heightTiny: a, heightSmall: o, heightMedium: s, heightLarge: c, heightHuge: l, modalColor: u, popoverColor: d } = e;
	return {
		borderRadius: t,
		fontSize: i,
		border: `2px solid ${r}`,
		heightTiny: a,
		heightSmall: o,
		heightMedium: s,
		heightLarge: c,
		heightHuge: l,
		color: J(r, n),
		colorModal: J(u, n),
		colorPopover: J(d, n)
	};
}
var tS = {
	name: "Avatar",
	common: Q,
	self: eS
};
// node_modules/naive-ui/es/avatar-group/styles/light.mjs
function nS() {
	return { gap: "-12px" };
}
// node_modules/naive-ui/es/avatar-group/styles/dark.mjs
var rS = {
	name: "AvatarGroup",
	common: Q,
	peers: { Avatar: tS },
	self: nS
}, iS = {
	width: "44px",
	height: "44px",
	borderRadius: "22px",
	iconSize: "26px"
}, aS = {
	name: "BackTop",
	common: Q,
	self(e) {
		let { popoverColor: t, textColor2: n, primaryColorHover: r, primaryColorPressed: i } = e;
		return Object.assign(Object.assign({}, iS), {
			color: t,
			textColor: n,
			iconColor: n,
			iconColorHover: r,
			iconColorPressed: i,
			boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
			boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
		});
	}
}, oS = {
	name: "Badge",
	common: Q,
	self(e) {
		let { errorColorSuppl: t, infoColorSuppl: n, successColorSuppl: r, warningColorSuppl: i, fontFamily: a } = e;
		return {
			color: t,
			colorInfo: n,
			colorSuccess: r,
			colorError: t,
			colorWarning: i,
			fontSize: "12px",
			fontFamily: a
		};
	}
}, sS = { fontWeightActive: "400" };
// node_modules/naive-ui/es/breadcrumb/styles/light.mjs
function cS(e) {
	let { fontSize: t, textColor3: n, textColor2: r, borderRadius: i, buttonColor2Hover: a, buttonColor2Pressed: o } = e;
	return Object.assign(Object.assign({}, sS), {
		fontSize: t,
		itemLineHeight: "1.25",
		itemTextColor: n,
		itemTextColorHover: r,
		itemTextColorPressed: r,
		itemTextColorActive: r,
		itemBorderRadius: i,
		itemColorHover: a,
		itemColorPressed: o,
		separatorColor: n
	});
}
// node_modules/naive-ui/es/breadcrumb/styles/dark.mjs
var lS = {
	name: "Breadcrumb",
	common: Q,
	self: cS
};
// node_modules/naive-ui/es/_utils/color/index.mjs
function uS(e) {
	return J(e, [
		255,
		255,
		255,
		.16
	]);
}
function dS(e) {
	return J(e, [
		0,
		0,
		0,
		.12
	]);
}
// node_modules/naive-ui/es/button-group/src/context.mjs
var fS = El("n-button-group"), pS = {
	paddingTiny: "0 6px",
	paddingSmall: "0 10px",
	paddingMedium: "0 14px",
	paddingLarge: "0 18px",
	paddingRoundTiny: "0 10px",
	paddingRoundSmall: "0 14px",
	paddingRoundMedium: "0 18px",
	paddingRoundLarge: "0 22px",
	iconMarginTiny: "6px",
	iconMarginSmall: "6px",
	iconMarginMedium: "6px",
	iconMarginLarge: "6px",
	iconSizeTiny: "14px",
	iconSizeSmall: "18px",
	iconSizeMedium: "18px",
	iconSizeLarge: "20px",
	rippleDuration: ".6s"
};
// node_modules/naive-ui/es/button/styles/light.mjs
function mS(e) {
	let { heightTiny: t, heightSmall: n, heightMedium: r, heightLarge: i, borderRadius: a, fontSizeTiny: o, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: l, opacityDisabled: u, textColor2: d, textColor3: f, primaryColorHover: p, primaryColorPressed: m, borderColor: h, primaryColor: g, baseColor: _, infoColor: v, infoColorHover: y, infoColorPressed: b, successColor: x, successColorHover: S, successColorPressed: C, warningColor: w, warningColorHover: T, warningColorPressed: E, errorColor: D, errorColorHover: O, errorColorPressed: k, fontWeight: A, buttonColor2: ee, buttonColor2Hover: j, buttonColor2Pressed: te, fontWeightStrong: ne } = e;
	return Object.assign(Object.assign({}, pS), {
		heightTiny: t,
		heightSmall: n,
		heightMedium: r,
		heightLarge: i,
		borderRadiusTiny: a,
		borderRadiusSmall: a,
		borderRadiusMedium: a,
		borderRadiusLarge: a,
		fontSizeTiny: o,
		fontSizeSmall: s,
		fontSizeMedium: c,
		fontSizeLarge: l,
		opacityDisabled: u,
		colorOpacitySecondary: "0.16",
		colorOpacitySecondaryHover: "0.22",
		colorOpacitySecondaryPressed: "0.28",
		colorSecondary: ee,
		colorSecondaryHover: j,
		colorSecondaryPressed: te,
		colorTertiary: ee,
		colorTertiaryHover: j,
		colorTertiaryPressed: te,
		colorQuaternary: "#0000",
		colorQuaternaryHover: j,
		colorQuaternaryPressed: te,
		color: "#0000",
		colorHover: "#0000",
		colorPressed: "#0000",
		colorFocus: "#0000",
		colorDisabled: "#0000",
		textColor: d,
		textColorTertiary: f,
		textColorHover: p,
		textColorPressed: m,
		textColorFocus: p,
		textColorDisabled: d,
		textColorText: d,
		textColorTextHover: p,
		textColorTextPressed: m,
		textColorTextFocus: p,
		textColorTextDisabled: d,
		textColorGhost: d,
		textColorGhostHover: p,
		textColorGhostPressed: m,
		textColorGhostFocus: p,
		textColorGhostDisabled: d,
		border: `1px solid ${h}`,
		borderHover: `1px solid ${p}`,
		borderPressed: `1px solid ${m}`,
		borderFocus: `1px solid ${p}`,
		borderDisabled: `1px solid ${h}`,
		rippleColor: g,
		colorPrimary: g,
		colorHoverPrimary: p,
		colorPressedPrimary: m,
		colorFocusPrimary: p,
		colorDisabledPrimary: g,
		textColorPrimary: _,
		textColorHoverPrimary: _,
		textColorPressedPrimary: _,
		textColorFocusPrimary: _,
		textColorDisabledPrimary: _,
		textColorTextPrimary: g,
		textColorTextHoverPrimary: p,
		textColorTextPressedPrimary: m,
		textColorTextFocusPrimary: p,
		textColorTextDisabledPrimary: d,
		textColorGhostPrimary: g,
		textColorGhostHoverPrimary: p,
		textColorGhostPressedPrimary: m,
		textColorGhostFocusPrimary: p,
		textColorGhostDisabledPrimary: g,
		borderPrimary: `1px solid ${g}`,
		borderHoverPrimary: `1px solid ${p}`,
		borderPressedPrimary: `1px solid ${m}`,
		borderFocusPrimary: `1px solid ${p}`,
		borderDisabledPrimary: `1px solid ${g}`,
		rippleColorPrimary: g,
		colorInfo: v,
		colorHoverInfo: y,
		colorPressedInfo: b,
		colorFocusInfo: y,
		colorDisabledInfo: v,
		textColorInfo: _,
		textColorHoverInfo: _,
		textColorPressedInfo: _,
		textColorFocusInfo: _,
		textColorDisabledInfo: _,
		textColorTextInfo: v,
		textColorTextHoverInfo: y,
		textColorTextPressedInfo: b,
		textColorTextFocusInfo: y,
		textColorTextDisabledInfo: d,
		textColorGhostInfo: v,
		textColorGhostHoverInfo: y,
		textColorGhostPressedInfo: b,
		textColorGhostFocusInfo: y,
		textColorGhostDisabledInfo: v,
		borderInfo: `1px solid ${v}`,
		borderHoverInfo: `1px solid ${y}`,
		borderPressedInfo: `1px solid ${b}`,
		borderFocusInfo: `1px solid ${y}`,
		borderDisabledInfo: `1px solid ${v}`,
		rippleColorInfo: v,
		colorSuccess: x,
		colorHoverSuccess: S,
		colorPressedSuccess: C,
		colorFocusSuccess: S,
		colorDisabledSuccess: x,
		textColorSuccess: _,
		textColorHoverSuccess: _,
		textColorPressedSuccess: _,
		textColorFocusSuccess: _,
		textColorDisabledSuccess: _,
		textColorTextSuccess: x,
		textColorTextHoverSuccess: S,
		textColorTextPressedSuccess: C,
		textColorTextFocusSuccess: S,
		textColorTextDisabledSuccess: d,
		textColorGhostSuccess: x,
		textColorGhostHoverSuccess: S,
		textColorGhostPressedSuccess: C,
		textColorGhostFocusSuccess: S,
		textColorGhostDisabledSuccess: x,
		borderSuccess: `1px solid ${x}`,
		borderHoverSuccess: `1px solid ${S}`,
		borderPressedSuccess: `1px solid ${C}`,
		borderFocusSuccess: `1px solid ${S}`,
		borderDisabledSuccess: `1px solid ${x}`,
		rippleColorSuccess: x,
		colorWarning: w,
		colorHoverWarning: T,
		colorPressedWarning: E,
		colorFocusWarning: T,
		colorDisabledWarning: w,
		textColorWarning: _,
		textColorHoverWarning: _,
		textColorPressedWarning: _,
		textColorFocusWarning: _,
		textColorDisabledWarning: _,
		textColorTextWarning: w,
		textColorTextHoverWarning: T,
		textColorTextPressedWarning: E,
		textColorTextFocusWarning: T,
		textColorTextDisabledWarning: d,
		textColorGhostWarning: w,
		textColorGhostHoverWarning: T,
		textColorGhostPressedWarning: E,
		textColorGhostFocusWarning: T,
		textColorGhostDisabledWarning: w,
		borderWarning: `1px solid ${w}`,
		borderHoverWarning: `1px solid ${T}`,
		borderPressedWarning: `1px solid ${E}`,
		borderFocusWarning: `1px solid ${T}`,
		borderDisabledWarning: `1px solid ${w}`,
		rippleColorWarning: w,
		colorError: D,
		colorHoverError: O,
		colorPressedError: k,
		colorFocusError: O,
		colorDisabledError: D,
		textColorError: _,
		textColorHoverError: _,
		textColorPressedError: _,
		textColorFocusError: _,
		textColorDisabledError: _,
		textColorTextError: D,
		textColorTextHoverError: O,
		textColorTextPressedError: k,
		textColorTextFocusError: O,
		textColorTextDisabledError: d,
		textColorGhostError: D,
		textColorGhostHoverError: O,
		textColorGhostPressedError: k,
		textColorGhostFocusError: O,
		textColorGhostDisabledError: D,
		borderError: `1px solid ${D}`,
		borderHoverError: `1px solid ${O}`,
		borderPressedError: `1px solid ${k}`,
		borderFocusError: `1px solid ${O}`,
		borderDisabledError: `1px solid ${D}`,
		rippleColorError: D,
		waveOpacity: "0.6",
		fontWeight: A,
		fontWeightStrong: ne
	});
}
var hS = {
	name: "Button",
	common: jy,
	self: mS
}, gS = {
	name: "Button",
	common: Q,
	self(e) {
		let t = mS(e);
		return t.waveOpacity = "0.8", t.colorOpacitySecondary = "0.16", t.colorOpacitySecondaryHover = "0.2", t.colorOpacitySecondaryPressed = "0.12", t;
	}
}, _S = {
	name: "Button",
	style: W("button", [K("rtl", "\n direction: rtl;\n ", [G("icon", {
		margin: "var(--n-icon-margin)",
		marginRight: 0
	}), G("content", [U("~", [G("icon", {
		margin: "var(--n-icon-margin)",
		marginLeft: 0
	})])])])])
}, vS = U([
	W("button", "\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [
		K("color", [
			G("border", { borderColor: "var(--n-border-color)" }),
			K("disabled", [G("border", { borderColor: "var(--n-border-color-disabled)" })]),
			pc("disabled", [
				U("&:focus", [G("state-border", { borderColor: "var(--n-border-color-focus)" })]),
				U("&:hover", [G("state-border", { borderColor: "var(--n-border-color-hover)" })]),
				U("&:active", [G("state-border", { borderColor: "var(--n-border-color-pressed)" })]),
				K("pressed", [G("state-border", { borderColor: "var(--n-border-color-pressed)" })])
			])
		]),
		K("disabled", {
			backgroundColor: "var(--n-color-disabled)",
			color: "var(--n-text-color-disabled)"
		}, [G("border", { border: "var(--n-border-disabled)" })]),
		pc("disabled", [
			U("&:focus", {
				backgroundColor: "var(--n-color-focus)",
				color: "var(--n-text-color-focus)"
			}, [G("state-border", { border: "var(--n-border-focus)" })]),
			U("&:hover", {
				backgroundColor: "var(--n-color-hover)",
				color: "var(--n-text-color-hover)"
			}, [G("state-border", { border: "var(--n-border-hover)" })]),
			U("&:active", {
				backgroundColor: "var(--n-color-pressed)",
				color: "var(--n-text-color-pressed)"
			}, [G("state-border", { border: "var(--n-border-pressed)" })]),
			K("pressed", {
				backgroundColor: "var(--n-color-pressed)",
				color: "var(--n-text-color-pressed)"
			}, [G("state-border", { border: "var(--n-border-pressed)" })])
		]),
		K("loading", "cursor: wait;"),
		W("base-wave", "\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ", [K("active", {
			zIndex: 1,
			animationName: "button-wave-spread, button-wave-opacity"
		})]),
		Pl && "MozBoxSizing" in document.createElement("div").style ? U("&::moz-focus-inner", { border: 0 }) : null,
		G("border, state-border", "\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),
		G("border", "\n border: var(--n-border);\n "),
		G("state-border", "\n border: var(--n-border);\n border-color: #0000;\n z-index: 1;\n "),
		G("icon", "\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ", [W("icon-slot", "\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ", [uy({
			top: "50%",
			originalTransform: "translateY(-50%)"
		})]), Cx()]),
		G("content", "\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ", [U("~", [G("icon", {
			margin: "var(--n-icon-margin)",
			marginRight: 0
		})])]),
		K("block", "\n display: flex;\n width: 100%;\n "),
		K("dashed", [G("border, state-border", { borderStyle: "dashed !important" })]),
		K("disabled", {
			cursor: "not-allowed",
			opacity: "var(--n-opacity-disabled)"
		})
	]),
	U("@keyframes button-wave-spread", {
		from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" },
		to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" }
	}),
	U("@keyframes button-wave-opacity", {
		from: { opacity: "var(--n-wave-opacity)" },
		to: { opacity: 0 }
	})
]), yS = /* @__PURE__ */ z({
	name: "Button",
	props: Object.assign(Object.assign({}, Yv.props), {
		color: String,
		textColor: String,
		text: Boolean,
		block: Boolean,
		loading: Boolean,
		disabled: Boolean,
		circle: Boolean,
		size: String,
		ghost: Boolean,
		round: Boolean,
		secondary: Boolean,
		tertiary: Boolean,
		quaternary: Boolean,
		strong: Boolean,
		focusable: {
			type: Boolean,
			default: !0
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		tag: {
			type: String,
			default: "button"
		},
		type: {
			type: String,
			default: "default"
		},
		dashed: Boolean,
		renderIcon: Function,
		iconPlacement: {
			type: String,
			default: "left"
		},
		attrType: {
			type: String,
			default: "button"
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		onClick: [Function, Array],
		nativeFocusBehavior: {
			type: Boolean,
			default: !Vx
		},
		spinProps: Object
	}),
	slots: Object,
	setup(e) {
		let t = /* @__PURE__ */ I(null), n = /* @__PURE__ */ I(null), r = /* @__PURE__ */ I(!1), i = _l(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = R(fS, {}), { inlineThemeDisabled: o, mergedClsPrefixRef: s, mergedRtlRef: c, mergedComponentPropsRef: l } = gf(e), { mergedSizeRef: u } = yf({}, {
			defaultSize: "medium",
			mergedSize: (t) => {
				let { size: n } = e;
				if (n) return n;
				let { size: r } = a;
				if (r) return r;
				let { mergedSize: i } = t || {};
				return i ? i.value : l?.value?.Button?.size || "medium";
			}
		}), d = V(() => e.focusable && !e.disabled), f = (n) => {
			var r;
			d.value || n.preventDefault(), e.nativeFocusBehavior || (n.preventDefault(), e.disabled || d.value && ((r = t.value) == null || r.focus({ preventScroll: !0 })));
		}, p = (t) => {
			var r;
			if (!e.disabled && !e.loading) {
				let { onClick: i } = e;
				i && tf(i, t), e.text || (r = n.value) == null || r.play();
			}
		}, m = (t) => {
			if (t.key === "Enter") {
				if (!e.keyboard) return;
				r.value = !1;
			}
		}, h = (t) => {
			if (t.key === "Enter") {
				if (!e.keyboard || e.loading) {
					t.preventDefault();
					return;
				}
				r.value = !0;
			}
		}, g = () => {
			r.value = !1;
		}, _ = Yv("Button", "-button", vS, hS, e, s), v = Vv("Button", c, s), y = V(() => {
			let { common: { cubicBezierEaseInOut: t, cubicBezierEaseOut: n }, self: r } = _.value, { rippleDuration: i, opacityDisabled: a, fontWeight: o, fontWeightStrong: s } = r, c = u.value, { dashed: l, type: d, ghost: f, text: p, color: m, round: h, circle: g, textColor: v, secondary: y, tertiary: b, quaternary: x, strong: S } = e, C = { "--n-font-weight": S ? s : o }, w = {
				"--n-color": "initial",
				"--n-color-hover": "initial",
				"--n-color-pressed": "initial",
				"--n-color-focus": "initial",
				"--n-color-disabled": "initial",
				"--n-ripple-color": "initial",
				"--n-text-color": "initial",
				"--n-text-color-hover": "initial",
				"--n-text-color-pressed": "initial",
				"--n-text-color-focus": "initial",
				"--n-text-color-disabled": "initial"
			}, T = d === "tertiary", E = d === "default", D = T ? "default" : d;
			if (p) {
				let e = v || m;
				w = {
					"--n-color": "#0000",
					"--n-color-hover": "#0000",
					"--n-color-pressed": "#0000",
					"--n-color-focus": "#0000",
					"--n-color-disabled": "#0000",
					"--n-ripple-color": "#0000",
					"--n-text-color": e || r[q("textColorText", D)],
					"--n-text-color-hover": e ? uS(e) : r[q("textColorTextHover", D)],
					"--n-text-color-pressed": e ? dS(e) : r[q("textColorTextPressed", D)],
					"--n-text-color-focus": e ? uS(e) : r[q("textColorTextHover", D)],
					"--n-text-color-disabled": e || r[q("textColorTextDisabled", D)]
				};
			} else if (f || l) {
				let e = v || m;
				w = {
					"--n-color": "#0000",
					"--n-color-hover": "#0000",
					"--n-color-pressed": "#0000",
					"--n-color-focus": "#0000",
					"--n-color-disabled": "#0000",
					"--n-ripple-color": m || r[q("rippleColor", D)],
					"--n-text-color": e || r[q("textColorGhost", D)],
					"--n-text-color-hover": e ? uS(e) : r[q("textColorGhostHover", D)],
					"--n-text-color-pressed": e ? dS(e) : r[q("textColorGhostPressed", D)],
					"--n-text-color-focus": e ? uS(e) : r[q("textColorGhostHover", D)],
					"--n-text-color-disabled": e || r[q("textColorGhostDisabled", D)]
				};
			} else if (y) {
				let e = E ? r.textColor : T ? r.textColorTertiary : r[q("color", D)], t = m || e, n = d !== "default" && d !== "tertiary";
				w = {
					"--n-color": n ? Y(t, { alpha: Number(r.colorOpacitySecondary) }) : r.colorSecondary,
					"--n-color-hover": n ? Y(t, { alpha: Number(r.colorOpacitySecondaryHover) }) : r.colorSecondaryHover,
					"--n-color-pressed": n ? Y(t, { alpha: Number(r.colorOpacitySecondaryPressed) }) : r.colorSecondaryPressed,
					"--n-color-focus": n ? Y(t, { alpha: Number(r.colorOpacitySecondaryHover) }) : r.colorSecondaryHover,
					"--n-color-disabled": r.colorSecondary,
					"--n-ripple-color": "#0000",
					"--n-text-color": t,
					"--n-text-color-hover": t,
					"--n-text-color-pressed": t,
					"--n-text-color-focus": t,
					"--n-text-color-disabled": t
				};
			} else if (b || x) {
				let e = E ? r.textColor : T ? r.textColorTertiary : r[q("color", D)], t = m || e;
				b ? (w["--n-color"] = r.colorTertiary, w["--n-color-hover"] = r.colorTertiaryHover, w["--n-color-pressed"] = r.colorTertiaryPressed, w["--n-color-focus"] = r.colorSecondaryHover, w["--n-color-disabled"] = r.colorTertiary) : (w["--n-color"] = r.colorQuaternary, w["--n-color-hover"] = r.colorQuaternaryHover, w["--n-color-pressed"] = r.colorQuaternaryPressed, w["--n-color-focus"] = r.colorQuaternaryHover, w["--n-color-disabled"] = r.colorQuaternary), w["--n-ripple-color"] = "#0000", w["--n-text-color"] = t, w["--n-text-color-hover"] = t, w["--n-text-color-pressed"] = t, w["--n-text-color-focus"] = t, w["--n-text-color-disabled"] = t;
			} else w = {
				"--n-color": m || r[q("color", D)],
				"--n-color-hover": m ? uS(m) : r[q("colorHover", D)],
				"--n-color-pressed": m ? dS(m) : r[q("colorPressed", D)],
				"--n-color-focus": m ? uS(m) : r[q("colorFocus", D)],
				"--n-color-disabled": m || r[q("colorDisabled", D)],
				"--n-ripple-color": m || r[q("rippleColor", D)],
				"--n-text-color": v || (m ? r.textColorPrimary : T ? r.textColorTertiary : r[q("textColor", D)]),
				"--n-text-color-hover": v || (m ? r.textColorHoverPrimary : r[q("textColorHover", D)]),
				"--n-text-color-pressed": v || (m ? r.textColorPressedPrimary : r[q("textColorPressed", D)]),
				"--n-text-color-focus": v || (m ? r.textColorFocusPrimary : r[q("textColorFocus", D)]),
				"--n-text-color-disabled": v || (m ? r.textColorDisabledPrimary : r[q("textColorDisabled", D)])
			};
			let O = {
				"--n-border": "initial",
				"--n-border-hover": "initial",
				"--n-border-pressed": "initial",
				"--n-border-focus": "initial",
				"--n-border-disabled": "initial"
			};
			O = p ? {
				"--n-border": "none",
				"--n-border-hover": "none",
				"--n-border-pressed": "none",
				"--n-border-focus": "none",
				"--n-border-disabled": "none"
			} : {
				"--n-border": r[q("border", D)],
				"--n-border-hover": r[q("borderHover", D)],
				"--n-border-pressed": r[q("borderPressed", D)],
				"--n-border-focus": r[q("borderFocus", D)],
				"--n-border-disabled": r[q("borderDisabled", D)]
			};
			let { [q("height", c)]: k, [q("fontSize", c)]: A, [q("padding", c)]: ee, [q("paddingRound", c)]: j, [q("iconSize", c)]: te, [q("borderRadius", c)]: ne, [q("iconMargin", c)]: M, waveOpacity: re } = r, ie = {
				"--n-width": g && !p ? k : "initial",
				"--n-height": p ? "initial" : k,
				"--n-font-size": A,
				"--n-padding": g || p ? "initial" : h ? j : ee,
				"--n-icon-size": te,
				"--n-icon-margin": M,
				"--n-border-radius": p ? "initial" : g || h ? k : ne
			};
			return Object.assign(Object.assign(Object.assign(Object.assign({
				"--n-bezier": t,
				"--n-bezier-ease-out": n,
				"--n-ripple-duration": i,
				"--n-opacity-disabled": a,
				"--n-wave-opacity": re
			}, C), w), O), ie);
		}), b = o ? _f("button", V(() => {
			let t = "", { dashed: n, type: r, ghost: i, text: a, color: o, round: s, circle: c, textColor: l, secondary: d, tertiary: f, quaternary: p, strong: m } = e;
			n && (t += "a"), i && (t += "b"), a && (t += "c"), s && (t += "d"), c && (t += "e"), d && (t += "f"), f && (t += "g"), p && (t += "h"), m && (t += "i"), o && (t += `j${Ud(o)}`), l && (t += `k${Ud(l)}`);
			let { value: h } = u;
			return t += `l${h[0]}`, t += `m${r[0]}`, t;
		}), y, e) : void 0;
		return {
			selfElRef: t,
			waveElRef: n,
			mergedClsPrefix: s,
			mergedFocusable: d,
			mergedSize: u,
			showBorder: i,
			enterPressed: r,
			rtlEnabled: v,
			handleMousedown: f,
			handleKeydown: h,
			handleBlur: g,
			handleKeyup: m,
			handleClick: p,
			customColorCssVars: V(() => {
				let { color: t } = e;
				if (!t) return null;
				let n = uS(t);
				return {
					"--n-border-color": t,
					"--n-border-color-hover": n,
					"--n-border-color-pressed": dS(t),
					"--n-border-color-focus": n,
					"--n-border-color-disabled": t
				};
			}),
			cssVars: o ? void 0 : y,
			themeClass: b?.themeClass,
			onRender: b?.onRender
		};
	},
	render() {
		let { mergedClsPrefix: e, tag: t, onRender: n } = this;
		n?.();
		let r = ff(this.$slots.default, (t) => t && H("span", { class: `${e}-button__content` }, t));
		return H(t, {
			ref: "selfElRef",
			class: [
				this.themeClass,
				`${e}-button`,
				`${e}-button--${this.type}-type`,
				`${e}-button--${this.mergedSize}-type`,
				this.rtlEnabled && `${e}-button--rtl`,
				this.disabled && `${e}-button--disabled`,
				this.block && `${e}-button--block`,
				this.enterPressed && `${e}-button--pressed`,
				!this.text && this.dashed && `${e}-button--dashed`,
				this.color && `${e}-button--color`,
				this.secondary && `${e}-button--secondary`,
				this.loading && `${e}-button--loading`,
				this.ghost && `${e}-button--ghost`
			],
			tabindex: this.mergedFocusable ? 0 : -1,
			type: this.attrType,
			style: this.cssVars,
			disabled: this.disabled,
			onClick: this.handleClick,
			onBlur: this.handleBlur,
			onMousedown: this.handleMousedown,
			onKeyup: this.handleKeyup,
			onKeydown: this.handleKeydown
		}, this.iconPlacement === "right" && r, H(hy, { width: !0 }, { default: () => ff(this.$slots.icon, (t) => (this.loading || this.renderIcon || t) && H("span", {
			class: `${e}-button__icon`,
			style: { margin: pf(this.$slots.default) ? "0" : "" }
		}, H(Qv, null, { default: () => this.loading ? H(yy, Object.assign({
			clsPrefix: e,
			key: "loading",
			class: `${e}-icon-slot`,
			strokeWidth: 20
		}, this.spinProps)) : H("div", {
			key: "icon",
			class: `${e}-icon-slot`,
			role: "none"
		}, this.renderIcon ? this.renderIcon() : t) }))) }), this.iconPlacement === "left" && r, this.text ? null : H(Tx, {
			ref: "waveElRef",
			clsPrefix: e
		}), this.showBorder ? H("div", {
			"aria-hidden": !0,
			class: `${e}-button__border`,
			style: this.customColorCssVars
		}) : null, this.showBorder ? H("div", {
			"aria-hidden": !0,
			class: `${e}-button__state-border`,
			style: this.customColorCssVars
		}) : null);
	}
}), bS = { titleFontSize: "22px" };
// node_modules/naive-ui/es/calendar/styles/light.mjs
function xS(e) {
	let { borderRadius: t, fontSize: n, lineHeight: r, textColor2: i, textColor1: a, textColorDisabled: o, dividerColor: s, fontWeightStrong: c, primaryColor: l, baseColor: u, hoverColor: d, cardColor: f, modalColor: p, popoverColor: m } = e;
	return Object.assign(Object.assign({}, bS), {
		borderRadius: t,
		borderColor: J(f, s),
		borderColorModal: J(p, s),
		borderColorPopover: J(m, s),
		textColor: i,
		titleFontWeight: c,
		titleTextColor: a,
		dayTextColor: o,
		fontSize: n,
		lineHeight: r,
		dateColorCurrent: l,
		dateTextColorCurrent: u,
		cellColorHover: J(f, d),
		cellColorHoverModal: J(p, d),
		cellColorHoverPopover: J(m, d),
		cellColor: f,
		cellColorModal: p,
		cellColorPopover: m,
		barColor: l
	});
}
// node_modules/naive-ui/es/calendar/styles/dark.mjs
var SS = {
	name: "Calendar",
	common: Q,
	peers: { Button: gS },
	self: xS
}, CS = {
	paddingSmall: "12px 16px 12px",
	paddingMedium: "19px 24px 20px",
	paddingLarge: "23px 32px 24px",
	paddingHuge: "27px 40px 28px",
	titleFontSizeSmall: "16px",
	titleFontSizeMedium: "18px",
	titleFontSizeLarge: "18px",
	titleFontSizeHuge: "18px",
	closeIconSize: "18px",
	closeSize: "22px"
};
// node_modules/naive-ui/es/card/styles/light.mjs
function wS(e) {
	let { primaryColor: t, borderRadius: n, lineHeight: r, fontSize: i, cardColor: a, textColor2: o, textColor1: s, dividerColor: c, fontWeightStrong: l, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, closeColorHover: p, closeColorPressed: m, modalColor: h, boxShadow1: g, popoverColor: _, actionColor: v } = e;
	return Object.assign(Object.assign({}, CS), {
		lineHeight: r,
		color: a,
		colorModal: h,
		colorPopover: _,
		colorTarget: t,
		colorEmbedded: v,
		colorEmbeddedModal: v,
		colorEmbeddedPopover: v,
		textColor: o,
		titleTextColor: s,
		borderColor: c,
		actionColor: v,
		titleFontWeight: l,
		closeColorHover: p,
		closeColorPressed: m,
		closeBorderRadius: n,
		closeIconColor: u,
		closeIconColorHover: d,
		closeIconColorPressed: f,
		fontSizeSmall: i,
		fontSizeMedium: i,
		fontSizeLarge: i,
		fontSizeHuge: i,
		boxShadow: g,
		borderRadius: n
	});
}
var TS = {
	name: "Card",
	common: Q,
	self(e) {
		let t = wS(e), { cardColor: n, modalColor: r, popoverColor: i } = e;
		return t.colorEmbedded = n, t.colorEmbeddedModal = r, t.colorEmbeddedPopover = i, t;
	}
};
// node_modules/naive-ui/es/carousel/styles/light.mjs
function ES() {
	return {
		dotSize: "8px",
		dotColor: "rgba(255, 255, 255, .3)",
		dotColorActive: "rgba(255, 255, 255, 1)",
		dotColorFocus: "rgba(255, 255, 255, .5)",
		dotLineWidth: "16px",
		dotLineWidthActive: "24px",
		arrowColor: "#eee"
	};
}
// node_modules/naive-ui/es/carousel/styles/dark.mjs
var DS = {
	name: "Carousel",
	common: Q,
	self: ES
}, OS = {
	sizeSmall: "14px",
	sizeMedium: "16px",
	sizeLarge: "18px",
	labelPadding: "0 8px",
	labelFontWeight: "400"
};
// node_modules/naive-ui/es/checkbox/styles/light.mjs
function kS(e) {
	let { baseColor: t, inputColorDisabled: n, cardColor: r, modalColor: i, popoverColor: a, textColorDisabled: o, borderColor: s, primaryColor: c, textColor2: l, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, borderRadiusSmall: p, lineHeight: m } = e;
	return Object.assign(Object.assign({}, OS), {
		labelLineHeight: m,
		fontSizeSmall: u,
		fontSizeMedium: d,
		fontSizeLarge: f,
		borderRadius: p,
		color: t,
		colorChecked: c,
		colorDisabled: n,
		colorDisabledChecked: n,
		colorTableHeader: r,
		colorTableHeaderModal: i,
		colorTableHeaderPopover: a,
		checkMarkColor: t,
		checkMarkColorDisabled: o,
		checkMarkColorDisabledChecked: o,
		border: `1px solid ${s}`,
		borderDisabled: `1px solid ${s}`,
		borderDisabledChecked: `1px solid ${s}`,
		borderChecked: `1px solid ${c}`,
		borderFocus: `1px solid ${c}`,
		boxShadowFocus: `0 0 0 2px ${Y(c, { alpha: .3 })}`,
		textColor: l,
		textColorDisabled: o
	});
}
var AS = {
	name: "Checkbox",
	common: Q,
	self(e) {
		let { cardColor: t } = e, n = kS(e);
		return n.color = "#0000", n.checkMarkColor = t, n;
	}
};
// node_modules/naive-ui/es/cascader/styles/light.mjs
function jS(e) {
	let { borderRadius: t, boxShadow2: n, popoverColor: r, textColor2: i, textColor3: a, primaryColor: o, textColorDisabled: s, dividerColor: c, hoverColor: l, fontSizeMedium: u, heightMedium: d } = e;
	return {
		menuBorderRadius: t,
		menuColor: r,
		menuBoxShadow: n,
		menuDividerColor: c,
		menuHeight: "calc(var(--n-option-height) * 6.6)",
		optionArrowColor: a,
		optionHeight: d,
		optionFontSize: u,
		optionColorHover: l,
		optionTextColor: i,
		optionTextColorActive: o,
		optionTextColorDisabled: s,
		optionCheckMarkColor: o,
		loadingColor: o,
		columnWidth: "180px"
	};
}
// node_modules/naive-ui/es/cascader/styles/dark.mjs
var MS = {
	name: "Cascader",
	common: Q,
	peers: {
		InternalSelectMenu: Ab,
		InternalSelection: gx,
		Scrollbar: Fy,
		Checkbox: AS,
		Empty: Cb
	},
	self: jS
}, NS = {
	name: "Code",
	common: Q,
	self(e) {
		let { textColor2: t, fontSize: n, fontWeightStrong: r, textColor3: i } = e;
		return {
			textColor: t,
			fontSize: n,
			fontWeightStrong: r,
			"mono-3": "#5c6370",
			"hue-1": "#56b6c2",
			"hue-2": "#61aeee",
			"hue-3": "#c678dd",
			"hue-4": "#98c379",
			"hue-5": "#e06c75",
			"hue-5-2": "#be5046",
			"hue-6": "#d19a66",
			"hue-6-2": "#e6c07b",
			lineNumberTextColor: i
		};
	}
};
// node_modules/naive-ui/es/collapse/styles/light.mjs
function PS(e) {
	let { fontWeight: t, textColor1: n, textColor2: r, textColorDisabled: i, dividerColor: a, fontSize: o } = e;
	return {
		titleFontSize: o,
		titleFontWeight: t,
		dividerColor: a,
		titleTextColor: n,
		titleTextColorDisabled: i,
		fontSize: o,
		textColor: r,
		arrowColor: r,
		arrowColorDisabled: i,
		itemMargin: "16px 0 0 0",
		titlePadding: "16px 0 0 0"
	};
}
// node_modules/naive-ui/es/collapse/styles/dark.mjs
var FS = {
	name: "Collapse",
	common: Q,
	self: PS
};
// node_modules/naive-ui/es/collapse-transition/styles/light.mjs
function IS(e) {
	let { cubicBezierEaseInOut: t } = e;
	return { bezier: t };
}
// node_modules/naive-ui/es/collapse-transition/styles/dark.mjs
var LS = {
	name: "CollapseTransition",
	common: Q,
	self: IS
};
// node_modules/naive-ui/es/color-picker/styles/light.mjs
function RS(e) {
	let { fontSize: t, boxShadow2: n, popoverColor: r, textColor2: i, borderRadius: a, borderColor: o, heightSmall: s, heightMedium: c, heightLarge: l, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, dividerColor: p } = e;
	return {
		panelFontSize: t,
		boxShadow: n,
		color: r,
		textColor: i,
		borderRadius: a,
		border: `1px solid ${o}`,
		heightSmall: s,
		heightMedium: c,
		heightLarge: l,
		fontSizeSmall: u,
		fontSizeMedium: d,
		fontSizeLarge: f,
		dividerColor: p
	};
}
// node_modules/naive-ui/es/color-picker/styles/dark.mjs
var zS = {
	name: "ColorPicker",
	common: Q,
	peers: {
		Input: Wx,
		Button: gS
	},
	self: RS
}, BS = /* @__PURE__ */ z({
	name: "ConfigProvider",
	alias: ["App"],
	props: {
		abstract: Boolean,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clsPrefix: String,
		locale: Object,
		dateLocale: Object,
		namespace: String,
		rtl: Array,
		tag: {
			type: String,
			default: "div"
		},
		hljs: Object,
		katex: Object,
		theme: Object,
		themeOverrides: Object,
		componentOptions: Object,
		icons: Object,
		breakpoints: Object,
		preflightStyleDisabled: Boolean,
		styleMountTarget: Object,
		inlineThemeDisabled: {
			type: Boolean,
			default: void 0
		},
		as: {
			type: String,
			validator: () => ($d("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
			default: void 0
		}
	},
	setup(e) {
		let t = R(hf, null), n = V(() => {
			let { theme: n } = e;
			if (n === null) return;
			let r = t?.mergedThemeRef.value;
			return n === void 0 ? r : r === void 0 ? n : Object.assign({}, r, n);
		}), r = V(() => {
			let { themeOverrides: n } = e;
			if (n !== null) {
				if (n === void 0) return t?.mergedThemeOverridesRef.value;
				{
					let e = t?.mergedThemeOverridesRef.value;
					return e === void 0 ? n : Rv({}, e, n);
				}
			}
		}), i = _l(() => {
			let { namespace: n } = e;
			return n === void 0 ? t?.mergedNamespaceRef.value : n;
		}), a = _l(() => {
			let { bordered: n } = e;
			return n === void 0 ? t?.mergedBorderedRef.value : n;
		}), o = V(() => {
			let { icons: n } = e;
			return n === void 0 ? t?.mergedIconsRef.value : n;
		}), s = V(() => {
			let { componentOptions: n } = e;
			return n === void 0 ? t?.mergedComponentPropsRef.value : n;
		}), c = V(() => {
			let { clsPrefix: n } = e;
			return n === void 0 ? t ? t.mergedClsPrefixRef.value : "n" : n;
		}), l = V(() => {
			var n;
			let { rtl: r } = e;
			if (r === void 0) return t?.mergedRtlRef.value;
			let i = {};
			for (let e of r) i[e.name] = Wt(e), (n = e.peers) == null || n.forEach((e) => {
				e.name in i || (i[e.name] = Wt(e));
			});
			return i;
		}), u = V(() => e.breakpoints || t?.mergedBreakpointsRef.value), d = e.inlineThemeDisabled || t?.inlineThemeDisabled, f = e.preflightStyleDisabled || t?.preflightStyleDisabled, p = e.styleMountTarget || t?.styleMountTarget;
		return Bn(hf, {
			mergedThemeHashRef: V(() => {
				let { value: e } = n, { value: t } = r, i = t && Object.keys(t).length !== 0, a = e?.name;
				return a ? i ? `${a}-${Zs(JSON.stringify(r.value))}` : a : i ? Zs(JSON.stringify(r.value)) : "";
			}),
			mergedBreakpointsRef: u,
			mergedRtlRef: l,
			mergedIconsRef: o,
			mergedComponentPropsRef: s,
			mergedBorderedRef: a,
			mergedNamespaceRef: i,
			mergedClsPrefixRef: c,
			mergedLocaleRef: V(() => {
				let { locale: n } = e;
				if (n !== null) return n === void 0 ? t?.mergedLocaleRef.value : n;
			}),
			mergedDateLocaleRef: V(() => {
				let { dateLocale: n } = e;
				if (n !== null) return n === void 0 ? t?.mergedDateLocaleRef.value : n;
			}),
			mergedHljsRef: V(() => {
				let { hljs: n } = e;
				return n === void 0 ? t?.mergedHljsRef.value : n;
			}),
			mergedKatexRef: V(() => {
				let { katex: n } = e;
				return n === void 0 ? t?.mergedKatexRef.value : n;
			}),
			mergedThemeRef: n,
			mergedThemeOverridesRef: r,
			inlineThemeDisabled: d || !1,
			preflightStyleDisabled: f || !1,
			styleMountTarget: p
		}), {
			mergedClsPrefix: c,
			mergedBordered: a,
			mergedNamespace: i,
			mergedTheme: n,
			mergedThemeOverrides: r
		};
	},
	render() {
		var e, t;
		return this.abstract ? (t = this.$slots).default?.call(t) : H(this.as || this.tag, { class: `${this.mergedClsPrefix || "n"}-config-provider` }, (e = this.$slots).default?.call(e));
	}
}), VS = {
	name: "Popselect",
	common: Q,
	peers: {
		Popover: Ub,
		InternalSelectMenu: Ab
	}
};
// node_modules/naive-ui/es/select/styles/light.mjs
function HS(e) {
	let { boxShadow2: t } = e;
	return { menuBoxShadow: t };
}
var US = Jv({
	name: "Select",
	common: jy,
	peers: {
		InternalSelection: vx,
		InternalSelectMenu: kb
	},
	self: HS
}), WS = {
	name: "Select",
	common: Q,
	peers: {
		InternalSelection: gx,
		InternalSelectMenu: Ab
	},
	self: HS
}, GS = {
	name: "Select",
	style: U([]),
	peers: [
		yx,
		jb,
		cx,
		Iy
	]
}, KS = U([W("select", "\n z-index: auto;\n outline: none;\n width: 100%;\n position: relative;\n font-weight: var(--n-font-weight);\n "), W("select-menu", "\n margin: 4px 0;\n box-shadow: var(--n-menu-box-shadow);\n ", [Lb({ originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)" })])]), qS = /* @__PURE__ */ z({
	name: "Select",
	props: Object.assign(Object.assign({}, Yv.props), {
		to: Nl.propTo,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clearable: Boolean,
		clearCreatedOptionsOnClear: {
			type: Boolean,
			default: !0
		},
		clearFilterAfterSelect: {
			type: Boolean,
			default: !0
		},
		options: {
			type: Array,
			default: () => []
		},
		defaultValue: {
			type: [
				String,
				Number,
				Array
			],
			default: null
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		value: [
			String,
			Number,
			Array
		],
		placeholder: String,
		menuProps: Object,
		multiple: Boolean,
		size: String,
		menuSize: { type: String },
		filterable: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		},
		remote: Boolean,
		loading: Boolean,
		filter: Function,
		placement: {
			type: String,
			default: "bottom-start"
		},
		widthMode: {
			type: String,
			default: "trigger"
		},
		tag: Boolean,
		onCreate: Function,
		fallbackOption: {
			type: [Function, Boolean],
			default: void 0
		},
		show: {
			type: Boolean,
			default: void 0
		},
		showArrow: {
			type: Boolean,
			default: !0
		},
		maxTagCount: [Number, String],
		ellipsisTagPopoverProps: Object,
		consistentMenuWidth: {
			type: Boolean,
			default: !0
		},
		virtualScroll: {
			type: Boolean,
			default: !0
		},
		labelField: {
			type: String,
			default: "label"
		},
		valueField: {
			type: String,
			default: "value"
		},
		childrenField: {
			type: String,
			default: "children"
		},
		renderLabel: Function,
		renderOption: Function,
		renderTag: Function,
		"onUpdate:value": [Function, Array],
		inputProps: Object,
		nodeProps: Function,
		ignoreComposition: {
			type: Boolean,
			default: !0
		},
		showOnFocus: Boolean,
		onUpdateValue: [Function, Array],
		onBlur: [Function, Array],
		onClear: [Function, Array],
		onFocus: [Function, Array],
		onScroll: [Function, Array],
		onSearch: [Function, Array],
		onUpdateShow: [Function, Array],
		"onUpdate:show": [Function, Array],
		displayDirective: {
			type: String,
			default: "show"
		},
		resetMenuOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		status: String,
		showCheckmark: {
			type: Boolean,
			default: !0
		},
		scrollbarProps: Object,
		onChange: [Function, Array],
		items: Array
	}),
	slots: Object,
	setup(e) {
		let { mergedClsPrefixRef: t, mergedBorderedRef: n, namespaceRef: r, inlineThemeDisabled: i, mergedComponentPropsRef: a } = gf(e), o = Yv("Select", "-select", KS, US, e, t), s = /* @__PURE__ */ I(e.defaultValue), c = xl(/* @__PURE__ */ L(e, "value"), s), l = /* @__PURE__ */ I(!1), u = /* @__PURE__ */ I(""), d = Cl(e, ["items", "options"]), f = /* @__PURE__ */ I([]), p = /* @__PURE__ */ I([]), m = V(() => p.value.concat(f.value).concat(d.value)), h = V(() => {
			let { filter: t } = e;
			if (t) return t;
			let { labelField: n, valueField: r } = e;
			return (e, t) => {
				if (!t) return !1;
				let i = t[n];
				if (typeof i == "string") return Jx(e, i);
				let a = t[r];
				return typeof a == "string" ? Jx(e, a) : typeof a == "number" && Jx(e, String(a));
			};
		}), g = V(() => {
			if (e.remote) return d.value;
			{
				let { value: t } = m, { value: n } = u;
				return !n.length || !e.filterable ? t : Xx(t, h.value, n, e.childrenField);
			}
		}), _ = V(() => {
			let { valueField: t, childrenField: n } = e, r = Yx(t, n);
			return bb(g.value, r);
		}), v = V(() => Zx(m.value, e.valueField, e.childrenField)), y = /* @__PURE__ */ I(!1), b = xl(/* @__PURE__ */ L(e, "show"), y), x = /* @__PURE__ */ I(null), S = /* @__PURE__ */ I(null), C = /* @__PURE__ */ I(null), { localeRef: w } = zv("Select"), T = V(() => e.placeholder ?? w.value.placeholder), E = [], D = /* @__PURE__ */ I(/* @__PURE__ */ new Map()), O = V(() => {
			let { fallbackOption: t } = e;
			if (t === void 0) {
				let { labelField: t, valueField: n } = e;
				return (e) => ({
					[t]: String(e),
					[n]: e
				});
			}
			return t === !1 ? !1 : (e) => Object.assign(t(e), { value: e });
		});
		function k(t) {
			let n = e.remote, { value: r } = D, { value: i } = v, { value: a } = O, o = [];
			return t.forEach((e) => {
				if (i.has(e)) o.push(i.get(e));
				else if (n && r.has(e)) o.push(r.get(e));
				else if (a) {
					let t = a(e);
					t && o.push(t);
				}
			}), o;
		}
		let A = V(() => {
			if (e.multiple) {
				let { value: e } = c;
				return Array.isArray(e) ? k(e) : [];
			}
			return null;
		}), ee = V(() => {
			let { value: t } = c;
			return !e.multiple && !Array.isArray(t) ? t === null ? null : k([t])[0] || null : null;
		}), j = yf(e, { mergedSize: (t) => {
			let { size: n } = e;
			if (n) return n;
			let { mergedSize: r } = t || {};
			return r?.value ? r.value : a?.value?.Select?.size || "medium";
		} }), { mergedSizeRef: te, mergedDisabledRef: ne, mergedStatusRef: M } = j;
		function re(t, n) {
			let { onChange: r, "onUpdate:value": i, onUpdateValue: a } = e, { nTriggerFormChange: o, nTriggerFormInput: c } = j;
			r && tf(r, t, n), a && tf(a, t, n), i && tf(i, t, n), s.value = t, o(), c();
		}
		function ie(t) {
			let { onBlur: n } = e, { nTriggerFormBlur: r } = j;
			n && tf(n, t), r();
		}
		function ae() {
			let { onClear: t } = e;
			t && tf(t);
		}
		function oe(t) {
			let { onFocus: n, showOnFocus: r } = e, { nTriggerFormFocus: i } = j;
			n && tf(n, t), i(), r && de();
		}
		function se(t) {
			let { onSearch: n } = e;
			n && tf(n, t);
		}
		function ce(t) {
			let { onScroll: n } = e;
			n && tf(n, t);
		}
		function le() {
			var t;
			let { remote: n, multiple: r } = e;
			if (n) {
				let { value: n } = D;
				if (r) {
					let { valueField: r } = e;
					(t = A.value) == null || t.forEach((e) => {
						n.set(e[r], e);
					});
				} else {
					let t = ee.value;
					t && n.set(t[e.valueField], t);
				}
			}
		}
		function ue(t) {
			let { onUpdateShow: n, "onUpdate:show": r } = e;
			n && tf(n, t), r && tf(r, t), y.value = t;
		}
		function de() {
			ne.value || (ue(!0), y.value = !0, e.filterable && Me());
		}
		function fe() {
			ue(!1);
		}
		function pe() {
			u.value = "", p.value = E;
		}
		let me = /* @__PURE__ */ I(!1);
		function he() {
			e.filterable && (me.value = !0);
		}
		function ge() {
			e.filterable && (me.value = !1, b.value || pe());
		}
		function _e() {
			ne.value || (b.value ? e.filterable ? Me() : fe() : de());
		}
		function ve(e) {
			(C.value?.selfRef)?.contains(e.relatedTarget) || (l.value = !1, ie(e), fe());
		}
		function ye(e) {
			oe(e), l.value = !0;
		}
		function be() {
			l.value = !0;
		}
		function N(e) {
			x.value?.$el.contains(e.relatedTarget) || (l.value = !1, ie(e), fe());
		}
		function xe() {
			var e;
			(e = x.value) == null || e.focus(), fe();
		}
		function Se(e) {
			b.value && (x.value?.$el.contains(Sc(e)) || fe());
		}
		function Ce(t) {
			if (!Array.isArray(t)) return [];
			if (O.value) return Array.from(t);
			{
				let { remote: n } = e, { value: r } = v;
				if (n) {
					let { value: e } = D;
					return t.filter((t) => r.has(t) || e.has(t));
				}
				return t.filter((e) => r.has(e));
			}
		}
		function we(e) {
			Te(e.rawNode);
		}
		function Te(t) {
			if (ne.value) return;
			let { tag: n, remote: r, clearFilterAfterSelect: i, valueField: a } = e;
			if (n && !r) {
				let { value: e } = p, t = e[0] || null;
				if (t) {
					let e = f.value;
					e.length ? e.push(t) : f.value = [t], p.value = E;
				}
			}
			if (r && D.value.set(t[a], t), e.multiple) {
				let e = Ce(c.value), o = e.findIndex((e) => e === t[a]);
				if (~o) {
					if (e.splice(o, 1), n && !r) {
						let e = P(t[a]);
						~e && (f.value.splice(e, 1), i && (u.value = ""));
					}
				} else e.push(t[a]), i && (u.value = "");
				re(e, k(e));
			} else {
				if (n && !r) {
					let e = P(t[a]);
					~e ? f.value = [f.value[e]] : f.value = E;
				}
				je(), fe(), re(t[a], t);
			}
		}
		function P(t) {
			return f.value.findIndex((n) => n[e.valueField] === t);
		}
		function Ee(t) {
			b.value || de();
			let { value: n } = t.target;
			u.value = n;
			let { tag: r, remote: i } = e;
			if (se(n), r && !i) {
				if (!n) {
					p.value = E;
					return;
				}
				let { onCreate: t } = e, r = t ? t(n) : {
					[e.labelField]: n,
					[e.valueField]: n
				}, { valueField: i, labelField: a } = e;
				d.value.some((e) => e[i] === r[i] || e[a] === r[a]) || f.value.some((e) => e[i] === r[i] || e[a] === r[a]) ? p.value = E : p.value = [r];
			}
		}
		function De(t) {
			t.stopPropagation();
			let { multiple: n, tag: r, remote: i, clearCreatedOptionsOnClear: a } = e;
			!n && e.filterable && fe(), r && !i && a && (f.value = E), ae(), n ? re([], []) : re(null, null);
		}
		function Oe(e) {
			xc(e, "action") || xc(e, "empty") || xc(e, "header") || e.preventDefault();
		}
		function ke(e) {
			ce(e);
		}
		function Ae(t) {
			var n, r, i;
			if (!e.keyboard) t.preventDefault();
			else switch (t.key) {
				case " ":
					if (e.filterable) break;
					t.preventDefault();
				case "Enter":
					if (!x.value?.isComposing) {
						if (b.value) {
							let t = C.value?.getPendingTmNode();
							t ? we(t) : e.filterable || (fe(), je());
						} else if (de(), e.tag && me.value) {
							let t = p.value[0];
							if (t) {
								let n = t[e.valueField], { value: r } = c;
								e.multiple && Array.isArray(r) && r.includes(n) || Te(t);
							}
						}
					}
					t.preventDefault();
					break;
				case "ArrowUp":
					if (t.preventDefault(), e.loading) return;
					b.value && ((n = C.value) == null || n.prev());
					break;
				case "ArrowDown":
					if (t.preventDefault(), e.loading) return;
					b.value ? (r = C.value) == null || r.next() : de();
					break;
				case "Escape": b.value && (Zd(t), fe()), (i = x.value) == null || i.focus();
			}
		}
		function je() {
			var e;
			(e = x.value) == null || e.focus();
		}
		function Me() {
			var e;
			(e = x.value) == null || e.focusInput();
		}
		function Ne() {
			var e;
			b.value && ((e = S.value) == null || e.syncPosition());
		}
		le(), Wn(/* @__PURE__ */ L(e, "options"), le);
		let Pe = {
			focus: () => {
				var e;
				(e = x.value) == null || e.focus();
			},
			focusInput: () => {
				var e;
				(e = x.value) == null || e.focusInput();
			},
			blur: () => {
				var e;
				(e = x.value) == null || e.blur();
			},
			blurInput: () => {
				var e;
				(e = x.value) == null || e.blurInput();
			}
		}, Fe = V(() => {
			let { self: { menuBoxShadow: e } } = o.value;
			return { "--n-menu-box-shadow": e };
		}), Ie = i ? _f("select", void 0, Fe, e) : void 0;
		return Object.assign(Object.assign({}, Pe), {
			mergedStatus: M,
			mergedClsPrefix: t,
			mergedBordered: n,
			namespace: r,
			treeMate: _,
			isMounted: Sl(),
			triggerRef: x,
			menuRef: C,
			pattern: u,
			uncontrolledShow: y,
			mergedShow: b,
			adjustedTo: Nl(e),
			uncontrolledValue: s,
			mergedValue: c,
			followerRef: S,
			localizedPlaceholder: T,
			selectedOption: ee,
			selectedOptions: A,
			mergedSize: te,
			mergedDisabled: ne,
			focused: l,
			activeWithoutMenuOpen: me,
			inlineThemeDisabled: i,
			onTriggerInputFocus: he,
			onTriggerInputBlur: ge,
			handleTriggerOrMenuResize: Ne,
			handleMenuFocus: be,
			handleMenuBlur: N,
			handleMenuTabOut: xe,
			handleTriggerClick: _e,
			handleToggle: we,
			handleDeleteOption: Te,
			handlePatternInput: Ee,
			handleClear: De,
			handleTriggerBlur: ve,
			handleTriggerFocus: ye,
			handleKeydown: Ae,
			handleMenuAfterLeave: pe,
			handleMenuClickOutside: Se,
			handleMenuScroll: ke,
			handleMenuKeydown: Ae,
			handleMenuMousedown: Oe,
			mergedTheme: o,
			cssVars: i ? void 0 : Fe,
			themeClass: Ie?.themeClass,
			onRender: Ie?.onRender
		});
	},
	render() {
		return H("div", { class: `${this.mergedClsPrefix}-select` }, H(Gl, null, { default: () => [H(Kl, null, { default: () => H(xx, {
			ref: "triggerRef",
			inlineThemeDisabled: this.inlineThemeDisabled,
			status: this.mergedStatus,
			inputProps: this.inputProps,
			clsPrefix: this.mergedClsPrefix,
			showArrow: this.showArrow,
			maxTagCount: this.maxTagCount,
			ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
			bordered: this.mergedBordered,
			active: this.activeWithoutMenuOpen || this.mergedShow,
			pattern: this.pattern,
			placeholder: this.localizedPlaceholder,
			selectedOption: this.selectedOption,
			selectedOptions: this.selectedOptions,
			multiple: this.multiple,
			renderTag: this.renderTag,
			renderLabel: this.renderLabel,
			filterable: this.filterable,
			clearable: this.clearable,
			disabled: this.mergedDisabled,
			size: this.mergedSize,
			theme: this.mergedTheme.peers.InternalSelection,
			labelField: this.labelField,
			valueField: this.valueField,
			themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
			loading: this.loading,
			focused: this.focused,
			onClick: this.handleTriggerClick,
			onDeleteOption: this.handleDeleteOption,
			onPatternInput: this.handlePatternInput,
			onClear: this.handleClear,
			onBlur: this.handleTriggerBlur,
			onFocus: this.handleTriggerFocus,
			onKeydown: this.handleKeydown,
			onPatternBlur: this.onTriggerInputBlur,
			onPatternFocus: this.onTriggerInputFocus,
			onResize: this.handleTriggerOrMenuResize,
			ignoreComposition: this.ignoreComposition
		}, { arrow: () => {
			var e;
			return [(e = this.$slots).arrow?.call(e)];
		} }) }), H(Tu, {
			ref: "followerRef",
			show: this.mergedShow,
			to: this.adjustedTo,
			teleportDisabled: this.adjustedTo === Nl.tdkey,
			containerClass: this.namespace,
			width: this.consistentMenuWidth ? "target" : void 0,
			minWidth: "target",
			placement: this.placement
		}, { default: () => H(vo, {
			name: "fade-in-scale-up-transition",
			appear: this.isMounted,
			onAfterLeave: this.handleMenuAfterLeave
		}, { default: () => {
			var e;
			return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) == null || e.call(this), Rn(H(zb, Object.assign({}, this.menuProps, {
				ref: "menuRef",
				onResize: this.handleTriggerOrMenuResize,
				inlineThemeDisabled: this.inlineThemeDisabled,
				virtualScroll: this.consistentMenuWidth && this.virtualScroll,
				class: [
					`${this.mergedClsPrefix}-select-menu`,
					this.themeClass,
					this.menuProps?.class
				],
				clsPrefix: this.mergedClsPrefix,
				focusable: !0,
				labelField: this.labelField,
				valueField: this.valueField,
				autoPending: !0,
				nodeProps: this.nodeProps,
				theme: this.mergedTheme.peers.InternalSelectMenu,
				themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
				treeMate: this.treeMate,
				multiple: this.multiple,
				size: this.menuSize,
				renderOption: this.renderOption,
				renderLabel: this.renderLabel,
				value: this.mergedValue,
				style: [this.menuProps?.style, this.cssVars],
				onToggle: this.handleToggle,
				onScroll: this.handleMenuScroll,
				onFocus: this.handleMenuFocus,
				onBlur: this.handleMenuBlur,
				onKeydown: this.handleMenuKeydown,
				onTabOut: this.handleMenuTabOut,
				onMousedown: this.handleMenuMousedown,
				show: this.mergedShow,
				showCheckmark: this.showCheckmark,
				resetMenuOnOptionsChange: this.resetMenuOnOptionsChange,
				scrollbarProps: this.scrollbarProps
			}), {
				empty: () => {
					var e;
					return [(e = this.$slots).empty?.call(e)];
				},
				header: () => {
					var e;
					return [(e = this.$slots).header?.call(e)];
				},
				action: () => {
					var e;
					return [(e = this.$slots).action?.call(e)];
				}
			}), this.displayDirective === "show" ? [[Io, this.mergedShow], [
				Xl,
				this.handleMenuClickOutside,
				void 0,
				{ capture: !0 }
			]] : [[
				Xl,
				this.handleMenuClickOutside,
				void 0,
				{ capture: !0 }
			]])) : null;
		} }) })] }));
	}
}), JS = {
	itemPaddingSmall: "0 4px",
	itemMarginSmall: "0 0 0 8px",
	itemMarginSmallRtl: "0 8px 0 0",
	itemPaddingMedium: "0 4px",
	itemMarginMedium: "0 0 0 8px",
	itemMarginMediumRtl: "0 8px 0 0",
	itemPaddingLarge: "0 4px",
	itemMarginLarge: "0 0 0 8px",
	itemMarginLargeRtl: "0 8px 0 0",
	buttonIconSizeSmall: "14px",
	buttonIconSizeMedium: "16px",
	buttonIconSizeLarge: "18px",
	inputWidthSmall: "60px",
	selectWidthSmall: "unset",
	inputMarginSmall: "0 0 0 8px",
	inputMarginSmallRtl: "0 8px 0 0",
	selectMarginSmall: "0 0 0 8px",
	prefixMarginSmall: "0 8px 0 0",
	suffixMarginSmall: "0 0 0 8px",
	inputWidthMedium: "60px",
	selectWidthMedium: "unset",
	inputMarginMedium: "0 0 0 8px",
	inputMarginMediumRtl: "0 8px 0 0",
	selectMarginMedium: "0 0 0 8px",
	prefixMarginMedium: "0 8px 0 0",
	suffixMarginMedium: "0 0 0 8px",
	inputWidthLarge: "60px",
	selectWidthLarge: "unset",
	inputMarginLarge: "0 0 0 8px",
	inputMarginLargeRtl: "0 8px 0 0",
	selectMarginLarge: "0 0 0 8px",
	prefixMarginLarge: "0 8px 0 0",
	suffixMarginLarge: "0 0 0 8px"
};
// node_modules/naive-ui/es/pagination/styles/light.mjs
function YS(e) {
	let { textColor2: t, primaryColor: n, primaryColorHover: r, primaryColorPressed: i, inputColorDisabled: a, textColorDisabled: o, borderColor: s, borderRadius: c, fontSizeTiny: l, fontSizeSmall: u, fontSizeMedium: d, heightTiny: f, heightSmall: p, heightMedium: m } = e;
	return Object.assign(Object.assign({}, JS), {
		buttonColor: "#0000",
		buttonColorHover: "#0000",
		buttonColorPressed: "#0000",
		buttonBorder: `1px solid ${s}`,
		buttonBorderHover: `1px solid ${s}`,
		buttonBorderPressed: `1px solid ${s}`,
		buttonIconColor: t,
		buttonIconColorHover: t,
		buttonIconColorPressed: t,
		itemTextColor: t,
		itemTextColorHover: r,
		itemTextColorPressed: i,
		itemTextColorActive: n,
		itemTextColorDisabled: o,
		itemColor: "#0000",
		itemColorHover: "#0000",
		itemColorPressed: "#0000",
		itemColorActive: "#0000",
		itemColorActiveHover: "#0000",
		itemColorDisabled: a,
		itemBorder: "1px solid #0000",
		itemBorderHover: "1px solid #0000",
		itemBorderPressed: "1px solid #0000",
		itemBorderActive: `1px solid ${n}`,
		itemBorderDisabled: `1px solid ${s}`,
		itemBorderRadius: c,
		itemSizeSmall: f,
		itemSizeMedium: p,
		itemSizeLarge: m,
		itemFontSizeSmall: l,
		itemFontSizeMedium: u,
		itemFontSizeLarge: d,
		jumperFontSizeSmall: l,
		jumperFontSizeMedium: u,
		jumperFontSizeLarge: d,
		jumperTextColor: t,
		jumperTextColorDisabled: o
	});
}
var XS = {
	name: "Pagination",
	common: Q,
	peers: {
		Select: WS,
		Input: Wx,
		Popselect: VS
	},
	self(e) {
		let { primaryColor: t, opacity3: n } = e, r = Y(t, { alpha: Number(n) }), i = YS(e);
		return i.itemBorderActive = `1px solid ${r}`, i.itemBorderDisabled = "1px solid #0000", i;
	}
}, ZS = {
	padding: "4px 0",
	optionIconSizeSmall: "14px",
	optionIconSizeMedium: "16px",
	optionIconSizeLarge: "16px",
	optionIconSizeHuge: "18px",
	optionSuffixWidthSmall: "14px",
	optionSuffixWidthMedium: "14px",
	optionSuffixWidthLarge: "16px",
	optionSuffixWidthHuge: "16px",
	optionIconSuffixWidthSmall: "32px",
	optionIconSuffixWidthMedium: "32px",
	optionIconSuffixWidthLarge: "36px",
	optionIconSuffixWidthHuge: "36px",
	optionPrefixWidthSmall: "14px",
	optionPrefixWidthMedium: "14px",
	optionPrefixWidthLarge: "16px",
	optionPrefixWidthHuge: "16px",
	optionIconPrefixWidthSmall: "36px",
	optionIconPrefixWidthMedium: "36px",
	optionIconPrefixWidthLarge: "40px",
	optionIconPrefixWidthHuge: "40px"
};
// node_modules/naive-ui/es/dropdown/styles/light.mjs
function QS(e) {
	let { primaryColor: t, textColor2: n, dividerColor: r, hoverColor: i, popoverColor: a, invertedColor: o, borderRadius: s, fontSizeSmall: c, fontSizeMedium: l, fontSizeLarge: u, fontSizeHuge: d, heightSmall: f, heightMedium: p, heightLarge: m, heightHuge: h, textColor3: g, opacityDisabled: _ } = e;
	return Object.assign(Object.assign({}, ZS), {
		optionHeightSmall: f,
		optionHeightMedium: p,
		optionHeightLarge: m,
		optionHeightHuge: h,
		borderRadius: s,
		fontSizeSmall: c,
		fontSizeMedium: l,
		fontSizeLarge: u,
		fontSizeHuge: d,
		optionTextColor: n,
		optionTextColorHover: n,
		optionTextColorActive: t,
		optionTextColorChildActive: t,
		color: a,
		dividerColor: r,
		suffixColor: n,
		prefixColor: n,
		optionColorHover: i,
		optionColorActive: Y(t, { alpha: .1 }),
		groupHeaderTextColor: g,
		optionTextColorInverted: "#BBB",
		optionTextColorHoverInverted: "#FFF",
		optionTextColorActiveInverted: "#FFF",
		optionTextColorChildActiveInverted: "#FFF",
		colorInverted: o,
		dividerColorInverted: "#BBB",
		suffixColorInverted: "#BBB",
		prefixColorInverted: "#BBB",
		optionColorHoverInverted: t,
		optionColorActiveInverted: t,
		groupHeaderTextColorInverted: "#AAA",
		optionOpacityDisabled: _
	});
}
var $S = {
	name: "Dropdown",
	common: Q,
	peers: { Popover: Ub },
	self(e) {
		let { primaryColorSuppl: t, primaryColor: n, popoverColor: r } = e, i = QS(e);
		return i.colorInverted = r, i.optionColorActive = Y(n, { alpha: .15 }), i.optionColorActiveInverted = t, i.optionColorHoverInverted = t, i;
	}
}, eC = { padding: "8px 14px" }, tC = {
	name: "Tooltip",
	common: Q,
	peers: { Popover: Ub },
	self(e) {
		let { borderRadius: t, boxShadow2: n, popoverColor: r, textColor2: i } = e;
		return Object.assign(Object.assign({}, eC), {
			borderRadius: t,
			boxShadow: n,
			color: r,
			textColor: i
		});
	}
}, nC = {
	name: "Ellipsis",
	common: Q,
	peers: { Tooltip: tC }
}, rC = {
	radioSizeSmall: "14px",
	radioSizeMedium: "16px",
	radioSizeLarge: "18px",
	labelPadding: "0 8px",
	labelFontWeight: "400"
}, iC = {
	name: "Radio",
	common: Q,
	self(e) {
		let { borderColor: t, primaryColor: n, baseColor: r, textColorDisabled: i, inputColorDisabled: a, textColor2: o, opacityDisabled: s, borderRadius: c, fontSizeSmall: l, fontSizeMedium: u, fontSizeLarge: d, heightSmall: f, heightMedium: p, heightLarge: m, lineHeight: h } = e;
		return Object.assign(Object.assign({}, rC), {
			labelLineHeight: h,
			buttonHeightSmall: f,
			buttonHeightMedium: p,
			buttonHeightLarge: m,
			fontSizeSmall: l,
			fontSizeMedium: u,
			fontSizeLarge: d,
			boxShadow: `inset 0 0 0 1px ${t}`,
			boxShadowActive: `inset 0 0 0 1px ${n}`,
			boxShadowFocus: `inset 0 0 0 1px ${n}, 0 0 0 2px ${Y(n, { alpha: .3 })}`,
			boxShadowHover: `inset 0 0 0 1px ${n}`,
			boxShadowDisabled: `inset 0 0 0 1px ${t}`,
			color: "#0000",
			colorDisabled: a,
			colorActive: "#0000",
			textColor: o,
			textColorDisabled: i,
			dotColorActive: n,
			dotColorDisabled: t,
			buttonBorderColor: t,
			buttonBorderColorActive: n,
			buttonBorderColorHover: n,
			buttonColor: "#0000",
			buttonColorActive: n,
			buttonTextColor: o,
			buttonTextColorActive: r,
			buttonTextColorHover: n,
			opacityDisabled: s,
			buttonBoxShadowFocus: `inset 0 0 0 1px ${n}, 0 0 0 2px ${Y(n, { alpha: .3 })}`,
			buttonBoxShadowHover: `inset 0 0 0 1px ${n}`,
			buttonBoxShadow: "inset 0 0 0 1px #0000",
			buttonBorderRadius: c
		});
	}
}, aC = {
	thPaddingSmall: "8px",
	thPaddingMedium: "12px",
	thPaddingLarge: "12px",
	tdPaddingSmall: "8px",
	tdPaddingMedium: "12px",
	tdPaddingLarge: "12px",
	sorterSize: "15px",
	resizableContainerSize: "8px",
	resizableSize: "2px",
	filterSize: "15px",
	paginationMargin: "12px 0 0 0",
	emptyPadding: "48px 0",
	actionPadding: "8px 12px",
	actionButtonMargin: "0 8px 0 0"
};
// node_modules/naive-ui/es/data-table/styles/light.mjs
function oC(e) {
	let { cardColor: t, modalColor: n, popoverColor: r, textColor2: i, textColor1: a, tableHeaderColor: o, tableColorHover: s, iconColor: c, primaryColor: l, fontWeightStrong: u, borderRadius: d, lineHeight: f, fontSizeSmall: p, fontSizeMedium: m, fontSizeLarge: h, dividerColor: g, heightSmall: _, opacityDisabled: v, tableColorStriped: y } = e;
	return Object.assign(Object.assign({}, aC), {
		actionDividerColor: g,
		lineHeight: f,
		borderRadius: d,
		fontSizeSmall: p,
		fontSizeMedium: m,
		fontSizeLarge: h,
		borderColor: J(t, g),
		tdColorHover: J(t, s),
		tdColorSorting: J(t, s),
		tdColorStriped: J(t, y),
		thColor: J(t, o),
		thColorHover: J(J(t, o), s),
		thColorSorting: J(J(t, o), s),
		tdColor: t,
		tdTextColor: i,
		thTextColor: a,
		thFontWeight: u,
		thButtonColorHover: s,
		thIconColor: c,
		thIconColorActive: l,
		borderColorModal: J(n, g),
		tdColorHoverModal: J(n, s),
		tdColorSortingModal: J(n, s),
		tdColorStripedModal: J(n, y),
		thColorModal: J(n, o),
		thColorHoverModal: J(J(n, o), s),
		thColorSortingModal: J(J(n, o), s),
		tdColorModal: n,
		borderColorPopover: J(r, g),
		tdColorHoverPopover: J(r, s),
		tdColorSortingPopover: J(r, s),
		tdColorStripedPopover: J(r, y),
		thColorPopover: J(r, o),
		thColorHoverPopover: J(J(r, o), s),
		thColorSortingPopover: J(J(r, o), s),
		tdColorPopover: r,
		boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
		boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
		loadingColor: l,
		loadingSize: _,
		opacityLoading: v
	});
}
// node_modules/naive-ui/es/data-table/styles/dark.mjs
var sC = {
	name: "DataTable",
	common: Q,
	peers: {
		Button: gS,
		Checkbox: AS,
		Radio: iC,
		Pagination: XS,
		Scrollbar: Fy,
		Empty: wb,
		Popover: Ub,
		Ellipsis: nC,
		Dropdown: $S
	},
	self(e) {
		let t = oC(e);
		return t.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", t.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", t;
	}
};
// node_modules/naive-ui/es/icon/styles/light.mjs
function cC(e) {
	let { textColorBase: t, opacity1: n, opacity2: r, opacity3: i, opacity4: a, opacity5: o } = e;
	return {
		color: t,
		opacity1Depth: n,
		opacity2Depth: r,
		opacity3Depth: i,
		opacity4Depth: a,
		opacity5Depth: o
	};
}
// node_modules/naive-ui/es/icon/styles/dark.mjs
var lC = {
	name: "Icon",
	common: Q,
	self: cC
}, uC = {
	itemFontSize: "12px",
	itemHeight: "36px",
	itemWidth: "52px",
	panelActionPadding: "8px 0"
};
// node_modules/naive-ui/es/time-picker/styles/light.mjs
function dC(e) {
	let { popoverColor: t, textColor2: n, primaryColor: r, hoverColor: i, dividerColor: a, opacityDisabled: o, boxShadow2: s, borderRadius: c, iconColor: l, iconColorDisabled: u } = e;
	return Object.assign(Object.assign({}, uC), {
		panelColor: t,
		panelBoxShadow: s,
		panelDividerColor: a,
		itemTextColor: n,
		itemTextColorActive: r,
		itemColorHover: i,
		itemOpacityDisabled: o,
		itemBorderRadius: c,
		borderRadius: c,
		iconColor: l,
		iconColorDisabled: u
	});
}
var fC = {
	name: "TimePicker",
	common: Q,
	peers: {
		Scrollbar: Fy,
		Button: gS,
		Input: Wx
	},
	self: dC
}, pC = {
	itemSize: "24px",
	itemCellWidth: "38px",
	itemCellHeight: "32px",
	scrollItemWidth: "80px",
	scrollItemHeight: "40px",
	panelExtraFooterPadding: "8px 12px",
	panelActionPadding: "8px 12px",
	calendarTitlePadding: "0",
	calendarTitleHeight: "28px",
	arrowSize: "14px",
	panelHeaderPadding: "8px 12px",
	calendarDaysHeight: "32px",
	calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
	calendarLeftPaddingDate: "6px 12px 4px 12px",
	calendarLeftPaddingDatetime: "4px 12px",
	calendarLeftPaddingDaterange: "6px 12px 4px 12px",
	calendarLeftPaddingDatetimerange: "4px 12px",
	calendarLeftPaddingMonth: "0",
	calendarLeftPaddingYear: "0",
	calendarLeftPaddingQuarter: "0",
	calendarLeftPaddingMonthrange: "0",
	calendarLeftPaddingQuarterrange: "0",
	calendarLeftPaddingYearrange: "0",
	calendarLeftPaddingWeek: "6px 12px 4px 12px",
	calendarRightPaddingDate: "6px 12px 4px 12px",
	calendarRightPaddingDatetime: "4px 12px",
	calendarRightPaddingDaterange: "6px 12px 4px 12px",
	calendarRightPaddingDatetimerange: "4px 12px",
	calendarRightPaddingMonth: "0",
	calendarRightPaddingYear: "0",
	calendarRightPaddingQuarter: "0",
	calendarRightPaddingMonthrange: "0",
	calendarRightPaddingQuarterrange: "0",
	calendarRightPaddingYearrange: "0",
	calendarRightPaddingWeek: "0"
};
// node_modules/naive-ui/es/date-picker/styles/light.mjs
function mC(e) {
	let { hoverColor: t, fontSize: n, textColor2: r, textColorDisabled: i, popoverColor: a, primaryColor: o, borderRadiusSmall: s, iconColor: c, iconColorDisabled: l, textColor1: u, dividerColor: d, boxShadow2: f, borderRadius: p, fontWeightStrong: m } = e;
	return Object.assign(Object.assign({}, pC), {
		itemFontSize: n,
		calendarDaysFontSize: n,
		calendarTitleFontSize: n,
		itemTextColor: r,
		itemTextColorDisabled: i,
		itemTextColorActive: a,
		itemTextColorCurrent: o,
		itemColorIncluded: Y(o, { alpha: .1 }),
		itemColorHover: t,
		itemColorDisabled: t,
		itemColorActive: o,
		itemBorderRadius: s,
		panelColor: a,
		panelTextColor: r,
		arrowColor: c,
		calendarTitleTextColor: u,
		calendarTitleColorHover: t,
		calendarDaysTextColor: r,
		panelHeaderDividerColor: d,
		calendarDaysDividerColor: d,
		calendarDividerColor: d,
		panelActionDividerColor: d,
		panelBoxShadow: f,
		panelBorderRadius: p,
		calendarTitleFontWeight: m,
		scrollItemBorderRadius: p,
		iconColor: c,
		iconColorDisabled: l
	});
}
// node_modules/naive-ui/es/date-picker/styles/dark.mjs
var hC = {
	name: "DatePicker",
	common: Q,
	peers: {
		Input: Wx,
		Button: gS,
		TimePicker: fC,
		Scrollbar: Fy
	},
	self(e) {
		let { popoverColor: t, hoverColor: n, primaryColor: r } = e, i = mC(e);
		return i.itemColorDisabled = J(t, n), i.itemColorIncluded = Y(r, { alpha: .15 }), i.itemColorHover = J(t, n), i;
	}
}, gC = {
	thPaddingBorderedSmall: "8px 12px",
	thPaddingBorderedMedium: "12px 16px",
	thPaddingBorderedLarge: "16px 24px",
	thPaddingSmall: "0",
	thPaddingMedium: "0",
	thPaddingLarge: "0",
	tdPaddingBorderedSmall: "8px 12px",
	tdPaddingBorderedMedium: "12px 16px",
	tdPaddingBorderedLarge: "16px 24px",
	tdPaddingSmall: "0 0 8px 0",
	tdPaddingMedium: "0 0 12px 0",
	tdPaddingLarge: "0 0 16px 0"
};
// node_modules/naive-ui/es/descriptions/styles/light.mjs
function _C(e) {
	let { tableHeaderColor: t, textColor2: n, textColor1: r, cardColor: i, modalColor: a, popoverColor: o, dividerColor: s, borderRadius: c, fontWeightStrong: l, lineHeight: u, fontSizeSmall: d, fontSizeMedium: f, fontSizeLarge: p } = e;
	return Object.assign(Object.assign({}, gC), {
		lineHeight: u,
		fontSizeSmall: d,
		fontSizeMedium: f,
		fontSizeLarge: p,
		titleTextColor: r,
		thColor: J(i, t),
		thColorModal: J(a, t),
		thColorPopover: J(o, t),
		thTextColor: r,
		thFontWeight: l,
		tdTextColor: n,
		tdColor: i,
		tdColorModal: a,
		tdColorPopover: o,
		borderColor: J(i, s),
		borderColorModal: J(a, s),
		borderColorPopover: J(o, s),
		borderRadius: c
	});
}
var vC = {
	name: "Descriptions",
	common: jy,
	self: _C
}, yC = {
	name: "Descriptions",
	common: Q,
	self: _C
}, bC = U([
	W("descriptions", { fontSize: "var(--n-font-size)" }, [
		W("descriptions-separator", "\n display: inline-block;\n margin: 0 8px 0 2px;\n "),
		W("descriptions-table-wrapper", [W("descriptions-table", [W("descriptions-table-row", [W("descriptions-table-header", { padding: "var(--n-th-padding)" }), W("descriptions-table-content", { padding: "var(--n-td-padding)" })])])]),
		pc("bordered", [W("descriptions-table-wrapper", [W("descriptions-table", [W("descriptions-table-row", [U("&:last-child", [W("descriptions-table-content", { paddingBottom: 0 })])])])])]),
		K("left-label-placement", [W("descriptions-table-content", [U("> *", { verticalAlign: "top" })])]),
		K("left-label-align", [U("th", { textAlign: "left" })]),
		K("center-label-align", [U("th", { textAlign: "center" })]),
		K("right-label-align", [U("th", { textAlign: "right" })]),
		K("bordered", [W("descriptions-table-wrapper", "\n border-radius: var(--n-border-radius);\n overflow: hidden;\n background: var(--n-merged-td-color);\n border: 1px solid var(--n-merged-border-color);\n ", [W("descriptions-table", [W("descriptions-table-row", [
			U("&:not(:last-child)", [W("descriptions-table-content", { borderBottom: "1px solid var(--n-merged-border-color)" }), W("descriptions-table-header", { borderBottom: "1px solid var(--n-merged-border-color)" })]),
			W("descriptions-table-header", "\n font-weight: 400;\n background-clip: padding-box;\n background-color: var(--n-merged-th-color);\n ", [U("&:not(:last-child)", { borderRight: "1px solid var(--n-merged-border-color)" })]),
			W("descriptions-table-content", [U("&:not(:last-child)", { borderRight: "1px solid var(--n-merged-border-color)" })])
		])])])]),
		W("descriptions-header", "\n font-weight: var(--n-th-font-weight);\n font-size: 18px;\n transition: color .3s var(--n-bezier);\n line-height: var(--n-line-height);\n margin-bottom: 16px;\n color: var(--n-title-text-color);\n "),
		W("descriptions-table-wrapper", "\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [W("descriptions-table", "\n width: 100%;\n border-collapse: separate;\n border-spacing: 0;\n box-sizing: border-box;\n ", [W("descriptions-table-row", "\n box-sizing: border-box;\n transition: border-color .3s var(--n-bezier);\n ", [
			W("descriptions-table-header", "\n font-weight: var(--n-th-font-weight);\n line-height: var(--n-line-height);\n display: table-cell;\n box-sizing: border-box;\n color: var(--n-th-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n "),
			W("descriptions-table-content", "\n vertical-align: top;\n line-height: var(--n-line-height);\n display: table-cell;\n box-sizing: border-box;\n color: var(--n-td-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [G("content", "\n transition: color .3s var(--n-bezier);\n display: inline-block;\n color: var(--n-td-text-color);\n ")]),
			G("label", "\n font-weight: var(--n-th-font-weight);\n transition: color .3s var(--n-bezier);\n display: inline-block;\n margin-right: 14px;\n color: var(--n-th-text-color);\n ")
		])])])
	]),
	W("descriptions-table-wrapper", "\n --n-merged-th-color: var(--n-th-color);\n --n-merged-td-color: var(--n-td-color);\n --n-merged-border-color: var(--n-border-color);\n "),
	mc(W("descriptions-table-wrapper", "\n --n-merged-th-color: var(--n-th-color-modal);\n --n-merged-td-color: var(--n-td-color-modal);\n --n-merged-border-color: var(--n-border-color-modal);\n ")),
	hc(W("descriptions-table-wrapper", "\n --n-merged-th-color: var(--n-th-color-popover);\n --n-merged-td-color: var(--n-td-color-popover);\n --n-merged-border-color: var(--n-border-color-popover);\n "))
]), xC = "DESCRIPTION_ITEM_FLAG";
function SC(e) {
	return typeof e == "object" && e && !Array.isArray(e) ? e.type && e.type.DESCRIPTION_ITEM_FLAG : !1;
}
var CC = /* @__PURE__ */ z({
	name: "Descriptions",
	props: Object.assign(Object.assign({}, Yv.props), {
		title: String,
		column: {
			type: Number,
			default: 3
		},
		columns: Number,
		labelPlacement: {
			type: String,
			default: "top"
		},
		labelAlign: {
			type: String,
			default: "left"
		},
		separator: {
			type: String,
			default: ":"
		},
		size: String,
		bordered: Boolean,
		labelClass: String,
		labelStyle: [Object, String],
		contentClass: String,
		contentStyle: [Object, String]
	}),
	slots: Object,
	setup(e) {
		let { mergedClsPrefixRef: t, inlineThemeDisabled: n, mergedComponentPropsRef: r } = gf(e), i = V(() => e.size || r?.value?.Descriptions?.size || "medium"), a = Yv("Descriptions", "-descriptions", bC, vC, e, t), o = V(() => {
			let { bordered: t } = e, n = i.value, { common: { cubicBezierEaseInOut: r }, self: { titleTextColor: o, thColor: s, thColorModal: c, thColorPopover: l, thTextColor: u, thFontWeight: d, tdTextColor: f, tdColor: p, tdColorModal: m, tdColorPopover: h, borderColor: g, borderColorModal: _, borderColorPopover: v, borderRadius: y, lineHeight: b, [q("fontSize", n)]: x, [q(t ? "thPaddingBordered" : "thPadding", n)]: S, [q(t ? "tdPaddingBordered" : "tdPadding", n)]: C } } = a.value;
			return {
				"--n-title-text-color": o,
				"--n-th-padding": S,
				"--n-td-padding": C,
				"--n-font-size": x,
				"--n-bezier": r,
				"--n-th-font-weight": d,
				"--n-line-height": b,
				"--n-th-text-color": u,
				"--n-td-text-color": f,
				"--n-th-color": s,
				"--n-th-color-modal": c,
				"--n-th-color-popover": l,
				"--n-td-color": p,
				"--n-td-color-modal": m,
				"--n-td-color-popover": h,
				"--n-border-radius": y,
				"--n-border-color": g,
				"--n-border-color-modal": _,
				"--n-border-color-popover": v
			};
		}), s = n ? _f("descriptions", V(() => {
			let t = "", { bordered: n } = e;
			return n && (t += "a"), t += i.value[0], t;
		}), o, e) : void 0;
		return {
			mergedClsPrefix: t,
			cssVars: n ? void 0 : o,
			themeClass: s?.themeClass,
			onRender: s?.onRender,
			compitableColumn: Cl(e, ["columns", "column"]),
			inlineThemeDisabled: n,
			mergedSize: i
		};
	},
	render() {
		let e = this.$slots.default, t = e ? nf(e()) : [];
		t.length;
		let { contentClass: n, labelClass: r, compitableColumn: i, labelPlacement: a, labelAlign: o, mergedSize: s, bordered: c, title: l, cssVars: u, mergedClsPrefix: d, separator: f, onRender: p } = this;
		p?.();
		let m = t.filter((e) => SC(e)), h = m.reduce((e, t, o) => {
			let s = t.props || {}, l = m.length - 1 === o, u = ["label" in s ? s.label : of(t, "label")], p = [of(t)], h = s.span || 1, g = e.span;
			e.span += h;
			let _ = s.labelStyle || s["label-style"] || this.labelStyle, v = s.contentStyle || s["content-style"] || this.contentStyle;
			if (a === "left") c ? e.row.push(H("th", {
				class: [`${d}-descriptions-table-header`, r],
				colspan: 1,
				style: _
			}, u), H("td", {
				class: [`${d}-descriptions-table-content`, n],
				colspan: l ? (i - g) * 2 + 1 : h * 2 - 1,
				style: v
			}, p)) : e.row.push(H("td", {
				class: `${d}-descriptions-table-content`,
				colspan: l ? (i - g) * 2 : h * 2
			}, H("span", {
				class: [`${d}-descriptions-table-content__label`, r],
				style: _
			}, [...u, f && H("span", { class: `${d}-descriptions-separator` }, f)]), H("span", {
				class: [`${d}-descriptions-table-content__content`, n],
				style: v
			}, p)));
			else {
				let t = l ? (i - g) * 2 : h * 2;
				e.row.push(H("th", {
					class: [`${d}-descriptions-table-header`, r],
					colspan: t,
					style: _
				}, u)), e.secondRow.push(H("td", {
					class: [`${d}-descriptions-table-content`, n],
					colspan: t,
					style: v
				}, p));
			}
			return (e.span >= i || l) && (e.span = 0, e.row.length && (e.rows.push(e.row), e.row = []), a !== "left" && e.secondRow.length && (e.rows.push(e.secondRow), e.secondRow = [])), e;
		}, {
			span: 0,
			row: [],
			secondRow: [],
			rows: []
		}).rows.map((e) => H("tr", { class: `${d}-descriptions-table-row` }, e));
		return H("div", {
			style: u,
			class: [
				`${d}-descriptions`,
				this.themeClass,
				`${d}-descriptions--${a}-label-placement`,
				`${d}-descriptions--${o}-label-align`,
				`${d}-descriptions--${s}-size`,
				c && `${d}-descriptions--bordered`
			]
		}, l || this.$slots.header ? H("div", { class: `${d}-descriptions-header` }, l || af(this, "header")) : null, H("div", { class: `${d}-descriptions-table-wrapper` }, H("table", { class: `${d}-descriptions-table` }, H("tbody", null, a === "top" && H("tr", {
			class: `${d}-descriptions-table-row`,
			style: { visibility: "collapse" }
		}, ol(i * 2, H("td", null))), h))));
	}
}), wC = {
	label: String,
	span: {
		type: Number,
		default: 1
	},
	labelClass: String,
	labelStyle: [Object, String],
	contentClass: String,
	contentStyle: [Object, String]
}, TC = /* @__PURE__ */ z({
	name: "DescriptionsItem",
	[xC]: !0,
	props: wC,
	slots: Object,
	render() {
		return null;
	}
}), EC = {
	titleFontSize: "18px",
	padding: "16px 28px 20px 28px",
	iconSize: "28px",
	actionSpace: "12px",
	contentMargin: "8px 0 16px 0",
	iconMargin: "0 4px 0 0",
	iconMarginIconTop: "4px 0 8px 0",
	closeSize: "22px",
	closeIconSize: "18px",
	closeMargin: "20px 26px 0 0",
	closeMarginIconTop: "10px 16px 0 0"
};
// node_modules/naive-ui/es/dialog/styles/light.mjs
function DC(e) {
	let { textColor1: t, textColor2: n, modalColor: r, closeIconColor: i, closeIconColorHover: a, closeIconColorPressed: o, closeColorHover: s, closeColorPressed: c, infoColor: l, successColor: u, warningColor: d, errorColor: f, primaryColor: p, dividerColor: m, borderRadius: h, fontWeightStrong: g, lineHeight: _, fontSize: v } = e;
	return Object.assign(Object.assign({}, EC), {
		fontSize: v,
		lineHeight: _,
		border: `1px solid ${m}`,
		titleTextColor: t,
		textColor: n,
		color: r,
		closeColorHover: s,
		closeColorPressed: c,
		closeIconColor: i,
		closeIconColorHover: a,
		closeIconColorPressed: o,
		closeBorderRadius: h,
		iconColor: p,
		iconColorInfo: l,
		iconColorSuccess: u,
		iconColorWarning: d,
		iconColorError: f,
		borderRadius: h,
		titleFontWeight: g
	});
}
var OC = {
	name: "Dialog",
	common: Q,
	peers: { Button: gS },
	self: DC
};
// node_modules/naive-ui/es/modal/styles/light.mjs
function kC(e) {
	let { modalColor: t, textColor2: n, boxShadow3: r } = e;
	return {
		color: t,
		textColor: n,
		boxShadow: r
	};
}
// node_modules/naive-ui/es/modal/styles/dark.mjs
var AC = {
	name: "Modal",
	common: Q,
	peers: {
		Scrollbar: Fy,
		Dialog: OC,
		Card: TS
	},
	self: kC
}, jC = {
	name: "LoadingBar",
	common: Q,
	self(e) {
		let { primaryColor: t } = e;
		return {
			colorError: "red",
			colorLoading: t,
			height: "2px"
		};
	}
}, MC = {
	margin: "0 0 8px 0",
	padding: "10px 20px",
	maxWidth: "720px",
	minWidth: "420px",
	iconMargin: "0 10px 0 0",
	closeMargin: "0 0 0 10px",
	closeSize: "20px",
	closeIconSize: "16px",
	iconSize: "20px",
	fontSize: "14px"
};
// node_modules/naive-ui/es/message/styles/light.mjs
function NC(e) {
	let { textColor2: t, closeIconColor: n, closeIconColorHover: r, closeIconColorPressed: i, infoColor: a, successColor: o, errorColor: s, warningColor: c, popoverColor: l, boxShadow2: u, primaryColor: d, lineHeight: f, borderRadius: p, closeColorHover: m, closeColorPressed: h } = e;
	return Object.assign(Object.assign({}, MC), {
		closeBorderRadius: p,
		textColor: t,
		textColorInfo: t,
		textColorSuccess: t,
		textColorError: t,
		textColorWarning: t,
		textColorLoading: t,
		color: l,
		colorInfo: l,
		colorSuccess: l,
		colorError: l,
		colorWarning: l,
		colorLoading: l,
		boxShadow: u,
		boxShadowInfo: u,
		boxShadowSuccess: u,
		boxShadowError: u,
		boxShadowWarning: u,
		boxShadowLoading: u,
		iconColor: t,
		iconColorInfo: a,
		iconColorSuccess: o,
		iconColorWarning: c,
		iconColorError: s,
		iconColorLoading: d,
		closeColorHover: m,
		closeColorPressed: h,
		closeIconColor: n,
		closeIconColorHover: r,
		closeIconColorPressed: i,
		closeColorHoverInfo: m,
		closeColorPressedInfo: h,
		closeIconColorInfo: n,
		closeIconColorHoverInfo: r,
		closeIconColorPressedInfo: i,
		closeColorHoverSuccess: m,
		closeColorPressedSuccess: h,
		closeIconColorSuccess: n,
		closeIconColorHoverSuccess: r,
		closeIconColorPressedSuccess: i,
		closeColorHoverError: m,
		closeColorPressedError: h,
		closeIconColorError: n,
		closeIconColorHoverError: r,
		closeIconColorPressedError: i,
		closeColorHoverWarning: m,
		closeColorPressedWarning: h,
		closeIconColorWarning: n,
		closeIconColorHoverWarning: r,
		closeIconColorPressedWarning: i,
		closeColorHoverLoading: m,
		closeColorPressedLoading: h,
		closeIconColorLoading: n,
		closeIconColorHoverLoading: r,
		closeIconColorPressedLoading: i,
		loadingColor: d,
		lineHeight: f,
		borderRadius: p,
		border: "0"
	});
}
// node_modules/naive-ui/es/message/styles/dark.mjs
var PC = {
	name: "Message",
	common: Q,
	self: NC
}, FC = {
	closeMargin: "16px 12px",
	closeSize: "20px",
	closeIconSize: "16px",
	width: "365px",
	padding: "16px",
	titleFontSize: "16px",
	metaFontSize: "12px",
	descriptionFontSize: "12px"
};
// node_modules/naive-ui/es/notification/styles/light.mjs
function IC(e) {
	let { textColor2: t, successColor: n, infoColor: r, warningColor: i, errorColor: a, popoverColor: o, closeIconColor: s, closeIconColorHover: c, closeIconColorPressed: l, closeColorHover: u, closeColorPressed: d, textColor1: f, textColor3: p, borderRadius: m, fontWeightStrong: h, boxShadow2: g, lineHeight: _, fontSize: v } = e;
	return Object.assign(Object.assign({}, FC), {
		borderRadius: m,
		lineHeight: _,
		fontSize: v,
		headerFontWeight: h,
		iconColor: t,
		iconColorSuccess: n,
		iconColorInfo: r,
		iconColorWarning: i,
		iconColorError: a,
		color: o,
		textColor: t,
		closeIconColor: s,
		closeIconColorHover: c,
		closeIconColorPressed: l,
		closeBorderRadius: m,
		closeColorHover: u,
		closeColorPressed: d,
		headerTextColor: f,
		descriptionTextColor: p,
		actionTextColor: t,
		boxShadow: g
	});
}
// node_modules/naive-ui/es/notification/styles/dark.mjs
var LC = {
	name: "Notification",
	common: Q,
	peers: { Scrollbar: Fy },
	self: IC
};
// node_modules/naive-ui/es/divider/styles/light.mjs
function RC(e) {
	let { textColor1: t, dividerColor: n, fontWeightStrong: r } = e;
	return {
		textColor: t,
		color: n,
		fontWeight: r
	};
}
// node_modules/naive-ui/es/divider/styles/dark.mjs
var zC = {
	name: "Divider",
	common: Q,
	self: RC
};
// node_modules/naive-ui/es/drawer/styles/light.mjs
function BC(e) {
	let { modalColor: t, textColor1: n, textColor2: r, boxShadow3: i, lineHeight: a, fontWeightStrong: o, dividerColor: s, closeColorHover: c, closeColorPressed: l, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, borderRadius: p, primaryColorHover: m } = e;
	return {
		bodyPadding: "16px 24px",
		borderRadius: p,
		headerPadding: "16px 24px",
		footerPadding: "16px 24px",
		color: t,
		textColor: r,
		titleTextColor: n,
		titleFontSize: "18px",
		titleFontWeight: o,
		boxShadow: i,
		lineHeight: a,
		headerBorderBottom: `1px solid ${s}`,
		footerBorderTop: `1px solid ${s}`,
		closeIconColor: u,
		closeIconColorHover: d,
		closeIconColorPressed: f,
		closeSize: "22px",
		closeIconSize: "18px",
		closeColorHover: c,
		closeColorPressed: l,
		closeBorderRadius: p,
		resizableTriggerColorHover: m
	};
}
// node_modules/naive-ui/es/drawer/styles/dark.mjs
var VC = {
	name: "Drawer",
	common: Q,
	peers: { Scrollbar: Fy },
	self: BC
}, HC = {
	actionMargin: "0 0 0 20px",
	actionMarginRtl: "0 20px 0 0"
}, UC = {
	name: "DynamicInput",
	common: Q,
	peers: {
		Input: Wx,
		Button: gS
	},
	self() {
		return HC;
	}
}, WC = {
	gapSmall: "4px 8px",
	gapMedium: "8px 12px",
	gapLarge: "12px 16px"
}, GC = {
	name: "Space",
	self() {
		return WC;
	}
};
// node_modules/naive-ui/es/space/styles/light.mjs
function KC() {
	return WC;
}
var qC = {
	name: "Space",
	self: KC
}, JC = {
	name: "Space",
	style: W("space", [K("rtl", "\n direction: rtl;\n ")])
}, YC;
function XC() {
	if (!Pl) return !0;
	if (YC === void 0) {
		let e = document.createElement("div");
		e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
		let t = e.scrollHeight === 1;
		return document.body.removeChild(e), YC = t;
	}
	return YC;
}
var ZC = /* @__PURE__ */ z({
	name: "Space",
	props: Object.assign(Object.assign({}, Yv.props), {
		align: String,
		justify: {
			type: String,
			default: "start"
		},
		inline: Boolean,
		vertical: Boolean,
		reverse: Boolean,
		size: [
			String,
			Number,
			Array
		],
		wrapItem: {
			type: Boolean,
			default: !0
		},
		itemClass: String,
		itemStyle: [String, Object],
		wrap: {
			type: Boolean,
			default: !0
		},
		internalUseGap: {
			type: Boolean,
			default: void 0
		}
	}),
	setup(e) {
		let { mergedClsPrefixRef: t, mergedRtlRef: n, mergedComponentPropsRef: r } = gf(e), i = V(() => e.size || r?.value?.Space?.size || "medium"), a = Yv("Space", "-space", void 0, qC, e, t), o = Vv("Space", n, t);
		return {
			useGap: XC(),
			rtlEnabled: o,
			mergedClsPrefix: t,
			margin: V(() => {
				let e = i.value;
				if (Array.isArray(e)) return {
					horizontal: e[0],
					vertical: e[1]
				};
				if (typeof e == "number") return {
					horizontal: e,
					vertical: e
				};
				let { self: { [q("gap", e)]: t } } = a.value, { row: n, col: r } = Ec(t);
				return {
					horizontal: Cc(r),
					vertical: Cc(n)
				};
			})
		};
	},
	render() {
		let { vertical: e, reverse: t, align: n, inline: r, justify: i, itemClass: a, itemStyle: o, margin: s, wrap: c, mergedClsPrefix: l, rtlEnabled: u, useGap: d, wrapItem: f, internalUseGap: p } = this, m = nf(af(this), !1);
		if (!m.length) return null;
		let h = `${s.horizontal}px`, g = `${s.horizontal / 2}px`, _ = `${s.vertical}px`, v = `${s.vertical / 2}px`, y = m.length - 1, b = i.startsWith("space-");
		return H("div", {
			role: "none",
			class: [`${l}-space`, u && `${l}-space--rtl`],
			style: {
				display: r ? "inline-flex" : "flex",
				flexDirection: e && !t ? "column" : e && t ? "column-reverse" : !e && t ? "row-reverse" : "row",
				justifyContent: ["start", "end"].includes(i) ? `flex-${i}` : i,
				flexWrap: !c || e ? "nowrap" : "wrap",
				marginTop: d || e ? "" : `-${v}`,
				marginBottom: d || e ? "" : `-${v}`,
				alignItems: n,
				gap: d ? `${s.vertical}px ${s.horizontal}px` : ""
			}
		}, !f && (d || p) ? m : m.map((t, n) => t.type === da ? t : H("div", {
			role: "none",
			class: a,
			style: [
				o,
				{ maxWidth: "100%" },
				d ? "" : e ? { marginBottom: n === y ? "" : _ } : u ? {
					marginLeft: b ? i === "space-between" && n === y ? "" : g : n === y ? "" : h,
					marginRight: b ? i === "space-between" && n === 0 ? "" : g : "",
					paddingTop: v,
					paddingBottom: v
				} : {
					marginRight: b ? i === "space-between" && n === y ? "" : g : n === y ? "" : h,
					marginLeft: b ? i === "space-between" && n === 0 ? "" : g : "",
					paddingTop: v,
					paddingBottom: v
				}
			]
		}, t)));
	}
}), QC = {
	name: "DynamicTags",
	common: Q,
	peers: {
		Input: Wx,
		Button: gS,
		Tag: ax,
		Space: GC
	},
	self() {
		return { inputWidth: "64px" };
	}
}, $C = {
	name: "Element",
	common: Q
}, ew = {
	gapSmall: "4px 8px",
	gapMedium: "8px 12px",
	gapLarge: "12px 16px"
}, tw = {
	name: "Flex",
	self() {
		return ew;
	}
}, nw = {
	name: "ButtonGroup",
	common: Q
}, rw = {
	feedbackPadding: "4px 0 0 2px",
	feedbackHeightSmall: "24px",
	feedbackHeightMedium: "24px",
	feedbackHeightLarge: "26px",
	feedbackFontSizeSmall: "13px",
	feedbackFontSizeMedium: "14px",
	feedbackFontSizeLarge: "14px",
	labelFontSizeLeftSmall: "14px",
	labelFontSizeLeftMedium: "14px",
	labelFontSizeLeftLarge: "15px",
	labelFontSizeTopSmall: "13px",
	labelFontSizeTopMedium: "14px",
	labelFontSizeTopLarge: "14px",
	labelHeightSmall: "24px",
	labelHeightMedium: "26px",
	labelHeightLarge: "28px",
	labelPaddingVertical: "0 0 6px 2px",
	labelPaddingHorizontal: "0 12px 0 0",
	labelTextAlignVertical: "left",
	labelTextAlignHorizontal: "right",
	labelFontWeight: "400"
};
// node_modules/naive-ui/es/form/styles/light.mjs
function iw(e) {
	let { heightSmall: t, heightMedium: n, heightLarge: r, textColor1: i, errorColor: a, warningColor: o, lineHeight: s, textColor3: c } = e;
	return Object.assign(Object.assign({}, rw), {
		blankHeightSmall: t,
		blankHeightMedium: n,
		blankHeightLarge: r,
		lineHeight: s,
		labelTextColor: i,
		asteriskColor: a,
		feedbackTextColorError: a,
		feedbackTextColorWarning: o,
		feedbackTextColor: c
	});
}
// node_modules/naive-ui/es/form/styles/dark.mjs
var aw = {
	name: "Form",
	common: Q,
	self: iw
}, ow = {
	name: "GradientText",
	common: Q,
	self(e) {
		let { primaryColor: t, successColor: n, warningColor: r, errorColor: i, infoColor: a, primaryColorSuppl: o, successColorSuppl: s, warningColorSuppl: c, errorColorSuppl: l, infoColorSuppl: u, fontWeightStrong: d } = e;
		return {
			fontWeight: d,
			rotate: "252deg",
			colorStartPrimary: t,
			colorEndPrimary: o,
			colorStartInfo: a,
			colorEndInfo: u,
			colorStartWarning: r,
			colorEndWarning: c,
			colorStartError: i,
			colorEndError: l,
			colorStartSuccess: n,
			colorEndSuccess: s
		};
	}
}, sw = {
	name: "InputNumber",
	common: Q,
	peers: {
		Button: gS,
		Input: Wx
	},
	self(e) {
		let { textColorDisabled: t } = e;
		return { iconColorDisabled: t };
	}
};
// node_modules/naive-ui/es/input-otp/styles/light.mjs
function cw() {
	return {
		inputWidthSmall: "24px",
		inputWidthMedium: "30px",
		inputWidthLarge: "36px",
		gapSmall: "8px",
		gapMedium: "8px",
		gapLarge: "8px"
	};
}
// node_modules/naive-ui/es/input-otp/styles/dark.mjs
var lw = {
	name: "InputOtp",
	common: Q,
	peers: { Input: Wx },
	self: cw
}, uw = {
	name: "Layout",
	common: Q,
	peers: { Scrollbar: Fy },
	self(e) {
		let { textColor2: t, bodyColor: n, popoverColor: r, cardColor: i, dividerColor: a, scrollbarColor: o, scrollbarColorHover: s } = e;
		return {
			textColor: t,
			textColorInverted: t,
			color: n,
			colorEmbedded: n,
			headerColor: i,
			headerColorInverted: i,
			footerColor: i,
			footerColorInverted: i,
			headerBorderColor: a,
			headerBorderColorInverted: a,
			footerBorderColor: a,
			footerBorderColorInverted: a,
			siderBorderColor: a,
			siderBorderColorInverted: a,
			siderColor: i,
			siderColorInverted: i,
			siderToggleButtonBorder: "1px solid transparent",
			siderToggleButtonColor: r,
			siderToggleButtonIconColor: t,
			siderToggleButtonIconColorInverted: t,
			siderToggleBarColor: J(n, o),
			siderToggleBarColorHover: J(n, s),
			__invertScrollbar: "false"
		};
	}
}, dw = {
	name: "Row",
	common: Q
};
// node_modules/naive-ui/es/list/styles/light.mjs
function fw(e) {
	let { textColor2: t, cardColor: n, modalColor: r, popoverColor: i, dividerColor: a, borderRadius: o, fontSize: s, hoverColor: c } = e;
	return {
		textColor: t,
		color: n,
		colorHover: c,
		colorModal: r,
		colorHoverModal: J(r, c),
		colorPopover: i,
		colorHoverPopover: J(i, c),
		borderColor: a,
		borderColorModal: J(r, a),
		borderColorPopover: J(i, a),
		borderRadius: o,
		fontSize: s
	};
}
// node_modules/naive-ui/es/list/styles/dark.mjs
var pw = {
	name: "List",
	common: Q,
	self: fw
}, mw = {
	name: "Log",
	common: Q,
	peers: {
		Scrollbar: Fy,
		Code: NS
	},
	self(e) {
		let { textColor2: t, inputColor: n, fontSize: r, primaryColor: i } = e;
		return {
			loaderFontSize: r,
			loaderTextColor: t,
			loaderColor: n,
			loaderBorder: "1px solid #0000",
			loadingColor: i
		};
	}
}, hw = {
	name: "Mention",
	common: Q,
	peers: {
		InternalSelectMenu: Ab,
		Input: Wx
	},
	self(e) {
		let { boxShadow2: t } = e;
		return { menuBoxShadow: t };
	}
};
// node_modules/naive-ui/es/menu/styles/light.mjs
function gw(e, t, n, r) {
	return {
		itemColorHoverInverted: "#0000",
		itemColorActiveInverted: t,
		itemColorActiveHoverInverted: t,
		itemColorActiveCollapsedInverted: t,
		itemTextColorInverted: e,
		itemTextColorHoverInverted: n,
		itemTextColorChildActiveInverted: n,
		itemTextColorChildActiveHoverInverted: n,
		itemTextColorActiveInverted: n,
		itemTextColorActiveHoverInverted: n,
		itemTextColorHorizontalInverted: e,
		itemTextColorHoverHorizontalInverted: n,
		itemTextColorChildActiveHorizontalInverted: n,
		itemTextColorChildActiveHoverHorizontalInverted: n,
		itemTextColorActiveHorizontalInverted: n,
		itemTextColorActiveHoverHorizontalInverted: n,
		itemIconColorInverted: e,
		itemIconColorHoverInverted: n,
		itemIconColorActiveInverted: n,
		itemIconColorActiveHoverInverted: n,
		itemIconColorChildActiveInverted: n,
		itemIconColorChildActiveHoverInverted: n,
		itemIconColorCollapsedInverted: e,
		itemIconColorHorizontalInverted: e,
		itemIconColorHoverHorizontalInverted: n,
		itemIconColorActiveHorizontalInverted: n,
		itemIconColorActiveHoverHorizontalInverted: n,
		itemIconColorChildActiveHorizontalInverted: n,
		itemIconColorChildActiveHoverHorizontalInverted: n,
		arrowColorInverted: e,
		arrowColorHoverInverted: n,
		arrowColorActiveInverted: n,
		arrowColorActiveHoverInverted: n,
		arrowColorChildActiveInverted: n,
		arrowColorChildActiveHoverInverted: n,
		groupTextColorInverted: r
	};
}
function _w(e) {
	let { borderRadius: t, textColor3: n, primaryColor: r, textColor2: i, textColor1: a, fontSize: o, dividerColor: s, hoverColor: c, primaryColorHover: l } = e;
	return Object.assign({
		borderRadius: t,
		color: "#0000",
		groupTextColor: n,
		itemColorHover: c,
		itemColorActive: Y(r, { alpha: .1 }),
		itemColorActiveHover: Y(r, { alpha: .1 }),
		itemColorActiveCollapsed: Y(r, { alpha: .1 }),
		itemTextColor: i,
		itemTextColorHover: i,
		itemTextColorActive: r,
		itemTextColorActiveHover: r,
		itemTextColorChildActive: r,
		itemTextColorChildActiveHover: r,
		itemTextColorHorizontal: i,
		itemTextColorHoverHorizontal: l,
		itemTextColorActiveHorizontal: r,
		itemTextColorActiveHoverHorizontal: r,
		itemTextColorChildActiveHorizontal: r,
		itemTextColorChildActiveHoverHorizontal: r,
		itemIconColor: a,
		itemIconColorHover: a,
		itemIconColorActive: r,
		itemIconColorActiveHover: r,
		itemIconColorChildActive: r,
		itemIconColorChildActiveHover: r,
		itemIconColorCollapsed: a,
		itemIconColorHorizontal: a,
		itemIconColorHoverHorizontal: l,
		itemIconColorActiveHorizontal: r,
		itemIconColorActiveHoverHorizontal: r,
		itemIconColorChildActiveHorizontal: r,
		itemIconColorChildActiveHoverHorizontal: r,
		itemHeight: "42px",
		arrowColor: i,
		arrowColorHover: i,
		arrowColorActive: r,
		arrowColorActiveHover: r,
		arrowColorChildActive: r,
		arrowColorChildActiveHover: r,
		colorInverted: "#0000",
		borderColorHorizontal: "#0000",
		fontSize: o,
		dividerColor: s
	}, gw("#BBB", r, "#FFF", "#AAA"));
}
// node_modules/naive-ui/es/menu/styles/dark.mjs
var vw = {
	name: "Menu",
	common: Q,
	peers: {
		Tooltip: tC,
		Dropdown: $S
	},
	self(e) {
		let { primaryColor: t, primaryColorSuppl: n } = e, r = _w(e);
		return r.itemColorActive = Y(t, { alpha: .15 }), r.itemColorActiveHover = Y(t, { alpha: .15 }), r.itemColorActiveCollapsed = Y(t, { alpha: .15 }), r.itemColorActiveInverted = n, r.itemColorActiveHoverInverted = n, r.itemColorActiveCollapsedInverted = n, r;
	}
}, yw = {
	titleFontSize: "18px",
	backSize: "22px"
};
// node_modules/naive-ui/es/page-header/styles/light.mjs
function bw(e) {
	let { textColor1: t, textColor2: n, textColor3: r, fontSize: i, fontWeightStrong: a, primaryColorHover: o, primaryColorPressed: s } = e;
	return Object.assign(Object.assign({}, yw), {
		titleFontWeight: a,
		fontSize: i,
		titleTextColor: t,
		backColor: n,
		backColorHover: o,
		backColorPressed: s,
		subtitleTextColor: r
	});
}
// node_modules/naive-ui/es/page-header/styles/dark.mjs
var xw = {
	name: "PageHeader",
	common: Q,
	self: bw
}, Sw = { iconSize: "22px" };
// node_modules/naive-ui/es/popconfirm/styles/light.mjs
function Cw(e) {
	let { fontSize: t, warningColor: n } = e;
	return Object.assign(Object.assign({}, Sw), {
		fontSize: t,
		iconColor: n
	});
}
// node_modules/naive-ui/es/popconfirm/styles/dark.mjs
var ww = {
	name: "Popconfirm",
	common: Q,
	peers: {
		Button: gS,
		Popover: Ub
	},
	self: Cw
};
// node_modules/naive-ui/es/progress/styles/light.mjs
function Tw(e) {
	let { infoColor: t, successColor: n, warningColor: r, errorColor: i, textColor2: a, progressRailColor: o, fontSize: s, fontWeight: c } = e;
	return {
		fontSize: s,
		fontSizeCircle: "28px",
		fontWeightCircle: c,
		railColor: o,
		railHeight: "8px",
		iconSizeCircle: "36px",
		iconSizeLine: "18px",
		iconColor: t,
		iconColorInfo: t,
		iconColorSuccess: n,
		iconColorWarning: r,
		iconColorError: i,
		textColorCircle: a,
		textColorLineInner: "rgb(255, 255, 255)",
		textColorLineOuter: a,
		fillColor: t,
		fillColorInfo: t,
		fillColorSuccess: n,
		fillColorWarning: r,
		fillColorError: i,
		lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
	};
}
var Ew = {
	name: "Progress",
	common: Q,
	self(e) {
		let t = Tw(e);
		return t.textColorLineInner = "rgb(0, 0, 0)", t.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", t;
	}
}, Dw = {
	name: "Rate",
	common: Q,
	self(e) {
		let { railColor: t } = e;
		return {
			itemColor: t,
			itemColorActive: "#CCAA33",
			itemSize: "20px",
			sizeSmall: "16px",
			sizeMedium: "20px",
			sizeLarge: "24px"
		};
	}
}, Ow = {
	titleFontSizeSmall: "26px",
	titleFontSizeMedium: "32px",
	titleFontSizeLarge: "40px",
	titleFontSizeHuge: "48px",
	fontSizeSmall: "14px",
	fontSizeMedium: "14px",
	fontSizeLarge: "15px",
	fontSizeHuge: "16px",
	iconSizeSmall: "64px",
	iconSizeMedium: "80px",
	iconSizeLarge: "100px",
	iconSizeHuge: "125px",
	iconColor418: void 0,
	iconColor404: void 0,
	iconColor403: void 0,
	iconColor500: void 0
};
// node_modules/naive-ui/es/result/styles/light.mjs
function kw(e) {
	let { textColor2: t, textColor1: n, errorColor: r, successColor: i, infoColor: a, warningColor: o, lineHeight: s, fontWeightStrong: c } = e;
	return Object.assign(Object.assign({}, Ow), {
		lineHeight: s,
		titleFontWeight: c,
		titleTextColor: n,
		textColor: t,
		iconColorError: r,
		iconColorSuccess: i,
		iconColorInfo: a,
		iconColorWarning: o
	});
}
// node_modules/naive-ui/es/result/styles/dark.mjs
var Aw = {
	name: "Result",
	common: Q,
	self: kw
}, jw = {
	railHeight: "4px",
	railWidthVertical: "4px",
	handleSize: "18px",
	dotHeight: "8px",
	dotWidth: "8px",
	dotBorderRadius: "4px"
}, Mw = {
	name: "Slider",
	common: Q,
	self(e) {
		let { railColor: t, modalColor: n, primaryColorSuppl: r, popoverColor: i, textColor2: a, cardColor: o, borderRadius: s, fontSize: c, opacityDisabled: l } = e;
		return Object.assign(Object.assign({}, jw), {
			fontSize: c,
			markFontSize: c,
			railColor: t,
			railColorHover: t,
			fillColor: r,
			fillColorHover: r,
			opacityDisabled: l,
			handleColor: "#FFF",
			dotColor: o,
			dotColorModal: n,
			dotColorPopover: i,
			handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			indicatorColor: i,
			indicatorBoxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
			indicatorTextColor: a,
			indicatorBorderRadius: s,
			dotBorder: `2px solid ${t}`,
			dotBorderActive: `2px solid ${r}`,
			dotBoxShadow: ""
		});
	}
};
// node_modules/naive-ui/es/spin/styles/light.mjs
function Nw(e) {
	let { opacityDisabled: t, heightTiny: n, heightSmall: r, heightMedium: i, heightLarge: a, heightHuge: o, primaryColor: s, fontSize: c } = e;
	return {
		fontSize: c,
		textColor: s,
		sizeTiny: n,
		sizeSmall: r,
		sizeMedium: i,
		sizeLarge: a,
		sizeHuge: o,
		color: s,
		opacitySpinning: t
	};
}
// node_modules/naive-ui/es/spin/styles/dark.mjs
var Pw = {
	name: "Spin",
	common: Q,
	self: Nw
};
// node_modules/naive-ui/es/statistic/styles/light.mjs
function Fw(e) {
	let { textColor2: t, textColor3: n, fontSize: r, fontWeight: i } = e;
	return {
		labelFontSize: r,
		labelFontWeight: i,
		valueFontWeight: i,
		valueFontSize: "24px",
		labelTextColor: n,
		valuePrefixTextColor: t,
		valueSuffixTextColor: t,
		valueTextColor: t
	};
}
// node_modules/naive-ui/es/statistic/styles/dark.mjs
var Iw = {
	name: "Statistic",
	common: Q,
	self: Fw
}, Lw = {
	stepHeaderFontSizeSmall: "14px",
	stepHeaderFontSizeMedium: "16px",
	indicatorIndexFontSizeSmall: "14px",
	indicatorIndexFontSizeMedium: "16px",
	indicatorSizeSmall: "22px",
	indicatorSizeMedium: "28px",
	indicatorIconSizeSmall: "14px",
	indicatorIconSizeMedium: "18px"
};
// node_modules/naive-ui/es/steps/styles/light.mjs
function Rw(e) {
	let { fontWeightStrong: t, baseColor: n, textColorDisabled: r, primaryColor: i, errorColor: a, textColor1: o, textColor2: s } = e;
	return Object.assign(Object.assign({}, Lw), {
		stepHeaderFontWeight: t,
		indicatorTextColorProcess: n,
		indicatorTextColorWait: r,
		indicatorTextColorFinish: i,
		indicatorTextColorError: a,
		indicatorBorderColorProcess: i,
		indicatorBorderColorWait: r,
		indicatorBorderColorFinish: i,
		indicatorBorderColorError: a,
		indicatorColorProcess: i,
		indicatorColorWait: "#0000",
		indicatorColorFinish: "#0000",
		indicatorColorError: "#0000",
		splitorColorProcess: r,
		splitorColorWait: r,
		splitorColorFinish: i,
		splitorColorError: r,
		headerTextColorProcess: o,
		headerTextColorWait: r,
		headerTextColorFinish: r,
		headerTextColorError: a,
		descriptionTextColorProcess: s,
		descriptionTextColorWait: r,
		descriptionTextColorFinish: r,
		descriptionTextColorError: a
	});
}
// node_modules/naive-ui/es/steps/styles/dark.mjs
var zw = {
	name: "Steps",
	common: Q,
	self: Rw
}, Bw = {
	buttonHeightSmall: "14px",
	buttonHeightMedium: "18px",
	buttonHeightLarge: "22px",
	buttonWidthSmall: "14px",
	buttonWidthMedium: "18px",
	buttonWidthLarge: "22px",
	buttonWidthPressedSmall: "20px",
	buttonWidthPressedMedium: "24px",
	buttonWidthPressedLarge: "28px",
	railHeightSmall: "18px",
	railHeightMedium: "22px",
	railHeightLarge: "26px",
	railWidthSmall: "32px",
	railWidthMedium: "40px",
	railWidthLarge: "48px"
}, Vw = {
	name: "Switch",
	common: Q,
	self(e) {
		let { primaryColorSuppl: t, opacityDisabled: n, borderRadius: r, primaryColor: i, textColor2: a, baseColor: o } = e;
		return Object.assign(Object.assign({}, Bw), {
			iconColor: o,
			textColor: a,
			loadingColor: t,
			opacityDisabled: n,
			railColor: "rgba(255, 255, 255, .20)",
			railColorActive: t,
			buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			buttonColor: "#FFF",
			railBorderRadiusSmall: r,
			railBorderRadiusMedium: r,
			railBorderRadiusLarge: r,
			buttonBorderRadiusSmall: r,
			buttonBorderRadiusMedium: r,
			buttonBorderRadiusLarge: r,
			boxShadowFocus: `0 0 8px 0 ${Y(i, { alpha: .3 })}`
		});
	}
}, Hw = {
	thPaddingSmall: "6px",
	thPaddingMedium: "12px",
	thPaddingLarge: "12px",
	tdPaddingSmall: "6px",
	tdPaddingMedium: "12px",
	tdPaddingLarge: "12px"
};
// node_modules/naive-ui/es/table/styles/light.mjs
function Uw(e) {
	let { dividerColor: t, cardColor: n, modalColor: r, popoverColor: i, tableHeaderColor: a, tableColorStriped: o, textColor1: s, textColor2: c, borderRadius: l, fontWeightStrong: u, lineHeight: d, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: m } = e;
	return Object.assign(Object.assign({}, Hw), {
		fontSizeSmall: f,
		fontSizeMedium: p,
		fontSizeLarge: m,
		lineHeight: d,
		borderRadius: l,
		borderColor: J(n, t),
		borderColorModal: J(r, t),
		borderColorPopover: J(i, t),
		tdColor: n,
		tdColorModal: r,
		tdColorPopover: i,
		tdColorStriped: J(n, o),
		tdColorStripedModal: J(r, o),
		tdColorStripedPopover: J(i, o),
		thColor: J(n, a),
		thColorModal: J(r, a),
		thColorPopover: J(i, a),
		thTextColor: s,
		tdTextColor: c,
		thFontWeight: u
	});
}
// node_modules/naive-ui/es/table/styles/dark.mjs
var Ww = {
	name: "Table",
	common: Q,
	self: Uw
}, Gw = {
	tabFontSizeSmall: "14px",
	tabFontSizeMedium: "14px",
	tabFontSizeLarge: "16px",
	tabGapSmallLine: "36px",
	tabGapMediumLine: "36px",
	tabGapLargeLine: "36px",
	tabGapSmallLineVertical: "8px",
	tabGapMediumLineVertical: "8px",
	tabGapLargeLineVertical: "8px",
	tabPaddingSmallLine: "6px 0",
	tabPaddingMediumLine: "10px 0",
	tabPaddingLargeLine: "14px 0",
	tabPaddingVerticalSmallLine: "6px 12px",
	tabPaddingVerticalMediumLine: "8px 16px",
	tabPaddingVerticalLargeLine: "10px 20px",
	tabGapSmallBar: "36px",
	tabGapMediumBar: "36px",
	tabGapLargeBar: "36px",
	tabGapSmallBarVertical: "8px",
	tabGapMediumBarVertical: "8px",
	tabGapLargeBarVertical: "8px",
	tabPaddingSmallBar: "4px 0",
	tabPaddingMediumBar: "6px 0",
	tabPaddingLargeBar: "10px 0",
	tabPaddingVerticalSmallBar: "6px 12px",
	tabPaddingVerticalMediumBar: "8px 16px",
	tabPaddingVerticalLargeBar: "10px 20px",
	tabGapSmallCard: "4px",
	tabGapMediumCard: "4px",
	tabGapLargeCard: "4px",
	tabGapSmallCardVertical: "4px",
	tabGapMediumCardVertical: "4px",
	tabGapLargeCardVertical: "4px",
	tabPaddingSmallCard: "8px 16px",
	tabPaddingMediumCard: "10px 20px",
	tabPaddingLargeCard: "12px 24px",
	tabPaddingSmallSegment: "4px 0",
	tabPaddingMediumSegment: "6px 0",
	tabPaddingLargeSegment: "8px 0",
	tabPaddingVerticalLargeSegment: "0 8px",
	tabPaddingVerticalSmallCard: "8px 12px",
	tabPaddingVerticalMediumCard: "10px 16px",
	tabPaddingVerticalLargeCard: "12px 20px",
	tabPaddingVerticalSmallSegment: "0 4px",
	tabPaddingVerticalMediumSegment: "0 6px",
	tabGapSmallSegment: "0",
	tabGapMediumSegment: "0",
	tabGapLargeSegment: "0",
	tabGapSmallSegmentVertical: "0",
	tabGapMediumSegmentVertical: "0",
	tabGapLargeSegmentVertical: "0",
	panePaddingSmall: "8px 0 0 0",
	panePaddingMedium: "12px 0 0 0",
	panePaddingLarge: "16px 0 0 0",
	closeSize: "18px",
	closeIconSize: "14px"
};
// node_modules/naive-ui/es/tabs/styles/light.mjs
function Kw(e) {
	let { textColor2: t, primaryColor: n, textColorDisabled: r, closeIconColor: i, closeIconColorHover: a, closeIconColorPressed: o, closeColorHover: s, closeColorPressed: c, tabColor: l, baseColor: u, dividerColor: d, fontWeight: f, textColor1: p, borderRadius: m, fontSize: h, fontWeightStrong: g } = e;
	return Object.assign(Object.assign({}, Gw), {
		colorSegment: l,
		tabFontSizeCard: h,
		tabTextColorLine: p,
		tabTextColorActiveLine: n,
		tabTextColorHoverLine: n,
		tabTextColorDisabledLine: r,
		tabTextColorSegment: p,
		tabTextColorActiveSegment: t,
		tabTextColorHoverSegment: t,
		tabTextColorDisabledSegment: r,
		tabTextColorBar: p,
		tabTextColorActiveBar: n,
		tabTextColorHoverBar: n,
		tabTextColorDisabledBar: r,
		tabTextColorCard: p,
		tabTextColorHoverCard: p,
		tabTextColorActiveCard: n,
		tabTextColorDisabledCard: r,
		barColor: n,
		closeIconColor: i,
		closeIconColorHover: a,
		closeIconColorPressed: o,
		closeColorHover: s,
		closeColorPressed: c,
		closeBorderRadius: m,
		tabColor: l,
		tabColorSegment: u,
		tabBorderColor: d,
		tabFontWeightActive: f,
		tabFontWeight: f,
		tabBorderRadius: m,
		paneTextColor: t,
		fontWeightStrong: g
	});
}
// node_modules/naive-ui/es/tabs/styles/dark.mjs
var qw = {
	name: "Tabs",
	common: Q,
	self(e) {
		let t = Kw(e), { inputColor: n } = e;
		return t.colorSegment = n, t.tabColorSegment = n, t;
	}
};
// node_modules/naive-ui/es/thing/styles/light.mjs
function Jw(e) {
	let { textColor1: t, textColor2: n, fontWeightStrong: r, fontSize: i } = e;
	return {
		fontSize: i,
		titleTextColor: t,
		textColor: n,
		titleFontWeight: r
	};
}
// node_modules/naive-ui/es/thing/styles/dark.mjs
var Yw = {
	name: "Thing",
	common: Q,
	self: Jw
}, Xw = {
	titleMarginMedium: "0 0 6px 0",
	titleMarginLarge: "-2px 0 6px 0",
	titleFontSizeMedium: "14px",
	titleFontSizeLarge: "16px",
	iconSizeMedium: "14px",
	iconSizeLarge: "14px"
}, Zw = {
	name: "Timeline",
	common: Q,
	self(e) {
		let { textColor3: t, infoColorSuppl: n, errorColorSuppl: r, successColorSuppl: i, warningColorSuppl: a, textColor1: o, textColor2: s, railColor: c, fontWeightStrong: l, fontSize: u } = e;
		return Object.assign(Object.assign({}, Xw), {
			contentFontSize: u,
			titleFontWeight: l,
			circleBorder: `2px solid ${t}`,
			circleBorderInfo: `2px solid ${n}`,
			circleBorderError: `2px solid ${r}`,
			circleBorderSuccess: `2px solid ${i}`,
			circleBorderWarning: `2px solid ${a}`,
			iconColor: t,
			iconColorInfo: n,
			iconColorError: r,
			iconColorSuccess: i,
			iconColorWarning: a,
			titleTextColor: o,
			contentTextColor: s,
			metaTextColor: t,
			lineColor: c
		});
	}
}, Qw = {
	extraFontSizeSmall: "12px",
	extraFontSizeMedium: "12px",
	extraFontSizeLarge: "14px",
	titleFontSizeSmall: "14px",
	titleFontSizeMedium: "16px",
	titleFontSizeLarge: "16px",
	closeSize: "20px",
	closeIconSize: "16px",
	headerHeightSmall: "44px",
	headerHeightMedium: "44px",
	headerHeightLarge: "50px"
}, $w = {
	name: "Transfer",
	common: Q,
	peers: {
		Checkbox: AS,
		Scrollbar: Fy,
		Input: Wx,
		Empty: wb,
		Button: gS
	},
	self(e) {
		let { fontWeight: t, fontSizeLarge: n, fontSizeMedium: r, fontSizeSmall: i, heightLarge: a, heightMedium: o, borderRadius: s, inputColor: c, tableHeaderColor: l, textColor1: u, textColorDisabled: d, textColor2: f, textColor3: p, hoverColor: m, closeColorHover: h, closeColorPressed: g, closeIconColor: _, closeIconColorHover: v, closeIconColorPressed: y, dividerColor: b } = e;
		return Object.assign(Object.assign({}, Qw), {
			itemHeightSmall: o,
			itemHeightMedium: o,
			itemHeightLarge: a,
			fontSizeSmall: i,
			fontSizeMedium: r,
			fontSizeLarge: n,
			borderRadius: s,
			dividerColor: b,
			borderColor: "#0000",
			listColor: c,
			headerColor: l,
			titleTextColor: u,
			titleTextColorDisabled: d,
			extraTextColor: p,
			extraTextColorDisabled: d,
			itemTextColor: f,
			itemTextColorDisabled: d,
			itemColorPending: m,
			titleFontWeight: t,
			closeColorHover: h,
			closeColorPressed: g,
			closeIconColor: _,
			closeIconColorHover: v,
			closeIconColorPressed: y
		});
	}
};
// node_modules/naive-ui/es/tree/styles/light.mjs
function eT(e) {
	let { borderRadiusSmall: t, dividerColor: n, hoverColor: r, pressedColor: i, primaryColor: a, textColor3: o, textColor2: s, textColorDisabled: c, fontSize: l } = e;
	return {
		fontSize: l,
		lineHeight: "1.5",
		nodeHeight: "30px",
		nodeWrapperPadding: "3px 0",
		nodeBorderRadius: t,
		nodeColorHover: r,
		nodeColorPressed: i,
		nodeColorActive: Y(a, { alpha: .1 }),
		arrowColor: o,
		nodeTextColor: s,
		nodeTextColorDisabled: c,
		loadingColor: a,
		dropMarkColor: a,
		lineColor: n
	};
}
// node_modules/naive-ui/es/tree/styles/dark.mjs
var tT = {
	name: "Tree",
	common: Q,
	peers: {
		Checkbox: AS,
		Scrollbar: Fy,
		Empty: wb
	},
	self(e) {
		let { primaryColor: t } = e, n = eT(e);
		return n.nodeColorActive = Y(t, { alpha: .15 }), n;
	}
}, nT = {
	name: "TreeSelect",
	common: Q,
	peers: {
		Tree: tT,
		Empty: wb,
		InternalSelection: gx
	}
}, rT = {
	headerFontSize1: "30px",
	headerFontSize2: "22px",
	headerFontSize3: "18px",
	headerFontSize4: "16px",
	headerFontSize5: "16px",
	headerFontSize6: "16px",
	headerMargin1: "28px 0 20px 0",
	headerMargin2: "28px 0 20px 0",
	headerMargin3: "28px 0 20px 0",
	headerMargin4: "28px 0 18px 0",
	headerMargin5: "28px 0 18px 0",
	headerMargin6: "28px 0 18px 0",
	headerPrefixWidth1: "16px",
	headerPrefixWidth2: "16px",
	headerPrefixWidth3: "12px",
	headerPrefixWidth4: "12px",
	headerPrefixWidth5: "12px",
	headerPrefixWidth6: "12px",
	headerBarWidth1: "4px",
	headerBarWidth2: "4px",
	headerBarWidth3: "3px",
	headerBarWidth4: "3px",
	headerBarWidth5: "3px",
	headerBarWidth6: "3px",
	pMargin: "16px 0 16px 0",
	liMargin: ".25em 0 0 0",
	olPadding: "0 0 0 2em",
	ulPadding: "0 0 0 2em"
};
// node_modules/naive-ui/es/typography/styles/light.mjs
function iT(e) {
	let { primaryColor: t, textColor2: n, borderColor: r, lineHeight: i, fontSize: a, borderRadiusSmall: o, dividerColor: s, fontWeightStrong: c, textColor1: l, textColor3: u, infoColor: d, warningColor: f, errorColor: p, successColor: m, codeColor: h } = e;
	return Object.assign(Object.assign({}, rT), {
		aTextColor: t,
		blockquoteTextColor: n,
		blockquotePrefixColor: r,
		blockquoteLineHeight: i,
		blockquoteFontSize: a,
		codeBorderRadius: o,
		liTextColor: n,
		liLineHeight: i,
		liFontSize: a,
		hrColor: s,
		headerFontWeight: c,
		headerTextColor: l,
		pTextColor: n,
		pTextColor1Depth: l,
		pTextColor2Depth: n,
		pTextColor3Depth: u,
		pLineHeight: i,
		pFontSize: a,
		headerBarColor: t,
		headerBarColorPrimary: t,
		headerBarColorInfo: d,
		headerBarColorError: p,
		headerBarColorWarning: f,
		headerBarColorSuccess: m,
		textColor: n,
		textColor1Depth: l,
		textColor2Depth: n,
		textColor3Depth: u,
		textColorPrimary: t,
		textColorInfo: d,
		textColorSuccess: m,
		textColorWarning: f,
		textColorError: p,
		codeTextColor: n,
		codeColor: h,
		codeBorder: "1px solid #0000"
	});
}
// node_modules/naive-ui/es/typography/styles/dark.mjs
var aT = {
	name: "Typography",
	common: Q,
	self: iT
};
// node_modules/naive-ui/es/upload/styles/light.mjs
function oT(e) {
	let { iconColor: t, primaryColor: n, errorColor: r, textColor2: i, successColor: a, opacityDisabled: o, actionColor: s, borderColor: c, hoverColor: l, lineHeight: u, borderRadius: d, fontSize: f } = e;
	return {
		fontSize: f,
		lineHeight: u,
		borderRadius: d,
		draggerColor: s,
		draggerBorder: `1px dashed ${c}`,
		draggerBorderHover: `1px dashed ${n}`,
		itemColorHover: l,
		itemColorHoverError: Y(r, { alpha: .06 }),
		itemTextColor: i,
		itemTextColorError: r,
		itemTextColorSuccess: a,
		itemIconColor: t,
		itemDisabledOpacity: o,
		itemBorderImageCardError: `1px solid ${r}`,
		itemBorderImageCard: `1px solid ${c}`
	};
}
// node_modules/naive-ui/es/upload/styles/dark.mjs
var sT = {
	name: "Upload",
	common: Q,
	peers: {
		Button: gS,
		Progress: Ew
	},
	self(e) {
		let { errorColor: t } = e, n = oT(e);
		return n.itemColorHoverError = Y(t, { alpha: .09 }), n;
	}
}, cT = {
	name: "Watermark",
	common: Q,
	self(e) {
		let { fontFamily: t } = e;
		return { fontFamily: t };
	}
}, lT = {
	name: "FloatButton",
	common: Q,
	self(e) {
		let { popoverColor: t, textColor2: n, buttonColor2Hover: r, buttonColor2Pressed: i, primaryColor: a, primaryColorHover: o, primaryColorPressed: s, baseColor: c, borderRadius: l } = e;
		return {
			color: t,
			textColor: n,
			boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
			boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			colorHover: r,
			colorPressed: i,
			colorPrimary: a,
			colorPrimaryHover: o,
			colorPrimaryPressed: s,
			textColorPrimary: c,
			borderRadiusSquare: l
		};
	}
};
// node_modules/naive-ui/es/heatmap/styles/light.mjs
function uT(e) {
	let { borderRadius: t, fontSizeMini: n, fontSizeTiny: r, fontSizeSmall: i, fontWeight: a, textColor2: o, cardColor: s, buttonColor2Hover: c } = e;
	return {
		activeColors: [
			"#9be9a8",
			"#40c463",
			"#30a14e",
			"#216e39"
		],
		borderRadius: t,
		borderColor: s,
		textColor: o,
		mininumColor: c,
		fontWeight: a,
		loadingColorStart: "rgba(0, 0, 0, 0.06)",
		loadingColorEnd: "rgba(0, 0, 0, 0.12)",
		rectSizeSmall: "10px",
		rectSizeMedium: "11px",
		rectSizeLarge: "12px",
		borderRadiusSmall: "2px",
		borderRadiusMedium: "2px",
		borderRadiusLarge: "2px",
		xGapSmall: "2px",
		xGapMedium: "3px",
		xGapLarge: "3px",
		yGapSmall: "2px",
		yGapMedium: "3px",
		yGapLarge: "3px",
		fontSizeSmall: r,
		fontSizeMedium: n,
		fontSizeLarge: i
	};
}
// node_modules/naive-ui/es/heatmap/styles/dark.mjs
var dT = {
	name: "Heatmap",
	common: Q,
	self(e) {
		let t = uT(e);
		return Object.assign(Object.assign({}, t), {
			activeColors: [
				"#0d4429",
				"#006d32",
				"#26a641",
				"#39d353"
			],
			mininumColor: "rgba(255, 255, 255, 0.1)",
			loadingColorStart: "rgba(255, 255, 255, 0.12)",
			loadingColorEnd: "rgba(255, 255, 255, 0.18)"
		});
	}
};
// node_modules/naive-ui/es/icon-wrapper/styles/light.mjs
function fT(e) {
	let { primaryColor: t, baseColor: n } = e;
	return {
		color: t,
		iconColor: n
	};
}
// node_modules/naive-ui/es/icon-wrapper/styles/dark.mjs
var pT = {
	name: "IconWrapper",
	common: Q,
	self: fT
}, mT = {
	name: "Image",
	common: Q,
	peers: { Tooltip: tC },
	self: (e) => {
		let { textColor2: t } = e;
		return {
			toolbarIconColor: t,
			toolbarColor: "rgba(0, 0, 0, .35)",
			toolbarBoxShadow: "none",
			toolbarBorderRadius: "24px"
		};
	}
}, hT = {
	extraFontSize: "12px",
	width: "440px"
}, gT = {
	name: "Transfer",
	common: Q,
	peers: {
		Checkbox: AS,
		Scrollbar: Fy,
		Input: Wx,
		Empty: wb,
		Button: gS
	},
	self(e) {
		let { iconColorDisabled: t, iconColor: n, fontWeight: r, fontSizeLarge: i, fontSizeMedium: a, fontSizeSmall: o, heightLarge: s, heightMedium: c, heightSmall: l, borderRadius: u, inputColor: d, tableHeaderColor: f, textColor1: p, textColorDisabled: m, textColor2: h, hoverColor: g } = e;
		return Object.assign(Object.assign({}, hT), {
			itemHeightSmall: l,
			itemHeightMedium: c,
			itemHeightLarge: s,
			fontSizeSmall: o,
			fontSizeMedium: a,
			fontSizeLarge: i,
			borderRadius: u,
			borderColor: "#0000",
			listColor: d,
			headerColor: f,
			titleTextColor: p,
			titleTextColorDisabled: m,
			extraTextColor: h,
			filterDividerColor: "#0000",
			itemTextColor: h,
			itemTextColorDisabled: m,
			itemColorPending: g,
			titleFontWeight: r,
			iconColor: n,
			iconColorDisabled: t
		});
	}
};
// node_modules/naive-ui/es/marquee/styles/light.mjs
function _T() {
	return {};
}
// node_modules/naive-ui/es/themes/dark.mjs
var vT = {
	name: "dark",
	common: Q,
	Alert: Dx,
	Anchor: zx,
	AutoComplete: $x,
	Avatar: tS,
	AvatarGroup: rS,
	BackTop: aS,
	Badge: oS,
	Breadcrumb: lS,
	Button: gS,
	ButtonGroup: nw,
	Calendar: SS,
	Card: TS,
	Carousel: DS,
	Cascader: MS,
	Checkbox: AS,
	Code: NS,
	Collapse: FS,
	CollapseTransition: LS,
	ColorPicker: zS,
	DataTable: sC,
	DatePicker: hC,
	Descriptions: yC,
	Dialog: OC,
	Divider: zC,
	Drawer: VC,
	Dropdown: $S,
	DynamicInput: UC,
	DynamicTags: QC,
	Element: $C,
	Empty: wb,
	Ellipsis: nC,
	Equation: {
		name: "Equation",
		common: Q,
		self: () => ({})
	},
	Flex: tw,
	Form: aw,
	GradientText: ow,
	Heatmap: dT,
	Icon: lC,
	IconWrapper: pT,
	Image: mT,
	Input: Wx,
	InputNumber: sw,
	InputOtp: lw,
	LegacyTransfer: gT,
	Layout: uw,
	List: pw,
	LoadingBar: jC,
	Log: mw,
	Menu: vw,
	Mention: hw,
	Message: PC,
	Modal: AC,
	Notification: LC,
	PageHeader: xw,
	Pagination: XS,
	Popconfirm: ww,
	Popover: Ub,
	Popselect: VS,
	Progress: Ew,
	QrCode: {
		name: "QrCode",
		common: Q,
		self: (e) => ({ borderRadius: e.borderRadius })
	},
	Radio: iC,
	Rate: Dw,
	Result: Aw,
	Row: dw,
	Scrollbar: Fy,
	Select: WS,
	Skeleton: {
		name: "Skeleton",
		common: Q,
		self(e) {
			let { heightSmall: t, heightMedium: n, heightLarge: r, borderRadius: i } = e;
			return {
				color: "rgba(255, 255, 255, 0.12)",
				colorEnd: "rgba(255, 255, 255, 0.18)",
				borderRadius: i,
				heightSmall: t,
				heightMedium: n,
				heightLarge: r
			};
		}
	},
	Slider: Mw,
	Space: GC,
	Spin: Pw,
	Statistic: Iw,
	Steps: zw,
	Switch: Vw,
	Table: Ww,
	Tabs: qw,
	Tag: ax,
	Thing: Yw,
	TimePicker: fC,
	Timeline: Zw,
	Tooltip: tC,
	Transfer: $w,
	Tree: tT,
	TreeSelect: nT,
	Typography: aT,
	Upload: sT,
	Watermark: cT,
	Split: {
		name: "Split",
		common: Q
	},
	FloatButton: lT,
	FloatButtonGroup: {
		name: "FloatButtonGroup",
		common: Q,
		self(e) {
			let { popoverColor: t, dividerColor: n, borderRadius: r } = e;
			return {
				color: t,
				buttonBorderColor: n,
				borderRadiusSquare: r,
				boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
			};
		}
	},
	Marquee: {
		name: "Marquee",
		common: Q,
		self: _T
	}
}, yT = Object.freeze([
	"en",
	"zh",
	"zh-TW",
	"ja",
	"ko",
	"fr",
	"es",
	"de",
	"pt",
	"ru",
	"ar",
	"tr"
]);
function bT(e, t = yT) {
	let n = String(e || "en").replaceAll("_", "-").toLowerCase(), r = new Map(t.map((e) => [e.toLowerCase(), e]));
	return r.get(n) || r.get(n.split("-")[0]) || r.get("en") || t[0] || "en";
}
// src/client/messages.js
var xT = {
	en: {
		title: "Version Preview",
		description: "Clone a selected GitHub tag into the preview workspace, install dependencies, and run it with development ports.",
		refresh: "Refresh",
		selectTag: "Select a tag",
		prepare: "Prepare Code",
		install: "Install Dependencies",
		start: "Start Preview",
		stop: "Stop",
		note: "The plugin manages preview source, data and available ports automatically. Production stays separate.",
		path: "Preview Path",
		webuiHome: "Preview Data Home",
		currentTag: "Current Tag",
		repoReady: "Repository Ready",
		dependencies: "Dependencies Installed",
		running: "Running",
		notRunning: "Not running",
		open: "Open Preview",
		log: "Action Log Path",
		logOutput: "Log Output",
		actionLog: "Action Log",
		devLog: "Dev Server Log",
		yes: "Yes",
		no: "No",
		actionFailed: "Action failed",
		nodeEnvironmentMissing: "Node/npm was not detected. Please install Node.js and try again.",
		prepareSuccess: "Preview code is ready",
		installSuccess: "Dependencies installed",
		startSuccess: "Preview completed",
		stopSuccess: "Preview stopped",
		recursive: "A preview instance cannot launch another preview."
	},
	zh: {
		title: "版本预览",
		description: "将选中的 GitHub tag 克隆到预览工作目录，安装依赖并以开发端口运行。",
		refresh: "刷新",
		selectTag: "选择 tag",
		prepare: "准备代码",
		install: "安装依赖",
		start: "开启预览",
		stop: "停止",
		note: "预览代码、数据目录和可用端口由插件自动管理，正式环境不受影响。",
		path: "预览路径",
		webuiHome: "预览数据目录",
		currentTag: "当前 Tag",
		repoReady: "仓库就绪",
		dependencies: "依赖已安装",
		running: "运行状态",
		notRunning: "未运行",
		open: "打开预览",
		log: "操作日志路径",
		logOutput: "日志输出",
		actionLog: "操作日志",
		devLog: "开发服务日志",
		yes: "是",
		no: "否",
		actionFailed: "操作失败",
		nodeEnvironmentMissing: "未检测到可用的 Node/npm 环境，请先安装 Node.js 后重试。",
		prepareSuccess: "预览代码已准备好",
		installSuccess: "依赖安装完成",
		startSuccess: "预览已完成",
		stopSuccess: "预览已停止",
		recursive: "预览子实例不能再次启动预览。"
	},
	"zh-TW": {
		title: "版本預覽",
		description: "將選取的 GitHub tag 複製到 Web UI 預覽工作目錄，安裝依賴並以開發連接埠執行。",
		refresh: "重新整理",
		selectTag: "選擇 tag",
		prepare: "準備程式碼",
		install: "安裝依賴",
		start: "開啟預覽",
		stop: "停止",
		note: "預覽原始碼、資料目錄與可用連接埠由外掛自動管理，正式環境不受影響。",
		path: "預覽路徑",
		webuiHome: "預覽資料目錄",
		currentTag: "目前 Tag",
		repoReady: "倉庫就緒",
		dependencies: "依賴已安裝",
		running: "執行狀態",
		notRunning: "未執行",
		open: "開啟預覽",
		log: "操作日誌路徑",
		logOutput: "日誌輸出",
		actionLog: "操作日誌",
		devLog: "開發服務日誌",
		yes: "是",
		no: "否",
		actionFailed: "操作失敗",
		nodeEnvironmentMissing: "未偵測到可用的 Node/npm 環境，請先安裝 Node.js 後重試。",
		prepareSuccess: "預覽程式碼已準備好",
		installSuccess: "依賴安裝完成",
		startSuccess: "預覽已完成",
		stopSuccess: "預覽已停止",
		recursive: "預覽子實例無法再次啟動預覽。"
	},
	ja: {
		title: "バージョンプレビュー",
		description: "選択した GitHub tag を Web UI のプレビュー作業ディレクトリへクローンし、依存関係をインストールして開発ポートで起動します。",
		refresh: "更新",
		selectTag: "tag を選択",
		prepare: "コードを準備",
		install: "依存関係をインストール",
		start: "プレビューを開始",
		stop: "停止",
		note: "プレビューのソースコード、データ保存先、空きポートはプラグインが自動管理します。本番環境には影響しません。",
		path: "プレビューパス",
		webuiHome: "プレビューデータホーム",
		currentTag: "現在の Tag",
		repoReady: "リポジトリ準備済み",
		dependencies: "依存関係インストール済み",
		running: "実行状態",
		notRunning: "未実行",
		open: "プレビューを開く",
		log: "操作ログパス",
		logOutput: "ログ出力",
		actionLog: "操作ログ",
		devLog: "開発サーバーログ",
		yes: "はい",
		no: "いいえ",
		actionFailed: "操作に失敗しました",
		nodeEnvironmentMissing: "Node/npm が検出されませんでした。Node.js をインストールしてから再試行してください。",
		prepareSuccess: "プレビューコードの準備が完了しました",
		installSuccess: "依存関係をインストールしました",
		startSuccess: "プレビューが完了しました",
		stopSuccess: "プレビューを停止しました",
		recursive: "プレビューインスタンスから別のプレビューを起動することはできません。"
	},
	ko: {
		title: "버전 미리보기",
		description: "선택한 GitHub tag 를 Web UI 미리보기 작업 디렉터리에 클론하고, 의존성을 설치한 뒤 개발 포트로 실행합니다.",
		refresh: "새로고침",
		selectTag: "tag 선택",
		prepare: "코드 준비",
		install: "의존성 설치",
		start: "미리보기 시작",
		stop: "중지",
		note: "플러그인이 미리보기 소스 코드, 데이터 디렉터리 및 사용 가능한 포트를 자동으로 관리합니다. 운영 환경에는 영향을 주지 않습니다.",
		path: "미리보기 경로",
		webuiHome: "미리보기 데이터 홈",
		currentTag: "현재 Tag",
		repoReady: "저장소 준비됨",
		dependencies: "의존성 설치됨",
		running: "실행 상태",
		notRunning: "실행 중 아님",
		open: "미리보기 열기",
		log: "작업 로그 경로",
		logOutput: "로그 출력",
		actionLog: "작업 로그",
		devLog: "개발 서버 로그",
		yes: "예",
		no: "아니요",
		actionFailed: "작업 실패",
		nodeEnvironmentMissing: "Node/npm 환경을 찾을 수 없습니다. Node.js를 설치한 뒤 다시 시도하세요.",
		prepareSuccess: "미리보기 코드가 준비되었습니다",
		installSuccess: "의존성이 설치되었습니다",
		startSuccess: "미리보기가 완료되었습니다",
		stopSuccess: "미리보기가 중지되었습니다",
		recursive: "미리보기 인스턴스에서는 다른 미리보기를 시작할 수 없습니다."
	},
	fr: {
		title: "Aperçu de version",
		description: "Clone le tag GitHub sélectionné dans l’espace de prévisualisation Web UI, installe les dépendances, puis lance l’application sur les ports de développement.",
		refresh: "Actualiser",
		selectTag: "Sélectionner un tag",
		prepare: "Préparer le code",
		install: "Installer les dépendances",
		start: "Démarrer l’aperçu",
		stop: "Arrêter",
		note: "Le plugin gère automatiquement le code source, les données et les ports disponibles de l’aperçu. L’environnement de production reste inchangé.",
		path: "Chemin de prévisualisation",
		webuiHome: "Données de prévisualisation",
		currentTag: "Tag actuel",
		repoReady: "Dépôt prêt",
		dependencies: "Dépendances installées",
		running: "État",
		notRunning: "Arrêté",
		open: "Ouvrir l’aperçu",
		log: "Chemin du journal d’action",
		logOutput: "Sortie des journaux",
		actionLog: "Journal d’action",
		devLog: "Journal du serveur dev",
		yes: "Oui",
		no: "Non",
		actionFailed: "Échec de l’action",
		nodeEnvironmentMissing: "Node/npm n’a pas été détecté. Installez Node.js puis réessayez.",
		prepareSuccess: "Code de prévisualisation prêt",
		installSuccess: "Dépendances installées",
		startSuccess: "Prévisualisation terminée",
		stopSuccess: "Prévisualisation arrêtée",
		recursive: "Une instance d’aperçu ne peut pas lancer un autre aperçu."
	},
	es: {
		title: "Vista previa de versión",
		description: "Clona el tag de GitHub seleccionado en el espacio de vista previa de Web UI, instala dependencias y lo ejecuta con los puertos de desarrollo.",
		refresh: "Actualizar",
		selectTag: "Selecciona un tag",
		prepare: "Preparar código",
		install: "Instalar dependencias",
		start: "Iniciar vista previa",
		stop: "Detener",
		note: "El complemento administra automáticamente el código, los datos y los puertos disponibles de la vista previa. El entorno de producción no se ve afectado.",
		path: "Ruta de vista previa",
		webuiHome: "Datos de vista previa",
		currentTag: "Tag actual",
		repoReady: "Repositorio listo",
		dependencies: "Dependencias instaladas",
		running: "Estado",
		notRunning: "No ejecutándose",
		open: "Abrir vista previa",
		log: "Ruta del log de acciones",
		logOutput: "Salida de logs",
		actionLog: "Log de acciones",
		devLog: "Log del servidor dev",
		yes: "Sí",
		no: "No",
		actionFailed: "Acción fallida",
		nodeEnvironmentMissing: "No se detectó Node/npm. Instala Node.js y vuelve a intentarlo.",
		prepareSuccess: "Código de vista previa listo",
		installSuccess: "Dependencias instaladas",
		startSuccess: "Vista previa completada",
		stopSuccess: "Vista previa detenida",
		recursive: "Una instancia de vista previa no puede iniciar otra vista previa."
	},
	de: {
		title: "Versionsvorschau",
		description: "Klont den ausgewählten GitHub-Tag in den Web-UI-Vorschaubereich, installiert Abhängigkeiten und startet ihn mit den Entwicklungsports.",
		refresh: "Aktualisieren",
		selectTag: "Tag auswählen",
		prepare: "Code vorbereiten",
		install: "Abhängigkeiten installieren",
		start: "Vorschau starten",
		stop: "Stoppen",
		note: "Das Plugin verwaltet Vorschaucode, Datenverzeichnis und freie Ports automatisch. Die Produktionsumgebung bleibt unverändert.",
		path: "Vorschaupfad",
		webuiHome: "Vorschau-Datenverzeichnis",
		currentTag: "Aktueller Tag",
		repoReady: "Repository bereit",
		dependencies: "Abhängigkeiten installiert",
		running: "Status",
		notRunning: "Nicht gestartet",
		open: "Vorschau öffnen",
		log: "Pfad zum Aktionslog",
		logOutput: "Logausgabe",
		actionLog: "Aktionslog",
		devLog: "Dev-Server-Log",
		yes: "Ja",
		no: "Nein",
		actionFailed: "Aktion fehlgeschlagen",
		nodeEnvironmentMissing: "Node/npm wurde nicht erkannt. Bitte installiere Node.js und versuche es erneut.",
		prepareSuccess: "Vorschaucode ist bereit",
		installSuccess: "Abhängigkeiten installiert",
		startSuccess: "Vorschau abgeschlossen",
		stopSuccess: "Vorschau gestoppt",
		recursive: "Eine Vorschauinstanz kann keine weitere Vorschau starten."
	},
	pt: {
		title: "Prévia de versão",
		description: "Clona a tag do GitHub selecionada para o workspace de prévia do Web UI, instala dependências e executa com as portas de desenvolvimento.",
		refresh: "Atualizar",
		selectTag: "Selecione uma tag",
		prepare: "Preparar código",
		install: "Instalar dependências",
		start: "Iniciar prévia",
		stop: "Parar",
		note: "O plugin gerencia automaticamente o código, os dados e as portas disponíveis da prévia. O ambiente de produção não é afetado.",
		path: "Caminho da prévia",
		webuiHome: "Dados da prévia",
		currentTag: "Tag atual",
		repoReady: "Repositório pronto",
		dependencies: "Dependências instaladas",
		running: "Estado",
		notRunning: "Não em execução",
		open: "Abrir prévia",
		log: "Caminho do log de ações",
		logOutput: "Saída de logs",
		actionLog: "Log de ações",
		devLog: "Log do servidor dev",
		yes: "Sim",
		no: "Não",
		actionFailed: "Ação falhou",
		nodeEnvironmentMissing: "Node/npm não foi detectado. Instale o Node.js e tente novamente.",
		prepareSuccess: "Código de prévia pronto",
		installSuccess: "Dependências instaladas",
		startSuccess: "Prévia concluída",
		stopSuccess: "Prévia parada",
		recursive: "Uma instância de prévia não pode iniciar outra prévia."
	},
	ru: {
		title: "Предпросмотр версий",
		description: "Клонируйте выбранный тег GitHub в каталог предпросмотра, установите зависимости и запустите версию на портах разработки.",
		refresh: "Обновить",
		selectTag: "Выберите тег",
		prepare: "Подготовить код",
		install: "Установить зависимости",
		start: "Запустить предпросмотр",
		stop: "Остановить",
		path: "Каталог предпросмотра",
		webuiHome: "Каталог данных предпросмотра",
		currentTag: "Текущий тег",
		repoReady: "Репозиторий готов",
		dependencies: "Зависимости установлены",
		running: "Состояние",
		notRunning: "Не запущен",
		open: "Открыть предпросмотр",
		log: "Путь к журналу операций",
		logOutput: "Журналы",
		actionLog: "Журнал операций",
		devLog: "Журнал сервера разработки",
		yes: "Да",
		no: "Нет",
		actionFailed: "Операция не выполнена",
		nodeEnvironmentMissing: "Node.js/npm не обнаружены. Установите Node.js и повторите попытку.",
		prepareSuccess: "Код для предпросмотра подготовлен",
		installSuccess: "Зависимости установлены",
		startSuccess: "Предпросмотр запущен",
		stopSuccess: "Предпросмотр остановлен",
		note: "Плагин автоматически управляет исходным кодом, каталогом данных и свободными портами предпросмотра. Рабочая среда не затрагивается.",
		recursive: "Из экземпляра предпросмотра нельзя запустить ещё один предпросмотр."
	},
	ar: {
		title: "معاينة الإصدار",
		description: "استنسخ وسم GitHub المحدد إلى مساحة عمل معاينة واجهة الويب، وثبّت التبعيات، وشغّله بمنافذ التطوير.",
		refresh: "تحديث",
		selectTag: "اختر وسمًا",
		prepare: "تحضير الشيفرة",
		install: "تثبيت التبعيات",
		start: "بدء المعاينة",
		stop: "إيقاف",
		note: "تدير الإضافة تلقائيًا الشيفرة المصدرية ودليل البيانات والمنافذ المتاحة للمعاينة، دون التأثير على بيئة الإنتاج.",
		path: "مسار المعاينة",
		webuiHome: "مجلد بيانات المعاينة",
		currentTag: "الوسم الحالي",
		repoReady: "المستودع جاهز",
		dependencies: "التبعيات مثبتة",
		running: "يعمل",
		notRunning: "لا يعمل",
		open: "فتح المعاينة",
		log: "مسار سجل الإجراءات",
		logOutput: "مخرجات السجل",
		actionLog: "سجل الإجراءات",
		devLog: "سجل خادم التطوير",
		yes: "نعم",
		no: "لا",
		actionFailed: "فشل الإجراء",
		nodeEnvironmentMissing: "لم يتم العثور على Node/npm. يرجى تثبيت Node.js والمحاولة مرة أخرى.",
		prepareSuccess: "شيفرة المعاينة جاهزة",
		installSuccess: "تم تثبيت التبعيات",
		startSuccess: "تمت المعاينة بنجاح",
		stopSuccess: "تم إيقاف المعاينة",
		recursive: "لا يمكن لمثيل المعاينة تشغيل معاينة أخرى."
	},
	tr: {
		title: "Sürüm önizlemesi",
		description: "Seçilen GitHub etiketini önizleme dizinine klonlayın, bağımlılıkları yükleyin ve geliştirme bağlantı noktalarında çalıştırın.",
		refresh: "Yenile",
		selectTag: "Etiket seçin",
		prepare: "Kodu hazırla",
		install: "Bağımlılıkları yükle",
		start: "Önizlemeyi başlat",
		stop: "Durdur",
		path: "Önizleme dizini",
		webuiHome: "Önizleme veri dizini",
		currentTag: "Geçerli etiket",
		repoReady: "Depo hazır",
		dependencies: "Bağımlılıklar yüklendi",
		running: "Çalışma durumu",
		notRunning: "Çalışmıyor",
		open: "Önizlemeyi aç",
		log: "İşlem günlüğü yolu",
		logOutput: "Günlük çıktısı",
		actionLog: "İşlem günlüğü",
		devLog: "Geliştirme sunucusu günlüğü",
		yes: "Evet",
		no: "Hayır",
		actionFailed: "İşlem başarısız",
		nodeEnvironmentMissing: "Node.js/npm bulunamadı. Node.js yükleyip yeniden deneyin.",
		prepareSuccess: "Önizleme kodu hazır",
		installSuccess: "Bağımlılıklar yüklendi",
		startSuccess: "Önizleme başlatıldı",
		stopSuccess: "Önizleme durduruldu",
		note: "Eklenti, önizleme kaynak kodunu, veri dizinini ve kullanılabilir bağlantı noktalarını otomatik yönetir. Üretim ortamı etkilenmez.",
		recursive: "Bir önizleme örneği başka bir önizleme başlatamaz."
	}
}, ST = { class: "github-preview-settings" }, CT = { class: "settings-section" }, wT = { class: "control-row" }, TT = { class: "section-description" }, ET = ["href"], DT = {
	class: "log-output",
	"data-theme-surface": "card"
}, OT = { class: "log-output-header" }, kT = { class: "log-box" }, AT = { class: "log-title" }, jT = { class: "log-box" }, MT = { class: "log-title" }, NT = /* @__PURE__ */ z({
	__name: "Preview",
	props: { context: {} },
	setup(e) {
		let t = e.context, n = xT[bT(t.locale, Object.keys(xT))], r = (e) => n[e.replace("githubPreview.", "")] || e, i = {
			success: (e) => t.ui.notify(e, "success"),
			warning: (e) => t.ui.notify(e, "info"),
			error: (e) => t.ui.notify(e, "error")
		}, a = () => t.rpc.call("status"), o = () => t.rpc.call("tags"), s = (e) => t.rpc.call("prepare", { tag: e }), c = () => t.rpc.call("install"), l = (e) => t.rpc.call("start", e ? { tag: e } : {}), u = () => t.rpc.call("stop"), d = /* @__PURE__ */ I(!1), f = /* @__PURE__ */ I(""), p = /* @__PURE__ */ I(!1), m = /* @__PURE__ */ I(""), h = /* @__PURE__ */ I([]), g = /* @__PURE__ */ I(""), _ = /* @__PURE__ */ I(null), v = /* @__PURE__ */ I(""), y = /* @__PURE__ */ I(!1), b = null, x = !1, S = V(() => h.value.map((e) => ({
			label: e.name,
			value: e.name
		}))), C = V(() => _.value?.action_log || ""), w = V(() => {
			if (!_.value?.frontend_url) return "";
			let e = new URL(_.value.frontend_url);
			return ["localhost", "127.0.0.1"].includes(e.hostname) && !t.config.frontendOrigin && (e.hostname = location.hostname), e.href;
		}), T = V(() => _.value?.dev_log || ""), E = V(() => m.value || _.value?.active_action || ""), D = V(() => !!E.value), O = {
			prepare: "githubPreview.prepareSuccess",
			install: "githubPreview.installSuccess",
			start: "githubPreview.startSuccess",
			stop: "githubPreview.stopSuccess"
		};
		function k(e) {
			let t = String(e?.message || ""), n = t.indexOf("{");
			if (!(n < 0)) try {
				let e = JSON.parse(t.slice(n));
				e && typeof e == "object" && "preview_dir" in e && (_.value = e);
			} catch {}
		}
		function A(e, t) {
			return e === "node_environment_missing" ? r("githubPreview.nodeEnvironmentMissing") : t || r("githubPreview.actionFailed");
		}
		function ee(e) {
			let t = String(e?.message || ""), n = t.indexOf("{");
			if (n < 0) return null;
			try {
				let e = JSON.parse(t.slice(n));
				return e && typeof e == "object" ? e : null;
			} catch {
				return null;
			}
		}
		async function j() {
			let e = await a();
			x || (_.value = e, !g.value && _.value.current_tag && (g.value = _.value.current_tag));
		}
		async function te() {
			p.value = !0;
			try {
				let e = await o();
				if (x) return;
				h.value = e.tags, !g.value && h.value[0] && (g.value = h.value[0].name);
			} finally {
				p.value = !1;
			}
		}
		async function ne() {
			d.value = !0, f.value = "";
			try {
				await Promise.all([j(), te()]);
			} catch (e) {
				x || (f.value = e?.message || r("githubPreview.actionFailed"), i.error(f.value));
			} finally {
				d.value = !1;
			}
		}
		async function M(e, t, n) {
			m.value = e;
			try {
				let e = await t();
				if (_.value = e, e.success === !1) {
					i.warning(A(e.code, e.message));
					return;
				}
				!e.accepted && !e.active_action && i.success(r(n));
			} catch (e) {
				k(e);
				let t = ee(e);
				i.error(A(t?.code, t?.message || e?.message));
			} finally {
				m.value = "";
			}
		}
		async function re() {
			try {
				await j();
			} catch {}
		}
		function ie() {
			b || x || (b = window.setInterval(() => {
				re();
			}, 2e3));
		}
		function ae() {
			b && (window.clearInterval(b), b = null);
		}
		function oe() {
			return g.value ? g.value : (i.warning(r("githubPreview.selectTag")), null);
		}
		async function se() {
			let e = oe();
			e && await M("prepare", () => s(e), "githubPreview.prepareSuccess");
		}
		async function ce() {
			await M("install", async () => {
				let e = await c();
				return e.success !== !1 && !e.accepted && !e.active_action && !e.installed ? {
					...e,
					success: !1,
					message: e.message || r("githubPreview.actionFailed")
				} : e;
			}, "githubPreview.installSuccess");
		}
		async function le() {
			await M("start", () => l(g.value || void 0), "githubPreview.startSuccess");
		}
		async function ue() {
			await M("stop", u, "githubPreview.stopSuccess");
		}
		let de = /* @__PURE__ */ I(!0);
		return Lr(async () => {
			try {
				await ne(), v.value = _.value?.last_action_completed_at || "", y.value = !0;
			} finally {
				de.value = !1;
			}
		}), Vr(() => {
			x = !0, ae();
		}), Wn(() => _.value?.active_action || "", (e) => {
			e ? ie() : ae();
		}), Wn(() => _.value?.last_action_completed_at || "", (e) => {
			if (!e) return;
			if (!y.value) {
				v.value = e;
				return;
			}
			if (e === v.value || m.value) return;
			v.value = e;
			let t = _.value?.last_action || "";
			if (_.value?.last_action_success === !1) {
				i.error(A(_.value.last_action_code, _.value.last_action_message));
				return;
			}
			let n = O[t];
			n && i.success(r(n));
		}), (e, t) => (ha(), ba("div", ST, [Ea("div", CT, [
			f.value ? (ha(), xa(Zt(Ix), {
				key: 0,
				type: "error",
				bordered: !1
			}, {
				default: Ln(() => [Aa(N(f.value), 1)]),
				_: 1
			})) : ja("", !0),
			_.value?.recursive_blocked ? (ha(), xa(Zt(Ix), {
				key: 1,
				type: "warning",
				bordered: !1
			}, {
				default: Ln(() => [Aa(N(r("recursive")), 1)]),
				_: 1
			})) : ja("", !0),
			Ea("div", wT, [B(Zt(qS), {
				value: g.value,
				"onUpdate:value": t[0] || (t[0] = (e) => g.value = e),
				class: "tag-select",
				filterable: "",
				loading: p.value,
				options: S.value,
				placeholder: r("githubPreview.selectTag")
			}, null, 8, [
				"value",
				"loading",
				"options",
				"placeholder"
			]), B(Zt(ZC), null, {
				default: Ln(() => [
					B(Zt(yS), {
						type: "primary",
						loading: E.value === "prepare",
						disabled: _.value?.recursive_blocked || D.value || !g.value,
						onClick: se
					}, {
						default: Ln(() => [Aa(N(r("githubPreview.prepare")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]),
					B(Zt(yS), {
						loading: E.value === "install",
						disabled: _.value?.recursive_blocked || D.value || !_.value?.has_package,
						onClick: ce
					}, {
						default: Ln(() => [Aa(N(r("githubPreview.install")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]),
					B(Zt(yS), {
						type: "success",
						loading: E.value === "start",
						disabled: _.value?.recursive_blocked || D.value || !_.value?.installed,
						onClick: le
					}, {
						default: Ln(() => [Aa(N(r("githubPreview.start")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]),
					B(Zt(yS), {
						loading: E.value === "stop",
						disabled: _.value?.recursive_blocked || D.value || !_.value?.running,
						onClick: ue
					}, {
						default: Ln(() => [Aa(N(r("githubPreview.stop")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]),
					B(Zt(yS), {
						loading: d.value || p.value,
						onClick: ne
					}, {
						default: Ln(() => [Aa(N(r("githubPreview.refresh")), 1)]),
						_: 1
					}, 8, ["loading"])
				]),
				_: 1
			})]),
			Ea("p", TT, N(r("githubPreview.description")), 1),
			B(Zt(Ix), {
				type: "info",
				bordered: !1,
				class: "preview-note"
			}, {
				default: Ln(() => [Aa(N(r("githubPreview.note")), 1)]),
				_: 1
			}),
			_.value ? (ha(), xa(Zt(CC), {
				key: 2,
				column: 1,
				bordered: "",
				size: "small",
				class: "status-table"
			}, {
				default: Ln(() => [
					B(Zt(TC), { label: r("githubPreview.path") }, {
						default: Ln(() => [Ea("code", null, N(_.value.preview_dir), 1)]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.webuiHome") }, {
						default: Ln(() => [Ea("code", null, N(_.value.webui_home), 1)]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.currentTag") }, {
						default: Ln(() => [Aa(N(_.value.current_tag || "-"), 1)]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.repoReady") }, {
						default: Ln(() => [B(Zt(px), {
							size: "small",
							type: _.value.has_package ? "success" : "default"
						}, {
							default: Ln(() => [Aa(N(_.value.has_package ? r("githubPreview.yes") : r("githubPreview.no")), 1)]),
							_: 1
						}, 8, ["type"])]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.dependencies") }, {
						default: Ln(() => [B(Zt(px), {
							size: "small",
							type: _.value.installed ? "success" : "warning"
						}, {
							default: Ln(() => [Aa(N(_.value.installed ? r("githubPreview.yes") : r("githubPreview.no")), 1)]),
							_: 1
						}, 8, ["type"])]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.running") }, {
						default: Ln(() => [B(Zt(px), {
							size: "small",
							type: _.value.running ? "success" : "default"
						}, {
							default: Ln(() => [Aa(N(_.value.running ? `PID ${_.value.pid}` : r("githubPreview.notRunning")), 1)]),
							_: 1
						}, 8, ["type"])]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.open") }, {
						default: Ln(() => [Ea("a", {
							href: w.value,
							target: "_blank",
							rel: "noopener noreferrer"
						}, N(w.value), 9, ET)]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.log") }, {
						default: Ln(() => [Ea("code", null, N(_.value.action_log_path), 1)]),
						_: 1
					}, 8, ["label"]),
					B(Zt(TC), { label: r("githubPreview.devLog") }, {
						default: Ln(() => [Ea("code", null, N(_.value.dev_log_path), 1)]),
						_: 1
					}, 8, ["label"])
				]),
				_: 1
			})) : ja("", !0),
			Ea("div", DT, [
				Ea("div", OT, N(r("githubPreview.logOutput")), 1),
				Ea("div", kT, [Ea("div", AT, N(r("githubPreview.actionLog")), 1), Ea("pre", null, N(C.value || "-"), 1)]),
				Ea("div", jT, [Ea("div", MT, N(r("githubPreview.devLog")), 1), Ea("pre", null, N(T.value || "-"), 1)])
			])
		])]));
	}
}), PT = ".version-preview-client{width:100%;padding:calc(16px * var(--spacing-scale,1));box-sizing:border-box;color:var(--text-primary,#333);font-family:var(--font-family,system-ui);font-size:var(--font-size-base,14px);line-height:var(--line-height,1.5)}.version-preview-client a{color:var(--accent-primary,#2080f0)}.github-preview-settings{width:100%}.settings-section{gap:calc(16px * var(--spacing-scale,1));flex-direction:column;display:flex}.section-description{color:var(--text-secondary,#666);font-size:calc(var(--font-size-base,14px) * 13 / 14);line-height:var(--line-height,1.5);margin:0}.control-row{align-items:center;gap:calc(12px * var(--spacing-scale,1));flex-wrap:wrap;display:flex}.tag-select{width:260px}.preview-note,.status-table{width:100%}.log-output{border:var(--border-width,1px) solid var(--border-color,#ddd);border-radius:var(--radius-component,6px);background:var(--theme-card-bg,var(--bg-card,transparent));width:100%;overflow:hidden}.log-output-header{padding:calc(12px * var(--spacing-scale,1)) calc(14px * var(--spacing-scale,1));border-bottom:var(--border-width,1px) solid var(--border-color,#ddd);font-size:calc(var(--font-size-base,14px) * 14 / 14);color:var(--text-primary,#333);font-weight:600}.log-box{border-bottom:var(--border-width,1px) solid var(--border-color,#ddd)}.log-title{padding:calc(8px * var(--spacing-scale,1)) calc(14px * var(--spacing-scale,1));font-size:calc(var(--font-size-base,14px) * 12 / 14);color:var(--text-secondary,#666);background:rgba(var(--text-primary-rgb), .04)}pre{color:var(--text-primary,#333);min-height:180px;max-height:320px;padding:calc(12px * var(--spacing-scale,1)) calc(14px * var(--spacing-scale,1));white-space:pre-wrap;word-break:break-word;font-size:calc(var(--font-size-base,14px) * 12 / 14);line-height:var(--line-height,1.5);margin:0;overflow:auto}code{font-size:calc(var(--font-size-base,14px) * 12 / 14);word-break:break-all}@media (max-width:1100px){.control-row{align-items:stretch}}.log-box:last-child{border-bottom:0}@media (max-width:600px){.tag-select,.control-row>.n-space{width:100%}}.version-preview-client pre,.version-preview-client code{text-align:left;direction:ltr;unicode-bidi:isolate}", FT = {
	en: Sf,
	zh: Af,
	"zh-TW": jf,
	ja: Tf,
	ko: Ef,
	fr: wf,
	es: Cf,
	de: xf,
	pt: Df,
	ru: Of,
	ar: bf,
	tr: kf
}, IT = [
	Ax,
	_S,
	Gx,
	Wb,
	GS,
	JC,
	cx
];
function LT(e, t) {
	let n = bT(t.locale, Object.keys(xT)), r = document.createElement("style");
	r.textContent = PT;
	let i = document.createElement("div");
	i.className = "version-preview-client", i.lang = n, i.dir = n === "ar" ? "rtl" : "ltr", e.append(r, i);
	let a = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt({});
	function s() {
		let t = getComputedStyle(e), n = (e) => t.getPropertyValue(e).trim();
		a.value = n("--studio-color-scheme") === "dark" ? vT : null;
		let r = {};
		for (let [e, t] of Object.entries({
			primaryColor: "--accent-primary",
			textColorBase: "--text-primary",
			textColor2: "--text-secondary",
			borderColor: "--border-color",
			cardColor: "--theme-card-bg",
			inputColor: "--theme-input-bg",
			fontFamily: "--font-family",
			fontSize: "--font-size-base"
		})) n(t) && (r[e] = n(t));
		o.value = { common: r };
	}
	s();
	let c = new MutationObserver(s);
	for (let t of [
		document.documentElement,
		document.body,
		e
	]) c.observe(t, {
		attributes: !0,
		attributeFilter: ["class", "style"]
	});
	let l = ks({ render: () => H(BS, {
		theme: a.value,
		themeOverrides: o.value,
		locale: FT[n],
		rtl: n === "ar" ? IT : void 0
	}, { default: () => H(NT, { context: t }) }) });
	l.mount(i);
	let u = !1, d = () => {
		u || (u = !0, c.disconnect(), l.unmount(), i.remove(), r.remove());
	};
	return t.lifecycle.add(d), d;
}
export { LT as mount };
