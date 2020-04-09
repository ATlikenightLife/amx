
const db = require('./model/database.js');
// 热门分类方法
exports.allUsers = function(req,res){
    let sql = 'select * from Category limit 0,15';
    db.base(sql,null,(result)=>{
        res.json(result);
        // console.log(result);
    });
};
// 家电热搜方法
exports.allUsers2 = function(req,res){
    let sql = 'select * from Category limit 15,3';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};


// 手机分类  热门品牌的方法
exports.allUsers3 = function(req,res){
    let sql = 'select * from Category limit 18,12';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};
// 手机分类  手机通讯的方法
exports.allUsers4 = function(req,res){
    let sql = 'select * from Category limit 30,9';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};
// 手机分类  运营商的方法
exports.allUsers5 = function(req,res){
    let sql = 'select * from Category limit 39,4';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};


// 家用电器  厨房小电的方法
exports.allUsers6 = function(req,res){
    let sql = 'select * from Category limit 43,22';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};
// 家用电器  个护健康的方法
exports.allUsers7 = function(req,res){
    let sql = 'select * from Category limit 65,8';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};


// 电脑办公  热卖分类的方法
exports.allUsers8 = function(req,res){
    let sql = 'select * from Category limit 73,12';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};
// 电脑办公  电脑整机的方法
exports.allUsers9 = function(req,res){
    let sql = 'select * from Category limit 85,12';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};


// ------------------------------------------------------
// 主页底部商品渲染
function arrxxx(){
        arrx = [];//存放随机数的数组
        arrLen = 30;//数组长度，也用来限制范围
      for(var i=0; i<6; i++){
        var radomNum = parseInt(Math.random() * arrLen) + 1;//对利用random生成的随机数处理后得到1~5的整数
        if(arrx.indexOf(radomNum) == -1){
          //indexOf返回值为-1表示数组中没有和新随机数重复的值
          arrx.push(radomNum);
        }else{
          //有重复值i--，不添加重复的值到数组中，并再循环一次
          i--;
        }
      }
    // console.log(arrx);
};
    


exports.arrxMax =function(req,res){
    arrxxx();
    let sql ='select * from bha where id in('+arrx[0]+','+arrx[1]+','+arrx[2]+','+arrx[3]+','+arrx[4]+','+arrx[5]+')';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
};



//详情页面

exports.deql = function(req,res){
    let id = req.params.id;  //获取id
    // console.log(id)
    let sql = 'select * from  bha where id=?';
    let data = [id];
    // console.log(sql)
    db.base(sql,data,(result)=>{
          res.render('details',{data:result});
    });
}


// 注册
exports.register = function(req,res){
    let info = req.body;
    console.log(info);
    let sql = 'insert into users (username,password) values (?,?)';
    let data = [info.username,info.password];
    db.base(sql,data,function(result){
        res.json(result);
        console.log(result);
    })
}

exports.selectUsername = function(req,res){
    let info = req.body;
    console.log(info);
    let sql = 'select * from users where username=?';
    let data = [info.username];
    console.log(data);
    db.base(sql,data,function(result){
        res.json(result);
        console.log(result);
    });
}

// 登录
exports.login = function(req,res){
    let info = req.body;
    let sql = 'select * from users where username=? and password=?';
    let data = [info.username,info.password];
    db.base(sql,data,function(result){
        res.json(result);
        console.log(result)
        
    });
}

// ------------------------------------------------------
// 搜索框部分

// exports.BLJB=function(req,res){
//     let sql ='select * from bha where name like'+'"%'+name+'%"';
//     db.base(sql,null,(result)=>{
//         res
//     })
// };
exports.BLJB =function(req,res){
    let info = req.body;
    // console.log(info)
    let sql = 'select * from bha where name like'+'"%'+info.name+'%"';
    let data =[info.name]
    db.base(sql,data,(result)=>{
        // res.json(result);
        res.render('BIJB',{data:result});
        // console.log(result)
    })
}



// 注册
exports.register = function(req,res){
    let info = req.body;
    // console.log(info);
    let sql = 'insert into users (username,password) values (?,?)';
    let data = [info.username,info.password];
    db.base(sql,data,function(result){
        res.json(result);
        // console.log(result);
    })
}

exports.selectUsername = function(req,res){
    let info = req.body;
    // console.log(info);
    let sql = 'select * from users where username=?';
    let data = [info.username];
    // console.log(data);
    db.base(sql,data,function(result){
        res.json(result);
        // console.log(result);
    });
}

// 登录
exports.login = function(req,res){
    let info = req.body;
    let sql = 'select * from users where username=? and password=?';
    let data = [info.username,info.password];
    db.base(sql,data,function(result){
        res.json(result);
        // console.log(result)
        
    });
}


// -------------------------------------------------------


exports.Sp = function(req,res){
    let su = req.body;
    // console.log(su)
    // console.log(11111)
    let sql ='insert into maxxx (name,rmb,imgs,colx,cxxx,vlxx) values (?,?,?,?,?,?)';
    let data = [su.name,su.rmb,su.imgs,su.colx,su.cxxx,su.vlxx];
    db.base(sql,data,function(result){
        res.json(result);
        // console.log(result);
    })
}


exports.SPmax =function(req,res){
    let sql='select * from maxxx';
    db.base(sql,null,function(result){
        res.json(result);
        // console.log(result);
    })
}
