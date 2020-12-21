import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    jsonData: []
  },
  actions: {
    getJson ({commit}) {
      return axios
        .get('https://next.json-generator.com/api/json/get/41l9bOY3Y')
        .then(response => {
          console.log(response.data);
          commit('setJsonData', response.data)
        });
    }
  },
  mutations: {
    setJsonData (state, result) {
      result.map((item)=>{
        state.jsonData.push(item)
      })
    }
  },
}

export default new Vuex.Store ({
  modules: {
    appeals: moduleAppeals,
    holidays: moduleHolidays
  }
})

