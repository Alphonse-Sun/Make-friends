(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/web/web" ], {
    "1fd5": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("ee26"), e(t("66fd")), n(e(t("7867")).default);
        }).call(this, t("543d").createPage);
    },
    6823: function(n, e, t) {
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var u = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    7867: function(n, e, t) {
        t.r(e);
        var u = t("6823"), o = t("91c9");
        for (var f in o) "default" !== f && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(f);
        var r = t("f0c5"), c = Object(r.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = c.exports;
    },
    "91c9": function(n, e, t) {
        t.r(e);
        var u = t("997f"), o = t.n(u);
        for (var f in u) "default" !== f && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(f);
        e.default = o.a;
    },
    "997f": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = {
            data: function() {
                return {
                    url: "",
                    webviewStyles: {
                        progress: {
                            color: "#FF3333"
                        }
                    }
                };
            },
            onLoad: function(n) {
                this.url = n.url;
            }
        };
    }
}, [ [ "1fd5", "common/runtime", "common/vendor" ] ] ]);