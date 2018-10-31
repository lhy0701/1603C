/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const wz1603CRouter =  {
  path: '/1603C',
  component: Layout,
  meta: { title: 'wz1603c', icon: 'list', noCache: true },
  children: [
    {
      path: 'index',
      component: () => import('@/views/1603c/index'),
      name: 'user',
      meta: { title: 'userManage', icon: 'peoples', noCache: true }
    },
    {
      path: 'avatar',
      component: () => import('@/views/1603c/avatarUpload'),
      name: 'avatar',
      meta: { title: 'avatarUpload', icon: 'bug', noCache: true }
    }
  ]
}

export default wz1603CRouter
