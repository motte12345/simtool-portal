import Head from '../components/Head'

export default function PrivacyPage() {
  return (
    <>
      <Head
        title="プライバシーポリシー | simtool.dev"
        description="simtool.dev の個人情報・Cookie・広告に関する取り扱いについて。"
        path="/privacy"
      />
      <article className="article container">
        <h1>プライバシーポリシー</h1>
        <p>
          本ポリシーは <strong>simtool.dev</strong>{' '}
          および同ドメイン配下のサブドメインで提供するすべてのツールに適用されます。
        </p>

        <h2>取得する情報</h2>
        <ul>
          <li>
            アクセス解析（Google Analytics 4）により、IPアドレス・ブラウザ情報・閲覧ページなどを匿名化された形で取得します
          </li>
          <li>
            各ツールの入力値はお使いのブラウザ（localStorage）のみに保存され、サーバーには送信されません
          </li>
        </ul>

        <h2>Cookieと広告</h2>
        <p>
          本サイトは Google AdSense
          を利用しています。第三者配信事業者が Cookie
          を使用して広告を配信することがあります。
          {' '}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google による広告
          </a>
          {' '}
          のページから、パーソナライズ広告を無効にできます。
        </p>

        <h2>アフィリエイトプログラム</h2>
        <p>
          本サイトは Amazon アソシエイト・楽天アフィリエイト・A8.net
          等のアフィリエイトプログラムに参加しており、紹介リンク経由で発生した売上に応じて報酬を受け取ることがあります。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          本ポリシーに関するご質問は <a href="/contact">お問い合わせ</a> までご連絡ください。
        </p>

        <p style={{ marginTop: '32px', color: '#94a3b8', fontSize: '13px' }}>
          最終更新日: 2026年4月27日
        </p>
      </article>
    </>
  )
}
