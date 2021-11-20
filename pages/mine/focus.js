(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/focus" ], {
    "0068": function(t, e, n) {
        n.r(e);
        var o = n("ec49"), a = n("9c3e");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("75d3");
        var s = n("f0c5"), r = Object(s.a)(a.default, o.b, o.c, !1, null, "dac3d190", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "04e1": function(t, e, n) {},
    "3b02": function(t, e, n) {
        (function(t) {
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        i(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function i(t, e, n) {
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
            var s = {
                data: function() {
                    return {
                        current: 0,
                        swiperCurrent: 0,
                        bottomHeight: 0,
                        tabs: [ {
                            name: "关注"
                        }, {
                            name: "粉丝"
                        } ],
                        followedParams: {
                            where: {
                                my_like: 1
                            },
                            page: 1,
                            limit: 6,
                            more: !0
                        },
                        fansParams: {
                            where: {
                                my_like: 1
                            },
                            page: 1,
                            limit: 6,
                            more: !0
                        },
                        followedList: [],
                        fansList: []
                    };
                },
                computed: a(a({}, (0, n("2f62").mapGetters)([ "userInfo" ])), {}, {
                    swiperHeight: function() {
                        return "height: ".concat(this.bottomHeight, "px;");
                    }
                }),
                onLoad: function(e) {
                    var n = this;
                    "fans" === e.type && (this.current = 1, this.swiperCurrent = 1);
                    var o = this;
                    setTimeout(function() {
                        t.createSelectorQuery().in(n).select(".swiper-box").boundingClientRect(function(e) {
                            var n = t.getSystemInfoSync().windowHeight;
                            o.bottomHeight = n - e.top, console.log("tabs-box bottomHeight", e, o.bottomHeight);
                        }).exec();
                    }, 10);
                },
                onShow: function() {
                    this.initFollowed(), this.initFans();
                },
                methods: {
                    initFollowed: function() {
                        this.followedParams.page = 1, this.followedParams.more = !0, this.followedList = [], 
                        this.getFollowed();
                    },
                    initFans: function() {
                        this.fansParams.page = 1, this.fansParams.more = !0, this.fansList = [], this.getFans();
                    },
                    handleBack: function() {
                        this.back();
                    },
                    tabsChange: function(t) {
                        console.log("tabsChange", t), this.current = t, this.swiperCurrent = t;
                    },
                    transition: function(t) {
                        var e = t.detail.dx;
                        this.$refs.uTabs.setDx(e);
                    },
                    animationfinish: function(t) {
                        var e = t.detail.current;
                        this.$refs.uTabs.setFinishCurrent(e), this.swiperCurrent = e, this.current = e;
                    },
                    onreachBottom: function() {
                        console.log("onReachBottom", this.current), 0 === this.current ? this.getFollowed() : 1 === this.current && this.getFans();
                    },
                    handleFollow: function(t, e, n) {
                        var o = this, a = 1 === n ? "/follow/following" : "/follow/unfollow";
                        this.$net.req(a, {
                            follow_user_id: e.fansUsers.id
                        }).then(function(a) {
                            200 == a.code && (e.is_return = n, o.$set(o.fansList, t, e), o.$refs.uToast.show({
                                title: a.msg,
                                type: "success"
                            }), o.initFollowed());
                        });
                    },
                    getFollowed: function() {
                        var t = this;
                        this.$net.req("/follow/followUsers", this.followedParams).then(function(e) {
                            200 === e.code && (t.tabs[0].name = "关注" + e.data.count, 1 === t.followedParams.page ? t.followedList = e.data.list : e.data.list.length > 0 && (t.followedList = t.followedList.concat(e.data.list)), 
                            console.log("followedList", t.followedList), e.data.list.length > 0 ? ++t.followedParams.page : t.followedParams.page > 1 && t.followedParams.more && (t.followedParams.more = !1, 
                            t.$refs.uToast.show({
                                title: "没有更多数据了！",
                                type: "info"
                            })));
                        });
                    },
                    getFans: function() {
                        var t = this;
                        this.$net.req("/follow/fansUsers", this.fansParams).then(function(e) {
                            200 === e.code && (t.tabs[1].name = "粉丝" + e.data.count, 1 === t.fansParams.page ? t.fansList = e.data.list : e.data.list.length > 0 && (t.fansList = t.fansList.concat(e.data.list)), 
                            console.log("fansList", t.fansList), e.data.list.length > 0 ? ++t.fansParams.page : t.fansParams.page > 1 && t.fansParams.more && (t.fansParams.more = !1, 
                            t.$refs.uToast.show({
                                title: "没有更多数据了！",
                                type: "info"
                            })));
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "75d3": function(t, e, n) {
        var o = n("04e1");
        n.n(o).a;
    },
    "9c3e": function(t, e, n) {
        n.r(e);
        var o = n("3b02"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    ec49: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "0a43"));
            },
            uTabsSwiper: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper") ]).then(n.bind(null, "c531"));
            },
            uAvatar: function() {
                return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null, "e5e4"));
            },
            uEmpty: function() {
                return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null, "e6c3"));
            },
            uToast: function() {
                return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "2724"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    f2b9: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("ee26"), e(n("66fd")), t(e(n("0068")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f2b9", "common/runtime", "common/vendor" ] ] ]);