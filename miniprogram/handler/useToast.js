"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component = {};
function bindComponent(instance) {
    component = instance;
}
exports.bindComponent = bindComponent;
function showToast(opt) {
    component.show(opt);
}
exports.showToast = showToast;
