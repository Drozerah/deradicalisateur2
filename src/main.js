import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
// import(/* webpackPreload: true */ "materialize-css/dist/css/materialize.min.css")
// @doc /> https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c
import Vue2Filters from 'vue2-filters'
import VueMq from 'vue-mq'
Vue.config.productionTip = false

Vue.use(Vue2Filters)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    tablet: 992,
    laptop: 1200,
    desktop: Infinity
  }
})

new Vue({
  router,
  VueMq,
  render: h => h(App)
}).$mount('#app')
