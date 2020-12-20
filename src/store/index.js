import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formResults: []
  },
  mutations: {
    newFormResult (state, result) {
      state.formResults.push(result)
    }
  }
});
