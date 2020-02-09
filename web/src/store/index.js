import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex) //Vue.propertype.$store = xxx

const store = new Vuex.Store({
    state: {
      cartList: []
    },
   mutations,
   actions,
   getters
})

export default store