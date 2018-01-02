import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import PortWelcome from '@/components/PortWelcome'
import Main from '@/components/Main'
import SerialPort from '@/components/SerialPort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Welcome,
        main: Main
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
