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
        return state.inCart.map(item => (item.price * item.quantity)).reduce((total, amount) => total + amount)
      } else {
        return 0
      }
    },
    cartContents (state) {
      return state.inCart
    }

  },
  mutations: {
    ADD_TO_CART (state, product) {
      const index = state.inCart.findIndex(obj => obj.id === product.id)
      // kosik uz obsahuje tento produkt

      if (index > -1) {
        state.inCart[index].quantity++
      } else {
        product = { ...product, quantity: 1 }
        state.inCart.push(product)
      }
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
      alert('do kosiku')
      commit('ADD_TO_CART', payload)
    },
    removeFromCart ({ commit }, payload) {
      commit('REMOVE_FROM_CART', payload)
    }
  }

}
