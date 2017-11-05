import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

import es6Promise from 'es6-promise'

es6Promise.polyfill()
Vue.use(Vuex)

const IS_LOADING = 'IS_LOADING'
const SHOW_MODAL = 'SHOW_MODAL'
const POSTS_LOADED = 'IS_LOADING'

const store = new Vuex.Store({
  state: {
    count: 0,
    auth: false,
    loading: false,
    showModal: false,
    posts: {}
  },
  mutations: {
    [IS_LOADING] (state) {
      state.loading = !state.loading
    },
    [SHOW_MODAL] (state, payload) {
      state.showModal = payload
    },
    [POSTS_LOADED] (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    showModal ({commit, state}, payload) {
      console.log('actions show modal', payload)
      commit(SHOW_MODAL, payload)
    },
    loadPosts ({state, commit}) {
      return api.getPosts().then((response) => {
        commit(POSTS_LOADED, response)
      })
    }
  }
})
export default store
