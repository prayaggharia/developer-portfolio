import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experience } from '../../data/experience';
import '../../css/Experience.css';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="xp" ref={ref}>
      <motion.div
        className="xp__header"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="xp__label">// experience</span>
        <h2 className="xp__title">Career Timeline</h2>
      </motion.div>

      <div className="xp__timeline">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`xp__item ${i % 2 === 0 ? 'xp__item--left' : 'xp__item--right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <div className="xp__dot" />
            <div className="xp__card">
              <div className="xp__card-head">
                <span className="xp__period">{exp.period}</span>
                <span className="xp__type">{exp.type}</span>
              </div>
              <h3 className="xp__role">{exp.role}</h3>
              <h4 className="xp__company">{exp.company} · {exp.location}</h4>
              <p className="xp__desc">{exp.description}</p>
              <ul className="xp__highlights">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="xp__highlight">{h}</li>
                ))}
              </ul>
              <div className="xp__tech-row">
                {exp.tech.map(t => (
                  <span key={t} className="xp__tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
