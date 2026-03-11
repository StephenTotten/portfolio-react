/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // Use root-relative base in dev, and GitHub Pages base in prod.
  base: command === 'serve' ? '/' : '/portfolio-react/',
  plugins: [react()],
}));
