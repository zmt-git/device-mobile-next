"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAppInstance() {
    return getApp();
}
exports.getAppInstance = getAppInstance;
function getGlobalData(key) {
    if (key) {
        return getAppInstance().globalData[key];
    }
    return getAppInstance().globalData;
}
exports.getGlobalData = getGlobalData;
function setGlobalData(key, val) {
    getAppInstance().globalData[key] = val;
}
exports.setGlobalData = setGlobalData;
