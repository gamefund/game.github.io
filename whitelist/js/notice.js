$(document).ready(function(){
//----------------------------------------------------- 全局变量

	$.cookie.json = true
	var language = $.cookie("language");
	var user = $.cookie("user");
    if(user == null || user == undefined || user.purchaseQualification == false){
		location.href = "login2.html";
	}

});
