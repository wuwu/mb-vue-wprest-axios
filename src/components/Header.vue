<template>
    <div class="header">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item logo">
                    <figure class="image svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="68" viewBox="0 0 112 68">
                            <g fill="none" fill-rule="evenodd">
                                <polygon fill="#2C2B2D" points="56.16 67.2 56.16 27.168 38.976 47.52 35.616 47.52 18.816 27.264 18.816 67.2 0 67.2 0 0 19.872 0 37.536 22.752 55.2 0 74.976 0 74.976 67.2"/>
                                <polygon fill="#37B685" points="112 0 112 67.5 81 33.751" transform="matrix(-1 0 0 1 193 0)"/>
                            </g>
                        </svg>
                    </figure>
                    <small>musikblog.de</small>
                </router-link>
                <a @click.prevent="onLogin" class="navbar-item is-hidden-desktop" href="#" target="_blank">
                  <span class="icon">
                    <i class="mdi mdi-36px mdi mdi-account-circle"></i>
                  </span>
                </a>
                <a class="navbar-item is-hidden-desktop" href="#" target="_blank">
                  <span class="icon">
                    <i class="mdi mdi-36px mdi-magnify"></i>
                  </span>
                </a>
                <div @click.prevent="toggleNav" class="navbar-burger burger" data-target="navMenuTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenuTransparentExample" class="navbar-menu" :class="{'is-active': active}">
                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <router-link to="/" class="navbar-link">Blog</router-link>
                        <div id="blogDropdown" class="navbar-dropdown is-boxed" data-style="width: 18rem;">
                            <a class="navbar-item" href="#">News</a>
                            <a class="navbar-item" href="#">Alben</a>
                            <a class="navbar-item" href="#">Konzertberichte</a>
                            <a class="navbar-item" href="#">Interviews</a>
                            <a class="navbar-item" href="#">Videos</a>
                            <a class="navbar-item" href="#">Artists</a>
                            <a class="navbar-item" href="#">Label</a>
                            <hr class="navbar-divider">
                            <div class="navbar-item">
                                <div class="navbar-content">
                                    <div class="level is-mobile">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <strong>Stay up to date!</strong>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <a class="button bd-is-rss is-small" href="https://bulma.io/atom.xml">
                          <span class="icon is-small">
                            <i class="mdi mdi-rss"></i>
                          </span>
                                                    <span>Subscribe</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/stream" class="navbar-link">Stream</router-link>

                </div>
                <div class="navbar-end">
                    <div class="navbar-item is-hidden-touch">
                        <div class="field">
                            <p class="control">
                                <button @click.prevent="onLogin" class="button button--login" href="#">
                                    <span class="icon"><i class="mdi mdi-account-circle mdi-36px"></i></span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </div>
</template>

<script type="text/babel">
  export default {
    name: 'AppHeader',
    components: {
    },
    data: function () {
      return {
        logoUrl: `logo.svg`,
        active: false
      }
    },
    methods: {
      toggleNav: function () {
        this.active = !this.active
        console.log(this.active)
      },
      toggleDropdown () {
        this.showDropdown = !this.showDropdown
      },
      onLogin () {
        console.log('login triggered')
        this.$emit('onLogin')
        this.$store.dispatch('showModal', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .navbar{
        margin-bottom: 15px;
        p {
          font-size: 18px;
          font-weight: 500;
          padding: 3px 0;
          margin: 0;
        }
    }
    .logo{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        line-height: 12px;
        small{
            font-size: 10px;
            font-weight: 700;
        }
    }
    .button--login{
        border: none;
    }
    figure {
        margin-bottom: 0;
        svg{
            width: 48px;
            height: 30px;
        }
    }
</style>
