(this.webpackJsonp = this.webpackJsonp || []).push([
  [26],
  {
    100: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var n = a(16);
      class i {
        constructor(e) {
          (this.element = document.body.querySelector("." + e.className)),
            (this.container = document.createElement("div")),
            (this.container.className = "container center-align"),
            (this.imageDiv = document.createElement("div")),
            (this.imageDiv.className = "auth-image"),
            (this.title = document.createElement("h4")),
            e.titleLangKey && this.title.append(Object(n.i18n)(e.titleLangKey)),
            (this.subtitle = document.createElement("p")),
            (this.subtitle.className = "subtitle"),
            e.subtitleLangKey &&
              this.subtitle.append(Object(n.i18n)(e.subtitleLangKey)),
            this.container.append(this.imageDiv, this.title, this.subtitle),
            e.withInputWrapper &&
              ((this.inputWrapper = document.createElement("div")),
              (this.inputWrapper.className = "input-wrapper"),
              this.container.append(this.inputWrapper)),
            this.element.append(this.container);
        }
      }
    },
    25: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(34),
        i = a(36),
        s = a(35),
        r = a(138),
        c = a(17),
        l = a(16),
        u = a(32),
        o = a(31),
        p = a(100),
        d = a(70),
        m = a(8),
        h = a(33);
      let b = null;
      const v = new d.a(
        "page-signUp",
        !0,
        () =>
          a
            .e(5)
            .then(a.bind(null, 60))
            .then((e) => {
              const t = new p.a({
                className: "page-signUp",
                withInputWrapper: !0,
                titleLangKey: "YourName",
                subtitleLangKey: "Login.Register.Subtitle",
              });
              t.imageDiv.classList.add("avatar-edit"),
                t.title.classList.add("fullName");
              const c = document.createElement("canvas");
              (c.id = "canvas-avatar"), (c.className = "avatar-edit-canvas");
              const d = document.createElement("span");
              (d.className = "tgico tgico-cameraadd"), t.imageDiv.append(c, d);
              const v = e.default;
              let g;
              t.imageDiv.addEventListener("click", () => {
                new r.a().open(c, (e) => {
                  g = e;
                });
              });
              const L = (e) => {
                const a = f.value || "",
                  n = w.value || "",
                  i = a || n ? (a + " " + n).trim() : "";
                i
                  ? Object(h.a)(t.title, o.b.wrapEmojiText(i))
                  : Object(h.a)(t.title, Object(l.i18n)("YourName"));
              };
              const f = new i.b({ label: "FirstName", maxLength: 70 }),
                w = new i.b({ label: "LastName", maxLength: 64 }),
                y = Object(n.a)("btn-primary btn-color-primary"),
                E = new l.default.IntlElement({ key: "StartMessaging" });
              return (
                y.append(E.element),
                t.inputWrapper.append(f.container, w.container, y),
                f.input.addEventListener("input", L),
                w.input.addEventListener("input", L),
                y.addEventListener("click", function (e) {
                  if (
                    f.input.classList.contains("error") ||
                    w.input.classList.contains("error")
                  )
                    return !1;
                  if (!f.value.length)
                    return f.input.classList.add("error"), !1;
                  this.disabled = !0;
                  const t = f.value.trim(),
                    n = w.value.trim(),
                    i = {
                      phone_number: b.phone_number,
                      phone_code_hash: b.phone_code_hash,
                      first_name: t,
                      last_name: n,
                    };
                  E.update({ key: "PleaseWait" });
                  const r = Object(s.f)(this);
                  u.a
                    .invokeApi("auth.signUp", i)
                    .then((e) => {
                      switch (e._) {
                        case "auth.authorization":
                          u.a.setUser(e.user),
                            new Promise((e, t) => {
                              if (!g) return e();
                              g().then((a) => {
                                v.uploadProfilePhoto(a).then(e, t);
                              }, t);
                            }).finally(() => {
                              a.e(4)
                                .then(a.bind(null, 19))
                                .then((e) => {
                                  e.default.mount();
                                });
                            });
                          break;
                        default:
                          E.update({ key: e._ }),
                            this.removeAttribute("disabled"),
                            r.remove();
                      }
                    })
                    .catch((e) => {
                      this.removeAttribute("disabled"),
                        r.remove(),
                        e.type,
                        E.update({ key: e.type });
                    });
                }),
                Object(m.a)(),
                new Promise((e) => {
                  window.requestAnimationFrame(e);
                })
              );
            }),
        (e) => {
          (b = e),
            c.default.pushToState("authState", {
              _: "authStateSignUp",
              authCode: e,
            });
        }
      );
      t.default = v;
    },
  },
]);
//# sourceMappingURL=26.ba2ec08326e25f93e0d7.chunk.js.map
