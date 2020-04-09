mysql --default-character-set=latin1 -uroot -proot

set names gbk;  /*设置中文*/
-- 创建数据库
create database  jd;
-- 查看数据表
show databases ;

-- 进入数据库
use jd;

-- 用户表
create table users(
        id	int not null auto_increment primary key,
        username	varchar(32)  not null,
        name	varchar(16) not null ,
        pass	char(32) not null ,
        sex	tinyint(1) not null ,
        address	varchar(255) not null ,
        code	char(6) not null ,
        phone	varchar(16) not null ,
        email	varchar(50) not null ,
        state	tinyint(1) not null ,
        state1	tinyint(2) not null ,
        state2	tinyint(3) not null ,
        addtime	int not null 
);
-- 商品分类表
create table type(
    id int unsigned not null auto_increment primary key,
    name varchar(32) not null ,
    pid int not null ,
    path varchar(255) not null
);
-- 订单表
create table goods(
    id int unsigned not null auto_increment primary key,
    typeid int not null ,
    goods varchar(32) not null,
    company varchar(50) not null,
    descr   text   not null,
    price double(6,2) not null,
    picname varchar(255) not null,
    state  tinyint(1) not null,
    state1 tinyint(2) not null,
    state2 tinyint(3) not null,
    store int not null ,
    num int not null ,
    clicknum int not null ,
    addtime int not null ,
    foreign key(typeid) references author_detail(id)
);
-- 详细表
create table orders(
    id int unsigned not null auto_increment primary key,
    uid int not null ,
    linkman varchar(32) not null,
    address varchar(255) not null,
    code   char(6)   not null,
    phone   varchar(16)  not null,
    addtime  int not null,
    price double(8,2) not null,
    status  tinyint(1) not null,
    status1 tinyint(2) not null,
    status2 tinyint(3) not null,
    status3 tinyint(4) not null
);
-- 查询订单表

-- 创建表   auto_increment, /*自增*/     primary key (id)   /*主键*/    foreign key (orderid)/*外键*/
create table detail(
    id int unsigned not null auto_increment primary key,
    orderid int not null ,
    goodsid int not null,
    name varchar(32) not null,
    price double(6,2) not null,
    num int not null,
    foreign key(orderid) references author_detail(id)
);
--前端商品分类表
create table  Category(
    id int unsigned not null auto_increment primary key,
    name varchar(32) not null,
    price double(6,2) not null,
    address	varchar(255) not null 
);


-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'1','101','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'2','102','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'3','103','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'4','104','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'5','105','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'6','106','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'7','107','平板','16.5','11');
-- insert into detail (id,orderid,goodsid,name,price,num) values (null,'8','108','平板','16.5','11');