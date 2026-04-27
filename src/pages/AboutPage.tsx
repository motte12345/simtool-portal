import Head from '../components/Head'

export default function AboutPage() {
  return (
    <>
      <Head
        title="このサイトについて | simtool.dev"
        description="simtool.dev の運営方針・コンセプト・収益化に関する情報。"
        path="/about"
      />
      <article className="article container">
        <h1>このサイトについて</h1>
        <p>
          <strong>simtool.dev</strong>{' '}
          は、暮らしや仕事で「ちょっとした計算」が必要になったときに、すぐに使える無料のWeb計算ツールを集めたポータルサイトです。
          すべてのツールはブラウザ上で動作し、登録・インストールは不要です。
        </p>

        <h2>運営方針</h2>
        <ul>
          <li>個人開発で、ひとつひとつのツールを必要十分なシンプルさで提供する</li>
          <li>入力データはお使いの端末内（ブラウザ）にのみ保存され、サーバーには送られません</li>
          <li>運営費は広告（Google AdSense）とアフィリエイトで賄っています</li>
        </ul>

        <h2>掲載ツールの追加について</h2>
        <p>
          新しいツールを公開した時点で、本ポータルに追加します。要望・提案は
          {' '}
          <a href="/contact">お問い合わせ</a> からお気軽にどうぞ。
        </p>

        <h2>免責事項</h2>
        <p>
          各ツールが提示する数値は概算であり、契約や法律上の根拠に用いるものではありません。利用にあたり生じた損害について、運営者は一切の責任を負いません。
        </p>
      </article>
    </>
  )
}
