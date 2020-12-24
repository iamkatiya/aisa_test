import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Vuelidate from 'vuelidate'
import router from './router/index'
Vue.use(Vuelidate)


Vue.config.productionTip = false;

Vue.directive("disableScroll",{
  bind(el) {
    el.addEventListener('click', function(){
      document.body.style.overflow = 'hidden'
    });
  }
});

Vue.directive("enableScroll",{
  bind(el) {
    el.addEventListener('click', function(){
      document.body.style.overflow = 'auto'
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
