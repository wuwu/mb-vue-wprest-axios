<template>
    <div class="container">
        <h1>Your Feed</h1>
        <p>using sample feed from stream.io</p>
        <div class="columns">
            <div class="column is-9 tweets">
                <activity-card
                        v-for="activity in activities"
                        :key="activity.id"
                        class="tweet"
                        :activity="activity">
                </activity-card>
            </div>
            <div class="column">
                <h3 class="has-text-size-3 has-text-weight-bold">Create Activity:</h3>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
  import * as stream from 'getstream'
  import ActivityCard from '@/components/stream/ActivityCard'

  export default {
    components: {
      ActivityCard
    },
    data: function () {
      return {
        activities: []
      }
    },
    destroyed () { },

    methods: {
      getActivities: function () {
        this.activities = []
// Initialize the client with your api key, no secret and your app id
        var client = stream.connect('x98u2tzkqhz9', null, '30771')
// For the feed group 'user' and user id 'eric' get the feed
// The access token at the end is only needed for client side integrations
        var ericFeed = client.feed('user', 'eric', 'LxwBA5qhvsHOw8WPxkmP_MwqFgs')
// Add the activity to the feed
        ericFeed.addActivity({
          actor: 'eric',
          tweet: 'Hello world',
          verb: 'tweet',
          object: 1
        })
        // Let Jessica's flat feed follow Eric's feed
        const jessicaFlatFeed = client.feed('timeline', 'jessica', 'f_1uHxlrLJPoFhwtU3pcu_SgmQg')
        jessicaFlatFeed.follow('user', 'eric')
        jessicaFlatFeed.get({ limit: 10 }).then(response => {
          response['results'].map((a) => { this.activities.push(a) })
          console.log('activityData', response.results)
        })
      }
    },
    mounted () {
      this.getActivities()
    },
    name: 'FeedActivityList'
  }
</script>

<style lang="scss" scoped>
    .tweets{
        display: flex;
        flex-wrap: wrap;
    }
    .tweet{
        flex-grow: 1;
        width: 45%;
    }
    .tweet:nth-child(even) {
         margin-top: 90px;
        margin-left: 10px;
    }
    .tweet:nth-child(odd) {
        margin-top: 30px;
        margin-right: 10px;
        margin-bottom: 60px;
    }
</style>