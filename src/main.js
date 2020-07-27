// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './api/http'   /*配置axios*/
import store from './store/index'

axios.defaults.baseURL = '/api'
//axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded' 

Vue.use(ElementUI)

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
