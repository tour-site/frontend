import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8010',// 포트 맞춰주기
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
