import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works whether it's served from the
  // domain root (alecgcumming.com) or a GitHub Pages project subpath
  // (aleccumming.github.io/personal-website/).
  base: './',
  plugins: [react(), tailwindcss()],
})
