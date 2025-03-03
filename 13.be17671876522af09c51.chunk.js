(this.webpackJsonp = this.webpackJsonp || []).push([
  [13, 6, 21, 25],
  {
    108: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var i = n(5),
        s = n(29),
        a = n(9),
        o = n(16),
        r = n(32),
        l = n(15),
        c = n(34),
        d = n(35);
      let u,
        h = !1;
      function p(e) {
        h ||
          (
            u ||
            (u = r.a
              .getConfig()
              .then((e) =>
                e.suggested_lang_code !== o.default.lastRequestedLangCode
                  ? Promise.all([
                      e,
                      o.default.getStrings(e.suggested_lang_code, [
                        "Login.ContinueOnLanguage",
                      ]),
                      o.default.getCacheLangPack(),
                    ])
                  : []
              ))
          ).then(([t, n]) => {
            if (!t) return;
            const r = [];
            n.forEach((e) => {
              const t = o.default.strings.get(e.key);
              t && (r.push(t), o.default.strings.set(e.key, e));
            });
            const u = Object(c.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              {
                text: "Login.ContinueOnLanguage",
              }
            );
            u.lastElementChild.classList.remove("i18n"),
              Object(a.a)().then(() => {
                window.requestAnimationFrame(() => {
                  e.append(u);
                });
              }),
              l.default.addEventListener(
                "language_change",
                () => {
                  u.remove();
                },
                {
                  once: !0,
                }
              ),
              r.forEach((e) => {
                o.default.strings.set(e.key, e);
              }),
              Object(s.b)(u, (e) => {
                Object(i.a)(e),
                  (h = !0),
                  (u.disabled = !0),
                  Object(d.f)(u),
                  o.default.getLangPack(t.suggested_lang_code);
              });
          });
      }
    },
    114: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
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
      class d {
        constructor(e) {
          (this.dbName = e),
            (this.useStorage = !0),
            i.a.test && (this.dbName += "_test"),
            d.STORAGES.length && (this.useStorage = d.STORAGES[0].useStorage),
            this.openDatabase(),
            d.STORAGES.push(this);
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
            headers: {
              "Content-Length": "" + t.size,
            },
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
      d.STORAGES = [];
    },
    117: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return t
          ? e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
          : e.replace(/-/g, "+").replace(/_/g, "/");
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    118: function (e, t, n) {
      "use strict";
      function i(e, t) {
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; ++i) if (e[i] !== t[i]) return !1;
        return !0;
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    123: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(89),
        s = n(94),
        a = n(0),
        o = n(36);
      class r extends o.b {
        constructor(e = {}) {
          super(
            Object.assign(
              {
                label: "Contacts.PhoneNumber.Placeholder",
                name: "phone",
              },
              e
            )
          ),
            (this.pasted = !1),
            (this.lastValue = ""),
            this.container.classList.add("input-field-phone");
          let t = this.input;
          if (t instanceof HTMLInputElement)
            (t.type = "tel"), (t.autocomplete = "rr55RandomRR55");
          else {
            t.inputMode = "decimal";
            const e = window.devicePixelRatio;
            if (e > 1) {
              let n;
              a.IS_APPLE ? (n = -0.16 * e) : a.IS_ANDROID && (n = 0),
                t.style.setProperty("--letter-spacing", n + "px");
            }
            const n = this.setValueSilently.bind(this);
            this.setValueSilently = (e) => {
              n(e), Object(i.a)(this.input, !0);
            };
          }
          t.addEventListener("input", () => {
            t.classList.remove("error");
            const n = this.value;
            let i;
            Math.abs(n.length - this.lastValue.length) > 1 &&
              !this.pasted &&
              a.IS_APPLE_MOBILE &&
              this.setValueSilently(this.lastValue + n),
              (this.pasted = !1),
              this.setLabel();
            let o,
              r,
              l,
              c = "";
            "+" === this.value.replace(/\++/, "+")
              ? this.setValueSilently("+")
              : ((i = Object(s.a)(this.value)),
                (o = i.formatted),
                (r = i.country),
                (c = i.leftPattern),
                (l = i.code),
                this.setValueSilently((this.lastValue = o ? "+" + o : ""))),
              (t.dataset.leftPattern = c),
              e.onInput && e.onInput(i);
          }),
            t.addEventListener("paste", () => {
              this.pasted = !0;
            }),
            t.addEventListener("keypress", (e) => {
              const t = e.key;
              if (
                /\D/.test(t) &&
                !e.metaKey &&
                !e.ctrlKey &&
                "Backspace" !== t &&
                ("+" !== t || !e.shiftKey)
              )
                return e.preventDefault(), !1;
            });
        }
      }
    },
    20: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(32),
        s = n(70),
        a = n(79),
        o = n(7),
        r = n(34),
        l = n(16),
        c = n(17),
        d = n(15),
        u = n(35),
        h = n(108),
        p = n(81),
        f = n(117),
        m = n(118);
      function g(e) {
        return e < 26
          ? e + 65
          : e < 52
          ? e + 71
          : e < 62
          ? e - 4
          : 62 === e
          ? 43
          : 63 === e
          ? 47
          : 65;
      }
      var b = function (e, t, n, i) {
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
      let v,
        y = () =>
          b(void 0, void 0, void 0, function* () {
            const e = L.pageEl.querySelector(".auth-image");
            let t = Object(u.f)(e, !0);
            const s = document.createElement("div");
            s.classList.add("input-wrapper");
            const c = Object(r.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              {
                text: "Login.QR.Cancel",
              }
            );
            s.append(c), Object(h.a)(s);
            const y = e.parentElement,
              E = document.createElement("h4");
            Object(l._i18n)(E, "Login.QR.Title");
            const S = document.createElement("ol");
            S.classList.add("qr-description"),
              ["Login.QR.Help1", "Login.QR.Help2", "Login.QR.Help3"].forEach(
                (e) => {
                  const t = document.createElement("li");
                  t.append(Object(l.i18n)(e)), S.append(t);
                }
              ),
              y.append(E, S, s),
              c.addEventListener("click", () => {
                Promise.all([n.e(6), n.e(25)])
                  .then(n.bind(null, 21))
                  .then((e) => e.default.mount()),
                  (O = !0);
              });
            const w = (yield Promise.all([
              n.e(11).then(n.t.bind(null, 200, 7)),
            ]))[0].default;
            let O = !1;
            d.default.addEventListener(
              "user_auth",
              () => {
                (O = !0), (v = null);
              },
              {
                once: !0,
              }
            );
            let k,
              T = {
                ignoreErrors: !0,
              };
            const x = (s) =>
              b(void 0, void 0, void 0, function* () {
                try {
                  let r = yield i.a.invokeApi(
                    "auth.exportLoginToken",
                    {
                      api_id: o.a.id,
                      api_hash: o.a.hash,
                      except_ids: [],
                    },
                    {
                      ignoreErrors: !0,
                    }
                  );
                  if (
                    ("auth.loginTokenMigrateTo" === r._ &&
                      (T.dcId || ((T.dcId = r.dc_id), i.a.setBaseDcId(r.dc_id)),
                      (r = yield i.a.invokeApi(
                        "auth.importLoginToken",
                        {
                          token: r.token,
                        },
                        T
                      ))),
                    "auth.loginTokenSuccess" === r._)
                  ) {
                    const e = r.authorization;
                    return (
                      i.a.setUser(e.user),
                      n
                        .e(4)
                        .then(n.bind(null, 19))
                        .then((e) => e.default.mount()),
                      !0
                    );
                  }
                  if (!k || !Object(m.a)(k, r.token)) {
                    k = r.token;
                    let n = (function (e) {
                        let t,
                          n = "";
                        for (let i = e.length, s = 0, a = 0; a < i; ++a)
                          (t = a % 3),
                            (s |= e[a] << ((16 >>> t) & 24)),
                            (2 !== t && i - a != 1) ||
                              ((n += String.fromCharCode(
                                g((s >>> 18) & 63),
                                g((s >>> 12) & 63),
                                g((s >>> 6) & 63),
                                g(63 & s)
                              )),
                              (s = 0));
                        return n.replace(/A(?=A$|$)/g, "=");
                      })(r.token),
                      i = "tg://login?token=" + Object(f.a)(n, !0);
                    const s = window.getComputedStyle(document.documentElement),
                      a = s.getPropertyValue("--surface-color").trim(),
                      o = s.getPropertyValue("--primary-text-color").trim(),
                      l = s.getPropertyValue("--primary-color").trim(),
                      c = yield fetch("assets/img/logo_padded.svg")
                        .then((e) => e.text())
                        .then((e) => {
                          e = e.replace(/(fill:).+?(;)/, `$1${l}$2`);
                          const t = new Blob([e], {
                            type: "image/svg+xml;charset=utf-8",
                          });
                          return new Promise((e) => {
                            const n = new FileReader();
                            (n.onload = (t) => {
                              e(t.target.result);
                            }),
                              n.readAsDataURL(t);
                          });
                        }),
                      d = new w({
                        width: 240 * window.devicePixelRatio,
                        height: 240 * window.devicePixelRatio,
                        data: i,
                        image: c,
                        dotsOptions: {
                          color: o,
                          type: "rounded",
                        },
                        cornersSquareOptions: {
                          type: "extra-rounded",
                        },
                        imageOptions: {
                          imageSize: 1,
                          margin: 0,
                        },
                        backgroundOptions: {
                          color: a,
                        },
                        qrOptions: {
                          errorCorrectionLevel: "L",
                        },
                      });
                    let u;
                    d.append(e),
                      e.lastChild.classList.add("qr-canvas"),
                      (u = d._drawingPromise
                        ? d._drawingPromise
                        : Promise.race([
                            Object(p.a)(1e3),
                            new Promise((e) => {
                              d._canvas._image.addEventListener(
                                "load",
                                () => {
                                  window.requestAnimationFrame(() => e());
                                },
                                {
                                  once: !0,
                                }
                              );
                            }),
                          ])),
                      yield u.then(() => {
                        if (t) {
                          t.style.animation = "hide-icon .4s forwards";
                          const n = e.children[1];
                          (n.style.display = "none"),
                            (n.style.animation = "grow-icon .4s forwards"),
                            setTimeout(() => {
                              n.style.display = "";
                            }, 150),
                            setTimeout(() => {
                              n.style.animation = "";
                            }, 500),
                            (t = void 0);
                        } else
                          Array.from(e.children)
                            .slice(0, -1)
                            .forEach((e) => {
                              e.remove();
                            });
                      });
                  }
                  if (s) {
                    let e = Date.now() / 1e3,
                      t = r.expires - e - a.a.serverTimeOffset;
                    yield Object(p.a)(t > 3 ? 3e3 : (1e3 * t) | 0);
                  }
                } catch (e) {
                  switch (e.type) {
                    case "SESSION_PASSWORD_NEEDED":
                      console.warn("pageSignQR: SESSION_PASSWORD_NEEDED"),
                        (e.handled = !0),
                        n
                          .e(16)
                          .then(n.bind(null, 23))
                          .then((e) => e.default.mount()),
                        (O = !0),
                        (v = null);
                      break;
                    default:
                      console.error("pageSignQR: default error:", e), (O = !0);
                  }
                  return !0;
                }
                return !1;
              });
            return () =>
              b(void 0, void 0, void 0, function* () {
                for (O = !1; ; ) {
                  if (O) break;
                  if (yield x(!0)) break;
                }
              });
          });
      const L = new s.a(
        "page-signQR",
        !0,
        () => v,
        () => {
          v || (v = y()),
            v.then((e) => {
              e();
            }),
            c.default.pushToState("authState", {
              _: "authStateSignQr",
            });
        }
      );
      t.default = L;
    },
    21: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(35),
        s = n(44),
        a = n(17),
        o = n(32),
        r = n(31),
        l = n(70),
        c = n(36),
        d = n(46),
        u = n(34),
        h = n(88),
        p = n(1),
        f = n(7),
        m = n(16),
        g = n(51),
        b = n(18),
        v = n(61),
        y = n(6),
        L = n(67),
        E = n(105),
        S = n(114),
        w = n(20),
        O = n(108),
        k = n(5),
        T = n(29),
        x = n(33),
        _ = n(55),
        j = n(75),
        A = n(89),
        P = n(97),
        N = n(82),
        C = n(91),
        D = n(15),
        R = n(123),
        H = n(10),
        M = function (e, t, n, i) {
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
      let V,
        F = null;
      const I = new l.a(
        "page-sign",
        !0,
        () => {
          const e = () => {
            t = m.default.countriesList
              .filter((e) => {
                var t;
                return !(null === (t = e.pFlags) || void 0 === t
                  ? void 0
                  : t.hidden);
              })
              .sort((e, t) =>
                (e.name || e.default_name).localeCompare(
                  t.name || t.default_name
                )
              );
          };
          let t;
          e(),
            D.default.addEventListener("language_change", () => {
              e();
            });
          const l = new Map();
          let b, B;
          const U = document.createElement("div");
          U.classList.add("input-wrapper");
          const q = new c.b({
            label: "Login.CountrySelectorLabel",
            name: Object(L.b)(),
          });
          q.container.classList.add("input-select");
          const $ = q.input,
            W = document.createElement("div");
          W.classList.add("select-wrapper", "z-depth-3", "hide");
          const Q = document.createElement("span");
          Q.classList.add("arrow", "arrow-down"), q.container.append(Q);
          const K = document.createElement("ul");
          W.appendChild(K);
          new s.b(W);
          let z = () => {
            (z = null),
              t.forEach((e) => {
                const t = Object(P.c)(e.iso2),
                  n = [];
                e.country_codes.forEach((i) => {
                  const s = document.createElement("li");
                  let a = r.a.wrapEmojiText(t);
                  if (H.a) {
                    const e = document.createElement("span");
                    (e.innerHTML = a), s.append(e);
                  } else s.innerHTML = a;
                  const o = Object(m.i18n)(e.default_name);
                  (o.dataset.defaultName = e.default_name), s.append(o);
                  const l = document.createElement("span");
                  l.classList.add("phone-code"),
                    (l.innerText = "+" + i.country_code),
                    s.appendChild(l),
                    n.push(s),
                    K.append(s);
                }),
                  l.set(e.iso2, n);
              }),
              K.addEventListener("mousedown", (e) => {
                if (0 !== e.button) return;
                const t = Object(v.a)(e.target, "LI");
                G(t);
              }),
              q.container.appendChild(W);
          };
          const G = (e) => {
            const n = e.childNodes[1].dataset.defaultName,
              i = e.querySelector(".phone-code").innerText,
              s = i.replace(/\D/g, "");
            Object(x.a)($, Object(m.i18n)(n)),
              Object(N.a)($, "input"),
              (b = t.find((e) => e.default_name === n)),
              (B = b.country_codes.find((e) => e.country_code === s)),
              (ee.value = ee.lastValue = i),
              Z(),
              setTimeout(() => {
                te.focus(), Object(A.a)(te, !0);
              }, 0);
          };
          let X;
          z(),
            $.addEventListener("focus", function (e) {
              z
                ? z()
                : t.forEach((e) => {
                    l.get(e.iso2).forEach((e) => (e.style.display = ""));
                  }),
                clearTimeout(X),
                (X = void 0),
                W.classList.remove("hide"),
                W.offsetWidth,
                W.classList.add("active"),
                q.select(),
                Object(h.b)({
                  container: I.pageEl.parentElement.parentElement,
                  element: $,
                  position: "start",
                  margin: 4,
                }),
                setTimeout(() => {
                  J ||
                    (document.addEventListener("mousedown", Y, {
                      capture: !0,
                    }),
                    (J = !0));
                }, 0);
            });
          let J = !1;
          const Y = (e) => {
              Object(y.a)(e.target, "input-select") ||
                (e.target !== $ &&
                  (Z(),
                  document.removeEventListener("mousedown", Y, {
                    capture: !0,
                  }),
                  (J = !1)));
            },
            Z = () => {
              void 0 === X &&
                (W.classList.remove("active"),
                (X = window.setTimeout(() => {
                  W.classList.add("hide"), (X = void 0);
                }, 200)));
            };
          $.addEventListener("keyup", (e) => {
            const n = e.key;
            if (e.ctrlKey || "Control" === n) return !1;
            let i = q.value.toLowerCase(),
              s = [];
            t.forEach((e) => {
              const t = [e.name, e.default_name, e.iso2];
              t.filter(Boolean).forEach((e) => {
                const n = e
                  .split(" ")
                  .filter((e) => /\w/.test(e))
                  .map((e) => e[0])
                  .join("");
                n.length > 1 && t.push(n);
              });
              let n = !!t
                .filter(Boolean)
                .find((e) => -1 !== e.toLowerCase().indexOf(i));
              l.get(e.iso2).forEach((e) => (e.style.display = n ? "" : "none")),
                n && s.push(e);
            }),
              0 === s.length
                ? t.forEach((e) => {
                    l.get(e.iso2).forEach((e) => (e.style.display = ""));
                  })
                : 1 === s.length && "Enter" === n && G(l.get(s[0].iso2)[0]);
          }),
            Q.addEventListener("mousedown", function (e) {
              (e.cancelBubble = !0),
                e.preventDefault(),
                $.matches(":focus") ? $.blur() : $.focus();
            });
          const ee = new R.a({
              onInput: (e) => {
                g.a.loadLottieWorkers();
                const { country: t, code: n } = e || {};
                let i = t ? t.name || t.default_name : "";
                i === q.value ||
                  (b &&
                    t &&
                    n &&
                    (b === t || B.country_code === n.country_code)) ||
                  (Object(x.a)($, t ? Object(m.i18n)(t.default_name) : i),
                  (b = t),
                  (B = n)),
                  t || ee.value.length - 1 > 1
                    ? (F.style.visibility = "")
                    : (F.style.visibility = "hidden");
              },
            }),
            te = ee.input;
          te.addEventListener("keypress", (e) => {
            if (!F.style.visibility && "Enter" === e.key) return ie();
          });
          const ne = new d.a({
            text: "Login.KeepSigned",
            name: "keepSession",
            withRipple: !0,
            checked: !0,
          });
          ne.input.addEventListener("change", () => {
            const e = ne.checked;
            a.default.pushToState("keepSigned", e),
              E.a.toggleStorage(e),
              S.a.toggleStorage(e),
              o.a.toggleStorage(e),
              j.a.toggleStorage(e);
          }),
            a.default.getState().then((e) => {
              a.default.storage.isAvailable()
                ? (ne.checked = e.keepSigned)
                : ((ne.checked = !1),
                  ne.label.classList.add("checkbox-disabled"));
            }),
            (F = Object(u.a)("btn-primary btn-color-primary", {
              text: "Login.Next",
            })),
            (F.style.visibility = "hidden");
          const ie = (e) => {
            e && Object(k.a)(e);
            const t = Object(_.a)([F, V], !0);
            Object(x.a)(F, Object(m.i18n)("PleaseWait")), Object(i.f)(F);
            let s = ee.value;
            o.a
              .invokeApi("auth.sendCode", {
                phone_number: s,
                api_id: f.a.id,
                api_hash: f.a.hash,
                settings: {
                  _: "codeSettings",
                },
              })
              .then((e) => {
                n.e(23)
                  .then(n.bind(null, 22))
                  .then((t) =>
                    t.default.mount(
                      Object.assign(e, {
                        phone_number: s,
                      })
                    )
                  );
              })
              .catch((e) => {
                switch ((t(), e.type)) {
                  case "PHONE_NUMBER_INVALID":
                    ee.setError(),
                      Object(x.a)(
                        ee.label,
                        Object(m.i18n)("Login.PhoneLabelInvalid")
                      ),
                      te.classList.add("error"),
                      Object(x.a)(F, Object(m.i18n)("Login.Next"));
                    break;
                  default:
                    console.error("auth.sendCode error:", e),
                      (F.innerText = e.type);
                }
              });
          };
          Object(T.b)(F, ie),
            (V = Object(u.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              {
                text: "Login.QR.Login",
              }
            ));
          V.addEventListener("click", () => {
            w.default.mount();
          }),
            U.append(q.container, ee.container, ne.label, F, V);
          const se = document.createElement("h4");
          se.classList.add("text-center"), Object(m._i18n)(se, "Login.Title");
          const ae = document.createElement("div");
          ae.classList.add("subtitle", "text-center"),
            Object(m._i18n)(ae, "Login.StartText"),
            I.pageEl.querySelector(".container").append(se, ae, U);
          p.IS_TOUCH_SUPPORTED ||
            setTimeout(() => {
              te.focus();
            }, 0),
            Object(O.a)(U),
            o.a
              .invokeApi("help.getNearestDc")
              .then((e) => {
                var t;
                const n = C.a.getFromCache("langPack");
                n &&
                  !(null === (t = n.countries) || void 0 === t
                    ? void 0
                    : t.hash) &&
                  m.default.getLangPack(n.lang_code).then(() => {
                    Object(N.a)(te, "input");
                  });
                const i = new Set([1, 2, 3, 4, 5]),
                  s = [e.this_dc];
                let a;
                return (
                  e.nearest_dc !== e.this_dc &&
                    (a = o.a.getNetworker(e.nearest_dc).then(() => {
                      s.push(e.nearest_dc);
                    })),
                  (a || Promise.resolve()).then(() => {
                    s.forEach((e) => {
                      i.delete(e);
                    });
                    const e = [...i],
                      t = () =>
                        M(void 0, void 0, void 0, function* () {
                          const n = e.shift();
                          if (!n) return;
                          const i = `dc${n}_auth_key`;
                          if (yield j.a.get(i)) return t();
                          setTimeout(() => {
                            o.a.getNetworker(n).finally(t);
                          }, 3e3);
                        });
                    t();
                  }),
                  e
                );
              })
              .then((e) => {
                q.value.length || ee.value.length || G(l.get(e.country)[0]);
              });
        },
        () => {
          F &&
            (Object(x.a)(F, Object(m.i18n)("Login.Next")),
            Object(b.ripple)(F, void 0, void 0, !0),
            F.removeAttribute("disabled")),
            V && V.removeAttribute("disabled"),
            a.default.pushToState("authState", {
              _: "authStateSignIn",
            });
        }
      );
      t.default = I;
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
        return u;
      });
      var i = n(82),
        s = n(72),
        a = n(57),
        o = n(78);
      var r = n(16),
        l = n(31),
        c = n(48);
      let d = () => {
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
            const d = Object(a.a)(s, !0);
            if (
              d.value.replace(/\s/g, "").length === i.replace(/\s/g, "").length
            ) {
              (t = d.value), (n = d.entities), (o = !1);
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
            (t = l.b.wrapDraftText(t, {
              entities: n,
            })),
            window.document.execCommand("insertHTML", !1, t);
        }),
          (d = null);
      };
      var u;
      !(function (e) {
        (e[(e.Neutral = 0)] = "Neutral"),
          (e[(e.Valid = 1)] = "Valid"),
          (e[(e.Error = 2)] = "Error");
      })(u || (u = {}));
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
          let u,
            h,
            p = e.label || e.labelText;
          if (l)
            (this.container.innerHTML = `\n      <input type="text" ${
              s ? `name="${s}"` : ""
            } autocomplete="off" ${
              p ? 'required=""' : ""
            } class="input-field-input">\n      `),
              (u = this.container.firstElementChild);
          else {
            d && d(),
              (this.container.innerHTML = `\n      <div contenteditable="${String(
                !!c
              )}" class="input-field-input"></div>\n      `),
              (u = this.container.firstElementChild);
            const t = new MutationObserver(() => {
              h && h();
            });
            u.addEventListener("input", () => {
              Object(o.a)(u) && (u.innerHTML = ""),
                this.inputFake &&
                  ((this.inputFake.innerHTML = u.innerHTML),
                  this.onFakeInput());
            }),
              t.observe(u, {
                characterData: !0,
                childList: !0,
                subtree: !0,
              }),
              e.animate &&
                (u.classList.add("scrollable", "scrollable-y"),
                (this.inputFake = document.createElement("div")),
                this.inputFake.setAttribute("contenteditable", "true"),
                (this.inputFake.className =
                  u.className + " input-field-input-fake"));
          }
          if (
            (u.setAttribute("dir", "auto"),
            t &&
              (Object(r._i18n)(u, t, void 0, "placeholder"),
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
            (h = () => {
              const s = u.classList.contains("error"),
                o = l ? u.value.length : [...Object(a.a)(u, !1).value].length,
                r = n - o,
                c = r < 0;
              u.classList.toggle("error", c),
                c || r <= i
                  ? (this.setLabel(), e.append(` (${n - o})`), t || (t = !0))
                  : ((s && !c) || t) && (this.setLabel(), (t = !1));
            }),
              u.addEventListener("input", h);
          }
          this.input = u;
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
            this.input.classList.toggle("error", !!(e & u.Error)),
            this.input.classList.toggle("valid", !!(e & u.Valid));
        }
        setError(e) {
          this.setState(u.Error, e);
        }
      };
    },
    44: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var i = n(1),
        s = n(41),
        a = n(88),
        o = n(83),
        r = n(5);
      class l {
        constructor(e, t = "", n = document.createElement("div")) {
          (this.el = e),
            (this.container = n),
            (this.onScrollMeasure = 0),
            (this.lastScrollPosition = 0),
            (this.lastScrollDirection = 0),
            (this.isHeavyAnimationInProgress = !1),
            (this.needCheckAfterAnimation = !1),
            (this.onScroll = () => {
              if (this.isHeavyAnimationInProgress)
                return (
                  this.onScrollMeasure &&
                    window.cancelAnimationFrame(this.onScrollMeasure),
                  void (this.needCheckAfterAnimation = !0)
                );
              (this.onScrolledTop ||
                this.onScrolledBottom ||
                this.splitUp ||
                this.onAdditionalScroll) &&
                (this.onScrollMeasure &&
                  window.cancelAnimationFrame(this.onScrollMeasure),
                (this.onScrollMeasure = window.requestAnimationFrame(() => {
                  this.onScrollMeasure = 0;
                  const e = this.container[this.scrollProperty];
                  (this.lastScrollDirection =
                    this.lastScrollPosition === e
                      ? 0
                      : this.lastScrollPosition < e
                      ? 1
                      : -1),
                    (this.lastScrollPosition = e),
                    this.onAdditionalScroll &&
                      0 !== this.lastScrollDirection &&
                      this.onAdditionalScroll(),
                    this.checkForTriggers && this.checkForTriggers();
                })));
            }),
            this.container.classList.add("scrollable"),
            (this.log = Object(s.b)("SCROLL" + (t ? "-" + t : ""), s.a.Error)),
            e &&
              (Array.from(e.children).forEach((e) => this.container.append(e)),
              e.append(this.container));
        }
        setListeners() {
          this.removeHeavyAnimationListener ||
            (window.addEventListener("resize", this.onScroll, {
              passive: !0,
            }),
            this.container.addEventListener("scroll", this.onScroll, {
              passive: !0,
              capture: !0,
            }),
            (this.removeHeavyAnimationListener = Object(o.a)(
              () => {
                (this.isHeavyAnimationInProgress = !0),
                  this.onScrollMeasure &&
                    ((this.needCheckAfterAnimation = !0),
                    window.cancelAnimationFrame(this.onScrollMeasure));
              },
              () => {
                (this.isHeavyAnimationInProgress = !1),
                  this.needCheckAfterAnimation &&
                    (this.onScroll(), (this.needCheckAfterAnimation = !1));
              }
            )));
        }
        removeListeners() {
          this.removeHeavyAnimationListener &&
            (window.removeEventListener("resize", this.onScroll),
            this.container.removeEventListener("scroll", this.onScroll, {
              capture: !0,
            }),
            this.removeHeavyAnimationListener());
        }
        append(e) {
          this.container.append(e);
        }
        scrollIntoViewNew(e) {
          return Object(a.b)(
            Object.assign(Object.assign({}, e), {
              container: this.container,
            })
          );
        }
      }
      class c extends l {
        constructor(e, t = "", n = 300, i) {
          super(e, t),
            (this.onScrollOffset = n),
            (this.loadedAll = {
              top: !0,
              bottom: !1,
            }),
            (this.checkForTriggers = () => {
              if (!this.onScrolledTop && !this.onScrolledBottom) return;
              if (this.isHeavyAnimationInProgress) return void this.onScroll();
              const e = this.container.scrollHeight;
              if (!e) return;
              const t = e - this.container.clientHeight,
                n = this.lastScrollPosition;
              this.onScrolledTop &&
                n <= this.onScrollOffset &&
                this.lastScrollDirection <= 0 &&
                this.onScrolledTop(),
                this.onScrolledBottom &&
                  t - n <= this.onScrollOffset &&
                  this.lastScrollDirection >= 0 &&
                  this.onScrolledBottom();
            }),
            this.container.classList.add("scrollable-y"),
            this.setListeners(),
            (this.scrollProperty = "scrollTop");
        }
        setVirtualContainer(e) {
          (this.splitUp = e), this.log("setVirtualContainer:", e, this);
        }
        prepend(...e) {
          (this.splitUp || this.padding || this.container).prepend(...e);
        }
        append(...e) {
          (this.splitUp || this.padding || this.container).append(...e);
        }
        getDistanceToEnd() {
          return (
            this.scrollHeight -
            Math.round(this.scrollTop + this.container.offsetHeight)
          );
        }
        get isScrolledDown() {
          return this.getDistanceToEnd() <= 1;
        }
        set scrollTop(e) {
          this.container.scrollTop = e;
        }
        get scrollTop() {
          return this.container.scrollTop;
        }
        get scrollHeight() {
          return this.container.scrollHeight;
        }
      }
      class d extends l {
        constructor(
          e,
          t = "",
          n = 300,
          s = 15,
          a = document.createElement("div")
        ) {
          if (
            (super(e, t, a),
            (this.onScrollOffset = n),
            (this.splitCount = s),
            (this.container = a),
            this.container.classList.add("scrollable-x"),
            !i.IS_TOUCH_SUPPORTED)
          ) {
            const e = (e) => {
              !e.deltaX &&
                this.container.scrollWidth > this.container.clientWidth &&
                ((this.container.scrollLeft += e.deltaY / 4), Object(r.a)(e));
            };
            this.container.addEventListener("wheel", e, {
              passive: !1,
            });
          }
          this.scrollProperty = "scrollLeft";
        }
      }
    },
    46: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(17),
        s = n(18),
        a = n(16),
        o = n(115);
      class r {
        constructor(e = {}) {
          const t = (this.label = document.createElement("label"));
          t.classList.add("checkbox-field"),
            e.restriction && t.classList.add("checkbox-field-restriction"),
            e.round && t.classList.add("checkbox-field-round"),
            e.disabled && this.toggleDisability(!0);
          const n = (this.input = document.createElement("input"));
          let r;
          if (
            (n.classList.add("checkbox-field-input"),
            (n.type = "checkbox"),
            e.name && (n.id = "input-" + e.name),
            e.checked && (n.checked = !0),
            e.stateKey &&
              i.default.getState().then((t) => {
                const s = Object(o.a)(t, e.stateKey);
                let a;
                (a = e.stateValues ? 1 === e.stateValues.indexOf(s) : s),
                  this.setValueSilently(a),
                  n.addEventListener("change", () => {
                    let t;
                    (t = e.stateValues
                      ? e.stateValues[n.checked ? 1 : 0]
                      : n.checked),
                      i.default.setByKey(e.stateKey, t);
                  });
              }),
            e.text
              ? ((r = this.span = document.createElement("span")),
                r.classList.add("checkbox-caption"),
                Object(a._i18n)(r, e.text, e.textArgs))
              : t.classList.add("checkbox-without-caption"),
            t.append(n),
            e.toggle)
          ) {
            t.classList.add("checkbox-field-toggle");
            const e = document.createElement("div");
            e.classList.add("checkbox-toggle"), t.append(e);
          } else {
            const e = document.createElement("div");
            e.classList.add("checkbox-box");
            const n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            n.classList.add("checkbox-box-check"),
              n.setAttributeNS(null, "viewBox", "0 0 24 24");
            const i = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "use"
            );
            i.setAttributeNS(null, "href", "#check"),
              i.setAttributeNS(null, "x", "-1"),
              n.append(i);
            const s = document.createElement("div");
            s.classList.add("checkbox-box-background");
            const a = document.createElement("div");
            a.classList.add("checkbox-box-border"),
              e.append(a, s, n),
              t.append(e);
          }
          r && t.append(r),
            e.withRipple
              ? (t.classList.add("checkbox-ripple", "hover-effect"),
                Object(s.ripple)(t, void 0, void 0, !0))
              : e.withHover && t.classList.add("hover-effect");
        }
        get checked() {
          return this.input.checked;
        }
        set checked(e) {
          this.setValueSilently(e);
          const t = new Event("change", {
            bubbles: !0,
            cancelable: !0,
          });
          this.input.dispatchEvent(t);
        }
        setValueSilently(e) {
          this.input.checked = e;
        }
        toggleDisability(e) {
          return (
            this.label.classList.toggle("checkbox-disabled", e),
            () => this.toggleDisability(!e)
          );
        }
      }
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
        const d = () => {
          delete e.dataset.timeout,
            !n && t && e.classList.remove("backwards", t),
            e.classList.remove("animating"),
            o && o();
        };
        if (!i.default.settings.animationsEnabled || !a)
          return e.classList.remove("animating", "backwards"), void d();
        e.classList.add("animating"),
          e.classList.toggle("backwards", !n),
          (e.dataset.timeout = "" + setTimeout(d, a));
      };
      t.a = s;
    },
    55: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return (
          t
            ? e.forEach((e) => e.setAttribute("disabled", "true"))
            : e.forEach((e) => e.removeAttribute("disabled")),
          () => i(e, !t)
        );
      }
      n.d(t, "a", function () {
        return i;
      });
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
          {
            value: r,
            entities: o,
          }
        );
      }
      i.a.getRichValue = o;
    },
    61: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return e.closest(t);
      }
      n.d(t, "a", function () {
        return i;
      });
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
          link: {
            match: "A:not(.follow)",
            entityName: "messageEntityTextUrl",
          },
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
      function a(
        e,
        t,
        n,
        o,
        r,
        l,
        c = {
          offset: 0,
        }
      ) {
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
        const d = o === e,
          u = s.has(e.tagName);
        if (u && n.length)
          t.push(n.join("")), n.splice(0, n.length), ++c.offset;
        else if (e instanceof HTMLImageElement) {
          const t = e.alt;
          t && (n.push(t), (c.offset += t.length));
        }
        d && !r && n.push("");
        const h = e.matches('[style*="table-cell"], th, td'),
          p = null == l ? void 0 : l.length;
        let f = e.firstChild;
        for (; f; ) a(f, t, n, o, r, l, c), (f = f.nextSibling);
        if (
          (d && r && n.push(""),
          h && e.nextSibling && (n.push(" "), ++c.offset, void 0 !== p))
        )
          for (let e = p, t = l.length; e < t; ++e) ++l[e].length;
        const m = n.length;
        u && m && (t.push(n.join("")), n.splice(0, m), ++c.offset),
          m && "P" === e.tagName && e.nextSibling && (t.push(""), ++c.offset);
      }
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
    79: function (e, t, n) {
      "use strict";
      var i = n(30),
        s = n(75),
        a = n(32);
      const o = new (class {
        constructor() {
          (this.serverTimeOffset = 0),
            s.a.get("server_time_offset").then((e) => {
              e && (this.serverTimeOffset = e);
            }),
            a.a.addTaskListener("applyServerTimeOffset", (e) => {
              this.serverTimeOffset = e.payload;
            });
        }
      })();
      i.a && (i.a.serverTimeManager = o), (t.a = o);
    },
    89: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(1);
      function s(e, t = !1) {
        if (!i.IS_TOUCH_SUPPORTED || (t && document.activeElement === e))
          if (
            (e.focus(),
            void 0 !== window.getSelection && void 0 !== document.createRange)
          ) {
            var n = document.createRange();
            n.selectNodeContents(e), n.collapse(!1);
            var s = window.getSelection();
            s.removeAllRanges(), s.addRange(n);
          } else if (void 0 !== document.body.createTextRange) {
            var a = document.body.createTextRange();
            a.moveToElementText(e), a.collapse(!1), a.select();
          }
      }
    },
    94: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(16);
      const s = new Map();
      let a = 0;
      const o = (e, t, n = "") => {
        (n = t.country_code + n),
          (a = Math.max(a, n.length)),
          s.set(n, {
            country: e,
            code: t,
          });
      };
      function r(e) {
        (e = e || ""),
          s.size ||
            i.default.countriesList.forEach((e) => {
              e.country_codes.forEach((t) => {
                t.prefixes
                  ? t.prefixes.forEach((n) => {
                      o(e, t, n);
                    })
                  : o(e, t);
              });
            });
        let t,
          n = e.replace(/\D/g, ""),
          r = n.slice(0, a);
        for (
          let e = r.length - 1;
          e >= 0 && ((t = s.get(r.slice(0, e + 1))), !t);
          --e
        );
        if (!t)
          return {
            formatted: n,
            country: void 0,
            code: void 0,
            leftPattern: "",
          };
        const l = t.country,
          c = t.code.patterns || [],
          d = n.slice(t.code.country_code.length);
        let u = "",
          h = 0,
          p = "";
        for (let e = c.length - 1; e >= 0; --e) {
          u = c[e];
          const t = u.replace(/ /g, "");
          let n = 0;
          for (let e = 0, i = Math.min(d.length, t.length); e < i; ++e) {
            if (d[e] !== t[e] && "X" !== t[e]) {
              n = 0;
              break;
            }
            ++n;
          }
          n > h && ((h = n), (p = u));
        }
        (u = p || u),
          (u = u.replace(/\d/g, "X")),
          (u = t.code.country_code + " " + u),
          u.split("").forEach((e, t) => {
            " " === e &&
              " " !== n[t] &&
              n.length > t &&
              (n = n.slice(0, t) + " " + n.slice(t));
          });
        let f = u && u.length > n.length ? u.slice(n.length) : "";
        return (
          f && (f = f.replace(/X/g, "‒")),
          {
            formatted: n,
            country: l,
            code: t.code,
            leftPattern: f,
          }
        );
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
//# sourceMappingURL=13.be17671876522af09c51.chunk.js.map
