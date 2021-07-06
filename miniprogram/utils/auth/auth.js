"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToken = exports.getToken = exports.setToken = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBQTBEO0FBQzFELFNBQWdCLFFBQVEsQ0FBRSxHQUFXLEVBQUUsR0FBd0M7SUFBeEMsb0JBQUEsRUFBQSxNQUFhLDJCQUFZLENBQUMsY0FBYztJQUM3RSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixRQUFRLENBQUUsR0FBeUM7SUFBekMsb0JBQUEsRUFBQSxNQUFjLDJCQUFZLENBQUMsY0FBYztJQUNqRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDL0IsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFFLEdBQXlDO0lBQXpDLG9CQUFBLEVBQUEsTUFBYywyQkFBWSxDQUFDLGNBQWM7SUFDcEUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzNCLENBQUM7QUFGRCxrQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBTU0VUVElORyB9IGZyb20gJy4uLy4uL3NldHRpbmdzL2h0dHBzU2V0dGluZydcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuICh2YWw6IHN0cmluZywga2V5OnN0cmluZyA9IEhUVFBTU0VUVElORy5hY2Nlc3NUb2tlbktleSkge1xyXG4gIHd4LnNldFN0b3JhZ2VTeW5jKGtleSwgdmFsKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW4gKGtleTogc3RyaW5nID0gSFRUUFNTRVRUSU5HLmFjY2Vzc1Rva2VuS2V5KTogc3RyaW5nIHtcclxuICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoa2V5KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4gKGtleTogc3RyaW5nID0gSFRUUFNTRVRUSU5HLmFjY2Vzc1Rva2VuS2V5KSB7XHJcbiAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxyXG59Il19