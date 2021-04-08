/**
 * Vuex k firebase authorizace, registrace apod
 */

export default {
  state: {
    inCart: []
  },
  getters: {
    total: state => {
      if (state.inCart.length > 0) {
        return state.inCart.map(item => item.price).reduce((total, amount) => total + amount)
      } else {
        return 0
      }
    },
    cartContents (state) {
      return state.inCart
    }

  },
  mutations: {
    ADD_TO_CART (state, invId) {
      state.inCart.push(invId)
      console.log(state.inCart)
    },
    REMOVE_FROM_CART (state, index) {
      state.inCart.splice(index, 1)
    },

    UPDATE_PRODUCT_ITEMS (state, payload) {
      state.inCart = payload
    }
  },
  actions: {
    addToCart ({ commit }, payload) {
      console.log(payload)
      commit('ADD_TO_CART', payload)
    },
    removeFromCart ({ commit }, payload) {
      commit('REMOVE_FROM_CART', payload)
    }
  }

}
