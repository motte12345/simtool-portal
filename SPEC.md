# SPEC.md — simtool-portal

## サイトマップ

```
/                  ポータルトップ
/about             サイト概要
/privacy           プライバシーポリシー
/contact           連絡先
```

## トップページ（/）

### セクション
1. **ヘッダー**: ロゴ「simtool.dev」、ナビ（About / Privacy / Contact）
2. **ヒーロー**: キャッチコピー + サブ説明 + CTA（ツール一覧へスクロール）
3. **ツール一覧**: カテゴリ別グリッド
4. **フッター**: コピーライト、運営者、各種リンク

### キャッチコピー案
- メイン: 「暮らしの計算、もっとカンタンに。」
- サブ: 「電気代・引越し・手取り・色・サイズ — 個人開発の便利ツール集」

### ツールカード仕様
- アイコン（emoji 1文字）
- タイトル
- 1行説明
- 「使ってみる」ボタン（外部リンク、`target="_blank"` `rel="noopener"`）

## カテゴリ

| ID | 表示名 | 含まれるツール |
|---|---|---|
| `money` | 暮らし・お金 | denkidai, hikkoshi, kuriage, naiso, tedori |
| `convert` | 変換ツール | size, color, cooking |
| `generator` | ジェネレーター | wagara |

## ツールデータ（src/data/tools.ts）

```ts
export type Tool = {
  id: string
  title: string
  description: string
  url: string
  category: 'money' | 'convert' | 'generator'
  emoji: string
  locale: 'ja' | 'en' | 'ja+en'
}
```

## SEO

### meta（index.html）
- title: `simtool.dev — 暮らしを便利にするWeb計算ツール集`
- description: `電気代・引越し・手取り・サイズ変換など、個人開発の無料Web計算ツールを集めたポータルサイト。`
- canonical: `https://simtool.dev/`
- og:image: `https://simtool.dev/ogp.png`

### JSON-LD（トップ）
- `WebSite`（name, url, potentialAction で内部検索…は不要、最低限name+url）
- `Organization`（name: simtool.dev、運営者情報）
- `ItemList`（ツール一覧、各 itemListElement に url + name + description）

### sitemap.xml
- `/`, `/about`, `/privacy`, `/contact` を列挙

## OGP画像
- 1200x630 PNG
- 背景: グラデ（青系）
- テキスト: `simtool.dev` + 「暮らしの計算ツール集」
- フッター: `simtool.dev`

## 状態保持
今回は入力フォームがないので localStorage は使わない。

## アクセシビリティ
- 外部リンクは `aria-label` で「新しいタブで開く」を補足
- カラーコントラスト WCAG AA 以上
- フォーカスリング維持

## 非対応
- ダークモード（Phase 2以降で検討）
- 多言語（日本語のみ）
- 検索/絞り込み（10件以下なので不要）
