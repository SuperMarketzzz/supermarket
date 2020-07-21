// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import store from './store/index'

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded' 
axios.interceptors.request.use(
  config => {
    //登录流程控制中，根据本地是否存在token判断用户的登录情况
    //但是即使token存在，也有可能token是过期的，所以在每次请求中携带token
    //后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    //而后我们可以在相应拦截器中，根据状态码进行一些统一的操作
    const token = store.state.user.token
    token && (config.headers.common['token'] = token)
    return config
  },
  error => Promise.error(error)
)

Vue.config.productionTip = true
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
