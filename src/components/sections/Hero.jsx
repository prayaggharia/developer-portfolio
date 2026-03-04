import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { HiArrowDown, HiDocumentArrowDown } from 'react-icons/hi2';
import '../../css/Hero.css';

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } }
});

export default function Hero() {
    const glowRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!glowRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        glowRef.current.style.left = (e.clientX - rect.left) + 'px';
        glowRef.current.style.top = (e.clientY - rect.top) + 'px';
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!glowRef.current) return;
        glowRef.current.style.left = '-500px';
        glowRef.current.style.top = '-500px';
    }, []);

    return (
        <section className="hero" id="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="hero__grid" />
            <div className="hero__scanlines" />
            <div className="hero__cursor-glow" ref={glowRef} />

            <div className="hero__content">
                <motion.h1 className="hero__title" variants={fadeUp(0.15)} initial="hidden" animate="visible">
                    Hi, I'm <span className="hero__name-glow">Prayag</span>
                </motion.h1>

                <motion.div className="hero__typewriter" variants={fadeUp(0.3)} initial="hidden" animate="visible">
                    <TypeAnimation
                        sequence={[
                            '> Full Stack Developer', 2000,
                            '> .NET Engineer', 2000,
                            '> SQL Performance Architect', 2000,
                            '> AI Technology Enthusiast', 2000,
                            '> Web Analytics Developer', 2000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                        cursor={false}
                    />
                </motion.div>

                <motion.p className="hero__desc" variants={fadeUp(0.45)} initial="hidden" animate="visible">
                   <strong>Full-Stack Developer</strong> based in Thunder Bay, ON.
                    <br />3+ years building production software.
                </motion.p>

                <motion.div className="hero__cta-row" variants={fadeUp(0.6)} initial="hidden" animate="visible">
                    <RouterLink to="/projects">
                        <button className="hero__btn-primary">Projects</button>
                    </RouterLink>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero__btn-secondary">
                        <HiDocumentArrowDown size={16} /> ./resume.pdf
                    </a>
                </motion.div>

                <motion.div className="hero__stats" variants={fadeUp(0.75)} initial="hidden" animate="visible">
                    <div className="hero__stat"><span className="hero__stat-num">3+</span><span className="hero__stat-label">Years</span></div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat"><span className="hero__stat-num">15+</span><span className="hero__stat-label">Technologies</span></div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat"><span className="hero__stat-num">3</span><span className="hero__stat-label">Companies</span></div>
                </motion.div>
            </div>

            <motion.div className="hero__scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <Link to="about" smooth duration={500} offset={-72}>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <HiArrowDown size={20} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
