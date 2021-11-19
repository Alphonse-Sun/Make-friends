(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-checkbox/u-checkbox" ], {
    "0e85": function(e, t, i) {
        i.r(t);
        var n = i("ca24"), a = i("d7c1");
        for (var s in a) "default" !== s && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(s);
        i("fe07");
        var o = i("f0c5"), c = Object(o.a)(a.default, n.b, n.c, !1, null, "6896f537", null, !1, n.a, void 0);
        t.default = c.exports;
    },
    "46ce": function(e, t, i) {},
    ca24: function(e, t, i) {
        i.d(t, "b", function() {
            return a;
        }), i.d(t, "c", function() {
            return s;
        }), i.d(t, "a", function() {
            return n;
        });
        var n = {
            uIcon: function() {
                return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "f9f2"));
            }
        }, a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__get_style([ e.checkboxStyle ])), i = e.__get_style([ e.iconStyle ]), n = e.$u.addUnit(e.labelSize);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    s1: i,
                    g0: n
                }
            });
        }, s = [];
    },
    d7c1: function(e, t, i) {
        i.r(t);
        var n = i("ea37"), a = i.n(n);
        for (var s in n) "default" !== s && function(e) {
            i.d(t, e, function() {
                return n[e];
            });
        }(s);
        t.default = a.a;
    },
    ea37: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            name: "u-checkbox",
            props: {
                name: {
                    type: [ String, Number ],
                    default: ""
                },
                shape: {
                    type: String,
                    default: ""
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: [ String, Boolean ],
                    default: ""
                },
                labelDisabled: {
                    type: [ String, Boolean ],
                    default: ""
                },
                activeColor: {
                    type: String,
                    default: ""
                },
                iconSize: {
                    type: [ String, Number ],
                    default: ""
                },
                labelSize: {
                    type: [ String, Number ],
                    default: ""
                },
                size: {
                    type: [ String, Number ],
                    default: ""
                }
            },
            data: function() {
                return {
                    parentDisabled: !1,
                    newParams: {}
                };
            },
            created: function() {
                this.parent = this.$u.$parent.call(this, "u-checkbox-group"), this.parent && this.parent.children.push(this);
            },
            computed: {
                isDisabled: function() {
                    return "" !== this.disabled ? this.disabled : !!this.parent && this.parent.disabled;
                },
                isLabelDisabled: function() {
                    return "" !== this.labelDisabled ? this.labelDisabled : !!this.parent && this.parent.labelDisabled;
                },
                checkboxSize: function() {
                    return this.size ? this.size : this.parent ? this.parent.size : 34;
                },
                checkboxIconSize: function() {
                    return this.iconSize ? this.iconSize : this.parent ? this.parent.iconSize : 20;
                },
                elActiveColor: function() {
                    return this.activeColor ? this.activeColor : this.parent ? this.parent.activeColor : "primary";
                },
                elShape: function() {
                    return this.shape ? this.shape : this.parent ? this.parent.shape : "square";
                },
                iconStyle: function() {
                    var e = {};
                    return this.elActiveColor && this.value && !this.isDisabled && (e.borderColor = this.elActiveColor, 
                    e.backgroundColor = this.elActiveColor), e.width = this.$u.addUnit(this.checkboxSize), 
                    e.height = this.$u.addUnit(this.checkboxSize), e;
                },
                iconColor: function() {
                    return this.value ? "#ffffff" : "transparent";
                },
                iconClass: function() {
                    var e = [];
                    return e.push("u-checkbox__icon-wrap--" + this.elShape), 1 == this.value && e.push("u-checkbox__icon-wrap--checked"), 
                    this.isDisabled && e.push("u-checkbox__icon-wrap--disabled"), this.value && this.isDisabled && e.push("u-checkbox__icon-wrap--disabled--checked"), 
                    e.join(" ");
                },
                checkboxStyle: function() {
                    var e = {};
                    return this.parent && this.parent.width && (e.width = this.parent.width, e.float = "left"), 
                    this.parent && this.parent.wrap && (e.width = "100%"), e;
                }
            },
            methods: {
                onClickLabel: function() {
                    this.isLabelDisabled || this.isDisabled || this.setValue();
                },
                toggle: function() {
                    this.isDisabled || this.setValue();
                },
                emitEvent: function() {
                    var e = this;
                    this.$emit("change", {
                        value: !this.value,
                        name: this.name
                    }), setTimeout(function() {
                        e.parent && e.parent.emitEvent && e.parent.emitEvent();
                    }, 80);
                },
                setValue: function() {
                    var e = 0;
                    if (this.parent && this.parent.children && this.parent.children.map(function(t) {
                        t.value && e++;
                    }), 1 == this.value) this.emitEvent(), this.$emit("input", !this.value); else {
                        if (this.parent && e >= this.parent.max) return this.$u.toast("最多可选".concat(this.parent.max, "项"));
                        this.emitEvent(), this.$emit("input", !this.value);
                    }
                }
            }
        };
        t.default = n;
    },
    fe07: function(e, t, i) {
        var n = i("46ce");
        i.n(n).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-checkbox/u-checkbox-create-component", {
    "uview-ui/components/u-checkbox/u-checkbox-create-component": function(e, t, i) {
        i("543d").createComponent(i("0e85"));
    }
}, [ [ "uview-ui/components/u-checkbox/u-checkbox-create-component" ] ] ]);