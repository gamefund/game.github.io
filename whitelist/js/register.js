$(document).ready(function(){
//===================================================================
// var account_rule = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
var psw_rule = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;

$.cookie.json = true
var language = $.cookie("language");
var invitationCode = getURLParams("code");
if( invitationCode != null ){
    // $.cookie("code", invitationCode);
    $("#code-input").val(invitationCode);
} 

// if($.cookie("code") != null){
//     $("#code-input").val($.cookie("code"));
// }

if(language=="cn"){
    $("#rtitle_text1").html(cn.rtitle_text1);
    $("#rtitle_text2").html(cn.rtitle_text2);
    $("#rtitle_text3").html(cn.rtitle_text3);

    $("#rtitle_text4").html(cn.rtitle_text4);
    $("#detail-btn").html(cn.rtitle_text5);
    $("#invite-password-text").html(cn.invite_password_text);

    $("#register-btn").html(cn.register_btn);
    $("#to-login").html(cn.rto_login);
    $("#gsuccessful_title").html(cn.registerSuccess);
    $("#gsuccessfull_text1").html(cn.joinGAME);
    
    $("#gactivation_successful_confirm").html(cn.continueBtn);

    $("#gtop_half_title").html(cn.gtop_half_title);//邀请码提示框内容===中文
    $("#gtop_half_text1").html(cn.gtop_half_text1);
    $("#gtop_half_text2").html(cn.gtop_half_text2);
    $("#gtop_half_text3").html(cn.gtop_half_text3);
    $("#gbottom_half_title").html(cn.gbottom_half_title);
    $("#bottom-half-text-ul-p1").html(cn.gbottom_half_text_ul_p1);
    $("#bottom-half-text-ul-p2").html(cn.gbottom_half_text_ul_p2);

    $(".title-img-bottom").html(cn.account_register);
    $(".statement-text-span1").html(cn.read_accept);
    $(".statement-text-span2").html(cn.serverList);

    //服务条款
    $(".page-title").html(cn.server_page_title);
    $(".server_page_p1").html(cn.server_page_p1);
    $(".server_page_p2").html(cn.server_page_p2);
    $(".server_page_p3").html(cn.server_page_p3);
    $(".server_page_p4").html(cn.server_page_p4);
    $(".server_page_p5").html(cn.server_page_p5);
    $(".server_page_p6").html(cn.server_page_p6);
    $(".server_page_p7").html(cn.server_page_p7);
    $(".server_page_p8").html(cn.server_page_p8);
    $(".server_page_p9").html(cn.server_page_p9);
    $(".server_page_p10").html(cn.server_page_p10);
    $(".server_page_p11").html(cn.server_page_p11);
    $(".server_page_p12").html(cn.server_page_p12);
    $(".server_page_p13").html(cn.server_page_p13);
    $(".server_page_p14").html(cn.server_page_p14);
    $(".server_page_p15").html(cn.server_page_p15);
    $(".server_page_p16").html(cn.server_page_p16);
    $(".server_page_p17").html(cn.server_page_p17);
    $(".server_page_p18").html(cn.server_page_p18);
    $(".server_page_p19").html(cn.server_page_p19);
    $(".server_page_p20").html(cn.server_page_p20);
    $(".server_page_p21").html(cn.server_page_p21);
    $(".server_page_p22").html(cn.server_page_p22);
    $(".server_page_p23").html(cn.server_page_p23);
    $(".server_page_p24").html(cn.server_page_p24);
    $(".server_page_p25").html(cn.server_page_p25);
    $(".server_page_p26").html(cn.server_page_p26);
    $(".server_page_p27").html(cn.server_page_p27);
    $(".server_page_p28").html(cn.server_page_p28);
    $(".server_page_p29").html(cn.server_page_p29);
    $(".server_page_p30").html(cn.server_page_p30);
    $(".server_page_p31").html(cn.server_page_p31);
    $(".server_page_p32").html(cn.server_page_p32);
    $(".server_page_p33").html(cn.server_page_p33);
    $(".server_page_p34").html(cn.server_page_p34);
    $(".server_page_p35").html(cn.server_page_p35);
    $(".server_page_p36").html(cn.server_page_p36);
    $(".server_page_p37").html(cn.server_page_p37);
    $(".server_page_p38").html(cn.server_page_p38);
    $(".server_page_p39").html(cn.server_page_p39);
    $(".server_page_p40").html(cn.server_page_p40);
    $(".server_page_p41").html(cn.server_page_p41);
    $(".server_page_p42").html(cn.server_page_p42);
    $(".server_page_p43").html(cn.server_page_p43);
    $(".server_page_p44").html(cn.server_page_p44);
    $(".server_page_p45").html(cn.server_page_p45);
    $(".server_page_p46").html(cn.server_page_p46);
    
    $("#down-two span").html(cn.down_two_span);

}else if(language=="en"){
    $("*").attr("lang","eng");
    $("#rtitle_text1").html(en.rtitle_text1);
    $("#rtitle_text2").html(en.rtitle_text2);
    $("#rtitle_text3").html(en.rtitle_text3);

    $("#rtitle_text4").html(en.rtitle_text4);
    $("#detail-btn").html(en.rtitle_text5);
    $("#invite-password-text").html(en.invite_password_text);

    $("#register-btn").html(en.register_btn);
    $("#to-login").html(en.rto_login);
    $("#gsuccessful_title").html(en.registerSuccess);
    $("#gsuccessfull_text1").html(en.joinGAME);
    $("#gactivation_successful_confirm").html(en.continueBtn);
 
    $("#gtop_half_title").html(en.gtop_half_title);//邀请码提示框内容===英文
    $("#gtop_half_text1").html(en.gtop_half_text1);
    $("#gtop_half_text2").html(en.gtop_half_text2);
    $("#gtop_half_text3").html(en.gtop_half_text3);
    $("#gbottom_half_title").html(en.gbottom_half_title);
    $("#bottom-half-text-ul-p1").html(en.gbottom_half_text_ul_p1);
    $("#bottom-half-text-ul-p2").html(en.gbottom_half_text_ul_p2);

    $(".title-img-bottom").html(en.account_register);
    $(".statement-text-span1").html(en.read_accept);
    $(".statement-text-span2").html(en.serverList);

    //服务条款
    $(".page-title").html(en.server_page_title);
    $(".server_page_p1").html(en.server_page_p1);
    $(".server_page_p2").html(en.server_page_p2);
    $(".server_page_p3").html(en.server_page_p3);
    $(".server_page_p4").html(en.server_page_p4);
    $(".server_page_p5").html(en.server_page_p5);
    $(".server_page_p6").html(en.server_page_p6);
    $(".server_page_p7").html(en.server_page_p7);
    $(".server_page_p8").html(en.server_page_p8);
    $(".server_page_p9").html(en.server_page_p9);
    $(".server_page_p10").html(en.server_page_p10);
    $(".server_page_p11").html(en.server_page_p11);
    $(".server_page_p12").html(en.server_page_p12);
    $(".server_page_p13").html(en.server_page_p13);
    $(".server_page_p14").html(en.server_page_p14);
    $(".server_page_p15").html(en.server_page_p15);
    $(".server_page_p16").html(en.server_page_p16);
    $(".server_page_p17").html(en.server_page_p17);
    $(".server_page_p18").html(en.server_page_p18);
    $(".server_page_p19").html(en.server_page_p19);
    $(".server_page_p20").html(en.server_page_p20);
    $(".server_page_p21").html(en.server_page_p21);
    $(".server_page_p22").html(en.server_page_p22);
    $(".server_page_p23").html(en.server_page_p23);
    $(".server_page_p24").html(en.server_page_p24);
    $(".server_page_p25").html(en.server_page_p25);
    $(".server_page_p26").html(en.server_page_p26);
    $(".server_page_p27").html(en.server_page_p27);
    $(".server_page_p28").html(en.server_page_p28);
    $(".server_page_p29").html(en.server_page_p29);
    $(".server_page_p30").html(en.server_page_p30);
    $(".server_page_p31").html(en.server_page_p31);
    $(".server_page_p32").html(en.server_page_p32);
    $(".server_page_p33").html(en.server_page_p33);
    $(".server_page_p34").html(en.server_page_p34);
    $(".server_page_p35").html(en.server_page_p35);
    $(".server_page_p36").html(en.server_page_p36);
    $(".server_page_p37").html(en.server_page_p37);
    $(".server_page_p38").html(en.server_page_p38);
    $(".server_page_p39").html(en.server_page_p39);
    $(".server_page_p40").html(en.server_page_p40);
    $(".server_page_p41").html(en.server_page_p41);
    $(".server_page_p42").html(en.server_page_p42);
    $(".server_page_p43").html(en.server_page_p43);
    $(".server_page_p44").html(en.server_page_p44);
    $(".server_page_p45").html(en.server_page_p45);
    $(".server_page_p46").html(en.server_page_p46);

    $("#down-two span").html(en.down_two_span);

}else if(language=="ja"){
    $("*").attr("lang","jpn");
    $("#rtitle_text1").html(ja.rtitle_text1);
    $("#rtitle_text2").html(ja.rtitle_text2);
    $("#rtitle_text3").html(ja.rtitle_text3);

    $("#rtitle_text4").html(ja.rtitle_text4);
    $("#detail-btn").html(ja.rtitle_text5);
    $("#invite-password-text").html(ja.invite_password_text);

    $("#register-btn").html(ja.register_btn);
    $("#to-login").html(ja.rto_login);
    $("#gsuccessful_title").html(ja.registerSuccess);
    $("#gsuccessfull_text1").html(ja.joinGAME);
    $("#gactivation_successful_confirm").html(ja.continueBtn);

    $("#gtop_half_title").html(ja.gtop_half_title);//邀请码提示框内容===日文
    $("#gtop_half_text1").html(ja.gtop_half_text1);
    $("#gtop_half_text2").html(ja.gtop_half_text2);
    $("#gtop_half_text3").html(ja.gtop_half_text3);
    $("#gbottom_half_title").html(ja.gbottom_half_title);
    $("#bottom-half-text-ul-p1").html(ja.gbottom_half_text_ul_p1);
    $("#bottom-half-text-ul-p2").html(ja.gbottom_half_text_ul_p2);

    $(".title-img-bottom").html(ja.account_register);
    $(".statement-text-span1").html(ja.read_accept);
    $(".statement-text-span2").html(ja.serverList);

    //服务条款
    $(".page-title").html(ja.server_page_title);
    $(".server_page_p1").html(ja.server_page_p1);
    $(".server_page_p2").html(ja.server_page_p2);
    $(".server_page_p3").html(ja.server_page_p3);
    $(".server_page_p4").html(ja.server_page_p4);
    $(".server_page_p5").html(ja.server_page_p5);
    $(".server_page_p6").html(ja.server_page_p6);
    $(".server_page_p7").html(ja.server_page_p7);
    $(".server_page_p8").html(ja.server_page_p8);
    $(".server_page_p9").html(ja.server_page_p9);
    $(".server_page_p10").html(ja.server_page_p10);
    $(".server_page_p11").html(ja.server_page_p11);
    $(".server_page_p12").html(ja.server_page_p12);
    $(".server_page_p13").html(ja.server_page_p13);
    $(".server_page_p14").html(ja.server_page_p14);
    $(".server_page_p15").html(ja.server_page_p15);
    $(".server_page_p16").html(ja.server_page_p16);
    $(".server_page_p17").html(ja.server_page_p17);
    $(".server_page_p18").html(ja.server_page_p18);
    $(".server_page_p19").html(ja.server_page_p19);
    $(".server_page_p20").html(ja.server_page_p20);
    $(".server_page_p21").html(ja.server_page_p21);
    $(".server_page_p22").html(ja.server_page_p22);
    $(".server_page_p23").html(ja.server_page_p23);
    $(".server_page_p24").html(ja.server_page_p24);
    $(".server_page_p25").html(ja.server_page_p25);
    $(".server_page_p26").html(ja.server_page_p26);
    $(".server_page_p27").html(ja.server_page_p27);
    $(".server_page_p28").html(ja.server_page_p28);
    $(".server_page_p29").html(ja.server_page_p29);
    $(".server_page_p30").html(ja.server_page_p30);
    $(".server_page_p31").html(ja.server_page_p31);
    $(".server_page_p32").html(ja.server_page_p32);
    $(".server_page_p33").html(ja.server_page_p33);
    $(".server_page_p34").html(ja.server_page_p34);
    $(".server_page_p35").html(ja.server_page_p35);
    $(".server_page_p36").html(ja.server_page_p36);
    $(".server_page_p37").html(ja.server_page_p37);
    $(".server_page_p38").html(ja.server_page_p38);
    $(".server_page_p39").html(ja.server_page_p39);
    $(".server_page_p40").html(ja.server_page_p40);
    $(".server_page_p41").html(ja.server_page_p41);
    $(".server_page_p42").html(ja.server_page_p42);
    $(".server_page_p43").html(ja.server_page_p43);
    $(".server_page_p44").html(ja.server_page_p44);
    $(".server_page_p45").html(ja.server_page_p45);
    $(".server_page_p46").html(ja.server_page_p46);

    $("#down-two span").html(ja.down_two_span);

}else{
    $("#rtitle_text1").html(en.rtitle_text1);
    $("#rtitle_text2").html(en.rtitle_text2);
    $("#rtitle_text3").html(en.rtitle_text3);

    $("#rtitle_text4").html(en.rtitle_text4);
    $("#detail-btn").html(en.rtitle_text5);
    $("#invite-password-text").html(en.invite_password_text);

    $("#register-btn").html(en.register_btn);
    $("#to-login").html(en.rto_login);
    $("#gsuccessful_title").html(en.registerSuccess);
    $("#gsuccessfull_text1").html(en.joinGAME);
    $("#gactivation_successful_confirm").html(en.continueBtn);

    $("#gtop_half_title").html(en.gtop_half_title);//邀请码提示框内容===中文
    $("#gtop_half_text1").html(en.gtop_half_text1);
    $("#gtop_half_text2").html(en.gtop_half_text2);
    $("#gtop_half_text3").html(en.gtop_half_text3);
    $("#gbottom_half_title").html(en.gbottom_half_title);
    $("#bottom-half-text-ul-p1").html(en.gbottom_half_text_ul_p1);
    $("#bottom-half-text-ul-p2").html(en.gbottom_half_text_ul_p2);

    $(".title-img-bottom").html(en.account_register);
    $(".statement-text-span1").html(en.read_accept);
    $(".statement-text-span2").html(en.serverList);

    //服务条款
    $(".page-title").html(en.server_page_title);
    $(".server_page_p1").html(en.server_page_p1);
    $(".server_page_p2").html(en.server_page_p2);
    $(".server_page_p3").html(en.server_page_p3);
    $(".server_page_p4").html(en.server_page_p4);
    $(".server_page_p5").html(en.server_page_p5);
    $(".server_page_p6").html(en.server_page_p6);
    $(".server_page_p7").html(en.server_page_p7);
    $(".server_page_p8").html(en.server_page_p8);
    $(".server_page_p9").html(en.server_page_p9);
    $(".server_page_p10").html(en.server_page_p10);
    $(".server_page_p11").html(en.server_page_p11);
    $(".server_page_p12").html(en.server_page_p12);
    $(".server_page_p13").html(en.server_page_p13);
    $(".server_page_p14").html(en.server_page_p14);
    $(".server_page_p15").html(en.server_page_p15);
    $(".server_page_p16").html(en.server_page_p16);
    $(".server_page_p17").html(en.server_page_p17);
    $(".server_page_p18").html(en.server_page_p18);
    $(".server_page_p19").html(en.server_page_p19);
    $(".server_page_p20").html(en.server_page_p20);
    $(".server_page_p21").html(en.server_page_p21);
    $(".server_page_p22").html(en.server_page_p22);
    $(".server_page_p23").html(en.server_page_p23);
    $(".server_page_p24").html(en.server_page_p24);
    $(".server_page_p25").html(en.server_page_p25);
    $(".server_page_p26").html(en.server_page_p26);
    $(".server_page_p27").html(en.server_page_p27);
    $(".server_page_p28").html(en.server_page_p28);
    $(".server_page_p29").html(en.server_page_p29);
    $(".server_page_p30").html(en.server_page_p30);
    $(".server_page_p31").html(en.server_page_p31);
    $(".server_page_p32").html(en.server_page_p32);
    $(".server_page_p33").html(en.server_page_p33);
    $(".server_page_p34").html(en.server_page_p34);
    $(".server_page_p35").html(en.server_page_p35);
    $(".server_page_p36").html(en.server_page_p36);
    $(".server_page_p37").html(en.server_page_p37);
    $(".server_page_p38").html(en.server_page_p38);
    $(".server_page_p39").html(en.server_page_p39);
    $(".server_page_p40").html(en.server_page_p40);
    $(".server_page_p41").html(en.server_page_p41);
    $(".server_page_p42").html(en.server_page_p42);
    $(".server_page_p43").html(en.server_page_p43);
    $(".server_page_p44").html(en.server_page_p44);
    $(".server_page_p45").html(en.server_page_p45);
    $(".server_page_p46").html(en.server_page_p46);

    $("#down-two span").html(en.down_two_span);

}

$("#register-btn").click(function(){
    if(!account_rule.test($('#account-input').val()))
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
    if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
        if(language=="cn"){
            showTip(cn.pleaseReadStmt);
        }else if(language=="en"){
            showTip(en.pleaseReadStmt);
        }else if(language=="ja"){
            showTip(ja.pleaseReadStmt);
        }else{
            showTip(en.pleaseReadStmt);
        }
        return;
    }
    $.ajax({
        url: url + "/general/register",
        type: "POST",
        data: {
            "account": $("#account-input").val(),
            "password": $("#password-input").val(),
            "code": $("#code-input").val(),
        },
        beforeSend: function(){
            showModalInterface();
        },
        complete: function(){
            hideModalInterface();
        },
        success: function(response){
            $.cookie("code", null);
            if(response.status == 0)
            {
                $.ajax({
                    url: url + "/general/login",
                    type: "POST",
                    data: {
                        "account": $("#account-input").val(),
                        "password": $("#password-input").val(),
                        // "code": $.cookie("code"),
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
                           $(".activation-successful-container").show();
                        }
                        else{
                        //   showTip("账号不存在或者密码错误！")
                            if(language=="cn"){
                                showTip(cn.number_error);
                            }else if(language=="en"){
                                showTip(en.number_error);
                            }else if(language=="ja"){
                                showTip(ja.number_error);
                            }else{
                                showTip(en.number_error);
                            }
                        }
                    },
                    error: function(error){
                        console.info(error)
                    }
                })
            }else if(response.status == 112){
                // showTip("账户已经存在！")
                if(language=="cn"){
                    showTip(cn.number_exist);
                }else if(language=="en"){
                    showTip(en.number_exist);
                }else if(language=="ja"){
                    showTip(ja.number_exist);
                }else{
                    showTip(en.number_exist);
                }
            }else if(response.status == 121){
                // showTip("无效的邀请码！")
                if(language=="cn"){
                    showTip(cn.un_code);
                }else if(language=="en"){
                    showTip(en.un_code);
                }else if(language=="ja"){
                    showTip(ja.un_code);
                }else{
                    showTip(en.un_code);
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
                    showTip(en.code_used);
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
                    showTip(en.expried_code);
                }
            }else{
                // showTip("注册失败！")
                if(language=="cn"){
                    showTip(cn.redister_fail);
                }else if(language=="en"){
                    showTip(en.redister_fail);
                }else if(language=="ja"){
                    showTip(ja.redister_fail);
                }else{
                    showTip(en.redister_fail);
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

$("#password-input").blur(function(){
    $("#password-input-tip").children().remove();
    $("#password-input-tip").removeClass("error correntness");
    if($(this).val() == "")
    {
        $("#password-input").attr("style","");
    }else{
        if(psw_rule.test($(this).val()))
        {
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

$("#detail-btn").click(function(event){
    event.stopPropagation();//阻止事件冒泡，否则无法弹出
    $(".code-detail-background").attr("style","display");
});

$(".activation-successful-confirm").click(function(){
    $(".activation-successful-container").hide();
    location.href = "buy.html";
});

$("#code-detail-content").click(function(event){
    event.stopPropagation();//阻止事件冒泡，否则点击弹出层内部也会消失
});

$("#detail-close").click(function(){
    $(".code-detail-background").attr("style","display:none;")
});

$(document).click(function(){
    $(".code-detail-background").attr("style","display:none;")
});

$(".statement-content .statement-radio").on("click",function(){
    if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
        $(".statement-content .statement-radio").addClass("statement-checked");
    }else{
        $(".statement-content .statement-radio").removeClass("statement-checked");
    }
});

$(".statement-content .statement-text").on("click",function(){
    $(".statement-container").show();
});

$(".statement-page-content .page-accept-btn").click(function(){
    $(".statement-container").hide();
    if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
        $(".statement-content .statement-radio").addClass("statement-checked");
    }
});

$("#server-close").click(function(){
    $(".statement-container").hide();
});

$(".activation-successful-container").not(".activation-successful-confirm").click(function(){
    $(".activation-successful-container").hide();
    location.href = "already_get_qualified.html";
});


//===================================================================
})
