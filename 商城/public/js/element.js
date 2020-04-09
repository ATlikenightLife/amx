// import { template } from "handlebars"

function Flengx(){
    // 渲染列表数据
    // 热门推荐
        $.ajax({
            type : 'get',
            url : '/Category',
            dataType : 'json',
            success : function(data){
                // console.log(data);
                var html = template('indexTpl',{list : data});
                // console.log(html)
                // let list = data.list;
                $('.list').html(html);
                // console.log(666);
            }
        });
        // 家电热搜
        $.ajax({
            type : 'get',
            url : '/Category2',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl2',{list : data});
                $('.list2').html(html);
            }
        });


        // 手机分类 热门品牌
        $.ajax({
            type : 'get',
            url : '/Category3',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl3',{list : data});
                $('.list3').html(html);
            }
        });
        // 手机分类 手机通讯
        $.ajax({
            type : 'get',
            url : '/Category4',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl4',{list : data});
                $('.list4').html(html);
            }
        });
        // 手机分类 运营商
        $.ajax({
            type : 'get',
            url : '/Category5',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl5',{list : data});
                $('.list5').html(html);
            }
        });


        // 家用电器 厨房小电
        $.ajax({
            type : 'get',
            url : '/Category6',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl6',{list : data});
                $('.list6').html(html);
            }
        });
        // 家用电器 个护健康
        $.ajax({
            type : 'get',
            url : '/Category7',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl7',{list : data});
                $('.list7').html(html);
            }
        });

        
        // 电脑办公 热卖分类
        $.ajax({
            type : 'get',
            url : '/Category8',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl8',{list : data});
                $('.list8').html(html);
            }
        });
        // 电脑办公 电脑整机
        $.ajax({
            type : 'get',
            url : '/Category9',
            dataType : 'json',
            success : function(data){
                var html = template('indexTpl9',{list : data});
                $('.list9').html(html);
            }
        });
};

// index 的 底部商品 渲染
function indexArrmax(){
    $.ajax({
        type:'get',
        url:'/indexMax1',
        dataType:'json',
        success : function(data){
            var html = template('indexArr',{list : data});
            $('.listMX').append(html);
        }
    });
};


// ------------------------------------------------------


// ------------------------------------------------------