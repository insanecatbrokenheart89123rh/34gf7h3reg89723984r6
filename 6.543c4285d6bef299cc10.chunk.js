(this.webpackJsonp = this.webpackJsonp || []).push([
  [6],
  {
    114: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return h;
      });
      var n = i(76),
        s = i(95),
        a = i(99);
      function o(t) {
        return (function (t) {
          return Object(a.a)(t, "readAsArrayBuffer");
        })(t).then((t) => new Uint8Array(t));
      }
      var r = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, a) {
          function o(t) {
            try {
              l(n.next(t));
            } catch (t) {
              a(t);
            }
          }
          function r(t) {
            try {
              l(n.throw(t));
            } catch (t) {
              a(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          l((n = n.apply(t, e || [])).next());
        });
      };
      var l = new (class {
          constructor() {
            this.blobSupported = !0;
            try {
              Object(s.a)([], "");
            } catch (t) {
              this.blobSupported = !1;
            }
          }
          isAvailable() {
            return this.blobSupported;
          }
          write(t, e) {
            return e instanceof Blob
              ? o(e).then((e) => t.write(e))
              : t.write(e);
          }
          getFakeFileWriter(t, e) {
            const i = [];
            return {
              write: (t) =>
                r(this, void 0, void 0, function* () {
                  if (!this.blobSupported) throw !1;
                  i.push(t);
                }),
              truncate: () => {
                i.length = 0;
              },
              finalize: (n = !0) => {
                const a = Object(s.a)(i, t);
                return n && e && e(a), a;
              },
            };
          }
        })(),
        c = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, a) {
            function o(t) {
              try {
                l(n.next(t));
              } catch (t) {
                a(t);
              }
            }
            function r(t) {
              try {
                l(n.throw(t));
              } catch (t) {
                a(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            l((n = n.apply(t, e || [])).next());
          });
        };
      class h {
        constructor(t) {
          (this.dbName = t),
            (this.useStorage = !0),
            n.a.test && (this.dbName += "_test"),
            h.STORAGES.length && (this.useStorage = h.STORAGES[0].useStorage),
            this.openDatabase(),
            h.STORAGES.push(this);
        }
        openDatabase() {
          var t;
          return null !== (t = this.openDbPromise) && void 0 !== t
            ? t
            : (this.openDbPromise = caches.open(this.dbName));
        }
        delete(t) {
          return this.timeoutOperation((e) => e.delete("/" + t));
        }
        deleteAll() {
          return caches.delete(this.dbName);
        }
        get(t) {
          return this.timeoutOperation((e) => e.match("/" + t));
        }
        save(t, e) {
          return this.timeoutOperation((i) => i.put("/" + t, e));
        }
        getFile(t, e = "blob") {
          return this.get(t).then((t) => {
            if (!t) throw "NO_ENTRY_FOUND";
            return t[e]();
          });
        }
        saveFile(t, e) {
          e instanceof Blob || (e = Object(s.a)(e));
          const i = new Response(e, {
            headers: { "Content-Length": "" + e.size },
          });
          return this.save(t, i).then(() => e);
        }
        timeoutOperation(t) {
          return this.useStorage
            ? new Promise((e, i) =>
                c(this, void 0, void 0, function* () {
                  let n = !1;
                  const s = setTimeout(() => {
                    i(), (n = !0);
                  }, 15e3);
                  try {
                    const i = yield this.openDatabase();
                    if (!i)
                      throw (
                        ((this.useStorage = !1),
                        (this.openDbPromise = void 0),
                        "no cache?")
                      );
                    const s = yield t(i);
                    if (n) return;
                    e(s);
                  } catch (t) {
                    i(t);
                  }
                  clearTimeout(s);
                })
              )
            : Promise.reject("STORAGE_OFFLINE");
        }
        getFileWriter(t, e) {
          const i = l.getFakeFileWriter(e, (e) =>
            this.saveFile(t, e).catch(() => e)
          );
          return Promise.resolve(i);
        }
        static toggleStorage(t) {
          return Promise.all(
            this.STORAGES.map((e) => {
              if (((e.useStorage = t), !t)) return e.deleteAll();
            })
          );
        }
      }
      h.STORAGES = [];
    },
    123: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return r;
      });
      var n = i(89),
        s = i(94),
        a = i(0),
        o = i(36);
      class r extends o.b {
        constructor(t = {}) {
          super(
            Object.assign(
              { label: "Contacts.PhoneNumber.Placeholder", name: "phone" },
              t
            )
          ),
            (this.pasted = !1),
            (this.lastValue = ""),
            this.container.classList.add("input-field-phone");
          let e = this.input;
          if (e instanceof HTMLInputElement)
            (e.type = "tel"), (e.autocomplete = "rr55RandomRR55");
          else {
            e.inputMode = "decimal";
            const t = window.devicePixelRatio;
            if (t > 1) {
              let i;
              a.IS_APPLE ? (i = -0.16 * t) : a.IS_ANDROID && (i = 0),
                e.style.setProperty("--letter-spacing", i + "px");
            }
            const i = this.setValueSilently.bind(this);
            this.setValueSilently = (t) => {
              i(t), Object(n.a)(this.input, !0);
            };
          }
          e.addEventListener("input", () => {
            e.classList.remove("error");
            const i = this.value;
            let n;
            Math.abs(i.length - this.lastValue.length) > 1 &&
              !this.pasted &&
              a.IS_APPLE_MOBILE &&
              this.setValueSilently(this.lastValue + i),
              (this.pasted = !1),
              this.setLabel();
            let o,
              r,
              l,
              c = "";
            "+" === this.value.replace(/\++/, "+")
              ? this.setValueSilently("+")
              : ((n = Object(s.a)(this.value)),
                (o = n.formatted),
                (r = n.country),
                (c = n.leftPattern),
                (l = n.code),
                this.setValueSilently((this.lastValue = o ? "+" + o : ""))),
              (e.dataset.leftPattern = c),
              t.onInput && t.onInput(n);
          }),
            e.addEventListener("paste", () => {
              this.pasted = !0;
            }),
            e.addEventListener("keypress", (t) => {
              const e = t.key;
              if (
                /\D/.test(e) &&
                !t.metaKey &&
                !t.ctrlKey &&
                "Backspace" !== e &&
                ("+" !== e || !t.shiftKey)
              )
                return t.preventDefault(), !1;
            });
        }
      }
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
        return u;
      });
      var n = i(82),
        s = i(72),
        a = i(57),
        o = i(78);
      var r = i(16),
        l = i(31),
        c = i(48);
      let h = () => {
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
            const h = Object(a.a)(s, !0);
            if (
              h.value.replace(/\s/g, "").length === n.replace(/\s/g, "").length
            ) {
              (e = h.value), (i = h.entities), (o = !1);
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
          (h = null);
      };
      var u;
      !(function (t) {
        (t[(t.Neutral = 0)] = "Neutral"),
          (t[(t.Valid = 1)] = "Valid"),
          (t[(t.Error = 2)] = "Error");
      })(u || (u = {}));
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
          let u,
            d,
            p = t.label || t.labelText;
          if (l)
            (this.container.innerHTML = `\n      <input type="text" ${
              s ? `name="${s}"` : ""
            } autocomplete="off" ${
              p ? 'required=""' : ""
            } class="input-field-input">\n      `),
              (u = this.container.firstElementChild);
          else {
            h && h(),
              (this.container.innerHTML = `\n      <div contenteditable="${String(
                !!c
              )}" class="input-field-input"></div>\n      `),
              (u = this.container.firstElementChild);
            const e = new MutationObserver(() => {
              d && d();
            });
            u.addEventListener("input", () => {
              Object(o.a)(u) && (u.innerHTML = ""),
                this.inputFake &&
                  ((this.inputFake.innerHTML = u.innerHTML),
                  this.onFakeInput());
            }),
              e.observe(u, { characterData: !0, childList: !0, subtree: !0 }),
              t.animate &&
                (u.classList.add("scrollable", "scrollable-y"),
                (this.inputFake = document.createElement("div")),
                this.inputFake.setAttribute("contenteditable", "true"),
                (this.inputFake.className =
                  u.className + " input-field-input-fake"));
          }
          if (
            (u.setAttribute("dir", "auto"),
            e &&
              (Object(r._i18n)(u, e, void 0, "placeholder"),
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
            (d = () => {
              const s = u.classList.contains("error"),
                o = l ? u.value.length : [...Object(a.a)(u, !1).value].length,
                r = i - o,
                c = r < 0;
              u.classList.toggle("error", c),
                c || r <= n
                  ? (this.setLabel(), t.append(` (${i - o})`), e || (e = !0))
                  : ((s && !c) || e) && (this.setLabel(), (e = !1));
            }),
              u.addEventListener("input", d);
          }
          this.input = u;
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
            this.input.classList.toggle("error", !!(t & u.Error)),
            this.input.classList.toggle("valid", !!(t & u.Valid));
        }
        setError(t) {
          this.setState(u.Error, t);
        }
      };
    },
    44: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return c;
      }),
        i.d(e, "a", function () {
          return h;
        });
      var n = i(1),
        s = i(41),
        a = i(88),
        o = i(83),
        r = i(5);
      class l {
        constructor(t, e = "", i = document.createElement("div")) {
          (this.el = t),
            (this.container = i),
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
                  const t = this.container[this.scrollProperty];
                  (this.lastScrollDirection =
                    this.lastScrollPosition === t
                      ? 0
                      : this.lastScrollPosition < t
                      ? 1
                      : -1),
                    (this.lastScrollPosition = t),
                    this.onAdditionalScroll &&
                      0 !== this.lastScrollDirection &&
                      this.onAdditionalScroll(),
                    this.checkForTriggers && this.checkForTriggers();
                })));
            }),
            this.container.classList.add("scrollable"),
            (this.log = Object(s.b)("SCROLL" + (e ? "-" + e : ""), s.a.Error)),
            t &&
              (Array.from(t.children).forEach((t) => this.container.append(t)),
              t.append(this.container));
        }
        setListeners() {
          this.removeHeavyAnimationListener ||
            (window.addEventListener("resize", this.onScroll, { passive: !0 }),
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
        append(t) {
          this.container.append(t);
        }
        scrollIntoViewNew(t) {
          return Object(a.b)(
            Object.assign(Object.assign({}, t), { container: this.container })
          );
        }
      }
      class c extends l {
        constructor(t, e = "", i = 300, n) {
          super(t, e),
            (this.onScrollOffset = i),
            (this.loadedAll = { top: !0, bottom: !1 }),
            (this.checkForTriggers = () => {
              if (!this.onScrolledTop && !this.onScrolledBottom) return;
              if (this.isHeavyAnimationInProgress) return void this.onScroll();
              const t = this.container.scrollHeight;
              if (!t) return;
              const e = t - this.container.clientHeight,
                i = this.lastScrollPosition;
              this.onScrolledTop &&
                i <= this.onScrollOffset &&
                this.lastScrollDirection <= 0 &&
                this.onScrolledTop(),
                this.onScrolledBottom &&
                  e - i <= this.onScrollOffset &&
                  this.lastScrollDirection >= 0 &&
                  this.onScrolledBottom();
            }),
            this.container.classList.add("scrollable-y"),
            this.setListeners(),
            (this.scrollProperty = "scrollTop");
        }
        setVirtualContainer(t) {
          (this.splitUp = t), this.log("setVirtualContainer:", t, this);
        }
        prepend(...t) {
          (this.splitUp || this.padding || this.container).prepend(...t);
        }
        append(...t) {
          (this.splitUp || this.padding || this.container).append(...t);
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
        set scrollTop(t) {
          this.container.scrollTop = t;
        }
        get scrollTop() {
          return this.container.scrollTop;
        }
        get scrollHeight() {
          return this.container.scrollHeight;
        }
      }
      class h extends l {
        constructor(
          t,
          e = "",
          i = 300,
          s = 15,
          a = document.createElement("div")
        ) {
          if (
            (super(t, e, a),
            (this.onScrollOffset = i),
            (this.splitCount = s),
            (this.container = a),
            this.container.classList.add("scrollable-x"),
            !n.IS_TOUCH_SUPPORTED)
          ) {
            const t = (t) => {
              !t.deltaX &&
                this.container.scrollWidth > this.container.clientWidth &&
                ((this.container.scrollLeft += t.deltaY / 4), Object(r.a)(t));
            };
            this.container.addEventListener("wheel", t, { passive: !1 });
          }
          this.scrollProperty = "scrollLeft";
        }
      }
    },
    46: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return r;
      });
      var n = i(17),
        s = i(18),
        a = i(16),
        o = i(115);
      class r {
        constructor(t = {}) {
          const e = (this.label = document.createElement("label"));
          e.classList.add("checkbox-field"),
            t.restriction && e.classList.add("checkbox-field-restriction"),
            t.round && e.classList.add("checkbox-field-round"),
            t.disabled && this.toggleDisability(!0);
          const i = (this.input = document.createElement("input"));
          let r;
          if (
            (i.classList.add("checkbox-field-input"),
            (i.type = "checkbox"),
            t.name && (i.id = "input-" + t.name),
            t.checked && (i.checked = !0),
            t.stateKey &&
              n.default.getState().then((e) => {
                const s = Object(o.a)(e, t.stateKey);
                let a;
                (a = t.stateValues ? 1 === t.stateValues.indexOf(s) : s),
                  this.setValueSilently(a),
                  i.addEventListener("change", () => {
                    let e;
                    (e = t.stateValues
                      ? t.stateValues[i.checked ? 1 : 0]
                      : i.checked),
                      n.default.setByKey(t.stateKey, e);
                  });
              }),
            t.text
              ? ((r = this.span = document.createElement("span")),
                r.classList.add("checkbox-caption"),
                Object(a._i18n)(r, t.text, t.textArgs))
              : e.classList.add("checkbox-without-caption"),
            e.append(i),
            t.toggle)
          ) {
            e.classList.add("checkbox-field-toggle");
            const t = document.createElement("div");
            t.classList.add("checkbox-toggle"), e.append(t);
          } else {
            const t = document.createElement("div");
            t.classList.add("checkbox-box");
            const i = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            i.classList.add("checkbox-box-check"),
              i.setAttributeNS(null, "viewBox", "0 0 24 24");
            const n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "use"
            );
            n.setAttributeNS(null, "href", "#check"),
              n.setAttributeNS(null, "x", "-1"),
              i.append(n);
            const s = document.createElement("div");
            s.classList.add("checkbox-box-background");
            const a = document.createElement("div");
            a.classList.add("checkbox-box-border"),
              t.append(a, s, i),
              e.append(t);
          }
          r && e.append(r),
            t.withRipple
              ? (e.classList.add("checkbox-ripple", "hover-effect"),
                Object(s.ripple)(e, void 0, void 0, !0))
              : t.withHover && e.classList.add("hover-effect");
        }
        get checked() {
          return this.input.checked;
        }
        set checked(t) {
          this.setValueSilently(t);
          const e = new Event("change", { bubbles: !0, cancelable: !0 });
          this.input.dispatchEvent(e);
        }
        setValueSilently(t) {
          this.input.checked = t;
        }
        toggleDisability(t) {
          return (
            this.label.classList.toggle("checkbox-disabled", t),
            () => this.toggleDisability(!t)
          );
        }
      }
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
        const h = () => {
          delete t.dataset.timeout,
            !i && e && t.classList.remove("backwards", e),
            t.classList.remove("animating"),
            o && o();
        };
        if (!n.default.settings.animationsEnabled || !a)
          return t.classList.remove("animating", "backwards"), void h();
        t.classList.add("animating"),
          t.classList.toggle("backwards", !i),
          (t.dataset.timeout = "" + setTimeout(h, a));
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
    61: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return t.closest(e);
      }
      i.d(e, "a", function () {
        return n;
      });
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
        const h = o === t,
          u = s.has(t.tagName);
        if (u && i.length)
          e.push(i.join("")), i.splice(0, i.length), ++c.offset;
        else if (t instanceof HTMLImageElement) {
          const e = t.alt;
          e && (i.push(e), (c.offset += e.length));
        }
        h && !r && i.push("");
        const d = t.matches('[style*="table-cell"], th, td'),
          p = null == l ? void 0 : l.length;
        let m = t.firstChild;
        for (; m; ) a(m, e, i, o, r, l, c), (m = m.nextSibling);
        if (
          (h && r && i.push(""),
          d && t.nextSibling && (i.push(" "), ++c.offset, void 0 !== p))
        )
          for (let t = p, e = l.length; t < e; ++t) ++l[t].length;
        const f = i.length;
        u && f && (e.push(i.join("")), i.splice(0, f), ++c.offset),
          f && "P" === t.tagName && t.nextSibling && (e.push(""), ++c.offset);
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
    89: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      });
      var n = i(1);
      function s(t, e = !1) {
        if (!n.IS_TOUCH_SUPPORTED || (e && document.activeElement === t))
          if (
            (t.focus(),
            void 0 !== window.getSelection && void 0 !== document.createRange)
          ) {
            var i = document.createRange();
            i.selectNodeContents(t), i.collapse(!1);
            var s = window.getSelection();
            s.removeAllRanges(), s.addRange(i);
          } else if (void 0 !== document.body.createTextRange) {
            var a = document.body.createTextRange();
            a.moveToElementText(t), a.collapse(!1), a.select();
          }
      }
    },
    99: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return new Promise((i) => {
          const n = new FileReader();
          n.addEventListener("loadend", (t) => {
            i(t.target.result);
          }),
            n[e](t);
        });
      }
      i.d(e, "a", function () {
        return n;
      });
    },
  },
]);
//# sourceMappingURL=6.543c4285d6bef299cc10.chunk.js.map
