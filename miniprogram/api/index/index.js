"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/http/request");
function getDeviceList(data) {
    return request_1.default({
        url: '/deviceInfoManager/page',
        method: 'POST',
        data: data
    });
}
exports.getDeviceList = getDeviceList;
