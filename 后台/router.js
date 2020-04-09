/*
    get     http://localhost:3000/books
    get     http://localhost:3000/books/book
    post    http://localhost:3000/books/book
    get     http://localhost:3000/books/book/1
    put     http://localhost:3000/books/book
    delete  http://localhost:3000/books/book/2
*/
const express = require('express');
const service = require('./service.js');
const router = express.Router();
// 提供所有的用户信息
router.get('/users',service.allUsers);
// 查询数据库的用户数
router.get('/users/count',service.getCount);
// 分页查询所有信息
router.get('/users/:p/:count',service.userList);
// 添加用户信息时提交数据
router.post('/users/user',service.addUser);
// 编辑用户时根据id查询相应信息
router.get('/ed/eds/:id',service.getUserById); 
// 提交编辑的数据
router.put('/users/user',service.editUser);
// 删除用户信息
router.delete('/users/user/:id',service.deleteUser);
// 模糊查询
router.post('/likeCount',service.getLCount);
router.post('/likes/s/:p/:count',service.likesList);
module.exports = router;