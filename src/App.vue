<template>
  <div id="app" class="clear" v-if="$route.name != 'school'">
    <div class="container-fluid">
      <top-menu></top-menu>
      <div class="layout-main">
        <router-view></router-view>
      </div>
    </div>
    <div class="main clear"></div>
    <footer class="s-footer">© 2017
      <span>京ICP备17017576号<img src="./common/resource/img/beian.png" alt=""></span>
      <router-link to="/cert">【网站证书】</router-link>
      <a href="https://cp.aliyun.com/#/biLogStatSiteHome" target="_blank">【站长管理】</a>
      <i class="ml50">联系电话：17190170788</i> 
    </footer>
  </div>
  <div v-else>
    <router-view></router-view>    
  </div>
</template>

<script>
import topMenu from './common/components/top-menu.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'topMenu': topMenu
  }
}
</script>
<style lang="scss" src="./common/style/overide.scss"></style>
<style src="./common/style/xigua.min.css"></style>
<style scoped lang="scss">
.container-fluid{
  position: relative;
  width: 100%;
  min-height: 200%;
}
.main{
  padding-bottom:5%;
}
.s-footer{
  position: fixed;
  width: 100%;
  background: #ddd;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
