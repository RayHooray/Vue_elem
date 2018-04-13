<template>
  <header class="headerTop">
    <slot name="left" class="left">
    </slot>
    <div class="middle">
      <span class="content">
        {{title}}
      </span>
    </div>
    <slot name="right">
    </slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerTop
    padding 0 10px
    height 50px
    position fixed
    top 0
    left 0
    right 0
    background-color #0af
    display flex
    justify-content space-between
    line-height 50px
    text-align center
    color #ffffff
    font-size 20px
    z-index 100
    .middle
      position absolute
      left 25%
      width 50%
      .content
        font-weight 900
</style>
