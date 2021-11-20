(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-badge/u-badge" ], {
    "35bd": function(t, e, o) {
        var n = o("af81");
        o.n(n).a;
    },
    "37a7": function(t, e, o) {
        o.r(e);
        var n = o("a14c"), a = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    },
    "4fb5": function(t, e, o) {
        o.r(e);
        var n = o("b2a0"), a = o("37a7");
        for (var r in a) "default" !== r && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(r);
        o("35bd");
        var u = o("f0c5"), f = Object(u.a)(a.default, n.b, n.c, !1, null, "69221dd6", null, !1, n.a, void 0);
        e.default = f.exports;
    },
    a14c: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "u-badge",
            props: {
                type: {
                    type: String,
                    default: "error"
                },
                size: {
                    type: String,
                    default: "default"
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                count: {
                    type: [ Number, String ]
                },
                overflowCount: {
                    type: Number,
                    default: 99
                },
                showZero: {
                    type: Boolean,
                    default: !1
                },
                offset: {
                    type: Array,
                    default: function() {
                        return [ 20, 20 ];
                    }
                },
                absolute: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: [ String, Number ],
                    default: "24"
                },
                color: {
                    type: String,
                    default: "#ffffff"
                },
                bgColor: {
                    type: String,
                    default: ""
                },
                isCenter: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                boxStyle: function() {
                    var t = {};
                    return this.isCenter ? (t.top = 0, t.right = 0, t.transform = "translateY(-50%) translateX(50%)") : (t.top = this.offset[0] + "rpx", 
                    t.right = this.offset[1] + "rpx", t.transform = "translateY(0) translateX(0)"), 
                    "mini" == this.size && (t.transform = t.transform + " scale(0.8)"), t;
                },
                showText: function() {
                    return this.isDot ? "" : this.count > this.overflowCount ? "".concat(this.overflowCount, "+") : this.count;
                },
                show: function() {
                    return 0 != this.count || 0 != this.showZero;
                }
            }
        };
        e.default = n;
    },
    af81: function(t, e, o) {},
    b2a0: function(t, e, o) {
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.show ? t.__get_style([ {
                top: t.offset[0] + "rpx",
                right: t.offset[1] + "rpx",
                fontSize: t.fontSize + "rpx",
                position: t.absolute ? "absolute" : "static",
                color: t.color,
                backgroundColor: t.bgColor
            }, t.boxStyle ]) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-badge/u-badge-create-component", {
    "uview-ui/components/u-badge/u-badge-create-component": function(t, e, o) {
        o("543d").createComponent(o("4fb5"));
    }
}, [ [ "uview-ui/components/u-badge/u-badge-create-component" ] ] ]);