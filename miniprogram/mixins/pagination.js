"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getCurrentPage", {
        get: function () {
            return this.currentPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getPageSize", {
        get: function () {
            return this.pageSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getTotal", {
        get: function () {
            return this.total;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDZixxREFBVyxDQUFBO0lBQ1gsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFFRDtJQWFFLG9CQUFhLEdBQWtCO1FBWmQsWUFBTyxHQUFhLGNBQU8sQ0FBQyxDQUFBO1FBRXJDLFVBQUssR0FBVSxFQUFFLENBQUE7UUFFakIsZ0JBQVcsR0FBVyxDQUFDLENBQUE7UUFFdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUVyQixVQUFLLEdBQVcsQ0FBQyxDQUFBO1FBRWpCLFdBQU0sR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQTtRQUc5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUE7UUFFMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVELHNCQUFJLGdDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNwQixDQUFDOzs7T0FBQTtJQUVELDBCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBO0lBQ2pDLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BFLElBQUksQ0FBQyxVQUFDLEdBQW9CO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBQy9CLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7WUFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMvQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxDQUFNO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFSyxnQ0FBVyxHQUFqQjs7Ozs7d0JBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUE7NEJBRWpDLFdBQU07eUJBQ1A7d0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFBO3dCQUVsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7d0JBRWxCLFdBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBcEIsU0FBb0IsQ0FBQTt3QkFFcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUE7eUJBQ2xDOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQTt5QkFDaEM7Ozs7O0tBQ0Y7SUFFRCw0QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFwRkQsSUFvRkM7QUFFRCxrQkFBZSxVQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUGFnaW5hdGlvbk9wdCB7XHJcbiAgcmVxdWVzdDogRnVuY3Rpb25cclxufVxyXG5cclxuZW51bSBQdFN0YXR1c0VudW0ge1xyXG4gIGxvYWRpbmcgPSAwLFxyXG4gIG1vcmUgPSAxLFxyXG4gIG5vTW9yZSA9IDJcclxufVxyXG5cclxuY2xhc3MgUGFnaW5hdGlvbiB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZXF1ZXN0OiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcblxyXG4gIHByaXZhdGUgbGlzdHM6IGFueVtdID0gW11cclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyID0gMVxyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSAxNVxyXG5cclxuICBwcml2YXRlIHRvdGFsOiBudW1iZXIgPSAwXHJcblxyXG4gIHByaXZhdGUgc3RhdHVzOiBQdFN0YXR1c0VudW0gPSBQdFN0YXR1c0VudW0ubW9yZVxyXG5cclxuICBjb25zdHJ1Y3RvciAob3B0OiBQYWdpbmF0aW9uT3B0KSB7XHJcbiAgICB0aGlzLnJlcXVlc3QgPSBvcHQucmVxdWVzdFxyXG5cclxuICAgIHRoaXMuY2xlYXIoKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGdldExpc3RzICgpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RzXHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0Q3VycmVudFBhZ2UgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VcclxuICB9XHJcblxyXG4gIGdldCBnZXRQYWdlU2l6ZSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlU2l6ZVxyXG4gIH1cclxuXHJcbiAgZ2V0IGdldFRvdGFsICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsXHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0U3RhdHVzICgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1c1xyXG4gIH1cclxuXHJcbiAgY2xlYXIgKCkge1xyXG4gICAgdGhpcy5saXN0cyA9IFtdXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMVxyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDE1XHJcbiAgICB0aGlzLnRvdGFsID0gMFxyXG4gICAgdGhpcy5zdGF0dXMgPSBQdFN0YXR1c0VudW0ubW9yZVxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHsgY3VycmVudDogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KVxyXG4gICAgICAudGhlbigocmVzOiBSZXNwb25zZVBhZ2VPcHQpID0+IHtcclxuICAgICAgICB0aGlzLmxpc3RzID0gdGhpcy5saXN0cy5jb25jYXQocmVzLnJlc3VsdC5yZWNvcmRzKVxyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSByZXMucmVzdWx0LnNpemVcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcmVzLnJlc3VsdC5jdXJyZW50XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5yZXN1bHQudG90YWxcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TW9yZURhdGEgKCkge1xyXG4gICAgaWYgKHRoaXMubGlzdHMubGVuZ3RoID49IHRoaXMudG90YWwpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSBQdFN0YXR1c0VudW0ubm9Nb3JlXHJcblxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXR1cyA9IFB0U3RhdHVzRW51bS5sb2FkaW5nXHJcblxyXG4gICAgdGhpcy5jdXJyZW50UGFnZSsrXHJcblxyXG4gICAgYXdhaXQgdGhpcy5nZXREYXRhKClcclxuXHJcbiAgICBpZiAodGhpcy5saXN0cy5sZW5ndGggPj0gdGhpcy50b3RhbCkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9IFB0U3RhdHVzRW51bS5ub01vcmVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gUHRTdGF0dXNFbnVtLm1vcmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2ggKCkge1xyXG4gICAgdGhpcy5jbGVhcigpXHJcbiAgICB0aGlzLmdldERhdGEoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxyXG4iXX0=