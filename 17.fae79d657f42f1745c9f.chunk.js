(this.webpackJsonp = this.webpackJsonp || []).push([
  [17, 20],
  {
    122: function (e, t, s) {
      "use strict";
      var n = s(45),
        i = s(52),
        r = s(30),
        o = s(92);
      const c = new (class {
        constructor() {
          (this.promises = {}),
            (this.raf = n.b.bind(null)),
            (this.scheduled = !1);
        }
        do(e, t) {
          let s = this.promises[e];
          return (
            s || (this.scheduleFlush(), (s = this.promises[e] = Object(i.a)())),
            void 0 !== t && s.then(() => t()),
            s
          );
        }
        measure(e) {
          return this.do("read", e);
        }
        mutate(e) {
          return this.do("write", e);
        }
        mutateElement(e, t) {
          const s = Object(o.a)(e),
            n = s ? this.mutate() : Promise.resolve();
          return void 0 !== t && (s ? t() : n.then(() => t())), n;
        }
        scheduleFlush() {
          this.scheduled ||
            ((this.scheduled = !0),
            this.raf(() => {
              this.promises.read && this.promises.read.resolve(),
                this.promises.write && this.promises.write.resolve(),
                (this.scheduled = !1),
                (this.promises = {});
            }));
        }
      })();
      r.a && (r.a.sequentialDom = c), (t.a = c);
    },
    15: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "RootScope", function () {
          return o;
        });
      var n = s(43),
        i = s(50),
        r = s(30);
      class o extends i.a {
        constructor() {
          super(),
            (this.overlaysActive = 0),
            (this.idle = {
              isIDLE: !0,
              deactivated: !1,
              focusPromise: Promise.resolve(),
              focusResolve: () => {},
            }),
            (this.connectionStatus = {}),
            (this.filterId = 0),
            (this.config = {
              forwarded_count_max: 100,
              edit_time_limit: 172800,
              pinned_dialogs_count_max: 5,
              pinned_infolder_count_max: 100,
              message_length_max: 4096,
              caption_length_max: 1024,
            }),
            this.addEventListener("peer_changed", (e) => {
              (this.peerId = e),
                document.body.classList.toggle("has-chat", !!e);
            }),
            this.addEventListener("user_auth", ({ id: e }) => {
              this.myId = "number" == typeof n.c ? +e : "" + e;
            }),
            this.addEventListener("connection_status_change", (e) => {
              this.connectionStatus[e.name] = e;
            }),
            this.addEventListener("idle", (e) => {
              e
                ? (this.idle.focusPromise = new Promise((e) => {
                    this.idle.focusResolve = e;
                  }))
                : this.idle.focusResolve();
            });
        }
        get themeColorElem() {
          return void 0 !== this._themeColorElem
            ? this._themeColorElem
            : (this._themeColorElem =
                document.head.querySelector('[name="theme-color"]') || null);
        }
        setThemeColor(e = this.themeColor) {
          e || (e = this.isNight() ? "#212121" : "#ffffff");
          const t = this.themeColorElem;
          t && t.setAttribute("content", e);
        }
        setThemeListener() {
          try {
            const e = window.matchMedia("(prefers-color-scheme: dark)"),
              t = () => {
                (this.systemTheme = e.matches ? "night" : "day"),
                  this.myId
                    ? this.dispatchEvent("theme_change")
                    : this.setTheme();
              };
            "addEventListener" in e
              ? e.addEventListener("change", t)
              : "addListener" in e && e.addListener(t),
              t();
          } catch (e) {}
        }
        setTheme() {
          const e = this.isNight(),
            t = document.head.querySelector('[name="color-scheme"]');
          t && t.setAttribute("content", e ? "dark" : "light"),
            document.documentElement.classList.toggle("night", e),
            this.setThemeColor();
        }
        get isOverlayActive() {
          return this.overlaysActive > 0;
        }
        set isOverlayActive(e) {
          (this.overlaysActive += e ? 1 : -1),
            this.dispatchEvent("overlay_toggle", this.isOverlayActive);
        }
        isNight() {
          return "night" === this.getTheme().name;
        }
        getTheme(
          e = "system" === this.settings.theme
            ? this.systemTheme
            : this.settings.theme
        ) {
          return this.settings.themes.find((t) => t.name === e);
        }
      }
      const c = new o();
      (r.a.rootScope = c), (t.default = c);
    },
    18: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "ripple", function () {
          return l;
        });
      var n = s(6),
        i = s(122),
        r = s(1),
        o = s(15),
        c = s(98);
      let a = 0;
      function l(e, t = () => Promise.resolve(), s = null, l = !1, u = e) {
        if (e.querySelector(".c-ripple")) return;
        e.classList.add("rp");
        let d = document.createElement("div");
        d.classList.add("c-ripple");
        let h;
        e.classList.contains("rp-square") && d.classList.add("is-square"),
          e[l ? "prepend" : "append"](d);
        const m = (e, n) => {
            const o = Date.now(),
              c = document.createElement("div"),
              l = a++,
              u =
                1e3 *
                +window
                  .getComputedStyle(d)
                  .getPropertyValue("--ripple-duration")
                  .replace("s", "");
            (h = () => {
              let e = Date.now() - o;
              const t = () => {
                i.a.mutate(() => {
                  c.remove();
                }),
                  s && s(l);
              };
              if (e < u) {
                let s = Math.max(u - e, u / 2);
                setTimeout(
                  () => c.classList.add("hiding"),
                  Math.max(s - u / 2, 0)
                ),
                  setTimeout(t, s);
              } else c.classList.add("hiding"), setTimeout(t, u / 2);
              r.IS_TOUCH_SUPPORTED ||
                window.removeEventListener("contextmenu", h),
                (h = null),
                (p = !1);
            }),
              t && t(l),
              window.requestAnimationFrame(() => {
                const t = d.getBoundingClientRect();
                c.classList.add("c-ripple__circle");
                const s = e - t.left,
                  i = n - t.top,
                  r = Math.sqrt(
                    Math.pow(Math.abs(i - t.height / 2) + t.height / 2, 2) +
                      Math.pow(Math.abs(s - t.width / 2) + t.width / 2, 2)
                  ),
                  o = s - r / 2,
                  a = i - r / 2;
                (c.style.width = c.style.height = r + "px"),
                  (c.style.left = o + "px"),
                  (c.style.top = a + "px"),
                  d.append(c);
              });
          },
          f = (t) =>
            t.target !== e &&
            (["BUTTON", "A"].includes(t.target.tagName) ||
              Object(n.a)(t.target, "c-ripple") !== d) &&
            (u === e || !Object(c.a)(t.target, u));
        let p = !1;
        if (r.IS_TOUCH_SUPPORTED) {
          let e = () => {
            h && h();
          };
          u.addEventListener(
            "touchstart",
            (t) => {
              if (!o.default.settings.animationsEnabled) return;
              if (t.touches.length > 1 || p || f(t)) return;
              p = !0;
              let { clientX: s, clientY: n } = t.touches[0];
              m(s, n),
                u.addEventListener("touchend", e, {
                  once: !0,
                }),
                window.addEventListener(
                  "touchmove",
                  (t) => {
                    (t.cancelBubble = !0),
                      t.stopPropagation(),
                      e(),
                      u.removeEventListener("touchend", e);
                  },
                  {
                    once: !0,
                  }
                );
            },
            {
              passive: !0,
            }
          );
        } else
          u.addEventListener(
            "mousedown",
            (e) => {
              if (![0, 2].includes(e.button)) return;
              if (!o.default.settings.animationsEnabled) return;
              if ("0" === u.dataset.ripple || f(e)) return;
              if (p) return void (p = !1);
              let { clientX: t, clientY: s } = e;
              m(t, s),
                window.addEventListener("mouseup", h, {
                  once: !0,
                  passive: !0,
                }),
                window.addEventListener("contextmenu", h, {
                  once: !0,
                  passive: !0,
                });
            },
            {
              passive: !0,
            }
          );
      }
    },
    30: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      const n = s(76).a.debug,
        i = "undefined" != typeof window ? window : self;
      t.b = n;
    },
    43: function (e, t, s) {
      "use strict";
      s.d(t, "c", function () {
        return n;
      }),
        s.d(t, "d", function () {
          return i;
        }),
        s.d(t, "e", function () {
          return r;
        }),
        s.d(t, "b", function () {
          return o;
        }),
        s.d(t, "a", function () {
          return c;
        });
      const n = 0,
        i = 1271266957,
        r = 777e3,
        o = 2147483647,
        c = "";
    },
    45: function (e, t, s) {
      "use strict";
      let n;
      function i(e) {
        n
          ? n.push(e)
          : ((n = [e]),
            requestAnimationFrame(() => {
              const e = n;
              (n = void 0), e.forEach((e) => e());
            }));
      }
      s.d(t, "b", function () {
        return i;
      }),
        s.d(t, "c", function () {
          return a;
        }),
        s.d(t, "d", function () {
          return l;
        }),
        s.d(t, "a", function () {
          return u;
        });
      let r,
        o,
        c = !1;
      function a(e) {
        r
          ? c
            ? e()
            : r.push(e)
          : ((r = [e]),
            requestAnimationFrame(() => {
              c = !0;
              for (let e = 0; e < r.length; ++e) r[e]();
              (r = void 0), (c = !1);
            }));
      }
      function l() {
        return (
          o ||
          ((o = new Promise(requestAnimationFrame)),
          o.then(() => {
            o = void 0;
          }),
          o)
        );
      }
      function u() {
        return new Promise((e) => {
          i(() => {
            i(e);
          });
        });
      }
    },
    50: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      var n = s(62);
      class i {
        constructor(e) {
          this._constructor(e);
        }
        _constructor(e = !1) {
          (this.reuseResults = e),
            (this.listeners = {}),
            (this.listenerResults = {});
        }
        addEventListener(e, t, s) {
          var n, i;
          (null !== (n = this.listeners[e]) && void 0 !== n
            ? n
            : (this.listeners[e] = [])
          ).push({
            callback: t,
            options: s,
          }),
            this.listenerResults.hasOwnProperty(e) &&
              (t(...this.listenerResults[e]),
              null === (i = s) || void 0 === i ? void 0 : i.once) &&
              this.listeners[e].pop();
        }
        addMultipleEventsListeners(e) {
          for (const t in e) this.addEventListener(t, e[t]);
        }
        removeEventListener(e, t, s) {
          this.listeners[e] &&
            Object(n.a)(this.listeners[e], (e) => e.callback === t);
        }
        _dispatchEvent(e, t, ...s) {
          this.reuseResults && (this.listenerResults[e] = s);
          const n = t && [],
            i = this.listeners[e];
          if (i) {
            i.slice().forEach((t) => {
              var r;
              if (-1 === i.findIndex((e) => e.callback === t.callback)) return;
              let o;
              try {
                o = t.callback(...s);
              } catch (e) {
                console.error(e);
              }
              n && n.push(o),
                (null === (r = t.options) || void 0 === r ? void 0 : r.once) &&
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
    },
    52: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      var n = s(77);
      function i() {
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
          t = new Promise((s, n) => {
            (e.resolve = (e) => {
              t.isFulfilled || t.isRejected || ((t.isFulfilled = !0), s(e));
            }),
              (e.reject = (...e) => {
                t.isRejected || t.isFulfilled || ((t.isRejected = !0), n(...e));
              });
          });
        return (
          t.catch(n.a).finally(() => {
            (t.notify = t.notifyAll = t.lastNotify = null),
              (t.listeners.length = 0),
              t.cancel && (t.cancel = () => {});
          }),
          Object.assign(t, e),
          t
        );
      }
    },
    62: function (e, t, s) {
      "use strict";
      function n(e, t) {
        const s = e.findIndex(t);
        return -1 !== s ? e.splice(s, 1)[0] : void 0;
      }
      s.d(t, "a", function () {
        return n;
      });
    },
    76: function (e, t, s) {
      "use strict";
      const n = {
        test: location.search.indexOf("test=1") > 0,
        debug: location.search.indexOf("debug=1") > 0,
        http: !1,
        ssl: !0,
        multipleConnections: !0,
        asServiceWorker: !1,
        transport: "websocket",
      };
      (n.http = location.search.indexOf("http=1") > 0),
        n.http && (n.transport = "https"),
        (t.a = n);
    },
    77: function (e, t, s) {
      "use strict";
      function n() {}
      s.d(t, "a", function () {
        return n;
      });
    },
    92: function (e, t, s) {
      "use strict";
      function n(e) {
        return null == e ? void 0 : e.isConnected;
      }
      s.d(t, "a", function () {
        return n;
      });
    },
    98: function (e, t, s) {
      "use strict";
      function n(e, t) {
        if (e.parentElement === t) return e;
        for (; e.parentElement; )
          if ((e = e.parentElement).parentElement === t) return e;
        return null;
      }
      s.d(t, "a", function () {
        return n;
      });
    },
  },
]);
//# sourceMappingURL=17.fae79d657f42f1745c9f.chunk.js.map
