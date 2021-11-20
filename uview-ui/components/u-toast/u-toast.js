(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-toast/u-toast" ], {
    "04f6": function(t, i, n) {
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var n = {
                name: "u-toast",
                props: {
                    zIndex: {
                        type: [ Number, String ],
                        default: ""
                    }
                },
                data: function() {
                    return {
                        isShow: !1,
                        timer: null,
                        config: {
                            params: {},
                            title: "",
                            type: "",
                            duration: 2e3,
                            isTab: !1,
                            url: "",
                            icon: !0,
                            position: "center",
                            callback: null,
                            back: !1
                        },
                        tmpConfig: {}
                    };
                },
                computed: {
                    iconName: function() {
                        if ([ "error", "warning", "success", "info" ].indexOf(this.tmpConfig.type) >= 0 && this.tmpConfig.icon) return this.$u.type2icon(this.tmpConfig.type);
                    },
                    uZIndex: function() {
                        return this.isShow ? this.zIndex ? this.zIndex : this.$u.zIndex.toast : "999999";
                    }
                },
                methods: {
                    show: function(t) {
                        var i = this;
                        this.tmpConfig = this.$u.deepMerge(this.config, t), this.timer && (clearTimeout(this.timer), 
                        this.timer = null), this.isShow = !0, this.timer = setTimeout(function() {
                            i.isShow = !1, clearTimeout(i.timer), i.timer = null, "function" == typeof i.tmpConfig.callback && i.tmpConfig.callback(), 
                            i.timeEnd();
                        }, this.tmpConfig.duration);
                    },
                    hide: function() {
                        this.isShow = !1, this.timer && (clearTimeout(this.timer), this.timer = null);
                    },
                    timeEnd: function() {
                        if (this.tmpConfig.url) {
                            if ("/" != this.tmpConfig.url[0] && (this.tmpConfig.url = "/" + this.tmpConfig.url), 
                            Object.keys(this.tmpConfig.params).length) {
                                var i = "";
                                /.*\/.*\?.*=.*/.test(this.tmpConfig.url) ? (i = this.$u.queryParams(this.tmpConfig.params, !1), 
                                this.tmpConfig.url = this.tmpConfig.url + "&" + i) : (i = this.$u.queryParams(this.tmpConfig.params), 
                                this.tmpConfig.url += i);
                            }
                            this.tmpConfig.isTab ? t.switchTab({
                                url: this.tmpConfig.url
                            }) : t.navigateTo({
                                url: this.tmpConfig.url
                            });
                        } else this.tmpConfig.back && this.$u.route({
                            type: "back"
                        });
                    }
                }
            };
            i.default = n;
        }).call(this, n("543d").default);
    },
    2724: function(t, i, n) {
        n.r(i);
        var e = n("db92"), o = n("4bea");
        for (var u in o) "default" !== u && function(t) {
            n.d(i, t, function() {
                return o[t];
            });
        }(u);
        n("d8fb");
        var s = n("f0c5"), a = Object(s.a)(o.default, e.b, e.c, !1, null, "253bd8f9", null, !1, e.a, void 0);
        i.default = a.exports;
    },
    "4bea": function(t, i, n) {
        n.r(i);
        var e = n("04f6"), o = n.n(e);
        for (var u in e) "default" !== u && function(t) {
            n.d(i, t, function() {
                return e[t];
            });
        }(u);
        i.default = o.a;
    },
    "6cf1": function(t, i, n) {},
    d8fb: function(t, i, n) {
        var e = n("6cf1");
        n.n(e).a;
    },
    db92: function(t, i, n) {
        n.d(i, "b", function() {
            return o;
        }), n.d(i, "c", function() {
            return u;
        }), n.d(i, "a", function() {
            return e;
        });
        var e = {
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-toast/u-toast-create-component", {
    "uview-ui/components/u-toast/u-toast-create-component": function(t, i, n) {
        n("543d").createComponent(n("2724"));
    }
}, [ [ "uview-ui/components/u-toast/u-toast-create-component" ] ] ]);