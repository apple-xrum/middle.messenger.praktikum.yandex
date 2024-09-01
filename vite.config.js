import path, { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: '.',
  build: {
    outDir: resolve(dirname, 'dist'),
  },
});
