import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    currentHeaderNav: 0
  },
  mutations: {
    login (state) {
      state.loginStatus = true
    },
    logout (state) {
      state.loginStatus = false
    },
    changeCurrentHeaderNav (state, n) {
      state.currentHeaderNav = n
    }
  },
  actions: {

  }
})
