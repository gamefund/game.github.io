$(function(){

    $.cookie.json = true
    var language = $.cookie("language");
    var invite_code = $.cookie("card_code");
	var user = $.cookie("user");
    if(user == null || user == undefined || user.purchaseQualification == false){
		location.href = "login.html";
	}
    if(invite_code == null || invite_code == undefined){
		location.href = "already_get_qualified.html";
	}
    draw(invite_code);

    if(language=="cn"){
		$("#share-tips").html(cn.share_tips);

	}else if(language=="en"){
		$("*").attr("lang","eng");
		$("#share-tips").html(en.share_tips);

	}else if(language=="ja"){
		$("*").attr("lang","jpn");
		$("#share-tips").html(ja.share_tips);
		
	}else{
		$("*").attr("lang","eng");
		$("#share-tips").html(en.share_tips);

	}

    $("#imgBox").on("click",function(){
        $(this).css("display","none");
        window.history.go(-1);
    })
});

// var qrCodeText = "http://192.168.1.131/kisspre/client/index.html?code="; 
var qrCodeText = "https://game.fund/whitelist/index.html?code="; 

var deviceWidth = window.screen.width;
var deviceHeight = window.screen.width * 1.8;
var dpr = window.devicePixelRatio || 1;
var canvas = $("<canvas id='qrcode-canvas'></canvas>");
canvas.attr("width",deviceWidth);
canvas.attr("height",deviceHeight);
canvas.css("position", "absolute");
canvas.css("left", "0");
canvas.css("top", "0");
canvas.css("z-index", "10000");
canvas.css("display", "none");
var ctx = canvas[0].getContext("2d");
var bspr = ctx.webkitBackingStorePixelRatio ||
ctx.mozBackingStorePixelRatio ||
ctx.msBackingStorePixelRatio ||
ctx.oBackingStorePixelRatio ||
ctx.BackingStorePixelRatio || 1;
var ratio = dpr / bspr;	
canvas.css("width", canvas.attr("width"));
canvas.css("height", canvas.attr("height"));
canvas.attr("width", canvas.attr("width") * ratio);
canvas.attr("height", canvas.attr("height") * ratio);

var qrCodeOptions = {
    render: 'canvas',
    width: 0.235 * deviceWidth * ratio,
    height: 0.235 * deviceWidth * ratio,
    text: "",
    correctLevel: 3,
    minVersion: 1,
}
var qrCodeData = null;

var qrCodeCreater = function()
	{
		var imgBuffer = $("<div></div>");
		imgBuffer.qrcode(qrCodeOptions);
		var ctx = imgBuffer.children("canvas")[0].getContext("2d");
		qrCodeData = ctx.getImageData(0,0,imgBuffer.children("canvas")[0].width, imgBuffer.children("canvas")[0].height);
	}

