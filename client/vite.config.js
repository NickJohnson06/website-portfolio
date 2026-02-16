import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  return {
    base: isDev ? '/' : '/website-portfolio/',
    plugins: [react()],
    server: {
      port: 3000,
    },
  }
})
