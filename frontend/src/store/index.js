import Vue from 'vue'
import Vuex from 'vuex'
import *as API from "@/API/";
import *as Mutations from './mutationTypes'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        chosenProduct: null,
        productResponse: [],
        cartItems: [],
        user: {},
        orderPending: null,
        isAdmin: false,
        ordersResponse: [],
        chosenOrder: null,
        // fileSubmitted: null

    },
    getters: {
        cartItems: (state) => state.cartItems,
        chosenProduct: (state) => state.chosenProduct,
        chosenOrder: (state) => state.chosenOrder,
        productResponse: (state) => state.productResponse,
        ordersResponse: (state) => state.ordersResponse,
        ordersInProgress: (state) => state.ordersResponse.filter(e => e.status == 'inProcess'),
        ordersDone: (state) => state.ordersResponse.filter(x => x.status == 'done'),
        isAdmin: (state) => state.isAdmin,
        isLoggedIn: (state) => {
            if (sessionStorage.getItem('jwt')) {
                state.isLoggedIn = true;
            }
            else {
                state.isLoggedIn = false;
            }

            return state.isLoggedIn;
        }

    },

    mutations: {
        [Mutations.SHOW_API_PRODUCTS](state, data) {
            state.productResponse = data
        },
        [Mutations.SET_CHOSEN_PRODUCT](state, product) {
            state.chosenProduct = product
        },
        [Mutations.SET_CHOSEN_ORDER](state, order) {
            state.chosenOrder = order
        },
        [Mutations.ADD_ITEM_TO_CART](state, object) {
            let exists = state.cartItems.find(i => i.item._id == object._id);
            if (exists) {
                exists.amount++
            } else {
                state.cartItems.push({ item: object, amount: 1 })

            }
            console.log(state.cartItems)

        },
        [Mutations.REMOVE_ITEM](state, index) {
            state.cartItems.splice(index, 1)
        },

        [Mutations.LOGIN](state, data) {
            if (data.token) {
                if (data.user.role == 'admin') {
                    state.isAdmin = true;
                }
                state.isLoggedIn = true;
                sessionStorage.setItem('jwt', data.token);
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
            state.cartItems = []
            state.orderPending = order;
        },
        [Mutations.LOGOUT](state) {
            state.isLoggedIn = false,
                state.chosenProduct = null,
                state.cartItems = [],
                state.user = {},
                state.orderPending = null,
                state.isAdmin = false
            state.user = {};
            sessionStorage.clear()
        },
        [Mutations.GET_ALL_ORDERS](state, data) {
            state.ordersResponse = data
        },
        // [Mutations.SUBMIT_FILE](state, data) {
        //     console.log(data)
        //     state.fileSubmitted = data
        // },
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
        async addItemToCart(context, product) {
            await context.commit(Mutations.ADD_ITEM_TO_CART, product)
        },
        async removeItem(context, index) {
            await context.commit(Mutations.REMOVE_ITEM, index)
        },

        async setChosenProduct(context, product) {
            await context.commit(Mutations.SET_CHOSEN_PRODUCT, product)
        },
        async setChosenOrder(context, order) {
            await context.commit(Mutations.SET_CHOSEN_ORDER, order)
        },
        async getProductById(context, id) {
            await context.commit(Mutations.GET_PRODUCT_BY_ID, id)
        },
        async getAllOrders(context, jwt) {
            const result = await API.fetchOrders(jwt)
            console.log('fetchOrders -->', result)
            context.commit(Mutations.GET_ALL_ORDERS, result)

        },
        async makeOrder(context, order) {
            const res = await API.makeOrder(order, sessionStorage.getItem('jwt'))
            await context.commit(Mutations.MAKE_ORDER, order)
            console.log('make order ->', res)
            // sessionStorage.getItem('jwt')
        },
        async logout(context) {
            await context.commit(Mutations.LOGOUT)
        },
        // async submitFile(context, payload) {
        //     await context.commit(Mutations.SUBMIT_FILE, payload)
        // }
    },

})
