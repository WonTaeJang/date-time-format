import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VCalendar from 'v-calendar'

import './assets/style/main.scss'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import 'v-calendar/dist/style.css'

// locale
import en_US from '@/locales/en_US.json'
import ko_KR from '@/locales/ko_KR.json'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import 'dayjs/locale/en'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

const messages = {
  en_US,
  ko_KR,
}
const SUPPORT_LANGUAGES = ['en_US', 'ko_KR']
const FALLBACK_LOCALE = 'en_US'

const initLanguage = () => {
  let returnLocale = null
  let language = null

  const browserLanguage = navigator.language.replace('-', '_')
  language = SUPPORT_LANGUAGES.find((el) => {
    return el.includes(browserLanguage)
  })

  if (language) {
    returnLocale = language
  } else {
    returnLocale = FALLBACK_LOCALE
  }
    
  dayjs().locale(returnLocale.replace('_', '-'))
  return returnLocale
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: initLanguage(), // set locale
  fallbackLocale: 'en_US', // set fallback locale
  messages,
})

app.use(i18n)
app.use(router)
app.use(VCalendar)
app.config.globalProperties.$axios = axios

app.mount('#app')
