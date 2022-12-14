import Vue from 'vue'
import './cube-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'
Vue.config.productionTip = false
Vue.prototype.$http =axios

setaxios()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
