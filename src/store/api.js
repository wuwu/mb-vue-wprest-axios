import WPAPI from 'wpapi'

const wp = new WPAPI({ endpoint: 'http://dev.musikblog.de1.cc/wp-json/' })

export default {
  getPosts () {
    return wp.posts().perPage(27)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
