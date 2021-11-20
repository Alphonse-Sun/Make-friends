(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/promoter" ], {
    "0cf2": function(t, e, n) {},
    "1fc9": function(t, e, n) {
        n.r(e);
        var r = n("270a"), o = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = o.a;
    },
    "270a": function(t, e, n) {
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    c(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            data: function() {
                return {
                    background: {
                        backgroundColor: "#FFFFFF"
                    },
                    detail: {},
                    content: '\n\t\t\t\t<p>成为推广员，在线上或线下摆个摊</p>\n\t\t\t\t<p>加入我们拯救单身狗的大军！</p>\n\t\t\t\t<p>当然不是白干！</p>\n\t\t\t\t<p>你推广产生的收益可获得50%</p>\n\t\t\t\t<p>当然，咱做这些怎么会是为了钱</p>\n\t\t\t\t<p>还不是为国出力，提高结婚率</p>\n\t\t\t\t<p>从而提高生育率，减慢老龄化</p>\n\n\t\t\t\t<p>这么伟大的工作，一定要有点门槛</p>\n\t\t\t\t<p>考公务员都还得交报名费不是？</p>\n\n\t\t\t\t<p>成为推广员，限时特价30元</p>\n\t\t\t\t<p>快上车，暂时只开100名</p>\n\t\t\t\t<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />\n\t\t\t',
                    tagStyle: {
                        p: "color: #666666; font-size: 28rpx; line-height: 44rpx; margin-bottom: 28rpx;",
                        span: "color: #666666; font-size: 28rpx; line-height: 44rpx;",
                        img: "max-width: 690rpx; margin-top: 28rpx;"
                    }
                };
            },
            onShow: function() {
                this.getInfo();
            },
            methods: o(o({}, (0, n("2f62").mapActions)([ "setUser" ])), {}, {
                handleBack: function() {
                    this.back();
                },
                wechatPay: function() {
                    var t = this;
                    wx.requestPayment(o(o({}, t.detail.payment), {}, {
                        success: function(e) {
                            console.log("wechatPay res", e), t.getMine();
                        },
                        fail: function(e) {
                            console.log("wechatPay err", e), t.$refs.uToast.show({
                                title: "支付失败！",
                                type: "error"
                            });
                        },
                        complete: function(t) {
                            console.log("wechatPay comp", t);
                        }
                    }));
                },
                getMine: function() {
                    var t = this;
                    this.$net.req("/user/getMine", {}).then(function(e) {
                        200 === e.code && (t.setUser(e.data), t.back());
                    });
                },
                getInfo: function() {
                    var t = this;
                    this.$net.req("/promoter/apply", {}).then(function(e) {
                        200 == e.code ? t.detail = e.data : t.$refs.uToast.show({
                            title: e.msg,
                            type: "error"
                        });
                    });
                }
            })
        };
        e.default = a;
    },
    "5a09": function(t, e, n) {
        var r = n("0cf2");
        n.n(r).a;
    },
    "79dc": function(t, e, n) {
        n.r(e);
        var r = n("82d7"), o = n("1fc9");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("5a09");
        var a = n("f0c5"), i = Object(a.a)(o.default, r.b, r.c, !1, null, "16f66050", null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "82d7": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "0a43"));
            },
            uParse: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse") ]).then(n.bind(null, "72c4"));
            },
            uToast: function() {
                return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "2724"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    a63a: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("ee26"), e(n("66fd")), t(e(n("79dc")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "a63a", "common/runtime", "common/vendor" ] ] ]);