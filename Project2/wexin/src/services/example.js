import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getList() {
  return request('https://www.easy-mock.com/mock/5b62ff798ad0dd3bf8d54526/example/weixindata');
}

// 建立一个socket
let socket = null;

export function createSocket(){
  socket = new WebSocket('ws://127.0.0.1:8080');

  // 建立连接
  socket.addEventListener('open', function (event) {
    // socket.send('hello world');
  });

  // 接收到服务端发送的数据
  socket.addEventListener('message', function (event) {

  });

  // 连接被关闭
  socket.addEventListener('close', function (event) {

  });
}

export function sendMessage(obj){
  socket.send(JSON.stringify(obj));
}
