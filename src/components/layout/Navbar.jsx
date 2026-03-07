import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import '../../css/Navbar.css';

const navItems = [
    { to: 'about', label: 'about' },
    { to: 'skills', label: 'skills' },
    { to: 'experience', label: 'xp' },
    { to: 'contact', label: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        if (!isHome) navigate('/');
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -72 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="navbar__inner">
                {isHome ? (
                    <ScrollLink to="hero" smooth duration={500} className="navbar__logo">PG</ScrollLink>
                ) : (
                    <span className="navbar__logo" onClick={handleLogoClick}>PG</span>
                )}

                <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
                    {isHome && navItems.map(item => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            smooth
                            duration={500}
                            offset={-72}
                            spy
                            activeClass="active"
                            onClick={() => setOpen(false)}
                            className="navbar__link"
                        >
                            {item.label}
                        </ScrollLink>
                    ))}
                    {!isHome && (
                        <span className="navbar__link" onClick={() => { navigate('/'); setOpen(false); }}>
                            home
                        </span>
                    )}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar__resume-btn">
                        ./resume
                    </a>
                </div>

                <div className="navbar__actions">
                    <button
                        className="navbar__projects-btn"
                        onClick={() => navigate('/projects')}
                        title="Projects"
                    >
                        ./projects
                    </button>
                    <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
                    </button>
                    <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
