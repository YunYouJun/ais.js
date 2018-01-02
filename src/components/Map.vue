<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :plugin="plugin" :zoom="zoom" :center="center" :mapStyle="mapStyle" class="amap-demo">
      <el-amap-marker v-for="(marker, index) in markers" :events="marker.events" :position="marker.position" :vid="index" :icon="marker.icon">

      </el-amap-marker>
      <el-amap-info-window v-for="window in windows" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()
export default {
  name: 'amap-page',
  props: ['location'],
  data: function () {
    return {
      amapManager,
      zoom: 12,
      center: this.location,
      mapStyle: 'light',
      markers: [],
      windows: [],
      plugin: [
        {
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        }
      ]
    }
  },
  mounted () {
    let markers = []
    let windows = []

    let text = 'test'
    let self = this

    let num = 1
    for (let i = 0; i < num; i++) {
      markers.push({
        position: this.location,
        icon: '../../src/assets/smallshipLocation.png',
        events: {
          click () {
            self.windows.forEach(window => {
              window.visible = false
            })

            self.$nextTick(() => {
              self.windows[i].visible = true
            })
          }
        }
      })

      windows.push({
        position: this.location,
        content: `<div class="prompt">${text}</div>`,
        visible: false
      })

      this.markers = markers
      this.windows = windows
    }
  },
  methods: {
    getMap () {
      // amap vue component
      console.log(amapManager._componentMap)
      // gaode map instance
      console.log(amapManager._map)
    }
  }
}
</script>

<style>
.amap-demo {
  height: 600px;
}

.prompt {
  background: white;
  width: 100px;
  height: 30px;
  text-align: center;
}
</style>