<template>
  <el-row>
    <img src="../assets/anchor.png" />
    <h1>{{ this.$t('message.hello') }}</h1>
  </el-row>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

hr {
  opacity: 0.3;
}
</style>
