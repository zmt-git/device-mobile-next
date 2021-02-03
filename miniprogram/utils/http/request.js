"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
var httpUtil_1 = require("./httpUtil");
var requestHandler_1 = require("../../handler/requestHandler");
var auth_1 = require("../auth/auth");
var header = {
    "Content-Type": "application/json",
    'token': auth_1.getToken()
};
var request = function (opt) {
    var params = '';
    if ('params' in opt) {
        params = httpUtil_1.formateParams(opt.params);
    }
    opt.url = opt.url + params;
    if ('data' in opt) {
        opt.data = httpUtil_1.getData(opt.data);
    }
    header.token = auth_1.getToken();
    return new Promise(function (resolve, reject) {
        wx.request({
            url: httpsSetting_1.HTTPSSETTING.requestUrl + opt.url,
            data: opt.data,
            method: opt.method,
            header: header,
            dataType: 'json',
            success: function (res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
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
exports.default = request;
