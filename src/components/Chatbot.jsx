import { useState, useRef, useEffect } from 'react'

const SYSTEM_PROMPT = `You are Deither Amurao's personal AI assistant on his portfolio website. Your job is to answer questions about Deither in a friendly, professional, and concise way.

Here is everything you know about Deither:

Name: Deither Manaog Amurao
Email: deitheramurao@gmail.com
Phone: 0921-592-1673
Location: 202 Purok 3, Brgy. Kay-Anlog, Calamba City, Laguna

Objective: Seeking an on-the-job training (OJT) opportunity in Information Technology to learn industry practices, build practical expertise, and prepare for a successful career in the IT profession.

Education:
- BS Information Technology at STI College Calamba (2022 - Present)
- Senior High School - IT in Mobile App and Web Development at STI College Calamba (2020 - 2022)

Projects:
- Online Record Management with Canine Breed Identification Module: A web-based online record management system for a veterinary clinic integrated with a machine learning-based canine breed identification module, enabling efficient pet record handling and accurate breed recognition from uploaded images.

Technical Skills:
- Frontend: HTML, CSS, JavaScript, React JS
- Backend: Node.js, PHP, Java, C#, MySQL
- Tools: Git, GitHub, VPS Deployment, Shared Hosting, VS Code
- Other: Microsoft Office, strong communication, analytical thinking, problem-solving, teamwork, time management

Certifications:
- Toshiba Workshop
- Java Fundamentals
- System Administration
- SAP Basic
- Advance SAP

Keep answers short and friendly. If someone asks about hiring or OJT opportunities, encourage them to reach out via email at deitheramurao@gmail.com. If asked something you don't know about Deither, politely say you don't have that information.`

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Deither's AI assistant. Ask me anything about his skills, projects, or background! 👋" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await response.json()
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response."
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again!' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with Deither's AI"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
          width: 48, height: 48, borderRadius: '50%',
          background: 'var(--text)', color: 'var(--bg)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 84, right: 24, zIndex: 1000,
          width: 340, height: 460,
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
          overflow: 'hidden',
          animation: 'chatIn 0.2s ease',
        }}>
          <style>{`
            @keyframes chatIn {
              from { opacity: 0; transform: translateY(12px) scale(0.97); }
              to { opacity: 1; transform: none; }
            }
            .chat-input::placeholder { color: var(--muted); }
            .chat-input:focus { outline: none; }
            ::-webkit-scrollbar { width: 4px; }
            ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
          `}</style>

          {/* Header */}
          <div style={{
            padding: '14px 16px',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: 10,
            flexShrink: 0,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0,
            }}>
              <img src="/deitherpfp.jpg" alt="Deither" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>Chat with Deither's AI</p>
              <p style={{ fontSize: 11, color: 'var(--muted)' }}>Ask me anything about him</p>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>Online</span>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto',
            padding: '14px 14px 8px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '8px 12px',
                  borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: msg.role === 'user' ? 'var(--text)' : 'var(--tag-bg)',
                  color: msg.role === 'user' ? 'var(--bg)' : 'var(--text)',
                  fontSize: 13,
                  lineHeight: 1.55,
                  border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '12px 12px 12px 2px',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--border)',
                  display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--muted)',
                      display: 'inline-block',
                      animation: `bounce 1.2s infinite ${i * 0.2}s`,
                    }} />
                  ))}
                  <style>{`@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }`}</style>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid var(--border)',
            display: 'flex', gap: 8, alignItems: 'center',
            flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              disabled={loading}
              style={{
                flex: 1, border: '1px solid var(--border)',
                borderRadius: 8, padding: '7px 10px',
                fontSize: 13, background: 'var(--bg2)',
                color: 'var(--text)', resize: 'none',
                fontFamily: 'inherit',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: 34, height: 34, borderRadius: 8, border: 'none',
                background: input.trim() && !loading ? 'var(--text)' : 'var(--border)',
                color: input.trim() && !loading ? 'var(--bg)' : 'var(--muted)',
                cursor: input.trim() && !loading ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s', flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
