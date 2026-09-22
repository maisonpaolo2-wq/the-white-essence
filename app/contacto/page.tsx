import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: `Contacto · ${site.fullName}`,
  description: 'Cuéntame cómo imaginas vuestra boda. Sin compromiso, vemos si encajamos.',
}

export default function ContactoPage() {
  return (
    <section className="contact-page">
      <div className="contact-split">
        <div className="contact-left">
          <Reveal>
            <p className="label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
              Contacto
            </p>
            <h1
              className="headline"
              style={{
                fontSize: 'clamp(36px, 5vw, 68px)',
                color: 'var(--on-dark)',
                marginBottom: 40,
              }}
            >
              Cuéntame<br />cómo imaginas<br />vuestro día
            </h1>
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
  )
}
