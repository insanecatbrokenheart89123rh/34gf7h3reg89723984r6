(this.webpackJsonp = this.webpackJsonp || []).push([
  [23],
  {
    132: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(51);
      class a {
        constructor(e, t) {
          (this.inputField = e),
            (this.size = t),
            (this.max = 45),
            (this.needFrame = 0),
            (this.container = document.createElement("div")),
            this.container.classList.add("media-sticker-wrapper");
          const n = e.input;
          n.addEventListener("blur", () => {
            this.playAnimation(0);
          }),
            n.addEventListener("input", (t) => {
              this.playAnimation(e.value.length);
            });
        }
        playAnimation(e) {
          if (!this.animation) return;
          let t;
          (e = Math.min(e, 30))
            ? ((t = Math.round(
                Math.min(this.max, e) * (165 / this.max) + 11.33
              )),
              this.idleAnimation &&
                (this.idleAnimation.stop(!0),
                (this.idleAnimation.canvas.style.display = "none")),
              (this.animation.canvas.style.display = ""))
            : (t = 0);
          const n = this.needFrame > t ? -1 : 1;
          this.animation.setDirection(n),
            0 !== this.needFrame && 0 === t && this.animation.setSpeed(7),
            (this.needFrame = t),
            this.animation.play();
        }
        load() {
          return this.loadPromise
            ? this.loadPromise
            : (this.loadPromise = Promise.all([
                i.a
                  .loadAnimationAsAsset(
                    {
                      container: this.container,
                      loop: !0,
                      autoplay: !0,
                      width: this.size,
                      height: this.size,
                    },
                    "TwoFactorSetupMonkeyIdle"
                  )
                  .then(
                    (e) => (
                      (this.idleAnimation = e),
                      this.inputField.value.length || e.play(),
                      i.a.waitForFirstFrame(e)
                    )
                  ),
                i.a
                  .loadAnimationAsAsset(
                    {
                      container: this.container,
                      loop: !1,
                      autoplay: !1,
                      width: this.size,
                      height: this.size,
                    },
                    "TwoFactorSetupMonkeyTracking"
                  )
                  .then(
                    (e) => (
                      (this.animation = e),
                      this.inputField.value.length ||
                        (this.animation.canvas.style.display = "none"),
                      this.animation.addEventListener("enterFrame", (e) => {
                        ((1 === this.animation.direction &&
                          e >= this.needFrame) ||
                          (-1 === this.animation.direction &&
                            e <= this.needFrame)) &&
                          (this.animation.setSpeed(1), this.animation.pause()),
                          0 === e &&
                            0 === this.needFrame &&
                            this.idleAnimation &&
                            ((this.idleAnimation.canvas.style.display = ""),
                            this.idleAnimation.play(),
                            (this.animation.canvas.style.display = "none"));
                      }),
                      i.a.waitForFirstFrame(e)
                    )
                  ),
              ]));
        }
        remove() {
          this.animation && this.animation.remove(),
            this.idleAnimation && this.idleAnimation.remove();
        }
      }
    },
    133: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(36);
      class a extends i.b {
        constructor(e) {
          super(Object.assign({ plainText: !0 }, e));
          const t = this.input;
          (t.type = "tel"),
            t.setAttribute("required", ""),
            (t.autocomplete = "off");
          let n = 0;
          this.input.addEventListener("input", (t) => {
            this.input.classList.remove("error"), this.setLabel();
            const i = this.value.replace(/\D/g, "").slice(0, e.length);
            this.setValueSilently(i);
            const a = this.value.length;
            if (a === e.length) e.onFill(this.value);
            else if (a === n) return;
            n = a;
          });
        }
      }
    },
    22: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(38),
        a = n(17),
        s = n(32),
        o = n(70),
        l = n(21),
        r = n(132),
        h = n(133),
        u = n(16),
        d = n(67),
        c = n(33),
        p = function (e, t, n, i) {
          return new (n || (n = Promise))(function (a, s) {
            function o(e) {
              try {
                r(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              try {
                r(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function r(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, l);
            }
            r((i = i.apply(e, t || [])).next());
          });
        };
      let m,
        y = null,
        b = null,
        v = null;
      const E = new o.a(
        "page-authCode",
        !0,
        () => {
          const e = y.type.length,
            t = new h.a({
              label: "Code",
              name: Object(d.b)(),
              length: e,
              onFill: (e) => {
                o(e);
              },
            });
          (m = t.input),
            E.pageEl.querySelector(".input-wrapper").append(t.container);
          E.pageEl
            .querySelector(".phone-edit")
            .addEventListener("click", function () {
              return l.default.mount();
            });
          const a = () => {
              setTimeout(() => {
                _.remove();
              }, 300);
            },
            o = (e) => {
              m.setAttribute("disabled", "true");
              const i = {
                phone_number: y.phone_number,
                phone_code_hash: y.phone_code_hash,
                phone_code: e,
              };
              s.a
                .invokeApi("auth.signIn", i, { ignoreErrors: !0 })
                .then((e) => {
                  switch (e._) {
                    case "auth.authorization":
                      s.a.setUser(e.user),
                        n
                          .e(4)
                          .then(n.bind(null, 19))
                          .then((e) => {
                            e.default.mount();
                          }),
                        a();
                      break;
                    case "auth.authorizationSignUpRequired":
                      Promise.all([n.e(7), n.e(26)])
                        .then(n.bind(null, 25))
                        .then((e) => {
                          e.default.mount({
                            phone_number: y.phone_number,
                            phone_code_hash: y.phone_code_hash,
                          });
                        }),
                        a();
                  }
                })
                .catch((e) =>
                  p(void 0, void 0, void 0, function* () {
                    let i = !1;
                    switch (e.type) {
                      case "SESSION_PASSWORD_NEEDED":
                        (i = !0),
                          (e.handled = !0),
                          yield (yield n
                            .e(19)
                            .then(n.bind(null, 23))).default.mount(),
                          setTimeout(() => {
                            m.value = "";
                          }, 300);
                        break;
                      case "PHONE_CODE_EXPIRED":
                        m.classList.add("error"),
                          Object(c.a)(
                            t.label,
                            Object(u.i18n)("PHONE_CODE_EXPIRED")
                          );
                        break;
                      case "PHONE_CODE_EMPTY":
                      case "PHONE_CODE_INVALID":
                        m.classList.add("error"),
                          Object(c.a)(
                            t.label,
                            Object(u.i18n)("PHONE_CODE_INVALID")
                          );
                        break;
                      default:
                        t.label.innerText = e.type;
                    }
                    i || t.select(), m.removeAttribute("disabled");
                  })
                );
            },
            b = E.pageEl.querySelector(".auth-image"),
            v = i.b.isMobile ? 100 : 166,
            _ = new r.a(t, v);
          return b.append(_.container), _.load();
        },
        (e) => {
          if (((y = e), b)) {
            m.value = "";
            const e = document.createEvent("HTMLEvents");
            e.initEvent("input", !1, !0), m.dispatchEvent(e);
          } else
            (b = E.pageEl.getElementsByClassName("phone")[0]),
              (v = E.pageEl.getElementsByClassName("sent-type")[0]);
          let t, n;
          switch (((b.innerText = y.phone_number), y.type._)) {
            case "auth.sentCodeTypeSms":
              t = "Login.Code.SentSms";
              break;
            case "auth.sentCodeTypeApp":
              t = "Login.Code.SentInApp";
              break;
            case "auth.sentCodeTypeCall":
              t = "Login.Code.SentCall";
              break;
            default:
              (t = "Login.Code.SentUnknown"), (n = [y.type._]);
          }
          Object(c.a)(v, Object(u.i18n)(t, n)),
            a.default.pushToState("authState", {
              _: "authStateAuthCode",
              sentCode: e,
            });
        },
        () => {
          m.focus();
        }
      );
      t.default = E;
    },
  },
]);
//# sourceMappingURL=23.d52d4b270d13e4bb8a17.chunk.js.map
