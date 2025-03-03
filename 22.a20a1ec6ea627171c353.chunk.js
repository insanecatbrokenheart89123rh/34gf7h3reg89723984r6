(this.webpackJsonp = this.webpackJsonp || []).push([
  [22],
  {
    115: function (e, t, s) {
      "use strict";
      function a(e, t) {
        const s = t.split(".");
        let a = e;
        return (
          s.forEach((e) => {
            e && (a = a[e]);
          }),
          a
        );
      }
      s.d(t, "a", function () {
        return a;
      });
    },
    141: function (e, t, s) {
      "use strict";
      function a(e, t) {
        (e = e.split(" ", 1)[0]), (t = t.split(" ", 1)[0]);
        const s = e.split("."),
          a = t.split(".");
        for (let e = 0; e < s.length; ++e) {
          const t = +s[e],
            n = +a[e];
          if (t > n) return 1;
          if (t < n) return -1;
        }
        return 0;
      }
      s.d(t, "a", function () {
        return a;
      });
    },
    142: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      var a = s(53),
        n = s(86);
      function i(e, t, s, o) {
        for (const r in e)
          typeof t[r] != typeof e[r]
            ? ((t[r] = Object(a.a)(e[r])), s && s(o || r))
            : Object(n.a)(e[r]) && i(e[r], t[r], s, o || r);
      }
    },
    17: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "STATE_INIT", function () {
          return _;
        }),
        s.d(t, "AppStateManager", function () {
          return O;
        });
      var a = s(43),
        n = s(50),
        i = s(15),
        o = s(91),
        r = s(41),
        h = s(7),
        d = s(30),
        c = s(105),
        l = s(0),
        u = s(140),
        g = s(75),
        p = s(67),
        f = s(141);
      var b = s(53),
        m = s(115);
      var S = s(142),
        v = function (e, t, s, a) {
          return new (s || (s = Promise))(function (n, i) {
            function o(e) {
              try {
                h(a.next(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              try {
                h(a.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function h(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(o, r);
            }
            h((a = a.apply(e, t || [])).next());
          });
        };
      const y = h.a.version,
        P = h.a.build,
        _ = {
          allDialogsLoaded: {},
          pinnedOrders: {},
          contactsList: [],
          updates: {},
          filters: {},
          maxSeenMsgId: 0,
          stateCreatedTime: Date.now(),
          recentEmoji: [],
          topPeersCache: {},
          recentSearch: [],
          version: y,
          build: P,
          authState: {
            _: l.IS_MOBILE ? "authStateSignIn" : "authStateSignQr",
          },
          hiddenPinnedMessages: {},
          settings: {
            messagesTextSize: 16,
            distanceUnit: "kilometers",
            sendShortcut: "enter",
            animationsEnabled: !0,
            autoDownload: {
              photo: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0,
              },
              video: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0,
              },
              file: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0,
              },
            },
            autoDownloadNew: {
              _: "autoDownloadSettings",
              file_size_max: 3145728,
              pFlags: {
                video_preload_large: !0,
                audio_preload_next: !0,
              },
              photo_size_max: 1048576,
              video_size_max: 15728640,
              video_upload_maxbitrate: 100,
            },
            autoPlay: {
              gifs: !0,
              videos: !0,
            },
            stickers: {
              suggest: !0,
              loop: !0,
            },
            emoji: {
              suggest: !0,
              big: !0,
            },
            themes: [
              {
                name: "day",
                background: {
                  blur: !1,
                  slug: "pattern",
                  color: "#dbddbb,#6ba587,#d5d88d,#88b884",
                  highlightningColor: "hsla(86.4, 43.846153%, 45.117647%, .4)",
                  intensity: 50,
                  id: "1",
                },
              },
              {
                name: "night",
                background: {
                  blur: !1,
                  slug: "pattern",
                  color: "#fec496,#dd6cb9,#962fbf,#4f5bd5",
                  highlightningColor:
                    "hsla(299.142857, 44.166666%, 37.470588%, .4)",
                  intensity: -50,
                  id: "-1",
                },
              },
            ],
            theme: "system",
            notifications: {
              sound: !1,
            },
            timeFormat: new Date().toLocaleString().match(/\s(AM|PM)/)
              ? "h12"
              : "h23",
          },
          keepSigned: !0,
          chatContextMenuHintWasShown: !1,
          stateId: Object(p.a)(32),
          notifySettings: {},
        },
        w = Object.keys(_),
        T = [
          "contactsList",
          "stateCreatedTime",
          "maxSeenMsgId",
          "filters",
          "topPeers",
        ];
      class O extends n.a {
        constructor() {
          super(),
            (this.log = Object(r.b)("STATE")),
            (this.neededPeers = new Map()),
            (this.singlePeerMap = new Map()),
            (this.storages = {
              users: new c.a(u.a, "users"),
              chats: new c.a(u.a, "chats"),
              dialogs: new c.a(u.a, "dialogs"),
            }),
            (this.storagesResults = {}),
            (this.storage = o.a),
            this.loadSavedState(),
            i.default.addEventListener("user_auth", () => {
              this.requestPeerSingle(i.default.myId, "self");
            });
        }
        loadSavedState() {
          return (
            this.loaded ||
              (console.time("load state"),
              (this.loaded = new Promise((e) => {
                const t = Object.keys(this.storages),
                  s = t.map((e) => this.storages[e].getAll()),
                  a = w
                    .map((e) => o.a.get(e))
                    .concat(g.a.get("user_auth"), g.a.get("state_id"))
                    .concat(o.a.get("user_auth"))
                    .concat(s);
                Promise.all(a)
                  .then((s) =>
                    v(this, void 0, void 0, function* () {
                      let a = (this.state = {});
                      for (let e = 0, t = w.length; e < t; ++e) {
                        const t = w[e],
                          n = s[e];
                        void 0 !== n
                          ? (a[t] = n)
                          : this.pushToState(t, Object(b.a)(_[t]));
                      }
                      s.splice(0, w.length);
                      let n = s.shift();
                      const r = s.shift(),
                        c = s.shift();
                      if (!n && c) {
                        n = c;
                        const e = ["dc", "server_time_offset", "xt_instance"];
                        for (let t = 1; t <= 5; ++t)
                          e.push(`dc${t}_server_salt`),
                            e.push(`dc${t}_auth_key`);
                        const t = yield Promise.all(e.map((e) => o.a.get(e)));
                        e.push("user_auth"),
                          t.push(
                            "number" == typeof n || "string" == typeof n
                              ? {
                                  dcID: t[0] || h.a.baseDcId,
                                  date: (Date.now() / 1e3) | 0,
                                  id: n.toPeerId(!1),
                                }
                              : n
                          );
                        let s = {};
                        e.forEach((e, a) => {
                          s[e] = t[a];
                        }),
                          yield g.a.set(s);
                      }
                      n &&
                        ((a.authState = {
                          _: "authStateSignedIn",
                        }),
                        i.default.dispatchEvent(
                          "user_auth",
                          "number" == typeof n || "string" == typeof n
                            ? {
                                dcID: 0,
                                date: (Date.now() / 1e3) | 0,
                                id: n.toPeerId(!1),
                              }
                            : n
                        ));
                      for (let e = 0, a = t.length; e < a; ++e)
                        this.storagesResults[t[e]] = s[e];
                      if ((s.splice(0, t.length), a.stateId !== r)) {
                        if (void 0 !== r) {
                          const e = new Map([
                            ["authState", void 0],
                            ["stateId", void 0],
                          ]);
                          e.forEach((t, s) => {
                            e.set(s, Object(b.a)(a[s]));
                          }),
                            (a = this.state = Object(b.a)(_)),
                            e.forEach((e, t) => {
                              a[t] = e;
                            });
                          for (const e in this.storagesResults)
                            this.storagesResults[e].length = 0;
                          this.storage.set(a);
                        }
                        yield g.a.set({
                          state_id: a.stateId,
                        });
                      }
                      const l = Date.now();
                      if (a.stateCreatedTime + 864e5 < l) {
                        d.b &&
                          this.log("will refresh state", a.stateCreatedTime, l);
                        ((e) => {
                          e.forEach((e) => {
                            this.pushToState(e, Object(b.a)(_[e]));
                            const t = this.storagesResults[e];
                            t && t.length && (t.length = 0);
                          });
                        })(T);
                      }
                      if (
                        (!a.settings.hasOwnProperty("theme") &&
                          a.settings.hasOwnProperty("nightTheme") &&
                          ((a.settings.theme = a.settings.nightTheme
                            ? "night"
                            : "day"),
                          this.pushToState("settings", a.settings)),
                        !a.settings.hasOwnProperty("themes") &&
                          a.settings.background)
                      ) {
                        a.settings.themes = Object(b.a)(_.settings.themes);
                        const e = a.settings.themes.find(
                          (e) => e.name === a.settings.theme
                        );
                        e &&
                          ((e.background = a.settings.background),
                          this.pushToState("settings", a.settings));
                      }
                      const u = a.settings.autoDownload;
                      if (void 0 !== (null == u ? void 0 : u.private)) {
                        const e = ["contacts", "private", "groups", "channels"];
                        ["photo", "video", "file"].forEach((t) => {
                          const s = (u[t] = {});
                          e.forEach((e) => {
                            s[e] = u[e];
                          });
                        }),
                          e.forEach((e) => {
                            delete u[e];
                          }),
                          this.pushToState("settings", a.settings);
                      }
                      if (
                        (Object(S.a)(_, a, (e) => {
                          this.pushToState(e, a[e]);
                        }),
                        a.version !== y || a.build !== P)
                      ) {
                        if (-1 === Object(f.a)(a.version, "0.8.7")) {
                          (this.state.allDialogsLoaded = Object(b.a)(
                            _.allDialogsLoaded
                          )),
                            (this.state.filters = Object(b.a)(_.filters));
                          const e = this.storagesResults.dialogs;
                          (null == e ? void 0 : e.length) && (e.length = 0);
                        }
                        if (-1 === Object(f.a)(a.version, "1.3.0")) {
                          let e = !1;
                          a.settings.themes.forEach((t, s, a) => {
                            if (
                              ("day" === t.name &&
                                "ByxGo2lrMFAIAAAAmkJxZabh8eM" ===
                                  t.background.slug &&
                                "image" === t.background.type) ||
                              ("night" === t.name &&
                                "#0f0f0f" === t.background.color &&
                                "color" === t.background.type)
                            ) {
                              const n = _.settings.themes.find(
                                (e) => e.name === t.name
                              );
                              n && ((a[s] = Object(b.a)(n)), (e = !0));
                            }
                          }),
                            e && this.pushToState("settings", a.settings);
                        }
                        0 !== Object(f.a)(a.version, y) &&
                          (this.newVersion = y),
                          this.pushToState("version", y),
                          this.pushToState("build", P);
                      }
                      (i.default.settings = a.settings),
                        d.b && this.log("state res", a, Object(b.a)(a)),
                        console.timeEnd("load state"),
                        e(a);
                    })
                  )
                  .catch(e);
              }))),
            this.loaded
          );
        }
        getState() {
          return void 0 === this.state
            ? this.loadSavedState()
            : Promise.resolve(this.state);
        }
        setByKey(e, t) {
          !(function (e, t, s) {
            const a = t.split(".");
            Object(m.a)(e, a.slice(0, -1).join("."))[a.pop()] = s;
          })(this.state, e, t),
            i.default.dispatchEvent("settings_updated", {
              key: e,
              value: t,
            });
          const s = e.split(".")[0];
          this.pushToState(s, this.state[s]);
        }
        pushToState(e, t, s = !0) {
          s && (this.state[e] = t), this.setKeyValueToStorage(e, t);
        }
        setKeyValueToStorage(e, t = this.state[e]) {
          this.storage.set({
            [e]: t,
          });
        }
        requestPeer(e, t, s) {
          let a = this.neededPeers.get(e);
          (a && a.has(t)) ||
            (a || ((a = new Set()), this.neededPeers.set(e, a)),
            a.add(t),
            this.dispatchEvent("peerNeeded", e),
            void 0 !== s && this.keepPeerSingle(e, t));
        }
        requestPeerSingle(e, t, s = e) {
          return this.requestPeer(e, t + "_" + s, 1);
        }
        releaseSinglePeer(e, t) {
          return this.keepPeerSingle(a.c, t + "_" + e);
        }
        isPeerNeeded(e) {
          return this.neededPeers.has(e);
        }
        keepPeerSingle(e, t) {
          const s = this.singlePeerMap.get(t);
          if (s && s !== e && this.neededPeers.has(s)) {
            const e = this.neededPeers.get(s);
            e.delete(t),
              e.size ||
                (this.neededPeers.delete(s),
                this.dispatchEvent("peerUnneeded", s));
          }
          e ? this.singlePeerMap.set(t, e) : this.singlePeerMap.delete(t);
        }
      }
      O.STATE_INIT = _;
      const j = new O();
      d.a.appStateManager = j;
      t.default = j;
    },
  },
]);
//# sourceMappingURL=22.a20a1ec6ea627171c353.chunk.js.map
