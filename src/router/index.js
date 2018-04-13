import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
import Main from '../pages/Main/Main'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shops from '../pages/Shops/Shops'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/shops',
      component: Shops,
      meta: {
        show: false
      }
    },
    {
      path: '/main',
      component: Main,
      meta: {
        show: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        show: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        show: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
