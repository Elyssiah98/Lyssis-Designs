import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Lyssis-Designs-Website/', // ← Change this!
  plugins: [react()],
});