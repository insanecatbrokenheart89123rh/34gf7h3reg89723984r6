(this.webpackJsonp = this.webpackJsonp || []).push([
  [19],
  {
    100: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      var s = i(16);
      class n {
        constructor(t) {
          (this.element = document.body.querySelector("." + t.className)),
            (this.container = document.createElement("div")),
            (this.container.className = "container center-align"),
            (this.imageDiv = document.createElement("div")),
            (this.imageDiv.className = "auth-image"),
            (this.title = document.createElement("h4")),
            t.titleLangKey && this.title.append(Object(s.i18n)(t.titleLangKey)),
            (this.subtitle = document.createElement("p")),
            (this.subtitle.className = "subtitle"),
            t.subtitleLangKey &&
              this.subtitle.append(Object(s.i18n)(t.subtitleLangKey)),
            this.container.append(this.imageDiv, this.title, this.subtitle),
            t.withInputWrapper &&
              ((this.inputWrapper = document.createElement("div")),
              (this.inputWrapper.className = "input-wrapper"),
              this.container.append(this.inputWrapper)),
            this.element.append(this.container);
        }
      }
    },
    101: function (t, e, i) {
      "use strict";
      function s(t) {
        const e = document.createElement("span");
        return (e.innerHTML = t), e;
      }
      i.d(e, "a", function () {
        return s;
      });
    },
    109: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return a;
      });
      var s = i(5),
        n = i(36);
      class a extends n.b {
        constructor(t = {}) {
          super(Object.assign({ plainText: !0 }, t)),
            (this.passwordVisible = !1),
            (this.onVisibilityClick = (t) => {
              Object(s.a)(t),
                (this.passwordVisible = !this.passwordVisible),
                this.toggleVisible.classList.toggle(
                  "eye-hidden",
                  this.passwordVisible
                ),
                (this.input.type = this.passwordVisible ? "text" : "password"),
                this.onVisibilityClickAdditional &&
                  this.onVisibilityClickAdditional();
            });
          const e = this.input;
          (e.type = "password"),
            e.setAttribute("required", ""),
            (e.name = "notsearch_password"),
            (e.autocomplete = "off");
          const i = document.createElement("input");
          i.classList.add("stealthy"),
            (i.tabIndex = -1),
            (i.type = "password"),
            e.parentElement.prepend(i),
            e.parentElement.insertBefore(i.cloneNode(), e.nextSibling);
          const n = (this.toggleVisible = document.createElement("span"));
          n.classList.add("toggle-visible", "tgico"),
            this.container.classList.add("input-field-password"),
            this.container.append(n),
            n.addEventListener("click", this.onVisibilityClick),
            n.addEventListener("touchend", this.onVisibilityClick);
        }
      }
    },
    119: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      var s = i(51);
      class n {
        constructor(t, e) {
          (this.passwordInputField = t),
            (this.size = e),
            (this.needFrame = 0),
            (this.container = document.createElement("div")),
            this.container.classList.add("media-sticker-wrapper");
        }
        load() {
          return this.loadPromise
            ? this.loadPromise
            : (this.loadPromise = s.a
                .loadAnimationAsAsset(
                  {
                    container: this.container,
                    loop: !1,
                    autoplay: !1,
                    width: this.size,
                    height: this.size,
                    noCache: !0,
                  },
                  "TwoFactorSetupMonkeyPeek"
                )
                .then(
                  (t) => (
                    (this.animation = t),
                    this.animation.addEventListener("enterFrame", (t) => {
                      ((1 === this.animation.direction &&
                        t >= this.needFrame) ||
                        (-1 === this.animation.direction &&
                          t <= this.needFrame)) &&
                        (this.animation.setSpeed(1), this.animation.pause());
                    }),
                    (this.passwordInputField.onVisibilityClickAdditional =
                      () => {
                        this.passwordInputField.passwordVisible
                          ? (this.animation.setDirection(1),
                            (this.animation.curFrame = 0),
                            (this.needFrame = 16),
                            this.animation.play())
                          : (this.animation.setDirection(-1),
                            (this.animation.curFrame = 16),
                            (this.needFrame = 0),
                            this.animation.play());
                      }),
                    s.a.waitForFirstFrame(t)
                  )
                ));
        }
        remove() {
          this.animation && this.animation.remove();
        }
      }
    },
    23: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(35),
        n = i(38),
        a = i(17),
        r = i(90),
        o = i(70),
        c = i(34),
        l = i(109),
        d = i(119),
        u = i(31),
        p = i(16),
        h = i(100),
        m = i(5),
        w = i(29),
        b = i(101),
        g = i(33),
        y = i(55);
      let v;
      const k = new o.a(
        "page-password",
        !0,
        () => {
          const t = new h.a({
              className: "page-password",
              withInputWrapper: !0,
              titleLangKey: "Login.Password.Title",
              subtitleLangKey: "Login.Password.Subtitle",
            }),
            e = Object(c.a)("btn-primary btn-color-primary"),
            a = new p.default.IntlElement({ key: "Login.Next" });
          e.append(a.element);
          const o = new l.a({ label: "LoginPassword", name: "password" });
          let k;
          (v = o.input), t.inputWrapper.append(o.container, e);
          let P,
            f = () => (
              k || (k = window.setInterval(f, 1e4)),
              r.a.getState().then((t) => {
                (P = t),
                  P.hint
                    ? Object(g.a)(
                        o.label,
                        Object(b.a)(u.b.wrapEmojiText(P.hint))
                      )
                    : o.setLabel();
              })
            );
          const E = (t) => {
            if ((t && Object(m.a)(t), !v.value.length))
              return void v.classList.add("error");
            const n = Object(y.a)([v, e], !0);
            let c = v.value;
            a.update({ key: "PleaseWait" });
            const l = Object(s.f)(e);
            o.setValueSilently("" + Math.random()),
              o.setValueSilently(c),
              r.a
                .check(c, P)
                .then((t) => {
                  switch (t._) {
                    case "auth.authorization":
                      clearInterval(k),
                        i
                          .e(4)
                          .then(i.bind(null, 19))
                          .then((t) => {
                            t.default.mount();
                          }),
                        S && S.remove();
                      break;
                    default:
                      e.removeAttribute("disabled"),
                        a.update({ key: t._ }),
                        l.remove();
                  }
                })
                .catch((t) => {
                  n(),
                    o.input.classList.add("error"),
                    t.type,
                    a.update({ key: "PASSWORD_HASH_INVALID" }),
                    v.select(),
                    l.remove(),
                    f();
                });
          };
          Object(w.b)(e, E),
            v.addEventListener("keypress", function (t) {
              if (
                (this.classList.remove("error"),
                a.update({ key: "Login.Next" }),
                "Enter" === t.key)
              )
                return E();
            });
          const L = n.b.isMobile ? 100 : 166,
            S = new d.a(o, L);
          return t.imageDiv.append(S.container), Promise.all([S.load(), f()]);
        },
        null,
        () => {
          v.focus(),
            a.default.pushToState("authState", { _: "authStatePassword" });
        }
      );
      e.default = k;
    },
    90: function (t, e, i) {
      "use strict";
      var s = i(30),
        n = i(32);
      const a = new (class {
        getState() {
          return n.a.invokeApi("account.getPassword").then((t) => t);
        }
        updateSettings(t = {}) {
          return this.getState().then((e) => {
            let i, s;
            const a = {
              password: null,
              new_settings: {
                _: "account.passwordInputSettings",
                hint: t.hint,
                email: t.email,
              },
            };
            i = t.currentPassword
              ? n.a.invokeCrypto("computeSRP", t.currentPassword, e, !1)
              : Promise.resolve({ _: "inputCheckPasswordEmpty" });
            const r = e.new_algo,
              o = new Uint8Array(r.salt1.length + 32);
            return (
              (function (t) {
                if (!crypto || !("getRandomValues" in crypto))
                  throw new Error("NO_SECURE_RANDOM");
                crypto.getRandomValues(t);
              })(o),
              o.set(r.salt1, 0),
              (r.salt1 = o),
              (s = t.newPassword
                ? n.a.invokeCrypto("computeSRP", t.newPassword, e, !0)
                : Promise.resolve(new Uint8Array())),
              Promise.all([i, s]).then(
                (t) => (
                  (a.password = t[0]),
                  (a.new_settings.new_algo = r),
                  (a.new_settings.new_password_hash = t[1]),
                  n.a.invokeApi("account.updatePasswordSettings", a)
                )
              )
            );
          });
        }
        check(t, e, i = {}) {
          return n.a
            .invokeCrypto("computeSRP", t, e, !1)
            .then((t) =>
              n.a
                .invokeApi("auth.checkPassword", { password: t }, i)
                .then(
                  (t) => (
                    "auth.authorization" === t._ && n.a.setUser(t.user), t
                  )
                )
            );
        }
        confirmPasswordEmail(t) {
          return n.a.invokeApi("account.confirmPasswordEmail", { code: t });
        }
        resendPasswordEmail() {
          return n.a.invokeApi("account.resendPasswordEmail");
        }
        cancelPasswordEmail() {
          return n.a.invokeApi("account.cancelPasswordEmail");
        }
      })();
      s.a.passwordManager = a;
      e.a = a;
    },
  },
]);
//# sourceMappingURL=19.993d7e5357e9cbe12993.chunk.js.map
