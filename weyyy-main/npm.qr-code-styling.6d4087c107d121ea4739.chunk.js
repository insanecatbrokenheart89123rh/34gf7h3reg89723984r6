(this.webpackJsonp = this.webpackJsonp || []).push([
  [11],
  {
    200: function (t, r, e) {
      self,
        (t.exports = (() => {
          var t = {
              192: (t, r) => {
                var e,
                  n,
                  o = (function () {
                    var t = function (t, r) {
                      var e = t,
                        n = a[r],
                        o = null,
                        i = 0,
                        u = null,
                        v = [],
                        y = {},
                        x = function (t, r) {
                          (o = (function (t) {
                            for (var r = new Array(t), e = 0; e < t; e += 1) {
                              r[e] = new Array(t);
                              for (var n = 0; n < t; n += 1) r[e][n] = null;
                            }
                            return r;
                          })((i = 4 * e + 17))),
                            b(0, 0),
                            b(i - 7, 0),
                            b(0, i - 7),
                            M(),
                            _(),
                            O(t, r),
                            e >= 7 && m(t),
                            null == u && (u = k(e, n, v)),
                            S(u, r);
                        },
                        b = function (t, r) {
                          for (var e = -1; e <= 7; e += 1)
                            if (!(t + e <= -1 || i <= t + e))
                              for (var n = -1; n <= 7; n += 1)
                                r + n <= -1 ||
                                  i <= r + n ||
                                  (o[t + e][r + n] =
                                    (0 <= e && e <= 6 && (0 == n || 6 == n)) ||
                                    (0 <= n && n <= 6 && (0 == e || 6 == e)) ||
                                    (2 <= e && e <= 4 && 2 <= n && n <= 4));
                        },
                        _ = function () {
                          for (var t = 8; t < i - 8; t += 1)
                            null == o[t][6] && (o[t][6] = t % 2 == 0);
                          for (var r = 8; r < i - 8; r += 1)
                            null == o[6][r] && (o[6][r] = r % 2 == 0);
                        },
                        M = function () {
                          for (
                            var t = s.getPatternPosition(e), r = 0;
                            r < t.length;
                            r += 1
                          )
                            for (var n = 0; n < t.length; n += 1) {
                              var i = t[r],
                                a = t[n];
                              if (null == o[i][a])
                                for (var u = -2; u <= 2; u += 1)
                                  for (var c = -2; c <= 2; c += 1)
                                    o[i + u][a + c] =
                                      -2 == u ||
                                      2 == u ||
                                      -2 == c ||
                                      2 == c ||
                                      (0 == u && 0 == c);
                            }
                        },
                        m = function (t) {
                          for (
                            var r = s.getBCHTypeNumber(e), n = 0;
                            n < 18;
                            n += 1
                          ) {
                            var a = !t && 1 == ((r >> n) & 1);
                            o[Math.floor(n / 3)][(n % 3) + i - 8 - 3] = a;
                          }
                          for (n = 0; n < 18; n += 1)
                            (a = !t && 1 == ((r >> n) & 1)),
                              (o[(n % 3) + i - 8 - 3][Math.floor(n / 3)] = a);
                        },
                        O = function (t, r) {
                          for (
                            var e = (n << 3) | r,
                              a = s.getBCHTypeInfo(e),
                              u = 0;
                            u < 15;
                            u += 1
                          ) {
                            var c = !t && 1 == ((a >> u) & 1);
                            u < 6
                              ? (o[u][8] = c)
                              : u < 8
                              ? (o[u + 1][8] = c)
                              : (o[i - 15 + u][8] = c);
                          }
                          for (u = 0; u < 15; u += 1)
                            (c = !t && 1 == ((a >> u) & 1)),
                              u < 8
                                ? (o[8][i - u - 1] = c)
                                : u < 9
                                ? (o[8][15 - u - 1 + 1] = c)
                                : (o[8][15 - u - 1] = c);
                          o[i - 8][8] = !t;
                        },
                        S = function (t, r) {
                          for (
                            var e = -1,
                              n = i - 1,
                              a = 7,
                              u = 0,
                              c = s.getMaskFunction(r),
                              h = i - 1;
                            h > 0;
                            h -= 2
                          )
                            for (6 == h && (h -= 1); ; ) {
                              for (var f = 0; f < 2; f += 1)
                                if (null == o[n][h - f]) {
                                  var d = !1;
                                  u < t.length && (d = 1 == ((t[u] >>> a) & 1)),
                                    c(n, h - f) && (d = !d),
                                    (o[n][h - f] = d),
                                    -1 == (a -= 1) && ((u += 1), (a = 7));
                                }
                              if ((n += e) < 0 || i <= n) {
                                (n -= e), (e = -e);
                                break;
                              }
                            }
                        },
                        k = function (t, r, e) {
                          for (
                            var n = h.getRSBlocks(t, r), o = f(), i = 0;
                            i < e.length;
                            i += 1
                          ) {
                            var a = e[i];
                            o.put(a.getMode(), 4),
                              o.put(
                                a.getLength(),
                                s.getLengthInBits(a.getMode(), t)
                              ),
                              a.write(o);
                          }
                          var u = 0;
                          for (i = 0; i < n.length; i += 1) u += n[i].dataCount;
                          if (o.getLengthInBits() > 8 * u)
                            throw (
                              "code length overflow. (" +
                              o.getLengthInBits() +
                              ">" +
                              8 * u +
                              ")"
                            );
                          for (
                            o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4);
                            o.getLengthInBits() % 8 != 0;

                          )
                            o.putBit(!1);
                          for (
                            ;
                            !(
                              o.getLengthInBits() >= 8 * u ||
                              (o.put(236, 8), o.getLengthInBits() >= 8 * u)
                            );

                          )
                            o.put(17, 8);
                          return (function (t, r) {
                            for (
                              var e = 0,
                                n = 0,
                                o = 0,
                                i = new Array(r.length),
                                a = new Array(r.length),
                                u = 0;
                              u < r.length;
                              u += 1
                            ) {
                              var h = r[u].dataCount,
                                f = r[u].totalCount - h;
                              (n = Math.max(n, h)),
                                (o = Math.max(o, f)),
                                (i[u] = new Array(h));
                              for (var d = 0; d < i[u].length; d += 1)
                                i[u][d] = 255 & t.getBuffer()[d + e];
                              e += h;
                              var l = s.getErrorCorrectPolynomial(f),
                                g = c(i[u], l.getLength() - 1).mod(l);
                              for (
                                a[u] = new Array(l.getLength() - 1), d = 0;
                                d < a[u].length;
                                d += 1
                              ) {
                                var p = d + g.getLength() - a[u].length;
                                a[u][d] = p >= 0 ? g.getAt(p) : 0;
                              }
                            }
                            var v = 0;
                            for (d = 0; d < r.length; d += 1)
                              v += r[d].totalCount;
                            var y = new Array(v),
                              w = 0;
                            for (d = 0; d < n; d += 1)
                              for (u = 0; u < r.length; u += 1)
                                d < i[u].length && ((y[w] = i[u][d]), (w += 1));
                            for (d = 0; d < o; d += 1)
                              for (u = 0; u < r.length; u += 1)
                                d < a[u].length && ((y[w] = a[u][d]), (w += 1));
                            return y;
                          })(o, n);
                        };
                      (y.addData = function (t, r) {
                        var e = null;
                        switch ((r = r || "Byte")) {
                          case "Numeric":
                            e = d(t);
                            break;
                          case "Alphanumeric":
                            e = l(t);
                            break;
                          case "Byte":
                            e = g(t);
                            break;
                          case "Kanji":
                            e = p(t);
                            break;
                          default:
                            throw "mode:" + r;
                        }
                        v.push(e), (u = null);
                      }),
                        (y.isDark = function (t, r) {
                          if (t < 0 || i <= t || r < 0 || i <= r)
                            throw t + "," + r;
                          return o[t][r];
                        }),
                        (y.getModuleCount = function () {
                          return i;
                        }),
                        (y.make = function () {
                          if (e < 1) {
                            for (var t = 1; t < 40; t++) {
                              for (
                                var r = h.getRSBlocks(t, n), o = f(), i = 0;
                                i < v.length;
                                i++
                              ) {
                                var a = v[i];
                                o.put(a.getMode(), 4),
                                  o.put(
                                    a.getLength(),
                                    s.getLengthInBits(a.getMode(), t)
                                  ),
                                  a.write(o);
                              }
                              var u = 0;
                              for (i = 0; i < r.length; i++)
                                u += r[i].dataCount;
                              if (o.getLengthInBits() <= 8 * u) break;
                            }
                            e = t;
                          }
                          x(
                            !1,
                            (function () {
                              for (var t = 0, r = 0, e = 0; e < 8; e += 1) {
                                x(!0, e);
                                var n = s.getLostPoint(y);
                                (0 == e || t > n) && ((t = n), (r = e));
                              }
                              return r;
                            })()
                          );
                        }),
                        (y.createTableTag = function (t, r) {
                          t = t || 2;
                          var e = "";
                          (e += '<table style="'),
                            (e += " border-width: 0px; border-style: none;"),
                            (e += " border-collapse: collapse;"),
                            (e +=
                              " padding: 0px; margin: " +
                              (r = void 0 === r ? 4 * t : r) +
                              "px;"),
                            (e += '">'),
                            (e += "<tbody>");
                          for (var n = 0; n < y.getModuleCount(); n += 1) {
                            e += "<tr>";
                            for (var o = 0; o < y.getModuleCount(); o += 1)
                              (e += '<td style="'),
                                (e +=
                                  " border-width: 0px; border-style: none;"),
                                (e += " border-collapse: collapse;"),
                                (e += " padding: 0px; margin: 0px;"),
                                (e += " width: " + t + "px;"),
                                (e += " height: " + t + "px;"),
                                (e += " background-color: "),
                                (e += y.isDark(n, o) ? "#000000" : "#ffffff"),
                                (e += ";"),
                                (e += '"/>');
                            e += "</tr>";
                          }
                          return (e += "</tbody>") + "</table>";
                        }),
                        (y.createSvgTag = function (t, r, e, n) {
                          var o = {};
                          "object" == typeof arguments[0] &&
                            ((t = (o = arguments[0]).cellSize),
                            (r = o.margin),
                            (e = o.alt),
                            (n = o.title)),
                            (t = t || 2),
                            (r = void 0 === r ? 4 * t : r),
                            ((e =
                              "string" == typeof e
                                ? { text: e }
                                : e || {}).text = e.text || null),
                            (e.id = e.text
                              ? e.id || "qrcode-description"
                              : null),
                            ((n =
                              "string" == typeof n
                                ? { text: n }
                                : n || {}).text = n.text || null),
                            (n.id = n.text ? n.id || "qrcode-title" : null);
                          var i,
                            a,
                            s,
                            u,
                            c = y.getModuleCount() * t + 2 * r,
                            h = "";
                          for (
                            u =
                              "l" +
                              t +
                              ",0 0," +
                              t +
                              " -" +
                              t +
                              ",0 0,-" +
                              t +
                              "z ",
                              h +=
                                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                              h += o.scalable
                                ? ""
                                : ' width="' + c + 'px" height="' + c + 'px"',
                              h += ' viewBox="0 0 ' + c + " " + c + '" ',
                              h += ' preserveAspectRatio="xMinYMin meet"',
                              h +=
                                n.text || e.text
                                  ? ' role="img" aria-labelledby="' +
                                    C([n.id, e.id].join(" ").trim()) +
                                    '"'
                                  : "",
                              h += ">",
                              h += n.text
                                ? '<title id="' +
                                  C(n.id) +
                                  '">' +
                                  C(n.text) +
                                  "</title>"
                                : "",
                              h += e.text
                                ? '<description id="' +
                                  C(e.id) +
                                  '">' +
                                  C(e.text) +
                                  "</description>"
                                : "",
                              h +=
                                '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                              h += '<path d="',
                              a = 0;
                            a < y.getModuleCount();
                            a += 1
                          )
                            for (
                              s = a * t + r, i = 0;
                              i < y.getModuleCount();
                              i += 1
                            )
                              y.isDark(a, i) &&
                                (h += "M" + (i * t + r) + "," + s + u);
                          return (
                            (h += '" stroke="transparent" fill="black"/>') +
                            "</svg>"
                          );
                        }),
                        (y.createDataURL = function (t, r) {
                          (t = t || 2), (r = void 0 === r ? 4 * t : r);
                          var e = y.getModuleCount() * t + 2 * r,
                            n = r,
                            o = e - r;
                          return w(e, e, function (r, e) {
                            if (n <= r && r < o && n <= e && e < o) {
                              var i = Math.floor((r - n) / t),
                                a = Math.floor((e - n) / t);
                              return y.isDark(a, i) ? 0 : 1;
                            }
                            return 1;
                          });
                        }),
                        (y.createImgTag = function (t, r, e) {
                          (t = t || 2), (r = void 0 === r ? 4 * t : r);
                          var n = y.getModuleCount() * t + 2 * r,
                            o = "";
                          return (
                            (o += "<img"),
                            (o += ' src="'),
                            (o += y.createDataURL(t, r)),
                            (o += '"'),
                            (o += ' width="'),
                            (o += n),
                            (o += '"'),
                            (o += ' height="'),
                            (o += n),
                            (o += '"'),
                            e && ((o += ' alt="'), (o += C(e)), (o += '"')),
                            o + "/>"
                          );
                        });
                      var C = function (t) {
                        for (var r = "", e = 0; e < t.length; e += 1) {
                          var n = t.charAt(e);
                          switch (n) {
                            case "<":
                              r += "&lt;";
                              break;
                            case ">":
                              r += "&gt;";
                              break;
                            case "&":
                              r += "&amp;";
                              break;
                            case '"':
                              r += "&quot;";
                              break;
                            default:
                              r += n;
                          }
                        }
                        return r;
                      };
                      return (
                        (y.createASCII = function (t, r) {
                          if ((t = t || 1) < 2)
                            return (function (t) {
                              t = void 0 === t ? 2 : t;
                              var r,
                                e,
                                n,
                                o,
                                i,
                                a = 1 * y.getModuleCount() + 2 * t,
                                s = t,
                                u = a - t,
                                c = {
                                  "â–ˆâ–ˆ": "â–ˆ",
                                  "â–ˆ ": "â–€",
                                  " â–ˆ": "â–„",
                                  "  ": " ",
                                },
                                h = {
                                  "â–ˆâ–ˆ": "â–€",
                                  "â–ˆ ": "â–€",
                                  " â–ˆ": " ",
                                  "  ": " ",
                                },
                                f = "";
                              for (r = 0; r < a; r += 2) {
                                for (
                                  n = Math.floor((r - s) / 1),
                                    o = Math.floor((r + 1 - s) / 1),
                                    e = 0;
                                  e < a;
                                  e += 1
                                )
                                  (i = "â–ˆ"),
                                    s <= e &&
                                      e < u &&
                                      s <= r &&
                                      r < u &&
                                      y.isDark(n, Math.floor((e - s) / 1)) &&
                                      (i = " "),
                                    s <= e &&
                                    e < u &&
                                    s <= r + 1 &&
                                    r + 1 < u &&
                                    y.isDark(o, Math.floor((e - s) / 1))
                                      ? (i += " ")
                                      : (i += "â–ˆ"),
                                    (f += t < 1 && r + 1 >= u ? h[i] : c[i]);
                                f += "\n";
                              }
                              return a % 2 && t > 0
                                ? f.substring(0, f.length - a - 1) +
                                    Array(a + 1).join("â–€")
                                : f.substring(0, f.length - 1);
                            })(r);
                          (t -= 1), (r = void 0 === r ? 2 * t : r);
                          var e,
                            n,
                            o,
                            i,
                            a = y.getModuleCount() * t + 2 * r,
                            s = r,
                            u = a - r,
                            c = Array(t + 1).join("â–ˆâ–ˆ"),
                            h = Array(t + 1).join("  "),
                            f = "",
                            d = "";
                          for (e = 0; e < a; e += 1) {
                            for (
                              o = Math.floor((e - s) / t), d = "", n = 0;
                              n < a;
                              n += 1
                            )
                              (i = 1),
                                s <= n &&
                                  n < u &&
                                  s <= e &&
                                  e < u &&
                                  y.isDark(o, Math.floor((n - s) / t)) &&
                                  (i = 0),
                                (d += i ? c : h);
                            for (o = 0; o < t; o += 1) f += d + "\n";
                          }
                          return f.substring(0, f.length - 1);
                        }),
                        (y.renderTo2dContext = function (t, r) {
                          r = r || 2;
                          for (var e = y.getModuleCount(), n = 0; n < e; n++)
                            for (var o = 0; o < e; o++)
                              (t.fillStyle = y.isDark(n, o)
                                ? "black"
                                : "white"),
                                t.fillRect(n * r, o * r, r, r);
                        }),
                        y
                      );
                    };
                    (t.stringToBytes = (t.stringToBytesFuncs = {
                      default: function (t) {
                        for (var r = [], e = 0; e < t.length; e += 1) {
                          var n = t.charCodeAt(e);
                          r.push(255 & n);
                        }
                        return r;
                      },
                    }).default),
                      (t.createStringToBytes = function (t, r) {
                        var e = (function () {
                            for (
                              var e = y(t),
                                n = function () {
                                  var t = e.read();
                                  if (-1 == t) throw "eof";
                                  return t;
                                },
                                o = 0,
                                i = {};
                              ;

                            ) {
                              var a = e.read();
                              if (-1 == a) break;
                              var s = n(),
                                u = (n() << 8) | n();
                              (i[String.fromCharCode((a << 8) | s)] = u),
                                (o += 1);
                            }
                            if (o != r) throw o + " != " + r;
                            return i;
                          })(),
                          n = "?".charCodeAt(0);
                        return function (t) {
                          for (var r = [], o = 0; o < t.length; o += 1) {
                            var i = t.charCodeAt(o);
                            if (i < 128) r.push(i);
                            else {
                              var a = e[t.charAt(o)];
                              "number" == typeof a
                                ? (255 & a) == a
                                  ? r.push(a)
                                  : (r.push(a >>> 8), r.push(255 & a))
                                : r.push(n);
                            }
                          }
                          return r;
                        };
                      });
                    var r,
                      e,
                      n,
                      o,
                      i,
                      a = { L: 1, M: 0, Q: 3, H: 2 },
                      s =
                        ((r = [
                          [],
                          [6, 18],
                          [6, 22],
                          [6, 26],
                          [6, 30],
                          [6, 34],
                          [6, 22, 38],
                          [6, 24, 42],
                          [6, 26, 46],
                          [6, 28, 50],
                          [6, 30, 54],
                          [6, 32, 58],
                          [6, 34, 62],
                          [6, 26, 46, 66],
                          [6, 26, 48, 70],
                          [6, 26, 50, 74],
                          [6, 30, 54, 78],
                          [6, 30, 56, 82],
                          [6, 30, 58, 86],
                          [6, 34, 62, 90],
                          [6, 28, 50, 72, 94],
                          [6, 26, 50, 74, 98],
                          [6, 30, 54, 78, 102],
                          [6, 28, 54, 80, 106],
                          [6, 32, 58, 84, 110],
                          [6, 30, 58, 86, 114],
                          [6, 34, 62, 90, 118],
                          [6, 26, 50, 74, 98, 122],
                          [6, 30, 54, 78, 102, 126],
                          [6, 26, 52, 78, 104, 130],
                          [6, 30, 56, 82, 108, 134],
                          [6, 34, 60, 86, 112, 138],
                          [6, 30, 58, 86, 114, 142],
                          [6, 34, 62, 90, 118, 146],
                          [6, 30, 54, 78, 102, 126, 150],
                          [6, 24, 50, 76, 102, 128, 154],
                          [6, 28, 54, 80, 106, 132, 158],
                          [6, 32, 58, 84, 110, 136, 162],
                          [6, 26, 54, 82, 110, 138, 166],
                          [6, 30, 58, 86, 114, 142, 170],
                        ]),
                        (e = 1335),
                        (n = 7973),
                        (i = function (t) {
                          for (var r = 0; 0 != t; ) (r += 1), (t >>>= 1);
                          return r;
                        }),
                        ((o = {}).getBCHTypeInfo = function (t) {
                          for (var r = t << 10; i(r) - i(e) >= 0; )
                            r ^= e << (i(r) - i(e));
                          return 21522 ^ ((t << 10) | r);
                        }),
                        (o.getBCHTypeNumber = function (t) {
                          for (var r = t << 12; i(r) - i(n) >= 0; )
                            r ^= n << (i(r) - i(n));
                          return (t << 12) | r;
                        }),
                        (o.getPatternPosition = function (t) {
                          return r[t - 1];
                        }),
                        (o.getMaskFunction = function (t) {
                          switch (t) {
                            case 0:
                              return function (t, r) {
                                return (t + r) % 2 == 0;
                              };
                            case 1:
                              return function (t, r) {
                                return t % 2 == 0;
                              };
                            case 2:
                              return function (t, r) {
                                return r % 3 == 0;
                              };
                            case 3:
                              return function (t, r) {
                                return (t + r) % 3 == 0;
                              };
                            case 4:
                              return function (t, r) {
                                return (
                                  (Math.floor(t / 2) + Math.floor(r / 3)) % 2 ==
                                  0
                                );
                              };
                            case 5:
                              return function (t, r) {
                                return ((t * r) % 2) + ((t * r) % 3) == 0;
                              };
                            case 6:
                              return function (t, r) {
                                return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
                              };
                            case 7:
                              return function (t, r) {
                                return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
                              };
                            default:
                              throw "bad maskPattern:" + t;
                          }
                        }),
                        (o.getErrorCorrectPolynomial = function (t) {
                          for (var r = c([1], 0), e = 0; e < t; e += 1)
                            r = r.multiply(c([1, u.gexp(e)], 0));
                          return r;
                        }),
                        (o.getLengthInBits = function (t, r) {
                          if (1 <= r && r < 10)
                            switch (t) {
                              case 1:
                                return 10;
                              case 2:
                                return 9;
                              case 4:
                              case 8:
                                return 8;
                              default:
                                throw "mode:" + t;
                            }
                          else if (r < 27)
                            switch (t) {
                              case 1:
                                return 12;
                              case 2:
                                return 11;
                              case 4:
                                return 16;
                              case 8:
                                return 10;
                              default:
                                throw "mode:" + t;
                            }
                          else {
                            if (!(r < 41)) throw "type:" + r;
                            switch (t) {
                              case 1:
                                return 14;
                              case 2:
                                return 13;
                              case 4:
                                return 16;
                              case 8:
                                return 12;
                              default:
                                throw "mode:" + t;
                            }
                          }
                        }),
                        (o.getLostPoint = function (t) {
                          for (
                            var r = t.getModuleCount(), e = 0, n = 0;
                            n < r;
                            n += 1
                          )
                            for (var o = 0; o < r; o += 1) {
                              for (
                                var i = 0, a = t.isDark(n, o), s = -1;
                                s <= 1;
                                s += 1
                              )
                                if (!(n + s < 0 || r <= n + s))
                                  for (var u = -1; u <= 1; u += 1)
                                    o + u < 0 ||
                                      r <= o + u ||
                                      (0 == s && 0 == u) ||
                                      (a == t.isDark(n + s, o + u) && (i += 1));
                              i > 5 && (e += 3 + i - 5);
                            }
                          for (n = 0; n < r - 1; n += 1)
                            for (o = 0; o < r - 1; o += 1) {
                              var c = 0;
                              t.isDark(n, o) && (c += 1),
                                t.isDark(n + 1, o) && (c += 1),
                                t.isDark(n, o + 1) && (c += 1),
                                t.isDark(n + 1, o + 1) && (c += 1),
                                (0 != c && 4 != c) || (e += 3);
                            }
                          for (n = 0; n < r; n += 1)
                            for (o = 0; o < r - 6; o += 1)
                              t.isDark(n, o) &&
                                !t.isDark(n, o + 1) &&
                                t.isDark(n, o + 2) &&
                                t.isDark(n, o + 3) &&
                                t.isDark(n, o + 4) &&
                                !t.isDark(n, o + 5) &&
                                t.isDark(n, o + 6) &&
                                (e += 40);
                          for (o = 0; o < r; o += 1)
                            for (n = 0; n < r - 6; n += 1)
                              t.isDark(n, o) &&
                                !t.isDark(n + 1, o) &&
                                t.isDark(n + 2, o) &&
                                t.isDark(n + 3, o) &&
                                t.isDark(n + 4, o) &&
                                !t.isDark(n + 5, o) &&
                                t.isDark(n + 6, o) &&
                                (e += 40);
                          var h = 0;
                          for (o = 0; o < r; o += 1)
                            for (n = 0; n < r; n += 1)
                              t.isDark(n, o) && (h += 1);
                          return (
                            e + (Math.abs((100 * h) / r / r - 50) / 5) * 10
                          );
                        }),
                        o),
                      u = (function () {
                        for (
                          var t = new Array(256), r = new Array(256), e = 0;
                          e < 8;
                          e += 1
                        )
                          t[e] = 1 << e;
                        for (e = 8; e < 256; e += 1)
                          t[e] = t[e - 4] ^ t[e - 5] ^ t[e - 6] ^ t[e - 8];
                        for (e = 0; e < 255; e += 1) r[t[e]] = e;
                        return {
                          glog: function (t) {
                            if (t < 1) throw "glog(" + t + ")";
                            return r[t];
                          },
                          gexp: function (r) {
                            for (; r < 0; ) r += 255;
                            for (; r >= 256; ) r -= 255;
                            return t[r];
                          },
                        };
                      })();
                    function c(t, r) {
                      if (void 0 === t.length) throw t.length + "/" + r;
                      var e = (function () {
                          for (var e = 0; e < t.length && 0 == t[e]; ) e += 1;
                          for (
                            var n = new Array(t.length - e + r), o = 0;
                            o < t.length - e;
                            o += 1
                          )
                            n[o] = t[o + e];
                          return n;
                        })(),
                        n = {
                          getAt: function (t) {
                            return e[t];
                          },
                          getLength: function () {
                            return e.length;
                          },
                          multiply: function (t) {
                            for (
                              var r = new Array(
                                  n.getLength() + t.getLength() - 1
                                ),
                                e = 0;
                              e < n.getLength();
                              e += 1
                            )
                              for (var o = 0; o < t.getLength(); o += 1)
                                r[e + o] ^= u.gexp(
                                  u.glog(n.getAt(e)) + u.glog(t.getAt(o))
                                );
                            return c(r, 0);
                          },
                          mod: function (t) {
                            if (n.getLength() - t.getLength() < 0) return n;
                            for (
                              var r = u.glog(n.getAt(0)) - u.glog(t.getAt(0)),
                                e = new Array(n.getLength()),
                                o = 0;
                              o < n.getLength();
                              o += 1
                            )
                              e[o] = n.getAt(o);
                            for (o = 0; o < t.getLength(); o += 1)
                              e[o] ^= u.gexp(u.glog(t.getAt(o)) + r);
                            return c(e, 0).mod(t);
                          },
                        };
                      return n;
                    }
                    var h = (function () {
                        var t = [
                            [1, 26, 19],
                            [1, 26, 16],
                            [1, 26, 13],
                            [1, 26, 9],
                            [1, 44, 34],
                            [1, 44, 28],
                            [1, 44, 22],
                            [1, 44, 16],
                            [1, 70, 55],
                            [1, 70, 44],
                            [2, 35, 17],
                            [2, 35, 13],
                            [1, 100, 80],
                            [2, 50, 32],
                            [2, 50, 24],
                            [4, 25, 9],
                            [1, 134, 108],
                            [2, 67, 43],
                            [2, 33, 15, 2, 34, 16],
                            [2, 33, 11, 2, 34, 12],
                            [2, 86, 68],
                            [4, 43, 27],
                            [4, 43, 19],
                            [4, 43, 15],
                            [2, 98, 78],
                            [4, 49, 31],
                            [2, 32, 14, 4, 33, 15],
                            [4, 39, 13, 1, 40, 14],
                            [2, 121, 97],
                            [2, 60, 38, 2, 61, 39],
                            [4, 40, 18, 2, 41, 19],
                            [4, 40, 14, 2, 41, 15],
                            [2, 146, 116],
                            [3, 58, 36, 2, 59, 37],
                            [4, 36, 16, 4, 37, 17],
                            [4, 36, 12, 4, 37, 13],
                            [2, 86, 68, 2, 87, 69],
                            [4, 69, 43, 1, 70, 44],
                            [6, 43, 19, 2, 44, 20],
                            [6, 43, 15, 2, 44, 16],
                            [4, 101, 81],
                            [1, 80, 50, 4, 81, 51],
                            [4, 50, 22, 4, 51, 23],
                            [3, 36, 12, 8, 37, 13],
                            [2, 116, 92, 2, 117, 93],
                            [6, 58, 36, 2, 59, 37],
                            [4, 46, 20, 6, 47, 21],
                            [7, 42, 14, 4, 43, 15],
                            [4, 133, 107],
                            [8, 59, 37, 1, 60, 38],
                            [8, 44, 20, 4, 45, 21],
                            [12, 33, 11, 4, 34, 12],
                            [3, 145, 115, 1, 146, 116],
                            [4, 64, 40, 5, 65, 41],
                            [11, 36, 16, 5, 37, 17],
                            [11, 36, 12, 5, 37, 13],
                            [5, 109, 87, 1, 110, 88],
                            [5, 65, 41, 5, 66, 42],
                            [5, 54, 24, 7, 55, 25],
                            [11, 36, 12, 7, 37, 13],
                            [5, 122, 98, 1, 123, 99],
                            [7, 73, 45, 3, 74, 46],
                            [15, 43, 19, 2, 44, 20],
                            [3, 45, 15, 13, 46, 16],
                            [1, 135, 107, 5, 136, 108],
                            [10, 74, 46, 1, 75, 47],
                            [1, 50, 22, 15, 51, 23],
                            [2, 42, 14, 17, 43, 15],
                            [5, 150, 120, 1, 151, 121],
                            [9, 69, 43, 4, 70, 44],
                            [17, 50, 22, 1, 51, 23],
                            [2, 42, 14, 19, 43, 15],
                            [3, 141, 113, 4, 142, 114],
                            [3, 70, 44, 11, 71, 45],
                            [17, 47, 21, 4, 48, 22],
                            [9, 39, 13, 16, 40, 14],
                            [3, 135, 107, 5, 136, 108],
                            [3, 67, 41, 13, 68, 42],
                            [15, 54, 24, 5, 55, 25],
                            [15, 43, 15, 10, 44, 16],
                            [4, 144, 116, 4, 145, 117],
                            [17, 68, 42],
                            [17, 50, 22, 6, 51, 23],
                            [19, 46, 16, 6, 47, 17],
                            [2, 139, 111, 7, 140, 112],
                            [17, 74, 46],
                            [7, 54, 24, 16, 55, 25],
                            [34, 37, 13],
                            [4, 151, 121, 5, 152, 122],
                            [4, 75, 47, 14, 76, 48],
                            [11, 54, 24, 14, 55, 25],
                            [16, 45, 15, 14, 46, 16],
                            [6, 147, 117, 4, 148, 118],
                            [6, 73, 45, 14, 74, 46],
                            [11, 54, 24, 16, 55, 25],
                            [30, 46, 16, 2, 47, 17],
                            [8, 132, 106, 4, 133, 107],
                            [8, 75, 47, 13, 76, 48],
                            [7, 54, 24, 22, 55, 25],
                            [22, 45, 15, 13, 46, 16],
                            [10, 142, 114, 2, 143, 115],
                            [19, 74, 46, 4, 75, 47],
                            [28, 50, 22, 6, 51, 23],
                            [33, 46, 16, 4, 47, 17],
                            [8, 152, 122, 4, 153, 123],
                            [22, 73, 45, 3, 74, 46],
                            [8, 53, 23, 26, 54, 24],
                            [12, 45, 15, 28, 46, 16],
                            [3, 147, 117, 10, 148, 118],
                            [3, 73, 45, 23, 74, 46],
                            [4, 54, 24, 31, 55, 25],
                            [11, 45, 15, 31, 46, 16],
                            [7, 146, 116, 7, 147, 117],
                            [21, 73, 45, 7, 74, 46],
                            [1, 53, 23, 37, 54, 24],
                            [19, 45, 15, 26, 46, 16],
                            [5, 145, 115, 10, 146, 116],
                            [19, 75, 47, 10, 76, 48],
                            [15, 54, 24, 25, 55, 25],
                            [23, 45, 15, 25, 46, 16],
                            [13, 145, 115, 3, 146, 116],
                            [2, 74, 46, 29, 75, 47],
                            [42, 54, 24, 1, 55, 25],
                            [23, 45, 15, 28, 46, 16],
                            [17, 145, 115],
                            [10, 74, 46, 23, 75, 47],
                            [10, 54, 24, 35, 55, 25],
                            [19, 45, 15, 35, 46, 16],
                            [17, 145, 115, 1, 146, 116],
                            [14, 74, 46, 21, 75, 47],
                            [29, 54, 24, 19, 55, 25],
                            [11, 45, 15, 46, 46, 16],
                            [13, 145, 115, 6, 146, 116],
                            [14, 74, 46, 23, 75, 47],
                            [44, 54, 24, 7, 55, 25],
                            [59, 46, 16, 1, 47, 17],
                            [12, 151, 121, 7, 152, 122],
                            [12, 75, 47, 26, 76, 48],
                            [39, 54, 24, 14, 55, 25],
                            [22, 45, 15, 41, 46, 16],
                            [6, 151, 121, 14, 152, 122],
                            [6, 75, 47, 34, 76, 48],
                            [46, 54, 24, 10, 55, 25],
                            [2, 45, 15, 64, 46, 16],
                            [17, 152, 122, 4, 153, 123],
                            [29, 74, 46, 14, 75, 47],
                            [49, 54, 24, 10, 55, 25],
                            [24, 45, 15, 46, 46, 16],
                            [4, 152, 122, 18, 153, 123],
                            [13, 74, 46, 32, 75, 47],
                            [48, 54, 24, 14, 55, 25],
                            [42, 45, 15, 32, 46, 16],
                            [20, 147, 117, 4, 148, 118],
                            [40, 75, 47, 7, 76, 48],
                            [43, 54, 24, 22, 55, 25],
                            [10, 45, 15, 67, 46, 16],
                            [19, 148, 118, 6, 149, 119],
                            [18, 75, 47, 31, 76, 48],
                            [34, 54, 24, 34, 55, 25],
                            [20, 45, 15, 61, 46, 16],
                          ],
                          r = function (t, r) {
                            var e = {};
                            return (e.totalCount = t), (e.dataCount = r), e;
                          };
                        return {
                          getRSBlocks: function (e, n) {
                            var o = (function (r, e) {
                              switch (e) {
                                case a.L:
                                  return t[4 * (r - 1) + 0];
                                case a.M:
                                  return t[4 * (r - 1) + 1];
                                case a.Q:
                                  return t[4 * (r - 1) + 2];
                                case a.H:
                                  return t[4 * (r - 1) + 3];
                                default:
                                  return;
                              }
                            })(e, n);
                            if (void 0 === o)
                              throw (
                                "bad rs block @ typeNumber:" +
                                e +
                                "/errorCorrectionLevel:" +
                                n
                              );
                            for (
                              var i = o.length / 3, s = [], u = 0;
                              u < i;
                              u += 1
                            )
                              for (
                                var c = o[3 * u + 0],
                                  h = o[3 * u + 1],
                                  f = o[3 * u + 2],
                                  d = 0;
                                d < c;
                                d += 1
                              )
                                s.push(r(h, f));
                            return s;
                          },
                        };
                      })(),
                      f = function () {
                        var t = [],
                          r = 0,
                          e = {
                            getBuffer: function () {
                              return t;
                            },
                            getAt: function (r) {
                              var e = Math.floor(r / 8);
                              return 1 == ((t[e] >>> (7 - (r % 8))) & 1);
                            },
                            put: function (t, r) {
                              for (var n = 0; n < r; n += 1)
                                e.putBit(1 == ((t >>> (r - n - 1)) & 1));
                            },
                            getLengthInBits: function () {
                              return r;
                            },
                            putBit: function (e) {
                              var n = Math.floor(r / 8);
                              t.length <= n && t.push(0),
                                e && (t[n] |= 128 >>> r % 8),
                                (r += 1);
                            },
                          };
                        return e;
                      },
                      d = function (t) {
                        var r = t,
                          e = {
                            getMode: function () {
                              return 1;
                            },
                            getLength: function (t) {
                              return r.length;
                            },
                            write: function (t) {
                              for (var e = r, o = 0; o + 2 < e.length; )
                                t.put(n(e.substring(o, o + 3)), 10), (o += 3);
                              o < e.length &&
                                (e.length - o == 1
                                  ? t.put(n(e.substring(o, o + 1)), 4)
                                  : e.length - o == 2 &&
                                    t.put(n(e.substring(o, o + 2)), 7));
                            },
                          },
                          n = function (t) {
                            for (var r = 0, e = 0; e < t.length; e += 1)
                              r = 10 * r + o(t.charAt(e));
                            return r;
                          },
                          o = function (t) {
                            if ("0" <= t && t <= "9")
                              return t.charCodeAt(0) - "0".charCodeAt(0);
                            throw "illegal char :" + t;
                          };
                        return e;
                      },
                      l = function (t) {
                        var r = t,
                          e = {
                            getMode: function () {
                              return 2;
                            },
                            getLength: function (t) {
                              return r.length;
                            },
                            write: function (t) {
                              for (var e = r, o = 0; o + 1 < e.length; )
                                t.put(
                                  45 * n(e.charAt(o)) + n(e.charAt(o + 1)),
                                  11
                                ),
                                  (o += 2);
                              o < e.length && t.put(n(e.charAt(o)), 6);
                            },
                          },
                          n = function (t) {
                            if ("0" <= t && t <= "9")
                              return t.charCodeAt(0) - "0".charCodeAt(0);
                            if ("A" <= t && t <= "Z")
                              return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                            switch (t) {
                              case " ":
                                return 36;
                              case "$":
                                return 37;
                              case "%":
                                return 38;
                              case "*":
                                return 39;
                              case "+":
                                return 40;
                              case "-":
                                return 41;
                              case ".":
                                return 42;
                              case "/":
                                return 43;
                              case ":":
                                return 44;
                              default:
                                throw "illegal char :" + t;
                            }
                          };
                        return e;
                      },
                      g = function (r) {
                        var e = t.stringToBytes(r);
                        return {
                          getMode: function () {
                            return 4;
                          },
                          getLength: function (t) {
                            return e.length;
                          },
                          write: function (t) {
                            for (var r = 0; r < e.length; r += 1)
                              t.put(e[r], 8);
                          },
                        };
                      },
                      p = function (r) {
                        var e = t.stringToBytesFuncs.SJIS;
                        if (!e) throw "sjis not supported.";
                        !(function (t, r) {
                          var n = e("å‹");
                          if (2 != n.length || 38726 != ((n[0] << 8) | n[1]))
                            throw "sjis not supported.";
                        })();
                        var n = e(r);
                        return {
                          getMode: function () {
                            return 8;
                          },
                          getLength: function (t) {
                            return ~~(n.length / 2);
                          },
                          write: function (t) {
                            for (var r = n, e = 0; e + 1 < r.length; ) {
                              var o = ((255 & r[e]) << 8) | (255 & r[e + 1]);
                              if (33088 <= o && o <= 40956) o -= 33088;
                              else {
                                if (!(57408 <= o && o <= 60351))
                                  throw "illegal char at " + (e + 1) + "/" + o;
                                o -= 49472;
                              }
                              (o = 192 * ((o >>> 8) & 255) + (255 & o)),
                                t.put(o, 13),
                                (e += 2);
                            }
                            if (e < r.length)
                              throw "illegal char at " + (e + 1);
                          },
                        };
                      },
                      v = function () {
                        var t = [],
                          r = {
                            writeByte: function (r) {
                              t.push(255 & r);
                            },
                            writeShort: function (t) {
                              r.writeByte(t), r.writeByte(t >>> 8);
                            },
                            writeBytes: function (t, e, n) {
                              (e = e || 0), (n = n || t.length);
                              for (var o = 0; o < n; o += 1)
                                r.writeByte(t[o + e]);
                            },
                            writeString: function (t) {
                              for (var e = 0; e < t.length; e += 1)
                                r.writeByte(t.charCodeAt(e));
                            },
                            toByteArray: function () {
                              return t;
                            },
                            toString: function () {
                              var r = "";
                              r += "[";
                              for (var e = 0; e < t.length; e += 1)
                                e > 0 && (r += ","), (r += t[e]);
                              return r + "]";
                            },
                          };
                        return r;
                      },
                      y = function (t) {
                        var r = t,
                          e = 0,
                          n = 0,
                          o = 0,
                          i = {
                            read: function () {
                              for (; o < 8; ) {
                                if (e >= r.length) {
                                  if (0 == o) return -1;
                                  throw "unexpected end of file./" + o;
                                }
                                var t = r.charAt(e);
                                if (((e += 1), "=" == t)) return (o = 0), -1;
                                t.match(/^\s$/) ||
                                  ((n = (n << 6) | a(t.charCodeAt(0))),
                                  (o += 6));
                              }
                              var i = (n >>> (o - 8)) & 255;
                              return (o -= 8), i;
                            },
                          },
                          a = function (t) {
                            if (65 <= t && t <= 90) return t - 65;
                            if (97 <= t && t <= 122) return t - 97 + 26;
                            if (48 <= t && t <= 57) return t - 48 + 52;
                            if (43 == t) return 62;
                            if (47 == t) return 63;
                            throw "c:" + t;
                          };
                        return i;
                      },
                      w = function (t, r, e) {
                        for (
                          var n = (function (t, r) {
                              var e = t,
                                n = r,
                                o = new Array(t * r),
                                i = {
                                  setPixel: function (t, r, n) {
                                    o[r * e + t] = n;
                                  },
                                  write: function (t) {
                                    t.writeString("GIF87a"),
                                      t.writeShort(e),
                                      t.writeShort(n),
                                      t.writeByte(128),
                                      t.writeByte(0),
                                      t.writeByte(0),
                                      t.writeByte(0),
                                      t.writeByte(0),
                                      t.writeByte(0),
                                      t.writeByte(255),
                                      t.writeByte(255),
                                      t.writeByte(255),
                                      t.writeString(","),
                                      t.writeShort(0),
                                      t.writeShort(0),
                                      t.writeShort(e),
                                      t.writeShort(n),
                                      t.writeByte(0);
                                    var r = a(2);
                                    t.writeByte(2);
                                    for (var o = 0; r.length - o > 255; )
                                      t.writeByte(255),
                                        t.writeBytes(r, o, 255),
                                        (o += 255);
                                    t.writeByte(r.length - o),
                                      t.writeBytes(r, o, r.length - o),
                                      t.writeByte(0),
                                      t.writeString(";");
                                  },
                                },
                                a = function (t) {
                                  for (
                                    var r = 1 << t,
                                      e = 1 + (1 << t),
                                      n = t + 1,
                                      i = s(),
                                      a = 0;
                                    a < r;
                                    a += 1
                                  )
                                    i.add(String.fromCharCode(a));
                                  i.add(String.fromCharCode(r)),
                                    i.add(String.fromCharCode(e));
                                  var u,
                                    c,
                                    h,
                                    f = v(),
                                    d =
                                      ((u = f),
                                      (c = 0),
                                      (h = 0),
                                      {
                                        write: function (t, r) {
                                          if (t >>> r != 0) throw "length over";
                                          for (; c + r >= 8; )
                                            u.writeByte(255 & ((t << c) | h)),
                                              (r -= 8 - c),
                                              (t >>>= 8 - c),
                                              (h = 0),
                                              (c = 0);
                                          (h |= t << c), (c += r);
                                        },
                                        flush: function () {
                                          c > 0 && u.writeByte(h);
                                        },
                                      });
                                  d.write(r, n);
                                  var l = 0,
                                    g = String.fromCharCode(o[l]);
                                  for (l += 1; l < o.length; ) {
                                    var p = String.fromCharCode(o[l]);
                                    (l += 1),
                                      i.contains(g + p)
                                        ? (g += p)
                                        : (d.write(i.indexOf(g), n),
                                          i.size() < 4095 &&
                                            (i.size() == 1 << n && (n += 1),
                                            i.add(g + p)),
                                          (g = p));
                                  }
                                  return (
                                    d.write(i.indexOf(g), n),
                                    d.write(e, n),
                                    d.flush(),
                                    f.toByteArray()
                                  );
                                },
                                s = function () {
                                  var t = {},
                                    r = 0,
                                    e = {
                                      add: function (n) {
                                        if (e.contains(n)) throw "dup key:" + n;
                                        (t[n] = r), (r += 1);
                                      },
                                      size: function () {
                                        return r;
                                      },
                                      indexOf: function (r) {
                                        return t[r];
                                      },
                                      contains: function (r) {
                                        return void 0 !== t[r];
                                      },
                                    };
                                  return e;
                                };
                              return i;
                            })(t, r),
                            o = 0;
                          o < r;
                          o += 1
                        )
                          for (var i = 0; i < t; i += 1)
                            n.setPixel(i, o, e(i, o));
                        var a = v();
                        n.write(a);
                        for (
                          var s = (function () {
                              var t = 0,
                                r = 0,
                                e = 0,
                                n = "",
                                o = {},
                                i = function (t) {
                                  n += String.fromCharCode(a(63 & t));
                                },
                                a = function (t) {
                                  if (t < 0);
                                  else {
                                    if (t < 26) return 65 + t;
                                    if (t < 52) return t - 26 + 97;
                                    if (t < 62) return t - 52 + 48;
                                    if (62 == t) return 43;
                                    if (63 == t) return 47;
                                  }
                                  throw "n:" + t;
                                };
                              return (
                                (o.writeByte = function (n) {
                                  for (
                                    t = (t << 8) | (255 & n), r += 8, e += 1;
                                    r >= 6;

                                  )
                                    i(t >>> (r - 6)), (r -= 6);
                                }),
                                (o.flush = function () {
                                  if (
                                    (r > 0 &&
                                      (i(t << (6 - r)), (t = 0), (r = 0)),
                                    e % 3 != 0)
                                  )
                                    for (
                                      var o = 3 - (e % 3), a = 0;
                                      a < o;
                                      a += 1
                                    )
                                      n += "=";
                                }),
                                (o.toString = function () {
                                  return n;
                                }),
                                o
                              );
                            })(),
                            u = a.toByteArray(),
                            c = 0;
                          c < u.length;
                          c += 1
                        )
                          s.writeByte(u[c]);
                        return s.flush(), "data:image/gif;base64," + s;
                      };
                    return t;
                  })();
                (o.stringToBytesFuncs["UTF-8"] = function (t) {
                  return (function (t) {
                    for (var r = [], e = 0; e < t.length; e++) {
                      var n = t.charCodeAt(e);
                      n < 128
                        ? r.push(n)
                        : n < 2048
                        ? r.push(192 | (n >> 6), 128 | (63 & n))
                        : n < 55296 || n >= 57344
                        ? r.push(
                            224 | (n >> 12),
                            128 | ((n >> 6) & 63),
                            128 | (63 & n)
                          )
                        : (e++,
                          (n =
                            65536 +
                            (((1023 & n) << 10) | (1023 & t.charCodeAt(e)))),
                          r.push(
                            240 | (n >> 18),
                            128 | ((n >> 12) & 63),
                            128 | ((n >> 6) & 63),
                            128 | (63 & n)
                          ));
                    }
                    return r;
                  })(t);
                }),
                  void 0 ===
                    (n =
                      "function" ==
                      typeof (e = function () {
                        return o;
                      })
                        ? e.apply(r, [])
                        : e) || (t.exports = n);
              },
              151: (t, r, e) => {
                "use strict";
                e.d(r, { default: () => S });
                var n = function () {
                    return (n =
                      Object.assign ||
                      function (t) {
                        for (var r, e = 1, n = arguments.length; e < n; e++)
                          for (var o in (r = arguments[e]))
                            Object.prototype.hasOwnProperty.call(r, o) &&
                              (t[o] = r[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                  o = function () {
                    for (var t = 0, r = 0, e = arguments.length; r < e; r++)
                      t += arguments[r].length;
                    var n = Array(t),
                      o = 0;
                    for (r = 0; r < e; r++)
                      for (
                        var i = arguments[r], a = 0, s = i.length;
                        a < s;
                        a++, o++
                      )
                        n[o] = i[a];
                    return n;
                  },
                  i = function (t) {
                    return !!t && "object" == typeof t && !Array.isArray(t);
                  };
                function a(t) {
                  for (var r = [], e = 1; e < arguments.length; e++)
                    r[e - 1] = arguments[e];
                  if (!r.length) return t;
                  var s = r.shift();
                  return void 0 !== s && i(t) && i(s)
                    ? ((t = n({}, t)),
                      Object.keys(s).forEach(function (r) {
                        var e = t[r],
                          n = s[r];
                        Array.isArray(e) && Array.isArray(n)
                          ? (t[r] = n)
                          : i(e) && i(n)
                          ? (t[r] = a(Object.assign({}, e), n))
                          : (t[r] = n);
                      }),
                      a.apply(void 0, o([t], r)))
                    : t;
                }
                const s = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
                var u = function () {
                  return (u =
                    Object.assign ||
                    function (t) {
                      for (var r, e = 1, n = arguments.length; e < n; e++)
                        for (var o in (r = arguments[e]))
                          Object.prototype.hasOwnProperty.call(r, o) &&
                            (t[o] = r[o]);
                      return t;
                    }).apply(this, arguments);
                };
                const c = (function () {
                  function t(t) {
                    var r = t.context,
                      e = t.type;
                    (this._context = r), (this._type = e);
                  }
                  return (
                    (t.prototype.draw = function (t, r, e, n) {
                      var o,
                        i = this._context;
                      switch (this._type) {
                        case "dots":
                          o = this._drawDot;
                          break;
                        case "classy":
                          o = this._drawClassy;
                          break;
                        case "classy-rounded":
                          o = this._drawClassyRounded;
                          break;
                        case "rounded":
                          o = this._drawRounded;
                          break;
                        case "extra-rounded":
                          o = this._drawExtraRounded;
                          break;
                        case "square":
                        default:
                          o = this._drawSquare;
                      }
                      o.call(this, {
                        x: t,
                        y: r,
                        size: e,
                        context: i,
                        getNeighbor: n,
                      });
                    }),
                    (t.prototype._rotateFigure = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation,
                        a = t.draw,
                        s = r + n / 2,
                        u = e + n / 2;
                      o.translate(s, u),
                        i && o.rotate(i),
                        a(),
                        o.closePath(),
                        i && o.rotate(-i),
                        o.translate(-s, -u);
                    }),
                    (t.prototype._basicDot = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, 0, 2 * Math.PI);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicSquare = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.rect(-r / 2, -r / 2, r, r);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicSideRounded = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, -Math.PI / 2, Math.PI / 2),
                              e.lineTo(-r / 2, r / 2),
                              e.lineTo(-r / 2, -r / 2),
                              e.lineTo(0, -r / 2);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicCornerRounded = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, -Math.PI / 2, 0),
                              e.lineTo(r / 2, r / 2),
                              e.lineTo(-r / 2, r / 2),
                              e.lineTo(-r / 2, -r / 2),
                              e.lineTo(0, -r / 2);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicCornerExtraRounded = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(-r / 2, r / 2, r, -Math.PI / 2, 0),
                              e.lineTo(-r / 2, r / 2),
                              e.lineTo(-r / 2, -r / 2);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicCornersRounded = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, -Math.PI / 2, 0),
                              e.lineTo(r / 2, r / 2),
                              e.lineTo(0, r / 2),
                              e.arc(0, 0, r / 2, Math.PI / 2, Math.PI),
                              e.lineTo(-r / 2, -r / 2),
                              e.lineTo(0, -r / 2);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicCornersExtraRounded = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        u(u({}, t), {
                          draw: function () {
                            e.arc(-r / 2, r / 2, r, -Math.PI / 2, 0),
                              e.arc(r / 2, -r / 2, r, Math.PI / 2, Math.PI);
                          },
                        })
                      );
                    }),
                    (t.prototype._drawDot = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context;
                      this._basicDot({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: 0,
                      });
                    }),
                    (t.prototype._drawSquare = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context;
                      this._basicSquare({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: 0,
                      });
                    }),
                    (t.prototype._drawRounded = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.getNeighbor,
                        a = +i(-1, 0),
                        s = +i(1, 0),
                        u = +i(0, -1),
                        c = +i(0, 1),
                        h = a + s + u + c;
                      if (0 !== h)
                        if (h > 2 || (a && s) || (u && c))
                          this._basicSquare({
                            x: r,
                            y: e,
                            size: n,
                            context: o,
                            rotation: 0,
                          });
                        else {
                          if (2 === h) {
                            var f = 0;
                            return (
                              a && u
                                ? (f = Math.PI / 2)
                                : u && s
                                ? (f = Math.PI)
                                : s && c && (f = -Math.PI / 2),
                              void this._basicCornerRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: f,
                              })
                            );
                          }
                          if (1 === h)
                            return (
                              (f = 0),
                              u
                                ? (f = Math.PI / 2)
                                : s
                                ? (f = Math.PI)
                                : c && (f = -Math.PI / 2),
                              void this._basicSideRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: f,
                              })
                            );
                        }
                      else
                        this._basicDot({
                          x: r,
                          y: e,
                          size: n,
                          context: o,
                          rotation: 0,
                        });
                    }),
                    (t.prototype._drawExtraRounded = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.getNeighbor,
                        a = +i(-1, 0),
                        s = +i(1, 0),
                        u = +i(0, -1),
                        c = +i(0, 1),
                        h = a + s + u + c;
                      if (0 !== h)
                        if (h > 2 || (a && s) || (u && c))
                          this._basicSquare({
                            x: r,
                            y: e,
                            size: n,
                            context: o,
                            rotation: 0,
                          });
                        else {
                          if (2 === h) {
                            var f = 0;
                            return (
                              a && u
                                ? (f = Math.PI / 2)
                                : u && s
                                ? (f = Math.PI)
                                : s && c && (f = -Math.PI / 2),
                              void this._basicCornerExtraRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: f,
                              })
                            );
                          }
                          if (1 === h)
                            return (
                              (f = 0),
                              u
                                ? (f = Math.PI / 2)
                                : s
                                ? (f = Math.PI)
                                : c && (f = -Math.PI / 2),
                              void this._basicSideRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: f,
                              })
                            );
                        }
                      else
                        this._basicDot({
                          x: r,
                          y: e,
                          size: n,
                          context: o,
                          rotation: 0,
                        });
                    }),
                    (t.prototype._drawClassy = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.getNeighbor,
                        a = +i(-1, 0),
                        s = +i(1, 0),
                        u = +i(0, -1),
                        c = +i(0, 1);
                      0 !== a + s + u + c
                        ? a || u
                          ? s || c
                            ? this._basicSquare({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: 0,
                              })
                            : this._basicCornerRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: Math.PI / 2,
                              })
                          : this._basicCornerRounded({
                              x: r,
                              y: e,
                              size: n,
                              context: o,
                              rotation: -Math.PI / 2,
                            })
                        : this._basicCornersRounded({
                            x: r,
                            y: e,
                            size: n,
                            context: o,
                            rotation: Math.PI / 2,
                          });
                    }),
                    (t.prototype._drawClassyRounded = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.getNeighbor,
                        a = +i(-1, 0),
                        s = +i(1, 0),
                        u = +i(0, -1),
                        c = +i(0, 1);
                      0 !== a + s + u + c
                        ? a || u
                          ? s || c
                            ? this._basicSquare({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: 0,
                              })
                            : this._basicCornerExtraRounded({
                                x: r,
                                y: e,
                                size: n,
                                context: o,
                                rotation: Math.PI / 2,
                              })
                          : this._basicCornerExtraRounded({
                              x: r,
                              y: e,
                              size: n,
                              context: o,
                              rotation: -Math.PI / 2,
                            })
                        : this._basicCornersRounded({
                            x: r,
                            y: e,
                            size: n,
                            context: o,
                            rotation: Math.PI / 2,
                          });
                    }),
                    t
                  );
                })();
                var h = function () {
                  return (h =
                    Object.assign ||
                    function (t) {
                      for (var r, e = 1, n = arguments.length; e < n; e++)
                        for (var o in (r = arguments[e]))
                          Object.prototype.hasOwnProperty.call(r, o) &&
                            (t[o] = r[o]);
                      return t;
                    }).apply(this, arguments);
                };
                const f = (function () {
                  function t(t) {
                    var r = t.context,
                      e = t.type;
                    (this._context = r), (this._type = e);
                  }
                  return (
                    (t.prototype.draw = function (t, r, e, n) {
                      var o,
                        i = this._context;
                      switch (this._type) {
                        case "square":
                          o = this._drawSquare;
                          break;
                        case "extra-rounded":
                          o = this._drawExtraRounded;
                          break;
                        case "dot":
                        default:
                          o = this._drawDot;
                      }
                      o.call(this, {
                        x: t,
                        y: r,
                        size: e,
                        context: i,
                        rotation: n,
                      });
                    }),
                    (t.prototype._rotateFigure = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation,
                        a = t.draw,
                        s = r + n / 2,
                        u = e + n / 2;
                      o.translate(s, u),
                        i && o.rotate(i),
                        a(),
                        o.closePath(),
                        i && o.rotate(-i),
                        o.translate(-s, -u);
                    }),
                    (t.prototype._basicDot = function (t) {
                      var r = t.size,
                        e = t.context,
                        n = r / 7;
                      this._rotateFigure(
                        h(h({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, 0, 2 * Math.PI),
                              e.arc(0, 0, r / 2 - n, 0, 2 * Math.PI);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicSquare = function (t) {
                      var r = t.size,
                        e = t.context,
                        n = r / 7;
                      this._rotateFigure(
                        h(h({}, t), {
                          draw: function () {
                            e.rect(-r / 2, -r / 2, r, r),
                              e.rect(
                                -r / 2 + n,
                                -r / 2 + n,
                                r - 2 * n,
                                r - 2 * n
                              );
                          },
                        })
                      );
                    }),
                    (t.prototype._basicExtraRounded = function (t) {
                      var r = t.size,
                        e = t.context,
                        n = r / 7;
                      this._rotateFigure(
                        h(h({}, t), {
                          draw: function () {
                            e.arc(-n, -n, 2.5 * n, Math.PI, -Math.PI / 2),
                              e.lineTo(n, -3.5 * n),
                              e.arc(n, -n, 2.5 * n, -Math.PI / 2, 0),
                              e.lineTo(3.5 * n, -n),
                              e.arc(n, n, 2.5 * n, 0, Math.PI / 2),
                              e.lineTo(-n, 3.5 * n),
                              e.arc(-n, n, 2.5 * n, Math.PI / 2, Math.PI),
                              e.lineTo(-3.5 * n, -n),
                              e.arc(-n, -n, 1.5 * n, Math.PI, -Math.PI / 2),
                              e.lineTo(n, -2.5 * n),
                              e.arc(n, -n, 1.5 * n, -Math.PI / 2, 0),
                              e.lineTo(2.5 * n, -n),
                              e.arc(n, n, 1.5 * n, 0, Math.PI / 2),
                              e.lineTo(-n, 2.5 * n),
                              e.arc(-n, n, 1.5 * n, Math.PI / 2, Math.PI),
                              e.lineTo(-2.5 * n, -n);
                          },
                        })
                      );
                    }),
                    (t.prototype._drawDot = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation;
                      this._basicDot({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: i,
                      });
                    }),
                    (t.prototype._drawSquare = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation;
                      this._basicSquare({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: i,
                      });
                    }),
                    (t.prototype._drawExtraRounded = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation;
                      this._basicExtraRounded({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: i,
                      });
                    }),
                    t
                  );
                })();
                var d = function () {
                  return (d =
                    Object.assign ||
                    function (t) {
                      for (var r, e = 1, n = arguments.length; e < n; e++)
                        for (var o in (r = arguments[e]))
                          Object.prototype.hasOwnProperty.call(r, o) &&
                            (t[o] = r[o]);
                      return t;
                    }).apply(this, arguments);
                };
                const l = (function () {
                  function t(t) {
                    var r = t.context,
                      e = t.type;
                    (this._context = r), (this._type = e);
                  }
                  return (
                    (t.prototype.draw = function (t, r, e, n) {
                      var o,
                        i = this._context;
                      switch (this._type) {
                        case "square":
                          o = this._drawSquare;
                          break;
                        case "dot":
                        default:
                          o = this._drawDot;
                      }
                      o.call(this, {
                        x: t,
                        y: r,
                        size: e,
                        context: i,
                        rotation: n,
                      });
                    }),
                    (t.prototype._rotateFigure = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation,
                        a = t.draw,
                        s = r + n / 2,
                        u = e + n / 2;
                      o.translate(s, u),
                        i && o.rotate(i),
                        a(),
                        o.closePath(),
                        i && o.rotate(-i),
                        o.translate(-s, -u);
                    }),
                    (t.prototype._basicDot = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        d(d({}, t), {
                          draw: function () {
                            e.arc(0, 0, r / 2, 0, 2 * Math.PI);
                          },
                        })
                      );
                    }),
                    (t.prototype._basicSquare = function (t) {
                      var r = t.size,
                        e = t.context;
                      this._rotateFigure(
                        d(d({}, t), {
                          draw: function () {
                            e.rect(-r / 2, -r / 2, r, r);
                          },
                        })
                      );
                    }),
                    (t.prototype._drawDot = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation;
                      this._basicDot({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: i,
                      });
                    }),
                    (t.prototype._drawSquare = function (t) {
                      var r = t.x,
                        e = t.y,
                        n = t.size,
                        o = t.context,
                        i = t.rotation;
                      this._basicSquare({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: i,
                      });
                    }),
                    t
                  );
                })();
                var g = [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                  ],
                  p = [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                  ];
                const v = (function () {
                  function t(t) {
                    (this._canvas = document.createElement("canvas")),
                      (this._canvas.width = t.width),
                      (this._canvas.height = t.height),
                      (this._options = t);
                  }
                  return (
                    Object.defineProperty(t.prototype, "context", {
                      get: function () {
                        return this._canvas.getContext("2d");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "width", {
                      get: function () {
                        return this._canvas.width;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "height", {
                      get: function () {
                        return this._canvas.height;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.getCanvas = function () {
                      return this._canvas;
                    }),
                    (t.prototype.clear = function () {
                      var t = this.context;
                      t &&
                        t.clearRect(
                          0,
                          0,
                          this._canvas.width,
                          this._canvas.height
                        );
                    }),
                    (t.prototype.drawQR = function (t) {
                      return (
                        (r = this),
                        (n = function () {
                          var r,
                            e,
                            n,
                            o,
                            i,
                            a,
                            u,
                            c,
                            h,
                            f = this;
                          return (function (t, r) {
                            var e,
                              n,
                              o,
                              i,
                              a = {
                                label: 0,
                                sent: function () {
                                  if (1 & o[0]) throw o[1];
                                  return o[1];
                                },
                                trys: [],
                                ops: [],
                              };
                            return (
                              (i = { next: s(0), throw: s(1), return: s(2) }),
                              "function" == typeof Symbol &&
                                (i[Symbol.iterator] = function () {
                                  return this;
                                }),
                              i
                            );
                            function s(i) {
                              return function (s) {
                                return (function (i) {
                                  if (e)
                                    throw new TypeError(
                                      "Generator is already executing."
                                    );
                                  for (; a; )
                                    try {
                                      if (
                                        ((e = 1),
                                        n &&
                                          (o =
                                            2 & i[0]
                                              ? n.return
                                              : i[0]
                                              ? n.throw ||
                                                ((o = n.return) && o.call(n), 0)
                                              : n.next) &&
                                          !(o = o.call(n, i[1])).done)
                                      )
                                        return o;
                                      switch (
                                        ((n = 0),
                                        o && (i = [2 & i[0], o.value]),
                                        i[0])
                                      ) {
                                        case 0:
                                        case 1:
                                          o = i;
                                          break;
                                        case 4:
                                          return (
                                            a.label++, { value: i[1], done: !1 }
                                          );
                                        case 5:
                                          a.label++, (n = i[1]), (i = [0]);
                                          continue;
                                        case 7:
                                          (i = a.ops.pop()), a.trys.pop();
                                          continue;
                                        default:
                                          if (
                                            !(
                                              (o =
                                                (o = a.trys).length > 0 &&
                                                o[o.length - 1]) ||
                                              (6 !== i[0] && 2 !== i[0])
                                            )
                                          ) {
                                            a = 0;
                                            continue;
                                          }
                                          if (
                                            3 === i[0] &&
                                            (!o || (i[1] > o[0] && i[1] < o[3]))
                                          ) {
                                            a.label = i[1];
                                            break;
                                          }
                                          if (6 === i[0] && a.label < o[1]) {
                                            (a.label = o[1]), (o = i);
                                            break;
                                          }
                                          if (o && a.label < o[2]) {
                                            (a.label = o[2]), a.ops.push(i);
                                            break;
                                          }
                                          o[2] && a.ops.pop(), a.trys.pop();
                                          continue;
                                      }
                                      i = r.call(t, a);
                                    } catch (t) {
                                      (i = [6, t]), (n = 0);
                                    } finally {
                                      e = o = 0;
                                    }
                                  if (5 & i[0]) throw i[1];
                                  return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                  };
                                })([i, s]);
                              };
                            }
                          })(this, function (d) {
                            switch (d.label) {
                              case 0:
                                return (
                                  (r = t.getModuleCount()),
                                  (e =
                                    Math.min(
                                      this._options.width,
                                      this._options.height
                                    ) -
                                    2 * this._options.margin),
                                  (n = Math.floor(e / r)),
                                  (o = {
                                    hideXDots: 0,
                                    hideYDots: 0,
                                    width: 0,
                                    height: 0,
                                  }),
                                  (this._qr = t),
                                  this._options.image
                                    ? [4, this.loadImage()]
                                    : [3, 2]
                                );
                              case 1:
                                if ((d.sent(), !this._image)) return [2];
                                (i = this._options),
                                  (a = i.imageOptions),
                                  (u = i.qrOptions),
                                  (c = a.imageSize * s[u.errorCorrectionLevel]),
                                  (h = Math.floor(c * r * r)),
                                  (o = (function (t) {
                                    var r = t.originalHeight,
                                      e = t.originalWidth,
                                      n = t.maxHiddenDots,
                                      o = t.maxHiddenAxisDots,
                                      i = t.dotSize,
                                      a = { x: 0, y: 0 },
                                      s = { x: 0, y: 0 };
                                    if (r <= 0 || e <= 0 || n <= 0 || i <= 0)
                                      return {
                                        height: 0,
                                        width: 0,
                                        hideYDots: 0,
                                        hideXDots: 0,
                                      };
                                    var u = r / e;
                                    return (
                                      (a.x = Math.floor(Math.sqrt(n / u))),
                                      a.x <= 0 && (a.x = 1),
                                      o && o < a.x && (a.x = o),
                                      a.x % 2 == 0 && a.x--,
                                      (s.x = a.x * i),
                                      (a.y =
                                        1 + 2 * Math.ceil((a.x * u - 1) / 2)),
                                      (s.y = Math.round(s.x * u)),
                                      (a.y * a.x > n || (o && o < a.y)) &&
                                        (o && o < a.y
                                          ? ((a.y = o), a.y % 2 == 0 && a.x--)
                                          : (a.y -= 2),
                                        (s.y = a.y * i),
                                        (a.x =
                                          1 + 2 * Math.ceil((a.y / u - 1) / 2)),
                                        (s.x = Math.round(s.y / u))),
                                      {
                                        height: s.y,
                                        width: s.x,
                                        hideYDots: a.y,
                                        hideXDots: a.x,
                                      }
                                    );
                                  })({
                                    originalWidth: this._image.width,
                                    originalHeight: this._image.height,
                                    maxHiddenDots: h,
                                    maxHiddenAxisDots: r - 14,
                                    dotSize: n,
                                  })),
                                  (d.label = 2);
                              case 2:
                                return (
                                  this.clear(),
                                  this.drawBackground(),
                                  this.drawDots(function (t, e) {
                                    var n, i, a, s, u, c;
                                    return !(
                                      (f._options.imageOptions
                                        .hideBackgroundDots &&
                                        t >= (r - o.hideXDots) / 2 &&
                                        t < (r + o.hideXDots) / 2 &&
                                        e >= (r - o.hideYDots) / 2 &&
                                        e < (r + o.hideYDots) / 2) ||
                                      (null === (n = g[t]) || void 0 === n
                                        ? void 0
                                        : n[e]) ||
                                      (null === (i = g[t - r + 7]) ||
                                      void 0 === i
                                        ? void 0
                                        : i[e]) ||
                                      (null === (a = g[t]) || void 0 === a
                                        ? void 0
                                        : a[e - r + 7]) ||
                                      (null === (s = p[t]) || void 0 === s
                                        ? void 0
                                        : s[e]) ||
                                      (null === (u = p[t - r + 7]) ||
                                      void 0 === u
                                        ? void 0
                                        : u[e]) ||
                                      (null === (c = p[t]) || void 0 === c
                                        ? void 0
                                        : c[e - r + 7])
                                    );
                                  }),
                                  this.drawCorners(),
                                  this._options.image &&
                                    this.drawImage({
                                      width: o.width,
                                      height: o.height,
                                      count: r,
                                      dotSize: n,
                                    }),
                                  [2]
                                );
                            }
                          });
                        }),
                        new ((e = void 0) || (e = Promise))(function (t, o) {
                          function i(t) {
                            try {
                              s(n.next(t));
                            } catch (t) {
                              o(t);
                            }
                          }
                          function a(t) {
                            try {
                              s(n.throw(t));
                            } catch (t) {
                              o(t);
                            }
                          }
                          function s(r) {
                            var n;
                            r.done
                              ? t(r.value)
                              : ((n = r.value),
                                n instanceof e
                                  ? n
                                  : new e(function (t) {
                                      t(n);
                                    })).then(i, a);
                          }
                          s((n = n.apply(r, [])).next());
                        })
                      );
                      var r, e, n;
                    }),
                    (t.prototype.drawBackground = function () {
                      var t = this.context,
                        r = this._options;
                      if (t) {
                        if (r.backgroundOptions.gradient) {
                          var e = r.backgroundOptions.gradient,
                            n = this._createGradient({
                              context: t,
                              options: e,
                              additionalRotation: 0,
                              x: 0,
                              y: 0,
                              size:
                                this._canvas.width > this._canvas.height
                                  ? this._canvas.width
                                  : this._canvas.height,
                            });
                          e.colorStops.forEach(function (t) {
                            var r = t.offset,
                              e = t.color;
                            n.addColorStop(r, e);
                          }),
                            (t.fillStyle = n);
                        } else
                          r.backgroundOptions.color &&
                            (t.fillStyle = r.backgroundOptions.color);
                        t.fillRect(
                          0,
                          0,
                          this._canvas.width,
                          this._canvas.height
                        );
                      }
                    }),
                    (t.prototype.drawDots = function (t) {
                      var r = this;
                      if (!this._qr) throw "QR code is not defined";
                      var e = this.context;
                      if (!e) throw "QR code is not defined";
                      var n = this._options,
                        o = this._qr.getModuleCount();
                      if (o > n.width || o > n.height)
                        throw "The canvas is too small.";
                      var i = Math.min(n.width, n.height) - 2 * n.margin,
                        a = Math.floor(i / o),
                        s = Math.floor((n.width - o * a) / 2),
                        u = Math.floor((n.height - o * a) / 2),
                        h = new c({ context: e, type: n.dotsOptions.type });
                      e.beginPath();
                      for (
                        var f = function (e) {
                            for (
                              var n = function (n) {
                                  return t && !t(e, n)
                                    ? "continue"
                                    : d._qr.isDark(e, n)
                                    ? void h.draw(
                                        s + e * a,
                                        u + n * a,
                                        a,
                                        function (i, a) {
                                          return (
                                            !(
                                              e + i < 0 ||
                                              n + a < 0 ||
                                              e + i >= o ||
                                              n + a >= o
                                            ) &&
                                            !(t && !t(e + i, n + a)) &&
                                            !!r._qr &&
                                            r._qr.isDark(e + i, n + a)
                                          );
                                        }
                                      )
                                    : "continue";
                                },
                                i = 0;
                              i < o;
                              i++
                            )
                              n(i);
                          },
                          d = this,
                          l = 0;
                        l < o;
                        l++
                      )
                        f(l);
                      if (n.dotsOptions.gradient) {
                        var g = n.dotsOptions.gradient,
                          p = this._createGradient({
                            context: e,
                            options: g,
                            additionalRotation: 0,
                            x: s,
                            y: u,
                            size: o * a,
                          });
                        g.colorStops.forEach(function (t) {
                          var r = t.offset,
                            e = t.color;
                          p.addColorStop(r, e);
                        }),
                          (e.fillStyle = e.strokeStyle = p);
                      } else
                        n.dotsOptions.color &&
                          (e.fillStyle = e.strokeStyle = n.dotsOptions.color);
                      e.fill("evenodd");
                    }),
                    (t.prototype.drawCorners = function (t) {
                      var r = this;
                      if (!this._qr) throw "QR code is not defined";
                      var e = this.context;
                      if (!e) throw "QR code is not defined";
                      var n = this._options,
                        o = this._qr.getModuleCount(),
                        i = Math.min(n.width, n.height) - 2 * n.margin,
                        a = Math.floor(i / o),
                        s = 7 * a,
                        u = 3 * a,
                        h = Math.floor((n.width - o * a) / 2),
                        d = Math.floor((n.height - o * a) / 2);
                      [
                        [0, 0, 0],
                        [1, 0, Math.PI / 2],
                        [0, 1, -Math.PI / 2],
                      ].forEach(function (i) {
                        var v,
                          y,
                          w,
                          x,
                          b,
                          _,
                          M,
                          m,
                          O,
                          S,
                          k = i[0],
                          C = i[1],
                          P = i[2];
                        if (!t || t(k, C)) {
                          var D = h + k * a * (o - 7),
                            I = d + C * a * (o - 7);
                          if (
                            null === (v = n.cornersSquareOptions) ||
                            void 0 === v
                              ? void 0
                              : v.type
                          ) {
                            var z = new f({
                              context: e,
                              type:
                                null === (y = n.cornersSquareOptions) ||
                                void 0 === y
                                  ? void 0
                                  : y.type,
                            });
                            e.beginPath(), z.draw(D, I, s, P);
                          } else {
                            var B = new c({
                              context: e,
                              type: n.dotsOptions.type,
                            });
                            e.beginPath();
                            for (
                              var A = function (t) {
                                  for (
                                    var r = function (r) {
                                        if (
                                          !(null === (w = g[t]) || void 0 === w
                                            ? void 0
                                            : w[r])
                                        )
                                          return "continue";
                                        B.draw(
                                          D + t * a,
                                          I + r * a,
                                          a,
                                          function (e, n) {
                                            var o;
                                            return !!(null === (o = g[t + e]) ||
                                            void 0 === o
                                              ? void 0
                                              : o[r + n]);
                                          }
                                        );
                                      },
                                      e = 0;
                                    e < g[t].length;
                                    e++
                                  )
                                    r(e);
                                },
                                q = 0;
                              q < g.length;
                              q++
                            )
                              A(q);
                          }
                          if (
                            null === (x = n.cornersSquareOptions) ||
                            void 0 === x
                              ? void 0
                              : x.gradient
                          ) {
                            var R = n.cornersSquareOptions.gradient,
                              L = r._createGradient({
                                context: e,
                                options: R,
                                additionalRotation: P,
                                x: D,
                                y: I,
                                size: s,
                              });
                            R.colorStops.forEach(function (t) {
                              var r = t.offset,
                                e = t.color;
                              L.addColorStop(r, e);
                            }),
                              (e.fillStyle = e.strokeStyle = L);
                          } else
                            (null === (b = n.cornersSquareOptions) ||
                            void 0 === b
                              ? void 0
                              : b.color) &&
                              (e.fillStyle = e.strokeStyle =
                                n.cornersSquareOptions.color);
                          if (
                            (e.fill("evenodd"),
                            null === (_ = n.cornersDotOptions) || void 0 === _
                              ? void 0
                              : _.type)
                          ) {
                            var T = new l({
                              context: e,
                              type:
                                null === (M = n.cornersDotOptions) ||
                                void 0 === M
                                  ? void 0
                                  : M.type,
                            });
                            e.beginPath(), T.draw(D + 2 * a, I + 2 * a, u, P);
                          } else {
                            (B = new c({
                              context: e,
                              type: n.dotsOptions.type,
                            })),
                              e.beginPath();
                            var j = function (t) {
                              for (
                                var r = function (r) {
                                    if (
                                      !(null === (m = p[t]) || void 0 === m
                                        ? void 0
                                        : m[r])
                                    )
                                      return "continue";
                                    B.draw(
                                      D + t * a,
                                      I + r * a,
                                      a,
                                      function (e, n) {
                                        var o;
                                        return !!(null === (o = p[t + e]) ||
                                        void 0 === o
                                          ? void 0
                                          : o[r + n]);
                                      }
                                    );
                                  },
                                  e = 0;
                                e < p[t].length;
                                e++
                              )
                                r(e);
                            };
                            for (q = 0; q < p.length; q++) j(q);
                          }
                          if (
                            null === (O = n.cornersDotOptions) || void 0 === O
                              ? void 0
                              : O.gradient
                          ) {
                            R = n.cornersDotOptions.gradient;
                            var E = r._createGradient({
                              context: e,
                              options: R,
                              additionalRotation: P,
                              x: D + 2 * a,
                              y: I + 2 * a,
                              size: u,
                            });
                            R.colorStops.forEach(function (t) {
                              var r = t.offset,
                                e = t.color;
                              E.addColorStop(r, e);
                            }),
                              (e.fillStyle = e.strokeStyle = E);
                          } else
                            (null === (S = n.cornersDotOptions) || void 0 === S
                              ? void 0
                              : S.color) &&
                              (e.fillStyle = e.strokeStyle =
                                n.cornersDotOptions.color);
                          e.fill("evenodd");
                        }
                      });
                    }),
                    (t.prototype.loadImage = function () {
                      var t = this;
                      return new Promise(function (r, e) {
                        var n = t._options,
                          o = new Image();
                        if (!n.image) return e("Image is not defined");
                        "string" == typeof n.imageOptions.crossOrigin &&
                          (o.crossOrigin = n.imageOptions.crossOrigin),
                          (t._image = o),
                          (o.onload = function () {
                            r();
                          }),
                          (o.src = n.image);
                      });
                    }),
                    (t.prototype.drawImage = function (t) {
                      var r = t.width,
                        e = t.height,
                        n = t.count,
                        o = t.dotSize,
                        i = this.context;
                      if (!i) throw "canvasContext is not defined";
                      if (!this._image) throw "image is not defined";
                      var a = this._options,
                        s = Math.floor((a.width - n * o) / 2),
                        u = Math.floor((a.height - n * o) / 2),
                        c = s + a.imageOptions.margin + (n * o - r) / 2,
                        h = u + a.imageOptions.margin + (n * o - e) / 2,
                        f = r - 2 * a.imageOptions.margin,
                        d = e - 2 * a.imageOptions.margin;
                      i.drawImage(
                        this._image,
                        c,
                        h,
                        f < 0 ? 0 : f,
                        d < 0 ? 0 : d
                      );
                    }),
                    (t.prototype._createGradient = function (t) {
                      var r,
                        e = t.context,
                        n = t.options,
                        o = t.additionalRotation,
                        i = t.x,
                        a = t.y,
                        s = t.size;
                      if ("radial" === n.type)
                        r = e.createRadialGradient(
                          i + s / 2,
                          a + s / 2,
                          0,
                          i + s / 2,
                          a + s / 2,
                          s / 2
                        );
                      else {
                        var u = ((n.rotation || 0) + o) % (2 * Math.PI),
                          c = (u + 2 * Math.PI) % (2 * Math.PI),
                          h = i + s / 2,
                          f = a + s / 2,
                          d = i + s / 2,
                          l = a + s / 2;
                        (c >= 0 && c <= 0.25 * Math.PI) ||
                        (c > 1.75 * Math.PI && c <= 2 * Math.PI)
                          ? ((h -= s / 2),
                            (f -= (s / 2) * Math.tan(u)),
                            (d += s / 2),
                            (l += (s / 2) * Math.tan(u)))
                          : c > 0.25 * Math.PI && c <= 0.75 * Math.PI
                          ? ((f -= s / 2),
                            (h -= s / 2 / Math.tan(u)),
                            (l += s / 2),
                            (d += s / 2 / Math.tan(u)))
                          : c > 0.75 * Math.PI && c <= 1.25 * Math.PI
                          ? ((h += s / 2),
                            (f += (s / 2) * Math.tan(u)),
                            (d -= s / 2),
                            (l -= (s / 2) * Math.tan(u)))
                          : c > 1.25 * Math.PI &&
                            c <= 1.75 * Math.PI &&
                            ((f += s / 2),
                            (h += s / 2 / Math.tan(u)),
                            (l -= s / 2),
                            (d -= s / 2 / Math.tan(u))),
                          (r = e.createLinearGradient(
                            Math.round(h),
                            Math.round(f),
                            Math.round(d),
                            Math.round(l)
                          ));
                      }
                      return r;
                    }),
                    t
                  );
                })();
                for (var y = {}, w = 0; w <= 40; w++) y[w] = w;
                const x = {
                  width: 300,
                  height: 300,
                  data: "",
                  margin: 0,
                  qrOptions: {
                    typeNumber: y[0],
                    mode: void 0,
                    errorCorrectionLevel: "Q",
                  },
                  imageOptions: {
                    hideBackgroundDots: !0,
                    imageSize: 0.4,
                    crossOrigin: void 0,
                    margin: 0,
                  },
                  dotsOptions: { type: "square", color: "#000" },
                  backgroundOptions: { color: "#fff" },
                };
                var b = function () {
                  return (b =
                    Object.assign ||
                    function (t) {
                      for (var r, e = 1, n = arguments.length; e < n; e++)
                        for (var o in (r = arguments[e]))
                          Object.prototype.hasOwnProperty.call(r, o) &&
                            (t[o] = r[o]);
                      return t;
                    }).apply(this, arguments);
                };
                function _(t) {
                  var r = b({}, t);
                  if (!r.colorStops || !r.colorStops.length)
                    throw "Field 'colorStops' is required in gradient";
                  return (
                    r.rotation
                      ? (r.rotation = Number(r.rotation))
                      : (r.rotation = 0),
                    (r.colorStops = r.colorStops.map(function (t) {
                      return b(b({}, t), { offset: Number(t.offset) });
                    })),
                    r
                  );
                }
                function M(t) {
                  var r = b({}, t);
                  return (
                    (r.width = Number(r.width)),
                    (r.height = Number(r.height)),
                    (r.margin = Number(r.margin)),
                    (r.imageOptions = b(b({}, r.imageOptions), {
                      hideBackgroundDots: Boolean(
                        r.imageOptions.hideBackgroundDots
                      ),
                      imageSize: Number(r.imageOptions.imageSize),
                      margin: Number(r.imageOptions.margin),
                    })),
                    r.margin > Math.min(r.width, r.height) &&
                      (r.margin = Math.min(r.width, r.height)),
                    (r.dotsOptions = b({}, r.dotsOptions)),
                    r.dotsOptions.gradient &&
                      (r.dotsOptions.gradient = _(r.dotsOptions.gradient)),
                    r.cornersSquareOptions &&
                      ((r.cornersSquareOptions = b({}, r.cornersSquareOptions)),
                      r.cornersSquareOptions.gradient &&
                        (r.cornersSquareOptions.gradient = _(
                          r.cornersSquareOptions.gradient
                        ))),
                    r.cornersDotOptions &&
                      ((r.cornersDotOptions = b({}, r.cornersDotOptions)),
                      r.cornersDotOptions.gradient &&
                        (r.cornersDotOptions.gradient = _(
                          r.cornersDotOptions.gradient
                        ))),
                    r.backgroundOptions &&
                      ((r.backgroundOptions = b({}, r.backgroundOptions)),
                      r.backgroundOptions.gradient &&
                        (r.backgroundOptions.gradient = _(
                          r.backgroundOptions.gradient
                        ))),
                    r
                  );
                }
                var m = e(192),
                  O = e.n(m);
                const S = (function () {
                  function t(t) {
                    (this._options = t ? M(a(x, t)) : x), this.update();
                  }
                  return (
                    (t._clearContainer = function (t) {
                      t && (t.innerHTML = "");
                    }),
                    (t.prototype.update = function (r) {
                      t._clearContainer(this._container),
                        (this._options = r
                          ? M(a(this._options, r))
                          : this._options),
                        this._options.data &&
                          ((this._qr = O()(
                            this._options.qrOptions.typeNumber,
                            this._options.qrOptions.errorCorrectionLevel
                          )),
                          this._qr.addData(
                            this._options.data,
                            this._options.qrOptions.mode ||
                              (function (t) {
                                switch (!0) {
                                  case /^[0-9]*$/.test(t):
                                    return "Numeric";
                                  case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                                    return "Alphanumeric";
                                  default:
                                    return "Byte";
                                }
                              })(this._options.data)
                          ),
                          this._qr.make(),
                          (this._canvas = new v(this._options)),
                          (this._drawingPromise = this._canvas.drawQR(
                            this._qr
                          )),
                          this.append(this._container));
                    }),
                    (t.prototype.append = function (t) {
                      if (t) {
                        if ("function" != typeof t.appendChild)
                          throw "Container should be a single DOM node";
                        this._canvas && t.appendChild(this._canvas.getCanvas()),
                          (this._container = t);
                      }
                    }),
                    (t.prototype.download = function (t) {
                      var r = this;
                      this._drawingPromise &&
                        this._drawingPromise.then(function () {
                          if (r._canvas) {
                            var e = "png",
                              n = "qr";
                            "string" == typeof t
                              ? ((e = t),
                                console.warn(
                                  "Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument"
                                ))
                              : "object" == typeof t &&
                                null !== t &&
                                (t.name && (n = t.name),
                                t.extension && (e = t.extension)),
                              (function (t, r) {
                                var e = document.createElement("a");
                                (e.download = r),
                                  (e.href = t),
                                  document.body.appendChild(e),
                                  e.click(),
                                  document.body.removeChild(e);
                              })(
                                r._canvas.getCanvas().toDataURL("image/" + e),
                                n + "." + e
                              );
                          }
                        });
                    }),
                    t
                  );
                })();
              },
            },
            r = {};
          function e(n) {
            if (r[n]) return r[n].exports;
            var o = (r[n] = { exports: {} });
            return t[n](o, o.exports, e), o.exports;
          }
          return (
            (e.n = (t) => {
              var r = t && t.__esModule ? () => t.default : () => t;
              return e.d(r, { a: r }), r;
            }),
            (e.d = (t, r) => {
              for (var n in r)
                e.o(r, n) &&
                  !e.o(t, n) &&
                  Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
            }),
            (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
            e(151)
          );
        })().default);
    },
  },
]);
//# sourceMappingURL=npm.qr-code-styling.6d4087c107d121ea4739.chunk.js.map
