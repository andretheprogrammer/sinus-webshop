import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import *as API from "@/API/";
import *as Mutations from './mutationTypes'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        isLoggedIn: null,
        chosenProduct: null,
        productResponse: [],
        cartItems: [],
        user: {},
        orderPending: null,
        isAdmin: null,
        ordersResponse: [],
        chosenOrder: {},
        orderItems: []
    },
    getters: {
        cartItems: (state) => state.cartItems,
        chosenProduct: (state) => state.chosenProduct,
        chosenOrder: (state) => state.chosenOrder,
        productResponse: (state) => state.productResponse,
        ordersResponse: (state) => state.ordersResponse,
        userHistory: (state) => state.user.userHistory,
        ordersInProgress: (state) => state.ordersResponse.filter(e => e.status == 'inProcess'),
        ordersDone: (state) => state.ordersResponse.filter(x => x.status == 'done'),
        user: (state) => state.user,
        isAdmin: (state) => state.isAdmin = (state.user.role == 'admin'),
        isLoggedIn: (state) => {
            if (sessionStorage.getItem('jwt')) {
                console.log('Token -->', sessionStorage.getItem('jwt').substring(0, 15) + '...')
                state.isLoggedIn = true;
            }
            else {
                state.isLoggedIn = false;
            }
            console.log('isLoggedIn -->', state.isLoggedIn)
            return state.isLoggedIn;
        },
        orderItems: (state) => {
            let products = [];
            console.log(state.chosenOrder.items)
            for (let orderID of state.chosenOrder.items) {
                let product = state.productResponse.find(e => orderID == e._id);
                if (product) products.push(product);
                else {
                    products = []
                    break;
                }
            }

            return products;
        },

    },
    mutations: {
        [Mutations.SHOW_API_PRODUCTS](state, data) {
            state.productResponse = []
            state.productResponse = data
        },
        [Mutations.SET_CHOSEN_PRODUCT](state, product) {
            state.chosenProduct = product
            console.log('mutations -->', state.chosenProduct)
        },
        [Mutations.SET_CHOSEN_ORDER](state, order) {
            state.chosenOrder = order
            console.log('mutations -->', state.chosenOrder)
        },

        // [Mutations.GET_PRODUCT_BY_ID]: (state, id) => state.productResponse.find(e => e._id == id),

        [Mutations.REMOVE_ITEM]: (state, index) => state.cartItems.splice(index, 1),

        [Mutations.ADD_ITEM_TO_CART](state, object) {
            let exists = state.cartItems.find(i => i.item._id == object._id);
            if (exists) {
                exists.amount++
            } else {
                state.cartItems.push({ item: object, amount: 1 })
            }
            console.log(state.cartItems)
        },
        [Mutations.MAKE_ORDER](state, order) {
            state.cartItems = []
            state.orderPending = order;
        },
        [Mutations.GET_ALL_ORDERS](state, data) {
            state.ordersResponse = data
        },
        [Mutations.SET_CHOSEN_PRODUCT](state, product) {
            state.chosenProduct = product
        },
        [Mutations.SET_CHOSEN_ORDER](state, order) {
            state.chosenOrder = order
        },
        // [Mutations.EDIT_NEW_PRODUCT](state, product) {
        //     state.productResponse.(product)
        // },
        [Mutations.CREATE_NEW_PRODUCT](state, product) {
            state.productResponse.push(product)
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
    },
    actions: {
        async getProducts(context) {
            let result = await API.fetchProducts()
            context.commit(Mutations.SHOW_API_PRODUCTS, result)
        },
        async registerUser(context, payload) {
            await API.registerUser(payload)
            console.log(context)
        },
        async login(context, payload) {
            let data = await API.login(payload)
            context.commit(Mutations.LOGIN, data)
        },
        async addItemToCart(context, product) {
            context.commit(Mutations.ADD_ITEM_TO_CART, product)
        },
        async removeItem(context, index) {
            context.commit(Mutations.REMOVE_ITEM, index)
        },
        async createNewProduct(context, product) {
            console.log(product)
            let data = await API.postProduct(product, sessionStorage.getItem('jwt'))
            if (data.message == "Product created!") {

                context.commit(Mutations.CREATE_NEW_PRODUCT, data.product)

            } else {
                alert('försök igen')
            }

            console.log(data, context)
        },
        async editNewProduct(context, product) {
            await API.editProduct(product, sessionStorage.getItem('jwt'))
            // context.commit(Mutations.EDIT_NEW_PRODUCT, data.product)

        },
        async setChosenProduct(context, product) {
            context.commit(Mutations.SET_CHOSEN_PRODUCT, product)
        },
        async setChosenOrder(context, order) {
            context.commit(Mutations.SET_CHOSEN_ORDER, order)
        },
        // getProductById(context, id) {
        //     console.log(id)
        //     return context.state.productResponse.find((e) => id == e._id);
        // },
        async getAllOrders(context) {
            let jwt = sessionStorage.getItem("jwt")
            if (!jwt) return;

            let result = await API.fetchOrders(jwt)
            context.commit(Mutations.GET_ALL_ORDERS, result)
            return result;
        },
        async makeOrder(context, order) {
            let res = await API.makeOrder(order, sessionStorage.getItem('jwt'))
            console.log('make order ->', res)
            context.commit(Mutations.MAKE_ORDER, order)
        },
        async logout(context) {
            router.push('/').catch((error) => {
                error.name == 'NavigationDuplicated'
                    ? console.log('NavigationDuplicated')
                    : console.log(error)
            })
            context.commit(Mutations.LOGOUT)
        },
        async deleteProduct(context, id) {
            await API.deleteProductById(id, sessionStorage.getItem('jwt'))
        }
    },
})
