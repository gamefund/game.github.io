var ua_detect = {};
var isAppClient = false;
var githubURL = "https://github.com/kickstartergame";
var facebookURL = "";
var twitterURL = "//twitter.com/kickstartergame";
var telegramURL = "//t.me/KICKSTARTERgame";
var BTCAddress = "BTCBTCBTCBTCBTCBTCBTCBTCBTCBTCBTCBTCBTC";
var ETHAddress = "ETHETHETHETHETHETHETHETHETHETHETHETHETH";
var NEOAddress = "NEONEONEONEONEONEONEONEONEONEONEONEONEO";
var ETCAddress = "ETCETCETCETCETCETCETCETCETCETCETCETCETC";
var CNYAddress = "CNYCNYCNYCNYCNYCNYCNYCNYCNYCNYCNYCNYCNY";

//邀请码有效配置
var effectCount = 1;
var effectDays = 3;

// var url = "http://localhost:8080/whitelist"
var url = "https://game.fund:9280/whitelist"     //whitelist服务端地址

var c2HubUrl = "https://game.fund:9280/c2hub";   //c2hub服务端地址

var game_fund_url = "https://game.fund";        //GAME.FUND官网链接

function detect(ua, platform){
var os = this.os = {}, browser = this.browser = {},
    webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    osx = !!ua.match(/\(Macintosh\; Intel /),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
    win = /Win\d{2}|Windows/.test(platform),
    wp = ua.match(/Windows Phone ([\d.]+)/),
    touchpad = webos && ua.match(/TouchPad/),
    kindle = ua.match(/Kindle\/([\d.]+)/),
    silk = ua.match(/Silk\/([\d._]+)/),
    blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
    bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
    rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
    playbook = ua.match(/PlayBook/),
    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
    firefox = ua.match(/Firefox\/([\d.]+)/),
    firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
    ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
    webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
    safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

// Todo: clean this up with a better OS/browser seperation:
// - discern (more) between multiple browsers on android
// - decide if kindle fire in silk mode is android or not
// - Firefox on Android doesn't specify the Android version
// - possibly devide in os, device and browser hashes

if (browser.webkit = !!webkit) browser.version = webkit[1]

if (android) os.android = true, os.version = android[2]
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
if (wp) os.wp = true, os.version = wp[1]
if (webos) os.webos = true, os.version = webos[2]
if (touchpad) os.touchpad = true
if (blackberry) os.blackberry = true, os.version = blackberry[2]
if (bb10) os.bb10 = true, os.version = bb10[2]
if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
if (playbook) browser.playbook = true
if (kindle) os.kindle = true, os.version = kindle[1]
if (silk) browser.silk = true, browser.version = silk[1]
if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
if (chrome) browser.chrome = true, browser.version = chrome[1]
if (firefox) browser.firefox = true, browser.version = firefox[1]
if (firefoxos) os.firefoxos = true, os.version = firefoxos[1]
if (ie) browser.ie = true, browser.version = ie[1]
if (safari && (osx || os.ios || win)) {
    browser.safari = true
    if (!os.ios) browser.version = safari[1]
}
if (webview) browser.webview = true

os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
    (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
    (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
}

detect.call(ua_detect, navigator.userAgent, navigator.platform)

//==========================================================================
// 为了适配移动端字体大小，改用js动态设置根节点字体size
!(function(win, lib){
    var timer,
    doc = win.document,
    docElem = doc.documentElement,
    vpMeta = doc.querySelector('meta[name="viewport"]'),
    flexMeta = doc.querySelector('meta[name="flexible"]'),
    dpr = 0,
    scale = 0,
    flexible = lib.flexible || (lib.flexible = {});

    // 设置了 viewport meta
    if(vpMeta) {
        // console.warn("将根据已有的meta标签来设置缩放比例");
        var initial = vpMeta.getAttribute("content").match(/initial\-scale=([\d\,]+)/);
        if(initial){
            scale = parseFloat(initial[1]);   // 已设置的initialScale
            dpr = parseInt(1 / scale);        // 设备像素比 devicePixelRatio
        }else if(flexMeta)
        {
            var flexMetaContent = flexMeta.getAttribute("content");
            if(flexMetaContent) {
                var initial = flexMetaContent.match(/initial\-dpr=([\d\.]+)/),
                maximum = flexMetaContent.match(/maximum\-dpr=([\d\.]+)/);
                if(initial){
                    dpr = parseFloat(initial[1]);
                    scale = parseFloat((1/dpr).toFixed(2));
                }
                if(maximum){
                    dpr = parseFloat(maximum[1]);
                    scale = parseFloat((1/dpr).toFixed(2));
                }
            }
        }
        // viewport 或flexible meta 均未设置
        if(!dpr && !scale)
        {
            var u = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi)),
            _dpr = win.devicePixelRatio;
            
            dpr =u ? ((_dpr >= 3 && (!dpr || dpr >= 3)) ? 3 : (_dpr >= 2 && (!dpr || dpr >= 2) ? 2 : 1)) : 1;

            scale = 1 / dpr;
        }
        docElem.setAttribute("data-dpr", dpr);

        //插入viewport mata
        if(!vpMeta)
        {
            vpMeta = doc.createElement("meta");
            vpMeta.setAttribute("name", "viewport");
            vpMeta.setAttribute("content", 
             "initial-scale=" + scale +", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");
             if(docElem.firstElementChild) {
                 docElem.fristElementChild.appendChild(vpMeta);
             } else {
                 var div = doc.createElement("div");
                 div.appendChild(vpMeta);
                 doc.write(div.innerHTML);
             }
        }

        function setFontSize(){
            var winWidth = docElem.getBoundingClientRect().width;
            if(winWidth / dpr > 540) {
                (winWidth = 540 * dpr);
            }
            var baseSize = winWidth / 40;
            docElem.style.fontSize = baseSize + "px";
            flexible.rem = win.rem = baseSize;
        }

        win.addEventListener("resize", function(){
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }, false);

        win.addEventListener("pageshow", function(e){
            if(e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300);
            }
        }, false);

        //设置基准字体
        if("complete" === doc.readyState) {
            doc.body.style.fontSize = 12 * dpr + "px";
        } else {
            doc.addEventListener("DOMContentLoaded", function(){
                doc.body.style.fontSize = 12 * dpr + "px";
            },false);
        }

        setFontSize();

        flexible.dpr = win.dpr = dpr;
        flexible.refreshRem = setFontSize;
        flexible.rem2px = function(d){
            var c = parseFloat(d) * this.rem;
            if("string" == typeof d && d.match(/rem$/)) {
                c += "px";
            }
            return c;
        }
        flexible.px2rem = function(d){
            var c = parseFloat(d) / this.rem;
            if("string" == typeof d && d.match(/px$/)) {
                c += "px";
            }
            return c;
        }
    }


})(window, window.lib || (window.lib = {}))


