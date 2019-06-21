var orderData = [];

var formatOrderData = function(purchaseOrders){
    var arr = [];
    purchaseOrders.forEach(function(element) {
        var el = {};
        el.order_id = element.id;
        el.currency_type = element.currencyType;
        el.currency_number = element.purchaseMoney;
        el.wallet_account = element.walletAccount;
        el.purchase_quantity = element.purchaseQuantity;
        el.order_time = formatDateTime(new Date(element.purchaseTime));
        // el.status = element.status == 2 ? "等待支付" : element.status == 1 ? "审核中" : element.status == 0 ? "交易成功" : element.status == -1 ? "已失效" : "状态异常"
        $.cookie.json = true
	    var lang = $.cookie("language");
        if(lang=="cn"){
            el.status = element.status == 2 ? cn.waite_ex : element.status == 1 ? cn.under_review : element.status == 0 ? cn.deal_success : element.status == -1 ? cn.o_expreid : cn.status_exception
        }else if(lang=="en"){
            el.status = element.status == 2 ? en.waite_ex : element.status == 1 ? en.under_review : element.status == 0 ? en.deal_success : element.status == -1 ? en.o_expreid : en.status_exception
        }else if(lang=="ja"){
            el.status = element.status == 2 ? ja.waite_ex : element.status == 1 ? ja.under_review : element.status == 0 ? ja.deal_success : element.status == -1 ? ja.o_expreid : ja.status_exception
        }else{
            el.status = element.status == 2 ? cn.waite_ex : element.status == 1 ? cn.under_review : element.status == 0 ? cn.deal_success : element.status == -1 ? cn.o_expreid : cn.status_exception
        }
        arr.push(el);
    })
    return arr;
}

var createOrderli = function(order_id, currency_type, currency_number, wallet_account, purchase_quantity, order_time ,status,language)
{
    var $el = $("<li></li>")
    if(status == cn.deal_success || status == en.deal_success || status == ja.deal_success)
    {
        $el.attr("class", "order-li order-complete");
    }else if (status == cn.under_review || status == en.under_review || status == ja.under_review)
    {
        $el.attr("class", "order-li order-waiting-pay");
    }else if (status == cn.waite_ex || status == en.waite_ex || status == ja.waite_ex)
    {
        $el.attr("class", "order-li order-waiting-pay");
    }else if(status == cn.o_expreid || status == en.o_expreid || status == ja.o_expreid)
    {
        $el.attr("class", "order-li order-failure");
    }
    else {
        return null;
    }
    $left = $("<div class='order-left'></div>");
    $center = $("<div class='order-center'></div>");
    $right = $("<div class='order-right'></div>");
    $left.append("<p>C²engine license</p>");
    // $left.append("<p>购买数量:"+ purchase_quantity +"</p>");
    if(language=="cn"){
        $left.append("<p>"+cn.buy_sum + purchase_quantity +"</p>");
	}else if(language=="en"){
		$left.append("<p>"+en.buy_sum + purchase_quantity +"</p>");
	}else if(language=="ja"){
        $left.append("<p>"+ja.buy_sum + purchase_quantity +"</p>");
	}else{
        $left.append("<p>"+cn.buy_sum + purchase_quantity +"</p>");
	}
    // $left.append("<p>需支付 "+currency_type +":"+ currency_number +"</p>");
    if(language=="cn"){
        $left.append("<p>"+cn.need_pay +currency_type +":"+ currency_number +"</p>");
	}else if(language=="en"){
		$left.append("<p>"+en.need_pay +currency_type +":"+ currency_number +"</p>");
	}else if(language=="ja"){
        $left.append("<p>"+ja.need_pay +currency_type +":"+ currency_number +"</p>");
	}else{
        $left.append("<p>"+cn.need_pay +currency_type +":"+ currency_number +"</p>");
	}
    $center.append("<p>"+ order_time +"</p>");
    // $center.append("<p>订单号:"+order_id+"</p>");
    if(language=="cn"){
        $center.append("<p>"+cn.tradeno +order_id+"</p>");
	}else if(language=="en"){
		$center.append("<p>"+en.tradeno +order_id+"</p>");
	}else if(language=="ja"){
        $center.append("<p>"+ja.tradeno +order_id+"</p>");
	}else{
        $center.append("<p>"+cn.tradeno +order_id+"</p>");
	}
    $right.append($('<p>'+ status +'</p>'));  
    // $right.append($('<a href="javascript:void(0)" value="'+ order_id +'" onclick="showOrderDetail(this)">查看详情</a>'));
    if(language=="cn"){
        $right.append($('<a href="javascript:void(0)" value="'+ order_id +'" onclick="showOrderDetail(this)">'+cn.find_detail+'</a>'));
	}else if(language=="en"){
		$right.append($('<a href="javascript:void(0)" value="'+ order_id +'" onclick="showOrderDetail(this)">'+en.find_detail+'</a>'));
	}else if(language=="ja"){
        $right.append($('<a href="javascript:void(0)" value="'+ order_id +'" onclick="showOrderDetail(this)">'+ja.find_detail+'</a>'));
	}else{
        $right.append($('<a href="javascript:void(0)" value="'+ order_id +'" onclick="showOrderDetail(this)">'+cn.find_detail+'</a>'));
	}  
    $el.append($left);
    $el.append($center);
    $el.append($right);
    return $el;
}

