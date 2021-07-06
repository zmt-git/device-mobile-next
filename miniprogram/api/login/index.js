"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCode = exports.login = void 0;
var request_1 = require("../../utils/http/request");
function login(params) {
    return request_1.default({
        url: '/system/loginForPhone',
        method: 'POST',
        params: params
    });
}
exports.login = login;
function loginCode(params) {
    return request_1.default({
        url: '/system/loginUuId',
        method: 'GET',
        params: params
    });
}
exports.loginCode = loginCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBOEM7QUFFOUMsU0FBZ0IsS0FBSyxDQUFFLE1BQW1CO0lBQ3hDLE9BQU8saUJBQU8sQ0FBQztRQUNiLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLFFBQUE7S0FDUCxDQUFDLENBQUE7QUFDSixDQUFDO0FBTkQsc0JBTUM7QUFHRCxTQUFnQixTQUFTLENBQUUsTUFBaUI7SUFDMUMsT0FBTyxpQkFBTyxDQUFDO1FBQ2IsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sUUFBQTtLQUNQLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFORCw4QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAvcmVxdWVzdCdcclxuLy8gUE9TVCAvc3lzdGVtL2xvZ2luRm9yUGhvbmUgQVBQ5a6i5oi355m75b2VXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAocGFyYW1zOiBMb2dpblBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3N5c3RlbS9sb2dpbkZvclBob25lJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgcGFyYW1zXHJcbiAgfSlcclxufVxyXG5cclxuLy8gR0VUIC9zeXN0ZW0vbG9naW5VdUlkIOagueaNrmNvZGXnmbvlvZVcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luQ29kZSAocGFyYW1zOiBMb2dpblVVaWQpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9zeXN0ZW0vbG9naW5VdUlkJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXNcclxuICB9KVxyXG59XHJcbiJdfQ==