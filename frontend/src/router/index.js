import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'
import AdminOrders from '../views/AdminOrders.vue'
import AdminProducts from '../views/AdminProducts.vue'
import OrderComplete from '../views/OrderComplete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/orders',
    name: 'AdminOrders',
    component: AdminOrders
  },
  {
    path: '/adminproducts',
    name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/thanks',
    name: 'OrderComplete',
    component: OrderComplete
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
