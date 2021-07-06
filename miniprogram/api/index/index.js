"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceList = void 0;
var request_1 = require("../../utils/http/request");
function getDeviceList(data) {
    return request_1.default({
        url: '/deviceInfoManager/page',
        method: 'POST',
        data: data
    });
}
exports.getDeviceList = getDeviceList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBOEM7QUFHOUMsU0FBZ0IsYUFBYSxDQUFFLElBQWE7SUFDMUMsT0FBTyxpQkFBTyxDQUFDO1FBQ2IsR0FBRyxFQUFFLHlCQUF5QjtRQUM5QixNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksTUFBQTtLQUNMLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFORCxzQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAvcmVxdWVzdCdcclxuXHJcbi8vIFBPU1QgL2RldmljZUluZm9NYW5hZ2VyL3BhZ2Ug5YiG6aG15p+l6K+i6K6+5aSH5L+h5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VMaXN0IChkYXRhOiBQYWdlT3B0KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2RldmljZUluZm9NYW5hZ2VyL3BhZ2UnLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG4iXX0=