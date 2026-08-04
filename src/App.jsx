import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Learning from './components/Learning.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'experience', 'learning', 'contact']

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            if (e.target.classList.contains('skill-cat')) {
              e.target.querySelectorAll('.skill-fill').forEach((b) => {
                b.style.width = b.dataset.pct + '%'
              })
            }
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-up, .skill-cat').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [loading])

  useEffect(() => {
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('[data-target]').forEach((el) => {
              const target = +el.dataset.target
              let cur = 0
              const step = Math.ceil(target / 40)
              const timer = setInterval(() => {
                cur = Math.min(cur + step, target)
                el.textContent = cur
                if (cur >= target) clearInterval(timer)
              }, 40)
            })
            counterObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    const funFacts = document.querySelector('.fun-facts')
    if (funFacts) counterObs.observe(funFacts)
    return () => counterObs.disconnect()
  }, [loading])

  return (
    <>
      <div id="loader" className={loading ? '' : 'hide'}>
        <div className="loader-mark">KADARI SAIKUMAR</div>
        <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
      </div>
      <Navbar sections={SECTIONS} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Learning />
      <Contact />
      <Footer />
    </>
  )
}
