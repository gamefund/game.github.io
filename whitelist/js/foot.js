$(document).ready(function(){

	$.cookie.json = true
	var language = $.cookie("language");
	if(language=="cn"){
		$("body").append(
		'<div id="footer-container">'+
			'<a id="getQualified" href="#" class="item item1">'+cn.getInvitationBtn+'</a>'+
			'<a id="buy-btn" href="#" class="item item2">'+cn.joinWhitelist+'</a>'+
		'</div>');
	}else if(language=="en"){
		$("body").append(
		'<div id="footer-container">'+
			'<a id="getQualified" href="#" class="item item1">'+en.getInvitationBtn+'</a>'+
			'<a id="buy-btn" href="#" class="item item2">'+en.joinWhitelist+'</a>'+
		'</div>');
	}else if(language=="ja"){
		$("body").append(
		'<div id="footer-container">'+
			'<a id="getQualified" href="#" class="item item1">'+ja.getInvitationBtn+'</a>'+
			'<a id="buy-btn" href="#" class="item item2">'+ja.joinWhitelist+'</a>'+
		'</div>');
	}else{
		$("body").append(
		'<div id="footer-container">'+
			'<a id="getQualified" href="#" class="item item1">'+en.getInvitationBtn+'</a>'+
			'<a id="buy-btn" href="#" class="item item2">'+en.joinWhitelist+'</a>'+
		'</div>');
	}

	// $("body").append(
	// 	'<div id="footer-container">'+
	// 		'<a id="index-btn" href="index.html" class="item item1">项目介绍</a>'+
	// 		'<a id="getQualified" href="#" class="item item2">获取资格</a>'+
	// 		'<a id="buy-btn" href="#" class="item item3">购买</a>'+
	// 	'</div>');
	

	var setNav = function(id){
		$(".item").each(function(){
			if($(this)[0].id == id)
				$(this).addClass("item-click-color").siblings().removeClass("item-click-color");
		})
	}
	if(location.href.indexOf("index") != -1){
		setNav("index-btn")
	}else if(location.href.indexOf("login") != -1){
		setNav("index-btn")
	}else if(location.href.indexOf("register") != -1){
		setNav("getQualified")
	}else if(location.href.indexOf("psw") != -1){
		setNav("index-btn")
	}else if(location.href.indexOf("qualified") != -1){
		setNav("getQualified")
	}else if(location.href.indexOf("buy") != -1){
		setNav("buy-btn")
	}

	$("#buy-btn").click(function(){
		var user = $.cookie("user")
		if(user != null && user != undefined)
		{
			if(user.purchaseQualification == true)
			{
				location.href = "buy.html"
			}else
			{
				// showTip("请先获取资格!")
				if(language=="cn"){
					showTip(cn.please_gqualified);
				}else if(language=="en"){
					showTip(en.please_gqualified);
				}else if(language=="ja"){
					showTip(ja.please_gqualified);
				}else{
					showTip(en.please_gqualified);
				}
			}
		}else{
			location.href = "registered.html"
		}
	})

	$("#getQualified").click(function(){

		var user = $.cookie("user")
		if(user != null && user != undefined)
		{
			if(user.purchaseQualification == true)
			{
				location.href = "already_get_qualified.html"
			}else
			{
				location.href = "get_qualified.html"
			}
		}else{
			location.href = "registered.html"
		}

	})
});