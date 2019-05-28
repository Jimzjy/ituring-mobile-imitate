import Vue from 'vue'
import Router from 'vue-router'
import { Pages, Login, NotFound } from '@/views'
import { Home, Book, Article, User } from '@/views/pagesContent'

Vue.use(Router)

export const routePageNames = ['home', 'book', 'article', 'user']

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Pages,
      children: [
        {
          path: '',
          component: Home,
          name: routePageNames[0]
        },
        {
          path: 'book',
          component: Book,
          name: routePageNames[1]
        },
        {
          path: 'article',
          component: Article,
          name: routePageNames[2]
        }
      ]
    },
    {
      path: '/user',
      component: User,
      name: routePageNames[3]
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
