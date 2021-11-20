(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/secert-detail/secert-detail" ], {
    "0099": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uAvatar: function() {
                return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null, "e5e4"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
            },
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "0dc4"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "25f2": function(e, t, n) {},
    "408a": function(e, t, n) {
        var o = n("25f2");
        n.n(o).a;
    },
    "7a74": function(e, t, n) {
        n.r(t);
        var o = n("f508"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = a.a;
    },
    9155: function(e, t, n) {
        n.r(t);
        var o = n("0099"), a = n("7a74");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("408a");
        var u = n("f0c5"), c = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    f508: function(e, t, n) {
        (function(e) {
            var n;
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
            var a = (o(n = {
                name: "secert-detail",
                props: [ "data", "type" ]
            }, "props", {
                data: {
                    type: Object,
                    default: {}
                },
                type: {
                    type: Number,
                    default: 0
                }
            }), o(n, "data", function() {
                return {
                    status: 1
                };
            }), o(n, "created", function() {
                console.log("type", this.type);
            }), o(n, "methods", {
                copyNum: function() {
                    var t;
                    t = "" != this.data.weixin ? this.data.weixin : this.data.phone, e.setClipboardData({
                        data: t
                    });
                },
                follow: function(t) {
                    var n = this;
                    this.$net.req("/follow/following", {
                        follow_user_id: t
                    }).then(function(t) {
                        200 == t.code && (e.showToast({
                            title: t.msg,
                            icon: "none"
                        }), n.$emit("infoDeatil"));
                    });
                },
                unfollow: function(t) {
                    var n = this;
                    this.$net.req("/follow/unfollow", {
                        follow_user_id: t
                    }).then(function(t) {
                        200 == t.code && (e.showToast({
                            title: t.msg,
                            icon: "none"
                        }), n.$emit("infoDeatil"));
                    });
                },
                previewImg: function(t) {
                    console.log("index");
                    var n = this.data.images;
                    e.previewImage({
                        current: t,
                        urls: n
                    });
                }
            }), n);
            t.default = a;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/secert-detail/secert-detail-create-component", {
    "components/secert-detail/secert-detail-create-component": function(e, t, n) {
        n("543d").createComponent(n("9155"));
    }
}, [ [ "components/secert-detail/secert-detail-create-component" ] ] ]);