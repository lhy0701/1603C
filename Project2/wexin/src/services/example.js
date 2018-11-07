import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getList() {
  return request('https://www.easy-mock.com/mock/5b62ff798ad0dd3bf8d54526/example/weixindata');
}