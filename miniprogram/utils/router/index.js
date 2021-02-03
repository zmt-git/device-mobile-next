"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permission_1 = require("./permission");
var RouteType;
(function (RouteType) {
    RouteType["ST"] = "switchTab";
    RouteType["RL"] = "reLaunch";
    RouteType["RT"] = "redirectTo";
    RouteType["NT"] = "navigateTo";
    RouteType["NB"] = "navigateBack";
})(RouteType = exports.RouteType || (exports.RouteType = {}));
var Router = (function () {
    function Router() {
        this.history = [];
        this.currentType = RouteType.NT;
        this.currentRoute = { url: '/pages/index/index' };
        this.type = RouteType;
        this.setHistory();
    }
    Router.prototype.next = function (type, t) {
        var _this = this;
        if (type === void 0) { type = this.currentType; }
        if (t === void 0) { t = this.currentRoute; }
        wx[type]({
            url: t.url,
            success: function () { t.success && t.success(); },
            fail: function () { t.fail && t.fail(); },
            complete: function () { _this.afterEnter(); }
        });
    };
    Router.prototype.beforeEnter = function (callback) {
        this.callback = callback;
        this.setHistory();
        var toUrl = this.currentRoute.url;
        var fromUrl = this.getCurrentRouteUrl;
        callback(toUrl, fromUrl, this.next.bind(this));
    };
    Router.prototype.afterEnter = function () {
        this.setHistory();
    };
    Object.defineProperty(Router.prototype, "getHistory", {
        get: function () {
            return this.history;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "getCurrentRouteUrl", {
        get: function () {
            if (this.history.length > 0) {
                return this.history[this.history.length - 1].route;
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.setHistory = function () {
        this.history = getCurrentPages();
    };
    Router.prototype.constructRoute = function (route) {
        var t;
        if (typeof route === 'string') {
            t = { url: route };
        }
        else {
            t = route;
        }
        return t;
    };
    Router.prototype.to = function (type, route) {
        if (type === void 0) { type = RouteType.ST; }
        this.currentType = type;
        this.currentRoute = this.constructRoute(route);
        this.beforeEnter(this.callback);
    };
    Router.prototype.callback = function (to, from, next) {
        console.debug(to, from);
        next();
    };
    return Router;
}());
var router = new Router();
permission_1.setupRouter(router);
exports.default = router;
