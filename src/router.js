import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Histoire from './views/Histoire.vue'
import Extraits from './views/Extraits.vue'
import Entrevue from './views/Entrevue.vue'
import Actu from './views/Actualites.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
        isPublicLink: true
      }
    },
    {
      path: '/histoire',
      name: 'histoire',
      component: Histoire,
      meta: {
        requiresAuth: false,
        isPublicLink: true
      }
    },
    {
      path: '/extraits',
      name: 'extraits',
      component: Extraits,
      meta: {
        requiresAuth: false,
        isPublicLink: true
      }
    },
    {
      path: '/entrevue',
      name: 'entrevue',
      component: Entrevue,
      meta: {
        requiresAuth: false,
        isPublicLink: true
      }
    },
    {
      path: '/actualites',
      name: 'actu',
      component: Actu,
      meta: {
        requiresAuth: false,
        isPublicLink: true
      }
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
