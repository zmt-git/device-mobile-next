"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/http/request");
function getDeviceList(data) {
    return request_1.default({
        url: '/deviceInfoManager/page',
        method: 'POST',
        data: data
    });
}
exports.getDeviceList = getDeviceList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUE4QztBQUc5QyxTQUFnQixhQUFhLENBQUUsSUFBYTtJQUMxQyxPQUFPLGlCQUFPLENBQUM7UUFDYixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxNQUFBO0tBQ0wsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQU5ELHNDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cC9yZXF1ZXN0J1xyXG5cclxuLy8gUE9TVCAvZGV2aWNlSW5mb01hbmFnZXIvcGFnZSDliIbpobXmn6Xor6Lorr7lpIfkv6Hmga9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUxpc3QgKGRhdGE6IFBhZ2VPcHQpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvZGV2aWNlSW5mb01hbmFnZXIvcGFnZScsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcbiJdfQ==