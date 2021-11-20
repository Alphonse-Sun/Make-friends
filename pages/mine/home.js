(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/home" ], {
    "1bdd": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("ee26"), t(n("66fd")), e(t(n("bbed")).default);
        }).call(this, n("543d").createPage);
    },
    "53a5": function(e, t, n) {
        n.r(t);
        var i = n("b1bc"), o = n.n(i);
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = o.a;
    },
    9174: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "0a43"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
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
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    b13c: function(e, t, n) {
        var i = n("cf32");
        n.n(i).a;
    },
    b1bc: function(e, t, n) {
        (function(e) {
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function r(e, t, n) {
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
            var u = {
                data: function() {
                    return r({
                        user: {},
                        userHeight: 0,
                        listHeight: 0,
                        background: {
                            background: "transparent"
                        },
                        queryParams: {
                            where: {
                                my_home: ""
                            },
                            page: 1,
                            limit: 6
                        },
                        releaseList: [],
                        type: !1
                    }, "user", !1);
                },
                computed: o(o({}, (0, n("2f62").mapGetters)([ "userInfo" ])), {}, {
                    follow: function() {
                        return this.userInfo.user_id != this.user.user_id;
                    },
                    swiperHeight: function() {
                        return "height: ".concat(this.listHeight, "px;");
                    }
                }),
                onLoad: function(e) {
                    console.log("onload query", e);
                    var t = e.user_id;
                    t == this.userInfo.user_id && (this.type = !0, this.user = !1), t && (this.queryParams.where.my_home = t, 
                    this.getInfo(), this.getList()), this.initView();
                },
                onReachBottom: function() {
                    console.log("onReachBottom"), this.getList();
                },
                methods: {
                    initView: function() {
                        var t = this, n = e.getSystemInfoSync().windowHeight;
                        e.createSelectorQuery().in(this).select(".user-info").boundingClientRect(function(e) {
                            t.userHeight = e.top + e.height, t.listHeight = n - (e.top + e.height), console.log("initView userHeight", t.userHeight, t.listHeight);
                        }).exec();
                    },
                    handleBack: function() {
                        this.back();
                    },
                    handleFollow: function(e) {
                        var t = this, n = 1 === e ? "/follow/following" : "/follow/unfollow";
                        this.$net.req(n, {
                            follow_user_id: this.user.user_id
                        }).then(function(e) {
                            200 == e.code && (t.$refs.uToast.show({
                                title: e.msg,
                                type: "success"
                            }), t.getInfo());
                        });
                    },
                    getInfo: function() {
                        var e = this;
                        this.$net.req("/user/getUser", {
                            user_id: this.queryParams.where.my_home
                        }).then(function(t) {
                            200 === t.code && (e.user = t.data);
                        });
                    },
                    getList: function() {
                        var e = this;
                        this.$net.req("/Secret/getLists", this.queryParams).then(function(t) {
                            200 === t.code && (1 === e.queryParams.page ? e.releaseList = t.data.list : t.data.list.length > 0 && (e.releaseList = e.releaseList.concat(t.data.list)), 
                            console.log("questionList", e.questionList), t.data.list.length > 0 ? ++e.queryParams.page : e.queryParams.page > 1 && e.$refs.uToast.show({
                                title: "没有更多数据了！",
                                type: "info"
                            }));
                        });
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    bbed: function(e, t, n) {
        n.r(t);
        var i = n("9174"), o = n("53a5");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("b13c");
        var u = n("f0c5"), s = Object(u.a)(o.default, i.b, i.c, !1, null, "8cdd6908", null, !1, i.a, void 0);
        t.default = s.exports;
    },
    cf32: function(e, t, n) {}
}, [ [ "1bdd", "common/runtime", "common/vendor" ] ] ]);