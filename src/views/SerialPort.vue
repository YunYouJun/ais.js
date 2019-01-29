<template>
  <div style="margin: 10px;">
    <ais-table @sourcetext="aistext"></ais-table>
    <br />
    <el-form :inline="true" :model="formInline">
      <el-form-item :label="$t('message.GetAIS')">
        <el-switch
          v-model="formInline.switch"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-form-item>
      <el-form-item :label="$t('message.PortName')">
        <el-input
          v-model="formInline.portName"
          placeholder="端口名"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('message.BaudRate')">
        <el-input
          v-model="formInline.baudRate"
          placeholder="波特率"
          :disabled="true"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-input placeholder="请选中报文" v-model="input" disabled="">
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
      this.infos = ais(this.input)
      if (!this.infos) {
        this.openError()
      } else {
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
      this.$message.error('AIS 报文不符合规范~')
    }
  }
}
</script>

<style></style>
