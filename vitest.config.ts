import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    environment: 'node',
    env: {
      DOTENV_CONFIG_PATH: '.env.test',
    },
    setupFiles: ['dotenv/config', './src/test/setup.ts'],
    exclude: ['node_modules', 'dist'],
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
});
