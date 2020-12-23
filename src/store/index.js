import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BootstrapVue, BPagination } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.component('b-pagination', BPagination)

Vue.use(Vuex)

const moduleAppeals = {
  state: {
    formResults: []
  },
  mutations: {
    newFormResult (state, result) {
      state.formResults.push(result)
    }
  }
}

const moduleHolidays = {
  state: {
    jsonData: [],
    jsonError: ''
  },
  actions: {
    getJson ({commit}) {
      return axios
        .get('https://next.json-generator.com/api/json/get/41l9bOY3Y')
        .then(response => {
          commit('setJsonData', response.data)
        }) .catch(error => {
          commit('setJsonError', error.message)
        });
    }
  },
  mutations: {
    setJsonData (state, result) {
      result.map((item)=>{
        state.jsonData.push(item)
      })
    },
    setJsonError (state, result) {
      state.jsonError = result
    }
  },
}

export default new Vuex.Store ({
  modules: {
    appeals: moduleAppeals,
    holidays: moduleHolidays
  }
})

