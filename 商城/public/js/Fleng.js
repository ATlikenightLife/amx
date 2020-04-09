// 页面加载完毕 调用分类渲染
    Flengx();

// 搜索框 右边的三点  点击事件

$('.duoyu').click(function(){
    $('.duojyu').toggle();
})
// 搜索框 右边的三点  点击事件 END
var topSS=0;
// TAB栏的 点击 置顶效果
$(function tabxd(){
    // 进来的时候 清除掉   防止反复触发
    $('.leftTab-kx li').off('click');
$('.leftTab-kx li').on('click',function(){

    $(this).attr('id','cur').siblings().removeAttr('id','cur');
    // 点击 当前的选中的置顶
    spdx=(($(this).index())*46);
    if(spdx>1064||spdx==1064){spdx=1110;}
    $('.leftTab-kx').animate({top:'-'+spdx+'px'});
    // 点击的时候 右边的内容改变  选项卡
    Xbao =$(this).index()
    $('.right-ron ul').eq(Xbao).show().siblings().hide();
    $('.right-ron ul').css({top:'0px'});
    // 点击的时候 右边的内容改变  选项卡END

})

// TAB栏的 点击 置顶效果 END
// TAB栏的 滑动效果
$(".leftTab").on("touchstart", function(e) {
    // console.log(1)
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
    topDX=parseInt($('.leftTab-kx').css('top'));
});

$(".leftTab").on("touchmove", function(e) {
    e.preventDefault();//滑动的时候 不能点击
    $('.leftTab-kx li').off('click');
    // console.log(2)
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
   if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
        Y=Y*1;
        topcc=topDX+Y
        if(topcc>130||topcc==130){topcc=130}
    $('.leftTab-kx').css({top:topcc+'px'});
    
    }
    else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
        Y=Y*-1;
        topcc=topDX-Y
        if(topcc<-1200||topcc==-1200){topcc=-1200}
        $('.leftTab-kx').css({top:''+topcc+'px'});
        
    }
    // 当鼠标抬起的时候 触发的事件
    $("body").on('touchend',function(){
        // 清除掉其他事件  防止出bug
        $('.right-ron ul').off('touchstart');
        $('.right-ron ul').off('touchmove');
        $(".right-ron").off('touchend');

        e.preventDefault();
        $('.leftTab-kx li').off('click');
        if(topcc>0||topcc==2){topcc=0
            $('.leftTab-kx').css({top:topcc+'px'});
        }else if(topcc<-1114||topcc==-1116){topcc=-1114
            $('.leftTab-kx').css({top:topcc+'px'});}
        

        setTimeout(function(){
            // 清除掉自己  重新调用
            $('.leftTab').off('touchstart');
            $('.leftTab').off('touchmove');
            $("body").off('touchend');
            tabxd();       })  
    })
    
});



// TAB栏的 滑动效果 END


// ---------------------------------------------------------
// 右边内容的 按住上下滑动 

$(function Rightxx(){
    // 清掉点击的事件
    // 按下
    // $('.leftTab-kx li').off('click');
    $(".right-ron ul").on("touchstart",function(b){
        startX6 = b.originalEvent.changedTouches[0].pageX,
        startY6 = b.originalEvent.changedTouches[0].pageY;
        ulIdx=$(this).index();//获取到当前的ul下标
        RGtopDX=parseInt($('.right-ron ul').eq(ulIdx).css('top'));//截取到当前高度
        RGtopDX2=parseInt($('.right-ron ul').eq(ulIdx).css('height'));//截取到当前高度
        
    })
    // 滑动
    $(".right-ron ul").on("touchmove", function(b) {
        b.preventDefault();//滑动的时候 不能点击
        moveEndX6 = b.originalEvent.changedTouches[0].pageX,
        moveEndY6 = b.originalEvent.changedTouches[0].pageY,
        X6 = moveEndX6 - startX6,
        Y6 = moveEndY6 - startY6;
       if ( Math.abs(Y6) > Math.abs(X6) && Y6 > 0) {
        Y6=Y6*1;
        topSS=RGtopDX+Y6;
        if(topSS>75||topSS==75){topSS=75}
        $('.right-ron ul').eq(ulIdx).css({top:topSS+'px'});
        
        }
        else if ( Math.abs(Y6) > Math.abs(X6) && Y6 < 0 ) {
           Y6=Y6*-1;
        topSS=RGtopDX-Y6;
        if(topSS<-(RGtopDX2-450)||topSS==-(RGtopDX2-450)){topSS=-(RGtopDX2-450)}
        $('.right-ron ul').eq(ulIdx).css({top:topSS+'px'});
            
        }
})
     // 当鼠标抬起的时候 触发的事件
    $(".right-ron").on('touchend',function(b){
        // 清除掉其他事件  防止出bug
        $("body").off('touchend');
        $('.leftTab').off('touchstart');
        $('.leftTab').off('touchmove');
        $('.leftTab-kx li').off('click');

        b.preventDefault();
        if(topSS>0||topSS==3){
            topSS=0;
            $('.right-ron ul').eq(ulIdx).css({top:topSS+'px'});
        }else if(topSS < -(RGtopDX2-540)||topSS==-(RGtopDX2-540)){
            topSS=-(RGtopDX2-540);
            $('.right-ron ul').eq(ulIdx).css({top:topSS+'px'});
        }
        setTimeout(function(){
            // 清除掉自己  重新调用
            $('.right-ron ul').off('touchstart');
            $('.right-ron ul').off('touchmove');
            $(".right-ron").off('touchend');
            Rightxx(); tabxd();      })  
    })

});
});
// 右边内容的 按住上下滑动 END

