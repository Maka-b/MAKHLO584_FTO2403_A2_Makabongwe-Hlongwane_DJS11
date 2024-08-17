import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser when starting the dev server
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
});