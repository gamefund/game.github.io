(function(global){
    var slickV = global.slickV || {};
    var currentIndex = 3;
    var children = {};

    // var arr = [0,1,2,3,4];
    var arr = [0,1,2,3,4,5,6];

    var dragType=[];
    var element1;
    var pageX = 0;
    var pageY = 0;
    var movedistance = 0;//拖拽移动距离
    var topDragStart = [0,1,2,3,4,5,6];
    var changeStateTopStart = 0;//时间轴初始top

    slickV = function(element, options){
        //点击图片来进行滚动
        children = $(element).children().on("click", slickV.prototype.ChildOnClick);

        //拖拽图片进行滚动
        element1 = element;      
        slickV.prototype.initDragParam();
    };

    //拖拽图片进行滚动===鼠标移动的距离时屏幕像素，需要进行数据转换变成px,然后对图片进行修改变化
    // var dragChildren = {};
    // isTouch = 'ontouchstart' in window
    // var mouseEvents = (isTouch) ?
    // {
    //     down: 'touchstart',
    //     move: 'touchmove',
    //     up: 'touchend',
    //     over: 'touchstart',
    //     out: 'touchend',
    // }
    // :
    // {
    //     down: 'mousedown',
    //     move: 'mousemove',
    //     up: 'mouseup',
    //     over: 'mouseover',
    //     out: 'mouseend',
    // }
   
    // slickV = function(element, options){
    //     //点击图片来进行滚动
    //     children = $(element).children().on("click", slickV.prototype.ChildOnClick);

    //     dragChildren =  $(element).children().bind(mouseEvents.down, slickV.prototype.ChildOnMouseEvent);
    // };

    // slickV.prototype.ChildOnMouseEvent = function(e)
    // {
    //     dragChildren.each(function(index, element){
    //         var down = null;
    //         var topStart;
    //         $(element).bind(mouseEvents.down, function(){
    //             down=this;
    //             e = e.changedTouches ? e.changedTouches[0] : e;
    //             topStart = e.pageY;

    //             startMover(0);
    //         })
    //         $(element).bind(mouseEvents.move, function(){
    //             // var ev = e.originalEvent || e || window.event;
    //             // // if is 'touchstart'
    //             // var isTouchEvent = ev.type == 'touchmove';
    //             // var pageX = isTouchEvent ? ev.targetTouches[0].pageX : (ev.pageX || ev.clientX);
    //             // var pageY = isTouchEvent ? ev.targetTouches[0].pageY : (ev.pageY || ev.clientY);
    //             if(down){
    //                 // e = e.changedTouches ? e.changedTouches[0] : e;
    //                 // var top = $(element).css("top");
    //                 // $(element).css("top", topStart-e.pageY);//根据滑动距离参数对图片进行移动

    //                 //slickV.prototype.Scroll(arr[2]);
    //                 startMover(-20);
    //             }              
    //         })
    //          $(element).bind(mouseEvents.up, function(){
    //             down=null;
    //         })
    //     });
    // }

    // var timer = null;
    // function startMover(itarget){
    //     clearInterval(timer);
    //     dragChildren.each(function(index, element){
    //         timer = setInterval(function(){
    //             var speed = 0;
    //             var startTop = $(element)[0].offsetTop;
    //             if(($(element)[0].offsetTop - startTop) > itarget){
    //                 speed = -1;
    //             }else{
    //                 speed = 1;
    //             }
    //             if(($(element)[0].offsetTop - startTop) == itarget){
    //                 clearInterval(timer);
    //             }else{
    //                 $(element)[0].style.top = $(element)[0].offsetTop + speed*10 + 'px';
    //             }
    //         }, 30)
    //     })
    // }

    slickV.prototype.ChildOnClick = function(e)
    {
        children.each(function(index, element){
            if(element == e.currentTarget)
            {     
                if(index == arr[1]){//跳动两个位置，分两步走，先下移，再下移
                    console.log("1==============arr[2]=" + arr[2])

                    slickV.prototype.Scroll(arr[2]);      
                    setTimeout(function(){
                        slickV.prototype.Scroll(arr[2]);
				    },400);   
                }else if(index == arr[5]){//跳动两个位置，分两步走，先上移，再上移
                    console.log("2==============arr[4]=" + arr[4])

                    slickV.prototype.Scroll(arr[4]);
                    setTimeout(function(){
                        slickV.prototype.Scroll(arr[4]);
                    },400);
                }else{//只跳动一个位置，按原先的方式
                    console.log("3==============")
                    slickV.prototype.Scroll(index);
                }           
            }
        });  
    }

    slickV.prototype.Scroll = function(clickIndex){
        if(clickIndex == arr[2]){
            //滚动时间轴
            var btnchange = document.getElementsByClassName("changestate2");
            var changeStateTop = btnchange[0].offsetTop;
            var imgHeight = $(".changestate2").parent().height();  
            var $changeState2 =  $(".changestate2");

            setTimeout(function(){
                btnchange[0].style.top = (changeStateTop - imgHeight/5) + "px";

                if(changeStateTop <= (-imgHeight*2+imgHeight/5 + imgHeight/10)){//时间轴下滑至极限，回到原位
                    setTimeout(function(){
                        $changeState2.removeClass("changestate2");
                        $changeState2.removeAttr("style");
                        setTimeout(function(){
                            $changeState2.addClass("changestate2");
                        },10);
                    },400);                 
                }
            },10);  
        }else if(clickIndex == arr[4]){
            //滚动时间轴
            var btnchange = document.getElementsByClassName("changestate2");
            var changeStateTop = btnchange[0].offsetTop;
            var imgHeight = $(".changestate2").parent().height();
            var $changeState2 =  $(".changestate2");

            setTimeout(function(){
                btnchange[0].style.top = (changeStateTop + imgHeight/5) + "px";

                if(changeStateTop >= (-imgHeight/5 - imgHeight/10)){//时间轴上滑至极限，回到原位
                    setTimeout(function(){
                        $changeState2.removeClass("changestate2");
                        $changeState2.removeAttr("style");
                        setTimeout(function(){
                            $changeState2.addClass("changestate2");
                        },10);
                    },400);   
                }
            },10);        
        }

        console.log("clickIndex="+clickIndex);
        arr[3] = clickIndex;
        arr[2] = clickIndex - 1 >= 0 ? clickIndex - 1 : clickIndex - 1 + children.length;
        arr[1] = clickIndex - 2 >= 0 ? clickIndex - 2 : clickIndex - 2 + children.length;
        arr[0] = clickIndex - 3 >= 0 ? clickIndex - 3 : clickIndex - 3 + children.length;
        arr[4] = clickIndex + 1 >= children.length ? clickIndex + 1 - children.length : clickIndex + 1;
        arr[5] = clickIndex + 2 >= children.length ? clickIndex + 2 - children.length : clickIndex + 2;
        arr[6] = clickIndex + 3 >= children.length ? clickIndex + 3 - children.length : clickIndex + 3;

        console.log(arr);
        
        children.each(function(index, element){
            var isShowd = false;
            for(var i = 0; i < arr.length; i++)
            {
                if(arr[i] == index)
                {
                    if(i == 0){
                        $(element).removeClass().addClass("slick-cell five pre");
                    }else if(i == 1){
                        $(element).removeClass().addClass("slick-cell one");
                    }else if(i == 2){
                        $(element).removeClass().addClass("slick-cell two");
                    }else if(i == 3){
                        $(element).removeClass().addClass("slick-cell three");
                    }else if(i == 4){
                        $(element).removeClass().addClass("slick-cell four");
                    }else if(i == 5){
                        $(element).removeClass().addClass("slick-cell five");
                    }else if(i == 6){
                        $(element).removeClass().addClass("slick-cell one next");
                    }

                    isShowd = true;
                }
            }
            if(isShowd == false)
                $(element).removeClass().addClass("slick-cell hidden");            
        });
        var personNum = children.length -2;
        var currentPerson = $(".slick-cell:eq(" + clickIndex + ") img")[0].src;
        var currentNum = currentPerson.charAt(currentPerson.length-5);
        console.log("currentNum = " + currentNum)
        var currentNumInt = parseInt(currentNum);
        var pre = currentNumInt - 3 > 0 ? currentNumInt - 3 : currentNumInt - 3 + personNum;
        var next = currentNumInt + 3 > personNum ? currentNumInt + 3 - personNum : currentNumInt + 3;
        console.log("pre = " + pre)
        console.log("next = " + next)
        var preText = '<div id = "person' + pre + '">' + $(".slick-cell #person" + pre + "").html() + '</div>';
        var nextText = '<div id = "person' + next + '">' + $(".slick-cell #person" +next + "").html() + '</div>';

        $(".slick-cell.pre").empty().append(preText);
        $(".slick-cell.next").empty().append(nextText);
    }


    //拖拽图片进行滚动
    slickV.prototype.initDragParam = function(){
    	var isTouch = slickV.prototype.isTouchSupport();
    	var isTouchIE = slickV.prototype.isTouchSupportIE();
    	if(isTouch && !isTouchIE){
    		dragType = ['touchstart','touchmove','touchend','touchcancel'];
    	} else if(isTouch && isTouchIE){
    		dragType = ['MSPointerDown','MSPointerMove','MSPointerUp','MSPointerCancel'];
    	} else {
    		dragType = ['mousedown','mousemove','mouseup'];
    	}
    	if( (isTouch || isTouchIE)){
            $(element1).on(dragType[3], slickV.prototype.onDragEnd);
        }
        else{
            $(element1).on('dragstart', function() {return false;});
            $(element1).onselectstart = function(){return false;};
        }
        //$(element1).on(document, dragType[0], slickV.prototype.onDragStart, false);
        $(element1).on(dragType[0], slickV.prototype.onDragStart);
    }

    slickV.prototype.isTouchSupport = function(){
    	return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
    }
    slickV.prototype.isTouchSupportIE = function(){
    	return window.navigator.msPointerEnabled;
    }

    slickV.prototype.on = function(element, event, listener, capture){
    	if (element.addEventListener) {
				element.addEventListener(event, listener, capture);
			}
			else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			}
    }
    slickV.prototype.off = function(element, event, listener, capture){
    	if (element.removeEventListener) {
				element.removeEventListener(event, listener, capture);
			}
			else if (element.detachEvent) {
				element.detachEvent('on' + event, listener);
			}
    }

    slickV.prototype.onDragEnd = function(event){

    	// $(element1).off(dragType[1], slickV.prototype.onDragMove);
        // $(element1).off(dragType[2], slickV.prototype.onDragEnd);
        slickV.prototype.off(document,dragType[1], slickV.prototype.onDragMove);
    	slickV.prototype.off(document,dragType[2], slickV.prototype.onDragEnd);
        
        console.log("onDragEnd");

        //拖拽结束隐藏多余图片
        if(movedistance > 0){      
            $(".pre").css("transform", "scale(0)");
        }else if(movedistance < 0){
            $(".next").css("transform", "scale(0)");
        }

        dragChildren = $(element1).children();
        dragChildren.each(function(index, element){
            $(element).removeAttr("style");//拖拽图片结束时回到原位置，在进行图片滚动
        })
        if(movedistance > 30){      
            slickV.prototype.Scroll(arr[2]);
            console.log("4==============arr[2]=" + arr[2])
        }else if(movedistance < -30){
            slickV.prototype.Scroll(arr[4]);
            console.log("5==============arr[2]=" + arr[2])
        }
    }
    slickV.prototype.onDragStart = function(event){
		console.log("onDragStart");
        movedistance = 0;
    	var ev = event.originalEvent || event || window.event;
        // prevent right click
        if (ev.which === 3) { 
            return false;
        }
    	var isTouchEvent = ev.type === 'touchstart';
    	pageX = isTouchEvent ? event.targetTouches[0].pageX : (ev.pageX || ev.clientX);
    	pageY = isTouchEvent ? event.targetTouches[0].pageY : (ev.pageY || ev.clientY);
    	
    	// $(element1).on(dragType[1], slickV.prototype.onDragMove);
		// $(element1).on(dragType[2], slickV.prototype.onDragEnd);

        slickV.prototype.on(document,dragType[1], slickV.prototype.onDragMove, false);
    	slickV.prototype.on(document,dragType[2], slickV.prototype.onDragEnd, false);


        
        dragChildren = $(element1).children();
        dragChildren.each(function(index, element){
            topDragStart[index] = $(element).css("top");//拖拽图片开始时记录原始位置
        })

        //时间轴的滚动
        var btnchange = document.getElementsByClassName("changestate2");
        if(btnchange.length > 0)
        changeStateTopStart = btnchange[0].offsetTop;
    }
    slickV.prototype.onDragMove = function(event){
    	var ev = event.originalEvent || event || window.event;

        // if is 'touchstart'
        var isTouchEvent = ev.type == 'touchmove';
        var pageCX = isTouchEvent ? ev.targetTouches[0].pageX : (ev.pageX || ev.clientX);
        var pageCY = isTouchEvent ? ev.targetTouches[0].pageY : (ev.pageY || ev.clientY);
        movedistance = pageCY - pageY;
        if(Math.abs(movedistance)<10)
            return;
        var direction = (movedistance < 0) ? "down" : "up";
        console.log("movedistance="+movedistance);

        //拖拽前显示被隐藏的图片
        if(movedistance > 0){      
            $(".pre").css("transform", "translate3d(0, -50%, 0) scale(1)");

            if(movedistance < 120){
                $(".three .selected").hide();
                $(".two").css("transform", "translate3d(" + (-movedistance/8) + "%, -50%, 0) scale(" + (1 + movedistance/400) + ")");
                $(".three").css("transform", "translate3d(" + (-15 + movedistance/8) + "%, -50%, 0) scale(" + (1.3 - movedistance/400) + ")");
                $(".three .selected").show();
            }            
        }else if(movedistance < 0){
            $(".next").css("transform", "translate3d(0, -50%, 0) scale(1)");

            if(movedistance > -120){
                $(".three .selected").hide();
                $(".four").css("transform", "translate3d(" + (movedistance/8) + "%, -50%, 0) scale(" + (1 - movedistance/400) + ")");
                $(".three").css("transform", "translate3d(" + (-15 - movedistance/8) + "%, -50%, 0) scale(" + (1.3 + movedistance/400) + ")");
                $(".three .selected").show();
            } 
        }

        dragChildren = $(element1).children();
        dragChildren.each(function(index, element){
            $(element).css("top", parseInt(topDragStart[index]) + movedistance);//拖拽图片时图片的移动
        })


        //时间轴的滚动
        var btnchange = document.getElementsByClassName("changestate2");
        btnchange[0].style.top = (changeStateTopStart - movedistance) + "px";
    }

    global.slickV = slickV;
})(window);