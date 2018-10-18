var refreshSprits = function(url){
    // $.ajax({
    //     url: url,
    //     dataType: 'json',
    //     success: function(data) {
    //         var content = '';
    //         for (i in data.owl) {
    //             content += data.owl[i].item;
    //         }
    //         $('.owl-carousel').trigger('insertContent.owl',content);
    //     }
    // });
    console.log(url);
    var content1 = '';
    var content0 = '';
    var content2 = '';
    $('#owl-1').remove();
    $(".page-bg-03 .left-content .preview-img").append('<div id="owl-1" class="owl-carousel">');
    for(i in url.left){
        $('#owl-1').append(url.left[i].item);
    }

    $('#owl-0').remove();
    $(".page-bg-03 .center-content .preview-img").append('<div id="owl-0" class="owl-carousel">');
    for(i in url.center){  
        $('#owl-0').append(url.center[i].item);     
    }

    $('#owl-2').remove();
    $(".page-bg-03 .right-content .preview-img").append('<div id="owl-2" class="owl-carousel">');
    for(i in url.right){
        $('#owl-2').append(url.right[i].item);
    }
}

var init = function(){
    var w = document.documentElement.offsetWidth < 1280 ? 1280 : document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = w / 100 + "px";
    $('body').children('.page-container').each(function(index, element){
        $(element).height( $(element).width() * 0.56);
    });
}

//动态修改左右轮播图的宽度
var owlWidth = function(){
    var preview_img_width = $(".page-bg-03 .left-content .preview-img").width();
    $("#owl-1").css({"width": preview_img_width*1.25});
    $("#owl-2").css("width", preview_img_width*1.25);
}

//owl
var loadOwl = function(owl_center, owl_left, owl_right){
    //var owl_center = $('.owl-carousel');
    // owl_center.on('onInitBefore',function(e){
    //     evCall(e.type);
    // });
    // owl_center.on('onInitAfter',function(e){
    //     evCall(e.type);
    // });
    owl_center.owlCarousel({
        loop:true,
        items:1,
        nav:true,
        callbacks:true,
        lazyLoad:true,
        merge:true,
        margin:10,
        nav:false,
        dots:false
    });
    owl_left.owlCarousel({
        loop:true,
        items:2,
        nav:true,
        callbacks:true,
        lazyLoad:true,
        merge:true,
        margin:10,
        nav:false,
        dots:false,
        dragparam:0.22533495736906211936662606577345
    });
    owl_right.owlCarousel({
        loop:true,
        items:2,
        nav:true,
        callbacks:true,
        lazyLoad:true,
        merge:true,
        margin:10,
        nav:false,
        //mouseDrag:false,
        //touchDrag:false,
        dots:false,
        dragparam:0.22533495736906211936662606577345
    });
    function test(){
        //$(".page-container.page-bg-04").load(function(){
        console.log($(".owl-item.active"));
        $(".owl-item.active").each(function(index,element){
            switch(index)
            {
            case 0:
                $(this).unbind("click");
                $(this).on("click",function(){
                    owl_center.trigger('prev.owl',[1000]);
                    owl_left.trigger('prev.owl',[1000]);
                    owl_right.trigger('prev.owl',[1000]);
                    setTimeout(function(){
                        owl_center.trigger('prev.owl',[1000]);
                        owl_left.trigger('prev.owl',[1000]);
                        owl_right.trigger('prev.owl',[1000]);
                    },1000);
                $(this).unbind("click");
                });
                break;
            case 1:
                $(this).unbind("click");
                $(this).on("click",function(){
                    owl_center.trigger('prev.owl',[1000]);
                    owl_left.trigger('prev.owl',[1000]);
                    owl_right.trigger('prev.owl',[1000]);
                $(this).unbind("click");
                });
                break;
            case 3:
                $(this).unbind("click");
                $(this).on("click",function(){
                    owl_center.trigger('next.owl',[1000]);
                    owl_left.trigger('next.owl',[1000]);
                    owl_right.trigger('next.owl',[1000]);
                $(this).unbind("click");
                });
                break;
            case 4:
                $(this).unbind("click");
                $(this).on("click",function(){
                    owl_center.trigger('next.owl',[1000]);
                    owl_left.trigger('next.owl',[1000]);
                    owl_right.trigger('next.owl',[1000]);
                    setTimeout(function(){
                        owl_center.trigger('next.owl',[1000]);
                        owl_left.trigger('next.owl',[1000]);
                        owl_right.trigger('next.owl',[1000]);
                    },1000);
                $(this).unbind("click");
                });
                break;
            }
                /*if(index != 2) {
                    console.log(this);
                    $(this).on("click",function(){
                        alert(index);
                    });
                }*/
            });
        //alert(1);
    //});
    /*$(".owl-item.active").click(function(){
        $(".owl-item.active").each(function(index,element){
            alert(index);
        });
    });*/
        //显示预览大图
        showPreImage();
    }
    owl_center.on('onTransitionEnd',function(e){
        setTimeout(function(){test();},100);
    });
    test();
}

