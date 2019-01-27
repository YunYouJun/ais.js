import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import en from './en'
import zh from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: Object.assign(en, enLocale),
  'zh-CN': Object.assign(zh, zhLocale)
}

export default new VueI18n({
  locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh-CN',
  messages
})
