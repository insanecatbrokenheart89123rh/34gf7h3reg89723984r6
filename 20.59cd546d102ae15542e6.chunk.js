(this.webpackJsonp = this.webpackJsonp || []).push([
  [20],
  {
    15: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "RootScope", function () {
          return r;
        });
      var i = s(43),
        n = s(50),
        o = s(30);
      class r extends n.a {
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
              this.myId = "number" == typeof i.c ? +e : "" + e;
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
      const c = new r();
      (o.a.rootScope = c), (t.default = c);
    },
    30: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      const i = s(76).a.debug,
        n = "undefined" != typeof window ? window : self;
      t.b = i;
    },
    43: function (e, t, s) {
      "use strict";
      s.d(t, "c", function () {
        return i;
      }),
        s.d(t, "d", function () {
          return n;
        }),
        s.d(t, "e", function () {
          return o;
        }),
        s.d(t, "b", function () {
          return r;
        }),
        s.d(t, "a", function () {
          return c;
        });
      const i = 0,
        n = 1271266957,
        o = 777e3,
        r = 2147483647,
        c = "";
    },
    50: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var i = s(62);
      class n {
        constructor(e) {
          this._constructor(e);
        }
        _constructor(e = !1) {
          (this.reuseResults = e),
            (this.listeners = {}),
            (this.listenerResults = {});
        }
        addEventListener(e, t, s) {
          var i, n;
          (null !== (i = this.listeners[e]) && void 0 !== i
            ? i
            : (this.listeners[e] = [])
          ).push({
            callback: t,
            options: s,
          }),
            this.listenerResults.hasOwnProperty(e) &&
              (t(...this.listenerResults[e]),
              null === (n = s) || void 0 === n ? void 0 : n.once) &&
              this.listeners[e].pop();
        }
        addMultipleEventsListeners(e) {
          for (const t in e) this.addEventListener(t, e[t]);
        }
        removeEventListener(e, t, s) {
          this.listeners[e] &&
            Object(i.a)(this.listeners[e], (e) => e.callback === t);
        }
        _dispatchEvent(e, t, ...s) {
          this.reuseResults && (this.listenerResults[e] = s);
          const i = t && [],
            n = this.listeners[e];
          if (n) {
            n.slice().forEach((t) => {
              var o;
              if (-1 === n.findIndex((e) => e.callback === t.callback)) return;
              let r;
              try {
                r = t.callback(...s);
              } catch (e) {
                console.error(e);
              }
              i && i.push(r),
                (null === (o = t.options) || void 0 === o ? void 0 : o.once) &&
                  this.removeEventListener(e, t.callback);
            });
          }
          return i;
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
    62: function (e, t, s) {
      "use strict";
      function i(e, t) {
        const s = e.findIndex(t);
        return -1 !== s ? e.splice(s, 1)[0] : void 0;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    76: function (e, t, s) {
      "use strict";
      const i = {
        test: location.search.indexOf("test=1") > 0,
        debug: location.search.indexOf("debug=1") > 0,
        http: !1,
        ssl: !0,
        multipleConnections: !0,
        asServiceWorker: !1,
        transport: "websocket",
      };
      (i.http = location.search.indexOf("http=1") > 0),
        i.http && (i.transport = "https"),
        (t.a = i);
    },
  },
]);
//# sourceMappingURL=20.59cd546d102ae15542e6.chunk.js.map
