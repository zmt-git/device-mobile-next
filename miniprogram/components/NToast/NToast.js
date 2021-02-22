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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlRvYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTlRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXNEO0FBQ3RELFNBQVMsQ0FBQztJQUNSLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBRUQsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsU0FBUztRQUNmLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE9BQU8sRUFBRSw0QkFBNEI7U0FDdEM7UUFDRCxhQUFhLEVBQUUsRUFBRTtRQUNqQixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBRUQsT0FBTztRQUNMLHdCQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELE9BQU8sRUFBRTtRQUNQLFlBQVk7WUFBWixpQkFvQkM7WUFuQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFbkQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsY0FBYyxFQUFFLE1BQU07YUFDdkIsQ0FBQyxDQUFBO1lBRUYsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFO2FBQ3RDLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztnQkFDNUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxhQUFhLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRTtpQkFDdEMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVELElBQUksWUFBRSxHQUFZO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztnQkFDN0IsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7Z0JBQ2hDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNyQixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaGFuZGxlci91c2VUb2FzdCdcclxuQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgc3R5bGVJc29sYXRpb246ICdhcHBseS1zaGFyZWQnXHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ3RvcCdcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SWNvbjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6IHtcclxuICAgIG1lc3NhZ2U6ICfmj5DnpLrmj5DnpLrmj5DnpLrmj5DnpLrmj5DnpLonLFxyXG4gICAgdHlwZTogJ3ByaW1hcnknLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBpY29uOiAnJyxcclxuICAgIGljb25MaXN0OiB7XHJcbiAgICAgIHN1Y2Nlc3M6ICdpY29uLWNoZW5nZ29uZycsXHJcbiAgICAgIGRhbmdlcjogJ2ljb24tc2hpYmFpJyxcclxuICAgICAgZGVmYXVsdDogJ2ljb24tamluemhpJyxcclxuICAgICAgd2FybmluZzogJ2ljb24tamluZ2dhbycsXHJcbiAgICAgIHByaW1hcnk6ICdpY29uLXlpYmFueGlhb3hpdGl4aW5nX1BybycsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGF0YToge30sXHJcbiAgICB0aW1lZXI6IDBcclxuICB9LFxyXG5cclxuICBjcmVhdGVkICgpIHtcclxuICAgIGJpbmRDb21wb25lbnQodGhpcylcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBzZXRBbmltYXRpb24gKCkge1xyXG4gICAgICB0aGlzLmRhdGEudGltZWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLnRpbWVlcilcclxuXHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRhdGEgPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgYW5pbWF0aW9uRGF0YS5vcGFjaXR5KDEpLnN0ZXAoKVxyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLmV4cG9ydCgpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmRhdGEudGltZWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0aW9uRGF0YS5vcGFjaXR5KDApLnN0ZXAoKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLmV4cG9ydCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgdGhpcy5kYXRhLmR1cmF0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyAob3B0OiBTaG93T3B0KSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWVzc2FnZTogb3B0Lm1lc3NhZ2UsXHJcbiAgICAgICAgdHlwZTogKG9wdC50eXBlIHx8ICdwcmltYXJ5JyksXHJcbiAgICAgICAgZHVyYXRpb246IChvcHQuZHVyYXRpb24gfHwgMjAwMCksXHJcbiAgICAgICAgaWNvbjogKG9wdC5pY29uIHx8ICcnKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5zZXRBbmltYXRpb24oKVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=