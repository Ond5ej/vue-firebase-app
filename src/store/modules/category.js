export default {
  state: {
    category: localStorage.getItem('category'),
    subCategory: localStorage.getItem('subCategory')
  },
  getters: {
    getCategory (state) {
      return state.category
    },
    getSubCategory (state) {
      return state.subCategory
    }
  },
  mutations: {
    setCategory (state, payload) {
      state.category = payload
    },
    setSubCategory (state, payload) {
      state.subCategory = payload
    }
  }
}
