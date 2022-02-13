import Vue from 'vue'
import store from './store'
import App from './views/App.vue'
import router from './router'
import modal from "./plagins/ModalWindow"
import context from "./plagins/ContextMenu"

Vue.config.productionTip = false

Vue.use(modal)
Vue.use(context)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
