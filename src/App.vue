<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header-wrapper cls">
      <VHeader :login="login"></VHeader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import VHeader from './components/content/header/header'
  export default {
    name: 'app',
    data () {
      return {
        login: false
      }
    },
    components: {
      VHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/styls/util.styl"
  #app {
    max-width 1280px
    margin 0 auto
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
  }
</style>
