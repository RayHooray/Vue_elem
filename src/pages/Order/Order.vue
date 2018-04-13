<template>
  <div class="order">
    <HeaderTop title="订单列表">
      <router-link slot="left" to="/main" class="back">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
    </HeaderTop>
    <div class="order_area">
      <div class="info">
        <div class="img">
          <img src="https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" alt="">
        </div>
        <span>登陆后查看外卖订单</span>
      </div>
      <router-link to="/login">
        <input class="btn" type="submit" value="立即登录">
      </router-link>
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
  .order
    display flex
    flex-direction column
    justify-content center
    text-align center
    height 100%
    .back
      .iconfont
        color #fff
        font-size 25px
    .info
      display flex
      flex-direction column
      .img
        margin-bottom 10px
      span
        font-size 15px
        color #666
    .btn
      margin-top 20px
      background-color #0af
      color: #ffffff
      font-weight 900
      border-radius 4px
      width 100px
      line-height 30px
</style>
