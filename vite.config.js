import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [eslint(), svgr(), react()],
    server: {
        port: 3000,
        host: true,
        hmr: false,
    },
});
