import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // optional: change dev server port
    open: true  // optional: auto-open in browser
  },
  build: {
    outDir: 'dist', // default output folder
    sourcemap: true // helpful for debugging
  }
})
