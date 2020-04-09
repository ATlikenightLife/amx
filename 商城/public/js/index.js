// 页面加载 调用渲染的方法
    indexArrmax();

// 第二部分内容的左右滑动事件
$(".two-kuangk").on("touchstart", function(e) {
    e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$(".two-kuangk").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
      
    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
        $('.two-nrong').stop().animate({left:'0%'},250);
        $('.tisxiaoyd b').eq(0).addClass('oncm').siblings().removeClass('oncm');
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
        $('.two-nrong').stop().animate({left:'-100%'},250);
        $('.tisxiaoyd b').eq(1).addClass('oncm').siblings().removeClass('oncm');
    }

});
// 第二部分内容的左右滑动事件 END--------------

// 第三部分  京东秒杀的滑动事件

$(".miaoskkk").on("touchstart", function(c) {
    c.preventDefault();
    startX2 = c.originalEvent.changedTouches[0].pageX,
    startY2 = c.originalEvent.changedTouches[0].pageY;
});
$(".miaoskkk").on("touchmove", function(c) {
    c.preventDefault();
    moveEndX2 = c.originalEvent.changedTouches[0].pageX,
    moveEndY2 = c.originalEvent.changedTouches[0].pageY,
    X2 = moveEndX2 - startX2,
    Y2 = moveEndY2 - startY2;


    if ( Math.abs(X2) > Math.abs(Y2) && X2 > 0 ) {
        $('.miaosnr').stop().animate({left:'0%'},1500);
    }
    else if ( Math.abs(X2) > Math.abs(Y2) && X2 < 0 ) {
        $('.miaosnr').stop().animate({left:'-100%'},1500);
    }
});

// 第三部分  京东秒杀的滑动事件 END
// 轮播图 滑动 上下页
$(function LBTxxx(){
$(".LBTkt").on("touchstart", function(m) {
    m.preventDefault();
    startX6 = m.originalEvent.changedTouches[0].pageX,
    startY6 = m.originalEvent.changedTouches[0].pageY;
});
$(".LBTkt").on("touchmove", function(m) {
    m.preventDefault();
    moveEndX6 = m.originalEvent.changedTouches[0].pageX,
    moveEndY6 = m.originalEvent.changedTouches[0].pageY,
    X6 = moveEndX6 - startX6,
    Y6 = moveEndY6 - startY6;
    // console.log(X6);
    // console.log(Y6);
    if ( Math.abs(X6) > Math.abs(Y6) && X6 > 0 ) {
        $('.left').trigger('click');
        $('.LBTkt').off('touchstart');//防止用户恶意触发
        $(".LBTkt").off("touchmove");
        setTimeout(function(){LBTxxx()},600);
    }
    else if ( Math.abs(X6) > Math.abs(Y6) && X6 < 0 ) {
        $('.right').trigger('click');
        $('.LBTkt').off('touchstart');//防止用户恶意触发
        $(".LBTkt").off("touchmove");
        setTimeout(function(){LBTxxx()},600);
    }
});
})

// 轮播图 滑动 上下页 END

// 京东快报 动画
$(function JDkbx(){
    setTimeout(function(){
        $('.JDkuib-xinw').css({top:'0px'})
    },1000);
    setTimeout(function(){
        $('.JDkuib-xinw').animate({top:'-35px'},500)
    },2000);
    setTimeout(function(){
        $('.JDkuib-xinw').animate({top:'-69px'},500)
    },4000);
    setTimeout(function(){
        $('.JDkuib-xinw').animate({top:'-104px'},500)
    },6000);
    setTimeout(function(){
        $('.JDkuib-xinw').animate({top:'-140px'},500)
        JDkbx();
    },8000);
});

// 京东快报 动画 END
// 滚动条事件

$(document).ready(function(){//在文档加载完毕后执行
    $(window).scroll(function(){//开始监听滚动条  
    //获取当前滚动条高度
    var topp = $(document).scrollTop();
       
    if(topp > 50){
    $('.hder').css({backgroundImage: 'linear-gradient(0deg,#f1503b,#c82519 50%)'});
    }else{
        $('.hder').css({backgroundImage:''});
    }  
    if(topp>500){
        $('#FHtop01').css({display:'block'});
    }else{
        $('#FHtop01').css({display:'none'});
    }
})
})
// 滚动条事件 END


$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();  //当前滚动条
    var scrollHeight = $(document).height();  //内容可视区域的高度。
    var windowHeight = $(this).height();   //当前的高度。
    // console.log(scrollTop + windowHeight == scrollHeight)
    if (scrollTop + windowHeight == scrollHeight) {   //滚动条加可视窗口  ==  当前窗口  就触发
        $('.Djizai-01').css({display:'none'});
        $('.Djizai-02').css({display:'block'});
    setTimeout(function(){
        $('.Djizai-01').css({display:'block'});
        $('.Djizai-02').css({display:'none'});
        // 加载 的方法
        indexArrmax();
    },1200);
    }
  });