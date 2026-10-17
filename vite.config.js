import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/BiH-Transport-Group/', // GitHub Pages project path; change to '/' if using a custom domain
  plugins: [react()],
})
