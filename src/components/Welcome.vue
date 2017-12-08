<template>
  <el-main>
    <h1>{{ msg }}</h1>
    <el-input v-model="input" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <hr>

    <el-card class="box-card">
      <div v-for="(value, key) in infos" :key="key" class="text item">
        {{ '[' + key + ']: [' + value + ']' }}
      </div>
    </el-card>

  </el-main>
</template>

<script>
import ais from '../ais'
let aisText = '!AIVDM,1,1,,B,16:=hkP0018eSa:AaN;cb`Kh0@QE,0*61'
let aivdm = '!AIVDM,1,1,,A,15Cgah00008LOnt>1Cfs61VT00SU,0*3D'
// let aivdo = '!AIVDO,1,1,,,168r0000008;Mp:AP-ith06RP0000,025'
let aisFrame = ais(aivdm)

export default {
  name: 'Welcome',
  data () {
    return {
      msg: this.$t('message.hello'),
      input: aisText,
      infos: aisFrame
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

/* card */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>
