
$(function(){
    $(".about-the-game").click(function(){
        window.location.href = "aboutGame.html";
    });
    $(".wip-gallery").click(function(){
        window.location.href = "index.html#wip_gallery";
    });
    $(".crews").click(function(){
        window.location.href = "index.html#navi_crews";
    });
    $(".news").click(function(){
        window.location.href = "blog.html";
    });
/*    $(".community").click(function () {
       alert("建设中");
    });*/
    $(".menu-logo-img").click(function(){
        window.location.href = "index.html";
    });

    $(".menu-crowdfunding").bind({
        mouseenter:function(){
            $(".menu-crowdfunding-drop").removeClass("hidden-drop");
        },
        mouseleave:function(){
            $(".menu-crowdfunding-drop").addClass("hidden-drop");
        }
    });

    $(".menu-community").bind({
        mouseenter:function(){
            // var text = '<div class="construction">Not available at this moment</div>';
            $(this).css({cursor:"no-drop"});
            $(".menu-communtity-drop").removeClass("hidden-drop");
            // $(this).append(text);
        },
        mouseleave:function(){
            // $(this).empty();
            $(".menu-communtity-drop").addClass("hidden-drop");
        }
    });
/*    $(".menu-community").click(function(){
        alert("建设中");
    });*/
    $(".news-menu-foot").children("div").bind({
        mouseenter:function(){
            $('.news-menu-foot').children("div").each(function(index, element){
                $(element).removeClass("active");
            });
            $(this).addClass("active");
            if($(this).attr("class").indexOf("community") != -1 ){
                var text = '<div class="commonConstruction">Not available at this moment</div>';
/*                $(this).removeClass("active");
                $(this).css("cursor", "initial");*/
                $(this).css({cursor:"no-drop"});
                $(this).append(text);
            }

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
                
                // $(".news-menu-foot .crowdfunding .funding").on("click", function(){
                //     window.location.href = "funds.html";
                // })
                $(".news-menu-foot .crowdfunding .shop").on("click", function(){
                    window.location.href = "shop.html";
                })
            } 
        },
        mouseleave:function(){
            $('.news-menu-foot').children("div").each(function(index, element){
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

    $(".news-detail-foot").children("div").bind({
        mouseenter:function(){
            $('.news-detail-foot').children("div").each(function(index, element){
                $(element).removeClass("active");
            });
            $(this).addClass("active");
            if($(this).attr("class").indexOf("community") != -1 ){
                /*                $(this).removeClass("active");
                                $(this).css("cursor", "initial");*/
                var text = '<div class="commonConstruction">Not available at this moment</div>';
                $(this).css({cursor:"no-drop"});
                $(this).append(text);
            } 

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
                
                // $(".news-detail-foot .crowdfunding .funding").on("click", function(){
                //     window.location.href = "funds.html";
                // })
                $(".news-detail-foot .crowdfunding .shop").on("click", function(){
                    window.location.href = "shop.html";
                })
            } 
        },
        mouseleave:function(){
            $('.news-detail-foot').children("div").each(function(index, element){
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


    $(".news-content-body1-img").click(function(){
        window.location.href = "blog_1.html";
    });
    $(".news-text-content2").click(function(){
        window.location.href = "blog_1.html";
    });

    $(".news-detail-f").bind({
        mouseenter:function(){
            $(".qrcode-img").removeClass("hidden-qrimg");
        },
        mouseleave:function(){
            $(".qrcode-img").addClass("hidden-qrimg");
        }
    });


    $(".news-top-menu-right .log-in").bind({
        mouseenter:function(){
            var text = '<div class="login">Not available at this moment</div>';
            $(this).css({cursor:"no-drop"});
            $(this).append(text);
        },
        mouseleave:function(){
            $(".news-top-menu-right .login").remove();
        }
    });
    $(".news-top-menu-right .language-version").bind({
        mouseenter:function(){
            var text = '<div class="language">Not available at this moment</div>';
            $(this).css({cursor:"no-drop"});
            $(this).append(text);
        },
        mouseleave:function(){
            $(".news-top-menu-right .language").remove();
        }
    });
});