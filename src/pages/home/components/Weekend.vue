<template>
 <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li
          class="item border-bottom"
          v-for="item of weekendList"
          :key="item.id"
        >      <div class="item-img-swapper">
                <img class="item-img" :src="item.imgUrl" alt="">
                </div>
            <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
        title: '苏州必游TOP10',
        desc: '苏州必须要留下足迹的十个地标'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg',
        title: '细嗅历史的气息',
        desc: '阅尽沧桑，不变的是恬静，待君细细品味'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
        title: '苏州必游TOP10',
        desc: '苏州必须要留下足迹的十个地标'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
        title: '苏州必游TOP10',
        desc: '苏州必须要留下足迹的十个地标'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
        title: '苏州必游TOP10',
        desc: '苏州必须要留下足迹的十个地标'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        text-indent: .2rem   // 首行文本缩进
        background: #eee
      .item-img-swapper
        overflow: hidden
        height: 0
        padding-bottom: 37.08%
      .item-img
          width: 100%
      .item-info
          padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>
