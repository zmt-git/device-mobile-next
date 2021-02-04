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
var PtStatusEnum;
(function (PtStatusEnum) {
    PtStatusEnum[PtStatusEnum["loading"] = 0] = "loading";
    PtStatusEnum[PtStatusEnum["more"] = 1] = "more";
    PtStatusEnum[PtStatusEnum["noMore"] = 2] = "noMore";
})(PtStatusEnum || (PtStatusEnum = {}));
var Pagination = (function () {
    function Pagination(opt) {
        this.request = function () { };
        this.lists = [];
        this.currentPage = 1;
        this.pageSize = 15;
        this.total = 0;
        this.status = PtStatusEnum.more;
        this.request = opt.request;
        this.clear();
    }
    Object.defineProperty(Pagination.prototype, "getLists", {
        get: function () {
            return this.lists;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getCurrentPage", {
        get: function () {
            return this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getPageSize", {
        get: function () {
            return this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getTotal", {
        get: function () {
            return this.total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Pagination.prototype.clear = function () {
        this.lists = [];
        this.currentPage = 1;
        this.pageSize = 15;
        this.total = 0;
        this.status = PtStatusEnum.more;
    };
    Pagination.prototype.getData = function () {
        var _this = this;
        return this.request({ current: this.currentPage, size: this.pageSize })
            .then(function (res) {
            _this.lists = _this.lists.concat(res.result.records);
            _this.pageSize = res.result.size;
            _this.currentPage = res.result.current;
            _this.total = res.result.total;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    Pagination.prototype.getMoreData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.lists.length >= this.total) {
                            this.status = PtStatusEnum.noMore;
                            return [2];
                        }
                        this.status = PtStatusEnum.loading;
                        this.currentPage++;
                        return [4, this.getData()];
                    case 1:
                        _a.sent();
                        if (this.lists.length >= this.total) {
                            this.status = PtStatusEnum.noMore;
                        }
                        else {
                            this.status = PtStatusEnum.more;
                        }
                        return [2];
                }
            });
        });
    };
    Pagination.prototype.refresh = function () {
        this.clear();
        this.getData();
    };
    return Pagination;
}());
exports.default = Pagination;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNmLHFEQUFXLENBQUE7SUFDWCwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtBQUNaLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQUVEO0lBYUUsb0JBQWEsR0FBa0I7UUFaZCxZQUFPLEdBQWEsY0FBTyxDQUFDLENBQUE7UUFFckMsVUFBSyxHQUFVLEVBQUUsQ0FBQTtRQUVqQixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUV2QixhQUFRLEdBQVcsRUFBRSxDQUFBO1FBRXJCLFVBQUssR0FBVyxDQUFDLENBQUE7UUFFakIsV0FBTSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFBO1FBRzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQTtRQUUxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBRUQsc0JBQUksZ0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEUsSUFBSSxDQUFDLFVBQUMsR0FBb0I7WUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xELEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7WUFDL0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTtZQUNyQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQU07WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVLLGdDQUFXLEdBQWpCOzs7Ozt3QkFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQTs0QkFFakMsV0FBTTt5QkFDUDt3QkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUE7d0JBRWxDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTt3QkFFbEIsV0FBTSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFwQixTQUFvQixDQUFBO3dCQUVwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQTt5QkFDbEM7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBO3lCQUNoQzs7Ozs7S0FDRjtJQUVELDRCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXBGRCxJQW9GQztBQUVELGtCQUFlLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBQYWdpbmF0aW9uT3B0IHtcclxuICByZXF1ZXN0OiBGdW5jdGlvblxyXG59XHJcblxyXG5lbnVtIFB0U3RhdHVzRW51bSB7XHJcbiAgbG9hZGluZyA9IDAsXHJcbiAgbW9yZSA9IDEsXHJcbiAgbm9Nb3JlID0gMlxyXG59XHJcblxyXG5jbGFzcyBQYWdpbmF0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlcXVlc3Q6IEZ1bmN0aW9uID0gKCkgPT4ge31cclxuXHJcbiAgcHJpdmF0ZSBsaXN0czogYW55W10gPSBbXVxyXG5cclxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxXHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDE1XHJcblxyXG4gIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDBcclxuXHJcbiAgcHJpdmF0ZSBzdGF0dXM6IFB0U3RhdHVzRW51bSA9IFB0U3RhdHVzRW51bS5tb3JlXHJcblxyXG4gIGNvbnN0cnVjdG9yIChvcHQ6IFBhZ2luYXRpb25PcHQpIHtcclxuICAgIHRoaXMucmVxdWVzdCA9IG9wdC5yZXF1ZXN0XHJcblxyXG4gICAgdGhpcy5jbGVhcigpXHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0TGlzdHMgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdHNcclxuICB9XHJcblxyXG4gIGdldCBnZXRDdXJyZW50UGFnZSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVxyXG4gIH1cclxuXHJcbiAgZ2V0IGdldFBhZ2VTaXplICgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2VTaXplXHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0VG90YWwgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG90YWxcclxuICB9XHJcblxyXG4gIGdldCBnZXRTdGF0dXMgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzXHJcbiAgfVxyXG5cclxuICBjbGVhciAoKSB7XHJcbiAgICB0aGlzLmxpc3RzID0gW11cclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxXHJcbiAgICB0aGlzLnBhZ2VTaXplID0gMTVcclxuICAgIHRoaXMudG90YWwgPSAwXHJcbiAgICB0aGlzLnN0YXR1cyA9IFB0U3RhdHVzRW51bS5tb3JlXHJcbiAgfVxyXG5cclxuICBnZXREYXRhICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnRQYWdlLCBzaXplOiB0aGlzLnBhZ2VTaXplIH0pXHJcbiAgICAgIC50aGVuKChyZXM6IFJlc3BvbnNlUGFnZU9wdCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdHMgPSB0aGlzLmxpc3RzLmNvbmNhdChyZXMucmVzdWx0LnJlY29yZHMpXHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHJlcy5yZXN1bHQuc2l6ZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSByZXMucmVzdWx0LmN1cnJlbnRcclxuICAgICAgICB0aGlzLnRvdGFsID0gcmVzLnJlc3VsdC50b3RhbFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNb3JlRGF0YSAoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0cy5sZW5ndGggPj0gdGhpcy50b3RhbCkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9IFB0U3RhdHVzRW51bS5ub01vcmVcclxuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdHVzID0gUHRTdGF0dXNFbnVtLmxvYWRpbmdcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlKytcclxuXHJcbiAgICBhd2FpdCB0aGlzLmdldERhdGEoKVxyXG5cclxuICAgIGlmICh0aGlzLmxpc3RzLmxlbmd0aCA+PSB0aGlzLnRvdGFsKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gUHRTdGF0dXNFbnVtLm5vTW9yZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSBQdFN0YXR1c0VudW0ubW9yZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCAoKSB7XHJcbiAgICB0aGlzLmNsZWFyKClcclxuICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXHJcbiJdfQ==