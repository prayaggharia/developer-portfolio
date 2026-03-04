import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { theme } from '../../styles/theme';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Header = styled(motion.div)`
  margin-bottom: 2rem;
`;

const Label = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.neon};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: block;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: ${theme.colors.textPrimary};
`;

const Subtitle = styled.p`
  color: ${theme.colors.textSecondary};
  max-width: 500px;
  margin: 0.75rem auto 0;
  font-size: 0.95rem;
  font-family: ${theme.fonts.mono};
`;

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Container ref={ref}>
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Label>// projects</Label>
        <Title>Work & Impact</Title>
        <Subtitle>{'> interactive showcase coming soon_'}</Subtitle>
      </Header>
    </Container>
  );
}
