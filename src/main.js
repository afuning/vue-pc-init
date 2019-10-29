import Vue from 'vue'
import './element-ui/'
import '@/assets/styles/basic.scss'
import global from '@/plugins/global'
import router from '@/routers'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(global)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
