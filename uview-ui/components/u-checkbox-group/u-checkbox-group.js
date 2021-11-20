(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-checkbox-group/u-checkbox-group" ], {
    "0427": function(e, t, n) {
        n.r(t);
        var o = n("6111"), u = n("f67a");
        for (var a in u) "default" !== a && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(a);
        n("c2ef");
        var c = n("f0c5"), i = Object(c.a)(u.default, o.b, o.c, !1, null, "1c0558b3", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "28f0": function(e, t, n) {},
    6111: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    c2ef: function(e, t, n) {
        var o = n("28f0");
        n.n(o).a;
    },
    d4e5: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "u-checkbox-group",
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("eb8d")).default ],
            props: {
                max: {
                    type: [ Number, String ],
                    default: 999
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                name: {
                    type: [ Boolean, String ],
                    default: ""
                },
                labelDisabled: {
                    type: Boolean,
                    default: !1
                },
                shape: {
                    type: String,
                    default: "square"
                },
                activeColor: {
                    type: String,
                    default: "#2979ff"
                },
                size: {
                    type: [ String, Number ],
                    default: 34
                },
                width: {
                    type: String,
                    default: "auto"
                },
                wrap: {
                    type: Boolean,
                    default: !1
                },
                iconSize: {
                    type: [ String, Number ],
                    default: 20
                }
            },
            data: function() {
                return {};
            },
            created: function() {
                this.children = [];
            },
            methods: {
                emitEvent: function() {
                    var e = this, t = [];
                    this.children.map(function(e) {
                        e.value && t.push(e.name);
                    }), this.$emit("change", t), setTimeout(function() {
                        e.dispatch("u-form-item", "on-form-change", t);
                    }, 60);
                }
            }
        };
        t.default = o;
    },
    f67a: function(e, t, n) {
        n.r(t);
        var o = n("d4e5"), u = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = u.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-checkbox-group/u-checkbox-group-create-component", {
    "uview-ui/components/u-checkbox-group/u-checkbox-group-create-component": function(e, t, n) {
        n("543d").createComponent(n("0427"));
    }
}, [ [ "uview-ui/components/u-checkbox-group/u-checkbox-group-create-component" ] ] ]);