//众筹时间倒计时
var leftTimer = function(year, month, day, hour, minute, second){
    var leftTime = (new Date(year, month-1, day, hour, minute, second)) - (new Date());//计算剩余毫秒数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余小时数
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩分钟数
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余秒数

    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    $("#countdownTime").html(days + ":" + hours + ":" + minutes + ":" + seconds);
    $(".page-bg-05 .real-end h1").html(days + ":" + hours + ":" + minutes + ":" + seconds);
}
var checkTime = function(i){
     if(i < 10){
         i = "0" + i;
     }
     return i;
}

//导航点击滚动到达
var navigationScroll = function(idText, time){
    var mao = $("#" + idText);
    if(mao.length > 0){
        var pos = mao.offset().top;
        var posHeight = mao.height();
        $("html,body").animate({
            scrollTop: pos
        }, time)
    }
}

//导航栏
var navigation = function(){
    $("#main-nav .wip-gallery").on("click", function(){
        navigationScroll("wip_gallery", 1000);
    })
}

//显示预览大图
var showPreImage = function () {
    $("#owl-0 .owl-item.active").css("cursor", "pointer");
    $("#owl-0 .owl-item.active").bind("click", function () {
        var imgSrc = $("#owl-0 .owl-item.active .item img").attr("src");
        var smallPicName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
        var smallPicNameDetail = smallPicName.split(".")[0];
        var smallPicSuffix = smallPicName.split(".")[1];
        var bigPicNameDetail = smallPicNameDetail + "_big";
        var basePath = imgSrc.substring(0, imgSrc.lastIndexOf("/") + 1);
        var bigPicPath = basePath + bigPicNameDetail + "." + smallPicSuffix;
        window.open("viewPicture.html?imagePath=" + bigPicPath);

/*        var newWindow = window.open();
        var title = newWindow.document.createElement("title");
        title.text = "Galaxz";
        var link = newWindow.document.createElement("link");
        link.setAttribute("rel", "shortcut icon");
        link.setAttribute("type", "image/x-icon");
        link.href = "../images/logo1.png";
        newWindow.document.head.appendChild(link);
        newWindow.document.head.appendChild(title);
        var imgEle = newWindow.document.createElement("img");
        imgEle.src = bigPicPath;
        newWindow.document.body.appendChild(imgEle);
        // console.log(imgEle.width);
        newWindow.document.body.style.cssText = "display: flex;justify-content: center;align-items: center;margin: 0;background-color: #000;";
        var clientRatio =  document.body.clientWidth / document.body.clientHeight;
        var imgRatio = imgEle.width / imgEle.height;
        if (imgRatio > clientRatio) {
            imgEle.style.cssText = "width: 100%;";
        } else {
            imgEle.style.cssText = "height: 100%;";
        }*/
        // window.open(basePath + bigPicNameDetail + "." + smallPicSuffix);
    })
};

//页面尾部动画
var animation = function(){
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop(); 
        var scrollHeight=$(document).height(); 
        var windowHeight=$(window).height();
        if(scrollTop + windowHeight >= scrollHeight - 232){
            // alert("BOTTOM!");
            $(".galaxz_earth img").addClass("animation");
            $(".galaxz-text img").addClass("animation");
            $(".galaxz-outer-circle img").addClass("animation");
            $(".galaxz-inner-circle img").addClass("animation");
            $(".page-bg-05 .real-end .countdown-time").addClass("animation");
            //$(".page-bg-05 .real-end .countdown-time-text").addClass("animation");
            //$(".page-bg-05 .real-end .countdown-time-text p").addClass("animationColor");
        }
    })
}

