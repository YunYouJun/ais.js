import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import PortWelcome from '@/components/PortWelcome'
import SingleDecode from '@/components/SingleDecode'
import SerialPort from '@/components/SerialPort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Welcome,
        main: SingleDecode
      }
    },
    {
      path: '/serialport',
      name: 'SerialPort',
      components: {
        default: PortWelcome,
        main: SerialPort
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
