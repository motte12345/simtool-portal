export type ToolCategory = 'money' | 'convert' | 'generator'

export type ToolLocale = 'ja' | 'en' | 'ja+en'

export type Tool = {
  id: string
  title: string
  description: string
  url: string
  hostname: string
  category: ToolCategory
  emoji: string
  locale: ToolLocale
}

export const CATEGORIES: { id: ToolCategory; label: string; sub: string }[] = [
  {
    id: 'money',
    label: '暮らし・お金',
    sub: '電気代・引越し・住宅ローン・手取りなど、毎日のお金にまつわる計算',
  },
  {
    id: 'convert',
    label: '変換ツール',
    sub: '単位・サイズ・色など、すぐ使える変換ツール',
  },
  {
    id: 'generator',
    label: 'ジェネレーター',
    sub: 'パターンやデザインの生成ツール',
  },
]

export const TOOLS: Tool[] = [
  {
    id: 'denkidai',
    title: '電気代カリキュレーター',
    description:
      '家電ごとの電気代を簡単計算。50種類以上のプリセット、買い替え節約や電力会社比較も。',
    url: 'https://denkidai.simtool.dev/',
    hostname: 'denkidai.simtool.dev',
    category: 'money',
    emoji: '⚡',
    locale: 'ja',
  },
  {
    id: 'hikkoshi',
    title: '引越し費用シミュレーター',
    description:
      '荷物量・距離・時期から引越し料金の相場を見積もり。単身〜ファミリーまで対応。',
    url: 'https://hikkoshi.simtool.dev/',
    hostname: 'hikkoshi.simtool.dev',
    category: 'money',
    emoji: '📦',
    locale: 'ja',
  },
  {
    id: 'kuriage',
    title: '繰上返済シミュレーター',
    description:
      '住宅ローンの繰上返済で総返済額・期間がどれだけ減るか試算。期間短縮型・返済額軽減型に対応。',
    url: 'https://kuriage.simtool.dev/',
    hostname: 'kuriage.simtool.dev',
    category: 'money',
    emoji: '🏠',
    locale: 'ja',
  },
  {
    id: 'naiso',
    title: '内装材計算ツール',
    description:
      '壁紙・床材・塗料・タイルの必要量を部屋のサイズから計算。ロス率も指定可能。',
    url: 'https://naiso.simtool.dev/',
    hostname: 'naiso.simtool.dev',
    category: 'money',
    emoji: '🧱',
    locale: 'ja',
  },
  {
    id: 'tedori',
    title: '手取り計算ツール',
    description:
      'パート・アルバイトの月収・年収から税金・社会保険料を引いた手取り額をシミュレーション。',
    url: 'https://tedori.simtool.dev/',
    hostname: 'tedori.simtool.dev',
    category: 'money',
    emoji: '💴',
    locale: 'ja',
  },
  {
    id: 'size',
    title: 'サイズ・単位変換',
    description:
      '長さ・重さ・体積・温度などをワンタップで変換。よく使う単位を網羅。',
    url: 'https://size.simtool.dev/',
    hostname: 'size.simtool.dev',
    category: 'convert',
    emoji: '📏',
    locale: 'ja',
  },
  {
    id: 'color',
    title: '色変換・配色ツール',
    description:
      'HEX / RGB / HSL の相互変換、配色提案、コントラスト判定。日本語・英語対応。',
    url: 'https://color.simtool.dev/ja/',
    hostname: 'color.simtool.dev',
    category: 'convert',
    emoji: '🎨',
    locale: 'ja+en',
  },
  {
    id: 'cooking',
    title: 'Cooking Unit Converter',
    description:
      'カップ・スプーン・グラム・オンスなど、料理レシピの単位を相互変換。英語圏向け。',
    url: 'https://cooking.simtool.dev/',
    hostname: 'cooking.simtool.dev',
    category: 'convert',
    emoji: '🍳',
    locale: 'en',
  },
  {
    id: 'wagara',
    title: '和柄パターンジェネレーター',
    description:
      '青海波・麻の葉・市松など、伝統的な和柄パターンを生成。SVG/PNG/CSSでダウンロード。',
    url: 'https://wagara.simtool.dev/ja/',
    hostname: 'wagara.simtool.dev',
    category: 'generator',
    emoji: '🌸',
    locale: 'ja+en',
  },
]

export const TOOL_COUNT = TOOLS.length
