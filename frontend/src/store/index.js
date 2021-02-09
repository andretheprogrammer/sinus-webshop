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
  mutations: {
    showApiProducts(state, data) {
      state.productResponse = data
    },
    setChosenProduct(state, payload) {
      state.chosenProduct = payload
    },
    Add_Item(state, object) {
      var addProduct = this.state.cartItems.find(o => o._id === object)
      if (addProduct) {
        addProduct.amount++
      } else {
        state.storeCart.push({
          item: object,
          amount: 1,

        })
      }
    },
    Remove_Item(state, index) {
      state.storeCart.splice(index, 1)
    },
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
