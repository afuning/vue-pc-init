export default [
  {
    path: '/user',
    name: 'User',
    meta: {
      title: 'user'
    },
    component: () => import(/* webpackChunkName: "user" */ '@/views/user/user')
  }
]
