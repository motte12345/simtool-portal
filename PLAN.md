# PLAN.md — simtool-portal

## 目的
`simtool.dev` のapexドメインにポータルサイトを置き、以下を実現する。

1. apexにコンテンツがある状態にしてAdSense審査・サチコ・SNSシェアの体裁を整える
2. 各ツール（`*.simtool.dev`）への内部リンクハブとして機能させる
3. 新ツール追加時の認知導線を作る

## フェーズ

### Phase 1: MVP公開（最優先）
- Vite + React + TS でスキャフォールド
- ヒーロー + ツール一覧（公開中の9ツール）+ フッター
- About / Privacy / Contact の3ページ
- SEO（meta, OGP, sitemap, JSON-LD）
- Cloudflare Pages デプロイ + apex 割り当て

### Phase 2: 充実化（公開後）
- AdSense 配置（審査通過後）
- 各ツールの紹介を1〜2行 → カード裏側に詳細説明追加
- Pickup（おすすめ・新着）セクション
- 英語版 `/en` 検討（cooking-conv, color-conv, wagara-gen 向け）
- 各ツールのフッター→ simtool.dev への逆リンク統一

### Phase 3: 機能拡張（必要なら）
- 検索/フィルタ
- お気に入り（localStorage）
- ニュース・更新ログ

## 掲載対象ツール（Phase 1）

| カテゴリ | ツール | URL |
|---|---|---|
| 暮らし・お金 | 電気代カリキュレーター | https://denkidai.simtool.dev |
| 暮らし・お金 | 引越し費用シミュレーター | https://hikkoshi.simtool.dev |
| 暮らし・お金 | 繰上返済シミュレーター | https://kuriage.simtool.dev |
| 暮らし・お金 | 内装材計算ツール | https://naiso.simtool.dev |
| 暮らし・お金 | 手取り計算ツール | https://tedori.simtool.dev |
| 変換 | サイズ・単位変換 | https://size.simtool.dev |
| 変換 | 色変換・配色ツール | https://color.simtool.dev |
| 変換 | 料理単位変換（英語圏） | https://cooking.simtool.dev |
| ジェネレーター | 和柄パターンジェネレーター | https://wagara.simtool.dev |
| ジェネレーター | Invoice Generator | https://invoice.simtool.dev |

未掲載（未公開・WIP）: pdf-tools, og-preview。公開時に追加する。

## 非ゴール
- バックエンド・DB は持たない（静的サイト）
- 各ツール本体の機能は載せない（あくまで導線）
- ログイン・ユーザー機能なし
