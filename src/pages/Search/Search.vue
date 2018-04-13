<template>
  <div class="search">
    <HeaderTop title="搜索">
    </HeaderTop>
    <div class="search_area">
      <form action="#">
        <input class="content" type="text" placeholder="请输入商品名称">

        <input class="button" type="submit" value="提交">
      </form>
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
  .search_area
    position relative
    top 50px
    left 0
    right 0
    background-color #ffffff
    >form
      box-sizing border-box
      height 50px
      display flex
      justify-content space-between
      padding 10px
      >input
        box-sizing border-box
        height 30px
        display block
        &.content
          padding 0 10px
          background-color #efefef
          width 80%
        &.button
          width 18%
          background-color #0af
          color #fff
          font-weight bolder
          border-radius 4px
</style>
