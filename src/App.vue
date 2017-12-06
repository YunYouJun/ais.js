<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <img src="./assets/anchor.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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
