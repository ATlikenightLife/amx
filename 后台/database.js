/*
    封装操作数据库的通用api
*/
let mysql = require('mysql');   // 加载数据库模块   npm i mysql -D
let colors = require('colors');     // 加载颜色模块

exports.base = function(sql,data,callback){

    // 创建数据库的连接
    let con = mysql.createConnection({
        // 数据库的设置
        host:"192.168.1.70",   // 服务器地址
        user:"root",        // 用户名
        password:"root",    // 密码
        port:"3306",        // 数据库端口
        database:"jd"      // 需要连接的数据库名字
    });

    // 进行连接
    con.connect(function(err){
        // if(err){
        //     console.log('连接失败'.red);
        //     return;
        // }
        // console.log('数据库连接成功'.green);
    });

    // 操作数据库(操作是异步的))
    con.query(sql,data, function(error, results, fields) {
        if (error) throw error;
        // console.log('表book中共有', results[0].total + '条');
        callback(results);
    });

    // 关闭数据库
    con.end();
    
}