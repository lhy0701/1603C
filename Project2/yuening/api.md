## 悦读系统接口定义

### 接口定义
```js
  code： 1表示请求成功, !1表示请求失败
  msg:   表示请求信息，无论请求成功与失败都应该返回
  data:  返回请求的数据
  
  token: 统一放在get请求上
```
### 用户相关
#### 登陆接口
```js
@param username
@param password
@url post  /user/login
@return {
	code :1,
	data: {
		token: 132131321,
	},
	msg： '登陆成功'
}
```

#### 注册接口
```js
@param username 
@param password
@param phone
@url   post	/user/reigster
@return {
	code :1,
	data: {
		token: 132131321,
	},
	msg： '注册成功'
}
```

#### 获取用户权限
```js
@param token
@url   get /user/authority
@return {
	code :1,
	data: {
		auths: ['admin', 'staff']
	},
	msg： '用户权限获取成功'
}
```

#### 获取用户列表
```js
@param  type //1表示普通用户 2表示员工
@param  search  可选  用户名
@param  phone   可选  手机号
@url  get /user/list
@return {
	code :1,
	data: {
		list: [{
      id: 1,
      username: 'chenmanjie',
      phone: '17621526605',
      avtar: '',
      status: 0,
      create_time: '',
      auths: ['admin', 'staff']
    }]
	},
	msg： '用户列表获取成功'
}
```
#### 更新用户信息
```js
@param  object 用户信息
{
  status: 1,
  avatar: '',
  auths: ['admin']
}
@url    get /user/update
@return {
  code: 1,
  data: {},
  msg: '更新用户信息成功'
}
```

### 门店相关
#### 获取门店列表
```js
@param token
@param city	可选参数
@url   get /shop/list
@return {
	code: 1,
	data: {
		list: [{
			id: 1,
			name: '北京八维门店',
			img: '',
			address: '北京市海淀区唐家岭57号',
			info: '北京总部',
			count: 100,
			city: '北京',
			status: 1,	// 1表示门店正常营业，2表示已关闭，3表示审核中
			inconme: 10000
		}]
	},
	msg: '门店列表获取成功'
}
```

#### 关闭门店接口
```js
@param token
@param sid	门店id
@url   get /shop/close
@return {
	code: 1,
	data: {},
	msg: '门店关闭成功'
}
```

#### 更新门店信息接口
```js
@param shopInfo	门店信息的对象
{
	img: '',
	name: '',
	address: '',
	info: '',
	city: ''
}
@url   post /shop/update
@return {
	code: 1,
	data: {},
	msg: '门店信息更新成功'
}
```
#### 新增门店功能
```js
@param shopInfo 门店信息的对象
{
	img: '',
	name: '',
	address: '',
	info: '',
	city: ''
}
@url   post /shop/insert
@return {
	code: 1,
	data: {},
	msg: '新增门店成功'
}
```

#### 门店搜索功能
```js
@param search	要搜索的门店关键字
@url   get /shop/search
@return {
	code: 1,
	data: {
		list: [{
			id: 1,
			name: '北京八维门店',
			img: '',
			address: '北京市海淀区唐家岭57号',
			info: '北京总部',
			count: 100,
			city: '北京',
			status: 1,	// 1表示门店正常营业，2表示已关闭，3表示审核中
			inconme: 10000
		}
	},
	msg: '搜索结果'
}
```
### 
