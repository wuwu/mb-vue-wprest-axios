<template>
    <div class="main">
        <h2>Embed videos via id from soundcloud, youTube or vimeo</h2>
        <div class="player player--soundcloud">
            <h1>Soundcloud</h1>
            <vue-media-embed source="soundcloud://348824144" :auto-play="0" :allow-fullscreen="0"/>
            <p><label>Soundcloud by id: 348824144:</label></p>
            <div class="player player--youTube">
            </div>
            <h1>YouTube</h1>
            <vue-media-embed source="youtube://C6vinrXWxls" :auto-play="0" :allow-fullscreen="1"/>
            <p><label>YouTube by id: C6vinrXWxls:</label></p>
        </div>
        <h1>Vimeo</h1>
        <div class="player player--vimeo">
            <vue-media-embed source="vimeo://70114668" :auto-play="0" :allow-fullscreen="0"/>
            <p><label>Vimeo by id: 70114668:</label></p>
        </div>
    </div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import VueMediaEmbed from 'vue-media-embed'
  import store from '@/store'

  Vue.use(VueMediaEmbed, {store})

  export default {
    name: 'Videos',
    components: {},
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
    .main {
        max-width: 748px;
        margin: 0 auto;
    }
    h1{
        margin: 0;
        padding: 5px;
    }
    h2 {
        padding-bottom: 45px;
    }
    .player{
        margin-bottom: 45px;
    }
</style>
