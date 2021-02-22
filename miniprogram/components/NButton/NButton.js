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
            if (this.properties.disabled)
                return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBRUQsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUVELElBQUksRUFBRztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFFRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBRUQsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtTQUNiO1FBRUQsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNiO1FBRUQsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxhQUFhLEVBQUUsVUFBUyxJQUFJLEVBQUUsS0FBSztZQUVqQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLEtBQUssRUFBSyxJQUFJLFdBQVE7aUJBQ3ZCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztLQUNGO0lBRUQsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsS0FBSztLQUNmO0lBRUQsT0FBTyxFQUFFO1FBQ1AsT0FBTyxZQUFFLENBQUM7WUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFBRSxPQUFNO1lBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFBO2FBQ0g7aUJBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnYXBwbHktc2hhcmVkJ1xyXG4gIH0sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHR5cGU6IHtcclxuICAgICAgdmFsdWU6ICdzdWNjZXNzJyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHNpemU6ICB7XHJcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCcsXHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNhYmxlZDoge1xyXG4gICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZGluZzoge1xyXG4gICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0sXHJcblxyXG4gICAgcGxhaW46IHtcclxuICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBCb29sZWFuXHJcbiAgICB9LFxyXG5cclxuICAgIGJyZWF0aDoge1xyXG4gICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0sXHJcbiAgICB3YXZlOiB7XHJcbiAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgfSxcclxuXHJcbiAgICBob3ZlckNsYXNzOiB7XHJcbiAgICAgIHZhbHVlOiAnYnV0dG9uLWhvdmVyJyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5UeXBlOiB7XHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHJhZGl1czoge1xyXG4gICAgICB2YWx1ZTogJzEwcnB4JyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIGNsYXNzTmFtZToge1xyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9ic2VydmVyczoge1xyXG4gICAgJ3R5cGUsIHBsYWluJzogZnVuY3Rpb24odHlwZSwgcGxhaW4pIHtcclxuICAgICAgLy8g5ZyoIG51bWJlckEg5oiW6ICFIG51bWJlckIg6KKr6K6+572u5pe277yM5omn6KGM6L+Z5Liq5Ye95pWwXHJcbiAgICAgIGlmIChwbGFpbikge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjbGFzczogYCR7dHlwZX0tcGxhaW5gXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6IHtcclxuICAgIGNsYXNzOiAnJyxcclxuICAgIGlzVG91Y2g6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25Ub3VjaCAoZSkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmRpc2FibGVkKSByZXR1cm5cclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGlzVG91Y2g6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc1RvdWNoOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl19