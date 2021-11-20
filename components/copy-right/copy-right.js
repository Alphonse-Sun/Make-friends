(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/copy-right/copy-right" ], {
    "0028": function(e, t, n) {
        n.r(t);
        var r = n("e419"), o = n("6c15");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("8fae");
        var a = n("f0c5"), i = Object(a.a)(o.default, r.b, r.c, !1, null, "0184e3dc", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "13a2": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            name: "copy-right",
            data: function() {
                return {};
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        o(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, n("2f62").mapGetters)([ "userInfo", "config" ]))
        };
        t.default = c;
    },
    "6c15": function(e, t, n) {
        n.r(t);
        var r = n("13a2"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    "8fae": function(e, t, n) {
        var r = n("cbb3");
        n.n(r).a;
    },
    cbb3: function(e, t, n) {},
    e419: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/copy-right/copy-right-create-component", {
    "components/copy-right/copy-right-create-component": function(e, t, n) {
        n("543d").createComponent(n("0028"));
    }
}, [ [ "components/copy-right/copy-right-create-component" ] ] ]);