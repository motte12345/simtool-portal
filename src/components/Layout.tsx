import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      })
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.search])

  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="brand" aria-label="simtool.dev トップへ">
            <span className="brand__mark" aria-hidden="true">
              s
            </span>
            simtool.dev
          </Link>
          <nav className="nav" aria-label="メインナビ">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="app__main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>© {new Date().getFullYear()} simtool.dev</div>
          <nav className="footer__links" aria-label="フッターナビ">
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
