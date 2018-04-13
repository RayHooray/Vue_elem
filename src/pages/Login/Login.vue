<template>
  <div class="login">
    <div class="logo">
      <span class="img">
        <img src="./images/logo.jpg" alt="">
      </span>
      <span class="font">Everything 30°</span>
    </div>
    <div class="login_method">
      <ul class="login_options">
        <li class="mobile" :class="{on: isUse}" @click="switchMethod(true)">
          <span>短信登录</span>
        </li>
        <li class="account" :class="{on: !isUse}" @click="switchMethod(false)">
          <span>密码登录</span>
        </li>
      </ul>
    </div>
    <div class="login_content">
      <form>
        <div class="login_mobile" :class="{hide: !isUse}">
          <div class="phone_num">
            <input type="text" maxlength="11" placeholder="手机号">
            <button class="get_verification">获取验证码</button>
          </div>
          <div>
            <input type="text" placeholder="验证码">
          </div>
          <span>
            温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<a href="">《用户服务协议》</a>
          </span>
        </div>
        <div class="login_pwd" :class="{hide: isUse}">
          <div class="phone_num">
            <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
          </div>
          <div class="pwd">
            <input type="password" placeholder="密码">
          </div>
        </div>
        <div class="btn">
          <input type="submit" value="登录">
          <span>关于我们</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  export default {
    data () {
      return{
        isUse: true
      }
    },
    components: {
      HeaderTop
    },
    methods: {
      switchMethod (isUse) {
        this.isUse = isUse
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    position relative
    background-color #fff
    height 100%
    left 0
    right 0
  .logo
    display flex
    width 100%
    flex-direction column
    justify-content center
    align-items center
    background-color #ffffff
    padding 50px
    box-sizing border-box
    .img
      width 200px
      >img
        width 100%
    .font
      color #0af
      margin-top -20px
      font-size 15px
  .login_method
    position relative
    left 0
    right 0
    .login_options
      margin 0 auto
      display flex
      justify-content center
      >li
        margin 20px
        line-height 25px
        &.on
          color #0af
          border-bottom 2px solid #0af
        >span
          font-weight bolder
          font-size 15px
  .login_content
    width 100%
    form
      >div
        display flex
        justify-content space-between
        flex-direction column
        align-items center
        &.hide
          display none
        >div
          width 100%
          margin-top 15px
          &.phone_num
            position relative
          >input
            margin 0 auto
            border-radius 4px
            border 1px solid #999
            padding 14px
            width 80%
            display block
            font-size 15px
            color #999
          .get_verification
            border 0
            background-color transparent
            position absolute
            right 25px
            top 14px
            color #666
        >span
          padding 10px 0
          font-size 14px
          text-align center
          width 80%
          color #999
          >a
            color #4876ff
        &.btn
          >input
            width 80%
            margin 10px
            padding 10px
            font-size 20px
            color #fff
            background-color #0af
            border-radius 4px
</style>
