import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [eslint(), svgr(), react()],
    server: {
        port: 3000,
        host: true,
    },
});
