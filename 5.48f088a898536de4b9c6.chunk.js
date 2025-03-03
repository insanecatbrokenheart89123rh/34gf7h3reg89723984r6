(this.webpackJsonp = this.webpackJsonp || []).push([
  [5],
  Array(37).concat([
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(172),
        n = s(62),
        r = s(59),
        o = s(52),
        d = s(148);
      function c(e) {
        return (e && e.toLowerCase()) || "";
      }
      var l = s(58),
        h = s(94),
        u = s(86),
        p = s(120),
        g = s(130),
        f = s(16),
        m = s(32),
        v = s(43),
        _ = s(79),
        y = s(31),
        I = s(15),
        P = s(134),
        S = s(65),
        M = s(47),
        b = s(40),
        w = s(17);
      const C = new (class {
        constructor() {
          (this.storage = w.default.storages.users),
            (this.updateUsersStatuses = () => {
              const e = Object(l.h)(!0);
              for (const t in this.users) {
                const s = this.users[t];
                this.updateUserStatus(s, e);
              }
            }),
            this.clear(!0),
            setInterval(this.updateUsersStatuses, 6e4),
            I.default.addEventListener(
              "state_synchronized",
              this.updateUsersStatuses
            ),
            I.default.addMultipleEventsListeners({
              updateUserStatus: (e) => {
                const t = e.user_id,
                  s = this.users[t];
                s &&
                  ((s.status = e.status),
                  s.status &&
                    ("expires" in s.status &&
                      (s.status.expires -= _.a.serverTimeOffset),
                    "was_online" in s.status &&
                      (s.status.was_online -= _.a.serverTimeOffset)),
                  I.default.dispatchEvent("user_update", t),
                  this.setUserToStateIfNeeded(s));
              },
              updateUserPhoto: (e) => {
                var t, s;
                const i = e.user_id,
                  a = this.users[i];
                if (a) {
                  if (
                    (null === (t = a.photo) || void 0 === t
                      ? void 0
                      : t.photo_id) ===
                    (null === (s = e.photo) || void 0 === s
                      ? void 0
                      : s.photo_id)
                  )
                    return;
                  this.forceUserOnline(i, e.date),
                    "userProfilePhotoEmpty" === e.photo._
                      ? delete a.photo
                      : (a.photo = Object(p.a)(a.photo, e.photo)),
                    this.setUserToStateIfNeeded(a),
                    I.default.dispatchEvent("user_update", i),
                    I.default.dispatchEvent("avatar_update", i.toPeerId());
                } else console.warn("No user by id:", i);
              },
              updateUserName: (e) => {
                const t = e.user_id,
                  s = this.users[t];
                s &&
                  (this.forceUserOnline(t),
                  this.saveApiUser(
                    Object.assign(Object.assign({}, s), {
                      first_name: e.first_name,
                      last_name: e.last_name,
                      username: e.username,
                    }),
                    !0
                  ));
              },
            }),
            I.default.addEventListener("language_change", (e) => {
              const t = this.getSelf().id;
              this.contactsIndex.indexObject(t, this.getUserSearchText(t));
            }),
            w.default.getState().then((e) => {
              const t = w.default.storagesResults.users;
              if (t.length)
                for (let e = 0, s = t.length; e < s; ++e) {
                  const s = t[e];
                  s && ((this.users[s.id] = s), this.setUserNameToCache(s));
                }
              const s = e.contactsList;
              s &&
                Array.isArray(s) &&
                (s.forEach((e) => {
                  this.pushContact(e);
                }),
                s.length &&
                  ((this.contactsFillPromise = Object(o.a)()),
                  this.contactsFillPromise.resolve(this.contactsList))),
                w.default.addEventListener("peerNeeded", (e) => {
                  if (!b.a.isUser(e)) return;
                  const t = e.toUserId();
                  this.storage.getFromCache(t) ||
                    this.storage.set({ [t]: this.getUser(t) });
                }),
                w.default.addEventListener("peerUnneeded", (e) => {
                  if (!b.a.isUser(e)) return;
                  const t = e.toUserId();
                  this.storage.getFromCache(t) && this.storage.delete(t);
                });
            });
        }
        clear(e = !1) {
          if (e) (this.users = {}), (this.usernames = {});
          else {
            const e = w.default.storagesResults.users;
            for (const t in this.users) {
              if (!t) continue;
              const s = t.toPeerId();
              if (!w.default.isPeerNeeded(s)) {
                const s = this.users[t];
                s.username && delete this.usernames[c(s.username)],
                  Object(n.a)(e, (e) => e.id === t),
                  this.storage.delete(t),
                  delete this.users[t];
              }
            }
          }
          (this.getTopPeersPromises = {}),
            (this.contactsIndex = this.createSearchIndex()),
            (this.contactsFillPromise = void 0),
            (this.contactsList = new Set()),
            (this.updatedContactsList = !1);
        }
        onContactsModified() {
          const e = [...this.contactsList];
          w.default.pushToState("contactsList", e);
        }
        fillContacts() {
          var e;
          if (this.contactsFillPromise && this.updatedContactsList)
            return {
              cached: this.contactsFillPromise.isFulfilled,
              promise: this.contactsFillPromise,
            };
          this.updatedContactsList = !0;
          const t = Object(o.a)();
          return (
            m.a.invokeApi("contacts.getContacts").then(
              (e) => {
                "contacts.contacts" === e._ &&
                  (this.contactsList.clear(),
                  this.saveApiUsers(e.users),
                  e.contacts.forEach((e) => {
                    this.pushContact(e.user_id);
                  }),
                  this.onContactsModified(),
                  (this.contactsFillPromise = t)),
                  t.resolve(this.contactsList);
              },
              () => {
                this.updatedContactsList = !1;
              }
            ),
            {
              cached:
                null === (e = this.contactsFillPromise) || void 0 === e
                  ? void 0
                  : e.isFulfilled,
              promise:
                this.contactsFillPromise || (this.contactsFillPromise = t),
            }
          );
        }
        resolveUsername(e) {
          return (
            "@" === e[0] && (e = e.slice(1)),
            (e = e.toLowerCase()),
            this.usernames[e]
              ? Promise.resolve(this.users[this.usernames[e]])
              : m.a
                  .invokeApi("contacts.resolveUsername", { username: e })
                  .then((e) => this.processResolvedPeer(e))
          );
        }
        processResolvedPeer(e) {
          return (
            this.saveApiUsers(e.users),
            M.a.saveApiChats(e.chats),
            b.a.getPeer(b.a.getPeerId(e.peer))
          );
        }
        resolvePhone(e) {
          return m.a
            .invokeApi("contacts.resolvePhone", { phone: e })
            .then((e) => this.processResolvedPeer(e));
        }
        pushContact(e) {
          this.contactsList.add(e),
            this.contactsIndex.indexObject(e, this.getUserSearchText(e)),
            w.default.requestPeerSingle(e.toPeerId(), "contact");
        }
        popContact(e) {
          this.contactsList.delete(e),
            this.contactsIndex.indexObject(e, ""),
            w.default.releaseSinglePeer(e.toPeerId(), "contact");
        }
        getUserSearchText(e) {
          const t = this.users[e];
          if (!t) return "";
          return [
            t.first_name,
            t.last_name,
            t.phone,
            t.username,
            t.pFlags.self ? f.default.format("SavedMessages", !0) : "",
            t.pFlags.self ? "Saved Messages" : "",
          ]
            .filter(Boolean)
            .join(" ");
        }
        getContacts(e, t = !1, s = "name") {
          return this.fillContacts().promise.then((i) => {
            let a = [...i];
            if (e) {
              const t = this.contactsIndex.search(e);
              a = [...a].filter((e) => t.has(e));
            }
            "name" === s
              ? a.sort((e, t) => {
                  const s = (this.users[e] || {}).sortName || "",
                    i = (this.users[t] || {}).sortName || "";
                  return s.localeCompare(i);
                })
              : "online" === s &&
                a.sort((e, t) => {
                  const s = C.getUserStatusForSort(C.getUser(e).status);
                  return C.getUserStatusForSort(C.getUser(t).status) - s;
                });
            const n = I.default.myId.toUserId();
            return (
              Object(r.a)(a, n), t && this.testSelfSearch(e) && a.unshift(n), a
            );
          });
        }
        getContactsPeerIds(e, t, s) {
          return this.getContacts(e, t, s).then((e) =>
            e.map((e) => e.toPeerId(!1))
          );
        }
        toggleBlock(e, t) {
          return m.a
            .invokeApiSingle(t ? "contacts.block" : "contacts.unblock", {
              id: b.a.getInputPeerById(e),
            })
            .then(
              (s) => (
                s &&
                  S.a.processLocalUpdate({
                    _: "updatePeerBlocked",
                    peer_id: b.a.getOutputPeer(e),
                    blocked: t,
                  }),
                s
              )
            );
        }
        testSelfSearch(e) {
          const t = this.getSelf(),
            s = this.createSearchIndex();
          return (
            s.indexObject(t.id, this.getUserSearchText(t.id)),
            s.search(e).has(t.id)
          );
        }
        createSearchIndex() {
          return new P.a({
            clearBadChars: !0,
            ignoreCase: !0,
            latinize: !0,
            includeTag: !0,
          });
        }
        saveApiUsers(e, t) {
          e.saved || ((e.saved = !0), e.forEach((e) => this.saveApiUser(e, t)));
        }
        setUserNameToCache(e, t) {
          if (!t || t.username !== e.username) {
            if (null == t ? void 0 : t.username) {
              const e = c(t.username);
              delete this.usernames[e];
            }
            if (e.username) {
              const t = c(e.username);
              this.usernames[t] = e.id;
            }
          }
        }
        saveApiUser(e, t) {
          var s, i;
          if ("userEmpty" === e._) return;
          const a = e.id,
            n = this.users[a];
          if (
            (void 0 === e.pFlags && (e.pFlags = {}),
            e.pFlags.min && void 0 !== n)
          )
            return;
          if (
            (this.setUserNameToCache(e, n),
            n &&
              void 0 !== n.initials &&
              void 0 !== n.sortName &&
              n.first_name === e.first_name &&
              n.last_name === e.last_name)
          )
            (e.sortName = n.sortName), (e.initials = n.initials);
          else {
            const t = e.first_name + (e.last_name ? " " + e.last_name : "");
            (e.sortName = e.pFlags.deleted ? "" : Object(d.b)(t, !1)),
              (e.initials = y.a.getAbbreviation(t));
          }
          e.status &&
            (e.status.expires && (e.status.expires -= _.a.serverTimeOffset),
            e.status.was_online &&
              (e.status.was_online -= _.a.serverTimeOffset));
          let r = !1,
            o = !1;
          if (void 0 === n) this.users[a] = e;
          else {
            (e.first_name === n.first_name &&
              e.last_name === n.last_name &&
              e.username === n.username) ||
              (o = !0);
            (null === (s = n.photo) || void 0 === s ? void 0 : s.photo_id) !==
              (null === (i = e.photo) || void 0 === i ? void 0 : i.photo_id) &&
              (r = !0);
            const t = !!n.pFlags.contact,
              d = !!e.pFlags.contact;
            Object(p.a)(n, e),
              I.default.dispatchEvent("user_update", a),
              t !== d && this.onContactUpdated(a, d, t);
          }
          r && I.default.dispatchEvent("avatar_update", e.id.toPeerId()),
            o && I.default.dispatchEvent("peer_title_edit", e.id.toPeerId()),
            this.setUserToStateIfNeeded(e);
        }
        setUserToStateIfNeeded(e) {
          w.default.isPeerNeeded(e.id.toPeerId()) &&
            this.storage.set({ [e.id]: e });
        }
        formatUserPhone(e) {
          return "+" + Object(h.a)(e).formatted;
        }
        isUserOnlineVisible(e) {
          return this.getUserStatusForSort(e) > 3;
        }
        getUserStatusForSort(e) {
          if (("object" != typeof e && (e = this.getUser(e).status), e)) {
            const t =
              "userStatusOnline" === e._
                ? e.expires
                : "userStatusOffline" === e._
                ? e.was_online
                : 0;
            if (t) return t;
            switch (e._) {
              case "userStatusRecently":
                return 3;
              case "userStatusLastWeek":
                return 2;
              case "userStatusLastMonth":
                return 1;
            }
          }
          return 0;
        }
        getUser(e) {
          return Object(u.a)(e)
            ? e
            : this.users[e] || {
                id: e,
                pFlags: { deleted: !0 },
                access_hash: "",
              };
        }
        getSelf() {
          return this.getUser(I.default.myId);
        }
        getUserStatusString(e) {
          var t;
          let s, i;
          switch (e) {
            case v.d:
              s = "Peer.RepliesNotifications";
              break;
            case v.e:
              s = "Peer.ServiceNotifications";
              break;
            default: {
              if (this.isBot(e)) {
                s = "Bot";
                break;
              }
              const a = this.getUser(e);
              if (!a) {
                s = "";
                break;
              }
              if (a.pFlags.support) {
                s = "SupportStatus";
                break;
              }
              switch (null === (t = a.status) || void 0 === t ? void 0 : t._) {
                case "userStatusRecently":
                  s = "Lately";
                  break;
                case "userStatusLastWeek":
                  s = "WithinAWeek";
                  break;
                case "userStatusLastMonth":
                  s = "WithinAMonth";
                  break;
                case "userStatusOffline": {
                  const e = a.status.was_online,
                    t = new Date(),
                    n = ((t.getTime() / 1e3) | 0) - e;
                  if (n < 60) s = "Peer.Status.justNow";
                  else if (n < 3600) {
                    s = "Peer.Status.minAgo";
                    i = [(n / 60) | 0];
                  } else if (
                    n < 86400 &&
                    t.getDate() === new Date(1e3 * e).getDate()
                  ) {
                    s = "LastSeen.HoursAgo";
                    i = [(n / 3600) | 0];
                  } else {
                    s = "Peer.Status.LastSeenAt";
                    const { dateEl: t, timeEl: a } = Object(l.e)(e);
                    i = [t, a];
                  }
                  break;
                }
                case "userStatusOnline":
                  s = "Online";
                  break;
                default:
                  s = "ALongTimeAgo";
              }
              break;
            }
          }
          return Object(f.i18n)(s, i);
        }
        isBot(e) {
          return this.users[e] && !!this.users[e].pFlags.bot;
        }
        isContact(e) {
          return (
            this.contactsList.has(e) ||
            !(!this.users[e] || !this.users[e].pFlags.contact)
          );
        }
        isRegularUser(e) {
          const t = this.users[e];
          return t && !this.isBot(e) && !t.pFlags.deleted && !t.pFlags.support;
        }
        isNonContactUser(e) {
          return (
            this.isRegularUser(e) &&
            !this.isContact(e) &&
            e.toPeerId() !== I.default.myId
          );
        }
        hasUser(e, t) {
          const s = this.users[e];
          return Object(u.a)(s) && (t || !s.pFlags.min);
        }
        canSendToUser(e) {
          const t = this.getUser(e);
          return !t.pFlags.deleted && t.id.toPeerId() !== v.d;
        }
        getUserPhoto(e) {
          const t = this.getUser(e);
          return (t && t.photo) || { _: "userProfilePhotoEmpty" };
        }
        getUserString(e) {
          const t = this.getUser(e);
          return "u" + e + (t.access_hash ? "_" + t.access_hash : "");
        }
        getUserInput(e) {
          const t = this.getUser(e);
          return t.pFlags && t.pFlags.self
            ? { _: "inputUserSelf" }
            : { _: "inputUser", user_id: e, access_hash: t.access_hash };
        }
        getUserInputPeer(e) {
          const t = this.getUser(e);
          return t.pFlags && t.pFlags.self
            ? { _: "inputPeerSelf" }
            : { _: "inputPeerUser", user_id: e, access_hash: t.access_hash };
        }
        getContactMediaInput(e) {
          const t = this.getUser(e);
          return {
            _: "inputMediaContact",
            first_name: t.first_name,
            last_name: t.last_name,
            phone_number: t.phone,
            vcard: "",
            user_id: e,
          };
        }
        updateUserStatus(e, t = Object(l.h)(!0)) {
          e.status &&
            "userStatusOnline" === e.status._ &&
            e.status.expires < t &&
            ((e.status = {
              _: "userStatusOffline",
              was_online: e.status.expires,
            }),
            I.default.dispatchEvent("user_update", e.id),
            this.setUserToStateIfNeeded(e));
        }
        forceUserOnline(e, t) {
          if (this.isBot(e)) return;
          const s = Object(l.h)(!0);
          if (t) {
            if (s - t >= 60) return;
          } else if (S.a.updatesState.syncLoading) return;
          const i = this.getUser(e);
          i &&
            i.status &&
            "userStatusOnline" !== i.status._ &&
            "userStatusEmpty" !== i.status._ &&
            !i.pFlags.support &&
            !i.pFlags.deleted &&
            ((i.status = { _: "userStatusOnline", expires: s + 60 }),
            I.default.dispatchEvent("user_update", e),
            this.setUserToStateIfNeeded(i));
        }
        importContact(e, t, s) {
          return this.importContacts([
            { first_name: e, last_name: t, phones: [s] },
          ]).then((e) => {
            if (!e.length) {
              const e = new Error();
              throw ((e.type = "NO_USER"), e);
            }
            return e[0];
          });
        }
        importContacts(e) {
          const t = [];
          for (let s = 0; s < e.length; ++s)
            for (let i = 0; i < e[s].phones.length; ++i)
              t.push({
                _: "inputPhoneContact",
                client_id: ((s << 16) | i).toString(10),
                phone: e[s].phones[i],
                first_name: e[s].first_name,
                last_name: e[s].last_name,
              });
          return m.a
            .invokeApi("contacts.importContacts", { contacts: t })
            .then((e) => {
              this.saveApiUsers(e.users);
              return e.imported.map(
                (e) => (this.onContactUpdated(e.user_id, !0), e.user_id)
              );
            });
        }
        getTopPeers(e) {
          return this.getTopPeersPromises[e]
            ? this.getTopPeersPromises[e]
            : (this.getTopPeersPromises[e] = w.default.getState().then((t) => {
                const s = t.topPeersCache[e];
                return s && s.cachedTime + 864e5 > Date.now() && s.peers
                  ? s.peers
                  : m.a
                      .invokeApi("contacts.getTopPeers", {
                        [e]: !0,
                        offset: 0,
                        limit: 15,
                        hash: "0",
                      })
                      .then((s) => {
                        let i = [];
                        return (
                          "contacts.topPeers" === s._ &&
                            (this.saveApiUsers(s.users),
                            M.a.saveApiChats(s.chats),
                            s.categories.length &&
                              (i = s.categories[0].peers.map((e) => {
                                const t = b.a.getPeerId(e.peer);
                                return (
                                  w.default.requestPeer(t, "topPeer"),
                                  { id: t, rating: e.rating }
                                );
                              }))),
                          (t.topPeersCache[e] = {
                            peers: i,
                            cachedTime: Date.now(),
                          }),
                          w.default.pushToState(
                            "topPeersCache",
                            t.topPeersCache
                          ),
                          i
                        );
                      });
              }));
        }
        getBlocked(e = 0, t = 0) {
          return m.a
            .invokeApiSingle("contacts.getBlocked", { offset: e, limit: t })
            .then((e) => {
              this.saveApiUsers(e.users), M.a.saveApiChats(e.chats);
              return {
                count:
                  "contacts.blocked" === e._
                    ? e.users.length + e.chats.length
                    : e.count,
                peerIds: e.users
                  .map((e) => e.id.toPeerId())
                  .concat(e.chats.map((e) => e.id.toPeerId(!0))),
              };
            });
        }
        getLocated(e, t, s, i = !1, a = 0) {
          const n = { _: "inputGeoPoint", lat: e, long: t, accuracy_radius: s };
          return m.a
            .invokeApi("contacts.getLocated", { geo_point: n, background: i })
            .then((e) => (S.a.processUpdateMessage(e), e));
        }
        searchContacts(e, t = 20) {
          const s = y.a.parseEntities(e);
          if (
            s.length &&
            s[0].length === e.trim().length &&
            "messageEntityUrl" === s[0]._
          )
            try {
              const t = new URL(y.a.wrapUrl(e).url).pathname.slice(1);
              t && (e = t);
            } catch (e) {}
          return m.a
            .invokeApiCacheable(
              "contacts.search",
              { q: e, limit: t },
              { cacheSeconds: 60 }
            )
            .then((e) => {
              this.saveApiUsers(e.users), M.a.saveApiChats(e.chats);
              return {
                my_results: Object(a.a)(
                  e.my_results.map((e) => b.a.getPeerId(e))
                ),
                results: e.results.map((e) => b.a.getPeerId(e)),
              };
            });
        }
        onContactUpdated(e, t, s = this.isContact(e)) {
          t !== s &&
            (t ? this.pushContact(e) : this.popContact(e),
            this.onContactsModified(),
            I.default.dispatchEvent("contacts_update", e));
        }
        updateUsername(e) {
          return m.a
            .invokeApi("account.updateUsername", { username: e })
            .then((e) => {
              this.saveApiUser(e);
            });
        }
        setUserStatus(e, t) {
          if (this.isBot(e)) return;
          const s = this.users[e];
          if (s) {
            const i = t
              ? { _: "userStatusOffline", was_online: Object(l.h)(!0) }
              : { _: "userStatusOnline", expires: Object(l.h)(!0) + 50 };
            (s.status = i),
              I.default.dispatchEvent("user_update", e),
              this.setUserToStateIfNeeded(s);
          }
        }
        addContact(e, t, s, i, a) {
          return m.a
            .invokeApi("contacts.addContact", {
              id: this.getUserInput(e),
              first_name: t,
              last_name: s,
              phone: i,
              add_phone_privacy_exception: a,
            })
            .then((t) => {
              S.a.processUpdateMessage(t, { override: !0 }),
                this.onContactUpdated(e, !0);
            });
        }
        deleteContacts(e) {
          return m.a
            .invokeApi("contacts.deleteContacts", {
              id: e.map((e) => this.getUserInput(e)),
            })
            .then((t) => {
              S.a.processUpdateMessage(t, { override: !0 }),
                e.forEach((e) => {
                  this.onContactUpdated(e, !1);
                });
            });
        }
        isRestricted(e) {
          const t = this.getUser(e),
            s = t.restriction_reason;
          return !!(t.pFlags.restricted && s && Object(g.c)(s));
        }
      })();
      i.a.appUsersManager = C;
      t.a = C;
    },
    ,
    function (e, t, s) {
      "use strict";
      var i = s(85),
        a = s(121),
        n = s(52),
        r = s(58),
        o = s(112),
        d = s(67),
        c = s(16),
        l = s(41),
        h = s(32),
        u = s(167),
        p = s(79),
        g = s(31),
        f = s(15),
        m = s(134),
        v = s(149),
        _ = s(43),
        y = s(2),
        I = s(105),
        P = s(68),
        S = s(59),
        M = s(150),
        b = s(175),
        w = s(120);
      class C {
        constructor(e, t, s, i, a, n, r, o, d, c) {
          (this.appMessagesManager = e),
            (this.appChatsManager = t),
            (this.appPeersManager = s),
            (this.appUsersManager = i),
            (this.appDraftsManager = a),
            (this.appNotificationsManager = n),
            (this.appStateManager = r),
            (this.apiUpdatesManager = o),
            (this.serverTimeManager = d),
            (this.appMessagesIdsManager = c),
            (this.folders = {}),
            (this.onUpdateFolderPeers = (e) => {
              e.folder_peers.forEach((e) => {
                var t;
                const { folder_id: s, peer: i } = e,
                  a = this.appPeersManager.getPeerId(i),
                  n = this.dropDialog(a)[0];
                n &&
                  ((null === (t = n.pFlags) || void 0 === t
                    ? void 0
                    : t.pinned) && this.handleDialogUnpinning(n, s),
                  (n.folder_id = s),
                  this.generateIndexForDialog(n),
                  this.pushDialog(n)),
                  this.appMessagesManager.scheduleHandleNewDialogs(a, n);
              });
            }),
            (this.onUpdateDialogPinned = (e) => {
              var t;
              const s = null !== (t = e.folder_id) && void 0 !== t ? t : 0,
                i = this.appPeersManager.getPeerId(e.peer.peer),
                a = this.getDialogOnly(i);
              a &&
                (e.pFlags.pinned
                  ? (a.pFlags.pinned = !0)
                  : this.handleDialogUnpinning(a, s),
                this.generateIndexForDialog(a)),
                this.appMessagesManager.scheduleHandleNewDialogs(i, a);
            }),
            (this.onUpdatePinnedDialogs = (e) => {
              var t;
              const s = null !== (t = e.folder_id) && void 0 !== t ? t : 0,
                i = (e) => {
                  (this.pinnedOrders[s].length = 0),
                    e.reverse(),
                    e.forEach((e) => {
                      a[e] = !0;
                      const t = this.getDialogOnly(e);
                      this.appMessagesManager.scheduleHandleNewDialogs(e, t),
                        t &&
                          ((t.pFlags.pinned = !0),
                          this.generateIndexForDialog(t));
                    });
                  const t = this.getFolderDialogs(s, !1);
                  for (const e of t) {
                    if (!e.pFlags.pinned) break;
                    const t = e.peerId;
                    a[t] || this.appMessagesManager.scheduleHandleNewDialogs(t);
                  }
                },
                a = {};
              e.order
                ? i(e.order.map((e) => this.appPeersManager.getPeerId(e.peer)))
                : h.a
                    .invokeApi("messages.getPinnedDialogs", { folder_id: s })
                    .then((e) => {
                      this.applyDialogs(e), i(e.dialogs.map((e) => e.peerId));
                    });
            }),
            (this.storage = this.appStateManager.storages.dialogs),
            (this.dialogs = this.storage.getCache()),
            this.clear(!0),
            f.default.addEventListener("language_change", () => {
              const e = i.getSelf().id.toPeerId(!1);
              if (this.getDialogOnly(e)) {
                const t = s.getPeerSearchText(e);
                this.dialogsIndex.indexObject(e, t);
              }
            });
          const l = (e) => {
            const t = this.getCachedDialogs(!1);
            for (let s = 0; s < t.length; ++s)
              this.processDialogForFilter(t[s], e);
          };
          f.default.addEventListener("filter_order", () => {
            const e = this.getCachedDialogs(!1);
            for (const e in this.folders) +e > 1 && delete this.folders[e];
            for (let t = 0; t < e.length; ++t) {
              const s = e[t];
              for (let e = 0; e <= 10; ++e) {
                s["index_" + e] = void 0;
              }
              this.processDialogForFilters(s);
            }
          }),
            f.default.addEventListener("filter_update", l),
            f.default.addEventListener("filter_new", l),
            f.default.addEventListener("filter_delete", (e) => {
              const t = this.getCachedDialogs(!1),
                s = "index_" + e.orderIndex;
              for (let e = 0; e < t.length; ++e) {
                delete t[e][s];
              }
              delete this.folders[e.id];
            }),
            f.default.addEventListener("dialog_notify_settings", (e) => {
              this.processDialogForFilters(e);
            }),
            f.default.addEventListener("chat_update", (e) => {
              const t = this.appChatsManager.getChat(e),
                s = e.toPeerId(!0);
              t.pFlags.left &&
                this.getDialogOnly(s) &&
                this.dropDialogOnDeletion(s);
            }),
            f.default.addMultipleEventsListeners({
              updateFolderPeers: this.onUpdateFolderPeers,
              updateDialogPinned: this.onUpdateDialogPinned,
              updatePinnedDialogs: this.onUpdatePinnedDialogs,
            }),
            r.getState().then((e) => {
              (this.pinnedOrders = e.pinnedOrders || {}),
                this.pinnedOrders[0] || (this.pinnedOrders[0] = []),
                this.pinnedOrders[1] || (this.pinnedOrders[1] = []);
              const t = r.storagesResults.dialogs;
              t.length &&
                I.a.freezeSaving(this.setDialogsFromState.bind(this, t), [
                  "chats",
                  "dialogs",
                  "messages",
                  "users",
                ]),
                (this.allDialogsLoaded = e.allDialogsLoaded || {});
            });
        }
        setDialogsFromState(e) {
          for (let t = 0, s = e.length; t < s; ++t) {
            const s = e[t];
            if (s) {
              (s.top_message = this.appMessagesIdsManager.getServerMessageId(
                s.top_message
              )),
                s.topMessage &&
                  this.appMessagesManager.saveMessages([s.topMessage]);
              for (let e = 0; e <= 10; ++e) delete s["index_" + e];
              this.saveDialog(s, void 0, !0);
              this.appMessagesManager.getMessageByPeer(s.peerId, s.top_message)
                .deleted &&
                this.appMessagesManager.reloadConversation(s.peerId);
            }
          }
        }
        isDialogsLoaded(e) {
          return !!this.allDialogsLoaded[e];
        }
        setDialogsLoaded(e, t) {
          void 0 === e && t
            ? ((this.allDialogsLoaded[0] = t), (this.allDialogsLoaded[1] = t))
            : (this.allDialogsLoaded[e] = t),
            this.allDialogsLoaded[0] &&
              this.allDialogsLoaded[1] &&
              (this.allDialogsLoaded[void 0] = !0),
            this.appStateManager.pushToState(
              "allDialogsLoaded",
              this.allDialogsLoaded
            );
        }
        clear(e = !1) {
          if (((this.pinnedOrders = { 0: [], 1: [] }), e))
            this.allDialogsLoaded = {};
          else {
            (this.appStateManager.storagesResults.dialogs.length = 0),
              this.storage.clear(),
              this.setDialogsLoaded(0, !1),
              this.setDialogsLoaded(1, !1),
              this.setDialogsLoaded(void 0, !1),
              this.savePinnedOrders();
          }
          (this.folders = {}),
            (this.dialogsOffsetDate = {}),
            (this.dialogsNum = 0),
            (this.dialogsIndex = new m.a({
              clearBadChars: !0,
              ignoreCase: !0,
              latinize: !0,
              includeTag: !0,
            })),
            (this.cachedResults = {
              query: "",
              count: 0,
              dialogs: [],
              folderId: 0,
            });
        }
        handleDialogUnpinning(e, t) {
          delete e.pFlags.pinned,
            Object(S.a)(this.pinnedOrders[t], e.peerId),
            this.savePinnedOrders();
        }
        savePinnedOrders() {
          this.appStateManager.pushToState("pinnedOrders", this.pinnedOrders);
        }
        resetPinnedOrder(e) {
          this.pinnedOrders[e] = [];
        }
        getPinnedOrders(e) {
          return this.pinnedOrders[e];
        }
        getOffsetDate(e) {
          const t = this.dialogsOffsetDate[e] || 0;
          return void 0 !== e || t
            ? t
            : Math.min(this.getOffsetDate(0), this.getOffsetDate(1));
        }
        getFolder(e) {
          var t;
          return null !== (t = this.folders[e]) && void 0 !== t
            ? t
            : (this.folders[e] = {
                dialogs: [],
                id: e,
                unreadMessagesCount: 0,
                unreadDialogsCount: 0,
              });
        }
        getFolderDialogs(e, t = !0) {
          if (void 0 === e) return this.getCachedDialogs(t);
          const s = this.getFolder(e);
          return t
            ? s.dialogs.filter((e) => void 0 === e.migratedTo)
            : s.dialogs;
        }
        getCachedDialogs(e) {
          return this.getFolderDialogs(0, e).concat(
            this.getFolderDialogs(1, e)
          );
        }
        setDialogIndexInFilter(e, t, s) {
          var i;
          let a;
          if (
            this.appMessagesManager.filtersStorage.testDialogForFilter(e, s)
          ) {
            const t = s.pinnedPeerIds.indexOf(e.peerId);
            a =
              -1 !== t
                ? this.generateDialogIndex(
                    this.generateDialogPinnedDateByIndex(
                      s.pinned_peers.length - 1 - t
                    ),
                    !0
                  )
                : (null === (i = e.pFlags) || void 0 === i ? void 0 : i.pinned)
                ? this.generateIndexForDialog(e, !0)
                : e.index;
          }
          return (e[t] = a);
        }
        getDialog(e, t, s = !0) {
          const i = [];
          void 0 === t
            ? i.push(this.getFolder(0).dialogs, this.getFolder(1).dialogs)
            : i.push(this.getFolderDialogs(t, !1));
          for (let t of i) {
            let i = 0,
              a = 0;
            for (let n = t.length; i < n; ++i) {
              const n = t[i];
              if (n.peerId === e) return [n, i - a];
              s && void 0 !== n.migratedTo && ++a;
            }
          }
          return [];
        }
        getDialogOnly(e) {
          return this.dialogs[e];
        }
        generateDialogIndex(e, t) {
          return (
            void 0 === e &&
              (e = Object(r.h)(!0) + this.serverTimeManager.serverTimeOffset),
            65536 * e + (t ? 0 : 65535 & ++this.dialogsNum)
          );
        }
        processDialogForFilters(e) {
          const t = this.appMessagesManager.filtersStorage.filters;
          for (const s in t) {
            const i = t[s];
            this.processDialogForFilter(e, i);
          }
        }
        processDialogForFilter(e, t) {
          const s = this.getDialogIndexKey(t.id),
            i = this.getFolder(t.id).dialogs,
            a = i.findIndex((t) => t.peerId === e.peerId),
            n = i[a],
            r = n && n[s],
            o = this.setDialogIndexInFilter(e, s, t);
          r !== o &&
            (((!r && o) || (a && !o)) &&
              this.prepareFolderUnreadCountModifyingByDialog(t.id, e, !!o),
            -1 !== a && i.splice(a, 1),
            o && Object(M.a)(i, e, s, -1));
        }
        prepareDialogUnreadCountModifying(e) {
          const t = [
              this.prepareFolderUnreadCountModifyingByDialog(e.folder_id, e),
            ],
            s = this.appMessagesManager.filtersStorage.filters;
          for (const i in s) {
            const a = s[i];
            this.appMessagesManager.filtersStorage.testDialogForFilter(e, a) &&
              t.push(this.prepareFolderUnreadCountModifyingByDialog(a.id, e));
          }
          return () => t.forEach((e) => e());
        }
        prepareFolderUnreadCountModifyingByDialog(e, t, s) {
          const i = this.appMessagesManager.getDialogUnreadCount(t);
          if (void 0 === s)
            return () => {
              const s = this.appMessagesManager.getDialogUnreadCount(t),
                a = s - i,
                n = (s && !i) || (!s && i) ? (i ? -1 : 1) : 0;
              this.modifyFolderUnreadCount(e, a, n);
            };
          this.modifyFolderUnreadCount(e, s ? i : -i, i ? (s ? 1 : -1) : 0);
        }
        modifyFolderUnreadCount(e, t, s) {
          if (!t && !s) return;
          const i = this.getFolder(e);
          t && (i.unreadMessagesCount = Math.max(0, i.unreadMessagesCount + t)),
            s && (i.unreadDialogsCount = Math.max(0, i.unreadDialogsCount + s)),
            void 0 === i.dispatchUnreadTimeout &&
              (i.dispatchUnreadTimeout = y.a.setTimeout(() => {
                (i.dispatchUnreadTimeout = void 0),
                  f.default.dispatchEvent("folder_unread", i);
              }, 0));
        }
        generateIndexForDialog(e, t = !1, s) {
          var i;
          let a,
            n = 0;
          if (e.pFlags.pinned && !t)
            (n = this.generateDialogPinnedDate(e)), (a = !0);
          else {
            s ||
              (s = this.appMessagesManager.getMessageByPeer(
                e.peerId,
                e.top_message
              )),
              (n = s.date || n);
            const t =
              this.appPeersManager.isChannel(e.peerId) && e.peerId.toChatId();
            if (t) {
              const e = this.appChatsManager.getChat(t);
              (!n || (e.date && e.date > n)) && (n = e.date);
            }
            "draftMessage" ===
              (null === (i = e.draft) || void 0 === i ? void 0 : i._) &&
              e.draft.date > n &&
              (n = e.draft.date);
          }
          n || (n = Object(r.h)(!0));
          const o = this.generateDialogIndex(n, a);
          if (t) return o;
          e.index = o;
        }
        generateDialogPinnedDateByIndex(e) {
          return 2147418112 + (65535 & e);
        }
        generateDialogPinnedDate(e) {
          const t = this.pinnedOrders[e.folder_id],
            s = t.indexOf(e.peerId);
          let i = s;
          return (
            -1 === s && ((i = t.push(e.peerId) - 1), this.savePinnedOrders()),
            this.generateDialogPinnedDateByIndex(i)
          );
        }
        setDialogToState(e) {
          const { peerId: t, pts: s } = e,
            i = this.appMessagesManager.getHistoryStorage(t),
            a = this.appMessagesManager.getMessagesStorage(t),
            n = i.history.slice;
          let r;
          for (let e = 0, s = n.length; e < s; ++e) {
            const s = n[e],
              i = this.appMessagesManager.getMessageFromStorage(a, s);
            if (!i.pFlags.is_outgoing && !i.deleted) {
              r = i;
              const e = i.viaBotId || i.fromId;
              e !== t &&
                this.appStateManager.requestPeerSingle(e, "topMessage", t);
              break;
            }
          }
          if (((e.topMessage = r), t.isAnyChat() && s)) {
            const i = this.apiUpdatesManager.getChannelState(
              t.toChatId(),
              s
            ).pts;
            e.pts = i;
          }
          this.storage.set({ [t]: e }),
            this.appStateManager.requestPeerSingle(t, "dialog");
        }
        pushDialog(e, t, s, i) {
          const { folder_id: a, peerId: n } = e,
            r = this.getFolderDialogs(a, !1),
            o = r.findIndex((e) => e.peerId === n);
          if (
            (-1 !== o && r.splice(o, 1),
            (this.dialogs[n] = e),
            this.setDialogToState(e),
            void 0 === t && (t = this.getDialogOffsetDate(e)),
            this.processDialogForFilters(e),
            t && !e.pFlags.pinned)
          ) {
            if (i) {
              const e = this.dialogsOffsetDate[void 0];
              (!e || t < e) && (this.dialogsOffsetDate[void 0] = t);
            }
            const n = this.dialogsOffsetDate[a];
            if (!n || t < n) {
              if (!s && !this.isDialogsLoaded(a))
                return void this.clearDialogFromState(e, !0);
              this.dialogsOffsetDate[a] = t;
            }
          }
          -1 === o && this.prepareFolderUnreadCountModifyingByDialog(a, e, !0),
            Object(M.a)(r, e, "index", -1);
        }
        dropDialog(e) {
          const t = this.getDialog(e, void 0, !1),
            [s, i] = t;
          if (s) {
            delete this.dialogs[e];
            this.getFolder(s.folder_id).dialogs.splice(i, 1);
            const t = void 0 !== Object(S.a)(this.pinnedOrders[s.folder_id], e);
            this.processDialogForFilters(s),
              this.dialogsIndex.indexObject(e, ""),
              t && this.savePinnedOrders(),
              this.clearDialogFromState(s, !1);
          }
          return t;
        }
        clearDialogFromState(e, t) {
          const s = e.peerId;
          this.appStateManager.releaseSinglePeer(s, "topMessage"),
            this.appStateManager.releaseSinglePeer(s, "dialog"),
            this.storage.delete(s, t);
        }
        dropDialogWithEvent(e) {
          const t = this.dropDialog(e);
          return (
            t.length &&
              f.default.dispatchEvent("dialog_drop", {
                peerId: e,
                dialog: t[0],
              }),
            t
          );
        }
        dropDialogOnDeletion(e) {
          this.dropDialogWithEvent(e),
            f.default.dispatchEvent("peer_deleted", e);
        }
        applyDialogs(e) {
          Object(P.a)(e.dialogs, (t, s) => {
            "dialogFolder" === t._ && e.dialogs.splice(s, 1);
          }),
            this.appUsersManager.saveApiUsers(e.users),
            this.appChatsManager.saveApiChats(e.chats),
            this.appMessagesManager.saveMessages(e.messages);
          const t = {};
          e.dialogs.forEach((e) => {
            const s = this.appPeersManager.getPeerId(e.peer);
            let i = e.top_message;
            const a = this.appMessagesManager.pendingTopMsgs[s];
            a &&
              (!i ||
                this.appMessagesManager.getMessageByPeer(s, a).date >
                  this.appMessagesManager.getMessageByPeer(s, i).date) &&
              ((e.top_message = i = a),
              (this.appMessagesManager.getHistoryStorage(s).maxId = a)),
              i || (e.draft && "draftMessage" === e.draft._)
                ? (this.saveDialog(e), (t[s] = e))
                : this.dropDialogWithEvent(s);
            const n = this.appMessagesManager.newUpdatesAfterReloadToHandle[s];
            if (void 0 !== n) {
              for (const e of n)
                n.delete(e), this.apiUpdatesManager.saveUpdate(e);
              n.size ||
                delete this.appMessagesManager.newUpdatesAfterReloadToHandle[s];
            }
          }),
            Object.keys(t).length &&
              f.default.dispatchEvent("dialogs_multiupdate", t);
        }
        getDialogOffsetDate(e) {
          return (
            this.appMessagesManager.getMessageByPeer(e.peerId, e.top_message)
              .date || 0
          );
        }
        saveDialog(e, t, s, i) {
          var a, n;
          void 0 === t &&
            (t = null !== (a = e.folder_id) && void 0 !== a ? a : 0);
          const r = this.appPeersManager.getPeerId(e.peer);
          if (!r)
            return void console.error("saveConversation no peerId???", e, t);
          "dialog" !== e._ &&
            console.error(
              "saveConversation not regular dialog",
              e,
              Object.assign({}, e)
            );
          const o = this.appPeersManager.isChannel(r) ? r.toChatId() : _.c;
          if (r.isAnyChat()) {
            const e = this.appChatsManager.getChat(r.toChatId());
            if ("channelForbidden" === e._ || e.pFlags.left || e.pFlags.kicked)
              return;
          }
          const d = this.appPeersManager.getPeerSearchText(r);
          this.dialogsIndex.indexObject(r, d);
          const c = this.getDialogOnly(r);
          let l, h;
          if (e.top_message) {
            l = this.appMessagesIdsManager.generateMessageId(e.top_message);
            const t =
              (null == c ? void 0 : c.top_message) &&
              this.appMessagesManager.getMessageByPeer(r, c.top_message);
            (null === (n = null == t ? void 0 : t.pFlags) || void 0 === n
              ? void 0
              : n.is_outgoing) &&
              c.top_message >= l &&
              (l = c.top_message),
              (h = this.appMessagesManager.getMessageByPeer(r, l));
          } else
            (l = this.appMessagesManager.generateTempMessageId(r)),
              (h = {
                _: "message",
                id: l,
                mid: l,
                from_id: this.appPeersManager.getOutputPeer(
                  this.appUsersManager.getSelf().id.toPeerId(!1)
                ),
                peer_id: this.appPeersManager.getOutputPeer(r),
                deleted: !0,
                pFlags: { out: !0 },
                date: 0,
                message: "",
              }),
              this.appMessagesManager.saveMessages([h], { isOutgoing: !0 });
          if (
            ((null == h ? void 0 : h.pFlags) ||
              this.appMessagesManager.log.error(
                "saveConversation no message:",
                e,
                h
              ),
            !o && r.isAnyChat())
          ) {
            const t = this.appChatsManager.getChat(r.toChatId());
            if (t && t.migrated_to && t.pFlags.deactivated) {
              const s = this.appPeersManager.getPeerId(t.migrated_to);
              (this.appMessagesManager.migratedFromTo[r] = s),
                (this.appMessagesManager.migratedToFrom[s] = r),
                (e.migratedTo = s);
            }
          }
          if (
            ((e.top_message = l),
            (e.read_inbox_max_id = this.appMessagesIdsManager.generateMessageId(
              c && !e.read_inbox_max_id
                ? c.read_inbox_max_id
                : e.read_inbox_max_id
            )),
            (e.read_outbox_max_id =
              this.appMessagesIdsManager.generateMessageId(
                c && !e.read_outbox_max_id
                  ? c.read_outbox_max_id
                  : e.read_outbox_max_id
              )),
            void 0 === e.folder_id &&
              "dialog" === e._ &&
              (e.folder_id = c ? c.folder_id : t),
            (e.draft = this.appDraftsManager.saveDraft(r, 0, e.draft)),
            (e.peerId = r),
            h.pFlags.is_outgoing)
          ) {
            const t = h.pFlags.out;
            l > e[t ? "read_outbox_max_id" : "read_inbox_max_id"]
              ? ((h.pFlags.unread = !0),
                e.unread_count || t || ++e.unread_count)
              : delete h.pFlags.unread;
          }
          const u = this.appMessagesManager.getHistoryStorage(r),
            p = u.history.slice;
          if (p.length) {
            if (!p.isEnd(v.a.Bottom)) {
              u.history.insertSlice([l]).setEnd(v.a.Bottom),
                u.count || (u.count = 1),
                this.appMessagesManager.mergeReplyKeyboard(u, h) &&
                  f.default.dispatchEvent("history_reply_markup", {
                    peerId: r,
                  });
            }
          } else
            u.history.unshift(l),
              u.count || (u.count = 1),
              this.appMessagesManager.mergeReplyKeyboard(u, h) &&
                f.default.dispatchEvent("history_reply_markup", { peerId: r });
          (u.maxId = l),
            (u.readMaxId = e.read_inbox_max_id),
            (u.readOutboxMaxId = e.read_outbox_max_id),
            this.appNotificationsManager.savePeerSettings({
              peerId: r,
              settings: e.notify_settings,
            }),
            o && e.pts && this.apiUpdatesManager.addChannelState(o, e.pts),
            this.generateIndexForDialog(e),
            Object(b.a)(e, [
              "index_0",
              "index_1",
              "index_2",
              "index_3",
              "index_4",
              "index_5",
              "index_6",
              "index_7",
              "index_8",
              "index_9",
              "index_10",
            ]),
            c && Object(w.a)(c, e),
            this.pushDialog(e, h.date, s, i);
        }
        getDialogIndexKey(e) {
          return e > 1
            ? "index_" +
                this.appMessagesManager.filtersStorage.getFilter(e).orderIndex
            : "index";
        }
        getDialogs(e = "", t, s = 20, i = 0, a = !1) {
          const n = {};
          if (i > 1) {
            const r = [],
              o = this.appUsersManager.fillContacts();
            o.cached || r.push(o.promise);
            const d =
              this.appMessagesManager.filtersStorage.reloadMissingPeerIds(i);
            if ((d && r.push(d), r.length))
              return (
                (n.cached = !1),
                (n.promise = Promise.all(r).then(
                  () => this.getDialogs(e, t, s, i, a).promise
                )),
                n
              );
          }
          const r = i > 1 || this.getOffsetDate(i) ? void 0 : i;
          let o = this.getFolderDialogs(i, a);
          const d = this.getDialogIndexKey(i);
          if (e) {
            if (
              !s ||
              this.cachedResults.query !== e ||
              this.cachedResults.folderId !== i
            ) {
              (this.cachedResults.query = e), (this.cachedResults.folderId = i);
              const t = this.dialogsIndex.search(e),
                s = [];
              for (const e in this.dialogs) {
                const a = this.dialogs[e];
                t.has(a.peerId) && a.folder_id === i && s.push(a);
              }
              s.sort((e, t) => t[d] - e[d]),
                (this.cachedResults.dialogs = s),
                (this.cachedResults.count = s.length);
            }
            o = this.cachedResults.dialogs;
          } else this.cachedResults.query = "";
          let c = 0;
          if (t > 0) for (let e = o.length; c < e && !(t > o[c][d]); ++c);
          const l = this.isDialogsLoaded(r),
            h = o.length >= c + s;
          if (e || l || h) {
            const i = o.slice(c, c + s);
            return (
              (n.cached = !0),
              (n.promise = Promise.resolve({
                dialogs: i,
                count: l ? o.length : null,
                isTopEnd: o.length && ((i[0] && i[0] === o[0]) || o[0][d] < t),
                isEnd: (e || l) && c + s >= o.length,
              })),
              n
            );
          }
          return (
            (n.cached = !1),
            (n.promise = this.appMessagesManager
              .getTopMessages(s, r)
              .then((e) => {
                if ((a && (o = this.getFolderDialogs(i, a)), (c = 0), t > 0))
                  for (let e = o.length; c < e && !(t > o[c][d]); ++c);
                const n = o.slice(c, c + s);
                return {
                  dialogs: n,
                  count: void 0 === e.count ? o.length : e.count,
                  isTopEnd:
                    o.length && ((n[0] && n[0] === o[0]) || o[0][d] < t),
                  isEnd: e.isEnd,
                };
              })),
            n
          );
        }
      }
      var k = s(53),
        E = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const A = [
        ["pinned_peers", "pinnedPeerIds"],
        ["exclude_peers", "excludePeerIds"],
        ["include_peers", "includePeerIds"],
      ];
      class D {
        constructor(e, t, s, i, a, n, r) {
          (this.appMessagesManager = e),
            (this.appPeersManager = t),
            (this.appUsersManager = s),
            (this.appNotificationsManager = i),
            (this.appStateManager = a),
            (this.apiUpdatesManager = n),
            (this.rootScope = r),
            (this.onUpdateDialogFilter = (e) => {
              e.filter
                ? this.saveDialogFilter(e.filter)
                : this.filters[e.id] &&
                  (this.rootScope.dispatchEvent(
                    "filter_delete",
                    this.filters[e.id]
                  ),
                  delete this.filters[e.id]),
                this.appStateManager.pushToState("filters", this.filters);
            }),
            (this.onUpdateDialogFilterOrder = (e) => {
              (this.orderIndex = 1),
                e.order.forEach((e, t) => {
                  const s = this.filters[e];
                  delete s.orderIndex, this.setOrderIndex(s);
                }),
                this.rootScope.dispatchEvent("filter_order", e.order),
                this.appStateManager.pushToState("filters", this.filters);
            }),
            this.clear(!0),
            (this.filters = {}),
            this.appStateManager.getState().then((e) => {
              Object(w.a)(this.filters, e.filters);
              for (const e in this.filters) {
                const t = this.filters[e];
                t.hasOwnProperty("orderIndex") &&
                  t.orderIndex >= this.orderIndex &&
                  (this.orderIndex = t.orderIndex + 1);
              }
            }),
            r.addMultipleEventsListeners({
              updateDialogFilter: this.onUpdateDialogFilter,
              updateDialogFilters: (e) => {
                const t = Object(k.a)(this.filters);
                this.getDialogFilters(!0).then((e) => {
                  for (const s in t) {
                    const t = +s;
                    e.find((e) => e.id === t) ||
                      this.onUpdateDialogFilter({
                        _: "updateDialogFilter",
                        id: t,
                      });
                  }
                  this.onUpdateDialogFilterOrder({
                    _: "updateDialogFilterOrder",
                    order: e.map((e) => e.id),
                  });
                });
              },
              updateDialogFilterOrder: this.onUpdateDialogFilterOrder,
            });
        }
        clear(e = !1) {
          e
            ? ((this.filters = {}), (this.reloadedPeerIds = new Set()))
            : (Object(w.a)(this.filters, {}), this.reloadedPeerIds.clear()),
            (this.orderIndex = 1);
        }
        testDialogForFilter(e, t) {
          const s = e.peerId;
          if (!this.appMessagesManager.getDialogOnly(s)) return !1;
          if (t.excludePeerIds.includes(s)) return !1;
          if (t.includePeerIds.includes(s)) return !0;
          const i = t.pFlags;
          if (i.exclude_archived && 1 === e.folder_id) return !1;
          if (i.exclude_read && !this.appMessagesManager.isDialogUnread(e))
            return !1;
          if (
            i.exclude_muted &&
            this.appNotificationsManager.isPeerLocalMuted(s) &&
            (!e.unread_mentions_count || !e.unread_count)
          )
            return !1;
          if (this.appPeersManager.isAnyChat(s)) {
            if (i.broadcasts && this.appPeersManager.isBroadcast(s)) return !0;
            if (i.groups && this.appPeersManager.isAnyGroup(s)) return !0;
          } else {
            const e = s.toUserId();
            if (this.appUsersManager.isBot(e)) return !!i.bots;
            if (i.non_contacts && !this.appUsersManager.isContact(e)) return !0;
            if (i.contacts && this.appUsersManager.isContact(e)) return !0;
          }
          return !1;
        }
        testDialogForFilterId(e, t) {
          return this.testDialogForFilter(e, this.filters[t]);
        }
        getFilter(e) {
          return this.filters[e];
        }
        toggleDialogPin(e, t) {
          const s = this.filters[t],
            i = s.pinnedPeerIds.indexOf(e),
            a = -1 !== i;
          if (
            (a && (s.pinned_peers.splice(i, 1), s.pinnedPeerIds.splice(i, 1)),
            !a)
          ) {
            if (
              s.pinned_peers.length >=
              this.rootScope.config.pinned_infolder_count_max
            )
              return Promise.reject({ type: "PINNED_DIALOGS_TOO_MUCH" });
            s.pinned_peers.unshift(this.appPeersManager.getInputPeerById(e)),
              s.pinnedPeerIds.unshift(e);
          }
          return this.updateDialogFilter(s);
        }
        createDialogFilter(e, t) {
          const s = Math.max(1, ...Object.keys(this.filters).map((e) => +e));
          return (
            ((e = Object(k.a)(e)).id = s + 1),
            this.updateDialogFilter(e, void 0, t)
          );
        }
        updateDialogFilter(e, t = !1, s = !1) {
          const i = t ? 0 : 1;
          return h.a
            .invokeApi("messages.updateDialogFilter", {
              flags: i,
              id: e.id,
              filter: t ? void 0 : this.getOutputDialogFilter(e),
            })
            .then((i) => {
              if (
                i &&
                (this.onUpdateDialogFilter({
                  _: "updateDialogFilter",
                  id: e.id,
                  filter: t ? void 0 : e,
                }),
                s)
              ) {
                const t = [];
                for (const e in this.filters) {
                  const s = this.filters[e];
                  ++s.orderIndex, t.push(s);
                }
                e.orderIndex = 1;
                const s = t
                  .sort((e, t) => e.orderIndex - t.orderIndex)
                  .map((e) => e.id);
                this.onUpdateDialogFilterOrder({
                  _: "updateDialogFilterOrder",
                  order: s,
                });
              }
              return i;
            });
        }
        getOutputDialogFilter(e) {
          const t = Object(k.a)(e);
          return this.filterIncludedPinnedPeers(e), t;
        }
        filterIncludedPinnedPeers(e) {
          Object(P.a)(e.includePeerIds, (t, s) => {
            e.pinnedPeerIds.includes(t) &&
              (e.include_peers.splice(s, 1), e.includePeerIds.splice(s, 1));
          });
        }
        reloadMissingPeerIds(e, t = "pinned_peers") {
          const s = [],
            i = this.getFilter(e),
            a = i && i[t];
          if (null == a ? void 0 : a.length) {
            const e = a.filter((e, t) => {
              const s = this.appPeersManager.getPeerId(e);
              return (
                !this.reloadedPeerIds.has(s) &&
                !this.appMessagesManager.getDialogOnly(s)
              );
            });
            if (e.length) {
              const t = e.map((e) => {
                  const t = this.appPeersManager.getPeerId(e),
                    s = this.appMessagesManager.reloadConversation(e);
                  return (
                    s.then(() => {
                      this.reloadedPeerIds.add(t);
                    }),
                    s
                  );
                }),
                i = Promise.all(t);
              s.push(i);
            }
          }
          return s.length ? Promise.all(s) : void 0;
        }
        getDialogFilters(e = !1) {
          return E(this, void 0, void 0, function* () {
            const t = Object.keys(this.filters);
            if (t.length && !e)
              return t
                .map((e) => this.filters[e])
                .sort((e, t) => e.orderIndex - t.orderIndex);
            const s = yield h.a.invokeApiSingle("messages.getDialogFilters");
            for (const t of s) this.saveDialogFilter(t, e);
            return s;
          });
        }
        saveDialogFilter(e, t = !0) {
          A.forEach(([t, s]) => {
            e[s] = e[t].map((e) => this.appPeersManager.getPeerId(e));
          }),
            this.filterIncludedPinnedPeers(e),
            (e.include_peers = e.pinned_peers.concat(e.include_peers)),
            (e.includePeerIds = e.pinnedPeerIds.concat(e.includePeerIds));
          const s = this.filters[e.id];
          s ? Object.assign(s, e) : (this.filters[e.id] = e),
            this.setOrderIndex(e),
            t
              ? this.rootScope.dispatchEvent("filter_update", e)
              : s || this.rootScope.dispatchEvent("filter_new", e);
        }
        setOrderIndex(e) {
          e.hasOwnProperty("orderIndex")
            ? e.orderIndex >= this.orderIndex &&
              (this.orderIndex = e.orderIndex + 1)
            : (e.orderIndex = this.orderIndex++),
            this.appStateManager.pushToState("filters", this.filters);
        }
      }
      var T = s(65),
        U = s(47),
        F = s(69),
        O = s(74),
        x = s(40),
        j = s(56),
        L = s(151),
        R = s(17),
        B = s(37),
        N = s(179),
        H = s(136),
        G = s(124),
        z = s(60),
        q = s(30),
        V = s(111),
        W = s(49),
        $ = s(161),
        K = s(101),
        Q = s(191),
        J = s(126),
        Y = s(24),
        X = s(113),
        Z = s(80),
        ee = s(102),
        te = s(180),
        se = s(192),
        ie = s(139),
        ae = s(106),
        ne = s(130),
        re = s(155),
        oe = s(87),
        de = s(185),
        ce = s(125);
      var le = s(84),
        he = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const ue = new (class {
        constructor() {
          (this.pendingByRandomId = {}),
            (this.pendingByMessageId = {}),
            (this.pendingAfterMsgs = {}),
            (this.pendingTopMsgs = {}),
            (this.tempFinalizeCallbacks = {}),
            (this.sendSmthLazyLoadQueue = new i.a(10)),
            (this.needSingleMessages = new Map()),
            (this.fetchSingleMessagesPromise = null),
            (this.maxSeenId = 0),
            (this.migratedFromTo = {}),
            (this.migratedToFrom = {}),
            (this.newMessagesHandleTimeout = 0),
            (this.newMessagesToHandle = {}),
            (this.newDialogsToHandle = {}),
            (this.newUpdatesAfterReloadToHandle = {}),
            (this.notificationsHandlePromise = 0),
            (this.notificationsToHandle = {}),
            (this.reloadConversationsPeers = new Map()),
            (this.log = Object(l.b)(
              "MESSAGES",
              l.a.Error | l.a.Debug | l.a.Log | l.a.Warn
            )),
            (this.groupedTempId = 0),
            (this.typings = {}),
            (this.unreadMentions = {}),
            (this.goToNextMentionPromises = {}),
            (this.batchUpdates = {}),
            (this.handleNewMessages = () => {
              clearTimeout(this.newMessagesHandleTimeout),
                (this.newMessagesHandleTimeout = 0),
                f.default.dispatchEvent(
                  "history_multiappend",
                  this.newMessagesToHandle
                ),
                (this.newMessagesToHandle = {});
            }),
            (this.handleNewDialogs = () => {
              let e = 0;
              const t = this.newDialogsToHandle;
              for (const s in t) {
                const i = t[s];
                i
                  ? (this.dialogsStorage.pushDialog(i),
                    x.a.isChannel(s.toPeerId()) ||
                      (e = Math.max(e, i.top_message || 0)))
                  : (this.reloadConversation(s.toPeerId()), delete t[s]);
              }
              0 !== e && this.incrementMaxSeenId(e),
                f.default.dispatchEvent("dialogs_multiupdate", t),
                (this.newDialogsToHandle = {});
            }),
            (this.handleNotifications = () => {
              window.clearTimeout(this.notificationsHandlePromise),
                (this.notificationsHandlePromise = 0);
              for (const e in this.notificationsToHandle) {
                const t = e.toPeerId();
                if (f.default.peerId === t && !f.default.idle.isIDLE) continue;
                const s = this.notificationsToHandle[t];
                this.getNotifyPeerSettings(t).then(
                  ({ muted: e, peerTypeNotifySettings: t }) => {
                    const i = s.topMessage;
                    !e &&
                      i.pFlags.unread &&
                      i.pFlags.unread &&
                      this.notifyAboutMessage(i, {
                        fwdCount: s.fwdCount,
                        peerTypeNotifySettings: t,
                      });
                  }
                );
              }
              this.notificationsToHandle = {};
            }),
            (this.onUpdateMessageId = (e) => {
              const t = e.random_id,
                s = this.pendingByRandomId[t];
              if (s) {
                const { peerId: i, tempId: a, threadId: n, storage: r } = s,
                  o = ee.a.generateMessageId(e.id),
                  d = this.getMessageFromStorage(r, o);
                d.deleted
                  ? (this.pendingByMessageId[o] = t)
                  : ([
                      this.getHistoryStorage(i),
                      n ? this.getHistoryStorage(i, n) : void 0,
                    ]
                      .filter(Boolean)
                      .forEach((e) => {
                        e.history.delete(a);
                      }),
                    this.finalizePendingMessageCallbacks(r, a, d));
              }
            }),
            (this.onUpdateNewMessage = (e) => {
              var t;
              const s = e.message,
                i = this.getMessagePeer(s),
                a = this.getMessagesStorage(i),
                n = this.getDialogOnly(i),
                r = "updateNewDiscussionMessage" === e._;
              this.saveMessages([s], { storage: new Map() });
              const o = this.getThreadKey(s),
                d = o ? +o.split("_")[1] : void 0;
              if (
                d &&
                !r &&
                this.threadsStorage[i] &&
                this.threadsStorage[i][d]
              ) {
                const e = { _: "updateNewDiscussionMessage", message: s };
                this.onUpdateNewMessage(e);
              }
              if (!n && !r) {
                let s = !0;
                if ((i.isAnyChat() && (s = U.a.isInChat(i.toChatId())), s)) {
                  const s =
                    null !== (t = this.newUpdatesAfterReloadToHandle[i]) &&
                    void 0 !== t
                      ? t
                      : (this.newUpdatesAfterReloadToHandle[i] = new Set());
                  if (s.has(e))
                    return void this.log.error("here we go again", i);
                  (e.ignoreExisting = !0),
                    s.add(e),
                    this.scheduleHandleNewDialogs(i);
                }
                return;
              }
              this.saveMessages([s], { storage: a });
              const c = this.checkPendingMessage(s),
                l = this.getHistoryStorage(i, r ? d : void 0);
              r || this.updateMessageRepliesIfNeeded(s);
              const h = e.ignoreExisting;
              if (!!l.history.findSlice(s.mid)) {
                if (!h) return !1;
              } else {
                const e = l.history.first;
                if (e.isEnd(v.a.Bottom)) {
                  let t = 0;
                  for (const i = e.length; t < i && !(s.mid > e[t]); ++t);
                  e.splice(t, 0, s.mid);
                } else l.history.unshift(s.mid);
                null !== l.count && l.count++;
              }
              this.mergeReplyKeyboard(l, s) &&
                f.default.dispatchEvent("history_reply_markup", { peerId: i });
              const u = s.fromId;
              if (u.isUser() && !s.pFlags.out && s.from_id) {
                B.a.forceUserOnline(u, s.date);
                const e = { _: "sendMessageCancelAction" };
                let t;
                (t = i.isUser()
                  ? { _: "updateUserTyping", action: e, user_id: u }
                  : x.a.isChannel(i)
                  ? {
                      _: "updateChannelUserTyping",
                      action: e,
                      channel_id: i.toChatId(),
                      from_id: x.a.getOutputPeer(u),
                      top_msg_id: d ? ee.a.getServerMessageId(d) : void 0,
                    }
                  : {
                      _: "updateChatUserTyping",
                      action: e,
                      chat_id: i.toChatId(),
                      from_id: x.a.getOutputPeer(u),
                    }),
                  T.a.processLocalUpdate(t);
              }
              if ((c || this.handleNewMessage(i, s.mid), r)) return;
              const p = !s.pFlags.out && s.pFlags.unread;
              if (n) {
                if (p && s.mid > n.top_message) {
                  const e =
                    this.dialogsStorage.prepareDialogUnreadCountModifying(n);
                  ++n.unread_count,
                    s.pFlags.mentioned &&
                      (++n.unread_mentions_count,
                      this.modifyCachedMentions(i, s.mid, !0)),
                    e();
                }
                s.mid >= n.top_message && this.setDialogTopMessage(s, n);
              }
              if (p) {
                const e = i;
                let t = this.notificationsToHandle[e];
                void 0 === t &&
                  (t = this.notificationsToHandle[e] =
                    { fwdCount: 0, fromId: _.c }),
                  t.fromId !== u && ((t.fromId = u), (t.fwdCount = 0)),
                  s.fwd_from && ++t.fwdCount,
                  (t.topMessage = s),
                  this.notificationsHandlePromise ||
                    (this.notificationsHandlePromise = window.setTimeout(
                      this.handleNotifications,
                      0
                    ));
              }
            }),
            (this.onUpdateMessageReactions = (e) => {
              const { peer: t, msg_id: s, reactions: i } = e,
                a = ee.a.generateMessageId(s),
                n = x.a.getPeerId(t),
                r = this.getMessageByPeer(n, a);
              if ("message" !== r._) return;
              const o = null == i ? void 0 : i.recent_reactions;
              if ((null == o ? void 0 : o.length) && r.pFlags.out) {
                const e = o[o.length - 1],
                  t = r.reactions,
                  s = null == t ? void 0 : t.recent_reactions;
                x.a.getPeerId(e.peer_id) === f.default.myId ||
                  (s && !(s.length <= o.length)) ||
                  (s && Object(oe.a)(e, s[s.length - 1])) ||
                  this.getNotifyPeerSettings(n).then(
                    ({ muted: t, peerTypeNotifySettings: s }) => {
                      !t &&
                        s.show_previews &&
                        this.notifyAboutMessage(r, {
                          userReaction: e,
                          peerTypeNotifySettings: s,
                        });
                    }
                  );
              }
              const d = r.peerId + "_" + r.mid;
              this.pushBatchUpdate(
                "messages_reactions",
                this.batchUpdateReactions,
                d,
                () => Object(k.a)(r.reactions)
              ),
                (r.reactions = i),
                e.local || this.setDialogToStateIfMessageIsTop(r);
            }),
            (this.onUpdateDialogUnreadMark = (e) => {
              const t = x.a.getPeerId(e.peer.peer),
                s = this.getDialogOnly(t);
              if (s) {
                const i =
                  this.dialogsStorage.prepareDialogUnreadCountModifying(s);
                e.pFlags.unread
                  ? (s.pFlags.unread_mark = !0)
                  : delete s.pFlags.unread_mark,
                  i(),
                  f.default.dispatchEvent("dialogs_multiupdate", { [t]: s }),
                  this.dialogsStorage.setDialogToState(s);
              } else this.scheduleHandleNewDialogs(t);
            }),
            (this.onUpdateEditMessage = (e) => {
              const t = e.message,
                s = this.getMessagePeer(t),
                i = ee.a.generateMessageId(t.id),
                a = this.getMessagesStorage(s);
              if (!a.has(i)) return;
              const n = this.getMessageFromStorage(a, i);
              this.saveMessages([t], { storage: a });
              const r = this.getMessageFromStorage(a, i);
              this.handleEditedMessage(n, r);
              const o = this.getDialogOnly(s),
                d = o && o.top_message === i;
              if (t.clear_history)
                d && f.default.dispatchEvent("dialog_flush", { peerId: s });
              else {
                if (
                  "message" === (null == n ? void 0 : n._) &&
                  !Object(oe.a)(n.reactions, r.reactions)
                ) {
                  const e = r.reactions;
                  return (
                    (r.reactions = n.reactions),
                    void T.a.processLocalUpdate({
                      _: "updateMessageReactions",
                      peer: x.a.getOutputPeer(s),
                      msg_id: t.id,
                      reactions: e,
                    })
                  );
                }
                if (
                  (f.default.dispatchEvent("message_edit", {
                    storage: a,
                    peerId: s,
                    mid: i,
                  }),
                  d || t.grouped_id)
                ) {
                  const e = {};
                  (e[s] = o),
                    f.default.dispatchEvent("dialogs_multiupdate", e),
                    this.dialogsStorage.setDialogToState(o);
                }
              }
            }),
            (this.onUpdateReadHistory = (e) => {
              const t = e.channel_id,
                s = ee.a.generateMessageId(e.max_id || e.read_max_id),
                i = ee.a.generateMessageId(e.top_msg_id),
                a = t ? t.toPeerId(!0) : x.a.getPeerId(e.peer),
                n =
                  "updateReadHistoryOutbox" === e._ ||
                  "updateReadChannelOutbox" === e._ ||
                  "updateReadChannelDiscussionOutbox" === e._ ||
                  void 0,
                r = this.getMessagesStorage(a),
                o = Object(re.a)(r, "desc"),
                d = this.getDialogOnly(a),
                c = e.still_unread_count;
              let l = 0,
                h = 0,
                u = !1;
              const p = this.getHistoryStorage(a, i);
              if ((a.isUser() && n && B.a.forceUserOnline(a), i)) {
                const e = this.threadsToReplies[a + "_" + i];
                if (e) {
                  const [t, s] = e.split("_");
                  this.updateMessage(t.toPeerId(), +s, "replies_updated");
                }
              }
              const g =
                !i &&
                d &&
                this.dialogsStorage.prepareDialogUnreadCountModifying(d);
              for (let e = 0, t = o.length; e < t; e++) {
                const t = o[e];
                if (t > s) continue;
                const p = r.get(t);
                if (p.pFlags.out === n) {
                  if (!p.pFlags.unread) break;
                  if (i) {
                    const e = p.reply_to;
                    if (!e || (e.reply_to_top_id || e.reply_to_msg_id) !== i)
                      continue;
                  }
                  p.pFlags.unread &&
                    (delete p.pFlags.unread,
                    u || (u = !0),
                    p.pFlags.out ||
                      i ||
                      !d ||
                      (void 0 === c && (l = --d.unread_count),
                      p.pFlags.mentioned &&
                        ((h = --d.unread_mentions_count),
                        this.modifyCachedMentions(a, p.mid, !1))),
                    V.a.cancel("msg" + t));
                }
              }
              if ((n ? (p.readOutboxMaxId = s) : (p.readMaxId = s), !i && d)) {
                if (
                  (n ? (d.read_outbox_max_id = s) : (d.read_inbox_max_id = s),
                  !n)
                ) {
                  let e;
                  void 0 !== c
                    ? (e = c)
                    : l < 0 || !this.getReadMaxIdIfUnread(a)
                    ? (e = 0)
                    : l && d.top_message > s && (e = l),
                    void 0 !== e && (d.unread_count = e),
                    (h < 0 || !d.unread_count) && (d.unread_mentions_count = 0);
                }
                g && g(),
                  this.dialogsStorage.processDialogForFilters(d),
                  f.default.dispatchEvent("dialog_unread", { peerId: a }),
                  this.dialogsStorage.setDialogToState(d);
              }
              if ((u && f.default.dispatchEvent("messages_read"), !i && t)) {
                const e = a + "_";
                for (const t in this.threadsToReplies)
                  if (0 === t.indexOf(e)) {
                    const [e, s] = this.threadsToReplies[t].split("_");
                    f.default.dispatchEvent(
                      "replies_updated",
                      this.getMessageByPeer(e.toPeerId(), +s)
                    );
                  }
              }
            }),
            (this.onUpdateReadMessagesContents = (e) => {
              const t = e.channel_id,
                s = e.messages.map((e) => ee.a.generateMessageId(e)),
                i = t ? t.toPeerId(!0) : this.getMessageById(s[0]).peerId;
              for (let e = 0, t = s.length; e < t; ++e) {
                const t = s[e],
                  a = this.getMessageByPeer(i, t);
                a.deleted
                  ? this.fixDialogUnreadMentionsIfNoMessage(i)
                  : a.pFlags.media_unread &&
                    (delete a.pFlags.media_unread,
                    this.setDialogToStateIfMessageIsTop(a),
                    !a.pFlags.out &&
                      a.pFlags.mentioned &&
                      this.modifyCachedMentions(i, t, !1));
              }
              f.default.dispatchEvent("messages_media_read", {
                peerId: i,
                mids: s,
              });
            }),
            (this.onUpdateChannelAvailableMessages = (e) => {
              const t = e.channel_id.toPeerId(!0),
                s = this.getHistoryStorage(t).history.slice,
                i = ee.a.generateMessageId(e.available_min_id),
                a = s.filter((e) => e <= i);
              (e.messages = a), this.onUpdateDeleteMessages(e);
            }),
            (this.onUpdateDeleteMessages = (e) => {
              const t = e.channel_id,
                s = e.messages.map((e) => ee.a.generateMessageId(e)),
                i = t ? t.toPeerId(!0) : this.getMessageById(s[0]).peerId;
              if (!i) return;
              h.a.clearCache(
                "messages.getSearchCounters",
                (e) => x.a.getPeerId(e.peer) === i
              );
              const a = new Set();
              for (const e of s) {
                const t = this.getMessageByPeer(i, e),
                  s = this.getThreadKey(t);
                s &&
                  this.threadsStorage[i] &&
                  this.threadsStorage[i][+s.split("_")[1]] &&
                  a.add(s);
              }
              const n = this.handleDeletedMessages(
                  i,
                  this.getMessagesStorage(i),
                  s
                ),
                r = Array.from(a).map((e) => {
                  const [t, s] = e.split("_");
                  return this.getHistoryStorage(t.toPeerId(), +s);
                }),
                o = this.getHistoryStorage(i);
              [o].concat(r).forEach((e) => {
                for (const t of n.msgs) e.history.delete(t);
                n.count &&
                  e.count &&
                  (e.count = Math.max(0, e.count - n.count));
              }),
                f.default.dispatchEvent("history_delete", {
                  peerId: i,
                  msgs: n.msgs,
                });
              const d = this.getDialogOnly(i);
              if (d) {
                const e = n.unreadMentions || n.unread,
                  t =
                    e &&
                    this.dialogsStorage.prepareDialogUnreadCountModifying(d);
                if (
                  (n.unread &&
                    (d.unread_count = Math.max(0, d.unread_count - n.unread)),
                  n.unreadMentions &&
                    (d.unread_mentions_count = d.unread_count
                      ? Math.max(0, d.unread_mentions_count - n.unreadMentions)
                      : 0),
                  e &&
                    (t(),
                    f.default.dispatchEvent("dialog_unread", { peerId: i })),
                  n.msgs.has(d.top_message))
                ) {
                  const e = o.history.first;
                  if (e.isEnd(v.a.Bottom) && e.length) {
                    const t = e[0],
                      s = this.getMessageByPeer(i, t);
                    this.setDialogTopMessage(s, d);
                  } else this.reloadConversation(i);
                }
              }
            }),
            (this.onUpdateChannel = (e) => {
              const t = e.channel_id,
                s = t.toPeerId(!0),
                i = U.a.getChat(t),
                a = U.a.isInChat(t);
              (!!i.username || !i.pFlags.left) !==
                (void 0 !== this.historiesStorage[s]) &&
                (delete this.historiesStorage[s],
                f.default.dispatchEvent("history_forbidden", s));
              !!this.getDialogOnly(s) !== a &&
                (a
                  ? this.reloadConversation(s)
                  : this.dialogsStorage.dropDialogOnDeletion(s)),
                f.default.dispatchEvent("channel_update", t);
            }),
            (this.onUpdateChannelReload = (e) => {
              const t = e.channel_id.toPeerId(!0);
              this.dialogsStorage.dropDialog(t),
                delete this.historiesStorage[t],
                this.reloadConversation(t).then(() => {
                  f.default.dispatchEvent("history_reload", t);
                });
            }),
            (this.onUpdateChannelMessageViews = (e) => {
              const t = e.views,
                s = e.channel_id.toPeerId(!0),
                i = ee.a.generateMessageId(e.id),
                a = this.getMessageByPeer(s, i);
              !a.deleted &&
                void 0 !== a.views &&
                a.views < t &&
                ((a.views = t),
                this.pushBatchUpdate(
                  "messages_views",
                  this.batchUpdateViews,
                  a.peerId + "_" + a.mid
                ),
                this.setDialogToStateIfMessageIsTop(a));
            }),
            (this.onUpdateServiceNotification = (e) => {
              const t = _.e,
                s = t,
                i = this.generateTempMessageId(s),
                a = {
                  _: "message",
                  id: i,
                  from_id: x.a.getOutputPeer(t),
                  peer_id: x.a.getOutputPeer(s),
                  pFlags: { unread: !0 },
                  date:
                    (e.inbox_date || Object(r.h)(!0)) + p.a.serverTimeOffset,
                  message: e.message,
                  media: e.media,
                  entities: e.entities,
                };
              B.a.hasUser(t) ||
                B.a.saveApiUsers([
                  {
                    _: "user",
                    id: t,
                    pFlags: { verified: !0 },
                    access_hash: "0",
                    first_name: "Telegram",
                    phone: "42777",
                  },
                ]),
                this.saveMessages([a], { isOutgoing: !0 }),
                e.inbox_date &&
                  ((this.pendingTopMsgs[s] = i),
                  this.onUpdateNewMessage({
                    _: "updateNewMessage",
                    message: a,
                    pts: void 0,
                    pts_count: void 0,
                  }));
            }),
            (this.onUpdatePinnedMessages = (e) => {
              const t =
                  "updatePinnedChannelMessages" === e._ ? e.channel_id : void 0,
                s = t ? t.toPeerId(!0) : x.a.getPeerId(e.peer),
                i = e.messages.map((e) => ee.a.generateMessageId(e)),
                a = this.getMessagesStorage(s),
                n = i.filter((e) => !a.has(e));
              (n.length
                ? Promise.all(n.map((e) => this.wrapSingleMessage(s, e)))
                : Promise.resolve()
              ).finally(() => {
                var t;
                const n =
                  null === (t = e.pFlags) || void 0 === t ? void 0 : t.pinned;
                if (n)
                  for (const e of i) {
                    a.get(e).pFlags.pinned = !0;
                  }
                else
                  for (const e of i) {
                    delete a.get(e).pFlags.pinned;
                  }
                delete this.pinnedMessages[s],
                  R.default.getState().then((e) => {
                    delete e.hiddenPinnedMessages[s],
                      f.default.dispatchEvent("peer_pinned_messages", {
                        peerId: s,
                        mids: i,
                        pinned: n,
                      });
                  });
              });
            }),
            (this.onUpdateNotifySettings = (e) => {
              const { peer: t, notify_settings: s } = e;
              if ("notifyPeer" === t._) {
                const e = x.a.getPeerId(t.peer),
                  i = this.getDialogOnly(e);
                i &&
                  ((i.notify_settings = s),
                  f.default.dispatchEvent("dialog_notify_settings", i),
                  this.dialogsStorage.setDialogToState(i));
              }
            }),
            (this.onUpdateNewScheduledMessage = (e) => {
              const t = e.message,
                s = this.getMessagePeer(t),
                i = this.scheduledMessagesStorage[s];
              if (i) {
                const e = ee.a.generateMessageId(t.id),
                  a = this.getMessageFromStorage(i, e);
                this.saveMessages([t], { storage: i, isScheduled: !0 });
                const n = this.getMessageFromStorage(i, e);
                if (a.deleted) {
                  this.checkPendingMessage(t) ||
                    f.default.dispatchEvent("scheduled_new", {
                      peerId: s,
                      mid: t.mid,
                    });
                } else
                  this.handleEditedMessage(a, n),
                    f.default.dispatchEvent("message_edit", {
                      storage: i,
                      peerId: s,
                      mid: t.mid,
                    });
              }
            }),
            (this.onUpdateDeleteScheduledMessages = (e) => {
              const t = x.a.getPeerId(e.peer),
                s = this.scheduledMessagesStorage[t];
              if (s) {
                const i = e.messages.map((e) => ee.a.generateMessageId(e));
                this.handleDeletedMessages(t, s, i),
                  f.default.dispatchEvent("scheduled_delete", {
                    peerId: t,
                    mids: i,
                  });
              }
            }),
            (this.batchUpdateViews = (e) => {
              const t = [],
                s = this.getMessagesFromMap(e);
              for (const [e] of s)
                t.push({ peerId: e.peerId, mid: e.mid, views: e.views });
              return t;
            }),
            (this.batchUpdateReactions = (e) => {
              var t, s, i;
              const a = [],
                n = this.getMessagesFromMap(e);
              for (const [e, r] of n) {
                const n =
                    null !==
                      (s =
                        null === (t = e.reactions) || void 0 === t
                          ? void 0
                          : t.results) && void 0 !== s
                      ? s
                      : [],
                  o =
                    null !== (i = null == r ? void 0 : r.results) &&
                    void 0 !== i
                      ? i
                      : [],
                  d = n.filter((t) => {
                    const s = o.find((e) => e.reaction === t.reaction);
                    return (
                      (e.pFlags.out && (!s || t.count > s.count)) ||
                      (t.pFlags.chosen && (!s || !s.pFlags.chosen))
                    );
                  });
                a.push({ message: e, changedResults: d });
              }
              return a;
            }),
            this.clear(),
            f.default.addMultipleEventsListeners({
              updateMessageID: this.onUpdateMessageId,
              updateNewDiscussionMessage: this.onUpdateNewMessage,
              updateNewMessage: this.onUpdateNewMessage,
              updateNewChannelMessage: this.onUpdateNewMessage,
              updateDialogUnreadMark: this.onUpdateDialogUnreadMark,
              updateEditMessage: this.onUpdateEditMessage,
              updateEditChannelMessage: this.onUpdateEditMessage,
              updateMessageReactions: this.onUpdateMessageReactions,
              updateReadChannelDiscussionInbox: this.onUpdateReadHistory,
              updateReadChannelDiscussionOutbox: this.onUpdateReadHistory,
              updateReadHistoryInbox: this.onUpdateReadHistory,
              updateReadHistoryOutbox: this.onUpdateReadHistory,
              updateReadChannelInbox: this.onUpdateReadHistory,
              updateReadChannelOutbox: this.onUpdateReadHistory,
              updateChannelReadMessagesContents:
                this.onUpdateReadMessagesContents,
              updateReadMessagesContents: this.onUpdateReadMessagesContents,
              updateChannelAvailableMessages:
                this.onUpdateChannelAvailableMessages,
              updateDeleteMessages: this.onUpdateDeleteMessages,
              updateDeleteChannelMessages: this.onUpdateDeleteMessages,
              updateChannel: this.onUpdateChannel,
              updateChannelReload: this.onUpdateChannelReload,
              updateChannelMessageViews: this.onUpdateChannelMessageViews,
              updateServiceNotification: this.onUpdateServiceNotification,
              updatePinnedMessages: this.onUpdatePinnedMessages,
              updatePinnedChannelMessages: this.onUpdatePinnedMessages,
              updateNotifySettings: this.onUpdateNotifySettings,
              updateNewScheduledMessage: this.onUpdateNewScheduledMessage,
              updateDeleteScheduledMessages:
                this.onUpdateDeleteScheduledMessages,
            }),
            f.default.addEventListener(
              "notify_peer_type_settings",
              ({ key: e, settings: t }) => {
                let s;
                (s =
                  "notifyUsers" === e
                    ? (e) => e.peerId.isUser()
                    : "notifyBroadcasts" === e
                    ? (e) => e.peerId.isBroadcast()
                    : (e) => x.a.isAnyGroup(e.peerId)),
                  this.dialogsStorage
                    .getFolderDialogs(0)
                    .concat(this.dialogsStorage.getFolderDialogs(1))
                    .filter(s)
                    .forEach((e) => {
                      f.default.dispatchEvent("dialog_notify_settings", e);
                    });
              }
            ),
            f.default.addEventListener(
              "webpage_updated",
              ({ id: e, msgs: t }) => {
                t.forEach(({ peerId: t, mid: s, isScheduled: i }) => {
                  const a = i
                      ? this.getScheduledMessagesStorage(t)
                      : this.getMessagesStorage(t),
                    n = this.getMessageFromStorage(a, s);
                  n &&
                    ((n.media = {
                      _: "messageMediaWebPage",
                      webpage: N.a.getWebPage(e),
                    }),
                    f.default.dispatchEvent("message_edit", {
                      storage: a,
                      peerId: t,
                      mid: s,
                    }));
                });
              }
            ),
            f.default.addEventListener(
              "draft_updated",
              ({ peerId: e, threadId: t, draft: s }) => {
                if (t) return;
                const i = this.getDialogOnly(e);
                if (i) {
                  if (!t) {
                    i.draft = s;
                    let t = !1;
                    s || ee.a.getServerMessageId(i.top_message)
                      ? (this.dialogsStorage.generateIndexForDialog(i),
                        this.dialogsStorage.pushDialog(i))
                      : (this.dialogsStorage.dropDialog(e), (t = !0)),
                      f.default.dispatchEvent("dialog_draft", {
                        peerId: e,
                        dialog: i,
                        drop: t,
                        draft: s,
                        index: i.index,
                      });
                  }
                } else this.reloadConversation(e);
              }
            ),
            f.default.addEventListener("poll_update", ({ poll: e }) => {
              const t = L.a.pollToMessages[e.id];
              if (t)
                for (const e of t) {
                  const [t, s] = e.split("_"),
                    i = this.getMessageByPeer(t.toPeerId(), +s);
                  this.setDialogToStateIfMessageIsTop(i);
                }
            }),
            R.default.getState().then((e) => {
              e.maxSeenMsgId && (this.maxSeenId = e.maxSeenMsgId);
            }),
            (this.batchUpdatesDebounced = Object(le.a)(
              () => {
                for (const e in this.batchUpdates) {
                  const t = this.batchUpdates[e];
                  delete this.batchUpdates[e];
                  const s = t.callback(t.batch);
                  !s ||
                    (s instanceof Array && !s.length) ||
                    f.default.dispatchEvent(e, s);
                }
              },
              33,
              !1,
              !0
            ));
        }
        clear() {
          this.middleware
            ? this.middleware.clean()
            : (this.middleware = Object(X.a)()),
            (this.messagesStorageByPeerId = {}),
            (this.groupedMessagesStorage = {}),
            (this.scheduledMessagesStorage = {}),
            (this.historiesStorage = {}),
            (this.threadsStorage = {}),
            (this.searchesStorage = {}),
            (this.pinnedMessages = {}),
            (this.threadsServiceMessagesIdsStorage = {}),
            (this.threadsToReplies = {}),
            this.dialogsStorage && this.dialogsStorage.clear(),
            this.filtersStorage && this.filtersStorage.clear();
        }
        construct() {
          (this.filtersStorage = new D(
            this,
            x.a,
            B.a,
            V.a,
            R.default,
            T.a,
            f.default
          )),
            (this.dialogsStorage = new C(
              this,
              U.a,
              x.a,
              B.a,
              H.a,
              V.a,
              R.default,
              T.a,
              p.a,
              ee.a
            ));
        }
        getInputEntities(e) {
          const t = Object(k.a)(e);
          return (
            t.forEach((e) => {
              "messageEntityMentionName" === e._ &&
                ((e._ = "inputMessageEntityMentionName"),
                (e.user_id = B.a.getUserInput(e.user_id)));
            }),
            t
          );
        }
        invokeAfterMessageIsSent(e, t, s) {
          var i, a;
          const r =
              null !== (i = this.tempFinalizeCallbacks[e]) && void 0 !== i
                ? i
                : (this.tempFinalizeCallbacks[e] = {}),
            o =
              null !== (a = r[t]) && void 0 !== a
                ? a
                : (r[t] = { deferred: Object(n.a)() });
          return (o.callback = s), o.deferred;
        }
        editMessage(e, t, s = {}) {
          const { mid: i, peerId: a } = e;
          if (e.pFlags.is_outgoing)
            return this.invokeAfterMessageIsSent(i, "edit", (e) =>
              this.editMessage(e, t, s)
            );
          let n = s.entities || [];
          t && (t = g.a.parseMarkdown(t, n));
          const r = s.scheduleDate || (e.pFlags.is_scheduled ? e.date : void 0);
          return h.a
            .invokeApi("messages.editMessage", {
              peer: x.a.getInputPeerById(a),
              id: e.id,
              message: t,
              media: s.newMedia,
              entities: n.length ? this.getInputEntities(n) : void 0,
              no_webpage: s.noWebPage,
              schedule_date: r,
            })
            .then(
              (e) => {
                T.a.processUpdateMessage(e);
              },
              (e) => {
                if (
                  (this.log.error("editMessage error:", e),
                  !e || "MESSAGE_NOT_MODIFIED" !== e.type)
                )
                  return (
                    e && "MESSAGE_EMPTY" === e.type && (e.handled = !0),
                    Promise.reject(e)
                  );
                e.handled = !0;
              }
            );
        }
        sendText(e, t, s = {}) {
          if (!t.trim()) return Promise.resolve();
          s.threadId && !s.replyToMsgId && (s.replyToMsgId = s.threadId);
          const i = f.default.config.message_length_max;
          if (t.length > i) {
            const a = (function e(t, s) {
              if (t.length < s) return [t];
              let i = 0,
                a = 0,
                n = 0;
              const r = [],
                o = (o) => {
                  let d = t.slice(a, o);
                  const c = n++;
                  if (d.length > s) {
                    e(d.slice(s), s).forEach((e) => {
                      r[n++] = e;
                    }),
                      (d = d.slice(0, s));
                  }
                  (a = o), (i = 0), (r[c] = (r[c] || "") + d);
                };
              let d = 0;
              for (;;) {
                let e = t.indexOf(" ", d);
                if (-1 === e) {
                  d !== t.length - 1 && o();
                  break;
                }
                e += " ".length;
                const a = e - d;
                i + a > s && o(i), (d = e), (i += a);
              }
              return r;
            })(t, i);
            (t = a[0]), a.length > 1 && delete s.webPage;
            for (let t = 1; t < a.length; ++t)
              setTimeout(() => {
                this.sendText(e, a[t], s);
              }, t);
          }
          e = x.a.getPeerMigratedTo(e) || e;
          let a = s.entities || [];
          s.viaBotId || (t = g.a.parseMarkdown(t, a));
          let n = this.getInputEntities(a);
          n.length || (n = void 0);
          const r = this.generateOutgoingMessage(e, s);
          (r.entities = a), (r.message = t);
          const o = s.replyToMsgId
              ? ee.a.getServerMessageId(s.replyToMsgId)
              : void 0,
            d = x.a.isChannel(e);
          s.webPage &&
            (r.media = { _: "messageMediaWebPage", webpage: s.webPage });
          const c = (e) => {
            e ? (r.error = !0) : delete r.error,
              f.default.dispatchEvent("messages_pending");
          };
          return (
            (r.send = () => {
              c(!1);
              const i = {};
              this.pendingAfterMsgs[e] &&
                (i.afterMessageId = this.pendingAfterMsgs[e].messageId);
              const a = s.sendAsPeerId
                ? x.a.getInputPeerById(s.sendAsPeerId)
                : void 0;
              let l;
              return (
                (l = s.viaBotId
                  ? h.a.invokeApiAfter(
                      "messages.sendInlineBotResult",
                      {
                        peer: x.a.getInputPeerById(e),
                        random_id: r.random_id,
                        reply_to_msg_id: o || void 0,
                        query_id: s.queryId,
                        id: s.resultId,
                        clear_draft: s.clearDraft,
                        send_as: a,
                      },
                      i
                    )
                  : h.a.invokeApiAfter(
                      "messages.sendMessage",
                      {
                        no_webpage: s.noWebPage,
                        peer: x.a.getInputPeerById(e),
                        message: t,
                        random_id: r.random_id,
                        reply_to_msg_id: o || void 0,
                        entities: n,
                        clear_draft: s.clearDraft,
                        schedule_date: s.scheduleDate || void 0,
                        silent: s.silent,
                        send_as: a,
                      },
                      i
                    )),
                (this.pendingAfterMsgs[e] = i),
                l
                  .then(
                    (e) => {
                      if ("updateShortSentMessage" === e._) {
                        const t = r.promise;
                        delete r.promise;
                        const i = Object(k.a)(r);
                        (r.promise = t),
                          (i.date = e.date),
                          (i.id = e.id),
                          (i.media = e.media),
                          (i.entities = e.entities),
                          this.wrapMessageEntities(i),
                          e.pFlags.out && (i.pFlags.out = !0),
                          (e = {
                            _: "updates",
                            users: [],
                            chats: [],
                            seq: 0,
                            date: void 0,
                            updates: [
                              {
                                _: "updateMessageID",
                                random_id: r.random_id,
                                id: i.id,
                              },
                              {
                                _: s.scheduleDate
                                  ? "updateNewScheduledMessage"
                                  : d
                                  ? "updateNewChannelMessage"
                                  : "updateNewMessage",
                                message: i,
                                pts: e.pts,
                                pts_count: e.pts_count,
                              },
                            ],
                          });
                      } else
                        e.updates &&
                          e.updates.forEach((e) => {
                            "updateDraftMessage" === e._ && (e.local = !0);
                          });
                      T.a.processUpdateMessage(e), r.promise.resolve();
                    },
                    (e) => {
                      c(!0), r.promise.reject(e);
                    }
                  )
                  .finally(() => {
                    this.pendingAfterMsgs[e] === i &&
                      delete this.pendingAfterMsgs[e];
                  })
              );
            }),
            this.beforeMessageSending(r, {
              isScheduled: !!s.scheduleDate || void 0,
              threadId: s.threadId,
              clearDraft: s.clearDraft,
            }),
            r.promise
          );
        }
        sendFile(e, t, s = {}) {
          e = x.a.getPeerMigratedTo(e) || e;
          const i = this.generateOutgoingMessage(e, s),
            r = s.replyToMsgId
              ? ee.a.getServerMessageId(s.replyToMsgId)
              : void 0;
          let d, c;
          const l = "mime_type" in t ? t.mime_type : t.type,
            u = t instanceof File ? t.name : "",
            p = !(t instanceof File || t instanceof Blob);
          let m = s.caption || "";
          this.log("sendFile", t, l);
          const v = s.entities || [];
          m && (m = g.a.parseMarkdown(m, v));
          const _ = [],
            y = te.a.has(l);
          let I, P, S;
          if (p) (d = "document"), (c = "");
          else if (0 === l.indexOf("audio/") || ["video/ogg"].indexOf(l) >= 0) {
            (d = "audio"),
              (c = "audio." + ("ogg" === l.split("/")[1] ? "ogg" : "mp3")),
              (S = "sendMessageUploadAudioAction"),
              s.isVoiceMessage && ((d = "voice"), (i.pFlags.media_unread = !0));
            let e = {
              _: "documentAttributeAudio",
              pFlags: { voice: s.isVoiceMessage },
              waveform: s.waveform,
              duration: s.duration || 0,
            };
            _.push(e);
          } else if (s.isMedia)
            if (y) {
              (d = "photo"),
                (c = "photo." + l.split("/")[1]),
                (S = "sendMessageUploadPhotoAction");
              const e = {
                _: "photoSize",
                w: s.width,
                h: s.height,
                type: "full",
                location: null,
                size: t.size,
              };
              I = {
                _: "photo",
                id: "" + i.id,
                sizes: [e],
                w: s.width,
                h: s.height,
              };
              const a = O.a.getCacheContext(I, e.type);
              (a.downloaded = t.size),
                (a.url = s.objectURL || ""),
                (I = j.a.savePhoto(I));
            } else if (se.a.has(l)) {
              (d = "video"),
                (c = "video.mp4"),
                (S = "sendMessageUploadVideoAction");
              const e = {
                _: "documentAttributeVideo",
                pFlags: {
                  round_message: s.isRoundMessage,
                  supports_streaming: !0,
                },
                duration: s.duration,
                w: s.width,
                h: s.height,
              };
              _.push(e),
                s.noSound &&
                  t.size > 10240 &&
                  t.size < 10485760 &&
                  _.push({ _: "documentAttributeAnimated" });
            } else
              (d = "document"),
                (c = "document." + l.split("/")[1]),
                (S = "sendMessageUploadDocumentAction");
          else
            (d = "document"),
              (c = "document." + l.split("/")[1]),
              (S = "sendMessageUploadDocumentAction");
          if (
            (_.push({ _: "documentAttributeFilename", file_name: u || c }),
            -1 !== ["document", "video", "audio", "voice"].indexOf(d) && !p)
          ) {
            const e = [];
            P = {
              _: "document",
              id: "" + i.id,
              duration: s.duration,
              attributes: _,
              w: s.width,
              h: s.height,
              thumbs: e,
              mime_type: l,
              size: t.size,
            };
            const a = O.a.getCacheContext(P);
            let n;
            if (((a.downloaded = t.size), (a.url = s.objectURL || ""), y))
              _.push({
                _: "documentAttributeImageSize",
                w: s.width,
                h: s.height,
              }),
                (n = {
                  _: "photoSize",
                  w: s.width,
                  h: s.height,
                  type: "full",
                  size: t.size,
                });
            else if ("video" === d && s.thumb) {
              n = {
                _: "photoSize",
                w: s.thumb.size.width,
                h: s.thumb.size.height,
                type: "local-thumb",
                size: s.thumb.blob.size,
              };
              const e = O.a.getCacheContext(P, n.type);
              (e.downloaded = n.size), (e.url = s.thumb.url);
            }
            n && e.push(n), (P = F.a.saveDoc(P));
          }
          this.log("sendFile", d, c, t.type, s);
          const M = p
              ? void 0
              : new a.a({
                  attachMethod: "prepend",
                  tryAgainOnFail: !1,
                  isUpload: !0,
                }),
            b = Object(n.a)();
          M &&
            (M.attachPromise(b),
            (b.cancel = () => {
              const e = new Error("Download canceled");
              (e.name = "AbortError"), b.reject(e);
            }),
            b.catch((t) => {
              "AbortError" !== t.name ||
                k ||
                (this.log("cancelling upload", w),
                this.cancelPendingMessage(i.random_id),
                this.setTyping(e, { _: "sendMessageCancelAction" }),
                (null == E ? void 0 : E.cancel) && E.cancel());
            }));
          const w = p
            ? void 0
            : {
                _: I ? "messageMediaPhoto" : "messageMediaDocument",
                pFlags: {},
                preloader: M,
                photo: I,
                document: P,
                promise: b,
              };
          (i.entities = v),
            (i.message = m),
            (i.media = p
              ? { _: "messageMediaDocument", pFlags: {}, document: t }
              : w);
          const C = (e) => {
            e ? (i.error = !0) : delete i.error,
              f.default.dispatchEvent("messages_pending");
          };
          let k = !1,
            E = null;
          return (
            (i.send = () => {
              if (p) {
                const { id: e, access_hash: s, file_reference: i } = t,
                  a = {
                    _: "inputMediaDocument",
                    id: {
                      _: "inputDocument",
                      id: e,
                      access_hash: s,
                      file_reference: i,
                    },
                  };
                b.resolve(a);
              } else if (t instanceof File || t instanceof Blob) {
                const a = () => {
                  let a;
                  return (
                    (k && !i.error) ||
                      ((k = !1),
                      (E = O.a.upload(t)),
                      b.notifyAll({ done: 0, total: t.size })),
                    "video" === d &&
                      s.objectURL &&
                      (a = new Promise((e, t) => {
                        (s.thumb && s.thumb.blob
                          ? Promise.resolve(s.thumb)
                          : Object(o.a)(s.objectURL)
                        ).then((s) => {
                          s ? O.a.upload(s.blob).then(e, t) : e(null);
                        }, t);
                      })),
                    E &&
                      E.then(
                        (e) =>
                          he(this, void 0, void 0, function* () {
                            let t;
                            switch (
                              (delete i.media.preloader,
                              (e.name = c),
                              (k = !0),
                              d)
                            ) {
                              case "photo":
                                t = { _: "inputMediaUploadedPhoto", file: e };
                                break;
                              default:
                                t = {
                                  _: "inputMediaUploadedDocument",
                                  file: e,
                                  mime_type: l,
                                  pFlags: {
                                    force_file:
                                      "sendMessageUploadDocumentAction" === S ||
                                      void 0,
                                  },
                                  attributes: _,
                                };
                            }
                            if (a)
                              try {
                                const e = yield a;
                                t.thumb = e;
                              } catch (e) {
                                this.log.error(
                                  "sendFile thumb upload error:",
                                  e
                                );
                              }
                            b.resolve(t);
                          }),
                        () => {
                          C(!0);
                        }
                      ),
                    E.addNotifyListener((t) => {
                      const s = Math.max(
                        1,
                        Math.floor((100 * t.done) / t.total)
                      );
                      S && this.setTyping(e, { _: S, progress: 0 | s }),
                        b.notifyAll(t);
                    }),
                    b
                  );
                };
                s.isGroupedItem
                  ? a()
                  : this.sendSmthLazyLoadQueue.push({ load: a });
              }
              return b;
            }),
            this.beforeMessageSending(i, {
              isGroupedItem: s.isGroupedItem,
              isScheduled: !!s.scheduleDate || void 0,
              threadId: s.threadId,
              clearDraft: s.clearDraft,
            }),
            s.isGroupedItem ||
              (b.then(
                (t) => (
                  this.setTyping(e, { _: "sendMessageCancelAction" }),
                  h.a
                    .invokeApi("messages.sendMedia", {
                      background: s.background,
                      peer: x.a.getInputPeerById(e),
                      media: t,
                      message: m,
                      random_id: i.random_id,
                      reply_to_msg_id: r,
                      schedule_date: s.scheduleDate,
                      silent: s.silent,
                      entities: v,
                      clear_draft: s.clearDraft,
                      send_as: s.sendAsPeerId
                        ? x.a.getInputPeerById(s.sendAsPeerId)
                        : void 0,
                    })
                    .then(
                      (e) => {
                        T.a.processUpdateMessage(e);
                      },
                      (e) => {
                        if (
                          "photo" === d &&
                          400 === e.code &&
                          ("PHOTO_INVALID_DIMENSIONS" === e.type ||
                            "PHOTO_SAVE_FILE_INVALID" === e.type)
                        )
                          return (
                            (e.handled = !0), (d = "document"), void i.send()
                          );
                        throw (C(!0), e);
                      }
                    )
                )
              ),
              b.then(i.promise.resolve, i.promise.reject)),
            { message: i, promise: b }
          );
        }
        sendAlbum(e, t, s = {}) {
          return he(this, void 0, void 0, function* () {
            if (
              (s.threadId && !s.replyToMsgId && (s.replyToMsgId = s.threadId),
              1 === t.length)
            )
              return this.sendFile(
                e,
                t[0],
                Object.assign(Object.assign({}, s), s.sendFileDetails[0])
              );
            e = x.a.getPeerMigratedTo(e) || e;
            const i = s.replyToMsgId
              ? ee.a.getServerMessageId(s.replyToMsgId)
              : void 0;
            let a = s.caption || "",
              r = s.entities || [];
            a && (a = g.a.parseMarkdown(a, r)), this.log("sendAlbum", t, s);
            const o = "" + ++this.groupedTempId,
              d = t.map((t, n) => {
                const d = s.sendFileDetails[n],
                  c = Object.assign(
                    {
                      isGroupedItem: !0,
                      isMedia: s.isMedia,
                      scheduleDate: s.scheduleDate,
                      silent: s.silent,
                      replyToMsgId: i,
                      threadId: s.threadId,
                      sendAsPeerId: s.sendAsPeerId,
                      groupId: o,
                    },
                    d
                  );
                return (
                  0 === n && ((c.caption = a), (c.entities = r)),
                  this.sendFile(e, t, c).message
                );
              });
            s.clearDraft &&
              setTimeout(() => {
                H.a.clearDraft(e, s.threadId);
              }, 0);
            const c = (e, t) => {
                t ? (e.error = !0) : delete e.error,
                  f.default.dispatchEvent("messages_pending");
              },
              l = x.a.getInputPeerById(e),
              u = (t) => {
                this.setTyping(e, { _: "sendMessageCancelAction" });
                const a = Object(n.a)();
                return (
                  this.sendSmthLazyLoadQueue.push({
                    load: () =>
                      h.a
                        .invokeApi("messages.sendMultiMedia", {
                          peer: l,
                          multi_media: t,
                          reply_to_msg_id: i,
                          schedule_date: s.scheduleDate,
                          silent: s.silent,
                          clear_draft: s.clearDraft,
                          send_as: s.sendAsPeerId
                            ? x.a.getInputPeerById(s.sendAsPeerId)
                            : void 0,
                        })
                        .then(
                          (e) => {
                            T.a.processUpdateMessage(e), a.resolve();
                          },
                          (e) => {
                            d.forEach((e) => c(e, !0)), a.reject(e);
                          }
                        ),
                  }),
                  a
                );
              },
              p = d.map((e) =>
                e
                  .send()
                  .then((e) =>
                    h.a.invokeApi("messages.uploadMedia", { peer: l, media: e })
                  )
                  .then((t) => {
                    let s;
                    if ("messageMediaPhoto" === t._) {
                      const e = j.a.savePhoto(t.photo);
                      s = j.a.getMediaInput(e);
                    } else if ("messageMediaDocument" === t._) {
                      const e = F.a.saveDoc(t.document);
                      s = F.a.getMediaInput(e);
                    }
                    const i = {
                      _: "inputSingleMedia",
                      media: s,
                      random_id: e.random_id,
                      message: a,
                      entities: r,
                    };
                    return a && ((a = ""), (r = [])), i;
                  })
                  .catch((t) => {
                    if ("AbortError" === t.name) return null;
                    throw (
                      (this.log.error("sendAlbum upload item error:", t, e),
                      c(e, !0),
                      t)
                    );
                  })
              );
            return Promise.all(p).then((e) => u(e.filter(Boolean)));
          });
        }
        sendContact(e, t) {
          return this.sendOther(e, B.a.getContactMediaInput(t));
        }
        sendOther(e, t, s = {}) {
          var i;
          e = x.a.getPeerMigratedTo(e) || e;
          const a = this.generateOutgoingMessage(e, s),
            n = s.replyToMsgId
              ? ee.a.getServerMessageId(s.replyToMsgId)
              : void 0;
          let r;
          switch (t._) {
            case "inputMediaPoll": {
              const e = "" + a.id;
              (t.poll.id = e),
                L.a.savePoll(t.poll, {
                  _: "pollResults",
                  flags: 4,
                  total_voters: 0,
                  pFlags: {},
                  recent_voters: [],
                });
              const { poll: s, results: i } = L.a.getPoll(e);
              r = { _: "messageMediaPoll", poll: s, results: i };
              break;
            }
            case "inputMediaPhoto":
              r = { _: "messageMediaPhoto", photo: j.a.getPhoto(t.id.id) };
              break;
            case "inputMediaDocument":
              r = { _: "messageMediaDocument", document: F.a.getDoc(t.id.id) };
              break;
            case "inputMediaContact":
              r = {
                _: "messageMediaContact",
                phone_number: t.phone_number,
                first_name: t.first_name,
                last_name: t.last_name,
                user_id: null !== (i = t.user_id) && void 0 !== i ? i : "0",
                vcard: t.vcard,
              };
              break;
            case "inputMediaGeoPoint":
              r = { _: "messageMediaGeo", geo: s.geoPoint };
              break;
            case "inputMediaVenue":
              r = {
                _: "messageMediaVenue",
                geo: s.geoPoint,
                title: t.title,
                address: t.address,
                provider: t.provider,
                venue_id: t.venue_id,
                venue_type: t.venue_type,
              };
              break;
            case "messageMediaPending":
              r = t;
          }
          a.media = r;
          return (
            (a.send = () => {
              const i = {};
              this.pendingAfterMsgs[e] &&
                (i.afterMessageId = this.pendingAfterMsgs[e].messageId);
              const r = s.sendAsPeerId
                ? x.a.getInputPeerById(s.sendAsPeerId)
                : void 0;
              let o;
              return (
                (o = s.viaBotId
                  ? h.a.invokeApiAfter(
                      "messages.sendInlineBotResult",
                      {
                        peer: x.a.getInputPeerById(e),
                        random_id: a.random_id,
                        reply_to_msg_id: n || void 0,
                        query_id: s.queryId,
                        id: s.resultId,
                        clear_draft: s.clearDraft,
                        schedule_date: s.scheduleDate,
                        silent: s.silent,
                        send_as: r,
                      },
                      i
                    )
                  : h.a.invokeApiAfter(
                      "messages.sendMedia",
                      {
                        peer: x.a.getInputPeerById(e),
                        media: t,
                        random_id: a.random_id,
                        reply_to_msg_id: n || void 0,
                        message: "",
                        clear_draft: s.clearDraft,
                        schedule_date: s.scheduleDate,
                        silent: s.silent,
                        send_as: r,
                      },
                      i
                    )),
                (this.pendingAfterMsgs[e] = i),
                o
                  .then(
                    (e) => {
                      e.updates &&
                        e.updates.forEach((e) => {
                          "updateDraftMessage" === e._ && (e.local = !0);
                        }),
                        T.a.processUpdateMessage(e);
                    },
                    (e) => {
                      f.default.dispatchEvent("messages_pending");
                    }
                  )
                  .finally(() => {
                    this.pendingAfterMsgs[e] === i &&
                      delete this.pendingAfterMsgs[e];
                  })
              );
            }),
            this.beforeMessageSending(a, {
              isScheduled: !!s.scheduleDate || void 0,
              threadId: s.threadId,
              clearDraft: s.clearDraft,
            }),
            a.promise
          );
        }
        beforeMessageSending(e, t = {}) {
          const s = e.id,
            i = this.getMessagePeer(e),
            a = t.isScheduled
              ? this.getScheduledMessagesStorage(i)
              : this.getMessagesStorage(i);
          if (t.isScheduled)
            this.saveMessages([e], {
              storage: a,
              isScheduled: !0,
              isOutgoing: !0,
            }),
              setTimeout(() => {
                f.default.dispatchEvent("scheduled_new", { peerId: i, mid: s });
              }, 0);
          else {
            const n = [
              this.getHistoryStorage(i),
              t.threadId ? this.getHistoryStorage(i, t.threadId) : void 0,
            ];
            for (const e of n) e && e.history.unshift(s);
            this.saveMessages([e], { storage: a, isOutgoing: !0 }),
              this.setDialogTopMessage(e),
              setTimeout(() => {
                f.default.dispatchEvent("history_append", {
                  storage: a,
                  peerId: i,
                  mid: s,
                });
              }, 0);
          }
          (this.pendingByRandomId[e.random_id] = {
            peerId: i,
            tempId: s,
            threadId: t.threadId,
            storage: a,
          }),
            !t.isGroupedItem &&
              e.send &&
              setTimeout(() => {
                t.clearDraft && H.a.clearDraft(i, t.threadId), e.send();
              }, 0);
        }
        generateOutgoingMessage(e, t) {
          let s;
          t.threadId && !t.replyToMsgId && (t.replyToMsgId = t.threadId);
          const i = x.a.isBroadcast(e);
          if (i) {
            if (x.a.getPeer(e).pFlags.signatures) {
              const e = B.a.getSelf();
              s = e.first_name + (e.last_name ? " " + e.last_name : "");
            }
          }
          return {
            _: "message",
            id: this.generateTempMessageId(e),
            from_id: t.sendAsPeerId
              ? x.a.getOutputPeer(t.sendAsPeerId)
              : this.generateFromId(e),
            peer_id: x.a.getOutputPeer(e),
            post_author: s,
            pFlags: this.generateFlags(e),
            date: t.scheduleDate || Object(r.h)(!0) + p.a.serverTimeOffset,
            message: "",
            grouped_id: t.groupId,
            random_id: Object(d.b)(),
            reply_to: this.generateReplyHeader(t.replyToMsgId, t.threadId),
            via_bot_id: t.viaBotId,
            reply_markup: t.replyMarkup,
            replies: this.generateReplies(e),
            views: i && 1,
            pending: !0,
            promise: void 0 === t.groupId ? Object(n.a)() : void 0,
          };
        }
        generateReplyHeader(e, t) {
          const s = { _: "messageReplyHeader", reply_to_msg_id: e || t };
          return t && s.reply_to_msg_id !== t && (s.reply_to_top_id = t), s;
        }
        generateReplies(e) {
          let t;
          if (x.a.isBroadcast(e)) {
            const s = z.default.getCachedFullChat(e.toChatId());
            (null == s ? void 0 : s.linked_chat_id) &&
              (t = {
                _: "messageReplies",
                flags: 1,
                pFlags: { comments: !0 },
                channel_id: s.linked_chat_id,
                replies: 0,
                replies_pts: 0,
              });
          }
          return t;
        }
        generateFromId(e) {
          return e.isAnyChat() &&
            (e.isBroadcast() || this.isAnonymousSending(e))
            ? void 0
            : x.a.getOutputPeer(B.a.getSelf().id.toPeerId());
        }
        generateFlags(e) {
          const t = {};
          return (
            e !== B.a.getSelf().id &&
              ((t.out = !0),
              x.a.isChannel(e) || B.a.isBot(e) || (t.unread = !0)),
            x.a.isBroadcast(e) && (t.post = !0),
            t
          );
        }
        generateForwardHeader(e, t) {
          const s = B.a.getSelf().id.toPeerId(),
            i = t.fromId;
          if (i === s && t.peerId === s && !t.fwd_from) return;
          const a = { _: "messageFwdHeader", flags: 0, date: t.date };
          let n = !1;
          if (t.fwd_from)
            (a.from_id = t.fwd_from.from_id),
              (a.from_name = t.fwd_from.from_name),
              (a.post_author = t.fwd_from.post_author);
          else {
            if (((a.post_author = t.post_author), i.isUser())) {
              const e = z.default.getCachedFullUser(i.toUserId());
              (null == e ? void 0 : e.private_forward_name) &&
                ((a.from_name = e.private_forward_name), (n = !0));
            }
            n || (a.from_id = x.a.getOutputPeer(i));
          }
          return (
            x.a.isBroadcast(t.peerId) &&
              (t.post_author && (a.post_author = t.post_author),
              (a.channel_post = t.id)),
            e !== s ||
              n ||
              ((a.saved_from_msg_id = t.id),
              (a.saved_from_peer = x.a.getOutputPeer(t.peerId))),
            a
          );
        }
        generateFakeAvatarMessage(e, t) {
          const s = Number.MAX_SAFE_INTEGER,
            i = {
              _: "messageService",
              pFlags: {},
              action: { _: "messageActionChannelEditPhoto", photo: t },
              id: s,
              peer_id: x.a.getOutputPeer(e),
              mid: s,
              peerId: e,
              date: t.date,
              fromId: e,
            };
          return this.getMessagesStorage(e).set(s, i), i;
        }
        isAnonymousSending(e) {
          var t, s;
          return (
            e.isAnyChat() &&
            (null ===
              (s =
                null === (t = x.a.getPeer(e).admin_rights) || void 0 === t
                  ? void 0
                  : t.pFlags) || void 0 === s
              ? void 0
              : s.anonymous)
          );
        }
        setDialogTopMessage(e, t = this.getDialogOnly(e.peerId)) {
          if (t) {
            t.top_message = e.mid;
            (this.getHistoryStorage(e.peerId).maxId = e.mid),
              this.dialogsStorage.generateIndexForDialog(t, !1, e),
              this.scheduleHandleNewDialogs(e.peerId, t);
          }
        }
        cancelPendingMessage(e) {
          const t = this.pendingByRandomId[e];
          if (t) {
            const { peerId: s, tempId: i, storage: a } = t,
              n = this.getHistoryStorage(s);
            return (
              T.a.processLocalUpdate({
                _: "updateDeleteMessages",
                messages: [i],
                pts: void 0,
                pts_count: void 0,
              }),
              n.history.delete(i),
              delete this.pendingByRandomId[e],
              a.delete(i),
              !0
            );
          }
          return !1;
        }
        fillConversations() {
          return he(this, void 0, void 0, function* () {
            const e = this.middleware.get();
            for (; !this.dialogsStorage.isDialogsLoaded(void 0); ) {
              const t = yield this.getTopMessages(100, void 0);
              if (!e() || t.isEnd) break;
            }
          });
        }
        getConversations(e = "", t, s, i = 0, a) {
          return this.dialogsStorage.getDialogs(e, t, s, i, a);
        }
        getReadMaxIdIfUnread(e, t) {
          var s;
          const i = this.getHistoryStorage(e, t);
          if (t) {
            const t = this.getHistoryStorage(e),
              a = Math.max(
                null !== (s = t.readMaxId) && void 0 !== s ? s : 0,
                i.readMaxId
              );
            return !this.getMessageByPeer(e, i.maxId).pFlags.out && a < i.maxId
              ? a
              : 0;
          }
          {
            const t = this.getMessageByPeer(e, i.maxId),
              s = e.isUser()
                ? Math.max(i.readMaxId, i.readOutboxMaxId)
                : i.readMaxId;
            return !t.pFlags.out && s < i.maxId ? s : 0;
          }
        }
        getTopMessages(e, t, s) {
          let i = 0;
          void 0 === s && (s = this.dialogsStorage.getOffsetDate(t)),
            s && ((i = 65536 * s), (s += p.a.serverTimeOffset));
          const a = this.middleware.get(),
            n = {
              folder_id: t,
              offset_date: s,
              offset_id: 0,
              offset_peer: x.a.getInputPeerById(void 0),
              limit: 100,
              hash: "0",
            };
          return h.a
            .invokeApiSingle("messages.getDialogs", n, { noErrorBox: !0 })
            .then((r) => {
              if (!a() || "messages.dialogsNotModified" === r._) return null;
              q.b &&
                this.log(
                  "messages.getDialogs result:",
                  r.dialogs,
                  Object.assign({}, r.dialogs[0])
                ),
                s || void 0 === t || this.dialogsStorage.resetPinnedOrder(t),
                s || Y.default.setAuthorized(!0),
                B.a.saveApiUsers(r.users),
                U.a.saveApiChats(r.chats),
                this.saveMessages(r.messages);
              let o = !!s,
                d = !1;
              const c = {},
                l = void 0 === t ? 0 : t,
                h = void 0 === t;
              Object(P.a)(r.dialogs, (e) => {
                void 0 === e.folder_id && (e.folder_id = l),
                  this.dialogsStorage.saveDialog(e, void 0, !0, h),
                  o ||
                    x.a.isChannel(e.peerId || x.a.getPeerId(e.peer)) ||
                    (this.incrementMaxSeenId(e.top_message), (o = !0)),
                  void 0 !== e.peerId &&
                    (i &&
                      e.index > i &&
                      (this.scheduleHandleNewDialogs(e.peerId, e), (d = !0)),
                    ee.a.getServerMessageId(e.read_inbox_max_id) ||
                      ee.a.getServerMessageId(e.read_outbox_max_id) ||
                      ((c[e.peerId] = e),
                      this.log.error("noIdsDialogs", e, n)));
              });
              const u = Object.keys(c);
              if (u.length) {
                const e = u.map((e) => e.toPeerId()),
                  t = e.map((e) => this.reloadConversation(e));
                Promise.all(t).then(() => {
                  f.default.dispatchEvent("dialogs_multiupdate", c);
                  for (let t = 0; t < e.length; ++t)
                    f.default.dispatchEvent("dialog_unread", { peerId: e[t] });
                });
              }
              const p = r.count,
                g = this.dialogsStorage.getFolderDialogs(t, !1);
              let m = 0;
              for (let e = 0, t = g.length; e < t; ++e)
                ee.a.getServerMessageId(g[e].top_message) && ++m;
              const v = !p || m >= p || !r.dialogs.length;
              v && this.dialogsStorage.setDialogsLoaded(t, !0),
                d
                  ? this.scheduleHandleNewDialogs()
                  : f.default.dispatchEvent("dialogs_multiupdate", {});
              const _ = r.dialogs,
                y = 100 === e ? _ : _.slice(0, e);
              return {
                isEnd: v && y[y.length - 1] === _[_.length - 1],
                count: p,
                dialogs: y,
              };
            });
        }
        forwardMessages(e, t, s, i = {}) {
          e = x.a.getPeerMigratedTo(e) || e;
          for (
            let a = 0, n = (s = s.slice().sort((e, t) => e - t)).length;
            a < n;
            ++a
          ) {
            const n = s[a],
              r = this.getMessageByPeer(t, n);
            r.pFlags.is_outgoing &&
              (this.sendText(e, r.message, {
                entities: r.entities,
                scheduleDate: i.scheduleDate,
                silent: i.silent,
              }),
              s.splice(a--, 1));
          }
          if (!s.length) return Promise.resolve();
          i.dropCaptions && (i.dropAuthor = !0);
          const a = {},
            n = s.map((s) => {
              var n, r, o;
              const d = this.getMessageByPeer(t, s),
                c = this.generateOutgoingMessage(e, i),
                l = ["entities", "media"];
              i.dropAuthor ||
                ((c.fwd_from = this.generateForwardHeader(e, d)),
                l.push("views", "forwards"),
                (null === (n = c.fwd_from) || void 0 === n
                  ? void 0
                  : n.from_name) &&
                  e === f.default.myId &&
                  delete c.from_id),
                (i.dropCaptions && d.media) || l.push("message"),
                l.forEach((e) => {
                  c[e] = d[e];
                });
              const h =
                null === (r = c.media) || void 0 === r ? void 0 : r.document;
              if (h) {
                ["round", "voice"].includes(h.type) &&
                  (c.pFlags.media_unread = !0);
              }
              if (d.grouped_id) {
                (null !== (o = a[d.grouped_id]) && void 0 !== o
                  ? o
                  : (a[d.grouped_id] = {
                      tempId: "" + ++this.groupedTempId,
                      messages: [],
                    })
                ).messages.push(c);
              }
              return c;
            });
          for (const e in a) {
            const t = a[e];
            t.messages.length > 1 &&
              t.messages.forEach((e) => {
                e.grouped_id = t.tempId;
              });
          }
          n.forEach((e) => {
            this.beforeMessageSending(e, {
              isScheduled: !!i.scheduleDate || void 0,
            });
          });
          const r = {};
          this.pendingAfterMsgs[e] &&
            (r.afterMessageId = this.pendingAfterMsgs[e].messageId);
          const o = h.a
            .invokeApiAfter(
              "messages.forwardMessages",
              {
                from_peer: x.a.getInputPeerById(t),
                id: s.map((e) => ee.a.getServerMessageId(e)),
                random_id: n.map((e) => e.random_id),
                to_peer: x.a.getInputPeerById(e),
                with_my_score: i.withMyScore,
                silent: i.silent,
                schedule_date: i.scheduleDate,
                drop_author: i.dropAuthor,
                drop_media_captions: i.dropCaptions,
                send_as: i.sendAsPeerId
                  ? x.a.getInputPeerById(i.sendAsPeerId)
                  : void 0,
              },
              r
            )
            .then((e) => {
              this.log("forwardMessages updates:", e),
                T.a.processUpdateMessage(e);
            })
            .finally(() => {
              this.pendingAfterMsgs[e] === r && delete this.pendingAfterMsgs[e];
            });
          return (this.pendingAfterMsgs[e] = r), o;
        }
        generateEmptyMessage(e) {
          return {
            _: "messageEmpty",
            id: ee.a.getServerMessageId(e),
            mid: e,
            deleted: !0,
            pFlags: {},
          };
        }
        getMessageFromStorage(e, t) {
          return (e && e.get(t)) || this.generateEmptyMessage(t);
        }
        createMessageStorage() {
          return new Map();
        }
        getMessagesStorage(e) {
          var t;
          return null !== (t = this.messagesStorageByPeerId[e]) && void 0 !== t
            ? t
            : (this.messagesStorageByPeerId[e] = this.createMessageStorage());
        }
        getMessageById(e) {
          for (const t in this.messagesStorageByPeerId) {
            if (x.a.isChannel(t.toPeerId())) continue;
            const s = this.messagesStorageByPeerId[t].get(e);
            if (s) return s;
          }
          return this.getMessageFromStorage(null, e);
        }
        getMessageByPeer(e, t) {
          return e
            ? this.getMessageFromStorage(this.getMessagesStorage(e), t)
            : this.getMessageById(t);
        }
        getMessagePeer(e) {
          return (e.peer_id && x.a.getPeerId(e.peer_id)) || _.c;
        }
        getDialogByPeerId(e) {
          return this.dialogsStorage.getDialog(e);
        }
        getDialogOnly(e) {
          return this.dialogsStorage.getDialogOnly(e);
        }
        reloadConversation(e) {
          let t;
          if (void 0 !== e) {
            const s = x.a.getPeerId(e);
            let i = this.reloadConversationsPeers.get(s);
            if ((i && (t = i.promise), t)) return t;
            (t = Object(n.a)()),
              this.reloadConversationsPeers.set(
                s,
                (i = {
                  inputDialogPeer: x.a.getInputDialogPeerById(e),
                  promise: t,
                })
              );
          }
          return (
            this.reloadConversationsPromise ||
              (this.reloadConversationsPromise = new Promise((e, t) => {
                setTimeout(() => {
                  const s = [],
                    i = {};
                  for (const [e, { inputDialogPeer: t, promise: a }] of this
                    .reloadConversationsPeers)
                    s.push(t), (i[e] = a);
                  this.reloadConversationsPeers.clear();
                  const a = () => {
                    for (const e in i) i[e].resolve(void 0);
                  };
                  h.a
                    .invokeApi("messages.getPeerDialogs", { peers: s })
                    .then(
                      (t) => {
                        this.dialogsStorage.applyDialogs(t),
                          t.dialogs.forEach((e) => {
                            const t = e.peerId;
                            t && (i[t].resolve(e), delete i[t]);
                          }),
                          a(),
                          e();
                      },
                      (e) => {
                        a(), t(e);
                      }
                    )
                    .finally(() => {
                      (this.reloadConversationsPromise = null),
                        this.reloadConversationsPeers.size &&
                          this.reloadConversation();
                    });
                }, 0);
              })),
            t || this.reloadConversationsPromise
          );
        }
        doFlushHistory(e, t, s) {
          return h.a
            .invokeApiSingle("messages.deleteHistory", {
              just_clear: t,
              revoke: s,
              peer: e,
              max_id: 0,
            })
            .then(
              (i) => (
                T.a.processUpdateMessage({
                  _: "updateShort",
                  update: {
                    _: "updatePts",
                    pts: i.pts,
                    pts_count: i.pts_count,
                  },
                }),
                !i.offset || this.doFlushHistory(e, t, s)
              )
            );
        }
        flushHistory(e, t, s) {
          return he(this, void 0, void 0, function* () {
            if (x.a.isChannel(e)) {
              const t = this.getHistory(e, 0, 1),
                s = t instanceof Promise ? yield t : t,
                i = e.toChatId(),
                a = s.history[0] || 0;
              return h.a
                .invokeApiSingle("channels.deleteHistory", {
                  channel: U.a.getChannelInput(i),
                  max_id: ee.a.getServerMessageId(a),
                })
                .then(
                  (e) => (
                    e &&
                      T.a.processLocalUpdate({
                        _: "updateChannelAvailableMessages",
                        channel_id: i,
                        available_min_id: a,
                      }),
                    e
                  )
                );
            }
            return this.doFlushHistory(x.a.getInputPeerById(e), t, s).then(
              () => {
                [
                  this.historiesStorage,
                  this.threadsStorage,
                  this.searchesStorage,
                  this.pinnedMessages,
                  this.pendingAfterMsgs,
                  this.pendingTopMsgs,
                ].forEach((t) => {
                  delete t[e];
                });
                const s = this.needSingleMessages.get(e);
                if (
                  (s && s.clear(),
                  [
                    this.messagesStorageByPeerId,
                    this.scheduledMessagesStorage,
                  ].forEach((t) => {
                    const s = t[e];
                    s && s.clear();
                  }),
                  t)
                )
                  f.default.dispatchEvent("dialog_flush", { peerId: e });
                else {
                  delete this.notificationsToHandle[e], delete this.typings[e];
                  const t = this.reloadConversationsPeers.get(e);
                  t &&
                    (this.reloadConversationsPeers.delete(e),
                    t.promise.resolve(void 0)),
                    this.dialogsStorage.dropDialogOnDeletion(e);
                }
              }
            );
          });
        }
        onPeerDeleted(e) {}
        hidePinnedMessages(e) {
          return Promise.all([
            R.default.getState(),
            this.getPinnedMessage(e),
          ]).then(([t, s]) => {
            (t.hiddenPinnedMessages[e] = s.maxId),
              f.default.dispatchEvent("peer_pinned_hidden", {
                peerId: e,
                maxId: s.maxId,
              });
          });
        }
        getPinnedMessage(e) {
          var t;
          const s =
            null !== (t = this.pinnedMessages[e]) && void 0 !== t
              ? t
              : (this.pinnedMessages[e] = {});
          return s.promise
            ? s.promise
            : s.maxId
            ? Promise.resolve(s)
            : (s.promise = this.getSearch({
                peerId: e,
                inputFilter: { _: "inputMessagesFilterPinned" },
                maxId: 0,
                limit: 1,
              })
                .then((e) => {
                  var t;
                  return (
                    (s.count = e.count),
                    (s.maxId =
                      null === (t = e.history[0]) || void 0 === t
                        ? void 0
                        : t.mid),
                    s
                  );
                })
                .finally(() => {
                  delete s.promise;
                }));
        }
        updatePinnedMessage(e, t, s, i, a) {
          return h.a
            .invokeApi("messages.updatePinnedMessage", {
              peer: x.a.getInputPeerById(e),
              unpin: s,
              silent: i,
              pm_oneside: a,
              id: ee.a.getServerMessageId(t),
            })
            .then((e) => {
              T.a.processUpdateMessage(e);
            });
        }
        unpinAllMessages(e) {
          return h.a
            .invokeApiSingle("messages.unpinAllMessages", {
              peer: x.a.getInputPeerById(e),
            })
            .then((t) => {
              if (
                (T.a.processUpdateMessage({
                  _: "updateShort",
                  update: {
                    _: "updatePts",
                    pts: t.pts,
                    pts_count: t.pts_count,
                  },
                }),
                !t.offset)
              ) {
                return (
                  this.getMessagesStorage(e).forEach((e) => {
                    e.pFlags.pinned && delete e.pFlags.pinned;
                  }),
                  f.default.dispatchEvent("peer_pinned_messages", {
                    peerId: e,
                    unpinAll: !0,
                  }),
                  delete this.pinnedMessages[e],
                  !0
                );
              }
              return this.unpinAllMessages(e);
            });
        }
        getAlbumText(e) {
          const t = this.groupedMessagesStorage[e];
          let s,
            i,
            a,
            n = 0;
          for (const [e, r] of t)
            if (r.message) {
              if (++n > 1) break;
              (s = r.message), (i = r.totalEntities), (a = r.entities);
            }
          return (
            n > 1 && ((s = void 0), (i = void 0), (a = void 0)),
            { message: s, entities: a, totalEntities: i }
          );
        }
        getGroupsFirstMessage(e) {
          if (!e.grouped_id) return e;
          const t = this.groupedMessagesStorage[e.grouped_id];
          let s = Number.MAX_SAFE_INTEGER;
          for (const [e, i] of t) i.mid < s && (s = i.mid);
          return t.get(s);
        }
        getMidsByAlbum(e) {
          return Object(re.a)(this.groupedMessagesStorage[e], "asc");
        }
        getMidsByMessage(e) {
          var t;
          return (null === (t = e) || void 0 === t ? void 0 : t.grouped_id)
            ? this.getMidsByAlbum(e.grouped_id)
            : [e.mid];
        }
        filterMessages(e, t) {
          const s = [];
          if (e.grouped_id) {
            const i = this.groupedMessagesStorage[e.grouped_id];
            for (const [e, a] of i) t(a) && s.push(a);
          } else t(e) && s.push(e);
          return s;
        }
        generateTempMessageId(e) {
          const t = this.getDialogOnly(e);
          return ee.a.generateMessageId(
            (null == t ? void 0 : t.top_message) || 0,
            !0
          );
        }
        saveMessage(e, t = {}) {
          var s, i;
          if ((void 0 === e.pFlags && (e.pFlags = {}), "messageEmpty" === e._))
            return void (e.deleted = !0);
          const a = this.getMessagePeer(e),
            n = t.storage || this.getMessagesStorage(a),
            r = "peerChannel" === e.peer_id._,
            o = r && U.a.isBroadcast(a.toChatId()),
            d = "message" === e._;
          t.isOutgoing && (e.pFlags.is_outgoing = !0);
          const c = ee.a.generateMessageId(e.id);
          if (((e.mid = c), d)) {
            if ((t.isScheduled && (e.pFlags.is_scheduled = !0), e.grouped_id)) {
              (null !== (s = this.groupedMessagesStorage[e.grouped_id]) &&
              void 0 !== s
                ? s
                : (this.groupedMessagesStorage[e.grouped_id] = new Map())
              ).set(c, e);
            }
            e.via_bot_id && (e.viaBotId = e.via_bot_id);
          }
          const l = this.getDialogOnly(a);
          l &&
            c &&
            c > l[e.pFlags.out ? "read_outbox_max_id" : "read_inbox_max_id"] &&
            (e.pFlags.unread = !0),
            e.reply_to &&
              (e.reply_to.reply_to_msg_id &&
                (e.reply_to.reply_to_msg_id = e.reply_to_mid =
                  ee.a.generateMessageId(e.reply_to.reply_to_msg_id)),
              e.reply_to.reply_to_top_id &&
                (e.reply_to.reply_to_top_id = ee.a.generateMessageId(
                  e.reply_to.reply_to_top_id
                ))),
            d &&
              e.replies &&
              (e.replies.max_id &&
                (e.replies.max_id = ee.a.generateMessageId(e.replies.max_id)),
              e.replies.read_max_id &&
                (e.replies.read_max_id = ee.a.generateMessageId(
                  e.replies.read_max_id
                )));
          const h = !!a;
          h || (e.date -= p.a.serverTimeOffset);
          const u = B.a.getSelf().id.toPeerId(),
            g = d && e.fwd_from;
          if (
            ((e.peerId = a),
            (e.fromId =
              a === u
                ? g
                  ? g.from_id
                    ? x.a.getPeerId(g.from_id)
                    : _.c
                  : u
                : e.pFlags.post || !e.from_id
                ? a
                : x.a.getPeerId(e.from_id)),
            g)
          ) {
            g.saved_from_msg_id &&
              (g.saved_from_msg_id = ee.a.generateMessageId(
                g.saved_from_msg_id
              )),
              g.channel_post &&
                (g.channel_post = ee.a.generateMessageId(g.channel_post));
            const t = g.saved_from_peer || g.from_id,
              s = g.saved_from_msg_id || g.channel_post;
            if (t && s) {
              const i = x.a.getPeerId(t),
                a = ee.a.generateMessageId(s);
              e.savedFrom = i + "_" + a;
            }
            (e.fwdFromId = x.a.getPeerId(g.from_id)),
              h || (g.date -= p.a.serverTimeOffset);
          }
          const f = { type: "message", peerId: a, messageId: c };
          if (d && e.media) {
            let s = !1;
            switch (e.media._) {
              case "messageMediaEmpty":
                delete e.media;
                break;
              case "messageMediaPhoto":
                e.media.ttl_seconds
                  ? (s = !0)
                  : (e.media.photo = j.a.savePhoto(e.media.photo, f)),
                  e.media.photo || delete e.media;
                break;
              case "messageMediaPoll": {
                const t = L.a.savePoll(e.media.poll, e.media.results, e);
                (e.media.poll = t.poll), (e.media.results = t.results);
                break;
              }
              case "messageMediaDocument":
                if (e.media.ttl_seconds) s = !0;
                else {
                  const t = e.media.document;
                  (e.media.document = F.a.saveDoc(t, f)),
                    e.media.document || "documentEmpty" === t._ || (s = !0);
                }
                break;
              case "messageMediaWebPage": {
                const s = N.a.getMessageKeyForPendingWebPage(
                  a,
                  c,
                  t.isScheduled
                );
                e.media.webpage = N.a.saveWebPage(e.media.webpage, s, f);
                break;
              }
              case "messageMediaInvoice":
                (s = !0), (e.media = { _: "messageMediaUnsupported" });
                break;
              case "messageMediaUnsupported":
                s = !0;
            }
            s &&
              ((e.media = { _: "messageMediaUnsupported" }),
              (e.message = ""),
              delete e.entities,
              delete e.totalEntities);
          }
          if (!d && e.action) {
            const t = e.action;
            let s, n;
            const d = e.fromId === B.a.getSelf().id ? "You" : "";
            switch (
              (t.photo && (t.photo = j.a.savePhoto(t.photo, f)),
              t.document && (t.document = F.a.saveDoc(t.photo, f)),
              t._)
            ) {
              case "messageActionChatEditPhoto":
                (
                  null === (i = t.photo) || void 0 === i
                    ? void 0
                    : i.video_sizes
                )
                  ? (t._ = o
                      ? "messageActionChannelEditVideo"
                      : "messageActionChatEditVideo")
                  : o && (t._ = "messageActionChannelEditPhoto");
                break;
              case "messageActionGroupCall": {
                let e;
                ie.a.saveGroupCall(t.call),
                  (e = void 0 === t.duration ? "started" : "ended"),
                  o || (e += "_by" + d),
                  (t.type = e);
                break;
              }
              case "messageActionChatEditTitle":
                o && (t._ = "messageActionChannelEditTitle");
                break;
              case "messageActionChatDeletePhoto":
                o && (t._ = "messageActionChannelDeletePhoto");
                break;
              case "messageActionChatAddUser":
                1 === t.users.length
                  ? ((t.user_id = t.users[0]),
                    e.fromId === t.user_id &&
                      (t._ = r
                        ? "messageActionChatJoined" + d
                        : "messageActionChatReturn" + d))
                  : t.users.length > 1 && (t._ = "messageActionChatAddUsers");
                break;
              case "messageActionChatDeleteUser":
                e.fromId === t.user_id && (t._ = "messageActionChatLeave" + d);
                break;
              case "messageActionChannelMigrateFrom":
                (s = t.chat_id.toPeerId(!0)), (n = a);
                break;
              case "messageActionChatMigrateTo":
                (s = a), (n = t.channel_id.toPeerId(!0));
                break;
              case "messageActionHistoryClear":
                (e.clear_history = !0),
                  delete e.pFlags.out,
                  delete e.pFlags.unread;
                break;
              case "messageActionPhoneCall":
                t.type =
                  (t.pFlags.video ? "video_" : "") +
                  (void 0 !== t.duration
                    ? e.pFlags.out
                      ? "out_"
                      : "in_"
                    : "") +
                  (void 0 !== t.duration
                    ? "ok"
                    : "phoneCallDiscardReasonMissed" === t.reason._
                    ? "missed"
                    : "cancelled");
            }
            s &&
              n &&
              !this.migratedFromTo[s] &&
              !this.migratedToFrom[n] &&
              this.migrateChecks(s, n);
          }
          d &&
            e.message.length &&
            !e.totalEntities &&
            this.wrapMessageEntities(e),
            n.set(c, e);
        }
        saveMessages(e, t = {}) {
          e.saved ||
            ((e.saved = !0),
            e.forEach((e) => {
              this.saveMessage(e, t);
            }));
        }
        wrapMessageEntities(e) {
          const t = e.entities ? e.entities.slice() : [];
          e.message = g.a.fixEmoji(e.message, t);
          const s = g.a.parseEntities(e.message);
          e.totalEntities = g.a.mergeEntities(t, s);
        }
        wrapMessageForReply(e, t = e.message, s, i, a, n) {
          const r = [];
          let o = !1;
          const d = (e, t) => {
              if (e) {
                if (void 0 === t && o) return;
                t = i ? c.default.format(e, !0) : Object(c.i18n)(e);
              }
              if (i) r.push(t);
              else {
                const e = document.createElement("i");
                "string" == typeof t ? (e.innerHTML = t) : e.append(t),
                  r.push(e);
              }
            },
            l = this.isRestricted(e);
          let h = e.totalEntities;
          if (e.media && !l) {
            Object(Z.a)(e);
            let a = !0;
            if (e.grouped_id) {
              if (s) {
                const t = this.getMidsByMessage(e);
                if (s.length === t.length) {
                  for (const e of t)
                    if (!s.includes(e)) {
                      a = !1;
                      break;
                    }
                } else a = !1;
              }
              if (a) {
                const s = this.getAlbumText(e.grouped_id);
                (t = s.message),
                  (h = s.totalEntities),
                  n || (d("AttachAlbum"), (o = !0));
              }
            } else a = !1;
            if ((!a && !n) || !t) {
              const s = e.media;
              switch (s._) {
                case "messageMediaPhoto":
                  d("AttachPhoto");
                  break;
                case "messageMediaDice":
                  d(void 0, i ? s.emoticon : g.a.wrapEmojiText(s.emoticon));
                  break;
                case "messageMediaVenue":
                  (t = s.title), d("AttachLocation");
                  break;
                case "messageMediaGeo":
                  d("AttachLocation");
                  break;
                case "messageMediaGeoLive":
                  d("AttachLiveLocation");
                  break;
                case "messageMediaPoll":
                  d(
                    void 0,
                    i ? "ðŸ“Š " + (s.poll.question || "poll") : s.poll.rReply
                  );
                  break;
                case "messageMediaContact":
                  d("AttachContact");
                  break;
                case "messageMediaGame": {
                  const e = "ðŸŽ® " + s.game.title;
                  d(void 0, i ? e : g.a.wrapEmojiText(e));
                  break;
                }
                case "messageMediaDocument": {
                  const e = s.document;
                  if ("video" === e.type) d("AttachVideo");
                  else if ("voice" === e.type) d("AttachAudio");
                  else if ("gif" === e.type) d("AttachGif");
                  else if ("round" === e.type) d("AttachRound");
                  else if ("sticker" === e.type)
                    e.stickerEmojiRaw &&
                      d(void 0, (i ? e.stickerEmojiRaw : e.stickerEmoji) + " "),
                      d("AttachSticker"),
                      (t = "");
                  else if ("audio" === e.type) {
                    const t = e.attributes.find(
                        (e) =>
                          "documentAttributeAudio" === e._ &&
                          (e.title || e.performer)
                      ),
                      s =
                        "ðŸŽµ " +
                        (t
                          ? [t.title, t.performer].filter(Boolean).join(" - ")
                          : e.file_name);
                    d(void 0, i ? s : g.a.wrapEmojiText(s));
                  } else
                    d(void 0, i ? e.file_name : g.a.wrapEmojiText(e.file_name));
                  break;
                }
                case "messageMediaUnsupported":
                  d(c.UNSUPPORTED_LANG_PACK_KEY);
              }
            }
            const l = r.length;
            t && l && r.push(", ");
          }
          if (e.action) {
            const t = this.wrapMessageActionTextNew(e, i);
            t && d(void 0, t);
          }
          if (
            (l && ((t = Object(ne.a)(e.restriction_reason).text), (h = [])), t)
          )
            if (((t = Object(ce.a)(t, 100)), h || (h = []), i))
              r.push(g.a.wrapPlainText(t, h));
            else {
              if (a) {
                a = a.trim();
                let e,
                  s = !1,
                  i = new RegExp(Object(de.a)(a), "gi");
                for (h = h.slice(); null !== (e = i.exec(t)); )
                  h.push({
                    _: "messageEntityHighlight",
                    length: a.length,
                    offset: e.index,
                  }),
                    (s = !0);
                s && g.a.sortEntities(h);
              }
              const e = g.a.wrapRichText(t, {
                noLinebreaks: !0,
                entities: h,
                noLinks: !0,
                noTextFormat: !0,
              });
              r.push(Object($.a)(e));
            }
          if (i) return r.join("");
          {
            const e = document.createDocumentFragment();
            return e.append(...r), e;
          }
        }
        wrapSenderToPeer(e) {
          const t = document.createElement("span");
          t.classList.add("sender-title");
          const s = e.fromId === f.default.myId && e.peerId !== f.default.myId;
          if (
            (t.append(
              s
                ? Object(c.i18n)("FromYou")
                : new W.a(
                    Object.assign(
                      Object.assign({}, this.getMessageSenderPeerIdOrName(e)),
                      { dialog: e.peerId === f.default.myId }
                    )
                  ).element
            ),
            x.a.isAnyGroup(e.peerId) || s)
          ) {
            const s = new W.a({ peerId: e.peerId }).element;
            t.append(" âž ", s);
          }
          return t;
        }
        getMessageSenderPeerIdOrName(e) {
          var t;
          return e.fromId
            ? { peerId: e.fromId }
            : {
                fromName:
                  null === (t = e.fwd_from) || void 0 === t
                    ? void 0
                    : t.from_name,
              };
        }
        wrapSentTime(e) {
          const t = document.createElement("span");
          return (
            t.classList.add("sent-time"),
            t.append(Object(r.c)(new Date(1e3 * e.date))),
            t
          );
        }
        wrapJoinVoiceChatAnchor(e) {
          const t = e.action,
            { onclick: s, url: i } = g.a.wrapUrl(
              `tg://voicechat?chat_id=${e.peerId.toChatId()}&id=${
                t.call.id
              }&access_hash=${t.call.access_hash}`
            );
          if (!s) return document.createElement("span");
          const a = document.createElement("a");
          return (a.href = i), a.setAttribute("onclick", s + "(this)"), a;
        }
        wrapMessageActionTextNewUnsafe(e, t) {
          const s = t ? void 0 : document.createElement("span"),
            i = "action" in e && e.action;
          if (i.message) {
            const e = i.message;
            return t
              ? g.a.wrapPlainText(e)
              : ((s.innerHTML = g.a.wrapRichText(e, { noLinebreaks: !0 })), s);
          }
          {
            let a,
              n,
              o = i._;
            const d = (e, t) =>
              t ? x.a.getPeerTitle(e, t) : new W.a({ peerId: e }).element;
            switch (i._) {
              case "messageActionPhoneCall":
                (o += "." + i.type), (n = [Object(Q.a)(i.duration, t)]);
                break;
              case "messageActionGroupCall":
                (o += "." + i.type),
                  (n = []),
                  o.endsWith("You") || e.pFlags.post || n.push(d(e.fromId, t)),
                  void 0 !== i.duration
                    ? n.push(Object(Q.a)(i.duration, t))
                    : n.push(this.wrapJoinVoiceChatAnchor(e));
                break;
              case "messageActionInviteToGroupCall": {
                const s = [e.fromId, i.users[0].toPeerId()];
                let r = "Chat.Service.VoiceChatInvitation";
                const o = B.a.getSelf().id;
                s[0] === o ? (r += "ByYou") : s[1] === o && (r += "ForYou"),
                  Object(S.a)(s, o),
                  (a = r),
                  (n = s.map((e) => d(e, t))),
                  n.push(this.wrapJoinVoiceChatAnchor(e));
                break;
              }
              case "messageActionGroupCallScheduled": {
                const s = new Date(),
                  o = new Date(1e3 * i.schedule_date),
                  l = (o.getTime() - s.getTime()) / 864e5,
                  h = new Date(s);
                h.setDate(h.getDate() + 1);
                const u = x.a.isBroadcast(e.peerId);
                (a = u
                  ? "ChatList.Service.VoiceChatScheduled.Channel"
                  : "ChatList.Service.VoiceChatScheduled"),
                  (n = []);
                const p = B.a.getSelf().id;
                e.fromId === p ? (a += "You") : u || n.push(d(e.fromId, t));
                let g,
                  f = [];
                l < 1 && o.getDate() === s.getDate()
                  ? (g = "TodayAtFormattedWithToday")
                  : l < 2 && o.getDate() === h.getDate()
                  ? (g = "Time.TomorrowAt")
                  : ((g = "formatDateAtTime"),
                    f.push(
                      new c.default.IntlDateElement({
                        date: o,
                        options: {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        },
                      }).element
                    )),
                  f.push(Object(r.f)(o));
                const m = Object(c.i18n)(g, f);
                n.push(m);
                break;
              }
              case "messageActionChatCreate": {
                const s = B.a.getSelf().id;
                e.fromId === s ? (o += "You") : (n = [d(e.fromId, t)]);
                break;
              }
              case "messageActionPinMessage": {
                const s = e.peerId,
                  i = this.getMessageByPeer(s, e.reply_to_mid);
                if (((n = [d(e.fromId, t)]), i.deleted))
                  (a = "ActionPinnedNoText"),
                    e.reply_to_mid &&
                      this.fetchMessageReplyTo(e).then((t) => {
                        t.deleted ||
                          e.deleted ||
                          (f.default.dispatchEvent("message_edit", {
                            storage: this.getMessagesStorage(s),
                            peerId: s,
                            mid: e.mid,
                          }),
                          this.isMessageIsTopMessage(e) &&
                            f.default.dispatchEvent("dialogs_multiupdate", {
                              [s]: this.getDialogOnly(s),
                            }));
                      });
                else {
                  const e = document.createElement("i");
                  (e.dataset.savedFrom = i.peerId + "_" + i.mid),
                    (e.dir = "auto"),
                    e.append(this.wrapMessageForReply(i, void 0, void 0, t)),
                    n.push(e);
                }
                break;
              }
              case "messageActionChatJoinedByRequest": {
                const s = x.a.isBroadcast(e.peerId);
                e.pFlags.out
                  ? (a = s
                      ? "RequestToJoinChannelApproved"
                      : "RequestToJoinGroupApproved")
                  : ((a = s
                      ? "ChatService.UserJoinedChannelByRequest"
                      : "ChatService.UserJoinedGroupByRequest"),
                    (n = [d(e.fromId, t)]));
                break;
              }
              case "messageActionContactSignUp":
              case "messageActionChatReturn":
              case "messageActionChatLeave":
              case "messageActionChatJoined":
              case "messageActionChatEditPhoto":
              case "messageActionChatDeletePhoto":
              case "messageActionChatEditVideo":
              case "messageActionChatJoinedByLink":
              case "messageActionChannelEditVideo":
              case "messageActionChannelDeletePhoto":
                n = [d(e.fromId, t)];
                break;
              case "messageActionChannelEditTitle":
              case "messageActionChatEditTitle":
                (n = []),
                  "messageActionChatEditTitle" === i._ &&
                    n.push(d(e.fromId, t)),
                  n.push(t ? i.title : Object(K.a)(g.a.wrapEmojiText(i.title)));
                break;
              case "messageActionChatDeleteUser":
              case "messageActionChatAddUsers":
              case "messageActionChatAddUser": {
                const s = i.users || [i.user_id];
                if (((n = [d(e.fromId, t)]), s.length > 1)) {
                  const e = Object(c.join)(
                    s.map((e) => d(e.toPeerId(), t)),
                    !1,
                    t
                  );
                  if (t) n.push(...e);
                  else {
                    const t = document.createElement("span");
                    t.append(...e), n.push(t);
                  }
                } else n.push(d(s[0].toPeerId(), t));
                break;
              }
              case "messageActionBotAllowed": {
                const e = g.a.wrapRichText(i.domain, {
                  entities: [
                    {
                      _: "messageEntityUrl",
                      length: i.domain.length,
                      offset: 0,
                    },
                  ],
                });
                n = [Object(K.a)(e)];
                break;
              }
              default:
                a = c.langPack[o] || `[${i._}]`;
            }
            return (
              a || ((a = c.langPack[o]), void 0 === a && (a = "[" + o + "]")),
              t ? c.default.format(a, !0, n) : Object(c._i18n)(s, a, n)
            );
          }
        }
        wrapMessageActionTextNew(e, t) {
          try {
            return this.wrapMessageActionTextNewUnsafe(e, t);
          } catch (e) {
            return (
              this.log.error("wrapMessageActionTextNewUnsafe error:", e),
              t ? "" : document.createElement("span")
            );
          }
        }
        reportMessages(e, t, s, i) {
          return h.a.invokeApiSingle("messages.report", {
            peer: x.a.getInputPeerById(e),
            id: t.map((e) => ee.a.getServerMessageId(e)),
            reason: { _: s },
            message: i,
          });
        }
        startBot(e, t, s) {
          const i = t ? t.toPeerId(!0) : e.toPeerId();
          if (s) {
            const t = Object(d.b)();
            return h.a
              .invokeApi("messages.startBot", {
                bot: B.a.getUserInput(e),
                peer: x.a.getInputPeerById(i),
                random_id: t,
                start_param: s,
              })
              .then((e) => {
                T.a.processUpdateMessage(e);
              });
          }
          if (t) {
            let s;
            return (
              (s = U.a.isChannel(t)
                ? U.a.inviteToChannel(t, [e])
                : U.a.addChatUser(t, e, 0)),
              s
                .catch((e) => {
                  if (!e || "USER_ALREADY_PARTICIPANT" != e.type) throw e;
                  e.handled = !0;
                })
                .then(() => {
                  const t = B.a.getUser(e);
                  return this.sendText(i, "/start@" + t.username);
                })
            );
          }
          return this.sendText(i, "/start");
        }
        editPeerFolders(e, t) {
          h.a
            .invokeApi("folders.editPeerFolders", {
              folder_peers: e.map((e) => ({
                _: "inputFolderPeer",
                peer: x.a.getInputPeerById(e),
                folder_id: t,
              })),
            })
            .then((e) => {
              T.a.processUpdateMessage(e);
            });
        }
        toggleDialogPin(e, t) {
          var s;
          if (t > 1) return this.filtersStorage.toggleDialogPin(e, t);
          const i = this.getDialogOnly(e);
          if (!i) return Promise.reject();
          const a =
            !(null === (s = i.pFlags) || void 0 === s ? void 0 : s.pinned) ||
            void 0;
          if (a) {
            const e =
              1 === t
                ? f.default.config.pinned_infolder_count_max
                : f.default.config.pinned_dialogs_count_max;
            if (this.dialogsStorage.getPinnedOrders(t).length >= e)
              return Promise.reject({ type: "PINNED_DIALOGS_TOO_MUCH" });
          }
          return h.a
            .invokeApi("messages.toggleDialogPin", {
              peer: x.a.getInputDialogPeerById(e),
              pinned: a,
            })
            .then((s) => {
              if (s) {
                const s = a ? { pinned: a } : {};
                T.a.saveUpdate({
                  _: "updateDialogPinned",
                  peer: x.a.getDialogPeer(e),
                  folder_id: t,
                  pFlags: s,
                });
              }
            });
        }
        markDialogUnread(e, t) {
          var s;
          const i = this.getDialogOnly(e);
          if (!i) return Promise.reject();
          const a =
            (!t &&
              !(null === (s = i.pFlags) || void 0 === s
                ? void 0
                : s.unread_mark)) ||
            void 0;
          return h.a
            .invokeApi("messages.markDialogUnread", {
              peer: x.a.getInputDialogPeerById(e),
              unread: a,
            })
            .then((t) => {
              if (t) {
                const t = a ? { unread: a } : {};
                this.onUpdateDialogUnreadMark({
                  _: "updateDialogUnreadMark",
                  peer: x.a.getDialogPeer(e),
                  pFlags: t,
                });
              }
            });
        }
        migrateChecks(e, t) {
          if (
            !this.migratedFromTo[e] &&
            !this.migratedToFrom[t] &&
            U.a.hasChat(t.toChatId())
          ) {
            const s = U.a.getChat(e.toChatId());
            s &&
              s.migrated_to &&
              s.migrated_to.channel_id === t.toChatId() &&
              ((this.migratedFromTo[e] = t),
              (this.migratedToFrom[t] = e),
              f.default.dispatchEvent("dialog_migrate", {
                migrateFrom: e,
                migrateTo: t,
              }),
              this.dialogsStorage.dropDialogWithEvent(e));
          }
        }
        canMessageBeEdited(e, t) {
          if (e.pFlags.is_outgoing) return !1;
          const s = [
            "messageMediaPhoto",
            "messageMediaDocument",
            "messageMediaWebPage",
          ];
          return (
            "poll" === t && s.push("messageMediaPoll"),
            !(
              "message" !== e._ ||
              e.deleted ||
              e.fwd_from ||
              e.via_bot_id ||
              (e.media && -1 === s.indexOf(e.media._)) ||
              (e.fromId && B.a.isBot(e.fromId))
            ) &&
              (!e.media ||
                "messageMediaDocument" !== e.media._ ||
                (!e.media.document.sticker &&
                  "round" !== e.media.document.type))
          );
        }
        canEditMessage(e, t = "text") {
          var s;
          return (
            !(!e || !this.canMessageBeEdited(e, t)) &&
            (this.getMessagePeer(e) === B.a.getSelf().id ||
              !(
                !e.pFlags.out ||
                ("peerChannel" !== e.peer_id._ &&
                  e.date < Object(r.h)(!0) - f.default.config.edit_time_limit &&
                  "messageMediaPoll" !==
                    (null === (s = e.media) || void 0 === s ? void 0 : s._))
              ))
          );
        }
        canDeleteMessage(e) {
          return (
            e &&
            (e.peerId.isUser() ||
              e.pFlags.out ||
              "chat" === U.a.getChat(e.peerId.toChatId())._ ||
              U.a.hasRights(e.peerId.toChatId(), "delete_messages")) &&
            !e.pFlags.is_outgoing
          );
        }
        getReplyKeyboard(e) {
          return this.getHistoryStorage(e).replyMarkup;
        }
        mergeReplyKeyboard(e, t) {
          var s, i;
          let a = t.reply_markup;
          if (
            !a &&
            !(null === (s = t.pFlags) || void 0 === s ? void 0 : s.out) &&
            !t.action
          )
            return !1;
          if ("replyInlineMarkup" === (null == a ? void 0 : a._)) return !1;
          const n = e.replyMarkup;
          if (a)
            return (
              !(n && n.mid >= t.mid) &&
              !a.pFlags.selective &&
              (e.maxOutId &&
                t.mid < e.maxOutId &&
                a.pFlags.single_use &&
                (a.pFlags.hidden = !0),
              (a.mid = t.mid),
              "replyKeyboardHide" !== a._ &&
                (a.fromId = x.a.getPeerId(t.from_id)),
              (e.replyMarkup = a),
              !0)
            );
          if (t.pFlags.out)
            if (n) {
              if (
                (Object(Z.a)(n),
                n.pFlags.single_use &&
                  !n.pFlags.hidden &&
                  (t.mid > n.mid || t.pFlags.is_outgoing) &&
                  t.message)
              )
                return (n.pFlags.hidden = !0), !0;
            } else (!e.maxOutId || t.mid > e.maxOutId) && (e.maxOutId = t.mid);
          return (
            Object(Z.a)(t),
            !(
              "messageActionChatDeleteUser" !==
                (null === (i = t.action) || void 0 === i ? void 0 : i._) ||
              !(n ? t.action.user_id === n.fromId : B.a.isBot(t.action.user_id))
            ) &&
              ((e.replyMarkup = {
                _: "replyKeyboardHide",
                mid: t.mid,
                pFlags: {},
              }),
              !0)
          );
        }
        getSearchStorage(e, t) {
          return (
            this.searchesStorage[e] || (this.searchesStorage[e] = {}),
            this.searchesStorage[e][t] ||
              (this.searchesStorage[e][t] = { history: [] }),
            this.searchesStorage[e][t]
          );
        }
        getSearchCounters(e, t, s = !0) {
          if (x.a.isRestricted(e))
            return Promise.resolve(
              t.map((e) => ({
                _: "messages.searchCounter",
                pFlags: {},
                filter: e,
                count: 0,
              }))
            );
          return (s ? h.a.invokeApiCacheable : h.a.invokeApi).bind(h.a)(
            "messages.getSearchCounters",
            { peer: x.a.getInputPeerById(e), filters: t }
          );
        }
        filterMessagesByInputFilter(e, t, s, i) {
          const a = [];
          if (!t.length) return a;
          let n = !0;
          const r = {},
            o = [],
            d = [];
          switch (e) {
            case "inputMessagesFilterPhotos":
              r.messageMediaPhoto = !0;
              break;
            case "inputMessagesFilterPhotoVideo":
              (r.messageMediaPhoto = !0),
                (r.messageMediaDocument = !0),
                o.push("video");
              break;
            case "inputMessagesFilterVideo":
              (r.messageMediaDocument = !0), o.push("video");
              break;
            case "inputMessagesFilterDocument":
              (r.messageMediaDocument = !0), d.push("video");
              break;
            case "inputMessagesFilterVoice":
              (r.messageMediaDocument = !0), o.push("voice");
              break;
            case "inputMessagesFilterRoundVoice":
              (r.messageMediaDocument = !0), o.push("round", "voice");
              break;
            case "inputMessagesFilterRoundVideo":
              (r.messageMediaDocument = !0), o.push("round");
              break;
            case "inputMessagesFilterMusic":
              (r.messageMediaDocument = !0), o.push("audio");
              break;
            case "inputMessagesFilterUrl":
              r.url = !0;
              break;
            case "inputMessagesFilterChatPhotos":
              r.avatar = !0;
              break;
            default:
              n = !1;
          }
          if (!n) return a;
          for (let e = 0, n = t.length; e < n; ++e) {
            const n = s.get(t[e]);
            if (!n) continue;
            let c = !1;
            if ("message" === n._) {
              if (n.media && r[n.media._]) {
                const e = n.media.document;
                if (
                  e &&
                  ((o.length && !o.includes(e.type)) || d.includes(e.type))
                )
                  continue;
                c = !0;
              } else if (r.url && n.message) {
                const e = ["messageEntityTextUrl", "messageEntityUrl"];
                (n.totalEntities.find((t) => e.includes(t._)) ||
                  g.a.matchUrl(n.message)) &&
                  (c = !0);
              }
            } else
              r.avatar &&
                n.action &&
                [
                  "messageActionChannelEditPhoto",
                  "messageActionChatEditPhoto",
                  "messageActionChannelEditVideo",
                  "messageActionChatEditVideo",
                ].includes(n.action._) &&
                (c = !0);
            if (c && (a.push(n), a.length >= i)) break;
          }
          return a;
        }
        getSearch({
          peerId: e,
          query: t,
          inputFilter: s,
          maxId: i,
          limit: a,
          nextRate: n,
          backLimit: r,
          threadId: o,
          folderId: d,
          minDate: c,
          maxDate: l,
        }) {
          if (x.a.isRestricted(e))
            return Promise.resolve({
              count: 0,
              offset_id_offset: 0,
              next_rate: void 0,
              history: [],
            });
          t || (t = ""),
            s || (s = { _: "inputMessagesFilterEmpty" }),
            void 0 === a && (a = 20),
            n || (n = 0),
            r || (r = 0),
            (c = c ? (c / 1e3) | 0 : 0),
            (l = l ? (l / 1e3) | 0 : 0);
          let u = [];
          r && (a += r);
          let p;
          if (
            (!e ||
              r ||
              i ||
              t ||
              1 === a ||
              o ||
              ((p = this.getHistoryStorage(e)),
              (u = this.filterMessagesByInputFilter(
                s._,
                p.history.slice,
                this.getMessagesStorage(e),
                a
              ))),
            u.length)
          ) {
            if (!(u.length < a))
              return Promise.resolve({
                count: 0,
                next_rate: 0,
                offset_id_offset: 0,
                history: u,
              });
            (i = u[u.length - 1].mid), (a -= u.length);
          } else 0;
          const g = h.a.invokeApi.bind(h.a);
          let f;
          if (e && !n && void 0 === d)
            f = g(
              "messages.search",
              {
                peer: x.a.getInputPeerById(e),
                q: t || "",
                filter: s,
                min_date: c,
                max_date: l,
                limit: a,
                offset_id: ee.a.getServerMessageId(i) || 0,
                add_offset: r ? -r : 0,
                max_id: 0,
                min_id: 0,
                hash: "",
                top_msg_id: ee.a.getServerMessageId(o) || 0,
              },
              { noErrorBox: !0 }
            );
          else {
            let r,
              o = 0,
              h = i && this.getMessageByPeer(e, i);
            h && h.date && ((o = h.id), (r = this.getMessagePeer(h))),
              (f = g(
                "messages.searchGlobal",
                {
                  q: t,
                  filter: s,
                  min_date: c,
                  max_date: l,
                  offset_rate: n,
                  offset_peer: x.a.getInputPeerById(r),
                  offset_id: o,
                  limit: a,
                  folder_id: d,
                },
                { noErrorBox: !0 }
              ));
          }
          return f.then((e) => {
            B.a.saveApiUsers(e.users),
              U.a.saveApiChats(e.chats),
              this.saveMessages(e.messages),
              q.b && this.log("getSearch result:", s, e);
            const t = e.count || u.length + e.messages.length;
            return (
              e.messages.forEach((e) => {
                const t = this.getMessagePeer(e);
                if (t.isAnyChat()) {
                  const e = U.a.getChat(t.toChatId());
                  e.migrated_to &&
                    this.migrateChecks(
                      t,
                      e.migrated_to.channel_id.toPeerId(!0)
                    );
                }
                u.push(e);
              }),
              {
                count: t,
                offset_id_offset: e.offset_id_offset || 0,
                next_rate: e.next_rate,
                history: u,
              }
            );
          });
        }
        subscribeRepliesThread(e, t) {
          const s = e + "_" + t;
          for (const e in this.threadsToReplies)
            if (this.threadsToReplies[e] === s) return;
          this.getDiscussionMessage(e, t);
        }
        generateThreadServiceStartMessage(e) {
          const t = e.peerId + "_" + e.mid;
          if (this.threadsServiceMessagesIdsStorage[t]) return;
          const s = ee.a.getServerMessageId(
              Math.max(...this.getMidsByMessage(e))
            ),
            i = {
              _: "messageService",
              pFlags: { is_single: !0 },
              id: ee.a.generateMessageId(s, !0),
              date: e.date,
              from_id: { _: "peerUser", user_id: _.c },
              peer_id: e.peer_id,
              action: { _: "messageActionDiscussionStarted" },
              reply_to: this.generateReplyHeader(e.id),
            };
          this.saveMessages([i], { isOutgoing: !0 }),
            (this.threadsServiceMessagesIdsStorage[t] = i.mid);
        }
        getDiscussionMessage(e, t) {
          return h.a
            .invokeApiSingle("messages.getDiscussionMessage", {
              peer: x.a.getInputPeerById(e),
              msg_id: ee.a.getServerMessageId(t),
            })
            .then((s) => {
              var i;
              U.a.saveApiChats(s.chats),
                B.a.saveApiUsers(s.users),
                this.saveMessages(s.messages);
              const a = this.filterMessages(
                  s.messages[0],
                  (e) => !!e.replies
                )[0],
                n = a.peerId + "_" + a.mid;
              this.generateThreadServiceStartMessage(a);
              const r = this.getHistoryStorage(a.peerId, a.mid);
              return (
                (s.max_id = r.maxId = ee.a.generateMessageId(s.max_id) || 0),
                (s.read_inbox_max_id = r.readMaxId =
                  ee.a.generateMessageId(
                    null !== (i = s.read_inbox_max_id) && void 0 !== i
                      ? i
                      : a.mid
                  )),
                (s.read_outbox_max_id = r.readOutboxMaxId =
                  ee.a.generateMessageId(s.read_outbox_max_id) || 0),
                (this.threadsToReplies[n] = e + "_" + t),
                a
              );
            });
        }
        handleNewMessage(e, t) {
          void 0 === this.newMessagesToHandle[e] &&
            (this.newMessagesToHandle[e] = new Set()),
            this.newMessagesToHandle[e].add(t),
            this.newMessagesHandleTimeout ||
              (this.newMessagesHandleTimeout = window.setTimeout(
                this.handleNewMessages,
                0
              ));
        }
        scheduleHandleNewDialogs(e, t) {
          return (
            void 0 !== e && (this.newDialogsToHandle[e] = t),
            this.newDialogsHandlePromise
              ? this.newDialogsHandlePromise
              : (this.newDialogsHandlePromise = new Promise((e) => {
                  setTimeout(() => {
                    e(),
                      (this.newDialogsHandlePromise = void 0),
                      this.handleNewDialogs();
                  }, 0);
                }))
          );
        }
        deleteMessages(e, t, s) {
          var i, a;
          let n;
          const r = t.map((e) => ee.a.getServerMessageId(e));
          if (e.isAnyChat() && x.a.isChannel(e)) {
            const s = e.toChatId(),
              o = U.a.getChat(s);
            if (
              !o.pFlags.creator &&
              !(null ===
                (a =
                  null === (i = o.admin_rights) || void 0 === i
                    ? void 0
                    : i.pFlags) || void 0 === a
                ? void 0
                : a.delete_messages) &&
              !(t = t.filter((t) => !!this.getMessageByPeer(e, t).pFlags.out))
                .length
            )
              return;
            n = h.a
              .invokeApi("channels.deleteMessages", {
                channel: U.a.getChannelInput(s),
                id: r,
              })
              .then((e) => {
                T.a.processLocalUpdate({
                  _: "updateDeleteChannelMessages",
                  channel_id: s,
                  messages: t,
                  pts: e.pts,
                  pts_count: e.pts_count,
                });
              });
          } else
            n = h.a
              .invokeApi("messages.deleteMessages", { revoke: s, id: r })
              .then((e) => {
                T.a.processLocalUpdate({
                  _: "updateDeleteMessages",
                  messages: t,
                  pts: e.pts,
                  pts_count: e.pts_count,
                });
              });
          return n;
        }
        readHistory(e, t = 0, s, i = !1) {
          if (
            (this.log("readHistory:", e, t, s),
            !this.getReadMaxIdIfUnread(e, s) && !i)
          )
            return this.log("readHistory: isn't unread"), Promise.resolve();
          const a = this.getHistoryStorage(e, s);
          if (a.triedToReadMaxId >= t) return Promise.resolve();
          let n;
          return (
            s
              ? (a.readPromise ||
                  (n = h.a.invokeApi("messages.readDiscussion", {
                    peer: x.a.getInputPeerById(e),
                    msg_id: ee.a.getServerMessageId(s),
                    read_max_id: ee.a.getServerMessageId(t),
                  })),
                T.a.processLocalUpdate({
                  _: "updateReadChannelDiscussionInbox",
                  channel_id: e.toChatId(),
                  top_msg_id: s,
                  read_max_id: t,
                }))
              : x.a.isChannel(e)
              ? (a.readPromise ||
                  (n = h.a.invokeApi("channels.readHistory", {
                    channel: U.a.getChannelInput(e.toChatId()),
                    max_id: ee.a.getServerMessageId(t),
                  })),
                T.a.processLocalUpdate({
                  _: "updateReadChannelInbox",
                  max_id: t,
                  channel_id: e.toChatId(),
                  still_unread_count: void 0,
                  pts: void 0,
                }))
              : (a.readPromise ||
                  (n = h.a
                    .invokeApi("messages.readHistory", {
                      peer: x.a.getInputPeerById(e),
                      max_id: ee.a.getServerMessageId(t),
                    })
                    .then((e) => {
                      T.a.processUpdateMessage({
                        _: "updateShort",
                        update: {
                          _: "updatePts",
                          pts: e.pts,
                          pts_count: e.pts_count,
                        },
                      });
                    })),
                T.a.processLocalUpdate({
                  _: "updateReadHistoryInbox",
                  max_id: t,
                  peer: x.a.getOutputPeer(e),
                  still_unread_count: void 0,
                  pts: void 0,
                  pts_count: void 0,
                })),
            V.a.soundReset(x.a.getPeerString(e)),
            a.readPromise
              ? a.readPromise
              : ((a.triedToReadMaxId = t),
                n.finally(() => {
                  delete a.readPromise;
                  const { readMaxId: i } = a;
                  this.log("readHistory: promise finally", t, i),
                    i > t && this.readHistory(e, i, s, !0);
                }),
                (a.readPromise = n))
          );
        }
        readAllHistory(e, t, s = !1) {
          const i = this.getHistoryStorage(e, t);
          i.maxId && this.readHistory(e, i.maxId, t, s);
        }
        fixDialogUnreadMentionsIfNoMessage(e) {
          const t = this.getDialogOnly(e);
          (null == t ? void 0 : t.unread_mentions_count) &&
            this.reloadConversation(e);
        }
        modifyCachedMentions(e, t, s) {
          const i = this.unreadMentions[e];
          i && (s ? i.first.isEnd(v.a.Top) && i.insertSlice([t]) : i.delete(t));
        }
        fixUnreadMentionsCountIfNeeded(e, t) {
          const s = this.getDialogOnly(e);
          !t.length &&
            (null == s ? void 0 : s.unread_mentions_count) &&
            this.reloadConversation(e);
        }
        goToNextMention(e) {
          var t;
          const s = this.goToNextMentionPromises[e];
          if (s) return s;
          const i =
              null !== (t = this.unreadMentions[e]) && void 0 !== t
                ? t
                : (this.unreadMentions[e] = new v.b()),
            a = i.length,
            n = i.first.isEnd(v.a.Top);
          if (!a && n)
            return this.fixUnreadMentionsCountIfNeeded(e, i), Promise.resolve();
          let r = Promise.resolve();
          return (
            !n && a < 25 && (r = this.loadNextMentions(e)),
            (this.goToNextMentionPromises[e] = r
              .then(() => {
                const t = i.last,
                  s = t && t[t.length - 1];
                s
                  ? (i.delete(s),
                    f.default.dispatchEvent("history_focus", {
                      peerId: e,
                      mid: s,
                    }))
                  : this.fixUnreadMentionsCountIfNeeded(e, i);
              })
              .finally(() => {
                delete this.goToNextMentionPromises[e];
              }))
          );
        }
        loadNextMentions(e) {
          const t = this.unreadMentions[e],
            s = t.first[0] || 1;
          return this.getUnreadMentions(e, s, -50, 50).then((e) => {
            this.mergeHistoryResult(t, e, 1 === s ? 0 : s, 50, -50);
          });
        }
        getUnreadMentions(e, t, s, i, a = 0, n = 0) {
          return h.a
            .invokeApiSingle("messages.getUnreadMentions", {
              peer: x.a.getInputPeerById(e),
              offset_id: ee.a.getServerMessageId(t),
              add_offset: s,
              limit: i,
              max_id: ee.a.getServerMessageId(a),
              min_id: ee.a.getServerMessageId(n),
            })
            .then(
              (e) => (
                Object(Z.a)(e),
                B.a.saveApiUsers(e.users),
                U.a.saveApiChats(e.chats),
                this.saveMessages(e.messages),
                e
              )
            );
        }
        readMessages(e, t) {
          if (!t.length) return Promise.resolve();
          let s, i;
          if (
            ((t = t.map((e) => ee.a.getServerMessageId(e))),
            e.isAnyChat() && x.a.isChannel(e))
          ) {
            const a = e.toChatId();
            (i = {
              _: "updateChannelReadMessagesContents",
              channel_id: a,
              messages: t,
            }),
              (s = h.a.invokeApi("channels.readMessageContents", {
                channel: U.a.getChannelInput(a),
                id: t,
              }));
          } else
            (i = {
              _: "updateReadMessagesContents",
              messages: t,
              pts: void 0,
              pts_count: void 0,
            }),
              (s = h.a
                .invokeApi("messages.readMessageContents", { id: t })
                .then((e) => {
                  (i.pts = e.pts),
                    (i.pts_count = e.pts_count),
                    T.a.processLocalUpdate(i);
                }));
          return T.a.processLocalUpdate(i), s;
        }
        getHistoryStorage(e, t) {
          var s, i;
          return t
            ? (this.threadsStorage[e] || (this.threadsStorage[e] = {}),
              null !== (s = this.threadsStorage[e][t]) && void 0 !== s
                ? s
                : (this.threadsStorage[e][t] = {
                    count: null,
                    history: new v.b(),
                  }))
            : null !== (i = this.historiesStorage[e]) && void 0 !== i
            ? i
            : (this.historiesStorage[e] = { count: null, history: new v.b() });
        }
        getNotifyPeerSettings(e) {
          return Promise.all([
            V.a.getNotifyPeerTypeSettings(),
            V.a.getNotifySettings(x.a.getInputNotifyPeerById(e, !0)),
          ]).then(([t, s]) => ({
            muted: V.a.isPeerLocalMuted(e, !0),
            peerTypeNotifySettings: s,
          }));
        }
        setDialogToStateIfMessageIsTop(e) {
          this.isMessageIsTopMessage(e) &&
            this.dialogsStorage.setDialogToState(this.getDialogOnly(e.peerId));
        }
        isMessageIsTopMessage(e) {
          const t = this.getDialogOnly(e.peerId);
          return t && t.top_message === e.mid;
        }
        updateMessageRepliesIfNeeded(e) {
          try {
            const t = this.getThreadKey(e);
            if (t) {
              const e = this.threadsToReplies[t];
              if (e) {
                const [t, s] = e.split("_");
                this.updateMessage(t.toPeerId(), +s, "replies_updated");
              }
            }
          } catch (t) {
            this.log.error("incrementMessageReplies err", t, e);
          }
        }
        getThreadKey(e) {
          var t;
          let s = "";
          if (
            (null === (t = e.peerId) || void 0 === t
              ? void 0
              : t.isAnyChat()) &&
            e.reply_to
          ) {
            const t = e.reply_to.reply_to_top_id || e.reply_to.reply_to_msg_id;
            s = e.peerId + "_" + t;
          }
          return s;
        }
        updateMessage(e, t, s) {
          return this.wrapSingleMessage(e, t, !0).then(() => {
            const i = this.getMessageByPeer(e, t);
            return s && f.default.dispatchEvent(s, i), i;
          });
        }
        checkPendingMessage(e) {
          const t = this.pendingByMessageId[e.mid];
          let s;
          if (t) {
            const i = this.pendingByRandomId[t];
            (s = this.finalizePendingMessage(t, e)) &&
              f.default.dispatchEvent("history_update", {
                storage: i.storage,
                peerId: e.peerId,
                mid: e.mid,
              }),
              delete this.pendingByMessageId[e.mid];
          }
          return s;
        }
        mutePeer(e, t) {
          const s = { _: "inputPeerNotifySettings" };
          return (
            (s.mute_until = t),
            V.a.updateNotifySettings(
              { _: "inputNotifyPeer", peer: x.a.getInputPeerById(e) },
              s
            )
          );
        }
        togglePeerMute(e, t) {
          return (
            void 0 === t && (t = !V.a.isPeerLocalMuted(e, !1)),
            this.mutePeer(e, t ? _.b : 0)
          );
        }
        canSendToPeer(e, t, s = "send_messages") {
          if (x.a.isRestricted(e)) return !1;
          if (e.isAnyChat()) {
            const i = U.a.getChat(e.toChatId());
            return (
              U.a.hasRights(e.toChatId(), s, void 0, !!t) &&
              (!i.pFlags.left || !!t)
            );
          }
          return B.a.canSendToUser(e);
        }
        finalizePendingMessage(e, t) {
          const s = this.pendingByRandomId[e];
          if (s) {
            const { peerId: i, tempId: a, threadId: n, storage: r } = s;
            [
              this.getHistoryStorage(i),
              n ? this.getHistoryStorage(i, n) : void 0,
            ]
              .filter(Boolean)
              .forEach((e) => {
                e.history.delete(a);
              });
            const o = this.getMessageFromStorage(r, a);
            return (
              o.deleted ||
                (delete t.pFlags.is_outgoing,
                delete t.pending,
                delete t.error,
                delete t.random_id,
                delete t.send),
              f.default.dispatchEvent("messages_pending"),
              delete this.pendingByRandomId[e],
              this.finalizePendingMessageCallbacks(r, a, t),
              o
            );
          }
        }
        finalizePendingMessageCallbacks(e, t, s) {
          const i = this.tempFinalizeCallbacks[t];
          if (void 0 !== i) {
            for (const e in i) {
              const { deferred: t, callback: a } = i[e];
              a(s).then(t.resolve, t.reject);
            }
            delete this.tempFinalizeCallbacks[t];
          }
          if (s.media) {
            Object(Z.a)(s);
            const { photo: e, document: i } = s.media;
            if (e) {
              const s = j.a.getPhoto("" + t);
              if (s) {
                const t = e.sizes[e.sizes.length - 1],
                  i = O.a.getCacheContext(e, t.type),
                  a = O.a.getCacheContext(s, "full");
                Object.assign(i, a);
                const n = e.sizes[e.sizes.length - 1],
                  r = j.a.getPhotoDownloadOptions(e, n),
                  o = Object(G.a)(r.location);
                O.a.fakeDownload(o, a.url);
              }
            } else if (i) {
              const e = F.a.getDoc("" + t);
              if (
                e &&
                e.type &&
                "sticker" !== e.type &&
                "image/gif" !== e.mime_type
              ) {
                const t = O.a.getCacheContext(i),
                  s = O.a.getCacheContext(e);
                Object.assign(t, s);
                const a = F.a.getInputFileName(i);
                O.a.fakeDownload(a, s.url);
              }
            } else s.media.poll && (delete L.a.polls[t], delete L.a.results[t]);
          }
          const a = this.getMessageFromStorage(e, t);
          e.delete(t),
            this.handleReleasingMessage(a, e),
            f.default.dispatchEvent("message_sent", {
              storage: e,
              tempId: t,
              tempMessage: a,
              mid: s.mid,
              message: s,
            });
        }
        incrementMaxSeenId(e) {
          if (!e || (this.maxSeenId && !(e > this.maxSeenId))) return !1;
          (this.maxSeenId = e),
            R.default.pushToState("maxSeenMsgId", e),
            h.a.invokeApi("messages.receivedMessages", {
              max_id: ee.a.getServerMessageId(e),
            });
        }
        getMessageReactionsListAndReadParticipants(e, t, s, i, a, n) {
          var r, o;
          const d = { reactions: [], count: 0, next_offset: void 0 },
            c = this.canViewMessageReadParticipants(e);
          return (
            c && void 0 === t ? (t = 100) : void 0 === t && (t = 50),
            Promise.all([
              !c || s || a
                ? []
                : this.getMessageReadParticipants(e.peerId, e.mid).catch(
                    () => []
                  ),
              (null ===
                (o =
                  null === (r = e.reactions) || void 0 === r
                    ? void 0
                    : r.recent_reactions) || void 0 === o
                ? void 0
                : o.length) && !n
                ? ae.a
                    .getMessageReactionsList(e.peerId, e.mid, t, s, i)
                    .catch((e) => d)
                : d,
            ]).then(([e, t]) => {
              const s = e.map((e) => e.toPeerId()),
                i = s.slice();
              Object(P.a)(i, (e, s, i) => {
                t.reactions.some((t) => x.a.getPeerId(t.peer_id) === e) &&
                  i.splice(s, 1);
              });
              let a = t.reactions.map((e) => ({
                peerId: x.a.getPeerId(e.peer_id),
                reaction: e.reaction,
              }));
              return (
                (a = a.concat(i.map((e) => ({ peerId: e })))),
                {
                  reactions: t.reactions,
                  reactionsCount: t.count,
                  readParticipants: s,
                  combined: a,
                  nextOffset: t.next_offset,
                }
              );
            })
          );
        }
        getMessageReadParticipants(e, t) {
          return h.a
            .invokeApiSingle("messages.getMessageReadParticipants", {
              peer: x.a.getInputPeerById(e),
              msg_id: ee.a.getServerMessageId(t),
            })
            .then((e) => e.map((e) => e.toUserId()));
        }
        canViewMessageReadParticipants(e) {
          if (
            "message" !== e._ ||
            e.pFlags.is_outgoing ||
            !e.pFlags.out ||
            !x.a.isAnyGroup(e.peerId)
          )
            return !1;
          return (
            U.a.getChat(e.peerId.toChatId()).participants_count <
              f.default.appConfig.chat_read_mark_size_threshold &&
            Object(r.h)(!0) - e.date <
              f.default.appConfig.chat_read_mark_expire_period
          );
        }
        incrementMessageViews(e, t) {
          if (t.length)
            return h.a
              .invokeApiSingle("messages.getMessagesViews", {
                peer: x.a.getInputPeerById(e),
                id: t.map((e) => ee.a.getServerMessageId(e)),
                increment: !0,
              })
              .then((s) => {
                const i = new Array(t.length),
                  a = e.toChatId();
                for (let e = 0, n = t.length; e < n; ++e)
                  i[e] = {
                    _: "updateChannelMessageViews",
                    channel_id: a,
                    id: t[e],
                    views: s.views[e].views,
                  };
                T.a.processUpdateMessage({
                  _: "updates",
                  updates: i,
                  chats: s.chats,
                  users: s.users,
                });
              });
        }
        notifyAboutMessage(e, t = {}) {
          const s = this.getMessagePeer(e);
          if (x.a.isRestricted(s)) return;
          const i = s.isAnyChat(),
            a = {},
            n = x.a.getPeerString(s);
          let r;
          if (t.peerTypeNotifySettings.show_previews) {
            if ("message" === e._ && e.fwd_from && t.fwdCount)
              r = c.default.format("Notifications.Forwarded", !0, [t.fwdCount]);
            else if (
              ((r = this.wrapMessageForReply(e, void 0, void 0, !0)),
              t.userReaction)
            ) {
              const e = "Notification.Contact.Reacted",
                s = [g.a.fixEmoji(t.userReaction.reaction), r];
              r = c.default.format(e, !0, s);
            }
          } else r = c.default.format("Notifications.New", !0);
          (a.title = x.a.getPeerTitle(s, !0)),
            i &&
              e.fromId !== e.peerId &&
              (a.title = x.a.getPeerTitle(e.fromId, !0) + " @ " + a.title),
            (a.title = g.a.wrapPlainText(a.title)),
            (a.onclick = () => {
              f.default.dispatchEvent("history_focus", {
                peerId: s,
                mid: e.mid,
              });
            }),
            (a.message = r),
            (a.key = "msg" + e.mid),
            (a.tag = n),
            (a.silent = !0);
          const o = x.a.getPeerPhoto(s);
          o
            ? J.a.loadAvatar(s, o, "photo_small").loadPromise.then((s) => {
                (e.pFlags.unread || t.userReaction) &&
                  ((a.image = s), V.a.notify(a));
              })
            : V.a.notify(a);
        }
        getScheduledMessagesStorage(e) {
          var t;
          return null !== (t = this.scheduledMessagesStorage[e]) && void 0 !== t
            ? t
            : (this.scheduledMessagesStorage[e] = this.createMessageStorage());
        }
        getScheduledMessageByPeer(e, t) {
          return this.getMessageFromStorage(
            this.getScheduledMessagesStorage(e),
            t
          );
        }
        getScheduledMessages(e) {
          if (!this.canSendToPeer(e)) return Promise.resolve([]);
          const t = this.getScheduledMessagesStorage(e);
          return t.size
            ? Promise.resolve([...t.keys()])
            : h.a
                .invokeApiSingle("messages.getScheduledHistory", {
                  peer: x.a.getInputPeerById(e),
                  hash: "",
                })
                .then((t) => {
                  if ("messages.messagesNotModified" !== t._) {
                    B.a.saveApiUsers(t.users), U.a.saveApiChats(t.chats);
                    const s = this.getScheduledMessagesStorage(e);
                    return (
                      this.saveMessages(t.messages, {
                        storage: s,
                        isScheduled: !0,
                      }),
                      [...s.keys()]
                    );
                  }
                  return [];
                });
        }
        sendScheduledMessages(e, t) {
          return h.a
            .invokeApi("messages.sendScheduledMessages", {
              peer: x.a.getInputPeerById(e),
              id: t.map((e) => ee.a.getServerMessageId(e)),
            })
            .then((e) => {
              T.a.processUpdateMessage(e);
            });
        }
        deleteScheduledMessages(e, t) {
          return h.a
            .invokeApi("messages.deleteScheduledMessages", {
              peer: x.a.getInputPeerById(e),
              id: t.map((e) => ee.a.getServerMessageId(e)),
            })
            .then((e) => {
              T.a.processUpdateMessage(e);
            });
        }
        getMessageWithReplies(e) {
          if (
            e.peerId === _.d ||
            ((e = this.filterMessages(e, (e) => !!e.replies)[0]) &&
              e.replies &&
              e.replies.pFlags.comments &&
              "777" !== e.replies.channel_id)
          )
            return e;
        }
        isFetchIntervalNeeded(e) {
          return e.isAnyChat() && !U.a.isInChat(e.toChatId());
        }
        isRestricted(e) {
          return !(
            !e.restriction_reason || !Object(ne.c)(e.restriction_reason)
          );
        }
        getNewHistory(e, t) {
          var s;
          return he(this, void 0, void 0, function* () {
            if (!this.isFetchIntervalNeeded(e)) return;
            const i = this.getHistoryStorage(e, t),
              a = i.history.slice;
            if (!a.isEnd(v.a.Bottom)) return;
            delete i.maxId, a.unsetEnd(v.a.Bottom);
            let n = this.getHistory(
              e,
              null !== (s = a[0]) && void 0 !== s ? s : 1,
              0,
              50,
              t
            );
            n instanceof Promise && (n = yield n);
            for (let t = 0, s = n.history.length; t < s; ++t)
              this.handleNewMessage(e, n.history[t]);
            return i;
          });
        }
        getHistory(e, t = 0, s, i, a) {
          const n = this.getHistoryStorage(e, a);
          if (x.a.isRestricted(e)) {
            const e = n.history.first;
            e.setEnd(v.a.Both);
            const t = e.slice(0, 0);
            return (
              t.setEnd(v.a.Both), { count: 0, history: t, offsetIdOffset: 0 }
            );
          }
          let r = 0;
          i && ((r = -i), (s += i));
          const o = n.history.sliceMe(t, r, s);
          return !o ||
            (o.slice.length !== s && (o.fulfilled & v.a.Both) !== v.a.Both)
            ? this.fillHistoryStorage(e, t, s, r, n, a).then(() => {
                const e = n.history.sliceMe(t, r, s);
                return {
                  count: n.count,
                  history:
                    (null == e ? void 0 : e.slice) ||
                    n.history.constructSlice(),
                  offsetIdOffset:
                    (null == e ? void 0 : e.offsetIdOffset) || n.count,
                };
              })
            : {
                count: n.count,
                history: o.slice,
                offsetIdOffset: o.offsetIdOffset,
              };
        }
        isHistoryResultEnd(e, t, s) {
          const { offset_id_offset: i, messages: a } = e,
            n = e.count || a.length,
            r = i || 0,
            o = s < 0 ? t + s : t;
          return {
            count: n,
            offsetIdOffset: r,
            isTopEnd: r >= n - o || n < o,
            isBottomEnd: !r || (s < 0 && r + s <= 0),
          };
        }
        mergeHistoryResult(e, t, s, i, a) {
          const { messages: n } = t,
            r = this.isHistoryResultEnd(t, i, a),
            { count: o, offsetIdOffset: d, isTopEnd: c, isBottomEnd: l } = r,
            h = n.map((e) => e.mid);
          if (s && ee.a.getServerMessageId(s) && !h.includes(s) && d < o) {
            let e = 0;
            for (const t = h.length; e < t && !(s > h[e]); ++e);
            h.splice(e, 0, s);
          }
          const u = e.insertSlice(h) || e.slice;
          return (
            c && u.setEnd(v.a.Top),
            l && u.setEnd(v.a.Bottom),
            Object.assign({ slice: u, mids: h, messages: n }, r)
          );
        }
        fillHistoryStorage(e, t, s, i, a, n) {
          return this.requestHistory(e, t, s, i, void 0, n).then((n) => {
            const {
              count: r,
              isBottomEnd: o,
              slice: d,
              messages: c,
            } = this.mergeHistoryResult(a.history, n, t, s, i);
            a.count = r;
            for (let t = 0, s = c.length; t < s; ++t) {
              const s = c[t];
              this.mergeReplyKeyboard(a, s) &&
                f.default.dispatchEvent("history_reply_markup", { peerId: e });
            }
            o && (a.maxId = d[0]);
          });
        }
        requestHistory(e, t, s = 0, i = 0, a = 0, n = 0) {
          const r = {
            peer: x.a.getInputPeerById(e),
            offset_id: ee.a.getServerMessageId(t) || 0,
            offset_date: a,
            add_offset: i,
            limit: s,
            max_id: 0,
            min_id: 0,
            hash: 0,
          };
          n && (r.msg_id = ee.a.getServerMessageId(n) || 0);
          return h.a
            .invokeApiSingle(
              n ? "messages.getReplies" : "messages.getHistory",
              r,
              { noErrorBox: !0 }
            )
            .then(
              (r) => {
                q.b && this.log("requestHistory result:", e, r, t, s, i),
                  B.a.saveApiUsers(r.users),
                  U.a.saveApiChats(r.chats),
                  this.saveMessages(r.messages),
                  x.a.isChannel(e) && T.a.addChannelState(e.toChatId(), r.pts);
                let o = r.messages.length,
                  d = r.count;
                o &&
                  r.messages[o - 1].deleted &&
                  (r.messages.splice(o - 1, 1), o--, d--);
                const c = this.getHistoryStorage(e, n),
                  l = r.messages[o - 1];
                if (o && l.grouped_id) {
                  const t = c.history.findSlice(l.mid);
                  if (t && t.slice.length + r.messages.length < d)
                    return this.requestHistory(e, l.mid, 10, 0, a, n).then(
                      (e) => r
                    );
                }
                return r;
              },
              (t) => {
                switch (t.type) {
                  case "CHANNEL_PRIVATE":
                    let t = U.a.getChat(e.toChatId());
                    (t = {
                      _: "channelForbidden",
                      access_hash: t.access_hash,
                      title: t.title,
                    }),
                      T.a.processUpdateMessage({
                        _: "updates",
                        updates: [
                          { _: "updateChannel", channel_id: e.toChatId() },
                        ],
                        chats: [t],
                        users: [],
                      });
                }
                throw t;
              }
            );
        }
        fetchSingleMessages() {
          return this.fetchSingleMessagesPromise
            ? this.fetchSingleMessagesPromise
            : (this.fetchSingleMessagesPromise = new Promise((e) => {
                setTimeout(() => {
                  const t = [];
                  for (const [e, s] of this.needSingleMessages) {
                    const i = [...s.keys()],
                      a = i.map((e) => ({
                        _: "inputMessageID",
                        id: ee.a.getServerMessageId(e),
                      }));
                    let n;
                    n =
                      e.isAnyChat() && x.a.isChannel(e)
                        ? h.a.invokeApiSingle("channels.getMessages", {
                            channel: U.a.getChannelInput(e.toChatId()),
                            id: a,
                          })
                        : h.a.invokeApiSingle("messages.getMessages", {
                            id: a,
                          });
                    const r = n
                      .then((e) => {
                        Object(Z.a)(e),
                          B.a.saveApiUsers(e.users),
                          U.a.saveApiChats(e.chats),
                          this.saveMessages(e.messages);
                        for (let t = 0; t < e.messages.length; ++t) {
                          const i = e.messages[t],
                            a = ee.a.generateMessageId(i.id);
                          s.get(a).resolve(e.messages[t]), s.delete(a);
                        }
                        if (s.size)
                          for (const [e, t] of s)
                            t.resolve(this.generateEmptyMessage(e));
                      })
                      .finally(() => {
                        f.default.dispatchEvent("messages_downloaded", {
                          peerId: e,
                          mids: i,
                        });
                      });
                    t.push(r);
                  }
                  this.needSingleMessages.clear(),
                    Promise.all(t).finally(() => {
                      (this.fetchSingleMessagesPromise = null),
                        this.needSingleMessages.size &&
                          this.fetchSingleMessages(),
                        e();
                    });
                }, 0);
              }));
        }
        wrapSingleMessage(e, t, s = !1) {
          const i = this.getMessageByPeer(e, t);
          if (i.deleted || s) {
            let s = this.needSingleMessages.get(e);
            s || this.needSingleMessages.set(e, (s = new Map()));
            let i = s.get(t);
            return (
              i ||
              ((i = Object(n.a)()), s.set(t, i), this.fetchSingleMessages(), i)
            );
          }
          return (
            f.default.dispatchEvent("messages_downloaded", {
              peerId: e,
              mids: [t],
            }),
            Promise.resolve(i)
          );
        }
        fetchMessageReplyTo(e) {
          if (!e.reply_to_mid)
            return Promise.resolve(this.generateEmptyMessage(0));
          const t = e.reply_to.reply_to_peer_id
            ? x.a.getPeerId(e.reply_to.reply_to_peer_id)
            : e.peerId;
          return this.wrapSingleMessage(t, e.reply_to_mid).then(
            (t) => (t.deleted && delete e.reply_to_mid, t)
          );
        }
        setTyping(e, t, s) {
          var i;
          let a = this.typings[e];
          return f.default.myId &&
            e &&
            this.canSendToPeer(e) &&
            e !== f.default.myId &&
            (s ||
              (null === (i = null == a ? void 0 : a.action) || void 0 === i
                ? void 0
                : i._) !== t._)
            ? ((null == a ? void 0 : a.timeout) && clearTimeout(a.timeout),
              (a = this.typings[e] = { action: t }),
              h.a
                .invokeApi("messages.setTyping", {
                  peer: x.a.getInputPeerById(e),
                  action: t,
                })
                .finally(() => {
                  a === this.typings[e] &&
                    (a.timeout = window.setTimeout(() => {
                      delete this.typings[e];
                    }, 6e3));
                }))
            : Promise.resolve(!1);
        }
        handleReleasingMessage(e, t) {
          const s = e.media;
          if (s) {
            const i = s.webpage || s,
              a = i.photo || i.document;
            if (
              ((null == a ? void 0 : a.file_reference) &&
                u.a.deleteContext(a.file_reference, {
                  type: "message",
                  peerId: e.peerId,
                  messageId: e.mid,
                }),
              "webpage" in s && s.webpage)
            ) {
              const i = this.getScheduledMessagesStorage(e.peerId) === t,
                a = N.a.getMessageKeyForPendingWebPage(e.peerId, e.mid, i);
              N.a.deleteWebPageFromPending(s.webpage, a);
            }
            s.poll && L.a.updatePollToMessage(e, !1);
          }
        }
        handleDeletedMessages(e, t, s) {
          const i = { count: 0, unread: 0, unreadMentions: 0, msgs: new Set() };
          for (const a of s) {
            const s = this.getMessageFromStorage(t, a);
            if (s.deleted) {
              this.fixDialogUnreadMentionsIfNoMessage(e);
              continue;
            }
            this.handleReleasingMessage(s, t),
              this.updateMessageRepliesIfNeeded(s),
              s.pFlags.out ||
                s.pFlags.is_outgoing ||
                !s.pFlags.unread ||
                (++i.unread,
                V.a.cancel("msg" + a),
                s.pFlags.mentioned &&
                  (++i.unreadMentions, this.modifyCachedMentions(e, a, !1))),
              ++i.count,
              i.msgs.add(a),
              (s.deleted = !0);
            const n = s.grouped_id;
            if (n) {
              const e = this.groupedMessagesStorage[n];
              e &&
                (e.delete(a),
                i.albums || (i.albums = {}),
                (i.albums[n] || (i.albums[n] = new Set())).add(a),
                e.size ||
                  (delete i.albums, delete this.groupedMessagesStorage[n]));
            }
            t.delete(a);
            const r = this.newMessagesToHandle[e];
            r && r.has(a) && r.delete(a);
          }
          if (i.albums)
            for (const t in i.albums)
              f.default.dispatchEvent("album_edit", {
                peerId: e,
                groupId: t,
                deletedMids: [...i.albums[t]],
              });
          return i;
        }
        handleEditedMessage(e, t) {
          var s;
          if (
            "message" === e._ &&
            (null === (s = e.media) || void 0 === s ? void 0 : s.webpage)
          ) {
            const t = N.a.getMessageKeyForPendingWebPage(
              e.peerId,
              e.mid,
              !!e.pFlags.is_scheduled
            );
            N.a.deleteWebPageFromPending(e.media.webpage, t);
          }
        }
        getMediaFromMessage(e) {
          return e.action
            ? e.action.photo
            : e.media &&
                (e.media.photo ||
                  e.media.document ||
                  (e.media.webpage &&
                    (e.media.webpage.document || e.media.webpage.photo)));
        }
        isMentionUnread(e) {
          var t;
          const s =
            null === (t = e.media) || void 0 === t ? void 0 : t.document;
          return (
            e.pFlags.media_unread &&
            e.pFlags.mentioned &&
            (!s || !["voice", "round"].includes(s.type))
          );
        }
        getDialogUnreadCount(e) {
          return e.unread_count || +!!e.pFlags.unread_mark;
        }
        isDialogUnread(e) {
          return !!this.getDialogUnreadCount(e);
        }
        canForward(e) {
          return !e.pFlags.noforwards && !x.a.noForwards(e.peerId);
        }
        pushBatchUpdate(e, t, s, i) {
          let a = this.batchUpdates[e];
          a || (a = this.batchUpdates[e] = { callback: t, batch: new Map() }),
            a.batch.has(s) ||
              (a.batch.set(s, i ? i() : void 0), this.batchUpdatesDebounced());
        }
        getMessagesFromMap(e) {
          const t = new Map();
          for (const [s, i] of e) {
            const [e, a] = s.split("_"),
              n = this.getMessageByPeer(e.toPeerId(), +a);
            "messageEmpty" !== n._ && t.set(n, i);
          }
          return t;
        }
      })();
      q.a.appMessagesManager = ue;
      t.a = ue;
    },
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(31),
        n = s(15),
        r = s(47),
        o = s(37),
        d = s(16),
        c = s(43),
        l = s(130),
        h = s(86),
        u = s(125);
      const p = [
          "#fc5c51",
          "#0fb297",
          "#d09306",
          "#3d72ed",
          "#895dd5",
          "#cd4073",
          "#00c1a6",
          "#fa790f",
        ],
        g = [
          "red",
          "green",
          "yellow",
          "blue",
          "violet",
          "pink",
          "cyan",
          "orange",
        ],
        f = [0, 7, 4, 1, 6, 3, 5];
      [
        "isChannel",
        "isMegagroup",
        "isAnyGroup",
        "isBroadcast",
        "isBot",
        "isContact",
        "isUser",
        "isAnyChat",
      ].forEach((e) => {
        const t = Array.isArray(e) ? e[0] : e,
          s = Array.isArray(e) ? e[1] : e;
        (String.prototype[t] = function () {
          return m[s](this.toString());
        }),
          (Number.prototype[t] = function () {
            return m[s](this);
          });
      });
      const m = new (class {
        canPinMessage(e) {
          return e.isUser() || r.a.hasRights(e.toChatId(), "pin_messages");
        }
        getPeerPhoto(e) {
          if (this.isRestricted(e)) return;
          const t = e.isUser()
            ? o.a.getUserPhoto(e.toUserId())
            : r.a.getChatPhoto(e.toChatId());
          return "chatPhotoEmpty" !== t._ && "userProfilePhotoEmpty" !== t._
            ? t
            : void 0;
        }
        getPeerMigratedTo(e) {
          if (e.isUser()) return !1;
          const t = r.a.getChat(e.toChatId());
          return (
            !!(t && t.migrated_to && t.pFlags.deactivated) &&
            this.getPeerId(t.migrated_to)
          );
        }
        getPeerTitle(e, t = !1, s = !1, i) {
          e || (e = n.default.myId);
          let c = "";
          if (e.isUser()) {
            const t = o.a.getUser(e.toUserId());
            t.first_name && (c += t.first_name),
              !t.last_name || (s && c) || (c += " " + t.last_name),
              (c = c
                ? c.trim()
                : t.pFlags.deleted
                ? d.default.format("HiddenName", !0)
                : t.username);
          } else {
            (c = r.a.getChat(e.toChatId()).title), s && (c = c.split(" ")[0]);
          }
          return (
            void 0 !== i && (c = Object(u.a)(c, i, i)),
            t ? c : a.a.wrapEmojiText(c)
          );
        }
        getOutputPeer(e) {
          if (e.isUser()) return { _: "peerUser", user_id: e.toUserId() };
          const t = e.toChatId();
          return r.a.isChannel(t)
            ? { _: "peerChannel", channel_id: t }
            : { _: "peerChat", chat_id: t };
        }
        getPeerString(e) {
          return e.isUser()
            ? o.a.getUserString(e.toUserId())
            : r.a.getChatString(e.toChatId());
        }
        getPeerUsername(e) {
          return this.getPeer(e).username || "";
        }
        getPeer(e) {
          return e.isUser()
            ? o.a.getUser(e.toUserId())
            : r.a.getChat(e.toChatId());
        }
        getPeerId(e) {
          if (void 0 !== e && e.isPeerId && e.isPeerId()) return e;
          if (Object(h.a)(e)) {
            const t = e.user_id;
            if (void 0 !== t) return t.toPeerId(!1);
            const s = e.channel_id || e.chat_id;
            return void 0 !== s ? s.toPeerId(!0) : n.default.myId;
          }
          if (!e) return c.c;
          const t = "u" === e.charAt(0),
            s = e.substr(1).split("_");
          return t ? s[0].toPeerId() : (s[0] || "").toPeerId(!0);
        }
        getDialogPeer(e) {
          return { _: "dialogPeer", peer: this.getOutputPeer(e) };
        }
        isChannel(e) {
          return !e.isUser() && r.a.isChannel(e.toChatId());
        }
        isMegagroup(e) {
          return !e.isUser() && r.a.isMegagroup(e.toChatId());
        }
        isAnyGroup(e) {
          return !e.isUser() && !r.a.isBroadcast(e.toChatId());
        }
        isBroadcast(e) {
          return this.isChannel(e) && !this.isMegagroup(e);
        }
        isBot(e) {
          return e.isUser() && o.a.isBot(e.toUserId());
        }
        isContact(e) {
          return e.isUser() && o.a.isContact(e.toUserId());
        }
        isUser(e) {
          return +e >= 0;
        }
        isAnyChat(e) {
          return !this.isUser(e);
        }
        isRestricted(e) {
          return e.isUser()
            ? o.a.isRestricted(e.toUserId())
            : r.a.isRestricted(e.toChatId());
        }
        getRestrictionReasonText(e) {
          const t = this.getPeer(e),
            s = t.restriction_reason
              ? Object(l.a)(t.restriction_reason)
              : void 0;
          return s
            ? s.text
            : e.isUser()
            ? "This user is restricted"
            : "This chat is restricted";
        }
        getInputNotifyPeerById(e, t) {
          return t
            ? e.isUser()
              ? { _: "inputNotifyUsers" }
              : this.isBroadcast(e)
              ? { _: "inputNotifyBroadcasts" }
              : { _: "inputNotifyChats" }
            : { _: "inputNotifyPeer", peer: this.getInputPeerById(e) };
        }
        getInputPeerById(e) {
          if (!e) return { _: "inputPeerEmpty" };
          if (!e.isUser()) {
            const t = e.toChatId();
            return r.a.getInputPeer(t);
          }
          const t = e.toUserId();
          return o.a.getUserInputPeer(t);
        }
        getInputPeerSelf() {
          return { _: "inputPeerSelf" };
        }
        getInputDialogPeerById(e) {
          return {
            _: "inputDialogPeer",
            peer: Object(h.a)(e) ? e : this.getInputPeerById(e),
          };
        }
        getPeerColorById(e, t = !0) {
          if (!e) return "";
          const s = f[Math.abs(+e) % 7];
          return (t ? g : p)[s];
        }
        getPeerSearchText(e) {
          let t;
          if (this.isUser(e)) t = "%pu " + o.a.getUserSearchText(e.toUserId());
          else {
            t = "%pg " + (r.a.getChat(e.toChatId()).title || "");
          }
          return t;
        }
        getDialogType(e) {
          return this.isMegagroup(e)
            ? "megagroup"
            : this.isChannel(e)
            ? "channel"
            : this.isUser(e)
            ? e === n.default.myId
              ? "saved"
              : "chat"
            : "group";
        }
        getDeleteButtonText(e) {
          switch (this.getDialogType(e)) {
            case "channel":
              return r.a.hasRights(e.toChatId(), "delete_chat")
                ? "ChannelDelete"
                : "ChatList.Context.LeaveChannel";
            case "megagroup":
            case "group":
              return r.a.hasRights(e.toChatId(), "delete_chat")
                ? "DeleteMega"
                : "ChatList.Context.LeaveGroup";
            default:
              return "ChatList.Context.DeleteChat";
          }
        }
        noForwards(e) {
          var t;
          if (e.isUser()) return !1;
          return !!(null === (t = r.a.getChatTyped(e.toChatId()).pFlags) ||
          void 0 === t
            ? void 0
            : t.noforwards);
        }
      })();
      (i.a.appPeersManager = m), (t.a = m);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(53),
        n = s(87),
        r = s(86),
        o = s(120),
        d = s(32),
        c = s(31),
        l = s(15),
        h = s(65),
        u = s(40),
        p = s(17),
        g = s(37),
        f = s(130),
        m = s(62);
      const v = new (class {
        constructor() {
          (this.storage = p.default.storages.chats),
            (this.onChatUpdated = (e, t) => {
              var s;
              h.a.processUpdateMessage(t),
                (null === (s = null == t ? void 0 : t.updates) || void 0 === s
                  ? void 0
                  : s.length) &&
                  this.isChannel(e) &&
                  l.default.dispatchEvent("invalidate_participants", e);
            }),
            this.clear(!0),
            l.default.addMultipleEventsListeners({
              updateChannelParticipant: (e) => {
                d.a.clearCache(
                  "channels.getParticipants",
                  (t) => t.channel.channel_id === e.channel_id
                );
              },
              updateChatDefaultBannedRights: (e) => {
                const t = u.a.getPeerId(e.peer).toChatId(),
                  s = this.chats[t];
                s &&
                  ((s.default_banned_rights = e.default_banned_rights),
                  l.default.dispatchEvent("chat_update", t));
              },
            }),
            p.default.getState().then((e) => {
              const t = p.default.storagesResults.chats;
              if (t.length)
                for (let e = 0, s = t.length; e < s; ++e) {
                  const s = t[e];
                  s && (this.chats[s.id] = s);
                }
              p.default.addEventListener("peerNeeded", (e) => {
                e.isUser() ||
                  this.storage.getFromCache(e.toChatId()) ||
                  this.storage.set({
                    [e.toChatId()]: this.getChat(e.toChatId()),
                  });
              }),
                p.default.addEventListener("peerUnneeded", (e) => {
                  !e.isUser() &&
                    this.storage.getFromCache(e.toChatId()) &&
                    this.storage.delete(e.toChatId());
                });
            });
        }
        clear(e = !1) {
          if (e) this.chats = {};
          else {
            const e = p.default.storagesResults.chats;
            for (const t in this.chats)
              t &&
                (p.default.isPeerNeeded(t.toPeerId(!0)) ||
                  (Object(m.a)(e, (e) => e.id === t),
                  this.storage.delete(t),
                  delete this.chats[t]));
          }
        }
        saveApiChats(e, t) {
          e.saved || ((e.saved = !0), e.forEach((e) => this.saveApiChat(e, t)));
        }
        saveApiChat(e, t) {
          var s, i;
          if ("chatEmpty" === e._) return;
          const a = this.chats[e.id];
          if (
            (void 0 === e.pFlags && (e.pFlags = {}),
            e.pFlags.min && void 0 !== a)
          )
            return;
          (e.initials = c.a.getAbbreviation(e.title)),
            "channel" === e._ &&
              void 0 === e.participants_count &&
              void 0 !== a &&
              a.participants_count &&
              (e.participants_count = a.participants_count);
          let n = !1,
            r = !1;
          if (void 0 === a) this.chats[e.id] = e;
          else {
            (null === (s = a.photo) || void 0 === s ? void 0 : s.photo_id) !==
              (null === (i = e.photo) || void 0 === i ? void 0 : i.photo_id) &&
              (n = !0),
              a.title !== e.title && (r = !0),
              Object(o.a)(a, e),
              l.default.dispatchEvent("chat_update", e.id);
          }
          const d = e.id.toPeerId(!0);
          n && l.default.dispatchEvent("avatar_update", d),
            r && l.default.dispatchEvent("peer_title_edit", d),
            p.default.isPeerNeeded(d) && this.storage.set({ [e.id]: e });
        }
        getChat(e) {
          return (
            this.chats[e] || {
              _: "chatEmpty",
              id: e,
              deleted: !0,
              access_hash: "",
              pFlags: {},
            }
          );
        }
        getChatTyped(e) {
          return this.getChat(e);
        }
        combineParticipantBannedRights(e, t) {
          const s = this.getChat(e);
          if (s.default_banned_rights) {
            t = Object(a.a)(t);
            const e = s.default_banned_rights.pFlags;
            for (let s in e) t.pFlags[s] = e[s];
          }
          return t;
        }
        hasRights(e, t, s, i) {
          const a = this.getChat(e);
          if ("chatEmpty" === a._) return !1;
          if (a.pFlags.deactivated && "view_messages" !== t) return !1;
          const n = void 0 === s;
          if (a.pFlags.creator && n) return !0;
          if (
            "chatForbidden" === a._ ||
            "channelForbidden" === a._ ||
            a.pFlags.kicked ||
            (a.pFlags.left && !a.pFlags.megagroup)
          )
            return !1;
          if (
            !s &&
            !(s = a.admin_rights || a.banned_rights || a.default_banned_rights)
          )
            return !1;
          let r = {};
          switch ((s && (r = s.pFlags), t)) {
            case "embed_links":
            case "send_games":
            case "send_gifs":
            case "send_inline":
            case "send_media":
            case "send_messages":
            case "send_polls":
            case "send_stickers":
              if (!i && a.pFlags.left) return !1;
              if ("chatBannedRights" === s._ && r[t]) return !1;
              if ("channel" === a._ && !a.pFlags.megagroup && !r.post_messages)
                return !1;
              break;
            case "delete_messages":
            case "manage_call":
              return !!r[t];
            case "pin_messages":
              return "chatAdminRights" === s._
                ? r[t] || !!r.post_messages
                : !r[t];
            case "change_info":
            case "invite_users":
              return "chatAdminRights" === s._ ? r[t] : !r[t];
            case "change_type":
            case "delete_chat":
              return !1;
            case "ban_users":
            case "change_permissions":
              return "chatAdminRights" === s._ && !!r.ban_users;
            case "view_participants":
              return !(
                "chat" !== a._ &&
                a.pFlags.broadcast &&
                !a.pFlags.creator &&
                !a.admin_rights
              );
          }
          return !0;
        }
        editChatDefaultBannedRights(e, t) {
          const s = this.getChat(e);
          return s.default_banned_rights &&
            s.default_banned_rights.until_date === t.until_date &&
            Object(n.a)(s.default_banned_rights.pFlags, t.pFlags)
            ? Promise.resolve()
            : d.a
                .invokeApi("messages.editChatDefaultBannedRights", {
                  peer: u.a.getInputPeerById(e.toPeerId(!0)),
                  banned_rights: t,
                })
                .then(this.onChatUpdated.bind(this, e));
        }
        isChannel(e) {
          const t = this.chats[e];
          return !(!t || ("channel" !== t._ && "channelForbidden" !== t._));
        }
        isMegagroup(e) {
          const t = this.chats[e];
          return !(!t || "channel" !== t._ || !t.pFlags.megagroup);
        }
        isBroadcast(e) {
          return this.isChannel(e) && !this.isMegagroup(e);
        }
        isInChat(e) {
          let t = !0;
          const s = this.getChat(e);
          return (
            ("channelForbidden" === s._ ||
              "chatForbidden" === s._ ||
              "chatEmpty" === s._ ||
              s.pFlags.left ||
              s.pFlags.kicked ||
              s.pFlags.deactivated) &&
              (t = !1),
            t
          );
        }
        getChannelInput(e) {
          const t = this.getChat(e);
          return "chatEmpty" !== t._ && t.access_hash
            ? {
                _: "inputChannel",
                channel_id: e,
                access_hash: t.access_hash || "0",
              }
            : { _: "inputChannelEmpty" };
        }
        getInputPeer(e) {
          return this.isChannel(e)
            ? this.getChannelInputPeer(e)
            : this.getChatInputPeer(e);
        }
        getChatInputPeer(e) {
          return { _: "inputPeerChat", chat_id: e };
        }
        getChannelInputPeer(e) {
          return {
            _: "inputPeerChannel",
            channel_id: e,
            access_hash: this.getChat(e).access_hash || 0,
          };
        }
        hasChat(e, t) {
          const s = this.chats[e];
          return Object(r.a)(s) && (t || !s.pFlags.min);
        }
        getChatPhoto(e) {
          const t = this.getChat(e);
          return (t && t.photo) || { _: "chatPhotoEmpty" };
        }
        getChatString(e) {
          const t = this.getChat(e);
          return this.isChannel(e)
            ? (this.isMegagroup(e) ? "s" : "c") + e + "_" + t.access_hash
            : "g" + e;
        }
        createChannel(e) {
          return d.a.invokeApi("channels.createChannel", e).then((e) => {
            h.a.processUpdateMessage(e);
            const t = e.chats[0].id;
            return (
              l.default.dispatchEvent("history_focus", {
                peerId: t.toPeerId(!0),
              }),
              t
            );
          });
        }
        inviteToChannel(e, t) {
          const s = this.getChannelInput(e),
            i = t.map((e) => g.a.getUserInput(e));
          return d.a
            .invokeApi("channels.inviteToChannel", { channel: s, users: i })
            .then(this.onChatUpdated.bind(this, e));
        }
        createChat(e, t) {
          return d.a
            .invokeApi("messages.createChat", {
              users: t.map((e) => g.a.getUserInput(e)),
              title: e,
            })
            .then((e) => {
              h.a.processUpdateMessage(e);
              const t = e.chats[0].id;
              return (
                l.default.dispatchEvent("history_focus", {
                  peerId: t.toPeerId(!0),
                }),
                t
              );
            });
        }
        leaveChannel(e) {
          return d.a
            .invokeApi("channels.leaveChannel", {
              channel: this.getChannelInput(e),
            })
            .then(this.onChatUpdated.bind(this, e));
        }
        joinChannel(e) {
          return d.a
            .invokeApi("channels.joinChannel", {
              channel: this.getChannelInput(e),
            })
            .then(this.onChatUpdated.bind(this, e));
        }
        addChatUser(e, t, s = 100) {
          return d.a
            .invokeApi("messages.addChatUser", {
              chat_id: e,
              user_id: g.a.getUserInput(t),
              fwd_limit: s,
            })
            .then(this.onChatUpdated.bind(this, e));
        }
        deleteChatUser(e, t) {
          return d.a
            .invokeApi("messages.deleteChatUser", {
              chat_id: e,
              user_id: g.a.getUserInput(t),
            })
            .then(this.onChatUpdated.bind(this, e));
        }
        leaveChat(e) {
          return this.deleteChatUser(e, g.a.getSelf().id);
        }
        leave(e) {
          return this.isChannel(e) ? this.leaveChannel(e) : this.leaveChat(e);
        }
        delete(e) {
          return this.isChannel(e) ? this.deleteChannel(e) : this.deleteChat(e);
        }
        deleteChannel(e) {
          return d.a
            .invokeApi("channels.deleteChannel", {
              channel: this.getChannelInput(e),
            })
            .then(this.onChatUpdated.bind(this, e));
        }
        deleteChat(e) {
          return d.a.invokeApi("messages.deleteChat", { chat_id: e });
        }
        migrateChat(e) {
          const t = this.getChat(e);
          return "channel" === t._
            ? Promise.resolve(t.id)
            : d.a
                .invokeApi("messages.migrateChat", { chat_id: e })
                .then((t) => {
                  this.onChatUpdated(e, t);
                  return t.updates.find((e) => "updateChannel" === e._)
                    .channel_id;
                });
        }
        updateUsername(e, t) {
          return d.a
            .invokeApi("channels.updateUsername", {
              channel: this.getChannelInput(e),
              username: t,
            })
            .then((s) => {
              if (s) {
                this.getChat(e).username = t;
              }
              return s;
            });
        }
        editPhoto(e, t) {
          const s = { _: "inputChatUploadedPhoto", file: t };
          let i;
          return (
            (i = this.isChannel(e)
              ? d.a.invokeApi("channels.editPhoto", {
                  channel: this.getChannelInput(e),
                  photo: s,
                })
              : d.a.invokeApi("messages.editChatPhoto", {
                  chat_id: e,
                  photo: s,
                })),
            i.then((e) => {
              h.a.processUpdateMessage(e);
            })
          );
        }
        editTitle(e, t) {
          let s;
          return (
            (s = this.isChannel(e)
              ? d.a.invokeApi("channels.editTitle", {
                  channel: this.getChannelInput(e),
                  title: t,
                })
              : d.a.invokeApi("messages.editChatTitle", {
                  chat_id: e,
                  title: t,
                })),
            s.then((e) => {
              h.a.processUpdateMessage(e);
            })
          );
        }
        editAbout(e, t) {
          const s = e.toPeerId(!0);
          return d.a
            .invokeApi("messages.editChatAbout", {
              peer: u.a.getInputPeerById(s),
              about: t,
            })
            .then((e) => (e && l.default.dispatchEvent("peer_bio_edit", s), e));
        }
        getParticipantPeerId(e) {
          return e.peer ? u.a.getPeerId(e.peer) : e.user_id.toPeerId();
        }
        editBanned(e, t, s) {
          const i = "object" != typeof t ? t : this.getParticipantPeerId(t);
          return d.a
            .invokeApi("channels.editBanned", {
              channel: this.getChannelInput(e),
              participant: u.a.getInputPeerById(i),
              banned_rights: s,
            })
            .then((a) => {
              if ((this.onChatUpdated(e, a), "object" == typeof t)) {
                const a = (Date.now() / 1e3) | 0;
                h.a.processLocalUpdate({
                  _: "updateChannelParticipant",
                  channel_id: e,
                  date: a,
                  actor_id: void 0,
                  qts: void 0,
                  user_id: i,
                  prev_participant: t,
                  new_participant: Object.keys(s.pFlags).length
                    ? {
                        _: "channelParticipantBanned",
                        date: a,
                        banned_rights: s,
                        kicked_by: g.a.getSelf().id,
                        peer: u.a.getOutputPeer(i),
                        pFlags: {},
                      }
                    : void 0,
                });
              }
            });
        }
        clearChannelParticipantBannedRights(e, t) {
          return this.editBanned(e, t, {
            _: "chatBannedRights",
            until_date: 0,
            pFlags: {},
          });
        }
        kickFromChannel(e, t) {
          return this.editBanned(e, t, {
            _: "chatBannedRights",
            until_date: 0,
            pFlags: { view_messages: !0 },
          });
        }
        kickFromChat(e, t) {
          return this.isChannel(e)
            ? this.kickFromChannel(e, t)
            : this.deleteChatUser(e, t.toUserId());
        }
        resolveChannel(e) {
          return d.a
            .invokeApiSingle("channels.getChannels", {
              id: [{ _: "inputChannel", channel_id: e, access_hash: "0" }],
            })
            .then((e) => {
              this.saveApiChats(e.chats);
            });
        }
        togglePreHistoryHidden(e, t) {
          return this.migrateChat(e)
            .then((e) =>
              d.a.invokeApi("channels.togglePreHistoryHidden", {
                channel: this.getChannelInput(e),
                enabled: t,
              })
            )
            .then((e) => {
              h.a.processUpdateMessage(e);
            });
        }
        toggleSignatures(e, t) {
          return d.a
            .invokeApi("channels.toggleSignatures", {
              channel: this.getChannelInput(e),
              enabled: t,
            })
            .then((e) => {
              h.a.processUpdateMessage(e);
            });
        }
        toggleNoForwards(e, t) {
          return d.a
            .invokeApi("messages.toggleNoForwards", {
              peer: this.getInputPeer(e),
              enabled: t,
            })
            .then((e) => {
              h.a.processUpdateMessage(e);
            });
        }
        setChatAvailableReactions(e, t) {
          return d.a
            .invokeApi("messages.setChatAvailableReactions", {
              peer: this.getInputPeer(e),
              available_reactions: t,
            })
            .then((e) => {
              h.a.processUpdateMessage(e);
            });
        }
        isRestricted(e) {
          const t = this.getChat(e),
            s = t.restriction_reason;
          return !!(t.pFlags.restricted && s && Object(f.c)(s));
        }
        getSendAs(e) {
          return d.a.invokeApiSingleProcess({
            method: "channels.getSendAs",
            params: { peer: this.getChannelInputPeer(e) },
            processResult: (e) => (
              g.a.saveApiUsers(e.users), v.saveApiChats(e.chats), e.peers
            ),
          });
        }
      })();
      (i.a.appChatsManager = v), (t.a = v);
    },
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return p;
      });
      var i = s(30),
        a = s(40),
        n = s(15),
        r = s(16),
        o = s(33),
        d = s(37),
        c = s(31),
        l = s(43),
        h = s(125);
      const u = new WeakMap();
      (i.a.peerTitleWeakMap = u),
        n.default.addEventListener("peer_title_edit", (e) => {
          Array.from(
            document.querySelectorAll(`.peer-title[data-peer-id="${e}"]`)
          ).forEach((e) => {
            const t = u.get(e);
            t && t.update();
          });
        });
      class p {
        constructor(e) {
          (this.plainText = !1),
            (this.onlyFirstName = !1),
            (this.dialog = !1),
            (this.element = document.createElement("span")),
            this.element.classList.add("peer-title"),
            this.element.setAttribute("dir", "auto"),
            this.update(e),
            u.set(this.element, this);
        }
        update(e) {
          if (e)
            for (let t in e)
              (this.element.dataset[t] = e[t]
                ? "" + ("boolean" == typeof e[t] ? +e[t] : e[t])
                : "0"),
                (this[t] = e[t]);
          let t = this.fromName;
          if (void 0 !== t)
            return (
              void 0 !== this.limitSymbols &&
                (t = Object(h.a)(t, this.limitSymbols, this.limitSymbols)),
              void (this.element.innerHTML = c.b.wrapEmojiText(t))
            );
          void 0 === this.peerId && (this.peerId = l.c),
            this.peerId === n.default.myId && this.dialog
              ? Object(o.a)(
                  this.element,
                  Object(r.i18n)(this.onlyFirstName ? "Saved" : "SavedMessages")
                )
              : this.peerId.isUser() && d.a.getUser(this.peerId).pFlags.deleted
              ? Object(o.a)(
                  this.element,
                  Object(r.i18n)(this.onlyFirstName ? "Deleted" : "HiddenName")
                )
              : (this.element.innerHTML = a.a.getPeerTitle(
                  this.peerId,
                  this.plainText,
                  this.onlyFirstName,
                  this.limitSymbols
                ));
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(124),
        a = s(0),
        n = s(32),
        r = s(167),
        o = s(74),
        d = s(37),
        c = s(156),
        l = s(30),
        h = s(103),
        u = s(144),
        p = s(38),
        g = s(104);
      function f(e) {
        const t = e.length,
          s = new Uint8Array(Math.ceil(t / 2));
        let i = 0;
        t % 2 && (s[i++] = parseInt(e.charAt(0), 16));
        for (let a = i; a < t; a += 2) s[i++] = parseInt(e.substr(a, 2), 16);
        return s;
      }
      var m = s(86),
        v = s(178);
      class _ {
        constructor() {
          this.photos = {};
        }
        savePhoto(e, t) {
          var s;
          if ("photoEmpty" === e._) return;
          const i = this.photos[e.id];
          if (
            (e.file_reference &&
              (Object(v.a)("file_reference", i, e),
              r.a.saveContext(e.file_reference, t)),
            null === (s = e.sizes) || void 0 === s ? void 0 : s.length)
          ) {
            const t = e.sizes[e.sizes.length - 1];
            "photoSizeProgressive" === t._ &&
              (t.size = t.sizes[t.sizes.length - 1]);
          }
          return i ? Object.assign(i, e) : (this.photos[e.id] = e);
        }
        choosePhotoSize(e, t = 0, s = 0, i = !1, a = !1) {
          window.devicePixelRatio > 1 && ((t *= 2), (s *= 2));
          let n = { _: "photoSizeEmpty", type: "" },
            r = e.sizes || e.thumbs;
          if (
            (a &&
              r &&
              "document" === e._ &&
              (r = r.concat({
                _: "photoSize",
                w: e.w,
                h: e.h,
                size: e.size,
                type: void 0,
              })),
            null == r ? void 0 : r.length)
          ) {
            for (let e = 0, i = r.length; e < i; ++e) {
              const i = r[e];
              if (!("w" in i) && !("h" in i)) continue;
              n = i;
              const a = Object(u.a)(i.w, i.h, t, s);
              if (a.width >= t || a.height >= s) break;
            }
            i &&
              "photoSizeEmpty" === n._ &&
              "photoStrippedSize" === r[0]._ &&
              (n = r[0]);
          }
          return n;
        }
        getUserPhotos(e, t = "0", s = 20) {
          const i = d.a.getUserInput(e);
          return n.a
            .invokeApiCacheable(
              "photos.getUserPhotos",
              { user_id: i, offset: 0, limit: s, max_id: t },
              { cacheSeconds: 60 }
            )
            .then((s) => {
              d.a.saveApiUsers(s.users);
              const i = s.photos.map(
                (t, i) => (
                  (s.photos[i] = this.savePhoto(t, {
                    type: "profilePhoto",
                    peerId: e.toPeerId(),
                  })),
                  t.id
                )
              );
              if ("0" !== t && t) {
                const e = i.indexOf(t);
                -1 !== e && i.splice(e, 1);
              }
              return { count: s.count || i.length, photos: i };
            });
        }
        getPreviewURLFromBytes(e, t = !1) {
          let s, i;
          t
            ? (s = e instanceof Uint8Array ? e : new Uint8Array(e))
            : ((s = new Uint8Array(
                _.jpegHeader.concat(Array.from(e.slice(3)), _.jpegTail)
              )),
              (s[164] = e[1]),
              (s[166] = e[2])),
            (i = t ? (a.IS_SAFARI ? "image/png" : "image/webp") : "image/jpeg");
          const n = new Blob([s], { type: i });
          return URL.createObjectURL(n);
        }
        getPathFromPhotoPathSize(e) {
          const t = e.bytes;
          let s = "M";
          for (let e = 0, i = t.length; e < i; ++e) {
            const i = t[e];
            i >= 192
              ? (s +=
                  "AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,"[
                    i - 128 - 64
                  ])
              : (i >= 128 ? (s += ",") : i >= 64 && (s += "-"),
                (s += "" + (63 & i)));
          }
          return (s += "z"), s;
        }
        getPreviewURLFromThumb(e, t, s = !1) {
          const i = o.a.getCacheContext(e, t.type);
          return i.url || (i.url = this.getPreviewURLFromBytes(t.bytes, s));
        }
        getImageFromStrippedThumb(e, t, s) {
          const i = this.getPreviewURLFromThumb(e, t, !1),
            a = new Image();
          a.classList.add("thumbnail");
          const n = (s ? Object(c.a)(i) : Promise.resolve(i)).then((e) =>
            Object(h.b)(a, e)
          );
          return { image: a, loadPromise: n };
        }
        setAttachmentSize(e, t, s, i, a = !0, n, r, o) {
          let d;
          o || (o = this.choosePhotoSize(e, s, i, void 0, r));
          const c = "document" === e._;
          d = c
            ? Object(p.c)(e.w || o.w || 512, e.h || o.h || 512)
            : Object(p.c)(o.w || 100, o.h || 100);
          let l = Object(p.c)(s, i);
          l = d = d.aspect(l, a);
          let h = !0;
          return (
            (c && !["video", "gif"].includes(e.type)) ||
              (l.width < 200 &&
                l.height < 200 &&
                (l = d = d.aspectCovered(Object(p.c)(200, 200))),
              n &&
                (n.message ||
                  n.reply_to_mid ||
                  n.media.webpage ||
                  (n.replies &&
                    n.replies.pFlags.comments &&
                    777 !== n.replies.channel_id)) &&
                l.width < 320 &&
                ((l = Object(p.c)(320, l.height)), (h = !1)),
              h &&
                l.width < 120 &&
                n &&
                ((l = Object(p.c)(120, l.height)), (h = !1))),
            (t.style.width = l.width + "px"),
            (t.style.height = l.height + "px"),
            { photoSize: o, size: d, isFit: h }
          );
        }
        getStrippedThumbIfNeeded(e, t, s, i = !1) {
          if (!t.downloaded || ["video", "gif"].includes(e.type) || i) {
            if ("document" === e._ && t.downloaded && !i) return null;
            const a = e.sizes || e.thumbs,
              n = (null == a ? void 0 : a.length)
                ? a.find((e) => "photoStrippedSize" === e._)
                : null;
            if (n && "bytes" in n)
              return this.getImageFromStrippedThumb(e, n, s);
          }
          return null;
        }
        getPhotoDownloadOptions(e, t, s, i) {
          const a = "document" === e._;
          if (!t || "photoSizeEmpty" === t._)
            throw new Error("photoSizeEmpty!");
          const n =
              ("photoSize" === t._ || "photoSizeProgressive" === t._) &&
              e.access_hash &&
              e.file_reference,
            r = {
              _: a ? "inputDocumentFileLocation" : "inputPhotoFileLocation",
              id: e.id,
              access_hash: e.access_hash,
              file_reference: e.file_reference,
              thumb_size: t.type,
            };
          return {
            dcId: e.dc_id,
            location: r,
            size: n ? t.size : void 0,
            queueId: s,
            onlyCache: i,
          };
        }
        preloadPhoto(e, t, s, a) {
          const n = this.getPhoto(e);
          if (!n || "photoEmpty" === n._)
            throw new Error("preloadPhoto photoEmpty!");
          if (!t) {
            const e = g.a.width,
              s = g.a.height;
            t = this.choosePhotoSize(n, e, s);
          }
          const r = o.a.getCacheContext(n, t.type);
          if (r.downloaded >= ("size" in t ? t.size : 0) && r.url)
            return Promise.resolve();
          const d = this.getPhotoDownloadOptions(n, t, s, a),
            c = Object(i.a)(d.location);
          let l = o.a.getDownload(c);
          return (
            l ||
            ((l = o.a.download(d)),
            l
              .then((e) => {
                if (!r.downloaded || r.downloaded < e.size) {
                  const t = URL.createObjectURL(e);
                  (r.downloaded = e.size), (r.url = t);
                }
                return e;
              })
              .catch(() => {}),
            l)
          );
        }
        getPhoto(e) {
          return Object(m.a)(e) ? e : this.photos[e];
        }
        getInput(e) {
          return {
            _: "inputPhoto",
            id: e.id,
            access_hash: e.access_hash,
            file_reference: e.file_reference,
          };
        }
        getMediaInput(e) {
          return { _: "inputMediaPhoto", id: this.getInput(e), ttl_seconds: 0 };
        }
        savePhotoFile(e, t) {
          const s = this.choosePhotoSize(e, 65535, 65535);
          if ("photoSize" !== s._ && "photoSizeProgressive" !== s._) return;
          const i = this.getPhotoDownloadOptions(e, s, t);
          (i.fileName = "photo" + e.id + ".jpg"),
            o.a.downloadToDisc(i, i.fileName);
        }
      }
      (_.jpegHeader = f(
        "ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00"
      )),
        (_.jpegTail = f("ffd9"));
      const y = new _();
      l.a && (l.a.appPhotosManager = y);
      t.a = y;
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "AppProfileManager", function () {
          return _;
        });
      var i = s(30),
        a = s(58),
        n = s(160),
        r = s(16),
        o = s(32),
        d = s(15),
        c = s(134),
        l = s(65),
        h = s(47),
        u = s(102),
        p = s(111),
        g = s(40),
        f = s(56),
        m = s(37),
        v = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      class _ {
        constructor() {
          (this.usersFull = {}),
            (this.chatsFull = {}),
            (this.onUpdateUserTyping = (e) => {
              var t;
              const s = e.user_id
                ? e.user_id.toPeerId()
                : g.a.getPeerId(e.from_id);
              if (
                d.default.myId === s ||
                "speakingInGroupCallAction" === e.action._
              )
                return;
              const i = g.a.getPeerId(e),
                a =
                  null !== (t = this.typingsInPeer[i]) && void 0 !== t
                    ? t
                    : (this.typingsInPeer[i] = []);
              let n = a.find((e) => e.userId === s);
              const r = () => {
                delete n.timeout;
                const e = a.indexOf(n);
                -1 !== e && a.splice(e, 1),
                  d.default.dispatchEvent("peer_typings", {
                    peerId: i,
                    typings: a,
                  }),
                  a.length || delete this.typingsInPeer[i];
              };
              if (
                (n && void 0 !== n.timeout && clearTimeout(n.timeout),
                "sendMessageCancelAction" === e.action._)
              ) {
                if (!n) return;
                return void r();
              }
              n || ((n = { userId: s }), a.push(n)), (n.action = e.action);
              const o = m.a.hasUser(s);
              o
                ? m.a.forceUserOnline(s)
                : "updateChatUserTyping" === e._ &&
                  e.chat_id &&
                  h.a.hasChat(e.chat_id) &&
                  !h.a.isChannel(e.chat_id) &&
                  Promise.resolve(this.getChatFull(e.chat_id)).then(() => {
                    void 0 !== n.timeout &&
                      m.a.hasUser(s) &&
                      d.default.dispatchEvent("peer_typings", {
                        peerId: i,
                        typings: a,
                      });
                  }),
                (n.timeout = window.setTimeout(r, 6e3)),
                o &&
                  d.default.dispatchEvent("peer_typings", {
                    peerId: i,
                    typings: a,
                  });
            }),
            (this.onUpdatePeerBlocked = (e) => {
              const t = g.a.getPeerId(e.peer_id);
              if (g.a.isUser(t)) {
                const s = t.toUserId(),
                  i = this.usersFull[s];
                i &&
                  (e.blocked
                    ? (i.pFlags.blocked = !0)
                    : delete i.pFlags.blocked),
                  d.default.dispatchEvent("user_full_update", s);
              }
              d.default.dispatchEvent("peer_block", {
                peerId: t,
                blocked: e.blocked,
              });
            }),
            d.default.addMultipleEventsListeners({
              updateChatParticipants: (e) => {
                const t = e.participants;
                if ("chatParticipants" === t._) {
                  const e = t.chat_id,
                    s = this.chatsFull[e];
                  void 0 !== s &&
                    ((s.participants = t),
                    d.default.dispatchEvent("chat_full_update", e));
                }
              },
              updateChatParticipantAdd: (e) => {
                const t = this.chatsFull[e.chat_id];
                if (void 0 !== t) {
                  const s = t.participants,
                    i = s.participants || [];
                  for (let t = 0, s = i.length; t < s; t++)
                    if (i[t].user_id === e.user_id) return;
                  i.push({
                    _: "chatParticipant",
                    user_id: e.user_id,
                    inviter_id: e.inviter_id,
                    date: Object(a.h)(!0),
                  }),
                    (s.version = e.version),
                    d.default.dispatchEvent("chat_full_update", e.chat_id);
                }
              },
              updateChatParticipantDelete: (e) => {
                const t = this.chatsFull[e.chat_id];
                if (void 0 !== t) {
                  const s = t.participants,
                    i = s.participants || [];
                  for (let t = 0, a = i.length; t < a; t++)
                    if (i[t].user_id === e.user_id)
                      return (
                        i.splice(t, 1),
                        (s.version = e.version),
                        void d.default.dispatchEvent(
                          "chat_full_update",
                          e.chat_id
                        )
                      );
                }
              },
              updateUserTyping: this.onUpdateUserTyping,
              updateChatUserTyping: this.onUpdateUserTyping,
              updateChannelUserTyping: this.onUpdateUserTyping,
              updatePeerBlocked: this.onUpdatePeerBlocked,
            }),
            d.default.addEventListener("chat_update", (e) => {
              var t, s;
              const i = this.chatsFull[e],
                a = h.a.getChat(e);
              if (!i || !a) return;
              let n = !1;
              !!i.call !=
                !!(null === (t = a.pFlags) || void 0 === t
                  ? void 0
                  : t.call_active) && (n = !0);
              const { photo: r } = a;
              if (r) {
                const e = "chatPhotoEmpty" !== r._;
                (e !== !(!i.chat_photo || "photoEmpty" === i.chat_photo._) ||
                  (e &&
                    r.photo_id !==
                      (null === (s = i.chat_photo) || void 0 === s
                        ? void 0
                        : s.id))) &&
                  (n = !0);
              }
              n && this.refreshFullPeer(e.toPeerId(!0));
            }),
            d.default.addEventListener("channel_update", (e) => {
              this.refreshFullPeer(e.toPeerId(!0));
            }),
            d.default.addEventListener("chat_full_update", (e) => {
              d.default.dispatchEvent("peer_full_update", e.toPeerId(!0));
            }),
            d.default.addEventListener("user_full_update", (e) => {
              d.default.dispatchEvent("peer_full_update", e.toPeerId(!1));
            }),
            d.default.addEventListener("invalidate_participants", (e) => {
              this.invalidateChannelParticipants(e);
            }),
            (this.typingsInPeer = {});
        }
        getProfile(e, t) {
          return this.usersFull[e] && !t
            ? this.usersFull[e]
            : o.a.invokeApiSingleProcess({
                method: "users.getFullUser",
                params: { id: m.a.getUserInput(e) },
                processResult: (t) => {
                  h.a.saveApiChats(t.chats, !0), m.a.saveApiUsers(t.users);
                  const s = t.full_user,
                    i = e.toPeerId(!1);
                  return (
                    s.profile_photo &&
                      (s.profile_photo = f.a.savePhoto(s.profile_photo, {
                        type: "profilePhoto",
                        peerId: i,
                      })),
                    p.a.savePeerSettings({
                      peerId: i,
                      settings: s.notify_settings,
                    }),
                    (this.usersFull[e] = s),
                    d.default.dispatchEvent("user_full_update", e),
                    s
                  );
                },
              });
        }
        getProfileByPeerId(e, t) {
          return g.a.isAnyChat(e)
            ? this.getChatFull(e.toChatId(), t)
            : this.getProfile(e.toUserId(), t);
        }
        getCachedFullChat(e) {
          return this.chatsFull[e];
        }
        getCachedFullUser(e) {
          return this.usersFull[e];
        }
        getCachedProfileByPeerId(e) {
          return e.isUser()
            ? this.getCachedFullUser(e.toUserId())
            : this.getCachedFullChat(e.toChatId());
        }
        getFullPhoto(e) {
          return v(this, void 0, void 0, function* () {
            const t = yield this.getProfileByPeerId(e);
            switch (t._) {
              case "userFull":
                return t.profile_photo;
              case "channelFull":
              case "chatFull":
                return t.chat_photo;
            }
          });
        }
        getChatFull(e, t) {
          if (h.a.isChannel(e)) return this.getChannelFull(e, t);
          const s = this.chatsFull[e];
          if (s && !t) {
            const t = h.a.getChat(e);
            if (t.version === s.participants.version || t.pFlags.left) return s;
          }
          return o.a.invokeApiSingleProcess({
            method: "messages.getFullChat",
            params: { chat_id: e },
            processResult: (t) => {
              h.a.saveApiChats(t.chats, !0), m.a.saveApiUsers(t.users);
              const s = t.full_chat,
                i = e.toPeerId(!0);
              return (
                s &&
                  s.chat_photo &&
                  s.chat_photo.id &&
                  (s.chat_photo = f.a.savePhoto(s.chat_photo, {
                    type: "profilePhoto",
                    peerId: i,
                  })),
                p.a.savePeerSettings({
                  peerId: i,
                  settings: s.notify_settings,
                }),
                (this.chatsFull[e] = s),
                d.default.dispatchEvent("chat_full_update", e),
                s
              );
            },
          });
        }
        getChatInviteLink(e, t) {
          return v(this, void 0, void 0, function* () {
            const s = yield this.getChatFull(e);
            return !t &&
              s.exported_invite &&
              "chatInviteExported" == s.exported_invite._
              ? s.exported_invite.link
              : o.a
                  .invokeApi("messages.exportChatInvite", {
                    peer: g.a.getInputPeerById(e.toPeerId(!0)),
                  })
                  .then(
                    (t) => (
                      void 0 !== this.chatsFull[e] &&
                        (this.chatsFull[e].exported_invite = t),
                      t.link
                    )
                  );
          });
        }
        getChannelParticipants(
          e,
          t = { _: "channelParticipantsRecent" },
          s = 200,
          i = 0
        ) {
          if ("channelParticipantsRecent" === t._) {
            const t = h.a.getChat(e);
            if (
              t &&
              t.pFlags &&
              (t.pFlags.kicked ||
                (t.pFlags.broadcast && !t.pFlags.creator && !t.admin_rights))
            )
              return Promise.reject();
          }
          return o.a
            .invokeApiCacheable(
              "channels.getParticipants",
              {
                channel: h.a.getChannelInput(e),
                filter: t,
                offset: i,
                limit: s,
                hash: "0",
              },
              { cacheSeconds: 60 }
            )
            .then((e) => (m.a.saveApiUsers(e.users), e));
        }
        getChannelParticipant(e, t) {
          return o.a
            .invokeApiSingle("channels.getParticipant", {
              channel: h.a.getChannelInput(e),
              participant: g.a.getInputPeerById(t),
            })
            .then((e) => (m.a.saveApiUsers(e.users), e.participant));
        }
        getChannelFull(e, t) {
          return void 0 === this.chatsFull[e] || t
            ? o.a.invokeApiSingleProcess({
                method: "channels.getFullChannel",
                params: { channel: h.a.getChannelInput(e) },
                processResult: (t) => {
                  const s = e.toPeerId(!0);
                  h.a.saveApiChats(t.chats, !0), m.a.saveApiUsers(t.users);
                  const i = t.full_chat;
                  return (
                    i &&
                      i.chat_photo.id &&
                      (i.chat_photo = f.a.savePhoto(i.chat_photo, {
                        type: "profilePhoto",
                        peerId: s,
                      })),
                    p.a.savePeerSettings({
                      peerId: s,
                      settings: i.notify_settings,
                    }),
                    (this.chatsFull[e] = i),
                    d.default.dispatchEvent("chat_full_update", e),
                    i
                  );
                },
                processError: (t) => {
                  switch (t.type) {
                    case "CHANNEL_PRIVATE":
                      let t = h.a.getChat(e);
                      (t = {
                        _: "channelForbidden",
                        access_hash: t.access_hash,
                        title: t.title,
                      }),
                        l.a.processUpdateMessage({
                          _: "updates",
                          updates: [{ _: "updateChannel", channel_id: e }],
                          chats: [t],
                          users: [],
                        });
                  }
                  throw t;
                },
              })
            : this.chatsFull[e];
        }
        getMentions(e, t, s) {
          let i;
          return (
            (i = h.a.isChannel(e)
              ? this.getChannelParticipants(
                  e,
                  {
                    _: "channelParticipantsMentions",
                    q: t,
                    top_msg_id: u.a.getServerMessageId(s),
                  },
                  50,
                  0
                ).then((e) =>
                  e.participants.map((e) => h.a.getParticipantPeerId(e))
                )
              : e
              ? Promise.resolve(this.getChatFull(e)).then((e) =>
                  e.participants.participants.map((e) => e.user_id.toPeerId())
                )
              : Promise.resolve([])),
            Promise.all([
              m.a.getTopPeers("bots_inline").catch(() => []),
              i,
            ]).then((e) =>
              ((e) => {
                "@" === t.charAt(0) && (t = t.slice(1));
                const s = new c.a({ ignoreCase: !0 }),
                  i = new Map();
                e.forEach((e) => {
                  s.indexObject(e.id, m.a.getUserSearchText(e.id)),
                    i.set(e.id, e.rating);
                });
                const a = Array.from(s.search(t));
                return a.sort((e, t) => i.get(t) - i.get(e)), a;
              })(e[0].concat(e[1].map((e) => ({ id: e, rating: 0 }))))
            )
          );
        }
        invalidateChannelParticipants(e) {
          o.a.clearCache(
            "channels.getParticipants",
            (t) => t.channel.channel_id === e
          ),
            this.refreshFullPeer(e.toPeerId(!0));
        }
        refreshFullPeer(e) {
          if (e.isUser()) {
            const t = e.toUserId();
            delete this.usersFull[t],
              d.default.dispatchEvent("user_full_update", t);
          } else {
            const t = e.toChatId();
            delete this.chatsFull[t],
              d.default.dispatchEvent("chat_full_update", t);
          }
        }
        updateProfile(e, t, s) {
          return o.a
            .invokeApi("account.updateProfile", {
              first_name: e,
              last_name: t,
              about: s,
            })
            .then((e) => {
              if ((m.a.saveApiUser(e), void 0 !== s)) {
                const t = e.id.toPeerId(),
                  i = this.usersFull[e.id];
                i && (i.about = s), d.default.dispatchEvent("peer_bio_edit", t);
              }
              return this.getProfile(d.default.myId, !0);
            });
        }
        uploadProfilePhoto(e) {
          return o.a
            .invokeApi("photos.uploadProfilePhoto", { file: e })
            .then((e) => {
              const t = e.photo;
              if (!e.users.length) {
                const s = t.sizes.find((e) => "photoStrippedSize" === e._);
                e.users.push(
                  Object.assign(Object.assign({}, m.a.getSelf()), {
                    photo: {
                      _: "userProfilePhoto",
                      dc_id: t.dc_id,
                      photo_id: t.id,
                      stripped_thumb: null == s ? void 0 : s.bytes,
                      pFlags: {},
                    },
                  })
                );
              }
              m.a.saveApiUsers(e.users);
              const s = d.default.myId;
              f.a.savePhoto(e.photo, { type: "profilePhoto", peerId: s });
              const i = s.toUserId();
              l.a.processLocalUpdate({
                _: "updateUserPhoto",
                user_id: i,
                date: Object(a.h)(!0),
                photo: m.a.getUser(i).photo,
                previous: !0,
              });
            });
        }
        deletePhotos(e) {
          return o.a
            .invokeApiSingle("photos.deletePhotos", {
              id: e.map((e) => {
                const t = f.a.getPhoto(e);
                return f.a.getInput(t);
              }),
            })
            .then((e) => {});
        }
        getChatMembersString(e) {
          var t, s;
          const i = h.a.getChat(e);
          if ("chatForbidden" === i._) return Object(r.i18n)("YouWereKicked");
          const a = this.chatsFull[e];
          let o;
          o = a
            ? "channelFull" === a._
              ? a.participants_count
              : null === (t = a.participants.participants) || void 0 === t
              ? void 0
              : t.length
            : i.participants_count ||
              (null === (s = i.participants) || void 0 === s
                ? void 0
                : s.participants.length);
          o = o || 1;
          let d = h.a.isBroadcast(e)
            ? "Peer.Status.Subscribers"
            : "Peer.Status.Member";
          return Object(r.i18n)(d, [Object(n.a)(o)]);
        }
        verifyParticipantForOnlineCount(e) {
          const t = m.a.getUser(e.user_id);
          return !(!t || !t.status || "userStatusOnline" !== t.status._);
        }
        reduceParticipantsForOnlineCount(e) {
          return e.reduce(
            (e, t) => e + +this.verifyParticipantForOnlineCount(t),
            0
          );
        }
        getOnlines(e) {
          var t;
          return v(this, void 0, void 0, function* () {
            if (h.a.isBroadcast(e)) return 1;
            const s = yield this.getChatFull(e);
            if (h.a.isMegagroup(e)) {
              if (s.participants_count <= 100) {
                const t = yield this.getChannelParticipants(
                  e,
                  { _: "channelParticipantsRecent" },
                  100
                );
                return this.reduceParticipantsForOnlineCount(t.participants);
              }
              const i = yield o.a.invokeApiCacheable(
                "messages.getOnlines",
                { peer: h.a.getChannelInputPeer(e) },
                { cacheSeconds: 60 }
              );
              return null !== (t = i.onlines) && void 0 !== t ? t : 1;
            }
            const i = s.participants;
            return (null == i ? void 0 : i.participants)
              ? this.reduceParticipantsForOnlineCount(i.participants)
              : 1;
          });
        }
        getPeerTypings(e) {
          return this.typingsInPeer[e];
        }
      }
      const y = new _();
      (i.a.appProfileManager = y), (t.default = y);
    },
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(41),
        n = s(32),
        r = s(15),
        o = s(37),
        d = s(47),
        c = s(40),
        l = s(17),
        h = s(79),
        u = s(80),
        p = s(77),
        g = s(31),
        f = s(7);
      const m = new (class {
        constructor() {
          (this.updatesState = {
            pendingPtsUpdates: [],
            pendingSeqUpdates: {},
            syncPending: null,
            syncLoading: null,
          }),
            (this.channelStates = {}),
            (this.attached = !1),
            (this.log = Object(a.b)("UPDATES", a.a.Error | a.a.Warn | a.a.Log)),
            (this.debug = i.b),
            (this.processUpdateMessage = (e, t = {}) => {
              const s = { date: e.date, seq: e.seq, seqStart: e.seq_start };
              switch (
                (this.debug && this.log.debug("processUpdateMessage", e), e._)
              ) {
                case "updatesTooLong":
                case "new_session_created":
                  this.forceGetDifference();
                  break;
                case "updateShort":
                  this.processUpdate(e.update, s);
                  break;
                case "updateShortMessage":
                case "updateShortChatMessage": {
                  Object(u.a)(e),
                    this.debug &&
                      this.log.debug(
                        "updateShortMessage | updateShortChatMessage",
                        Object.assign({}, e)
                      );
                  const t = e.pFlags.out,
                    i = e.from_id || (t ? r.default.myId : e.user_id),
                    a = e.chat_id
                      ? e.chat_id.toPeerId(!0)
                      : e.user_id.toPeerId(!1) || r.default.myId;
                  this.processUpdate(
                    {
                      _: "updateNewMessage",
                      message: {
                        _: "message",
                        pFlags: e.pFlags,
                        id: e.id,
                        from_id: c.a.getOutputPeer(i.toPeerId()),
                        peer_id: c.a.getOutputPeer(a),
                        date: e.date,
                        message: e.message,
                        fwd_from: e.fwd_from,
                        reply_to: e.reply_to,
                        entities: e.entities,
                      },
                      pts: e.pts,
                      pts_count: e.pts_count,
                    },
                    s
                  );
                  break;
                }
                case "updatesCombined":
                case "updates":
                  o.a.saveApiUsers(e.users, t.override),
                    d.a.saveApiChats(e.chats, t.override),
                    e.updates.forEach((e) => {
                      this.processUpdate(e, s);
                    });
                  break;
                default:
                  this.log.warn("Unknown update message", e);
              }
            });
        }
        setProxy() {
          const e = this;
          this.updatesState = new Proxy(this.updatesState, {
            set: function (t, s, i) {
              return (t[s] = i), e.saveUpdatesState(), !0;
            },
          });
        }
        saveUpdatesState() {
          const e = this.updatesState;
          l.default.pushToState("updates", {
            seq: e.seq,
            pts: e.pts,
            date: e.date,
          });
        }
        popPendingSeqUpdate() {
          const e = this.updatesState,
            t = e.seq + 1,
            s = e.pendingSeqUpdates[t];
          if (!s) return !1;
          const i = s.updates;
          for (let e = 0, t = i.length; e < t; ++e) this.saveUpdate(i[e]);
          return (
            (e.seq = s.seq),
            s.date && e.date < s.date && (e.date = s.date),
            delete e.pendingSeqUpdates[t],
            !this.popPendingSeqUpdate() &&
              e.syncPending &&
              e.syncPending.seqAwaiting &&
              e.seq >= e.syncPending.seqAwaiting &&
              (e.syncPending.ptsAwaiting
                ? delete e.syncPending.seqAwaiting
                : (clearTimeout(e.syncPending.timeout),
                  (e.syncPending = null))),
            !0
          );
        }
        popPendingPtsUpdate(e) {
          const t = e ? this.getChannelState(e) : this.updatesState;
          if (!t.pendingPtsUpdates.length) return !1;
          t.pendingPtsUpdates.sort((e, t) => e.pts - t.pts);
          let s = t.pts,
            i = 0,
            a = 0;
          for (let e = 0, n = t.pendingPtsUpdates.length; e < n; ++e) {
            const n = t.pendingPtsUpdates[e];
            (s += n.pts_count), s >= n.pts && ((i = n.pts), (a = e));
          }
          if (!i) return !1;
          this.debug &&
            this.log.debug(
              "pop pending pts updates",
              i,
              t.pendingPtsUpdates.slice(0, a + 1)
            ),
            (t.pts = i);
          for (let e = 0; e <= a; ++e) {
            const s = t.pendingPtsUpdates[e];
            this.saveUpdate(s);
          }
          return (
            t.pendingPtsUpdates.splice(0, a + 1),
            !t.pendingPtsUpdates.length &&
              t.syncPending &&
              (t.syncPending.seqAwaiting
                ? delete t.syncPending.ptsAwaiting
                : (clearTimeout(t.syncPending.timeout),
                  (t.syncPending = null))),
            !0
          );
        }
        forceGetDifference() {
          this.updatesState.syncLoading || this.getDifference();
        }
        processLocalUpdate(e) {
          this.processUpdateMessage({ _: "updateShort", update: e });
        }
        getDifference(e = !1) {
          const t = this.updatesState;
          let s = t.syncLoading;
          s || ((t.pendingSeqUpdates = {}), (t.pendingPtsUpdates = [])),
            t.syncPending &&
              (clearTimeout(t.syncPending.timeout), (t.syncPending = null));
          const i = n.a
            .invokeApi(
              "updates.getDifference",
              {
                pts: t.pts,
                pts_total_limit: e ? 1200 : void 0,
                date: t.date,
                qts: -1,
              },
              { timeout: 2147483647 }
            )
            .then((s) => {
              if (
                (this.debug && this.log.debug("Get diff result", s),
                "updates.differenceEmpty" === s._)
              )
                return (
                  this.debug && this.log.debug("apply empty diff", s.seq),
                  (t.date = s.date),
                  void (t.seq = s.seq)
                );
              if (
                (e && r.default.dispatchEvent("state_synchronizing"),
                "updates.differenceTooLong" !== s._)
              ) {
                o.a.saveApiUsers(s.users),
                  d.a.saveApiChats(s.chats),
                  s.other_updates.forEach((e) => {
                    switch (e._) {
                      case "updateChannelTooLong":
                      case "updateNewChannelMessage":
                      case "updateEditChannelMessage":
                        return void this.processUpdate(e);
                    }
                    this.saveUpdate(e);
                  }),
                  s.new_messages.forEach((e) => {
                    this.saveUpdate({
                      _: "updateNewMessage",
                      message: e,
                      pts: t.pts,
                      pts_count: 0,
                    });
                  });
                const e =
                  "updates.difference" === s._ ? s.state : s.intermediate_state;
                (t.seq = e.seq), (t.pts = e.pts), (t.date = e.date);
              } else
                (t.pts = s.pts),
                  (t.date = ((Date.now() / 1e3) | 0) + h.a.serverTimeOffset),
                  delete t.seq,
                  (this.channelStates = {}),
                  this.log.warn("getDifference:", s._),
                  r.default.dispatchEvent("state_cleared");
              if ("updates.differenceSlice" === s._)
                return this.getDifference();
              this.debug && this.log.debug("finished get diff");
            });
          return s || this.justAName(t, i), i;
        }
        getChannelDifference(e) {
          const t = this.getChannelState(e),
            s = t.syncLoading;
          s || (t.pendingPtsUpdates = []),
            t.syncPending &&
              (clearTimeout(t.syncPending.timeout), (t.syncPending = null));
          const i = n.a
            .invokeApi(
              "updates.getChannelDifference",
              {
                channel: d.a.getChannelInput(e),
                filter: { _: "channelMessagesFilterEmpty" },
                pts: t.pts,
                limit: 30,
              },
              { timeout: 2147483647 }
            )
            .then((s) => {
              if (
                (this.debug && this.log.debug("Get channel diff result", s),
                (t.pts = "pts" in s ? s.pts : void 0),
                "updates.channelDifferenceEmpty" !== s._)
              ) {
                if ("updates.channelDifferenceTooLong" === s._)
                  return (
                    this.debug && this.log.debug("channel diff too long", s),
                    delete this.channelStates[e],
                    void this.saveUpdate({
                      _: "updateChannelReload",
                      channel_id: e,
                    })
                  );
                if (
                  (o.a.saveApiUsers(s.users),
                  d.a.saveApiChats(s.chats),
                  this.debug &&
                    this.log.debug(
                      "applying",
                      s.other_updates.length,
                      "channel other updates"
                    ),
                  s.other_updates.forEach((e) => {
                    this.saveUpdate(e);
                  }),
                  this.debug &&
                    this.log.debug(
                      "applying",
                      s.new_messages.length,
                      "channel new messages"
                    ),
                  s.new_messages.forEach((e) => {
                    this.saveUpdate({
                      _: "updateNewChannelMessage",
                      message: e,
                      pts: t.pts,
                      pts_count: 0,
                    });
                  }),
                  this.debug && this.log.debug("apply channel diff", t.pts),
                  "updates.channelDifference" === s._ && !s.pFlags.final)
                )
                  return this.getChannelDifference(e);
                this.debug && this.log.debug("finished channel get diff");
              } else
                this.debug && this.log.debug("apply channel empty diff", s);
            });
          return s || this.justAName(t, i, e), i;
        }
        justAName(e, t, s) {
          (e.syncLoading = t),
            r.default.dispatchEvent("state_synchronizing", s),
            t.then(
              () => {
                (e.syncLoading = null),
                  r.default.dispatchEvent("state_synchronized", s);
              },
              () => {
                e.syncLoading = null;
              }
            );
        }
        addChannelState(e, t) {
          if (!t) throw new Error("Add channel state without pts " + e);
          return (
            !(e in this.channelStates) &&
            ((this.channelStates[e] = {
              pts: t,
              pendingPtsUpdates: [],
              syncPending: null,
              syncLoading: null,
            }),
            !0)
          );
        }
        getChannelState(e, t) {
          return (
            void 0 === this.channelStates[e] && this.addChannelState(e, t),
            this.channelStates[e]
          );
        }
        processUpdate(e, t = {}) {
          var s;
          let i;
          switch (e._) {
            case "updateNewChannelMessage":
            case "updateEditChannelMessage":
              i = c.a.getPeerId(e.message.peer_id).toChatId();
              break;
            case "updateChannelTooLong":
              if (((i = e.channel_id), !(i in this.channelStates))) return !1;
              break;
            default:
              "channel_id" in e && "pts" in e && (i = e.channel_id);
          }
          const { pts: a, pts_count: n } = e,
            r = i ? this.getChannelState(i, a) : this.updatesState;
          if (r.syncLoading) return !1;
          if ("updateChannelTooLong" === e._)
            return (
              (!r.lastPtsUpdateTime || r.lastPtsUpdateTime < Date.now() - 6) &&
                this.getChannelDifference(i),
              !1
            );
          if (
            "updateNewMessage" === e._ ||
            "updateEditMessage" === e._ ||
            "updateNewChannelMessage" === e._ ||
            "updateEditChannelMessage" === e._
          ) {
            const t = e.message,
              a = c.a.getPeerId(t.peer_id),
              n = t.fwd_from || {};
            let r;
            if (
              (t.from_id &&
                !o.a.hasUser(c.a.getPeerId(t.from_id), t.pFlags.post) &&
                (r = "author")) ||
              (n.from_id &&
                !o.a.hasUser(
                  c.a.getPeerId(n.from_id),
                  !!n.from_id.channel_id
                ) &&
                (r = "fwdAuthor")) ||
              ((null === (s = n.from_id) || void 0 === s
                ? void 0
                : s.channel_id) &&
                !d.a.hasChat(n.from_id.channel_id, !0) &&
                (r = "fwdChannel")) ||
              (a.isUser() && !o.a.hasUser(a) && (r = "toPeer User")) ||
              (a.isAnyChat() &&
                !d.a.hasChat(a.toChatId()) &&
                (r = "toPeer Chat"))
            )
              return (
                this.log.warn("Not enough data for message update", a, r, t),
                i && d.a.hasChat(i)
                  ? this.getChannelDifference(i)
                  : this.forceGetDifference(),
                !1
              );
          } else if (i && !d.a.hasChat(i)) return !1;
          let l, h;
          if (a) {
            if (r.pts + (n || 0) < a)
              return (
                this.debug &&
                  this.log.warn("Pts hole", r, e, i && d.a.getChat(i)),
                r.pendingPtsUpdates.push(e),
                r.syncPending ||
                  r.syncLoading ||
                  (r.syncPending = {
                    timeout: window.setTimeout(() => {
                      (r.syncPending = null),
                        r.syncLoading ||
                          (i
                            ? this.getChannelDifference(i)
                            : this.getDifference());
                    }, 6),
                  }),
                (r.syncPending.ptsAwaiting = !0),
                !1
              );
            if (a > r.pts)
              (r.pts = a), (l = !0), (r.lastPtsUpdateTime = Date.now());
            else if (n) return !1;
            i &&
              t.date &&
              this.updatesState.date < t.date &&
              (this.updatesState.date = t.date);
          } else if (!i && t.seq > 0) {
            const s = t.seq,
              i = t.seqStart || s;
            if (i !== r.seq + 1 && i > r.seq)
              return (
                this.debug &&
                  this.log.warn(
                    "Seq hole",
                    r,
                    r.syncPending && r.syncPending.seqAwaiting
                  ),
                void 0 === r.pendingSeqUpdates[i] &&
                  (r.pendingSeqUpdates[i] = {
                    seq: s,
                    date: t.date,
                    updates: [],
                  }),
                r.pendingSeqUpdates[i].updates.push(e),
                r.syncPending ||
                  (r.syncPending = {
                    timeout: window.setTimeout(() => {
                      (r.syncPending = null),
                        r.syncLoading || this.getDifference();
                    }, 6),
                  }),
                (!r.syncPending.seqAwaiting || r.syncPending.seqAwaiting < i) &&
                  (r.syncPending.seqAwaiting = i),
                !1
              );
            r.seq !== s &&
              ((r.seq = s),
              t.date && r.date < t.date && (r.date = t.date),
              (h = !0));
          }
          this.saveUpdate(e),
            l ? this.popPendingPtsUpdate(i) : h && this.popPendingSeqUpdate();
        }
        saveUpdate(e) {
          r.default.dispatchEvent(e._, e);
        }
        attach() {
          this.attached ||
            (this.log("attach"),
            (this.attached = !0),
            l.default.getState().then(({ updates: e }) => {
              const t = l.default.newVersion;
              e && e.pts && e.date
                ? (Object.assign(this.updatesState, e),
                  this.log("will get difference", Object.assign({}, e)),
                  this.getDifference(!0))
                : (this.log("will get new state"),
                  (this.updatesState.syncLoading = new Promise((e) => {
                    n.a
                      .invokeApi("updates.getState", {}, { noErrorBox: !0 })
                      .then((t) => {
                        (this.updatesState.seq = t.seq),
                          (this.updatesState.pts = t.pts),
                          (this.updatesState.date = t.date),
                          this.saveUpdatesState(),
                          (this.updatesState.syncLoading = null),
                          e();
                      });
                  }))),
                n.a.setUpdatesProcessor(this.processUpdateMessage),
                this.setProxy(),
                t &&
                  this.updatesState.syncLoading.then(() => {
                    fetch("changelogs/" + t.split(" ")[0] + ".md")
                      .then(
                        (e) =>
                          (200 === e.status && e.ok && e.text()) ||
                          Promise.reject()
                      )
                      .then((e) => {
                        e =
                          `**Telegram Web${f.a.suffix} was updated to version ${t}**\n\n` +
                          e;
                        const s = [],
                          i = {
                            _: "updateServiceNotification",
                            entities: s,
                            message: g.b.parseMarkdown(e, s),
                            type: "local",
                            pFlags: {},
                            inbox_date: (Date.now() / 1e3) | 0,
                            media: void 0,
                          };
                        this.processLocalUpdate(i);
                      })
                      .catch(p.a);
                  });
            }));
        }
      })();
      (i.a.apiUpdatesManager = m), (t.a = m);
    },
    function (e, t, s) {
      "use strict";
      var i = s(32),
        a = s(15),
        n = s(69),
        r = s(105),
        o = s(30),
        d = s(140),
        c = s(51),
        l = s(38),
        h = s(97),
        u = s(31),
        p = s(80),
        g = s(117),
        f = s(177),
        m = s(68),
        v = s(62),
        _ = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const y = new Set(["emoji", "emojiAnimations"]);
      const I = new (class {
        constructor() {
          (this.storage = new r.a(d.a, "stickerSets")),
            (this.getStickerSetPromises = {}),
            (this.getStickersByEmoticonsPromises = {}),
            (this.sounds = {}),
            this.getAnimatedEmojiStickerSet(),
            a.default.addMultipleEventsListeners({
              updateNewStickerSet: (e) => {
                const t = e.stickerset;
                this.saveStickerSet(t, t.set.id),
                  a.default.dispatchEvent("stickers_installed", t.set);
              },
            }),
            (this.getGreetingStickersTimeout = window.setTimeout(() => {
              (this.getGreetingStickersTimeout = void 0),
                this.getGreetingSticker(!0);
            }, 5e3));
        }
        getGreetingSticker(e = !1) {
          return (
            this.getGreetingStickersTimeout &&
              (clearTimeout(this.getGreetingStickersTimeout),
              (this.getGreetingStickersTimeout = void 0)),
            this.getGreetingStickersPromise ||
              (this.getGreetingStickersPromise = this.getStickersByEmoticon(
                "ðŸ‘‹â­ï¸",
                !1
              ).then((e) => {
                if (!e.length) throw "NO_STICKERS";
                (this.greetingStickers = e.slice()),
                  this.greetingStickers.sort(
                    (e, t) => Math.random() - Math.random()
                  );
              })),
            this.getGreetingStickersPromise.then(() => {
              let t;
              return (
                e ||
                  ((t = this.greetingStickers.shift()),
                  this.greetingStickers.push(t)),
                n.a.downloadDoc(this.greetingStickers[0]),
                t
              );
            })
          );
        }
        saveStickers(e) {
          Object(m.a)(e, (t, s) => {
            (t = n.a.saveDoc(t)) ? (e[s] = t) : e.splice(s, 1);
          });
        }
        getStickerSet(e, t = {}) {
          return _(this, void 0, void 0, function* () {
            const s = e.id;
            return this.getStickerSetPromises[s]
              ? this.getStickerSetPromises[s]
              : (this.getStickerSetPromises[s] = new Promise((a) =>
                  _(this, void 0, void 0, function* () {
                    var n;
                    if (!t.overwrite) {
                      const e = yield this.storage.get(s);
                      if (
                        e &&
                        (null === (n = e.documents) || void 0 === n
                          ? void 0
                          : n.length) &&
                        (Date.now() - e.refreshTime < 36e5 || t.useCache)
                      )
                        return (
                          this.saveStickers(e.documents),
                          a(e),
                          void delete this.getStickerSetPromises[s]
                        );
                    }
                    try {
                      const n = yield i.a.invokeApi("messages.getStickerSet", {
                          stickerset: this.getStickerSetInput(e),
                          hash: 0,
                        }),
                        r = t.saveById ? s : n.set.id;
                      this.saveStickerSet(n, r), a(n);
                    } catch (e) {
                      a(null);
                    }
                    delete this.getStickerSetPromises[s];
                  })
                ));
          });
        }
        getAnimatedEmojiStickerSet() {
          return Promise.all([
            this.getStickerSet({ id: "emoji" }, { saveById: !0 }),
            this.getStickerSet({ id: "emojiAnimations" }, { saveById: !0 }),
            this.getAnimatedEmojiSounds(),
          ]).then(([e, t]) => ({ emoji: e, animations: t }));
        }
        getAnimatedEmojiSounds(e) {
          if (this.getAnimatedEmojiSoundsPromise && !e)
            return this.getAnimatedEmojiSoundsPromise;
          const t = (this.getAnimatedEmojiSoundsPromise = Promise.resolve(
            i.a.getAppConfig(e)
          ).then((e) => {
            if (this.getAnimatedEmojiSoundsPromise === t)
              for (const t in e.emojies_sounds) {
                const s = e.emojies_sounds[t],
                  i = atob(Object(g.a)(s.file_reference_base64, !1)),
                  r = new Uint8Array(i.length);
                for (let e = 0, t = r.length; e < t; ++e)
                  r[e] = i[e].charCodeAt(0);
                const o = n.a.saveDoc(
                  {
                    _: "document",
                    pFlags: {},
                    flags: 0,
                    id: s.id,
                    access_hash: s.access_hash,
                    attributes: [
                      {
                        _: "documentAttributeAudio",
                        duration: 1,
                        pFlags: { voice: !0 },
                      },
                    ],
                    date: 0,
                    dc_id: a.default.config.this_dc,
                    file_reference: r,
                    mime_type: "audio/ogg",
                    size: 1,
                  },
                  { type: "emojiesSounds" }
                );
                this.sounds[t] = o;
              }
          }));
          return t;
        }
        getRecentStickers() {
          return _(this, void 0, void 0, function* () {
            return yield i.a.invokeApiHashable({
              method: "messages.getRecentStickers",
              processResult: (e) => (
                Object(p.a)(e), this.saveStickers(e.stickers), e
              ),
            });
          });
        }
        cleanEmoji(e) {
          return e.replace(/\ufe0f/g, "").replace(/ðŸ»|ðŸ¼|ðŸ½|ðŸ¾|ðŸ¿/g, "");
        }
        getAnimatedEmojiSticker(e, t) {
          const s = this.storage.getFromCache(t ? "emojiAnimations" : "emoji");
          if (!s || !s.documents) return;
          t &&
            [
              "ðŸ§¡",
              "ðŸ’›",
              "ðŸ’š",
              "ðŸ’™",
              "ðŸ’œ",
              "ðŸ–¤",
              "ðŸ¤",
              "ðŸ¤Ž",
            ].includes(e) &&
            (e = "â¤ï¸"),
            (e = this.cleanEmoji(e));
          const i = s.packs.find((t) => t.emoticon === e);
          return i ? n.a.getDoc(i.documents[0]) : void 0;
        }
        getAnimatedEmojiSoundDocument(e) {
          return this.sounds[this.cleanEmoji(e)];
        }
        preloadAnimatedEmojiSticker(e, t, s) {
          const i = this.getAnimatedEmojiStickerSet().then(() => {
            const i = this.getAnimatedEmojiSticker(e);
            if (i)
              return n.a.downloadDoc(i).then((a) =>
                _(this, void 0, void 0, function* () {
                  const r = l.b.active.emojiSticker,
                    o = Object(h.d)(e),
                    d = yield c.a.loadAnimationWorker(
                      {
                        container: void 0,
                        animationData: a,
                        width: null != t ? t : r.width,
                        height: null != s ? s : r.height,
                        name: "doc" + i.id,
                        autoplay: !1,
                        loop: !1,
                        toneIndex: o,
                      },
                      "none"
                    );
                  d.addEventListener(
                    "firstFrame",
                    () => {
                      n.a.saveLottiePreview(i, d.canvas, o), d.remove();
                    },
                    { once: !0 }
                  );
                })
              );
          });
          return Promise.all([i, this.preloadAnimatedEmojiStickerAnimation(e)]);
        }
        preloadAnimatedEmojiStickerAnimation(e) {
          return this.getAnimatedEmojiStickerSet().then(() => {
            const t = this.getAnimatedEmojiSticker(e, !0);
            if (t) {
              const s = this.getAnimatedEmojiSoundDocument(e);
              return Promise.all([
                n.a.downloadDoc(t),
                s ? n.a.downloadDoc(s) : void 0,
              ]);
            }
          });
        }
        saveStickerSet(e, t) {
          const s = {
            _: "messages.stickerSet",
            set: e.set,
            packs: e.packs,
            documents: e.documents,
          };
          let i = this.storage.getFromCache(t);
          i ? Object.assign(i, s) : (i = this.storage.setToCache(t, s)),
            this.saveStickers(e.documents);
          const a = i.set.installed_date || y.has(t);
          (i.refreshTime = Date.now()), this.storage.set({ [t]: i }, !a);
        }
        getStickerSetThumbDownloadOptions(e) {
          var t;
          const s = e.thumbs.find((e) => "photoSize" === e._),
            i = e.thumb_dc_id,
            a = null === (t = e.pFlags) || void 0 === t ? void 0 : t.animated;
          return {
            dcId: i,
            location: {
              _: "inputStickerSetThumb",
              stickerset: this.getStickerSetInput(e),
              thumb_version: e.thumb_version,
            },
            size: s.size,
            mimeType: a ? "application/x-tgsticker" : "image/webp",
          };
        }
        getStickerSetInput(e) {
          return "emoji" === e.id
            ? { _: "inputStickerSetAnimatedEmoji" }
            : "emojiAnimations" === e.id
            ? { _: "inputStickerSetAnimatedEmojiAnimations" }
            : e.access_hash
            ? { _: "inputStickerSetID", id: e.id, access_hash: e.access_hash }
            : { _: "inputStickerSetShortName", short_name: "" + e.id };
        }
        getFeaturedStickers() {
          return _(this, void 0, void 0, function* () {
            return (yield i.a.invokeApiHashable({
              method: "messages.getFeaturedStickers",
              processResult: (e) => (
                Object(p.a)(e),
                Object(m.a)(e.sets, (e, t, s) => {
                  e.set.pFlags.videos && !f.a && s.splice(t, 1);
                }),
                e.sets.forEach((e) => {
                  this.saveStickerSet(
                    { set: e.set, documents: [], packs: [] },
                    e.set.id
                  );
                }),
                e
              ),
            })).sets;
          });
        }
        toggleStickerSet(e) {
          return _(this, void 0, void 0, function* () {
            if (e.installed_date) {
              if (
                yield i.a.invokeApi("messages.uninstallStickerSet", {
                  stickerset: this.getStickerSetInput(e),
                })
              )
                return (
                  delete e.installed_date,
                  a.default.dispatchEvent("stickers_deleted", e),
                  this.storage.delete(e.id, !0),
                  !0
                );
            } else {
              if (
                yield i.a.invokeApi("messages.installStickerSet", {
                  stickerset: this.getStickerSetInput(e),
                  archived: !1,
                })
              )
                return (
                  (e.installed_date = (Date.now() / 1e3) | 0),
                  a.default.dispatchEvent("stickers_installed", e),
                  !0
                );
            }
            return !1;
          });
        }
        searchStickerSets(e, t = !0) {
          return _(this, void 0, void 0, function* () {
            const s = t ? 1 : 0,
              a = yield i.a.invokeApiHashable({
                method: "messages.searchStickerSets",
                params: { flags: s, exclude_featured: t || void 0, q: e },
                processResult: (e) => (
                  Object(p.a)(e),
                  Object(m.a)(e.sets, (e, t, s) => {
                    e.set.pFlags.videos && !f.a && s.splice(t, 1);
                  }),
                  e.sets.forEach((e) => {
                    this.saveStickerSet(
                      { set: e.set, documents: [], packs: [] },
                      e.set.id
                    );
                  }),
                  e
                ),
              }),
              n = [],
              r = this.storage.getCache();
            for (let t in r) {
              const { set: s } = r[t];
              s.title.toLowerCase().includes(e.toLowerCase()) &&
                !a.sets.find((e) => e.set.id === s.id) &&
                n.push({ _: "stickerSetCovered", set: s, cover: null });
            }
            return a.sets.concat(n);
          });
        }
        getAllStickers() {
          return i.a.invokeApiHashable({
            method: "messages.getAllStickers",
            processResult: (e) => (
              Object(p.a)(e),
              Object(m.a)(e.sets, (e, t, s) => {
                e.pFlags.videos && !f.a && s.splice(t, 1);
              }),
              e
            ),
          });
        }
        preloadStickerSets() {
          return this.getAllStickers().then((e) =>
            Promise.all(
              e.sets.map((e) => this.getStickerSet(e, { useCache: !0 }))
            )
          );
        }
        getStickersByEmoticon(e, t = !0) {
          return (
            (e = u.b.fixEmoji(e)),
            this.getStickersByEmoticonsPromises[e]
              ? this.getStickersByEmoticonsPromises[e]
              : (this.getStickersByEmoticonsPromises[e] = Promise.all([
                  i.a.invokeApiHashable({
                    method: "messages.getStickers",
                    params: { emoticon: e },
                    processResult: (e) => e,
                  }),
                  t ? this.preloadStickerSets() : [],
                  t ? this.getRecentStickers() : void 0,
                ]).then(([t, s, i]) => {
                  const a = t.stickers.map((e) => n.a.saveDoc(e)),
                    r = [],
                    o = [],
                    d = (t) => {
                      for (const s of t) {
                        if (u.b.fixEmoji(s.emoticon).includes(e))
                          for (const e of s.documents) {
                            const t = n.a.getDoc(e);
                            (t.animated ? r : o).push(t);
                          }
                      }
                    };
                  if (i) {
                    d(i.packs);
                    const e = i.stickers;
                    [r, o].forEach((t) => {
                      t.sort((t, s) => e.indexOf(t) - e.indexOf(s));
                    });
                  }
                  for (const e of s) d(e.packs);
                  const c = [...new Set(r.concat(o, a))];
                  return (
                    Object(m.a)(c, (e, t, s) => {
                      3 !== e.sticker || f.a || s.splice(t, 1);
                    }),
                    c
                  );
                }))
          );
        }
        pushRecentSticker(e) {
          const t = u.b.fixEmoji(e.stickerEmojiRaw);
          for (const s in this.getStickersByEmoticonsPromises) {
            this.getStickersByEmoticonsPromises[s].then((i) => {
              const a = Object(v.a)(i, (t) => t.id === e.id);
              a ? i.unshift(a) : s.includes(t) && i.unshift(e);
            });
          }
        }
      })();
      (o.a.appStickersManager = I), (t.a = I);
    },
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(124),
        a = s(167),
        n = s(176),
        r = s(31),
        o = s(74),
        d = s(56),
        c = s(156),
        l = s(32),
        h = s(30),
        u = s(58),
        p = s(15),
        g = s(143),
        f = s(177),
        m = s(175),
        v = s(86),
        _ = s(178),
        y = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const I = {
        mov: "video/quicktime",
        gif: "image/gif",
        pdf: "application/pdf",
      };
      const P = new (class {
        constructor() {
          (this.docs = {}),
            (this.savingLottiePreview = {}),
            (this.downloading = new Map()),
            (this.onServiceWorkerFail = () => {
              for (const e in this.docs) {
                const t = this.docs[e];
                if (t.supportsStreaming) {
                  delete t.supportsStreaming;
                  delete o.a.getCacheContext(t).url;
                }
              }
            }),
            (l.a.onServiceWorkerFail = this.onServiceWorkerFail);
        }
        saveDoc(e, t) {
          if ("documentEmpty" === e._) return;
          const s = this.docs[e.id];
          e.file_reference &&
            (Object(_.a)("file_reference", s, e),
            a.a.saveContext(e.file_reference, t)),
            s || (this.docs[e.id] = e);
          for (let t = 0, s = e.attributes.length; t < s; ++t) {
            const s = e.attributes[t];
            switch (s._) {
              case "documentAttributeFilename":
                (e.file_name = r.a.wrapPlainText(s.file_name)),
                  (e.fileName = r.a.wrapEmojiText(s.file_name));
                break;
              case "documentAttributeAudio":
                (e.duration = s.duration),
                  (e.audioTitle = r.a.wrapEmojiText(s.title)),
                  (e.audioPerformer = r.a.wrapEmojiText(s.performer)),
                  (e.type =
                    s.pFlags.voice && "audio/ogg" === e.mime_type
                      ? "voice"
                      : "audio");
                break;
              case "documentAttributeVideo":
                (e.duration = s.duration),
                  (e.w = s.w),
                  (e.h = s.h),
                  s.pFlags.round_message
                    ? (e.type = "round")
                    : (e.type = "video");
                break;
              case "documentAttributeSticker":
                if (
                  (void 0 !== s.alt &&
                    ((e.stickerEmojiRaw = s.alt),
                    (e.stickerEmoji = r.a.wrapRichText(e.stickerEmojiRaw, {
                      noLinks: !0,
                      noLinebreaks: !0,
                    }))),
                  s.stickerset &&
                    ("inputStickerSetEmpty" === s.stickerset._
                      ? delete s.stickerset
                      : "inputStickerSetID" === s.stickerset._ &&
                        (e.stickerSetInput = s.stickerset)),
                  "image/webp" === e.mime_type && (e.thumbs || g.a))
                )
                  (e.type = "sticker"), (e.sticker = 1);
                else if ("video/webm" === e.mime_type) {
                  if (!f.a) return;
                  (e.type = "sticker"), (e.sticker = 3), (e.animated = !0);
                }
                break;
              case "documentAttributeImageSize":
                (e.type = "photo"), (e.w = s.w), (e.h = s.h);
                break;
              case "documentAttributeAnimated":
                ("image/gif" !== e.mime_type && "video/mp4" !== e.mime_type) ||
                  (e.type = "gif"),
                  (e.animated = !0);
            }
          }
          if (e.mime_type)
            e.mime_type === I.pdf
              ? (e.type = "pdf")
              : e.mime_type === I.gif && (e.type = "gif");
          else {
            const t = (e.file_name || "").split(".").pop(),
              s = t && I[t.toLowerCase()];
            if (s) e.mime_type = s;
            else
              switch (e.type) {
                case "gif":
                case "video":
                case "round":
                  e.mime_type = "video/mp4";
                  break;
                case "sticker":
                  e.mime_type = "image/webp";
                  break;
                case "audio":
                  e.mime_type = "audio/mpeg";
                  break;
                case "voice":
                  e.mime_type = "audio/ogg";
                  break;
                default:
                  e.mime_type = "application/octet-stream";
              }
          }
          if (
            (("voice" !== e.type && "round" !== e.type) ||
              (e.file_name = e.fileName =
                e.type +
                "_" +
                Object(u.g)(new Date(1e3 * e.date), {
                  monthAsNumber: !0,
                  leadingZero: !0,
                })
                  .replace(/[:\.]/g, "-")
                  .replace(", ", "_")),
            l.a.isServiceWorkerOnline() &&
              (("gif" === e.type && e.size > 8e6) ||
                "audio" === e.type ||
                "video" === e.type))
          ) {
            e.supportsStreaming = !0;
            const t = o.a.getCacheContext(e);
            t.url || (t.url = this.getFileURL(e));
          }
          return (
            e.file_name || (e.file_name = e.fileName = ""),
            "application/x-tgsticker" === e.mime_type &&
              "AnimatedSticker.tgs" === e.file_name &&
              ((e.type = "sticker"), (e.animated = !0), (e.sticker = 2)),
            s ? Object.assign(s, e) : e
          );
        }
        getDoc(e) {
          return Object(v.a)(e) ? e : this.docs[e];
        }
        getMediaInput(e) {
          return {
            _: "inputMediaDocument",
            id: {
              _: "inputDocument",
              id: e.id,
              access_hash: e.access_hash,
              file_reference: e.file_reference,
            },
            ttl_seconds: 0,
          };
        }
        getInput(e, t) {
          return {
            _: "inputDocumentFileLocation",
            id: e.id,
            access_hash: e.access_hash,
            file_reference: e.file_reference,
            thumb_size: t,
          };
        }
        getFileDownloadOptions(e, t, s, i) {
          const a = this.getInput(e, null == t ? void 0 : t.type);
          let n;
          return (
            (n = t
              ? e.sticker
                ? "image/webp"
                : "image/jpeg"
              : e.mime_type || "application/octet-stream"),
            {
              dcId: e.dc_id,
              location: a,
              size: t ? t.size : e.size,
              mimeType: n,
              fileName: e.file_name,
              queueId: s,
              onlyCache: i,
            }
          );
        }
        getFileURL(e, t = !1, s) {
          let a;
          return (
            (a = t
              ? "download"
              : s
              ? "thumb"
              : e.supportsStreaming
              ? "stream"
              : "document"),
            Object(i.b)(a, this.getFileDownloadOptions(e, s))
          );
        }
        getThumbURL(e, t) {
          let s = Promise.resolve();
          const i = o.a.getCacheContext(e, t.type);
          return (
            i.url ||
              (s =
                "bytes" in t
                  ? Object(c.a)(
                      d.a.getPreviewURLFromBytes(t.bytes, !!e.sticker)
                    ).then((e) => {
                      i.url = e;
                    })
                  : d.a.preloadPhoto(e, t)),
            { thumb: t, cacheContext: i, promise: s }
          );
        }
        getThumb(e, t = !0) {
          const s = d.a.choosePhotoSize(e, 0, 0, !t);
          return "photoSizeEmpty" === s._ ? null : this.getThumbURL(e, s);
        }
        getInputFileName(e, t) {
          return Object(i.a)(this.getInput(e, t), { fileName: e.file_name });
        }
        downloadDoc(e, t, s) {
          const i = this.getInputFileName(e);
          let a = o.a.getDownload(i);
          if (a) return a;
          const r = this.getFileDownloadOptions(e, void 0, t, s);
          (a = o.a.download(r)),
            this.downloading.set(e.id, a),
            p.default.dispatchEvent("download_start", e.id);
          const d = o.a.getCacheContext(e),
            c = a;
          return (
            c
              .then(
                (e) => {
                  (d.url = URL.createObjectURL(e)), (d.downloaded = e.size);
                },
                () => {}
              )
              .finally(() => {
                this.downloading.delete(e.id);
              }),
            "voice" !== e.type ||
              n.a.isPlaySupported() ||
              (a = c.then((e) =>
                y(this, void 0, void 0, function* () {
                  const t = new FileReader();
                  return (
                    yield new Promise((s, i) => {
                      (t.onloadend = (e) => {
                        const t = new Uint8Array(e.target.result);
                        n.a.decode(t).then(
                          (e) => {
                            (d.url = e.url), s();
                          },
                          (e) => {
                            delete d.downloaded, i(e);
                          }
                        );
                      }),
                        t.readAsArrayBuffer(e);
                    }),
                    e
                  );
                })
              )),
            a.then(() => {
              p.default.dispatchEvent("document_downloaded", e);
            }),
            a
          );
        }
        isSavingLottiePreview(e, t) {
          const s = e.id + "-" + t;
          return !!this.savingLottiePreview[s];
        }
        saveLottiePreview(e, t, s) {
          const i = e.id + "-" + s;
          if (this.savingLottiePreview[i]) return;
          e.stickerCachedThumbs ||
            (Object(m.a)(e, ["stickerCachedThumbs"]),
            (e.stickerCachedThumbs = {}));
          const a = e.stickerCachedThumbs[s];
          (a && a.w >= t.width && a.h >= t.height) ||
            ((this.savingLottiePreview[i] = !0),
            t.toBlob((a) => {
              const n = {
                url: URL.createObjectURL(a),
                w: t.width,
                h: t.height,
              };
              (e.stickerCachedThumbs[s] = n),
                delete this.savingLottiePreview[i];
            }));
        }
        saveDocFile(e, t) {
          const s = this.downloadDoc(e, t);
          return (
            s.then(() => {
              const t = o.a.getCacheContext(e);
              o.a.createDownloadAnchor(t.url, e.file_name);
            }),
            s
          );
        }
      })();
      (h.a.appDocsManager = P), (t.a = P);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(75),
        n = s(32);
      const r = new (class {
        constructor() {
          (this.serverTimeOffset = 0),
            a.a.get("server_time_offset").then((e) => {
              e && (this.serverTimeOffset = e);
            }),
            n.a.addTaskListener("applyServerTimeOffset", (e) => {
              this.serverTimeOffset = e.payload;
            });
        }
      })();
      i.a && (i.a.serverTimeManager = r), (t.a = r);
    },
    function (e, t, s) {
      "use strict";
      function i(e) {}
      s.d(t, "a", function () {
        return i;
      });
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e, t, s = !0, i = !0) {
        let a,
          n,
          r,
          o,
          d = !1;
        return (...c) => (
          n || (n = new Promise((e, t) => ((r = e), (o = t)))),
          a
            ? (clearTimeout(a),
              (d = !0),
              o(),
              (n = new Promise((e, t) => ((r = e), (o = t)))))
            : s && (r(e(...c)), (d = !1)),
          (a = setTimeout(() => {
            !i || (s && !d) || r(e(...c)), (a = n = r = o = void 0), (d = !1);
          }, t)),
          n.catch(() => {}),
          n
        );
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return l;
      }),
        s.d(t, "d", function () {
          return u;
        }),
        s.d(t, "b", function () {
          return p;
        }),
        s.d(t, "c", function () {
          return g;
        });
      var i = s(41);
      class a {
        constructor(e) {
          (this.items = new Map()),
            (this.locked = !1),
            (this.observer = new IntersectionObserver((t) => {
              if (this.locked) return;
              const s = [];
              t.forEach((e) => {
                const t = e.target;
                this.items.get(t) !== e.isIntersecting &&
                  (this.items.set(t, e.isIntersecting),
                  s[e.isIntersecting ? "unshift" : "push"]({
                    target: t,
                    visible: e.isIntersecting,
                  }));
              }),
                s.forEach((t) => {
                  e(t.target, t.visible);
                });
            }));
        }
        getVisible() {
          const e = [];
          return (
            this.items.forEach((t, s) => {
              t && e.push(s);
            }),
            e
          );
        }
        clearVisible() {
          const e = this.getVisible();
          for (const t of e) this.items.set(t, !1);
        }
        isVisible(e) {
          return this.items.get(e);
        }
        disconnect() {
          this.observer.disconnect(), this.items.clear();
        }
        refresh() {
          this.observer.disconnect();
          const e = [...this.items.keys()];
          for (const t of e) this.observer.observe(t);
        }
        refreshVisible() {
          const e = this.getVisible();
          for (const t of e) this.observer.unobserve(t);
          for (const t of e) this.observer.observe(t);
        }
        observe(e) {
          this.items.set(e, !1), this.observer.observe(e);
        }
        unobserve(e) {
          this.observer.unobserve(e), this.items.delete(e);
        }
        unlock() {
          this.locked = !1;
        }
        unlockAndRefresh() {
          this.unlock(), this.refresh();
        }
        lock() {
          this.locked = !0;
        }
      }
      var n = s(96);
      function r(e, t) {
        const s = [];
        let i = -1;
        for (; -1 !== (i = e.findIndex(t)); ) s.push(e.splice(i, 1)[0]);
        return s;
      }
      var o = s(59),
        d = s(62),
        c = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      class l {
        constructor(e = 8) {
          (this.parallelLimit = e),
            (this.queueId = 0),
            (this.queue = []),
            (this.inProcess = new Set()),
            (this.lockPromise = null),
            (this.unlockResolve = null),
            (this.log = Object(i.b)("LL", i.a.Error)),
            (this.processQueue = Object(n.a)(
              () => this._processQueue(),
              20,
              !1
            ));
        }
        clear() {
          this.inProcess.clear(), (this.queue.length = 0);
        }
        lock() {
          this.lockPromise ||
            (this.lockPromise = new Promise((e, t) => {
              this.unlockResolve = e;
            }));
        }
        unlock() {
          this.unlockResolve &&
            (this.unlockResolve(),
            (this.unlockResolve = this.lockPromise = null),
            this.processQueue());
        }
        processItem(e) {
          return c(this, void 0, void 0, function* () {
            if (!this.lockPromise) {
              this.inProcess.add(e);
              try {
                yield this.loadItem(e);
              } catch (e) {
                ["NO_ENTRY_FOUND", "STORAGE_OFFLINE"].includes(e) ||
                  this.log.error("loadMediaQueue error:", e);
              }
              this.inProcess.delete(e), this.processQueue();
            }
          });
        }
        loadItem(e) {
          return e.load();
        }
        getItem() {
          return this.queue.shift();
        }
        addElement(e, t) {
          this.queue[e](t), this.processQueue();
        }
        _processQueue(e) {
          if (
            !this.queue.length ||
            this.lockPromise ||
            (this.parallelLimit > 0 &&
              this.inProcess.size >= this.parallelLimit)
          )
            return;
          do {
            if ((e ? Object(o.a)(this.queue, e) : (e = this.getItem()), !e))
              break;
            this.processItem(e), (e = null);
          } while (
            this.inProcess.size < this.parallelLimit &&
            this.queue.length
          );
        }
        push(e) {
          this.addElement("push", e);
        }
        unshift(e) {
          this.addElement("unshift", e);
        }
      }
      class h extends l {
        constructor(e = 8) {
          super(e),
            (this.parallelLimit = e),
            (this.queue = []),
            (this.inProcess = new Set());
        }
        lock() {
          super.lock(), this.intersector.lock();
        }
        unlock() {
          super.unlock(), this.intersector.unlock();
        }
        unlockAndRefresh() {
          super.unlock(), this.intersector.unlockAndRefresh();
        }
        clear() {
          super.clear(), this.intersector.disconnect();
        }
        refresh() {
          this.intersector.refresh();
        }
        loadItem(e) {
          return e.load(e.div);
        }
        addElement(e, t) {
          if (this.queue.find((e) => e.div === t.div && e.load === t.load))
            return !1;
          for (const e of this.inProcess)
            if (e.div === t.div && e.load === t.load) return !1;
          return this.queue[e](t), !0;
        }
        setProcessQueueTimeout() {
          this.intersectorTimeout ||
            (this.intersectorTimeout = window.setTimeout(() => {
              (this.intersectorTimeout = 0), this.processQueue();
            }, 0));
        }
        push(e) {
          super.push(e);
        }
        unshift(e) {
          super.unshift(e);
        }
        unobserve(e) {
          r(this.queue, (t) => t.div === e), this.intersector.unobserve(e);
        }
      }
      class u extends h {
        constructor(e = 8) {
          super(e),
            (this.parallelLimit = e),
            (this.onVisibilityChange = (e, t) => {
              t &&
                (r(this.queue, (t) => t.div === e).forEach((e) => {
                  (e.wasSeen = !0), this.queue.unshift(e);
                }),
                this.setProcessQueueTimeout());
            }),
            (this.intersector = new a(this.onVisibilityChange));
        }
        getItem() {
          return Object(d.a)(this.queue, (e) => e.wasSeen);
        }
        processItem(e) {
          const t = Object.create(null, {
            processItem: { get: () => super.processItem },
          });
          return c(this, void 0, void 0, function* () {
            yield t.processItem.call(this, e),
              this.intersector.unobserve(e.div);
          });
        }
        addElement(e, t) {
          return (
            !!super.addElement(e, t) &&
            (this.intersector.observe(t.div),
            t.hasOwnProperty("wasSeen") || (t.wasSeen = !1),
            !0)
          );
        }
      }
      class p extends h {
        constructor(e = 8, t) {
          super(e),
            (this.parallelLimit = e),
            (this.onVisibilityChange = t),
            (this._queue = new Map()),
            (this.intersector = new a((e, t) => {
              const s = r(this.queue, (t) => t.div === e);
              if (t) {
                (s.length ? s : [this._queue.get(e)]).forEach((t) => {
                  this.queue.unshift(t || this._queue.get(e));
                });
              }
              this.onVisibilityChange && this.onVisibilityChange(e, t),
                this.setProcessQueueTimeout();
            }));
        }
        clear() {
          super.clear(), this._queue.clear();
        }
        observe(e) {
          this._queue.set(e.div, e), this.intersector.observe(e.div);
        }
      }
      class g extends h {
        constructor(e = 8, t) {
          super(e),
            (this.parallelLimit = e),
            (this.onVisibilityChange = t),
            (this.intersector = new a((e, t) => {
              const s = r(this.queue, (t) => t.div === e);
              t &&
                s.length &&
                s.forEach((e) => {
                  this.queue.unshift(e);
                }),
                this.onVisibilityChange && this.onVisibilityChange(e, t),
                this.setProcessQueueTimeout();
            }));
        }
        observe(e) {
          this.intersector.observe(e);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return o;
      });
      var i = s(16);
      const a = new Map();
      let n = 0;
      const r = (e, t, s = "") => {
        (s = t.country_code + s),
          (n = Math.max(n, s.length)),
          a.set(s, { country: e, code: t });
      };
      function o(e) {
        (e = e || ""),
          a.size ||
            i.default.countriesList.forEach((e) => {
              e.country_codes.forEach((t) => {
                t.prefixes
                  ? t.prefixes.forEach((s) => {
                      r(e, t, s);
                    })
                  : r(e, t);
              });
            });
        let t,
          s = e.replace(/\D/g, ""),
          o = s.slice(0, n);
        for (
          let e = o.length - 1;
          e >= 0 && ((t = a.get(o.slice(0, e + 1))), !t);
          --e
        );
        if (!t)
          return {
            formatted: s,
            country: void 0,
            code: void 0,
            leftPattern: "",
          };
        const d = t.country,
          c = t.code.patterns || [],
          l = s.slice(t.code.country_code.length);
        let h = "",
          u = 0,
          p = "";
        for (let e = c.length - 1; e >= 0; --e) {
          h = c[e];
          const t = h.replace(/ /g, "");
          let s = 0;
          for (let e = 0, i = Math.min(l.length, t.length); e < i; ++e) {
            if (l[e] !== t[e] && "X" !== t[e]) {
              s = 0;
              break;
            }
            ++s;
          }
          s > u && ((u = s), (p = h));
        }
        (h = p || h),
          (h = h.replace(/\d/g, "X")),
          (h = t.code.country_code + " " + h),
          h.split("").forEach((e, t) => {
            " " === e &&
              " " !== s[t] &&
              s.length > t &&
              (s = s.slice(0, t) + " " + s.slice(t));
          });
        let g = h && h.length > s.length ? h.slice(s.length) : "";
        return (
          g && (g = g.replace(/X/g, "â€’")),
          { formatted: s, country: d, code: t.code, leftPattern: g }
        );
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e) {
        const t = document.createElement("span");
        return (t.innerHTML = e), t;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      var i = s(30);
      class a {
        constructor() {
          this.tempNum = 0;
        }
        generateMessageId(e, t = !1) {
          const s = a.MESSAGE_ID_OFFSET,
            i = t ? ++this.tempNum : 0;
          return e >= s
            ? t
              ? e + (i & (a.MESSAGE_ID_INCREMENT - 1))
              : e
            : s +
                (e * a.MESSAGE_ID_INCREMENT +
                  (i & (a.MESSAGE_ID_INCREMENT - 1)));
        }
        getServerMessageId(e) {
          return this.clearMessageId(e, !0);
        }
        clearMessageId(e, t) {
          const s = a.MESSAGE_ID_OFFSET;
          if (e < s) return e;
          const i = a.MESSAGE_ID_INCREMENT - 1,
            n = e & i;
          return (
            n !== i && (e -= n + 1), t ? (e - s) / a.MESSAGE_ID_INCREMENT : e
          );
        }
        incrementMessageId(e, t) {
          return this.generateMessageId(this.getServerMessageId(e) + t);
        }
      }
      (a.MESSAGE_ID_INCREMENT = 65536), (a.MESSAGE_ID_OFFSET = 4294967295);
      const n = new a();
      i.a && (i.a.appMessagesIdsManager = n), (t.a = n);
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      }),
        s.d(t, "b", function () {
          return r;
        });
      const i = {},
        a = (e, t) => {
          e instanceof HTMLImageElement || e instanceof HTMLVideoElement
            ? (e.src = t)
            : e instanceof SVGImageElement
            ? e.setAttributeNS(null, "href", t)
            : (e.style.backgroundImage = "url(" + t + ")");
        };
      function n(e, t, s, n = !0) {
        if (!t)
          return (
            console.error("renderImageFromUrl: no url?", e, t), void (s && s())
          );
        if ((i[t] && n) || e instanceof HTMLVideoElement)
          e && a(e, t), s && s();
        else {
          const n = e instanceof HTMLImageElement,
            r = n ? e : new Image();
          (r.src = t),
            r.addEventListener(
              "load",
              () => {
                !n && e && a(e, t), (i[t] = !0), s && s();
              },
              { once: !0 }
            ),
            s &&
              r.addEventListener("error", (e) => {
                console.error("Render image from url failed:", e, t, r), s();
              });
        }
      }
      function r(e, t, s) {
        return new Promise((i) => {
          n(e, t, i, s);
        });
      }
    },
    function (e, t, s) {
      "use strict";
      const i = new (class {
        constructor() {
          (this.width = 0), (this.height = 0);
          const e = "visualViewport" in window ? window.visualViewport : window,
            t = () => {
              (this.width = e.width || e.innerWidth),
                (this.height = e.height || e.innerHeight);
            };
          e.addEventListener("resize", t), t();
        }
      })();
      t.a = i;
    },
    ,
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(62),
        n = s(80),
        r = s(128);
      function o(e, t) {
        return e.some((e) => e instanceof Promise)
          ? Promise.all(e).then(t)
          : t(e);
      }
      var d = s(53),
        c = s(32),
        l = s(15),
        h = s(65),
        u = s(69),
        p = s(102),
        g = s(40),
        f = s(60),
        m = s(37),
        v = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const _ = [
          "static_icon",
          "appear_animation",
          "select_animation",
          "activate_animation",
          "effect_animation",
          "around_animation",
          "center_icon",
        ],
        y = { type: "reactions" };
      const I = new (class {
        constructor() {
          l.default.addEventListener("language_change", () => {
            (this.availableReactions = void 0), this.getAvailableReactions();
          }),
            (this.sendReactionPromises = new Map()),
            (this.lastSendingTimes = new Map()),
            setTimeout(() => {
              Promise.resolve(this.getAvailableReactions()).then((e) =>
                v(this, void 0, void 0, function* () {
                  for (const t of e)
                    yield Promise.all([
                      t.around_animation && u.a.downloadDoc(t.around_animation),
                      t.static_icon && u.a.downloadDoc(t.static_icon),
                      t.appear_animation && u.a.downloadDoc(t.appear_animation),
                      t.center_icon && u.a.downloadDoc(t.center_icon),
                    ]);
                })
              );
            }, 7500);
        }
        getAvailableReactions() {
          return this.availableReactions
            ? this.availableReactions
            : c.a.invokeApiSingleProcess({
                method: "messages.getAvailableReactions",
                processResult: (e) => {
                  Object(n.a)(e);
                  const t = (this.availableReactions = e.reactions);
                  for (const e of t)
                    for (const t of _) e[t] && (e[t] = u.a.saveDoc(e[t], y));
                  return t;
                },
                params: { hash: 0 },
              });
        }
        getActiveAvailableReactions() {
          return Object(r.a)(this.getAvailableReactions(), (e) =>
            e.filter((e) => !e.pFlags.inactive)
          );
        }
        getAvailableReactionsForPeer(e) {
          const t = this.getActiveAvailableReactions();
          if (e.isUser()) return this.unshiftQuickReaction(t);
          return o(
            [t, f.default.getChatFull(e.toChatId()), this.getQuickReaction()],
            ([e, t, s]) => {
              var i;
              const a = (
                null !== (i = t.available_reactions) && void 0 !== i ? i : []
              )
                .map((t) => e.find((e) => e.reaction === t))
                .filter(Boolean);
              return this.unshiftQuickReactionInner(a, s);
            }
          );
        }
        unshiftQuickReactionInner(e, t) {
          const s = Object(a.a)(e, (e) => e.reaction === t.reaction);
          return s && e.unshift(s), e;
        }
        unshiftQuickReaction(e, t = this.getQuickReaction()) {
          return o([e, t], ([e, t]) => this.unshiftQuickReactionInner(e, t));
        }
        getAvailableReactionsByMessage(e) {
          var t;
          const s =
            ((null === (t = e.fwd_from) || void 0 === t
              ? void 0
              : t.channel_post) &&
              g.a.isMegagroup(e.peerId) &&
              e.fwdFromId) ||
            e.peerId;
          return this.getAvailableReactionsForPeer(s);
        }
        isReactionActive(e) {
          return (
            !!this.availableReactions &&
            !!this.availableReactions.find((t) => t.reaction === e)
          );
        }
        getQuickReaction() {
          return o(
            [c.a.getAppConfig(), this.getAvailableReactions()],
            ([e, t]) => t.find((t) => t.reaction === e.reactions_default)
          );
        }
        getReactionCached(e) {
          return this.availableReactions.find((t) => t.reaction === e);
        }
        getReaction(e) {
          return Object(r.a)(this.getAvailableReactions(), () =>
            this.getReactionCached(e)
          );
        }
        getMessagesReactions(e, t) {
          return c.a.invokeApiSingleProcess({
            method: "messages.getMessagesReactions",
            params: {
              id: t.map((e) => p.a.getServerMessageId(e)),
              peer: g.a.getInputPeerById(e),
            },
            processResult: (e) => {
              h.a.processUpdateMessage(e);
            },
          });
        }
        getMessageReactionsList(e, t, s, i, a) {
          return c.a.invokeApiSingleProcess({
            method: "messages.getMessageReactionsList",
            params: {
              peer: g.a.getInputPeerById(e),
              id: p.a.getServerMessageId(t),
              limit: s,
              reaction: i,
              offset: a,
            },
            processResult: (e) => (m.a.saveApiUsers(e.users), e),
          });
        }
        setDefaultReaction(e) {
          return c.a
            .invokeApi("messages.setDefaultReaction", { reaction: e })
            .then((t) => {
              if (t) {
                const t = l.default.appConfig;
                t ? (t.reactions_default = e) : c.a.getAppConfig(!0),
                  l.default.dispatchEvent("quick_reaction", e);
              }
              return t;
            });
        }
        sendReaction(e, t, s) {
          const i = e.peerId + "_" + e.mid;
          if (this.lastSendingTimes.get(i)) return;
          this.lastSendingTimes.set(i, Date.now()),
            setTimeout(() => {
              this.lastSendingTimes.delete(i);
            }, 333);
          const { peerId: r, mid: o } = e,
            u = l.default.myId;
          let f = s ? e.reactions : Object(d.a)(e.reactions),
            m = f ? f.results.findIndex((e) => e.pFlags.chosen) : -1,
            v = -1 !== m && f.results[m];
          if (
            (v &&
              (--v.count,
              delete v.pFlags.chosen,
              t === v.reaction && (t = void 0),
              v.count || f.results.splice(m, 1),
              f.recent_reactions &&
                Object(a.a)(
                  f.recent_reactions,
                  (e) => g.a.getPeerId(e.peer_id) === u
                ),
              f.results.length || (f = void 0)),
            t)
          ) {
            f ||
              ((f = { _: "messageReactions", results: [], pFlags: {} }),
              g.a.isBroadcast(e.peerId) || (f.pFlags.can_see_list = !0));
            let s = f.results.findIndex((e) => e.reaction === t),
              i = -1 !== s && f.results[s];
            if (
              (i ||
                ((i = {
                  _: "reactionCount",
                  count: 0,
                  reaction: t,
                  pFlags: {},
                }),
                (s = f.results.push(i) - 1)),
              ++i.count,
              (i.pFlags.chosen = !0),
              !f.recent_reactions &&
                f.pFlags.can_see_list &&
                (f.recent_reactions = []),
              f.recent_reactions)
            ) {
              const e = {
                _: "messagePeerReaction",
                reaction: t,
                peer_id: g.a.getOutputPeer(u),
              };
              g.a.isMegagroup(r)
                ? (f.recent_reactions.unshift(e),
                  (f.recent_reactions = f.recent_reactions.slice(0, 3)))
                : (f.recent_reactions.push(e),
                  (f.recent_reactions = f.recent_reactions.slice(-3)));
            }
          }
          const _ = this.availableReactions;
          if (f && (null == _ ? void 0 : _.length)) {
            const e = new Map();
            _.forEach((t, s) => {
              e.set(t.reaction, s);
            }),
              f.results.sort(
                (t, s) =>
                  s.count - t.count || e.get(t.reaction) - e.get(s.reaction)
              );
          }
          if (s)
            return (
              (e.reactions = f),
              l.default.dispatchEvent("messages_reactions", [
                { message: e, changedResults: [] },
              ]),
              Promise.resolve()
            );
          h.a.processLocalUpdate({
            _: "updateMessageReactions",
            peer: e.peer_id,
            msg_id: e.id,
            reactions: f,
            local: !0,
          });
          const y = [r, o].join("-"),
            I = p.a.getServerMessageId(o),
            P = c.a
              .invokeApi("messages.sendReaction", {
                peer: g.a.getInputPeerById(r),
                msg_id: I,
                reaction: t,
              })
              .then((e) => {
                Object(n.a)(e);
                const t = e.updates.findIndex(
                  (e) =>
                    "updateEditMessage" === e._ ||
                    "updateEditChannelMessage" === e._
                );
                if (-1 !== t) {
                  const s = e.updates[t];
                  e.updates[t] = {
                    _: "updateMessageReactions",
                    msg_id: I,
                    peer: g.a.getOutputPeer(r),
                    reactions: s.message.reactions,
                    pts: s.pts,
                    pts_count: s.pts_count,
                  };
                }
                h.a.processUpdateMessage(e);
              })
              .catch((t) => {
                "REACTION_INVALID" === t.type &&
                  this.sendReactionPromises.get(y) === P &&
                  this.sendReaction(e, null == v ? void 0 : v.reaction, !0);
              })
              .finally(() => {
                this.sendReactionPromises.get(y) === P &&
                  this.sendReactionPromises.delete(y);
              });
          return this.sendReactionPromises.set(y, P), P;
        }
      })();
      i.a && (i.a.appReactionsManager = I);
      t.a = I;
    },
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      var i = s(135),
        a = s(30),
        n = s(52),
        r = s(58),
        o = s(0),
        d = s(16),
        c = s(32),
        l = s(26),
        h = s(15),
        u = s(91),
        p = s(65),
        g = s(47),
        f = s(40),
        m = s(158),
        v = s(17),
        _ = s(37),
        y = s(173),
        I = s(43),
        P = s(96),
        S = s(87),
        M = s(174);
      const b = new (class {
        constructor() {
          (this.notificationsShown = {}),
            (this.notificationIndex = 0),
            (this.notificationsCount = 0),
            (this.soundsPlayed = {}),
            (this.vibrateSupport = y.a),
            (this.peerSettings = {
              notifyPeer: {},
              notifyUsers: null,
              notifyChats: null,
              notifyBroadcasts: null,
            }),
            (this.faviconEl = document.head.querySelector('link[rel="icon"]')),
            (this.titleBackup = document.title),
            (this.titleChanged = !1),
            (this.stopped = !1),
            (this.settings = {}),
            (this.pushInited = !1),
            (this.updateLocalSettings = () => {
              Promise.all(
                [
                  "notify_nodesktop",
                  "notify_volume",
                  "notify_novibrate",
                  "notify_nopreview",
                  "notify_nopush",
                ].map((e) => u.a.get(e))
              ).then((e) => {
                if (
                  ((this.settings.nodesktop = e[0]),
                  (this.settings.volume = void 0 === e[1] ? 0.5 : e[1]),
                  (this.settings.novibrate = e[2]),
                  (this.settings.nopreview = e[3]),
                  (this.settings.nopush = e[4]),
                  this.pushInited)
                ) {
                  const e =
                    (!this.settings.nopush &&
                      !this.settings.nodesktop &&
                      l.default.isAvailable) ||
                    !1;
                  e !== (!1 !== this.registeredDevice) &&
                    (e ? l.default.subscribe() : l.default.unsubscribe());
                }
                l.default.setSettings(this.settings);
              }),
                v.default.getState().then((e) => {
                  this.settings.nosound = !e.settings.notifications.sound;
                });
            }),
            (this.checkMuteUntil = () => {
              void 0 !== this.checkMuteUntilTimeout &&
                (clearTimeout(this.checkMuteUntilTimeout),
                (this.checkMuteUntilTimeout = void 0));
              const e = Object(r.h)(!0);
              let t = I.b;
              for (const s in this.peerSettings.notifyPeer) {
                const i = this.peerSettings.notifyPeer[s];
                if (i instanceof Promise) continue;
                const a = i.mute_until;
                a &&
                  (a <= e
                    ? ((i.mute_until = 0),
                      h.default.dispatchEvent("updateNotifySettings", {
                        _: "updateNotifySettings",
                        peer: {
                          _: "notifyPeer",
                          peer: f.a.getOutputPeer(s.toPeerId()),
                        },
                        notify_settings: i,
                      }))
                    : a < t && (t = a));
              }
              const s = Math.min(18e5, 1e3 * (t - e));
              this.checkMuteUntilTimeout = window.setTimeout(
                this.checkMuteUntil,
                s
              );
            }),
            (this.requestPermission = () => {
              Notification.requestPermission(),
                window.removeEventListener("click", this.requestPermission);
            }),
            (navigator.vibrate =
              navigator.vibrate ||
              navigator.mozVibrate ||
              navigator.webkitVibrate),
            (this.notificationsUiSupport =
              "Notification" in window || "mozNotification" in navigator),
            (this.topMessagesDeferred = Object(n.a)()),
            (this.notifySoundEl = document.createElement("div")),
            (this.notifySoundEl.id = "notify-sound"),
            document.body.append(this.notifySoundEl),
            (this.checkMuteUntilThrottled = Object(P.a)(
              this.checkMuteUntil,
              1e3,
              !1
            )),
            h.default.addEventListener("instance_deactivated", () => {
              this.stop();
            }),
            h.default.addEventListener("instance_activated", () => {
              this.stopped && this.start();
            }),
            h.default.addEventListener("idle", (e) => {
              this.stopped || (e || this.clear(), this.toggleToggler());
            }),
            h.default.addMultipleEventsListeners({
              updateNotifySettings: (e) => {
                const t =
                    "notifyPeer" === e.peer._ && f.a.getPeerId(e.peer.peer),
                  s = "notifyPeer" !== e.peer._ ? e.peer._ : void 0;
                this.savePeerSettings({
                  key: s,
                  peerId: t,
                  settings: e.notify_settings,
                }),
                  h.default.dispatchEvent("notify_settings", e);
              },
            }),
            h.default.addEventListener("push_init", (e) => {
              (this.pushInited = !0),
                this.settings.nodesktop || this.settings.nopush
                  ? this.unregisterDevice(e)
                  : e
                  ? this.registerDevice(e)
                  : l.default.subscribe();
            }),
            h.default.addEventListener("push_subscribe", (e) => {
              this.registerDevice(e);
            }),
            h.default.addEventListener("push_unsubscribe", (e) => {
              this.unregisterDevice(e);
            }),
            h.default.addEventListener(
              "dialogs_multiupdate",
              () => {
                this.topMessagesDeferred.resolve();
              },
              { once: !0 }
            ),
            h.default.addEventListener("push_notification_click", (e) => {
              if ("push_settings" === e.action) return;
              if ("mute1d" === e.action)
                return void c.a
                  .invokeApi("account.updateDeviceLocked", { period: 86400 })
                  .then(() => {});
              const t = e.custom && e.custom.peerId.toPeerId();
              console.log("click", e, t),
                t &&
                  this.topMessagesDeferred.then(() => {
                    (e.custom.channel_id &&
                      !g.a.hasChat(e.custom.channel_id)) ||
                      (t.isUser() && !_.a.hasUser(t)) ||
                      h.default.dispatchEvent("history_focus", {
                        peerId: t,
                        mid: +e.custom.msg_id,
                      });
                  });
            });
        }
        toggleToggler(e = h.default.idle.isIDLE) {
          if (o.IS_MOBILE) return;
          const t = () => {
            (this.titleChanged = !1),
              (document.title = this.titleBackup),
              this.setFavicon();
          };
          window.clearInterval(this.titleInterval),
            (this.titleInterval = 0),
            e
              ? (this.titleInterval = window.setInterval(() => {
                  const e = this.notificationsCount;
                  if (e)
                    if (this.titleChanged) t();
                    else {
                      (this.titleChanged = !0),
                        (document.title = d.default.format(
                          "Notifications.Count",
                          !0,
                          [e]
                        ));
                      const t = document.createElement("canvas");
                      (t.width = 32 * window.devicePixelRatio),
                        (t.height = t.width);
                      const s = t.getContext("2d");
                      s.beginPath(),
                        s.arc(
                          t.width / 2,
                          t.height / 2,
                          t.width / 2,
                          0,
                          2 * Math.PI,
                          !1
                        ),
                        (s.fillStyle = "#3390ec"),
                        s.fill();
                      let a = 24,
                        n = "" + e;
                      e < 10
                        ? (a = 22)
                        : e < 100
                        ? (a = 20)
                        : ((n = "99+"), (a = 16)),
                        (a *= window.devicePixelRatio),
                        (s.font = `700 ${a}px ${i.b}`),
                        (s.textBaseline = "middle"),
                        (s.textAlign = "center"),
                        (s.fillStyle = "white"),
                        s.fillText(n, t.width / 2, 0.5625 * t.height),
                        this.setFavicon(t.toDataURL());
                    }
                  else this.toggleToggler(!1);
                }, 1e3))
              : t();
        }
        getLocalSettings() {
          return this.settings;
        }
        getNotifySettings(e) {
          let t,
            s = Object(M.a)(e._),
            i = this.peerSettings[s];
          return (
            "inputNotifyPeer" === e._ &&
              ((t = s = f.a.getPeerId(e.peer)), (i = i[s])),
            i ||
              ((i || this.peerSettings)[s] = c.a
                .invokeApi("account.getNotifySettings", { peer: e })
                .then(
                  (e) => (
                    this.savePeerSettings({ key: s, peerId: t, settings: e }), e
                  )
                ))
          );
        }
        getNotifyPeerTypeSettings() {
          if (this.getNotifyPeerTypePromise)
            return this.getNotifyPeerTypePromise;
          const e = [
            "inputNotifyBroadcasts",
            "inputNotifyUsers",
            "inputNotifyChats",
          ].map((e) => this.getNotifySettings({ _: e }));
          return (this.getNotifyPeerTypePromise = Promise.all(e));
        }
        updateNotifySettings(e, t) {
          return c.a
            .invokeApi("account.updateNotifySettings", { peer: e, settings: t })
            .then((s) => {
              s &&
                p.a.processLocalUpdate({
                  _: "updateNotifySettings",
                  peer: Object.assign(Object.assign({}, e), {
                    _: Object(M.a)(e._),
                  }),
                  notify_settings: Object.assign(Object.assign({}, t), {
                    _: "peerNotifySettings",
                  }),
                });
            });
        }
        getNotifyExceptions() {
          c.a
            .invokeApi("account.getNotifyExceptions", { compare_sound: !0 })
            .then((e) => {
              p.a.processUpdateMessage(e);
            });
        }
        getContactSignUpNotification() {
          return this.notifyContactsSignUp
            ? this.notifyContactsSignUp
            : (this.notifyContactsSignUp = c.a.invokeApi(
                "account.getContactSignUpNotification"
              ));
        }
        setContactSignUpNotification(e) {
          c.a
            .invokeApi("account.setContactSignUpNotification", { silent: e })
            .then((t) => {
              this.notifyContactsSignUp = Promise.resolve(!e);
            });
        }
        setFavicon(e = "assets/img/favicon.ico") {
          if (this.prevFavicon === e) return;
          const t = this.faviconEl.cloneNode();
          (t.href = e),
            this.faviconEl.parentNode.replaceChild(t, this.faviconEl),
            (this.faviconEl = t),
            (this.prevFavicon = e);
        }
        savePeerSettings({ key: e, peerId: t, settings: s }) {
          let i;
          t && ((e = t), (i = this.peerSettings.notifyPeer)),
            ((i || this.peerSettings)[e] = s),
            t
              ? this.checkMuteUntilThrottled()
              : (h.default.dispatchEvent("notify_peer_type_settings", {
                  key: e,
                  settings: s,
                }),
                v.default.getState().then((t) => {
                  const i = t.notifySettings;
                  (i[e] = s), v.default.pushToState("notifySettings", i);
                }));
        }
        isMuted(e) {
          return (
            "peerNotifySettings" === e._ &&
            (e.silent ||
              (void 0 !== e.mute_until && 1e3 * e.mute_until > Object(r.h)()))
          );
        }
        getPeerMuted(e) {
          const t = this.getNotifySettings({
            _: "inputNotifyPeer",
            peer: f.a.getInputPeerById(e),
          });
          return (t instanceof Promise ? t : Promise.resolve(t)).then((e) =>
            this.isMuted(e)
          );
        }
        getPeerLocalSettings(e, t = !0) {
          const s = { _: "peerNotifySettings" },
            i = this.peerSettings.notifyPeer[e];
          if ((!i || i instanceof Promise || Object.assign(s, i), t)) {
            const t = f.a.getInputNotifyPeerById(e, !0),
              i = Object(M.a)(t._),
              a = this.peerSettings[i];
            if (a && !(a instanceof Promise))
              for (let e in a) void 0 === s[e] && (s[e] = a[e]);
          }
          return s;
        }
        isPeerLocalMuted(e, t = !0) {
          if (e === h.default.myId) return !1;
          const s = this.getPeerLocalSettings(e, t);
          return this.isMuted(s);
        }
        start() {
          if (
            (this.updateLocalSettings(),
            h.default.addEventListener(
              "settings_updated",
              this.updateLocalSettings
            ),
            l.default.start(),
            !this.notificationsUiSupport)
          )
            return !1;
          "Notification" in window &&
            "granted" !== Notification.permission &&
            "denied" !== Notification.permission &&
            window.addEventListener("click", this.requestPermission);
          try {
            "onbeforeunload" in window &&
              window.addEventListener("beforeunload", this.clear);
          } catch (e) {}
        }
        stop() {
          this.clear(),
            window.clearInterval(this.titleInterval),
            (this.titleInterval = 0),
            this.setFavicon(),
            (this.stopped = !0);
        }
        notify(e) {
          if (this.stopped) return;
          e.image || (e.image = "assets/img/logo_filled_rounded.png"),
            this.notificationsCount++,
            this.titleInterval || this.toggleToggler();
          const t = ++this.notificationIndex,
            s = e.key || "k" + t;
          this.notificationsShown[s] = !0;
          const i = Object(r.h)();
          if (
            (this.settings.volume > 0 &&
              !this.settings.nosound &&
              (this.testSound(this.settings.volume),
              (this.soundsPlayed[e.tag] = i)),
            !this.notificationsUiSupport ||
              ("Notification" in window &&
                "granted" !== Notification.permission))
          )
            return !1;
          if (this.settings.nodesktop)
            return this.vibrateSupport && !this.settings.novibrate
              ? void navigator.vibrate([200, 100, 200])
              : void 0;
          let a;
          if ("Notification" in window) {
            try {
              if (e.tag)
                for (let t in this.notificationsShown) {
                  const s = this.notificationsShown[t];
                  "boolean" != typeof s && s.tag === e.tag && (s.hidden = !0);
                }
              a = new Notification(e.title, {
                icon: e.image || "",
                body: e.message || "",
                tag: e.tag || "",
                silent: e.silent || !1,
              });
            } catch (e) {
              return (
                (this.notificationsUiSupport = !1),
                void l.default.setLocalNotificationsDisabled()
              );
            }
            (a.onclick = () => {
              a.close(), m.a.focus(), this.clear(), e.onclick && e.onclick();
            }),
              (a.onclose = () => {
                a.hidden || (delete this.notificationsShown[s], this.clear());
              }),
              a.show && a.show(),
              (this.notificationsShown[s] = a),
              o.IS_MOBILE ||
                setTimeout(() => {
                  this.hide(s);
                }, 8e3);
          }
        }
        testSound(e) {
          const t = Object(r.h)();
          if (
            this.nextSoundAt &&
            t < this.nextSoundAt &&
            this.prevSoundVolume === e
          )
            return;
          (this.nextSoundAt = t + 1e3), (this.prevSoundVolume = e);
          const s = "assets/audio/notification.mp3",
            i = document.createElement("audio");
          (i.autoplay = !0),
            i.setAttribute("mozaudiochannel", "notification"),
            (i.volume = e),
            (i.innerHTML = `\n      <source src="${s}" type="audio/mpeg" />\n      <embed hidden="true" autostart="true" loop="false" volume="${
              100 * e
            }" src="${s}" />\n    `),
            this.notifySoundEl.append(i),
            i.addEventListener(
              "ended",
              () => {
                i.remove();
              },
              { once: !0 }
            );
        }
        cancel(e) {
          const t = this.notificationsShown[e];
          if (t) {
            this.notificationsCount > 0 && --this.notificationsCount;
            try {
              "boolean" != typeof t && t.close && ((t.hidden = !0), t.close());
            } catch (e) {}
            delete this.notificationsShown[e];
          }
        }
        hide(e) {
          const t = this.notificationsShown[e];
          if (t && "boolean" != typeof t)
            try {
              t.close && ((t.hidden = !0), t.close());
            } catch (e) {}
        }
        soundReset(e) {
          delete this.soundsPlayed[e];
        }
        clear() {
          for (const e in this.notificationsShown) {
            const t = this.notificationsShown[e];
            try {
              "boolean" != typeof t && t.close && t.close();
            } catch (e) {}
          }
          (this.notificationsShown = {}),
            (this.notificationsCount = 0),
            l.default.hidePushNotifications();
        }
        registerDevice(e) {
          if (this.registeredDevice && Object(S.a)(this.registeredDevice, e))
            return !1;
          c.a
            .invokeApi("account.registerDevice", {
              token_type: e.tokenType,
              token: e.tokenValue,
              other_uids: [],
              app_sandbox: !1,
              secret: new Uint8Array(),
            })
            .then(
              () => {
                this.registeredDevice = e;
              },
              (e) => {
                e.handled = !0;
              }
            );
        }
        unregisterDevice(e) {
          if (!this.registeredDevice) return !1;
          c.a
            .invokeApi("account.unregisterDevice", {
              token_type: e.tokenType,
              token: e.tokenValue,
              other_uids: [],
            })
            .then(
              () => {
                this.registeredDevice = !1;
              },
              (e) => {
                e.handled = !0;
              }
            );
        }
        getVibrateSupport() {
          return this.vibrateSupport;
        }
      })();
      (a.a.appNotificationsManager = b), (t.a = b);
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return o;
      }),
        s.d(t, "c", function () {
          return d;
        }),
        s.d(t, "a", function () {
          return c;
        }),
        s.d(t, "e", function () {
          return l;
        }),
        s.d(t, "d", function () {
          return h;
        }),
        s.d(t, "f", function () {
          return u;
        });
      var i = s(38),
        a = s(81),
        n = s(0),
        r = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function o(e) {
        let t, s;
        return (
          e instanceof HTMLVideoElement
            ? ((t = e.videoWidth), (s = e.videoHeight))
            : ((t = e.naturalWidth), (s = e.naturalHeight)),
          (a = {
            media: e,
            mediaSize: Object(i.c)(t, s),
            boxSize: Object(i.c)(320, 240),
            quality: 0.9,
          }),
          new Promise((e) => {
            var t, s;
            const i = document.createElement("canvas"),
              n = a.mediaSize.aspectFitted(a.boxSize);
            (i.width = n.width * window.devicePixelRatio),
              (i.height = n.height * window.devicePixelRatio),
              i.getContext("2d").drawImage(a.media, 0, 0, i.width, i.height),
              i.toBlob(
                (t) => {
                  e({ blob: t, size: n });
                },
                null !== (t = a.mimeType) && void 0 !== t ? t : "image/jpeg",
                null !== (s = a.quality) && void 0 !== s ? s : 1
              );
          })
        );
        var a;
      }
      function d(e) {
        return new Promise((t, s) => {
          (e.onseeked = () => {
            (e.onseeked = () => {
              o(e).then(t), (e.onseeked = void 0);
            }),
              (e.currentTime = 0);
          }),
            (e.onerror = s),
            (e.currentTime = Math.min(e.duration, 1));
        });
      }
      function c(e) {
        return r(this, void 0, void 0, function* () {
          const t = yield (function (e) {
            return new Promise((t, s) => {
              const i = document.createElement("video");
              (i.volume = 0),
                i.addEventListener("loadedmetadata", () => t(i), { once: !0 }),
                i.addEventListener("error", s, { once: !0 }),
                (i.src = e);
            });
          })(e);
          return Promise.race([Object(a.a)(2e3), d(t)]);
        });
      }
      function l(e, t = e.HAVE_METADATA, s) {
        return new Promise((i) => {
          e.readyState >= t
            ? i()
            : e.addEventListener(
                n.IS_APPLE_MOBILE && !s ? "loadeddata" : "canplay",
                () => i(),
                { once: !0 }
              );
        });
      }
      function h(e, t = !1) {
        return r(this, void 0, void 0, function* () {
          const s = [],
            i = (e, a) =>
              r(this, void 0, void 0, function* () {
                if (e.isDirectory) {
                  const t = e.createReader();
                  yield new Promise((e, s) => {
                    t.readEntries((t) =>
                      r(this, void 0, void 0, function* () {
                        for (const e of t) yield i(e, a);
                        e();
                      })
                    );
                  });
                } else if (e)
                  if (t) s.push(e.type);
                  else {
                    const t = a.getAsFile(),
                      i =
                        e instanceof File
                          ? e
                          : e instanceof DataTransferItem
                          ? e.getAsFile()
                          : yield new Promise((s, i) => e.file(s, (e) => s(t)));
                    if (!i) return;
                    s.push(i);
                  }
              });
          if (
            e instanceof DragEvent &&
            e.dataTransfer.files &&
            !e.dataTransfer.items
          )
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
              const a = e.dataTransfer.files[i];
              s.push(t ? a.type : a);
            }
          else {
            const s = (
                e.dataTransfer ||
                e.clipboardData ||
                e.originalEvent.clipboardData
              ).items,
              a = [];
            for (let e = 0; e < s.length; ++e) {
              const n = s[e];
              if ("file" === n.kind) {
                const e = (t ? n : n.webkitGetAsEntry()) || n.getAsFile();
                a.push(i(e, n));
              }
            }
            yield Promise.all(a);
          }
          return s;
        });
      }
      function u(e) {
        const t = document.createElement("input");
        (t.type = "file"),
          (t.style.display = "none"),
          e && (t.accept = e),
          document.body.append(t);
        const s = new Promise((e, s) => {
          t.addEventListener(
            "change",
            (t) => {
              const i = t.target.files[0];
              i ? e(i) : s("NO_FILE_SELECTED");
            },
            { once: !0 }
          );
        }).finally(() => {
          t.remove();
        });
        return t.click(), s;
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      const i = () => {
        let e = { cleaned: !1 };
        return {
          clean: () => {
            (e.cleaned = !0), (e = { cleaned: !1 });
          },
          get: (t) => {
            const s = e;
            return () => !s.cleaned && (!t || t());
          },
        };
      };
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e, t) {
        return t
          ? e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
          : e.replace(/-/g, "+").replace(/_/g, "/");
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e, t) {
        if (!e) return t;
        for (var s in e) t.hasOwnProperty(s) || delete e[s];
        for (var s in t) e[s] = t[s];
        return e;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return c;
      });
      var i = s(48),
        a = s(45),
        n = s(5),
        r = s(29),
        o = s(92),
        d = s(42);
      class c {
        constructor(e) {
          (this.tempId = 0),
            (this.detached = !0),
            (this.promise = null),
            (this.isUpload = !1),
            (this.cancelable = !0),
            (this.streamable = !1),
            (this.tryAgainOnFail = !0),
            (this.attachMethod = "append"),
            (this.onClick = (e) => {
              e && Object(n.a)(e),
                this.preloader.classList.contains("manual")
                  ? this.loadFunc && this.loadFunc(e)
                  : this.promise &&
                    this.promise.cancel &&
                    this.promise.cancel();
            }),
            e && Object(d.a)(this, e);
        }
        constructContainer(e = {}) {
          this.preloader ||
            ((this.preloader = document.createElement("div")),
            this.preloader.classList.add("preloader-container"),
            e.color && this.preloader.classList.add("preloader-" + e.color),
            e.bold && this.preloader.classList.add("preloader-bold"),
            this.streamable &&
              this.preloader.classList.add("preloader-streamable"));
        }
        constructDownloadIcon() {
          this.constructContainer();
        }
        construct() {
          (this.construct = null),
            this.constructContainer(),
            (this.preloader.innerHTML = `\n    <div class="you-spin-me-round">\n    <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="${
              this.streamable ? "25 25 50 50" : "27 27 54 54"
            }">\n    <circle class="preloader-path-new" cx="${
              this.streamable ? "50" : "54"
            }" cy="${this.streamable ? "50" : "54"}" r="${
              this.streamable ? 19 : 24
            }" fill="none" stroke-miterlimit="10"/>\n    </svg>\n    </div>`),
            this.streamable
              ? (this.totalLength = 118.61124420166016)
              : (this.totalLength = 149.82473754882812),
            this.cancelable
              ? ((this.preloader.innerHTML +=
                  '\n      <svg xmlns="http://www.w3.org/2000/svg" class="preloader-close" viewBox="0 0 24 24">\n        <g fill="none" fill-rule="evenodd">\n          <polygon points="0 0 24 0 24 24 0 24"/>\n          <path fill="#000" fill-rule="nonzero" d="M5.20970461,5.38710056 L5.29289322,5.29289322 C5.65337718,4.93240926 6.22060824,4.90467972 6.61289944,5.20970461 L6.70710678,5.29289322 L12,10.585 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.415,12 L18.7071068,17.2928932 C19.0675907,17.6533772 19.0953203,18.2206082 18.7902954,18.6128994 L18.7071068,18.7071068 C18.3466228,19.0675907 17.7793918,19.0953203 17.3871006,18.7902954 L17.2928932,18.7071068 L12,13.415 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.585,12 L5.29289322,6.70710678 C4.93240926,6.34662282 4.90467972,5.77939176 5.20970461,5.38710056 L5.29289322,5.29289322 L5.20970461,5.38710056 Z"/>\n        </g>\n      </svg>\n      <svg xmlns="http://www.w3.org/2000/svg" class="preloader-download" viewBox="0 0 24 24">\n        <g fill="none" fill-rule="evenodd">\n          <polygon points="0 0 24 0 24 24 0 24"/>\n          <path fill="#000" fill-rule="nonzero" d="M5,19 L19,19 C19.5522847,19 20,19.4477153 20,20 C20,20.5128358 19.6139598,20.9355072 19.1166211,20.9932723 L19,21 L5,21 C4.44771525,21 4,20.5522847 4,20 C4,19.4871642 4.38604019,19.0644928 4.88337887,19.0067277 L5,19 L19,19 L5,19 Z M11.8833789,3.00672773 L12,3 C12.5128358,3 12.9355072,3.38604019 12.9932723,3.88337887 L13,4 L13,13.585 L16.2928932,10.2928932 C16.6533772,9.93240926 17.2206082,9.90467972 17.6128994,10.2097046 L17.7071068,10.2928932 C18.0675907,10.6533772 18.0953203,11.2206082 17.7902954,11.6128994 L17.7071068,11.7071068 L12.7071068,16.7071068 C12.3466228,17.0675907 11.7793918,17.0953203 11.3871006,16.7902954 L11.2928932,16.7071068 L6.29289322,11.7071068 C5.90236893,11.3165825 5.90236893,10.6834175 6.29289322,10.2928932 C6.65337718,9.93240926 7.22060824,9.90467972 7.61289944,10.2097046 L7.70710678,10.2928932 L11,13.585 L11,4 C11,3.48716416 11.3860402,3.06449284 11.8833789,3.00672773 L12,3 L11.8833789,3.00672773 Z"/>\n        </g>\n      </svg>'),
                (this.downloadSvg = this.preloader.lastElementChild),
                (this.cancelSvg = this.downloadSvg.previousElementSibling))
              : this.preloader.classList.add("preloader-swing"),
            (this.circle =
              this.preloader.firstElementChild.firstElementChild.firstElementChild),
            this.cancelable && Object(r.b)(this.preloader, this.onClick);
        }
        setDownloadFunction(e) {
          this.loadFunc = e;
        }
        setManual() {
          this.preloader.classList.add("manual"), this.setProgress(0);
        }
        attachPromise(e) {
          if (this.isUpload && this.promise) return;
          this.promise = e;
          const t = --this.tempId,
            s = Date.now(),
            i = (i) => {
              if (((e.notify = e.notifyAll = null), t !== this.tempId)) return;
              const n = Date.now() - s;
              if (!i && this.cancelable) {
                this.setProgress(100);
                const e = 150;
                n < e
                  ? this.detach()
                  : setTimeout(() => {
                      t === this.tempId && this.detach();
                    }, e);
              } else
                this.tryAgainOnFail
                  ? (this.attach(this.preloader.parentElement),
                    Object(a.b)(() => {
                      this.setManual();
                    }))
                  : this.detach();
              this.promise = e = null;
            };
          e.then(() => i(null)).catch((e) => i(e)),
            e.addNotifyListener &&
              e.addNotifyListener((e) => {
                if (t !== this.tempId) return;
                const s = (e.done / e.total) * 100;
                this.setProgress(s);
              });
        }
        attach(e, t = !1, s) {
          if (
            (this.construct && this.construct(),
            this.preloader.parentElement &&
              this.preloader.classList.remove("manual"),
            (this.detached = !1),
            s && this.attachPromise(s),
            this.detached || this.preloader.parentElement !== e)
          ) {
            const t = Object(o.a)(this.preloader) ? 1 : 2;
            this.preloader.parentElement !== e &&
              e[this.attachMethod](this.preloader),
              Object(i.a)(this.preloader, "is-visible", !0, 200, void 0, t);
          }
          this.cancelable && t && this.setProgress(0);
        }
        detach() {
          this.detached ||
            ((this.detached = !0),
            this.preloader &&
              this.preloader.parentElement &&
              Object(i.a)(
                this.preloader,
                "is-visible",
                !1,
                200,
                () => {
                  this.preloader.remove();
                },
                1
              ));
        }
        setProgress(e) {
          if (this.totalLength || Object(o.a)(this.circle))
            if (0 !== e)
              try {
                this.totalLength ||
                  (this.totalLength = this.circle.getTotalLength()),
                  (this.circle.style.strokeDasharray =
                    Math.max(5, (e / 100) * this.totalLength) +
                    ", " +
                    this.totalLength);
              } catch (e) {}
            else this.circle.style.strokeDasharray = "";
        }
      }
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e, t, s = t + 10) {
        return (e = e.trim()).length > s && (e = e.slice(0, t) + "..."), e;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(103),
        n = s(33),
        r = s(122),
        o = s(43),
        d = s(31),
        c = s(15),
        l = s(74),
        h = s(40),
        u = s(56),
        p = s(37);
      const g = new (class {
        constructor() {
          this.savedAvatarURLs = {};
        }
        isAvatarCached(e) {
          return !!this.savedAvatarURLs[e];
        }
        removeFromAvatarsCache(e) {
          this.savedAvatarURLs[e] && delete this.savedAvatarURLs[e];
        }
        loadAvatar(e, t, s) {
          const i = h.a.getInputPeerById(e);
          let a,
            n = !1,
            r = this.savedAvatarURLs[e];
          if (r && r[s])
            "string" != typeof r[s]
              ? (a = r[s])
              : ((a = Promise.resolve(r[s])), (n = !0));
          else {
            r || (r = this.savedAvatarURLs[e] = {});
            const n = {
              _: "inputPeerPhotoFileLocation",
              pFlags: {},
              peer: i,
              photo_id: t.photo_id,
            };
            "photo_big" === s && (n.pFlags.big = !0);
            const o = { dcId: t.dc_id, location: n },
              d = l.a.download(o);
            a = r[s] = d.then((e) => (r[s] = URL.createObjectURL(e)));
          }
          return { cached: n, loadPromise: a };
        }
        putAvatar(e, t, s, i, o = new Image(), d = !1) {
          let l,
            h,
            p,
            { cached: g, loadPromise: f } = this.loadAvatar(t, s, i);
          if ((o.classList.add("avatar-photo"), g))
            h = () => {
              Object(n.a)(e, o), (e.dataset.color = "");
            };
          else {
            const d = c.default.settings.animationsEnabled;
            if ((d && o.classList.add("fade-in"), "photo_big" === i)) {
              const i = this.putAvatar(e, t, s, "photo_small");
              (l = i.loadPromise), (p = i.thumbImage);
            } else if (s.stripped_thumb) {
              (p = new Image()),
                e.classList.add("avatar-relative"),
                p.classList.add("avatar-photo", "avatar-photo-thumbnail");
              const t = u.a.getPreviewURLFromBytes(s.stripped_thumb);
              l = Object(a.b)(p, t).then(() => {
                Object(n.a)(e, p);
              });
            }
            h = () => {
              p ? e.append(o) : Object(n.a)(e, o),
                setTimeout(
                  () => {
                    e.childElementCount &&
                      r.a.mutateElement(o, () => {
                        (e.dataset.color = ""),
                          d && o.classList.remove("fade-in"),
                          p && p.remove();
                      });
                  },
                  d ? 200 : 0
                );
            };
          }
          const m = f.then((e) => Object(a.b)(o, e)).then(h);
          return { cached: g, loadPromise: l || m, thumbImage: p };
        }
        s(e, t, s, i) {
          (e.innerHTML = t),
            (e.dataset.color = s),
            e.classList.remove(
              "tgico-saved",
              "tgico-deletedaccount",
              "tgico-reply_filled"
            ),
            i && e.classList.add(i);
        }
        putPhoto(e, t, s = !1, i = "", a = !1, n) {
          var r;
          const l = c.default.myId;
          if (t === l && s) return void this.s(e, "", "", "tgico-saved");
          if (t !== o.c && t.isUser()) {
            const s = p.a.getUser(t);
            if (s && s.pFlags && s.pFlags.deleted)
              return void this.s(
                e,
                "",
                h.a.getPeerColorById(t),
                "tgico-deletedaccount"
              );
          }
          const u = h.a.getPeerPhoto(t),
            g = !!u,
            f =
              !!e.firstElementChild &&
              !e.firstElementChild.classList.contains("emoji");
          if (!g || !f || !this.savedAvatarURLs[t]) {
            let a,
              n = "";
            if (
              (!t || (t === l && s) || (n = h.a.getPeerColorById(t)), t === o.d)
            )
              return void this.s(e, "", n, "tgico-reply_filled");
            if (i) a = d.b.getAbbreviation(i);
            else {
              a =
                null !== (r = h.a.getPeer(t).initials) && void 0 !== r ? r : "";
            }
            this.s(e, a, n, "");
          }
          if (g) {
            const s = n ? "photo_big" : "photo_small";
            return this.putAvatar(e, t, u, s, void 0, a);
          }
        }
      })();
      i.a && (i.a.appAvatarsManager = g), (t.a = g);
    },
    function (e, t, s) {
      "use strict";
      var i;
      !(function (e) {
        (e[(e.UNMUTED = 0)] = "UNMUTED"),
          (e[(e.MUTED = 1)] = "MUTED"),
          (e[(e.MUTED_BY_ADMIN = 2)] = "MUTED_BY_ADMIN"),
          (e[(e.CONNECTING = 3)] = "CONNECTING"),
          (e[(e.CLOSED = 4)] = "CLOSED");
      })(i || (i = {})),
        (t.a = i);
    },
    function (e, t, s) {
      "use strict";
      function i(e, t) {
        return e instanceof Promise ? e.then(t) : t(e);
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var i = s(148);
      class a {
        constructor(e, t = 0) {
          (this.options = e), (this.minChars = t), (this.fullTexts = new Map());
        }
        indexObject(e, t) {
          if (
            (this.options && t.trim() && (t = Object(i.c)(t, this.options)), !t)
          )
            return this.fullTexts.delete(e), !1;
          this.fullTexts.set(e, t);
        }
        search(e) {
          const t = this.fullTexts;
          this.options && (e = Object(i.c)(e, this.options));
          const s = [],
            a = e.split(" "),
            n = a.length;
          t.forEach((e, t) => {
            let i = !0,
              r = 0;
            for (let t = 0; t < n; ++t) {
              const s = a[t],
                n = e.indexOf(s);
              if (-1 === n || (0 !== n && " " !== e[n - 1])) {
                i = !1;
                break;
              }
              r += s.length;
            }
            if (i) {
              r += n - 1;
              const i = e.length;
              (this.minChars <= r || i <= r) &&
                s.push({
                  fullText: e,
                  fullTextLength: i,
                  what: t,
                  foundChars: r,
                });
            }
          }),
            s.sort(
              (e, t) =>
                e.fullTextLength - t.fullTextLength ||
                t.foundChars - e.foundChars
            );
          return new Set(s.map((e) => e.what));
        }
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "a", function () {
          return p;
        });
      var i = s(107);
      const a = new Map(),
        n = new Set(),
        r =
          'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
      let o;
      const d = () => {
          cancelAnimationFrame(o), (o = window.requestAnimationFrame(c));
        },
        c = () => {
          n.forEach(l), n.clear();
        };
      window.addEventListener(
        "resize",
        () => {
          for (const [e] of a) n.add(e);
          d();
        },
        { capture: !0, passive: !0 }
      );
      const l = (e) => {
        let t = a.get(e);
        const s = !t;
        let {
          text: n,
          textLength: o,
          from: d,
          multiplier: c,
          font: l,
          textWidth: h,
          elementWidth: p,
        } = t || {};
        s &&
          ((n = e.textContent),
          (o = n.length),
          (d = 50),
          (c = d > 0 && d / 100),
          (l = `${e.dataset.fontWeight || 400} 16px ${r}`),
          (h = u(n, l)),
          (p = e.getBoundingClientRect().width),
          (t = {
            text: n,
            textLength: o,
            from: d,
            multiplier: c,
            font: l,
            textWidth: h,
            elementWidth: p,
          }),
          a.set(e, t));
        const g = e.getBoundingClientRect().width,
          f = s || p !== g;
        if ((!s && f && (t.elementWidth = p = g), f))
          if (h > p) {
            e.setAttribute("title", n);
            let s = n,
              a = p;
            for (; s.length > 3; ) {
              let t = s.length;
              const n =
                  (c && Object(i.a)((c * t) << 0, 1, t - 2)) ||
                  Math.max(t + d - 1, 1),
                r = s.substr(0, n).replace(/\s*$/, ""),
                o = s.substr(n + 1).replace(/^\s*/, "");
              if (((s = r + o), (a = u(s + "â€¦", l)), a < p)) {
                e.textContent = r + "â€¦" + o;
                break;
              }
            }
            t.elementWidth = e.getBoundingClientRect().width;
          } else e.removeAttribute("title");
      };
      let h;
      function u(e, t) {
        if (!h) {
          const e = document.createElement("canvas");
          (h = e.getContext("2d")), (h.font = t);
        }
        return h.measureText(e).width;
      }
      class p extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          a.set(this, null), n.add(this), d();
        }
        disconnectedCallback() {
          a.delete(this);
        }
      }
      customElements.define("middle-ellipsis-element", p);
    },
    function (e, t, s) {
      "use strict";
      var i = s(15),
        a = s(40),
        n = s(39),
        r = s(65),
        o = s(31),
        d = s(79),
        c = s(32),
        l = s(58),
        h = s(30),
        u = s(91),
        p = s(102),
        g = s(80),
        f = s(86),
        m = s(87),
        v = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const _ = new (class {
        constructor() {
          (this.drafts = {}),
            (this.getAllDraftPromise = null),
            u.a.get("drafts").then((e) => {
              this.drafts = e || {};
            }),
            i.default.addMultipleEventsListeners({
              updateDraftMessage: (e) => {
                const t = a.a.getPeerId(e.peer);
                this.saveDraft(t, e.threadId, e.draft, { notify: !0 });
              },
            });
        }
        getKey(e, t) {
          return e + (t ? "_" + t : "");
        }
        getDraft(e, t) {
          return this.drafts[this.getKey(e, t)];
        }
        addMissedDialogs() {
          return this.getAllDrafts().then(() => {
            for (const e in this.drafts) {
              if (-1 !== e.indexOf("_")) continue;
              const t = e.toPeerId();
              n.a.getDialogOnly(t) || n.a.reloadConversation(t);
            }
          });
        }
        getAllDrafts() {
          return (
            this.getAllDraftPromise ||
            (this.getAllDraftPromise = c.a
              .invokeApi("messages.getAllDrafts")
              .then((e) => {
                (r.a.updatesState.syncLoading || Promise.resolve()).then(() => {
                  r.a.processUpdateMessage(e);
                });
              }))
          );
        }
        saveDraft(e, t, s, a = {}) {
          const n = this.processApiDraft(s),
            r = this.getKey(e, t);
          return (
            n ? (this.drafts[r] = n) : delete this.drafts[r],
            u.a.set({ drafts: this.drafts }),
            a.notify &&
              i.default.dispatchEvent("draft_updated", {
                peerId: e,
                threadId: t,
                draft: n,
                force: a.force,
              }),
            n
          );
        }
        draftsAreEqual(e, t) {
          if (typeof e != typeof t) return !1;
          if (!Object(f.a)(e)) return !0;
          if (e._ !== t._) return !1;
          if ("draftMessage" === e._ && t._ === e._) {
            if (e.reply_to_msg_id !== t.reply_to_msg_id) return !1;
            if (!Object(m.a)(e.entities, t.entities)) return !1;
            if (e.message !== t.message) return !1;
            if (e.pFlags.no_webpage !== t.pFlags.no_webpage) return !1;
          }
          return !0;
        }
        isEmptyDraft(e) {
          return (
            !e ||
            "draftMessageEmpty" === e._ ||
            (!(e.reply_to_msg_id > 0) && !e.message.length)
          );
        }
        processApiDraft(e) {
          if (!e || "draftMessage" !== e._) return;
          const t = o.b.parseEntities(e.message),
            s = e.entities || [],
            i = o.b.mergeEntities(s.slice(), t);
          return (
            (e.rMessage = o.b.wrapDraftText(e.message, { entities: i })),
            e.reply_to_msg_id &&
              (e.reply_to_msg_id = p.a.generateMessageId(e.reply_to_msg_id)),
            e
          );
        }
        syncDraft(e, t, s, i = !0, r = !1) {
          return v(this, void 0, void 0, function* () {
            const o = this.getDraft(e, t);
            if (this.draftsAreEqual(o, s)) return !0;
            let h,
              u = { peer: a.a.getInputPeerById(e), message: "" };
            if (this.isEmptyDraft(s)) h = { _: "draftMessageEmpty" };
            else {
              Object(g.a)(s);
              let e = s.message,
                t = s.entities;
              s.reply_to_msg_id &&
                (u.reply_to_msg_id = p.a.getServerMessageId(s.reply_to_msg_id)),
                (null == t ? void 0 : t.length) &&
                  (u.entities = n.a.getInputEntities(t)),
                s.pFlags.no_webpage && (u.no_webpage = s.pFlags.no_webpage),
                (u.message = e);
            }
            const f = h || s;
            return (
              (f.date = Object(l.h)(!0) + d.a.serverTimeOffset),
              this.saveDraft(e, t, f, { notify: !0, force: r }),
              !(i && !t) || c.a.invokeApi("messages.saveDraft", u)
            );
          });
        }
        clearAllDrafts() {
          return c.a.invokeApi("messages.clearAllDrafts").then((e) => {
            if (e)
              for (const e in this.drafts) {
                const [t, s] = e.split("_");
                i.default.dispatchEvent("draft_updated", {
                  peerId: t.toPeerId(),
                  threadId: s ? +s : void 0,
                  draft: void 0,
                });
              }
          });
        }
        clearDraft(e, t) {
          const s = { _: "draftMessageEmpty" };
          t
            ? this.syncDraft(e, t, s, !1, !0)
            : this.saveDraft(e, t, s, { notify: !0, force: !0 });
        }
        setDraft(e, t, s, i) {
          const a = {
            _: "draftMessage",
            date: (Date.now() / 1e3) | 0,
            message: s,
            pFlags: {},
            entities: i,
          };
          t
            ? this.syncDraft(e, t, a, !1, !0)
            : this.saveDraft(e, t, a, { notify: !0, force: !0 });
        }
      })();
      (h.a.appDraftsManager = _), (t.a = _);
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      }),
        s.d(t, "c", function () {
          return o;
        }),
        s.d(t, "b", function () {
          return d;
        });
      var i = s(59),
        a = s(42),
        n = s(165);
      class r {
        constructor(e, t) {
          (this.mid = e), (this.type = t), (this.port = n.b);
        }
        setDirection(e) {
          return (
            this.originalDirection || (this.originalDirection = e),
            (this.direction = e)
          );
        }
        setPort(e) {
          return (this.port = e);
        }
        setEndpoint(e) {
          return (this.endpoint = e);
        }
        setPeerId(e) {
          return (this.peerId = e);
        }
        createTransceiver(e, t) {
          return (
            (null == t ? void 0 : t.direction) &&
              this.setDirection(t.direction),
            (this.transceiver = e.addTransceiver(Object(n.c)(this.type), t))
          );
        }
        setSource(e) {
          let t;
          if (Array.isArray(e)) {
            if (!e[0]) return;
            (t = e), (e = t[0].sources[0]);
          }
          return (this.sourceGroups = t), (this.source = e);
        }
        shouldBeSkipped(e) {
          return e && "inactive" === this.direction;
        }
      }
      function o(e, t, s) {
        let i;
        if (Array.isArray(t)) {
          if (!t[0]) return;
          (i = t), (t = i[0].sources[0]);
        }
        return { endpoint: s, type: e, source: t, sourceGroups: i };
      }
      class d {
        constructor(e) {
          (this.connection = e),
            (this.sessionId = "" + Date.now()),
            (this.maxSeenId = -1),
            (this.entries = []),
            (this.entriesByMid = new Map()),
            (this.entriesBySource = new Map()),
            (this.entriesByPeerId = new Map());
        }
        setData(e) {
          return Object(a.a)(this, e);
        }
        createEntry(e) {
          const t = "" + ++this.maxSeenId,
            s = new r(t, e);
          return this.entries.push(s), this.entriesByMid.set(t, s), s;
        }
        deleteEntry(e) {
          Object(i.a)(this.entries, e),
            this.entriesByMid.delete(e.mid),
            this.entriesBySource.delete(e.source);
          const t = this.entriesByPeerId.get(e.peerId);
          t && (t.delete(e), t.size || this.entriesByPeerId.delete(e.peerId));
        }
        setEntrySource(e, t) {
          e.setSource(t), this.entriesBySource.set(e.source, e);
        }
        setEntryPeerId(e, t) {
          e.setPeerId(t);
          let s = this.entriesByPeerId.get(t);
          s || this.entriesByPeerId.set(t, (s = new Set())), s.add(e);
        }
        findEntry(e) {
          return this.entries.find(e);
        }
        findFreeSendRecvEntry(e, t) {
          let s = this.entries.find(
            (s) =>
              "sendrecv" === s.direction &&
              s.type === e &&
              !(t ? s.sendEntry : s.recvEntry)
          );
          return (
            s || ((s = this.createEntry(e)), s.setDirection("sendrecv")), s
          );
        }
        getEntryByMid(e) {
          return this.entriesByMid.get(e);
        }
        getEntryBySource(e) {
          return this.entriesBySource.get(e);
        }
        getEntriesByPeerId(e) {
          return this.entriesByPeerId.get(e);
        }
        generateSdp(e) {
          return n.a.fromConference(Object.assign({ conference: this }, e));
        }
      }
    },
    ,
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(181),
        n = s(120),
        r = s(67),
        o = s(129),
        d = s(187),
        c = s(127),
        l = s(164),
        h = s(153),
        u = s(194),
        p = s(162),
        g = s(163),
        f = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      var m = s(137),
        v = s(41),
        _ = s(32),
        y = s(43),
        I = s(15),
        P = s(65),
        S = s(47),
        M = s(40),
        b = s(37),
        w = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const C = new (class {
        constructor() {
          (this.makeSsrcsFromParticipant = (e) => {
            var t, s;
            return [
              this.makeSsrcFromParticipant(e, "audio", e.source),
              (null === (t = e.video) || void 0 === t
                ? void 0
                : t.audio_source) &&
                this.makeSsrcFromParticipant(e, "audio", e.video.audio_source),
              e.video &&
                this.makeSsrcFromParticipant(
                  e,
                  "video",
                  e.video.source_groups,
                  e.video.endpoint
                ),
              (null === (s = e.presentation) || void 0 === s
                ? void 0
                : s.audio_source) &&
                this.makeSsrcFromParticipant(
                  e,
                  "audio",
                  e.presentation.audio_source
                ),
              e.presentation &&
                this.makeSsrcFromParticipant(
                  e,
                  "video",
                  e.presentation.source_groups,
                  e.presentation.endpoint
                ),
            ].filter(Boolean);
          }),
            (this.log = Object(v.b)("GROUP-CALLS")),
            (this.groupCalls = new Map()),
            (this.participants = new Map()),
            (this.nextOffsets = new Map()),
            I.default.addMultipleEventsListeners({
              updateGroupCall: (e) => {
                this.saveGroupCall(e.call, e.chat_id);
              },
              updateGroupCallParticipants: (e) => {
                this.saveGroupCall(e.call);
                const t = e.call.id;
                this.saveApiParticipants(t, e.participants);
              },
            }),
            I.default.addEventListener("group_call_update", (e) => {
              if ("groupCallDiscarded" === e._) {
                const { currentGroupCall: t } = this;
                (null == t ? void 0 : t.id) === e.id && t.hangUp(!1, !1, !0),
                  this.participants.delete(e.id);
              }
            }),
            (this.audioAsset = new a.a([
              "group_call_connect.mp3",
              "group_call_end.mp3",
              "group_call_start.mp3",
              "voip_onallowtalk.mp3",
            ]));
        }
        get groupCall() {
          return this.currentGroupCall;
        }
        getCachedParticipants(e) {
          let t = this.participants.get(e);
          return t || this.participants.set(e, (t = new Map())), t;
        }
        prepareToSavingNextOffset(e) {
          const t = this.nextOffsets,
            s = t.get(e);
          return {
            nextOffset: s,
            setNextOffset: (i) => {
              t.get(e) === s && t.set(e, i);
            },
          };
        }
        saveApiParticipant(e, t, s) {
          const { currentGroupCall: i } = this,
            a = this.getCachedParticipants(e),
            r = M.a.getPeerId(t.peer),
            o = a.get(r),
            d = t.pFlags.left;
          if (!o && d) return;
          t.pFlags.muted ||
            t.pFlags.can_self_unmute ||
            (t.pFlags.can_self_unmute = !0);
          const c = (null == i ? void 0 : i.id) === e;
          o ? (Object(n.a)(o, t), (t = o)) : a.set(r, t),
            c && i.onParticipantUpdate(t, this.doNotDispatchParticipantUpdate);
          const l = this.getGroupCall(e);
          if ("groupCall" === (null == l ? void 0 : l._)) {
            let e = !1;
            d
              ? (--l.participants_count, (e = !0))
              : !t.pFlags.just_joined ||
                o ||
                t.pFlags.self ||
                (++l.participants_count, (e = !0)),
              e && I.default.dispatchEvent("group_call_update", l);
          }
          d && a.delete(r),
            o &&
              this.doNotDispatchParticipantUpdate !== r &&
              I.default.dispatchEvent("group_call_participant", {
                groupCallId: e,
                participant: t,
              });
        }
        saveApiParticipants(e, t, s) {
          t.saved ||
            ((t.saved = !0),
            t.forEach((t) => this.saveApiParticipant(e, t, s)));
        }
        editParticipant(e, t, s) {
          return w(this, void 0, void 0, function* () {
            if (!Object.keys(s).length) return;
            if (t) {
              const { currentGroupCall: i } = this,
                a = (null == i ? void 0 : i.id) === e && t.pFlags.self;
              if (
                a &&
                void 0 !== s.muted &&
                !i.isSharingAudio &&
                (delete s.muted, !Object.keys(s).length)
              )
                return;
              const n = s.muted;
              void 0 !== n &&
                t.pFlags.self &&
                (n
                  ? (t.pFlags.muted = !0)
                  : t.pFlags.can_self_unmute && delete t.pFlags.muted),
                void 0 !== s.raiseHand &&
                  (s.raiseHand
                    ? (t.raise_hand_rating = "1")
                    : delete t.raise_hand_rating),
                a &&
                  (void 0 !== s.videoStopped &&
                    (s.videoStopped
                      ? delete t.video
                      : (t.video = this.generateSelfVideo(
                          i.connections.main.sources.video
                        ))),
                  !t.pFlags.muted && t.pFlags.can_self_unmute && i.setMuted(!1),
                  i.dispatchEvent("state", i.state)),
                I.default.dispatchEvent("group_call_participant", {
                  groupCallId: e,
                  participant: t,
                });
            }
            const i = t.pFlags.self ? y.c : M.a.getPeerId(t.peer),
              a = yield _.a.invokeApiSingle("phone.editGroupCallParticipant", {
                call: C.getGroupCallInput(e),
                participant:
                  i === y.c ? M.a.getInputPeerSelf() : M.a.getInputPeerById(i),
                muted: s.muted,
                volume: s.volume,
                raise_hand: s.raiseHand,
                video_paused: s.videoPaused,
                video_stopped: s.videoStopped,
                presentation_paused: s.presentationPaused,
              });
            P.a.processUpdateMessage(a);
          });
        }
        getGroupCall(e) {
          return this.groupCalls.get(e);
        }
        getGroupCallFull(e, t) {
          return w(this, void 0, void 0, function* () {
            const s = this.getGroupCall(e);
            if (s && "inputGroupCall" !== s._ && !t) return s;
            const i = this.getCachedParticipants(e).size ? 0 : 100;
            return _.a.invokeApiSingleProcess({
              method: "phone.getGroupCall",
              params: { call: this.getGroupCallInput(e), limit: i },
              processResult: (t) => {
                b.a.saveApiUsers(t.users),
                  S.a.saveApiChats(t.chats),
                  this.saveApiParticipants(e, t.participants, !0);
                const s = this.saveGroupCall(t.call);
                return (
                  i &&
                    void 0 === this.nextOffsets.get(e) &&
                    this.nextOffsets.set(e, t.participants_next_offset),
                  s
                );
              },
            });
          });
        }
        saveGroupCall(e, t) {
          const s = this.groupCalls.get(e.id),
            i =
              "inputGroupCall" !== e._ && (!s || "groupCallDiscarded" !== s._);
          return (
            s
              ? (i && Object(n.a)(s, e), (e = s))
              : this.groupCalls.set(e.id, e),
            i && I.default.dispatchEvent("group_call_update", e),
            e
          );
        }
        startConnectingSound() {
          this.stopConnectingSound(),
            this.audioAsset.playSoundWithTimeout(
              "group_call_connect.mp3",
              !0,
              2500
            );
        }
        stopConnectingSound() {
          this.audioAsset.stopSound(), this.audioAsset.cancelDelayedPlay();
        }
        setCurrentGroupCall(e) {
          (this.currentGroupCall = e),
            e && I.default.dispatchEvent("group_call_instance", e);
        }
        createGroupCall(e, t, s) {
          return w(this, void 0, void 0, function* () {
            const i = yield _.a.invokeApi("phone.createGroupCall", {
              peer: M.a.getInputPeerById(e.toPeerId(!0)),
              random_id: Object(r.a)(32),
              schedule_date: t,
              title: s,
            });
            P.a.processUpdateMessage(i);
            return i.updates.find((e) => "updateGroupCall" === e._).call;
          });
        }
        joinGroupCall(e, t, s = !0, i, a) {
          return w(this, void 0, void 0, function* () {
            let n;
            return (
              this.audioAsset.createAudio(),
              this.log(
                `joinGroupCall chatId=${e} id=${t} muted=${s} rejoin=${i}`
              ),
              (n = i
                ? this.currentGroupCall.connections.main.streamManager
                : yield (function (e, t) {
                    return f(this, void 0, void 0, function* () {
                      const s = {
                          audio: Object(u.a)(),
                          video: t && Object(g.a)(),
                        },
                        i = new h.a(l.b);
                      try {
                        const t = yield Object(p.a)(s, e);
                        i.addStream(t, "input");
                      } catch (e) {
                        console.error("joinGroupCall getStream error", e, s),
                          (i.inputStream = new MediaStream());
                      }
                      return i;
                    });
                  })(s, a)),
              this.joinGroupCallInternal(e, t, n, s, i, a)
            );
          });
        }
        joinGroupCallInternal(e, t, s, i, a = !1, n) {
          return w(this, void 0, void 0, function* () {
            const r = this.log.bindPrefix("joinGroupCallInternal");
            r("start", t);
            let { currentGroupCall: o } = this;
            if (!o || !a) {
              (o = new d.a({ chatId: e, id: t })),
                o.fixSafariAudio(),
                o.addEventListener("state", (e) => {
                  this.currentGroupCall === o &&
                    e === c.a.CLOSED &&
                    (this.setCurrentGroupCall(null),
                    this.stopConnectingSound(),
                    this.audioAsset.playSound("group_call_end.mp3"),
                    I.default.dispatchEvent("chat_update", o.chatId));
                }),
                (o.groupCall = yield this.getGroupCallFull(t));
              const l = o.createConnectionInstance({
                  streamManager: s,
                  type: "main",
                  options: {
                    type: "main",
                    isMuted: i,
                    joinVideo: n,
                    rejoin: a,
                  },
                }),
                h = l.createPeerConnection();
              return (
                h.addEventListener("negotiationneeded", () => {
                  l.negotiate();
                }),
                h.addEventListener("track", (e) => {
                  r("ontrack", e), o.onTrack(e);
                }),
                h.addEventListener("iceconnectionstatechange", () => {
                  o.dispatchEvent("state", o.state);
                  const { iceConnectionState: e } = h;
                  switch (
                    ("disconnected" === e || "checking" === e || "new" === e
                      ? this.startConnectingSound()
                      : this.stopConnectingSound(),
                    e)
                  ) {
                    case "checking":
                      break;
                    case "closed":
                      o.hangUp();
                      break;
                    case "completed":
                      break;
                    case "connected":
                      o.joined ||
                        ((o.joined = !0),
                        this.audioAsset.playSound("group_call_start.mp3"),
                        this.getGroupCallParticipants(t).then(
                          ({ participants: e }) => {
                            this.saveApiParticipants(t, [...e.values()]);
                          }
                        ));
                      break;
                    case "disconnected":
                      break;
                    case "failed":
                      o.hangUp();
                  }
                }),
                l.createDescription(),
                l.createDataChannel(),
                l.appendStreamToConference(),
                this.setCurrentGroupCall(o),
                r("set currentGroupCall", t, o),
                this.startConnectingSound(),
                l.negotiate()
              );
            }
            (o.handleUpdateGroupCallParticipants = !1),
              (o.updatingSdp = !1),
              r("update currentGroupCall", t, o);
          });
        }
        getGroupCallInput(e) {
          const t = this.getGroupCall(e);
          return { _: "inputGroupCall", id: t.id, access_hash: t.access_hash };
        }
        generateSelfVideo(e, t) {
          return (
            e && {
              _: "groupCallParticipantVideo",
              pFlags: {},
              endpoint: "",
              source_groups: e.sourceGroups,
              audio_source: t,
            }
          );
        }
        generateSelfParticipant() {
          var e, t;
          const s = this.currentGroupCall.connections.main.sources,
            i =
              null === (e = this.currentGroupCall.connections.presentation) ||
              void 0 === e
                ? void 0
                : e.sources;
          return {
            _: "groupCallParticipant",
            pFlags: { can_self_unmute: !0, self: !0 },
            source: s.audio.source,
            video: this.generateSelfVideo(s.video),
            presentation:
              i &&
              this.generateSelfVideo(
                i.video,
                null === (t = i.audio) || void 0 === t ? void 0 : t.source
              ),
            date: Object(o.a)(!0),
            peer: M.a.getOutputPeer(I.default.myId),
          };
        }
        makeSsrcFromParticipant(e, t, s, i) {
          return Object(m.c)(t, s, i);
        }
        getGroupCallParticipants(e) {
          return w(this, void 0, void 0, function* () {
            const { nextOffset: t, setNextOffset: s } =
              this.prepareToSavingNextOffset(e);
            return (
              "" !== t &&
                (yield _.a.invokeApiSingleProcess({
                  method: "phone.getGroupParticipants",
                  params: {
                    call: this.getGroupCallInput(e),
                    ids: [],
                    sources: [],
                    offset: t || "",
                    limit: 100,
                  },
                  processResult: (t) => {
                    const i =
                      t.count === t.participants.length ? "" : t.next_offset;
                    S.a.saveApiChats(t.chats),
                      b.a.saveApiUsers(t.users),
                      this.saveApiParticipants(e, t.participants),
                      s(i);
                  },
                })),
              {
                participants: this.getCachedParticipants(e),
                isEnd: "" === this.nextOffsets.get(e),
              }
            );
          });
        }
        hangUp(e, t = !1, s = !1) {
          return w(this, void 0, void 0, function* () {
            this.log(`hangUp start id=${e} discard=${t} rejoin=${s}`);
            const { currentGroupCall: i } = this;
            (null == i ? void 0 : i.id) === e && i.hangUp(t, s);
          });
        }
        toggleMuted(e) {
          return this.changeUserMuted(y.c, e);
        }
        changeUserMuted(e, t) {
          const { currentGroupCall: s } = this;
          if (!s) return;
          const i = s.getParticipantByPeerId(e);
          return (
            y.c === e &&
              i.pFlags.can_self_unmute &&
              (t = void 0 === t ? !i.pFlags.muted : t),
            this.editParticipant(s.id, i, { muted: t })
          );
        }
      })();
      i.a && (i.a.appGroupCallsManager = C);
      t.a = C;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      }),
        s.d(t, "b", function () {
          return d;
        }),
        s.d(t, "c", function () {
          return c;
        });
      var i = s(159);
      const a = /[`~!@#$%^&*()\-_=+\[\]\\|{}'";:\/?.>,<]+/g,
        n = /^\s+|\s$/g;
      function r(e) {
        return e.replace(a, "").replace(n, "");
      }
      function o(e) {
        return e.replace(/[^A-Za-z0-9]/g, (e) => {
          const t = i.a.LatinizeMap[e];
          return void 0 !== t ? t : e;
        });
      }
      function d(e, t = !0) {
        const s = "%" === e.charAt(0);
        return (
          (e = r(e)),
          t && (e = o(e)),
          (e = e.toLowerCase()),
          s && (e = "%" + e),
          e
        );
      }
      function c(e, t = {}) {
        const s = t.includeTag && "%" === e.charAt(0);
        return (
          t.clearBadChars && (e = r(e)),
          t.latinize && (e = o(e)),
          t.ignoreCase && (e = e.toLowerCase()),
          s && (e = "%" + e),
          e
        );
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      }),
        s.d(t, "b", function () {
          return n;
        });
      var i,
        a = s(30);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Top = 1)] = "Top"),
          (e[(e.Bottom = 2)] = "Bottom"),
          (e[(e.Both = 3)] = "Both");
      })(i || (i = {}));
      class n {
        constructor() {
          this.sliceConstructor = n.getSliceConstructor(this);
          const e = this.constructSlice();
          this.slices = [e];
        }
        static getSliceConstructor(e) {
          return class extends Array {
            constructor() {
              super(...arguments), (this.end = i.None);
            }
            isEnd(t) {
              if ((this.end & t) === t) return !0;
              let s = !1;
              if (t === i.Top) {
                const i = e.last;
                s = !!(i.end & t) && this.includes(i[i.length - 1]);
              } else if (t === i.Bottom) {
                const i = e.first;
                s = !!(i.end & t) && this.includes(i[0]);
              } else if (t === i.Both)
                return this.isEnd(i.Top) && this.isEnd(i.Bottom);
              return s && this.setEnd(t), s;
            }
            setEnd(e) {
              this.end |= e;
            }
            unsetEnd(e) {
              this.end &= ~e;
            }
            splice(t, s, ...a) {
              const n = super.splice(t, s, ...a);
              if (!this.length) {
                const t = e.slices,
                  s = t.indexOf(this);
                -1 !== s &&
                  (1 === t.length ? this.unsetEnd(i.Both) : t.splice(s, 1));
              }
              return n;
            }
          };
        }
        constructSlice(...e) {
          const t = new this.sliceConstructor(e.length);
          for (let s = 0, i = e.length; s < i; ++s) t[s] = e[s];
          return t;
        }
        insertSlice(e, t = !0) {
          if (!e.length) return;
          const s = this.slices[0];
          if (!s.length) return s.push(...e), s;
          const i = e[e.length - 1],
            a = e[0];
          let n,
            r = -1,
            o = -1,
            d = 0;
          for (
            ;
            d < this.slices.length &&
            ((n = this.slices[d]),
            (r = n.indexOf(i)),
            (o = n.indexOf(a)),
            -1 === o || -1 === r) &&
            -1 === o &&
            -1 === r;
            ++d
          );
          if (-1 !== o && -1 !== r);
          else if (-1 !== o) {
            const t = e.slice(n.length - o);
            n.push(...t);
          } else if (-1 !== r) {
            const t = e.slice(0, e.length - r - 1);
            n.unshift(...t);
          } else {
            let t = 0;
            for (const s = this.slices.length; t < s; ++t) {
              const s = this.slices[t];
              if (e[0] > s[0]) break;
            }
            this.slices.splice(t, 0, this.constructSlice(...e)), (d = t);
          }
          return t ? this.flatten(d) : void 0;
        }
        flatten(e) {
          if (this.slices.length >= 2)
            for (let t = 0, s = this.slices.length; t < s - 1; ++t) {
              const i = this.slices[t],
                a = this.slices[t + 1];
              -1 !== i.indexOf(a[0]) &&
                (i.setEnd(a.end),
                this.slices.splice(t + 1, 1),
                t < e && --e,
                --s,
                --t,
                this.insertSlice(a, !1));
            }
          return this.slices[e];
        }
        get first() {
          return this.slices[0];
        }
        get last() {
          return this.slices[this.slices.length - 1];
        }
        get slice() {
          return this.first;
        }
        get length() {
          return this.slice.length;
        }
        findSlice(e) {
          for (let t = 0, s = this.slices.length; t < s; ++t) {
            const s = this.slices[t],
              i = s.indexOf(e);
            if (-1 !== i) return { slice: s, index: i };
          }
        }
        findSliceOffset(e) {
          let t;
          for (let s = 0; s < this.slices.length; ++s) {
            let i = 0;
            if (((t = this.slices[s]), !(t.length < 2)))
              for (; i < t.length; i++)
                if (e >= t[i])
                  return { slice: t, offset: e === t[i] ? i : i - 1 };
          }
          if (t && t.isEnd(i.Top)) return { slice: t, offset: t.length };
        }
        sliceMe(e, t, s) {
          let a = this.slice,
            n = 0,
            r = 0;
          if (e) {
            const t = this.findSliceOffset(e);
            if (!t) return;
            (a = t.slice), (n = r = t.offset), a.includes(e) && (r += 1);
          }
          let o = Math.max(r + t, 0),
            d = r + t + s;
          const c = a.slice(o, d),
            l = t < 0 ? s + t : s,
            h = Math.abs(t),
            u =
              a.length - r >= l || (!!a.isEnd(i.Top) && (c.setEnd(i.Top), !0)),
            p = r - h >= 0 || (!!a.isEnd(i.Bottom) && (c.setEnd(i.Bottom), !0));
          return {
            slice: c,
            offsetIdOffset: n,
            fulfilled:
              i.None |
              (u && p
                ? i.Both
                : (u ? i.Top : i.None) | (p ? i.Bottom : i.None)),
          };
        }
        unshift(...e) {
          let t = this.first;
          t.length
            ? t.isEnd(i.Bottom) ||
              ((t = this.constructSlice()),
              t.setEnd(i.Bottom),
              this.slices.unshift(t))
            : t.setEnd(i.Bottom),
            t.unshift(...e);
        }
        push(...e) {
          let t = this.last;
          t.length
            ? t.isEnd(i.Top) ||
              ((t = this.constructSlice()),
              t.setEnd(i.Top),
              this.slices.push(t))
            : t.setEnd(i.Top),
            t.push(...e);
        }
        delete(e) {
          const t = this.findSlice(e);
          return !!t && (t.slice.splice(t.index, 1), !0);
        }
      }
      a.a && (a.a.SlicedArray = n);
    },
    function (e, t, s) {
      "use strict";
      function i(e, t, s, i) {
        const a = t[s];
        if (void 0 === i && -1 !== (i = e.indexOf(t))) {
          const t = e[i - 1],
            n = e[i + 1];
          if ((!t || t[s] >= a) && (!n || n[s] <= a)) return i;
          e.splice(i, 1);
        }
        const n = e.length;
        if (!n || a <= e[n - 1][s]) return e.push(t) - 1;
        if (a >= e[0][s]) return e.unshift(t), 0;
        for (let i = 0; i < n; i++)
          if (a > e[i][s]) return e.splice(i, 0, t), i;
        return console.error("wtf", e, t), e.indexOf(t);
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(53),
        n = s(41),
        r = s(32),
        o = s(31),
        d = s(15),
        c = s(65),
        l = s(102),
        h = s(39),
        u = s(40),
        p = s(37);
      const g = new (class {
        constructor() {
          (this.polls = {}),
            (this.results = {}),
            (this.pollToMessages = {}),
            (this.log = Object(n.b)("POLLS", n.a.Error)),
            d.default.addMultipleEventsListeners({
              updateMessagePoll: (e) => {
                this.log("updateMessagePoll:", e);
                let t = e.poll || this.polls[e.poll_id];
                if (!t) return;
                let s = e.results;
                const i = this.savePoll(t, s);
                (t = i.poll),
                  (s = i.results),
                  d.default.dispatchEvent("poll_update", {
                    poll: t,
                    results: s,
                  });
              },
            });
        }
        savePoll(e, t, s) {
          s && this.updatePollToMessage(s, !0);
          const i = e.id;
          return (
            this.polls[i]
              ? ((e = Object.assign(this.polls[i], e)),
                (t = this.saveResults(e, t)))
              : ((this.polls[i] = e),
                (e.rQuestion = o.a.wrapEmojiText(e.question)),
                (e.rReply =
                  o.a.wrapEmojiText("ðŸ“Š") + " " + (e.rQuestion || "poll")),
                (e.chosenIndexes = []),
                (t = this.saveResults(e, t))),
            { poll: e, results: t }
          );
        }
        saveResults(e, t) {
          var s;
          return (
            this.results[e.id]
              ? (t = Object.assign(this.results[e.id], t))
              : (this.results[e.id] = t),
            t.pFlags.min ||
              ((e.chosenIndexes.length = 0),
              (null === (s = null == t ? void 0 : t.results) || void 0 === s
                ? void 0
                : s.length) &&
                t.results.forEach((t, s) => {
                  var i;
                  (null === (i = t.pFlags) || void 0 === i
                    ? void 0
                    : i.chosen) && e.chosenIndexes.push(s);
                })),
            t
          );
        }
        getPoll(e) {
          return { poll: this.polls[e], results: this.results[e] };
        }
        getInputMediaPoll(e, t, s, i) {
          return (
            s ? (i || (i = []), (s = o.a.parseMarkdown(s, i))) : (s = void 0),
            {
              _: "inputMediaPoll",
              poll: e,
              correct_answers: t,
              solution: s,
              solution_entities: s ? i : void 0,
            }
          );
        }
        updatePollToMessage(e, t) {
          const { id: s } = e.media.poll;
          let i = this.pollToMessages[s];
          if (!t && !i) return;
          i || (i = this.pollToMessages[s] = new Set());
          const a = e.peerId + "_" + e.mid;
          t ? i.add(a) : i.delete(a),
            t ||
              i.size ||
              (delete this.polls[s],
              delete this.results[s],
              delete this.pollToMessages[s]);
        }
        sendVote(e, t) {
          const s = e.media.poll,
            i = t.map((e) => s.answers[e].option),
            a = e.mid,
            n = e.peerId,
            o = u.a.getInputPeerById(n);
          return e.pFlags.is_outgoing
            ? h.a.invokeAfterMessageIsSent(
                a,
                "sendVote",
                (e) => (
                  this.log("invoke sendVote callback"), this.sendVote(e, t)
                )
              )
            : r.a
                .invokeApi("messages.sendVote", {
                  peer: o,
                  msg_id: l.a.getServerMessageId(e.mid),
                  options: i,
                })
                .then((e) => {
                  this.log("sendVote updates:", e), c.a.processUpdateMessage(e);
                });
        }
        getResults(e) {
          const t = u.a.getInputPeerById(e.peerId);
          return r.a
            .invokeApi("messages.getPollResults", {
              peer: t,
              msg_id: l.a.getServerMessageId(e.mid),
            })
            .then((e) => {
              c.a.processUpdateMessage(e), this.log("getResults updates:", e);
            });
        }
        getVotes(e, t, s, i = 20) {
          return r.a
            .invokeApi("messages.getPollVotes", {
              peer: u.a.getInputPeerById(e.peerId),
              id: l.a.getServerMessageId(e.mid),
              option: t,
              offset: s,
              limit: i,
            })
            .then(
              (e) => (
                this.log("getPollVotes messages:", e),
                p.a.saveApiUsers(e.users),
                e
              )
            );
        }
        stopPoll(e) {
          const t = e.media.poll;
          if (t.pFlags.closed) return Promise.resolve();
          const s = Object(a.a)(t);
          return (
            (s.pFlags.closed = !0),
            h.a
              .editMessage(e, void 0, { newMedia: this.getInputMediaPoll(s) })
              .then(
                () => {},
                (e) => {
                  this.log.error("stopPoll error:", e);
                }
              )
          );
        }
      })();
      (i.a.appPollsManager = g), (t.a = g);
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var i = s(82);
      function a(e) {
        e.stop(), Object(i.a)(e, "ended");
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return l;
      });
      var i = s(41),
        a = s(15),
        n = s(164),
        r = s(152),
        o = s(165),
        d = s(154);
      class c {
        constructor(e, t) {
          const s = (this.streamSource = e.createMediaStreamSource(t)),
            i = (this.analyser = e.createAnalyser());
          this.gain = e.createGain();
          (i.minDecibels = -100),
            (i.maxDecibels = -30),
            (i.smoothingTimeConstant = 0.05),
            (i.fftSize = 1024),
            s.connect(i);
        }
      }
      class l {
        constructor(e) {
          (this.interval = e),
            (this.getAmplitude = (e) => {
              const {
                  streamAnalyser: t,
                  stream: s,
                  track: i,
                  source: a,
                  type: n,
                } = e,
                r = t.analyser;
              if (!r) return;
              const o = new Uint8Array(r.frequencyBinCount);
              r.getByteFrequencyData(o);
              return {
                type: n,
                source: a,
                stream: s,
                track: i,
                value: Object(d.b)(o),
              };
            }),
            (this.analyse = () => {
              const e = this.counter % 3 == 0,
                t = (
                  e ? this.items : this.items.filter((e) => "input" === e.type)
                )
                  .filter((e) => "audio" === e.kind)
                  .slice(0, n.a)
                  .map(this.getAmplitude);
              ++this.counter >= 1e3 && (this.counter = 0),
                a.default.dispatchEvent("group_call_amplitude", {
                  amplitudes: t,
                  type: e ? "all" : "input",
                });
            }),
            (this.context = new (window.AudioContext ||
              window.webkitAudioContext)()),
            (this.items = []),
            (this.outputStream = new MediaStream()),
            (this.inputStream = new MediaStream()),
            (this.counter = 0),
            (this.log = Object(i.b)("SM")),
            (this.direction = "sendonly"),
            (this.canCreateConferenceEntry = !0),
            (this.types = ["audio", "video"]);
        }
        addStream(e, t) {
          e.getTracks().forEach((s) => {
            this.addTrack(e, s, t);
          });
        }
        addTrack(e, t, s) {
          this.log("addTrack", s, t, e);
          const {
              context: i,
              items: a,
              inputStream: n,
              outputStream: r,
            } = this,
            o = t.kind,
            d = l.getSource(e, s);
          switch (s) {
            case "input":
              n ? n.addTrack(t) : (this.inputStream = e);
              break;
            case "output":
              for (let e = 0; e < a.length; ++e) {
                const { track: t, type: s, source: i } = a[e];
                if (i === d && "input" === s) {
                  a.splice(e, 1), r.removeTrack(t);
                  break;
                }
              }
              "video" !== o && r.addTrack(t);
          }
          this.finalizeAddingTrack({
            type: s,
            source: d,
            stream: e,
            track: t,
            kind: o,
            streamAnalyser: "audio" === o ? new c(i, e) : void 0,
          }),
            "audio" === o && this.interval && this.changeTimer();
        }
        finalizeAddingTrack(e) {
          const { track: t } = e;
          t.addEventListener(
            "ended",
            () => {
              this.removeTrack(t);
            },
            { once: !0 }
          ),
            this.items.push(e);
        }
        hasInputTrackKind(e) {
          return this.items.find((t) => "input" === t.type && t.kind === e);
        }
        static getSource(e, t) {
          return "input" === t
            ? e.source || e.id
            : "" + Object(d.c)(+e.id.substring(6));
        }
        removeTrack(e) {
          this.log("removeTrack", e);
          const { items: t } = this;
          let s = !1;
          for (let i = 0, a = t.length; !s && i < a; ++i) {
            const { track: a, type: n } = t[i];
            switch (n) {
              case "output":
                a === e &&
                  (t.splice(i, 1), this.outputStream.removeTrack(e), (s = !0));
                break;
              case "input":
                a === e &&
                  (t.splice(i, 1), this.inputStream.removeTrack(e), (s = !0));
            }
          }
          "audio" === e.kind && this.interval && this.changeTimer();
        }
        replaceInputAudio(e, t) {
          this.removeTrack(t), this.addStream(e, "input");
        }
        changeTimer() {
          void 0 !== this.timer && clearInterval(this.timer),
            this.items.length &&
              (this.timer = window.setInterval(this.analyse, this.interval));
        }
        appendToConference(e) {
          if (this.locked) return;
          const {
              inputStream: t,
              direction: s,
              canCreateConferenceEntry: i,
            } = this,
            a = { direction: s, streams: [t] },
            n = this.types.map((e) => [e, a]),
            r = t.getTracks();
          for (const [t, a] of n) {
            let n = e.findEntry((e) => e.direction === s && e.type === t);
            if (!n) {
              if (!i) continue;
              n = e.createEntry(t);
            }
            let { transceiver: d } = n;
            d || (d = n.createTransceiver(e.connection, a)),
              n.direction !== d.direction && (d.direction = n.direction);
            const c = Object(o.c)(t),
              l = r.findIndex((e) => e.kind === c),
              h = -1 !== l ? r.splice(l, 1)[0] : void 0,
              u = d.sender;
            u.track !== h &&
              u.replaceTrack(h).catch((e) => {
                this.log.error(e);
              });
          }
        }
        stop() {
          try {
            this.inputStream
              .getTracks()
              .concat(this.outputStream.getTracks())
              .forEach((e) => {
                Object(r.a)(e);
              });
          } catch (e) {
            this.log.error(e);
          }
        }
      }
    },
    function (e, t, s) {
      "use strict";
      function i(e) {
        return e << 0;
      }
      function a(e) {
        return e >>> 0;
      }
      function n(e, t = 3) {
        if (!e) return 0;
        const { length: s } = e;
        let i = 0;
        for (let t = 0; t < s; ++t) i += e[t] * e[t];
        const a = Math.sqrt(i / s) / 255;
        return Math.min(1, a * t);
      }
      s.d(t, "c", function () {
        return i;
      }),
        s.d(t, "a", function () {
          return a;
        }),
        s.d(t, "b", function () {
          return n;
        });
    },
    function (e, t, s) {
      "use strict";
      function i(e, t = "asc") {
        if (!e) return [];
        const s =
          e instanceof Map ? [...e.keys()] : Object.keys(e).map((e) => +e);
        return "asc" === t ? s.sort((e, t) => e - t) : s.sort((e, t) => t - e);
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return f;
      });
      var i = s(52),
        a = s(83),
        n = s(45),
        r = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const o = [];
      let d = !1;
      function c(e, t = "push") {
        return e.items.length
          ? ((e.promise = Object(i.a)()),
            o[t](e),
            (function e() {
              if (!d) {
                (function (e) {
                  if (!e.items.length)
                    return e.promise.resolve([]), Promise.resolve([]);
                  const t = e.items.slice(),
                    s = [];
                  return new Promise((i, o) => {
                    const d = () =>
                      r(this, void 0, void 0, function* () {
                        const r = performance.now();
                        do {
                          yield Object(a.c)();
                          const i = e.process.apply(e.context, t.shift());
                          let n;
                          if (i instanceof Promise)
                            try {
                              n = yield i;
                            } catch (e) {
                              return void o(e);
                            }
                          else n = i;
                          s.push(n);
                        } while (t.length > 0 && performance.now() - r < 6);
                        t.length > 0 ? Object(n.b)(d) : i(s);
                      });
                    Object(n.b)(d);
                  }).then(e.promise.resolve, e.promise.reject);
                })(o.shift()).finally(() => {
                  (d = !1), o.length && e();
                });
              }
            })(),
            e.promise)
          : Promise.resolve([]);
      }
      const l =
        "filter" in (document.createElement("canvas").getContext("2d") || {});
      let h, u;
      function p(e, t, s) {
        return new Promise((i) => {
          const a = document.createElement("canvas");
          (a.width = e.width), (a.height = e.height);
          const n = a.getContext("2d", { alpha: !1 });
          l
            ? ((n.filter = `blur(${t}px)`),
              n.drawImage(e, 2 * -t, 2 * -t, a.width + 4 * t, a.height + 4 * t))
            : (n.drawImage(e, 0, 0), u(n, 0, 0, a.width, a.height, t, s)),
            i(a.toDataURL());
        });
      }
      h = l
        ? Promise.resolve()
        : s
            .e(31)
            .then(s.bind(null, 201))
            .then((e) => {
              u = e.default;
            });
      const g = new Map();
      function f(e, t = 2, s = 2) {
        if (!e)
          return console.error("no dataUri for blur", e), Promise.resolve(e);
        if ((g.size > 1e3 && g.clear(), g.has(e))) return g.get(e);
        const i = new Promise((i) => {
          h.then(() => {
            const a = new Image();
            (a.onload = () => {
              l
                ? p(a, t, s).then(i)
                : c(
                    { items: [[a, t, s]], context: null, process: p },
                    "unshift"
                  ).then((e) => {
                    i(e[0]);
                  });
            }),
              (a.src = e);
          });
        });
        return g.set(e, i), i;
      }
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e, t = " ") {
        const s = e.toString().split(".");
        return (s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, t)), s.join(".");
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      function i(e) {
        var t = document.createElement("template");
        return (e = e.trim()), (t.innerHTML = e), t.content;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var i = function (e, t, s, i) {
        return new (s || (s = Promise))(function (a, n) {
          function r(e) {
            try {
              d(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(r, o);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function a(e, t) {
        return i(this, void 0, void 0, function* () {
          const s = yield navigator.mediaDevices.getUserMedia(e);
          return (
            s.getTracks().forEach((e) => {
              e.enabled = !t;
            }),
            s
          );
        });
      }
      window.getStream = a;
    },
    function (e, t, s) {
      "use strict";
      function i() {
        return {
          width: { min: 1280, max: 1920 },
          height: { min: 720, max: 1080 },
          frameRate: { min: 24, max: 30 },
        };
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      }),
        s.d(t, "b", function () {
          return a;
        });
      const i = 50,
        a = 100;
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "c", function () {
          return o;
        }),
        s.d(t, "d", function () {
          return c;
        }),
        s.d(t, "a", function () {
          return l;
        });
      var i = s(0),
        a = s(184),
        n = s(154);
      const r = "9";
      function o(e) {
        return "screencast" === e ? "video" : e;
      }
      function d(e) {
        return "application" === e ? "DTLS/SCTP" : "UDP/TLS/RTP/SAVPF";
      }
      function c(e, t = r, s) {
        const i = d(e);
        return `m=${o(e)} ${t} ${i} ${s.join(" ")}`;
      }
      class l extends a.a {
        addCandidate(e) {
          return this.add(
            (function (e) {
              const t = [];
              return (
                t.push("a=candidate:"),
                t.push(
                  `${e.foundation} ${e.component} ${e.protocol.toUpperCase()} ${
                    e.priority
                  } ${e.ip} ${e.port} typ ${e.type}`
                ),
                void 0 !== e["rel-addr"] &&
                  t.push(` raddr ${e["rel-addr"]} rport ${e["rel-port"]}`),
                t.push(" generation " + e.generation),
                t.join("")
              );
            })(e)
          );
        }
        addHeader(e, t) {
          const s = t.join(" ");
          return this.add(
            "v=0",
            `o=- ${e} 2 IN IP4 0.0.0.0`,
            "s=-",
            "t=0 0",
            "a=extmap-allow-mixed",
            "a=group:BUNDLE " + s,
            "a=ice-options:trickle",
            "a=msid-semantic:WMS *"
          );
        }
        addTransport(e, t) {
          this.add(
            "a=ice-ufrag:" + e.ufrag,
            "a=ice-pwd:" + e.pwd,
            "a=ice-options:trickle"
          );
          for (const t of e.fingerprints)
            this.add(
              `a=fingerprint:${t.hash} ${t.fingerprint}`,
              "a=setup:" + t.setup
            );
          if (!t && e.candidates)
            for (const t of e.candidates) this.addCandidate(t);
          return this;
        }
        addSsrc(e) {
          let t = "stream",
            { type: s, sourceGroups: i } = e;
          const a = Object(n.a)(e.source);
          (t += a), (s += a);
          const r = (e) => {
            this.add(
              `a=ssrc:${e} cname:${t}`,
              `a=ssrc:${e} msid:${t} ${s}`,
              `a=ssrc:${e} mslabel:${t}`,
              `a=ssrc:${e} label:${s}`
            );
          };
          return (
            (() => {
              this.add(`a=msid:${t} ${s}`);
            })(),
            (null == i ? void 0 : i.length)
              ? i.forEach((e) => {
                  if (e.sources.length) {
                    const t = e.sources.map(n.a);
                    this.add(`a=ssrc-group:${e.semantics} ${t.join(" ")}`),
                      t.forEach(r);
                  }
                })
              : r(a),
            this
          );
        }
        addSsrcEntry(e, t, s) {
          const i = (...e) => this.add(...e),
            { type: a, mid: n, direction: r, port: l } = e,
            h = t.transport,
            u = "application" === a,
            p = u ? void 0 : t[a],
            g = "inactive" === r;
          if (e.shouldBeSkipped(s))
            return i(
              `m=${o(a)} 0 ${d(a)} 0`,
              "c=IN IP4 0.0.0.0",
              "a=inactive",
              "a=mid:" + n
            );
          const f = u ? [{ id: 5e3 }] : p["payload-types"],
            m = f.map((e) => e.id);
          i(c(a, l, m), "c=IN IP4 0.0.0.0", `a=rtcp:${l} IN IP4 0.0.0.0`),
            h["rtcp-mux"] && i("a=rtcp-mux"),
            i("a=mid:" + n);
          let v = r;
          if (
            ("sendrecv" === r ||
              !s ||
              g ||
              u ||
              (v = "sendonly" === r ? "recvonly" : "sendonly"),
            i("a=" + v),
            this.addTransport(h),
            u)
          )
            i(`a=sctpmap:${f[0].id} webrtc-datachannel 256`);
          else {
            const e = p["rtp-hdrexts"];
            (null == e ? void 0 : e.length) &&
              e.forEach((e) => {
                i(`a=extmap:${e.id} ${e.uri}`);
              }),
              f.forEach((e) => {
                i(
                  `a=rtpmap:${e.id} ${e.name}/${e.clockrate}${
                    e.channels && e.channels > 1 ? "/" + e.channels : ""
                  }`
                );
                const t = e.parameters;
                if (Array.isArray(t))
                  t.length && console.error("parameters is array???", t);
                else if (t && Object.keys(t).length) {
                  const s = [];
                  for (const e in t) s.push(`${e}=${t[e]}`);
                  i(`a=fmtp:${e.id} ${s.join(";")}`);
                }
                const s = e["rtcp-fbs"];
                (null == s ? void 0 : s.length) &&
                  s.forEach((t) => {
                    i(
                      `a=rtcp-fb:${e.id} ${t.type}${
                        t.subtype ? " " + t.subtype : ""
                      }`
                    );
                  });
              });
          }
          return (
            !e.source ||
              ("sendonly" !== v && "sendrecv" !== v) ||
              this.addSsrc(e),
            this
          );
        }
        addConference(e) {
          const { conference: t, entries: s, bundle: a, isAnswer: n } = e;
          this.addHeader(t.sessionId, a),
            i.IS_FIREFOX && this.addTransport(t.transport);
          for (const e of s)
            this.addSsrcEntry(
              (n ? e.recvEntry || e.sendEntry : e.sendEntry || e.recvEntry) ||
                e,
              t,
              n
            );
          return this;
        }
        static fromConference(e) {
          return new l().addConference(e).finalize();
        }
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return re;
      }),
        s.d(t, "a", function () {
          return de;
        });
      var i,
        a,
        n = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        r = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class o {
        constructor(e, t) {
          i.set(this, void 0),
            a.set(this, void 0),
            n(this, i, e, "f"),
            n(this, a, t, "f");
        }
        get session() {
          return r(this, i, "f");
        }
        get media() {
          return r(this, a, "f");
        }
        get bundle() {
          return this.session.lines
            .find((e) => {
              var t;
              return (
                "group" ===
                (null === (t = e.parsed) || void 0 === t ? void 0 : t.key)
              );
            })
            .value.split(" ")
            .slice(1);
        }
        toString() {
          return (
            this.session.lines
              .concat(...this.media.map((e) => e.lines))
              .map((e) => e.toString())
              .join("\r\n") + "\r\n"
          );
        }
      }
      function d(e, t, s) {
        const i = e.split(t),
          a = [];
        for (; s > 0 && i.length; ) a.push(i.shift()), --s;
        return i.length && a.push(i.join(t)), a;
      }
      (i = new WeakMap()), (a = new WeakMap());
      var c,
        l,
        h,
        u = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        p = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class g {
        constructor(e, t) {
          c.set(this, void 0),
            l.set(this, void 0),
            h.set(this, void 0),
            u(this, c, new Set(), "f"),
            u(this, l, e, "f"),
            u(this, h, t, "f");
        }
        generate() {
          const e = p(this, l, "f"),
            t = p(this, h, "f"),
            s = p(this, c, "f"),
            i = t - e + 1;
          let a = Math.floor(e + i * Math.random()),
            n = 0;
          for (; s.has(a); ) if ((a < t ? ++a : (a = e), ++n >= i)) return null;
          return s.add(a), a;
        }
        add(e) {
          p(this, c, "f").add(e);
        }
      }
      (c = new WeakMap()), (l = new WeakMap()), (h = new WeakMap());
      var f,
        m,
        v = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        _ = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class y {
        constructor(e, t) {
          f.set(this, void 0),
            m.set(this, void 0),
            v(this, f, e, "f"),
            v(this, m, t, "f");
        }
        get key() {
          return _(this, f, "f");
        }
        get value() {
          return _(this, m, "f");
        }
      }
      (f = new WeakMap()), (m = new WeakMap());
      var I,
        P,
        S,
        M,
        b = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        w = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class C {
        constructor(e, t, s, i) {
          I.set(this, void 0),
            P.set(this, void 0),
            S.set(this, void 0),
            M.set(this, void 0),
            b(this, I, e, "f"),
            b(this, P, t, "f"),
            b(this, S, s, "f"),
            b(this, M, i, "f");
        }
        get type() {
          return w(this, I, "f");
        }
        get port() {
          return w(this, P, "f");
        }
        get protocol() {
          return w(this, S, "f");
        }
        get ids() {
          return w(this, M, "f");
        }
        toString() {
          return (
            this.type +
            " " +
            this.port +
            " " +
            this.protocol +
            " " +
            this.ids.join(" ")
          );
        }
      }
      (I = new WeakMap()),
        (P = new WeakMap()),
        (S = new WeakMap()),
        (M = new WeakMap());
      var k,
        E,
        A,
        D,
        T = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        U = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class F {
        constructor(e, t) {
          if (
            (k.set(this, void 0),
            E.set(this, void 0),
            A.set(this, void 0),
            D.set(this, void 0),
            T(this, k, e, "f"),
            "string" == typeof t)
          ) {
            if ((T(this, E, t, "f"), "m" === e)) {
              const e = t.split(" ");
              T(this, A, new C(e[0], e[1], e[2], e.slice(3)), "f");
            } else if ("a" === e) {
              const e = d(t, ":", 1);
              (t = e[0]),
                T(
                  this,
                  D,
                  1 === e.length ? new y(t, null) : new y(t, e[1]),
                  "f"
                );
            }
          } else
            t instanceof C
              ? (T(this, A, t, "f"), T(this, E, t.toString(), "f"))
              : t instanceof y &&
                (T(this, D, t, "f"),
                T(this, E, t.value ? `${t.key}:${t.value}` : t.key, "f"));
        }
        get key() {
          return U(this, k, "f");
        }
        get value() {
          return U(this, E, "f");
        }
        get parsed() {
          return U(this, D, "f");
        }
        get mediaLineParts() {
          return U(this, A, "f");
        }
        toString() {
          return `${this.key}=${this.value}`;
        }
      }
      (k = new WeakMap()),
        (E = new WeakMap()),
        (A = new WeakMap()),
        (D = new WeakMap());
      var O,
        x,
        j,
        L,
        R,
        B,
        N = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        H = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class G {
        constructor(e, t, s = ":", i = !1) {
          O.set(this, void 0),
            x.set(this, void 0),
            j.set(this, void 0),
            L.set(this, void 0),
            R.set(this, void 0),
            B.set(this, void 0),
            N(this, O, e, "f"),
            N(this, x, t, "f"),
            N(this, j, s, "f"),
            N(this, R, i, "f"),
            N(this, L, i ? new Map() : null, "f"),
            N(this, B, i ? [] : null, "f");
        }
        get lines() {
          return H(this, x, "f");
        }
        get value() {
          return H(this, R, "f") || !this.lines.length ? null : this.lines[0];
        }
        get exists() {
          return !H(this, R, "f");
        }
        get key() {
          return H(this, O, "f");
        }
        get keys() {
          return G.fill(this), H(this, B, "f");
        }
        forEach(e) {
          G.fill(this), H(this, L, "f").forEach(e);
        }
        get(e) {
          return G.fill(this), H(this, L, "f").get(e) || new G(e, [], ":", !0);
        }
        static fill(e) {
          if (null !== H(e, L, "f")) return;
          const t = new Map();
          e.lines.forEach((s) => {
            const [i, a] = d(s, H(e, j, "f"), 1),
              n = t.get(i) || [];
            t.set(i, [...n, a || ""]);
          });
          const s = N(e, L, G.makeAttributes(t), "f");
          N(e, B, Array.from(s.keys()), "f");
        }
        static makeAttributes(e) {
          const t = new Map();
          return (
            e.forEach((e, s) => {
              t.set(s, new G(s, e));
            }),
            t
          );
        }
      }
      (O = new WeakMap()),
        (x = new WeakMap()),
        (j = new WeakMap()),
        (L = new WeakMap()),
        (R = new WeakMap()),
        (B = new WeakMap());
      var z,
        q,
        V = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        W = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class $ {
        constructor(e) {
          z.set(this, void 0),
            q.set(this, void 0),
            V(this, z, e, "f"),
            V(this, q, new Map(), "f"),
            $.fillAttributes(this);
        }
        get(e) {
          return W(this, q, "f").get(e) || new G(e, [], " ", !0);
        }
        static fillAttributes(e) {
          const t = new Map();
          W(e, z, "f").forEach((e) => {
            if ("a" === e.key) {
              const { key: s, value: i } = e.parsed;
              let a = t.get(s);
              a || ((a = []), t.set(s, a)), a.push(i || "");
            }
          }),
            t.forEach((t, s) => {
              W(e, q, "f").set(s, new G(s, t, " ", !1));
            });
        }
      }
      (z = new WeakMap()), (q = new WeakMap());
      var K,
        Q,
        J,
        Y,
        X = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        Z = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class ee {
        constructor(e) {
          K.set(this, void 0),
            Q.set(this, void 0),
            J.set(this, void 0),
            Y.set(this, void 0),
            X(this, K, e, "f"),
            X(this, Q, e[0], "f"),
            X(this, J, X(this, Y, null, "f"), "f");
        }
        get lines() {
          return Z(this, K, "f");
        }
        get mediaLine() {
          return Z(this, Q, "f");
        }
        get mediaLineParts() {
          return Z(this, Q, "f").mediaLineParts;
        }
        get mediaType() {
          return this.mediaLineParts.type;
        }
        get direction() {
          if (!Z(this, Y, "f")) {
            const e = this.attributes;
            let t;
            (t = e.get("sendonly").exists
              ? "sendonly"
              : e.get("recvonly").exists
              ? "recvonly"
              : e.get("inactive").exists
              ? "inactive"
              : "sendrecv"),
              X(this, Y, t, "f");
          }
          return Z(this, Y, "f");
        }
        get isSending() {
          return "sendrecv" === this.direction || "sendonly" === this.direction;
        }
        get isReceiving() {
          return "sendrecv" === this.direction || "recvonly" === this.direction;
        }
        get attributes() {
          return (
            Z(this, J, "f") || X(this, J, new $(this.lines), "f"),
            Z(this, J, "f")
          );
        }
        get mid() {
          return this.attributes.get("mid").value;
        }
        lookupAttributeKeys(e) {
          const t = {};
          for (const s in e) {
            const i = this.attributes.get(s),
              a = !e[s];
            t[s] = i ? (a ? i.lines : i.value) : a ? [] : void 0;
          }
          return t;
        }
      }
      (K = new WeakMap()),
        (Q = new WeakMap()),
        (J = new WeakMap()),
        (Y = new WeakMap());
      var te,
        se,
        ie = function (e, t, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, s) : a ? (a.value = s) : t.set(e, s), s;
        },
        ae = function (e, t, s, i) {
          if ("a" === s && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === s ? i : "a" === s ? i.call(e) : i ? i.value : t.get(e);
        };
      class ne {
        constructor(e) {
          te.set(this, void 0),
            se.set(this, void 0),
            ie(this, te, e, "f"),
            ie(
              this,
              se,
              e
                .filter((e) => "o" === e.key)
                .map((e) => e.value.split(" ")[1])[0],
              "f"
            );
        }
        get lines() {
          return ae(this, te, "f");
        }
        get sessionId() {
          return ae(this, se, "f");
        }
      }
      function re(e) {
        function t() {
          s ? i.push(new ee(a)) : (s = new ne(a));
        }
        let s = null,
          i = [],
          a = [];
        return (
          e.split(/\r?\n/).forEach((e) => {
            if (
              !(function (e) {
                return /^[\s\xa0]*$/.test(e);
              })(e)
            ) {
              const s = oe(e);
              "m" === s.key && (t(), (a = [])), a.push(s);
            }
          }),
          t(),
          new o(s, i)
        );
      }
      function oe(e) {
        const t = d(e, "=", 1);
        return new F(t[0], t[1]);
      }
      function de(e) {
        let t;
        return (
          e.media.forEach((s, i) => {
            if (
              "video" === s.mediaType &&
              s.isSending &&
              !s.attributes.get("ssrc-group").get("SIM").exists
            ) {
              t || (t = new g(2, 4294967295));
              const a = s.attributes
                  .get("ssrc-group")
                  .get("FID")
                  .value.split(" "),
                n = s.lines;
              a.forEach((e) => t.add(+e));
              const r = [a[0], t.generate(), t.generate()],
                o = [a[1], t.generate(), t.generate()];
              n.push(oe("a=ssrc-group:SIM " + r.join(" ")));
              const d = s.attributes.get("ssrc").get(a[0]).lines;
              r.forEach((e, t) => {
                const s = o[t];
                t > 0 &&
                  (n.push(oe("a=ssrc-group:FID " + e + " " + s)),
                  d.forEach((t) => {
                    n.push(oe("a=ssrc:" + e + " " + t));
                  }),
                  d.forEach((e) => {
                    n.push(oe("a=ssrc:" + s + " " + e));
                  }));
              }),
                (e.media[i] = new ee(n));
            }
          }),
          !!t
        );
      }
      (te = new WeakMap()), (se = new WeakMap());
    },
    function (e, t, s) {
      "use strict";
      var i = s(39),
        a = s(66),
        n = s(30),
        r = s(32),
        o = s(80),
        d = s(41);
      function c(e) {
        const t = e.length,
          s = new Array(t);
        for (let i = 0; i < t; ++i)
          s[i] = (e[i] < 16 ? "0" : "") + (e[i] || 0).toString(16);
        return s.join("");
      }
      var l = s(87);
      const h = new (class {
        constructor() {
          (this.contexts = new Map()),
            (this.links = {}),
            (this.log = Object(d.b)("RD", void 0, !0)),
            r.a.addTaskListener("refreshReference", (e) => {
              const t = e.payload;
              Object(o.a)(e),
                (e.originalPayload = t),
                this.refreshReference(t)
                  .then(
                    (t) => {
                      e.payload = t;
                    },
                    (t) => {
                      e.error = t;
                    }
                  )
                  .then(() => r.a.postMessage(e));
            });
        }
        saveContext(e, t, s) {
          ([s, e] = this.getContexts(e)),
            s || ((s = new Set()), this.contexts.set(e, s)),
            (this.links[c(e)] = e);
          for (const e of s) if (Object(l.a)(e, t)) return;
          s.add(t);
        }
        getReferenceByLink(e) {
          return this.links[c(e)];
        }
        getContexts(e) {
          return [
            this.contexts.get(e) ||
              ((e = this.getReferenceByLink(e) || e), this.contexts.get(e)),
            e,
          ];
        }
        getContext(e) {
          const t = this.getContexts(e);
          return t[0] ? [t[0].values().next().value, t[1]] : void 0;
        }
        deleteContext(e, t, s) {
          if ((([s, e] = this.getContexts(e)), s))
            for (const i of s)
              if (Object(l.a)(i, t))
                return (
                  s.delete(i),
                  s.size || (this.contexts.delete(e), delete this.links[c(e)]),
                  !0
                );
          return !1;
        }
        refreshReference(e, t) {
          if ((this.log("refreshReference: start", e.slice(), t), !t)) {
            const s = this.getContext(e);
            if (!s)
              return (
                this.log(
                  "refreshReference: got no context for reference:",
                  e.slice()
                ),
                Promise.reject("NO_CONTEXT")
              );
            [t, e] = s;
          }
          let s;
          switch (null == t ? void 0 : t.type) {
            case "message":
              s = i.a.wrapSingleMessage(t.peerId, t.messageId, !0);
              break;
            case "emojiesSounds":
              s =
                this.refreshEmojiesSoundsPromise ||
                a.a.getAnimatedEmojiSounds(!0).then(() => {
                  this.refreshEmojiesSoundsPromise = void 0;
                });
              break;
            default:
              return (
                this.log.warn("refreshReference: not implemented context", t),
                Promise.reject()
              );
          }
          const n = c(e);
          return (
            this.log("refreshReference: refreshing reference:", n),
            s.then(() => {
              const s = c(e);
              if (
                (this.log(
                  "refreshReference: refreshed, reference before:",
                  n,
                  "after:",
                  s
                ),
                n !== s)
              )
                return e;
              this.deleteContext(e, t);
              const i = this.getContext(e);
              if (i) return this.refreshReference(e, i[0]);
              throw (
                (this.log.error(
                  "refreshReference: no new context, reference before:",
                  n,
                  "after:",
                  s,
                  t
                ),
                "NO_NEW_CONTEXT")
              );
            })
          );
        }
      })();
      n.a.referenceDatabase = h;
      t.a = h;
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var i = s(154);
      function a(e, t) {
        const s = t.lookupAttributeKeys({
          "ice-ufrag": !0,
          "ice-pwd": !0,
          fingerprint: !0,
          setup: !0,
          ssrc: !0,
          mid: !0,
          "ssrc-group": !1,
        });
        if (!s.fingerprint) {
          const t = e.session.lines.find((e) => {
            var t;
            return (
              "fingerprint" ===
              (null === (t = e.parsed) || void 0 === t ? void 0 : t.key)
            );
          });
          s.fingerprint = t.parsed.value;
        }
        const a = (function (e) {
            const t = e.map((e) => {
              const [t, ...s] = e.split(" ");
              return {
                _: "groupCallParticipantVideoSourceGroup",
                semantics: t,
                sources: s.map((e) => Object(i.c)(+e)),
              };
            });
            return t.length ? t : void 0;
          })(s["ssrc-group"]),
          [n, r] = s.fingerprint.split(" ", 2),
          o = s.ssrc && Object(i.c)(+s.ssrc.split(" ", 1)[0]);
        return {
          raw: s,
          ufrag: s["ice-ufrag"],
          pwd: s["ice-pwd"],
          fingerprint: { fingerprint: r, setup: s.setup, hash: n },
          source: o,
          sourceGroups: a,
          mid: s.mid,
        };
      }
    },
    ,
    ,
    ,
    function (e, t, s) {
      "use strict";
      function i(e) {
        return [...new Set(e)];
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      const i = !!(null === navigator || void 0 === navigator
        ? void 0
        : navigator.vibrate);
      t.a = i;
    },
    function (e, t, s) {
      "use strict";
      function i(e) {
        const t = e.replace("input", "");
        return t[0].toLowerCase() + t.slice(1);
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      function i(e, t) {
        const s = { writable: !0, configurable: !0 },
          i = {};
        t.forEach((t) => {
          e.hasOwnProperty(t) || (i[t] = s);
        }),
          Object.defineProperties(e, i);
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      var i = s(30),
        a = s(0),
        n = s(41),
        r = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const o = new (class {
        constructor() {
          (this.sampleRate = 48e3),
            (this.tasks = []),
            (this.keepAlive = !1),
            (this.log = Object(n.b)("OPUS", n.a.Error));
        }
        isPlaySupported() {
          if (void 0 !== this.isPlaySupportedResult)
            return this.isPlaySupportedResult;
          const e = document.createElement("audio");
          return (this.isPlaySupportedResult = !(
            !e.canPlayType || !e.canPlayType("audio/ogg;").replace(/no/, "")
          ));
        }
        loadWavWorker() {
          this.wavWorker ||
            ((this.wavWorker = new Worker("waveWorker.min.js")),
            this.wavWorker.addEventListener("message", (e) => {
              const t = e.data;
              if ((this.log("[WAV] got message:", t), t && t.page)) {
                const e = t.page;
                this.onTaskEnd(this.tasks.shift(), e);
              }
            }));
        }
        loadWorker() {
          this.worker ||
            ((this.worker = new Worker("decoderWorker.min.js")),
            this.worker.addEventListener("message", (e) => {
              const t = e.data;
              this.log("[DECODER] got message", t),
                "done" === t.type
                  ? (this.wavWorker.postMessage({ command: "done" }),
                    t.waveform && (this.tasks[0].waveform = t.waveform))
                  : this.wavWorker.postMessage(
                      { command: "encode", buffers: e.data },
                      a.IS_SAFARI ? void 0 : t.map((e) => e.buffer)
                    );
            }));
        }
        setKeepAlive(e) {
          (this.keepAlive = e),
            this.keepAlive
              ? (this.loadWorker(), this.loadWavWorker())
              : this.tasks.length || this.terminateWorkers();
        }
        onTaskEnd(e, t) {
          t
            ? (clearTimeout(e.timeout),
              e.callback.resolve({ bytes: t, waveform: e.waveform }))
            : e.callback.reject("timeout"),
            this.tasks.length && this.executeNewTask(this.tasks[0]),
            this.terminateWorkers();
        }
        terminateWorkers(e = !1) {
          ((!this.keepAlive && !this.tasks.length) || e) &&
            (this.worker && (this.worker.terminate(), (this.worker = null)),
            this.wavWorker &&
              (this.wavWorker.terminate(), (this.wavWorker = null)));
        }
        executeNewTask(e) {
          this.worker.postMessage({
            command: "init",
            decoderSampleRate: this.sampleRate,
            outputBufferSampleRate: this.sampleRate,
          }),
            this.wavWorker.postMessage({
              command: "init",
              wavBitDepth: 16,
              wavSampleRate: this.sampleRate,
            }),
            this.log("[DECODER] send decode"),
            this.worker.postMessage(
              { command: "decode", pages: e.pages, waveform: e.withWaveform },
              a.IS_SAFARI ? void 0 : [e.pages.buffer]
            ),
            (e.timeout = window.setTimeout(() => {
              this.log.error("decode timeout"),
                this.terminateWorkers(!0),
                this.tasks.length && (this.loadWorker(), this.loadWavWorker()),
                this.onTaskEnd(this.tasks.shift());
            }, 1e4));
        }
        pushDecodeTask(e, t) {
          return new Promise((s, i) => {
            const a = {
              pages: e,
              withWaveform: t,
              callback: { resolve: s, reject: i },
              timeout: 0,
            };
            this.loadWorker(),
              this.loadWavWorker(),
              1 === this.tasks.push(a) && this.executeNewTask(a);
          });
        }
        decode(e, t = !1) {
          return r(this, void 0, void 0, function* () {
            return this.pushDecodeTask(e, t).then((e) => {
              const t = new Blob([e.bytes], { type: "audio/wav" });
              return { url: URL.createObjectURL(t), waveform: e.waveform };
            });
          });
        }
      })();
      (i.a.opusDecodeController = o), (t.a = o);
    },
    function (e, t, s) {
      "use strict";
      var i = s(0);
      const a =
        !!document.createElement("video").canPlayType("video/webm") &&
        !i.IS_SAFARI &&
        !i.IS_APPLE_MOBILE;
      (window.IS_WEBM_SUPPORTED = a), (t.a = a);
    },
    function (e, t, s) {
      "use strict";
      function i(e, t, s) {
        "byteLength" in s[e] && (s[e] = [...s[e]]),
          t &&
            t[e] !== s[e] &&
            ((t[e].length = s[e].length),
            s[e].forEach((s, i) => {
              t[e][i] = s;
            }),
            (s[e] = t[e]));
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      var i = s(56),
        a = s(69),
        n = s(31),
        r = s(15),
        o = s(30),
        d = s(120),
        c = s(125);
      const l = new Set(["photo", "video", "gif", "document"]);
      const h = new (class {
        constructor() {
          (this.webpages = {}),
            (this.pendingWebPages = {}),
            r.default.addMultipleEventsListeners({
              updateWebPage: (e) => {
                this.saveWebPage(e.webpage);
              },
            });
        }
        saveWebPage(e, t, s) {
          var o, h;
          if ("webPageNotModified" === e._) return;
          const { id: u } = e,
            p = this.webpages[u],
            g = p && p._ === e._ && p.hash == p.hash;
          if ("webPage" === e._) {
            "photo" === (null === (o = e.photo) || void 0 === o ? void 0 : o._)
              ? (e.photo = i.a.savePhoto(e.photo, s))
              : delete e.photo,
              "document" ===
              (null === (h = e.document) || void 0 === h ? void 0 : h._)
                ? (e.document = a.a.saveDoc(e.document, s))
                : ("document" === e.type && delete e.type, delete e.document);
            const t = e.site_name;
            let r = e.title || e.author || t || "";
            t && r === t && delete e.site_name,
              (r = Object(c.a)(r, 80, 100)),
              (e.rTitle = n.a.wrapRichText(r, {
                noLinks: !0,
                noLinebreaks: !0,
              }));
            let d = "";
            if ("GitHub" === t) {
              const t = e.url.match(/(https?:\/\/github\.com\/[^\/]+\/[^\/]+)/);
              t && (d = t[0] + "/issues/{1}");
            }
            const u = Object(c.a)(e.description || "", 150, 180);
            (e.rDescription = n.a.wrapRichText(u, {
              contextSite: t || "external",
              contextHashtag: d,
            })),
              l.has(e.type) || e.description || !e.photo || (e.type = "photo");
          }
          let f = this.pendingWebPages[u];
          if (
            (t && (f || (f = this.pendingWebPages[u] = new Set()), f.add(t)),
            void 0 === p ? (this.webpages[u] = e) : Object(d.a)(p, e),
            !t && void 0 !== f && g)
          ) {
            const e = [];
            f.forEach((t) => {
              const [s, i, a] = t.split("_");
              e.push({ peerId: s.toPeerId(), mid: +i, isScheduled: !!a });
            }),
              r.default.dispatchEvent("webpage_updated", { id: u, msgs: e });
          }
          return e;
        }
        getMessageKeyForPendingWebPage(e, t, s) {
          return e + "_" + t + (s ? "_s" : "");
        }
        deleteWebPageFromPending(e, t) {
          const s = e.id;
          if (!s) return;
          const i = this.pendingWebPages[s];
          i &&
            i.has(t) &&
            (i.delete(t), i.size || delete this.pendingWebPages[s]);
        }
        getWebPage(e) {
          return this.webpages[e];
        }
      })();
      o.a && (o.a.appWebPagesManager = h), (t.a = h);
    },
    function (e, t, s) {
      "use strict";
      var i = s(143);
      const a = new Set(["image/jpeg", "image/png", "image/bmp"]);
      i.a && a.add("image/webp"), (t.a = a);
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      class i {
        constructor(e) {
          (this.assets = e), (this.tempId = 0);
        }
        playSound(e, t = !1) {
          ++this.tempId, (this.assetName = e);
          try {
            const s = this.createAudio();
            (s.autoplay = !0),
              (s.src = "assets/audio/" + e),
              (s.loop = t),
              s.play();
          } catch (t) {
            console.error("playSound", e, t);
          }
        }
        playSoundIfDifferent(e, t) {
          this.assetName !== e && this.playSound(e, t);
        }
        createAudio() {
          let { audio: e } = this;
          return e || ((e = this.audio = new Audio()), e.play(), e);
        }
        stopSound() {
          this.audio && this.audio.pause();
        }
        cancelDelayedPlay() {
          ++this.tempId;
        }
        playSoundWithTimeout(e, t, s) {
          const i = ++this.tempId;
          setTimeout(() => {
            this.tempId === i && this.playSound(e, t);
          }, s);
        }
      }
    },
    function (e, t, s) {
      "use strict";
      function i(e) {
        const t = {
          video: {
            width: { max: 1920 },
            height: { max: 1080 },
            frameRate: { max: 30 },
          },
        };
        return e || (t.audio = !0), t;
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return a;
      });
      var i = function (e, t, s, i) {
        return new (s || (s = Promise))(function (a, n) {
          function r(e) {
            try {
              d(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(r, o);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function a(e) {
        return i(this, void 0, void 0, function* () {
          const t = yield navigator.mediaDevices.getDisplayMedia(e);
          return (t.getVideoTracks()[0].contentHint = "text"), t;
        });
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return i;
      });
      class i {
        constructor(e = "\r\n") {
          (this.joiner = e), (this.lines = []), (this.newLine = []);
        }
        add(...e) {
          return this.lines.push(...e), this;
        }
        push(e) {
          return this.newLine.push(e), this;
        }
        addJoined(e = "") {
          return this.add(this.newLine.join(e)), (this.newLine = []), this;
        }
        join() {
          return this.lines.join(this.joiner);
        }
        finalize() {
          return this.join() + this.joiner;
        }
      }
    },
    function (e, t, s) {
      "use strict";
      function i(e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return U;
      });
      var i = s(0),
        a = s(59),
        n = s(42),
        r = s(96),
        o = s(65),
        d = s(139),
        c = s(40),
        l = s(41),
        h = s(32),
        u = s(43),
        p = s(15),
        g = s(193),
        f = s(68),
        m = s(188);
      var v = s(53),
        _ = s(137),
        y = s(166),
        I = s(165),
        P = s(168);
      var S = function (e, t, s, i) {
        return new (s || (s = Promise))(function (a, n) {
          function r(e) {
            try {
              d(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(r, o);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      class M extends m.a {
        constructor(e) {
          super(e),
            (this.negotiateThrottled = Object(r.a)(
              this.negotiate.bind(this),
              0,
              !1
            ));
        }
        createPeerConnection() {
          return (
            this.connection ||
            super.createPeerConnection({
              iceServers: [],
              iceTransportPolicy: "all",
              bundlePolicy: "max-bundle",
              rtcpMuxPolicy: "require",
              iceCandidatePoolSize: 0,
            })
          );
        }
        createDataChannel() {
          if (this.dataChannel) return this.dataChannel;
          const e = super.createDataChannel();
          return (
            e.addEventListener("open", () => {
              this.maybeUpdateRemoteVideoConstraints();
            }),
            e.addEventListener("close", () => {
              this.updateConstraintsInterval &&
                (clearInterval(this.updateConstraintsInterval),
                (this.updateConstraintsInterval = void 0));
            }),
            e
          );
        }
        createDescription() {
          if (this.description) return this.description;
          return super.createDescription();
        }
        appendStreamToConference() {
          super.appendStreamToConference();
        }
        invokeJoinGroupCall(e, t, s) {
          return S(this, void 0, void 0, function* () {
            const { groupCall: i, description: a } = this,
              n = i.id,
              r = t.map((t) => {
                const s = (function (e, t) {
                  const s = Object(P.a)(e, t),
                    i = t.mediaType,
                    a = {
                      source: s.source,
                      sourceGroups: s.sourceGroups,
                      type: i,
                    };
                  s.fingerprint.setup = "active";
                  const n = {
                    fingerprints: [s.fingerprint],
                    pwd: s.pwd,
                    ssrc: s.source,
                    "ssrc-groups": s.sourceGroups || [],
                    ufrag: s.ufrag,
                  };
                  return {
                    params: { _: "dataJSON", data: JSON.stringify(n) },
                    source: s.source,
                    media: t,
                    sourceGroups: s.sourceGroups,
                    entry: a,
                  };
                })(e, t);
                return (this.sources[s.entry.type] = s.entry), s;
              });
            let c;
            const l = r.find((e) => "audio" === e.media.mediaType),
              u = r.find((e) => "video" === e.media.mediaType);
            let { source: g, params: m } = l || {};
            const v = u || l,
              _ = { audio: l, video: u };
            if (
              (a.entries.forEach((e) => {
                if ("sendonly" === e.direction) {
                  const t = _[e.type];
                  if (!t) return;
                  a.setEntrySource(e, t.sourceGroups || t.source),
                    a.setEntryPeerId(e, p.default.myId);
                }
              }),
              m !== v.params)
            ) {
              const e = JSON.parse(v.params.data);
              g ? (e.ssrc = g) : delete e.ssrc,
                (m = { _: "dataJSON", data: JSON.stringify(e) });
            }
            const y = d.a.getGroupCallInput(n);
            if ("main" === s.type) {
              const e = {
                call: y,
                join_as: { _: "inputPeerSelf" },
                params: m,
                muted: s.isMuted,
                video_stopped: !s.joinVideo,
              };
              (c = h.a.invokeApi("phone.joinGroupCall", e)),
                this.log("[api] joinGroupCall id=" + n, e);
            } else {
              const e = { call: y, params: m };
              (c = h.a.invokeApi("phone.joinGroupCallPresentation", e)),
                this.log("[api] joinGroupCallPresentation id=" + n, e);
            }
            const I = yield c;
            o.a.processUpdateMessage(I);
            const S = I.updates.find(
                (e) => "updateGroupCallConnection" === e._
              ),
              M = JSON.parse(S.params.data);
            return (
              (M.audio = M.audio || i.connections.main.description.audio),
              a.setData(M),
              (function (e, t) {
                ["audio", "video"]
                  .filter((e) => t[e])
                  .map((e) => [t[e], e])
                  .forEach(([t, s]) => {
                    const i = e.find((e) => e.mediaType === s);
                    if (!i) return;
                    const a = ((e) => {
                      const t = {};
                      return (
                        e.attributes.get("extmap").forEach((e) => {
                          const s = e.key.split("/", 1)[0];
                          t[s] = e.value;
                        }),
                        t
                      );
                    })(i);
                    Object(f.a)(t["rtp-hdrexts"], (e, t, i) => {
                      a[e.id] !== e.uri &&
                        (i.splice(t, 1),
                        console.log("[sdp] filtered extmap:", e, t, s));
                    });
                  });
              })(t, M),
              M
            );
          });
        }
        negotiateInternal() {
          return S(this, void 0, void 0, function* () {
            const { connection: e, description: t } = this,
              s =
                "new" === e.iceConnectionState && !t.getEntryByMid("0").source,
              i = this.log.bindPrefix("startNegotiation");
            i("start");
            const a = yield e.createOffer({ iceRestart: !1 });
            if (s && this.dataChannel) {
              t.createEntry("application").setDirection("sendrecv");
            }
            const { sdp: n, offer: r } = (function (e) {
              const { offer: t, data: s } = e,
                i = Object(y.b)(t.sdp);
              let a = !1;
              if (
                (e.skipAddingMulticast || (a = Object(y.a)(i) || a),
                Object(f.a)(i.media, (e, t, n) => {
                  if (e.isSending) return;
                  if ("application" === e.mediaType) return;
                  const r = e.mediaLine,
                    o = r.mediaLineParts,
                    d = (o.ids, r.toString()),
                    c = s[e.mediaType]["payload-types"].map((e) => "" + e.id);
                  if (d !== Object(I.d)(e.mediaType, void 0, c)) {
                    const r = Object(P.a)(i, e);
                    let d = Object.assign({}, s);
                    (d.transport = Object(v.a)(d.transport)),
                      (d.transport.ufrag = r.ufrag),
                      (d.transport.pwd = r.pwd),
                      (d.transport.fingerprints = [r.fingerprint]),
                      (d.transport.candidates = []);
                    const c = new _.a(r.mid, o.type);
                    c.setPort(o.port),
                      r.source && c.setSource(r.sourceGroups || r.source),
                      c.setDirection(e.direction);
                    const l = new I.a().addSsrcEntry(c, d).finalize(),
                      h = Object(y.b)(l).media[0];
                    (n[t] = h), (a = !0);
                  }
                }),
                a)
              ) {
                const e = i.toString();
                t.sdp = e;
              }
              return { offer: t, sdp: i };
            })({ offer: a, data: t });
            i("[sdp] setLocalDescription", r.sdp),
              yield e.setLocalDescription(r);
            const o = n.media.filter(
              (e) => "application" !== e.mediaType && e.isSending
            );
            if (s)
              try {
                yield this.invokeJoinGroupCall(n, o, this.options);
              } catch (e) {
                this.log.error("[tdweb] joinGroupCall error", e);
              }
            const d = [],
              c = n.bundle;
            Object(f.a)(c, (e, s, i) => {
              const a = t.getEntryByMid(e);
              a.shouldBeSkipped(!0) && (i.splice(s, 1), d.push(a));
            });
            const l = n.media.map((e) => {
                const s = e.mid;
                let i = t.getEntryByMid(s);
                return (
                  i ||
                    ((i = new _.a(s, e.mediaType)), i.setDirection("inactive")),
                  i
                );
              }),
              h = {
                type: "answer",
                sdp: t.generateSdp({ bundle: c, entries: l, isAnswer: !0 }),
              };
            d.forEach((e) => {
              t.deleteEntry(e);
            }),
              i(
                `[sdp] setRemoteDescription signaling=${e.signalingState} ice=${e.iceConnectionState} gathering=${e.iceGatheringState} connection=${e.connectionState}`,
                h.sdp
              ),
              yield e.setRemoteDescription(h),
              i("end");
          });
        }
        negotiate() {
          let e = this.negotiating;
          return (
            e ||
            ((e = super.negotiate()),
            this.updateConstraints &&
              e.then(() => {
                this.maybeUpdateRemoteVideoConstraints(),
                  (this.updateConstraints = !1);
              }),
            "presentation" === this.options.type &&
              e.then(() => {
                this.connection.getTransceivers().find((e) => {
                  var t, s;
                  "video" ===
                    (null ===
                      (s =
                        null === (t = e.sender) || void 0 === t
                          ? void 0
                          : t.track) || void 0 === s
                      ? void 0
                      : s.kind) &&
                    e.sender.setParameters(
                      Object.assign(
                        Object.assign({}, e.sender.getParameters()),
                        { degradationPreference: "maintain-resolution" }
                      )
                    );
                });
              }),
            e)
          );
        }
        maybeUpdateRemoteVideoConstraints() {
          if ("open" !== this.dataChannel.readyState) return;
          this.log("maybeUpdateRemoteVideoConstraints");
          const e = {
            colibriClass: "ReceiverVideoConstraints",
            constraints: {},
            defaultConstraints: { maxHeight: 0 },
            onStageEndpoints: [],
          };
          for (const t of this.description.entries) {
            if ("recvonly" !== t.direction || "video" !== t.type) continue;
            const { endpoint: s } = t;
            e.onStageEndpoints.push(s),
              (e.constraints[s] = { minHeight: 180, maxHeight: 720 });
          }
          this.sendDataChannelData(e),
            e.onStageEndpoints.length
              ? this.updateConstraintsInterval ||
                (this.updateConstraintsInterval = window.setInterval(
                  this.maybeUpdateRemoteVideoConstraints.bind(this),
                  5e3
                ))
              : this.updateConstraintsInterval &&
                (clearInterval(this.updateConstraintsInterval),
                (this.updateConstraintsInterval = void 0));
        }
        addInputVideoStream(e) {
          this.groupCall.saveInputVideoStream(e, this.type),
            this.streamManager.addStream(e, "input"),
            this.appendStreamToConference();
        }
      }
      var b = s(127),
        w = s(182),
        C = s(183),
        k = s(162),
        E = s(163),
        A = s(152),
        D = s(153),
        T = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      class U extends g.a {
        constructor(e) {
          super(),
            Object(n.a)(this, e),
            this.log || (this.log = Object(l.b)("GROUP-CALL")),
            this.connections || (this.connections = {}),
            this.isSpeakingMap || (this.isSpeakingMap = new Map()),
            (this.pinnedSources = []),
            (this.participantsSsrcs = new Map()),
            (this.hadAutoPinnedSources = new Set()),
            (this.dispatchPinnedThrottled = Object(r.a)(
              () => {
                this.dispatchEvent("pinned", this.pinnedSource);
              },
              0,
              !1
            )),
            this.addEventListener("state", (e) => {
              e === b.a.CLOSED && this.cleanup();
            });
        }
        get connectionState() {
          return this.connections.main.connection.iceConnectionState;
        }
        get state() {
          const { connectionState: e } = this;
          if ("closed" === e) return b.a.CLOSED;
          if ("connected" === e || (i.IS_SAFARI && "completed" === e)) {
            const { participant: e } = this;
            return e.pFlags.can_self_unmute
              ? e.pFlags.muted
                ? b.a.MUTED
                : b.a.UNMUTED
              : b.a.MUTED_BY_ADMIN;
          }
          return b.a.CONNECTING;
        }
        get participants() {
          return d.a.getCachedParticipants(this.id);
        }
        get isSharingScreen() {
          return !!this.connections.presentation;
        }
        get pinnedSource() {
          return this.pinnedSources[this.pinnedSources.length - 1];
        }
        get isMuted() {
          return this.state !== b.a.UNMUTED;
        }
        get isClosing() {
          const { state: e } = this;
          return e === b.a.CLOSED;
        }
        get streamManager() {
          return this.connections.main.streamManager;
        }
        get description() {
          return this.connections.main.description;
        }
        pinSource(e) {
          Object(a.a)(this.pinnedSources, e),
            this.pinnedSources.push(e),
            this.dispatchPinnedThrottled();
        }
        unpinSource(e) {
          this.hadAutoPinnedSources.delete(e),
            Object(a.a)(this.pinnedSources, e),
            this.dispatchPinnedThrottled();
        }
        unpinAll() {
          (this.pinnedSources.length = 0), this.dispatchPinnedThrottled();
        }
        getParticipantByPeerId(e) {
          return u.c === e ? this.participant : this.participants.get(e);
        }
        toggleMuted() {
          return this.requestAudioSource(!0).then(() => d.a.toggleMuted());
        }
        getElement(e) {
          return super.getElement(e);
        }
        getVideoElementFromParticipantByType(e, t) {
          let s;
          if (e.pFlags.self) {
            s = "video" === t ? "main" : "presentation";
          } else {
            s = e[t].source_groups[0].sources[0];
          }
          const i = this.getElement(s);
          if (!i) return;
          const a = i.cloneNode();
          return (a.srcObject = i.srcObject), { video: a, source: s };
        }
        createConnectionInstance(e) {
          return (this.connections[e.type] = new M(
            Object.assign(
              { groupCall: this, log: this.log.bindPrefix(e.type) },
              e
            )
          ));
        }
        changeRaiseHand(e) {
          return d.a.editParticipant(this.id, this.participant, {
            raiseHand: e,
          });
        }
        startScreenSharingInternal() {
          return T(this, void 0, void 0, function* () {
            try {
              const e = "presentation",
                t = yield Object(C.a)(Object(w.a)()),
                s = new D.a(),
                i = this.createConnectionInstance({
                  streamManager: s,
                  type: e,
                  options: { type: e },
                });
              i
                .createPeerConnection()
                .addEventListener("negotiationneeded", () => {
                  i.negotiate();
                }),
                t.getVideoTracks()[0].addEventListener(
                  "ended",
                  () => {
                    this.connections.presentation && this.stopScreenSharing();
                  },
                  { once: !0 }
                ),
                i.createDescription(),
                i.addInputVideoStream(t);
            } catch (e) {
              this.log.error("start screen sharing error", e);
            }
          });
        }
        startScreenSharing() {
          return (
            this.startScreenSharingPromise ||
            (this.startScreenSharingPromise =
              this.startScreenSharingInternal().finally(() => {
                this.startScreenSharingPromise = void 0;
              }))
          );
        }
        stopScreenSharing() {
          const e = this.connections.presentation;
          return e
            ? (delete this.connections.presentation,
              this.unpinSource("presentation"),
              e.closeConnectionAndStream(!0),
              delete this.participant.presentation,
              d.a.saveApiParticipant(this.id, this.participant),
              h.a
                .invokeApi("phone.leaveGroupCallPresentation", {
                  call: d.a.getGroupCallInput(this.id),
                })
                .then((e) => {
                  o.a.processUpdateMessage(e);
                }))
            : Promise.resolve();
        }
        toggleScreenSharing() {
          return this.isSharingScreen
            ? this.stopScreenSharing()
            : this.startScreenSharing();
        }
        startVideoSharingInternal() {
          return T(this, void 0, void 0, function* () {
            const e = { video: Object(E.a)() };
            try {
              const t = yield Object(k.a)(e, !1);
              this.connections.main.addInputVideoStream(t),
                yield d.a.editParticipant(this.id, this.participant, {
                  videoPaused: !1,
                  videoStopped: !1,
                });
            } catch (t) {
              this.log.error("startVideoSharing error", t, e);
            }
          });
        }
        startVideoSharing() {
          return (
            this.startVideoSharingPromise ||
            (this.startVideoSharingPromise =
              this.startVideoSharingInternal().finally(() => {
                this.startVideoSharingPromise = void 0;
              }))
          );
        }
        stopVideoSharing() {
          return T(this, void 0, void 0, function* () {
            const e = this.connections.main,
              t = e.streamManager.inputStream.getVideoTracks()[0];
            t &&
              (Object(A.a)(t),
              e.streamManager.appendToConference(e.description),
              yield d.a.editParticipant(this.id, this.participant, {
                videoStopped: !0,
              }));
          });
        }
        toggleVideoSharing() {
          return this.isSharingVideo
            ? this.stopVideoSharing()
            : this.startVideoSharing();
        }
        hangUp(e = !1, t = !1, s = !1) {
          return T(this, void 0, void 0, function* () {
            for (const e in this.connections) {
              this.connections[e].closeConnectionAndStream(!t);
            }
            if ((this.dispatchEvent("state", this.state), !s && !t)) {
              let t;
              const s = d.a.getGroupCallInput(this.id);
              if (e)
                this.log("[api] discardGroupCall id=" + this.id),
                  (t = h.a.invokeApi("phone.discardGroupCall", { call: s }));
              else if (this.joined) {
                this.log("[api] leaveGroupCall id=" + this.id);
                const e = this.connections.main;
                t = h.a.invokeApi("phone.leaveGroupCall", {
                  call: s,
                  source: e.sources.audio.source,
                });
              } else
                this.log(`[api] id=${this.id} payload=null`),
                  (t = h.a.invokeApi("phone.joinGroupCall", {
                    call: s,
                    join_as: { _: "inputPeerSelf" },
                    muted: !0,
                    video_stopped: !0,
                    params: { _: "dataJSON", data: "" },
                  }));
              const i = yield t;
              o.a.processUpdateMessage(i);
            }
          });
        }
        tryAddTrack(e) {
          const { description: t } = this,
            s = super.tryAddTrack(e);
          if ("output" === e.type) {
            const e = t.getEntryBySource(+s),
              i = this.participants.get(e.peerId);
            i &&
              p.default.dispatchEvent("group_call_participant", {
                groupCallId: this.id,
                participant: i,
              });
          }
          return s;
        }
        onParticipantUpdate(e, t) {
          const s = this.connections.main,
            { connection: i, description: a } = s,
            n = c.a.getPeerId(e.peer),
            r = !!e.pFlags.left,
            o = this.participantsSsrcs.get(n) || [];
          if (e.presentation && !r) {
            const { source: t } = d.a.makeSsrcFromParticipant(
              e,
              "video",
              e.presentation.source_groups,
              e.presentation.endpoint
            );
            this.hadAutoPinnedSources.has(t) ||
              (this.hadAutoPinnedSources.add(t),
              this.pinSource(e.pFlags.self ? "presentation" : t));
          }
          if (e.pFlags.self) {
            (this.participant = e),
              s.sources.audio.source !== e.source && this.hangUp();
            let i = !1;
            return (
              e.pFlags.can_self_unmute
                ? e.pFlags.muted && (i = !0)
                : (this.stopScreenSharing(), this.stopVideoSharing(), (i = !0)),
              i && this.setMuted(!0),
              void (t !== n && this.dispatchEvent("state", this.state))
            );
          }
          const l = r ? [] : d.a.makeSsrcsFromParticipant(e);
          r
            ? this.participantsSsrcs.delete(n)
            : this.participantsSsrcs.set(n, l);
          const h = new Set();
          o.forEach((e) => {
            const t = e.source;
            if (!l.find((e) => e.source === t)) {
              this.unpinSource(t);
              const e = a.getEntryBySource(t);
              e &&
                "inactive" !== e.direction &&
                (e.setDirection("inactive"), h.add(e.type));
            }
          }),
            l.forEach((e) => {
              let t = a.getEntryBySource(e.source);
              t
                ? "inactive" === t.direction &&
                  (t.setDirection(t.originalDirection), h.add(t.type))
                : ((t = a.createEntry(e.type)),
                  a.setEntrySource(t, e.sourceGroups || e.source),
                  a.setEntryPeerId(t, n),
                  "video" === e.type && t.setEndpoint(e.endpoint),
                  t.createTransceiver(i, { direction: "recvonly" }),
                  h.add(t.type));
            }),
            h.size &&
              (h.has("video") && (s.updateConstraints = !0),
              s.negotiateThrottled());
        }
      }
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return r;
      });
      var i = s(42),
        a = s(41);
      var n = s(137);
      class r {
        constructor(e) {
          var t;
          Object(i.a)(this, e),
            this.log ||
              (this.log =
                (null === (t = this.connection) || void 0 === t
                  ? void 0
                  : t.log) || Object(a.b)("CALL-CONNECTION-BASE")),
            (this.sources = {});
        }
        createPeerConnection(e) {
          return (
            this.connection ||
            (this.connection = (function (e, t) {
              t || (t = Object(a.b)("RTCPeerConnection")), t("constructor");
              const s = new RTCPeerConnection(e);
              return (
                s.addEventListener("track", (e) => {
                  t("ontrack", e);
                }),
                s.addEventListener("signalingstatechange", () => {
                  t("onsignalingstatechange", s.signalingState);
                }),
                s.addEventListener("connectionstatechange", () => {
                  t("onconnectionstatechange", s.connectionState);
                }),
                s.addEventListener("negotiationneeded", () => {
                  t("onnegotiationneeded", s.signalingState);
                }),
                s.addEventListener("icecandidate", (e) => {
                  t("onicecandidate", e);
                }),
                s.addEventListener("iceconnectionstatechange", () => {
                  t("oniceconnectionstatechange", s.iceConnectionState);
                }),
                s.addEventListener("datachannel", () => {
                  t("ondatachannel");
                }),
                (s.log = t),
                { connection: s }
              );
            })(e, this.log.bindPrefix("connection")).connection)
          );
        }
        createDataChannel(e) {
          return (
            this.dataChannel ||
            (this.dataChannel = (function (e, t, s) {
              s || (s = Object(a.b)("RTCDataChannel"));
              const i = e.createDataChannel("data", t);
              return (
                i.addEventListener("message", (e) => {
                  s("onmessage", e);
                }),
                i.addEventListener("open", () => {
                  s("onopen");
                }),
                i.addEventListener("close", () => {
                  s("onclose");
                }),
                (i.log = s),
                i
              );
            })(this.connection, e, this.log.bindPrefix("data")))
          );
        }
        createDescription() {
          return (
            this.description || (this.description = new n.b(this.connection))
          );
        }
        appendStreamToConference() {
          return this.streamManager.appendToConference(this.description);
        }
        closeConnection() {
          const { connection: e } = this;
          if (e)
            try {
              e.log("close"), e.close();
            } catch (e) {
              this.log.error(e);
            }
        }
        closeConnectionAndStream(e) {
          this.closeConnection(), e && this.streamManager.stop();
        }
        negotiate() {
          let e = this.negotiating;
          return (
            e ||
            (this.negotiating = this.negotiateInternal().finally(() => {
              this.negotiating = void 0;
            }))
          );
        }
        sendDataChannelData(e) {
          "open" === this.dataChannel.readyState &&
            this.dataChannel.send(JSON.stringify(e));
        }
      }
    },
    ,
    ,
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return n;
      });
      var i = s(16);
      const a = {
        s: "Seconds",
        m: "Minutes",
        h: "Hours",
        d: "Days",
        w: "Weeks",
      };
      function n(e, t) {
        const s = (function (e, t = 2) {
          e || (e = 1);
          let s = [];
          const i = [
            { m: 1, t: "s" },
            { m: 60, t: "m" },
            { m: 60, t: "h" },
            { m: 24, t: "d" },
            { m: 7, t: "w" },
          ];
          let a = 1;
          i.forEach((t, n) => {
            if (((a *= t.m), e < a)) return;
            const r = i[n === i.length - 1 ? n : n + 1].m;
            s.push({ duration: (e / a) % r | 0, type: t.t });
          });
          const n = s.slice(-t).reverse();
          for (let e = n.length - 1; e >= 0; --e)
            0 === n[e].duration && n.splice(e, 1);
          return n;
        })(e, 2);
        if (t) {
          const e = s.map((e) => i.default.format(a[e.type], !0, [e.duration]));
          return Object(i.join)(e, !1, t);
        }
        const n = s.map((e) => Object(i.i18n)(a[e.type], [e.duration])),
          r = document.createElement("span");
        return r.append(...Object(i.join)(n, !1)), r;
      }
    },
    function (e, t, s) {
      "use strict";
      var i = s(0);
      var a =
        !!document.createElement("video").canPlayType("video/quicktime") ||
        i.IS_SAFARI ||
        i.IS_APPLE_MOBILE;
      const n = new Set(["image/gif", "video/mp4", "video/webm"]);
      a && n.add("video/quicktime");
      t.a = n;
    },
    function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return g;
      });
      var i = s(50),
        a = s(77),
        n = s(194),
        r = s(182),
        o = s(183),
        d = s(162),
        c = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function r(e) {
              try {
                d(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })).then(r, o);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function l() {
        const e = { main: {}, screen: {} };
        return (t) =>
          c(this, void 0, void 0, function* () {
            const { isScreen: s, constraints: i } = t,
              a = e[s ? "screen" : "main"];
            let n = a[i.audio ? "audio" : "video"];
            n ||
              ((n = (s ? o.a : d.a)(i, t.muted)),
              i.audio &&
                !a.audio &&
                (a.audio = n.finally(() => (a.audio = void 0))),
              i.video &&
                !a.video &&
                (a.video = n.finally(() => (a.video = void 0))));
            try {
              return yield n;
            } catch (e) {
              throw e;
            }
          });
      }
      window.getStreamCached = l;
      var h = s(163),
        u = s(152),
        p = s(153);
      class g extends i.a {
        constructor() {
          super(!1);
          const e = (this.player = document.createElement("div"));
          e.classList.add("call-player"),
            (e.style.display = "none"),
            document.body.append(e),
            (this.elements = new Map());
          const t = (this.audio = new Audio());
          (t.autoplay = !0),
            (t.volume = 1),
            this.player.append(t),
            this.elements.set("audio", t),
            this.fixSafariAudio(),
            (this.getStream = l());
        }
        get isSharingAudio() {
          return !!this.streamManager.hasInputTrackKind("audio");
        }
        get isSharingVideo() {
          return !!this.streamManager.hasInputTrackKind("video");
        }
        fixSafariAudio() {
          this.audio.play().catch(a.a);
        }
        requestAudioSource(e) {
          return this.requestInputSource(!0, !1, e);
        }
        requestInputSource(e, t, s) {
          const { streamManager: i } = this;
          if (i) {
            const s = !e || this.isSharingAudio,
              i = !t || this.isSharingVideo;
            if (s && i) return Promise.resolve();
          }
          const a = { audio: e && Object(n.a)(), video: t && Object(h.a)() };
          return this.getStream({ constraints: a, muted: s }).then((e) => {
            this.onInputStream(e);
          });
        }
        requestScreen() {
          return this.getStream({
            isScreen: !0,
            constraints: Object(r.a)(!0),
          }).then((e) => {
            this.onInputStream(e);
          });
        }
        getElement(e) {
          return this.elements.get("" + e);
        }
        cleanup() {
          (this.player.textContent = ""),
            this.player.remove(),
            this.elements.clear(),
            this.streamManager.stop(),
            super.cleanup();
        }
        onTrack(e) {
          this.tryAddTrack({
            stream: e.streams[0],
            track: e.track,
            type: "output",
          });
        }
        saveInputVideoStream(e, t) {
          const s = e.getVideoTracks()[0];
          this.tryAddTrack({
            stream: e,
            track: s,
            type: "input",
            source: t || "main",
          });
        }
        tryAddTrack({ stream: e, track: t, type: s, source: i }) {
          i || (i = p.a.getSource(e, s)), this.log("tryAddTrack", e, t, s, i);
          const n = "output" === s,
            { player: r, elements: o, streamManager: d } = this,
            c = t.kind,
            l = "video" === c,
            h = l ? i : c;
          let u = o.get(h);
          l &&
            t.addEventListener(
              "ended",
              () => {
                this.log("[track] onended"), o.delete(h);
              },
              { once: !0 }
            ),
            n && d.addTrack(e, t, s);
          const g = l ? e : d.outputStream;
          if (u) u.paused && u.play().catch(a.a), (u.srcObject = g);
          else {
            if (
              ((u = document.createElement(c)),
              (u.autoplay = !0),
              (u.srcObject = g),
              (u.volume = 1),
              "undefined" !== u.sinkId)
            ) {
              const { outputDeviceId: e } = this;
              e && u.setSinkId(e);
            }
            l
              ? (u.setAttribute("playsinline", "true"), (u.muted = !0))
              : r.appendChild(u),
              o.set(h, u);
          }
          return i;
        }
        setMuted(e) {
          this.streamManager.inputStream.getAudioTracks().forEach((t) => {
            "audio" === (null == t ? void 0 : t.kind) &&
              (t.enabled = void 0 === e ? !t.enabled : !e);
          });
        }
        onInputStream(e) {
          if (this.isClosing)
            e.getTracks().forEach((e) => {
              Object(u.a)(e);
            });
          else {
            e.getVideoTracks().length && this.saveInputVideoStream(e, "main");
            const { streamManager: t, description: s } = this;
            t.addStream(e, "input"), s && t.appendToConference(s);
          }
        }
      }
    },
    function (e, t, s) {
      "use strict";
      function i() {
        const e = { channelCount: 2 };
        return (
          ["noiseSuppression", "echoCancellation", "autoGainControl"].forEach(
            (t) => {
              (function (e) {
                var t;
                return (!!(null ===
                  (t =
                    null === navigator || void 0 === navigator
                      ? void 0
                      : navigator.mediaDevices) || void 0 === t
                  ? void 0
                  : t.getSupportedConstraints()))[e];
              })(t) && (e[t] = !0);
            }
          ),
          e
        );
      }
      s.d(t, "a", function () {
        return i;
      });
    },
  ]),
]);
//# sourceMappingURL=5.48f088a898536de4b9c6.chunk.js.map
