require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-parse/u-parse" ], {
    1182: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {}, o = t.getFileSystemManager ? t.getFileSystemManager() : null, s = n("9c9a");
            var a = {
                name: "parser",
                data: function() {
                    return {
                        showAm: "",
                        nodes: []
                    };
                },
                components: {
                    trees: function() {
                        n.e("uview-ui/components/u-parse/libs/trees").then(function() {
                            return resolve(n("129e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    html: String,
                    autopause: {
                        type: Boolean,
                        default: !0
                    },
                    autoscroll: Boolean,
                    autosetTitle: {
                        type: Boolean,
                        default: !0
                    },
                    compress: Number,
                    loadingImg: String,
                    useCache: Boolean,
                    domain: String,
                    lazyLoad: Boolean,
                    selectable: Boolean,
                    tagStyle: Object,
                    showWithAnimation: Boolean,
                    useAnchor: Boolean
                },
                watch: {
                    html: function(t) {
                        this.setContent(t);
                    }
                },
                created: function() {
                    this.imgList = [], this.imgList.each = function(t) {
                        for (var e = 0, n = this.length; e < n; e++) this.setItem(e, t(this[e], e, this));
                    }, this.imgList.setItem = function(t, e) {
                        var n = this;
                        if (null != t && e) {
                            if (0 == e.indexOf("http") && this.includes(e)) {
                                for (var i, s = e.split("://")[0], a = s.length; (i = e[a]) && ("/" != i || "/" == e[a - 1] || "/" == e[a + 1]); a++) s += Math.random() > .5 ? i.toUpperCase() : i;
                                return s += e.substr(a), this[t] = s;
                            }
                            if (this[t] = e, e.includes("data:image")) {
                                var r, c = e.match(/data:image\/(\S+?);(\S+?),(.+)/);
                                if (!c) return;
                                r = "".concat(wx.env.USER_DATA_PATH, "/").concat(Date.now(), ".").concat(c[1]), 
                                o && o.writeFile({
                                    filePath: r,
                                    data: c[3],
                                    encoding: c[2],
                                    success: function() {
                                        return n[t] = r;
                                    }
                                });
                            }
                        }
                    };
                },
                mounted: function() {
                    this.html && this.setContent(this.html);
                },
                beforeDestroy: function() {
                    this.imgList.each(function(e) {
                        e && e.includes(t.env.USER_DATA_PATH) && o && o.unlink({
                            filePath: e
                        });
                    }), clearInterval(this._timer);
                },
                methods: {
                    setContent: function(e, n) {
                        var o, a = this;
                        if (!e) return this.nodes = [];
                        var r, c = new s(e, this);
                        if (this.useCache) {
                            var l = function(t) {
                                for (var e = t.length, n = 5381; e--; ) n += (n << 5) + t.charCodeAt(e);
                                return n;
                            }(e);
                            i[l] ? o = i[l] : (o = c.parse(), i[l] = o);
                        } else o = c.parse();
                        this.$emit("parse", o), this.nodes = n ? this.nodes.concat(o) : o, o.length && o.title && this.autosetTitle && t.setNavigationBarTitle({
                            title: o.title
                        }), this.imgList && (this.imgList.length = 0), this.videoContexts = [], this.$nextTick(function() {
                            (function t(e) {
                                for (var n = e.length; n--; ) e[n].top && (e[n].controls = [], e[n].init(), t(e[n].$children));
                            })(a.$children), a.$emit("load");
                        }), clearInterval(this._timer), this._timer = setInterval(function() {
                            t.createSelectorQuery().in(a).select("#_top").boundingClientRect().exec(function(t) {
                                t && (a.rect = t[0], a.rect.height == r && (a.$emit("ready", a.rect), clearInterval(a._timer)), 
                                r = a.rect.height);
                            });
                        }, 350), this.showWithAnimation && !n && (this.showAm = "animation:_show .5s");
                    },
                    getText: function() {
                        for (var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.nodes, n = "", i = 0; t = e[i++]; ) if ("text" == t.type) n += t.text.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); else if ("br" == t.type) n += "\n"; else {
                            var o = "p" == t.name || "div" == t.name || "tr" == t.name || "li" == t.name || "h" == t.name[0] && t.name[1] > "0" && t.name[1] < "7";
                            o && n && "\n" != n[n.length - 1] && (n += "\n"), t.children && (n += this.getText(t.children)), 
                            o && "\n" != n[n.length - 1] ? n += "\n" : "td" != t.name && "th" != t.name || (n += "\t");
                        }
                        return n;
                    },
                    in: function(t) {
                        t.page && t.selector && t.scrollTop && (this._in = t);
                    },
                    navigateTo: function(e) {
                        var n = this;
                        if (!this.useAnchor) return e.fail && e.fail("Anchor is disabled");
                        var i = t.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "#_top") + (e.id ? "".concat(">>>", "#").concat(e.id, ",").concat(this._in ? this._in.selector : "#_top").concat(">>>", ".").concat(e.id) : "")).boundingClientRect();
                        this._in ? i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect() : i.selectViewport().scrollOffset(), 
                        i.exec(function(i) {
                            if (!i[0]) return e.fail && e.fail("Label not found");
                            var o = i[1].scrollTop + i[0].top - (i[2] ? i[2].top : 0) + (e.offset || 0);
                            n._in ? n._in.page[n._in.scrollTop] = o : t.pageScrollTo({
                                scrollTop: o,
                                duration: 300
                            }), e.success && e.success();
                        });
                    },
                    getVideoContext: function(t) {
                        if (!t) return this.videoContexts;
                        for (var e = this.videoContexts.length; e--; ) if (this.videoContexts[e].id == t) return this.videoContexts[e];
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    3060: function(t, e, n) {},
    "4ce9": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "72c4": function(t, e, n) {
        n.r(e);
        var i = n("4ce9"), o = n("b322");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("fa41");
        var a = n("f0c5"), r = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    b322: function(t, e, n) {
        n.r(e);
        var i = n("1182"), o = n.n(i);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = o.a;
    },
    fa41: function(t, e, n) {
        var i = n("3060");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-parse/u-parse-create-component", {
    "uview-ui/components/u-parse/u-parse-create-component": function(t, e, n) {
        n("543d").createComponent(n("72c4"));
    }
}, [ [ "uview-ui/components/u-parse/u-parse-create-component" ] ] ]);