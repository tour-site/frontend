import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8321',// 포트 맞춰주기 기윤: 8010 , 정민 : 8100 , 외부 8320, *8321
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    },
    watch: {
      usePolling: true,     // ✅ 파일 변경 감지를 polling 방식으로
      interval: 100,        // ✅ 변경 감지 주기 (ms)
    }
  }
})
