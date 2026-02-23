import { useInView } from '../hooks/useInView'
import Section from './Section'

const contacts = [
  {
    label: 'Email', value: 'deitheramurao@gmail.com', href: 'mailto:deitheramurao@gmail.com',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    label: 'Phone', value: '0921-592-1673', href: 'tel:09215921673',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>,
  },
  {
    label: 'Location', value: 'Calamba City, Laguna', href: null,
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
]

const rowStyle = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '12px 0', color: 'var(--text)', textDecoration: 'none',
}

export default function Contact() {
  const { ref, inView } = useInView()
  return (
    <Section id="contact" title="Contact" ref={ref} inView={inView}>
      {contacts.map((c, i) => {
        const inner = (
          <>
            <span style={{ color: 'var(--muted)', flexShrink: 0 }}>{c.icon}</span>
            <span style={{ fontSize: 13, color: 'var(--muted)', width: 60, flexShrink: 0 }}>{c.label}</span>
            <span style={{ fontSize: 14, color: 'var(--text)' }}>{c.value}</span>
            {c.href && (
              <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </span>
            )}
          </>
        )
        const borderStyle = { borderBottom: i < contacts.length - 1 ? '1px solid var(--border)' : 'none' }
        return c.href
          ? <a key={c.label} href={c.href} style={{ ...rowStyle, ...borderStyle }}>{inner}</a>
          : <div key={c.label} style={{ ...rowStyle, ...borderStyle }}>{inner}</div>
      })}
    </Section>
  )
}
