<template>
    <div>
        <div v-if="!isLoadingPosts" class="container">
            <ul v-if="posts && posts.length" class="posts">
                <li v-for="post of posts"
                    key="post.index"
                    class="post tile"
                    @click.prevent="navigateToPost({id: post.id, slug: post.slug})">
                    <img class="thumbnail" :src="post.better_featured_image.media_details.sizes.medium.source_url"/>
                    <h3 v-html="post.title.rendered"></h3>
                    <p v-html="post.excerpt.rendered"></p>
                    <p vhtml="post.media"></p>
                    <router-link :to="{ name: 'Post', params: { id: post.id, slug: post.slug }}">read more</router-link>
                    <a @click.prevent="navigateToPost({id: post.id, slug: post.slug})">read Post</a>
                </li>
            </ul>
        </div>
        <div v-else class="container">
            <h2 class="padTop">Entdecke neue Musik...</h2>
            <div class="logo">
                <img src="../assets/svg/logo.svg">
            </div>
            <h2>share music with your soul brothers & sisters</h2>
            <h2>have a good time</h2>
            <h2><strong>peace & love</strong></h2>
            <div class="container--loading">
                <h1 class="title is-1 has-text-centered has-text-primary has-text-weight-bold	">Loading Data...</h1>
            </div>
        </div>
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
        posts: state => state.posts,
        isLoadingPosts: state => state.loading
      })
    },
    // Fetches posts when the component is created.
    mounted () {
      if (!this.posts.length) {
        console.log('loading posts')
        this.loadPosts()
      }
    },
    methods: {
      ...mapActions({
        loadPosts: 'loadPosts',
        readPost: 'navigateToPost'
      }),
      navigateToPost (e) {
        console.log(e.id, e.slug)
        this.readPost(e.id)
        this.$router.push({name: 'Post', params: { slug: e.slug }})
      }
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
    .container--loading{
        width: 320px;
        border: solid 1px $primary;
        padding: 45px 0;
        margin: 45px auto;
    }
    .logo{
        margin: 45px 30px 45px 30px;
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
        padding-bottom: 0 5px 15px 5px;
        border-bottom: 1px solid $secondary;
        cursor: pointer;
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
