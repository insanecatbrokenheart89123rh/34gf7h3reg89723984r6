(this.webpackJsonp = this.webpackJsonp || []).push([
  [4, 30],
  {
    19: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(8),
        l = a(9),
        u = a(17),
        s = a(16),
        c = a(15);
      const d = new (a(70).a)(
        "page-chats",
        !1,
        () => (
          u.default.pushToState("authState", { _: "authStateSignedIn" }),
          c.default.dispatchEvent("im_mount"),
          s.default.requestedServerLanguage ||
            s.default.getCacheLangPack().then((e) => {
              e.local && s.default.getLangPack(e.lang_code);
            }),
          (d.pageEl.style.display = ""),
          Object(n.a)(),
          Promise.all([
            Object(l.a)(),
            Promise.all([a.e(3), a.e(5), a.e(6), a.e(7), a.e(18)]).then(
              a.bind(null, 186)
            ),
          ]).then(() => {
            setTimeout(() => {
              document.getElementById("auth-pages").remove();
            }, 1e3);
          })
        )
      );
      t.default = d;
    },
  },
]);
//# sourceMappingURL=4.a8e3bb16d79d17555a55.chunk.js.map
