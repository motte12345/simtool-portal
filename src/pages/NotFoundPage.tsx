import { Link } from 'react-router-dom'
import Head from '../components/Head'

export default function NotFoundPage() {
  return (
    <>
      <Head
        title="ページが見つかりません | simtool.dev"
        description="お探しのページは見つかりませんでした。"
        path="/404"
      />
      <article className="article container">
        <h1>ページが見つかりません</h1>
        <p>
          お探しのページは見つかりませんでした。URLが間違っているか、ページが移動した可能性があります。
        </p>
        <p>
          <Link to="/">トップへ戻る</Link>
        </p>
      </article>
    </>
  )
}
