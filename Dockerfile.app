# === Stage 1: ビルドステージ ===
FROM node:22-bullseye AS builder
WORKDIR /app

# 依存関係のインストール
COPY package.json ./
RUN npm i

# ソースコードのコピーとビルド
COPY . .
RUN npm run build

# === Stage 2: ランタイム用イメージ（slim） ===
FROM node:22-bullseye-slim
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
