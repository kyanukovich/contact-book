// Добавление node-модулей и указание путей для маршрутизатора Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info.vue'

// Указание для использования маршрутизатора Vue
Vue.use(VueRouter)

// Индексация маршрутов
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
