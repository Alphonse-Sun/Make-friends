(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/like-detail" ], {
    "3c76": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "0dc4"));
            },
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "0a43"));
            },
            uPopup: function() {
                return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "5828"));
            },
            uInput: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input") ]).then(n.bind(null, "e37a"));
            },
            uUpload: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-upload/u-upload") ]).then(n.bind(null, "cb51"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
            },
            uSelect: function() {
                return n.e("uview-ui/components/u-select/u-select").then(n.bind(null, "ed59"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "b395"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.numShow = !0;
            }, t.e1 = function(e) {
                t.posterShow = !1;
            }, t.e2 = function(e) {
                t.posterShow = !1;
            });
        }, r = [];
    },
    "440e": function(t, e, n) {
        n.r(e);
        var i = n("3c76"), o = n("fb88");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("ef37");
        var s = n("f0c5"), a = Object(s.a)(o.default, i.b, i.c, !1, null, "ae5bfeae", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    "467e": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function o(t, e, n, i, o, r, s) {
                try {
                    var a = t[r](s), u = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(u) : Promise.resolve(u).then(i, o);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, r) {
                        var s = t.apply(e, n);
                        function a(t) {
                            o(s, i, r, a, u, "next", t);
                        }
                        function u(t) {
                            o(s, i, r, a, u, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var c = {
                data: function() {
                    return {
                        background: {
                            background: "transparent"
                        },
                        queryParams: {
                            where: {
                                secret_id: ""
                            },
                            page: 1,
                            limit: 10
                        },
                        secretShow: !1,
                        posterShow: !1,
                        showUploadList: !1,
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
                        uploadStatus: 0,
                        lists: [],
                        list: [],
                        recordShow: !1,
                        recordList: []
                    };
                },
                onLoad: function(t) {
                    t.id && (this.queryParams.where.secret_id = t.id, this.queryParams.where.my_like = 1), 
                    t.user_id && (this.queryParams.where.my_home = t.user_id, this.queryParams.where.secret_id = t.id, 
                    this.queryParams.where.my_like = "");
                },
                onShow: function() {
                    0 == this.uploadStatus && this.getList();
                },
                onShareAppMessage: function() {
                    return {
                        title: this.userInfo.nickName.slice(0, 10).slice(0, 10) + "邀请您交换秘密",
                        path: "/pages/index/index?secret_id=" + this.defaultList.secret_id + "&user_id=" + this.userInfo.user_id
                    };
                },
                computed: a({}, (0, n("2f62").mapGetters)([ "userInfo", "config", "location" ])),
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
                    getList: function() {
                        var e = this;
                        this.$net.req("/Secret/getLists", this.queryParams).then(function(n) {
                            if (200 == n.code) {
                                if (0 == n.data.list.length) return void t.showToast({
                                    title: "暂无更多",
                                    icon: "none"
                                });
                                e.list = e.list.concat(n.data.list);
                            }
                        });
                    },
                    beforeUpload: function() {
                        this.uploadStatus = 1;
                    },
                    writeSercet: function(t, e) {
                        console.log("writeSercet"), this.defaultIndex = e, this.secret_id = t, this.secretShow = !0;
                    },
                    viewDetail: function(e) {
                        t.navigateTo({
                            url: "/pages/index/detail?id=" + e
                        });
                    },
                    upImg: function(t, e, n, i) {
                        this.showUploadList = !0, 200 == t.code && (this.uploadStatus = 0, this.lists[e] = t.url);
                    },
                    delImg: function(t, e, n) {
                        this.lists.splice(t, 1);
                    },
                    like: function(e, n) {
                        var i = this;
                        this.defaultList = this.list[n], this.$net.req("/Secret/like", {
                            secret_id: e
                        }).then(function(e) {
                            200 == e.code && (t.showToast({
                                title: e.msg,
                                icon: "none"
                            }), i.list[n].is_like ? (i.list[n].is_like = 0, i.list[n].like_number--) : (i.list[n].is_like = 1, 
                            i.list[n].like_number++));
                        });
                    },
                    follow: function(e, n) {
                        var i = this;
                        this.$net.req("/follow/following", {
                            follow_user_id: e
                        }).then(function(e) {
                            200 == e.code && (i.list[n].user.is_follow || (i.list[n].user.is_follow = 1), t.showToast({
                                title: e.msg,
                                icon: "none"
                            }));
                        });
                    },
                    unfollow: function(e, n) {
                        var i = this;
                        this.$net.req("/follow/unfollow", {
                            follow_user_id: e
                        }).then(function(e) {
                            200 == e.code && (i.list[n].user.is_follow && (i.list[n].user.is_follow = 0), t.showToast({
                                title: e.msg,
                                icon: "none"
                            }));
                        });
                    },
                    changeLength: function(t) {
                        console.log("e.detail.current", t.detail.current), console.log("this.list.length", this.list.length), 
                        t.detail.current == this.list.length - 1 && (this.queryParams.page++, this.getList());
                    },
                    submit: function() {
                        if (1 == this.config.secret_contact_switch && 1 == this.config.secret_contact_must) {
                            if ("微信号" == this.numDefault && "" == this.weixin) return void t.showToast({
                                title: "请填写微信号"
                            });
                            if ("手机号" == this.numDefault && "" == this.phone) return void t.showToast({
                                title: "请填写手机号"
                            });
                        }
                        if ("" != this.content) {
                            var e = this, n = {
                                secret_id: e.secret_id,
                                data: {
                                    content: e.content,
                                    images: e.lists,
                                    phone: e.phone,
                                    weixin: e.weixin
                                }
                            };
                            console.log("data", n), e.$net.req("/Secret/swap", n).then(function(n) {
                                200 == n.code && (1 == e.config.payment_switch ? t.requestPayment(a(a({
                                    provider: "wxpay"
                                }, n.data.payment), {}, {
                                    success: function(n) {
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
                    },
                    posterShare: function(t) {
                        var e = this;
                        this.imgSrc = "", this.avatar = "", this.backImg = "", this.backImgs = "", this.borderImg = "", 
                        this.qrcode = "", this.hands = "", this.defaultList = this.list[t];
                        var n = this.list[t].secret_id;
                        this.$net.req("/Secret/share", {
                            secret_id: n
                        }).then(function(n) {
                            200 == n.code && e.list[t].share_number++;
                        }), this.posterShow = !0, this.QrCode(n);
                    },
                    QrCode: function(t) {
                        var e = this, n = {
                            user_id: this.userInfo.user_id,
                            secret_id: t
                        };
                        this.$net.req("/Share/getCode", {
                            scene: n
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
                        var e = this;
                        "" == e.imgSrc && (t.showLoading({
                            title: "图片生成中...",
                            mask: !0
                        }), e.downloadImg("avatar", e.userInfo.header_image), e.downloadImg("backImg", e.defaultList.background_image), 
                        e.downloadImg("backImgs", e.config.poster_bg), e.downloadImg("borderImg", e.config.poster_bottom), 
                        e.downloadImg("qrcode", e.weChatcode), e.downloadImg("hands", e.config.poster_hand));
                    },
                    downloadImg: function(e, n) {
                        var i = this;
                        t.downloadFile({
                            url: n,
                            success: function(n) {
                                i[e] = n.tempFilePath, "" != i.avatar && "" != i.backImg && "" != i.backImgs && "" != i.borderImg && "" != i.qrcode && "" != i.hands && (t.hideLoading(), 
                                i.draw());
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
                    darwRoundRect: function(t, e, n, i, o, r, s) {
                        r.save(), r.beginPath(), r.arc(t + o, e + o, o, 1 * Math.PI, 1.5 * Math.PI), r.moveTo(t, e + o), 
                        r.lineTo(t, e + i - o), r.arc(t + o, e + i - o, o, .5 * Math.PI, 1 * Math.PI), r.lineTo(t + o, e + i), 
                        r.lineTo(t + n - o, e + i), r.arc(t + n - o, e + i - o, o, 0 * Math.PI, .5 * Math.PI), 
                        r.lineTo(t + n, e + i - o), r.lineTo(t + n, e + o), r.arc(t + n - o, e + o, o, 1.5 * Math.PI, 2 * Math.PI), 
                        r.lineTo(t + n - o, e), r.lineTo(t + o, e), r.setFillStyle(s), r.fill(), r.restore();
                    },
                    drawImg: function(t, e, n, o, s, a) {
                        var u = this;
                        return r(i.default.mark(function r() {
                            var c;
                            return i.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    c = u, a.drawImage(t, c.px_to_rpx(e), c.px_to_rpx(n), c.px_to_rpx(o), c.px_to_rpx(s));

                                  case 2:
                                  case "end":
                                    return i.stop();
                                }
                            }, r);
                        }))();
                    },
                    draw: function() {
                        var e = this;
                        return r(i.default.mark(function n() {
                            var o, r, s, a, u;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    o = e, (r = t.createCanvasContext("shareImg", e)).setFillStyle("#FFFFFF"), r.fillRect(0, 0, o.px_to_rpx(o.w), o.px_to_rpx(o.h)), 
                                    r.restore(), r.setFillStyle("#333333"), r.setFontSize(o.px_to_rpx(28)), r.fillText(o.userInfo.nickName, o.px_to_rpx(252), o.px_to_rpx(180)), 
                                    r.setFillStyle("#333333"), r.setFontSize(o.px_to_rpx(32)), r.fillText("邀请你来参与交换秘密", o.px_to_rpx(134), o.px_to_rpx(222)), 
                                    o.drawImg(o.backImg, 20, 302, 550, 762, r), o.drawImg(o.backImgs, 20, 302, 550, 762, r), 
                                    r.setFillStyle("#FC9D6D"), r.setFontSize(o.px_to_rpx(24)), s = [], o.defaultList.tags.forEach(function(t) {
                                        s.push(t);
                                    }), a = "#" + s.join(" #"), r.fillText(a, o.px_to_rpx(40), o.px_to_rpx(814)), r.setFillStyle("#FFFFFF"), 
                                    r.setFontSize(o.px_to_rpx(28)), u = o.defaultList.title.length > 15 ? o.defaultList.title.slice(0, 15) + "..." : o.defaultList.title, 
                                    r.fillText(u, o.px_to_rpx(40), o.px_to_rpx(856)), o.drawImg(o.borderImg, 20, 1084, 550, 180, r), 
                                    r.setFillStyle("#6B7FF7"), r.setFontSize(o.px_to_rpx(32)), r.fillText("扫码识别", o.px_to_rpx(60), o.px_to_rpx(1158)), 
                                    o.drawImg(o.hands, 198, 1130, 40, 32, r), r.setFillStyle("#000000"), r.setFontSize(o.px_to_rpx(28)), 
                                    r.fillText("更多秘密等你来交换", o.px_to_rpx(60), o.px_to_rpx(1216)), o.drawImg(o.qrcode, 394, 1106, 136, 136, r), 
                                    r.save(), r.beginPath(), r.arc(o.px_to_rpx(294), o.px_to_rpx(96), o.px_to_rpx(48), 0, 2 * Math.PI, !1), 
                                    r.clip(), r.drawImage(o.avatar, o.px_to_rpx(246), o.px_to_rpx(48), o.px_to_rpx(96), o.px_to_rpx(96)), 
                                    r.restore(), r.draw(!0, function() {
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
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "5dfd": function(t, e, n) {},
    "9ece": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("ee26"), e(n("66fd")), t(e(n("440e")).default);
        }).call(this, n("543d").createPage);
    },
    ef37: function(t, e, n) {
        var i = n("5dfd");
        n.n(i).a;
    },
    fb88: function(t, e, n) {
        n.r(e);
        var i = n("467e"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    }
}, [ [ "9ece", "common/runtime", "common/vendor" ] ] ]);