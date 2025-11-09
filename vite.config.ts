// vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@challenges': path.resolve(__dirname, './src/challenges'),
      '@components': path.resolve(__dirname, './src/World/components'),
      '@systems': path.resolve(__dirname, './src/World/systems'),
    },
  },
})
