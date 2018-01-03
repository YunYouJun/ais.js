<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    size="small"
    max-height="200"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      align="left"
    >
    </el-table-column>
    <el-table-column
      property="time"
      :label="label1"
      align="left"
      width="250"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      property="aisText"
      :label="label2"
      align="left"
      width="500"
    >
    </el-table-column>
    <el-table-column
      property="messageType"
      :label="label3"
      align="left"
      width="130"
    >
    </el-table-column>
    <el-table-column
      property="decodeStatus"
      :label="label4"
      align="left"
      width="120"
    >
      <template slot-scope="scope">
        <span><i :class="displayStatus(scope.row.decodeStatus)"></i></span>
      </template>
    </el-table-column>
    <el-table-column
      property="decodeLocation"
      :label="label5"
      align="left"
      width="250"
    >
      <template slot-scope="scope">
        <i class="el-icon-location"></i>
        <span>{{ scope.row.decodeLocation }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import AISdata from '../assets/AisMessage/AIS.json'
import ais from '../ais'

export default {
  name: 'AisTable',
  props: ['switch'],
  data () {
    return {
      OldAISdata: ''
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
      this.$emit('sourcetext', val.aisText)
    },
    tableRowClassName ({row, rowIndex}) {
      if (row.decodeStatus === 'fail') {
        return 'warning-row'
      } else if (row.decodeStatus === 'success') {
        return 'success-row'
      }
      return ''
    },
    displayStatus (decodeStatus) {
      if (decodeStatus === 'success') {
        return 'el-icon-check'
      } else {
        return 'el-icon-close'
      }
    }
  },
  computed: {
    label1: function () {
      return this.$t('message.GetTime')
    },
    label2: function () {
      return this.$t('message.AISMessage')
    },
    label3: function () {
      return this.$t('message.MessageType')
    },
    label4: function () {
      return this.$t('message.DecodeStatus')
    },
    label5: function () {
      return this.$t('message.DecodeLocation')
    },
    tableData: function () {
      if (this.switch) {
        for (let i = 0; i < AISdata.length; i++) {
          let aisInfo = ais(AISdata[i].aisText)
          if (aisInfo) {
            AISdata[i].decodeStatus = 'success'
            AISdata[i].messageType = aisInfo.MessageID.info
            if (aisInfo.MessageID.data === 1 || aisInfo.MessageID.data === 2 || aisInfo.MessageID.data === 3) {
              AISdata[i].decodeLocation = aisInfo.Location.info
            } else {
              AISdata[i].decodeLocation = '无'
            }
          }
        }
        this.OldAISdata = AISdata
        return AISdata
      } else {
        return this.OldAISdata
      }
    }
  }
}
</script>

<style>
.el-icon-check {
  color: #67C23A;
}
.el-icon-close {
  color: #F56C6C;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
