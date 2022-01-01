import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100,
    titulo: 'Desde Vuex',
  },
  mutations: {
    incrementar(state) {
      state.contador += 10
    },
    decrementar(state, payload) {
      state.contador -= payload
    },
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDecrementar({commit}, num){
      commit('decrementar', num)
    }
  },
  modules: {},
})
