import Head from '../components/Head'

export default function ContactPage() {
  return (
    <>
      <Head
        title="お問い合わせ | simtool.dev"
        description="simtool.dev へのご意見・ご要望・ツールリクエスト・広告掲載のお問い合わせ。"
        path="/contact"
      />
      <article className="article container">
        <h1>お問い合わせ</h1>
        <p>
          ご意見・ご要望・新しいツールのリクエスト・広告掲載に関するお問い合わせは、以下のメールアドレスまでお願いします。
        </p>

        <h2>連絡先</h2>
        <p>
          メール:{' '}
          <a href="mailto:tm.qp.sites@gmail.com">tm.qp.sites@gmail.com</a>
        </p>

        <h2>返信について</h2>
        <p>
          個人運営のため、すべてのお問い合わせに返信できるとは限りません。あらかじめご了承ください。
        </p>
      </article>
    </>
  )
}
