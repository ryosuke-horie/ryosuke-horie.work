import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../page';

describe('Home', () => {
    // スナップショットテスト
    it('renders homepage unchanged', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });

    // 重要なコンテンツの表示確認
    it('renders main sections', () => {
        render(<Home />);
        const nav = screen.getByRole('navigation');
        // ナビゲーション内の特定テキストを検証
        expect(within(nav).getByText(/^WEBエンジニア \| 堀江 遼佑$/)).toBeInTheDocument();

        // それ以外は全体からでもOK
        expect(screen.getByText(/サービス内容/)).toBeInTheDocument();
        expect(screen.getByText(/実績・事例/)).toBeInTheDocument();
        // 「プロフィール」も同様に範囲を絞るなど
        const profileSection = screen.getByRole('heading', { name: 'プロフィール' });
        expect(profileSection).toBeInTheDocument();
    });

    // ナビゲーションリンクの確認
    it('contains all navigation links', () => {
        render(<Home />);
        // ナビゲーション領域を取得
        const nav = screen.getByRole('navigation');
        const links = ['ホーム', 'サービス', '実績', 'プロフィール', '料金', 'お問い合わせ'];
        links.forEach((link) => {
            // ナビゲーション内のみで検索
            expect(within(nav).getByText(link)).toBeInTheDocument();
        });
    });

    // お問い合わせフォームの存在確認
    it('renders contact form with required fields', () => {
        render(<Home />);
        expect(screen.getByPlaceholderText(/山田 太郎/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/your@email.com/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/ご相談内容をご記入ください/)).toBeInTheDocument();
    });
});
