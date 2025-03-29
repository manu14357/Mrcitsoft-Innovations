import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/",
  optimizeDeps: {
    include: ['react-syntax-highlighter'],
  },
  resolve: {
    alias: {
      // Add aliases if needed
    },
  },
});