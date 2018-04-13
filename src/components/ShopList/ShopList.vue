<template>
  <div class="shop_list">
    <ul v-if="shops.length" class="list">
      <li class="item" v-for="(shop, index) in shops" :key="index">
        <div class="shop_info">
          <div class="shop_img">
            <img :src="shop.image_path" alt="">
          </div>
          <div class="shop_details">
            <div class="shop_name">
              <div class="name">
                <span class="brand" v-if="shop.is_premium">品牌</span>
                <span class="shop_title">{{shop.name}}</span>
              </div>
              <div name="guaratee">
                <ul class="other" v-if="shop.supports.length">
                  <li class="item" v-for="(item, index) in shop.supports" :key="index">
                    {{item.icon_name}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop_evalution">
              <div class="stars">
                <span class="star"></span>
              </div>
              <div class="fengniao" v-if="shop.delivery_mode">
                {{shop.delivery_mode.direction}}
              </div>
            </div>
            <div class="shop_fee">
              <div class="cost">
                <span>¥{{shop.piecewise_agent_fee.rules[0].price}}起送</span>|<span>配送费¥{{shop.piecewise_agent_fee.rules[0].fee}}</span>
              </div>
              <div class="dis_time">
                <span>1.15km</span>|<span>30分钟</span>
              </div>
            </div>
          </div>
        </div>
        <div class="other_info">
          <section class="koubei">
          <span class="img">
            <img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="">
          </span>
            <span class="koubei_content">{{shop.recommend.reason}}</span>
          </section>
          <div class="privilege">
            <div class="new_user">
              <span class="label">
                {{shop.activities[0].icon_name}}
              </span>
              <span>
                {{shop.activities[0].description}}
              </span>
            </div>
            <div class="te">
              <span class="label">
                {{shop.activities[1].icon_name}}
              </span>
              <span>
                {{shop.activities[1].name}}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data: {
      isDisplay: false
    },
    methods: {
      clickDisplay () {
        this.isDisplay = !this.isDisplay
        console.log(this.isDisplay)
      }
    },
    computed: {
      ...mapState(['shops'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shop_list
    >ul
      background-color #ffffff
      width 100%
      >li
        box-sizing border-box
        padding 10px
        display flex
        flex-direction column
        justify-content space-between
        bottom_border_1px(#efefef)
        .shop_info
          display flex
          justify-content space-between
          .shop_img
            width 75px
            border 1px solid #efefef
            img
              width 100%
        .shop_details
          width 100%
          display flex
          flex-direction column
          justify-content space-between
          padding-left 10px
          .shop_name
              display flex
              justify-content space-between
            .name
              display flex
              justify-content space-between
            .brand
              display block
              width 30px
              height 17px
              font-size 12px
              background #eeee00
              line-height 17px
              font-weight bolder
              border-radius 3px
              margin-right 5px
            .shop_title
              display block
              font-weight bolder
          .shop_evalution
            display flex
            justify-content space-between
          .shop_fee
            width 100%
            display flex
            justify-content space-between
            .cost
              color #666
              font-size 10px
            .dis_time
              font-size 10px
              color #999
        .other_info
          display flex
          justify-content space-around
          flex-direction column
          padding-left 90px
          .koubei
            display flex
            justify-content flex-start
            padding 10px 0
            .img
              width 13px
              margin-right 5px
              img
                width 100%
            .koubei_content
              font-size 5px
              color #ee0000
              line-height 15px
          .privilege
            display flex
            flex-direction column
            justify-content space-between
            >div
              padding-top 5px
              display flex
              justify-content flex-start
              font-size 10px
              color #666
              .label
                margin-right 5px
                display block
                width 15px
                height 15px
                line-height 15px
                border-radius 3px
                color #ffffff
              &.new_user
                .label
                  background-color #90ee90
              &.te
                .label
                  background-color #ee9572
</style>
