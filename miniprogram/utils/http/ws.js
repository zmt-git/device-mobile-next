"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpsSetting_1 = require("../../settings/httpsSetting");
var auth_1 = require("../auth/auth");
var httpUtil_1 = require("../http/httpUtil");
var eventEmitEnum_1 = require("../event/eventEmitEnum");
var eventBus_1 = require("../event/eventBus");
var heartMsg = { protVer: '1.0', modeNum: 'web', sigNum: eventEmitEnum_1.EmitEnum.onheartMsg, seq: httpUtil_1.getSeq(), deviceCode: auth_1.getToken(), body: null };
var Socket = (function () {
    function Socket() {
        this.cachedUrl = '';
        this.reconnectTimes = 0;
        this.maxReconnect = 10;
        this.heartbeatTime = 30000;
        this.heartbeatTimer = null;
        this.timeout = httpsSetting_1.HTTPSSETTING.timeout;
        this.timeoutTimer = null;
        if (Socket.instance) {
            return Socket.instance;
        }
        this.cachedUrl = httpsSetting_1.HTTPSSETTING.wsUrl;
        Socket.instance = this;
        this.socket = this.createWs();
    }
    Object.defineProperty(Socket.prototype, "isConnect", {
        get: function () {
            return Socket._isConnect;
        },
        enumerable: false,
        configurable: true
    });
    Socket.prototype.createWs = function () {
        var _this = this;
        if (!auth_1.getToken()) {
            throw new Error('token error');
        }
        var ws = wx.connectSocket({ url: this.cachedUrl + "/?token=" + auth_1.getToken() });
        ws.onOpen(function () {
            console.log('ws onOpen');
            _this.timeoutTimer && clearTimeout(_this.timeoutTimer);
            _this.reconnectTimes = 0;
            Socket._isConnect = true;
            _this.heartbeat();
        });
        this.bindWsHooks(ws);
        return ws;
    };
    Socket.prototype.bindWsHooks = function (ws) {
        var _this = this;
        ws.onMessage(function (evt) {
            var jsonData;
            try {
                jsonData = JSON.parse(evt.data);
                if (_this.isHeartMsg(jsonData)) {
                    _this.heartbeat();
                    return;
                }
                eventBus_1.default.emit(jsonData.sigNum);
            }
            catch (e) {
                console.log(e);
            }
        });
        ws.onError(function () {
            console.log('ws onError');
            _this.reset();
            _this.reconnect();
        });
        ws.onClose(function () {
            console.log('ws onClose');
            _this.reset();
        });
    };
    Socket.prototype.reset = function () {
        this.heartbeatTimer && clearTimeout(this.heartbeatTimer);
        this.timeoutTimer && clearTimeout(this.timeoutTimer);
        Socket._isConnect = false;
        Socket.instance = null;
    };
    Socket.prototype.heartbeat = function () {
        var _this = this;
        this.heartbeatTimer && clearTimeout(this.heartbeatTimer);
        this.timeoutTimer && clearTimeout(this.timeoutTimer);
        this.heartbeatTimer = setTimeout(function () {
            _this.send(heartMsg);
            _this.timeoutTimer = setTimeout(function () {
                _this.socket.close({ reason: '未收到心跳回复消息' });
                _this.reconnect();
                _this.heartbeatTimer && clearTimeout(_this.heartbeatTimer);
                _this.timeoutTimer && clearTimeout(_this.timeoutTimer);
            }, _this.timeout);
        }, this.heartbeatTime);
    };
    Socket.prototype.send = function (obj) {
        this.socket.send({ data: JSON.stringify(obj) });
    };
    Socket.prototype.isHeartMsg = function (jsonData) {
        if (jsonData.sigNum === '1') {
            return true;
        }
        else {
            return false;
        }
    };
    Socket.prototype.reconnect = function () {
        this.reconnectTimes++;
        if (this.reconnectTimes > this.maxReconnect) {
            throw new Error('websocket重连失败， 请排查服务器是否正常运行');
            return;
        }
        this.socket = this.createWs();
    };
    Socket._isConnect = false;
    Socket.instance = null;
    return Socket;
}());
exports.default = Socket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLDREQUEwRDtBQUMxRCxxQ0FBdUM7QUFDdkMsNkNBQXlDO0FBQ3pDLHdEQUFpRDtBQUNqRCw4Q0FBd0M7QUFXeEMsSUFBTSxRQUFRLEdBQWtCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSx3QkFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsaUJBQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxlQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7QUFFbEo7SUF5QkU7UUFwQmlCLGNBQVMsR0FBVyxFQUFFLENBQUE7UUFFL0IsbUJBQWMsR0FBVyxDQUFDLENBQUE7UUFFMUIsaUJBQVksR0FBVyxFQUFFLENBQUE7UUFFekIsa0JBQWEsR0FBVyxLQUFLLENBQUE7UUFFN0IsbUJBQWMsR0FBUSxJQUFJLENBQUE7UUFFMUIsWUFBTyxHQUFXLDJCQUFZLENBQUMsT0FBTyxDQUFBO1FBRXRDLGlCQUFZLEdBQVEsSUFBSSxDQUFBO1FBUzlCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUE7U0FDdkI7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUFZLENBQUMsS0FBSyxDQUFBO1FBRW5DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFkRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0UsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQzFCLENBQUM7OztPQUFBO0lBY0QseUJBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsZUFBUSxFQUFFLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxD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QUFZLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN0RCxDQUFDLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xCLENBQUMsRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBTSxHQUFrQjtRQUd0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFZLFFBQWE7UUFDdkIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQTtTQUNiO0lBQ0gsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQzlDLE9BQU07U0FDUDtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUExSWMsaUJBQVUsR0FBWSxLQUFLLENBQUE7SUFFM0IsZUFBUSxHQUFrQixJQUFJLENBQUE7SUF5SS9DLGFBQUM7Q0FBQSxBQTVJRCxJQTRJQztBQUVELGtCQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbirljZXkvovmqKHlvI8qXHJcbirmlq3nur/ph43ov54qXHJcbirotoXml7bmj5DnpLoqXHJcbirlv4Pot7Pkv53mtLsqXHJcbirplJnor6/lpITnkIYqXHJcbirlj5HluIPorqLpmIUqXHJcbiovXHJcbmltcG9ydCB7IEhUVFBTU0VUVElORyB9IGZyb20gJy4uLy4uL3NldHRpbmdzL2h0dHBzU2V0dGluZydcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9hdXRoL2F1dGgnXHJcbmltcG9ydCB7IGdldFNlcSB9IGZyb20gJy4uL2h0dHAvaHR0cFV0aWwnXHJcbmltcG9ydCB7IEVtaXRFbnVtIH0gZnJvbSAnLi4vZXZlbnQvZXZlbnRFbWl0RW51bSdcclxuaW1wb3J0IGV2ZW50QnVzIGZyb20gJy4uL2V2ZW50L2V2ZW50QnVzJ1xyXG5cclxuaW50ZXJmYWNlIFNvY2tldFNlbmRPcHQge1xyXG4gIHByb3RWZXI6IHN0cmluZ1xyXG4gIG1vZGVOdW06IHN0cmluZ1xyXG4gIHNpZ051bTogRW1pdEVudW1cclxuICBzZXE6IG51bWJlclxyXG4gIGRldmljZUNvZGU6IHN0cmluZ1xyXG4gIGJvZHk6IGFueVxyXG59XHJcblxyXG5jb25zdCBoZWFydE1zZzogU29ja2V0U2VuZE9wdCA9IHsgcHJvdFZlcjogJzEuMCcsIG1vZGVOdW06ICd3ZWInLCBzaWdOdW06IEVtaXRFbnVtLm9uaGVhcnRNc2csIHNlcTogZ2V0U2VxKCksIGRldmljZUNvZGU6IGdldFRva2VuKCksIGJvZHk6IG51bGwgfVxyXG5cclxuY2xhc3MgU29ja2V0IHtcclxuICBwcml2YXRlIHN0YXRpYyBfaXNDb25uZWN0OiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNvY2tldCB8IG51bGwgPSBudWxsXHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVkVXJsOiBzdHJpbmcgPSAnJ1xyXG5cclxuICBwcml2YXRlIHJlY29ubmVjdFRpbWVzOiBudW1iZXIgPSAwXHJcblxyXG4gIHByaXZhdGUgbWF4UmVjb25uZWN0OiBudW1iZXIgPSAxMFxyXG5cclxuICBwcml2YXRlIGhlYXJ0YmVhdFRpbWU6IG51bWJlciA9IDMwMDAwXHJcblxyXG4gIHByaXZhdGUgaGVhcnRiZWF0VGltZXI6IGFueSA9IG51bGxcclxuXHJcbiAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXIgPSBIVFRQU1NFVFRJTkcudGltZW91dFxyXG5cclxuICBwcml2YXRlIHRpbWVvdXRUaW1lcjogYW55ID0gbnVsbFxyXG5cclxuICBwcml2YXRlIHNvY2tldCE6IFdlY2hhdE1pbmlwcm9ncmFtLlNvY2tldFRhc2tcclxuXHJcbiAgZ2V0IGlzQ29ubmVjdCAoKSB7XHJcbiAgICByZXR1cm4gU29ja2V0Ll9pc0Nvbm5lY3RcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIGlmIChTb2NrZXQuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuIFNvY2tldC5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVkVXJsID0gSFRUUFNTRVRUSU5HLndzVXJsXHJcblxyXG4gICAgU29ja2V0Lmluc3RhbmNlID0gdGhpc1xyXG5cclxuICAgIHRoaXMuc29ja2V0ID0gdGhpcy5jcmVhdGVXcygpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVXcyAoKTogV2VjaGF0TWluaXByb2dyYW0uU29ja2V0VGFzayB7XHJcbiAgICBpZiAoIWdldFRva2VuKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2tlbiBlcnJvcicpXHJcbiAgICB9XHJcbiAgICBjb25zdCB3cyA9IHd4LmNvbm5lY3RTb2NrZXQoeyB1cmw6IGAke3RoaXMuY2FjaGVkVXJsfS8/dG9rZW49JHtnZXRUb2tlbigpfWAgfSlcclxuXHJcbiAgICB3cy5vbk9wZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnd3Mgb25PcGVuJylcclxuXHJcbiAgICAgIHRoaXMudGltZW91dFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRUaW1lcilcclxuXHJcbiAgICAgIHRoaXMucmVjb25uZWN0VGltZXMgPSAwXHJcblxyXG4gICAgICBTb2NrZXQuX2lzQ29ubmVjdCA9IHRydWVcclxuXHJcbiAgICAgIHRoaXMuaGVhcnRiZWF0KClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5iaW5kV3NIb29rcyh3cylcclxuXHJcbiAgICByZXR1cm4gd3NcclxuICB9XHJcblxyXG4gIGJpbmRXc0hvb2tzICh3czogV2VjaGF0TWluaXByb2dyYW0uU29ja2V0VGFzaykge1xyXG4gICAgd3Mub25NZXNzYWdlKChldnQ6IGFueSkgPT4ge1xyXG4gICAgICBsZXQganNvbkRhdGEgOiBTb2NrZXRTZW5kT3B0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAganNvbkRhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSBhcyBTb2NrZXRTZW5kT3B0XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbk1lc3NhZ2UnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb25EYXRhKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0hlYXJ0TXNnKGpzb25EYXRhKSkge1xyXG4gICAgICAgICAgdGhpcy5oZWFydGJlYXQoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50QnVzLmVtaXQoanNvbkRhdGEuc2lnTnVtKVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgd3Mub25FcnJvcigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3cyBvbkVycm9yJylcclxuICAgICAgdGhpcy5yZXNldCgpXHJcbiAgICAgIHRoaXMucmVjb25uZWN0KClcclxuICAgIH0pXHJcblxyXG4gICAgd3Mub25DbG9zZSgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3cyBvbkNsb3NlJylcclxuICAgICAgdGhpcy5yZXNldCgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVzZXQgKCkge1xyXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lcilcclxuICAgIHRoaXMudGltZW91dFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRUaW1lcilcclxuICAgIFNvY2tldC5faXNDb25uZWN0ID0gZmFsc2VcclxuICAgIFNvY2tldC5pbnN0YW5jZSA9IG51bGxcclxuICB9XHJcblxyXG4gIGhlYXJ0YmVhdCAoKSB7XHJcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVyKVxyXG4gICAgdGhpcy50aW1lb3V0VGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFRpbWVyKVxyXG5cclxuICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZW5kKGhlYXJ0TXNnKVxyXG5cclxuICAgICAgdGhpcy50aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSh7IHJlYXNvbjogJ+acquaUtuWIsOW/g+i3s+WbnuWkjea2iOaBrycgfSlcclxuXHJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3QoKVxyXG5cclxuICAgICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVyKVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVvdXRUaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0VGltZXIpXHJcbiAgICAgIH0sIHRoaXMudGltZW91dClcclxuICAgIH0sdGhpcy5oZWFydGJlYXRUaW1lKVxyXG4gIH1cclxuXHJcbiAgc2VuZCAob2JqOiBTb2NrZXRTZW5kT3B0KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnc2VuZCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhoZWFydE1zZylcclxuICAgIHRoaXMuc29ja2V0LnNlbmQoeyBkYXRhOiBKU09OLnN0cmluZ2lmeShvYmopfSlcclxuICB9XHJcblxyXG4gIGlzSGVhcnRNc2cgKGpzb25EYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmIChqc29uRGF0YS5zaWdOdW0gPT09ICcxJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNvbm5lY3QgKCkge1xyXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lcysrXHJcbiAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lcyA+IHRoaXMubWF4UmVjb25uZWN0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignd2Vic29ja2V06YeN6L+e5aSx6LSl77yMIOivt+aOkuafpeacjeWKoeWZqOaYr+WQpuato+W4uOi/kOihjCcpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNyZWF0ZVdzKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2tldCJdfQ==