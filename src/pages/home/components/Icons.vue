<template>
<div class="icons">
<swiper  :options="swiperOption">
 <swiper-slide v-for="(page,index) of pages" :key="index">
  <div class="icon" v-for="item of page" :key="item.id">
    <div class="icon-img">
    <img class="icon-img-content" :src="item.imgUrl" alt="图博">
    </div>
    <p class="icon-desc">{{item.desc}}</p>
  </div>
 </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
 </swiper>
</div>

</template>

<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古镇'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '文化古迹'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '苏州必游'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上玩乐'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '苏州园林好美好美好美'},
      {
        id: '00010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '拙政圆'}]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
     overflow: hidden
     height: 0.6rem
     padding-bottom: 42.67%
  .icons >>> .swiper-pagination-bullet-active
     background: $bgColor
  .icons
     position: relative
     overflow: hidden
     height: 0
     margin-top: .1rem
     padding-bottom: 50.67%
    .swiper-pagination
      position: absolute
      bottom: 0
   .icon
     position: relative
     overflow: hidden
     float: left
     height: 0
     width: 25%
     padding-bottom: 21.34%
     .icon-img
       position: absolute
       top: 0.1rem
       left: 0
       right: 0
       bottom: 0.44rem
       .icon-img-content
         display: block
         margin: 0 auto
         height: 100%
     .icon-desc
       position: absolute
       left: 0
       right: 0
       bottom: 0
       height: .44rem
       line-height: .44rem
       color: $darkTextColor
       text-align:center
       ellipsis()

</style>
