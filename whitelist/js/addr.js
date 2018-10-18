$(document).ready(function(){
    var emial_right = false
    var wallet_right = false
    var num_right = false
    var currencyType;
    $.cookie.json = true
    var user = $.cookie("user");
    if(user == null || user == undefined || user.purchaseQualification == false)
        location.href = "login.html"
    
    $("#email-input").val(user.nickname);
    // $("#confirm-email-input").val(user.nickname);
    $.cookie.json = true
	var language = $.cookie("language");
    if(language=="cn"){
        $("#buy-tip-title1_1").html(cn.buy_tip_title1_1);
        $("#buy-tip-title1_2").html(cn.buy_tip_title1_2);
        $("#buy-tip-title2").html(cn.importent_tip);
        $("#buy-top-text1").html(cn.buy_top_text1);
        $("#pre-ico-eth-addr").html(cn.pre_ico_eth_addr_text1);
        $("#buy_tips_1").html(cn.buy_tips_1);
        $("#buy_tips_2").html(cn.buy_tips_2);
        $("#buy_tips_text1").html(cn.buy_tips_text1);
        $("#buy_tips_text2").html(cn.buy_tips_text2);
        $("#buy_tips_text3").html(cn.buy_tips_text3);
        $("#email_item_title1").html(cn.email_item_title1);
        $("#email_item_title2").html(cn.email_item_title2);
        $("#currency_item_title").html(cn.currency_item_title);
        $("#wallet_item_title").html(cn.wallet_item_title);
        $("#num_item_title").html(cn.num_item_title);
        $("#need_pay_num").html(cn.need_pay_num);
        $("#buy-confirm-btn").html(cn.buy_confirm_btn);
        $("#bsuccessful_title").html(cn.bsuccessful_title);
        $("#bsuccessfull_text").html(cn.bsuccessfull_text);
        $("#bactivation_successful_confirm").html(cn.bactivation_successful_confirm);

        $(".must-fill-tip").html(cn.must_fill);
        $(".email-notice").html(cn.email_notice);
        $("#telegram-name").html(cn.telegram_name);
        $("#sale-count-title").html(cn.sale_count_title);
        $("#btc_address").html(cn.btc_address);
        $("#eth_address").html(cn.eth_address);
        $("#neo_address").html(cn.neo_address);
        $("#country_title1").html(cn.r_country);
        $(".statement-text-span1").html(cn.read_accept);
        $(".statement-text-span2").html(cn.statementList);

        $(".page-title").html(cn.statement);
        $(".statement-p1").html(cn.statement_p1);
        $(".statement-p2").html(cn.statement_p2);
        $(".statement-p3").html(cn.statement_p3);
        $(".statement-p4").html(cn.statement_p4);
        $(".statement-p5").html(cn.statement_p5);
        $(".page-accept-btn").html(cn.accept_btn);
        $(".page-return-btn").html(cn.return_btn);

        $("#whitelist_successful_title").html(cn.whitelist_successful_title);
        $(".whitelist-p1").html(cn.whitelist_p1);
        $(".whitelist-p2").html(cn.whitelist_p2);
        $(".whitelist-p3").html(cn.whitelist_p3);
        $(".whitelist-p4-sp").html(cn.whitelist_p4);
        $(".whitelist-p5-sp").html(cn.whitelist_p5);
        $(".whitelist-p6-sp").html(cn.whitelist_p6);
        $(".whitelist-p7-sp").html(cn.whitelist_p7);
        $(".whitelist-p8-sp").html(cn.whitelist_p8);
        $("#whitelist_successful_confirm1").html(cn.whitelist_successful_confirm1);
        $("#whitelist_successful_confirm2").html(cn.whitelist_successful_confirm2);
        $("#whitelist_successful_confirm3").html(cn.whitelist_successful_confirm3);

        $("#code_title1").html(cn.check_code);
        $(".change_code").html(cn.change_code);

	}else if(language=="en"){
        $("*").attr("lang","eng");
        $("#buy-tip-title1_1").html(en.buy_tip_title1_1);
        $("#buy-tip-title1_2").html(en.buy_tip_title1_2);
        $("#buy-tip-title2").html(en.importent_tip);
        $("#buy-top-text1").html(en.buy_top_text1);
        $("#pre-ico-eth-addr").html(cn.pre_ico_eth_addr_text1);
		$("#buy_tips_1").html(en.buy_tips_1);
        $("#buy_tips_2").html(en.buy_tips_2);
        $("#buy_tips_text1").html(en.buy_tips_text1);
        $("#buy_tips_text2").html(en.buy_tips_text2);
        $("#buy_tips_text3").html(en.buy_tips_text3);
        $("#email_item_title1").html(en.email_item_title1);
        $("#email_item_title2").html(en.email_item_title2);
        $("#currency_item_title").html(en.currency_item_title);
        $("#wallet_item_title").html(en.wallet_item_title);
        $("#num_item_title").html(en.num_item_title);
        $("#need_pay_num").html(en.need_pay_num);
        $("#buy-confirm-btn").html(en.buy_confirm_btn);
        $("#bsuccessful_title").html(en.bsuccessful_title);
        $("#bsuccessfull_text").html(en.bsuccessfull_text);
        $("#bactivation_successful_confirm").html(en.bactivation_successful_confirm);

        $(".must-fill-tip").html(en.must_fill);
        $(".email-notice").html(en.email_notice);
        $("#telegram-name").html(en.telegram_name);
        $("#sale-count-title").html(en.sale_count_title);
        $("#btc_address").html(en.btc_address);
        $("#eth_address").html(en.eth_address);
        $("#neo_address").html(en.neo_address);
        $("#country_title1").html(en.r_country);
        $(".statement-text-span1").html(en.read_accept);
        $(".statement-text-span2").html(en.statementList);

        $(".page-title").html(en.statement);
        $(".statement-p1").html(en.statement_p1);
        $(".statement-p2").html(en.statement_p2);
        $(".statement-p3").html(en.statement_p3);
        $(".statement-p4").html(en.statement_p4);
        $(".statement-p5").html(en.statement_p5);
        $(".page-accept-btn").html(en.accept_btn);
        $(".page-return-btn").html(en.return_btn);

        $("#whitelist_successful_title").html(en.whitelist_successful_title);
        $(".whitelist-p1").html(en.whitelist_p1);
        $(".whitelist-p2").html(en.whitelist_p2);
        $(".whitelist-p3").html(en.whitelist_p3);
        $(".whitelist-p4-sp").html(en.whitelist_p4);
        $(".whitelist-p5-sp").html(en.whitelist_p5);
        $(".whitelist-p6-sp").html(en.whitelist_p6);
        $(".whitelist-p7-sp").html(en.whitelist_p7);
        $(".whitelist-p8-sp").html(en.whitelist_p8);
        $("#whitelist_successful_confirm1").html(en.whitelist_successful_confirm1);
        $("#whitelist_successful_confirm2").html(en.whitelist_successful_confirm2);
        $("#whitelist_successful_confirm3").html(en.whitelist_successful_confirm3);

        $("#code_title1").html(en.check_code);
        $(".change_code").html(en.change_code);

        //修改样式
        $(".buy-tips-text").css("letter-spacing",0);
        
	}else if(language=="ja"){
        $("*").attr("lang","jpn");
        $("#buy-tip-title1_1").html(ja.buy_tip_title1_1);
        $("#buy-tip-title1_2").html(ja.buy_tip_title1_2);
        $("#buy-tip-title2").html(ja.importent_tip);
        $("#buy-top-text1").html(ja.buy_top_text1);
        $("#pre-ico-eth-addr").html(ja.pre_ico_eth_addr_text1);
        $("#buy_tips_1").html(ja.buy_tips_1);
        $("#buy_tips_2").html(ja.buy_tips_2);
        $("#buy_tips_text1").html(ja.buy_tips_text1);
        $("#buy_tips_text2").html(ja.buy_tips_text2);
        $("#buy_tips_text3").html(ja.buy_tips_text3);
        $("#email_item_title1").html(ja.email_item_title1);
        $("#email_item_title2").html(ja.email_item_title2);
        $("#currency_item_title").html(ja.currency_item_title);
        $("#wallet_item_title").html(ja.wallet_item_title);
        $("#num_item_title").html(ja.num_item_title);
        $("#need_pay_num").html(ja.need_pay_num);
        $("#buy-confirm-btn").html(ja.buy_confirm_btn);
        $("#bsuccessful_title").html(ja.bsuccessful_title);
        $("#bsuccessfull_text").html(ja.bsuccessfull_text);
        $("#bactivation_successful_confirm").html(ja.bactivation_successful_confirm);

        $(".must-fill-tip").html(ja.must_fill);
        $(".email-notice").html(ja.email_notice);
        $("#telegram-name").html(ja.telegram_name);
        $("#sale-count-title").html(ja.sale_count_title);
        $("#btc_address").html(ja.btc_address);
        $("#eth_address").html(ja.eth_address);
        $("#neo_address").html(ja.neo_address);
        $("#country_title1").html(ja.r_country);
        $(".statement-text-span1").html(ja.read_accept);
        $(".statement-text-span2").html(ja.statementList);

        $(".page-title").html(ja.statement);
        $(".statement-p1").html(ja.statement_p1);
        $(".statement-p2").html(ja.statement_p2);
        $(".statement-p3").html(ja.statement_p3);
        $(".statement-p4").html(ja.statement_p4);
        $(".statement-p5").html(ja.statement_p5);
        $(".page-accept-btn").html(ja.accept_btn);
        $(".page-return-btn").html(ja.return_btn);

        $("#whitelist_successful_title").html(ja.whitelist_successful_title);
        $(".whitelist-p1").html(ja.whitelist_p1);
        $(".whitelist-p2").html(ja.whitelist_p2);
        $(".whitelist-p3").html(ja.whitelist_p3);
        $(".whitelist-p4-sp").html(ja.whitelist_p4);
        $(".whitelist-p5-sp").html(ja.whitelist_p5);
        $(".whitelist-p6-sp").html(ja.whitelist_p6);
        $(".whitelist-p7-sp").html(ja.whitelist_p7);
        $(".whitelist-p8-sp").html(ja.whitelist_p8);
        $("#whitelist_successful_confirm1").html(ja.whitelist_successful_confirm1);
        $("#whitelist_successful_confirm2").html(ja.whitelist_successful_confirm2);
        $("#whitelist_successful_confirm3").html(ja.whitelist_successful_confirm3);

        $("#code_title1").html(ja.check_code);
        $(".change_code").html(ja.change_code);
        
	}else{
        $("*").attr("lang","eng");
        $("#buy-tip-title1_1").html(en.buy_tip_title1_1);
        $("#buy-tip-title1_2").html(en.buy_tip_title1_2);
        $("#buy-tip-title2").html(en.importent_tip);
        $("#buy-top-text1").html(en.buy_top_text1);
        $("#pre-ico-eth-addr").html(en.pre_ico_eth_addr_text1);
        $("#buy_tips_1").html(en.buy_tips_1);
        $("#buy_tips_2").html(en.buy_tips_2);
        $("#buy_tips_text1").html(en.buy_tips_text1);
        $("#buy_tips_text2").html(en.buy_tips_text2);
        $("#buy_tips_text3").html(en.buy_tips_text3);
        $("#email_item_title1").html(en.email_item_title1);
        $("#email_item_title2").html(en.email_item_title2);
        $("#currency_item_title").html(en.currency_item_title);
        $("#wallet_item_title").html(en.wallet_item_title);
        $("#num_item_title").html(en.num_item_title);
        $("#need_pay_num").html(en.need_pay_num);
        $("#buy-confirm-btn").html(en.buy_confirm_btn);
        $("#bsuccessful_title").html(en.bsuccessful_title);
        $("#bsuccessfull_text").html(en.bsuccessfull_text);
        $("#bactivation_successful_confirm").html(en.bactivation_successful_confirm);

        $(".must-fill-tip").html(en.must_fill);
        $(".email-notice").html(en.email_notice);
        $("#telegram-name").html(en.telegram_name);
        $("#sale-count-title").html(en.sale_count_title);
        $("#btc_address").html(en.btc_address);
        $("#eth_address").html(en.eth_address);
        $("#neo_address").html(en.neo_address);
        $("#country_title1").html(en.r_country);
        $(".statement-text-span1").html(en.read_accept);
        $(".statement-text-span2").html(en.statementList);

        $(".page-title").html(en.statement);
        $(".statement-p1").html(en.statement_p1);
        $(".statement-p2").html(en.statement_p2);
        $(".statement-p3").html(en.statement_p3);
        $(".statement-p4").html(en.statement_p4);
        $(".statement-p5").html(en.statement_p5);
        $(".page-accept-btn").html(en.accept_btn);
        $(".page-return-btn").html(en.return_btn);
        
        $("#whitelist_successful_title").html(en.whitelist_successful_title);
        $(".whitelist-p1").html(en.whitelist_p1);
        $(".whitelist-p2").html(en.whitelist_p2);
        $(".whitelist-p3").html(en.whitelist_p3);
        $(".whitelist-p4-sp").html(en.whitelist_p4);
        $(".whitelist-p5-sp").html(en.whitelist_p5);
        $(".whitelist-p6-sp").html(en.whitelist_p6);
        $(".whitelist-p7-sp").html(en.whitelist_p7);
        $(".whitelist-p8-sp").html(en.whitelist_p8);
        $("#whitelist_successful_confirm1").html(en.whitelist_successful_confirm1);
        $("#whitelist_successful_confirm2").html(en.whitelist_successful_confirm2);
        $("#whitelist_successful_confirm3").html(en.whitelist_successful_confirm3);

        $("#code_title1").html(en.check_code);
        $(".change_code").html(en.change_code);

        //修改样式
        $(".buy-tips-text").css("letter-spacing",0);
	}
    
    var getCurrencyType = function(){
        $(this).prev().attr("checked",true);
        getExchangeRate()
    }

    var getExchangeRate = function(){
        var exchangerate = typeof $.cookie("exchangerate") == "string" ? $.parseJSON($.cookie("exchangerate")) : $.cookie("exchangerate");
        var currentRate = 0;
        currencyType = $("input[type='radio']:checked").val()

        if(exchangerate != null && exchangerate != undefined )
        {
            $("#currency-type").text(currencyType)
            for(var er in exchangerate)
            {
                if(er == currencyType)
                {
                    currentRate = exchangerate[er]
                }
            }
        }
        if( $("#purchase-quantity-input").val() >= 0 && $("#purchase-quantity-input").val() != "")
        {
            $("#need-count").text( ($("#purchase-quantity-input").val() * currentRate).toFixed(2))
        }
        else
        {
            $("#need-count").text(0); 
        }
    }
    getExchangeRate();

    $(":input[type='radio'] + label").click(getCurrencyType)

    $("#purchase-quantity-input").blur(getExchangeRate)

    

    //声明条款
    $(".statement-content .statement-radio").on("click",function(){
        if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
            $(".statement-content .statement-radio").addClass("statement-checked");
        }else{
            $(".statement-content .statement-radio").removeClass("statement-checked");
        }
    });

    $(".statement-content").on("click",function(){
        $(".statement-container").show();
    });
    
    //页面加载 声明选择框
    if(!$(".statement-content .statement-radio").hasClass("statement-unchecked")){
        $(".statement-content .statement-radio").addClass("statement-unchecked");
    }

    $(".statement-page-content .page-accept-btn").click(function(){
        if($(".statement-content .statement-radio").hasClass("statement-unchecked")){
            $(".statement-content .statement-radio").removeClass("statement-unchecked");
        }
        if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
            $(".statement-content .statement-radio").addClass("statement-checked");
        }
        $(".statement-container").hide();
    });

    $(".statement-button .page-return-btn").click(function(){
        $(".statement-container").hide();
    });

    //验证表单内容
    // var account_rule = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

    //邮箱验证
    $("#email-input").blur(function(){
        $("#email-input-tip").children().remove();
        $("#email-input-tip").removeClass("error correntness");
        $("#email-input-tip").removeClass("input-tips");
        if(account_rule.test($(this).val()))
        {
            $(this).attr("style","");   
        }else{
            $("#email-input-tip").addClass("input-tips");
            $("#email-input-tip").addClass("error");
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
            return;
        }
        if($(this).val().length>50){
            $("#email-input-tip").addClass("input-tips");
            $("#email-input-tip").addClass("error");
            if(language=="cn"){
                $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_email_length+'</p>')
            }else if(language=="en"){
                $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_email_length+'</p>')
            }else if(language=="ja"){
                $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_email_length+'</p>')
            }else{
                $("#email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_email_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }
    })

    //确认邮箱验证
    $("#confirm-email-input").blur(function(){
        $("#confirm-email-input-tip").children().remove();
        $("#confirm-email-input-tip").removeClass("error correntness")
        $("#confirm-email-input-tip").removeClass("input-tips");
        if($("#email-input").val() == $(this).val()){
            $(this).attr("style",""); 
        }else{
            $("#confirm-email-input-tip").addClass("input-tips");
            $("#confirm-email-input-tip").addClass("error");
            if(language=="cn"){
                $("#confirm-email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_same_email+'</p>')
            }else if(language=="en"){
                $("#confirm-email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_same_email+'</p>')
            }else if(language=="ja"){
                $("#confirm-email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_same_email+'</p>')
            }else{
                $("#confirm-email-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_same_email+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }
    })

    //telegram用户名验证
    $("#username-input").blur(function(){
        $("#username-input-tip").children().remove();
        $("#username-input-tip").removeClass("error correntness")
        $("#username-input-tip").removeClass("input-tips");
        if($(this).val().length>50){
            $("#username-input-tip").addClass("input-tips");
            $("#username-input-tip").addClass("error");
            if(language=="cn"){
                $("#username-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_input_length+'</p>')
            }else if(language=="en"){
                $("#username-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }else if(language=="ja"){
                $("#username-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_input_length+'</p>')
            }else{
                $("#username-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
    })

    //BTC地址验证
    $("#btc-input").blur(function(){
        $("#btc-input-tip").children().remove();
        $("#btc-input-tip").removeClass("error correntness")
        $("#btc-input-tip").removeClass("input-tips");
        if($(this).val().length>50){
            $("#btc-input-tip").addClass("input-tips");
            $("#btc-input-tip").addClass("error");
            if(language=="cn"){
                $("#btc-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_input_length+'</p>')
            }else if(language=="en"){
                $("#btc-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }else if(language=="ja"){
                $("#btc-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_input_length+'</p>')
            }else{
                $("#btc-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
    })

     //ETH地址验证
    $("#eth-input").blur(function(){
        $("#eth-input-tip").children().remove();
        $("#eth-input-tip").removeClass("error correntness")
        $("#eth-input-tip").removeClass("input-tips");
        if($(this).val().length>50){
            $("#eth-input-tip").addClass("input-tips");
            $("#eth-input-tip").addClass("error");
            if(language=="cn"){
                $("#eth-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_input_length+'</p>')
            }else if(language=="en"){
                $("#eth-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }else if(language=="ja"){
                $("#eth-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_input_length+'</p>')
            }else{
                $("#eth-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
    })

    //NEO地址验证
    $("#neo-input").blur(function(){
        $("#neo-input-tip").children().remove();
        $("#neo-input-tip").removeClass("error correntness")
        $("#neo-input-tip").removeClass("input-tips");
        if($(this).val().length>50){
            $("#neo-input-tip").addClass("input-tips");
            $("#neo-input-tip").addClass("error");
            if(language=="cn"){
                $("#neo-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_input_length+'</p>')
            }else if(language=="en"){
                $("#neo-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }else if(language=="ja"){
                $("#neo-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_input_length+'</p>')
            }else{
                $("#neo-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
    })

    //居住国家验证
    $("#country-input").blur(function(){
        $("#country-input-tip").children().remove();
        $("#country-input-tip").removeClass("error correntness")
        $("#country-input-tip").removeClass("input-tips");
        if($(this).val()==null || $(this).val()==""){
            $("#country-input-tip").addClass("input-tips");
            $("#country-input-tip").addClass("error");
            if(language=="cn"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_empty_tip+'</p>')
            }else if(language=="en"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_empty_tip+'</p>')
            }else if(language=="ja"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_empty_tip+'</p>')
            }else{
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_empty_tip+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
        if($(this).val().length>50){
            $("#country-input-tip").addClass("input-tips");
            $("#country-input-tip").addClass("error");
            if(language=="cn"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+cn.fill_input_length+'</p>')
            }else if(language=="en"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }else if(language=="ja"){
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+ja.fill_input_length+'</p>')
            }else{
                $("#country-input-tip").append('<i class="fa fa-times-circle" aria-hidden="true"></i><p>'+en.fill_input_length+'</p>')
            }
            $(this).attr("style","border-color:red");
            return;
        }else{
            $(this).attr("style",""); 
        }
    })


    $("#buy-confirm-btn").click(function(){

        var emailAddress = $("#email-input").val();
        var cEmailAddress =  $("#confirm-email-input").val();
        var telegramName = $("#username-input").val();
        // var saleNum = $(".check-item input[type='radio']:checked").val();
        var saleNum = $("#btc-input").val();
        var btcAddress = $("#btc-input").val();
        var ethAddress = $("#eth-input").val();
        var neoAddress = $("#neo-input").val();
        // var country = $("#country-input").val();
        var country = $(".pull-left").html();
        var code = $(".code-input input").val();

        if(emailAddress==null || emailAddress==""){
            if(language=="cn"){
                showTip(cn.fill_right_email);
            }else if(language=="en"){
                showTip(en.fill_right_email);
            }else if(language=="ja"){
                showTip(ja.fill_right_email);
            }else{
                showTip(en.fill_right_email);
            }
            return;
        }
        if(cEmailAddress==null || cEmailAddress==""){
            if(language=="cn"){
                showTip(cn.fill_same_email);
            }else if(language=="en"){
                showTip(en.fill_same_email);
            }else if(language=="ja"){
                showTip(ja.fill_same_email);
            }else{
                showTip(en.fill_same_email);
            }
            return;
        }

        if(saleNum==null || saleNum==""){
            if(language=="cn"){
                showTip(cn.fill_empty_tip);
            }else if(language=="en"){
                showTip(en.fill_empty_tip);
            }else if(language=="ja"){
                showTip(ja.fill_empty_tip);
            }else{
                showTip(en.fill_empty_tip);
            }
            return;
        }


        if(country==null || country==""){
            if(language=="cn"){
                showTip(cn.fill_empty_tip);
            }else if(language=="en"){
                showTip(en.fill_empty_tip);
            }else if(language=="ja"){
                showTip(ja.fill_empty_tip);
            }else{
                showTip(en.fill_empty_tip);
            }
            return;
        }

        if(code==null || code==""){
            if(language=="cn"){
                showTip(cn.fill_empty_tip);
            }else if(language=="en"){
                showTip(en.fill_empty_tip);
            }else if(language=="ja"){
                showTip(ja.fill_empty_tip);
            }else{
                showTip(en.fill_empty_tip);
            }
            return;
        }

        if(!$(".statement-content .statement-radio").hasClass("statement-checked")){
            if(language=="cn"){
                showTip(cn.read_satement_tip);
            }else if(language=="en"){
                showTip(en.read_satement_tip);
            }else if(language=="ja"){
                showTip(ja.read_satement_tip);
            }else{
                showTip(en.read_satement_tip);
            }
            return;
        }

        if(saleNum==null || saleNum==undefined || saleNum==""){
            saleNum = 0;
        }

        $.ajax({
            url: url + "/business/preRegistration",
            type: "POST",
            data: {
                "uid":  $.cookie("user").id,
                "email": emailAddress,
                "telegramname": telegramName,
                "salenum" : saleNum,
                "btc" : btcAddress,
                "eth" : ethAddress,
                "neo" : neoAddress,
                "country" : country,
                "code" : code,
            },
            beforeSend: function(){
                showModalInterface();
            },
            complete: function(){
                hideModalInterface();
            },
            success: function(response){
                console.info(response)
                if(response.state == 0)
                {
                    $(".whitelist-successful-container").show();
                }else if(response.state == 2){
                    if(language=="cn"){
                        showTip(cn.infor_fill);
                    }else if(language=="en"){
                        showTip(en.infor_fill);
                    }else if(language=="ja"){
                        showTip(ja.infor_fill);
                    }else{
                        showTip(en.infor_fill);
                    }
                }else if(response.state == 112){
                    if(language=="cn"){
                        showTip(cn.check_code_error);
                    }else if(language=="en"){
                        showTip(en.check_code_error);
                    }else if(language=="ja"){
                        showTip(ja.check_code_error);
                    }else{
                        showTip(en.check_code_error);
                    }
                }
            },
            error: function(error){
                console.info(error);
            }
        })
    });

    $(".whitelist-successful-confirm1").click(function(){
        $(".whitelist-successful-container").hide();
	});

    $(function(){
        $(".code-img img").attr("src",url+ "/business/getVerificationCode?code="+Math.random());
    });
    $(".code-img").click(function(){
        $(".code-img img").attr("src",url+ "/business/getVerificationCode?code="+Math.random());
    });

    $(".whitelist-successful-div1").click(function(){
        location.href = "buy.html";
    });

    $(".whitelist-successful-div2").click(function(){
        location.href = "already_get_qualified.html";
    });
});
//求购数量验证
var singNum = "";   //用来验证数量是否发生改变
var cky = function(obj) {
    if(singNum == obj.value || singNum.length > obj.value.length) {
        return;
    }
    obj.value = obj.value.replace(/[^\d.]/g, "");
    obj.value = obj.value.replace(/\.{2,}/g, ".");
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
    if(obj.value.indexOf(".") < 0 && obj.value != "") {
        obj.value = obj.value;
    }
    singNum = obj.value;
}

