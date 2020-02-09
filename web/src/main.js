// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
import Card from './components/content/card/Card.vue'
import ListCard from './components/content/card/ListCard'
import axios from 'axios'
import NavBar from './components/common/navbar/NavBar'
import MainTabBar from './components/content/maintabbar/MainTabBar'
import store from './store'
import state from './components/content/store/State.js'

import mutations from './components/content/store/Mutations.js'


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('f-card',Card)
Vue.component('f-list-card',ListCard)
Vue.component('nav-bar',NavBar)
Vue.component('main-tab-bar',MainTabBar)


Vue.use(Vuex)





Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
//runtime

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")