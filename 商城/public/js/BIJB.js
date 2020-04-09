// 搜索框 右边的三点  点击事件

$('.duoyu').click(function(){
    $('.duojyu').toggle();
})
// 搜索框 右边的三点  点击事件 END

// 顶部固定栏
// 第二条的点击
var xd=1;
$('.DBgdshx-02 a').eq(0).click(function(){
    xd=++xd>1?0:xd;
    if(xd==0){
    $('.DBgdshx-02-a span i').eq(0).removeClass(' glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    $('.DBgdshx-02-TK').show();
    $('.DBgdshx-bg').show();
    }else if(xd==1){
    $('.DBgdshx-02-a span i').eq(0).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    $('.DBgdshx-02-TK').hide();
    $('.DBgdshx-bg').hide();
    }
});
$('.DBgdshx-bg').click(function(){
    $('.DBgdshx-02-a span i').eq(0).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    $('.DBgdshx-02-TK').hide();
    $('.DBgdshx-bg').hide();
})

// 点击替换的字符串   和点击效果
$('.DBgdshx-02-TK ul li').click(function(){
    $(this).attr('id','x-02-TK1').siblings().removeAttr('id','x-02-TK1');
    Xbao=$(this).index();
    THzfc = $(this).html();
    $('.DBgdshx-02-a span').eq(0).text(THzfc).append('<i class="glyphicon glyphicon-triangle-top"></i>');
})

// 顶部固定栏 END
//点击切换样式 
var CLIxx=1;
$('.CLI-qh').click(function(){
    CLIxx=++CLIxx>1?0:CLIxx;
    if(CLIxx==0){
    $(this).removeClass('CLI-qh-1').addClass('CLI-qh-2');
    $('.blj-nor div').removeClass('blj-nor-xr').addClass('blj-nor-xr-2');}
    else if(CLIxx==1){
    $(this).removeClass('CLI-qh-2').addClass('CLI-qh-1');
    $('.blj-nor div').removeClass('blj-nor-xr-2').addClass('blj-nor-xr');}
})

//点击切换样式 END
