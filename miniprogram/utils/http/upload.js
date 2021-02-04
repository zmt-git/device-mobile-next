"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
var httpUtil_1 = require("./httpUtil");
var auth_1 = require("../auth/auth");
var requestHandler_1 = require("../../handler/requestHandler");
var header = {
    "Content-Type": "application/json",
    'token': auth_1.getToken()
};
var upload = function (opt) {
    opt.files = opt.files || [];
    if (opt.formData) {
        opt.formData = httpUtil_1.getData(opt.formData);
    }
    opt.filePath = opt.filePath;
    if (!auth_1.getToken()) {
        wx.navigateTo({
            url: '../../pages/login/login'
        });
        return Promise.reject('token error');
    }
    header.token = auth_1.getToken();
    return new Promise(function (resolve, reject) {
        wx.uploadFile({
            url: httpsSetting_1.HTTPSSETTING.requestUrl,
            filePath: opt.filePath,
            name: opt.name,
            formData: opt.formData,
            header: header,
            success: function (res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res);
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
exports.default = upload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQTBEO0FBQzFELHVDQUFvQztBQUNwQyxxQ0FBdUM7QUFDdkMsK0RBQTJEO0FBQzNELElBQU0sTUFBTSxHQUFHO0lBQ2IsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQyxPQUFPLEVBQUUsZUFBUSxFQUFFO0NBQ3BCLENBQUE7QUFFRCxJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQWM7SUFDN0IsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQTtJQUUzQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7UUFDakIsR0FBRyxDQUFDLFFBQVEsR0FBRyxrQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNwQztJQUVBLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtJQUUzQixJQUFJLENBQUMsZUFBUSxFQUFFLEVBQUU7UUFDZixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHlCQUF5QjtTQUMvQixDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDckM7SUFFRCxNQUFNLENBQUMsS0FBSyxHQUFHLGVBQVEsRUFBRSxDQUFBO0lBRzFCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNoQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDJCQUFZLENBQUMsVUFBVTtZQUM1QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1lBQ3RCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNiO3FCQUFNO29CQUNMLDZCQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDWjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBVSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNYLENBQUM7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNoQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUE7QUFDRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQU1NFVFRJTkcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncy9odHRwc1NldHRpbmcnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2h0dHBVdGlsJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL2F1dGgvYXV0aCdcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaGFuZGxlci9yZXF1ZXN0SGFuZGxlcidcclxuY29uc3QgaGVhZGVyID0ge1xyXG4gIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICd0b2tlbic6IGdldFRva2VuKClcclxufVxyXG5cclxuY29uc3QgdXBsb2FkID0gKG9wdDogVXBsb2FkT3B0KSA9PiB7XHJcblx0b3B0LmZpbGVzID0gb3B0LmZpbGVzIHx8IFtdXHJcblxyXG5cdGlmIChvcHQuZm9ybURhdGEpIHtcclxuXHRcdG9wdC5mb3JtRGF0YSA9IGdldERhdGEob3B0LmZvcm1EYXRhKVxyXG5cdH1cclxuXHJcbiAgb3B0LmZpbGVQYXRoID0gb3B0LmZpbGVQYXRoXHJcbiAgXHJcbiAgaWYgKCFnZXRUb2tlbigpKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vLi4vcGFnZXMvbG9naW4vbG9naW4nXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd0b2tlbiBlcnJvcicpXHJcbiAgfVxyXG5cclxuICBoZWFkZXIudG9rZW4gPSBnZXRUb2tlbigpXHJcblxyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgIHVybDogSFRUUFNTRVRUSU5HLnJlcXVlc3RVcmwsXHJcbiAgICAgIGZpbGVQYXRoOiBvcHQuZmlsZVBhdGgsXHJcbiAgICAgIG5hbWU6IG9wdC5uYW1lLFxyXG4gICAgICBmb3JtRGF0YTogb3B0LmZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzLnN0YXR1c0NvZGUgPCAzMDApIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlcnJvckhhbmRsZXIocmVzKVxyXG4gICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cdH0pXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFxyXG4iXX0=