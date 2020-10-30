var AliPay = {};
var util = require("./util.js");
var height = device.height;
var width = device.width;

// 收取蚂蚁森林能量
AliPay.fun_ant_main = function fun_ant_main() {
    // 检查无障碍权限
    auto.waitFor();
    setScreenMetrics(width, height);
    toastLog("打开支付宝");
    launch("com.eg.android.AlipayGphone");
    sleep(4000);
    goto_ant();
    //注册音量下按下退出脚本监听
    util.registEvent();
    var time = 0
    while (!在蚂蚁森林任务页面()) {
        toastLog("还没进入蚂蚁森林任务页面呢...");
        sleep(2000);
        time += 2;
        if (time > 20) {
            toastLog("未找到蚂蚁森林，程序结束...");
            exit();
        } else if (time > 10) {
            goto_ant();
        }
    }
    toast("进入蚂蚁森林任务页面");
    scrollUp();
    scrollUp();
    scrollUp();
}

// 进入蚂蚁森林主页
function goto_ant() {
    toastLog("进入蚂蚁森林");
    // 支付宝内部功能调用appId
    app.startActivity({
        action: "VIEW",
        data: "alipays://platformapi/startapp?appId=60000002",
    });
}

function 在蚂蚁森林任务页面() {
    if (text("种树").exists()) {
        return true;
    } else {
        return false;
    }
}

module.exports = AliPay;