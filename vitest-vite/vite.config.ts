import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        includeSource: ['src/**/*.{js,ts}']
    },

    define: {
        'import.meta.vitest': 'undefined'
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js']
    }
})
