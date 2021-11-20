(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-parse/libs/trees" ], {
    "129e": function(t, e, i) {
        i.r(e);
        var r = i("9116"), n = i("b218");
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        i("c8dd");
        var a = i("f0c5"), o = i("6426"), c = Object(a.a)(n.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        "function" == typeof o.a && Object(o.a)(c), e.default = c.exports;
    },
    6426: function(t, e, i) {
        e.a = function(t) {
            t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
        };
    },
    "7b36": function(t, e, i) {
        (function(t, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t.Parser = {};
            var n = i("038f").errorImg, s = {
                components: {
                    trees: function() {
                        Promise.resolve().then(function() {
                            return resolve(i("129e"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                name: "trees",
                data: function() {
                    return {
                        ctrl: [],
                        placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',
                        errorImg: n,
                        loadVideo: "undefined" == typeof plus,
                        c: "",
                        s: ""
                    };
                },
                props: {
                    nodes: Array,
                    lazyLoad: Boolean,
                    loading: String
                },
                mounted: function() {
                    for (this.top = this.$parent; "parser" != this.top.$options.name; this.top = this.top.$parent) ;
                    this.init();
                },
                methods: {
                    init: function() {
                        for (var t, e = this.nodes.length; t = this.nodes[--e]; ) if ("img" == t.name) this.top.imgList.setItem(t.attrs.i, t.attrs["original-src"] || t.attrs.src); else if ("video" == t.name || "audio" == t.name) {
                            var i;
                            "video" == t.name ? i = r.createVideoContext(t.attrs.id, this) : this.$refs[t.attrs.id] && (i = this.$refs[t.attrs.id][0]), 
                            i && (i.id = t.attrs.id, this.top.videoContexts.push(i));
                        }
                    },
                    play: function(t) {
                        var e = this.top.videoContexts;
                        if (e.length > 1 && this.top.autopause) for (var i = e.length; i--; ) e[i].id != t.currentTarget.dataset.id && e[i].pause();
                    },
                    imgtap: function(e) {
                        var i = e.currentTarget.dataset.attrs;
                        if (!i.ignore) {
                            var n = !0, s = {
                                id: e.target.id,
                                src: i.src,
                                ignore: function() {
                                    return n = !1;
                                }
                            };
                            if (t.Parser.onImgtap && t.Parser.onImgtap(s), this.top.$emit("imgtap", s), n) {
                                var a = this.top.imgList, o = a[i.i] ? parseInt(i.i) : (a = [ i.src ], 0);
                                r.previewImage({
                                    current: o,
                                    urls: a
                                });
                            }
                        }
                    },
                    loadImg: function(t) {
                        var e = t.currentTarget.dataset.i;
                        this.lazyLoad && !this.ctrl[e] ? this.$set(this.ctrl, e, 1) : this.loading && 2 != this.ctrl[e] && this.$set(this.ctrl, e, 2);
                    },
                    linkpress: function(e) {
                        var i = !0, n = e.currentTarget.dataset.attrs;
                        if (n.ignore = function() {
                            return i = !1;
                        }, t.Parser.onLinkpress && t.Parser.onLinkpress(n), this.top.$emit("linkpress", n), 
                        i) {
                            if (n["app-id"]) return r.navigateToMiniProgram({
                                appId: n["app-id"],
                                path: n.path
                            });
                            n.href && ("#" == n.href[0] ? this.top.useAnchor && this.top.navigateTo({
                                id: n.href.substring(1)
                            }) : 0 == n.href.indexOf("http") || 0 == n.href.indexOf("//") ? r.setClipboardData({
                                data: n.href,
                                success: function() {
                                    return r.showToast({
                                        title: "链接已复制"
                                    });
                                }
                            }) : r.navigateTo({
                                url: n.href,
                                fail: function() {
                                    r.switchTab({
                                        url: n.href
                                    });
                                }
                            }));
                        }
                    },
                    error: function(t) {
                        var e = t.currentTarget, i = e.dataset.source, r = e.dataset.i;
                        if ("video" == i || "audio" == i) {
                            var s = this.ctrl[r] ? this.ctrl[r].i + 1 : 1;
                            s < this.nodes[r].attrs.source.length && this.$set(this.ctrl, r, s), t.detail.__args__ && (t.detail = t.detail.__args__[0]);
                        } else n && "img" == i && (this.top.imgList.setItem(e.dataset.index, n), this.$set(this.ctrl, r, 3));
                        this.top && this.top.$emit("error", {
                            source: i,
                            target: e,
                            errMsg: t.detail.errMsg
                        });
                    },
                    _loadVideo: function(t) {
                        this.$set(this.ctrl, t.target.dataset.i, 0);
                    }
                }
            };
            e.default = s;
        }).call(this, i("c8ba"), i("543d").default);
    },
    9116: function(t, e, i) {
        i.d(e, "b", function() {
            return r;
        }), i.d(e, "c", function() {
            return n;
        }), i.d(e, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    b218: function(t, e, i) {
        i.r(e);
        var r = i("7b36"), n = i.n(r);
        for (var s in r) "default" !== s && function(t) {
            i.d(e, t, function() {
                return r[t];
            });
        }(s);
        e.default = n.a;
    },
    c8dd: function(t, e, i) {
        var r = i("cc56");
        i.n(r).a;
    },
    cc56: function(t, e, i) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-parse/libs/trees-create-component", {
    "uview-ui/components/u-parse/libs/trees-create-component": function(t, e, i) {
        i("543d").createComponent(i("129e"));
    }
}, [ [ "uview-ui/components/u-parse/libs/trees-create-component" ] ] ]);