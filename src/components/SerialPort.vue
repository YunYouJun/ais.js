<template>
  <div style="margin: 10px;">
    <ais-table :switch="formInline.switch" @sourcetext="aistext"></ais-table>
    <br />
    <el-form :inline="true" :model="formInline">
      <el-form-item :label="label1">
        <el-switch
          v-model="formInline.switch"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-form-item>
      <el-form-item :label="label2">
        <el-input
          v-model="formInline.portName"
          placeholder="端口名"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item :label="label3">
        <el-input
          v-model="formInline.baudRate"
          placeholder="波特率"
          :disabled="true"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-input placeholder="请选中报文" v-model="input">
      <template slot="prepend">{{ this.$t('message.CurrentAIS') }}</template>
    </el-input>
    <hr />
    <el-row>
      <info-panel :infos="infos"></info-panel>
      <map-location :infos="infos" @sourcetext="aistext"></map-location>
    </el-row>
  </div>
</template>

<script>
import AisTable from '@/components/AisTable'
import MapLocation from '@/components/MapLocation'
import InfoPanel from '@/components/InfoPanel'
import ais from 'ais-json'
export default {
  name: 'SerialPort',
  components: {
    AisTable,
    InfoPanel,
    MapLocation
  },
  data() {
    return {
      input: '',
      infos: '',
      formInline: {
        portName: 'COM3',
        baudRate: 38400,
        switch: true
      }
    }
  },
  watch: {
    input: function() {
      if (!ais(this.input)) {
        this.openError()
      } else {
        this.infos = ais(this.input)
        this.openSuccess()
      }
    }
  },
  methods: {
    aistext(text) {
      this.input = text
    },
    openSuccess() {
      this.$message.success('AIS 报文解析成功~')
    },
    openError() {
      this.$message.error('AIS 报文不符合规范哦~')
    }
  },
  computed: {
    label1: function() {
      return this.$t('message.GetAIS')
    },
    label2: function() {
      return this.$t('message.PortName')
    },
    label3: function() {
      return this.$t('message.BaudRate')
    },
    label4: function() {
      return this.$t('message.CurrentAIS')
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
