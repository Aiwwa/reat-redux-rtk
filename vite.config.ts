import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.join(__dirname, './src/shared/'),
      '@components': path.join(__dirname, './src/shared/components/'),
      '@scssCore': path.join(__dirname, './src/styles/core/'),
    },
  },
});
