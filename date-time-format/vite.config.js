import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { hash } from './src/util/hash.js'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@util' : fileURLToPath(new URL('./src/util', import.meta.url)),
      '@convertor': fileURLToPath(new URL('./src/app/convertor/components', import.meta.url)),
      // '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@style': fileURLToPath(new URL('./src/assets/style/', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/app/core/components', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        // assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  },
})
