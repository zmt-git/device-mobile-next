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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFzRDtBQUN0RCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtRQUNuQixjQUFjLEVBQUUsY0FBYztLQUMvQjtJQUVELFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFNBQVM7UUFDZixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixNQUFNLEVBQUUsYUFBYTtZQUNyQixPQUFPLEVBQUUsYUFBYTtZQUN0QixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUUsNEJBQTRCO1NBQ3RDO1FBQ0QsYUFBYSxFQUFFLEVBQUU7UUFDakIsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUVELE9BQU87UUFDTCx3QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFDUCxZQUFZO1lBQVosaUJBb0JDO1lBbkJDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRW5ELElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxNQUFNO2FBQ3ZCLENBQUMsQ0FBQTtZQUVGLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRTthQUN0QyxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQzVCLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsYUFBYSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUU7aUJBQ3RDLENBQUMsQ0FBQTtZQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxJQUFJLFlBQUUsR0FBWTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDcEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7Z0JBQzdCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO2dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUN2QixDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDckIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2hhbmRsZXIvdXNlVG9hc3QnXHJcbkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnYXBwbHktc2hhcmVkJ1xyXG4gIH0sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdEljb246IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgbWVzc2FnZTogJ+aPkOekuuaPkOekuuaPkOekuuaPkOekuuaPkOekuicsXHJcbiAgICB0eXBlOiAncHJpbWFyeScsXHJcbiAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIGljb246ICcnLFxyXG4gICAgaWNvbkxpc3Q6IHtcclxuICAgICAgc3VjY2VzczogJ2ljb24tY2hlbmdnb25nJyxcclxuICAgICAgZGFuZ2VyOiAnaWNvbi1zaGliYWknLFxyXG4gICAgICBkZWZhdWx0OiAnaWNvbi1qaW56aGknLFxyXG4gICAgICB3YXJuaW5nOiAnaWNvbi1qaW5nZ2FvJyxcclxuICAgICAgcHJpbWFyeTogJ2ljb24teWliYW54aWFveGl0aXhpbmdfUHJvJyxcclxuICAgIH0sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpbWVlcjogMFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgYmluZENvbXBvbmVudCh0aGlzKVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldEFuaW1hdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50aW1lZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEudGltZWVyKVxyXG5cclxuICAgICAgY29uc3QgYW5pbWF0aW9uRGF0YSA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBhbmltYXRpb25EYXRhLm9wYWNpdHkoMSkuc3RlcCgpXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuZGF0YS50aW1lZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbmltYXRpb25EYXRhLm9wYWNpdHkoMCkuc3RlcCgpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICB9KVxyXG4gICAgICB9LCB0aGlzLmRhdGEuZHVyYXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93IChvcHQ6IFNob3dPcHQpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBtZXNzYWdlOiBvcHQubWVzc2FnZSxcclxuICAgICAgICB0eXBlOiAob3B0LnR5cGUgfHwgJ3ByaW1hcnknKSxcclxuICAgICAgICBkdXJhdGlvbjogKG9wdC5kdXJhdGlvbiB8fCAyMDAwKSxcclxuICAgICAgICBpY29uOiAob3B0Lmljb24gfHwgJycpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbigpXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==