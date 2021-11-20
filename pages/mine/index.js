(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/index" ], {
    "0b68": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "f9f2"));
            },
            copyRight: function() {
                return t.e("components/copy-right/copy-right").then(t.bind(null, "0028"));
            },
            uPopup: function() {
                return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "5828"));
            },
            service: function() {
                return t.e("components/service/service").then(t.bind(null, "a70d"));
            },
            customTabbar: function() {
                return t.e("components/custom-tabbar/custom-tabbar").then(t.bind(null, "fd9a"));
            }
        }, o = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.showService = !0;
            }, e.e1 = function(n) {
                e.showService = !1;
            });
        }, u = [];
    },
    "81cd": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = t("2f62");
        function o(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function u(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? o(Object(t), !0).forEach(function(n) {
                    i(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function i(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        var c = {
            data: function() {
                return {
                    showService: !1
                };
            },
            onShow: function() {
                this.getMine();
            },
            computed: u(u({}, (0, r.mapGetters)([ "userInfo", "config" ])), {}, {
                shareParams: function() {
                    return console.log("shareParams", this.userInfo), {
                        title: (this.userInfo.nickName || "").slice(0, 10) + "邀请您参与宜品换密活动",
                        path: "/pages/mine/home?user_id=" + (this.userInfo.user_id || "")
                    };
                }
            }),
            onShareAppMessage: function() {
                return this.shareParams;
            },
            onShareTimeline: function() {
                return this.shareParams;
            },
            methods: u(u({}, (0, r.mapActions)([ "setUser" ])), {}, {
                getUserProfile: function() {
                    var e = this;
                    wx.getUserProfile({
                        desc: "用于完善个人信息",
                        success: function(n) {
                            console.log("getUserProfile res", n), e.updateUser(n.userInfo);
                        }
                    });
                },
                updateUser: function(e) {
                    var n = this;
                    this.$net.req("/user/update", {
                        data: e
                    }).then(function(t) {
                        200 == t.code && (console.log("res登录成功", t), n.setUser(e), n.getMine());
                    });
                },
                getMine: function() {
                    var e = this;
                    this.$net.req("/user/getMine", {}).then(function(n) {
                        200 === n.code && (console.log("res登录成功11", n), e.setUser(n.data));
                    });
                },
                handleFocus: function() {
                    this.router("/pages/web/web?url=" + this.config.official_article);
                }
            })
        };
        n.default = c;
    },
    9015: function(e, n, t) {
        t.r(n);
        var r = t("0b68"), o = t("e734");
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        t("fd68");
        var i = t("f0c5"), c = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = c.exports;
    },
    b60e: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("ee26"), n(t("66fd")), e(n(t("9015")).default);
        }).call(this, t("543d").createPage);
    },
    b86f: function(e, n, t) {},
    e734: function(e, n, t) {
        t.r(n);
        var r = t("81cd"), o = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = o.a;
    },
    fd68: function(e, n, t) {
        var r = t("b86f");
        t.n(r).a;
    }
}, [ [ "b60e", "common/runtime", "common/vendor" ] ] ]);