/*
    get     http://localhost:3000/books
    get     http://localhost:3000/books/book
    post    http://localhost:3000/books/book
    get     http://localhost:3000/books/book/1
    put     http://localhost:3000/books/book
    delete  http://localhost:3000/books/book/2
*/
const express = require('express');
const service = require('../service.js');
const router = express.Router();
// 提供所有的图书信息
// 热门分类的路由
router.get('/category',service.allUsers);
// 家电热搜的路由
router.get('/category2',service.allUsers2);


// 手机分类 热门品牌的路由
router.get('/category3',service.allUsers3);
// 手机分类 手机通讯的路由
router.get('/category4',service.allUsers4);
// 手机分类 手机通讯的路由
router.get('/category5',service.allUsers5);


// 家用电器 厨房小电的路由
router.get('/category6',service.allUsers6);
// 家用电器 个护健康的路由
router.get('/category7',service.allUsers7);


// 电脑办公 热卖分类的路由
router.get('/category8',service.allUsers8);
// 电脑办公 电脑整机的路由
router.get('/category9',service.allUsers9);

// ---------------------------------------------
// index 商品渲染
router.get('/indexMax1',service.arrxMax);


//详情页
router.get('/details/:id',service.deql);

router.post('/register',service.register);

router.post('/seletR',service.selectUsername);

router.post('/login',service.login);

// ----------------------------------------------
// 搜索框内容
router.post('/BLJB',service.BLJB);


// 获取提交过得的数据存在在数据库

router.post('/SPca',service.Sp);

// 数据库页面渲染
router.get('/SPmax',service.SPmax);
// -----------------------------------------------







module.exports = router;