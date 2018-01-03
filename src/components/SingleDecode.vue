<template>
  <div style="margin: 10px">
    <el-row>
      <el-col :span="24">
        <el-input v-model="input" placeholder="请输入 AIS 帧文本">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <hr>
    <el-row>
      <info-panel :infos="infos"></info-panel>
      <map-location :infos="infos" @sourcetext="aistext"></map-location>
    </el-row>
  </div>
</template>

<script>
import MapLocation from '../components/MapLocation'
import InfoPanel from '../components/InfoPanel'
import ais from '../ais'
// let aivdm = '!AIVDM,1,1,,B,16:=hkP0018eSa:AaN;cb`Kh0@QE,0*61'
// let aivdm1 = '!AIVDM,1,1,,A,15Cgah00008LOnt>1Cf`s6NT00SU,0*3D'
// let aivdm2 = '!AIVDO,1,1,,,168rO000008;Mp:APith06RP0000,0*25'
// let aivdm3 = '!AIVDM,1,1,,A,<68rO0IR>Wh0J8?EP@5>70,4*23'

export default {
  name: 'Main',
  components: {
    MapLocation,
    InfoPanel
  },
  data () {
    return {
      input: '',
      infos: ''
    }
  },
  watch: {
    input: function () {
      if (!ais(this.input)) {
        this.openError()
      } else {
        this.infos = ais(this.input)
        this.openSuccess()
      }
    }
  },
  methods: {
    aistext (text) {
      this.input = text
    },
    openSuccess () {
      this.$message.success('AIS 报文解析成功~')
    },
    openError () {
      this.$message.error('AIS 报文不符合规范哦~')
    }
  }
}
</script>

<style>
/* card */
.text {
  font-size: 14px;
}

.item {
  padding: 5px 0;
}

.box-card {
  margin: 5px;
  text-align: left;
}

/* row */
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
</style>

