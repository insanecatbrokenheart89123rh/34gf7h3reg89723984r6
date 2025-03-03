var serviceWorkerOption = {
  assets: [
    "/0.e0afbd5895b2c8eb71c6.chunk.js",
    "/1.501f1b99f6befd50ee5e.chunk.js",
    "/12.01db04d46bffee9b4794.chunk.js",
    "/13.be17671876522af09c51.chunk.js",
    "/14.a5ced60a0aaf18dbe920.chunk.js",
    "/15.9b267650f7456cd423be.chunk.js",
    "/16.47389f11873f960444d8.chunk.js",
    "/17.fae79d657f42f1745c9f.chunk.js",
    "/18.1b1c4c43a04abce6202d.chunk.js",
    "/19.993d7e5357e9cbe12993.chunk.js",
    "/2.74a3da7f5452b44843ff.chunk.js",
    "/20.59cd546d102ae15542e6.chunk.js",
    "/21.49b949da4f2493f6b111.chunk.js",
    "/22.a20a1ec6ea627171c353.chunk.js",
    "/23.d52d4b270d13e4bb8a17.chunk.js",
    "/24.4d8c06f2db954418f16d.chunk.js",
    "/25.511ffdcc599650ed6f7b.chunk.js",
    "/26.ba2ec08326e25f93e0d7.chunk.js",
    "/27.f4a134d00776769d844a.chunk.js",
    "/28.6667bb68e660e626d453.chunk.js",
    "/29.43e1a26c8877ba19d310.chunk.js",
    "/3.783454d94e8eb002e387.chunk.js",
    "/30.7ddf051a0eba2a18fedf.chunk.js",
    "/31.9a9a2834c731e789faf2.chunk.js",
    "/4.a8e3bb16d79d17555a55.chunk.js",
    "/5.48f088a898536de4b9c6.chunk.js",
    "/6.543c4285d6bef299cc10.chunk.js",
    "/7.d3d071d9ce69b3ea581e.chunk.js",
    "/8.ea3cd7974ebbd0d0029d.chunk.js",
    "/9.6eaa4e06851092205efd.chunk.js",
    "/main.712f415c3a05b4382935.bundle.js",
    "/main.f71896c2c50d07adcf73.css",
    "/mtproto.worker.b9472a3acd835ec21780.bundle.worker.js",
    "/npm.qr-code-styling.6d4087c107d121ea4739.chunk.js",
    "/rlottie.worker.086dfed03cbca80766c6.bundle.worker.js",
    "/style-desktop.9d7b485ed526720a3aad.css",
    "/webp.worker.c0cc94110cda650246b2.bundle.worker.js",
  ],
};

