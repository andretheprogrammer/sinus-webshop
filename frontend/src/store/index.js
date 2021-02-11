import Vue from 'vue'
import Vuex from 'vuex'
import *as API from "@/API/";
import *as Mutations from './mutationTypes'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    chosenProduct: null,
    productResponse: [],
    cartItems: [],
    user: {},

  },
  getters: {
    cartItems: (state) => state.cartItems,
    activeModal: (state) => state.modalActive,
    chosenProduct: (state) => state.chosenProduct,
    productResponse: (state) => state.productResponse,

  },
  mutations: {
    [Mutations.SHOW_API_PRODUCTS](state, data) {
      state.productResponse = data
    },


    [Mutations.SET_CHOSEN_PRODUCT](state, product) {
      state.chosenProduct = product
      console.log('mutations -->', state.chosenProduct)
    },
    [Mutations.ADD_ITEM](state, object) {
      state.cartItems.push(object)
    },
    [Mutations.REMOVE_ITEM](state, index) {
      state.cartItems.splice(index, 1)
    },

    [Mutations.LOGIN](state, user) {
      if (user.token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },

  },
  actions: {
    async getProducts(context, payload) {
      const result = await API.fetchProducts(payload)

      context.commit(Mutations.SHOW_API_PRODUCTS, result)
    },
    async registerUser(context, payload) {
      await API.registerUser(payload)

    },
    async login(context, payload) {
      let user = await API.login(payload)
      console.log('from user ->>', user)
      context.commit(Mutations.LOGIN, user)
    },
    addItem(context, product) {
      context.commit(Mutations.ADD_ITEM, product)
    },
    async removeItem(context, index) {
      await context.commit(Mutations.REMOVE_ITEM, index)
    },

    async setChosenProduct(context, product) {
      await context.commit(Mutations.SET_CHOSEN_PRODUCT, product)
    },

  },
  modules: {
  }
})
