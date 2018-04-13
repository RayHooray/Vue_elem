<template>
  <div class="main">
    <HeaderTop title="首页">
    </HeaderTop>
    <div class="main_area">
      <div class="search">
        <router-link to="/search">
          <i class="iconfont icon-chazhao"></i>
          <span>搜索饿了么商家、商品名称</span>
        </router-link>
      </div>
      <Banner></Banner>
      <div class="nav_container">
        <div class="swiper-container" v-if="navArr.length>0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(cs, index) in navArr" :key="index">
              <div class="item" v-for="(c, index2) in cs" :key="index2">
                <img :src="c.image" alt="">
                <span>{{c.name}}</span>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="main_content">
          <div class="title">
            <span>—</span><span>推荐商家</span><span>—</span>
          </div>
          <ShopList>
          </ShopList>
        </div>
        <div class="load_more">
          <span>加载更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import Banner from '../../components/Banner/Banner'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        imgBaseUrl: 'https://fuss10.elemecdn.com/',
        imgBehide: '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      }
    },
    components: {
      HeaderTop,
      ShopList,
      Banner
    },
    mounted () {
      this.$store.dispatch('getMainNav')
      this.$store.dispatch('getShopInfo')
    },
    computed: {
      ...mapState(['navs']),

      navArr () {
        const max = 10
        const arr = []
        const {navs} = this
        let tempArr = null
        navs.forEach((c, index) => {
          if(!tempArr) {
            tempArr = []
            arr.push(tempArr)
          }
          if(tempArr.length<max) {
            tempArr.push(c)
          }
          if(tempArr.length===max) {
            tempArr = null
          }
        })

        return arr
      }

    },
    watch: {
      navs(value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .main_area
    position relative
    top 50px
    left 0
    right 0
    bottom 0
    .search
      background-color #0af
      padding 10px
      >a
        background #ffffff
        width 100%
        display block
        height 40px
        text-align center
        line-height 40px
        font-size 14px
    .nav_container
      width 100%
      box-sizing border-box
      .swiper-container
        height 100%
        width 100%
        background-color #ffffff
        bottom_border_1px(#efefef)
        .swiper-wrapper
          width 100%
          padding-bottom 20px
          .swiper-slide
            text-align center
            font-size 18px;
            background #fff;
            /* Center slide text vertically */
            display flex
            align-items center
            flex-wrap wrap
            .item
              padding 5px 0
              width 20%
              display flex
              flex-direction column
              align-items center
              >img
                width 45px
              >span
                font-size 10px
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #999
    .main_content
      background #ffffff
      position relative
      right 0
      left 0
      text-align center
      display flex
      justify-content space-around
      flex-direction column
      .title
        padding 20px 0
        bottom_border_1px(#efefef)
    .load_more
      height 100px
      text-align center
      line-height 50px
</style>
