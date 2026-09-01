const LEARNING = [
  { icon: '🐳', name: 'Docker', label: 'Containers' },
  { icon: '☁️', name: 'AWS Basics', label: 'Cloud' },
  { icon: '🔷', name: 'TypeScript', label: 'Deepening' },
  { icon: '🤖', name: 'AI Automation', label: 'Workflows' },
  { icon: '🧩', name: 'DSA / LeetCode', label: 'Problem Solving' },
]

export default function Learning() {
  return (
    <section id="learning">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Currently Exploring</h2>
        </div>
        <div className="learning-grid">
          {LEARNING.map((l, i) => (
            <div className={`learn-card fade-up ${i ? `d${Math.min(i, 4)}` : ''}`} key={l.name}>
              <span className="learn-icon">{l.icon}</span>
              <div className="learn-name">{l.name}</div>
              <div className="learn-label">{l.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
