/* eslint-disable */

import {createRouter, createWebHistory} from 'vue-router'
import MyHome from '../views/Home.vue'
import MyProducts from '../views/Products.vue'
import MyOrders from '../views/Orders.vue'

const  routes = [
    {
        path: '/',
        name: 'Home',
        component: MyHome
    },
    {
        path: '/products',
        name: 'Products',
        component: MyProducts
    },
    {
        path: '/orders',
        name: 'Orders',
        component: MyOrders,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router