<template>
  <div class="slider">
    <Carousel autoplay v-model="value2" class="v-slider">
      <Carousel-item>
        <div class="demo-carousel">
          <img src="./plugin/slider/banner01.png" alt="">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="./plugin/slider/banner02.png" alt="">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="./plugin/slider/banner03.png" alt="">
        </div>
      </Carousel-item>
    </Carousel>
    <div id="vote" >
      <Button type="primary" id="vote_button" shape="circle" @click="handleSelect('poll')">发起投票</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      value2: 0
    }
  },
  methods: {
    handleSelect (path) {
      console.log('1')
      this.$nextTick(() => {
        this.$router.push(path)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .hello{
    img{
      width 1500px
      height 500px
    }
  }
  #vote_button{
    width:400px;
    height:50px;}
  #vote{position:relative;
    top:30px;
    margin-bottom:50px;
  }
</style>
