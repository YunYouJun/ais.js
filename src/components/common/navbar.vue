<template>
  <el-menu router :default-active="activeMenuIndex" class="el-menu-demo" mode="horizontal" >
    <el-menu-item index="/"><img width="20px" src="../../assets/anchor.png"></el-menu-item>
    <el-menu-item index="/serialport" :router="true">
      <span><i class="el-icon-location"></i></span>
      <span>{{ this.$t('message.SerialPort') }}</span>
    </el-menu-item>
    <el-submenu index="lang" class="lang">
      <template slot="title">
        <span><i class="el-icon-refresh"></i></span>
        <span>{{ lang }}</span>
      </template>
      <el-menu-item index="" v-on:click="changeZh">中文</el-menu-item>
      <el-menu-item index="" v-on:click="changeEn">English</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import VueI18n from '../../i18n'

export default {
  name: 'Navbar',
  data () {
    return {
      lang: '中文'
    }
  },
  methods: {
    changeEn () {
      VueI18n.locale = 'en'
      this.lang = 'English'
    },
    changeZh () {
      VueI18n.locale = 'zh'
      this.lang = '中文'
    }
  },
  computed: {
    activeMenuIndex () {
      return this.$route.path
    }
  }
}
</script>

<style>
.el-submenu__title {
  border-bottom-color: transparent ! important ;
}
</style>

