(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "24d9": function(e, t, n) {
        n.r(t);
        var o = n("38c8"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "38c8": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("2f62");
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var a = {
                computed: c({}, (0, o.mapGetters)([ "location" ])),
                onLaunch: function() {
                    console.log("App Launch");
                    var t = this;
                    e.getLocation({
                        success: function(e) {
                            t.setLocation(e);
                        }
                    });
                },
                onShow: function() {
                    console.log("App Show"), this.getConfig(), this.getMine();
                },
                onHide: function() {
                    console.log("App Hide");
                },
                methods: c(c({}, (0, o.mapActions)([ "setLocation", "setConfig", "setUser" ])), {}, {
                    getConfig: function() {
                        var e = this;
                        this.$net.req("/config/getBatchByKeys", {
                            keys: [ "card_img", "card_title", "withdrawal_desc", "official_article", "poster_bg", "poster_bottom", "poster_hand", "secret_wirte_pay_money", "secret_swap_pay_money", "payment_switch", "payment_switch", "logo", "secret_agreement", "service_mobile", "service_slogan", "service_img", "secret_home_hide", "secret_home_input", "secret_contact_switch", "secret_contact_must" ]
                        }).then(function(t) {
                            200 == t.code && e.setConfig(t.data);
                        });
                    },
                    getMine: function() {
                        var t = this;
                        this.$net.req("/user/getMine", {}).then(function(n) {
                            200 === n.code && (0 == n.data.gender && e.navigateTo({
                                url: "/pages/index/login"
                            }), t.setUser(n.data));
                        });
                    }
                })
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    6184: function(e, t, n) {},
    bac7: function(e, t, n) {
        n.r(t);
        var o = n("24d9");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("e016");
        var c = n("f0c5"), i = Object(c.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = i.exports;
    },
    d36b: function(e, t, n) {
        (function(e) {
            n("ee26");
            var t = u(n("66fd")), o = u(n("bac7")), r = u(n("fa33")), c = u(n("12a2")), i = u(n("426c")), a = u(n("47fa"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            t.default.config.productionTip = !1, o.default.mpType = "app", t.default.use(r.default), 
            t.default.prototype.$net = c.default, t.default.use(i.default), t.default.prototype.$f = i.default, 
            t.default.prototype.$back = i.default.back, e(new t.default(s(s({}, o.default), {}, {
                store: a.default
            }))).$mount();
        }).call(this, n("543d").createApp);
    },
    e016: function(e, t, n) {
        var o = n("6184");
        n.n(o).a;
    }
}, [ [ "d36b", "common/runtime", "common/vendor" ] ] ]);