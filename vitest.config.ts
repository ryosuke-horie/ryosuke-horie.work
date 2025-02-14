import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                '.next',
                'node_modules',
                'coverage',
                'vitest.config.ts',
                'lib/utils.ts',
                'app/__tests__/**',
                '*.config.mjs',
                '*.config.ts',
                '*.config.tsx',
            ],
        },
        include: ['**/__tests__/**/*.test.{ts,tsx}'],
    },
});
