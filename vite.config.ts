/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/ui/main.ts'),
      name: 'lumin-ui',
      fileName: format => `lumin-ui.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'vue' },
      },
    },
  },
})
