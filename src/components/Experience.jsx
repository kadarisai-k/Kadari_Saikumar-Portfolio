const EXPERIENCE = [
  {
    date: 'JAN 2026 — JUL 2026',
    title: 'Full Stack Developer',
    org: 'Nikitha Software Solutions · Hyderabad, Telangana',
    detail: 'Developed and maintained web applications using modern frontend and backend technologies. Built responsive UI components and integrated backend services to deliver scalable, user-friendly solutions.',
  },
]

const EDUCATION = [
  {
    date: 'JUNE 2021 — MAY 2025',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Kalasalingam Academy of Research and Education, Tamil Nadu',
    detail: 'CGPA: 8.29 / 10.0 · Specialized in web development and software engineering, built multiple full-stack projects throughout the program.',
  },
  {
    date: 'JUNE 2019 — MAY 2021',
    title: 'Higher Secondary (MPC)',
    org: 'Sri Chaitanya Junior College, Telangana',
    detail: 'Percentage: 95.8% · Mathematics, Physics, Chemistry',
  },
  {
    date: 'JUNE 2018 — MAY 2019',
    title: 'Secondary Education (10th)',
    org: 'CMR High School, Telangana',
    detail: 'CGPA: 8.7 / 10.0',
  },
]

const CERTS = [
  { icon: '🏆', name: 'Full-Stack Developer Course', issuer: 'Grow.tech', date: 'Aug 2025 — Nov 2025' },
  { icon: '☕', name: 'Java Full Course Completion', issuer: 'Udemy', date: '2023' },
  { icon: '🌐', name: 'Frontend & Web Development', issuer: 'Practical Experience', date: '2024 – 2025' },
]

function TimelineItem({ item, alt }) {
  return (
    <div className="tl-item fade-up">
      <div className={`tl-dot ${alt ? 'alt' : ''}`}></div>
      <div className="tl-date">{item.date}</div>
      <div className="tl-title">{item.title}</div>
      <div className="tl-org">{item.org}</div>
      <div className="tl-detail">{item.detail}</div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experience &amp; Education</h2>
          <span className="section-kicker">Timeline</span>
        </div>

        <div className="tl-section-title">Experience</div>
        <div className="timeline-wrap">
          {EXPERIENCE.map((e) => <TimelineItem item={e} key={e.title} />)}
        </div>

        <div className="tl-section-title">Education</div>
        <div className="timeline-wrap">
          {EDUCATION.map((e) => <TimelineItem item={e} alt key={e.title} />)}
        </div>

        <div className="certs-grid">
          {CERTS.map((c) => (
            <div className="cert-card fade-up" key={c.name}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-date">{c.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
