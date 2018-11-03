window.SOC_CONNECT = "connect";
window.SOC_CDISCONNECT = "disconnect";
window.CONNECT_ERROR = "connect_error";
window.CONNECT_TIMEOUT = "connect_timeout";
// socket 自定义事件消息类型
window.WEB_HELLO = "web_hello";
window.NODE_EVENT = "nodeEvent";
window.WEB_REG = "webReg";
window.WEB_EVENT = "webEvent";
window.GET_SERVER_INFO_RESP = "getServerInfoResp";
window.GET_SERVER_INFO = "getServerInfo";
window.DEPLOY = "deploy";
window.DEPLOY_RESP = "deployResp";
window.STOP = "stop";
window.STOP_RESP = "stopResp";
window.RESTART = "restart";
window.RESTART_RESP = "restartResp";
window.GET_YAML_FILE = "getYamlFile";
window.GET_YAML_FILE_RESP = "getYamlFileResp";
window.GET_REGED_AGENTS = "getRegedAgents";
window.BUILD = "build";
window.GET_REGED_AGENTS_RESP = "getRegedAgentsResp";
window.ERROR_EVENT = "errorEvent";
// socket 注册信息
window.SOCKET_REG_INFO = "web:192.168.0.666";
window.SUCCESS = "success";

// 常用状态
window.SUCCESS = "success";
window.WARN = "warn";
window.WARN = "warn";
window.ERROR = "error";
window.INFO = "info";

window.showMessage = function (type, mesage, title) {
    switch (type) {
        case SUCCESS:
            if (title) {
                toastr.success(mesage, title);
            } else {
                toastr.success(mesage);
            }
            break;
        case WARN:
            if (title) {
                toastr.warning(mesage, title);
            } else {
                toastr.warning(mesage);
            }
            break;
        case ERROR:
            if (title) {
                toastr.error(mesage, title);
            } else {
                toastr.error(mesage);
            }
            break;
        case INFO:
            if (title) {
                toastr.info(mesage, title);
            } else {
                toastr.info(mesage);
            }
            break;
        default:
            if (title) {
                toastr.info(mesage, title);
            } else {
                toastr.info(mesage);
            }
    }
};