"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestHandler_1 = require("../../handler/requestHandler");
var index_1 = require("../../utils/router/index");
var pagination_1 = require("../../mixins/pagination");
var index_2 = require("../../api/index/index");
var useToast_1 = require("../../handler/useToast");
Page({
    data: {
        list: [],
        pagination: {},
        toast: {}
    },
    onLoad: function () {
        var _this = this;
        this.data.pagination = new pagination_1.default({ request: index_2.getDeviceList });
        requestHandler_1.loginCodeHandler(function () {
            _this.data.pagination.getData();
        });
    },
    onUnload: function () {
        this.data.pagination = null;
    },
    toLogin: function () {
        wx.showModal({
            title: '提示',
            content: '确认退出该账号吗？',
            success: function (res) {
                if (res.confirm) {
                    index_1.default.to(index_1.default.type.RL, '/pages/login/login');
                }
            }
        });
    },
    animation: function (e) {
        useToast_1.showToast({ message: e.target.id, type: e.target.id });
    }
});
