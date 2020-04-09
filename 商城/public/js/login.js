window.onload = function(){

    // 获取对象
    var id = document.getElementById('name');//用户名
    var pwd = document.getElementById('pwd');//密码
    var x1 = document.getElementById('x1')  //清除按钮1
    var x2 = document.getElementById('x2') // 清除按钮2
    var eyes = document.getElementById('eyes');//密码显示隐藏眼睛
    var user = document.getElementById('user');//提示框
    var mima = document.getElementById('mima');// 密码提示框
    var dl = document.getElementById('skt')//登录按钮

    eyes.onclick = function (){
        if(pwd.type == 'password'){
            eyes.className = 'oppenwd'
            pwd.type = 'text'
        }else if(pwd.type == 'text'){  
            eyes.className = 'offpwd'          
            pwd.type = 'password';
        }
    }
    // 点击按钮跳转方法
    $('#skt').blur(function(){ 
        if(id.value == ''){
           user.innerHTML = '用户名不能为空'
           return false; 
        }else{
            user.innerHTML = '';
        }if(pwd.value == ''){
            mima.innerHTML = '密码不能为空'
            return false;
        }else {
            mima.innerHTML = ''
    }
        // 用户名正则匹配  
        //只能包括数字字母的组合，输入长度最短为4 最长15
        var mz = /^[A-Za-z0-9]{4,15}$/
        // 密码至少包含 数字和英文，长度6-15
        var obq = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/ 
        if (!mz.test(id.value)){
            user.innerHTML = '您输入的用户不存在'
            id.focus(); // 输入不对重新获取焦点
            return false;
        } else{
            user.innerHTML = '';
        } if(!obq.test(pwd.value)){
            mima.innerHTML = '您的用户密码输入错误'
            pwd.focus();
            return false;
        }
    });

    // 键盘弹起事件改变注册按钮颜色
    window.onkeyup = function(){
        if(id.value != '' && pwd.value != ''){
            dl.className = 'omg';
        }else{
            dl.className = 'git'
        }
    }
    // 失去焦点隐藏x1;
    id.onblur = function(){
        setTimeout(function(){
            x1.style.display = 'none'
        },10)
    }
    pwd.onblur = function(){
        setTimeout(function(){
            x2.style.display = 'none'
        },10)
    }
    // 获取焦点显示x
    id.onfocus = function(){
        x1.style.display = 'block'
    }
    pwd.onfocus = function(){
        x2.style.display = 'block'
    }
    // 点击清空所有值
    x1.onclick = function(){
        id.focus();
        id.value = '';
        dl.className = 'git'
    }
    x2.onclick = function(){
        pwd.focus();
        pwd.value = '';
        dl.className = 'git'
    }

}
$(function(){
    var form = $('#loform');

    form.find('input[type=button]').unbind('click').click(function(){
        $.ajax({
        type:'post',
        url:'/login',
        data:form.serialize(),
        dataType:'json',
        success: function(data){
             var  td = data[0].username
             var  jimg = data[0].pichead
            //  console.log(data[0].img)
            //  var  td = data[0].
             console.log(td)
            if(data.length > 0 ){
                window.location.href ="/admin";   //进入页面
            // console.log(td)
               window.localStorage.setItem('dd',td)  //获取用户名
               window.localStorage.setItem('yd',jimg)  //获取用户名
            }else{
                $('.ts').html('账号或密码不正确');
            }
        }
        });
    });
});