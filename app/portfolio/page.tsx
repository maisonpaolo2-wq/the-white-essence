import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import { portfolio, site } from '@/content/data'

export const metadata: Metadata = {
  title: `Portfolio · ${site.fullName}`,
  description: 'Bodas organizadas con alma. Cada imagen cuenta una historia real vivida en Barcelona y alrededores.',
}

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>
            Portfolio
          </p>
          <h1 className="headline page-hero-title">
            Momentos que<br />permanecen
          </h1>
          <p className="page-hero-sub">
            Cada boda es un mundo. Aqui hay una muestra de los mundos que hemos
            construido juntos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="portfolio-masonry">
            {portfolio.map(item => (
              <div key={item.id} className="portfolio-item">
                <Image
                  src={item.image}
                  alt={item.description}
                  width={600}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="portfolio-item-overlay">
                  <div className="portfolio-item-text">
                    <p className="portfolio-item-title">{item.title}</p>
                    <p className="portfolio-item-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="wrap cta-band-inner">
          <Reveal>
            <h2 className="headline cta-band-title">
              ¿Imaginais vuestra boda?
            </h2>
            <p className="cta-band-sub">
              Cuéntame como la veis y empezamos a construirla juntos.
            </p>
            <Link href="/contacto" className="btn btn-ghost-light">
              Hablemos
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  )
}