var draw = function(inviteCode){
    qrCodeOptions.text = qrCodeText + inviteCode;
    qrCodeCreater();
    var imgBuffer = $("<img></img>");
    imgBuffer.attr("src", "images/bg-gf.png");
    // $("body").append(imgBuffer);
    imgBuffer.load(function(){
        ctx.clearRect(0,0,canvas.attr("width"), canvas.attr("height"));	
        //普通颜色
        ctx.fillStyle = "#ffffff";
        ctx.textAlign="center";
        ctx.drawImage(imgBuffer[0], 0, 0, canvas.attr("width"), canvas.attr("height"));
        ctx.putImageData(qrCodeData, canvas.attr("width") * 0.3835, canvas.attr("height") * 0.6445);
        
        // 绘制被邀请人
        // ctx.font= deviceWidth * ratio / 10 + "px 微软雅黑";
        // ctx.fillText('yyy', 0.5 * deviceWidth * ratio , 0.46 * deviceHeight * ratio);

        //绘制邀请标题
        var language = $.cookie("language");
        var in_text1 = "";
        var in_text2 = "";
        var in_text3 = "";
        var in_text4 = "";
        if(language=="cn"){
            in_text1 = cn.invitation_page_title1;
            in_text2 = cn.invitation_page_title2;
            in_text3 = cn.invitation_page_code;
            in_text4 = cn.invitation_page_codetip;
        }else if(language=="en"){
            in_text1 = en.invitation_page_title1;
            in_text2 = en.invitation_page_title2;
            in_text3 = en.invitation_page_code;
            in_text4 = en.invitation_page_codetip;
        }else if(language=="ja"){
            in_text1 = ja.invitation_page_title1;
            in_text2 = ja.invitation_page_title2;
            in_text3 = ja.invitation_page_code;
            in_text4 = ja.invitation_page_codetip;
        }else{
            in_text1 = en.invitation_page_title1;
            in_text2 = en.invitation_page_title2;
            in_text3 = en.invitation_page_code;
            in_text4 = en.invitation_page_codetip;
        }


        //填充邀请函内容
        if(language=="cn"){
            ctx.font= deviceWidth * ratio / 20 + "px 微软雅黑";
            ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
            ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.44 * deviceHeight * ratio);

            // 绘制邀请码
            ctx.font= deviceWidth * ratio / 28 +"px 微软雅黑";
            ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 22 +"px 微软雅黑";
            ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 40 + "px 微软雅黑";
            ctx.fillStyle = "rgb(164, 151, 151)";
            ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);
            ctx.fillStyle = "rgb(184, 181, 181)";
            ctx.fillText(cn.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
            ctx.fillStyle = "rgb(114, 101, 101)";
            ctx.fillText(cn.code_date, 0.5 * deviceWidth * ratio , 0.605 * deviceHeight * ratio);
        }else if(language=="ja"){
            ctx.font= deviceWidth * ratio / 25 + "px 微软雅黑";
            ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
            ctx.fillText(ja.invitation_page_title3,0.5 * deviceWidth * ratio , 0.43 * deviceHeight * ratio);
            ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.47 * deviceHeight * ratio);

            // 绘制邀请码
            ctx.font= deviceWidth * ratio / 30 +"px 微软雅黑";
            ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 22 +"px 微软雅黑";
            ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 38 + "px 微软雅黑";
            ctx.fillStyle = "rgb(164, 151, 151)";
            ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.88 * deviceHeight * ratio);
            ctx.fillText(ja.invitation_page_codetip1,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);
            ctx.fillStyle = "rgb(184, 181, 181)";
            ctx.fillText(ja.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
            ctx.fillStyle = "rgb(114, 101, 101)";	
            ctx.fillText(ja.code_date, 0.5 * deviceWidth * ratio , 0.6075 * deviceHeight * ratio);
        }else{
            ctx.font= deviceWidth * ratio / 25 + "px Arial";
            ctx.fillText(in_text1 ,0.5 * deviceWidth * ratio , 0.35 * deviceHeight * ratio);
            ctx.fillText(en.invitation_page_title3,0.5 * deviceWidth * ratio , 0.39 * deviceHeight * ratio);
            ctx.fillText(in_text2,0.5 * deviceWidth * ratio , 0.43 * deviceHeight * ratio);
            ctx.fillText(en.invitation_page_title4,0.5 * deviceWidth * ratio , 0.47 * deviceHeight * ratio);

            // 绘制邀请码
            ctx.font= deviceWidth * ratio / 30 +"px Arial";
            ctx.fillText(in_text3, 0.5 * deviceWidth * ratio , 0.538 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 22 +"px Arial";
            ctx.fillText(inviteCode, 0.5 * deviceWidth * ratio , 0.574 * deviceHeight * ratio);

            ctx.font= deviceWidth * ratio / 38 + "px Arial";
            ctx.fillStyle = "rgb(164, 151, 151)";
            ctx.fillText(in_text4,0.5 * deviceWidth * ratio,0.88 * deviceHeight * ratio);
            ctx.fillText(en.invitation_page_codetip1,0.5 * deviceWidth * ratio,0.896 * deviceHeight * ratio);	
            ctx.font= deviceWidth * ratio / 37 +"px Arial";
            ctx.fillStyle = "rgb(184, 181, 181)";
            ctx.fillText(en.press_code_tip, 0.5 * deviceWidth * ratio , 0.802 * deviceHeight * ratio);
            ctx.fillStyle = "rgb(114, 101, 101)";
            ctx.fillText(en.code_date, 0.5 * deviceWidth * ratio , 0.607 * deviceHeight * ratio);		
        }
        
        hideModalInterface();
        $("#imgBox").children("img").attr("src", canvas[0].toDataURL());
        $("#imgBox").children("img").load(function(){
            $("#imgBox").css("display","block");
        })
    });
}
