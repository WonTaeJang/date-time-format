import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useFileEditorStore = defineStore('file-editor', () => {
  const scrollPercentage = ref(0)
  
  return {
    scrollPercentage
  }
})