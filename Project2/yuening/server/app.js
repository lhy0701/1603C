var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {checkToken} = require('./utils');

// 引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');

var app = express();


app.listen(11111, ()=>{
  console.log('正在监听11111端口，快点来啊...');
});
// module.exports = app;
