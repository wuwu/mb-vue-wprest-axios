<template>
  <div id="back-scrolltop" class="row" v-if="scrolled">
    <div class="small-12 column">
      <span @click.prevent="scrollToTop" class="button--scrolltop">
        <img :src="require('../assets/images/to-top.png')" width="54" height="54"/>
      </span>
    </div>
  </div>
</template>

<script>
  import '../assets/images/to-top.png'
  export default {
    name: 'ScrollTopButton',
    props: [
      'target'
    ],
    data () {
      return {
        scrolled: false
      }
    },

    methods: {
      scrollToTop () {
        const scrollDuration = 500
        const scrollHeight = window.scrollY
        let scrollStep = Math.PI / (scrollDuration / 15)
        let cosParameter = scrollHeight / 2
        let scrollCount = 0
        let scrollMargin = 0
        let scrollInterval = setInterval(function () {
          if (window.scrollY !== 0) {
            scrollCount = scrollCount + 1
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
            window.scrollTo(0, (scrollHeight - scrollMargin))
          } else clearInterval(scrollInterval)
        }, 15)
      },
      handleScroll () {
        this.scrolled = window.scrollY > 0
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="scss" scoped>
  .button--scrolltop{
    position: fixed;
    z-index: 100;
    right:0;
    bottom: 25px;
    padding-right: 5px;
    margin-bottom: 25px;
    margin-top: 25px;
    &:hover{
      cursor: pointer;
     }
    @include tablet{
      padding-right: 30px;
    }
    .svg-fill{
        fill: rgba($primary, .55);
        path{
          fill: $white;
        }
    }

  }
</style>
