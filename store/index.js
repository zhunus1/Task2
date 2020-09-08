import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      lang: true
    },
    mutations: {
      changeFalse(state) {
        state.lang = false
      },
      changeTrue(state) {
        state.lang = true
      }
    }
  })

export default store
