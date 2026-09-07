import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages 的專案網址為 /<repository-name>/，資源需使用此前綴。
  // 開發模式使用根路徑，才能直接讀取 public/classwork 內的獨立作品頁。
  base: command === 'serve' ? '/' : '/vue-portfolio/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}));
