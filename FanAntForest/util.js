var util = {};

/**
 * 设置按键监听 当脚本执行时候按音量减 退出脚本
 */
util.registEvent = function registEvent() {
    //启用按键监听
    events.observeKey();
    //监听音量下键按下
    events.onKeyDown("volume_down", function (event) {
        toastLog("音量下键被按下了");
        exit();
    });
}


module.exports = util;