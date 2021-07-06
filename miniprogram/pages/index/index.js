"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestHandler_1 = require("../../handler/requestHandler");
var index_1 = require("../../utils/router/index");
var pagination_1 = require("../../mixins/pagination");
var index_2 = require("../../api/index/index");
var useToast_1 = require("../../handler/useToast");
Page({
    data: {
        list: [],
        pagination: {},
        toast: {}
    },
    onLoad: function () {
        var _this = this;
        this.data.pagination = new pagination_1.default({ request: index_2.getDeviceList });
        requestHandler_1.loginCodeHandler(function () {
            _this.data.pagination.getData();
        });
    },
    onUnload: function () {
        this.data.pagination = null;
    },
    toLogin: function () {
        wx.showModal({
            title: '提示',
            content: '确认退出该账号吗？',
            success: function (res) {
                if (res.confirm) {
                    index_1.default.to(index_1.default.type.RL, '/pages/login/login');
                }
            }
        });
    },
    animation: function (e) {
        useToast_1.showToast({ message: e.target.id, type: e.target.id });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUErRDtBQUMvRCxrREFBNkM7QUFDN0Msc0RBQWdEO0FBQ2hELCtDQUFxRDtBQUNyRCxtREFBa0Q7QUFFbEQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsRUFBeUI7UUFDckMsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFhLEVBQUUsQ0FBQyxDQUFBO1FBRWpFLGlDQUFnQixDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDN0IsQ0FBQztJQUVELE9BQU87UUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsV0FBVztZQUNwQixPQUFPLFlBQUUsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsZUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO2lCQUNoRDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFULFVBQVcsQ0FBTTtRQUNmLG9CQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9naW5Db2RlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hhbmRsZXIvcmVxdWVzdEhhbmRsZXInXG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL3V0aWxzL3JvdXRlci9pbmRleCdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL21peGlucy9wYWdpbmF0aW9uJ1xuaW1wb3J0IHsgZ2V0RGV2aWNlTGlzdCB9IGZyb20gJy4uLy4uL2FwaS9pbmRleC9pbmRleCdcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gJy4uLy4uL2hhbmRsZXIvdXNlVG9hc3QnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGlzdDogW10sXG4gICAgcGFnaW5hdGlvbjoge30gYXMgKFBhZ2luYXRpb24gfCBudWxsKSxcbiAgICB0b2FzdDoge31cbiAgfSxcblxuICBvbkxvYWQgKCkge1xuICAgIHRoaXMuZGF0YS5wYWdpbmF0aW9uID0gbmV3IFBhZ2luYXRpb24oeyByZXF1ZXN0OiBnZXREZXZpY2VMaXN0IH0pXG5cbiAgICBsb2dpbkNvZGVIYW5kbGVyKCgpID0+IHtcbiAgICAgICh0aGlzLmRhdGEucGFnaW5hdGlvbiBhcyBQYWdpbmF0aW9uKS5nZXREYXRhKClcbiAgICB9KVxuICB9LFxuICBcblxuICBvblVubG9hZCAoKSB7XG4gICAgdGhpcy5kYXRhLnBhZ2luYXRpb24gPSBudWxsXG4gIH0sXG5cbiAgdG9Mb2dpbiAoKSB7XG4gICAgd3guc2hvd01vZGFsKHtcbiAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgIGNvbnRlbnQ6ICfnoa7orqTpgIDlh7ror6XotKblj7flkJfvvJ8nLFxuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgIHJvdXRlci50byhyb3V0ZXIudHlwZS5STCwgJy9wYWdlcy9sb2dpbi9sb2dpbicpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGFuaW1hdGlvbiAoZTogYW55KSB7XG4gICAgc2hvd1RvYXN0KHsgbWVzc2FnZTogZS50YXJnZXQuaWQsIHR5cGU6IGUudGFyZ2V0LmlkIH0pXG4gIH0gXG59KVxuIl19