import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skills } from '../../data/skills';
import Tilt from 'react-parallax-tilt';
import '../../css/Skills.css';

const allSkills = Object.entries(skills).flatMap(([key, cat]) =>
  cat.items.map(item => ({ ...item, category: key, categoryTitle: cat.title }))
);
const categories = ['all', ...Object.keys(skills)];
const categoryLabels = { all: 'All', ...Object.fromEntries(Object.entries(skills).map(([k, v]) => [k, v.title])) };

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (i) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: 'easeOut' }
  }),
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } }
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState('all');

  const filtered = useMemo(() =>
    active === 'all' ? allSkills : allSkills.filter(s => s.category === active),
    [active]
  );

  return (
    <div className="skills" ref={ref}>
      <motion.div
        className="skills__header"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="skills__label">// skills</span>
        <h2 className="skills__title">Tech Stack</h2>
        <p className="skills__subtitle">Click a category to filter</p>
      </motion.div>

      <motion.div
        className="skills__filters"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {categories.map(cat => (
          <button
            key={cat}
            className={`skills__filter-tab ${active === cat ? 'skills__filter-tab--active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </motion.div>

      <motion.div className="skills__grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={400}>
                <div className="skills__card">
                  <span className="skills__card-name">{skill.name}</span>
                  <span className="skills__card-category">{skill.categoryTitle}</span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
