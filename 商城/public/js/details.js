$(function(){
    $('.left').click(function(){history.back();});
    // 滑动滚动条小时导航和侧边栏
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        if(top>134){
            $('.header').fadeOut();
            $('.head').fadeIn();
        }else{
            $('.header').fadeIn();
            $('.head').fadeOut();
        }if(top>497){
            $('.retrun-top').fadeIn();
        }else{
            $('.retrun-top').fadeOut();
        }
    })
    // 点击回到顶部
    $('.retrun-top').click(function(){
                     $('html ,body').animate({scrollTop: 0}, 300);
                     return false;
                });
    
    // 点击购物车
    $('.btn-y').on('click',function(){
        $('.cart').show();
    })
    $('.btn-red-r').on('click',function(){
        $('.cart').hide()
    })
    $('.occlude').on('click',function(){
        $('.cart').hide()
    })   
    
    i=0;    
    $('.picture').on('touchstart',function(m){
        startX6 = m.originalEvent.changedTouches[0].pageX;    
    $(".picture").one("touchmove", function(m) {
        moveEndX6 = m.originalEvent.changedTouches[0].pageX;
        X6 = moveEndX6 - startX6;

        // console.log(X6)
        if(X6<0 && i<=3){
            i++
            $('.box-main').stop().animate({left:'-'+i*414+'px'});
            $('.focus li').eq(i).attr('class','on').siblings().removeAttr('class','on');
        }
        if(X6>0 && i>=1){
            i--
            console.log(i)
            $('.box-main').stop().animate({left:'-'+i*414+'px'});
            $('.focus li').eq(i).attr('class','on').siblings().removeAttr('class','on');
        }
    
    })
    });

     var idx='';
     var cc='';
    // 添加产品入购物车
    // 颜色
$('.sku-cos span').click(function(){
    $(this).addClass('hue').siblings().removeClass('hue');
    idx=$(this).html();
    $('.porp span').html(idx+'&nbsp&nbsp&nbsp'+cc);
})
// 尺寸
$('.s-mach span').click(function(){
    $(this).addClass('hue').siblings().removeClass('hue');
    cc =$(this).html();
    $('.porp span').html(idx+'&nbsp&nbsp&nbsp'+cc);
})
var max =1;
// 数量
var xdx=1;
var manxxx=$('.pptd em').html();
$('.cool').click(function(){
    ++max
    $('.texte').val(max) 
    $('.pptd em').html(manxxx*max);
    xdx=max;
});

$('.mins').click(function(){
    --max
    if(max<2) max=1;
    $('.texte').val(max)  
    $('.pptd em').html(manxxx*max);
    xdx=max;
});
// ---

// $('.btn-showed').click(function(){
//    
// });

// function SETxxx(){
        name= $('.content').html();
        rmb= $('.pptd em').html();
        imgs= $('.map').attr('src');
        colx= $('.sku-cos span').eq(0).html();
        cxxx= $('.s-mach span').eq(0).html();
        vlxx= xdx;

        window.localStorage.setItem('nex',name);
        window.localStorage.setItem('rmbx',rmb);
        window.localStorage.setItem('imgsx',imgs);
        window.localStorage.setItem('colx',colx);
        window.localStorage.setItem('cxxx',cxxx);
        window.localStorage.setItem('vlxx',vlxx);


// }


});

