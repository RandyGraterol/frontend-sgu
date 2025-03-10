import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define tus alias aquí
      '@components': path.resolve(__dirname, './src/components'), // Alias para la carpeta components
      '@screens': path.resolve(__dirname, './src/screens'), // Alias para la carpeta pages
      '@router': path.resolve(__dirname, './src/router'),
      '@hooks':path.resolve(__dirname,'./src/hooks'),
      '@helper':path.resolve(__dirname,'./src/helper'),

    },
  }
})
