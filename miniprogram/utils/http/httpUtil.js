"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formateParams(params) {
    var arr = [];
    Object.keys(params).forEach(function (key) {
        if (params[key] !== null && params[key] !== '' && params[key] !== undefined) {
            arr.push(key + "=" + encodeURIComponent(params[key]));
        }
    });
    return '?' + arr.join('&');
}
exports.formateParams = formateParams;
function getData(data) {
    var obj = {};
    var arr = Object.keys(data);
    arr.forEach(function (key) {
        if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
            obj[key] = data[key];
        }
    });
    return obj;
}
exports.getData = getData;
function getSeq(seq) {
    if (seq === void 0) { seq = 1; }
    seq++;
    if (seq > 100)
        seq = 0;
    return seq;
}
exports.getSeq = getSeq;
