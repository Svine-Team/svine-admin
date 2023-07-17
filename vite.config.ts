import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@app": `${__dirname}/src/_app`,
      "@api": `${__dirname}/src/api/`,
      "@assets": `${__dirname}/src/assets/`,
      "@components": `${__dirname}/src/components/`,
      "@pages": `${__dirname}/src/pages/`,
      "@store": `${__dirname}/src/store/`,
      "@types": `${__dirname}/src/types/`,
      "@ui": `${__dirname}/src/ui/`,
      "@utils": `${__dirname}/src/utils/`,
    }
  },
  optimizeDeps: {
    disabled: false
  },
  define: {
    'process.env': process.env,
    global: 'window'
  }
});
