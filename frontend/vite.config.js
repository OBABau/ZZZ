import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config with a development proxy so the frontend can call /api/*
// and have those requests forwarded to the Django backend at localhost:8000.
// This keeps the dev setup simple (no CORS setup needed for local work).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
