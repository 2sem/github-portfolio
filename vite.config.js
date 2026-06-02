import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { toonPlugin } from './vite-plugin-toon.js'

export default defineConfig({
  plugins: [react(), toonPlugin()],
  base: './',
})
