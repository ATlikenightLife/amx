mysql --default-character-set=latin1 -uroot -p
mysql --default-character-set=latin1 -h 192.168.1.70
mysql --default-character-set=latin1 -h 192.168.1.70 -uroot -proot

set names gbk;

use template;

create table users(
    id int(11) unsigned not null auto_increment,
    username varchar(32) not null,
    password varchar(32) not null,
    name varchar(16),
    sex char(2),
    address varchar(255),
    email varchar(50),
    phone varchar(16),
    pichead varchar(255),
    PRIMARY KEY (id)
);

insert into users value(null,'admin001','admin001','海绵宝宝','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin002','admin002','派大星啊','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin003','admin003','啊哈哈啊','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin004','admin004','哈哈哈啊','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin005','admin005','呵呵饿啊','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin006','admin006','啦啦拉拉','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin007','admin007','嚯嚯嚯嚯','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin008','admin008','火火火火','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin009','admin009','行行行行','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin010','admin010','好好好好','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin011','admin011','我蟹老板','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin012','admin012','大章鱼哥','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin013','admin013','配额皮呃','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin014','admin014','妈耶妈耶','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin015','admin015','噜啦噜啦','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin016','admin016','嘤嘤嘤嘤','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin017','admin017','苦苦苦苦','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin018','admin018','嘿嘿嘿嘿','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin019','admin019','还好还好','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin020','admin020','斤斤计较','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin021','admin021','叽叽叽叽','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin022','admin022','点点滴滴','女','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin023','admin023','呜呜呜呜','男','广东省广州市白云区','1234567890@qq.com','13511111111','');
insert into users value(null,'admin024','admin024','柔柔弱弱','女','广东省广州市白云区','1234567890@qq.com','13511111111','');

select * from users;

npm install --global nodemon
nodemon template