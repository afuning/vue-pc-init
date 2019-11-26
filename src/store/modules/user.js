const GET_USER = 'GET_USER'
export default {
  state: {
    userInfo: {}
  },
  mutations: {
    [GET_USER] (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    getUser ({ commit }, user) {
      commit(GET_USER, user)
    }
  }
}
