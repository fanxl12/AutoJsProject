"ui";

var module_main_fun = require("./main_fun.js");

ui.layout(
    <vertical>
        <button marginTop="30px" id="btn-get-energy" text="支付宝蚂蚁森林收取能量" textColor="red" />
    </vertical>
)
toastLog('欢迎使用支付宝能量小工具')
ui.btn-get-energy.click(() => {
    threads.start(function () {
        let info = "请检查是否打开无障碍服务，\n" +
            "  没有的话脚本将无法执行。";
        var result = dialogs.confirm(info);
        if (result) {
            var res = module_main_fun.main_method("蚂蚁森林");
            res.blockedGet();
            toastLog("能量收取完毕");
        } else {
            toastLog("请打开后重试!");
        }
    })
})