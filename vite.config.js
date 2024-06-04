import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // Cambiado a la raíz
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
