<template>
    <div class="router-view">
        <a class="post--next" @click.prevent="navigateToPost({id: nextPost.id, slug: nextPost.slug})">next >></a>
        <h1 class="title title--post is-1 has-text-centered" v-html="post.title.rendered"></h1>
        <div class="tags tags-category">
            <span class="tag is-light">Kategorie:</span>
            <span class="tag is-white" v-for="cat in taxonomy.categories" :class="'tag--' + cat.slug">{{cat.name}}</span>
            <span class="tag is-light">Artist:</span>
            <span class="tag tag--artist is-white" v-for="cat in taxonomy.artist">{{cat.name}}</span>
            <span v-if="taxonomy.label" class="tag is-light">Label:</span>
            <span v-if="taxonomy.label" class="tag tag--label is-white" v-for="cat in taxonomy.label">{{cat.name}}</span>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-12">
                <div class="tile is-child box">
                    <div class="block is-flex">
                        <tabs alignment="centered" :only-fade="false">
                            <tab-pane label="Article" selected>
                                <div class="container">
                                    <figure class="image is-4x3">
                                        <img :src="post.better_featured_image.media_details.sizes.large.source_url"
                                             :width="post.better_featured_image.media_details.sizes.large.width"
                                             :height="post.better_featured_image.media_details.sizes.large.height">
                                    </figure>
                                    <div class="post-content" v-html="post.content.rendered"></div>
                                    <div class="box box--author">
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
                            </tab-pane>
                            <tab-pane label="JSON All">
                                    <h2 class="title is-1">Json Post</h2>
                                    <pre>{{post}}</pre>
                            </tab-pane>
                            <tab-pane label="JSON Taxonomy" selected>
                                <h2 class="title is-1">Json Section -> pure_taxonomies</h2>
                                <pre>{{taxonomy}}</pre>
                            </tab-pane>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
  import {mapState, mapActions, mapGetters} from 'vuex'
  import { Tabs, TabPane } from '@/components/tabs'

  export default {
    name: 'Post',
    components: {
      Tabs,
      TabPane
    },
    data: function () {
      return {
        slug: this.$route.params.slug
      }
    },
    computed: {
      ...mapState({
        postId: state => state.postOnDisplay
      }),
      ...mapGetters({
        nextPost: 'getNextPost'
      }),
      author () {
        return this.post._embedded.author[0]
      },
      taxonomy () {
        return this.post.pure_taxonomies
      },
      id () {
        return this.$store.getters.getPostIdBySlug(this.slug)
      },
      post () {
        return this.$store.getters.getPostById(this.postId)
      }
    },
    created () {
      // Check if post is loaded
      // const slug = this.$route.params.slug
      // console.log('created:', slug)
      // const id = this.$store.state.postOnDisplay
      // const id = this.$store.getters.getPostIdBySlug(slug)
      // this.post = (id) ? this.$store.getters.getPostById(id) : this.loadPostBySlug(slug)
      console.log('post', this.post)
      console.log('Post.vue created', this.slug, this.id)
    },
    beforeUpdate () {
      const slug = this.$route.params.slug
      console.log('beforeupdate', slug)
      const id = this.$store.getters.getPostIdBySlug(slug)
      this.post = this.$store.getters.getPostById(id)
    },
    updated () {
      const slug = this.$route.params.slug
      console.log('update', slug)
    },
    methods: {
      ...mapActions({
        loadPostBySlug: 'loadSinglePost',
        getPost: 'navigateToPost'
      }),
      navigateToPost (e) {
        console.log('navigateToPost', e.id, e.slug)
        this.getPost(e.id)
        this.$router.push({name: 'Post', params: { slug: e.slug }})
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
    pre{
        max-width: calc(100vw - 60px);
    }
    .title--post{
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 10px;
    }
    .box{
        border-radius: 0;
    }
    .tags{
        justify-content: center;
        margin-bottom: 0;
    }
    .tag{
        cursor: pointer;
    }
    .post--next{
        text-align: right;
        padding-right: 15px;
        display: block;
        color: $black;
        font-size: 14px;
    }
</style>
