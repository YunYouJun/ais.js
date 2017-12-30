<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-input v-model="input" placeholder="请输入 AIS 帧文本">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <hr>
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <el-card class="box-card">
          <div v-for="(value, key) in infos" :key="key" class="text item">
            {{ '[ ' + value.name + ' ] : [ ' + value.info + ' ]' }}
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <el-card class="box-card">
          <router-view name="map"></router-view>
          <map-location></map-location>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MapLocation from '../components/Map'
import ais from '../ais'
// let aisText = '!AIVDM,1,1,,B,16:=hkP0018eSa:AaN;cb`Kh0@QE,0*61'
// let aivdm1 = '!AIVDM,1,1,,A,15Cgah00008LOnt>1Cf`s6NT00SU,0*3D'
// let aivdm2 = '!AIVDO,1,1,,,168rO000008;Mp:APith06RP0000,0*25'
let text = '!AIVDM,1,1,,A,<68rO0IR>Wh0J8?EP@5>70,4*23'
let aivdm = text

export default {
  name: 'Main',
  components: {
    MapLocation
  },
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

<style scoped>
/* card */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  margin: 5px;
}s

/* row */
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
</style>

