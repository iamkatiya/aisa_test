import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

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
      component: () => import(/* webpackChunkName: 'services' */ './pages/reviews')
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
