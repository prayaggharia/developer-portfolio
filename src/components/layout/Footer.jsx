import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import '../../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">PG</span>
        <p className="footer__tagline">// building enterprise software with precision</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/prayagraj-gharia-13000611b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link"><FaLinkedin size={18} /></a>
          <a href="https://github.com/prayaggharia" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__social-link"><FaGithub size={18} /></a>
          <a href="mailto:prayag.gharia98@gmail.com" aria-label="Email" className="footer__social-link"><HiEnvelope size={18} /></a>
        </div>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Prayagraj Gharia. Crafted with React.</p>
      </div>
    </footer>
  );
}
