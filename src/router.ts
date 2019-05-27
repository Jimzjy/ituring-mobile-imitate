import Vue from 'vue'
import Router from 'vue-router'
import { Pages, Login, NotFound } from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Pages
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
