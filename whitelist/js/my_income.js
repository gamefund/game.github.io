var userListData = null;

$(document).ready(function(){
    $.cookie.json = true
	var language = $.cookie("language");

	if(language=="cn"){
        $("#income_title").html(cn.income_title);
	}else if(language=="en"){
        $("*").attr("lang","eng");
		$("#income_title").html(en.income_title);
	}else if(language=="ja"){
        $("*").attr("lang","jpn");
        $("#income_title").html(ja.income_title);
	}else{
        $("#income_title").html(cn.income_title);
	}

    $.ajax({
        url: url + "/business/getIncome",
        type: "POST",
        data: {
            "account": $.cookie("user").account,
            "channel": $.cookie("user").channel,
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
                userListData = response.billList;
                $(document).ready(function(){
                    for (var index = 0; index < userListData.length; index++) {
                        var element = userListData[index];
                        $("#bill_list").append('<li class="item-li">'+
                        // '<div class="item-icon"><img src="'+element.avatar+'">'+
                        '<div class="item-nickname-time"><p class="item-nickname">'+element.nickname+'</p>'+
                        '<p class="item-time">'+element.tradeTime+'</p></div></div>'+
                        '<div class="item-price"><p>+'+element.price+'</p></div>'+
                    '</li>');
                    }
                    // $("#bill_list").append('<li class="item-li item-end">'+
                    //     '<p>没有更多数据</p>'+
                    // '</li>');
                    if(language=="cn"){
                    $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+cn.no_more_sum+'</p>'+
                    '</li>');
                    }else if(language=="en"){
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+en.no_more_sum+'</p>'+
                    '</li>');
                    }else if(language=="ja"){
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+ja.no_more_sum+'</p>'+
                    '</li>');
                    }else{
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+cn.no_more_sum+'</p>'+
                    '</li>');
                    }
                })
            }else{
                $(document).ready(function(){
                    if(language=="cn"){
                    $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+cn.no_more_sum+'</p>'+
                    '</li>');
                    }else if(language=="en"){
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+en.no_more_sum+'</p>'+
                    '</li>');
                    }else if(language=="ja"){
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+ja.no_more_sum+'</p>'+
                    '</li>');
                    }else{
                        $("#bill_list").append('<li class="item-li item-end">'+
                        '<p>'+cn.no_more_sum+'</p>'+
                    '</li>');
                    }
                })
            }
        },
        error: function(error){
            console.info(error)
        }
    })
})

