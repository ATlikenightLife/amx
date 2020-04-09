
// 引入数据库api
const db = require('./database.js');

// 显示用户信息
exports.allUsers = function(req,res){
    let sql = 'select * from users';
    db.base(sql,null,(result)=>{
        res.json(result);
        // console.log(result);
    });
};

// 无刷新分页显示用户信息
exports.userList = function(req,res){
    let count = req.params.count;   // 接收传过来的总用户数
    // console.log(count);
    let page_num = req.params.p;    // 接收传递过来的页码参数
    let pro_page = 5;   // 每页显示数
    let offset = (page_num-1) * pro_page;     // 获取数据的偏移量
    let sql = 'select * from users limit '+offset+','+pro_page;

    db.base(sql,null,(result)=>{
        // console.log(result);
        // console.log(count);
        let count_page = Math.ceil(count/pro_page);
        // console.log(count_page);
        // 组装页码的html代码
        let page_html = '';
        // 准备选中状态的css代码
        let css = '';
        page_html += '<li><a href="/users/1/'+count+'">首页</a></li>';
        if(page_num > 1){
            page_html+='<li><a href="/users/'+(page_num*1-1)+'/'+count+'">上一页</a></li>';
        }
        if(page_num - 3 > 0){
            page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
        }
        for(let i=1;i<=count_page;i++){
            css = (page_num == i) ? 'am-active' : '';   // 根据页码赋值类名
            if(page_num - i > 3 || i - page_num > 3){
                page_html += '<li class="'+css+'" style="display:none"><a href="/users/'+i+'/'+count+'">'+i+'</a></li>';
                // page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
            }else{page_html += '<li class="'+css+'"><a href="/users/'+i+'/'+count+'">'+i+'</a></li>';}
            // page_html += '<li class="'+css+'"><a href="/users/'+i+'/'+count+'">'+i+'</a></li>';
        }
        // console.log(page_num);
        // console.log(count_page);
        if(page_num  < count_page - 3){
            // console.log(page_num);
            // console.log(count_page);
            page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
        }
        if(page_num < count_page){
            page_html+='<li><a href="/users/'+(page_num*1+1)+'/'+count+'">下一页</a></li>';
        }
        page_html += '<li><a href="/users/'+count_page+'/'+count+'">尾页</a></li>';

        var json = {res:result,phtml:page_html}

        res.json(json);
        // console.log(json);
        // console.log(page_html);
        // console.log(count);
        // console.log(result);
    });
    
}

// 查询所有的用户数
exports.getCount = function(req,res){
    let sql = 'select count(*) count from users';
    db.base(sql,null,function(result){
        res.json(result);
        // console.log(result);
    });
}

// 模糊查询
exports.likesList = function(req,res){
    let count = req.params.count;   // 接收传过来的总用户数
    console.log(count);
    let page_num = req.params.p;    // 接收传递过来的页码参数
    let pro_page = 5;   // 每页显示数
    let offset = (page_num-1) * pro_page;     // 获取数据的偏移量
    let sql = 'select * from users where concat(id,username,password,name,sex,address,email,phone) like ? limit '+offset+','+pro_page;
    let info = req.body;
    let data = ['%'+info.data+'%'];
    db.base(sql,data,(result)=>{
        // console.log(result);
        // console.log(count);
        let count_page = Math.ceil(count/pro_page);
        // console.log(count_page);
        // 组装页码的html代码
        let page_html = '';
        // 准备选中状态的css代码
        let css = '';
        page_html += '<li><a href="/likes/s/1/'+count+'">首页</a></li>';
        if(page_num > 1){
            page_html+='<li><a href="/likes/s/'+(page_num*1-1)+'/'+count+'">上一页</a></li>';
        }
        if(page_num - 3 > 0){
            page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
        }
        for(let i=1;i<=count_page;i++){
            css = (page_num == i) ? 'am-active' : '';   // 根据页码赋值类名
            if(page_num - i > 3 || i - page_num > 3){
                page_html += '<li class="'+css+'" style="display:none"><a href="/likes/s/'+i+'/'+count+'">'+i+'</a></li>';
                // page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
            }else{page_html += '<li class="'+css+'"><a href="/likes/s/'+i+'/'+count+'">'+i+'</a></li>';}
            // page_html += '<li class="'+css+'"><a href="/users/'+i+'/'+count+'">'+i+'</a></li>';
        }
        // console.log(page_num);
        // console.log(count_page);
        if(page_num  < count_page - 3){
            // console.log(page_num);
            // console.log(count_page);
            page_html +='<li style="margin:0 16px 10px 10px"><p>...</p></li>'
        }
        if(page_num < count_page){
            page_html+='<li><a href="/likes/s/'+(page_num*1+1)+'/'+count+'">下一页</a></li>';
        }
        page_html += '<li><a href="/likes/s/'+count_page+'/'+count+'">尾页</a></li>';

        var json = {res:result,phtml:page_html}

        res.json(json);
        console.log(json);
        // console.log(page_html);
        // console.log(count);
        // console.log(result);
    });
    
}

// 模糊查询总数
exports.getLCount = function(req,res){
    let info = req.body;
    console.log(info);
    let sql = 'select count(*) count from users where concat(id,username,password,name,sex,address,email,phone) like ?';
    let data = ['%'+info.data+'%'];
    console.log(data);
    db.base(sql,data,function(result){
        res.json(result[0].count);
        console.log(result[0].count);
    });
}

// 添加用户信息
exports.addUser = function(req,res){
    let info = req.body;
    let sql = 'insert into users set ?';
    db.base(sql,info,(result)=>{
        if(result.affectedRows == 1){
            res.json({flag : 1});
        }else{
            res.json({flag : 2});
        }  
    });
};

// 根据id查找信息
exports.getUserById = function(req,res){
    let id = req.params.id;
    // console.log(id)
    let sql = 'select * from users where id=?';
    let data = [id];
    db.base(sql,data,(result)=>{
        res.json(result[0]);
    });
};

// 编辑用户信息
exports.editUser = function(req,res){
    let info = req.body;
    let sql = 'update users set username=?,password=?,name=?,sex=?,address=?,email=?,phone=?,pichead=? where id=?';
    let data = [info.username,info.password,info.name,info.sex,info.address,info.email,info.phone,info.pichead,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.json({flag : 1});
        }else{
            res.json({flag : 2});
        }  
    });
};

// 删除用户信息
exports.deleteUser = function(req,res){
    let id = req.params.id;
    let sql = 'delete from users where id=?';
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.json({flag : 1});
        }else{
            res.json({flag : 2});
        } 
    });
};

