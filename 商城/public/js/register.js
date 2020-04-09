window.onload = function(){
    // 获取对象
    var omg = document.getElementById('app');
    var uid = document.getElementById('urname');
    var uipwd = document.getElementById('password');
    var uipawd2 = document.getElementById('password2');
    var user = document.getElementById('usr');
    var pwd = document.getElementById('pwd');
    var pwd2 = document.getElementById('pwd2');
    var x1 = document.getElementById('x1')
    var x2 = document.getElementById('x2')
    var x3 = document.getElementById('x3')
 //    键盘弹起事件改变注册按钮颜色
 window.onkeyup =function () {
     if (uid.value != '' && uipwd.value != '' && uipawd2.value != '') {
         omg.className = 'omg';
     }else{
         omg.className = 'git'
     }
 }
 // 失去焦点事件隐藏x
 uid.onblur = function (){
     setTimeout(() => {
         x1.style.display = 'none'
         
     }, 10);
 }
 uipwd.onblur = function (){
     setTimeout(() => {
         x2.style.display = 'none'
         
     }, 10);
 }
 uipawd2.onblur = function (){
     setTimeout(() => {
         x3.style.display = 'none'
         
     }, 10);
 }
 // 获取焦点显示x
 uid.onfocus = function (){
         x1.style.display = 'block'
 }
 uipwd.onfocus = function (){
         x2.style.display = 'block'
 }
 uipawd2.onfocus = function (){
         x3.style.display = 'block'
 } 
 // 点击x清空所有值
 x1.onclick = function (){
     uid.focus();
     uid.value = '';
     omg.className = 'git'
 }
 x2.onclick = function (){
     uipwd.focus();
     uipwd.value = '';
     omg.className = 'git'
 }
 x3.onclick = function (){
     uipawd2.focus();
     uipawd2.value = '';
     omg.className = 'git'
 } 


 //  声明一个空对象
 var eg = {};
 //  //   定义一个公共函数获取ID元素，减少代码量，提高代码服用率
 // eg.$ = function(id){
 //     return document.getElementById(id);
 // };
 eg.regCheck = function () {
     // var uid =eg.$('urname'); //获取用户输入框
     // var uipwd =eg.$('password');//获取密码输入框
     // var uipawd2 =eg.$('password2');//获取二次密码输入框
     // var usr =eg.$('usr');//获取提示span标签
     // var pwd =eg.$('pwd');//获取提示span标签
     // var pwd2 =eg.$('pwd2');//获取提示span标签
     // var  x1 = eg.$('x1')
     // var  x2 = eg.$('x2')
     // var  x3 = eg.$('x3')

     if (uid.value == '') {
         usr.innerHTML = '用户名不能为空'
         return false;
     } else {
         usr.innerHTML = '';
     } if (uipwd.value == '') {
         pwd.innerHTML = '密码不能为空'
         return false;
     } else {
         pwd.innerHTML = '';
     } if (uipawd2.value == '') {
         pwd2.innerHTML = '密码不能为空'
         return false;
     } else {
         pwd2.innerHTML = '';
     } if (uipwd.value != uipawd2.value) {
         pwd2.innerHTML = '两次密码不一样'
         return false;
     }
     // 用户名正则匹配 ^
     //只能包括数字字母的组合，输入长度最短为4 最长15
     if(!new RegExp("^[A-Za-z0-9]{4,15}$").test(uid.value)){
         usr.innerHTML  = '您的用户格式不对'
         uid.focus();  //输出不对重新获取焦点
         return false;
             // 密码至少包含 数字和英文，长度6-15
     }else{
         usr.innerHTML = '';
     } if(!new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$").test(uipwd.value)){
         pwd.innerHTML  = '您的密码至少有字母和数字'
         uipwd.focus();  //输出不对重新获取焦点
         return false;
     }else if(!new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$").test(uipawd2.value)){
         pwd2.innerHTML  = '您的密码至少有字母和数字'
         uipwd2.focus();  //输出不对重新获取焦点
         return false;

     }else if(uid.value == '' ){
         return false
     }else if(uipwd.value == ''){
        return false
     }else if(uipwd2.value == ''){
         return false
     }
     return true;
 };
}

// $(function(){
//     var form = $('#reform');
//     form.find('input[type=button]').unbind('click').click(function(){
//         $.ajax({
//             type : 'post',
//             url : '/register',
//             data : form.serialize(),
//             dataType : 'json',
//             success : function(data){
//                 console.log(data);
//                 console.log(data.length);
//                 if(data != []){
//                     window.location.href ="/login"; 
//                     console.log(1)
//                 }else{
//                     console.log(2)
//                 }
//             }
//         });
//     });
// });

$(function(){
    var form = $('#reform');
    form.find('input[type=button]').unbind('click').click(function(){
        $.ajax({
            type : 'post',
            url : '/seletR',
            data : form.serialize(),
            dataType : 'json',
            success : function(data){
                console.log(data);
                console.log(data.length);
                if(data.length > 0){
                    console.log('用户已存在');
                }else{
                    $.ajax({
                        type : 'post',
                        url : '/register',
                        data : form.serialize(),
                        dataType : 'json',
                        success : function(data){
                            console.log(data);
                            console.log(data.length);
                            if(data != []){
                                window.location.href ="/login"; 
                                console.log(1)
                            }else{
                                console.log(2)
                            }
                        }
                    });
                }
            }
        })
        
    });
});