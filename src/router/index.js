import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import navbar from '@/components/common/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      components: {
        default: Welcome,
        navbar: navbar
      }
    }
  ]
})
