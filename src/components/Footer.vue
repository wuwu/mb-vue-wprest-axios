<template>
<footer>
    <div class="nav">
        Demos:
        <router-link :to="{name: 'Videos'}" tag="button" class="button">
            Embedded Video
        </router-link>
    </div>
</footer>
</template>abanaly

<script type="text/babel">
  export default {
    name: 'AppFooter',
    components: {},
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
footer{
    background-color: #37B685;
    width: 100%;
    padding: 15px;
    margin: 0;
    button{
        padding: 8px 16px;
        background-color: #35495e;
        color: white;
        border: none;
        margin-left: 15px;
        font-size: 18px;
    }
}
</style>
