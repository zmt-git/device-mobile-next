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
        enumerable: true,
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
