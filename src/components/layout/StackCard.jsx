import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../css/StackCard.css';

export default function StackCard({ children, index = 0, id }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="stack-card" style={{ zIndex: index + 1 }} ref={ref}>
      <motion.section
        id={id}
        className="stack-card__surface"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="stack-card__neon-edge" />
        {children}
      </motion.section>
    </div>
  );
}
