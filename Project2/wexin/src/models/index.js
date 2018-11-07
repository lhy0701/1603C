// 类似于vuex的module
import * as getList from '../services/example';
export default {
  // 命名空间
  namespace: 'index',
  // 状态
  state: {
    count: 1000,
    data: []
  },
  // 一些订阅操作，可以监听路由，做路由拦截操作
  subscriptions: {
    setup({
      dispatch,
      history
    }) {},
  },
  // 一些副作用，类似于vuex的action
  effects: {
    * fetch({payload}, { call , put }) { // eslint-disable-line
      const result = yield call(getList.getList)
      console.log(result)
      yield put({
        type: 'save',
        payload:{
          data: result.data //网络返回的要保留的数据
        }
      });
    }
  },
  reducers: {
    save(state, { payload: { data } }) {
       return {
         ...state, 
          data: data  //第一个data是state的，第二个data是payload的
      };
    }
  },
};
