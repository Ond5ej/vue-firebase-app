export default {
  state: {
    category: null
  },
  getters: {
    getCategory (state) {
      return state.category
    }
  },
  mutations: {
    setCategory (state, payload) {
      state.category = payload
    }
  }
}
