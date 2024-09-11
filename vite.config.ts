import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import * as child from 'child_process';
import { defineConfig } from 'vite';
import codegen from 'vite-plugin-graphql-codegen';
import tsConfigPaths from 'vite-tsconfig-paths';

const commitHash = child.execSync('git rev-parse --short HEAD').toString();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __COMMIT_HASH__: JSON.stringify(commitHash)
  },
  plugins: [
    react(),
    codegen(),
    tsConfigPaths(),
    sentryVitePlugin({
      org: 'vicnie-ab',
      project: 'sebra'
    })
  ],
  optimizeDeps: {
    include: ['@emotion/styled']
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  publicDir: 'public',
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    },
    cors: false
  }
});
