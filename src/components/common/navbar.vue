<template>
  <el-menu
    router
    :default-active="activeMenuIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/"
      ><img width="20px" src="@/assets/anchor.png"
    /></el-menu-item>
    <el-menu-item index="/serialport" :router="true">
      <span><i class="el-icon-location"></i></span>
      <span>{{ this.$t('message.SerialPort') }}</span>
    </el-menu-item>
    <div class="right-menu">
      <lang-select class="right-menu-item"></lang-select>
    </div>
  </el-menu>
</template>

<script>
import LangSelect from '../../components/common/LangSelect.vue'

export default {
  name: 'Navbar',
  components: {
    LangSelect
  },
  computed: {
    activeMenuIndex() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.right-menu {
  float: right;
  height: 100%;
  line-height: 60px;
  &:focus {
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    margin: 0 8px;
  }
}
</style>
