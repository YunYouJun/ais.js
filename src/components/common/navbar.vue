<template>
  <header>
    <el-menu :default-active="home" class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="/home"><img width="20px" src="../../assets/anchor.png"></el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{ $t("el.datepicker.now") }}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="lang">
        <span><i class="el-icon-location"></i></span>
        <span>中文</span>
        <span> / </span>
        <span>English</span>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        active: true,
        home: '/home'
      }
    }
  }
</script>