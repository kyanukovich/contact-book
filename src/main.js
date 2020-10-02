// Добавление node-модулей
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrash, faListUl, faPlus
} from '@fortawesome/free-solid-svg-icons'

// Добавление иконок из библиотеки FontAwesome
library.add(faListUl, faPlus, faTrash)

// Отключение советов по производству
Vue.config.productionTip = false

// Указание функции рендеринга
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
