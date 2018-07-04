<template>
  <div id="app">

    <!-- router-view显示的是当前路由地址所对应的内容 -->
    <router-view/>
    <!-- 而当前路由地址对应到的是helloWorld这个小组件
    所以实际上这里展示的就是helloworld这个小组建的内容-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
