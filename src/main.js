import Vue from 'vue'
import router from './router'
import vuetify from './vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  vuetify,
  template: '<App/>'
}).$mount('#app')
