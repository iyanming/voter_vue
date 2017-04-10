<template>
<div class="slider">
  <Carousel autoplay v-model="value2" class="v-slider">
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner01.png" alt="">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner02.png" alt="">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner03.png" alt="">
      </div>
    </Carousel-item>
  </Carousel>
</div>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider{
    img{
      width 1500px
      height 500px
    }
  }
</style>
