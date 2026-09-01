const TRAITS = [
  { icon: '⚡', label: 'Fast Learner' },
  { icon: '🤝', label: 'Team Player' },
  { icon: '🧠', label: 'Problem Solver' },
  { icon: '🔍', label: 'Detail Oriented' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About</h2>
          <span className="section-kicker">Background &amp; Approach</span>
        </div>
        <div className="about-single">
          <p className="about-text fade-up">
            Hey! I'm <b>Kadari Saikumar</b>, a <b>Full Stack Developer</b> based in Hyderabad, India.
            I graduated in Computer Science Engineering from Kalasalingam Academy of Research and
            Education with a CGPA of 8.29, and I've built production web applications across the
            MERN stack — from customer storefronts to admin dashboards and backend systems.
          </p>
          <p className="about-text fade-up d1">
            I'm passionate about building end-to-end web applications — from crafting pixel-perfect
            UIs with React and Angular to designing scalable backend APIs with Node.js and Java.
            I believe great software is invisible: it just works beautifully.
          </p>
          <div className="about-traits fade-up d2">
            {TRAITS.map((t) => (
              <div className="trait" key={t.label}>
                <span className="trait-icon">{t.icon}</span>
                <span className="trait-label">{t.label}</span>
              </div>
            ))}
          </div>
          <div className="fun-facts fade-up d3">
            <div className="fact"><span className="fact-num" data-target="3">0</span><span className="fact-label">Projects</span></div>
            <div className="fact"><span className="fact-num" data-target="5">0</span><span className="fact-label">Tech Stacks</span></div>
            <div className="fact"><span className="fact-num" data-target="2">0</span><span className="fact-label">Certifications</span></div>
          </div>
          <a href="/Kadari_Saikumar_Resume.pdf" download className="btn-primary fade-up d4" style={{ display: 'inline-flex' }}>
            Download Résumé ↓
          </a>
        </div>
      </div>
    </section>
  )
}
