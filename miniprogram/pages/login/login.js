"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var index_1 = require("../../api/login/index");
var requestHandler_1 = require("../../handler/requestHandler");
Page({
    data: {
        password: '',
        username: '',
        form: {
            uuid: '',
            type: 1
        },
        disabled: true
    },
    onShow: function () {
        wx.hideHomeButton();
        var app = getApp();
        app.globalData.socket && app.globalData.socket.socket.close();
    },
    onChange: function () {
        if (!this.data.password || !this.data.username) {
            this.setData({ disabled: true });
        }
        else {
            this.setData({ disabled: false });
        }
    },
    submit: function () {
        var _this = this;
        wx.showLoading({ title: '登录中...' });
        wx.login({
            success: function (res) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _this.setData({
                                    'form.uuid': res.code
                                });
                                return [4, index_1.login(__assign(__assign({}, _this.data.form), { username: _this.data.username, password: _this.data.password }))
                                        .then(function (res) {
                                        requestHandler_1.sHandler(res);
                                    })
                                        .catch(function (e) {
                                        console.log(e);
                                    })];
                            case 1:
                                _a.sent();
                                wx.hideLoading();
                                return [2];
                        }
                    });
                });
            },
            fail: function (e) {
                console.log(e);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTZDO0FBQzdDLCtEQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsQ0FBQztTQUNSO1FBQ0QsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUVELE1BQU07UUFDSixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbkIsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7UUFFcEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQy9ELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNELE9BQU8sWUFBQyxHQUFHOzs7OztnQ0FDZixLQUFLLENBQUMsT0FBTyxDQUFDO29DQUNaLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTtpQ0FDdEIsQ0FBQyxDQUFBO2dDQUNGLFdBQU0sYUFBSyx1QkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFO3lDQUM1RixJQUFJLENBQUMsVUFBQSxHQUFHO3dDQUNQLHlCQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7b0NBQ2YsQ0FBQyxDQUFDO3lDQUNELEtBQUssQ0FBQyxVQUFBLENBQUM7d0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQ0FDaEIsQ0FBQyxDQUFDLEVBQUE7O2dDQU5KLFNBTUksQ0FBQTtnQ0FDSixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Ozs7O2FBQ2pCO1lBQ0QsSUFBSSxZQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNoQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vYXBpL2xvZ2luL2luZGV4J1xyXG5pbXBvcnQgeyBzSGFuZGxlciB9IGZyb20gJy4uLy4uL2hhbmRsZXIvcmVxdWVzdEhhbmRsZXInXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHV1aWQ6ICcnLFxyXG4gICAgICB0eXBlOiAxXHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IHRydWVcclxuICB9LFxyXG5cclxuICBvblNob3cgKCkge1xyXG4gICAgd3guaGlkZUhvbWVCdXR0b24oKVxyXG4gICAgY29uc3QgYXBwID0gZ2V0QXBwKClcclxuXHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5zb2NrZXQgJiYgYXBwLmdsb2JhbERhdGEuc29ja2V0LnNvY2tldC5jbG9zZSgpXHJcbiAgfSxcclxuXHJcbiAgb25DaGFuZ2UgKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEucGFzc3dvcmQgfHwgIXRoaXMuZGF0YS51c2VybmFtZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoeyBkaXNhYmxlZDogdHJ1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgZGlzYWJsZWQ6IGZhbHNlIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc3VibWl0ICgpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgd3guc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+eZu+W9leS4rS4uLid9KVxyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBhc3luYyBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgJ2Zvcm0udXVpZCc6IHJlcy5jb2RlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBsb2dpbih7Li4uX3RoaXMuZGF0YS5mb3JtLCB1c2VybmFtZTogX3RoaXMuZGF0YS51c2VybmFtZSwgcGFzc3dvcmQ6IF90aGlzLmRhdGEucGFzc3dvcmR9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc0hhbmRsZXIocmVzKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=