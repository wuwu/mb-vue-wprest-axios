import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Videos from '@/pages/demos/Videos'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: HelloWorld },
    { path: '/demo/videos', name: 'Videos', component: Videos }
  ]
})
