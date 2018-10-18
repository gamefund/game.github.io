$(function(){
    $("img.lazy").lazyload({
        placeholder : "./images/crowdfund/funds_begin.jpg",
        effect : "fadeIn",
        threshold : 200,
        container : $(".funds-container"),
    });
});