import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Chatbot from './components/ChatWidget'

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Nav dark={dark} toggleDark={() => setDark(d => !d)} />
      <main style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 80px' }}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer style={{ maxWidth: 680, margin: '0 auto', padding: '20px 20px 40px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontSize: 13, color: 'var(--muted)' }}>© 2025 Deither Manaog Amurao. All rights reserved.</p>
        <p style={{ fontSize: 13, color: 'var(--muted)' }}>Calamba City, Laguna</p>
      </footer>
      <Chatbot />
    </div>
  )
}