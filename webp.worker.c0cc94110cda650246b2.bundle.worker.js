!(function (t) {
  var e = {};
  function a(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = t),
    (a.c = e),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = ""),
    a((a.s = 1));
})([
  function (t, e, a) {
    "use strict";
    !(function (t) {
      if (t.TextEncoder && t.TextDecoder) return !1;
      function e(t = "utf-8") {
        if ("utf-8" !== t)
          throw new RangeError(
            `Failed to construct 'TextEncoder': The encoding label provided ('${t}') is invalid.`
          );
      }
      function a(t = "utf-8", e = { fatal: !1 }) {
        if ("utf-8" !== t)
          throw new RangeError(
            `Failed to construct 'TextDecoder': The encoding label provided ('${t}') is invalid.`
          );
        if (e.fatal)
          throw new Error(
            "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
          );
      }
      Object.defineProperty(e.prototype, "encoding", { value: "utf-8" }),
        (e.prototype.encode = function (t, e = { stream: !1 }) {
          if (e.stream)
            throw new Error(
              "Failed to encode: the 'stream' option is unsupported."
            );
          let a = 0;
          const n = t.length;
          let r = 0,
            i = Math.max(32, n + (n >> 1) + 7),
            s = new Uint8Array((i >> 3) << 3);
          for (; a < n; ) {
            let e = t.charCodeAt(a++);
            if (e >= 55296 && e <= 56319) {
              if (a < n) {
                const n = t.charCodeAt(a);
                56320 == (64512 & n) &&
                  (++a, (e = ((1023 & e) << 10) + (1023 & n) + 65536));
              }
              if (e >= 55296 && e <= 56319) continue;
            }
            if (r + 4 > s.length) {
              (i += 8), (i *= 1 + (a / t.length) * 2), (i = (i >> 3) << 3);
              const e = new Uint8Array(i);
              e.set(s), (s = e);
            }
            if (0 != (4294967168 & e)) {
              if (0 == (4294965248 & e)) s[r++] = ((e >> 6) & 31) | 192;
              else if (0 == (4294901760 & e))
                (s[r++] = ((e >> 12) & 15) | 224),
                  (s[r++] = ((e >> 6) & 63) | 128);
              else {
                if (0 != (4292870144 & e)) continue;
                (s[r++] = ((e >> 18) & 7) | 240),
                  (s[r++] = ((e >> 12) & 63) | 128),
                  (s[r++] = ((e >> 6) & 63) | 128);
              }
              s[r++] = (63 & e) | 128;
            } else s[r++] = e;
          }
          return s.slice(0, r);
        }),
        Object.defineProperty(a.prototype, "encoding", { value: "utf-8" }),
        Object.defineProperty(a.prototype, "fatal", { value: !1 }),
        Object.defineProperty(a.prototype, "ignoreBOM", { value: !1 }),
        (a.prototype.decode = function (t, e = { stream: !1 }) {
          if (e.stream)
            throw new Error(
              "Failed to decode: the 'stream' option is unsupported."
            );
          const a = new Uint8Array(t);
          let n = 0;
          const r = a.length,
            i = [];
          for (; n < r; ) {
            const t = a[n++];
            if (0 === t) break;
            if (0 == (128 & t)) i.push(t);
            else if (192 == (224 & t)) {
              const e = 63 & a[n++];
              i.push(((31 & t) << 6) | e);
            } else if (224 == (240 & t)) {
              const e = 63 & a[n++],
                r = 63 & a[n++];
              i.push(((31 & t) << 12) | (e << 6) | r);
            } else if (240 == (248 & t)) {
              let e =
                ((7 & t) << 18) |
                ((63 & a[n++]) << 12) |
                ((63 & a[n++]) << 6) |
                (63 & a[n++]);
              e > 65535 &&
                ((e -= 65536),
                i.push(((e >>> 10) & 1023) | 55296),
                (e = 56320 | (1023 & e))),
                i.push(e);
            }
          }
          return String.fromCharCode.apply(null, i);
        }),
        (t.TextEncoder = e),
        (t.TextDecoder = a);
    })(
      "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : this
    );
  },
  function (t, e, a) {
    "use strict";
    let n, r;
    a.r(e);
    const i = null;
    function s(t) {
      return JSON.parse(JSON.stringify(t));
    }
    function o(t, e, a, r, i) {
      for (n = 0; n < i; ++n) t[e + n] = a[r + n];
    }
    function l(t) {
      const e = [],
        a = t.length;
      let n;
      for (n = 0; n < a; ++n) e.push(t[n]);
      return e;
    }
    function f(t, e) {
      const a = [];
      let n;
      for (a.push(s(t)), n = 0; n < e; ++n) a.push(s(t));
      return a.push(0), a;
    }
    function h(t, e) {
      const a = [];
      let n;
      for (n = 0; n < e; ++n) a.push(t);
      return a.push(0), a;
    }
    function c(t, e, a, n, r) {
      let i;
      for (i = 0; i < r; i++) t[e + i] = a[n + i];
    }
    function d(t, e, a, n) {
      let r;
      for (r = 0; r < n; ++r) t[e + r] = a;
    }
    function u(t, e, a, n) {
      let r,
        i = "";
      for (r = 0; r < n; ++r) i += String.fromCharCode(t[e + r]);
      return a == i ? 0 : 1;
    }
    function _(t, e) {
      let a;
      const n = [];
      for (a = 0; a < t; ++a) n.push(e);
      return n;
    }
    function b(t, e) {
      let a;
      const n = [];
      for (a = 0; a < t; ++a) n.push(s(e));
      return n;
    }
    function w(t, e) {
      let a;
      for (a = t.length - 1; a >= 0; --a) e = s(_(t[a], e));
      return e;
    }
    function p(t) {
      if (!t) throw Error("assert :P");
    }
    const g = function () {
      function t(t) {
        return t == Be || t == Le || t == Ce || t == Fe;
      }
      function e(t) {
        return m(t, 1);
      }
      function a(t, e) {
        const a = 1 + (((t.la - 1) * e) >> 8),
          n = a << 8;
        let r = 0;
        for (
          t.Z >= n ? ((r = 1), (t.la -= a), (t.Z -= n)) : ((r = 0), (t.la = a));
          t.la < 128;

        )
          (t.Z <<= 1),
            (t.la <<= 1),
            8 == ++t.gc &&
              ((t.gc = 0), t.bc && ((t.Z += t.qa[t.Ia++]), t.bc--));
        return r;
      }
      function g(t, e, a, n) {
        (n -= a) >= 2
          ? ((t.Z = (e[a + 0] << 8) | e[a + 1]),
            (t.qa = e),
            (t.Ia = a + 2),
            (t.bc = n - 2))
          : ((t.Z = 0), (t.qa = i), (t.bc = 0)),
          (t.la = 255),
          (t.gc = 0);
      }
      function m(t, e) {
        var n = 0,
          r = 0;
        for (r = e - 1; r >= 0; r--) n |= a(t, 128) << r;
        return n;
      }
      function v(t, a) {
        const n = m(t, a);
        return e(t) ? -n : n;
      }
      function k(t, e, a, n) {
        let r = 0;
        for (
          p(t != i),
            p(e != i),
            p(n < 4294967288),
            t.qa = e,
            t.Ia = a,
            t.ya = n,
            t.T = 0,
            t.Q = 0,
            t.g = 0,
            t.L = 0,
            r = t.fa = 0;
          r < 4 && r < t.ya;
          ++r
        )
          (t.T |= t.qa[t.Ia + t.Q] << (8 * r)), ++t.Q;
      }
      function y(t) {
        for (; t.g >= 8 && t.Q < t.ya; )
          (t.T >>>= 8),
            (t.T += (t.qa[t.Ia + t.Q] << 24) >>> 0),
            ++t.Q,
            (t.g -= 8);
      }
      function A(t) {
        t.g >= 8 && y(t), t.Q == t.ya && 32 == t.g && (t.L = 1);
      }
      function E(t, e) {
        let a = 0;
        if ((p(e >= 0), !t.L && e < ia)) {
          if (t.Q == t.ya && t.g + e >= 32 && ((t.L = 1), t.g + e > 32))
            return a;
          (a = (t.T >> t.g) & sa[e]), (t.g += e), t.g >= 8 && t.g >= 8 && y(t);
        } else t.fa = 1;
        return a;
      }
      function R(t) {
        return t.Pa == t.gb;
      }
      function U(t, e) {
        return (
          p(t != i),
          0 == e
            ? 0
            : ((t.gb = 2 * e - 1),
              (t.Y = b(t.gb, Pa)),
              t.Y == i ? 0 : ((t.Y[0].s = -1), (t.Pa = 1)))
        );
      }
      function x(t) {
        t != i && ((t.Y = i), (t.Y = i), (t.gb = 0), (t.Pa = 0));
      }
      function T(t, e, a, n) {
        for (var r = t.Y, i = 0, s = +t.gb; n-- > 0; ) {
          if (i >= s) return 0;
          if (r[i].s < 0) {
            if (R(t)) return 0;
            const e = t,
              a = e.Y,
              n = +e.Pa;
            (r[i].s = n - i), (e.Pa += 2), (a[n + 0].s = -1), (a[n + 1].s = -1);
          } else if (0 == r[i].s) return 0;
          i += r[i].s + ((a >> n) & 1);
        }
        if (r[i].s < 0) r[i].s = 0;
        else if (0 != r[i].s) return 0;
        return (r[i].kc = e), 1;
      }
      function S(t, e, a) {
        var n = 0;
        let r = 0,
          s = 0;
        for (p(t != i), p(e != i), n = 0; n < a; ++n)
          e[n] > 0 && (++r, (s = n));
        if (!U(t, r)) return 0;
        if (1 == r) return s < 0 || s >= a ? (x(t), 0) : T(t, s, 0, 0);
        if (((r = 0), (s = _(a, 0)), s == i)) return (r = r && R(t)) || x(t), r;
        var o = 0;
        (o = 0), (n = _(wa + 1, 0));
        let l = 0;
        const f = _(wa + 1, 0);
        let h = 0;
        for (p(e != i), p(a > 0), p(s != i), o = 0; o < a; ++o)
          e[o] > h && (h = e[o]);
        if (h > wa) n = 0;
        else {
          for (o = 0; o < a; ++o) ++n[e[o]];
          for (l = n[0] = 0, f[0] = -1, o = 1; o <= h; ++o)
            (l = (l + n[o - 1]) << 1), (f[o] = l);
          for (o = 0; o < a; ++o) s[o] = e[o] > 0 ? f[e[o]]++ : La;
          n = 1;
        }
        if (!n) return (r = r && R(t)) || x(t), r;
        for (n = 0; n < a; ++n)
          if (e[n] > 0 && !T(t, n, s[n], e[n]))
            return (r = r && R(t)) || x(t), r;
        return (r = R(t)) || x(t), r;
      }
      function z(t, e, a, n, r, i, s) {
        var o = 0;
        for (o = 0; o < s; ++o) r[i + o] = (t[e + o] + a[n + o]) & 255;
      }
      function O(t, e, a) {
        const n = t.P.l;
        if (!(a = e < 0 || a < 0 || e + a > t.P.v) && (a = 0 == e)) {
          t: {
            let e = t.Ga;
            var r = t.G,
              l = t.ub;
            a = t.P.l;
            let u = t.P.v;
            const b = t.Xb;
            var f = [i];
            let w = i,
              g = u * a;
            var h = i,
              c = i;
            c = "WEBP_FILTER_TYPE";
            let m = 0;
            f = 0;
            var d = 0;
            let v = 0;
            if ((p(a > 0 && u > 0 && n >= a), p(e != i && b != i), l <= Ea))
              a = 0;
            else if (
              ((v = (e[r + 0] >> 0) & 3),
              (c = (e[r + 0] >> 2) & 3),
              (m = (e[r + 0] >> 4) & 3),
              (f = (e[r + 0] >> 6) & 3),
              v < Ra || v > Ua || c >= Un || m > xa || 0 != f)
            )
              a = 0;
            else {
              if (v == Ra) (d = l >= g), (f = e), (w = r + Ea);
              else {
                if (((f = _(g, 0)), (w = 0), f == i)) {
                  a = 0;
                  break t;
                }
                (d = r + Ea), (l = l - Ea), (r = f), (h = s(ta));
                let t = 0;
                const n = jt();
                n == i
                  ? (d = 0)
                  : ((n.l = a),
                    (n.v = u),
                    (n.N = h),
                    ct(Te),
                    (h.put = ge),
                    (h.Mb = pe),
                    (h.Pb = me),
                    (h.ka = i),
                    (h.ka = r),
                    (h.fd = 0),
                    (h.width = a),
                    (h.height = u),
                    (n.a = He),
                    k(n.o, e, d, l),
                    (n.Wa = vn),
                    Kt(a, u, 1, n, i) &&
                      Yt(n, a) &&
                      ((n.Wa = mn), (t = Vt(n, n.V, n.Ha, n.l, n.v, qt))),
                    n != i && Gt(n),
                    (d = t));
              }
              if (d) {
                for (
                  e = xn[c],
                    e != i
                      ? ((h = _(g, 0)) == i &&
                          ((d = 0), v != Ra && (w = f = i)),
                        e(f, w, a, u, 1, a, h, (c = 0)),
                        (g = h),
                        (v = c))
                      : ((g = f), (v = w)),
                    e = 0;
                  u-- > 0;

                )
                  o(b, e, g, v, a), (v += a), (e += n);
                m == xa && (d = f == i || w <= 0 || a <= 0 ? 0 : 1);
              }
              a = d;
            }
          }
          a = !a;
        }
        return a ? i : 0 == e ? t.Xb : +e * n;
      }
      function D(t, e, a, n) {
        if (n == i || t <= 0 || e <= 0) return Ge;
        if (a != i) {
          if (a.Ua) {
            const n = a.wc,
              r = a.vc,
              i = -2 & a.t,
              s = -2 & a.k;
            if (i < 0 || s < 0 || n <= 0 || r <= 0 || i + n > t || s + r > e)
              return Ge;
            (t = n), (e = r);
          }
          if (a.I) {
            if (a.Ba <= 0 || a.Aa <= 0) return Ge;
            (t = a.Ba), (e = a.Aa);
          }
        }
        return (
          (n.width = t),
          (n.height = e),
          (function (t) {
            let e = t.width;
            const a = t.height;
            let n = t.J;
            if (e <= 0 || a <= 0 || !(n >= Se && n < We)) return Ge;
            if (!t.Fc && t.Jb == i) {
              var r = i,
                s = 0,
                o = 0,
                l = 0,
                f = 0,
                h = ((r = 0), e * Tn[n]),
                c = h * a;
              if (
                (n < Ze ||
                  ((l =
                    (s = parseInt((e + 1) / 2, 10)) *
                    parseInt((a + 1) / 2, 10)),
                  n == Me && (f = (o = e) * a)),
                (r = c + 2 * l + f) != r)
              )
                return Ge;
              if ((r = _(r, 205)) == i) return je;
              (t.Jb = r),
                (t.jc = i),
                n < Ze
                  ? ((e = t.c.RGBA),
                    (e.ma = r),
                    (e.Sa = i),
                    (e.f = h),
                    (e.size = c))
                  : ((e = t.c.Va),
                    (e.y = r),
                    (e.D = i),
                    (e.F = h),
                    (e.Wc = c),
                    (e.c = r),
                    (e.B = i + c),
                    (e.nb = s),
                    (e.Rc = l),
                    (e.S = r),
                    (e.C = i + c + l),
                    (e.rb = s),
                    (e.Uc = l),
                    n == Me && ((e.p = r), (e.q = i + c + 2 * l)),
                    (e.Wb = f),
                    (e.Fa = o));
            }
            return (
              (n = 1),
              (s = t.J),
              (o = t.width),
              (l = t.height),
              s >= Se && s < We
                ? s < Ze
                  ? ((n &= (t = t.c.RGBA).f * l <= t.size),
                    (n &= t.f >= o * Tn[s]),
                    (n &= t.ma != i))
                  : ((f = (t = t.c.Va).nb * parseInt((l + 1) / 2, 10)),
                    (h = t.rb * parseInt((l + 1) / 2, 10)),
                    (c = t.Fa * l),
                    (n &= t.F * l <= t.Wc),
                    (n &= f <= t.Rc),
                    (n &= h <= t.Uc),
                    (n &= c <= t.Wb),
                    (n &= t.F >= o),
                    (n &= t.nb >= parseInt((o + 1) / 2, 10)),
                    (n &= t.rb >= parseInt((o + 1) / 2, 10)),
                    (n &= t.y != i),
                    (n &= t.c != i),
                    (n &= t.S != i),
                    s == Me &&
                      ((n &= t.Fa >= o), (n &= c <= t.Wb), (n &= t.p != i)))
                : (n = 0),
              n ? He : Ge
            );
          })(n)
        );
      }
      function I(t) {
        return -256 & t ? (t < 0 ? 0 : 255) : t;
      }
      function N(t, e, a, n) {
        const r = _(16, 0);
        let i, s;
        for (i = 0, s = 0; s < 4; ++s) {
          var o = t[e + 0] + t[e + 8],
            l = t[e + 0] - t[e + 8],
            f = ((t[e + 4] * Bn) >> 16) - ((t[e + 12] * Pn) >> 16),
            h = ((t[e + 4] * Pn) >> 16) + ((t[e + 12] * Bn) >> 16);
          (r[i + 0] = o + h),
            (r[i + 1] = l + f),
            (r[i + 2] = l - f),
            (r[i + 3] = o - h),
            (i += 4),
            e++;
        }
        for (s = i = 0; s < 4; ++s)
          (o = (t = r[i + 0] + 4) + r[i + 8]),
            (l = t - r[i + 8]),
            (f = ((r[i + 4] * Bn) >> 16) - ((r[i + 12] * Pn) >> 16)),
            (h = ((r[i + 4] * Pn) >> 16) + ((r[i + 12] * Bn) >> 16)),
            (a[n + 0 + 0 * an] = I(a[n + 0 + 0 * an] + ((o + h) >> 3))),
            (a[n + 1 + 0 * an] = I(a[n + 1 + 0 * an] + ((l + f) >> 3))),
            (a[n + 2 + 0 * an] = I(a[n + 2 + 0 * an] + ((l - f) >> 3))),
            (a[n + 3 + 0 * an] = I(a[n + 3 + 0 * an] + ((o - h) >> 3))),
            i++,
            (n += an);
      }
      function P(t, e, a, n, r) {
        N(t, e, a, n), r && N(t, e + 16, a, n + 4);
      }
      function B(t, e, a, n) {
        Zn(t, e + 0, a, n + 0, 1), Zn(t, e + 32, a, n + 4 * an, 1);
      }
      function L(t, e, a, n) {
        let r;
        for (t = t[e + 0] + 4, r = 0; r < 4; ++r)
          for (e = 0; e < 4; ++e)
            a[n + e + r * an] = I(a[n + e + r * an] + (t >> 3));
      }
      function C(t, e, a, n) {
        t[e + 0] && L(t, e + 0, a, n + 0),
          t[e + 16] && L(t, e + 16, a, n + 4),
          t[e + 32] && L(t, e + 32, a, n + 4 * an),
          t[e + 48] && L(t, e + 48, a, n + 4 * an + 4);
      }
      function F(t, e, a) {
        const n = e - an,
          r = In,
          i = 255 - t[n - 1];
        let s;
        for (s = 0; s < a; ++s) {
          const s = r,
            l = i + t[e - 1];
          var o;
          for (o = 0; o < a; ++o) t[e + o] = s[l + t[n + o]];
          e += an;
        }
      }
      function Z(t, e, a) {
        let r;
        for (r = 0; r < 16; ++r) for (n = 0; n < 16; ++n) e[a + r * an + n] = t;
      }
      function M(t, e, a) {
        return (t + 2 * e + a + 2) >> 2;
      }
      function W(t, e, a) {
        let n, r;
        for (n = 0; n < 8; ++n) for (r = 0; r < 8; ++r) e[a + r + n * an] = t;
      }
      function V(t, e, a) {
        const n = t[e - a],
          r = t[e + 0],
          i = 3 * (r - n) + On[1020 + t[e - 2 * a] - t[e + a]],
          s = Dn[112 + ((i + 4) >> 3)];
        (t[e - a] = In[255 + n + Dn[112 + ((i + 3) >> 3)]]),
          (t[e + 0] = In[255 + r - s]);
      }
      function H(t, e, a, n) {
        const r = t[e + 0],
          i = t[e + a];
        return Sn[255 + t[e - 2 * a] - t[e - a]] > n || Sn[255 + i - r] > n;
      }
      function G(t, e, a, n, r) {
        const i = t[e - 3 * a],
          s = t[e - 2 * a],
          o = t[e - a],
          l = t[e + 0],
          f = t[e + a],
          h = t[e + 2 * a],
          c = t[e + 3 * a];
        return 2 * Sn[255 + o - l] + zn[255 + s - f] > n
          ? 0
          : Sn[255 + t[e - 4 * a] - i] <= r &&
              Sn[255 + i - s] <= r &&
              Sn[255 + s - o] <= r &&
              Sn[255 + c - h] <= r &&
              Sn[255 + h - f] <= r &&
              Sn[255 + f - l] <= r;
      }
      function K(t, e, a, n) {
        let r;
        for (r = 0; r < 16; ++r)
          2 * Sn[255 + t[e + r - a] - t[e + r + 0]] +
            zn[255 + t[e + r - 2 * a] - t[e + r + a]] <=
            n && V(t, e + r, a);
      }
      function Y(t, e, a, n) {
        let r;
        for (r = 0; r < 16; ++r)
          2 * Sn[255 + t[e + r * a - 1] - t[e + r * a + 0]] +
            zn[255 + t[e + r * a - 2] - t[e + r * a + 1]] <=
            n && V(t, e + r * a, 1);
      }
      function q(t, e, a, n) {
        let r;
        for (r = 3; r > 0; --r) K(t, (e += 4 * a) + 0, a, n);
      }
      function J(t, e, a, n) {
        let r;
        for (r = 3; r > 0; --r) Y(t, (e += 4) + 0, a, n);
      }
      function X(t, e, a, n, r, i, s, o) {
        for (; r-- > 0; ) {
          if (G(t, e + 0, a, i, s))
            if (H(t, e + 0, a, o)) V(t, e + 0, a);
            else {
              const n = t,
                r = e + 0,
                i = a,
                s = n[r - 2 * i],
                o = n[r - i],
                f = n[r + 0],
                h = n[r + i],
                c = n[r + 2 * i];
              const d =
                  (27 * (l = On[1020 + 3 * (f - o) + On[1020 + s - h]]) + 63) >>
                  7,
                u = (18 * l + 63) >> 7;
              var l = (9 * l + 63) >> 7;
              (n[r - 3 * i] = In[255 + n[r - 3 * i] + l]),
                (n[r - 2 * i] = In[255 + s + u]),
                (n[r - i] = In[255 + o + d]),
                (n[r + 0] = In[255 + f - d]),
                (n[r + i] = In[255 + h - u]),
                (n[r + 2 * i] = In[255 + c - l]);
            }
          e += n;
        }
      }
      function $(t, e, a, n, r, i, s, o) {
        for (; r-- > 0; ) {
          if (G(t, e + 0, a, i, s))
            if (H(t, e + 0, a, o)) V(t, e + 0, a);
            else {
              const n = t,
                r = e + 0,
                i = a,
                s = n[r - i],
                o = n[r + 0],
                f = n[r + i];
              const h = Dn[112 + (((l = 3 * (o - s)) + 4) >> 3)];
              var l = Dn[112 + ((l + 3) >> 3)];
              const c = (h + 1) >> 1;
              (n[r - 2 * i] = In[255 + n[r - 2 * i] + c]),
                (n[r - i] = In[255 + s + l]),
                (n[r + 0] = In[255 + o - h]),
                (n[r + i] = In[255 + f - c]);
            }
          e += n;
        }
      }
      function Q(t, e, a, n, r, i) {
        X(t, e + 0, a, 1, 16, n, r, i);
      }
      function tt(t, e, a, n, r, i) {
        X(t, e + 0, 1, a, 16, n, r, i);
      }
      function et(t, e, a, n, r, i) {
        let s;
        for (s = 3; s > 0; --s) $(t, (e += 4 * a) + 0, a, 1, 16, n, r, i);
      }
      function at(t, e, a, n, r, i) {
        let s;
        for (s = 3; s > 0; --s) $(t, (e += 4) + 0, 1, a, 16, n, r, i);
      }
      function nt(t, e, a, n, r, i, s, o) {
        X(t, e, r, 1, 8, i, s, o), X(a, n, r, 1, 8, i, s, o);
      }
      function rt(t, e, a, n, r, i, s, o) {
        X(t, e, 1, r, 8, i, s, o), X(a, n, 1, r, 8, i, s, o);
      }
      function it(t, e, a, n, r, i, s, o) {
        $(t, e + 4 * r, r, 1, 8, i, s, o), $(a, n + 4 * r, r, 1, 8, i, s, o);
      }
      function st(t, e, a, n, r, i, s, o) {
        $(t, e + 4, 1, r, 8, i, s, o), $(a, n + 4, 1, r, 8, i, s, o);
      }
      function ot(t, e) {
        return e == Za
          ? 0 == t.i
            ? 0 == t.d
              ? Ka
              : Ga
            : 0 == t.d
            ? ja
            : Za
          : e;
      }
      function lt(t, e, a, r) {
        for (n = 0; n < 4; ++n) t[e + n] = a[r + n];
      }
      function ft(t, e) {
        return t < 0 ? 0 : t > e ? e : t;
      }
      function ht(t) {
        (t.a = "VP8_STATUS_OK"), (t.xc = "OK");
      }
      function ct(t) {
        t >>> 8 != Te >>> 8 && alert("mismatch error");
      }
      function dt(t, e, a) {
        return t.a == He && ((t.a = e), (t.xc = a), (t.za = 0)), 0;
      }
      function ut(t, r) {
        let o = [0],
          l = 0;
        var f = [0],
          h = s(ln),
          c = s(fn);
        let d = s(na);
        (f = "VP8StatusCode"), (h = s(aa));
        if (t == i) return alert("(dec == null)"), 0;
        if ((ht(t), r == i))
          return dt(
            t,
            "VP8_STATUS_INVALID_PARAM",
            "null VP8Io passed to VP8GetHeaders()"
          );
        if (
          ((h.data = r.data),
          (h.b = r.b),
          (h.e = r.e),
          (h.b = [h.b]),
          (h.e = [h.e]),
          (f = Ae((h = [h]))) != He)
        )
          return dt(t, f, "Incorrect/incomplete header.");
        if ((((h = h[0]).b = h.b[0]), (h.e = h.e[0]), h.ia))
          return dt(t, Ke, "Unexpected lossless format encountered.");
        if (
          (t.Ga == i &&
            (p(0 == t.ub), (t.Ga = h.$), (t.G = h.G), (t.ub = h.pa)),
          (l = h.data),
          (o = h.b + h.offset),
          (f = h.e - h.offset),
          p(h.e >= h.offset),
          f[0] < 4)
        )
          return dt(t, Xe, "Truncated header.");
        if (
          ((d = l[o + 0] | (l[o + 1] << 8) | (l[o + 2] << 16)),
          ((h = t.Ac).fb = !(1 & d) + 0),
          (h.Jc = (d >> 1) & 7),
          (h.Nc = (d >> 4) & 1),
          (h.Ra = d >> 5),
          h.Jc > 3)
        )
          return dt(
            t,
            "VP8_STATUS_BITSTREAM_ERROR",
            "Incorrect keyframe parameters."
          );
        if (!h.Nc)
          return dt(
            t,
            "VP8_STATUS_UNSUPPORTED_FEATURE",
            "Frame not displayable."
          );
        if (((o += 3), (f -= 3), (c = t.P), h.fb)) {
          if (f < 7)
            return dt(
              t,
              "VP8_STATUS_NOT_ENOUGH_DATA",
              "cannot parse picture header"
            );
          if (!(f >= 3 && 157 == l[o + 0] && 1 == l[o + 1] && 42 == l[o + 2]))
            return dt(t, "VP8_STATUS_BITSTREAM_ERROR", "Bad code word");
          for (
            c.l = 16383 & ((l[o + 4] << 8) | l[o + 3]),
              c.gd = l[o + 4] >> 6,
              c.v = 16383 & ((l[o + 6] << 8) | l[o + 5]),
              c.hd = l[o + 6] >> 6,
              o += 7,
              f -= 7,
              t.Ma = (c.l + 15) >> 4,
              t.hb = (c.v + 15) >> 4,
              r.width = c.l,
              r.height = c.v,
              r.I = 0,
              r.Ua = 0,
              r.k = 0,
              r.t = 0,
              r.Ka = r.width,
              r.K = r.height,
              r.m = r.width,
              r.h = r.height,
              d = t.R,
              n = 0;
            n < d.Ta.length;
            ++n
          )
            d.Ta[n] = 255;
          for (
            d.z = s(hr),
              d = t.Ca,
              p(d != i),
              d.pb = 0,
              d.ob = 0,
              d.tb = 1,
              n = 0;
            n < d.Kb.length;
            ++n
          )
            d.Kb[n] = 0;
          for (n = 0; n < d.Cb.length; ++n) d.Cb[n] = 0;
          t.Lb = 0;
        }
        if (h.Ra > f)
          return dt(t, "VP8_STATUS_NOT_ENOUGH_DATA", "bad partition length");
        (d = t.o),
          g(d, l, o, o + h.Ra),
          (o += h.Ra),
          (f -= h.Ra),
          h.fb && ((c.uc = e(d)), (c.$c = e(d)));
        c = d;
        var u = t.Ca;
        let _ = t.R;
        if ((p(c != i), p(u != i), (u.pb = e(c)), u.pb)) {
          if (((u.ob = e(c)), e(c))) {
            var b;
            for (u.tb = e(c), b = 0; b < qa; ++b) u.Kb[b] = e(c) ? v(c, 7) : 0;
            for (b = 0; b < qa; ++b) u.Cb[b] = e(c) ? v(c, 6) : 0;
          }
          if (u.ob) for (b = 0; b < Ya; ++b) _.Ta[b] = e(c) ? m(c, 8) : 255;
        } else u.ob = 0;
        if (c.Ab)
          return dt(
            t,
            "VP8_STATUS_BITSTREAM_ERROR",
            "cannot parse segment header"
          );
        if (
          ((c = d),
          ((u = t.ga).Oc = e(c)),
          (u.Fb = m(c, 6)),
          (u.kb = m(c, 3)),
          (u.oc = e(c)),
          u.oc && e(c))
        ) {
          for (_ = 0; _ < Ja; ++_) e(c) && (u.Lc[_] = v(c, 6));
          for (_ = 0; _ < Xa; ++_) e(c) && (u.Gc[_] = v(c, 6));
        }
        if (((t.A = 0 == u.Fb ? 0 : u.Oc ? 1 : 2), t.A > 0))
          if (t.Ca.pb)
            for (_ = 0; _ < qa; ++_)
              (b = t.Ca.Cb[_]), t.Ca.tb || (b += u.Fb), (t.Zb[_] = b);
          else t.Zb[0] = u.Fb;
        if (c.Ab)
          return dt(
            t,
            "VP8_STATUS_BITSTREAM_ERROR",
            "cannot parse filter header"
          );
        (c = l), (u = y = o), (f = y + f);
        b = 0;
        let w = 0,
          k = 0;
        if (
          ((t.Hb = 1 << m(t.o, 2)),
          (w = t.Hb - 1),
          (_ = c),
          f < (b = y + 3 * w))
        )
          f = "VP8_STATUS_NOT_ENOUGH_DATA";
        else {
          for (k = 0; k < w; ++k) {
            var y = _,
              A = b + (c[u + 0] | (c[u + 1] << 8) | (c[u + 2] << 16));
            A > f && (y = c), g(t.ic[+k], _, b, A), (_ = y), (b = A), (u += 3);
          }
          g(t.ic[+w], _, b, f),
            (f = b < f ? "VP8_STATUS_OK" : "VP8_STATUS_SUSPENDED");
        }
        if ("VP8_STATUS_OK" != f)
          return dt(t, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse partitions");
        for (
          w = t.o,
            f = m(w, 7),
            c = e(w) ? v(w, 4) : 0,
            u = e(w) ? v(w, 4) : 0,
            _ = e(w) ? v(w, 4) : 0,
            b = e(w) ? v(w, 4) : 0,
            w = e(w) ? v(w, 4) : 0,
            k = t.Ca,
            y = 0,
            y = 0;
          y < qa;
          ++y
        ) {
          if (((A = 0), k.pb)) (A = k.Kb[y]), k.tb || (A += f);
          else {
            if (y > 0) {
              t.yb[y] = t.yb[0];
              continue;
            }
            A = f;
          }
          const e = t.yb[y];
          (e.sc[0] = or[ft(A + c, 127)]),
            (e.sc[1] = lr[ft(A + 0, 127)]),
            (e.sb[0] = 2 * or[ft(A + u, 127)]),
            (e.sb[1] = (101581 * lr[ft(A + _, 127)]) >> 16),
            e.sb[1] < 8 && (e.sb[1] = 8),
            (e.qc[0] = or[ft(A + b, 117)]),
            (e.qc[1] = lr[ft(A + w, 127)]);
        }
        if (!h.fb) return dt(t, Ye, "Not a key frame.");
        for (t.Zc = 259, e(d), f = t.R, c = 0; c < $a; ++c)
          for (u = 0; u < Qa; ++u)
            for (_ = 0; _ < tn; ++_)
              for (b = 0; b < en; ++b)
                a(d, dr[c][u][_][b]) && (f.z[c][u][_][b] = m(d, 8));
        if (((t.pc = e(d)), t.pc && (t.Pc = m(d, 8)), t.P.uc)) {
          if (((o -= 8), (d = 0), h.Ra < 8 || 1 != l[o + 8 - 1]))
            return dt(t, Ke, "RIFF: Inconsistent extra information.");
          (d = (l[o + 0] << 0) | (l[o + 1] << 8) | (l[o + 2] << 16)),
            (t.fc = d),
            (t.dd = i),
            (t.cd = l[o + 3]);
        }
        return (t.za = 1);
      }
      function _t(t, e, n, r, i, s) {
        let o = e[i][n];
        if (!a(t, o[0])) return 0;
        for (;;) {
          if ((++i, a(t, o[1]))) {
            var l;
            if (a(t, o[2])) {
              if (a(t, o[3]))
                if (a(t, o[6])) {
                  var f;
                  for (
                    l = 0,
                      n = a(t, o[8]),
                      o = a(t, o[9 + n]),
                      o = 2 * n + o,
                      n = 0,
                      l = _r[o],
                      f = 0;
                    f < l.length - 1;
                    ++f
                  )
                    n += n + a(t, l[f]);
                  n += 3 + (8 << o);
                } else
                  a(t, o[7])
                    ? ((n = 7 + 2 * a(t, 165)), (n += a(t, 145)))
                    : (n = 5 + a(t, 159));
              else n = a(t, o[4]) ? 3 + a(t, o[5]) : 2;
              o = e[ur[i]][2];
            } else (o = e[ur[i]][1]), (n = 1);
            if (
              ((l = br[i - 1]),
              (s[s[s.length - 1] + l] = (a(t, 128) ? -n : n) * r[(l > 0) + 0]),
              16 == i || !a(t, o[0]))
            )
              return i;
          } else o = e[ur[i]][0];
          if (16 == i) return 16;
        }
      }
      function bt(t, e) {
        return (
          (((16777216 * t[0] + 65536 * t[1] + 256 * t[2] + 1 * t[3]) * gr) &
            4278190080) >>
          e
        );
      }
      function wt(t, e) {
        let r,
          s = 0;
        if (t == i) return 0;
        if (e == i)
          return dt(
            t,
            "VP8_STATUS_INVALID_PARAM",
            "NULL VP8Io parameter in VP8Decode()."
          );
        if (!t.za && !ut(t, e)) return 0;
        if ((p(t.za), e.Mb && !e.Mb(e)))
          dt(t, Je, "Frame setup failed"), (r = t.a);
        else {
          e.Za && (t.A = 0);
          const a = nr[t.A];
          2 == t.A
            ? ((t.lb = 0), (t.mb = 0))
            : ((t.lb = (e.t - a) >> 4),
              (t.mb = (e.k - a) >> 4),
              t.lb < 0 && (t.lb = 0),
              t.mb < 0 && (t.mb = 0)),
            (t.Ya = (e.K + 15 + a) >> 4),
            (t.wb = (e.Ka + 15 + a) >> 4),
            t.wb > t.Ma && (t.wb = t.Ma),
            t.Ya > t.hb && (t.Ya = t.hb),
            (r = He);
        }
        if ((s = r == He)) {
          if (s) {
            let a, n;
            t: {
              if (((t.Ja = 0), t.qb)) {
                const e = t.rc;
                if (!WebPWorkerReset(e)) {
                  a = dt(t, je, "thread initialization failed.");
                  break t;
                }
                (e.Qd = t),
                  (e.Rd = t.oa.N),
                  (e.Ud = FinishRow),
                  (t.jb = t.A > 0 ? rr : rr - 1);
              } else t.jb = ir;
              a = 1;
            }
            if (!(n = !a)) {
              let e;
              t: {
                const a = t.jb,
                  n = t.Ma,
                  r = 4 * n,
                  s = 32 * n,
                  o = n + 1,
                  l = t.A > 0 ? n * (t.qb ? 2 : 1) : 0,
                  c = nn,
                  d = s * (16 * a + parseInt((3 * nr[t.A]) / 2, 10)),
                  u = t.Ga != i ? t.P.l * t.P.v : 0,
                  b = r + s + o + l + c + 384 + d + u + ar;
                if (b != b) e = 0;
                else {
                  if (b > t.Gb) {
                    if (((t.ib = 0), (t.Gb = 0), t.ib == i)) {
                      e = dt(
                        t,
                        "VP8_STATUS_OUT_OF_MEMORY",
                        "no memory during frame initialization."
                      );
                      break t;
                    }
                    t.Gb = b;
                  }
                  (t.dc = 205),
                    (t.Xc = h(205, 16 * n)),
                    (t.Sc = h(205, 8 * n)),
                    (t.Vc = h(205, 8 * n)),
                    (t.M = l ? f(un, l) : i),
                    (t.Sd = l ? 0 : i),
                    (t.oa.ha = 0),
                    (t.oa.M = t.M),
                    p(0 == (c & ar)),
                    (t.Ea = h(205, 1 * c)),
                    (t.z = -12851),
                    (t.H = 16 * n),
                    (t.r = 8 * n);
                  const s = nr[t.A],
                    w = s * t.H,
                    g = (s / 2) * t.r;
                  (t.ca = _(d, 205)),
                    (t.da = +w),
                    (t.aa = t.ca),
                    (t.ba = t.da + 16 * a * t.H + g),
                    (t.ra = t.aa),
                    (t.sa = t.ba + 8 * a * t.r + g),
                    (t.Xb = u ? _(u, 0) : i),
                    (t.La = f(_n, o)),
                    (t.dc = h(Za, r)),
                    (e = 1);
                }
              }
              n = !e;
            }
            if (n) s = 0;
            else {
              if (
                ((e.width = t.P.l),
                (e.height = t.P.v),
                (e.w = 0),
                (e.y = t.ca),
                (e.D = t.da),
                (e.c = t.aa),
                (e.B = t.ba),
                (e.S = t.ra),
                (e.C = t.sa),
                (e.F = t.H),
                (e.Da = t.r),
                (e.p = i),
                (e.q = i),
                !Nn)
              ) {
                let t;
                for (t = -255; t <= 255; ++t)
                  (Sn[255 + t] = t < 0 ? -t : t),
                    (zn[255 + t] = Sn[255 + t] >> 1);
                for (t = -1020; t <= 1020; ++t)
                  On[1020 + t] = t < -128 ? -128 : t > 127 ? 127 : t;
                for (t = -112; t <= 112; ++t)
                  Dn[112 + t] = t < -16 ? -16 : t > 15 ? 15 : t;
                for (t = -255; t <= 510; ++t)
                  In[255 + t] = t < 0 ? 0 : t > 255 ? 255 : t;
                Nn = 1;
              }
              (Zn = P),
                (Mn = B),
                (Wn = L),
                (Vn = C),
                (Hn = Q),
                (jn = tt),
                (Gn = nt),
                (Kn = rt),
                (Yn = et),
                (qn = at),
                (Jn = it),
                (Xn = st),
                ($n = K),
                (Qn = Y),
                (tr = q),
                (er = J),
                (s = 1);
            }
          }
          if (s)
            t: {
              for (t.d = 0; t.d < t.Ya; ++t.d) {
                const r = t.ic[t.d & (t.Hb - 1)],
                  f = t,
                  P = f.La[0];
                for (
                  P.X = 0,
                    P.ua = 0,
                    d(f.cc, 0, Za, f.cc.length),
                    f.W = (f.A > 0 && f.d >= f.mb && f.d <= f.Ya) + 0,
                    t.i = 0;
                  t.i < t.Ma;
                  t.i++
                ) {
                  var c;
                  const e = t,
                    i = r,
                    f = e.o,
                    d = e.La[0],
                    p = e.La[1 + e.i];
                  e.Ca.ob &&
                    (e.Lb = a(f, e.R.Ta[0])
                      ? 2 + a(f, e.R.Ta[2])
                      : 0 + a(f, e.R.Ta[1])),
                    (p.Nb = e.pc ? a(f, e.Pc) : 0);
                  const O = e.dc;
                  O[O.length - 1] = 0 + 4 * e.i;
                  const P = e.cc;
                  if (((e.wa = !a(f, 145)), e.wa)) {
                    var u = e.Eb,
                      b = 0,
                      w = 0;
                    for (w = 0; w < 4; ++w) {
                      var g,
                        m = P[w];
                      for (g = 0; g < 4; ++g) {
                        const t = cr[O[O[O.length - 1] + g]][m];
                        var v = 0;
                        do {
                          v = fr[2 * v + a(f, t[v])];
                        } while (v > 0);
                        (m = -v), (O[O[O.length - 1] + g] = m), (u[b] = m), b++;
                      }
                      P[w] = m;
                    }
                  } else {
                    m = a(f, 156) ? (a(f, 128) ? Ha : Va) : a(f, 163) ? Wa : Ma;
                    for (e.Eb[0] = m, v = 0; v < 4; ++v)
                      O[v + O[O.length - 1]] = m;
                    for (v = 0; v < 4; ++v) P[v] = m;
                  }
                  if (
                    ((e.Tc = a(f, 142)
                      ? a(f, 114)
                        ? a(f, 183)
                          ? Ha
                          : Va
                        : Wa
                      : Ma),
                    f.Ab)
                  )
                    c = 0;
                  else {
                    if (p.Nb)
                      (d.X = p.X = 0),
                        e.wa || (d.ua = p.ua = 0),
                        (e.ja = 0),
                        (e.Oa = 0);
                    else {
                      let t = 0,
                        a = 0;
                      var k = 0,
                        y = wr;
                      const n = e.yb[e.Lb];
                      var A = e.z;
                      const r = e.La[0],
                        s = _(4, 0),
                        o = _(4, 0);
                      let f = _(4, 0),
                        c = _(4, 0),
                        d = 0,
                        u = 0;
                      var E = 0;
                      let b = 0,
                        w = 0;
                      A = h(0, 384);
                      if (e.wa) (k = 0), (y = e.R.z[3]);
                      else {
                        const t = _(16, 0);
                        var R = p.ua + r.ua;
                        p.ua = r.ua = (_t(i, e.R.z[1], R, n.sb, 0, t) > 0) + 0;
                        (k = 1), (y = e.R.z[0]);
                        var U = t,
                          x = A,
                          T = _(16, 0),
                          S = 0;
                        for (S = 0; S < 4; ++S) {
                          var z = U[0 + S] + U[12 + S],
                            D = U[4 + S] + U[8 + S],
                            I = U[4 + S] - U[8 + S],
                            N = U[0 + S] - U[12 + S];
                          (T[0 + S] = z + D),
                            (T[8 + S] = z - D),
                            (T[4 + S] = N + I),
                            (T[12 + S] = N - I);
                        }
                        for (S = 0; S < 4; ++S) {
                          const t = x[x.length - 1],
                            e = T[0 + 4 * S] + 3;
                          (z = e + T[3 + 4 * S]),
                            (D = T[1 + 4 * S] + T[2 + 4 * S]),
                            (I = T[1 + 4 * S] - T[2 + 4 * S]),
                            (N = e - T[3 + 4 * S]);
                          (x[t + 0] = (z + D) >> 3),
                            (x[t + 16] = (N + I) >> 3),
                            (x[t + 32] = (z - D) >> 3),
                            (x[t + 48] = (N - I) >> 3),
                            (x[x.length - 1] += 64);
                        }
                        A[A.length - 1] = 0;
                      }
                      for (
                        f = l(pr[15 & p.X]), c = l(pr[15 & r.X]), b = 0;
                        b < 4;
                        ++b
                      ) {
                        var F = c[b];
                        for (E = 0; E < 4; ++E) {
                          var Z = _t(i, y, (R = F + f[E]), n.sc, k, A);
                          (f[E] = F = (Z > 0) + 0),
                            (o[E] = (0 != A[A[A.length - 1] + 0]) + 0),
                            (s[E] = (Z > 1) + 0),
                            (A[A.length - 1] += 16);
                        }
                        (c[b] = F),
                          (u |= bt(o, 24 - 4 * b)),
                          (d |= bt(s, 24 - 4 * b));
                      }
                      for (
                        t = bt(f, 24),
                          a = bt(c, 24),
                          f = l(pr[p.X >> 4]),
                          c = l(pr[r.X >> 4]),
                          w = 0;
                        w < 4;
                        w += 2
                      ) {
                        for (b = 0; b < 2; ++b) {
                          for (F = c[w + b], E = 0; E < 2; ++E)
                            (R = F + f[w + E]),
                              (Z = _t(i, e.R.z[2], R, n.qc, 0, A)),
                              (f[w + E] = F = (Z > 0) + 0),
                              (o[2 * b + E] =
                                (0 != A[A[A.length - 1] + 0]) + 0),
                              (s[2 * b + E] = (Z > 1) + 0),
                              (A[A.length - 1] += 16);
                          c[w + b] = F;
                        }
                        (u |= bt(o, 8 - 2 * w)), (d |= bt(s, 8 - 2 * w));
                      }
                      (t |= bt(f, 20)),
                        (a |= bt(c, 20)),
                        (p.X = t),
                        (r.X = a),
                        (e.z = A),
                        (e.Oa = d + 0),
                        (e.ja = d | u),
                        (p.Nb = !e.ja + 0);
                    }
                    c = !i.Ab;
                  }
                  if (!c) {
                    s = dt(
                      t,
                      "VP8_STATUS_NOT_ENOUGH_DATA",
                      `Premature end-of-file encountered.${t.i} ${t.d}`
                    );
                    break t;
                  }
                  const B = t,
                    L = B.Ea,
                    C = rn,
                    K = B.Ea,
                    Y = sn,
                    q = B.Ea,
                    J = on;
                  if (B.i > 0) {
                    var M = 0;
                    for (M = -1; M < 16; ++M)
                      lt(L, C + M * an - 4, L, C + M * an + 12);
                    for (M = -1; M < 8; ++M)
                      lt(K, Y + M * an - 4, K, Y + M * an + 4),
                        lt(q, J + M * an - 4, q, J + M * an + 4);
                  } else {
                    for (M = 0; M < 16; ++M) L[C + M * an - 1] = 129;
                    for (M = 0; M < 8; ++M)
                      (K[Y + M * an - 1] = 129), (q[J + M * an - 1] = 129);
                    B.d > 0 &&
                      (L[C - 1 - an] = K[Y - 1 - an] = q[J - 1 - an] = 129);
                  }
                  const Q = B.Xc,
                    tt = 16 * +B.i,
                    et = B.Sc,
                    at = 8 * +B.i,
                    nt = B.Vc,
                    rt = 8 * +B.i,
                    it = B.z;
                  let st = 0;
                  if (B.d > 0)
                    o(L, C - an, Q, tt, 16),
                      o(K, Y - an, et, at, 8),
                      o(q, J - an, nt, rt, 8);
                  else if (0 == B.i) {
                    for (n = 0; n < 21; ++n) L[C - an - 1 + n] = 127;
                    for (n = 0; n < 9; ++n) K[Y - an - 1 + n] = 127;
                    for (n = 0; n < 9; ++n) q[J - an - 1 + n] = 127;
                  }
                  if (B.wa) {
                    const t = C - an + 16;
                    B.d > 0 &&
                      (B.i >= B.Ma - 1
                        ? (L[t + 0] =
                            L[t + 1] =
                            L[t + 2] =
                            L[t + 3] =
                              Q[tt + 15])
                        : o(L, t + 0, Q, tt + 16, 4));
                    for (let e = 0; e < 4; ++e)
                      L[e + t + 4 * an] =
                        L[e + t + 4 * an] =
                        L[e + t + 8 * an] =
                        L[e + t + 12 * an] =
                          L[e + t + 0];
                    for (st = 0; st < 16; st++) {
                      var W = L,
                        V = C + sr[st];
                      Ln[B.Eb[st]](W, V),
                        B.Oa & (1 << st)
                          ? Zn(it, 16 * +st, W, V, 0)
                          : B.ja & (1 << st) && Wn(it, 16 * +st, W, V);
                    }
                  } else {
                    var H = ot(B, B.Eb[0]);
                    if ((Cn[H](L, C), B.ja))
                      for (st = 0; st < 16; st++)
                        (W = L),
                          (V = C + sr[st]),
                          B.Oa & (1 << st)
                            ? Zn(it, 16 * +st, W, V, 0)
                            : B.ja & (1 << st) && Wn(it, 16 * +st, W, V);
                  }
                  if (
                    ((H = ot(B, B.Tc)), Fn[H](K, Y), Fn[H](q, J), 983040 & B.ja)
                  ) {
                    const t = B.z;
                    var j = 256;
                    983040 & B.Oa ? Mn(t, j, K, Y) : Vn(t, j, K, Y);
                  }
                  if (15728640 & B.ja) {
                    const t = B.z;
                    j = 320;
                    15728640 & B.Oa ? Mn(t, j, q, J) : Vn(t, j, q, J);
                  }
                  B.d < B.hb - 1 &&
                    (o(Q, tt, L, C + 15 * an, 16),
                    o(et, at, K, Y + 7 * an, 8),
                    o(nt, rt, q, J + 7 * an, 8));
                  const ut = t;
                  if (ut.A > 0) {
                    const t = ut.M[1 + ut.i],
                      e = ut.La[1 + ut.i].Nb;
                    let a = ut.Zb[ut.Lb];
                    ut.ga.oc &&
                      ((a += ut.ga.Lc[0]), ut.wa && (a += ut.ga.Gc[0])),
                      (a = a < 0 ? 0 : a > 63 ? 63 : a),
                      (t.zc = a),
                      ut.ga.kb > 0 &&
                        ((a = ut.ga.kb > 4 ? a >> 2 : a >> 1),
                        a > 9 - ut.ga.kb && (a = 9 - ut.ga.kb)),
                      (t.yc = a < 1 ? 1 : a),
                      (t.ab = (!e || ut.wa) + 0);
                  }
                  var G = 0,
                    X = 8 * ut.Ja * ut.r,
                    $ = ut.ca,
                    ft = ut.da + 16 * ut.i + 16 * ut.Ja * ut.H,
                    ht = ut.aa,
                    ct = ut.ba + 8 * ut.i + X,
                    wt = ut.ra,
                    gt = ut.sa + 8 * ut.i + X;
                  for (G = 0; G < 16; ++G)
                    o($, ft + G * ut.H, ut.Ea, +rn + G * an, 16);
                  for (G = 0; G < 8; ++G)
                    o(ht, ct + G * ut.r, ut.Ea, +sn + G * an, 8),
                      o(wt, gt + G * ut.r, ut.Ea, +on + G * an, 8);
                }
                const B = t,
                  L = e;
                var mt = 1;
                const C = B.oa;
                if (B.qb) {
                  const t = B.rc;
                  mt = mt & WebPWorkerSync(t);
                  if ((p(t.a == OK), mt)) {
                    if (
                      ((C.N = L), (C.ha = B.Ja), (C.d = B.d), (C.W = B.W), C.W)
                    ) {
                      const t = C.M;
                      (C.M = B.M), (B.M = t);
                    }
                    WebPWorkerLaunch(t), ++B.Ja == B.jb && (B.Ja = 0);
                  }
                } else {
                  (C.d = B.d), (C.W = B.W);
                  e: {
                    let t = 1;
                    const e = B.oa,
                      a = nr[B.A],
                      n = a * B.H,
                      r = parseInt(a / 2) * B.r,
                      s = 16 * e.ha * B.H,
                      l = 8 * e.ha * B.r,
                      f = B.ca,
                      h = B.da - n + s,
                      c = B.aa,
                      d = B.ba - r + l,
                      u = B.ra,
                      _ = B.sa - r + l,
                      b = 0 == e.d,
                      w = (e.d >= B.hb - 1) + 0;
                    var vt = 16 * e.d;
                    let g = 16 * (e.d + 1);
                    if (e.W) {
                      const t = B;
                      let e = 0;
                      const a = t.oa.d;
                      for (p(t.oa.W), e = t.lb; e < t.wb; ++e) {
                        const n = t,
                          r = e,
                          i = a,
                          s = n.oa,
                          o = n.H,
                          l = s.M[1 + r],
                          f = n.ca,
                          h = n.da + 16 * s.ha * o + 16 * r,
                          c = l.zc,
                          d = l.yc,
                          u = 2 * c + d;
                        if (0 != c)
                          if (1 == n.A)
                            r > 0 && Qn(f, h, o, u + 4),
                              l.ab && er(f, h, o, u),
                              i > 0 && $n(f, h, o, u + 4),
                              l.ab && tr(f, h, o, u);
                          else {
                            const t = n.r,
                              e = n.aa,
                              a = n.ba + 8 * s.ha * t + 8 * r,
                              _ = n.ra,
                              b = n.sa + 8 * s.ha * t + 8 * r,
                              w = n.Ac.fb
                                ? c >= 40
                                  ? 2
                                  : c >= 15
                                  ? 1
                                  : 0
                                : c >= 40
                                ? 3
                                : c >= 20
                                ? 2
                                : c >= 15
                                ? 1
                                : 0;
                            r > 0 &&
                              (jn(f, h, o, u + 4, d, w),
                              Kn(e, a, _, b, t, u + 4, d, w)),
                              l.ab &&
                                (qn(f, h, o, u, d, w),
                                Xn(e, a, _, b, t, u, d, w)),
                              i > 0 &&
                                (Hn(f, h, o, u + 4, d, w),
                                Gn(e, a, _, b, t, u + 4, d, w)),
                              l.ab &&
                                (Yn(f, h, o, u, d, w),
                                Jn(e, a, _, b, t, u, d, w));
                          }
                      }
                    }
                    if (L.put) {
                      if (
                        (b
                          ? ((L.y = B.ca),
                            (L.D = B.da + s),
                            (L.c = B.aa),
                            (L.B = B.ba + l),
                            (L.S = B.ra),
                            (L.C = B.sa + l))
                          : ((vt -= a),
                            (L.y = f),
                            (L.D = h),
                            (L.c = c),
                            (L.B = d),
                            (L.S = u),
                            (L.C = _)),
                        w || (g -= a),
                        g > L.K && (g = L.K),
                        B.Ga != i &&
                          vt < g &&
                          (0 == vt
                            ? ((L.p = O(B, vt, g - vt)), (L.q = 0))
                            : (L.q = O(B, vt, g - vt)),
                          L.p == i))
                      ) {
                        mt = dt(B, Ke, "Could not decode alpha data.");
                        break e;
                      }
                      if (vt < L.k) {
                        const t = L.k - vt;
                        vt = L.k;
                        p(!(1 & t)),
                          (L.D += B.H * t),
                          (L.B += B.r * (t >> 1)),
                          (L.C += B.r * (t >> 1)),
                          L.p != i && (L.q += L.width * t);
                      }
                      vt < g &&
                        ((L.D += L.t),
                        (L.B += L.t >> 1),
                        (L.C += L.t >> 1),
                        L.p != i && (L.q += L.t),
                        (L.w = vt - L.k),
                        (L.m = L.Ka - L.t),
                        (L.h = g - vt),
                        (t = L.put(L)));
                    }
                    e.ha + 1 == B.jb &&
                      !w &&
                      (o(B.ca, B.da - n, f, h + 16 * B.H, n),
                      o(B.aa, B.ba - r, c, d + 8 * B.r, r),
                      o(B.ra, B.sa - r, u, _ + 8 * B.r, r)),
                      (mt = t);
                  }
                }
                if (!mt) {
                  s = dt(t, "VP8_STATUS_USER_ABORT", "Output aborted.");
                  break t;
                }
              }
              let r;
              if (!(r = t.qb && !WebPWorkerSync(t.rc))) {
                let e;
                (e = t.fc > 0) && (p(t), p(t.fc > 0), (e = !1)), (r = e);
              }
              s = r ? 0 : 1;
            }
          const r = s;
          e.Pb && e.Pb(e), (s = 1 & r);
        }
        return s ? ((t.za = 0), s) : (pt(t), 0);
      }
      function pt(t) {
        t != i && (t.ib && (t.ib = 0), (t.ib = i), (t.Gb = 0), (t.za = 0));
      }
      function gt(t, e) {
        return (t + (1 << e) - 1) >> e;
      }
      function mt(t, e, a, n, r) {
        const i = (Wr[a] + Vr[e]) >> mr;
        (e = Mr[e]),
          (n[r + 0] = Hr[t + Zr[a] - vr]),
          (n[r + 1] = Hr[t + i - vr]),
          (n[r + 2] = Hr[t + e - vr]);
      }
      function vt(t, e, a, n, r) {
        const i = (Wr[a] + Vr[e]) >> mr;
        (e = Mr[e]),
          (n[r + 0] = (248 & Hr[t + Zr[a] - vr]) | (Hr[t + i - vr] >> 5)),
          (n[r + 1] = ((Hr[t + i - vr] << 3) & 224) | (Hr[t + e - vr] >> 3));
      }
      function kt(t, e, a, n, r) {
        (n[r + 0] = 255), mt(t, e, a, n, r + 1);
      }
      function yt(t, e, a, n, r) {
        const i = Mr[e];
        (n[r + 0] =
          (jr[t + Zr[a] - vr] << 4) | jr[t + ((Wr[a] + Vr[e]) >> mr) - vr]),
          (n[r + 1] = 15 | (jr[t + i - vr] << 4));
      }
      function At(t, e, a, n, r) {
        const i = Zr[a];
        (a = (Wr[a] + Vr[e]) >> mr),
          (n[r + 0] = Hr[t + Mr[e] - vr]),
          (n[r + 1] = Hr[t + a - vr]),
          (n[r + 2] = Hr[t + i - vr]);
      }
      function Et(t, e, a, n, r) {
        At(t, e, a, n, r), (n[r + 3] = 255);
      }
      function Rt(t, e, a, n, r) {
        mt(t, e, a, n, r), (n[r + 3] = 255);
      }
      function Ut(t, e, a) {
        t[e] =
          ((((((4278255360 & t[e]) >>> 0) + ((4278255360 & a) >>> 0)) &
            4278255360) >>>
            0) |
            (((16711935 & t[e]) + (16711935 & a)) & 16711935)) >>>
          0;
      }
      function xt(t, e) {
        return (((4278124286 & (t ^ e)) >>> 1) + ((t & e) >>> 0)) >>> 0;
      }
      function Tt(t) {
        return t < 256 && t > 0 ? t : t <= 0 ? 0 : (~t >> 24) & 255;
      }
      function St(t, e) {
        return Tt(t + parseInt((t - e) / 2, 10));
      }
      function zt() {
        return _a;
      }
      function Ot(t, e) {
        return (
          (t &= 255) > 127 && (t -= 256),
          (e &= 255) > 127 && (e -= 256),
          (t * e) >>> 5
        );
      }
      function Dt(t, e, a, n, r, i, s) {
        var o = 0;
        const l = 8 >> t.n,
          f = t.U,
          h = t.u;
        if (l < 8) {
          t = (1 << t.n) - 1;
          var c = (1 << l) - 1;
          for (o = e; o < a; ++o) {
            e = 0;
            var d = 0;
            for (d = 0; d < f; ++d)
              0 == (d & t) && (e = (n[r++] >> 8) & 255),
                (i[s++] = h[e & c]),
                (e >>= l);
          }
        } else
          for (o = e; o < a; ++o)
            for (d = 0; d < f; ++d) i[s++] = h[(n[r++] >> 8) & 255];
      }
      function It(t, e, a, n, r) {
        for (a = e + a; e < a; ) {
          const a = t[e++];
          (n[r++] = (a >> 16) & 255),
            (n[r++] = (a >> 8) & 255),
            (n[r++] = (a >> 0) & 255),
            (n[r++] = (a >> 24) & 255);
        }
      }
      function Nt(t, e, a, n, r) {
        for (a = e + a; e < a; ) {
          const a = t[e++];
          (n[r++] = ((a >> 16) & 240) | ((a >> 12) & 15)),
            (n[r++] = ((a >> 0) & 240) | ((a >> 28) & 15));
        }
      }
      function Pt(t, e, a, n, r) {
        for (a = e + a; e < a; ) {
          const a = t[e++];
          (n[r++] = (a >> 24) & 255),
            (n[r++] = (a >> 16) & 255),
            (n[r++] = (a >> 8) & 255),
            (n[r++] = (a >> 0) & 255);
        }
      }
      function Bt(t, e, a, n) {
        return E(t, 8) != la
          ? 0
          : ((e[0] = E(t, fa) + 1),
            (a[0] = E(t, fa) + 1),
            (n[0] = E(t, 1)),
            E(t, ha),
            1);
      }
      function Lt(t, e) {
        let a = 0;
        return t < 4
          ? t + 1
          : ((a = (t - 2) >> 1), ((2 + (1 & t)) << a) + E(e, a) + 1);
      }
      function Ct(t, e) {
        if (e.Q + 8 > e.ya) {
          var a = t.Y,
            n = 0;
          for (p(a != i); 0 != a[n].s; ) {
            var r = a,
              s = e;
            const t = (s.T >> s.g) & 1;
            s.L
              ? (s.fa = 1)
              : (++s.g,
                s.g >= 8 && y(s),
                s.Q == s.ya && 32 == s.g && (s.L = 1)),
              (n = n + r[n].s + t);
          }
          return a[n].kc;
        }
        for (n = 0, p((a = t.Y) != i); 0 != a[n].s; )
          (r = a), (s = (e.T >> e.g) & 1), ++e.g, (n = n + r[n].s + s);
        return a[n].kc;
      }
      function Ft(t, e) {
        if (t != i) {
          var a = 0,
            n = 0;
          for (a = 0; a < e; ++a) {
            var r = t[a].va;
            for (n = 0; n < ua; ++n) x(r[n]);
          }
        }
      }
      function Zt(t, e, a) {
        return (
          p(
            (e =
              0 == t.eb ? 0 : t.ac[t.bd + t.Ec * (a >> t.eb) + (e >> t.eb)]) <
              t.hc
          ),
          t.Db[+e]
        );
      }
      function Mt(t, e, a, n) {
        let r = t.Na;
        const l = t.O,
          f = l + e;
        var h = a,
          d = n;
        for (o((n = t.Xa), (a = t.vb), h, d, t.l * e); r-- > 0; ) {
          e = t.nc[r];
          let x = l;
          var u = h,
            _ = d;
          (d = n), (h = a);
          switch ((p(x < (b = f)), p(b <= e.Vb), e.Qc)) {
            case ya:
              for (u = 0, e = h + (b - x) * e.U; h < e; ) {
                var b,
                  w = ((b = d)[(_ = h)] >> 8) & 255,
                  g =
                    16711935 &
                    (g = (g = (16711935 & b[_]) >>> 0) + ((w << 16) | w));
                (d[h++] = (((4278255360 & b[_]) >>> 0) | g) >>> 0),
                  32 == x && u++;
              }
              break;
            case va:
              var m = x;
              (u = b), (_ = d), (w = h), (g = (E = e).U);
              if (0 == m) {
                var v = 0;
                for (Ut(_, w, _a), v = 1; v < g; ++v)
                  Ut(_, w + v, _[w + v - 1]);
                (w += g), ++m;
              }
              for (
                var k = (1 << E.n) - 1,
                  y = gt(g, E.n),
                  A = E.u,
                  E = +(m >> E.n) * y;
                m < u;

              ) {
                var R = A,
                  U = E;
                let t = i;
                for (
                  Ut(_, w, _[w - g + 0]), t = yr[(R[U++] >> 8) & 15], v = 1;
                  v < g;
                  ++v
                ) {
                  let e = 0;
                  0 == (v & k) && (t = yr[(R[U++] >> 8) & 15]),
                    (e = t(_[w + v - 1], _, w + v - g)),
                    Ut(_, w + v, e);
                }
                (w += g), 0 == (++m & k) && (E += y);
              }
              b != e.Vb && o(d, h - (e = e.U), d, h + (b - x - 1) * e, e);
              break;
            case ka:
              for (
                u = e.U,
                  _ = (1 << e.n) - 1,
                  w = gt(u, e.n),
                  g = e.u,
                  e = +(x >> e.n) * w;
                x < b;

              ) {
                for (v = g, m = e, k = s(Ar), y = 0, y = 0; y < u; ++y)
                  0 == (y & _) &&
                    ((A = v[m++]),
                    ((E = k).Cc = (A >> 0) & 255),
                    (E.Bc = (A >> 8) & 255),
                    (E.Kc = (A >> 16) & 255)),
                    (E = (A = d[h + y]) >>> 8),
                    (R = A >>> 16),
                    (U = A),
                    (R += Ot(k.Cc, E)),
                    (R &= 255),
                    (U += Ot(k.Bc, E)),
                    (U += Ot(k.Kc, R)),
                    (U &= 255),
                    (d[h + y] = ((4278255360 & A) | (R << 16) | U) >>> 0);
                (h += u), ++x, 0 == (x & _) && (e += w);
              }
              break;
            case Aa:
              u == d && e.n > 0
                ? ((u = (b - x) * gt(e.U, e.n)),
                  c(d, (_ = h + (b - x) * e.U - u), d, h, u),
                  Dt(e, x, b, d, _, d, h))
                : Dt(e, x, b, u, _, d, h);
          }
          (h = n), (d = a);
        }
      }
      function Wt(t, e) {
        var a = t.V,
          n = t.Ha + t.l * t.O;
        if (!((i = e - t.O) <= 0)) {
          Mt(t, i, a, n);
          var r = t.N;
          a = t.Xa;
          let d = [t.vb];
          n = t.O;
          var i = e,
            s = d,
            o = r.width;
          if ((p(n < i), p(r.t < r.Ka), i > r.K && (i = r.K), n < r.k)) {
            var l = r.k - n;
            n = r.k;
            s[0] += o * l;
          }
          if (
            (n >= i
              ? (n = 0)
              : ((s[0] += r.t),
                (r.w = n - r.k),
                (r.m = r.Ka - r.t),
                (r.h = i - n),
                (n = 1)),
            n)
          ) {
            if (((d = d[0]), (n = t.Ib), (i = r.width), n.J < Ze)) {
              s = (f = n.c.RGBA).ma;
              let e = f.Sa + t.xa * f.f;
              if (r.I) a = EmitRescaledRows(t, a, d, i, r.h, s, e, f.f);
              else {
                (o = n.J), (l = r.m), (r = r.h);
                for (var f = f.f, h = r; h-- > 0; ) {
                  const t = a;
                  let n = d,
                    r = l;
                  const h = s;
                  let u = e;
                  switch (o) {
                    case Se:
                      for (r = n + r; n < r; ) {
                        var c = t[n++];
                        (h[u++] = (c >> 16) & 255),
                          (h[u++] = (c >> 8) & 255),
                          (h[u++] = (c >> 0) & 255);
                      }
                      break;
                    case ze:
                      It(t, n, r, h, u);
                      break;
                    case Be:
                      It(t, n, r, h, u), WebPApplyAlphaMultiply(h, 0, r, 1, 0);
                      break;
                    case Oe:
                      for (r = n + r; n < r; )
                        (c = t[n++]),
                          (h[u++] = (c >> 0) & 255),
                          (h[u++] = (c >> 8) & 255),
                          (h[u++] = (c >> 16) & 255);
                      break;
                    case De:
                      Pt(t, n, r, h, u);
                      break;
                    case Le:
                      Pt(t, n, r, h, u), WebPApplyAlphaMultiply(h, 0, r, 1, 0);
                      break;
                    case Ie:
                      Pt(t, n, r, h, u);
                      break;
                    case Ce:
                      Pt(t, n, r, h, u), WebPApplyAlphaMultiply(h, 1, r, 1, 0);
                      break;
                    case Ne:
                      Nt(t, n, r, h, u);
                      break;
                    case Fe:
                      Nt(t, n, r, h, u), WebPApplyAlphaMultiply4444(h, r, 1, 0);
                      break;
                    case Pe:
                      for (r = n + r; n < r; )
                        (c = t[n++]),
                          (h[u++] = ((c >> 16) & 248) | ((c >> 13) & 7)),
                          (h[u++] = ((c >> 5) & 224) | ((c >> 3) & 31));
                      break;
                    default:
                      p(0);
                  }
                  (d += i), (e += f);
                }
                a = r;
              }
              t.xa += a;
            } else
              t.xa = r.I
                ? EmitRescaledRowsYUVA(t, a, d, i, r.h)
                : EmitRowsYUVA(t, a, d, i, r.m, r.h);
            p(t.xa <= n.height);
          }
          (t.O = e), p(t.O <= t.v);
        }
      }
      function Vt(t, e, a, n, r, s) {
        let o = 1,
          l = 0,
          f = 0;
        const h = t.o,
          c = t.cb;
        let d = c.Db,
          u = a,
          _ = a;
        a += n * r;
        const b = (r = pa + ga) + c.xb,
          w = c.xb > 0 ? c.Yb : i,
          g = c.Dc;
        let m = !1;
        for (p(d != i); !h.L && u < a; ) {
          let y = 0;
          if (
            (m ||
              (0 == (l & g) && (d = Zt(c, l, f)), A(h), (y = Ct(d.va[Sr], h))),
            y < pa || m)
          ) {
            if (!m) {
              var v = (o = m = 0),
                k = 0;
              A(h),
                (m = Ct(d.va[zr], h)),
                (o = y),
                A(h),
                (v = Ct(d.va[Or], h)),
                A(h),
                (k = Ct(d.va[Dr], h)),
                (e[u] = ((k << 24) >>> 0) + (m << 16) + (o << 8) + v);
            }
            if (
              ((m = !1),
              ++u,
              ++l,
              l >= n &&
                ((l = 0), ++f, s != i && f % Er == 0 && s(t, f), w != i))
            )
              for (; _ < u; ) (o = e[_++]), (w.ea[(Fa * o) >>> w.bb] = o);
          } else if (y < r) {
            for (
              v = v = 0,
                o = Lt(y - pa, h),
                y = Ct(d.va[Ir], h),
                A(h),
                (v = Lt(y, h)) > Lr
                  ? (v -= Lr)
                  : ((y = Cr[v - 1]),
                    (y = (y >> 4) * n + (8 - (15 & y))),
                    (v = y >= 1 ? y : 1)),
                y = 0,
                y = 0;
              y < o;
              ++y
            )
              e[u + y] = e[u + y - v];
            for (u += o, l += o; l >= n; )
              (l -= n), ++f, s != i && f % Er == 0 && s(t, f);
            if (u < a && ((d = Zt(c, l, f)), w != i))
              for (; _ < u; ) (o = e[_++]), (w.ea[(Fa * o) >>> w.bb] = o);
          } else if (y < b) {
            for (m = y - r, p(w != i); _ < u; )
              (y = e[_++]), (w.ea[(Fa * y) >>> w.bb] = y);
            (y = e),
              (v = u),
              p(m <= -1 >>> (k = w).bb),
              (y[v] = k.ea[m]),
              (m = !0);
            continue;
          }
          (o = !h.fa) || End;
        }
        return (
          s != i && s(t, f),
          h.fa || !o || (h.L && u < a)
            ? ((o = 0), (t.a = h.L ? qe : Ke))
            : u == a && (t.Ob = mn),
          o
        );
      }
      function Ht(t) {
        p(t), (t.ac = i), Ft(t.Db, t.hc);
        const e = t.Yb;
        e != i && ((e.ea = i), (e.ea = i)), p(t);
      }
      function jt() {
        const t = s(Rn);
        return t == i ? i : ((t.a = He), (t.Wa = kn), (t.Ob = kn), t);
      }
      function Gt(t) {
        let e = 0;
        if (t != i) {
          for (Ht(t.cb), t.V = i, t.V = i, e = 0; e < t.Na; ++e) {
            const a = t.nc[e];
            (a.u = i), (a.u = i);
          }
          (t.Na = 0), (t.Ub = 0), (t.Mc = i), (t.Mc = i), (t.Ib = i);
        }
      }
      function Kt(t, e, a, n, r) {
        var o = 1;
        (t = [t]), (e = [e]);
        var l = n.o,
          f = n.cb,
          h = i,
          c = i;
        for (c = 0; ; ) {
          if (a)
            for (; o && E(l, 1); ) {
              var d = t,
                u = e,
                w = 1,
                g = (z = n).o,
                m = ((o = z.nc[z.Na]), E(g, 2));
              if (z.Ub & (1 << m)) o = 0;
              else {
                switch (
                  ((z.Ub |= 1 << m),
                  (o.Qc = m),
                  (o.U = d[0]),
                  (o.Vb = u[0]),
                  (o.u = [i]),
                  (o.b = 0),
                  ++z.Na,
                  p(z.Na <= ma),
                  m)
                ) {
                  case va:
                  case ka:
                    (o.n = E(g, 3) + 2),
                      (w = Kt(gt(o.U, o.n), gt(o.Vb, o.n), 0, z, o.u));
                    break;
                  case Aa:
                    if (
                      ((w =
                        (u = E(g, 8) + 1) > 16 ? 0 : u > 4 ? 1 : u > 2 ? 2 : 3),
                      (d[0] = gt(o.U, w)),
                      (o.n = w),
                      (d = w = Kt(u, 1, 0, z, o.u)))
                    )
                      if (
                        ((d = u),
                        (w = 0),
                        (u = (1 << (8 >>> (z = o).n)) >>> 0),
                        (g = Array(u)) == i)
                      )
                        d = 0;
                      else {
                        m = z.u[0];
                        var v = z.b;
                        for (g[0] = z.u[0][z.b + 0], w = 1; w < d; ++w)
                          g[w] =
                            ((((((4278255360 & m[v + w]) >>> 0) +
                              ((4278255360 & g[w - 1]) >>> 0)) &
                              4278255360) >>>
                              0) |
                              (((16711935 & m[v + w]) + (16711935 & g[w - 1])) &
                                16711935)) >>>
                            0;
                        for (; w < u; ++w) g[w] = 0;
                        (z.u[0] = i),
                          (z.b = i),
                          (z.u[0] = g),
                          (z.b = 0),
                          (d = 1);
                      }
                    w = d;
                    break;
                  case ya:
                    break;
                  default:
                    p(0);
                }
                (o.u = o.u[0]), (o = w);
              }
            }
          if (o && E(l, 1) && !(o = (c = E(l, 4)) >= 1 && c <= da)) {
            n.a = Ke;
            break;
          }
          if (o)
            t: {
              o = n;
              var k = t[0],
                y = e[0],
                z = ((d = c), (v = m = 0), (v = o.o), o.cb);
              (w = [i]), (u = i), (g = 1);
              if (a && E(v, 1)) {
                y = (k = gt(k, (m = E(v, 3) + 2))) * (O = gt(y, m));
                if (!Kt(k, O, 0, o, w)) {
                  (o.a = Ke), Ft(u, g), (o = 0);
                  break t;
                }
                for (w = w[0], z.eb = m, m = 0; m < y; ++m)
                  (k = (w[m] >>> 8) & 65535), (w[m] = k), k >= g && (g = k + 1);
              }
              if (v.fa) Ft(u, g), (o = 0);
              else if ((p(g <= 65536), (u = b(g, An)) == i))
                (o.a = je), Ft(u, g), (o = 0);
              else {
                for (m = 0; m < g; ++m)
                  for (y = u[m].va, v = 0; v < ua; ++v) {
                    (k = Nr[v]), 0 == v && d > 0 && (k += 1 << d);
                    e: {
                      const t = k;
                      k = o;
                      const e = y[+v];
                      var O,
                        D = 0;
                      if (E((O = k.o), 1)) {
                        var I = Array(2),
                          N = Array(2),
                          P = Array(2),
                          B = ((D = E(O, 1) + 1), E(O, 1));
                        (I[0] = E(O, 0 == B ? 1 : 8)),
                          (N[0] = 0),
                          (P[0] = D - 1),
                          2 == D &&
                            ((I[1] = E(O, 8)), (N[1] = 1), (P[1] = D - 1));
                        a: {
                          B = 0;
                          var L = 0;
                          if (
                            (p(e != i),
                            p(P != i),
                            p(N != i),
                            p(I != i),
                            U(e, D))
                          ) {
                            for (L = 0; L < D; ++L)
                              if (N[L] != La) {
                                if (I[L] < 0 || I[L] >= t) {
                                  (B = B && R(e)) || x(e), (D = B);
                                  break a;
                                }
                                if (!T(e, I[L], N[L], P[L])) {
                                  (B = B && R(e)) || x(e), (D = B);
                                  break a;
                                }
                              }
                            (B = (B = 1) && R(e)) || x(e), (D = B);
                          } else D = 0;
                        }
                      } else {
                        if (((D = 0), (N = []), (I = E(O, 4) + 4) > Pr)) {
                          (k.a = Ke), (k = 0);
                          break e;
                        }
                        if ((P = Array(t)) == i) {
                          (k.a = je), (k = 0);
                          break e;
                        }
                        for (D = 0; D < I; ++D) N[Br[D]] = E(O, 3);
                        a: {
                          var C = N;
                          (N = t), (I = P), (B = 0), (L = (D = k).o);
                          let e = 0,
                            a = 0,
                            n = ba;
                          const r = s(Ba);
                          if (S(r, C, Pr)) {
                            if (E(L, 1)) {
                              if (
                                ((e = 2 + 2 * E(L, 3)),
                                (a = 2 + E(L, e)),
                                a > N)
                              ) {
                                (D.a = Ke), x(r), (D = B);
                                break a;
                              }
                            } else a = N;
                            for (e = 0; e < N; ) {
                              var F = 0;
                              if (0 == a--) break;
                              if ((A(L), (F = Ct(r, L)) < Rr))
                                (I[e++] = F), 0 != F && (n = F);
                              else {
                                C = F == Ur;
                                const t = Tr[(F = F - Rr)];
                                if (e + (F = E(L, xr[F]) + t) > N) {
                                  (D.a = Ke), x(r), (D = B);
                                  break a;
                                }
                                for (C = C ? n : 0; F-- > 0; ) I[e++] = C;
                              }
                            }
                            (B = 1), x(r), (D = B);
                          } else (D.a = Ke), (D = 0);
                        }
                        D && (D = S(e, P, t));
                      }
                      (D = D && !O.fa) ? (k = 1) : ((k.a = Ke), (k = 0));
                    }
                    if (!k) {
                      Ft(u, g), (o = 0);
                      break t;
                    }
                  }
                (z.ac = w), (z.hc = g), (z.Db = u), (o = 1);
              }
            }
          if (!o) {
            n.a = Ke;
            break;
          }
          if (c > 0) {
            if (
              ((f.xb = 1 << c),
              (z = 1 << c),
              p((d = f.Yb) != i),
              p(c > 0),
              (d.ea = _(z, 0)),
              d.ea == i ? (c = 0) : ((d.bb = 32 - c), (c = 1)),
              !c)
            ) {
              (n.a = je), (o = 0);
              break;
            }
          } else f.xb = 0;
          if (
            ((c = n),
            (d = t[0]),
            (z = e[0]),
            (u = (w = c.cb).eb),
            (c.l = d),
            (c.v = z),
            (w.Ec = gt(d, u)),
            (w.Dc = 0 == u ? -1 : (1 << u) - 1),
            a)
          ) {
            n.Ob = vn;
            break;
          }
          if (((c = 0), (h = Array(t * e)) == i)) {
            (n.a = je), (o = 0);
            break;
          }
          o = (o = Vt(n, h, c, t, e, i)) && !l.fa;
          break;
        }
        return (
          o
            ? (r != i ? (r[0] = h) : (p(h == i), p(a)), a || Ht(f))
            : (Ht(f), n.a == Ke && n.o.L && (n.a = qe)),
          o
        );
      }
      function Yt(t, e) {
        const a = t.l * t.v,
          n = a + e + e * Er;
        return (
          p(t.l <= e),
          (t.V = Array(n)),
          (t.Ha = 0),
          t.V == i
            ? ((t.Xa = i), (t.a = je), 0)
            : ((t.Xa = t.V), (t.vb = t.Ha + a + e), 1)
        );
      }
      function qt(t, e) {
        var a = e - t.O,
          n = t.V,
          r = t.Ha + t.l * t.O;
        if (!(a <= 0)) {
          Mt(t, a, n, r);
          (a = (r = t.N.width) * a), (n = t.N.ka), (r = t.N.fd + r * t.O);
          var i = t.Xa,
            s = t.vb,
            o = 0;
          for (o = 0; o < a; ++o) n[r + o] = (i[s + o] >>> 8) & 255;
          t.O = t.xa = e;
        }
      }
      function ft(t, e) {
        return t < 0 ? 0 : t > e ? e : t;
      }
      function Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, p, g) {
        let m;
        const v = (w - 1) >> 1;
        let k = r[i + 0] | (s[o + 0] << 16),
          y = l[f + 0] | (h[c + 0] << 16);
        if (t) {
          var A = (3 * k + y + 131074) >> 2;
          p(t[e + 0], 255 & A, A >> 16, d, u);
        }
        for (
          a &&
            ((A = (3 * y + k + 131074) >> 2),
            p(a[n + 0], 255 & A, A >> 16, _, b)),
            m = 1;
          m <= v;
          ++m
        ) {
          const w = r[i + m] | (s[o + m] << 16),
            v = l[f + m] | (h[c + m] << 16);
          const E = ((A = k + w + y + v + 524296) + 2 * (w + y)) >> 3,
            R = (A + 2 * (k + v)) >> 3;
          t &&
            ((A = (E + k) >> 1),
            (k = (R + w) >> 1),
            p(t[e + 2 * m - 1], 255 & A, A >> 16, d, u + (2 * m - 1) * g),
            p(t[e + 2 * m - 0], 255 & k, k >> 16, d, u + (2 * m - 0) * g)),
            a &&
              ((A = (R + y) >> 1),
              (k = (E + v) >> 1),
              p(a[n + 2 * m - 1], 255 & A, A >> 16, _, b + (2 * m - 1) * g),
              p(a[n + 2 * m + 0], 255 & k, k >> 16, _, b + (2 * m + 0) * g)),
            (k = w),
            (y = v);
        }
        1 & w ||
          (t &&
            ((A = (3 * k + y + 131074) >> 2),
            p(t[e + w - 1], 255 & A, A >> 16, d, u + (w - 1) * g)),
          a &&
            ((A = (3 * y + k + 131074) >> 2),
            p(a[n + w - 1], 255 & A, A >> 16, _, b + (w - 1) * g)));
      }
      function Xt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, mt, 3);
      }
      function $t(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, At, 3);
      }
      function Qt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, Rt, 4);
      }
      function te(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, Et, 4);
      }
      function ee(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, kt, 4);
      }
      function ae(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, yt, 2);
      }
      function ne(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w) {
        Jt(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _, b, w, vt, 2);
      }
      function re(t, e, a, n, r, i, s, o, l, f, h, c, d, u, _) {
        let b;
        for (b = 0; b < d - 1; b += 2)
          u(t[e + 0], r[i + 0], s[o + 0], l, f),
            u(t[e + 1], r[i + 0], s[o + 0], l, f + _),
            u(a[n + 0], r[i + 0], s[o + 0], h, c),
            u(a[n + 1], r[i + 0], s[o + 0], h, c + _),
            (e += 2),
            (n += 2),
            i++,
            o++,
            (f += 2 * _),
            (c += 2 * _);
        b == d - 1 &&
          (u(t[e + 0], r[i + 0], s[o + 0], l, f),
          u(a[n + 0], r[i + 0], s[o + 0], h, c));
      }
      function ie(t, e, a, n, r, i, s, o, l, f, h, c, d) {
        re(t, e, a, n, r, i, s, o, l, f, h, c, d, Rt, 4);
      }
      function se(t, e, a, n, r, i, s, o, l, f, h, c, d) {
        re(t, e, a, n, r, i, s, o, l, f, h, c, d, Et, 4);
      }
      function oe(t, e, a, n, r, i, s, o, l, f, h, c, d) {
        re(t, e, a, n, r, i, s, o, l, f, h, c, d, kt, 4);
      }
      function le(t, e, a, n, r, i, s, o, l, f, h, c, d) {
        re(t, e, a, n, r, i, s, o, l, f, h, c, d, yt, 2);
      }
      function fe(t, e, a, n, r, i) {
        for (; r-- > 0; ) {
          var s = t,
            o = e + (a ? 1 : 0),
            l = t,
            f = e + (a ? 0 : 3),
            h = 0;
          for (h = 0; h < n; ++h) {
            if (255 != l[f + 4 * h]) {
              let t = s,
                e = o + 4 * h + 0;
              s[o + 4 * h + 0],
                (t[e] = 0),
                (t = s),
                (e = o + 4 * h + 1),
                s[o + 4 * h + 1],
                (t[e] = 0),
                (t = s),
                (e = o + 4 * h + 2),
                s[o + 4 * h + 2],
                (t[e] = 0);
            }
          }
          e += i;
        }
      }
      function he(t, e) {
        const a = e.j.c.Va,
          n = a.y,
          r = a.D + t.w * a.F,
          i = a.c,
          s = a.B + (t.w >> 1) * a.nb,
          l = a.S,
          f = a.C + (t.w >> 1) * a.rb,
          h = t.m,
          c = t.h,
          d = parseInt((h + 1) / 2, 10),
          u = parseInt((c + 1) / 2, 10);
        let _;
        for (_ = 0; _ < c; ++_) o(n, r + _ * a.F, t.y, t.D + _ * t.F, h);
        for (_ = 0; _ < u; ++_)
          o(i, s + _ * a.nb, t.c, t.B + _ * t.Da, d),
            o(l, f + _ * a.rb, t.S, t.C + _ * t.Da, d);
        return t.h;
      }
      function ce(t, e) {
        const a = (c = e.j).c.RGBA,
          n = a.ma;
        let r = a.Sa + t.w * a.f;
        const i = t.y;
        let s = t.D;
        const o = t.c;
        let l = t.B;
        const f = t.S;
        let h = t.C;
        var c = Yr[c.J];
        const d = t.m,
          u = t.h - 1;
        let _;
        for (_ = 0; _ < u; _ += 2)
          c(i, s, i, s + t.F, o, l, f, h, n, r, n, r + a.f, d),
            (s += 2 * t.F),
            (l += t.Da),
            (h += t.Da),
            (r += 2 * a.f);
        return _ == u && c(i, s, i, s, o, l, f, h, n, r, n, r, d), t.h;
      }
      function de(t, e) {
        let a = t.h;
        const n = e.j.c.RGBA,
          r = n.ma;
        let s = n.Sa + t.w * n.f;
        const l = Kr[e.j.J],
          f = t.y;
        let h = t.D;
        const c = t.c;
        let d = t.B;
        const u = t.S;
        let _ = t.C,
          b = e.Qb,
          w = e.Rb,
          p = e.lc,
          g = e.mc,
          m = t.w;
        const v = t.w + t.h,
          k = t.m,
          y = parseInt((k + 1) / 2, 10);
        for (
          0 == m
            ? l(i, i, f, h, c, d, u, _, c, d, u, _, i, i, r, s, k)
            : (l(e.Sb, e.Tb, f, h, b, w, p, g, c, d, u, _, r, s - n.f, r, s, k),
              ++a);
          m + 2 < v;
          m += 2
        )
          (b = c),
            (w = d),
            (p = u),
            (g = _),
            (d += t.Da),
            (_ += t.Da),
            (s += 2 * n.f),
            (h += 2 * t.F),
            l(f, h - t.F, f, h, b, w, p, g, c, d, u, _, r, s - n.f, r, s, k);
        return (
          (h += t.F),
          t.k + v < t.K
            ? (o(e.Sb, e.Tb, f, h, 1 * k),
              o(e.Qb, e.Rb, c, d, 1 * y),
              o(e.lc, e.mc, u, _, 1 * y),
              a--)
            : 1 & v ||
              l(f, h, i, i, c, d, u, _, c, d, u, _, r, s + n.f, i, i, k),
          a
        );
      }
      function ue(t, e) {
        var a = t.p,
          n = t.q;
        const r = e.j.c.Va,
          s = t.m,
          l = t.h,
          f = r.p;
        let h = r.q + t.w * r.Fa;
        (a = t.p), (n = t.q);
        let c = 0;
        if (a != i)
          for (c = 0; c < l; ++c)
            o(f, h, a, n, 1 * s), (n += t.width), (h += r.Fa);
        else if (r.p != i) for (c = 0; c < l; ++c) d(f, h, 255, s), (h += r.Fa);
        return 0;
      }
      function _e(t, e, a) {
        let n = t.w;
        return (
          (a[0] = t.h),
          t.Bb &&
            (0 == n ? --a[0] : (--n, (e[0] -= t.width)),
            t.k + t.w + t.h == t.K && (a[0] = t.K - t.k - n)),
          n
        );
      }
      function be(e, a) {
        const n = e.p;
        var r = [e.q];
        if (n != i) {
          var s = e.m,
            o = a.j.J,
            l = o == Ie || o == Ce,
            f = a.j.c.RGBA,
            h = [0],
            c = _e(e, r, h),
            d = ((r = r[0]), f.ma),
            u = (c = f.Sa + c * f.f) + (l ? 0 : 3),
            _ = 255,
            b = 0,
            w = 0;
          for (w = 0; w < h[0]; ++w) {
            for (b = 0; b < s; ++b) {
              const t = n[r + b];
              (d[u + 4 * b] = t), (_ &= t);
            }
            (r += e.width), (u += f.f);
          }
          255 != _ && t(o) && WebPApplyAlphaMultiply(d, c, l, s, h, f.f);
        }
        return 0;
      }
      function we(e, a) {
        const n = e.p;
        var r = [e.q];
        if (n != i) {
          const i = e.m,
            o = a.j.J,
            l = a.j.c.RGBA,
            f = [0];
          var s = _e(e, r, f);
          r = r[0];
          const h = l.ma;
          let c = (s = l.Sa + s * l.f) + 1,
            d = 15,
            u = 0;
          for (j = 0; j < f[0]; ++j) {
            for (u = 0; u < i; ++u) {
              const t = n[r + u] >> 4;
              (h[c + 2 * u] = (240 & h[c + 2 * u]) | t), (d &= t);
            }
            (r += e.width), (c += l.f);
          }
          15 != d && t(o) && WebPApplyAlphaMultiply4444(h, s, i, f, l.f);
        }
        return 0;
      }
      function pe(e) {
        let a = e.ka;
        const n = a.j.J,
          r = n < Ze,
          s = n == ze || n == De || n == Ie || n == Ne || n == Me || t(n);
        if (
          ((a.memory = i),
          (a.$a = i),
          (a.zb = i),
          (a.ad = i),
          !xe(a.Qa, e, s ? Ze : Me))
        )
          return 0;
        if (e.I) {
          if (!(r ? InitRGBRescaler(e, a) : InitYUVRescaler(e, a)))
            return alert("memory error #1"), 0;
        } else {
          if (r) {
            if (((a.$a = ce), e.Bb)) {
              const t = (e.m + 1) >> 1,
                n = e.m + 2 * t;
              let r;
              const s = [];
              for (r = 0; r < n; ++r) s.push(205);
              if ((s.push(0), (a.memory = s), a.memory == i))
                return alert("memory error #2"), 0;
              (a.Sb = a.memory),
                (a.Tb = 0),
                (a.Qb = a.Sb),
                (a.Rb = a.Tb + e.m),
                (a.lc = a.Qb),
                (a.mc = a.Rb + t),
                (a.$a = de),
                (Kr[Se] = Xt),
                (Kr[ze] = Qt),
                (Kr[Oe] = $t),
                (Kr[De] = te),
                (Kr[Ie] = ee),
                (Kr[Ne] = ae),
                (Kr[Pe] = ne);
            }
          } else a.$a = he;
          s &&
            (t(n) &&
              ((WebPApplyAlphaMultiply = fe),
              (Kr[Be] = Qt),
              (Kr[Le] = te),
              (Kr[Ce] = ee),
              (Kr[Fe] = ae)),
            (a.zb = n == Ne || n == Fe ? we : r ? be : ue));
        }
        if (r && !Gr) {
          for (e = 0; e < 256; ++e)
            (Zr[e] = (89858 * (e - 128) + Fr) >> mr),
              (Vr[e] = -22014 * (e - 128) + Fr),
              (Wr[e] = -45773 * (e - 128)),
              (Mr[e] = (113618 * (e - 128) + Fr) >> mr);
          for (e = vr; e < kr; ++e)
            (a = (76283 * (e - 16) + Fr) >> mr),
              (Hr[e - vr] = ft(a, 255)),
              (jr[e - vr] = ft((a + 8) >> 4, 15));
          Gr = 1;
        }
        return 1;
      }
      function ge(t) {
        const e = t.ka;
        let a = t.m;
        const n = t.h;
        return (
          p(!(1 & t.w)),
          a <= 0 || n <= 0
            ? 0
            : ((a = e.$a(t, e)), (e.ec += a), e.zb && e.zb(t, e), 1)
        );
      }
      function me(t) {
        ((t = t.ka).memory = ""), (t.memory = i);
      }
      function ve(t, e) {
        return t[e + 0] | (t[e + 1] << 8) | (t[e + 2] << 16);
      }
      function ke(t, e) {
        return (ve(t, e) | (t[e + 3] << 24)) >>> 0;
      }
      function ye(t, e, a, n, r, o, l) {
        var f = 0,
          h = [0],
          c = "VP8StatusCode";
        const d = s(aa);
        if (t == i || a[0] < za) return Xe;
        (d.data = t), (d.b = [e[0]]), (d.e = [a[0]]), (d.na = [d.na]);
        t: {
          if (
            ((f = d.na),
            p(t != i),
            p(a != i),
            p(f != i),
            (f[0] = 0),
            a[0] >= za && !u(t, e[0], "RIFF", Ta))
          ) {
            if (u(t, e[0] + 8, "WEBP", Ta)) {
              c = Ke;
              break t;
            }
            if ((g = ke(t, e[0] + Ta)) < Ta + Sa) {
              c = Ke;
              break t;
            }
            (f[0] = g), (e[0] += za), (a[0] -= za);
          } else f[0] = 0;
          c = He;
        }
        if (((d.na = d.na[0]), c != He)) return c;
        (f = d.na > 0), (g = [0]);
        t: if (
          ((c = Sa + Oa),
          p(t != i),
          p(a != i),
          p(h != i),
          (h[0] = 0),
          a[0] < Sa)
        )
          c = Xe;
        else {
          if (!u(t, e[0], "VP8X", Ta)) {
            var _ = 0,
              b = 0,
              w = 0;
            if (ke(t, e[0] + Ta) != Oa) {
              c = Ke;
              break t;
            }
            if (a[0] < c) {
              c = Xe;
              break t;
            }
            if (
              ((w = ke(t, e[0] + 8)),
              (_ = 1 + ve(t, e[0] + 12)) * (b = 1 + ve(t, e[0] + 15)) >= Ia)
            ) {
              c = Ke;
              break t;
            }
            g != i && (g[0] = w),
              n != i && (n[0] = _),
              r != i && (r[0] = b),
              (e[0] += c),
              (a[0] -= c),
              (h[0] = 1);
          }
          c = He;
        }
        if (c != He) return c;
        if (!f && h[0]) return Ke;
        if ((o != i && (o[0] = !!(g[0] & Da)), h && l == i)) return He;
        if (a < Ta) return Xe;
        if ((f && h[0]) || (!f && !h[0] && !u(t, e[0], "ALPH", Ta))) {
          (d.$ = [d.$]), (d.G = [d.G]), (d.pa = [d.pa]);
          t: {
            (h = d.na), (f = d.$);
            var g = d.G;
            (c = d.pa), (_ = 0), (b = 0), (w = 0);
            let n = Ta + Sa + Oa;
            for (
              p(t != i),
                p(a != i),
                _ = t,
                b = e[0],
                w = a[0],
                p(f != i),
                p(c != i),
                f[0] = i,
                g[0] = i,
                c[0] = 0;
              ;

            ) {
              let t = 0,
                r = 0;
              if (((e[0] = b), (a[0] = w), w < Sa)) {
                c = Xe;
                break t;
              }
              if (
                ((t = ke(_, b + Ta)),
                (r = (Sa + t + 1) & -2),
                (n += r),
                h > 0 && n > h)
              ) {
                c = Ke;
                break t;
              }
              if (w < r) {
                c = Xe;
                break t;
              }
              if (u(_, b, "ALPH", Ta)) {
                if (!u(_, b, "VP8 ", Ta) || !u(_, "VP8L", Ta)) {
                  c = He;
                  break t;
                }
              } else (f[0] = _), (g[0] = b + Sa), (c[0] = t);
              (b += r), (w -= r);
            }
            c = 0;
          }
          if (((d.$ = d.$[0]), (d.G = d.G[0]), (d.pa = d.pa[0]), c != He))
            return c;
        }
        (d.ta = [d.ta]), (d.ia = [d.ia]);
        t: if (
          ((h = d.na),
          (f = d.ta),
          (g = d.ia),
          (b = !u(t, e[0], "VP8 ", Ta)),
          (c = !u(t, e[0], "VP8L", Ta)),
          (_ = Ta + Sa),
          p(t != i),
          p(a != i),
          p(f != i),
          p(g != i),
          a[0] < Sa)
        )
          c = Xe;
        else {
          if (b || c) {
            if (((b = ke(t, e[0] + Ta)), h >= _ && b > h - _)) {
              c = Ke;
              break t;
            }
            (f[0] = b), (e[0] += Sa), (a[0] -= Sa), (g[0] = c);
          } else (g[0] = a >= 1 && t[e + 0] == la), (f[0] = a[0]);
          c = He;
        }
        if (((d.ta = d.ta[0]), (d.ia = d.ia[0]), c != He)) return c;
        if (d.ta > Na) return Ke;
        if (d.ia) {
          if (a[0] < ca) return Xe;
          (h = e[0]),
            (f = a[0]),
            (n = n ? n[0] : i),
            (r = r ? r[0] : i),
            (g = o ? o[0] : i),
            t == i || f < ca
              ? (t = 0)
              : ((c = [0]),
                (_ = [0]),
                (b = [0]),
                k((w = s(ra)), t, h, f),
                Bt(w, c, _, b)
                  ? (n != i && (n[0] = c[0]),
                    r != i && (r[0] = _[0]),
                    g != i && (g[0] = b[0]),
                    (t = 1))
                  : (t = 0));
        } else {
          if (a < oa) return Xe;
          (h = e[0]),
            (f = a[0]),
            (n = n ? n[0] : i),
            (r = r ? r[0] : i),
            !(t == i || f < oa) &&
            f - 3 >= 3 &&
            157 == t[h + 3 + 0] &&
            1 == t[h + 3 + 1] &&
            42 == t[h + 3 + 2]
              ? ((f = t[h + 0] | (t[h + 1] << 8) | (t[h + 2] << 16)),
                (g = 16383 & ((t[h + 7] << 8) | t[h + 6])),
                (t = 16383 & ((t[h + 9] << 8) | t[h + 8])),
                !(!(1 & f) + 0) ||
                ((f >> 1) & 7) > 3 ||
                !((f >> 4) & 1) ||
                f >> 5 >= d.ta
                  ? (t = 0)
                  : (n && (n[0] = g), r && (r[0] = t), (t = 1)))
              : (t = 0);
        }
        return t
          ? (o != i && (o[0] |= d.$ != i),
            l != i &&
              ((l[0] = d),
              (l[0].offset = e[0] - l[0].b),
              p(e[0] - l[0].b < Na),
              p(l[0].offset == l[0].e - a[0])),
            He)
          : Ke;
      }
      function Ae(t) {
        return p(t != i), ye(t[0].data, t[0].b, t[0].e, i, i, i, t);
      }
      function Ee(t, e, a, n) {
        let o = "VP8StatusCode";
        const l = s(ta);
        let f = s(aa);
        if (
          ((f.data = t),
          (f.b = e),
          (f.e = a),
          (f.b = [f.b]),
          (f.e = [f.e]),
          (f = [f]),
          (o = Ae(f)),
          o != He)
        )
          return o;
        if (
          ((f = f[0]),
          (f.b = f.b[0]),
          (f.e = f.e[0]),
          p(n != i),
          ct(Te),
          (l.data = f.data),
          (l.b = e + f.offset),
          (l.e = f.e - f.offset),
          (l.put = ge),
          (l.Mb = pe),
          (l.Pb = me),
          (l.ka = n),
          f.ia)
        ) {
          if ((t = jt()) == i) return je;
          !(function (t, e) {
            const a = [0],
              n = [0],
              r = [0];
            return t == i
              ? 0
              : e == i
              ? ((t.a = Ge), 0)
              : ((t.N = e),
                (t.a = He),
                k(t.o, e.data, e.b, e.e),
                Bt(t.o, a, n, r)
                  ? ((t.Ob = kn),
                    (e.width = a[0]),
                    (e.height = n[0]),
                    (t.Wa = vn),
                    Kt(a[0], n[0], 1, t, i) ? 1 : (Gt(t), p(t.a != He), 0))
                  : ((t.a = Ke), Gt(t), p(t.a != He), 0));
          })(t, l)
            ? (o = t.a)
            : ((o = D(l.width, l.height, n.Qa, n.j)),
              o == He &&
                !(function (t) {
                  let e = i,
                    a = i;
                  return t == i
                    ? 0
                    : ((e = t.N),
                      p(e != i),
                      (a = e.ka),
                      p(a != i),
                      (t.Ib = a.j),
                      (t.Hc = a.Hc),
                      p(t.Ib != i),
                      xe(a.Qa, e, De)
                        ? !Yt(t, e.width) ||
                          (e.I && !AllocateAndInitRescaler(t, e))
                          ? (Gt(t), p(t.a != He), 0)
                          : ((t.Wa = mn),
                            Vt(t, t.V, t.Ha, t.l, t.v, Wt)
                              ? ((a.ec = t.xa), Gt(t), 1)
                              : (Gt(t), p(t.a != He), 0))
                        : ((t.a = Ge), Gt(t), p(t.a != He), 0));
                })(t) &&
                (o = t.a)),
            t != i && Gt(t);
        } else {
          if (
            ((o = s(gn)),
            o != i && (ht(o), (o.za = 0), (o.Hb = 1)),
            (t = o) == i)
          )
            return je;
          (t.qb = 0),
            (t.Ga = f.$),
            (t.G = f.G),
            (t.ub = f.pa),
            ut(t, l)
              ? ((o = D(l.width, l.height, n.Qa, n.j)),
                o == He && !wt(t, l) && (o = t.a))
              : (o = t.a),
            t != i && pt(t);
        }
        return o != He && (r || this).Yc(n.j), o;
      }
      function Re(t, e, a, n, r) {
        const o = { value: 0 };
        a = { value: a };
        const l = s(ea),
          f = s(Ve);
        (l.j = f), (f.J = t);
        const h = { value: f.width },
          c = { value: f.height };
        let d;
        d = a;
        const u = s($e);
        return (
          Ue(e, o, d, u) != He
            ? (d = 0)
            : (h != i && (h.value = u.width),
              c != i && (c.value = u.height),
              (d = 1)),
          d
            ? ((f.width = h.value),
              (f.height = c.value),
              n != i && (n.value = f.width.value),
              r != i && (r.value = f.height.value),
              Ee(e, o.value, a.value, l) != He
                ? i
                : t < Ze
                ? f.c.RGBA.ma
                : f.c.Va.y)
            : i
        );
      }
      function Ue(t, e, a, n) {
        return n == i || t == i
          ? Ge
          : (p(n != i),
            (n.tc = 0),
            (n.width = [n.width]),
            (n.height = [n.height]),
            (n.$b = [n.$b]),
            ye(t, e, a, n.width, n.height, n.$b, i));
      }
      function xe(t, e, a) {
        const n = e.width,
          r = e.height;
        let s = 0,
          o = 0,
          l = n,
          f = r;
        if (
          ((e.Ua = t != i && t.Ua > 0),
          e.Ua &&
            ((l = t.wc),
            (f = t.vc),
            (s = t.t),
            (o = t.k),
            a < Ze || ((s &= -2), (o &= -2)),
            s < 0 || o < 0 || l <= 0 || f <= 0 || s + l > n || o + f > r))
        )
          return 0;
        if (
          ((e.t = s),
          (e.k = o),
          (e.Ka = s + l),
          (e.K = o + f),
          (e.m = l),
          (e.h = f),
          (e.I = t != i && t.I > 0),
          e.I)
        ) {
          if (t.Ba <= 0 || t.Aa <= 0) return 0;
          (e.Ba = t.Ba), (e.Aa = t.Aa);
        }
        return (
          (e.Za = t && t.Za),
          (e.Bb = t == i || !t.ed),
          e.I &&
            ((e.Za = e.Ba < (3 * n) / 4 && e.Aa < (3 * r) / 4), (e.Bb = 0)),
          1
        );
      }
      var Te = 512,
        Se = 0,
        ze = 1,
        Oe = 2,
        De = 3,
        Ie = 4,
        Ne = 5,
        Pe = 6,
        Be = 7,
        Le = 8,
        Ce = 9,
        Fe = 10,
        Ze = 11,
        Me = 12,
        We = 13;
      this.WEBP_CSP_MODE = this.Cd = {
        nd: 0,
        od: 1,
        kd: 2,
        ld: 3,
        jd: 4,
        pd: 5,
        qd: 6,
        rd: 7,
        sd: 8,
        md: 9,
      };
      var Ve = {
          J: "WEBP_CSP_MODE",
          width: 0,
          height: 0,
          Fc: 0,
          c: {
            RGBA: { ma: 0, Sa: 0, f: 0, size: 0 },
            Va: {
              y: 0,
              c: 0,
              S: 0,
              p: 0,
              D: 0,
              B: 0,
              C: 0,
              q: 0,
              F: 0,
              nb: 0,
              rb: 0,
              Fa: 0,
              Wc: 0,
              Rc: 0,
              Uc: 0,
              Wb: 0,
            },
          },
          Ic: _(4, 0),
          Jb: i,
          jc: 0,
        },
        He = 0,
        je = 1,
        Ge = 2,
        Ke = 3,
        Ye = 4,
        qe = 5,
        Je = 6,
        Xe = 7;
      this.VP8StatusCode = this.td = {
        xd: 0,
        yd: 1,
        vd: 2,
        ud: 3,
        Ad: 4,
        zd: 5,
        Bd: 6,
        wd: 7,
      };
      var $e = {
        width: { value: 0 },
        height: { value: 0 },
        $b: { value: 0 },
        tc: 0,
        Yd: 0,
        rotate: 0,
        be: 0,
        Ic: _(3, 0),
      };
      this.WebPGetFeatures = this.Md = function (t, e, a) {
        let n = "VP8StatusCode";
        return (
          Te >>> 8 != Te >>> 8 || a == i
            ? (t = Ge)
            : ((n = Ue(t, [0], (e = [e]), a)), (t = n == Xe ? Ke : n)),
          t
        );
      };
      const Qe = {
        Za: 0,
        ed: 0,
        Ua: 0,
        t: 0,
        k: 0,
        wc: 0,
        vc: 0,
        I: 0,
        Ba: 0,
        Aa: 0,
        ae: 0,
        Td: 0,
        Xd: 0,
        Ic: _(6, 0),
      };
      (this.WebPDecoderConfig = this.Kd =
        { input: s($e), j: s(Ve), options: s(Qe) }),
        (this.WebPInitDecoderConfig = this.Nd =
          function (t) {
            return (
              Te >>> 8 != Te >>> 8 || t == i
                ? (t = 0)
                : (p((t = t.input) != i), (t.tc = 0), (t = 1)),
              t
            );
          });
      var ta = {
          width: 0,
          height: 0,
          w: 0,
          m: 0,
          h: 0,
          y: 0,
          c: 0,
          S: 0,
          D: 0,
          B: 0,
          C: 0,
          F: 0,
          Da: 0,
          ka: 0,
          put: 0,
          Mb: 0,
          Pb: 0,
          Bb: 0,
          e: 0,
          data: 0,
          b: 0,
          Za: 0,
          Ua: 0,
          t: 0,
          Ka: 0,
          k: 0,
          K: 0,
          I: 0,
          Ba: 0,
          Aa: 0,
          p: 0,
          q: 0,
        },
        ea = {
          j: s(Ve),
          Sb: 0,
          Qb: 0,
          lc: 0,
          Tb: 0,
          Rb: 0,
          mc: 0,
          ec: 0,
          Qa: s(Qe),
          memory: 0,
          $a: "(OutputFunc)",
          zb: "(OutputFunc)",
          ad: "(OutputRowFunc)",
        },
        aa = {
          data: 0,
          b: 0,
          e: 0,
          offset: 0,
          $: i,
          G: 0,
          pa: 0,
          ta: 0,
          na: 0,
          ia: 0,
        },
        na = { qa: 0, Ia: i, Pd: 0, Ab: 0, la: 0, Z: 0, gc: 0 },
        ra = { T: 0, qa: 0, Ia: 0, ya: 0, Q: 0, g: 0, L: 0, fa: 0 },
        ia = 25,
        sa = [
          0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
          32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303,
          8388607, 16777215,
        ],
        oa = 10,
        la = 47,
        fa = 14,
        ha = 3,
        ca = 5,
        da = 11,
        ua = 5,
        _a = 4278190080,
        ba = 8,
        wa = 15,
        pa = 256,
        ga = 24,
        ma = 4,
        va = 0,
        ka = 1,
        ya = 2,
        Aa = 3,
        Ea = 1,
        Ra = 0,
        Ua = 1,
        xa = 1,
        Ta = 4,
        Sa = 8,
        za = 12,
        Oa = 10,
        Da = 16,
        Ia = 1 * Math.pow(2, 32),
        Na = (-1 - Sa - 1) >>> 0,
        Pa = { kc: 0, s: 0 },
        Ba = { Y: "HuffmanTreeNode*", gb: 0, Pa: 0 },
        La = -1;
      const Ca = { ea: 0, bb: 0 };
      var Fa = 506832829,
        Za = 0,
        Ma = Za,
        Wa = 2,
        Va = 3,
        Ha = 1,
        ja = 4,
        Ga = 5,
        Ka = 6,
        Ya = 3,
        qa = 4,
        Ja = 4,
        Xa = 4,
        $a = 4,
        Qa = 8,
        tn = 3,
        en = 11,
        an = 32,
        nn = 17 * an + 9 * an,
        rn = 1 * an + 8,
        sn = rn + 16 * an + an,
        on = sn + 16,
        ln = { fb: 0, Jc: 0, Nc: 0, Ra: 0 },
        fn = { l: 0, v: 0, gd: 0, hd: 0, uc: 0, $c: 0 };
      const hn = { pb: 0, ob: 0, tb: 0, Kb: _(qa, 0), Cb: _(qa, 0) },
        cn = { Ta: _(Ya, 0), z: w([$a, Qa, tn, en], 0) },
        dn = { Oc: 0, Fb: 0, kb: 0, oc: 0, Lc: _(Ja, 0), Gc: _(Ja, 0) };
      var un = { zc: 0, yc: 0, ab: 0 },
        _n = { X: 0, ua: 0, Nb: 0 };
      const bn = _(2, 0),
        wn = { sc: s(bn), sb: s(bn), qc: s(bn) },
        pn = { ha: 0, d: 0, W: 0, M: un, N: ta };
      var gn = {
          a: "VP8StatusCode",
          za: 0,
          xc: 0,
          o: s(na),
          Ac: s(ln),
          P: s(fn),
          ga: s(dn),
          Ca: s(hn),
          rc: "WebPWorker",
          qb: 0,
          Ja: 0,
          jb: 0,
          oa: pn,
          Ma: 0,
          hb: 0,
          lb: 0,
          mb: 0,
          wb: 0,
          Ya: 0,
          Hb: 0,
          ic: b(8, na),
          Zc: 0,
          yb: b(qa, wn),
          R: s(cn),
          pc: 0,
          Pc: 0,
          dc: 0,
          cc: _(4, 0),
          Xc: 0,
          Sc: 0,
          Vc: 0,
          La: s(_n),
          M: s(un),
          Ea: 0,
          z: 0,
          ca: 0,
          aa: 0,
          ra: 0,
          da: 0,
          ba: 0,
          sa: 0,
          H: 0,
          r: 0,
          ib: 0,
          Gb: 0,
          i: 0,
          d: 0,
          wa: 0,
          Eb: _(16, 0),
          Vd: 0,
          Tc: 0,
          Lb: 0,
          ja: 0,
          Oa: 0,
          A: 0,
          W: 0,
          Zb: _(qa, 0),
          Ga: i,
          G: 0,
          ub: 0,
          Xb: 0,
          Od: 0,
          cd: 0,
          dd: 0,
          Wd: 0,
          fc: 0,
        },
        mn = 0,
        vn = 1,
        kn = 2;
      const yn = {
        Qc: "VP8LImageTransformType",
        n: 0,
        U: 0,
        Vb: 0,
        u: 0,
        b: 0,
      };
      var An = { va: b(ua, Ba) };
      const En = {
        xb: 0,
        Yb: s(Ca),
        Dc: 0,
        eb: 0,
        Ec: 0,
        ac: 0,
        bd: 0,
        hc: 0,
        Db: "HTreeGroup",
      };
      var Rn = {
          a: "VP8StatusCode",
          Wa: "VP8LDecodeState",
          Ob: "VP8LDecodeState",
          N: "VP8Io",
          Ib: "WebPDecBuffer",
          Hc: "WebPDecBuffer",
          V: 0,
          Ha: 0,
          Xa: 0,
          vb: 0,
          o: s(ra),
          l: 0,
          v: 0,
          O: 0,
          xa: 0,
          cb: s(En),
          Na: 0,
          nc: b(ma, yn),
          Ub: 0,
          Mc: 0,
          $d: 0,
          Zd: "*WebPRescaler",
        },
        Un = 4,
        xn = [
          i,
          function (t, e, a, n, r, s, l, f) {
            let h = 0,
              c = f;
            for (
              p(t != i),
                p(l != i),
                p(a > 0),
                p(n > 0),
                p(r > 0),
                p(s >= a * r),
                h = 0;
              h < n;
              ++h
            )
              0 == h ? o(l, f, t, e, r) : z(t, e, l, c - s, l, f, r),
                z(t, e + r, l, c, l, f + r, r * (a - 1)),
                (c += s),
                (e += s),
                (f += s);
          },
          function (t, e, a, n, r, s, l, f) {
            let h = 0,
              c = f;
            for (
              p(t != i),
                p(l != i),
                p(a > 0),
                p(n > 0),
                p(r > 0),
                p(s >= a * r),
                o(l, f, t, e, r),
                z(t, e + r, l, c, l, f + r, r * (a - 1)),
                h = 1;
              h < n;
              ++h
            )
              z(t, (e += s), l, c, l, (f += s), r * a), (c += s);
          },
          function (t, e, a, n, r, s, l, f) {
            var h = f;
            let c = 0;
            for (
              p(t != i),
                p(l != i),
                p(a > 0),
                p(n > 0),
                p(r > 0),
                p(s >= a * r),
                o(l, f, t, e, r),
                z(t, e + r, l, h, l, f + r, r * (a - 1)),
                c = 1;
              c < n;
              ++c
            ) {
              let n = 0;
              for (
                z(t, (e += s), l, (h = h + s) - s, l, (f += s), r), n = r;
                n < a * r;
                ++n
              ) {
                const a = l[h + n - r] + l[h + n - s] - l[h + n - s - r];
                l[f + n] = (t[e + n] + (a < 0 ? 0 : a > 255 ? 255 : a)) & 255;
              }
            }
          },
        ],
        Tn = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
      (this.WebPFreeDecBuffer = this.Yc =
        function (t) {
          t != i && (t.Fc || (t.Jb = ""), (t.jc = 0), (t.Jb = t.jc = i));
        }),
        (r = this);
      var Sn = _(511, 0),
        zn = _(511, 0),
        On = _(2041, 0),
        Dn = _(225, 0),
        In = _(766, 0),
        Nn = 0,
        Pn = 85627,
        Bn = 35468,
        Ln = [
          function (t, e) {
            let a,
              n = 4;
            for (a = 0; a < 4; ++a) n += t[e + a - an] + t[e - 1 + a * an];
            for (n >>= 3, a = 0; a < 4; ++a) d(t, e + a * an, n, 4);
          },
          function (t, e) {
            F(t, e, 4);
          },
          function (t, e) {
            let a = e - an;
            const n = [];
            for (
              n.push(M(t[a - 1], t[a + 0], t[a + 1])),
                n.push(M(t[a + 0], t[a + 1], t[a + 2])),
                n.push(M(t[a + 1], t[a + 2], t[a + 3])),
                n.push(M(t[a + 2], t[a + 3], t[a + 4])),
                a = 0;
              a < 4;
              ++a
            )
              o(t, e + a * an, n, 0, 4);
          },
          function (t, e) {
            const a = t[e - 1],
              n = t[e - 1 + an],
              r = t[e - 1 + 2 * an],
              i = t[e - 1 + 3 * an];
            (t[e + 0 + 0 * an] =
              t[e + 1 + 0 * an] =
              t[e + 2 + 0 * an] =
              t[e + 3 + 0 * an] =
                M(t[e - 1 - an], a, n)),
              (t[e + 0 + 1 * an] =
                t[e + 1 + 1 * an] =
                t[e + 2 + 1 * an] =
                t[e + 3 + 1 * an] =
                  M(a, n, r)),
              (t[e + 0 + 2 * an] =
                t[e + 1 + 2 * an] =
                t[e + 2 + 2 * an] =
                t[e + 3 + 2 * an] =
                  M(n, r, i)),
              (t[e + 0 + 3 * an] =
                t[e + 1 + 3 * an] =
                t[e + 2 + 3 * an] =
                t[e + 3 + 3 * an] =
                  M(r, i, i));
          },
          function (t, e) {
            const a = t[e - 1 + 0 * an],
              n = t[e - 1 + 1 * an],
              r = t[e - 1 + 2 * an],
              i = t[e - 1 - an],
              s = t[e + 0 - an],
              o = t[e + 1 - an],
              l = t[e + 2 - an],
              f = t[e + 3 - an];
            (t[e + 0 + 3 * an] = M(n, r, t[e - 1 + 3 * an])),
              (t[e + 0 + 2 * an] = t[e + 1 + 3 * an] = M(a, n, r)),
              (t[e + 0 + 1 * an] =
                t[e + 1 + 2 * an] =
                t[e + 2 + 3 * an] =
                  M(i, a, n)),
              (t[e + 0 + 0 * an] =
                t[e + 1 + 1 * an] =
                t[e + 2 + 2 * an] =
                t[e + 3 + 3 * an] =
                  M(s, i, a)),
              (t[e + 1 + 0 * an] =
                t[e + 2 + 1 * an] =
                t[e + 3 + 2 * an] =
                  M(o, s, i)),
              (t[e + 2 + 0 * an] = t[e + 3 + 1 * an] = M(l, o, s)),
              (t[e + 3 + 0 * an] = M(f, l, o));
          },
          function (t, e) {
            const a = t[e - 1 + 0 * an],
              n = t[e - 1 + 1 * an],
              r = t[e - 1 + 2 * an],
              i = t[e - 1 - an],
              s = t[e + 0 - an],
              o = t[e + 1 - an],
              l = t[e + 2 - an],
              f = t[e + 3 - an];
            (t[e + 0 + 0 * an] = t[e + 1 + 2 * an] = (i + s + 1) >> 1),
              (t[e + 1 + 0 * an] = t[e + 2 + 2 * an] = (s + o + 1) >> 1),
              (t[e + 2 + 0 * an] = t[e + 3 + 2 * an] = (o + l + 1) >> 1),
              (t[e + 3 + 0 * an] = (l + f + 1) >> 1),
              (t[e + 0 + 3 * an] = M(r, n, a)),
              (t[e + 0 + 2 * an] = M(n, a, i)),
              (t[e + 0 + 1 * an] = t[e + 1 + 3 * an] = M(a, i, s)),
              (t[e + 1 + 1 * an] = t[e + 2 + 3 * an] = M(i, s, o)),
              (t[e + 2 + 1 * an] = t[e + 3 + 3 * an] = M(s, o, l)),
              (t[e + 3 + 1 * an] = M(o, l, f));
          },
          function (t, e) {
            const a = t[e + 1 - an],
              n = t[e + 2 - an],
              r = t[e + 3 - an],
              i = t[e + 4 - an],
              s = t[e + 5 - an],
              o = t[e + 6 - an],
              l = t[e + 7 - an];
            (t[e + 0 + 0 * an] = M(t[e + 0 - an], a, n)),
              (t[e + 1 + 0 * an] = t[e + 0 + 1 * an] = M(a, n, r)),
              (t[e + 2 + 0 * an] =
                t[e + 1 + 1 * an] =
                t[e + 0 + 2 * an] =
                  M(n, r, i)),
              (t[e + 3 + 0 * an] =
                t[e + 2 + 1 * an] =
                t[e + 1 + 2 * an] =
                t[e + 0 + 3 * an] =
                  M(r, i, s)),
              (t[e + 3 + 1 * an] =
                t[e + 2 + 2 * an] =
                t[e + 1 + 3 * an] =
                  M(i, s, o)),
              (t[e + 3 + 2 * an] = t[e + 2 + 3 * an] = M(s, o, l)),
              (t[e + 3 + 3 * an] = M(o, l, l));
          },
          function (t, e) {
            const a = t[e + 0 - an],
              n = t[e + 1 - an],
              r = t[e + 2 - an],
              i = t[e + 3 - an],
              s = t[e + 4 - an],
              o = t[e + 5 - an],
              l = t[e + 6 - an],
              f = t[e + 7 - an];
            (t[e + 0 + 0 * an] = (a + n + 1) >> 1),
              (t[e + 1 + 0 * an] = t[e + 0 + 2 * an] = (n + r + 1) >> 1),
              (t[e + 2 + 0 * an] = t[e + 1 + 2 * an] = (r + i + 1) >> 1),
              (t[e + 3 + 0 * an] = t[e + 2 + 2 * an] = (i + s + 1) >> 1),
              (t[e + 0 + 1 * an] = M(a, n, r)),
              (t[e + 1 + 1 * an] = t[e + 0 + 3 * an] = M(n, r, i)),
              (t[e + 2 + 1 * an] = t[e + 1 + 3 * an] = M(r, i, s)),
              (t[e + 3 + 1 * an] = t[e + 2 + 3 * an] = M(i, s, o)),
              (t[e + 3 + 2 * an] = M(s, o, l)),
              (t[e + 3 + 3 * an] = M(o, l, f));
          },
          function (t, e) {
            const a = t[e - 1 + 0 * an],
              n = t[e - 1 + 1 * an],
              r = t[e - 1 + 2 * an],
              i = t[e - 1 + 3 * an],
              s = t[e - 1 - an],
              o = t[e + 0 - an],
              l = t[e + 1 - an],
              f = t[e + 2 - an];
            (t[e + 0 + 0 * an] = t[e + 2 + 1 * an] = (a + s + 1) >> 1),
              (t[e + 0 + 1 * an] = t[e + 2 + 2 * an] = (n + a + 1) >> 1),
              (t[e + 0 + 2 * an] = t[e + 2 + 3 * an] = (r + n + 1) >> 1),
              (t[e + 0 + 3 * an] = (i + r + 1) >> 1),
              (t[e + 3 + 0 * an] = M(o, l, f)),
              (t[e + 2 + 0 * an] = M(s, o, l)),
              (t[e + 1 + 0 * an] = t[e + 3 + 1 * an] = M(a, s, o)),
              (t[e + 1 + 1 * an] = t[e + 3 + 2 * an] = M(n, a, s)),
              (t[e + 1 + 2 * an] = t[e + 3 + 3 * an] = M(r, n, a)),
              (t[e + 1 + 3 * an] = M(i, r, n));
          },
          function (t, e) {
            const a = t[e - 1 + 0 * an],
              n = t[e - 1 + 1 * an],
              r = t[e - 1 + 2 * an],
              i = t[e - 1 + 3 * an];
            (t[e + 0 + 0 * an] = (a + n + 1) >> 1),
              (t[e + 2 + 0 * an] = t[e + 0 + 1 * an] = (n + r + 1) >> 1),
              (t[e + 2 + 1 * an] = t[e + 0 + 2 * an] = (r + i + 1) >> 1),
              (t[e + 1 + 0 * an] = M(a, n, r)),
              (t[e + 3 + 0 * an] = t[e + 1 + 1 * an] = M(n, r, i)),
              (t[e + 3 + 1 * an] = t[e + 1 + 2 * an] = M(r, i, i)),
              (t[e + 3 + 2 * an] =
                t[e + 2 + 2 * an] =
                t[e + 0 + 3 * an] =
                t[e + 1 + 3 * an] =
                t[e + 2 + 3 * an] =
                t[e + 3 + 3 * an] =
                  i);
          },
        ],
        Cn = [
          function (t, e) {
            let a,
              n = 16;
            for (a = 0; a < 16; ++a) n += t[e - 1 + a * an] + t[e + a - an];
            Z(n >> 5, t, e);
          },
          function (t, e) {
            F(t, e, 16);
          },
          function (t, e) {
            let a;
            for (a = 0; a < 16; ++a) o(t, e + a * an, t, e - an, 16);
          },
          function (t, e) {
            let a;
            for (a = 16; a > 0; --a) d(t, e + 0, t[e - 1], 16), (e += an);
          },
          function (t, e) {
            let a,
              n = 8;
            for (a = 0; a < 16; ++a) n += t[e - 1 + a * an];
            Z(n >> 4, t, e);
          },
          function (t, e) {
            let a,
              n = 8;
            for (a = 0; a < 16; ++a) n += t[e + a - an];
            Z(n >> 4, t, e);
          },
          function (t, e) {
            Z(128, t, e);
          },
        ],
        Fn = [
          function (t, e) {
            let a,
              n = 8;
            for (a = 0; a < 8; ++a) n += t[e + a - an] + t[e - 1 + a * an];
            W(1 * (n >> 4), t, e);
          },
          function (t, e) {
            F(t, e, 8);
          },
          function (t, e) {
            let a;
            for (a = 0; a < 8; ++a) o(t, e + a * an, t, e - an, 8);
          },
          function (t, e) {
            let a;
            for (a = 0; a < 8; ++a) d(t, e + 0, t[e - 1], 8), (e += an);
          },
          function (t, e) {
            let a,
              n = 4;
            for (a = 0; a < 8; ++a) n += t[e - 1 + a * an];
            W(1 * (n >> 3), t, e);
          },
          function (t, e) {
            let a,
              n = 4;
            for (a = 0; a < 8; ++a) n += t[e + a - an];
            W(1 * (n >> 3), t, e);
          },
          function (t, e) {
            W(128, t, e);
          },
        ];
      let Zn, Mn, Wn, Vn, Hn, jn, Gn, Kn, Yn, qn, Jn, Xn, $n, Qn, tr, er;
      var ar = 31,
        nr = [0, 2, 8],
        rr = 3,
        ir = 1,
        sr = [
          0 + 0 * an,
          4 + 0 * an,
          8 + 0 * an,
          12 + 0 * an,
          0 + 4 * an,
          4 + 4 * an,
          8 + 4 * an,
          12 + 4 * an,
          0 + 8 * an,
          4 + 8 * an,
          8 + 8 * an,
          12 + 8 * an,
          0 + 12 * an,
          4 + 12 * an,
          8 + 12 * an,
          12 + 12 * an,
        ],
        or = [
          4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20,
          20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32,
          33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47,
          48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
          65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80,
          81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102,
          104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132,
          134, 136, 138, 140, 143, 145, 148, 151, 154, 157,
        ],
        lr = [
          4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
          90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119,
          122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161,
          164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213,
          217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279,
          284,
        ],
        fr = [-Za, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
        hr = [
          [
            [
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
              [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
              [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128],
            ],
            [
              [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
              [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
              [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128],
            ],
            [
              [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
              [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
              [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128],
            ],
            [
              [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
              [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
              [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128],
            ],
            [
              [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
              [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
              [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128],
            ],
            [
              [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
              [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
              [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128],
            ],
            [
              [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
              [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
              [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128],
            ],
            [
              [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
              [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
              [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128],
            ],
            [
              [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
              [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
              [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128],
            ],
            [
              [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
              [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
              [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128],
            ],
            [
              [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
              [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
              [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128],
            ],
            [
              [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
              [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
              [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128],
            ],
            [
              [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
              [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
              [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128],
            ],
            [
              [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
              [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
              [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
              [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
              [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128],
            ],
            [
              [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
              [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
              [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128],
            ],
            [
              [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
              [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
              [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128],
            ],
            [
              [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
              [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
              [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
              [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
              [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
              [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
              [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
              [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
              [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128],
            ],
            [
              [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
              [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
              [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128],
            ],
            [
              [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
              [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
              [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128],
            ],
            [
              [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
              [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
              [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128],
            ],
            [
              [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
              [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
              [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128],
            ],
            [
              [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
              [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
              [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128],
            ],
            [
              [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
              [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
              [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128],
            ],
            [
              [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
        ],
        cr = [
          [
            [231, 120, 48, 89, 115, 113, 120, 152, 112],
            [152, 179, 64, 126, 170, 118, 46, 70, 95],
            [175, 69, 143, 80, 85, 82, 72, 155, 103],
            [56, 58, 10, 171, 218, 189, 17, 13, 152],
            [114, 26, 17, 163, 44, 195, 21, 10, 173],
            [121, 24, 80, 195, 26, 62, 44, 64, 85],
            [144, 71, 10, 38, 171, 213, 144, 34, 26],
            [170, 46, 55, 19, 136, 160, 33, 206, 71],
            [63, 20, 8, 114, 114, 208, 12, 9, 226],
            [81, 40, 11, 96, 182, 84, 29, 16, 36],
          ],
          [
            [134, 183, 89, 137, 98, 101, 106, 165, 148],
            [72, 187, 100, 130, 157, 111, 32, 75, 80],
            [66, 102, 167, 99, 74, 62, 40, 234, 128],
            [41, 53, 9, 178, 241, 141, 26, 8, 107],
            [74, 43, 26, 146, 73, 166, 49, 23, 157],
            [65, 38, 105, 160, 51, 52, 31, 115, 128],
            [104, 79, 12, 27, 217, 255, 87, 17, 7],
            [87, 68, 71, 44, 114, 51, 15, 186, 23],
            [47, 41, 14, 110, 182, 183, 21, 17, 194],
            [66, 45, 25, 102, 197, 189, 23, 18, 22],
          ],
          [
            [88, 88, 147, 150, 42, 46, 45, 196, 205],
            [43, 97, 183, 117, 85, 38, 35, 179, 61],
            [39, 53, 200, 87, 26, 21, 43, 232, 171],
            [56, 34, 51, 104, 114, 102, 29, 93, 77],
            [39, 28, 85, 171, 58, 165, 90, 98, 64],
            [34, 22, 116, 206, 23, 34, 43, 166, 73],
            [107, 54, 32, 26, 51, 1, 81, 43, 31],
            [68, 25, 106, 22, 64, 171, 36, 225, 114],
            [34, 19, 21, 102, 132, 188, 16, 76, 124],
            [62, 18, 78, 95, 85, 57, 50, 48, 51],
          ],
          [
            [193, 101, 35, 159, 215, 111, 89, 46, 111],
            [60, 148, 31, 172, 219, 228, 21, 18, 111],
            [112, 113, 77, 85, 179, 255, 38, 120, 114],
            [40, 42, 1, 196, 245, 209, 10, 25, 109],
            [88, 43, 29, 140, 166, 213, 37, 43, 154],
            [61, 63, 30, 155, 67, 45, 68, 1, 209],
            [100, 80, 8, 43, 154, 1, 51, 26, 71],
            [142, 78, 78, 16, 255, 128, 34, 197, 171],
            [41, 40, 5, 102, 211, 183, 4, 1, 221],
            [51, 50, 17, 168, 209, 192, 23, 25, 82],
          ],
          [
            [138, 31, 36, 171, 27, 166, 38, 44, 229],
            [67, 87, 58, 169, 82, 115, 26, 59, 179],
            [63, 59, 90, 180, 59, 166, 93, 73, 154],
            [40, 40, 21, 116, 143, 209, 34, 39, 175],
            [47, 15, 16, 183, 34, 223, 49, 45, 183],
            [46, 17, 33, 183, 6, 98, 15, 32, 183],
            [57, 46, 22, 24, 128, 1, 54, 17, 37],
            [65, 32, 73, 115, 28, 128, 23, 128, 205],
            [40, 3, 9, 115, 51, 192, 18, 6, 223],
            [87, 37, 9, 115, 59, 77, 64, 21, 47],
          ],
          [
            [104, 55, 44, 218, 9, 54, 53, 130, 226],
            [64, 90, 70, 205, 40, 41, 23, 26, 57],
            [54, 57, 112, 184, 5, 41, 38, 166, 213],
            [30, 34, 26, 133, 152, 116, 10, 32, 134],
            [39, 19, 53, 221, 26, 114, 32, 73, 255],
            [31, 9, 65, 234, 2, 15, 1, 118, 73],
            [75, 32, 12, 51, 192, 255, 160, 43, 51],
            [88, 31, 35, 67, 102, 85, 55, 186, 85],
            [56, 21, 23, 111, 59, 205, 45, 37, 192],
            [55, 38, 70, 124, 73, 102, 1, 34, 98],
          ],
          [
            [125, 98, 42, 88, 104, 85, 117, 175, 82],
            [95, 84, 53, 89, 128, 100, 113, 101, 45],
            [75, 79, 123, 47, 51, 128, 81, 171, 1],
            [57, 17, 5, 71, 102, 57, 53, 41, 49],
            [38, 33, 13, 121, 57, 73, 26, 1, 85],
            [41, 10, 67, 138, 77, 110, 90, 47, 114],
            [115, 21, 2, 10, 102, 255, 166, 23, 6],
            [101, 29, 16, 10, 85, 128, 101, 196, 26],
            [57, 18, 10, 102, 102, 213, 34, 20, 43],
            [117, 20, 15, 36, 163, 128, 68, 1, 26],
          ],
          [
            [102, 61, 71, 37, 34, 53, 31, 243, 192],
            [69, 60, 71, 38, 73, 119, 28, 222, 37],
            [68, 45, 128, 34, 1, 47, 11, 245, 171],
            [62, 17, 19, 70, 146, 85, 55, 62, 70],
            [37, 43, 37, 154, 100, 163, 85, 160, 1],
            [63, 9, 92, 136, 28, 64, 32, 201, 85],
            [75, 15, 9, 9, 64, 255, 184, 119, 16],
            [86, 6, 28, 5, 64, 255, 25, 248, 1],
            [56, 8, 17, 132, 137, 255, 55, 116, 128],
            [58, 15, 20, 82, 135, 57, 26, 121, 40],
          ],
          [
            [164, 50, 31, 137, 154, 133, 25, 35, 218],
            [51, 103, 44, 131, 131, 123, 31, 6, 158],
            [86, 40, 64, 135, 148, 224, 45, 183, 128],
            [22, 26, 17, 131, 240, 154, 14, 1, 209],
            [45, 16, 21, 91, 64, 222, 7, 1, 197],
            [56, 21, 39, 155, 60, 138, 23, 102, 213],
            [83, 12, 13, 54, 192, 255, 68, 47, 28],
            [85, 26, 85, 85, 128, 128, 32, 146, 171],
            [18, 11, 7, 63, 144, 171, 4, 4, 246],
            [35, 27, 10, 146, 174, 171, 12, 26, 128],
          ],
          [
            [190, 80, 35, 99, 180, 80, 126, 54, 45],
            [85, 126, 47, 87, 176, 51, 41, 20, 32],
            [101, 75, 128, 139, 118, 146, 116, 128, 85],
            [56, 41, 15, 176, 236, 85, 37, 9, 62],
            [71, 30, 17, 119, 118, 255, 17, 18, 138],
            [101, 38, 60, 138, 55, 70, 43, 26, 142],
            [146, 36, 19, 30, 171, 255, 97, 27, 20],
            [138, 45, 61, 62, 219, 1, 81, 188, 64],
            [32, 41, 20, 117, 151, 142, 20, 21, 163],
            [112, 19, 12, 61, 195, 128, 48, 4, 24],
          ],
        ],
        dr = [
          [
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
              [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
              [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255],
            ],
            [
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
              [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
              [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
              [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
        ];
      this.WebPGetDecoderVersion = this.Ld = function () {
        return 512;
      };
      var ur = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
        _r = [
          [173, 148, 140, 0],
          [176, 155, 140, 135, 0],
          [180, 157, 141, 134, 130, 0],
          [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0],
        ],
        br = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
        wr = w([tn, en], "");
      _(4, 0);
      var pr = [
          [0, 0, 0, 0],
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 1, 0],
          [1, 0, 1, 0],
          [0, 1, 1, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 1],
          [1, 0, 0, 1],
          [0, 1, 0, 1],
          [1, 1, 0, 1],
          [0, 0, 1, 1],
          [1, 0, 1, 1],
          [0, 1, 1, 1],
          [1, 1, 1, 1],
        ],
        gr = 134480385,
        mr = 16,
        vr = -227,
        kr = 482,
        yr = [
          zt,
          function (t) {
            return t;
          },
          function (t, e, a) {
            return e[a + 0];
          },
          function (t, e, a) {
            return e[a + 1];
          },
          function (t, e, a) {
            return e[a - 1];
          },
          function (t, e, a) {
            return xt(xt(t, e[a + 1]), e[a + 0]);
          },
          function (t, e, a) {
            return xt(t, e[a - 1]);
          },
          function (t, e, a) {
            return xt(t, e[a + 0]);
          },
          function (t, e, a) {
            return xt(e[a - 1], e[a + 0]);
          },
          function (t, e, a) {
            return xt(e[a + 0], e[a + 1]);
          },
          function (t, e, a) {
            return xt(xt(t, e[a - 1]), xt(e[a + 0], e[a + 1]));
          },
          function (t, e, a) {
            return Math.abs(((t >> 24) & 255) - ((e[a - 1] >> 24) & 255)) -
              Math.abs(((e[a + 0] >> 24) & 255) - ((e[a - 1] >> 24) & 255)) +
              (Math.abs(((t >> 16) & 255) - ((e[a - 1] >> 16) & 255)) -
                Math.abs(((e[a + 0] >> 16) & 255) - ((e[a - 1] >> 16) & 255))) +
              (Math.abs(((t >> 8) & 255) - ((e[a - 1] >> 8) & 255)) -
                Math.abs(((e[a + 0] >> 8) & 255) - ((e[a - 1] >> 8) & 255))) +
              (Math.abs((255 & t) - (255 & e[a - 1])) -
                Math.abs((255 & e[a + 0]) - (255 & e[a - 1]))) <=
              0
              ? e[a + 0]
              : t;
          },
          function (t, e, a) {
            return (
              ((Tt(
                ((t >> 24) & 255) +
                  ((e[a + 0] >> 24) & 255) -
                  ((e[a - 1] >> 24) & 255)
              ) <<
                24) |
                (Tt(
                  ((t >> 16) & 255) +
                    ((e[a + 0] >> 16) & 255) -
                    ((e[a - 1] >> 16) & 255)
                ) <<
                  16) |
                (Tt(
                  ((t >> 8) & 255) +
                    ((e[a + 0] >> 8) & 255) -
                    ((e[a - 1] >> 8) & 255)
                ) <<
                  8) |
                Tt((255 & t) + (255 & e[a + 0]) - (255 & e[a - 1]))) >>>
              0
            );
          },
          function (t, e, a) {
            const n = e[a - 1];
            return (
              ((St(((t = xt(t, e[a + 0])) >> 24) & 255, (n >> 24) & 255) <<
                24) |
                (St((t >> 16) & 255, (n >> 16) & 255) << 16) |
                (St((t >> 8) & 255, (n >> 8) & 255) << 8) |
                St((t >> 0) & 255, (n >> 0) & 255)) >>>
              0
            );
          },
          zt,
          zt,
        ],
        Ar = { Cc: 0, Bc: 0, Kc: 0 },
        Er = 16,
        Rr = 16,
        Ur = 16,
        xr = [2, 3, 7],
        Tr = [3, 3, 11],
        Sr = 0,
        zr = 1,
        Or = 2,
        Dr = 3,
        Ir = 4,
        Nr = [pa + ga, pa, pa, pa, 40],
        Pr = 19,
        Br = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        Lr = 120,
        Cr = [
          24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27,
          54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69,
          75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61,
          104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107,
          50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122,
          33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16,
          32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113,
          127, 96, 112,
        ],
        Fr = 1 << (mr - 1),
        Zr = _(256, 0),
        Mr = _(256, 0),
        Wr = _(256, 0),
        Vr = _(256, 0),
        Hr = _(kr - vr, 0),
        jr = _(kr - vr, 0),
        Gr = 0,
        Kr = Array(We),
        Yr = [
          function (t, e, a, n, r, i, s, o, l, f, h, c, d) {
            re(t, e, a, n, r, i, s, o, l, f, h, c, d, mt, 3);
          },
          ie,
          function (t, e, a, n, r, i, s, o, l, f, h, c, d) {
            re(t, e, a, n, r, i, s, o, l, f, h, c, d, At, 3);
          },
          se,
          oe,
          le,
          function (t, e, a, n, r, i, s, o, l, f, h, c, d) {
            re(t, e, a, n, r, i, s, o, l, f, h, c, d, vt, 2);
          },
          ie,
          se,
          oe,
          le,
        ];
      (this.Hd = function (t, e, a, n) {
        return Re(Se, t, e, a, n);
      }),
        (this.Id = function (t, e, a, n) {
          return Re(ze, t, e, a, n);
        }),
        (this.Jd = function (t, e, a, n) {
          return Re(Ne, t, e, a, n);
        }),
        (this.Ed = function (t, e, a, n) {
          return Re(Ie, t, e, a, n);
        }),
        (this.Fd = function (t, e, a, n) {
          return Re(Oe, t, e, a, n);
        }),
        (this.Gd = function (t, e, a, n) {
          return Re(De, t, e, a, n);
        }),
        (this.WebPDecode = this.Dd =
          function (t, e, a) {
            const n = s(ea);
            let r = "VP8StatusCode";
            return a == i
              ? Ge
              : ((r = Ue(t, [0], [e], a.input)),
                r != He
                  ? r == Xe
                    ? Ke
                    : r
                  : ((n.j = a.j), (n.Qa = a.Qa), Ee(t, 0, [e], n)));
          });
    };
    a(0);
    const m = new TextDecoder("utf-8");
    const v = new TextEncoder();
    class k {
      constructor(t = 8192, e = {}) {
        let a = !1;
        "number" == typeof t
          ? (t = new ArrayBuffer(t))
          : ((a = !0), (this.lastWrittenByte = t.byteLength));
        const n = e.offset ? e.offset >>> 0 : 0,
          r = t.byteLength - n;
        let i = n;
        (ArrayBuffer.isView(t) || t instanceof k) &&
          (t.byteLength !== t.buffer.byteLength && (i = t.byteOffset + n),
          (t = t.buffer)),
          (this.lastWrittenByte = a ? r : 0),
          (this.buffer = t),
          (this.length = r),
          (this.byteLength = r),
          (this.byteOffset = i),
          (this.offset = 0),
          (this.littleEndian = !0),
          (this._data = new DataView(this.buffer, i, r)),
          (this._mark = 0),
          (this._marks = []);
      }
      available(t = 1) {
        return this.offset + t <= this.length;
      }
      isLittleEndian() {
        return this.littleEndian;
      }
      setLittleEndian() {
        return (this.littleEndian = !0), this;
      }
      isBigEndian() {
        return !this.littleEndian;
      }
      setBigEndian() {
        return (this.littleEndian = !1), this;
      }
      skip(t = 1) {
        return (this.offset += t), this;
      }
      seek(t) {
        return (this.offset = t), this;
      }
      mark() {
        return (this._mark = this.offset), this;
      }
      reset() {
        return (this.offset = this._mark), this;
      }
      pushMark() {
        return this._marks.push(this.offset), this;
      }
      popMark() {
        const t = this._marks.pop();
        if (void 0 === t) throw new Error("Mark stack empty");
        return this.seek(t), this;
      }
      rewind() {
        return (this.offset = 0), this;
      }
      ensureAvailable(t = 1) {
        if (!this.available(t)) {
          const e = 2 * (this.offset + t),
            a = new Uint8Array(e);
          a.set(new Uint8Array(this.buffer)),
            (this.buffer = a.buffer),
            (this.length = this.byteLength = e),
            (this._data = new DataView(this.buffer));
        }
        return this;
      }
      readBoolean() {
        return 0 !== this.readUint8();
      }
      readInt8() {
        return this._data.getInt8(this.offset++);
      }
      readUint8() {
        return this._data.getUint8(this.offset++);
      }
      readByte() {
        return this.readUint8();
      }
      readBytes(t = 1) {
        const e = new Uint8Array(t);
        for (let a = 0; a < t; a++) e[a] = this.readByte();
        return e;
      }
      readInt16() {
        const t = this._data.getInt16(this.offset, this.littleEndian);
        return (this.offset += 2), t;
      }
      readUint16() {
        const t = this._data.getUint16(this.offset, this.littleEndian);
        return (this.offset += 2), t;
      }
      readInt32() {
        const t = this._data.getInt32(this.offset, this.littleEndian);
        return (this.offset += 4), t;
      }
      readUint32() {
        const t = this._data.getUint32(this.offset, this.littleEndian);
        return (this.offset += 4), t;
      }
      readFloat32() {
        const t = this._data.getFloat32(this.offset, this.littleEndian);
        return (this.offset += 4), t;
      }
      readFloat64() {
        const t = this._data.getFloat64(this.offset, this.littleEndian);
        return (this.offset += 8), t;
      }
      readChar() {
        return String.fromCharCode(this.readInt8());
      }
      readChars(t = 1) {
        let e = "";
        for (let a = 0; a < t; a++) e += this.readChar();
        return e;
      }
      readUtf8(t = 1) {
        return (e = this.readBytes(t)), m.decode(e);
        var e;
      }
      writeBoolean(t) {
        return this.writeUint8(t ? 255 : 0), this;
      }
      writeInt8(t) {
        return (
          this.ensureAvailable(1),
          this._data.setInt8(this.offset++, t),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeUint8(t) {
        return (
          this.ensureAvailable(1),
          this._data.setUint8(this.offset++, t),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeByte(t) {
        return this.writeUint8(t);
      }
      writeBytes(t) {
        this.ensureAvailable(t.length);
        for (let e = 0; e < t.length; e++)
          this._data.setUint8(this.offset++, t[e]);
        return this._updateLastWrittenByte(), this;
      }
      writeInt16(t) {
        return (
          this.ensureAvailable(2),
          this._data.setInt16(this.offset, t, this.littleEndian),
          (this.offset += 2),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeUint16(t) {
        return (
          this.ensureAvailable(2),
          this._data.setUint16(this.offset, t, this.littleEndian),
          (this.offset += 2),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeInt32(t) {
        return (
          this.ensureAvailable(4),
          this._data.setInt32(this.offset, t, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeUint32(t) {
        return (
          this.ensureAvailable(4),
          this._data.setUint32(this.offset, t, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeFloat32(t) {
        return (
          this.ensureAvailable(4),
          this._data.setFloat32(this.offset, t, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeFloat64(t) {
        return (
          this.ensureAvailable(8),
          this._data.setFloat64(this.offset, t, this.littleEndian),
          (this.offset += 8),
          this._updateLastWrittenByte(),
          this
        );
      }
      writeChar(t) {
        return this.writeUint8(t.charCodeAt(0));
      }
      writeChars(t) {
        for (let e = 0; e < t.length; e++) this.writeUint8(t.charCodeAt(e));
        return this;
      }
      writeUtf8(t) {
        return this.writeBytes(
          (function (t) {
            return v.encode(t);
          })(t)
        );
      }
      toArray() {
        return new Uint8Array(
          this.buffer,
          this.byteOffset,
          this.lastWrittenByte
        );
      }
      _updateLastWrittenByte() {
        this.offset > this.lastWrittenByte &&
          (this.lastWrittenByte = this.offset);
      }
    }
    /*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */ function y(
      t
    ) {
      let e = t.length;
      for (; --e >= 0; ) t[e] = 0;
    }
    const A = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      E = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      R = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      U = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      x = new Array(576);
    y(x);
    const T = new Array(60);
    y(T);
    const S = new Array(512);
    y(S);
    const z = new Array(256);
    y(z);
    const O = new Array(29);
    y(O);
    const D = new Array(30);
    function I(t, e, a, n, r) {
      (this.static_tree = t),
        (this.extra_bits = e),
        (this.extra_base = a),
        (this.elems = n),
        (this.max_length = r),
        (this.has_stree = t && t.length);
    }
    let N, P, B;
    function L(t, e) {
      (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
    }
    y(D);
    const C = (t) => (t < 256 ? S[t] : S[256 + (t >>> 7)]),
      F = (t, e) => {
        (t.pending_buf[t.pending++] = 255 & e),
          (t.pending_buf[t.pending++] = (e >>> 8) & 255);
      },
      Z = (t, e, a) => {
        t.bi_valid > 16 - a
          ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
            F(t, t.bi_buf),
            (t.bi_buf = e >> (16 - t.bi_valid)),
            (t.bi_valid += a - 16))
          : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += a));
      },
      M = (t, e, a) => {
        Z(t, a[2 * e], a[2 * e + 1]);
      },
      W = (t, e) => {
        let a = 0;
        do {
          (a |= 1 & t), (t >>>= 1), (a <<= 1);
        } while (--e > 0);
        return a >>> 1;
      },
      V = (t, e, a) => {
        const n = new Array(16);
        let r,
          i,
          s = 0;
        for (r = 1; r <= 15; r++) n[r] = s = (s + a[r - 1]) << 1;
        for (i = 0; i <= e; i++) {
          let e = t[2 * i + 1];
          0 !== e && (t[2 * i] = W(n[e]++, e));
        }
      },
      H = (t) => {
        let e;
        for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        (t.dyn_ltree[512] = 1),
          (t.opt_len = t.static_len = 0),
          (t.last_lit = t.matches = 0);
      },
      G = (t) => {
        t.bi_valid > 8
          ? F(t, t.bi_buf)
          : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
          (t.bi_buf = 0),
          (t.bi_valid = 0);
      },
      K = (t, e, a, n) => {
        const r = 2 * e,
          i = 2 * a;
        return t[r] < t[i] || (t[r] === t[i] && n[e] <= n[a]);
      },
      Y = (t, e, a) => {
        const n = t.heap[a];
        let r = a << 1;
        for (
          ;
          r <= t.heap_len &&
          (r < t.heap_len && K(e, t.heap[r + 1], t.heap[r], t.depth) && r++,
          !K(e, n, t.heap[r], t.depth));

        )
          (t.heap[a] = t.heap[r]), (a = r), (r <<= 1);
        t.heap[a] = n;
      },
      q = (t, e, a) => {
        let n,
          r,
          i,
          s,
          o = 0;
        if (0 !== t.last_lit)
          do {
            (n =
              (t.pending_buf[t.d_buf + 2 * o] << 8) |
              t.pending_buf[t.d_buf + 2 * o + 1]),
              (r = t.pending_buf[t.l_buf + o]),
              o++,
              0 === n
                ? M(t, r, e)
                : ((i = z[r]),
                  M(t, i + 256 + 1, e),
                  (s = A[i]),
                  0 !== s && ((r -= O[i]), Z(t, r, s)),
                  n--,
                  (i = C(n)),
                  M(t, i, a),
                  (s = E[i]),
                  0 !== s && ((n -= D[i]), Z(t, n, s)));
          } while (o < t.last_lit);
        M(t, 256, e);
      },
      J = (t, e) => {
        const a = e.dyn_tree,
          n = e.stat_desc.static_tree,
          r = e.stat_desc.has_stree,
          i = e.stat_desc.elems;
        let s,
          o,
          l,
          f = -1;
        for (t.heap_len = 0, t.heap_max = 573, s = 0; s < i; s++)
          0 !== a[2 * s]
            ? ((t.heap[++t.heap_len] = f = s), (t.depth[s] = 0))
            : (a[2 * s + 1] = 0);
        for (; t.heap_len < 2; )
          (l = t.heap[++t.heap_len] = f < 2 ? ++f : 0),
            (a[2 * l] = 1),
            (t.depth[l] = 0),
            t.opt_len--,
            r && (t.static_len -= n[2 * l + 1]);
        for (e.max_code = f, s = t.heap_len >> 1; s >= 1; s--) Y(t, a, s);
        l = i;
        do {
          (s = t.heap[1]),
            (t.heap[1] = t.heap[t.heap_len--]),
            Y(t, a, 1),
            (o = t.heap[1]),
            (t.heap[--t.heap_max] = s),
            (t.heap[--t.heap_max] = o),
            (a[2 * l] = a[2 * s] + a[2 * o]),
            (t.depth[l] =
              (t.depth[s] >= t.depth[o] ? t.depth[s] : t.depth[o]) + 1),
            (a[2 * s + 1] = a[2 * o + 1] = l),
            (t.heap[1] = l++),
            Y(t, a, 1);
        } while (t.heap_len >= 2);
        (t.heap[--t.heap_max] = t.heap[1]),
          ((t, e) => {
            const a = e.dyn_tree,
              n = e.max_code,
              r = e.stat_desc.static_tree,
              i = e.stat_desc.has_stree,
              s = e.stat_desc.extra_bits,
              o = e.stat_desc.extra_base,
              l = e.stat_desc.max_length;
            let f,
              h,
              c,
              d,
              u,
              _,
              b = 0;
            for (d = 0; d <= 15; d++) t.bl_count[d] = 0;
            for (
              a[2 * t.heap[t.heap_max] + 1] = 0, f = t.heap_max + 1;
              f < 573;
              f++
            )
              (h = t.heap[f]),
                (d = a[2 * a[2 * h + 1] + 1] + 1),
                d > l && ((d = l), b++),
                (a[2 * h + 1] = d),
                h > n ||
                  (t.bl_count[d]++,
                  (u = 0),
                  h >= o && (u = s[h - o]),
                  (_ = a[2 * h]),
                  (t.opt_len += _ * (d + u)),
                  i && (t.static_len += _ * (r[2 * h + 1] + u)));
            if (0 !== b) {
              do {
                for (d = l - 1; 0 === t.bl_count[d]; ) d--;
                t.bl_count[d]--,
                  (t.bl_count[d + 1] += 2),
                  t.bl_count[l]--,
                  (b -= 2);
              } while (b > 0);
              for (d = l; 0 !== d; d--)
                for (h = t.bl_count[d]; 0 !== h; )
                  (c = t.heap[--f]),
                    c > n ||
                      (a[2 * c + 1] !== d &&
                        ((t.opt_len += (d - a[2 * c + 1]) * a[2 * c]),
                        (a[2 * c + 1] = d)),
                      h--);
            }
          })(t, e),
          V(a, f, t.bl_count);
      },
      X = (t, e, a) => {
        let n,
          r,
          i = -1,
          s = e[1],
          o = 0,
          l = 7,
          f = 4;
        for (
          0 === s && ((l = 138), (f = 3)), e[2 * (a + 1) + 1] = 65535, n = 0;
          n <= a;
          n++
        )
          (r = s),
            (s = e[2 * (n + 1) + 1]),
            (++o < l && r === s) ||
              (o < f
                ? (t.bl_tree[2 * r] += o)
                : 0 !== r
                ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[32]++)
                : o <= 10
                ? t.bl_tree[34]++
                : t.bl_tree[36]++,
              (o = 0),
              (i = r),
              0 === s
                ? ((l = 138), (f = 3))
                : r === s
                ? ((l = 6), (f = 3))
                : ((l = 7), (f = 4)));
      },
      $ = (t, e, a) => {
        let n,
          r,
          i = -1,
          s = e[1],
          o = 0,
          l = 7,
          f = 4;
        for (0 === s && ((l = 138), (f = 3)), n = 0; n <= a; n++)
          if (((r = s), (s = e[2 * (n + 1) + 1]), !(++o < l && r === s))) {
            if (o < f)
              do {
                M(t, r, t.bl_tree);
              } while (0 != --o);
            else
              0 !== r
                ? (r !== i && (M(t, r, t.bl_tree), o--),
                  M(t, 16, t.bl_tree),
                  Z(t, o - 3, 2))
                : o <= 10
                ? (M(t, 17, t.bl_tree), Z(t, o - 3, 3))
                : (M(t, 18, t.bl_tree), Z(t, o - 11, 7));
            (o = 0),
              (i = r),
              0 === s
                ? ((l = 138), (f = 3))
                : r === s
                ? ((l = 6), (f = 3))
                : ((l = 7), (f = 4));
          }
      };
    let Q = !1;
    const tt = (t, e, a, n) => {
      Z(t, 0 + (n ? 1 : 0), 3),
        ((t, e, a, n) => {
          G(t),
            n && (F(t, a), F(t, ~a)),
            t.pending_buf.set(t.window.subarray(e, e + a), t.pending),
            (t.pending += a);
        })(t, e, a, !0);
    };
    var et = {
      _tr_init: (t) => {
        Q ||
          ((() => {
            let t, e, a, n, r;
            const i = new Array(16);
            for (a = 0, n = 0; n < 28; n++)
              for (O[n] = a, t = 0; t < 1 << A[n]; t++) z[a++] = n;
            for (z[a - 1] = n, r = 0, n = 0; n < 16; n++)
              for (D[n] = r, t = 0; t < 1 << E[n]; t++) S[r++] = n;
            for (r >>= 7; n < 30; n++)
              for (D[n] = r << 7, t = 0; t < 1 << (E[n] - 7); t++)
                S[256 + r++] = n;
            for (e = 0; e <= 15; e++) i[e] = 0;
            for (t = 0; t <= 143; ) (x[2 * t + 1] = 8), t++, i[8]++;
            for (; t <= 255; ) (x[2 * t + 1] = 9), t++, i[9]++;
            for (; t <= 279; ) (x[2 * t + 1] = 7), t++, i[7]++;
            for (; t <= 287; ) (x[2 * t + 1] = 8), t++, i[8]++;
            for (V(x, 287, i), t = 0; t < 30; t++)
              (T[2 * t + 1] = 5), (T[2 * t] = W(t, 5));
            (N = new I(x, A, 257, 286, 15)),
              (P = new I(T, E, 0, 30, 15)),
              (B = new I(new Array(0), R, 0, 19, 7));
          })(),
          (Q = !0)),
          (t.l_desc = new L(t.dyn_ltree, N)),
          (t.d_desc = new L(t.dyn_dtree, P)),
          (t.bl_desc = new L(t.bl_tree, B)),
          (t.bi_buf = 0),
          (t.bi_valid = 0),
          H(t);
      },
      _tr_stored_block: tt,
      _tr_flush_block: (t, e, a, n) => {
        let r,
          i,
          s = 0;
        t.level > 0
          ? (2 === t.strm.data_type &&
              (t.strm.data_type = ((t) => {
                let e,
                  a = 4093624447;
                for (e = 0; e <= 31; e++, a >>>= 1)
                  if (1 & a && 0 !== t.dyn_ltree[2 * e]) return 0;
                if (
                  0 !== t.dyn_ltree[18] ||
                  0 !== t.dyn_ltree[20] ||
                  0 !== t.dyn_ltree[26]
                )
                  return 1;
                for (e = 32; e < 256; e++)
                  if (0 !== t.dyn_ltree[2 * e]) return 1;
                return 0;
              })(t)),
            J(t, t.l_desc),
            J(t, t.d_desc),
            (s = ((t) => {
              let e;
              for (
                X(t, t.dyn_ltree, t.l_desc.max_code),
                  X(t, t.dyn_dtree, t.d_desc.max_code),
                  J(t, t.bl_desc),
                  e = 18;
                e >= 3 && 0 === t.bl_tree[2 * U[e] + 1];
                e--
              );
              return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
            })(t)),
            (r = (t.opt_len + 3 + 7) >>> 3),
            (i = (t.static_len + 3 + 7) >>> 3),
            i <= r && (r = i))
          : (r = i = a + 5),
          a + 4 <= r && -1 !== e
            ? tt(t, e, a, n)
            : 4 === t.strategy || i === r
            ? (Z(t, 2 + (n ? 1 : 0), 3), q(t, x, T))
            : (Z(t, 4 + (n ? 1 : 0), 3),
              ((t, e, a, n) => {
                let r;
                for (
                  Z(t, e - 257, 5), Z(t, a - 1, 5), Z(t, n - 4, 4), r = 0;
                  r < n;
                  r++
                )
                  Z(t, t.bl_tree[2 * U[r] + 1], 3);
                $(t, t.dyn_ltree, e - 1), $(t, t.dyn_dtree, a - 1);
              })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1),
              q(t, t.dyn_ltree, t.dyn_dtree)),
          H(t),
          n && G(t);
      },
      _tr_tally: (t, e, a) => (
        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
        (t.pending_buf[t.l_buf + t.last_lit] = 255 & a),
        t.last_lit++,
        0 === e
          ? t.dyn_ltree[2 * a]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (z[a] + 256 + 1)]++,
            t.dyn_dtree[2 * C(e)]++),
        t.last_lit === t.lit_bufsize - 1
      ),
      _tr_align: (t) => {
        Z(t, 2, 3),
          M(t, 256, x),
          ((t) => {
            16 === t.bi_valid
              ? (F(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
              : t.bi_valid >= 8 &&
                ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                (t.bi_buf >>= 8),
                (t.bi_valid -= 8));
          })(t);
      },
    };
    var at = (t, e, a, n) => {
      let r = (65535 & t) | 0,
        i = ((t >>> 16) & 65535) | 0,
        s = 0;
      for (; 0 !== a; ) {
        (s = a > 2e3 ? 2e3 : a), (a -= s);
        do {
          (r = (r + e[n++]) | 0), (i = (i + r) | 0);
        } while (--s);
        (r %= 65521), (i %= 65521);
      }
      return r | (i << 16) | 0;
    };
    const nt = new Uint32Array(
      (() => {
        let t,
          e = [];
        for (var a = 0; a < 256; a++) {
          t = a;
          for (var n = 0; n < 8; n++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
          e[a] = t;
        }
        return e;
      })()
    );
    var rt = (t, e, a, n) => {
        const r = nt,
          i = n + a;
        t ^= -1;
        for (let a = n; a < i; a++) t = (t >>> 8) ^ r[255 & (t ^ e[a])];
        return -1 ^ t;
      },
      it = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      st = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    const {
        _tr_init: ot,
        _tr_stored_block: lt,
        _tr_flush_block: ft,
        _tr_tally: ht,
        _tr_align: ct,
      } = et,
      {
        Z_NO_FLUSH: dt,
        Z_PARTIAL_FLUSH: ut,
        Z_FULL_FLUSH: _t,
        Z_FINISH: bt,
        Z_BLOCK: wt,
        Z_OK: pt,
        Z_STREAM_END: gt,
        Z_STREAM_ERROR: mt,
        Z_DATA_ERROR: vt,
        Z_BUF_ERROR: kt,
        Z_DEFAULT_COMPRESSION: yt,
        Z_FILTERED: At,
        Z_HUFFMAN_ONLY: Et,
        Z_RLE: Rt,
        Z_FIXED: Ut,
        Z_DEFAULT_STRATEGY: xt,
        Z_UNKNOWN: Tt,
        Z_DEFLATED: St,
      } = st,
      zt = (t, e) => ((t.msg = it[e]), e),
      Ot = (t) => (t << 1) - (t > 4 ? 9 : 0),
      Dt = (t) => {
        let e = t.length;
        for (; --e >= 0; ) t[e] = 0;
      };
    let It = (t, e, a) => ((e << t.hash_shift) ^ a) & t.hash_mask;
    const Nt = (t) => {
        const e = t.state;
        let a = e.pending;
        a > t.avail_out && (a = t.avail_out),
          0 !== a &&
            (t.output.set(
              e.pending_buf.subarray(e.pending_out, e.pending_out + a),
              t.next_out
            ),
            (t.next_out += a),
            (e.pending_out += a),
            (t.total_out += a),
            (t.avail_out -= a),
            (e.pending -= a),
            0 === e.pending && (e.pending_out = 0));
      },
      Pt = (t, e) => {
        ft(
          t,
          t.block_start >= 0 ? t.block_start : -1,
          t.strstart - t.block_start,
          e
        ),
          (t.block_start = t.strstart),
          Nt(t.strm);
      },
      Bt = (t, e) => {
        t.pending_buf[t.pending++] = e;
      },
      Lt = (t, e) => {
        (t.pending_buf[t.pending++] = (e >>> 8) & 255),
          (t.pending_buf[t.pending++] = 255 & e);
      },
      Ct = (t, e, a, n) => {
        let r = t.avail_in;
        return (
          r > n && (r = n),
          0 === r
            ? 0
            : ((t.avail_in -= r),
              e.set(t.input.subarray(t.next_in, t.next_in + r), a),
              1 === t.state.wrap
                ? (t.adler = at(t.adler, e, r, a))
                : 2 === t.state.wrap && (t.adler = rt(t.adler, e, r, a)),
              (t.next_in += r),
              (t.total_in += r),
              r)
        );
      },
      Ft = (t, e) => {
        let a,
          n,
          r = t.max_chain_length,
          i = t.strstart,
          s = t.prev_length,
          o = t.nice_match;
        const l =
            t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
          f = t.window,
          h = t.w_mask,
          c = t.prev,
          d = t.strstart + 258;
        let u = f[i + s - 1],
          _ = f[i + s];
        t.prev_length >= t.good_match && (r >>= 2),
          o > t.lookahead && (o = t.lookahead);
        do {
          if (
            ((a = e),
            f[a + s] === _ &&
              f[a + s - 1] === u &&
              f[a] === f[i] &&
              f[++a] === f[i + 1])
          ) {
            (i += 2), a++;
            do {} while (
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              f[++i] === f[++a] &&
              i < d
            );
            if (((n = 258 - (d - i)), (i = d - 258), n > s)) {
              if (((t.match_start = e), (s = n), n >= o)) break;
              (u = f[i + s - 1]), (_ = f[i + s]);
            }
          }
        } while ((e = c[e & h]) > l && 0 != --r);
        return s <= t.lookahead ? s : t.lookahead;
      },
      Zt = (t) => {
        const e = t.w_size;
        let a, n, r, i, s;
        do {
          if (
            ((i = t.window_size - t.lookahead - t.strstart),
            t.strstart >= e + (e - 262))
          ) {
            t.window.set(t.window.subarray(e, e + e), 0),
              (t.match_start -= e),
              (t.strstart -= e),
              (t.block_start -= e),
              (n = t.hash_size),
              (a = n);
            do {
              (r = t.head[--a]), (t.head[a] = r >= e ? r - e : 0);
            } while (--n);
            (n = e), (a = n);
            do {
              (r = t.prev[--a]), (t.prev[a] = r >= e ? r - e : 0);
            } while (--n);
            i += e;
          }
          if (0 === t.strm.avail_in) break;
          if (
            ((n = Ct(t.strm, t.window, t.strstart + t.lookahead, i)),
            (t.lookahead += n),
            t.lookahead + t.insert >= 3)
          )
            for (
              s = t.strstart - t.insert,
                t.ins_h = t.window[s],
                t.ins_h = It(t, t.ins_h, t.window[s + 1]);
              t.insert &&
              ((t.ins_h = It(t, t.ins_h, t.window[s + 3 - 1])),
              (t.prev[s & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = s),
              s++,
              t.insert--,
              !(t.lookahead + t.insert < 3));

            );
        } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
      },
      Mt = (t, e) => {
        let a, n;
        for (;;) {
          if (t.lookahead < 262) {
            if ((Zt(t), t.lookahead < 262 && e === dt)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((a = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = It(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            0 !== a &&
              t.strstart - a <= t.w_size - 262 &&
              (t.match_length = Ft(t, a)),
            t.match_length >= 3)
          )
            if (
              ((n = ht(t, t.strstart - t.match_start, t.match_length - 3)),
              (t.lookahead -= t.match_length),
              t.match_length <= t.max_lazy_match && t.lookahead >= 3)
            ) {
              t.match_length--;
              do {
                t.strstart++,
                  (t.ins_h = It(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart);
              } while (0 != --t.match_length);
              t.strstart++;
            } else
              (t.strstart += t.match_length),
                (t.match_length = 0),
                (t.ins_h = t.window[t.strstart]),
                (t.ins_h = It(t, t.ins_h, t.window[t.strstart + 1]));
          else
            (n = ht(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
          if (n && (Pt(t, !1), 0 === t.strm.avail_out)) return 1;
        }
        return (
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === bt
            ? (Pt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.last_lit && (Pt(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      },
      Wt = (t, e) => {
        let a, n, r;
        for (;;) {
          if (t.lookahead < 262) {
            if ((Zt(t), t.lookahead < 262 && e === dt)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((a = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = It(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            (t.prev_length = t.match_length),
            (t.prev_match = t.match_start),
            (t.match_length = 2),
            0 !== a &&
              t.prev_length < t.max_lazy_match &&
              t.strstart - a <= t.w_size - 262 &&
              ((t.match_length = Ft(t, a)),
              t.match_length <= 5 &&
                (t.strategy === At ||
                  (3 === t.match_length &&
                    t.strstart - t.match_start > 4096)) &&
                (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length)
          ) {
            (r = t.strstart + t.lookahead - 3),
              (n = ht(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
              (t.lookahead -= t.prev_length - 1),
              (t.prev_length -= 2);
            do {
              ++t.strstart <= r &&
                ((t.ins_h = It(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart));
            } while (0 != --t.prev_length);
            if (
              ((t.match_available = 0),
              (t.match_length = 2),
              t.strstart++,
              n && (Pt(t, !1), 0 === t.strm.avail_out))
            )
              return 1;
          } else if (t.match_available) {
            if (
              ((n = ht(t, 0, t.window[t.strstart - 1])),
              n && Pt(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
            )
              return 1;
          } else (t.match_available = 1), t.strstart++, t.lookahead--;
        }
        return (
          t.match_available &&
            ((n = ht(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === bt
            ? (Pt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.last_lit && (Pt(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      };
    function Vt(t, e, a, n, r) {
      (this.good_length = t),
        (this.max_lazy = e),
        (this.nice_length = a),
        (this.max_chain = n),
        (this.func = r);
    }
    const Ht = [
      new Vt(0, 0, 0, 0, (t, e) => {
        let a = 65535;
        for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if ((Zt(t), 0 === t.lookahead && e === dt)) return 1;
            if (0 === t.lookahead) break;
          }
          (t.strstart += t.lookahead), (t.lookahead = 0);
          const n = t.block_start + a;
          if (
            (0 === t.strstart || t.strstart >= n) &&
            ((t.lookahead = t.strstart - n),
            (t.strstart = n),
            Pt(t, !1),
            0 === t.strm.avail_out)
          )
            return 1;
          if (
            t.strstart - t.block_start >= t.w_size - 262 &&
            (Pt(t, !1), 0 === t.strm.avail_out)
          )
            return 1;
        }
        return (
          (t.insert = 0),
          e === bt
            ? (Pt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : (t.strstart > t.block_start && (Pt(t, !1), t.strm.avail_out), 1)
        );
      }),
      new Vt(4, 4, 8, 4, Mt),
      new Vt(4, 5, 16, 8, Mt),
      new Vt(4, 6, 32, 32, Mt),
      new Vt(4, 4, 16, 16, Wt),
      new Vt(8, 16, 32, 32, Wt),
      new Vt(8, 16, 128, 128, Wt),
      new Vt(8, 32, 128, 256, Wt),
      new Vt(32, 128, 258, 1024, Wt),
      new Vt(32, 258, 258, 4096, Wt),
    ];
    function jt() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = St),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(1146)),
        (this.dyn_dtree = new Uint16Array(122)),
        (this.bl_tree = new Uint16Array(78)),
        Dt(this.dyn_ltree),
        Dt(this.dyn_dtree),
        Dt(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        Dt(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        Dt(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    const Gt = (t) => {
        if (!t || !t.state) return zt(t, mt);
        (t.total_in = t.total_out = 0), (t.data_type = Tt);
        const e = t.state;
        return (
          (e.pending = 0),
          (e.pending_out = 0),
          e.wrap < 0 && (e.wrap = -e.wrap),
          (e.status = e.wrap ? 42 : 113),
          (t.adler = 2 === e.wrap ? 0 : 1),
          (e.last_flush = dt),
          ot(e),
          pt
        );
      },
      Kt = (t) => {
        const e = Gt(t);
        return (
          e === pt &&
            ((t) => {
              (t.window_size = 2 * t.w_size),
                Dt(t.head),
                (t.max_lazy_match = Ht[t.level].max_lazy),
                (t.good_match = Ht[t.level].good_length),
                (t.nice_match = Ht[t.level].nice_length),
                (t.max_chain_length = Ht[t.level].max_chain),
                (t.strstart = 0),
                (t.block_start = 0),
                (t.lookahead = 0),
                (t.insert = 0),
                (t.match_length = t.prev_length = 2),
                (t.match_available = 0),
                (t.ins_h = 0);
            })(t.state),
          e
        );
      },
      Yt = (t, e, a, n, r, i) => {
        if (!t) return mt;
        let s = 1;
        if (
          (e === yt && (e = 6),
          n < 0 ? ((s = 0), (n = -n)) : n > 15 && ((s = 2), (n -= 16)),
          r < 1 ||
            r > 9 ||
            a !== St ||
            n < 8 ||
            n > 15 ||
            e < 0 ||
            e > 9 ||
            i < 0 ||
            i > Ut)
        )
          return zt(t, mt);
        8 === n && (n = 9);
        const o = new jt();
        return (
          (t.state = o),
          (o.strm = t),
          (o.wrap = s),
          (o.gzhead = null),
          (o.w_bits = n),
          (o.w_size = 1 << o.w_bits),
          (o.w_mask = o.w_size - 1),
          (o.hash_bits = r + 7),
          (o.hash_size = 1 << o.hash_bits),
          (o.hash_mask = o.hash_size - 1),
          (o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3)),
          (o.window = new Uint8Array(2 * o.w_size)),
          (o.head = new Uint16Array(o.hash_size)),
          (o.prev = new Uint16Array(o.w_size)),
          (o.lit_bufsize = 1 << (r + 6)),
          (o.pending_buf_size = 4 * o.lit_bufsize),
          (o.pending_buf = new Uint8Array(o.pending_buf_size)),
          (o.d_buf = 1 * o.lit_bufsize),
          (o.l_buf = 3 * o.lit_bufsize),
          (o.level = e),
          (o.strategy = i),
          (o.method = a),
          Kt(t)
        );
      };
    var qt = {
      deflateInit: (t, e) => Yt(t, e, St, 15, 8, xt),
      deflateInit2: Yt,
      deflateReset: Kt,
      deflateResetKeep: Gt,
      deflateSetHeader: (t, e) =>
        t && t.state
          ? 2 !== t.state.wrap
            ? mt
            : ((t.state.gzhead = e), pt)
          : mt,
      deflate: (t, e) => {
        let a, n;
        if (!t || !t.state || e > wt || e < 0) return t ? zt(t, mt) : mt;
        const r = t.state;
        if (
          !t.output ||
          (!t.input && 0 !== t.avail_in) ||
          (666 === r.status && e !== bt)
        )
          return zt(t, 0 === t.avail_out ? kt : mt);
        r.strm = t;
        const i = r.last_flush;
        if (((r.last_flush = e), 42 === r.status))
          if (2 === r.wrap)
            (t.adler = 0),
              Bt(r, 31),
              Bt(r, 139),
              Bt(r, 8),
              r.gzhead
                ? (Bt(
                    r,
                    (r.gzhead.text ? 1 : 0) +
                      (r.gzhead.hcrc ? 2 : 0) +
                      (r.gzhead.extra ? 4 : 0) +
                      (r.gzhead.name ? 8 : 0) +
                      (r.gzhead.comment ? 16 : 0)
                  ),
                  Bt(r, 255 & r.gzhead.time),
                  Bt(r, (r.gzhead.time >> 8) & 255),
                  Bt(r, (r.gzhead.time >> 16) & 255),
                  Bt(r, (r.gzhead.time >> 24) & 255),
                  Bt(
                    r,
                    9 === r.level ? 2 : r.strategy >= Et || r.level < 2 ? 4 : 0
                  ),
                  Bt(r, 255 & r.gzhead.os),
                  r.gzhead.extra &&
                    r.gzhead.extra.length &&
                    (Bt(r, 255 & r.gzhead.extra.length),
                    Bt(r, (r.gzhead.extra.length >> 8) & 255)),
                  r.gzhead.hcrc &&
                    (t.adler = rt(t.adler, r.pending_buf, r.pending, 0)),
                  (r.gzindex = 0),
                  (r.status = 69))
                : (Bt(r, 0),
                  Bt(r, 0),
                  Bt(r, 0),
                  Bt(r, 0),
                  Bt(r, 0),
                  Bt(
                    r,
                    9 === r.level ? 2 : r.strategy >= Et || r.level < 2 ? 4 : 0
                  ),
                  Bt(r, 3),
                  (r.status = 113));
          else {
            let e = (St + ((r.w_bits - 8) << 4)) << 8,
              a = -1;
            (a =
              r.strategy >= Et || r.level < 2
                ? 0
                : r.level < 6
                ? 1
                : 6 === r.level
                ? 2
                : 3),
              (e |= a << 6),
              0 !== r.strstart && (e |= 32),
              (e += 31 - (e % 31)),
              (r.status = 113),
              Lt(r, e),
              0 !== r.strstart &&
                (Lt(r, t.adler >>> 16), Lt(r, 65535 & t.adler)),
              (t.adler = 1);
          }
        if (69 === r.status)
          if (r.gzhead.extra) {
            for (
              a = r.pending;
              r.gzindex < (65535 & r.gzhead.extra.length) &&
              (r.pending !== r.pending_buf_size ||
                (r.gzhead.hcrc &&
                  r.pending > a &&
                  (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
                Nt(t),
                (a = r.pending),
                r.pending !== r.pending_buf_size));

            )
              Bt(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
            r.gzhead.hcrc &&
              r.pending > a &&
              (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
              r.gzindex === r.gzhead.extra.length &&
                ((r.gzindex = 0), (r.status = 73));
          } else r.status = 73;
        if (73 === r.status)
          if (r.gzhead.name) {
            a = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > a &&
                  (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
                Nt(t),
                (a = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                n = 1;
                break;
              }
              (n =
                r.gzindex < r.gzhead.name.length
                  ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                  : 0),
                Bt(r, n);
            } while (0 !== n);
            r.gzhead.hcrc &&
              r.pending > a &&
              (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
              0 === n && ((r.gzindex = 0), (r.status = 91));
          } else r.status = 91;
        if (91 === r.status)
          if (r.gzhead.comment) {
            a = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > a &&
                  (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
                Nt(t),
                (a = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                n = 1;
                break;
              }
              (n =
                r.gzindex < r.gzhead.comment.length
                  ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                  : 0),
                Bt(r, n);
            } while (0 !== n);
            r.gzhead.hcrc &&
              r.pending > a &&
              (t.adler = rt(t.adler, r.pending_buf, r.pending - a, a)),
              0 === n && (r.status = 103);
          } else r.status = 103;
        if (
          (103 === r.status &&
            (r.gzhead.hcrc
              ? (r.pending + 2 > r.pending_buf_size && Nt(t),
                r.pending + 2 <= r.pending_buf_size &&
                  (Bt(r, 255 & t.adler),
                  Bt(r, (t.adler >> 8) & 255),
                  (t.adler = 0),
                  (r.status = 113)))
              : (r.status = 113)),
          0 !== r.pending)
        ) {
          if ((Nt(t), 0 === t.avail_out)) return (r.last_flush = -1), pt;
        } else if (0 === t.avail_in && Ot(e) <= Ot(i) && e !== bt)
          return zt(t, kt);
        if (666 === r.status && 0 !== t.avail_in) return zt(t, kt);
        if (
          0 !== t.avail_in ||
          0 !== r.lookahead ||
          (e !== dt && 666 !== r.status)
        ) {
          let a =
            r.strategy === Et
              ? ((t, e) => {
                  let a;
                  for (;;) {
                    if (0 === t.lookahead && (Zt(t), 0 === t.lookahead)) {
                      if (e === dt) return 1;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (a = ht(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      a && (Pt(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    e === bt
                      ? (Pt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (Pt(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : r.strategy === Rt
              ? ((t, e) => {
                  let a, n, r, i;
                  const s = t.window;
                  for (;;) {
                    if (t.lookahead <= 258) {
                      if ((Zt(t), t.lookahead <= 258 && e === dt)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= 3 &&
                        t.strstart > 0 &&
                        ((r = t.strstart - 1),
                        (n = s[r]),
                        n === s[++r] && n === s[++r] && n === s[++r]))
                    ) {
                      i = t.strstart + 258;
                      do {} while (
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        n === s[++r] &&
                        r < i
                      );
                      (t.match_length = 258 - (i - r)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= 3
                        ? ((a = ht(t, 1, t.match_length - 3)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((a = ht(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      a && (Pt(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    e === bt
                      ? (Pt(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (Pt(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : Ht[r.level].func(r, e);
          if (((3 !== a && 4 !== a) || (r.status = 666), 1 === a || 3 === a))
            return 0 === t.avail_out && (r.last_flush = -1), pt;
          if (
            2 === a &&
            (e === ut
              ? ct(r)
              : e !== wt &&
                (lt(r, 0, 0, !1),
                e === _t &&
                  (Dt(r.head),
                  0 === r.lookahead &&
                    ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
            Nt(t),
            0 === t.avail_out)
          )
            return (r.last_flush = -1), pt;
        }
        return e !== bt
          ? pt
          : r.wrap <= 0
          ? gt
          : (2 === r.wrap
              ? (Bt(r, 255 & t.adler),
                Bt(r, (t.adler >> 8) & 255),
                Bt(r, (t.adler >> 16) & 255),
                Bt(r, (t.adler >> 24) & 255),
                Bt(r, 255 & t.total_in),
                Bt(r, (t.total_in >> 8) & 255),
                Bt(r, (t.total_in >> 16) & 255),
                Bt(r, (t.total_in >> 24) & 255))
              : (Lt(r, t.adler >>> 16), Lt(r, 65535 & t.adler)),
            Nt(t),
            r.wrap > 0 && (r.wrap = -r.wrap),
            0 !== r.pending ? pt : gt);
      },
      deflateEnd: (t) => {
        if (!t || !t.state) return mt;
        const e = t.state.status;
        return 42 !== e &&
          69 !== e &&
          73 !== e &&
          91 !== e &&
          103 !== e &&
          113 !== e &&
          666 !== e
          ? zt(t, mt)
          : ((t.state = null), 113 === e ? zt(t, vt) : pt);
      },
      deflateSetDictionary: (t, e) => {
        let a = e.length;
        if (!t || !t.state) return mt;
        const n = t.state,
          r = n.wrap;
        if (2 === r || (1 === r && 42 !== n.status) || n.lookahead) return mt;
        if (
          (1 === r && (t.adler = at(t.adler, e, a, 0)),
          (n.wrap = 0),
          a >= n.w_size)
        ) {
          0 === r &&
            (Dt(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0));
          let t = new Uint8Array(n.w_size);
          t.set(e.subarray(a - n.w_size, a), 0), (e = t), (a = n.w_size);
        }
        const i = t.avail_in,
          s = t.next_in,
          o = t.input;
        for (
          t.avail_in = a, t.next_in = 0, t.input = e, Zt(n);
          n.lookahead >= 3;

        ) {
          let t = n.strstart,
            e = n.lookahead - 2;
          do {
            (n.ins_h = It(n, n.ins_h, n.window[t + 3 - 1])),
              (n.prev[t & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = t),
              t++;
          } while (--e);
          (n.strstart = t), (n.lookahead = 2), Zt(n);
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (t.next_in = s),
          (t.input = o),
          (t.avail_in = i),
          (n.wrap = r),
          pt
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    };
    const Jt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var Xt = function (t) {
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length; ) {
          const a = e.shift();
          if (a) {
            if ("object" != typeof a)
              throw new TypeError(a + "must be non-object");
            for (const e in a) Jt(a, e) && (t[e] = a[e]);
          }
        }
        return t;
      },
      $t = (t) => {
        let e = 0;
        for (let a = 0, n = t.length; a < n; a++) e += t[a].length;
        const a = new Uint8Array(e);
        for (let e = 0, n = 0, r = t.length; e < r; e++) {
          let r = t[e];
          a.set(r, n), (n += r.length);
        }
        return a;
      };
    let Qt = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      Qt = !1;
    }
    const te = new Uint8Array(256);
    for (let t = 0; t < 256; t++)
      te[t] =
        t >= 252
          ? 6
          : t >= 248
          ? 5
          : t >= 240
          ? 4
          : t >= 224
          ? 3
          : t >= 192
          ? 2
          : 1;
    te[254] = te[254] = 1;
    var ee = (t) => {
        let e,
          a,
          n,
          r,
          i,
          s = t.length,
          o = 0;
        for (r = 0; r < s; r++)
          (a = t.charCodeAt(r)),
            55296 == (64512 & a) &&
              r + 1 < s &&
              ((n = t.charCodeAt(r + 1)),
              56320 == (64512 & n) &&
                ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), r++)),
            (o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
        for (e = new Uint8Array(o), i = 0, r = 0; i < o; r++)
          (a = t.charCodeAt(r)),
            55296 == (64512 & a) &&
              r + 1 < s &&
              ((n = t.charCodeAt(r + 1)),
              56320 == (64512 & n) &&
                ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), r++)),
            a < 128
              ? (e[i++] = a)
              : a < 2048
              ? ((e[i++] = 192 | (a >>> 6)), (e[i++] = 128 | (63 & a)))
              : a < 65536
              ? ((e[i++] = 224 | (a >>> 12)),
                (e[i++] = 128 | ((a >>> 6) & 63)),
                (e[i++] = 128 | (63 & a)))
              : ((e[i++] = 240 | (a >>> 18)),
                (e[i++] = 128 | ((a >>> 12) & 63)),
                (e[i++] = 128 | ((a >>> 6) & 63)),
                (e[i++] = 128 | (63 & a)));
        return e;
      },
      ae = (t, e) => {
        let a, n;
        const r = e || t.length,
          i = new Array(2 * r);
        for (n = 0, a = 0; a < r; ) {
          let e = t[a++];
          if (e < 128) {
            i[n++] = e;
            continue;
          }
          let s = te[e];
          if (s > 4) (i[n++] = 65533), (a += s - 1);
          else {
            for (e &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && a < r; )
              (e = (e << 6) | (63 & t[a++])), s--;
            s > 1
              ? (i[n++] = 65533)
              : e < 65536
              ? (i[n++] = e)
              : ((e -= 65536),
                (i[n++] = 55296 | ((e >> 10) & 1023)),
                (i[n++] = 56320 | (1023 & e)));
          }
        }
        return ((t, e) => {
          if (e < 65534 && t.subarray && Qt)
            return String.fromCharCode.apply(
              null,
              t.length === e ? t : t.subarray(0, e)
            );
          let a = "";
          for (let n = 0; n < e; n++) a += String.fromCharCode(t[n]);
          return a;
        })(i, n);
      },
      ne = (t, e) => {
        (e = e || t.length) > t.length && (e = t.length);
        let a = e - 1;
        for (; a >= 0 && 128 == (192 & t[a]); ) a--;
        return a < 0 || 0 === a ? e : a + te[t[a]] > e ? a : e;
      };
    var re = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    };
    const ie = Object.prototype.toString,
      {
        Z_NO_FLUSH: se,
        Z_SYNC_FLUSH: oe,
        Z_FULL_FLUSH: le,
        Z_FINISH: fe,
        Z_OK: he,
        Z_STREAM_END: ce,
        Z_DEFAULT_COMPRESSION: de,
        Z_DEFAULT_STRATEGY: ue,
        Z_DEFLATED: _e,
      } = st;
    function be(t) {
      this.options = Xt(
        {
          level: de,
          method: _e,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: ue,
        },
        t || {}
      );
      let e = this.options;
      e.raw && e.windowBits > 0
        ? (e.windowBits = -e.windowBits)
        : e.gzip &&
          e.windowBits > 0 &&
          e.windowBits < 16 &&
          (e.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new re()),
        (this.strm.avail_out = 0);
      let a = qt.deflateInit2(
        this.strm,
        e.level,
        e.method,
        e.windowBits,
        e.memLevel,
        e.strategy
      );
      if (a !== he) throw new Error(it[a]);
      if (
        (e.header && qt.deflateSetHeader(this.strm, e.header), e.dictionary)
      ) {
        let t;
        if (
          ((t =
            "string" == typeof e.dictionary
              ? ee(e.dictionary)
              : "[object ArrayBuffer]" === ie.call(e.dictionary)
              ? new Uint8Array(e.dictionary)
              : e.dictionary),
          (a = qt.deflateSetDictionary(this.strm, t)),
          a !== he)
        )
          throw new Error(it[a]);
        this._dict_set = !0;
      }
    }
    function we(t, e) {
      const a = new be(e);
      if ((a.push(t, !0), a.err)) throw a.msg || it[a.err];
      return a.result;
    }
    (be.prototype.push = function (t, e) {
      const a = this.strm,
        n = this.options.chunkSize;
      let r, i;
      if (this.ended) return !1;
      for (
        i = e === ~~e ? e : !0 === e ? fe : se,
          "string" == typeof t
            ? (a.input = ee(t))
            : "[object ArrayBuffer]" === ie.call(t)
            ? (a.input = new Uint8Array(t))
            : (a.input = t),
          a.next_in = 0,
          a.avail_in = a.input.length;
        ;

      )
        if (
          (0 === a.avail_out &&
            ((a.output = new Uint8Array(n)),
            (a.next_out = 0),
            (a.avail_out = n)),
          (i === oe || i === le) && a.avail_out <= 6)
        )
          this.onData(a.output.subarray(0, a.next_out)), (a.avail_out = 0);
        else {
          if (((r = qt.deflate(a, i)), r === ce))
            return (
              a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)),
              (r = qt.deflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              r === he
            );
          if (0 !== a.avail_out) {
            if (i > 0 && a.next_out > 0)
              this.onData(a.output.subarray(0, a.next_out)), (a.avail_out = 0);
            else if (0 === a.avail_in) break;
          } else this.onData(a.output);
        }
      return !0;
    }),
      (be.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (be.prototype.onEnd = function (t) {
        t === he && (this.result = $t(this.chunks)),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg);
      });
    var pe = {
      Deflate: be,
      deflate: we,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), we(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), we(t, e);
      },
      constants: st,
    };
    var ge = function (t, e) {
      let a,
        n,
        r,
        i,
        s,
        o,
        l,
        f,
        h,
        c,
        d,
        u,
        _,
        b,
        w,
        p,
        g,
        m,
        v,
        k,
        y,
        A,
        E,
        R;
      const U = t.state;
      (a = t.next_in),
        (E = t.input),
        (n = a + (t.avail_in - 5)),
        (r = t.next_out),
        (R = t.output),
        (i = r - (e - t.avail_out)),
        (s = r + (t.avail_out - 257)),
        (o = U.dmax),
        (l = U.wsize),
        (f = U.whave),
        (h = U.wnext),
        (c = U.window),
        (d = U.hold),
        (u = U.bits),
        (_ = U.lencode),
        (b = U.distcode),
        (w = (1 << U.lenbits) - 1),
        (p = (1 << U.distbits) - 1);
      t: do {
        u < 15 && ((d += E[a++] << u), (u += 8), (d += E[a++] << u), (u += 8)),
          (g = _[d & w]);
        e: for (;;) {
          if (
            ((m = g >>> 24),
            (d >>>= m),
            (u -= m),
            (m = (g >>> 16) & 255),
            0 === m)
          )
            R[r++] = 65535 & g;
          else {
            if (!(16 & m)) {
              if (0 == (64 & m)) {
                g = _[(65535 & g) + (d & ((1 << m) - 1))];
                continue e;
              }
              if (32 & m) {
                U.mode = 12;
                break t;
              }
              (t.msg = "invalid literal/length code"), (U.mode = 30);
              break t;
            }
            (v = 65535 & g),
              (m &= 15),
              m &&
                (u < m && ((d += E[a++] << u), (u += 8)),
                (v += d & ((1 << m) - 1)),
                (d >>>= m),
                (u -= m)),
              u < 15 &&
                ((d += E[a++] << u), (u += 8), (d += E[a++] << u), (u += 8)),
              (g = b[d & p]);
            a: for (;;) {
              if (
                ((m = g >>> 24),
                (d >>>= m),
                (u -= m),
                (m = (g >>> 16) & 255),
                !(16 & m))
              ) {
                if (0 == (64 & m)) {
                  g = b[(65535 & g) + (d & ((1 << m) - 1))];
                  continue a;
                }
                (t.msg = "invalid distance code"), (U.mode = 30);
                break t;
              }
              if (
                ((k = 65535 & g),
                (m &= 15),
                u < m &&
                  ((d += E[a++] << u),
                  (u += 8),
                  u < m && ((d += E[a++] << u), (u += 8))),
                (k += d & ((1 << m) - 1)),
                k > o)
              ) {
                (t.msg = "invalid distance too far back"), (U.mode = 30);
                break t;
              }
              if (((d >>>= m), (u -= m), (m = r - i), k > m)) {
                if (((m = k - m), m > f && U.sane)) {
                  (t.msg = "invalid distance too far back"), (U.mode = 30);
                  break t;
                }
                if (((y = 0), (A = c), 0 === h)) {
                  if (((y += l - m), m < v)) {
                    v -= m;
                    do {
                      R[r++] = c[y++];
                    } while (--m);
                    (y = r - k), (A = R);
                  }
                } else if (h < m) {
                  if (((y += l + h - m), (m -= h), m < v)) {
                    v -= m;
                    do {
                      R[r++] = c[y++];
                    } while (--m);
                    if (((y = 0), h < v)) {
                      (m = h), (v -= m);
                      do {
                        R[r++] = c[y++];
                      } while (--m);
                      (y = r - k), (A = R);
                    }
                  }
                } else if (((y += h - m), m < v)) {
                  v -= m;
                  do {
                    R[r++] = c[y++];
                  } while (--m);
                  (y = r - k), (A = R);
                }
                for (; v > 2; )
                  (R[r++] = A[y++]),
                    (R[r++] = A[y++]),
                    (R[r++] = A[y++]),
                    (v -= 3);
                v && ((R[r++] = A[y++]), v > 1 && (R[r++] = A[y++]));
              } else {
                y = r - k;
                do {
                  (R[r++] = R[y++]),
                    (R[r++] = R[y++]),
                    (R[r++] = R[y++]),
                    (v -= 3);
                } while (v > 2);
                v && ((R[r++] = R[y++]), v > 1 && (R[r++] = R[y++]));
              }
              break;
            }
          }
          break;
        }
      } while (a < n && r < s);
      (v = u >> 3),
        (a -= v),
        (u -= v << 3),
        (d &= (1 << u) - 1),
        (t.next_in = a),
        (t.next_out = r),
        (t.avail_in = a < n ? n - a + 5 : 5 - (a - n)),
        (t.avail_out = r < s ? s - r + 257 : 257 - (r - s)),
        (U.hold = d),
        (U.bits = u);
    };
    const me = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      ve = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      ke = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      ye = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var Ae = (t, e, a, n, r, i, s, o) => {
      const l = o.bits;
      let f,
        h,
        c,
        d,
        u,
        _,
        b = 0,
        w = 0,
        p = 0,
        g = 0,
        m = 0,
        v = 0,
        k = 0,
        y = 0,
        A = 0,
        E = 0,
        R = null,
        U = 0;
      const x = new Uint16Array(16),
        T = new Uint16Array(16);
      let S,
        z,
        O,
        D = null,
        I = 0;
      for (b = 0; b <= 15; b++) x[b] = 0;
      for (w = 0; w < n; w++) x[e[a + w]]++;
      for (m = l, g = 15; g >= 1 && 0 === x[g]; g--);
      if ((m > g && (m = g), 0 === g))
        return (r[i++] = 20971520), (r[i++] = 20971520), (o.bits = 1), 0;
      for (p = 1; p < g && 0 === x[p]; p++);
      for (m < p && (m = p), y = 1, b = 1; b <= 15; b++)
        if (((y <<= 1), (y -= x[b]), y < 0)) return -1;
      if (y > 0 && (0 === t || 1 !== g)) return -1;
      for (T[1] = 0, b = 1; b < 15; b++) T[b + 1] = T[b] + x[b];
      for (w = 0; w < n; w++) 0 !== e[a + w] && (s[T[e[a + w]]++] = w);
      if (
        (0 === t
          ? ((R = D = s), (_ = 19))
          : 1 === t
          ? ((R = me), (U -= 257), (D = ve), (I -= 257), (_ = 256))
          : ((R = ke), (D = ye), (_ = -1)),
        (E = 0),
        (w = 0),
        (b = p),
        (u = i),
        (v = m),
        (k = 0),
        (c = -1),
        (A = 1 << m),
        (d = A - 1),
        (1 === t && A > 852) || (2 === t && A > 592))
      )
        return 1;
      for (;;) {
        (S = b - k),
          s[w] < _
            ? ((z = 0), (O = s[w]))
            : s[w] > _
            ? ((z = D[I + s[w]]), (O = R[U + s[w]]))
            : ((z = 96), (O = 0)),
          (f = 1 << (b - k)),
          (h = 1 << v),
          (p = h);
        do {
          (h -= f), (r[u + (E >> k) + h] = (S << 24) | (z << 16) | O | 0);
        } while (0 !== h);
        for (f = 1 << (b - 1); E & f; ) f >>= 1;
        if ((0 !== f ? ((E &= f - 1), (E += f)) : (E = 0), w++, 0 == --x[b])) {
          if (b === g) break;
          b = e[a + s[w]];
        }
        if (b > m && (E & d) !== c) {
          for (
            0 === k && (k = m), u += p, v = b - k, y = 1 << v;
            v + k < g && ((y -= x[v + k]), !(y <= 0));

          )
            v++, (y <<= 1);
          if (((A += 1 << v), (1 === t && A > 852) || (2 === t && A > 592)))
            return 1;
          (c = E & d), (r[c] = (m << 24) | (v << 16) | (u - i) | 0);
        }
      }
      return (
        0 !== E && (r[u + E] = ((b - k) << 24) | (64 << 16) | 0),
        (o.bits = m),
        0
      );
    };
    const {
        Z_FINISH: Ee,
        Z_BLOCK: Re,
        Z_TREES: Ue,
        Z_OK: xe,
        Z_STREAM_END: Te,
        Z_NEED_DICT: Se,
        Z_STREAM_ERROR: ze,
        Z_DATA_ERROR: Oe,
        Z_MEM_ERROR: De,
        Z_BUF_ERROR: Ie,
        Z_DEFLATED: Ne,
      } = st,
      Pe = (t) =>
        ((t >>> 24) & 255) +
        ((t >>> 8) & 65280) +
        ((65280 & t) << 8) +
        ((255 & t) << 24);
    function Be() {
      (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    const Le = (t) => {
        if (!t || !t.state) return ze;
        const e = t.state;
        return (
          (t.total_in = t.total_out = e.total = 0),
          (t.msg = ""),
          e.wrap && (t.adler = 1 & e.wrap),
          (e.mode = 1),
          (e.last = 0),
          (e.havedict = 0),
          (e.dmax = 32768),
          (e.head = null),
          (e.hold = 0),
          (e.bits = 0),
          (e.lencode = e.lendyn = new Int32Array(852)),
          (e.distcode = e.distdyn = new Int32Array(592)),
          (e.sane = 1),
          (e.back = -1),
          xe
        );
      },
      Ce = (t) => {
        if (!t || !t.state) return ze;
        const e = t.state;
        return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Le(t);
      },
      Fe = (t, e) => {
        let a;
        if (!t || !t.state) return ze;
        const n = t.state;
        return (
          e < 0
            ? ((a = 0), (e = -e))
            : ((a = 1 + (e >> 4)), e < 48 && (e &= 15)),
          e && (e < 8 || e > 15)
            ? ze
            : (null !== n.window && n.wbits !== e && (n.window = null),
              (n.wrap = a),
              (n.wbits = e),
              Ce(t))
        );
      },
      Ze = (t, e) => {
        if (!t) return ze;
        const a = new Be();
        (t.state = a), (a.window = null);
        const n = Fe(t, e);
        return n !== xe && (t.state = null), n;
      };
    let Me,
      We,
      Ve = !0;
    const He = (t) => {
        if (Ve) {
          (Me = new Int32Array(512)), (We = new Int32Array(32));
          let e = 0;
          for (; e < 144; ) t.lens[e++] = 8;
          for (; e < 256; ) t.lens[e++] = 9;
          for (; e < 280; ) t.lens[e++] = 7;
          for (; e < 288; ) t.lens[e++] = 8;
          for (
            Ae(1, t.lens, 0, 288, Me, 0, t.work, { bits: 9 }), e = 0;
            e < 32;

          )
            t.lens[e++] = 5;
          Ae(2, t.lens, 0, 32, We, 0, t.work, { bits: 5 }), (Ve = !1);
        }
        (t.lencode = Me), (t.lenbits = 9), (t.distcode = We), (t.distbits = 5);
      },
      je = (t, e, a, n) => {
        let r;
        const i = t.state;
        return (
          null === i.window &&
            ((i.wsize = 1 << i.wbits),
            (i.wnext = 0),
            (i.whave = 0),
            (i.window = new Uint8Array(i.wsize))),
          n >= i.wsize
            ? (i.window.set(e.subarray(a - i.wsize, a), 0),
              (i.wnext = 0),
              (i.whave = i.wsize))
            : ((r = i.wsize - i.wnext),
              r > n && (r = n),
              i.window.set(e.subarray(a - n, a - n + r), i.wnext),
              (n -= r)
                ? (i.window.set(e.subarray(a - n, a), 0),
                  (i.wnext = n),
                  (i.whave = i.wsize))
                : ((i.wnext += r),
                  i.wnext === i.wsize && (i.wnext = 0),
                  i.whave < i.wsize && (i.whave += r))),
          0
        );
      };
    var Ge = {
      inflateReset: Ce,
      inflateReset2: Fe,
      inflateResetKeep: Le,
      inflateInit: (t) => Ze(t, 15),
      inflateInit2: Ze,
      inflate: (t, e) => {
        let a,
          n,
          r,
          i,
          s,
          o,
          l,
          f,
          h,
          c,
          d,
          u,
          _,
          b,
          w,
          p,
          g,
          m,
          v,
          k,
          y,
          A,
          E = 0;
        const R = new Uint8Array(4);
        let U, x;
        const T = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return ze;
        (a = t.state),
          12 === a.mode && (a.mode = 13),
          (s = t.next_out),
          (r = t.output),
          (l = t.avail_out),
          (i = t.next_in),
          (n = t.input),
          (o = t.avail_in),
          (f = a.hold),
          (h = a.bits),
          (c = o),
          (d = l),
          (A = xe);
        t: for (;;)
          switch (a.mode) {
            case 1:
              if (0 === a.wrap) {
                a.mode = 13;
                break;
              }
              for (; h < 16; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if (2 & a.wrap && 35615 === f) {
                (a.check = 0),
                  (R[0] = 255 & f),
                  (R[1] = (f >>> 8) & 255),
                  (a.check = rt(a.check, R, 2, 0)),
                  (f = 0),
                  (h = 0),
                  (a.mode = 2);
                break;
              }
              if (
                ((a.flags = 0),
                a.head && (a.head.done = !1),
                !(1 & a.wrap) || (((255 & f) << 8) + (f >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (a.mode = 30);
                break;
              }
              if ((15 & f) !== Ne) {
                (t.msg = "unknown compression method"), (a.mode = 30);
                break;
              }
              if (((f >>>= 4), (h -= 4), (y = 8 + (15 & f)), 0 === a.wbits))
                a.wbits = y;
              else if (y > a.wbits) {
                (t.msg = "invalid window size"), (a.mode = 30);
                break;
              }
              (a.dmax = 1 << a.wbits),
                (t.adler = a.check = 1),
                (a.mode = 512 & f ? 10 : 12),
                (f = 0),
                (h = 0);
              break;
            case 2:
              for (; h < 16; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if (((a.flags = f), (255 & a.flags) !== Ne)) {
                (t.msg = "unknown compression method"), (a.mode = 30);
                break;
              }
              if (57344 & a.flags) {
                (t.msg = "unknown header flags set"), (a.mode = 30);
                break;
              }
              a.head && (a.head.text = (f >> 8) & 1),
                512 & a.flags &&
                  ((R[0] = 255 & f),
                  (R[1] = (f >>> 8) & 255),
                  (a.check = rt(a.check, R, 2, 0))),
                (f = 0),
                (h = 0),
                (a.mode = 3);
            case 3:
              for (; h < 32; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              a.head && (a.head.time = f),
                512 & a.flags &&
                  ((R[0] = 255 & f),
                  (R[1] = (f >>> 8) & 255),
                  (R[2] = (f >>> 16) & 255),
                  (R[3] = (f >>> 24) & 255),
                  (a.check = rt(a.check, R, 4, 0))),
                (f = 0),
                (h = 0),
                (a.mode = 4);
            case 4:
              for (; h < 16; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              a.head && ((a.head.xflags = 255 & f), (a.head.os = f >> 8)),
                512 & a.flags &&
                  ((R[0] = 255 & f),
                  (R[1] = (f >>> 8) & 255),
                  (a.check = rt(a.check, R, 2, 0))),
                (f = 0),
                (h = 0),
                (a.mode = 5);
            case 5:
              if (1024 & a.flags) {
                for (; h < 16; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (a.length = f),
                  a.head && (a.head.extra_len = f),
                  512 & a.flags &&
                    ((R[0] = 255 & f),
                    (R[1] = (f >>> 8) & 255),
                    (a.check = rt(a.check, R, 2, 0))),
                  (f = 0),
                  (h = 0);
              } else a.head && (a.head.extra = null);
              a.mode = 6;
            case 6:
              if (
                1024 & a.flags &&
                ((u = a.length),
                u > o && (u = o),
                u &&
                  (a.head &&
                    ((y = a.head.extra_len - a.length),
                    a.head.extra ||
                      (a.head.extra = new Uint8Array(a.head.extra_len)),
                    a.head.extra.set(n.subarray(i, i + u), y)),
                  512 & a.flags && (a.check = rt(a.check, n, u, i)),
                  (o -= u),
                  (i += u),
                  (a.length -= u)),
                a.length)
              )
                break t;
              (a.length = 0), (a.mode = 7);
            case 7:
              if (2048 & a.flags) {
                if (0 === o) break t;
                u = 0;
                do {
                  (y = n[i + u++]),
                    a.head &&
                      y &&
                      a.length < 65536 &&
                      (a.head.name += String.fromCharCode(y));
                } while (y && u < o);
                if (
                  (512 & a.flags && (a.check = rt(a.check, n, u, i)),
                  (o -= u),
                  (i += u),
                  y)
                )
                  break t;
              } else a.head && (a.head.name = null);
              (a.length = 0), (a.mode = 8);
            case 8:
              if (4096 & a.flags) {
                if (0 === o) break t;
                u = 0;
                do {
                  (y = n[i + u++]),
                    a.head &&
                      y &&
                      a.length < 65536 &&
                      (a.head.comment += String.fromCharCode(y));
                } while (y && u < o);
                if (
                  (512 & a.flags && (a.check = rt(a.check, n, u, i)),
                  (o -= u),
                  (i += u),
                  y)
                )
                  break t;
              } else a.head && (a.head.comment = null);
              a.mode = 9;
            case 9:
              if (512 & a.flags) {
                for (; h < 16; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                if (f !== (65535 & a.check)) {
                  (t.msg = "header crc mismatch"), (a.mode = 30);
                  break;
                }
                (f = 0), (h = 0);
              }
              a.head &&
                ((a.head.hcrc = (a.flags >> 9) & 1), (a.head.done = !0)),
                (t.adler = a.check = 0),
                (a.mode = 12);
              break;
            case 10:
              for (; h < 32; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              (t.adler = a.check = Pe(f)), (f = 0), (h = 0), (a.mode = 11);
            case 11:
              if (0 === a.havedict)
                return (
                  (t.next_out = s),
                  (t.avail_out = l),
                  (t.next_in = i),
                  (t.avail_in = o),
                  (a.hold = f),
                  (a.bits = h),
                  Se
                );
              (t.adler = a.check = 1), (a.mode = 12);
            case 12:
              if (e === Re || e === Ue) break t;
            case 13:
              if (a.last) {
                (f >>>= 7 & h), (h -= 7 & h), (a.mode = 27);
                break;
              }
              for (; h < 3; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              switch (((a.last = 1 & f), (f >>>= 1), (h -= 1), 3 & f)) {
                case 0:
                  a.mode = 14;
                  break;
                case 1:
                  if ((He(a), (a.mode = 20), e === Ue)) {
                    (f >>>= 2), (h -= 2);
                    break t;
                  }
                  break;
                case 2:
                  a.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (a.mode = 30);
              }
              (f >>>= 2), (h -= 2);
              break;
            case 14:
              for (f >>>= 7 & h, h -= 7 & h; h < 32; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if ((65535 & f) != ((f >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (a.mode = 30);
                break;
              }
              if (
                ((a.length = 65535 & f),
                (f = 0),
                (h = 0),
                (a.mode = 15),
                e === Ue)
              )
                break t;
            case 15:
              a.mode = 16;
            case 16:
              if (((u = a.length), u)) {
                if ((u > o && (u = o), u > l && (u = l), 0 === u)) break t;
                r.set(n.subarray(i, i + u), s),
                  (o -= u),
                  (i += u),
                  (l -= u),
                  (s += u),
                  (a.length -= u);
                break;
              }
              a.mode = 12;
              break;
            case 17:
              for (; h < 14; ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if (
                ((a.nlen = 257 + (31 & f)),
                (f >>>= 5),
                (h -= 5),
                (a.ndist = 1 + (31 & f)),
                (f >>>= 5),
                (h -= 5),
                (a.ncode = 4 + (15 & f)),
                (f >>>= 4),
                (h -= 4),
                a.nlen > 286 || a.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (a.mode = 30);
                break;
              }
              (a.have = 0), (a.mode = 18);
            case 18:
              for (; a.have < a.ncode; ) {
                for (; h < 3; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (a.lens[T[a.have++]] = 7 & f), (f >>>= 3), (h -= 3);
              }
              for (; a.have < 19; ) a.lens[T[a.have++]] = 0;
              if (
                ((a.lencode = a.lendyn),
                (a.lenbits = 7),
                (U = { bits: a.lenbits }),
                (A = Ae(0, a.lens, 0, 19, a.lencode, 0, a.work, U)),
                (a.lenbits = U.bits),
                A)
              ) {
                (t.msg = "invalid code lengths set"), (a.mode = 30);
                break;
              }
              (a.have = 0), (a.mode = 19);
            case 19:
              for (; a.have < a.nlen + a.ndist; ) {
                for (
                  ;
                  (E = a.lencode[f & ((1 << a.lenbits) - 1)]),
                    (w = E >>> 24),
                    (p = (E >>> 16) & 255),
                    (g = 65535 & E),
                    !(w <= h);

                ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                if (g < 16) (f >>>= w), (h -= w), (a.lens[a.have++] = g);
                else {
                  if (16 === g) {
                    for (x = w + 2; h < x; ) {
                      if (0 === o) break t;
                      o--, (f += n[i++] << h), (h += 8);
                    }
                    if (((f >>>= w), (h -= w), 0 === a.have)) {
                      (t.msg = "invalid bit length repeat"), (a.mode = 30);
                      break;
                    }
                    (y = a.lens[a.have - 1]),
                      (u = 3 + (3 & f)),
                      (f >>>= 2),
                      (h -= 2);
                  } else if (17 === g) {
                    for (x = w + 3; h < x; ) {
                      if (0 === o) break t;
                      o--, (f += n[i++] << h), (h += 8);
                    }
                    (f >>>= w),
                      (h -= w),
                      (y = 0),
                      (u = 3 + (7 & f)),
                      (f >>>= 3),
                      (h -= 3);
                  } else {
                    for (x = w + 7; h < x; ) {
                      if (0 === o) break t;
                      o--, (f += n[i++] << h), (h += 8);
                    }
                    (f >>>= w),
                      (h -= w),
                      (y = 0),
                      (u = 11 + (127 & f)),
                      (f >>>= 7),
                      (h -= 7);
                  }
                  if (a.have + u > a.nlen + a.ndist) {
                    (t.msg = "invalid bit length repeat"), (a.mode = 30);
                    break;
                  }
                  for (; u--; ) a.lens[a.have++] = y;
                }
              }
              if (30 === a.mode) break;
              if (0 === a.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (a.mode = 30);
                break;
              }
              if (
                ((a.lenbits = 9),
                (U = { bits: a.lenbits }),
                (A = Ae(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, U)),
                (a.lenbits = U.bits),
                A)
              ) {
                (t.msg = "invalid literal/lengths set"), (a.mode = 30);
                break;
              }
              if (
                ((a.distbits = 6),
                (a.distcode = a.distdyn),
                (U = { bits: a.distbits }),
                (A = Ae(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, U)),
                (a.distbits = U.bits),
                A)
              ) {
                (t.msg = "invalid distances set"), (a.mode = 30);
                break;
              }
              if (((a.mode = 20), e === Ue)) break t;
            case 20:
              a.mode = 21;
            case 21:
              if (o >= 6 && l >= 258) {
                (t.next_out = s),
                  (t.avail_out = l),
                  (t.next_in = i),
                  (t.avail_in = o),
                  (a.hold = f),
                  (a.bits = h),
                  ge(t, d),
                  (s = t.next_out),
                  (r = t.output),
                  (l = t.avail_out),
                  (i = t.next_in),
                  (n = t.input),
                  (o = t.avail_in),
                  (f = a.hold),
                  (h = a.bits),
                  12 === a.mode && (a.back = -1);
                break;
              }
              for (
                a.back = 0;
                (E = a.lencode[f & ((1 << a.lenbits) - 1)]),
                  (w = E >>> 24),
                  (p = (E >>> 16) & 255),
                  (g = 65535 & E),
                  !(w <= h);

              ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if (p && 0 == (240 & p)) {
                for (
                  m = w, v = p, k = g;
                  (E = a.lencode[k + ((f & ((1 << (m + v)) - 1)) >> m)]),
                    (w = E >>> 24),
                    (p = (E >>> 16) & 255),
                    (g = 65535 & E),
                    !(m + w <= h);

                ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (f >>>= m), (h -= m), (a.back += m);
              }
              if (
                ((f >>>= w), (h -= w), (a.back += w), (a.length = g), 0 === p)
              ) {
                a.mode = 26;
                break;
              }
              if (32 & p) {
                (a.back = -1), (a.mode = 12);
                break;
              }
              if (64 & p) {
                (t.msg = "invalid literal/length code"), (a.mode = 30);
                break;
              }
              (a.extra = 15 & p), (a.mode = 22);
            case 22:
              if (a.extra) {
                for (x = a.extra; h < x; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (a.length += f & ((1 << a.extra) - 1)),
                  (f >>>= a.extra),
                  (h -= a.extra),
                  (a.back += a.extra);
              }
              (a.was = a.length), (a.mode = 23);
            case 23:
              for (
                ;
                (E = a.distcode[f & ((1 << a.distbits) - 1)]),
                  (w = E >>> 24),
                  (p = (E >>> 16) & 255),
                  (g = 65535 & E),
                  !(w <= h);

              ) {
                if (0 === o) break t;
                o--, (f += n[i++] << h), (h += 8);
              }
              if (0 == (240 & p)) {
                for (
                  m = w, v = p, k = g;
                  (E = a.distcode[k + ((f & ((1 << (m + v)) - 1)) >> m)]),
                    (w = E >>> 24),
                    (p = (E >>> 16) & 255),
                    (g = 65535 & E),
                    !(m + w <= h);

                ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (f >>>= m), (h -= m), (a.back += m);
              }
              if (((f >>>= w), (h -= w), (a.back += w), 64 & p)) {
                (t.msg = "invalid distance code"), (a.mode = 30);
                break;
              }
              (a.offset = g), (a.extra = 15 & p), (a.mode = 24);
            case 24:
              if (a.extra) {
                for (x = a.extra; h < x; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                (a.offset += f & ((1 << a.extra) - 1)),
                  (f >>>= a.extra),
                  (h -= a.extra),
                  (a.back += a.extra);
              }
              if (a.offset > a.dmax) {
                (t.msg = "invalid distance too far back"), (a.mode = 30);
                break;
              }
              a.mode = 25;
            case 25:
              if (0 === l) break t;
              if (((u = d - l), a.offset > u)) {
                if (((u = a.offset - u), u > a.whave && a.sane)) {
                  (t.msg = "invalid distance too far back"), (a.mode = 30);
                  break;
                }
                u > a.wnext
                  ? ((u -= a.wnext), (_ = a.wsize - u))
                  : (_ = a.wnext - u),
                  u > a.length && (u = a.length),
                  (b = a.window);
              } else (b = r), (_ = s - a.offset), (u = a.length);
              u > l && (u = l), (l -= u), (a.length -= u);
              do {
                r[s++] = b[_++];
              } while (--u);
              0 === a.length && (a.mode = 21);
              break;
            case 26:
              if (0 === l) break t;
              (r[s++] = a.length), l--, (a.mode = 21);
              break;
            case 27:
              if (a.wrap) {
                for (; h < 32; ) {
                  if (0 === o) break t;
                  o--, (f |= n[i++] << h), (h += 8);
                }
                if (
                  ((d -= l),
                  (t.total_out += d),
                  (a.total += d),
                  d &&
                    (t.adler = a.check =
                      a.flags
                        ? rt(a.check, r, d, s - d)
                        : at(a.check, r, d, s - d)),
                  (d = l),
                  (a.flags ? f : Pe(f)) !== a.check)
                ) {
                  (t.msg = "incorrect data check"), (a.mode = 30);
                  break;
                }
                (f = 0), (h = 0);
              }
              a.mode = 28;
            case 28:
              if (a.wrap && a.flags) {
                for (; h < 32; ) {
                  if (0 === o) break t;
                  o--, (f += n[i++] << h), (h += 8);
                }
                if (f !== (4294967295 & a.total)) {
                  (t.msg = "incorrect length check"), (a.mode = 30);
                  break;
                }
                (f = 0), (h = 0);
              }
              a.mode = 29;
            case 29:
              A = Te;
              break t;
            case 30:
              A = Oe;
              break t;
            case 31:
              return De;
            case 32:
            default:
              return ze;
          }
        return (
          (t.next_out = s),
          (t.avail_out = l),
          (t.next_in = i),
          (t.avail_in = o),
          (a.hold = f),
          (a.bits = h),
          (a.wsize ||
            (d !== t.avail_out && a.mode < 30 && (a.mode < 27 || e !== Ee))) &&
            je(t, t.output, t.next_out, d - t.avail_out),
          (c -= t.avail_in),
          (d -= t.avail_out),
          (t.total_in += c),
          (t.total_out += d),
          (a.total += d),
          a.wrap &&
            d &&
            (t.adler = a.check =
              a.flags
                ? rt(a.check, r, d, t.next_out - d)
                : at(a.check, r, d, t.next_out - d)),
          (t.data_type =
            a.bits +
            (a.last ? 64 : 0) +
            (12 === a.mode ? 128 : 0) +
            (20 === a.mode || 15 === a.mode ? 256 : 0)),
          ((0 === c && 0 === d) || e === Ee) && A === xe && (A = Ie),
          A
        );
      },
      inflateEnd: (t) => {
        if (!t || !t.state) return ze;
        let e = t.state;
        return e.window && (e.window = null), (t.state = null), xe;
      },
      inflateGetHeader: (t, e) => {
        if (!t || !t.state) return ze;
        const a = t.state;
        return 0 == (2 & a.wrap) ? ze : ((a.head = e), (e.done = !1), xe);
      },
      inflateSetDictionary: (t, e) => {
        const a = e.length;
        let n, r, i;
        return t && t.state
          ? ((n = t.state),
            0 !== n.wrap && 11 !== n.mode
              ? ze
              : 11 === n.mode && ((r = 1), (r = at(r, e, a, 0)), r !== n.check)
              ? Oe
              : ((i = je(t, e, a, a)),
                i ? ((n.mode = 31), De) : ((n.havedict = 1), xe)))
          : ze;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    };
    var Ke = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    };
    const Ye = Object.prototype.toString,
      {
        Z_NO_FLUSH: qe,
        Z_FINISH: Je,
        Z_OK: Xe,
        Z_STREAM_END: $e,
        Z_NEED_DICT: Qe,
        Z_STREAM_ERROR: ta,
        Z_DATA_ERROR: ea,
        Z_MEM_ERROR: aa,
      } = st;
    function na(t) {
      this.options = Xt({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
      const e = this.options;
      e.raw &&
        e.windowBits >= 0 &&
        e.windowBits < 16 &&
        ((e.windowBits = -e.windowBits),
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) ||
          (t && t.windowBits) ||
          (e.windowBits += 32),
        e.windowBits > 15 &&
          e.windowBits < 48 &&
          0 == (15 & e.windowBits) &&
          (e.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new re()),
        (this.strm.avail_out = 0);
      let a = Ge.inflateInit2(this.strm, e.windowBits);
      if (a !== Xe) throw new Error(it[a]);
      if (
        ((this.header = new Ke()),
        Ge.inflateGetHeader(this.strm, this.header),
        e.dictionary &&
          ("string" == typeof e.dictionary
            ? (e.dictionary = ee(e.dictionary))
            : "[object ArrayBuffer]" === Ye.call(e.dictionary) &&
              (e.dictionary = new Uint8Array(e.dictionary)),
          e.raw &&
            ((a = Ge.inflateSetDictionary(this.strm, e.dictionary)), a !== Xe)))
      )
        throw new Error(it[a]);
    }
    function ra(t, e) {
      const a = new na(e);
      if ((a.push(t), a.err)) throw a.msg || it[a.err];
      return a.result;
    }
    (na.prototype.push = function (t, e) {
      const a = this.strm,
        n = this.options.chunkSize,
        r = this.options.dictionary;
      let i, s, o;
      if (this.ended) return !1;
      for (
        s = e === ~~e ? e : !0 === e ? Je : qe,
          "[object ArrayBuffer]" === Ye.call(t)
            ? (a.input = new Uint8Array(t))
            : (a.input = t),
          a.next_in = 0,
          a.avail_in = a.input.length;
        ;

      ) {
        for (
          0 === a.avail_out &&
            ((a.output = new Uint8Array(n)),
            (a.next_out = 0),
            (a.avail_out = n)),
            i = Ge.inflate(a, s),
            i === Qe &&
              r &&
              ((i = Ge.inflateSetDictionary(a, r)),
              i === Xe ? (i = Ge.inflate(a, s)) : i === ea && (i = Qe));
          a.avail_in > 0 && i === $e && a.state.wrap > 0 && 0 !== t[a.next_in];

        )
          Ge.inflateReset(a), (i = Ge.inflate(a, s));
        switch (i) {
          case ta:
          case ea:
          case Qe:
          case aa:
            return this.onEnd(i), (this.ended = !0), !1;
        }
        if (((o = a.avail_out), a.next_out && (0 === a.avail_out || i === $e)))
          if ("string" === this.options.to) {
            let t = ne(a.output, a.next_out),
              e = a.next_out - t,
              r = ae(a.output, t);
            (a.next_out = e),
              (a.avail_out = n - e),
              e && a.output.set(a.output.subarray(t, t + e), 0),
              this.onData(r);
          } else
            this.onData(
              a.output.length === a.next_out
                ? a.output
                : a.output.subarray(0, a.next_out)
            );
        if (i !== Xe || 0 !== o) {
          if (i === $e)
            return (
              (i = Ge.inflateEnd(this.strm)),
              this.onEnd(i),
              (this.ended = !0),
              !0
            );
          if (0 === a.avail_in) break;
        }
      }
      return !0;
    }),
      (na.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (na.prototype.onEnd = function (t) {
        t === Xe &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = $t(this.chunks))),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg);
      });
    var ia = {
      Inflate: na,
      inflate: ra,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), ra(t, e);
      },
      ungzip: ra,
      constants: st,
    };
    const { Deflate: sa, deflate: oa, deflateRaw: la, gzip: fa } = pe,
      { Inflate: ha, inflate: ca, inflateRaw: da, ungzip: ua } = ia;
    var _a = oa;
    const ba = [137, 80, 78, 71, 13, 10, 26, 10],
      wa = [];
    for (let t = 0; t < 256; t++) {
      let e = t;
      for (let t = 0; t < 8; t++)
        1 & e ? (e = 3988292384 ^ (e >>> 1)) : (e >>>= 1);
      wa[t] = e;
    }
    function pa(t, e) {
      return (
        (4294967295 ^
          (function (t, e, a) {
            let n = t;
            for (let t = 0; t < a; t++) n = wa[255 & (n ^ e[t])] ^ (n >>> 8);
            return n;
          })(4294967295, t, e)) >>>
        0
      );
    }
    var ga, ma, va, ka;
    !(function (t) {
      (t[(t.UNKNOWN = -1)] = "UNKNOWN"),
        (t[(t.GREYSCALE = 0)] = "GREYSCALE"),
        (t[(t.TRUECOLOUR = 2)] = "TRUECOLOUR"),
        (t[(t.INDEXED_COLOUR = 3)] = "INDEXED_COLOUR"),
        (t[(t.GREYSCALE_ALPHA = 4)] = "GREYSCALE_ALPHA"),
        (t[(t.TRUECOLOUR_ALPHA = 6)] = "TRUECOLOUR_ALPHA");
    })(ga || (ga = {})),
      (function (t) {
        (t[(t.UNKNOWN = -1)] = "UNKNOWN"), (t[(t.DEFLATE = 0)] = "DEFLATE");
      })(ma || (ma = {})),
      (function (t) {
        (t[(t.UNKNOWN = -1)] = "UNKNOWN"), (t[(t.ADAPTIVE = 0)] = "ADAPTIVE");
      })(va || (va = {})),
      (function (t) {
        (t[(t.UNKNOWN = -1)] = "UNKNOWN"),
          (t[(t.NO_INTERLACE = 0)] = "NO_INTERLACE"),
          (t[(t.ADAM7 = 1)] = "ADAM7");
      })(ka || (ka = {}));
    new Uint8Array(0);
    const ya = new Uint16Array([255]);
    new Uint8Array(ya.buffer)[0];
    const Aa = { level: 3 };
    class Ea extends k {
      constructor(t, e = {}) {
        super(),
          (this._colorType = ga.UNKNOWN),
          (this._zlibOptions = Object.assign({}, Aa, e.zlib)),
          (this._png = this._checkData(t)),
          this.setBigEndian();
      }
      encode() {
        return (
          this.encodeSignature(),
          this.encodeIHDR(),
          this.encodeData(),
          this.encodeIEND(),
          this.toArray()
        );
      }
      encodeSignature() {
        this.writeBytes(ba);
      }
      encodeIHDR() {
        this.writeUint32(13),
          this.writeChars("IHDR"),
          this.writeUint32(this._png.width),
          this.writeUint32(this._png.height),
          this.writeByte(this._png.depth),
          this.writeByte(this._colorType),
          this.writeByte(ma.DEFLATE),
          this.writeByte(va.ADAPTIVE),
          this.writeByte(ka.NO_INTERLACE),
          this.writeCrc(17);
      }
      encodeIEND() {
        this.writeUint32(0), this.writeChars("IEND"), this.writeCrc(4);
      }
      encodeIDAT(t) {
        this.writeUint32(t.length),
          this.writeChars("IDAT"),
          this.writeBytes(t),
          this.writeCrc(t.length + 4);
      }
      encodeData() {
        const {
            width: t,
            height: e,
            channels: a,
            depth: n,
            data: r,
          } = this._png,
          i = a * t,
          s = new k().setBigEndian();
        let o = 0;
        for (let t = 0; t < e; t++)
          if ((s.writeByte(0), 8 === n)) o = Ua(r, s, i, o);
          else {
            if (16 !== n) throw new Error("unreachable");
            o = xa(r, s, i, o);
          }
        const l = s.toArray(),
          f = _a(l, this._zlibOptions);
        this.encodeIDAT(f);
      }
      _checkData(t) {
        const {
            colorType: e,
            channels: a,
            depth: n,
          } = (function (t) {
            const { channels: e = 4, depth: a = 8 } = t;
            if (4 !== e && 3 !== e && 2 !== e && 1 !== e)
              throw new RangeError("unsupported number of channels: " + e);
            if (8 !== a && 16 !== a)
              throw new RangeError("unsupported bit depth: " + a);
            const n = { channels: e, depth: a, colorType: ga.UNKNOWN };
            switch (e) {
              case 4:
                n.colorType = ga.TRUECOLOUR_ALPHA;
                break;
              case 3:
                n.colorType = ga.TRUECOLOUR;
                break;
              case 1:
                n.colorType = ga.GREYSCALE;
                break;
              case 2:
                n.colorType = ga.GREYSCALE_ALPHA;
                break;
              default:
                throw new Error("unsupported number of channels");
            }
            return n;
          })(t),
          r = {
            width: Ra(t.width, "width"),
            height: Ra(t.height, "height"),
            channels: a,
            data: t.data,
            depth: n,
            text: {},
          };
        this._colorType = e;
        const i = r.width * r.height * a;
        if (r.data.length !== i)
          throw new RangeError(
            `wrong data size. Found ${r.data.length}, expected ${i}`
          );
        return r;
      }
      writeCrc(t) {
        this.writeUint32(
          pa(
            new Uint8Array(this.buffer, this.byteOffset + this.offset - t, t),
            t
          )
        );
      }
    }
    function Ra(t, e) {
      if (Number.isInteger(t) && t > 0) return t;
      throw new TypeError(e + " must be a positive integer");
    }
    function Ua(t, e, a, n) {
      for (let r = 0; r < a; r++) e.writeByte(t[n++]);
      return n;
    }
    function xa(t, e, a, n) {
      for (let r = 0; r < a; r++) e.writeUint16(t[n++]);
      return n;
    }
    var Ta;
    function Sa(t) {
      const e = new g(),
        a = e.WebPDecoderConfig,
        n = a.j || a.output,
        r = a.input;
      let i;
      e.WebPInitDecoderConfig(a), e.WebPGetFeatures(t, t.length, r), (n.J = 1);
      try {
        i = e.WebPDecode(t, t.length, a);
      } catch (t) {
        i = t;
      }
      if (0 === i) {
        const t = n.Jb;
        return {
          status: i,
          bytes:
            ((s = {
              data: t,
              width: n.width,
              height: n.height,
              channels: 4,
              depth: 8,
            }),
            new Ea(s, o).encode()),
        };
      }
      var s, o;
      return { status: i, bytes: t };
    }
    !(function (t) {
      (t[(t.UNKNOWN = 0)] = "UNKNOWN"), (t[(t.METRE = 1)] = "METRE");
    })(Ta || (Ta = {}));
    const za = self,
      Oa = [];
    function Da() {
      Ia();
    }
    function Ia() {
      const t = Oa.shift();
      if (t)
        switch (t.type) {
          case "convertWebp": {
            const { fileName: e, bytes: a } = t.payload;
            let n;
            try {
              n = Sa(a).bytes;
            } catch (e) {
              console.error(
                "Convert webp2png error:",
                e,
                "payload:",
                t.payload
              );
            }
            za.postMessage({
              type: "convertWebp",
              payload: { fileName: e, bytes: n },
            }),
              Da();
            break;
          }
          default:
            Da();
        }
    }
    za.addEventListener("message", (t) => {
      var e;
      (e = t.data), Oa.push(e), Ia();
    });
  },
]);
//# sourceMappingURL=webp.worker.c0cc94110cda650246b2.bundle.worker.js.map
