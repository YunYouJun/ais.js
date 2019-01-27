import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import SerialPort from '@/components/SerialPort'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/serialport',
      name: 'SerialPort',
      component: SerialPort
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
