import { defineConfig } from 'vitest/config';

import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
    test: {
        includeSource: ['src/**/*.{ts,tsx}'],
        environment: "happy-dom"
    },

    define: {
        'import.meta.vitest': 'undefined'
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx']
    },

    plugins: [react()]
})
