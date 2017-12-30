<template>
  <el-row>
    <img src="../assets/anchor.png">
    <h1>{{ msg }}</h1>
  </el-row>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        msg: this.$t('message.hello')
      }
    }
  }
</script>

<style>
h1, h2 {
  font-weight: normal;
}

hr {
  opacity: 0.3;
}
</style>
