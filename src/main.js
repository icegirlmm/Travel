// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决移动端300毫秒点击延迟的问题
import './assets/styles/reset.css'
import './assets/styles/border.css'// 移动端的一像素物理问题
Vue.config.productionTip = false
fastClick.attach(document.body) // 把fastClick加载到body上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // 定义了一个局部组件的es6的写法
  template: '<App/>'

})
// es6里键和值相同可以省略写
// 路由就是根据网址的不同，返回不同的内容给用户
