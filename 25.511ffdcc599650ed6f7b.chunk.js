(this.webpackJsonp = this.webpackJsonp || []).push([
  [25],
  {
    21: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(35),
        o = n(44),
        c = n(17),
        i = n(32),
        s = n(31),
        r = n(70),
        l = n(36),
        d = n(46),
        u = n(34),
        p = n(88),
        h = n(1),
        f = n(7),
        g = n(16),
        m = n(51),
        b = n(18),
        v = n(61),
        y = n(6),
        L = n(67),
        E = n(105),
        _ = n(114),
        O = n(20),
        j = n(108),
        w = n(5),
        k = n(29),
        S = n(33),
        x = n(55),
        T = n(75),
        C = n(89),
        N = n(97),
        P = n(82),
        I = n(91),
        M = n(15),
        A = n(123),
        D = n(10),
        B = function (e, t, n, a) {
          return new (n || (n = Promise))(function (o, c) {
            function i(e) {
              try {
                r(a.next(e));
              } catch (e) {
                c(e);
              }
            }
            function s(e) {
              try {
                r(a.throw(e));
              } catch (e) {
                c(e);
              }
            }
            function r(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, s);
            }
            r((a = a.apply(e, t || [])).next());
          });
        };
      let H,
        R = null;
      const U = new r.a(
        "page-sign",
        !0,
        () => {
          const e = () => {
            t = g.default.countriesList
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
            M.default.addEventListener("language_change", () => {
              e();
            });
          const r = new Map();
          let b, W;
          const X = document.createElement("div");
          X.classList.add("input-wrapper");
          const q = new l.b({
            label: "Login.CountrySelectorLabel",
            name: Object(L.b)(),
          });
          q.container.classList.add("input-select");
          const z = q.input,
            F = document.createElement("div");
          F.classList.add("select-wrapper", "z-depth-3", "hide");
          const J = document.createElement("span");
          J.classList.add("arrow", "arrow-down"), q.container.append(J);
          const K = document.createElement("ul");
          F.appendChild(K);
          new o.b(F);
          let V = () => {
            (V = null),
              t.forEach((e) => {
                const t = Object(N.c)(e.iso2),
                  n = [];
                e.country_codes.forEach((a) => {
                  const o = document.createElement("li");
                  let c = s.a.wrapEmojiText(t);
                  if (D.a) {
                    const e = document.createElement("span");
                    (e.innerHTML = c), o.append(e);
                  } else o.innerHTML = c;
                  const i = Object(g.i18n)(e.default_name);
                  (i.dataset.defaultName = e.default_name), o.append(i);
                  const r = document.createElement("span");
                  r.classList.add("phone-code"),
                    (r.innerText = "+" + a.country_code),
                    o.appendChild(r),
                    n.push(o),
                    K.append(o);
                }),
                  r.set(e.iso2, n);
              }),
              K.addEventListener("mousedown", (e) => {
                if (0 !== e.button) return;
                const t = Object(v.a)(e.target, "LI");
                Q(t);
              }),
              q.container.appendChild(F);
          };
          const Q = (e) => {
            const n = e.childNodes[1].dataset.defaultName,
              a = e.querySelector(".phone-code").innerText,
              o = a.replace(/\D/g, "");
            Object(S.a)(z, Object(g.i18n)(n)),
              Object(P.a)(z, "input"),
              (b = t.find((e) => e.default_name === n)),
              (W = b.country_codes.find((e) => e.country_code === o)),
              (ee.value = ee.lastValue = a),
              Z(),
              setTimeout(() => {
                te.focus(), Object(C.a)(te, !0);
              }, 0);
          };
          let $;
          V(),
            z.addEventListener("focus", function (e) {
              V
                ? V()
                : t.forEach((e) => {
                    r.get(e.iso2).forEach((e) => (e.style.display = ""));
                  }),
                clearTimeout($),
                ($ = void 0),
                F.classList.remove("hide"),
                F.offsetWidth,
                F.classList.add("active"),
                q.select(),
                Object(p.b)({
                  container: U.pageEl.parentElement.parentElement,
                  element: z,
                  position: "start",
                  margin: 4,
                }),
                setTimeout(() => {
                  G ||
                    (document.addEventListener("mousedown", Y, { capture: !0 }),
                    (G = !0));
                }, 0);
            });
          let G = !1;
          const Y = (e) => {
              Object(y.a)(e.target, "input-select") ||
                (e.target !== z &&
                  (Z(),
                  document.removeEventListener("mousedown", Y, { capture: !0 }),
                  (G = !1)));
            },
            Z = () => {
              void 0 === $ &&
                (F.classList.remove("active"),
                ($ = window.setTimeout(() => {
                  F.classList.add("hide"), ($ = void 0);
                }, 200)));
            };
          z.addEventListener("keyup", (e) => {
            const n = e.key;
            if (e.ctrlKey || "Control" === n) return !1;
            let a = q.value.toLowerCase(),
              o = [];
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
                .find((e) => -1 !== e.toLowerCase().indexOf(a));
              r.get(e.iso2).forEach((e) => (e.style.display = n ? "" : "none")),
                n && o.push(e);
            }),
              0 === o.length
                ? t.forEach((e) => {
                    r.get(e.iso2).forEach((e) => (e.style.display = ""));
                  })
                : 1 === o.length && "Enter" === n && Q(r.get(o[0].iso2)[0]);
          }),
            J.addEventListener("mousedown", function (e) {
              (e.cancelBubble = !0),
                e.preventDefault(),
                z.matches(":focus") ? z.blur() : z.focus();
            });
          const ee = new A.a({
              onInput: (e) => {
                m.a.loadLottieWorkers();
                const { country: t, code: n } = e || {};
                let a = t ? t.name || t.default_name : "";
                a === q.value ||
                  (b &&
                    t &&
                    n &&
                    (b === t || W.country_code === n.country_code)) ||
                  (Object(S.a)(z, t ? Object(g.i18n)(t.default_name) : a),
                  (b = t),
                  (W = n)),
                  t || ee.value.length - 1 > 1
                    ? (R.style.visibility = "")
                    : (R.style.visibility = "hidden");
              },
            }),
            te = ee.input;
          te.addEventListener("keypress", (e) => {
            if (!R.style.visibility && "Enter" === e.key) return ae();
          });
          const ne = new d.a({
            text: "Login.KeepSigned",
            name: "keepSession",
            withRipple: !0,
            checked: !0,
          });
          ne.input.addEventListener("change", () => {
            const e = ne.checked;
            c.default.pushToState("keepSigned", e),
              E.a.toggleStorage(e),
              _.a.toggleStorage(e),
              i.a.toggleStorage(e),
              T.a.toggleStorage(e);
          }),
            c.default.getState().then((e) => {
              c.default.storage.isAvailable()
                ? (ne.checked = e.keepSigned)
                : ((ne.checked = !1),
                  ne.label.classList.add("checkbox-disabled"));
            }),
            (R = Object(u.a)("btn-primary btn-color-primary", {
              text: "Login.Next",
            })),
            (R.style.visibility = "hidden");
          const ae = (e) => {
            e && Object(w.a)(e);
            const t = Object(x.a)([R, H], !0);
            Object(S.a)(R, Object(g.i18n)("PleaseWait")), Object(a.f)(R);
            let o = ee.value;
            i.a
              .invokeApi("auth.sendCode", {
                phone_number: o,
                api_id: f.a.id,
                api_hash: f.a.hash,
                settings: { _: "codeSettings" },
              })
              .then((e) => {
                n.e(23)
                  .then(n.bind(null, 22))
                  .then((t) =>
                    t.default.mount(Object.assign(e, { phone_number: o }))
                  );
              })
              .catch((e) => {
                switch ((t(), e.type)) {
                  case "PHONE_NUMBER_INVALID":
                    ee.setError(),
                      Object(S.a)(
                        ee.label,
                        Object(g.i18n)("Login.PhoneLabelInvalid")
                      ),
                      te.classList.add("error"),
                      Object(S.a)(R, Object(g.i18n)("Login.Next"));
                    break;
                  default:
                    console.error("auth.sendCode error:", e),
                      (R.innerText = e.type);
                }
              });
          };
          Object(k.b)(R, ae),
            (H = Object(u.a)(
              "btn-primary btn-secondary btn-primary-transparent primary",
              { text: "Login.QR.Login" }
            ));
          H.addEventListener("click", () => {
            O.default.mount();
          }),
            X.append(q.container, ee.container, ne.label, R, H);
          const oe = document.createElement("h4");
          oe.classList.add("text-center"), Object(g._i18n)(oe, "Login.Title");
          const ce = document.createElement("div");
          ce.classList.add("subtitle", "text-center"),
            Object(g._i18n)(ce, "Login.StartText"),
            U.pageEl.querySelector(".container").append(oe, ce, X);
          h.IS_TOUCH_SUPPORTED ||
            setTimeout(() => {
              te.focus();
            }, 0),
            Object(j.a)(X),
            i.a
              .invokeApi("help.getNearestDc")
              .then((e) => {
                var t;
                const n = I.a.getFromCache("langPack");
                n &&
                  !(null === (t = n.countries) || void 0 === t
                    ? void 0
                    : t.hash) &&
                  g.default.getLangPack(n.lang_code).then(() => {
                    Object(P.a)(te, "input");
                  });
                const a = new Set([1, 2, 3, 4, 5]),
                  o = [e.this_dc];
                let c;
                return (
                  e.nearest_dc !== e.this_dc &&
                    (c = i.a.getNetworker(e.nearest_dc).then(() => {
                      o.push(e.nearest_dc);
                    })),
                  (c || Promise.resolve()).then(() => {
                    o.forEach((e) => {
                      a.delete(e);
                    });
                    const e = [...a],
                      t = () =>
                        B(void 0, void 0, void 0, function* () {
                          const n = e.shift();
                          if (!n) return;
                          const a = `dc${n}_auth_key`;
                          if (yield T.a.get(a)) return t();
                          setTimeout(() => {
                            i.a.getNetworker(n).finally(t);
                          }, 3e3);
                        });
                    t();
                  }),
                  e
                );
              })
              .then((e) => {
                q.value.length || ee.value.length || Q(r.get(e.country)[0]);
              });
        },
        () => {
          R &&
            (Object(S.a)(R, Object(g.i18n)("Login.Next")),
            Object(b.ripple)(R, void 0, void 0, !0),
            R.removeAttribute("disabled")),
            H && H.removeAttribute("disabled"),
            c.default.pushToState("authState", { _: "authStateSignIn" });
        }
      );
      t.default = U;
    },
    94: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(16);
      const o = new Map();
      let c = 0;
      const i = (e, t, n = "") => {
        (n = t.country_code + n),
          (c = Math.max(c, n.length)),
          o.set(n, { country: e, code: t });
      };
      function s(e) {
        (e = e || ""),
          o.size ||
            a.default.countriesList.forEach((e) => {
              e.country_codes.forEach((t) => {
                t.prefixes
                  ? t.prefixes.forEach((n) => {
                      i(e, t, n);
                    })
                  : i(e, t);
              });
            });
        let t,
          n = e.replace(/\D/g, ""),
          s = n.slice(0, c);
        for (
          let e = s.length - 1;
          e >= 0 && ((t = o.get(s.slice(0, e + 1))), !t);
          --e
        );
        if (!t)
          return {
            formatted: n,
            country: void 0,
            code: void 0,
            leftPattern: "",
          };
        const r = t.country,
          l = t.code.patterns || [],
          d = n.slice(t.code.country_code.length);
        let u = "",
          p = 0,
          h = "";
        for (let e = l.length - 1; e >= 0; --e) {
          u = l[e];
          const t = u.replace(/ /g, "");
          let n = 0;
          for (let e = 0, a = Math.min(d.length, t.length); e < a; ++e) {
            if (d[e] !== t[e] && "X" !== t[e]) {
              n = 0;
              break;
            }
            ++n;
          }
          n > p && ((p = n), (h = u));
        }
        (u = h || u),
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
          f && (f = f.replace(/X/g, "â€’")),
          { formatted: n, country: r, code: t.code, leftPattern: f }
        );
      }
    },
  },
]);
//# sourceMappingURL=25.511ffdcc599650ed6f7b.chunk.js.map
