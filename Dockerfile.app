# Dockerfile.app
# === Stage 1: ビルドステージ ===
FROM node:22-bullseye AS builder
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm ci

# ソースコードのコピーとビルド
COPY . .
RUN npm run build

# === Stage 2: ランタイム用イメージ（slim） ===
FROM node:22-bullseye-slim
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

# output: standalone モードでは next start ではなく、以下で起動する必要がある
CMD ["node", ".next/standalone/server.js"]
