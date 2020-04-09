
window.onload = function(){
    // 接收到 传过来的参数
        var name = window.localStorage.getItem('nex'); 
        var rmb= window.localStorage.getItem('rmbx');
        var imgs=window.localStorage.getItem('imgsx');
        var colx= window.localStorage.getItem('colx');
        var cxxx= window.localStorage.getItem('cxxx');
        var vlxx=window.localStorage.getItem('vlxx');
        // console.log(vlxx);

        var data = {name,rmb,imgs ,colx,cxxx,vlxx};

        // console.log(data);
   
    $('.btn-red-r').unbind().click(function(){
        $('.cart').hide();
        $.ajax({
        
            type:'post',
            url:'/SPca',
            async : false,
            data : data,
            dataType:'json',
            success : function(data){
                window.location.href='/SPcar';
                // SP();
                
            }
        });
    });
    // function SP(){
    
        $.ajax({
            
            type:'get',
            url:'/SPmax',
            async : false,
            dataType:'json',
            success : function(data){
                console.log(data);
                var html = template('SPadd',{list : data});
                $('.section').html(html);
            }
        });
    // }
    
    
    
    


    // 编辑商品
    $('.choose').on('click',function(){
        var cos = $('.choose').html(); 
        console.log(cos);
        if(cos == '编辑商品'){
            $('.choose').html('完成')
            $('.delete').show();
            $('.total').hide();
            $('.round').removeClass('redO')
        }else if(cos == '完成'){
            $('.choose').html('编辑商品')
            $('.delete').hide();
            $('.total').show();
        }
    });
    // 全选
var o = $('.ooo')
o.on('click',function(){
    if(o.hasClass('redO')){
        $('.round').removeClass('redO');
        $('.clo').removeClass('clo2');
        pxt=0;
        $('.sum-col').html('￥'+pxt);
    }else{
        px1=$('.itn').eq(0).html();
        px2=$('.itn').eq(1).html();
        px3=$('.itn').eq(2).html();
        px4=$('.itn').eq(3).html();
        if(px2==undefined) px2=0;
        if(px3==undefined) px3=0;
        if(px4==undefined) px4=0;
        pxt=parseInt(px1)+parseInt(px2)+parseInt(px3)+parseInt(px4);
        $('.sum-col').html('￥'+pxt);
        $('.round').addClass('redO');
        $('.clo').addClass('clo2');
    }
})

// 返回
$('.turn').click(function(){
    history.back();
})



// ++++++++++++++++++++++ 
var niux =1;
var niuxxx=$('.itn').html();

$('.amount').click(function(){
    dsq=setInterval(function(){
        niux =$('.amount').val();
        $('.itn').html(niuxxx*niux);
    },1000);
})

$('.add').click(function(){
    clearInterval(dsq)
    ++niux
    $('.amount').val(niux) 
    $('.itn').html(niuxxx*niux);
    xdx=niux;
})

//-----------------------
$('.subtract').click(function(){
    clearInterval(dsq)
    --niux
    if(niux<2) niux=1;
    $('.amount').val(niux)  
    $('.itn').html(niuxxx*niux);
    xdx=niux;
})

































}
