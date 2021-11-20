(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/release/index" ], {
    2614: function(t, e, n) {},
    6259: function(t, e, n) {
        n.r(e);
        var i = n("910c"), o = n("ad71");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("8a86"), n("9d8a");
        var c = n("f0c5"), r = Object(c.a)(o.default, i.b, i.c, !1, null, "21175402", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "8a86": function(t, e, n) {
        var i = n("b9a4");
        n.n(i).a;
    },
    "910c": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uInput: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input") ]).then(n.bind(null, "e37a"));
            },
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "0dc4"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
            },
            uUpload: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-upload/u-upload") ]).then(n.bind(null, "cb51"));
            },
            uCheckboxGroup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-checkbox-group/u-checkbox-group") ]).then(n.bind(null, "0427"));
            },
            uCheckbox: function() {
                return n.e("uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null, "0e85"));
            },
            uPopup: function() {
                return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "5828"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "b395"));
            },
            uSelect: function() {
                return n.e("uview-ui/components/u-select/u-select").then(n.bind(null, "ed59"));
            },
            customTabbar: function() {
                return n.e("components/custom-tabbar/custom-tabbar").then(n.bind(null, "fd9a"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.getId(t.info.secret_category_id));
            t._isMounted || (t.e0 = function(e) {
                t.imgShow = !0;
            }, t.e1 = function(e) {
                t.classifyShow = !0;
            }, t.e2 = function(e) {
                t.numShow = !0;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, s = [];
    },
    "927d": function(t, e, n) {
        (function(t) {
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var c = {
                data: function() {
                    return {
                        value: "",
                        imgShow: !1,
                        list: [],
                        swiperCurrent: 0,
                        showUploadList: !1,
                        address: 2,
                        tagShow: !1,
                        tagList: [],
                        info: {
                            title: "",
                            content: "",
                            phone: "",
                            weixin: "",
                            images: [],
                            is_same_city: 0,
                            secret_category_id: 0,
                            secret_category_tags: "",
                            coordinate: [],
                            background_image: "",
                            province: "",
                            city: ""
                        },
                        pitch: !1,
                        numShow: !1,
                        numList: [ {
                            text: "微信号"
                        }, {
                            text: "手机号"
                        } ],
                        numDefault: "微信号",
                        classifyShow: !1,
                        classifyList: [],
                        action: this.$net.base + "/upload/image",
                        recordShow: !1,
                        recordList: [],
                        uploadStatus: 0
                    };
                },
                computed: o({}, (0, n("2f62").mapGetters)([ "location", "config", "userInfo" ])),
                onShow: function() {
                    0 == this.uploadStatus && (this.backImgList(), this.classifyLists());
                },
                methods: {
                    beforeUpload: function() {
                        this.uploadStatus = 1;
                    },
                    classifyLists: function() {
                        var t = this;
                        this.$net.req("/secret_category/getLists").then(function(e) {
                            200 == e.code && (t.classifyList = e.data);
                        });
                    },
                    openRecord: function() {
                        "微信号" == this.numDefault ? this.phoneList("weixin") : this.phoneList("phone");
                    },
                    phoneList: function(t) {
                        var e = this;
                        this.$net.req("/user/historyContact", {
                            type: t
                        }).then(function(t) {
                            200 == t.code && (e.recordList = t.data.histories, e.recordShow = !0);
                        });
                    },
                    selectNum: function(t) {
                        console.log("e", t), "微信号" == this.numDefault ? this.info.weixin = t[0].label : this.info.phone = t[0].label;
                    },
                    backImgList: function() {
                        var t = this;
                        this.$net.req("/background/getLists").then(function(e) {
                            200 == e.code && (t.list = e.data, t.info.background_image = e.data[0]);
                        });
                    },
                    changeSwiper: function(t) {
                        this.swiperCurrent = t.detail.current;
                    },
                    selectIndex: function() {
                        this.info.background_image = this.list[this.swiperCurrent], this.imgShow = !1;
                    },
                    changeTag: function() {
                        var e = this;
                        if (0 != this.info.secret_category_id) {
                            this.tagShow = !0;
                            var n = this.info.secret_category_id;
                            this.$net.req("/secret_category/tags", {
                                secret_category_id: n
                            }).then(function(t) {
                                200 == t.code && (e.tagList = t.data);
                            });
                        } else t.showToast({
                            title: "请先选择分类",
                            icon: "none"
                        });
                    },
                    changeNum: function(t) {
                        this.numDefault = this.numList[t].text;
                    },
                    confirm: function(t) {
                        this.info.secret_category_id = t[0].value;
                    },
                    getId: function(t) {
                        var e;
                        return 0 == t ? e = "选择秘密分类" : (this.classifyList.some(function(n) {
                            return t == n.secret_category_id && (e = n.name), e;
                        }), e);
                    },
                    selectTag: function(t) {
                        this.info.secret_category_tags += "#" + this.tagList[t].tag, this.tagShow = !1;
                    },
                    addTags: function(t) {
                        this.info.secret_category_tags += "#";
                    },
                    sameCity: function(t) {
                        var e = this;
                        if (1 == t) {
                            this.info.is_same_city = t;
                            var n = this.location, i = n.latitude + "," + n.longitude;
                            this.$net.req("/address/getAddress", {
                                coordinate: i
                            }).then(function(t) {
                                200 == t.code && (e.info.province = t.data.province, e.info.city = t.data.city);
                            });
                        } else this.info.is_same_city = t, this.info.province = "", this.info.city = "";
                    },
                    upImg: function(t, e, n, i) {
                        this.showUploadList = !0, 200 == t.code && (this.uploadStatus = 0, this.info.images[e] = t.url);
                    },
                    delImg: function(t, e, n) {
                        this.info.images.splice(t, 1);
                    },
                    getUserProfile: function() {
                        var t = this;
                        wx.getUserProfile({
                            desc: "用于完善个人信息",
                            success: function(e) {
                                console.log("getUserProfile res", e), t.updateUser(e.userInfo);
                            },
                            fail: function(t) {
                                console.error("err", t);
                            }
                        });
                    },
                    updateUser: function(t) {
                        this.$net.req("/user/update", {
                            data: t
                        }).then(function(t) {
                            t.code;
                        });
                    },
                    submit: function() {
                        if (this.pitch) {
                            if ("" == this.userInfo.nickName) return t.showToast({
                                title: "请先授权用户信息",
                                icon: "none"
                            }), void this.getUserProfile();
                            if ("" != this.info.title) if ("" != this.info.secret_category_id) if ("" != this.info.content) {
                                if (1 == this.config.secret_contact_switch && 1 == this.config.secret_contact_must) {
                                    if ("微信号" == this.numDefault && "" == this.info.weixin) return void t.showToast({
                                        title: "请填写微信号"
                                    });
                                    if ("手机号" == this.numDefault && "" == this.info.phone) return void t.showToast({
                                        title: "请填写手机号"
                                    });
                                }
                                var e = this, n = this.info;
                                e.$net.req("/Secret/write", {
                                    data: n
                                }).then(function(n) {
                                    200 == n.code && (0 == n.data.is_paid ? t.requestPayment(o(o({
                                        provider: "wxpay"
                                    }, n.data.payment), {}, {
                                        success: function(n) {
                                            console.log("res", n), t.showToast({
                                                title: "发布成功"
                                            }), e.info = {
                                                title: "",
                                                content: "",
                                                phone: "",
                                                weixin: "",
                                                images: [],
                                                is_same_city: 0,
                                                secret_category_id: 0,
                                                secret_category_tags: "",
                                                coordinate: [],
                                                background_image: "",
                                                province: "",
                                                city: ""
                                            }, setTimeout(function() {
                                                t.switchTab({
                                                    url: "/pages/index/index"
                                                });
                                            }, 1500);
                                        },
                                        fail: function(e) {
                                            console.error(e), t.showToast({
                                                title: e,
                                                icon: "none"
                                            });
                                        }
                                    })) : (t.showToast({
                                        title: "发布成功"
                                    }), e.info = {
                                        title: "",
                                        content: "",
                                        phone: "",
                                        weixin: "",
                                        images: [],
                                        is_same_city: 0,
                                        secret_category_id: 0,
                                        secret_category_tags: "",
                                        coordinate: [],
                                        background_image: "",
                                        province: "",
                                        city: ""
                                    }, setTimeout(function() {
                                        t.switchTab({
                                            url: "/pages/index/index"
                                        });
                                    }, 1500)));
                                });
                            } else t.showToast({
                                title: "请填写秘密",
                                icon: "none"
                            }); else t.showToast({
                                title: "请选择分类",
                                icon: "none"
                            }); else t.showToast({
                                title: "请填写标题",
                                icon: "none"
                            });
                        } else t.showToast({
                            title: "请先勾选协议",
                            icon: "none"
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "9d8a": function(t, e, n) {
        var i = n("2614");
        n.n(i).a;
    },
    ad71: function(t, e, n) {
        n.r(e);
        var i = n("927d"), o = n.n(i);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = o.a;
    },
    b9a4: function(t, e, n) {},
    d56d: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("ee26"), e(n("66fd")), t(e(n("6259")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "d56d", "common/runtime", "common/vendor" ] ] ]);