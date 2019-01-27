<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    size="small"
    max-height="200"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%"
  >
    <el-table-column type="index" align="left"> </el-table-column>
    <el-table-column
      prop="time"
      :label="$t('message.GetTime')"
      align="left"
      width="250"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="aisText"
      :label="$t('message.AISMessage')"
      align="left"
      width="500"
    >
    </el-table-column>
    <el-table-column
      prop="messageType"
      :label="$t('message.MessageType')"
      align="left"
      width="130"
    >
    </el-table-column>
    <el-table-column
      prop="decodeStatus"
      :label="$t('message.DecodeStatus')"
      align="left"
      width="120"
    >
      <template slot-scope="scope">
        <span><i :class="displayStatus(scope.row.decodeStatus)"></i></span>
      </template>
    </el-table-column>
    <el-table-column
      prop="decodeLocation"
      :label="$t('message.DecodeLocation')"
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
import aisData from '@/assets/AisMessage/AIS.json'
import ais from 'ais-json'

export default {
  name: 'AisTable',
  data() {
    return {
      aisData: aisData,
      tableData: this.formatData(aisData)
    }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
      this.$emit('sourcetext', val.aisText)
    },
    tableRowClassName({ row }) {
      if (row.decodeStatus === 'fail') {
        return 'warning-row'
      } else if (row.decodeStatus === 'success') {
        return 'success-row'
      }
      return ''
    },
    displayStatus(decodeStatus) {
      if (decodeStatus === 'success') {
        return 'el-icon-check'
      } else {
        return 'el-icon-close'
      }
    },
    formatData(aisData) {
      for (let i = 0; i < aisData.length; i++) {
        let aisInfo = ais(aisData[i].aisText)
        let MessageID = [1, 2, 3]
        try {
          if (aisInfo) {
            aisData[i].decodeStatus = 'success'
            aisData[i].messageType = aisInfo.MessageID.info
            if (MessageID.indexOf(aisInfo.MessageID.data) !== -1) {
              aisData[i].decodeLocation = aisInfo.Location.info
            } else {
              aisData[i].decodeLocation = 'Null'
            }
            this.$emit('sourcetext', aisData[i].aisText)
          }
        } catch (e) {
          this.$message.error('该条报文为空！')
        }
      }
      return aisData
    }
  },
  watch: {
    aisData(data) {
      this.tableData = this.formatData(data)
    }
  }
}
</script>

<style>
.el-icon-check {
  color: #67c23a;
}
.el-icon-close {
  color: #f56c6c;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
