import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ProcessGrid from '@/components/ProcessGrid'
import { services, site } from '@/content/data'

export const metadata: Metadata = {
  title: `Servicios · ${site.fullName}`,
  description: 'Organización integral, coordinación y decoración handmade para vuestra boda en Barcelona y alrededores.',
}

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>
            Servicios
          </p>
          <h1 className="headline page-hero-title">
            Cómo puedo<br />ayudarte
          </h1>
          <p className="page-hero-sub">
            Cada pareja es diferente. Por eso ofrezco distintos niveles de acompañamiento:
            desde estar presente en cada decisión hasta asegurarme de que el día fluya sin
            que tengáis que pensar en nada.
          </p>
        </div>
      </section>

      <section className="section section--blush">
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
                  <h2 className="service-card-title">{s.title}</h2>
                  <p className="service-card-lead">{s.lead}</p>
                  <ul className="service-card-includes">
                    {s.includes.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="label" style={{ marginBottom: 16 }}>Como trabajamos</p>
            <h2 className="headline" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 64 }}>
              Del primer café<br />al ultimo baile
            </h2>
          </Reveal>
          <ProcessGrid />
        </div>
      </section>

      <div className="cta-band">
        <div className="wrap cta-band-inner">
          <Reveal>
            <h2 className="headline cta-band-title">
              ¿Quieres saber si encajamos?
            </h2>
            <p className="cta-band-sub">
              Una llamada de 20 minutos, sin compromiso, para ver cómo puedo
              ayudaros y si tenemos feeling para trabajar juntos.
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
