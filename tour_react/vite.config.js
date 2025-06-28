import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name].[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/font/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        }
      }
    }
  },
  server: {
    port: 5173,
    historyApiFallback: true, // ✅ 이거 React Router용
    proxy: {
      '/api': {
        target: 'http://bjava.iptime.org:8898',// 포트 맞춰주기 기윤: 8010 , 정민 : 8100 , 외부 8320, *8321
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
