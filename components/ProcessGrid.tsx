import Reveal from '@/components/Reveal'
import { process } from '@/content/data'

const icons: Record<string, React.ReactNode> = {
  chat: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h20v14H4z" />
      <path d="M4 20l4 4v-4" />
    </svg>
  ),
  document: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12l4 4v16H6z" />
      <path d="M18 4v4h4" />
      <path d="M10 12h8M10 16h6" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="20" height="18" rx="1" />
      <path d="M4 11h20M9 4v4M19 4v4" />
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22S4 16 4 9.5A5.5 5.5 0 0114 6.7 5.5 5.5 0 0124 9.5C24 16 14 22 14 22z" />
    </svg>
  ),
}

export default function ProcessGrid() {
  return (
    <div className="process-grid">
      {process.map((step, i) => (
        <Reveal key={step.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
          <div className="process-cell">
            <div className="process-icon">{icons[step.icon]}</div>
            <p className="process-step-num">0{i + 1}</p>
            <p className="process-step-title">{step.title}</p>
            <p className="process-step-desc">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
