import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/blog/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@util' : fileURLToPath(new URL('./src/util', import.meta.url)),
      '@converter': fileURLToPath(new URL('./src/app/converter/components', import.meta.url)),
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
        sanitizeFileName: (name) => {
          // Sanitizes file names generated during the build process:
          // - Replaces spaces with dashes ('-').
          // - Removes invalid characters that are not alphanumeric, underscores (_), periods (.), or dashes (-).
          return name
            .replace(/\s+/g, '-') // Replaces spaces with dashes.
            .replace(/[^a-zA-Z0-9_.-]/g, ''); // Removes all invalid characters.
        },
      },
    }
  },
})