!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "log", function () {
        return ie;
      }),
      n.d(t, "deferredPromises", function () {
        return ae;
      });
    const o = {
      test: location.search.indexOf("test=1") > 0,
      debug: location.search.indexOf("debug=1") > 0,
      http: !1,
      ssl: !0,
      multipleConnections: !0,
      asServiceWorker: !1,
      transport: "websocket",
    };
    (o.http = location.search.indexOf("http=1") > 0),
      o.http && (o.transport = "https");
    var r = o;
    const i = r.debug;
    "undefined" != typeof window ? window : self;
    var s = i;
    var a = "undefined" != typeof window ? window : self;
    const c = navigator ? navigator.userAgent : null,
      l =
        (navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),
        navigator.userAgent.toLowerCase().indexOf("android"),
        /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor),
        (/iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1)) &&
          a.MSStream,
        !!("safari" in a) ||
          !(
            !c ||
            !(
              /\b(iPad|iPhone|iPod)\b/.test(c) ||
              (c.match("Safari") && !c.match("Chrome"))
            )
          )),
      u = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
      h =
        (navigator.maxTouchPoints > 0 &&
          navigator.userAgent.search(
            /iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i
          ),
        "undefined" != typeof ServiceWorkerGlobalScope &&
          self instanceof ServiceWorkerGlobalScope),
      d =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        !h,
      f = () =>
        self.clients.matchAll({ includeUncontrolled: !1, type: "window" }),
      g = (e, ...t) => {
        self.clients
          .matchAll({ includeUncontrolled: !1, type: "window" })
          .then((n) => {
            n.length &&
              n.slice(e ? 0 : -1).forEach((e) => {
                e.postMessage(...t);
              });
          });
      },
      p = (...e) => {
        self.postMessage(...e);
      },
      m = () => {};
    h && g.bind(null, !1), h && g.bind(null, !0);
    var v;
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Warn = 2)] = "Warn"),
        (e[(e.Log = 4)] = "Log"),
        (e[(e.Debug = 8)] = "Debug");
    })(v || (v = {}));
    const w = [v.None, v.Error, v.Warn, v.Log, v.Debug],
      y = Date.now();
    function b() {
      return "[" + ((Date.now() - y) / 1e3).toFixed(3) + "]";
    }
    let P;
    const S = l || u;
    P = S
      ? (e) => e.split("@")[0]
      : (e) => {
          const t = e.trim().split(" ");
          if (3 === t.length) return t[1].slice(t[1].lastIndexOf(".") + 1);
        };
    const O = !S,
      A = S ? 2 : 3;
    function _() {
      const e = new Error().stack.split("\n"),
        t = e[A] || e[e.length - 1];
      return "[" + (P(t) || "<anonymous>") + "]";
    }
    const T = {
        black: "[30m",
        red: "[31m",
        green: "[32m",
        yellow: "[33m",
        blue: "[34m",
        magenta: "[35m",
        cyan: "[36m",
        white: "[37m",
      },
      x = [
        ["debug", v.Debug],
        ["info", v.Log],
        ["warn", v.Warn],
        ["error", v.Error],
        ["assert", v.Error],
        ["trace", v.Log],
      ];
    function E(e, t = v.Log | v.Warn | v.Error, n = !1, o = "") {
      let r;
      s || n || (t = v.Error),
        O ? o || (h ? (o = T.yellow) : d && (o = T.cyan)) : (o = "");
      let i = o;
      o = o ? `%s ${o}%s` : "%s";
      const a = function (...n) {
        return t & v.Log && console.log(o, b(), e, _(), ...n);
      };
      return (
        x.forEach(([n, r]) => {
          a[n] = function (...i) {
            return t & r && console[n](o, b(), e, _(), ...i);
          };
        }),
        (a.setPrefix = function (t) {
          (r = t), (e = "[" + t + "]");
        }),
        a.setPrefix(e),
        (a.setLevel = function (e) {
          t = w.slice(0, e + 1).reduce((e, t) => e | t, 0);
        }),
        (a.bindPrefix = function (e) {
          return E(`${r}] [${e}`, t, n, i);
        }),
        a
      );
    }
    var j = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function s(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    const k = self;
    function C(e) {
      return e.ok && 200 === e.status;
    }
    function D(e) {
      return Promise.race([
        e,
        ((t = 1e4),
        new Promise((e) => {
          setTimeout(e, t);
        })).then(() => Promise.reject()),
      ]);
      var t;
    }
    function F(e) {
      return (function (e, t) {
        return new Promise((n) => {
          const o = new FileReader();
          o.addEventListener("loadend", (e) => {
            n(e.target.result);
          }),
            o[t](e);
        });
      })(e, "readAsArrayBuffer");
    }
    function R(e) {
      return F(e).then((e) => new Uint8Array(e));
    }
    function N() {}
    function L(e, t = "") {
      let n;
      const o = (function (e) {
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
        n = new Blob(e, { type: o });
      } catch (t) {
        let r = new BlobBuilder();
        e.forEach((e) => {
          r.append(e);
        }),
          (n = r.getBlob(o));
      }
      return n;
    }
    var M = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function s(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    var W = new (class {
        constructor() {
          this.blobSupported = !0;
          try {
            L([], "");
          } catch (e) {
            this.blobSupported = !1;
          }
        }
        isAvailable() {
          return this.blobSupported;
        }
        write(e, t) {
          return t instanceof Blob ? R(t).then((t) => e.write(t)) : e.write(t);
        }
        getFakeFileWriter(e, t) {
          const n = [];
          return {
            write: (e) =>
              M(this, void 0, void 0, function* () {
                if (!this.blobSupported) throw !1;
                n.push(e);
              }),
            truncate: () => {
              n.length = 0;
            },
            finalize: (o = !0) => {
              const r = L(n, e);
              return o && t && t(r), r;
            },
          };
        }
      })(),
      I = function (e, t, n, o) {
        return new (n || (n = Promise))(function (r, i) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
    class q {
      constructor(e) {
        (this.dbName = e),
          (this.useStorage = !0),
          r.test && (this.dbName += "_test"),
          q.STORAGES.length && (this.useStorage = q.STORAGES[0].useStorage),
          this.openDatabase(),
          q.STORAGES.push(this);
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
        return this.timeoutOperation((n) => n.put("/" + e, t));
      }
      getFile(e, t = "blob") {
        return this.get(e).then((e) => {
          if (!e) throw "NO_ENTRY_FOUND";
          return e[t]();
        });
      }
      saveFile(e, t) {
        t instanceof Blob || (t = L(t));
        const n = new Response(t, {
          headers: { "Content-Length": "" + t.size },
        });
        return this.save(e, n).then(() => t);
      }
      timeoutOperation(e) {
        return this.useStorage
          ? new Promise((t, n) =>
              I(this, void 0, void 0, function* () {
                let o = !1;
                const r = setTimeout(() => {
                  n(), (o = !0);
                }, 15e3);
                try {
                  const n = yield this.openDatabase();
                  if (!n)
                    throw (
                      ((this.useStorage = !1),
                      (this.openDbPromise = void 0),
                      "no cache?")
                    );
                  const r = yield e(n);
                  if (o) return;
                  t(r);
                } catch (e) {
                  n(e);
                }
                clearTimeout(r);
              })
            )
          : Promise.reject("STORAGE_OFFLINE");
      }
      getFileWriter(e, t) {
        const n = W.getFakeFileWriter(t, (t) =>
          this.saveFile(e, t).catch(() => t)
        );
        return Promise.resolve(n);
      }
      static toggleStorage(e) {
        return Promise.all(
          this.STORAGES.map((t) => {
            if (((t.useStorage = e), !e)) return t.deleteAll();
          })
        );
      }
    }
    q.STORAGES = [];
    var B = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function s(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    const G = new q("cachedStreamChunks");
    setInterval(
      () =>
        G.timeoutOperation((e) =>
          e.keys().then((t) => {
            const n = new Map(),
              o = (Date.now() / 1e3) | 0;
            for (const e of t) {
              const t = e.url.match(/\/(\d+?)\?/);
              t && !n.has(t[1]) && n.set(t[1], e);
            }
            const r = [];
            for (const [t, i] of n) {
              const n = e.match(i).then((n) => {
                if (+n.headers.get("Time-Cached") + 86400 <= o)
                  return (
                    ie("will delete stream chunk:", t),
                    e.delete(i, { ignoreSearch: !0, ignoreVary: !0 })
                  );
              });
              r.push(n);
            }
            return Promise.all(r);
          })
        ),
      18e5
    ),
      setInterval(() => {
        f().then((e) => {
          for (const [t, n] of ae)
            if (!e.find((e) => e.id === t)) {
              for (const e in n) {
                n[e].reject();
              }
              ae.delete(t);
            }
        });
      }, 12e4);
    const U = new Map();
    class $ {
      constructor(e) {
        (this.info = e),
          (this.loadedOffsets = new Set()),
          (this.destroy = () => {
            U.delete(this.id);
          }),
          (this.id = $.getId(e)),
          U.set(this.id, this),
          (this.limitPart = e.size > 78643200 ? V : z),
          (this.destroyDebounced = (function (e, t, n = !0, o = !0) {
            let r,
              i,
              s,
              a,
              c = !1;
            return (...l) => (
              i || (i = new Promise((e, t) => ((s = e), (a = t)))),
              r
                ? (clearTimeout(r),
                  (c = !0),
                  a(),
                  (i = new Promise((e, t) => ((s = e), (a = t)))))
                : n && (s(e(...l)), (c = !1)),
              (r = setTimeout(() => {
                !o || (n && !c) || s(e(...l)),
                  (r = i = s = a = void 0),
                  (c = !1);
              }, t)),
              i.catch(() => {}),
              i
            );
          })(this.destroy, 15e4, !1, !0));
      }
      requestFilePartFromWorker(e, t, n = !1) {
        return B(this, void 0, void 0, function* () {
          const o = {
              type: "requestFilePart",
              payload: [this.info.dcId, this.info.location, e, t],
            },
            r = JSON.stringify(o);
          o.id = r;
          const i = yield f().then((e) => {
            if (e.length) return e.find((e) => ae.has(e.id)) || e[0];
          });
          if (!i) throw new Error("no window");
          let s = ae.get(i.id);
          s || ae.set(i.id, (s = {}));
          let a = s[r];
          if (a) return a.then((e) => e.bytes);
          i.postMessage(o),
            this.loadedOffsets.add(e),
            (a = s[r] =
              (function () {
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
                  t = new Promise((n, o) => {
                    (e.resolve = (e) => {
                      t.isFulfilled ||
                        t.isRejected ||
                        ((t.isFulfilled = !0), n(e));
                    }),
                      (e.reject = (...e) => {
                        t.isRejected ||
                          t.isFulfilled ||
                          ((t.isRejected = !0), o(...e));
                      });
                  });
                return (
                  t.catch(N).finally(() => {
                    (t.notify = t.notifyAll = t.lastNotify = null),
                      (t.listeners.length = 0),
                      t.cancel && (t.cancel = () => {});
                  }),
                  Object.assign(t, e),
                  t
                );
              })());
          const c = a.then((e) => e.bytes);
          return (
            this.saveChunkToCache(c, e, t),
            !n && this.preloadChunks(e, e + 15 * this.limitPart),
            c
          );
        });
      }
      requestFilePartFromCache(e, t, n) {
        const o = this.getChunkKey(e, t);
        return G.getFile(o).then(
          (e) => (n ? new Uint8Array() : R(e)),
          (e) => {}
        );
      }
      requestFilePart(e, t, n) {
        return this.requestFilePartFromCache(e, t, n).then(
          (o) => o || this.requestFilePartFromWorker(e, t, n)
        );
      }
      saveChunkToCache(e, t, n) {
        return e.then((e) => {
          const o = this.getChunkKey(t, n),
            r = new Response(e, {
              headers: {
                "Content-Length": "" + e.length,
                "Content-Type": "application/octet-stream",
                "Time-Cached": "" + ((Date.now() / 1e3) | 0),
              },
            });
          return G.save(o, r);
        });
      }
      preloadChunk(e) {
        this.loadedOffsets.has(e) ||
          (this.loadedOffsets.add(e),
          this.requestFilePart(e, this.limitPart, !0));
      }
      preloadChunks(e, t) {
        if ((t > this.info.size && (t = this.info.size), e))
          for (; e < t; e += this.limitPart) this.preloadChunk(e);
        else this.preloadChunk(J(e, this.limitPart));
      }
      requestRange(e) {
        this.destroyDebounced();
        const t = (function (e, t, n) {
          if (0 === e[0] && 1 === e[1])
            return new Response(new Uint8Array(2).buffer, {
              status: 206,
              statusText: "Partial Content",
              headers: {
                "Accept-Ranges": "bytes",
                "Content-Range": "bytes 0-1/" + (n || "*"),
                "Content-Length": "2",
                "Content-Type": t || "video/mp4",
              },
            });
          return null;
        })(e, this.info.mimeType, this.info.size);
        if (t) return t;
        let [n, o] = e;
        const r =
            o && o < this.limitPart
              ? (function (e) {
                  return Math.pow(2, Math.ceil(Math.log(e) / Math.log(2)));
                })(o - n + 1)
              : this.limitPart,
          i = J(n, r);
        return (
          o || (o = Math.min(n + r, this.info.size - 1)),
          this.requestFilePart(i, r).then((e) => {
            (n === i && o === i + r) || (e = e.slice(n - i, o - i + 1));
            const t = {
              "Accept-Ranges": "bytes",
              "Content-Range": `bytes ${n}-${n + e.byteLength - 1}/${
                this.info.size || "*"
              }`,
              "Content-Length": "" + e.byteLength,
            };
            return (
              this.info.mimeType && (t["Content-Type"] = this.info.mimeType),
              new Response(e, {
                status: 206,
                statusText: "Partial Content",
                headers: t,
              })
            );
          })
        );
      }
      getChunkKey(e, t) {
        return this.id + "?offset=" + e + "&limit=" + t;
      }
      static get(e) {
        var t;
        return null !== (t = U.get(this.getId(e))) && void 0 !== t
          ? t
          : new $(e);
      }
      static getId(e) {
        return e.location.id;
      }
    }
    const z = 524288,
      V = 1048576;
    function J(e, t = 2048) {
      return e - (e % t);
    }
    var K = {
      name: "tweb",
      version: 7,
      stores: [
        { name: "session" },
        { name: "stickerSets" },
        { name: "users" },
        { name: "chats" },
        { name: "dialogs" },
        { name: "messages" },
      ],
    };
    class Y {
      constructor(e, t) {
        (this.storageIsAvailable = !0),
          (function (e, t) {
            if (t) for (let n in t) void 0 !== t[n] && (e[n] = t[n]);
          })(this, e),
          r.test && (this.name += "_test"),
          (this.storeName = t),
          (this.log = E("IDB-" + this.storeName)),
          this.openDatabase(!0),
          Y.STORAGES.push(this);
      }
      static closeDatabases(e) {
        this.STORAGES.forEach((t) => {
          if (e && e === t) return;
          const n = t.db;
          n && ((n.onclose = () => {}), n.close());
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
        let n = !1;
        return (
          setTimeout(() => {
            n || t.onerror({ type: "IDB_CREATE_TIMEOUT" });
          }, 3e3),
          (this.openDbPromise = new Promise((e, o) => {
            (t.onsuccess = (r) => {
              n = !0;
              const i = t.result;
              let s = !1;
              this.log("Opened"),
                (i.onerror = (e) => {
                  (this.storageIsAvailable = !1),
                    this.log.error(
                      "Error creating/accessing IndexedDB database",
                      e
                    ),
                    o(e);
                }),
                (i.onclose = (e) => {
                  this.log.error("closed:", e), !s && this.openDatabase();
                }),
                (i.onabort = (e) => {
                  this.log.error("abort:", e);
                  const t = e.target;
                  this.openDatabase((s = !0)),
                    t.onerror && t.onerror(e),
                    i.close();
                }),
                (i.onversionchange = (e) => {
                  this.log.error("onversionchange, lol?");
                }),
                e((this.db = i));
            }),
              (t.onerror = (e) => {
                (n = !0),
                  (this.storageIsAvailable = !1),
                  this.log.error(
                    "Error creating/accessing IndexedDB database",
                    e
                  ),
                  o(e);
              }),
              (t.onupgradeneeded = (e) => {
                (n = !0),
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
                      var n;
                      const o = e.createObjectStore(t.name);
                      if (
                        null === (n = t.indexes) || void 0 === n
                          ? void 0
                          : n.length
                      )
                        for (const e of t.indexes)
                          o.createIndex(
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
            (n) => e.map((e, o) => n.put(t[o], e)),
            ""
          )
        );
      }
      saveFile(e, t) {
        return t instanceof Blob || (t = L([t])), this.save(e, t);
      }
      get(e) {
        return (
          Array.isArray(e) || (e = [].concat(e)),
          this.getObjectStore("readonly", (t) => e.map((e) => t.get(e)), "")
        );
      }
      getObjectStore(e, t, n, o = this.storeName) {
        let r;
        return (
          n && ((r = performance.now()), this.log(n + ": start")),
          this.openDatabase().then(
            (i) =>
              new Promise((s, a) => {
                const c = i.transaction([o], e);
                (c.onerror = (e) => {
                  clearTimeout(l), a(c.error);
                }),
                  (c.oncomplete = (e) => {
                    clearTimeout(l),
                      n && this.log(n + ": end", performance.now() - r);
                    const t = d.map((e) => e.result);
                    s(h ? t : t[0]);
                  });
                const l = setTimeout(() => {
                    this.log.error("transaction not finished", c);
                  }, 1e4),
                  u = t(c.objectStore(o)),
                  h = Array.isArray(u),
                  d = h ? u : [].concat(u);
              })
          )
        );
      }
      getAll() {
        return this.getObjectStore("readonly", (e) => e.getAll(), "");
      }
    }
    Y.STORAGES = [];
    var H = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function s(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    const X = self,
      Q =
        location.protocol +
        "//" +
        location.hostname +
        location.pathname.split("/").slice(0, -1).join("/") +
        "/";
    const Z = new (class {
      constructor(e, t, n) {
        (this.defaults = n), (this.cache = {}), (this.storage = new Y(e, t));
      }
      get(e) {
        return H(this, void 0, void 0, function* () {
          if (void 0 !== this.cache[e]) return this.cache[e];
          let t;
          try {
            t = yield this.storage.get(e);
          } catch (e) {}
          if (void 0 !== this.cache[e]) return this.cache[e];
          if (void 0 === t) {
            const n = this.defaults[e];
            t = "function" == typeof n ? n() : n;
          }
          return (this.cache[e] = t);
        });
      }
      set(e, t) {
        return H(this, void 0, void 0, function* () {
          this.cache[e] = t;
          try {
            this.storage.save(e, t);
          } catch (e) {}
        });
      }
    })(K, "session", {
      push_mute_until: 0,
      push_last_alive: 0,
      push_lang: {},
      push_settings: {},
    });
    X.addEventListener("push", (e) => {
      const t = e.data.json();
      ie("push", t);
      let n = !1;
      const o = Promise.all([
        Z.get("push_mute_until"),
        Z.get("push_last_alive"),
        X.clients.matchAll({ type: "window" }),
      ]).then((e) => {
        const [o, r, i] = e;
        if ((ie("matched clients", i), (n = i.length > 0), n))
          throw "Supress notification because some instance is alive";
        const s = Date.now();
        if (re() && o && s < o)
          throw `Supress notification because mute for ${Math.ceil(
            (o - s) / 6e4
          )} min`;
        if (!t.badge) throw "No badge?";
      });
      o.catch((e) => {
        ie(e);
      });
      const r = o
        .then(() => Promise.all([Z.get("push_settings"), Z.get("push_lang")]))
        .then((e) =>
          (function (e, t, n) {
            const o = "assets/img/logo_filled_rounded.png";
            let r,
              i = e.title || "Telegram",
              s = e.description || "";
            e.custom &&
              (r = e.custom.channel_id
                ? "" + -e.custom.channel_id
                : e.custom.chat_id
                ? "" + -e.custom.chat_id
                : e.custom.from_id || "");
            e.custom.peerId = "" + r;
            let a = "peer" + r;
            t &&
              t.nopreview &&
              ((i = "Telegram"),
              (s = n.push_message_nopreview || "You have a new message"),
              (a = "unknown_peer"));
            ie("show notify", i, s, o, e);
            const c = [
              {
                action: "mute1d",
                title: n.push_action_mute1d || "Mute for 24H",
              },
            ];
            return X.registration
              .showNotification(i, {
                body: s,
                icon: o,
                tag: a,
                data: e,
                actions: c,
              })
              .then((e) => {
                var t;
                e &&
                  e.notification &&
                  ((t = e.notification),
                  te.has(t) || (te.add(t), (t.onclose = ne)));
              })
              .catch((e) => {
                ie.error("Show notification promise", e);
              });
          })(t, e[0], e[1])
        )
        .catch(
          () => (
            ie("Closing all notifications on push", n),
            re() || n
              ? oe()
              : X.registration
                  .showNotification("Telegram", { tag: "unknown_peer" })
                  .then(() => {
                    if (n) return oe();
                    setTimeout(() => oe(), n ? 0 : 100);
                  })
                  .catch((e) => {
                    ie.error("Show notification error", e);
                  })
          )
        );
      e.waitUntil(r);
    }),
      X.addEventListener("notificationclick", (e) => {
        const t = e.notification;
        ie("On notification click: ", t.tag), t.close();
        const n = e.action;
        if ("mute1d" === n && re())
          return (
            ie("[SW] mute for 1d"),
            void Z.set("push_mute_until", Date.now() + 864e5)
          );
        const o = t.data;
        if (!o) return;
        const r = X.clients
          .matchAll({ type: "window" })
          .then((e) => {
            (o.action = n), (ee = { type: "push_click", payload: o });
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if ("focus" in n)
                return n.focus(), n.postMessage(ee), void (ee = void 0);
            }
            if (X.clients.openWindow)
              return Z.get("push_settings").then((e) =>
                X.clients.openWindow(e.baseUrl || Q)
              );
          })
          .catch((e) => {
            ie.error("Clients.matchAll error", e);
          });
        e.waitUntil(r);
      }),
      X.addEventListener("notificationclose", ne);
    let ee,
      te = new Set();
    function ne(e) {
      var t;
      (t = e.notification), te.delete(t);
    }
    function oe() {
      for (const e of te)
        try {
          e.close();
        } catch (e) {}
      let e;
      return (
        (e =
          "getNotifications" in X.registration
            ? X.registration
                .getNotifications({})
                .then((e) => {
                  for (let t = 0, n = e.length; t < n; ++t)
                    try {
                      e[t].close();
                    } catch (e) {}
                })
                .catch((e) => {
                  ie.error("Offline register SW error", e);
                })
            : Promise.resolve()),
        te.clear(),
        e
      );
    }
    function re() {
      return u;
    }
    const ie = E("SW", v.Error | v.Debug | v.Log | v.Warn),
      se = self,
      ae = new Map(),
      ce = {
        notifications_clear: () => {
          oe();
        },
        ping: (e, t) => {
          !(function (e, t) {
            const n = (t.ports && t.ports[0]) || t.source,
              o = e.payload;
            o.localNotifications && Z.set("push_last_alive", Date.now()),
              ee &&
                n &&
                "postMessage" in n &&
                (n.postMessage(ee, []), (ee = void 0)),
              o.lang && Z.set("push_lang", o.lang),
              o.settings && Z.set("push_settings", o.settings);
          })(e, t);
        },
        requestFilePart: (e, t) => {
          const n = t.source,
            o = ae.get(n.id);
          if (!o) return;
          const r = o[e.id];
          r &&
            (e.error ? r.reject(e.error) : r.resolve(e.payload),
            delete o[e.id]);
        },
        toggleStorage: (e) => {
          q.toggleStorage(e.payload);
        },
      };
    se.addEventListener("message", (e) => {
      const t = e.data,
        n = ce[t.type];
      n && n(t, e);
    });
    const le = (e) => {
        if (
          0 === e.request.url.indexOf(location.origin + "/") &&
          e.request.url.match(
            /\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/
          )
        )
          return e.respondWith(
            (function (e) {
              return j(this, void 0, void 0, function* () {
                try {
                  const t = yield D(k.caches.open("cachedAssets")),
                    n = yield D(t.match(e.request, { ignoreVary: !0 }));
                  if (n && C(n)) return n;
                  const o = { Vary: "*" };
                  let r = yield fetch(e.request, { headers: o });
                  if (C(r)) t.put(e.request, r.clone());
                  else if (304 === r.status) {
                    const n =
                      e.request.url.replace(/\?.+$/, "") +
                      "?" +
                      ((1e5 * Math.random()) | 0);
                    (r = yield fetch(n, { headers: o })),
                      C(r) && t.put(e.request, r.clone());
                  }
                  return r;
                } catch (t) {
                  return fetch(e.request);
                }
              });
            })(e)
          );
        try {
          const [, t, n, o] =
            /http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url) || [];
          switch (n) {
            case "stream":
              !(function (e, t) {
                const n = (function (e) {
                    if (!e) return [0, 0];
                    const [, t] = e.split("="),
                      n = t.split(", "),
                      [o, r] = n[0].split("-");
                    return [+o, +r || 0];
                  })(e.request.headers.get("Range")),
                  o = JSON.parse(decodeURIComponent(t)),
                  r = $.get(o);
                var i;
                e.respondWith(
                  Promise.race([
                    ((i = 45e3),
                    new Promise((e) => {
                      setTimeout(() => {
                        e(
                          new Response("", {
                            status: 408,
                            statusText: "Request timed out.",
                          })
                        );
                      }, i);
                    })),
                    r.requestRange(n),
                  ])
                );
              })(e, o);
          }
        } catch (t) {
          e.respondWith(
            new Response("", {
              status: 500,
              statusText: "Internal Server Error",
            })
          );
        }
      },
      ue = () => {
        se.onfetch = le;
      };
    se.addEventListener("install", (e) => {
      ie("installing"), e.waitUntil(se.skipWaiting());
    }),
      se.addEventListener("activate", (e) => {
        ie("activating", se),
          e.waitUntil(se.caches.delete("cachedAssets")),
          e.waitUntil(se.clients.claim());
      }),
      (se.onerror = (e) => {
        ie.error("error:", e);
      }),
      (se.onunhandledrejection = (e) => {
        ie.error("onunhandledrejection:", e);
      }),
      (se.onoffline = se.ononline = ue),
      ue();
  },
]);
//# sourceMappingURL=sw.js.map
