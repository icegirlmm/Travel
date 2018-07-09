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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
