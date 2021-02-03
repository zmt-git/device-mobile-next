"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../utils/router/index");
var useToast_1 = require("../../handler/useToast");
Page({
    onShow: function () {
    },
    toIndex: function () {
        useToast_1.showToast({ message: 'to index', type: 'success' });
        index_1.default.to(index_1.RouteType.ST, '/pages/index/index');
    }
});
