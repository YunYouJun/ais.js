<template>
  <div id="app">
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <router-view name="welcome"></router-view>
      <router-view name="main"></router-view>
    </el-container>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "PingFang SC",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
