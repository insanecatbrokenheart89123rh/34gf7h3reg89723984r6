(this.webpackJsonp = this.webpackJsonp || []).push([
  [28],
  {
    28: function (t, r, o) {
      "use strict";
      o.r(r),
        (String.prototype.toUserId = function () {
          return (+this).toUserId();
        }),
        (String.prototype.toChatId = function () {
          return (+this).toChatId();
        }),
        (String.prototype.toPeerId = function (t) {
          return (+this).toPeerId(t);
        }),
        (String.prototype.isPeerId = function () {
          return /^[\d-]/.test(this.toString());
        }),
        (Number.prototype.toUserId = function () {
          return this;
        }),
        (Number.prototype.toChatId = function () {
          return Math.abs(this);
        }),
        (Number.prototype.toPeerId = function (t) {
          return void 0 === t ? this : t ? -Math.abs(this) : this;
        }),
        (Number.prototype.isPeerId = function () {
          return !0;
        });
    },
  },
]);
//# sourceMappingURL=28.6667bb68e660e626d453.chunk.js.map
