<template>
    <div id="app">
        <app-header></app-header>
            <router-view class="site-content"/>
        <app-footer></app-footer>
        <div ref="loginModal" id="#netlify-modal"></div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapState } from 'vuex'
import netlifyIdentity from 'netlify-identity-widget'

// const netlifyIdentity = require('netlify-identity-widget')

export default {
  name: 'app',
  components: {
    'appHeader': Header,
    'appFooter': Footer
  },
  data () {
    return {
      modal: this.$refs.loginModal,
      loginModal: this.$refs.loginModal
    }
  },
  computed: {
    ...mapState({
      showModal: state => state.showModal
    })
  },
  mounted () {
    // Bind to events
//    netlifyIdentity.on('init', user => console.log('netlifyIdentity', user))
//    netlifyIdentity.on('login', user => console.log('netlify login', user))
//    netlifyIdentity.on('logout', () => console.log('Logged out'))
//    netlifyIdentity.on('error', err => console.error('error', err))
//    netlifyIdentity.on('open', () => console.log('Widget opened'))
//    netlifyIdentity.on('close', () => {
//      console.log('Widget closed')
//      const _self = this
//      _self.$store.dispatch('showModal', false)
//    })
  },
  methods: {
    onLogin () {
      console.log('emit received')
      this.$store.dispatch('showModal', true)
      console.log(this.loginModal)
      console.log(this.netlifyIdentity)
    }
  },
  watch: {
    showModal (newVal, oldVal) {
      if (this.showModal === true) {
        netlifyIdentity.open()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .site-content{
        flex: 1;
    }
    .enter { transform: translateX(100%) }
    .enter-to { transform: translateX(0) }
    .slide-enter-active { position: absolute }

    .leave { transform: translateX(0) }
    .leave-to { transform: translateX(-100%) }

    .slide-enter-active,
    .slide-leave-active { transition: all 750ms ease-in-out }
</style>
