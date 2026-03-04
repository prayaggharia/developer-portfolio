import StackCard from '../components/layout/StackCard';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function HomePage() {
    return (
        <main className="card-stack-container">
            <Hero />
            <StackCard index={0} id="about">
                <About />
            </StackCard>
            <StackCard index={1} id="skills">
                <Skills />
            </StackCard>
            <StackCard index={2} id="experience">
                <Experience />
            </StackCard>
            <StackCard index={3} id="contact">
                <Contact />
            </StackCard>
        </main>
    );
}
