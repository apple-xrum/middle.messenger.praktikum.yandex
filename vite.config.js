// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        profile: 'index.html',
        signin: 'index.html',
        signup: 'index.html',
        "404": 'index.html',
        "500": 'index.html',
      },
    },
  },
});
