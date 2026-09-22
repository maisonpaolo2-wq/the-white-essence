'use client'

import { useEffect, useState } from 'react'
import { navLinks, site } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#inicio" className="nav-brand" aria-label={site.fullName}>
          {site.name}
        </a>

        <div className="nav-right">
          <nav aria-label="Principal">
            <ul className="nav-links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="nav-lang" aria-hidden="true">EN</span>

          <a href="#contacto" className="nav-cta">Hablemos</a>

          <button
            className="nav-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menú de navegación"
      >
        <div className="mobile-menu-header">
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 18,
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--on-dark-dim)',
              letterSpacing: '0.04em',
            }}
          >
            {site.name}
          </span>
          <button
            className="mobile-menu-close"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            &#215;
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a href="#contacto" className="btn btn-ghost-light" onClick={closeMenu}
            style={{ fontSize: 10, padding: '14px 32px' }}>
            Hablemos
          </a>
        </div>
      </div>
    </>
  )
}
