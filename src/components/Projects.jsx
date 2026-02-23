import { useInView } from '../hooks/useInView'
import Section from './Section'

const projects = [
  {
    name: 'Online Record Management with Canine Breed Identification',
    desc: 'A web-based record management system for a veterinary clinic integrated with a machine learning–based canine breed identification module. Enables efficient pet record handling and accurate breed recognition from uploaded images.',
    tags: ['React', 'Node.js', 'MySQL', 'Python', 'Machine Learning'],
  },
]

export default function Projects() {
  const { ref, inView } = useInView()
  return (
    <Section id="projects" title="Projects" ref={ref} inView={inView}>
      {projects.map((p, i) => (
        <div key={i} style={{
          display: 'flex', gap: 16, alignItems: 'flex-start',
          padding: '16px 0',
          borderBottom: i < projects.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>{p.name}</p>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 10 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  padding: '3px 9px', fontSize: 12,
                  background: 'var(--tag-bg)', color: 'var(--tag-text)',
                  borderRadius: 6, border: '1px solid var(--border)',
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ color: 'var(--muted)', marginTop: 2, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </div>
        </div>
      ))}
    </Section>
  )
}
