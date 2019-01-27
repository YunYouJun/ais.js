<template>
  <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="amap-page-container">
        <el-amap
          vid="amapDemo"
          :scrollWheel="scrollWheel"
          :plugin="plugin"
          :zoom="zoom"
          :center="center"
          :mapStyle="mapStyle"
          class="amap-demo"
        >
          <el-amap-marker
            :key="index"
            v-for="(marker, index) in markers"
            :events="marker.events"
            :position="marker.position"
            :vid="index"
            :icon="marker.icon"
          >
          </el-amap-marker>
        </el-amap>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()
export default {
  name: 'amap-page',
  props: ['infos'],
  data: function() {
    return {
      amapManager,
      zoom: 12,
      center: [],
      scrollWheel: false,
      mapStyle: 'light',
      markers: [],
      windows: [],
      markerInfo: [],
      i: 0,
      plugin: [
        {
          pName: 'Scale',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        }
      ]
    }
  },
  mounted() {
    try {
      this.infos.Location.data = [121.59996, 31.197646]
      this.center = this.infos.Location.data
    } catch (e) {
      this.center = [121.59996, 31.197646]
    }
  },
  watch: {
    infos: function() {
      try {
        this.addMarker()
      } catch (e) {
        console.log('该报文没有位置信息！')
      }
    }
  },
  methods: {
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap)
      // gaode map instance
      console.log(amapManager._map)
    },
    addMarker() {
      let self = this
      let num = self.i

      let locationIsNull = 0
      if (!this.infos.Location.data) {
        locationIsNull = 1
        this.infos.Location.data = [121.59996, 31.197646]
      }
      this.center = this.infos.Location.data

      if (!locationIsNull) {
        self.markerInfo.push(self.infos)
        self.i = self.i + 1
        self.markers.push({
          id: self.i,
          position: this.infos.Location.data,
          icon: '../../src/assets/smallshipLocation.png',
          events: {
            click() {
              // console.log(this.markerInfo[self.i - 1].text)
              self.$nextTick(() => {
                let text = self.markerInfo[num].text
                console.log(text)
                self.$emit('sourcetext', text)
              })
            }
          }
        })
      }
    }
  }
}
</script>

<style>
.amap-demo {
  height: 600px;
}
</style>
