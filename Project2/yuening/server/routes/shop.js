var express = require('express');
var router = express.Router();
var query = require('../db.js');

// 获取店铺列表
router.get('/list', function(req, res, next) {
  query('select uid from user where username=? and password = ?', [req.body.username, req.body.password], function(error, results, fields){
      console.log('results...', results);
  })
});

// 新增店铺
router.post('/insert', function(req, res, next){
  req.body.create_time = +new Date();
  query('insert into shop set ?', req.body, function(error, results, fields){
    console.log('results...', error, results);
  })
});

// 修改店铺
// router.get()

// 关闭店铺
router.get('/close', function(req, res, next){

});

// 搜索店铺
router.get('/search', function(req, res, next){

});

module.exports = router;
