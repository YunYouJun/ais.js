import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-ink'
import i18n from './i18n'
import VTooltip from 'v-tooltip'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'df562dc843cc3dd29efa5fd8f8029a62',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  v: '1.4.4'
})

Vue.use(VTooltip)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
