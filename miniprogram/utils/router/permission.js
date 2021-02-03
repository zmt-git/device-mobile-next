"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var app_1 = require("../app/app");
var useToast_1 = require("../../handler/useToast");
var myRoutes = app_1.getGlobalData('routes');
function setupRouter(router) {
    router.beforeEnter(function (to, from, next) {
        if (myRoutes.includes(to)) {
            next();
        }
        else {
            var route = router.constructRoute(from);
            next(index_1.RouteType.RL, route);
            useToast_1.showToast({
                message: '您还没有该权限',
                type: 'warning',
            });
        }
    });
}
exports.setupRouter = setupRouter;
