"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRouter = void 0;
var index_1 = require("./index");
var app_1 = require("../app/app");
var myRoutes = app_1.getGlobalData('routes');
function setupRouter(router) {
    router.beforeEnter(function (to, from, next) {
        if (myRoutes.includes(to)) {
            next();
        }
        else {
            var route = router.constructRoute(from);
            next(index_1.RouteType.RL, route);
        }
    });
}
exports.setupRouter = setupRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQW1DO0FBQ25DLGtDQUEwQztBQUUxQyxJQUFNLFFBQVEsR0FBVSxtQkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBRS9DLFNBQWdCLFdBQVcsQ0FBRSxNQUFpQjtJQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxJQUFjO1FBQzFELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixJQUFJLEVBQUUsQ0FBQTtTQUNQO2FBQU07WUFDTCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXpDLElBQUksQ0FBQyxpQkFBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQU0xQjtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWZELGtDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyT2JqIH0gZnJvbSAnLi9pbmRleCdcclxuaW1wb3J0IHsgUm91dGVUeXBlIH0gZnJvbSAnLi9pbmRleCdcclxuaW1wb3J0IHsgZ2V0R2xvYmFsRGF0YSB9IGZyb20gJy4uL2FwcC9hcHAnXHJcbi8vIGltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gJy4uLy4uL2hhbmRsZXIvdXNlVG9hc3QnIFxyXG5jb25zdCBteVJvdXRlczogYW55W10gPSBnZXRHbG9iYWxEYXRhKCdyb3V0ZXMnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUm91dGVyIChyb3V0ZXI6IFJvdXRlck9iaikge1xyXG4gIHJvdXRlci5iZWZvcmVFbnRlcigodG86IHN0cmluZywgZnJvbTogc3RyaW5nLCBuZXh0OiBGdW5jdGlvbikgPT4ge1xyXG4gICAgaWYgKG15Um91dGVzLmluY2x1ZGVzKHRvKSkge1xyXG4gICAgICBuZXh0KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVyLmNvbnN0cnVjdFJvdXRlKGZyb20pXHJcbiAgXHJcbiAgICAgIG5leHQoUm91dGVUeXBlLlJMLCByb3V0ZSlcclxuICAgICAgXHJcbiAgICAgIC8vIHNob3dUb2FzdCh7XHJcbiAgICAgIC8vICAgbWVzc2FnZTogJ+aCqOi/mOayoeacieivpeadg+mZkCcsXHJcbiAgICAgIC8vICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAvLyB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIl19