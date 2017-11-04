import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

import es6Promise from 'es6-promise'

es6Promise.polyfill()
Vue.use(Vuex)

const IS_LOADING = 'IS_LOADING'
const POSTS_LOADED = 'IS_LOADING'

const store = new Vuex.Store({
  state: {
    count: 0,
    auth: false,
    loading: false,
    posts: {}
  },
  mutations: {
    [IS_LOADING] (state) {
      state.loading = !state.loading
    },
    [POSTS_LOADED] (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    loadPosts ({state, commit}) {
      return api.getPosts().then((response) => {
        commit(POSTS_LOADED, response)
      })
    }
  }
})
export default store
