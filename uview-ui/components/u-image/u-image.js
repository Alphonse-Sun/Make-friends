(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-image/u-image" ], {
    "0dc4": function(t, e, i) {
        i.r(e);
        var o = i("a381"), n = i("5ba1");
        for (var r in n) "default" !== r && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(r);
        i("d064");
        var a = i("f0c5"), u = Object(a.a)(n.default, o.b, o.c, !1, null, "1f15ab5c", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "5ba1": function(t, e, i) {
        i.r(e);
        var o = i("8cf1"), n = i.n(o);
        for (var r in o) "default" !== r && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = n.a;
    },
    "8cf1": function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "u-image",
            props: {
                src: {
                    type: String,
                    default: ""
                },
                mode: {
                    type: String,
                    default: "aspectFill"
                },
                width: {
                    type: [ String, Number ],
                    default: "100%"
                },
                height: {
                    type: [ String, Number ],
                    default: "auto"
                },
                shape: {
                    type: String,
                    default: "square"
                },
                borderRadius: {
                    type: [ String, Number ],
                    default: 0
                },
                lazyLoad: {
                    type: Boolean,
                    default: !0
                },
                showMenuByLongpress: {
                    type: Boolean,
                    default: !0
                },
                loadingIcon: {
                    type: String,
                    default: "photo"
                },
                errorIcon: {
                    type: String,
                    default: "error-circle"
                },
                showLoading: {
                    type: Boolean,
                    default: !0
                },
                showError: {
                    type: Boolean,
                    default: !0
                },
                fade: {
                    type: Boolean,
                    default: !0
                },
                webp: {
                    type: Boolean,
                    default: !1
                },
                duration: {
                    type: [ String, Number ],
                    default: 500
                },
                bgColor: {
                    type: String,
                    default: "#f3f4f6"
                }
            },
            data: function() {
                return {
                    isError: !1,
                    loading: !0,
                    opacity: 1,
                    durationTime: this.duration,
                    backgroundStyle: {}
                };
            },
            watch: {
                src: {
                    immediate: !0,
                    handler: function(t) {
                        t ? this.isError = !1 : (this.isError = !0, this.loading = !1);
                    }
                }
            },
            computed: {
                wrapStyle: function() {
                    var t = {};
                    return t.width = this.$u.addUnit(this.width), t.height = this.$u.addUnit(this.height), 
                    t.borderRadius = "circle" == this.shape ? "50%" : this.$u.addUnit(this.borderRadius), 
                    t.overflow = this.borderRadius > 0 ? "hidden" : "visible", this.fade && (t.opacity = this.opacity, 
                    t.transition = "opacity ".concat(Number(this.durationTime) / 1e3, "s ease-in-out")), 
                    t;
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                },
                onErrorHandler: function(t) {
                    this.loading = !1, this.isError = !0, this.$emit("error", t);
                },
                onLoadHandler: function() {
                    var t = this;
                    if (this.loading = !1, this.isError = !1, this.$emit("load"), !this.fade) return this.removeBgColor();
                    this.opacity = 0, this.durationTime = 0, setTimeout(function() {
                        t.durationTime = t.duration, t.opacity = 1, setTimeout(function() {
                            t.removeBgColor();
                        }, t.durationTime);
                    }, 50);
                },
                removeBgColor: function() {
                    this.backgroundStyle = {
                        backgroundColor: "transparent"
                    };
                }
            }
        };
        e.default = o;
    },
    "940c": function(t, e, i) {},
    a381: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return r;
        }), i.d(e, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "f9f2"));
            }
        }, n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__get_style([ t.wrapStyle, t.backgroundStyle ])), i = t.isError || "circle" == t.shape ? null : t.$u.addUnit(t.borderRadius), o = t.showLoading && t.loading && "circle" != t.shape ? t.$u.addUnit(t.borderRadius) : null, n = t.showError && t.isError && !t.loading && "circle" != t.shape ? t.$u.addUnit(t.borderRadius) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e,
                    g0: i,
                    g1: o,
                    g2: n
                }
            });
        }, r = [];
    },
    d064: function(t, e, i) {
        var o = i("940c");
        i.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-image/u-image-create-component", {
    "uview-ui/components/u-image/u-image-create-component": function(t, e, i) {
        i("543d").createComponent(i("0dc4"));
    }
}, [ [ "uview-ui/components/u-image/u-image-create-component" ] ] ]);