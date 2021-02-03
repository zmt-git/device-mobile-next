"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/http/request");
function login(params) {
    return request_1.default({
        url: '/system/loginForPhone',
        method: 'POST',
        params: params
    });
}
exports.login = login;
function loginCode(params) {
    return request_1.default({
        url: '/system/loginUuId',
        method: 'GET',
        params: params
    });
}
exports.loginCode = loginCode;
