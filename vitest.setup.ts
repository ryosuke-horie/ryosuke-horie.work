import '@testing-library/jest-dom/vitest';
import 'vitest-dom/extend-expect';
import { vi } from 'vitest';
import React from 'react';

// next/imageのモック
vi.mock('next/image', () => {
    const MockImage = ({ src, alt, ...props }: any) => {
        return `<img src="${src}" alt="${alt}" ${Object.entries(props)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ')} />`;
    };
    MockImage.displayName = 'MockImage';
    return { __esModule: true, default: MockImage };
});
