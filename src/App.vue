<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    <navbar />
    <router-view />
    <vue-about-me :copyright="copyright"></vue-about-me>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'
import VueAboutMe from 'vue-about-me'

export default {
  name: 'app',
  components: {
    Navbar,
    VueAboutMe
  },
  data() {
    return {
      copyright: {
        name: 'AIS.JS',
        repoName: 'ais.js',
        author: 'YunYouJun',
        logo: '#icon-ship-anchor',
        color: '#000000'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'PingFang SC', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.amap-demo {
  height: 600px;
}
</style>
