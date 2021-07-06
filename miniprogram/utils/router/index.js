"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteType = void 0;
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
        enumerable: false,
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
        enumerable: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMEM7QUFFMUMsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLDZCQUFnQixDQUFBO0lBQ2hCLDRCQUFlLENBQUE7SUFDZiw4QkFBaUIsQ0FBQTtJQUNqQiw4QkFBaUIsQ0FBQTtJQUNqQixnQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEI7QUFhRDtJQVNFO1FBUlEsWUFBTyxHQUFVLEVBQUUsQ0FBQTtRQUVuQixnQkFBVyxHQUFjLFNBQVMsQ0FBQyxFQUFFLENBQUE7UUFFckMsaUJBQVksR0FBZ0IsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQTtRQUUxRCxTQUFJLEdBQUcsU0FBUyxDQUFBO1FBR3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFNLElBQXVCLEVBQUUsQ0FBcUI7UUFBcEQsaUJBT0M7UUFQSyxxQkFBQSxFQUFBLE9BQU8sSUFBSSxDQUFDLFdBQVc7UUFBRSxrQkFBQSxFQUFBLElBQUksSUFBSSxDQUFDLFlBQVk7UUFDbEQsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO1lBQ1YsT0FBTyxFQUFFLGNBQVEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUEsQ0FBQyxDQUFDO1lBQzNDLElBQUksRUFBRSxjQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLENBQUMsQ0FBQztZQUNsQyxRQUFRLEVBQUUsY0FBUSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUEsQ0FBQyxDQUFDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw0QkFBVyxHQUFYLFVBQWEsUUFBNkI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFFeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBRWpCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFBO1FBRW5DLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtRQUV2QyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCwyQkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFHRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQWtCO2FBQXRCO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7YUFDbkQ7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUE7YUFDVjtRQUNILENBQUM7OztPQUFBO0lBRUQsMkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZ0IsS0FBMkI7UUFDekMsSUFBSSxDQUFVLENBQUE7UUFDZCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUE7U0FDbkI7YUFBTTtZQUNMLENBQUMsR0FBRyxLQUFLLENBQUE7U0FDVjtRQUNELE9BQU8sQ0FBZ0IsQ0FBQTtJQUN6QixDQUFDO0lBRUQsbUJBQUUsR0FBRixVQUFJLElBQThCLEVBQUUsS0FBMkI7UUFBM0QscUJBQUEsRUFBQSxPQUFrQixTQUFTLENBQUMsRUFBRTtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUV2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBVSxFQUFVLEVBQUUsSUFBWSxFQUFFLElBQWM7UUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkIsSUFBSSxFQUFFLENBQUE7SUFDUixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUE3RUQsSUE2RUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFBO0FBRTNCLHdCQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7QUFJbkIsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBSb3V0ZXIgfSBmcm9tICcuL3Blcm1pc3Npb24nXHJcblxyXG5leHBvcnQgZW51bSBSb3V0ZVR5cGUge1xyXG4gIFNUID0gJ3N3aXRjaFRhYicsXHJcbiAgUkwgPSAncmVMYXVuY2gnLFxyXG4gIFJUID0gJ3JlZGlyZWN0VG8nLFxyXG4gIE5UID0gJ25hdmlnYXRlVG8nLFxyXG4gIE5CID0gJ25hdmlnYXRlQmFjaydcclxufVxyXG5cclxuaW50ZXJmYWNlIEJlZm9yZUVudGVyQ2FsbGJhY2sge1xyXG4gICh0bzogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIG5leHQ6IEZ1bmN0aW9uKSA6IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvdXRlT3B0aW9uIHtcclxuICB1cmw6IHN0cmluZyxcclxuICBzdWNjZXNzPzogRnVuY3Rpb25cclxuICBmYWlsPzogRnVuY3Rpb25cclxuICBjb21wbGV0ZT86IEZ1bmN0aW9uXHJcbn1cclxuICAgIFxyXG5jbGFzcyBSb3V0ZXIge1xyXG4gIHByaXZhdGUgaGlzdG9yeTogYW55W10gPSBbXVxyXG5cclxuICBwcml2YXRlIGN1cnJlbnRUeXBlOiBSb3V0ZVR5cGUgPSBSb3V0ZVR5cGUuTlRcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50Um91dGU6IFJvdXRlT3B0aW9uID0geyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH1cclxuXHJcbiAgcHVibGljIHR5cGUgPSBSb3V0ZVR5cGVcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5zZXRIaXN0b3J5KClcclxuICB9XHJcblxyXG4gIG5leHQgKHR5cGUgPSB0aGlzLmN1cnJlbnRUeXBlLCB0ID0gdGhpcy5jdXJyZW50Um91dGUpIHtcclxuICAgIHd4W3R5cGVdKHtcclxuICAgICAgdXJsOiB0LnVybCxcclxuICAgICAgc3VjY2VzczogKCkgPT4geyB0LnN1Y2Nlc3MgJiYgdC5zdWNjZXNzKCkgfSxcclxuICAgICAgZmFpbDogKCkgPT4geyB0LmZhaWwgJiYgdC5mYWlsKCkgfSxcclxuICAgICAgY29tcGxldGU6ICgpID0+IHsgdGhpcy5hZnRlckVudGVyKCkgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGJlZm9yZUVudGVyIChjYWxsYmFjazogQmVmb3JlRW50ZXJDYWxsYmFjaykge1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXHJcblxyXG4gICAgdGhpcy5zZXRIaXN0b3J5KClcclxuXHJcbiAgICBjb25zdCB0b1VybCA9IHRoaXMuY3VycmVudFJvdXRlLnVybFxyXG5cclxuICAgIGNvbnN0IGZyb21VcmwgPSB0aGlzLmdldEN1cnJlbnRSb3V0ZVVybFxyXG5cclxuICAgIGNhbGxiYWNrKHRvVXJsLCBmcm9tVXJsLCB0aGlzLm5leHQuYmluZCh0aGlzKSlcclxuICB9XHJcblxyXG4gIGFmdGVyRW50ZXIgKCkge1xyXG4gICAgdGhpcy5zZXRIaXN0b3J5KClcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPlumhtemdouagiFxyXG4gIGdldCBnZXRIaXN0b3J5ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmhpc3RvcnlcclxuICB9XHJcblxyXG4gIGdldCBnZXRDdXJyZW50Um91dGVVcmwgKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0ucm91dGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SGlzdG9yeSAoKSB7XHJcbiAgICB0aGlzLmhpc3RvcnkgPSBnZXRDdXJyZW50UGFnZXMoKVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0Um91dGUgKHJvdXRlOiBSb3V0ZU9wdGlvbiB8IHN0cmluZyk6IFJvdXRlT3B0aW9uIHtcclxuICAgIGxldCB0OiB1bmtub3duXHJcbiAgICBpZiAodHlwZW9mIHJvdXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0ID0geyB1cmw6IHJvdXRlIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHQgPSByb3V0ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQgYXMgUm91dGVPcHRpb25cclxuICB9XHJcblxyXG4gIHRvICh0eXBlOiBSb3V0ZVR5cGUgPSBSb3V0ZVR5cGUuU1QsIHJvdXRlOiBSb3V0ZU9wdGlvbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXJyZW50VHlwZSA9IHR5cGVcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMuY29uc3RydWN0Um91dGUocm91dGUpXHJcblxyXG4gICAgdGhpcy5iZWZvcmVFbnRlcih0aGlzLmNhbGxiYWNrKVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2sgKHRvOiBzdHJpbmcsIGZyb206IHN0cmluZywgbmV4dDogRnVuY3Rpb24pIHtcclxuICAgIGNvbnNvbGUuZGVidWcodG8sIGZyb20pXHJcbiAgICBuZXh0KClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxuc2V0dXBSb3V0ZXIocm91dGVyKVxyXG5cclxuZXhwb3J0IHR5cGUgUm91dGVyT2JqID0gUm91dGVyXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXX0=