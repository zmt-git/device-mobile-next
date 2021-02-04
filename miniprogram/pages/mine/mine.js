"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../utils/router/index");
var useToast_1 = require("../../handler/useToast");
Page({
    onShow: function () {
    },
    toIndex: function () {
        useToast_1.showToast({ message: 'to index', type: 'success' });
        index_1.default.to(index_1.RouteType.ST, '/pages/index/index');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBNEQ7QUFDNUQsbURBQWtEO0FBRWxELElBQUksQ0FBQztJQUNILE1BQU07SUFFTixDQUFDO0lBRUQsT0FBTztRQUNMLG9CQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO1FBQ2xELGVBQU0sQ0FBQyxFQUFFLENBQUMsaUJBQVMsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlciwgeyBSb3V0ZVR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9yb3V0ZXIvaW5kZXgnXHJcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gJy4uLy4uL2hhbmRsZXIvdXNlVG9hc3QnXHJcblxyXG5QYWdlKHtcclxuICBvblNob3cgKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgdG9JbmRleCAoKSB7XHJcbiAgICBzaG93VG9hc3QoeyBtZXNzYWdlOiAndG8gaW5kZXgnLCB0eXBlOiAnc3VjY2Vzcyd9KVxyXG4gICAgcm91dGVyLnRvKFJvdXRlVHlwZS5TVCwgJy9wYWdlcy9pbmRleC9pbmRleCcpXHJcbiAgfVxyXG59KSJdfQ==