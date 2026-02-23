import { useInView } from '../hooks/useInView'
import Section from './Section'

const items = [
  { year: '2022 — Present', title: 'BS Information Technology', sub: 'STI College Calamba', current: true },
  { year: '2020 — 2022', title: 'Senior High School — IT Track', sub: 'Mobile App and Web Development · STI College Calamba', current: false },
]

export default function Education() {
  const { ref, inView } = useInView()
  return (
    <Section id="education" title="Education" ref={ref} inView={inView}>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16,
          padding: '14px 0',
          borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', paddingTop: 1 }}>
            {item.current && (
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#22c55e', marginRight: 6, verticalAlign: 'middle', animation: 'blink 2s infinite' }} />
            )}
            {item.year}
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>{item.title}</p>
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>{item.sub}</p>
          </div>
        </div>
      ))}
    </Section>
  )
}
