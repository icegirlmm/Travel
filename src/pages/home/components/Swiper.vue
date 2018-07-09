<template>
<div class="wrapper">
 <swiper  :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪网">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 1000,
        loop: true,
        disableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow: hidden
    height:0
    padding-bottom: 31.25%
    // padding-bottom 的百分比相对的是父级元素的宽度，这样使得宽高比保持一定的比例
    // 而height的百分比是相对父级的高度
    background: #eee
    .swiper-img
        width: 100%
</style>
