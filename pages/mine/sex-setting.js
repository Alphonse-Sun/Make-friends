(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/sex-setting" ], {
    "4d1a": function(e, t, n) {},
    5574: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("ee26"), t(n("66fd")), e(t(n("fcb9")).default);
        }).call(this, n("543d").createPage);
    },
    7866: function(e, t, n) {
        var r = n("4d1a");
        n.n(r).a;
    },
    c62b: function(e, t, n) {
        (function(e) {
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
                data: function() {
                    return {
                        sex: 0
                    };
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
                }({}, (0, n("2f62").mapGetters)([ "userInfo" ])),
                onShow: function() {
                    this.sex = this.userInfo.gender;
                },
                methods: {
                    change: function(e) {
                        this.sex = e;
                    },
                    submit: function() {
                        var t = {
                            sex: this.sex
                        };
                        this.$net.req("/user/update", {
                            data: t
                        }).then(function(t) {
                            200 == t.code && (e.showToast({
                                title: t.msg,
                                icon: "none"
                            }), setTimeout(function() {
                                e.navigateBack({
                                    delta: 1
                                });
                            }, 1500));
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d").default);
    },
    e571: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    f8ce: function(e, t, n) {
        n.r(t);
        var r = n("c62b"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    fcb9: function(e, t, n) {
        n.r(t);
        var r = n("e571"), o = n("f8ce");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("7866");
        var u = n("f0c5"), i = Object(u.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = i.exports;
    }
}, [ [ "5574", "common/runtime", "common/vendor" ] ] ]);