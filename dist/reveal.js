/*!
 * reveal.js 4.6.1
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
 */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
              "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).Reveal = t());
})(this, function () {
    "use strict";
    var e =
            "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof window
                ? window
                : "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : {},
        t = function (e) {
            return e && e.Math == Math && e;
        },
        n =
            t("object" == typeof globalThis && globalThis) ||
            t("object" == typeof window && window) ||
            t("object" == typeof self && self) ||
            t("object" == typeof e && e) ||
            (function () {
                return this;
            })() ||
            Function("return this")(),
        i = {},
        r = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        },
        a = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        }),
        o = {},
        s = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        c = l && !s.call({ 1: 2 }, 1);
    o.f = c
        ? function (e) {
              var t = l(this, e);
              return !!t && t.enumerable;
          }
        : s;
    var u = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t,
            };
        },
        d = {}.toString,
        h = function (e) {
            return d.call(e).slice(8, -1);
        },
        f = h,
        v = "".split,
        g = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                  return "String" == f(e) ? v.call(e, "") : Object(e);
              }
            : Object,
        p = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        },
        m = g,
        y = p,
        b = function (e) {
            return m(y(e));
        },
        w = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        },
        E = w,
        S = function (e, t) {
            if (!E(e)) return e;
            var n, i;
            if (
                t &&
                "function" == typeof (n = e.toString) &&
                !E((i = n.call(e)))
            )
                return i;
            if ("function" == typeof (n = e.valueOf) && !E((i = n.call(e))))
                return i;
            if (
                !t &&
                "function" == typeof (n = e.toString) &&
                !E((i = n.call(e)))
            )
                return i;
            throw TypeError("Can't convert object to primitive value");
        },
        k = p,
        A = function (e) {
            return Object(k(e));
        },
        R = A,
        x = {}.hasOwnProperty,
        L = function (e, t) {
            return x.call(R(e), t);
        },
        P = w,
        C = n.document,
        T = P(C) && P(C.createElement),
        I = function (e) {
            return T ? C.createElement(e) : {};
        },
        N = I,
        M =
            !a &&
            !r(function () {
                return (
                    7 !=
                    Object.defineProperty(N("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            }),
        O = a,
        j = o,
        B = u,
        D = b,
        H = S,
        F = L,
        z = M,
        U = Object.getOwnPropertyDescriptor;
    i.f = O
        ? U
        : function (e, t) {
              if (((e = D(e)), (t = H(t, !0)), z))
                  try {
                      return U(e, t);
                  } catch (e) {}
              if (F(e, t)) return B(!j.f.call(e, t), e[t]);
          };
    var q = {},
        _ = w,
        V = function (e) {
            if (!_(e)) throw TypeError(String(e) + " is not an object");
            return e;
        },
        W = a,
        K = M,
        Y = V,
        X = S,
        G = Object.defineProperty;
    q.f = W
        ? G
        : function (e, t, n) {
              if ((Y(e), (t = X(t, !0)), Y(n), K))
                  try {
                      return G(e, t, n);
                  } catch (e) {}
              if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
          };
    var $ = q,
        J = u,
        Q = a
            ? function (e, t, n) {
                  return $.f(e, t, J(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              },
        Z = { exports: {} },
        ee = n,
        te = Q,
        ne = function (e, t) {
            try {
                te(ee, e, t);
            } catch (n) {
                ee[e] = t;
            }
            return t;
        },
        ie = ne,
        re = "__core-js_shared__",
        ae = n[re] || ie(re, {}),
        oe = ae,
        se = Function.toString;
    "function" != typeof oe.inspectSource &&
        (oe.inspectSource = function (e) {
            return se.call(e);
        });
    var le = oe.inspectSource,
        ce = le,
        ue = n.WeakMap,
        de = "function" == typeof ue && /native code/.test(ce(ue)),
        he = { exports: {} },
        fe = ae;
    (he.exports = function (e, t) {
        return fe[e] || (fe[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: "3.12.1",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
    var ve,
        ge,
        pe,
        me = 0,
        ye = Math.random(),
        be = function (e) {
            return (
                "Symbol(" +
                String(void 0 === e ? "" : e) +
                ")_" +
                (++me + ye).toString(36)
            );
        },
        we = he.exports,
        Ee = be,
        Se = we("keys"),
        ke = function (e) {
            return Se[e] || (Se[e] = Ee(e));
        },
        Ae = {},
        Re = de,
        xe = w,
        Le = Q,
        Pe = L,
        Ce = ae,
        Te = ke,
        Ie = Ae,
        Ne = "Object already initialized",
        Me = n.WeakMap;
    if (Re || Ce.state) {
        var Oe = Ce.state || (Ce.state = new Me()),
            je = Oe.get,
            Be = Oe.has,
            De = Oe.set;
        (ve = function (e, t) {
            if (Be.call(Oe, e)) throw new TypeError(Ne);
            return (t.facade = e), De.call(Oe, e, t), t;
        }),
            (ge = function (e) {
                return je.call(Oe, e) || {};
            }),
            (pe = function (e) {
                return Be.call(Oe, e);
            });
    } else {
        var He = Te("state");
        (Ie[He] = !0),
            (ve = function (e, t) {
                if (Pe(e, He)) throw new TypeError(Ne);
                return (t.facade = e), Le(e, He, t), t;
            }),
            (ge = function (e) {
                return Pe(e, He) ? e[He] : {};
            }),
            (pe = function (e) {
                return Pe(e, He);
            });
    }
    var Fe = {
            set: ve,
            get: ge,
            has: pe,
            enforce: function (e) {
                return pe(e) ? ge(e) : ve(e, {});
            },
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!xe(t) || (n = ge(t)).type !== e)
                        throw TypeError(
                            "Incompatible receiver, " + e + " required"
                        );
                    return n;
                };
            },
        },
        ze = n,
        Ue = Q,
        qe = L,
        _e = ne,
        Ve = le,
        We = Fe.get,
        Ke = Fe.enforce,
        Ye = String(String).split("String");
    (Z.exports = function (e, t, n, i) {
        var r,
            a = !!i && !!i.unsafe,
            o = !!i && !!i.enumerable,
            s = !!i && !!i.noTargetGet;
        "function" == typeof n &&
            ("string" != typeof t || qe(n, "name") || Ue(n, "name", t),
            (r = Ke(n)).source ||
                (r.source = Ye.join("string" == typeof t ? t : ""))),
            e !== ze
                ? (a ? !s && e[t] && (o = !0) : delete e[t],
                  o ? (e[t] = n) : Ue(e, t, n))
                : o
                ? (e[t] = n)
                : _e(t, n);
    })(Function.prototype, "toString", function () {
        return ("function" == typeof this && We(this).source) || Ve(this);
    });
    var Xe = n,
        Ge = Xe,
        $e = n,
        Je = function (e) {
            return "function" == typeof e ? e : void 0;
        },
        Qe = function (e, t) {
            return arguments.length < 2
                ? Je(Ge[e]) || Je($e[e])
                : (Ge[e] && Ge[e][t]) || ($e[e] && $e[e][t]);
        },
        Ze = {},
        et = Math.ceil,
        tt = Math.floor,
        nt = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? tt : et)(e);
        },
        it = nt,
        rt = Math.min,
        at = function (e) {
            return e > 0 ? rt(it(e), 9007199254740991) : 0;
        },
        ot = nt,
        st = Math.max,
        lt = Math.min,
        ct = function (e, t) {
            var n = ot(e);
            return n < 0 ? st(n + t, 0) : lt(n, t);
        },
        ut = b,
        dt = at,
        ht = ct,
        ft = function (e) {
            return function (t, n, i) {
                var r,
                    a = ut(t),
                    o = dt(a.length),
                    s = ht(i, o);
                if (e && n != n) {
                    for (; o > s; ) if ((r = a[s++]) != r) return !0;
                } else
                    for (; o > s; s++)
                        if ((e || s in a) && a[s] === n) return e || s || 0;
                return !e && -1;
            };
        },
        vt = { includes: ft(!0), indexOf: ft(!1) },
        gt = L,
        pt = b,
        mt = vt.indexOf,
        yt = Ae,
        bt = function (e, t) {
            var n,
                i = pt(e),
                r = 0,
                a = [];
            for (n in i) !gt(yt, n) && gt(i, n) && a.push(n);
            for (; t.length > r; )
                gt(i, (n = t[r++])) && (~mt(a, n) || a.push(n));
            return a;
        },
        wt = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ],
        Et = bt,
        St = wt.concat("length", "prototype");
    Ze.f =
        Object.getOwnPropertyNames ||
        function (e) {
            return Et(e, St);
        };
    var kt = {};
    kt.f = Object.getOwnPropertySymbols;
    var At = Ze,
        Rt = kt,
        xt = V,
        Lt =
            Qe("Reflect", "ownKeys") ||
            function (e) {
                var t = At.f(xt(e)),
                    n = Rt.f;
                return n ? t.concat(n(e)) : t;
            },
        Pt = L,
        Ct = Lt,
        Tt = i,
        It = q,
        Nt = function (e, t) {
            for (var n = Ct(t), i = It.f, r = Tt.f, a = 0; a < n.length; a++) {
                var o = n[a];
                Pt(e, o) || i(e, o, r(t, o));
            }
        },
        Mt = r,
        Ot = /#|\.prototype\./,
        jt = function (e, t) {
            var n = Dt[Bt(e)];
            return (
                n == Ft || (n != Ht && ("function" == typeof t ? Mt(t) : !!t))
            );
        },
        Bt = (jt.normalize = function (e) {
            return String(e).replace(Ot, ".").toLowerCase();
        }),
        Dt = (jt.data = {}),
        Ht = (jt.NATIVE = "N"),
        Ft = (jt.POLYFILL = "P"),
        zt = jt,
        Ut = n,
        qt = i.f,
        _t = Q,
        Vt = Z.exports,
        Wt = ne,
        Kt = Nt,
        Yt = zt,
        Xt = function (e, t) {
            var n,
                i,
                r,
                a,
                o,
                s = e.target,
                l = e.global,
                c = e.stat;
            if ((n = l ? Ut : c ? Ut[s] || Wt(s, {}) : (Ut[s] || {}).prototype))
                for (i in t) {
                    if (
                        ((a = t[i]),
                        (r = e.noTargetGet ? (o = qt(n, i)) && o.value : n[i]),
                        !Yt(l ? i : s + (c ? "." : "#") + i, e.forced) &&
                            void 0 !== r)
                    ) {
                        if (typeof a == typeof r) continue;
                        Kt(a, r);
                    }
                    (e.sham || (r && r.sham)) && _t(a, "sham", !0),
                        Vt(n, i, a, e);
                }
        },
        Gt = bt,
        $t = wt,
        Jt =
            Object.keys ||
            function (e) {
                return Gt(e, $t);
            },
        Qt = a,
        Zt = r,
        en = Jt,
        tn = kt,
        nn = o,
        rn = A,
        an = g,
        on = Object.assign,
        sn = Object.defineProperty,
        ln =
            !on ||
            Zt(function () {
                if (
                    Qt &&
                    1 !==
                        on(
                            { b: 1 },
                            on(
                                sn({}, "a", {
                                    enumerable: !0,
                                    get: function () {
                                        sn(this, "b", {
                                            value: 3,
                                            enumerable: !1,
                                        });
                                    },
                                }),
                                { b: 2 }
                            )
                        ).b
                )
                    return !0;
                var e = {},
                    t = {},
                    n = Symbol(),
                    i = "abcdefghijklmnopqrst";
                return (
                    (e[n] = 7),
                    i.split("").forEach(function (e) {
                        t[e] = e;
                    }),
                    7 != on({}, e)[n] || en(on({}, t)).join("") != i
                );
            })
                ? function (e, t) {
                      for (
                          var n = rn(e),
                              i = arguments.length,
                              r = 1,
                              a = tn.f,
                              o = nn.f;
                          i > r;

                      )
                          for (
                              var s,
                                  l = an(arguments[r++]),
                                  c = a ? en(l).concat(a(l)) : en(l),
                                  u = c.length,
                                  d = 0;
                              u > d;

                          )
                              (s = c[d++]),
                                  (Qt && !o.call(l, s)) || (n[s] = l[s]);
                      return n;
                  }
                : on,
        cn = ln;
    Xt(
        { target: "Object", stat: !0, forced: Object.assign !== cn },
        { assign: cn }
    );
    var un,
        dn,
        hn = function (e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e;
        },
        fn = hn,
        vn = function (e, t, n) {
            if ((fn(e), void 0 === t)) return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t);
                    };
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i);
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        },
        gn = h,
        pn =
            Array.isArray ||
            function (e) {
                return "Array" == gn(e);
            },
        mn = Qe("navigator", "userAgent") || "",
        yn = mn,
        bn = n.process,
        wn = bn && bn.versions,
        En = wn && wn.v8;
    En
        ? (dn = (un = En.split("."))[0] < 4 ? 1 : un[0] + un[1])
        : yn &&
          (!(un = yn.match(/Edge\/(\d+)/)) || un[1] >= 74) &&
          (un = yn.match(/Chrome\/(\d+)/)) &&
          (dn = un[1]);
    var Sn = dn && +dn,
        kn = Sn,
        An = r,
        Rn =
            !!Object.getOwnPropertySymbols &&
            !An(function () {
                return !String(Symbol()) || (!Symbol.sham && kn && kn < 41);
            }),
        xn = Rn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ln = n,
        Pn = he.exports,
        Cn = L,
        Tn = be,
        In = Rn,
        Nn = xn,
        Mn = Pn("wks"),
        On = Ln.Symbol,
        jn = Nn ? On : (On && On.withoutSetter) || Tn,
        Bn = function (e) {
            return (
                (Cn(Mn, e) && (In || "string" == typeof Mn[e])) ||
                    (In && Cn(On, e)
                        ? (Mn[e] = On[e])
                        : (Mn[e] = jn("Symbol." + e))),
                Mn[e]
            );
        },
        Dn = w,
        Hn = pn,
        Fn = Bn("species"),
        zn = function (e, t) {
            var n;
            return (
                Hn(e) &&
                    ("function" != typeof (n = e.constructor) ||
                    (n !== Array && !Hn(n.prototype))
                        ? Dn(n) && null === (n = n[Fn]) && (n = void 0)
                        : (n = void 0)),
                new (void 0 === n ? Array : n)(0 === t ? 0 : t)
            );
        },
        Un = vn,
        qn = g,
        _n = A,
        Vn = at,
        Wn = zn,
        Kn = [].push,
        Yn = function (e) {
            var t = 1 == e,
                n = 2 == e,
                i = 3 == e,
                r = 4 == e,
                a = 6 == e,
                o = 7 == e,
                s = 5 == e || a;
            return function (l, c, u, d) {
                for (
                    var h,
                        f,
                        v = _n(l),
                        g = qn(v),
                        p = Un(c, u, 3),
                        m = Vn(g.length),
                        y = 0,
                        b = d || Wn,
                        w = t ? b(l, m) : n || o ? b(l, 0) : void 0;
                    m > y;
                    y++
                )
                    if ((s || y in g) && ((f = p((h = g[y]), y, v)), e))
                        if (t) w[y] = f;
                        else if (f)
                            switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return h;
                                case 6:
                                    return y;
                                case 2:
                                    Kn.call(w, h);
                            }
                        else
                            switch (e) {
                                case 4:
                                    return !1;
                                case 7:
                                    Kn.call(w, h);
                            }
                return a ? -1 : i || r ? r : w;
            };
        },
        Xn = {
            forEach: Yn(0),
            map: Yn(1),
            filter: Yn(2),
            some: Yn(3),
            every: Yn(4),
            find: Yn(5),
            findIndex: Yn(6),
            filterOut: Yn(7),
        },
        Gn = r,
        $n = Sn,
        Jn = Bn("species"),
        Qn = function (e) {
            return (
                $n >= 51 ||
                !Gn(function () {
                    var t = [];
                    return (
                        ((t.constructor = {})[Jn] = function () {
                            return { foo: 1 };
                        }),
                        1 !== t[e](Boolean).foo
                    );
                })
            );
        },
        Zn = Xn.map;
    Xt(
        { target: "Array", proto: !0, forced: !Qn("map") },
        {
            map: function (e) {
                return Zn(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                );
            },
        }
    );
    var ei = S,
        ti = q,
        ni = u,
        ii = function (e, t, n) {
            var i = ei(t);
            i in e ? ti.f(e, i, ni(0, n)) : (e[i] = n);
        },
        ri = Xt,
        ai = r,
        oi = pn,
        si = w,
        li = A,
        ci = at,
        ui = ii,
        di = zn,
        hi = Qn,
        fi = Sn,
        vi = Bn("isConcatSpreadable"),
        gi = 9007199254740991,
        pi = "Maximum allowed index exceeded",
        mi =
            fi >= 51 ||
            !ai(function () {
                var e = [];
                return (e[vi] = !1), e.concat()[0] !== e;
            }),
        yi = hi("concat"),
        bi = function (e) {
            if (!si(e)) return !1;
            var t = e[vi];
            return void 0 !== t ? !!t : oi(e);
        };
    function wi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
        }
        return n;
    }
    function Ei(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? wi(Object(n), !0).forEach(function (t) {
                      Li(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                  )
                : wi(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                      );
                  });
        }
        return e;
    }
    function Si(e) {
        return (
            (Si =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      }),
            Si(e)
        );
    }
    function ki(e, t, n, i, r, a, o) {
        try {
            var s = e[a](o),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, r);
    }
    function Ai(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function Ri(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
        }
    }
    function xi(e, t, n) {
        return t && Ri(e.prototype, t), n && Ri(e, n), e;
    }
    function Li(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n),
            e
        );
    }
    function Pi(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return Ci(e);
            })(e) ||
            (function (e) {
                if (
                    ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                )
                    return Array.from(e);
            })(e) ||
            (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Ci(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                    return Ci(e, t);
            })(e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function Ci(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
    }
    ri(
        { target: "Array", proto: !0, forced: !mi || !yi },
        {
            concat: function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    o = li(this),
                    s = di(o, 0),
                    l = 0;
                for (t = -1, i = arguments.length; t < i; t++)
                    if (bi((a = -1 === t ? o : arguments[t]))) {
                        if (l + (r = ci(a.length)) > gi) throw TypeError(pi);
                        for (n = 0; n < r; n++, l++) n in a && ui(s, l, a[n]);
                    } else {
                        if (l >= gi) throw TypeError(pi);
                        ui(s, l++, a);
                    }
                return (s.length = l), s;
            },
        }
    );
    var Ti = V,
        Ii = function () {
            var e = Ti(this),
                t = "";
            return (
                e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                e.dotAll && (t += "s"),
                e.unicode && (t += "u"),
                e.sticky && (t += "y"),
                t
            );
        },
        Ni = {},
        Mi = r;
    function Oi(e, t) {
        return RegExp(e, t);
    }
    (Ni.UNSUPPORTED_Y = Mi(function () {
        var e = Oi("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
    })),
        (Ni.BROKEN_CARET = Mi(function () {
            var e = Oi("^r", "gy");
            return (e.lastIndex = 2), null != e.exec("str");
        }));
    var ji = Ii,
        Bi = Ni,
        Di = he.exports,
        Hi = RegExp.prototype.exec,
        Fi = Di("native-string-replace", String.prototype.replace),
        zi = Hi,
        Ui = (function () {
            var e = /a/,
                t = /b*/g;
            return (
                Hi.call(e, "a"),
                Hi.call(t, "a"),
                0 !== e.lastIndex || 0 !== t.lastIndex
            );
        })(),
        qi = Bi.UNSUPPORTED_Y || Bi.BROKEN_CARET,
        _i = void 0 !== /()??/.exec("")[1];
    (Ui || _i || qi) &&
        (zi = function (e) {
            var t,
                n,
                i,
                r,
                a = this,
                o = qi && a.sticky,
                s = ji.call(a),
                l = a.source,
                c = 0,
                u = e;
            return (
                o &&
                    (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
                    (u = String(e).slice(a.lastIndex)),
                    a.lastIndex > 0 &&
                        (!a.multiline ||
                            (a.multiline && "\n" !== e[a.lastIndex - 1])) &&
                        ((l = "(?: " + l + ")"), (u = " " + u), c++),
                    (n = new RegExp("^(?:" + l + ")", s))),
                _i && (n = new RegExp("^" + l + "$(?!\\s)", s)),
                Ui && (t = a.lastIndex),
                (i = Hi.call(o ? n : a, u)),
                o
                    ? i
                        ? ((i.input = i.input.slice(c)),
                          (i[0] = i[0].slice(c)),
                          (i.index = a.lastIndex),
                          (a.lastIndex += i[0].length))
                        : (a.lastIndex = 0)
                    : Ui &&
                      i &&
                      (a.lastIndex = a.global ? i.index + i[0].length : t),
                _i &&
                    i &&
                    i.length > 1 &&
                    Fi.call(i[0], n, function () {
                        for (r = 1; r < arguments.length - 2; r++)
                            void 0 === arguments[r] && (i[r] = void 0);
                    }),
                i
            );
        });
    var Vi = zi;
    Xt({ target: "RegExp", proto: !0, forced: /./.exec !== Vi }, { exec: Vi });
    var Wi = Z.exports,
        Ki = Vi,
        Yi = r,
        Xi = Bn,
        Gi = Q,
        $i = Xi("species"),
        Ji = RegExp.prototype,
        Qi = !Yi(function () {
            var e = /./;
            return (
                (e.exec = function () {
                    var e = [];
                    return (e.groups = { a: "7" }), e;
                }),
                "7" !== "".replace(e, "$<a>")
            );
        }),
        Zi = "$0" === "a".replace(/./, "$0"),
        er = Xi("replace"),
        tr = !!/./[er] && "" === /./[er]("a", "$0"),
        nr = !Yi(function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments);
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        }),
        ir = function (e, t, n, i) {
            var r = Xi(e),
                a = !Yi(function () {
                    var t = {};
                    return (
                        (t[r] = function () {
                            return 7;
                        }),
                        7 != ""[e](t)
                    );
                }),
                o =
                    a &&
                    !Yi(function () {
                        var t = !1,
                            n = /a/;
                        return (
                            "split" === e &&
                                (((n = {}).constructor = {}),
                                (n.constructor[$i] = function () {
                                    return n;
                                }),
                                (n.flags = ""),
                                (n[r] = /./[r])),
                            (n.exec = function () {
                                return (t = !0), null;
                            }),
                            n[r](""),
                            !t
                        );
                    });
            if (
                !a ||
                !o ||
                ("replace" === e && (!Qi || !Zi || tr)) ||
                ("split" === e && !nr)
            ) {
                var s = /./[r],
                    l = n(
                        r,
                        ""[e],
                        function (e, t, n, i, r) {
                            var o = t.exec;
                            return o === Ki || o === Ji.exec
                                ? a && !r
                                    ? { done: !0, value: s.call(t, n, i) }
                                    : { done: !0, value: e.call(n, t, i) }
                                : { done: !1 };
                        },
                        {
                            REPLACE_KEEPS_$0: Zi,
                            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: tr,
                        }
                    ),
                    c = l[0],
                    u = l[1];
                Wi(String.prototype, e, c),
                    Wi(
                        Ji,
                        r,
                        2 == t
                            ? function (e, t) {
                                  return u.call(e, this, t);
                              }
                            : function (e) {
                                  return u.call(e, this);
                              }
                    );
            }
            i && Gi(Ji[r], "sham", !0);
        },
        rr =
            Object.is ||
            function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            },
        ar = h,
        or = Vi,
        sr = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i)
                    throw TypeError(
                        "RegExp exec method returned something other than an Object or null"
                    );
                return i;
            }
            if ("RegExp" !== ar(e))
                throw TypeError("RegExp#exec called on incompatible receiver");
            return or.call(e, t);
        },
        lr = V,
        cr = p,
        ur = rr,
        dr = sr;
    ir("search", 1, function (e, t, n) {
        return [
            function (t) {
                var n = cr(this),
                    i = null == t ? void 0 : t[e];
                return void 0 !== i
                    ? i.call(t, n)
                    : new RegExp(t)[e](String(n));
            },
            function (e) {
                var i = n(t, e, this);
                if (i.done) return i.value;
                var r = lr(e),
                    a = String(this),
                    o = r.lastIndex;
                ur(o, 0) || (r.lastIndex = 0);
                var s = dr(r, a);
                return (
                    ur(r.lastIndex, o) || (r.lastIndex = o),
                    null === s ? -1 : s.index
                );
            },
        ];
    });
    var hr = {};
    hr[Bn("toStringTag")] = "z";
    var fr = "[object z]" === String(hr),
        vr = fr,
        gr = h,
        pr = Bn("toStringTag"),
        mr =
            "Arguments" ==
            gr(
                (function () {
                    return arguments;
                })()
            ),
        yr = vr
            ? gr
            : function (e) {
                  var t, n, i;
                  return void 0 === e
                      ? "Undefined"
                      : null === e
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        })((t = Object(e)), pr))
                      ? n
                      : mr
                      ? gr(t)
                      : "Object" == (i = gr(t)) && "function" == typeof t.callee
                      ? "Arguments"
                      : i;
              },
        br = yr,
        wr = fr
            ? {}.toString
            : function () {
                  return "[object " + br(this) + "]";
              },
        Er = fr,
        Sr = Z.exports,
        kr = wr;
    Er || Sr(Object.prototype, "toString", kr, { unsafe: !0 });
    var Ar = n.Promise,
        Rr = Z.exports,
        xr = w,
        Lr = V,
        Pr = function (e) {
            if (!xr(e) && null !== e)
                throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        },
        Cr =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var e,
                          t = !1,
                          n = {};
                      try {
                          (e = Object.getOwnPropertyDescriptor(
                              Object.prototype,
                              "__proto__"
                          ).set).call(n, []),
                              (t = n instanceof Array);
                      } catch (e) {}
                      return function (n, i) {
                          return (
                              Lr(n),
                              Pr(i),
                              t ? e.call(n, i) : (n.__proto__ = i),
                              n
                          );
                      };
                  })()
                : void 0),
        Tr = q.f,
        Ir = L,
        Nr = Bn("toStringTag"),
        Mr = function (e, t, n) {
            e &&
                !Ir((e = n ? e : e.prototype), Nr) &&
                Tr(e, Nr, { configurable: !0, value: t });
        },
        Or = Qe,
        jr = q,
        Br = a,
        Dr = Bn("species"),
        Hr = function (e) {
            var t = Or(e),
                n = jr.f;
            Br &&
                t &&
                !t[Dr] &&
                n(t, Dr, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        },
        Fr = {},
        zr = Fr,
        Ur = Bn("iterator"),
        qr = Array.prototype,
        _r = function (e) {
            return void 0 !== e && (zr.Array === e || qr[Ur] === e);
        },
        Vr = yr,
        Wr = Fr,
        Kr = Bn("iterator"),
        Yr = function (e) {
            if (null != e) return e[Kr] || e["@@iterator"] || Wr[Vr(e)];
        },
        Xr = V,
        Gr = function (e) {
            var t = e.return;
            if (void 0 !== t) return Xr(t.call(e)).value;
        },
        $r = V,
        Jr = _r,
        Qr = at,
        Zr = vn,
        ea = Yr,
        ta = Gr,
        na = function (e, t) {
            (this.stopped = e), (this.result = t);
        },
        ia = Bn("iterator"),
        ra = !1;
    try {
        var aa = 0,
            oa = {
                next: function () {
                    return { done: !!aa++ };
                },
                return: function () {
                    ra = !0;
                },
            };
        (oa[ia] = function () {
            return this;
        }),
            Array.from(oa, function () {
                throw 2;
            });
    } catch (e) {}
    var sa,
        la,
        ca,
        ua = function (e, t) {
            if (!t && !ra) return !1;
            var n = !1;
            try {
                var i = {};
                (i[ia] = function () {
                    return {
                        next: function () {
                            return { done: (n = !0) };
                        },
                    };
                }),
                    e(i);
            } catch (e) {}
            return n;
        },
        da = V,
        ha = hn,
        fa = Bn("species"),
        va = function (e, t) {
            var n,
                i = da(e).constructor;
            return void 0 === i || null == (n = da(i)[fa]) ? t : ha(n);
        },
        ga = Qe("document", "documentElement"),
        pa = /(?:iphone|ipod|ipad).*applewebkit/i.test(mn),
        ma = "process" == h(n.process),
        ya = n,
        ba = r,
        wa = vn,
        Ea = ga,
        Sa = I,
        ka = pa,
        Aa = ma,
        Ra = ya.location,
        xa = ya.setImmediate,
        La = ya.clearImmediate,
        Pa = ya.process,
        Ca = ya.MessageChannel,
        Ta = ya.Dispatch,
        Ia = 0,
        Na = {},
        Ma = "onreadystatechange",
        Oa = function (e) {
            if (Na.hasOwnProperty(e)) {
                var t = Na[e];
                delete Na[e], t();
            }
        },
        ja = function (e) {
            return function () {
                Oa(e);
            };
        },
        Ba = function (e) {
            Oa(e.data);
        },
        Da = function (e) {
            ya.postMessage(e + "", Ra.protocol + "//" + Ra.host);
        };
    (xa && La) ||
        ((xa = function (e) {
            for (var t = [], n = 1; arguments.length > n; )
                t.push(arguments[n++]);
            return (
                (Na[++Ia] = function () {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, t);
                }),
                sa(Ia),
                Ia
            );
        }),
        (La = function (e) {
            delete Na[e];
        }),
        Aa
            ? (sa = function (e) {
                  Pa.nextTick(ja(e));
              })
            : Ta && Ta.now
            ? (sa = function (e) {
                  Ta.now(ja(e));
              })
            : Ca && !ka
            ? ((ca = (la = new Ca()).port2),
              (la.port1.onmessage = Ba),
              (sa = wa(ca.postMessage, ca, 1)))
            : ya.addEventListener &&
              "function" == typeof postMessage &&
              !ya.importScripts &&
              Ra &&
              "file:" !== Ra.protocol &&
              !ba(Da)
            ? ((sa = Da), ya.addEventListener("message", Ba, !1))
            : (sa =
                  Ma in Sa("script")
                      ? function (e) {
                            Ea.appendChild(Sa("script"))[Ma] = function () {
                                Ea.removeChild(this), Oa(e);
                            };
                        }
                      : function (e) {
                            setTimeout(ja(e), 0);
                        }));
    var Ha,
        Fa,
        za,
        Ua,
        qa,
        _a,
        Va,
        Wa,
        Ka = { set: xa, clear: La },
        Ya = /web0s(?!.*chrome)/i.test(mn),
        Xa = n,
        Ga = i.f,
        $a = Ka.set,
        Ja = pa,
        Qa = Ya,
        Za = ma,
        eo = Xa.MutationObserver || Xa.WebKitMutationObserver,
        to = Xa.document,
        no = Xa.process,
        io = Xa.Promise,
        ro = Ga(Xa, "queueMicrotask"),
        ao = ro && ro.value;
    ao ||
        ((Ha = function () {
            var e, t;
            for (Za && (e = no.domain) && e.exit(); Fa; ) {
                (t = Fa.fn), (Fa = Fa.next);
                try {
                    t();
                } catch (e) {
                    throw (Fa ? Ua() : (za = void 0), e);
                }
            }
            (za = void 0), e && e.enter();
        }),
        Ja || Za || Qa || !eo || !to
            ? io && io.resolve
                ? (((Va = io.resolve(void 0)).constructor = io),
                  (Wa = Va.then),
                  (Ua = function () {
                      Wa.call(Va, Ha);
                  }))
                : (Ua = Za
                      ? function () {
                            no.nextTick(Ha);
                        }
                      : function () {
                            $a.call(Xa, Ha);
                        })
            : ((qa = !0),
              (_a = to.createTextNode("")),
              new eo(Ha).observe(_a, { characterData: !0 }),
              (Ua = function () {
                  _a.data = qa = !qa;
              })));
    var oo =
            ao ||
            function (e) {
                var t = { fn: e, next: void 0 };
                za && (za.next = t), Fa || ((Fa = t), Ua()), (za = t);
            },
        so = {},
        lo = hn,
        co = function (e) {
            var t, n;
            (this.promise = new e(function (e, i) {
                if (void 0 !== t || void 0 !== n)
                    throw TypeError("Bad Promise constructor");
                (t = e), (n = i);
            })),
                (this.resolve = lo(t)),
                (this.reject = lo(n));
        };
    so.f = function (e) {
        return new co(e);
    };
    var uo,
        ho,
        fo,
        vo,
        go = V,
        po = w,
        mo = so,
        yo = n,
        bo = "object" == typeof window,
        wo = Xt,
        Eo = n,
        So = Qe,
        ko = Ar,
        Ao = Z.exports,
        Ro = function (e, t, n) {
            for (var i in t) Rr(e, i, t[i], n);
            return e;
        },
        xo = Cr,
        Lo = Mr,
        Po = Hr,
        Co = w,
        To = hn,
        Io = function (e, t, n) {
            if (!(e instanceof t))
                throw TypeError(
                    "Incorrect " + (n ? n + " " : "") + "invocation"
                );
            return e;
        },
        No = le,
        Mo = function (e, t, n) {
            var i,
                r,
                a,
                o,
                s,
                l,
                c,
                u = n && n.that,
                d = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                f = !(!n || !n.INTERRUPTED),
                v = Zr(t, u, 1 + d + f),
                g = function (e) {
                    return i && ta(i), new na(!0, e);
                },
                p = function (e) {
                    return d
                        ? ($r(e), f ? v(e[0], e[1], g) : v(e[0], e[1]))
                        : f
                        ? v(e, g)
                        : v(e);
                };
            if (h) i = e;
            else {
                if ("function" != typeof (r = ea(e)))
                    throw TypeError("Target is not iterable");
                if (Jr(r)) {
                    for (a = 0, o = Qr(e.length); o > a; a++)
                        if ((s = p(e[a])) && s instanceof na) return s;
                    return new na(!1);
                }
                i = r.call(e);
            }
            for (l = i.next; !(c = l.call(i)).done; ) {
                try {
                    s = p(c.value);
                } catch (e) {
                    throw (ta(i), e);
                }
                if ("object" == typeof s && s && s instanceof na) return s;
            }
            return new na(!1);
        },
        Oo = ua,
        jo = va,
        Bo = Ka.set,
        Do = oo,
        Ho = function (e, t) {
            if ((go(e), po(t) && t.constructor === e)) return t;
            var n = mo.f(e);
            return (0, n.resolve)(t), n.promise;
        },
        Fo = function (e, t) {
            var n = yo.console;
            n &&
                n.error &&
                (1 === arguments.length ? n.error(e) : n.error(e, t));
        },
        zo = so,
        Uo = function (e) {
            try {
                return { error: !1, value: e() };
            } catch (e) {
                return { error: !0, value: e };
            }
        },
        qo = Fe,
        _o = zt,
        Vo = bo,
        Wo = ma,
        Ko = Sn,
        Yo = Bn("species"),
        Xo = "Promise",
        Go = qo.get,
        $o = qo.set,
        Jo = qo.getterFor(Xo),
        Qo = ko && ko.prototype,
        Zo = ko,
        es = Qo,
        ts = Eo.TypeError,
        ns = Eo.document,
        is = Eo.process,
        rs = zo.f,
        as = rs,
        os = !!(ns && ns.createEvent && Eo.dispatchEvent),
        ss = "function" == typeof PromiseRejectionEvent,
        ls = "unhandledrejection",
        cs = !1,
        us = _o(Xo, function () {
            var e = No(Zo) !== String(Zo);
            if (!e && 66 === Ko) return !0;
            if (Ko >= 51 && /native code/.test(Zo)) return !1;
            var t = new Zo(function (e) {
                    e(1);
                }),
                n = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            return (
                ((t.constructor = {})[Yo] = n),
                !(cs = t.then(function () {}) instanceof n) || (!e && Vo && !ss)
            );
        }),
        ds =
            us ||
            !Oo(function (e) {
                Zo.all(e).catch(function () {});
            }),
        hs = function (e) {
            var t;
            return !(!Co(e) || "function" != typeof (t = e.then)) && t;
        },
        fs = function (e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                Do(function () {
                    for (
                        var i = e.value, r = 1 == e.state, a = 0;
                        n.length > a;

                    ) {
                        var o,
                            s,
                            l,
                            c = n[a++],
                            u = r ? c.ok : c.fail,
                            d = c.resolve,
                            h = c.reject,
                            f = c.domain;
                        try {
                            u
                                ? (r ||
                                      (2 === e.rejection && ms(e),
                                      (e.rejection = 1)),
                                  !0 === u
                                      ? (o = i)
                                      : (f && f.enter(),
                                        (o = u(i)),
                                        f && (f.exit(), (l = !0))),
                                  o === c.promise
                                      ? h(ts("Promise-chain cycle"))
                                      : (s = hs(o))
                                      ? s.call(o, d, h)
                                      : d(o))
                                : h(i);
                        } catch (e) {
                            f && !l && f.exit(), h(e);
                        }
                    }
                    (e.reactions = []),
                        (e.notified = !1),
                        t && !e.rejection && gs(e);
                });
            }
        },
        vs = function (e, t, n) {
            var i, r;
            os
                ? (((i = ns.createEvent("Event")).promise = t),
                  (i.reason = n),
                  i.initEvent(e, !1, !0),
                  Eo.dispatchEvent(i))
                : (i = { promise: t, reason: n }),
                !ss && (r = Eo["on" + e])
                    ? r(i)
                    : e === ls && Fo("Unhandled promise rejection", n);
        },
        gs = function (e) {
            Bo.call(Eo, function () {
                var t,
                    n = e.facade,
                    i = e.value;
                if (
                    ps(e) &&
                    ((t = Uo(function () {
                        Wo ? is.emit("unhandledRejection", i, n) : vs(ls, n, i);
                    })),
                    (e.rejection = Wo || ps(e) ? 2 : 1),
                    t.error)
                )
                    throw t.value;
            });
        },
        ps = function (e) {
            return 1 !== e.rejection && !e.parent;
        },
        ms = function (e) {
            Bo.call(Eo, function () {
                var t = e.facade;
                Wo
                    ? is.emit("rejectionHandled", t)
                    : vs("rejectionhandled", t, e.value);
            });
        },
        ys = function (e, t, n) {
            return function (i) {
                e(t, i, n);
            };
        },
        bs = function (e, t, n) {
            e.done ||
                ((e.done = !0),
                n && (e = n),
                (e.value = t),
                (e.state = 2),
                fs(e, !0));
        },
        ws = function (e, t, n) {
            if (!e.done) {
                (e.done = !0), n && (e = n);
                try {
                    if (e.facade === t)
                        throw ts("Promise can't be resolved itself");
                    var i = hs(t);
                    i
                        ? Do(function () {
                              var n = { done: !1 };
                              try {
                                  i.call(t, ys(ws, n, e), ys(bs, n, e));
                              } catch (t) {
                                  bs(n, t, e);
                              }
                          })
                        : ((e.value = t), (e.state = 1), fs(e, !1));
                } catch (t) {
                    bs({ done: !1 }, t, e);
                }
            }
        };
    if (
        us &&
        ((es = (Zo = function (e) {
            Io(this, Zo, Xo), To(e), uo.call(this);
            var t = Go(this);
            try {
                e(ys(ws, t), ys(bs, t));
            } catch (e) {
                bs(t, e);
            }
        }).prototype),
        ((uo = function (e) {
            $o(this, {
                type: Xo,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0,
            });
        }).prototype = Ro(es, {
            then: function (e, t) {
                var n = Jo(this),
                    i = rs(jo(this, Zo));
                return (
                    (i.ok = "function" != typeof e || e),
                    (i.fail = "function" == typeof t && t),
                    (i.domain = Wo ? is.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(i),
                    0 != n.state && fs(n, !1),
                    i.promise
                );
            },
            catch: function (e) {
                return this.then(void 0, e);
            },
        })),
        (ho = function () {
            var e = new uo(),
                t = Go(e);
            (this.promise = e),
                (this.resolve = ys(ws, t)),
                (this.reject = ys(bs, t));
        }),
        (zo.f = rs =
            function (e) {
                return e === Zo || e === fo ? new ho(e) : as(e);
            }),
        "function" == typeof ko && Qo !== Object.prototype)
    ) {
        (vo = Qo.then),
            cs ||
                (Ao(
                    Qo,
                    "then",
                    function (e, t) {
                        var n = this;
                        return new Zo(function (e, t) {
                            vo.call(n, e, t);
                        }).then(e, t);
                    },
                    { unsafe: !0 }
                ),
                Ao(Qo, "catch", es.catch, { unsafe: !0 }));
        try {
            delete Qo.constructor;
        } catch (e) {}
        xo && xo(Qo, es);
    }
    wo({ global: !0, wrap: !0, forced: us }, { Promise: Zo }),
        Lo(Zo, Xo, !1),
        Po(Xo),
        (fo = So(Xo)),
        wo(
            { target: Xo, stat: !0, forced: us },
            {
                reject: function (e) {
                    var t = rs(this);
                    return t.reject.call(void 0, e), t.promise;
                },
            }
        ),
        wo(
            { target: Xo, stat: !0, forced: us },
            {
                resolve: function (e) {
                    return Ho(this, e);
                },
            }
        ),
        wo(
            { target: Xo, stat: !0, forced: ds },
            {
                all: function (e) {
                    var t = this,
                        n = rs(t),
                        i = n.resolve,
                        r = n.reject,
                        a = Uo(function () {
                            var n = To(t.resolve),
                                a = [],
                                o = 0,
                                s = 1;
                            Mo(e, function (e) {
                                var l = o++,
                                    c = !1;
                                a.push(void 0),
                                    s++,
                                    n.call(t, e).then(function (e) {
                                        c ||
                                            ((c = !0), (a[l] = e), --s || i(a));
                                    }, r);
                            }),
                                --s || i(a);
                        });
                    return a.error && r(a.value), n.promise;
                },
                race: function (e) {
                    var t = this,
                        n = rs(t),
                        i = n.reject,
                        r = Uo(function () {
                            var r = To(t.resolve);
                            Mo(e, function (e) {
                                r.call(t, e).then(n.resolve, i);
                            });
                        });
                    return r.error && i(r.value), n.promise;
                },
            }
        );
    var Es = r,
        Ss = function (e, t) {
            var n = [][e];
            return (
                !!n &&
                Es(function () {
                    n.call(
                        null,
                        t ||
                            function () {
                                throw 1;
                            },
                        1
                    );
                })
            );
        },
        ks = Xn.forEach,
        As = Ss("forEach")
            ? [].forEach
            : function (e) {
                  return ks(
                      this,
                      e,
                      arguments.length > 1 ? arguments[1] : void 0
                  );
              },
        Rs = n,
        xs = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
        },
        Ls = As,
        Ps = Q;
    for (var Cs in xs) {
        var Ts = Rs[Cs],
            Is = Ts && Ts.prototype;
        if (Is && Is.forEach !== Ls)
            try {
                Ps(Is, "forEach", Ls);
            } catch (e) {
                Is.forEach = Ls;
            }
    }
    var Ns = V,
        Ms = Gr,
        Os = vn,
        js = A,
        Bs = function (e, t, n, i) {
            try {
                return i ? t(Ns(n)[0], n[1]) : t(n);
            } catch (t) {
                throw (Ms(e), t);
            }
        },
        Ds = _r,
        Hs = at,
        Fs = ii,
        zs = Yr,
        Us = function (e) {
            var t,
                n,
                i,
                r,
                a,
                o,
                s = js(e),
                l = "function" == typeof this ? this : Array,
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                d = void 0 !== u,
                h = zs(s),
                f = 0;
            if (
                (d && (u = Os(u, c > 2 ? arguments[2] : void 0, 2)),
                null == h || (l == Array && Ds(h)))
            )
                for (n = new l((t = Hs(s.length))); t > f; f++)
                    (o = d ? u(s[f], f) : s[f]), Fs(n, f, o);
            else
                for (
                    a = (r = h.call(s)).next, n = new l();
                    !(i = a.call(r)).done;
                    f++
                )
                    (o = d ? Bs(r, u, [i.value, f], !0) : i.value), Fs(n, f, o);
            return (n.length = f), n;
        };
    Xt(
        {
            target: "Array",
            stat: !0,
            forced: !ua(function (e) {
                Array.from(e);
            }),
        },
        { from: Us }
    );
    var qs,
        _s,
        Vs,
        Ws = nt,
        Ks = p,
        Ys = function (e) {
            return function (t, n) {
                var i,
                    r,
                    a = String(Ks(t)),
                    o = Ws(n),
                    s = a.length;
                return o < 0 || o >= s
                    ? e
                        ? ""
                        : void 0
                    : (i = a.charCodeAt(o)) < 55296 ||
                      i > 56319 ||
                      o + 1 === s ||
                      (r = a.charCodeAt(o + 1)) < 56320 ||
                      r > 57343
                    ? e
                        ? a.charAt(o)
                        : i
                    : e
                    ? a.slice(o, o + 2)
                    : r - 56320 + ((i - 55296) << 10) + 65536;
            };
        },
        Xs = { codeAt: Ys(!1), charAt: Ys(!0) },
        Gs = !r(function () {
            function e() {}
            return (
                (e.prototype.constructor = null),
                Object.getPrototypeOf(new e()) !== e.prototype
            );
        }),
        $s = L,
        Js = A,
        Qs = Gs,
        Zs = ke("IE_PROTO"),
        el = Object.prototype,
        tl = Qs
            ? Object.getPrototypeOf
            : function (e) {
                  return (
                      (e = Js(e)),
                      $s(e, Zs)
                          ? e[Zs]
                          : "function" == typeof e.constructor &&
                            e instanceof e.constructor
                          ? e.constructor.prototype
                          : e instanceof Object
                          ? el
                          : null
                  );
              },
        nl = r,
        il = tl,
        rl = Q,
        al = L,
        ol = Bn("iterator"),
        sl = !1;
    [].keys &&
        ("next" in (Vs = [].keys())
            ? (_s = il(il(Vs))) !== Object.prototype && (qs = _s)
            : (sl = !0));
    var ll =
        null == qs ||
        nl(function () {
            var e = {};
            return qs[ol].call(e) !== e;
        });
    ll && (qs = {}),
        al(qs, ol) ||
            rl(qs, ol, function () {
                return this;
            });
    var cl,
        ul = { IteratorPrototype: qs, BUGGY_SAFARI_ITERATORS: sl },
        dl = q,
        hl = V,
        fl = Jt,
        vl = a
            ? Object.defineProperties
            : function (e, t) {
                  hl(e);
                  for (var n, i = fl(t), r = i.length, a = 0; r > a; )
                      dl.f(e, (n = i[a++]), t[n]);
                  return e;
              },
        gl = V,
        pl = vl,
        ml = wt,
        yl = Ae,
        bl = ga,
        wl = I,
        El = "prototype",
        Sl = "script",
        kl = ke("IE_PROTO"),
        Al = function () {},
        Rl = function (e) {
            return "<" + Sl + ">" + e + "</" + Sl + ">";
        },
        xl = function () {
            try {
                cl = document.domain && new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t, n;
            xl = cl
                ? (function (e) {
                      e.write(Rl("")), e.close();
                      var t = e.parentWindow.Object;
                      return (e = null), t;
                  })(cl)
                : ((t = wl("iframe")),
                  (n = "java" + Sl + ":"),
                  (t.style.display = "none"),
                  bl.appendChild(t),
                  (t.src = String(n)),
                  (e = t.contentWindow.document).open(),
                  e.write(Rl("document.F=Object")),
                  e.close(),
                  e.F);
            for (var i = ml.length; i--; ) delete xl[El][ml[i]];
            return xl();
        };
    yl[kl] = !0;
    var Ll =
            Object.create ||
            function (e, t) {
                var n;
                return (
                    null !== e
                        ? ((Al[El] = gl(e)),
                          (n = new Al()),
                          (Al[El] = null),
                          (n[kl] = e))
                        : (n = xl()),
                    void 0 === t ? n : pl(n, t)
                );
            },
        Pl = ul.IteratorPrototype,
        Cl = Ll,
        Tl = u,
        Il = Mr,
        Nl = Fr,
        Ml = function () {
            return this;
        },
        Ol = Xt,
        jl = function (e, t, n) {
            var i = t + " Iterator";
            return (
                (e.prototype = Cl(Pl, { next: Tl(1, n) })),
                Il(e, i, !1),
                (Nl[i] = Ml),
                e
            );
        },
        Bl = tl,
        Dl = Cr,
        Hl = Mr,
        Fl = Q,
        zl = Z.exports,
        Ul = Fr,
        ql = ul.IteratorPrototype,
        _l = ul.BUGGY_SAFARI_ITERATORS,
        Vl = Bn("iterator"),
        Wl = "keys",
        Kl = "values",
        Yl = "entries",
        Xl = function () {
            return this;
        },
        Gl = Xs.charAt,
        $l = Fe,
        Jl = function (e, t, n, i, r, a, o) {
            jl(n, t, i);
            var s,
                l,
                c,
                u = function (e) {
                    if (e === r && g) return g;
                    if (!_l && e in f) return f[e];
                    switch (e) {
                        case Wl:
                        case Kl:
                        case Yl:
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this);
                    };
                },
                d = t + " Iterator",
                h = !1,
                f = e.prototype,
                v = f[Vl] || f["@@iterator"] || (r && f[r]),
                g = (!_l && v) || u(r),
                p = ("Array" == t && f.entries) || v;
            if (
                (p &&
                    ((s = Bl(p.call(new e()))),
                    ql !== Object.prototype &&
                        s.next &&
                        (Bl(s) !== ql &&
                            (Dl
                                ? Dl(s, ql)
                                : "function" != typeof s[Vl] && Fl(s, Vl, Xl)),
                        Hl(s, d, !0))),
                r == Kl &&
                    v &&
                    v.name !== Kl &&
                    ((h = !0),
                    (g = function () {
                        return v.call(this);
                    })),
                f[Vl] !== g && Fl(f, Vl, g),
                (Ul[t] = g),
                r)
            )
                if (
                    ((l = {
                        values: u(Kl),
                        keys: a ? g : u(Wl),
                        entries: u(Yl),
                    }),
                    o)
                )
                    for (c in l) (_l || h || !(c in f)) && zl(f, c, l[c]);
                else Ol({ target: t, proto: !0, forced: _l || h }, l);
            return l;
        },
        Ql = "String Iterator",
        Zl = $l.set,
        ec = $l.getterFor(Ql);
    Jl(
        String,
        "String",
        function (e) {
            Zl(this, { type: Ql, string: String(e), index: 0 });
        },
        function () {
            var e,
                t = ec(this),
                n = t.string,
                i = t.index;
            return i >= n.length
                ? { value: void 0, done: !0 }
                : ((e = Gl(n, i)),
                  (t.index += e.length),
                  { value: e, done: !1 });
        }
    );
    var tc = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        nc = p,
        ic = "[" + tc + "]",
        rc = RegExp("^" + ic + ic + "*"),
        ac = RegExp(ic + ic + "*$"),
        oc = function (e) {
            return function (t) {
                var n = String(nc(t));
                return (
                    1 & e && (n = n.replace(rc, "")),
                    2 & e && (n = n.replace(ac, "")),
                    n
                );
            };
        },
        sc = { start: oc(1), end: oc(2), trim: oc(3) },
        lc = r,
        cc = tc,
        uc = sc.trim;
    Xt(
        {
            target: "String",
            proto: !0,
            forced: (function (e) {
                return lc(function () {
                    return !!cc[e]() || "​᠎" != "​᠎"[e]() || cc[e].name !== e;
                });
            })("trim"),
        },
        {
            trim: function () {
                return uc(this);
            },
        }
    );
    var dc = {},
        hc = b,
        fc = Ze.f,
        vc = {}.toString,
        gc =
            "object" == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [];
    dc.f = function (e) {
        return gc && "[object Window]" == vc.call(e)
            ? (function (e) {
                  try {
                      return fc(e);
                  } catch (e) {
                      return gc.slice();
                  }
              })(e)
            : fc(hc(e));
    };
    var pc = {},
        mc = Bn;
    pc.f = mc;
    var yc = Xe,
        bc = L,
        wc = pc,
        Ec = q.f,
        Sc = Xt,
        kc = n,
        Ac = Qe,
        Rc = a,
        xc = Rn,
        Lc = xn,
        Pc = r,
        Cc = L,
        Tc = pn,
        Ic = w,
        Nc = V,
        Mc = A,
        Oc = b,
        jc = S,
        Bc = u,
        Dc = Ll,
        Hc = Jt,
        Fc = Ze,
        zc = dc,
        Uc = kt,
        qc = i,
        _c = q,
        Vc = o,
        Wc = Q,
        Kc = Z.exports,
        Yc = he.exports,
        Xc = Ae,
        Gc = be,
        $c = Bn,
        Jc = pc,
        Qc = function (e) {
            var t = yc.Symbol || (yc.Symbol = {});
            bc(t, e) || Ec(t, e, { value: wc.f(e) });
        },
        Zc = Mr,
        eu = Fe,
        tu = Xn.forEach,
        nu = ke("hidden"),
        iu = "Symbol",
        ru = "prototype",
        au = $c("toPrimitive"),
        ou = eu.set,
        su = eu.getterFor(iu),
        lu = Object[ru],
        cu = kc.Symbol,
        uu = Ac("JSON", "stringify"),
        du = qc.f,
        hu = _c.f,
        fu = zc.f,
        vu = Vc.f,
        gu = Yc("symbols"),
        pu = Yc("op-symbols"),
        mu = Yc("string-to-symbol-registry"),
        yu = Yc("symbol-to-string-registry"),
        bu = Yc("wks"),
        wu = kc.QObject,
        Eu = !wu || !wu[ru] || !wu[ru].findChild,
        Su =
            Rc &&
            Pc(function () {
                return (
                    7 !=
                    Dc(
                        hu({}, "a", {
                            get: function () {
                                return hu(this, "a", { value: 7 }).a;
                            },
                        })
                    ).a
                );
            })
                ? function (e, t, n) {
                      var i = du(lu, t);
                      i && delete lu[t],
                          hu(e, t, n),
                          i && e !== lu && hu(lu, t, i);
                  }
                : hu,
        ku = function (e, t) {
            var n = (gu[e] = Dc(cu[ru]));
            return (
                ou(n, { type: iu, tag: e, description: t }),
                Rc || (n.description = t),
                n
            );
        },
        Au = Lc
            ? function (e) {
                  return "symbol" == typeof e;
              }
            : function (e) {
                  return Object(e) instanceof cu;
              },
        Ru = function (e, t, n) {
            e === lu && Ru(pu, t, n), Nc(e);
            var i = jc(t, !0);
            return (
                Nc(n),
                Cc(gu, i)
                    ? (n.enumerable
                          ? (Cc(e, nu) && e[nu][i] && (e[nu][i] = !1),
                            (n = Dc(n, { enumerable: Bc(0, !1) })))
                          : (Cc(e, nu) || hu(e, nu, Bc(1, {})),
                            (e[nu][i] = !0)),
                      Su(e, i, n))
                    : hu(e, i, n)
            );
        },
        xu = function (e, t) {
            Nc(e);
            var n = Oc(t),
                i = Hc(n).concat(Tu(n));
            return (
                tu(i, function (t) {
                    (Rc && !Lu.call(n, t)) || Ru(e, t, n[t]);
                }),
                e
            );
        },
        Lu = function (e) {
            var t = jc(e, !0),
                n = vu.call(this, t);
            return (
                !(this === lu && Cc(gu, t) && !Cc(pu, t)) &&
                (!(
                    n ||
                    !Cc(this, t) ||
                    !Cc(gu, t) ||
                    (Cc(this, nu) && this[nu][t])
                ) ||
                    n)
            );
        },
        Pu = function (e, t) {
            var n = Oc(e),
                i = jc(t, !0);
            if (n !== lu || !Cc(gu, i) || Cc(pu, i)) {
                var r = du(n, i);
                return (
                    !r ||
                        !Cc(gu, i) ||
                        (Cc(n, nu) && n[nu][i]) ||
                        (r.enumerable = !0),
                    r
                );
            }
        },
        Cu = function (e) {
            var t = fu(Oc(e)),
                n = [];
            return (
                tu(t, function (e) {
                    Cc(gu, e) || Cc(Xc, e) || n.push(e);
                }),
                n
            );
        },
        Tu = function (e) {
            var t = e === lu,
                n = fu(t ? pu : Oc(e)),
                i = [];
            return (
                tu(n, function (e) {
                    !Cc(gu, e) || (t && !Cc(lu, e)) || i.push(gu[e]);
                }),
                i
            );
        };
    (xc ||
        ((cu = function () {
            if (this instanceof cu)
                throw TypeError("Symbol is not a constructor");
            var e =
                    arguments.length && void 0 !== arguments[0]
                        ? String(arguments[0])
                        : void 0,
                t = Gc(e),
                n = function (e) {
                    this === lu && n.call(pu, e),
                        Cc(this, nu) && Cc(this[nu], t) && (this[nu][t] = !1),
                        Su(this, t, Bc(1, e));
                };
            return (
                Rc && Eu && Su(lu, t, { configurable: !0, set: n }), ku(t, e)
            );
        }),
        Kc(cu[ru], "toString", function () {
            return su(this).tag;
        }),
        Kc(cu, "withoutSetter", function (e) {
            return ku(Gc(e), e);
        }),
        (Vc.f = Lu),
        (_c.f = Ru),
        (qc.f = Pu),
        (Fc.f = zc.f = Cu),
        (Uc.f = Tu),
        (Jc.f = function (e) {
            return ku($c(e), e);
        }),
        Rc &&
            (hu(cu[ru], "description", {
                configurable: !0,
                get: function () {
                    return su(this).description;
                },
            }),
            Kc(lu, "propertyIsEnumerable", Lu, { unsafe: !0 }))),
    Sc({ global: !0, wrap: !0, forced: !xc, sham: !xc }, { Symbol: cu }),
    tu(Hc(bu), function (e) {
        Qc(e);
    }),
    Sc(
        { target: iu, stat: !0, forced: !xc },
        {
            for: function (e) {
                var t = String(e);
                if (Cc(mu, t)) return mu[t];
                var n = cu(t);
                return (mu[t] = n), (yu[n] = t), n;
            },
            keyFor: function (e) {
                if (!Au(e)) throw TypeError(e + " is not a symbol");
                if (Cc(yu, e)) return yu[e];
            },
            useSetter: function () {
                Eu = !0;
            },
            useSimple: function () {
                Eu = !1;
            },
        }
    ),
    Sc(
        { target: "Object", stat: !0, forced: !xc, sham: !Rc },
        {
            create: function (e, t) {
                return void 0 === t ? Dc(e) : xu(Dc(e), t);
            },
            defineProperty: Ru,
            defineProperties: xu,
            getOwnPropertyDescriptor: Pu,
        }
    ),
    Sc(
        { target: "Object", stat: !0, forced: !xc },
        { getOwnPropertyNames: Cu, getOwnPropertySymbols: Tu }
    ),
    Sc(
        {
            target: "Object",
            stat: !0,
            forced: Pc(function () {
                Uc.f(1);
            }),
        },
        {
            getOwnPropertySymbols: function (e) {
                return Uc.f(Mc(e));
            },
        }
    ),
    uu) &&
        Sc(
            {
                target: "JSON",
                stat: !0,
                forced:
                    !xc ||
                    Pc(function () {
                        var e = cu();
                        return (
                            "[null]" != uu([e]) ||
                            "{}" != uu({ a: e }) ||
                            "{}" != uu(Object(e))
                        );
                    }),
            },
            {
                stringify: function (e, t, n) {
                    for (var i, r = [e], a = 1; arguments.length > a; )
                        r.push(arguments[a++]);
                    if (((i = t), (Ic(t) || void 0 !== e) && !Au(e)))
                        return (
                            Tc(t) ||
                                (t = function (e, t) {
                                    if (
                                        ("function" == typeof i &&
                                            (t = i.call(this, e, t)),
                                        !Au(t))
                                    )
                                        return t;
                                }),
                            (r[1] = t),
                            uu.apply(null, r)
                        );
                },
            }
        );
    cu[ru][au] || Wc(cu[ru], au, cu[ru].valueOf), Zc(cu, iu), (Xc[nu] = !0);
    var Iu = Xt,
        Nu = a,
        Mu = n,
        Ou = L,
        ju = w,
        Bu = q.f,
        Du = Nt,
        Hu = Mu.Symbol;
    if (
        Nu &&
        "function" == typeof Hu &&
        (!("description" in Hu.prototype) || void 0 !== Hu().description)
    ) {
        var Fu = {},
            zu = function () {
                var e =
                        arguments.length < 1 || void 0 === arguments[0]
                            ? void 0
                            : String(arguments[0]),
                    t =
                        this instanceof zu
                            ? new Hu(e)
                            : void 0 === e
                            ? Hu()
                            : Hu(e);
                return "" === e && (Fu[t] = !0), t;
            };
        Du(zu, Hu);
        var Uu = (zu.prototype = Hu.prototype);
        Uu.constructor = zu;
        var qu = Uu.toString,
            _u = "Symbol(test)" == String(Hu("test")),
            Vu = /^Symbol\((.*)\)[^)]+$/;
        Bu(Uu, "description", {
            configurable: !0,
            get: function () {
                var e = ju(this) ? this.valueOf() : this,
                    t = qu.call(e);
                if (Ou(Fu, e)) return "";
                var n = _u ? t.slice(7, -1) : t.replace(Vu, "$1");
                return "" === n ? void 0 : n;
            },
        }),
            Iu({ global: !0, forced: !0 }, { Symbol: zu });
    }
    var Wu = sc.trim,
        Ku = tc,
        Yu = n.parseInt,
        Xu = /^[+-]?0[Xx]/,
        Gu =
            8 !== Yu(Ku + "08") || 22 !== Yu(Ku + "0x16")
                ? function (e, t) {
                      var n = Wu(String(e));
                      return Yu(n, t >>> 0 || (Xu.test(n) ? 16 : 10));
                  }
                : Yu;
    Xt({ global: !0, forced: parseInt != Gu }, { parseInt: Gu });
    var $u = Xs.charAt,
        Ju = function (e, t, n) {
            return t + (n ? $u(e, t).length : 1);
        },
        Qu = V,
        Zu = at,
        ed = p,
        td = Ju,
        nd = sr;
    ir("match", 1, function (e, t, n) {
        return [
            function (t) {
                var n = ed(this),
                    i = null == t ? void 0 : t[e];
                return void 0 !== i
                    ? i.call(t, n)
                    : new RegExp(t)[e](String(n));
            },
            function (e) {
                var i = n(t, e, this);
                if (i.done) return i.value;
                var r = Qu(e),
                    a = String(this);
                if (!r.global) return nd(r, a);
                var o = r.unicode;
                r.lastIndex = 0;
                for (var s, l = [], c = 0; null !== (s = nd(r, a)); ) {
                    var u = String(s[0]);
                    (l[c] = u),
                        "" === u && (r.lastIndex = td(a, Zu(r.lastIndex), o)),
                        c++;
                }
                return 0 === c ? null : l;
            },
        ];
    });
    var id = Xt,
        rd = ct,
        ad = nt,
        od = at,
        sd = A,
        ld = zn,
        cd = ii,
        ud = Qn("splice"),
        dd = Math.max,
        hd = Math.min,
        fd = 9007199254740991,
        vd = "Maximum allowed length exceeded";
    id(
        { target: "Array", proto: !0, forced: !ud },
        {
            splice: function (e, t) {
                var n,
                    i,
                    r,
                    a,
                    o,
                    s,
                    l = sd(this),
                    c = od(l.length),
                    u = rd(e, c),
                    d = arguments.length;
                if (
                    (0 === d
                        ? (n = i = 0)
                        : 1 === d
                        ? ((n = 0), (i = c - u))
                        : ((n = d - 2), (i = hd(dd(ad(t), 0), c - u))),
                    c + n - i > fd)
                )
                    throw TypeError(vd);
                for (r = ld(l, i), a = 0; a < i; a++)
                    (o = u + a) in l && cd(r, a, l[o]);
                if (((r.length = i), n < i)) {
                    for (a = u; a < c - i; a++)
                        (s = a + n),
                            (o = a + i) in l ? (l[s] = l[o]) : delete l[s];
                    for (a = c; a > c - i + n; a--) delete l[a - 1];
                } else if (n > i)
                    for (a = c - i; a > u; a--)
                        (s = a + n - 1),
                            (o = a + i - 1) in l ? (l[s] = l[o]) : delete l[s];
                for (a = 0; a < n; a++) l[a + u] = arguments[a + 2];
                return (l.length = c - i + n), r;
            },
        }
    );
    var gd = w,
        pd = h,
        md = Bn("match"),
        yd = function (e) {
            var t;
            return gd(e) && (void 0 !== (t = e[md]) ? !!t : "RegExp" == pd(e));
        },
        bd = ir,
        wd = yd,
        Ed = V,
        Sd = p,
        kd = va,
        Ad = Ju,
        Rd = at,
        xd = sr,
        Ld = Vi,
        Pd = Ni.UNSUPPORTED_Y,
        Cd = [].push,
        Td = Math.min,
        Id = 4294967295;
    bd(
        "split",
        2,
        function (e, t, n) {
            var i;
            return (
                (i =
                    "c" == "abbc".split(/(b)*/)[1] ||
                    4 != "test".split(/(?:)/, -1).length ||
                    2 != "ab".split(/(?:ab)*/).length ||
                    4 != ".".split(/(.?)(.?)/).length ||
                    ".".split(/()()/).length > 1 ||
                    "".split(/.?/).length
                        ? function (e, n) {
                              var i = String(Sd(this)),
                                  r = void 0 === n ? Id : n >>> 0;
                              if (0 === r) return [];
                              if (void 0 === e) return [i];
                              if (!wd(e)) return t.call(i, e, r);
                              for (
                                  var a,
                                      o,
                                      s,
                                      l = [],
                                      c =
                                          (e.ignoreCase ? "i" : "") +
                                          (e.multiline ? "m" : "") +
                                          (e.unicode ? "u" : "") +
                                          (e.sticky ? "y" : ""),
                                      u = 0,
                                      d = new RegExp(e.source, c + "g");
                                  (a = Ld.call(d, i)) &&
                                  !(
                                      (o = d.lastIndex) > u &&
                                      (l.push(i.slice(u, a.index)),
                                      a.length > 1 &&
                                          a.index < i.length &&
                                          Cd.apply(l, a.slice(1)),
                                      (s = a[0].length),
                                      (u = o),
                                      l.length >= r)
                                  );

                              )
                                  d.lastIndex === a.index && d.lastIndex++;
                              return (
                                  u === i.length
                                      ? (!s && d.test("")) || l.push("")
                                      : l.push(i.slice(u)),
                                  l.length > r ? l.slice(0, r) : l
                              );
                          }
                        : "0".split(void 0, 0).length
                        ? function (e, n) {
                              return void 0 === e && 0 === n
                                  ? []
                                  : t.call(this, e, n);
                          }
                        : t),
                [
                    function (t, n) {
                        var r = Sd(this),
                            a = null == t ? void 0 : t[e];
                        return void 0 !== a
                            ? a.call(t, r, n)
                            : i.call(String(r), t, n);
                    },
                    function (e, r) {
                        var a = n(i, e, this, r, i !== t);
                        if (a.done) return a.value;
                        var o = Ed(e),
                            s = String(this),
                            l = kd(o, RegExp),
                            c = o.unicode,
                            u =
                                (o.ignoreCase ? "i" : "") +
                                (o.multiline ? "m" : "") +
                                (o.unicode ? "u" : "") +
                                (Pd ? "g" : "y"),
                            d = new l(Pd ? "^(?:" + o.source + ")" : o, u),
                            h = void 0 === r ? Id : r >>> 0;
                        if (0 === h) return [];
                        if (0 === s.length) return null === xd(d, s) ? [s] : [];
                        for (var f = 0, v = 0, g = []; v < s.length; ) {
                            d.lastIndex = Pd ? 0 : v;
                            var p,
                                m = xd(d, Pd ? s.slice(v) : s);
                            if (
                                null === m ||
                                (p = Td(
                                    Rd(d.lastIndex + (Pd ? v : 0)),
                                    s.length
                                )) === f
                            )
                                v = Ad(s, v, c);
                            else {
                                if ((g.push(s.slice(f, v)), g.length === h))
                                    return g;
                                for (var y = 1; y <= m.length - 1; y++)
                                    if ((g.push(m[y]), g.length === h))
                                        return g;
                                v = f = p;
                            }
                        }
                        return g.push(s.slice(f)), g;
                    },
                ]
            );
        },
        Pd
    );
    var Nd = w,
        Md = Cr,
        Od = function (e, t, n) {
            var i, r;
            return (
                Md &&
                    "function" == typeof (i = t.constructor) &&
                    i !== n &&
                    Nd((r = i.prototype)) &&
                    r !== n.prototype &&
                    Md(e, r),
                e
            );
        },
        jd = a,
        Bd = n,
        Dd = zt,
        Hd = Z.exports,
        Fd = L,
        zd = h,
        Ud = Od,
        qd = S,
        _d = r,
        Vd = Ll,
        Wd = Ze.f,
        Kd = i.f,
        Yd = q.f,
        Xd = sc.trim,
        Gd = "Number",
        $d = Bd[Gd],
        Jd = $d.prototype,
        Qd = zd(Vd(Jd)) == Gd,
        Zd = function (e) {
            var t,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                c = qd(e, !1);
            if ("string" == typeof c && c.length > 2)
                if (43 === (t = (c = Xd(c)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
                } else if (48 === t) {
                    switch (c.charCodeAt(1)) {
                        case 66:
                        case 98:
                            (i = 2), (r = 49);
                            break;
                        case 79:
                        case 111:
                            (i = 8), (r = 55);
                            break;
                        default:
                            return +c;
                    }
                    for (o = (a = c.slice(2)).length, s = 0; s < o; s++)
                        if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
                    return parseInt(a, i);
                }
            return +c;
        };
    if (Dd(Gd, !$d(" 0o1") || !$d("0b1") || $d("+0x1"))) {
        for (
            var eh,
                th = function (e) {
                    var t = arguments.length < 1 ? 0 : e,
                        n = this;
                    return n instanceof th &&
                        (Qd
                            ? _d(function () {
                                  Jd.valueOf.call(n);
                              })
                            : zd(n) != Gd)
                        ? Ud(new $d(Zd(t)), n, th)
                        : Zd(t);
                },
                nh = jd
                    ? Wd($d)
                    : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                          ","
                      ),
                ih = 0;
            nh.length > ih;
            ih++
        )
            Fd($d, (eh = nh[ih])) && !Fd(th, eh) && Yd(th, eh, Kd($d, eh));
        (th.prototype = Jd), (Jd.constructor = th), Hd(Bd, Gd, th);
    }
    var rh = Xt,
        ah = vt.indexOf,
        oh = Ss,
        sh = [].indexOf,
        lh = !!sh && 1 / [1].indexOf(1, -0) < 0,
        ch = oh("indexOf");
    rh(
        { target: "Array", proto: !0, forced: lh || !ch },
        {
            indexOf: function (e) {
                return lh
                    ? sh.apply(this, arguments) || 0
                    : ah(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }
    );
    var uh = sc.trim,
        dh = tc,
        hh = n.parseFloat,
        fh =
            1 / hh(dh + "-0") != -1 / 0
                ? function (e) {
                      var t = uh(String(e)),
                          n = hh(t);
                      return 0 === n && "-" == t.charAt(0) ? -0 : n;
                  }
                : hh;
    Xt({ global: !0, forced: parseFloat != fh }, { parseFloat: fh });
    var vh = A,
        gh = Math.floor,
        ph = "".replace,
        mh = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        yh = /\$([$&'`]|\d{1,2})/g,
        bh = ir,
        wh = V,
        Eh = at,
        Sh = nt,
        kh = p,
        Ah = Ju,
        Rh = function (e, t, n, i, r, a) {
            var o = n + e.length,
                s = i.length,
                l = yh;
            return (
                void 0 !== r && ((r = vh(r)), (l = mh)),
                ph.call(a, l, function (a, l) {
                    var c;
                    switch (l.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return t.slice(0, n);
                        case "'":
                            return t.slice(o);
                        case "<":
                            c = r[l.slice(1, -1)];
                            break;
                        default:
                            var u = +l;
                            if (0 === u) return a;
                            if (u > s) {
                                var d = gh(u / 10);
                                return 0 === d
                                    ? a
                                    : d <= s
                                    ? void 0 === i[d - 1]
                                        ? l.charAt(1)
                                        : i[d - 1] + l.charAt(1)
                                    : a;
                            }
                            c = i[u - 1];
                    }
                    return void 0 === c ? "" : c;
                })
            );
        },
        xh = sr,
        Lh = Math.max,
        Ph = Math.min;
    bh("replace", 2, function (e, t, n, i) {
        var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = i.REPLACE_KEEPS_$0,
            o = r ? "$" : "$0";
        return [
            function (n, i) {
                var r = kh(this),
                    a = null == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i);
            },
            function (e, i) {
                if (
                    (!r && a) ||
                    ("string" == typeof i && -1 === i.indexOf(o))
                ) {
                    var s = n(t, e, this, i);
                    if (s.done) return s.value;
                }
                var l = wh(e),
                    c = String(this),
                    u = "function" == typeof i;
                u || (i = String(i));
                var d = l.global;
                if (d) {
                    var h = l.unicode;
                    l.lastIndex = 0;
                }
                for (var f = []; ; ) {
                    var v = xh(l, c);
                    if (null === v) break;
                    if ((f.push(v), !d)) break;
                    "" === String(v[0]) &&
                        (l.lastIndex = Ah(c, Eh(l.lastIndex), h));
                }
                for (var g, p = "", m = 0, y = 0; y < f.length; y++) {
                    v = f[y];
                    for (
                        var b = String(v[0]),
                            w = Lh(Ph(Sh(v.index), c.length), 0),
                            E = [],
                            S = 1;
                        S < v.length;
                        S++
                    )
                        E.push(void 0 === (g = v[S]) ? g : String(g));
                    var k = v.groups;
                    if (u) {
                        var A = [b].concat(E, w, c);
                        void 0 !== k && A.push(k);
                        var R = String(i.apply(void 0, A));
                    } else R = Rh(b, c, w, E, k, i);
                    w >= m && ((p += c.slice(m, w) + R), (m = w + b.length));
                }
                return p + c.slice(m);
            },
        ];
    });
    var Ch = Z.exports,
        Th = V,
        Ih = r,
        Nh = Ii,
        Mh = "toString",
        Oh = RegExp.prototype,
        jh = Oh[Mh],
        Bh = Ih(function () {
            return "/a/b" != jh.call({ source: "a", flags: "b" });
        }),
        Dh = jh.name != Mh;
    (Bh || Dh) &&
        Ch(
            RegExp.prototype,
            Mh,
            function () {
                var e = Th(this),
                    t = String(e.source),
                    n = e.flags;
                return (
                    "/" +
                    t +
                    "/" +
                    String(
                        void 0 === n && e instanceof RegExp && !("flags" in Oh)
                            ? Nh.call(e)
                            : n
                    )
                );
            },
            { unsafe: !0 }
        );
    var Hh = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        },
        Fh = function (e, t) {
            return Array.from(e.querySelectorAll(t));
        },
        zh = function (e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t);
        },
        Uh = function (e) {
            if ("string" == typeof e) {
                if ("null" === e) return null;
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
            }
            return e;
        },
        qh = function (e, t) {
            e.style.transform = t;
        },
        _h = function (e, t) {
            var n = e.matches || e.matchesSelector || e.msMatchesSelector;
            return !(!n || !n.call(e, t));
        },
        Vh = function (e, t) {
            if ("function" == typeof e.closest) return e.closest(t);
            for (; e; ) {
                if (_h(e, t)) return e;
                e = e.parentNode;
            }
            return null;
        },
        Wh = function (e, t, n) {
            for (
                var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : "",
                    r = e.querySelectorAll("." + n),
                    a = 0;
                a < r.length;
                a++
            ) {
                var o = r[a];
                if (o.parentNode === e) return o;
            }
            var s = document.createElement(t);
            return (s.className = n), (s.innerHTML = i), e.appendChild(s), s;
        },
        Kh = function (e) {
            var t = document.createElement("style");
            return (
                (t.type = "text/css"),
                e &&
                    e.length > 0 &&
                    (t.styleSheet
                        ? (t.styleSheet.cssText = e)
                        : t.appendChild(document.createTextNode(e))),
                document.head.appendChild(t),
                t
            );
        },
        Yh = function () {
            var e = {};
            for (var t in (location.search.replace(
                /[A-Z0-9]+?=([\w\.%-]*)/gi,
                function (t) {
                    e[t.split("=").shift()] = t.split("=").pop();
                }
            ),
            e)) {
                var n = e[t];
                e[t] = Uh(unescape(n));
            }
            return void 0 !== e.dependencies && delete e.dependencies, e;
        },
        Xh = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
            if (e) {
                var n,
                    i = e.style.height;
                return (
                    (e.style.height = "0px"),
                    (e.parentNode.style.height = "auto"),
                    (n = t - e.parentNode.offsetHeight),
                    (e.style.height = i + "px"),
                    e.parentNode.style.removeProperty("height"),
                    n
                );
            }
            return t;
        },
        Gh = {
            mp4: "video/mp4",
            m4a: "video/mp4",
            ogv: "video/ogg",
            mpeg: "video/mpeg",
            webm: "video/webm",
        },
        $h = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
            return Gh[e.split(".").pop()];
        },
        Jh = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
            return encodeURI(e)
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[!'()*]/g, function (e) {
                    return "%".concat(
                        e.charCodeAt(0).toString(16).toUpperCase()
                    );
                });
        },
        Qh = navigator.userAgent,
        Zh =
            /(iphone|ipod|ipad|android)/gi.test(Qh) ||
            ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
    /chrome/i.test(Qh) && /edge/i.test(Qh);
    var ef = /android/gi.test(Qh),
        tf = {};
    Object.defineProperty(tf, "__esModule", { value: !0 });
    var nf =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (e[i] = n[i]);
                }
                return e;
            },
        rf = (tf.default = (function (e) {
            if (e) {
                var t = function (e) {
                        return [].slice.call(e);
                    },
                    n = 0,
                    i = 1,
                    r = 2,
                    a = 3,
                    o = [],
                    s = null,
                    l =
                        "requestAnimationFrame" in e
                            ? function () {
                                  e.cancelAnimationFrame(s),
                                      (s = e.requestAnimationFrame(function () {
                                          return u(
                                              o.filter(function (e) {
                                                  return e.dirty && e.active;
                                              })
                                          );
                                      }));
                              }
                            : function () {},
                    c = function (e) {
                        return function () {
                            o.forEach(function (t) {
                                return (t.dirty = e);
                            }),
                                l();
                        };
                    },
                    u = function (e) {
                        e
                            .filter(function (e) {
                                return !e.styleComputed;
                            })
                            .forEach(function (e) {
                                e.styleComputed = v(e);
                            }),
                            e.filter(g).forEach(p);
                        var t = e.filter(f);
                        t.forEach(h),
                            t.forEach(function (e) {
                                p(e), d(e);
                            }),
                            t.forEach(m);
                    },
                    d = function (e) {
                        return (e.dirty = n);
                    },
                    h = function (e) {
                        (e.availableWidth = e.element.parentNode.clientWidth),
                            (e.currentWidth = e.element.scrollWidth),
                            (e.previousFontSize = e.currentFontSize),
                            (e.currentFontSize = Math.min(
                                Math.max(
                                    e.minSize,
                                    (e.availableWidth / e.currentWidth) *
                                        e.previousFontSize
                                ),
                                e.maxSize
                            )),
                            (e.whiteSpace =
                                e.multiLine && e.currentFontSize === e.minSize
                                    ? "normal"
                                    : "nowrap");
                    },
                    f = function (e) {
                        return (
                            e.dirty !== r ||
                            (e.dirty === r &&
                                e.element.parentNode.clientWidth !==
                                    e.availableWidth)
                        );
                    },
                    v = function (t) {
                        var n = e.getComputedStyle(t.element, null);
                        (t.currentFontSize = parseFloat(
                            n.getPropertyValue("font-size")
                        )),
                            (t.display = n.getPropertyValue("display")),
                            (t.whiteSpace = n.getPropertyValue("white-space"));
                    },
                    g = function (e) {
                        var t = !1;
                        return (
                            !e.preStyleTestCompleted &&
                            (/inline-/.test(e.display) ||
                                ((t = !0), (e.display = "inline-block")),
                            "nowrap" !== e.whiteSpace &&
                                ((t = !0), (e.whiteSpace = "nowrap")),
                            (e.preStyleTestCompleted = !0),
                            t)
                        );
                    },
                    p = function (e) {
                        (e.element.style.whiteSpace = e.whiteSpace),
                            (e.element.style.display = e.display),
                            (e.element.style.fontSize =
                                e.currentFontSize + "px");
                    },
                    m = function (e) {
                        e.element.dispatchEvent(
                            new CustomEvent("fit", {
                                detail: {
                                    oldValue: e.previousFontSize,
                                    newValue: e.currentFontSize,
                                    scaleFactor:
                                        e.currentFontSize / e.previousFontSize,
                                },
                            })
                        );
                    },
                    y = function (e, t) {
                        return function () {
                            (e.dirty = t), e.active && l();
                        };
                    },
                    b = function (e) {
                        return function () {
                            (o = o.filter(function (t) {
                                return t.element !== e.element;
                            })),
                                e.observeMutations && e.observer.disconnect(),
                                (e.element.style.whiteSpace =
                                    e.originalStyle.whiteSpace),
                                (e.element.style.display =
                                    e.originalStyle.display),
                                (e.element.style.fontSize =
                                    e.originalStyle.fontSize);
                        };
                    },
                    w = function (e) {
                        return function () {
                            e.active || ((e.active = !0), l());
                        };
                    },
                    E = function (e) {
                        return function () {
                            return (e.active = !1);
                        };
                    },
                    S = function (e) {
                        e.observeMutations &&
                            ((e.observer = new MutationObserver(y(e, i))),
                            e.observer.observe(e.element, e.observeMutations));
                    },
                    k = {
                        minSize: 16,
                        maxSize: 512,
                        multiLine: !0,
                        observeMutations: "MutationObserver" in e && {
                            subtree: !0,
                            childList: !0,
                            characterData: !0,
                        },
                    },
                    A = null,
                    R = function () {
                        e.clearTimeout(A),
                            (A = e.setTimeout(c(r), P.observeWindowDelay));
                    },
                    x = ["resize", "orientationchange"];
                return (
                    Object.defineProperty(P, "observeWindow", {
                        set: function (t) {
                            var n = (t ? "add" : "remove") + "EventListener";
                            x.forEach(function (t) {
                                e[n](t, R);
                            });
                        },
                    }),
                    (P.observeWindow = !0),
                    (P.observeWindowDelay = 100),
                    (P.fitAll = c(a)),
                    P
                );
            }
            function L(e, t) {
                var n = nf({}, k, t),
                    i = e.map(function (e) {
                        var t = nf({}, n, { element: e, active: !0 });
                        return (
                            (function (e) {
                                (e.originalStyle = {
                                    whiteSpace: e.element.style.whiteSpace,
                                    display: e.element.style.display,
                                    fontSize: e.element.style.fontSize,
                                }),
                                    S(e),
                                    (e.newbie = !0),
                                    (e.dirty = !0),
                                    o.push(e);
                            })(t),
                            {
                                element: e,
                                fit: y(t, a),
                                unfreeze: w(t),
                                freeze: E(t),
                                unsubscribe: b(t),
                            }
                        );
                    });
                return l(), i;
            }
            function P(e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                return "string" == typeof e
                    ? L(t(document.querySelectorAll(e)), n)
                    : L([e], n)[0];
            }
        })("undefined" == typeof window ? null : window)),
        af = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.startEmbeddedIframe =
                        this.startEmbeddedIframe.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "shouldPreload",
                        value: function (e) {
                            if (this.Reveal.isScrollView()) return !0;
                            var t = this.Reveal.getConfig().preloadIframes;
                            return (
                                "boolean" != typeof t &&
                                    (t = e.hasAttribute("data-preload")),
                                t
                            );
                        },
                    },
                    {
                        key: "load",
                        value: function (e) {
                            var t = this,
                                n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                            (e.style.display = this.Reveal.getConfig().display),
                                Fh(
                                    e,
                                    "img[data-src], video[data-src], audio[data-src], iframe[data-src]"
                                ).forEach(function (e) {
                                    ("IFRAME" !== e.tagName ||
                                        t.shouldPreload(e)) &&
                                        (e.setAttribute(
                                            "src",
                                            e.getAttribute("data-src")
                                        ),
                                        e.setAttribute("data-lazy-loaded", ""),
                                        e.removeAttribute("data-src"));
                                }),
                                Fh(e, "video, audio").forEach(function (e) {
                                    var t = 0;
                                    Fh(e, "source[data-src]").forEach(function (
                                        e
                                    ) {
                                        e.setAttribute(
                                            "src",
                                            e.getAttribute("data-src")
                                        ),
                                            e.removeAttribute("data-src"),
                                            e.setAttribute(
                                                "data-lazy-loaded",
                                                ""
                                            ),
                                            (t += 1);
                                    }),
                                        Zh &&
                                            "VIDEO" === e.tagName &&
                                            e.setAttribute("playsinline", ""),
                                        t > 0 && e.load();
                                });
                            var i = e.slideBackgroundElement;
                            if (i) {
                                i.style.display = "block";
                                var r = e.slideBackgroundContentElement,
                                    a = e.getAttribute(
                                        "data-background-iframe"
                                    );
                                if (!1 === i.hasAttribute("data-loaded")) {
                                    i.setAttribute("data-loaded", "true");
                                    var o = e.getAttribute(
                                            "data-background-image"
                                        ),
                                        s = e.getAttribute(
                                            "data-background-video"
                                        ),
                                        l = e.hasAttribute(
                                            "data-background-video-loop"
                                        ),
                                        c = e.hasAttribute(
                                            "data-background-video-muted"
                                        );
                                    if (o)
                                        /^data:/.test(o.trim())
                                            ? (r.style.backgroundImage =
                                                  "url(".concat(o.trim(), ")"))
                                            : (r.style.backgroundImage = o
                                                  .split(",")
                                                  .map(function (e) {
                                                      var t = decodeURI(
                                                          e.trim()
                                                      );
                                                      return "url(".concat(
                                                          Jh(t),
                                                          ")"
                                                      );
                                                  })
                                                  .join(","));
                                    else if (
                                        s &&
                                        !this.Reveal.isSpeakerNotes()
                                    ) {
                                        var u = document.createElement("video");
                                        l && u.setAttribute("loop", ""),
                                            c && (u.muted = !0),
                                            Zh &&
                                                ((u.muted = !0),
                                                u.setAttribute(
                                                    "playsinline",
                                                    ""
                                                )),
                                            s.split(",").forEach(function (e) {
                                                var t = $h(e);
                                                u.innerHTML += t
                                                    ? '<source src="'
                                                          .concat(e, '" type="')
                                                          .concat(t, '">')
                                                    : '<source src="'.concat(
                                                          e,
                                                          '">'
                                                      );
                                            }),
                                            r.appendChild(u);
                                    } else if (a && !0 !== n.excludeIframes) {
                                        var d =
                                            document.createElement("iframe");
                                        d.setAttribute("allowfullscreen", ""),
                                            d.setAttribute(
                                                "mozallowfullscreen",
                                                ""
                                            ),
                                            d.setAttribute(
                                                "webkitallowfullscreen",
                                                ""
                                            ),
                                            d.setAttribute("allow", "autoplay"),
                                            d.setAttribute("data-src", a),
                                            (d.style.width = "100%"),
                                            (d.style.height = "100%"),
                                            (d.style.maxHeight = "100%"),
                                            (d.style.maxWidth = "100%"),
                                            r.appendChild(d);
                                    }
                                }
                                var h = r.querySelector("iframe[data-src]");
                                h &&
                                    this.shouldPreload(i) &&
                                    !/autoplay=(1|true|yes)/gi.test(a) &&
                                    h.getAttribute("src") !== a &&
                                    h.setAttribute("src", a);
                            }
                            this.layout(e);
                        },
                    },
                    {
                        key: "layout",
                        value: function (e) {
                            var t = this;
                            Array.from(
                                e.querySelectorAll(".r-fit-text")
                            ).forEach(function (e) {
                                rf(e, {
                                    minSize: 24,
                                    maxSize: 0.8 * t.Reveal.getConfig().height,
                                    observeMutations: !1,
                                    observeWindow: !1,
                                });
                            });
                        },
                    },
                    {
                        key: "unload",
                        value: function (e) {
                            e.style.display = "none";
                            var t = this.Reveal.getSlideBackground(e);
                            t &&
                                ((t.style.display = "none"),
                                Fh(t, "iframe[src]").forEach(function (e) {
                                    e.removeAttribute("src");
                                })),
                                Fh(
                                    e,
                                    "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]"
                                ).forEach(function (e) {
                                    e.setAttribute(
                                        "data-src",
                                        e.getAttribute("src")
                                    ),
                                        e.removeAttribute("src");
                                }),
                                Fh(
                                    e,
                                    "video[data-lazy-loaded] source[src], audio source[src]"
                                ).forEach(function (e) {
                                    e.setAttribute(
                                        "data-src",
                                        e.getAttribute("src")
                                    ),
                                        e.removeAttribute("src");
                                });
                        },
                    },
                    {
                        key: "formatEmbeddedContent",
                        value: function () {
                            var e = this,
                                t = function (t, n, i) {
                                    Fh(
                                        e.Reveal.getSlidesElement(),
                                        "iframe[" + t + '*="' + n + '"]'
                                    ).forEach(function (e) {
                                        var n = e.getAttribute(t);
                                        n &&
                                            -1 === n.indexOf(i) &&
                                            e.setAttribute(
                                                t,
                                                n +
                                                    (/\?/.test(n) ? "&" : "?") +
                                                    i
                                            );
                                    });
                                };
                            t("src", "youtube.com/embed/", "enablejsapi=1"),
                                t(
                                    "data-src",
                                    "youtube.com/embed/",
                                    "enablejsapi=1"
                                ),
                                t("src", "player.vimeo.com/", "api=1"),
                                t("data-src", "player.vimeo.com/", "api=1");
                        },
                    },
                    {
                        key: "startEmbeddedContent",
                        value: function (e) {
                            var t = this;
                            e &&
                                !this.Reveal.isSpeakerNotes() &&
                                (Fh(e, 'img[src$=".gif"]').forEach(function (
                                    e
                                ) {
                                    e.setAttribute(
                                        "src",
                                        e.getAttribute("src")
                                    );
                                }),
                                Fh(e, "video, audio").forEach(function (e) {
                                    if (
                                        !Vh(e, ".fragment") ||
                                        Vh(e, ".fragment.visible")
                                    ) {
                                        var n =
                                            t.Reveal.getConfig().autoPlayMedia;
                                        if (
                                            ("boolean" != typeof n &&
                                                (n =
                                                    e.hasAttribute(
                                                        "data-autoplay"
                                                    ) ||
                                                    !!Vh(
                                                        e,
                                                        ".slide-background"
                                                    )),
                                            n && "function" == typeof e.play)
                                        )
                                            if (e.readyState > 1)
                                                t.startEmbeddedMedia({
                                                    target: e,
                                                });
                                            else if (Zh) {
                                                var i = e.play();
                                                i &&
                                                    "function" ==
                                                        typeof i.catch &&
                                                    !1 === e.controls &&
                                                    i.catch(function () {
                                                        (e.controls = !0),
                                                            e.addEventListener(
                                                                "play",
                                                                function () {
                                                                    e.controls =
                                                                        !1;
                                                                }
                                                            );
                                                    });
                                            } else
                                                e.removeEventListener(
                                                    "loadeddata",
                                                    t.startEmbeddedMedia
                                                ),
                                                    e.addEventListener(
                                                        "loadeddata",
                                                        t.startEmbeddedMedia
                                                    );
                                    }
                                }),
                                Fh(e, "iframe[src]").forEach(function (e) {
                                    (Vh(e, ".fragment") &&
                                        !Vh(e, ".fragment.visible")) ||
                                        t.startEmbeddedIframe({ target: e });
                                }),
                                Fh(e, "iframe[data-src]").forEach(function (e) {
                                    (Vh(e, ".fragment") &&
                                        !Vh(e, ".fragment.visible")) ||
                                        (e.getAttribute("src") !==
                                            e.getAttribute("data-src") &&
                                            (e.removeEventListener(
                                                "load",
                                                t.startEmbeddedIframe
                                            ),
                                            e.addEventListener(
                                                "load",
                                                t.startEmbeddedIframe
                                            ),
                                            e.setAttribute(
                                                "src",
                                                e.getAttribute("data-src")
                                            )));
                                }));
                        },
                    },
                    {
                        key: "startEmbeddedMedia",
                        value: function (e) {
                            var t = !!Vh(e.target, "html"),
                                n = !!Vh(e.target, ".present");
                            t &&
                                n &&
                                ((e.target.currentTime = 0), e.target.play()),
                                e.target.removeEventListener(
                                    "loadeddata",
                                    this.startEmbeddedMedia
                                );
                        },
                    },
                    {
                        key: "startEmbeddedIframe",
                        value: function (e) {
                            var t = e.target;
                            if (t && t.contentWindow) {
                                var n = !!Vh(e.target, "html"),
                                    i = !!Vh(e.target, ".present");
                                if (n && i) {
                                    var r =
                                        this.Reveal.getConfig().autoPlayMedia;
                                    "boolean" != typeof r &&
                                        (r =
                                            t.hasAttribute("data-autoplay") ||
                                            !!Vh(t, ".slide-background")),
                                        /youtube\.com\/embed\//.test(
                                            t.getAttribute("src")
                                        ) && r
                                            ? t.contentWindow.postMessage(
                                                  '{"event":"command","func":"playVideo","args":""}',
                                                  "*"
                                              )
                                            : /player\.vimeo\.com\//.test(
                                                  t.getAttribute("src")
                                              ) && r
                                            ? t.contentWindow.postMessage(
                                                  '{"method":"play"}',
                                                  "*"
                                              )
                                            : t.contentWindow.postMessage(
                                                  "slide:start",
                                                  "*"
                                              );
                                }
                            }
                        },
                    },
                    {
                        key: "stopEmbeddedContent",
                        value: function (e) {
                            var t = this,
                                n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                            (n = Hh({ unloadIframes: !0 }, n)),
                                e &&
                                    e.parentNode &&
                                    (Fh(e, "video, audio").forEach(function (
                                        e
                                    ) {
                                        e.hasAttribute("data-ignore") ||
                                            "function" != typeof e.pause ||
                                            (e.setAttribute(
                                                "data-paused-by-reveal",
                                                ""
                                            ),
                                            e.pause());
                                    }),
                                    Fh(e, "iframe").forEach(function (e) {
                                        e.contentWindow &&
                                            e.contentWindow.postMessage(
                                                "slide:stop",
                                                "*"
                                            ),
                                            e.removeEventListener(
                                                "load",
                                                t.startEmbeddedIframe
                                            );
                                    }),
                                    Fh(
                                        e,
                                        'iframe[src*="youtube.com/embed/"]'
                                    ).forEach(function (e) {
                                        !e.hasAttribute("data-ignore") &&
                                            e.contentWindow &&
                                            "function" ==
                                                typeof e.contentWindow
                                                    .postMessage &&
                                            e.contentWindow.postMessage(
                                                '{"event":"command","func":"pauseVideo","args":""}',
                                                "*"
                                            );
                                    }),
                                    Fh(
                                        e,
                                        'iframe[src*="player.vimeo.com/"]'
                                    ).forEach(function (e) {
                                        !e.hasAttribute("data-ignore") &&
                                            e.contentWindow &&
                                            "function" ==
                                                typeof e.contentWindow
                                                    .postMessage &&
                                            e.contentWindow.postMessage(
                                                '{"method":"pause"}',
                                                "*"
                                            );
                                    }),
                                    !0 === n.unloadIframes &&
                                        Fh(e, "iframe[data-src]").forEach(
                                            function (e) {
                                                e.setAttribute(
                                                    "src",
                                                    "about:blank"
                                                ),
                                                    e.removeAttribute("src");
                                            }
                                        ));
                        },
                    },
                ]),
                e
            );
        })(),
        of = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            (this.element = document.createElement("div")),
                                (this.element.className = "slide-number"),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                );
                        },
                    },
                    {
                        key: "configure",
                        value: function (e, t) {
                            var n = "none";
                            e.slideNumber &&
                                !this.Reveal.isPrintView() &&
                                ("all" === e.showSlideNumber ||
                                    ("speaker" === e.showSlideNumber &&
                                        this.Reveal.isSpeakerNotes())) &&
                                (n = "block"),
                                (this.element.style.display = n);
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.Reveal.getConfig().slideNumber &&
                                this.element &&
                                (this.element.innerHTML =
                                    this.getSlideNumber());
                        },
                    },
                    {
                        key: "getSlideNumber",
                        value: function () {
                            var e,
                                t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.Reveal.getCurrentSlide(),
                                n = this.Reveal.getConfig(),
                                i = "h.v";
                            if ("function" == typeof n.slideNumber)
                                e = n.slideNumber(t);
                            else {
                                "string" == typeof n.slideNumber &&
                                    (i = n.slideNumber),
                                    /c/.test(i) ||
                                        1 !==
                                            this.Reveal.getHorizontalSlides()
                                                .length ||
                                        (i = "c");
                                var r =
                                    t && "uncounted" === t.dataset.visibility
                                        ? 0
                                        : 1;
                                switch (((e = []), i)) {
                                    case "c":
                                        e.push(
                                            this.Reveal.getSlidePastCount(t) + r
                                        );
                                        break;
                                    case "c/t":
                                        e.push(
                                            this.Reveal.getSlidePastCount(t) +
                                                r,
                                            "/",
                                            this.Reveal.getTotalSlides()
                                        );
                                        break;
                                    default:
                                        var a = this.Reveal.getIndices(t);
                                        e.push(a.h + r);
                                        var o = "h/v" === i ? "/" : ".";
                                        this.Reveal.isVerticalSlide(t) &&
                                            e.push(o, a.v + 1);
                                }
                            }
                            var s = "#" + this.Reveal.location.getHash(t);
                            return this.formatNumber(e[0], e[1], e[2], s);
                        },
                    },
                    {
                        key: "formatNumber",
                        value: function (e, t, n) {
                            var i =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : "#" + this.Reveal.location.getHash();
                            return "number" != typeof n || isNaN(n)
                                ? '<a href="'
                                      .concat(
                                          i,
                                          '">\n\t\t\t\t\t<span class="slide-number-a">'
                                      )
                                      .concat(e, "</span>\n\t\t\t\t\t</a>")
                                : '<a href="'
                                      .concat(
                                          i,
                                          '">\n\t\t\t\t\t<span class="slide-number-a">'
                                      )
                                      .concat(
                                          e,
                                          '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">'
                                      )
                                      .concat(
                                          t,
                                          '</span>\n\t\t\t\t\t<span class="slide-number-b">'
                                      )
                                      .concat(n, "</span>\n\t\t\t\t\t</a>");
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.element.remove();
                        },
                    },
                ]),
                e
            );
        })(),
        sf = a,
        lf = n,
        cf = zt,
        uf = Od,
        df = q.f,
        hf = Ze.f,
        ff = yd,
        vf = Ii,
        gf = Ni,
        pf = Z.exports,
        mf = r,
        yf = Fe.enforce,
        bf = Hr,
        wf = Bn("match"),
        Ef = lf.RegExp,
        Sf = Ef.prototype,
        kf = /a/g,
        Af = /a/g,
        Rf = new Ef(kf) !== kf,
        xf = gf.UNSUPPORTED_Y;
    if (
        sf &&
        cf(
            "RegExp",
            !Rf ||
                xf ||
                mf(function () {
                    return (
                        (Af[wf] = !1),
                        Ef(kf) != kf || Ef(Af) == Af || "/a/i" != Ef(kf, "i")
                    );
                })
        )
    ) {
        for (
            var Lf = function (e, t) {
                    var n,
                        i = this instanceof Lf,
                        r = ff(e),
                        a = void 0 === t;
                    if (!i && r && e.constructor === Lf && a) return e;
                    Rf
                        ? r && !a && (e = e.source)
                        : e instanceof Lf &&
                          (a && (t = vf.call(e)), (e = e.source)),
                        xf &&
                            (n = !!t && t.indexOf("y") > -1) &&
                            (t = t.replace(/y/g, ""));
                    var o = uf(Rf ? new Ef(e, t) : Ef(e, t), i ? this : Sf, Lf);
                    xf && n && (yf(o).sticky = !0);
                    return o;
                },
                Pf = function (e) {
                    (e in Lf) ||
                        df(Lf, e, {
                            configurable: !0,
                            get: function () {
                                return Ef[e];
                            },
                            set: function (t) {
                                Ef[e] = t;
                            },
                        });
                },
                Cf = hf(Ef),
                Tf = 0;
            Cf.length > Tf;

        )
            Pf(Cf[Tf++]);
        (Sf.constructor = Lf), (Lf.prototype = Sf), pf(lf, "RegExp", Lf);
    }
    bf("RegExp");
    var If = Ll,
        Nf = q,
        Mf = Bn("unscopables"),
        Of = Array.prototype;
    null == Of[Mf] && Nf.f(Of, Mf, { configurable: !0, value: If(null) });
    var jf = function (e) {
            Of[Mf][e] = !0;
        },
        Bf = Xt,
        Df = Xn.find,
        Hf = jf,
        Ff = "find",
        zf = !0;
    Ff in [] &&
        Array(1)[Ff](function () {
            zf = !1;
        }),
        Bf(
            { target: "Array", proto: !0, forced: zf },
            {
                find: function (e) {
                    return Df(
                        this,
                        e,
                        arguments.length > 1 ? arguments[1] : void 0
                    );
                },
            }
        ),
        Hf(Ff);
    var Uf = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.onInput = this.onInput.bind(this)),
                    (this.onBlur = this.onBlur.bind(this)),
                    (this.onKeyDown = this.onKeyDown.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            (this.element = document.createElement("div")),
                                (this.element.className = "jump-to-slide"),
                                (this.jumpInput =
                                    document.createElement("input")),
                                (this.jumpInput.type = "text"),
                                (this.jumpInput.className =
                                    "jump-to-slide-input"),
                                (this.jumpInput.placeholder = "Jump to slide"),
                                this.jumpInput.addEventListener(
                                    "input",
                                    this.onInput
                                ),
                                this.jumpInput.addEventListener(
                                    "keydown",
                                    this.onKeyDown
                                ),
                                this.jumpInput.addEventListener(
                                    "blur",
                                    this.onBlur
                                ),
                                this.element.appendChild(this.jumpInput);
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            (this.indicesOnShow = this.Reveal.getIndices()),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                ),
                                this.jumpInput.focus();
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.isVisible() &&
                                (this.element.remove(),
                                (this.jumpInput.value = ""),
                                clearTimeout(this.jumpTimeout),
                                delete this.jumpTimeout);
                        },
                    },
                    {
                        key: "isVisible",
                        value: function () {
                            return !!this.element.parentNode;
                        },
                    },
                    {
                        key: "jump",
                        value: function () {
                            clearTimeout(this.jumpTimeout),
                                delete this.jumpTimeout;
                            var e = this.jumpInput.value.trim(""),
                                t = this.Reveal.location.getIndicesFromHash(e, {
                                    oneBasedIndex: !0,
                                });
                            return (
                                !t &&
                                    /\S+/i.test(e) &&
                                    e.length > 1 &&
                                    (t = this.search(e)),
                                t && "" !== e
                                    ? (this.Reveal.slide(t.h, t.v, t.f), !0)
                                    : (this.Reveal.slide(
                                          this.indicesOnShow.h,
                                          this.indicesOnShow.v,
                                          this.indicesOnShow.f
                                      ),
                                      !1)
                            );
                        },
                    },
                    {
                        key: "jumpAfter",
                        value: function (e) {
                            var t = this;
                            clearTimeout(this.jumpTimeout),
                                (this.jumpTimeout = setTimeout(function () {
                                    return t.jump();
                                }, e));
                        },
                    },
                    {
                        key: "search",
                        value: function (e) {
                            var t = new RegExp("\\b" + e.trim() + "\\b", "i"),
                                n = this.Reveal.getSlides().find(function (e) {
                                    return t.test(e.innerText);
                                });
                            return n ? this.Reveal.getIndices(n) : null;
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this.Reveal.slide(
                                this.indicesOnShow.h,
                                this.indicesOnShow.v,
                                this.indicesOnShow.f
                            ),
                                this.hide();
                        },
                    },
                    {
                        key: "confirm",
                        value: function () {
                            this.jump(), this.hide();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.jumpInput.removeEventListener(
                                "input",
                                this.onInput
                            ),
                                this.jumpInput.removeEventListener(
                                    "keydown",
                                    this.onKeyDown
                                ),
                                this.jumpInput.removeEventListener(
                                    "blur",
                                    this.onBlur
                                ),
                                this.element.remove();
                        },
                    },
                    {
                        key: "onKeyDown",
                        value: function (e) {
                            13 === e.keyCode
                                ? this.confirm()
                                : 27 === e.keyCode &&
                                  (this.cancel(), e.stopImmediatePropagation());
                        },
                    },
                    {
                        key: "onInput",
                        value: function (e) {
                            this.jumpAfter(200);
                        },
                    },
                    {
                        key: "onBlur",
                        value: function () {
                            var e = this;
                            setTimeout(function () {
                                return e.hide();
                            }, 1);
                        },
                    },
                ]),
                e
            );
        })(),
        qf = Xt,
        _f = w,
        Vf = pn,
        Wf = ct,
        Kf = at,
        Yf = b,
        Xf = ii,
        Gf = Bn,
        $f = Qn("slice"),
        Jf = Gf("species"),
        Qf = [].slice,
        Zf = Math.max;
    qf(
        { target: "Array", proto: !0, forced: !$f },
        {
            slice: function (e, t) {
                var n,
                    i,
                    r,
                    a = Yf(this),
                    o = Kf(a.length),
                    s = Wf(e, o),
                    l = Wf(void 0 === t ? o : t, o);
                if (
                    Vf(a) &&
                    ("function" != typeof (n = a.constructor) ||
                    (n !== Array && !Vf(n.prototype))
                        ? _f(n) && null === (n = n[Jf]) && (n = void 0)
                        : (n = void 0),
                    n === Array || void 0 === n)
                )
                    return Qf.call(a, s, l);
                for (
                    i = new (void 0 === n ? Array : n)(Zf(l - s, 0)), r = 0;
                    s < l;
                    s++, r++
                )
                    s in a && Xf(i, r, a[s]);
                return (i.length = r), i;
            },
        }
    );
    var ev = function (e) {
            var t = e.match(/^#([0-9a-f]{3})$/i);
            if (t && t[1])
                return (
                    (t = t[1]),
                    {
                        r: 17 * parseInt(t.charAt(0), 16),
                        g: 17 * parseInt(t.charAt(1), 16),
                        b: 17 * parseInt(t.charAt(2), 16),
                    }
                );
            var n = e.match(/^#([0-9a-f]{6})$/i);
            if (n && n[1])
                return (
                    (n = n[1]),
                    {
                        r: parseInt(n.slice(0, 2), 16),
                        g: parseInt(n.slice(2, 4), 16),
                        b: parseInt(n.slice(4, 6), 16),
                    }
                );
            var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
            if (i)
                return {
                    r: parseInt(i[1], 10),
                    g: parseInt(i[2], 10),
                    b: parseInt(i[3], 10),
                };
            var r = e.match(
                /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i
            );
            return r
                ? {
                      r: parseInt(r[1], 10),
                      g: parseInt(r[2], 10),
                      b: parseInt(r[3], 10),
                      a: parseFloat(r[4]),
                  }
                : null;
        },
        tv = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            (this.element = document.createElement("div")),
                                (this.element.className = "backgrounds"),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                );
                        },
                    },
                    {
                        key: "create",
                        value: function () {
                            var e = this;
                            (this.element.innerHTML = ""),
                                this.element.classList.add("no-transition"),
                                this.Reveal.getHorizontalSlides().forEach(
                                    function (t) {
                                        var n = e.createBackground(
                                            t,
                                            e.element
                                        );
                                        Fh(t, "section").forEach(function (t) {
                                            e.createBackground(t, n),
                                                n.classList.add("stack");
                                        });
                                    }
                                ),
                                this.Reveal.getConfig().parallaxBackgroundImage
                                    ? ((this.element.style.backgroundImage =
                                          'url("' +
                                          this.Reveal.getConfig()
                                              .parallaxBackgroundImage +
                                          '")'),
                                      (this.element.style.backgroundSize =
                                          this.Reveal.getConfig().parallaxBackgroundSize),
                                      (this.element.style.backgroundRepeat =
                                          this.Reveal.getConfig().parallaxBackgroundRepeat),
                                      (this.element.style.backgroundPosition =
                                          this.Reveal.getConfig().parallaxBackgroundPosition),
                                      setTimeout(function () {
                                          e.Reveal.getRevealElement().classList.add(
                                              "has-parallax-background"
                                          );
                                      }, 1))
                                    : ((this.element.style.backgroundImage =
                                          ""),
                                      this.Reveal.getRevealElement().classList.remove(
                                          "has-parallax-background"
                                      ));
                        },
                    },
                    {
                        key: "createBackground",
                        value: function (e, t) {
                            var n = document.createElement("div");
                            n.className =
                                "slide-background " +
                                e.className.replace(/present|past|future/, "");
                            var i = document.createElement("div");
                            return (
                                (i.className = "slide-background-content"),
                                n.appendChild(i),
                                t.appendChild(n),
                                (e.slideBackgroundElement = n),
                                (e.slideBackgroundContentElement = i),
                                this.sync(e),
                                n
                            );
                        },
                    },
                    {
                        key: "sync",
                        value: function (e) {
                            var t = e.slideBackgroundElement,
                                n = e.slideBackgroundContentElement,
                                i = {
                                    background:
                                        e.getAttribute("data-background"),
                                    backgroundSize: e.getAttribute(
                                        "data-background-size"
                                    ),
                                    backgroundImage: e.getAttribute(
                                        "data-background-image"
                                    ),
                                    backgroundVideo: e.getAttribute(
                                        "data-background-video"
                                    ),
                                    backgroundIframe: e.getAttribute(
                                        "data-background-iframe"
                                    ),
                                    backgroundColor: e.getAttribute(
                                        "data-background-color"
                                    ),
                                    backgroundGradient: e.getAttribute(
                                        "data-background-gradient"
                                    ),
                                    backgroundRepeat: e.getAttribute(
                                        "data-background-repeat"
                                    ),
                                    backgroundPosition: e.getAttribute(
                                        "data-background-position"
                                    ),
                                    backgroundTransition: e.getAttribute(
                                        "data-background-transition"
                                    ),
                                    backgroundOpacity: e.getAttribute(
                                        "data-background-opacity"
                                    ),
                                },
                                r = e.hasAttribute("data-preload");
                            e.classList.remove("has-dark-background"),
                                e.classList.remove("has-light-background"),
                                t.removeAttribute("data-loaded"),
                                t.removeAttribute("data-background-hash"),
                                t.removeAttribute("data-background-size"),
                                t.removeAttribute("data-background-transition"),
                                (t.style.backgroundColor = ""),
                                (n.style.backgroundSize = ""),
                                (n.style.backgroundRepeat = ""),
                                (n.style.backgroundPosition = ""),
                                (n.style.backgroundImage = ""),
                                (n.style.opacity = ""),
                                (n.innerHTML = ""),
                                i.background &&
                                    (/^(http|file|\/\/)/gi.test(i.background) ||
                                    /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(
                                        i.background
                                    )
                                        ? e.setAttribute(
                                              "data-background-image",
                                              i.background
                                          )
                                        : (t.style.background = i.background)),
                                (i.background ||
                                    i.backgroundColor ||
                                    i.backgroundGradient ||
                                    i.backgroundImage ||
                                    i.backgroundVideo ||
                                    i.backgroundIframe) &&
                                    t.setAttribute(
                                        "data-background-hash",
                                        i.background +
                                            i.backgroundSize +
                                            i.backgroundImage +
                                            i.backgroundVideo +
                                            i.backgroundIframe +
                                            i.backgroundColor +
                                            i.backgroundGradient +
                                            i.backgroundRepeat +
                                            i.backgroundPosition +
                                            i.backgroundTransition +
                                            i.backgroundOpacity
                                    ),
                                i.backgroundSize &&
                                    t.setAttribute(
                                        "data-background-size",
                                        i.backgroundSize
                                    ),
                                i.backgroundColor &&
                                    (t.style.backgroundColor =
                                        i.backgroundColor),
                                i.backgroundGradient &&
                                    (t.style.backgroundImage =
                                        i.backgroundGradient),
                                i.backgroundTransition &&
                                    t.setAttribute(
                                        "data-background-transition",
                                        i.backgroundTransition
                                    ),
                                r && t.setAttribute("data-preload", ""),
                                i.backgroundSize &&
                                    (n.style.backgroundSize = i.backgroundSize),
                                i.backgroundRepeat &&
                                    (n.style.backgroundRepeat =
                                        i.backgroundRepeat),
                                i.backgroundPosition &&
                                    (n.style.backgroundPosition =
                                        i.backgroundPosition),
                                i.backgroundOpacity &&
                                    (n.style.opacity = i.backgroundOpacity);
                            var a = this.getContrastClass(e);
                            "string" == typeof a && e.classList.add(a);
                        },
                    },
                    {
                        key: "getContrastClass",
                        value: function (e) {
                            var t,
                                n = e.slideBackgroundElement,
                                i = e.getAttribute("data-background-color");
                            if (!i || !ev(i)) {
                                var r = window.getComputedStyle(n);
                                r &&
                                    r.backgroundColor &&
                                    (i = r.backgroundColor);
                            }
                            if (i) {
                                var a = ev(i);
                                if (a && 0 !== a.a)
                                    return (
                                        "string" == typeof (t = i) &&
                                            (t = ev(t)),
                                        (t
                                            ? (299 * t.r +
                                                  587 * t.g +
                                                  114 * t.b) /
                                              1e3
                                            : null) < 128
                                            ? "has-dark-background"
                                            : "has-light-background"
                                    );
                            }
                            return null;
                        },
                    },
                    {
                        key: "bubbleSlideContrastClassToElement",
                        value: function (e, t) {
                            [
                                "has-light-background",
                                "has-dark-background",
                            ].forEach(function (n) {
                                e.classList.contains(n)
                                    ? t.classList.add(n)
                                    : t.classList.remove(n);
                            }, this);
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var e = this,
                                t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                n = this.Reveal.getCurrentSlide(),
                                i = this.Reveal.getIndices(),
                                r = null,
                                a = this.Reveal.getConfig().rtl
                                    ? "future"
                                    : "past",
                                o = this.Reveal.getConfig().rtl
                                    ? "past"
                                    : "future";
                            if (
                                (Array.from(this.element.childNodes).forEach(
                                    function (e, n) {
                                        e.classList.remove(
                                            "past",
                                            "present",
                                            "future"
                                        ),
                                            n < i.h
                                                ? e.classList.add(a)
                                                : n > i.h
                                                ? e.classList.add(o)
                                                : (e.classList.add("present"),
                                                  (r = e)),
                                            (t || n === i.h) &&
                                                Fh(
                                                    e,
                                                    ".slide-background"
                                                ).forEach(function (e, t) {
                                                    e.classList.remove(
                                                        "past",
                                                        "present",
                                                        "future"
                                                    ),
                                                        t < i.v
                                                            ? e.classList.add(
                                                                  "past"
                                                              )
                                                            : t > i.v
                                                            ? e.classList.add(
                                                                  "future"
                                                              )
                                                            : (e.classList.add(
                                                                  "present"
                                                              ),
                                                              n === i.h &&
                                                                  (r = e));
                                                });
                                    }
                                ),
                                this.previousBackground &&
                                    this.Reveal.slideContent.stopEmbeddedContent(
                                        this.previousBackground,
                                        {
                                            unloadIframes:
                                                !this.Reveal.slideContent.shouldPreload(
                                                    this.previousBackground
                                                ),
                                        }
                                    ),
                                r)
                            ) {
                                this.Reveal.slideContent.startEmbeddedContent(
                                    r
                                );
                                var s = r.querySelector(
                                    ".slide-background-content"
                                );
                                if (s) {
                                    var l = s.style.backgroundImage || "";
                                    /\.gif/i.test(l) &&
                                        ((s.style.backgroundImage = ""),
                                        window.getComputedStyle(s).opacity,
                                        (s.style.backgroundImage = l));
                                }
                                var c = this.previousBackground
                                        ? this.previousBackground.getAttribute(
                                              "data-background-hash"
                                          )
                                        : null,
                                    u = r.getAttribute("data-background-hash");
                                u &&
                                    u === c &&
                                    r !== this.previousBackground &&
                                    this.element.classList.add("no-transition"),
                                    (this.previousBackground = r);
                            }
                            n &&
                                this.bubbleSlideContrastClassToElement(
                                    n,
                                    this.Reveal.getRevealElement()
                                ),
                                setTimeout(function () {
                                    e.element.classList.remove("no-transition");
                                }, 1);
                        },
                    },
                    {
                        key: "updateParallax",
                        value: function () {
                            var e = this.Reveal.getIndices();
                            if (
                                this.Reveal.getConfig().parallaxBackgroundImage
                            ) {
                                var t,
                                    n,
                                    i = this.Reveal.getHorizontalSlides(),
                                    r = this.Reveal.getVerticalSlides(),
                                    a =
                                        this.element.style.backgroundSize.split(
                                            " "
                                        );
                                1 === a.length
                                    ? (t = n = parseInt(a[0], 10))
                                    : ((t = parseInt(a[0], 10)),
                                      (n = parseInt(a[1], 10)));
                                var o,
                                    s = this.element.offsetWidth,
                                    l = i.length;
                                o =
                                    ("number" ==
                                    typeof this.Reveal.getConfig()
                                        .parallaxBackgroundHorizontal
                                        ? this.Reveal.getConfig()
                                              .parallaxBackgroundHorizontal
                                        : l > 1
                                        ? (t - s) / (l - 1)
                                        : 0) *
                                    e.h *
                                    -1;
                                var c,
                                    u,
                                    d = this.element.offsetHeight,
                                    h = r.length;
                                (c =
                                    "number" ==
                                    typeof this.Reveal.getConfig()
                                        .parallaxBackgroundVertical
                                        ? this.Reveal.getConfig()
                                              .parallaxBackgroundVertical
                                        : (n - d) / (h - 1)),
                                    (u = h > 0 ? c * e.v : 0),
                                    (this.element.style.backgroundPosition =
                                        o + "px " + -u + "px");
                            }
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.element.remove();
                        },
                    },
                ]),
                e
            );
        })(),
        nv = A,
        iv = Jt;
    Xt(
        {
            target: "Object",
            stat: !0,
            forced: r(function () {
                iv(1);
            }),
        },
        {
            keys: function (e) {
                return iv(nv(e));
            },
        }
    );
    var rv = Xn.filter;
    Xt(
        { target: "Array", proto: !0, forced: !Qn("filter") },
        {
            filter: function (e) {
                return rv(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                );
            },
        }
    );
    var av = hn,
        ov = A,
        sv = g,
        lv = at,
        cv = function (e) {
            return function (t, n, i, r) {
                av(n);
                var a = ov(t),
                    o = sv(a),
                    s = lv(a.length),
                    l = e ? s - 1 : 0,
                    c = e ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (l in o) {
                            (r = o[l]), (l += c);
                            break;
                        }
                        if (((l += c), e ? l < 0 : s <= l))
                            throw TypeError(
                                "Reduce of empty array with no initial value"
                            );
                    }
                for (; e ? l >= 0 : s > l; l += c)
                    l in o && (r = n(r, o[l], l, a));
                return r;
            };
        },
        uv = { left: cv(!1), right: cv(!0) }.left,
        dv = Sn,
        hv = ma;
    Xt(
        {
            target: "Array",
            proto: !0,
            forced: !Ss("reduce") || (!hv && dv > 79 && dv < 83),
        },
        {
            reduce: function (e) {
                return uv(
                    this,
                    e,
                    arguments.length,
                    arguments.length > 1 ? arguments[1] : void 0
                );
            },
        }
    );
    var fv = ".slides section",
        vv = ".slides>section",
        gv = ".slides>section.present>section",
        pv =
            /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
        mv =
            /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,
        yv = 0,
        bv = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            return (
                xi(e, [
                    {
                        key: "run",
                        value: function (e, t) {
                            var n = this;
                            this.reset();
                            var i = this.Reveal.getSlides(),
                                r = i.indexOf(t),
                                a = i.indexOf(e);
                            if (
                                e.hasAttribute("data-auto-animate") &&
                                t.hasAttribute("data-auto-animate") &&
                                e.getAttribute("data-auto-animate-id") ===
                                    t.getAttribute("data-auto-animate-id") &&
                                !(r > a ? t : e).hasAttribute(
                                    "data-auto-animate-restart"
                                )
                            ) {
                                this.autoAnimateStyleSheet =
                                    this.autoAnimateStyleSheet || Kh();
                                var o = this.getAutoAnimateOptions(t);
                                (e.dataset.autoAnimate = "pending"),
                                    (t.dataset.autoAnimate = "pending"),
                                    (o.slideDirection =
                                        r > a ? "forward" : "backward");
                                var s = "none" === e.style.display;
                                s &&
                                    (e.style.display =
                                        this.Reveal.getConfig().display);
                                var l = this.getAutoAnimatableElements(
                                    e,
                                    t
                                ).map(function (e) {
                                    return n.autoAnimateElements(
                                        e.from,
                                        e.to,
                                        e.options || {},
                                        o,
                                        yv++
                                    );
                                });
                                if (
                                    (s && (e.style.display = "none"),
                                    "false" !==
                                        t.dataset.autoAnimateUnmatched &&
                                        !0 ===
                                            this.Reveal.getConfig()
                                                .autoAnimateUnmatched)
                                ) {
                                    var c = 0.8 * o.duration,
                                        u = 0.2 * o.duration;
                                    this.getUnmatchedAutoAnimateElements(
                                        t
                                    ).forEach(function (e) {
                                        var t = n.getAutoAnimateOptions(e, o),
                                            i = "unmatched";
                                        (t.duration === o.duration &&
                                            t.delay === o.delay) ||
                                            ((i = "unmatched-" + yv++),
                                            l.push(
                                                '[data-auto-animate="running"] [data-auto-animate-target="'
                                                    .concat(
                                                        i,
                                                        '"] { transition: opacity '
                                                    )
                                                    .concat(
                                                        t.duration,
                                                        "s ease "
                                                    )
                                                    .concat(t.delay, "s; }")
                                            )),
                                            (e.dataset.autoAnimateTarget = i);
                                    }, this),
                                        l.push(
                                            '[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '
                                                .concat(c, "s ease ")
                                                .concat(u, "s; }")
                                        );
                                }
                                (this.autoAnimateStyleSheet.innerHTML =
                                    l.join("")),
                                    requestAnimationFrame(function () {
                                        n.autoAnimateStyleSheet &&
                                            (getComputedStyle(
                                                n.autoAnimateStyleSheet
                                            ).fontWeight,
                                            (t.dataset.autoAnimate =
                                                "running"));
                                    }),
                                    this.Reveal.dispatchEvent({
                                        type: "autoanimate",
                                        data: {
                                            fromSlide: e,
                                            toSlide: t,
                                            sheet: this.autoAnimateStyleSheet,
                                        },
                                    });
                            }
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            Fh(
                                this.Reveal.getRevealElement(),
                                '[data-auto-animate]:not([data-auto-animate=""])'
                            ).forEach(function (e) {
                                e.dataset.autoAnimate = "";
                            }),
                                Fh(
                                    this.Reveal.getRevealElement(),
                                    "[data-auto-animate-target]"
                                ).forEach(function (e) {
                                    delete e.dataset.autoAnimateTarget;
                                }),
                                this.autoAnimateStyleSheet &&
                                    this.autoAnimateStyleSheet.parentNode &&
                                    (this.autoAnimateStyleSheet.parentNode.removeChild(
                                        this.autoAnimateStyleSheet
                                    ),
                                    (this.autoAnimateStyleSheet = null));
                        },
                    },
                    {
                        key: "autoAnimateElements",
                        value: function (e, t, n, i, r) {
                            (e.dataset.autoAnimateTarget = ""),
                                (t.dataset.autoAnimateTarget = r);
                            var a = this.getAutoAnimateOptions(t, i);
                            void 0 !== n.delay && (a.delay = n.delay),
                                void 0 !== n.duration &&
                                    (a.duration = n.duration),
                                void 0 !== n.easing && (a.easing = n.easing);
                            var o = this.getAutoAnimatableProperties(
                                    "from",
                                    e,
                                    n
                                ),
                                s = this.getAutoAnimatableProperties(
                                    "to",
                                    t,
                                    n
                                );
                            t.classList.contains("fragment") &&
                                (delete s.styles.opacity,
                                e.classList.contains("fragment") &&
                                    (e.className.match(mv) || [""])[0] ===
                                        (t.className.match(mv) || [""])[0] &&
                                    "forward" === i.slideDirection &&
                                    t.classList.add("visible", "disabled"));
                            if (!1 !== n.translate || !1 !== n.scale) {
                                var l = this.Reveal.getScale(),
                                    c = {
                                        x: (o.x - s.x) / l,
                                        y: (o.y - s.y) / l,
                                        scaleX: o.width / s.width,
                                        scaleY: o.height / s.height,
                                    };
                                (c.x = Math.round(1e3 * c.x) / 1e3),
                                    (c.y = Math.round(1e3 * c.y) / 1e3),
                                    (c.scaleX =
                                        Math.round(1e3 * c.scaleX) / 1e3),
                                    (c.scaleX =
                                        Math.round(1e3 * c.scaleX) / 1e3);
                                var u =
                                        !1 !== n.translate &&
                                        (0 !== c.x || 0 !== c.y),
                                    d =
                                        !1 !== n.scale &&
                                        (0 !== c.scaleX || 0 !== c.scaleY);
                                if (u || d) {
                                    var h = [];
                                    u &&
                                        h.push(
                                            "translate("
                                                .concat(c.x, "px, ")
                                                .concat(c.y, "px)")
                                        ),
                                        d &&
                                            h.push(
                                                "scale("
                                                    .concat(c.scaleX, ", ")
                                                    .concat(c.scaleY, ")")
                                            ),
                                        (o.styles.transform = h.join(" ")),
                                        (o.styles["transform-origin"] =
                                            "top left"),
                                        (s.styles.transform = "none");
                                }
                            }
                            for (var f in s.styles) {
                                var v = s.styles[f],
                                    g = o.styles[f];
                                v === g
                                    ? delete s.styles[f]
                                    : (!0 === v.explicitValue &&
                                          (s.styles[f] = v.value),
                                      !0 === g.explicitValue &&
                                          (o.styles[f] = g.value));
                            }
                            var p = "",
                                m = Object.keys(s.styles);
                            if (m.length > 0) {
                                (o.styles.transition = "none"),
                                    (s.styles.transition = "all "
                                        .concat(a.duration, "s ")
                                        .concat(a.easing, " ")
                                        .concat(a.delay, "s")),
                                    (s.styles["transition-property"] =
                                        m.join(", ")),
                                    (s.styles["will-change"] = m.join(", "));
                                var y = Object.keys(o.styles)
                                        .map(function (e) {
                                            return (
                                                e +
                                                ": " +
                                                o.styles[e] +
                                                " !important;"
                                            );
                                        })
                                        .join(""),
                                    b = Object.keys(s.styles)
                                        .map(function (e) {
                                            return (
                                                e +
                                                ": " +
                                                s.styles[e] +
                                                " !important;"
                                            );
                                        })
                                        .join("");
                                p =
                                    '[data-auto-animate-target="' +
                                    r +
                                    '"] {' +
                                    y +
                                    '}[data-auto-animate="running"] [data-auto-animate-target="' +
                                    r +
                                    '"] {' +
                                    b +
                                    "}";
                            }
                            return p;
                        },
                    },
                    {
                        key: "getAutoAnimateOptions",
                        value: function (e, t) {
                            var n = {
                                easing: this.Reveal.getConfig()
                                    .autoAnimateEasing,
                                duration:
                                    this.Reveal.getConfig().autoAnimateDuration,
                                delay: 0,
                            };
                            if (((n = Hh(n, t)), e.parentNode)) {
                                var i = Vh(
                                    e.parentNode,
                                    "[data-auto-animate-target]"
                                );
                                i && (n = this.getAutoAnimateOptions(i, n));
                            }
                            return (
                                e.dataset.autoAnimateEasing &&
                                    (n.easing = e.dataset.autoAnimateEasing),
                                e.dataset.autoAnimateDuration &&
                                    (n.duration = parseFloat(
                                        e.dataset.autoAnimateDuration
                                    )),
                                e.dataset.autoAnimateDelay &&
                                    (n.delay = parseFloat(
                                        e.dataset.autoAnimateDelay
                                    )),
                                n
                            );
                        },
                    },
                    {
                        key: "getAutoAnimatableProperties",
                        value: function (e, t, n) {
                            var i = this.Reveal.getConfig(),
                                r = { styles: [] };
                            if (!1 !== n.translate || !1 !== n.scale) {
                                var a;
                                if ("function" == typeof n.measure)
                                    a = n.measure(t);
                                else if (i.center)
                                    a = t.getBoundingClientRect();
                                else {
                                    var o = this.Reveal.getScale();
                                    a = {
                                        x: t.offsetLeft * o,
                                        y: t.offsetTop * o,
                                        width: t.offsetWidth * o,
                                        height: t.offsetHeight * o,
                                    };
                                }
                                (r.x = a.x),
                                    (r.y = a.y),
                                    (r.width = a.width),
                                    (r.height = a.height);
                            }
                            var s = getComputedStyle(t);
                            return (
                                (n.styles || i.autoAnimateStyles).forEach(
                                    function (t) {
                                        var n;
                                        "string" == typeof t &&
                                            (t = { property: t }),
                                            void 0 !== t.from && "from" === e
                                                ? (n = {
                                                      value: t.from,
                                                      explicitValue: !0,
                                                  })
                                                : void 0 !== t.to && "to" === e
                                                ? (n = {
                                                      value: t.to,
                                                      explicitValue: !0,
                                                  })
                                                : ("line-height" ===
                                                      t.property &&
                                                      (n =
                                                          parseFloat(
                                                              s["line-height"]
                                                          ) /
                                                          parseFloat(
                                                              s["font-size"]
                                                          )),
                                                  isNaN(n) &&
                                                      (n = s[t.property])),
                                            "" !== n &&
                                                (r.styles[t.property] = n);
                                    }
                                ),
                                r
                            );
                        },
                    },
                    {
                        key: "getAutoAnimatableElements",
                        value: function (e, t) {
                            var n = (
                                    "function" ==
                                    typeof this.Reveal.getConfig()
                                        .autoAnimateMatcher
                                        ? this.Reveal.getConfig()
                                              .autoAnimateMatcher
                                        : this.getAutoAnimatePairs
                                ).call(this, e, t),
                                i = [];
                            return n.filter(function (e, t) {
                                if (-1 === i.indexOf(e.to))
                                    return i.push(e.to), !0;
                            });
                        },
                    },
                    {
                        key: "getAutoAnimatePairs",
                        value: function (e, t) {
                            var n = this,
                                i = [],
                                r = "h1, h2, h3, h4, h5, h6, p, li";
                            return (
                                this.findAutoAnimateMatches(
                                    i,
                                    e,
                                    t,
                                    "[data-id]",
                                    function (e) {
                                        return (
                                            e.nodeName +
                                            ":::" +
                                            e.getAttribute("data-id")
                                        );
                                    }
                                ),
                                this.findAutoAnimateMatches(
                                    i,
                                    e,
                                    t,
                                    r,
                                    function (e) {
                                        return e.nodeName + ":::" + e.innerText;
                                    }
                                ),
                                this.findAutoAnimateMatches(
                                    i,
                                    e,
                                    t,
                                    "img, video, iframe",
                                    function (e) {
                                        return (
                                            e.nodeName +
                                            ":::" +
                                            (e.getAttribute("src") ||
                                                e.getAttribute("data-src"))
                                        );
                                    }
                                ),
                                this.findAutoAnimateMatches(
                                    i,
                                    e,
                                    t,
                                    "pre",
                                    function (e) {
                                        return e.nodeName + ":::" + e.innerText;
                                    }
                                ),
                                i.forEach(function (e) {
                                    _h(e.from, r)
                                        ? (e.options = { scale: !1 })
                                        : _h(e.from, "pre") &&
                                          ((e.options = {
                                              scale: !1,
                                              styles: ["width", "height"],
                                          }),
                                          n.findAutoAnimateMatches(
                                              i,
                                              e.from,
                                              e.to,
                                              ".hljs .hljs-ln-code",
                                              function (e) {
                                                  return e.textContent;
                                              },
                                              {
                                                  scale: !1,
                                                  styles: [],
                                                  measure:
                                                      n.getLocalBoundingBox.bind(
                                                          n
                                                      ),
                                              }
                                          ),
                                          n.findAutoAnimateMatches(
                                              i,
                                              e.from,
                                              e.to,
                                              ".hljs .hljs-ln-numbers[data-line-number]",
                                              function (e) {
                                                  return e.getAttribute(
                                                      "data-line-number"
                                                  );
                                              },
                                              {
                                                  scale: !1,
                                                  styles: ["width"],
                                                  measure:
                                                      n.getLocalBoundingBox.bind(
                                                          n
                                                      ),
                                              }
                                          ));
                                }, this),
                                i
                            );
                        },
                    },
                    {
                        key: "getLocalBoundingBox",
                        value: function (e) {
                            var t = this.Reveal.getScale();
                            return {
                                x: Math.round(e.offsetLeft * t * 100) / 100,
                                y: Math.round(e.offsetTop * t * 100) / 100,
                                width:
                                    Math.round(e.offsetWidth * t * 100) / 100,
                                height:
                                    Math.round(e.offsetHeight * t * 100) / 100,
                            };
                        },
                    },
                    {
                        key: "findAutoAnimateMatches",
                        value: function (e, t, n, i, r, a) {
                            var o = {},
                                s = {};
                            [].slice
                                .call(t.querySelectorAll(i))
                                .forEach(function (e, t) {
                                    var n = r(e);
                                    "string" == typeof n &&
                                        n.length &&
                                        ((o[n] = o[n] || []), o[n].push(e));
                                }),
                                [].slice
                                    .call(n.querySelectorAll(i))
                                    .forEach(function (t, n) {
                                        var i,
                                            l = r(t);
                                        if (
                                            ((s[l] = s[l] || []),
                                            s[l].push(t),
                                            o[l])
                                        ) {
                                            var c = s[l].length - 1,
                                                u = o[l].length - 1;
                                            o[l][c]
                                                ? ((i = o[l][c]),
                                                  (o[l][c] = null))
                                                : o[l][u] &&
                                                  ((i = o[l][u]),
                                                  (o[l][u] = null));
                                        }
                                        i &&
                                            e.push({
                                                from: i,
                                                to: t,
                                                options: a,
                                            });
                                    });
                        },
                    },
                    {
                        key: "getUnmatchedAutoAnimateElements",
                        value: function (e) {
                            var t = this;
                            return [].slice
                                .call(e.children)
                                .reduce(function (e, n) {
                                    var i = n.querySelector(
                                        "[data-auto-animate-target]"
                                    );
                                    return (
                                        n.hasAttribute(
                                            "data-auto-animate-target"
                                        ) ||
                                            i ||
                                            e.push(n),
                                        n.querySelector(
                                            "[data-auto-animate-target]"
                                        ) &&
                                            (e = e.concat(
                                                t.getUnmatchedAutoAnimateElements(
                                                    n
                                                )
                                            )),
                                        e
                                    );
                                }, []);
                        },
                    },
                ]),
                e
            );
        })(),
        wv = Xt,
        Ev = hn,
        Sv = A,
        kv = r,
        Av = Ss,
        Rv = [],
        xv = Rv.sort,
        Lv = kv(function () {
            Rv.sort(void 0);
        }),
        Pv = kv(function () {
            Rv.sort(null);
        }),
        Cv = Av("sort");
    wv(
        { target: "Array", proto: !0, forced: Lv || !Pv || !Cv },
        {
            sort: function (e) {
                return void 0 === e
                    ? xv.call(Sv(this))
                    : xv.call(Sv(this), Ev(e));
            },
        }
    );
    var Tv = pn,
        Iv = at,
        Nv = vn,
        Mv = function (e, t, n, i, r, a, o, s) {
            for (var l, c = r, u = 0, d = !!o && Nv(o, s, 3); u < i; ) {
                if (u in n) {
                    if (((l = d ? d(n[u], u, t) : n[u]), a > 0 && Tv(l)))
                        c = Mv(e, t, l, Iv(l.length), c, a - 1) - 1;
                    else {
                        if (c >= 9007199254740991)
                            throw TypeError(
                                "Exceed the acceptable array length"
                            );
                        e[c] = l;
                    }
                    c++;
                }
                u++;
            }
            return c;
        },
        Ov = Mv,
        jv = A,
        Bv = at,
        Dv = hn,
        Hv = zn;
    Xt(
        { target: "Array", proto: !0 },
        {
            flatMap: function (e) {
                var t,
                    n = jv(this),
                    i = Bv(n.length);
                return (
                    Dv(e),
                    ((t = Hv(n, 0)).length = Ov(
                        t,
                        n,
                        n,
                        i,
                        0,
                        1,
                        e,
                        arguments.length > 1 ? arguments[1] : void 0
                    )),
                    t
                );
            },
        }
    ),
        jf("flatMap");
    var Fv = (function () {
        function e(t) {
            Ai(this, e),
                (this.Reveal = t),
                (this.active = !1),
                (this.activatedCallbacks = []),
                (this.onScroll = this.onScroll.bind(this));
        }
        return (
            xi(e, [
                {
                    key: "activate",
                    value: function () {
                        var e = this;
                        if (!this.active) {
                            var t = this.Reveal.getState();
                            (this.active = !0),
                                (this.slideHTMLBeforeActivation =
                                    this.Reveal.getSlidesElement().innerHTML);
                            var n,
                                i = Fh(this.Reveal.getRevealElement(), vv);
                            this.viewportElement.classList.add(
                                "loading-scroll-mode",
                                "reveal-scroll"
                            );
                            var r = window.getComputedStyle(
                                this.viewportElement
                            );
                            r && r.background && (n = r.background);
                            var a,
                                o = [],
                                s = i[0].parentNode,
                                l = function (t, i, r) {
                                    var s;
                                    if (
                                        a &&
                                        e.Reveal.shouldAutoAnimateBetween(a, t)
                                    )
                                        ((s =
                                            document.createElement(
                                                "div"
                                            )).className =
                                            "scroll-page-content scroll-auto-animate-page"),
                                            (s.style.display = "none"),
                                            a
                                                .closest(".scroll-page-content")
                                                .parentNode.appendChild(s);
                                    else {
                                        var l = document.createElement("div");
                                        (l.className = "scroll-page"),
                                            o.push(l),
                                            n && (l.style.background = n);
                                        var c = document.createElement("div");
                                        (c.className = "scroll-page-sticky"),
                                            l.appendChild(c),
                                            ((s =
                                                document.createElement(
                                                    "div"
                                                )).className =
                                                "scroll-page-content"),
                                            c.appendChild(s);
                                    }
                                    s.appendChild(t),
                                        t.classList.remove("past", "future"),
                                        t.setAttribute("data-index-h", i),
                                        t.setAttribute("data-index-v", r),
                                        t.slideBackgroundElement &&
                                            (t.slideBackgroundElement.remove(
                                                "past",
                                                "future"
                                            ),
                                            s.insertBefore(
                                                t.slideBackgroundElement,
                                                t
                                            )),
                                        (a = t);
                                };
                            i.forEach(function (t, n) {
                                e.Reveal.isVerticalStack(t)
                                    ? t
                                          .querySelectorAll("section")
                                          .forEach(function (e, t) {
                                              l(e, n, t);
                                          })
                                    : l(t, n, 0);
                            }, this),
                                this.createProgressBar(),
                                Fh(
                                    this.Reveal.getRevealElement(),
                                    ".stack"
                                ).forEach(function (e) {
                                    return e.remove();
                                }),
                                o.forEach(function (e) {
                                    return s.appendChild(e);
                                }),
                                this.Reveal.slideContent.layout(
                                    this.Reveal.getSlidesElement()
                                ),
                                this.Reveal.layout(),
                                this.Reveal.setState(t),
                                this.activatedCallbacks.forEach(function (e) {
                                    return e();
                                }),
                                (this.activatedCallbacks = []),
                                this.restoreScrollPosition(),
                                this.viewportElement.classList.remove(
                                    "loading-scroll-mode"
                                ),
                                this.viewportElement.addEventListener(
                                    "scroll",
                                    this.onScroll,
                                    { passive: !0 }
                                );
                        }
                    },
                },
                {
                    key: "deactivate",
                    value: function () {
                        if (this.active) {
                            var e = this.Reveal.getState();
                            (this.active = !1),
                                this.viewportElement.removeEventListener(
                                    "scroll",
                                    this.onScroll
                                ),
                                this.viewportElement.classList.remove(
                                    "reveal-scroll"
                                ),
                                this.removeProgressBar(),
                                (this.Reveal.getSlidesElement().innerHTML =
                                    this.slideHTMLBeforeActivation),
                                this.Reveal.sync(),
                                this.Reveal.setState(e),
                                (this.slideHTMLBeforeActivation = null);
                        }
                    },
                },
                {
                    key: "toggle",
                    value: function (e) {
                        "boolean" == typeof e
                            ? e
                                ? this.activate()
                                : this.deactivate()
                            : this.isActive()
                            ? this.deactivate()
                            : this.activate();
                    },
                },
                {
                    key: "isActive",
                    value: function () {
                        return this.active;
                    },
                },
                {
                    key: "createProgressBar",
                    value: function () {
                        var e = this;
                        (this.progressBar = document.createElement("div")),
                            (this.progressBar.className = "scrollbar"),
                            (this.progressBarInner =
                                document.createElement("div")),
                            (this.progressBarInner.className =
                                "scrollbar-inner"),
                            this.progressBar.appendChild(this.progressBarInner),
                            (this.progressBarPlayhead =
                                document.createElement("div")),
                            (this.progressBarPlayhead.className =
                                "scrollbar-playhead"),
                            this.progressBarInner.appendChild(
                                this.progressBarPlayhead
                            ),
                            this.viewportElement.insertBefore(
                                this.progressBar,
                                this.viewportElement.firstChild
                            );
                        var t = function (t) {
                                var n =
                                    (t.clientY -
                                        e.progressBarInner.getBoundingClientRect()
                                            .top) /
                                    e.progressBarHeight;
                                (n = Math.max(Math.min(n, 1), 0)),
                                    (e.viewportElement.scrollTop =
                                        n *
                                        (e.viewportElement.scrollHeight -
                                            e.viewportElement.offsetHeight));
                            },
                            n = function n(i) {
                                (e.draggingProgressBar = !1),
                                    e.showProgressBar(),
                                    document.removeEventListener(
                                        "mousemove",
                                        t
                                    ),
                                    document.removeEventListener("mouseup", n);
                            };
                        this.progressBarInner.addEventListener(
                            "mousedown",
                            function (i) {
                                i.preventDefault(),
                                    (e.draggingProgressBar = !0),
                                    document.addEventListener("mousemove", t),
                                    document.addEventListener("mouseup", n),
                                    t(i);
                            }
                        );
                    },
                },
                {
                    key: "removeProgressBar",
                    value: function () {
                        this.progressBar &&
                            (this.progressBar.remove(),
                            (this.progressBar = null));
                    },
                },
                {
                    key: "layout",
                    value: function () {
                        this.isActive() &&
                            (this.syncPages(), this.syncScrollPosition());
                    },
                },
                {
                    key: "syncPages",
                    value: function () {
                        var e = this,
                            t = this.Reveal.getConfig(),
                            n = this.Reveal.getComputedSlideSize(
                                window.innerWidth,
                                window.innerHeight
                            ),
                            i = this.Reveal.getScale(),
                            r = "compact" === t.scrollLayout,
                            a = this.viewportElement.offsetHeight,
                            o = n.height * i,
                            s = r ? o : a,
                            l = r ? o : a;
                        this.viewportElement.style.setProperty(
                            "--page-height",
                            s + "px"
                        ),
                            (this.viewportElement.style.scrollSnapType =
                                "string" == typeof t.scrollSnap
                                    ? "y ".concat(t.scrollSnap)
                                    : ""),
                            (this.slideTriggers = []);
                        var c = Array.from(
                            this.Reveal.getRevealElement().querySelectorAll(
                                ".scroll-page"
                            )
                        );
                        (this.pages = c.map(function (i) {
                            var o = e.createPage({
                                pageElement: i,
                                slideElement: i.querySelector("section"),
                                stickyElement: i.querySelector(
                                    ".scroll-page-sticky"
                                ),
                                contentElement: i.querySelector(
                                    ".scroll-page-content"
                                ),
                                backgroundElement:
                                    i.querySelector(".slide-background"),
                                autoAnimateElements: i.querySelectorAll(
                                    ".scroll-auto-animate-page"
                                ),
                                autoAnimatePages: [],
                            });
                            o.pageElement.style.setProperty(
                                "--slide-height",
                                !0 === t.center ? "auto" : n.height + "px"
                            ),
                                e.slideTriggers.push({
                                    page: o,
                                    activate: function () {
                                        return e.activatePage(o);
                                    },
                                    deactivate: function () {
                                        return e.deactivatePage(o);
                                    },
                                }),
                                e.createFragmentTriggersForPage(o),
                                o.autoAnimateElements.length > 0 &&
                                    e.createAutoAnimateTriggersForPage(o);
                            var c = Math.max(o.scrollTriggers.length - 1, 0);
                            (c += o.autoAnimatePages.reduce(function (e, t) {
                                return (
                                    e + Math.max(t.scrollTriggers.length - 1, 0)
                                );
                            }, o.autoAnimatePages.length)),
                                o.pageElement
                                    .querySelectorAll(".scroll-snap-point")
                                    .forEach(function (e) {
                                        return e.remove();
                                    });
                            for (var u = 0; u < c + 1; u++) {
                                var d = document.createElement("div");
                                (d.className = "scroll-snap-point"),
                                    (d.style.height = l + "px"),
                                    (d.style.scrollSnapAlign = r
                                        ? "center"
                                        : "start"),
                                    o.pageElement.appendChild(d),
                                    0 === u && (d.style.marginTop = -l + "px");
                            }
                            return (
                                r && o.scrollTriggers.length > 0
                                    ? ((o.pageHeight = a),
                                      o.pageElement.style.setProperty(
                                          "--page-height",
                                          a + "px"
                                      ))
                                    : ((o.pageHeight = s),
                                      o.pageElement.style.removeProperty(
                                          "--page-height"
                                      )),
                                (o.scrollPadding = l * c),
                                (o.totalHeight =
                                    o.pageHeight + o.scrollPadding),
                                o.pageElement.style.setProperty(
                                    "--page-scroll-padding",
                                    o.scrollPadding + "px"
                                ),
                                c > 0
                                    ? ((o.stickyElement.style.position =
                                          "sticky"),
                                      (o.stickyElement.style.top =
                                          Math.max((a - o.pageHeight) / 2, 0) +
                                          "px"))
                                    : ((o.stickyElement.style.position =
                                          "relative"),
                                      (o.pageElement.style.scrollSnapAlign =
                                          o.pageHeight < a
                                              ? "center"
                                              : "start")),
                                o
                            );
                        })),
                            this.setTriggerRanges(),
                            this.viewportElement.setAttribute(
                                "data-scrollbar",
                                t.scrollProgress
                            ),
                            t.scrollProgress && this.totalScrollTriggerCount > 1
                                ? (this.progressBar || this.createProgressBar(),
                                  this.syncProgressBar())
                                : this.removeProgressBar();
                    },
                },
                {
                    key: "setTriggerRanges",
                    value: function () {
                        var e = this;
                        this.totalScrollTriggerCount =
                            this.slideTriggers.reduce(function (e, t) {
                                return (
                                    e +
                                    Math.max(t.page.scrollTriggers.length, 1)
                                );
                            }, 0);
                        var t = 0;
                        this.slideTriggers.forEach(function (n, i) {
                            n.range = [
                                t,
                                t +
                                    Math.max(n.page.scrollTriggers.length, 1) /
                                        e.totalScrollTriggerCount,
                            ];
                            var r =
                                (n.range[1] - n.range[0]) /
                                n.page.scrollTriggers.length;
                            n.page.scrollTriggers.forEach(function (e, n) {
                                e.range = [t + n * r, t + (n + 1) * r];
                            }),
                                (t = n.range[1]);
                        });
                    },
                },
                {
                    key: "createFragmentTriggersForPage",
                    value: function (e, t) {
                        var n = this;
                        t = t || e.slideElement;
                        var i,
                            r = this.Reveal.fragments.sort(
                                t.querySelectorAll(".fragment"),
                                !0
                            );
                        r.length &&
                            ((e.fragments = this.Reveal.fragments.sort(
                                t.querySelectorAll(".fragment:not(.disabled)")
                            )),
                            (i = e.scrollTriggers).push.apply(
                                i,
                                [
                                    {
                                        activate: function () {
                                            n.Reveal.fragments.update(
                                                -1,
                                                e.fragments,
                                                t
                                            );
                                        },
                                    },
                                ].concat(
                                    Pi(
                                        r.map(function (i, r) {
                                            return {
                                                activate: function () {
                                                    n.Reveal.fragments.update(
                                                        r,
                                                        e.fragments,
                                                        t
                                                    );
                                                },
                                            };
                                        })
                                    )
                                )
                            ));
                        return e.scrollTriggers.length;
                    },
                },
                {
                    key: "createAutoAnimateTriggersForPage",
                    value: function (e) {
                        var t,
                            n = this;
                        e.autoAnimateElements.length > 0 &&
                            (t = this.slideTriggers).push.apply(
                                t,
                                Pi(
                                    Array.from(e.autoAnimateElements).map(
                                        function (t, i) {
                                            var r = n.createPage({
                                                slideElement:
                                                    t.querySelector("section"),
                                                contentElement: t,
                                                backgroundElement:
                                                    t.querySelector(
                                                        ".slide-background"
                                                    ),
                                            });
                                            return (
                                                n.createFragmentTriggersForPage(
                                                    r,
                                                    r.slideElement
                                                ),
                                                e.autoAnimatePages.push(r),
                                                {
                                                    page: r,
                                                    activate: function () {
                                                        return n.activatePage(
                                                            r
                                                        );
                                                    },
                                                    deactivate: function () {
                                                        return n.deactivatePage(
                                                            r
                                                        );
                                                    },
                                                }
                                            );
                                        }
                                    )
                                )
                            );
                    },
                },
                {
                    key: "createPage",
                    value: function (e) {
                        return (
                            (e.scrollTriggers = []),
                            (e.indexh = parseInt(
                                e.slideElement.getAttribute("data-index-h"),
                                10
                            )),
                            (e.indexv = parseInt(
                                e.slideElement.getAttribute("data-index-v"),
                                10
                            )),
                            e
                        );
                    },
                },
                {
                    key: "syncProgressBar",
                    value: function () {
                        var e = this;
                        this.progressBarInner
                            .querySelectorAll(".scrollbar-slide")
                            .forEach(function (e) {
                                return e.remove();
                            });
                        var t = this.viewportElement.scrollHeight,
                            n = this.viewportElement.offsetHeight,
                            i = n / t;
                        (this.progressBarHeight =
                            this.progressBarInner.offsetHeight),
                            (this.playheadHeight = Math.max(
                                i * this.progressBarHeight,
                                8
                            )),
                            (this.progressBarScrollableHeight =
                                this.progressBarHeight - this.playheadHeight);
                        var r = (n / t) * this.progressBarHeight,
                            a = Math.min(r / 8, 4);
                        (this.progressBarPlayhead.style.height =
                            this.playheadHeight - a + "px"),
                            r > 6
                                ? this.slideTriggers.forEach(function (t) {
                                      var n = t.page;
                                      (n.progressBarSlide =
                                          document.createElement("div")),
                                          (n.progressBarSlide.className =
                                              "scrollbar-slide"),
                                          (n.progressBarSlide.style.top =
                                              t.range[0] * e.progressBarHeight +
                                              "px"),
                                          (n.progressBarSlide.style.height =
                                              (t.range[1] - t.range[0]) *
                                                  e.progressBarHeight -
                                              a +
                                              "px"),
                                          n.progressBarSlide.classList.toggle(
                                              "has-triggers",
                                              n.scrollTriggers.length > 0
                                          ),
                                          e.progressBarInner.appendChild(
                                              n.progressBarSlide
                                          ),
                                          (n.scrollTriggerElements =
                                              n.scrollTriggers.map(function (
                                                  i,
                                                  r
                                              ) {
                                                  var o =
                                                      document.createElement(
                                                          "div"
                                                      );
                                                  return (
                                                      (o.className =
                                                          "scrollbar-trigger"),
                                                      (o.style.top =
                                                          (i.range[0] -
                                                              t.range[0]) *
                                                              e.progressBarHeight +
                                                          "px"),
                                                      (o.style.height =
                                                          (i.range[1] -
                                                              i.range[0]) *
                                                              e.progressBarHeight -
                                                          a +
                                                          "px"),
                                                      n.progressBarSlide.appendChild(
                                                          o
                                                      ),
                                                      0 === r &&
                                                          (o.style.display =
                                                              "none"),
                                                      o
                                                  );
                                              }));
                                  })
                                : this.pages.forEach(function (e) {
                                      return (e.progressBarSlide = null);
                                  });
                    },
                },
                {
                    key: "syncScrollPosition",
                    value: function () {
                        var e,
                            t = this,
                            n = this.viewportElement.offsetHeight,
                            i = n / this.viewportElement.scrollHeight,
                            r = this.viewportElement.scrollTop,
                            a = this.viewportElement.scrollHeight - n,
                            o = Math.max(Math.min(r / a, 1), 0),
                            s = Math.max(
                                Math.min(
                                    (r + n / 2) /
                                        this.viewportElement.scrollHeight,
                                    1
                                ),
                                0
                            );
                        this.slideTriggers.forEach(function (n) {
                            var r = n.page;
                            o >= n.range[0] - 2 * i &&
                            o <= n.range[1] + 2 * i &&
                            !r.loaded
                                ? ((r.loaded = !0),
                                  t.Reveal.slideContent.load(r.slideElement))
                                : r.loaded &&
                                  ((r.loaded = !1),
                                  t.Reveal.slideContent.unload(r.slideElement)),
                                o >= n.range[0] && o <= n.range[1]
                                    ? (t.activateTrigger(n), (e = n.page))
                                    : n.active && t.deactivateTrigger(n);
                        }),
                            e &&
                                e.scrollTriggers.forEach(function (e) {
                                    s >= e.range[0] && s <= e.range[1]
                                        ? t.activateTrigger(e)
                                        : e.active && t.deactivateTrigger(e);
                                }),
                            this.setProgressBarValue(
                                r / (this.viewportElement.scrollHeight - n)
                            );
                    },
                },
                {
                    key: "setProgressBarValue",
                    value: function (e) {
                        this.progressBar &&
                            ((this.progressBarPlayhead.style.transform =
                                "translateY(".concat(
                                    e * this.progressBarScrollableHeight,
                                    "px)"
                                )),
                            this.getAllPages()
                                .filter(function (e) {
                                    return e.progressBarSlide;
                                })
                                .forEach(function (e) {
                                    e.progressBarSlide.classList.toggle(
                                        "active",
                                        !0 === e.active
                                    ),
                                        e.scrollTriggers.forEach(function (
                                            t,
                                            n
                                        ) {
                                            e.scrollTriggerElements[
                                                n
                                            ].classList.toggle(
                                                "active",
                                                !0 === e.active &&
                                                    !0 === t.active
                                            );
                                        });
                                }),
                            this.showProgressBar());
                    },
                },
                {
                    key: "showProgressBar",
                    value: function () {
                        var e = this;
                        this.progressBar.classList.add("visible"),
                            clearTimeout(this.hideProgressBarTimeout),
                            "auto" !== this.Reveal.getConfig().scrollProgress ||
                                this.draggingProgressBar ||
                                (this.hideProgressBarTimeout = setTimeout(
                                    function () {
                                        e.progressBar &&
                                            e.progressBar.classList.remove(
                                                "visible"
                                            );
                                    },
                                    500
                                ));
                    },
                },
                {
                    key: "scrollToSlide",
                    value: function (e) {
                        var t = this;
                        if (this.active) {
                            var n = this.getScrollTriggerBySlide(e);
                            n &&
                                (this.viewportElement.scrollTop =
                                    n.range[0] *
                                    (this.viewportElement.scrollHeight -
                                        this.viewportElement.offsetHeight));
                        } else
                            this.activatedCallbacks.push(function () {
                                return t.scrollToSlide(e);
                            });
                    },
                },
                {
                    key: "storeScrollPosition",
                    value: function () {
                        var e = this;
                        clearTimeout(this.storeScrollPositionTimeout),
                            (this.storeScrollPositionTimeout = setTimeout(
                                function () {
                                    sessionStorage.setItem(
                                        "reveal-scroll-top",
                                        e.viewportElement.scrollTop
                                    ),
                                        sessionStorage.setItem(
                                            "reveal-scroll-origin",
                                            location.origin + location.pathname
                                        ),
                                        (e.storeScrollPositionTimeout = null);
                                },
                                50
                            ));
                    },
                },
                {
                    key: "restoreScrollPosition",
                    value: function () {
                        var e = sessionStorage.getItem("reveal-scroll-top"),
                            t = sessionStorage.getItem("reveal-scroll-origin");
                        e &&
                            t === location.origin + location.pathname &&
                            (this.viewportElement.scrollTop = parseInt(e, 10));
                    },
                },
                {
                    key: "activatePage",
                    value: function (e) {
                        if (!e.active) {
                            e.active = !0;
                            var t = e.slideElement,
                                n = e.backgroundElement,
                                i = e.contentElement,
                                r = e.indexh,
                                a = e.indexv;
                            (i.style.display = "block"),
                                t.classList.add("present"),
                                n && n.classList.add("present"),
                                this.Reveal.setCurrentScrollPage(t, r, a),
                                this.Reveal.backgrounds.bubbleSlideContrastClassToElement(
                                    t,
                                    this.viewportElement
                                ),
                                Array.from(
                                    i.parentNode.querySelectorAll(
                                        ".scroll-page-content"
                                    )
                                ).forEach(function (e) {
                                    e !== i && (e.style.display = "none");
                                });
                        }
                    },
                },
                {
                    key: "deactivatePage",
                    value: function (e) {
                        e.active &&
                            ((e.active = !1),
                            e.slideElement.classList.remove("present"),
                            e.backgroundElement.classList.remove("present"));
                    },
                },
                {
                    key: "activateTrigger",
                    value: function (e) {
                        e.active || ((e.active = !0), e.activate());
                    },
                },
                {
                    key: "deactivateTrigger",
                    value: function (e) {
                        e.active &&
                            ((e.active = !1), e.deactivate && e.deactivate());
                    },
                },
                {
                    key: "getSlideByIndices",
                    value: function (e, t) {
                        var n = this.getAllPages().find(function (n) {
                            return n.indexh === e && n.indexv === t;
                        });
                        return n ? n.slideElement : null;
                    },
                },
                {
                    key: "getScrollTriggerBySlide",
                    value: function (e) {
                        return this.slideTriggers.find(function (t) {
                            return t.page.slideElement === e;
                        });
                    },
                },
                {
                    key: "getAllPages",
                    value: function () {
                        return this.pages.flatMap(function (e) {
                            return [e].concat(Pi(e.autoAnimatePages || []));
                        });
                    },
                },
                {
                    key: "onScroll",
                    value: function () {
                        this.syncScrollPosition(), this.storeScrollPosition();
                    },
                },
                {
                    key: "viewportElement",
                    get: function () {
                        return this.Reveal.getViewportElement();
                    },
                },
            ]),
            e
        );
    })();
    !(function (e) {
        var t = (function (e) {
            var t,
                n = Object.prototype,
                i = n.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                o = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return (
                    Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    }),
                    e[t]
                );
            }
            try {
                l({}, "");
            } catch (e) {
                l = function (e, t, n) {
                    return (e[t] = n);
                };
            }
            function c(e, t, n, i) {
                var r = t && t.prototype instanceof p ? t : p,
                    a = Object.create(r.prototype),
                    o = new P(i || []);
                return (
                    (a._invoke = (function (e, t, n) {
                        var i = d;
                        return function (r, a) {
                            if (i === f)
                                throw new Error("Generator is already running");
                            if (i === v) {
                                if ("throw" === r) throw a;
                                return T();
                            }
                            for (n.method = r, n.arg = a; ; ) {
                                var o = n.delegate;
                                if (o) {
                                    var s = R(o, n);
                                    if (s) {
                                        if (s === g) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (i === d) throw ((i = v), n.arg);
                                    n.dispatchException(n.arg);
                                } else
                                    "return" === n.method &&
                                        n.abrupt("return", n.arg);
                                i = f;
                                var l = u(e, t, n);
                                if ("normal" === l.type) {
                                    if (((i = n.done ? v : h), l.arg === g))
                                        continue;
                                    return { value: l.arg, done: n.done };
                                }
                                "throw" === l.type &&
                                    ((i = v),
                                    (n.method = "throw"),
                                    (n.arg = l.arg));
                            }
                        };
                    })(e, n, o)),
                    a
                );
            }
            function u(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            e.wrap = c;
            var d = "suspendedStart",
                h = "suspendedYield",
                f = "executing",
                v = "completed",
                g = {};
            function p() {}
            function m() {}
            function y() {}
            var b = {};
            b[a] = function () {
                return this;
            };
            var w = Object.getPrototypeOf,
                E = w && w(w(C([])));
            E && E !== n && i.call(E, a) && (b = E);
            var S = (y.prototype = p.prototype = Object.create(b));
            function k(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    l(e, t, function (e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function A(e, t) {
                function n(r, a, o, s) {
                    var l = u(e[r], e, a);
                    if ("throw" !== l.type) {
                        var c = l.arg,
                            d = c.value;
                        return d && "object" == typeof d && i.call(d, "__await")
                            ? t.resolve(d.__await).then(
                                  function (e) {
                                      n("next", e, o, s);
                                  },
                                  function (e) {
                                      n("throw", e, o, s);
                                  }
                              )
                            : t.resolve(d).then(
                                  function (e) {
                                      (c.value = e), o(c);
                                  },
                                  function (e) {
                                      return n("throw", e, o, s);
                                  }
                              );
                    }
                    s(l.arg);
                }
                var r;
                this._invoke = function (e, i) {
                    function a() {
                        return new t(function (t, r) {
                            n(e, i, t, r);
                        });
                    }
                    return (r = r ? r.then(a, a) : a());
                };
            }
            function R(e, n) {
                var i = e.iterator[n.method];
                if (i === t) {
                    if (((n.delegate = null), "throw" === n.method)) {
                        if (
                            e.iterator.return &&
                            ((n.method = "return"),
                            (n.arg = t),
                            R(e, n),
                            "throw" === n.method)
                        )
                            return g;
                        (n.method = "throw"),
                            (n.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return g;
                }
                var r = u(i, e.iterator, n.arg);
                if ("throw" === r.type)
                    return (
                        (n.method = "throw"),
                        (n.arg = r.arg),
                        (n.delegate = null),
                        g
                    );
                var a = r.arg;
                return a
                    ? a.done
                        ? ((n[e.resultName] = a.value),
                          (n.next = e.nextLoc),
                          "return" !== n.method &&
                              ((n.method = "next"), (n.arg = t)),
                          (n.delegate = null),
                          g)
                        : a
                    : ((n.method = "throw"),
                      (n.arg = new TypeError(
                          "iterator result is not an object"
                      )),
                      (n.delegate = null),
                      g);
            }
            function x(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
            }
            function L(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function P(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                    e.forEach(x, this),
                    this.reset(!0);
            }
            function C(e) {
                if (e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            o = function n() {
                                for (; ++r < e.length; )
                                    if (i.call(e, r))
                                        return (
                                            (n.value = e[r]), (n.done = !1), n
                                        );
                                return (n.value = t), (n.done = !0), n;
                            };
                        return (o.next = o);
                    }
                }
                return { next: T };
            }
            function T() {
                return { value: t, done: !0 };
            }
            return (
                (m.prototype = S.constructor = y),
                (y.constructor = m),
                (m.displayName = l(y, s, "GeneratorFunction")),
                (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                        !!t &&
                        (t === m ||
                            "GeneratorFunction" === (t.displayName || t.name))
                    );
                }),
                (e.mark = function (e) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, y)
                            : ((e.__proto__ = y), l(e, s, "GeneratorFunction")),
                        (e.prototype = Object.create(S)),
                        e
                    );
                }),
                (e.awrap = function (e) {
                    return { __await: e };
                }),
                k(A.prototype),
                (A.prototype[o] = function () {
                    return this;
                }),
                (e.AsyncIterator = A),
                (e.async = function (t, n, i, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new A(c(t, n, i, r), a);
                    return e.isGeneratorFunction(n)
                        ? o
                        : o.next().then(function (e) {
                              return e.done ? e.value : o.next();
                          });
                }),
                k(S),
                l(S, s, "Generator"),
                (S[a] = function () {
                    return this;
                }),
                (S.toString = function () {
                    return "[object Generator]";
                }),
                (e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                        t.reverse(),
                        function n() {
                            for (; t.length; ) {
                                var i = t.pop();
                                if (i in e)
                                    return (n.value = i), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = C),
                (P.prototype = {
                    constructor: P,
                    reset: function (e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = t),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = t),
                            this.tryEntries.forEach(L),
                            !e)
                        )
                            for (var n in this)
                                "t" === n.charAt(0) &&
                                    i.call(this, n) &&
                                    !isNaN(+n.slice(1)) &&
                                    (this[n] = t);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var n = this;
                        function r(i, r) {
                            return (
                                (s.type = "throw"),
                                (s.arg = e),
                                (n.next = i),
                                r && ((n.method = "next"), (n.arg = t)),
                                !!r
                            );
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                s = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var l = i.call(o, "catchLoc"),
                                    c = i.call(o, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < o.catchLoc)
                                        return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return r(o.finallyLoc);
                                } else if (l) {
                                    if (this.prev < o.catchLoc)
                                        return r(o.catchLoc, !0);
                                } else {
                                    if (!c)
                                        throw new Error(
                                            "try statement without catch or finally"
                                        );
                                    if (this.prev < o.finallyLoc)
                                        return r(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (
                                r.tryLoc <= this.prev &&
                                i.call(r, "finallyLoc") &&
                                this.prev < r.finallyLoc
                            ) {
                                var a = r;
                                break;
                            }
                        }
                        a &&
                            ("break" === e || "continue" === e) &&
                            a.tryLoc <= t &&
                            t <= a.finallyLoc &&
                            (a = null);
                        var o = a ? a.completion : {};
                        return (
                            (o.type = e),
                            (o.arg = t),
                            a
                                ? ((this.method = "next"),
                                  (this.next = a.finallyLoc),
                                  g)
                                : this.complete(o)
                        );
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg),
                                  (this.method = "return"),
                                  (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            g
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return (
                                    this.complete(n.completion, n.afterLoc),
                                    L(n),
                                    g
                                );
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    L(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, n, i) {
                        return (
                            (this.delegate = {
                                iterator: C(e),
                                resultName: n,
                                nextLoc: i,
                            }),
                            "next" === this.method && (this.arg = t),
                            g
                        );
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = t;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t);
        }
    })({ exports: {} });
    var zv = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            var t, n;
            return (
                xi(e, [
                    {
                        key: "activate",
                        value:
                            ((t = regeneratorRuntime.mark(function e() {
                                var t, n, i, r, a, o, s, l, c, u, d, h, f, v, g;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (t =
                                                            this.Reveal.getConfig()),
                                                        (n = Fh(
                                                            this.Reveal.getRevealElement(),
                                                            fv
                                                        )),
                                                        (i =
                                                            t.slideNumber &&
                                                            /all|print/i.test(
                                                                t.showSlideNumber
                                                            )),
                                                        (r =
                                                            this.Reveal.getComputedSlideSize(
                                                                window.innerWidth,
                                                                window.innerHeight
                                                            )),
                                                        (a = Math.floor(
                                                            r.width *
                                                                (1 + t.margin)
                                                        )),
                                                        (o = Math.floor(
                                                            r.height *
                                                                (1 + t.margin)
                                                        )),
                                                        (s = r.width),
                                                        (l = r.height),
                                                        (e.next = 8),
                                                        new Promise(
                                                            requestAnimationFrame
                                                        )
                                                    );
                                                case 8:
                                                    return (
                                                        Kh(
                                                            "@page{size:" +
                                                                a +
                                                                "px " +
                                                                o +
                                                                "px; margin: 0px;}"
                                                        ),
                                                        Kh(
                                                            ".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " +
                                                                s +
                                                                "px; max-height:" +
                                                                l +
                                                                "px}"
                                                        ),
                                                        document.documentElement.classList.add(
                                                            "reveal-print",
                                                            "print-pdf"
                                                        ),
                                                        (document.body.style.width =
                                                            a + "px"),
                                                        (document.body.style.height =
                                                            o + "px"),
                                                        (c =
                                                            this.Reveal.getViewportElement()) &&
                                                            (d =
                                                                window.getComputedStyle(
                                                                    c
                                                                )) &&
                                                            d.background &&
                                                            (u = d.background),
                                                        (e.next = 17),
                                                        new Promise(
                                                            requestAnimationFrame
                                                        )
                                                    );
                                                case 17:
                                                    return (
                                                        this.Reveal.layoutSlideContents(
                                                            s,
                                                            l
                                                        ),
                                                        (e.next = 20),
                                                        new Promise(
                                                            requestAnimationFrame
                                                        )
                                                    );
                                                case 20:
                                                    return (
                                                        (h = n.map(function (
                                                            e
                                                        ) {
                                                            return e.scrollHeight;
                                                        })),
                                                        (f = []),
                                                        (v = n[0].parentNode),
                                                        (g = 1),
                                                        n.forEach(function (
                                                            e,
                                                            n
                                                        ) {
                                                            if (
                                                                !1 ===
                                                                e.classList.contains(
                                                                    "stack"
                                                                )
                                                            ) {
                                                                var r =
                                                                        (a -
                                                                            s) /
                                                                        2,
                                                                    c =
                                                                        (o -
                                                                            l) /
                                                                        2,
                                                                    d = h[n],
                                                                    v =
                                                                        Math.max(
                                                                            Math.ceil(
                                                                                d /
                                                                                    o
                                                                            ),
                                                                            1
                                                                        );
                                                                ((1 ===
                                                                    (v =
                                                                        Math.min(
                                                                            v,
                                                                            t.pdfMaxPagesPerSlide
                                                                        )) &&
                                                                    t.center) ||
                                                                    e.classList.contains(
                                                                        "center"
                                                                    )) &&
                                                                    (c =
                                                                        Math.max(
                                                                            (o -
                                                                                d) /
                                                                                2,
                                                                            0
                                                                        ));
                                                                var p =
                                                                    document.createElement(
                                                                        "div"
                                                                    );
                                                                if (
                                                                    (f.push(p),
                                                                    (p.className =
                                                                        "pdf-page"),
                                                                    (p.style.height =
                                                                        (o +
                                                                            t.pdfPageHeightOffset) *
                                                                            v +
                                                                        "px"),
                                                                    u &&
                                                                        (p.style.background =
                                                                            u),
                                                                    p.appendChild(
                                                                        e
                                                                    ),
                                                                    (e.style.left =
                                                                        r +
                                                                        "px"),
                                                                    (e.style.top =
                                                                        c +
                                                                        "px"),
                                                                    (e.style.width =
                                                                        s +
                                                                        "px"),
                                                                    this.Reveal.slideContent.layout(
                                                                        e
                                                                    ),
                                                                    e.slideBackgroundElement &&
                                                                        p.insertBefore(
                                                                            e.slideBackgroundElement,
                                                                            e
                                                                        ),
                                                                    t.showNotes)
                                                                ) {
                                                                    var m =
                                                                        this.Reveal.getSlideNotes(
                                                                            e
                                                                        );
                                                                    if (m) {
                                                                        var y =
                                                                                "string" ==
                                                                                typeof t.showNotes
                                                                                    ? t.showNotes
                                                                                    : "inline",
                                                                            b =
                                                                                document.createElement(
                                                                                    "div"
                                                                                );
                                                                        b.classList.add(
                                                                            "speaker-notes"
                                                                        ),
                                                                            b.classList.add(
                                                                                "speaker-notes-pdf"
                                                                            ),
                                                                            b.setAttribute(
                                                                                "data-layout",
                                                                                y
                                                                            ),
                                                                            (b.innerHTML =
                                                                                m),
                                                                            "separate-page" ===
                                                                            y
                                                                                ? f.push(
                                                                                      b
                                                                                  )
                                                                                : ((b.style.left =
                                                                                      "8px"),
                                                                                  (b.style.bottom =
                                                                                      "8px"),
                                                                                  (b.style.width =
                                                                                      a -
                                                                                      16 +
                                                                                      "px"),
                                                                                  p.appendChild(
                                                                                      b
                                                                                  ));
                                                                    }
                                                                }
                                                                if (i) {
                                                                    var w =
                                                                        document.createElement(
                                                                            "div"
                                                                        );
                                                                    w.classList.add(
                                                                        "slide-number"
                                                                    ),
                                                                        w.classList.add(
                                                                            "slide-number-pdf"
                                                                        ),
                                                                        (w.innerHTML =
                                                                            g++),
                                                                        p.appendChild(
                                                                            w
                                                                        );
                                                                }
                                                                if (
                                                                    t.pdfSeparateFragments
                                                                ) {
                                                                    var E,
                                                                        S =
                                                                            this.Reveal.fragments.sort(
                                                                                p.querySelectorAll(
                                                                                    ".fragment"
                                                                                ),
                                                                                !0
                                                                            );
                                                                    S.forEach(
                                                                        function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            E &&
                                                                                E.forEach(
                                                                                    function (
                                                                                        e
                                                                                    ) {
                                                                                        e.classList.remove(
                                                                                            "current-fragment"
                                                                                        );
                                                                                    }
                                                                                ),
                                                                                e.forEach(
                                                                                    function (
                                                                                        e
                                                                                    ) {
                                                                                        e.classList.add(
                                                                                            "visible",
                                                                                            "current-fragment"
                                                                                        );
                                                                                    },
                                                                                    this
                                                                                );
                                                                            var n =
                                                                                p.cloneNode(
                                                                                    !0
                                                                                );
                                                                            if (
                                                                                i
                                                                            ) {
                                                                                var r =
                                                                                    t +
                                                                                    1;
                                                                                n.querySelector(
                                                                                    ".slide-number-pdf"
                                                                                ).innerHTML +=
                                                                                    "." +
                                                                                    r;
                                                                            }
                                                                            f.push(
                                                                                n
                                                                            ),
                                                                                (E =
                                                                                    e);
                                                                        },
                                                                        this
                                                                    ),
                                                                        S.forEach(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                e.forEach(
                                                                                    function (
                                                                                        e
                                                                                    ) {
                                                                                        e.classList.remove(
                                                                                            "visible",
                                                                                            "current-fragment"
                                                                                        );
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                } else
                                                                    Fh(
                                                                        p,
                                                                        ".fragment:not(.fade-out)"
                                                                    ).forEach(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            e.classList.add(
                                                                                "visible"
                                                                            );
                                                                        }
                                                                    );
                                                            }
                                                        },
                                                        this),
                                                        (e.next = 27),
                                                        new Promise(
                                                            requestAnimationFrame
                                                        )
                                                    );
                                                case 27:
                                                    f.forEach(function (e) {
                                                        return v.appendChild(e);
                                                    }),
                                                        this.Reveal.slideContent.layout(
                                                            this.Reveal.getSlidesElement()
                                                        ),
                                                        this.Reveal.dispatchEvent(
                                                            {
                                                                type: "pdf-ready",
                                                            }
                                                        );
                                                case 30:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })),
                            (n = function () {
                                var e = this,
                                    n = arguments;
                                return new Promise(function (i, r) {
                                    var a = t.apply(e, n);
                                    function o(e) {
                                        ki(a, i, r, o, s, "next", e);
                                    }
                                    function s(e) {
                                        ki(a, i, r, o, s, "throw", e);
                                    }
                                    o(void 0);
                                });
                            }),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "isActive",
                        value: function () {
                            return "print" === this.Reveal.getConfig().view;
                        },
                    },
                ]),
                e
            );
        })(),
        Uv = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            return (
                xi(e, [
                    {
                        key: "configure",
                        value: function (e, t) {
                            !1 === e.fragments
                                ? this.disable()
                                : !1 === t.fragments && this.enable();
                        },
                    },
                    {
                        key: "disable",
                        value: function () {
                            Fh(
                                this.Reveal.getSlidesElement(),
                                ".fragment"
                            ).forEach(function (e) {
                                e.classList.add("visible"),
                                    e.classList.remove("current-fragment");
                            });
                        },
                    },
                    {
                        key: "enable",
                        value: function () {
                            Fh(
                                this.Reveal.getSlidesElement(),
                                ".fragment"
                            ).forEach(function (e) {
                                e.classList.remove("visible"),
                                    e.classList.remove("current-fragment");
                            });
                        },
                    },
                    {
                        key: "availableRoutes",
                        value: function () {
                            var e = this.Reveal.getCurrentSlide();
                            if (e && this.Reveal.getConfig().fragments) {
                                var t = e.querySelectorAll(
                                        ".fragment:not(.disabled)"
                                    ),
                                    n = e.querySelectorAll(
                                        ".fragment:not(.disabled):not(.visible)"
                                    );
                                return {
                                    prev: t.length - n.length > 0,
                                    next: !!n.length,
                                };
                            }
                            return { prev: !1, next: !1 };
                        },
                    },
                    {
                        key: "sort",
                        value: function (e) {
                            var t =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                            e = Array.from(e);
                            var n = [],
                                i = [],
                                r = [];
                            e.forEach(function (e) {
                                if (e.hasAttribute("data-fragment-index")) {
                                    var t = parseInt(
                                        e.getAttribute("data-fragment-index"),
                                        10
                                    );
                                    n[t] || (n[t] = []), n[t].push(e);
                                } else i.push([e]);
                            }),
                                (n = n.concat(i));
                            var a = 0;
                            return (
                                n.forEach(function (e) {
                                    e.forEach(function (e) {
                                        r.push(e),
                                            e.setAttribute(
                                                "data-fragment-index",
                                                a
                                            );
                                    }),
                                        a++;
                                }),
                                !0 === t ? n : r
                            );
                        },
                    },
                    {
                        key: "sortAll",
                        value: function () {
                            var e = this;
                            this.Reveal.getHorizontalSlides().forEach(function (
                                t
                            ) {
                                var n = Fh(t, "section");
                                n.forEach(function (t, n) {
                                    e.sort(t.querySelectorAll(".fragment"));
                                }, e),
                                    0 === n.length &&
                                        e.sort(t.querySelectorAll(".fragment"));
                            });
                        },
                    },
                    {
                        key: "update",
                        value: function (e, t) {
                            var n = this,
                                i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : this.Reveal.getCurrentSlide(),
                                r = { shown: [], hidden: [] };
                            if (
                                i &&
                                this.Reveal.getConfig().fragments &&
                                (t =
                                    t ||
                                    this.sort(i.querySelectorAll(".fragment")))
                                    .length
                            ) {
                                var a = 0;
                                if ("number" != typeof e) {
                                    var o = this.sort(
                                        i.querySelectorAll(".fragment.visible")
                                    ).pop();
                                    o &&
                                        (e = parseInt(
                                            o.getAttribute(
                                                "data-fragment-index"
                                            ) || 0,
                                            10
                                        ));
                                }
                                Array.from(t).forEach(function (t, i) {
                                    if (
                                        (t.hasAttribute(
                                            "data-fragment-index"
                                        ) &&
                                            (i = parseInt(
                                                t.getAttribute(
                                                    "data-fragment-index"
                                                ),
                                                10
                                            )),
                                        (a = Math.max(a, i)),
                                        i <= e)
                                    ) {
                                        var o = t.classList.contains("visible");
                                        t.classList.add("visible"),
                                            t.classList.remove(
                                                "current-fragment"
                                            ),
                                            i === e &&
                                                (n.Reveal.announceStatus(
                                                    n.Reveal.getStatusText(t)
                                                ),
                                                t.classList.add(
                                                    "current-fragment"
                                                ),
                                                n.Reveal.slideContent.startEmbeddedContent(
                                                    t
                                                )),
                                            o ||
                                                (r.shown.push(t),
                                                n.Reveal.dispatchEvent({
                                                    target: t,
                                                    type: "visible",
                                                    bubbles: !1,
                                                }));
                                    } else {
                                        var s = t.classList.contains("visible");
                                        t.classList.remove("visible"),
                                            t.classList.remove(
                                                "current-fragment"
                                            ),
                                            s &&
                                                (n.Reveal.slideContent.stopEmbeddedContent(
                                                    t
                                                ),
                                                r.hidden.push(t),
                                                n.Reveal.dispatchEvent({
                                                    target: t,
                                                    type: "hidden",
                                                    bubbles: !1,
                                                }));
                                    }
                                }),
                                    (e = "number" == typeof e ? e : -1),
                                    (e = Math.max(Math.min(e, a), -1)),
                                    i.setAttribute("data-fragment", e);
                            }
                            return r;
                        },
                    },
                    {
                        key: "sync",
                        value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.Reveal.getCurrentSlide();
                            return this.sort(e.querySelectorAll(".fragment"));
                        },
                    },
                    {
                        key: "goto",
                        value: function (e) {
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 0,
                                n = this.Reveal.getCurrentSlide();
                            if (n && this.Reveal.getConfig().fragments) {
                                var i = this.sort(
                                    n.querySelectorAll(
                                        ".fragment:not(.disabled)"
                                    )
                                );
                                if (i.length) {
                                    if ("number" != typeof e) {
                                        var r = this.sort(
                                            n.querySelectorAll(
                                                ".fragment:not(.disabled).visible"
                                            )
                                        ).pop();
                                        e = r
                                            ? parseInt(
                                                  r.getAttribute(
                                                      "data-fragment-index"
                                                  ) || 0,
                                                  10
                                              )
                                            : -1;
                                    }
                                    e += t;
                                    var a = this.update(e, i);
                                    return (
                                        a.hidden.length &&
                                            this.Reveal.dispatchEvent({
                                                type: "fragmenthidden",
                                                data: {
                                                    fragment: a.hidden[0],
                                                    fragments: a.hidden,
                                                },
                                            }),
                                        a.shown.length &&
                                            this.Reveal.dispatchEvent({
                                                type: "fragmentshown",
                                                data: {
                                                    fragment: a.shown[0],
                                                    fragments: a.shown,
                                                },
                                            }),
                                        this.Reveal.controls.update(),
                                        this.Reveal.progress.update(),
                                        this.Reveal.getConfig().fragmentInURL &&
                                            this.Reveal.location.writeURL(),
                                        !(!a.shown.length && !a.hidden.length)
                                    );
                                }
                            }
                            return !1;
                        },
                    },
                    {
                        key: "next",
                        value: function () {
                            return this.goto(null, 1);
                        },
                    },
                    {
                        key: "prev",
                        value: function () {
                            return this.goto(null, -1);
                        },
                    },
                ]),
                e
            );
        })(),
        qv = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.active = !1),
                    (this.onSlideClicked = this.onSlideClicked.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "activate",
                        value: function () {
                            var e = this;
                            if (
                                this.Reveal.getConfig().overview &&
                                !this.Reveal.isScrollView() &&
                                !this.isActive()
                            ) {
                                (this.active = !0),
                                    this.Reveal.getRevealElement().classList.add(
                                        "overview"
                                    ),
                                    this.Reveal.cancelAutoSlide(),
                                    this.Reveal.getSlidesElement().appendChild(
                                        this.Reveal.getBackgroundsElement()
                                    ),
                                    Fh(
                                        this.Reveal.getRevealElement(),
                                        fv
                                    ).forEach(function (t) {
                                        t.classList.contains("stack") ||
                                            t.addEventListener(
                                                "click",
                                                e.onSlideClicked,
                                                !0
                                            );
                                    });
                                var t = this.Reveal.getComputedSlideSize();
                                (this.overviewSlideWidth = t.width + 70),
                                    (this.overviewSlideHeight = t.height + 70),
                                    this.Reveal.getConfig().rtl &&
                                        (this.overviewSlideWidth =
                                            -this.overviewSlideWidth),
                                    this.Reveal.updateSlidesVisibility(),
                                    this.layout(),
                                    this.update(),
                                    this.Reveal.layout();
                                var n = this.Reveal.getIndices();
                                this.Reveal.dispatchEvent({
                                    type: "overviewshown",
                                    data: {
                                        indexh: n.h,
                                        indexv: n.v,
                                        currentSlide:
                                            this.Reveal.getCurrentSlide(),
                                    },
                                });
                            }
                        },
                    },
                    {
                        key: "layout",
                        value: function () {
                            var e = this;
                            this.Reveal.getHorizontalSlides().forEach(function (
                                t,
                                n
                            ) {
                                t.setAttribute("data-index-h", n),
                                    qh(
                                        t,
                                        "translate3d(" +
                                            n * e.overviewSlideWidth +
                                            "px, 0, 0)"
                                    ),
                                    t.classList.contains("stack") &&
                                        Fh(t, "section").forEach(function (
                                            t,
                                            i
                                        ) {
                                            t.setAttribute("data-index-h", n),
                                                t.setAttribute(
                                                    "data-index-v",
                                                    i
                                                ),
                                                qh(
                                                    t,
                                                    "translate3d(0, " +
                                                        i *
                                                            e.overviewSlideHeight +
                                                        "px, 0)"
                                                );
                                        });
                            }),
                                Array.from(
                                    this.Reveal.getBackgroundsElement()
                                        .childNodes
                                ).forEach(function (t, n) {
                                    qh(
                                        t,
                                        "translate3d(" +
                                            n * e.overviewSlideWidth +
                                            "px, 0, 0)"
                                    ),
                                        Fh(t, ".slide-background").forEach(
                                            function (t, n) {
                                                qh(
                                                    t,
                                                    "translate3d(0, " +
                                                        n *
                                                            e.overviewSlideHeight +
                                                        "px, 0)"
                                                );
                                            }
                                        );
                                });
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var e = Math.min(
                                    window.innerWidth,
                                    window.innerHeight
                                ),
                                t = Math.max(e / 5, 150) / e,
                                n = this.Reveal.getIndices();
                            this.Reveal.transformSlides({
                                overview: [
                                    "scale(" + t + ")",
                                    "translateX(" +
                                        -n.h * this.overviewSlideWidth +
                                        "px)",
                                    "translateY(" +
                                        -n.v * this.overviewSlideHeight +
                                        "px)",
                                ].join(" "),
                            });
                        },
                    },
                    {
                        key: "deactivate",
                        value: function () {
                            var e = this;
                            if (this.Reveal.getConfig().overview) {
                                (this.active = !1),
                                    this.Reveal.getRevealElement().classList.remove(
                                        "overview"
                                    ),
                                    this.Reveal.getRevealElement().classList.add(
                                        "overview-deactivating"
                                    ),
                                    setTimeout(function () {
                                        e.Reveal.getRevealElement().classList.remove(
                                            "overview-deactivating"
                                        );
                                    }, 1),
                                    this.Reveal.getRevealElement().appendChild(
                                        this.Reveal.getBackgroundsElement()
                                    ),
                                    Fh(
                                        this.Reveal.getRevealElement(),
                                        fv
                                    ).forEach(function (t) {
                                        qh(t, ""),
                                            t.removeEventListener(
                                                "click",
                                                e.onSlideClicked,
                                                !0
                                            );
                                    }),
                                    Fh(
                                        this.Reveal.getBackgroundsElement(),
                                        ".slide-background"
                                    ).forEach(function (e) {
                                        qh(e, "");
                                    }),
                                    this.Reveal.transformSlides({
                                        overview: "",
                                    });
                                var t = this.Reveal.getIndices();
                                this.Reveal.slide(t.h, t.v),
                                    this.Reveal.layout(),
                                    this.Reveal.cueAutoSlide(),
                                    this.Reveal.dispatchEvent({
                                        type: "overviewhidden",
                                        data: {
                                            indexh: t.h,
                                            indexv: t.v,
                                            currentSlide:
                                                this.Reveal.getCurrentSlide(),
                                        },
                                    });
                            }
                        },
                    },
                    {
                        key: "toggle",
                        value: function (e) {
                            "boolean" == typeof e
                                ? e
                                    ? this.activate()
                                    : this.deactivate()
                                : this.isActive()
                                ? this.deactivate()
                                : this.activate();
                        },
                    },
                    {
                        key: "isActive",
                        value: function () {
                            return this.active;
                        },
                    },
                    {
                        key: "onSlideClicked",
                        value: function (e) {
                            if (this.isActive()) {
                                e.preventDefault();
                                for (
                                    var t = e.target;
                                    t && !t.nodeName.match(/section/gi);

                                )
                                    t = t.parentNode;
                                if (
                                    t &&
                                    !t.classList.contains("disabled") &&
                                    (this.deactivate(),
                                    t.nodeName.match(/section/gi))
                                ) {
                                    var n = parseInt(
                                            t.getAttribute("data-index-h"),
                                            10
                                        ),
                                        i = parseInt(
                                            t.getAttribute("data-index-v"),
                                            10
                                        );
                                    this.Reveal.slide(n, i);
                                }
                            }
                        },
                    },
                ]),
                e
            );
        })(),
        _v = vt.includes,
        Vv = jf;
    Xt(
        { target: "Array", proto: !0 },
        {
            includes: function (e) {
                return _v(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                );
            },
        }
    ),
        Vv("includes");
    var Wv = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.shortcuts = {}),
                    (this.bindings = {}),
                    (this.onDocumentKeyDown =
                        this.onDocumentKeyDown.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "configure",
                        value: function (e, t) {
                            "linear" === e.navigationMode
                                ? ((this.shortcuts[
                                      "&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"
                                  ] = "Next slide"),
                                  (this.shortcuts[
                                      "&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"
                                  ] = "Previous slide"))
                                : ((this.shortcuts["N  ,  SPACE"] =
                                      "Next slide"),
                                  (this.shortcuts["P  ,  Shift SPACE"] =
                                      "Previous slide"),
                                  (this.shortcuts["&#8592;  ,  H"] =
                                      "Navigate left"),
                                  (this.shortcuts["&#8594;  ,  L"] =
                                      "Navigate right"),
                                  (this.shortcuts["&#8593;  ,  K"] =
                                      "Navigate up"),
                                  (this.shortcuts["&#8595;  ,  J"] =
                                      "Navigate down")),
                                (this.shortcuts[
                                    "Alt + &#8592;/&#8593/&#8594;/&#8595;"
                                ] = "Navigate without fragments"),
                                (this.shortcuts[
                                    "Shift + &#8592;/&#8593/&#8594;/&#8595;"
                                ] = "Jump to first/last slide"),
                                (this.shortcuts["B  ,  ."] = "Pause"),
                                (this.shortcuts.F = "Fullscreen"),
                                (this.shortcuts.G = "Jump to slide"),
                                (this.shortcuts["ESC, O"] = "Slide overview");
                        },
                    },
                    {
                        key: "bind",
                        value: function () {
                            document.addEventListener(
                                "keydown",
                                this.onDocumentKeyDown,
                                !1
                            );
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            document.removeEventListener(
                                "keydown",
                                this.onDocumentKeyDown,
                                !1
                            );
                        },
                    },
                    {
                        key: "addKeyBinding",
                        value: function (e, t) {
                            "object" === Si(e) && e.keyCode
                                ? (this.bindings[e.keyCode] = {
                                      callback: t,
                                      key: e.key,
                                      description: e.description,
                                  })
                                : (this.bindings[e] = {
                                      callback: t,
                                      key: null,
                                      description: null,
                                  });
                        },
                    },
                    {
                        key: "removeKeyBinding",
                        value: function (e) {
                            delete this.bindings[e];
                        },
                    },
                    {
                        key: "triggerKey",
                        value: function (e) {
                            this.onDocumentKeyDown({ keyCode: e });
                        },
                    },
                    {
                        key: "registerKeyboardShortcut",
                        value: function (e, t) {
                            this.shortcuts[e] = t;
                        },
                    },
                    {
                        key: "getShortcuts",
                        value: function () {
                            return this.shortcuts;
                        },
                    },
                    {
                        key: "getBindings",
                        value: function () {
                            return this.bindings;
                        },
                    },
                    {
                        key: "onDocumentKeyDown",
                        value: function (e) {
                            var t = this.Reveal.getConfig();
                            if (
                                "function" == typeof t.keyboardCondition &&
                                !1 === t.keyboardCondition(e)
                            )
                                return !0;
                            if (
                                "focused" === t.keyboardCondition &&
                                !this.Reveal.isFocused()
                            )
                                return !0;
                            var n = e.keyCode,
                                i = !this.Reveal.isAutoSliding();
                            this.Reveal.onUserInput(e);
                            var r =
                                    document.activeElement &&
                                    !0 ===
                                        document.activeElement
                                            .isContentEditable,
                                a =
                                    document.activeElement &&
                                    document.activeElement.tagName &&
                                    /input|textarea/i.test(
                                        document.activeElement.tagName
                                    ),
                                o =
                                    document.activeElement &&
                                    document.activeElement.className &&
                                    /speaker-notes/i.test(
                                        document.activeElement.className
                                    ),
                                s =
                                    !(
                                        (-1 !==
                                            [
                                                32, 37, 38, 39, 40, 78, 80, 191,
                                            ].indexOf(e.keyCode) &&
                                            e.shiftKey) ||
                                        e.altKey
                                    ) &&
                                    (e.shiftKey ||
                                        e.altKey ||
                                        e.ctrlKey ||
                                        e.metaKey);
                            if (!(r || a || o || s)) {
                                var l,
                                    c = [66, 86, 190, 191];
                                if ("object" === Si(t.keyboard))
                                    for (l in t.keyboard)
                                        "togglePause" === t.keyboard[l] &&
                                            c.push(parseInt(l, 10));
                                if (
                                    this.Reveal.isPaused() &&
                                    -1 === c.indexOf(n)
                                )
                                    return !1;
                                var u,
                                    d,
                                    h =
                                        "linear" === t.navigationMode ||
                                        !this.Reveal.hasHorizontalSlides() ||
                                        !this.Reveal.hasVerticalSlides(),
                                    f = !1;
                                if ("object" === Si(t.keyboard))
                                    for (l in t.keyboard)
                                        if (parseInt(l, 10) === n) {
                                            var v = t.keyboard[l];
                                            "function" == typeof v
                                                ? v.apply(null, [e])
                                                : "string" == typeof v &&
                                                  "function" ==
                                                      typeof this.Reveal[v] &&
                                                  this.Reveal[v].call(),
                                                (f = !0);
                                        }
                                if (!1 === f)
                                    for (l in this.bindings)
                                        if (parseInt(l, 10) === n) {
                                            var g = this.bindings[l].callback;
                                            "function" == typeof g
                                                ? g.apply(null, [e])
                                                : "string" == typeof g &&
                                                  "function" ==
                                                      typeof this.Reveal[g] &&
                                                  this.Reveal[g].call(),
                                                (f = !0);
                                        }
                                !1 === f &&
                                    ((f = !0),
                                    80 === n || 33 === n
                                        ? this.Reveal.prev({
                                              skipFragments: e.altKey,
                                          })
                                        : 78 === n || 34 === n
                                        ? this.Reveal.next({
                                              skipFragments: e.altKey,
                                          })
                                        : 72 === n || 37 === n
                                        ? e.shiftKey
                                            ? this.Reveal.slide(0)
                                            : !this.Reveal.overview.isActive() &&
                                              h
                                            ? this.Reveal.prev({
                                                  skipFragments: e.altKey,
                                              })
                                            : this.Reveal.left({
                                                  skipFragments: e.altKey,
                                              })
                                        : 76 === n || 39 === n
                                        ? e.shiftKey
                                            ? this.Reveal.slide(
                                                  this.Reveal.getHorizontalSlides()
                                                      .length - 1
                                              )
                                            : !this.Reveal.overview.isActive() &&
                                              h
                                            ? this.Reveal.next({
                                                  skipFragments: e.altKey,
                                              })
                                            : this.Reveal.right({
                                                  skipFragments: e.altKey,
                                              })
                                        : 75 === n || 38 === n
                                        ? e.shiftKey
                                            ? this.Reveal.slide(void 0, 0)
                                            : !this.Reveal.overview.isActive() &&
                                              h
                                            ? this.Reveal.prev({
                                                  skipFragments: e.altKey,
                                              })
                                            : this.Reveal.up({
                                                  skipFragments: e.altKey,
                                              })
                                        : 74 === n || 40 === n
                                        ? e.shiftKey
                                            ? this.Reveal.slide(
                                                  void 0,
                                                  Number.MAX_VALUE
                                              )
                                            : !this.Reveal.overview.isActive() &&
                                              h
                                            ? this.Reveal.next({
                                                  skipFragments: e.altKey,
                                              })
                                            : this.Reveal.down({
                                                  skipFragments: e.altKey,
                                              })
                                        : 36 === n
                                        ? this.Reveal.slide(0)
                                        : 35 === n
                                        ? this.Reveal.slide(
                                              this.Reveal.getHorizontalSlides()
                                                  .length - 1
                                          )
                                        : 32 === n
                                        ? (this.Reveal.overview.isActive() &&
                                              this.Reveal.overview.deactivate(),
                                          e.shiftKey
                                              ? this.Reveal.prev({
                                                    skipFragments: e.altKey,
                                                })
                                              : this.Reveal.next({
                                                    skipFragments: e.altKey,
                                                }))
                                        : [58, 59, 66, 86, 190].includes(n) ||
                                          (191 === n && !e.shiftKey)
                                        ? this.Reveal.togglePause()
                                        : 70 === n
                                        ? ((u = t.embedded
                                              ? this.Reveal.getViewportElement()
                                              : document.documentElement),
                                          (d =
                                              (u =
                                                  u || document.documentElement)
                                                  .requestFullscreen ||
                                              u.webkitRequestFullscreen ||
                                              u.webkitRequestFullScreen ||
                                              u.mozRequestFullScreen ||
                                              u.msRequestFullscreen) &&
                                              d.apply(u))
                                        : 65 === n
                                        ? t.autoSlideStoppable &&
                                          this.Reveal.toggleAutoSlide(i)
                                        : 71 === n
                                        ? t.jumpToSlide &&
                                          this.Reveal.toggleJumpToSlide()
                                        : 191 === n && e.shiftKey
                                        ? this.Reveal.toggleHelp()
                                        : (f = !1)),
                                    f
                                        ? e.preventDefault && e.preventDefault()
                                        : (27 !== n && 79 !== n) ||
                                          (!1 === this.Reveal.closeOverlay() &&
                                              this.Reveal.overview.toggle(),
                                          e.preventDefault &&
                                              e.preventDefault()),
                                    this.Reveal.cueAutoSlide();
                            }
                        },
                    },
                ]),
                e
            );
        })(),
        Kv = (function () {
            function e(t) {
                Ai(this, e),
                    Li(this, "MAX_REPLACE_STATE_FREQUENCY", 1e3),
                    (this.Reveal = t),
                    (this.writeURLTimeout = 0),
                    (this.replaceStateTimestamp = 0),
                    (this.onWindowHashChange =
                        this.onWindowHashChange.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "bind",
                        value: function () {
                            window.addEventListener(
                                "hashchange",
                                this.onWindowHashChange,
                                !1
                            );
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            window.removeEventListener(
                                "hashchange",
                                this.onWindowHashChange,
                                !1
                            );
                        },
                    },
                    {
                        key: "getIndicesFromHash",
                        value: function () {
                            var e,
                                t,
                                n =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : window.location.hash,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                r = n.replace(/^#\/?/, ""),
                                a = r.split("/");
                            if (/^[0-9]*$/.test(a[0]) || !r.length) {
                                var o,
                                    s = this.Reveal.getConfig(),
                                    l =
                                        s.hashOneBasedIndex || i.oneBasedIndex
                                            ? 1
                                            : 0,
                                    c = parseInt(a[0], 10) - l || 0,
                                    u = parseInt(a[1], 10) - l || 0;
                                return (
                                    s.fragmentInURL &&
                                        ((o = parseInt(a[2], 10)),
                                        isNaN(o) && (o = void 0)),
                                    { h: c, v: u, f: o }
                                );
                            }
                            /\/[-\d]+$/g.test(r) &&
                                ((t = parseInt(r.split("/").pop(), 10)),
                                (t = isNaN(t) ? void 0 : t),
                                (r = r.split("/").shift()));
                            try {
                                e = document
                                    .getElementById(decodeURIComponent(r))
                                    .closest(".slides section");
                            } catch (e) {}
                            return e
                                ? Ei(
                                      Ei({}, this.Reveal.getIndices(e)),
                                      {},
                                      { f: t }
                                  )
                                : null;
                        },
                    },
                    {
                        key: "readURL",
                        value: function () {
                            var e = this.Reveal.getIndices(),
                                t = this.getIndicesFromHash();
                            t
                                ? (t.h === e.h &&
                                      t.v === e.v &&
                                      void 0 === t.f) ||
                                  this.Reveal.slide(t.h, t.v, t.f)
                                : this.Reveal.slide(e.h || 0, e.v || 0);
                        },
                    },
                    {
                        key: "writeURL",
                        value: function (e) {
                            var t = this.Reveal.getConfig(),
                                n = this.Reveal.getCurrentSlide();
                            if (
                                (clearTimeout(this.writeURLTimeout),
                                "number" == typeof e)
                            )
                                this.writeURLTimeout = setTimeout(
                                    this.writeURL,
                                    e
                                );
                            else if (n) {
                                var i = this.getHash();
                                t.history
                                    ? (window.location.hash = i)
                                    : t.hash &&
                                      ("/" === i
                                          ? this.debouncedReplaceState(
                                                window.location.pathname +
                                                    window.location.search
                                            )
                                          : this.debouncedReplaceState(
                                                "#" + i
                                            ));
                            }
                        },
                    },
                    {
                        key: "replaceState",
                        value: function (e) {
                            window.history.replaceState(null, null, e),
                                (this.replaceStateTimestamp = Date.now());
                        },
                    },
                    {
                        key: "debouncedReplaceState",
                        value: function (e) {
                            var t = this;
                            clearTimeout(this.replaceStateTimeout),
                                Date.now() - this.replaceStateTimestamp >
                                this.MAX_REPLACE_STATE_FREQUENCY
                                    ? this.replaceState(e)
                                    : (this.replaceStateTimeout = setTimeout(
                                          function () {
                                              return t.replaceState(e);
                                          },
                                          this.MAX_REPLACE_STATE_FREQUENCY
                                      ));
                        },
                    },
                    {
                        key: "getHash",
                        value: function (e) {
                            var t = "/",
                                n = e || this.Reveal.getCurrentSlide(),
                                i = n ? n.getAttribute("id") : null;
                            i && (i = encodeURIComponent(i));
                            var r = this.Reveal.getIndices(e);
                            if (
                                (this.Reveal.getConfig().fragmentInURL ||
                                    (r.f = void 0),
                                "string" == typeof i && i.length)
                            )
                                (t = "/" + i), r.f >= 0 && (t += "/" + r.f);
                            else {
                                var a = this.Reveal.getConfig()
                                    .hashOneBasedIndex
                                    ? 1
                                    : 0;
                                (r.h > 0 || r.v > 0 || r.f >= 0) &&
                                    (t += r.h + a),
                                    (r.v > 0 || r.f >= 0) &&
                                        (t += "/" + (r.v + a)),
                                    r.f >= 0 && (t += "/" + r.f);
                            }
                            return t;
                        },
                    },
                    {
                        key: "onWindowHashChange",
                        value: function (e) {
                            this.readURL();
                        },
                    },
                ]),
                e
            );
        })(),
        Yv = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.onNavigateLeftClicked =
                        this.onNavigateLeftClicked.bind(this)),
                    (this.onNavigateRightClicked =
                        this.onNavigateRightClicked.bind(this)),
                    (this.onNavigateUpClicked =
                        this.onNavigateUpClicked.bind(this)),
                    (this.onNavigateDownClicked =
                        this.onNavigateDownClicked.bind(this)),
                    (this.onNavigatePrevClicked =
                        this.onNavigatePrevClicked.bind(this)),
                    (this.onNavigateNextClicked =
                        this.onNavigateNextClicked.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            var e = this.Reveal.getConfig().rtl,
                                t = this.Reveal.getRevealElement();
                            (this.element = document.createElement("aside")),
                                (this.element.className = "controls"),
                                (this.element.innerHTML =
                                    '<button class="navigate-left" aria-label="'
                                        .concat(
                                            e ? "next slide" : "previous slide",
                                            '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="'
                                        )
                                        .concat(
                                            e ? "previous slide" : "next slide",
                                            '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'
                                        )),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                ),
                                (this.controlsLeft = Fh(t, ".navigate-left")),
                                (this.controlsRight = Fh(t, ".navigate-right")),
                                (this.controlsUp = Fh(t, ".navigate-up")),
                                (this.controlsDown = Fh(t, ".navigate-down")),
                                (this.controlsPrev = Fh(t, ".navigate-prev")),
                                (this.controlsNext = Fh(t, ".navigate-next")),
                                (this.controlsRightArrow =
                                    this.element.querySelector(
                                        ".navigate-right"
                                    )),
                                (this.controlsLeftArrow =
                                    this.element.querySelector(
                                        ".navigate-left"
                                    )),
                                (this.controlsDownArrow =
                                    this.element.querySelector(
                                        ".navigate-down"
                                    ));
                        },
                    },
                    {
                        key: "configure",
                        value: function (e, t) {
                            (this.element.style.display = e.controls
                                ? "block"
                                : "none"),
                                this.element.setAttribute(
                                    "data-controls-layout",
                                    e.controlsLayout
                                ),
                                this.element.setAttribute(
                                    "data-controls-back-arrows",
                                    e.controlsBackArrows
                                );
                        },
                    },
                    {
                        key: "bind",
                        value: function () {
                            var e = this,
                                t = ["touchstart", "click"];
                            ef && (t = ["touchstart"]),
                                t.forEach(function (t) {
                                    e.controlsLeft.forEach(function (n) {
                                        return n.addEventListener(
                                            t,
                                            e.onNavigateLeftClicked,
                                            !1
                                        );
                                    }),
                                        e.controlsRight.forEach(function (n) {
                                            return n.addEventListener(
                                                t,
                                                e.onNavigateRightClicked,
                                                !1
                                            );
                                        }),
                                        e.controlsUp.forEach(function (n) {
                                            return n.addEventListener(
                                                t,
                                                e.onNavigateUpClicked,
                                                !1
                                            );
                                        }),
                                        e.controlsDown.forEach(function (n) {
                                            return n.addEventListener(
                                                t,
                                                e.onNavigateDownClicked,
                                                !1
                                            );
                                        }),
                                        e.controlsPrev.forEach(function (n) {
                                            return n.addEventListener(
                                                t,
                                                e.onNavigatePrevClicked,
                                                !1
                                            );
                                        }),
                                        e.controlsNext.forEach(function (n) {
                                            return n.addEventListener(
                                                t,
                                                e.onNavigateNextClicked,
                                                !1
                                            );
                                        });
                                });
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            var e = this;
                            ["touchstart", "click"].forEach(function (t) {
                                e.controlsLeft.forEach(function (n) {
                                    return n.removeEventListener(
                                        t,
                                        e.onNavigateLeftClicked,
                                        !1
                                    );
                                }),
                                    e.controlsRight.forEach(function (n) {
                                        return n.removeEventListener(
                                            t,
                                            e.onNavigateRightClicked,
                                            !1
                                        );
                                    }),
                                    e.controlsUp.forEach(function (n) {
                                        return n.removeEventListener(
                                            t,
                                            e.onNavigateUpClicked,
                                            !1
                                        );
                                    }),
                                    e.controlsDown.forEach(function (n) {
                                        return n.removeEventListener(
                                            t,
                                            e.onNavigateDownClicked,
                                            !1
                                        );
                                    }),
                                    e.controlsPrev.forEach(function (n) {
                                        return n.removeEventListener(
                                            t,
                                            e.onNavigatePrevClicked,
                                            !1
                                        );
                                    }),
                                    e.controlsNext.forEach(function (n) {
                                        return n.removeEventListener(
                                            t,
                                            e.onNavigateNextClicked,
                                            !1
                                        );
                                    });
                            });
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var e = this.Reveal.availableRoutes();
                            []
                                .concat(
                                    Pi(this.controlsLeft),
                                    Pi(this.controlsRight),
                                    Pi(this.controlsUp),
                                    Pi(this.controlsDown),
                                    Pi(this.controlsPrev),
                                    Pi(this.controlsNext)
                                )
                                .forEach(function (e) {
                                    e.classList.remove("enabled", "fragmented"),
                                        e.setAttribute("disabled", "disabled");
                                }),
                                e.left &&
                                    this.controlsLeft.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    }),
                                e.right &&
                                    this.controlsRight.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    }),
                                e.up &&
                                    this.controlsUp.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    }),
                                e.down &&
                                    this.controlsDown.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    }),
                                (e.left || e.up) &&
                                    this.controlsPrev.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    }),
                                (e.right || e.down) &&
                                    this.controlsNext.forEach(function (e) {
                                        e.classList.add("enabled"),
                                            e.removeAttribute("disabled");
                                    });
                            var t = this.Reveal.getCurrentSlide();
                            if (t) {
                                var n = this.Reveal.fragments.availableRoutes();
                                n.prev &&
                                    this.controlsPrev.forEach(function (e) {
                                        e.classList.add(
                                            "fragmented",
                                            "enabled"
                                        ),
                                            e.removeAttribute("disabled");
                                    }),
                                    n.next &&
                                        this.controlsNext.forEach(function (e) {
                                            e.classList.add(
                                                "fragmented",
                                                "enabled"
                                            ),
                                                e.removeAttribute("disabled");
                                        }),
                                    this.Reveal.isVerticalSlide(t)
                                        ? (n.prev &&
                                              this.controlsUp.forEach(function (
                                                  e
                                              ) {
                                                  e.classList.add(
                                                      "fragmented",
                                                      "enabled"
                                                  ),
                                                      e.removeAttribute(
                                                          "disabled"
                                                      );
                                              }),
                                          n.next &&
                                              this.controlsDown.forEach(
                                                  function (e) {
                                                      e.classList.add(
                                                          "fragmented",
                                                          "enabled"
                                                      ),
                                                          e.removeAttribute(
                                                              "disabled"
                                                          );
                                                  }
                                              ))
                                        : (n.prev &&
                                              this.controlsLeft.forEach(
                                                  function (e) {
                                                      e.classList.add(
                                                          "fragmented",
                                                          "enabled"
                                                      ),
                                                          e.removeAttribute(
                                                              "disabled"
                                                          );
                                                  }
                                              ),
                                          n.next &&
                                              this.controlsRight.forEach(
                                                  function (e) {
                                                      e.classList.add(
                                                          "fragmented",
                                                          "enabled"
                                                      ),
                                                          e.removeAttribute(
                                                              "disabled"
                                                          );
                                                  }
                                              ));
                            }
                            if (this.Reveal.getConfig().controlsTutorial) {
                                var i = this.Reveal.getIndices();
                                !this.Reveal.hasNavigatedVertically() && e.down
                                    ? this.controlsDownArrow.classList.add(
                                          "highlight"
                                      )
                                    : (this.controlsDownArrow.classList.remove(
                                          "highlight"
                                      ),
                                      this.Reveal.getConfig().rtl
                                          ? !this.Reveal.hasNavigatedHorizontally() &&
                                            e.left &&
                                            0 === i.v
                                              ? this.controlsLeftArrow.classList.add(
                                                    "highlight"
                                                )
                                              : this.controlsLeftArrow.classList.remove(
                                                    "highlight"
                                                )
                                          : !this.Reveal.hasNavigatedHorizontally() &&
                                            e.right &&
                                            0 === i.v
                                          ? this.controlsRightArrow.classList.add(
                                                "highlight"
                                            )
                                          : this.controlsRightArrow.classList.remove(
                                                "highlight"
                                            ));
                            }
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.unbind(), this.element.remove();
                        },
                    },
                    {
                        key: "onNavigateLeftClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                "linear" ===
                                this.Reveal.getConfig().navigationMode
                                    ? this.Reveal.prev()
                                    : this.Reveal.left();
                        },
                    },
                    {
                        key: "onNavigateRightClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                "linear" ===
                                this.Reveal.getConfig().navigationMode
                                    ? this.Reveal.next()
                                    : this.Reveal.right();
                        },
                    },
                    {
                        key: "onNavigateUpClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                this.Reveal.up();
                        },
                    },
                    {
                        key: "onNavigateDownClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                this.Reveal.down();
                        },
                    },
                    {
                        key: "onNavigatePrevClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                this.Reveal.prev();
                        },
                    },
                    {
                        key: "onNavigateNextClicked",
                        value: function (e) {
                            e.preventDefault(),
                                this.Reveal.onUserInput(),
                                this.Reveal.next();
                        },
                    },
                ]),
                e
            );
        })(),
        Xv = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.onProgressClicked =
                        this.onProgressClicked.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            (this.element = document.createElement("div")),
                                (this.element.className = "progress"),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                ),
                                (this.bar = document.createElement("span")),
                                this.element.appendChild(this.bar);
                        },
                    },
                    {
                        key: "configure",
                        value: function (e, t) {
                            this.element.style.display = e.progress
                                ? "block"
                                : "none";
                        },
                    },
                    {
                        key: "bind",
                        value: function () {
                            this.Reveal.getConfig().progress &&
                                this.element &&
                                this.element.addEventListener(
                                    "click",
                                    this.onProgressClicked,
                                    !1
                                );
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            this.Reveal.getConfig().progress &&
                                this.element &&
                                this.element.removeEventListener(
                                    "click",
                                    this.onProgressClicked,
                                    !1
                                );
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            if (this.Reveal.getConfig().progress && this.bar) {
                                var e = this.Reveal.getProgress();
                                this.Reveal.getTotalSlides() < 2 && (e = 0),
                                    (this.bar.style.transform =
                                        "scaleX(" + e + ")");
                            }
                        },
                    },
                    {
                        key: "getMaxWidth",
                        value: function () {
                            return this.Reveal.getRevealElement().offsetWidth;
                        },
                    },
                    {
                        key: "onProgressClicked",
                        value: function (e) {
                            this.Reveal.onUserInput(e), e.preventDefault();
                            var t = this.Reveal.getSlides(),
                                n = t.length,
                                i = Math.floor(
                                    (e.clientX / this.getMaxWidth()) * n
                                );
                            this.Reveal.getConfig().rtl && (i = n - i);
                            var r = this.Reveal.getIndices(t[i]);
                            this.Reveal.slide(r.h, r.v);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.element.remove();
                        },
                    },
                ]),
                e
            );
        })(),
        Gv = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.lastMouseWheelStep = 0),
                    (this.cursorHidden = !1),
                    (this.cursorInactiveTimeout = 0),
                    (this.onDocumentCursorActive =
                        this.onDocumentCursorActive.bind(this)),
                    (this.onDocumentMouseScroll =
                        this.onDocumentMouseScroll.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "configure",
                        value: function (e, t) {
                            e.mouseWheel
                                ? (document.addEventListener(
                                      "DOMMouseScroll",
                                      this.onDocumentMouseScroll,
                                      !1
                                  ),
                                  document.addEventListener(
                                      "mousewheel",
                                      this.onDocumentMouseScroll,
                                      !1
                                  ))
                                : (document.removeEventListener(
                                      "DOMMouseScroll",
                                      this.onDocumentMouseScroll,
                                      !1
                                  ),
                                  document.removeEventListener(
                                      "mousewheel",
                                      this.onDocumentMouseScroll,
                                      !1
                                  )),
                                e.hideInactiveCursor
                                    ? (document.addEventListener(
                                          "mousemove",
                                          this.onDocumentCursorActive,
                                          !1
                                      ),
                                      document.addEventListener(
                                          "mousedown",
                                          this.onDocumentCursorActive,
                                          !1
                                      ))
                                    : (this.showCursor(),
                                      document.removeEventListener(
                                          "mousemove",
                                          this.onDocumentCursorActive,
                                          !1
                                      ),
                                      document.removeEventListener(
                                          "mousedown",
                                          this.onDocumentCursorActive,
                                          !1
                                      ));
                        },
                    },
                    {
                        key: "showCursor",
                        value: function () {
                            this.cursorHidden &&
                                ((this.cursorHidden = !1),
                                (this.Reveal.getRevealElement().style.cursor =
                                    ""));
                        },
                    },
                    {
                        key: "hideCursor",
                        value: function () {
                            !1 === this.cursorHidden &&
                                ((this.cursorHidden = !0),
                                (this.Reveal.getRevealElement().style.cursor =
                                    "none"));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.showCursor(),
                                document.removeEventListener(
                                    "DOMMouseScroll",
                                    this.onDocumentMouseScroll,
                                    !1
                                ),
                                document.removeEventListener(
                                    "mousewheel",
                                    this.onDocumentMouseScroll,
                                    !1
                                ),
                                document.removeEventListener(
                                    "mousemove",
                                    this.onDocumentCursorActive,
                                    !1
                                ),
                                document.removeEventListener(
                                    "mousedown",
                                    this.onDocumentCursorActive,
                                    !1
                                );
                        },
                    },
                    {
                        key: "onDocumentCursorActive",
                        value: function (e) {
                            this.showCursor(),
                                clearTimeout(this.cursorInactiveTimeout),
                                (this.cursorInactiveTimeout = setTimeout(
                                    this.hideCursor.bind(this),
                                    this.Reveal.getConfig().hideCursorTime
                                ));
                        },
                    },
                    {
                        key: "onDocumentMouseScroll",
                        value: function (e) {
                            if (Date.now() - this.lastMouseWheelStep > 1e3) {
                                this.lastMouseWheelStep = Date.now();
                                var t = e.detail || -e.wheelDelta;
                                t > 0
                                    ? this.Reveal.next()
                                    : t < 0 && this.Reveal.prev();
                            }
                        },
                    },
                ]),
                e
            );
        })(),
        $v = a,
        Jv = Jt,
        Qv = b,
        Zv = o.f,
        eg = function (e) {
            return function (t) {
                for (
                    var n, i = Qv(t), r = Jv(i), a = r.length, o = 0, s = [];
                    a > o;

                )
                    (n = r[o++]),
                        ($v && !Zv.call(i, n)) || s.push(e ? [n, i[n]] : i[n]);
                return s;
            };
        },
        tg = { entries: eg(!0), values: eg(!1) }.values;
    Xt(
        { target: "Object", stat: !0 },
        {
            values: function (e) {
                return tg(e);
            },
        }
    );
    var ng = function (e, t) {
            var n = document.createElement("script");
            (n.type = "text/javascript"),
                (n.async = !1),
                (n.defer = !1),
                (n.src = e),
                "function" == typeof t &&
                    ((n.onload = n.onreadystatechange =
                        function (e) {
                            ("load" === e.type ||
                                /loaded|complete/.test(n.readyState)) &&
                                ((n.onload =
                                    n.onreadystatechange =
                                    n.onerror =
                                        null),
                                t());
                        }),
                    (n.onerror = function (e) {
                        (n.onload = n.onreadystatechange = n.onerror = null),
                            t(
                                new Error(
                                    "Failed loading script: " + n.src + "\n" + e
                                )
                            );
                    }));
            var i = document.querySelector("head");
            i.insertBefore(n, i.lastChild);
        },
        ig = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.state = "idle"),
                    (this.registeredPlugins = {}),
                    (this.asyncDependencies = []);
            }
            return (
                xi(e, [
                    {
                        key: "load",
                        value: function (e, t) {
                            var n = this;
                            return (
                                (this.state = "loading"),
                                e.forEach(this.registerPlugin.bind(this)),
                                new Promise(function (e) {
                                    var i = [],
                                        r = 0;
                                    if (
                                        (t.forEach(function (e) {
                                            (e.condition && !e.condition()) ||
                                                (e.async
                                                    ? n.asyncDependencies.push(
                                                          e
                                                      )
                                                    : i.push(e));
                                        }),
                                        i.length)
                                    ) {
                                        r = i.length;
                                        var a = function (t) {
                                            t &&
                                                "function" ==
                                                    typeof t.callback &&
                                                t.callback(),
                                                0 == --r &&
                                                    n.initPlugins().then(e);
                                        };
                                        i.forEach(function (e) {
                                            "string" == typeof e.id
                                                ? (n.registerPlugin(e), a(e))
                                                : "string" == typeof e.src
                                                ? ng(e.src, function () {
                                                      return a(e);
                                                  })
                                                : (console.warn(
                                                      "Unrecognized plugin format",
                                                      e
                                                  ),
                                                  a());
                                        });
                                    } else n.initPlugins().then(e);
                                })
                            );
                        },
                    },
                    {
                        key: "initPlugins",
                        value: function () {
                            var e = this;
                            return new Promise(function (t) {
                                var n = Object.values(e.registeredPlugins),
                                    i = n.length;
                                if (0 === i) e.loadAsync().then(t);
                                else {
                                    var r,
                                        a = function () {
                                            0 == --i
                                                ? e.loadAsync().then(t)
                                                : r();
                                        },
                                        o = 0;
                                    (r = function () {
                                        var t = n[o++];
                                        if ("function" == typeof t.init) {
                                            var i = t.init(e.Reveal);
                                            i && "function" == typeof i.then
                                                ? i.then(a)
                                                : a();
                                        } else a();
                                    }),
                                        r();
                                }
                            });
                        },
                    },
                    {
                        key: "loadAsync",
                        value: function () {
                            return (
                                (this.state = "loaded"),
                                this.asyncDependencies.length &&
                                    this.asyncDependencies.forEach(function (
                                        e
                                    ) {
                                        ng(e.src, e.callback);
                                    }),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "registerPlugin",
                        value: function (e) {
                            2 === arguments.length &&
                            "string" == typeof arguments[0]
                                ? ((e = arguments[1]).id = arguments[0])
                                : "function" == typeof e && (e = e());
                            var t = e.id;
                            "string" != typeof t
                                ? console.warn(
                                      "Unrecognized plugin format; can't find plugin.id",
                                      e
                                  )
                                : void 0 === this.registeredPlugins[t]
                                ? ((this.registeredPlugins[t] = e),
                                  "loaded" === this.state &&
                                      "function" == typeof e.init &&
                                      e.init(this.Reveal))
                                : console.warn(
                                      'reveal.js: "' +
                                          t +
                                          '" plugin has already been registered'
                                  );
                        },
                    },
                    {
                        key: "hasPlugin",
                        value: function (e) {
                            return !!this.registeredPlugins[e];
                        },
                    },
                    {
                        key: "getPlugin",
                        value: function (e) {
                            return this.registeredPlugins[e];
                        },
                    },
                    {
                        key: "getRegisteredPlugins",
                        value: function () {
                            return this.registeredPlugins;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            Object.values(this.registeredPlugins).forEach(
                                function (e) {
                                    "function" == typeof e.destroy &&
                                        e.destroy();
                                }
                            ),
                                (this.registeredPlugins = {}),
                                (this.asyncDependencies = []);
                        },
                    },
                ]),
                e
            );
        })(),
        rg = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.touchStartX = 0),
                    (this.touchStartY = 0),
                    (this.touchStartCount = 0),
                    (this.touchCaptured = !1),
                    (this.onPointerDown = this.onPointerDown.bind(this)),
                    (this.onPointerMove = this.onPointerMove.bind(this)),
                    (this.onPointerUp = this.onPointerUp.bind(this)),
                    (this.onTouchStart = this.onTouchStart.bind(this)),
                    (this.onTouchMove = this.onTouchMove.bind(this)),
                    (this.onTouchEnd = this.onTouchEnd.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "bind",
                        value: function () {
                            var e = this.Reveal.getRevealElement();
                            "onpointerdown" in window
                                ? (e.addEventListener(
                                      "pointerdown",
                                      this.onPointerDown,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "pointermove",
                                      this.onPointerMove,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "pointerup",
                                      this.onPointerUp,
                                      !1
                                  ))
                                : window.navigator.msPointerEnabled
                                ? (e.addEventListener(
                                      "MSPointerDown",
                                      this.onPointerDown,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "MSPointerMove",
                                      this.onPointerMove,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "MSPointerUp",
                                      this.onPointerUp,
                                      !1
                                  ))
                                : (e.addEventListener(
                                      "touchstart",
                                      this.onTouchStart,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "touchmove",
                                      this.onTouchMove,
                                      !1
                                  ),
                                  e.addEventListener(
                                      "touchend",
                                      this.onTouchEnd,
                                      !1
                                  ));
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            var e = this.Reveal.getRevealElement();
                            e.removeEventListener(
                                "pointerdown",
                                this.onPointerDown,
                                !1
                            ),
                                e.removeEventListener(
                                    "pointermove",
                                    this.onPointerMove,
                                    !1
                                ),
                                e.removeEventListener(
                                    "pointerup",
                                    this.onPointerUp,
                                    !1
                                ),
                                e.removeEventListener(
                                    "MSPointerDown",
                                    this.onPointerDown,
                                    !1
                                ),
                                e.removeEventListener(
                                    "MSPointerMove",
                                    this.onPointerMove,
                                    !1
                                ),
                                e.removeEventListener(
                                    "MSPointerUp",
                                    this.onPointerUp,
                                    !1
                                ),
                                e.removeEventListener(
                                    "touchstart",
                                    this.onTouchStart,
                                    !1
                                ),
                                e.removeEventListener(
                                    "touchmove",
                                    this.onTouchMove,
                                    !1
                                ),
                                e.removeEventListener(
                                    "touchend",
                                    this.onTouchEnd,
                                    !1
                                );
                        },
                    },
                    {
                        key: "isSwipePrevented",
                        value: function (e) {
                            if (_h(e, "video, audio")) return !0;
                            for (; e && "function" == typeof e.hasAttribute; ) {
                                if (e.hasAttribute("data-prevent-swipe"))
                                    return !0;
                                e = e.parentNode;
                            }
                            return !1;
                        },
                    },
                    {
                        key: "onTouchStart",
                        value: function (e) {
                            if (this.isSwipePrevented(e.target)) return !0;
                            (this.touchStartX = e.touches[0].clientX),
                                (this.touchStartY = e.touches[0].clientY),
                                (this.touchStartCount = e.touches.length);
                        },
                    },
                    {
                        key: "onTouchMove",
                        value: function (e) {
                            if (this.isSwipePrevented(e.target)) return !0;
                            var t = this.Reveal.getConfig();
                            if (this.touchCaptured) ef && e.preventDefault();
                            else {
                                this.Reveal.onUserInput(e);
                                var n = e.touches[0].clientX,
                                    i = e.touches[0].clientY;
                                if (
                                    1 === e.touches.length &&
                                    2 !== this.touchStartCount
                                ) {
                                    var r = this.Reveal.availableRoutes({
                                            includeFragments: !0,
                                        }),
                                        a = n - this.touchStartX,
                                        o = i - this.touchStartY;
                                    a > 40 && Math.abs(a) > Math.abs(o)
                                        ? ((this.touchCaptured = !0),
                                          "linear" === t.navigationMode
                                              ? t.rtl
                                                  ? this.Reveal.next()
                                                  : this.Reveal.prev()
                                              : this.Reveal.left())
                                        : a < -40 && Math.abs(a) > Math.abs(o)
                                        ? ((this.touchCaptured = !0),
                                          "linear" === t.navigationMode
                                              ? t.rtl
                                                  ? this.Reveal.prev()
                                                  : this.Reveal.next()
                                              : this.Reveal.right())
                                        : o > 40 && r.up
                                        ? ((this.touchCaptured = !0),
                                          "linear" === t.navigationMode
                                              ? this.Reveal.prev()
                                              : this.Reveal.up())
                                        : o < -40 &&
                                          r.down &&
                                          ((this.touchCaptured = !0),
                                          "linear" === t.navigationMode
                                              ? this.Reveal.next()
                                              : this.Reveal.down()),
                                        t.embedded
                                            ? (this.touchCaptured ||
                                                  this.Reveal.isVerticalSlide()) &&
                                              e.preventDefault()
                                            : e.preventDefault();
                                }
                            }
                        },
                    },
                    {
                        key: "onTouchEnd",
                        value: function (e) {
                            this.touchCaptured = !1;
                        },
                    },
                    {
                        key: "onPointerDown",
                        value: function (e) {
                            (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                                "touch" !== e.pointerType) ||
                                ((e.touches = [
                                    { clientX: e.clientX, clientY: e.clientY },
                                ]),
                                this.onTouchStart(e));
                        },
                    },
                    {
                        key: "onPointerMove",
                        value: function (e) {
                            (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                                "touch" !== e.pointerType) ||
                                ((e.touches = [
                                    { clientX: e.clientX, clientY: e.clientY },
                                ]),
                                this.onTouchMove(e));
                        },
                    },
                    {
                        key: "onPointerUp",
                        value: function (e) {
                            (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                                "touch" !== e.pointerType) ||
                                ((e.touches = [
                                    { clientX: e.clientX, clientY: e.clientY },
                                ]),
                                this.onTouchEnd(e));
                        },
                    },
                ]),
                e
            );
        })(),
        ag = "focus",
        og = "blur",
        sg = (function () {
            function e(t) {
                Ai(this, e),
                    (this.Reveal = t),
                    (this.onRevealPointerDown =
                        this.onRevealPointerDown.bind(this)),
                    (this.onDocumentPointerDown =
                        this.onDocumentPointerDown.bind(this));
            }
            return (
                xi(e, [
                    {
                        key: "configure",
                        value: function (e, t) {
                            e.embedded
                                ? this.blur()
                                : (this.focus(), this.unbind());
                        },
                    },
                    {
                        key: "bind",
                        value: function () {
                            this.Reveal.getConfig().embedded &&
                                this.Reveal.getRevealElement().addEventListener(
                                    "pointerdown",
                                    this.onRevealPointerDown,
                                    !1
                                );
                        },
                    },
                    {
                        key: "unbind",
                        value: function () {
                            this.Reveal.getRevealElement().removeEventListener(
                                "pointerdown",
                                this.onRevealPointerDown,
                                !1
                            ),
                                document.removeEventListener(
                                    "pointerdown",
                                    this.onDocumentPointerDown,
                                    !1
                                );
                        },
                    },
                    {
                        key: "focus",
                        value: function () {
                            this.state !== ag &&
                                (this.Reveal.getRevealElement().classList.add(
                                    "focused"
                                ),
                                document.addEventListener(
                                    "pointerdown",
                                    this.onDocumentPointerDown,
                                    !1
                                )),
                                (this.state = ag);
                        },
                    },
                    {
                        key: "blur",
                        value: function () {
                            this.state !== og &&
                                (this.Reveal.getRevealElement().classList.remove(
                                    "focused"
                                ),
                                document.removeEventListener(
                                    "pointerdown",
                                    this.onDocumentPointerDown,
                                    !1
                                )),
                                (this.state = og);
                        },
                    },
                    {
                        key: "isFocused",
                        value: function () {
                            return this.state === ag;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.Reveal.getRevealElement().classList.remove(
                                "focused"
                            );
                        },
                    },
                    {
                        key: "onRevealPointerDown",
                        value: function (e) {
                            this.focus();
                        },
                    },
                    {
                        key: "onDocumentPointerDown",
                        value: function (e) {
                            var t = Vh(e.target, ".reveal");
                            (t && t === this.Reveal.getRevealElement()) ||
                                this.blur();
                        },
                    },
                ]),
                e
            );
        })(),
        lg = (function () {
            function e(t) {
                Ai(this, e), (this.Reveal = t);
            }
            return (
                xi(e, [
                    {
                        key: "render",
                        value: function () {
                            (this.element = document.createElement("div")),
                                (this.element.className = "speaker-notes"),
                                this.element.setAttribute(
                                    "data-prevent-swipe",
                                    ""
                                ),
                                this.element.setAttribute("tabindex", "0"),
                                this.Reveal.getRevealElement().appendChild(
                                    this.element
                                );
                        },
                    },
                    {
                        key: "configure",
                        value: function (e, t) {
                            e.showNotes &&
                                this.element.setAttribute(
                                    "data-layout",
                                    "string" == typeof e.showNotes
                                        ? e.showNotes
                                        : "inline"
                                );
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.Reveal.getConfig().showNotes &&
                                this.element &&
                                this.Reveal.getCurrentSlide() &&
                                !this.Reveal.isScrollView() &&
                                !this.Reveal.isPrintView() &&
                                (this.element.innerHTML =
                                    this.getSlideNotes() ||
                                    '<span class="notes-placeholder">No notes on this slide.</span>');
                        },
                    },
                    {
                        key: "updateVisibility",
                        value: function () {
                            this.Reveal.getConfig().showNotes &&
                            this.hasNotes() &&
                            !this.Reveal.isScrollView() &&
                            !this.Reveal.isPrintView()
                                ? this.Reveal.getRevealElement().classList.add(
                                      "show-notes"
                                  )
                                : this.Reveal.getRevealElement().classList.remove(
                                      "show-notes"
                                  );
                        },
                    },
                    {
                        key: "hasNotes",
                        value: function () {
                            return (
                                this.Reveal.getSlidesElement().querySelectorAll(
                                    "[data-notes], aside.notes"
                                ).length > 0
                            );
                        },
                    },
                    {
                        key: "isSpeakerNotesWindow",
                        value: function () {
                            return !!window.location.search.match(/receiver/gi);
                        },
                    },
                    {
                        key: "getSlideNotes",
                        value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.Reveal.getCurrentSlide();
                            if (e.hasAttribute("data-notes"))
                                return e.getAttribute("data-notes");
                            var t = e.querySelectorAll("aside.notes");
                            return t
                                ? Array.from(t)
                                      .map(function (e) {
                                          return e.innerHTML;
                                      })
                                      .join("\n")
                                : null;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.element.remove();
                        },
                    },
                ]),
                e
            );
        })(),
        cg = A,
        ug = ct,
        dg = at,
        hg = function (e) {
            for (
                var t = cg(this),
                    n = dg(t.length),
                    i = arguments.length,
                    r = ug(i > 1 ? arguments[1] : void 0, n),
                    a = i > 2 ? arguments[2] : void 0,
                    o = void 0 === a ? n : ug(a, n);
                o > r;

            )
                t[r++] = e;
            return t;
        },
        fg = jf;
    Xt({ target: "Array", proto: !0 }, { fill: hg }), fg("fill");
    var vg = (function () {
            function e(t, n) {
                Ai(this, e),
                    (this.diameter = 100),
                    (this.diameter2 = this.diameter / 2),
                    (this.thickness = 6),
                    (this.playing = !1),
                    (this.progress = 0),
                    (this.progressOffset = 1),
                    (this.container = t),
                    (this.progressCheck = n),
                    (this.canvas = document.createElement("canvas")),
                    (this.canvas.className = "playback"),
                    (this.canvas.width = this.diameter),
                    (this.canvas.height = this.diameter),
                    (this.canvas.style.width = this.diameter2 + "px"),
                    (this.canvas.style.height = this.diameter2 + "px"),
                    (this.context = this.canvas.getContext("2d")),
                    this.container.appendChild(this.canvas),
                    this.render();
            }
            return (
                xi(e, [
                    {
                        key: "setPlaying",
                        value: function (e) {
                            var t = this.playing;
                            (this.playing = e),
                                !t && this.playing
                                    ? this.animate()
                                    : this.render();
                        },
                    },
                    {
                        key: "animate",
                        value: function () {
                            var e = this.progress;
                            (this.progress = this.progressCheck()),
                                e > 0.8 &&
                                    this.progress < 0.2 &&
                                    (this.progressOffset = this.progress),
                                this.render(),
                                this.playing &&
                                    requestAnimationFrame(
                                        this.animate.bind(this)
                                    );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this.playing ? this.progress : 0,
                                t = this.diameter2 - this.thickness,
                                n = this.diameter2,
                                i = this.diameter2,
                                r = 28;
                            this.progressOffset +=
                                0.1 * (1 - this.progressOffset);
                            var a = -Math.PI / 2 + e * (2 * Math.PI),
                                o =
                                    -Math.PI / 2 +
                                    this.progressOffset * (2 * Math.PI);
                            this.context.save(),
                                this.context.clearRect(
                                    0,
                                    0,
                                    this.diameter,
                                    this.diameter
                                ),
                                this.context.beginPath(),
                                this.context.arc(
                                    n,
                                    i,
                                    t + 4,
                                    0,
                                    2 * Math.PI,
                                    !1
                                ),
                                (this.context.fillStyle =
                                    "rgba( 0, 0, 0, 0.4 )"),
                                this.context.fill(),
                                this.context.beginPath(),
                                this.context.arc(n, i, t, 0, 2 * Math.PI, !1),
                                (this.context.lineWidth = this.thickness),
                                (this.context.strokeStyle =
                                    "rgba( 255, 255, 255, 0.2 )"),
                                this.context.stroke(),
                                this.playing &&
                                    (this.context.beginPath(),
                                    this.context.arc(n, i, t, o, a, !1),
                                    (this.context.lineWidth = this.thickness),
                                    (this.context.strokeStyle = "#fff"),
                                    this.context.stroke()),
                                this.context.translate(n - 14, i - 14),
                                this.playing
                                    ? ((this.context.fillStyle = "#fff"),
                                      this.context.fillRect(0, 0, 10, r),
                                      this.context.fillRect(18, 0, 10, r))
                                    : (this.context.beginPath(),
                                      this.context.translate(4, 0),
                                      this.context.moveTo(0, 0),
                                      this.context.lineTo(24, 14),
                                      this.context.lineTo(0, r),
                                      (this.context.fillStyle = "#fff"),
                                      this.context.fill()),
                                this.context.restore();
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            this.canvas.addEventListener(e, t, !1);
                        },
                    },
                    {
                        key: "off",
                        value: function (e, t) {
                            this.canvas.removeEventListener(e, t, !1);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            (this.playing = !1),
                                this.canvas.parentNode &&
                                    this.container.removeChild(this.canvas);
                        },
                    },
                ]),
                e
            );
        })(),
        gg = {
            width: 960,
            height: 700,
            margin: 0.04,
            minScale: 0.2,
            maxScale: 2,
            controls: !0,
            controlsTutorial: !0,
            controlsLayout: "bottom-right",
            controlsBackArrows: "faded",
            progress: !0,
            slideNumber: !1,
            showSlideNumber: "all",
            hashOneBasedIndex: !1,
            hash: !1,
            respondToHashChanges: !0,
            jumpToSlide: !0,
            history: !1,
            keyboard: !0,
            keyboardCondition: null,
            disableLayout: !1,
            overview: !0,
            center: !0,
            touch: !0,
            loop: !1,
            rtl: !1,
            navigationMode: "default",
            shuffle: !1,
            fragments: !0,
            fragmentInURL: !0,
            embedded: !1,
            help: !0,
            pause: !0,
            showNotes: !1,
            showHiddenSlides: !1,
            autoPlayMedia: null,
            preloadIframes: null,
            autoAnimate: !0,
            autoAnimateMatcher: null,
            autoAnimateEasing: "ease",
            autoAnimateDuration: 1,
            autoAnimateUnmatched: !0,
            autoAnimateStyles: [
                "opacity",
                "color",
                "background-color",
                "padding",
                "font-size",
                "line-height",
                "letter-spacing",
                "border-width",
                "border-color",
                "border-radius",
                "outline",
                "outline-offset",
            ],
            autoSlide: 0,
            autoSlideStoppable: !0,
            autoSlideMethod: null,
            defaultTiming: null,
            mouseWheel: !1,
            previewLinks: !1,
            postMessage: !0,
            postMessageEvents: !1,
            focusBodyOnPageVisibilityChange: !0,
            transition: "slide",
            transitionSpeed: "default",
            backgroundTransition: "fade",
            parallaxBackgroundImage: "",
            parallaxBackgroundSize: "",
            parallaxBackgroundRepeat: "",
            parallaxBackgroundPosition: "",
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            view: null,
            scrollLayout: "full",
            scrollSnap: "mandatory",
            scrollProgress: "auto",
            scrollActivationWidth: 435,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            pdfSeparateFragments: !0,
            pdfPageHeightOffset: -1,
            viewDistance: 3,
            mobileViewDistance: 2,
            display: "block",
            hideInactiveCursor: !0,
            hideCursorTime: 5e3,
            sortFragmentsOnSync: !0,
            dependencies: [],
            plugins: [],
        },
        pg = "4.6.0";
    function mg(e, t) {
        arguments.length < 2 &&
            ((t = arguments[0]), (e = document.querySelector(".reveal")));
        var n,
            i,
            r,
            a,
            o,
            s = {},
            l = {},
            c = !1,
            u = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
            d = [],
            h = 1,
            f = { layout: "", overview: "" },
            v = {},
            g = "idle",
            p = 0,
            m = 0,
            y = -1,
            b = !1,
            w = new af(s),
            E = new of(s),
            S = new Uf(s),
            k = new bv(s),
            A = new tv(s),
            R = new Fv(s),
            x = new zv(s),
            L = new Uv(s),
            P = new qv(s),
            C = new Wv(s),
            T = new Kv(s),
            I = new Yv(s),
            N = new Xv(s),
            M = new Gv(s),
            O = new ig(s),
            j = new sg(s),
            B = new rg(s),
            D = new lg(s);
        function H(n) {
            if (!e)
                throw 'Unable to find presentation root (<div class="reveal">).';
            if (
                ((v.wrapper = e),
                (v.slides = e.querySelector(".slides")),
                !v.slides)
            )
                throw 'Unable to find slides container (<div class="slides">).';
            return (
                (l = Ei(Ei(Ei(Ei(Ei({}, gg), l), t), n), Yh())),
                /print-pdf/gi.test(window.location.search) &&
                    (l.view = "print"),
                F(),
                window.addEventListener("load", he, !1),
                O.load(l.plugins, l.dependencies).then(z),
                new Promise(function (e) {
                    return s.on("ready", e);
                })
            );
        }
        function F() {
            !0 === l.embedded
                ? (v.viewport = Vh(e, ".reveal-viewport") || e)
                : ((v.viewport = document.body),
                  document.documentElement.classList.add("reveal-full-page")),
                v.viewport.classList.add("reveal-viewport");
        }
        function z() {
            (c = !0),
                q(),
                _(),
                G(),
                Y(),
                X(),
                Oe(),
                $(),
                A.update(!0),
                U(),
                T.readURL(),
                setTimeout(function () {
                    v.slides.classList.remove("no-transition"),
                        v.wrapper.classList.add("ready"),
                        ie({
                            type: "ready",
                            data: { indexh: n, indexv: i, currentSlide: a },
                        });
                }, 1);
        }
        function U() {
            var e = "print" === l.view,
                t = "scroll" === l.view || "reader" === l.view;
            (e || t) &&
                (e ? Q() : B.unbind(),
                v.viewport.classList.add("loading-scroll-mode"),
                e
                    ? "complete" === document.readyState
                        ? x.activate()
                        : window.addEventListener("load", function () {
                              return x.activate();
                          })
                    : R.activate());
        }
        function q() {
            l.showHiddenSlides ||
                Fh(v.wrapper, 'section[data-visibility="hidden"]').forEach(
                    function (e) {
                        var t = e.parentNode;
                        1 === t.childElementCount && /section/i.test(t.nodeName)
                            ? t.remove()
                            : e.remove();
                    }
                );
        }
        function _() {
            v.slides.classList.add("no-transition"),
                Zh
                    ? v.wrapper.classList.add("no-hover")
                    : v.wrapper.classList.remove("no-hover"),
                A.render(),
                E.render(),
                S.render(),
                I.render(),
                N.render(),
                D.render(),
                (v.pauseOverlay = Wh(
                    v.wrapper,
                    "div",
                    "pause-overlay",
                    l.controls
                        ? '<button class="resume-button">Resume presentation</button>'
                        : null
                )),
                (v.statusElement = V()),
                v.wrapper.setAttribute("role", "application");
        }
        function V() {
            var e = v.wrapper.querySelector(".aria-status");
            return (
                e ||
                    (((e = document.createElement("div")).style.position =
                        "absolute"),
                    (e.style.height = "1px"),
                    (e.style.width = "1px"),
                    (e.style.overflow = "hidden"),
                    (e.style.clip = "rect( 1px, 1px, 1px, 1px )"),
                    e.classList.add("aria-status"),
                    e.setAttribute("aria-live", "polite"),
                    e.setAttribute("aria-atomic", "true"),
                    v.wrapper.appendChild(e)),
                e
            );
        }
        function W(e) {
            v.statusElement.textContent = e;
        }
        function K(e) {
            var t = "";
            if (3 === e.nodeType) t += e.textContent;
            else if (1 === e.nodeType) {
                var n = e.getAttribute("aria-hidden"),
                    i = "none" === window.getComputedStyle(e).display;
                "true" === n ||
                    i ||
                    Array.from(e.childNodes).forEach(function (e) {
                        t += K(e);
                    });
            }
            return "" === (t = t.trim()) ? "" : t + " ";
        }
        function Y() {
            setInterval(function () {
                ((!R.isActive() && 0 !== v.wrapper.scrollTop) ||
                    0 !== v.wrapper.scrollLeft) &&
                    ((v.wrapper.scrollTop = 0), (v.wrapper.scrollLeft = 0));
            }, 1e3);
        }
        function X() {
            document.addEventListener("fullscreenchange", yt),
                document.addEventListener("webkitfullscreenchange", yt);
        }
        function G() {
            l.postMessage && window.addEventListener("message", ft, !1);
        }
        function $(e) {
            var t = Ei({}, l);
            if (("object" === Si(e) && Hh(l, e), !1 !== s.isReady())) {
                var n = v.wrapper.querySelectorAll(fv).length;
                v.wrapper.classList.remove(t.transition),
                    v.wrapper.classList.add(l.transition),
                    v.wrapper.setAttribute(
                        "data-transition-speed",
                        l.transitionSpeed
                    ),
                    v.wrapper.setAttribute(
                        "data-background-transition",
                        l.backgroundTransition
                    ),
                    v.viewport.style.setProperty(
                        "--slide-width",
                        "string" == typeof l.width ? l.width : l.width + "px"
                    ),
                    v.viewport.style.setProperty(
                        "--slide-height",
                        "string" == typeof l.height ? l.height : l.height + "px"
                    ),
                    l.shuffle && je(),
                    zh(v.wrapper, "embedded", l.embedded),
                    zh(v.wrapper, "rtl", l.rtl),
                    zh(v.wrapper, "center", l.center),
                    !1 === l.pause && ke(),
                    l.previewLinks
                        ? (oe(), se("[data-preview-link=false]"))
                        : (se(),
                          oe(
                              "[data-preview-link]:not([data-preview-link=false])"
                          )),
                    k.reset(),
                    o && (o.destroy(), (o = null)),
                    n > 1 &&
                        l.autoSlide &&
                        l.autoSlideStoppable &&
                        ((o = new vg(v.wrapper, function () {
                            return Math.min(
                                Math.max((Date.now() - y) / p, 0),
                                1
                            );
                        })).on("click", wt),
                        (b = !1)),
                    "default" !== l.navigationMode
                        ? v.wrapper.setAttribute(
                              "data-navigation-mode",
                              l.navigationMode
                          )
                        : v.wrapper.removeAttribute("data-navigation-mode"),
                    D.configure(l, t),
                    j.configure(l, t),
                    M.configure(l, t),
                    I.configure(l, t),
                    N.configure(l, t),
                    C.configure(l, t),
                    L.configure(l, t),
                    E.configure(l, t),
                    Ne();
            }
        }
        function J() {
            window.addEventListener("resize", pt, !1),
                l.touch && B.bind(),
                l.keyboard && C.bind(),
                l.progress && N.bind(),
                l.respondToHashChanges && T.bind(),
                I.bind(),
                j.bind(),
                v.slides.addEventListener("click", gt, !1),
                v.slides.addEventListener("transitionend", vt, !1),
                v.pauseOverlay.addEventListener("click", ke, !1),
                l.focusBodyOnPageVisibilityChange &&
                    document.addEventListener("visibilitychange", mt, !1);
        }
        function Q() {
            B.unbind(),
                j.unbind(),
                C.unbind(),
                I.unbind(),
                N.unbind(),
                T.unbind(),
                window.removeEventListener("resize", pt, !1),
                v.slides.removeEventListener("click", gt, !1),
                v.slides.removeEventListener("transitionend", vt, !1),
                v.pauseOverlay.removeEventListener("click", ke, !1);
        }
        function Z() {
            Q(),
                it(),
                se(),
                D.destroy(),
                j.destroy(),
                O.destroy(),
                M.destroy(),
                I.destroy(),
                N.destroy(),
                A.destroy(),
                E.destroy(),
                S.destroy(),
                document.removeEventListener("fullscreenchange", yt),
                document.removeEventListener("webkitfullscreenchange", yt),
                document.removeEventListener("visibilitychange", mt, !1),
                window.removeEventListener("message", ft, !1),
                window.removeEventListener("load", he, !1),
                v.pauseOverlay && v.pauseOverlay.remove(),
                v.statusElement && v.statusElement.remove(),
                document.documentElement.classList.remove("reveal-full-page"),
                v.wrapper.classList.remove(
                    "ready",
                    "center",
                    "has-horizontal-slides",
                    "has-vertical-slides"
                ),
                v.wrapper.removeAttribute("data-transition-speed"),
                v.wrapper.removeAttribute("data-background-transition"),
                v.viewport.classList.remove("reveal-viewport"),
                v.viewport.style.removeProperty("--slide-width"),
                v.viewport.style.removeProperty("--slide-height"),
                v.slides.style.removeProperty("width"),
                v.slides.style.removeProperty("height"),
                v.slides.style.removeProperty("zoom"),
                v.slides.style.removeProperty("left"),
                v.slides.style.removeProperty("top"),
                v.slides.style.removeProperty("bottom"),
                v.slides.style.removeProperty("right"),
                v.slides.style.removeProperty("transform"),
                Array.from(v.wrapper.querySelectorAll(fv)).forEach(function (
                    e
                ) {
                    e.style.removeProperty("display"),
                        e.style.removeProperty("top"),
                        e.removeAttribute("hidden"),
                        e.removeAttribute("aria-hidden");
                });
        }
        function ee(t, n, i) {
            e.addEventListener(t, n, i);
        }
        function te(t, n, i) {
            e.removeEventListener(t, n, i);
        }
        function ne(e) {
            "string" == typeof e.layout && (f.layout = e.layout),
                "string" == typeof e.overview && (f.overview = e.overview),
                f.layout
                    ? qh(v.slides, f.layout + " " + f.overview)
                    : qh(v.slides, f.overview);
        }
        function ie(e) {
            var t = e.target,
                n = void 0 === t ? v.wrapper : t,
                i = e.type,
                r = e.data,
                a = e.bubbles,
                o = void 0 === a || a,
                s = document.createEvent("HTMLEvents", 1, 2);
            return (
                s.initEvent(i, o, !0),
                Hh(s, r),
                n.dispatchEvent(s),
                n === v.wrapper && ae(i),
                s
            );
        }
        function re(e) {
            ie({
                type: "slidechanged",
                data: {
                    indexh: n,
                    indexv: i,
                    previousSlide: r,
                    currentSlide: a,
                    origin: e,
                },
            });
        }
        function ae(e, t) {
            if (l.postMessageEvents && window.parent !== window.self) {
                var n = { namespace: "reveal", eventName: e, state: et() };
                Hh(n, t), window.parent.postMessage(JSON.stringify(n), "*");
            }
        }
        function oe() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
                /^(http|www)/gi.test(e.getAttribute("href")) &&
                    e.addEventListener("click", bt, !1);
            });
        }
        function se() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
                /^(http|www)/gi.test(e.getAttribute("href")) &&
                    e.removeEventListener("click", bt, !1);
            });
        }
        function le(e) {
            de(),
                (v.overlay = document.createElement("div")),
                v.overlay.classList.add("overlay"),
                v.overlay.classList.add("overlay-preview"),
                v.wrapper.appendChild(v.overlay),
                (v.overlay.innerHTML =
                    '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'
                        .concat(
                            e,
                            '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="'
                        )
                        .concat(
                            e,
                            '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'
                        )),
                v.overlay.querySelector("iframe").addEventListener(
                    "load",
                    function (e) {
                        v.overlay.classList.add("loaded");
                    },
                    !1
                ),
                v.overlay.querySelector(".close").addEventListener(
                    "click",
                    function (e) {
                        de(), e.preventDefault();
                    },
                    !1
                ),
                v.overlay.querySelector(".external").addEventListener(
                    "click",
                    function (e) {
                        de();
                    },
                    !1
                );
        }
        function ce(e) {
            "boolean" == typeof e ? (e ? ue() : de()) : v.overlay ? de() : ue();
        }
        function ue() {
            if (l.help) {
                de(),
                    (v.overlay = document.createElement("div")),
                    v.overlay.classList.add("overlay"),
                    v.overlay.classList.add("overlay-help"),
                    v.wrapper.appendChild(v.overlay);
                var e = '<p class="title">Keyboard Shortcuts</p><br/>',
                    t = C.getShortcuts(),
                    n = C.getBindings();
                for (var i in ((e += "<table><th>KEY</th><th>ACTION</th>"), t))
                    e += "<tr><td>"
                        .concat(i, "</td><td>")
                        .concat(t[i], "</td></tr>");
                for (var r in n)
                    n[r].key &&
                        n[r].description &&
                        (e += "<tr><td>"
                            .concat(n[r].key, "</td><td>")
                            .concat(n[r].description, "</td></tr>"));
                (e += "</table>"),
                    (v.overlay.innerHTML =
                        '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(
                            e,
                            "</div>\n\t\t\t\t</div>\n\t\t\t"
                        )),
                    v.overlay.querySelector(".close").addEventListener(
                        "click",
                        function (e) {
                            de(), e.preventDefault();
                        },
                        !1
                    );
            }
        }
        function de() {
            return (
                !!v.overlay &&
                (v.overlay.parentNode.removeChild(v.overlay),
                (v.overlay = null),
                !0)
            );
        }
        function he() {
            if (v.wrapper && !x.isActive()) {
                var e = v.viewport.offsetWidth,
                    t = v.viewport.offsetHeight;
                if (!l.disableLayout) {
                    Zh &&
                        !l.embedded &&
                        document.documentElement.style.setProperty(
                            "--vh",
                            0.01 * window.innerHeight + "px"
                        );
                    var n = R.isActive() ? ve(e, t) : ve(),
                        i = h;
                    fe(l.width, l.height),
                        (v.slides.style.width = n.width + "px"),
                        (v.slides.style.height = n.height + "px"),
                        (h = Math.min(
                            n.presentationWidth / n.width,
                            n.presentationHeight / n.height
                        )),
                        (h = Math.max(h, l.minScale)),
                        1 === (h = Math.min(h, l.maxScale)) || R.isActive()
                            ? ((v.slides.style.zoom = ""),
                              (v.slides.style.left = ""),
                              (v.slides.style.top = ""),
                              (v.slides.style.bottom = ""),
                              (v.slides.style.right = ""),
                              ne({ layout: "" }))
                            : ((v.slides.style.zoom = ""),
                              (v.slides.style.left = "50%"),
                              (v.slides.style.top = "50%"),
                              (v.slides.style.bottom = "auto"),
                              (v.slides.style.right = "auto"),
                              ne({
                                  layout:
                                      "translate(-50%, -50%) scale(" + h + ")",
                              }));
                    for (
                        var r = Array.from(v.wrapper.querySelectorAll(fv)),
                            a = 0,
                            o = r.length;
                        a < o;
                        a++
                    ) {
                        var s = r[a];
                        "none" !== s.style.display &&
                            (l.center || s.classList.contains("center")
                                ? s.classList.contains("stack")
                                    ? (s.style.top = 0)
                                    : (s.style.top =
                                          Math.max(
                                              (n.height - s.scrollHeight) / 2,
                                              0
                                          ) + "px")
                                : (s.style.top = ""));
                    }
                    i !== h &&
                        ie({
                            type: "resize",
                            data: { oldScale: i, scale: h, size: n },
                        }),
                        "number" == typeof l.scrollActivationWidth &&
                            "scroll" !== l.view &&
                            (n.presentationWidth > 0 &&
                            n.presentationWidth <= l.scrollActivationWidth
                                ? R.isActive() || R.activate()
                                : R.isActive() && R.deactivate());
                }
                v.viewport.style.setProperty("--slide-scale", h),
                    v.viewport.style.setProperty("--viewport-width", e + "px"),
                    v.viewport.style.setProperty("--viewport-height", t + "px"),
                    R.layout(),
                    N.update(),
                    A.updateParallax(),
                    P.isActive() && P.update();
            }
        }
        function fe(e, t) {
            Fh(v.slides, "section > .stretch, section > .r-stretch").forEach(
                function (n) {
                    var i = Xh(n, t);
                    if (/(img|video)/gi.test(n.nodeName)) {
                        var r = n.naturalWidth || n.videoWidth,
                            a = n.naturalHeight || n.videoHeight,
                            o = Math.min(e / r, i / a);
                        (n.style.width = r * o + "px"),
                            (n.style.height = a * o + "px");
                    } else
                        (n.style.width = e + "px"), (n.style.height = i + "px");
                }
            );
        }
        function ve(e, t) {
            var n = l.width,
                i = l.height;
            l.disableLayout &&
                ((n = v.slides.offsetWidth), (i = v.slides.offsetHeight));
            var r = {
                width: n,
                height: i,
                presentationWidth: e || v.wrapper.offsetWidth,
                presentationHeight: t || v.wrapper.offsetHeight,
            };
            return (
                (r.presentationWidth -= r.presentationWidth * l.margin),
                (r.presentationHeight -= r.presentationHeight * l.margin),
                "string" == typeof r.width &&
                    /%$/.test(r.width) &&
                    (r.width =
                        (parseInt(r.width, 10) / 100) * r.presentationWidth),
                "string" == typeof r.height &&
                    /%$/.test(r.height) &&
                    (r.height =
                        (parseInt(r.height, 10) / 100) * r.presentationHeight),
                r
            );
        }
        function ge(e, t) {
            "object" === Si(e) &&
                "function" == typeof e.setAttribute &&
                e.setAttribute("data-previous-indexv", t || 0);
        }
        function pe(e) {
            if (
                "object" === Si(e) &&
                "function" == typeof e.setAttribute &&
                e.classList.contains("stack")
            ) {
                var t = e.hasAttribute("data-start-indexv")
                    ? "data-start-indexv"
                    : "data-previous-indexv";
                return parseInt(e.getAttribute(t) || 0, 10);
            }
            return 0;
        }
        function me() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a;
            return (
                e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
            );
        }
        function ye() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a;
            return (
                e.classList.contains(".stack") ||
                null !== e.querySelector("section")
            );
        }
        function be() {
            return !(!a || !me(a)) && !a.nextElementSibling;
        }
        function we() {
            return 0 === n && 0 === i;
        }
        function Ee() {
            return (
                !!a &&
                !a.nextElementSibling &&
                (!me(a) || !a.parentNode.nextElementSibling)
            );
        }
        function Se() {
            if (l.pause) {
                var e = v.wrapper.classList.contains("paused");
                it(),
                    v.wrapper.classList.add("paused"),
                    !1 === e && ie({ type: "paused" });
            }
        }
        function ke() {
            var e = v.wrapper.classList.contains("paused");
            v.wrapper.classList.remove("paused"),
                nt(),
                e && ie({ type: "resumed" });
        }
        function Ae(e) {
            "boolean" == typeof e ? (e ? Se() : ke()) : Re() ? ke() : Se();
        }
        function Re() {
            return v.wrapper.classList.contains("paused");
        }
        function xe(e) {
            "boolean" == typeof e
                ? e
                    ? S.show()
                    : S.hide()
                : S.isVisible()
                ? S.hide()
                : S.show();
        }
        function Le(e) {
            "boolean" == typeof e ? (e ? at() : rt()) : b ? at() : rt();
        }
        function Pe() {
            return !(!p || b);
        }
        function Ce(e, t, o, s) {
            if (
                !ie({
                    type: "beforeslidechange",
                    data: {
                        indexh: void 0 === e ? n : e,
                        indexv: void 0 === t ? i : t,
                        origin: s,
                    },
                }).defaultPrevented
            ) {
                r = a;
                var c = v.wrapper.querySelectorAll(vv);
                if (R.isActive()) {
                    var u = R.getSlideByIndices(e, t);
                    u && R.scrollToSlide(u);
                } else if (0 !== c.length) {
                    void 0 !== t || P.isActive() || (t = pe(c[e])),
                        r &&
                            r.parentNode &&
                            r.parentNode.classList.contains("stack") &&
                            ge(r.parentNode, i);
                    var h = d.concat();
                    d.length = 0;
                    var f = n || 0,
                        p = i || 0;
                    (n = Be(vv, void 0 === e ? n : e)),
                        (i = Be(gv, void 0 === t ? i : t));
                    var m = n !== f || i !== p;
                    m || (r = null);
                    var y = c[n],
                        b = y.querySelectorAll("section");
                    a = b[i] || y;
                    var S = !1;
                    m &&
                        r &&
                        a &&
                        !P.isActive() &&
                        ((g = "running"),
                        (S = Te(r, a, f, p)) &&
                            v.slides.classList.add(
                                "disable-slide-transitions"
                            )),
                        Fe(),
                        he(),
                        P.isActive() && P.update(),
                        void 0 !== o && L.goto(o),
                        r &&
                            r !== a &&
                            (r.classList.remove("present"),
                            r.setAttribute("aria-hidden", "true"),
                            we() &&
                                setTimeout(function () {
                                    Ye().forEach(function (e) {
                                        ge(e, 0);
                                    });
                                }, 0));
                    e: for (var x = 0, C = d.length; x < C; x++) {
                        for (var M = 0; M < h.length; M++)
                            if (h[M] === d[x]) {
                                h.splice(M, 1);
                                continue e;
                            }
                        v.viewport.classList.add(d[x]), ie({ type: d[x] });
                    }
                    for (; h.length; ) v.viewport.classList.remove(h.pop());
                    m && re(s),
                        (!m && r) ||
                            (w.stopEmbeddedContent(r),
                            w.startEmbeddedContent(a)),
                        requestAnimationFrame(function () {
                            W(K(a));
                        }),
                        N.update(),
                        I.update(),
                        D.update(),
                        A.update(),
                        A.updateParallax(),
                        E.update(),
                        L.update(),
                        T.writeURL(),
                        nt(),
                        S &&
                            (setTimeout(function () {
                                v.slides.classList.remove(
                                    "disable-slide-transitions"
                                );
                            }, 0),
                            l.autoAnimate && k.run(r, a));
                }
            }
        }
        function Te(e, t, r, a) {
            return (
                e.hasAttribute("data-auto-animate") &&
                t.hasAttribute("data-auto-animate") &&
                e.getAttribute("data-auto-animate-id") ===
                    t.getAttribute("data-auto-animate-id") &&
                !(n > r || i > a ? t : e).hasAttribute(
                    "data-auto-animate-restart"
                )
            );
        }
        function Ie(e, t, o) {
            var s = n || 0;
            (n = t), (i = o);
            var c = a !== e;
            (r = a),
                (a = e) && r && l.autoAnimate && Te(r, a, s, i) && k.run(r, a),
                c &&
                    (r &&
                        (w.stopEmbeddedContent(r),
                        w.stopEmbeddedContent(r.slideBackgroundElement)),
                    w.startEmbeddedContent(a),
                    w.startEmbeddedContent(a.slideBackgroundElement)),
                requestAnimationFrame(function () {
                    W(K(a));
                }),
                re();
        }
        function Ne() {
            Q(),
                J(),
                he(),
                (p = l.autoSlide),
                nt(),
                A.create(),
                T.writeURL(),
                !0 === l.sortFragmentsOnSync && L.sortAll(),
                I.update(),
                N.update(),
                Fe(),
                D.update(),
                D.updateVisibility(),
                A.update(!0),
                E.update(),
                w.formatEmbeddedContent(),
                !1 === l.autoPlayMedia
                    ? w.stopEmbeddedContent(a, { unloadIframes: !1 })
                    : w.startEmbeddedContent(a),
                P.isActive() && P.layout();
        }
        function Me() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a;
            A.sync(e), L.sync(e), w.load(e), A.update(), D.update();
        }
        function Oe() {
            We().forEach(function (e) {
                Fh(e, "section").forEach(function (e, t) {
                    t > 0 &&
                        (e.classList.remove("present"),
                        e.classList.remove("past"),
                        e.classList.add("future"),
                        e.setAttribute("aria-hidden", "true"));
                });
            });
        }
        function je() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : We();
            e.forEach(function (t, n) {
                var i = e[Math.floor(Math.random() * e.length)];
                i.parentNode === t.parentNode &&
                    t.parentNode.insertBefore(t, i);
                var r = t.querySelectorAll("section");
                r.length && je(r);
            });
        }
        function Be(e, t) {
            var n = Fh(v.wrapper, e),
                i = n.length,
                r = R.isActive() || x.isActive(),
                a = !1,
                o = !1;
            if (i) {
                l.loop &&
                    (t >= i && (a = !0),
                    (t %= i) < 0 && ((t = i + t), (o = !0))),
                    (t = Math.max(Math.min(t, i - 1), 0));
                for (var s = 0; s < i; s++) {
                    var c = n[s],
                        u = l.rtl && !me(c);
                    c.classList.remove("past"),
                        c.classList.remove("present"),
                        c.classList.remove("future"),
                        c.setAttribute("hidden", ""),
                        c.setAttribute("aria-hidden", "true"),
                        c.querySelector("section") && c.classList.add("stack"),
                        r
                            ? c.classList.add("present")
                            : s < t
                            ? (c.classList.add(u ? "future" : "past"),
                              l.fragments && De(c))
                            : s > t
                            ? (c.classList.add(u ? "past" : "future"),
                              l.fragments && He(c))
                            : s === t &&
                              l.fragments &&
                              (a ? He(c) : o && De(c));
                }
                var h = n[t],
                    f = h.classList.contains("present");
                h.classList.add("present"),
                    h.removeAttribute("hidden"),
                    h.removeAttribute("aria-hidden"),
                    f || ie({ target: h, type: "visible", bubbles: !1 });
                var g = h.getAttribute("data-state");
                g && (d = d.concat(g.split(" ")));
            } else t = 0;
            return t;
        }
        function De(e) {
            Fh(e, ".fragment").forEach(function (e) {
                e.classList.add("visible"),
                    e.classList.remove("current-fragment");
            });
        }
        function He(e) {
            Fh(e, ".fragment.visible").forEach(function (e) {
                e.classList.remove("visible", "current-fragment");
            });
        }
        function Fe() {
            var e,
                t = We(),
                r = t.length;
            if (r && void 0 !== n) {
                var a = P.isActive() ? 10 : l.viewDistance;
                Zh && (a = P.isActive() ? 6 : l.mobileViewDistance),
                    x.isActive() && (a = Number.MAX_VALUE);
                for (var o = 0; o < r; o++) {
                    var s = t[o],
                        c = Fh(s, "section"),
                        u = c.length;
                    if (
                        ((e = Math.abs((n || 0) - o) || 0),
                        l.loop && (e = Math.abs(((n || 0) - o) % (r - a)) || 0),
                        e < a ? w.load(s) : w.unload(s),
                        u)
                    )
                        for (var d = pe(s), h = 0; h < u; h++) {
                            var f = c[h];
                            e +
                                (o === (n || 0)
                                    ? Math.abs((i || 0) - h)
                                    : Math.abs(h - d)) <
                            a
                                ? w.load(f)
                                : w.unload(f);
                        }
                }
                Ge()
                    ? v.wrapper.classList.add("has-vertical-slides")
                    : v.wrapper.classList.remove("has-vertical-slides"),
                    Xe()
                        ? v.wrapper.classList.add("has-horizontal-slides")
                        : v.wrapper.classList.remove("has-horizontal-slides");
            }
        }
        function ze() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.includeFragments,
                r = void 0 !== t && t,
                a = v.wrapper.querySelectorAll(vv),
                o = v.wrapper.querySelectorAll(gv),
                s = {
                    left: n > 0,
                    right: n < a.length - 1,
                    up: i > 0,
                    down: i < o.length - 1,
                };
            if (
                (l.loop &&
                    (a.length > 1 && ((s.left = !0), (s.right = !0)),
                    o.length > 1 && ((s.up = !0), (s.down = !0))),
                a.length > 1 &&
                    "linear" === l.navigationMode &&
                    ((s.right = s.right || s.down), (s.left = s.left || s.up)),
                !0 === r)
            ) {
                var c = L.availableRoutes();
                (s.left = s.left || c.prev),
                    (s.up = s.up || c.prev),
                    (s.down = s.down || c.next),
                    (s.right = s.right || c.next);
            }
            if (l.rtl) {
                var u = s.left;
                (s.left = s.right), (s.right = u);
            }
            return s;
        }
        function Ue() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : a,
                t = We(),
                n = 0;
            e: for (var i = 0; i < t.length; i++) {
                for (
                    var r = t[i], o = r.querySelectorAll("section"), s = 0;
                    s < o.length;
                    s++
                ) {
                    if (o[s] === e) break e;
                    "uncounted" !== o[s].dataset.visibility && n++;
                }
                if (r === e) break;
                !1 === r.classList.contains("stack") &&
                    "uncounted" !== r.dataset.visibility &&
                    n++;
            }
            return n;
        }
        function qe() {
            var e = Je(),
                t = Ue();
            if (a) {
                var n = a.querySelectorAll(".fragment");
                if (n.length > 0) {
                    t +=
                        (a.querySelectorAll(".fragment.visible").length /
                            n.length) *
                        0.9;
                }
            }
            return Math.min(t / (e - 1), 1);
        }
        function _e(e) {
            var t,
                r = n,
                o = i;
            if (e)
                if (R.isActive())
                    (r = parseInt(e.getAttribute("data-index-h"), 10)),
                        e.getAttribute("data-index-v") &&
                            (o = parseInt(e.getAttribute("data-index-v"), 10));
                else {
                    var s = me(e),
                        l = s ? e.parentNode : e,
                        c = We();
                    (r = Math.max(c.indexOf(l), 0)),
                        (o = void 0),
                        s &&
                            (o = Math.max(
                                Fh(e.parentNode, "section").indexOf(e),
                                0
                            ));
                }
            if (!e && a && a.querySelectorAll(".fragment").length > 0) {
                var u = a.querySelector(".current-fragment");
                t =
                    u && u.hasAttribute("data-fragment-index")
                        ? parseInt(u.getAttribute("data-fragment-index"), 10)
                        : a.querySelectorAll(".fragment.visible").length - 1;
            }
            return { h: r, v: o, f: t };
        }
        function Ve() {
            return Fh(
                v.wrapper,
                fv + ':not(.stack):not([data-visibility="uncounted"])'
            );
        }
        function We() {
            return Fh(v.wrapper, vv);
        }
        function Ke() {
            return Fh(v.wrapper, ".slides>section>section");
        }
        function Ye() {
            return Fh(v.wrapper, vv + ".stack");
        }
        function Xe() {
            return We().length > 1;
        }
        function Ge() {
            return Ke().length > 1;
        }
        function $e() {
            return Ve().map(function (e) {
                for (var t = {}, n = 0; n < e.attributes.length; n++) {
                    var i = e.attributes[n];
                    t[i.name] = i.value;
                }
                return t;
            });
        }
        function Je() {
            return Ve().length;
        }
        function Qe(e, t) {
            var n = We()[e],
                i = n && n.querySelectorAll("section");
            return i && i.length && "number" == typeof t
                ? i
                    ? i[t]
                    : void 0
                : n;
        }
        function Ze(e, t) {
            var n = "number" == typeof e ? Qe(e, t) : e;
            if (n) return n.slideBackgroundElement;
        }
        function et() {
            var e = _e();
            return {
                indexh: e.h,
                indexv: e.v,
                indexf: e.f,
                paused: Re(),
                overview: P.isActive(),
            };
        }
        function tt(e) {
            if ("object" === Si(e)) {
                Ce(Uh(e.indexh), Uh(e.indexv), Uh(e.indexf));
                var t = Uh(e.paused),
                    n = Uh(e.overview);
                "boolean" == typeof t && t !== Re() && Ae(t),
                    "boolean" == typeof n && n !== P.isActive() && P.toggle(n);
            }
        }
        function nt() {
            if ((it(), a && !1 !== l.autoSlide)) {
                var e = a.querySelector(".current-fragment[data-autoslide]"),
                    t = e ? e.getAttribute("data-autoslide") : null,
                    n = a.parentNode
                        ? a.parentNode.getAttribute("data-autoslide")
                        : null,
                    i = a.getAttribute("data-autoslide");
                t
                    ? (p = parseInt(t, 10))
                    : i
                    ? (p = parseInt(i, 10))
                    : n
                    ? (p = parseInt(n, 10))
                    : ((p = l.autoSlide),
                      0 === a.querySelectorAll(".fragment").length &&
                          Fh(a, "video, audio").forEach(function (e) {
                              e.hasAttribute("data-autoplay") &&
                                  p &&
                                  (1e3 * e.duration) / e.playbackRate > p &&
                                  (p =
                                      (1e3 * e.duration) / e.playbackRate +
                                      1e3);
                          })),
                    !p ||
                        b ||
                        Re() ||
                        P.isActive() ||
                        (Ee() && !L.availableRoutes().next && !0 !== l.loop) ||
                        ((m = setTimeout(function () {
                            "function" == typeof l.autoSlideMethod
                                ? l.autoSlideMethod()
                                : dt(),
                                nt();
                        }, p)),
                        (y = Date.now())),
                    o && o.setPlaying(-1 !== m);
            }
        }
        function it() {
            clearTimeout(m), (m = -1);
        }
        function rt() {
            p &&
                !b &&
                ((b = !0),
                ie({ type: "autoslidepaused" }),
                clearTimeout(m),
                o && o.setPlaying(!1));
        }
        function at() {
            p && b && ((b = !1), ie({ type: "autoslideresumed" }), nt());
        }
        function ot() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.skipFragments,
                r = void 0 !== t && t;
            (u.hasNavigatedHorizontally = !0),
                l.rtl
                    ? (P.isActive() || r || !1 === L.next()) &&
                      ze().left &&
                      Ce(n + 1, "grid" === l.navigationMode ? i : void 0)
                    : (P.isActive() || r || !1 === L.prev()) &&
                      ze().left &&
                      Ce(n - 1, "grid" === l.navigationMode ? i : void 0);
        }
        function st() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.skipFragments,
                r = void 0 !== t && t;
            (u.hasNavigatedHorizontally = !0),
                l.rtl
                    ? (P.isActive() || r || !1 === L.prev()) &&
                      ze().right &&
                      Ce(n - 1, "grid" === l.navigationMode ? i : void 0)
                    : (P.isActive() || r || !1 === L.next()) &&
                      ze().right &&
                      Ce(n + 1, "grid" === l.navigationMode ? i : void 0);
        }
        function lt() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.skipFragments,
                r = void 0 !== t && t;
            (P.isActive() || r || !1 === L.prev()) && ze().up && Ce(n, i - 1);
        }
        function ct() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.skipFragments,
                r = void 0 !== t && t;
            (u.hasNavigatedVertically = !0),
                (P.isActive() || r || !1 === L.next()) &&
                    ze().down &&
                    Ce(n, i + 1);
        }
        function ut() {
            var e,
                t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                i = t.skipFragments,
                r = void 0 !== i && i;
            if (r || !1 === L.prev())
                if (ze().up) lt({ skipFragments: r });
                else if (
                    (e = l.rtl
                        ? Fh(v.wrapper, vv + ".future").pop()
                        : Fh(v.wrapper, vv + ".past").pop()) &&
                    e.classList.contains("stack")
                ) {
                    var a = e.querySelectorAll("section").length - 1 || void 0,
                        o = n - 1;
                    Ce(o, a);
                } else ot({ skipFragments: r });
        }
        function dt() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = e.skipFragments,
                n = void 0 !== t && t;
            if (
                ((u.hasNavigatedHorizontally = !0),
                (u.hasNavigatedVertically = !0),
                n || !1 === L.next())
            ) {
                var i = ze();
                i.down && i.right && l.loop && be() && (i.down = !1),
                    i.down
                        ? ct({ skipFragments: n })
                        : l.rtl
                        ? ot({ skipFragments: n })
                        : st({ skipFragments: n });
            }
        }
        function ht(e) {
            l.autoSlideStoppable && rt();
        }
        function ft(e) {
            var t = e.data;
            if (
                "string" == typeof t &&
                "{" === t.charAt(0) &&
                "}" === t.charAt(t.length - 1) &&
                (t = JSON.parse(t)).method &&
                "function" == typeof s[t.method]
            )
                if (!1 === pv.test(t.method)) {
                    var n = s[t.method].apply(s, t.args);
                    ae("callback", { method: t.method, result: n });
                } else
                    console.warn(
                        'reveal.js: "' +
                            t.method +
                            '" is is blacklisted from the postMessage API'
                    );
        }
        function vt(e) {
            "running" === g &&
                /section/gi.test(e.target.nodeName) &&
                ((g = "idle"),
                ie({
                    type: "slidetransitionend",
                    data: {
                        indexh: n,
                        indexv: i,
                        previousSlide: r,
                        currentSlide: a,
                    },
                }));
        }
        function gt(e) {
            var t = Vh(e.target, 'a[href^="#"]');
            if (t) {
                var n = t.getAttribute("href"),
                    i = T.getIndicesFromHash(n);
                i && (s.slide(i.h, i.v, i.f), e.preventDefault());
            }
        }
        function pt(e) {
            he();
        }
        function mt(e) {
            !1 === document.hidden &&
                document.activeElement !== document.body &&
                ("function" == typeof document.activeElement.blur &&
                    document.activeElement.blur(),
                document.body.focus());
        }
        function yt(e) {
            (document.fullscreenElement || document.webkitFullscreenElement) ===
                v.wrapper &&
                (e.stopImmediatePropagation(),
                setTimeout(function () {
                    s.layout(), s.focus.focus();
                }, 1));
        }
        function bt(e) {
            if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                var t = e.currentTarget.getAttribute("href");
                t && (le(t), e.preventDefault());
            }
        }
        function wt(e) {
            Ee() && !1 === l.loop ? (Ce(0, 0), at()) : b ? at() : rt();
        }
        var Et = {
            VERSION: pg,
            initialize: H,
            configure: $,
            destroy: Z,
            sync: Ne,
            syncSlide: Me,
            syncFragments: L.sync.bind(L),
            slide: Ce,
            left: ot,
            right: st,
            up: lt,
            down: ct,
            prev: ut,
            next: dt,
            navigateLeft: ot,
            navigateRight: st,
            navigateUp: lt,
            navigateDown: ct,
            navigatePrev: ut,
            navigateNext: dt,
            navigateFragment: L.goto.bind(L),
            prevFragment: L.prev.bind(L),
            nextFragment: L.next.bind(L),
            on: ee,
            off: te,
            addEventListener: ee,
            removeEventListener: te,
            layout: he,
            shuffle: je,
            availableRoutes: ze,
            availableFragments: L.availableRoutes.bind(L),
            toggleHelp: ce,
            toggleOverview: P.toggle.bind(P),
            toggleScrollView: R.toggle.bind(R),
            togglePause: Ae,
            toggleAutoSlide: Le,
            toggleJumpToSlide: xe,
            isFirstSlide: we,
            isLastSlide: Ee,
            isLastVerticalSlide: be,
            isVerticalSlide: me,
            isVerticalStack: ye,
            isPaused: Re,
            isAutoSliding: Pe,
            isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
            isOverview: P.isActive.bind(P),
            isFocused: j.isFocused.bind(j),
            isScrollView: R.isActive.bind(R),
            isPrintView: x.isActive.bind(x),
            isReady: function () {
                return c;
            },
            loadSlide: w.load.bind(w),
            unloadSlide: w.unload.bind(w),
            startEmbeddedContent: function () {
                return w.startEmbeddedContent(a);
            },
            stopEmbeddedContent: function () {
                return w.stopEmbeddedContent(a, { unloadIframes: !1 });
            },
            showPreview: le,
            hidePreview: de,
            addEventListeners: J,
            removeEventListeners: Q,
            dispatchEvent: ie,
            getState: et,
            setState: tt,
            getProgress: qe,
            getIndices: _e,
            getSlidesAttributes: $e,
            getSlidePastCount: Ue,
            getTotalSlides: Je,
            getSlide: Qe,
            getPreviousSlide: function () {
                return r;
            },
            getCurrentSlide: function () {
                return a;
            },
            getSlideBackground: Ze,
            getSlideNotes: D.getSlideNotes.bind(D),
            getSlides: Ve,
            getHorizontalSlides: We,
            getVerticalSlides: Ke,
            hasHorizontalSlides: Xe,
            hasVerticalSlides: Ge,
            hasNavigatedHorizontally: function () {
                return u.hasNavigatedHorizontally;
            },
            hasNavigatedVertically: function () {
                return u.hasNavigatedVertically;
            },
            shouldAutoAnimateBetween: Te,
            addKeyBinding: C.addKeyBinding.bind(C),
            removeKeyBinding: C.removeKeyBinding.bind(C),
            triggerKey: C.triggerKey.bind(C),
            registerKeyboardShortcut: C.registerKeyboardShortcut.bind(C),
            getComputedSlideSize: ve,
            setCurrentScrollPage: Ie,
            getScale: function () {
                return h;
            },
            getConfig: function () {
                return l;
            },
            getQueryHash: Yh,
            getSlidePath: T.getHash.bind(T),
            getRevealElement: function () {
                return e;
            },
            getSlidesElement: function () {
                return v.slides;
            },
            getViewportElement: function () {
                return v.viewport;
            },
            getBackgroundsElement: function () {
                return A.element;
            },
            registerPlugin: O.registerPlugin.bind(O),
            hasPlugin: O.hasPlugin.bind(O),
            getPlugin: O.getPlugin.bind(O),
            getPlugins: O.getRegisteredPlugins.bind(O),
        };
        return (
            Hh(
                s,
                Ei(
                    Ei({}, Et),
                    {},
                    {
                        announceStatus: W,
                        getStatusText: K,
                        focus: j,
                        scroll: R,
                        progress: N,
                        controls: I,
                        location: T,
                        overview: P,
                        fragments: L,
                        backgrounds: A,
                        slideContent: w,
                        slideNumber: E,
                        onUserInput: ht,
                        closeOverlay: de,
                        updateSlidesVisibility: Fe,
                        layoutSlideContents: fe,
                        transformSlides: ne,
                        cueAutoSlide: nt,
                        cancelAutoSlide: it,
                    }
                )
            ),
            Et
        );
    }
    var yg = mg,
        bg = [];
    return (
        (yg.initialize = function (e) {
            return (
                Object.assign(yg, new mg(document.querySelector(".reveal"), e)),
                bg.map(function (e) {
                    return e(yg);
                }),
                yg.initialize()
            );
        }),
        [
            "configure",
            "on",
            "off",
            "addEventListener",
            "removeEventListener",
            "registerPlugin",
        ].forEach(function (e) {
            yg[e] = function () {
                for (
                    var t = arguments.length, n = new Array(t), i = 0;
                    i < t;
                    i++
                )
                    n[i] = arguments[i];
                bg.push(function (t) {
                    var i;
                    return (i = t[e]).call.apply(i, [null].concat(n));
                });
            };
        }),
        (yg.isReady = function () {
            return !1;
        }),
        (yg.VERSION = pg),
        yg
    );
});
//# sourceMappingURL=reveal.js.map
