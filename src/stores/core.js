import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCoreStore = defineStore('core', () => {
  const hasGlobalError = ref(false)
  
  // header options
  const isFolded = useLocalStorage('header-fold-flag', false) 

  return {
    hasGlobalError,
    isFolded
  }
})
