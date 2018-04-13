<template>
  <footer class="foot_guide">
    <ul class="item_list">
      <li class="item" @click="goto('/main')" :class="{on: isCurrent('/main')}">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </li>
      <li class="item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
        <i class="iconfont icon-faxian"></i>
        <span>搜索</span>
      </li>
      <li class="item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
        <i class="iconfont icon-fl-dingdan"></i>
        <span>订单</span>
      </li>
      <li class="item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default {
    methods: {
      goto(path) {
        // console.log('goto:',this)
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foot_guide
    position fixed
    left 0
    right 0
    bottom 0
    background #ffffff
    z-index 50
    height 50px
    .item_list
      height 100%
      display flex
      justify-content space-around
      .item
        text-align center
        color #7e8c8d
        line-height 50px
        &.on
          color #87cefa
</style>
