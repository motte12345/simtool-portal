# TODO.md — simtool-portal

## Phase 1: MVP

### スキャフォールド
- [x] プロジェクトディレクトリ作成
- [x] CLAUDE.md / PLAN.md / SPEC.md / TODO.md 作成
- [x] package.json / vite.config / tsconfig 群
- [x] eslint.config.js
- [x] index.html（meta, OGP, GA4 placeholder, AdSense）
- [x] src/main.tsx, src/App.tsx, src/index.css
- [x] public/_headers, _redirects, robots.txt, favicon.svg

### 実装
- [x] Layout（ヘッダー + フッター + GA4 SPA遷移）
- [x] HomePage（ヒーロー + ツールグリッド）
- [x] ToolCard / ToolGrid
- [x] AboutPage
- [x] PrivacyPage
- [x] ContactPage
- [x] JsonLd コンポーネント
- [x] tools.ts データ作成

### SEO
- [x] sitemap.xml
- [x] OGP画像生成スクリプト（scripts/generate-ogp.mjs）
- [x] OGP画像生成・配置

### 検証
- [x] `npm install` 成功
- [x] `npm run build` 成功
- [x] `npm run lint` / `npm run typecheck` クリア
- [ ] `npm run preview` で目視確認（ユーザー実施）
- [ ] 各ツールへのリンクが正しく開くか（ユーザー実施）

## デプロイ

- [ ] GitHubリポジトリ作成（HTTPS）
- [ ] Cloudflare Pages プロジェクト作成（`simtool-portal`）
- [ ] apex `simtool.dev` を割り当て
- [ ] DNS確認（A/CNAME）
- [ ] HTTPS発行確認
- [ ] サチコで `https://simtool.dev/` プロパティ追加 + sitemap送信

## Phase 1 後の追加作業

- [ ] GA4 新規プロパティ作成 → ID を index.html に埋め込む
- [ ] SHARED_CONFIG.md にプロジェクト追記
- [ ] ルート PLAN.md / CLAUDE.md にプロジェクト追記
- [ ] AdSense 審査（apex に実体ができたタイミングで申請）

## Phase 2

- [ ] 各ツール側のフッターから `simtool.dev` への逆リンク追加
- [ ] AdSense ユニット配置
- [ ] Pickup / 新着セクション
- [ ] 英語版 `/en` 検討
