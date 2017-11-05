<template>
    <div id="app">
        <app-header></app-header>
        <router-view/>
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
    netlifyIdentity.on('init', user => console.log('netlifyIdentity', user))
    netlifyIdentity.on('login', user => console.log('netlify login', user))
    netlifyIdentity.on('logout', () => console.log('Logged out'))
    netlifyIdentity.on('error', err => console.error('error', err))
    netlifyIdentity.on('open', () => console.log('Widget opened'))
    netlifyIdentity.on('close', () => {
      console.log('Widget closed')
      const _self = this
      _self.$store.dispatch('showModal', false)
    })
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

<<style lang="scss" scoped>
    >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
