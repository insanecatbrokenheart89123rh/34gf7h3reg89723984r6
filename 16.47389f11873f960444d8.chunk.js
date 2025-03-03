(this.webpackJsonp = this.webpackJsonp || []).push([
  [16, 15, 19],
  {
    100: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      var n = i(16);
      class s {
        constructor(t) {
          (this.element = document.body.querySelector("." + t.className)),
            (this.container = document.createElement("div")),
            (this.container.className = "container center-align"),
            (this.imageDiv = document.createElement("div")),
            (this.imageDiv.className = "auth-image"),
            (this.title = document.createElement("h4")),
            t.titleLangKey && this.title.append(Object(n.i18n)(t.titleLangKey)),
            (this.subtitle = document.createElement("p")),
            (this.subtitle.className = "subtitle"),
            t.subtitleLangKey &&
              this.subtitle.append(Object(n.i18n)(t.subtitleLangKey)),
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
      function n(t) {
        const e = document.createElement("span");
        return (e.innerHTML = t), e;
      }
      i.d(e, "a", function () {
        return n;
      });
    },
    109: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return a;
      });
      var n = i(5),
        s = i(36);
      class a extends s.b {
        constructor(t = {}) {
          super(Object.assign({ plainText: !0 }, t)),
            (this.passwordVisible = !1),
            (this.onVisibilityClick = (t) => {
              Object(n.a)(t),
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
          const s = (this.toggleVisible = document.createElement("span"));
          s.classList.add("toggle-visible", "tgico"),
            this.container.classList.add("input-field-password"),
            this.container.append(s),
            s.addEventListener("click", this.onVisibilityClick),
            s.addEventListener("touchend", this.onVisibilityClick);
        }
      }
    },
    119: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      var n = i(51);
      class s {
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
            : (this.loadPromise = n.a
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
                    n.a.waitForFirstFrame(t)
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
      var n = i(35),
        s = i(38),
        a = i(17),
        o = i(90),
        r = i(70),
        l = i(34),
        c = i(109),
        u = i(119),
        d = i(31),
        h = i(16),
        p = i(100),
        m = i(5),
        g = i(29),
        b = i(101),
        f = i(33),
        v = i(55);
      let y;
      const w = new r.a(
        "page-password",
        !0,
        () => {
          const t = new p.a({
              className: "page-password",
              withInputWrapper: !0,
              titleLangKey: "Login.Password.Title",
              subtitleLangKey: "Login.Password.Subtitle",
            }),
            e = Object(l.a)("btn-primary btn-color-primary"),
            a = new h.default.IntlElement({ key: "Login.Next" });
          e.append(a.element);
          const r = new c.a({ label: "LoginPassword", name: "password" });
          let w;
          (y = r.input), t.inputWrapper.append(r.container, e);
          let E,
            L = () => (
              w || (w = window.setInterval(L, 1e4)),
              o.a.getState().then((t) => {
                (E = t),
                  E.hint
                    ? Object(f.a)(
                        r.label,
                        Object(b.a)(d.b.wrapEmojiText(E.hint))
                      )
                    : r.setLabel();
              })
            );
          const k = (t) => {
            if ((t && Object(m.a)(t), !y.value.length))
              return void y.classList.add("error");
            const s = Object(v.a)([y, e], !0);
            let l = y.value;
            a.update({ key: "PleaseWait" });
            const c = Object(n.f)(e);
            r.setValueSilently("" + Math.random()),
              r.setValueSilently(l),
              o.a
                .check(l, E)
                .then((t) => {
                  switch (t._) {
                    case "auth.authorization":
                      clearInterval(w),
                        i
                          .e(4)
                          .then(i.bind(null, 19))
                          .then((t) => {
                            t.default.mount();
                          }),
                        N && N.remove();
                      break;
                    default:
                      e.removeAttribute("disabled"),
                        a.update({ key: t._ }),
                        c.remove();
                  }
                })
                .catch((t) => {
                  s(),
                    r.input.classList.add("error"),
                    t.type,
                    a.update({ key: "PASSWORD_HASH_INVALID" }),
                    y.select(),
                    c.remove(),
                    L();
                });
          };
          Object(g.b)(e, k),
            y.addEventListener("keypress", function (t) {
              if (
                (this.classList.remove("error"),
                a.update({ key: "Login.Next" }),
                "Enter" === t.key)
              )
                return k();
            });
          const S = s.b.isMobile ? 100 : 166,
            N = new u.a(r, S);
          return t.imageDiv.append(N.container), Promise.all([N.load(), L()]);
        },
        null,
        () => {
          y.focus(),
            a.default.pushToState("authState", { _: "authStatePassword" });
        }
      );
      e.default = w;
    },
    33: function (t, e, i) {
      "use strict";
      function n(t, e) {
        if ("string" == typeof e) return void (t.innerHTML = e);
        const i = t.firstChild;
        i
          ? t.lastChild === i
            ? i.replaceWith(e)
            : ((t.textContent = ""), t.append(e))
          : t.append(e);
      }
      i.d(e, "a", function () {
        return n;
      });
    },
    36: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return d;
      });
      var n = i(82),
        s = i(72),
        a = i(57),
        o = i(78);
      var r = i(16),
        l = i(31),
        c = i(48);
      let u = () => {
        document.addEventListener("paste", (t) => {
          if (!Object(s.a)(t.target, 'contenteditable="true"')) return;
          let e, i;
          t.preventDefault();
          let n = (t.originalEvent || t).clipboardData.getData("text/plain"),
            o = !0,
            r = (t.originalEvent || t).clipboardData.getData("text/html");
          if (r.trim()) {
            (r = r.replace(/<style([\s\S]*)<\/style>/, "")),
              (r = r.replace(/<!--([\s\S]*)-->/, ""));
            const t = r.match(/<body>([\s\S]*)<\/body>/);
            t && (r = t[1].trim());
            let s = document.createElement("span");
            s.innerHTML = r;
            let c = s.firstChild;
            for (; c; ) {
              let t = c.nextSibling;
              3 === c.nodeType && (c.nodeValue.trim() || c.remove()), (c = t);
            }
            const u = Object(a.a)(s, !0);
            if (
              u.value.replace(/\s/g, "").length === n.replace(/\s/g, "").length
            ) {
              (e = u.value), (i = u.entities), (o = !1);
              let t = l.b.parseEntities(e);
              (t = t.filter(
                (t) =>
                  "messageEntityEmoji" === t._ ||
                  "messageEntityLinebreak" === t._
              )),
                l.b.mergeEntities(i, t);
            }
          }
          o &&
            ((e = n),
            (i = l.b.parseEntities(e)),
            (i = i.filter(
              (t) =>
                "messageEntityEmoji" === t._ || "messageEntityLinebreak" === t._
            ))),
            (e = l.b.wrapDraftText(e, { entities: i })),
            window.document.execCommand("insertHTML", !1, e);
        }),
          (u = null);
      };
      var d;
      !(function (t) {
        (t[(t.Neutral = 0)] = "Neutral"),
          (t[(t.Valid = 1)] = "Valid"),
          (t[(t.Error = 2)] = "Error");
      })(d || (d = {}));
      e.b = class {
        constructor(t = {}) {
          (this.options = t),
            (this.container = document.createElement("div")),
            this.container.classList.add("input-field"),
            (this.required = t.required),
            (this.validate = t.validate),
            void 0 !== t.maxLength &&
              void 0 === t.showLengthOn &&
              (t.showLengthOn = Math.min(40, Math.round(t.maxLength / 3)));
          const {
            placeholder: e,
            maxLength: i,
            showLengthOn: n,
            name: s,
            plainText: l,
            canBeEdited: c = !0,
          } = t;
          let d,
            h,
            p = t.label || t.labelText;
          if (l)
            (this.container.innerHTML = `\n      <input type="text" ${
              s ? `name="${s}"` : ""
            } autocomplete="off" ${
              p ? 'required=""' : ""
            } class="input-field-input">\n      `),
              (d = this.container.firstElementChild);
          else {
            u && u(),
              (this.container.innerHTML = `\n      <div contenteditable="${String(
                !!c
              )}" class="input-field-input"></div>\n      `),
              (d = this.container.firstElementChild);
            const e = new MutationObserver(() => {
              h && h();
            });
            d.addEventListener("input", () => {
              Object(o.a)(d) && (d.innerHTML = ""),
                this.inputFake &&
                  ((this.inputFake.innerHTML = d.innerHTML),
                  this.onFakeInput());
            }),
              e.observe(d, { characterData: !0, childList: !0, subtree: !0 }),
              t.animate &&
                (d.classList.add("scrollable", "scrollable-y"),
                (this.inputFake = document.createElement("div")),
                this.inputFake.setAttribute("contenteditable", "true"),
                (this.inputFake.className =
                  d.className + " input-field-input-fake"));
          }
          if (
            (d.setAttribute("dir", "auto"),
            e &&
              (Object(r._i18n)(d, e, void 0, "placeholder"),
              this.inputFake &&
                Object(r._i18n)(this.inputFake, e, void 0, "placeholder")),
            p || e)
          ) {
            const t = document.createElement("div");
            t.classList.add("input-field-border"), this.container.append(t);
          }
          if (
            (p &&
              ((this.label = document.createElement("label")),
              this.setLabel(),
              this.container.append(this.label)),
            i)
          ) {
            const t = this.container.lastElementChild;
            let e = !1;
            (h = () => {
              const s = d.classList.contains("error"),
                o = l ? d.value.length : [...Object(a.a)(d, !1).value].length,
                r = i - o,
                c = r < 0;
              d.classList.toggle("error", c),
                c || r <= n
                  ? (this.setLabel(), t.append(` (${i - o})`), e || (e = !0))
                  : ((s && !c) || e) && (this.setLabel(), (e = !1));
            }),
              d.addEventListener("input", h);
          }
          this.input = d;
        }
        select() {
          this.value &&
            (this.options.plainText
              ? this.input.select()
              : (function (t) {
                  const e = document.createRange();
                  e.selectNodeContents(t);
                  const i = window.getSelection();
                  i.removeAllRanges(), i.addRange(e);
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
        onFakeInput(t = !0) {
          const { scrollHeight: e } = this.inputFake,
            i = +this.input.style.height.replace("px", "");
          if (i === e) return;
          const n = Math.round(50 * Math.log(Math.abs(e - i)));
          (this.input.style.transitionDuration = n + "ms"),
            t && (this.input.style.height = e ? e + "px" : "");
          Object(c.a)(this.input, "is-changing-height", !0, n, () => {
            this.input.classList.remove("is-changing-height");
          });
        }
        get value() {
          return this.options.plainText
            ? this.input.value
            : Object(a.a)(this.input, !1).value;
        }
        set value(t) {
          this.setValueSilently(t, !1), Object(n.a)(this.input, "input");
        }
        setValueSilently(t, e = !0) {
          this.options.plainText
            ? (this.input.value = t)
            : ((this.input.innerHTML = t),
              this.inputFake &&
                ((this.inputFake.innerHTML = t), e && this.onFakeInput()));
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
        setDraftValue(t = "", e = !1) {
          this.options.plainText || (t = l.b.wrapDraftText(t)),
            e ? this.setValueSilently(t, !1) : (this.value = t);
        }
        setOriginalValue(t = "", e = !1) {
          (this.originalValue = t), this.setDraftValue(t, e);
        }
        setState(t, e) {
          e &&
            ((this.label.textContent = ""),
            this.label.append(Object(r.i18n)(e, this.options.labelOptions))),
            this.input.classList.toggle("error", !!(t & d.Error)),
            this.input.classList.toggle("valid", !!(t & d.Valid));
        }
        setError(t) {
          this.setState(d.Error, t);
        }
      };
    },
    48: function (t, e, i) {
      "use strict";
      var n = i(15);
      const s = (t, e, i, a, o, r) => {
        const { timeout: l, raf: c } = t.dataset;
        if (
          (void 0 !== l && clearTimeout(+l),
          void 0 !== c &&
            (window.cancelAnimationFrame(+c), r || delete t.dataset.raf),
          r && n.default.settings.animationsEnabled && a)
        )
          return void (t.dataset.raf =
            "" +
            window.requestAnimationFrame(() => {
              delete t.dataset.raf, s(t, e, i, a, o, r - 1);
            }));
        i && e && t.classList.add(e);
        const u = () => {
          delete t.dataset.timeout,
            !i && e && t.classList.remove("backwards", e),
            t.classList.remove("animating"),
            o && o();
        };
        if (!n.default.settings.animationsEnabled || !a)
          return t.classList.remove("animating", "backwards"), void u();
        t.classList.add("animating"),
          t.classList.toggle("backwards", !i),
          (t.dataset.timeout = "" + setTimeout(u, a));
      };
      e.a = s;
    },
    55: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return (
          e
            ? t.forEach((t) => t.setAttribute("disabled", "true"))
            : t.forEach((t) => t.removeAttribute("disabled")),
          () => n(t, !e)
        );
      }
      i.d(e, "a", function () {
        return n;
      });
    },
    57: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return o;
      });
      var n = i(30),
        s = i(31),
        a = i(73);
      function o(t, e = !0) {
        const i = [],
          n = [],
          o = e ? [] : void 0;
        Object(a.a)(t, i, n, void 0, void 0, o), n.length && i.push(n.join(""));
        let r = i.join("\n");
        return (
          (r = r.replace(/\u00A0/g, " ")),
          (null == o ? void 0 : o.length) &&
            (s.b.combineSameEntities(o), s.b.sortEntities(o)),
          { value: r, entities: o }
        );
      }
      n.a.getRichValue = o;
    },
    72: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return t.closest(`[${e}]`);
      }
      i.d(e, "a", function () {
        return n;
      });
    },
    73: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return a;
        });
      const n = {
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
      function a(t, e, i, o, r, l, c = { offset: 0 }) {
        if (3 === t.nodeType) {
          let e = t.nodeValue;
          if (
            (o === t ? i.push(e.substr(0, r) + "" + e.substr(r)) : i.push(e),
            l && e.length && t.parentNode)
          ) {
            const i = t.parentElement;
            for (const t in n) {
              const s = n[t],
                a = i.closest(s.match + ", [contenteditable]");
              null ===
                (null == a ? void 0 : a.getAttribute("contenteditable")) &&
                ("messageEntityTextUrl" === s.entityName
                  ? l.push({
                      _: s.entityName,
                      url: a.href,
                      offset: c.offset,
                      length: e.length,
                    })
                  : "messageEntityMentionName" === s.entityName
                  ? l.push({
                      _: s.entityName,
                      offset: c.offset,
                      length: e.length,
                      user_id: a.dataset.follow.toUserId(),
                    })
                  : l.push({
                      _: s.entityName,
                      offset: c.offset,
                      length: e.length,
                    }));
            }
          }
          return void (c.offset += e.length);
        }
        if (1 !== t.nodeType) return;
        const u = o === t,
          d = s.has(t.tagName);
        if (d && i.length)
          e.push(i.join("")), i.splice(0, i.length), ++c.offset;
        else if (t instanceof HTMLImageElement) {
          const e = t.alt;
          e && (i.push(e), (c.offset += e.length));
        }
        u && !r && i.push("");
        const h = t.matches('[style*="table-cell"], th, td'),
          p = null == l ? void 0 : l.length;
        let m = t.firstChild;
        for (; m; ) a(m, e, i, o, r, l, c), (m = m.nextSibling);
        if (
          (u && r && i.push(""),
          h && t.nextSibling && (i.push(" "), ++c.offset, void 0 !== p))
        )
          for (let t = p, e = l.length; t < e; ++t) ++l[t].length;
        const g = i.length;
        d && g && (e.push(i.join("")), i.splice(0, g), ++c.offset),
          g && "P" === t.tagName && t.nextSibling && (e.push(""), ++c.offset);
      }
    },
    78: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      var n = i(57);
      function s(t) {
        return t.hasAttribute("contenteditable") || "INPUT" !== t.tagName
          ? !Object(n.a)(t, !1).value.trim()
          : !t.value.trim();
      }
    },
    90: function (t, e, i) {
      "use strict";
      var n = i(30),
        s = i(32);
      const a = new (class {
        getState() {
          return s.a.invokeApi("account.getPassword").then((t) => t);
        }
        updateSettings(t = {}) {
          return this.getState().then((e) => {
            let i, n;
            const a = {
              password: null,
              new_settings: {
                _: "account.passwordInputSettings",
                hint: t.hint,
                email: t.email,
              },
            };
            i = t.currentPassword
              ? s.a.invokeCrypto("computeSRP", t.currentPassword, e, !1)
              : Promise.resolve({ _: "inputCheckPasswordEmpty" });
            const o = e.new_algo,
              r = new Uint8Array(o.salt1.length + 32);
            return (
              (function (t) {
                if (!crypto || !("getRandomValues" in crypto))
                  throw new Error("NO_SECURE_RANDOM");
                crypto.getRandomValues(t);
              })(r),
              r.set(o.salt1, 0),
              (o.salt1 = r),
              (n = t.newPassword
                ? s.a.invokeCrypto("computeSRP", t.newPassword, e, !0)
                : Promise.resolve(new Uint8Array())),
              Promise.all([i, n]).then(
                (t) => (
                  (a.password = t[0]),
                  (a.new_settings.new_algo = o),
                  (a.new_settings.new_password_hash = t[1]),
                  s.a.invokeApi("account.updatePasswordSettings", a)
                )
              )
            );
          });
        }
        check(t, e, i = {}) {
          return s.a
            .invokeCrypto("computeSRP", t, e, !1)
            .then((t) =>
              s.a
                .invokeApi("auth.checkPassword", { password: t }, i)
                .then(
                  (t) => (
                    "auth.authorization" === t._ && s.a.setUser(t.user), t
                  )
                )
            );
        }
        confirmPasswordEmail(t) {
          return s.a.invokeApi("account.confirmPasswordEmail", { code: t });
        }
        resendPasswordEmail() {
          return s.a.invokeApi("account.resendPasswordEmail");
        }
        cancelPasswordEmail() {
          return s.a.invokeApi("account.cancelPasswordEmail");
        }
      })();
      n.a.passwordManager = a;
      e.a = a;
    },
  },
]);
//# sourceMappingURL=16.47389f11873f960444d8.chunk.js.map
