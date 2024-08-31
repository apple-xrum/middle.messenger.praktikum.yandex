import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: '.',
  build: {
    outDir: resolve(dirname, 'dist'),
  },
});
