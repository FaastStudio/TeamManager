import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import BlackDashboard from './plugins/blackDashboard'
import i18n from './i18n'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import './registerServiceWorker'

Vue.use(BlackDashboard)

Vue.config.productionTip = false

// Set BaseURL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// if token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

new Vue({
  router,
  store,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
