/*
    实现管理系统后台接口
*/
let path = require('path');     // 处理路径模块
let hbs = require('hbs');       // 加载模板模块
let querystring = require('querystring');
let express = require('express');
let app = express();        // 接收实例化出来的对象
let colors = require('colors');     // 加载颜色模块
let router = require('./router.js');
let bodyParser = require('body-parser');

// 设置端口号变量
app.set('port',process.env.POST || 8080);

// 启动服务器
app.listen(app.get('port'),function(){
    console.log('服务器成功启动'.green);
});

// 设置views变量,作为视图存放目录
app.set('views',path.join(__dirname,'views'));

// 设置使用模板的后缀名
app.set('view engine','html');

// 运行模板方法9+
// 设置静态文件目录，所有不是HTML的请求，都会指向public
app.use(express.static( 'public'));
// 路径变更，请求静态资源路径重新定，不然请求路径前会多出elements
app.use('/elements',express.static(path.join(__dirname,'public')));
// 路径变更，请求静态资源路径重新定，不然请求路径前会多出index
app.use('/index',express.static(path.join(__dirname,'public')));

// 处理请求参数
// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }));

// 请求路由跳转
app.use(router);

// 用户信息表路由
app.get('/elements',function(req,res){
    res.sendFile(path.join(app.get('views'),'elements.html'));
});

// 首页路由
app.get('/',function(req,res){
    res.sendFile(path.join(app.get('views'),'index.html'));
});
app.get('/index',function(req,res){
    res.sendFile(path.join(app.get('views'),'index.html'));
});