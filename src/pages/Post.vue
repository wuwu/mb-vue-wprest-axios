<template>
    <div class="router-view">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <a class="nav-item button is-link is-outlined" @click.prevent="toggleJson">{{ showJson ? 'Hide Json Response' : 'Show Json Response' }}</a>
        </nav>
        <div v-if="showJson" class="container is-fluid">
            <div class="columns">
                <div class="column">
                    <h2>pure_taxonomies plugin</h2>
                    <pre>{{taxonomy}}</pre>
                </div>
                <div class="column">
                    <h2>pure_taxonomies plugin</h2>
                    <pre>{{post}}</pre>
                </div>
                <div class="column">
                    <h2>pure_taxonomies plugin</h2>
                    <pre>{{taxonomy}}</pre>
                </div>
            </div>
        </div>
        <div v-else class="post container">
            <h1 class="title is-1" v-html="post.title.rendered"></h1>
            <figure class="image is-4x3">
                <img :src="post.better_featured_image.media_details.sizes.large.source_url"
                     :width="post.better_featured_image.media_details.sizes.large.width"
                     :height="post.better_featured_image.media_details.sizes.large.height">
            </figure>
            <div class="post-content" v-html="post.content.rendered"></div>
            <div class="box">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="author.avatar_urls['48']" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{author.name}}</strong><br>
                                <small class="post-date">{{ post.date | moment("DD.MM.YYYY") }}</small>
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <button class="button is-link" @click.prevent="toggleJson">{{ showJson ? 'Hide Json Response' : 'Show Json Response' }}</button>
    </div>
</template>

<script type="text/babel">
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'Post',
    components: {},
    data: function () {
      return {
        post: {},
        test: 'wuwu',
        showJson: false
      }
    },
    computed: {
      ...mapState({
        postId: state => state.postOnDisplay
      }),
      author () {
        return this.post._embedded.author[0]
      },
      taxonomy () {
        return this.post.pure_taxonomies
      }
    },
    beforeCreate () {
    },
    created () {
      // Check if post is loaded
      const slug = this.$route.params.slug
      // const id = this.$store.state.postOnDisplay
      const id = this.$store.getters.getPostIdBySlug(slug)
      this.post = (id) ? this.$store.getters.getPostById(id) : this.loadPostBySlug(slug)
      console.log('post', this.post)
      console.log('beforeCreate', slug, id)
    },
    mounted () {
      console.log('mounted:', this.data)
    },
    methods: {
      ...mapActions({
        loadPostBySlug: 'loadSinglePost'
      }),
      toggleJson () {
        this.showJson = !this.showJson
      }
    }
  }
</script>

<style lang="scss" scoped>
    figure{
        margin-bottom: 30px;
    }
    .navbar{
        background: $primary;
    }
    .container{
        margin-bottom: 30px;
    }
</style>
