(this.webpackJsonp = this.webpackJsonp || []).push([
  [14, 7, 26],
  {
    100: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(16);
      class s {
        constructor(e) {
          (this.element = document.body.querySelector("." + e.className)),
            (this.container = document.createElement("div")),
            (this.container.className = "container center-align"),
            (this.imageDiv = document.createElement("div")),
            (this.imageDiv.className = "auth-image"),
            (this.title = document.createElement("h4")),
            e.titleLangKey && this.title.append(Object(i.i18n)(e.titleLangKey)),
            (this.subtitle = document.createElement("p")),
            (this.subtitle.className = "subtitle"),
            e.subtitleLangKey &&
              this.subtitle.append(Object(i.i18n)(e.subtitleLangKey)),
            this.container.append(this.imageDiv, this.title, this.subtitle),
            e.withInputWrapper &&
              ((this.inputWrapper = document.createElement("div")),
              (this.inputWrapper.className = "input-wrapper"),
              this.container.append(this.inputWrapper)),
            this.element.append(this.container);
        }
      }
    },
    110: function (e, t, n) {
      "use strict";
      function i(e) {
        e.requestFullscreen
          ? e.requestFullscreen()
          : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.webkitRequestFullscreen
          ? e.webkitRequestFullscreen()
          : e.msRequestFullscreen && e.msRequestFullscreen();
      }
      function s() {
        document.cancelFullScreen
          ? document.cancelFullScreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitCancelFullScreen
          ? document.webkitCancelFullScreen()
          : document.msExitFullscreen && document.msExitFullscreen();
      }
      function a(e, t, n) {
        const i = n ? n.add(e) : e.addEventListener.bind(e);
        "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange"
          .split(" ")
          .forEach((e) => {
            i(e, t, !1);
          });
      }
      function o() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        );
      }
      function r() {
        return !!o();
      }
      n.d(t, "e", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return r;
        });
    },
    114: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var i = n(76),
        s = n(95),
        a = n(99);
      function o(e) {
        return (function (e) {
          return Object(a.a)(e, "readAsArrayBuffer");
        })(e).then((e) => new Uint8Array(e));
      }
      var r = function (e, t, n, i) {
        return new (n || (n = Promise))(function (s, a) {
          function o(e) {
            try {
              l(i.next(e));
            } catch (e) {
              a(e);
            }
          }
          function r(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, r);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
      var l = new (class {
          constructor() {
            this.blobSupported = !0;
            try {
              Object(s.a)([], "");
            } catch (e) {
              this.blobSupported = !1;
            }
          }
          isAvailable() {
            return this.blobSupported;
          }
          write(e, t) {
            return t instanceof Blob
              ? o(t).then((t) => e.write(t))
              : e.write(t);
          }
          getFakeFileWriter(e, t) {
            const n = [];
            return {
              write: (e) =>
                r(this, void 0, void 0, function* () {
                  if (!this.blobSupported) throw !1;
                  n.push(e);
                }),
              truncate: () => {
                n.length = 0;
              },
              finalize: (i = !0) => {
                const a = Object(s.a)(n, e);
                return i && t && t(a), a;
              },
            };
          }
        })(),
        c = function (e, t, n, i) {
          return new (n || (n = Promise))(function (s, a) {
            function o(e) {
              try {
                l(i.next(e));
              } catch (e) {
                a(e);
              }
            }
            function r(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, r);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      class u {
        constructor(e) {
          (this.dbName = e),
            (this.useStorage = !0),
            i.a.test && (this.dbName += "_test"),
            u.STORAGES.length && (this.useStorage = u.STORAGES[0].useStorage),
            this.openDatabase(),
            u.STORAGES.push(this);
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
          t instanceof Blob || (t = Object(s.a)(t));
          const n = new Response(t, {
            headers: { "Content-Length": "" + t.size },
          });
          return this.save(e, n).then(() => t);
        }
        timeoutOperation(e) {
          return this.useStorage
            ? new Promise((t, n) =>
                c(this, void 0, void 0, function* () {
                  let i = !1;
                  const s = setTimeout(() => {
                    n(), (i = !0);
                  }, 15e3);
                  try {
                    const n = yield this.openDatabase();
                    if (!n)
                      throw (
                        ((this.useStorage = !1),
                        (this.openDbPromise = void 0),
                        "no cache?")
                      );
                    const s = yield e(n);
                    if (i) return;
                    t(s);
                  } catch (e) {
                    n(e);
                  }
                  clearTimeout(s);
                })
              )
            : Promise.reject("STORAGE_OFFLINE");
        }
        getFileWriter(e, t) {
          const n = l.getFakeFileWriter(t, (t) =>
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
      u.STORAGES = [];
    },
    124: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
      function i(e, t) {
        const n = ""["".length - 1] || "";
        let i;
        switch (e._) {
          case "inputPhotoFileLocation":
            i = ["photo", ""[0], e.id, e.thumb_size].filter(Boolean).join("_");
            break;
          case "inputDocumentFileLocation":
            i = ["document", ""[0], e.id, e.thumb_size]
              .filter(Boolean)
              .join("_");
            break;
          case "inputPeerPhotoFileLocation":
            i = ["peerPhoto", e.photo_id, e.pFlags.big ? "big" : "small"].join(
              "_"
            );
            break;
          case "inputStickerSetThumb":
            i = [
              "stickerSetThumb",
              e.stickerset.id ||
                e.stickerset.short_name ||
                e.stickerset.emoticon ||
                e.stickerset._,
              e.thumb_version,
            ].join("_");
            break;
          case "inputFileLocation":
            i = e.volume_id + "_" + e.local_id;
            break;
          case "inputWebFileLocation":
            i = ["webFile", e.url].join("_");
            break;
          default:
            console.error("Unrecognized location:", e), (i = "");
        }
        return i + (n ? "." + n : n);
      }
      function s(e, t) {
        return "/" + e + "/" + encodeURIComponent(JSON.stringify(t));
      }
    },
    138: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n(74);
      var s = function (e, t) {
          let n,
            i,
            s,
            a = {},
            o = 0,
            r = 0,
            l = 0,
            c = 0,
            u = 0;
          function h() {
            e.classList.add("crop-blur"),
              (e.draggable = !1),
              (s = new Image()),
              (s.src = e.src),
              (s.draggable = !1),
              s.classList.add("crop-overlay-image"),
              t || (t = document.createElement("canvas")),
              (n = document.createElement("div")),
              n.classList.add("crop-component"),
              (i = document.createElement("div")),
              i.classList.add("crop-overlay");
            const a = document.createElement("div");
            a.classList.add("crop-overlay-color"), n.appendChild(i);
            e.parentNode.appendChild(n),
              n.appendChild(s),
              n.appendChild(e),
              n.appendChild(a),
              i.appendChild(s),
              (s.style.maxWidth = e.width + "px"),
              (u = e.naturalWidth / e.offsetWidth);
            const o = e.offsetWidth / 2 - 100,
              r = e.offsetHeight / 2 - 100;
            d(200, 200),
              p(o, r),
              m(o, r),
              i.addEventListener("mousedown", g, !1),
              i.addEventListener("touchstart", g, !1),
              i.addEventListener("wheel", v, !1),
              document.addEventListener("keypress", b, !1);
          }
          function d(e, t) {
            (l = e * u),
              (c = t * u),
              (i.style.width = e + "px"),
              (i.style.height = t + "px");
          }
          function p(e, t) {
            (r = t * u),
              (o = e * u),
              (s.style.top = -t + "px"),
              (s.style.left = -e + "px");
          }
          function m(e, t) {
            (i.style.top = t + "px"), (i.style.left = e + "px");
          }
          function f(e) {
            e = e * Math.PI * 2;
            let t,
              n,
              a,
              o,
              r = Math.floor(i.clientWidth + e),
              l = Math.floor(i.clientHeight + e),
              c = s.clientWidth,
              u = s.clientHeight;
            r < 50 ||
              r > c ||
              ((t = i.offsetLeft - e / 2),
              (n = i.offsetTop - e / 2),
              (a = t + r),
              (o = n + l),
              t < 0 && (t = 0),
              n < 0 && (n = 0),
              a > c || o > u || (d(r, r), p(t, n), m(t, n)));
          }
          function b(e) {
            switch ((e.preventDefault(), String.fromCharCode(e.charCode))) {
              case "+":
                f(4);
                break;
              case "-":
                f(-4);
            }
          }
          function v(e) {
            e.preventDefault(), f(e.deltaY > 0 ? 1 : -1);
          }
          function g(e) {
            e.preventDefault(),
              e.stopPropagation(),
              (function (e) {
                (a.container_width = i.offsetWidth),
                  (a.container_height = i.offsetHeight),
                  (a.container_left = i.offsetLeft),
                  (a.container_top = i.offsetTop),
                  (a.mouse_x =
                    (e.clientX ||
                      e.pageX ||
                      (e.touches && e.touches[0].clientX)) + window.scrollX),
                  (a.mouse_y =
                    (e.clientY ||
                      e.pageY ||
                      (e.touches && e.touches[0].clientY)) + window.scrollY);
              })(e),
              document.addEventListener("mousemove", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("mouseup", y),
              document.addEventListener("touchend", y);
          }
          function y(e) {
            e.preventDefault(),
              document.removeEventListener("mouseup", y),
              document.removeEventListener("touchend", y),
              document.removeEventListener("mousemove", w),
              document.removeEventListener("touchmove", w);
          }
          function w(e) {
            let t,
              n,
              o,
              r,
              l = { x: 0, y: 0 };
            e.preventDefault(),
              e.stopPropagation(),
              (l.x = e.pageX || (e.touches && e.touches[0].pageX)),
              (l.y = e.pageY || (e.touches && e.touches[0].pageY)),
              (t = l.x - (a.mouse_x - a.container_left)),
              (n = l.y - (a.mouse_y - a.container_top)),
              (o = i.offsetWidth),
              (r = i.offsetHeight),
              t < 0
                ? (t = 0)
                : t > s.offsetWidth - o && (t = s.offsetWidth - o),
              n < 0
                ? (n = 0)
                : n > s.offsetHeight - r && (n = s.offsetHeight - r),
              p(t, n),
              m(t, n);
          }
          return (
            e.complete ? h() : (e.onload = h),
            {
              crop: function () {
                (t.width = l),
                  (t.height = c),
                  t.getContext("2d").drawImage(e, o, r, l, c, 0, 0, l, c);
              },
              removeHandlers: function () {
                i.removeEventListener("mousedown", g),
                  i.removeEventListener("touchstart", g),
                  i.removeEventListener("wheel", v),
                  document.removeEventListener("mouseup", y),
                  document.removeEventListener("touchend", y),
                  document.removeEventListener("mousemove", w),
                  document.removeEventListener("touchmove", w),
                  document.removeEventListener("keypress", b),
                  n.remove(),
                  i.remove(),
                  s.remove();
              },
            }
          );
        },
        a = n(54),
        o = n(16),
        r = n(29),
        l = n(147);
      class c extends a.b {
        constructor() {
          super("popup-avatar", null, { closable: !0, withConfirm: !0 }),
            (this.image = new Image()),
            (this.cropper = { crop: () => {}, removeHandlers: () => {} }),
            (this.h6 = document.createElement("h6")),
            Object(o._i18n)(this.h6, "Popup.Avatar.Title"),
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
                  Object(l.a)(t).then((e) => {
                    (this.image = new Image()),
                      this.cropContainer.append(this.image),
                      (this.image.src = e),
                      (this.image.onload = () => {
                        this.show(),
                          (this.cropper = s(this.image, this.canvas)),
                          (this.input.value = "");
                      });
                  });
              },
              !1
            ),
            (this.btnConfirm.className =
              "btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1"),
            Object(r.b)(
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
          this.onCrop(() => i.a.upload(this.blob));
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
        return a;
      });
      var i = n(15),
        s = n(0);
      function a(e) {
        if ("Enter" === e.key && !s.IS_MOBILE && !e.isComposing) {
          if ("enter" === i.default.settings.sendShortcut) {
            if (e.shiftKey || e.ctrlKey || e.metaKey) return;
            return !0;
          }
          {
            const t = s.IS_APPLE ? e.metaKey : e.ctrlKey;
            if (e.shiftKey || (s.IS_APPLE ? e.ctrlKey : e.metaKey)) return;
            if (t) return !0;
          }
        }
        return !1;
      }
    },
    147: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(99);
      function s(e) {
        return Object(i.a)(e, "readAsDataURL");
      }
    },
    25: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(34),
        s = n(36),
        a = n(35),
        o = n(138),
        r = n(17),
        l = n(16),
        c = n(32),
        u = n(31),
        h = n(100),
        d = n(70),
        p = n(8),
        m = n(33);
      let f = null;
      const b = new d.a(
        "page-signUp",
        !0,
        () =>
          n
            .e(5)
            .then(n.bind(null, 60))
            .then((e) => {
              const t = new h.a({
                className: "page-signUp",
                withInputWrapper: !0,
                titleLangKey: "YourName",
                subtitleLangKey: "Login.Register.Subtitle",
              });
              t.imageDiv.classList.add("avatar-edit"),
                t.title.classList.add("fullName");
              const r = document.createElement("canvas");
              (r.id = "canvas-avatar"), (r.className = "avatar-edit-canvas");
              const d = document.createElement("span");
              (d.className = "tgico tgico-cameraadd"), t.imageDiv.append(r, d);
              const b = e.default;
              let v;
              t.imageDiv.addEventListener("click", () => {
                new o.a().open(r, (e) => {
                  v = e;
                });
              });
              const g = (e) => {
                const n = y.value || "",
                  i = w.value || "",
                  s = n || i ? (n + " " + i).trim() : "";
                s
                  ? Object(m.a)(t.title, u.b.wrapEmojiText(s))
                  : Object(m.a)(t.title, Object(l.i18n)("YourName"));
              };
              const y = new s.b({ label: "FirstName", maxLength: 70 }),
                w = new s.b({ label: "LastName", maxLength: 64 }),
                E = Object(i.a)("btn-primary btn-color-primary"),
                L = new l.default.IntlElement({ key: "StartMessaging" });
              return (
                E.append(L.element),
                t.inputWrapper.append(y.container, w.container, E),
                y.input.addEventListener("input", g),
                w.input.addEventListener("input", g),
                E.addEventListener("click", function (e) {
                  if (
                    y.input.classList.contains("error") ||
                    w.input.classList.contains("error")
                  )
                    return !1;
                  if (!y.value.length)
                    return y.input.classList.add("error"), !1;
                  this.disabled = !0;
                  const t = y.value.trim(),
                    i = w.value.trim(),
                    s = {
                      phone_number: f.phone_number,
                      phone_code_hash: f.phone_code_hash,
                      first_name: t,
                      last_name: i,
                    };
                  L.update({ key: "PleaseWait" });
                  const o = Object(a.f)(this);
                  c.a
                    .invokeApi("auth.signUp", s)
                    .then((e) => {
                      switch (e._) {
                        case "auth.authorization":
                          c.a.setUser(e.user),
                            new Promise((e, t) => {
                              if (!v) return e();
                              v().then((n) => {
                                b.uploadProfilePhoto(n).then(e, t);
                              }, t);
                            }).finally(() => {
                              n.e(4)
                                .then(n.bind(null, 19))
                                .then((e) => {
                                  e.default.mount();
                                });
                            });
                          break;
                        default:
                          L.update({ key: e._ }),
                            this.removeAttribute("disabled"),
                            o.remove();
                      }
                    })
                    .catch((e) => {
                      this.removeAttribute("disabled"),
                        o.remove(),
                        e.type,
                        L.update({ key: e.type });
                    });
                }),
                Object(p.a)(),
                new Promise((e) => {
                  window.requestAnimationFrame(e);
                })
              );
            }),
        (e) => {
          (f = e),
            r.default.pushToState("authState", {
              _: "authStateSignUp",
              authCode: e,
            });
        }
      );
      t.default = b;
    },
    33: function (e, t, n) {
      "use strict";
      function i(e, t) {
        if ("string" == typeof t) return void (e.innerHTML = t);
        const n = e.firstChild;
        n
          ? e.lastChild === n
            ? n.replaceWith(t)
            : ((e.textContent = ""), e.append(t))
          : e.append(t);
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    36: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n(82),
        s = n(72),
        a = n(57),
        o = n(78);
      var r = n(16),
        l = n(31),
        c = n(48);
      let u = () => {
        document.addEventListener("paste", (e) => {
          if (!Object(s.a)(e.target, 'contenteditable="true"')) return;
          let t, n;
          e.preventDefault();
          let i = (e.originalEvent || e).clipboardData.getData("text/plain"),
            o = !0,
            r = (e.originalEvent || e).clipboardData.getData("text/html");
          if (r.trim()) {
            (r = r.replace(/<style([\s\S]*)<\/style>/, "")),
              (r = r.replace(/<!--([\s\S]*)-->/, ""));
            const e = r.match(/<body>([\s\S]*)<\/body>/);
            e && (r = e[1].trim());
            let s = document.createElement("span");
            s.innerHTML = r;
            let c = s.firstChild;
            for (; c; ) {
              let e = c.nextSibling;
              3 === c.nodeType && (c.nodeValue.trim() || c.remove()), (c = e);
            }
            const u = Object(a.a)(s, !0);
            if (
              u.value.replace(/\s/g, "").length === i.replace(/\s/g, "").length
            ) {
              (t = u.value), (n = u.entities), (o = !1);
              let e = l.b.parseEntities(t);
              (e = e.filter(
                (e) =>
                  "messageEntityEmoji" === e._ ||
                  "messageEntityLinebreak" === e._
              )),
                l.b.mergeEntities(n, e);
            }
          }
          o &&
            ((t = i),
            (n = l.b.parseEntities(t)),
            (n = n.filter(
              (e) =>
                "messageEntityEmoji" === e._ || "messageEntityLinebreak" === e._
            ))),
            (t = l.b.wrapDraftText(t, { entities: n })),
            window.document.execCommand("insertHTML", !1, t);
        }),
          (u = null);
      };
      var h;
      !(function (e) {
        (e[(e.Neutral = 0)] = "Neutral"),
          (e[(e.Valid = 1)] = "Valid"),
          (e[(e.Error = 2)] = "Error");
      })(h || (h = {}));
      t.b = class {
        constructor(e = {}) {
          (this.options = e),
            (this.container = document.createElement("div")),
            this.container.classList.add("input-field"),
            (this.required = e.required),
            (this.validate = e.validate),
            void 0 !== e.maxLength &&
              void 0 === e.showLengthOn &&
              (e.showLengthOn = Math.min(40, Math.round(e.maxLength / 3)));
          const {
            placeholder: t,
            maxLength: n,
            showLengthOn: i,
            name: s,
            plainText: l,
            canBeEdited: c = !0,
          } = e;
          let h,
            d,
            p = e.label || e.labelText;
          if (l)
            (this.container.innerHTML = `\n      <input type="text" ${
              s ? `name="${s}"` : ""
            } autocomplete="off" ${
              p ? 'required=""' : ""
            } class="input-field-input">\n      `),
              (h = this.container.firstElementChild);
          else {
            u && u(),
              (this.container.innerHTML = `\n      <div contenteditable="${String(
                !!c
              )}" class="input-field-input"></div>\n      `),
              (h = this.container.firstElementChild);
            const t = new MutationObserver(() => {
              d && d();
            });
            h.addEventListener("input", () => {
              Object(o.a)(h) && (h.innerHTML = ""),
                this.inputFake &&
                  ((this.inputFake.innerHTML = h.innerHTML),
                  this.onFakeInput());
            }),
              t.observe(h, { characterData: !0, childList: !0, subtree: !0 }),
              e.animate &&
                (h.classList.add("scrollable", "scrollable-y"),
                (this.inputFake = document.createElement("div")),
                this.inputFake.setAttribute("contenteditable", "true"),
                (this.inputFake.className =
                  h.className + " input-field-input-fake"));
          }
          if (
            (h.setAttribute("dir", "auto"),
            t &&
              (Object(r._i18n)(h, t, void 0, "placeholder"),
              this.inputFake &&
                Object(r._i18n)(this.inputFake, t, void 0, "placeholder")),
            p || t)
          ) {
            const e = document.createElement("div");
            e.classList.add("input-field-border"), this.container.append(e);
          }
          if (
            (p &&
              ((this.label = document.createElement("label")),
              this.setLabel(),
              this.container.append(this.label)),
            n)
          ) {
            const e = this.container.lastElementChild;
            let t = !1;
            (d = () => {
              const s = h.classList.contains("error"),
                o = l ? h.value.length : [...Object(a.a)(h, !1).value].length,
                r = n - o,
                c = r < 0;
              h.classList.toggle("error", c),
                c || r <= i
                  ? (this.setLabel(), e.append(` (${n - o})`), t || (t = !0))
                  : ((s && !c) || t) && (this.setLabel(), (t = !1));
            }),
              h.addEventListener("input", d);
          }
          this.input = h;
        }
        select() {
          this.value &&
            (this.options.plainText
              ? this.input.select()
              : (function (e) {
                  const t = document.createRange();
                  t.selectNodeContents(e);
                  const n = window.getSelection();
                  n.removeAllRanges(), n.addRange(t);
                })(this.input));
        }
        setLabel() {
          (this.label.textContent = ""),
            this.options.labelText
              ? (this.label.innerHTML = this.options.labelText)
              : this.label.append(
                  Object(r.i18n)(this.options.label, this.options.labelOptions)
                );
        }
        onFakeInput(e = !0) {
          const { scrollHeight: t } = this.inputFake,
            n = +this.input.style.height.replace("px", "");
          if (n === t) return;
          const i = Math.round(50 * Math.log(Math.abs(t - n)));
          (this.input.style.transitionDuration = i + "ms"),
            e && (this.input.style.height = t ? t + "px" : "");
          Object(c.a)(this.input, "is-changing-height", !0, i, () => {
            this.input.classList.remove("is-changing-height");
          });
        }
        get value() {
          return this.options.plainText
            ? this.input.value
            : Object(a.a)(this.input, !1).value;
        }
        set value(e) {
          this.setValueSilently(e, !1), Object(i.a)(this.input, "input");
        }
        setValueSilently(e, t = !0) {
          this.options.plainText
            ? (this.input.value = e)
            : ((this.input.innerHTML = e),
              this.inputFake &&
                ((this.inputFake.innerHTML = e), t && this.onFakeInput()));
        }
        isChanged() {
          return this.value !== this.originalValue;
        }
        isValid() {
          return (
            !this.input.classList.contains("error") &&
            (!this.validate || this.validate()) &&
            (!this.required || !Object(o.a)(this.input))
          );
        }
        isValidToChange() {
          return this.isValid() && this.isChanged();
        }
        setDraftValue(e = "", t = !1) {
          this.options.plainText || (e = l.b.wrapDraftText(e)),
            t ? this.setValueSilently(e, !1) : (this.value = e);
        }
        setOriginalValue(e = "", t = !1) {
          (this.originalValue = e), this.setDraftValue(e, t);
        }
        setState(e, t) {
          t &&
            ((this.label.textContent = ""),
            this.label.append(Object(r.i18n)(t, this.options.labelOptions))),
            this.input.classList.toggle("error", !!(e & h.Error)),
            this.input.classList.toggle("valid", !!(e & h.Valid));
        }
        setError(e) {
          this.setState(h.Error, e);
        }
      };
    },
    48: function (e, t, n) {
      "use strict";
      var i = n(15);
      const s = (e, t, n, a, o, r) => {
        const { timeout: l, raf: c } = e.dataset;
        if (
          (void 0 !== l && clearTimeout(+l),
          void 0 !== c &&
            (window.cancelAnimationFrame(+c), r || delete e.dataset.raf),
          r && i.default.settings.animationsEnabled && a)
        )
          return void (e.dataset.raf =
            "" +
            window.requestAnimationFrame(() => {
              delete e.dataset.raf, s(e, t, n, a, o, r - 1);
            }));
        n && t && e.classList.add(t);
        const u = () => {
          delete e.dataset.timeout,
            !n && t && e.classList.remove("backwards", t),
            e.classList.remove("animating"),
            o && o();
        };
        if (!i.default.settings.animationsEnabled || !a)
          return e.classList.remove("animating", "backwards"), void u();
        e.classList.add("animating"),
          e.classList.toggle("backwards", !n),
          (e.dataset.timeout = "" + setTimeout(u, a));
      };
      t.a = s;
    },
    54: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return w;
      }),
        n.d(t, "a", function () {
          return E;
        });
      var i = n(15),
        s = n(18),
        a = n(63),
        o = n(71),
        r = n(16),
        l = n(6),
        c = n(8),
        u = n(64),
        h = n(29),
        d = n(146),
        p = n(5),
        m = n(50),
        f = n(110),
        b = n(59);
      const v = document.body;
      let g = v;
      const y = () => {
        (g = Object(f.c)() || v), w.reAppend();
      };
      Object(f.a)(v, y);
      class w extends m.a {
        constructor(e, t, n = {}) {
          super(!1),
            (this.buttons = t),
            (this.element = document.createElement("div")),
            (this.container = document.createElement("div")),
            (this.header = document.createElement("div")),
            (this.title = document.createElement("div")),
            (this.onEscape = () => !0),
            (this.hide = () => {
              o.a.backByItem(this.navigationItem);
            }),
            this.element.classList.add("popup"),
            (this.element.className = "popup" + (e ? " " + e : "")),
            this.container.classList.add("popup-container", "z-depth-1"),
            this.header.classList.add("popup-header"),
            this.title.classList.add("popup-title"),
            this.header.append(this.title),
            (this.listenerSetter = new u.a()),
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
                  Object(l.a)(e.target, "popup-container") || this.hide();
                },
                { listenerSetter: this.listenerSetter }
              ),
            n.withConfirm &&
              ((this.btnConfirm = document.createElement("button")),
              this.btnConfirm.classList.add("btn-primary", "btn-color-primary"),
              !0 !== n.withConfirm &&
                this.btnConfirm.append(Object(r.i18n)(n.withConfirm)),
              this.header.append(this.btnConfirm),
              Object(s.ripple)(this.btnConfirm)),
            this.container.append(this.header),
            n.body &&
              ((this.body = document.createElement("div")),
              this.body.classList.add("popup-body"),
              this.container.append(this.body));
          let i = this.btnConfirm;
          if (null == t ? void 0 : t.length) {
            const e = (this.buttonsEl = document.createElement("div"));
            e.classList.add("popup-buttons"),
              2 === t.length && e.classList.add("popup-buttons-row");
            const n = t.map((e) => {
              const t = document.createElement("button");
              return (
                (t.className = "btn" + (e.isDanger ? " danger" : " primary")),
                Object(s.ripple)(t),
                e.text
                  ? (t.innerHTML = e.text)
                  : t.append(Object(r.i18n)(e.langKey, e.langArgs)),
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
            if (!i && 2 === t.length) {
              const e = t.find((e) => !e.isCancel);
              e && (i = e.element);
            }
            e.append(...n), this.container.append(e);
          }
          (this.btnConfirmOnEnter = i),
            this.element.append(this.container),
            w.POPUPS.push(this);
        }
        show() {
          (this.navigationItem = {
            type: "popup",
            onPop: () => this.destroy(),
            onEscape: this.onEscape,
          }),
            o.a.pushItem(this.navigationItem),
            Object(c.a)(),
            g.append(this.element),
            this.element.offsetWidth,
            this.element.classList.add("active"),
            this.withoutOverlay ||
              ((i.default.isOverlayActive = !0), a.a.checkAnimations(!0)),
            this.btnConfirmOnEnter &&
              setTimeout(() => {
                this.listenerSetter.add(document.body)("keydown", (e) => {
                  (this.confirmShortcutIsSendShortcut
                    ? Object(d.a)(e)
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
            this.withoutOverlay || (i.default.isOverlayActive = !1),
            o.a.removeItem(this.navigationItem),
            (this.navigationItem = void 0),
            Object(b.a)(w.POPUPS, this),
            y(),
            setTimeout(() => {
              this.element.remove(),
                this.dispatchEvent("closeAfterTimeout"),
                this.cleanup(),
                this.withoutOverlay || a.a.checkAnimations(!1);
            }, 150);
        }
        static reAppend() {
          this.POPUPS.forEach((e) => {
            const { element: t, container: n } = e,
              i = t.parentElement;
            i && i !== g && g !== n && g.append(t);
          });
        }
        static getPopups(e) {
          return this.POPUPS.filter((t) => t instanceof e);
        }
      }
      w.POPUPS = [];
      const E = (e) => (
        e.find((e) => e.isCancel) ||
          e.push({ langKey: "Cancel", isCancel: !0 }),
        e
      );
    },
    57: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n(30),
        s = n(31),
        a = n(73);
      function o(e, t = !0) {
        const n = [],
          i = [],
          o = t ? [] : void 0;
        Object(a.a)(e, n, i, void 0, void 0, o), i.length && n.push(i.join(""));
        let r = n.join("\n");
        return (
          (r = r.replace(/\u00A0/g, " ")),
          (null == o ? void 0 : o.length) &&
            (s.b.combineSameEntities(o), s.b.sortEntities(o)),
          { value: r, entities: o }
        );
      }
      i.a.getRichValue = o;
    },
    64: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      class i {
        constructor() {
          this.listeners = new Set();
        }
        add(e) {
          return (t, n, i) => {
            const s = { element: e, event: t, callback: n, options: i };
            return this.addManual(s), s;
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
        removeManual(e, t, n, i) {
          let s;
          for (const a of this.listeners)
            if (
              a.element === e &&
              a.event === t &&
              a.callback === n &&
              a.options === i
            ) {
              s = a;
              break;
            }
          s && this.remove(s);
        }
        removeAll() {
          this.listeners.forEach((e) => {
            this.remove(e);
          });
        }
      }
    },
    72: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return e.closest(`[${t}]`);
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    73: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return a;
        });
      const i = {
          bold: {
            match:
              '[style*="bold"], [style*="font-weight: 700"], [style*="font-weight: 600"], [style*="font-weight:700"], [style*="font-weight:600"], b, strong',
            entityName: "messageEntityBold",
          },
          underline: {
            match: '[style*="underline"], u, ins',
            entityName: "messageEntityUnderline",
          },
          italic: {
            match: '[style*="italic"], i, em',
            entityName: "messageEntityItalic",
          },
          monospace: {
            match: '[style*="monospace"], [face="monospace"], pre',
            entityName: "messageEntityPre",
          },
          strikethrough: {
            match: '[style*="line-through"], strike, del, s',
            entityName: "messageEntityStrike",
          },
          link: { match: "A:not(.follow)", entityName: "messageEntityTextUrl" },
          mentionName: {
            match: "A.follow",
            entityName: "messageEntityMentionName",
          },
          spoiler: {
            match: '[style*="spoiler"]',
            entityName: "messageEntitySpoiler",
          },
        },
        s = new Set([
          "DIV",
          "P",
          "BR",
          "LI",
          "SECTION",
          "H6",
          "H5",
          "H4",
          "H3",
          "H2",
          "H1",
          "TR",
        ]);
      function a(e, t, n, o, r, l, c = { offset: 0 }) {
        if (3 === e.nodeType) {
          let t = e.nodeValue;
          if (
            (o === e ? n.push(t.substr(0, r) + "" + t.substr(r)) : n.push(t),
            l && t.length && e.parentNode)
          ) {
            const n = e.parentElement;
            for (const e in i) {
              const s = i[e],
                a = n.closest(s.match + ", [contenteditable]");
              null ===
                (null == a ? void 0 : a.getAttribute("contenteditable")) &&
                ("messageEntityTextUrl" === s.entityName
                  ? l.push({
                      _: s.entityName,
                      url: a.href,
                      offset: c.offset,
                      length: t.length,
                    })
                  : "messageEntityMentionName" === s.entityName
                  ? l.push({
                      _: s.entityName,
                      offset: c.offset,
                      length: t.length,
                      user_id: a.dataset.follow.toUserId(),
                    })
                  : l.push({
                      _: s.entityName,
                      offset: c.offset,
                      length: t.length,
                    }));
            }
          }
          return void (c.offset += t.length);
        }
        if (1 !== e.nodeType) return;
        const u = o === e,
          h = s.has(e.tagName);
        if (h && n.length)
          t.push(n.join("")), n.splice(0, n.length), ++c.offset;
        else if (e instanceof HTMLImageElement) {
          const t = e.alt;
          t && (n.push(t), (c.offset += t.length));
        }
        u && !r && n.push("");
        const d = e.matches('[style*="table-cell"], th, td'),
          p = null == l ? void 0 : l.length;
        let m = e.firstChild;
        for (; m; ) a(m, t, n, o, r, l, c), (m = m.nextSibling);
        if (
          (u && r && n.push(""),
          d && e.nextSibling && (n.push(" "), ++c.offset, void 0 !== p))
        )
          for (let e = p, t = l.length; e < t; ++e) ++l[e].length;
        const f = n.length;
        h && f && (t.push(n.join("")), n.splice(0, f), ++c.offset),
          f && "P" === e.tagName && e.nextSibling && (t.push(""), ++c.offset);
      }
    },
    74: function (e, t, n) {
      "use strict";
      var i = n(15),
        s = n(32),
        a = n(52),
        o = n(124),
        r = n(114),
        l = n(30);
      const c = new (class {
        constructor() {
          (this.cacheStorage = new r.a("cachedFiles")),
            (this.downloads = {}),
            (this.progress = {}),
            (this.progressCallbacks = {}),
            (this.uploadId = 0),
            (this.thumbsCache = { photo: {}, document: {} }),
            i.default.addEventListener("download_progress", (e) => {
              const t = e;
              this.progress[t.fileName] = t;
              const n = this.progressCallbacks[t.fileName];
              n && n.forEach((e) => e(t));
              const i = this.downloads[t.fileName];
              i && i.notifyAll(t);
            });
        }
        getNewDeferred(e) {
          const t = Object(a.a)();
          return (
            (t.cancel = () => {
              const n = new Error("Download canceled");
              (n.name = "AbortError"),
                s.a.cancelDownload(e),
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
          const t = Object(o.a)(e.location, { fileName: e.fileName });
          if (this.downloads.hasOwnProperty(t)) return this.downloads[t];
          const n = this.getNewDeferred(t),
            i = (e) => {
              n.reject(e);
            };
          return (
            (() => {
              if (!s.a.worker || e.onlyCache) {
                const a = this.cacheStorage.getFile(t).then((t) => {
                  if (t.size < e.size) throw "wrong size";
                  n.resolve(t);
                });
                return e.onlyCache
                  ? a.catch(i)
                  : a.catch(() => s.a.downloadFile(e).then(n.resolve, i));
              }
              s.a.downloadFile(e).then(n.resolve, i);
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
            s.a.uploadFile({ file: e, fileName: t }).then(n.resolve, n.reject),
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
          const i = this.progress[e];
          (null !== (n = this.progressCallbacks[e]) && void 0 !== n
            ? n
            : (this.progressCallbacks[e] = [])
          ).push(t),
            i && t(i);
        }
        createDownloadAnchor(e, t, n) {
          const i = document.createElement("a");
          (i.href = e),
            (i.download = t),
            (i.target = "_blank"),
            (i.style.position = "absolute"),
            (i.style.top = "1px"),
            (i.style.left = "1px"),
            document.body.append(i);
          try {
            var s = document.createEvent("MouseEvents");
            s.initMouseEvent(
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
              i.dispatchEvent(s);
          } catch (t) {
            console.error("Download click error", t);
            try {
              i.click();
            } catch (t) {
              window.open(e, "_blank");
            }
          }
          setTimeout(() => {
            i.remove(), n && n();
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
          var n, i;
          const s =
            null !== (n = this.thumbsCache[e._][e.id]) && void 0 !== n
              ? n
              : (this.thumbsCache[e._][e.id] = {});
          return null !== (i = s[t]) && void 0 !== i
            ? i
            : (s[t] = { downloaded: 0, url: "" });
        }
      })();
      l.a && (l.a.appDownloadManager = c), (t.a = c);
    },
    78: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(57);
      function s(e) {
        return e.hasAttribute("contenteditable") || "INPUT" !== e.tagName
          ? !Object(i.a)(e, !1).value.trim()
          : !e.value.trim();
      }
    },
    99: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return new Promise((n) => {
          const i = new FileReader();
          i.addEventListener("loadend", (e) => {
            n(e.target.result);
          }),
            i[t](e);
        });
      }
      n.d(t, "a", function () {
        return i;
      });
    },
  },
]);
//# sourceMappingURL=14.a5ced60a0aaf18dbe920.chunk.js.map
