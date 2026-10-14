import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: ['es2020', 'safari14', 'chrome87', 'firefox78'],
    cssTarget: ['safari14', 'chrome87', 'firefox78'],
  },
})
