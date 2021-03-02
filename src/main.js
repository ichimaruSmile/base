import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import request from './network'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(request)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
