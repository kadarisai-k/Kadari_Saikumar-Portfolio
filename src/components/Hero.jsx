import { useEffect, useState } from 'react'

const WORDS = ['Full Stack Developer', 'Frontend Engineer', 'Angular Developer', 'React Developer', 'Problem Solver']

// Drop your photo at src/assets/profile.jpg and it will appear automatically.
// Until then, a placeholder with your initials is shown.
let profileImg = null
try {
  profileImg = new URL('../assets/profile.jpg', import.meta.url).href
} catch {
  profileImg = null
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [hasPhoto, setHasPhoto] = useState(false)

  useEffect(() => {
    let cancelled = false
    let wi = 0, ci = 0, del = false
    let timeoutId
    const loop = () => {
      if (cancelled) return
      const w = WORDS[wi]
      if (!del) {
        setTyped(w.slice(0, ci + 1))
        ci++
        if (ci > w.length) { del = true; timeoutId = setTimeout(loop, 1500); return }
      } else {
        setTyped(w.slice(0, ci - 1))
        ci--
        if (ci < 0) { del = false; wi = (wi + 1) % WORDS.length; ci = 0; timeoutId = setTimeout(loop, 400); return }
      }
      timeoutId = setTimeout(loop, del ? 55 : 85)
    }
    timeoutId = setTimeout(loop, 1000)
    return () => { cancelled = true; clearTimeout(timeoutId) }
  }, [])

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">Full Stack Developer · Hyderabad, IN</div>
            <h1 className="hero-name">Kadari<br /><span className="hl">Saikumar</span></h1>
            <p className="hero-role">{typed}<span className="cursor-blink">|</span></p>
            <p className="hero-desc">
              I don't just write code — I build experiences. Passionate about crafting responsive,
              user-friendly applications that solve real-world problems with clean, efficient code.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>View My Work →</a>
              <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact Me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/kadarisai-k" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/kadarisaikumar/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:saikumar260303@gmail.com" className="social-link" title="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
              </a>
            </div>
          </div>
          <div className="hero-visual fade-up">
            <div className="photo-frame">
              <div className="ring"></div>
              <div className="photo-inner">
                {hasPhoto ? (
                  <img src={profileImg} alt="Kadari Saikumar" onError={() => setHasPhoto(false)} />
                ) : (
                  <svg className="photo-mark" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="260" height="260" fill="url(#kbg)" />
                    <defs>
                      <linearGradient id="kbg" x1="0" y1="0" x2="260" y2="260" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--surface)" />
                        <stop offset="1" stopColor="var(--surface-hi)" />
                      </linearGradient>
                    </defs>
                    <g opacity="0.5" stroke="var(--line-strong)">
                      <line x1="0" y1="86" x2="260" y2="86" />
                      <line x1="0" y1="174" x2="260" y2="174" />
                      <line x1="86" y1="0" x2="86" y2="260" />
                      <line x1="174" y1="0" x2="174" y2="260" />
                    </g>
                    <text x="130" y="118" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="20" fill="var(--accent)" opacity="0.85">&lt;/&gt;</text>
                    <text x="130" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="46" fill="var(--ink)">KS</text>
                    <circle cx="130" cy="130" r="86" stroke="var(--accent)" strokeOpacity="0.35" strokeDasharray="4 6" fill="none" />
                  </svg>
                )}
                {!hasPhoto && profileImg && (
                  <img
                    src={profileImg}
                    alt=""
                    style={{ display: 'none' }}
                    onLoad={() => setHasPhoto(true)}
                    onError={() => setHasPhoto(false)}
                  />
                )}
              </div>
              <div className="photo-tag">Open to Work</div>
            </div>
            <div className="tech-float">
              <span className="tech-pill">⚛ React.js</span>
              <span className="tech-pill">☕ Java</span>
              <span className="tech-pill">🅰 Angular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
