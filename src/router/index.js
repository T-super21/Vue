import Vue from 'vue'
import Router from 'vue-router'
import products from '@/components/products'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      component: products
    },
    {
    	path: '/cart',
      component: cart
    }
  ]
})
