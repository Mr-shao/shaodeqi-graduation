<template>
  <div id="app">
    <!-- <img src="dist/resource/logo.png"> -->
    <img src="./assets/logo.png">
    <h1>graduation</h1>
    <h2>link to</h2>
    <h3>
      <router-link to="/home">home</router-link>
      <router-link to="/tool">tool</router-link>
      <router-link to="/office">office</router-link>
    </h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" src="./common/style/overide.scss"></style>
<style src="./common/style/xigua.min.css"></style>
<style lang="scss">
</style>
