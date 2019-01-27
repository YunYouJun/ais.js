import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-ink'
import i18n from './i18n'
import AMap from 'vue-amap'

Vue.config.productionTip = false

Vue.use(AMap)

AMap.initAMapApiLoader({
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
  ]
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
