import request from '../utils/request';
import { deflate } from 'zlib';

export function query() {
  return request('/api/users');
}

export function getList() {
  return request('https://www.easy-mock.com/mock/5b62ff798ad0dd3bf8d54526/example/weixindata');
}

// 建立一个socket
let socket = null;
let requestList = [];

export function createSocket(dispatch){
  socket = new WebSocket('ws://169.254.78.172:8080');

  // 建立连接
  socket.addEventListener('open', function (event) {
    // socket.send('hello world');
  });

  // 接收到服务端发送的数据
  socket.addEventListener('message', function (event) {
    let data = JSON.parse(event.data);
    console.log('requestList...', requestList, data);
    switch(data.type){
      case 'login': requestList[data.id-1](data); break;
      default:break;
    }
    console.log('data..', event.data);
    // dispatch({
    //   type: 'index/receiveMessage',
    //   payload: JSON.parse(event.data)
    // })
  });

  // 连接被关闭
  socket.addEventListener('close', function (event) {

  });
}

// 发送消息接口
export function sendMessage(obj){
  const type = ['login', 'message'];
  // 如果请求需要回调函数，把请求的回调函数放到requestList里面
  if (obj.callback){
    let id = requestList.push(obj.callback);
    obj.id = id;
  }

  socket.send(JSON.stringify(obj));
}

// 登陆接口
export function login(obj){
  console.log('obj...', obj);
  obj.type = 'login';
  sendMessage(obj)
}
