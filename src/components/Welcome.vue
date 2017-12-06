<template>
  <el-main>
    <h1>{{ msg }}</h1>
    <el-input v-model="input" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </el-main>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: this.$t('message.hello'),
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
