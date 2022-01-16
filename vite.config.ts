import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'oldmodern-ui',
      fileName: (format) => `oldmodern-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@vanilla-extract/css'],
    }
  }
});
