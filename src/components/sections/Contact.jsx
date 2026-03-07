import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../../css/Contact.css';

const contactLinks = [
  { icon: HiEnvelope, label: 'prayag.gharia98@gmail.com', href: 'mailto:prayag.gharia98@gmail.com' },
  { icon: FaLinkedin, label: 'linkedin.com/in/prayagrajgharia', href: 'https://www.linkedin.com/in/prayagraj-gharia-13000611b/' },
  { icon: FaGithub, label: 'github.com/prayaggharia', href: 'https://github.com/prayaggharia' },
  { icon: HiMapPin, label: 'Thunder Bay, Ontario, Canada', href: null },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:prayag.gharia98@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`);
  };

  return (
    <div className="contact" ref={ref}>
      <motion.div className="contact__header" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <span className="contact__label">// contact</span>
        <h2 className="contact__title">Let's Connect</h2>
        <p className="contact__subtitle">Open to full-time opportunities across Canada</p>
      </motion.div>

      <div className="contact__grid">
        <motion.div className="contact__info" initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="contact__links">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <div key={label} className="contact__link-item">
                <div className="contact__link-icon"><Icon size={16} /></div>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer" className="contact__link-text">{label}</a>
                  : <span className="contact__link-span">{label}</span>
                }
              </div>
            ))}
          </div>
          <div className="contact__avail"><span className="contact__avail-dot" />ready to deploy</div>
        </motion.div>

        <motion.form className="contact__form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="contact__group">
            <label className="contact__form-label">name</label>
            <input className="contact__input" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="contact__group">
            <label className="contact__form-label">email</label>
            <input className="contact__input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="contact__group">
            <label className="contact__form-label">message</label>
            <textarea className="contact__textarea" placeholder="Tell me about the opportunity..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
          </div>
          <button type="submit" className="contact__submit">$ send_message</button>
        </motion.form>
      </div>
    </div>
  );
}
