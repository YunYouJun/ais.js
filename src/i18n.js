
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'Welcome to AIS.js!',
      SerialPort: 'Serial Port'
    },
    ...enLocale
  },
  zh: {
    message: {
      hello: '欢迎使用 AIS.js !',
      SerialPort: '串口解析'
    },
    ...zhLocale
  }
}

export default new VueI18n({
  locale: 'zh', // set locale
  messages
})
