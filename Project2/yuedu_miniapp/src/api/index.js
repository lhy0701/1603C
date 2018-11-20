import wepy from 'wepy';

function sendRequest(url, data={}, method='GET'){
  return new Promise((resolve, reject)=>{
    wepy.request({
      url,
      data,
      method,
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

export let getShopList = ()=>{
  return sendRequest('http://127.0.0.1:11111/shop/list');
}
