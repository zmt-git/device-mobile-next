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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUErRDtBQUMvRCxrREFBNkM7QUFDN0Msc0RBQWdEO0FBQ2hELCtDQUFxRDtBQUNyRCxtREFBa0Q7QUFFbEQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsRUFBeUI7UUFDckMsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU07UUFBTixpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLENBQUMsQ0FBQTtRQUVqRSxpQ0FBZ0IsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO0lBQzdCLENBQUM7SUFFRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLFdBQVc7WUFDcEIsT0FBTyxZQUFFLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNmLGVBQU0sQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtpQkFDaEQ7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVMsWUFBRSxDQUFNO1FBQ2Ysb0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpbkNvZGVIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaGFuZGxlci9yZXF1ZXN0SGFuZGxlcidcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vLi4vdXRpbHMvcm91dGVyL2luZGV4J1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vbWl4aW5zL3BhZ2luYXRpb24nXG5pbXBvcnQgeyBnZXREZXZpY2VMaXN0IH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4L2luZGV4J1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSAnLi4vLi4vaGFuZGxlci91c2VUb2FzdCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXSxcbiAgICBwYWdpbmF0aW9uOiB7fSBhcyAoUGFnaW5hdGlvbiB8IG51bGwpLFxuICAgIHRvYXN0OiB7fVxuICB9LFxuXG4gIG9uTG9hZCAoKSB7XG4gICAgdGhpcy5kYXRhLnBhZ2luYXRpb24gPSBuZXcgUGFnaW5hdGlvbih7IHJlcXVlc3Q6IGdldERldmljZUxpc3QgfSlcblxuICAgIGxvZ2luQ29kZUhhbmRsZXIoKCkgPT4ge1xuICAgICAgKHRoaXMuZGF0YS5wYWdpbmF0aW9uIGFzIFBhZ2luYXRpb24pLmdldERhdGEoKVxuICAgIH0pXG4gIH0sXG4gIFxuXG4gIG9uVW5sb2FkICgpIHtcbiAgICB0aGlzLmRhdGEucGFnaW5hdGlvbiA9IG51bGxcbiAgfSxcblxuICB0b0xvZ2luICgpIHtcbiAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgY29udGVudDogJ+ehruiupOmAgOWHuuivpei0puWPt+WQl++8nycsXG4gICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgcm91dGVyLnRvKHJvdXRlci50eXBlLlJMLCAnL3BhZ2VzL2xvZ2luL2xvZ2luJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgYW5pbWF0aW9uIChlOiBhbnkpIHtcbiAgICBzaG93VG9hc3QoeyBtZXNzYWdlOiBlLnRhcmdldC5pZCwgdHlwZTogZS50YXJnZXQuaWQgfSlcbiAgfSBcbn0pXG4iXX0=