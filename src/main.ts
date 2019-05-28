import Vue from 'vue'
import axios from 'axios'
import Icon from 'vue-awesome/components/Icon.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/customIcons'
import './mock'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
