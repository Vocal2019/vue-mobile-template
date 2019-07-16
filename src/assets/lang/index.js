import Vue from 'vue'
import VueI18n from 'vue-i18n'
import all_cn from './all_cn'
import all_en from './all_en'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  messages: {
    cn: {
      ...all_cn
    },
    en: {
      ...all_en
    }
  }
})
