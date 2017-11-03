<template>
    <div class="hello">
        <h1>Musikblog.de</h1>
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
  import axios from 'axios'

  export default {
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created () {
      // http://dev.musikblog.de1.cc/wp-json/wp/v2/posts
      // axios.get('http://jsonplaceholder.typicode.com/posts')
      axios.get('http://dev.musikblog.de1.cc/wp-json/wp/v2/posts')
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
            console.log(this.posts.length())
          })
          .catch(e => {
            this.errors.push(e)
          })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
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
        border-bottom: 1px solid #bada55;
    }
    .thumbnail{
        max-width: 240px;
        /*-webkit-filter: grayscale(1);*/
        /*filter: grayscale(1);*/
    }
    a {
        color: #35495E;
    }
</style>
