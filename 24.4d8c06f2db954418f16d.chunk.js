(this.webpackJsonp = this.webpackJsonp || []).push([
  [24],
  {
    157: function (t, n, e) {
      "use strict";
      function r(...t) {
        const n = t.reduce((t, n) => t + (n.byteLength || n.length), 0),
          e = new Uint8Array(n);
        let r = 0;
        return (
          t.forEach((t) => {
            e.set(t instanceof ArrayBuffer ? new Uint8Array(t) : t, r),
              (r += t.byteLength || t.length);
          }),
          e
        );
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    27: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(157);
      (Uint8Array.prototype.concat = function (...t) {
        return Object(r.a)(this, ...t);
      }),
        (Uint8Array.prototype.toJSON = function () {
          return [...this];
        }),
        (Promise.prototype.finally =
          Promise.prototype.finally ||
          function (t) {
            const n = (n) => Promise.resolve(t()).then(n);
            return this.then(
              (t) => n(() => t),
              (t) => n(() => Promise.reject(t))
            );
          });
    },
  },
]);
//# sourceMappingURL=24.4d8c06f2db954418f16d.chunk.js.map
