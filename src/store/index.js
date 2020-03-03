import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    length:'100',
    activePageName: 'origin',
    icons: [
      {
        id: 'origin',
        text: 'origin'
      },
      {
        id: 'mutate',
        text: 'mutate'
      },
    ],
  },
  getters: {
    activePageName(state){
      return state.activePageName
    },
    icons(state){
      return state.icons
    }
  },
  mutations: {
    setActivePageName(state,payload) {
      state.activePageName = payload
    }
  },
  actions: {
    setActivePageName({ commit },e) {
      commit('setActivePageName',e.currentTarget.getAttribute('data-icon-text'))
    }
  },
  modules: {
  }
})
