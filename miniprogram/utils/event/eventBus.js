"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus = (function () {
    function EventBus() {
        this.eventMap = {};
    }
    EventBus.prototype.on = function (eventName, callback) {
        if (!this.eventMap[eventName]) {
            this.eventMap[eventName] = [];
        }
        var cd = this.eventMap[eventName].find(function (cd) { return cd === callback; });
        if (!cd) {
            this.eventMap[eventName].push(callback);
        }
    };
    EventBus.prototype.emit = function (eventName) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        var fnArr = this.eventMap[eventName];
        if (!fnArr || fnArr.length === 0)
            return;
        fnArr.forEach(function (fn) {
            fn.apply(void 0, arg);
        });
    };
    EventBus.prototype.off = function (eventName, fn) {
        var fnArr = this.eventMap[eventName];
        if (!fnArr || fnArr.length === 0)
            return;
        if (!fn) {
            this.eventMap[eventName] = [];
            delete this.eventMap[eventName];
        }
        else {
            var index = this.eventMap[eventName].findIndex(function (cd) { return cd === fn; });
            if (index >= 0) {
                this.eventMap[eventName].splice(index, 1);
            }
        }
    };
    return EventBus;
}());
exports.default = new EventBus();
