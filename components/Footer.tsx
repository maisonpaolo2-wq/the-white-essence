import Link from 'next/link'
import { navLinks, site } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">{site.name}</Link>
            <p className="footer-desc">
              Wedding Planner y Event Designer en Barcelona y alrededores.
              Bodas con identidad propia, desde la primera idea hasta el último detalle.
            </p>
          </div>

          <div>
            <p className="footer-col-label">Navegación</p>
            <ul className="footer-nav">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-label">Contacto</p>
            <ul className="footer-nav">
              <li>
                <a href={`mailto:${site.email}`} className="footer-nav-a">{site.email}</a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
                Barcelona y alrededores
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} {site.name}. Todos los derechos reservados.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            {site.instagram}
          </a>
        </div>
      </div>
    </footer>
  )
}
