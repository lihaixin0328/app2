var express = require("express");
var studentDB = require('../db/studentDB');
var studentRouter = express.Router();
//在中间件只能定义子路由
studentRouter.get('/findAll',function(req,resp){
    console.log(req.body);
    studentDB.findAll(function(results){
    resp.json(results);
    });
});
studentRouter.post('/login',function(req,resp){
    resp.send('登陆成功!');
});

module.exports = studentRouter;