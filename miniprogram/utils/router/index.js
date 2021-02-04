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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwQztBQUUxQyxJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsNkJBQWdCLENBQUE7SUFDaEIsNEJBQWUsQ0FBQTtJQUNmLDhCQUFpQixDQUFBO0lBQ2pCLDhCQUFpQixDQUFBO0lBQ2pCLGdDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQWFEO0lBU0U7UUFSUSxZQUFPLEdBQVUsRUFBRSxDQUFBO1FBRW5CLGdCQUFXLEdBQWMsU0FBUyxDQUFDLEVBQUUsQ0FBQTtRQUVyQyxpQkFBWSxHQUFnQixFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFBO1FBRTFELFNBQUksR0FBRyxTQUFTLENBQUE7UUFHckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQU0sSUFBdUIsRUFBRSxDQUFxQjtRQUFwRCxpQkFPQztRQVBLLHFCQUFBLEVBQUEsT0FBTyxJQUFJLENBQUMsV0FBVztRQUFFLGtCQUFBLEVBQUEsSUFBSSxJQUFJLENBQUMsWUFBWTtRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDVixPQUFPLEVBQUUsY0FBUSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLENBQUM7WUFDM0MsSUFBSSxFQUFFLGNBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxjQUFRLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBYSxRQUE2QjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUV4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFFakIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUE7UUFFbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFBO1FBRXZDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUdELHNCQUFJLDhCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBa0I7YUFBdEI7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTthQUNuRDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQTthQUNWO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCwyQkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsK0JBQWMsR0FBZCxVQUFnQixLQUEyQjtRQUN6QyxJQUFJLENBQVUsQ0FBQTtRQUNkLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQTtTQUNuQjthQUFNO1lBQ0wsQ0FBQyxHQUFHLEtBQUssQ0FBQTtTQUNWO1FBQ0QsT0FBTyxDQUFnQixDQUFBO0lBQ3pCLENBQUM7SUFFRCxtQkFBRSxHQUFGLFVBQUksSUFBOEIsRUFBRSxLQUEyQjtRQUEzRCxxQkFBQSxFQUFBLE9BQWtCLFNBQVMsQ0FBQyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUU5QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFVLEVBQVUsRUFBRSxJQUFZLEVBQUUsSUFBYztRQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QixJQUFJLEVBQUUsQ0FBQTtJQUNSLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQztBQUVELElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7QUFFM0Isd0JBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUluQixrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cFJvdXRlciB9IGZyb20gJy4vcGVybWlzc2lvbidcclxuXHJcbmV4cG9ydCBlbnVtIFJvdXRlVHlwZSB7XHJcbiAgU1QgPSAnc3dpdGNoVGFiJyxcclxuICBSTCA9ICdyZUxhdW5jaCcsXHJcbiAgUlQgPSAncmVkaXJlY3RUbycsXHJcbiAgTlQgPSAnbmF2aWdhdGVUbycsXHJcbiAgTkIgPSAnbmF2aWdhdGVCYWNrJ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQmVmb3JlRW50ZXJDYWxsYmFjayB7XHJcbiAgKHRvOiBzdHJpbmcsIGZyb206IHN0cmluZywgbmV4dDogRnVuY3Rpb24pIDogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgUm91dGVPcHRpb24ge1xyXG4gIHVybDogc3RyaW5nLFxyXG4gIHN1Y2Nlc3M/OiBGdW5jdGlvblxyXG4gIGZhaWw/OiBGdW5jdGlvblxyXG4gIGNvbXBsZXRlPzogRnVuY3Rpb25cclxufVxyXG4gICAgXHJcbmNsYXNzIFJvdXRlciB7XHJcbiAgcHJpdmF0ZSBoaXN0b3J5OiBhbnlbXSA9IFtdXHJcblxyXG4gIHByaXZhdGUgY3VycmVudFR5cGU6IFJvdXRlVHlwZSA9IFJvdXRlVHlwZS5OVFxyXG5cclxuICBwcml2YXRlIGN1cnJlbnRSb3V0ZTogUm91dGVPcHRpb24gPSB7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfVxyXG5cclxuICBwdWJsaWMgdHlwZSA9IFJvdXRlVHlwZVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnNldEhpc3RvcnkoKVxyXG4gIH1cclxuXHJcbiAgbmV4dCAodHlwZSA9IHRoaXMuY3VycmVudFR5cGUsIHQgPSB0aGlzLmN1cnJlbnRSb3V0ZSkge1xyXG4gICAgd3hbdHlwZV0oe1xyXG4gICAgICB1cmw6IHQudXJsLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7IHQuc3VjY2VzcyAmJiB0LnN1Y2Nlc3MoKSB9LFxyXG4gICAgICBmYWlsOiAoKSA9PiB7IHQuZmFpbCAmJiB0LmZhaWwoKSB9LFxyXG4gICAgICBjb21wbGV0ZTogKCkgPT4geyB0aGlzLmFmdGVyRW50ZXIoKSB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYmVmb3JlRW50ZXIgKGNhbGxiYWNrOiBCZWZvcmVFbnRlckNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcclxuXHJcbiAgICB0aGlzLnNldEhpc3RvcnkoKVxyXG5cclxuICAgIGNvbnN0IHRvVXJsID0gdGhpcy5jdXJyZW50Um91dGUudXJsXHJcblxyXG4gICAgY29uc3QgZnJvbVVybCA9IHRoaXMuZ2V0Q3VycmVudFJvdXRlVXJsXHJcblxyXG4gICAgY2FsbGJhY2sodG9VcmwsIGZyb21VcmwsIHRoaXMubmV4dC5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgYWZ0ZXJFbnRlciAoKSB7XHJcbiAgICB0aGlzLnNldEhpc3RvcnkoKVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W6aG16Z2i5qCIXHJcbiAgZ2V0IGdldEhpc3RvcnkgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeVxyXG4gIH1cclxuXHJcbiAgZ2V0IGdldEN1cnJlbnRSb3V0ZVVybCAoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXS5yb3V0ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRIaXN0b3J5ICgpIHtcclxuICAgIHRoaXMuaGlzdG9yeSA9IGdldEN1cnJlbnRQYWdlcygpXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RSb3V0ZSAocm91dGU6IFJvdXRlT3B0aW9uIHwgc3RyaW5nKTogUm91dGVPcHRpb24ge1xyXG4gICAgbGV0IHQ6IHVua25vd25cclxuICAgIGlmICh0eXBlb2Ygcm91dGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHQgPSB7IHVybDogcm91dGUgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdCA9IHJvdXRlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdCBhcyBSb3V0ZU9wdGlvblxyXG4gIH1cclxuXHJcbiAgdG8gKHR5cGU6IFJvdXRlVHlwZSA9IFJvdXRlVHlwZS5TVCwgcm91dGU6IFJvdXRlT3B0aW9uIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUeXBlID0gdHlwZVxyXG5cclxuICAgIHRoaXMuY3VycmVudFJvdXRlID0gdGhpcy5jb25zdHJ1Y3RSb3V0ZShyb3V0ZSlcclxuXHJcbiAgICB0aGlzLmJlZm9yZUVudGVyKHRoaXMuY2FsbGJhY2spXHJcbiAgfVxyXG5cclxuICBjYWxsYmFjayAodG86IHN0cmluZywgZnJvbTogc3RyaW5nLCBuZXh0OiBGdW5jdGlvbikge1xyXG4gICAgY29uc29sZS5kZWJ1Zyh0bywgZnJvbSlcclxuICAgIG5leHQoKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpXHJcblxyXG5zZXR1cFJvdXRlcihyb3V0ZXIpXHJcblxyXG5leHBvcnQgdHlwZSBSb3V0ZXJPYmogPSBSb3V0ZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdfQ==