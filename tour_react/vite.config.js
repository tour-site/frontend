import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8100',// 포트 맞춰주기 기윤: 8010 , 정민 : 8100
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
