import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faTrash, faListUl, faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(faListUl, faPlus, faTrash)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
