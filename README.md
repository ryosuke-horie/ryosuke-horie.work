# 個人事業用HP

## 開発環境

### CI/CD

- GitHub Actions
  - テスト系CI
    - cloudflare用ビルドのチェック
    - Biomeによるフォーマットチェック
- GitHub App
  - Cloudflare Pagesへの自動デプロイ

### ライブラリ更新手順について

- Dependabotで月1更新を行う
- 基本的にプルリクのブランチを確認して手元で手動確認する
- [詳細は実装に記載したコメントを確認](./.github/dependabot.yaml)
