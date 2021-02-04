"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var reg = {
    username: /\S/,
    password: /\S/
};
Page({
    data: {
        form: {
            password: '',
            username: '',
            uuid: '',
            type: 1
        },
        usernameMsgShow: false,
        passwordMsgShow: false,
        disabled: true
    },
    onShow: function () {
        wx.hideHomeButton();
        var app = getApp();
        app.globalData.socket && app.globalData.socket.socket.close();
    },
    setDisabled: function () {
        var result = true;
        if (reg.username.test(this.data.form.username)
            && reg.password.test(this.data.form.password)) {
            result = false;
        }
        else {
            result = true;
        }
        this.setData({
            disabled: result
        });
    },
    bindinput: function (e) {
        var _a, _b;
        var key = e.target.id;
        var keys = "form." + key;
        this.setData((_a = {},
            _a[keys] = e.detail.value,
            _a));
        this.setData((_b = {},
            _b[key + "MsgShow"] = !reg[key].test(this.data.form[key]),
            _b));
        this.setDisabled();
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
                                return [4, index_1.login(_this.data.form)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTZDO0FBQzdDLCtEQUF1RDtBQUV2RCxJQUFNLEdBQUcsR0FBVztJQUNsQixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQTtBQUVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxDQUFDO1NBQ1I7UUFDRCxlQUFlLEVBQUUsS0FBSztRQUN0QixlQUFlLEVBQUUsS0FBSztRQUN0QixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBRUQsTUFBTTtRQUNKLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNuQixJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtRQUVwQixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7ZUFDMUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVDO1lBQ0EsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUNmO2FBQU07WUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ2Q7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVMsWUFBRSxDQUFNOztRQUNmLElBQU0sR0FBRyxHQUE0QixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUNoRCxJQUFNLElBQUksR0FBRyxVQUFRLEdBQUssQ0FBQTtRQUMxQixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDdEIsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBSSxHQUFHLFlBQVMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELENBQUE7UUFFRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO1FBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDRCxPQUFPLFlBQUMsR0FBRzs7Ozs7Z0NBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQ0FDWixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUNBQ3RCLENBQUMsQ0FBQTtnQ0FDRixXQUFNLGFBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5Q0FDekIsSUFBSSxDQUFDLFVBQUEsR0FBRzt3Q0FDUCx5QkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29DQUNmLENBQUMsQ0FBQzt5Q0FDRCxLQUFLLENBQUMsVUFBQSxDQUFDO3dDQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7b0NBQ2hCLENBQUMsQ0FBQyxFQUFBOztnQ0FOSixTQU1JLENBQUE7Z0NBQ0osRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBOzs7OzthQUNqQjtZQUNELElBQUksWUFBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uL2FwaS9sb2dpbi9pbmRleCdcclxuaW1wb3J0IHsgc0hhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVyL3JlcXVlc3RIYW5kbGVyJ1xyXG5cclxuY29uc3QgcmVnOiBSZWdPYmogPSB7XHJcbiAgdXNlcm5hbWU6IC9cXFMvLFxyXG4gIHBhc3N3b3JkOiAvXFxTL1xyXG59XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICB1dWlkOiAnJyxcclxuICAgICAgdHlwZTogMVxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lTXNnU2hvdzogZmFsc2UsIFxyXG4gICAgcGFzc3dvcmRNc2dTaG93OiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgb25TaG93ICgpIHtcclxuICAgIHd4LmhpZGVIb21lQnV0dG9uKClcclxuICAgIGNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblxyXG4gICAgYXBwLmdsb2JhbERhdGEuc29ja2V0ICYmIGFwcC5nbG9iYWxEYXRhLnNvY2tldC5zb2NrZXQuY2xvc2UoKVxyXG4gIH0sXHJcblxyXG4gIHNldERpc2FibGVkICgpIHtcclxuICAgIGxldCByZXN1bHQgPSB0cnVlXHJcbiAgICBpZiAocmVnLnVzZXJuYW1lLnRlc3QodGhpcy5kYXRhLmZvcm0udXNlcm5hbWUpXHJcbiAgICAgJiYgcmVnLnBhc3N3b3JkLnRlc3QodGhpcy5kYXRhLmZvcm0ucGFzc3dvcmQpXHJcbiAgICApIHtcclxuICAgICAgcmVzdWx0ID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHRydWVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGRpc2FibGVkOiByZXN1bHRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgYmluZGlucHV0IChlOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleTogJ3Bhc3N3b3JkJyB8ICd1c2VybmFtZScgPSBlLnRhcmdldC5pZFxyXG4gICAgY29uc3Qga2V5cyA9IGBmb3JtLiR7a2V5fWBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtrZXlzXTogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgW2Ake2tleX1Nc2dTaG93YF06ICFyZWdba2V5XS50ZXN0KHRoaXMuZGF0YS5mb3JtW2tleV0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2V0RGlzYWJsZWQoKVxyXG4gIH0sXHJcblxyXG4gIHN1Ym1pdCAoKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuICAgIHd4LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfnmbvlvZXkuK0uLi4nfSlcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgYXN5bmMgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICdmb3JtLnV1aWQnOiByZXMuY29kZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgbG9naW4oX3RoaXMuZGF0YS5mb3JtKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc0hhbmRsZXIocmVzKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=