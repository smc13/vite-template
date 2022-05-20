import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/ui/main.ts'),
      name: 'vite-template',
      fileName: format => `vite-template.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'vue' },
      },
    },
  },
})
