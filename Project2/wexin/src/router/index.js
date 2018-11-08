import React from 'react';
import dynamic from 'dva/dynamic';

// 引入一级路由
import Login from '../routes/LoginPage';
import Index from '../routes/IndexPage';

// const Series = dynamic({
      // app: app,
//   // models: () => [
//   //   import('./models/users'),
//   // ],
//   component: () => import('../routes/SeriesPage'),
// });
const wrapDynamic = (component, app, model)=>{
  let params = {
    component: ()=>import(component)
  }
  if (model){
    params.app = app;
    params.models = ()=>[import('../models/index.js')]
  }
  return dynamic(params);
}

export default app=>{
  return  {
    routes: [{
      path: '/login',
      component: Login
    }, {
      path: '/',
      component: dynamic({
        app,
        models: [()=>import('../models/index')],
        component: ()=>import('../routes/IndexPage')
      })
    }]
  }
}
