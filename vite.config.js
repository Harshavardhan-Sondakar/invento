import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['751a-2402-3a80-ce2-fa3c-899f-5d77-87c6-509a.ngrok-free.app'],
  },
})
