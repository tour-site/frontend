// 📁 vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()], // ✅ 여기 추가됨
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8010',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
