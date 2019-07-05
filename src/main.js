import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
// import(/* webpackPreload: true */ "materialize-css/dist/css/materialize.min.css")
// @doc /> https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
