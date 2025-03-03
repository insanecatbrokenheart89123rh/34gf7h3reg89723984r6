!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "RLottieItem", function () {
        return l;
      });
    var n = "undefined" != typeof window ? window : self;
    const i = navigator ? navigator.userAgent : null,
      o =
        (navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),
        navigator.userAgent.toLowerCase().indexOf("android"),
        /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor),
        (/iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1)) &&
          n.MSStream,
        !!("safari" in n) ||
          !(
            !i ||
            !(
              /\b(iPad|iPhone|iPod)\b/.test(i) ||
              (i.match("Safari") && !i.match("Chrome"))
            )
          ));
    navigator.userAgent.toLowerCase().indexOf("firefox"),
      navigator.maxTouchPoints > 0 &&
        navigator.userAgent.search(
          /iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i
        );
    let a;
    if (o)
      try {
        a = +navigator.userAgent.match(/Version\/(.+?) /)[1] >= 14;
      } catch (e) {
        a = !1;
      }
    else a = !0;
    var s = a;
    function d(e) {
      return (function (e, t) {
        return new Promise((r) => {
          const n = new FileReader();
          n.addEventListener("loadend", (e) => {
            r(e.target.result);
          }),
            n[t](e);
        });
      })(e, "readAsText");
    }
    const u = [
      [
        [16219713, 13335381],
        [16757049, 16168585],
        [16765248, 16764327],
        [16768889, 16768965],
      ],
      [
        [16219713, 10771e3],
        [16757049, 14653547],
        [16765248, 15577475],
        [16768889, 16040864],
      ],
      [
        [16219713, 7354903],
        [16757049, 11233085],
        [16765248, 12812110],
        [16768889, 14194279],
      ],
      [
        [16219713, 4858889],
        [16757049, 8207886],
        [16765248, 9852201],
        [16768889, 11100983],
      ],
      [
        [16219713, 2101002],
        [16757049, 4270372],
        [16765248, 5848375],
        [16768889, 6505791],
      ],
    ];
    let c = (e) => Math.round(255 * Math.min(Math.max(e, 0), 1));
    function f(e, t) {
      const r = u[Math.max(t - 1, 0)],
        n = (e) => {
          switch (e.ty) {
            case "st":
            case "fl":
              ((e) => {
                const t = e.c.k,
                  n = c(t[2]) | (c(t[1]) << 8) | (c(t[0]) << 16),
                  i = r.find((e) => e[0] === n);
                i &&
                  ((t[0] = ((i[1] >> 16) & 255) / 255),
                  (t[1] = ((i[1] >> 8) & 255) / 255),
                  (t[2] = (255 & i[1]) / 255));
              })(e);
          }
          e.hasOwnProperty("it") && i(e.it);
        },
        i = (e) => {
          for (const t of e) n(t);
        };
      try {
        for (const t of e.layers)
          if (t.shapes) for (const e of t.shapes) e.it ? i(e.it) : n(e);
      } catch (r) {
        console.warn("cant apply replacements", r, e, t);
      }
    }
    importScripts("rlottie-wasm.js");
    const h = self.Module;
    class l {
      constructor(e, t, r) {
        (this.reqId = e), (this.width = t), (this.height = r);
      }
      init(e, t) {
        if (!this.dead) {
          this.fps = Math.max(1, Math.min(60, t || 60));
          try {
            (this.handle = m.Api.init()),
              (this.stringOnWasmHeap = allocate(
                intArrayFromString(e),
                "i8",
                0
              )),
              (this.frameCount = m.Api.loadFromData(
                this.handle,
                this.stringOnWasmHeap
              )),
              m.Api.resize(this.handle, this.width, this.height),
              g("loaded", this.reqId, this.frameCount, this.fps);
          } catch (e) {
            console.error("init RLottieItem error:", e),
              g("error", this.reqId, e);
          }
        }
      }
      render(e, t) {
        if (
          !this.dead &&
          void 0 !== this.handle &&
          !(this.frameCount < e || e < 0)
        )
          try {
            m.Api.render(this.handle, e);
            const r = m.Api.buffer(this.handle),
              n = h.HEAPU8.subarray(r, r + this.width * this.height * 4);
            t ? t.set(n) : (t = new Uint8ClampedArray(n)),
              g("frame", this.reqId, e, t);
          } catch (e) {
            console.error("Render error:", e),
              (this.dead = !0),
              g("error", this.reqId, e);
          }
      }
      destroy() {
        (this.dead = !0), void 0 !== this.handle && m.Api.destroy(this.handle);
      }
    }
    const m = new (class {
      constructor() {
        this.Api = {};
      }
      initApi() {
        this.Api = {
          init: h.cwrap("lottie_init", "", []),
          destroy: h.cwrap("lottie_destroy", "", ["number"]),
          resize: h.cwrap("lottie_resize", "", ["number", "number", "number"]),
          buffer: h.cwrap("lottie_buffer", "number", ["number"]),
          render: h.cwrap("lottie_render", "", ["number", "number"]),
          loadFromData: h.cwrap("lottie_load_from_data", "number", [
            "number",
            "number",
          ]),
        };
      }
      init() {
        this.initApi(), g("ready");
      }
    })();
    h.onRuntimeInitialized = function () {
      m.init();
    };
    const p = {},
      y = {
        loadFromData: function (e, t, r, n, i) {
          const o = (p[e] = new l(e, r, n));
          d(t).then((t) => {
            try {
              if ("number" == typeof i && i >= 1 && i <= 5) {
                const e = JSON.parse(t);
                f(e, i), (t = JSON.stringify(e));
              }
              const e = t.match(/"fr":\s*?(\d+?),/),
                r = +(null == e ? void 0 : e[1]) || 60;
              o.init(t, r);
            } catch (r) {
              console.error("Invalid file for sticker:", t), g("error", e, r);
            }
          });
        },
        destroy: function (e) {
          const t = p[e];
          t && (t.destroy(), delete p[e]);
        },
        renderFrame: function (e, t, r) {
          p[e].render(t, r);
        },
      };
    function g(...e) {
      if (arguments.length < 1)
        throw new TypeError("reply - not enough arguments");
      if (((e = Array.prototype.slice.call(arguments, 1)), s)) {
        const t = [];
        for (let r = 0; r < e.length; ++r)
          e[r] instanceof ArrayBuffer && t.push(e[r]),
            e[r].buffer &&
              e[r].buffer instanceof ArrayBuffer &&
              t.push(e[r].buffer);
        postMessage(
          { queryMethodListener: arguments[0], queryMethodArguments: e },
          t
        );
      } else
        postMessage({
          queryMethodListener: arguments[0],
          queryMethodArguments: e,
        });
    }
    onmessage = function (e) {
      y[e.data.queryMethod].apply(y, e.data.queryMethodArguments);
    };
  },
]);
//# sourceMappingURL=rlottie.worker.086dfed03cbca80766c6.bundle.worker.js.map
