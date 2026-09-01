const FRONTEND = [
  { name: 'React.js', pct: 85 },
  { name: 'Angular', pct: 85 },
  { name: 'JavaScript (ES6+)', pct: 88 },
  { name: 'TypeScript', pct: 80 },
  { name: 'HTML5 / CSS3', pct: 90 },
  { name: 'Bootstrap', pct: 85 },
]

const BACKEND = [
  { name: 'Node.js', pct: 80 },
  { name: 'Express.js', pct: 78 },
  { name: 'REST APIs', pct: 85 },
]

const DATABASE = ['MongoDB']
const TOOLS = ['Git / GitHub', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Postman']

function SkillBar({ name, pct }) {
  return (
    <div className="skill-item">
      <div className="skill-top"><span>{name}</span><span className="skill-pct">{pct}%</span></div>
      <div className="skill-bar"><div className="skill-fill" data-pct={pct}></div></div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Skills</h2>
          <span className="section-kicker">Tools &amp; Technologies</span>
        </div>
        <div className="skills-grid">
          <div className="skill-cat fade-up">
            <div className="skill-cat-title">Frontend</div>
            {FRONTEND.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="skill-cat fade-up d1">
            <div className="skill-cat-title">Backend</div>
            {BACKEND.map((s) => <SkillBar key={s.name} {...s} />)}
            <div className="skill-cat-title" style={{ marginTop: 22 }}>Database</div>
            <div className="skill-pills">
              {DATABASE.map((d) => <span className="spill" key={d}>{d}</span>)}
            </div>
          </div>
          <div className="skill-cat fade-up d2">
            <div className="skill-cat-title">Tools &amp; DevOps</div>
            <div className="skill-pills" style={{ marginBottom: 22 }}>
              {TOOLS.map((t) => <span className="spill" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
