import Vue from 'vue'
import Vuex from 'vuex'
import *as API from "@/API/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chosenProduct: {},
    productResponse: [],
    cartItems: []
  },
  getters: {
    CartItems: (state) => state.cartItems,

  },
  mutations: {
    showApiProducts(state, data) {
      state.productResponse = data
    },
    setChosenProduct(state, payload) {
      state.chosenProduct = payload
    },
    ADD_ITEM(state, object) {
      state.cartItems.push(object)
    },
    REMOVE_ITEM(state, index) {
      state.cartItems.splice(index, 1)
    },
  },
  actions: {
    async getProducts(context, payload) {
      const result = await API.fetchData(payload)
      context.commit('showApiProducts', result)
    },
    addItem(context, product) {
      context.commit("ADD_ITEM", product)
    },
    removeItem(context, index) {
      context.commit("REMOVE_ITEM", index)
    },
  },
  modules: {
  }
})
