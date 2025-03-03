(this.webpackJsonp = this.webpackJsonp || []).push([
  [21],
  {
    108: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n(5),
        r = n(29),
        i = n(9),
        o = n(16),
        s = n(32),
        c = n(15),
        l = n(34),
        d = n(35);
      let u,
        g = !1;
      function f(e) {
        g ||
          (
            u ||
            (u = s.a
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
            const s = [];
            n.forEach((e) => {
              const t = o.default.strings.get(e.key);
              t && (s.push(t), o.default.strings.set(e.key, e));
            });
            const u = Object(l.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              { text: "Login.ContinueOnLanguage" }
            );
            u.lastElementChild.classList.remove("i18n"),
              Object(i.a)().then(() => {
                window.requestAnimationFrame(() => {
                  e.append(u);
                });
              }),
              c.default.addEventListener(
                "language_change",
                () => {
                  u.remove();
                },
                { once: !0 }
              ),
              s.forEach((e) => {
                o.default.strings.set(e.key, e);
              }),
              Object(r.b)(u, (e) => {
                Object(a.a)(e),
                  (g = !0),
                  (u.disabled = !0),
                  Object(d.f)(u),
                  o.default.getLangPack(t.suggested_lang_code);
              });
          });
      }
    },
    117: function (e, t, n) {
      "use strict";
      function a(e, t) {
        return t
          ? e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
          : e.replace(/-/g, "+").replace(/_/g, "/");
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    118: function (e, t, n) {
      "use strict";
      function a(e, t) {
        const n = e.length;
        if (n !== t.length) return !1;
        for (let a = 0; a < n; ++a) if (e[a] !== t[a]) return !1;
        return !0;
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    20: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(32),
        r = n(70),
        i = n(79),
        o = n(7),
        s = n(34),
        c = n(16),
        l = n(17),
        d = n(15),
        u = n(35),
        g = n(108),
        f = n(81),
        p = n(117),
        m = n(118);
      function h(e) {
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
      var y = function (e, t, n, a) {
        return new (n || (n = Promise))(function (r, i) {
          function o(e) {
            try {
              c(a.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(a.throw(e));
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
                    })).then(o, s);
          }
          c((a = a.apply(e, t || [])).next());
        });
      };
      let v,
        b = () =>
          y(void 0, void 0, void 0, function* () {
            const e = w.pageEl.querySelector(".auth-image");
            let t = Object(u.f)(e, !0);
            const r = document.createElement("div");
            r.classList.add("input-wrapper");
            const l = Object(s.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              { text: "Login.QR.Cancel" }
            );
            r.append(l), Object(g.a)(r);
            const b = e.parentElement,
              O = document.createElement("h4");
            Object(c._i18n)(O, "Login.QR.Title");
            const _ = document.createElement("ol");
            _.classList.add("qr-description"),
              ["Login.QR.Help1", "Login.QR.Help2", "Login.QR.Help3"].forEach(
                (e) => {
                  const t = document.createElement("li");
                  t.append(Object(c.i18n)(e)), _.append(t);
                }
              ),
              b.append(O, _, r),
              l.addEventListener("click", () => {
                Promise.all([n.e(6), n.e(25)])
                  .then(n.bind(null, 21))
                  .then((e) => e.default.mount()),
                  (L = !0);
              });
            const E = (yield Promise.all([
              n.e(11).then(n.t.bind(null, 200, 7)),
            ]))[0].default;
            let L = !1;
            d.default.addEventListener(
              "user_auth",
              () => {
                (L = !0), (v = null);
              },
              { once: !0 }
            );
            let k,
              S = { ignoreErrors: !0 };
            const P = (r) =>
              y(void 0, void 0, void 0, function* () {
                try {
                  let s = yield a.a.invokeApi(
                    "auth.exportLoginToken",
                    { api_id: o.a.id, api_hash: o.a.hash, except_ids: [] },
                    { ignoreErrors: !0 }
                  );
                  if (
                    ("auth.loginTokenMigrateTo" === s._ &&
                      (S.dcId || ((S.dcId = s.dc_id), a.a.setBaseDcId(s.dc_id)),
                      (s = yield a.a.invokeApi(
                        "auth.importLoginToken",
                        { token: s.token },
                        S
                      ))),
                    "auth.loginTokenSuccess" === s._)
                  ) {
                    const e = s.authorization;
                    return (
                      a.a.setUser(e.user),
                      n
                        .e(4)
                        .then(n.bind(null, 19))
                        .then((e) => e.default.mount()),
                      !0
                    );
                  }
                  if (!k || !Object(m.a)(k, s.token)) {
                    k = s.token;
                    let n = (function (e) {
                        let t,
                          n = "";
                        for (let a = e.length, r = 0, i = 0; i < a; ++i)
                          (t = i % 3),
                            (r |= e[i] << ((16 >>> t) & 24)),
                            (2 !== t && a - i != 1) ||
                              ((n += String.fromCharCode(
                                h((r >>> 18) & 63),
                                h((r >>> 12) & 63),
                                h((r >>> 6) & 63),
                                h(63 & r)
                              )),
                              (r = 0));
                        return n.replace(/A(?=A$|$)/g, "=");
                      })(s.token),
                      a = "tg://login?token=" + Object(p.a)(n, !0);
                    const r = window.getComputedStyle(document.documentElement),
                      i = r.getPropertyValue("--surface-color").trim(),
                      o = r.getPropertyValue("--primary-text-color").trim(),
                      c = r.getPropertyValue("--primary-color").trim(),
                      l = yield fetch("assets/img/logo_padded.svg")
                        .then((e) => e.text())
                        .then((e) => {
                          e = e.replace(/(fill:).+?(;)/, `$1${c}$2`);
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
                      d = new E({
                        width: 240 * window.devicePixelRatio,
                        height: 240 * window.devicePixelRatio,
                        data: a,
                        image: l,
                        dotsOptions: { color: o, type: "rounded" },
                        cornersSquareOptions: { type: "extra-rounded" },
                        imageOptions: { imageSize: 1, margin: 0 },
                        backgroundOptions: { color: i },
                        qrOptions: { errorCorrectionLevel: "L" },
                      });
                    let u;
                    d.append(e),
                      e.lastChild.classList.add("qr-canvas"),
                      (u = d._drawingPromise
                        ? d._drawingPromise
                        : Promise.race([
                            Object(f.a)(1e3),
                            new Promise((e) => {
                              d._canvas._image.addEventListener(
                                "load",
                                () => {
                                  window.requestAnimationFrame(() => e());
                                },
                                { once: !0 }
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
                  if (r) {
                    let e = Date.now() / 1e3,
                      t = s.expires - e - i.a.serverTimeOffset;
                    yield Object(f.a)(t > 3 ? 3e3 : (1e3 * t) | 0);
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
                        (L = !0),
                        (v = null);
                      break;
                    default:
                      console.error("pageSignQR: default error:", e), (L = !0);
                  }
                  return !0;
                }
                return !1;
              });
            return () =>
              y(void 0, void 0, void 0, function* () {
                for (L = !1; ; ) {
                  if (L) break;
                  if (yield P(!0)) break;
                }
              });
          });
      const w = new r.a(
        "page-signQR",
        !0,
        () => v,
        () => {
          v || (v = b()),
            v.then((e) => {
              e();
            }),
            l.default.pushToState("authState", { _: "authStateSignQr" });
        }
      );
      t.default = w;
    },
    79: function (e, t, n) {
      "use strict";
      var a = n(30),
        r = n(75),
        i = n(32);
      const o = new (class {
        constructor() {
          (this.serverTimeOffset = 0),
            r.a.get("server_time_offset").then((e) => {
              e && (this.serverTimeOffset = e);
            }),
            i.a.addTaskListener("applyServerTimeOffset", (e) => {
              this.serverTimeOffset = e.payload;
            });
        }
      })();
      a.a && (a.a.serverTimeManager = o), (t.a = o);
    },
  },
]);
//# sourceMappingURL=21.49b949da4f2493f6b111.chunk.js.map
