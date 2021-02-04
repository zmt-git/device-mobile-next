"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUE4QztBQUU5QyxTQUFnQixLQUFLLENBQUUsTUFBbUI7SUFDeEMsT0FBTyxpQkFBTyxDQUFDO1FBQ2IsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sUUFBQTtLQUNQLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFORCxzQkFNQztBQUdELFNBQWdCLFNBQVMsQ0FBRSxNQUFpQjtJQUMxQyxPQUFPLGlCQUFPLENBQUM7UUFDYixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsTUFBTSxRQUFBO0tBQ1AsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQU5ELDhCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cC9yZXF1ZXN0J1xyXG4vLyBQT1NUIC9zeXN0ZW0vbG9naW5Gb3JQaG9uZSBBUFDlrqLmiLfnmbvlvZVcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luIChwYXJhbXM6IExvZ2luUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvc3lzdGVtL2xvZ2luRm9yUGhvbmUnLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBwYXJhbXNcclxuICB9KVxyXG59XHJcblxyXG4vLyBHRVQgL3N5c3RlbS9sb2dpblV1SWQg5qC55o2uY29kZeeZu+W9lVxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5Db2RlIChwYXJhbXM6IExvZ2luVVVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3N5c3RlbS9sb2dpblV1SWQnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtc1xyXG4gIH0pXHJcbn1cclxuIl19