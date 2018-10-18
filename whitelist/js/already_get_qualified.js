$(document).ready(function(){
//----------------------------------------------------- 全局变量

	$.cookie.json = true
	var language = $.cookie("language");
	var user = $.cookie("user");
    if(user == null || user == undefined || user.purchaseQualification == false){
		location.href = "login.html";
	}
	if(language=="cn"){
		$("#atop_half_title1").html(cn.atop_half_title1);
		$("#atop_half_title2").html(cn.atop_half_title2);
		$("#atop_half_text1").html(cn.atop_half_text1);
		$("#atop_half_text2").html(cn.atop_half_text2);
		$("#atop_half_text3").html(cn.atop_half_text3);
		$("#abottom_half_title1").html(cn.abottom_half_title1);
		$("#abottom_input_title").html(cn.abottom_input_title);
		$("#confirm-activation").html(cn.aconfirm_activation);
		$("#confirm-ethaddr").html(cn.aconfirm_ethaddr);
		$("#share-tips").html(cn.share_tips);
		$("#invited-name-input").attr("placeholder",cn.invited_name_input);
		$("#code-date").html(cn.code_date);
	}else if(language=="en"){
		$("*").attr("lang","eng");
		$("#atop_half_title1").html(en.atop_half_title1);
		$("#atop_half_title2").html(en.atop_half_title2);
		$("#atop_half_text1").html(en.atop_half_text1);
		$("#atop_half_text2").html(en.atop_half_text2);
		$("#atop_half_text3").html(en.atop_half_text3);
		$("#abottom_half_title1").html(en.abottom_half_title1);
		$("#abottom_input_title").html(en.abottom_input_title);
		$("#confirm-activation").html(en.aconfirm_activation);
		$("#confirm-ethaddr").html(en.aconfirm_ethaddr);
		$("#share-tips").html(en.share_tips);
		$("#invited-name-input").attr("placeholder",en.invited_name_input);
		$("#code-date").html(en.code_date);

		//样式修改
		$("#atop_half_text1").css("letter-spacing",0);
		$("#atop_half_text1").css("line-height","18px");

	}else if(language=="ja"){
		$("*").attr("lang","jpn");
		$("#atop_half_title1").html(ja.atop_half_title1);
		$("#atop_half_title2").html(ja.atop_half_title2);
		$("#atop_half_text1").html(ja.atop_half_text1);
		$("#atop_half_text2").html(ja.atop_half_text2);
		$("#atop_half_text3").html(ja.atop_half_text3);
		$("#abottom_half_title1").html(ja.abottom_half_title1);
		$("#abottom_input_title").html(ja.abottom_input_title);
		$("#confirm-activation").html(ja.aconfirm_activation);
		$("#confirm-ethaddr").html(ja.aconfirm_ethaddr);
		$("#share-tips").html(ja.share_tips);
		$("#invited-name-input").attr("placeholder",ja.invited_name_input);
		$("#code-date").html(ja.code_date);
	}else{
		$("*").attr("lang","eng");
		$("#atop_half_title1").html(en.atop_half_title1);
		$("#atop_half_title2").html(en.atop_half_title2);
		$("#atop_half_text1").html(en.atop_half_text1);
		$("#atop_half_text2").html(en.atop_half_text2);
		$("#atop_half_text3").html(en.atop_half_text3);
		$("#abottom_half_title1").html(en.abottom_half_title1);
		$("#abottom_input_title").html(en.abottom_input_title);
		$("#confirm-activation").html(en.aconfirm_activation);
		$("#confirm-ethaddr").html(en.aconfirm_ethaddr);
		$("#share-tips").html(en.share_tips);
		$("#invited-name-input").attr("placeholder",en.invited_name_input);
		$("#code-date").html(en.code_date);

		//样式修改
		$("#atop_half_text1").css("letter-spacing",0);
	}

//-----------------------------------------------------
  //点击生成邀请码
	$("#confirm-activation").click(function(){
		var get_value = $(".bottom-input").val();
		// if(get_value != '' && $.trim(get_value) != ''){
		$.ajax({
			url: url + "/general/invite",
			type: "POST",
			data: {
				"uid": $.cookie("user").id, 
				"count": effectCount,
				"time": effectDays,
				"wkey":"whitelist",
			},
			beforeSend: function(){
				showModalInterface();
			},
			// complete: function(){
			// 	hideModalInterface();
			// },
			success: function(response){
				if(response.status == 0){
					// draw(get_value, response.invitationCode);
					$.cookie("card_code",response.invitationCode);
					location.href = "invitation_card.html";
				}else{
					// showTip("生成失败！");
					if(language=="cn"){
						showTip(cn.generate_fail);
					}else if(language=="en"){
						showTip(en.generate_fail);
					}else if(language=="ja"){
						showTip(ja.generate_fail);
					}else{
						showTip(en.generate_fail);
					}
				}
			},
			error: function(error){
				// showTip("操作异常，请重新操作！");
				if(language=="cn"){
					showTip(cn.operate_error);
				}else if(language=="en"){
					showTip(en.operate_error);
				}else if(language=="ja"){
					showTip(ja.operate_error);
				}else{
					showTip(en.operate_error);
				}
				console.info(error)
			}
		})
			
		// }else{
		// 	// showTip("邀请人姓名未填写！")
		// 	if(language=="cn"){
		// 		showTip(cn.not_fill_name);
		// 	}else if(language=="en"){
		// 		showTip(en.not_fill_name);
		// 	}else if(language=="ja"){
		// 		showTip(ja.not_fill_name);
		// 	}else{
		// 		showTip(en.not_fill_name);
		// 	}
		// }
	})
	$("#confirm-ethaddr").click(function(){
		location.href = "addr.html";
	})

});
