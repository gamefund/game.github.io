$(function(){
	//新的index
	var pcText = '<div class="jumptopage-tip">' +
					'<div class="activation-successful-content">' +
						'<div class="successful-title" id="bsuccessful_title">当前页面适合在手机上浏览!</div>' +
						'<!--<div class="successfull-text" id="bsuccessfull_text">当前页面适合在手机上浏览</div>-->' +
						'<a class="activation-successful-confirm" id="bactivation_successful_confirm">确认</a>' +
					'</div>' +
				'</div>';	

	$("#wrapper #particles-js").hide();
	

	var language = localStorage.getItem("language");
	if(language==undefined || language== null){
		$.cookie.json = true
		$.cookie("language","en");
	}else{
		$.cookie.json = true
		$.cookie("language",language);
	}
	$(function(){
		$.cookie.json = true
		var language = $.cookie("language");
		if(language == "cn" || language == "ja"){
			if(!$("body").hasClass("body")){
				$("body").addClass("body");
			}
		}else{
			if(!$("body").hasClass("body-en")){
				$("body").addClass("body-en");
			}
		}
	})
	

	    var invitationCode = getURLParams("code");
		var resetpwdHtml = getURLParams("method");		
	
		if(ua_detect.os.phone){//手机则直接跳转======$(window).width() < 500  //平板ua_detect.os.tablet
			if(invitationCode!=null && invitationCode!=""){
				location.href = "registered.html?code="+invitationCode;
			}else if(resetpwdHtml!=null && resetpwdHtml!="" && resetpwdHtml == "reset"){
				//将路径参数带入重置密码界面resetpwd.html?acc=18860902767@163.com&sign=c4fc11ce22ed1909339d8f39389bc524&method=reset
				var acc = getURLParams("acc");
				var sign = getURLParams("sign");
				location.href = "resetpwd.html?acc=" + acc + "&sign=" + sign + "&method" + resetpwdHtml;
			}else{
				var user = $.cookie("user");
				if(user != null && user != undefined)
				{
					if(user.purchaseQualification == true)
					{
						location.href= "already_get_qualified2.html";
					}else
					{
						location.href = "get_qualified.html";
					}
				}else{
					location.href = "registered.html";
				}
			}
		}else{
			$("#wrapper").append(pcText);
			if(language == "cn"){
				$("#wrapper .jumptopage-tip #bsuccessful_title").html("当前页面适合在手机上浏览！");
				$("#wrapper .jumptopage-tip #bactivation_successful_confirm").html("确认");
			}else if(language == "en"){
				$("#wrapper .jumptopage-tip #bsuccessful_title").html("The current page is suitable for browsing on the phone!");
				$("#wrapper .jumptopage-tip #bactivation_successful_confirm").html("Ok");
			}else if(language == "ja"){
				$("#wrapper .jumptopage-tip #bsuccessful_title").html("現在のページは携帯で閲覧するのに適します！");
				$("#wrapper .jumptopage-tip #bactivation_successful_confirm").html("確認");
			}else{
				$("#wrapper .jumptopage-tip #bsuccessful_title").html("The current page is suitable for browsing on the phone!");
				$("#wrapper .jumptopage-tip #bactivation_successful_confirm").html("Ok");
			}
		}

		$("#bactivation_successful_confirm").click(function(){
			$("#wrapper #particles-js").show();
			$("#wrapper").addClass("mobile-selected");
			var srcHref = null;	
			if(invitationCode!=null && invitationCode!=""){
				srcHref = "registered.html?code="+invitationCode;
			}else if(resetpwdHtml!=null && resetpwdHtml!="" && resetpwdHtml == "reset"){
				var acc = getURLParams("acc");
				var sign = getURLParams("sign");
				srcHref = "resetpwd.html?acc=" + acc + "&sign=" + sign + "&method" + resetpwdHtml;
			}else{
				var user = $.cookie("user");
				if(user != null && user != undefined)
				{
					if(user.purchaseQualification == true)
					{
						srcHref= "already_get_qualified.html";
					}else
					{
						srcHref = "get_qualified.html";
					}
				}else{
					srcHref = "registered.html";
				}
			}
		    var text =  
					'<div class="container" style="position: absolute; left: 50%; top: 50%; margin-top: -334px; margin-left: -188px; display: flex;">' +											
						'<iframe src=' + srcHref + ' frameborder="0" style="width: 375px; height: 667px; margin: auto; border: 1px solid #c1c1c1; z-index: 10;">' +
						'</iframe>' +
					'</div>';

			$("#wrapper .jumptopage-tip").remove();
			$("#wrapper").append(text);
		})
});