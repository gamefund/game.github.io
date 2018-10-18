$(function(){
    $("img.lazy").lazyload({
        placeholder : "http://html5resource-10019461.file.myqcloud.com/galaxz/images/crowdfund/shop_begin.jpg",
        effect : "fadeIn",
        threshold : 200,
        container : $(".shop-container"),
    });
});