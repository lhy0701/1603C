import React from 'react';
import {getShopList} from '../../services/api';
getShopList().then(res=>{
  console.log('res...', res);
});
// export default ()=><h1>门店列表页</h1>

export default from './BasicList';
