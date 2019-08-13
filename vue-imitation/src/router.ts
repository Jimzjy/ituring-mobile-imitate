import Vue from 'vue'
import Router, { Route } from 'vue-router'
import $store from './store'
import { Pages, Login, NotFound, PagesContent, MoreBooks, Search, Cart } from '@/views'
import { Home, Book, Article, User } from '@/views/pagesContents'

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
          component: PagesContent,
          children: [
            {
              path: '',
              component: Home,
              name: routePageNames[0]
            },
            {
              path: 'book',
              component: Book,
              name: routePageNames[1],
              beforeEnter: refreshHeaderNav
            },
            {
              path: 'article',
              component: Article,
              name: routePageNames[2],
              beforeEnter: refreshHeaderNav
            }
          ]
        },
        {
          path: 'user',
          component: User,
          name: routePageNames[3],
          beforeEnter: authGuard
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      props: (route) => ({ to: route.query.to })
    },
    {
      path: '/more-books',
      component: MoreBooks,
      name: 'more-books',
      props: (route) => ({ title: route.query.title })
    },
    {
      path: '/search',
      component: Search,
      name: 'search',
      props: (route) => ({ placeholder: route.query.placeholder })
    },
    {
      path: '/cart',
      component: Cart,
      name: 'cart',
      beforeEnter: authGuard
    },
    {
      path: '*',
      component: NotFound,
      name: 'not-found'
    }
  ]
})

function authGuard (to: Route, from: Route, next: Function) {
  if ($store.state.loginStatus) {
    next()
    return
  }

  next({ name: 'login', query: { to: to.name } })
}

function refreshHeaderNav (to: Route, from: Route, next: Function) {
  $store.commit('changeCurrentHeaderNav', 0)

  next()
}
