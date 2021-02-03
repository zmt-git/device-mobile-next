"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
var httpUtil_1 = require("./httpUtil");
var auth_1 = require("../auth/auth");
var requestHandler_1 = require("../../handler/requestHandler");
var header = {
    "Content-Type": "application/json",
    'token': auth_1.getToken()
};
var upload = function (opt) {
    opt.files = opt.files || [];
    if (opt.formData) {
        opt.formData = httpUtil_1.getData(opt.formData);
    }
    opt.filePath = opt.filePath;
    if (!auth_1.getToken()) {
        wx.navigateTo({
            url: '../../pages/login/login'
        });
        return Promise.reject('token error');
    }
    header.token = auth_1.getToken();
    return new Promise(function (resolve, reject) {
        wx.uploadFile({
            url: httpsSetting_1.HTTPSSETTING.requestUrl,
            filePath: opt.filePath,
            name: opt.name,
            formData: opt.formData,
            header: header,
            success: function (res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res);
                }
                else {
                    requestHandler_1.errorHandler(res);
                    reject(res);
                }
            },
            fail: function (e) {
                reject(e);
            },
            complete: function () {
                wx.hideLoading();
                wx.stopPullDownRefresh();
            }
        });
    });
};
exports.default = upload;
