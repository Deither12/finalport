import { useInView } from '../hooks/useInView'
import Section from './Section'

const certs = [
  { name: 'Toshiba Workshop', issuer: 'Toshiba' },
  { name: 'Java Fundamentals', issuer: 'Certification Program' },
  { name: 'System Administration', issuer: 'Certification Program' },
  { name: 'SAP Basic', issuer: 'SAP' },
  { name: 'Advance SAP', issuer: 'SAP' },
]

export default function Certifications() {
  const { ref, inView } = useInView()
  return (
    <Section id="certifications" title="Certifications" ref={ref} inView={inView}>
      {certs.map((c, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: i < certs.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{c.name}</p>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 1 }}>{c.issuer}</p>
          </div>
          <span style={{
            fontSize: 11, padding: '3px 8px', borderRadius: 99,
            background: 'var(--tag-bg)', color: 'var(--muted)',
            border: '1px solid var(--border)', flexShrink: 0,
          }}>Certified</span>
        </div>
      ))}
    </Section>
  )
}
