import WPAPI from 'wpapi'

const wp = new WPAPI({ endpoint: 'http://dev.musikblog.de1.cc/wp-json/' })

export default {
  getPosts () {
    return wp.posts().perPage(25).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  getPostBySlug (slug) {
    return wp.posts().slug(slug).perPage(1).embed()
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
