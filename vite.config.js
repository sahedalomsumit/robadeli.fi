import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VitePluginWebpAndPath from 'vite-plugin-webp-and-path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: {
        quality: 80,
      },
    }),
    VitePluginWebpAndPath({
      targetDir: './dist/',
      imgExtensions: 'jpg,jpeg,png',
      textExtensions: 'html,css,js',
      quality: 80,
    }),
  ],
  server: {
    // Support React Router client-side routing in dev
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('react-helmet-async')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            return 'vendor';
          }
        },
      },
    },
  },
}));
