import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth.js'
import category from './modules/category.js'
import shoppingCart from './modules/shoppingCart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    category,
    shoppingCart
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
