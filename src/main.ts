import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


let list: number[] = [1, 2, 3];
console.log(list)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
