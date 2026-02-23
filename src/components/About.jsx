import { useInView } from '../hooks/useInView'
import Section from './Section'

export default function About() {
  const { ref, inView } = useInView()
  return (
    <Section id="about" title="About" ref={ref} inView={inView}>
      <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75 }}>
        <p style={{ marginBottom: 14 }}>
          I'm a BS Information Technology student at STI College Calamba, building practical skills in full-stack web development and software engineering. I enjoy turning ideas into working applications and am always looking to learn from real-world experience.
        </p>
        <p style={{ marginBottom: 14 }}>
          My recent capstone project is an Online Record Management System for a veterinary clinic, integrated with a machine learning–based canine breed identification module — combining web development with computer vision to solve a real problem.
        </p>
        <p>
          I'm currently seeking an on-the-job training opportunity where I can contribute meaningfully, grow as a developer, and learn alongside experienced engineers.
        </p>
      </div>
    </Section>
  )
}
