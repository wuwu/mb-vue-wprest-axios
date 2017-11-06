<template>
    <div class="container">
        <button class="button is-link" @click.prevent="toggleJson">{{ showJson ? 'Hide Json Response' : 'Show Json Response' }}</button>
        <div v-if="showJson" class="json-reponse">
            <pre>{{post}}</pre>
        </div>
        <div v-else class="post container">
            <h1 class="title is-1" v-html="post.title.rendered"></h1>
            <div class="post-date">{{post.date | dd.mm.YYYY}}</div>
            <figure class="image is-4x3">
                <img :src="post.better_featured_image.media_details.sizes.large.source_url"
                     :width="post.better_featured_image.media_details.sizes.large.width"
                     :height="post.better_featured_image.media_details.sizes.large.height">
            </figure>
            <div class="post-content" v-html="post.content.rendered"></div>
            <div class="author">Author:{{author.name}}</div>
        </div>
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
    .container{
        margin-bottom: 30px;
    }
</style>
