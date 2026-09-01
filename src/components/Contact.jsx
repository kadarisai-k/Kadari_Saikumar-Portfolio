export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Let's Connect</h2>
          <span className="section-kicker">Get In Touch</span>
        </div>
        <div className="contact-grid contact-grid-single">
          <div className="fade-up">
            <div className="contact-info-title">Get In Touch</div>
            <p className="contact-info-subtitle">
              I'm actively looking for full-time Full-Stack Developer roles. If you're hiring or just
              want to talk shop, my inbox is always open.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="cc-icon">📧</div>
                <div><div className="cc-label">Email</div><div className="cc-value"><a href="mailto:saikumar260303@gmail.com">saikumar260303@gmail.com</a></div></div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">📱</div>
                <div><div className="cc-label">Phone</div><div className="cc-value"><a href="tel:+919154442111">+91 9154442111</a></div></div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">📍</div>
                <div><div className="cc-label">Location</div><div className="cc-value">Hyderabad, Telangana, India</div></div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">💼</div>
                <div><div className="cc-label">LinkedIn</div><div className="cc-value"><a href="https://www.linkedin.com/in/kadarisaikumar/" target="_blank" rel="noopener noreferrer">kadarisaikumar</a></div></div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">🐙</div>
                <div><div className="cc-label">GitHub</div><div className="cc-value"><a href="https://github.com/kadarisai-k" target="_blank" rel="noopener noreferrer">kadarisai-k</a></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
