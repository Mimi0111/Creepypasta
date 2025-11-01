import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia 'tuusuario' y 'turepo' por tus valores de GitHub
export default defineConfig({
  plugins: [react()],
  base: '/turepo/'
})
