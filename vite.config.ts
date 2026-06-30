import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Importante para deploy em subpastas (ex: Vercel)
  build: {
    outDir: 'dist', // Pasta de saída do build
    emptyOutDir: true, // Limpa a pasta antes de gerar novos arquivos
  },
})
