import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
// import { ViteFaviconsPlugin } from 'vite-plugin-favicon';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), eslint()],
    server: {
        port: 3000,
    },
});
