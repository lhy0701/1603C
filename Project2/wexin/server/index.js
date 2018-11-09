var WebSocket = require('ws');
var mysql = require('mysql');
var md5 = require('md5');
// 引入mysql
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: '1603c'
});


// 创建一个websocket服务,监听8080端口
const wss = new WebSocket.Server({port: 8080});
// 监听建立连接
wss.on('connection', function (ws) {
  ws.on('message', function incoming(message) {
    let messgaeObj = JSON.parse(message);
    switch (messgaeObj.type) {
      case 'login': doLogin(messgaeObj, ws); break;
      default: {
        // 收到消息之后,广播出去
        wss.clients.forEach(function each(client) {
          console.log(client._id);
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      }
    }
    console.log('message...', message);



    // setInterval(()=>{
    //   ws.send(message);
    // }, 1000);

    // message = JSON.parse(message);
    // switch(message.type){
    //   case 'login': doLogin(message.payload, message.id, ws); break;
    //   case 'message': handleMessage(message.payload, message.id, ws);break;
    //   default: return;
    // }

    // console.log('received: ', message);
    // 发送数据给前端
    // ws.send(JSON.stringify({
    //   msg: 'Hello World!'
    // }))
    // 关闭连接
    // setTimeout(()=>{
    //   ws.close();
    // }, 3000);
  });
});

// 处理登陆请求
function doLogin({username, password, id, type}, ws) {
  connection.query(`select id,avatar from user where username='${username}' and password='${password}'`, function (error, rows, fields) {
    if (error) throw error;
    console.log('rows...', rows);
    if (rows[0] && rows[0].id) {
      ws._id = rows[0].id;
      // 登陆成功，生成token，定义规则：u+uid+'_'+md5(时间戳)
      let token = `u${rows[0].id}_${md5(+new Date() + 'hello world')}`.substr(0, 16);
      ws.send(JSON.stringify({
        id,
        type,
        token,
        username,
        avatar: rows[0].avatar || 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541426364167&di=3ff5894441d036c6c7fb77887a98f3a7&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-02-07%2F235606623.jpg'
      }))
    } else {
      ws.send(JSON.stringify({
        id,
        type,
        code: -1,
        msg: '登陆失败',
        data: {}
      }))
    }
  })
}
