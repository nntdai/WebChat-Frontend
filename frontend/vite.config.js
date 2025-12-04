import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const DEFAULT_API_BASE = 'https://ds7bs8n0h6.execute-api.ap-southeast-2.amazonaws.com/api/v1'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: DEFAULT_API_BASE,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
