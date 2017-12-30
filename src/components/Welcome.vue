<template>
  <el-main>
    <h1>{{ msg }}</h1>
    <el-input v-model="input" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <hr>

    <el-card class="box-card">
      <div v-for="(value, key) in infos" :key="key" class="text item">
        {{ '[ ' + value.name + ' ] : [ ' + value.info + ' ] : [' + value.data + ']' }}
      </div>
    </el-card>

  </el-main>
</template>

<script>
import ais from '../ais'
// let aisText = '!AIVDM,1,1,,B,16:=hkP0018eSa:AaN;cb`Kh0@QE,0*61'
// let aivdm1 = '!AIVDM,1,1,,A,15Cgah00008LOnt>1Cf`s6NT00SU,0*3D'
// let aivdm2 = '!AIVDO,1,1,,,168rO000008;Mp:APith06RP0000,0*25'
let text = '!AIVDM,1,1,,A,<68rO0IR>Wh0J8?EP@5>70,4*23'
let aivdm = text

export default {
  name: 'Welcome',
  data () {
    return {
      msg: this.$t('message.hello'),
      input: aivdm,
      infos: ais(aivdm)
    }
  },
  watch: {
    input: function () {
      this.infos = ais(this.input)
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
