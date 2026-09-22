import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: `Sobre mí · ${site.fullName}`,
  description: 'Soy Mar, wedding planner y event designer en Barcelona. Organizo bodas con alma que os reflejan a vosotros.',
}

const values = [
  {
    num: '01',
    title: 'Autenticidad',
    desc: 'Diseño bodas que os reflejan a vosotros, no las que dicta la temporada. Si vuestra boda parece sacada de un catálogo, algo hemos hecho mal.',
  },
  {
    num: '02',
    title: 'Presencia',
    desc: 'El dia de vuestra boda mi único trabajo es que no tengáis que preocuparos de nada. Vosotros presentes, yo ocupándome de todo lo demás.',
  },
  {
    num: '03',
    title: 'Detalle',
    desc: 'Cada elemento está elegido con un motivo. Desde el papel de las invitaciones hasta el lazo del ramo, todo cuenta una parte de vuestra historia.',
  },
]

export default function SobreMiPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>
            Sobre mí
          </p>
          <h1 className="headline page-hero-title">
            Soy Mar
          </h1>
          <p className="page-hero-sub">
            Wedding planner y event designer. Organizo bodas en Barcelona y alrededores
            que solo podrian existir para vosotros.
          </p>
        </div>
      </section>

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
                Mi historia
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Empecé a organizar bodas porque me daba cuenta de que muchas celebraciones
                no reflejaban a las parejas que las protagonizaban. Habia produccion, habia
                flores, habia comida, pero faltaba alma.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Me especializo en la organización integral, la coordinación y en crear
                elementos handmade personalizados que convierten cada boda en algo
                irrepetible. Cada detalle está pensado para vosotros.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Trabajo con parejas que quieren una boda que cuente su historia. No la
                historia de pinterest, sino la vuestra: cómo os conocisteis, qué os hace
                reir, qué música ponéis cuando estáis en casa.
              </p>
              <p className="body-text">
                Trabajo en Barcelona y alrededores, y viajo donde la boda lo merezca.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 16 }}>Como trabajo</p>
            <h2 className="headline" style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}>
              Lo que me guia
            </h2>
          </Reveal>
          <div className="values-grid">
            {values.map(v => (
              <Reveal key={v.num}>
                <div className="value-cell">
                  <p className="value-num">{v.num}</p>
                  <p className="value-title">{v.title}</p>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 56, textAlign: 'center' }}>
              Lo que dicen
            </p>
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </section>

      <div className="cta-band">
        <div className="wrap cta-band-inner">
          <Reveal>
            <h2 className="headline cta-band-title">
              ¿Conectamos?
            </h2>
            <p className="cta-band-sub">
              Cuéntame vuestra boda y vemos si somos el equipo adecuado.
            </p>
            <Link href="/contacto" className="btn btn-ghost-light">
              Escribir a Mar
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  )
}
