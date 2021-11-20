(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "03a9": function(t, e, i) {
        i.d(e, "b", function() {
            return o;
        }), i.d(e, "c", function() {
            return s;
        }), i.d(e, "a", function() {
            return n;
        });
        var n = {
            uImage: function() {
                return i.e("uview-ui/components/u-image/u-image").then(i.bind(null, "0dc4"));
            },
            uPopup: function() {
                return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "5828"));
            },
            uInput: function() {
                return Promise.all([ i.e("common/vendor"), i.e("uview-ui/components/u-input/u-input") ]).then(i.bind(null, "e37a"));
            },
            uUpload: function() {
                return Promise.all([ i.e("common/vendor"), i.e("uview-ui/components/u-upload/u-upload") ]).then(i.bind(null, "cb51"));
            },
            uIcon: function() {
                return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "f9f2"));
            },
            uCheckboxGroup: function() {
                return Promise.all([ i.e("common/vendor"), i.e("uview-ui/components/u-checkbox-group/u-checkbox-group") ]).then(i.bind(null, "0427"));
            },
            uCheckbox: function() {
                return i.e("uview-ui/components/u-checkbox/u-checkbox").then(i.bind(null, "0e85"));
            },
            uSelect: function() {
                return i.e("uview-ui/components/u-select/u-select").then(i.bind(null, "ed59"));
            },
            uActionSheet: function() {
                return i.e("uview-ui/components/u-action-sheet/u-action-sheet").then(i.bind(null, "b395"));
            },
            customTabbar: function() {
                return i.e("components/custom-tabbar/custom-tabbar").then(i.bind(null, "fd9a"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.numShow = !0;
            }, t.e1 = function(e) {
                t.classifyShow = !1;
            }, t.e2 = function(e) {
                t.posterShow = !1;
            }, t.e3 = function(e) {
                t.posterShow = !1;
            });
        }, s = [];
    },
    "31bf": function(t, e, i) {},
    "359d": function(t, e, i) {
        i.r(e);
        var n = i("03a9"), o = i("8e47");
        for (var s in o) "default" !== s && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("bae4"), i("6aef");
        var r = i("f0c5"), a = Object(r.a)(o.default, n.b, n.c, !1, null, "6cad7562", null, !1, n.a, void 0);
        e.default = a.exports;
    },
    "43b1": function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("ee26"), e(i("66fd")), t(e(i("359d")).default);
        }).call(this, i("543d").createPage);
    },
    "6aef": function(t, e, i) {
        var n = i("92d7");
        i.n(n).a;
    },
    "8e47": function(t, e, i) {
        i.r(e);
        var n = i("9fe7"), o = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = o.a;
    },
    "92d7": function(t, e, i) {},
    "9fe7": function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(i("a34a"));
            function o(t, e, i, n, o, s, r) {
                try {
                    var a = t[s](r), c = a.value;
                } catch (t) {
                    return void i(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function s(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, s) {
                        var r = t.apply(e, i);
                        function a(t) {
                            o(r, n, s, a, c, "next", t);
                        }
                        function c(t) {
                            o(r, n, s, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function r(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, n);
                }
                return i;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(i), !0).forEach(function(e) {
                        c(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            function c(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            var u = {
                data: function() {
                    return {
                        paddingTopNum: t.getSystemInfoSync().statusBarHeight + 7,
                        pageTopHeight: wx.getSystemInfoSync().statusBarHeight + 40 + 7,
                        select: 1,
                        topImg: [ {
                            name: "同城"
                        }, {
                            name: "推荐"
                        }, {
                            name: "分类"
                        } ],
                        classifyShow: !1,
                        background: {
                            background: "transparent"
                        },
                        secretShow: !1,
                        showUploadList: !1,
                        lists: [],
                        classifyList: [],
                        queryParams: {
                            where: {
                                secret_category_id: 0,
                                coordinate: ""
                            },
                            limit: 10,
                            page: 1
                        },
                        list: [],
                        posterShow: !1,
                        imgSrc: "",
                        w: 590,
                        h: 1282,
                        avatar: "",
                        backImg: "",
                        backImgs: "",
                        borderImg: "",
                        secret_id: "",
                        action: this.$net.base + "/upload/image",
                        numShow: !1,
                        numList: [ {
                            text: "微信号"
                        }, {
                            text: "手机号"
                        } ],
                        numDefault: "微信号",
                        content: "",
                        phone: "",
                        weixin: "",
                        qrcode: "",
                        hands: "",
                        defaultList: "",
                        defaultIndex: -1,
                        weChatcode: "",
                        share_id: "",
                        uploadStatus: 0,
                        recordShow: !1,
                        recordList: [],
                        pitch: !1,
                        swiperCurrent: 0
                    };
                },
                onLoad: function(t) {
                    console.log("query", t);
                    var e = {};
                    if (t.scene) {
                        var i = decodeURIComponent(t.scene);
                        i = i.split("!"), console.log("scene", i), i.forEach(function(t) {
                            var i = t.split("=");
                            e[i[0]] = parseInt(i[1]);
                        });
                    } else e = t;
                    if (this.queryParams.where.secret_id = e.secret_id, this.share_id = e.user_id, this.share_id) {
                        var n = e.user_id;
                        this.$net.req("/user/direct", {
                            parent_user_id: n
                        }).then(function(t) {});
                    }
                },
                onShow: function() {
                    0 == this.uploadStatus && (this.classify(), this.flushList());
                },
                onShareAppMessage: function() {
                    return {
                        title: this.userInfo.nickName.slice(0, 10).slice(0, 10) + "邀请您交换秘密",
                        path: "/pages/index/index?secret_id=" + this.defaultList.secret_id + "&user_id=" + this.userInfo.user_id
                    };
                },
                computed: a({}, (0, i("2f62").mapGetters)([ "userInfo", "config", "location" ])),
                methods: {
                    getUserProfile: function() {
                        var t = this;
                        wx.getUserProfile({
                            desc: "用于完善个人信息",
                            success: function(e) {
                                console.log("getUserProfile res", e), t.updateUser(e.userInfo);
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
                        console.log("e", t), "微信号" == this.numDefault ? this.weixin = t[0].label : this.phone = t[0].label;
                    },
                    homeIndex: function(e) {
                        t.navigateTo({
                            url: "/pages/mine/home?user_id=" + e
                        });
                    },
                    changeNum: function(t) {
                        this.numDefault = this.numList[t].text, 0 == t ? this.phone = "" : this.weixin = "";
                    },
                    classify: function() {
                        var t = this;
                        this.$net.req("/secret_category/getLists").then(function(e) {
                            200 == e.code && (t.classifyList = e.data);
                        });
                    },
                    secretList: function() {
                        var e = this;
                        this.$net.req("/Secret/getLists", this.queryParams).then(function(i) {
                            if (200 == i.code) {
                                if (0 == i.data.list.length) return void t.showToast({
                                    title: "暂无更多",
                                    icon: "none"
                                });
                                e.list = e.list.concat(i.data.list);
                            }
                        });
                    },
                    flushList: function() {
                        var t = this, e = this.queryParams;
                        e.limit = this.queryParams.page * this.queryParams.limit, e.page = 1, this.$net.req("/Secret/getLists", e).then(function(e) {
                            200 == e.code && (t.list = e.data.list);
                        });
                    },
                    changeImg: function(t) {
                        if (this.select = t, this.queryParams.page = 1, 2 == t) this.classifyShow = !0, 
                        this.queryParams.where.coordinate = ""; else if (0 == t) {
                            var e = this.location;
                            this.queryParams.where.coordinate = e.latitude + "," + e.longitude, this.list = [], 
                            this.queryParams.where.secret_category_id = "", this.classifyShow = !1, this.secretList();
                        } else this.queryParams.where.coordinate = "", this.queryParams.where.secret_category_id = "", 
                        this.classifyShow = !1, this.list = [], this.secretList();
                    },
                    viewDetail: function(e) {
                        t.navigateTo({
                            url: "/pages/index/detail?id=" + e
                        });
                    },
                    changeName: function(t) {
                        this.topImg[2].name = this.classifyList[t].name, this.queryParams.where.secret_category_id = this.classifyList[t].secret_category_id, 
                        this.queryParams.page = 1, this.classifyShow = !1, this.list = [], this.secretList();
                    },
                    changeLength: function(t) {
                        this.swiperCurrent = t.detail.current, t.detail.current == this.list.length - 1 && (this.queryParams.page++, 
                        this.secretList());
                    },
                    liebiao: function() {
                        var e = this;
                        this.$net.req("/Secret/getLists", this.queryParams).then(function(i) {
                            if (200 == i.code) {
                                if (0 == i.data.list.length) return void t.showToast({
                                    title: "暂无更多",
                                    icon: "none"
                                });
                                e.list = i.data.list;
                            }
                        });
                    },
                    beforeUpload: function() {
                        this.uploadStatus = 1;
                    },
                    upImg: function(t, e, i, n) {
                        this.showUploadList = !0, 200 == t.code && (this.uploadStatus = 0, this.lists[e] = t.url);
                    },
                    delImg: function(t, e, i) {
                        this.lists.splice(t, 1);
                    },
                    like: function(e, i) {
                        var n = this;
                        this.defaultList = this.list[i], this.$net.req("/Secret/like", {
                            secret_id: e
                        }).then(function(e) {
                            200 == e.code && (t.showToast({
                                title: e.msg,
                                icon: "none"
                            }), n.list[i].is_like ? (n.list[i].is_like = 0, n.list[i].like_number--) : (n.list[i].is_like = 1, 
                            n.list[i].like_number++));
                        });
                    },
                    writeSercet: function(t, e) {
                        this.defaultIndex = e, this.secret_id = t, this.secretShow = !0;
                    },
                    submit: function() {
                        if (this.pitch) {
                            if (1 == this.config.secret_contact_switch && 1 == this.config.secret_contact_must) {
                                if ("微信号" == this.numDefault && "" == this.weixin) return void t.showToast({
                                    title: "请填写微信号"
                                });
                                if ("手机号" == this.numDefault && "" == this.phone) return void t.showToast({
                                    title: "请填写手机号"
                                });
                            }
                            if ("" != this.content) {
                                var e = this, i = {
                                    secret_id: e.secret_id,
                                    data: {
                                        content: e.content,
                                        images: e.lists,
                                        phone: e.phone,
                                        weixin: e.weixin
                                    }
                                };
                                console.log("data", i), e.$net.req("/Secret/swap", i).then(function(i) {
                                    200 == i.code && (1 == e.config.payment_switch ? t.requestPayment(a(a({
                                        provider: "wxpay"
                                    }, i.data.payment), {}, {
                                        success: function(i) {
                                            e.list[e.defaultIndex].is_swap = 1, e.content = "", e.lists = [], e.phone = "", 
                                            e.weixin = "", t.showToast({
                                                title: "交换成功",
                                                icon: "none",
                                                mask: !0
                                            }), e.secretShow = !1, setTimeout(function() {
                                                t.navigateTo({
                                                    url: "/pages/index/detail?id=" + e.secret_id
                                                });
                                            }, 2e3);
                                        },
                                        fail: function(e) {
                                            console.error(e), t.showToast({
                                                title: e,
                                                icon: "none"
                                            });
                                        }
                                    })) : (e.list[e.defaultIndex].is_swap = 1, e.content = "", e.lists = [], e.phone = "", 
                                    e.weixin = "", t.showToast({
                                        title: "交换成功",
                                        icon: "none",
                                        mask: !0
                                    }), e.secretShow = !1, setTimeout(function() {
                                        t.navigateTo({
                                            url: "/pages/index/detail?id=" + e.secret_id
                                        });
                                    }, 2e3)));
                                });
                            } else t.showToast({
                                title: "请填写秘密",
                                icon: "none"
                            });
                        } else t.showToast({
                            title: "请先勾选协议",
                            icon: "none"
                        });
                    },
                    follow: function(e, i) {
                        var n = this;
                        this.$net.req("/follow/following", {
                            follow_user_id: e
                        }).then(function(i) {
                            200 == i.code && (n.list.forEach(function(t) {
                                t.user_id == e && (t.user.is_follow = 1);
                            }), t.showToast({
                                title: i.msg,
                                icon: "none"
                            }));
                        });
                    },
                    unfollow: function(e, i) {
                        var n = this;
                        this.$net.req("/follow/unfollow", {
                            follow_user_id: e
                        }).then(function(i) {
                            200 == i.code && (n.list.forEach(function(t) {
                                t.user_id == e && (t.user.is_follow = 0);
                            }), t.showToast({
                                title: i.msg,
                                icon: "none"
                            }));
                        });
                    },
                    posterShare: function(t) {
                        var e = this;
                        this.imgSrc = "", this.avatar = "", this.backImg = "", this.backImgs = "", this.borderImg = "", 
                        this.qrcode = "", this.hands = "", this.defaultList = this.list[t];
                        var i = this.list[t].secret_id;
                        this.$net.req("/Secret/share", {
                            secret_id: i
                        }).then(function(i) {
                            200 == i.code && e.list[t].share_number++;
                        }), this.posterShow = !0, this.QrCode(i);
                    },
                    QrCode: function(t) {
                        var e = this, i = {
                            user_id: this.userInfo.user_id,
                            secret_id: t
                        };
                        this.$net.req("/Share/getCode", {
                            scene: i
                        }).then(function(t) {
                            200 == t.code && (e.weChatcode = t.data.link, e.download_pic());
                        });
                    },
                    SaveCard: function() {
                        var e = this.imgSrc;
                        wx.saveImageToPhotosAlbum({
                            filePath: e,
                            success: function(e) {
                                t.showToast({
                                    icon: "none",
                                    title: "图片保存成功"
                                });
                            }
                        });
                    },
                    download_pic: function() {
                        console.log("生成海报列表", this.defaultList);
                        var e = this;
                        "" == e.imgSrc && (t.showLoading({
                            title: "图片生成中...",
                            mask: !0
                        }), e.downloadImg("avatar", e.userInfo.header_image), e.downloadImg("backImg", e.defaultList.background_image), 
                        e.downloadImg("backImgs", e.config.poster_bg), e.downloadImg("borderImg", e.config.poster_bottom), 
                        e.downloadImg("qrcode", e.weChatcode), e.downloadImg("hands", e.config.poster_hand));
                    },
                    downloadImg: function(e, i) {
                        var n = this;
                        t.downloadFile({
                            url: i,
                            success: function(i) {
                                n[e] = i.tempFilePath, "" != n.avatar && "" != n.backImg && "" != n.backImgs && "" != n.borderImg && "" != n.qrcode && "" != n.hands && (t.hideLoading(), 
                                n.draw());
                            },
                            fail: function(e) {
                                console.log("err", e), t.hideLoading(), t.showToast({
                                    title: "海报制作失败，图片下载失败(海报模版)",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    px_to_rpx: function(t) {
                        return t / 2 * (wx.getSystemInfoSync().windowWidth / 375);
                    },
                    darwRoundRect: function(t, e, i, n, o, s, r) {
                        s.save(), s.beginPath(), s.arc(t + o, e + o, o, 1 * Math.PI, 1.5 * Math.PI), s.moveTo(t, e + o), 
                        s.lineTo(t, e + n - o), s.arc(t + o, e + n - o, o, .5 * Math.PI, 1 * Math.PI), s.lineTo(t + o, e + n), 
                        s.lineTo(t + i - o, e + n), s.arc(t + i - o, e + n - o, o, 0 * Math.PI, .5 * Math.PI), 
                        s.lineTo(t + i, e + n - o), s.lineTo(t + i, e + o), s.arc(t + i - o, e + o, o, 1.5 * Math.PI, 2 * Math.PI), 
                        s.lineTo(t + i - o, e), s.lineTo(t + o, e), s.setFillStyle(r), s.fill(), s.restore();
                    },
                    drawImg: function(t, e, i, o, r, a) {
                        var c = this;
                        return s(n.default.mark(function s() {
                            var u;
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    u = c, a.drawImage(t, u.px_to_rpx(e), u.px_to_rpx(i), u.px_to_rpx(o), u.px_to_rpx(r));

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, s);
                        }))();
                    },
                    draw: function() {
                        var e = this;
                        return s(n.default.mark(function i() {
                            var o, s, r, a, c;
                            return n.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    o = e, (s = t.createCanvasContext("shareImg", e)).setFillStyle("#FFFFFF"), s.fillRect(0, 0, o.px_to_rpx(o.w), o.px_to_rpx(o.h)), 
                                    s.restore(), s.setFillStyle("#333333"), s.setFontSize(o.px_to_rpx(28)), s.fillText(o.userInfo.nickName, o.px_to_rpx(252), o.px_to_rpx(180)), 
                                    s.setFillStyle("#333333"), s.setFontSize(o.px_to_rpx(32)), s.fillText("邀请你来参与交换秘密", o.px_to_rpx(134), o.px_to_rpx(222)), 
                                    o.drawImg(o.backImg, 20, 302, 550, 762, s), o.drawImg(o.backImgs, 20, 302, 550, 762, s), 
                                    s.setFillStyle("#FC9D6D"), s.setFontSize(o.px_to_rpx(24)), r = [], o.defaultList.tags.forEach(function(t) {
                                        r.push(t);
                                    }), a = "#" + r.join(" #"), s.fillText(a, o.px_to_rpx(40), o.px_to_rpx(814)), s.setFillStyle("#FFFFFF"), 
                                    s.setFontSize(o.px_to_rpx(28)), c = o.defaultList.title.length > 15 ? o.defaultList.title.slice(0, 15) + "..." : o.defaultList.title, 
                                    s.fillText(c, o.px_to_rpx(40), o.px_to_rpx(856)), o.drawImg(o.borderImg, 20, 1084, 550, 180, s), 
                                    s.setFillStyle("#6B7FF7"), s.setFontSize(o.px_to_rpx(32)), s.fillText("扫码识别", o.px_to_rpx(60), o.px_to_rpx(1158)), 
                                    o.drawImg(o.hands, 198, 1130, 40, 32, s), s.setFillStyle("#000000"), s.setFontSize(o.px_to_rpx(28)), 
                                    s.fillText("更多秘密等你来交换", o.px_to_rpx(60), o.px_to_rpx(1216)), o.drawImg(o.qrcode, 394, 1106, 136, 136, s), 
                                    s.save(), s.beginPath(), s.arc(o.px_to_rpx(294), o.px_to_rpx(96), o.px_to_rpx(48), 0, 2 * Math.PI, !1), 
                                    s.clip(), s.drawImage(o.avatar, o.px_to_rpx(246), o.px_to_rpx(48), o.px_to_rpx(96), o.px_to_rpx(96)), 
                                    s.restore(), s.draw(!0, function() {
                                        setTimeout(function() {
                                            t.canvasToTempFilePath({
                                                canvasId: "shareImg",
                                                fileType: "jpg",
                                                x: 0,
                                                y: 0,
                                                width: 8 * o.px_to_rpx(o.w),
                                                height: 8 * o.px_to_rpx(o.h),
                                                destWidth: 8 * o.px_to_rpx(o.w),
                                                destHeight: 8 * o.px_to_rpx(o.h),
                                                success: function(t) {
                                                    o.imgSrc = t.tempFilePath;
                                                },
                                                fail: function(t) {}
                                            });
                                        }, 100);
                                    });

                                  case 39:
                                  case "end":
                                    return i.stop();
                                }
                            }, i);
                        }))();
                    }
                }
            };
            e.default = u;
        }).call(this, i("543d").default);
    },
    bae4: function(t, e, i) {
        var n = i("31bf");
        i.n(n).a;
    }
}, [ [ "43b1", "common/runtime", "common/vendor" ] ] ]);