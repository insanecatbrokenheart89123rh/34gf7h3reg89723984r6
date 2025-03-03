(this.webpackJsonp = this.webpackJsonp || []).push([
  [7],
  {
    110: function (e, t, n) {
      "use strict";
      function o(e) {
        e.requestFullscreen
          ? e.requestFullscreen()
          : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.webkitRequestFullscreen
          ? e.webkitRequestFullscreen()
          : e.msRequestFullscreen && e.msRequestFullscreen();
      }
      function i() {
        document.cancelFullScreen
          ? document.cancelFullScreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitCancelFullScreen
          ? document.webkitCancelFullScreen()
          : document.msExitFullscreen && document.msExitFullscreen();
      }
      function s(e, t, n) {
        const o = n ? n.add(e) : e.addEventListener.bind(e);
        "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange"
          .split(" ")
          .forEach((e) => {
            o(e, t, !1);
          });
      }
      function r() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        );
      }
      function a() {
        return !!r();
      }
      n.d(t, "e", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "d", function () {
          return a;
        });
    },
    124: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      function o(e, t) {
        const n = ""["".length - 1] || "";
        let o;
        switch (e._) {
          case "inputPhotoFileLocation":
            o = ["photo", ""[0], e.id, e.thumb_size].filter(Boolean).join("_");
            break;
          case "inputDocumentFileLocation":
            o = ["document", ""[0], e.id, e.thumb_size]
              .filter(Boolean)
              .join("_");
            break;
          case "inputPeerPhotoFileLocation":
            o = ["peerPhoto", e.photo_id, e.pFlags.big ? "big" : "small"].join(
              "_"
            );
            break;
          case "inputStickerSetThumb":
            o = [
              "stickerSetThumb",
              e.stickerset.id ||
                e.stickerset.short_name ||
                e.stickerset.emoticon ||
                e.stickerset._,
              e.thumb_version,
            ].join("_");
            break;
          case "inputFileLocation":
            o = e.volume_id + "_" + e.local_id;
            break;
          case "inputWebFileLocation":
            o = ["webFile", e.url].join("_");
            break;
          default:
            console.error("Unrecognized location:", e), (o = "");
        }
        return o + (n ? "." + n : n);
      }
      function i(e, t) {
        return "/" + e + "/" + encodeURIComponent(JSON.stringify(t));
      }
    },
    138: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var o = n(74);
      var i = function (e, t) {
          let n,
            o,
            i,
            s = {},
            r = 0,
            a = 0,
            c = 0,
            l = 0,
            d = 0;
          function h() {
            e.classList.add("crop-blur"),
              (e.draggable = !1),
              (i = new Image()),
              (i.src = e.src),
              (i.draggable = !1),
              i.classList.add("crop-overlay-image"),
              t || (t = document.createElement("canvas")),
              (n = document.createElement("div")),
              n.classList.add("crop-component"),
              (o = document.createElement("div")),
              o.classList.add("crop-overlay");
            const s = document.createElement("div");
            s.classList.add("crop-overlay-color"), n.appendChild(o);
            e.parentNode.appendChild(n),
              n.appendChild(i),
              n.appendChild(e),
              n.appendChild(s),
              o.appendChild(i),
              (i.style.maxWidth = e.width + "px"),
              (d = e.naturalWidth / e.offsetWidth);
            const r = e.offsetWidth / 2 - 100,
              a = e.offsetHeight / 2 - 100;
            u(200, 200),
              p(r, a),
              m(r, a),
              o.addEventListener("mousedown", g, !1),
              o.addEventListener("touchstart", g, !1),
              o.addEventListener("wheel", b, !1),
              document.addEventListener("keypress", v, !1);
          }
          function u(e, t) {
            (c = e * d),
              (l = t * d),
              (o.style.width = e + "px"),
              (o.style.height = t + "px");
          }
          function p(e, t) {
            (a = t * d),
              (r = e * d),
              (i.style.top = -t + "px"),
              (i.style.left = -e + "px");
          }
          function m(e, t) {
            (o.style.top = t + "px"), (o.style.left = e + "px");
          }
          function f(e) {
            e = e * Math.PI * 2;
            let t,
              n,
              s,
              r,
              a = Math.floor(o.clientWidth + e),
              c = Math.floor(o.clientHeight + e),
              l = i.clientWidth,
              d = i.clientHeight;
            a < 50 ||
              a > l ||
              ((t = o.offsetLeft - e / 2),
              (n = o.offsetTop - e / 2),
              (s = t + a),
              (r = n + c),
              t < 0 && (t = 0),
              n < 0 && (n = 0),
              s > l || r > d || (u(a, a), p(t, n), m(t, n)));
          }
          function v(e) {
            switch ((e.preventDefault(), String.fromCharCode(e.charCode))) {
              case "+":
                f(4);
                break;
              case "-":
                f(-4);
            }
          }
          function b(e) {
            e.preventDefault(), f(e.deltaY > 0 ? 1 : -1);
          }
          function g(e) {
            e.preventDefault(),
              e.stopPropagation(),
              (function (e) {
                (s.container_width = o.offsetWidth),
                  (s.container_height = o.offsetHeight),
                  (s.container_left = o.offsetLeft),
                  (s.container_top = o.offsetTop),
                  (s.mouse_x =
                    (e.clientX ||
                      e.pageX ||
                      (e.touches && e.touches[0].clientX)) + window.scrollX),
                  (s.mouse_y =
                    (e.clientY ||
                      e.pageY ||
                      (e.touches && e.touches[0].clientY)) + window.scrollY);
              })(e),
              document.addEventListener("mousemove", y),
              document.addEventListener("touchmove", y),
              document.addEventListener("mouseup", w),
              document.addEventListener("touchend", w);
          }
          function w(e) {
            e.preventDefault(),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("touchend", w),
              document.removeEventListener("mousemove", y),
              document.removeEventListener("touchmove", y);
          }
          function y(e) {
            let t,
              n,
              r,
              a,
              c = { x: 0, y: 0 };
            e.preventDefault(),
              e.stopPropagation(),
              (c.x = e.pageX || (e.touches && e.touches[0].pageX)),
              (c.y = e.pageY || (e.touches && e.touches[0].pageY)),
              (t = c.x - (s.mouse_x - s.container_left)),
              (n = c.y - (s.mouse_y - s.container_top)),
              (r = o.offsetWidth),
              (a = o.offsetHeight),
              t < 0
                ? (t = 0)
                : t > i.offsetWidth - r && (t = i.offsetWidth - r),
              n < 0
                ? (n = 0)
                : n > i.offsetHeight - a && (n = i.offsetHeight - a),
              p(t, n),
              m(t, n);
          }
          return (
            e.complete ? h() : (e.onload = h),
            {
              crop: function () {
                (t.width = c),
                  (t.height = l),
                  t.getContext("2d").drawImage(e, r, a, c, l, 0, 0, c, l);
              },
              removeHandlers: function () {
                o.removeEventListener("mousedown", g),
                  o.removeEventListener("touchstart", g),
                  o.removeEventListener("wheel", b),
                  document.removeEventListener("mouseup", w),
                  document.removeEventListener("touchend", w),
                  document.removeEventListener("mousemove", y),
                  document.removeEventListener("touchmove", y),
                  document.removeEventListener("keypress", v),
                  n.remove(),
                  o.remove(),
                  i.remove();
              },
            }
          );
        },
        s = n(54),
        r = n(16),
        a = n(29),
        c = n(147);
      class l extends s.b {
        constructor() {
          super("popup-avatar", null, { closable: !0, withConfirm: !0 }),
            (this.image = new Image()),
            (this.cropper = { crop: () => {}, removeHandlers: () => {} }),
            (this.h6 = document.createElement("h6")),
            Object(r._i18n)(this.h6, "Popup.Avatar.Title"),
            this.btnClose.classList.remove("btn-icon"),
            this.header.append(this.h6),
            (this.cropContainer = document.createElement("div")),
            this.cropContainer.classList.add("crop"),
            this.cropContainer.append(this.image),
            (this.input = document.createElement("input")),
            (this.input.type = "file"),
            (this.input.style.display = "none"),
            this.listenerSetter.add(this.input)(
              "change",
              (e) => {
                const t = e.target.files[0];
                t &&
                  Object(c.a)(t).then((e) => {
                    (this.image = new Image()),
                      this.cropContainer.append(this.image),
                      (this.image.src = e),
                      (this.image.onload = () => {
                        this.show(),
                          (this.cropper = i(this.image, this.canvas)),
                          (this.input.value = "");
                      });
                  });
              },
              !1
            ),
            (this.btnConfirm.className =
              "btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1"),
            Object(a.b)(
              this.btnConfirm,
              () => {
                this.cropper.crop(),
                  this.hide(),
                  this.canvas.toBlob(
                    (e) => {
                      (this.blob = e), this.darkenCanvas(), this.resolve();
                    },
                    "image/jpeg",
                    1
                  );
              },
              { listenerSetter: this.listenerSetter }
            ),
            this.container.append(
              this.cropContainer,
              this.btnConfirm,
              this.input
            ),
            this.addEventListener("closeAfterTimeout", () => {
              this.cropper.removeHandlers(), this.image && this.image.remove();
            });
        }
        resolve() {
          this.onCrop(() => o.a.upload(this.blob));
        }
        open(e, t) {
          (this.canvas = e), (this.onCrop = t), this.input.click();
        }
        darkenCanvas() {
          let e = this.canvas.getContext("2d");
          (e.fillStyle = "rgba(0, 0, 0, 0.3)"),
            e.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
    },
    146: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var o = n(15),
        i = n(0);
      function s(e) {
        if ("Enter" === e.key && !i.IS_MOBILE && !e.isComposing) {
          if ("enter" === o.default.settings.sendShortcut) {
            if (e.shiftKey || e.ctrlKey || e.metaKey) return;
            return !0;
          }
          {
            const t = i.IS_APPLE ? e.metaKey : e.ctrlKey;
            if (e.shiftKey || (i.IS_APPLE ? e.ctrlKey : e.metaKey)) return;
            if (t) return !0;
          }
        }
        return !1;
      }
    },
    147: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n(99);
      function i(e) {
        return Object(o.a)(e, "readAsDataURL");
      }
    },
    54: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return y;
      }),
        n.d(t, "a", function () {
          return E;
        });
      var o = n(15),
        i = n(18),
        s = n(63),
        r = n(71),
        a = n(16),
        c = n(6),
        l = n(8),
        d = n(64),
        h = n(29),
        u = n(146),
        p = n(5),
        m = n(50),
        f = n(110),
        v = n(59);
      const b = document.body;
      let g = b;
      const w = () => {
        (g = Object(f.c)() || b), y.reAppend();
      };
      Object(f.a)(b, w);
      class y extends m.a {
        constructor(e, t, n = {}) {
          super(!1),
            (this.buttons = t),
            (this.element = document.createElement("div")),
            (this.container = document.createElement("div")),
            (this.header = document.createElement("div")),
            (this.title = document.createElement("div")),
            (this.onEscape = () => !0),
            (this.hide = () => {
              r.a.backByItem(this.navigationItem);
            }),
            this.element.classList.add("popup"),
            (this.element.className = "popup" + (e ? " " + e : "")),
            this.container.classList.add("popup-container", "z-depth-1"),
            this.header.classList.add("popup-header"),
            this.title.classList.add("popup-title"),
            this.header.append(this.title),
            (this.listenerSetter = new d.a()),
            (this.confirmShortcutIsSendShortcut =
              n.confirmShortcutIsSendShortcut),
            n.closable &&
              ((this.btnClose = document.createElement("span")),
              this.btnClose.classList.add(
                "btn-icon",
                "popup-close",
                "tgico-close"
              ),
              this.header.prepend(this.btnClose),
              Object(h.b)(this.btnClose, this.hide, {
                listenerSetter: this.listenerSetter,
                once: !0,
              })),
            (this.withoutOverlay = n.withoutOverlay),
            this.withoutOverlay && this.element.classList.add("no-overlay"),
            n.overlayClosable &&
              Object(h.b)(
                this.element,
                (e) => {
                  Object(c.a)(e.target, "popup-container") || this.hide();
                },
                { listenerSetter: this.listenerSetter }
              ),
            n.withConfirm &&
              ((this.btnConfirm = document.createElement("button")),
              this.btnConfirm.classList.add("btn-primary", "btn-color-primary"),
              !0 !== n.withConfirm &&
                this.btnConfirm.append(Object(a.i18n)(n.withConfirm)),
              this.header.append(this.btnConfirm),
              Object(i.ripple)(this.btnConfirm)),
            this.container.append(this.header),
            n.body &&
              ((this.body = document.createElement("div")),
              this.body.classList.add("popup-body"),
              this.container.append(this.body));
          let o = this.btnConfirm;
          if (null == t ? void 0 : t.length) {
            const e = (this.buttonsEl = document.createElement("div"));
            e.classList.add("popup-buttons"),
              2 === t.length && e.classList.add("popup-buttons-row");
            const n = t.map((e) => {
              const t = document.createElement("button");
              return (
                (t.className = "btn" + (e.isDanger ? " danger" : " primary")),
                Object(i.ripple)(t),
                e.text
                  ? (t.innerHTML = e.text)
                  : t.append(Object(a.i18n)(e.langKey, e.langArgs)),
                Object(h.b)(
                  t,
                  () => {
                    e.callback && e.callback(), this.destroy();
                  },
                  { listenerSetter: this.listenerSetter, once: !0 }
                ),
                (e.element = t)
              );
            });
            if (!o && 2 === t.length) {
              const e = t.find((e) => !e.isCancel);
              e && (o = e.element);
            }
            e.append(...n), this.container.append(e);
          }
          (this.btnConfirmOnEnter = o),
            this.element.append(this.container),
            y.POPUPS.push(this);
        }
        show() {
          (this.navigationItem = {
            type: "popup",
            onPop: () => this.destroy(),
            onEscape: this.onEscape,
          }),
            r.a.pushItem(this.navigationItem),
            Object(l.a)(),
            g.append(this.element),
            this.element.offsetWidth,
            this.element.classList.add("active"),
            this.withoutOverlay ||
              ((o.default.isOverlayActive = !0), s.a.checkAnimations(!0)),
            this.btnConfirmOnEnter &&
              setTimeout(() => {
                this.listenerSetter.add(document.body)("keydown", (e) => {
                  (this.confirmShortcutIsSendShortcut
                    ? Object(u.a)(e)
                    : "Enter" === e.key) &&
                    (Object(h.d)(this.btnConfirmOnEnter), Object(p.a)(e));
                });
              }, 0);
        }
        destroy() {
          this.dispatchEvent("close"),
            this.element.classList.add("hiding"),
            this.element.classList.remove("active"),
            this.listenerSetter.removeAll(),
            this.withoutOverlay || (o.default.isOverlayActive = !1),
            r.a.removeItem(this.navigationItem),
            (this.navigationItem = void 0),
            Object(v.a)(y.POPUPS, this),
            w(),
            setTimeout(() => {
              this.element.remove(),
                this.dispatchEvent("closeAfterTimeout"),
                this.cleanup(),
                this.withoutOverlay || s.a.checkAnimations(!1);
            }, 150);
        }
        static reAppend() {
          this.POPUPS.forEach((e) => {
            const { element: t, container: n } = e,
              o = t.parentElement;
            o && o !== g && g !== n && g.append(t);
          });
        }
        static getPopups(e) {
          return this.POPUPS.filter((t) => t instanceof e);
        }
      }
      y.POPUPS = [];
      const E = (e) => (
        e.find((e) => e.isCancel) ||
          e.push({ langKey: "Cancel", isCancel: !0 }),
        e
      );
    },
    64: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      class o {
        constructor() {
          this.listeners = new Set();
        }
        add(e) {
          return (t, n, o) => {
            const i = { element: e, event: t, callback: n, options: o };
            return this.addManual(i), i;
          };
        }
        addManual(e) {
          var t;
          e.element.addEventListener(e.event, e.callback, e.options),
            (null === (t = e.options) || void 0 === t ? void 0 : t.once) &&
              ((e.onceCallback = () => {
                this.remove(e), (e.onceFired = !0);
              }),
              e.element.addEventListener(e.event, e.onceCallback, e.options)),
            this.listeners.add(e);
        }
        remove(e) {
          e.onceFired ||
            (e.element.removeEventListener(e.event, e.callback, e.options),
            e.onceCallback &&
              e.element.removeEventListener(
                e.event,
                e.onceCallback,
                e.options
              )),
            this.listeners.delete(e);
        }
        removeManual(e, t, n, o) {
          let i;
          for (const s of this.listeners)
            if (
              s.element === e &&
              s.event === t &&
              s.callback === n &&
              s.options === o
            ) {
              i = s;
              break;
            }
          i && this.remove(i);
        }
        removeAll() {
          this.listeners.forEach((e) => {
            this.remove(e);
          });
        }
      }
    },
    74: function (e, t, n) {
      "use strict";
      var o = n(15),
        i = n(32),
        s = n(52),
        r = n(124),
        a = n(114),
        c = n(30);
      const l = new (class {
        constructor() {
          (this.cacheStorage = new a.a("cachedFiles")),
            (this.downloads = {}),
            (this.progress = {}),
            (this.progressCallbacks = {}),
            (this.uploadId = 0),
            (this.thumbsCache = { photo: {}, document: {} }),
            o.default.addEventListener("download_progress", (e) => {
              const t = e;
              this.progress[t.fileName] = t;
              const n = this.progressCallbacks[t.fileName];
              n && n.forEach((e) => e(t));
              const o = this.downloads[t.fileName];
              o && o.notifyAll(t);
            });
        }
        getNewDeferred(e) {
          const t = Object(s.a)();
          return (
            (t.cancel = () => {
              const n = new Error("Download canceled");
              (n.name = "AbortError"),
                i.a.cancelDownload(e),
                t.reject(n),
                (t.cancel = () => {});
            }),
            t.finally(() => {
              delete this.progress[e], delete this.progressCallbacks[e];
            }),
            t.catch(() => {
              this.clearDownload(e);
            }),
            (this.downloads[e] = t)
          );
        }
        clearDownload(e) {
          delete this.downloads[e];
        }
        fakeDownload(e, t) {
          const n = this.getNewDeferred(e);
          return (
            "string" == typeof t
              ? fetch(t)
                  .then((e) => e.blob())
                  .then((e) => n.resolve(e))
              : n.resolve(t),
            n
          );
        }
        download(e) {
          const t = Object(r.a)(e.location, { fileName: e.fileName });
          if (this.downloads.hasOwnProperty(t)) return this.downloads[t];
          const n = this.getNewDeferred(t),
            o = (e) => {
              n.reject(e);
            };
          return (
            (() => {
              if (!i.a.worker || e.onlyCache) {
                const s = this.cacheStorage.getFile(t).then((t) => {
                  if (t.size < e.size) throw "wrong size";
                  n.resolve(t);
                });
                return e.onlyCache
                  ? s.catch(o)
                  : s.catch(() => i.a.downloadFile(e).then(n.resolve, o));
              }
              i.a.downloadFile(e).then(n.resolve, o);
            })(),
            n
          );
        }
        upload(e, t) {
          if (!t) {
            const n = null == e ? void 0 : e.type;
            if (n) {
              const e = this.uploadId++ + "." + n.split("/")[1];
              t =
                ["image/jpeg", "image/png", "image/bmp"].indexOf(n) >= 0
                  ? "photo" + e
                  : 0 === n.indexOf("audio/") || ["video/ogg"].indexOf(n) >= 0
                  ? "audio" + e
                  : 0 === n.indexOf("video/")
                  ? "video" + e
                  : "document" + e;
            } else t = "upload-" + this.uploadId++;
          }
          const n = this.getNewDeferred(t);
          return (
            i.a.uploadFile({ file: e, fileName: t }).then(n.resolve, n.reject),
            n.finally(() => {
              this.clearDownload(t);
            }),
            n
          );
        }
        getDownload(e) {
          return this.downloads[e];
        }
        addProgressCallback(e, t) {
          var n;
          const o = this.progress[e];
          (null !== (n = this.progressCallbacks[e]) && void 0 !== n
            ? n
            : (this.progressCallbacks[e] = [])
          ).push(t),
            o && t(o);
        }
        createDownloadAnchor(e, t, n) {
          const o = document.createElement("a");
          (o.href = e),
            (o.download = t),
            (o.target = "_blank"),
            (o.style.position = "absolute"),
            (o.style.top = "1px"),
            (o.style.left = "1px"),
            document.body.append(o);
          try {
            var i = document.createEvent("MouseEvents");
            i.initMouseEvent(
              "click",
              !0,
              !1,
              window,
              0,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              o.dispatchEvent(i);
          } catch (t) {
            console.error("Download click error", t);
            try {
              o.click();
            } catch (t) {
              window.open(e, "_blank");
            }
          }
          setTimeout(() => {
            o.remove(), n && n();
          }, 100);
        }
        downloadToDisc(e, t) {
          const n = this.download(e);
          return (
            n.then((e) => {
              const n = URL.createObjectURL(e);
              this.createDownloadAnchor(n, t, () => {
                URL.revokeObjectURL(n);
              });
            }),
            n
          );
        }
        getCacheContext(e, t = "full") {
          var n, o;
          const i =
            null !== (n = this.thumbsCache[e._][e.id]) && void 0 !== n
              ? n
              : (this.thumbsCache[e._][e.id] = {});
          return null !== (o = i[t]) && void 0 !== o
            ? o
            : (i[t] = { downloaded: 0, url: "" });
        }
      })();
      c.a && (c.a.appDownloadManager = l), (t.a = l);
    },
  },
]);
//# sourceMappingURL=7.d3d071d9ce69b3ea581e.chunk.js.map
