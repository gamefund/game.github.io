$(document).ready(function(){
//===================================================================
//判断语言选择
var psw_rule = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;
var resetUserAccount = null;
var resetUserSign = null;

$.cookie.json = true
var language = $.cookie("language");
if(language=="cn"){

    $("#reset-title-text").html(cn.reset_title_text);
    $("#reset_ltitle_text1").html(cn.reset_ltitle_text1);
    $("#reset_ltitle_text2").html(cn.reset_ltitle_text2);
    $("#reset-btn").html(cn.reset_btn);
}else if(language=="en"){

    $("#reset-title-text").html(en.reset_title_text);
    $("#reset_ltitle_text1").html(en.reset_ltitle_text1);
    $("#reset_ltitle_text2").html(en.reset_ltitle_text2);
    $("#reset-btn").html(en.reset_btn);
}else if(language=="ja"){

    $("#reset-title-text").html(ja.reset_title_text);
    $("#reset_ltitle_text1").html(ja.reset_ltitle_text1);
    $("#reset_ltitle_text2").html(ja.reset_ltitle_text2);
    $("#reset-btn").html(ja.reset_btn);
}else{

    $("#reset-title-text").html(en.reset_title_text);
    $("#reset_ltitle_text1").html(en.rtitle_text2);
    $("#reset_ltitle_text2").html(en.reset_ltitle_text2);
    $("#reset-btn").html(en.reset_btn);
}



$( function () {
	var url = location.href;
	var params = url.substring(url.indexOf("?") + 1, url.length);
	var pArr = params.split("&");
	for (var int = 0; int < pArr.length; int++) {
		var aEle = pArr[int].split("=");
		if (aEle[0] == "method" && aEle[1] == "reset") {
			//showResetView();
		} else if (aEle[0] == "acc") {
			resetUserAccount = aEle[1];
		} else if (aEle[0] == "sign") {
			resetUserSign = aEle[1];
		}
	}
});

//点击重置密码提交按钮
$("#reset-btn").click(function(){
    if(!psw_rule.test($('#password-input').val()))
    {
        if(language=="cn"){
            showTip(cn.inspect);
        }else if(language=="en"){
            showTip(en.inspect);
        }else if(language=="ja"){
            showTip(ja.inspect);
        }else{
            showTip(cn.inspect);
        }
        return
    }
    if($("#password-input").val() != $("#confirm-password-input").val())
    {
        if(language=="cn"){
            showTip(cn.inspect);
        }else if(language=="en"){
            showTip(en.inspect);
        }else if(language=="ja"){
            showTip(ja.inspect);
        }else{
            showTip(en.inspect);
        }
        return
    }

    $.ajax({
        url: c2HubUrl + "/resetPwd.action",
        type: "POST",
        data: {
			"id": "200000000",
            "account": resetUserAccount,
			"sign": resetUserSign,
            "pwd": $.md5($("#password-input").val()),
        },
        beforeSend: function(){
            showModalInterface();
        },
        complete: function(){
            hideModalInterface();
        },
        success: function(data){
            var response = $.parseJSON(data);
            if(response.errorCode == "0")
            {
				//密码重置成功！
                if(language=="cn"){
                    showTip(cn.resetpwd_success);
                }else if(language=="en"){
                    showTip(en.resetpwd_success);
                }else if(language=="ja"){
                    showTip(ja.resetpwd_success);
                }else{
                    showTip(en.resetpwd_success);
                }
                location.href = "login.html";
            }else{
                // showTip("密码重置失败，请重试！")
                if(language=="cn"){
                    showTip(cn.resetpwd_fail);
                }else if(language=="en"){
                    showTip(en.resetpwd_fail);
                }else if(language=="ja"){
                    showTip(ja.resetpwd_fail);
                }else{
                    showTip(en.resetpwd_fail);
                }
            }
        },
        error: function(error){
            console.info(error)
        }
    })
})



$("#password-input").blur(function(){
    $("#password-input-tip").children().remove();
    $("#password-input-tip").removeClass("error correntness");
    if($(this).val() == "")
    {
        $("#password-input-tip").addClass("error");
        $("#password-input").attr("style","");
    }else{
        if(psw_rule.test($(this).val()))
        {
            $("#password-input-tip").addClass("error");
            $("#password-input").attr("style","");
        }else{
            $("#password-input-tip").addClass("error");
            // $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>至少7个字符，包含数字和字母，不含空格</p>')
            if(language=="cn"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.system_req+'</p>')
            }else if(language=="en"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.system_req+'</p>')
            }else if(language=="ja"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.system_req+'</p>')
            }else{
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.system_req+'</p>')
            }
            $("#password-input").attr("style","border-color:red");  
            return;
        }
    }
    if($(this).val().length>50){
        $("#password-input-tip").addClass("error");
            if(language=="cn"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.password_length+'</p>')
            }else if(language=="en"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.password_length+'</p>')
            }else if(language=="ja"){
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.password_length+'</p>')
            }else{
                $("#password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.password_length+'</p>')
            }
            $("#password-input").attr("style","border-color:red");  
        return;
    }

})

$("#confirm-password-input").blur(function(){
    $("#confirm-password-input-tip").children().remove();
    $("#confirm-password-input-tip").removeClass("error correntness");
    if($("#password-input").val() == $(this).val())
    {
        $(this).attr("style","");  
    }else{     
        $(this).attr("style","");
        $("#confirm-password-input-tip").addClass("error");
        // $("#confirm-password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>您必须输入匹配的密码</p>')
        if(language=="cn"){
            $("#confirm-password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_pwd+'</p>')
        }else if(language=="en"){
            $("#confirm-password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_pwd+'</p>')
        }else if(language=="ja"){
            $("#confirm-password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_pwd+'</p>')
        }else{
            $("#confirm-password-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_pwd+'</p>')
        }
        $(this).attr("style","border-color:red");
    }
})

//http://www.c2engine.com/index.html?acc=18860902767@163.com&sign=c4fc11ce22ed1909339d8f39389bc524&method=reset
//file:///D:/xampp/htdocs/kisspre/client/resetpwd.html?acc=18860902767@163.com&sign=c4fc11ce22ed1909339d8f39389bc524&method=reset
//===================================================================
})
