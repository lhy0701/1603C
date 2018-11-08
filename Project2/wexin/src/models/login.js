// 类似于vuex的module
import * as api from '../services/example';
import md5 from 'md5';

export default {
  // 命名空间
  namespace: 'login',
  // 状态
  state: {
    login: false
  },
  // 一些副作用，类似于vuex的action
  effects: {
    * login({payload}, {call, put}){
      payload.password = md5(payload.password+'hello world');
      console.log('payload...', payload);
      payload.callback = (res)=>{
        put({
          type: 'login',
          payload: res
        })
      }
      yield call(api.login, payload);
    }
  },
  reducers: {
    login(state, {payload}){
      console.log('payload...', payload);
      return {...state, login: payload};
    }
  },
};
