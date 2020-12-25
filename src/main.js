import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Vuelidate from 'vuelidate'
import router from './router/index'
Vue.use(Vuelidate)


Vue.config.productionTip = false;

Vue.directive("changeScroll",{
  update(el, status) {
    console.log(status)
    if (status.value === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
