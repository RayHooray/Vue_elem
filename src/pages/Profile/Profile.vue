<template>
  <div class="profile">
    <HeaderTop title="我的">
      <router-link slot="left" to="/main" class="back">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
    </HeaderTop>
    <div class="profile_main">
      <div class="user_info">
        <div class="left">
          <!--头像区域-->
          <div class="avatar">
          </div>
        </div>
        <div class="right">
          <router-link to="/login" class="right_link">
            <div class="info">
              <p class="no1">登录/注册</p>
              <p class="no2"><i class="iconfont icon-shouye"></i> 登录后享受更多特权</p>
            </div>
            <span class="detail">></span>
          </router-link>
        </div>
      </div>
      <div class="wealth">
        <div class="wallet">
          <i class="iconfont icon-qianbao"></i>
          <span>钱包</span>
        </div>
        <div class="redbag">
          <i class="iconfont icon-hongbao"></i>
          <span>红包</span>
        </div>
        <div class="golden">
          <i class="iconfont icon-jinbi"></i>
          <span>金币</span>
        </div>
      </div>
      <div class="other_server">
        <div class="address">
          <router-link to="#">
            <i class="iconfont icon-dizhi"></i>
            <span class="adc">我的地址</span>
          </router-link>
        </div>
        <div class="award">
          <div class="mall">
            <router-link to="#">
              <i class="iconfont icon-shangcheng"></i>
              <span class="content">金币商城</span>
            </router-link>
          </div>
          <div class="fivecash">
            <router-link to="#">
              <i class="iconfont icon-liwu"></i>
              <span class="content">分享拿5元现金</span>
            </router-link>
          </div>
        </div>
        <div class="service">
          <div>
            <router-link to="#">
              <i class="iconfont icon-kefu"></i>
              <span class="content">我的客服</span>
            </router-link>
          </div>
          <div>
            <router-link to="#">
              <i class="iconfont icon-APP"></i>
              <span class="content">下载APP</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  export default {
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile
    width 100%
    height 100%
    .back
      .iconfont
        color #fff
        font-size 25px
    .profile_main
      width 100%
      position relative
      top 50px
      .user_info
        box-sizing border-box
        width 100%
        display flex
        padding 20px
        background #0af
        justify-content space-between
        .left
          width 60px
          height 60px
          .avatar
            background #fff
            width 100%
            height 100%
            border-radius 50%
        .right
          width 75%
          box-sizing border-box
          .right_link
            height 100%
            display flex
            justify-content space-between
            .info
              display flex
              flex-direction column
              justify-content space-around
              .no1
                font-size 24px
                font-weight bolder
                color #ffffff
              .no2
                font-size 10px
                color #fff
            .detail
              line-height 60px
              color #fff
              font-weight bolder
      .wealth
        width 100%
        display flex
        >div
          width 33.33333%
          background-color #ffffff
          display flex
          flex-direction column
          justify-content space-around
          text-align center
          padding 20px 0
          border-right 1px solid #ddd
          >span
            margin-top 15px
      .other_server
        width 100%
        display flex
        flex-direction column
        >div
          background-color #fff
          margin-top 10px
          &.address
            height 40px
            line-height 40px
            .adc
              color #333
          >div
            border-bottom 1px solid #ddd
            height 40px
            line-height 40px
            padding 0 5px
            .content
              color #333
              padding-left 5px
</style>
