import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ProcessGrid from '@/components/ProcessGrid'
import { site, services, portfolio } from '@/content/data'

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Full viewport centered
      ══════════════════════════════════════ */}
      <section id="inicio" className="hero">
        <div className="hero-bg">
          <Image
            src="/photos/hero.jpg"
            alt="Mesa de boda con decoracion mediterranea en Barcelona"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <p className="hero-label">Wedding Planner &amp; Event Designer</p>
          <h1 className="hero-title">
            The White<br />Essence
          </h1>
          <div className="hero-accent" />
          <p className="hero-tagline">
            Bodas con identidad propia<br />Barcelona y alrededores
          </p>
          <Link href="/contacto" className="btn btn-crimson">
            Cuéntame vuestra historia
          </Link>
        </div>

        <a href="#intro" className="hero-scroll" aria-label="Bajar">
          <span>Descubrir</span>
          <div className="hero-scroll-line" />
        </a>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE BAND
      ══════════════════════════════════════ */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map(copy => (
            <span key={copy} style={{ display: 'flex', alignItems: 'center' }}>
              {['Organización', 'Coordinación', 'Decoración handmade', 'Barcelona y alrededores', 'The White Essence', 'Bodas con identidad propia'].map((item, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="marquee-item">{item}</span>
                  <span className="marquee-dot">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          INTRO
      ══════════════════════════════════════ */}
      <section id="intro" className="section">
        <div className="wrap">
          <div className="intro-split">
            <Reveal>
              <p className="label" style={{ marginBottom: 24, color: 'var(--crimson)' }}>
                El estudio
              </p>
              <h2
                className="headline"
                style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 32 }}
              >
                Cada boda nace<br />de una conversación<br />honesta
              </h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Soy Mar. Organizo bodas en Barcelona y alrededores que reflejan
                quiénes sois vosotros, no quien dice que debéis ser el mercado
                de las bodas.
              </p>
              <p className="body-text" style={{ marginBottom: 36 }}>
                Desde la búsqueda de la finca hasta el último detalle hecho a mano,
                mi trabajo es que cuando llegue el día no tengáis que pensar en
                nada más que en disfrutarlo.
              </p>
              <Link href="/servicios" className="link-arrow">
                Ver servicios <span aria-hidden="true">&#8594;</span>
              </Link>
            </Reveal>

            <Reveal delay={2}>
              <div className="intro-photos">
                <div className="intro-photo-main">
                  <Image
                    src="/photos/intro.jpg"
                    alt="Mar preparando los detalles de una boda en Barcelona"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
                <div className="intro-photo-accent">
                  <Image
                    src="/photos/portfolio-3.jpg"
                    alt="Detalle floral de boda"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="200px"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATEMENT
      ══════════════════════════════════════ */}
      <section className="statement-section">
        <div className="wrap">
          <Reveal>
            <blockquote className="statement-quote">
              Organizo bodas que reflejan quiénes sois.
              No las que dicta el mercado,
              sino las que solo podrían existir para vosotros.
            </blockquote>
            <div className="statement-attr">
              <div className="statement-attr-line" />
              <span className="statement-attr-text">Mar · The White Essence · Barcelona</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICIOS — Horizontal Cards
      ══════════════════════════════════════ */}
      <section id="servicios" className="section section--blush">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 16 }}>Servicios</p>
            <h2
              className="headline"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 64 }}
            >
              Cómo puedo ayudarte
            </h2>
          </Reveal>
        </div>

        <div className="wrap">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) as 0 | 1 | 2}>
              <div className="service-card">
                <div className="service-card-img">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="380px"
                  />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-lead">{s.lead}</p>
                  <ul className="service-card-includes">
                    {s.includes.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESO — Iconos lineales
      ══════════════════════════════════════ */}
      <section id="proceso" className="section">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 16 }}>Cómo trabajamos</p>
            <h2
              className="headline"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 64 }}
            >
              Del primer café<br />al último baile
            </h2>
          </Reveal>

          <ProcessGrid />
        </div>
      </section>

      {/* ══════════════════════════════════════
          PORTFOLIO — Masonry
      ══════════════════════════════════════ */}
      <section id="portfolio" className="section section--blush">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 16 }}>Portfolio</p>
            <h2
              className="headline"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 64 }}
            >
              Momentos que<br />permanecen
            </h2>
          </Reveal>

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

      {/* ══════════════════════════════════════
          SOBRE MI
      ══════════════════════════════════════ */}
      <section id="sobre-mi">
        <div className="about-split">
          <div className="about-img">
            <Image
              src="/photos/sobre-mar.jpg"
              alt="Mar, wedding planner y event designer en Barcelona"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="50vw"
            />
          </div>

          <div className="about-body">
            <Reveal>
              <p className="label" style={{ marginBottom: 20, color: 'var(--crimson)' }}>
                Sobre mí
              </p>
              <h2
                className="headline"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 28 }}
              >
                Soy Mar
              </h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Wedding planner y event designer en Barcelona. Empecé a organizar
                bodas porque me daba cuenta de que muchas celebraciones no reflejaban
                a las parejas que las protagonizaban. Había producción, había flores,
                había comida, pero faltaba alma.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Me especializo en la organización integral, la coordinación y en
                crear elementos handmade personalizados que convierten cada boda
                en algo irrepetible. Cada detalle está pensado para vosotros.
              </p>
              <p className="body-text" style={{ marginBottom: 36 }}>
                Trabajo en Barcelona y alrededores, y viajo donde la boda lo merezca.
              </p>
              <Link href="/contacto" className="btn btn-crimson">
                Hablemos
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIOS — Quote grande
      ══════════════════════════════════════ */}
      <section id="testimonios" className="section section--blush">
        <div className="wrap">
          <Reveal>
            <p
              className="label"
              style={{ marginBottom: 56, textAlign: 'center' }}
            >
              Lo que dicen
            </p>
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACTO
      ══════════════════════════════════════ */}
      <section id="contacto">
        <div className="contact-split">
          <div className="contact-left">
            <Reveal>
              <p className="label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
                Contacto
              </p>
              <h2
                className="headline"
                style={{
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  color: 'var(--on-dark)',
                  marginBottom: 40,
                }}
              >
                Cuéntame<br />cómo imaginas<br />vuestro día
              </h2>
              <p
                className="body-text"
                style={{ color: 'var(--on-dark-dim)', marginBottom: 48, maxWidth: 340 }}
              >
                Sin compromiso. Me cuentas vuestra idea, yo os digo cómo puedo
                ayudaros y si tenemos fit para trabajar juntos.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="contact-info-item">
                  <span className="label" style={{ color: 'rgba(255,255,255,0.25)', marginBottom: 4 }}>
                    Email
                  </span>
                  <a href={`mailto:${site.email}`} className="contact-info-link">
                    {site.email}
                  </a>
                </div>
                <div className="contact-info-item">
                  <span className="label" style={{ color: 'rgba(255,255,255,0.25)', marginBottom: 4 }}>
                    Instagram
                  </span>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    {site.instagram}
                  </a>
                </div>
                <div className="contact-info-item">
                  <span className="label" style={{ color: 'rgba(255,255,255,0.25)', marginBottom: 4 }}>
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="contact-right">
            <Reveal>
              <p className="label" style={{ marginBottom: 32 }}>Formulario de contacto</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
