$(document).ready(function(){
//===================================================================
// var account_rule = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

$.cookie.json = true
var language = $.cookie("language");

if(language=="cn"){
    $("#ftitle_text").html(cn.ftitle_text);
    $("#email-btn").html(cn.email_btn);
    $("#to-login").html(cn.fto_login);
    $("#forget-password-text").html(cn.forget_password_text);
    $(".title-img-bottom").html(cn.password_find);

}else if(language=="en"){
    $("*").attr("lang","eng");
    $("#ftitle_text").html(en.ftitle_text);
    $("#email-btn").html(en.email_btn);
    $("#to-login").html(en.fto_login);
    $("#forget-password-text").html(en.forget_password_text);
    $(".title-img-bottom").html(en.password_find);

}else if(language=="ja"){
    $("*").attr("lang","jpn");
    $("#ftitle_text").html(ja.ftitle_text);
    $("#email-btn").html(ja.email_btn);
    $("#to-login").html(ja.fto_login);
    $("#forget-password-text").html(ja.forget_password_text);
    $(".title-img-bottom").html(ja.password_find);

}else{
    $("#ftitle_text").html(en.ftitle_text);
    $("#email-btn").html(en.email_btn);
    $("#to-login").html(en.fto_login);
    $("#forget-password-text").html(en.forget_password_text);
    $(".title-img-bottom").html(en.password_find);
}

$("#email-btn").click(function(){
    if(email_rule.test($('#email-input').val()))
     {
         $.ajax({
            url: url + "/general/forgetPsw", 
            type: "POST",
            data: {
                "email": $('#email-input').val(),
			},
            beforeSend: function(){
                showModalInterface();
            },
            complete: function(){
                hideModalInterface();
            },
			success: function (response) {
				switch (response.status) {
                    case 0:
                        // showTip("发送成功，请登录邮箱修改密码");
                        if(language=="cn"){
                            showTip(cn.send_success);
                        }else if(language=="en"){
                            showTip(en.send_success);
                        }else if(language=="ja"){
                            showTip(ja.send_success);
                        }else{
                            showTip(en.send_success);
                        }
                        break;
                    case 1:
                        // showTip("发送失败");
                        if(language=="cn"){
                            showTip(cn.send_fail);
                        }else if(language=="en"){
                            showTip(en.send_fail);
                        }else if(language=="ja"){
                            showTip(ja.send_fail);
                        }else{
                            showTip(en.send_fail);
                        }
                        break;
				}
			},
            error: function(error){
                console.info(error)
            }
         })
     }
})

$('#email-input').blur(function(){
    $("#email-input-tip").children().remove();
    $("#email-input-tip").removeClass("error correntness")
    if(account_rule.test($(this).val()))
    {
        $(this).attr("style","");   
    }else{
        $("#email-input-tip").addClass("error");
        $(".input-tips").css("height", "20px");
        // $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>请输入正确的邮箱地址</p>')
        if(language=="cn"){
            $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_right_email+'</p>')
        }else if(language=="en"){
            $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_right_email+'</p>')
        }else if(language=="ja"){
            $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_right_email+'</p>')
        }else{
            $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_right_email+'</p>')
        }
        $(this).attr("style","border-color:red");
    }
})


//===================================================================
})
