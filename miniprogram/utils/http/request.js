"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
var httpUtil_1 = require("./httpUtil");
var requestHandler_1 = require("../../handler/requestHandler");
var auth_1 = require("../auth/auth");
var header = {
    "Content-Type": "application/json",
    'token': auth_1.getToken()
};
var request = function (opt) {
    var params = '';
    if ('params' in opt) {
        params = httpUtil_1.formateParams(opt.params);
    }
    opt.url = opt.url + params;
    if ('data' in opt) {
        opt.data = httpUtil_1.getData(opt.data);
    }
    header.token = auth_1.getToken();
    return new Promise(function (resolve, reject) {
        wx.request({
            url: httpsSetting_1.HTTPSSETTING.requestUrl + opt.url,
            data: opt.data,
            method: opt.method,
            header: header,
            dataType: 'json',
            success: function (res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                }
                else {
                    requestHandler_1.errorHandler(res);
                    reject(res);
                }
            },
            fail: function (e) {
                reject(e);
            },
            complete: function () {
                wx.hideLoading();
                wx.stopPullDownRefresh();
            }
        });
    });
};
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBMEQ7QUFDMUQsdUNBQW1EO0FBQ25ELCtEQUEyRDtBQUMzRCxxQ0FBdUM7QUFFdkMsSUFBTSxNQUFNLEdBQUc7SUFDYixjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLE9BQU8sRUFBRSxlQUFRLEVBQUU7Q0FDcEIsQ0FBQTtBQUVELElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBZTtJQUM5QixJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUE7SUFFdkIsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFO1FBQ25CLE1BQU0sR0FBRyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNuQztJQUVELEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUE7SUFFMUIsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsa0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDN0I7SUFFRCxNQUFNLENBQUMsS0FBSyxHQUFHLGVBQVEsRUFBRSxDQUFBO0lBRXpCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDJCQUFZLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHO1lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxVQUFVLEdBQUc7Z0JBQ3BCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7b0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ2xCO3FCQUFNO29CQUNMLDZCQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDWjtZQUNILENBQUM7WUFFRCxJQUFJLEVBQUUsVUFBVSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNYLENBQUM7WUFFRCxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNoQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRCxrQkFBZSxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQU1NFVFRJTkcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncy9odHRwc1NldHRpbmcnXHJcbmltcG9ydCB7IGZvcm1hdGVQYXJhbXMsIGdldERhdGEgfSBmcm9tICcuL2h0dHBVdGlsJ1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVyL3JlcXVlc3RIYW5kbGVyJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL2F1dGgvYXV0aCdcclxuXHJcbmNvbnN0IGhlYWRlciA9IHtcclxuICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAndG9rZW4nOiBnZXRUb2tlbigpXHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3QgPSAob3B0OiBSZXF1ZXN0T3B0KSA9PiB7XHJcbiAgbGV0IHBhcmFtczogc3RyaW5nID0gJydcclxuXHJcbiAgaWYgKCdwYXJhbXMnIGluIG9wdCkge1xyXG4gICAgcGFyYW1zID0gZm9ybWF0ZVBhcmFtcyhvcHQucGFyYW1zKVxyXG4gIH1cclxuXHJcbiAgb3B0LnVybCA9IG9wdC51cmwgKyBwYXJhbXNcclxuXHJcbiAgaWYgKCdkYXRhJyBpbiBvcHQpIHtcclxuICAgIG9wdC5kYXRhID0gZ2V0RGF0YShvcHQuZGF0YSlcclxuICB9XHJcblxyXG4gIGhlYWRlci50b2tlbiA9IGdldFRva2VuKClcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IEhUVFBTU0VUVElORy5yZXF1ZXN0VXJsICsgb3B0LnVybCxcclxuICAgICAgZGF0YTogb3B0LmRhdGEsXHJcbiAgICAgIG1ldGhvZDogb3B0Lm1ldGhvZCxcclxuICAgICAgaGVhZGVyOiBoZWFkZXIsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlcy5zdGF0dXNDb2RlIDwgMzAwKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlcnJvckhhbmRsZXIocmVzKVxyXG4gICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJlamVjdChlKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFxyXG4iXX0=