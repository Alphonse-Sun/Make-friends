(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/swap" ], {
    "349b": function(t, e, n) {},
    6877: function(t, e, n) {
        n.r(e);
        var i = n("87bc"), a = n("bdcc");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("e273");
        var s = n("f0c5"), r = Object(s.a)(a.default, i.b, i.c, !1, null, "44baa2f1", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "87bc": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "0a43"));
            },
            uTabsSwiper: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper") ]).then(n.bind(null, "c531"));
            },
            listItem: function() {
                return n.e("components/list-item/list-item").then(n.bind(null, "12f0"));
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
        }, o = [];
    },
    a065: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function() {
                    return {
                        current: 0,
                        swiperCurrent: 0,
                        bottomHeight: 0,
                        tabs: [ {
                            name: "参与"
                        }, {
                            name: "发布"
                        } ],
                        joinParams: {
                            where: {
                                my_swap: 1
                            },
                            page: 1,
                            limit: 6,
                            more: !0
                        },
                        releaseParams: {
                            where: {
                                my_write: 1
                            },
                            page: 1,
                            limit: 6,
                            more: !0
                        },
                        joinList: [],
                        releaseList: []
                    };
                },
                computed: {
                    swiperHeight: function() {
                        return "height: ".concat(this.bottomHeight, "px;");
                    }
                },
                onLoad: function(e) {
                    var n = this;
                    "fans" === e.type && (this.current = 1), this.releaseList = this.joinList;
                    var i = this;
                    setTimeout(function() {
                        t.createSelectorQuery().in(n).select(".swiper-box").boundingClientRect(function(e) {
                            var n = t.getSystemInfoSync().windowHeight;
                            i.bottomHeight = n - e.top, console.log("tabs-box bottomHeight", e, i.bottomHeight);
                        }).exec();
                    }, 10);
                },
                onShow: function() {
                    this.getJoin(), this.getRelease();
                },
                methods: {
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
                        console.log("onReachBottom", this.current), 0 === this.current ? this.getJoin() : 1 === this.current && this.getRelease();
                    },
                    getJoin: function() {
                        var t = this;
                        this.$net.req("/Secret/getLists", this.joinParams).then(function(e) {
                            200 === e.code && (1 === t.joinParams.page ? t.joinList = e.data.list : e.data.list.length > 0 && (t.joinList = t.joinList.concat(e.data.list)), 
                            console.log("joinList", t.joinList), e.data.list.length > 0 ? ++t.joinParams.page : t.joinParams.page > 1 && t.joinParams.more && (t.joinParams.more = !1, 
                            t.$refs.uToast.show({
                                title: "没有更多数据了！",
                                type: "info"
                            })));
                        });
                    },
                    getRelease: function() {
                        var t = this;
                        this.$net.req("/Secret/getLists", this.releaseParams).then(function(e) {
                            200 === e.code && (1 === t.releaseParams.page ? t.releaseList = e.data.list : e.data.list.length > 0 && (t.releaseList = t.releaseList.concat(e.data.list)), 
                            console.log("releaseList", t.releaseList), e.data.list.length > 0 ? ++t.releaseParams.page : t.releaseParams.page > 1 && t.releaseParams.more && (t.releaseParams.more = !1, 
                            t.$refs.uToast.show({
                                title: "没有更多数据了！",
                                type: "info"
                            })));
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    a5a3: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("ee26"), e(n("66fd")), t(e(n("6877")).default);
        }).call(this, n("543d").createPage);
    },
    bdcc: function(t, e, n) {
        n.r(e);
        var i = n("a065"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    e273: function(t, e, n) {
        var i = n("349b");
        n.n(i).a;
    }
}, [ [ "a5a3", "common/runtime", "common/vendor" ] ] ]);