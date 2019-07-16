// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/css/base.css'
import i18n from './assets/lang/index'
import { postRequest, getRequest } from './api/api'

Vue.prototype.$post = postRequest
Vue.prototype.$get = getRequest

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
