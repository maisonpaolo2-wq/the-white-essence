'use client'

import { useState } from 'react'
import { testimonials } from '@/content/data'

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx(i => (i + 1) % testimonials.length)

  return (
    <div className="testimonials-wrap">
      <p className="testimonial-quote">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="testimonial-meta">
        <p className="testimonial-author-name">{t.author}</p>
        <p className="testimonial-author-info">{t.date} · {t.service}</p>
      </div>

      <div className="testimonial-nav" role="group" aria-label="Testimonios">
        <button className="testimonial-prev" onClick={prev} aria-label="Anterior testimonio">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 2L4 7l5 5" />
          </svg>
        </button>

        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === idx ? ' active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Ir al testimonio ${i + 1}`}
          />
        ))}

        <button className="testimonial-next" onClick={next} aria-label="Siguiente testimonio">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 2l5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
