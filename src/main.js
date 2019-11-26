import Vue from 'vue'
// element 组件
import './element-ui/'
// style
import '@/assets/styles/basic.scss'
// iconfont
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
// 挂载Vue中插件
import '@/plugins/index'
// 过滤器
import '@/filters/index'
// 路由
import router from '@/routers'
// store
import store from '@/store'
// 入口
import App from './App.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
