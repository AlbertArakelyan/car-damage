import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }), react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'plugin.js',
        assetFileNames: 'plugin.css',
      },
    },
  },
});
