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
    orderPending: null,
    isAdmin: false

  },
  getters: {
    cartItems: (state) => state.cartItems,
    chosenProduct: (state) => state.chosenProduct,
    productResponse: (state) => state.productResponse,
    isAdmin: (state) => state.isAdmin


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

    [Mutations.LOGIN](state, data) {
      debugger
      if (data.token) {
        if (data.user.role == 'admin') {
          state.isAdmin = true;
        }
        state.isLoggedIn = true;
        // localStorage.setItem('data', data);
        state.user = data.user;
      } else {
        state.isLoggedIn = false;
      }
    },
    [Mutations.GET_PRODUCT_BY_ID](state, id) {
      let productByID = state.productResponse.find(e => e.id == id)
      return productByID
    },
    [Mutations.MAKE_ORDER](state, order) {
      state.orderPending = order;
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
      let data = await API.login(payload)
      context.commit(Mutations.LOGIN, data)
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
    async getProductById(context, id) {
      await context.commit(Mutations.GET_PRODUCT_BY_ID, id)
    },
    async getAllOrders(context, jwt) {
      const res = await API.fetchOrders(jwt)
      console.log(res)

    },
    async makeOrder(context, order) {
      const res = await API.makeOrder(order)
      await context.commit(Mutations.MAKE_ORDER, order)

      console.log(res)
    },

  },
  modules: {
  }
})
