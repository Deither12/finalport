import { forwardRef } from 'react'

const Section = forwardRef(function Section({ id, title, children, inView }, ref) {
  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '40px 0',
        borderTop: '1px solid var(--border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <h2 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 20 }}>
        {title}
      </h2>
      {children}
    </section>
  )
})

export default Section
