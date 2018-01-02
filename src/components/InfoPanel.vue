<template>
  <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
    <el-card class="box-card">
      <div v-for="(value, key) in infos" :key="key" v-if="value.name" class="text item">
        <el-tag>{{ value.name }}</el-tag>
        <el-tag type="info">{{ value.info }}</el-tag>
      </div>
    </el-card>
  </el-col>  
</template>

<script>
export default {
  name: 'InfoPanel',
  props: ['infos'],
  data: function () {
    return {

    }
  }
}
</script>
