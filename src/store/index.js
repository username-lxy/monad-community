import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    authToken: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setAuthToken(state, token) {
      state.authToken = token
    },
    clearAuth(state) {
      state.user = null
      state.authToken = null
    }
  },
  actions: {
    login({ commit }, { user, token }) {
      commit('setUser', user)
      commit('setAuthToken', token)
    },
    logout({ commit }) {
      commit('clearAuth')
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    authToken: state => state.authToken
  }
}) 