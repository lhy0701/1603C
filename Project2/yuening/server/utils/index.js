var md5 = require('md5');
var query = require('../db.js');

// 生成token
function geneToken(uid){
  return `u${uid}_${md5(+new Date()+'yuening')}`.slice(0, 32);
}

// 校验token有效期
function isExpire(create_time, expire = 7*24*60*60*1000){
  let now = +new Date();
  return now - create_time > expire;
}

// 校验token是否有效
function checkToken(token, res, next){
  let id = token.split('_')[0].replace('u','');
  query('select token,status,create_time from token where uid=? order by create_time desc limit 1', [id], function(error, results, fields){
    console.log(error, results, fields);
    if (error){
      res.json({
        code: -1,
        msg: error.sqlMessage
      })
    }
    if (!results.length || results[0].status == 0 || results[0].token != token){
      res.json({
        code: -2,
        msg: '无效的token'
      })
    }else if(isExpire(results[0].create_time)){
      res.json({
        code: -3,
        msg: 'token已过期'
      })
    }else{
      next()
    }
  })
}

module.exports = {
  geneToken,
  checkToken
}
