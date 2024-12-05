import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure alias resolves correctly to '/src'
    },
  },
  server: {
    port: 3000, // Optional: Set a custom port for the dev server
  },
  build: {
    outDir: 'dist', // Specify output directory for build
    emptyOutDir: true, // Clear output directory before building
  },
});
