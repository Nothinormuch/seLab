import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://selab-backend-h4ekfbb35-nothinalton-7988s-projects.vercel.app',
        changeOrigin: true,
      },
    },
  },
});
