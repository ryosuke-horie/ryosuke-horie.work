import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@next/next': nextPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
        },
        rules: {
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off', // img要素の使用警告を無効化
        },
    },
];
