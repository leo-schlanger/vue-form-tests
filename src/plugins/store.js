import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    updateUserList (state, user) {
      if(state.users.find(item => item.email === user.email)) {
        state.users = state.users.filter(item => item.email !== user.email);
      }
      state.users.push(user);
    }
  },
  actions: {
    updateUserList (context) {
      context.commit('updateUserList')
    }
  }
})
