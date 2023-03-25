import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stopik:[]
  },
  getters: {
  },
  mutations: {
    fetchStopWatch(state,stopik){
      state.stopik =stopik;
      console.log(this.stopik)
    },
    addTimer(state, obj){
        state.stopik.push(obj)
      },
  },
  actions: {
    fetchStopWatch(context){
      fetch('/stopwatch.json')
          .then(response=>response.json())
          .then(stopik=>context.commit('fetchStopWatch',stopik));
    }
  },
  modules: {
  }
})
