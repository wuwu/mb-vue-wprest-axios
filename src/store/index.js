import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

import es6Promise from 'es6-promise'

es6Promise.polyfill()
Vue.use(Vuex)

const IS_LOADING = 'IS_LOADING'
const SHOW_MODAL = 'SHOW_MODAL'
const POSTS_LOADED = 'IS_LOADING'
const SHOW_SINGLE_POST = 'SHOW_SINGLE_POST'

const store = new Vuex.Store({
  state: {
    count: 0,
    auth: false,
    loading: false,
    showModal: false,
    postOnDisplay: '',
    test: 'wuwu',
    posts: []
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
    },
    [SHOW_SINGLE_POST] (state, payload) {
      state.postOnDisplay = payload
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
    },
    loadSinglePosts ({state, commit}, id) {
      console.log('action load singelpost', id)
    },
    navigateToPost ({commit, state}, postId) {
      commit(SHOW_SINGLE_POST, postId)
    }
  },
  getters: {
    getPostById: (state, getters) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    getPostIdBySlug: (state, getters) => (slug) => {
      let post = state.posts.find(post => post.slug === slug)
      let id = (typeof post === 'undefined') ? null : post.id
      return id
    }
  }
})
export default store
