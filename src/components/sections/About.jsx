import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HiCpuChip, HiUserGroup, HiRocketLaunch, HiAcademicCap } from 'react-icons/hi2';
import Tilt from 'react-parallax-tilt';
import '../../css/About.css';

const values = [
  { icon: HiCpuChip, title: 'Clean Architecture', desc: 'Maintainable, scalable code' },
  { icon: HiUserGroup, title: 'Team Leadership', desc: 'Leading squads & agile processes' },
  { icon: HiRocketLaunch, title: 'Performance First', desc: 'Optimized queries & load times' },
  { icon: HiAcademicCap, title: 'Always Learning', desc: 'Backend → fullstack growth' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="about" ref={ref}>
      <motion.div className="about__header" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <span className="about__label">// about</span>
        <h2 className="about__title">A Little About Me</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div className="about__text" initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <p>I am a <strong>Full Stack Developer</strong> based in Thunder Bay, Ontario, with 3+ years of professional experience building and maintaining enterprise web applications.</p>
          <p>My journey started at <strong>Tata Consultancy Services</strong> in India, where I worked on large scale web platforms and developed a strong foundation in JavaScript, TypeScript, and data driven development. After completing my <strong>Master's in Computer Science</strong> at Lakehead University in Canada, I joined <strong>Sencia Canada</strong> where I architect and maintain full stack applications using <strong>C#, ASP.NET, SQL Server, and JavaScript</strong>.</p>
          <p>I am currently looking for opportunities in Canada where I can contribute to a product focused team and keep growing as a developer.</p>
        </motion.div>

        <motion.div className="about__values" initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          {values.map(({ icon: Icon, title, desc }, i) => (
            <Tilt key={title} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={400}>
              <motion.div className="about__value-card" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}>
                <div className="about__value-icon"><Icon size={18} /></div>
                <h4 className="about__value-title">{title}</h4>
                <p className="about__value-desc">{desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
