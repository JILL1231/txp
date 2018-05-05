// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import '@/assets/style/normalize.css'
import '@/assets/style/_globle'
import '@/assets/style/index'

Vue.config.productionTip = false
// 将 axios 改写为 Vue 的原型属性
Vue.prototype.$http= axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
