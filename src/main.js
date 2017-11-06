// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store'
import netlifyIdentity from 'netlify-identity-widget'

// import registerServiceWorker from './ServiceWorker'

netlifyIdentity.init()

require('@/assets/scss/main.scss')

Vue.use(require('vue-moment'))

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// registerServiceWorker()

Vue.config.productionTip = false
