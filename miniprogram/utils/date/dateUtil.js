"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timestapToTime(time, type, format) {
    if (type === void 0) { type = 'yyyy-MM-dd hh:mm:ss'; }
    if (format === void 0) { format = '-'; }
    var result = '';
    if (time.toString().length === 10) {
        time = time * 1000;
    }
    if (time.toString().length < 13)
        return result;
    var date = new Date(time);
    var yyyy = date.getFullYear().toString();
    var MM = (date.getMonth() + 1).toString().padStart(2, '0');
    var dd = date.getDay().toString().padStart(2, '0');
    var hh = date.getHours().toString().padStart(2, '0');
    var mm = date.getMinutes().toString().padStart(2, '0');
    var ss = date.getSeconds().toString().padStart(2, '0');
    switch (type) {
        case 'hh:mm':
            result = hh + ":" + mm + ":" + ss;
            break;
        case 'yyyy-MM-dd':
            result = "" + yyyy + format + MM + format + dd;
            break;
        default: result = "" + yyyy + format + MM + format + dd + " " + hh + ":" + mm + ":" + ss;
    }
    return result;
}
exports.timestapToTime = timestapToTime;
