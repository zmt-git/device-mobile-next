"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
function setToken(val, key) {
    if (key === void 0) { key = httpsSetting_1.HTTPSSETTING.accessTokenKey; }
    wx.setStorageSync(key, val);
}
exports.setToken = setToken;
function getToken(key) {
    if (key === void 0) { key = httpsSetting_1.HTTPSSETTING.accessTokenKey; }
    return wx.getStorageSync(key);
}
exports.getToken = getToken;
function removeToken(key) {
    if (key === void 0) { key = httpsSetting_1.HTTPSSETTING.accessTokenKey; }
    wx.removeStorageSync(key);
}
exports.removeToken = removeToken;
