<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <router-view></router-view>
      <hr>
      <router-view name="main"></router-view>
    </el-container>
    <copyright></copyright>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar'
import Copyright from './components/common/Copyright'
export default {
  name: 'app',
  components: {
    Navbar,
    Copyright
  }
}
</script>

<style>
#app {
  font-family: "PingFang SC",'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.amap-demo {
  height: 600px;
}
</style>
