/**
 * Vuex k firebase authorizace, registrace apod
 */
import { auth } from '../../firebase.js'

export default {
  state: {
    user: null,
    error: null
  },
  getters: {
    getUser (state) {
      return state.user
    },
    isUserAuth (state) {
      return !!state.user
    },
    getError (state) {
      return state.error
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    authAction ({ commit }) {
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user)
        } else {
          commit('setUser', null)
        }
      })
    },
    signUpAction ({ commit }, payload) {
      console.log(payload)
      auth
        .createUserWithEmailAndPassword(payload.email, payload.password).then(() => {
          const createdUser = auth.currentUser
          const actionCodeSettings = {
            url: `${process.env.VUE_APP_HOST_NAME}/?email=${createdUser.email}`
          }
          // send the signed in user a verification email
          createdUser.sendEmailVerification(actionCodeSettings)
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
    signInAction ({ commit }, payload) {
      auth
        .signInWithEmailAndPassword(payload.email, payload.password).then(response => {
          commit('setUser', response.user)
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
    signOutAction ({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit('setUser', null)
        })
        .catch(error => {
          commit('setError', error.message)
        })
    },
    resetPasswordsendEmail ({ commit }, payload) {
      auth.sendPasswordResetEmail(payload.email).then(function () {
        // Email sent.
        console.log('email poslan')
      }).catch(function (error) {
        // An error happened.
        commit('setError', error.message)
      })
    }

  }
}
