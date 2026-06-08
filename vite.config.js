import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginWebpAndPath from 'vite-plugin-webp-and-path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginWebpAndPath(),
    ViteImageOptimizer({
      webp: {
        quality: 80,
      },
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
})
