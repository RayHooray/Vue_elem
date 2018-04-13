<template>
  <div class="banner">
    <div class="swipers-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#">
            <img src="https://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="https://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted () {
      let my_swiper = new Swiper('.swipers-container', {
        loop: true,
        autoplay: {
          stopOnLastSlide: false, //是否在最后一个slide停止
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner
    width 100%
    .swipers-container
      position relative
      width 100%;
      overflow hidden
      .swiper-wrapper
        .swiper-slide
          text-align center
          font-size 18px
          background #fff
          /* Center slide text vertically */
          display flex
          align-items center
          >a
            width 100%
            display block
            >img
              width 100%
</style>
