import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    userChoice: [],
    questionsList: [] // Tableau d'objets
  },

  getters: {
    getUserChoice(state) {
      return state.userChoice
    }
  },

  mutations: {
    setUserChoice(state, payload) {
      state.userChoice.push(payload)
    }
  },
  actions: {
    registerUserChoice({ commit }, payload) {
      commit('setUserChoice', payload)
    }
  }
})


new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')


