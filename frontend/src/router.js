import Vue from 'vue'
import Router from 'vue-router'
import MenuItems from './resource/frontend/js/components/MenuItems.vue'
import orderNow from './resource/frontend/js/components/OrderNow.vue'
import Checkout from './resource/frontend/js/components/Checkout.vue'
import ConfirmOrder from './resource/frontend/js/components/ConfirmOrder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuItems
    },
    {
      path: '/orderNow',
      name: 'orderNow',
     component: orderNow
    },
    {
      path: '/Checkout',
      name: 'Checkout',
     component: Checkout
    },
    {
      path: '/ConfirmOrder',
      name: 'ConfirmOrder',
     component: ConfirmOrder
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 10)
    })
  },

})
