

$(document).ready(function(){
	$.cookie.json = true
	var user = $.cookie("user");
	var language = $.cookie("language");
	if(language=="cn"){
		if(user != null && user != undefined)
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-name">'+ user.nickname +'</div>'+
					'<div class="user-icon"><i class="fa fa-angle-down" id="icon-click-user-list"></i></div>'+
					'<div id="user-list" class="user-list"><ul>'+
					'<li><a id="my_reward" href="javascript:;">'+cn.my_reward+'</a></li>'+
					// '<li><a href="my_order.html">'+cn.my_order+'</a></li>'+
					'<li><a href="my_invitation.html">'+cn.my_invitation+'</a></li>'+
					// '<li><a href="my_income.html">'+cn.my_income+'</a></li>'+
					'<li><a href="javascript:loginOut();">'+cn.loginout+'</a></li>'+
					'</ul></div></div>');
		}else
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-icon"><i class="fa fa-user-circle" id="go-login-page"></i></div>'+
				'</div>');
		}
		$(".language_choose").css("width","60px");
	}else if(language=="en"){
		if(user != null && user != undefined)
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-name">'+ user.nickname +'</div>'+
					'<div class="user-icon"><i class="fa fa-angle-down" id="icon-click-user-list"></i></div>'+
					'<div id="user-list" class="user-list"><ul>'+
					'<li><a id="my_reward" href="javascript:;">'+en.my_reward+'</a></li>'+
					// '<li><a href="my_order.html">'+en.my_order+'</a></li>'+
					'<li><a href="my_invitation.html">'+en.my_invitation+'</a></li>'+
					// '<li><a href="my_income.html">'+en.my_income+'</a></li>'+
					'<li><a href="javascript:loginOut();">'+en.loginout+'</a></li>'+
					'</ul></div></div>');
		}else
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-icon"><i class="fa fa-user-circle" id="go-login-page"></i></div>'+
				'</div>');
		}
		$(".language_choose").css("width","75px");
	}else if(language=="ja"){
		if(user != null && user != undefined)
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-name">'+ user.nickname +'</div>'+
					'<div class="user-icon"><i class="fa fa-angle-down" id="icon-click-user-list"></i></div>'+
					'<div id="user-list" class="user-list"><ul>'+
					'<li><a id="my_reward" href="javascript:;">'+ja.my_reward+'</a></li>'+
					// '<li><a href="my_order.html">'+ja.my_order+'</a></li>'+
					'<li><a href="my_invitation.html">'+ja.my_invitation+'</a></li>'+
					// '<li><a href="my_income.html">'+ja.my_income+'</a></li>'+
					'<li><a href="javascript:loginOut();">'+ja.loginout+'</a></li>'+
					'</ul></div></div>');
		}else
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-icon"><i class="fa fa-user-circle" id="go-login-page"></i></div>'+
				'</div>');
		}
		$(".language_choose").css("width","60px");
	}else{
		if(user != null && user != undefined)
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-name">'+ user.nickname +'</div>'+
					'<div class="user-icon"><i class="fa fa-angle-down" id="icon-click-user-list"></i></div>'+
					'<div id="user-list" class="user-list"><ul>'+
					'<li><a id="my_reward" href="javascript:;">'+en.my_reward+'</a></li>'+
					// '<li><a href="my_order.html">'+en.my_order+'</a></li>'+
					'<li><a href="my_invitation.html">'+en.my_invitation+'</a></li>'+
					// '<li><a href="my_income.html">'+en.my_income+'</a></li>'+
					'<li><a href="javascript:loginOut();">'+en.loginout+'</a></li>'+
					'</ul></div></div>');
		}else
		{
			$("body").append(
				'<div id="header-container">'+
					'<div class="title-container">' +
						'<div class="title-icon"><a href='+game_fund_url+' target="_blank"><img src="images/logo.png"></img></a></div>'+
						// '<div class="title-icon"><img src="images/logo.png"></img></div>'+
						// '<div class="title-icon"><a href='+game_fund_url+'></a></div>'+
						'<select id="language_choose" class="language_choose" style="border:none;" onchange="languageChoose()">'+
							'<option value="en">' + en.language_version + '</option>'+     //英文版
							'<option value="cn">' + cn.language_version + '</option>'+     //中文版
							//'<option value="ja">' + ja.language_version + '</option>'+     //日文版
						'</select>'+
					'</div>'+
					'<div class="user-icon"><i class="fa fa-user-circle" id="go-login-page"></i></div>'+
				'</div>');
		}
		$(".language_choose").css("width","75px");
	}
	$("select#language_choose").val(language);
	// if(user != null && user != undefined)
	// {
	// 	$("body").append(
	// 		'<div id="header-container">'+
	// 			'<div class="title-container">' +
	// 				'<div class="title-icon"><a href="index.html"><img src="images/title_icon.png"></img></a></div>'+
	// 				'<div id="download-app" class="app-download">APP下载</div>'+
	// 			'</div>'+
	// 			'<div class="user-name">'+ user.nickname +'</div>'+
	// 			'<div class="user-icon"><i class="fa fa-angle-down" id="icon-click-user-list"></i></div>'+
	// 			'<div id="user-list" class="user-list"><ul>'+
	// 			'<li><a href="my_order.html">我的订单</a></li>'+
	// 			'<li><a href="my_invitation.html">邀请统计</a></li>'+
	// 			'<li><a href="my_income.html">我的收益</a></li>'+
	// 			'<li><a href="javascript:loginOut();">注销登录</a></li>'+
	// 			'</ul></div></div>');
	// }else
	// {
	// 	$("body").append(
	// 		'<div id="header-container">'+
	// 			'<div class="title-container">' +
	// 				'<div class="title-icon"><a href="index.html"><img src="images/title_icon.png"></img></a></div>'+
	// 				'<div id="download-app" class="app-download">APP下载</div>'+
	// 			'</div>'+
	// 			'<div class="user-icon"><i class="fa fa-user-circle" id="go-login-page"></i></div>'+
	// 		'</div>');
	// }

	//header点击
	$(".user-icon").click(function(){
		console.log(123);
	})

	$("#icon-click-user-list").on("click",function(e){
		var ths = $(this);
		ths.addClass("fa-angle-up").removeClass("fa-angle-down");
		if(!$('#user-list').is(':visible')){
			$('#user-list').show();
			$(document).one("click",function(){
				if($('#user-list').is(':visible')){
					$('#user-list').hide();
					ths.addClass("fa-angle-down").removeClass("fa-angle-up");
				}
			});
		}else{
            if($('#user-list').is(':visible')){
				$('#user-list').hide();
				ths.addClass("fa-angle-down").removeClass("fa-angle-up");
			}
		}
		e.stopPropagation();
	})
	$('#user-list').on("click", function(e){
		e.stopPropagation();
	})
	$('#go-login-page').on("click", function(e){
		location.href = "login.html"
	})
	// $('#download-app').on("click", function(e){
	// 	window.location = "http://html5resource-1251022220.file.myqcloud.com/pub/c2kiss0.2.0.apk"
	// })
});

function loginOut(){
	$.cookie("user",null);
	location.href = "login.html";
}

function languageChoose(){
	var language = $("#language_choose option:selected").val();
	console.log(language);
	$.cookie("language",language);
	window.location.reload();
}

$(function(){
    $.cookie.json = true
    var language = $.cookie("language");
    if(language == "cn"){
        if(!$("body").hasClass("body")){
            $("body").addClass("body");
        }
		$("#language_choose").val("cn");
    }else if(language == "ja"){
		if(!$("body").hasClass("body")){
            $("body").addClass("body");
        }
		$("#language_choose").val("ja");
	}else{
        if(!$("body").hasClass("body-en")){
            $("body").addClass("body-en");
        }
		$("#language_choose").val("en");
    }
})