import Vue from 'vue'
import Vuex from 'vuex'
import *as API from "@/API/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chosenProduct: {},
    productResponse: [],
  },
  mutations: {
    showApiProducts(state, data) {
      state.productResponse = data
    },
    setChosenProduct(state, payload) {
      state.chosenProduct = payload
    }
  },
  actions: {
    async getProducts(context, payload) {
      const result = await API.fetchData(payload)
      context.commit('showApiProducts', result)
    },
  },
  modules: {
  }
})
