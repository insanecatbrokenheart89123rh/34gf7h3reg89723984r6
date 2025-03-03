(this.webpackJsonp = this.webpackJsonp || []).push([
  [0, 20],
  {
    105: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return d;
      });
      var r = s(52),
        n = s(96),
        i = s(76),
        o = s(95),
        a = s(42),
        c = s(41);
      class l {
        constructor(e, t) {
          (this.storageIsAvailable = !0),
            Object(a.a)(this, e),
            i.a.test && (this.name += "_test"),
            (this.storeName = t),
            (this.log = Object(c.b)("IDB-" + this.storeName)),
            this.openDatabase(!0),
            l.STORAGES.push(this);
        }
        static closeDatabases(e) {
          this.STORAGES.forEach((t) => {
            if (e && e === t) return;
            const s = t.db;
            s && ((s.onclose = () => {}), s.close());
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
          let s = !1;
          return (
            setTimeout(() => {
              s ||
                t.onerror({
                  type: "IDB_CREATE_TIMEOUT",
                });
            }, 3e3),
            (this.openDbPromise = new Promise((e, r) => {
              (t.onsuccess = (n) => {
                s = !0;
                const i = t.result;
                let o = !1;
                this.log("Opened"),
                  (i.onerror = (e) => {
                    (this.storageIsAvailable = !1),
                      this.log.error(
                        "Error creating/accessing IndexedDB database",
                        e
                      ),
                      r(e);
                  }),
                  (i.onclose = (e) => {
                    this.log.error("closed:", e), !o && this.openDatabase();
                  }),
                  (i.onabort = (e) => {
                    this.log.error("abort:", e);
                    const t = e.target;
                    this.openDatabase((o = !0)),
                      t.onerror && t.onerror(e),
                      i.close();
                  }),
                  (i.onversionchange = (e) => {
                    this.log.error("onversionchange, lol?");
                  }),
                  e((this.db = i));
              }),
                (t.onerror = (e) => {
                  (s = !0),
                    (this.storageIsAvailable = !1),
                    this.log.error(
                      "Error creating/accessing IndexedDB database",
                      e
                    ),
                    r(e);
                }),
                (t.onupgradeneeded = (e) => {
                  (s = !0),
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
                        var s;
                        const r = e.createObjectStore(t.name);
                        if (
                          null === (s = t.indexes) || void 0 === s
                            ? void 0
                            : s.length
                        )
                          for (const e of t.indexes)
                            r.createIndex(
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
            this.getObjectStore(
              "readwrite",
              (t) => e.map((e) => t.delete(e)),
              ""
            )
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
              (s) => e.map((e, r) => s.put(t[r], e)),
              ""
            )
          );
        }
        saveFile(e, t) {
          return t instanceof Blob || (t = Object(o.a)([t])), this.save(e, t);
        }
        get(e) {
          return (
            Array.isArray(e) || (e = [].concat(e)),
            this.getObjectStore("readonly", (t) => e.map((e) => t.get(e)), "")
          );
        }
        getObjectStore(e, t, s, r = this.storeName) {
          let n;
          return (
            s && ((n = performance.now()), this.log(s + ": start")),
            this.openDatabase().then(
              (i) =>
                new Promise((o, a) => {
                  const c = i.transaction([r], e);
                  (c.onerror = (e) => {
                    clearTimeout(l), a(c.error);
                  }),
                    (c.oncomplete = (e) => {
                      clearTimeout(l),
                        s && this.log(s + ": end", performance.now() - n);
                      const t = d.map((e) => e.result);
                      o(u ? t : t[0]);
                    });
                  const l = setTimeout(() => {
                      this.log.error("transaction not finished", c);
                    }, 1e4),
                    h = t(c.objectStore(r)),
                    u = Array.isArray(h),
                    d = u ? h : [].concat(h);
                })
            )
          );
        }
        getAll() {
          return this.getObjectStore("readonly", (e) => e.getAll(), "");
        }
      }
      l.STORAGES = [];
      var h = function (e, t, s, r) {
        return new (s || (s = Promise))(function (n, i) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      function u() {}
      class d {
        constructor(e, t) {
          (this.db = e),
            (this.storeName = t),
            (this.cache = {}),
            (this.getPromises = new Map()),
            (this.keysToSet = new Set()),
            (this.saveDeferred = Object(r.a)()),
            (this.keysToDelete = new Set()),
            (this.deleteDeferred = Object(r.a)()),
            (this.storage = new l(e, t)),
            d.STORAGES.length
              ? (this.useStorage = d.STORAGES[0].useStorage)
              : (this.useStorage = !0),
            (this.savingFreezed = !1),
            d.STORAGES.push(this),
            (this.saveThrottled = Object(n.a)(
              () =>
                h(this, void 0, void 0, function* () {
                  const e = this.saveDeferred;
                  this.saveDeferred = Object(r.a)();
                  const t = this.keysToSet;
                  if (t.size) {
                    const e = Array.from(t.values());
                    t.clear();
                    try {
                      const t = e.map((e) => this.cache[e]);
                      yield this.storage.save(e, t);
                    } catch (t) {
                      console.error("[AS]: set error:", t, e);
                    }
                  }
                  e.resolve(), t.size && this.saveThrottled();
                }),
              16,
              !1
            )),
            (this.deleteThrottled = Object(n.a)(
              () =>
                h(this, void 0, void 0, function* () {
                  const e = this.deleteDeferred;
                  this.deleteDeferred = Object(r.a)();
                  const t = this.keysToDelete;
                  if (t.size) {
                    const e = Array.from(t.values());
                    t.clear();
                    try {
                      yield this.storage.delete(e);
                    } catch (t) {
                      console.error("[AS]: delete error:", t, e);
                    }
                  }
                  e.resolve(), t.size && this.deleteThrottled();
                }),
              16,
              !1
            )),
            (this.getThrottled = Object(n.a)(
              () =>
                h(this, void 0, void 0, function* () {
                  const e = Array.from(this.getPromises.keys());
                  this.storage
                    .get(e)
                    .then(
                      (t) => {
                        for (let s = 0, r = e.length; s < r; ++s) {
                          const r = e[s],
                            n = this.getPromises.get(r);
                          n &&
                            (n.resolve((this.cache[r] = t[s])),
                            this.getPromises.delete(r));
                        }
                      },
                      (s) => {
                        ["NO_ENTRY_FOUND", "STORAGE_OFFLINE"].includes(s) ||
                          ((this.useStorage = !1),
                          console.error("[AS]: get error:", s, e, t));
                        for (let t = 0, s = e.length; t < s; ++t) {
                          const s = e[t],
                            r = this.getPromises.get(s);
                          r && (r.resolve(void 0), this.getPromises.delete(s));
                        }
                      }
                    )
                    .finally(() => {
                      this.getPromises.size && this.getThrottled();
                    });
                }),
              16,
              !1
            ));
        }
        isAvailable() {
          return this.useStorage;
        }
        getCache() {
          return this.cache;
        }
        getFromCache(e) {
          return this.cache[e];
        }
        setToCache(e, t) {
          return (this.cache[e] = t);
        }
        get(e, t = !0) {
          return h(this, void 0, void 0, function* () {
            if (this.cache.hasOwnProperty(e) && t) return this.getFromCache(e);
            if (this.useStorage) {
              const t = this.getPromises.get(e);
              if (t) return t;
              const s = Object(r.a)();
              return this.getPromises.set(e, s), this.getThrottled(), s;
            }
          });
        }
        getAll() {
          return this.storage.getAll().catch(() => []);
        }
        set(e, t = !1) {
          const s = this.useStorage && !t && !this.savingFreezed;
          for (const t in e)
            if (e.hasOwnProperty(t)) {
              const r = e[t];
              this.setToCache(t, r),
                s &&
                  (this.keysToSet.add(t),
                  this.keysToDelete.delete(t),
                  this.saveThrottled());
            }
          return s ? this.saveDeferred : Promise.resolve();
        }
        delete(e, t = !1) {
          return (
            (e = "" + e),
            t || delete this.cache[e],
            this.useStorage &&
              (this.keysToSet.delete(e),
              this.keysToDelete.add(e),
              this.deleteThrottled()),
            this.useStorage ? this.deleteDeferred : Promise.resolve()
          );
        }
        clear(e = !1) {
          if (!e) for (const e in this.cache) delete this.cache[e];
          return this.storage.clear().catch(u);
        }
        static toggleStorage(e) {
          return Promise.all(
            this.STORAGES.map(
              (t) => (
                (t.useStorage = e),
                e
                  ? t.set(t.cache)
                  : (t.keysToSet.clear(),
                    t.keysToDelete.clear(),
                    t.getPromises.forEach((e) => e.resolve(void 0)),
                    t.getPromises.clear(),
                    t.clear(!0))
              )
            )
          ).catch(u);
        }
        static freezeSaving(e, t) {
          this.STORAGES.forEach((e) => (e.savingFreezed = !0));
          try {
            e();
          } catch (e) {}
          this.STORAGES.forEach((e) => (e.savingFreezed = !1));
        }
      }
      d.STORAGES = [];
    },
    140: function (e, t, s) {
      "use strict";
      t.a = {
        name: "tweb",
        version: 7,
        stores: [
          {
            name: "session",
          },
          {
            name: "stickerSets",
          },
          {
            name: "users",
          },
          {
            name: "chats",
          },
          {
            name: "dialogs",
          },
          {
            name: "messages",
          },
        ],
      };
    },
    15: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "RootScope", function () {
          return o;
        });
      var r = s(43),
        n = s(50),
        i = s(30);
      class o extends n.a {
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
              this.myId = "number" == typeof r.c ? +e : "" + e;
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
      const a = new o();
      (i.a.rootScope = a), (t.default = a);
    },
    169: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      }),
        s.d(t, "b", function () {
          return n;
        }),
        s.d(t, "c", function () {
          return i;
        }),
        s.d(t, "d", function () {
          return l;
        });
      const r =
          "undefined" != typeof ServiceWorkerGlobalScope &&
          self instanceof ServiceWorkerGlobalScope,
        n =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          !r,
        i = n || r,
        o = (e, ...t) => {
          self.clients
            .matchAll({
              includeUncontrolled: !1,
              type: "window",
            })
            .then((s) => {
              s.length &&
                s.slice(e ? 0 : -1).forEach((e) => {
                  e.postMessage(...t);
                });
            });
        },
        a = (...e) => {
          self.postMessage(...e);
        },
        c = () => {},
        l = r ? o.bind(null, !1) : n ? a : c;
      r && o.bind(null, !0);
    },
    30: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      const r = s(76).a.debug,
        n = "undefined" != typeof window ? window : self;
      t.b = r;
    },
    41: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      }),
        s.d(t, "b", function () {
          return v;
        });
      var r,
        n = s(30),
        i = s(0),
        o = s(169);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Warn = 2)] = "Warn"),
          (e[(e.Log = 4)] = "Log"),
          (e[(e.Debug = 8)] = "Debug");
      })(r || (r = {}));
      const a = [r.None, r.Error, r.Warn, r.Log, r.Debug],
        c = Date.now();
      function l() {
        return "[" + ((Date.now() - c) / 1e3).toFixed(3) + "]";
      }
      let h;
      const u = i.IS_SAFARI || i.IS_FIREFOX;
      h = u
        ? (e) => e.split("@")[0]
        : (e) => {
            const t = e.trim().split(" ");
            if (3 === t.length) return t[1].slice(t[1].lastIndexOf(".") + 1);
          };
      const d = !u,
        f = u ? 2 : 3;
      function g() {
        const e = new Error().stack.split("\n"),
          t = e[f] || e[e.length - 1];
        return "[" + (h(t) || "<anonymous>") + "]";
      }
      const m = {
          black: "[30m",
          red: "[31m",
          green: "[32m",
          yellow: "[33m",
          blue: "[34m",
          magenta: "[35m",
          cyan: "[36m",
          white: "[37m",
        },
        p = [
          ["debug", r.Debug],
          ["info", r.Log],
          ["warn", r.Warn],
          ["error", r.Error],
          ["assert", r.Error],
          ["trace", r.Log],
        ];
      function v(e, t = r.Log | r.Warn | r.Error, s = !1, i = "") {
        let c;
        n.b || s || (t = r.Error),
          d ? i || (o.a ? (i = m.yellow) : o.b && (i = m.cyan)) : (i = "");
        let h = i;
        i = i ? `%s ${i}%s` : "%s";
        const u = function (...s) {
          return t & r.Log && console.log(i, l(), e, g(), ...s);
        };
        return (
          p.forEach(([s, r]) => {
            u[s] = function (...n) {
              return t & r && console[s](i, l(), e, g(), ...n);
            };
          }),
          (u.setPrefix = function (t) {
            (c = t), (e = "[" + t + "]");
          }),
          u.setPrefix(e),
          (u.setLevel = function (e) {
            t = a.slice(0, e + 1).reduce((e, t) => e | t, 0);
          }),
          (u.bindPrefix = function (e) {
            return v(`${c}] [${e}`, t, s, h);
          }),
          u
        );
      }
    },
    42: function (e, t, s) {
      "use strict";
      function r(e, t) {
        if (t) for (let s in t) void 0 !== t[s] && (e[s] = t[s]);
        return e;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    43: function (e, t, s) {
      "use strict";
      s.d(t, "c", function () {
        return r;
      }),
        s.d(t, "d", function () {
          return n;
        }),
        s.d(t, "e", function () {
          return i;
        }),
        s.d(t, "b", function () {
          return o;
        }),
        s.d(t, "a", function () {
          return a;
        });
      const r = 0,
        n = 1271266957,
        i = 777e3,
        o = 2147483647,
        a = "";
    },
    50: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var r = s(62);
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
          var r, n;
          (null !== (r = this.listeners[e]) && void 0 !== r
            ? r
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
            Object(r.a)(this.listeners[e], (e) => e.callback === t);
        }
        _dispatchEvent(e, t, ...s) {
          this.reuseResults && (this.listenerResults[e] = s);
          const r = t && [],
            n = this.listeners[e];
          if (n) {
            n.slice().forEach((t) => {
              var i;
              if (-1 === n.findIndex((e) => e.callback === t.callback)) return;
              let o;
              try {
                o = t.callback(...s);
              } catch (e) {
                console.error(e);
              }
              r && r.push(o),
                (null === (i = t.options) || void 0 === i ? void 0 : i.once) &&
                  this.removeEventListener(e, t.callback);
            });
          }
          return r;
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
        return n;
      });
      var r = s(77);
      function n() {
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
          t = new Promise((s, r) => {
            (e.resolve = (e) => {
              t.isFulfilled || t.isRejected || ((t.isFulfilled = !0), s(e));
            }),
              (e.reject = (...e) => {
                t.isRejected || t.isFulfilled || ((t.isRejected = !0), r(...e));
              });
          });
        return (
          t.catch(r.a).finally(() => {
            (t.notify = t.notifyAll = t.lastNotify = null),
              (t.listeners.length = 0),
              t.cancel && (t.cancel = () => {});
          }),
          Object.assign(t, e),
          t
        );
      }
    },
    53: function (e, t, s) {
      "use strict";
      function r(e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Date) return new Date(e.getTime());
        if (Array.isArray(e)) {
          return e.map((e) => r(e));
        }
        let t = new e.constructor();
        for (var s in e) e.hasOwnProperty(s) && (t[s] = r(e[s]));
        return t;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    62: function (e, t, s) {
      "use strict";
      function r(e, t) {
        const s = e.findIndex(t);
        return -1 !== s ? e.splice(s, 1)[0] : void 0;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    67: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      }),
        s.d(t, "b", function () {
          return i;
        });
      const r = {
        8: new Uint8Array(1),
        16: new Uint16Array(1),
        32: new Uint32Array(1),
      };
      function n(e) {
        const t = r[e];
        return crypto.getRandomValues(t), t[0];
      }
      function i() {
        return "" + n(32) + (n(32) % 16777215);
      }
    },
    75: function (e, t, s) {
      "use strict";
      var r = s(30),
        n = s(76),
        i = s(169);
      class o {
        constructor() {
          (this.prefix = ""),
            (this.cache = {}),
            (this.useStorage = !0),
            n.a.test && (this.prefix = "t_");
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
          for (const s in e)
            if (e.hasOwnProperty(s)) {
              const r = e[s];
              if (((this.cache[s] = r), this.useStorage && !t))
                try {
                  const e = JSON.stringify(r);
                  localStorage.setItem(this.prefix + s, e);
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
      class a {
        constructor() {
          (this.taskId = 0),
            (this.tasks = {}),
            a.STORAGES.push(this),
            i.c || (this.storage = new o());
        }
        finishTask(e, t) {
          this.tasks.hasOwnProperty(e) &&
            (this.tasks[e](t), delete this.tasks[e]);
        }
        proxy(e, ...t) {
          return new Promise((s, r) => {
            if (i.c) {
              const r = this.taskId++;
              this.tasks[r] = s;
              const n = {
                type: "localStorageProxy",
                id: r,
                payload: {
                  type: e,
                  args: t,
                },
              };
              Object(i.d)(n);
            } else {
              t = Array.prototype.slice.call(t);
              s(this.storage[e].apply(this.storage, t));
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
      a.STORAGES = [];
      const c = new a();
      r.a.appStorage = c;
      t.a = c;
    },
    76: function (e, t, s) {
      "use strict";
      const r = {
        test: location.search.indexOf("test=1") > 0,
        debug: location.search.indexOf("debug=1") > 0,
        http: !1,
        ssl: !0,
        multipleConnections: !0,
        asServiceWorker: !1,
        transport: "websocket",
      };
      (r.http = location.search.indexOf("http=1") > 0),
        r.http && (r.transport = "https"),
        (t.a = r);
    },
    77: function (e, t, s) {
      "use strict";
      function r() {}
      s.d(t, "a", function () {
        return r;
      });
    },
    86: function (e, t, s) {
      "use strict";
      function r(e) {
        return "object" == typeof e && null !== e;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    91: function (e, t, s) {
      "use strict";
      var r = s(30),
        n = s(105),
        i = s(140);
      const o = new n.a(i.a, "session");
      (r.a.stateStorage = o), (t.a = o);
    },
    95: function (e, t, s) {
      "use strict";
      function r(e, t = "") {
        let s;
        const r = (function (e) {
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
          s = new Blob(e, {
            type: r,
          });
        } catch (t) {
          let n = new BlobBuilder();
          e.forEach((e) => {
            n.append(e);
          }),
            (s = n.getBlob(r));
        }
        return s;
      }
      s.d(t, "a", function () {
        return r;
      });
    },
    96: function (e, t, s) {
      "use strict";
      function r(e, t, s = !0) {
        let r,
          n,
          i = null;
        return (...o) => {
          (r = !0),
            (n = o),
            i ||
              (s && ((r = !1), e(...n)),
              (i = setInterval(() => {
                if (!r) return clearInterval(i), void (i = null);
                (r = !1), e(...n);
              }, t)));
        };
      }
      s.d(t, "a", function () {
        return r;
      });
    },
  },
]);
//# sourceMappingURL=0.e0afbd5895b2c8eb71c6.chunk.js.map
