export default function Hero() {
  return (
    <div style={{ padding: '56px 0 48px' }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        marginBottom: 20,
        flexShrink: 0,
      }}>
        <img
          src="/deitherpfp.jpg"
          alt="Deither Amurao"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
      <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 4, lineHeight: 1.2 }}>
        Deither Amurao
      </h1>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>Calamba City, Laguna, Philippines</p>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        IT Student \ Web Developer \ OJT Applicant
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <a href="mailto:deitheramurao@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '7px 14px', fontSize: 13, fontWeight: 500,
          borderRadius: 8, textDecoration: 'none', cursor: 'pointer',
          background: 'var(--text)', color: 'var(--bg)', border: '1px solid var(--text)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Send Email
        </a>
        <a href="tel:09215921673" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '7px 14px', fontSize: 13, fontWeight: 500,
          borderRadius: 8, textDecoration: 'none', cursor: 'pointer',
          background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
          0921-592-1673
        </a>
      </div>
    </div>
  )
}
