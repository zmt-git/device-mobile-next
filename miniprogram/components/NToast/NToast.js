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
            value: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlRvYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTlRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXNEO0FBQ3RELFNBQVMsQ0FBQztJQUNSLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBRUQsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE9BQU8sRUFBRSw0QkFBNEI7U0FDdEM7UUFDRCxhQUFhLEVBQUUsRUFBRTtRQUNqQixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBRUQsT0FBTztRQUNMLHdCQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELE9BQU8sRUFBRTtRQUNQLFlBQVk7WUFBWixpQkFvQkM7WUFuQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFbkQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsY0FBYyxFQUFFLE1BQU07YUFDdkIsQ0FBQyxDQUFBO1lBRUYsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFO2FBQ3RDLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztnQkFDNUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxhQUFhLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRTtpQkFDdEMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVELElBQUksRUFBSixVQUFNLEdBQVk7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO2dCQUM3QixRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztnQkFDaEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDdkIsQ0FBQyxDQUFBO1lBRUYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3JCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9oYW5kbGVyL3VzZVRvYXN0J1xyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBzdHlsZUlzb2xhdGlvbjogJ2FwcGx5LXNoYXJlZCdcclxuICB9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBwb3NpdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIGRlZmF1bHRJY29uOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgbWVzc2FnZTogJ+aPkOekuuaPkOekuuaPkOekuuaPkOekuuaPkOekuicsXHJcbiAgICB0eXBlOiAncHJpbWFyeScsXHJcbiAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIGljb246ICcnLFxyXG4gICAgaWNvbkxpc3Q6IHtcclxuICAgICAgc3VjY2VzczogJ2ljb24tY2hlbmdnb25nJyxcclxuICAgICAgZGFuZ2VyOiAnaWNvbi1zaGliYWknLFxyXG4gICAgICBkZWZhdWx0OiAnaWNvbi1qaW56aGknLFxyXG4gICAgICB3YXJuaW5nOiAnaWNvbi1qaW5nZ2FvJyxcclxuICAgICAgcHJpbWFyeTogJ2ljb24teWliYW54aWFveGl0aXhpbmdfUHJvJyxcclxuICAgIH0sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpbWVlcjogMFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgYmluZENvbXBvbmVudCh0aGlzKVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldEFuaW1hdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50aW1lZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZWVyKVxyXG5cclxuICAgICAgY29uc3QgYW5pbWF0aW9uRGF0YSA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBhbmltYXRpb25EYXRhLm9wYWNpdHkoMSkuc3RlcCgpXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuZGF0YS50aW1lZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbmltYXRpb25EYXRhLm9wYWNpdHkoMCkuc3RlcCgpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICB9KVxyXG4gICAgICB9LCB0aGlzLmRhdGEuZHVyYXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93IChvcHQ6IFNob3dPcHQpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBtZXNzYWdlOiBvcHQubWVzc2FnZSxcclxuICAgICAgICB0eXBlOiAob3B0LnR5cGUgfHwgJ3ByaW1hcnknKSxcclxuICAgICAgICBkdXJhdGlvbjogKG9wdC5kdXJhdGlvbiB8fCAyMDAwKSxcclxuICAgICAgICBpY29uOiAob3B0Lmljb24gfHwgJycpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbigpXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==