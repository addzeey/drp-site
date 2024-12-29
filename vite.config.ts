// vite.config.ts
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/assets/css'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
