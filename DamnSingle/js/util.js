/**
 * 变量是否为空
 * 为空返回 false, 不为空返回true
 */
var isNull = function (data) {
    if (data == null || data == undefined || data == "") {
        return false;
    }
    return true;
};

// 动态加载静态文件
var dynamicLoading = {
    css: function (path) {
        if (!path || path.length == 0) {
            throw new Error("没有找到该css文件:\n" + path);
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.async = false;
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length == 0) {
            throw new Error("没有找到该js文件:\n" + path);
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = false;
        head.appendChild(script);
    }
};

var a = {"jsonrpc":"2.0","id":1,"result":{"txid":"0x4e787ff4cc76f86ebdaadbf8b783273d8ed49f83db4ff1f09f1b49effa589993","size":262,"type":"ContractTransaction","version":0,"attributes":[],"vin":[{"txid":"0x541df8004a0054b524710f3085ffe771cdf3e059b36eea510a7b06966e727141","vout":1}],"vout":[{"n":0,"asset":"0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7","value":"1","address":"AMhhGUremaezGq4VBANfgzrF3KUPNGXGzh"},{"n":1,"asset":"0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7","value":"62","address":"AUTm2DCPUbhTTSkWenJMKnLgXiJvdENuay"}],"sys_fee":"0","net_fee":"0","scripts":[{"invocation":"405642c7c52aaba01146f2198ef8cbc051cea0b44a227f1cfbbb4dcf2980c9cd6ec633c240d862777c17867f4af5974e5ab509f4c5349865e729fda19a94a55cfb","verification":"2102bd8cbf1be6c37453b659c65855ff4672c74bc82389150fad1babe434d4918f3fac"}]}};