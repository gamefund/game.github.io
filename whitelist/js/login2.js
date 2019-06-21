$(document).ready(function(){
//===================================================================
//判断语言选择
$.cookie.json = true
var language = $.cookie("language");
if(language=="cn"){
    $("#ltitle_text1").html(cn.ltitle_text1);
    $("#ltitle_text2").html(cn.ltitle_text2);
    $("#login-btn").html(cn.login_btn);
    $("#forget-password").html(cn.forget_password);
    $("#register-account").html(cn.register_account);
    $("#login-title-text").html(cn.account_login);

}else if(language=="en"){
    $("*").attr("lang","eng");
    $("#ltitle_text1").html(en.ltitle_text1);
    $("#ltitle_text2").html(en.ltitle_text2);
    $("#login-btn").html(en.login_btn);
    $("#forget-password").html(en.forget_password);
    $("#register-account").html(en.register_account);
    $("#login-title-text").html(en.account_login);

}else if(language=="ja"){
    $("*").attr("lang","jpn");
    $("#ltitle_text1").html(ja.ltitle_text1);
    $("#ltitle_text2").html(ja.ltitle_text2);
    $("#login-btn").html(ja.login_btn);
    $("#forget-password").html(ja.forget_password);
    $("#register-account").html(ja.register_account);
    $("#login-title-text").html(ja.account_login);

}else{
    $("#ltitle_text1").html(en.ltitle_text1);
    $("#ltitle_text2").html(en.ltitle_text2);
    $("#login-btn").html(en.login_btn);
    $("#forget-password").html(en.forget_password);
    $("#register-account").html(en.register_account);
    $("#login-title-text").html(en.account_login);

}

$("#login-btn").click(function(){
    $.ajax({
        url: url + "/general/login",
        type: "POST",
        data: {
            "account": $("#account-input").val(),
            "password": $("#password-input").val(),
            "code": $.cookie("code"),
        },
        beforeSend: function(){
            showModalInterface();
        },
        complete: function(){
            hideModalInterface();
        },
        success: function(response){
            console.info(response)
            if(response.status == 0)
            {
               $.cookie.json = true
	           $.cookie("user", response.user)
               $.cookie("promotionId", response.promotionId)
               $.cookie("exchangerate", response.exchangerate)
               if(response.user.purchaseQualification == true){
					location.href = "notice.html";
				}else{
					location.href = "get_qualified.html";
				}
            }
            else{
            //   showTip("账号不存在或者密码错误！")
                if(language=="cn"){
                    showTip(cn.login_error);
                }else if(language=="en"){
                    showTip(en.login_error);
                }else if(language=="ja"){
                    showTip(ja.login_error);
                }else{
                    showTip(en.login_error);
                }
            }
        },
        error: function(error){
            console.info(error)
        }
    })
})

$("#account-input").blur(function(){
    $("#account-input-tip").children().remove();
    $("#account-input-tip").removeClass("error correntness")
    if(account_rule.test($(this).val()))
    {
        $(this).attr("style","");   
    }else{
        $("#account-input-tip").addClass("error");
        // $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>请输入正确的邮箱地址</p>')
        if(language=="cn"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_right_email+'</p>')
        }else if(language=="en"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_right_email+'</p>')
        }else if(language=="ja"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_right_email+'</p>')
        }else{
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_right_email+'</p>')
        }
        $(this).attr("style","border-color:red");
        return;
    }
    if($(this).val().length>50){
        $("#account-input-tip").addClass("error");
        if(language=="cn"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_email_length+'</p>')
        }else if(language=="en"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_email_length+'</p>')
        }else if(language=="ja"){
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_email_length+'</p>')
        }else{
            $("#account-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_email_length+'</p>')
        }
        $(this).attr("style","border-color:red");
        return;
    }
})

//===================================================================
})
