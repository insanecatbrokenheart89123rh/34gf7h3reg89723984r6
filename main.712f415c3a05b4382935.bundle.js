!(function (e) {
  function t(t) {
    for (var n, i, a = t[0], r = t[1], c = 0, s = []; c < a.length; c++)
      (i = a[c]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]),
        (o[i] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    for (u && u(t); s.length; ) s.shift()();
  }
  var n = {},
    o = {
      10: 0,
    };
  function i(e) {
    return (
      a.p +
      "" +
      ({
        11: "npm.qr-code-styling",
      }[e] || e) +
      "." +
      {
        0: "e0afbd5895b2c8eb71c6",
        1: "501f1b99f6befd50ee5e",
        2: "74a3da7f5452b44843ff",
        3: "783454d94e8eb002e387",
        4: "a8e3bb16d79d17555a55",
        5: "48f088a898536de4b9c6",
        6: "543c4285d6bef299cc10",
        7: "d3d071d9ce69b3ea581e",
        8: "ea3cd7974ebbd0d0029d",
        9: "6eaa4e06851092205efd",
        11: "6d4087c107d121ea4739",
        12: "01db04d46bffee9b4794",
        13: "be17671876522af09c51",
        14: "a5ced60a0aaf18dbe920",
        15: "9b267650f7456cd423be",
        16: "47389f11873f960444d8",
        17: "fae79d657f42f1745c9f",
        18: "1b1c4c43a04abce6202d",
        19: "993d7e5357e9cbe12993",
        20: "59cd546d102ae15542e6",
        21: "49b949da4f2493f6b111",
        22: "a20a1ec6ea627171c353",
        23: "d52d4b270d13e4bb8a17",
        24: "4d8c06f2db954418f16d",
        25: "511ffdcc599650ed6f7b",
        26: "ba2ec08326e25f93e0d7",
        27: "f4a134d00776769d844a",
        28: "6667bb68e660e626d453",
        29: "43e1a26c8877ba19d310",
        30: "7ddf051a0eba2a18fedf",
        31: "9a9a2834c731e789faf2",
      }[e] +
      ".chunk.js"
    );
  }
  function a(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
  }
  (a.e = function (e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, i) {
          n = o[e] = [t, i];
        });
        t.push((n[2] = r));
        var c = new Error();
        var s = (function t(n, r) {
          var s,
            u = document.createElement("script");
          (u.charset = "utf-8"),
            (u.timeout = 120),
            a.nc && u.setAttribute("nonce", a.nc),
            (u.src = n),
            (s = function (n) {
              (u.onerror = u.onload = null), clearTimeout(d);
              var a = o[e];
              if (0 !== a)
                if (a)
                  if (0 === r) {
                    var s = n && ("load" === n.type ? "missing" : n.type),
                      l = n && n.target && n.target.src;
                    (c.message =
                      "Loading chunk " +
                      e +
                      " failed after 999999 retries.\n(" +
                      s +
                      ": " +
                      l +
                      ")"),
                      (c.name = "ChunkLoadError"),
                      (c.type = s),
                      (c.request = l),
                      a[1](c),
                      (o[e] = void 0);
                  } else
                    setTimeout(function () {
                      var n = Date.now(),
                        o = t(i(e) + "?" + n, r - 1);
                      document.head.appendChild(o);
                    }, 0);
                else o[e] = void 0;
            });
          var d = setTimeout(function () {
            s({
              type: "timeout",
              target: u,
            });
          }, 12e4);
          return (u.onerror = u.onload = s), u;
        })(i(e), 999999);
        document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (a.m = e),
    (a.c = n),
    (a.d = function (e, t, n) {
      a.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var r = (this.webpackJsonp = this.webpackJsonp || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var u = c;
  a((a.s = 11));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "USER_AGENT", function () {
        return i;
      }),
      n.d(t, "IS_APPLE", function () {
        return a;
      }),
      n.d(t, "IS_ANDROID", function () {
        return r;
      }),
      n.d(t, "IS_CHROMIUM", function () {
        return c;
      }),
      n.d(t, "IS_APPLE_MOBILE", function () {
        return s;
      }),
      n.d(t, "IS_SAFARI", function () {
        return u;
      }),
      n.d(t, "IS_FIREFOX", function () {
        return d;
      }),
      n.d(t, "IS_MOBILE_SAFARI", function () {
        return l;
      }),
      n.d(t, "IS_MOBILE", function () {
        return f;
      });
    var o = n(2);
    const i = navigator ? navigator.userAgent : null,
      a = -1 !== navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),
      r = -1 !== navigator.userAgent.toLowerCase().indexOf("android"),
      c =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor),
      s =
        (/iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1)) &&
        !o.a.MSStream,
      u =
        !!("safari" in o.a) ||
        !(
          !i ||
          !(
            /\b(iPad|iPhone|iPod)\b/.test(i) ||
            (i.match("Safari") && !i.match("Chrome"))
          )
        ),
      d = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
      l = u && s,
      f =
        navigator.maxTouchPoints > 0 &&
        -1 !=
          navigator.userAgent.search(
            /iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i
          );
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "IS_TOUCH_SUPPORTED", function () {
        return o;
      });
    const o =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
  },
  function (e, t, n) {
    "use strict";
    const o = "undefined" != typeof window ? window : self;
    t.a = o;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return s;
      });
    var o = n(1),
      i = n(0),
      a = n(6),
      r = n(4);
    const c = i.IS_SAFARI && i.IS_MOBILE && o.IS_TOUCH_SUPPORTED;
    if (c) {
      let e = "clientY",
        t = 0;
      const n = {
          capture: !0,
          passive: !1,
        },
        o = (n) => {
          const o = n.touches[0],
            i = Object(a.a)(o.target, "scrollable-y");
          if (i) {
            const a = o[e],
              r = t - a,
              c = i.scrollTop,
              s = i.scrollHeight,
              u = i.clientHeight,
              d = c ? Math.round(c + i.clientHeight + r) : c + r;
            (s === u || d >= s || d <= 0) && n.preventDefault();
          } else n.preventDefault();
        };
      let i = 0;
      document.addEventListener(
        "focusin",
        (a) => {
          !a.target.classList.contains("is-sticky-input-bugged") ||
            a.timeStamp - i < 50 ||
            (Object(r.a)(a.target),
            document.addEventListener("touchmove", o, n),
            document.addEventListener("touchstart", (n) => {
              if (n.touches.length > 1) return;
              const o = n.touches[0];
              t = o[e];
            }));
        },
        {
          passive: !0,
        }
      ),
        document.addEventListener(
          "focusout",
          (e) => {
            document.removeEventListener("touchmove", o, n), (i = e.timeStamp);
          },
          {
            passive: !0,
          }
        ),
        document.addEventListener(
          "visibilitychange",
          () => {
            document.activeElement &&
              document.activeElement.classList.contains(
                "is-sticky-input-bugged"
              ) &&
              document.activeElement.blur &&
              Object(r.a)(document.activeElement);
          },
          {
            passive: !0,
          }
        );
    }
    function s(e) {
      c && e.classList.add("is-sticky-input-bugged");
    }
  },
  function (e, t, n) {
    "use strict";
    function o(e) {
      (e.style.transform = "translateY(-99999px)"),
        e.focus(),
        setTimeout(() => {
          e.style.transform = "";
        }, 0);
    }
    n.d(t, "a", function () {
      return o;
    });
  },
  function (e, t, n) {
    "use strict";
    function o(e) {
      if ((e = e || window.event)) {
        e = e.originalEvent || e;
        try {
          e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault(),
            (e.returnValue = !1),
            (e.cancelBubble = !0);
        } catch (e) {}
      }
      return !1;
    }
    n.d(t, "a", function () {
      return o;
    });
  },
  function (e, t, n) {
    "use strict";
    function o(e, t) {
      return e.closest("." + t);
    }
    n.d(t, "a", function () {
      return o;
    });
  },
  function (e, t, n) {
    "use strict";
    const o = {
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
    o.isMainDomain &&
      ((o.id = 2496), (o.hash = "8da85b0d5bfe62527e5b244c209159c3")),
      (t.a = o);
  },
  function (e, t, n) {
    "use strict";
    function o() {
      return (
        !(!document.activeElement || !document.activeElement.blur) &&
        (document.activeElement.blur(), !0)
      );
    }
    n.d(t, "a", function () {
      return o;
    });
  },
  function (e, t, n) {
    "use strict";
    let o;
    function i() {
      return (
        o ||
        (o =
          "fonts" in document
            ? Promise.race([
                Promise.all(
                  ["400 1rem Roboto", "500 1rem Roboto", "500 1rem tgico"].map(
                    (e) => document.fonts.load(e)
                  )
                ),
                new Promise((e) => setTimeout(e, 1e3)),
              ])
            : Promise.resolve())
      );
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  function (e, t, n) {
    "use strict";
    const o = -1 !== navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i);
    t.a = o;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(7),
      i = n(8),
      a = n(5),
      r = n(3),
      c = n(9),
      s = n(10),
      u = n(0),
      d =
        (n(12),
        n(13),
        n(14),
        function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                s(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              try {
                s(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, c);
            }
            s((o = o.apply(e, t || [])).next());
          });
        });
    document.addEventListener("DOMContentLoaded", () =>
      d(void 0, void 0, void 0, function* () {
        Element.prototype.toggleAttribute ||
          (Element.prototype.toggleAttribute = function (e, t) {
            return (
              void 0 !== t && (t = !!t),
              this.hasAttribute(e)
                ? !!t || (this.removeAttribute(e), !1)
                : !1 !== t && (this.setAttribute(e, ""), !0)
            );
          });
        const e = window.visualViewport || window;
        let t,
          d = !1;
        const l = () => {
            const n =
              0.01 *
              (d && !v.default.isOverlayActive
                ? e.height || e.innerHeight
                : window.innerHeight);
            t !== n &&
              (b.IS_TOUCH_SUPPORTED && t < n && n - t > 1 && Object(i.a)(),
              (t = n),
              document.documentElement.style.setProperty("--vh", n + "px"));
          },
          f = new Proxy(Worker, {
            construct: (e, t) => new e(t[0] + location.search),
          });
        Worker = f;
        const [m, b, h, v, g, p, P] = yield Promise.all([
          n.e(24).then(n.bind(null, 27)),
          Promise.resolve().then(n.bind(null, 1)),
          Promise.resolve().then(n.bind(null, 0)),
          n.e(20).then(n.bind(null, 15)),
          Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 17)),
          Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 16)),
          n.e(28).then(n.bind(null, 28)),
        ]);
        if ((window.addEventListener("resize", l), l(), r.a)) {
          const t = () => {
            (d = 1 === n && r.a && !v.default.isOverlayActive),
              l(),
              e !== window &&
                (d
                  ? (window.removeEventListener("resize", l),
                    e.addEventListener("resize", l))
                  : (e.removeEventListener("resize", l),
                    window.addEventListener("resize", l)));
          };
          let n;
          v.default.addEventListener("im_tab_change", (e) => {
            const o = void 0 !== n;
            (n = e), (o || 1 === n) && t();
          }),
            v.default.addEventListener("overlay_toggle", () => {
              t();
            });
        }
        h.IS_FIREFOX &&
          !s.a &&
          document.addEventListener("dragstart", (e) => {
            const t = e.target;
            if ("IMG" === t.tagName && t.classList.contains("emoji"))
              return Object(a.a)(e), !1;
          }),
          document.addEventListener("dragstart", (e) => {
            var t;
            if (
              "IMG" ===
              (null === (t = e.target) || void 0 === t ? void 0 : t.tagName)
            )
              return e.preventDefault(), !1;
          }),
          h.IS_FIREFOX && document.documentElement.classList.add("is-firefox"),
          h.IS_MOBILE && document.documentElement.classList.add("is-mobile"),
          h.IS_APPLE
            ? (h.IS_SAFARI &&
                document.documentElement.classList.add("is-safari"),
              document.documentElement.classList.add("emoji-supported"),
              h.IS_APPLE_MOBILE
                ? document.documentElement.classList.add("is-ios")
                : document.documentElement.classList.add("is-mac"))
            : h.IS_ANDROID &&
              document.documentElement.classList.add("is-android"),
          b.IS_TOUCH_SUPPORTED
            ? document.documentElement.classList.add("is-touch")
            : document.documentElement.classList.add("no-touch");
        const y = performance.now(),
          E = p.default.getCacheLangPack(),
          [S, w] = yield Promise.all([g.default.getState(), E]);
        function I(e, t) {
          (e.style.opacity = "0"),
            t.then(() => {
              window.requestAnimationFrame(() => {
                e.style.opacity = "";
              });
            });
        }
        p.default.setTimeFormat(S.settings.timeFormat),
          v.default.setThemeListener(),
          w.appVersion !== o.a.langPackVersion &&
            p.default.getLangPack(w.lang_code),
          console.log("got state, time:", performance.now() - y);
        const O = S.authState;
        if ("authStateSignedIn" !== O._) {
          console.log("Will mount auth page:", O._, Date.now() / 1e3);
          const e = document.getElementById("auth-pages");
          let t, o;
          if (e) {
            (t = e.querySelector(".scrollable")),
              (b.IS_TOUCH_SUPPORTED && !u.IS_MOBILE_SAFARI) ||
                t.classList.add("no-scrollbar"),
              (t.style.opacity = "0");
            const n = document.createElement("div");
            n.classList.add("auth-placeholder"),
              t.prepend(n),
              t.append(n.cloneNode());
          }
          try {
            yield Promise.all([
              Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 24)),
              Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 26)),
            ]).then(([e, t]) => {
              e.default.setAuthorized(!1), t.default.forceUnsubscribe();
            });
          } catch (e) {}
          switch (O._) {
            case "authStateSignIn":
              o = (yield Promise.all([
                n.e(0),
                n.e(1),
                n.e(2),
                n.e(3),
                n.e(13),
              ]).then(n.bind(null, 21))).default.mount();
              break;
            case "authStateSignQr":
              o = (yield Promise.all([
                n.e(0),
                n.e(1),
                n.e(2),
                n.e(3),
                n.e(21),
              ]).then(n.bind(null, 20))).default.mount();
              break;
            case "authStateAuthCode":
              o = (yield Promise.all([
                n.e(0),
                n.e(1),
                n.e(2),
                n.e(3),
                n.e(12),
              ]).then(n.bind(null, 22))).default.mount(O.sentCode);
              break;
            case "authStatePassword":
              o = (yield Promise.all([
                n.e(0),
                n.e(1),
                n.e(2),
                n.e(3),
                n.e(15),
              ]).then(n.bind(null, 23))).default.mount();
              break;
            case "authStateSignUp":
              o = (yield Promise.all([
                n.e(0),
                n.e(1),
                n.e(2),
                n.e(3),
                n.e(14),
              ]).then(n.bind(null, 25))).default.mount(O.authCode);
          }
          if (t) {
            o && (yield o);
            I(
              t,
              "fonts" in document
                ? Promise.race([
                    new Promise((e) => setTimeout(e, 1e3)),
                    document.fonts.ready,
                  ])
                : Promise.resolve()
            );
          }
        } else console.log("Will mount IM page:", Date.now() / 1e3), I(document.getElementById("main-columns"), Object(c.a)()), (yield Promise.all([n.e(0), n.e(1), n.e(2), n.e(30)]).then(n.bind(null, 19))).default.mount();
        const L = (yield n.e(17).then(n.bind(null, 18))).ripple;
        Array.from(document.getElementsByClassName("rp")).forEach((e) => L(e));
      })
    );
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
]);
//# sourceMappingURL=main.712f415c3a05b4382935.bundle.js.map
