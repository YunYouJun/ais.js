<template>
  <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
    <el-card class="box-card">
      <div v-if="infos">
        <div v-for="(value, key) in infos" :key="key" class="text item">
          <template v-if="value.name">
            <el-tag>{{ value.name }}</el-tag>
            <el-tag type="info">{{ value.info }}</el-tag>
          </template>
        </div>
      </div>
      <div v-else>
        <el-tag
          type="info"
          v-if="InfoVisible"
          closable
          :disable-transitions="false"
          @close="handleClose"
        >
          {{ this.$t('message.Nothing') }}
        </el-tag>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: ['infos'],
  data: function() {
    return {
      InfoVisible: true
    }
  },
  methods: {
    handleClose() {
      this.InfoVisible = false
    }
  }
}
</script>
