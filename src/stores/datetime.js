import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useDateTimeStore = defineStore('datetime', () => {
  const type = useLocalStorage('datetime-type', null)
  const options = useLocalStorage('datetime-option', {})
  const customOptions = useLocalStorage('datetime-custom-option', {})

  return {
    type,
    options,
    customOptions,
  }
})
