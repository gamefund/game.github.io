var tabIndex = 0;
var usedList = [];
var expiredList = [];
var availableList = [];
var invitationCodeTotal = 0;

$(document).ready(function(){

    $.cookie.json = true
	var language = $.cookie("language");
    if(language=="cn"){
        $("#invitation_title").html(cn.invitation_title);
        $("#statistics_title1").html(cn.statistics_title1);
        $("#statistics_title2").html(cn.statistics_title2);
        $("#statistics_title3").html(cn.statistics_title3);
        $("#show_available").html(cn.show_available);
        $("#show_used").html(cn.show_used);
	}else if(language=="en"){
        $("*").attr("lang","eng");
		$("#invitation_title").html(en.invitation_title);
        $("#statistics_title1").html(en.statistics_title1);
        $("#statistics_title2").html(en.statistics_title2);
        $("#statistics_title3").html(en.statistics_title3);
        $("#show_available").html(en.show_available);
        $("#show_used").html(en.show_used);
	}else if(language=="ja"){
        $("*").attr("lang","jpn");
        $("#invitation_title").html(ja.invitation_title);
        $("#statistics_title1").html(ja.statistics_title1);
        $("#statistics_title2").html(ja.statistics_title2);
        $("#statistics_title3").html(ja.statistics_title3);
        $("#show_available").html(ja.show_available);
        $("#show_used").html(ja.show_used);
	}else{
        $("#invitation_title").html(en.invitation_title);
        $("#statistics_title1").html(en.statistics_title1);
        $("#statistics_title2").html(en.statistics_title2);
        $("#statistics_title3").html(en.statistics_title3);
        $("#show_available").html(en.show_available);
        $("#show_used").html(en.show_used);
	}

    updateInfo(language);
})


var updateInfo = function(language)
{
    $.ajax({
        url: url + "/business/getInvitationcodeStatistics",
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
            if(response.status == 0)
            {
                usedList = response.usedList;
                expiredList = response.expiredList;
                availableList = response.availableList;
                invitationCodeTotal = response.invitationCodeTotal;
                $(document).ready(function(){
                    render(language);
                    $("#show-available").on("click",function(){
                        tabIndex = 0;
                        render(language);
                    })
                    $("#show-used").on("click",function(){
                        tabIndex = 1;
                        render(language);
                    })
                })
            }
        },
        error: function(error){
            console.info(error)
        }
    })
}

var render = function(language){
    $("#invitation-tatol").html(invitationCodeTotal);
    $("#invitation-used").html(usedList.length);
    $("#invitation-failure").html(expiredList.length);
    $("#invitation-list").children().remove();
    $('#invitation-tab').children().removeClass("activated");
    if(tabIndex == 0)
    {
        $("#show-available").addClass("activated");
        availableList.forEach(function(element){
            var $el = $('<li class="invitation-list-li"></li>');
            $el.append($('<div class="left"><p>' + element.invitationCode + '</p></div>'));
            $el.append($('<div class="center"><p>' + element.useCount +"/"+ element.effectiveCount + '</p></div>'));
            var date = new Date(element.generateTime);
            date.setDate(date.getDate() + element.effectiveTime);
            // $el.append($('<div class="right"><p>将于 ' + formatDateTime(date) + ' 过期</p></div>'));
            if(language=="cn"){
                $el.append($('<div class="right"><p>'+cn.will_to+' ' + formatDateTime(date) + ' '+cn.expried+'</p></div>'));
            }else if(language=="en"){
                $el.append($('<div class="right"><p>'+en.will_to+' ' + formatDateTime(date) + ' '+en.expried+'</p></div>'));
            }else if(language=="ja"){
                $el.append($('<div class="right"><p>'+ja.will_to+' ' + formatDateTime(date) + ' '+ja.expried+'</p></div>'));
            }else{
                $el.append($('<div class="right"><p>'+en.will_to+' ' + formatDateTime(date) + ' '+en.expried+'</p></div>'));
            }
            $el.appendTo($("#invitation-list"));
        })
    }else if(tabIndex == 1){
        $("#show-used").addClass("activated");
        usedList.forEach(function(element){
            var $el = $('<li class="invitation-list-li"></li>');
            $el.append($('<div class="left"><p>' + element.invitationCode + '</p></div>'));
            $el.append($('<div class="center"><p>' + element.useCount +"/"+ element.effectiveCount + '</p></div>'));
            var date = new Date(element.generateTime);
            date.setDate(date.getDate() + element.effectiveTime);
            // $el.append($('<div class="right"><p>将于 ' + formatDateTime(date) + ' 过期</p></div>'));
            if(language=="cn"){
                $el.append($('<div class="right"><p>'+cn.will_to+' ' + formatDateTime(date) + ' '+cn.expried+'</p></div>'));
            }else if(language=="en"){
                $el.append($('<div class="right"><p>'+en.will_to+' ' + formatDateTime(date) + ' '+en.expried+'</p></div>'));
            }else if(language=="ja"){
                $el.append($('<div class="right"><p>'+ja.will_to+' ' + formatDateTime(date) + ' '+ja.expried+'</p></div>'));
            }else{
                $el.append($('<div class="right"><p>'+en.will_to+' ' + formatDateTime(date) + ' '+en.expried+'</p></div>'));
            }
            $el.appendTo($("#invitation-list"));
        })
    }
}