$(document).ready(function()
{
    init();

    //导航栏，页面内滚动到达
    navigation();

    //众筹时间倒计时
    //setInterval("leftTimer(2018, 4, 19, 0, 0, 0)", 1000);

    //初始化图片资源
    refreshSprits(data.dataJson);

    //动态修改左右轮播图的宽度
    owlWidth();

    //进行滚动轮播加载
    var owl_center = $("#owl-0");
    var owl_left = $("#owl-1");
    var owl_right = $("#owl-2");
    loadOwl(owl_center, owl_left, owl_right);

    //页面尾部动画
    animation();

    // 第一页导航栏
    $('#main-nav').children("a").bind({
        mouseenter:function(){
            $('#main-nav').children("div").each(function(index, element){
                $(element).removeClass("active");
            });
            $(this).addClass("active"); 

            var text = '<div class="drop-down-container">' +
                            '<div class="drop-down-box">' +
                                '<div class="funding">FUNDING</div>' +
                                '<div class="shop">SHOP</div>' +
                            '</div>' +
                        '</div>';
            if($(this).attr("class").indexOf("crowdfunding") != -1){
                $(this).append(text);
                setTimeout(function(){
                    $(".drop-down-box").css("top", "0rem");
                }, 100)               
                // $("#main-nav .crowdfunding .funding").on("click", function(){
                //     window.location.href = "funds.html";
                // })
                $("#main-nav .crowdfunding .shop").on("click", function(){
                    window.location.href = "shop.html";
                })
            } 
            // if($(this).attr("class").indexOf("blog") != -1){
            //     $("#main-nav .blog").on("click", function(){
            //        window.location.href = "blog.html";
            //     })
            // }

            if($(this).attr("class").indexOf("community") != -1 ){
                var text = '<div class="commonConstruction">Not available at this moment</div>';
                // $(this).removeClass("active");
                // $(this).css("cursor", "initial");
                // $(this).css({cursor:"url(http://html5resource-10019461.file.myqcloud.com/galaxz/images/03/ban.png), auto"});
                $(this).css({cursor:"no-drop"});
                // $(this).css({cursor:"pointer"});
                $(this).append(text);
            }
        },
        mouseleave:function(){
            $('#main-nav').children("a").each(function(index, element){
                $(element).removeClass("active");
            });
            
            if($(this).attr("class").indexOf("crowdfunding") != -1){
                $(this).empty();
            }
            if($(this).attr("class").indexOf("community") != -1){
                $(this).empty();
            }
        }
    });

/*    $('#main-nav .community').bind('click', function() {
       alert("建设中");
    });*/

    $('#ch-01').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        //refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson);       
        //动态修改左右轮播图的宽度
        owlWidth();
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    $('#ch-02').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        // refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson1);
        //动态修改左右轮播图的宽度
        owlWidth();
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    $('#ch-03').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        //refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson2);
         //动态修改左右轮播图的宽度
        owlWidth();
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    $('#ch-04').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        //refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson3);
        //动态修改左右轮播图的宽度
        owlWidth();
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    $('#ch-05').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        // refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson4);
        //动态修改左右轮播图的宽度
        owlWidth();   
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    $('#ch-06').on('click',function(){
        $(".resource-change").children().each(function(index, element){
            if($(element).attr("class").indexOf("ch-bright") > 0)
            {
                $(element).attr("class", $(element).attr("class").split("ch-bright")[0] + "ch-dark");
            }
        });
        $(this).attr("class", $(this).attr("class").split("ch-dark")[0] + "ch-bright");
        //refreshSprits('./json/data.json');

        //加载新的一组图片
        refreshSprits(data.dataJson5);
        //动态修改左右轮播图的宽度
        owlWidth();
        //对图片进行轮动效果加载
        var owl_center = $("#owl-0");
        var owl_left = $("#owl-1");
        var owl_right = $("#owl-2");
        loadOwl(owl_center, owl_left, owl_right);
    });
    lazyLoadImage();

    showTips();
});

//图片懒加载
var lazyLoadImage = function() {
    var n = 0,
    imgNum = $(".lazy-load").length,
    img = $('.lazy-load');
    lazyload();
    $(window).scroll(lazyload);
    function lazyload(event) {
        for (var i = n; i < imgNum; i++) {
            if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
                if (img.eq(i).attr("src") == "http://html5resource-10019461.file.myqcloud.com/galaxz/images/blank.bmp") {
                    var src = img.eq(i).attr("data-src");
                    img.eq(i).attr("src", src);
                    n = i + 1;
                }
            }
        }
    }
}

$(window).resize(function(){
    init();

    //动态修改左右轮播图的宽度
    owlWidth();
})

var showTips = function () {
    //临时添加页面底部提示
    $(".page-bottom-main .email").bind({
        mouseenter:function(){
            var text = '<div class="construction">Not available at this moment</div>';
            $(this).append(text);
        },
        mouseleave:function(){
            $(".email .construction").remove();
        }
    });
    $(".page-bottom-main .subscribe").bind({
        mouseenter:function(){
            var text = '<div class="construction">Not available at this moment</div>';
            $(this).append(text);
        },
        mouseleave:function(){
            $(".subscribe .construction").remove();
        }
    });
    $(".page-bottom-main .language-version").bind({
        mouseenter:function(){
            var text = '<div class="construction">Not available at this moment</div>';
            $(this).append(text);
        },
        mouseleave:function(){
            $(".language-version .construction").remove();
        }
    });
};

