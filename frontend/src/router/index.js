import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Products from '../views/Products.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
