// import { setFlagsFromString } from "v8";
// import { deleteUser } from "../../service";
// import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
// import { template } from "handlebars"
$(function(){
    var p = 1;
    // 初始化渲染列表数据
    function initList(){
        $('#page').on('click','a',function(){
            var p1 = $(this).attr("href").substr($(this).attr("href").indexOf("/users/")+7);
            p = p1.substring(0,p1.indexOf('/'));
            console.log(p)
            initList(p);
            return false;
        });
    

        $.ajax({
            type : 'get',
            url : '/users/count',
            dataType : 'json',
            success : function(data){
                // console.log(data);
                // $('#count').html(data);
                var html = template('indexTpl1',{list : data});
              
                $('#count').html(html);
                // console.log($('#count').text());
                var count = $('#count').text();
                start(p,count);
               
            }
        });
    }

    initList();
    
    // 渲染主要数据
    function start(p,count){
        $.ajax({
            type : 'get',
            url : '/users/' + p +'/'+count,
            dataType : 'json',
            success : function(result){
                // page_html
                // console.log(count);
                console.log(result);
                // console.log(page_html);
                // 渲染列表数据
                var html = template('indexTpl',{list : result.res});
                $('#list').html(html);
                // console.log(page)
                $('#page').html(result.phtml);
                // console.log($('#page a'))
                // 必须在渲染完成内容之后才可以操作DOM标签
                $('#list').find('tr').each(function(index,element){
                    var td = $(element).find('td:eq(10)');
                    var id = $(element).find('td:eq(1)').text();
                    // 绑定编辑用户的单击事件
                    td.find('a:eq(0)').click(function(){
                        editUser(id);
                        // console.log('ws   '+id);
                    });
                    //绑定删除用户的单击事件
                    td.find('a:eq(1)').click(function(){
                        deleteUser(id);
                        console.log(2);
                    });

                    // 绑定添加信息单击事件
                    addUser();
                    // 重置表单
                    var form = $('#addUserForm');
                    form.get(0).reset();
                    form.find('input[type=hidden]').val('');
                });
            }

        });
    }

    // 删除图书信息
    function deleteUser(id){
        $.ajax({
            type : 'delete',
            url : '/users/user/' + id,
            dataType : 'json',
            success : function(data){
                // 删除用户信息之后重新渲染数据列表
                if(data.flag == '1'){
                    initList();
                }
            }
        });
    }

    // 编辑用户信息
    function editUser(id){
    
        var form = $('#addUserForm');
        // 先根据数据id查询最新的数据
        console.log(id);
        $.ajax({
            type : 'get',
            url : '/ed/eds/'+id,
            dataType : 'json',
            success : function(data){
                console.log(data);
                // console.log('我到了')
                // 初始化弹窗
                var mark = new MarkBox(400,540,'编辑用户',form.get(0));
                mark.init();
                // 填充表单数据
                form.find('input[name=id]').val(data.id);
                form.find('input[name=username]').val(data.username);
                form.find('input[name=password]').val(data.password);
                form.find('input[name=name]').val(data.name);
                form.find('input[name=sex]').val(data.sex);
                form.find('input[name=address]').val(data.address);
                form.find('input[name=email]').val(data.email);
                form.find('input[name=phone]').val(data.phone);
                form.find('input[name=pichead]').val(data.pichead);
                // 对表单提交按钮重新绑定单击事件
                form.find('input[type=button]').unbind('click').click(function(){
                    // 编辑完成数据之后重新提交表单
                    $.ajax({
                        type : 'put',
                        url : '/users/user/',
                        data : form.serialize(),
                        dataType : 'json',
                        success : function(data){
                            if(data.flag == '1'){
                                // 隐藏弹窗
                                mark.close();
                                // 重新渲染数据列表
                                
                                initList();
                            }
                        }
                    });
                });
            }
        });
    }

    // 添加用户信息
    function addUser(){
        // form.get(0).reset();
        $('#addUser').click(function(){
            // console.log(666)
            var form = $('#addUserForm');
            // console.log(form);
            // 实例化弹窗对象
            var mark = new MarkBox(400,540,'添加用户',form.get(0));
            form.get(0).reset();
            mark.init();
            form.find('input[type=button]').unbind('click').click(function(){
                $.ajax({
                    type : 'post',
                    url : '/users/user',
                    data : form.serialize(),
                    dataType : 'json',
                    success : function(data){
                        // console.log(data);
                        if(data.flag == '1'){
                            // 关闭弹窗
                            mark.close();
                            // 添加图书成功之后重新渲染数据列表
                            initList();
                        }              
                    }
                });
            });
        });
    }













    // // 模糊查询数据
    // $('#selectB').click(function(){
    //     var p = 1;
    //     function seleinit(){
    //         $('#page').on('click','a',function(){
    //             var p1 = $(this).attr("href").substr($(this).attr("href").indexOf("/users/")+7);
    //             p = p1.substring(0,p1.indexOf('/'));
    //             console.log(p)
    //             seleinit(p);
    //             return false;
    //         });

    //         var selectU = $('#selectU').val();
    //         console.log(selectU);
    //         // let data = [selectU];
    //         // console.log(data)
    //         $.ajax({
    //             type : 'post',
    //             url : '/likeCount',
    //             data : {data:selectU},
    //             dataType : 'json',
    //             success : function(data){
    //             console.log(data);
    //             var html = template('indexTpl1',{list : data});
    //                 console.log(html)
    //             $('#count').html(html);

    //             var count = $('#count').text();
    //             starts(p,count);
    //             }
    //         });
    //     }

    //     seleinit();

    //     function starts(p,count){
    //         var selectU = $('#selectU').val();
    //         $.ajax({
    //             type : 'post',
    //             url : '/likes/s/' + p +'/'+count,
    //             data : {data:selectU},
    //             dataType : 'json',
    //             success : function(result){
    //                 console.log(result);
    //                 var html = template('indexTpl',{list : result.res});
    //                 $('#list').html(html);
    //                 $('#page').html(result.phtml);
    //                 $('#list').find('tr').each(function(index,element){
    //                     var td = $(element).find('td:eq(10)');
    //                     var id = $(element).find('td:eq(1)').text();
    //                     // 绑定编辑用户的单击事件
    //                     td.find('a:eq(0)').click(function(){
    //                         editSelect(id);
    //                         // console.log('ws   '+id);
    //                     });
    //                     //绑定删除用户的单击事件
    //                     td.find('a:eq(1)').click(function(){
    //                         deleteSelect(id);
    //                         console.log(2);
    //                     });
    
    //                     // 绑定添加信息单击事件
    //                     addSelect();
    //                     // 重置表单
    //                     var form = $('#addUserForm');
    //                     form.get(0).reset();
    //                     form.find('input[type=hidden]').val('');
    //                 });
    //             }
    //         });
    //     }

    //     // 删除图书信息
    // function deleteSelect(id){
    //     $.ajax({
    //         type : 'delete',
    //         url : '/users/user/' + id,
    //         dataType : 'json',
    //         success : function(data){
    //             // 删除用户信息之后重新渲染数据列表
    //             if(data.flag == '1'){
    //                 seleinit();
    //             }
    //         }
    //     });
    // }

    // // 编辑用户信息
    // function editSelect(id){
    
    //     var form = $('#addUserForm');
    //     // 先根据数据id查询最新的数据
    //     console.log(id);
    //     $.ajax({
    //         type : 'get',
    //         url : '/ed/eds/'+id,
    //         dataType : 'json',
    //         success : function(data){
    //             console.log(data);
    //             // console.log('我到了')
    //             // 初始化弹窗
    //             var mark = new MarkBox(400,540,'编辑用户',form.get(0));
    //             mark.init();
    //             // 填充表单数据
    //             form.find('input[name=id]').val(data.id);
    //             form.find('input[name=username]').val(data.username);
    //             form.find('input[name=password]').val(data.password);
    //             form.find('input[name=name]').val(data.name);
    //             form.find('input[name=sex]').val(data.sex);
    //             form.find('input[name=address]').val(data.address);
    //             form.find('input[name=email]').val(data.email);
    //             form.find('input[name=phone]').val(data.phone);
    //             form.find('input[name=pichead]').val(data.pichead);
    //             // 对表单提交按钮重新绑定单击事件
    //             form.find('input[type=button]').unbind('click').click(function(){
    //                 // 编辑完成数据之后重新提交表单
    //                 $.ajax({
    //                     type : 'put',
    //                     url : '/users/user/',
    //                     data : form.serialize(),
    //                     dataType : 'json',
    //                     success : function(data){
    //                         if(data.flag == '1'){
    //                             // 隐藏弹窗
    //                             mark.close();
    //                             // 重新渲染数据列表
                                
    //                             seleinit();
    //                         }
    //                     }
    //                 });
    //             });
    //         }
    //     });
    // }

    // // 添加用户信息
    // function addSelect(){
    //     // form.get(0).reset();
    //     $('#addUser').click(function(){
    //         // console.log(666)
    //         var form = $('#addUserForm');
    //         // console.log(form);
    //         // 实例化弹窗对象
    //         var mark = new MarkBox(400,540,'添加用户',form.get(0));
    //         form.get(0).reset();
    //         mark.init();
    //         form.find('input[type=button]').unbind('click').click(function(){
    //             $.ajax({
    //                 type : 'post',
    //                 url : '/users/user',
    //                 data : form.serialize(),
    //                 dataType : 'json',
    //                 success : function(data){
    //                     // console.log(data);
    //                     if(data.flag == '1'){
    //                         // 关闭弹窗
    //                         mark.close();
    //                         // 添加图书成功之后重新渲染数据列表
    //                         seleinit();
    //                     }              
    //                 }
    //             });
    //         });
    //     });
    // }
        
    // });
    
});

