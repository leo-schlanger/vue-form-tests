import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    registration: { 
      name: "",
      email: "",
      age: 0
    },
    users: [],
  },
  mutations: {
    addUser (state) {
      if(state.registration.email !== "") {
        state.users.push(state.registration);

        state.registration = { 
          name: "",
          email: "",
          age: 0
        };
      }
    }
  }
})
