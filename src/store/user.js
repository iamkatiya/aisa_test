const user = {
  state: {
    userData: []
  },
  mutations: {
    newUserData (state, result) {
      state.userData = result
    }
  }
}

export default user
