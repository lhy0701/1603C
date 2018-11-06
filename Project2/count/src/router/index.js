import React from 'react';

// 引入一级路由
import Series from '../routes/SeriesPage';
// 引入二级路由
import Recommend from '../routes/series/Recommend';

// 声明无状态组件
const StateLess = props=>{
  // console.log('props...', props);
  return <h1>{props.match.path}</h1>
}

export default {
  routes: [{
    path: '/animation',
    component: StateLess
  }, {
    path: '/series',
    component: Series,
    children: [{
      path: '/series/recommend',
      component: Recommend
    }]
  },{
    path: '/music',
    component: StateLess
  },{
    path: '/dance',
    component: StateLess
  },{
    path: '/',
    redirect: '/series/recommend'
  }]
}
