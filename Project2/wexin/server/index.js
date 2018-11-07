var WebSocket = require('ws');


// 创建一个websocket服务,监听8080端口
const wss = new WebSocket.Server({ port: 8080 });
// 监听建立连接
wss.on('connection', function(ws){
  ws.on('message', function incoming(message) {
    console.log('message...', message);
    // 收到消息之后,广播出去
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });


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
