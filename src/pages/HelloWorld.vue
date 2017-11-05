<template>
    <div class="container">
        <h2 class="padTop">Entdecke neue Musik...</h2>
        <h2>share music with your soul brothers & sisters</h2>
        <h2>have a good time</h2>
        <h2><strong>peace & love</strong></h2>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts">
                <img class="thumbnail" :src="post.better_featured_image.media_details.sizes.medium.source_url"/>
                <h3 v-html="post.title.rendered"></h3>
                <p v-html="post.excerpt.rendered"></p>
                <p vhtml="post.media"></p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
//  import axios from 'axios'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        errors: []
      }
    },
    computed: {
      ...mapState({
        posts: state => state.posts
      })
    },
    // Fetches posts when the component is created.
    created () {
      if (!this.posts.length) {
        this.loadPosts()
      }
    },
    methods: {
      ...mapActions({
        loadPosts: 'loadPosts'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/abstracts/settings";
    h1, h2 {
        font-weight: normal;
        font-size: 1.5rem;
    }
    h2{
        margin: 0;
        padding: 0;
        color: $secondary;
        text-align: center;
    }
    .padTop{
        color: $primary;
    }
    .container{
        margin-top: 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        max-width: 768px;
        margin: 0 auto;
    }

    li {
        display: inline-block;
        margin: 30px 3px 15px 3px;
        max-width: 240px;
        padding-bottom: 0 5px 15px 5px;
        border-bottom: 1px solid $secondary;
    }
    .thumbnail{
        max-width: 240px;
        /*-webkit-filter: grayscale(1);*/
        /*filter: grayscale(1);*/
    }
    a {
        color: #35495E;
    }
    .button--login{
        margin: 15px 0;
    }
</style>
