import Head from '../components/Head'
import JsonLd from '../components/JsonLd'
import ToolGrid from '../components/ToolGrid'
import { TOOLS } from '../data/tools'

const SITE = 'https://simtool.dev'

export default function HomePage() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'simtool.dev',
    url: `${SITE}/`,
    inLanguage: 'ja-JP',
    description:
      '電気代・引越し・手取り・サイズ・色変換などの無料Web計算ツールを集めたポータルサイト。',
  }

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'simtool.dev',
    url: `${SITE}/`,
    logo: `${SITE}/favicon.svg`,
  }

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: TOOLS.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: tool.url,
      name: tool.title,
      description: tool.description,
    })),
  }

  return (
    <>
      <Head
        title="simtool.dev — 暮らしを便利にするWeb計算ツール集"
        description="電気代・引越し・手取り・サイズ・色変換など、個人開発の無料Web計算ツールを集めたポータルサイト。すべて広告のみで運営、登録不要・インストール不要。"
        path="/"
      />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={orgJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">
            暮らしの計算、もっと
            <span className="accent">カンタン</span>に。
          </h1>
          <p className="hero__sub">
            電気代・引越し・手取り・色・サイズ —
            個人開発の無料Web計算ツールを集めたポータルです。登録もインストールも不要、ブラウザでそのまま使えます。
          </p>
          <a href="#money" className="hero__cta">
            ツールを見る ↓
          </a>
        </div>
      </section>

      <ToolGrid />
    </>
  )
}
