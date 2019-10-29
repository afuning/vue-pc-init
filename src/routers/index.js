import Vue from 'vue'
import Router from 'vue-router'
// 解决vue中的NavigationDuplicated
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/404',
    component: _import('common/404'),
    name: '404',
    meta: { title: '404未找到' }
  }
]

const mainRoutes = {
  path: '/home',
  component: _import('main/index'),
  name: 'Home',
  meta: { title: '首页' },
  children: [
    {
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'UserSetting',
      meta: { title: '用户设置' }
    },
    {
      path: 'user/setting',
      component: _import('user/setting'),
      name: 'UserSetting',
      meta: { title: '用户设置' }
    }
  ]
}

const router = new Router({
  mode: 'history',
  routes: globalRoutes.concat(mainRoutes, {
    path: '*',
    component: _import('common/404'),
    name: '404',
    meta: { title: '404未找到' }
  }),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
