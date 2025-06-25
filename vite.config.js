import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Lyssis-Designs/',
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      buffer: 'buffer', // This tells Vite how to resolve 'buffer'
    },
  },
  define: {
    'process.env': {}, // Avoids Node polyfill issues if needed later
  },
});