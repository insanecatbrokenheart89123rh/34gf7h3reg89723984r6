!(function (e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var s = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          a.d(
            n,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 3));
})([
  function (e, t, a) {
    (function (e) {
      var n,
        s = (function (e) {
          "use strict";
          var t = 1e7,
            a = 9007199254740992,
            n = y(a),
            i = "function" == typeof BigInt;
          function r(e, t, a, n) {
            return void 0 === e
              ? r[0]
              : void 0 !== t && (10 != +t || a)
              ? O(e, t, a, n)
              : z(e);
          }
          function p(e, t) {
            (this.value = e), (this.sign = t), (this.isSmall = !1);
          }
          function o(e) {
            (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
          }
          function m(e) {
            this.value = e;
          }
          function d(e) {
            return -a < e && e < a;
          }
          function y(e) {
            return e < 1e7
              ? [e]
              : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
          }
          function c(e) {
            l(e);
            var a = e.length;
            if (a < 4 && M(e, n) < 0)
              switch (a) {
                case 0:
                  return 0;
                case 1:
                  return e[0];
                case 2:
                  return e[0] + e[1] * t;
                default:
                  return e[0] + (e[1] + e[2] * t) * t;
              }
            return e;
          }
          function l(e) {
            for (var t = e.length; 0 === e[--t]; );
            e.length = t + 1;
          }
          function g(e) {
            for (var t = new Array(e), a = -1; ++a < e; ) t[a] = 0;
            return t;
          }
          function u(e) {
            return e > 0 ? Math.floor(e) : Math.ceil(e);
          }
          function h(e, a) {
            var n,
              s,
              i = e.length,
              r = a.length,
              p = new Array(i),
              o = 0,
              m = t;
            for (s = 0; s < r; s++)
              (o = (n = e[s] + a[s] + o) >= m ? 1 : 0), (p[s] = n - o * m);
            for (; s < i; )
              (o = (n = e[s] + o) === m ? 1 : 0), (p[s++] = n - o * m);
            return o > 0 && p.push(o), p;
          }
          function f(e, t) {
            return e.length >= t.length ? h(e, t) : h(t, e);
          }
          function _(e, a) {
            var n,
              s,
              i = e.length,
              r = new Array(i),
              p = t;
            for (s = 0; s < i; s++)
              (n = e[s] - p + a),
                (a = Math.floor(n / p)),
                (r[s] = n - a * p),
                (a += 1);
            for (; a > 0; ) (r[s++] = a % p), (a = Math.floor(a / p));
            return r;
          }
          function v(e, t) {
            var a,
              n,
              s = e.length,
              i = t.length,
              r = new Array(s),
              p = 0;
            for (a = 0; a < i; a++)
              (n = e[a] - p - t[a]) < 0 ? ((n += 1e7), (p = 1)) : (p = 0),
                (r[a] = n);
            for (a = i; a < s; a++) {
              if (!((n = e[a] - p) < 0)) {
                r[a++] = n;
                break;
              }
              (n += 1e7), (r[a] = n);
            }
            for (; a < s; a++) r[a] = e[a];
            return l(r), r;
          }
          function b(e, t, a) {
            var n,
              s,
              i = e.length,
              r = new Array(i),
              m = -t;
            for (n = 0; n < i; n++)
              (s = e[n] + m),
                (m = Math.floor(s / 1e7)),
                (s %= 1e7),
                (r[n] = s < 0 ? s + 1e7 : s);
            return "number" == typeof (r = c(r))
              ? (a && (r = -r), new o(r))
              : new p(r, a);
          }
          function w(e, t) {
            var a,
              n,
              s,
              i,
              r = e.length,
              p = t.length,
              o = g(r + p);
            for (s = 0; s < r; ++s) {
              i = e[s];
              for (var m = 0; m < p; ++m)
                (a = i * t[m] + o[s + m]),
                  (n = Math.floor(a / 1e7)),
                  (o[s + m] = a - 1e7 * n),
                  (o[s + m + 1] += n);
            }
            return l(o), o;
          }
          function P(e, a) {
            var n,
              s,
              i = e.length,
              r = new Array(i),
              p = t,
              o = 0;
            for (s = 0; s < i; s++)
              (n = e[s] * a + o), (o = Math.floor(n / p)), (r[s] = n - o * p);
            for (; o > 0; ) (r[s++] = o % p), (o = Math.floor(o / p));
            return r;
          }
          function S(e, t) {
            for (var a = []; t-- > 0; ) a.push(0);
            return a.concat(e);
          }
          function k(e, a, n) {
            return new p(e < t ? P(a, e) : w(a, y(e)), n);
          }
          function I(e) {
            var t,
              a,
              n,
              s,
              i = e.length,
              r = g(i + i);
            for (n = 0; n < i; n++) {
              a = 0 - (s = e[n]) * s;
              for (var p = n; p < i; p++)
                (t = s * e[p] * 2 + r[n + p] + a),
                  (a = Math.floor(t / 1e7)),
                  (r[n + p] = t - 1e7 * a);
              r[n + i] = a;
            }
            return l(r), r;
          }
          function C(e, t) {
            var a,
              n,
              s,
              i,
              r = e.length,
              p = g(r);
            for (s = 0, a = r - 1; a >= 0; --a)
              (s = (i = 1e7 * s + e[a]) - (n = u(i / t)) * t), (p[a] = 0 | n);
            return [p, 0 | s];
          }
          function A(e, a) {
            var n,
              s = z(a);
            if (i) return [new m(e.value / s.value), new m(e.value % s.value)];
            var d,
              h = e.value,
              f = s.value;
            if (0 === f) throw new Error("Cannot divide by zero");
            if (e.isSmall)
              return s.isSmall ? [new o(u(h / f)), new o(h % f)] : [r[0], e];
            if (s.isSmall) {
              if (1 === f) return [e, r[0]];
              if (-1 == f) return [e.negate(), r[0]];
              var _ = Math.abs(f);
              if (_ < t) {
                d = c((n = C(h, _))[0]);
                var b = n[1];
                return (
                  e.sign && (b = -b),
                  "number" == typeof d
                    ? (e.sign !== s.sign && (d = -d), [new o(d), new o(b)])
                    : [new p(d, e.sign !== s.sign), new o(b)]
                );
              }
              f = y(_);
            }
            var w = M(h, f);
            if (-1 === w) return [r[0], e];
            if (0 === w) return [r[e.sign === s.sign ? 1 : -1], r[0]];
            d = (n =
              h.length + f.length <= 200
                ? (function (e, a) {
                    var n,
                      s,
                      i,
                      r,
                      p,
                      o,
                      m,
                      d = e.length,
                      y = a.length,
                      l = t,
                      u = g(a.length),
                      h = a[y - 1],
                      f = Math.ceil(l / (2 * h)),
                      _ = P(e, f),
                      v = P(a, f);
                    for (
                      _.length <= d && _.push(0),
                        v.push(0),
                        h = v[y - 1],
                        s = d - y;
                      s >= 0;
                      s--
                    ) {
                      for (
                        n = l - 1,
                          _[s + y] !== h &&
                            (n = Math.floor((_[s + y] * l + _[s + y - 1]) / h)),
                          i = 0,
                          r = 0,
                          o = v.length,
                          p = 0;
                        p < o;
                        p++
                      )
                        (i += n * v[p]),
                          (m = Math.floor(i / l)),
                          (r += _[s + p] - (i - m * l)),
                          (i = m),
                          r < 0
                            ? ((_[s + p] = r + l), (r = -1))
                            : ((_[s + p] = r), (r = 0));
                      for (; 0 !== r; ) {
                        for (n -= 1, i = 0, p = 0; p < o; p++)
                          (i += _[s + p] - l + v[p]) < 0
                            ? ((_[s + p] = i + l), (i = 0))
                            : ((_[s + p] = i), (i = 1));
                        r += i;
                      }
                      u[s] = n;
                    }
                    return (_ = C(_, f)[0]), [c(u), c(_)];
                  })(h, f)
                : (function (e, t) {
                    for (
                      var a,
                        n,
                        s,
                        i,
                        r,
                        p = e.length,
                        o = t.length,
                        m = [],
                        d = [];
                      p;

                    )
                      if ((d.unshift(e[--p]), l(d), M(d, t) < 0)) m.push(0);
                      else {
                        (s = 1e7 * d[(n = d.length) - 1] + d[n - 2]),
                          (i = 1e7 * t[o - 1] + t[o - 2]),
                          n > o && (s = 1e7 * (s + 1)),
                          (a = Math.ceil(s / i));
                        do {
                          if (M((r = P(t, a)), d) <= 0) break;
                          a--;
                        } while (a);
                        m.push(a), (d = v(d, r));
                      }
                    return m.reverse(), [c(m), c(d)];
                  })(h, f))[0];
            var S = e.sign !== s.sign,
              k = n[1],
              I = e.sign;
            return (
              "number" == typeof d
                ? (S && (d = -d), (d = new o(d)))
                : (d = new p(d, S)),
              "number" == typeof k
                ? (I && (k = -k), (k = new o(k)))
                : (k = new p(k, I)),
              [d, k]
            );
          }
          function M(e, t) {
            if (e.length !== t.length) return e.length > t.length ? 1 : -1;
            for (var a = e.length - 1; a >= 0; a--)
              if (e[a] !== t[a]) return e[a] > t[a] ? 1 : -1;
            return 0;
          }
          function R(e) {
            var t = e.abs();
            return (
              !t.isUnit() &&
              (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) &&
                  (!!t.lesser(49) || void 0)))
            );
          }
          function E(e, t) {
            for (var a, n, i, r = e.prev(), p = r, o = 0; p.isEven(); )
              (p = p.divide(2)), o++;
            e: for (n = 0; n < t.length; n++)
              if (
                !e.lesser(t[n]) &&
                !(i = s(t[n]).modPow(p, e)).isUnit() &&
                !i.equals(r)
              ) {
                for (a = o - 1; 0 != a; a--) {
                  if ((i = i.square().mod(e)).isUnit()) return !1;
                  if (i.equals(r)) continue e;
                }
                return !1;
              }
            return !0;
          }
          (p.prototype = Object.create(r.prototype)),
            (o.prototype = Object.create(r.prototype)),
            (m.prototype = Object.create(r.prototype)),
            (p.prototype.add = function (e) {
              var t = z(e);
              if (this.sign !== t.sign) return this.subtract(t.negate());
              var a = this.value,
                n = t.value;
              return t.isSmall
                ? new p(_(a, Math.abs(n)), this.sign)
                : new p(f(a, n), this.sign);
            }),
            (p.prototype.plus = p.prototype.add),
            (o.prototype.add = function (e) {
              var t = z(e),
                a = this.value;
              if (a < 0 !== t.sign) return this.subtract(t.negate());
              var n = t.value;
              if (t.isSmall) {
                if (d(a + n)) return new o(a + n);
                n = y(Math.abs(n));
              }
              return new p(_(n, Math.abs(a)), a < 0);
            }),
            (o.prototype.plus = o.prototype.add),
            (m.prototype.add = function (e) {
              return new m(this.value + z(e).value);
            }),
            (m.prototype.plus = m.prototype.add),
            (p.prototype.subtract = function (e) {
              var t = z(e);
              if (this.sign !== t.sign) return this.add(t.negate());
              var a = this.value,
                n = t.value;
              return t.isSmall
                ? b(a, Math.abs(n), this.sign)
                : (function (e, t, a) {
                    var n;
                    return (
                      M(e, t) >= 0 ? (n = v(e, t)) : ((n = v(t, e)), (a = !a)),
                      "number" == typeof (n = c(n))
                        ? (a && (n = -n), new o(n))
                        : new p(n, a)
                    );
                  })(a, n, this.sign);
            }),
            (p.prototype.minus = p.prototype.subtract),
            (o.prototype.subtract = function (e) {
              var t = z(e),
                a = this.value;
              if (a < 0 !== t.sign) return this.add(t.negate());
              var n = t.value;
              return t.isSmall ? new o(a - n) : b(n, Math.abs(a), a >= 0);
            }),
            (o.prototype.minus = o.prototype.subtract),
            (m.prototype.subtract = function (e) {
              return new m(this.value - z(e).value);
            }),
            (m.prototype.minus = m.prototype.subtract),
            (p.prototype.negate = function () {
              return new p(this.value, !this.sign);
            }),
            (o.prototype.negate = function () {
              var e = this.sign,
                t = new o(-this.value);
              return (t.sign = !e), t;
            }),
            (m.prototype.negate = function () {
              return new m(-this.value);
            }),
            (p.prototype.abs = function () {
              return new p(this.value, !1);
            }),
            (o.prototype.abs = function () {
              return new o(Math.abs(this.value));
            }),
            (m.prototype.abs = function () {
              return new m(this.value >= 0 ? this.value : -this.value);
            }),
            (p.prototype.multiply = function (e) {
              var a,
                n,
                s,
                i = z(e),
                o = this.value,
                m = i.value,
                d = this.sign !== i.sign;
              if (i.isSmall) {
                if (0 === m) return r[0];
                if (1 === m) return this;
                if (-1 === m) return this.negate();
                if ((a = Math.abs(m)) < t) return new p(P(o, a), d);
                m = y(a);
              }
              return (
                (n = o.length),
                (s = m.length),
                new p(
                  -0.012 * n - 0.012 * s + 15e-6 * n * s > 0
                    ? (function e(t, a) {
                        var n = Math.max(t.length, a.length);
                        if (n <= 30) return w(t, a);
                        n = Math.ceil(n / 2);
                        var s = t.slice(n),
                          i = t.slice(0, n),
                          r = a.slice(n),
                          p = a.slice(0, n),
                          o = e(i, p),
                          m = e(s, r),
                          d = e(f(i, s), f(p, r)),
                          y = f(f(o, S(v(v(d, o), m), n)), S(m, 2 * n));
                        return l(y), y;
                      })(o, m)
                    : w(o, m),
                  d
                )
              );
            }),
            (p.prototype.times = p.prototype.multiply),
            (o.prototype._multiplyBySmall = function (e) {
              return d(e.value * this.value)
                ? new o(e.value * this.value)
                : k(
                    Math.abs(e.value),
                    y(Math.abs(this.value)),
                    this.sign !== e.sign
                  );
            }),
            (p.prototype._multiplyBySmall = function (e) {
              return 0 === e.value
                ? r[0]
                : 1 === e.value
                ? this
                : -1 === e.value
                ? this.negate()
                : k(Math.abs(e.value), this.value, this.sign !== e.sign);
            }),
            (o.prototype.multiply = function (e) {
              return z(e)._multiplyBySmall(this);
            }),
            (o.prototype.times = o.prototype.multiply),
            (m.prototype.multiply = function (e) {
              return new m(this.value * z(e).value);
            }),
            (m.prototype.times = m.prototype.multiply),
            (p.prototype.square = function () {
              return new p(I(this.value), !1);
            }),
            (o.prototype.square = function () {
              var e = this.value * this.value;
              return d(e) ? new o(e) : new p(I(y(Math.abs(this.value))), !1);
            }),
            (m.prototype.square = function (e) {
              return new m(this.value * this.value);
            }),
            (p.prototype.divmod = function (e) {
              var t = A(this, e);
              return { quotient: t[0], remainder: t[1] };
            }),
            (m.prototype.divmod = o.prototype.divmod = p.prototype.divmod),
            (p.prototype.divide = function (e) {
              return A(this, e)[0];
            }),
            (m.prototype.over = m.prototype.divide =
              function (e) {
                return new m(this.value / z(e).value);
              }),
            (o.prototype.over =
              o.prototype.divide =
              p.prototype.over =
                p.prototype.divide),
            (p.prototype.mod = function (e) {
              return A(this, e)[1];
            }),
            (m.prototype.mod = m.prototype.remainder =
              function (e) {
                return new m(this.value % z(e).value);
              }),
            (o.prototype.remainder =
              o.prototype.mod =
              p.prototype.remainder =
                p.prototype.mod),
            (p.prototype.pow = function (e) {
              var t,
                a,
                n,
                s = z(e),
                i = this.value,
                p = s.value;
              if (0 === p) return r[1];
              if (0 === i) return r[0];
              if (1 === i) return r[1];
              if (-1 === i) return s.isEven() ? r[1] : r[-1];
              if (s.sign) return r[0];
              if (!s.isSmall)
                throw new Error(
                  "The exponent " + s.toString() + " is too large."
                );
              if (this.isSmall && d((t = Math.pow(i, p)))) return new o(u(t));
              for (
                a = this, n = r[1];
                !0 & p && ((n = n.times(a)), --p), 0 !== p;

              )
                (p /= 2), (a = a.square());
              return n;
            }),
            (o.prototype.pow = p.prototype.pow),
            (m.prototype.pow = function (e) {
              var t = z(e),
                a = this.value,
                n = t.value,
                s = BigInt(0),
                i = BigInt(1),
                p = BigInt(2);
              if (n === s) return r[1];
              if (a === s) return r[0];
              if (a === i) return r[1];
              if (a === BigInt(-1)) return t.isEven() ? r[1] : r[-1];
              if (t.isNegative()) return new m(s);
              for (
                var o = this, d = r[1];
                (n & i) === i && ((d = d.times(o)), --n), n !== s;

              )
                (n /= p), (o = o.square());
              return d;
            }),
            (p.prototype.modPow = function (e, t) {
              if (((e = z(e)), (t = z(t)).isZero()))
                throw new Error("Cannot take modPow with modulus 0");
              var a = r[1],
                n = this.mod(t);
              for (
                e.isNegative() && ((e = e.multiply(r[-1])), (n = n.modInv(t)));
                e.isPositive();

              ) {
                if (n.isZero()) return r[0];
                e.isOdd() && (a = a.multiply(n).mod(t)),
                  (e = e.divide(2)),
                  (n = n.square().mod(t));
              }
              return a;
            }),
            (m.prototype.modPow = o.prototype.modPow = p.prototype.modPow),
            (p.prototype.compareAbs = function (e) {
              var t = z(e),
                a = this.value,
                n = t.value;
              return t.isSmall ? 1 : M(a, n);
            }),
            (o.prototype.compareAbs = function (e) {
              var t = z(e),
                a = Math.abs(this.value),
                n = t.value;
              return t.isSmall
                ? a === (n = Math.abs(n))
                  ? 0
                  : a > n
                  ? 1
                  : -1
                : -1;
            }),
            (m.prototype.compareAbs = function (e) {
              var t = this.value,
                a = z(e).value;
              return (t = t >= 0 ? t : -t) === (a = a >= 0 ? a : -a)
                ? 0
                : t > a
                ? 1
                : -1;
            }),
            (p.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = z(e),
                a = this.value,
                n = t.value;
              return this.sign !== t.sign
                ? t.sign
                  ? 1
                  : -1
                : t.isSmall
                ? this.sign
                  ? -1
                  : 1
                : M(a, n) * (this.sign ? -1 : 1);
            }),
            (p.prototype.compareTo = p.prototype.compare),
            (o.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = z(e),
                a = this.value,
                n = t.value;
              return t.isSmall
                ? a == n
                  ? 0
                  : a > n
                  ? 1
                  : -1
                : a < 0 !== t.sign
                ? a < 0
                  ? -1
                  : 1
                : a < 0
                ? 1
                : -1;
            }),
            (o.prototype.compareTo = o.prototype.compare),
            (m.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = this.value,
                a = z(e).value;
              return t === a ? 0 : t > a ? 1 : -1;
            }),
            (m.prototype.compareTo = m.prototype.compare),
            (p.prototype.equals = function (e) {
              return 0 === this.compare(e);
            }),
            (m.prototype.eq =
              m.prototype.equals =
              o.prototype.eq =
              o.prototype.equals =
              p.prototype.eq =
                p.prototype.equals),
            (p.prototype.notEquals = function (e) {
              return 0 !== this.compare(e);
            }),
            (m.prototype.neq =
              m.prototype.notEquals =
              o.prototype.neq =
              o.prototype.notEquals =
              p.prototype.neq =
                p.prototype.notEquals),
            (p.prototype.greater = function (e) {
              return this.compare(e) > 0;
            }),
            (m.prototype.gt =
              m.prototype.greater =
              o.prototype.gt =
              o.prototype.greater =
              p.prototype.gt =
                p.prototype.greater),
            (p.prototype.lesser = function (e) {
              return this.compare(e) < 0;
            }),
            (m.prototype.lt =
              m.prototype.lesser =
              o.prototype.lt =
              o.prototype.lesser =
              p.prototype.lt =
                p.prototype.lesser),
            (p.prototype.greaterOrEquals = function (e) {
              return this.compare(e) >= 0;
            }),
            (m.prototype.geq =
              m.prototype.greaterOrEquals =
              o.prototype.geq =
              o.prototype.greaterOrEquals =
              p.prototype.geq =
                p.prototype.greaterOrEquals),
            (p.prototype.lesserOrEquals = function (e) {
              return this.compare(e) <= 0;
            }),
            (m.prototype.leq =
              m.prototype.lesserOrEquals =
              o.prototype.leq =
              o.prototype.lesserOrEquals =
              p.prototype.leq =
                p.prototype.lesserOrEquals),
            (p.prototype.isEven = function () {
              return 0 == (1 & this.value[0]);
            }),
            (o.prototype.isEven = function () {
              return 0 == (1 & this.value);
            }),
            (m.prototype.isEven = function () {
              return (this.value & BigInt(1)) === BigInt(0);
            }),
            (p.prototype.isOdd = function () {
              return 1 == (1 & this.value[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 == (1 & this.value);
            }),
            (m.prototype.isOdd = function () {
              return (this.value & BigInt(1)) === BigInt(1);
            }),
            (p.prototype.isPositive = function () {
              return !this.sign;
            }),
            (o.prototype.isPositive = function () {
              return this.value > 0;
            }),
            (m.prototype.isPositive = o.prototype.isPositive),
            (p.prototype.isNegative = function () {
              return this.sign;
            }),
            (o.prototype.isNegative = function () {
              return this.value < 0;
            }),
            (m.prototype.isNegative = o.prototype.isNegative),
            (p.prototype.isUnit = function () {
              return !1;
            }),
            (o.prototype.isUnit = function () {
              return 1 === Math.abs(this.value);
            }),
            (m.prototype.isUnit = function () {
              return this.abs().value === BigInt(1);
            }),
            (p.prototype.isZero = function () {
              return !1;
            }),
            (o.prototype.isZero = function () {
              return 0 === this.value;
            }),
            (m.prototype.isZero = function () {
              return this.value === BigInt(0);
            }),
            (p.prototype.isDivisibleBy = function (e) {
              var t = z(e);
              return (
                !t.isZero() &&
                (!!t.isUnit() ||
                  (0 === t.compareAbs(2)
                    ? this.isEven()
                    : this.mod(t).isZero()))
              );
            }),
            (m.prototype.isDivisibleBy = o.prototype.isDivisibleBy =
              p.prototype.isDivisibleBy),
            (p.prototype.isPrime = function (e) {
              var t = R(this);
              if (void 0 !== t) return t;
              var a = this.abs(),
                n = a.bitLength();
              if (n <= 64)
                return E(a, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
              for (
                var i = Math.log(2) * n.toJSNumber(),
                  r = Math.ceil(!0 === e ? 2 * Math.pow(i, 2) : i),
                  p = [],
                  o = 0;
                o < r;
                o++
              )
                p.push(s(o + 2));
              return E(a, p);
            }),
            (m.prototype.isPrime = o.prototype.isPrime = p.prototype.isPrime),
            (p.prototype.isProbablePrime = function (e, t) {
              var a = R(this);
              if (void 0 !== a) return a;
              for (
                var n = this.abs(), i = void 0 === e ? 5 : e, r = [], p = 0;
                p < i;
                p++
              )
                r.push(s.randBetween(2, n.minus(2), t));
              return E(n, r);
            }),
            (m.prototype.isProbablePrime = o.prototype.isProbablePrime =
              p.prototype.isProbablePrime),
            (p.prototype.modInv = function (e) {
              for (
                var t, a, n, i = s.zero, r = s.one, p = z(e), o = this.abs();
                !o.isZero();

              )
                (t = p.divide(o)),
                  (a = i),
                  (n = p),
                  (i = r),
                  (p = o),
                  (r = a.subtract(t.multiply(r))),
                  (o = n.subtract(t.multiply(o)));
              if (!p.isUnit())
                throw new Error(
                  this.toString() + " and " + e.toString() + " are not co-prime"
                );
              return (
                -1 === i.compare(0) && (i = i.add(e)),
                this.isNegative() ? i.negate() : i
              );
            }),
            (m.prototype.modInv = o.prototype.modInv = p.prototype.modInv),
            (p.prototype.next = function () {
              var e = this.value;
              return this.sign ? b(e, 1, this.sign) : new p(_(e, 1), this.sign);
            }),
            (o.prototype.next = function () {
              var e = this.value;
              return e + 1 < a ? new o(e + 1) : new p(n, !1);
            }),
            (m.prototype.next = function () {
              return new m(this.value + BigInt(1));
            }),
            (p.prototype.prev = function () {
              var e = this.value;
              return this.sign ? new p(_(e, 1), !0) : b(e, 1, this.sign);
            }),
            (o.prototype.prev = function () {
              var e = this.value;
              return e - 1 > -a ? new o(e - 1) : new p(n, !0);
            }),
            (m.prototype.prev = function () {
              return new m(this.value - BigInt(1));
            });
          for (var T = [1]; 2 * T[T.length - 1] <= t; )
            T.push(2 * T[T.length - 1]);
          var V = T.length,
            D = T[V - 1];
          function U(e) {
            return Math.abs(e) <= t;
          }
          function B(e, t, a) {
            t = z(t);
            for (
              var n = e.isNegative(),
                i = t.isNegative(),
                r = n ? e.not() : e,
                p = i ? t.not() : t,
                o = 0,
                m = 0,
                d = null,
                y = null,
                c = [];
              !r.isZero() || !p.isZero();

            )
              (o = (d = A(r, D))[1].toJSNumber()),
                n && (o = D - 1 - o),
                (m = (y = A(p, D))[1].toJSNumber()),
                i && (m = D - 1 - m),
                (r = d[0]),
                (p = y[0]),
                c.push(a(o, m));
            for (
              var l = 0 !== a(n ? 1 : 0, i ? 1 : 0) ? s(-1) : s(0),
                g = c.length - 1;
              g >= 0;
              g -= 1
            )
              l = l.multiply(D).add(s(c[g]));
            return l;
          }
          (p.prototype.shiftLeft = function (e) {
            var t = z(e).toJSNumber();
            if (!U(t))
              throw new Error(String(t) + " is too large for shifting.");
            if (t < 0) return this.shiftRight(-t);
            var a = this;
            if (a.isZero()) return a;
            for (; t >= V; ) (a = a.multiply(D)), (t -= V - 1);
            return a.multiply(T[t]);
          }),
            (m.prototype.shiftLeft = o.prototype.shiftLeft =
              p.prototype.shiftLeft),
            (p.prototype.shiftRight = function (e) {
              var t,
                a = z(e).toJSNumber();
              if (!U(a))
                throw new Error(String(a) + " is too large for shifting.");
              if (a < 0) return this.shiftLeft(-a);
              for (var n = this; a >= V; ) {
                if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                (n = (t = A(n, D))[1].isNegative() ? t[0].prev() : t[0]),
                  (a -= V - 1);
              }
              return (t = A(n, T[a]))[1].isNegative() ? t[0].prev() : t[0];
            }),
            (m.prototype.shiftRight = o.prototype.shiftRight =
              p.prototype.shiftRight),
            (p.prototype.not = function () {
              return this.negate().prev();
            }),
            (m.prototype.not = o.prototype.not = p.prototype.not),
            (p.prototype.and = function (e) {
              return B(this, e, function (e, t) {
                return e & t;
              });
            }),
            (m.prototype.and = o.prototype.and = p.prototype.and),
            (p.prototype.or = function (e) {
              return B(this, e, function (e, t) {
                return e | t;
              });
            }),
            (m.prototype.or = o.prototype.or = p.prototype.or),
            (p.prototype.xor = function (e) {
              return B(this, e, function (e, t) {
                return e ^ t;
              });
            }),
            (m.prototype.xor = o.prototype.xor = p.prototype.xor);
          function x(e) {
            var a = e.value,
              n =
                "number" == typeof a
                  ? a | (1 << 30)
                  : "bigint" == typeof a
                  ? a | BigInt(1 << 30)
                  : (a[0] + a[1] * t) | 1073758208;
            return n & -n;
          }
          function F(e, t) {
            return (e = z(e)), (t = z(t)), e.greater(t) ? e : t;
          }
          function L(e, t) {
            return (e = z(e)), (t = z(t)), e.lesser(t) ? e : t;
          }
          function N(e, t) {
            if (((e = z(e).abs()), (t = z(t).abs()), e.equals(t))) return e;
            if (e.isZero()) return t;
            if (t.isZero()) return e;
            for (var a, n, s = r[1]; e.isEven() && t.isEven(); )
              (a = L(x(e), x(t))),
                (e = e.divide(a)),
                (t = t.divide(a)),
                (s = s.multiply(a));
            for (; e.isEven(); ) e = e.divide(x(e));
            do {
              for (; t.isEven(); ) t = t.divide(x(t));
              e.greater(t) && ((n = t), (t = e), (e = n)), (t = t.subtract(e));
            } while (!t.isZero());
            return s.isUnit() ? e : e.multiply(s);
          }
          (p.prototype.bitLength = function () {
            var e = this;
            return (
              e.compareTo(s(0)) < 0 && (e = e.negate().subtract(s(1))),
              0 === e.compareTo(s(0))
                ? s(0)
                : s(
                    (function e(t, a) {
                      if (a.compareTo(t) <= 0) {
                        var n = e(t, a.square(a)),
                          i = n.p,
                          r = n.e,
                          p = i.multiply(a);
                        return p.compareTo(t) <= 0
                          ? { p: p, e: 2 * r + 1 }
                          : { p: i, e: 2 * r };
                      }
                      return { p: s(1), e: 0 };
                    })(e, s(2)).e
                  ).add(s(1))
            );
          }),
            (m.prototype.bitLength = o.prototype.bitLength =
              p.prototype.bitLength);
          var O = function (e, t, a, n) {
            (a = a || "0123456789abcdefghijklmnopqrstuvwxyz"),
              (e = String(e)),
              n || ((e = e.toLowerCase()), (a = a.toLowerCase()));
            var s,
              i = e.length,
              r = Math.abs(t),
              p = {};
            for (s = 0; s < a.length; s++) p[a[s]] = s;
            for (s = 0; s < i; s++) {
              if ("-" !== (d = e[s]) && d in p && p[d] >= r) {
                if ("1" === d && 1 === r) continue;
                throw new Error(d + " is not a valid digit in base " + t + ".");
              }
            }
            t = z(t);
            var o = [],
              m = "-" === e[0];
            for (s = m ? 1 : 0; s < e.length; s++) {
              var d;
              if ((d = e[s]) in p) o.push(z(p[d]));
              else {
                if ("<" !== d) throw new Error(d + " is not a valid character");
                var y = s;
                do {
                  s++;
                } while (">" !== e[s] && s < e.length);
                o.push(z(e.slice(y + 1, s)));
              }
            }
            return q(o, t, m);
          };
          function q(e, t, a) {
            var n,
              s = r[0],
              i = r[1];
            for (n = e.length - 1; n >= 0; n--)
              (s = s.add(e[n].times(i))), (i = i.times(t));
            return a ? s.negate() : s;
          }
          function G(e, t) {
            if ((t = s(t)).isZero()) {
              if (e.isZero()) return { value: [0], isNegative: !1 };
              throw new Error("Cannot convert nonzero numbers to base 0.");
            }
            if (t.equals(-1)) {
              if (e.isZero()) return { value: [0], isNegative: !1 };
              if (e.isNegative())
                return {
                  value: [].concat.apply(
                    [],
                    Array.apply(null, Array(-e.toJSNumber())).map(
                      Array.prototype.valueOf,
                      [1, 0]
                    )
                  ),
                  isNegative: !1,
                };
              var a = Array.apply(null, Array(e.toJSNumber() - 1)).map(
                Array.prototype.valueOf,
                [0, 1]
              );
              return (
                a.unshift([1]),
                { value: [].concat.apply([], a), isNegative: !1 }
              );
            }
            var n = !1;
            if (
              (e.isNegative() && t.isPositive() && ((n = !0), (e = e.abs())),
              t.isUnit())
            )
              return e.isZero()
                ? { value: [0], isNegative: !1 }
                : {
                    value: Array.apply(null, Array(e.toJSNumber())).map(
                      Number.prototype.valueOf,
                      1
                    ),
                    isNegative: n,
                  };
            for (
              var i, r = [], p = e;
              p.isNegative() || p.compareAbs(t) >= 0;

            ) {
              (i = p.divmod(t)), (p = i.quotient);
              var o = i.remainder;
              o.isNegative() && ((o = t.minus(o).abs()), (p = p.next())),
                r.push(o.toJSNumber());
            }
            return (
              r.push(p.toJSNumber()), { value: r.reverse(), isNegative: n }
            );
          }
          function K(e, t, a) {
            var n = G(e, t);
            return (
              (n.isNegative ? "-" : "") +
              n.value
                .map(function (e) {
                  return (function (e, t) {
                    return e <
                      (t = t || "0123456789abcdefghijklmnopqrstuvwxyz").length
                      ? t[e]
                      : "<" + e + ">";
                  })(e, a);
                })
                .join("")
            );
          }
          function j(e) {
            if (d(+e)) {
              var t = +e;
              if (t === u(t)) return i ? new m(BigInt(t)) : new o(t);
              throw new Error("Invalid integer: " + e);
            }
            var a = "-" === e[0];
            a && (e = e.slice(1));
            var n = e.split(/e/i);
            if (n.length > 2)
              throw new Error("Invalid integer: " + n.join("e"));
            if (2 === n.length) {
              var s = n[1];
              if (
                ("+" === s[0] && (s = s.slice(1)), (s = +s) !== u(s) || !d(s))
              )
                throw new Error(
                  "Invalid integer: " + s + " is not a valid exponent."
                );
              var r = n[0],
                y = r.indexOf(".");
              if (
                (y >= 0 &&
                  ((s -= r.length - y - 1),
                  (r = r.slice(0, y) + r.slice(y + 1))),
                s < 0)
              )
                throw new Error(
                  "Cannot include negative exponent part for integers"
                );
              e = r += new Array(s + 1).join("0");
            }
            if (!/^([0-9][0-9]*)$/.test(e))
              throw new Error("Invalid integer: " + e);
            if (i) return new m(BigInt(a ? "-" + e : e));
            for (var c = [], g = e.length, h = g - 7; g > 0; )
              c.push(+e.slice(h, g)), (h -= 7) < 0 && (h = 0), (g -= 7);
            return l(c), new p(c, a);
          }
          function z(e) {
            return "number" == typeof e
              ? (function (e) {
                  if (i) return new m(BigInt(e));
                  if (d(e)) {
                    if (e !== u(e)) throw new Error(e + " is not an integer.");
                    return new o(e);
                  }
                  return j(e.toString());
                })(e)
              : "string" == typeof e
              ? j(e)
              : "bigint" == typeof e
              ? new m(e)
              : e;
          }
          (p.prototype.toArray = function (e) {
            return G(this, e);
          }),
            (o.prototype.toArray = function (e) {
              return G(this, e);
            }),
            (m.prototype.toArray = function (e) {
              return G(this, e);
            }),
            (p.prototype.toString = function (e, t) {
              if ((void 0 === e && (e = 10), 10 !== e)) return K(this, e, t);
              for (
                var a, n = this.value, s = n.length, i = String(n[--s]);
                --s >= 0;

              )
                (a = String(n[s])), (i += "0000000".slice(a.length) + a);
              return (this.sign ? "-" : "") + i;
            }),
            (o.prototype.toString = function (e, t) {
              return (
                void 0 === e && (e = 10),
                10 != e ? K(this, e, t) : String(this.value)
              );
            }),
            (m.prototype.toString = o.prototype.toString),
            (m.prototype.toJSON =
              p.prototype.toJSON =
              o.prototype.toJSON =
                function () {
                  return this.toString();
                }),
            (p.prototype.valueOf = function () {
              return parseInt(this.toString(), 10);
            }),
            (p.prototype.toJSNumber = p.prototype.valueOf),
            (o.prototype.valueOf = function () {
              return this.value;
            }),
            (o.prototype.toJSNumber = o.prototype.valueOf),
            (m.prototype.valueOf = m.prototype.toJSNumber =
              function () {
                return parseInt(this.toString(), 10);
              });
          for (var H = 0; H < 1e3; H++) (r[H] = z(H)), H > 0 && (r[-H] = z(-H));
          return (
            (r.one = r[1]),
            (r.zero = r[0]),
            (r.minusOne = r[-1]),
            (r.max = F),
            (r.min = L),
            (r.gcd = N),
            (r.lcm = function (e, t) {
              return (
                (e = z(e).abs()),
                (t = z(t).abs()),
                e.divide(N(e, t)).multiply(t)
              );
            }),
            (r.isInstance = function (e) {
              return e instanceof p || e instanceof o || e instanceof m;
            }),
            (r.randBetween = function (e, a, n) {
              (e = z(e)), (a = z(a));
              var s = n || Math.random,
                i = L(e, a),
                p = F(e, a).subtract(i).add(1);
              if (p.isSmall) return i.add(Math.floor(s() * p));
              for (
                var o = G(p, t).value, m = [], d = !0, y = 0;
                y < o.length;
                y++
              ) {
                var c = d ? o[y] + (y + 1 < o.length ? o[y + 1] / t : 0) : t,
                  l = u(s() * c);
                m.push(l), l < o[y] && (d = !1);
              }
              return i.add(r.fromArray(m, t, !1));
            }),
            (r.fromArray = function (e, t, a) {
              return q(e.map(z), z(t || 10), a);
            }),
            r
          );
        })();
      e.hasOwnProperty("exports") && (e.exports = s),
        void 0 ===
          (n = function () {
            return s;
          }.call(t, a, t, e)) || (e.exports = n);
    }).call(this, a(2)(e));
  },
  function (e, t, a) {
    /*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    !(function (e) {
      "use strict";
      var t = (e, t, a, n) => {
        let s = (65535 & e) | 0,
          i = ((e >>> 16) & 65535) | 0,
          r = 0;
        for (; 0 !== a; ) {
          (r = a > 2e3 ? 2e3 : a), (a -= r);
          do {
            (s = (s + t[n++]) | 0), (i = (i + s) | 0);
          } while (--r);
          (s %= 65521), (i %= 65521);
        }
        return s | (i << 16) | 0;
      };
      const a = new Uint32Array(
        (() => {
          let e,
            t = [];
          for (var a = 0; a < 256; a++) {
            e = a;
            for (var n = 0; n < 8; n++)
              e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
            t[a] = e;
          }
          return t;
        })()
      );
      var n = (e, t, n, s) => {
          const i = a,
            r = s + n;
          e ^= -1;
          for (let a = s; a < r; a++) e = (e >>> 8) ^ i[255 & (e ^ t[a])];
          return -1 ^ e;
        },
        s = function (e, t) {
          let a,
            n,
            s,
            i,
            r,
            p,
            o,
            m,
            d,
            y,
            c,
            l,
            g,
            u,
            h,
            f,
            _,
            v,
            b,
            w,
            P,
            S,
            k,
            I;
          const C = e.state;
          (a = e.next_in),
            (k = e.input),
            (n = a + (e.avail_in - 5)),
            (s = e.next_out),
            (I = e.output),
            (i = s - (t - e.avail_out)),
            (r = s + (e.avail_out - 257)),
            (p = C.dmax),
            (o = C.wsize),
            (m = C.whave),
            (d = C.wnext),
            (y = C.window),
            (c = C.hold),
            (l = C.bits),
            (g = C.lencode),
            (u = C.distcode),
            (h = (1 << C.lenbits) - 1),
            (f = (1 << C.distbits) - 1);
          e: do {
            l < 15 &&
              ((c += k[a++] << l), (l += 8), (c += k[a++] << l), (l += 8)),
              (_ = g[c & h]);
            t: for (;;) {
              if (
                ((v = _ >>> 24),
                (c >>>= v),
                (l -= v),
                (v = (_ >>> 16) & 255),
                0 === v)
              )
                I[s++] = 65535 & _;
              else {
                if (!(16 & v)) {
                  if (0 == (64 & v)) {
                    _ = g[(65535 & _) + (c & ((1 << v) - 1))];
                    continue t;
                  }
                  if (32 & v) {
                    C.mode = 12;
                    break e;
                  }
                  (e.msg = "invalid literal/length code"), (C.mode = 30);
                  break e;
                }
                (b = 65535 & _),
                  (v &= 15),
                  v &&
                    (l < v && ((c += k[a++] << l), (l += 8)),
                    (b += c & ((1 << v) - 1)),
                    (c >>>= v),
                    (l -= v)),
                  l < 15 &&
                    ((c += k[a++] << l),
                    (l += 8),
                    (c += k[a++] << l),
                    (l += 8)),
                  (_ = u[c & f]);
                a: for (;;) {
                  if (
                    ((v = _ >>> 24),
                    (c >>>= v),
                    (l -= v),
                    (v = (_ >>> 16) & 255),
                    !(16 & v))
                  ) {
                    if (0 == (64 & v)) {
                      _ = u[(65535 & _) + (c & ((1 << v) - 1))];
                      continue a;
                    }
                    (e.msg = "invalid distance code"), (C.mode = 30);
                    break e;
                  }
                  if (
                    ((w = 65535 & _),
                    (v &= 15),
                    l < v &&
                      ((c += k[a++] << l),
                      (l += 8),
                      l < v && ((c += k[a++] << l), (l += 8))),
                    (w += c & ((1 << v) - 1)),
                    w > p)
                  ) {
                    (e.msg = "invalid distance too far back"), (C.mode = 30);
                    break e;
                  }
                  if (((c >>>= v), (l -= v), (v = s - i), w > v)) {
                    if (((v = w - v), v > m && C.sane)) {
                      (e.msg = "invalid distance too far back"), (C.mode = 30);
                      break e;
                    }
                    if (((P = 0), (S = y), 0 === d)) {
                      if (((P += o - v), v < b)) {
                        b -= v;
                        do {
                          I[s++] = y[P++];
                        } while (--v);
                        (P = s - w), (S = I);
                      }
                    } else if (d < v) {
                      if (((P += o + d - v), (v -= d), v < b)) {
                        b -= v;
                        do {
                          I[s++] = y[P++];
                        } while (--v);
                        if (((P = 0), d < b)) {
                          (v = d), (b -= v);
                          do {
                            I[s++] = y[P++];
                          } while (--v);
                          (P = s - w), (S = I);
                        }
                      }
                    } else if (((P += d - v), v < b)) {
                      b -= v;
                      do {
                        I[s++] = y[P++];
                      } while (--v);
                      (P = s - w), (S = I);
                    }
                    for (; b > 2; )
                      (I[s++] = S[P++]),
                        (I[s++] = S[P++]),
                        (I[s++] = S[P++]),
                        (b -= 3);
                    b && ((I[s++] = S[P++]), b > 1 && (I[s++] = S[P++]));
                  } else {
                    P = s - w;
                    do {
                      (I[s++] = I[P++]),
                        (I[s++] = I[P++]),
                        (I[s++] = I[P++]),
                        (b -= 3);
                    } while (b > 2);
                    b && ((I[s++] = I[P++]), b > 1 && (I[s++] = I[P++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (a < n && s < r);
          (b = l >> 3),
            (a -= b),
            (l -= b << 3),
            (c &= (1 << l) - 1),
            (e.next_in = a),
            (e.next_out = s),
            (e.avail_in = a < n ? n - a + 5 : 5 - (a - n)),
            (e.avail_out = s < r ? r - s + 257 : 257 - (s - r)),
            (C.hold = c),
            (C.bits = l);
        };
      const i = new Uint16Array([
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ]),
        r = new Uint8Array([
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ]),
        p = new Uint16Array([
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ]),
        o = new Uint8Array([
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ]);
      var m = (e, t, a, n, s, m, d, y) => {
          const c = y.bits;
          let l,
            g,
            u,
            h,
            f,
            _,
            v = 0,
            b = 0,
            w = 0,
            P = 0,
            S = 0,
            k = 0,
            I = 0,
            C = 0,
            A = 0,
            M = 0,
            R = null,
            E = 0;
          const T = new Uint16Array(16),
            V = new Uint16Array(16);
          let D,
            U,
            B,
            x = null,
            F = 0;
          for (v = 0; v <= 15; v++) T[v] = 0;
          for (b = 0; b < n; b++) T[t[a + b]]++;
          for (S = c, P = 15; P >= 1 && 0 === T[P]; P--);
          if ((S > P && (S = P), 0 === P))
            return (s[m++] = 20971520), (s[m++] = 20971520), (y.bits = 1), 0;
          for (w = 1; w < P && 0 === T[w]; w++);
          for (S < w && (S = w), C = 1, v = 1; v <= 15; v++)
            if (((C <<= 1), (C -= T[v]), C < 0)) return -1;
          if (C > 0 && (0 === e || 1 !== P)) return -1;
          for (V[1] = 0, v = 1; v < 15; v++) V[v + 1] = V[v] + T[v];
          for (b = 0; b < n; b++) 0 !== t[a + b] && (d[V[t[a + b]]++] = b);
          if (
            (0 === e
              ? ((R = x = d), (_ = 19))
              : 1 === e
              ? ((R = i), (E -= 257), (x = r), (F -= 257), (_ = 256))
              : ((R = p), (x = o), (_ = -1)),
            (M = 0),
            (b = 0),
            (v = w),
            (f = m),
            (k = S),
            (I = 0),
            (u = -1),
            (A = 1 << S),
            (h = A - 1),
            (1 === e && A > 852) || (2 === e && A > 592))
          )
            return 1;
          for (;;) {
            (D = v - I),
              d[b] < _
                ? ((U = 0), (B = d[b]))
                : d[b] > _
                ? ((U = x[F + d[b]]), (B = R[E + d[b]]))
                : ((U = 96), (B = 0)),
              (l = 1 << (v - I)),
              (g = 1 << k),
              (w = g);
            do {
              (g -= l), (s[f + (M >> I) + g] = (D << 24) | (U << 16) | B | 0);
            } while (0 !== g);
            for (l = 1 << (v - 1); M & l; ) l >>= 1;
            if (
              (0 !== l ? ((M &= l - 1), (M += l)) : (M = 0), b++, 0 == --T[v])
            ) {
              if (v === P) break;
              v = t[a + d[b]];
            }
            if (v > S && (M & h) !== u) {
              for (
                0 === I && (I = S), f += w, k = v - I, C = 1 << k;
                k + I < P && ((C -= T[k + I]), !(C <= 0));

              )
                k++, (C <<= 1);
              if (((A += 1 << k), (1 === e && A > 852) || (2 === e && A > 592)))
                return 1;
              (u = M & h), (s[u] = (S << 24) | (k << 16) | (f - m) | 0);
            }
          }
          return (
            0 !== M && (s[f + M] = ((v - I) << 24) | (64 << 16) | 0),
            (y.bits = S),
            0
          );
        },
        d = {
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
          Z_FINISH: y,
          Z_BLOCK: c,
          Z_TREES: l,
          Z_OK: g,
          Z_STREAM_END: u,
          Z_NEED_DICT: h,
          Z_STREAM_ERROR: f,
          Z_DATA_ERROR: _,
          Z_MEM_ERROR: v,
          Z_BUF_ERROR: b,
          Z_DEFLATED: w,
        } = d,
        P = 12,
        S = 30,
        k = (e) =>
          ((e >>> 24) & 255) +
          ((e >>> 8) & 65280) +
          ((65280 & e) << 8) +
          ((255 & e) << 24);
      function I() {
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
      const C = (e) => {
          if (!e || !e.state) return f;
          const t = e.state;
          return (
            (e.total_in = e.total_out = t.total = 0),
            (e.msg = ""),
            t.wrap && (e.adler = 1 & t.wrap),
            (t.mode = 1),
            (t.last = 0),
            (t.havedict = 0),
            (t.dmax = 32768),
            (t.head = null),
            (t.hold = 0),
            (t.bits = 0),
            (t.lencode = t.lendyn = new Int32Array(852)),
            (t.distcode = t.distdyn = new Int32Array(592)),
            (t.sane = 1),
            (t.back = -1),
            g
          );
        },
        A = (e) => {
          if (!e || !e.state) return f;
          const t = e.state;
          return (t.wsize = 0), (t.whave = 0), (t.wnext = 0), C(e);
        },
        M = (e, t) => {
          let a;
          if (!e || !e.state) return f;
          const n = e.state;
          return (
            t < 0
              ? ((a = 0), (t = -t))
              : ((a = 1 + (t >> 4)), t < 48 && (t &= 15)),
            t && (t < 8 || t > 15)
              ? f
              : (null !== n.window && n.wbits !== t && (n.window = null),
                (n.wrap = a),
                (n.wbits = t),
                A(e))
          );
        },
        R = (e, t) => {
          if (!e) return f;
          const a = new I();
          (e.state = a), (a.window = null);
          const n = M(e, t);
          return n !== g && (e.state = null), n;
        };
      let E,
        T,
        V = !0;
      const D = (e) => {
          if (V) {
            (E = new Int32Array(512)), (T = new Int32Array(32));
            let t = 0;
            for (; t < 144; ) e.lens[t++] = 8;
            for (; t < 256; ) e.lens[t++] = 9;
            for (; t < 280; ) e.lens[t++] = 7;
            for (; t < 288; ) e.lens[t++] = 8;
            for (
              m(1, e.lens, 0, 288, E, 0, e.work, { bits: 9 }), t = 0;
              t < 32;

            )
              e.lens[t++] = 5;
            m(2, e.lens, 0, 32, T, 0, e.work, { bits: 5 }), (V = !1);
          }
          (e.lencode = E), (e.lenbits = 9), (e.distcode = T), (e.distbits = 5);
        },
        U = (e, t, a, n) => {
          let s;
          const i = e.state;
          return (
            null === i.window &&
              ((i.wsize = 1 << i.wbits),
              (i.wnext = 0),
              (i.whave = 0),
              (i.window = new Uint8Array(i.wsize))),
            n >= i.wsize
              ? (i.window.set(t.subarray(a - i.wsize, a), 0),
                (i.wnext = 0),
                (i.whave = i.wsize))
              : ((s = i.wsize - i.wnext),
                s > n && (s = n),
                i.window.set(t.subarray(a - n, a - n + s), i.wnext),
                (n -= s)
                  ? (i.window.set(t.subarray(a - n, a), 0),
                    (i.wnext = n),
                    (i.whave = i.wsize))
                  : ((i.wnext += s),
                    i.wnext === i.wsize && (i.wnext = 0),
                    i.whave < i.wsize && (i.whave += s))),
            0
          );
        };
      var B = A,
        x = R,
        F = (e, a) => {
          let i,
            r,
            p,
            o,
            d,
            I,
            C,
            A,
            M,
            R,
            E,
            T,
            V,
            B,
            x,
            F,
            L,
            N,
            O,
            q,
            G,
            K,
            j = 0;
          const z = new Uint8Array(4);
          let H, W;
          const J = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]);
          if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
            return f;
          (i = e.state),
            i.mode === P && (i.mode = 13),
            (d = e.next_out),
            (p = e.output),
            (C = e.avail_out),
            (o = e.next_in),
            (r = e.input),
            (I = e.avail_in),
            (A = i.hold),
            (M = i.bits),
            (R = I),
            (E = C),
            (K = g);
          e: for (;;)
            switch (i.mode) {
              case 1:
                if (0 === i.wrap) {
                  i.mode = 13;
                  break;
                }
                for (; M < 16; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if (2 & i.wrap && 35615 === A) {
                  (i.check = 0),
                    (z[0] = 255 & A),
                    (z[1] = (A >>> 8) & 255),
                    (i.check = n(i.check, z, 2, 0)),
                    (A = 0),
                    (M = 0),
                    (i.mode = 2);
                  break;
                }
                if (
                  ((i.flags = 0),
                  i.head && (i.head.done = !1),
                  !(1 & i.wrap) || (((255 & A) << 8) + (A >> 8)) % 31)
                ) {
                  (e.msg = "incorrect header check"), (i.mode = S);
                  break;
                }
                if ((15 & A) !== w) {
                  (e.msg = "unknown compression method"), (i.mode = S);
                  break;
                }
                if (((A >>>= 4), (M -= 4), (G = 8 + (15 & A)), 0 === i.wbits))
                  i.wbits = G;
                else if (G > i.wbits) {
                  (e.msg = "invalid window size"), (i.mode = S);
                  break;
                }
                (i.dmax = 1 << i.wbits),
                  (e.adler = i.check = 1),
                  (i.mode = 512 & A ? 10 : P),
                  (A = 0),
                  (M = 0);
                break;
              case 2:
                for (; M < 16; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if (((i.flags = A), (255 & i.flags) !== w)) {
                  (e.msg = "unknown compression method"), (i.mode = S);
                  break;
                }
                if (57344 & i.flags) {
                  (e.msg = "unknown header flags set"), (i.mode = S);
                  break;
                }
                i.head && (i.head.text = (A >> 8) & 1),
                  512 & i.flags &&
                    ((z[0] = 255 & A),
                    (z[1] = (A >>> 8) & 255),
                    (i.check = n(i.check, z, 2, 0))),
                  (A = 0),
                  (M = 0),
                  (i.mode = 3);
              case 3:
                for (; M < 32; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                i.head && (i.head.time = A),
                  512 & i.flags &&
                    ((z[0] = 255 & A),
                    (z[1] = (A >>> 8) & 255),
                    (z[2] = (A >>> 16) & 255),
                    (z[3] = (A >>> 24) & 255),
                    (i.check = n(i.check, z, 4, 0))),
                  (A = 0),
                  (M = 0),
                  (i.mode = 4);
              case 4:
                for (; M < 16; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                i.head && ((i.head.xflags = 255 & A), (i.head.os = A >> 8)),
                  512 & i.flags &&
                    ((z[0] = 255 & A),
                    (z[1] = (A >>> 8) & 255),
                    (i.check = n(i.check, z, 2, 0))),
                  (A = 0),
                  (M = 0),
                  (i.mode = 5);
              case 5:
                if (1024 & i.flags) {
                  for (; M < 16; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (i.length = A),
                    i.head && (i.head.extra_len = A),
                    512 & i.flags &&
                      ((z[0] = 255 & A),
                      (z[1] = (A >>> 8) & 255),
                      (i.check = n(i.check, z, 2, 0))),
                    (A = 0),
                    (M = 0);
                } else i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (
                  1024 & i.flags &&
                  ((T = i.length),
                  T > I && (T = I),
                  T &&
                    (i.head &&
                      ((G = i.head.extra_len - i.length),
                      i.head.extra ||
                        (i.head.extra = new Uint8Array(i.head.extra_len)),
                      i.head.extra.set(r.subarray(o, o + T), G)),
                    512 & i.flags && (i.check = n(i.check, r, T, o)),
                    (I -= T),
                    (o += T),
                    (i.length -= T)),
                  i.length)
                )
                  break e;
                (i.length = 0), (i.mode = 7);
              case 7:
                if (2048 & i.flags) {
                  if (0 === I) break e;
                  T = 0;
                  do {
                    (G = r[o + T++]),
                      i.head &&
                        G &&
                        i.length < 65536 &&
                        (i.head.name += String.fromCharCode(G));
                  } while (G && T < I);
                  if (
                    (512 & i.flags && (i.check = n(i.check, r, T, o)),
                    (I -= T),
                    (o += T),
                    G)
                  )
                    break e;
                } else i.head && (i.head.name = null);
                (i.length = 0), (i.mode = 8);
              case 8:
                if (4096 & i.flags) {
                  if (0 === I) break e;
                  T = 0;
                  do {
                    (G = r[o + T++]),
                      i.head &&
                        G &&
                        i.length < 65536 &&
                        (i.head.comment += String.fromCharCode(G));
                  } while (G && T < I);
                  if (
                    (512 & i.flags && (i.check = n(i.check, r, T, o)),
                    (I -= T),
                    (o += T),
                    G)
                  )
                    break e;
                } else i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; M < 16; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  if (A !== (65535 & i.check)) {
                    (e.msg = "header crc mismatch"), (i.mode = S);
                    break;
                  }
                  (A = 0), (M = 0);
                }
                i.head &&
                  ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                  (e.adler = i.check = 0),
                  (i.mode = P);
                break;
              case 10:
                for (; M < 32; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                (e.adler = i.check = k(A)), (A = 0), (M = 0), (i.mode = 11);
              case 11:
                if (0 === i.havedict)
                  return (
                    (e.next_out = d),
                    (e.avail_out = C),
                    (e.next_in = o),
                    (e.avail_in = I),
                    (i.hold = A),
                    (i.bits = M),
                    h
                  );
                (e.adler = i.check = 1), (i.mode = P);
              case P:
                if (a === c || a === l) break e;
              case 13:
                if (i.last) {
                  (A >>>= 7 & M), (M -= 7 & M), (i.mode = 27);
                  break;
                }
                for (; M < 3; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                switch (((i.last = 1 & A), (A >>>= 1), (M -= 1), 3 & A)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if ((D(i), (i.mode = 20), a === l)) {
                      (A >>>= 2), (M -= 2);
                      break e;
                    }
                    break;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    (e.msg = "invalid block type"), (i.mode = S);
                }
                (A >>>= 2), (M -= 2);
                break;
              case 14:
                for (A >>>= 7 & M, M -= 7 & M; M < 32; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if ((65535 & A) != ((A >>> 16) ^ 65535)) {
                  (e.msg = "invalid stored block lengths"), (i.mode = S);
                  break;
                }
                if (
                  ((i.length = 65535 & A),
                  (A = 0),
                  (M = 0),
                  (i.mode = 15),
                  a === l)
                )
                  break e;
              case 15:
                i.mode = 16;
              case 16:
                if (((T = i.length), T)) {
                  if ((T > I && (T = I), T > C && (T = C), 0 === T)) break e;
                  p.set(r.subarray(o, o + T), d),
                    (I -= T),
                    (o += T),
                    (C -= T),
                    (d += T),
                    (i.length -= T);
                  break;
                }
                i.mode = P;
                break;
              case 17:
                for (; M < 14; ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if (
                  ((i.nlen = 257 + (31 & A)),
                  (A >>>= 5),
                  (M -= 5),
                  (i.ndist = 1 + (31 & A)),
                  (A >>>= 5),
                  (M -= 5),
                  (i.ncode = 4 + (15 & A)),
                  (A >>>= 4),
                  (M -= 4),
                  i.nlen > 286 || i.ndist > 30)
                ) {
                  (e.msg = "too many length or distance symbols"), (i.mode = S);
                  break;
                }
                (i.have = 0), (i.mode = 18);
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; M < 3; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (i.lens[J[i.have++]] = 7 & A), (A >>>= 3), (M -= 3);
                }
                for (; i.have < 19; ) i.lens[J[i.have++]] = 0;
                if (
                  ((i.lencode = i.lendyn),
                  (i.lenbits = 7),
                  (H = { bits: i.lenbits }),
                  (K = m(0, i.lens, 0, 19, i.lencode, 0, i.work, H)),
                  (i.lenbits = H.bits),
                  K)
                ) {
                  (e.msg = "invalid code lengths set"), (i.mode = S);
                  break;
                }
                (i.have = 0), (i.mode = 19);
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (
                    ;
                    (j = i.lencode[A & ((1 << i.lenbits) - 1)]),
                      (x = j >>> 24),
                      (F = (j >>> 16) & 255),
                      (L = 65535 & j),
                      !(x <= M);

                  ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  if (L < 16) (A >>>= x), (M -= x), (i.lens[i.have++] = L);
                  else {
                    if (16 === L) {
                      for (W = x + 2; M < W; ) {
                        if (0 === I) break e;
                        I--, (A += r[o++] << M), (M += 8);
                      }
                      if (((A >>>= x), (M -= x), 0 === i.have)) {
                        (e.msg = "invalid bit length repeat"), (i.mode = S);
                        break;
                      }
                      (G = i.lens[i.have - 1]),
                        (T = 3 + (3 & A)),
                        (A >>>= 2),
                        (M -= 2);
                    } else if (17 === L) {
                      for (W = x + 3; M < W; ) {
                        if (0 === I) break e;
                        I--, (A += r[o++] << M), (M += 8);
                      }
                      (A >>>= x),
                        (M -= x),
                        (G = 0),
                        (T = 3 + (7 & A)),
                        (A >>>= 3),
                        (M -= 3);
                    } else {
                      for (W = x + 7; M < W; ) {
                        if (0 === I) break e;
                        I--, (A += r[o++] << M), (M += 8);
                      }
                      (A >>>= x),
                        (M -= x),
                        (G = 0),
                        (T = 11 + (127 & A)),
                        (A >>>= 7),
                        (M -= 7);
                    }
                    if (i.have + T > i.nlen + i.ndist) {
                      (e.msg = "invalid bit length repeat"), (i.mode = S);
                      break;
                    }
                    for (; T--; ) i.lens[i.have++] = G;
                  }
                }
                if (i.mode === S) break;
                if (0 === i.lens[256]) {
                  (e.msg = "invalid code -- missing end-of-block"),
                    (i.mode = S);
                  break;
                }
                if (
                  ((i.lenbits = 9),
                  (H = { bits: i.lenbits }),
                  (K = m(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, H)),
                  (i.lenbits = H.bits),
                  K)
                ) {
                  (e.msg = "invalid literal/lengths set"), (i.mode = S);
                  break;
                }
                if (
                  ((i.distbits = 6),
                  (i.distcode = i.distdyn),
                  (H = { bits: i.distbits }),
                  (K = m(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, H)),
                  (i.distbits = H.bits),
                  K)
                ) {
                  (e.msg = "invalid distances set"), (i.mode = S);
                  break;
                }
                if (((i.mode = 20), a === l)) break e;
              case 20:
                i.mode = 21;
              case 21:
                if (I >= 6 && C >= 258) {
                  (e.next_out = d),
                    (e.avail_out = C),
                    (e.next_in = o),
                    (e.avail_in = I),
                    (i.hold = A),
                    (i.bits = M),
                    s(e, E),
                    (d = e.next_out),
                    (p = e.output),
                    (C = e.avail_out),
                    (o = e.next_in),
                    (r = e.input),
                    (I = e.avail_in),
                    (A = i.hold),
                    (M = i.bits),
                    i.mode === P && (i.back = -1);
                  break;
                }
                for (
                  i.back = 0;
                  (j = i.lencode[A & ((1 << i.lenbits) - 1)]),
                    (x = j >>> 24),
                    (F = (j >>> 16) & 255),
                    (L = 65535 & j),
                    !(x <= M);

                ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if (F && 0 == (240 & F)) {
                  for (
                    N = x, O = F, q = L;
                    (j = i.lencode[q + ((A & ((1 << (N + O)) - 1)) >> N)]),
                      (x = j >>> 24),
                      (F = (j >>> 16) & 255),
                      (L = 65535 & j),
                      !(N + x <= M);

                  ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (A >>>= N), (M -= N), (i.back += N);
                }
                if (
                  ((A >>>= x), (M -= x), (i.back += x), (i.length = L), 0 === F)
                ) {
                  i.mode = 26;
                  break;
                }
                if (32 & F) {
                  (i.back = -1), (i.mode = P);
                  break;
                }
                if (64 & F) {
                  (e.msg = "invalid literal/length code"), (i.mode = S);
                  break;
                }
                (i.extra = 15 & F), (i.mode = 22);
              case 22:
                if (i.extra) {
                  for (W = i.extra; M < W; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (i.length += A & ((1 << i.extra) - 1)),
                    (A >>>= i.extra),
                    (M -= i.extra),
                    (i.back += i.extra);
                }
                (i.was = i.length), (i.mode = 23);
              case 23:
                for (
                  ;
                  (j = i.distcode[A & ((1 << i.distbits) - 1)]),
                    (x = j >>> 24),
                    (F = (j >>> 16) & 255),
                    (L = 65535 & j),
                    !(x <= M);

                ) {
                  if (0 === I) break e;
                  I--, (A += r[o++] << M), (M += 8);
                }
                if (0 == (240 & F)) {
                  for (
                    N = x, O = F, q = L;
                    (j = i.distcode[q + ((A & ((1 << (N + O)) - 1)) >> N)]),
                      (x = j >>> 24),
                      (F = (j >>> 16) & 255),
                      (L = 65535 & j),
                      !(N + x <= M);

                  ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (A >>>= N), (M -= N), (i.back += N);
                }
                if (((A >>>= x), (M -= x), (i.back += x), 64 & F)) {
                  (e.msg = "invalid distance code"), (i.mode = S);
                  break;
                }
                (i.offset = L), (i.extra = 15 & F), (i.mode = 24);
              case 24:
                if (i.extra) {
                  for (W = i.extra; M < W; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  (i.offset += A & ((1 << i.extra) - 1)),
                    (A >>>= i.extra),
                    (M -= i.extra),
                    (i.back += i.extra);
                }
                if (i.offset > i.dmax) {
                  (e.msg = "invalid distance too far back"), (i.mode = S);
                  break;
                }
                i.mode = 25;
              case 25:
                if (0 === C) break e;
                if (((T = E - C), i.offset > T)) {
                  if (((T = i.offset - T), T > i.whave && i.sane)) {
                    (e.msg = "invalid distance too far back"), (i.mode = S);
                    break;
                  }
                  T > i.wnext
                    ? ((T -= i.wnext), (V = i.wsize - T))
                    : (V = i.wnext - T),
                    T > i.length && (T = i.length),
                    (B = i.window);
                } else (B = p), (V = d - i.offset), (T = i.length);
                T > C && (T = C), (C -= T), (i.length -= T);
                do {
                  p[d++] = B[V++];
                } while (--T);
                0 === i.length && (i.mode = 21);
                break;
              case 26:
                if (0 === C) break e;
                (p[d++] = i.length), C--, (i.mode = 21);
                break;
              case 27:
                if (i.wrap) {
                  for (; M < 32; ) {
                    if (0 === I) break e;
                    I--, (A |= r[o++] << M), (M += 8);
                  }
                  if (
                    ((E -= C),
                    (e.total_out += E),
                    (i.total += E),
                    E &&
                      (e.adler = i.check =
                        i.flags
                          ? n(i.check, p, E, d - E)
                          : t(i.check, p, E, d - E)),
                    (E = C),
                    (i.flags ? A : k(A)) !== i.check)
                  ) {
                    (e.msg = "incorrect data check"), (i.mode = S);
                    break;
                  }
                  (A = 0), (M = 0);
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; M < 32; ) {
                    if (0 === I) break e;
                    I--, (A += r[o++] << M), (M += 8);
                  }
                  if (A !== (4294967295 & i.total)) {
                    (e.msg = "incorrect length check"), (i.mode = S);
                    break;
                  }
                  (A = 0), (M = 0);
                }
                i.mode = 29;
              case 29:
                K = u;
                break e;
              case S:
                K = _;
                break e;
              case 31:
                return v;
              case 32:
              default:
                return f;
            }
          return (
            (e.next_out = d),
            (e.avail_out = C),
            (e.next_in = o),
            (e.avail_in = I),
            (i.hold = A),
            (i.bits = M),
            (i.wsize ||
              (E !== e.avail_out && i.mode < S && (i.mode < 27 || a !== y))) &&
              U(e, e.output, e.next_out, E - e.avail_out),
            (R -= e.avail_in),
            (E -= e.avail_out),
            (e.total_in += R),
            (e.total_out += E),
            (i.total += E),
            i.wrap &&
              E &&
              (e.adler = i.check =
                i.flags
                  ? n(i.check, p, E, e.next_out - E)
                  : t(i.check, p, E, e.next_out - E)),
            (e.data_type =
              i.bits +
              (i.last ? 64 : 0) +
              (i.mode === P ? 128 : 0) +
              (20 === i.mode || 15 === i.mode ? 256 : 0)),
            ((0 === R && 0 === E) || a === y) && K === g && (K = b),
            K
          );
        },
        L = (e) => {
          if (!e || !e.state) return f;
          let t = e.state;
          return t.window && (t.window = null), (e.state = null), g;
        },
        N = (e, t) => {
          if (!e || !e.state) return f;
          const a = e.state;
          return 0 == (2 & a.wrap) ? f : ((a.head = t), (t.done = !1), g);
        },
        O = (e, a) => {
          const n = a.length;
          let s, i, r;
          return e && e.state
            ? ((s = e.state),
              0 !== s.wrap && 11 !== s.mode
                ? f
                : 11 === s.mode && ((i = 1), (i = t(i, a, n, 0)), i !== s.check)
                ? _
                : ((r = U(e, a, n, n)),
                  r ? ((s.mode = 31), v) : ((s.havedict = 1), g)))
            : f;
        };
      const q = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      let G = !0;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        G = !1;
      }
      const K = new Uint8Array(256);
      for (let e = 0; e < 256; e++)
        K[e] =
          e >= 252
            ? 6
            : e >= 248
            ? 5
            : e >= 240
            ? 4
            : e >= 224
            ? 3
            : e >= 192
            ? 2
            : 1;
      K[254] = K[254] = 1;
      var j = (e, t) => {
          let a, n;
          const s = t || e.length,
            i = new Array(2 * s);
          for (n = 0, a = 0; a < s; ) {
            let t = e[a++];
            if (t < 128) {
              i[n++] = t;
              continue;
            }
            let r = K[t];
            if (r > 4) (i[n++] = 65533), (a += r - 1);
            else {
              for (t &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && a < s; )
                (t = (t << 6) | (63 & e[a++])), r--;
              r > 1
                ? (i[n++] = 65533)
                : t < 65536
                ? (i[n++] = t)
                : ((t -= 65536),
                  (i[n++] = 55296 | ((t >> 10) & 1023)),
                  (i[n++] = 56320 | (1023 & t)));
            }
          }
          return ((e, t) => {
            if (t < 65534 && e.subarray && G)
              return String.fromCharCode.apply(
                null,
                e.length === t ? e : e.subarray(0, t)
              );
            let a = "";
            for (let n = 0; n < t; n++) a += String.fromCharCode(e[n]);
            return a;
          })(i, n);
        },
        z = (e, t) => {
          (t = t || e.length) > e.length && (t = e.length);
          let a = t - 1;
          for (; a >= 0 && 128 == (192 & e[a]); ) a--;
          return a < 0 || 0 === a ? t : a + K[e[a]] > t ? a : t;
        },
        H = {
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
        W = function () {
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
        },
        J = function () {
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
      const Z = Object.prototype.toString,
        {
          Z_NO_FLUSH: Q,
          Z_FINISH: X,
          Z_OK: $,
          Z_STREAM_END: Y,
          Z_NEED_DICT: ee,
          Z_STREAM_ERROR: te,
          Z_DATA_ERROR: ae,
          Z_MEM_ERROR: ne,
        } = d;
      function se(e) {
        this.options = (function (e) {
          const t = Array.prototype.slice.call(arguments, 1);
          for (; t.length; ) {
            const a = t.shift();
            if (a) {
              if ("object" != typeof a)
                throw new TypeError(a + "must be non-object");
              for (const t in a) q(a, t) && (e[t] = a[t]);
            }
          }
          return e;
        })({ chunkSize: 65536, windowBits: 15, to: "" }, e || {});
        const t = this.options;
        t.raw &&
          t.windowBits >= 0 &&
          t.windowBits < 16 &&
          ((t.windowBits = -t.windowBits),
          0 === t.windowBits && (t.windowBits = -15)),
          !(t.windowBits >= 0 && t.windowBits < 16) ||
            (e && e.windowBits) ||
            (t.windowBits += 32),
          t.windowBits > 15 &&
            t.windowBits < 48 &&
            0 == (15 & t.windowBits) &&
            (t.windowBits |= 15),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new W()),
          (this.strm.avail_out = 0);
        let a = x(this.strm, t.windowBits);
        if (a !== $) throw new Error(H[a]);
        if (
          ((this.header = new J()),
          N(this.strm, this.header),
          t.dictionary &&
            ("string" == typeof t.dictionary
              ? (t.dictionary = ((e) => {
                  let t,
                    a,
                    n,
                    s,
                    i,
                    r = e.length,
                    p = 0;
                  for (s = 0; s < r; s++)
                    (a = e.charCodeAt(s)),
                      55296 == (64512 & a) &&
                        s + 1 < r &&
                        ((n = e.charCodeAt(s + 1)),
                        56320 == (64512 & n) &&
                          ((a = 65536 + ((a - 55296) << 10) + (n - 56320)),
                          s++)),
                      (p += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
                  for (t = new Uint8Array(p), i = 0, s = 0; i < p; s++)
                    (a = e.charCodeAt(s)),
                      55296 == (64512 & a) &&
                        s + 1 < r &&
                        ((n = e.charCodeAt(s + 1)),
                        56320 == (64512 & n) &&
                          ((a = 65536 + ((a - 55296) << 10) + (n - 56320)),
                          s++)),
                      a < 128
                        ? (t[i++] = a)
                        : a < 2048
                        ? ((t[i++] = 192 | (a >>> 6)),
                          (t[i++] = 128 | (63 & a)))
                        : a < 65536
                        ? ((t[i++] = 224 | (a >>> 12)),
                          (t[i++] = 128 | ((a >>> 6) & 63)),
                          (t[i++] = 128 | (63 & a)))
                        : ((t[i++] = 240 | (a >>> 18)),
                          (t[i++] = 128 | ((a >>> 12) & 63)),
                          (t[i++] = 128 | ((a >>> 6) & 63)),
                          (t[i++] = 128 | (63 & a)));
                  return t;
                })(t.dictionary))
              : "[object ArrayBuffer]" === Z.call(t.dictionary) &&
                (t.dictionary = new Uint8Array(t.dictionary)),
            t.raw && ((a = O(this.strm, t.dictionary)), a !== $)))
        )
          throw new Error(H[a]);
      }
      function ie(e, t) {
        const a = new se(t);
        if ((a.push(e), a.err)) throw a.msg || H[a.err];
        return a.result;
      }
      (se.prototype.push = function (e, t) {
        const a = this.strm,
          n = this.options.chunkSize,
          s = this.options.dictionary;
        let i, r, p;
        if (this.ended) return !1;
        for (
          r = t === ~~t ? t : !0 === t ? X : Q,
            "[object ArrayBuffer]" === Z.call(e)
              ? (a.input = new Uint8Array(e))
              : (a.input = e),
            a.next_in = 0,
            a.avail_in = a.input.length;
          ;

        ) {
          for (
            0 === a.avail_out &&
              ((a.output = new Uint8Array(n)),
              (a.next_out = 0),
              (a.avail_out = n)),
              i = F(a, r),
              i === ee &&
                s &&
                ((i = O(a, s)), i === $ ? (i = F(a, r)) : i === ae && (i = ee));
            a.avail_in > 0 && i === Y && a.state.wrap > 0 && 0 !== e[a.next_in];

          )
            B(a), (i = F(a, r));
          switch (i) {
            case te:
            case ae:
            case ee:
            case ne:
              return this.onEnd(i), (this.ended = !0), !1;
          }
          if (((p = a.avail_out), a.next_out && (0 === a.avail_out || i === Y)))
            if ("string" === this.options.to) {
              let e = z(a.output, a.next_out),
                t = a.next_out - e,
                s = j(a.output, e);
              (a.next_out = t),
                (a.avail_out = n - t),
                t && a.output.set(a.output.subarray(e, e + t), 0),
                this.onData(s);
            } else
              this.onData(
                a.output.length === a.next_out
                  ? a.output
                  : a.output.subarray(0, a.next_out)
              );
          if (i !== $ || 0 !== p) {
            if (i === Y)
              return (i = L(this.strm)), this.onEnd(i), (this.ended = !0), !0;
            if (0 === a.avail_in) break;
          }
        }
        return !0;
      }),
        (se.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (se.prototype.onEnd = function (e) {
          e === $ &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = ((e) => {
                  let t = 0;
                  for (let a = 0, n = e.length; a < n; a++) t += e[a].length;
                  const a = new Uint8Array(t);
                  for (let t = 0, n = 0, s = e.length; t < s; t++) {
                    let s = e[t];
                    a.set(s, n), (n += s.length);
                  }
                  return a;
                })(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
        });
      var re = se,
        pe = ie,
        oe = function (e, t) {
          return ((t = t || {}).raw = !0), ie(e, t);
        },
        me = ie,
        de = d,
        ye = {
          Inflate: re,
          inflate: pe,
          inflateRaw: oe,
          ungzip: me,
          constants: de,
        };
      (e.Inflate = re),
        (e.constants = de),
        (e.default = ye),
        (e.inflate = pe),
        (e.inflateRaw = oe),
        (e.ungzip = me),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t);
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, a) {
    "use strict";
    function n(...e) {
      const t = e.reduce((e, t) => e + (t.byteLength || t.length), 0),
        a = new Uint8Array(t);
      let n = 0;
      return (
        e.forEach((e) => {
          a.set(e instanceof ArrayBuffer ? new Uint8Array(e) : e, n),
            (n += e.byteLength || e.length);
        }),
        a
      );
    }
    a.r(t),
      a.d(t, "isWebpSupported", function () {
        return ea;
      }),
      (Uint8Array.prototype.concat = function (...e) {
        return n(this, ...e);
      }),
      (Uint8Array.prototype.toJSON = function () {
        return [...this];
      }),
      (Promise.prototype.finally =
        Promise.prototype.finally ||
        function (e) {
          const t = (t) => Promise.resolve(e()).then(t);
          return this.then(
            (e) => t(() => e),
            (e) => t(() => Promise.reject(e))
          );
        });
    const s = {
      test: location.search.indexOf("test=1") > 0,
      debug: location.search.indexOf("debug=1") > 0,
      http: !1,
      ssl: !0,
      multipleConnections: !0,
      asServiceWorker: !1,
      transport: "websocket",
    };
    (s.http = location.search.indexOf("http=1") > 0),
      s.http && (s.transport = "https");
    var i = s;
    const r = i.debug,
      p = "undefined" != typeof window ? window : self;
    var o = r;
    const m =
        "undefined" != typeof ServiceWorkerGlobalScope &&
        self instanceof ServiceWorkerGlobalScope,
      d =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        !m,
      y = d || m,
      c = (e, ...t) => {
        self.clients
          .matchAll({ includeUncontrolled: !1, type: "window" })
          .then((a) => {
            a.length &&
              a.slice(e ? 0 : -1).forEach((e) => {
                e.postMessage(...t);
              });
          });
      },
      l = (...e) => {
        self.postMessage(...e);
      },
      g = () => {},
      u = m ? c.bind(null, !1) : d ? l : g,
      h = m ? c.bind(null, !0) : d ? l : g;
    class f {
      constructor() {
        (this.prefix = ""),
          (this.cache = {}),
          (this.useStorage = !0),
          i.test && (this.prefix = "t_");
      }
      get(e, t = !0) {
        if (this.cache.hasOwnProperty(e) && t) return this.cache[e];
        if (this.useStorage) {
          let t;
          try {
            t = localStorage.getItem(this.prefix + e);
          } catch (e) {
            this.useStorage = !1;
          }
          if (null !== t)
            try {
              t = JSON.parse(t);
            } catch (e) {}
          else t = void 0;
          return t;
        }
      }
      set(e, t = !1) {
        for (const a in e)
          if (e.hasOwnProperty(a)) {
            const n = e[a];
            if (((this.cache[a] = n), this.useStorage && !t))
              try {
                const e = JSON.stringify(n);
                localStorage.setItem(this.prefix + a, e);
              } catch (e) {
                this.useStorage = !1;
              }
          }
      }
      delete(e, t = !1) {
        (e = "" + e), t || delete this.cache[e];
        try {
          localStorage.removeItem(this.prefix + e);
        } catch (e) {}
      }
      clear() {
        const e = [
          "dc",
          "server_time_offset",
          "xt_instance",
          "user_auth",
          "state_id",
        ];
        for (let t = 1; t <= 5; ++t)
          e.push(`dc${t}_server_salt`), e.push(`dc${t}_auth_key`);
        for (let t of e) this.delete(t, !0);
      }
      toggleStorage(e) {
        if (((this.useStorage = e), e)) return this.set(this.cache);
        this.clear();
      }
    }
    class _ {
      constructor() {
        (this.taskId = 0),
          (this.tasks = {}),
          _.STORAGES.push(this),
          y || (this.storage = new f());
      }
      finishTask(e, t) {
        this.tasks.hasOwnProperty(e) &&
          (this.tasks[e](t), delete this.tasks[e]);
      }
      proxy(e, ...t) {
        return new Promise((a, n) => {
          if (y) {
            const n = this.taskId++;
            this.tasks[n] = a;
            u({
              type: "localStorageProxy",
              id: n,
              payload: { type: e, args: t },
            });
          } else {
            t = Array.prototype.slice.call(t);
            a(this.storage[e].apply(this.storage, t));
          }
        });
      }
      get(e, t) {
        return this.proxy("get", e, t);
      }
      set(e, t) {
        return this.proxy("set", e, t);
      }
      delete(e, t) {
        return this.proxy("delete", e, t);
      }
      clear() {
        return this.proxy("clear");
      }
      toggleStorage(e) {
        return this.proxy("toggleStorage", e);
      }
    }
    _.STORAGES = [];
    const v = new _();
    p.appStorage = v;
    var b = v,
      w = {
        MTProto: {
          constructors: [
            {
              id: 481674261,
              predicate: "vector",
              params: [],
              type: "Vector t",
            },
            {
              id: 85337187,
              predicate: "resPQ",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "pq", type: "bytes" },
                {
                  name: "server_public_key_fingerprints",
                  type: "Vector<long>",
                },
              ],
              type: "ResPQ",
            },
            {
              id: -1443537003,
              predicate: "p_q_inner_data_dc",
              params: [
                { name: "pq", type: "bytes" },
                { name: "p", type: "bytes" },
                { name: "q", type: "bytes" },
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "new_nonce", type: "int256" },
                { name: "dc", type: "int" },
              ],
              type: "P_Q_inner_data",
            },
            {
              id: 1459478408,
              predicate: "p_q_inner_data_temp_dc",
              params: [
                { name: "pq", type: "bytes" },
                { name: "p", type: "bytes" },
                { name: "q", type: "bytes" },
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "new_nonce", type: "int256" },
                { name: "dc", type: "int" },
                { name: "expires_in", type: "int" },
              ],
              type: "P_Q_inner_data",
            },
            {
              id: -790100132,
              predicate: "server_DH_params_ok",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "encrypted_answer", type: "bytes" },
              ],
              type: "Server_DH_Params",
            },
            {
              id: -1249309254,
              predicate: "server_DH_inner_data",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "g", type: "int" },
                { name: "dh_prime", type: "bytes" },
                { name: "g_a", type: "bytes" },
                { name: "server_time", type: "int" },
              ],
              type: "Server_DH_inner_data",
            },
            {
              id: 1715713620,
              predicate: "client_DH_inner_data",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "retry_id", type: "long" },
                { name: "g_b", type: "bytes" },
              ],
              type: "Client_DH_Inner_Data",
            },
            {
              id: 1003222836,
              predicate: "dh_gen_ok",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "new_nonce_hash1", type: "int128" },
              ],
              type: "Set_client_DH_params_answer",
            },
            {
              id: 1188831161,
              predicate: "dh_gen_retry",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "new_nonce_hash2", type: "int128" },
              ],
              type: "Set_client_DH_params_answer",
            },
            {
              id: -1499615742,
              predicate: "dh_gen_fail",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "new_nonce_hash3", type: "int128" },
              ],
              type: "Set_client_DH_params_answer",
            },
            {
              id: 1973679973,
              predicate: "bind_auth_key_inner",
              params: [
                { name: "nonce", type: "long" },
                { name: "temp_auth_key_id", type: "long" },
                { name: "perm_auth_key_id", type: "long" },
                { name: "temp_session_id", type: "long" },
                { name: "expires_at", type: "int" },
              ],
              type: "BindAuthKeyInner",
            },
            {
              id: -212046591,
              predicate: "rpc_result",
              params: [
                { name: "req_msg_id", type: "long" },
                { name: "result", type: "Object" },
              ],
              type: "RpcResult",
            },
            {
              id: 558156313,
              predicate: "rpc_error",
              params: [
                { name: "error_code", type: "int" },
                { name: "error_message", type: "string" },
              ],
              type: "RpcError",
            },
            {
              id: 1579864942,
              predicate: "rpc_answer_unknown",
              params: [],
              type: "RpcDropAnswer",
            },
            {
              id: -847714938,
              predicate: "rpc_answer_dropped_running",
              params: [],
              type: "RpcDropAnswer",
            },
            {
              id: -1539647305,
              predicate: "rpc_answer_dropped",
              params: [
                { name: "msg_id", type: "long" },
                { name: "seq_no", type: "int" },
                { name: "bytes", type: "int" },
              ],
              type: "RpcDropAnswer",
            },
            {
              id: 155834844,
              predicate: "future_salt",
              params: [
                { name: "valid_since", type: "int" },
                { name: "valid_until", type: "int" },
                { name: "salt", type: "long" },
              ],
              type: "FutureSalt",
            },
            {
              id: -1370486635,
              predicate: "future_salts",
              params: [
                { name: "req_msg_id", type: "long" },
                { name: "now", type: "int" },
                { name: "salts", type: "vector<future_salt>" },
              ],
              type: "FutureSalts",
            },
            {
              id: 880243653,
              predicate: "pong",
              params: [
                { name: "msg_id", type: "long" },
                { name: "ping_id", type: "long" },
              ],
              type: "Pong",
            },
            {
              id: -501201412,
              predicate: "destroy_session_ok",
              params: [{ name: "session_id", type: "long" }],
              type: "DestroySessionRes",
            },
            {
              id: 1658015945,
              predicate: "destroy_session_none",
              params: [{ name: "session_id", type: "long" }],
              type: "DestroySessionRes",
            },
            {
              id: -1631450872,
              predicate: "new_session_created",
              params: [
                { name: "first_msg_id", type: "long" },
                { name: "unique_id", type: "long" },
                { name: "server_salt", type: "long" },
              ],
              type: "NewSession",
            },
            {
              id: 1945237724,
              predicate: "msg_container",
              params: [{ name: "messages", type: "vector<%Message>" }],
              type: "MessageContainer",
            },
            {
              id: 1538843921,
              predicate: "message",
              params: [
                { name: "msg_id", type: "long" },
                { name: "seqno", type: "int" },
                { name: "bytes", type: "int" },
                { name: "body", type: "Object" },
              ],
              type: "Message",
            },
            {
              id: -530561358,
              predicate: "msg_copy",
              params: [{ name: "orig_message", type: "Message" }],
              type: "MessageCopy",
            },
            {
              id: 812830625,
              predicate: "gzip_packed",
              params: [{ name: "packed_data", type: "bytes" }],
              type: "Object",
            },
            {
              id: 1658238041,
              predicate: "msgs_ack",
              params: [{ name: "msg_ids", type: "Vector<long>" }],
              type: "MsgsAck",
            },
            {
              id: -1477445615,
              predicate: "bad_msg_notification",
              params: [
                { name: "bad_msg_id", type: "long" },
                { name: "bad_msg_seqno", type: "int" },
                { name: "error_code", type: "int" },
              ],
              type: "BadMsgNotification",
            },
            {
              id: -307542917,
              predicate: "bad_server_salt",
              params: [
                { name: "bad_msg_id", type: "long" },
                { name: "bad_msg_seqno", type: "int" },
                { name: "error_code", type: "int" },
                { name: "new_server_salt", type: "long" },
              ],
              type: "BadMsgNotification",
            },
            {
              id: 2105940488,
              predicate: "msg_resend_req",
              params: [{ name: "msg_ids", type: "Vector<long>" }],
              type: "MsgResendReq",
            },
            {
              id: -630588590,
              predicate: "msgs_state_req",
              params: [{ name: "msg_ids", type: "Vector<long>" }],
              type: "MsgsStateReq",
            },
            {
              id: 81704317,
              predicate: "msgs_state_info",
              params: [
                { name: "req_msg_id", type: "long" },
                { name: "info", type: "bytes" },
              ],
              type: "MsgsStateInfo",
            },
            {
              id: -1933520591,
              predicate: "msgs_all_info",
              params: [
                { name: "msg_ids", type: "Vector<long>" },
                { name: "info", type: "bytes" },
              ],
              type: "MsgsAllInfo",
            },
            {
              id: 661470918,
              predicate: "msg_detailed_info",
              params: [
                { name: "msg_id", type: "long" },
                { name: "answer_msg_id", type: "long" },
                { name: "bytes", type: "int" },
                { name: "status", type: "int" },
              ],
              type: "MsgDetailedInfo",
            },
            {
              id: -2137147681,
              predicate: "msg_new_detailed_info",
              params: [
                { name: "answer_msg_id", type: "long" },
                { name: "bytes", type: "int" },
                { name: "status", type: "int" },
              ],
              type: "MsgDetailedInfo",
            },
            {
              id: -161422892,
              predicate: "destroy_auth_key_ok",
              params: [],
              type: "DestroyAuthKeyRes",
            },
            {
              id: 178201177,
              predicate: "destroy_auth_key_none",
              params: [],
              type: "DestroyAuthKeyRes",
            },
            {
              id: -368010477,
              predicate: "destroy_auth_key_fail",
              params: [],
              type: "DestroyAuthKeyRes",
            },
          ],
          methods: [
            {
              id: -1099002127,
              method: "req_pq_multi",
              params: [{ name: "nonce", type: "int128" }],
              type: "ResPQ",
            },
            {
              id: -686627650,
              method: "req_DH_params",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "p", type: "bytes" },
                { name: "q", type: "bytes" },
                { name: "public_key_fingerprint", type: "long" },
                { name: "encrypted_data", type: "bytes" },
              ],
              type: "Server_DH_Params",
            },
            {
              id: -184262881,
              method: "set_client_DH_params",
              params: [
                { name: "nonce", type: "int128" },
                { name: "server_nonce", type: "int128" },
                { name: "encrypted_data", type: "bytes" },
              ],
              type: "Set_client_DH_params_answer",
            },
            {
              id: 1491380032,
              method: "rpc_drop_answer",
              params: [{ name: "req_msg_id", type: "long" }],
              type: "RpcDropAnswer",
            },
            {
              id: -1188971260,
              method: "get_future_salts",
              params: [{ name: "num", type: "int" }],
              type: "FutureSalts",
            },
            {
              id: 2059302892,
              method: "ping",
              params: [{ name: "ping_id", type: "long" }],
              type: "Pong",
            },
            {
              id: -213746804,
              method: "ping_delay_disconnect",
              params: [
                { name: "ping_id", type: "long" },
                { name: "disconnect_delay", type: "int" },
              ],
              type: "Pong",
            },
            {
              id: -414113498,
              method: "destroy_session",
              params: [{ name: "session_id", type: "long" }],
              type: "DestroySessionRes",
            },
            {
              id: -1835453025,
              method: "http_wait",
              params: [
                { name: "max_delay", type: "int" },
                { name: "wait_after", type: "int" },
                { name: "max_wait", type: "int" },
              ],
              type: "HttpWait",
            },
            {
              id: -784117408,
              method: "destroy_auth_key",
              params: [],
              type: "DestroyAuthKeyRes",
            },
          ],
        },
        API: {
          constructors: [
            {
              id: -1132882121,
              predicate: "boolFalse",
              params: [],
              type: "Bool",
            },
            {
              id: -1720552011,
              predicate: "boolTrue",
              params: [],
              type: "Bool",
            },
            { id: 1072550713, predicate: "true", params: [], type: "True" },
            {
              id: 481674261,
              predicate: "vector",
              params: [],
              type: "Vector t",
            },
            {
              id: -994444869,
              predicate: "error",
              params: [
                { name: "code", type: "int" },
                { name: "text", type: "string" },
              ],
              type: "Error",
            },
            { id: 1450380236, predicate: "null", params: [], type: "Null" },
            {
              id: 2134579434,
              predicate: "inputPeerEmpty",
              params: [],
              type: "InputPeer",
            },
            {
              id: 2107670217,
              predicate: "inputPeerSelf",
              params: [],
              type: "InputPeer",
            },
            {
              id: 900291769,
              predicate: "inputPeerChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "InputPeer",
            },
            {
              id: -1182234929,
              predicate: "inputUserEmpty",
              params: [],
              type: "InputUser",
            },
            {
              id: -138301121,
              predicate: "inputUserSelf",
              params: [],
              type: "InputUser",
            },
            {
              id: -208488460,
              predicate: "inputPhoneContact",
              params: [
                { name: "client_id", type: "long" },
                { name: "phone", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
              ],
              type: "InputContact",
            },
            {
              id: -181407105,
              predicate: "inputFile",
              params: [
                { name: "id", type: "long" },
                { name: "parts", type: "int" },
                { name: "name", type: "string" },
                { name: "md5_checksum", type: "string" },
              ],
              type: "InputFile",
            },
            {
              id: -1771768449,
              predicate: "inputMediaEmpty",
              params: [],
              type: "InputMedia",
            },
            {
              id: 505969924,
              predicate: "inputMediaUploadedPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "file", type: "InputFile" },
                { name: "stickers", type: "flags.0?Vector<InputDocument>" },
                { name: "ttl_seconds", type: "flags.1?int" },
              ],
              type: "InputMedia",
            },
            {
              id: -1279654347,
              predicate: "inputMediaPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "InputPhoto" },
                { name: "ttl_seconds", type: "flags.0?int" },
              ],
              type: "InputMedia",
            },
            {
              id: -104578748,
              predicate: "inputMediaGeoPoint",
              params: [{ name: "geo_point", type: "InputGeoPoint" }],
              type: "InputMedia",
            },
            {
              id: -122978821,
              predicate: "inputMediaContact",
              params: [
                { name: "phone_number", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "vcard", type: "string" },
              ],
              type: "InputMedia",
            },
            {
              id: 480546647,
              predicate: "inputChatPhotoEmpty",
              params: [],
              type: "InputChatPhoto",
            },
            {
              id: -968723890,
              predicate: "inputChatUploadedPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "file", type: "flags.0?InputFile" },
                { name: "video", type: "flags.1?InputFile" },
                { name: "video_start_ts", type: "flags.2?double" },
              ],
              type: "InputChatPhoto",
            },
            {
              id: -1991004873,
              predicate: "inputChatPhoto",
              params: [{ name: "id", type: "InputPhoto" }],
              type: "InputChatPhoto",
            },
            {
              id: -457104426,
              predicate: "inputGeoPointEmpty",
              params: [],
              type: "InputGeoPoint",
            },
            {
              id: 1210199983,
              predicate: "inputGeoPoint",
              params: [
                { name: "flags", type: "#" },
                { name: "lat", type: "double" },
                { name: "long", type: "double" },
                { name: "accuracy_radius", type: "flags.0?int" },
              ],
              type: "InputGeoPoint",
            },
            {
              id: 483901197,
              predicate: "inputPhotoEmpty",
              params: [],
              type: "InputPhoto",
            },
            {
              id: 1001634122,
              predicate: "inputPhoto",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
              ],
              type: "InputPhoto",
            },
            {
              id: -539317279,
              predicate: "inputFileLocation",
              params: [
                { name: "volume_id", type: "long" },
                { name: "local_id", type: "int" },
                { name: "secret", type: "long" },
                { name: "file_reference", type: "bytes" },
              ],
              type: "InputFileLocation",
            },
            {
              id: 1498486562,
              predicate: "peerUser",
              params: [{ name: "user_id", type: "long" }],
              type: "Peer",
            },
            {
              id: 918946202,
              predicate: "peerChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "Peer",
            },
            {
              id: -1432995067,
              predicate: "storage.fileUnknown",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 1086091090,
              predicate: "storage.filePartial",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 8322574,
              predicate: "storage.fileJpeg",
              params: [],
              type: "storage.FileType",
            },
            {
              id: -891180321,
              predicate: "storage.fileGif",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 172975040,
              predicate: "storage.filePng",
              params: [],
              type: "storage.FileType",
            },
            {
              id: -1373745011,
              predicate: "storage.filePdf",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 1384777335,
              predicate: "storage.fileMp3",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 1258941372,
              predicate: "storage.fileMov",
              params: [],
              type: "storage.FileType",
            },
            {
              id: -1278304028,
              predicate: "storage.fileMp4",
              params: [],
              type: "storage.FileType",
            },
            {
              id: 276907596,
              predicate: "storage.fileWebp",
              params: [],
              type: "storage.FileType",
            },
            {
              id: -742634630,
              predicate: "userEmpty",
              params: [{ name: "id", type: "long" }],
              type: "User",
            },
            {
              id: 1326562017,
              predicate: "userProfilePhotoEmpty",
              params: [],
              type: "UserProfilePhoto",
            },
            {
              id: -2100168954,
              predicate: "userProfilePhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "has_video", type: "flags.0?true" },
                { name: "photo_id", type: "long" },
                { name: "stripped_thumb", type: "flags.1?bytes" },
                { name: "dc_id", type: "int" },
              ],
              type: "UserProfilePhoto",
            },
            {
              id: 164646985,
              predicate: "userStatusEmpty",
              params: [],
              type: "UserStatus",
            },
            {
              id: -306628279,
              predicate: "userStatusOnline",
              params: [{ name: "expires", type: "int" }],
              type: "UserStatus",
            },
            {
              id: 9203775,
              predicate: "userStatusOffline",
              params: [{ name: "was_online", type: "int" }],
              type: "UserStatus",
            },
            {
              id: 693512293,
              predicate: "chatEmpty",
              params: [{ name: "id", type: "long" }],
              type: "Chat",
            },
            {
              id: 1103884886,
              predicate: "chat",
              params: [
                { name: "flags", type: "#" },
                { name: "creator", type: "flags.0?true" },
                { name: "kicked", type: "flags.1?true" },
                { name: "left", type: "flags.2?true" },
                { name: "deactivated", type: "flags.5?true" },
                { name: "call_active", type: "flags.23?true" },
                { name: "call_not_empty", type: "flags.24?true" },
                { name: "noforwards", type: "flags.25?true" },
                { name: "id", type: "long" },
                { name: "title", type: "string" },
                { name: "photo", type: "ChatPhoto" },
                { name: "participants_count", type: "int" },
                { name: "date", type: "int" },
                { name: "version", type: "int" },
                { name: "migrated_to", type: "flags.6?InputChannel" },
                { name: "admin_rights", type: "flags.14?ChatAdminRights" },
                {
                  name: "default_banned_rights",
                  type: "flags.18?ChatBannedRights",
                },
              ],
              type: "Chat",
            },
            {
              id: 1704108455,
              predicate: "chatForbidden",
              params: [
                { name: "id", type: "long" },
                { name: "title", type: "string" },
              ],
              type: "Chat",
            },
            {
              id: -779165146,
              predicate: "chatFull",
              params: [
                { name: "flags", type: "#" },
                { name: "can_set_username", type: "flags.7?true" },
                { name: "has_scheduled", type: "flags.8?true" },
                { name: "id", type: "long" },
                { name: "about", type: "string" },
                { name: "participants", type: "ChatParticipants" },
                { name: "chat_photo", type: "flags.2?Photo" },
                { name: "notify_settings", type: "PeerNotifySettings" },
                {
                  name: "exported_invite",
                  type: "flags.13?ExportedChatInvite",
                },
                { name: "bot_info", type: "flags.3?Vector<BotInfo>" },
                { name: "pinned_msg_id", type: "flags.6?int" },
                { name: "folder_id", type: "flags.11?int" },
                { name: "call", type: "flags.12?InputGroupCall" },
                { name: "ttl_period", type: "flags.14?int" },
                { name: "groupcall_default_join_as", type: "flags.15?Peer" },
                { name: "theme_emoticon", type: "flags.16?string" },
                { name: "requests_pending", type: "flags.17?int" },
                { name: "recent_requesters", type: "flags.17?Vector<long>" },
                {
                  name: "available_reactions",
                  type: "flags.18?Vector<string>",
                },
              ],
              type: "ChatFull",
            },
            {
              id: -1070776313,
              predicate: "chatParticipant",
              params: [
                { name: "user_id", type: "long" },
                { name: "inviter_id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "ChatParticipant",
            },
            {
              id: -2023500831,
              predicate: "chatParticipantsForbidden",
              params: [
                { name: "flags", type: "#" },
                { name: "chat_id", type: "long" },
                { name: "self_participant", type: "flags.0?ChatParticipant" },
              ],
              type: "ChatParticipants",
            },
            {
              id: 1018991608,
              predicate: "chatParticipants",
              params: [
                { name: "chat_id", type: "long" },
                { name: "participants", type: "Vector<ChatParticipant>" },
                { name: "version", type: "int" },
              ],
              type: "ChatParticipants",
            },
            {
              id: 935395612,
              predicate: "chatPhotoEmpty",
              params: [],
              type: "ChatPhoto",
            },
            {
              id: 476978193,
              predicate: "chatPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "has_video", type: "flags.0?true" },
                { name: "photo_id", type: "long" },
                { name: "stripped_thumb", type: "flags.1?bytes" },
                { name: "dc_id", type: "int" },
              ],
              type: "ChatPhoto",
            },
            {
              id: -1868117372,
              predicate: "messageEmpty",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "int" },
                { name: "peer_id", type: "flags.0?Peer" },
              ],
              type: "Message",
            },
            {
              id: 940666592,
              predicate: "message",
              params: [
                { name: "flags", type: "#" },
                { name: "out", type: "flags.1?true" },
                { name: "mentioned", type: "flags.4?true" },
                { name: "media_unread", type: "flags.5?true" },
                { name: "silent", type: "flags.13?true" },
                { name: "post", type: "flags.14?true" },
                { name: "from_scheduled", type: "flags.18?true" },
                { name: "legacy", type: "flags.19?true" },
                { name: "edit_hide", type: "flags.21?true" },
                { name: "pinned", type: "flags.24?true" },
                { name: "noforwards", type: "flags.26?true" },
                { name: "id", type: "int" },
                { name: "from_id", type: "flags.8?Peer" },
                { name: "peer_id", type: "Peer" },
                { name: "fwd_from", type: "flags.2?MessageFwdHeader" },
                { name: "via_bot_id", type: "flags.11?long" },
                { name: "reply_to", type: "flags.3?MessageReplyHeader" },
                { name: "date", type: "int" },
                { name: "message", type: "string" },
                { name: "media", type: "flags.9?MessageMedia" },
                { name: "reply_markup", type: "flags.6?ReplyMarkup" },
                { name: "entities", type: "flags.7?Vector<MessageEntity>" },
                { name: "views", type: "flags.10?int" },
                { name: "forwards", type: "flags.10?int" },
                { name: "replies", type: "flags.23?MessageReplies" },
                { name: "edit_date", type: "flags.15?int" },
                { name: "post_author", type: "flags.16?string" },
                { name: "grouped_id", type: "flags.17?long" },
                { name: "reactions", type: "flags.20?MessageReactions" },
                {
                  name: "restriction_reason",
                  type: "flags.22?Vector<RestrictionReason>",
                },
                { name: "ttl_period", type: "flags.25?int" },
              ],
              type: "Message",
            },
            {
              id: 721967202,
              predicate: "messageService",
              params: [
                { name: "flags", type: "#" },
                { name: "out", type: "flags.1?true" },
                { name: "mentioned", type: "flags.4?true" },
                { name: "media_unread", type: "flags.5?true" },
                { name: "silent", type: "flags.13?true" },
                { name: "post", type: "flags.14?true" },
                { name: "legacy", type: "flags.19?true" },
                { name: "id", type: "int" },
                { name: "from_id", type: "flags.8?Peer" },
                { name: "peer_id", type: "Peer" },
                { name: "reply_to", type: "flags.3?MessageReplyHeader" },
                { name: "date", type: "int" },
                { name: "action", type: "MessageAction" },
                { name: "ttl_period", type: "flags.25?int" },
              ],
              type: "Message",
            },
            {
              id: 1038967584,
              predicate: "messageMediaEmpty",
              params: [],
              type: "MessageMedia",
            },
            {
              id: 1766936791,
              predicate: "messageMediaPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "photo", type: "flags.0?Photo" },
                { name: "ttl_seconds", type: "flags.2?int" },
              ],
              type: "MessageMedia",
            },
            {
              id: 1457575028,
              predicate: "messageMediaGeo",
              params: [{ name: "geo", type: "GeoPoint" }],
              type: "MessageMedia",
            },
            {
              id: 1882335561,
              predicate: "messageMediaContact",
              params: [
                { name: "phone_number", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "vcard", type: "string" },
                { name: "user_id", type: "long" },
              ],
              type: "MessageMedia",
            },
            {
              id: -1618676578,
              predicate: "messageMediaUnsupported",
              params: [],
              type: "MessageMedia",
            },
            {
              id: -1230047312,
              predicate: "messageActionEmpty",
              params: [],
              type: "MessageAction",
            },
            {
              id: -1119368275,
              predicate: "messageActionChatCreate",
              params: [
                { name: "title", type: "string" },
                { name: "users", type: "Vector<long>" },
              ],
              type: "MessageAction",
            },
            {
              id: -1247687078,
              predicate: "messageActionChatEditTitle",
              params: [{ name: "title", type: "string" }],
              type: "MessageAction",
            },
            {
              id: 2144015272,
              predicate: "messageActionChatEditPhoto",
              params: [{ name: "photo", type: "Photo" }],
              type: "MessageAction",
            },
            {
              id: -1780220945,
              predicate: "messageActionChatDeletePhoto",
              params: [],
              type: "MessageAction",
            },
            {
              id: 365886720,
              predicate: "messageActionChatAddUser",
              params: [{ name: "users", type: "Vector<long>" }],
              type: "MessageAction",
            },
            {
              id: -1539362612,
              predicate: "messageActionChatDeleteUser",
              params: [{ name: "user_id", type: "long" }],
              type: "MessageAction",
            },
            {
              id: -1460809483,
              predicate: "dialog",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.2?true" },
                { name: "unread_mark", type: "flags.3?true" },
                { name: "peer", type: "Peer" },
                { name: "top_message", type: "int" },
                { name: "read_inbox_max_id", type: "int" },
                { name: "read_outbox_max_id", type: "int" },
                { name: "unread_count", type: "int" },
                { name: "unread_mentions_count", type: "int" },
                { name: "unread_reactions_count", type: "int" },
                { name: "notify_settings", type: "PeerNotifySettings" },
                { name: "pts", type: "flags.0?int" },
                { name: "draft", type: "flags.1?DraftMessage" },
                { name: "folder_id", type: "flags.4?int" },
              ],
              type: "Dialog",
            },
            {
              id: 590459437,
              predicate: "photoEmpty",
              params: [{ name: "id", type: "long" }],
              type: "Photo",
            },
            {
              id: -82216347,
              predicate: "photo",
              params: [
                { name: "flags", type: "#" },
                { name: "has_stickers", type: "flags.0?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
                { name: "date", type: "int" },
                { name: "sizes", type: "Vector<PhotoSize>" },
                { name: "video_sizes", type: "flags.1?Vector<VideoSize>" },
                { name: "dc_id", type: "int" },
              ],
              type: "Photo",
            },
            {
              id: 236446268,
              predicate: "photoSizeEmpty",
              params: [{ name: "type", type: "string" }],
              type: "PhotoSize",
            },
            {
              id: 1976012384,
              predicate: "photoSize",
              params: [
                { name: "type", type: "string" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "size", type: "int" },
              ],
              type: "PhotoSize",
            },
            {
              id: 35527382,
              predicate: "photoCachedSize",
              params: [
                { name: "type", type: "string" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "PhotoSize",
            },
            {
              id: 286776671,
              predicate: "geoPointEmpty",
              params: [],
              type: "GeoPoint",
            },
            {
              id: -1297942941,
              predicate: "geoPoint",
              params: [
                { name: "flags", type: "#" },
                { name: "long", type: "double" },
                { name: "lat", type: "double" },
                { name: "access_hash", type: "long" },
                { name: "accuracy_radius", type: "flags.0?int" },
              ],
              type: "GeoPoint",
            },
            {
              id: 1577067778,
              predicate: "auth.sentCode",
              params: [
                { name: "flags", type: "#" },
                { name: "type", type: "auth.SentCodeType" },
                { name: "phone_code_hash", type: "string" },
                { name: "next_type", type: "flags.1?auth.CodeType" },
                { name: "timeout", type: "flags.2?int" },
              ],
              type: "auth.SentCode",
            },
            {
              id: 872119224,
              predicate: "auth.authorization",
              params: [
                { name: "flags", type: "#" },
                { name: "setup_password_required", type: "flags.1?true" },
                { name: "otherwise_relogin_days", type: "flags.1?int" },
                { name: "tmp_sessions", type: "flags.0?int" },
                { name: "user", type: "User" },
              ],
              type: "auth.Authorization",
            },
            {
              id: -1271602504,
              predicate: "auth.exportedAuthorization",
              params: [
                { name: "id", type: "long" },
                { name: "bytes", type: "bytes" },
              ],
              type: "auth.ExportedAuthorization",
            },
            {
              id: -1195615476,
              predicate: "inputNotifyPeer",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "InputNotifyPeer",
            },
            {
              id: 423314455,
              predicate: "inputNotifyUsers",
              params: [],
              type: "InputNotifyPeer",
            },
            {
              id: 1251338318,
              predicate: "inputNotifyChats",
              params: [],
              type: "InputNotifyPeer",
            },
            {
              id: -1673717362,
              predicate: "inputPeerNotifySettings",
              params: [
                { name: "flags", type: "#" },
                { name: "show_previews", type: "flags.0?Bool" },
                { name: "silent", type: "flags.1?Bool" },
                { name: "mute_until", type: "flags.2?int" },
                { name: "sound", type: "flags.3?string" },
              ],
              type: "InputPeerNotifySettings",
            },
            {
              id: -1353671392,
              predicate: "peerNotifySettings",
              params: [
                { name: "flags", type: "#" },
                { name: "show_previews", type: "flags.0?Bool" },
                { name: "silent", type: "flags.1?Bool" },
                { name: "mute_until", type: "flags.2?int" },
                { name: "sound", type: "flags.3?string" },
              ],
              type: "PeerNotifySettings",
            },
            {
              id: -1525149427,
              predicate: "peerSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "report_spam", type: "flags.0?true" },
                { name: "add_contact", type: "flags.1?true" },
                { name: "block_contact", type: "flags.2?true" },
                { name: "share_contact", type: "flags.3?true" },
                { name: "need_contacts_exception", type: "flags.4?true" },
                { name: "report_geo", type: "flags.5?true" },
                { name: "autoarchived", type: "flags.7?true" },
                { name: "invite_members", type: "flags.8?true" },
                { name: "request_chat_broadcast", type: "flags.10?true" },
                { name: "geo_distance", type: "flags.6?int" },
                { name: "request_chat_title", type: "flags.9?string" },
                { name: "request_chat_date", type: "flags.9?int" },
              ],
              type: "PeerSettings",
            },
            {
              id: -1539849235,
              predicate: "wallPaper",
              params: [
                { name: "id", type: "long" },
                { name: "flags", type: "#" },
                { name: "creator", type: "flags.0?true" },
                { name: "default", type: "flags.1?true" },
                { name: "pattern", type: "flags.3?true" },
                { name: "dark", type: "flags.4?true" },
                { name: "access_hash", type: "long" },
                { name: "slug", type: "string" },
                { name: "document", type: "Document" },
                { name: "settings", type: "flags.2?WallPaperSettings" },
              ],
              type: "WallPaper",
            },
            {
              id: 1490799288,
              predicate: "inputReportReasonSpam",
              params: [],
              type: "ReportReason",
            },
            {
              id: 505595789,
              predicate: "inputReportReasonViolence",
              params: [],
              type: "ReportReason",
            },
            {
              id: 777640226,
              predicate: "inputReportReasonPornography",
              params: [],
              type: "ReportReason",
            },
            {
              id: -1376497949,
              predicate: "inputReportReasonChildAbuse",
              params: [],
              type: "ReportReason",
            },
            {
              id: -1041980751,
              predicate: "inputReportReasonOther",
              params: [],
              type: "ReportReason",
            },
            {
              id: -818518751,
              predicate: "userFull",
              params: [
                { name: "flags", type: "#" },
                { name: "blocked", type: "flags.0?true" },
                { name: "phone_calls_available", type: "flags.4?true" },
                { name: "phone_calls_private", type: "flags.5?true" },
                { name: "can_pin_message", type: "flags.7?true" },
                { name: "has_scheduled", type: "flags.12?true" },
                { name: "video_calls_available", type: "flags.13?true" },
                { name: "id", type: "long" },
                { name: "about", type: "flags.1?string" },
                { name: "settings", type: "PeerSettings" },
                { name: "profile_photo", type: "flags.2?Photo" },
                { name: "notify_settings", type: "PeerNotifySettings" },
                { name: "bot_info", type: "flags.3?BotInfo" },
                { name: "pinned_msg_id", type: "flags.6?int" },
                { name: "common_chats_count", type: "int" },
                { name: "folder_id", type: "flags.11?int" },
                { name: "ttl_period", type: "flags.14?int" },
                { name: "theme_emoticon", type: "flags.15?string" },
                { name: "private_forward_name", type: "flags.16?string" },
              ],
              type: "UserFull",
            },
            {
              id: 341499403,
              predicate: "contact",
              params: [
                { name: "user_id", type: "long" },
                { name: "mutual", type: "Bool" },
              ],
              type: "Contact",
            },
            {
              id: -1052885936,
              predicate: "importedContact",
              params: [
                { name: "user_id", type: "long" },
                { name: "client_id", type: "long" },
              ],
              type: "ImportedContact",
            },
            {
              id: 383348795,
              predicate: "contactStatus",
              params: [
                { name: "user_id", type: "long" },
                { name: "status", type: "UserStatus" },
              ],
              type: "ContactStatus",
            },
            {
              id: -1219778094,
              predicate: "contacts.contactsNotModified",
              params: [],
              type: "contacts.Contacts",
            },
            {
              id: -353862078,
              predicate: "contacts.contacts",
              params: [
                { name: "contacts", type: "Vector<Contact>" },
                { name: "saved_count", type: "int" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.Contacts",
            },
            {
              id: 2010127419,
              predicate: "contacts.importedContacts",
              params: [
                { name: "imported", type: "Vector<ImportedContact>" },
                { name: "popular_invites", type: "Vector<PopularContact>" },
                { name: "retry_contacts", type: "Vector<long>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.ImportedContacts",
            },
            {
              id: 182326673,
              predicate: "contacts.blocked",
              params: [
                { name: "blocked", type: "Vector<PeerBlocked>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.Blocked",
            },
            {
              id: -513392236,
              predicate: "contacts.blockedSlice",
              params: [
                { name: "count", type: "int" },
                { name: "blocked", type: "Vector<PeerBlocked>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.Blocked",
            },
            {
              id: 364538944,
              predicate: "messages.dialogs",
              params: [
                { name: "dialogs", type: "Vector<Dialog>" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.Dialogs",
            },
            {
              id: 1910543603,
              predicate: "messages.dialogsSlice",
              params: [
                { name: "count", type: "int" },
                { name: "dialogs", type: "Vector<Dialog>" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.Dialogs",
            },
            {
              id: -1938715001,
              predicate: "messages.messages",
              params: [
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.Messages",
            },
            {
              id: 978610270,
              predicate: "messages.messagesSlice",
              params: [
                { name: "flags", type: "#" },
                { name: "inexact", type: "flags.1?true" },
                { name: "count", type: "int" },
                { name: "next_rate", type: "flags.0?int" },
                { name: "offset_id_offset", type: "flags.2?int" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.Messages",
            },
            {
              id: 1694474197,
              predicate: "messages.chats",
              params: [{ name: "chats", type: "Vector<Chat>" }],
              type: "messages.Chats",
            },
            {
              id: -438840932,
              predicate: "messages.chatFull",
              params: [
                { name: "full_chat", type: "ChatFull" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ChatFull",
            },
            {
              id: -1269012015,
              predicate: "messages.affectedHistory",
              params: [
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
                { name: "offset", type: "int" },
              ],
              type: "messages.AffectedHistory",
            },
            {
              id: 1474492012,
              predicate: "inputMessagesFilterEmpty",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1777752804,
              predicate: "inputMessagesFilterPhotos",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1614803355,
              predicate: "inputMessagesFilterVideo",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: 1458172132,
              predicate: "inputMessagesFilterPhotoVideo",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1629621880,
              predicate: "inputMessagesFilterDocument",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: 2129714567,
              predicate: "inputMessagesFilterUrl",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -3644025,
              predicate: "inputMessagesFilterGif",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: 522914557,
              predicate: "updateNewMessage",
              params: [
                { name: "message", type: "Message" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 1318109142,
              predicate: "updateMessageID",
              params: [
                { name: "id", type: "int" },
                { name: "random_id", type: "long" },
              ],
              type: "Update",
            },
            {
              id: -1576161051,
              predicate: "updateDeleteMessages",
              params: [
                { name: "messages", type: "Vector<int>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1071741569,
              predicate: "updateUserTyping",
              params: [
                { name: "user_id", type: "long" },
                { name: "action", type: "SendMessageAction" },
              ],
              type: "Update",
            },
            {
              id: -2092401936,
              predicate: "updateChatUserTyping",
              params: [
                { name: "chat_id", type: "long" },
                { name: "from_id", type: "Peer" },
                { name: "action", type: "SendMessageAction" },
              ],
              type: "Update",
            },
            {
              id: 125178264,
              predicate: "updateChatParticipants",
              params: [{ name: "participants", type: "ChatParticipants" }],
              type: "Update",
            },
            {
              id: -440534818,
              predicate: "updateUserStatus",
              params: [
                { name: "user_id", type: "long" },
                { name: "status", type: "UserStatus" },
              ],
              type: "Update",
            },
            {
              id: -1007549728,
              predicate: "updateUserName",
              params: [
                { name: "user_id", type: "long" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "username", type: "string" },
              ],
              type: "Update",
            },
            {
              id: -232290676,
              predicate: "updateUserPhoto",
              params: [
                { name: "user_id", type: "long" },
                { name: "date", type: "int" },
                { name: "photo", type: "UserProfilePhoto" },
                { name: "previous", type: "Bool" },
              ],
              type: "Update",
            },
            {
              id: -1519637954,
              predicate: "updates.state",
              params: [
                { name: "pts", type: "int" },
                { name: "qts", type: "int" },
                { name: "date", type: "int" },
                { name: "seq", type: "int" },
                { name: "unread_count", type: "int" },
              ],
              type: "updates.State",
            },
            {
              id: 1567990072,
              predicate: "updates.differenceEmpty",
              params: [
                { name: "date", type: "int" },
                { name: "seq", type: "int" },
              ],
              type: "updates.Difference",
            },
            {
              id: 16030880,
              predicate: "updates.difference",
              params: [
                { name: "new_messages", type: "Vector<Message>" },
                {
                  name: "new_encrypted_messages",
                  type: "Vector<EncryptedMessage>",
                },
                { name: "other_updates", type: "Vector<Update>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "state", type: "updates.State" },
              ],
              type: "updates.Difference",
            },
            {
              id: -1459938943,
              predicate: "updates.differenceSlice",
              params: [
                { name: "new_messages", type: "Vector<Message>" },
                {
                  name: "new_encrypted_messages",
                  type: "Vector<EncryptedMessage>",
                },
                { name: "other_updates", type: "Vector<Update>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "intermediate_state", type: "updates.State" },
              ],
              type: "updates.Difference",
            },
            {
              id: -484987010,
              predicate: "updatesTooLong",
              params: [],
              type: "Updates",
            },
            {
              id: 826001400,
              predicate: "updateShortMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "out", type: "flags.1?true" },
                { name: "mentioned", type: "flags.4?true" },
                { name: "media_unread", type: "flags.5?true" },
                { name: "silent", type: "flags.13?true" },
                { name: "id", type: "int" },
                { name: "user_id", type: "long" },
                { name: "message", type: "string" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
                { name: "date", type: "int" },
                { name: "fwd_from", type: "flags.2?MessageFwdHeader" },
                { name: "via_bot_id", type: "flags.11?long" },
                { name: "reply_to", type: "flags.3?MessageReplyHeader" },
                { name: "entities", type: "flags.7?Vector<MessageEntity>" },
                { name: "ttl_period", type: "flags.25?int" },
              ],
              type: "Updates",
            },
            {
              id: 1299050149,
              predicate: "updateShortChatMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "out", type: "flags.1?true" },
                { name: "mentioned", type: "flags.4?true" },
                { name: "media_unread", type: "flags.5?true" },
                { name: "silent", type: "flags.13?true" },
                { name: "id", type: "int" },
                { name: "from_id", type: "long" },
                { name: "chat_id", type: "long" },
                { name: "message", type: "string" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
                { name: "date", type: "int" },
                { name: "fwd_from", type: "flags.2?MessageFwdHeader" },
                { name: "via_bot_id", type: "flags.11?long" },
                { name: "reply_to", type: "flags.3?MessageReplyHeader" },
                { name: "entities", type: "flags.7?Vector<MessageEntity>" },
                { name: "ttl_period", type: "flags.25?int" },
              ],
              type: "Updates",
            },
            {
              id: 2027216577,
              predicate: "updateShort",
              params: [
                { name: "update", type: "Update" },
                { name: "date", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 1918567619,
              predicate: "updatesCombined",
              params: [
                { name: "updates", type: "Vector<Update>" },
                { name: "users", type: "Vector<User>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "date", type: "int" },
                { name: "seq_start", type: "int" },
                { name: "seq", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 1957577280,
              predicate: "updates",
              params: [
                { name: "updates", type: "Vector<Update>" },
                { name: "users", type: "Vector<User>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "date", type: "int" },
                { name: "seq", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: -1916114267,
              predicate: "photos.photos",
              params: [
                { name: "photos", type: "Vector<Photo>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "photos.Photos",
            },
            {
              id: 352657236,
              predicate: "photos.photosSlice",
              params: [
                { name: "count", type: "int" },
                { name: "photos", type: "Vector<Photo>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "photos.Photos",
            },
            {
              id: 539045032,
              predicate: "photos.photo",
              params: [
                { name: "photo", type: "Photo" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "photos.Photo",
            },
            {
              id: 157948117,
              predicate: "upload.file",
              params: [
                { name: "type", type: "storage.FileType" },
                { name: "mtime", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "upload.File",
            },
            {
              id: 414687501,
              predicate: "dcOption",
              params: [
                { name: "flags", type: "#" },
                { name: "ipv6", type: "flags.0?true" },
                { name: "media_only", type: "flags.1?true" },
                { name: "tcpo_only", type: "flags.2?true" },
                { name: "cdn", type: "flags.3?true" },
                { name: "static", type: "flags.4?true" },
                { name: "id", type: "int" },
                { name: "ip_address", type: "string" },
                { name: "port", type: "int" },
                { name: "secret", type: "flags.10?bytes" },
              ],
              type: "DcOption",
            },
            {
              id: 856375399,
              predicate: "config",
              params: [
                { name: "flags", type: "#" },
                { name: "phonecalls_enabled", type: "flags.1?true" },
                { name: "default_p2p_contacts", type: "flags.3?true" },
                { name: "preload_featured_stickers", type: "flags.4?true" },
                { name: "ignore_phone_entities", type: "flags.5?true" },
                { name: "revoke_pm_inbox", type: "flags.6?true" },
                { name: "blocked_mode", type: "flags.8?true" },
                { name: "pfs_enabled", type: "flags.13?true" },
                { name: "date", type: "int" },
                { name: "expires", type: "int" },
                { name: "test_mode", type: "Bool" },
                { name: "this_dc", type: "int" },
                { name: "dc_options", type: "Vector<DcOption>" },
                { name: "dc_txt_domain_name", type: "string" },
                { name: "chat_size_max", type: "int" },
                { name: "megagroup_size_max", type: "int" },
                { name: "forwarded_count_max", type: "int" },
                { name: "online_update_period_ms", type: "int" },
                { name: "offline_blur_timeout_ms", type: "int" },
                { name: "offline_idle_timeout_ms", type: "int" },
                { name: "online_cloud_timeout_ms", type: "int" },
                { name: "notify_cloud_delay_ms", type: "int" },
                { name: "notify_default_delay_ms", type: "int" },
                { name: "push_chat_period_ms", type: "int" },
                { name: "push_chat_limit", type: "int" },
                { name: "saved_gifs_limit", type: "int" },
                { name: "edit_time_limit", type: "int" },
                { name: "revoke_time_limit", type: "int" },
                { name: "revoke_pm_time_limit", type: "int" },
                { name: "rating_e_decay", type: "int" },
                { name: "stickers_recent_limit", type: "int" },
                { name: "stickers_faved_limit", type: "int" },
                { name: "channels_read_media_period", type: "int" },
                { name: "tmp_sessions", type: "flags.0?int" },
                { name: "pinned_dialogs_count_max", type: "int" },
                { name: "pinned_infolder_count_max", type: "int" },
                { name: "call_receive_timeout_ms", type: "int" },
                { name: "call_ring_timeout_ms", type: "int" },
                { name: "call_connect_timeout_ms", type: "int" },
                { name: "call_packet_timeout_ms", type: "int" },
                { name: "me_url_prefix", type: "string" },
                { name: "autoupdate_url_prefix", type: "flags.7?string" },
                { name: "gif_search_username", type: "flags.9?string" },
                { name: "venue_search_username", type: "flags.10?string" },
                { name: "img_search_username", type: "flags.11?string" },
                { name: "static_maps_provider", type: "flags.12?string" },
                { name: "caption_length_max", type: "int" },
                { name: "message_length_max", type: "int" },
                { name: "webfile_dc_id", type: "int" },
                { name: "suggested_lang_code", type: "flags.2?string" },
                { name: "lang_pack_version", type: "flags.2?int" },
                { name: "base_lang_pack_version", type: "flags.2?int" },
              ],
              type: "Config",
            },
            {
              id: -1910892683,
              predicate: "nearestDc",
              params: [
                { name: "country", type: "string" },
                { name: "this_dc", type: "int" },
                { name: "nearest_dc", type: "int" },
              ],
              type: "NearestDc",
            },
            {
              id: -860107216,
              predicate: "help.appUpdate",
              params: [
                { name: "flags", type: "#" },
                { name: "can_not_skip", type: "flags.0?true" },
                { name: "id", type: "int" },
                { name: "version", type: "string" },
                { name: "text", type: "string" },
                { name: "entities", type: "Vector<MessageEntity>" },
                { name: "document", type: "flags.1?Document" },
                { name: "url", type: "flags.2?string" },
                { name: "sticker", type: "flags.3?Document" },
              ],
              type: "help.AppUpdate",
            },
            {
              id: -1000708810,
              predicate: "help.noAppUpdate",
              params: [],
              type: "help.AppUpdate",
            },
            {
              id: 415997816,
              predicate: "help.inviteText",
              params: [{ name: "message", type: "string" }],
              type: "help.InviteText",
            },
            {
              id: 314359194,
              predicate: "updateNewEncryptedMessage",
              params: [
                { name: "message", type: "EncryptedMessage" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 386986326,
              predicate: "updateEncryptedChatTyping",
              params: [{ name: "chat_id", type: "int" }],
              type: "Update",
            },
            {
              id: -1264392051,
              predicate: "updateEncryption",
              params: [
                { name: "chat", type: "EncryptedChat" },
                { name: "date", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 956179895,
              predicate: "updateEncryptedMessagesRead",
              params: [
                { name: "chat_id", type: "int" },
                { name: "max_date", type: "int" },
                { name: "date", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1417756512,
              predicate: "encryptedChatEmpty",
              params: [{ name: "id", type: "int" }],
              type: "EncryptedChat",
            },
            {
              id: 1722964307,
              predicate: "encryptedChatWaiting",
              params: [
                { name: "id", type: "int" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
              ],
              type: "EncryptedChat",
            },
            {
              id: 1223809356,
              predicate: "encryptedChatRequested",
              params: [
                { name: "flags", type: "#" },
                { name: "folder_id", type: "flags.0?int" },
                { name: "id", type: "int" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "g_a", type: "bytes" },
              ],
              type: "EncryptedChat",
            },
            {
              id: 1643173063,
              predicate: "encryptedChat",
              params: [
                { name: "id", type: "int" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "g_a_or_b", type: "bytes" },
                { name: "key_fingerprint", type: "long" },
              ],
              type: "EncryptedChat",
            },
            {
              id: 505183301,
              predicate: "encryptedChatDiscarded",
              params: [
                { name: "flags", type: "#" },
                { name: "history_deleted", type: "flags.0?true" },
                { name: "id", type: "int" },
              ],
              type: "EncryptedChat",
            },
            {
              id: -247351839,
              predicate: "inputEncryptedChat",
              params: [
                { name: "chat_id", type: "int" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputEncryptedChat",
            },
            {
              id: -1038136962,
              predicate: "encryptedFileEmpty",
              params: [],
              type: "EncryptedFile",
            },
            {
              id: 1248893260,
              predicate: "encryptedFile",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "size", type: "int" },
                { name: "dc_id", type: "int" },
                { name: "key_fingerprint", type: "int" },
              ],
              type: "EncryptedFile",
            },
            {
              id: 406307684,
              predicate: "inputEncryptedFileEmpty",
              params: [],
              type: "InputEncryptedFile",
            },
            {
              id: 1690108678,
              predicate: "inputEncryptedFileUploaded",
              params: [
                { name: "id", type: "long" },
                { name: "parts", type: "int" },
                { name: "md5_checksum", type: "string" },
                { name: "key_fingerprint", type: "int" },
              ],
              type: "InputEncryptedFile",
            },
            {
              id: 1511503333,
              predicate: "inputEncryptedFile",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputEncryptedFile",
            },
            {
              id: -182231723,
              predicate: "inputEncryptedFileLocation",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputFileLocation",
            },
            {
              id: -317144808,
              predicate: "encryptedMessage",
              params: [
                { name: "random_id", type: "long" },
                { name: "chat_id", type: "int" },
                { name: "date", type: "int" },
                { name: "bytes", type: "bytes" },
                { name: "file", type: "EncryptedFile" },
              ],
              type: "EncryptedMessage",
            },
            {
              id: 594758406,
              predicate: "encryptedMessageService",
              params: [
                { name: "random_id", type: "long" },
                { name: "chat_id", type: "int" },
                { name: "date", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "EncryptedMessage",
            },
            {
              id: -1058912715,
              predicate: "messages.dhConfigNotModified",
              params: [{ name: "random", type: "bytes" }],
              type: "messages.DhConfig",
            },
            {
              id: 740433629,
              predicate: "messages.dhConfig",
              params: [
                { name: "g", type: "int" },
                { name: "p", type: "bytes" },
                { name: "version", type: "int" },
                { name: "random", type: "bytes" },
              ],
              type: "messages.DhConfig",
            },
            {
              id: 1443858741,
              predicate: "messages.sentEncryptedMessage",
              params: [{ name: "date", type: "int" }],
              type: "messages.SentEncryptedMessage",
            },
            {
              id: -1802240206,
              predicate: "messages.sentEncryptedFile",
              params: [
                { name: "date", type: "int" },
                { name: "file", type: "EncryptedFile" },
              ],
              type: "messages.SentEncryptedMessage",
            },
            {
              id: -95482955,
              predicate: "inputFileBig",
              params: [
                { name: "id", type: "long" },
                { name: "parts", type: "int" },
                { name: "name", type: "string" },
              ],
              type: "InputFile",
            },
            {
              id: 767652808,
              predicate: "inputEncryptedFileBigUploaded",
              params: [
                { name: "id", type: "long" },
                { name: "parts", type: "int" },
                { name: "key_fingerprint", type: "int" },
              ],
              type: "InputEncryptedFile",
            },
            {
              id: 1037718609,
              predicate: "updateChatParticipantAdd",
              params: [
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "inviter_id", type: "long" },
                { name: "date", type: "int" },
                { name: "version", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -483443337,
              predicate: "updateChatParticipantDelete",
              params: [
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "version", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1906403213,
              predicate: "updateDcOptions",
              params: [{ name: "dc_options", type: "Vector<DcOption>" }],
              type: "Update",
            },
            {
              id: 1530447553,
              predicate: "inputMediaUploadedDocument",
              params: [
                { name: "flags", type: "#" },
                { name: "nosound_video", type: "flags.3?true" },
                { name: "force_file", type: "flags.4?true" },
                { name: "file", type: "InputFile" },
                { name: "thumb", type: "flags.2?InputFile" },
                { name: "mime_type", type: "string" },
                { name: "attributes", type: "Vector<DocumentAttribute>" },
                { name: "stickers", type: "flags.0?Vector<InputDocument>" },
                { name: "ttl_seconds", type: "flags.1?int" },
              ],
              type: "InputMedia",
            },
            {
              id: 860303448,
              predicate: "inputMediaDocument",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "InputDocument" },
                { name: "ttl_seconds", type: "flags.0?int" },
                { name: "query", type: "flags.1?string" },
              ],
              type: "InputMedia",
            },
            {
              id: -1666158377,
              predicate: "messageMediaDocument",
              params: [
                { name: "flags", type: "#" },
                { name: "document", type: "flags.0?Document" },
                { name: "ttl_seconds", type: "flags.2?int" },
              ],
              type: "MessageMedia",
            },
            {
              id: 1928391342,
              predicate: "inputDocumentEmpty",
              params: [],
              type: "InputDocument",
            },
            {
              id: 448771445,
              predicate: "inputDocument",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
              ],
              type: "InputDocument",
            },
            {
              id: -1160743548,
              predicate: "inputDocumentFileLocation",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
                { name: "thumb_size", type: "string" },
              ],
              type: "InputFileLocation",
            },
            {
              id: 922273905,
              predicate: "documentEmpty",
              params: [{ name: "id", type: "long" }],
              type: "Document",
            },
            {
              id: 512177195,
              predicate: "document",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
                { name: "date", type: "int" },
                { name: "mime_type", type: "string" },
                { name: "size", type: "int" },
                { name: "thumbs", type: "flags.0?Vector<PhotoSize>" },
                { name: "video_thumbs", type: "flags.1?Vector<VideoSize>" },
                { name: "dc_id", type: "int" },
                { name: "attributes", type: "Vector<DocumentAttribute>" },
              ],
              type: "Document",
            },
            {
              id: 398898678,
              predicate: "help.support",
              params: [
                { name: "phone_number", type: "string" },
                { name: "user", type: "User" },
              ],
              type: "help.Support",
            },
            {
              id: -1613493288,
              predicate: "notifyPeer",
              params: [{ name: "peer", type: "Peer" }],
              type: "NotifyPeer",
            },
            {
              id: -1261946036,
              predicate: "notifyUsers",
              params: [],
              type: "NotifyPeer",
            },
            {
              id: -1073230141,
              predicate: "notifyChats",
              params: [],
              type: "NotifyPeer",
            },
            {
              id: -1094555409,
              predicate: "updateNotifySettings",
              params: [
                { name: "peer", type: "NotifyPeer" },
                { name: "notify_settings", type: "PeerNotifySettings" },
              ],
              type: "Update",
            },
            {
              id: 381645902,
              predicate: "sendMessageTypingAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -44119819,
              predicate: "sendMessageCancelAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -1584933265,
              predicate: "sendMessageRecordVideoAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -378127636,
              predicate: "sendMessageUploadVideoAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: -718310409,
              predicate: "sendMessageRecordAudioAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -212740181,
              predicate: "sendMessageUploadAudioAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: -774682074,
              predicate: "sendMessageUploadPhotoAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: -1441998364,
              predicate: "sendMessageUploadDocumentAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: 393186209,
              predicate: "sendMessageGeoLocationAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: 1653390447,
              predicate: "sendMessageChooseContactAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -1290580579,
              predicate: "contacts.found",
              params: [
                { name: "my_results", type: "Vector<Peer>" },
                { name: "results", type: "Vector<Peer>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.Found",
            },
            {
              id: -337352679,
              predicate: "updateServiceNotification",
              params: [
                { name: "flags", type: "#" },
                { name: "popup", type: "flags.0?true" },
                { name: "inbox_date", type: "flags.1?int" },
                { name: "type", type: "string" },
                { name: "message", type: "string" },
                { name: "media", type: "MessageMedia" },
                { name: "entities", type: "Vector<MessageEntity>" },
              ],
              type: "Update",
            },
            {
              id: -496024847,
              predicate: "userStatusRecently",
              params: [],
              type: "UserStatus",
            },
            {
              id: 129960444,
              predicate: "userStatusLastWeek",
              params: [],
              type: "UserStatus",
            },
            {
              id: 2011940674,
              predicate: "userStatusLastMonth",
              params: [],
              type: "UserStatus",
            },
            {
              id: -298113238,
              predicate: "updatePrivacy",
              params: [
                { name: "key", type: "PrivacyKey" },
                { name: "rules", type: "Vector<PrivacyRule>" },
              ],
              type: "Update",
            },
            {
              id: 1335282456,
              predicate: "inputPrivacyKeyStatusTimestamp",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: -1137792208,
              predicate: "privacyKeyStatusTimestamp",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: 218751099,
              predicate: "inputPrivacyValueAllowContacts",
              params: [],
              type: "InputPrivacyRule",
            },
            {
              id: 407582158,
              predicate: "inputPrivacyValueAllowAll",
              params: [],
              type: "InputPrivacyRule",
            },
            {
              id: 320652927,
              predicate: "inputPrivacyValueAllowUsers",
              params: [{ name: "users", type: "Vector<InputUser>" }],
              type: "InputPrivacyRule",
            },
            {
              id: 195371015,
              predicate: "inputPrivacyValueDisallowContacts",
              params: [],
              type: "InputPrivacyRule",
            },
            {
              id: -697604407,
              predicate: "inputPrivacyValueDisallowAll",
              params: [],
              type: "InputPrivacyRule",
            },
            {
              id: -1877932953,
              predicate: "inputPrivacyValueDisallowUsers",
              params: [{ name: "users", type: "Vector<InputUser>" }],
              type: "InputPrivacyRule",
            },
            {
              id: -123988,
              predicate: "privacyValueAllowContacts",
              params: [],
              type: "PrivacyRule",
            },
            {
              id: 1698855810,
              predicate: "privacyValueAllowAll",
              params: [],
              type: "PrivacyRule",
            },
            {
              id: -1198497870,
              predicate: "privacyValueAllowUsers",
              params: [{ name: "users", type: "Vector<long>" }],
              type: "PrivacyRule",
            },
            {
              id: -125240806,
              predicate: "privacyValueDisallowContacts",
              params: [],
              type: "PrivacyRule",
            },
            {
              id: -1955338397,
              predicate: "privacyValueDisallowAll",
              params: [],
              type: "PrivacyRule",
            },
            {
              id: -463335103,
              predicate: "privacyValueDisallowUsers",
              params: [{ name: "users", type: "Vector<long>" }],
              type: "PrivacyRule",
            },
            {
              id: 1352683077,
              predicate: "account.privacyRules",
              params: [
                { name: "rules", type: "Vector<PrivacyRule>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "account.PrivacyRules",
            },
            {
              id: -1194283041,
              predicate: "accountDaysTTL",
              params: [{ name: "days", type: "int" }],
              type: "AccountDaysTTL",
            },
            {
              id: 88680979,
              predicate: "updateUserPhone",
              params: [
                { name: "user_id", type: "long" },
                { name: "phone", type: "string" },
              ],
              type: "Update",
            },
            {
              id: 1815593308,
              predicate: "documentAttributeImageSize",
              params: [
                { name: "w", type: "int" },
                { name: "h", type: "int" },
              ],
              type: "DocumentAttribute",
            },
            {
              id: 297109817,
              predicate: "documentAttributeAnimated",
              params: [],
              type: "DocumentAttribute",
            },
            {
              id: 1662637586,
              predicate: "documentAttributeSticker",
              params: [
                { name: "flags", type: "#" },
                { name: "mask", type: "flags.1?true" },
                { name: "alt", type: "string" },
                { name: "stickerset", type: "InputStickerSet" },
                { name: "mask_coords", type: "flags.0?MaskCoords" },
              ],
              type: "DocumentAttribute",
            },
            {
              id: 250621158,
              predicate: "documentAttributeVideo",
              params: [
                { name: "flags", type: "#" },
                { name: "round_message", type: "flags.0?true" },
                { name: "supports_streaming", type: "flags.1?true" },
                { name: "duration", type: "int" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
              ],
              type: "DocumentAttribute",
            },
            {
              id: -1739392570,
              predicate: "documentAttributeAudio",
              params: [
                { name: "flags", type: "#" },
                { name: "voice", type: "flags.10?true" },
                { name: "duration", type: "int" },
                { name: "title", type: "flags.0?string" },
                { name: "performer", type: "flags.1?string" },
                { name: "waveform", type: "flags.2?bytes" },
              ],
              type: "DocumentAttribute",
            },
            {
              id: 358154344,
              predicate: "documentAttributeFilename",
              params: [{ name: "file_name", type: "string" }],
              type: "DocumentAttribute",
            },
            {
              id: -244016606,
              predicate: "messages.stickersNotModified",
              params: [],
              type: "messages.Stickers",
            },
            {
              id: 816245886,
              predicate: "messages.stickers",
              params: [
                { name: "hash", type: "long" },
                { name: "stickers", type: "Vector<Document>" },
              ],
              type: "messages.Stickers",
            },
            {
              id: 313694676,
              predicate: "stickerPack",
              params: [
                { name: "emoticon", type: "string" },
                { name: "documents", type: "Vector<long>" },
              ],
              type: "StickerPack",
            },
            {
              id: -395967805,
              predicate: "messages.allStickersNotModified",
              params: [],
              type: "messages.AllStickers",
            },
            {
              id: -843329861,
              predicate: "messages.allStickers",
              params: [
                { name: "hash", type: "long" },
                { name: "sets", type: "Vector<StickerSet>" },
              ],
              type: "messages.AllStickers",
            },
            {
              id: -1667805217,
              predicate: "updateReadHistoryInbox",
              params: [
                { name: "flags", type: "#" },
                { name: "folder_id", type: "flags.0?int" },
                { name: "peer", type: "Peer" },
                { name: "max_id", type: "int" },
                { name: "still_unread_count", type: "int" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 791617983,
              predicate: "updateReadHistoryOutbox",
              params: [
                { name: "peer", type: "Peer" },
                { name: "max_id", type: "int" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -2066640507,
              predicate: "messages.affectedMessages",
              params: [
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "messages.AffectedMessages",
            },
            {
              id: 2139689491,
              predicate: "updateWebPage",
              params: [
                { name: "webpage", type: "WebPage" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -350980120,
              predicate: "webPageEmpty",
              params: [{ name: "id", type: "long" }],
              type: "WebPage",
            },
            {
              id: -981018084,
              predicate: "webPagePending",
              params: [
                { name: "id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "WebPage",
            },
            {
              id: -392411726,
              predicate: "webPage",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "long" },
                { name: "url", type: "string" },
                { name: "display_url", type: "string" },
                { name: "hash", type: "int" },
                { name: "type", type: "flags.0?string" },
                { name: "site_name", type: "flags.1?string" },
                { name: "title", type: "flags.2?string" },
                { name: "description", type: "flags.3?string" },
                { name: "photo", type: "flags.4?Photo" },
                { name: "embed_url", type: "flags.5?string" },
                { name: "embed_type", type: "flags.5?string" },
                { name: "embed_width", type: "flags.6?int" },
                { name: "embed_height", type: "flags.6?int" },
                { name: "duration", type: "flags.7?int" },
                { name: "author", type: "flags.8?string" },
                { name: "document", type: "flags.9?Document" },
                { name: "cached_page", type: "flags.10?Page" },
                {
                  name: "attributes",
                  type: "flags.12?Vector<WebPageAttribute>",
                },
              ],
              type: "WebPage",
            },
            {
              id: -1557277184,
              predicate: "messageMediaWebPage",
              params: [{ name: "webpage", type: "WebPage" }],
              type: "MessageMedia",
            },
            {
              id: -1392388579,
              predicate: "authorization",
              params: [
                { name: "flags", type: "#" },
                { name: "current", type: "flags.0?true" },
                { name: "official_app", type: "flags.1?true" },
                { name: "password_pending", type: "flags.2?true" },
                { name: "encrypted_requests_disabled", type: "flags.3?true" },
                { name: "call_requests_disabled", type: "flags.4?true" },
                { name: "hash", type: "long" },
                { name: "device_model", type: "string" },
                { name: "platform", type: "string" },
                { name: "system_version", type: "string" },
                { name: "api_id", type: "int" },
                { name: "app_name", type: "string" },
                { name: "app_version", type: "string" },
                { name: "date_created", type: "int" },
                { name: "date_active", type: "int" },
                { name: "ip", type: "string" },
                { name: "country", type: "string" },
                { name: "region", type: "string" },
              ],
              type: "Authorization",
            },
            {
              id: 1275039392,
              predicate: "account.authorizations",
              params: [
                { name: "authorization_ttl_days", type: "int" },
                { name: "authorizations", type: "Vector<Authorization>" },
              ],
              type: "account.Authorizations",
            },
            {
              id: 408623183,
              predicate: "account.password",
              params: [
                { name: "flags", type: "#" },
                { name: "has_recovery", type: "flags.0?true" },
                { name: "has_secure_values", type: "flags.1?true" },
                { name: "has_password", type: "flags.2?true" },
                { name: "current_algo", type: "flags.2?PasswordKdfAlgo" },
                { name: "srp_B", type: "flags.2?bytes" },
                { name: "srp_id", type: "flags.2?long" },
                { name: "hint", type: "flags.3?string" },
                { name: "email_unconfirmed_pattern", type: "flags.4?string" },
                { name: "new_algo", type: "PasswordKdfAlgo" },
                { name: "new_secure_algo", type: "SecurePasswordKdfAlgo" },
                { name: "secure_random", type: "bytes" },
                { name: "pending_reset_date", type: "flags.5?int" },
              ],
              type: "account.Password",
            },
            {
              id: -1705233435,
              predicate: "account.passwordSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "email", type: "flags.0?string" },
                {
                  name: "secure_settings",
                  type: "flags.1?SecureSecretSettings",
                },
              ],
              type: "account.PasswordSettings",
            },
            {
              id: -1036572727,
              predicate: "account.passwordInputSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "new_algo", type: "flags.0?PasswordKdfAlgo" },
                { name: "new_password_hash", type: "flags.0?bytes" },
                { name: "hint", type: "flags.0?string" },
                { name: "email", type: "flags.1?string" },
                {
                  name: "new_secure_settings",
                  type: "flags.2?SecureSecretSettings",
                },
              ],
              type: "account.PasswordInputSettings",
            },
            {
              id: 326715557,
              predicate: "auth.passwordRecovery",
              params: [{ name: "email_pattern", type: "string" }],
              type: "auth.PasswordRecovery",
            },
            {
              id: -1052959727,
              predicate: "inputMediaVenue",
              params: [
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "title", type: "string" },
                { name: "address", type: "string" },
                { name: "provider", type: "string" },
                { name: "venue_id", type: "string" },
                { name: "venue_type", type: "string" },
              ],
              type: "InputMedia",
            },
            {
              id: 784356159,
              predicate: "messageMediaVenue",
              params: [
                { name: "geo", type: "GeoPoint" },
                { name: "title", type: "string" },
                { name: "address", type: "string" },
                { name: "provider", type: "string" },
                { name: "venue_id", type: "string" },
                { name: "venue_type", type: "string" },
              ],
              type: "MessageMedia",
            },
            {
              id: -1551583367,
              predicate: "receivedNotifyMessage",
              params: [
                { name: "id", type: "int" },
                { name: "flags", type: "int" },
              ],
              type: "ReceivedNotifyMessage",
            },
            {
              id: 179611673,
              predicate: "chatInviteExported",
              params: [
                { name: "flags", type: "#" },
                { name: "revoked", type: "flags.0?true" },
                { name: "permanent", type: "flags.5?true" },
                { name: "request_needed", type: "flags.6?true" },
                { name: "link", type: "string" },
                { name: "admin_id", type: "long" },
                { name: "date", type: "int" },
                { name: "start_date", type: "flags.4?int" },
                { name: "expire_date", type: "flags.1?int" },
                { name: "usage_limit", type: "flags.2?int" },
                { name: "usage", type: "flags.3?int" },
                { name: "requested", type: "flags.7?int" },
                { name: "title", type: "flags.8?string" },
              ],
              type: "ExportedChatInvite",
            },
            {
              id: 1516793212,
              predicate: "chatInviteAlready",
              params: [{ name: "chat", type: "Chat" }],
              type: "ChatInvite",
            },
            {
              id: 806110401,
              predicate: "chatInvite",
              params: [
                { name: "flags", type: "#" },
                { name: "channel", type: "flags.0?true" },
                { name: "broadcast", type: "flags.1?true" },
                { name: "public", type: "flags.2?true" },
                { name: "megagroup", type: "flags.3?true" },
                { name: "request_needed", type: "flags.6?true" },
                { name: "title", type: "string" },
                { name: "about", type: "flags.5?string" },
                { name: "photo", type: "Photo" },
                { name: "participants_count", type: "int" },
                { name: "participants", type: "flags.4?Vector<User>" },
              ],
              type: "ChatInvite",
            },
            {
              id: 51520707,
              predicate: "messageActionChatJoinedByLink",
              params: [{ name: "inviter_id", type: "long" }],
              type: "MessageAction",
            },
            {
              id: 1757493555,
              predicate: "updateReadMessagesContents",
              params: [
                { name: "messages", type: "Vector<int>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -4838507,
              predicate: "inputStickerSetEmpty",
              params: [],
              type: "InputStickerSet",
            },
            {
              id: -1645763991,
              predicate: "inputStickerSetID",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputStickerSet",
            },
            {
              id: -2044933984,
              predicate: "inputStickerSetShortName",
              params: [{ name: "short_name", type: "string" }],
              type: "InputStickerSet",
            },
            {
              id: -673242758,
              predicate: "stickerSet",
              params: [
                { name: "flags", type: "#" },
                { name: "archived", type: "flags.1?true" },
                { name: "official", type: "flags.2?true" },
                { name: "masks", type: "flags.3?true" },
                { name: "animated", type: "flags.5?true" },
                { name: "videos", type: "flags.6?true" },
                { name: "installed_date", type: "flags.0?int" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "title", type: "string" },
                { name: "short_name", type: "string" },
                { name: "thumbs", type: "flags.4?Vector<PhotoSize>" },
                { name: "thumb_dc_id", type: "flags.4?int" },
                { name: "thumb_version", type: "flags.4?int" },
                { name: "count", type: "int" },
                { name: "hash", type: "int" },
              ],
              type: "StickerSet",
            },
            {
              id: -1240849242,
              predicate: "messages.stickerSet",
              params: [
                { name: "set", type: "StickerSet" },
                { name: "packs", type: "Vector<StickerPack>" },
                { name: "documents", type: "Vector<Document>" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: 1073147056,
              predicate: "user",
              params: [
                { name: "flags", type: "#" },
                { name: "self", type: "flags.10?true" },
                { name: "contact", type: "flags.11?true" },
                { name: "mutual_contact", type: "flags.12?true" },
                { name: "deleted", type: "flags.13?true" },
                { name: "bot", type: "flags.14?true" },
                { name: "bot_chat_history", type: "flags.15?true" },
                { name: "bot_nochats", type: "flags.16?true" },
                { name: "verified", type: "flags.17?true" },
                { name: "restricted", type: "flags.18?true" },
                { name: "min", type: "flags.20?true" },
                { name: "bot_inline_geo", type: "flags.21?true" },
                { name: "support", type: "flags.23?true" },
                { name: "scam", type: "flags.24?true" },
                { name: "apply_min_photo", type: "flags.25?true" },
                { name: "fake", type: "flags.26?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "flags.0?long" },
                { name: "first_name", type: "flags.1?string" },
                { name: "last_name", type: "flags.2?string" },
                { name: "username", type: "flags.3?string" },
                { name: "phone", type: "flags.4?string" },
                { name: "photo", type: "flags.5?UserProfilePhoto" },
                { name: "status", type: "flags.6?UserStatus" },
                { name: "bot_info_version", type: "flags.14?int" },
                {
                  name: "restriction_reason",
                  type: "flags.18?Vector<RestrictionReason>",
                },
                { name: "bot_inline_placeholder", type: "flags.19?string" },
                { name: "lang_code", type: "flags.22?string" },
              ],
              type: "User",
            },
            {
              id: -1032140601,
              predicate: "botCommand",
              params: [
                { name: "command", type: "string" },
                { name: "description", type: "string" },
              ],
              type: "BotCommand",
            },
            {
              id: 460632885,
              predicate: "botInfo",
              params: [
                { name: "user_id", type: "long" },
                { name: "description", type: "string" },
                { name: "commands", type: "Vector<BotCommand>" },
              ],
              type: "BotInfo",
            },
            {
              id: -1560655744,
              predicate: "keyboardButton",
              params: [{ name: "text", type: "string" }],
              type: "KeyboardButton",
            },
            {
              id: 2002815875,
              predicate: "keyboardButtonRow",
              params: [{ name: "buttons", type: "Vector<KeyboardButton>" }],
              type: "KeyboardButtonRow",
            },
            {
              id: -1606526075,
              predicate: "replyKeyboardHide",
              params: [
                { name: "flags", type: "#" },
                { name: "selective", type: "flags.2?true" },
              ],
              type: "ReplyMarkup",
            },
            {
              id: -2035021048,
              predicate: "replyKeyboardForceReply",
              params: [
                { name: "flags", type: "#" },
                { name: "single_use", type: "flags.1?true" },
                { name: "selective", type: "flags.2?true" },
                { name: "placeholder", type: "flags.3?string" },
              ],
              type: "ReplyMarkup",
            },
            {
              id: -2049074735,
              predicate: "replyKeyboardMarkup",
              params: [
                { name: "flags", type: "#" },
                { name: "resize", type: "flags.0?true" },
                { name: "single_use", type: "flags.1?true" },
                { name: "selective", type: "flags.2?true" },
                { name: "rows", type: "Vector<KeyboardButtonRow>" },
                { name: "placeholder", type: "flags.3?string" },
              ],
              type: "ReplyMarkup",
            },
            {
              id: -571955892,
              predicate: "inputPeerUser",
              params: [
                { name: "user_id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputPeer",
            },
            {
              id: -233744186,
              predicate: "inputUser",
              params: [
                { name: "user_id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputUser",
            },
            {
              id: -1148011883,
              predicate: "messageEntityUnknown",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -100378723,
              predicate: "messageEntityMention",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1868782349,
              predicate: "messageEntityHashtag",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1827637959,
              predicate: "messageEntityBotCommand",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1859134776,
              predicate: "messageEntityUrl",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1692693954,
              predicate: "messageEntityEmail",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -1117713463,
              predicate: "messageEntityBold",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -2106619040,
              predicate: "messageEntityItalic",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 681706865,
              predicate: "messageEntityCode",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1938967520,
              predicate: "messageEntityPre",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
                { name: "language", type: "string" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1990644519,
              predicate: "messageEntityTextUrl",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
                { name: "url", type: "string" },
              ],
              type: "MessageEntity",
            },
            {
              id: -1877614335,
              predicate: "updateShortSentMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "out", type: "flags.1?true" },
                { name: "id", type: "int" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
                { name: "date", type: "int" },
                { name: "media", type: "flags.9?MessageMedia" },
                { name: "entities", type: "flags.7?Vector<MessageEntity>" },
                { name: "ttl_period", type: "flags.25?int" },
              ],
              type: "Updates",
            },
            {
              id: -292807034,
              predicate: "inputChannelEmpty",
              params: [],
              type: "InputChannel",
            },
            {
              id: -212145112,
              predicate: "inputChannel",
              params: [
                { name: "channel_id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputChannel",
            },
            {
              id: -1566230754,
              predicate: "peerChannel",
              params: [{ name: "channel_id", type: "long" }],
              type: "Peer",
            },
            {
              id: 666680316,
              predicate: "inputPeerChannel",
              params: [
                { name: "channel_id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputPeer",
            },
            {
              id: -2107528095,
              predicate: "channel",
              params: [
                { name: "flags", type: "#" },
                { name: "creator", type: "flags.0?true" },
                { name: "left", type: "flags.2?true" },
                { name: "broadcast", type: "flags.5?true" },
                { name: "verified", type: "flags.7?true" },
                { name: "megagroup", type: "flags.8?true" },
                { name: "restricted", type: "flags.9?true" },
                { name: "signatures", type: "flags.11?true" },
                { name: "min", type: "flags.12?true" },
                { name: "scam", type: "flags.19?true" },
                { name: "has_link", type: "flags.20?true" },
                { name: "has_geo", type: "flags.21?true" },
                { name: "slowmode_enabled", type: "flags.22?true" },
                { name: "call_active", type: "flags.23?true" },
                { name: "call_not_empty", type: "flags.24?true" },
                { name: "fake", type: "flags.25?true" },
                { name: "gigagroup", type: "flags.26?true" },
                { name: "noforwards", type: "flags.27?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "flags.13?long" },
                { name: "title", type: "string" },
                { name: "username", type: "flags.6?string" },
                { name: "photo", type: "ChatPhoto" },
                { name: "date", type: "int" },
                {
                  name: "restriction_reason",
                  type: "flags.9?Vector<RestrictionReason>",
                },
                { name: "admin_rights", type: "flags.14?ChatAdminRights" },
                { name: "banned_rights", type: "flags.15?ChatBannedRights" },
                {
                  name: "default_banned_rights",
                  type: "flags.18?ChatBannedRights",
                },
                { name: "participants_count", type: "flags.17?int" },
              ],
              type: "Chat",
            },
            {
              id: 399807445,
              predicate: "channelForbidden",
              params: [
                { name: "flags", type: "#" },
                { name: "broadcast", type: "flags.5?true" },
                { name: "megagroup", type: "flags.8?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "title", type: "string" },
                { name: "until_date", type: "flags.16?int" },
              ],
              type: "Chat",
            },
            {
              id: 2131196633,
              predicate: "contacts.resolvedPeer",
              params: [
                { name: "peer", type: "Peer" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.ResolvedPeer",
            },
            {
              id: -516145888,
              predicate: "channelFull",
              params: [
                { name: "flags", type: "#" },
                { name: "can_view_participants", type: "flags.3?true" },
                { name: "can_set_username", type: "flags.6?true" },
                { name: "can_set_stickers", type: "flags.7?true" },
                { name: "hidden_prehistory", type: "flags.10?true" },
                { name: "can_set_location", type: "flags.16?true" },
                { name: "has_scheduled", type: "flags.19?true" },
                { name: "can_view_stats", type: "flags.20?true" },
                { name: "blocked", type: "flags.22?true" },
                { name: "id", type: "long" },
                { name: "about", type: "string" },
                { name: "participants_count", type: "flags.0?int" },
                { name: "admins_count", type: "flags.1?int" },
                { name: "kicked_count", type: "flags.2?int" },
                { name: "banned_count", type: "flags.2?int" },
                { name: "online_count", type: "flags.13?int" },
                { name: "read_inbox_max_id", type: "int" },
                { name: "read_outbox_max_id", type: "int" },
                { name: "unread_count", type: "int" },
                { name: "chat_photo", type: "Photo" },
                { name: "notify_settings", type: "PeerNotifySettings" },
                {
                  name: "exported_invite",
                  type: "flags.23?ExportedChatInvite",
                },
                { name: "bot_info", type: "Vector<BotInfo>" },
                { name: "migrated_from_chat_id", type: "flags.4?long" },
                { name: "migrated_from_max_id", type: "flags.4?int" },
                { name: "pinned_msg_id", type: "flags.5?int" },
                { name: "stickerset", type: "flags.8?StickerSet" },
                { name: "available_min_id", type: "flags.9?int" },
                { name: "folder_id", type: "flags.11?int" },
                { name: "linked_chat_id", type: "flags.14?long" },
                { name: "location", type: "flags.15?ChannelLocation" },
                { name: "slowmode_seconds", type: "flags.17?int" },
                { name: "slowmode_next_send_date", type: "flags.18?int" },
                { name: "stats_dc", type: "flags.12?int" },
                { name: "pts", type: "int" },
                { name: "call", type: "flags.21?InputGroupCall" },
                { name: "ttl_period", type: "flags.24?int" },
                {
                  name: "pending_suggestions",
                  type: "flags.25?Vector<string>",
                },
                { name: "groupcall_default_join_as", type: "flags.26?Peer" },
                { name: "theme_emoticon", type: "flags.27?string" },
                { name: "requests_pending", type: "flags.28?int" },
                { name: "recent_requesters", type: "flags.28?Vector<long>" },
                { name: "default_send_as", type: "flags.29?Peer" },
                {
                  name: "available_reactions",
                  type: "flags.30?Vector<string>",
                },
              ],
              type: "ChatFull",
            },
            {
              id: 182649427,
              predicate: "messageRange",
              params: [
                { name: "min_id", type: "int" },
                { name: "max_id", type: "int" },
              ],
              type: "MessageRange",
            },
            {
              id: 1682413576,
              predicate: "messages.channelMessages",
              params: [
                { name: "flags", type: "#" },
                { name: "inexact", type: "flags.1?true" },
                { name: "pts", type: "int" },
                { name: "count", type: "int" },
                { name: "offset_id_offset", type: "flags.2?int" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1781355374,
              predicate: "messageActionChannelCreate",
              params: [{ name: "title", type: "string" }],
              type: "MessageAction",
            },
            {
              id: 277713951,
              predicate: "updateChannelTooLong",
              params: [
                { name: "flags", type: "#" },
                { name: "channel_id", type: "long" },
                { name: "pts", type: "flags.0?int" },
              ],
              type: "Update",
            },
            {
              id: 1666927625,
              predicate: "updateChannel",
              params: [{ name: "channel_id", type: "long" }],
              type: "Update",
            },
            {
              id: 1656358105,
              predicate: "updateNewChannelMessage",
              params: [
                { name: "message", type: "Message" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1842450928,
              predicate: "updateReadChannelInbox",
              params: [
                { name: "flags", type: "#" },
                { name: "folder_id", type: "flags.0?int" },
                { name: "channel_id", type: "long" },
                { name: "max_id", type: "int" },
                { name: "still_unread_count", type: "int" },
                { name: "pts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1020437742,
              predicate: "updateDeleteChannelMessages",
              params: [
                { name: "channel_id", type: "long" },
                { name: "messages", type: "Vector<int>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -232346616,
              predicate: "updateChannelMessageViews",
              params: [
                { name: "channel_id", type: "long" },
                { name: "id", type: "int" },
                { name: "views", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 1041346555,
              predicate: "updates.channelDifferenceEmpty",
              params: [
                { name: "flags", type: "#" },
                { name: "final", type: "flags.0?true" },
                { name: "pts", type: "int" },
                { name: "timeout", type: "flags.1?int" },
              ],
              type: "updates.ChannelDifference",
            },
            {
              id: -1531132162,
              predicate: "updates.channelDifferenceTooLong",
              params: [
                { name: "flags", type: "#" },
                { name: "final", type: "flags.0?true" },
                { name: "timeout", type: "flags.1?int" },
                { name: "dialog", type: "Dialog" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "updates.ChannelDifference",
            },
            {
              id: 543450958,
              predicate: "updates.channelDifference",
              params: [
                { name: "flags", type: "#" },
                { name: "final", type: "flags.0?true" },
                { name: "pts", type: "int" },
                { name: "timeout", type: "flags.1?int" },
                { name: "new_messages", type: "Vector<Message>" },
                { name: "other_updates", type: "Vector<Update>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "updates.ChannelDifference",
            },
            {
              id: -1798033689,
              predicate: "channelMessagesFilterEmpty",
              params: [],
              type: "ChannelMessagesFilter",
            },
            {
              id: -847783593,
              predicate: "channelMessagesFilter",
              params: [
                { name: "flags", type: "#" },
                { name: "exclude_new_messages", type: "flags.1?true" },
                { name: "ranges", type: "Vector<MessageRange>" },
              ],
              type: "ChannelMessagesFilter",
            },
            {
              id: -1072953408,
              predicate: "channelParticipant",
              params: [
                { name: "user_id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "ChannelParticipant",
            },
            {
              id: 900251559,
              predicate: "channelParticipantSelf",
              params: [
                { name: "flags", type: "#" },
                { name: "via_request", type: "flags.0?true" },
                { name: "user_id", type: "long" },
                { name: "inviter_id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "ChannelParticipant",
            },
            {
              id: 803602899,
              predicate: "channelParticipantCreator",
              params: [
                { name: "flags", type: "#" },
                { name: "user_id", type: "long" },
                { name: "admin_rights", type: "ChatAdminRights" },
                { name: "rank", type: "flags.0?string" },
              ],
              type: "ChannelParticipant",
            },
            {
              id: -566281095,
              predicate: "channelParticipantsRecent",
              params: [],
              type: "ChannelParticipantsFilter",
            },
            {
              id: -1268741783,
              predicate: "channelParticipantsAdmins",
              params: [],
              type: "ChannelParticipantsFilter",
            },
            {
              id: -1548400251,
              predicate: "channelParticipantsKicked",
              params: [{ name: "q", type: "string" }],
              type: "ChannelParticipantsFilter",
            },
            {
              id: -1699676497,
              predicate: "channels.channelParticipants",
              params: [
                { name: "count", type: "int" },
                { name: "participants", type: "Vector<ChannelParticipant>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "channels.ChannelParticipants",
            },
            {
              id: -541588713,
              predicate: "channels.channelParticipant",
              params: [
                { name: "participant", type: "ChannelParticipant" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "channels.ChannelParticipant",
            },
            {
              id: -462696732,
              predicate: "chatParticipantCreator",
              params: [{ name: "user_id", type: "long" }],
              type: "ChatParticipant",
            },
            {
              id: -1600962725,
              predicate: "chatParticipantAdmin",
              params: [
                { name: "user_id", type: "long" },
                { name: "inviter_id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "ChatParticipant",
            },
            {
              id: -674602590,
              predicate: "updateChatParticipantAdmin",
              params: [
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "is_admin", type: "Bool" },
                { name: "version", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -519864430,
              predicate: "messageActionChatMigrateTo",
              params: [{ name: "channel_id", type: "long" }],
              type: "MessageAction",
            },
            {
              id: -365344535,
              predicate: "messageActionChannelMigrateFrom",
              params: [
                { name: "title", type: "string" },
                { name: "chat_id", type: "long" },
              ],
              type: "MessageAction",
            },
            {
              id: -1328445861,
              predicate: "channelParticipantsBots",
              params: [],
              type: "ChannelParticipantsFilter",
            },
            {
              id: 2013922064,
              predicate: "help.termsOfService",
              params: [
                { name: "flags", type: "#" },
                { name: "popup", type: "flags.0?true" },
                { name: "id", type: "DataJSON" },
                { name: "text", type: "string" },
                { name: "entities", type: "Vector<MessageEntity>" },
                { name: "min_age_confirm", type: "flags.1?int" },
              ],
              type: "help.TermsOfService",
            },
            {
              id: 1753886890,
              predicate: "updateNewStickerSet",
              params: [{ name: "stickerset", type: "messages.StickerSet" }],
              type: "Update",
            },
            {
              id: 196268545,
              predicate: "updateStickerSetsOrder",
              params: [
                { name: "flags", type: "#" },
                { name: "masks", type: "flags.0?true" },
                { name: "order", type: "Vector<long>" },
              ],
              type: "Update",
            },
            {
              id: 1135492588,
              predicate: "updateStickerSets",
              params: [],
              type: "Update",
            },
            {
              id: -402498398,
              predicate: "messages.savedGifsNotModified",
              params: [],
              type: "messages.SavedGifs",
            },
            {
              id: -2069878259,
              predicate: "messages.savedGifs",
              params: [
                { name: "hash", type: "long" },
                { name: "gifs", type: "Vector<Document>" },
              ],
              type: "messages.SavedGifs",
            },
            {
              id: -1821035490,
              predicate: "updateSavedGifs",
              params: [],
              type: "Update",
            },
            {
              id: 864077702,
              predicate: "inputBotInlineMessageMediaAuto",
              params: [
                { name: "flags", type: "#" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: 1036876423,
              predicate: "inputBotInlineMessageText",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.0?true" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: -2000710887,
              predicate: "inputBotInlineResult",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "string" },
                { name: "type", type: "string" },
                { name: "title", type: "flags.1?string" },
                { name: "description", type: "flags.2?string" },
                { name: "url", type: "flags.3?string" },
                { name: "thumb", type: "flags.4?InputWebDocument" },
                { name: "content", type: "flags.5?InputWebDocument" },
                { name: "send_message", type: "InputBotInlineMessage" },
              ],
              type: "InputBotInlineResult",
            },
            {
              id: 1984755728,
              predicate: "botInlineMessageMediaAuto",
              params: [
                { name: "flags", type: "#" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: -1937807902,
              predicate: "botInlineMessageText",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.0?true" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: 295067450,
              predicate: "botInlineResult",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "string" },
                { name: "type", type: "string" },
                { name: "title", type: "flags.1?string" },
                { name: "description", type: "flags.2?string" },
                { name: "url", type: "flags.3?string" },
                { name: "thumb", type: "flags.4?WebDocument" },
                { name: "content", type: "flags.5?WebDocument" },
                { name: "send_message", type: "BotInlineMessage" },
              ],
              type: "BotInlineResult",
            },
            {
              id: -1803769784,
              predicate: "messages.botResults",
              params: [
                { name: "flags", type: "#" },
                { name: "gallery", type: "flags.0?true" },
                { name: "query_id", type: "long" },
                { name: "next_offset", type: "flags.1?string" },
                { name: "switch_pm", type: "flags.2?InlineBotSwitchPM" },
                { name: "results", type: "Vector<BotInlineResult>" },
                { name: "cache_time", type: "int" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.BotResults",
            },
            {
              id: 1232025500,
              predicate: "updateBotInlineQuery",
              params: [
                { name: "flags", type: "#" },
                { name: "query_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "query", type: "string" },
                { name: "geo", type: "flags.0?GeoPoint" },
                { name: "peer_type", type: "flags.1?InlineQueryPeerType" },
                { name: "offset", type: "string" },
              ],
              type: "Update",
            },
            {
              id: 317794823,
              predicate: "updateBotInlineSend",
              params: [
                { name: "flags", type: "#" },
                { name: "user_id", type: "long" },
                { name: "query", type: "string" },
                { name: "geo", type: "flags.0?GeoPoint" },
                { name: "id", type: "string" },
                { name: "msg_id", type: "flags.1?InputBotInlineMessageID" },
              ],
              type: "Update",
            },
            {
              id: 1358283666,
              predicate: "inputMessagesFilterVoice",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: 928101534,
              predicate: "inputMessagesFilterMusic",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1107622874,
              predicate: "inputPrivacyKeyChatInvite",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: 1343122938,
              predicate: "privacyKeyChatInvite",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: 1571494644,
              predicate: "exportedMessageLink",
              params: [
                { name: "link", type: "string" },
                { name: "html", type: "string" },
              ],
              type: "ExportedMessageLink",
            },
            {
              id: 1601666510,
              predicate: "messageFwdHeader",
              params: [
                { name: "flags", type: "#" },
                { name: "imported", type: "flags.7?true" },
                { name: "from_id", type: "flags.0?Peer" },
                { name: "from_name", type: "flags.5?string" },
                { name: "date", type: "int" },
                { name: "channel_post", type: "flags.2?int" },
                { name: "post_author", type: "flags.3?string" },
                { name: "saved_from_peer", type: "flags.4?Peer" },
                { name: "saved_from_msg_id", type: "flags.4?int" },
                { name: "psa_type", type: "flags.6?string" },
              ],
              type: "MessageFwdHeader",
            },
            {
              id: 457133559,
              predicate: "updateEditChannelMessage",
              params: [
                { name: "message", type: "Message" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1799538451,
              predicate: "messageActionPinMessage",
              params: [],
              type: "MessageAction",
            },
            {
              id: 1923290508,
              predicate: "auth.codeTypeSms",
              params: [],
              type: "auth.CodeType",
            },
            {
              id: 1948046307,
              predicate: "auth.codeTypeCall",
              params: [],
              type: "auth.CodeType",
            },
            {
              id: 577556219,
              predicate: "auth.codeTypeFlashCall",
              params: [],
              type: "auth.CodeType",
            },
            {
              id: 1035688326,
              predicate: "auth.sentCodeTypeApp",
              params: [{ name: "length", type: "int" }],
              type: "auth.SentCodeType",
            },
            {
              id: -1073693790,
              predicate: "auth.sentCodeTypeSms",
              params: [{ name: "length", type: "int" }],
              type: "auth.SentCodeType",
            },
            {
              id: 1398007207,
              predicate: "auth.sentCodeTypeCall",
              params: [{ name: "length", type: "int" }],
              type: "auth.SentCodeType",
            },
            {
              id: -1425815847,
              predicate: "auth.sentCodeTypeFlashCall",
              params: [{ name: "pattern", type: "string" }],
              type: "auth.SentCodeType",
            },
            {
              id: 629866245,
              predicate: "keyboardButtonUrl",
              params: [
                { name: "text", type: "string" },
                { name: "url", type: "string" },
              ],
              type: "KeyboardButton",
            },
            {
              id: 901503851,
              predicate: "keyboardButtonCallback",
              params: [
                { name: "flags", type: "#" },
                { name: "requires_password", type: "flags.0?true" },
                { name: "text", type: "string" },
                { name: "data", type: "bytes" },
              ],
              type: "KeyboardButton",
            },
            {
              id: -1318425559,
              predicate: "keyboardButtonRequestPhone",
              params: [{ name: "text", type: "string" }],
              type: "KeyboardButton",
            },
            {
              id: -59151553,
              predicate: "keyboardButtonRequestGeoLocation",
              params: [{ name: "text", type: "string" }],
              type: "KeyboardButton",
            },
            {
              id: 90744648,
              predicate: "keyboardButtonSwitchInline",
              params: [
                { name: "flags", type: "#" },
                { name: "same_peer", type: "flags.0?true" },
                { name: "text", type: "string" },
                { name: "query", type: "string" },
              ],
              type: "KeyboardButton",
            },
            {
              id: 1218642516,
              predicate: "replyInlineMarkup",
              params: [{ name: "rows", type: "Vector<KeyboardButtonRow>" }],
              type: "ReplyMarkup",
            },
            {
              id: 911761060,
              predicate: "messages.botCallbackAnswer",
              params: [
                { name: "flags", type: "#" },
                { name: "alert", type: "flags.1?true" },
                { name: "has_url", type: "flags.3?true" },
                { name: "native_ui", type: "flags.4?true" },
                { name: "message", type: "flags.0?string" },
                { name: "url", type: "flags.2?string" },
                { name: "cache_time", type: "int" },
              ],
              type: "messages.BotCallbackAnswer",
            },
            {
              id: -1177566067,
              predicate: "updateBotCallbackQuery",
              params: [
                { name: "flags", type: "#" },
                { name: "query_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "peer", type: "Peer" },
                { name: "msg_id", type: "int" },
                { name: "chat_instance", type: "long" },
                { name: "data", type: "flags.0?bytes" },
                { name: "game_short_name", type: "flags.1?string" },
              ],
              type: "Update",
            },
            {
              id: 649453030,
              predicate: "messages.messageEditData",
              params: [
                { name: "flags", type: "#" },
                { name: "caption", type: "flags.0?true" },
              ],
              type: "messages.MessageEditData",
            },
            {
              id: -469536605,
              predicate: "updateEditMessage",
              params: [
                { name: "message", type: "Message" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1768777083,
              predicate: "inputBotInlineMessageMediaGeo",
              params: [
                { name: "flags", type: "#" },
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "heading", type: "flags.0?int" },
                { name: "period", type: "flags.1?int" },
                { name: "proximity_notification_radius", type: "flags.3?int" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: 1098628881,
              predicate: "inputBotInlineMessageMediaVenue",
              params: [
                { name: "flags", type: "#" },
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "title", type: "string" },
                { name: "address", type: "string" },
                { name: "provider", type: "string" },
                { name: "venue_id", type: "string" },
                { name: "venue_type", type: "string" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: -1494368259,
              predicate: "inputBotInlineMessageMediaContact",
              params: [
                { name: "flags", type: "#" },
                { name: "phone_number", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "vcard", type: "string" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: 85477117,
              predicate: "botInlineMessageMediaGeo",
              params: [
                { name: "flags", type: "#" },
                { name: "geo", type: "GeoPoint" },
                { name: "heading", type: "flags.0?int" },
                { name: "period", type: "flags.1?int" },
                { name: "proximity_notification_radius", type: "flags.3?int" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: -1970903652,
              predicate: "botInlineMessageMediaVenue",
              params: [
                { name: "flags", type: "#" },
                { name: "geo", type: "GeoPoint" },
                { name: "title", type: "string" },
                { name: "address", type: "string" },
                { name: "provider", type: "string" },
                { name: "venue_id", type: "string" },
                { name: "venue_type", type: "string" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: 416402882,
              predicate: "botInlineMessageMediaContact",
              params: [
                { name: "flags", type: "#" },
                { name: "phone_number", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "vcard", type: "string" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: -1462213465,
              predicate: "inputBotInlineResultPhoto",
              params: [
                { name: "id", type: "string" },
                { name: "type", type: "string" },
                { name: "photo", type: "InputPhoto" },
                { name: "send_message", type: "InputBotInlineMessage" },
              ],
              type: "InputBotInlineResult",
            },
            {
              id: -459324,
              predicate: "inputBotInlineResultDocument",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "string" },
                { name: "type", type: "string" },
                { name: "title", type: "flags.1?string" },
                { name: "description", type: "flags.2?string" },
                { name: "document", type: "InputDocument" },
                { name: "send_message", type: "InputBotInlineMessage" },
              ],
              type: "InputBotInlineResult",
            },
            {
              id: 400266251,
              predicate: "botInlineMediaResult",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "string" },
                { name: "type", type: "string" },
                { name: "photo", type: "flags.0?Photo" },
                { name: "document", type: "flags.1?Document" },
                { name: "title", type: "flags.2?string" },
                { name: "description", type: "flags.3?string" },
                { name: "send_message", type: "BotInlineMessage" },
              ],
              type: "BotInlineResult",
            },
            {
              id: -1995686519,
              predicate: "inputBotInlineMessageID",
              params: [
                { name: "dc_id", type: "int" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputBotInlineMessageID",
            },
            {
              id: 1763610706,
              predicate: "updateInlineBotCallbackQuery",
              params: [
                { name: "flags", type: "#" },
                { name: "query_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "msg_id", type: "InputBotInlineMessageID" },
                { name: "chat_instance", type: "long" },
                { name: "data", type: "flags.0?bytes" },
                { name: "game_short_name", type: "flags.1?string" },
              ],
              type: "Update",
            },
            {
              id: 1008755359,
              predicate: "inlineBotSwitchPM",
              params: [
                { name: "text", type: "string" },
                { name: "start_param", type: "string" },
              ],
              type: "InlineBotSwitchPM",
            },
            {
              id: 863093588,
              predicate: "messages.peerDialogs",
              params: [
                { name: "dialogs", type: "Vector<Dialog>" },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "state", type: "updates.State" },
              ],
              type: "messages.PeerDialogs",
            },
            {
              id: -305282981,
              predicate: "topPeer",
              params: [
                { name: "peer", type: "Peer" },
                { name: "rating", type: "double" },
              ],
              type: "TopPeer",
            },
            {
              id: -1419371685,
              predicate: "topPeerCategoryBotsPM",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: 344356834,
              predicate: "topPeerCategoryBotsInline",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: 104314861,
              predicate: "topPeerCategoryCorrespondents",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: -1122524854,
              predicate: "topPeerCategoryGroups",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: 371037736,
              predicate: "topPeerCategoryChannels",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: -75283823,
              predicate: "topPeerCategoryPeers",
              params: [
                { name: "category", type: "TopPeerCategory" },
                { name: "count", type: "int" },
                { name: "peers", type: "Vector<TopPeer>" },
              ],
              type: "TopPeerCategoryPeers",
            },
            {
              id: -567906571,
              predicate: "contacts.topPeersNotModified",
              params: [],
              type: "contacts.TopPeers",
            },
            {
              id: 1891070632,
              predicate: "contacts.topPeers",
              params: [
                { name: "categories", type: "Vector<TopPeerCategoryPeers>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "contacts.TopPeers",
            },
            {
              id: -595914432,
              predicate: "messageEntityMentionName",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
                { name: "user_id", type: "long" },
              ],
              type: "MessageEntity",
            },
            {
              id: 546203849,
              predicate: "inputMessageEntityMentionName",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "MessageEntity",
            },
            {
              id: 975236280,
              predicate: "inputMessagesFilterChatPhotos",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1218471511,
              predicate: "updateReadChannelOutbox",
              params: [
                { name: "channel_id", type: "long" },
                { name: "max_id", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -299124375,
              predicate: "updateDraftMessage",
              params: [
                { name: "peer", type: "Peer" },
                { name: "draft", type: "DraftMessage" },
              ],
              type: "Update",
            },
            {
              id: 453805082,
              predicate: "draftMessageEmpty",
              params: [
                { name: "flags", type: "#" },
                { name: "date", type: "flags.0?int" },
              ],
              type: "DraftMessage",
            },
            {
              id: -40996577,
              predicate: "draftMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.1?true" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
                { name: "date", type: "int" },
              ],
              type: "DraftMessage",
            },
            {
              id: -1615153660,
              predicate: "messageActionHistoryClear",
              params: [],
              type: "MessageAction",
            },
            {
              id: -958657434,
              predicate: "messages.featuredStickersNotModified",
              params: [{ name: "count", type: "int" }],
              type: "messages.FeaturedStickers",
            },
            {
              id: -2067782896,
              predicate: "messages.featuredStickers",
              params: [
                { name: "hash", type: "long" },
                { name: "count", type: "int" },
                { name: "sets", type: "Vector<StickerSetCovered>" },
                { name: "unread", type: "Vector<long>" },
              ],
              type: "messages.FeaturedStickers",
            },
            {
              id: 1461528386,
              predicate: "updateReadFeaturedStickers",
              params: [],
              type: "Update",
            },
            {
              id: 186120336,
              predicate: "messages.recentStickersNotModified",
              params: [],
              type: "messages.RecentStickers",
            },
            {
              id: -1999405994,
              predicate: "messages.recentStickers",
              params: [
                { name: "hash", type: "long" },
                { name: "packs", type: "Vector<StickerPack>" },
                { name: "stickers", type: "Vector<Document>" },
                { name: "dates", type: "Vector<int>" },
              ],
              type: "messages.RecentStickers",
            },
            {
              id: -1706939360,
              predicate: "updateRecentStickers",
              params: [],
              type: "Update",
            },
            {
              id: 1338747336,
              predicate: "messages.archivedStickers",
              params: [
                { name: "count", type: "int" },
                { name: "sets", type: "Vector<StickerSetCovered>" },
              ],
              type: "messages.ArchivedStickers",
            },
            {
              id: 946083368,
              predicate: "messages.stickerSetInstallResultSuccess",
              params: [],
              type: "messages.StickerSetInstallResult",
            },
            {
              id: 904138920,
              predicate: "messages.stickerSetInstallResultArchive",
              params: [{ name: "sets", type: "Vector<StickerSetCovered>" }],
              type: "messages.StickerSetInstallResult",
            },
            {
              id: 1678812626,
              predicate: "stickerSetCovered",
              params: [
                { name: "set", type: "StickerSet" },
                { name: "cover", type: "Document" },
              ],
              type: "StickerSetCovered",
            },
            {
              id: -1574314746,
              predicate: "updateConfig",
              params: [],
              type: "Update",
            },
            {
              id: 861169551,
              predicate: "updatePtsChanged",
              params: [],
              type: "Update",
            },
            {
              id: -440664550,
              predicate: "inputMediaPhotoExternal",
              params: [
                { name: "flags", type: "#" },
                { name: "url", type: "string" },
                { name: "ttl_seconds", type: "flags.0?int" },
              ],
              type: "InputMedia",
            },
            {
              id: -78455655,
              predicate: "inputMediaDocumentExternal",
              params: [
                { name: "flags", type: "#" },
                { name: "url", type: "string" },
                { name: "ttl_seconds", type: "flags.0?int" },
              ],
              type: "InputMedia",
            },
            {
              id: 872932635,
              predicate: "stickerSetMultiCovered",
              params: [
                { name: "set", type: "StickerSet" },
                { name: "covers", type: "Vector<Document>" },
              ],
              type: "StickerSetCovered",
            },
            {
              id: -1361650766,
              predicate: "maskCoords",
              params: [
                { name: "n", type: "int" },
                { name: "x", type: "double" },
                { name: "y", type: "double" },
                { name: "zoom", type: "double" },
              ],
              type: "MaskCoords",
            },
            {
              id: -1744710921,
              predicate: "documentAttributeHasStickers",
              params: [],
              type: "DocumentAttribute",
            },
            {
              id: 1251549527,
              predicate: "inputStickeredMediaPhoto",
              params: [{ name: "id", type: "InputPhoto" }],
              type: "InputStickeredMedia",
            },
            {
              id: 70813275,
              predicate: "inputStickeredMediaDocument",
              params: [{ name: "id", type: "InputDocument" }],
              type: "InputStickeredMedia",
            },
            {
              id: -1107729093,
              predicate: "game",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "short_name", type: "string" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "Photo" },
                { name: "document", type: "flags.0?Document" },
              ],
              type: "Game",
            },
            {
              id: 1336154098,
              predicate: "inputBotInlineResultGame",
              params: [
                { name: "id", type: "string" },
                { name: "short_name", type: "string" },
                { name: "send_message", type: "InputBotInlineMessage" },
              ],
              type: "InputBotInlineResult",
            },
            {
              id: 1262639204,
              predicate: "inputBotInlineMessageGame",
              params: [
                { name: "flags", type: "#" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: -38694904,
              predicate: "messageMediaGame",
              params: [{ name: "game", type: "Game" }],
              type: "MessageMedia",
            },
            {
              id: -750828557,
              predicate: "inputMediaGame",
              params: [{ name: "id", type: "InputGame" }],
              type: "InputMedia",
            },
            {
              id: 53231223,
              predicate: "inputGameID",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputGame",
            },
            {
              id: -1020139510,
              predicate: "inputGameShortName",
              params: [
                { name: "bot_id", type: "InputUser" },
                { name: "short_name", type: "string" },
              ],
              type: "InputGame",
            },
            {
              id: 1358175439,
              predicate: "keyboardButtonGame",
              params: [{ name: "text", type: "string" }],
              type: "KeyboardButton",
            },
            {
              id: -1834538890,
              predicate: "messageActionGameScore",
              params: [
                { name: "game_id", type: "long" },
                { name: "score", type: "int" },
              ],
              type: "MessageAction",
            },
            {
              id: 1940093419,
              predicate: "highScore",
              params: [
                { name: "pos", type: "int" },
                { name: "user_id", type: "long" },
                { name: "score", type: "int" },
              ],
              type: "HighScore",
            },
            {
              id: -1707344487,
              predicate: "messages.highScores",
              params: [
                { name: "scores", type: "Vector<HighScore>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.HighScores",
            },
            {
              id: 1258196845,
              predicate: "updates.differenceTooLong",
              params: [{ name: "pts", type: "int" }],
              type: "updates.Difference",
            },
            {
              id: 791390623,
              predicate: "updateChannelWebPage",
              params: [
                { name: "channel_id", type: "long" },
                { name: "webpage", type: "WebPage" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1663561404,
              predicate: "messages.chatsSlice",
              params: [
                { name: "count", type: "int" },
                { name: "chats", type: "Vector<Chat>" },
              ],
              type: "messages.Chats",
            },
            {
              id: -599948721,
              predicate: "textEmpty",
              params: [],
              type: "RichText",
            },
            {
              id: 1950782688,
              predicate: "textPlain",
              params: [{ name: "text", type: "string" }],
              type: "RichText",
            },
            {
              id: 1730456516,
              predicate: "textBold",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: -653089380,
              predicate: "textItalic",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: -1054465340,
              predicate: "textUnderline",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: -1678197867,
              predicate: "textStrike",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: 1816074681,
              predicate: "textFixed",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: 1009288385,
              predicate: "textUrl",
              params: [
                { name: "text", type: "RichText" },
                { name: "url", type: "string" },
                { name: "webpage_id", type: "long" },
              ],
              type: "RichText",
            },
            {
              id: -564523562,
              predicate: "textEmail",
              params: [
                { name: "text", type: "RichText" },
                { name: "email", type: "string" },
              ],
              type: "RichText",
            },
            {
              id: 2120376535,
              predicate: "textConcat",
              params: [{ name: "texts", type: "Vector<RichText>" }],
              type: "RichText",
            },
            {
              id: 324435594,
              predicate: "pageBlockUnsupported",
              params: [],
              type: "PageBlock",
            },
            {
              id: 1890305021,
              predicate: "pageBlockTitle",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: -1879401953,
              predicate: "pageBlockSubtitle",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: -1162877472,
              predicate: "pageBlockAuthorDate",
              params: [
                { name: "author", type: "RichText" },
                { name: "published_date", type: "int" },
              ],
              type: "PageBlock",
            },
            {
              id: -1076861716,
              predicate: "pageBlockHeader",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: -248793375,
              predicate: "pageBlockSubheader",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: 1182402406,
              predicate: "pageBlockParagraph",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: -1066346178,
              predicate: "pageBlockPreformatted",
              params: [
                { name: "text", type: "RichText" },
                { name: "language", type: "string" },
              ],
              type: "PageBlock",
            },
            {
              id: 1216809369,
              predicate: "pageBlockFooter",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: -618614392,
              predicate: "pageBlockDivider",
              params: [],
              type: "PageBlock",
            },
            {
              id: -837994576,
              predicate: "pageBlockAnchor",
              params: [{ name: "name", type: "string" }],
              type: "PageBlock",
            },
            {
              id: -454524911,
              predicate: "pageBlockList",
              params: [{ name: "items", type: "Vector<PageListItem>" }],
              type: "PageBlock",
            },
            {
              id: 641563686,
              predicate: "pageBlockBlockquote",
              params: [
                { name: "text", type: "RichText" },
                { name: "caption", type: "RichText" },
              ],
              type: "PageBlock",
            },
            {
              id: 1329878739,
              predicate: "pageBlockPullquote",
              params: [
                { name: "text", type: "RichText" },
                { name: "caption", type: "RichText" },
              ],
              type: "PageBlock",
            },
            {
              id: 391759200,
              predicate: "pageBlockPhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "photo_id", type: "long" },
                { name: "caption", type: "PageCaption" },
                { name: "url", type: "flags.0?string" },
                { name: "webpage_id", type: "flags.0?long" },
              ],
              type: "PageBlock",
            },
            {
              id: 2089805750,
              predicate: "pageBlockVideo",
              params: [
                { name: "flags", type: "#" },
                { name: "autoplay", type: "flags.0?true" },
                { name: "loop", type: "flags.1?true" },
                { name: "video_id", type: "long" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: 972174080,
              predicate: "pageBlockCover",
              params: [{ name: "cover", type: "PageBlock" }],
              type: "PageBlock",
            },
            {
              id: -1468953147,
              predicate: "pageBlockEmbed",
              params: [
                { name: "flags", type: "#" },
                { name: "full_width", type: "flags.0?true" },
                { name: "allow_scrolling", type: "flags.3?true" },
                { name: "url", type: "flags.1?string" },
                { name: "html", type: "flags.2?string" },
                { name: "poster_photo_id", type: "flags.4?long" },
                { name: "w", type: "flags.5?int" },
                { name: "h", type: "flags.5?int" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: -229005301,
              predicate: "pageBlockEmbedPost",
              params: [
                { name: "url", type: "string" },
                { name: "webpage_id", type: "long" },
                { name: "author_photo_id", type: "long" },
                { name: "author", type: "string" },
                { name: "date", type: "int" },
                { name: "blocks", type: "Vector<PageBlock>" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: 1705048653,
              predicate: "pageBlockCollage",
              params: [
                { name: "items", type: "Vector<PageBlock>" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: 52401552,
              predicate: "pageBlockSlideshow",
              params: [
                { name: "items", type: "Vector<PageBlock>" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: 1930545681,
              predicate: "webPageNotModified",
              params: [
                { name: "flags", type: "#" },
                { name: "cached_page_views", type: "flags.0?int" },
              ],
              type: "WebPage",
            },
            {
              id: -88417185,
              predicate: "inputPrivacyKeyPhoneCall",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: 1030105979,
              predicate: "privacyKeyPhoneCall",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: -580219064,
              predicate: "sendMessageGamePlayAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: -2048646399,
              predicate: "phoneCallDiscardReasonMissed",
              params: [],
              type: "PhoneCallDiscardReason",
            },
            {
              id: -527056480,
              predicate: "phoneCallDiscardReasonDisconnect",
              params: [],
              type: "PhoneCallDiscardReason",
            },
            {
              id: 1471006352,
              predicate: "phoneCallDiscardReasonHangup",
              params: [],
              type: "PhoneCallDiscardReason",
            },
            {
              id: -84416311,
              predicate: "phoneCallDiscardReasonBusy",
              params: [],
              type: "PhoneCallDiscardReason",
            },
            {
              id: 1852826908,
              predicate: "updateDialogPinned",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.0?true" },
                { name: "folder_id", type: "flags.1?int" },
                { name: "peer", type: "DialogPeer" },
              ],
              type: "Update",
            },
            {
              id: -99664734,
              predicate: "updatePinnedDialogs",
              params: [
                { name: "flags", type: "#" },
                { name: "folder_id", type: "flags.1?int" },
                { name: "order", type: "flags.0?Vector<DialogPeer>" },
              ],
              type: "Update",
            },
            {
              id: 2104790276,
              predicate: "dataJSON",
              params: [{ name: "data", type: "string" }],
              type: "DataJSON",
            },
            {
              id: -2095595325,
              predicate: "updateBotWebhookJSON",
              params: [{ name: "data", type: "DataJSON" }],
              type: "Update",
            },
            {
              id: -1684914010,
              predicate: "updateBotWebhookJSONQuery",
              params: [
                { name: "query_id", type: "long" },
                { name: "data", type: "DataJSON" },
                { name: "timeout", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -886477832,
              predicate: "labeledPrice",
              params: [
                { name: "label", type: "string" },
                { name: "amount", type: "long" },
              ],
              type: "LabeledPrice",
            },
            {
              id: 215516896,
              predicate: "invoice",
              params: [
                { name: "flags", type: "#" },
                { name: "test", type: "flags.0?true" },
                { name: "name_requested", type: "flags.1?true" },
                { name: "phone_requested", type: "flags.2?true" },
                { name: "email_requested", type: "flags.3?true" },
                { name: "shipping_address_requested", type: "flags.4?true" },
                { name: "flexible", type: "flags.5?true" },
                { name: "phone_to_provider", type: "flags.6?true" },
                { name: "email_to_provider", type: "flags.7?true" },
                { name: "currency", type: "string" },
                { name: "prices", type: "Vector<LabeledPrice>" },
                { name: "max_tip_amount", type: "flags.8?long" },
                { name: "suggested_tip_amounts", type: "flags.8?Vector<long>" },
              ],
              type: "Invoice",
            },
            {
              id: -646342540,
              predicate: "inputMediaInvoice",
              params: [
                { name: "flags", type: "#" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "flags.0?InputWebDocument" },
                { name: "invoice", type: "Invoice" },
                { name: "payload", type: "bytes" },
                { name: "provider", type: "string" },
                { name: "provider_data", type: "DataJSON" },
                { name: "start_param", type: "flags.1?string" },
              ],
              type: "InputMedia",
            },
            {
              id: -368917890,
              predicate: "paymentCharge",
              params: [
                { name: "id", type: "string" },
                { name: "provider_charge_id", type: "string" },
              ],
              type: "PaymentCharge",
            },
            {
              id: -1892568281,
              predicate: "messageActionPaymentSentMe",
              params: [
                { name: "flags", type: "#" },
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
                { name: "payload", type: "bytes" },
                { name: "info", type: "flags.0?PaymentRequestedInfo" },
                { name: "shipping_option_id", type: "flags.1?string" },
                { name: "charge", type: "PaymentCharge" },
              ],
              type: "MessageAction",
            },
            {
              id: -2074799289,
              predicate: "messageMediaInvoice",
              params: [
                { name: "flags", type: "#" },
                { name: "shipping_address_requested", type: "flags.1?true" },
                { name: "test", type: "flags.3?true" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "flags.0?WebDocument" },
                { name: "receipt_msg_id", type: "flags.2?int" },
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
                { name: "start_param", type: "string" },
              ],
              type: "MessageMedia",
            },
            {
              id: 512535275,
              predicate: "postAddress",
              params: [
                { name: "street_line1", type: "string" },
                { name: "street_line2", type: "string" },
                { name: "city", type: "string" },
                { name: "state", type: "string" },
                { name: "country_iso2", type: "string" },
                { name: "post_code", type: "string" },
              ],
              type: "PostAddress",
            },
            {
              id: -1868808300,
              predicate: "paymentRequestedInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "name", type: "flags.0?string" },
                { name: "phone", type: "flags.1?string" },
                { name: "email", type: "flags.2?string" },
                { name: "shipping_address", type: "flags.3?PostAddress" },
              ],
              type: "PaymentRequestedInfo",
            },
            {
              id: -1344716869,
              predicate: "keyboardButtonBuy",
              params: [{ name: "text", type: "string" }],
              type: "KeyboardButton",
            },
            {
              id: 1080663248,
              predicate: "messageActionPaymentSent",
              params: [
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
              ],
              type: "MessageAction",
            },
            {
              id: -842892769,
              predicate: "paymentSavedCredentialsCard",
              params: [
                { name: "id", type: "string" },
                { name: "title", type: "string" },
              ],
              type: "PaymentSavedCredentials",
            },
            {
              id: 475467473,
              predicate: "webDocument",
              params: [
                { name: "url", type: "string" },
                { name: "access_hash", type: "long" },
                { name: "size", type: "int" },
                { name: "mime_type", type: "string" },
                { name: "attributes", type: "Vector<DocumentAttribute>" },
              ],
              type: "WebDocument",
            },
            {
              id: -1678949555,
              predicate: "inputWebDocument",
              params: [
                { name: "url", type: "string" },
                { name: "size", type: "int" },
                { name: "mime_type", type: "string" },
                { name: "attributes", type: "Vector<DocumentAttribute>" },
              ],
              type: "InputWebDocument",
            },
            {
              id: -1036396922,
              predicate: "inputWebFileLocation",
              params: [
                { name: "url", type: "string" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputWebFileLocation",
            },
            {
              id: 568808380,
              predicate: "upload.webFile",
              params: [
                { name: "size", type: "int" },
                { name: "mime_type", type: "string" },
                { name: "file_type", type: "storage.FileType" },
                { name: "mtime", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "upload.WebFile",
            },
            {
              id: 378828315,
              predicate: "payments.paymentForm",
              params: [
                { name: "flags", type: "#" },
                { name: "can_save_credentials", type: "flags.2?true" },
                { name: "password_missing", type: "flags.3?true" },
                { name: "form_id", type: "long" },
                { name: "bot_id", type: "long" },
                { name: "invoice", type: "Invoice" },
                { name: "provider_id", type: "long" },
                { name: "url", type: "string" },
                { name: "native_provider", type: "flags.4?string" },
                { name: "native_params", type: "flags.4?DataJSON" },
                { name: "saved_info", type: "flags.0?PaymentRequestedInfo" },
                {
                  name: "saved_credentials",
                  type: "flags.1?PaymentSavedCredentials",
                },
                { name: "users", type: "Vector<User>" },
              ],
              type: "payments.PaymentForm",
            },
            {
              id: -784000893,
              predicate: "payments.validatedRequestedInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "flags.0?string" },
                {
                  name: "shipping_options",
                  type: "flags.1?Vector<ShippingOption>",
                },
              ],
              type: "payments.ValidatedRequestedInfo",
            },
            {
              id: 1314881805,
              predicate: "payments.paymentResult",
              params: [{ name: "updates", type: "Updates" }],
              type: "payments.PaymentResult",
            },
            {
              id: 1891958275,
              predicate: "payments.paymentReceipt",
              params: [
                { name: "flags", type: "#" },
                { name: "date", type: "int" },
                { name: "bot_id", type: "long" },
                { name: "provider_id", type: "long" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "flags.2?WebDocument" },
                { name: "invoice", type: "Invoice" },
                { name: "info", type: "flags.0?PaymentRequestedInfo" },
                { name: "shipping", type: "flags.1?ShippingOption" },
                { name: "tip_amount", type: "flags.3?long" },
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
                { name: "credentials_title", type: "string" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "payments.PaymentReceipt",
            },
            {
              id: -74456004,
              predicate: "payments.savedInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "has_saved_credentials", type: "flags.1?true" },
                { name: "saved_info", type: "flags.0?PaymentRequestedInfo" },
              ],
              type: "payments.SavedInfo",
            },
            {
              id: -1056001329,
              predicate: "inputPaymentCredentialsSaved",
              params: [
                { name: "id", type: "string" },
                { name: "tmp_password", type: "bytes" },
              ],
              type: "InputPaymentCredentials",
            },
            {
              id: 873977640,
              predicate: "inputPaymentCredentials",
              params: [
                { name: "flags", type: "#" },
                { name: "save", type: "flags.0?true" },
                { name: "data", type: "DataJSON" },
              ],
              type: "InputPaymentCredentials",
            },
            {
              id: -614138572,
              predicate: "account.tmpPassword",
              params: [
                { name: "tmp_password", type: "bytes" },
                { name: "valid_until", type: "int" },
              ],
              type: "account.TmpPassword",
            },
            {
              id: -1239335713,
              predicate: "shippingOption",
              params: [
                { name: "id", type: "string" },
                { name: "title", type: "string" },
                { name: "prices", type: "Vector<LabeledPrice>" },
              ],
              type: "ShippingOption",
            },
            {
              id: -1246823043,
              predicate: "updateBotShippingQuery",
              params: [
                { name: "query_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "payload", type: "bytes" },
                { name: "shipping_address", type: "PostAddress" },
              ],
              type: "Update",
            },
            {
              id: -1934976362,
              predicate: "updateBotPrecheckoutQuery",
              params: [
                { name: "flags", type: "#" },
                { name: "query_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "payload", type: "bytes" },
                { name: "info", type: "flags.0?PaymentRequestedInfo" },
                { name: "shipping_option_id", type: "flags.1?string" },
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
              ],
              type: "Update",
            },
            {
              id: -6249322,
              predicate: "inputStickerSetItem",
              params: [
                { name: "flags", type: "#" },
                { name: "document", type: "InputDocument" },
                { name: "emoji", type: "string" },
                { name: "mask_coords", type: "flags.0?MaskCoords" },
              ],
              type: "InputStickerSetItem",
            },
            {
              id: -1425052898,
              predicate: "updatePhoneCall",
              params: [{ name: "phone_call", type: "PhoneCall" }],
              type: "Update",
            },
            {
              id: 506920429,
              predicate: "inputPhoneCall",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputPhoneCall",
            },
            {
              id: 1399245077,
              predicate: "phoneCallEmpty",
              params: [{ name: "id", type: "long" }],
              type: "PhoneCall",
            },
            {
              id: -987599081,
              predicate: "phoneCallWaiting",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.6?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "protocol", type: "PhoneCallProtocol" },
                { name: "receive_date", type: "flags.0?int" },
              ],
              type: "PhoneCall",
            },
            {
              id: 347139340,
              predicate: "phoneCallRequested",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.6?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "g_a_hash", type: "bytes" },
                { name: "protocol", type: "PhoneCallProtocol" },
              ],
              type: "PhoneCall",
            },
            {
              id: 912311057,
              predicate: "phoneCallAccepted",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.6?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "g_b", type: "bytes" },
                { name: "protocol", type: "PhoneCallProtocol" },
              ],
              type: "PhoneCall",
            },
            {
              id: -1770029977,
              predicate: "phoneCall",
              params: [
                { name: "flags", type: "#" },
                { name: "p2p_allowed", type: "flags.5?true" },
                { name: "video", type: "flags.6?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_id", type: "long" },
                { name: "participant_id", type: "long" },
                { name: "g_a_or_b", type: "bytes" },
                { name: "key_fingerprint", type: "long" },
                { name: "protocol", type: "PhoneCallProtocol" },
                { name: "connections", type: "Vector<PhoneConnection>" },
                { name: "start_date", type: "int" },
              ],
              type: "PhoneCall",
            },
            {
              id: 1355435489,
              predicate: "phoneCallDiscarded",
              params: [
                { name: "flags", type: "#" },
                { name: "need_rating", type: "flags.2?true" },
                { name: "need_debug", type: "flags.3?true" },
                { name: "video", type: "flags.6?true" },
                { name: "id", type: "long" },
                { name: "reason", type: "flags.0?PhoneCallDiscardReason" },
                { name: "duration", type: "flags.1?int" },
              ],
              type: "PhoneCall",
            },
            {
              id: -1655957568,
              predicate: "phoneConnection",
              params: [
                { name: "id", type: "long" },
                { name: "ip", type: "string" },
                { name: "ipv6", type: "string" },
                { name: "port", type: "int" },
                { name: "peer_tag", type: "bytes" },
              ],
              type: "PhoneConnection",
            },
            {
              id: -58224696,
              predicate: "phoneCallProtocol",
              params: [
                { name: "flags", type: "#" },
                { name: "udp_p2p", type: "flags.0?true" },
                { name: "udp_reflector", type: "flags.1?true" },
                { name: "min_layer", type: "int" },
                { name: "max_layer", type: "int" },
                { name: "library_versions", type: "Vector<string>" },
              ],
              type: "PhoneCallProtocol",
            },
            {
              id: -326966976,
              predicate: "phone.phoneCall",
              params: [
                { name: "phone_call", type: "PhoneCall" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "phone.PhoneCall",
            },
            {
              id: -2134272152,
              predicate: "inputMessagesFilterPhoneCalls",
              params: [
                { name: "flags", type: "#" },
                { name: "missed", type: "flags.0?true" },
              ],
              type: "MessagesFilter",
            },
            {
              id: -2132731265,
              predicate: "messageActionPhoneCall",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.2?true" },
                { name: "call_id", type: "long" },
                { name: "reason", type: "flags.0?PhoneCallDiscardReason" },
                { name: "duration", type: "flags.1?int" },
              ],
              type: "MessageAction",
            },
            {
              id: 2054952868,
              predicate: "inputMessagesFilterRoundVoice",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1253451181,
              predicate: "inputMessagesFilterRoundVideo",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1997373508,
              predicate: "sendMessageRecordRoundAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: 608050278,
              predicate: "sendMessageUploadRoundAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: -242427324,
              predicate: "upload.fileCdnRedirect",
              params: [
                { name: "dc_id", type: "int" },
                { name: "file_token", type: "bytes" },
                { name: "encryption_key", type: "bytes" },
                { name: "encryption_iv", type: "bytes" },
                { name: "file_hashes", type: "Vector<FileHash>" },
              ],
              type: "upload.File",
            },
            {
              id: -290921362,
              predicate: "upload.cdnFileReuploadNeeded",
              params: [{ name: "request_token", type: "bytes" }],
              type: "upload.CdnFile",
            },
            {
              id: -1449145777,
              predicate: "upload.cdnFile",
              params: [{ name: "bytes", type: "bytes" }],
              type: "upload.CdnFile",
            },
            {
              id: -914167110,
              predicate: "cdnPublicKey",
              params: [
                { name: "dc_id", type: "int" },
                { name: "public_key", type: "string" },
              ],
              type: "CdnPublicKey",
            },
            {
              id: 1462101002,
              predicate: "cdnConfig",
              params: [{ name: "public_keys", type: "Vector<CdnPublicKey>" }],
              type: "CdnConfig",
            },
            {
              id: -283684427,
              predicate: "pageBlockChannel",
              params: [{ name: "channel", type: "Chat" }],
              type: "PageBlock",
            },
            {
              id: -892239370,
              predicate: "langPackString",
              params: [
                { name: "key", type: "string" },
                { name: "value", type: "string" },
              ],
              type: "LangPackString",
            },
            {
              id: 1816636575,
              predicate: "langPackStringPluralized",
              params: [
                { name: "flags", type: "#" },
                { name: "key", type: "string" },
                { name: "zero_value", type: "flags.0?string" },
                { name: "one_value", type: "flags.1?string" },
                { name: "two_value", type: "flags.2?string" },
                { name: "few_value", type: "flags.3?string" },
                { name: "many_value", type: "flags.4?string" },
                { name: "other_value", type: "string" },
              ],
              type: "LangPackString",
            },
            {
              id: 695856818,
              predicate: "langPackStringDeleted",
              params: [{ name: "key", type: "string" }],
              type: "LangPackString",
            },
            {
              id: -209337866,
              predicate: "langPackDifference",
              params: [
                { name: "lang_code", type: "string" },
                { name: "from_version", type: "int" },
                { name: "version", type: "int" },
                { name: "strings", type: "Vector<LangPackString>" },
              ],
              type: "LangPackDifference",
            },
            {
              id: -288727837,
              predicate: "langPackLanguage",
              params: [
                { name: "flags", type: "#" },
                { name: "official", type: "flags.0?true" },
                { name: "rtl", type: "flags.2?true" },
                { name: "beta", type: "flags.3?true" },
                { name: "name", type: "string" },
                { name: "native_name", type: "string" },
                { name: "lang_code", type: "string" },
                { name: "base_lang_code", type: "flags.1?string" },
                { name: "plural_code", type: "string" },
                { name: "strings_count", type: "int" },
                { name: "translated_count", type: "int" },
                { name: "translations_url", type: "string" },
              ],
              type: "LangPackLanguage",
            },
            {
              id: 1180041828,
              predicate: "updateLangPackTooLong",
              params: [{ name: "lang_code", type: "string" }],
              type: "Update",
            },
            {
              id: 1442983757,
              predicate: "updateLangPack",
              params: [{ name: "difference", type: "LangPackDifference" }],
              type: "Update",
            },
            {
              id: 885242707,
              predicate: "channelParticipantAdmin",
              params: [
                { name: "flags", type: "#" },
                { name: "can_edit", type: "flags.0?true" },
                { name: "self", type: "flags.1?true" },
                { name: "user_id", type: "long" },
                { name: "inviter_id", type: "flags.1?long" },
                { name: "promoted_by", type: "long" },
                { name: "date", type: "int" },
                { name: "admin_rights", type: "ChatAdminRights" },
                { name: "rank", type: "flags.2?string" },
              ],
              type: "ChannelParticipant",
            },
            {
              id: 1844969806,
              predicate: "channelParticipantBanned",
              params: [
                { name: "flags", type: "#" },
                { name: "left", type: "flags.0?true" },
                { name: "peer", type: "Peer" },
                { name: "kicked_by", type: "long" },
                { name: "date", type: "int" },
                { name: "banned_rights", type: "ChatBannedRights" },
              ],
              type: "ChannelParticipant",
            },
            {
              id: 338142689,
              predicate: "channelParticipantsBanned",
              params: [{ name: "q", type: "string" }],
              type: "ChannelParticipantsFilter",
            },
            {
              id: 106343499,
              predicate: "channelParticipantsSearch",
              params: [{ name: "q", type: "string" }],
              type: "ChannelParticipantsFilter",
            },
            {
              id: -421545947,
              predicate: "channelAdminLogEventActionChangeTitle",
              params: [
                { name: "prev_value", type: "string" },
                { name: "new_value", type: "string" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1427671598,
              predicate: "channelAdminLogEventActionChangeAbout",
              params: [
                { name: "prev_value", type: "string" },
                { name: "new_value", type: "string" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1783299128,
              predicate: "channelAdminLogEventActionChangeUsername",
              params: [
                { name: "prev_value", type: "string" },
                { name: "new_value", type: "string" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1129042607,
              predicate: "channelAdminLogEventActionChangePhoto",
              params: [
                { name: "prev_photo", type: "Photo" },
                { name: "new_photo", type: "Photo" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 460916654,
              predicate: "channelAdminLogEventActionToggleInvites",
              params: [{ name: "new_value", type: "Bool" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 648939889,
              predicate: "channelAdminLogEventActionToggleSignatures",
              params: [{ name: "new_value", type: "Bool" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -370660328,
              predicate: "channelAdminLogEventActionUpdatePinned",
              params: [{ name: "message", type: "Message" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1889215493,
              predicate: "channelAdminLogEventActionEditMessage",
              params: [
                { name: "prev_message", type: "Message" },
                { name: "new_message", type: "Message" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1121994683,
              predicate: "channelAdminLogEventActionDeleteMessage",
              params: [{ name: "message", type: "Message" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 405815507,
              predicate: "channelAdminLogEventActionParticipantJoin",
              params: [],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -124291086,
              predicate: "channelAdminLogEventActionParticipantLeave",
              params: [],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -484690728,
              predicate: "channelAdminLogEventActionParticipantInvite",
              params: [{ name: "participant", type: "ChannelParticipant" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -422036098,
              predicate: "channelAdminLogEventActionParticipantToggleBan",
              params: [
                { name: "prev_participant", type: "ChannelParticipant" },
                { name: "new_participant", type: "ChannelParticipant" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -714643696,
              predicate: "channelAdminLogEventActionParticipantToggleAdmin",
              params: [
                { name: "prev_participant", type: "ChannelParticipant" },
                { name: "new_participant", type: "ChannelParticipant" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 531458253,
              predicate: "channelAdminLogEvent",
              params: [
                { name: "id", type: "long" },
                { name: "date", type: "int" },
                { name: "user_id", type: "long" },
                { name: "action", type: "ChannelAdminLogEventAction" },
              ],
              type: "ChannelAdminLogEvent",
            },
            {
              id: -309659827,
              predicate: "channels.adminLogResults",
              params: [
                { name: "events", type: "Vector<ChannelAdminLogEvent>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "channels.AdminLogResults",
            },
            {
              id: -368018716,
              predicate: "channelAdminLogEventsFilter",
              params: [
                { name: "flags", type: "#" },
                { name: "join", type: "flags.0?true" },
                { name: "leave", type: "flags.1?true" },
                { name: "invite", type: "flags.2?true" },
                { name: "ban", type: "flags.3?true" },
                { name: "unban", type: "flags.4?true" },
                { name: "kick", type: "flags.5?true" },
                { name: "unkick", type: "flags.6?true" },
                { name: "promote", type: "flags.7?true" },
                { name: "demote", type: "flags.8?true" },
                { name: "info", type: "flags.9?true" },
                { name: "settings", type: "flags.10?true" },
                { name: "pinned", type: "flags.11?true" },
                { name: "edit", type: "flags.12?true" },
                { name: "delete", type: "flags.13?true" },
                { name: "group_call", type: "flags.14?true" },
                { name: "invites", type: "flags.15?true" },
                { name: "send", type: "flags.16?true" },
              ],
              type: "ChannelAdminLogEventsFilter",
            },
            {
              id: 511092620,
              predicate: "topPeerCategoryPhoneCalls",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: -2143067670,
              predicate: "pageBlockAudio",
              params: [
                { name: "audio_id", type: "long" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: 1558266229,
              predicate: "popularContact",
              params: [
                { name: "client_id", type: "long" },
                { name: "importers", type: "int" },
              ],
              type: "PopularContact",
            },
            {
              id: 1200788123,
              predicate: "messageActionScreenshotTaken",
              params: [],
              type: "MessageAction",
            },
            {
              id: -1634752813,
              predicate: "messages.favedStickersNotModified",
              params: [],
              type: "messages.FavedStickers",
            },
            {
              id: 750063767,
              predicate: "messages.favedStickers",
              params: [
                { name: "hash", type: "long" },
                { name: "packs", type: "Vector<StickerPack>" },
                { name: "stickers", type: "Vector<Document>" },
              ],
              type: "messages.FavedStickers",
            },
            {
              id: -451831443,
              predicate: "updateFavedStickers",
              params: [],
              type: "Update",
            },
            {
              id: 1153291573,
              predicate: "updateChannelReadMessagesContents",
              params: [
                { name: "channel_id", type: "long" },
                { name: "messages", type: "Vector<int>" },
              ],
              type: "Update",
            },
            {
              id: -1040652646,
              predicate: "inputMessagesFilterMyMentions",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: 1887741886,
              predicate: "updateContactsReset",
              params: [],
              type: "Update",
            },
            {
              id: -1312568665,
              predicate: "channelAdminLogEventActionChangeStickerSet",
              params: [
                { name: "prev_stickerset", type: "InputStickerSet" },
                { name: "new_stickerset", type: "InputStickerSet" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -85549226,
              predicate: "messageActionCustomAction",
              params: [{ name: "message", type: "string" }],
              type: "MessageAction",
            },
            {
              id: 178373535,
              predicate: "inputPaymentCredentialsApplePay",
              params: [{ name: "payment_data", type: "DataJSON" }],
              type: "InputPaymentCredentials",
            },
            {
              id: -419271411,
              predicate: "inputMessagesFilterGeo",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -530392189,
              predicate: "inputMessagesFilterContacts",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1304443240,
              predicate: "updateChannelAvailableMessages",
              params: [
                { name: "channel_id", type: "long" },
                { name: "available_min_id", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 1599903217,
              predicate: "channelAdminLogEventActionTogglePreHistoryHidden",
              params: [{ name: "new_value", type: "Bool" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -1759532989,
              predicate: "inputMediaGeoLive",
              params: [
                { name: "flags", type: "#" },
                { name: "stopped", type: "flags.0?true" },
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "heading", type: "flags.2?int" },
                { name: "period", type: "flags.1?int" },
                { name: "proximity_notification_radius", type: "flags.3?int" },
              ],
              type: "InputMedia",
            },
            {
              id: -1186937242,
              predicate: "messageMediaGeoLive",
              params: [
                { name: "flags", type: "#" },
                { name: "geo", type: "GeoPoint" },
                { name: "heading", type: "flags.0?int" },
                { name: "period", type: "int" },
                { name: "proximity_notification_radius", type: "flags.1?int" },
              ],
              type: "MessageMedia",
            },
            {
              id: 1189204285,
              predicate: "recentMeUrlUnknown",
              params: [{ name: "url", type: "string" }],
              type: "RecentMeUrl",
            },
            {
              id: -1188296222,
              predicate: "recentMeUrlUser",
              params: [
                { name: "url", type: "string" },
                { name: "user_id", type: "long" },
              ],
              type: "RecentMeUrl",
            },
            {
              id: -1294306862,
              predicate: "recentMeUrlChat",
              params: [
                { name: "url", type: "string" },
                { name: "chat_id", type: "long" },
              ],
              type: "RecentMeUrl",
            },
            {
              id: -347535331,
              predicate: "recentMeUrlChatInvite",
              params: [
                { name: "url", type: "string" },
                { name: "chat_invite", type: "ChatInvite" },
              ],
              type: "RecentMeUrl",
            },
            {
              id: -1140172836,
              predicate: "recentMeUrlStickerSet",
              params: [
                { name: "url", type: "string" },
                { name: "set", type: "StickerSetCovered" },
              ],
              type: "RecentMeUrl",
            },
            {
              id: 235081943,
              predicate: "help.recentMeUrls",
              params: [
                { name: "urls", type: "Vector<RecentMeUrl>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "help.RecentMeUrls",
            },
            {
              id: -266911767,
              predicate: "channels.channelParticipantsNotModified",
              params: [],
              type: "channels.ChannelParticipants",
            },
            {
              id: 1951620897,
              predicate: "messages.messagesNotModified",
              params: [{ name: "count", type: "int" }],
              type: "messages.Messages",
            },
            {
              id: 482797855,
              predicate: "inputSingleMedia",
              params: [
                { name: "flags", type: "#" },
                { name: "media", type: "InputMedia" },
                { name: "random_id", type: "long" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.0?Vector<MessageEntity>" },
              ],
              type: "InputSingleMedia",
            },
            {
              id: -1493633966,
              predicate: "webAuthorization",
              params: [
                { name: "hash", type: "long" },
                { name: "bot_id", type: "long" },
                { name: "domain", type: "string" },
                { name: "browser", type: "string" },
                { name: "platform", type: "string" },
                { name: "date_created", type: "int" },
                { name: "date_active", type: "int" },
                { name: "ip", type: "string" },
                { name: "region", type: "string" },
              ],
              type: "WebAuthorization",
            },
            {
              id: -313079300,
              predicate: "account.webAuthorizations",
              params: [
                { name: "authorizations", type: "Vector<WebAuthorization>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "account.WebAuthorizations",
            },
            {
              id: -1502174430,
              predicate: "inputMessageID",
              params: [{ name: "id", type: "int" }],
              type: "InputMessage",
            },
            {
              id: -1160215659,
              predicate: "inputMessageReplyTo",
              params: [{ name: "id", type: "int" }],
              type: "InputMessage",
            },
            {
              id: -2037963464,
              predicate: "inputMessagePinned",
              params: [],
              type: "InputMessage",
            },
            {
              id: -1687559349,
              predicate: "messageEntityPhone",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1280209983,
              predicate: "messageEntityCashtag",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -1410748418,
              predicate: "messageActionBotAllowed",
              params: [{ name: "domain", type: "string" }],
              type: "MessageAction",
            },
            {
              id: -55902537,
              predicate: "inputDialogPeer",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "InputDialogPeer",
            },
            {
              id: -445792507,
              predicate: "dialogPeer",
              params: [{ name: "peer", type: "Peer" }],
              type: "DialogPeer",
            },
            {
              id: 223655517,
              predicate: "messages.foundStickerSetsNotModified",
              params: [],
              type: "messages.FoundStickerSets",
            },
            {
              id: -1963942446,
              predicate: "messages.foundStickerSets",
              params: [
                { name: "hash", type: "long" },
                { name: "sets", type: "Vector<StickerSetCovered>" },
              ],
              type: "messages.FoundStickerSets",
            },
            {
              id: 1648543603,
              predicate: "fileHash",
              params: [
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "hash", type: "bytes" },
              ],
              type: "FileHash",
            },
            {
              id: -104284986,
              predicate: "webDocumentNoProxy",
              params: [
                { name: "url", type: "string" },
                { name: "size", type: "int" },
                { name: "mime_type", type: "string" },
                { name: "attributes", type: "Vector<DocumentAttribute>" },
              ],
              type: "WebDocument",
            },
            {
              id: 1968737087,
              predicate: "inputClientProxy",
              params: [
                { name: "address", type: "string" },
                { name: "port", type: "int" },
              ],
              type: "InputClientProxy",
            },
            {
              id: -483352705,
              predicate: "help.termsOfServiceUpdateEmpty",
              params: [{ name: "expires", type: "int" }],
              type: "help.TermsOfServiceUpdate",
            },
            {
              id: 686618977,
              predicate: "help.termsOfServiceUpdate",
              params: [
                { name: "expires", type: "int" },
                { name: "terms_of_service", type: "help.TermsOfService" },
              ],
              type: "help.TermsOfServiceUpdate",
            },
            {
              id: 859091184,
              predicate: "inputSecureFileUploaded",
              params: [
                { name: "id", type: "long" },
                { name: "parts", type: "int" },
                { name: "md5_checksum", type: "string" },
                { name: "file_hash", type: "bytes" },
                { name: "secret", type: "bytes" },
              ],
              type: "InputSecureFile",
            },
            {
              id: 1399317950,
              predicate: "inputSecureFile",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputSecureFile",
            },
            {
              id: -876089816,
              predicate: "inputSecureFileLocation",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputFileLocation",
            },
            {
              id: 1679398724,
              predicate: "secureFileEmpty",
              params: [],
              type: "SecureFile",
            },
            {
              id: -534283678,
              predicate: "secureFile",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "size", type: "int" },
                { name: "dc_id", type: "int" },
                { name: "date", type: "int" },
                { name: "file_hash", type: "bytes" },
                { name: "secret", type: "bytes" },
              ],
              type: "SecureFile",
            },
            {
              id: -1964327229,
              predicate: "secureData",
              params: [
                { name: "data", type: "bytes" },
                { name: "data_hash", type: "bytes" },
                { name: "secret", type: "bytes" },
              ],
              type: "SecureData",
            },
            {
              id: 2103482845,
              predicate: "securePlainPhone",
              params: [{ name: "phone", type: "string" }],
              type: "SecurePlainData",
            },
            {
              id: 569137759,
              predicate: "securePlainEmail",
              params: [{ name: "email", type: "string" }],
              type: "SecurePlainData",
            },
            {
              id: -1658158621,
              predicate: "secureValueTypePersonalDetails",
              params: [],
              type: "SecureValueType",
            },
            {
              id: 1034709504,
              predicate: "secureValueTypePassport",
              params: [],
              type: "SecureValueType",
            },
            {
              id: 115615172,
              predicate: "secureValueTypeDriverLicense",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1596951477,
              predicate: "secureValueTypeIdentityCard",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1717268701,
              predicate: "secureValueTypeInternalPassport",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -874308058,
              predicate: "secureValueTypeAddress",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -63531698,
              predicate: "secureValueTypeUtilityBill",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1995211763,
              predicate: "secureValueTypeBankStatement",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1954007928,
              predicate: "secureValueTypeRentalAgreement",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1713143702,
              predicate: "secureValueTypePassportRegistration",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -368907213,
              predicate: "secureValueTypeTemporaryRegistration",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1289704741,
              predicate: "secureValueTypePhone",
              params: [],
              type: "SecureValueType",
            },
            {
              id: -1908627474,
              predicate: "secureValueTypeEmail",
              params: [],
              type: "SecureValueType",
            },
            {
              id: 411017418,
              predicate: "secureValue",
              params: [
                { name: "flags", type: "#" },
                { name: "type", type: "SecureValueType" },
                { name: "data", type: "flags.0?SecureData" },
                { name: "front_side", type: "flags.1?SecureFile" },
                { name: "reverse_side", type: "flags.2?SecureFile" },
                { name: "selfie", type: "flags.3?SecureFile" },
                { name: "translation", type: "flags.6?Vector<SecureFile>" },
                { name: "files", type: "flags.4?Vector<SecureFile>" },
                { name: "plain_data", type: "flags.5?SecurePlainData" },
                { name: "hash", type: "bytes" },
              ],
              type: "SecureValue",
            },
            {
              id: -618540889,
              predicate: "inputSecureValue",
              params: [
                { name: "flags", type: "#" },
                { name: "type", type: "SecureValueType" },
                { name: "data", type: "flags.0?SecureData" },
                { name: "front_side", type: "flags.1?InputSecureFile" },
                { name: "reverse_side", type: "flags.2?InputSecureFile" },
                { name: "selfie", type: "flags.3?InputSecureFile" },
                {
                  name: "translation",
                  type: "flags.6?Vector<InputSecureFile>",
                },
                { name: "files", type: "flags.4?Vector<InputSecureFile>" },
                { name: "plain_data", type: "flags.5?SecurePlainData" },
              ],
              type: "InputSecureValue",
            },
            {
              id: -316748368,
              predicate: "secureValueHash",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "hash", type: "bytes" },
              ],
              type: "SecureValueHash",
            },
            {
              id: -391902247,
              predicate: "secureValueErrorData",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "data_hash", type: "bytes" },
                { name: "field", type: "string" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: 12467706,
              predicate: "secureValueErrorFrontSide",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: -2037765467,
              predicate: "secureValueErrorReverseSide",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: -449327402,
              predicate: "secureValueErrorSelfie",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: 2054162547,
              predicate: "secureValueErrorFile",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: 1717706985,
              predicate: "secureValueErrorFiles",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "Vector<bytes>" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: 871426631,
              predicate: "secureCredentialsEncrypted",
              params: [
                { name: "data", type: "bytes" },
                { name: "hash", type: "bytes" },
                { name: "secret", type: "bytes" },
              ],
              type: "SecureCredentialsEncrypted",
            },
            {
              id: -1389486888,
              predicate: "account.authorizationForm",
              params: [
                { name: "flags", type: "#" },
                { name: "required_types", type: "Vector<SecureRequiredType>" },
                { name: "values", type: "Vector<SecureValue>" },
                { name: "errors", type: "Vector<SecureValueError>" },
                { name: "users", type: "Vector<User>" },
                { name: "privacy_policy_url", type: "flags.0?string" },
              ],
              type: "account.AuthorizationForm",
            },
            {
              id: -2128640689,
              predicate: "account.sentEmailCode",
              params: [
                { name: "email_pattern", type: "string" },
                { name: "length", type: "int" },
              ],
              type: "account.SentEmailCode",
            },
            {
              id: 455635795,
              predicate: "messageActionSecureValuesSentMe",
              params: [
                { name: "values", type: "Vector<SecureValue>" },
                { name: "credentials", type: "SecureCredentialsEncrypted" },
              ],
              type: "MessageAction",
            },
            {
              id: -648257196,
              predicate: "messageActionSecureValuesSent",
              params: [{ name: "types", type: "Vector<SecureValueType>" }],
              type: "MessageAction",
            },
            {
              id: 1722786150,
              predicate: "help.deepLinkInfoEmpty",
              params: [],
              type: "help.DeepLinkInfo",
            },
            {
              id: 1783556146,
              predicate: "help.deepLinkInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "update_app", type: "flags.0?true" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
              ],
              type: "help.DeepLinkInfo",
            },
            {
              id: 289586518,
              predicate: "savedPhoneContact",
              params: [
                { name: "phone", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "date", type: "int" },
              ],
              type: "SavedContact",
            },
            {
              id: 1304052993,
              predicate: "account.takeout",
              params: [{ name: "id", type: "long" }],
              type: "account.Takeout",
            },
            {
              id: 700340377,
              predicate: "inputTakeoutFileLocation",
              params: [],
              type: "InputFileLocation",
            },
            {
              id: -513517117,
              predicate: "updateDialogUnreadMark",
              params: [
                { name: "flags", type: "#" },
                { name: "unread", type: "flags.0?true" },
                { name: "peer", type: "DialogPeer" },
              ],
              type: "Update",
            },
            {
              id: -253500010,
              predicate: "messages.dialogsNotModified",
              params: [{ name: "count", type: "int" }],
              type: "messages.Dialogs",
            },
            {
              id: -1625153079,
              predicate: "inputWebFileGeoPointLocation",
              params: [
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "access_hash", type: "long" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "zoom", type: "int" },
                { name: "scale", type: "int" },
              ],
              type: "InputWebFileLocation",
            },
            {
              id: -1255369827,
              predicate: "contacts.topPeersDisabled",
              params: [],
              type: "contacts.TopPeers",
            },
            {
              id: -1685456582,
              predicate: "inputReportReasonCopyright",
              params: [],
              type: "ReportReason",
            },
            {
              id: -732254058,
              predicate: "passwordKdfAlgoUnknown",
              params: [],
              type: "PasswordKdfAlgo",
            },
            {
              id: 4883767,
              predicate: "securePasswordKdfAlgoUnknown",
              params: [],
              type: "SecurePasswordKdfAlgo",
            },
            {
              id: -1141711456,
              predicate: "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
              params: [{ name: "salt", type: "bytes" }],
              type: "SecurePasswordKdfAlgo",
            },
            {
              id: -2042159726,
              predicate: "securePasswordKdfAlgoSHA512",
              params: [{ name: "salt", type: "bytes" }],
              type: "SecurePasswordKdfAlgo",
            },
            {
              id: 354925740,
              predicate: "secureSecretSettings",
              params: [
                { name: "secure_algo", type: "SecurePasswordKdfAlgo" },
                { name: "secure_secret", type: "bytes" },
                { name: "secure_secret_id", type: "long" },
              ],
              type: "SecureSecretSettings",
            },
            {
              id: 982592842,
              predicate:
                "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
              params: [
                { name: "salt1", type: "bytes" },
                { name: "salt2", type: "bytes" },
                { name: "g", type: "int" },
                { name: "p", type: "bytes" },
              ],
              type: "PasswordKdfAlgo",
            },
            {
              id: -1736378792,
              predicate: "inputCheckPasswordEmpty",
              params: [],
              type: "InputCheckPasswordSRP",
            },
            {
              id: -763367294,
              predicate: "inputCheckPasswordSRP",
              params: [
                { name: "srp_id", type: "long" },
                { name: "A", type: "bytes" },
                { name: "M1", type: "bytes" },
              ],
              type: "InputCheckPasswordSRP",
            },
            {
              id: -2036501105,
              predicate: "secureValueError",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: -1592506512,
              predicate: "secureValueErrorTranslationFile",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "bytes" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: 878931416,
              predicate: "secureValueErrorTranslationFiles",
              params: [
                { name: "type", type: "SecureValueType" },
                { name: "file_hash", type: "Vector<bytes>" },
                { name: "text", type: "string" },
              ],
              type: "SecureValueError",
            },
            {
              id: -2103600678,
              predicate: "secureRequiredType",
              params: [
                { name: "flags", type: "#" },
                { name: "native_names", type: "flags.0?true" },
                { name: "selfie_required", type: "flags.1?true" },
                { name: "translation_required", type: "flags.2?true" },
                { name: "type", type: "SecureValueType" },
              ],
              type: "SecureRequiredType",
            },
            {
              id: 41187252,
              predicate: "secureRequiredTypeOneOf",
              params: [{ name: "types", type: "Vector<SecureRequiredType>" }],
              type: "SecureRequiredType",
            },
            {
              id: -1078332329,
              predicate: "help.passportConfigNotModified",
              params: [],
              type: "help.PassportConfig",
            },
            {
              id: -1600596305,
              predicate: "help.passportConfig",
              params: [
                { name: "hash", type: "int" },
                { name: "countries_langs", type: "DataJSON" },
              ],
              type: "help.PassportConfig",
            },
            {
              id: 488313413,
              predicate: "inputAppEvent",
              params: [
                { name: "time", type: "double" },
                { name: "type", type: "string" },
                { name: "peer", type: "long" },
                { name: "data", type: "JSONValue" },
              ],
              type: "InputAppEvent",
            },
            {
              id: -1059185703,
              predicate: "jsonObjectValue",
              params: [
                { name: "key", type: "string" },
                { name: "value", type: "JSONValue" },
              ],
              type: "JSONObjectValue",
            },
            {
              id: 1064139624,
              predicate: "jsonNull",
              params: [],
              type: "JSONValue",
            },
            {
              id: -952869270,
              predicate: "jsonBool",
              params: [{ name: "value", type: "Bool" }],
              type: "JSONValue",
            },
            {
              id: 736157604,
              predicate: "jsonNumber",
              params: [{ name: "value", type: "double" }],
              type: "JSONValue",
            },
            {
              id: -1222740358,
              predicate: "jsonString",
              params: [{ name: "value", type: "string" }],
              type: "JSONValue",
            },
            {
              id: -146520221,
              predicate: "jsonArray",
              params: [{ name: "value", type: "Vector<JSONValue>" }],
              type: "JSONValue",
            },
            {
              id: -1715350371,
              predicate: "jsonObject",
              params: [{ name: "value", type: "Vector<JSONObjectValue>" }],
              type: "JSONValue",
            },
            {
              id: -1311015810,
              predicate: "inputNotifyBroadcasts",
              params: [],
              type: "InputNotifyPeer",
            },
            {
              id: -703403793,
              predicate: "notifyBroadcasts",
              params: [],
              type: "NotifyPeer",
            },
            {
              id: -311786236,
              predicate: "textSubscript",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: -939827711,
              predicate: "textSuperscript",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: 55281185,
              predicate: "textMarked",
              params: [{ name: "text", type: "RichText" }],
              type: "RichText",
            },
            {
              id: 483104362,
              predicate: "textPhone",
              params: [
                { name: "text", type: "RichText" },
                { name: "phone", type: "string" },
              ],
              type: "RichText",
            },
            {
              id: 136105807,
              predicate: "textImage",
              params: [
                { name: "document_id", type: "long" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
              ],
              type: "RichText",
            },
            {
              id: 504660880,
              predicate: "pageBlockKicker",
              params: [{ name: "text", type: "RichText" }],
              type: "PageBlock",
            },
            {
              id: 878078826,
              predicate: "pageTableCell",
              params: [
                { name: "flags", type: "#" },
                { name: "header", type: "flags.0?true" },
                { name: "align_center", type: "flags.3?true" },
                { name: "align_right", type: "flags.4?true" },
                { name: "valign_middle", type: "flags.5?true" },
                { name: "valign_bottom", type: "flags.6?true" },
                { name: "text", type: "flags.7?RichText" },
                { name: "colspan", type: "flags.1?int" },
                { name: "rowspan", type: "flags.2?int" },
              ],
              type: "PageTableCell",
            },
            {
              id: -524237339,
              predicate: "pageTableRow",
              params: [{ name: "cells", type: "Vector<PageTableCell>" }],
              type: "PageTableRow",
            },
            {
              id: -1085412734,
              predicate: "pageBlockTable",
              params: [
                { name: "flags", type: "#" },
                { name: "bordered", type: "flags.0?true" },
                { name: "striped", type: "flags.1?true" },
                { name: "title", type: "RichText" },
                { name: "rows", type: "Vector<PageTableRow>" },
              ],
              type: "PageBlock",
            },
            {
              id: 1869903447,
              predicate: "pageCaption",
              params: [
                { name: "text", type: "RichText" },
                { name: "credit", type: "RichText" },
              ],
              type: "PageCaption",
            },
            {
              id: -1188055347,
              predicate: "pageListItemText",
              params: [{ name: "text", type: "RichText" }],
              type: "PageListItem",
            },
            {
              id: 635466748,
              predicate: "pageListItemBlocks",
              params: [{ name: "blocks", type: "Vector<PageBlock>" }],
              type: "PageListItem",
            },
            {
              id: 1577484359,
              predicate: "pageListOrderedItemText",
              params: [
                { name: "num", type: "string" },
                { name: "text", type: "RichText" },
              ],
              type: "PageListOrderedItem",
            },
            {
              id: -1730311882,
              predicate: "pageListOrderedItemBlocks",
              params: [
                { name: "num", type: "string" },
                { name: "blocks", type: "Vector<PageBlock>" },
              ],
              type: "PageListOrderedItem",
            },
            {
              id: -1702174239,
              predicate: "pageBlockOrderedList",
              params: [{ name: "items", type: "Vector<PageListOrderedItem>" }],
              type: "PageBlock",
            },
            {
              id: 1987480557,
              predicate: "pageBlockDetails",
              params: [
                { name: "flags", type: "#" },
                { name: "open", type: "flags.0?true" },
                { name: "blocks", type: "Vector<PageBlock>" },
                { name: "title", type: "RichText" },
              ],
              type: "PageBlock",
            },
            {
              id: -1282352120,
              predicate: "pageRelatedArticle",
              params: [
                { name: "flags", type: "#" },
                { name: "url", type: "string" },
                { name: "webpage_id", type: "long" },
                { name: "title", type: "flags.0?string" },
                { name: "description", type: "flags.1?string" },
                { name: "photo_id", type: "flags.2?long" },
                { name: "author", type: "flags.3?string" },
                { name: "published_date", type: "flags.4?int" },
              ],
              type: "PageRelatedArticle",
            },
            {
              id: 370236054,
              predicate: "pageBlockRelatedArticles",
              params: [
                { name: "title", type: "RichText" },
                { name: "articles", type: "Vector<PageRelatedArticle>" },
              ],
              type: "PageBlock",
            },
            {
              id: -1538310410,
              predicate: "pageBlockMap",
              params: [
                { name: "geo", type: "GeoPoint" },
                { name: "zoom", type: "int" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "caption", type: "PageCaption" },
              ],
              type: "PageBlock",
            },
            {
              id: -1738178803,
              predicate: "page",
              params: [
                { name: "flags", type: "#" },
                { name: "part", type: "flags.0?true" },
                { name: "rtl", type: "flags.1?true" },
                { name: "v2", type: "flags.2?true" },
                { name: "url", type: "string" },
                { name: "blocks", type: "Vector<PageBlock>" },
                { name: "photos", type: "Vector<Photo>" },
                { name: "documents", type: "Vector<Document>" },
                { name: "views", type: "flags.3?int" },
              ],
              type: "Page",
            },
            {
              id: -610373422,
              predicate: "inputPrivacyKeyPhoneP2P",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: 961092808,
              predicate: "privacyKeyPhoneP2P",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: 894777186,
              predicate: "textAnchor",
              params: [
                { name: "text", type: "RichText" },
                { name: "name", type: "string" },
              ],
              type: "RichText",
            },
            {
              id: -1945767479,
              predicate: "help.supportName",
              params: [{ name: "name", type: "string" }],
              type: "help.SupportName",
            },
            {
              id: -206688531,
              predicate: "help.userInfoEmpty",
              params: [],
              type: "help.UserInfo",
            },
            {
              id: 32192344,
              predicate: "help.userInfo",
              params: [
                { name: "message", type: "string" },
                { name: "entities", type: "Vector<MessageEntity>" },
                { name: "author", type: "string" },
                { name: "date", type: "int" },
              ],
              type: "help.UserInfo",
            },
            {
              id: -202219658,
              predicate: "messageActionContactSignUp",
              params: [],
              type: "MessageAction",
            },
            {
              id: -1398708869,
              predicate: "updateMessagePoll",
              params: [
                { name: "flags", type: "#" },
                { name: "poll_id", type: "long" },
                { name: "poll", type: "flags.0?Poll" },
                { name: "results", type: "PollResults" },
              ],
              type: "Update",
            },
            {
              id: 1823064809,
              predicate: "pollAnswer",
              params: [
                { name: "text", type: "string" },
                { name: "option", type: "bytes" },
              ],
              type: "PollAnswer",
            },
            {
              id: -2032041631,
              predicate: "poll",
              params: [
                { name: "id", type: "long" },
                { name: "flags", type: "#" },
                { name: "closed", type: "flags.0?true" },
                { name: "public_voters", type: "flags.1?true" },
                { name: "multiple_choice", type: "flags.2?true" },
                { name: "quiz", type: "flags.3?true" },
                { name: "question", type: "string" },
                { name: "answers", type: "Vector<PollAnswer>" },
                { name: "close_period", type: "flags.4?int" },
                { name: "close_date", type: "flags.5?int" },
              ],
              type: "Poll",
            },
            {
              id: 997055186,
              predicate: "pollAnswerVoters",
              params: [
                { name: "flags", type: "#" },
                { name: "chosen", type: "flags.0?true" },
                { name: "correct", type: "flags.1?true" },
                { name: "option", type: "bytes" },
                { name: "voters", type: "int" },
              ],
              type: "PollAnswerVoters",
            },
            {
              id: -591909213,
              predicate: "pollResults",
              params: [
                { name: "flags", type: "#" },
                { name: "min", type: "flags.0?true" },
                { name: "results", type: "flags.1?Vector<PollAnswerVoters>" },
                { name: "total_voters", type: "flags.2?int" },
                { name: "recent_voters", type: "flags.3?Vector<long>" },
                { name: "solution", type: "flags.4?string" },
                {
                  name: "solution_entities",
                  type: "flags.4?Vector<MessageEntity>",
                },
              ],
              type: "PollResults",
            },
            {
              id: 261416433,
              predicate: "inputMediaPoll",
              params: [
                { name: "flags", type: "#" },
                { name: "poll", type: "Poll" },
                { name: "correct_answers", type: "flags.0?Vector<bytes>" },
                { name: "solution", type: "flags.1?string" },
                {
                  name: "solution_entities",
                  type: "flags.1?Vector<MessageEntity>",
                },
              ],
              type: "InputMedia",
            },
            {
              id: 1272375192,
              predicate: "messageMediaPoll",
              params: [
                { name: "poll", type: "Poll" },
                { name: "results", type: "PollResults" },
              ],
              type: "MessageMedia",
            },
            {
              id: -264117680,
              predicate: "chatOnlines",
              params: [{ name: "onlines", type: "int" }],
              type: "ChatOnlines",
            },
            {
              id: 1202287072,
              predicate: "statsURL",
              params: [{ name: "url", type: "string" }],
              type: "StatsURL",
            },
            {
              id: -525288402,
              predicate: "photoStrippedSize",
              params: [
                { name: "type", type: "string" },
                { name: "bytes", type: "bytes" },
              ],
              type: "PhotoSize",
            },
            {
              id: 1605510357,
              predicate: "chatAdminRights",
              params: [
                { name: "flags", type: "#" },
                { name: "change_info", type: "flags.0?true" },
                { name: "post_messages", type: "flags.1?true" },
                { name: "edit_messages", type: "flags.2?true" },
                { name: "delete_messages", type: "flags.3?true" },
                { name: "ban_users", type: "flags.4?true" },
                { name: "invite_users", type: "flags.5?true" },
                { name: "pin_messages", type: "flags.7?true" },
                { name: "add_admins", type: "flags.9?true" },
                { name: "anonymous", type: "flags.10?true" },
                { name: "manage_call", type: "flags.11?true" },
                { name: "other", type: "flags.12?true" },
              ],
              type: "ChatAdminRights",
            },
            {
              id: -1626209256,
              predicate: "chatBannedRights",
              params: [
                { name: "flags", type: "#" },
                { name: "view_messages", type: "flags.0?true" },
                { name: "send_messages", type: "flags.1?true" },
                { name: "send_media", type: "flags.2?true" },
                { name: "send_stickers", type: "flags.3?true" },
                { name: "send_gifs", type: "flags.4?true" },
                { name: "send_games", type: "flags.5?true" },
                { name: "send_inline", type: "flags.6?true" },
                { name: "embed_links", type: "flags.7?true" },
                { name: "send_polls", type: "flags.8?true" },
                { name: "change_info", type: "flags.10?true" },
                { name: "invite_users", type: "flags.15?true" },
                { name: "pin_messages", type: "flags.17?true" },
                { name: "until_date", type: "int" },
              ],
              type: "ChatBannedRights",
            },
            {
              id: 1421875280,
              predicate: "updateChatDefaultBannedRights",
              params: [
                { name: "peer", type: "Peer" },
                { name: "default_banned_rights", type: "ChatBannedRights" },
                { name: "version", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -433014407,
              predicate: "inputWallPaper",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputWallPaper",
            },
            {
              id: 1913199744,
              predicate: "inputWallPaperSlug",
              params: [{ name: "slug", type: "string" }],
              type: "InputWallPaper",
            },
            {
              id: -1150621555,
              predicate: "channelParticipantsContacts",
              params: [{ name: "q", type: "string" }],
              type: "ChannelParticipantsFilter",
            },
            {
              id: 771095562,
              predicate: "channelAdminLogEventActionDefaultBannedRights",
              params: [
                { name: "prev_banned_rights", type: "ChatBannedRights" },
                { name: "new_banned_rights", type: "ChatBannedRights" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -1895328189,
              predicate: "channelAdminLogEventActionStopPoll",
              params: [{ name: "message", type: "Message" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 471437699,
              predicate: "account.wallPapersNotModified",
              params: [],
              type: "account.WallPapers",
            },
            {
              id: -842824308,
              predicate: "account.wallPapers",
              params: [
                { name: "hash", type: "long" },
                { name: "wallpapers", type: "Vector<WallPaper>" },
              ],
              type: "account.WallPapers",
            },
            {
              id: -1973130814,
              predicate: "codeSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "allow_flashcall", type: "flags.0?true" },
                { name: "current_number", type: "flags.1?true" },
                { name: "allow_app_hash", type: "flags.4?true" },
                { name: "allow_missed_call", type: "flags.5?true" },
                { name: "logout_tokens", type: "flags.6?Vector<bytes>" },
              ],
              type: "CodeSettings",
            },
            {
              id: 499236004,
              predicate: "wallPaperSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "blur", type: "flags.1?true" },
                { name: "motion", type: "flags.2?true" },
                { name: "background_color", type: "flags.0?int" },
                { name: "second_background_color", type: "flags.4?int" },
                { name: "third_background_color", type: "flags.5?int" },
                { name: "fourth_background_color", type: "flags.6?int" },
                { name: "intensity", type: "flags.3?int" },
                { name: "rotation", type: "flags.4?int" },
              ],
              type: "WallPaperSettings",
            },
            {
              id: -532532493,
              predicate: "autoDownloadSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "disabled", type: "flags.0?true" },
                { name: "video_preload_large", type: "flags.1?true" },
                { name: "audio_preload_next", type: "flags.2?true" },
                { name: "phonecalls_less_data", type: "flags.3?true" },
                { name: "photo_size_max", type: "int" },
                { name: "video_size_max", type: "int" },
                { name: "file_size_max", type: "int" },
                { name: "video_upload_maxbitrate", type: "int" },
              ],
              type: "AutoDownloadSettings",
            },
            {
              id: 1674235686,
              predicate: "account.autoDownloadSettings",
              params: [
                { name: "low", type: "AutoDownloadSettings" },
                { name: "medium", type: "AutoDownloadSettings" },
                { name: "high", type: "AutoDownloadSettings" },
              ],
              type: "account.AutoDownloadSettings",
            },
            {
              id: -709641735,
              predicate: "emojiKeyword",
              params: [
                { name: "keyword", type: "string" },
                { name: "emoticons", type: "Vector<string>" },
              ],
              type: "EmojiKeyword",
            },
            {
              id: 594408994,
              predicate: "emojiKeywordDeleted",
              params: [
                { name: "keyword", type: "string" },
                { name: "emoticons", type: "Vector<string>" },
              ],
              type: "EmojiKeyword",
            },
            {
              id: 1556570557,
              predicate: "emojiKeywordsDifference",
              params: [
                { name: "lang_code", type: "string" },
                { name: "from_version", type: "int" },
                { name: "version", type: "int" },
                { name: "keywords", type: "Vector<EmojiKeyword>" },
              ],
              type: "EmojiKeywordsDifference",
            },
            {
              id: -1519029347,
              predicate: "emojiURL",
              params: [{ name: "url", type: "string" }],
              type: "EmojiURL",
            },
            {
              id: -1275374751,
              predicate: "emojiLanguage",
              params: [{ name: "lang_code", type: "string" }],
              type: "EmojiLanguage",
            },
            {
              id: -1529000952,
              predicate: "inputPrivacyKeyForwards",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: 1777096355,
              predicate: "privacyKeyForwards",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: 1461304012,
              predicate: "inputPrivacyKeyProfilePhoto",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: -1777000467,
              predicate: "privacyKeyProfilePhoto",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: 1075322878,
              predicate: "inputPhotoFileLocation",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
                { name: "thumb_size", type: "string" },
              ],
              type: "InputFileLocation",
            },
            {
              id: -667654413,
              predicate: "inputPhotoLegacyFileLocation",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "file_reference", type: "bytes" },
                { name: "volume_id", type: "long" },
                { name: "local_id", type: "int" },
                { name: "secret", type: "long" },
              ],
              type: "InputFileLocation",
            },
            {
              id: 925204121,
              predicate: "inputPeerPhotoFileLocation",
              params: [
                { name: "flags", type: "#" },
                { name: "big", type: "flags.0?true" },
                { name: "peer", type: "InputPeer" },
                { name: "photo_id", type: "long" },
              ],
              type: "InputFileLocation",
            },
            {
              id: -1652231205,
              predicate: "inputStickerSetThumb",
              params: [
                { name: "stickerset", type: "InputStickerSet" },
                { name: "thumb_version", type: "int" },
              ],
              type: "InputFileLocation",
            },
            {
              id: -11252123,
              predicate: "folder",
              params: [
                { name: "flags", type: "#" },
                { name: "autofill_new_broadcasts", type: "flags.0?true" },
                { name: "autofill_public_groups", type: "flags.1?true" },
                { name: "autofill_new_correspondents", type: "flags.2?true" },
                { name: "id", type: "int" },
                { name: "title", type: "string" },
                { name: "photo", type: "flags.3?ChatPhoto" },
              ],
              type: "Folder",
            },
            {
              id: 1908216652,
              predicate: "dialogFolder",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.2?true" },
                { name: "folder", type: "Folder" },
                { name: "peer", type: "Peer" },
                { name: "top_message", type: "int" },
                { name: "unread_muted_peers_count", type: "int" },
                { name: "unread_unmuted_peers_count", type: "int" },
                { name: "unread_muted_messages_count", type: "int" },
                { name: "unread_unmuted_messages_count", type: "int" },
              ],
              type: "Dialog",
            },
            {
              id: 1684014375,
              predicate: "inputDialogPeerFolder",
              params: [{ name: "folder_id", type: "int" }],
              type: "InputDialogPeer",
            },
            {
              id: 1363483106,
              predicate: "dialogPeerFolder",
              params: [{ name: "folder_id", type: "int" }],
              type: "DialogPeer",
            },
            {
              id: -70073706,
              predicate: "inputFolderPeer",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "folder_id", type: "int" },
              ],
              type: "InputFolderPeer",
            },
            {
              id: -373643672,
              predicate: "folderPeer",
              params: [
                { name: "peer", type: "Peer" },
                { name: "folder_id", type: "int" },
              ],
              type: "FolderPeer",
            },
            {
              id: 422972864,
              predicate: "updateFolderPeers",
              params: [
                { name: "folder_peers", type: "Vector<FolderPeer>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 497305826,
              predicate: "inputUserFromMessage",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "user_id", type: "long" },
              ],
              type: "InputUser",
            },
            {
              id: 1536380829,
              predicate: "inputChannelFromMessage",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "channel_id", type: "long" },
              ],
              type: "InputChannel",
            },
            {
              id: -1468331492,
              predicate: "inputPeerUserFromMessage",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "user_id", type: "long" },
              ],
              type: "InputPeer",
            },
            {
              id: -1121318848,
              predicate: "inputPeerChannelFromMessage",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "channel_id", type: "long" },
              ],
              type: "InputPeer",
            },
            {
              id: 55761658,
              predicate: "inputPrivacyKeyPhoneNumber",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: -778378131,
              predicate: "privacyKeyPhoneNumber",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: -1472172887,
              predicate: "topPeerCategoryForwardUsers",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: -68239120,
              predicate: "topPeerCategoryForwardChats",
              params: [],
              type: "TopPeerCategory",
            },
            {
              id: 84703944,
              predicate: "channelAdminLogEventActionChangeLinkedChat",
              params: [
                { name: "prev_value", type: "long" },
                { name: "new_value", type: "long" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -398136321,
              predicate: "messages.searchCounter",
              params: [
                { name: "flags", type: "#" },
                { name: "inexact", type: "flags.1?true" },
                { name: "filter", type: "MessagesFilter" },
                { name: "count", type: "int" },
              ],
              type: "messages.SearchCounter",
            },
            {
              id: 280464681,
              predicate: "keyboardButtonUrlAuth",
              params: [
                { name: "flags", type: "#" },
                { name: "text", type: "string" },
                { name: "fwd_text", type: "flags.0?string" },
                { name: "url", type: "string" },
                { name: "button_id", type: "int" },
              ],
              type: "KeyboardButton",
            },
            {
              id: -802258988,
              predicate: "inputKeyboardButtonUrlAuth",
              params: [
                { name: "flags", type: "#" },
                { name: "request_write_access", type: "flags.0?true" },
                { name: "text", type: "string" },
                { name: "fwd_text", type: "flags.1?string" },
                { name: "url", type: "string" },
                { name: "bot", type: "InputUser" },
              ],
              type: "KeyboardButton",
            },
            {
              id: -1831650802,
              predicate: "urlAuthResultRequest",
              params: [
                { name: "flags", type: "#" },
                { name: "request_write_access", type: "flags.0?true" },
                { name: "bot", type: "User" },
                { name: "domain", type: "string" },
              ],
              type: "UrlAuthResult",
            },
            {
              id: -1886646706,
              predicate: "urlAuthResultAccepted",
              params: [{ name: "url", type: "string" }],
              type: "UrlAuthResult",
            },
            {
              id: -1445536993,
              predicate: "urlAuthResultDefault",
              params: [],
              type: "UrlAuthResult",
            },
            {
              id: -2079962673,
              predicate: "inputPrivacyValueAllowChatParticipants",
              params: [{ name: "chats", type: "Vector<long>" }],
              type: "InputPrivacyRule",
            },
            {
              id: -380694650,
              predicate: "inputPrivacyValueDisallowChatParticipants",
              params: [{ name: "chats", type: "Vector<long>" }],
              type: "InputPrivacyRule",
            },
            {
              id: 1796427406,
              predicate: "privacyValueAllowChatParticipants",
              params: [{ name: "chats", type: "Vector<long>" }],
              type: "PrivacyRule",
            },
            {
              id: 1103656293,
              predicate: "privacyValueDisallowChatParticipants",
              params: [{ name: "chats", type: "Vector<long>" }],
              type: "PrivacyRule",
            },
            {
              id: -1672577397,
              predicate: "messageEntityUnderline",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -1090087980,
              predicate: "messageEntityStrike",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 34469328,
              predicate: "messageEntityBlockquote",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: 1786671974,
              predicate: "updatePeerSettings",
              params: [
                { name: "peer", type: "Peer" },
                { name: "settings", type: "PeerSettings" },
              ],
              type: "Update",
            },
            {
              id: -1078612597,
              predicate: "channelLocationEmpty",
              params: [],
              type: "ChannelLocation",
            },
            {
              id: 547062491,
              predicate: "channelLocation",
              params: [
                { name: "geo_point", type: "GeoPoint" },
                { name: "address", type: "string" },
              ],
              type: "ChannelLocation",
            },
            {
              id: -901375139,
              predicate: "peerLocated",
              params: [
                { name: "peer", type: "Peer" },
                { name: "expires", type: "int" },
                { name: "distance", type: "int" },
              ],
              type: "PeerLocated",
            },
            {
              id: -1263546448,
              predicate: "updatePeerLocated",
              params: [{ name: "peers", type: "Vector<PeerLocated>" }],
              type: "Update",
            },
            {
              id: 241923758,
              predicate: "channelAdminLogEventActionChangeLocation",
              params: [
                { name: "prev_value", type: "ChannelLocation" },
                { name: "new_value", type: "ChannelLocation" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -606798099,
              predicate: "inputReportReasonGeoIrrelevant",
              params: [],
              type: "ReportReason",
            },
            {
              id: 1401984889,
              predicate: "channelAdminLogEventActionToggleSlowMode",
              params: [
                { name: "prev_value", type: "int" },
                { name: "new_value", type: "int" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1148485274,
              predicate: "auth.authorizationSignUpRequired",
              params: [
                { name: "flags", type: "#" },
                {
                  name: "terms_of_service",
                  type: "flags.0?help.TermsOfService",
                },
              ],
              type: "auth.Authorization",
            },
            {
              id: -666824391,
              predicate: "payments.paymentVerificationNeeded",
              params: [{ name: "url", type: "string" }],
              type: "payments.PaymentResult",
            },
            {
              id: 42402760,
              predicate: "inputStickerSetAnimatedEmoji",
              params: [],
              type: "InputStickerSet",
            },
            {
              id: 967122427,
              predicate: "updateNewScheduledMessage",
              params: [{ name: "message", type: "Message" }],
              type: "Update",
            },
            {
              id: -1870238482,
              predicate: "updateDeleteScheduledMessages",
              params: [
                { name: "peer", type: "Peer" },
                { name: "messages", type: "Vector<int>" },
              ],
              type: "Update",
            },
            {
              id: -797791052,
              predicate: "restrictionReason",
              params: [
                { name: "platform", type: "string" },
                { name: "reason", type: "string" },
                { name: "text", type: "string" },
              ],
              type: "RestrictionReason",
            },
            {
              id: 1012306921,
              predicate: "inputTheme",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputTheme",
            },
            {
              id: -175567375,
              predicate: "inputThemeSlug",
              params: [{ name: "slug", type: "string" }],
              type: "InputTheme",
            },
            {
              id: -1609668650,
              predicate: "theme",
              params: [
                { name: "flags", type: "#" },
                { name: "creator", type: "flags.0?true" },
                { name: "default", type: "flags.1?true" },
                { name: "for_chat", type: "flags.5?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "slug", type: "string" },
                { name: "title", type: "string" },
                { name: "document", type: "flags.2?Document" },
                { name: "settings", type: "flags.3?Vector<ThemeSettings>" },
                { name: "emoticon", type: "flags.6?string" },
                { name: "installs_count", type: "flags.4?int" },
              ],
              type: "Theme",
            },
            {
              id: -199313886,
              predicate: "account.themesNotModified",
              params: [],
              type: "account.Themes",
            },
            {
              id: -1707242387,
              predicate: "account.themes",
              params: [
                { name: "hash", type: "long" },
                { name: "themes", type: "Vector<Theme>" },
              ],
              type: "account.Themes",
            },
            {
              id: -2112423005,
              predicate: "updateTheme",
              params: [{ name: "theme", type: "Theme" }],
              type: "Update",
            },
            {
              id: -786326563,
              predicate: "inputPrivacyKeyAddedByPhone",
              params: [],
              type: "InputPrivacyKey",
            },
            {
              id: 1124062251,
              predicate: "privacyKeyAddedByPhone",
              params: [],
              type: "PrivacyKey",
            },
            {
              id: -2027964103,
              predicate: "updateGeoLiveViewed",
              params: [
                { name: "peer", type: "Peer" },
                { name: "msg_id", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 1448076945,
              predicate: "updateLoginToken",
              params: [],
              type: "Update",
            },
            {
              id: 1654593920,
              predicate: "auth.loginToken",
              params: [
                { name: "expires", type: "int" },
                { name: "token", type: "bytes" },
              ],
              type: "auth.LoginToken",
            },
            {
              id: 110008598,
              predicate: "auth.loginTokenMigrateTo",
              params: [
                { name: "dc_id", type: "int" },
                { name: "token", type: "bytes" },
              ],
              type: "auth.LoginToken",
            },
            {
              id: 957176926,
              predicate: "auth.loginTokenSuccess",
              params: [{ name: "authorization", type: "auth.Authorization" }],
              type: "auth.LoginToken",
            },
            {
              id: 1474462241,
              predicate: "account.contentSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "sensitive_enabled", type: "flags.0?true" },
                { name: "sensitive_can_change", type: "flags.1?true" },
              ],
              type: "account.ContentSettings",
            },
            {
              id: -1456996667,
              predicate: "messages.inactiveChats",
              params: [
                { name: "dates", type: "Vector<int>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.InactiveChats",
            },
            {
              id: -1012849566,
              predicate: "baseThemeClassic",
              params: [],
              type: "BaseTheme",
            },
            {
              id: -69724536,
              predicate: "baseThemeDay",
              params: [],
              type: "BaseTheme",
            },
            {
              id: -1212997976,
              predicate: "baseThemeNight",
              params: [],
              type: "BaseTheme",
            },
            {
              id: 1834973166,
              predicate: "baseThemeTinted",
              params: [],
              type: "BaseTheme",
            },
            {
              id: 1527845466,
              predicate: "baseThemeArctic",
              params: [],
              type: "BaseTheme",
            },
            {
              id: -1770371538,
              predicate: "inputWallPaperNoFile",
              params: [{ name: "id", type: "long" }],
              type: "InputWallPaper",
            },
            {
              id: -528465642,
              predicate: "wallPaperNoFile",
              params: [
                { name: "id", type: "long" },
                { name: "flags", type: "#" },
                { name: "default", type: "flags.1?true" },
                { name: "dark", type: "flags.4?true" },
                { name: "settings", type: "flags.2?WallPaperSettings" },
              ],
              type: "WallPaper",
            },
            {
              id: -1881255857,
              predicate: "inputThemeSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "message_colors_animated", type: "flags.2?true" },
                { name: "base_theme", type: "BaseTheme" },
                { name: "accent_color", type: "int" },
                { name: "outbox_accent_color", type: "flags.3?int" },
                { name: "message_colors", type: "flags.0?Vector<int>" },
                { name: "wallpaper", type: "flags.1?InputWallPaper" },
                {
                  name: "wallpaper_settings",
                  type: "flags.1?WallPaperSettings",
                },
              ],
              type: "InputThemeSettings",
            },
            {
              id: -94849324,
              predicate: "themeSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "message_colors_animated", type: "flags.2?true" },
                { name: "base_theme", type: "BaseTheme" },
                { name: "accent_color", type: "int" },
                { name: "outbox_accent_color", type: "flags.3?int" },
                { name: "message_colors", type: "flags.0?Vector<int>" },
                { name: "wallpaper", type: "flags.1?WallPaper" },
              ],
              type: "ThemeSettings",
            },
            {
              id: 1421174295,
              predicate: "webPageAttributeTheme",
              params: [
                { name: "flags", type: "#" },
                { name: "documents", type: "flags.0?Vector<Document>" },
                { name: "settings", type: "flags.1?ThemeSettings" },
              ],
              type: "WebPageAttribute",
            },
            {
              id: 274961865,
              predicate: "updateMessagePollVote",
              params: [
                { name: "poll_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "options", type: "Vector<bytes>" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 886196148,
              predicate: "messageUserVote",
              params: [
                { name: "user_id", type: "long" },
                { name: "option", type: "bytes" },
                { name: "date", type: "int" },
              ],
              type: "MessageUserVote",
            },
            {
              id: 1017491692,
              predicate: "messageUserVoteInputOption",
              params: [
                { name: "user_id", type: "long" },
                { name: "date", type: "int" },
              ],
              type: "MessageUserVote",
            },
            {
              id: -1973033641,
              predicate: "messageUserVoteMultiple",
              params: [
                { name: "user_id", type: "long" },
                { name: "options", type: "Vector<bytes>" },
                { name: "date", type: "int" },
              ],
              type: "MessageUserVote",
            },
            {
              id: 136574537,
              predicate: "messages.votesList",
              params: [
                { name: "flags", type: "#" },
                { name: "count", type: "int" },
                { name: "votes", type: "Vector<MessageUserVote>" },
                { name: "users", type: "Vector<User>" },
                { name: "next_offset", type: "flags.0?string" },
              ],
              type: "messages.VotesList",
            },
            {
              id: -1144565411,
              predicate: "keyboardButtonRequestPoll",
              params: [
                { name: "flags", type: "#" },
                { name: "quiz", type: "flags.0?Bool" },
                { name: "text", type: "string" },
              ],
              type: "KeyboardButton",
            },
            {
              id: 1981704948,
              predicate: "messageEntityBankCard",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -177732982,
              predicate: "bankCardOpenUrl",
              params: [
                { name: "url", type: "string" },
                { name: "name", type: "string" },
              ],
              type: "BankCardOpenUrl",
            },
            {
              id: 1042605427,
              predicate: "payments.bankCardData",
              params: [
                { name: "title", type: "string" },
                { name: "open_urls", type: "Vector<BankCardOpenUrl>" },
              ],
              type: "payments.BankCardData",
            },
            {
              id: -118740917,
              predicate: "peerSelfLocated",
              params: [{ name: "expires", type: "int" }],
              type: "PeerLocated",
            },
            {
              id: 1949890536,
              predicate: "dialogFilter",
              params: [
                { name: "flags", type: "#" },
                { name: "contacts", type: "flags.0?true" },
                { name: "non_contacts", type: "flags.1?true" },
                { name: "groups", type: "flags.2?true" },
                { name: "broadcasts", type: "flags.3?true" },
                { name: "bots", type: "flags.4?true" },
                { name: "exclude_muted", type: "flags.11?true" },
                { name: "exclude_read", type: "flags.12?true" },
                { name: "exclude_archived", type: "flags.13?true" },
                { name: "id", type: "int" },
                { name: "title", type: "string" },
                { name: "emoticon", type: "flags.25?string" },
                { name: "pinned_peers", type: "Vector<InputPeer>" },
                { name: "include_peers", type: "Vector<InputPeer>" },
                { name: "exclude_peers", type: "Vector<InputPeer>" },
              ],
              type: "DialogFilter",
            },
            {
              id: 2004110666,
              predicate: "dialogFilterSuggested",
              params: [
                { name: "filter", type: "DialogFilter" },
                { name: "description", type: "string" },
              ],
              type: "DialogFilterSuggested",
            },
            {
              id: 654302845,
              predicate: "updateDialogFilter",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "int" },
                { name: "filter", type: "flags.0?DialogFilter" },
              ],
              type: "Update",
            },
            {
              id: -1512627963,
              predicate: "updateDialogFilterOrder",
              params: [{ name: "order", type: "Vector<int>" }],
              type: "Update",
            },
            {
              id: 889491791,
              predicate: "updateDialogFilters",
              params: [],
              type: "Update",
            },
            {
              id: -1237848657,
              predicate: "statsDateRangeDays",
              params: [
                { name: "min_date", type: "int" },
                { name: "max_date", type: "int" },
              ],
              type: "StatsDateRangeDays",
            },
            {
              id: -884757282,
              predicate: "statsAbsValueAndPrev",
              params: [
                { name: "current", type: "double" },
                { name: "previous", type: "double" },
              ],
              type: "StatsAbsValueAndPrev",
            },
            {
              id: -875679776,
              predicate: "statsPercentValue",
              params: [
                { name: "part", type: "double" },
                { name: "total", type: "double" },
              ],
              type: "StatsPercentValue",
            },
            {
              id: 1244130093,
              predicate: "statsGraphAsync",
              params: [{ name: "token", type: "string" }],
              type: "StatsGraph",
            },
            {
              id: -1092839390,
              predicate: "statsGraphError",
              params: [{ name: "error", type: "string" }],
              type: "StatsGraph",
            },
            {
              id: -1901828938,
              predicate: "statsGraph",
              params: [
                { name: "flags", type: "#" },
                { name: "json", type: "DataJSON" },
                { name: "zoom_token", type: "flags.0?string" },
              ],
              type: "StatsGraph",
            },
            {
              id: -1387279939,
              predicate: "messageInteractionCounters",
              params: [
                { name: "msg_id", type: "int" },
                { name: "views", type: "int" },
                { name: "forwards", type: "int" },
              ],
              type: "MessageInteractionCounters",
            },
            {
              id: -1107852396,
              predicate: "stats.broadcastStats",
              params: [
                { name: "period", type: "StatsDateRangeDays" },
                { name: "followers", type: "StatsAbsValueAndPrev" },
                { name: "views_per_post", type: "StatsAbsValueAndPrev" },
                { name: "shares_per_post", type: "StatsAbsValueAndPrev" },
                { name: "enabled_notifications", type: "StatsPercentValue" },
                { name: "growth_graph", type: "StatsGraph" },
                { name: "followers_graph", type: "StatsGraph" },
                { name: "mute_graph", type: "StatsGraph" },
                { name: "top_hours_graph", type: "StatsGraph" },
                { name: "interactions_graph", type: "StatsGraph" },
                { name: "iv_interactions_graph", type: "StatsGraph" },
                { name: "views_by_source_graph", type: "StatsGraph" },
                { name: "new_followers_by_source_graph", type: "StatsGraph" },
                { name: "languages_graph", type: "StatsGraph" },
                {
                  name: "recent_message_interactions",
                  type: "Vector<MessageInteractionCounters>",
                },
              ],
              type: "stats.BroadcastStats",
            },
            {
              id: -428884101,
              predicate: "inputMediaDice",
              params: [{ name: "emoticon", type: "string" }],
              type: "InputMedia",
            },
            {
              id: 1065280907,
              predicate: "messageMediaDice",
              params: [
                { name: "value", type: "int" },
                { name: "emoticon", type: "string" },
              ],
              type: "MessageMedia",
            },
            {
              id: -427863538,
              predicate: "inputStickerSetDice",
              params: [{ name: "emoticon", type: "string" }],
              type: "InputStickerSet",
            },
            {
              id: -1728664459,
              predicate: "help.promoDataEmpty",
              params: [{ name: "expires", type: "int" }],
              type: "help.PromoData",
            },
            {
              id: -1942390465,
              predicate: "help.promoData",
              params: [
                { name: "flags", type: "#" },
                { name: "proxy", type: "flags.0?true" },
                { name: "expires", type: "int" },
                { name: "peer", type: "Peer" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "psa_type", type: "flags.1?string" },
                { name: "psa_message", type: "flags.2?string" },
              ],
              type: "help.PromoData",
            },
            {
              id: -567037804,
              predicate: "videoSize",
              params: [
                { name: "flags", type: "#" },
                { name: "type", type: "string" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "size", type: "int" },
                { name: "video_start_ts", type: "flags.0?double" },
              ],
              type: "VideoSize",
            },
            {
              id: 643940105,
              predicate: "updatePhoneCallSignalingData",
              params: [
                { name: "phone_call_id", type: "long" },
                { name: "data", type: "bytes" },
              ],
              type: "Update",
            },
            {
              id: 1634294960,
              predicate: "chatInvitePeek",
              params: [
                { name: "chat", type: "Chat" },
                { name: "expires", type: "int" },
              ],
              type: "ChatInvite",
            },
            {
              id: -1660637285,
              predicate: "statsGroupTopPoster",
              params: [
                { name: "user_id", type: "long" },
                { name: "messages", type: "int" },
                { name: "avg_chars", type: "int" },
              ],
              type: "StatsGroupTopPoster",
            },
            {
              id: -682079097,
              predicate: "statsGroupTopAdmin",
              params: [
                { name: "user_id", type: "long" },
                { name: "deleted", type: "int" },
                { name: "kicked", type: "int" },
                { name: "banned", type: "int" },
              ],
              type: "StatsGroupTopAdmin",
            },
            {
              id: 1398765469,
              predicate: "statsGroupTopInviter",
              params: [
                { name: "user_id", type: "long" },
                { name: "invitations", type: "int" },
              ],
              type: "StatsGroupTopInviter",
            },
            {
              id: -276825834,
              predicate: "stats.megagroupStats",
              params: [
                { name: "period", type: "StatsDateRangeDays" },
                { name: "members", type: "StatsAbsValueAndPrev" },
                { name: "messages", type: "StatsAbsValueAndPrev" },
                { name: "viewers", type: "StatsAbsValueAndPrev" },
                { name: "posters", type: "StatsAbsValueAndPrev" },
                { name: "growth_graph", type: "StatsGraph" },
                { name: "members_graph", type: "StatsGraph" },
                { name: "new_members_by_source_graph", type: "StatsGraph" },
                { name: "languages_graph", type: "StatsGraph" },
                { name: "messages_graph", type: "StatsGraph" },
                { name: "actions_graph", type: "StatsGraph" },
                { name: "top_hours_graph", type: "StatsGraph" },
                { name: "weekdays_graph", type: "StatsGraph" },
                { name: "top_posters", type: "Vector<StatsGroupTopPoster>" },
                { name: "top_admins", type: "Vector<StatsGroupTopAdmin>" },
                { name: "top_inviters", type: "Vector<StatsGroupTopInviter>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "stats.MegagroupStats",
            },
            {
              id: -1096616924,
              predicate: "globalPrivacySettings",
              params: [
                { name: "flags", type: "#" },
                {
                  name: "archive_and_mute_new_noncontact_peers",
                  type: "flags.0?Bool",
                },
              ],
              type: "GlobalPrivacySettings",
            },
            {
              id: 1667228533,
              predicate: "phoneConnectionWebrtc",
              params: [
                { name: "flags", type: "#" },
                { name: "turn", type: "flags.0?true" },
                { name: "stun", type: "flags.1?true" },
                { name: "id", type: "long" },
                { name: "ip", type: "string" },
                { name: "ipv6", type: "string" },
                { name: "port", type: "int" },
                { name: "username", type: "string" },
                { name: "password", type: "string" },
              ],
              type: "PhoneConnection",
            },
            {
              id: 1107543535,
              predicate: "help.countryCode",
              params: [
                { name: "flags", type: "#" },
                { name: "country_code", type: "string" },
                { name: "prefixes", type: "flags.0?Vector<string>" },
                { name: "patterns", type: "flags.1?Vector<string>" },
              ],
              type: "help.CountryCode",
            },
            {
              id: -1014526429,
              predicate: "help.country",
              params: [
                { name: "flags", type: "#" },
                { name: "hidden", type: "flags.0?true" },
                { name: "iso2", type: "string" },
                { name: "default_name", type: "string" },
                { name: "name", type: "flags.1?string" },
                { name: "country_codes", type: "Vector<help.CountryCode>" },
              ],
              type: "help.Country",
            },
            {
              id: -1815339214,
              predicate: "help.countriesListNotModified",
              params: [],
              type: "help.CountriesList",
            },
            {
              id: -2016381538,
              predicate: "help.countriesList",
              params: [
                { name: "countries", type: "Vector<help.Country>" },
                { name: "hash", type: "int" },
              ],
              type: "help.CountriesList",
            },
            {
              id: 1163625789,
              predicate: "messageViews",
              params: [
                { name: "flags", type: "#" },
                { name: "views", type: "flags.0?int" },
                { name: "forwards", type: "flags.1?int" },
                { name: "replies", type: "flags.2?MessageReplies" },
              ],
              type: "MessageViews",
            },
            {
              id: -761649164,
              predicate: "updateChannelMessageForwards",
              params: [
                { name: "channel_id", type: "long" },
                { name: "id", type: "int" },
                { name: "forwards", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -96535659,
              predicate: "photoSizeProgressive",
              params: [
                { name: "type", type: "string" },
                { name: "w", type: "int" },
                { name: "h", type: "int" },
                { name: "sizes", type: "Vector<int>" },
              ],
              type: "PhotoSize",
            },
            {
              id: -1228606141,
              predicate: "messages.messageViews",
              params: [
                { name: "views", type: "Vector<MessageViews>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.MessageViews",
            },
            {
              id: -693004986,
              predicate: "updateReadChannelDiscussionInbox",
              params: [
                { name: "flags", type: "#" },
                { name: "channel_id", type: "long" },
                { name: "top_msg_id", type: "int" },
                { name: "read_max_id", type: "int" },
                { name: "broadcast_id", type: "flags.0?long" },
                { name: "broadcast_post", type: "flags.0?int" },
              ],
              type: "Update",
            },
            {
              id: 1767677564,
              predicate: "updateReadChannelDiscussionOutbox",
              params: [
                { name: "channel_id", type: "long" },
                { name: "top_msg_id", type: "int" },
                { name: "read_max_id", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1506535550,
              predicate: "messages.discussionMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "messages", type: "Vector<Message>" },
                { name: "max_id", type: "flags.0?int" },
                { name: "read_inbox_max_id", type: "flags.1?int" },
                { name: "read_outbox_max_id", type: "flags.2?int" },
                { name: "unread_count", type: "int" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.DiscussionMessage",
            },
            {
              id: -1495959709,
              predicate: "messageReplyHeader",
              params: [
                { name: "flags", type: "#" },
                { name: "reply_to_msg_id", type: "int" },
                { name: "reply_to_peer_id", type: "flags.0?Peer" },
                { name: "reply_to_top_id", type: "flags.1?int" },
              ],
              type: "MessageReplyHeader",
            },
            {
              id: -2083123262,
              predicate: "messageReplies",
              params: [
                { name: "flags", type: "#" },
                { name: "comments", type: "flags.0?true" },
                { name: "replies", type: "int" },
                { name: "replies_pts", type: "int" },
                { name: "recent_repliers", type: "flags.1?Vector<Peer>" },
                { name: "channel_id", type: "flags.0?long" },
                { name: "max_id", type: "flags.2?int" },
                { name: "read_max_id", type: "flags.3?int" },
              ],
              type: "MessageReplies",
            },
            {
              id: 610945826,
              predicate: "updatePeerBlocked",
              params: [
                { name: "peer_id", type: "Peer" },
                { name: "blocked", type: "Bool" },
              ],
              type: "Update",
            },
            {
              id: -386039788,
              predicate: "peerBlocked",
              params: [
                { name: "peer_id", type: "Peer" },
                { name: "date", type: "int" },
              ],
              type: "PeerBlocked",
            },
            {
              id: -1937192669,
              predicate: "updateChannelUserTyping",
              params: [
                { name: "flags", type: "#" },
                { name: "channel_id", type: "long" },
                { name: "top_msg_id", type: "flags.0?int" },
                { name: "from_id", type: "Peer" },
                { name: "action", type: "SendMessageAction" },
              ],
              type: "Update",
            },
            {
              id: -1392895362,
              predicate: "inputMessageCallbackQuery",
              params: [
                { name: "id", type: "int" },
                { name: "query_id", type: "long" },
              ],
              type: "InputMessage",
            },
            {
              id: 453242886,
              predicate: "channelParticipantLeft",
              params: [{ name: "peer", type: "Peer" }],
              type: "ChannelParticipant",
            },
            {
              id: -531931925,
              predicate: "channelParticipantsMentions",
              params: [
                { name: "flags", type: "#" },
                { name: "q", type: "flags.0?string" },
                { name: "top_msg_id", type: "flags.1?int" },
              ],
              type: "ChannelParticipantsFilter",
            },
            {
              id: -309990731,
              predicate: "updatePinnedMessages",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.0?true" },
                { name: "peer", type: "Peer" },
                { name: "messages", type: "Vector<int>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 1538885128,
              predicate: "updatePinnedChannelMessages",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.0?true" },
                { name: "channel_id", type: "long" },
                { name: "messages", type: "Vector<int>" },
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 464520273,
              predicate: "inputMessagesFilterPinned",
              params: [],
              type: "MessagesFilter",
            },
            {
              id: -1986399595,
              predicate: "stats.messageStats",
              params: [{ name: "views_graph", type: "StatsGraph" }],
              type: "stats.MessageStats",
            },
            {
              id: -1730095465,
              predicate: "messageActionGeoProximityReached",
              params: [
                { name: "from_id", type: "Peer" },
                { name: "to_id", type: "Peer" },
                { name: "distance", type: "int" },
              ],
              type: "MessageAction",
            },
            {
              id: -668906175,
              predicate: "photoPathSize",
              params: [
                { name: "type", type: "string" },
                { name: "bytes", type: "bytes" },
              ],
              type: "PhotoSize",
            },
            {
              id: -651419003,
              predicate: "speakingInGroupCallAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: 2004925620,
              predicate: "groupCallDiscarded",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "duration", type: "int" },
              ],
              type: "GroupCall",
            },
            {
              id: -711498484,
              predicate: "groupCall",
              params: [
                { name: "flags", type: "#" },
                { name: "join_muted", type: "flags.1?true" },
                { name: "can_change_join_muted", type: "flags.2?true" },
                { name: "join_date_asc", type: "flags.6?true" },
                { name: "schedule_start_subscribed", type: "flags.8?true" },
                { name: "can_start_video", type: "flags.9?true" },
                { name: "record_video_active", type: "flags.11?true" },
                { name: "rtmp_stream", type: "flags.12?true" },
                { name: "listeners_hidden", type: "flags.13?true" },
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
                { name: "participants_count", type: "int" },
                { name: "title", type: "flags.3?string" },
                { name: "stream_dc_id", type: "flags.4?int" },
                { name: "record_start_date", type: "flags.5?int" },
                { name: "schedule_date", type: "flags.7?int" },
                { name: "unmuted_video_count", type: "flags.10?int" },
                { name: "unmuted_video_limit", type: "int" },
                { name: "version", type: "int" },
              ],
              type: "GroupCall",
            },
            {
              id: -659913713,
              predicate: "inputGroupCall",
              params: [
                { name: "id", type: "long" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputGroupCall",
            },
            {
              id: 2047704898,
              predicate: "messageActionGroupCall",
              params: [
                { name: "flags", type: "#" },
                { name: "call", type: "InputGroupCall" },
                { name: "duration", type: "flags.0?int" },
              ],
              type: "MessageAction",
            },
            {
              id: 1345295095,
              predicate: "messageActionInviteToGroupCall",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "users", type: "Vector<long>" },
              ],
              type: "MessageAction",
            },
            {
              id: -341428482,
              predicate: "groupCallParticipant",
              params: [
                { name: "flags", type: "#" },
                { name: "muted", type: "flags.0?true" },
                { name: "left", type: "flags.1?true" },
                { name: "can_self_unmute", type: "flags.2?true" },
                { name: "just_joined", type: "flags.4?true" },
                { name: "versioned", type: "flags.5?true" },
                { name: "min", type: "flags.8?true" },
                { name: "muted_by_you", type: "flags.9?true" },
                { name: "volume_by_admin", type: "flags.10?true" },
                { name: "self", type: "flags.12?true" },
                { name: "video_joined", type: "flags.15?true" },
                { name: "peer", type: "Peer" },
                { name: "date", type: "int" },
                { name: "active_date", type: "flags.3?int" },
                { name: "source", type: "int" },
                { name: "volume", type: "flags.7?int" },
                { name: "about", type: "flags.11?string" },
                { name: "raise_hand_rating", type: "flags.13?long" },
                { name: "video", type: "flags.6?GroupCallParticipantVideo" },
                {
                  name: "presentation",
                  type: "flags.14?GroupCallParticipantVideo",
                },
              ],
              type: "GroupCallParticipant",
            },
            {
              id: -124097970,
              predicate: "updateChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "Update",
            },
            {
              id: -219423922,
              predicate: "updateGroupCallParticipants",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "participants", type: "Vector<GroupCallParticipant>" },
                { name: "version", type: "int" },
              ],
              type: "Update",
            },
            {
              id: 347227392,
              predicate: "updateGroupCall",
              params: [
                { name: "chat_id", type: "long" },
                { name: "call", type: "GroupCall" },
              ],
              type: "Update",
            },
            {
              id: -1636664659,
              predicate: "phone.groupCall",
              params: [
                { name: "call", type: "GroupCall" },
                { name: "participants", type: "Vector<GroupCallParticipant>" },
                { name: "participants_next_offset", type: "string" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "phone.GroupCall",
            },
            {
              id: -193506890,
              predicate: "phone.groupParticipants",
              params: [
                { name: "count", type: "int" },
                { name: "participants", type: "Vector<GroupCallParticipant>" },
                { name: "next_offset", type: "string" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "version", type: "int" },
              ],
              type: "phone.GroupParticipants",
            },
            {
              id: 813821341,
              predicate: "inlineQueryPeerTypeSameBotPM",
              params: [],
              type: "InlineQueryPeerType",
            },
            {
              id: -2093215828,
              predicate: "inlineQueryPeerTypePM",
              params: [],
              type: "InlineQueryPeerType",
            },
            {
              id: -681130742,
              predicate: "inlineQueryPeerTypeChat",
              params: [],
              type: "InlineQueryPeerType",
            },
            {
              id: 1589952067,
              predicate: "inlineQueryPeerTypeMegagroup",
              params: [],
              type: "InlineQueryPeerType",
            },
            {
              id: 1664413338,
              predicate: "inlineQueryPeerTypeBroadcast",
              params: [],
              type: "InlineQueryPeerType",
            },
            {
              id: 589338437,
              predicate: "channelAdminLogEventActionStartGroupCall",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -610299584,
              predicate: "channelAdminLogEventActionDiscardGroupCall",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -115071790,
              predicate: "channelAdminLogEventActionParticipantMute",
              params: [{ name: "participant", type: "GroupCallParticipant" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -431740480,
              predicate: "channelAdminLogEventActionParticipantUnmute",
              params: [{ name: "participant", type: "GroupCallParticipant" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1456906823,
              predicate: "channelAdminLogEventActionToggleGroupCallSetting",
              params: [{ name: "join_muted", type: "Bool" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -1966921727,
              predicate: "inputPaymentCredentialsGooglePay",
              params: [{ name: "payment_token", type: "DataJSON" }],
              type: "InputPaymentCredentials",
            },
            {
              id: 375566091,
              predicate: "messages.historyImport",
              params: [{ name: "id", type: "long" }],
              type: "messages.HistoryImport",
            },
            {
              id: -606432698,
              predicate: "sendMessageHistoryImportAction",
              params: [{ name: "progress", type: "int" }],
              type: "SendMessageAction",
            },
            {
              id: 1578088377,
              predicate: "messages.historyImportParsed",
              params: [
                { name: "flags", type: "#" },
                { name: "pm", type: "flags.0?true" },
                { name: "group", type: "flags.1?true" },
                { name: "title", type: "flags.2?string" },
              ],
              type: "messages.HistoryImportParsed",
            },
            {
              id: -170010905,
              predicate: "inputReportReasonFake",
              params: [],
              type: "ReportReason",
            },
            {
              id: -275956116,
              predicate: "messages.affectedFoundMessages",
              params: [
                { name: "pts", type: "int" },
                { name: "pts_count", type: "int" },
                { name: "offset", type: "int" },
                { name: "messages", type: "Vector<int>" },
              ],
              type: "messages.AffectedFoundMessages",
            },
            {
              id: -1441072131,
              predicate: "messageActionSetMessagesTTL",
              params: [{ name: "period", type: "int" }],
              type: "MessageAction",
            },
            {
              id: -1147422299,
              predicate: "updatePeerHistoryTTL",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "Peer" },
                { name: "ttl_period", type: "flags.0?int" },
              ],
              type: "Update",
            },
            {
              id: -796432838,
              predicate: "updateChatParticipant",
              params: [
                { name: "flags", type: "#" },
                { name: "chat_id", type: "long" },
                { name: "date", type: "int" },
                { name: "actor_id", type: "long" },
                { name: "user_id", type: "long" },
                { name: "prev_participant", type: "flags.0?ChatParticipant" },
                { name: "new_participant", type: "flags.1?ChatParticipant" },
                { name: "invite", type: "flags.2?ExportedChatInvite" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1738720581,
              predicate: "updateChannelParticipant",
              params: [
                { name: "flags", type: "#" },
                { name: "channel_id", type: "long" },
                { name: "date", type: "int" },
                { name: "actor_id", type: "long" },
                { name: "user_id", type: "long" },
                {
                  name: "prev_participant",
                  type: "flags.0?ChannelParticipant",
                },
                { name: "new_participant", type: "flags.1?ChannelParticipant" },
                { name: "invite", type: "flags.2?ExportedChatInvite" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -997782967,
              predicate: "updateBotStopped",
              params: [
                { name: "user_id", type: "long" },
                { name: "date", type: "int" },
                { name: "stopped", type: "Bool" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1940201511,
              predicate: "chatInviteImporter",
              params: [
                { name: "flags", type: "#" },
                { name: "requested", type: "flags.0?true" },
                { name: "user_id", type: "long" },
                { name: "date", type: "int" },
                { name: "about", type: "flags.2?string" },
                { name: "approved_by", type: "flags.1?long" },
              ],
              type: "ChatInviteImporter",
            },
            {
              id: -1111085620,
              predicate: "messages.exportedChatInvites",
              params: [
                { name: "count", type: "int" },
                { name: "invites", type: "Vector<ExportedChatInvite>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ExportedChatInvites",
            },
            {
              id: 410107472,
              predicate: "messages.exportedChatInvite",
              params: [
                { name: "invite", type: "ExportedChatInvite" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ExportedChatInvite",
            },
            {
              id: 572915951,
              predicate: "messages.exportedChatInviteReplaced",
              params: [
                { name: "invite", type: "ExportedChatInvite" },
                { name: "new_invite", type: "ExportedChatInvite" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ExportedChatInvite",
            },
            {
              id: -2118733814,
              predicate: "messages.chatInviteImporters",
              params: [
                { name: "count", type: "int" },
                { name: "importers", type: "Vector<ChatInviteImporter>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ChatInviteImporters",
            },
            {
              id: -219353309,
              predicate: "chatAdminWithInvites",
              params: [
                { name: "admin_id", type: "long" },
                { name: "invites_count", type: "int" },
                { name: "revoked_invites_count", type: "int" },
              ],
              type: "ChatAdminWithInvites",
            },
            {
              id: -1231326505,
              predicate: "messages.chatAdminsWithInvites",
              params: [
                { name: "admins", type: "Vector<ChatAdminWithInvites>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.ChatAdminsWithInvites",
            },
            {
              id: 1557846647,
              predicate: "channelAdminLogEventActionParticipantJoinByInvite",
              params: [{ name: "invite", type: "ExportedChatInvite" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1515256996,
              predicate: "channelAdminLogEventActionExportedInviteDelete",
              params: [{ name: "invite", type: "ExportedChatInvite" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1091179342,
              predicate: "channelAdminLogEventActionExportedInviteRevoke",
              params: [{ name: "invite", type: "ExportedChatInvite" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -384910503,
              predicate: "channelAdminLogEventActionExportedInviteEdit",
              params: [
                { name: "prev_invite", type: "ExportedChatInvite" },
                { name: "new_invite", type: "ExportedChatInvite" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1048537159,
              predicate: "channelAdminLogEventActionParticipantVolume",
              params: [{ name: "participant", type: "GroupCallParticipant" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1855199800,
              predicate: "channelAdminLogEventActionChangeHistoryTTL",
              params: [
                { name: "prev_value", type: "int" },
                { name: "new_value", type: "int" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -1571952873,
              predicate: "messages.checkedHistoryImportPeer",
              params: [{ name: "confirm_text", type: "string" }],
              type: "messages.CheckedHistoryImportPeer",
            },
            {
              id: 93890858,
              predicate: "inputGroupCallStream",
              params: [
                { name: "flags", type: "#" },
                { name: "call", type: "InputGroupCall" },
                { name: "time_ms", type: "long" },
                { name: "scale", type: "int" },
                { name: "video_channel", type: "flags.0?int" },
                { name: "video_quality", type: "flags.0?int" },
              ],
              type: "InputFileLocation",
            },
            {
              id: -1343921601,
              predicate: "phone.joinAsPeers",
              params: [
                { name: "peers", type: "Vector<Peer>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "phone.JoinAsPeers",
            },
            {
              id: 541839704,
              predicate: "phone.exportedGroupCallInvite",
              params: [{ name: "link", type: "string" }],
              type: "phone.ExportedGroupCallInvite",
            },
            {
              id: -672693723,
              predicate: "inputBotInlineMessageMediaInvoice",
              params: [
                { name: "flags", type: "#" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "flags.0?InputWebDocument" },
                { name: "invoice", type: "Invoice" },
                { name: "payload", type: "bytes" },
                { name: "provider", type: "string" },
                { name: "provider_data", type: "DataJSON" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "InputBotInlineMessage",
            },
            {
              id: 894081801,
              predicate: "botInlineMessageMediaInvoice",
              params: [
                { name: "flags", type: "#" },
                { name: "shipping_address_requested", type: "flags.1?true" },
                { name: "test", type: "flags.3?true" },
                { name: "title", type: "string" },
                { name: "description", type: "string" },
                { name: "photo", type: "flags.0?WebDocument" },
                { name: "currency", type: "string" },
                { name: "total_amount", type: "long" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
              ],
              type: "BotInlineMessage",
            },
            {
              id: -1281329567,
              predicate: "messageActionGroupCallScheduled",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "schedule_date", type: "int" },
              ],
              type: "MessageAction",
            },
            {
              id: -592373577,
              predicate: "groupCallParticipantVideoSourceGroup",
              params: [
                { name: "semantics", type: "string" },
                { name: "sources", type: "Vector<int>" },
              ],
              type: "GroupCallParticipantVideoSourceGroup",
            },
            {
              id: 1735736008,
              predicate: "groupCallParticipantVideo",
              params: [
                { name: "flags", type: "#" },
                { name: "paused", type: "flags.0?true" },
                { name: "endpoint", type: "string" },
                {
                  name: "source_groups",
                  type: "Vector<GroupCallParticipantVideoSourceGroup>",
                },
                { name: "audio_source", type: "flags.1?int" },
              ],
              type: "GroupCallParticipantVideo",
            },
            {
              id: 192428418,
              predicate: "updateGroupCallConnection",
              params: [
                { name: "flags", type: "#" },
                { name: "presentation", type: "flags.0?true" },
                { name: "params", type: "DataJSON" },
              ],
              type: "Update",
            },
            {
              id: -2046910401,
              predicate: "stickers.suggestedShortName",
              params: [{ name: "short_name", type: "string" }],
              type: "stickers.SuggestedShortName",
            },
            {
              id: 795652779,
              predicate: "botCommandScopeDefault",
              params: [],
              type: "BotCommandScope",
            },
            {
              id: 1011811544,
              predicate: "botCommandScopeUsers",
              params: [],
              type: "BotCommandScope",
            },
            {
              id: 1877059713,
              predicate: "botCommandScopeChats",
              params: [],
              type: "BotCommandScope",
            },
            {
              id: -1180016534,
              predicate: "botCommandScopeChatAdmins",
              params: [],
              type: "BotCommandScope",
            },
            {
              id: -610432643,
              predicate: "botCommandScopePeer",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "BotCommandScope",
            },
            {
              id: 1071145937,
              predicate: "botCommandScopePeerAdmins",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "BotCommandScope",
            },
            {
              id: 169026035,
              predicate: "botCommandScopePeerUser",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "BotCommandScope",
            },
            {
              id: -478701471,
              predicate: "account.resetPasswordFailedWait",
              params: [{ name: "retry_date", type: "int" }],
              type: "account.ResetPasswordResult",
            },
            {
              id: -370148227,
              predicate: "account.resetPasswordRequestedWait",
              params: [{ name: "until_date", type: "int" }],
              type: "account.ResetPasswordResult",
            },
            {
              id: -383330754,
              predicate: "account.resetPasswordOk",
              params: [],
              type: "account.ResetPasswordResult",
            },
            {
              id: 1299263278,
              predicate: "updateBotCommands",
              params: [
                { name: "peer", type: "Peer" },
                { name: "bot_id", type: "long" },
                { name: "commands", type: "Vector<BotCommand>" },
              ],
              type: "Update",
            },
            {
              id: -1434950843,
              predicate: "messageActionSetChatTheme",
              params: [{ name: "emoticon", type: "string" }],
              type: "MessageAction",
            },
            {
              id: -1336228175,
              predicate: "sendMessageChooseStickerAction",
              params: [],
              type: "SendMessageAction",
            },
            {
              id: 981691896,
              predicate: "sponsoredMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "random_id", type: "bytes" },
                { name: "from_id", type: "flags.3?Peer" },
                { name: "chat_invite", type: "flags.4?ChatInvite" },
                { name: "chat_invite_hash", type: "flags.4?string" },
                { name: "channel_post", type: "flags.2?int" },
                { name: "start_param", type: "flags.0?string" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.1?Vector<MessageEntity>" },
              ],
              type: "SponsoredMessage",
            },
            {
              id: 1705297877,
              predicate: "messages.sponsoredMessages",
              params: [
                { name: "messages", type: "Vector<SponsoredMessage>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.SponsoredMessages",
            },
            {
              id: 215889721,
              predicate: "inputStickerSetAnimatedEmojiAnimations",
              params: [],
              type: "InputStickerSet",
            },
            {
              id: 630664139,
              predicate: "sendMessageEmojiInteraction",
              params: [
                { name: "emoticon", type: "string" },
                { name: "msg_id", type: "int" },
                { name: "interaction", type: "DataJSON" },
              ],
              type: "SendMessageAction",
            },
            {
              id: -1234857938,
              predicate: "sendMessageEmojiInteractionSeen",
              params: [{ name: "emoticon", type: "string" }],
              type: "SendMessageAction",
            },
            {
              id: -1227287081,
              predicate: "inputBotInlineMessageID64",
              params: [
                { name: "dc_id", type: "int" },
                { name: "owner_id", type: "long" },
                { name: "id", type: "int" },
                { name: "access_hash", type: "long" },
              ],
              type: "InputBotInlineMessageID",
            },
            {
              id: -911191137,
              predicate: "searchResultsCalendarPeriod",
              params: [
                { name: "date", type: "int" },
                { name: "min_msg_id", type: "int" },
                { name: "max_msg_id", type: "int" },
                { name: "count", type: "int" },
              ],
              type: "SearchResultsCalendarPeriod",
            },
            {
              id: 343859772,
              predicate: "messages.searchResultsCalendar",
              params: [
                { name: "flags", type: "#" },
                { name: "inexact", type: "flags.0?true" },
                { name: "count", type: "int" },
                { name: "min_date", type: "int" },
                { name: "min_msg_id", type: "int" },
                { name: "offset_id_offset", type: "flags.1?int" },
                {
                  name: "periods",
                  type: "Vector<SearchResultsCalendarPeriod>",
                },
                { name: "messages", type: "Vector<Message>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.SearchResultsCalendar",
            },
            {
              id: 2137295719,
              predicate: "searchResultPosition",
              params: [
                { name: "msg_id", type: "int" },
                { name: "date", type: "int" },
                { name: "offset", type: "int" },
              ],
              type: "SearchResultsPosition",
            },
            {
              id: 1404185519,
              predicate: "messages.searchResultsPositions",
              params: [
                { name: "count", type: "int" },
                { name: "positions", type: "Vector<SearchResultsPosition>" },
              ],
              type: "messages.SearchResultsPositions",
            },
            {
              id: -339958837,
              predicate: "messageActionChatJoinedByRequest",
              params: [],
              type: "MessageAction",
            },
            {
              id: 1885586395,
              predicate: "updatePendingJoinRequests",
              params: [
                { name: "peer", type: "Peer" },
                { name: "requests_pending", type: "int" },
                { name: "recent_requesters", type: "Vector<long>" },
              ],
              type: "Update",
            },
            {
              id: 299870598,
              predicate: "updateBotChatInviteRequester",
              params: [
                { name: "peer", type: "Peer" },
                { name: "date", type: "int" },
                { name: "user_id", type: "long" },
                { name: "about", type: "string" },
                { name: "invite", type: "ExportedChatInvite" },
                { name: "qts", type: "int" },
              ],
              type: "Update",
            },
            {
              id: -1347021750,
              predicate: "channelAdminLogEventActionParticipantJoinByRequest",
              params: [
                { name: "invite", type: "ExportedChatInvite" },
                { name: "approved_by", type: "long" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -376962181,
              predicate: "inputKeyboardButtonUserProfile",
              params: [
                { name: "text", type: "string" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "KeyboardButton",
            },
            {
              id: 814112961,
              predicate: "keyboardButtonUserProfile",
              params: [
                { name: "text", type: "string" },
                { name: "user_id", type: "long" },
              ],
              type: "KeyboardButton",
            },
            {
              id: -2091463255,
              predicate: "channels.sendAsPeers",
              params: [
                { name: "peers", type: "Vector<Peer>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "channels.SendAsPeers",
            },
            {
              id: -886388890,
              predicate: "channelAdminLogEventActionToggleNoForwards",
              params: [{ name: "new_value", type: "Bool" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -738646805,
              predicate: "messages.stickerSetNotModified",
              params: [],
              type: "messages.StickerSet",
            },
            {
              id: 997004590,
              predicate: "users.userFull",
              params: [
                { name: "full_user", type: "UserFull" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "users.UserFull",
            },
            {
              id: 1753266509,
              predicate: "messages.peerSettings",
              params: [
                { name: "settings", type: "PeerSettings" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
              ],
              type: "messages.PeerSettings",
            },
            {
              id: 663693416,
              predicate: "channelAdminLogEventActionSendMessage",
              params: [{ name: "message", type: "Message" }],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: -702884114,
              predicate: "auth.codeTypeMissedCall",
              params: [],
              type: "auth.CodeType",
            },
            {
              id: -2113903484,
              predicate: "auth.sentCodeTypeMissedCall",
              params: [
                { name: "prefix", type: "string" },
                { name: "length", type: "int" },
              ],
              type: "auth.SentCodeType",
            },
            {
              id: -1012759713,
              predicate: "auth.loggedOut",
              params: [
                { name: "flags", type: "#" },
                { name: "future_auth_token", type: "flags.0?bytes" },
              ],
              type: "auth.LoggedOut",
            },
            {
              id: 357013699,
              predicate: "updateMessageReactions",
              params: [
                { name: "peer", type: "Peer" },
                { name: "msg_id", type: "int" },
                { name: "reactions", type: "MessageReactions" },
              ],
              type: "Update",
            },
            {
              id: 1873957073,
              predicate: "reactionCount",
              params: [
                { name: "flags", type: "#" },
                { name: "chosen", type: "flags.0?true" },
                { name: "reaction", type: "string" },
                { name: "count", type: "int" },
              ],
              type: "ReactionCount",
            },
            {
              id: 1328256121,
              predicate: "messageReactions",
              params: [
                { name: "flags", type: "#" },
                { name: "min", type: "flags.0?true" },
                { name: "can_see_list", type: "flags.2?true" },
                { name: "results", type: "Vector<ReactionCount>" },
                {
                  name: "recent_reactions",
                  type: "flags.1?Vector<MessagePeerReaction>",
                },
              ],
              type: "MessageReactions",
            },
            {
              id: 834488621,
              predicate: "messages.messageReactionsList",
              params: [
                { name: "flags", type: "#" },
                { name: "count", type: "int" },
                { name: "reactions", type: "Vector<MessagePeerReaction>" },
                { name: "chats", type: "Vector<Chat>" },
                { name: "users", type: "Vector<User>" },
                { name: "next_offset", type: "flags.0?string" },
              ],
              type: "messages.MessageReactionsList",
            },
            {
              id: -1065882623,
              predicate: "availableReaction",
              params: [
                { name: "flags", type: "#" },
                { name: "inactive", type: "flags.0?true" },
                { name: "reaction", type: "string" },
                { name: "title", type: "string" },
                { name: "static_icon", type: "Document" },
                { name: "appear_animation", type: "Document" },
                { name: "select_animation", type: "Document" },
                { name: "activate_animation", type: "Document" },
                { name: "effect_animation", type: "Document" },
                { name: "around_animation", type: "flags.1?Document" },
                { name: "center_icon", type: "flags.1?Document" },
              ],
              type: "AvailableReaction",
            },
            {
              id: -1626924713,
              predicate: "messages.availableReactionsNotModified",
              params: [],
              type: "messages.AvailableReactions",
            },
            {
              id: 1989032621,
              predicate: "messages.availableReactions",
              params: [
                { name: "hash", type: "int" },
                { name: "reactions", type: "Vector<AvailableReaction>" },
              ],
              type: "messages.AvailableReactions",
            },
            {
              id: 852137487,
              predicate: "messageEntitySpoiler",
              params: [
                { name: "offset", type: "int" },
                { name: "length", type: "int" },
              ],
              type: "MessageEntity",
            },
            {
              id: -1661470870,
              predicate: "channelAdminLogEventActionChangeAvailableReactions",
              params: [
                { name: "prev_value", type: "Vector<string>" },
                { name: "new_value", type: "Vector<string>" },
              ],
              type: "ChannelAdminLogEventAction",
            },
            {
              id: 1741309751,
              predicate: "messages.translateNoResult",
              params: [],
              type: "messages.TranslatedText",
            },
            {
              id: -1575684144,
              predicate: "messages.translateResultText",
              params: [{ name: "text", type: "string" }],
              type: "messages.TranslatedText",
            },
            {
              id: 1370914559,
              predicate: "messagePeerReaction",
              params: [
                { name: "flags", type: "#" },
                { name: "big", type: "flags.0?true" },
                { name: "unread", type: "flags.1?true" },
                { name: "peer_id", type: "Peer" },
                { name: "reaction", type: "string" },
              ],
              type: "MessagePeerReaction",
            },
            {
              id: -2132064081,
              predicate: "groupCallStreamChannel",
              params: [
                { name: "channel", type: "int" },
                { name: "scale", type: "int" },
                { name: "last_timestamp_ms", type: "long" },
              ],
              type: "GroupCallStreamChannel",
            },
            {
              id: -790330702,
              predicate: "phone.groupCallStreamChannels",
              params: [
                { name: "channels", type: "Vector<GroupCallStreamChannel>" },
              ],
              type: "phone.GroupCallStreamChannels",
            },
            {
              id: 177124030,
              predicate: "inputReportReasonIllegalDrugs",
              params: [],
              type: "ReportReason",
            },
            {
              id: -1631091139,
              predicate: "inputReportReasonPersonalDetails",
              params: [],
              type: "ReportReason",
            },
            {
              id: 767505458,
              predicate: "phone.groupCallStreamRtmpUrl",
              params: [
                { name: "url", type: "string" },
                { name: "key", type: "string" },
              ],
              type: "phone.GroupCallStreamRtmpUrl",
            },
          ],
          methods: [
            {
              id: -878758099,
              method: "invokeAfterMsg",
              params: [
                { name: "msg_id", type: "long" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: 1036301552,
              method: "invokeAfterMsgs",
              params: [
                { name: "msg_ids", type: "Vector<long>" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: -1502141361,
              method: "auth.sendCode",
              params: [
                { name: "phone_number", type: "string" },
                { name: "api_id", type: "int" },
                { name: "api_hash", type: "string" },
                { name: "settings", type: "CodeSettings" },
              ],
              type: "auth.SentCode",
            },
            {
              id: -2131827673,
              method: "auth.signUp",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
              ],
              type: "auth.Authorization",
            },
            {
              id: -1126886015,
              method: "auth.signIn",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
                { name: "phone_code", type: "string" },
              ],
              type: "auth.Authorization",
            },
            {
              id: 1047706137,
              method: "auth.logOut",
              params: [],
              type: "auth.LoggedOut",
            },
            {
              id: -1616179942,
              method: "auth.resetAuthorizations",
              params: [],
              type: "Bool",
            },
            {
              id: -440401971,
              method: "auth.exportAuthorization",
              params: [{ name: "dc_id", type: "int" }],
              type: "auth.ExportedAuthorization",
            },
            {
              id: -1518699091,
              method: "auth.importAuthorization",
              params: [
                { name: "id", type: "long" },
                { name: "bytes", type: "bytes" },
              ],
              type: "auth.Authorization",
            },
            {
              id: -841733627,
              method: "auth.bindTempAuthKey",
              params: [
                { name: "perm_auth_key_id", type: "long" },
                { name: "nonce", type: "long" },
                { name: "expires_at", type: "int" },
                { name: "encrypted_message", type: "bytes" },
              ],
              type: "Bool",
            },
            {
              id: -326762118,
              method: "account.registerDevice",
              params: [
                { name: "flags", type: "#" },
                { name: "no_muted", type: "flags.0?true" },
                { name: "token_type", type: "int" },
                { name: "token", type: "string" },
                { name: "app_sandbox", type: "Bool" },
                { name: "secret", type: "bytes" },
                { name: "other_uids", type: "Vector<long>" },
              ],
              type: "Bool",
            },
            {
              id: 1779249670,
              method: "account.unregisterDevice",
              params: [
                { name: "token_type", type: "int" },
                { name: "token", type: "string" },
                { name: "other_uids", type: "Vector<long>" },
              ],
              type: "Bool",
            },
            {
              id: -2067899501,
              method: "account.updateNotifySettings",
              params: [
                { name: "peer", type: "InputNotifyPeer" },
                { name: "settings", type: "InputPeerNotifySettings" },
              ],
              type: "Bool",
            },
            {
              id: 313765169,
              method: "account.getNotifySettings",
              params: [{ name: "peer", type: "InputNotifyPeer" }],
              type: "PeerNotifySettings",
            },
            {
              id: -612493497,
              method: "account.resetNotifySettings",
              params: [],
              type: "Bool",
            },
            {
              id: 2018596725,
              method: "account.updateProfile",
              params: [
                { name: "flags", type: "#" },
                { name: "first_name", type: "flags.0?string" },
                { name: "last_name", type: "flags.1?string" },
                { name: "about", type: "flags.2?string" },
              ],
              type: "User",
            },
            {
              id: 1713919532,
              method: "account.updateStatus",
              params: [{ name: "offline", type: "Bool" }],
              type: "Bool",
            },
            {
              id: 127302966,
              method: "account.getWallPapers",
              params: [{ name: "hash", type: "long" }],
              type: "account.WallPapers",
            },
            {
              id: -977650298,
              method: "account.reportPeer",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "reason", type: "ReportReason" },
                { name: "message", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 227648840,
              method: "users.getUsers",
              params: [{ name: "id", type: "Vector<InputUser>" }],
              type: "Vector<User>",
            },
            {
              id: -1240508136,
              method: "users.getFullUser",
              params: [{ name: "id", type: "InputUser" }],
              type: "users.UserFull",
            },
            {
              id: 2061264541,
              method: "contacts.getContactIDs",
              params: [{ name: "hash", type: "long" }],
              type: "Vector<int>",
            },
            {
              id: -995929106,
              method: "contacts.getStatuses",
              params: [],
              type: "Vector<ContactStatus>",
            },
            {
              id: 1574346258,
              method: "contacts.getContacts",
              params: [{ name: "hash", type: "long" }],
              type: "contacts.Contacts",
            },
            {
              id: 746589157,
              method: "contacts.importContacts",
              params: [{ name: "contacts", type: "Vector<InputContact>" }],
              type: "contacts.ImportedContacts",
            },
            {
              id: 157945344,
              method: "contacts.deleteContacts",
              params: [{ name: "id", type: "Vector<InputUser>" }],
              type: "Updates",
            },
            {
              id: 269745566,
              method: "contacts.deleteByPhones",
              params: [{ name: "phones", type: "Vector<string>" }],
              type: "Bool",
            },
            {
              id: 1758204945,
              method: "contacts.block",
              params: [{ name: "id", type: "InputPeer" }],
              type: "Bool",
            },
            {
              id: -1096393392,
              method: "contacts.unblock",
              params: [{ name: "id", type: "InputPeer" }],
              type: "Bool",
            },
            {
              id: -176409329,
              method: "contacts.getBlocked",
              params: [
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "contacts.Blocked",
            },
            {
              id: 1673946374,
              method: "messages.getMessages",
              params: [{ name: "id", type: "Vector<InputMessage>" }],
              type: "messages.Messages",
            },
            {
              id: -1594569905,
              method: "messages.getDialogs",
              params: [
                { name: "flags", type: "#" },
                { name: "exclude_pinned", type: "flags.0?true" },
                { name: "folder_id", type: "flags.1?int" },
                { name: "offset_date", type: "int" },
                { name: "offset_id", type: "int" },
                { name: "offset_peer", type: "InputPeer" },
                { name: "limit", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Dialogs",
            },
            {
              id: 1143203525,
              method: "messages.getHistory",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "offset_id", type: "int" },
                { name: "offset_date", type: "int" },
                { name: "add_offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "max_id", type: "int" },
                { name: "min_id", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1593989278,
              method: "messages.search",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "InputPeer" },
                { name: "q", type: "string" },
                { name: "from_id", type: "flags.0?InputPeer" },
                { name: "top_msg_id", type: "flags.1?int" },
                { name: "filter", type: "MessagesFilter" },
                { name: "min_date", type: "int" },
                { name: "max_date", type: "int" },
                { name: "offset_id", type: "int" },
                { name: "add_offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "max_id", type: "int" },
                { name: "min_id", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Messages",
            },
            {
              id: 238054714,
              method: "messages.readHistory",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "max_id", type: "int" },
              ],
              type: "messages.AffectedMessages",
            },
            {
              id: -1332768214,
              method: "messages.deleteHistory",
              params: [
                { name: "flags", type: "#" },
                { name: "just_clear", type: "flags.0?true" },
                { name: "revoke", type: "flags.1?true" },
                { name: "peer", type: "InputPeer" },
                { name: "max_id", type: "int" },
                { name: "min_date", type: "flags.2?int" },
                { name: "max_date", type: "flags.3?int" },
              ],
              type: "messages.AffectedHistory",
            },
            {
              id: -443640366,
              method: "messages.deleteMessages",
              params: [
                { name: "flags", type: "#" },
                { name: "revoke", type: "flags.0?true" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "messages.AffectedMessages",
            },
            {
              id: 94983360,
              method: "messages.receivedMessages",
              params: [{ name: "max_id", type: "int" }],
              type: "Vector<ReceivedNotifyMessage>",
            },
            {
              id: 1486110434,
              method: "messages.setTyping",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "InputPeer" },
                { name: "top_msg_id", type: "flags.0?int" },
                { name: "action", type: "SendMessageAction" },
              ],
              type: "Bool",
            },
            {
              id: 228423076,
              method: "messages.sendMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.1?true" },
                { name: "silent", type: "flags.5?true" },
                { name: "background", type: "flags.6?true" },
                { name: "clear_draft", type: "flags.7?true" },
                { name: "noforwards", type: "flags.14?true" },
                { name: "peer", type: "InputPeer" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "message", type: "string" },
                { name: "random_id", type: "long" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
                { name: "schedule_date", type: "flags.10?int" },
                { name: "send_as", type: "flags.13?InputPeer" },
              ],
              type: "Updates",
            },
            {
              id: -497026848,
              method: "messages.sendMedia",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.5?true" },
                { name: "background", type: "flags.6?true" },
                { name: "clear_draft", type: "flags.7?true" },
                { name: "noforwards", type: "flags.14?true" },
                { name: "peer", type: "InputPeer" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "media", type: "InputMedia" },
                { name: "message", type: "string" },
                { name: "random_id", type: "long" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
                { name: "schedule_date", type: "flags.10?int" },
                { name: "send_as", type: "flags.13?InputPeer" },
              ],
              type: "Updates",
            },
            {
              id: -869258997,
              method: "messages.forwardMessages",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.5?true" },
                { name: "background", type: "flags.6?true" },
                { name: "with_my_score", type: "flags.8?true" },
                { name: "drop_author", type: "flags.11?true" },
                { name: "drop_media_captions", type: "flags.12?true" },
                { name: "noforwards", type: "flags.14?true" },
                { name: "from_peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
                { name: "random_id", type: "Vector<long>" },
                { name: "to_peer", type: "InputPeer" },
                { name: "schedule_date", type: "flags.10?int" },
                { name: "send_as", type: "flags.13?InputPeer" },
              ],
              type: "Updates",
            },
            {
              id: -820669733,
              method: "messages.reportSpam",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "Bool",
            },
            {
              id: -270948702,
              method: "messages.getPeerSettings",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.PeerSettings",
            },
            {
              id: -1991005362,
              method: "messages.report",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
                { name: "reason", type: "ReportReason" },
                { name: "message", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 1240027791,
              method: "messages.getChats",
              params: [{ name: "id", type: "Vector<long>" }],
              type: "messages.Chats",
            },
            {
              id: -1364194508,
              method: "messages.getFullChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "messages.ChatFull",
            },
            {
              id: 1937260541,
              method: "messages.editChatTitle",
              params: [
                { name: "chat_id", type: "long" },
                { name: "title", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: 903730804,
              method: "messages.editChatPhoto",
              params: [
                { name: "chat_id", type: "long" },
                { name: "photo", type: "InputChatPhoto" },
              ],
              type: "Updates",
            },
            {
              id: -230206493,
              method: "messages.addChatUser",
              params: [
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "InputUser" },
                { name: "fwd_limit", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: -1575461717,
              method: "messages.deleteChatUser",
              params: [
                { name: "flags", type: "#" },
                { name: "revoke_history", type: "flags.0?true" },
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "Updates",
            },
            {
              id: 164303470,
              method: "messages.createChat",
              params: [
                { name: "users", type: "Vector<InputUser>" },
                { name: "title", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -304838614,
              method: "updates.getState",
              params: [],
              type: "updates.State",
            },
            {
              id: 630429265,
              method: "updates.getDifference",
              params: [
                { name: "flags", type: "#" },
                { name: "pts", type: "int" },
                { name: "pts_total_limit", type: "flags.0?int" },
                { name: "date", type: "int" },
                { name: "qts", type: "int" },
              ],
              type: "updates.Difference",
            },
            {
              id: 1926525996,
              method: "photos.updateProfilePhoto",
              params: [{ name: "id", type: "InputPhoto" }],
              type: "photos.Photo",
            },
            {
              id: -1980559511,
              method: "photos.uploadProfilePhoto",
              params: [
                { name: "flags", type: "#" },
                { name: "file", type: "flags.0?InputFile" },
                { name: "video", type: "flags.1?InputFile" },
                { name: "video_start_ts", type: "flags.2?double" },
              ],
              type: "photos.Photo",
            },
            {
              id: -2016444625,
              method: "photos.deletePhotos",
              params: [{ name: "id", type: "Vector<InputPhoto>" }],
              type: "Vector<long>",
            },
            {
              id: -1291540959,
              method: "upload.saveFilePart",
              params: [
                { name: "file_id", type: "long" },
                { name: "file_part", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "Bool",
            },
            {
              id: -1319462148,
              method: "upload.getFile",
              params: [
                { name: "flags", type: "#" },
                { name: "precise", type: "flags.0?true" },
                { name: "cdn_supported", type: "flags.1?true" },
                { name: "location", type: "InputFileLocation" },
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "upload.File",
            },
            {
              id: -990308245,
              method: "help.getConfig",
              params: [],
              type: "Config",
            },
            {
              id: 531836966,
              method: "help.getNearestDc",
              params: [],
              type: "NearestDc",
            },
            {
              id: 1378703997,
              method: "help.getAppUpdate",
              params: [{ name: "source", type: "string" }],
              type: "help.AppUpdate",
            },
            {
              id: 1295590211,
              method: "help.getInviteText",
              params: [],
              type: "help.InviteText",
            },
            {
              id: -1848823128,
              method: "photos.getUserPhotos",
              params: [
                { name: "user_id", type: "InputUser" },
                { name: "offset", type: "int" },
                { name: "max_id", type: "long" },
                { name: "limit", type: "int" },
              ],
              type: "photos.Photos",
            },
            {
              id: 651135312,
              method: "messages.getDhConfig",
              params: [
                { name: "version", type: "int" },
                { name: "random_length", type: "int" },
              ],
              type: "messages.DhConfig",
            },
            {
              id: -162681021,
              method: "messages.requestEncryption",
              params: [
                { name: "user_id", type: "InputUser" },
                { name: "random_id", type: "int" },
                { name: "g_a", type: "bytes" },
              ],
              type: "EncryptedChat",
            },
            {
              id: 1035731989,
              method: "messages.acceptEncryption",
              params: [
                { name: "peer", type: "InputEncryptedChat" },
                { name: "g_b", type: "bytes" },
                { name: "key_fingerprint", type: "long" },
              ],
              type: "EncryptedChat",
            },
            {
              id: -208425312,
              method: "messages.discardEncryption",
              params: [
                { name: "flags", type: "#" },
                { name: "delete_history", type: "flags.0?true" },
                { name: "chat_id", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: 2031374829,
              method: "messages.setEncryptedTyping",
              params: [
                { name: "peer", type: "InputEncryptedChat" },
                { name: "typing", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: 2135648522,
              method: "messages.readEncryptedHistory",
              params: [
                { name: "peer", type: "InputEncryptedChat" },
                { name: "max_date", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: 1157265941,
              method: "messages.sendEncrypted",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.0?true" },
                { name: "peer", type: "InputEncryptedChat" },
                { name: "random_id", type: "long" },
                { name: "data", type: "bytes" },
              ],
              type: "messages.SentEncryptedMessage",
            },
            {
              id: 1431914525,
              method: "messages.sendEncryptedFile",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.0?true" },
                { name: "peer", type: "InputEncryptedChat" },
                { name: "random_id", type: "long" },
                { name: "data", type: "bytes" },
                { name: "file", type: "InputEncryptedFile" },
              ],
              type: "messages.SentEncryptedMessage",
            },
            {
              id: 852769188,
              method: "messages.sendEncryptedService",
              params: [
                { name: "peer", type: "InputEncryptedChat" },
                { name: "random_id", type: "long" },
                { name: "data", type: "bytes" },
              ],
              type: "messages.SentEncryptedMessage",
            },
            {
              id: 1436924774,
              method: "messages.receivedQueue",
              params: [{ name: "max_qts", type: "int" }],
              type: "Vector<long>",
            },
            {
              id: 1259113487,
              method: "messages.reportEncryptedSpam",
              params: [{ name: "peer", type: "InputEncryptedChat" }],
              type: "Bool",
            },
            {
              id: -562337987,
              method: "upload.saveBigFilePart",
              params: [
                { name: "file_id", type: "long" },
                { name: "file_part", type: "int" },
                { name: "file_total_parts", type: "int" },
                { name: "bytes", type: "bytes" },
              ],
              type: "Bool",
            },
            {
              id: -1043505495,
              method: "initConnection",
              params: [
                { name: "flags", type: "#" },
                { name: "api_id", type: "int" },
                { name: "device_model", type: "string" },
                { name: "system_version", type: "string" },
                { name: "app_version", type: "string" },
                { name: "system_lang_code", type: "string" },
                { name: "lang_pack", type: "string" },
                { name: "lang_code", type: "string" },
                { name: "proxy", type: "flags.0?InputClientProxy" },
                { name: "params", type: "flags.1?JSONValue" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: -1663104819,
              method: "help.getSupport",
              params: [],
              type: "help.Support",
            },
            {
              id: 916930423,
              method: "messages.readMessageContents",
              params: [{ name: "id", type: "Vector<int>" }],
              type: "messages.AffectedMessages",
            },
            {
              id: 655677548,
              method: "account.checkUsername",
              params: [{ name: "username", type: "string" }],
              type: "Bool",
            },
            {
              id: 1040964988,
              method: "account.updateUsername",
              params: [{ name: "username", type: "string" }],
              type: "User",
            },
            {
              id: 301470424,
              method: "contacts.search",
              params: [
                { name: "q", type: "string" },
                { name: "limit", type: "int" },
              ],
              type: "contacts.Found",
            },
            {
              id: -623130288,
              method: "account.getPrivacy",
              params: [{ name: "key", type: "InputPrivacyKey" }],
              type: "account.PrivacyRules",
            },
            {
              id: -906486552,
              method: "account.setPrivacy",
              params: [
                { name: "key", type: "InputPrivacyKey" },
                { name: "rules", type: "Vector<InputPrivacyRule>" },
              ],
              type: "account.PrivacyRules",
            },
            {
              id: 1099779595,
              method: "account.deleteAccount",
              params: [{ name: "reason", type: "string" }],
              type: "Bool",
            },
            {
              id: 150761757,
              method: "account.getAccountTTL",
              params: [],
              type: "AccountDaysTTL",
            },
            {
              id: 608323678,
              method: "account.setAccountTTL",
              params: [{ name: "ttl", type: "AccountDaysTTL" }],
              type: "Bool",
            },
            {
              id: -627372787,
              method: "invokeWithLayer",
              params: [
                { name: "layer", type: "int" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: -113456221,
              method: "contacts.resolveUsername",
              params: [{ name: "username", type: "string" }],
              type: "contacts.ResolvedPeer",
            },
            {
              id: -2108208411,
              method: "account.sendChangePhoneCode",
              params: [
                { name: "phone_number", type: "string" },
                { name: "settings", type: "CodeSettings" },
              ],
              type: "auth.SentCode",
            },
            {
              id: 1891839707,
              method: "account.changePhone",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
                { name: "phone_code", type: "string" },
              ],
              type: "User",
            },
            {
              id: -710552671,
              method: "messages.getStickers",
              params: [
                { name: "emoticon", type: "string" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Stickers",
            },
            {
              id: -1197432408,
              method: "messages.getAllStickers",
              params: [{ name: "hash", type: "long" }],
              type: "messages.AllStickers",
            },
            {
              id: 954152242,
              method: "account.updateDeviceLocked",
              params: [{ name: "period", type: "int" }],
              type: "Bool",
            },
            {
              id: 1738800940,
              method: "auth.importBotAuthorization",
              params: [
                { name: "flags", type: "int" },
                { name: "api_id", type: "int" },
                { name: "api_hash", type: "string" },
                { name: "bot_auth_token", type: "string" },
              ],
              type: "auth.Authorization",
            },
            {
              id: -1956073268,
              method: "messages.getWebPagePreview",
              params: [
                { name: "flags", type: "#" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
              ],
              type: "MessageMedia",
            },
            {
              id: -484392616,
              method: "account.getAuthorizations",
              params: [],
              type: "account.Authorizations",
            },
            {
              id: -545786948,
              method: "account.resetAuthorization",
              params: [{ name: "hash", type: "long" }],
              type: "Bool",
            },
            {
              id: 1418342645,
              method: "account.getPassword",
              params: [],
              type: "account.Password",
            },
            {
              id: -1663767815,
              method: "account.getPasswordSettings",
              params: [{ name: "password", type: "InputCheckPasswordSRP" }],
              type: "account.PasswordSettings",
            },
            {
              id: -1516564433,
              method: "account.updatePasswordSettings",
              params: [
                { name: "password", type: "InputCheckPasswordSRP" },
                { name: "new_settings", type: "account.PasswordInputSettings" },
              ],
              type: "Bool",
            },
            {
              id: -779399914,
              method: "auth.checkPassword",
              params: [{ name: "password", type: "InputCheckPasswordSRP" }],
              type: "auth.Authorization",
            },
            {
              id: -661144474,
              method: "auth.requestPasswordRecovery",
              params: [],
              type: "auth.PasswordRecovery",
            },
            {
              id: 923364464,
              method: "auth.recoverPassword",
              params: [
                { name: "flags", type: "#" },
                { name: "code", type: "string" },
                {
                  name: "new_settings",
                  type: "flags.0?account.PasswordInputSettings",
                },
              ],
              type: "auth.Authorization",
            },
            {
              id: -1080796745,
              method: "invokeWithoutUpdates",
              params: [{ name: "query", type: "!X" }],
              type: "X",
            },
            {
              id: -1607670315,
              method: "messages.exportChatInvite",
              params: [
                { name: "flags", type: "#" },
                { name: "legacy_revoke_permanent", type: "flags.2?true" },
                { name: "request_needed", type: "flags.3?true" },
                { name: "peer", type: "InputPeer" },
                { name: "expire_date", type: "flags.0?int" },
                { name: "usage_limit", type: "flags.1?int" },
                { name: "title", type: "flags.4?string" },
              ],
              type: "ExportedChatInvite",
            },
            {
              id: 1051570619,
              method: "messages.checkChatInvite",
              params: [{ name: "hash", type: "string" }],
              type: "ChatInvite",
            },
            {
              id: 1817183516,
              method: "messages.importChatInvite",
              params: [{ name: "hash", type: "string" }],
              type: "Updates",
            },
            {
              id: -928977804,
              method: "messages.getStickerSet",
              params: [
                { name: "stickerset", type: "InputStickerSet" },
                { name: "hash", type: "int" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: -946871200,
              method: "messages.installStickerSet",
              params: [
                { name: "stickerset", type: "InputStickerSet" },
                { name: "archived", type: "Bool" },
              ],
              type: "messages.StickerSetInstallResult",
            },
            {
              id: -110209570,
              method: "messages.uninstallStickerSet",
              params: [{ name: "stickerset", type: "InputStickerSet" }],
              type: "Bool",
            },
            {
              id: -421563528,
              method: "messages.startBot",
              params: [
                { name: "bot", type: "InputUser" },
                { name: "peer", type: "InputPeer" },
                { name: "random_id", type: "long" },
                { name: "start_param", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -1877938321,
              method: "help.getAppChangelog",
              params: [{ name: "prev_app_version", type: "string" }],
              type: "Updates",
            },
            {
              id: 1468322785,
              method: "messages.getMessagesViews",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
                { name: "increment", type: "Bool" },
              ],
              type: "messages.MessageViews",
            },
            {
              id: -871347913,
              method: "channels.readHistory",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "max_id", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: -2067661490,
              method: "channels.deleteMessages",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "messages.AffectedMessages",
            },
            {
              id: -196443371,
              method: "channels.reportSpam",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "participant", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "Bool",
            },
            {
              id: -1383294429,
              method: "channels.getMessages",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "id", type: "Vector<InputMessage>" },
              ],
              type: "messages.Messages",
            },
            {
              id: 2010044880,
              method: "channels.getParticipants",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "filter", type: "ChannelParticipantsFilter" },
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "channels.ChannelParticipants",
            },
            {
              id: -1599378234,
              method: "channels.getParticipant",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "participant", type: "InputPeer" },
              ],
              type: "channels.ChannelParticipant",
            },
            {
              id: 176122811,
              method: "channels.getChannels",
              params: [{ name: "id", type: "Vector<InputChannel>" }],
              type: "messages.Chats",
            },
            {
              id: 141781513,
              method: "channels.getFullChannel",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "messages.ChatFull",
            },
            {
              id: 1029681423,
              method: "channels.createChannel",
              params: [
                { name: "flags", type: "#" },
                { name: "broadcast", type: "flags.0?true" },
                { name: "megagroup", type: "flags.1?true" },
                { name: "for_import", type: "flags.3?true" },
                { name: "title", type: "string" },
                { name: "about", type: "string" },
                { name: "geo_point", type: "flags.2?InputGeoPoint" },
                { name: "address", type: "flags.2?string" },
              ],
              type: "Updates",
            },
            {
              id: -751007486,
              method: "channels.editAdmin",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "user_id", type: "InputUser" },
                { name: "admin_rights", type: "ChatAdminRights" },
                { name: "rank", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: 1450044624,
              method: "channels.editTitle",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "title", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -248621111,
              method: "channels.editPhoto",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "photo", type: "InputChatPhoto" },
              ],
              type: "Updates",
            },
            {
              id: 283557164,
              method: "channels.checkUsername",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "username", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 890549214,
              method: "channels.updateUsername",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "username", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 615851205,
              method: "channels.joinChannel",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "Updates",
            },
            {
              id: -130635115,
              method: "channels.leaveChannel",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "Updates",
            },
            {
              id: 429865580,
              method: "channels.inviteToChannel",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "users", type: "Vector<InputUser>" },
              ],
              type: "Updates",
            },
            {
              id: -1072619549,
              method: "channels.deleteChannel",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "Updates",
            },
            {
              id: 51854712,
              method: "updates.getChannelDifference",
              params: [
                { name: "flags", type: "#" },
                { name: "force", type: "flags.0?true" },
                { name: "channel", type: "InputChannel" },
                { name: "filter", type: "ChannelMessagesFilter" },
                { name: "pts", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "updates.ChannelDifference",
            },
            {
              id: -1470377534,
              method: "messages.editChatAdmin",
              params: [
                { name: "chat_id", type: "long" },
                { name: "user_id", type: "InputUser" },
                { name: "is_admin", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: -1568189671,
              method: "messages.migrateChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "Updates",
            },
            {
              id: 1271290010,
              method: "messages.searchGlobal",
              params: [
                { name: "flags", type: "#" },
                { name: "folder_id", type: "flags.0?int" },
                { name: "q", type: "string" },
                { name: "filter", type: "MessagesFilter" },
                { name: "min_date", type: "int" },
                { name: "max_date", type: "int" },
                { name: "offset_rate", type: "int" },
                { name: "offset_peer", type: "InputPeer" },
                { name: "offset_id", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "messages.Messages",
            },
            {
              id: 2016638777,
              method: "messages.reorderStickerSets",
              params: [
                { name: "flags", type: "#" },
                { name: "masks", type: "flags.0?true" },
                { name: "order", type: "Vector<long>" },
              ],
              type: "Bool",
            },
            {
              id: 864953444,
              method: "messages.getDocumentByHash",
              params: [
                { name: "sha256", type: "bytes" },
                { name: "size", type: "int" },
                { name: "mime_type", type: "string" },
              ],
              type: "Document",
            },
            {
              id: 1559270965,
              method: "messages.getSavedGifs",
              params: [{ name: "hash", type: "long" }],
              type: "messages.SavedGifs",
            },
            {
              id: 846868683,
              method: "messages.saveGif",
              params: [
                { name: "id", type: "InputDocument" },
                { name: "unsave", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: 1364105629,
              method: "messages.getInlineBotResults",
              params: [
                { name: "flags", type: "#" },
                { name: "bot", type: "InputUser" },
                { name: "peer", type: "InputPeer" },
                { name: "geo_point", type: "flags.0?InputGeoPoint" },
                { name: "query", type: "string" },
                { name: "offset", type: "string" },
              ],
              type: "messages.BotResults",
            },
            {
              id: -346119674,
              method: "messages.setInlineBotResults",
              params: [
                { name: "flags", type: "#" },
                { name: "gallery", type: "flags.0?true" },
                { name: "private", type: "flags.1?true" },
                { name: "query_id", type: "long" },
                { name: "results", type: "Vector<InputBotInlineResult>" },
                { name: "cache_time", type: "int" },
                { name: "next_offset", type: "flags.2?string" },
                { name: "switch_pm", type: "flags.3?InlineBotSwitchPM" },
              ],
              type: "Bool",
            },
            {
              id: 2057376407,
              method: "messages.sendInlineBotResult",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.5?true" },
                { name: "background", type: "flags.6?true" },
                { name: "clear_draft", type: "flags.7?true" },
                { name: "hide_via", type: "flags.11?true" },
                { name: "peer", type: "InputPeer" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "random_id", type: "long" },
                { name: "query_id", type: "long" },
                { name: "id", type: "string" },
                { name: "schedule_date", type: "flags.10?int" },
                { name: "send_as", type: "flags.13?InputPeer" },
              ],
              type: "Updates",
            },
            {
              id: -432034325,
              method: "channels.exportMessageLink",
              params: [
                { name: "flags", type: "#" },
                { name: "grouped", type: "flags.0?true" },
                { name: "thread", type: "flags.1?true" },
                { name: "channel", type: "InputChannel" },
                { name: "id", type: "int" },
              ],
              type: "ExportedMessageLink",
            },
            {
              id: 527021574,
              method: "channels.toggleSignatures",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "enabled", type: "Bool" },
              ],
              type: "Updates",
            },
            {
              id: 1056025023,
              method: "auth.resendCode",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
              ],
              type: "auth.SentCode",
            },
            {
              id: 520357240,
              method: "auth.cancelCode",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: -39416522,
              method: "messages.getMessageEditData",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
              ],
              type: "messages.MessageEditData",
            },
            {
              id: 1224152952,
              method: "messages.editMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.1?true" },
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
                { name: "message", type: "flags.11?string" },
                { name: "media", type: "flags.14?InputMedia" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
                { name: "schedule_date", type: "flags.15?int" },
              ],
              type: "Updates",
            },
            {
              id: -2091549254,
              method: "messages.editInlineBotMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.1?true" },
                { name: "id", type: "InputBotInlineMessageID" },
                { name: "message", type: "flags.11?string" },
                { name: "media", type: "flags.14?InputMedia" },
                { name: "reply_markup", type: "flags.2?ReplyMarkup" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
              ],
              type: "Bool",
            },
            {
              id: -1824339449,
              method: "messages.getBotCallbackAnswer",
              params: [
                { name: "flags", type: "#" },
                { name: "game", type: "flags.1?true" },
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "data", type: "flags.0?bytes" },
                { name: "password", type: "flags.2?InputCheckPasswordSRP" },
              ],
              type: "messages.BotCallbackAnswer",
            },
            {
              id: -712043766,
              method: "messages.setBotCallbackAnswer",
              params: [
                { name: "flags", type: "#" },
                { name: "alert", type: "flags.1?true" },
                { name: "query_id", type: "long" },
                { name: "message", type: "flags.0?string" },
                { name: "url", type: "flags.2?string" },
                { name: "cache_time", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: -1758168906,
              method: "contacts.getTopPeers",
              params: [
                { name: "flags", type: "#" },
                { name: "correspondents", type: "flags.0?true" },
                { name: "bots_pm", type: "flags.1?true" },
                { name: "bots_inline", type: "flags.2?true" },
                { name: "phone_calls", type: "flags.3?true" },
                { name: "forward_users", type: "flags.4?true" },
                { name: "forward_chats", type: "flags.5?true" },
                { name: "groups", type: "flags.10?true" },
                { name: "channels", type: "flags.15?true" },
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "contacts.TopPeers",
            },
            {
              id: 451113900,
              method: "contacts.resetTopPeerRating",
              params: [
                { name: "category", type: "TopPeerCategory" },
                { name: "peer", type: "InputPeer" },
              ],
              type: "Bool",
            },
            {
              id: -462373635,
              method: "messages.getPeerDialogs",
              params: [{ name: "peers", type: "Vector<InputDialogPeer>" }],
              type: "messages.PeerDialogs",
            },
            {
              id: -1137057461,
              method: "messages.saveDraft",
              params: [
                { name: "flags", type: "#" },
                { name: "no_webpage", type: "flags.1?true" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "peer", type: "InputPeer" },
                { name: "message", type: "string" },
                { name: "entities", type: "flags.3?Vector<MessageEntity>" },
              ],
              type: "Bool",
            },
            {
              id: 1782549861,
              method: "messages.getAllDrafts",
              params: [],
              type: "Updates",
            },
            {
              id: 1685588756,
              method: "messages.getFeaturedStickers",
              params: [{ name: "hash", type: "long" }],
              type: "messages.FeaturedStickers",
            },
            {
              id: 1527873830,
              method: "messages.readFeaturedStickers",
              params: [{ name: "id", type: "Vector<long>" }],
              type: "Bool",
            },
            {
              id: -1649852357,
              method: "messages.getRecentStickers",
              params: [
                { name: "flags", type: "#" },
                { name: "attached", type: "flags.0?true" },
                { name: "hash", type: "long" },
              ],
              type: "messages.RecentStickers",
            },
            {
              id: 958863608,
              method: "messages.saveRecentSticker",
              params: [
                { name: "flags", type: "#" },
                { name: "attached", type: "flags.0?true" },
                { name: "id", type: "InputDocument" },
                { name: "unsave", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: -1986437075,
              method: "messages.clearRecentStickers",
              params: [
                { name: "flags", type: "#" },
                { name: "attached", type: "flags.0?true" },
              ],
              type: "Bool",
            },
            {
              id: 1475442322,
              method: "messages.getArchivedStickers",
              params: [
                { name: "flags", type: "#" },
                { name: "masks", type: "flags.0?true" },
                { name: "offset_id", type: "long" },
                { name: "limit", type: "int" },
              ],
              type: "messages.ArchivedStickers",
            },
            {
              id: 457157256,
              method: "account.sendConfirmPhoneCode",
              params: [
                { name: "hash", type: "string" },
                { name: "settings", type: "CodeSettings" },
              ],
              type: "auth.SentCode",
            },
            {
              id: 1596029123,
              method: "account.confirmPhone",
              params: [
                { name: "phone_code_hash", type: "string" },
                { name: "phone_code", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: -122669393,
              method: "channels.getAdminedPublicChannels",
              params: [
                { name: "flags", type: "#" },
                { name: "by_location", type: "flags.0?true" },
                { name: "check_limit", type: "flags.1?true" },
              ],
              type: "messages.Chats",
            },
            {
              id: 1678738104,
              method: "messages.getMaskStickers",
              params: [{ name: "hash", type: "long" }],
              type: "messages.AllStickers",
            },
            {
              id: -866424884,
              method: "messages.getAttachedStickers",
              params: [{ name: "media", type: "InputStickeredMedia" }],
              type: "Vector<StickerSetCovered>",
            },
            {
              id: -1907842680,
              method: "auth.dropTempAuthKeys",
              params: [{ name: "except_auth_keys", type: "Vector<long>" }],
              type: "Bool",
            },
            {
              id: -1896289088,
              method: "messages.setGameScore",
              params: [
                { name: "flags", type: "#" },
                { name: "edit_message", type: "flags.0?true" },
                { name: "force", type: "flags.1?true" },
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
                { name: "user_id", type: "InputUser" },
                { name: "score", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 363700068,
              method: "messages.setInlineGameScore",
              params: [
                { name: "flags", type: "#" },
                { name: "edit_message", type: "flags.0?true" },
                { name: "force", type: "flags.1?true" },
                { name: "id", type: "InputBotInlineMessageID" },
                { name: "user_id", type: "InputUser" },
                { name: "score", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: -400399203,
              method: "messages.getGameHighScores",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "messages.HighScores",
            },
            {
              id: 258170395,
              method: "messages.getInlineGameHighScores",
              params: [
                { name: "id", type: "InputBotInlineMessageID" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "messages.HighScores",
            },
            {
              id: -468934396,
              method: "messages.getCommonChats",
              params: [
                { name: "user_id", type: "InputUser" },
                { name: "max_id", type: "long" },
                { name: "limit", type: "int" },
              ],
              type: "messages.Chats",
            },
            {
              id: -2023787330,
              method: "messages.getAllChats",
              params: [{ name: "except_ids", type: "Vector<long>" }],
              type: "messages.Chats",
            },
            {
              id: -333262899,
              method: "help.setBotUpdatesStatus",
              params: [
                { name: "pending_updates_count", type: "int" },
                { name: "message", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 852135825,
              method: "messages.getWebPage",
              params: [
                { name: "url", type: "string" },
                { name: "hash", type: "int" },
              ],
              type: "WebPage",
            },
            {
              id: -1489903017,
              method: "messages.toggleDialogPin",
              params: [
                { name: "flags", type: "#" },
                { name: "pinned", type: "flags.0?true" },
                { name: "peer", type: "InputDialogPeer" },
              ],
              type: "Bool",
            },
            {
              id: 991616823,
              method: "messages.reorderPinnedDialogs",
              params: [
                { name: "flags", type: "#" },
                { name: "force", type: "flags.0?true" },
                { name: "folder_id", type: "int" },
                { name: "order", type: "Vector<InputDialogPeer>" },
              ],
              type: "Bool",
            },
            {
              id: -692498958,
              method: "messages.getPinnedDialogs",
              params: [{ name: "folder_id", type: "int" }],
              type: "messages.PeerDialogs",
            },
            {
              id: -1440257555,
              method: "bots.sendCustomRequest",
              params: [
                { name: "custom_method", type: "string" },
                { name: "params", type: "DataJSON" },
              ],
              type: "DataJSON",
            },
            {
              id: -434028723,
              method: "bots.answerWebhookJSONQuery",
              params: [
                { name: "query_id", type: "long" },
                { name: "data", type: "DataJSON" },
              ],
              type: "Bool",
            },
            {
              id: 619086221,
              method: "upload.getWebFile",
              params: [
                { name: "location", type: "InputWebFileLocation" },
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "upload.WebFile",
            },
            {
              id: -1976353651,
              method: "payments.getPaymentForm",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "theme_params", type: "flags.0?DataJSON" },
              ],
              type: "payments.PaymentForm",
            },
            {
              id: 611897804,
              method: "payments.getPaymentReceipt",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
              ],
              type: "payments.PaymentReceipt",
            },
            {
              id: -619695760,
              method: "payments.validateRequestedInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "save", type: "flags.0?true" },
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "info", type: "PaymentRequestedInfo" },
              ],
              type: "payments.ValidatedRequestedInfo",
            },
            {
              id: 818134173,
              method: "payments.sendPaymentForm",
              params: [
                { name: "flags", type: "#" },
                { name: "form_id", type: "long" },
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "requested_info_id", type: "flags.0?string" },
                { name: "shipping_option_id", type: "flags.1?string" },
                { name: "credentials", type: "InputPaymentCredentials" },
                { name: "tip_amount", type: "flags.2?long" },
              ],
              type: "payments.PaymentResult",
            },
            {
              id: 1151208273,
              method: "account.getTmpPassword",
              params: [
                { name: "password", type: "InputCheckPasswordSRP" },
                { name: "period", type: "int" },
              ],
              type: "account.TmpPassword",
            },
            {
              id: 578650699,
              method: "payments.getSavedInfo",
              params: [],
              type: "payments.SavedInfo",
            },
            {
              id: -667062079,
              method: "payments.clearSavedInfo",
              params: [
                { name: "flags", type: "#" },
                { name: "credentials", type: "flags.0?true" },
                { name: "info", type: "flags.1?true" },
              ],
              type: "Bool",
            },
            {
              id: -436833542,
              method: "messages.setBotShippingResults",
              params: [
                { name: "flags", type: "#" },
                { name: "query_id", type: "long" },
                { name: "error", type: "flags.0?string" },
                {
                  name: "shipping_options",
                  type: "flags.1?Vector<ShippingOption>",
                },
              ],
              type: "Bool",
            },
            {
              id: 163765653,
              method: "messages.setBotPrecheckoutResults",
              params: [
                { name: "flags", type: "#" },
                { name: "success", type: "flags.1?true" },
                { name: "query_id", type: "long" },
                { name: "error", type: "flags.0?string" },
              ],
              type: "Bool",
            },
            {
              id: -1876841625,
              method: "stickers.createStickerSet",
              params: [
                { name: "flags", type: "#" },
                { name: "masks", type: "flags.0?true" },
                { name: "animated", type: "flags.1?true" },
                { name: "videos", type: "flags.4?true" },
                { name: "user_id", type: "InputUser" },
                { name: "title", type: "string" },
                { name: "short_name", type: "string" },
                { name: "thumb", type: "flags.2?InputDocument" },
                { name: "stickers", type: "Vector<InputStickerSetItem>" },
                { name: "software", type: "flags.3?string" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: -143257775,
              method: "stickers.removeStickerFromSet",
              params: [{ name: "sticker", type: "InputDocument" }],
              type: "messages.StickerSet",
            },
            {
              id: -4795190,
              method: "stickers.changeStickerPosition",
              params: [
                { name: "sticker", type: "InputDocument" },
                { name: "position", type: "int" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: -2041315650,
              method: "stickers.addStickerToSet",
              params: [
                { name: "stickerset", type: "InputStickerSet" },
                { name: "sticker", type: "InputStickerSetItem" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: 1369162417,
              method: "messages.uploadMedia",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "media", type: "InputMedia" },
              ],
              type: "MessageMedia",
            },
            {
              id: 1430593449,
              method: "phone.getCallConfig",
              params: [],
              type: "DataJSON",
            },
            {
              id: 1124046573,
              method: "phone.requestCall",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.0?true" },
                { name: "user_id", type: "InputUser" },
                { name: "random_id", type: "int" },
                { name: "g_a_hash", type: "bytes" },
                { name: "protocol", type: "PhoneCallProtocol" },
              ],
              type: "phone.PhoneCall",
            },
            {
              id: 1003664544,
              method: "phone.acceptCall",
              params: [
                { name: "peer", type: "InputPhoneCall" },
                { name: "g_b", type: "bytes" },
                { name: "protocol", type: "PhoneCallProtocol" },
              ],
              type: "phone.PhoneCall",
            },
            {
              id: 788404002,
              method: "phone.confirmCall",
              params: [
                { name: "peer", type: "InputPhoneCall" },
                { name: "g_a", type: "bytes" },
                { name: "key_fingerprint", type: "long" },
                { name: "protocol", type: "PhoneCallProtocol" },
              ],
              type: "phone.PhoneCall",
            },
            {
              id: 399855457,
              method: "phone.receivedCall",
              params: [{ name: "peer", type: "InputPhoneCall" }],
              type: "Bool",
            },
            {
              id: -1295269440,
              method: "phone.discardCall",
              params: [
                { name: "flags", type: "#" },
                { name: "video", type: "flags.0?true" },
                { name: "peer", type: "InputPhoneCall" },
                { name: "duration", type: "int" },
                { name: "reason", type: "PhoneCallDiscardReason" },
                { name: "connection_id", type: "long" },
              ],
              type: "Updates",
            },
            {
              id: 1508562471,
              method: "phone.setCallRating",
              params: [
                { name: "flags", type: "#" },
                { name: "user_initiative", type: "flags.0?true" },
                { name: "peer", type: "InputPhoneCall" },
                { name: "rating", type: "int" },
                { name: "comment", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: 662363518,
              method: "phone.saveCallDebug",
              params: [
                { name: "peer", type: "InputPhoneCall" },
                { name: "debug", type: "DataJSON" },
              ],
              type: "Bool",
            },
            {
              id: 536919235,
              method: "upload.getCdnFile",
              params: [
                { name: "file_token", type: "bytes" },
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "upload.CdnFile",
            },
            {
              id: -1691921240,
              method: "upload.reuploadCdnFile",
              params: [
                { name: "file_token", type: "bytes" },
                { name: "request_token", type: "bytes" },
              ],
              type: "Vector<FileHash>",
            },
            {
              id: 1375900482,
              method: "help.getCdnConfig",
              params: [],
              type: "CdnConfig",
            },
            {
              id: -219008246,
              method: "langpack.getLangPack",
              params: [
                { name: "lang_pack", type: "string" },
                { name: "lang_code", type: "string" },
              ],
              type: "LangPackDifference",
            },
            {
              id: -269862909,
              method: "langpack.getStrings",
              params: [
                { name: "lang_pack", type: "string" },
                { name: "lang_code", type: "string" },
                { name: "keys", type: "Vector<string>" },
              ],
              type: "Vector<LangPackString>",
            },
            {
              id: -845657435,
              method: "langpack.getDifference",
              params: [
                { name: "lang_pack", type: "string" },
                { name: "lang_code", type: "string" },
                { name: "from_version", type: "int" },
              ],
              type: "LangPackDifference",
            },
            {
              id: 1120311183,
              method: "langpack.getLanguages",
              params: [{ name: "lang_pack", type: "string" }],
              type: "Vector<LangPackLanguage>",
            },
            {
              id: -1763259007,
              method: "channels.editBanned",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "participant", type: "InputPeer" },
                { name: "banned_rights", type: "ChatBannedRights" },
              ],
              type: "Updates",
            },
            {
              id: 870184064,
              method: "channels.getAdminLog",
              params: [
                { name: "flags", type: "#" },
                { name: "channel", type: "InputChannel" },
                { name: "q", type: "string" },
                {
                  name: "events_filter",
                  type: "flags.0?ChannelAdminLogEventsFilter",
                },
                { name: "admins", type: "flags.1?Vector<InputUser>" },
                { name: "max_id", type: "long" },
                { name: "min_id", type: "long" },
                { name: "limit", type: "int" },
              ],
              type: "channels.AdminLogResults",
            },
            {
              id: 1302676017,
              method: "upload.getCdnFileHashes",
              params: [
                { name: "file_token", type: "bytes" },
                { name: "offset", type: "int" },
              ],
              type: "Vector<FileHash>",
            },
            {
              id: -914493408,
              method: "messages.sendScreenshotNotification",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "reply_to_msg_id", type: "int" },
                { name: "random_id", type: "long" },
              ],
              type: "Updates",
            },
            {
              id: -359881479,
              method: "channels.setStickers",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "stickerset", type: "InputStickerSet" },
              ],
              type: "Bool",
            },
            {
              id: 82946729,
              method: "messages.getFavedStickers",
              params: [{ name: "hash", type: "long" }],
              type: "messages.FavedStickers",
            },
            {
              id: -1174420133,
              method: "messages.faveSticker",
              params: [
                { name: "id", type: "InputDocument" },
                { name: "unfave", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: -357180360,
              method: "channels.readMessageContents",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "Bool",
            },
            {
              id: -2020263951,
              method: "contacts.resetSaved",
              params: [],
              type: "Bool",
            },
            {
              id: 1180140658,
              method: "messages.getUnreadMentions",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "offset_id", type: "int" },
                { name: "add_offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "max_id", type: "int" },
                { name: "min_id", type: "int" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1355375294,
              method: "channels.deleteHistory",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "max_id", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: 1036054804,
              method: "help.getRecentMeUrls",
              params: [{ name: "referer", type: "string" }],
              type: "help.RecentMeUrls",
            },
            {
              id: -356796084,
              method: "channels.togglePreHistoryHidden",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "enabled", type: "Bool" },
              ],
              type: "Updates",
            },
            {
              id: 251759059,
              method: "messages.readMentions",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.AffectedHistory",
            },
            {
              id: 1881817312,
              method: "messages.getRecentLocations",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "limit", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Messages",
            },
            {
              id: -134016113,
              method: "messages.sendMultiMedia",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.5?true" },
                { name: "background", type: "flags.6?true" },
                { name: "clear_draft", type: "flags.7?true" },
                { name: "noforwards", type: "flags.14?true" },
                { name: "peer", type: "InputPeer" },
                { name: "reply_to_msg_id", type: "flags.0?int" },
                { name: "multi_media", type: "Vector<InputSingleMedia>" },
                { name: "schedule_date", type: "flags.10?int" },
                { name: "send_as", type: "flags.13?InputPeer" },
              ],
              type: "Updates",
            },
            {
              id: 1347929239,
              method: "messages.uploadEncryptedFile",
              params: [
                { name: "peer", type: "InputEncryptedChat" },
                { name: "file", type: "InputEncryptedFile" },
              ],
              type: "EncryptedFile",
            },
            {
              id: 405695855,
              method: "account.getWebAuthorizations",
              params: [],
              type: "account.WebAuthorizations",
            },
            {
              id: 755087855,
              method: "account.resetWebAuthorization",
              params: [{ name: "hash", type: "long" }],
              type: "Bool",
            },
            {
              id: 1747789204,
              method: "account.resetWebAuthorizations",
              params: [],
              type: "Bool",
            },
            {
              id: 896555914,
              method: "messages.searchStickerSets",
              params: [
                { name: "flags", type: "#" },
                { name: "exclude_featured", type: "flags.0?true" },
                { name: "q", type: "string" },
                { name: "hash", type: "long" },
              ],
              type: "messages.FoundStickerSets",
            },
            {
              id: -956147407,
              method: "upload.getFileHashes",
              params: [
                { name: "location", type: "InputFileLocation" },
                { name: "offset", type: "int" },
              ],
              type: "Vector<FileHash>",
            },
            {
              id: 749019089,
              method: "help.getTermsOfServiceUpdate",
              params: [],
              type: "help.TermsOfServiceUpdate",
            },
            {
              id: -294455398,
              method: "help.acceptTermsOfService",
              params: [{ name: "id", type: "DataJSON" }],
              type: "Bool",
            },
            {
              id: -1299661699,
              method: "account.getAllSecureValues",
              params: [],
              type: "Vector<SecureValue>",
            },
            {
              id: 1936088002,
              method: "account.getSecureValue",
              params: [{ name: "types", type: "Vector<SecureValueType>" }],
              type: "Vector<SecureValue>",
            },
            {
              id: -1986010339,
              method: "account.saveSecureValue",
              params: [
                { name: "value", type: "InputSecureValue" },
                { name: "secure_secret_id", type: "long" },
              ],
              type: "SecureValue",
            },
            {
              id: -1199522741,
              method: "account.deleteSecureValue",
              params: [{ name: "types", type: "Vector<SecureValueType>" }],
              type: "Bool",
            },
            {
              id: -1865902923,
              method: "users.setSecureValueErrors",
              params: [
                { name: "id", type: "InputUser" },
                { name: "errors", type: "Vector<SecureValueError>" },
              ],
              type: "Bool",
            },
            {
              id: -1456907910,
              method: "account.getAuthorizationForm",
              params: [
                { name: "bot_id", type: "long" },
                { name: "scope", type: "string" },
                { name: "public_key", type: "string" },
              ],
              type: "account.AuthorizationForm",
            },
            {
              id: -202552205,
              method: "account.acceptAuthorization",
              params: [
                { name: "bot_id", type: "long" },
                { name: "scope", type: "string" },
                { name: "public_key", type: "string" },
                { name: "value_hashes", type: "Vector<SecureValueHash>" },
                { name: "credentials", type: "SecureCredentialsEncrypted" },
              ],
              type: "Bool",
            },
            {
              id: -1516022023,
              method: "account.sendVerifyPhoneCode",
              params: [
                { name: "phone_number", type: "string" },
                { name: "settings", type: "CodeSettings" },
              ],
              type: "auth.SentCode",
            },
            {
              id: 1305716726,
              method: "account.verifyPhone",
              params: [
                { name: "phone_number", type: "string" },
                { name: "phone_code_hash", type: "string" },
                { name: "phone_code", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 1880182943,
              method: "account.sendVerifyEmailCode",
              params: [{ name: "email", type: "string" }],
              type: "account.SentEmailCode",
            },
            {
              id: -323339813,
              method: "account.verifyEmail",
              params: [
                { name: "email", type: "string" },
                { name: "code", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 1072547679,
              method: "help.getDeepLinkInfo",
              params: [{ name: "path", type: "string" }],
              type: "help.DeepLinkInfo",
            },
            {
              id: -2098076769,
              method: "contacts.getSaved",
              params: [],
              type: "Vector<SavedContact>",
            },
            {
              id: -2092831552,
              method: "channels.getLeftChannels",
              params: [{ name: "offset", type: "int" }],
              type: "messages.Chats",
            },
            {
              id: -262453244,
              method: "account.initTakeoutSession",
              params: [
                { name: "flags", type: "#" },
                { name: "contacts", type: "flags.0?true" },
                { name: "message_users", type: "flags.1?true" },
                { name: "message_chats", type: "flags.2?true" },
                { name: "message_megagroups", type: "flags.3?true" },
                { name: "message_channels", type: "flags.4?true" },
                { name: "files", type: "flags.5?true" },
                { name: "file_max_size", type: "flags.5?int" },
              ],
              type: "account.Takeout",
            },
            {
              id: 489050862,
              method: "account.finishTakeoutSession",
              params: [
                { name: "flags", type: "#" },
                { name: "success", type: "flags.0?true" },
              ],
              type: "Bool",
            },
            {
              id: 486505992,
              method: "messages.getSplitRanges",
              params: [],
              type: "Vector<MessageRange>",
            },
            {
              id: 911373810,
              method: "invokeWithMessagesRange",
              params: [
                { name: "range", type: "MessageRange" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: -1398145746,
              method: "invokeWithTakeout",
              params: [
                { name: "takeout_id", type: "long" },
                { name: "query", type: "!X" },
              ],
              type: "X",
            },
            {
              id: -1031349873,
              method: "messages.markDialogUnread",
              params: [
                { name: "flags", type: "#" },
                { name: "unread", type: "flags.0?true" },
                { name: "peer", type: "InputDialogPeer" },
              ],
              type: "Bool",
            },
            {
              id: 585256482,
              method: "messages.getDialogUnreadMarks",
              params: [],
              type: "Vector<DialogPeer>",
            },
            {
              id: -2062238246,
              method: "contacts.toggleTopPeers",
              params: [{ name: "enabled", type: "Bool" }],
              type: "Bool",
            },
            {
              id: 2119757468,
              method: "messages.clearAllDrafts",
              params: [],
              type: "Bool",
            },
            {
              id: -1735311088,
              method: "help.getAppConfig",
              params: [],
              type: "JSONValue",
            },
            {
              id: 1862465352,
              method: "help.saveAppLog",
              params: [{ name: "events", type: "Vector<InputAppEvent>" }],
              type: "Bool",
            },
            {
              id: -966677240,
              method: "help.getPassportConfig",
              params: [{ name: "hash", type: "int" }],
              type: "help.PassportConfig",
            },
            {
              id: 1784243458,
              method: "langpack.getLanguage",
              params: [
                { name: "lang_pack", type: "string" },
                { name: "lang_code", type: "string" },
              ],
              type: "LangPackLanguage",
            },
            {
              id: -760547348,
              method: "messages.updatePinnedMessage",
              params: [
                { name: "flags", type: "#" },
                { name: "silent", type: "flags.0?true" },
                { name: "unpin", type: "flags.1?true" },
                { name: "pm_oneside", type: "flags.2?true" },
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: -1881204448,
              method: "account.confirmPasswordEmail",
              params: [{ name: "code", type: "string" }],
              type: "Bool",
            },
            {
              id: 2055154197,
              method: "account.resendPasswordEmail",
              params: [],
              type: "Bool",
            },
            {
              id: -1043606090,
              method: "account.cancelPasswordEmail",
              params: [],
              type: "Bool",
            },
            {
              id: -748624084,
              method: "help.getSupportName",
              params: [],
              type: "help.SupportName",
            },
            {
              id: 59377875,
              method: "help.getUserInfo",
              params: [{ name: "user_id", type: "InputUser" }],
              type: "help.UserInfo",
            },
            {
              id: 1723407216,
              method: "help.editUserInfo",
              params: [
                { name: "user_id", type: "InputUser" },
                { name: "message", type: "string" },
                { name: "entities", type: "Vector<MessageEntity>" },
              ],
              type: "help.UserInfo",
            },
            {
              id: -1626880216,
              method: "account.getContactSignUpNotification",
              params: [],
              type: "Bool",
            },
            {
              id: -806076575,
              method: "account.setContactSignUpNotification",
              params: [{ name: "silent", type: "Bool" }],
              type: "Bool",
            },
            {
              id: 1398240377,
              method: "account.getNotifyExceptions",
              params: [
                { name: "flags", type: "#" },
                { name: "compare_sound", type: "flags.1?true" },
                { name: "peer", type: "flags.0?InputNotifyPeer" },
              ],
              type: "Updates",
            },
            {
              id: 283795844,
              method: "messages.sendVote",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "options", type: "Vector<bytes>" },
              ],
              type: "Updates",
            },
            {
              id: 1941660731,
              method: "messages.getPollResults",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 1848369232,
              method: "messages.getOnlines",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "ChatOnlines",
            },
            {
              id: -554301545,
              method: "messages.editChatAbout",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "about", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: -1517917375,
              method: "messages.editChatDefaultBannedRights",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "banned_rights", type: "ChatBannedRights" },
              ],
              type: "Updates",
            },
            {
              id: -57811990,
              method: "account.getWallPaper",
              params: [{ name: "wallpaper", type: "InputWallPaper" }],
              type: "WallPaper",
            },
            {
              id: -578472351,
              method: "account.uploadWallPaper",
              params: [
                { name: "file", type: "InputFile" },
                { name: "mime_type", type: "string" },
                { name: "settings", type: "WallPaperSettings" },
              ],
              type: "WallPaper",
            },
            {
              id: 1817860919,
              method: "account.saveWallPaper",
              params: [
                { name: "wallpaper", type: "InputWallPaper" },
                { name: "unsave", type: "Bool" },
                { name: "settings", type: "WallPaperSettings" },
              ],
              type: "Bool",
            },
            {
              id: -18000023,
              method: "account.installWallPaper",
              params: [
                { name: "wallpaper", type: "InputWallPaper" },
                { name: "settings", type: "WallPaperSettings" },
              ],
              type: "Bool",
            },
            {
              id: -1153722364,
              method: "account.resetWallPapers",
              params: [],
              type: "Bool",
            },
            {
              id: 1457130303,
              method: "account.getAutoDownloadSettings",
              params: [],
              type: "account.AutoDownloadSettings",
            },
            {
              id: 1995661875,
              method: "account.saveAutoDownloadSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "low", type: "flags.0?true" },
                { name: "high", type: "flags.1?true" },
                { name: "settings", type: "AutoDownloadSettings" },
              ],
              type: "Bool",
            },
            {
              id: 899735650,
              method: "messages.getEmojiKeywords",
              params: [{ name: "lang_code", type: "string" }],
              type: "EmojiKeywordsDifference",
            },
            {
              id: 352892591,
              method: "messages.getEmojiKeywordsDifference",
              params: [
                { name: "lang_code", type: "string" },
                { name: "from_version", type: "int" },
              ],
              type: "EmojiKeywordsDifference",
            },
            {
              id: 1318675378,
              method: "messages.getEmojiKeywordsLanguages",
              params: [{ name: "lang_codes", type: "Vector<string>" }],
              type: "Vector<EmojiLanguage>",
            },
            {
              id: -709817306,
              method: "messages.getEmojiURL",
              params: [{ name: "lang_code", type: "string" }],
              type: "EmojiURL",
            },
            {
              id: 1749536939,
              method: "folders.editPeerFolders",
              params: [
                { name: "folder_peers", type: "Vector<InputFolderPeer>" },
              ],
              type: "Updates",
            },
            {
              id: 472471681,
              method: "folders.deleteFolder",
              params: [{ name: "folder_id", type: "int" }],
              type: "Updates",
            },
            {
              id: 1932455680,
              method: "messages.getSearchCounters",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "filters", type: "Vector<MessagesFilter>" },
              ],
              type: "Vector<messages.SearchCounter>",
            },
            {
              id: -170208392,
              method: "channels.getGroupsForDiscussion",
              params: [],
              type: "messages.Chats",
            },
            {
              id: 1079520178,
              method: "channels.setDiscussionGroup",
              params: [
                { name: "broadcast", type: "InputChannel" },
                { name: "group", type: "InputChannel" },
              ],
              type: "Bool",
            },
            {
              id: 428848198,
              method: "messages.requestUrlAuth",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "flags.1?InputPeer" },
                { name: "msg_id", type: "flags.1?int" },
                { name: "button_id", type: "flags.1?int" },
                { name: "url", type: "flags.2?string" },
              ],
              type: "UrlAuthResult",
            },
            {
              id: -1322487515,
              method: "messages.acceptUrlAuth",
              params: [
                { name: "flags", type: "#" },
                { name: "write_allowed", type: "flags.0?true" },
                { name: "peer", type: "flags.1?InputPeer" },
                { name: "msg_id", type: "flags.1?int" },
                { name: "button_id", type: "flags.1?int" },
                { name: "url", type: "flags.2?string" },
              ],
              type: "UrlAuthResult",
            },
            {
              id: 1336717624,
              method: "messages.hidePeerSettingsBar",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "Bool",
            },
            {
              id: -386636848,
              method: "contacts.addContact",
              params: [
                { name: "flags", type: "#" },
                { name: "add_phone_privacy_exception", type: "flags.0?true" },
                { name: "id", type: "InputUser" },
                { name: "first_name", type: "string" },
                { name: "last_name", type: "string" },
                { name: "phone", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -130964977,
              method: "contacts.acceptContact",
              params: [{ name: "id", type: "InputUser" }],
              type: "Updates",
            },
            {
              id: -1892102881,
              method: "channels.editCreator",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "user_id", type: "InputUser" },
                { name: "password", type: "InputCheckPasswordSRP" },
              ],
              type: "Updates",
            },
            {
              id: -750207932,
              method: "contacts.getLocated",
              params: [
                { name: "flags", type: "#" },
                { name: "background", type: "flags.1?true" },
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "self_expires", type: "flags.0?int" },
              ],
              type: "Updates",
            },
            {
              id: 1491484525,
              method: "channels.editLocation",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "geo_point", type: "InputGeoPoint" },
                { name: "address", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: -304832784,
              method: "channels.toggleSlowMode",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "seconds", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: -183077365,
              method: "messages.getScheduledHistory",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1111817116,
              method: "messages.getScheduledMessages",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1120369398,
              method: "messages.sendScheduledMessages",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "Updates",
            },
            {
              id: 1504586518,
              method: "messages.deleteScheduledMessages",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "Updates",
            },
            {
              id: 473805619,
              method: "account.uploadTheme",
              params: [
                { name: "flags", type: "#" },
                { name: "file", type: "InputFile" },
                { name: "thumb", type: "flags.0?InputFile" },
                { name: "file_name", type: "string" },
                { name: "mime_type", type: "string" },
              ],
              type: "Document",
            },
            {
              id: 1697530880,
              method: "account.createTheme",
              params: [
                { name: "flags", type: "#" },
                { name: "slug", type: "string" },
                { name: "title", type: "string" },
                { name: "document", type: "flags.2?InputDocument" },
                {
                  name: "settings",
                  type: "flags.3?Vector<InputThemeSettings>",
                },
              ],
              type: "Theme",
            },
            {
              id: 737414348,
              method: "account.updateTheme",
              params: [
                { name: "flags", type: "#" },
                { name: "format", type: "string" },
                { name: "theme", type: "InputTheme" },
                { name: "slug", type: "flags.0?string" },
                { name: "title", type: "flags.1?string" },
                { name: "document", type: "flags.2?InputDocument" },
                {
                  name: "settings",
                  type: "flags.3?Vector<InputThemeSettings>",
                },
              ],
              type: "Theme",
            },
            {
              id: -229175188,
              method: "account.saveTheme",
              params: [
                { name: "theme", type: "InputTheme" },
                { name: "unsave", type: "Bool" },
              ],
              type: "Bool",
            },
            {
              id: -953697477,
              method: "account.installTheme",
              params: [
                { name: "flags", type: "#" },
                { name: "dark", type: "flags.0?true" },
                { name: "theme", type: "flags.1?InputTheme" },
                { name: "format", type: "flags.2?string" },
                { name: "base_theme", type: "flags.3?BaseTheme" },
              ],
              type: "Bool",
            },
            {
              id: -1919060949,
              method: "account.getTheme",
              params: [
                { name: "format", type: "string" },
                { name: "theme", type: "InputTheme" },
                { name: "document_id", type: "long" },
              ],
              type: "Theme",
            },
            {
              id: 1913054296,
              method: "account.getThemes",
              params: [
                { name: "format", type: "string" },
                { name: "hash", type: "long" },
              ],
              type: "account.Themes",
            },
            {
              id: -1210022402,
              method: "auth.exportLoginToken",
              params: [
                { name: "api_id", type: "int" },
                { name: "api_hash", type: "string" },
                { name: "except_ids", type: "Vector<long>" },
              ],
              type: "auth.LoginToken",
            },
            {
              id: -1783866140,
              method: "auth.importLoginToken",
              params: [{ name: "token", type: "bytes" }],
              type: "auth.LoginToken",
            },
            {
              id: -392909491,
              method: "auth.acceptLoginToken",
              params: [{ name: "token", type: "bytes" }],
              type: "Authorization",
            },
            {
              id: -1250643605,
              method: "account.setContentSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "sensitive_enabled", type: "flags.0?true" },
              ],
              type: "Bool",
            },
            {
              id: -1952756306,
              method: "account.getContentSettings",
              params: [],
              type: "account.ContentSettings",
            },
            {
              id: 300429806,
              method: "channels.getInactiveChannels",
              params: [],
              type: "messages.InactiveChats",
            },
            {
              id: 1705865692,
              method: "account.getMultiWallPapers",
              params: [{ name: "wallpapers", type: "Vector<InputWallPaper>" }],
              type: "Vector<WallPaper>",
            },
            {
              id: -1200736242,
              method: "messages.getPollVotes",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
                { name: "option", type: "flags.0?bytes" },
                { name: "offset", type: "flags.1?string" },
                { name: "limit", type: "int" },
              ],
              type: "messages.VotesList",
            },
            {
              id: -1257951254,
              method: "messages.toggleStickerSets",
              params: [
                { name: "flags", type: "#" },
                { name: "uninstall", type: "flags.0?true" },
                { name: "archive", type: "flags.1?true" },
                { name: "unarchive", type: "flags.2?true" },
                { name: "stickersets", type: "Vector<InputStickerSet>" },
              ],
              type: "Bool",
            },
            {
              id: 779736953,
              method: "payments.getBankCardData",
              params: [{ name: "number", type: "string" }],
              type: "payments.BankCardData",
            },
            {
              id: -241247891,
              method: "messages.getDialogFilters",
              params: [],
              type: "Vector<DialogFilter>",
            },
            {
              id: -1566780372,
              method: "messages.getSuggestedDialogFilters",
              params: [],
              type: "Vector<DialogFilterSuggested>",
            },
            {
              id: 450142282,
              method: "messages.updateDialogFilter",
              params: [
                { name: "flags", type: "#" },
                { name: "id", type: "int" },
                { name: "filter", type: "flags.0?DialogFilter" },
              ],
              type: "Bool",
            },
            {
              id: -983318044,
              method: "messages.updateDialogFiltersOrder",
              params: [{ name: "order", type: "Vector<int>" }],
              type: "Bool",
            },
            {
              id: -1421720550,
              method: "stats.getBroadcastStats",
              params: [
                { name: "flags", type: "#" },
                { name: "dark", type: "flags.0?true" },
                { name: "channel", type: "InputChannel" },
              ],
              type: "stats.BroadcastStats",
            },
            {
              id: 1646092192,
              method: "stats.loadAsyncGraph",
              params: [
                { name: "flags", type: "#" },
                { name: "token", type: "string" },
                { name: "x", type: "flags.0?long" },
              ],
              type: "StatsGraph",
            },
            {
              id: -1707717072,
              method: "stickers.setStickerSetThumb",
              params: [
                { name: "stickerset", type: "InputStickerSet" },
                { name: "thumb", type: "InputDocument" },
              ],
              type: "messages.StickerSet",
            },
            {
              id: 85399130,
              method: "bots.setBotCommands",
              params: [
                { name: "scope", type: "BotCommandScope" },
                { name: "lang_code", type: "string" },
                { name: "commands", type: "Vector<BotCommand>" },
              ],
              type: "Bool",
            },
            {
              id: 2127598753,
              method: "messages.getOldFeaturedStickers",
              params: [
                { name: "offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.FeaturedStickers",
            },
            {
              id: -1063816159,
              method: "help.getPromoData",
              params: [],
              type: "help.PromoData",
            },
            {
              id: 505748629,
              method: "help.hidePromoData",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "Bool",
            },
            {
              id: -8744061,
              method: "phone.sendSignalingData",
              params: [
                { name: "peer", type: "InputPhoneCall" },
                { name: "data", type: "bytes" },
              ],
              type: "Bool",
            },
            {
              id: -589330937,
              method: "stats.getMegagroupStats",
              params: [
                { name: "flags", type: "#" },
                { name: "dark", type: "flags.0?true" },
                { name: "channel", type: "InputChannel" },
              ],
              type: "stats.MegagroupStats",
            },
            {
              id: -349483786,
              method: "account.getGlobalPrivacySettings",
              params: [],
              type: "GlobalPrivacySettings",
            },
            {
              id: 517647042,
              method: "account.setGlobalPrivacySettings",
              params: [{ name: "settings", type: "GlobalPrivacySettings" }],
              type: "GlobalPrivacySettings",
            },
            {
              id: -183649631,
              method: "help.dismissSuggestion",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "suggestion", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 1935116200,
              method: "help.getCountriesList",
              params: [
                { name: "lang_code", type: "string" },
                { name: "hash", type: "int" },
              ],
              type: "help.CountriesList",
            },
            {
              id: 584962828,
              method: "messages.getReplies",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "offset_id", type: "int" },
                { name: "offset_date", type: "int" },
                { name: "add_offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "max_id", type: "int" },
                { name: "min_id", type: "int" },
                { name: "hash", type: "long" },
              ],
              type: "messages.Messages",
            },
            {
              id: 1147761405,
              method: "messages.getDiscussionMessage",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
              ],
              type: "messages.DiscussionMessage",
            },
            {
              id: -147740172,
              method: "messages.readDiscussion",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "read_max_id", type: "int" },
              ],
              type: "Bool",
            },
            {
              id: 698914348,
              method: "contacts.blockFromReplies",
              params: [
                { name: "flags", type: "#" },
                { name: "delete_message", type: "flags.0?true" },
                { name: "delete_history", type: "flags.1?true" },
                { name: "report_spam", type: "flags.2?true" },
                { name: "msg_id", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 1445996571,
              method: "stats.getMessagePublicForwards",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "msg_id", type: "int" },
                { name: "offset_rate", type: "int" },
                { name: "offset_peer", type: "InputPeer" },
                { name: "offset_id", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "messages.Messages",
            },
            {
              id: -1226791947,
              method: "stats.getMessageStats",
              params: [
                { name: "flags", type: "#" },
                { name: "dark", type: "flags.0?true" },
                { name: "channel", type: "InputChannel" },
                { name: "msg_id", type: "int" },
              ],
              type: "stats.MessageStats",
            },
            {
              id: -265962357,
              method: "messages.unpinAllMessages",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.AffectedHistory",
            },
            {
              id: 1221445336,
              method: "phone.createGroupCall",
              params: [
                { name: "flags", type: "#" },
                { name: "rtmp_stream", type: "flags.2?true" },
                { name: "peer", type: "InputPeer" },
                { name: "random_id", type: "int" },
                { name: "title", type: "flags.0?string" },
                { name: "schedule_date", type: "flags.1?int" },
              ],
              type: "Updates",
            },
            {
              id: -1322057861,
              method: "phone.joinGroupCall",
              params: [
                { name: "flags", type: "#" },
                { name: "muted", type: "flags.0?true" },
                { name: "video_stopped", type: "flags.2?true" },
                { name: "call", type: "InputGroupCall" },
                { name: "join_as", type: "InputPeer" },
                { name: "invite_hash", type: "flags.1?string" },
                { name: "params", type: "DataJSON" },
              ],
              type: "Updates",
            },
            {
              id: 1342404601,
              method: "phone.leaveGroupCall",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "source", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: 2067345760,
              method: "phone.inviteToGroupCall",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "users", type: "Vector<InputUser>" },
              ],
              type: "Updates",
            },
            {
              id: 2054648117,
              method: "phone.discardGroupCall",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "Updates",
            },
            {
              id: 1958458429,
              method: "phone.toggleGroupCallSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "reset_invite_hash", type: "flags.1?true" },
                { name: "call", type: "InputGroupCall" },
                { name: "join_muted", type: "flags.0?Bool" },
              ],
              type: "Updates",
            },
            {
              id: 68699611,
              method: "phone.getGroupCall",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "limit", type: "int" },
              ],
              type: "phone.GroupCall",
            },
            {
              id: -984033109,
              method: "phone.getGroupParticipants",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "ids", type: "Vector<InputPeer>" },
                { name: "sources", type: "Vector<int>" },
                { name: "offset", type: "string" },
                { name: "limit", type: "int" },
              ],
              type: "phone.GroupParticipants",
            },
            {
              id: -1248003721,
              method: "phone.checkGroupCall",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "sources", type: "Vector<int>" },
              ],
              type: "Vector<int>",
            },
            {
              id: 1540419152,
              method: "messages.deleteChat",
              params: [{ name: "chat_id", type: "long" }],
              type: "Bool",
            },
            {
              id: -104078327,
              method: "messages.deletePhoneCallHistory",
              params: [
                { name: "flags", type: "#" },
                { name: "revoke", type: "flags.0?true" },
              ],
              type: "messages.AffectedFoundMessages",
            },
            {
              id: 1140726259,
              method: "messages.checkHistoryImport",
              params: [{ name: "import_head", type: "string" }],
              type: "messages.HistoryImportParsed",
            },
            {
              id: 873008187,
              method: "messages.initHistoryImport",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "file", type: "InputFile" },
                { name: "media_count", type: "int" },
              ],
              type: "messages.HistoryImport",
            },
            {
              id: 713433234,
              method: "messages.uploadImportedMedia",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "import_id", type: "long" },
                { name: "file_name", type: "string" },
                { name: "media", type: "InputMedia" },
              ],
              type: "MessageMedia",
            },
            {
              id: -1271008444,
              method: "messages.startHistoryImport",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "import_id", type: "long" },
              ],
              type: "Bool",
            },
            {
              id: -1565154314,
              method: "messages.getExportedChatInvites",
              params: [
                { name: "flags", type: "#" },
                { name: "revoked", type: "flags.3?true" },
                { name: "peer", type: "InputPeer" },
                { name: "admin_id", type: "InputUser" },
                { name: "offset_date", type: "flags.2?int" },
                { name: "offset_link", type: "flags.2?string" },
                { name: "limit", type: "int" },
              ],
              type: "messages.ExportedChatInvites",
            },
            {
              id: 1937010524,
              method: "messages.getExportedChatInvite",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "link", type: "string" },
              ],
              type: "messages.ExportedChatInvite",
            },
            {
              id: -1110823051,
              method: "messages.editExportedChatInvite",
              params: [
                { name: "flags", type: "#" },
                { name: "revoked", type: "flags.2?true" },
                { name: "peer", type: "InputPeer" },
                { name: "link", type: "string" },
                { name: "expire_date", type: "flags.0?int" },
                { name: "usage_limit", type: "flags.1?int" },
                { name: "request_needed", type: "flags.3?Bool" },
                { name: "title", type: "flags.4?string" },
              ],
              type: "messages.ExportedChatInvite",
            },
            {
              id: 1452833749,
              method: "messages.deleteRevokedExportedChatInvites",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "admin_id", type: "InputUser" },
              ],
              type: "Bool",
            },
            {
              id: -731601877,
              method: "messages.deleteExportedChatInvite",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "link", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 958457583,
              method: "messages.getAdminsWithInvites",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.ChatAdminsWithInvites",
            },
            {
              id: -553329330,
              method: "messages.getChatInviteImporters",
              params: [
                { name: "flags", type: "#" },
                { name: "requested", type: "flags.0?true" },
                { name: "peer", type: "InputPeer" },
                { name: "link", type: "flags.1?string" },
                { name: "q", type: "flags.2?string" },
                { name: "offset_date", type: "int" },
                { name: "offset_user", type: "InputUser" },
                { name: "limit", type: "int" },
              ],
              type: "messages.ChatInviteImporters",
            },
            {
              id: -1207017500,
              method: "messages.setHistoryTTL",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "period", type: "int" },
              ],
              type: "Updates",
            },
            {
              id: -91437323,
              method: "account.reportProfilePhoto",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "photo_id", type: "InputPhoto" },
                { name: "reason", type: "ReportReason" },
                { name: "message", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: 187239529,
              method: "channels.convertToGigagroup",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "Updates",
            },
            {
              id: 1573261059,
              method: "messages.checkHistoryImportPeer",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.CheckedHistoryImportPeer",
            },
            {
              id: -248985848,
              method: "phone.toggleGroupCallRecord",
              params: [
                { name: "flags", type: "#" },
                { name: "start", type: "flags.0?true" },
                { name: "video", type: "flags.2?true" },
                { name: "call", type: "InputGroupCall" },
                { name: "title", type: "flags.1?string" },
                { name: "video_portrait", type: "flags.2?Bool" },
              ],
              type: "Updates",
            },
            {
              id: -1524155713,
              method: "phone.editGroupCallParticipant",
              params: [
                { name: "flags", type: "#" },
                { name: "call", type: "InputGroupCall" },
                { name: "participant", type: "InputPeer" },
                { name: "muted", type: "flags.0?Bool" },
                { name: "volume", type: "flags.1?int" },
                { name: "raise_hand", type: "flags.2?Bool" },
                { name: "video_stopped", type: "flags.3?Bool" },
                { name: "video_paused", type: "flags.4?Bool" },
                { name: "presentation_paused", type: "flags.5?Bool" },
              ],
              type: "Updates",
            },
            {
              id: 480685066,
              method: "phone.editGroupCallTitle",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "title", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -277077702,
              method: "phone.getGroupCallJoinAs",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "phone.JoinAsPeers",
            },
            {
              id: -425040769,
              method: "phone.exportGroupCallInvite",
              params: [
                { name: "flags", type: "#" },
                { name: "can_self_unmute", type: "flags.0?true" },
                { name: "call", type: "InputGroupCall" },
              ],
              type: "phone.ExportedGroupCallInvite",
            },
            {
              id: 563885286,
              method: "phone.toggleGroupCallStartSubscription",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "subscribed", type: "Bool" },
              ],
              type: "Updates",
            },
            {
              id: 1451287362,
              method: "phone.startScheduledGroupCall",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "Updates",
            },
            {
              id: 1465786252,
              method: "phone.saveDefaultGroupCallJoinAs",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "join_as", type: "InputPeer" },
              ],
              type: "Bool",
            },
            {
              id: -873829436,
              method: "phone.joinGroupCallPresentation",
              params: [
                { name: "call", type: "InputGroupCall" },
                { name: "params", type: "DataJSON" },
              ],
              type: "Updates",
            },
            {
              id: 475058500,
              method: "phone.leaveGroupCallPresentation",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "Updates",
            },
            {
              id: 676017721,
              method: "stickers.checkShortName",
              params: [{ name: "short_name", type: "string" }],
              type: "Bool",
            },
            {
              id: 1303364867,
              method: "stickers.suggestShortName",
              params: [{ name: "title", type: "string" }],
              type: "stickers.SuggestedShortName",
            },
            {
              id: 1032708345,
              method: "bots.resetBotCommands",
              params: [
                { name: "scope", type: "BotCommandScope" },
                { name: "lang_code", type: "string" },
              ],
              type: "Bool",
            },
            {
              id: -481554986,
              method: "bots.getBotCommands",
              params: [
                { name: "scope", type: "BotCommandScope" },
                { name: "lang_code", type: "string" },
              ],
              type: "Vector<BotCommand>",
            },
            {
              id: -1828139493,
              method: "account.resetPassword",
              params: [],
              type: "account.ResetPasswordResult",
            },
            {
              id: 1284770294,
              method: "account.declinePasswordReset",
              params: [],
              type: "Bool",
            },
            {
              id: 221691769,
              method: "auth.checkRecoveryPassword",
              params: [{ name: "code", type: "string" }],
              type: "Bool",
            },
            {
              id: -700916087,
              method: "account.getChatThemes",
              params: [{ name: "hash", type: "long" }],
              type: "account.Themes",
            },
            {
              id: -432283329,
              method: "messages.setChatTheme",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "emoticon", type: "string" },
              ],
              type: "Updates",
            },
            {
              id: -1095836780,
              method: "channels.viewSponsoredMessage",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "random_id", type: "bytes" },
              ],
              type: "Bool",
            },
            {
              id: -333377601,
              method: "channels.getSponsoredMessages",
              params: [{ name: "channel", type: "InputChannel" }],
              type: "messages.SponsoredMessages",
            },
            {
              id: 745510839,
              method: "messages.getMessageReadParticipants",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
              ],
              type: "Vector<long>",
            },
            {
              id: 1240514025,
              method: "messages.getSearchResultsCalendar",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "filter", type: "MessagesFilter" },
                { name: "offset_id", type: "int" },
                { name: "offset_date", type: "int" },
              ],
              type: "messages.SearchResultsCalendar",
            },
            {
              id: 1855292323,
              method: "messages.getSearchResultsPositions",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "filter", type: "MessagesFilter" },
                { name: "offset_id", type: "int" },
                { name: "limit", type: "int" },
              ],
              type: "messages.SearchResultsPositions",
            },
            {
              id: 2145904661,
              method: "messages.hideChatJoinRequest",
              params: [
                { name: "flags", type: "#" },
                { name: "approved", type: "flags.0?true" },
                { name: "peer", type: "InputPeer" },
                { name: "user_id", type: "InputUser" },
              ],
              type: "Updates",
            },
            {
              id: -528091926,
              method: "messages.hideAllChatJoinRequests",
              params: [
                { name: "flags", type: "#" },
                { name: "approved", type: "flags.0?true" },
                { name: "peer", type: "InputPeer" },
                { name: "link", type: "flags.1?string" },
              ],
              type: "Updates",
            },
            {
              id: -1323389022,
              method: "messages.toggleNoForwards",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "enabled", type: "Bool" },
              ],
              type: "Updates",
            },
            {
              id: -855777386,
              method: "messages.saveDefaultSendAs",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "send_as", type: "InputPeer" },
              ],
              type: "Bool",
            },
            {
              id: 231174382,
              method: "channels.getSendAs",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "channels.SendAsPeers",
            },
            {
              id: -1081501024,
              method: "account.setAuthorizationTTL",
              params: [{ name: "authorization_ttl_days", type: "int" }],
              type: "Bool",
            },
            {
              id: 1089766498,
              method: "account.changeAuthorizationSettings",
              params: [
                { name: "flags", type: "#" },
                { name: "hash", type: "long" },
                { name: "encrypted_requests_disabled", type: "flags.0?Bool" },
                { name: "call_requests_disabled", type: "flags.1?Bool" },
              ],
              type: "Bool",
            },
            {
              id: 913655003,
              method: "channels.deleteParticipantHistory",
              params: [
                { name: "channel", type: "InputChannel" },
                { name: "participant", type: "InputPeer" },
              ],
              type: "messages.AffectedHistory",
            },
            {
              id: 627641572,
              method: "messages.sendReaction",
              params: [
                { name: "flags", type: "#" },
                { name: "big", type: "flags.1?true" },
                { name: "peer", type: "InputPeer" },
                { name: "msg_id", type: "int" },
                { name: "reaction", type: "flags.0?string" },
              ],
              type: "Updates",
            },
            {
              id: -1950707482,
              method: "messages.getMessagesReactions",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "Vector<int>" },
              ],
              type: "Updates",
            },
            {
              id: -521245833,
              method: "messages.getMessageReactionsList",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "InputPeer" },
                { name: "id", type: "int" },
                { name: "reaction", type: "flags.0?string" },
                { name: "offset", type: "flags.1?string" },
                { name: "limit", type: "int" },
              ],
              type: "messages.MessageReactionsList",
            },
            {
              id: 335875750,
              method: "messages.setChatAvailableReactions",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "available_reactions", type: "Vector<string>" },
              ],
              type: "Updates",
            },
            {
              id: 417243308,
              method: "messages.getAvailableReactions",
              params: [{ name: "hash", type: "int" }],
              type: "messages.AvailableReactions",
            },
            {
              id: -647969580,
              method: "messages.setDefaultReaction",
              params: [{ name: "reaction", type: "string" }],
              type: "Bool",
            },
            {
              id: 617508334,
              method: "messages.translateText",
              params: [
                { name: "flags", type: "#" },
                { name: "peer", type: "flags.0?InputPeer" },
                { name: "msg_id", type: "flags.0?int" },
                { name: "text", type: "flags.1?string" },
                { name: "from_lang", type: "flags.2?string" },
                { name: "to_lang", type: "string" },
              ],
              type: "messages.TranslatedText",
            },
            {
              id: -396644838,
              method: "messages.getUnreadReactions",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "offset_id", type: "int" },
                { name: "add_offset", type: "int" },
                { name: "limit", type: "int" },
                { name: "max_id", type: "int" },
                { name: "min_id", type: "int" },
              ],
              type: "messages.Messages",
            },
            {
              id: -2099097129,
              method: "messages.readReactions",
              params: [{ name: "peer", type: "InputPeer" }],
              type: "messages.AffectedHistory",
            },
            {
              id: -1963375804,
              method: "contacts.resolvePhone",
              params: [{ name: "phone", type: "string" }],
              type: "contacts.ResolvedPeer",
            },
            {
              id: 447879488,
              method: "phone.getGroupCallStreamChannels",
              params: [{ name: "call", type: "InputGroupCall" }],
              type: "phone.GroupCallStreamChannels",
            },
            {
              id: -558650433,
              method: "phone.getGroupCallStreamRtmpUrl",
              params: [
                { name: "peer", type: "InputPeer" },
                { name: "revoke", type: "Bool" },
              ],
              type: "phone.GroupCallStreamRtmpUrl",
            },
            {
              id: 276705696,
              method: "messages.searchSentMedia",
              params: [
                { name: "q", type: "string" },
                { name: "filter", type: "MessagesFilter" },
                { name: "limit", type: "int" },
              ],
              type: "messages.Messages",
            },
          ],
        },
        layer: 139,
      };
    function P(e) {
      const t = e.length,
        a = new Array(t);
      for (let n = 0; n < t; ++n)
        a[n] = (e[n] < 16 ? "0" : "") + (e[n] || 0).toString(16);
      return a.join("");
    }
    function S(e) {
      return "object" == typeof e && null !== e;
    }
    var k = a(1),
      I = a.n(k);
    function C(e, t) {
      return I.a.inflate(e, t ? { to: "string" } : void 0);
    }
    var A = a(0),
      M = a.n(A);
    function R(e) {
      return e >>> 0;
    }
    function E(e, t) {
      return (
        (e = R(e)), (t = R(t)), M()(e).shiftLeft(32).add(M()(t)).toString(10)
      );
    }
    const T = +w.API.constructors.find((e) => "boolFalse" === e.predicate).id,
      V = +w.API.constructors.find((e) => "boolTrue" === e.predicate).id,
      D = +w.API.constructors.find((e) => "vector" === e.predicate).id,
      U = +w.MTProto.constructors.find((e) => "gzip_packed" === e.predicate).id;
    class B {
      constructor(e = {}) {
        (this.maxLength = 2048),
          (this.offset = 0),
          (this.mtproto = !1),
          (this.debug = !1),
          (this.maxLength = e.startMaxLength || 2048),
          (this.mtproto = e.mtproto || !1),
          this.createBuffer();
      }
      createBuffer() {
        (this.buffer = new ArrayBuffer(this.maxLength)),
          (this.intView = new Int32Array(this.buffer)),
          (this.byteView = new Uint8Array(this.buffer));
      }
      getArray() {
        const e = new ArrayBuffer(this.offset),
          t = new Int32Array(e);
        return t.set(this.intView.subarray(0, this.offset / 4)), t;
      }
      getBuffer() {
        return this.getArray().buffer;
      }
      getBytes(e = !0) {
        if (e) {
          const e = new ArrayBuffer(this.offset),
            t = new Uint8Array(e);
          return t.set(this.byteView.subarray(0, this.offset)), t;
        }
        const t = new Array(this.offset);
        for (let e = 0; e < this.offset; e++) t[e] = this.byteView[e];
        return t;
      }
      getOffset() {
        return this.offset;
      }
      checkLength(e) {
        if (this.offset + e < this.maxLength) return;
        this.maxLength =
          4 * Math.ceil(Math.max(2 * this.maxLength, this.offset + e + 16) / 4);
        const t = this.buffer,
          a = new Int32Array(t);
        this.createBuffer(), new Int32Array(this.buffer).set(a);
      }
      writeInt(e, t) {
        this.debug && console.log(">>>", e.toString(16), e, t);
        const a = this.offset / 4;
        return (
          this.checkLength(4), (this.intView[a] = e), (this.offset += 4), a
        );
      }
      storeInt(e, t) {
        return this.writeInt(e, (t || "") + ":int");
      }
      storeBool(e, t) {
        e
          ? this.writeInt(V, (t || "") + ":bool")
          : this.writeInt(T, (t || "") + ":bool");
      }
      storeLongP(e, t, a) {
        this.writeInt(t, (a || "") + ":long[low]"),
          this.writeInt(e, (a || "") + ":long[high]");
      }
      storeLong(e, t) {
        if (Array.isArray(e))
          return 2 === e.length
            ? this.storeLongP(e[0], e[1], t)
            : this.storeIntBytes(e, 64, t);
        "string" != typeof e && (e = e ? e.toString() : "0");
        const { quotient: a, remainder: n } = M()(e).divmod(4294967296),
          s = a.toJSNumber(),
          i = n.toJSNumber();
        this.writeInt(i, (t || "") + ":long[low]"),
          this.writeInt(s, (t || "") + ":long[high]");
      }
      storeDouble(e, t) {
        const a = new ArrayBuffer(8),
          n = new Int32Array(a);
        (new Float64Array(a)[0] = e),
          this.writeInt(n[0], (t || "") + ":double[low]"),
          this.writeInt(n[1], (t || "") + ":double[high]");
      }
      storeString(e, t) {
        this.debug && console.log(">>>", e, (t || "") + ":string"),
          void 0 === e && (e = "");
        const a = unescape(encodeURIComponent(e));
        this.checkLength(a.length + 8);
        const n = a.length;
        n <= 253
          ? (this.byteView[this.offset++] = n)
          : ((this.byteView[this.offset++] = 254),
            (this.byteView[this.offset++] = 255 & n),
            (this.byteView[this.offset++] = (65280 & n) >> 8),
            (this.byteView[this.offset++] = (16711680 & n) >> 16));
        for (let e = 0; e < n; e++)
          this.byteView[this.offset++] = a.charCodeAt(e);
        for (; this.offset % 4; ) this.byteView[this.offset++] = 0;
      }
      storeBytes(e, t) {
        e instanceof ArrayBuffer
          ? (e = new Uint8Array(e))
          : void 0 === e && (e = []),
          this.debug && console.log(">>>", P(e), (t || "") + ":bytes");
        const a = e.length;
        for (
          this.checkLength(a + 8),
            a <= 253
              ? (this.byteView[this.offset++] = a)
              : ((this.byteView[this.offset++] = 254),
                (this.byteView[this.offset++] = 255 & a),
                (this.byteView[this.offset++] = (65280 & a) >> 8),
                (this.byteView[this.offset++] = (16711680 & a) >> 16)),
            this.byteView.set(e, this.offset),
            this.offset += a;
          this.offset % 4;

        )
          this.byteView[this.offset++] = 0;
      }
      storeIntBytes(e, t, a) {
        e instanceof ArrayBuffer && (e = new Uint8Array(e));
        const n = e.length;
        if (t % 32 || 8 * n !== t) {
          const s = new Error("Invalid bits: " + t + ", " + n);
          throw (console.error(s, e, a), s);
        }
        this.debug && console.log(">>>", P(e), (a || "") + ":int" + t),
          this.checkLength(n),
          this.byteView.set(e, this.offset),
          (this.offset += n);
      }
      storeRawBytes(e, t) {
        e instanceof ArrayBuffer && (e = new Uint8Array(e));
        const a = e.length;
        this.debug && console.log(">>>", P(e), t || ""),
          this.checkLength(a),
          this.byteView.set(e, this.offset),
          (this.offset += a);
      }
      storeMethod(e, t) {
        const a = (this.mtproto ? w.MTProto : w.API).methods.find(
          (t) => t.method === e
        );
        if (!a) throw new Error("No method " + e + " found");
        this.storeInt(a.id, e + "[id]");
        const n = t.pFlags || t,
          s = {};
        for (const i of a.params) {
          let a = i.type;
          if (-1 !== a.indexOf("?")) {
            const e = a.split("?"),
              s = e[0].split(".");
            if (!(t[s[0]] & (1 << +s[1]))) {
              if (!("true" === e[1] ? n[i.name] : void 0 !== t[i.name]))
                continue;
              t[s[0]] |= 1 << +s[1];
            }
            a = e[1];
          }
          const r = this.storeObject(t[i.name], a, e + "[" + i.name + "]");
          "#" === a && ((t[i.name] = t[i.name] || 0), (s[i.name] = r));
        }
        for (let e in s) this.intView[s[e]] = t[e];
        return a.type;
      }
      storeObject(e, t, a) {
        switch (t) {
          case "#":
            e = e || 0;
          case "int":
            return this.storeInt(e, a);
          case "long":
            return this.storeLong(e, a);
          case "int128":
            return this.storeIntBytes(e, 128, a);
          case "int256":
            return this.storeIntBytes(e, 256, a);
          case "int512":
            return this.storeIntBytes(e, 512, a);
          case "string":
            return this.storeString(e, a);
          case "bytes":
            return this.storeBytes(e, a);
          case "double":
            return this.storeDouble(e, a);
          case "Bool":
            return this.storeBool(e, a);
          case "true":
            return;
        }
        if (Array.isArray(e)) {
          if ("Vector" === t.substr(0, 6)) this.writeInt(D, a + "[id]");
          else if ("vector" !== t.substr(0, 6))
            throw new Error("Invalid vector type " + t);
          const n = t.substr(7, t.length - 8);
          this.writeInt(e.length, a + "[count]");
          for (let t = 0; t < e.length; t++)
            this.storeObject(e[t], n, a + "[" + t + "]");
          return !0;
        }
        if ("vector" === t.substr(0, 6).toLowerCase())
          throw new Error("Invalid vector object");
        if (!S(e)) throw new Error("Invalid object for type " + t);
        const n = this.mtproto ? w.MTProto : w.API,
          s = e._;
        let i = !1;
        const r = n.constructors.find((e) => e.predicate === s);
        if (((i = "%" === t.charAt(0)) && (t = t.substr(1)), !r))
          throw new Error("No predicate " + s + " found");
        s === t && (i = !0), i || this.writeInt(r.id, a + "[" + s + "][id]");
        const p = e.pFlags,
          o = {};
        for (const t of r.params) {
          let n = t.type;
          if (-1 !== n.indexOf("?")) {
            const a = n.split("?"),
              s = a[0].split(".");
            if (!(e[s[0]] & (1 << +s[1]))) {
              if (!("true" === a[1] ? p && p[t.name] : void 0 !== e[t.name]))
                continue;
              e[s[0]] |= 1 << +s[1];
            }
            n = a[1];
          }
          const i = this.storeObject(
            e[t.name],
            n,
            a + "[" + s + "][" + t.name + "]"
          );
          "#" === n && ((e[t.name] = e[t.name] || 0), (o[t.name] = i));
        }
        for (let t in o) this.intView[o[t]] = e[t];
        return r.type;
      }
    }
    class x {
      constructor(e, t = {}) {
        (this.offset = 0),
          (this.mtproto = !1),
          e instanceof ArrayBuffer
            ? ((this.buffer = e),
              (this.intView = new Int32Array(e)),
              (this.byteView = new Uint8Array(this.buffer)))
            : ((this.buffer = e.buffer),
              (this.intView = new Int32Array(e.buffer)),
              (this.byteView = e)),
          (this.override = t.override || {}),
          (this.mtproto = !!t.mtproto),
          (this.debug = void 0 !== t.debug && t.debug);
      }
      readInt(e) {
        if (this.byteView.length - this.offset < 4)
          throw (
            (console.error(this.byteView, this.offset),
            new Error("Nothing to fetch: " + e))
          );
        const t = this.intView[this.offset / 4];
        return (
          this.debug &&
            console.log(
              "<<<",
              t.toString(16),
              t,
              e,
              this.byteView.slice(this.offset - 16, this.offset + 16),
              P(this.byteView.slice(this.offset - 16, this.offset + 16))
            ),
          (this.offset += 4),
          t
        );
      }
      fetchInt(e) {
        return this.readInt((e || "") + ":int");
      }
      fetchDouble(e) {
        const t = new ArrayBuffer(8),
          a = new Int32Array(t),
          n = new Float64Array(t);
        return (
          (a[0] = this.readInt((e || "") + ":double[low]")),
          (a[1] = this.readInt((e || "") + ":double[high]")),
          n[0]
        );
      }
      fetchLong(e) {
        const t = this.readInt((e || "") + ":long[low]"),
          a = E(this.readInt((e || "") + ":long[high]"), t);
        if (!this.mtproto) {
          const e = +a;
          if (Number.isSafeInteger(e)) return e;
        }
        return a;
      }
      fetchBool(e) {
        const t = this.readInt((e || "") + ":bool");
        return (
          t === V ||
          (t !== T && ((this.offset -= 4), this.fetchObject("Object", e)))
        );
      }
      fetchString(e) {
        let t = this.byteView[this.offset++];
        254 === t &&
          (t =
            this.byteView[this.offset++] |
            (this.byteView[this.offset++] << 8) |
            (this.byteView[this.offset++] << 16));
        let a,
          n = "";
        for (let e = 0; e < t; e++)
          n += String.fromCharCode(this.byteView[this.offset++]);
        for (; this.offset % 4; ) this.offset++;
        try {
          a = decodeURIComponent(escape(n));
        } catch (e) {
          a = n;
        }
        return this.debug && console.log("<<<", a, (e || "") + ":string"), a;
      }
      fetchBytes(e) {
        let t = this.byteView[this.offset++];
        254 === t &&
          (t =
            this.byteView[this.offset++] |
            (this.byteView[this.offset++] << 8) |
            (this.byteView[this.offset++] << 16));
        const a = this.byteView.subarray(this.offset, this.offset + t);
        for (this.offset += t; this.offset % 4; ) this.offset++;
        return this.debug && console.log("<<<", P(a), (e || "") + ":bytes"), a;
      }
      fetchIntBytes(e, t = !0, a) {
        if (e % 32) throw new Error("Invalid bits: " + e);
        const n = e / 8;
        if (t) {
          const e = this.byteView.subarray(this.offset, this.offset + n);
          return (this.offset += n), e;
        }
        const s = new Array(n);
        for (let e = 0; e < n; e++) s[e] = this.byteView[this.offset++];
        return (
          this.debug && console.log("<<<", P(s), (a || "") + ":int" + e), s
        );
      }
      fetchRawBytes(e, t = !0, a) {
        if (
          !1 === e &&
          (e = this.readInt((a || "") + "_length")) > this.byteView.byteLength
        )
          throw new Error(
            "Invalid raw bytes length: " +
              e +
              ", buffer len: " +
              this.byteView.byteLength
          );
        if (t) {
          const t = new Uint8Array(e);
          return (
            t.set(this.byteView.subarray(this.offset, this.offset + e)),
            (this.offset += e),
            t
          );
        }
        const n = new Array(e);
        for (let t = 0; t < e; t++) n[t] = this.byteView[this.offset++];
        return this.debug && console.log("<<<", P(n), a || ""), n;
      }
      fetchVector(e, t) {
        const a = this.readInt(t + "[count]"),
          n = new Array(a);
        if (a > 0) {
          const s = e.substr(7, e.length - 8);
          for (let e = 0; e < a; ++e)
            n[e] = this.fetchObject(s, t + "[" + e + "]");
        }
        return n;
      }
      fetchObject(e, t) {
        switch (e) {
          case "#":
          case "int":
            return this.fetchInt(t);
          case "long":
            return this.fetchLong(t);
          case "int128":
            return this.fetchIntBytes(128, !0, t);
          case "int256":
            return this.fetchIntBytes(256, !0, t);
          case "int512":
            return this.fetchIntBytes(512, !0, t);
          case "string":
            return this.fetchString(t);
          case "bytes":
            return this.fetchBytes(t);
          case "double":
            return this.fetchDouble(t);
          case "Bool":
            return this.fetchBool(t);
          case "true":
            return !0;
        }
        if (
          ((t = t || e || "Object"),
          "v" === e.charAt(0) && "ector" === e.substr(1, 5))
        )
          return this.fetchVector(e, t);
        const a = this.mtproto ? w.MTProto : w.API;
        let n = null,
          s = !1;
        if ("%" === e.charAt(0)) {
          const t = e.substr(1);
          if (((n = a.constructors.find((e) => e.type === t)), !n))
            throw new Error("Constructor not found for type: " + e);
        } else {
          const i = this.readInt(t + "[id]");
          if (i === U) {
            const a = C(this.fetchBytes(t + "[packed_string]"));
            return new x(a).fetchObject(e, t);
          }
          if (i === D) return this.fetchVector(e, t);
          let r = a.constructorsIndex;
          if (!r) {
            a.constructorsIndex = r = {};
            for (let e = 0, t = a.constructors.length; e < t; e++)
              r[a.constructors[e].id] = e;
          }
          const p = r[i];
          if ((void 0 !== p && (n = a.constructors[p]), !n && this.mtproto)) {
            const e = w.API;
            for (let t = 0, a = e.constructors.length; t < a; t++)
              if (+e.constructors[t].id === i) {
                (n = e.constructors[t]), delete this.mtproto, (s = !0);
                break;
              }
          }
          if (!n) {
            let e, a;
            console.error("Constructor not found:", i);
            try {
              (e = this.fetchInt(t)), (a = this.fetchInt(t));
            } catch (e) {}
            throw new Error(
              "Constructor not found: " + i + " " + e + " " + a + " " + t
            );
          }
        }
        const i = n.predicate,
          r = { _: i },
          p = (this.mtproto ? "mt_" : "") + i;
        if (this.override[p]) this.override[p](r, t + "[" + i + "]");
        else
          for (let e = 0, a = n.params.length; e < a; e++) {
            const a = n.params[e];
            let s = a.type;
            "#" === s && void 0 === r.pFlags && (r.pFlags = {});
            const p = -1 !== s.indexOf("?");
            if (p) {
              const e = s.split("?"),
                t = e[0].split(".");
              if (!(r[t[0]] & (1 << +t[1]))) continue;
              s = e[1];
            }
            const o = this.fetchObject(s, t + "[" + i + "][" + a.name + "]");
            p && "true" === s ? (r.pFlags[a.name] = o) : (r[a.name] = o);
          }
        return (
          s && (this.mtproto = !0),
          "JSONValue" === e ? this.formatJSONValue(r) : r
        );
      }
      formatJSONValue(e) {
        if (!e._) return e;
        switch (e._) {
          case "jsonNull":
            return null;
          case "jsonObject": {
            const t = {},
              a = e.value;
            for (let e = 0, n = a.length; e < n; ++e) {
              const n = a[e];
              t[n.key] = this.formatJSONValue(n.value);
            }
            return t;
          }
          default:
            return e.value;
        }
      }
      getOffset() {
        return this.offset;
      }
      setOffset(e) {
        this.offset = e;
      }
    }
    (p.TLDeserialization = x), (p.TLSerialization = B);
    function F(e, t = 256) {
      return M.a.fromArray(e instanceof Uint8Array ? [...e] : e, t);
    }
    function L(e) {
      return new Uint8Array(e.toArray(256).value);
    }
    function N(e, t, a) {
      const n = F(e),
        s = F(t),
        i = F(a);
      return L(n.modPow(s, i));
    }
    function O(e) {
      if (!crypto || !("getRandomValues" in crypto))
        throw new Error("NO_SECURE_RANDOM");
      return crypto.getRandomValues(e), e;
    }
    function q(e, t = 16, a, s = !1, i = !1) {
      const r = e.byteLength || e.length,
        p = s ? t - r : t - (r % t);
      if (p > 0 && p < t) {
        const t = new Uint8Array(p);
        if (a) for (let e = 0; e < p; ++e) t[e] = 0;
        else O(t);
        return e instanceof ArrayBuffer
          ? (i ? n(t, e) : n(e, t)).buffer
          : e instanceof Uint8Array
          ? i
            ? n(t, e)
            : n(e, t)
          : i
          ? [...t].concat(e)
          : e.concat([...t]);
      }
      return e;
    }
    function G(e, t) {
      const a = e.length,
        n = new Uint8Array(a);
      for (let s = 0; s < a; ++s) n[s] = e[s] ^ t[s];
      return n;
    }
    function K(e) {
      return e instanceof Uint8Array
        ? e
        : "string" == typeof e
        ? new TextEncoder().encode(e)
        : new Uint8Array(e);
    }
    var j = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    function z(e, t, a) {
      return j(this, void 0, void 0, function* () {
        const s = a ? t.new_algo : t.current_algo,
          i = F(s.p),
          r = M()(s.g),
          p = yield (function (e, t, a) {
            return j(this, void 0, void 0, function* () {
              let s = yield De.invokeCrypto(
                "sha256",
                n(t, new TextEncoder().encode(e), t)
              );
              (s = n(a, s, a)), (s = yield De.invokeCrypto("sha256", s));
              let i = yield De.invokeCrypto(
                "pbkdf2",
                new Uint8Array(s),
                t,
                1e5
              );
              return (
                (i = n(a, i, a)), (s = yield De.invokeCrypto("sha256", i)), s
              );
            });
          })(e, s.salt1, s.salt2),
          o = M()(P(p), 16),
          m = function (e, t) {
            return e instanceof Uint8Array || (e = K(e)), q(e, t, !0, !0, !0);
          },
          d = r.modPow(o, i),
          y = (e) => {
            const t = new Uint8Array(e.length);
            for (let a = 0; a < e.length; a += 4)
              (t[a] = e[a + 3]),
                (t[a + 1] = e[a + 2]),
                (t[a + 2] = e[a + 1]),
                (t[a + 3] = e[a]);
            return t;
          };
        if (a) {
          return m(L(d), 256);
        }
        const c = F(t.srp_B),
          l = m(L(i), 256),
          g = m(L(r), 256),
          u = m(L(c), 256),
          h = F(yield De.invokeCrypto("sha256", n(l, g)))
            .multiply(d)
            .mod(i),
          f = (e, t) => {
            const a = t.subtract(e);
            return !(
              a.isNegative() ||
              a.bitLength().toJSNumber() < 1984 ||
              e.bitLength().toJSNumber() < 1984 ||
              Math.floor((e.bitLength().toJSNumber() + 7) / 8) > 256
            );
          },
          {
            a: _,
            a_for_hash: v,
            u: b,
          } = yield (() =>
            j(this, void 0, void 0, function* () {
              for (;;) {
                const e = F(y(t.secure_random)),
                  a = r.modPow(e, i);
                if (f(a, i)) {
                  const t = L(a),
                    s = F(yield De.invokeCrypto("sha256", n(t, u)));
                  if (!s.isZero() && !s.isNegative())
                    return { a: e, a_for_hash: t, u: s };
                }
              }
            }))();
        let w;
        (w = c.greater(h) ? c : c.add(i)), (w = w.subtract(h).mod(i));
        const S = b.multiply(o),
          k = _.add(S),
          I = w.modPow(k, i),
          C = yield De.invokeCrypto("sha256", m(L(I), 256));
        let A = yield De.invokeCrypto("sha256", l);
        A = G(A, yield De.invokeCrypto("sha256", g));
        const R = n(
            A,
            yield De.invokeCrypto("sha256", s.salt1),
            yield De.invokeCrypto("sha256", s.salt2),
            v,
            u,
            C
          ),
          E = yield De.invokeCrypto("sha256", R);
        return {
          _: "inputCheckPasswordSRP",
          srp_id: t.srp_id,
          A: new Uint8Array(v),
          M1: E,
        };
      });
    }
    var H = new Uint8Array(256),
      W = new Uint8Array(256),
      J = new Uint32Array(256),
      Z = new Uint32Array(256),
      Q = new Uint32Array(256),
      X = new Uint32Array(256),
      $ = new Uint32Array(256),
      Y = new Uint32Array(256),
      ee = new Uint32Array(256),
      te = new Uint32Array(256);
    function ae(e) {
      if (e instanceof Uint32Array) return e;
      if ("string" == typeof e) {
        if (e.length % 4 != 0)
          for (var t = e.length % 4; t <= 4; t++) e += "\0x00";
        var a = new Uint32Array(e.length / 4);
        for (t = 0; t < e.length; t += 4)
          a[t / 4] =
            ((s = t),
            ((n = e).charCodeAt(s) << 24) ^
              (n.charCodeAt(s + 1) << 16) ^
              (n.charCodeAt(s + 2) << 8) ^
              n.charCodeAt(s + 3));
        return a;
      }
      var n, s;
      if (e instanceof Uint8Array) {
        for (a = new Uint32Array(e.length / 4), t = 0; t < e.length; t += 4)
          a[t / 4] =
            (e[t] << 24) ^ (e[t + 1] << 16) ^ (e[t + 2] << 8) ^ e[t + 3];
        return a;
      }
      throw new Error("Unable to create 32-bit words");
    }
    function ne(e, t, a) {
      void 0 === a && (a = e);
      for (var n = 0; n < e.length; n++) a[n] = e[n] ^ t[n];
    }
    !(function () {
      for (
        var e,
          t,
          a,
          n,
          s,
          i = new Uint8Array(256),
          r = new Uint8Array(256),
          p = 0,
          o = 0,
          m = 0;
        m < 256;
        m++
      )
        (i[m] = (m << 1) ^ (283 * (m >> 7))), (r[i[m] ^ m] = m);
      for (; !H[p]; p ^= e || 1)
        (a =
          ((a = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4)) >> 8) ^
          (255 & a) ^
          99),
          (H[p] = a),
          (W[a] = p),
          (s =
            (16843009 * i[(t = i[(e = i[p])])]) ^
            (65537 * t) ^
            (257 * e) ^
            (16843008 * p)),
          (n = (257 * i[a]) ^ (16843008 * a)),
          (J[p] = n = (n << 24) ^ (n >>> 8)),
          (Z[p] = n = (n << 24) ^ (n >>> 8)),
          (Q[p] = n = (n << 24) ^ (n >>> 8)),
          (X[p] = n = (n << 24) ^ (n >>> 8)),
          ($[a] = s = (s << 24) ^ (s >>> 8)),
          (Y[a] = s = (s << 24) ^ (s >>> 8)),
          (ee[a] = s = (s << 24) ^ (s >>> 8)),
          (te[a] = s = (s << 24) ^ (s >>> 8)),
          (o = r[o] || 1);
    })();
    var se = (function () {
        function e(e) {
          var t = ae(e);
          if (4 !== t.length && 6 !== t.length && 8 !== t.length)
            throw new Error("Invalid key size");
          (this.encKey = new Uint32Array(4 * t.length + 28)),
            (this.decKey = new Uint32Array(4 * t.length + 28)),
            this.encKey.set(t);
          for (var a, n = 1, s = t.length; s < 4 * t.length + 28; s++)
            (a = this.encKey[s - 1]),
              (s % t.length == 0 || (8 === t.length && s % t.length == 4)) &&
                ((a =
                  (H[a >>> 24] << 24) ^
                  (H[(a >> 16) & 255] << 16) ^
                  (H[(a >> 8) & 255] << 8) ^
                  H[255 & a]),
                s % t.length == 0 &&
                  ((a = (a << 8) ^ (a >>> 24) ^ (n << 24)),
                  (n = (n << 1) ^ (283 * (n >> 7))))),
              (this.encKey[s] = this.encKey[s - t.length] ^ a);
          for (var i = 0; s; i++, s--)
            (a = this.encKey[3 & i ? s : s - 4]),
              (this.decKey[i] =
                s <= 4 || i < 4
                  ? a
                  : $[H[a >>> 24]] ^
                    Y[H[(a >> 16) & 255]] ^
                    ee[H[(a >> 8) & 255]] ^
                    te[H[255 & a]]);
        }
        return (
          (e.prototype.encrypt = function (e) {
            for (
              var t,
                a,
                n,
                s = ae(e),
                i = new Uint32Array(4),
                r = s[0] ^ this.encKey[0],
                p = s[1] ^ this.encKey[1],
                o = s[2] ^ this.encKey[2],
                m = s[3] ^ this.encKey[3],
                d = this.encKey.length / 4 - 2,
                y = 4,
                c = 0;
              c < d;
              c++
            )
              (t =
                J[r >>> 24] ^
                Z[(p >> 16) & 255] ^
                Q[(o >> 8) & 255] ^
                X[255 & m] ^
                this.encKey[y]),
                (a =
                  J[p >>> 24] ^
                  Z[(o >> 16) & 255] ^
                  Q[(m >> 8) & 255] ^
                  X[255 & r] ^
                  this.encKey[y + 1]),
                (n =
                  J[o >>> 24] ^
                  Z[(m >> 16) & 255] ^
                  Q[(r >> 8) & 255] ^
                  X[255 & p] ^
                  this.encKey[y + 2]),
                (m =
                  J[m >>> 24] ^
                  Z[(r >> 16) & 255] ^
                  Q[(p >> 8) & 255] ^
                  X[255 & o] ^
                  this.encKey[y + 3]),
                (r = t),
                (p = a),
                (o = n),
                (y += 4);
            for (c = 0; c < 4; c++)
              (i[c] =
                (H[r >>> 24] << 24) ^
                (H[(p >> 16) & 255] << 16) ^
                (H[(o >> 8) & 255] << 8) ^
                H[255 & m] ^
                this.encKey[y++]),
                (t = r),
                (r = p),
                (p = o),
                (o = m),
                (m = t);
            return i;
          }),
          (e.prototype.decrypt = function (e) {
            for (
              var t,
                a,
                n,
                s = ae(e),
                i = new Uint32Array(4),
                r = s[0] ^ this.decKey[0],
                p = s[3] ^ this.decKey[1],
                o = s[2] ^ this.decKey[2],
                m = s[1] ^ this.decKey[3],
                d = this.decKey.length / 4 - 2,
                y = 4,
                c = 0;
              c < d;
              c++
            )
              (t =
                $[r >>> 24] ^
                Y[(p >> 16) & 255] ^
                ee[(o >> 8) & 255] ^
                te[255 & m] ^
                this.decKey[y]),
                (a =
                  $[p >>> 24] ^
                  Y[(o >> 16) & 255] ^
                  ee[(m >> 8) & 255] ^
                  te[255 & r] ^
                  this.decKey[y + 1]),
                (n =
                  $[o >>> 24] ^
                  Y[(m >> 16) & 255] ^
                  ee[(r >> 8) & 255] ^
                  te[255 & p] ^
                  this.decKey[y + 2]),
                (m =
                  $[m >>> 24] ^
                  Y[(r >> 16) & 255] ^
                  ee[(p >> 8) & 255] ^
                  te[255 & o] ^
                  this.decKey[y + 3]),
                (r = t),
                (p = a),
                (o = n),
                (y += 4);
            for (c = 0; c < 4; c++)
              (i[3 & -c] =
                (W[r >>> 24] << 24) ^
                (W[(p >> 16) & 255] << 16) ^
                (W[(o >> 8) & 255] << 8) ^
                W[255 & m] ^
                this.decKey[y++]),
                (t = r),
                (r = p),
                (p = o),
                (o = m),
                (m = t);
            return i;
          }),
          e
        );
      })(),
      ie = (function () {
        function e(e, t, a) {
          void 0 === a && (a = 16),
            (this.key = ae(e)),
            (this.iv = ae(t)),
            (this.cipher = new se(e)),
            (this.blockSize = a / 4);
        }
        return (
          (e.prototype.encrypt = function (e, t) {
            for (
              var a = ae(e),
                n = t || new Uint32Array(a.length),
                s = this.iv.subarray(this.blockSize, this.iv.length),
                i = this.iv.subarray(0, this.blockSize),
                r = new Uint32Array(this.blockSize),
                p = 0;
              p < a.length;
              p += this.blockSize
            ) {
              var o = a.subarray(p, p + this.blockSize);
              ne(o, i, r);
              var m = this.cipher.encrypt(r);
              ne(m, s), (s = o), (i = m);
              for (var d = p, y = 0; d < a.length && y < 4; d++, y++)
                n[d] = m[y];
            }
            return n;
          }),
          (e.prototype.decrypt = function (e, t) {
            for (
              var a = ae(e),
                n = t || new Uint32Array(a.length),
                s = this.iv.subarray(this.blockSize, this.iv.length),
                i = this.iv.subarray(0, this.blockSize),
                r = new Uint32Array(this.blockSize),
                p = 0;
              p < n.length;
              p += this.blockSize
            ) {
              var o = a.subarray(p, p + this.blockSize);
              ne(o, s, r);
              var m = this.cipher.decrypt(r);
              ne(m, i), (i = o), (s = m);
              for (var d = p, y = 0; d < n.length && y < 4; d++, y++)
                n[d] = m[y];
            }
            return n;
          }),
          e
        );
      })(),
      re =
        ((function () {
          function e(e, t, a) {
            if (
              (void 0 === a && (a = 16),
              (this.offset = 0),
              (this.key = ae(e)),
              (this.counter = ae(t)),
              (this.cipher = new se(e)),
              (this.blockSize = a / 4),
              4 !== this.counter.length)
            )
              throw new Error("AES-CTR mode counter must be 16 bytes length");
          }
          (e.prototype.encrypt = function (e, t) {
            for (
              var a = ae(e),
                n = t || new Uint32Array(a.length),
                s = this.offset,
                i = 0;
              i < a.length;
              i += this.blockSize
            ) {
              for (
                var r = this.cipher.encrypt(this.counter), p = i, o = s;
                p < a.length && o < this.blockSize;
                p++, o++
              )
                n[p] = r[o] ^ a[p];
              a.length - i >= this.blockSize && this.incrementCounter(),
                s && ((i -= s), (s = 0));
            }
            return (this.offset = (this.offset + (a.length % 4)) % 4), n;
          }),
            (e.prototype.decrypt = function (e, t) {
              return this.encrypt(e, t);
            }),
            (e.prototype.incrementCounter = function () {
              for (
                var e = this.counter.length - 1;
                e >= 0 && !(++this.counter[e] < 4294967295);
                e--
              );
            });
        })(),
        se);
    function pe(e) {
      const t = new Uint8Array(e.byteLength);
      for (let a = 0, n = 4 * e.length; a < n; ++a)
        t[a] = (e[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
      return t;
    }
    function oe(e) {
      const t = K(e),
        a = [];
      for (let e = 0, n = t.length; e < n; ++e)
        a[e >>> 2] |= t[e] << (24 - (e % 4) * 8);
      return new Uint32Array(a);
    }
    function me(e, t, a, n = !0) {
      return pe(new ie(oe(t), oe(a))[n ? "encrypt" : "decrypt"](oe(e)));
    }
    function de(e, t, a) {
      return me(q(e), t, a, !0);
    }
    function ye(e, t, a) {
      return me(e, t, a, !1);
    }
    var ce =
        "undefined" != typeof window && "crypto" in window
          ? window.crypto.subtle
          : self.crypto.subtle,
      le = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    function ge(e, t, a) {
      return le(this, void 0, void 0, function* () {
        const n = yield ce.importKey("raw", e, { name: "PBKDF2" }, !1, [
          "deriveBits",
        ]);
        return ce
          .deriveBits(
            {
              name: "PBKDF2",
              salt: t,
              iterations: a,
              hash: { name: "SHA-512" },
            },
            n,
            512
          )
          .then((e) => new Uint8Array(e));
      });
    }
    function ue(e) {
      const t = e.length,
        a = new Uint8Array(Math.ceil(t / 2));
      let n = 0;
      t % 2 && (a[n++] = parseInt(e.charAt(0), 16));
      for (let s = n; s < t; s += 2) a[n++] = parseInt(e.substr(s, 2), 16);
      return a;
    }
    function he(e, t) {
      return N(e, ue(t.exponent), ue(t.modulus));
    }
    function fe(e) {
      return ce.digest("SHA-1", K(e)).then((e) => new Uint8Array(e));
    }
    function _e(e) {
      return ce.digest("SHA-256", K(e)).then((e) => new Uint8Array(e));
    }
    const ve = {
      8: new Uint8Array(1),
      16: new Uint16Array(1),
      32: new Uint32Array(1),
    };
    function be(e) {
      const t = ve[e];
      return crypto.getRandomValues(t), t[0];
    }
    function we() {
      return "" + be(32) + (be(32) % 16777215);
    }
    function Pe(e, t) {
      return M.a.randBetween(e, t, () => be(32) / 4294967295);
    }
    function Se(e) {
      const t = M.a[2];
      if (e.remainder(t).isZero()) return t;
      const a = M()(1e3);
      let n, s, i, r, p, o, m;
      do {
        n = Pe(M.a.one, e.minus(1));
      } while (n.isZero() || n.eq(e.minus(t)));
      (i = Pe(M.a.one, e.minus(1))), (p = M.a.one), (o = M.a.one);
      const d = M()("FFFFFFFFFFFFFFFF", 16).minus(e).plus(1),
        y = (a) => (
          (a = (a = a.pow(t).mod(e)).add(n)).lesser(n) && (a = a.add(d)),
          (a = a.mod(e))
        );
      do {
        s = i;
        for (let e = 0; M()(e).lesser(p); ++e) i = y(i);
        let t = M.a.zero;
        do {
          r = i;
          const n = M.a.min(a, p.minus(t));
          for (let t = 0; M()(t).lesser(n); ++t)
            (i = y(i)),
              (o = o.multiply(s.greater(i) ? s.minus(i) : i.minus(s)).mod(e));
          (m = M.a.gcd(o, e)), (t = t.add(a));
        } while (t.lesser(p) && m.eq(M.a.one));
        p = p.shiftLeft(M.a.one);
      } while (m.eq(M.a.one));
      if (m.eq(e))
        do {
          (r = y(r)), (m = M.a.gcd(s.minus(r).abs(), e));
        } while (m.eq(M.a.one));
      return m;
    }
    function ke(e) {
      let t = (function (e) {
        const t = F(e),
          a = [],
          n = [];
        let s = Se(t);
        a.push(t.divide(s)), a.push(s);
        do {
          const e = a.pop();
          if (!e.eq(M.a.one))
            if (e.isPrime(!0)) {
              n.push(e);
              for (let t = 0; t < a.length; ++t) {
                let n = a[t];
                if (n.mod(e).isZero()) {
                  do {
                    n = n.divide(e);
                  } while (n.mod(e).isZero());
                  a[t] = n;
                }
              }
            } else (s = Se(e)), a.push(e.divide(s)), a.push(s);
        } while (a.length);
        return n;
      })(e);
      t.sort((e, t) => e.compare(t)),
        t.length > 2 &&
          (t = [
            t.splice(t.length - 2, 1)[0],
            t.reduce((e, t) => e.multiply(t), M.a.one),
          ]);
      const a = t[0],
        n = t[t.length - 1];
      return (a.lesser(n) ? [a, n] : [n, a]).map((e) => L(e));
    }
    var Ie = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    function Ce(e) {
      return Ie(this, void 0, void 0, function* () {
        const { p: t, g: a } = e,
          n = ((e) => {
            for (;;) {
              const t = O(new Uint8Array(e.length)),
                a = F(t);
              if (!a.greater(M.a.one)) continue;
              const n = F(e);
              if (a.lesser(n.subtract(M.a.one))) return t;
            }
          })(t),
          s = ue(a.toString(16)),
          i = q(yield De.invokeCrypto("mod-pow", s, n, t), 256, !0, !0, !0);
        return {
          a: n,
          g_a: i,
          g_a_hash: yield De.invokeCrypto("sha256", i),
          p: t,
        };
      });
    }
    var Ae = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    function Me(e, t, a) {
      return Ae(this, void 0, void 0, function* () {
        const n = yield De.invokeCrypto("mod-pow", e, t, a);
        return {
          key: n,
          key_fingerprint: F(
            (yield De.invokeCrypto("sha1", n)).slice(-8).reverse()
          ).toString(10),
        };
      });
    }
    var Re = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    function Ee(e) {
      const t = e.length,
        a = 8 * t;
      let n = M()(e[0])
        .and(127)
        .shiftLeft(a - 8);
      for (let s = 1; s < t; ++s) {
        const t = a - 8 * (s + 1),
          i = M()(e[s]);
        n = n.or(t ? i.shiftLeft(t) : i);
      }
      return n;
    }
    const Te = [
      "1f609",
      "1f60d",
      "1f61b",
      "1f62d",
      "1f631",
      "1f621",
      "1f60e",
      "1f634",
      "1f635",
      "1f608",
      "1f62c",
      "1f607",
      "1f60f",
      "1f46e",
      "1f477",
      "1f482",
      "1f476",
      "1f468",
      "1f469",
      "1f474",
      "1f475",
      "1f63b",
      "1f63d",
      "1f640",
      "1f47a",
      "1f648",
      "1f649",
      "1f64a",
      "1f480",
      "1f47d",
      "1f4a9",
      "1f525",
      "1f4a5",
      "1f4a4",
      "1f442",
      "1f440",
      "1f443",
      "1f445",
      "1f444",
      "1f44d",
      "1f44e",
      "1f44c",
      "1f44a",
      "270c",
      "270b",
      "1f450",
      "1f446",
      "1f447",
      "1f449",
      "1f448",
      "1f64f",
      "1f44f",
      "1f4aa",
      "1f6b6",
      "1f3c3",
      "1f483",
      "1f46b",
      "1f46a",
      "1f46c",
      "1f46d",
      "1f485",
      "1f3a9",
      "1f451",
      "1f452",
      "1f45f",
      "1f45e",
      "1f460",
      "1f455",
      "1f457",
      "1f456",
      "1f459",
      "1f45c",
      "1f453",
      "1f380",
      "1f484",
      "1f49b",
      "1f499",
      "1f49c",
      "1f49a",
      "1f48d",
      "1f48e",
      "1f436",
      "1f43a",
      "1f431",
      "1f42d",
      "1f439",
      "1f430",
      "1f438",
      "1f42f",
      "1f428",
      "1f43b",
      "1f437",
      "1f42e",
      "1f417",
      "1f434",
      "1f411",
      "1f418",
      "1f43c",
      "1f427",
      "1f425",
      "1f414",
      "1f40d",
      "1f422",
      "1f41b",
      "1f41d",
      "1f41c",
      "1f41e",
      "1f40c",
      "1f419",
      "1f41a",
      "1f41f",
      "1f42c",
      "1f40b",
      "1f410",
      "1f40a",
      "1f42b",
      "1f340",
      "1f339",
      "1f33b",
      "1f341",
      "1f33e",
      "1f344",
      "1f335",
      "1f334",
      "1f333",
      "1f31e",
      "1f31a",
      "1f319",
      "1f30e",
      "1f30b",
      "26a1",
      "2614",
      "2744",
      "26c4",
      "1f300",
      "1f308",
      "1f30a",
      "1f393",
      "1f386",
      "1f383",
      "1f47b",
      "1f385",
      "1f384",
      "1f381",
      "1f388",
      "1f52e",
      "1f3a5",
      "1f4f7",
      "1f4bf",
      "1f4bb",
      "260e",
      "1f4e1",
      "1f4fa",
      "1f4fb",
      "1f509",
      "1f514",
      "23f3",
      "23f0",
      "231a",
      "1f512",
      "1f511",
      "1f50e",
      "1f4a1",
      "1f526",
      "1f50c",
      "1f50b",
      "1f6bf",
      "1f6bd",
      "1f527",
      "1f528",
      "1f6aa",
      "1f6ac",
      "1f4a3",
      "1f52b",
      "1f52a",
      "1f48a",
      "1f489",
      "1f4b0",
      "1f4b5",
      "1f4b3",
      "2709",
      "1f4eb",
      "1f4e6",
      "1f4c5",
      "1f4c1",
      "2702",
      "1f4cc",
      "1f4ce",
      "2712",
      "270f",
      "1f4d0",
      "1f4da",
      "1f52c",
      "1f52d",
      "1f3a8",
      "1f3ac",
      "1f3a4",
      "1f3a7",
      "1f3b5",
      "1f3b9",
      "1f3bb",
      "1f3ba",
      "1f3b8",
      "1f47e",
      "1f3ae",
      "1f0cf",
      "1f3b2",
      "1f3af",
      "1f3c8",
      "1f3c0",
      "26bd",
      "26be",
      "1f3be",
      "1f3b1",
      "1f3c9",
      "1f3b3",
      "1f3c1",
      "1f3c7",
      "1f3c6",
      "1f3ca",
      "1f3c4",
      "2615",
      "1f37c",
      "1f37a",
      "1f377",
      "1f374",
      "1f355",
      "1f354",
      "1f35f",
      "1f357",
      "1f371",
      "1f35a",
      "1f35c",
      "1f361",
      "1f373",
      "1f35e",
      "1f369",
      "1f366",
      "1f382",
      "1f370",
      "1f36a",
      "1f36b",
      "1f36d",
      "1f36f",
      "1f34e",
      "1f34f",
      "1f34a",
      "1f34b",
      "1f352",
      "1f347",
      "1f349",
      "1f353",
      "1f351",
      "1f34c",
      "1f350",
      "1f34d",
      "1f346",
      "1f345",
      "1f33d",
      "1f3e1",
      "1f3e5",
      "1f3e6",
      "26ea",
      "1f3f0",
      "26fa",
      "1f3ed",
      "1f5fb",
      "1f5fd",
      "1f3a0",
      "1f3a1",
      "26f2",
      "1f3a2",
      "1f6a2",
      "1f6a4",
      "2693",
      "1f680",
      "2708",
      "1f681",
      "1f682",
      "1f68b",
      "1f68e",
      "1f68c",
      "1f699",
      "1f697",
      "1f695",
      "1f69b",
      "1f6a8",
      "1f694",
      "1f692",
      "1f691",
      "1f6b2",
      "1f6a0",
      "1f69c",
      "1f6a6",
      "26a0",
      "1f6a7",
      "26fd",
      "1f3b0",
      "1f5ff",
      "1f3aa",
      "1f3ad",
      "1f1ef-1f1f5",
      "1f1f0-1f1f7",
      "1f1e9-1f1ea",
      "1f1e8-1f1f3",
      "1f1fa-1f1f8",
      "1f1eb-1f1f7",
      "1f1ea-1f1f8",
      "1f1ee-1f1f9",
      "1f1f7-1f1fa",
      "1f1ec-1f1e7",
      "0031-20e3",
      "0032-20e3",
      "0033-20e3",
      "0034-20e3",
      "0035-20e3",
      "0036-20e3",
      "0037-20e3",
      "0038-20e3",
      "0039-20e3",
      "0030-20e3",
      "1f51f",
      "2757",
      "2753",
      "2665",
      "2666",
      "1f4af",
      "1f517",
      "1f531",
      "1f534",
      "1f535",
      "1f536",
      "1f537",
    ];
    function Ve(e, t) {
      return Re(this, void 0, void 0, function* () {
        const a = e.concat(t),
          n = yield De.invokeCrypto("sha256", a),
          s = [],
          i = Te.length;
        for (let e = 0; e != n.length; e += 8) {
          const t = Ee(n.slice(e, e + 8))
              .mod(i)
              .toJSNumber(),
            a = Te[t];
          s.push(a);
        }
        return s;
      });
    }
    var De = new (class extends class {
      invokeCrypto(e, ...t) {
        return this.performTaskWorker(e, ...t);
      }
    } {
      constructor() {
        super(),
          (this.webWorker = !1),
          (this.taskId = 0),
          (this.awaiting = {}),
          (this.pending = []),
          (this.debug = !1),
          console.log("CW constructor"),
          (this.utils = {
            sha1: fe,
            sha256: _e,
            pbkdf2: ge,
            "aes-encrypt": de,
            "aes-decrypt": ye,
            "rsa-encrypt": he,
            factorize: ke,
            "mod-pow": N,
            gzipUncompress: C,
            computeSRP: z,
            "generate-dh": Ce,
            "compute-dh-key": Me,
            "get-emojis-fingerprint": Ve,
          });
      }
      performTaskWorker(e, ...t) {
        return (
          this.debug && console.log("CW start", e, t),
          Promise.resolve(this.utils[e](...t))
        );
      }
    })();
    const Ue = new (class {
      constructor() {
        (this.lastMessageId = [0, 0]),
          (this.timeOffset = 0),
          b.get("server_time_offset").then((e) => {
            e && (this.timeOffset = e);
          });
      }
      generateId() {
        const e = Date.now();
        let t = [
          Math.floor(e / 1e3) + this.timeOffset,
          (e % 1e3 << 21) | (be(16) << 3) | 4,
        ];
        (this.lastMessageId[0] > t[0] ||
          (this.lastMessageId[0] === t[0] && this.lastMessageId[1] >= t[1])) &&
          (t = [this.lastMessageId[0], this.lastMessageId[1] + 4]),
          (this.lastMessageId = t);
        return E(t[0], t[1]);
      }
      applyServerTime(e, t) {
        const a = e - (t = ((t || Date.now()) / 1e3) | 0),
          n = Math.abs(this.timeOffset - a) > 10;
        b.set({ server_time_offset: a }),
          (this.lastMessageId = [0, 0]),
          (this.timeOffset = a);
        return u({ type: "applyServerTimeOffset", payload: a }), n;
      }
    })();
    p.timeManager = Ue;
    var Be = Ue;
    var xe = "undefined" != typeof window ? window : self;
    const Fe = navigator ? navigator.userAgent : null,
      Le =
        (navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),
        navigator.userAgent.toLowerCase().indexOf("android"),
        /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor),
        (/iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1)) &&
          xe.MSStream,
        !!("safari" in xe) ||
          !(
            !Fe ||
            !(
              /\b(iPad|iPhone|iPod)\b/.test(Fe) ||
              (Fe.match("Safari") && !Fe.match("Chrome"))
            )
          )),
      Ne = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    navigator.maxTouchPoints > 0 &&
      navigator.userAgent.search(
        /iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i
      );
    var Oe;
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Warn = 2)] = "Warn"),
        (e[(e.Log = 4)] = "Log"),
        (e[(e.Debug = 8)] = "Debug");
    })(Oe || (Oe = {}));
    const qe = [Oe.None, Oe.Error, Oe.Warn, Oe.Log, Oe.Debug],
      Ge = Date.now();
    function Ke() {
      return "[" + ((Date.now() - Ge) / 1e3).toFixed(3) + "]";
    }
    let je;
    const ze = Le || Ne;
    je = ze
      ? (e) => e.split("@")[0]
      : (e) => {
          const t = e.trim().split(" ");
          if (3 === t.length) return t[1].slice(t[1].lastIndexOf(".") + 1);
        };
    const He = !ze,
      We = ze ? 2 : 3;
    function Je() {
      const e = new Error().stack.split("\n"),
        t = e[We] || e[e.length - 1];
      return "[" + (je(t) || "<anonymous>") + "]";
    }
    const Ze = {
        black: "[30m",
        red: "[31m",
        green: "[32m",
        yellow: "[33m",
        blue: "[34m",
        magenta: "[35m",
        cyan: "[36m",
        white: "[37m",
      },
      Qe = [
        ["debug", Oe.Debug],
        ["info", Oe.Log],
        ["warn", Oe.Warn],
        ["error", Oe.Error],
        ["assert", Oe.Error],
        ["trace", Oe.Log],
      ];
    function Xe(e, t = Oe.Log | Oe.Warn | Oe.Error, a = !1, n = "") {
      let s;
      o || a || (t = Oe.Error),
        He ? n || (m ? (n = Ze.yellow) : d && (n = Ze.cyan)) : (n = "");
      let i = n;
      n = n ? `%s ${n}%s` : "%s";
      const r = function (...a) {
        return t & Oe.Log && console.log(n, Ke(), e, Je(), ...a);
      };
      return (
        Qe.forEach(([a, s]) => {
          r[a] = function (...i) {
            return t & s && console[a](n, Ke(), e, Je(), ...i);
          };
        }),
        (r.setPrefix = function (t) {
          (s = t), (e = "[" + t + "]");
        }),
        r.setPrefix(e),
        (r.setLevel = function (e) {
          t = qe.slice(0, e + 1).reduce((e, t) => e | t, 0);
        }),
        (r.bindPrefix = function (e) {
          return Xe(`${s}] [${e}`, t, a, i);
        }),
        r
      );
    }
    const $e = {
      id: 1025907,
      hash: "452b0359b988148995f22ff0f4229750",
      version: "1.4.0",
      versionFull: "1.4.0 (141)",
      build: 141,
      langPackVersion: "0.4.0",
      langPack: "macos",
      langPackCode: "en",
      domains: ["web.telegram.org"],
      baseDcId: 2,
      isMainDomain: "web.telegram.org" === location.hostname,
      suffix: "K",
    };
    $e.isMainDomain &&
      (($e.id = 2496), ($e.hash = "8da85b0d5bfe62527e5b244c209159c3"));
    var Ye = $e;
    function et() {}
    const tt = (e) =>
      new Promise((t) => {
        setTimeout(t, e);
      });
    function at() {
      let e = {
          isFulfilled: !1,
          isRejected: !1,
          notify: () => {},
          notifyAll: (...t) => {
            (e.lastNotify = t), e.listeners.forEach((e) => e(...t));
          },
          listeners: [],
          addNotifyListener: (t) => {
            e.lastNotify && t(...e.lastNotify), e.listeners.push(t);
          },
        },
        t = new Promise((a, n) => {
          (e.resolve = (e) => {
            t.isFulfilled || t.isRejected || ((t.isFulfilled = !0), a(e));
          }),
            (e.reject = (...e) => {
              t.isRejected || t.isFulfilled || ((t.isRejected = !0), n(...e));
            });
        });
      return (
        t.catch(et).finally(() => {
          (t.notify = t.notifyAll = t.lastNotify = null),
            (t.listeners.length = 0),
            t.cancel && (t.cancel = () => {});
        }),
        Object.assign(t, e),
        t
      );
    }
    function nt(e, t) {
      const a = e.findIndex(t);
      return -1 !== a ? e.splice(a, 1)[0] : void 0;
    }
    class st {
      constructor(e) {
        this._constructor(e);
      }
      _constructor(e = !1) {
        (this.reuseResults = e),
          (this.listeners = {}),
          (this.listenerResults = {});
      }
      addEventListener(e, t, a) {
        var n, s;
        (null !== (n = this.listeners[e]) && void 0 !== n
          ? n
          : (this.listeners[e] = [])
        ).push({ callback: t, options: a }),
          this.listenerResults.hasOwnProperty(e) &&
            (t(...this.listenerResults[e]),
            null === (s = a) || void 0 === s ? void 0 : s.once) &&
            this.listeners[e].pop();
      }
      addMultipleEventsListeners(e) {
        for (const t in e) this.addEventListener(t, e[t]);
      }
      removeEventListener(e, t, a) {
        this.listeners[e] && nt(this.listeners[e], (e) => e.callback === t);
      }
      _dispatchEvent(e, t, ...a) {
        this.reuseResults && (this.listenerResults[e] = a);
        const n = t && [],
          s = this.listeners[e];
        if (s) {
          s.slice().forEach((t) => {
            var i;
            if (-1 === s.findIndex((e) => e.callback === t.callback)) return;
            let r;
            try {
              r = t.callback(...a);
            } catch (e) {
              console.error(e);
            }
            n && n.push(r),
              (null === (i = t.options) || void 0 === i ? void 0 : i.once) &&
                this.removeEventListener(e, t.callback);
          });
        }
        return n;
      }
      dispatchResultableEvent(e, ...t) {
        return this._dispatchEvent(e, !0, ...t);
      }
      dispatchEvent(e, ...t) {
        this._dispatchEvent(e, !1, ...t);
      }
      cleanup() {
        (this.listeners = {}), (this.listenerResults = {});
      }
    }
    function it(e, t) {
      const a = e.indexOf(t),
        n = -1 !== a && e.splice(a, 1);
      return n && n[0];
    }
    class rt extends st {
      constructor(e, t, a) {
        super(),
          (this.dcId = e),
          (this.url = t),
          (this.debug = i.debug && !1),
          (this.handleOpen = () => {
            this.log("opened"),
              this.debug && this.log.debug("sending init packet"),
              this.dispatchEvent("open");
          }),
          (this.handleError = (e) => {
            this.log.error("handleError", e), this.close();
          }),
          (this.handleClose = () => {
            this.log("closed"),
              this.removeListeners(),
              this.dispatchEvent("close");
          }),
          (this.handleMessage = (e) => {
            this.debug &&
              this.log.debug("<-", "handleMessage", e.data.byteLength),
              this.dispatchEvent("message", e.data);
          }),
          (this.send = (e) => {
            this.debug && this.log.debug("-> body length to send:", e.length),
              this.ws.send(e);
          });
        let n = Oe.Error | Oe.Log;
        return (
          this.debug && (n |= Oe.Debug),
          (this.log = Xe("WS-" + e + a, n)),
          this.log("constructor"),
          this.connect(),
          this
        );
      }
      removeListeners() {
        this.ws &&
          (this.ws.removeEventListener("open", this.handleOpen),
          this.ws.removeEventListener("close", this.handleClose),
          this.ws.removeEventListener("error", this.handleError),
          this.ws.removeEventListener("message", this.handleMessage),
          (this.ws = void 0));
      }
      connect() {
        (this.ws = new WebSocket(this.url, "binary")),
          (this.ws.binaryType = "arraybuffer"),
          this.ws.addEventListener("open", this.handleOpen),
          this.ws.addEventListener("close", this.handleClose),
          this.ws.addEventListener("error", this.handleError),
          this.ws.addEventListener("message", this.handleMessage);
      }
      close() {
        if (this.ws) {
          this.log("close execution");
          try {
            this.ws.close();
          } catch (e) {}
          this.handleClose();
        }
      }
    }
    var pt,
      ot,
      mt,
      dt,
      yt = function (e, t, a, n, s) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !s : !t.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? s.call(e, a) : s ? (s.value = a) : t.set(e, a), a;
      },
      ct = function (e, t, a, n) {
        if ("a" === a && !n)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === a ? n : "a" === a ? n.call(e) : n ? n.value : t.get(e);
      };
    class lt {
      constructor(e) {
        this.counter = e;
      }
      increment() {
        const e = this.counter;
        for (let t = 15; t >= 0; --t) {
          if (255 !== e[t]) {
            ++e[t];
            break;
          }
          e[t] = 0;
        }
      }
    }
    class gt {
      constructor(e, t) {
        pt.set(this, void 0),
          ot.set(this, void 0),
          mt.set(this, void 0),
          dt.set(this, void 0),
          yt(this, pt, new lt(t), "f"),
          yt(this, dt, new re(e), "f"),
          yt(this, mt, 16, "f");
      }
      update(e) {
        var t, a;
        const n = e.slice();
        for (let e = 0; e < n.length; ++e)
          16 === ct(this, mt, "f") &&
            (yt(
              this,
              ot,
              new Uint8Array(
                pe(ct(this, dt, "f").encrypt(ct(this, pt, "f").counter))
              ),
              "f"
            ),
            yt(this, mt, 0, "f"),
            ct(this, pt, "f").increment()),
            (n[e] ^= ct(this, ot, "f")[
              (yt(this, mt, ((a = ct(this, mt, "f")), (t = a++), a), "f"), t)
            ]);
        return n;
      }
    }
    (pt = new WeakMap()),
      (ot = new WeakMap()),
      (mt = new WeakMap()),
      (dt = new WeakMap());
    class ut {
      init(e) {
        const t = new Uint8Array(64);
        for (O(t); ; ) {
          const e = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
            a = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4];
          if (
            239 !== t[0] &&
            1145128264 !== e &&
            1414745936 !== e &&
            542393671 !== e &&
            1230262351 !== e &&
            4008636142 !== e &&
            3722304989 !== e &&
            0 !== a
          )
            break;
          O(t);
        }
        const a = t.slice().reverse(),
          n = t.slice(8, 40),
          s = t.slice(40, 56),
          i = a.slice(8, 40),
          r = a.slice(40, 56);
        (this.encNew = new gt(n, s)),
          (this.decNew = new gt(i, r)),
          t.set(e.obfuscateTag, 56);
        const p = this.encode(t);
        return t.set(p.slice(56, 64), 56), t;
      }
      encode(e) {
        return this.encNew.update(e);
      }
      decode(e) {
        return this.decNew.update(e);
      }
    }
    var ht,
      ft = new (class {
        constructor() {
          (this.tag = 238),
            (this.obfuscateTag = new Uint8Array([
              this.tag,
              this.tag,
              this.tag,
              this.tag,
            ]));
        }
        encodePacket(e) {
          e.length % 4 != 0 && console.error("Encode error!", e.length, e);
          const t = e.length;
          return new Uint8Array(new Int32Array([t]).buffer).concat(e);
        }
        readPacket(e) {
          const t = e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24);
          return e.slice(4, 4 + t);
        }
      })();
    !(function (e) {
      (e[(e.Connected = 0)] = "Connected"),
        (e[(e.Connecting = 1)] = "Connecting"),
        (e[(e.Closed = 2)] = "Closed"),
        (e[(e.TimedOut = 3)] = "TimedOut");
    })(ht || (ht = {}));
    class _t {
      constructor(e, t, a, n, s) {
        (this.Connection = e),
          (this.dcId = t),
          (this.url = a),
          (this.logSuffix = n),
          (this.retryTimeout = s),
          (this.codec = ft),
          (this.obfuscation = new ut()),
          (this.pending = []),
          (this.debug = i.debug && !1),
          (this.connected = !1),
          (this.autoReconnect = !0),
          (this.onOpen = () => {
            (this.connected = !0), Ct.setTransportOpened("websocket");
            const e = this.obfuscation.init(this.codec);
            if ((this.connection.send(e), this.networker))
              (this.pending.length = 0),
                this.networker.setConnectionStatus(ht.Connected),
                this.networker.cleanupSent(),
                this.networker.resend();
            else
              for (const e of this.pending)
                e.encoded && e.body && (e.encoded = this.encodeBody(e.body));
            setTimeout(() => {
              this.releasePending();
            }, 0);
          }),
          (this.onMessage = (e) => {
            let t = this.obfuscation.decode(new Uint8Array(e));
            if (((t = this.codec.readPacket(t)), this.networker))
              return (
                this.debug &&
                  this.log.debug("redirecting to networker", t.length),
                void this.networker
                  .parseResponse(t)
                  .then((e) => {
                    this.debug &&
                      this.log.debug("redirecting to networker response:", e);
                    try {
                      this.networker.processMessage(
                        e.response,
                        e.messageId,
                        e.sessionId
                      );
                    } catch (e) {
                      this.log.error(
                        "handleMessage networker processMessage error",
                        e
                      );
                    }
                  })
                  .catch((e) => {
                    this.log.error(
                      "handleMessage networker parseResponse error",
                      e
                    );
                  })
              );
            const a = this.pending.shift();
            a
              ? a.resolve(t)
              : this.debug && this.log.debug("no pending for res:", P(t));
          }),
          (this.onClose = () => {
            let e, t;
            if ((this.clear(), this.autoReconnect)) {
              const a = Date.now(),
                n = a - this.lastCloseTime;
              (e =
                !isNaN(n) && n < this.retryTimeout ? this.retryTimeout - n : 0),
                (t = a + e);
            }
            this.networker &&
              (this.networker.setConnectionStatus(ht.Closed, t),
              (this.pending.length = 0)),
              this.autoReconnect
                ? (this.log("will try to reconnect after timeout:", e / 1e3),
                  (this.reconnectTimeout = self.setTimeout(this.reconnect, e)))
                : this.log("reconnect isn't needed");
          }),
          (this.reconnect = () => {
            if (
              (void 0 !== this.reconnectTimeout &&
                (clearTimeout(this.reconnectTimeout),
                (this.reconnectTimeout = void 0)),
              !this.connection)
            ) {
              if (
                (this.log("trying to reconnect..."),
                (this.lastCloseTime = Date.now()),
                this.networker)
              )
                this.networker.setConnectionStatus(ht.Connecting);
              else
                for (const e of this.pending) e.bodySent && (e.bodySent = !1);
              this.connect();
            }
          });
        let r = Oe.Error | Oe.Log;
        this.debug && (r |= Oe.Debug),
          (this.log = Xe("TCP-" + t + n, r)),
          this.log("constructor"),
          this.connect();
      }
      clear() {
        this.connected && Ct.setTransportClosed("websocket"),
          (this.connected = !1),
          this.connection &&
            (this.connection.removeEventListener("open", this.onOpen),
            this.connection.removeEventListener("close", this.onClose),
            this.connection.removeEventListener("message", this.onMessage),
            (this.connection = void 0));
      }
      forceReconnect() {
        this.close(), this.reconnect();
      }
      destroy() {
        this.setAutoReconnect(!1),
          this.close(),
          this.pending.forEach((e) => {
            e.reject && e.reject();
          }),
          (this.pending.length = 0);
      }
      close() {
        const e = this.connection;
        if (e) {
          const t = this.connected;
          this.clear(),
            t &&
              (e.addEventListener("message", this.onMessage),
              e.addEventListener(
                "close",
                () => {
                  e.removeEventListener("message", this.onMessage);
                },
                { once: !0 }
              ),
              e.close());
        }
      }
      setAutoReconnect(e) {
        (this.autoReconnect = e),
          e
            ? this.connection ||
              void 0 !== this.reconnectTimeout ||
              this.reconnect()
            : void 0 !== this.reconnectTimeout &&
              (clearTimeout(this.reconnectTimeout),
              (this.reconnectTimeout = void 0));
      }
      connect() {
        this.connection && this.close(),
          (this.connection = new this.Connection(
            this.dcId,
            this.url,
            this.logSuffix
          )),
          this.connection.addEventListener("open", this.onOpen),
          this.connection.addEventListener("close", this.onClose),
          this.connection.addEventListener("message", this.onMessage);
      }
      encodeBody(e) {
        const t = this.codec.encodePacket(e);
        return this.obfuscation.encode(t);
      }
      send(e) {
        this.debug && this.log.debug("-> body length to pending:", e.length);
        const t = this.connected ? this.encodeBody(e) : void 0;
        if (!this.networker) {
          const a = new Promise((a, n) => {
            this.pending.push({ resolve: a, reject: n, body: e, encoded: t });
          });
          return this.releasePending(), a;
        }
        this.pending.push({ body: e, encoded: t }), this.releasePending();
      }
      releasePending() {
        if (!this.connected) return;
        let e = this.pending.length;
        for (let t = 0; t < e; ++t) {
          const a = this.pending[t],
            { body: n, bodySent: s } = a;
          let i = a.encoded;
          n &&
            !s &&
            (this.debug && this.log.debug("-> body length to send:", n.length),
            i || (i = a.encoded = this.encodeBody(n)),
            this.connection.send(i),
            a.resolve ? (a.bodySent = !0) : (this.pending.splice(t--, 1), e--));
        }
      }
    }
    let vt = 0;
    class bt extends st {
      constructor(e, t, a) {
        super(),
          (this.dcId = e),
          (this.url = t),
          (this.id = ++vt),
          wt.set(this.id, this);
        const n = {
          type: "socketProxy",
          payload: {
            type: "setup",
            payload: { dcId: e, url: t, logSuffix: a },
            id: this.id,
          },
        };
        h(n);
      }
      send(e) {
        const t = {
          type: "socketProxy",
          payload: { type: "send", payload: e, id: this.id },
        };
        h(t);
      }
      close() {
        const e = {
          type: "socketProxy",
          payload: { type: "close", id: this.id },
        };
        h(e);
      }
    }
    const wt = new Map(),
      Pt = i.test ? "_test" : "";
    class St {
      constructor() {
        (this.sslSubdomains = ["pluto", "venus", "aurora", "vesta", "flora"]),
          (this.dcOptions = i.test
            ? [
                { id: 1, host: "149.154.175.10", port: 80 },
                { id: 2, host: "149.154.167.40", port: 80 },
                { id: 3, host: "149.154.175.117", port: 80 },
              ]
            : [
                { id: 1, host: "149.154.175.50", port: 80 },
                { id: 2, host: "149.154.167.50", port: 80 },
                { id: 3, host: "149.154.175.100", port: 80 },
                { id: 4, host: "149.154.167.91", port: 80 },
                { id: 5, host: "149.154.171.5", port: 80 },
              ]),
          (this.chosenServers = {}),
          (this.transportSocket = (e, t, a) => {
            const n = "apiws" + Pt,
              s = `wss://${Ye.suffix.toLowerCase()}ws${e}${a}.web.telegram.org/${n}`;
            return new _t(
              Le && d && void 0 !== bt ? bt : rt,
              e,
              s,
              "upload" === t ? "-U" : "download" === t ? "-D" : "",
              1e4
            );
          }),
          (this.transportHTTP = (e, t, a) => {
            let n;
            if (i.ssl || !i.http) {
              n =
                "https://" +
                (this.sslSubdomains[e - 1] + ("client" !== t ? "-1" : "")) +
                ".web.telegram.org/" +
                (i.test ? "apiw_test1" : "apiw1");
            } else
              for (let t of this.dcOptions)
                if (t.id === e) {
                  n =
                    "http://" +
                    t.host +
                    (80 !== t.port ? ":" + t.port : "") +
                    "/apiw1";
                  break;
                }
            return new Mt(
              e,
              n,
              "upload" === t ? "-U" : "download" === t ? "-D" : ""
            );
          });
      }
      chooseServer(e, t = "client", a = i.transport, n = !0) {
        this.chosenServers.hasOwnProperty(a) ||
          (this.chosenServers[a] = { client: {}, download: {}, upload: {} });
        const s = this.chosenServers[a][t];
        e in s || (s[e] = []);
        const r = s[e];
        if (!r.length || !n) {
          let s;
          const i = "client" === t ? "" : "-1";
          return (
            (s = (
              "websocket" === a ? this.transportSocket : this.transportHTTP
            )(e, t, i)),
            s
              ? (n && r.push(s), s)
              : (console.error("No chosenServer!", e), null)
          );
        }
        return r[0];
      }
      static removeTransport(e, t) {
        for (const a in e)
          for (const n in e[a])
            for (const s in e[a][n]) {
              it(e[a][n][s], t);
            }
      }
    }
    var kt = new St(),
      It = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    var Ct = new (class extends st {
        constructor() {
          super(!0),
            (this.opened = new Map()),
            this.addEventListener("change", (e) => {
              e.get("websocket") || this.waitForWebSocket();
            }),
            setTimeout(() => {
              this.waitForWebSocket();
            }, 200);
        }
        pingTransports() {
          return It(this, void 0, void 0, function* () {
            const e = (this.transports = {
                https: kt.chooseServer(Ye.baseDcId, "client", "https", !1),
                websocket: kt.chooseServer(
                  Ye.baseDcId,
                  "client",
                  "websocket",
                  !1
                ),
              }),
              t = at();
            this.transports.https._send(new Uint8Array(), "no-cors").then(
              () => t.resolve(!0),
              () => t.resolve(!1)
            ),
              setTimeout(() => t.resolve(!1), 2e3);
            const a = at(),
              n = e.websocket;
            n.setAutoReconnect(!1),
              n.connection.addEventListener("close", () => a.resolve(!1), {
                once: !0,
              }),
              n.connection.addEventListener("open", () => a.resolve(!0), {
                once: !0,
              }),
              setTimeout(() => a.resolve(!1), 2e3);
            const [s, i] = yield Promise.all([t, a]);
            for (const t in e) {
              e[t].destroy();
            }
            return {
              https: s || this.opened.get("https") > 0,
              websocket: i || this.opened.get("websocket") > 0,
            };
          });
        }
        waitForWebSocket() {
          return It(this, void 0, void 0, function* () {
            if (!this.pinging) {
              for (this.pinging = !0; ; ) {
                const { https: e, websocket: t } = yield this.pingTransports();
                if (
                  ((e || t) &&
                    this.dispatchEvent(
                      "transport",
                      t || !e ? "websocket" : "https"
                    ),
                  t)
                )
                  break;
                yield tt(1e4);
              }
              this.pinging = !1;
            }
          });
        }
        setTransportValue(e, t) {
          let a = this.opened.get(e) || 0;
          (a += t ? 1 : -1),
            this.opened.set(e, a),
            this.dispatchEvent("change", this.opened);
        }
        setTransportOpened(e) {
          return this.setTransportValue(e, !0);
        }
        setTransportClosed(e) {
          return this.setTransportValue(e, !1);
        }
      })(),
      At = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    class Mt {
      constructor(e, t, a) {
        (this.dcId = e),
          (this.url = t),
          (this.pending = []),
          (this.debug = i.debug && !1);
        let n = Oe.Error | Oe.Log;
        this.debug && (n |= Oe.Debug),
          (this.log = Xe("HTTP-" + e + a, n)),
          this.log("constructor"),
          (this.connected = !1);
      }
      _send(e, t) {
        return (
          this.debug && this.log.debug("-> body length to send:", e.length),
          fetch(this.url, { method: "POST", body: e, mode: t }).then(
            (e) => {
              if (200 !== e.status && !t)
                throw (
                  (e.arrayBuffer().then((e) => {
                    this.log.error(
                      "not 200",
                      new TextDecoder("utf-8").decode(new Uint8Array(e))
                    );
                  }),
                  e)
                );
              return (
                this.setConnected(!0),
                e.arrayBuffer().then((e) => new Uint8Array(e))
              );
            },
            (e) => {
              throw (this.setConnected(!1), e);
            }
          )
        );
      }
      setConnected(e) {
        this.connected === e ||
          this.destroyed ||
          ((this.connected = e), Ct.setTransportValue("https", e));
      }
      destroy() {
        this.setConnected(!1),
          (this.destroyed = !0),
          this.pending.forEach((e) => e.reject()),
          (this.pending.length = 0);
      }
      send(e) {
        if (this.networker) return this._send(e);
        {
          const t = new Promise((t, a) => {
            this.pending.push({ resolve: t, reject: a, body: e });
          });
          return this.releasePending(), t;
        }
      }
      releasePending() {
        return At(this, void 0, void 0, function* () {
          if (!this.releasing) {
            this.releasing = !0;
            for (let e = 0; e < this.pending.length; ++e) {
              const t = this.pending[e],
                { body: a, resolve: n } = t;
              try {
                n(yield this._send(a)), this.pending.splice(e, 1);
              } catch (e) {
                this.log.error("Send plain request error:", e), yield tt(5e3);
              }
              --e;
            }
            this.releasing = !1;
          }
        });
      }
    }
    function Rt(e, t) {
      const a = e.length;
      if (a !== t.length) return !1;
      for (let n = 0; n < a; ++n) if (e[n] !== t[n]) return !1;
      return !0;
    }
    var Et = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    let Tt;
    class Vt {
      constructor(e, t, a, n, s = {}) {
        (this.dcId = e),
          (this.authKey = t),
          (this.authKeyId = a),
          (this.lastServerMessages = []),
          (this.sentMessages = {}),
          (this.pendingMessages = {}),
          (this.pendingAcks = []),
          (this.pendingResends = []),
          (this.nextReq = 0),
          (this.checkConnectionPeriod = 0),
          (this.offline = !1),
          (this.lastResendReq = null),
          (this.isOnline = !1),
          (this.status = ht.Closed),
          (this.lastResponseTime = 0),
          (this.debug = o || i.debug),
          (this.activeRequests = 0),
          (this.checkLongPoll = () => {
            const e = this.cleanupSent();
            if (
              (this.longPollPending && Date.now() < this.longPollPending) ||
              this.offline ||
              this.isStopped() ||
              this.isFileNetworker
            )
              return !1;
            b.get("dc").then((t) => {
              (e &&
                (t !== this.dcId ||
                  (this.sleepAfter && Date.now() > this.sleepAfter))) ||
                this.sendLongPoll();
            });
          }),
          (this.checkConnection = (e) => {
            if (
              (this.debug && this.log("Check connection", e),
              this.clearCheckConnectionTimeout(),
              !this.transport)
            )
              return void this.log.warn("No transport for checkConnection");
            const t = new B({ mtproto: !0 }),
              a = we();
            t.storeMethod("ping", { ping_id: a });
            const n = {
              msg_id: Be.generateId(),
              seq_no: this.generateSeqNo(!0),
              body: t.getBytes(!0),
            };
            this.offline && this.setConnectionStatus(ht.Connecting),
              this.sendEncryptedRequest(n).then(
                () => {
                  this.toggleOffline(!1);
                },
                () => {
                  this.debug &&
                    this.log("Delay", 1e3 * this.checkConnectionPeriod),
                    (this.checkConnectionTimeout = xe.setTimeout(
                      () =>
                        this.checkConnection(
                          "from failed checkConnection request"
                        ),
                      (1e3 * this.checkConnectionPeriod) | 0
                    )),
                    (this.checkConnectionPeriod = Math.min(
                      60,
                      1.5 * this.checkConnectionPeriod
                    ));
                }
              );
          }),
          (this.authKeyUint8 = K(this.authKey)),
          (this.serverSalt = K(n)),
          (this.isFileUpload = !!s.fileUpload),
          (this.isFileDownload = !!s.fileDownload),
          (this.isFileNetworker = this.isFileUpload || this.isFileDownload);
        const r = this.isFileUpload ? "-U" : this.isFileDownload ? "-D" : "";
        (this.name = "NET-" + e + r),
          (this.log = Xe(
            this.name,
            Oe.Log | Oe.Debug | Oe.Error | Oe.Warn,
            void 0
          )),
          this.log("constructor"),
          this.updateSession();
      }
      updateSession() {
        (this.seqNo = 0),
          (this.prevSessionId = this.sessionId),
          (this.sessionId = O(new Uint8Array(8)));
      }
      updateSentMessage(e) {
        const t = this.sentMessages[e];
        return (
          !!t &&
          (t.container &&
            (function (e, t) {
              for (let a = e.length - 1; a >= 0; --a) t(e[a], a, e);
            })(t.inner, (e, a) => {
              const n = this.updateSentMessage(e);
              n ? (t.inner[a] = n.msg_id) : t.inner.splice(a, 1);
            }),
          (t.msg_id = Be.generateId()),
          (t.seq_no = this.generateSeqNo(t.notContentRelated || t.container)),
          this.debug &&
            this.log(`updateSentMessage, old=${e}, new=${t.msg_id}`),
          (this.sentMessages[t.msg_id] = t),
          delete this.sentMessages[e],
          t)
        );
      }
      generateSeqNo(e) {
        let t = 2 * this.seqNo;
        return e || (t++, this.seqNo++), t;
      }
      wrapMtpCall(e, t, a) {
        const n = new B({ mtproto: !0 });
        n.storeMethod(e, t);
        const s = Be.generateId(),
          r = this.generateSeqNo(),
          p = { msg_id: s, seq_no: r, body: n.getBytes(!0) };
        return (
          i.debug && this.log("MT call", e, t, s, r), this.pushMessage(p, a)
        );
      }
      wrapMtpMessage(e, t) {
        const a = new B({ mtproto: !0 });
        a.storeObject(e, "Object");
        const n = Be.generateId(),
          s = this.generateSeqNo(t.notContentRelated),
          r = { msg_id: n, seq_no: s, body: a.getBytes(!0) };
        return (
          i.debug && this.log("MT message", e, n, s), this.pushMessage(r, t)
        );
      }
      wrapApiCall(e, t = {}, a = {}) {
        const n = new B(a);
        if (!this.connectionInited) {
          const e = w.API.methods.find((e) => "invokeWithLayer" === e.method);
          if (!e) throw new Error("no invokeWithLayer!");
          n.storeInt(+e.id, "invokeWithLayer"), n.storeInt(w.layer, "layer");
          const t = w.API.methods.find((e) => "initConnection" === e.method);
          if (!t) throw new Error("no initConnection!");
          n.storeInt(+t.id, "initConnection"),
            n.storeInt(0, "flags"),
            n.storeInt(Ye.id, "api_id"),
            n.storeString(Ut.userAgent || "Unknown UserAgent", "device_model"),
            n.storeString(
              navigator.platform || "Unknown Platform",
              "system_version"
            ),
            n.storeString(
              Ye.version + (Ye.isMainDomain ? " " + Ye.suffix : ""),
              "app_version"
            ),
            n.storeString(navigator.language || "en", "system_lang_code"),
            n.storeString(Ye.langPack, "lang_pack"),
            n.storeString(Ut.language, "lang_code");
        }
        if (a.afterMessageId) {
          if (void 0 === Tt) {
            const e = w.API.methods.find((e) => "invokeAfterMsg" === e.method);
            Tt = e ? +e.id : 0;
          }
          Tt
            ? (n.storeInt(Tt, "invokeAfterMsg"),
              n.storeLong(a.afterMessageId, "msg_id"))
            : this.log.error("no invokeAfterMsg!");
        }
        a.resultType = n.storeMethod(e, t);
        const s = {
          msg_id: Be.generateId(),
          seq_no: this.generateSeqNo(),
          body: n.getBytes(!0),
          isAPI: !0,
        };
        return (
          i.debug
            ? this.log("Api call", e, s, t, a)
            : this.debug && this.log("Api call", e, t, a),
          this.pushMessage(s, a)
        );
      }
      changeTransport(e) {
        const t = this.transport;
        t &&
          (t.destroy(),
          this.nextReqTimeout &&
            (clearTimeout(this.nextReqTimeout),
            (this.nextReqTimeout = 0),
            (this.nextReq = 0)),
          (this.connectionInited = !1),
          void 0 !== this.longPollInterval &&
            (clearInterval(this.longPollInterval),
            (this.longPollInterval = void 0)),
          this.clearCheckConnectionTimeout()),
          (this.transport = e),
          e &&
            ((e.networker = this),
            e instanceof Mt &&
              ((this.longPollInterval = xe.setInterval(
                this.checkLongPoll,
                1e4
              )),
              this.checkLongPoll(),
              this.checkConnection("changed transport")),
            e.connected &&
              e.connection &&
              this.setConnectionStatus(ht.Connected),
            this.resend());
      }
      destroy() {
        this.changeTransport();
      }
      forceReconnectTimeout() {
        this.transport.reconnect ? this.transport.reconnect() : this.resend();
      }
      forceReconnect() {
        this.transport.forceReconnect
          ? this.transport.forceReconnect()
          : this.checkConnection("force reconnect");
      }
      sendLongPoll() {
        if (this.sendingLongPoll) return;
        this.sendingLongPoll = !0;
        (this.longPollPending = Date.now() + 25e3),
          this.debug && this.log.debug("sendLongPoll", this.longPollPending),
          this.wrapMtpCall(
            "http_wait",
            { max_delay: 500, wait_after: 150, max_wait: 25e3 },
            { noResponse: !0, longPoll: !0 }
          )
            .then(
              () => {
                (this.longPollPending = void 0),
                  setTimeout(this.checkLongPoll, 0);
              },
              (e) => {
                this.log("Long-poll failed", e);
              }
            )
            .finally(() => {
              this.sendingLongPoll = void 0;
            });
      }
      clearCheckConnectionTimeout() {
        void 0 !== this.checkConnectionTimeout &&
          (clearTimeout(this.checkConnectionTimeout),
          (this.checkConnectionTimeout = void 0));
      }
      toggleOffline(e) {
        if (this.offline !== e)
          if (((this.offline = e), this.clearCheckConnectionTimeout(), e)) {
            clearTimeout(this.nextReqTimeout),
              (this.nextReqTimeout = 0),
              (this.nextReq = 0),
              this.checkConnectionPeriod < 1.5 &&
                (this.checkConnectionPeriod = 0);
            const e = (1e3 * this.checkConnectionPeriod) | 0;
            (this.checkConnectionRetryAt = Date.now() + e),
              this.setConnectionStatus(ht.Closed, this.checkConnectionRetryAt),
              (this.checkConnectionTimeout = xe.setTimeout(
                () => this.checkConnection("from toggleOfline"),
                e
              )),
              (this.checkConnectionPeriod = Math.min(
                30,
                1.5 * (1 + this.checkConnectionPeriod)
              ));
          } else
            this.setConnectionStatus(ht.Connected),
              this.checkLongPoll(),
              this.scheduleRequest();
        this.setConnectionStatus(
          e ? ht.Closed : ht.Connected,
          e ? this.checkConnectionRetryAt : void 0
        );
      }
      handleSentEncryptedRequestHTTP(e, t, a) {
        e.then(
          (e) => (
            this.toggleOffline(!1),
            this.parseResponse(e).then(
              (e) => (
                this.debug && this.log.debug("Server response", e),
                this.processMessage(e.response, e.messageId, e.sessionId),
                this.checkLongPoll(),
                (this.checkConnectionPeriod = Math.max(
                  1.1,
                  Math.sqrt(this.checkConnectionPeriod)
                )),
                !0
              )
            )
          ),
          (e) => (
            this.log.error("Encrypted request failed", e, t),
            this.pushResend(t.msg_id),
            this.toggleOffline(!0),
            !1
          )
        ).then((e) => {
          a.forEach((t) => {
            if (this.sentMessages[t]) {
              const a = this.sentMessages[t].deferred;
              delete this.sentMessages[t],
                delete this.pendingMessages[t],
                e ? a.resolve() : a.reject();
            }
          });
        });
      }
      pushMessage(e, t) {
        const a = new Promise((a, n) => {
          (this.sentMessages[e.msg_id] = Object.assign(
            e,
            t,
            t.notContentRelated
              ? void 0
              : { deferred: { resolve: a, reject: n } }
          )),
            (this.pendingMessages[e.msg_id] = 0),
            t.noSchedule || this.scheduleRequest(),
            S(t) && (t.messageId = e.msg_id);
        });
        if (!t.notContentRelated && !t.noResponse) {
          const t = setTimeout(() => {
            (this.lastResponseTime &&
              Date.now() - this.lastResponseTime < 5e3) ||
              (this.log.error("timeout", e),
              this.isOnline && this.setConnectionStatus(ht.TimedOut));
          }, 5e3);
          a.catch(et).finally(() => {
            clearTimeout(t),
              this.setConnectionStatus(ht.Connected),
              --this.activeRequests,
              this.setDrainTimeout();
          }),
            ++this.activeRequests,
            void 0 !== this.onDrainTimeout &&
              (clearTimeout(this.onDrainTimeout),
              (this.onDrainTimeout = void 0));
        }
        return a;
      }
      setDrainTimeout() {
        !this.activeRequests &&
          this.onDrain &&
          void 0 === this.onDrainTimeout &&
          (this.onDrainTimeout = xe.setTimeout(() => {
            (this.onDrainTimeout = void 0), this.log("drain"), this.onDrain();
          }, 1e4));
      }
      setConnectionStatus(e, t) {
        const a = e === ht.Connected,
          n = this.status !== e;
        (this.isOnline = a),
          (this.status = e),
          n &&
            (Ut.onConnectionStatusChange &&
              Ut.onConnectionStatusChange({
                _: "networkerStatus",
                status: e,
                dcId: this.dcId,
                name: this.name,
                isFileNetworker: this.isFileNetworker,
                isFileDownload: this.isFileDownload,
                isFileUpload: this.isFileUpload,
                retryAt: t,
              }),
            this.isOnline && this.scheduleRequest());
      }
      pushResend(e, t = 100) {
        const a = t ? Date.now() + t : 0,
          n = this.sentMessages[e];
        if (n.container) for (const e of n.inner) this.pendingMessages[e] = a;
        else this.pendingMessages[e] = a;
        n.acked && this.log.error("pushResend: acked message?", n),
          this.debug &&
            this.log.debug("pushResend:", e, n, this.pendingMessages, t),
          this.scheduleRequest(t);
      }
      getMsgKey(e, t) {
        return Et(this, void 0, void 0, function* () {
          const a = t ? 0 : 8,
            s = n(this.authKeyUint8.subarray(88 + a, 88 + a + 32), e),
            i = yield De.invokeCrypto("sha256", s);
          return new Uint8Array(i).subarray(8, 24);
        });
      }
      getAesKeyIv(e, t) {
        const a = t ? 0 : 8,
          n = new Uint8Array(52),
          s = new Uint8Array(52),
          i = [];
        return (
          n.set(e, 0),
          n.set(this.authKeyUint8.subarray(a, a + 36), 16),
          i.push(De.invokeCrypto("sha256", n)),
          s.set(this.authKeyUint8.subarray(40 + a, 40 + a + 36), 0),
          s.set(e, 36),
          i.push(De.invokeCrypto("sha256", s)),
          Promise.all(i).then((e) => {
            const t = new Uint8Array(32),
              a = new Uint8Array(32),
              n = new Uint8Array(e[0]),
              s = new Uint8Array(e[1]);
            return (
              t.set(n.subarray(0, 8)),
              t.set(s.subarray(8, 24), 8),
              t.set(n.subarray(24, 32), 24),
              a.set(s.subarray(0, 8)),
              a.set(n.subarray(8, 24), 8),
              a.set(s.subarray(24, 32), 24),
              [t, a]
            );
          })
        );
      }
      isStopped() {
        return Ut.akStopped && !this.isFileNetworker;
      }
      performScheduledRequest() {
        if (this.isStopped()) return !1;
        if (this.pendingAcks.length) {
          const e = this.pendingAcks.slice();
          this.wrapMtpMessage(
            { _: "msgs_ack", msg_ids: e },
            { notContentRelated: !0, noSchedule: !0 }
          );
        }
        if (this.pendingResends.length) {
          const e = this.pendingResends.slice(),
            t = { noSchedule: !0, notContentRelated: !0, messageId: "" };
          this.wrapMtpMessage({ _: "msg_resend_req", msg_ids: e }, t),
            (this.lastResendReq = {
              req_msg_id: t.messageId,
              resend_msg_ids: e,
            });
        }
        let e;
        const t = [];
        let a = 0,
          n = !1,
          s = !1,
          i = !1;
        const r = Object.keys(this.pendingMessages)
          .map((e) => M()(e))
          .sort((e, t) => e.compare(t))
          .map((e) => e.toString(10));
        for (const p of r) {
          const r = this.sentMessages[p];
          if (r && r.body) {
            const p = r.body.length + 32;
            if (
              a + p > 655360 &&
              (this.log.warn("lengthOverflow", r, t), (i = !0), e)
            )
              break;
            t.push(r),
              (a += p),
              r.isAPI ? (n = !0) : r.longPoll && (s = !0),
              (e = r);
          }
          delete this.pendingMessages[p];
        }
        if (this.transport instanceof Mt && n && !s) {
          const e = new B({ mtproto: !0 });
          e.storeMethod("http_wait", {
            max_delay: 500,
            wait_after: 150,
            max_wait: 3e3,
          }),
            t.push({
              msg_id: Be.generateId(),
              seq_no: this.generateSeqNo(),
              body: e.getBytes(!0),
            });
        }
        if (!t.length) return;
        const p = t.filter((e) => e.noResponse).map((e) => e.msg_id);
        if (t.length > 1) {
          const n = this.generateContainerMessage(a, t);
          (e = n.messageWithBody), (this.sentMessages[e.msg_id] = n.message);
        } else this.sentMessages[e.msg_id] = e;
        this.pendingAcks = [];
        const o = this.sendEncryptedRequest(e);
        this.transport instanceof Mt &&
          this.handleSentEncryptedRequestHTTP(o, e, p),
          this.transport instanceof Mt || this.cleanupSent(),
          i && this.scheduleRequest();
      }
      generateContainerMessage(e, t) {
        const a = new B({ mtproto: !0, startMaxLength: e + 64 });
        a.storeInt(1945237724, "CONTAINER[id]"),
          a.storeInt(t.length, "CONTAINER[count]");
        const n = [];
        t.forEach((e, t) => {
          n.push(e.msg_id),
            a.storeLong(e.msg_id, "CONTAINER[" + t + "][msg_id]"),
            a.storeInt(e.seq_no, "CONTAINER[" + t + "][seq_no]"),
            a.storeInt(e.body.length, "CONTAINER[" + t + "][bytes]"),
            a.storeRawBytes(e.body, "CONTAINER[" + t + "][body]");
        });
        const s = {
          msg_id: Be.generateId(),
          seq_no: this.generateSeqNo(!0),
          container: !0,
          inner: n,
        };
        return (
          i.debug && this.log.warn("Container", n, s.msg_id, s.seq_no),
          {
            message: s,
            messageWithBody: Object.assign({ body: a.getBytes(!0) }, s),
          }
        );
      }
      getEncryptedMessage(e) {
        return Et(this, void 0, void 0, function* () {
          const t = yield this.getMsgKey(e, !0),
            a = yield this.getAesKeyIv(t, !0);
          return {
            bytes: yield De.invokeCrypto("aes-encrypt", e, a[0], a[1]),
            msgKey: t,
          };
        });
      }
      getDecryptedMessage(e, t) {
        return this.getAesKeyIv(e, !1).then((e) =>
          De.invokeCrypto("aes-decrypt", t, e[0], e[1])
        );
      }
      getEncryptedOutput(e) {
        const t = new B({ startMaxLength: e.body.length + 2048 });
        t.storeIntBytes(this.serverSalt, 64, "salt"),
          t.storeIntBytes(this.sessionId, 64, "session_id"),
          t.storeLong(e.msg_id, "message_id"),
          t.storeInt(e.seq_no, "seq_no"),
          t.storeInt(e.body.length, "message_data_length"),
          t.storeRawBytes(e.body, "message_data");
        const a = t.getBuffer(),
          s = 16 - (t.getOffset() % 16) + 16 * (1 + (be(8) % 5)),
          i = n(a, O(new Uint8Array(s)));
        return this.getEncryptedMessage(i).then((e) => {
          const t = new B({ startMaxLength: e.bytes.length + 256 });
          t.storeIntBytes(this.authKeyId, 64, "auth_key_id"),
            t.storeIntBytes(e.msgKey, 128, "msg_key"),
            t.storeRawBytes(e.bytes, "encrypted_data");
          return t.getBytes(!0);
        });
      }
      sendEncryptedRequest(e) {
        return this.getEncryptedOutput(e).then((t) => {
          this.debug &&
            this.log.debug(
              "sendEncryptedRequest: launching message into space:",
              e,
              [e.msg_id].concat(e.inner || []),
              t.length
            );
          const a = this.transport.send(t);
          if (!(this.transport instanceof Mt)) return a;
          const n = {
            code: 406,
            type: "NETWORK_BAD_RESPONSE",
            transport: this.transport,
          };
          return a.then(
            (e) => {
              if (!(null == e ? void 0 : e.byteLength)) throw n;
              return e;
            },
            (e) => {
              throw (
                (e.message ||
                  e.type ||
                  (e = Object.assign(n, {
                    type: "NETWORK_BAD_REQUEST",
                    originalError: e,
                  })),
                e)
              );
            }
          );
        });
      }
      parseResponse(e) {
        this.lastResponseTime = Date.now();
        const t = new x(e),
          a = t.fetchIntBytes(64, !0, "auth_key_id");
        if (!Rt(a, this.authKeyId))
          throw new Error("[MT] Invalid server auth_key_id: " + P(a));
        const n = t.fetchIntBytes(128, !0, "msg_key"),
          s = t.fetchRawBytes(
            e.byteLength - t.getOffset(),
            !0,
            "encrypted_data"
          );
        return this.getDecryptedMessage(n, s).then((e) =>
          this.getMsgKey(e, !1).then((t) => {
            if (!Rt(n, t))
              throw (
                (this.log.warn("[MT] msg_keys", n, t),
                this.updateSession(),
                new Error("[MT] server msgKey mismatch, updating session"))
              );
            let a = new x(e, { mtproto: !0 });
            a.fetchIntBytes(64, !0, "salt");
            const s = a.fetchIntBytes(64, !0, "session_id"),
              i = a.fetchLong("message_id");
            if (
              !(
                Rt(s, this.sessionId) ||
                (this.prevSessionId && Rt(s, this.prevSessionId))
              )
            )
              throw (
                (this.log.warn(
                  "Sessions",
                  s,
                  this.sessionId,
                  this.prevSessionId,
                  e
                ),
                new Error("[MT] Invalid server session_id: " + P(s)))
              );
            const r = a.fetchInt("seq_no"),
              p = e.byteLength,
              o = a.fetchInt("message_data[length]");
            let m = a.getOffset();
            if (o % 4 || o > p - m)
              throw new Error("[MT] Invalid body length: " + o);
            const d = a.fetchRawBytes(o, !0, "message_data");
            m = a.getOffset();
            const y = p - m;
            if (y < 12 || y > 1024)
              throw new Error("[MT] Invalid padding length: " + y);
            a = new x(d, {
              mtproto: !0,
              override: {
                mt_message: (e, t) => {
                  (e.msg_id = a.fetchLong(t + "[msg_id]")),
                    (e.seqno = a.fetchInt(t + "[seqno]")),
                    (e.bytes = a.fetchInt(t + "[bytes]"));
                  const n = a.getOffset();
                  try {
                    e.body = a.fetchObject("Object", t + "[body]");
                  } catch (t) {
                    this.log.error("parse error", t.message, t.stack),
                      (e.body = { _: "parse_error", error: t });
                  }
                  a.getOffset() !== n + e.bytes && a.setOffset(n + e.bytes);
                },
                mt_rpc_result: (e, t) => {
                  e.req_msg_id = a.fetchLong(t + "[req_msg_id]");
                  const n = this.sentMessages[e.req_msg_id],
                    s = (n && n.resultType) || "Object";
                  (e.req_msg_id && !n) ||
                    (e.result = a.fetchObject(s, t + "[result]"));
                },
              },
            });
            return {
              response: a.fetchObject("", "INPUT"),
              messageId: i,
              sessionId: s,
              seqNo: r,
            };
          })
        );
      }
      applyServerSalt(e) {
        const t = ((a = e), q(L(M()(a)).reverse(), 8, !0, !1, !1));
        var a;
        b.set({ ["dc" + this.dcId + "_server_salt"]: P(t) }),
          (this.serverSalt = new Uint8Array(t));
      }
      scheduleRequest(e) {
        this.transport instanceof Mt &&
          (this.offline && this.checkConnection("forced schedule"),
          e || (e = 0));
        const t = Date.now() + (e || 0);
        if (this.nextReq && (void 0 === e || this.nextReq <= t)) return;
        this.nextReqTimeout && clearTimeout(this.nextReqTimeout);
        const a = () => {
          (this.nextReqTimeout = 0),
            (this.nextReq = 0),
            (this.transport instanceof Mt && this.offline) ||
              this.performScheduledRequest();
        };
        (this.nextReq = t),
          void 0 !== e ? (this.nextReqTimeout = self.setTimeout(a, e)) : a();
      }
      ackMessage(e) {
        let t;
        this.pendingAcks.push(e),
          this.transport instanceof Mt && (t = 3e4),
          this.scheduleRequest(t);
      }
      reqResendMessage(e) {
        this.debug && this.log.debug("Req resend", e),
          this.pendingResends.push(e),
          this.scheduleRequest(100);
      }
      cleanupSent() {
        let e = !1;
        return (
          Object.keys(this.sentMessages).forEach((t) => {
            const a = this.sentMessages[t];
            if (a.notContentRelated && void 0 === this.pendingMessages[t])
              delete this.sentMessages[t];
            else if (a.container) {
              for (const t of a.inner)
                if (void 0 !== this.sentMessages[t]) return void (e = !0);
              delete this.sentMessages[t];
            } else e = !0;
          }),
          !e
        );
      }
      processMessageAck(e) {
        const t = this.sentMessages[e];
        t && !t.acked && (t.acked = !0);
      }
      processError(e) {
        const t =
          (e.error_message || "").match(/^([A-Z_0-9]+\b)(: (.+))?/) || [];
        return (
          (e.error_code = e.error_code),
          {
            code: !e.error_code || e.error_code <= 0 ? 500 : e.error_code,
            type: t[1] || "UNKNOWN",
            description: t[3] || "CODE#" + e.error_code + " " + e.error_message,
            originalError: e,
          }
        );
      }
      resend() {
        for (const e in this.sentMessages) {
          const t = this.sentMessages[e];
          (t.body || t.container) && this.pushResend(e);
        }
      }
      processMessage(e, t, a) {
        if ("messageEmpty" === e._)
          return void this.log.warn("processMessage: messageEmpty", e, t);
        if (parseInt(t.substr(0, -10), 10) % 2)
          this.log.warn("Server even message id: ", t, e);
        else
          switch (e._) {
            case "msg_container":
              for (const t of e.messages) this.processMessage(t, t.msg_id, a);
              break;
            case "bad_server_salt":
              this.log("Bad server salt", e),
                this.applyServerSalt(e.new_server_salt),
                this.sentMessages[e.bad_msg_id] &&
                  this.pushResend(e.bad_msg_id),
                this.ackMessage(t);
              break;
            case "bad_msg_notification":
              switch (
                (this.log.error("Bad msg notification", e), e.error_code)
              ) {
                case 16:
                case 17:
                case 32:
                case 33:
                case 64: {
                  const a = Be.applyServerTime(
                    M()(t).shiftRight(32).toJSNumber()
                  );
                  (17 === e.error_code || a) &&
                    (this.log("Update session"), this.updateSession());
                  const n = this.updateSentMessage(e.bad_msg_id);
                  n && this.pushResend(n.msg_id);
                }
              }
              break;
            case "message":
              if (-1 !== this.lastServerMessages.indexOf(t))
                return void this.ackMessage(t);
              this.lastServerMessages.push(t),
                this.lastServerMessages.length > 100 &&
                  this.lastServerMessages.shift(),
                this.processMessage(e.body, e.msg_id, a);
              break;
            case "new_session_created":
              this.ackMessage(t),
                this.debug && this.log.debug("new_session_created", e),
                this.processMessageAck(e.first_msg_id),
                this.applyServerSalt(e.server_salt),
                b.get("dc").then((t) => {
                  t === this.dcId &&
                    !this.isFileNetworker &&
                    Ut.updatesProcessor &&
                    Ut.updatesProcessor(e);
                });
              break;
            case "msgs_ack":
              for (const t of e.msg_ids) this.processMessageAck(t);
              break;
            case "msg_detailed_info":
              if (!this.sentMessages[e.msg_id]) {
                this.ackMessage(e.answer_msg_id);
                break;
              }
            case "msg_new_detailed_info":
              if (this.pendingAcks.indexOf(e.answer_msg_id)) break;
              this.reqResendMessage(e.answer_msg_id);
              break;
            case "msgs_state_info":
              if (
                (this.ackMessage(e.answer_msg_id),
                this.lastResendReq &&
                  this.lastResendReq.req_msg_id === e.req_msg_id &&
                  this.pendingResends.length)
              )
                for (const e of this.lastResendReq.resend_msg_ids) {
                  const t = this.pendingResends.indexOf(e);
                  -1 !== t && this.pendingResends.splice(t, 1);
                }
              break;
            case "rpc_result": {
              this.ackMessage(t);
              const a = e.req_msg_id,
                n = this.sentMessages[a];
              if ((this.processMessageAck(a), n)) {
                const t = n.deferred;
                if ("rpc_error" === e.result._) {
                  const a = this.processError(e.result);
                  this.log("Rpc error", a), t && t.reject(a);
                } else
                  t && t.resolve(e.result),
                    n.isAPI &&
                      !this.connectionInited &&
                      (this.connectionInited = !0);
                delete this.sentMessages[a];
              } else
                this.debug && this.log("Rpc result for unknown message:", a, e);
              break;
            }
            case "pong": {
              const t = e.msg_id,
                a = this.sentMessages[t];
              a && (a.deferred.resolve(e), delete this.sentMessages[t]);
              break;
            }
            default:
              this.ackMessage(t),
                null !== Ut.updatesProcessor && Ut.updatesProcessor(e);
          }
      }
    }
    const Dt = new (class {
      constructor() {
        (this.networkers = []),
          (this.language = navigator.language || Ye.langPackCode),
          (this.updatesProcessor = null),
          (this.onConnectionStatusChange = null),
          (this.akStopped = !1),
          (this.userAgent = navigator.userAgent);
      }
      removeNetworker(e) {
        it(this.networkers, e);
      }
      setUpdatesProcessor(e) {
        this.updatesProcessor = e;
      }
      getNetworker(e, t, a, n, s) {
        const i = new Vt(e, t, a, n, s);
        return this.networkers.push(i), i;
      }
      startAll() {
        if (this.akStopped) {
          const e = this.networkers.filter((e) => e.isStopped());
          (this.akStopped = !1),
            this.updatesProcessor &&
              this.updatesProcessor({ _: "new_session_created" });
          for (const t of e) t.scheduleRequest();
        }
      }
      stopAll() {
        this.akStopped = !0;
      }
      setLanguage(e) {
        this.language = e;
        for (const e of this.networkers)
          e.isFileNetworker || (e.connectionInited = !1);
      }
      unsetConnectionInited() {
        for (const e of this.networkers) e.connectionInited = !1;
      }
      forceReconnectTimeout() {
        for (const e of this.networkers) e.forceReconnectTimeout();
      }
      forceReconnect() {
        for (const e of this.networkers)
          if (!e.isFileNetworker) {
            e.forceReconnect();
            break;
          }
      }
    })();
    p && (p.networkerFactory = Dt);
    var Ut = Dt,
      Bt = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    var xt = new (class {
        constructor() {
          (this.testPublicKeysHex = [
            {
              modulus:
                "c8c11d635691fac091dd9489aedced2932aa8a0bcefef05fa800892d9b52ed03200865c9e97211cb2ee6c7ae96d3fb0e15aeffd66019b44a08a240cfdd2868a85e1f54d6fa5deaa041f6941ddf302690d61dc476385c2fa655142353cb4e4b59f6e5b6584db76fe8b1370263246c010c93d011014113ebdf987d093f9d37c2be48352d69a1683f8f6e6c2167983c761e3ab169fde5daaa12123fa1beab621e4da5935e9c198f82f35eae583a99386d8110ea6bd1abb0f568759f62694419ea5f69847c43462abef858b4cb5edc84e7b9226cd7bd7e183aa974a712c079dde85b9dc063b8a5c08e8f859c0ee5dcd824c7807f20153361a7f63cfd2a433a1be7f5",
              exponent: "010001",
            },
          ]),
            (this.publisKeysHex = [
              {
                modulus:
                  "e8bb3305c0b52c6cf2afdf7637313489e63e05268e5badb601af417786472e5f93b85438968e20e6729a301c0afc121bf7151f834436f7fda680847a66bf64accec78ee21c0b316f0edafe2f41908da7bd1f4a5107638eeb67040ace472a14f90d9f7c2b7def99688ba3073adb5750bb02964902a359fe745d8170e36876d4fd8a5d41b2a76cbff9a13267eb9580b2d06d10357448d20d9da2191cb5d8c93982961cdfdeda629e37f1fb09a0722027696032fe61ed663db7a37f6f263d370f69db53a0dc0a1748bdaaff6209d5645485e6e001d1953255757e4b8e42813347b11da6ab500fd0ace7e6dfa3736199ccaf9397ed0745a427dcfa6cd67bcb1acff3",
                exponent: "010001",
              },
            ]),
            (this.publicKeysParsed = {}),
            (this.prepared = !1),
            (this.preparePromise = null),
            i.test && (this.publisKeysHex = this.testPublicKeysHex);
        }
        prepare() {
          return this.preparePromise
            ? this.preparePromise
            : this.prepared
            ? Promise.resolve()
            : (this.preparePromise = Promise.all(
                this.publisKeysHex.map((e) => {
                  const t = new B();
                  t.storeBytes(ue(e.modulus), "n"),
                    t.storeBytes(ue(e.exponent), "e");
                  const a = t.getBuffer();
                  return De.invokeCrypto("sha1", a).then((t) => {
                    const a = t.slice(-8);
                    a.reverse(),
                      (this.publicKeysParsed[P(a).toLowerCase()] = {
                        modulus: e.modulus,
                        exponent: e.exponent,
                      });
                  });
                })
              ).then(() => {
                (this.prepared = !0), (this.preparePromise = null);
              }));
        }
        select(e) {
          return Bt(this, void 0, void 0, function* () {
            yield this.prepare();
            for (let t = 0; t < e.length; ++t) {
              let a = M()(e[t]).toString(16).toLowerCase();
              a.length < 16 &&
                (a = new Array(16 - a.length).fill("0").join("") + a);
              const n = this.publicKeysParsed[a];
              if (n) return Object.assign({ fingerprint: e[t] }, n);
            }
          });
        }
      })(),
      Ft = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    var Lt = new (class {
      constructor() {
        (this.cached = {}), (this.log = Xe("AUTHORIZER", Oe.Error | Oe.Log));
      }
      sendPlainRequest(e, t) {
        const a = t.byteLength,
          n = new B();
        n.storeLongP(0, 0, "auth_key_id"),
          n.storeLong(Be.generateId(), "msg_id"),
          n.storeInt(a, "request_length");
        const s = n.getBytes(!0),
          i = new Uint8Array(s.byteLength + a);
        i.set(s), i.set(t, s.length);
        const r = kt.chooseServer(e, "client", this.transportType),
          p = { code: 406, type: "NETWORK_BAD_RESPONSE" };
        o && this.log("mtpSendPlainRequest: creating requestPromise");
        return r.send(i).then(
          (e) => {
            if (
              (o && this.log("mtpSendPlainRequest: in good sector", e),
              !e || !e.byteLength)
            )
              throw p;
            try {
              const t = new x(e, { mtproto: !0 });
              if (4 === e.length) {
                const e = t.fetchInt();
                throw (
                  (this.log.error(
                    "mtpSendPlainRequest: wrong response, error code:",
                    e
                  ),
                  e)
                );
              }
              const a = t.fetchLong("auth_key_id");
              "0" !== a && this.log.error("auth_key_id !== 0", a);
              const n = t.fetchLong("msg_id");
              "0" === n && this.log.error("msg_id === 0", n);
              const s = t.fetchInt("msg_len");
              return s || this.log.error("no msg_len", s), t;
            } catch (e) {
              this.log.error(
                "mtpSendPlainRequest: deserialization went bad",
                e
              );
              throw Object.assign(p, { originalError: e });
            }
          },
          (e) => {
            throw (
              (e.message ||
                e.type ||
                (e = Object.assign(p, { originalError: e })),
              e)
            );
          }
        );
      }
      sendReqPQ(e) {
        return Ft(this, void 0, void 0, function* () {
          const t = new B({ mtproto: !0 });
          let a;
          t.storeMethod("req_pq_multi", { nonce: e.nonce }),
            o && this.log("Send req_pq", P(e.nonce));
          try {
            const n = this.sendPlainRequest(e.dcId, t.getBytes(!0));
            xt.prepare(), (a = yield n);
          } catch (e) {
            throw (this.log.error("req_pq error", e.message), e);
          }
          const n = a.fetchObject("ResPQ");
          if ("resPQ" !== n._)
            throw new Error("[MT] resPQ response invalid: " + n._);
          if (!Rt(e.nonce, n.nonce))
            throw (
              (this.log.error(e.nonce, n.nonce),
              new Error("[MT] resPQ nonce mismatch"))
            );
          (e.serverNonce = n.server_nonce),
            (e.pq = n.pq),
            (e.fingerprints = n.server_public_key_fingerprints),
            o &&
              this.log("Got ResPQ", P(e.serverNonce), P(e.pq), e.fingerprints);
          const s = yield xt.select(e.fingerprints);
          if (!s) throw new Error("[MT] No public key found");
          (e.publicKey = s), o && this.log("PQ factorization start", e.pq);
          try {
            var i = yield De.invokeCrypto("factorize", e.pq);
          } catch (e) {
            throw (this.log.error("worker error factorize", e), e);
          }
          return (
            (e.p = i[0]),
            (e.q = i[1]),
            o && this.log("PQ factorization done", i),
            this.sendReqDhParams(e)
          );
        });
      }
      sendReqDhParams(e) {
        return Ft(this, void 0, void 0, function* () {
          e.newNonce = O(new Uint8Array(32));
          const t = {
              _: "p_q_inner_data_dc",
              pq: e.pq,
              p: e.p,
              q: e.q,
              nonce: e.nonce,
              server_nonce: e.serverNonce,
              new_nonce: e.newNonce,
              dc: 0,
            },
            a = new B({ mtproto: !0 });
          a.storeObject(t, "P_Q_inner_data", "DECRYPTED_DATA");
          const n = a.getBytes(!0);
          if (n.length > 144) throw "DH_params: data is more than 144 bytes!";
          const s = q(n, 192, !1, !0, !1),
            i = s.slice().reverse(),
            r = yield (() =>
              Ft(this, void 0, void 0, function* () {
                for (;;) {
                  const t = O(new Uint8Array(32)),
                    a = i.concat(yield De.invokeCrypto("sha256", t.concat(s)));
                  if (224 !== a.length)
                    throw "DH_params: dataWithHash !== 224 bytes!";
                  const n = yield De.invokeCrypto(
                      "aes-encrypt",
                      a,
                      t,
                      new Uint8Array([0])
                    ),
                    r = G(t, yield De.invokeCrypto("sha256", n)).concat(n),
                    p = F(r),
                    o = M()(e.publicKey.modulus, 16);
                  if (-1 === p.compare(o)) return r;
                }
              }))(),
            p = q(
              yield De.invokeCrypto("rsa-encrypt", r, e.publicKey),
              256,
              !0,
              !0,
              !0
            ),
            m = {
              nonce: e.nonce,
              server_nonce: e.serverNonce,
              p: e.p,
              q: e.q,
              public_key_fingerprint: e.publicKey.fingerprint,
              encrypted_data: p,
            },
            d = new B({ mtproto: !0 });
          d.storeMethod("req_DH_params", m);
          const y = d.getBytes(!0);
          let c;
          o && this.log("Send req_DH_params", m);
          try {
            c = yield this.sendPlainRequest(e.dcId, y);
          } catch (e) {
            throw (this.log.error("Send req_DH_params FAIL!", e), e);
          }
          const l = c.fetchObject("Server_DH_Params", "RESPONSE");
          if (
            (o && this.log("Sent req_DH_params, response:", l),
            "server_DH_params_fail" !== l._ && "server_DH_params_ok" !== l._)
          )
            throw new Error("[MT] Server_DH_Params response invalid: " + l._);
          if (!Rt(e.nonce, l.nonce))
            throw new Error("[MT] Server_DH_Params nonce mismatch");
          if (!Rt(e.serverNonce, l.server_nonce))
            throw new Error("[MT] Server_DH_Params server_nonce mismatch");
          if ("server_DH_params_fail" === l._) {
            if (
              !Rt(
                (yield De.invokeCrypto("sha1", e.newNonce)).slice(-16),
                l.new_nonce_hash
              )
            )
              throw new Error(
                "[MT] server_DH_params_fail new_nonce_hash mismatch"
              );
            throw new Error("[MT] server_DH_params_fail");
          }
          try {
            yield this.decryptServerDhDataAnswer(e, l.encrypted_answer);
          } catch (e) {
            throw (
              (this.log.error("mtpDecryptServerDhDataAnswer FAILED!", e), e)
            );
          }
          return this.sendSetClientDhParams(e);
        });
      }
      decryptServerDhDataAnswer(e, t) {
        return Ft(this, void 0, void 0, function* () {
          (e.localTime = Date.now()),
            (e.tmpAesKey = (yield De.invokeCrypto(
              "sha1",
              e.newNonce.concat(e.serverNonce)
            )).concat(
              (yield De.invokeCrypto(
                "sha1",
                e.serverNonce.concat(e.newNonce)
              )).slice(0, 12)
            )),
            (e.tmpAesIv = (yield De.invokeCrypto(
              "sha1",
              e.serverNonce.concat(e.newNonce)
            ))
              .slice(12)
              .concat(
                yield De.invokeCrypto("sha1", e.newNonce.concat(e.newNonce)),
                e.newNonce.slice(0, 4)
              ));
          const a = new Uint8Array(
              yield De.invokeCrypto("aes-decrypt", t, e.tmpAesKey, e.tmpAesIv)
            ),
            n = a.slice(0, 20),
            s = a.slice(20),
            i = new x(s, { mtproto: !0 }),
            r = i.fetchObject("Server_DH_inner_data");
          if ("server_DH_inner_data" !== r._)
            throw new Error("[MT] server_DH_inner_data response invalid: " + r);
          if (!Rt(e.nonce, r.nonce))
            throw new Error("[MT] server_DH_inner_data nonce mismatch");
          if (!Rt(e.serverNonce, r.server_nonce))
            throw new Error("[MT] server_DH_inner_data serverNonce mismatch");
          o && this.log("Done decrypting answer"),
            (e.g = r.g),
            (e.dhPrime = r.dh_prime),
            (e.gA = r.g_a),
            (e.serverTime = r.server_time),
            (e.retry = 0),
            this.verifyDhParams(e.g, e.dhPrime, e.gA);
          const p = i.getOffset();
          if (!Rt(n, yield De.invokeCrypto("sha1", s.slice(0, p))))
            throw new Error("[MT] server_DH_inner_data SHA1 mismatch");
          Be.applyServerTime(e.serverTime, e.localTime);
        });
      }
      verifyDhParams(e, t, a) {
        o && this.log("Verifying DH params", e, t, a);
        const n = P(t);
        if (
          3 !== e ||
          "c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d930f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f69458705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4ac8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba74d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9ca3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b" !==
            n
        )
          throw new Error("[MT] DH params are not verified: unknown dhPrime");
        o && this.log("dhPrime cmp OK");
        const s = F(a),
          i = M()(n, 16);
        if (s.compare(M.a.one) <= 0)
          throw new Error("[MT] DH params are not verified: gA <= 1");
        if (s.compare(i.subtract(M.a.one)) >= 0)
          throw new Error("[MT] DH params are not verified: gA >= dhPrime - 1");
        o && this.log("1 < gA < dhPrime-1 OK");
        const r = M()(2).pow(1984);
        if (s.compare(r) < 0)
          throw new Error("[MT] DH params are not verified: gA < 2^{2048-64}");
        if (s.compare(i.subtract(r)) >= 0)
          throw new Error(
            "[MT] DH params are not verified: gA > dhPrime - 2^{2048-64}"
          );
        return o && this.log("2^{2048-64} < gA < dhPrime-2^{2048-64} OK"), !0;
      }
      sendSetClientDhParams(e) {
        return Ft(this, void 0, void 0, function* () {
          const t = ue(e.g.toString(16));
          e.b = O(new Uint8Array(256));
          try {
            var a = yield De.invokeCrypto("mod-pow", t, e.b, e.dhPrime);
          } catch (e) {
            throw e;
          }
          const n = new B({ mtproto: !0 });
          n.storeObject(
            {
              _: "client_DH_inner_data",
              nonce: e.nonce,
              server_nonce: e.serverNonce,
              retry_id: [0, e.retry++],
              g_b: a,
            },
            "Client_DH_Inner_Data"
          );
          const s = (yield De.invokeCrypto("sha1", n.getBuffer())).concat(
              n.getBytes(!0)
            ),
            i = yield De.invokeCrypto(
              "aes-encrypt",
              s,
              e.tmpAesKey,
              e.tmpAesIv
            ),
            r = new B({ mtproto: !0 });
          let p;
          r.storeMethod("set_client_DH_params", {
            nonce: e.nonce,
            server_nonce: e.serverNonce,
            encrypted_data: i,
          }),
            o && this.log("Send set_client_DH_params");
          try {
            p = yield this.sendPlainRequest(e.dcId, r.getBytes(!0));
          } catch (e) {
            throw e;
          }
          const m = p.fetchObject("Set_client_DH_params_answer");
          if (
            "dh_gen_ok" !== m._ &&
            "dh_gen_retry" !== m._ &&
            "dh_gen_fail" !== m._
          )
            throw new Error(
              "[MT] Set_client_DH_params_answer response invalid: " + m._
            );
          if (!Rt(e.nonce, m.nonce))
            throw new Error("[MT] Set_client_DH_params_answer nonce mismatch");
          if (!Rt(e.serverNonce, m.server_nonce))
            throw new Error(
              "[MT] Set_client_DH_params_answer server_nonce mismatch"
            );
          try {
            var d = yield De.invokeCrypto("mod-pow", e.gA, e.b, e.dhPrime);
          } catch (e) {
            throw d;
          }
          const y = yield De.invokeCrypto("sha1", d),
            c = y.slice(0, 8),
            l = y.slice(-8);
          switch (
            (o && this.log("Got Set_client_DH_params_answer", m._, d), m._)
          ) {
            case "dh_gen_ok": {
              const t = (yield De.invokeCrypto(
                "sha1",
                e.newNonce.concat([1], c)
              )).slice(-16);
              if (!Rt(t, m.new_nonce_hash1))
                throw (
                  (this.log.error(
                    "Set_client_DH_params_answer new_nonce_hash1 mismatch",
                    t,
                    m
                  ),
                  new Error("new_nonce_hash1 mismatch"))
                );
              const a = G(e.newNonce.slice(0, 8), e.serverNonce.slice(0, 8));
              return (
                o && this.log("Auth successfull!", l, d, a),
                (e.authKeyId = l),
                (e.authKey = d),
                (e.serverSalt = a),
                e
              );
            }
            case "dh_gen_retry":
              if (
                !Rt(
                  (yield De.invokeCrypto(
                    "sha1",
                    e.newNonce.concat([2], c)
                  )).slice(-16),
                  m.new_nonce_hash2
                )
              )
                throw new Error(
                  "[MT] Set_client_DH_params_answer new_nonce_hash2 mismatch"
                );
              return this.sendSetClientDhParams(e);
            case "dh_gen_fail":
              if (
                !Rt(
                  (yield De.invokeCrypto(
                    "sha1",
                    e.newNonce.concat([3], c)
                  )).slice(-16),
                  m.new_nonce_hash3
                )
              )
                throw new Error(
                  "[MT] Set_client_DH_params_answer new_nonce_hash3 mismatch"
                );
              throw new Error("[MT] Set_client_DH_params_answer fail");
          }
        });
      }
      getTransportType() {
        return this.getTransportTypePromise
          ? this.getTransportTypePromise
          : (this.getTransportTypePromise = Ct.pingTransports().then(
              ({ websocket: e }) => {
                (this.transportType = e ? "websocket" : "https"),
                  this.log("will use transport:", this.transportType);
              }
            ));
      }
      auth(e) {
        let t = this.cached[e];
        return (
          t ||
          ((t = new Promise((t, a) =>
            Ft(this, void 0, void 0, function* () {
              let n;
              yield this.getTransportType();
              let s = 1;
              for (; s++ <= 3; )
                try {
                  const a = { dcId: e, nonce: O(new Uint8Array(16)) },
                    n = this.sendReqPQ(a);
                  return void t(yield n);
                } catch (e) {
                  n = e;
                }
              a(n);
            })
          )),
          (this.cached[e] = t))
        );
      }
    })();
    function Nt(e, t = "") {
      let a;
      const n = (function (e) {
        return -1 ===
          [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/svg+xml",
            "image/webp",
            "image/bmp",
            "video/mp4",
            "video/webm",
            "video/quicktime",
            "audio/ogg",
            "audio/mpeg",
            "audio/mp4",
            "application/json",
            "application/pdf",
          ].indexOf(e)
          ? "application/octet-stream"
          : e;
      })(t);
      try {
        a = new Blob(e, { type: n });
      } catch (t) {
        let s = new BlobBuilder();
        e.forEach((e) => {
          s.append(e);
        }),
          (a = s.getBlob(n));
      }
      return a;
    }
    class Ot {
      constructor(e, t) {
        (this.storageIsAvailable = !0),
          (function (e, t) {
            if (t) for (let a in t) void 0 !== t[a] && (e[a] = t[a]);
          })(this, e),
          i.test && (this.name += "_test"),
          (this.storeName = t),
          (this.log = Xe("IDB-" + this.storeName)),
          this.openDatabase(!0),
          Ot.STORAGES.push(this);
      }
      static closeDatabases(e) {
        this.STORAGES.forEach((t) => {
          if (e && e === t) return;
          const a = t.db;
          a && ((a.onclose = () => {}), a.close());
        });
      }
      isAvailable() {
        return this.storageIsAvailable;
      }
      openDatabase(e = !1) {
        if (this.openDbPromise && !e) return this.openDbPromise;
        try {
          var t = indexedDB.open(this.name, this.version);
          if (!t) return Promise.reject();
        } catch (e) {
          return (
            this.log.error("error opening db", e.message),
            (this.storageIsAvailable = !1),
            Promise.reject(e)
          );
        }
        let a = !1;
        return (
          setTimeout(() => {
            a || t.onerror({ type: "IDB_CREATE_TIMEOUT" });
          }, 3e3),
          (this.openDbPromise = new Promise((e, n) => {
            (t.onsuccess = (s) => {
              a = !0;
              const i = t.result;
              let r = !1;
              this.log("Opened"),
                (i.onerror = (e) => {
                  (this.storageIsAvailable = !1),
                    this.log.error(
                      "Error creating/accessing IndexedDB database",
                      e
                    ),
                    n(e);
                }),
                (i.onclose = (e) => {
                  this.log.error("closed:", e), !r && this.openDatabase();
                }),
                (i.onabort = (e) => {
                  this.log.error("abort:", e);
                  const t = e.target;
                  this.openDatabase((r = !0)),
                    t.onerror && t.onerror(e),
                    i.close();
                }),
                (i.onversionchange = (e) => {
                  this.log.error("onversionchange, lol?");
                }),
                e((this.db = i));
            }),
              (t.onerror = (e) => {
                (a = !0),
                  (this.storageIsAvailable = !1),
                  this.log.error(
                    "Error creating/accessing IndexedDB database",
                    e
                  ),
                  n(e);
              }),
              (t.onupgradeneeded = (e) => {
                (a = !0),
                  this.log.warn(
                    "performing idb upgrade from",
                    e.oldVersion,
                    "to",
                    e.newVersion
                  );
                var t = e.target.result;
                this.stores.forEach((e) => {
                  t.objectStoreNames.contains(e.name) ||
                    ((e, t) => {
                      var a;
                      const n = e.createObjectStore(t.name);
                      if (
                        null === (a = t.indexes) || void 0 === a
                          ? void 0
                          : a.length
                      )
                        for (const e of t.indexes)
                          n.createIndex(
                            e.indexName,
                            e.keyPath,
                            e.objectParameters
                          );
                    })(t, e);
                });
              });
          }))
        );
      }
      delete(e) {
        return (
          Array.isArray(e) || (e = [].concat(e)),
          this.getObjectStore("readwrite", (t) => e.map((e) => t.delete(e)), "")
        );
      }
      clear(e) {
        return this.getObjectStore("readwrite", (e) => e.clear(), "", e);
      }
      save(e, t) {
        return (
          Array.isArray(e) || ((e = [].concat(e)), (t = [].concat(t))),
          this.getObjectStore(
            "readwrite",
            (a) => e.map((e, n) => a.put(t[n], e)),
            ""
          )
        );
      }
      saveFile(e, t) {
        return t instanceof Blob || (t = Nt([t])), this.save(e, t);
      }
      get(e) {
        return (
          Array.isArray(e) || (e = [].concat(e)),
          this.getObjectStore("readonly", (t) => e.map((e) => t.get(e)), "")
        );
      }
      getObjectStore(e, t, a, n = this.storeName) {
        let s;
        return (
          a && ((s = performance.now()), this.log(a + ": start")),
          this.openDatabase().then(
            (i) =>
              new Promise((r, p) => {
                const o = i.transaction([n], e);
                (o.onerror = (e) => {
                  clearTimeout(m), p(o.error);
                }),
                  (o.oncomplete = (e) => {
                    clearTimeout(m),
                      a && this.log(a + ": end", performance.now() - s);
                    const t = c.map((e) => e.result);
                    r(y ? t : t[0]);
                  });
                const m = setTimeout(() => {
                    this.log.error("transaction not finished", o);
                  }, 1e4),
                  d = t(o.objectStore(n)),
                  y = Array.isArray(d),
                  c = y ? d : [].concat(d);
              })
          )
        );
      }
      getAll() {
        return this.getObjectStore("readonly", (e) => e.getAll(), "");
      }
    }
    Ot.STORAGES = [];
    var qt = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    const Gt = new (class {
      constructor() {
        (this.log = Xe("API")),
          (this.cachedNetworkers = {}),
          (this.cachedExportPromise = {}),
          (this.gettingNetworkers = {}),
          (this.baseDcId = 0),
          (this.afterMessageTempIds = {}),
          (this.transportType = i.transport),
          Ct.addEventListener("transport", (e) => {
            this.changeTransportType(e);
          });
      }
      getTransportType(e) {
        return this.transportType;
      }
      iterateNetworkers(e) {
        for (const t in this.cachedNetworkers) {
          const a = this.cachedNetworkers[t];
          for (const n in a) {
            const s = a[n];
            for (const a in s) {
              s[a].forEach((s, i, r) => {
                e({
                  networker: s,
                  dcId: +a,
                  connectionType: n,
                  transportType: t,
                  index: i,
                  array: r,
                });
              });
            }
          }
        }
      }
      chooseServer(e, t, a) {
        return kt.chooseServer(e, t, a, "client" === t);
      }
      changeTransportType(e) {
        const t = this.transportType;
        if (t === e) return;
        this.log("changing transport from", t, "to", e);
        const a = this.cachedNetworkers[t],
          n = this.cachedNetworkers[e];
        (this.cachedNetworkers[e] = a),
          (this.cachedNetworkers[t] = n),
          (this.transportType = e);
        for (const a in this.gettingNetworkers) {
          const n = this.gettingNetworkers[a];
          delete this.gettingNetworkers[a];
          const s = a.replace(t, e);
          (this.gettingNetworkers[s] = n),
            this.log("changed networker getKey from", a, "to", s);
        }
        this.iterateNetworkers((e) => {
          const t = this.getTransportType(e.connectionType),
            a = this.chooseServer(e.dcId, e.connectionType, t);
          this.changeNetworkerTransport(e.networker, a);
        });
      }
      getBaseDcId() {
        return qt(this, void 0, void 0, function* () {
          if (this.baseDcId) return this.baseDcId;
          const e = yield b.get("dc");
          return (
            this.baseDcId ||
              (e ? (this.baseDcId = e) : this.setBaseDcId(Ye.baseDcId)),
            this.baseDcId
          );
        });
      }
      setUserAuth(e) {
        return qt(this, void 0, void 0, function* () {
          if (!e.dcID) {
            const t = yield this.getBaseDcId();
            e.dcID = t;
          }
          b.set({ user_auth: e });
        });
      }
      setBaseDcId(e) {
        const t = this.baseDcId;
        t &&
          this.getNetworker(t).then((e) => {
            this.setOnDrainIfNeeded(e);
          }),
          (this.baseDcId = e),
          b.set({ dc: this.baseDcId });
      }
      logOut() {
        return qt(this, void 0, void 0, function* () {
          const e = [];
          for (let t = 1; t <= 5; t++) e.push("dc" + t + "_auth_key");
          const t = yield Promise.all(e.map((e) => b.get(e))),
            a = [];
          for (let e = 0; e < t.length; e++)
            t[e] &&
              a.push(
                this.invokeApi(
                  "auth.logOut",
                  {},
                  { dcId: e + 1, ignoreErrors: !0 }
                )
              );
          const n = () => {
            (this.baseDcId = void 0),
              Ot.closeDatabases(),
              self.postMessage({ type: "clear" });
          };
          return (
            setTimeout(n, 1e3),
            Promise.all(a)
              .catch((e) => {
                e.handled = !0;
              })
              .finally(n)
          );
        });
      }
      generateNetworkerGetKey(e, t, a) {
        return [e, t, a].join("-");
      }
      getNetworker(e, t = {}) {
        const a = t.fileDownload
            ? "download"
            : t.fileUpload
            ? "upload"
            : "client",
          n = this.getTransportType(a);
        this.cachedNetworkers[n] ||
          (this.cachedNetworkers[n] = { client: {}, download: {}, upload: {} });
        const s = this.cachedNetworkers[n][a];
        e in s || (s[e] = []);
        const i = s[e],
          r = "client" === a || "https" === n ? 1 : 3;
        if (i.length >= r) {
          let e = i.length - 1,
            t = !1;
          for (; e >= 0; --e)
            if (i[e].isOnline) {
              t = !0;
              break;
            }
          const a = t ? i.splice(e, 1)[0] : i.pop();
          return i.unshift(a), Promise.resolve(a);
        }
        let p = this.generateNetworkerGetKey(e, n, a);
        if (this.gettingNetworkers[p]) return this.gettingNetworkers[p];
        const o = `dc${e}_auth_key`,
          m = `dc${e}_server_salt`;
        let d = this.chooseServer(e, a, n);
        return (this.gettingNetworkers[p] = Promise.all(
          [o, m].map((e) => b.get(e))
        ).then(([s, r]) =>
          qt(this, void 0, void 0, function* () {
            let y, c;
            if (s && 512 === s.length) {
              (r && 16 === r.length) || (r = "AAAAAAAAAAAAAAAA");
              const a = ue(s),
                n = (yield De.invokeCrypto("sha1", a)).slice(-8),
                i = ue(r);
              y = Ut.getNetworker(e, a, n, i, t);
            } else
              try {
                const a = yield Lt.auth(e);
                b.set({ [o]: P(a.authKey), [m]: P(a.serverSalt) }),
                  (y = Ut.getNetworker(
                    e,
                    a.authKey,
                    a.authKeyId,
                    a.serverSalt,
                    t
                  ));
              } catch (e) {
                c = e;
              }
            const l = this.getTransportType(a);
            if (
              (l !== n &&
                ((p = this.generateNetworkerGetKey(e, l, a)),
                d.destroy(),
                St.removeTransport(kt.chosenServers, d),
                y && (d = this.chooseServer(e, a, l)),
                this.log(
                  "transport has been changed during authorization from",
                  n,
                  "to",
                  l
                )),
              delete this.gettingNetworkers[p],
              c)
            )
              throw (this.log("get networker error", c, c.stack), c);
            return (
              this.changeNetworkerTransport(y, d),
              i.unshift(y),
              this.setOnDrainIfNeeded(y),
              y
            );
          })
        ));
      }
      changeNetworkerTransport(e, t) {
        const a = e.transport;
        a && St.removeTransport(kt.chosenServers, a), e.changeTransport(t);
      }
      setOnDrainIfNeeded(e) {
        if (e.onDrain) return;
        (e.isFileNetworker
          ? Promise.resolve(!0)
          : this.getBaseDcId().then((t) => e.dcId !== t)
        ).then((t) => {
          e.onDrain ||
            (t &&
              ((e.onDrain = () => {
                this.log("networker drain", e.dcId),
                  (e.onDrain = void 0),
                  e.destroy(),
                  Ut.removeNetworker(e),
                  St.removeTransport(this.cachedNetworkers, e);
              }),
              e.setDrainTimeout()));
        });
      }
      invokeApi(e, t = {}, a = {}) {
        const n = at();
        let { afterMessageId: s, prepareTempMessageId: i } = a;
        if (
          (i &&
            n.then(() => {
              delete this.afterMessageTempIds[i];
            }),
          p)
        ) {
          const s = Date.now(),
            i = xe.setInterval(() => {
              (m && m.isStopped()) ||
                this.log.error(
                  "Request is still processing:",
                  e,
                  t,
                  a,
                  "time:",
                  (Date.now() - s) / 1e3
                );
            }, 5e3);
          n.catch(et).finally(() => {
            clearInterval(i);
          });
        }
        const r = (t) => {
          t ? S(t) || (t = { message: t }) : (t = { type: "ERROR_EMPTY" }),
            n.reject(t),
            ((401 === t.code && "SESSION_REVOKED" === t.type) ||
              (406 === t.code && "AUTH_KEY_DUPLICATED" === t.type)) &&
              this.logOut(),
            a.ignoreErrors ||
              (406 === t.code && (t.handled = !0),
              a.noErrorBox ||
                ((t.input = e),
                (t.stack =
                  d ||
                  (t.originalError && t.originalError.stack) ||
                  t.stack ||
                  new Error().stack),
                setTimeout(() => {
                  t.handled ||
                    (401 === t.code && this.logOut(), (t.handled = !0));
                }, 100)));
        };
        let o,
          m,
          d = new Error().stack || "empty stack";
        const y = (p) => {
          if (s) {
            const e = this.afterMessageTempIds[s];
            e && (a.afterMessageId = e.messageId);
          }
          const d = (m = p).wrapApiCall(e, t, a);
          return (
            i &&
              (this.afterMessageTempIds[i] = {
                messageId: a.messageId,
                promise: n,
              }),
            d.then(n.resolve, (i) => {
              if (
                ("FILE_REFERENCE_EXPIRED" !== i.type &&
                  this.log.error(
                    "Error",
                    i.code,
                    i.type,
                    this.baseDcId,
                    o,
                    e,
                    t
                  ),
                401 === i.code && this.baseDcId === o)
              )
                "SESSION_PASSWORD_NEEDED" !== i.type &&
                  (b.delete("dc"), b.delete("user_auth")),
                  r(i);
              else if (401 === i.code && this.baseDcId && o !== this.baseDcId) {
                if (void 0 === this.cachedExportPromise[o]) {
                  const e = new Promise((e, t) => {
                    this.invokeApi(
                      "auth.exportAuthorization",
                      { dc_id: o },
                      { noErrorBox: !0 }
                    ).then((a) => {
                      this.invokeApi(
                        "auth.importAuthorization",
                        { id: a.id, bytes: a.bytes },
                        { dcId: o, noErrorBox: !0 }
                      ).then(e, t);
                    }, t);
                  });
                  this.cachedExportPromise[o] = e;
                }
                this.cachedExportPromise[o].then(() => {
                  this.invokeApi(e, t, a).then(n.resolve, r);
                }, r);
              } else if (303 === i.code) {
                const s = +i.type.match(
                  /^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/
                )[2];
                s !== o &&
                  (a.dcId ? (a.dcId = s) : this.setBaseDcId(s),
                  this.getNetworker(s, a).then((s) => {
                    s.wrapApiCall(e, t, a).then(n.resolve, r);
                  }, r));
              } else if (
                400 === i.code &&
                0 === i.type.indexOf("FILE_MIGRATE")
              ) {
                const s = +i.type.match(/^(FILE_MIGRATE_)(\d+)/)[2];
                s !== o
                  ? this.getNetworker(s, a).then((s) => {
                      s.wrapApiCall(e, t, a).then(n.resolve, r);
                    }, r)
                  : r(i);
              } else if (400 === i.code && "CONNECTION_NOT_INITED" === i.type)
                Ut.unsetConnectionInited(), y(m);
              else if (a.rawError || 420 !== i.code)
                if (
                  !a.rawError &&
                  ["MSG_WAIT_FAILED", "MSG_WAIT_TIMEOUT"].includes(i.type)
                ) {
                  const e = this.afterMessageTempIds[s];
                  (s = void 0),
                    delete a.afterMessageId,
                    e ? e.promise.then(() => y(m)) : y(m);
                } else if (a.rawError || 500 !== i.code)
                  "UNKNOWN" === i.type
                    ? setTimeout(() => {
                        y(m);
                      }, 1e3)
                    : r(i);
                else {
                  const e = Date.now();
                  if (a.stopTime && e >= a.stopTime) return r(i);
                  (a.waitTime = a.waitTime
                    ? Math.min(60, 1.5 * a.waitTime)
                    : 1),
                    setTimeout(() => {
                      y(m);
                    }, 1e3 * a.waitTime);
                }
              else {
                const e = +i.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 1;
                if (
                  e > (void 0 !== a.floodMaxTimeout ? a.floodMaxTimeout : 60) &&
                  !a.prepareTempMessageId
                )
                  return r(i);
                setTimeout(() => {
                  y(m);
                }, 1e3 * e);
              }
            })
          );
        };
        return (
          (o = a.dcId || this.baseDcId)
            ? this.getNetworker(o, a).then(y, r)
            : this.getBaseDcId().then((e) => {
                this.getNetworker((o = e), a).then(y, r);
              }),
          n
        );
      }
    })();
    p.apiManager = Gt;
    var Kt = Gt;
    function jt(e) {
      return (function (e, t) {
        return new Promise((a) => {
          const n = new FileReader();
          n.addEventListener("loadend", (e) => {
            a(e.target.result);
          }),
            n[t](e);
        });
      })(e, "readAsArrayBuffer");
    }
    var zt = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    var Ht = new (class {
        constructor() {
          this.blobSupported = !0;
          try {
            Nt([], "");
          } catch (e) {
            this.blobSupported = !1;
          }
        }
        isAvailable() {
          return this.blobSupported;
        }
        write(e, t) {
          return t instanceof Blob
            ? ((a = t), jt(a).then((e) => new Uint8Array(e))).then((t) =>
                e.write(t)
              )
            : e.write(t);
          var a;
        }
        getFakeFileWriter(e, t) {
          const a = [];
          return {
            write: (e) =>
              zt(this, void 0, void 0, function* () {
                if (!this.blobSupported) throw !1;
                a.push(e);
              }),
            truncate: () => {
              a.length = 0;
            },
            finalize: (n = !0) => {
              const s = Nt(a, e);
              return n && t && t(s), s;
            },
          };
        }
      })(),
      Wt = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    class Jt {
      constructor(e) {
        (this.dbName = e),
          (this.useStorage = !0),
          i.test && (this.dbName += "_test"),
          Jt.STORAGES.length && (this.useStorage = Jt.STORAGES[0].useStorage),
          this.openDatabase(),
          Jt.STORAGES.push(this);
      }
      openDatabase() {
        var e;
        return null !== (e = this.openDbPromise) && void 0 !== e
          ? e
          : (this.openDbPromise = caches.open(this.dbName));
      }
      delete(e) {
        return this.timeoutOperation((t) => t.delete("/" + e));
      }
      deleteAll() {
        return caches.delete(this.dbName);
      }
      get(e) {
        return this.timeoutOperation((t) => t.match("/" + e));
      }
      save(e, t) {
        return this.timeoutOperation((a) => a.put("/" + e, t));
      }
      getFile(e, t = "blob") {
        return this.get(e).then((e) => {
          if (!e) throw "NO_ENTRY_FOUND";
          return e[t]();
        });
      }
      saveFile(e, t) {
        t instanceof Blob || (t = Nt(t));
        const a = new Response(t, {
          headers: { "Content-Length": "" + t.size },
        });
        return this.save(e, a).then(() => t);
      }
      timeoutOperation(e) {
        return this.useStorage
          ? new Promise((t, a) =>
              Wt(this, void 0, void 0, function* () {
                let n = !1;
                const s = setTimeout(() => {
                  a(), (n = !0);
                }, 15e3);
                try {
                  const a = yield this.openDatabase();
                  if (!a)
                    throw (
                      ((this.useStorage = !1),
                      (this.openDbPromise = void 0),
                      "no cache?")
                    );
                  const s = yield e(a);
                  if (n) return;
                  t(s);
                } catch (e) {
                  a(e);
                }
                clearTimeout(s);
              })
            )
          : Promise.reject("STORAGE_OFFLINE");
      }
      getFileWriter(e, t) {
        const a = Ht.getFakeFileWriter(t, (t) =>
          this.saveFile(e, t).catch(() => t)
        );
        return Promise.resolve(a);
      }
      static toggleStorage(e) {
        return Promise.all(
          this.STORAGES.map((t) => {
            if (((t.useStorage = e), !e)) return t.deleteAll();
          })
        );
      }
    }
    Jt.STORAGES = [];
    var Zt = function (e, t, a, n) {
      return new (a || (a = Promise))(function (s, i) {
        function r(e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function p(e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof a
                ? t
                : new a(function (e) {
                    e(t);
                  })).then(r, p);
        }
        o((n = n.apply(e, t || [])).next());
      });
    };
    const Qt = new (class {
      constructor() {
        (this.cacheStorage = new Jt("cachedFiles")),
          (this.cachedDownloadPromises = {}),
          (this.uploadPromises = {}),
          (this.downloadPulls = {}),
          (this.downloadActives = {}),
          (this.webpConvertPromises = {}),
          (this.refreshReferencePromises = {}),
          (this.log = Xe("AFM", Oe.Error | Oe.Log)),
          (this.tempId = 0),
          (this.queueId = 0),
          (this.debug = i.debug),
          (this.uncompressTGS = (e, t) =>
            De.invokeCrypto("gzipUncompress", e.slice().buffer, !0)),
          (this.uncompressTGV = (e, t) =>
            De.invokeCrypto("gzipUncompress", e.slice().buffer, !0)),
          (this.convertWebp = (e, t) => {
            const a = at();
            return (
              u({ type: "convertWebp", payload: { fileName: t, bytes: e } }),
              (this.webpConvertPromises[t] = a)
            );
          }),
          setInterval(() => {
            for (const e in this.refreshReferencePromises) {
              const { deferred: t } = this.refreshReferencePromises[e];
              (t.isFulfilled || t.isRejected) &&
                delete this.refreshReferencePromises[e];
            }
          }, 18e5);
      }
      downloadRequest(e, t, a, n, s = 0) {
        void 0 === this.downloadPulls[e] &&
          ((this.downloadPulls[e] = []), (this.downloadActives[e] = 0));
        const i = this.downloadPulls[e],
          r = new Promise((e, r) => {
            i.push({
              id: t,
              queueId: s,
              cb: a,
              deferred: { resolve: e, reject: r },
              activeDelta: n,
            });
          });
        return (
          setTimeout(() => {
            this.downloadCheck(e);
          }, 0),
          r
        );
      }
      downloadCheck(e) {
        const t = this.downloadPulls[e],
          a = "upload" === e ? 24 : 36;
        if (this.downloadActives[e] >= a || !t || !t.length) return !1;
        const n =
            nt(t, (e) => 0 === e.queueId) ||
            nt(t, (e) => e.queueId === this.queueId) ||
            t.shift(),
          s = n.activeDelta || 1;
        (this.downloadActives[e] += s),
          n.cb().then(
            (t) => {
              (this.downloadActives[e] -= s),
                this.downloadCheck(e),
                n.deferred.resolve(t);
            },
            (t) => {
              (t &&
                t.type &&
                ("DOWNLOAD_CANCELED" === t.type ||
                  "UPLOAD_CANCELED" === t.type)) ||
                this.log.error("downloadCheck error:", t),
                (this.downloadActives[e] -= s),
                this.downloadCheck(e),
                n.deferred.reject(t);
            }
          );
      }
      setQueueId(e) {
        this.queueId = e;
      }
      getFileStorage() {
        return this.cacheStorage;
      }
      cancelDownload(e) {
        const t =
          (this.cachedDownloadPromises[e]
            ? [this.cachedDownloadPromises[e]]
            : void 0) ||
          (this.uploadPromises[e] ? Array.from(this.uploadPromises[e]) : []);
        let a = !1;
        for (let e = 0, n = t.length; e < n; ++e) {
          const n = t[e];
          !n || n.isRejected || n.isFulfilled || (n.cancel(), (a = !0));
        }
        return a;
      }
      requestWebFilePart(e, t, a, n, s = 0, i = 0, r) {
        return this.downloadRequest(
          e,
          s,
          () =>
            Zt(this, void 0, void 0, function* () {
              return (
                r && r(),
                Kt.invokeApi(
                  "upload.getWebFile",
                  { location: t, offset: a, limit: n },
                  { dcId: e, fileDownload: !0 }
                )
              );
            }),
          this.getDelta(n),
          i
        );
      }
      requestFilePart(e, t, a, n, s = 0, i = 0, r) {
        return this.downloadRequest(
          e,
          s,
          () =>
            Zt(this, void 0, void 0, function* () {
              r && r();
              const s = () =>
                  Zt(this, void 0, void 0, function* () {
                    r && r();
                    return Kt.invokeApi(
                      "upload.getFile",
                      { location: t, offset: a, limit: n },
                      { dcId: e, fileDownload: !0 }
                    ).catch((e) => {
                      if ("FILE_REFERENCE_EXPIRED" === e.type)
                        return this.refreshReference(t).then(s);
                      throw e;
                    });
                  }),
                i = t.file_reference;
              if (i && !t.checkedReference) {
                t.checkedReference = !0;
                const e = P(i);
                if (this.refreshReferencePromises[e])
                  return this.refreshReference(t).then(s);
              }
              return s();
            }),
          this.getDelta(n),
          i
        );
      }
      getDelta(e) {
        return e / 1024 / 128;
      }
      getLimitPart(e) {
        let t;
        return (t = 512), 524288;
      }
      refreshReference(e) {
        const t = e.file_reference,
          a = P(t);
        let n = this.refreshReferencePromises[a];
        if (!n) {
          const s = at();
          (n = this.refreshReferencePromises[a] =
            {
              deferred: s,
              timeout: xe.setTimeout(() => {
                this.log.error("Didn't refresh the reference:", e),
                  s.reject("REFERENCE_IS_NOT_REFRESHED");
              }, 6e4),
            }),
            s.catch(et).finally(() => {
              clearTimeout(n.timeout);
            });
          u({ type: "refreshReference", payload: t });
        }
        return n.deferred.then((t) => {
          if (a === P(t)) throw "REFERENCE_IS_NOT_REFRESHED";
          e.file_reference = t;
        });
      }
      downloadFile(e) {
        var t;
        if (!Ht.isAvailable())
          return Promise.reject({ type: "BROWSER_BLOB_NOT_SUPPORTED" });
        const a = null !== (t = e.size) && void 0 !== t ? t : 0,
          { dcId: n, location: s } = e;
        let i;
        "application/x-tgwallpattern" === e.mimeType
          ? ((i = this.uncompressTGV), (e.mimeType = "image/svg+xml"))
          : "image/webp" !== e.mimeType || ea()
          ? "application/x-tgsticker" === e.mimeType &&
            ((i = this.uncompressTGS), (e.mimeType = "application/json"))
          : ((i = this.convertWebp), (e.mimeType = "image/png"));
        const r = (function (e, t) {
            const a = ""["".length - 1] || "";
            let n;
            switch (e._) {
              case "inputPhotoFileLocation":
                n = ["photo", ""[0], e.id, e.thumb_size]
                  .filter(Boolean)
                  .join("_");
                break;
              case "inputDocumentFileLocation":
                n = ["document", ""[0], e.id, e.thumb_size]
                  .filter(Boolean)
                  .join("_");
                break;
              case "inputPeerPhotoFileLocation":
                n = [
                  "peerPhoto",
                  e.photo_id,
                  e.pFlags.big ? "big" : "small",
                ].join("_");
                break;
              case "inputStickerSetThumb":
                n = [
                  "stickerSetThumb",
                  e.stickerset.id ||
                    e.stickerset.short_name ||
                    e.stickerset.emoticon ||
                    e.stickerset._,
                  e.thumb_version,
                ].join("_");
                break;
              case "inputFileLocation":
                n = e.volume_id + "_" + e.local_id;
                break;
              case "inputWebFileLocation":
                n = ["webFile", e.url].join("_");
                break;
              default:
                console.error("Unrecognized location:", e), (n = "");
            }
            return n + (a ? "." + a : a);
          })(s, e.fileName),
          p = this.cachedDownloadPromises[r],
          o = this.getFileStorage();
        if ((this.debug && this.log("downloadFile", r, a, s, e.mimeType), p))
          return a
            ? p.then((t) =>
                t instanceof Blob && t.size < a
                  ? (this.debug &&
                      this.log(
                        "downloadFile need to deleteFile, wrong size:",
                        t.size,
                        a
                      ),
                    this.deleteFile(r)
                      .then(() => this.downloadFile(e))
                      .catch(() => this.downloadFile(e)))
                  : t
              )
            : p;
        const m = at(),
          d = e.mimeType || "image/jpeg";
        let y,
          c,
          l = !1,
          g = (e) => {
            (y = e),
              delete this.cachedDownloadPromises[r],
              m.reject(y),
              (g = () => {}),
              !c || (y && "DOWNLOAD_CANCELED" === y.type) || c.truncate();
          };
        const u = this.tempId++;
        o.getFile(r)
          .then((e) =>
            Zt(this, void 0, void 0, function* () {
              if (e.size < a) throw (yield this.deleteFile(r), !1);
              m.resolve(e);
            })
          )
          .catch(() => {
            o.getFileWriter(r, d)
              .then((t) => {
                c = t;
                const p = e.limitPart || this.getLimitPart(a);
                let o,
                  d,
                  y = Promise.resolve();
                const h = (e, t) =>
                    Zt(this, void 0, void 0, function* () {
                      if (i) {
                        return yield i(e, r);
                      }
                      return e;
                    }),
                  _ =
                    "inputWebFileLocation" === s._
                      ? this.requestWebFilePart.bind(this)
                      : this.requestFilePart.bind(this),
                  v = [];
                o = 0;
                do {
                  (d = at()),
                    v.push({
                      offset: o,
                      writeFilePromise: y,
                      writeFileDeferred: d,
                    }),
                    (y = d),
                    (o += p);
                } while (o < a);
                let b = 0;
                const w = () =>
                  Zt(this, void 0, void 0, function* () {
                    const {
                      offset: i,
                      writeFilePromise: o,
                      writeFileDeferred: d,
                    } = v.shift();
                    try {
                      f();
                      const y = yield _(n, s, i, p, u, e.queueId, f),
                        c = y.bytes;
                      v.length && w(),
                        this.debug &&
                          this.log(
                            "downloadFile requestFilePart result:",
                            r,
                            y
                          );
                      const g = i + p >= a || !c.byteLength;
                      if (c.byteLength) {
                        (b += c.byteLength),
                          m.notify({ done: b, offset: i, total: a });
                        const e = yield h(c);
                        f(), yield o, f(), yield Ht.write(t, e);
                      }
                      d.resolve(),
                        g && ((l = !0), m.resolve(t.finalize(a < 20971520)));
                    } catch (e) {
                      g(e);
                    }
                  });
                for (let e = 0, t = Math.min(1 / 0, v.length); e < t; ++e) w();
              })
              .catch((e) => {
                ["STORAGE_OFFLINE"].includes(e) ||
                  this.log.error("saveFile error:", e);
              });
          });
        const f = () => {
          if (y) throw y;
        };
        return (
          (m.cancel = () => {
            if (!y && !l) {
              const e = new Error("Canceled");
              (e.type = "DOWNLOAD_CANCELED"), g(e);
            }
          }),
          (m.notify = (e) => {
            h({ progress: Object.assign({ fileName: r }, e) });
          }),
          (this.cachedDownloadPromises[r] = m),
          m.catch(et).finally(() => {
            delete this.cachedDownloadPromises[r];
          }),
          m
        );
      }
      deleteFile(e) {
        return (
          delete this.cachedDownloadPromises[e], this.getFileStorage().delete(e)
        );
      }
      uploadFile({ file: e, fileName: t }) {
        var a;
        const n = e.size,
          s = n >= 10485760;
        let i = !1,
          r = !1,
          p = 0,
          o = 262144;
        n > 67108864 ? (o = 524288) : n < 102400 && (o = 32768);
        const m = this.getDelta(o),
          d = Math.ceil(n / o),
          y = we();
        let c = 0;
        const l = {
            _: s ? "inputFileBig" : "inputFile",
            id: y,
            parts: d,
            name: t,
            md5_checksum: "",
          },
          g = { notify: (e) => {} },
          u = new Promise((e, t) => {
            if (d > 4e3) return t({ type: "FILE_TOO_BIG" });
            (g.resolve = e), (g.reject = t);
          });
        if ((Object.assign(u, g), d > 4e3)) return u;
        let f = (e) => {
          "UPLOAD_CANCELED" !== (null == e ? void 0 : e.type) &&
            this.log.error("Up Error", e),
            u.reject(e),
            (i = !0),
            (f = () => {});
        };
        const _ = s ? "upload.saveBigFilePart" : "upload.saveFilePart",
          v = this.tempId++,
          b = this;
        const w = (function* () {
            for (let t = 0; t < n; t += o) {
              const a = c++;
              yield b
                .downloadRequest(
                  "upload",
                  v,
                  () =>
                    jt(e.slice(t, t + o)).then((e) => {
                      if (i) throw { type: "UPLOAD_CANCELED" };
                      return (
                        b.debug &&
                          b.log(
                            "Upload file part, isBig:",
                            s,
                            a,
                            e.byteLength,
                            new Uint8Array(e).length,
                            new Uint8Array(e).slice().length
                          ),
                        Kt.invokeApi(
                          _,
                          {
                            file_id: y,
                            file_part: a,
                            file_total_parts: d,
                            bytes: e,
                          },
                          { fileUpload: !0 }
                        ).then((e) => {
                          p++,
                            u.notify({ done: p * o, total: n }),
                            p >= d && (u.resolve(l), (r = !0));
                        }, f)
                      );
                    }),
                  m
                )
                .catch(f);
            }
          })(),
          P = () => {
            if (i) return;
            const e = w.next();
            e.done || i || e.value.then(P);
          };
        for (let e = 0, t = Math.min(1 / 0, d); e < t; ++e) P();
        (u.cancel = () => {
          i || r || ((i = !0), f({ type: "UPLOAD_CANCELED" }));
        }),
          (u.notify = (e) => {
            h({ progress: Object.assign({ fileName: t }, e) });
          }),
          u.finally(() => {
            S.delete(u), S.size || delete this.uploadPromises[t];
          });
        const S =
          null !== (a = this.uploadPromises[t]) && void 0 !== a
            ? a
            : (this.uploadPromises[t] = new Set());
        return S.add(u), u;
      }
    })();
    p.apiFileManager = Qt;
    var Xt = Qt,
      $t = function (e, t, a, n) {
        return new (a || (a = Promise))(function (s, i) {
          function r(e) {
            try {
              o(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function p(e) {
            try {
              o(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })).then(r, p);
          }
          o((n = n.apply(e, t || [])).next());
        });
      };
    let Yt = !1;
    const ea = () => Yt;
    Ut.setUpdatesProcessor((e) => {
      h({ update: e });
    }),
      (Ut.onConnectionStatusChange = (e) => {
        h({ type: "connectionStatusChange", payload: e });
      });
    const ta = {
      convertWebp: (e) => {
        const { fileName: t, bytes: a } = e.payload,
          n = Xt.webpConvertPromises[t];
        n && (n.resolve(a), delete Xt.webpConvertPromises[t]);
      },
      webpSupport: (e) => {
        Yt = e.payload;
      },
      socketProxy: (e) => {
        const t = e.payload,
          a = t.id,
          n = wt.get(a);
        "message" === t.type
          ? n.dispatchEvent("message", t.payload)
          : "open" === t.type
          ? n.dispatchEvent("open")
          : "close" === t.type && (n.dispatchEvent("close"), wt.delete(a));
      },
      localStorageProxy: (e) => {
        b.finishTask(e.id, e.payload);
      },
      userAgent: (e) => {
        Ut.userAgent = e.payload;
      },
      online: () => {
        Ut.forceReconnectTimeout();
      },
      forceReconnect: () => {
        Ut.forceReconnect();
      },
      toggleStorage: (e) => {
        const t = e.payload;
        Jt.toggleStorage(t);
      },
      refreshReference: (e) => {
        const t = P(e.originalPayload),
          a = Xt.refreshReferencePromises[t],
          n = null == a ? void 0 : a.deferred;
        n && (e.error ? n.reject(e.error) : n.resolve(e.payload));
      },
      crypto: (e) => {
        De.invokeCrypto(e.task, ...e.args).then((t) => {
          h({ taskId: e.taskId, result: t });
        });
      },
    };
    xe.addEventListener("message", (e) =>
      $t(void 0, void 0, void 0, function* () {
        try {
          const t = e.data,
            a = t.taskId,
            n = ta[t.type];
          if (n) return void n(t);
          if (!t.task) return;
          switch (t.task) {
            case "requestFilePart":
            case "setQueueId":
            case "cancelDownload":
            case "uploadFile":
            case "downloadFile":
              try {
                let e = Xt[t.task].apply(Xt, t.args);
                e instanceof Promise && (e = yield e),
                  h({ taskId: a, result: e });
              } catch (e) {
                h({ taskId: a, error: e });
              }
              break;
            case "getNetworker":
              Kt[t.task].apply(Kt, t.args).finally(() => {
                h({ taskId: a, result: null });
              });
              break;
            case "setLanguage":
            case "startAll":
            case "stopAll":
              Ut[t.task].apply(Ut, t.args);
              break;
            default:
              try {
                let e = Kt[t.task].apply(Kt, t.args);
                e instanceof Promise && (e = yield e),
                  h({ taskId: a, result: e });
              } catch (e) {
                h({ taskId: a, error: e });
              }
          }
        } catch (e) {
          console.error("worker task error:", e);
        }
      })
    ),
      h("ready");
  },
]);
//# sourceMappingURL=mtproto.worker.b9472a3acd835ec21780.bundle.worker.js.map
