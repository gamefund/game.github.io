$(document).ready(function(){

	$.cookie.json = true
	var language = $.cookie("language");

	if(language=="cn"){
		$("#gtop_half_title").html(cn.gtop_half_title);
		$("#gtop_half_text1").html(cn.gtop_half_text1);
		$("#gtop_half_text2").html(cn.gtop_half_text2);
		$("#gtop_half_text3").html(cn.gtop_half_text3);
		$("#gbottom_half_title").html(cn.gbottom_half_title);
		$("#bottom-half-text-ul-p1").html(cn.gbottom_half_text_ul_p1);
		$("#bottom-half-text-ul-p2").html(cn.gbottom_half_text_ul_p2);
		$("#gbottom_input_title").html(cn.gbottom_input_title);
		$("#confirm-activation").html(cn.gconfirm_activation);
		$("#gsuccessful_title").html(cn.gsuccessful_title);
		$("#gsuccessfull_text1").html(cn.gsuccessfull_text1);
		$("#gsuccessfull_text2").html(cn.gsuccessfull_text2);
		$("#gactivation_successful_confirm").html(cn.gactivation_successful_confirm);
		$("#invite-code-input").attr("placeholder",cn.gbottom_input);
	}else if(language=="en"){
		$("*").attr("lang","eng");
		$("#gtop_half_title").html(en.gtop_half_title);
		$("#gtop_half_text1").html(en.gtop_half_text1);
		$("#gtop_half_text2").html(en.gtop_half_text2);
		$("#gtop_half_text3").html(en.gtop_half_text3);
		$("#gbottom_half_title").html(en.gbottom_half_title);
		$("#bottom-half-text-ul-p1").html(en.gbottom_half_text_ul_p1);
		$("#bottom-half-text-ul-p2").html(en.gbottom_half_text_ul_p2);
		$("#gbottom_input_title").html(en.gbottom_input_title);
		$("#confirm-activation").html(en.gconfirm_activation);
		$("#gsuccessful_title").html(en.gsuccessful_title);
		$("#gsuccessfull_text1").html(en.gsuccessfull_text1);
		$("#gsuccessfull_text2").html(en.gsuccessfull_text2);
		$("#gactivation_successful_confirm").html(en.gactivation_successful_confirm);
		$("#invite-code-input").attr("placeholder",en.gbottom_input);
	}else if(language=="ja"){
		$("*").attr("lang","ja");
		$("#gtop_half_title").html(ja.gtop_half_title);
		$("#gtop_half_text1").html(ja.gtop_half_text1);
		$("#gtop_half_text2").html(ja.gtop_half_text2);
		$("#gtop_half_text3").html(ja.gtop_half_text3);
		$("#gbottom_half_title").html(ja.gbottom_half_title);
		$("#bottom-half-text-ul-p1").html(ja.gbottom_half_text_ul_p1);
		$("#bottom-half-text-ul-p2").html(ja.gbottom_half_text_ul_p2);
		$("#gbottom_input_title").html(ja.gbottom_input_title);
		$("#confirm-activation").html(ja.gconfirm_activation);
		$("#gsuccessful_title").html(ja.gsuccessful_title);
		$("#gsuccessfull_text1").html(ja.gsuccessfull_text1);
		$("#gsuccessfull_text2").html(ja.gsuccessfull_text2);
		$("#gactivation_successful_confirm").html(ja.gactivation_successful_confirm);
		$("#invite-code-input").attr("placeholder",ja.gbottom_input);
	}else{
		$("#gtop_half_title").html(cn.gtop_half_title);
		$("#gtop_half_text1").html(cn.gtop_half_text1);
		$("#gtop_half_text2").html(cn.gtop_half_text2);
		$("#gtop_half_text3").html(cn.gtop_half_text3);
		$("#gbottom_half_title").html(cn.gbottom_half_title);
		$("#bottom-half-text-ul-p1").html(cn.gbottom_half_text_ul_p1);
		$("#bottom-half-text-ul-p2").html(cn.gbottom_half_text_ul_p2);
		$("#gbottom_input_title").html(cn.gbottom_input_title);
		$("#confirm-activation").html(cn.gconfirm_activation);
		$("#gsuccessful_title").html(cn.gsuccessful_title);
		$("#gsuccessfull_text1").html(cn.gsuccessfull_text1);
		$("#gsuccessfull_text2").html(cn.gsuccessfull_text2);
		$("#gactivation_successful_confirm").html(cn.gactivation_successful_confirm);
		$("#invite-code-input").attr("placeholder",cn.gbottom_input);
	}

	$("#invite-code-input").blur(function(){	
		$("#invite-code-input-tip").children().remove();
    	$("#invite-code-input-tip").removeClass("error correntness")
		if($(this).val() == "")
		{
			$("#invite-code-input-tip").addClass("error");
            // $("#invite-code-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>请输入邀请码</p>')
			if(language=="cn"){
				$("#invite-code-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_code+'</p>');
			}else if(language=="en"){
				$("#invite-code-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_code+'</p>');
			}else if(language=="ja"){
				$("#invite-code-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_code+'</p>');
			}else{
				$("#invite-code-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_code+'</p>');
			}
            $(this).attr("style","border-color:red");
            emial_right = false;
		}else{
			$(this).attr("style","");   
		}
	})

	$("#confirm-activation").click(function(){
		var get_value = $(".bottom-input").val();
		if(get_value != '' && $.trim(get_value) != ''){
			$.ajax({
				url: url + "/general/invited",
				type: "POST",
				data: {
					"uid": $.cookie("user").id,
					"code": get_value,
				},
				beforeSend: function(){
					showModalInterface();
				},
				complete: function(){
					hideModalInterface();
				},
				success: function(response){
					if(response.status == 0)
					{
						$.cookie("user", response.user)
						$(".activation-successful-container").show();
					}else if(response.status == 121){
						// showTip("无效的邀请码！")
						if(language=="cn"){
							showTip(cn.un_code);
						}else if(language=="en"){
							showTip(en.un_code);
						}else if(language=="ja"){
							showTip(ja.un_code);
						}else{
							showTip(cn.un_code);
						}
					}else if(response.status == 122){
						// showTip("邀请码已被使用！")
						if(language=="cn"){
							showTip(cn.code_used);
						}else if(language=="en"){
							showTip(en.code_used);
						}else if(language=="ja"){
							showTip(ja.code_used);
						}else{
							showTip(cn.code_used);
						}
					}else if(response.status == 123){
						// showTip("邀请码已过期！")
						if(language=="cn"){
							showTip(cn.expried_code);
						}else if(language=="en"){
							showTip(en.expried_code);
						}else if(language=="ja"){
							showTip(ja.expried_code);
						}else{
							showTip(cn.expried_code);
						}
					}else if(response.status == 124 || response.status == 125){
						// showTip("用户已经被邀请，无法重复绑定！")
						if(language=="cn"){
							showTip(cn.user_invited);
						}else if(language=="en"){
							showTip(en.user_invited);
						}else if(language=="ja"){
							showTip(ja.user_invited);
						}else{
							showTip(cn.user_invited);
						}
					}
				},
				error: function(error){
					// showTip("操作异常，请重新操作！")
					if(language=="cn"){
						showTip(cn.operate_error);
					}else if(language=="en"){
						showTip(en.operate_error);
					}else if(language=="ja"){
						showTip(ja.operate_error);
					}else{
						showTip(cn.operate_error);
					}
					console.info(error)
				}
			})
		}else{
			$(".bottom-input").css("border","1px solid red");
			$(".warning-text").show();
		}
		// if(get_value != '' && $.trim(get_value) != ''){
		// 	$("#activation-successful-container").show();
		// }else{
		// 	$(".bottom-input").css("border","1px solid red");
		// 	$(".warning-text").show();
		// }
	});

	$(".activation-successful-confirm").click(function(){
		$(".activation-successful-container").hide();
		location.href = "buy.html";
	});



// END
});