//==========================================================================


var showTip = function(msg)
{
    var tip = $('<div class="tips" ><p>'+ msg+ '</p></div>').appendTo('body');
    tip.on("animationend",function(){
        this.remove();
    })
}

var IScroll_Options = 
{
    disableMouse: true,
    disableTouch: true,
    click: true,
    taps:true,
}

$(document).ready(function(){
    // $('input[type=text],input[type=password],input[type=number]').on('focus', function(e){
    //     setTimeout(function(){
    //         var scrollTo = ($(e.currentTarget).offset().top - $('#scroller').offset().top) - $('.scroll-container').height() / 2 + 20;
    //         scrollTo = scrollTo < 0 ? 0 : scrollTo;
    //         console.log(scrollTo);
    //         $('.scroll-container').animate({
    //             scrollTop: scrollTo
    //         }, 100);
    //     }, 1000);
    // })

    // $('body').on("touchstart",function(e){
    //     e.preventDefault();
    // });
})

// window.onload = function(){
//     document.body.addEventListener("touchmove",function(event){
//         event.preventDefault();
//     });
// }


$(document).ready(function(){
    if(typeof AndroidJS != "undefined")
        isAppClient = true;
        //AndroidJS.JsInterface1();
})

// function callJs()
// {
//     isAppClient = true;
// }



var showModalInterface = function(){
    $('body').append("<div id='modle-interface'><div class='modle-interface-center'><i class='fa fa-spinner fa-pulse'></i></div></div>");
}

var hideModalInterface = function(){
    $("#modle-interface").remove();
}

var formatDateTime = function(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ("0" + m) : m;
    var d = date.getDate();
    d = d < 10 ? ("0" + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ("0" + minute) : minute;
    return y + "/" + m + "/" + d + " " + h + ":" + minute;
}

var getURLParams = function(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2]); return null ; // 返回值
}


