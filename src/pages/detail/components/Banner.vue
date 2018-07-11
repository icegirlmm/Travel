<template>
<div>
    <div class="banner" @click="hangleclick">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/43/43729196331fc442a3.water.jpg_600x330_60acd93a.jpg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">江苏省苏州市高新区山</div>
            <div class="banner-number">
              <span class="iconfont banner-icon">&#xe607;</span>39
            </div>
        </div>
    </div>
   <common-gallary
         :imgs="imgs"
         v-show="showGallary"
         @close="hangleGallaryClose"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1707/a5/a594acb5dda535b4a3.water.jpg_r_800x800_2ed0dc74.jpg',
        'http://img1.qunarzz.com/sight/p0/1707/a5/a594acb5dda535b4a3.water.jpg_r_800x800_2ed0dc74.jpg'
      ]
    }
  },
  methods: {
    hangleclick () {
      this.showGallary = true
    },
    hangleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
     .banner
       position: relative
       overflow: hidden
       height: 0
       padding-bottom: 55%
       .banner-img
         width:100%
       .banner-info
         display:flex
         position: absolute
         left: 0
         right: 0
         bottom: 0
         line-height: .6rem
         padding: 0 .2rem
         color: #fff
         background-image: linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
         .banner-tittle
           flex: 1
           font-size: .32rem
         .banner-number
           padding: 0 .4rem
           height: .32rem
           margin-top: .14rem
           line-height: .32rem
           border-radius: .2rem
           background: rgba(0,0,0,.8)
           font-size: .24rem
           .banner-icon
             font-size .24rem

</style>
