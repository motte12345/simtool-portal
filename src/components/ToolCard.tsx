import type { Tool } from '../data/tools'

const LOCALE_LABEL: Record<Tool['locale'], string> = {
  ja: '日本語',
  en: 'English',
  'ja+en': '日本語 / EN',
}

type Props = {
  tool: Tool
}

export default function ToolCard({ tool }: Props) {
  return (
    <a
      className="tool-card"
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${tool.title}（新しいタブで開く）`}
    >
      <div className="tool-card__head">
        <span className="tool-card__emoji" aria-hidden="true">
          {tool.emoji}
        </span>
        <span className="tool-card__title">{tool.title}</span>
      </div>
      <p className="tool-card__desc">{tool.description}</p>
      <div className="tool-card__foot">
        <span className="tool-card__url">{tool.hostname}</span>
        <span className="tool-card__locale">{LOCALE_LABEL[tool.locale]}</span>
      </div>
    </a>
  )
}
