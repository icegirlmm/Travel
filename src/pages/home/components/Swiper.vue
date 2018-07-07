<template>
<div class="wrapper">
 <swiper  :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪网">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 1000,
        loop: true,
        disableOnInteraction: false
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/6a/18f9b171a9275c02.jpg_750x200_97cd5547.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/99/716c43b486692b02.jpg_750x200_2f2c866a.jpg'
      }]
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
    padding-bottom: 26.67%
    // padding-bottom 的百分比相对的是父级元素的宽度，这样使得宽高比保持一定的比例
    // 而height的百分比是相对父级的高度
    background: #eee
    .swiper-img
        width: 100%
</style>
