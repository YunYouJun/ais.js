import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'Welcome to AIS.js!',
      SerialPort: 'Serial Port',
      AIS: 'AIS.JS - Automatic Identification System',
      GetTime: 'Get Time',
      AISMessage: 'AIS Message',
      MessageType: 'Message Type',
      DecodeStatus: 'Decode Status',
      DecodeLocation: 'Decode Location',
      GetAIS: 'Get AIS',
      PortName: 'Port Name',
      BaudRate: 'Baud Rate',
      CurrentAIS: 'Current AIS',
      Nothing: 'There is no parsing content.'
    },
    ...enLocale
  },
  zh: {
    message: {
      hello: '欢迎使用 AIS.js !',
      SerialPort: '串口解析',
      AIS: 'AIS.JS - 船舶自动识别系统',
      GetTime: '接收时间',
      AISMessage: 'AIS 报文',
      MessageType: '消息类型',
      DecodeStatus: '解析状况',
      DecodeLocation: '解析位置坐标',
      GetAIS: '接收报文',
      PortName: '端口名',
      BaudRate: '波特率',
      CurrentAIS: '当前报文',
      Nothing: '当前还没有解析内容'
    },
    ...zhLocale
  }
}

export default new VueI18n({
  locale: 'zh', // set locale
  messages
})
