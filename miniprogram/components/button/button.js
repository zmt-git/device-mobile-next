"use strict";
Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'apply-shared'
    },
    properties: {
        type: {
            value: 'success',
            type: String
        },
        size: {
            value: 'default',
            type: String
        },
        disabled: {
            value: false,
            type: Boolean
        },
        loading: {
            value: false,
            type: Boolean
        },
        plain: {
            value: false,
            type: Boolean
        },
        breath: {
            value: false,
            type: Boolean
        },
        wave: {
            value: false,
            type: Boolean
        },
        hoverClass: {
            value: 'button-hover',
            type: String
        },
        openType: {
            value: '',
            type: String
        },
        radius: {
            value: '10rpx',
            type: String
        },
        className: {
            value: '',
            type: String
        }
    },
    observers: {
        'type, plain': function (type, plain) {
            if (plain) {
                this.setData({
                    class: type + "-plain"
                });
            }
        }
    },
    data: {
        class: '',
        isTouch: false
    },
    methods: {
        onTouch: function (e) {
            if (e.type === 'touchstart') {
                this.setData({
                    isTouch: true
                });
            }
            else if (e.type === 'touchend') {
                this.setData({
                    isTouch: false
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtRQUNuQixjQUFjLEVBQUUsY0FBYztLQUMvQjtJQUVELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFFRCxJQUFJLEVBQUc7WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBRUQsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUVELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUVELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUVELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBRUQsU0FBUyxFQUFFO1FBQ1QsYUFBYSxFQUFFLFVBQVMsSUFBSSxFQUFFLEtBQUs7WUFFakMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxLQUFLLEVBQUssSUFBSSxXQUFRO2lCQUN2QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7S0FDRjtJQUVELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEtBQUs7S0FDZjtJQUVELE9BQU8sRUFBRTtRQUNQLE9BQU8sWUFBRSxDQUFDO1lBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUE7YUFDSDtpQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgc3R5bGVJc29sYXRpb246ICdhcHBseS1zaGFyZWQnXHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdHlwZToge1xyXG4gICAgICB2YWx1ZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgc2l6ZTogIHtcclxuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2FibGVkOiB7XHJcbiAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkaW5nOiB7XHJcbiAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgfSxcclxuXHJcbiAgICBwbGFpbjoge1xyXG4gICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0sXHJcblxyXG4gICAgYnJlYXRoOiB7XHJcbiAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgfSxcclxuICAgIHdhdmU6IHtcclxuICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBCb29sZWFuXHJcbiAgICB9LFxyXG5cclxuICAgIGhvdmVyQ2xhc3M6IHtcclxuICAgICAgdmFsdWU6ICdidXR0b24taG92ZXInLFxyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgb3BlblR5cGU6IHtcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgcmFkaXVzOiB7XHJcbiAgICAgIHZhbHVlOiAnMTBycHgnLFxyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgY2xhc3NOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAndHlwZSwgcGxhaW4nOiBmdW5jdGlvbih0eXBlLCBwbGFpbikge1xyXG4gICAgICAvLyDlnKggbnVtYmVyQSDmiJbogIUgbnVtYmVyQiDooqvorr7nva7ml7bvvIzmiafooYzov5nkuKrlh73mlbBcclxuICAgICAgaWYgKHBsYWluKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGNsYXNzOiBgJHt0eXBlfS1wbGFpbmBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgY2xhc3M6ICcnLFxyXG4gICAgaXNUb3VjaDogZmFsc2VcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvblRvdWNoIChlKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc1RvdWNoOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNUb3VjaDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==