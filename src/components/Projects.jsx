const PROJECTS = [
  {
    icon: '🍽️',
    name: 'Shree Balaji Raghavendra Udipi',
    desc: 'Full-stack MERN restaurant ordering platform with a customer storefront and a separately deployed admin dashboard — email/OTP login, live order tracking via WebSockets, Razorpay checkout, automated GST invoicing, and transactional email via Brevo.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    live: 'https://udipi.vercel.app',
  },
  {
    icon: '🏢',
    name: 'Nikitha Software Solutions',
    desc: 'Professional corporate website built during internship — responsive UI with polished components, seamless navigation and improved user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    live: 'https://www.nteksol.com/',
  },
  {
    icon: '💼',
    name: 'NTek Europe — Recruitment Platform',
    desc: 'Multi-page React recruitment platform integrating a live job feed from the Oorwin ATS with candidate application hand-off, plus serverless Node.js API endpoints (Vercel) for contact, candidate, and employer forms with automated email notifications and résumé uploads.',
    tech: ['React', 'Node.js', 'Vercel'],
    live: 'https://www.nteksol.eu',
  },
]

const GITHUB = 'https://github.com/kadarisai-k'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Selected Work</h2>
          <span className="section-kicker">Production Projects</span>
        </div>

        <div className="featured-project fade-up">
          <div className="proj-mockup">
            <div className="proj-mockup-bar"><span className="pmb"></span><span className="pmb"></span><span className="pmb"></span></div>
            <div className="proj-mockup-url">🔒 tanvi-luxury-store.vercel.app</div>
            <div className="proj-mock-content">
              <div className="h">Tanvi Luxury Store</div>
              <div className="p">Full-Stack MERN E-Commerce Platform</div><br />
              <div className="p">✓ Razorpay Checkout &nbsp; ✓ Admin Dashboard &nbsp; ✓ OTP Login</div>
              <div className="p">Storefront · Admin Panel · Sales Analytics</div>
            </div>
          </div>
          <div className="proj-info">
            <span className="proj-featured-label">FEATURED PROJECT</span>
            <h3 className="proj-title">Tanvi Luxury Store</h3>
            <p className="proj-desc">
              A full-stack MERN e-commerce platform (React/Vite) with a customer storefront and a
              separate admin dashboard — OTP-based login, guest-to-user cart sync, and a 4-category
              product catalog. Backend built with Node.js/Express/MongoDB, featuring server-verified
              Razorpay payments, Cloudinary image uploads, automated order-status emails, and admin
              tools for sales analytics, Excel export, and PDF invoices.
            </p>
            <div className="proj-tech">
              {['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'].map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="proj-links">
              <a href="https://tanvi-luxury-store.vercel.app" target="_blank" rel="noopener noreferrer" className="proj-btn">Live Demo ↗</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="proj-btn ghost">GitHub</a>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className={`proj-card fade-up ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`} key={p.name}>
              <div className="proj-card-img"><span className="proj-card-img-icon">{p.icon}</span></div>
              <div className="proj-card-body">
                <h4 className="proj-card-name">{p.name}</h4>
                <p className="proj-card-desc">{p.desc}</p>
                <div className="proj-card-tech">
                  {p.tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                </div>
                <div className="proj-card-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-card-btn primary">Live →</a>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="proj-card-btn">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-wrap fade-up">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn-secondary">View All Projects on GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
