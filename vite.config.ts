import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';
import dts from 'vite-dts';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'oldmodern-ui',
      fileName: (format) => `oldmodern-ui.${format}.js`,
    },
    rollupOptions: {
      external: isExternal,
    },
  },
});
