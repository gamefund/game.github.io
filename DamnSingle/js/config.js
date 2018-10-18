var Config = {
    //界面模块
    pages: ["floatWindow", "header", "homePage", "marketplace", "buy",
        "sire", "detail", "myKitties",
        "sale", "waitAlert", "prompt",
        "signIn", "error",
        "active","attributes","setting",
        "invite"
    ],
    //服务器地址
    address: "https://game.fund:8443/", //服务器地址
    // address: "http://127.0.0.1:8080/",
    //10个小时内出生的宠物会加上new
    limitNew: 10 * 60 * 60 * 1000,
    //区块链注册
    RegisterMethod: 1,
    //其他注册
    // RegisterMethod: 2,
    //区块链注册标记
    BlockChainRegister: 1,
    //其他注册标记
    OtherRegister: 2,
};

var protocolhost = window.location.protocol;
if(protocolhost=="http:"){
    Config.address = "http://game.fund:9280/";
}

var OperateType = {
    REFRESH: 0x0001, //刷新界面
    OPEN_EXCHANGE: 0x0002, //打开交易所
    OPEN_DETAIL: 0x0003, //打开详情界面
    KITTIES: 0x0004, //谁的猫界面
    KITTIES_SIRE: 0X0005, //交配界面
    KITTIES_BUY: 0X0006, //购买界面
    KITTIES_SALE: 0X0007, //销售界面
};

var userImageCount = 5;  //用户头像数量配置

var leftToRightArray = new Array(); //左至右返回页面标记
var rightToLeftArray = new Array(); //右至左返回页面标记

var renToYiRate = 0.0003341278812108589 //人民币转化为以太币的比例

var meiToYiRate = 0.002176875340228634 //美元转化为以太币的比例

var ethRate = 1; //精确度

var HTML_LANGUAGE = "html_language";    //缓存字段

//消息状态码
var msgCode = [
    0, 1, 2, 3, 4, 5, 6
];
