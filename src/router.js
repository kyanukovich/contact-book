import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info/:contactID/',
      name: 'Info',
      component: Info
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