var showOrderDetail = function(order_btn)
{
    var qrOptions = {
        render: "image",       // 渲染模式
        size: 120,              // 设置大小
        radius: 0,              // 圆角程度 0 - 0.5
        quiet: 0,               // 类似padding
        modes: 5,               // 模式 0：nurmal, 1: label strip, 2: label box, 3: image strip, 4: image box
        background: "#ffffff",  // 背景颜色
        fill: "#000000",        // 填充颜色
        label: "no label",      //
        fontname: 'sans',       // label字体
        fontcolor: '#000',      // label字体颜色
        image: null,            // 中间图片
        ecLevel: 'L',           // 纠错等级 L M Q H
        text: "",               // 二维码对应的字符
    };
    var orderUnitData = {};
    orderData.forEach(function(element) {
        if(element.order_id == $(order_btn).attr("value"))
            orderUnitData = element;
    },this);
    $el = $('<div class="container"></div>');
    $el.append($('<div class="order-detail-close"><i class="fa fa-close"></i></div>').on("click",function(){
        $("#order_detail_page").remove();
    }));
    $container = $('<div class="ticket-container"></div>');
    $el.append($container);
//----------------------------------------------------------------------- 展示支付信息
    $.cookie.json = true
	var lg = $.cookie("language");
    $payInfo = $('<div class="pay-info"></div>');
    // $payInfo.append($('<p class="order-detail-title">支付信息：</p>'));
    if(lg=="cn"){
        $payInfo.append($('<p class="order-detail-title">'+cn.pay_info+'</p>'));
	}else if(lg=="en"){
		$payInfo.append($('<p class="order-detail-title">'+en.pay_info+'</p>'));
	}else if(lg=="ja"){
        $payInfo.append($('<p class="order-detail-title">'+ja.pay_info+'</p>'));
	}else{
        $payInfo.append($('<p class="order-detail-title">'+cn.pay_info+'</p>'));
	}
    switch(orderUnitData.currency_type)
    {
        case "BTC":
        qrOptions.text = BTCAddress;    
        break;
        case "ETH":
        qrOptions.text = ETHAddress;
        break;
        case "NEO":
        qrOptions.text = NEOAddress;
        break;
        case "ETC":
        qrOptions.text = ETCAddress;
        break;
        case "CNY":
        qrOptions.text = CNYAddress;
        break;
        default:
        break;
    }
    // $payInfo.append($('<div class="pay-info-container"><p>收款钱包账号</p><p>'+ qrOptions.text +'</p></div>'));
    if(lg=="cn"){
        $payInfo.append($('<div class="pay-info-container"><p>'+cn.collect_money+'</p><p>'+ qrOptions.text +'</p></div>'));
	}else if(lg=="en"){
		$payInfo.append($('<div class="pay-info-container"><p>'+en.collect_money+'</p><p>'+ qrOptions.text +'</p></div>'));
	}else if(lg=="ja"){
        $payInfo.append($('<div class="pay-info-container"><p>'+ja.collect_money+'</p><p>'+ qrOptions.text +'</p></div>'));
	}else{
        $payInfo.append($('<div class="pay-info-container"><p>'+cn.collect_money+'</p><p>'+ qrOptions.text +'</p></div>'));
	}
    $('<div class="pay-detail-qrcode"></div>').qrcode(qrOptions).appendTo($payInfo);
//-----------------------------------------------------------------------

//----------------------------------------------------------------------- 展示订单信息
    $orderInfo = $('<div class="order-info"></div>');
    // $orderInfo.append($('<p class="order-detail-title">订单信息：</p>'));
    // $orderInfo.append($('<div class="order-info-container"><span>产品名称：</span><span>C²engine license</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>产品数量：</span><span>'+ orderUnitData.purchase_quantity +'</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>订单号：</span><span>'+ orderUnitData.order_id +'</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>所需支付金额：</span><span>'+ orderUnitData.currency_number + orderUnitData.currency_type +'</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>付款钱包账号：</span><span>'+ orderUnitData.wallet_account +'</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>订单生成时间：</span><span>'+ orderUnitData.order_time +'</span></div>'));
    // $orderInfo.append($('<div class="order-info-container"><span>订单状态：</span><span>'+ orderUnitData.status +'</span></div>'));
    if(lg=="cn"){
        $orderInfo.append($('<p class="order-detail-title">'+cn.trade_info+'</p>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_name+'</span><span>C²engine license</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_num+'</span><span>'+ orderUnitData.purchase_quantity +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.tradeno+'</span><span>'+ orderUnitData.order_id +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.need_pay_money+'</span><span>'+ orderUnitData.currency_number + orderUnitData.currency_type +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.pay_num+'</span><span>'+ orderUnitData.wallet_account +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_time+'</span><span>'+ orderUnitData.order_time +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_status+'</span><span>'+ orderUnitData.status +'</span></div>'));
	}else if(lg=="en"){
        $("*").attr("lang","eng");
		$orderInfo.append($('<p class="order-detail-title">'+cn.trade_info+'</p>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.product_name+'</span><span>C²engine license</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.product_num+'</span><span>'+ orderUnitData.purchase_quantity +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.tradeno+'</span><span>'+ orderUnitData.order_id +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.need_pay_money+'</span><span>'+ orderUnitData.currency_number + orderUnitData.currency_type +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.pay_num+'</span><span>'+ orderUnitData.wallet_account +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.trade_time+'</span><span>'+ orderUnitData.order_time +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+en.trade_status+'</span><span>'+ orderUnitData.status +'</span></div>'));
	}else if(lg=="ja"){
        $("*").attr("lang","jpn");
        $orderInfo.append($('<p class="order-detail-title">'+cn.trade_info+'</p>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_name+'</span><span>C²engine license</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_num+'</span><span>'+ orderUnitData.purchase_quantity +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.tradeno+'</span><span>'+ orderUnitData.order_id +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.need_pay_money+'</span><span>'+ orderUnitData.currency_number + orderUnitData.currency_type +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.pay_num+'</span><span>'+ orderUnitData.wallet_account +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_time+'</span><span>'+ orderUnitData.order_time +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_status+'</span><span>'+ orderUnitData.status +'</span></div>'));
	}else{
        $orderInfo.append($('<p class="order-detail-title">'+cn.trade_info+'</p>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_name+'</span><span>C²engine license</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.product_num+'</span><span>'+ orderUnitData.purchase_quantity +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.tradeno+'</span><span>'+ orderUnitData.order_id +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.need_pay_money+'</span><span>'+ orderUnitData.currency_number + orderUnitData.currency_type +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.pay_num+'</span><span>'+ orderUnitData.wallet_account +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_time+'</span><span>'+ orderUnitData.order_time +'</span></div>'));
        $orderInfo.append($('<div class="order-info-container"><span>'+cn.trade_status+'</span><span>'+ orderUnitData.status +'</span></div>'));
	}
//-----------------------------------------------------------------------
    $container.append($payInfo);
    $container.append($orderInfo);
    $('<div id="order_detail_page" class="order_detail"></div>').append($el).appendTo($('body'));
}

$(document).ready(function(){

    $.cookie.json = true
	var language = $.cookie("language");

	if(language=="cn"){
        $("#order_title").html(cn.order_title);
	}else if(language=="en"){
		$("#order_title").html(en.order_title);
	}else if(language=="ja"){
        $("#order_title").html(ja.order_title);
	}else{
        $("#order_title").html(cn.order_title);
	}

    $.ajax({
        type: "POST",
        url: url + "/business/getPurchaseOrders", 
        data: {
            "uid": $.cookie("user").id,
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
                orderData = formatOrderData(response.purchaseOrders);
                orderData.forEach(function(element) {
                    $("#order_list").append(createOrderli(element.order_id,element.currency_type,
                    element.currency_number,element.wallet_account,element.purchase_quantity,element.order_time,element.status,language));
                }, this);
            }
            
        },
        error: function(error){
            console.info(error)
        }
    })
})
