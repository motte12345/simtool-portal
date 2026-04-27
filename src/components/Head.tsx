import { useEffect } from 'react'

type Props = {
  title: string
  description: string
  path: string
}

const SITE = 'https://simtool.dev'

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export default function Head({ title, description, path }: Props) {
  useEffect(() => {
    document.title = title
    const url = `${SITE}${path}`
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, path])

  return null
}
