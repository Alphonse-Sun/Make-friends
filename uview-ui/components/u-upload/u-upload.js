require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-upload/u-upload" ], {
    "069c": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function o(e, t, n, i, o, s, r) {
                try {
                    var a = e[s](r), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(u) : Promise.resolve(u).then(i, o);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(i, s) {
                        var r = e.apply(t, n);
                        function a(e) {
                            o(r, i, s, a, u, "next", e);
                        }
                        function u(e) {
                            o(r, i, s, a, u, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var r = {
                name: "u-upload",
                props: {
                    showUploadList: {
                        type: Boolean,
                        default: !0
                    },
                    action: {
                        type: String,
                        default: ""
                    },
                    maxCount: {
                        type: [ String, Number ],
                        default: 52
                    },
                    showProgress: {
                        type: Boolean,
                        default: !0
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    imageMode: {
                        type: String,
                        default: "aspectFill"
                    },
                    header: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    formData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    name: {
                        type: String,
                        default: "file"
                    },
                    sizeType: {
                        type: Array,
                        default: function() {
                            return [ "original", "compressed" ];
                        }
                    },
                    sourceType: {
                        type: Array,
                        default: function() {
                            return [ "album", "camera" ];
                        }
                    },
                    previewFullImage: {
                        type: Boolean,
                        default: !0
                    },
                    multiple: {
                        type: Boolean,
                        default: !0
                    },
                    deletable: {
                        type: Boolean,
                        default: !0
                    },
                    maxSize: {
                        type: [ String, Number ],
                        default: Number.MAX_VALUE
                    },
                    fileList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    uploadText: {
                        type: String,
                        default: "选择图片"
                    },
                    autoUpload: {
                        type: Boolean,
                        default: !0
                    },
                    showTips: {
                        type: Boolean,
                        default: !0
                    },
                    customBtn: {
                        type: Boolean,
                        default: !1
                    },
                    width: {
                        type: [ String, Number ],
                        default: 200
                    },
                    height: {
                        type: [ String, Number ],
                        default: 200
                    },
                    delBgColor: {
                        type: String,
                        default: "#fa3534"
                    },
                    delColor: {
                        type: String,
                        default: "#ffffff"
                    },
                    delIcon: {
                        type: String,
                        default: "close"
                    },
                    toJson: {
                        type: Boolean,
                        default: !0
                    },
                    beforeUpload: {
                        type: Function,
                        default: null
                    },
                    beforeRemove: {
                        type: Function,
                        default: null
                    },
                    limitType: {
                        type: Array,
                        default: function() {
                            return [ "png", "jpg", "jpeg", "webp", "gif", "image" ];
                        }
                    },
                    index: {
                        type: [ Number, String ],
                        default: ""
                    }
                },
                mounted: function() {},
                data: function() {
                    return {
                        lists: [],
                        isInCount: !0,
                        uploading: !1
                    };
                },
                watch: {
                    fileList: {
                        immediate: !0,
                        handler: function(e) {
                            var t = this;
                            e.map(function(e) {
                                !t.lists.some(function(t) {
                                    return t.url == e.url;
                                }) && t.lists.push({
                                    url: e.url,
                                    error: !1,
                                    progress: 100
                                });
                            });
                        }
                    },
                    lists: function(e) {
                        this.$emit("on-list-change", e, this.index);
                    }
                },
                methods: {
                    clear: function() {
                        this.lists = [];
                    },
                    reUpload: function() {
                        this.uploadFile();
                    },
                    selectFile: function() {
                        var t = this;
                        if (!this.disabled) {
                            this.name;
                            var n = this.maxCount, i = this.multiple, o = this.maxSize, s = this.sizeType, r = this.lists, a = (this.camera, 
                            this.compressed, this.maxDuration, this.sourceType), u = n - r.length;
                            new Promise(function(t, n) {
                                e.chooseImage({
                                    count: i ? u > 9 ? 9 : u : 1,
                                    sourceType: a,
                                    sizeType: s,
                                    success: t,
                                    fail: n
                                });
                            }).then(function(e) {
                                var s = t.lists.length;
                                e.tempFiles.map(function(e, s) {
                                    if (t.checkFileExt(e) && (i || !(s >= 1))) if (e.size > o) t.$emit("on-oversize", e, t.lists, t.index), 
                                    t.showToast("超出允许的文件大小"); else {
                                        if (n <= r.length) return t.$emit("on-exceed", e, t.lists, t.index), void t.showToast("超出最大允许的文件个数");
                                        r.push({
                                            url: e.path,
                                            progress: 0,
                                            error: !1,
                                            file: e
                                        });
                                    }
                                }), t.$emit("on-choose-complete", t.lists, t.index), t.autoUpload && t.uploadFile(s);
                            }).catch(function(e) {
                                t.$emit("on-choose-fail", e);
                            });
                        }
                    },
                    showToast: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        (this.showTips || n) && e.showToast({
                            title: t,
                            icon: "none"
                        });
                    },
                    upload: function() {
                        this.uploadFile();
                    },
                    retry: function(t) {
                        this.lists[t].progress = 0, this.lists[t].error = !1, this.lists[t].response = null, 
                        e.showLoading({
                            title: "重新上传"
                        }), this.uploadFile(t);
                    },
                    uploadFile: function() {
                        var t = arguments, n = this;
                        return s(i.default.mark(function o() {
                            var s, r;
                            return i.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    if (s = t.length > 0 && void 0 !== t[0] ? t[0] : 0, !n.disabled) {
                                        i.next = 3;
                                        break;
                                    }
                                    return i.abrupt("return");

                                  case 3:
                                    if (!n.uploading) {
                                        i.next = 5;
                                        break;
                                    }
                                    return i.abrupt("return");

                                  case 5:
                                    if (!(s >= n.lists.length)) {
                                        i.next = 8;
                                        break;
                                    }
                                    return n.$emit("on-uploaded", n.lists, n.index), i.abrupt("return");

                                  case 8:
                                    if (100 != n.lists[s].progress) {
                                        i.next = 11;
                                        break;
                                    }
                                    return 0 == n.autoUpload && n.uploadFile(s + 1), i.abrupt("return");

                                  case 11:
                                    if (!n.beforeUpload || "function" != typeof n.beforeUpload) {
                                        i.next = 22;
                                        break;
                                    }
                                    if (!(r = n.beforeUpload.bind(n.$u.$parent.call(n))(s, n.lists)) || "function" != typeof r.then) {
                                        i.next = 18;
                                        break;
                                    }
                                    return i.next = 16, r.then(function(e) {}).catch(function(e) {
                                        return n.uploadFile(s + 1);
                                    });

                                  case 16:
                                    i.next = 22;
                                    break;

                                  case 18:
                                    if (!1 !== r) {
                                        i.next = 22;
                                        break;
                                    }
                                    return i.abrupt("return", n.uploadFile(s + 1));

                                  case 22:
                                    if (n.action) {
                                        i.next = 25;
                                        break;
                                    }
                                    return n.showToast("请配置上传地址", !0), i.abrupt("return");

                                  case 25:
                                    n.lists[s].error = !1, n.uploading = !0, e.uploadFile({
                                        url: n.action,
                                        filePath: n.lists[s].url,
                                        name: n.name,
                                        formData: n.formData,
                                        header: n.header,
                                        success: function(e) {
                                            var t = n.toJson && n.$u.test.jsonString(e.data) ? JSON.parse(e.data) : e.data;
                                            [ 200, 201, 204 ].includes(e.statusCode) ? (n.lists[s].response = t, n.lists[s].progress = 100, 
                                            n.lists[s].error = !1, n.$emit("on-success", t, s, n.lists, n.index)) : n.uploadError(s, t);
                                        },
                                        fail: function(e) {
                                            n.uploadError(s, e);
                                        },
                                        complete: function(t) {
                                            e.hideLoading(), n.uploading = !1, n.uploadFile(s + 1), n.$emit("on-change", t, s, n.lists, n.index);
                                        }
                                    }).onProgressUpdate(function(e) {
                                        e.progress > 0 && (n.lists[s].progress = e.progress, n.$emit("on-progress", e, s, n.lists, n.index));
                                    });

                                  case 29:
                                  case "end":
                                    return i.stop();
                                }
                            }, o);
                        }))();
                    },
                    uploadError: function(e, t) {
                        this.lists[e].progress = 0, this.lists[e].error = !0, this.lists[e].response = null, 
                        this.$emit("on-error", t, e, this.lists, this.index), this.showToast("上传失败，请重试");
                    },
                    deleteItem: function(t) {
                        var n = this;
                        e.showModal({
                            title: "提示",
                            content: "您确定要删除此项吗？",
                            success: function() {
                                var e = s(i.default.mark(function e(o) {
                                    var s;
                                    return i.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (!o.confirm) {
                                                e.next = 12;
                                                break;
                                            }
                                            if (!n.beforeRemove || "function" != typeof n.beforeRemove) {
                                                e.next = 11;
                                                break;
                                            }
                                            if (!(s = n.beforeRemove.bind(n.$u.$parent.call(n))(t, n.lists)) || "function" != typeof s.then) {
                                                e.next = 8;
                                                break;
                                            }
                                            return e.next = 6, s.then(function(e) {
                                                n.handlerDeleteItem(t);
                                            }).catch(function(e) {
                                                n.showToast("已终止移除");
                                            });

                                          case 6:
                                            e.next = 9;
                                            break;

                                          case 8:
                                            !1 === s ? n.showToast("已终止移除") : n.handlerDeleteItem(t);

                                          case 9:
                                            e.next = 12;
                                            break;

                                          case 11:
                                            n.handlerDeleteItem(t);

                                          case 12:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    handlerDeleteItem: function(e) {
                        this.lists[e].process < 100 && this.lists[e].process > 0 && void 0 !== this.lists[e].uploadTask && this.lists[e].uploadTask.abort(), 
                        this.lists.splice(e, 1), this.$forceUpdate(), this.$emit("on-remove", e, this.lists, this.index), 
                        this.showToast("移除成功");
                    },
                    remove: function(e) {
                        e >= 0 && e < this.lists.length && (this.lists.splice(e, 1), this.$emit("on-list-change", this.lists, this.index));
                    },
                    doPreviewImage: function(t, n) {
                        var i = this;
                        if (this.previewFullImage) {
                            var o = this.lists.map(function(e) {
                                return e.url || e.path;
                            });
                            e.previewImage({
                                urls: o,
                                current: t,
                                success: function() {
                                    i.$emit("on-preview", t, i.lists, i.index);
                                },
                                fail: function() {
                                    e.showToast({
                                        title: "预览图片失败",
                                        icon: "none"
                                    });
                                }
                            });
                        }
                    },
                    checkFileExt: function(e) {
                        var t, n;
                        return n = e.path.replace(/.+\./, "").toLowerCase(), (t = this.limitType.some(function(e) {
                            return e.toLowerCase() === n;
                        })) || this.showToast("不允许选择".concat(n, "格式的文件")), t;
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    "0f90": function(e, t, n) {},
    8766: function(e, t, n) {
        n.r(t);
        var i = n("069c"), o = n.n(i);
        for (var s in i) "default" !== s && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        t.default = o.a;
    },
    "8d64": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "f9f2"));
            },
            uLineProgress: function() {
                return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null, "091a"));
            }
        }, o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.showUploadList ? e.$u.addUnit(e.width) : null), n = e.showUploadList ? e.$u.addUnit(e.height) : null, i = !e.disabled && e.maxCount > e.lists.length && !e.customBtn ? e.$u.addUnit(e.width) : null, o = !e.disabled && e.maxCount > e.lists.length && !e.customBtn ? e.$u.addUnit(e.height) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: n,
                    g2: i,
                    g3: o
                }
            }), "augmented" === e.$scope.data.scopedSlotsCompiler && e.$setScopedSlotsParams("file", {
                file: e.lists
            });
        }, s = [];
    },
    cb51: function(e, t, n) {
        n.r(t);
        var i = n("8d64"), o = n("8766");
        for (var s in o) "default" !== s && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(s);
        n("fbb2");
        var r = n("f0c5"), a = Object(r.a)(o.default, i.b, i.c, !1, null, "2f010004", null, !1, i.a, void 0);
        t.default = a.exports;
    },
    fbb2: function(e, t, n) {
        var i = n("0f90");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-upload/u-upload-create-component", {
    "uview-ui/components/u-upload/u-upload-create-component": function(e, t, n) {
        n("543d").createComponent(n("cb51"));
    }
}, [ [ "uview-ui/components/u-upload/u-upload-create-component" ] ] ]);