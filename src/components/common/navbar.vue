<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
    <el-menu-item index="/home"><img width="20px" src="../../assets/anchor.png"></el-menu-item>
    <el-menu-item index="/port">
      <span><i class="el-icon-location"></i></span>
      <span>串口解析</span>
    </el-menu-item>
    <el-menu-item index="lang">
      <span><i class="el-icon-refresh"></i></span>
      <span>中文</span>
      <span> / </span>
      <span>English</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        activeIndex: '/home'
      }
    }
  }
</script>