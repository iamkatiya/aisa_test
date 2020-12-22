import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import store from './store/index'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */ './pages/index')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ './pages/about')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: 'services' */ './pages/services')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import(/* webpackChunkName: 'reviews' */ './pages/reviews')
    },
    {
      path: '/appeals',
      name: 'appeals',
      component: () => import(/* webpackChunkName: 'appeals' */ './pages/appeals')
    },
    {
      path: '/holidays',
      name: 'holidays',
      component: () => import(/* webpackChunkName: 'appeals' */ './pages/holidays')
    },
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$disableContent = new Vue()
