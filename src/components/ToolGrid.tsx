import { CATEGORIES, TOOLS } from '../data/tools'
import ToolCard from './ToolCard'

export default function ToolGrid() {
  return (
    <>
      {CATEGORIES.map((cat) => {
        const items = TOOLS.filter((t) => t.category === cat.id)
        if (items.length === 0) return null
        return (
          <section
            key={cat.id}
            className="section"
            id={cat.id}
            aria-labelledby={`heading-${cat.id}`}
          >
            <header className="section__head">
              <h2 className="section__title" id={`heading-${cat.id}`}>
                {cat.label}
              </h2>
              <p className="section__sub">{cat.sub}</p>
            </header>
            <div className="tools">
              {items.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}
