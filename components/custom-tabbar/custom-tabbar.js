(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/custom-tabbar/custom-tabbar" ], {
    2362: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "custom-tabbar",
                props: [ "current" ],
                data: function() {
                    return {
                        cur: -1,
                        routers: [ "/pages/index/index", "/pages/release/index", "/pages/mine/index" ],
                        tabbars: [ {
                            iconPath: "/static/tabbar/icon-index.png",
                            selectedIconPath: "/static/tabbar/icon-index-active.png",
                            text: "首页",
                            midButton: !1,
                            customIcon: !0,
                            url: "/pages/index/index"
                        }, {
                            iconPath: "/static/tabbar/icon-record.png",
                            selectedIconPath: "/static/tabbar/icon-record-active.png",
                            text: "",
                            midButton: !1,
                            customIcon: !0,
                            url: "/pages/release/index"
                        }, {
                            iconPath: "/static/tabbar/icon-mine.png",
                            selectedIconPath: "/static/tabbar/icon-mine-active.png",
                            text: "我的",
                            midButton: !1,
                            customIcon: !0,
                            url: "/pages/mine/index"
                        } ]
                    };
                },
                mounted: function() {
                    this.cur = this.current, console.log("tabbar", this.cur, this.current);
                },
                methods: {
                    changeTab: function(n) {
                        this.cur = n, console.log("changeTab", n, this.cur), t.switchTab({
                            url: this.tabbars[n].url
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    "3b44": function(t, n, e) {
        e.r(n);
        var a = e("2362"), c = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = c.a;
    },
    "95d3": function(t, n, e) {
        var a = e("ace4");
        e.n(a).a;
    },
    ab55: function(t, n, e) {
        e.d(n, "b", function() {
            return c;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            uImage: function() {
                return e.e("uview-ui/components/u-image/u-image").then(e.bind(null, "0dc4"));
            }
        }, c = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    ace4: function(t, n, e) {},
    fd9a: function(t, n, e) {
        e.r(n);
        var a = e("ab55"), c = e("3b44");
        for (var o in c) "default" !== o && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(o);
        e("95d3");
        var r = e("f0c5"), u = Object(r.a)(c.default, a.b, a.c, !1, null, "3f8609c8", null, !1, a.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/custom-tabbar/custom-tabbar-create-component", {
    "components/custom-tabbar/custom-tabbar-create-component": function(t, n, e) {
        e("543d").createComponent(e("fd9a"));
    }
}, [ [ "components/custom-tabbar/custom-tabbar-create-component" ] ] ]);