import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import auth from './modules/auth.js'
import shoppingCart from './modules/shoppingCart.js'

Vue.use(Vuex)

const vueLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: (state) => ({
    shoppingCart: {
      inCart: state.shoppingCart.inCart
    }
  })
})

export default new Vuex.Store({
  modules: {
    auth,
    shoppingCart,
    vueLocalStorage
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [vueLocalStorage.plugin]
})
