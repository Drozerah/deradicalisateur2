import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  // scroll to top @{doc} /> https://router.vuejs.org/guide/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

/* PageNotFound redirection */
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/')
  } else {
    next()
  }
})

export default router
