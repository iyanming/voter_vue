<template>

  <div class="header">
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-if="login">
      <Menu-item name="slider">
        <Icon type="ios-paper"></Icon>
        GO TO Slider

      </Menu-item>
      <Menu-item name="hello">
        <Icon type="ios-people"></Icon>
        GO TO Hello

      </Menu-item>
      <Menu-item name="3">
        <Icon type="settings"></Icon>
        不知道去哪

      </Menu-item>
    </Menu>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-else>
      <Menu-item name="login">
        <Icon type="ios-paper"></Icon>
        Login

      </Menu-item>
      <Menu-item name="register">
        <Icon type="ios-people"></Icon>
        Register

      </Menu-item>
    </Menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'header',
    props: {
      login: {
        type: Boolean
      }
    },
    data () {
      return {
        msg: 'this is the header',
        theme1: 'light'
      }
    },
    methods: {
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path)
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header {
    float right

  }
</style>
