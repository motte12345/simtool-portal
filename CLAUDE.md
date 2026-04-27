# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

simtool-portal — `simtool.dev` のapexトップページ（ポータルサイト）。
全 simtool.dev サブドメインのツールをカテゴリ別に紹介する集約ページ。

本番URL: https://simtool.dev/

目的:
1. apexドメインに実体を持たせて、AdSense・サーチコンソール・SNSシェア時の表示を整える
2. 各ツール間のクロスリンクハブとして機能させる（SEOで内部リンク強化）
3. 新規ツール追加時の発見性を高める

## Tech Stack

- **Framework**: React 19 + TypeScript (Vite 8)
- **Routing**: react-router-dom（`/`, `/about`, `/privacy`, `/contact`）
- **Hosting**: Cloudflare Pages（GitHub main push で自動デプロイ）
- **Analytics**: GA4（ID 取得後に index.html へ直書き）
- **Ads**: Google AdSense `ca-pub-6514048542181621`（プロジェクト共通）

## Build & Dev Commands

```bash
npm install
npm run dev          # Vite dev server (port 5173)
npm run build        # tsc -b && vite build
npm run preview
npm run lint
npm run typecheck
npm run generate:ogp # SVG → PNG (1200x630)
```

## Deploy

GitHub連携で main push → Cloudflare Pages 自動デプロイ。
プロジェクト名: `simtool-portal`、apex `simtool.dev` を割り当てる。

手動デプロイ:
```bash
npm run build && npx wrangler pages deploy dist --project-name simtool-portal --branch main --commit-dirty=true
```
注意: wranglerのcommit-messageに日本語を使うとエラーになる。ASCIIで書くこと。

## Architecture

### ページ構成

| Path | 役割 |
|---|---|
| `/` | ポータルトップ（ヒーロー + ツール一覧 + JSON-LD ItemList） |
| `/about` | サイト概要・運営者情報 |
| `/privacy` | プライバシーポリシー（AdSense審査要件） |
| `/contact` | 連絡先 |

### データ層

- `src/data/tools.ts` — 掲載ツール一覧（id, title, url, description, category, locale, emoji）
  - 各ツールが完成・公開された時点でこのファイルに追加する
  - 未公開ツールは載せない（リンク切れ防止）

### コンポーネント

- `Layout` — ヘッダー + Outlet + フッター + GA4 SPA遷移トラッキング
- `Hero` — トップのキャッチコピー
- `ToolCard` — ツール1件のカード
- `ToolGrid` — カテゴリ別グリッド表示
- `JsonLd` — 構造化データ（`</script>` エスケープ済み）

### SEO

- JSON-LD: `WebSite`, `Organization`, `ItemList`（ツール一覧）, `BreadcrumbList`
- OGP画像: `public/ogp.png`（1200x630, scripts/generate-ogp.mjs）
- canonical URL は `https://simtool.dev/...`

### セキュリティ

- `public/_headers` — CSP, HSTS, X-Frame-Options, X-Content-Type-Options
- JsonLdで `<` を `<` にエスケープ

## 重要な設計判断

- **シンプル最優先**: ポータル本体には計算ロジックを持たせない。各ツールへの導線に徹する
- **掲載基準**: 公開済みのみ。未着手・WIP のものは載せない
- **多言語**: 当面 日本語のみ。英語化は需要を見て判断
- **GA4/AdSense IDはindex.htmlに直書き**（環境変数を使わない方針）
