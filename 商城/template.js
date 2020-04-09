/*
    实现管理系统后台接口
    npm init -y
npm i express --save  //express模块
npm i mysql --save //数据库模块
npm i colors  --save  //颜色模块
npm i querystring  --save //字符串模块
npm i hbs  --save   //加载模板模块

npm i body-parser  --save //解析json
*/
let path = require('path');     // 处理路径模块
let hbs = require('hbs');       // 加载模板模块
let querystring = require('querystring');
let express = require('express');
let app = express();        // 接收实例化出来的对象
let colors = require('colors');     // 加载颜色模块
let router = require('./routes/router.js');
let bodyParser = require('body-parser');

// 设置端口号变量
app.set('port',process.env.POST || 8090);

// 启动服务器
app.listen(app.get('port'),function(){
    console.log('服务器成功启动'.green);
});

// 设置views变量,作为视图存放目录
app.set('views',path.join(__dirname,'views'));

// 设置使用模板的后缀名
app.set('view engine','html');

// 运行模板方法
app.engine('html',hbs.__express);

// 设置静态文件目录，所有不是HTML的请求，都会指向public
app.use(express.static('public'));
// 路径变更，请求静态资源路径重新定，不然请求路径前会多出elements
app.use('/BIJB',express.static(path.join(__dirname,'public')));
// 路径变更，请求静态资源路径重新定，不然请求路径前会多出index
app.use('/Fleng',express.static(path.join(__dirname,'public')));

app.use('/',express.static(path.join(__dirname,'public')));

app.use('/details',express.static(path.join(__dirname,'public')));

app.use('/login',express.static(path.join(__dirname,'public')));
app.use('/register',express.static(path.join(__dirname,'public')));
app.use('/admin',express.static(path.join(__dirname,'public')));
app.use('/shoping',express.static(path.join(__dirname,'public')));

// 处理请求参数
// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }));

// 请求路由跳转
app.use(router);

// 搜索详情路由
app.get('/BIJB',function(req,res){
    res.sendFile(path.join(app.get('views'),'BIJB.html'));
});

// 分类路由
app.get('/Fleng',function(req,res){
    res.sendFile(path.join(app.get('views'),'Fleng.html'));
});
// 首页路由
app.get('/',function(req,res){
    res.sendFile(path.join(app.get('views'),'index.html'));
});
// 详情路由
app.get('/details',function(req,res){
    res.sendFile(path.join(app.get('views'),'details.html'));
});
// 登录页面
app.get('/login',function(req,res){
    res.sendFile(path.join(app.get('views'),'login.html'));
});
// 注册页面
app.get('/register',function(req,res){
    res.sendFile(path.join(app.get('views'),'register.html'));
});
// 用户登录完页面
app.get('/admin',function(req,res){
    res.sendFile(path.join(app.get('views'),'admin.html'));
});
// 购物车
app.get('/SPcar',function(req,res){
    res.sendFile(path.join(app.get('views'),'SPcar.html'));
});