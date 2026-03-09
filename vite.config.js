import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // Add this

export default defineConfig({
  base: './', // Forces relative paths for all assets
  plugins: [
    vue(),
    legacy({ targets: ['defaults', 'not IE 11'] })
  ],
})