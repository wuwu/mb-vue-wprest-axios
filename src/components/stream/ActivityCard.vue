<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ activity.actor }}</p>
                    <p class="subtitle is-6">@{{ activity.actor }}</p>
                </div>
            </div>

            <div class="content">
                        <div><strong>{{ activity.tweet}}</strong></div>
                        <div><small>Verb:</small> {{ activity.verb }}<br>
                            <small>ID: {{ activity.id }}</small>
                        </div>
                <br>
                <time class="date date--from" :datetime="activity.time">{{ activity.time | moment("from") }}</time><br>
                <time class="date date--medium" :datetime="activity.time">{{ activity.time | moment("DD.MM.YYYY - HH:MM") }}</time>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return { }
  },
  destroyed () { },
  mounted () { },
  name: 'ActivityCard',
  props: [
    'activity'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .date{
        font-size: 14px;
    }
    .date--from{
        font-weight: 700;
    }
</style>
