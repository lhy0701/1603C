import request from '../utils/request';

//获取番剧数据
export function series(rid) {
  return request(`/api/x/web-interface/ranking/region?rid=${rid}&day=7&jsonp=jsonp`);
}
