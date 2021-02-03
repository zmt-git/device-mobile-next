"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useToast_1 = require("../../handler/useToast");
Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'apply-shared'
    },
    properties: {
        position: {
            type: String,
            value: 'top'
        },
        defaultIcon: {
            type: Boolean,
            value: false
        }
    },
    data: {
        message: '提示提示提示提示提示',
        type: 'primary',
        duration: 2000,
        icon: '',
        iconList: {
            success: 'icon-chenggong',
            danger: 'icon-shibai',
            default: 'icon-jinzhi',
            warning: 'icon-jinggao',
            primary: 'icon-yibanxiaoxitixing_Pro',
        },
        animationData: {},
        timeer: 0
    },
    created: function () {
        useToast_1.bindComponent(this);
    },
    methods: {
        setAnimation: function () {
            var _this = this;
            this.data.timeer && clearInterval(this.data.timeer);
            var animationData = wx.createAnimation({
                duration: 300,
                timingFunction: 'ease'
            });
            animationData.opacity(1).step();
            this.setData({
                animationData: animationData.export()
            });
            this.data.timeer = setTimeout(function () {
                animationData.opacity(0).step();
                _this.setData({
                    animationData: animationData.export()
                });
            }, this.data.duration);
        },
        show: function (opt) {
            this.setData({
                message: opt.message,
                type: (opt.type || 'primary'),
                duration: (opt.duration || 2000),
                icon: (opt.icon || '')
            });
            this.setAnimation();
        }
    }
});
