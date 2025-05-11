import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import dayjs from 'dayjs'

export const useUserStore = defineStore('user', () => {
  // const nav = useLocalStorage('nav', 'convert')
  
  const userLocale = useLocalStorage('locale', null)

  // set dayjs locale
  watch(userLocale, (locale) => {
    let lang = locale.split('_')[0]

    dayjs.locale(lang)
  })

  return {
    userLocale,
  }
})