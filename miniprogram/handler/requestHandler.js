"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.loginCodeHandler = exports.sHandler = exports.eHandler = void 0;
var index_1 = require("../api/login/index");
var auth_1 = require("../utils/auth/auth");
var ws_1 = require("../utils/http/ws");
var app_1 = require("../utils/app/app");
var index_2 = require("../utils/router/index");
var useToast_1 = require("./useToast");
function setGlobalLoginData(isLogin, isLogining) {
    if (isLogin === void 0) { isLogin = false; }
    if (isLogining === void 0) { isLogining = false; }
    app_1.setGlobalData('isLogin', isLogin);
    app_1.setGlobalData('isLogining', isLogining);
}
function eHandler() {
    setGlobalLoginData();
    auth_1.removeToken();
    index_2.default.to(index_2.RouteType.RL, '/pages/login/login');
    app_1.getGlobalData('socket') && app_1.getGlobalData('socket').socket.close();
}
exports.eHandler = eHandler;
function sHandler(res) {
    auth_1.setToken(res.result);
    setGlobalLoginData(true, false);
    app_1.setGlobalData('socket', new ws_1.default());
    index_2.default.to(index_2.RouteType.ST, '/pages/index/index');
}
exports.sHandler = sHandler;
function loginCodeHandler(successFn) {
    wx.showLoading({
        title: '登录中...'
    });
    wx.login({
        success: function (res) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, index_1.loginCode({ uuid: res.code, type: 1 })
                                .then(function (res) {
                                sHandler(res);
                                successFn && successFn();
                            })
                                .catch(function (e) {
                                eHandler();
                            })];
                        case 1:
                            _a.sent();
                            wx.hideLoading();
                            return [2];
                    }
                });
            });
        },
        fail: function (error) {
            console.log(error);
            wx.hideLoading();
            eHandler();
        }
    });
}
exports.loginCodeHandler = loginCodeHandler;
function errorHandler(res) {
    if (app_1.getGlobalData('isLogining'))
        return;
    var data = res.data;
    useToast_1.showToast({ message: data.msg, type: 'danger' });
    if (res.statusCode === 401) {
        setGlobalLoginData(false, true);
        loginCodeHandler();
    }
    else if (res.statusCode === 402) {
        eHandler();
    }
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0SGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFDOUMsMkNBQTBEO0FBQzFELHVDQUFxQztBQUNyQyx3Q0FBK0Q7QUFDL0QsK0NBQXlEO0FBQ3pELHVDQUFzQztBQU90QyxTQUFTLGtCQUFrQixDQUFFLE9BQXdCLEVBQUUsVUFBMkI7SUFBckQsd0JBQUEsRUFBQSxlQUF3QjtJQUFFLDJCQUFBLEVBQUEsa0JBQTJCO0lBQ2hGLG1CQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2pDLG1CQUFhLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3pDLENBQUM7QUFLRCxTQUFnQixRQUFRO0lBQ3RCLGtCQUFrQixFQUFFLENBQUE7SUFDcEIsa0JBQVcsRUFBRSxDQUFBO0lBQ2IsZUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBUyxDQUFDLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0lBQzdDLG1CQUFhLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDbkUsQ0FBQztBQUxELDRCQUtDO0FBS0QsU0FBZ0IsUUFBUSxDQUFFLEdBQVE7SUFDaEMsZUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDL0IsbUJBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLGVBQU0sQ0FBQyxFQUFFLENBQUMsaUJBQVMsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtBQUMvQyxDQUFDO0FBTEQsNEJBS0M7QUFLRCxTQUFnQixnQkFBZ0IsQ0FBRSxTQUFvQjtJQUNwRCxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ2IsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNQLE9BQU8sRUFBRSxVQUFnQixHQUFHOzs7O2dDQUMxQixXQUFNLGlCQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUNBQ3pDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0NBQ2IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dDQUNiLFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQTs0QkFDMUIsQ0FBQyxDQUFDO2lDQUNELEtBQUssQ0FBQyxVQUFBLENBQUM7Z0NBQ04sUUFBUSxFQUFFLENBQUE7NEJBQ1osQ0FBQyxDQUFDLEVBQUE7OzRCQVBKLFNBT0ksQ0FBQTs0QkFDSixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Ozs7O1NBQ2pCO1FBRUQsSUFBSSxFQUFFLFVBQVUsS0FBSztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNoQixRQUFRLEVBQUUsQ0FBQTtRQUNaLENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBdkJELDRDQXVCQztBQUtELFNBQWdCLFlBQVksQ0FBRSxHQUF3RztJQUNwSSxJQUFJLG1CQUFhLENBQUMsWUFBWSxDQUFDO1FBQUUsT0FBTTtJQUV2QyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBbUIsQ0FBQTtJQUVwQyxvQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFFaEQsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtRQUN6QixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDL0IsZ0JBQWdCLEVBQUUsQ0FBQTtLQUNwQjtTQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7UUFDaEMsUUFBUSxFQUFFLENBQUE7S0FDWjtBQUNGLENBQUM7QUFiRCxvQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ2luQ29kZSB9IGZyb20gJy4uL2FwaS9sb2dpbi9pbmRleCdcclxuaW1wb3J0IHsgc2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC9hdXRoJ1xyXG5pbXBvcnQgU29ja2V0IGZyb20gJy4uL3V0aWxzL2h0dHAvd3MnXHJcbmltcG9ydCB7IGdldEdsb2JhbERhdGEsIHNldEdsb2JhbERhdGEgfSBmcm9tICcuLi91dGlscy9hcHAvYXBwJ1xyXG5pbXBvcnQgcm91dGVyLCB7IFJvdXRlVHlwZSB9IGZyb20gJy4uL3V0aWxzL3JvdXRlci9pbmRleCdcclxuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSAnLi91c2VUb2FzdCdcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6K6+572u5YWs5YWx5Y+Y6YePXHJcbiAqIEBwYXJhbSBpc0xvZ2luIOaYr+WQpueZu+W9lVxyXG4gKiBAcGFyYW0gaXNMb2dpbmluZyDnmbvlvZXnirbmgIFcclxuICovXHJcbmZ1bmN0aW9uIHNldEdsb2JhbExvZ2luRGF0YSAoaXNMb2dpbjogYm9vbGVhbiA9IGZhbHNlLCBpc0xvZ2luaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICBzZXRHbG9iYWxEYXRhKCdpc0xvZ2luJywgaXNMb2dpbilcclxuICBzZXRHbG9iYWxEYXRhKCdpc0xvZ2luaW5nJywgaXNMb2dpbmluZylcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDplJnor6/lpITnkIZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlSGFuZGxlciAoKSB7XHJcbiAgc2V0R2xvYmFsTG9naW5EYXRhKClcclxuICByZW1vdmVUb2tlbigpXHJcbiAgcm91dGVyLnRvKFJvdXRlVHlwZS5STCwgJy9wYWdlcy9sb2dpbi9sb2dpbicpXHJcbiAgZ2V0R2xvYmFsRGF0YSgnc29ja2V0JykgJiYgZ2V0R2xvYmFsRGF0YSgnc29ja2V0Jykuc29ja2V0LmNsb3NlKClcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDnmbvlvZXmiJDlip/lpITnkIZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzSGFuZGxlciAocmVzOiBhbnkpIHtcclxuICBzZXRUb2tlbihyZXMucmVzdWx0KVxyXG4gIHNldEdsb2JhbExvZ2luRGF0YSh0cnVlLCBmYWxzZSlcclxuICBzZXRHbG9iYWxEYXRhKCdzb2NrZXQnLCBuZXcgU29ja2V0KCkpXHJcbiAgcm91dGVyLnRvKFJvdXRlVHlwZS5TVCwgJy9wYWdlcy9pbmRleC9pbmRleCcpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6Ieq5Yqo55m75b2VXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5Db2RlSGFuZGxlciAoc3VjY2Vzc0ZuPzogRnVuY3Rpb24pIHtcclxuICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICB0aXRsZTogJ+eZu+W9leS4rS4uLidcclxuICB9KVxyXG4gIHd4LmxvZ2luKHtcclxuICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgYXdhaXQgbG9naW5Db2RlKHsgdXVpZDogcmVzLmNvZGUsIHR5cGU6IDEgfSlcclxuICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHNIYW5kbGVyKHJlcylcclxuICAgICAgICAgIHN1Y2Nlc3NGbiAmJiBzdWNjZXNzRm4oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgZUhhbmRsZXIoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgIH0sXHJcblxyXG4gICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgIGVIYW5kbGVyKClcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOmUmeivr+ivt+axguWkhOeQhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlciAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5VcGxvYWRGaWxlU3VjY2Vzc0NhbGxiYWNrUmVzdWx0IHwgIFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpIHtcclxuICBpZiAoZ2V0R2xvYmFsRGF0YSgnaXNMb2dpbmluZycpKSByZXR1cm5cclxuXHJcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlc3BvbnNlT3B0XHJcblxyXG4gIHNob3dUb2FzdCh7IG1lc3NhZ2U6IGRhdGEubXNnLCB0eXBlOiAnZGFuZ2VyJ30pXHJcblxyXG5cdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gNDAxKSB7XHJcbiAgICBzZXRHbG9iYWxMb2dpbkRhdGEoZmFsc2UsIHRydWUpXHJcbiAgICBsb2dpbkNvZGVIYW5kbGVyKClcclxuXHR9IGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlID09PSA0MDIpIHtcclxuICAgIGVIYW5kbGVyKClcclxuXHR9XHJcbn1cclxuIl19