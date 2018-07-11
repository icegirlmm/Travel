// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决移动端300毫秒点击延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'styles/reset.css'
import 'styles/border.css'// 移动端的一像素物理问题
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body) // 把fastClick加载到body上
Vue.use(VueAwesomeSwiper) /* 在vue.use(vueAwesomeSwiper,default global options)后面还可以加默认的参数{ default global options } */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }, // 定义了一个局部组件的es6的写法
  template: '<App/>'

})
// es6里键和值相同可以省略写
// 路由就是根据网址的不同，返回不同的内容给用户
