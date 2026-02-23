import { useInView } from '../hooks/useInView'
import Section from './Section'

const groups = [
  { label: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React JS'] },
  { label: 'Backend', skills: ['Node.js', 'PHP', 'Java', 'C#', 'MySQL'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'VPS Deployment', 'Shared Hosting', 'VS Code'] },
  { label: 'Productivity', skills: ['Microsoft Office', 'Communication', 'Critical Thinking', 'Teamwork'] },
]

export default function Skills() {
  const { ref, inView } = useInView()
  return (
    <Section id="stack" title="Tech Stack" ref={ref} inView={inView}>
      {groups.map((g, i) => (
        <div key={g.label} style={{ marginBottom: i < groups.length - 1 ? 20 : 0 }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
            {g.label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {g.skills.map(s => (
              <span key={s} style={{
                padding: '4px 10px', fontSize: 13,
                background: 'var(--tag-bg)', color: 'var(--tag-text)',
                borderRadius: 6, border: '1px solid var(--border)',
                transition: 'background 0.3s, color 0.3s',
              }}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
