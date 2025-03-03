(this.webpackJsonp = this.webpackJsonp || []).push([
  [3],
  {
    122: function (t, e, n) {
      "use strict";
      var i = n(45),
        s = n(52),
        o = n(30),
        a = n(92);
      const r = new (class {
        constructor() {
          (this.promises = {}),
            (this.raf = i.b.bind(null)),
            (this.scheduled = !1);
        }
        do(t, e) {
          let n = this.promises[t];
          return (
            n || (this.scheduleFlush(), (n = this.promises[t] = Object(s.a)())),
            void 0 !== e && n.then(() => e()),
            n
          );
        }
        measure(t) {
          return this.do("read", t);
        }
        mutate(t) {
          return this.do("write", t);
        }
        mutateElement(t, e) {
          const n = Object(a.a)(t),
            i = n ? this.mutate() : Promise.resolve();
          return void 0 !== e && (n ? e() : i.then(() => e())), i;
        }
        scheduleFlush() {
          this.scheduled ||
            ((this.scheduled = !0),
            this.raf(() => {
              this.promises.read && this.promises.read.resolve(),
                this.promises.write && this.promises.write.resolve(),
                (this.scheduled = !1),
                (this.promises = {});
            }));
        }
      })();
      o.a && (o.a.sequentialDom = r), (e.a = r);
    },
    171: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var i = n(0);
      function s(t) {
        return (
          i.IS_MOBILE_SAFARI &&
          t instanceof TouchEvent &&
          t.touches[0].clientX < 30
        );
      }
    },
    18: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "ripple", function () {
          return d;
        });
      var i = n(6),
        s = n(122),
        o = n(1),
        a = n(15),
        r = n(98);
      let c = 0;
      function d(t, e = () => Promise.resolve(), n = null, d = !1, l = t) {
        if (t.querySelector(".c-ripple")) return;
        t.classList.add("rp");
        let u = document.createElement("div");
        u.classList.add("c-ripple");
        let h;
        t.classList.contains("rp-square") && u.classList.add("is-square"),
          t[d ? "prepend" : "append"](u);
        const m = (t, i) => {
            const a = Date.now(),
              r = document.createElement("div"),
              d = c++,
              l =
                1e3 *
                +window
                  .getComputedStyle(u)
                  .getPropertyValue("--ripple-duration")
                  .replace("s", "");
            (h = () => {
              let t = Date.now() - a;
              const e = () => {
                s.a.mutate(() => {
                  r.remove();
                }),
                  n && n(d);
              };
              if (t < l) {
                let n = Math.max(l - t, l / 2);
                setTimeout(
                  () => r.classList.add("hiding"),
                  Math.max(n - l / 2, 0)
                ),
                  setTimeout(e, n);
              } else r.classList.add("hiding"), setTimeout(e, l / 2);
              o.IS_TOUCH_SUPPORTED ||
                window.removeEventListener("contextmenu", h),
                (h = null),
                (v = !1);
            }),
              e && e(d),
              window.requestAnimationFrame(() => {
                const e = u.getBoundingClientRect();
                r.classList.add("c-ripple__circle");
                const n = t - e.left,
                  s = i - e.top,
                  o = Math.sqrt(
                    Math.pow(Math.abs(s - e.height / 2) + e.height / 2, 2) +
                      Math.pow(Math.abs(n - e.width / 2) + e.width / 2, 2)
                  ),
                  a = n - o / 2,
                  c = s - o / 2;
                (r.style.width = r.style.height = o + "px"),
                  (r.style.left = a + "px"),
                  (r.style.top = c + "px"),
                  u.append(r);
              });
          },
          p = (e) =>
            e.target !== t &&
            (["BUTTON", "A"].includes(e.target.tagName) ||
              Object(i.a)(e.target, "c-ripple") !== u) &&
            (l === t || !Object(r.a)(e.target, l));
        let v = !1;
        if (o.IS_TOUCH_SUPPORTED) {
          let t = () => {
            h && h();
          };
          l.addEventListener(
            "touchstart",
            (e) => {
              if (!a.default.settings.animationsEnabled) return;
              if (e.touches.length > 1 || v || p(e)) return;
              v = !0;
              let { clientX: n, clientY: i } = e.touches[0];
              m(n, i),
                l.addEventListener("touchend", t, {
                  once: !0,
                }),
                window.addEventListener(
                  "touchmove",
                  (e) => {
                    (e.cancelBubble = !0),
                      e.stopPropagation(),
                      t(),
                      l.removeEventListener("touchend", t);
                  },
                  {
                    once: !0,
                  }
                );
            },
            {
              passive: !0,
            }
          );
        } else
          l.addEventListener(
            "mousedown",
            (t) => {
              if (![0, 2].includes(t.button)) return;
              if (!a.default.settings.animationsEnabled) return;
              if ("0" === l.dataset.ripple || p(t)) return;
              if (v) return void (v = !1);
              let { clientX: e, clientY: n } = t;
              m(e, n),
                window.addEventListener("mouseup", h, {
                  once: !0,
                  passive: !0,
                }),
                window.addEventListener("contextmenu", h, {
                  once: !0,
                  passive: !0,
                });
            },
            {
              passive: !0,
            }
          );
      }
    },
    29: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return c;
        });
      var i = n(1),
        s = n(82);
      const o = i.IS_TOUCH_SUPPORTED ? "mousedown" : "click";
      function a(t, e, n = {}) {
        const i = n.listenerSetter
          ? n.listenerSetter.add(t)
          : t.addEventListener.bind(t);
        (n.touchMouseDown = !0), i(o, e, n);
      }
      function r(t, e, n) {
        t.removeEventListener(o, e, n);
      }
      function c(t) {
        Object(s.a)(t, o);
      }
    },
    34: function (t, e, n) {
      "use strict";
      var i = n(16),
        s = n(18);
      e.a = (t, e = {}) => {
        const n = document.createElement(e.asDiv ? "div" : "button");
        return (
          (n.className = t + (e.icon ? " tgico-" + e.icon : "")),
          e.noRipple ||
            (e.rippleSquare && n.classList.add("rp-square"),
            Object(s.ripple)(n)),
          e.onlyMobile && n.classList.add("only-handhelds"),
          e.disabled && n.setAttribute("disabled", "true"),
          e.text && n.append(Object(i.i18n)(e.text)),
          n
        );
      };
    },
    35: function (t, e, n) {
      "use strict";
      n.d(e, "f", function () {
        return u;
      }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return E;
        }),
        n.d(e, "b", function () {
          return S;
        }),
        n.d(e, "a", function () {
          return I;
        });
      var i = n(30),
        s = n(5),
        o = n(29),
        a = n(38),
        r = n(1),
        c = n(0),
        d = n(15),
        l = n(71);
      function u(t, e = !1) {
        const n =
          '\n  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">\n  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>\n  </svg>';
        if (e) {
          const e = document.createElement("div");
          return (
            e.classList.add("preloader"),
            (e.innerHTML = n),
            t && t.appendChild(e),
            e
          );
        }
        return t.insertAdjacentHTML("beforeend", n), t.lastElementChild;
      }
      function h(t, e = "check") {
        return (
          t.classList.remove("tgico-" + e),
          (t.disabled = !0),
          u(t),
          () => {
            (t.innerHTML = ""),
              t.classList.add("tgico-" + e),
              t.removeAttribute("disabled");
          }
        );
      }
      i.a.putPreloader = u;
      let m = (t) => {
        let e = g.getBoundingClientRect(),
          { clientX: n, clientY: i } = t,
          s = n >= e.right ? n - e.right : e.left - n,
          o = i >= e.bottom ? i - e.bottom : e.top - i;
        (s >= 100 || o >= 100) && v();
      };
      const p = (t) => {
          v();
        },
        v = () => {
          g &&
            (g.classList.remove("active"),
            g.parentElement.classList.remove("menu-open"),
            b && b.remove(),
            (g = null),
            d.default.dispatchEvent("context_menu_toggle", !1)),
            f && (f(), (f = null)),
            r.IS_TOUCH_SUPPORTED ||
              (window.removeEventListener("mousemove", m),
              window.removeEventListener("contextmenu", p)),
            document.removeEventListener(o.a, p),
            c.IS_MOBILE_SAFARI || l.a.removeByType("menu");
        };
      window.addEventListener("resize", () => {
        g && v();
      });
      let g = null,
        f = null,
        b = null;
      function w(t, e) {
        v(),
          c.IS_MOBILE_SAFARI ||
            l.a.pushItem({
              type: "menu",
              onPop: (t) => {
                v();
              },
            }),
          (g = t),
          g.classList.add("active"),
          g.parentElement.classList.add("menu-open"),
          b ||
            ((b = document.createElement("div")),
            b.classList.add("btn-menu-overlay"),
            b.addEventListener(o.a, (t) => {
              Object(s.a)(t), p();
            })),
          g.parentElement.insertBefore(b, g),
          (f = e),
          r.IS_TOUCH_SUPPORTED ||
            (window.addEventListener("mousemove", m),
            window.addEventListener("contextmenu", p, {
              once: !0,
            })),
          document.addEventListener(o.a, p),
          d.default.dispatchEvent("context_menu_toggle", !0);
      }
      function E({ pageX: t, pageY: e }, n, i, s) {
        const o =
          Array.from(n.children).find(
            (t) =>
              t.classList.contains("btn-menu-item") &&
              !t.classList.contains("hide")
          ) || n;
        let { scrollWidth: r } = o,
          { scrollHeight: c } = n;
        const d = document.body.getBoundingClientRect(),
          l = d.width,
          u = d.height;
        let h = 8,
          m = 8,
          p = 8,
          v = 8;
        s &&
          (s.top && (h += s.top),
          s.right && (m += s.right),
          s.bottom && (p += s.bottom),
          s.left && (v += s.left)),
          (i = a.b.isMobile ? "right" : "left");
        let g = "top";
        const f = u - c - p,
          b = l - r - m,
          w = v,
          E = {
            x: {
              left: t,
              right: Math.min(b, t - r),
            },
            intermediateX: "right" === i ? w : b,
            y: {
              top: e,
              bottom: e - c,
            },
            intermediateY: f,
          },
          L = {
            left: E.x.left + r + m <= l,
            right: E.x.right >= v,
          },
          y = {
            top: E.y.top + c + p <= u,
            bottom: E.y.bottom - p >= p,
          };
        {
          let t;
          (t = L[i] ? E.x[i] : ((i = "center"), E.intermediateX)),
            (n.style.left = t + "px");
        }
        {
          let t;
          (t = y[g] ? E.y[g] : ((g = "center"), E.intermediateY)),
            (n.style.top = t + "px");
        }
        return (
          (n.className = n.className.replace(
            /(top|center|bottom)-(left|center|right)/g,
            ""
          )),
          n.classList.add(
            ("center" === g ? g : "bottom") +
              "-" +
              ("center" === i ? i : "left" === i ? "right" : "left")
          ),
          {
            width: r,
            height: c,
          }
        );
      }
      let L = !1,
        y = 0;
      function S() {
        y && clearTimeout(y),
          (y = window.setTimeout(() => {
            (y = 0), (L = !1);
          }, 400)),
          (L = !0);
      }
      function I(t, e, n) {
        const i = n ? n.add(t) : t.addEventListener.bind(t),
          o = n ? n.removeManual.bind(n, t) : t.removeEventListener.bind(t);
        if (c.IS_APPLE && r.IS_TOUCH_SUPPORTED) {
          let n;
          const a = {
              capture: !0,
            },
            r = () => {
              clearTimeout(n),
                o("touchmove", r, a),
                o("touchend", r, a),
                o("touchcancel", r, a);
            };
          i("touchstart", (o) => {
            o.touches.length > 1
              ? r()
              : (i("touchmove", r, a),
                i("touchend", r, a),
                i("touchcancel", r, a),
                (n = window.setTimeout(() => {
                  L
                    ? r()
                    : (e(o.touches[0]),
                      r(),
                      g &&
                        t.addEventListener("touchend", s.a, {
                          once: !0,
                        }));
                }, 400)));
          });
        } else
          i(
            "contextmenu",
            r.IS_TOUCH_SUPPORTED
              ? (n) => {
                  e(n),
                    g &&
                      t.addEventListener("touchend", s.a, {
                        once: !0,
                      });
                }
              : e
          );
      }
    },
    71: function (t, e, n) {
      "use strict";
      var i = n(30),
        s = n(0),
        o = n(41),
        a = n(8),
        r = n(5),
        c = n(171),
        d = n(59);
      const l = new (class {
        constructor() {
          (this.navigations = []),
            (this.id = Date.now()),
            (this.manual = !1),
            (this.log = Object(o.b)("NC")),
            (this.debug = !0),
            (this.currentHash = window.location.hash);
          let t = !1;
          if (
            (window.addEventListener("popstate", (e) => {
              if (
                (this.debug && this.log("popstate", e, t),
                window.location.hash !== this.currentHash)
              )
                return (
                  this.onHashChange && this.onHashChange(),
                  void this.replaceState()
                );
              this.currentHash = window.location.hash;
              if (e.state !== this.id) return void this.pushState();
              const n = this.navigations.pop();
              n ? ((this.manual = !t), this.handleItem(n)) : this.pushState();
            }),
            window.addEventListener(
              "keydown",
              (t) => {
                const e = this.navigations[this.navigations.length - 1];
                e &&
                  ("Escape" !== t.key ||
                    (e.onEscape && !e.onEscape()) ||
                    (Object(r.a)(t), this.back(e.type)));
              },
              {
                capture: !0,
                passive: !1,
              }
            ),
            s.IS_MOBILE_SAFARI)
          ) {
            const e = {
              passive: !0,
            };
            window.addEventListener(
              "touchstart",
              (e) => {
                e.touches.length > 1 ||
                  (this.debug && this.log("touchstart"),
                  Object(c.a)(e) &&
                    ((t = !0),
                    window.addEventListener(
                      "touchend",
                      () => {
                        setTimeout(() => {
                          t = !1;
                        }, 100);
                      },
                      {
                        passive: !0,
                        once: !0,
                      }
                    )));
              },
              e
            );
          }
          (history.scrollRestoration = "manual"), this.pushState();
        }
        handleItem(t) {
          const e = t.onPop(!!this.manual && void 0);
          this.debug && this.log("popstate, navigation:", t, this.navigations),
            !1 === e ? this.pushItem(t) : t.noBlurOnPop || Object(a.a)(),
            (this.manual = !1);
        }
        findItemByType(t) {
          for (let e = this.navigations.length - 1; e >= 0; --e) {
            const n = this.navigations[e];
            if (n.type === t)
              return {
                item: n,
                index: e,
              };
          }
        }
        back(t) {
          if (t) {
            const e = this.findItemByType(t);
            if (e) return void this.backByItem(e.item, e.index);
          }
          history.back();
        }
        backByItem(t, e = this.navigations.indexOf(t)) {
          (this.manual = !0), this.navigations.splice(e, 1), this.handleItem(t);
        }
        onItemAdded(t) {
          this.debug && this.log("pushstate", t, this.navigations),
            t.noHistory || this.pushState();
        }
        pushItem(t) {
          this.navigations.push(t), this.onItemAdded(t);
        }
        unshiftItem(t) {
          this.navigations.unshift(t), this.onItemAdded(t);
        }
        pushState() {
          (this.manual = !1), history.pushState(this.id, "");
        }
        replaceState() {
          history.replaceState(
            this.id,
            "",
            location.origin + location.pathname
          );
        }
        removeItem(t) {
          t && Object(d.a)(this.navigations, t);
        }
        removeByType(t, e = !1) {
          for (let n = this.navigations.length - 1; n >= 0; --n) {
            if (
              this.navigations[n].type === t &&
              (this.navigations.splice(n, 1), e)
            )
              break;
          }
        }
      })();
      (i.a.appNavigationController = l), (e.a = l);
    },
    82: function (t, e, n) {
      "use strict";
      function i(t, e) {
        const n = new Event(e, {
          bubbles: !0,
          cancelable: !0,
        });
        t.dispatchEvent(n);
      }
      n.d(e, "a", function () {
        return i;
      });
    },
  },
]);
//# sourceMappingURL=3.783454d94e8eb002e387.chunk.js.map
