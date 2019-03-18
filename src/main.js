import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

sync(store, router)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
